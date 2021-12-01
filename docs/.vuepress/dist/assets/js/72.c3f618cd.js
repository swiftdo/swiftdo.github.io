(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{635:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("code",[s._v("pod SDWebImage/WebP")]),s._v(" 遇到下面的问题:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error installing libwebp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" /usr/bin/git clone https://chromium.googlesource.com/webm/libwebp /var/folders/xt/lv4v305j3vq73d84r84db2300000gn/T/d20181030-8624-1jw0he8 --template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" --single-branch --depth "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --branch v1.1.0\n\nCloning into "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/folders/xt/lv4v305j3vq73d84r84db2300000gn/T/d20181030-8624-1jw0he8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nfatal: unable to access "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://chromium.googlesource.com/webm/libwebp/'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Failed to connect to chromium.googlesource.com port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(": Operation timed out\n")])])]),a("p",[s._v("除了通过梯子解决这个问题外，还可以通过修改 libwebp 的源。")]),s._v(" "),a("h2",{attrs:{id:"解决流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决流程"}},[s._v("#")]),s._v(" 解决流程")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看 Mac 中 cocoapods 本地库路径: "),a("code",[s._v("pod repo")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ pod repo\n\nmaster\n- Type: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n- URL:  https://github.com/CocoaPods/Specs.git\n- Path: /Users/ammk/.cocoapods/repos/master\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" repo\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在 Path 中找到 libwebp 对应的文件夹: "),a("code",[s._v("find /Users/ammk/.cocoapods/repos/master -iname libwebp")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /Users/ammk/.cocoapods/repos/master -iname libwebp\n/Users/ammk/.cocoapods/repos/master/Specs/1/9/2/libwebp\n\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在 "),a("code",[s._v("1.1.0")]),s._v(" 目录下的 "),a("code",[s._v("libwebp.podspec.json")]),s._v(" 文件中修改 git source")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" libwebp.podspec.json\n")])])]),a("p",[s._v("部分内容如下：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"libwebp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"summary"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Library to encode and decode images in WebP format."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"homepage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://developers.google.com/speed/webp/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"authors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Google Inc."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BSD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"COPYING"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"git"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://chromium.googlesource.com/webm/libwebp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1.1.0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("ul",[a("li",[s._v("homepage 改为 "),a("code",[s._v("https://github.com/webmproject/")])]),s._v(" "),a("li",[s._v("source->git 改为 "),a("code",[s._v("https://github.com/webmproject/libwebp.git")])])])]),s._v(" "),a("li",[a("p",[s._v("最后重新执行 "),a("code",[s._v("pod install")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);