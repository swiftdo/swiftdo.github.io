---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Vapor 源码阅读方法'
date: 2020-11-2
tags:
- swift
- vapor
---

Vapor 源码阅读有方法：抓住主干，不断补充血肉

## 如何抓住主干？

Vapor 是在 SwiftNIO 之上的。那么他们两者的联系点是啥？弄清这个问题，就可以抓住主干。

首先，放下 Vapor, 了解 SwiftNIO。比较快速的了解，有个实践性项目可以跟着下面这篇文章走一遍。

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

很快我们就知道上面就是整个 http 的处理流程了。

## 找到主干

从 vapor 源码中找到 `ServerBootstrap` 初始化的地方。即 `HTTPServer.swift`。

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

看到这里就找打了 vapor 的七寸了。恭喜你，主干已获取。

## 补充血肉

从主干代码不断的分析各个支流，这样整个项目的架构就比较清晰了。可以画画思维导图，类图，写写扩展，某一天你就可以贡献自己的力量了。






