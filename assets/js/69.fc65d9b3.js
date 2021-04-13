(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{578:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("使用 Flutter 构建应用程序，我们一般会选用 stable 版本的 flutter，因为它是个稳定版本。如果你要用 Flutter 尝试写个 web 应用，就必须得使用 beta 版本，因为现在只有 beta 版本支持 web 开发。")]),t._v(" "),e("p",[t._v("这就意味着，在 web 开发和应用程序开发的时候，你需要卸载当前的版本，然后去安装另外一个版本。这是个很耗时的操作。可能你的网速快，机器性能好，不在乎这么点时间。但如果需要经常性切换 Flutter 版本，这样的操作就很痛苦了。事不过三，过三必重构(合格的程序员都喜欢偷懒，不做重复工作)")]),t._v(" "),e("blockquote",[e("p",[t._v("可能还有更苦逼的，同时开发多个应用，每个应用的 Flutter 版本还不一样，这就受不了了吧。")])]),t._v(" "),e("p",[t._v("如果你写过 python，就会说：直接给每个项目创建个虚拟环境不就可以了。")]),t._v(" "),e("p",[t._v("如果 flutter 也能有这么个虚拟环境管理工具就好了。")]),t._v(" "),e("p",[t._v("而 "),e("a",{attrs:{href:"https://github.com/leoafarias/fvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/leoafarias/fvm"),e("OutboundLink")],1),t._v(" 就能满足需求。")]),t._v(" "),e("blockquote",[e("p",[t._v("Flutter Version Management: A simple app & cli to manage Flutter SDK versions.")])]),t._v(" "),e("p",[t._v("fvm 能够让用户同时在本地安装并缓存多个 Flutter 版本，并为项目创建指定 Flutter 版本的软链接，或者在全局环境创建指定版本的 Flutter 软链接，还可以快速在各个版本间切换使用。")]),t._v(" "),e("p",[t._v("世界那么大，你能遇到的别人也能遇到，你想偷的懒别人也一样想。话说回来，如果产品能解决痛点，会缺用户么?")]),t._v(" "),e("h2",{attrs:{id:"fvm-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fvm-安装"}},[t._v("#")]),t._v(" fvm 安装")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("pub global activate fvm\n")])])]),e("h2",{attrs:{id:"fvm-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fvm-常用命令"}},[t._v("#")]),t._v(" fvm 常用命令")]),t._v(" "),e("p",[t._v("一般需要查看命令的使用说明，都会通过 "),e("code",[t._v("--help")]),t._v(" 查看。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ fvm --help\nFlutter Version Management: A cli to manage Flutter SDK versions.\n\nUsage: fvm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nGlobal options:\n-h, --help       Print this usage information.\n    --verbose    Print verbose output.\n\nAvailable commands:\n  config     Set configuration "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" FVM\n  flutter    Proxies Flutter Commands\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("    Installs Flutter SDK Version\n  list       Lists installed Flutter SDK Version\n  releases   Lists Flutter SDK releases.\n  remove     Removes Flutter SDK Version\n  use        Which Flutter SDK Version you would like to use\n  version    Prints the currently-installed version of FVM\n\nRun "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fvm help <command>"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information about a command.\n")])])]),e("ul",[e("li",[t._v("config： 对 fvm 进行配置")]),t._v(" "),e("li",[t._v("flutter： 对 Flutter 的命令进行代理")]),t._v(" "),e("li",[t._v("install： 安装 Flutter 版本")]),t._v(" "),e("li",[t._v("list： 查看已安装的 Flutter 版本")]),t._v(" "),e("li",[t._v("releases： 查看 Flutter sdk 都有哪些发布的版本")]),t._v(" "),e("li",[t._v("remove：删除已安装的某个 Flutter 的版本")]),t._v(" "),e("li",[t._v("use: 选择你要使用的版本")]),t._v(" "),e("li",[t._v("version: 查看安装 fvm 的版本")])]),t._v(" "),e("p",[t._v("对于子命令的更多使用方法，我们可以通过  "),e("code",[t._v("fvm help <command>")]),t._v(" 进行查看，比如：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ fvm "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" use\nWhich Flutter SDK Version you would like to use\n\nUsage: fvm use "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n-h, --help      Print this usage information.\n    --global    Sets version as the global version.\n                Make sure Flutter "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" is "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" to: /Users/oheroj/fvm/default/bin\n    --force     Skips "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" guards that does Flutter project checks.\n\nRun "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fvm help"')]),t._v(" to see global options.\n")])])]),e("ul",[e("li",[t._v("-h，--help ：可以查看更多使用信息")]),t._v(" "),e("li",[t._v("--global: 将这个版本设置为全局版本")]),t._v(" "),e("li",[t._v("--force: 跳过执行 Flutter 项目检查命令")])]),t._v(" "),e("p",[t._v("命令学习的套路就是多用 help。其他命令读者可自行学习。")]),t._v(" "),e("h2",{attrs:{id:"实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[t._v("#")]),t._v(" 实战")]),t._v(" "),e("h3",{attrs:{id:"创建全新项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建全新项目"}},[t._v("#")]),t._v(" 创建全新项目")]),t._v(" "),e("p",[t._v("接下来我们将用 fvm 创建一个新 flutter 应用项目，采用 flutter 的 beta 版本。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安装 beta 的 flutter 版本")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ fvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" beta\nInstalling version: beta\nCloning into "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/oheroj/fvm/versions/beta'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nremote: Enumerating objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", done.\nremote: Counting objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nremote: Compressing objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nremote: Total "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("279564")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", reused "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", pack-reused "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("279561")]),t._v("\nReceiving objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("279564")]),t._v("/279564"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.05")]),t._v(" MiB "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.52")]),t._v(" MiB/s, done.\nResolving deltas: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("216093")]),t._v("/216093"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nUpdating files: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5185")]),t._v("/5185"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nVersion installed: beta\nDownloading Dart SDK from Flutter engine 7a8f8ca02c276dce02f8dd42a44e776ac03fa9bc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  173M  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("  173M    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  5686k      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":00:31  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":00:31 --:--:-- 4431k\nBuilding flutter tool"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nFlutter "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.25")]),t._v(".0-8.3.pre • channel beta • https://github.com/flutter/flutter.git\nFramework • revision 5d36f2e7f5 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" days ago"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" • "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-01-14 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":57:49 -0800\nEngine • revision 7a8f8ca02c\nTools • Dart "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.12")]),t._v(".0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("build "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.12")]),t._v(".0-133.7.beta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("创建 demo 目录，然后采用 beta 版本")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" demo\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" demo\n$ fvm use beta --force\nProject now uses Flutter: beta\n")])])]),e("p",[t._v("这个时候我们看下目录下多了 .fvm")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -all\ntotal "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\ndrwxr-xr-x  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" oheroj  staff   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),t._v(" Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":14 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\ndrwxr-xr-x  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" oheroj  staff  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),t._v(" Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":04 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\ndrwxr-xr-x  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" oheroj  staff  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v(" Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":14 .fvm\n$ tree .fvm\n.fvm\n├── flutter_sdk -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /Users/oheroj/fvm/versions/beta\n└── fvm_config.json\n")])])]),e("p",[t._v("flutter_sdk 软连接到了 "),e("code",[t._v("/Users/oheroj/fvm/versions/beta")])])]),t._v(" "),e("li",[e("p",[t._v("初始化项目")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ fvm flutter create .\n")])])]),e("p",[t._v("demo 项目就初始完成了")])]),t._v(" "),e("li",[e("p",[t._v("vscode 配置 和 Android Studio 的配置")]),t._v(" "),e("p",[t._v("直接参考官方文档："),e("a",{attrs:{href:"https://github.com/leoafarias/fvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/leoafarias/fvm"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"给旧项目添加-fvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给旧项目添加-fvm"}},[t._v("#")]),t._v(" 给旧项目添加 fvm")]),t._v(" "),e("p",[t._v("对于就项目我们如果想切到 fvm 的 flutter 环境，这个步骤还是非常简单的。")]),t._v(" "),e("p",[t._v("在项目根路径下执行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ fvm use beta --force \n")])])]),e("p",[t._v("完成上面的命令，会有个 "),e("code",[t._v(".fvm")]),t._v(" 文件夹生成，然后配置 IDE，方法同上。")]),t._v(" "),e("p",[t._v("可以愉快的玩耍 flutter 了。")]),t._v(" "),e("h3",{attrs:{id:"拉取已用-fvm-的项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取已用-fvm-的项目"}},[t._v("#")]),t._v(" 拉取已用 fvm 的项目")]),t._v(" "),e("p",[t._v("加上我们项目已经用 fvm 创建好了，这个时候我们把仓库提交到 git 仓库。 那么，如果你这个仓库在另一台机器拉取下来，这个时候该如何让 fvm 工作？")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("确保你这台机器已经有了 fvm 的环境")])]),t._v(" "),e("li",[e("p",[t._v("在项目根路径下，直接执行")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ fvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("运行完成，就实现了安装。\n假设你机器上只有 beta 版本，但是这个项目用了 stable 版本，如果上面运行说未找到 stable 版本，那么你需要先安装下 stable 版本")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ fvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" stable\n$ fvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("然后配置 IDE，方法同上。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);