---
title: "Flutter for Web，网络篇"
date: 2021-03-18
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

Flutter 迎来了它的的第二个大版本 `Flutter2`，其中最大变更之一就是对 Web 的生产质量有了新的支持，已经从 Beta 测试顺利转正。

常言道“是骡是马，拉出来溜溜”，写个项目验证下是非常有必要的。

> 因在写本文时，已完成项目编写，可优先体验项目成果：[http://webdemo.loveli.site](http://webdemo.loveli.site)

本项目将参照我的微信小程序 `OldBirds` 的功能，实现文章列表、文章详情、分类文章列表等页面，数据是通过 api 动态获取的。

> OldBirds 小程序里除了更新自己的博客外，也会推荐一些优质文章供大家阅读，欢迎体验

那么下面将从零开始讲解这个项目的实现过程。因为从 0 到 1 也不是件容易的事情，所以会分 N 篇文章讲解。大体有以下内容：

- 项目搭建
- 网络请求的封装
- 项目环境的封装
- 实现首页，请求跨域问题
- 状态管理封装
- 页面适配
- 路由 2.0 的封装
- url 策略
- 项目打包、部署上线

## 搭建环境，创建初始项目

因本人习惯每个 Flutter 项目对应各自的 Flutter 版本，所以采用 [fvm](https://github.com/leoafarias/fvm) 进行 Flutter 的版本管理。如果您不熟悉如何使用 fvm，不防阅读下我之前写的文章：

- [Flutter 2.0 顺滑撤回， web 初体验](https://juejin.cn/post/6935631938673721381)
- [FVM 愉快的切换 Flutter 版本，强烈推荐！](https://github.com/leoafarias/fvm)

创建项目的大致命令如下：

```sh
$ mkdir web-demo # 创建目录
$ cd web-demo # 进入目录
$ fvm install stable  # 安装flutter stable channel 的版本
$ fvm use stable --force # web-demo 使用 stable 版本
$ fvm flutter create .  # 生成以 web-demo 为项目名的工程
$ fvm flutter run -d Chrome # 运行到 Chrome 上
```

当项目成功运行，自动打开浏览器显示页面的时候，说明我们成功的创建了 web-demo 工程。后面就是往项目中添砖加瓦，补充血液了。

## 项目结构规划

那么接下来，我们一起搭建项目的基本骨架：

![](http://blog.oldbird.run/mweb/16159034356181.png)

- assets：images、files、fonts 等资源文件
- components：存放的是公共组件，重业务型
- config：项目的环境配置，比如 debug，product，preview 各环境的配置
- core：轻业务型工具类，或者公共组件，可以方便移植到其他项目
- models：模型类，json 数据解析
- pages：页面
- router：路由
- services：一些第三方库的封装、网络请求等
- style：公共的样式，颜色，字体，尺寸等

以上的目录规划，是根据自己的经验总结划分的，你也可以按自己项目结构的来。但组件、页面、路由、资源、环境、服务基本上是达成了行业共识，很多项目都这么划分。

完成基本划分后，接下来，我们从哪里下手？

通常在开发的时候，我们会先有 UI 设计稿和需求文档，然后我们开始编写静态 UI，待后端同学接口完成，继续对接接口，然后测试，改 bug，发版。

本项目比较特殊，已有 API 接口和数据，所以我们可以优先封装网络请求。

## 网络封装

Flutter 网络请求，通常会使用 `dio` 插件。

那么首先在 servers 目录下创建文件`api.dart`，定义一个接口 `Api`：

```dart
abstract class Api {

  /// 获取文章列表
  /// [categoryId] 是文章分类id
  Future<Map> fetchArticleList({int pageNo, int pageSize = 20, String categoryId});

  /// 获取文章详情
  Future<Map> fetchArticleDetail({String articleId});
}
```

然后我们在定义一个实现类：

```dart
class ApiImpl implements Api {
  Dio _dio;

  ApiImpl() {
    _dio = Dio(
      BaseOptions(baseUrl: 'baseurl.com', connectTimeout: 20000, receiveTimeout: 20000),
    );
  }

  /// 接口请求
  Future<Map> fetchArticleList({int pageNo, int pageSize = 20, String categoryId}) async {
    final response = await _dio.get('list', queryParameters: {
      'pageNo': pageNo,
      'pageSize': pageSize,
      "category_id": categoryId,
    });
    Map data = response.data;
    return data;
  }

  Future<Map> fetchArticleDetail({String articleId}) async {
    final response = await _dio.get('detail', queryParameters: {
      'article_id': articleId,
    });
    Map data = response.data;
    return ValueUtil.toMap(data['data']);
  }
}
```

以上就是我们完成 dio 的二次封装。抽出 Api 基类，ApiImpl 进行实现，这样封装的好处是在调用 Api 的地方不需要 dio 的细节，然后如果你哪天不用 dio，用其他的请求库，那么你只需要改 `ApiImpl` 的实现即可。

那么上面的代码有没有比较突出的问题呢？我们一起来分析下

## 问题分析

### baseurl 问题

代码中 ApiImpl 的 `baseurl.com` 是有问题的。因为在开发环境，我们可能用的是 `localhost`，在线上环境才是 `baseurl.com`。

那么很快有人会说可以通过 `kDebugMode` 区分正式环境或者是开发环境。

```dart
BaseOptions(baseUrl: kDebugMode ? 'localhost': 'baseurl.com', connectTimeout: 20000, receiveTimeout: 20000),
```

如果只有两个环境，确实可以这么干。但是如果有一天，新增了个预发布环境，那么这个时候 kDebugMode 就不受用了，无法通过 bool 类型去区分 3 种情况。

还有一种情况是，各环境除了 baseUrl 不一样，其他的一些配置如 `connectTimeout` 也可能需要不同的值，那么就会有很多`kDebugMode?:`的判断。

该如何解决？

对于 baseurl 的分析我们引出了 2 个问题：

- baseurl 的值跟环境有关
- 如果有多个值都跟环境有关，需要进行很多判断

假设我们现在的 baseurl 有三个：

1. 在 debug 环境的时候，是 a.com
2. 在 preview 环境的时候，是 b.com
3. 在 product 环境的时候，是 c.com

我们一开始的关注点在 baseurl，这次我们换个思考对象：环境。如果环境确定了，那么 baseurl 也就定了。我们可以沿着这个方向思考。

**那么我们如何确认环境？**

通常，有很多人是这么做的：

- env == 1, debug 环境
- env == 2, preivew 环境
- env == 3, product 环境

然后通过设置 `env` 的值来确定环境（也有些人会使用枚举）。

```dart
if (env == 1) {
    baseurl = "a.com";
} else if (env == 2) {
    baseurl = "b.com"
} else if (env == 3) {
    baseurl = "c.com"
}
```

确实这样实现了我们的目的，但是跟环境有关的地方，就会充斥着各种 `if else` 判断，不是很优雅。傲娇的我们不喜欢。

既然变量不喜欢，那我们就整一个类吧，不就是要一个 baseurl，我们给你：

```dart
abstract class Config {
    String get baseurl; /// 这就是我们想要的
}
```

因为整个应用只有一个环境，我们可以把它作为一个全局变量：

```dart
Config config = Config();
```

但是 Config 是抽象类，所以我们不能直接赋值。我们需要 Config 的实现类，因为有三个环境，所以就实现三个 Config 子类：

```dart
class ConfigDebug extends Config {
  @override
  String get baseurl => "a.com";
}

class ConfigPreview extends Config {
  @override
  String get baseurl => "b.com";
}

class ConfigProduct extends Config {
  @override
  String get baseurl => "c.com";
}
```

如果现在是 debug 环境，那么：

```dart
Config config = ConfigDebug();
```

然后在需要使用 `baseurl` 的地方，直接调用 `config.baseurl`，这个时候我们不再需要任何条件判断。如果我们还需要个客户环境，我们直接创建个 Config 的实现类即可。

还有刚上面说到的 `connectTimeout` 也跟环境有关系，那么可以在 Config 添加 `connectTimeout`：

```dart
abstract class Config {
    String get baseurl; /// 这就是我们想要的
    int get connectTimeout = 2000;
}

class ConfigProduct extends Config {
  @override
  String get baseurl => "c.com";

  @override
  int get connectTimeout = 6000;
}
```

上面代码实现 debug 和 preview 环境的时候 connectTimeout 为 2000，在 product 环境的时候为 6000。

这样封装下来，是不是比全局 env 变量控制优雅多了？

### 调用问题

对于我们封装好的 `ApiImpl` 该如何使用？相信你也看过或者写过类似代码：

```dart
// home.dart
getList() async{
    var res = await ApiImpl().fetchArticleList(pageNo: pageNo);
    //....
}
```

这样调用，确实可以完成接口的请求，项目完美跑起来。但是有想过更优雅的解决方案么？难道 `Api` 这个东西抽出成接口就没啥作用么？很多人会回答，`Api` 抽象类有啥作用，我就没有这个类，没啥卵用，直接 `class ApiImpl {}`。

真的没有价值么，一起来看看下面代码：

```dart
// home.dart
class Home {
    Home({this.api})
    final Api api;
    getList() async{
        var res = await api.fetchArticleList(pageNo: pageNo);
        //....
    }
}

Home(api: ApiImpl())
```

Home 只依赖了 Api，不需要跟 ApiImpl 产生关联。如果 A 在开发的时候，需要完成一个功能，但是这个功能又依赖了 B 写的代码，但 B 又还没时间实现。这个时候，我们需要将我们需要的功能抽象成接口，然后依赖这个抽象基类，这样，即使不提供实现，代码也可以正常编译。当然我们也可以写个临时的实现，让代码能够运行起来。待别人有时间，或者别人的模块已写好，对接相应的接口实现即可。

```dart
class ApiMockImpl implements Api {}

// Home(api: ApiMockImpl())
Home(api: ApiImpl())
```

这样写代码就不怕被别人耽误，同时代码的灵活度也提升了。

对于上面的代码，如果只有 Home 这一个类，改起来还是挺容易的，但是像网络请求这种，可能就会散落在 N 处，那么我们就需要将 N 处 `ApiMockImpl` 替换为 `ApiImpl`，是不是很蛋疼。要是能只改一个地方就好了，接下来我们就这个问题给出了实现方案。

### 依赖注入

```dart
Config config = ConfigDebug();
```

全局变量对于我们来说，是程序数据 “同步” 的最方便最快捷的方式。

- 内存地址固定，读写效率比较高。
- 全局可见，任何一个函数或线程都可以读写全局变量

非常简单灵活，然后太过自由，修改的风险性就越高。全局变量破坏了函数的封装性能，由于多个函数都可能使用全局变量，函数执行时全局变量的值可能随时发生变化，那么同样的输入就不一定有同样的输出。对于程序的查错和调试都非常不利，可靠性大打折扣。

```sh
如果不是万不得已，最好不要使用全局变量
```

所以怎么办？可以采用单例。但是我们 Config 不适合作为一个单例。所以我们需要一个单例对象，然后 Config 作为其一个属性。

```dart
class SomeSharedInstance {
    // 单例公开访问点
  factory SomeSharedInstance() =>_sharedInstance()

  // 静态私有成员，没有初始化
  static SomeSharedInstance _instance;

  // 私有构造函数
  SomeSharedInstance._() {
    // 具体初始化代码
  }

  // 静态、同步、私有访问点
  static SomeSharedInstance _sharedInstance() {
    if (_instance == null) {
      _instance = SomeSharedInstance._();
    }
    return _instance;
  }

  Config config;
}
```

然后在使用 config 的时候，我们需要做类似操作：

```dart
SomeSharedInstance()
    ..config = ConfigDebug();

// SomeSharedInstance().config.baseurl;
```

> 我个人觉得一个普通应用就一个单例基本够用。

写到这里，强烈推荐一个插件 [get_it](https://github.com/fluttercommunity/get_it)，非常适合我们现在这个场景。将创建的代码解耦。

> 服务定位模式（Service Locator Pattern）是一种软件开发中的设计模式，通过应用强大的抽象层，可对涉及尝试获取一个服务的过程进行封装。该模式使用一个称为"Service Locator"的中心注册表来处理请求并返回处理特定任务所需的必要信息.
> 来自: [Service Locator 模式](https://www.cnblogs.com/gaochundong/archive/2013/04/12/service_locator_pattern.html)

在 lib 目录下创建 `locator.dart`：

```dart

GetIt locator = GetIt.instance;

setupLocator() {
  // 配置项目环境
  if (kDebugMode) {
    locator.registerSingleton<Config>(ConfigDebug());
  } else {
    locator.registerSingleton<Config>(ConfigProduct());
  }
  /// 这里就实现了改一处实现全局替换
  locator.registerLazySingleton<Api>(() => ApiImpl());
}
```

这样就实现了服务的注册。然后在 `main.dart` 中调用 `setupLocator()`:

```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await setupLocator();
  runApp(MyApp());
}
```

在需要使用服务的时候，如需要获取 Config 的配置，直接调用 `locator<Config>()` 即可：

```dart
class ApiImpl implements Api {
  Dio _dio;

  ApiImpl() {
    _dio = Dio(
      BaseOptions(baseUrl: locator<Config>().baseUrl, connectTimeout: 20000, receiveTimeout: 20000),
    );
  }
}
```

还有也顺带解决了 `ApiImpl` 的调用可能多处修改的问题。

```dart
getList() async{
    var res = await locator<Api>().fetchArticleList(pageNo: pageNo);
    //....
}
```

更多 get_it 的使用，可以参考其[文档](https://pub.dev/packages/get_it)。

## 章节总结

本文我们带大家实现了：

- 网络请求的封装
- 项目环境的封装

在封装过程中，我们不断的让代码变得优雅些、灵活些。设计是个不断迭代的过程，不断的优化，思考就能离目标越来越近。

总之，切记：以抽象为基准比以细节为基准搭建起来的架构要稳定得多，因此在拿到需求后，要面相接口编程，先顶层设计再细节地设计代码结构。

最后本项目的源码已上传到 github 中：[swiftdo/web-demo](https://github.com/swiftdo/web-demo)

如果想加入微信交流群的话，请关注微信公众号：**OldBirds**

当然文章可能有理解不当的地方，欢迎大牛们指出。下一章节我们将会讲状态管理的内容，敬请期待！
