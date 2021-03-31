---
title: 'Flutter 自定义 Widget'
date: 2021-0-11
tags:
- flutter
sitemap:
  exclude: false
  changefreq: hourly
---

```dart
Everything’s a widget
```

在 Flutter 中，我们无时无刻不跟 Widget 打交道，我们可以通过组合 Flutter 提供的基础 Widget 实现丰富的 UI 效果。但是作为一名程序员，我们不会满足于此，我们总有一颗好奇的心，想去探究它的原理，希望做到知其然且知其所以然。

所以本文将和大家一起揭开 Widget 的神秘面纱，探寻背后藏着的黑箱子。

## 从 Opcity 触发

我们将通过观察 Opcity Widget 来找出一些门道。[Opacity](https://github.com/flutter/flutter/blob/f38743593d00f13b21f49d8d8ee2d2206bf820d3/packages/flutter/lib/src/widgets/basic.dart#L150) 是个非常基础的 Widget，代码也比较简单，软柿子一枚，分析起来会相对容易。

```dart
class Opacity extends SingleChildRenderObjectWidget {
  const Opacity({
    Key? key,
    required this.opacity,
    this.alwaysIncludeSemantics = false,
    Widget? child,
  }) : assert(opacity != null && opacity >= 0.0 && opacity <= 1.0),
       assert(alwaysIncludeSemantics != null),
       super(key: key, child: child);
       
  final double opacity;
  final bool alwaysIncludeSemantics;

  @override
  RenderOpacity createRenderObject(BuildContext context) {
    return RenderOpacity(
      opacity: opacity,
      alwaysIncludeSemantics: alwaysIncludeSemantics,
    );
  }

  @override
  void updateRenderObject(BuildContext context, RenderOpacity renderObject) {
    renderObject
      ..opacity = opacity
      ..alwaysIncludeSemantics = alwaysIncludeSemantics;
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DoubleProperty('opacity', opacity));
    properties.add(FlagProperty('alwaysIncludeSemantics', value: alwaysIncludeSemantics, ifTrue: 'alwaysIncludeSemantics'));
  }
}
```

Opacity 只接受一个子 Widget。可以用 Opacity 来包装任何 Widget 并调整其显示方式。除了 child 参数，只有另外一个 opacity 参数，它是浮点类型，值介于 0.0 和 1.0。这个参数用于控制不透明度。

Opacity 的继承结构如下：

```dart
Opacity → SingleChildRenderObjectWidget → RenderObjectWidget → Widget
```

通常我们在使用自定义 Widget 的时候，都是继承 StatelessWidget/StatefulWidget。它们的继承结构则是：

```dart
StatelessWidget/StatefulWidget → Widget
```

我们也很容易发现 StatelessWidget/StatefulWidget 更多的是组合其他 Widget, 但是 Opcity 却改变了 Widget 的绘制方式。

我们在 Widget 中找不到跟实际绘制的任何相关代码。原因在于 Widget 只是一份配置信息，所以它的创建成本并不高。

那么 Opacity 的渲染发生在哪里？通过名字我们可以猜到 RenderObject 负责渲染工作。在 Opacity 中：

```dart
/// 创建 renderObject
@override
RenderOpacity createRenderObject(BuildContext context) {
    return RenderOpacity(
      opacity: opacity,
      alwaysIncludeSemantics: alwaysIncludeSemantics,
    );
}

/// 更新 renderObject
@override
void updateRenderObject(BuildContext context, RenderOpacity renderObject) {
    renderObject
      ..opacity = opacity
      ..alwaysIncludeSemantics = alwaysIncludeSemantics;
}
```

### RenderOpacity

Opacity Widget 大小跟其 child 完全一样。基本上它每个方面跟其 child 都一样，除了绘制，它会在绘制 child 前加上不透明度。

```dart
class RenderOpacity extends RenderProxyBox {
  RenderOpacity({
    double opacity = 1.0,
    bool alwaysIncludeSemantics = false,
    RenderBox? child,
  }) : assert(opacity != null),
       assert(opacity >= 0.0 && opacity <= 1.0),
       assert(alwaysIncludeSemantics != null),
       _opacity = opacity,
       _alwaysIncludeSemantics = alwaysIncludeSemantics,
       _alpha = ui.Color.getAlphaFromOpacity(opacity),
       super(child);

  @override
  bool get alwaysNeedsCompositing => child != null && (_alpha != 0 && _alpha != 255);

  int _alpha;

  double get opacity => _opacity;
  double _opacity;
  set opacity(double value) {
    assert(value != null);
    assert(value >= 0.0 && value <= 1.0);
    if (_opacity == value)
      return;
    final bool didNeedCompositing = alwaysNeedsCompositing;
    final bool wasVisible = _alpha != 0;
    _opacity = value;
    _alpha = ui.Color.getAlphaFromOpacity(_opacity);
    if (didNeedCompositing != alwaysNeedsCompositing)
      markNeedsCompositingBitsUpdate();
    markNeedsPaint();
    if (wasVisible != (_alpha != 0) && !alwaysIncludeSemantics)
      markNeedsSemanticsUpdate();
  }
  
  bool get alwaysIncludeSemantics => _alwaysIncludeSemantics;
  bool _alwaysIncludeSemantics;
  set alwaysIncludeSemantics(bool value) {
    if (value == _alwaysIncludeSemantics)
      return;
    _alwaysIncludeSemantics = value;
    markNeedsSemanticsUpdate();
  }

  @override
  void paint(PaintingContext context, Offset offset) {
    if (child != null) {
      if (_alpha == 0) {
        layer = null;
        return;
      }
      if (_alpha == 255) {
        layer = null;
        context.paintChild(child!, offset);
        return;
      }
      assert(needsCompositing);
      layer = context.pushOpacity(offset, _alpha, super.paint, oldLayer: layer as OpacityLayer?);
    }
  }

  @override
  void visitChildrenForSemantics(RenderObjectVisitor visitor) {
    if (child != null && (_alpha != 0 || alwaysIncludeSemantics))
      visitor(child!);
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DoubleProperty('opacity', opacity));
    properties.add(FlagProperty('alwaysIncludeSemantics', value: alwaysIncludeSemantics, ifTrue: 'alwaysIncludeSemantics'));
  }
}
```

`RenderOpacity` 继承自 `RenderProxyBox`，在 `opacity` 的 setter 方法中，它调用了 markNeedsPaint() 和 markNeedsLayout() 方法。这个方法告诉系统重新绘制和重新布局。

在 `paint` 方法里：

```dart
context.pushOpacity(offset, _alpha, super.paint, oldLayer: layer as OpacityLayer?)
```

其中 `context` 是一个高级的 canvas。这行代码就是不透明度的实现。

最后从 Opacity 中，我们可以总结如下：

* Opacity 并非继承自 StatelessWidget 或 StatefulWidget, 而是一个 SingleChildRenderObjectWidget
* Widget 仅持有渲染器会用到的配置信息
* RenderOpacity 完成实际布局/渲染工作，Widget 布局的核心在于 RenderObject
* RenderOpacity 覆盖了 paint 方法。在这个方法中调用 pushOpacity() 来为 Widget 添加不透明度


到这里我们基本知道 Opacity 大体实现，但是还是有很多疑问对吧？

* SingleChildRenderObjectWidget 做了啥？
* 不是三棵树么，在 Opacity 只看到 Widget 和 RenderObject，Element 呢？
* 现有的 Widget 的继承结构如何？
* RenderProxyBox、RenderBox、RenderObject 各自都做了什么?

那么接下来，我们一起来解答这些问题。

## SingleChildRenderObjectWidget、RenderObjectWidget、Widget 各类的职责

### Widget

首先，我们先来看一下 Widget 类的声明：

```dart
@immutable
abstract class Widget extends DiagnosticableTree {
  const Widget({ this.key });
  final Key? key;

  @protected
  @factory
  Element createElement();

  @override
  String toStringShort() {
    final String type = objectRuntimeType(this, 'Widget');
    return key == null ? type : '$type-$key';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties){
    super.debugFillProperties(properties);
    properties.defaultDiagnosticsTreeStyle = DiagnosticsTreeStyle.dense;
  }

  @override
  @nonVirtual
  bool operator ==(Object other) => super == other;

  @override
  @nonVirtual
  int get hashCode => super.hashCode;

  static bool canUpdate(Widget oldWidget, Widget newWidget) {
    return oldWidget.runtimeType == newWidget.runtimeType
        && oldWidget.key == newWidget.key;
  }

  static int _debugConcreteSubtype(Widget widget) {
    return widget is StatefulWidget ? 1 :
           widget is StatelessWidget ? 2 :
           0;
    }
}
```

从这个Widget类的申明中，我们可以得到如下一些信息:

- Widget类继承自DiagnosticableTree，主要作用是提供调试信息。 
- Key: 主要的作用是决定是否在下一次build时复用旧的widget，决定的条件在canUpdate()方法中 
- createElement()：正如前文所述一个 Widget 可以对应多个 Element；Flutter Framework在构建 UI 时，会先调用此方法生成对应节点的 Element 对象。此方法是Flutter Framework 隐式调用的，在我们开发过程中基本不会调用到。
- debugFillProperties 复写父类的方法，主要是设置DiagnosticableTree的一些特性。 
- canUpdate() 是一个静态方法，它主要用于在Widget树重新build时复用旧的widget。具体来说，是否使用新的Widget对象去更新旧UI树上所对应的 Element 对象的配置；并且通过其源码我们可以知道，只要 newWidget 与 oldWidget 的runtimeType 和 key 同时相等时就会用 newWidget 去更新 Element 对象的配置，否则就会创建新的 Element。

### RenderObjectWidget

```dart
abstract class RenderObjectWidget extends Widget {
  const RenderObjectWidget({ Key? key }) : super(key: key);

  @override
  @factory
  RenderObjectElement createElement();
  
  @protected
  @factory
  RenderObject createRenderObject(BuildContext context);

  @protected
  void updateRenderObject(BuildContext context, covariant RenderObject renderObject) { }

  @protected
  void didUnmountRenderObject(covariant RenderObject renderObject) { }
}
```

RenderObjectWidget 用来配置 RenderObject。其 createElement() 函数返回RenderObjectElement。由其子类实现。相对于上面说的其他 Widget。这里多了一个createRenderObject()方法。用来实例化 RenderObject。

RenderObjectWidget 只是个配置，当配置发生变化需要应用到现有的 RenderObject上的时候，Flutter框架会调用 updateRenderObject() 来把新的配置设置给相应的RenderObject。

RenderObjectWidget 有三个比较重要的子类：

- LeafRenderObjectWidget 这个 Widget 配置的节点处于树的最底层，它是没有孩子的。对应 LeafRenderObjectElement。
- SingleChildRenderObjectWidget，只含有一个孩子。对应SingleChildRenderObjectElement。
- MultiChildRenderObjectWidget，有多个孩子。对应MultiChildRenderObjectElement。



## 现有的 Widget 的继承结构如何？

以下只是部分 widget 的列举，没有列举所有。

### 基本继承关系图：

![](http://blog.loveli.site/mweb/16155563318031.jpg)


### LeafRenderObjectWidget 继承关系图：
![](http://blog.loveli.site/mweb/16155563445065.jpg)

### SingleChildRenderObjectWidget 继承关系图

![](http://blog.loveli.site/mweb/16155563900589.jpg)

### MutilChildRenderObjectWidget 继承关系图

![](http://blog.loveli.site/mweb/16155564431428.jpg)


### ProxyWidget 继承关系图  

![](http://blog.loveli.site/mweb/16155564169235.jpg)

ProxyWidget 作为一个抽象的代理 Widget，并没有实质性的作用。只是在父类和子类需要传递信息时使用；主要有 InheritedWidget 和 ParentDataWidget 两类；InheritedWidget 和 ParentDataWidget 涉及内容较多，后续文章我们再深入研究；

### StatelessWidget继承关系图

![](http://blog.loveli.site/mweb/16155564637494.jpg)

### StatefulWidget 继承关系图

![](http://blog.loveli.site/mweb/16155564723993.jpg)


## Opacity 只看到 Widget 和 RenderObject，Element 呢？

答案是 SingleChildRenderObjectWidget 创建了 Element。

```dart
abstract class SingleChildRenderObjectWidget extends RenderObjectWidget {
  const SingleChildRenderObjectWidget({ Key? key, this.child }) : super(key: key);

  final Widget? child;

  /// 这里创建了 SingleChildRenderObjectElement
  @override
  SingleChildRenderObjectElement createElement() => SingleChildRenderObjectElement(this);
}
```

### Widget 树 、RenderObject 树、Element 树的关系

![](http://blog.loveli.site/mweb/16155578964069.jpg)

从上图可以看出，widget 树和 Element 树节点是一一对应关系，每一个 Widget 都会有其对应的 Element，**但是 RenderObject 树则不然，只有需要渲染的 Widget 才会有对应的节点**。Element 树相当于一个中间层，大管家，它对 Widget 和 RenderObject 都有引用。当 Widget 不断变化的时候，将新 Widget 拿到 Element 来进行对比，看一下和之前保留的 Widget 类型和 Key 是否相同，如果都一样，那完全没有必要重新创建 Element 和 RenderObject，只需要更新里面的一些属性即可，这样可以以最小的开销更新 RenderObject，引擎在解析 RenderObject 的时候，发现只有属性修改了，那么也可以以最小的开销来做渲染。

## RenderProxyBox、RenderBox、RenderObject 各自又都做了什么?

RenderOpacity 的继承关系：

```dart
RenderOpacity → RenderProxyBox → RenderBox → RenderObject → AbstractNode
```

### RenderObject

我们可以通过 Element.renderObject 来获取，并且 RenderObject 的主要职责是布局和绘制，所有的 RenderObject 组成一棵渲染树 Render Tree。

RenderObject 类本身实现了一套基础的布局和绘制协议，但是并没有定义子节点模型（如一个节点可以有几个子节点，没有子节点？一个？两个？或者更多？）。 它也没有定义坐标系统（如子节点定位是在笛卡尔坐标中还是极坐标？）和具体的布局协议（是通过宽高还是通过constraint和size?，或者是否由父节点在子节点布局之前或之后设置子节点的大小和位置等）。为此，Flutter提供了一个RenderBox类，它继承自`RenderObject`，布局坐标系统采用笛卡尔坐标系，这和Android和iOS原生坐标系是一致的，都是屏幕的左上角是原点，然后分宽高两个轴，大多数情况下，我们直接使用RenderBox 就可以了，除非遇到要自定义布局模型或坐标系统的情况。

### RenderBox
如果想更近一步了解 RenderBox, 可参考阅读：
* [RenderObject和RenderBox](https://book.flutterchina.club/chapter14/render_object.html#_14-3-1-%E5%B8%83%E5%B1%80%E8%BF%87%E7%A8%8B)
* [flutter的RenderBox使用说明书&原理浅析](https://www.cnblogs.com/joahyau/p/12931941.html#%E4%BA%8C%E3%80%81%E5%AE%B9%E5%99%A8%E7%B1%BB%E5%9E%8B%E7%9A%84renderbox)


我们在回顾下下我们分析的过程：

1. 查看 Opacity 的源码，我们知道 Opacity 的一个继承关系，认识到 Widge 仅仅是个配置，布局和渲染都是 RenderObject 干的活。
2. 然后我们整理了 Flutter 常用的 Widget 的继承关系图，知道了LeafRenderObjectWidget，SingleChildRenderObjectWidget，MultiChildRenderObjectWidget 此类 Widge 的用途。
3. 最后分析 RenderObject 的一些子类，从而对 布局和绘制有个初步的了解。

整个分析过程下来，我们将会比较清晰的认识到三棵树各自的职责，以及它们之间的关联。

为了更具化整个过程，加深对知识点的理解，我们一起来自定义一个 Widget 吧。


## 自定义 Widget 

完成一个 Widget，是一个圆，圆中心直接显示 OldBirds 文本，且这个圆有个外边框。

![效果-w495](http://blog.loveli.site/mweb/Screen%20Shot%202021-03-13%20at%2010.11.33%20PM.png)

撸起袖子开干！

代码如下：

```dart
class CircleLogoWidget extends SingleChildRenderObjectWidget {
  @override
  RenderObject createRenderObject(BuildContext context) {
    return CircleLogoRenderBox();
  }
}

```

使我们的 CircleLogoWidget 继承于 SingleChildRenderObjectWidget 会默认实现一个 createRenderObject 方法，会让你返回一个RenderObject，这个对象负责对你 Widget 的绘制和布局，我们这边返回 `CircleLogoRenderBox`：

```dart

class CircleLogoRenderBox extends RenderConstrainedBox {
  CircleLogoRenderBox() : super(additionalConstraints: const BoxConstraints.tightForFinite());
  /// 相应事件是否是当前View，用来处理事件的分发
  @override
  bool hitTest(BoxHitTestResult result, {Offset position}) {
    return true;
  }

  /// 用来处理用户触摸事件
  @override
  void handleEvent(PointerEvent event, covariant HitTestEntry entry) {}

  /// 进行绘制
  @override
  void paint(PaintingContext context, Offset offset) {
    Paint _paint = Paint()
      ..color = Colors.red
      ..strokeCap = StrokeCap.round
      ..isAntiAlias = true
      ..style = PaintingStyle.stroke
      ..strokeWidth = 5.0;

    TextSpan logoSpan = TextSpan(
      text: 'OldBirds',
      style: TextStyle(
        color: Colors.blue,
        fontSize: 16,
      ),
    );

    TextPainter textPainter = TextPainter(text: logoSpan, textDirection: TextDirection.ltr);
    textPainter.layout(maxWidth: 180);
    /// 绘制文本
    textPainter.paint(context.canvas, Offset(-textPainter.size.width / 2, -textPainter.size.height / 2));
    /// 绘制圆
    context.canvas.drawCircle(offset, 80, _paint);
  }
}

```

在 CircleLogoRenderBox 我们只处理 paint 进行绘制即可。

最后我们在 MainPage 使用 `CircleLogoWidget`：

```dart
class MainPage extends StatelessWidget {
  final String title;
  MainPage({this.title});
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Opacity(
          child: CircleLogoWidget(),
          opacity: 0.5,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){},
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), 
    );
  }
}
```

我们借助于 SingleChildRenderObjectWidget完成自定义 CircleLogoWidget
然后通过使用 TextPainter 来绘制文字， canvans 调用 `drawCircle` 以 offset 为圆心，半径为 80 绘制了一个圆，完成了我们想要的效果。


## 总结

本文从 Opcity 的源码的深入解读，再不断的深入源码，引出 RenderObject，然后梳理了 Widget、Element 和 RenderObject 三者之间的关系，更近一步的理解 Flutter 的绘制原理，最后实现了一个可自定义绘制的 Widget。


## 练习

相信看完此片文章，回答以下问题应该是比较容易的

* build 方法是在什么时候调用的？
* BuildContext 是什么？
* Widget 频繁更改创建是否会影响性能？复用和更新机制是什么样的？
* 创建 Widget 里面的 Key 到底是什么作用？
* state 里面为啥可以直接获取到 widget 对象？

## 参阅

* [Flutter渲染之Widget、Element 和 RenderObject](https://juejin.cn/post/6845166891539906574)




