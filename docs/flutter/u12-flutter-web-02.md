---
title: "Flutter2 for Web，跨域篇"
date: 2021-03-21
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

上篇 [Flutter2 for Web，写了个博客站点，已上线](https://juejin.cn/post/6940962419355156494)，我们简单的封装了下网络请求。我们很愉快的将项目运行到 Chrome 上，但是迟迟未见数据，通过开发者工具，报如下错误：

![-w852](http://blog.oldbird.run/mweb/16161411424428.png)

这是一个跨域报错。

我们的网页地址是 `http://localhost:62924`，然后页面有发送个请求，请求的接口域名是
`d6579fc5-c18b-443b-a2ef-01c2b6be51d5.bspapp.com`, 那么他俩的域名不一致，出现跨域。受到了同源策略的保护因此无法进行数据交互。

## 什么是跨域

> 协议、域名、端口全部相同才算同一域下，三个条件有一个不一致，都不算同域，既跨域。

即使是我们自己的域名服务器，而二级域名或三级域名不一致，也会出现跨域，如：`http://img.loveli.site` 与 `http://blog.oldbird.run` 之间需要数据交互，就跨域了。

由于现在所有的浏览器都实行了[同源策略](https://en.wikipedia.org/wiki/Same-origin_policy)。

同源策略由 Netscape 公司在 1995 年引入浏览器：在发送 Ajax 请求时，只接收同域服务器响应的数据资源。

同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

## 跨域的解决方案

如何能够使两个不同域下的数据进行顺利交互？早期最为典型方案有：

- JSONP
- 同域代理

**JSONP** 是利用了 script 标签的 src 属性来实现跨域数据交互的，因为浏览器解析 HTML 代码时，原生具有 src 属性的标签，浏览器都赋予其 HTTP 请求的能力，而且不受跨域限制，使用 src 发送 HTTP 请求，服务器直接返回一段 JS 代码的函数调用，将服务器数据放在函数实参中，前端提前写好响应的函数准备回调，接收数据，实现跨域数据交互；

```dart
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};
```

**同域代理**就是使用 Ajax 向同域下的后台发送请求，同时携带真实请求的地址及参数，后台接受请求后直接根据地址及参数 **转发请求**，因为后台是可以直接模拟 HTTP 客户端发送请求的，所以没有跨域问题，而后台接受到响应数据后再原样返回给前端浏览器，从而实现跨域数据交互；

JSONP 和同域代理，本质上并没有解决 Ajax 跨域的问题，只是绕开这个问题而另辟蹊径实现的跨域数据交互，在数据交互层面上可以看做技术不成熟时的临时解决方案；但是 JSONP 和同域代理使用了很多年，当然跨域问题也存在了很多年，终于有人看不下去了，提出了浏览器与服务器跨域通信的安全性通信策略————跨域资源共享，简称 **CORS**;

## CORS（线上解决方案）

CORS 是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，是跨源 AJAX 请求的根本解决方法。

CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。

因本文的特殊性，我们不去修改服务器，所以服务器如何实现 CORS 就不过多阐述。如果想更多的了解 CORS，可阅读：

- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
- [跨源资源共享（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

## 请求转发（开发场景）

因为我们不想去修改线上服务器，那么如何解决跨域问题？

其实也简单，我们本地实现代理转发服务器，且配置 CORS。

那么接下来，带大家一起来实现

### 创建 cli 工程

如何创建一个 cli 应用？

- 第一步安装 dart：

  ```sh
  $ brew tap dart-lang/dart
  $ brew install dart
  ```

- 创建 cli 命令行应用：

  ```dart
  $ dart create -t console-full cli
  ```

  使用 dart create 命令，以 console-full 模板创建 cli 项目

  ![-w299](http://blog.oldbird.run/mweb/16162289250798.png)

  - `bin/cli.dart`，该文件包含一个顶层 main() 函数。该函数是你应用的入口
  - `lib/cli.dart`，包含一些功能性的函数方法，这些函数方法将会导入到 bin/cli.dart 文件中。
  - `pubspec.yaml`，包含应用的元数据，包括应用依赖的 package 信息以及所需的版本等，跟 Flutter 工程一样

- 运行应用
  ```dart
  $ cd cli
  $ dart run
  Hello world: 42!
  ```

到这里我们就完成了一个 cli 应用，接下来我们来实现代理服务器。

### 代理服务器

因为网页我们现在是通过 `localhost` 进行访问的，所以我们需要创建一个本地服务器，对请求进行转发。

我们搭建一个端口为 4500 的代理服务器。

首先我们需要在 `pubspec.yaml` 引入 [`shelf_proxy`](https://pub.dev/packages/shelf_proxy)：

```yaml
shelf_proxy: ^0.1.0+7
```

然后在 `bin/cli.dart` 中实现：

```dart
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_proxy/shelf_proxy.dart';

void main(List<String> arguments) async {

  var reqHandle = proxyHandler("https://d6579fc5-c18b-443b-a2ef-01c2b6be51d5.bspapp.com");

  /// 绑定本地端口，4500，转发到真正的服务器中
  var server = await shelf_io.serve(reqHandle, 'localhost', 4500);

  // 这里设置请求策略，允许所有
  server.defaultResponseHeaders.add('Access-Control-Allow-Origin', '*');
  server.defaultResponseHeaders.add('Access-Control-Allow-Credentials', true);
  print('Serving at http://${server.address.host}:${server.port}');
}
```

通过 shelf_proxy 很快就实现了个简单的代理服务器，再次运行

```dart
$ dart run
Serving at http://localhost:4500
```

接下来，我们需要修改 `web-demo` 的代码，在 `lib/config.dart` 中：

```dart
/// 开发环境
class ConfigDebug extends Config {
  @override
  String get baseUrl => "http://localhost:4500/http/";
}
```

在 ConfigDebug 中，将 baseUrl 设置为我们本地代理服务器的地址。

然后在 `locator.dart`，实现如果是 debug 环境就配置为 ConfigDebug ：

```dart
  // 配置项目环境
  if (kDebugMode) {
    locator.registerSingleton<Config>(ConfigDebug());
  } else {
    locator.registerSingleton<Config>(ConfigProduct());
  }
```

重新运行我们的项目：

![-w1856](http://blog.oldbird.run/mweb/16162322038723.png)

数据请求成功了！

## 总结

跨域，在开发中是非常容易遇到的。解决方案，由早期通过 `JSONP` 和同域代理(当然还有其他的方法)的方案，但是没有根本解决问题。比较合理的做法是通过服务器实现 CORS。

我们没有给线上服务器配置 CORS，直接创建本地服务器且配置了 CORS，转发请求到线上，起到一个中转的作用。算是自给自足吧！

## 参阅

- [所有人都应该知道的跨域及 CORS](https://zhuanlan.zhihu.com/p/53996160)
- [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
- [Get started: command-line and server apps](https://dart.dev/tutorials/server/get-started)
