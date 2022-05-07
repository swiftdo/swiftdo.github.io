(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{787:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("SliverAppBar 控件可以实现页面头部区域展开、折叠的效果。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/467322-20200118181534530-1611648292.gif",loading:"lazy"}})]),t._v(" "),a("p",[t._v("想更具体了解 SliverAppBar 使用，可参考 "),a("a",{attrs:{href:"https://codechina.csdn.net/mirrors/yechaoa/flutter_sliverappbar",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("yechaoa/flutter_sliverappbar"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("SliverAppBar 联动效果的控制的还是比较薄弱的。在真正产品开发中，联动需求是非常奇葩的。")]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("滚动到一定高度的时候改变状态栏文字颜色")])]),t._v(" "),a("li",[a("p",[t._v("滚动的时候，实现背景色渐变：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/gradient_background.gif",loading:"lazy"}})])]),t._v(" "),a("li",[a("p",[t._v("某个元素的位置移动等等")])])]),t._v(" "),a("p",[t._v("为了深度自定义联动效果，Flutter 给你提供了 "),a("code",[t._v("SliverPersistentHeader")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"sliverpersistentheader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sliverpersistentheader"}},[t._v("#")]),t._v(" SliverPersistentHeader")]),t._v(" "),a("blockquote",[a("p",[t._v("Creates a sliver that varies its size when it is scrolled to the start of a viewport.")])]),t._v(" "),a("p",[t._v("SliverAppBar 的动效其实也是基于 "),a("code",[t._v("SliverPersistentHeader")]),t._v(" 实现的。")]),t._v(" "),a("p",[a("strong",[t._v("越底层，可操控的手段越多")])]),t._v(" "),a("h3",{attrs:{id:"sliverpersistentheader-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sliverpersistentheader-属性"}},[t._v("#")]),t._v(" SliverPersistentHeader 属性")]),t._v(" "),a("ul",[a("li",[t._v("delegate：SliverPersistentHeaderDelegate")]),t._v(" "),a("li",[t._v("pinned 收缩到最小高度的时候是否可见\n"),a("ul",[a("li",[t._v("true：SliverPersistentHeader 会以折叠高度固定显示在头部，")]),t._v(" "),a("li",[t._v("false：缩小到折叠高度后滑出页面")])])]),t._v(" "),a("li",[t._v("floating: 是否下滑的同时是否先展示")])]),t._v(" "),a("p",[t._v("各种参数配置的效果可参考这位大佬的文章： "),a("a",{attrs:{href:"https://juejin.cn/post/6887396184015208461#heading-5",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("SliverPersistentHeader 使用指南"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"sliverpersistentheaderdelegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sliverpersistentheaderdelegate"}},[t._v("#")]),t._v(" SliverPersistentHeaderDelegate")]),t._v(" "),a("p",[t._v("SliverPersistentHeader 的核心就是使用 SliverPersistentHeaderDelegate，我们需要对其进行子类化，也是非常容易的：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersistentHeaderBuilder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverPersistentHeaderDelegate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" double offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bool overlapsContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersistentHeaderBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" double shrinkOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bool overlapsContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shrinkOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" overlapsContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  double "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" maxExtent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  double "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" minExtent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  bool "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldRebuild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("covariant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersistentHeaderBuilder")]),t._v(" oldDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" oldDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n      min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" oldDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n      builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" oldDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("要啥都从外部传进来，非常简单的实现了一个通用的 delegete。")]),t._v(" "),a("h2",{attrs:{id:"使用自定义的-persistentheaderbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义的-persistentheaderbuilder"}},[t._v("#")]),t._v(" 使用自定义的 PersistentHeaderBuilder")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态栏高度")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" navh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navBarHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusBarHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverPersistentHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        pinned"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        floating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        delegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PersistentHeaderBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" navh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" maxh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" overlapsContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotatedRegion")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SystemUiOverlayStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                     offset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" navh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SystemUiOverlayStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SystemUiOverlayStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("light"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" overlapsContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" double offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bool overlapsContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有了 offset 你可以做任何动效了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用也非常简单，你想做啥就设置啥。样例中，我们在滚动偏移量超过了导航栏的高度，会去改变状态栏的颜色。\n因为拿到 "),a("code",[t._v("offset")]),t._v(", 所以我们可以根据这个 offset 做任何联动效果了。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("SliverPersistentHeader 可以很好的控制联动效果，因为可以从 delegate 中获取到 offset。SliverAppBar 其内部已经实现了 offset 相关的动效，给外部的更多是内容填充。")]),t._v(" "),a("p",[t._v("要实现类似复杂联动动画，也就 SliverPersistentHeader 不可。原理上能监听到滚动的 offset，就可以实现类似效果。所以通过监听 Scrollview 的滚动事件也是可以的(没深入底层代码，说不好也是这么干的)。")]),t._v(" "),a("p",[t._v("背景渐变效果的实现："),a("a",{attrs:{href:"https://github.com/miroslava-podybailo/flutter_sliver_header_delegate",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("miroslava-podybailo/flutter_sliver_header_delegate"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);