(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{572:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在之前的文章中，有写过一篇"),a("a",{attrs:{href:"https://oldbird.run/flutter/t5-flutter-web-deploy.html#flutter-web",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("《在 Github 上部署一个 Flutter Web 应用》"),a("OutboundLink")],1),t._v("，每次提交代码，就会触发 Github Actions 的构建流程，完成 Flutter Web 的编译部署，省心省力，一劳永逸。那么是否也能自动够构建出 iOS 包？答案是肯定的，本文将阐述其构建步骤。")]),t._v(" "),a("h2",{attrs:{id:"步骤概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤概述"}},[t._v("#")]),t._v(" 步骤概述")]),t._v(" "),a("p",[t._v("要实现构建出 Flutter iOS 包的目标，必须执行以下步骤：")]),t._v(" "),a("ul",[a("li",[t._v("安装 Apple 证书和配置文件")]),t._v(" "),a("li",[t._v("指定正确的 Flutter 版本")]),t._v(" "),a("li",[t._v("拉取 flutter packages")]),t._v(" "),a("li",[t._v("构建应用程序")]),t._v(" "),a("li",[t._v("使用正确的 Apple 证书对其进行签名")]),t._v(" "),a("li",[t._v("生成"),a("code",[t._v(".xarchive")])]),t._v(" "),a("li",[t._v("从"),a("code",[t._v(".xarchive")]),t._v("中生成"),a("code",[t._v(".ipa")])]),t._v(" "),a("li",[t._v("分享给你的用户")])]),t._v(" "),a("p",[t._v("为了完成顺利构建，我们必须提供：")]),t._v(" "),a("ul",[a("li",[t._v("可以苹果打包"),a("strong",[t._v("证书")]),t._v("（"),a("code",[t._v(".p12")]),t._v("），以及导出证书的密码")]),t._v(" "),a("li",[t._v("证书对应的"),a("strong",[t._v("描述文件")]),t._v("（"),a("code",[t._v(".mobileprovision")]),t._v("）")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/16446564927836.jpg",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("如果您不知道如何获取证书和描述文件，可以参考这篇文章："),a("a",{attrs:{href:"https://oldbird.run/swift/ios/ios-build-cers.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("《iOS 打包证书制作》"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("准备就绪，那我们开始吧！")]),t._v(" "),a("h2",{attrs:{id:"github-actions-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-是什么"}},[t._v("#")]),t._v(" GitHub Actions 是什么")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("GitHub Actions"),a("OutboundLink")],1),t._v(" 是 GitHub 的"),a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/09/continuous-integration.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("持续集成服务"),a("OutboundLink")],1),t._v("，于 2018 年 10 月推出。")]),t._v(" "),a("p",[t._v("大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。")]),t._v(" "),a("p",[t._v("很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。")]),t._v(" "),a("p",[t._v("如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。")]),t._v(" "),a("p",[a("strong",[t._v("基本概念")])]),t._v(" "),a("p",[t._v("（1）"),a("strong",[t._v("workflow")]),t._v("（工作流程）：持续集成一次运行的过程，就是一个 workflow。")]),t._v(" "),a("p",[t._v("（2）"),a("strong",[t._v("job")]),t._v("（任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。")]),t._v(" "),a("p",[t._v("（3）"),a("strong",[t._v("step")]),t._v("（步骤）：每个 job 由多个 step 构成，一步步完成。")]),t._v(" "),a("p",[t._v("（4）"),a("strong",[t._v("action")]),t._v("（动作）：每个 step 可以依次执行一个或多个命令（action）。")]),t._v(" "),a("blockquote",[a("p",[t._v("快速了解 GiHub Actions，可以参阅"),a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("《GitHub Actions 入门教程》"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("我们将创建一个"),a("code",[t._v("GitHub Action")]),t._v("，让您只需单击一下即可生成您的"),a("code",[t._v("ipa")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"配置-github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-github-actions"}},[t._v("#")]),t._v(" 配置 GitHub Actions")]),t._v(" "),a("p",[t._v("让我们创建我们的第一个"),a("strong",[t._v("工作流程（workflow）")]),t._v("！在您的项目中，您需要在"),a("code",[t._v(".github")]),t._v(" 文件夹中创建一个"),a("code",[t._v("workflows")]),t._v("文件夹，然后创建一个名为："),a("code",[t._v("ios-release.yml")]),t._v("的新文件。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/16446533386555.jpg",loading:"lazy"}})]),t._v(" "),a("p",[a("code",[t._v("ios-release.yml")]),t._v("文件将包含我们的第一个作业(job)"),a("code",[t._v("build_ios")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Flutter_iOS\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build_ios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" macos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout the code\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n")])])]),a("p",[t._v("当您在"),a("code",[t._v("master")]),t._v("分支上推送新更改时，将触发此作业(job)。我们要做的第一步(step)是检出我们分支的代码。")]),t._v(" "),a("h2",{attrs:{id:"安装苹果证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装苹果证书"}},[t._v("#")]),t._v(" 安装苹果证书")]),t._v(" "),a("p",[t._v("因为项目是开源的，但是打包又需要证书、密码和描述文件，而这些我们并不想公开出去。那这个时候我们可以借助 GitHub 提供的"),a("code",[t._v("secrets")]),t._v("功能，它可以安全的存放私密内容。")]),t._v(" "),a("p",[t._v("因为证书和描述文件都是文件类型，而 secrets 存放的是字符串，所以这个时候我们需要将文件进行"),a("code",[t._v("base64")]),t._v("成字符串。具体步骤，可以阅读这篇《How to use environment variables and secrets using GitHub Actions》(https://damienaicheh.github.io/github/actions/2021/04/15/environment-variables-secrets-github-actions-en.html)。")]),t._v(" "),a("blockquote",[a("p",[t._v("例如："),a("code",[t._v("base64 build_certificate.p12 | pbcopy")])])]),t._v(" "),a("p",[t._v("我们将定义以下 key：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".p12")]),t._v("证书的 key 为"),a("code",[t._v("P12_BASE64")])]),t._v(" "),a("li",[t._v("关联密码的 key 为"),a("code",[t._v("P12_PASSWORD")])]),t._v(" "),a("li",[t._v("描述文件的 key 为"),a("code",[t._v("PROVISIONING_PROFILE_BASE64")])])]),t._v(" "),a("p",[t._v("下一步是安装您的"),a("code",[t._v("Apple")]),t._v("证书，为此我们将使用来自社区的名为"),a("code",[t._v("apple-actions/import-codesign-certs@v1")]),t._v("的操作并使用我们之前定义的"),a("code",[t._v("secrets")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install Apple Certificate\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions/import"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("codesign"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("certs@v1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("p12-file-base64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.P12_BASE64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("p12-password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.P12_PASSWORD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("要对应用进行签名，我们还需要安装我们的描述文件：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install the provisioning profile\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PROVISIONING_CERTIFICATE_BASE64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PROVISIONING_PROFILE_BASE64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n      PP_PATH=$RUNNER_TEMP/build_pp.mobileprovision")]),t._v("\n\n      echo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('n "$PROVISIONING_CERTIFICATE_BASE64" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" base64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("decode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output $PP_PATH\n\n      mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p ~/Library/MobileDevice/Provisioning\\ Profiles\n      cp $PP_PATH ~/Library/MobileDevice/Provisioning\\ Profiles\n")])])]),a("p",[t._v("正如你在上面看到的，这个脚本有 3 个操作：")]),t._v(" "),a("ul",[a("li",[t._v("创建"),a("code",[t._v("secrets")]),t._v("变量")]),t._v(" "),a("li",[t._v("从"),a("code",[t._v("secrets")]),t._v("导入描述文件")]),t._v(" "),a("li",[t._v("配置描述文件")])]),t._v(" "),a("h2",{attrs:{id:"构建-flutter-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建-flutter-代码"}},[t._v("#")]),t._v(" 构建 Flutter 代码")]),t._v(" "),a("p",[t._v("为了能够在我们的工作流程中使用 Flutter，我们需要安装它。为了实现这一目标，我们将使用社区的另一个"),a("code",[t._v("action")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install and set Flutter version\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" subosito/flutter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@v1.4.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flutter-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.10.0"')]),t._v("\n")])])]),a("p",[t._v("我们需要添加这个 action 并指定我们要使用的 Flutter 版本。建议指定确切的 flutter 版本，而不是使用"),a("code",[t._v("stable")]),t._v("作为值，以避免在发布新的"),a("code",[t._v("stable")]),t._v("版本时发生潜在的重大更改。")]),t._v(" "),a("p",[t._v("现在我们可以为我们的应用程序拉取 packages：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Restore packages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter pub get\n")])])]),a("p",[t._v("检索到它们后，我们可以在"),a("code",[t._v("release")]),t._v("模式下构建应用程序而无需对其进行签名：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build Flutter\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter build ios "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("release "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("codesign\n")])])]),a("p",[t._v("我们将在下一步应用之前安装的证书！")]),t._v(" "),a("h2",{attrs:{id:"生成-xarchive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-xarchive"}},[t._v("#")]),t._v(" 生成 xArchive")]),t._v(" "),a("p",[t._v("首先，使用 XCode 打开您的 iOS 项目并选择目标，并在"),a("code",[t._v("Signing & Capabilities")]),t._v(" 中确保未选中"),a("code",[t._v("Automatically manage signing")]),t._v("，这样我们就可以使用所需的证书对其进行签名，而无需编辑 XCode 项目。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/16446565628123.jpg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("接下来，当您签署 iOS 应用程序时，您不会签署与其关联的 pod，因此您需要在 "),a("code",[t._v("Podfile")]),t._v("中指定它，如下所示：")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("post_install "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("installer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  installer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pods_project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("targets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("each")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    flutter_additional_ios_build_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build_configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("each")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CODE_SIGNING_REQUIRED'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NO"')])]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CODE_SIGNING_ALLOWED'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NO"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("在生成"),a("code",[t._v("xarchive")]),t._v("之前，我们需要解决项目的"),a("code",[t._v("Swift")]),t._v("依赖项。当你有一些用"),a("code",[t._v("Swift")]),t._v("编写的 Flutter iOS 插件时，这特别有用。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build resolve Swift dependencies\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xcodebuild "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("resolvePackageDependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("workspace ios/Runner.xcworkspace "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("scheme Runner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release\n")])])]),a("p",[t._v("现在要创建一个"),a("code",[t._v("xarchive")]),t._v("，您需要找到一些可以在您的描述文件或 Apple 证书中找到的信息：")]),t._v(" "),a("ul",[a("li",[t._v("开发团队标识符")]),t._v(" "),a("li",[t._v("UUID，它是您的 Provisioning Profile 的标识符")]),t._v(" "),a("li",[t._v("代码签名标识")])]),t._v(" "),a("p",[t._v("完成所有这些后，我们可以这样使用：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build xArchive\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n     xcodebuild -workspace ios/Runner.xcworkspace -scheme Runner -configuration Release DEVELOPMENT_TEAM=YOUR_TEAM_ID -sdk 'iphoneos' -destination 'generic/platform=iOS' -archivePath build-output/app.xcarchive PROVISIONING_PROFILE=YOUR_UUID clean archive CODE_SIGN_IDENTITY=\"Apple Distribution: Damien Aicheh\"")]),t._v("\n")])])]),a("h2",{attrs:{id:"生成-ipa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-ipa"}},[t._v("#")]),t._v(" 生成 ipa")]),t._v(" "),a("p",[t._v("使用生成的 xarchive，我们可以将其导出为 ipa。为此，我们需要在项目中添加一个名为"),a("code",[t._v("ExportOptions.plist")]),t._v("的新文件来指定导出选项。")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("plist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("PUBLIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-//Apple//DTD PLIST 1.0//EN"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.apple.com/DTDs/PropertyList-1.0.dtd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("method"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("app-store"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- app-store, ad-hoc, enterprise, development --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("teamID"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("YOUR_TEAM_ID"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("signingStyle"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("manual"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provisioningProfiles"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("YOUR_BUNDLE_ID"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("YOUR_UUID"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("根据您的项目配置，您可能需要向此文件添加更多选项。如果需要，您可以为项目的每个环境创建一个"),a("code",[t._v("ExportOptions.plist")]),t._v("文件。")]),t._v(" "),a("p",[t._v("然后只需运行此命令行，您的"),a("code",[t._v("ipa")]),t._v("就会生成：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Export ipa\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xcodebuild "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exportArchive "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("archivePath build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output/app.xcarchive "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exportPath build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output/ios "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exportOptionsPlist ios/ExportOptions.plist\n")])])]),a("h2",{attrs:{id:"发布产物"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布产物"}},[t._v("#")]),t._v(" 发布产物")]),t._v(" "),a("p",[t._v("要从 GitHub 界面访问生成的 ipa，让我们添加最后一个操作：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish iOS Artefacts\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/upload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("artifact@v1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ios\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output/ios\n")])])]),a("p",[t._v("这将发布包含我们 ipa 的 ios 文件夹。然后，您可以将其安装在您的设备上。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/mweb/16447391441739.jpg",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("现在，您可以根据项目的上下文与用户共享您的应用程序了！您将在此 Github 中找到示例代码："),a("a",{attrs:{href:"https://github.com/swiftdo/flutter_best_practice",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("flutter_best_practice"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"参阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参阅"}},[t._v("#")]),t._v(" 参阅")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://damienaicheh.github.io/flutter/github/actions/2021/04/22/build-sign-flutter-ios-github-actions-en.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("How to build and sign your Flutter iOS application using GitHub Actions"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://damienaicheh.github.io/github/actions/2021/04/15/environment-variables-secrets-github-actions-en.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("How to use environment variables and secrets using GitHub Actions"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.github.com/cn/actions/deployment/deploying-xcode-applications/installing-an-apple-certificate-on-macos-runners-for-xcode-development",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("在用于 Xcode 开发的 macOS 运行器上安装 Apple 证书"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);