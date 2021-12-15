(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{863:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Vapor 源码阅读有方法："),a("strong",[t._v("抓主干，补血肉")])]),t._v(" "),a("h2",{attrs:{id:"如何抓住主干"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何抓住主干"}},[t._v("#")]),t._v(" 如何抓住主干？")]),t._v(" "),a("p",[a("code",[t._v("Vapor")]),t._v("是在"),a("code",[t._v("SwiftNIO")]),t._v("之上的。那么他们两者的联系点是啥？弄清这个问题，就可以抓住主干。")]),t._v(" "),a("p",[t._v("首先，放下"),a("code",[t._v("Vapor")]),t._v(", 了解"),a("code",[t._v("SwiftNIO")]),t._v("。比较快速的了解"),a("code",[t._v("SwiftNIO")]),t._v("，可以跟着下面这篇文章实战一番。")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.alwaysrightinstitute.com/microexpress-nio2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A µTutorial on SwiftNIO 2"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bootstrap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" loopGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serverChannelOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serverChannelOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reuseAddrOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childChannelInitializer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n        channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureHTTPServerPipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is where the action is going to be!")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("childChannelOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IPPROTO_TCP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCP_NODELAY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("childChannelOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reuseAddrOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("childChannelOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxMessagesPerRead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                          value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面就是"),a("code",[t._v("SwiftNIO")]),t._v("处理"),a("code",[t._v("HTTP")]),t._v("的主体流程。")]),t._v(" "),a("h2",{attrs:{id:"找到主干"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#找到主干"}},[t._v("#")]),t._v(" 找到主干")]),t._v(" "),a("p",[t._v("从"),a("code",[t._v("Vapor")]),t._v("源码中找到"),a("code",[t._v("ServerBootstrap")]),t._v("初始化的地方。即"),a("code",[t._v("HTTPServer.swift")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTTPServerConnection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Channel")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" quiesce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerQuiescingHelper")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        responder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Responder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTTPServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        on eventLoopGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopFuture")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTTPServerConnection")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" quiesce "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerQuiescingHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eventLoopGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bootstrap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eventLoopGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify backlog and enable SO_REUSEADDR for the server itself")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serverChannelOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serverChannelOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketOptionLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOL_SOCKET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SO_REUSEADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reuseAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketOptionValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketOptionValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set handlers that are applied to the Server's channel")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serverChannelInitializer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n                channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quiesce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeServerChannelHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("这就是"),a("code",[t._v("Vapor")]),t._v("的七寸。恭喜你，主干已获取。")]),t._v(" "),a("h2",{attrs:{id:"补充血肉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充血肉"}},[t._v("#")]),t._v(" 补充血肉")]),t._v(" "),a("p",[t._v("从主干代码不断的分析各个支流，整个项目的架构就比较清晰了。当然可以画画思维导图，类图，写写扩展，或者贡献自己的代码。然后你就是大佬了（头发也就少了）。")])])}),[],!1,null,null,null);s.default=e.exports}}]);