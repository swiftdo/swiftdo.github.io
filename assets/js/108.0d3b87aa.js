(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{545:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Flutter 是如何渲染的？")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Everything")]),t._v("’s a widget\n")])])]),a("p",[t._v("Widget 是 Flutter 的核心部分，那么 Flutter 是如何将 Widget 渲染到屏幕的呢？")]),t._v(" "),a("h2",{attrs:{id:"flutter-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-架构"}},[t._v("#")]),t._v(" Flutter 架构")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73b26fe1d8c34bd1adac948fcb47ee12~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),a("p",[t._v("Flutter 架构分为三层：Dart Framework、C++ Engine、 Platform Embedder。")]),t._v(" "),a("p",[a("strong",[t._v("Dart Framework")])]),t._v(" "),a("p",[t._v("提供了响应式的开发框架，使用 Dart 开发，它对渲染逻辑做了统一封装，屏蔽了底层实现，对底层 C++ Engine 提供双向通信能力，开发者只需要组合 Widgets 用于构建 App 视图即可。")]),t._v(" "),a("ul",[a("li",[t._v("最底层的 Foundation 层提供一些最基础的抽象类或定义，基于此， Animation 动画、Painting 绘制、Gestures 手势等构建出通用抽象能力")]),t._v(" "),a("li",[t._v("Rendering 层，构建出渲染树 Render Tree，也即 RenderObject Tree，用于具体绘制，RenderObject 会自动随着数据改变而动态改变")]),t._v(" "),a("li",[t._v("Widgets 层，提供了一套非常丰富的 Widget 组件库，用于构建 Widgets Tree 和 Element Tree，这是响应式编程的基础实现，每一个 RenderObject 都有一个对应的 Widget 及 Element")]),t._v(" "),a("li",[t._v("Materail 层和 Cupertino 层使用 Widgets 组件库，构建 Android Materail 或者 iOS Cupertino 风格的应用视图，开发者基于这些 Widgets 即可构建出效果一致的跨端应用")])]),t._v(" "),a("p",[a("strong",[t._v("C++ Engine")])]),t._v(" "),a("p",[t._v("Flutter 的核心部分，大部分使用 C++ 开发，它的主要职责是光栅化合成上屏用于显示绘制内容，同时它也提供低层次的核心能力，比如 Skia 图形化绘制（graphics）、TextLayout、文件系统、网络 I/O、无障碍支持、插件体系、Dart 运行时（DartVM）和 GC、编译链。")]),t._v(" "),a("p",[a("strong",[t._v("Engine 层")])]),t._v(" "),a("p",[t._v("对 App 层暴露 dart:ui 包，dart:ui 包是 Flutter App 的构建基础，其中的 dart 类对 C++ Engine 层中的实现类做了包装，它提供了基础能力，诸如交互系统、图形图像处理、渲染子系统等。")]),t._v(" "),a("p",[t._v("其中最重要的一个类是包下的 Window，它向上提供了最核心的一些服务，比如任务 Scheduler API、绘制 API、输入事件响应等等。")]),t._v(" "),a("p",[a("strong",[t._v("Platform Embedder")])]),t._v(" "),a("p",[t._v("平台嵌入层，把 Flutte 代码打包嵌入到具体的实现平台，提供运行入口，并对上层提供最基础的能力，比如提供渲染画布、插件系统、无障碍、交互管理、消息循环管理等")]),t._v(" "),a("h2",{attrs:{id:"flutter-四棵树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-四棵树"}},[t._v("#")]),t._v(" Flutter 四棵树")]),t._v(" "),a("p",[t._v("要解答渲染这个问题，首先需要了解"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/78758247",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("渲染的流水线"),a("OutboundLink")],1),t._v("，对光栅化的流程有个大致了解。")]),t._v(" "),a("p",[t._v("然后清楚 Flutter 的四棵树：Widget 树，Element 树， RenderObject 树和 Layer 树。")]),t._v(" "),a("p",[t._v("四棵树的构建过程：")]),t._v(" "),a("ol",[a("li",[t._v("当应用启动时，会遍历并创建所有的 Widget 形成 Widget Tree。")]),t._v(" "),a("li",[t._v("同时与 Widget Tree 相对应，通过调用 Widget 上的 "),a("code",[t._v("createElement()")]),t._v(" 方法创建每个 Element 对象，形成 Element Tree。")]),t._v(" "),a("li",[t._v("当每个 Element 调用 "),a("code",[t._v("createRenderObject()")]),t._v(" 时，将创建对应渲染对象，形成一个 Render Tree。")]),t._v(" "),a("li",[t._v("Layer 的组成由 RenderObject 中的 isRepaintBoundary 标志位决定，当 "),a("code",[t._v("isRepaintBoundary")]),t._v(" 为 true 时，那么该区域就是一个可更新绘制区域，而当这个区域形成时，其实就会新创建一个 Layer，而由 Layer 构成的 Layer Tree 最后会被提交到 Flutter Engine 绘制出画面。")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d10d1d4b526645ffbcb9f8a8a04f8f4a~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),a("p",[t._v("四棵树有各自的功能：")]),t._v(" "),a("ul",[a("li",[t._v("Widget\n"),a("ul",[a("li",[t._v("Widget 只是 Element 的一个配置描述；")]),t._v(" "),a("li",[t._v("不可变，可重建复用；")]),t._v(" "),a("li",[t._v("Widget 可以被复用到树的多个部分，对应产生多个 Element 对象。")])])]),t._v(" "),a("li",[t._v("Element\n"),a("ul",[a("li",[t._v("它是 BuildContext 的实现类；")]),t._v(" "),a("li",[t._v("Widget 实现跨帧保存的 state 就是存放在这里；")]),t._v(" "),a("li",[t._v("同时它也充当了 Widget 和 RenderObject 之间的桥梁。")])])]),t._v(" "),a("li",[t._v("RenderObject\n"),a("ul",[a("li",[t._v("它才是真正干活（layout、paint）。真正在 Render Tree 内执行 Hit Test, Layout, Draw。")])])]),t._v(" "),a("li",[t._v("Layer\n"),a("ul",[a("li",[t._v("一整块的重绘区域（isRepaintBoundary），决定重绘的影响区域；")]),t._v(" "),a("li",[t._v("提供半透明、位移、裁剪效果；")]),t._v(" "),a("li",[t._v("多个图层叠加产生最终的画面；")])])])]),t._v(" "),a("h2",{attrs:{id:"结合样例理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结合样例理解"}},[t._v("#")]),t._v(" 结合样例理解")]),t._v(" "),a("p",[t._v("点击 toggle 切换按钮，我们将使用不同的 Text 展示不同的文本内容：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" _MyHomePageState "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyHomePage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bool change "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_toggle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      change "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("change"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scaffold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      appBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppBar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Center")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          mainAxisAlignment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainAxisAlignment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            change\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello oldbirds'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helle world'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      floatingActionButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FloatingActionButton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        onPressed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _toggle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        tooltip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Increment'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'toogle'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("结果：")]),t._v(" "),a("p",[t._v("当我们运行 app, 我们关注 text 的值以及 renderObject 的 id 的变化")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"Screen Shot 2021-03-10 at 2.59.30 PM-w866","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/952f922fc2c644418b1de1aea9ec97e7~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),a("p",[t._v("当我们点击 toggle 按钮：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"Screen Shot 2021-03-10 at 2.59.48 PM-w846","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62e2ef6713504d37835ce21a1d60ff63~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),a("p",[t._v("可以发现 Flutter 只是更新了文字数据，复用了 RichText 对应的 Element 和 RenderObject。")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@immutable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiagnosticableTree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Initializes [key] for subclasses.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Key")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ...")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@protected")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ...")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" bool "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" oldWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" newWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" oldWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtimeType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" newWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtimeType\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" oldWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" newWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当 Widget 变化时，如果 newWidget 与 oldWidget 的 runtimeType 和 key 相等时，那么会选择使用 newWidget 去更新已经存在的 Element 对象，不然就选择重新创建新的 Element。")]),t._v(" "),a("p",[t._v("由此可知："),a("strong",[t._v("Widget 重新创建，Element 树和 RenderObject 树并不会完全重新创建")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"flutter-渲染管线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-渲染管线"}},[t._v("#")]),t._v(" Flutter 渲染管线")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92d3ec612b574061ad2c19a311ae6a08~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),a("p",[t._v("首先看下用到的线程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("UIThread")]),t._v(" "),a("p",[t._v("UIThread 是 Platform 创建的子线程，DartVM Root Isolate 所有的 dart 代码都运行在该线程。")]),t._v(" "),a("p",[t._v("阻塞 UIThread 会直接导致 Flutter 应用卡顿掉帧。")])]),t._v(" "),a("li",[a("p",[t._v("RasterThread")]),t._v(" "),a("p",[t._v("RasterThread 原本叫做 GPUThread，也是 Platform 创建的子线程，由于很多人误认为运行在 GPU 上，但其实它是运行在 CPU 用于处理数据提交给 GPU，所以 Flutter 团队将其名字改为 Raster，表明它的作用是光栅化。")]),t._v(" "),a("p",[t._v("C++ Engine 中的光栅化和合成过程运行在该线程。")])])]),t._v(" "),a("p",[t._v("整个流程会经过以下几个过程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("C++ Engine 触发 Platform 注册 VSync 垂直信号回调，通过 Platform -> C++ Engine -> Dart Framework 触发整个绘制流程")])]),t._v(" "),a("li",[a("p",[t._v("Dart Framework 构建出四棵树，Widget Tree、Element Tree、RenderObject Tree、Layer Tree，布局、记录绘制区域及绘制指令信息生成 flutter::LayerTree，并保存在 Scene 对象用以光栅化，这个过程运行在 UIThread")])]),t._v(" "),a("li",[a("p",[t._v("通过 Flutter 自建引擎 Skia 进行光栅化和合成操作， 将 flutter::LayerTree 转换为 GPU 指令，并发送给 GPU 完成光栅化合成上屏显示操作，这个过程执行在 RasterThread")])])]),t._v(" "),a("p",[t._v("整个调度过程是生产者消费者模型，它的实现在 Engine 的 LayerTreePipeline。")]),t._v(" "),a("p",[t._v("UIThread 负责生产 flutter::Layer Tree，RasterThread 负责消费 flutter::Layer Tree。")]),t._v(" "),a("p",[t._v("这种调度机制可以确保 RasterThread 不至于过载（2 个任务），同时也可以避免 UIThread 不必要的资源消耗。")]),t._v(" "),a("p",[t._v("所以不论在 UIThread 还是在 RasterThread 耗时太久，都可能会导致 Flutter 应用卡顿，因为会导致延迟接受 VSync 信号，导致掉帧。")]),t._v(" "),a("h2",{attrs:{id:"flutter-ui-绘制管线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-ui-绘制管线"}},[t._v("#")]),t._v(" Flutter UI 绘制管线")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fbd2a01730e4e2e8b1284932b7b5434~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),a("p",[t._v("主要过程为：")]),t._v(" "),a("ul",[a("li",[t._v("Animate，触发动画更新下一帧的值")]),t._v(" "),a("li",[t._v("Build，触发构建或刷新 Widget Tree、Element Tree、RenderObject Tree")]),t._v(" "),a("li",[t._v("Layout，触发布局操作，确定布局大小和位置信息")]),t._v(" "),a("li",[t._v("CompositeBits，更新需要合成的 Layer 层标记")]),t._v(" "),a("li",[t._v("Paint，触发 RenderObject Tree 的绘制操作，构建 Layer Tree")]),t._v(" "),a("li",[t._v("Composite，触发 Layer Tree 发送到 Engine，生成 Engine LayerTree")])]),t._v(" "),a("p",[t._v("在 UIThread 构建出四棵树，并在 Engine 生成 Scene，最后提交给 RasterThread，对 LayerTree 做光栅化合成上屏。")]),t._v(" "),a("h2",{attrs:{id:"参阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参阅"}},[t._v("#")]),t._v(" 参阅")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://guoshuyu.cn/home/wx/Flutter-6.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("系列"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/128469011",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Flutter 是如何渲染的？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.aliyun.com/article/770384",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("从架构到源码：一文了解 Flutter 渲染机制"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/78758247",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("渲染流水线中的光栅化"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/354631257",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Flutter 渲染性能问题分析"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://w4lle.com/2020/11/09/flutter-ui-overview/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Flutter UI 渲染浅析（一）总览"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);