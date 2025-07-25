---
sitemap:
  exclude: false
  changefreq: hourly
title: Vapor 源码阅读方法
date: 2020-11-2
tags:
  - swift
  - vapor
createTime: 2024/08/02 09:19:27
permalink: /swift/85oenqul/
---

Vapor 源码阅读有方法：**抓主干，补血肉**

## 如何抓住主干？

`Vapor`是在`SwiftNIO`之上的。那么他们两者的联系点是啥？弄清这个问题，就可以抓住主干。

首先，放下`Vapor`, 了解`SwiftNIO`。比较快速的了解`SwiftNIO`，可以跟着下面这篇文章实战一番。

[A µTutorial on SwiftNIO 2](http://www.alwaysrightinstitute.com/microexpress-nio2/)

```swift
let bootstrap = ServerBootstrap(group: loopGroup)
      .serverChannelOption(ChannelOptions.backlog, value: 256)
      .serverChannelOption(reuseAddrOpt, value: 1)
      
      .childChannelInitializer { channel in
        channel.pipeline.configureHTTPServerPipeline()
        
        // this is where the action is going to be!
      }
      
      .childChannelOption(ChannelOptions.socket(
                            IPPROTO_TCP, TCP_NODELAY), value: 1)
      .childChannelOption(reuseAddrOpt, value: 1)
      .childChannelOption(ChannelOptions.maxMessagesPerRead, 
                          value: 1)
```

上面就是`SwiftNIO`处理`HTTP`的主体流程。

## 找到主干

从`Vapor`源码中找到`ServerBootstrap`初始化的地方。即`HTTPServer.swift`。

```swift
private final class HTTPServerConnection {
    let channel: Channel
    let quiesce: ServerQuiescingHelper
    
    static func start(
        application: Application,
        responder: Responder,
        configuration: HTTPServer.Configuration,
        on eventLoopGroup: EventLoopGroup
    ) -> EventLoopFuture<HTTPServerConnection> {
        let quiesce = ServerQuiescingHelper(group: eventLoopGroup)
        let bootstrap = ServerBootstrap(group: eventLoopGroup)
            // Specify backlog and enable SO_REUSEADDR for the server itself
            .serverChannelOption(ChannelOptions.backlog, value: Int32(configuration.backlog))
            .serverChannelOption(ChannelOptions.socket(SocketOptionLevel(SOL_SOCKET), SO_REUSEADDR), value: configuration.reuseAddress ? SocketOptionValue(1) : SocketOptionValue(0))
            
            // Set handlers that are applied to the Server's channel
            .serverChannelInitializer { channel in
                channel.pipeline.addHandler(quiesce.makeServerChannelHandler(channel: channel))
            }

```

这就是`Vapor`的七寸。恭喜你，主干已获取。

## 补充血肉

从主干代码不断的分析各个支流，整个项目的架构就比较清晰了。当然可以画画思维导图，类图，写写扩展，或者贡献自己的代码。然后你就是大佬了（头发也就少了）。






