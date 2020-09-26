(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{542:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("之前整理过一篇 "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/i864_-vEpD9vLHUrvLPz2w",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Github 上部署一个 Flutter Web 应用"),s("OutboundLink")],1),t._v(" 的文章，可以很好的以 Github Pages 的方式进行部署。")]),t._v(" "),s("p",[t._v("近期在做 "),s("a",{attrs:{href:"https://github.com/swiftdo/boke",target:"_blank",rel:"noopener noreferrer"}},[t._v("swiftdo/boke"),s("OutboundLink")],1),t._v(" 项目，采用 Docker 部署方案，前后端分离且用 Flutter Web 编写前端页面。所以在 Docker 的部署编排上，如何将前端的部署也整合到整个项目部署流程中，这是本文要讲的内容。")]),t._v(" "),s("p",[t._v("首先前后端有各自仓库：")]),t._v(" "),s("ul",[s("li",[t._v("后端项目 boke： "),s("code",[t._v("https://github.com/swiftdo/boke.git")])]),t._v(" "),s("li",[t._v("前端项目 boke-flutter: "),s("code",[t._v("https://github.com/swiftdo/boke-flutter.git")])])]),t._v(" "),s("p",[t._v("后端项目 boke 已完成 Docker 部署编排，如果要将 "),s("code",[t._v("boke-flutter")]),t._v(" 的部署也安排到 "),s("code",[t._v("boke")]),t._v(" 的部署中，必须将 "),s("code",[t._v("boke-flutter")]),t._v(" 放入到 "),s("code",[t._v("boke")]),t._v(" 中。为了实现这个目的，将采用 "),s("code",[t._v("git submodule")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("boke")]),t._v(" 项目中，添加 "),s("code",[t._v("submodule")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" https://github.com/swiftdo/boke-flutter.git\n")])])]),s("p",[t._v("完成添加后，会在 "),s("code",[t._v("boke")]),t._v(" 项目中会多出个 "),s("code",[t._v("boke-flutter")]),t._v(" 的目录。在原有的 "),s("code",[t._v("docker-compose.yml")]),t._v(" 中，我们已经完成了后端项目的部署，那么如何加入前端的部署，我们的目的是啥？")]),t._v(" "),s("p",[t._v("目的：开启前端项目")]),t._v(" "),s("p",[s("strong",[t._v("前端项目如何开启?")])]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("boke-flutter")]),t._v(" 项目编译完成后，通过 nginx 进行部署即可。")]),t._v(" "),s("p",[t._v("所以，需要实现：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flutter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./boke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flutter/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8090:80"')]),t._v("\n")])])]),s("p",[t._v("下一步，为 boke-flutter 编写 "),s("code",[t._v("Dockerfile")]),t._v(" 即可。")]),t._v(" "),s("blockquote",[s("p",[t._v("Dockerfile 存放在 boke-flutter 根目录下")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("FROM cirrusci/flutter:beta AS boke\n\nRUN "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" --user-group --create-home --system --skel /dev/null --home-dir /app cirrus\nRUN "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PUB_HOSTED_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://pub.flutter-io.cn\nRUN "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLUTTER_STORAGE_BASE_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://storage.flutter-io.cn\nWORKDIR /app\nRUN "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R cirrus:cirrus /app\nRUN flutter config --enable-web\nCOPY lib /app/lib\nCOPY assets /app/assets\nCOPY plugins /app/plugins\nCOPY web /app/web\nCOPY pubspec.yaml /app/pubspec.yaml\n\nRUN flutter build web  -v\n\nFROM nginx\nEXPOSE "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nCOPY --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("boke /app/build/web /usr/share/nginx/html\n")])])]),s("p",[t._v("开启前端：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ docker-compose up -d web\n")])])]),s("p",[t._v("这样就完成了整个前后端的编排。")]),t._v(" "),s("p",[t._v("整个编排配置，可以直接查看 "),s("code",[t._v("https://github.com/swiftdo/boke.git")]),t._v(" 下的 "),s("code",[t._v("docker-compose.yml")]),t._v("。")]),t._v(" "),s("p",[t._v("更多文章阅读，请关注微信公众号: OldBirds。")])])}),[],!1,null,null,null);e.default=n.exports}}]);