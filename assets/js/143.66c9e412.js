(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{577:function(t,n,a){"use strict";a.r(n);var s=a(2),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"inout-copy-in-copy-out"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inout-copy-in-copy-out"}},[t._v("#")]),t._v(" inout(copy-in-copy-out)")]),t._v(" "),n("p",[t._v("在 Swift 中，函数参数默认是常量。试图在函数体中更改参数值将会导致编译错误。这意味着你不能更改参数值。如果想要一个函数可以修改参数的值，并且想要这些修改在函数调用结束后仍然存在，那么把这个参数定义为"),n("code",[t._v("inout")]),t._v("即可。")]),t._v(" "),n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" variable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("changeNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" variable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("无法编译通过：")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"-w878","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c14b5428f0864b6086c9a44d4a04ebdc~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),n("p",[t._v("我们不能修改函数的参数。但是通过"),n("code",[t._v("inout")]),t._v("定义输入输出参数：")]),t._v(" "),n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" variable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("changeNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inout")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("variable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"-w519","data-src":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5099808cfa463f8c1862d79fe000bd~tplv-k3u1fbpfcp-zoom-1.image",loading:"lazy"}})]),t._v(" "),n("p",[t._v("在函数调用的时候，我们使用的"),n("code",[t._v("&")]),t._v("可能会给你的印象："),n("strong",[t._v("传递引用")]),t._v("——特别是如果你有 C 或 C++ 背景。但 "),n("code",[t._v("inout")]),t._v("：")]),t._v(" "),n("blockquote",[n("p",[t._v("An inout parameter has a value that is passed in to the function, is modified by the function, and is passed back out of the function to replace the original value.")])]),t._v(" "),n("p",[n("code",[t._v("&")]),t._v("的使用确实将实参的内存地址传入函数（实参进行引用传递），但"),n("code",[t._v("changeNumber")]),t._v("内部并未操作指针，采取了"),n("code",[t._v("Copy In Copy Out")]),t._v("的做法：")]),t._v(" "),n("ul",[n("li",[t._v("调用该函数时，先复制实参的值，产生副本【get】")]),t._v(" "),n("li",[t._v("将副本的内存地址传入函数（副本进行引用传递），在函数内部可以修改副本的值")]),t._v(" "),n("li",[t._v("函数返回后，再将副本的值覆盖实参的值【set】")])]),t._v(" "),n("p",[t._v("关于"),n("code",[t._v("inout")]),t._v("的更详细讨论，请参阅")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://swiftgg.gitbook.io/swift/yu-yan-can-kao/06_declarations#in-out-parameters",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("in-out-parameters"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/idbeny/p/swift-syntax-inout.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Swift 系列十 - inout 的本质"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("inout 在 Swift 是一个高频使用的关键字，以至于不得不独立出一篇文章强调它的 "),n("code",[t._v("copy-in copy-out")]),t._v("，以防经验的造成的思维定式。")]),t._v(" "),n("p",[n("strong",[t._v("更好的去理解代码，写出更好的代码。")])]),t._v(" "),n("h2",{attrs:{id:"参阅"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参阅"}},[t._v("#")]),t._v(" 参阅")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID545",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("In-Out Parameters"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://agrawalsuneet.medium.com/inout-in-swift-53fa441c3a26",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("‘inout’ in Swift"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://likeabossapp.com/2018/01/03/swift%E5%B0%8F%E6%95%99%E5%AE%A4-%E9%97%9C%E6%96%BCinout%EF%BC%88copy-copy-out%EF%BC%89/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("關於 inout"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://try2explore.com/questions/10172533",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("swift - When to use inout parameters?"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.cn/post/6844903891075776519",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("汇编深入分析 inout 本质"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);