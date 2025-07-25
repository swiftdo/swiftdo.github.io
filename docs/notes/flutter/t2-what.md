---
title: 什么是 Widgets、RenderObjects 和 Elements？
date: 2020-08-17T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/s6sckld9/
---

> 原文：[Flutter, what are Widgets, RenderObjects and Elements?](https://juejin.im/post/6844903639119560711)

是否理解系统的底层实现原理是区分一个优秀程序员的关键。


## Opacity

为了熟悉 Flutter 工作的基本原理，我们先来看一个最基础的控件 Opacity，它将是一个很好的例子。
Opacity 接收一个 child，所以你可以用 Opacity 来包装任意的 Widget 从而改变它的外观。另外，它还接收一个名为 opacity 的属性，用来设置控件的不透明度，取值在 0.0 到 1.0 之间。

## Widget

Opacity 是一个 SingleChildRenderObjectWidget。

这个类的继承关系如下：

> Opacity → SingleChildRenderObjectWidget → RenderObjectWidget → Widget

相应的，StatelessWidget 和 StatefulWidget 的继承关系如下：

> StatelessWidget / StatefulWidget→Widget

它们的不同之处在于，Stateless / StatefulWidget 只是将其他 Widget 组装起来，而 Opacity 会真正地影响 Widget 的绘制。

但是如果你去那些代码中找的话，你是不可能找到任何与属性 opacity 相关的绘制代码。

那是因为 Widget 仅仅只持有控件的配置信息。比如这个例子中，控件 Opacity 只是用来持有属性 opacity 的。

> 这也就是你每次都可以在 build() 函数中新建 widget 的原因。构建 widget 的过程并不耗费资源，因为 Wiget 只是用来保存属性的容器。



## Rendering

那么渲染是在哪完成的呢？

答案是 RenderingObject。

正如你能从名字中猜出的那样，RenderingObject 负责渲染相关的工作。

Opacity 通过下面这些方法来创建和更新 RenderingObject：

```dart
@override
RenderOpacity createRenderObject(BuildContext context) => new RenderOpacity(opacity: opacity);

@override
void updateRenderObject(BuildContext context, RenderOpacity renderObject) {
  renderObject.opacity = opacity;
}
```

## RenderOpacity

除了绘制，Opacity 和它的 child 几乎一模一样，它用 child 的大小作为自身大小。在绘制它的 child 之前，它给 child 增加了一个不透明度。

所以，RenderOpacity 需要实现包括布局、点击检测、计算大小在内的所有的函数，并将其转交给它的 child 来完成（也就相当于一个 child 的代理）。

RenderOpacity 继承于 RenderProxyBox，RenderProxyBox 中实现了向 child 的工作交接。

```dart
double get opacity => _opacity;
double _opacity;
set opacity(double value) {
  _opacity = value;
  markNeedsPaint();
}
```

在 setter 方法中除了设置字段的值外，还调用了 markNeedsPaint() （或者 markNeedsLayout()），顾名思义，它告诉系统“我已经发生了改变，请重新进行绘制（或布局）”。

在 RenderOpacity 中，我们找到了下面这个方法：

```dart
@override
void paint(PaintingContext context, Offset offset) {
    context.pushOpacity(offset, _alpha, super.paint);
}
```

PaintingContext 就是进行绘制操作的画布，这里通过在 canvas 上调用名为pushOpacity的方法来实现不透明度的控制。

## 回顾一下

* Opacity 不是 StatelessWidget 或者 StatefulWidget，而是 SingleChildRenderObjectWidget；
* Widget 仅用于存储渲染所需要的信息；
* 在这里，Opacity 存储了一个双精度值的不透明度；
* 布局和渲染等操作实际是由继承至 RenderProxyBox 的 RenderOpacity 完成的；
* 因为 Opacity 并不改变 child 的其他行为，所以它的每个方法都仅仅只是 child 的代理；
* 通过重载 paint 方法并调用 pushOpacity，RenderOpacity 实现了向 Widget 添加不透明度的需求。


记住，Widget 只是一个配置，RenderObject 负责管理布局、绘制等操作。

在 Flutter 中，你基本上一直都在不停的创建 Widgets，当 build() 方法被调用时，你创建了一堆 Widgets。

每当有什么变化产生的时候，build() 方法都会被调用。例如播放一个动画，build() 方法就会被频繁调用。这意味着你不能总是重新构建一整颗渲染树，相反，你应该做的知识去更新这颗树。

> 你无法获取一个 widget 在屏幕上的位置和大小，因为 widget 就像一张蓝图，它并非真实地显示在屏幕之上，它只描述了底层渲染对象应该具有的那些属性。

## Element

Element 是这颗巨大的控件树上的实体。

在第一次创建 Widget 的时候，会对应创建一个 Element， 然后将该元素插入树中。如果之后 Widget 发生了变化，则将其与旧的 Widget 进行比较，并且相应地更新 Element。重要的是，Element 被不会重建，只是更新而已

Elements 是 Flutter 核心框架的重要组成部分，显然它并不仅仅如此，但目前对我们来说，知道这些就足够了


## 在 Opacity 示例中，element 是在哪创建的？

SingleChildRenderObjectWidget 中创建了它：

```dart
@override
SingleChildRenderObjectElement createElement() => new SingleChildRenderObjectElement(this);
```

而 SingleChildRenderObjectElement 则是一个仅拥有一个 child 的元素。


## Element 创建 RenderObject，但在示例中是 Widget 创建的 RenderObject？

这仅仅是为了平滑的 API，因为常见的情况是 Widget 需要一个 RenderObject 而不是自定义 Element。RenderObject 实际是由 Element 来创建的，让我们来看看。

```dart
SingleChildRenderObjectElement(SingleChildRenderObjectWidget widget) : super(widget);
```

在构造函数中，SingleChildRenderObjectElement 拿到了一个 RenderObjectWidget 的引用（其中包含了创建 RenderObject 的方法）。

Element 通过 mount 方法插入到 Element Tree 中，这里就是 Element 创建 RenderObject 的地方：

```dart
@override
void mount(Element parent, dynamic newSlot) {
  super.mount(parent, newSlot);
  _renderObject = widget.createRenderObject(this);
  attachRenderObject(newSlot);
  _dirty = false;
}
```

一旦 Element 被挂载到树上，它便会向 Widget 请求 “请给我你要使用的 RenderObject，这样我就能保存它了”。

## 参考
* [Flutter，什么是 Widgets、RenderObjects 和 Elements？](https://juejin.im/post/6844903639119560711)
















































