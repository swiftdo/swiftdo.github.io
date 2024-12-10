(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{588:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("上篇 "),s("a",{attrs:{href:"https://juejin.cn/post/6940962419355156494",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Flutter2 for Web，写了个博客站点，已上线"),s("OutboundLink")],1),t._v("，我们简单的封装了下网络请求。我们很愉快的将项目运行到 Chrome 上，但是迟迟未见数据，通过开发者工具，报如下错误：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w852","data-src":"http://blog.oldbird.run/mweb/16161411424428.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("这是一个跨域报错。")]),t._v(" "),s("p",[t._v("我们的网页地址是 "),s("code",[t._v("http://localhost:62924")]),t._v("，然后页面有发送个请求，请求的接口域名是\n"),s("code",[t._v("d6579fc5-c18b-443b-a2ef-01c2b6be51d5.bspapp.com")]),t._v(", 那么他俩的域名不一致，出现跨域。受到了同源策略的保护因此无法进行数据交互。")]),t._v(" "),s("h2",{attrs:{id:"什么是跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[t._v("#")]),t._v(" 什么是跨域")]),t._v(" "),s("blockquote",[s("p",[t._v("协议、域名、端口全部相同才算同一域下，三个条件有一个不一致，都不算同域，既跨域。")])]),t._v(" "),s("p",[t._v("即使是我们自己的域名服务器，而二级域名或三级域名不一致，也会出现跨域，如："),s("code",[t._v("http://img.loveli.site")]),t._v(" 与 "),s("code",[t._v("http://blog.oldbird.run")]),t._v(" 之间需要数据交互，就跨域了。")]),t._v(" "),s("p",[t._v("由于现在所有的浏览器都实行了"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Same-origin_policy",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("同源策略"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("同源策略由 Netscape 公司在 1995 年引入浏览器：在发送 Ajax 请求时，只接收同域服务器响应的数据资源。")]),t._v(" "),s("p",[t._v("同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。")]),t._v(" "),s("h2",{attrs:{id:"跨域的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域的解决方案"}},[t._v("#")]),t._v(" 跨域的解决方案")]),t._v(" "),s("p",[t._v("如何能够使两个不同域下的数据进行顺利交互？早期最为典型方案有：")]),t._v(" "),s("ul",[s("li",[t._v("JSONP")]),t._v(" "),s("li",[t._v("同域代理")])]),t._v(" "),s("p",[s("strong",[t._v("JSONP")]),t._v(" 是利用了 script 标签的 src 属性来实现跨域数据交互的，因为浏览器解析 HTML 代码时，原生具有 src 属性的标签，浏览器都赋予其 HTTP 请求的能力，而且不受跨域限制，使用 src 发送 HTTP 请求，服务器直接返回一段 JS 代码的函数调用，将服务器数据放在函数实参中，前端提前写好响应的函数准备回调，接收数据，实现跨域数据交互；")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("function "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addScriptTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" function "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addScriptTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/ip?callback=foo'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfunction "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your public IP address is: '")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("同域代理")]),t._v("就是使用 Ajax 向同域下的后台发送请求，同时携带真实请求的地址及参数，后台接受请求后直接根据地址及参数 "),s("strong",[t._v("转发请求")]),t._v("，因为后台是可以直接模拟 HTTP 客户端发送请求的，所以没有跨域问题，而后台接受到响应数据后再原样返回给前端浏览器，从而实现跨域数据交互；")]),t._v(" "),s("p",[t._v("JSONP 和同域代理，本质上并没有解决 Ajax 跨域的问题，只是绕开这个问题而另辟蹊径实现的跨域数据交互，在数据交互层面上可以看做技术不成熟时的临时解决方案；但是 JSONP 和同域代理使用了很多年，当然跨域问题也存在了很多年，终于有人看不下去了，提出了浏览器与服务器跨域通信的安全性通信策略————跨域资源共享，简称 "),s("strong",[t._v("CORS")]),t._v(";")]),t._v(" "),s("h2",{attrs:{id:"cors-线上解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-线上解决方案"}},[t._v("#")]),t._v(" CORS（线上解决方案）")]),t._v(" "),s("p",[t._v("CORS 是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，是跨源 AJAX 请求的根本解决方法。")]),t._v(" "),s("p",[t._v("CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。")]),t._v(" "),s("p",[t._v("因本文的特殊性，我们不去修改服务器，所以服务器如何实现 CORS 就不过多阐述。如果想更多的了解 CORS，可阅读：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("跨域资源共享 CORS 详解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("跨源资源共享（CORS）"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"请求转发-开发场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求转发-开发场景"}},[t._v("#")]),t._v(" 请求转发（开发场景）")]),t._v(" "),s("p",[t._v("因为我们不想去修改线上服务器，那么如何解决跨域问题？")]),t._v(" "),s("p",[t._v("其实也简单，我们本地实现代理转发服务器，且配置 CORS。")]),t._v(" "),s("p",[t._v("那么接下来，带大家一起来实现")]),t._v(" "),s("h3",{attrs:{id:"创建-cli-工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-cli-工程"}},[t._v("#")]),t._v(" 创建 cli 工程")]),t._v(" "),s("p",[t._v("如何创建一个 cli 应用？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一步安装 dart：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ brew tap dart-lang/dart\n$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" dart\n")])])])]),t._v(" "),s("li",[s("p",[t._v("创建 cli 命令行应用：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("$ dart create "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t console"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("full cli\n")])])]),s("p",[t._v("使用 dart create 命令，以 console-full 模板创建 cli 项目")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w299","data-src":"http://blog.oldbird.run/mweb/16162289250798.png",loading:"lazy"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("bin/cli.dart")]),t._v("，该文件包含一个顶层 main() 函数。该函数是你应用的入口")]),t._v(" "),s("li",[s("code",[t._v("lib/cli.dart")]),t._v("，包含一些功能性的函数方法，这些函数方法将会导入到 bin/cli.dart 文件中。")]),t._v(" "),s("li",[s("code",[t._v("pubspec.yaml")]),t._v("，包含应用的元数据，包括应用依赖的 package 信息以及所需的版本等，跟 Flutter 工程一样")])])]),t._v(" "),s("li",[s("p",[t._v("运行应用")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("$ cd cli\n$ dart run\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" world"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("到这里我们就完成了一个 cli 应用，接下来我们来实现代理服务器。")]),t._v(" "),s("h3",{attrs:{id:"代理服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理服务器"}},[t._v("#")]),t._v(" 代理服务器")]),t._v(" "),s("p",[t._v("因为网页我们现在是通过 "),s("code",[t._v("localhost")]),t._v(" 进行访问的，所以我们需要创建一个本地服务器，对请求进行转发。")]),t._v(" "),s("p",[t._v("我们搭建一个端口为 4500 的代理服务器。")]),t._v(" "),s("p",[t._v("首先我们需要在 "),s("code",[t._v("pubspec.yaml")]),t._v(" 引入 "),s("a",{attrs:{href:"https://pub.dev/packages/shelf_proxy",target:"_blank",rel:"nofollow noopener noreferrer"}},[s("code",[t._v("shelf_proxy")]),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shelf_proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.1.0+7\n")])])]),s("p",[t._v("然后在 "),s("code",[t._v("bin/cli.dart")]),t._v(" 中实现：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:shelf/shelf_io.dart'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("as")]),t._v(" shelf_io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:shelf_proxy/shelf_proxy.dart'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reqHandle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxyHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://d6579fc5-c18b-443b-a2ef-01c2b6be51d5.bspapp.com"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 绑定本地端口，4500，转发到真正的服务器中")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" shelf_io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("serve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reqHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里设置请求策略，允许所有")]),t._v("\n  server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultResponseHeaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultResponseHeaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Credentials'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Serving at http://")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过 shelf_proxy 很快就实现了个简单的代理服务器，再次运行")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("$ dart run\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serving")]),t._v(" at http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4500")]),t._v("\n")])])]),s("p",[t._v("接下来，我们需要修改 "),s("code",[t._v("web-demo")]),t._v(" 的代码，在 "),s("code",[t._v("lib/config.dart")]),t._v(" 中：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 开发环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigDebug")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" baseUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:4500/http/"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在 ConfigDebug 中，将 baseUrl 设置为我们本地代理服务器的地址。")]),t._v(" "),s("p",[t._v("然后在 "),s("code",[t._v("locator.dart")]),t._v("，实现如果是 debug 环境就配置为 ConfigDebug ：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置项目环境")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kDebugMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    locator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("registerSingleton"),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigDebug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    locator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("registerSingleton"),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigProduct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("重新运行我们的项目：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w1856","data-src":"http://blog.oldbird.run/mweb/16162322038723.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("数据请求成功了！")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("跨域，在开发中是非常容易遇到的。解决方案，由早期通过 "),s("code",[t._v("JSONP")]),t._v(" 和同域代理(当然还有其他的方法)的方案，但是没有根本解决问题。比较合理的做法是通过服务器实现 CORS。")]),t._v(" "),s("p",[t._v("我们没有给线上服务器配置 CORS，直接创建本地服务器且配置了 CORS，转发请求到线上，起到一个中转的作用。算是自给自足吧！")]),t._v(" "),s("h2",{attrs:{id:"参阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参阅"}},[t._v("#")]),t._v(" 参阅")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53996160",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("所有人都应该知道的跨域及 CORS"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("浏览器同源政策及其规避方法"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://dart.dev/tutorials/server/get-started",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Get started: command-line and server apps"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);