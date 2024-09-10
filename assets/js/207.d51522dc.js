(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{671:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("原文："),s("a",{attrs:{href:"https://developer.apple.com/documentation/swift_packages/bundling_resources_with_a_swift_package",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://developer.apple.com/documentation/swift_packages/bundling_resources_with_a_swift_package"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("将资源文件添加到您的 Swift 包并在您的代码中访问它们。")]),t._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("p",[t._v("如果你在软件包清单中用Swift版本为5.3或更高的工具声明，你可以将资源与你的源代码捆绑成Swift包。例如，Swift包可以包含资产目录、故事板，等等。")]),t._v(" "),s("h2",{attrs:{id:"添加资源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加资源文件"}},[t._v("#")]),t._v(" 添加资源文件")]),t._v(" "),s("p",[t._v('与源代码类似，Xcode将资源的作用范围扩大到一个 target。将资源文件放到与它们所属的target相对应的文件夹中。例如，MyLibrary目标的任何资源都需要放置在Sources/MyLibrary中。\n然而，可以考虑为资源使用一个子文件夹，以区分它们与源文件。例如，把所有的资源文件放到一个名为"Resources"的目录中，结果是所有的资源文件都放在Sources/MyLibrary/Resources。')]),t._v(" "),s("p",[t._v("要将资源添加到 Swift 包，请执行以下任一操作：")]),t._v(" "),s("ul",[s("li",[t._v("将它们拖入Xcode中的项目导航器。")]),t._v(" "),s("li",[t._v("从Xcode的文件菜单中，选择添加文件到[packageName]。")]),t._v(" "),s("li",[t._v("使用Finder或终端应用程序。")])]),t._v(" "),s("p",[t._v("当您在 Swift 包中添加资源时，Xcode 会检测 apple 平台的常见资源类型，并自动将其视为一种资源。例如，对于以下资源，您不需要对您的包清单进行修改。")]),t._v(" "),s("ul",[s("li",[t._v("Interface Builder 文件；例如，XIB文件和storyboards")]),t._v(" "),s("li",[t._v("Core Data 文件；例如，xcdatamodeld文件")]),t._v(" "),s("li",[t._v("Asset 目录")]),t._v(" "),s("li",[t._v("用来提供本地化资源的.lproj文件夹")])]),t._v(" "),s("p",[t._v("如果你添加了一个Xcode默认不作为资源的资源文件，你必须在你的包清单中配置它，如在下一节所述。")]),t._v(" "),s("h2",{attrs:{id:"明确声明或排除资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#明确声明或排除资源"}},[t._v("#")]),t._v(" 明确声明或排除资源")]),t._v(" "),s("p",[t._v("要添加一个Xcode不能自动处理的资源，请在你的包清单中明确声明它为一个资源。下面的例子假设 text.txt 驻留在 Sources/MyLibrary 中，并且你想把它包含在 MyLibrary 目标中。要明确地将其声明为包资源，您需要将其文件名传递给包清单中目标的初始化器。")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("targets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyLibrary"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text.txt"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("注意上面的示例代码是如何使用"),s("code",[t._v("process(_:localization:)")]),t._v("函数的。当你显式地声明一个资源时，你必须选择这些规则中的一个来告诉Xcode如何处理这个资源文件：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("处理规则\n对于大多数使用情况，使用"),s("code",[t._v("process(_:localization:)")]),t._v("来应用这个规则，并让Xcode根据你构建包的平台来处理资源。例如，Xcode可以为一个支持这种优化的平台优化图像文件。如果您将处理规则应用于一个目录的路径，Xcode将该规则递归地应用于该目录的内容。如果对一个资源没有特殊处理，Xcode 会将该资源复制到资源包的顶级目录中。")])]),t._v(" "),s("li",[s("p",[t._v("复制规则\n一些 Swift 包可能要求资源文件保持不动，或者为资源保留一定的目录结构。使用 copy(_😃 函数来应用这一规则，并让 Xcode 将资源原样复制到资源包的顶层。如果您向复制规则传递一个目录路径，Xcode将保留该目录的结构。")])])]),t._v(" "),s("p",[t._v("如果一个文件驻留在目标文件夹内，而你不希望它成为包的资源，请把它传递给目标初始化器的排除参数。下一个例子假设 instructions.md 是一个包含文档的 Markdown 文件，位于 Sources/MyLibrary，不应该成为包的资源包的一部分。这段代码显示了如何通过将该文件添加到排除文件列表中，将其排除在目标文件之外。")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("targets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyLibrary"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"instructions.md"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("一般来说，避免把不是资源的文件放在目标的源文件夹中。如果这不可行，避免单独排除每个文件，把你想排除的所有文件放在一个目录中，并把目录路径添加到排除文件的数组中。")]),t._v(" "),s("h2",{attrs:{id:"在代码中访问资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在代码中访问资源"}},[t._v("#")]),t._v(" 在代码中访问资源")]),t._v(" "),s("p",[t._v("当你构建你的 Swift 包时，Xcode 将每个 target 视为一个 Swift 模块。如果一个 target 包括资源，Xcode 会为每个模块创建一个资源包和一个关于 Bundle 的内部静态扩展来访问它。使用该扩展来定位包的资源。例如，使用下面的方法来检索您与包捆绑的属性列表的URL：")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" settingsURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forResource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withExtension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plist"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[s("strong",[t._v("Important")])]),t._v(" "),s("p",[t._v("当你访问资源时，总是使用Bundle.module。一个包不应该对资源的确切位置做出假设。")])]),s("p",[t._v("如果你想让依赖你的 Swift 包的应用程序可以使用某个包的资源，请为它声明一个公共常量。例如，使用下面的方法向使用你的 Swift 包的应用程序公开一个 plist 文件：")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" settingsURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forResource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withExtension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plist"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);