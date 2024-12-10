(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{737:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("结构化并发（Structured Concurrency）是一种编程模型，旨在简化并发代码的编写和管理，并降低并发编程中的一些常见错误。")]),t._v(" "),s("h2",{attrs:{id:"什么是结构化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是结构化"}},[t._v("#")]),t._v(" 什么是结构化？")]),t._v(" "),s("p",[t._v('"结构化"通常指的是'),s("strong",[t._v("一种编程风格或范例")]),t._v("，其目的是通过使用特定的控制结构和代码组织方式，使得程序的控制流更加清晰、易读、易理解和易维护。结构化编程强调使用顺序、选择和循环这样的基本控制结构，以及避免使用不受欢迎的控制结构，例如无限制的跳转语句（如 GOTO 语句），以减少代码的复杂性和错误的可能性。")]),t._v(" "),s("p",[t._v("结构化编程有以下一些主要特征：")]),t._v(" "),s("ol",[s("li",[t._v("顺序结构：程序按照自上而下的顺序执行，每个语句一次执行一次，没有跳转或分支。")]),t._v(" "),s("li",[t._v("选择结构：使用条件语句（如 if-else、switch）来根据不同条件选择执行不同的代码块。")]),t._v(" "),s("li",[t._v("循环结构：使用循环语句（如 for、while）来重复执行一段代码，直到满足特定的条件。")]),t._v(" "),s("li",[t._v("模块化：将代码划分为更小的、可重用的模块，每个模块负责完成特定的任务，使得代码更加组织化和可维护。")]),t._v(" "),s("li",[t._v("避免 GOTO 语句：避免使用无限制的跳转语句（GOTO），因为它们可能导致代码难以理解和调试。")])]),t._v(" "),s("p",[t._v("结构化编程的目标是提高代码的可读性、可维护性和可测试性，减少错误和缺陷的出现。通过遵循结构化编程原则，程序员可以更容易地理解和修改代码，使代码更加稳健和可靠。")]),t._v(" "),s("p",[t._v("需要注意的是，结构化编程并不是一种具体的编程语言或框架，而是一种编程范式，可以应用于多种编程语言中。在现代编程中，大多数编程语言都支持结构化编程，因此使用结构化编程原则编写代码是一种良好的实践。")]),t._v(" "),s("h2",{attrs:{id:"结构化并发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构化并发"}},[t._v("#")]),t._v(" 结构化并发？")]),t._v(" "),s("p",[t._v("结构化并发通过引入一套规范，使得并发操作在代码中有着明确定义的层次结构，从而使并发代码更易于理解、调试和维护。")]),t._v(" "),s("p",[t._v("在传统的非结构化并发中，开发人员需要手动创建和管理线程或任务，并负责处理并发操作和同步问题。这往往导致代码复杂、容易出错，难以维护。而结构化并发则提供了更高级别的抽象，以简化并发代码的编写和组织。")]),t._v(" "),s("p",[t._v("结构化并发的主要特点包括：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("异步/等待（async/await）：结构化并发引入了异步/等待模式，允许开发人员使用 async 关键字定义异步函数，其中可以使用 await 关键字等待异步操作的结果。这使得异步代码看起来像是同步代码，更易于阅读和理解。")])]),t._v(" "),s("li",[s("p",[t._v("结构化任务（Task）：结构化并发中的任务（Task）是一个重要的概念，表示一个可以独立执行的代码块。任务可以是异步的，也可以是同步的。任务可以有父任务，从而形成明确的层次结构。")])]),t._v(" "),s("li",[s("p",[t._v("作用域绑定（Scope-Bound）：结构化并发中的任务可以通过作用域绑定来确保在任务范围内的任务和资源的生命周期。这可以帮助避免资源泄漏和明确任务的生命周期。")])]),t._v(" "),s("li",[s("p",[t._v("全局任务（Global Actors）：结构化并发中的全局任务是一种机制，用于保证特定代码块在执行时是独占的，从而避免了并发问题，例如竞态条件。")])]),t._v(" "),s("li",[s("p",[t._v("异步序列（Async Sequences）：结构化并发引入了异步序列，用于处理返回多个值的异步操作。异步序列可以异步地迭代，从而更有效地处理大量数据或流式数据。")])])]),t._v(" "),s("p",[t._v("结构化并发的目标是提供更简单、更安全、更直观的并发编程模型，使得开发人员可以更轻松地编写高效且易于维护的并发代码。在 Swift 编程语言中，引入了结构化并发模型来实现这些功能。")]),t._v(" "),s("h2",{attrs:{id:"结构化并发例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构化并发例子"}},[t._v("#")]),t._v(" 结构化并发例子")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foundation")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟一个异步任务，获取数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("fetchData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nanoseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSEC_PER_SEC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟延迟2秒")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Data fetched successfully!"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟另一个异步任务，处理数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("processData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nanoseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSEC_PER_SEC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟延迟1秒")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Processed data: ')]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("\\(")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uppercased")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" processedData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("processedData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"❌Error: ')]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("\\(")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在这个示例中，我们定义了两个异步函数"),s("code",[t._v("fetchData()")]),t._v("和"),s("code",[t._v("processData(data:)")]),t._v("，分别模拟异步获取数据和处理数据的过程。")]),t._v(" "),s("p",[t._v("然后，在 Main.main() 函数中，我们使用 async/await 语法来结构化地并发执行这两个异步任务。通过 await 关键字，我们可以在异步函数中等待另一个异步函数的结果，以确保任务按顺序执行，并且在必要时等待数据的返回。")]),t._v(" "),s("h2",{attrs:{id:"非结构化并发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非结构化并发"}},[t._v("#")]),t._v(" 非结构化并发")]),t._v(" "),s("p",[t._v("非结构化并发是指在处理并发任务时，没有明确定义的结构化模式或机制，通常更难以理解和维护。在非结构化并发中，可能会出现多个并发任务之间的交错执行，而没有明确的调度顺序或控制流。这可能导致代码的复杂性增加，更难以排查并发问题，因为不同任务之间的相互影响不易确定。")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foundation")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟一个非结构化并发的情况")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("concurrentTasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并发任务1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Task 1: ')]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("\\(")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[t._v("i")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nanoseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200_000_000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟延迟0.2秒")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并发任务2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Task 2: ')]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("\\(")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[t._v("j")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nanoseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300_000_000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟延迟0.3秒")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行非结构化并发任务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concurrentTasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待一段时间以保证所有任务执行完毕")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"何时使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("#")]),t._v(" 何时使用？")]),t._v(" "),s("p",[t._v("结构化并发和非结构化并发各有其优点和缺点，具体取决于应用场景和需求。下面是它们的优缺点总结：")]),t._v(" "),s("p",[t._v("结构化并发的优点：")]),t._v(" "),s("p",[t._v("易于理解和维护：结构化并发使用明确定义的模式和语法，使得代码更易于理解和维护。使用 async/await 或其他结构化并发机制可以将异步任务的代码写成类似于同步代码的形式，使得逻辑更为直观。\n安全性高：结构化并发通常遵循编程语言或框架的规范，避免了一些常见的并发问题，例如死锁和竞态条件。\n错误处理更容易：使用结构化并发，可以使用 do-catch 块来捕获和处理异步函数中的错误，使得错误处理更为清晰和直观。\n更好的代码结构：结构化并发使得代码的结构更为清晰，避免了回调地狱，提高了代码的可读性和可维护性。\n非结构化并发的优点：")]),t._v(" "),s("p",[t._v("更大的灵活性：非结构化并发通常可以提供更大的灵活性，可以实现自定义的并发策略或更底层的并发控制。\n适应特殊场景：某些特殊的需求和场景可能超出了结构化并发的范畴，需要使用非结构化并发来满足特定的要求。\n性能优势：在一些对性能要求非常高的场景下，可能需要使用更底层的并发机制，而非结构化并发可以提供更好的性能优势。\n结构化并发的缺点：")]),t._v(" "),s("p",[t._v("可能有一定学习曲线：对于一些开发者来说，结构化并发的概念和语法可能需要一定的学习曲线，尤其是在涉及复杂异步逻辑的场景下。\n可能存在性能开销：使用结构化并发可能会引入一定的性能开销，因为需要遵循编程语言或框架的规范，可能会涉及额外的调度和协作机制。\n非结构化并发的缺点：")]),t._v(" "),s("p",[t._v("难以理解和维护：非结构化并发通常使代码更加复杂和难以理解，可能增加了出错的可能性，使得代码难以维护。\n容易引入并发问题：由于非结构化并发缺乏明确定义的模式和规范，容易引入并发问题，如竞态条件、死锁等。\n可能降低可读性：非结构化并发可能使代码更加难以阅读，特别是对于其他开发者来说，代码的意图和执行流程不够清晰。\n需要根据具体的应用场景和需求来选择合适的并发处理方式。在大多数情况下，结构化并发是更为常见和推荐的做法，因为它使代码更易于理解和维护，同时提供了较高的安全性和可靠性。非结构化并发应该谨慎使用，并确保在特殊需求下才使用，并进行充分的测试和验证。")])])}),[],!1,null,null,null);s.default=e.exports}}]);