(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{832:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("通过集成 package 依赖，实现项目之间共享代码，或利用其他开发者的代码。")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Xcode 内置了对源控制账户的支持，并能轻松利用可用的 Swift 包。使用 Xcode 来管理包的依赖版本，并确保你的项目有最新的代码变化。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[s("strong",[t._v("Note")])]),t._v(" "),s("p",[t._v("Package 作者可以将他们的 Swift Package 发布到公共或私人仓库。Xcode 支持私有和公开的软件包。")])]),s("h2",{attrs:{id:"添加-package-依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-package-依赖"}},[t._v("#")]),t._v(" 添加 Package 依赖")]),t._v(" "),s("p",[t._v("要在你的 Xcode 项目中添加一个 Package，选择"),s("code",[t._v("File> Add Packages")]),t._v('，并输入其存储库的 URL。你也可以导航到你的目标的常规窗格，在 "Frameworks, Libraries, and Embedded Content"部分，点击 + 按钮，选择'),s("code",[t._v("Add Other")]),t._v("，并选择"),s("code",[t._v("Add Package Dependency")]),t._v("。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/16489060301766.jpg",loading:"lazy"}})]),t._v(" "),s("p",[t._v("你可以在 GitHub 或 GitHub Enterprise 上搜索一个软件包，而不是添加一个仓库的 URL。在 Xcode 的 preferences 添加你的 GitHub 或 GitHub Enterprise 账户，当你输入时，就会出现一个软件包库的列表。下面的截图显示了一个用户在 Xcode 的 preferences 中添加了他们的 Git 提供者的搜索词 ExamplePackage 的存储库列表。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/16489061783290.jpg",loading:"lazy"}})]),t._v(" "),s("p",[t._v("如果你在 Xcode 的 preferences 中添加了一个源控制帐户，并且你还没有输入一个搜索词，该列表中的内容来自的：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[s("strong",[t._v("Important")])]),t._v(" "),s("p",[t._v("只添加值得信赖 Package。此外，与添加基于源的依赖项相比，添加二进制依赖项存在一些缺点。请参阅"),s("a",{attrs:{href:""}},[t._v("识别二进制依赖项")]),t._v("以了解更多信息。")])]),s("h2",{attrs:{id:"选择特定的-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择特定的-package"}},[t._v("#")]),t._v(" 选择特定的 Package")]),t._v(" "),s("p",[t._v("当您输入软件包依赖的 URL 或从软件包列表中挑选一个 Swift 软件包时，请从下面三个 requirements 中选择一个。 Package requirements 决定了你的项目中允许的包依赖的版本，Xcode 会根据你选择的 requirement 更新你的包依赖。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Version")]),t._v(" "),s("p",[t._v("决定你的项目是否接受软件包依赖关系的更新，直到下一个主要版本或下一个次要版本。为了更严格，可以选择一个特定的版本范围或确切的版本。主要版本往往比次要版本有更大的变化，当它们更新时可能需要你修改你的代码。版本规则要求 Swift 包符合语义版本划分。要了解更多关于语义版本控制标准的信息，请访问"),s("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("semver.org"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("选择版本要求是添加软件包依赖关系的推荐方式。它允许你在限制变化和获得改进和功能之间建立一个平衡。")])]),t._v(" "),s("li",[s("p",[t._v("Branch")]),t._v(" "),s("p",[t._v("选择你的软件包依赖的分支名称，以便跟随。当你串联开发多个软件包，并且不想发布软件包依赖的版本时，可以使用基于分支的依赖关系。")])]),t._v(" "),s("li",[s("p",[t._v("Commit")]),t._v(" "),s("p",[t._v("选择你的软件包依赖的提交哈希值来遵循。不建议选择这个选项，你应该只在特殊情况下使用这个选项。虽然把你的软件包依赖关系钉在一个特定的提交上可以确保软件包依赖关系不发生变化，让你的代码保持稳定，但你不会收到任何更新。如果你担心远程软件包的稳定性，可以考虑基于版本的需求中的一个更有限制性的选项。")])])]),t._v(" "),s("p",[t._v("在你选择了一个包的需求后，Xcode 会解析并获取包的依赖性。选择你需要的包的产品，并将它们添加到你的项目中的目标。")]),t._v(" "),s("p",[t._v("在 Xcode 的项目导航器中，Swift Package Dependencies 部分显示了新添加的包的依赖性。点击披露三角形来查看包的内容，因为它存在于你的 Mac 上的本地。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[s("strong",[t._v("Tip")])]),t._v(" "),s("p",[t._v("虽然 Xcode 会自动更新你的包的依赖关系和解决包的版本，但你可以从"),s("code",[t._v("File> Swift Packages")]),t._v("菜单中触发这两个动作。")])]),s("h2",{attrs:{id:"使用-swift-包提供的功能和-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-swift-包提供的功能和-assets"}},[t._v("#")]),t._v(" 使用 Swift 包提供的功能和 Assets")]),t._v(" "),s("p",[t._v("要在你的应用程序中使用一个 Swift 包的功能，请将一个包的产品作为一个 Swift 模块导入。下面的代码片段显示了一个 controller，它导入了一个 Swift 包的 MyLibrary 模块并使用了该包的功能：")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIKit")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import the module that corresponds with the Swift package’s library product MyLibrary.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLibrary")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@IBOutlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UILabel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@IBOutlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIButton")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@IBOutlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" anImageView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIImageView")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@IBOutlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aCustomView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomView")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("viewDidLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("viewDidLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use a string that the package exposes as a property in the MyLibrary file.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLibrary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleText\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Load an image that the MyLibrary package makes available through a class method.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" imagePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exampleImagePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anImageView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contentsOfFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" imagePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the Swift package’s CustomView class.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aCustomView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show an alert by calling the package’s API.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@IBAction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("showAlert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showAlertUsing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"编辑-package-dependency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑-package-dependency"}},[t._v("#")]),t._v(" 编辑 Package Dependency")]),t._v(" "),s("p",[t._v("你不能直接编辑你的软件包依赖的内容。如果你想对一个包的依赖关系进行修改，你需要把它作为一个本地包添加到你的项目中。请参阅[以本地包的方式编辑包依赖]，了解如何用本地包覆盖软件包依赖关系并进行编辑。")]),t._v(" "),s("h2",{attrs:{id:"协调包版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协调包版本"}},[t._v("#")]),t._v(" 协调包版本")]),t._v(" "),s("p",[t._v("当在一个项目上进行协作时，确保每个人都使用相同版本的软件包依赖关系。当您在项目中添加软件包依赖时，Xcode 会创建 Package.resolved 文件。它列出了每个软件包依赖关系所解析的特定 Git 提交以及每个二进制依赖关系的校验和。在 Git 中提交这个文件以确保每个人都在使用相同版本的软件包依赖。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[s("strong",[t._v("Tip")])]),t._v(" "),s("p",[t._v("你可以在你的 .xcodeproj 目录中找到 Package.resolved 文件，地址是 [appName].xcodeproj/project.workspace/xcshareddata/swiftpm/Package.resolved。")])]),s("h2",{attrs:{id:"删除-package-dependency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除-package-dependency"}},[t._v("#")]),t._v(" 删除 Package Dependency")]),t._v(" "),s("p",[t._v('如果您需要从您的 Xcode 项目中删除一个包的依赖关系，请在设置中导航到 Swift 包列表，然后从包的列表中选择 Swift 包。点击 "-" 按钮来删除选定的软件包依赖关系。')]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://docs-assets.developer.apple.com/published/a687950960/a60b2460-f930-4bfe-bf46-4f57bfac42f2.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);