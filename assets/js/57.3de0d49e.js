(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{738:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"访问者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式"}},[s._v("#")]),s._v(" 访问者模式")]),s._v(" "),a("p",[s._v("将算法与其所作用的对象隔离开来。")]),s._v(" "),a("p",[s._v("将作用于某种数据结构中的各元素的操作分离出来封装成独立的类，使其在不改变数据结构的前提下可以添加作用于这些元素的新的操作，为数据结构中的每个元素提供多种访问方式")]),s._v(" "),a("h2",{attrs:{id:"样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[s._v("#")]),s._v(" 样例")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.loveli.site/mweb/16176017312597.jpg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("为啥要有访问者模式呢？我们从一个很简单的表达式求值的例子说起：")]),s._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protocol")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("我们先定义了表达式的 AST，包括叶子结点 Number 表示一个整数，中间结点 Add 和 Sub 分别表示加法和减法。 然后我们希望写一个方法，给定表达式，求其值。一种很自然的写法：")]),s._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" expr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" expr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这样确实能达到目的，但是反复的 "),a("code",[s._v("as?")]),s._v(" 类型转换，代码太过丑陋了。")]),s._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protocol")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExprVisitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExprVisitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("visitAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExprVisitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("visitSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExprVisitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("visitNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protocol")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExprVisitor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("visitAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("visitSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("visitNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EvalVisitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExprVisitor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("visitAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("visitSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("visitNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EvalVisitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (2 + 4) + (5 - 4)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" expr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("结果显示：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("7\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);