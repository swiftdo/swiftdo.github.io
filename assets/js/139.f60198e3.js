(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{817:function(a,s,t){"use strict";t.r(s);var e=t(8),v=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"值语义和引用语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#值语义和引用语义"}},[a._v("#")]),a._v(" 值语义和引用语义")]),a._v(" "),t("blockquote",[t("p",[a._v("Swift 中的值语义官方文档："),t("a",{attrs:{href:"https://github.com/apple/swift/blob/main/docs/proposals/ValueSemantics.rst",target:"_blank",rel:"nofollow noopener noreferrer"}},[a._v("Value Semantics in Swift"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"什么是值语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是值语义"}},[a._v("#")]),a._v(" 什么是值语义")]),a._v(" "),t("blockquote",[t("p",[a._v('For a type with value semantics, variable initialization, assignment, and argument-passing (hereafter, "the big three operations") each create an independently modifiable copy of the source value that is interchangeable with the source.')])]),a._v(" "),t("p",[a._v("值语义(Value Semantics)："),t("strong",[a._v("所谓值语义是指目标对象由源对象拷贝生成，且生成后与源对象完全无关，彼此独立存在，改变互不影响。就像 Int 类型变量相互拷贝一样，拷贝之后就与源对象完全脱离关系。")])]),a._v(" "),t("h3",{attrs:{id:"什么是引用语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是引用语义"}},[a._v("#")]),a._v(" 什么是引用语义")]),a._v(" "),t("p",[a._v("引用语义(Reference Semantics)："),t("strong",[a._v("通常是指一个目标对象由源对象拷贝生成，但生成后与源对象之间依然共享底层资源，对任何一个的改变都将随之改变另一个")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"有值语义的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有值语义的例子"}},[a._v("#")]),a._v(" 有"),t("code",[a._v("值语义")]),a._v("的例子")]),a._v(" "),t("p",[a._v("一个简单的"),t("code",[a._v("struct")]),a._v(", 只有一个存储属性：")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("假设 Foo 有以下调用：")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),t("p",[a._v("在这种情况下，"),t("code",[a._v("b.value")]),a._v("是否也会改变？")]),a._v(" "),t("blockquote",[t("p",[a._v("值语义：改变其中一个不会影响另一个")])]),a._v(" "),t("p",[a._v("因为"),t("code",[a._v("Foo")]),a._v("是一个"),t("strong",[a._v("值类型")]),a._v("，所以改变"),t("code",[a._v("a.value")]),a._v("不会改变"),t("code",[a._v("b.value")]),a._v("。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.loveli.site/mweb/Group%2067-1.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在这种情况下，"),t("code",[a._v("a")]),a._v("和"),t("code",[a._v("b")]),a._v("是独立于变化的（对"),t("code",[a._v("a")]),a._v("或"),t("code",[a._v("b")]),a._v("的变化不会影响另一个），所以我们可以说"),t("code",[a._v("Foo")]),a._v("有"),t("code",[a._v("值语义")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"没有值语意的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有值语意的例子"}},[a._v("#")]),a._v(" 没有"),t("code",[a._v("值语意")]),a._v("的例子")]),a._v(" "),t("p",[a._v("接下来，让我们看看一个没有"),t("code",[a._v("值语义")]),a._v("的例子。 让我们把前面代码中的"),t("code",[a._v("struct")]),a._v("部分改为"),t("code",[a._v("class")]),a._v("。 除此之外，其它是完全相同。")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),t("p",[a._v("在这种情况下，"),t("code",[a._v("Foo")]),a._v("是一个类，因此是一个"),t("code",[a._v("引用类型")]),a._v("。因此，改变"),t("code",[a._v("a.value")]),a._v("也将改变"),t("code",[a._v("b.value")]),a._v("。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.loveli.site/mweb/Group%2068.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在这个例子中，"),t("code",[a._v("Foo")]),a._v("不具有"),t("strong",[a._v("值语义")]),a._v("，因为它的变化不具有独立性。")]),a._v(" "),t("h2",{attrs:{id:"语义与类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语义与类型"}},[a._v("#")]),a._v(" 语义与类型")]),a._v(" "),t("p",[a._v("从前面的例子和名称可以推断出，"),t("code",[a._v("值语义")]),a._v("与"),t("code",[a._v("值类型")]),a._v("密切相关，"),t("code",[a._v("引用语义")]),a._v("与"),t("code",[a._v("引用类型")]),a._v("密切相关。 但是它们并不是一回事，小心将它们混淆了。")]),a._v(" "),t("ul",[t("li",[a._v("值语义≠值类型。")]),a._v(" "),t("li",[a._v("引用语义≠引用类型。")])]),a._v(" "),t("p",[a._v("例如，有一些类型是"),t("strong",[a._v("值类型但没有值语义")]),a._v("，还有一些类型是"),t("strong",[a._v("引用类型但具有值语义")]),a._v("。正确区分值语义/引用语义和值类型/引用类型非常重要。")]),a._v(" "),t("h3",{attrs:{id:"是值类型但没有值语义的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是值类型但没有值语义的例子"}},[a._v("#")]),a._v(" 是值类型但没有值语义的例子")]),a._v(" "),t("p",[a._v("为了区分语义和类型，让​​我们看一个值类型但没有值语义的示例。")]),a._v(" "),t("p",[a._v("我们引入了一个叫做"),t("code",[a._v("Bar")]),a._v("的类:")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("给"),t("code",[a._v("Foo")]),a._v("添加这个"),t("code",[a._v("Bar")]),a._v("类型的属性。")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 👈 添加一个Bar类型的属性")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("我们可以用它来做与前面的例子类似的事情。只是除了改变"),t("code",[a._v("a.value")]),a._v("，也改变"),t("code",[a._v("a.bar.value")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 👈")]),a._v("\n")])])]),t("p",[a._v("在这种情况下，"),t("code",[a._v("Foo")]),a._v("是一个"),t("code",[a._v("值类型")]),a._v("，所以变量"),t("code",[a._v("a")]),a._v("和"),t("code",[a._v("b")]),a._v("包含"),t("code",[a._v("Foo")]),a._v("的独立实例。然而，"),t("code",[a._v("Bar")]),a._v("是一个"),t("code",[a._v("引用类型")]),a._v("，所以"),t("code",[a._v("a")]),a._v("和"),t("code",[a._v("b")]),a._v("的"),t("code",[a._v("bar")]),a._v("属性将包含同一个"),t("code",[a._v("Bar")]),a._v("实例的地址，并将通过该地址引用同一个实例。")]),a._v(" "),t("p",[a._v("在这种情况下，改变"),t("code",[a._v("a.value")]),a._v("不会影响"),t("code",[a._v("b.value")]),a._v("，因为"),t("code",[a._v("a")]),a._v("和"),t("code",[a._v("b")]),a._v("包含不同的"),t("code",[a._v("Foo")]),a._v("实例。然而，"),t("code",[a._v("a.bar")]),a._v("和"),t("code",[a._v("b.bar")]),a._v("指的是同一个"),t("code",[a._v("Bar")]),a._v("实例，所以对"),t("code",[a._v("a.bar.value")]),a._v("的任何改变也会改变"),t("code",[a._v("b.bar.value")]),a._v("。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.loveli.site/mweb/Group%2068-1.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("因此，虽然"),t("code",[a._v("Foo")]),a._v("是一个"),t("code",[a._v("值类型")]),a._v("，但变化不具备独立性，即它没有"),t("code",[a._v("值语义")]),a._v("。注意，"),t("code",[a._v("a.value")]),a._v("和"),t("code",[a._v("b.value")]),a._v("可以独立改变，所以这个"),t("code",[a._v("Foo")]),a._v("也没有"),t("code",[a._v("引用语义")]),a._v("。")]),a._v(" "),t("p",[a._v("像这样既没有"),t("code",[a._v("值语义")]),a._v("也没有"),t("code",[a._v("引用语义")]),a._v("的"),t("code",[a._v("Foo")]),a._v("类型是很难处理。这块在下篇文章将进行详细阐述，不在此进行累赘。")]),a._v(" "),t("h3",{attrs:{id:"是引用类型但有值语义的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是引用类型但有值语义的例子"}},[a._v("#")]),a._v(" 是引用类型但有值语义的例子")]),a._v(" "),t("p",[a._v("具有引用类型属性并不一定意味着丢失了值语义。接下来，让我们看一个具有引用类型属性的值类型具有值语义的示例。")]),a._v(" "),t("p",[a._v("将前面代码中的"),t("code",[a._v("Bar")]),a._v("类改为"),t("code",[a._v("不可变类")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("为了使"),t("code",[a._v("Bar")]),a._v("不可变，将"),t("code",[a._v("Bar")]),a._v("的"),t("code",[a._v("value")]),a._v("属性改为"),t("code",[a._v("let")]),a._v("，并将其改为"),t("code",[a._v("final class")]),a._v("。之所以声明为 "),t("code",[a._v("final class")]),a._v("，是因为如果创建一个"),t("code",[a._v("Bar")]),a._v("的可变子类，"),t("code",[a._v("Bar")]),a._v("类的不可变性将被破坏。")]),a._v(" "),t("p",[a._v("让我们对"),t("code",[a._v("Foo")]),a._v("和"),t("code",[a._v("Bar")]),a._v("做同样的事情。然后，由于"),t("code",[a._v("Bar")]),a._v("现在是一个不可变的类，任何试图改变"),t("code",[a._v("a.bar.value")]),a._v("的行为当然会导致编译错误。")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ⛔")]),a._v("\n")])])]),t("p",[a._v("在这种情况下，"),t("code",[a._v("a.bar")]),a._v("和"),t("code",[a._v("b.bar")]),a._v("确实指的是同一个实例，但是"),t("code",[a._v("Bar")]),a._v("是不可变的，所以它的状态不能通过该实例改变。因此，拥有一个"),t("code",[a._v("Bar")]),a._v("类型的属性并不会破坏"),t("code",[a._v("Foo")]),a._v("实例的独立性。其结果是，"),t("code",[a._v("Foo")]),a._v("具有"),t("code",[a._v("值语义")]),a._v("，尽管它有"),t("code",[a._v("引用类型")]),a._v("的属性。")]),a._v(" "),t("p",[a._v("这种情况很常见，不会导致"),t("code",[a._v("值语义")]),a._v("的破坏，例如，如果该属性持有以下类别的实例。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("NSNumber")]),a._v(", "),t("code",[a._v("NSNull")])]),a._v(" "),t("li",[t("code",[a._v("UIImage")])]),a._v(" "),t("li",[t("code",[a._v("KeyPath")])])]),a._v(" "),t("h3",{attrs:{id:"不变性和语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不变性和语义"}},[a._v("#")]),a._v(" 不变性和语义")]),a._v(" "),t("p",[a._v("如何看待"),t("strong",[a._v("不可变类")]),a._v("本身的语义？")]),a._v(" "),t("p",[a._v("考虑以下不可变的类 "),t("code",[a._v("Foo")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("对于这个"),t("code",[a._v("Foo")]),a._v("，执行同样的事情：")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ⛔")]),a._v("\n")])])]),t("p",[t("code",[a._v("不可变类")]),a._v("的实例初始化后不能被改变，不会发生改变一个就改变另一个的情况，这种情况也有"),t("code",[a._v("值语义")]),a._v("。")]),a._v(" "),t("p",[a._v("当具有"),t("strong",[a._v("不变性")]),a._v("时，你无法区分"),t("code",[a._v("值语义")]),a._v("和"),t("code",[a._v("引用语义")]),a._v("。因此，我们可以说，像上面这样的"),t("code",[a._v("不可变")]),a._v("的"),t("code",[a._v("Foo")]),a._v("类同时具有"),t("code",[a._v("值语义")]),a._v("和"),t("code",[a._v("引用语义")]),a._v("。另外，如果它是不可变，即使它是值类型，也可以说它具有"),t("code",[a._v("引用语义")]),a._v("。例如，下面的"),t("code",[a._v("Foo")]),a._v("是一个"),t("code",[a._v("值类型")]),a._v("，但同时具有"),t("code",[a._v("值语义")]),a._v("和"),t("code",[a._v("引用语义")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"用可变引用类型作为属性但有值语义的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用可变引用类型作为属性但有值语义的例子"}},[a._v("#")]),a._v(" 用可变引用类型作为属性但有值语义的例子")]),a._v(" "),t("p",[a._v("在前面的例子中，如果你有一个"),t("strong",[a._v("可变引用类型")]),a._v("的属性，你就没有值语义。")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v('"如果你有一个'),t("em",[a._v("可变引用类型")]),a._v("的属性，你就没有"),t("em",[a._v("值语义")]),a._v('"，用这种模式来判断语义是很危险的。 例如，标准库"Array"持有内部的可变引用类型，但使用一种叫做'),t("code",[a._v("Copy-on-Write")]),a._v("的机制来实现值语义。")]),a._v(" "),t("p",[t("strong",[a._v("要根据定义而不是模式来决定是否有"),t("code",[a._v("值语义")])]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("在 Swift 中，当一个类型具有"),t("code",[a._v("值语义")]),a._v("时，该类型的值与变化无关。")]),a._v(" "),t("p",[a._v("值类型和值语义、引用类型和引用语义不是一回事，值类型不一定有值语义，而引用类型也可以有值语义。区分类型和语义很重要。在考虑一个模式是否具有"),t("code",[a._v("值语义")]),a._v("时，必须考虑到各种例外情况。"),t("strong",[a._v("根据定义决定是否具有"),t("code",[a._v("值语义")])]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/apple/swift/blob/main/docs/proposals/ValueSemantics.rst",target:"_blank",rel:"nofollow noopener noreferrer"}},[a._v("Value Semantics in Swift"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);