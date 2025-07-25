---
title: Flutter 是如何渲染的？
date: 2021-01-11T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/tg3tiep4/
---

Flutter 是如何渲染的？

```dart
Everything’s a widget
```

Widget 是 Flutter 的核心部分，那么 Flutter 是如何将 Widget 渲染到屏幕的呢？

## Flutter 架构

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73b26fe1d8c34bd1adac948fcb47ee12~tplv-k3u1fbpfcp-zoom-1.image)

Flutter 架构分为三层：Dart Framework、C++ Engine、 Platform Embedder。

**Dart Framework**

提供了响应式的开发框架，使用 Dart 开发，它对渲染逻辑做了统一封装，屏蔽了底层实现，对底层 C++ Engine 提供双向通信能力，开发者只需要组合 Widgets 用于构建 App 视图即可。

- 最底层的 Foundation 层提供一些最基础的抽象类或定义，基于此， Animation 动画、Painting 绘制、Gestures 手势等构建出通用抽象能力
- Rendering 层，构建出渲染树 Render Tree，也即 RenderObject Tree，用于具体绘制，RenderObject 会自动随着数据改变而动态改变
- Widgets 层，提供了一套非常丰富的 Widget 组件库，用于构建 Widgets Tree 和 Element Tree，这是响应式编程的基础实现，每一个 RenderObject 都有一个对应的 Widget 及 Element
- Materail 层和 Cupertino 层使用 Widgets 组件库，构建 Android Materail 或者 iOS Cupertino 风格的应用视图，开发者基于这些 Widgets 即可构建出效果一致的跨端应用

**C++ Engine**

Flutter 的核心部分，大部分使用 C++ 开发，它的主要职责是光栅化合成上屏用于显示绘制内容，同时它也提供低层次的核心能力，比如 Skia 图形化绘制（graphics）、TextLayout、文件系统、网络 I/O、无障碍支持、插件体系、Dart 运行时（DartVM）和 GC、编译链。

**Engine 层**

对 App 层暴露 dart:ui 包，dart:ui 包是 Flutter App 的构建基础，其中的 dart 类对 C++ Engine 层中的实现类做了包装，它提供了基础能力，诸如交互系统、图形图像处理、渲染子系统等。

其中最重要的一个类是包下的 Window，它向上提供了最核心的一些服务，比如任务 Scheduler API、绘制 API、输入事件响应等等。

**Platform Embedder**

平台嵌入层，把 Flutte 代码打包嵌入到具体的实现平台，提供运行入口，并对上层提供最基础的能力，比如提供渲染画布、插件系统、无障碍、交互管理、消息循环管理等

## Flutter 四棵树

要解答渲染这个问题，首先需要了解[渲染的流水线](https://zhuanlan.zhihu.com/p/78758247)，对光栅化的流程有个大致了解。

然后清楚 Flutter 的四棵树：Widget 树，Element 树， RenderObject 树和 Layer 树。

四棵树的构建过程：

1. 当应用启动时，会遍历并创建所有的 Widget 形成 Widget Tree。
2. 同时与 Widget Tree 相对应，通过调用 Widget 上的 `createElement()` 方法创建每个 Element 对象，形成 Element Tree。
3. 当每个 Element 调用 `createRenderObject()` 时，将创建对应渲染对象，形成一个 Render Tree。
4. Layer 的组成由 RenderObject 中的 isRepaintBoundary 标志位决定，当 `isRepaintBoundary` 为 true 时，那么该区域就是一个可更新绘制区域，而当这个区域形成时，其实就会新创建一个 Layer，而由 Layer 构成的 Layer Tree 最后会被提交到 Flutter Engine 绘制出画面。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d10d1d4b526645ffbcb9f8a8a04f8f4a~tplv-k3u1fbpfcp-zoom-1.image)

四棵树有各自的功能：

- Widget
  - Widget 只是 Element 的一个配置描述；
  - 不可变，可重建复用；
  - Widget 可以被复用到树的多个部分，对应产生多个 Element 对象。
- Element
  - 它是 BuildContext 的实现类；
  - Widget 实现跨帧保存的 state 就是存放在这里；
  - 同时它也充当了 Widget 和 RenderObject 之间的桥梁。
- RenderObject
  - 它才是真正干活（layout、paint）。真正在 Render Tree 内执行 Hit Test, Layout, Draw。
- Layer
  - 一整块的重绘区域（isRepaintBoundary），决定重绘的影响区域；
  - 提供半透明、位移、裁剪效果；
  - 多个图层叠加产生最终的画面；

## 结合样例理解

点击 toggle 切换按钮，我们将使用不同的 Text 展示不同的文本内容：

```dart
class _MyHomePageState extends State<MyHomePage> {
  bool change = false;

  void _toggle() {
    setState(() {
      change = !change;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            change
                ? Text(
                    'hello oldbirds',
                  )
                : Text('helle world')
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _toggle,
        tooltip: 'Increment',
        child: Text('toogle'),
      ),
    );
  }
}
```

结果：

当我们运行 app, 我们关注 text 的值以及 renderObject 的 id 的变化

![Screen Shot 2021-03-10 at 2.59.30 PM-w866](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/952f922fc2c644418b1de1aea9ec97e7~tplv-k3u1fbpfcp-zoom-1.image)

当我们点击 toggle 按钮：

![Screen Shot 2021-03-10 at 2.59.48 PM-w846](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62e2ef6713504d37835ce21a1d60ff63~tplv-k3u1fbpfcp-zoom-1.image)

可以发现 Flutter 只是更新了文字数据，复用了 RichText 对应的 Element 和 RenderObject。

```dart
@immutable
abstract class Widget extends DiagnosticableTree {
  /// Initializes [key] for subclasses.
  const Widget({ this.key });
  final Key key;

  /// ...

  @protected
  Element createElement();

  /// ...

  static bool canUpdate(Widget oldWidget, Widget newWidget) {
    return oldWidget.runtimeType == newWidget.runtimeType
      && oldWidget.key == newWidget.key;
  }
}
```

当 Widget 变化时，如果 newWidget 与 oldWidget 的 runtimeType 和 key 相等时，那么会选择使用 newWidget 去更新已经存在的 Element 对象，不然就选择重新创建新的 Element。

由此可知：**Widget 重新创建，Element 树和 RenderObject 树并不会完全重新创建**。

## Flutter 渲染管线

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92d3ec612b574061ad2c19a311ae6a08~tplv-k3u1fbpfcp-zoom-1.image)

首先看下用到的线程：

- UIThread

  UIThread 是 Platform 创建的子线程，DartVM Root Isolate 所有的 dart 代码都运行在该线程。

  阻塞 UIThread 会直接导致 Flutter 应用卡顿掉帧。

- RasterThread

  RasterThread 原本叫做 GPUThread，也是 Platform 创建的子线程，由于很多人误认为运行在 GPU 上，但其实它是运行在 CPU 用于处理数据提交给 GPU，所以 Flutter 团队将其名字改为 Raster，表明它的作用是光栅化。

  C++ Engine 中的光栅化和合成过程运行在该线程。

整个流程会经过以下几个过程：

- C++ Engine 触发 Platform 注册 VSync 垂直信号回调，通过 Platform -> C++ Engine -> Dart Framework 触发整个绘制流程
- Dart Framework 构建出四棵树，Widget Tree、Element Tree、RenderObject Tree、Layer Tree，布局、记录绘制区域及绘制指令信息生成 flutter::LayerTree，并保存在 Scene 对象用以光栅化，这个过程运行在 UIThread

- 通过 Flutter 自建引擎 Skia 进行光栅化和合成操作， 将 flutter::LayerTree 转换为 GPU 指令，并发送给 GPU 完成光栅化合成上屏显示操作，这个过程执行在 RasterThread

整个调度过程是生产者消费者模型，它的实现在 Engine 的 LayerTreePipeline。

UIThread 负责生产 flutter::Layer Tree，RasterThread 负责消费 flutter::Layer Tree。

这种调度机制可以确保 RasterThread 不至于过载（2 个任务），同时也可以避免 UIThread 不必要的资源消耗。

所以不论在 UIThread 还是在 RasterThread 耗时太久，都可能会导致 Flutter 应用卡顿，因为会导致延迟接受 VSync 信号，导致掉帧。

## Flutter UI 绘制管线

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fbd2a01730e4e2e8b1284932b7b5434~tplv-k3u1fbpfcp-zoom-1.image)

主要过程为：

- Animate，触发动画更新下一帧的值
- Build，触发构建或刷新 Widget Tree、Element Tree、RenderObject Tree
- Layout，触发布局操作，确定布局大小和位置信息
- CompositeBits，更新需要合成的 Layer 层标记
- Paint，触发 RenderObject Tree 的绘制操作，构建 Layer Tree
- Composite，触发 Layer Tree 发送到 Engine，生成 Engine LayerTree

在 UIThread 构建出四棵树，并在 Engine 生成 Scene，最后提交给 RasterThread，对 LayerTree 做光栅化合成上屏。

## 参阅

- [系列](https://guoshuyu.cn/home/wx/Flutter-6.html)
- [Flutter 是如何渲染的？](https://zhuanlan.zhihu.com/p/128469011)
- [从架构到源码：一文了解 Flutter 渲染机制](https://developer.aliyun.com/article/770384)
- [渲染流水线中的光栅化](https://zhuanlan.zhihu.com/p/78758247)
- [Flutter 渲染性能问题分析](https://zhuanlan.zhihu.com/p/354631257)
- [Flutter UI 渲染浅析（一）总览](http://w4lle.com/2020/11/09/flutter-ui-overview/)
