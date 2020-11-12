(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{540:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("原文："),a("a",{attrs:{href:"https://juejin.im/post/6844903639119560711",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter, what are Widgets, RenderObjects and Elements?"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("是否理解系统的底层实现原理是区分一个优秀程序员的关键。")]),t._v(" "),a("h2",{attrs:{id:"opacity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opacity"}},[t._v("#")]),t._v(" Opacity")]),t._v(" "),a("p",[t._v("为了熟悉 Flutter 工作的基本原理，我们先来看一个最基础的控件 Opacity，它将是一个很好的例子。\nOpacity 接收一个 child，所以你可以用 Opacity 来包装任意的 Widget 从而改变它的外观。另外，它还接收一个名为 opacity 的属性，用来设置控件的不透明度，取值在 0.0 到 1.0 之间。")]),t._v(" "),a("h2",{attrs:{id:"widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widget"}},[t._v("#")]),t._v(" Widget")]),t._v(" "),a("p",[t._v("Opacity 是一个 SingleChildRenderObjectWidget。")]),t._v(" "),a("p",[t._v("这个类的继承关系如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("Opacity → SingleChildRenderObjectWidget → RenderObjectWidget → Widget")])]),t._v(" "),a("p",[t._v("相应的，StatelessWidget 和 StatefulWidget 的继承关系如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("StatelessWidget / StatefulWidget→Widget")])]),t._v(" "),a("p",[t._v("它们的不同之处在于，Stateless / StatefulWidget 只是将其他 Widget 组装起来，而 Opacity 会真正地影响 Widget 的绘制。")]),t._v(" "),a("p",[t._v("但是如果你去那些代码中找的话，你是不可能找到任何与属性 opacity 相关的绘制代码。")]),t._v(" "),a("p",[t._v("那是因为 Widget 仅仅只持有控件的配置信息。比如这个例子中，控件 Opacity 只是用来持有属性 opacity 的。")]),t._v(" "),a("blockquote",[a("p",[t._v("这也就是你每次都可以在 build() 函数中新建 widget 的原因。构建 widget 的过程并不耗费资源，因为 Wiget 只是用来保存属性的容器。")])]),t._v(" "),a("h2",{attrs:{id:"rendering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendering"}},[t._v("#")]),t._v(" Rendering")]),t._v(" "),a("p",[t._v("那么渲染是在哪完成的呢？")]),t._v(" "),a("p",[t._v("答案是 RenderingObject。")]),t._v(" "),a("p",[t._v("正如你能从名字中猜出的那样，RenderingObject 负责渲染相关的工作。")]),t._v(" "),a("p",[t._v("Opacity 通过下面这些方法来创建和更新 RenderingObject：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\nRenderOpacity "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRenderObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RenderOpacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateRenderObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RenderOpacity renderObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  renderObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" opacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"renderopacity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderopacity"}},[t._v("#")]),t._v(" RenderOpacity")]),t._v(" "),a("p",[t._v("除了绘制，Opacity 和它的 child 几乎一模一样，它用 child 的大小作为自身大小。在绘制它的 child 之前，它给 child 增加了一个不透明度。")]),t._v(" "),a("p",[t._v("所以，RenderOpacity 需要实现包括布局、点击检测、计算大小在内的所有的函数，并将其转交给它的 child 来完成（也就相当于一个 child 的代理）。")]),t._v(" "),a("p",[t._v("RenderOpacity 继承于 RenderProxyBox，RenderProxyBox 中实现了向 child 的工作交接。")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("double "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" opacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" _opacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndouble _opacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("double value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  _opacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("markNeedsPaint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 setter 方法中除了设置字段的值外，还调用了 markNeedsPaint() （或者 markNeedsLayout()），顾名思义，它告诉系统“我已经发生了改变，请重新进行绘制（或布局）”。")]),t._v(" "),a("p",[t._v("在 RenderOpacity 中，我们找到了下面这个方法：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PaintingContext context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Offset offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushOpacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _alpha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("PaintingContext 就是进行绘制操作的画布，这里通过在 canvas 上调用名为pushOpacity的方法来实现不透明度的控制。")]),t._v(" "),a("h2",{attrs:{id:"回顾一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾一下"}},[t._v("#")]),t._v(" 回顾一下")]),t._v(" "),a("ul",[a("li",[t._v("Opacity 不是 StatelessWidget 或者 StatefulWidget，而是 SingleChildRenderObjectWidget；")]),t._v(" "),a("li",[t._v("Widget 仅用于存储渲染所需要的信息；")]),t._v(" "),a("li",[t._v("在这里，Opacity 存储了一个双精度值的不透明度；")]),t._v(" "),a("li",[t._v("布局和渲染等操作实际是由继承至 RenderProxyBox 的 RenderOpacity 完成的；")]),t._v(" "),a("li",[t._v("因为 Opacity 并不改变 child 的其他行为，所以它的每个方法都仅仅只是 child 的代理；")]),t._v(" "),a("li",[t._v("通过重载 paint 方法并调用 pushOpacity，RenderOpacity 实现了向 Widget 添加不透明度的需求。")])]),t._v(" "),a("p",[t._v("记住，Widget 只是一个配置，RenderObject 负责管理布局、绘制等操作。")]),t._v(" "),a("p",[t._v("在 Flutter 中，你基本上一直都在不停的创建 Widgets，当 build() 方法被调用时，你创建了一堆 Widgets。")]),t._v(" "),a("p",[t._v("每当有什么变化产生的时候，build() 方法都会被调用。例如播放一个动画，build() 方法就会被频繁调用。这意味着你不能总是重新构建一整颗渲染树，相反，你应该做的知识去更新这颗树。")]),t._v(" "),a("blockquote",[a("p",[t._v("你无法获取一个 widget 在屏幕上的位置和大小，因为 widget 就像一张蓝图，它并非真实地显示在屏幕之上，它只描述了底层渲染对象应该具有的那些属性。")])]),t._v(" "),a("h2",{attrs:{id:"element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element"}},[t._v("#")]),t._v(" Element")]),t._v(" "),a("p",[t._v("Element 是这颗巨大的控件树上的实体。")]),t._v(" "),a("p",[t._v("在第一次创建 Widget 的时候，会对应创建一个 Element， 然后将该元素插入树中。如果之后 Widget 发生了变化，则将其与旧的 Widget 进行比较，并且相应地更新 Element。重要的是，Element 被不会重建，只是更新而已")]),t._v(" "),a("p",[t._v("Elements 是 Flutter 核心框架的重要组成部分，显然它并不仅仅如此，但目前对我们来说，知道这些就足够了")]),t._v(" "),a("h2",{attrs:{id:"在-opacity-示例中-element-是在哪创建的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-opacity-示例中-element-是在哪创建的"}},[t._v("#")]),t._v(" 在 Opacity 示例中，element 是在哪创建的？")]),t._v(" "),a("p",[t._v("SingleChildRenderObjectWidget 中创建了它：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\nSingleChildRenderObjectElement "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleChildRenderObjectElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("而 SingleChildRenderObjectElement 则是一个仅拥有一个 child 的元素。")]),t._v(" "),a("h2",{attrs:{id:"element-创建-renderobject-但在示例中是-widget-创建的-renderobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-创建-renderobject-但在示例中是-widget-创建的-renderobject"}},[t._v("#")]),t._v(" Element 创建 RenderObject，但在示例中是 Widget 创建的 RenderObject？")]),t._v(" "),a("p",[t._v("这仅仅是为了平滑的 API，因为常见的情况是 Widget 需要一个 RenderObject 而不是自定义 Element。RenderObject 实际是由 Element 来创建的，让我们来看看。")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SingleChildRenderObjectElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SingleChildRenderObjectWidget widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在构造函数中，SingleChildRenderObjectElement 拿到了一个 RenderObjectWidget 的引用（其中包含了创建 RenderObject 的方法）。")]),t._v(" "),a("p",[t._v("Element 通过 mount 方法插入到 Element Tree 中，这里就是 Element 创建 RenderObject 的地方：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Element parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dynamic")]),t._v(" newSlot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newSlot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  _renderObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRenderObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachRenderObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newSlot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  _dirty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("一旦 Element 被挂载到树上，它便会向 Widget 请求 “请给我你要使用的 RenderObject，这样我就能保存它了”。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844903639119560711",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter，什么是 Widgets、RenderObjects 和 Elements？"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);