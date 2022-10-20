(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{596:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("p",[s._v("在 github 中"),t("strong",[s._v("新建一个仓库")]),s._v("，git clone 将代码拉下来。比如：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/swiftdo/WechatOpenSDK_Fuck.git\n")])])])]),s._v(" "),t("li",[t("p",[s._v("添加本地需要操作的类库")]),s._v(" "),t("p",[s._v("从官网下载 SDK，然后解压将目录放入项目中:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./\n├── OpenSDK1.9.2\n│   ├── README.txt\n│   ├── WXApi.h\n│   ├── WXApiObject.h\n│   ├── WechatAuthSDK.h\n│   └── libWeChatSDK.a\n")])])])]),s._v(" "),t("li",[t("p",[s._v("提交代码")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.9")]),s._v(".2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(' "1.9.2 版本”\n'),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -—tags\n")])])])]),s._v(" "),t("li",[t("p",[s._v("创建 podspec 文件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pod spec create WechatOpenSDK_Fuck\n")])])]),t("p",[s._v("执行命令后，目录如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./\n├── OpenSDK1.9.2\n│   ├── README.txt\n│   ├── WXApi.h\n│   ├── WXApiObject.h\n│   ├── WechatAuthSDK.h\n│   └── libWeChatSDK.a\n└── WechatOpenSDK_Fuck.podspec\n")])])])]),s._v(" "),t("li",[t("p",[s._v("根据 podspec 的语法，我们将文件修改如下：")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[s._v("\nPod"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("spec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WechatOpenSDK_Fuck"')])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.9.2"')])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("summary      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WechatOpenSDK 1.9.2"')])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("description  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal heredoc-string"}},[t("span",{pre:!0,attrs:{class:"token delimiter"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<<-")]),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("DESC")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\n  WechatOpenSDK 1.9.2 完整版本\n                   ")]),t("span",{pre:!0,attrs:{class:"token delimiter"}},[t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("DESC")])])]),s._v("\n\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("homepage     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://oldbird.run"')])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("license      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("author             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oheroj"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1164258202@qq.com"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("source       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/swiftdo/WechatOpenSDK_Fuck.git"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":tag")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[s._v("#{")]),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("platform         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":ios")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9.0'")])]),s._v("\n\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("public_header_files "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OpenSDK1.9.2/*.h"')])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("source_files        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OpenSDK1.9.2/*.{h,m,mm}"')])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vendored_libraries  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OpenSDK1.9.2/*.a'")])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("frameworks \t       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CFNetwork'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Security'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CoreTelephony'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SystemConfiguration'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'UIKit'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CoreGraphics'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Foundation'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'WebKit'")])]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("libraries           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'z'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sqlite3.0'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c++'")])]),s._v("\n\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pod_target_xcconfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OTHER_LDFLAGS'")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-lObjC'")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pod_target_xcconfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'VALID_ARCHS'")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x86_64 armv7 arm64'")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])])]),s._v(" "),t("li",[t("p",[s._v("完成编辑后，使用"),t("code",[s._v("pod spec lint")]),s._v(" podspec 文件来验证 podspec 文件是否有效")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pod spec lint WechatOpenSDK_Fuck.podspec --allow-warnings "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("为了能让"),t("code",[s._v("pod search")]),s._v(" 搜索到上传的类库，需要把 podspec 文件提交到 cocoapods")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pod trunk push WechatOpenSDK_Fuck.podspec --allow-warnings "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("如果之前没有注册过 cocoapods，使用如下命令注册，不然无法提交")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pod trunk register "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1164258202")]),s._v("@qq.com "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oheroj"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"one hero of j"')]),s._v("\n")])])]),t("p",[s._v("自行修改上面的邮箱和用户名，以及简介。然后需要登录自己的邮箱查看邮件完成验证。")])]),s._v(" "),t("li",[t("p",[s._v("最后一步，添加你的修改，提交代码。")])])]),s._v(" "),t("p",[s._v("上传成功之后，正常情况来讲，pod search 是找不到的，你可以执行下列命令行:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pod ipc update-search-index "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("\n")])])]),t("p",[s._v("如果无效, 那么我们就粗暴一点：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$rm")]),s._v(" ~/Library/Caches/CocoaPods/search_index.json\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pod")]),s._v(" search 你的库名\n")])])]),t("p",[s._v("完毕")])])}),[],!1,null,null,null);t.default=n.exports}}]);