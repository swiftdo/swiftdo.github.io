(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{885:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("ul",[a("li",[t._v("1.创建一个 Personnal access token")]),t._v(" "),a("li",[t._v("2.在项目的 serect 里面添加一个环境变量 ACCESS_TOKEN， 值为第一步创建的个人令牌")]),t._v(" "),a("li",[t._v("3.创建一个工作流程的配置文件 .github/workflows/main.yml")])]),t._v(" "),a("h2",{attrs:{id:"github-workflows-main-yml-的配置如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-workflows-main-yml-的配置如下"}},[t._v("#")]),t._v(" .github/workflows/main.yml 的配置如下：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy GitHub Pages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发条件：在 push 到 master 分支后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" source\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器环境：最新版 Ubuntu")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n")])])]),a("p",[t._v("上传代码即可。")])])}),[],!1,null,null,null);s.default=e.exports}}]);