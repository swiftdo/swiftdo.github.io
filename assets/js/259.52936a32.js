(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{937:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本文中 git 操作的目标为建立本地分支与远程分支的映射关系（或者为跟踪关系 track）。\n这样使用 git pull 或者 git push 时就不必每次都要指定从远程的哪个分支拉取合并和推送到远程的哪个分支了。")]),s._v(" "),t("h2",{attrs:{id:"查看映射关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看映射关系"}},[s._v("#")]),s._v(" 查看映射关系")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -vv\n\n* "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" 75452b0e "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\n")])])]),t("h2",{attrs:{id:"建立映射关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立映射关系"}},[s._v("#")]),s._v(" 建立映射关系")]),s._v(" "),t("p",[s._v("如实现本地分支与远端的 source 分支进行映射：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -u origin/source\n或者使用命令：\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream-to origin/source\n")])])]),t("p",[s._v("完成后，查看映射关系：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -vv\n\n* "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" 75452b0e "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("origin/source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\n")])])]),t("p",[s._v("会发现多了 "),t("code",[s._v("[origin/source]")]),s._v(", 说明本地分支与远端的 source 分支已经建立了映射关系")]),s._v(" "),t("p",[s._v("可以直接执行 "),t("code",[s._v("git push")]),s._v(" 等命令")]),s._v(" "),t("h2",{attrs:{id:"取消映射关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消映射关系"}},[s._v("#")]),s._v(" 取消映射关系")]),s._v(" "),t("p",[s._v("撤销本地分支与远程分支的映射关系")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git branch --unset-upstream\n")])])]),t("p",[s._v("完成后，查看映射关系：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -vv\n\n* "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" 75452b0e "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\n")])])]),t("p",[s._v("执行"),t("code",[s._v("git push")]),s._v("失败。")])])}),[],!1,null,null,null);a.default=n.exports}}]);