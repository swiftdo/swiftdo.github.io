(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{755:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("swiftenv")]),s._v(" 是 Swift 的版本管理器，可以对特定项目指定特定的 Swift 的版本，或者全局切换 Swift 的版本。")]),s._v(" "),t("ul",[t("li",[s._v("swiftenv 的源码地址："),t("a",{attrs:{href:"https://github.com/kylef/swiftenv",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("kylef/swiftenv"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("swiftenv 的官方文档："),t("a",{attrs:{href:"https://swiftenv.fuller.li/en/latest/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("swiftenv.fuller.li"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("检出 swiftenv 的源码，且推荐将其放置到 "),t("code",[s._v("~/.swiftenv")]),s._v(" 中（但只要设置 "),t("code",[s._v("SWIFTENV_ROOT")]),s._v(" 就可以安装在别处）。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/kylef/swiftenv.git ~/.swiftenv\n")])])])]),s._v(" "),t("li",[t("p",[s._v("配置环境")]),s._v(" "),t("p",[s._v("如果是 "),t("code",[s._v("Bash")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export SWIFTENV_ROOT=\"$HOME/.swiftenv\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bash_profile\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\"$SWIFTENV_ROOT/bin:$PATH\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bash_profile\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval \"$(swiftenv init -)\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bash_profile\n")])])]),t("p",[t("strong",[s._v("注意")]),s._v("：在某些平台上，您可能需要修改 "),t("code",[s._v("~/.bashrc")]),s._v(" 而不是 "),t("code",[s._v("~/.bash_profile")]),s._v("。")]),s._v(" "),t("p",[s._v("如果是 "),t("code",[s._v("ZSH")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export SWIFTENV_ROOT=\"$HOME/.swiftenv\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshenv\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\"$SWIFTENV_ROOT/bin:$PATH\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshenv\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval \"$(swiftenv init -)\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshenv\n")])])]),t("p",[s._v("如果是 "),t("code",[s._v("Fish")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set -gx SWIFTENV_ROOT \"$HOME/.swiftenv\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.config/fish/config.fish\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set -gx PATH \"$SWIFTENV_ROOT/bin\" $PATH'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.config/fish/config.fish\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'if which swiftenv > /dev/null; status --is-interactive; and source (swiftenv init -|psub); end'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.config/fish/config.fish\n")])])])]),s._v(" "),t("li",[t("p",[s._v("重新启动您的 shell 以使更改生效。")])])]),s._v(" "),t("h2",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("从 "),t("code",[s._v(".bash_profile")]),s._v("、"),t("code",[s._v(".bashrc")]),s._v("、"),t("code",[s._v(".zshrc")]),s._v("、"),t("code",[s._v("fish.config")]),s._v(" 中删除 swiftenv 相关安装期间加入的配置")])]),s._v(" "),t("li",[t("p",[s._v("删除 SWIFTENV_ROOT 指向的目录，比如 "),t("code",[s._v("~/.swiftenv")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fr")]),s._v(" ~/.swiftenv\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[s._v("#")]),s._v(" 版本")]),s._v(" "),t("p",[s._v("安装"),t("code",[s._v("swiftenv")]),s._v("后，您可以通过相关指令查看已安装的现有 Swift 版本：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv versions\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v(".5\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v("\n* "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /home/mac/Swift/team-boke/.swift-version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"安装指定版本的-swift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装指定版本的-swift"}},[s._v("#")]),s._v(" 安装指定版本的 Swift")]),s._v(" "),t("p",[s._v("您可以使用"),t("code",[s._v("swiftenv install")]),s._v("快速安装。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".1\n")])])]),t("h3",{attrs:{id:"查看所有-swift-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有-swift-版本"}},[s._v("#")]),s._v(" 查看所有 Swift 版本")]),s._v(" "),t("p",[s._v("你可以列出所有可安装的 Swift 版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v(".4\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v(".5\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v(".1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v(".2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v(".3\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".3\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".1\n")])])]),t("p",[s._v("您还可以列出所有可以安装的 Swift 二进制快照")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --list-snapshots\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v("-DEVELOPMENT-SNAPSHOT-2020-08-15-a\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v("-DEVELOPMENT-SNAPSHOT-2020-08-17-a\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v("-DEVELOPMENT-SNAPSHOT-2020-08-18-a\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v("-DEVELOPMENT-SNAPSHOT-2020-08-27-a\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),t("h3",{attrs:{id:"切换-swift-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换-swift-版本"}},[s._v("#")]),s._v(" 切换 Swift 版本")]),s._v(" "),t("p",[s._v("swiftenv 允许您在全局或本地进行 Swift 版本的切换。您可以配置默认使用的全局 Swift 版本，除非被覆盖。")]),s._v(" "),t("p",[t("strong",[s._v("全局版本")])]),s._v(" "),t("p",[s._v("您可以使用"),t("code",[s._v("swiftenv global")]),s._v("查看当前的全局 Swift 版本。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv global\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".1\n")])])]),t("p",[s._v("切换全局版本：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv global "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v(".0\n")])])]),t("p",[t("strong",[s._v("本地版本")])]),s._v(" "),t("p",[s._v("您可以使用 "),t("code",[s._v(".swift-version")]),s._v(" 文件覆盖任何项目中的全局版本。 Swift 版本文件将指示要使用的版本。")]),s._v(" "),t("p",[s._v("设置本地 Swift 版本：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v(".5\n")])])]),t("p",[s._v("现在，当您在当前目录中时，Swift 版本将自动更改为本地版本：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ swiftenv global\n5.5.1\n\n$ swiftenv version\n5.2.5 (set by /home/mac/Swift/team-boke/.swift-version)\n")])])]),t("p",[s._v("当您切换到另一个没有"),t("code",[s._v(".swift-version")]),s._v("文件的目录时，将使用全局版本：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n$ swiftenv version\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /home/mac/.swiftenv/version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"卸载-swift-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载-swift-版本"}},[s._v("#")]),s._v(" 卸载 Swift 版本")]),s._v(" "),t("p",[s._v("卸载特定的 Swift 版本。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv uninstall "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v(".0\n")])])]),t("h3",{attrs:{id:"which"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#which"}},[s._v("#")]),s._v(" which")]),s._v(" "),t("p",[s._v("显示可执行文件的完整路径。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ swiftenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" swift\n/home/mac/.swiftenv/versions/5.5.1/usr/bin/swift\n\n$ swiftenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" lldb\n/home/mac/.swiftenv/versions/5.5.1/usr/bin/lldb\n\n$ swiftenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" sourcekit-lsp\n/home/mac/.swiftenv/versions/5.5.1/usr/bin/sourcekit-lsp\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);