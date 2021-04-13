(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{632:function(t,s,e){"use strict";e.r(s);var a=e(4),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clone 父仓库的时候加上 --recursive，会自动初始化并更新仓库中的每一个子模块")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/chaconinc/MainProject\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Git 将会进入子模块然后抓取并更新，默认更新master分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --remote\n")])])]),e("p",[t._v("如果，git clone 的时候忘记 "),e("code",[t._v("--recursive")]),t._v(", 可以：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init\n")])])]),e("p",[t._v("如果还要初始化、抓取并检出任何嵌套的子模块，请使用：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive\n")])])]),e("p",[t._v("假定我们有两个项目："),e("code",[t._v("project-main")]),t._v(" 和 "),e("code",[t._v("project-sub-1")]),t._v("，其中 "),e("code",[t._v("project-main")]),t._v(" 表示主项目，而 "),e("code",[t._v("project-sub-1")]),t._v(" 表示子模块项目。")]),t._v(" "),e("p",[t._v("其中 "),e("code",[t._v("project-main")]),t._v(" 的远程仓库地址为 "),e("code",[t._v("https://github.com/username/project-main.git")]),t._v("，而 "),e("code",[t._v("project-sub-1")]),t._v(" 的远程仓库地址为 "),e("code",[t._v("https://github.com/username/project-sub-1.git")]),t._v("。")]),t._v(" "),e("p",[t._v("接下来，我们希望在 "),e("code",[t._v("project-main")]),t._v(" 中添加 "),e("code",[t._v("project-sub-1")]),t._v(" ，而又保持 "),e("code",[t._v("project-sub-1")]),t._v(" 自身独立的版本控制。")]),t._v(" "),e("h2",{attrs:{id:"创建-submodule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-submodule"}},[t._v("#")]),t._v(" 创建 submodule")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("git submodule add <submodule_url>")]),t._v("命令可以在项目中创建一个子模块。")]),t._v(" "),e("p",[t._v("此时项目仓库中会多出两个文件："),e("code",[t._v(".gitmodules")]),t._v(" 和 "),e("code",[t._v("project-sub-1")])]),t._v(" "),e("p",[t._v("前者的内容是这样的，事实上就是子模块的相关信息；\n而后者那个文件，实际上保存的是子模块当前版本的版本号信息。")]),t._v(" "),e("p",[t._v("如果此前项目中已经存在 "),e("code",[t._v(".gitmodules")]),t._v(" 文件，则会在文件内容中多出上述三行记录。")]),t._v(" "),e("p",[t._v("事实上，此时在 "),e("code",[t._v(".git/config")]),t._v(" 文件中也会多出一些信息，在 "),e("code",[t._v(".git/modules")]),t._v(" 文件夹下也会多出一份内容。")]),t._v(" "),e("h2",{attrs:{id:"获取-submodule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取-submodule"}},[t._v("#")]),t._v(" 获取 submodule")]),t._v(" "),e("p",[t._v("上述步骤在创建子模块的过程中，会自动将相关代码克隆到对应路径，但对于后续使用者而言，对于主项目使用普通的 clone 操作并不会拉取到子模块中的实际代码。")]),t._v(" "),e("p",[t._v("如果希望子模块代码也获取到，一种方式是在克隆主项目的时候带上参数 "),e("code",[t._v("--recurse-submodules")]),t._v("，这样会递归地将项目中所有子模块的代码拉取。")]),t._v(" "),e("h2",{attrs:{id:"子模块内容的更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子模块内容的更新"}},[t._v("#")]),t._v(" 子模块内容的更新")]),t._v(" "),e("p",[t._v("对于子模块而言，并不需要知道引用自己的主项目的存在。对于自身来讲，子模块就是一个完整的 Git 仓库，按照正常的 Git 代码管理规范操作即可。")]),t._v(" "),e("p",[t._v("对于主项目而言，子模块的内容发生变动时，通常有三种情况：")]),t._v(" "),e("p",[t._v("1）当前项目下子模块文件夹内的内容发生了未跟踪的内容变动；")]),t._v(" "),e("p",[t._v("2）当前项目下子模块文件夹内的内容发生了版本变化；")]),t._v(" "),e("p",[t._v("3）当前项目下子模块文件夹内的内容没变，远程有更新；")]),t._v(" "),e("h3",{attrs:{id:"情况1-子模块有未跟踪的内容变动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况1-子模块有未跟踪的内容变动"}},[t._v("#")]),t._v(" 情况1：子模块有未跟踪的内容变动")]),t._v(" "),e("p",[t._v("对于第1种情况，通常是在开发环境中，直接修改子模块文件夹中的代码导致的。")]),t._v(" "),e("p",[t._v("此时在主项目中使用 "),e("code",[t._v("git status")]),t._v(" 能够看到关于子模块尚未暂存以备提交的变更，但是于主项目而言是无能为力的，使用 "),e("code",[t._v("git add/commit")]),t._v(" 对其也不会产生影响。")]),t._v(" "),e("p",[t._v("在此情景下，通常需要进入子模块文件夹，按照子模块内部的版本控制体系提交代码。")]),t._v(" "),e("p",[t._v("当提交完成后，主项目的状态则进入了情况2，即当前项目下子模块文件夹内的内容发生了版本变化。")]),t._v(" "),e("h3",{attrs:{id:"情况2-子模块有版本变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况2-子模块有版本变化"}},[t._v("#")]),t._v(" 情况2：子模块有版本变化")]),t._v(" "),e("p",[t._v("当子模块版本变化时，在主项目中使用 "),e("code",[t._v("git status")]),t._v(" 查看仓库状态时，会显示子模块有新的提交：")]),t._v(" "),e("p",[t._v("在这种情况下，可以使用 "),e("code",[t._v("git add/commit")]),t._v(" 将其添加到主项目的代码提交中，实际的改动就是那个子模块 文件 所表示的版本信息：")]),t._v(" "),e("p",[t._v("通常当子项目更新后，主项目修改其所依赖的版本时，会产生类似这种情景的 commit 提交信息。")]),t._v(" "),e("h3",{attrs:{id:"情况3-子模块远程有更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况3-子模块远程有更新"}},[t._v("#")]),t._v(" 情况3：子模块远程有更新")]),t._v(" "),e("p",[t._v("通常来讲，主项目与子模块的开发不会恰好是同时进行的。通常是子模块负责维护自己的版本升级后，推送到远程仓库，并告知主项目可以更新对子模块的版本依赖。")]),t._v(" "),e("p",[t._v("在这种情况下，主项目是比较茫然的。")]),t._v(" "),e("p",[t._v("之前曾经提到，主项目可以使用 "),e("code",[t._v("git submodule update")]),t._v(" 更新子模块的代码，但那是指 "),e("code",[t._v("当前主项目文件夹下的子模块目录内容")]),t._v(" 与 "),e("code",[t._v("当前主项目记录的子模块版本")]),t._v(" 不一致时，会参考后者进行更新。")]),t._v(" "),e("p",[t._v("但如今这种情况下，后者 "),e("code",[t._v("当前主项目记录的子模块版本")]),t._v(" 还没有变化，在主项目看来当前情况一切正常。")]),t._v(" "),e("p",[t._v("此时，需要让主项目主动进入子模块拉取新版代码，进行升级操作。")]),t._v(" "),e("p",[t._v("通常流程是：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" project-sub-1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),e("p",[t._v("子模块目录下的代码版本会发生变化，转到情况2的流程进行主项目的提交。")]),t._v(" "),e("p",[t._v("当主项目的子项目特别多时，可能会不太方便，此时可以使用 git submodule 的一个命令 foreach 执行：")]),t._v(" "),e("blockquote",[e("p",[t._v("git submodule foreach 'git pull origin master'")])]),t._v(" "),e("h3",{attrs:{id:"汇总"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#汇总"}},[t._v("#")]),t._v(" 汇总")]),t._v(" "),e("p",[t._v("终上所述，可知在不同场景下子模块的更新方式如下：")]),t._v(" "),e("ul",[e("li",[t._v("对于子模块，只需要管理好自己的版本，并推送到远程分支即可；")]),t._v(" "),e("li",[t._v("对于父模块，若子模块版本信息未提交，需要更新子模块目录下的代码，并执行 commit 操作提交子模块版本信息；")]),t._v(" "),e("li",[t._v("对于父模块，若子模块版本信息已提交，需要使用 git submodule update ，Git 会自动根据子模块版本信息更新所有子模块目录的相关代码。")])]),t._v(" "),e("h2",{attrs:{id:"删除子模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除子模块"}},[t._v("#")]),t._v(" 删除子模块")]),t._v(" "),e("p",[t._v("网上流传了一些偏法，主要步骤是直接移除模块，并手动修改 "),e("code",[t._v(".gitmodules")]),t._v("、"),e("code",[t._v(".git/config")]),t._v(" 和 "),e("code",[t._v(".git/modules")]),t._v(" 内容。包含了一大堆类似"),e("code",[t._v("git rm --cached <sub-module>、rm -rf <sub-moduel>、rm .gitmodules")]),t._v(" 和 "),e("code",[t._v("git rm --cached")]),t._v(" 之类的代码。")]),t._v(" "),e("p",[t._v("实际上这是一种比较野的做法，不建议使用。")]),t._v(" "),e("p",[t._v("根据官方文档的说明，应该使用 "),e("code",[t._v("git submodule deinit")]),t._v(" 命令卸载一个子模块。这个命令如果添加上参数 "),e("code",[t._v("--force")]),t._v("，则子模块工作区内即使有本地的修改，也会被移除。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule deinit project-sub-1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" project-sub-1\n")])])]),e("p",[t._v("执行 "),e("code",[t._v("git submodule deinit project-sub-1")]),t._v(" 命令的实际效果，是自动在 "),e("code",[t._v(".git/config")]),t._v(" 中删除了以下内容：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("submodule "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"project-sub-1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nurl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https://github.com/username/pro\n")])])]),e("p",[t._v("执行 "),e("code",[t._v("git rm project-sub-1")]),t._v(" 的效果，是移除了 "),e("code",[t._v("project-sub-1")]),t._v(" 文件夹，并自动在 "),e("code",[t._v(".gitmodules")]),t._v(" 中删除了以下内容：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("submodule "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"project-sub-1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\npath "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" project-sub-1\nurl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https://github.com/username/project\n")])])]),e("p",[t._v("此时，主项目中关于子模块的信息基本已经删除（虽然貌似 .git/modules 目录下还有残余）：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("➜ project-main git:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ gs\n位于分支 master\n您的分支与上游分支 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),t._v(" 一致。\n要提交的变更：\n（使用 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git reset HEAD <文件>..."')]),t._v(" 以取消暂存）\n修改： .gitmodules\n删除： project-sub-1\n")])])]),e("p",[t._v("可以提交代码：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete submodule project-sub-1"')]),t._v("\n")])])]),e("p",[t._v("至此完成对子模块的删除。")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/87053283",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);