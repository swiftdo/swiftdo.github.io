---
sitemap:
  exclude: false
  changefreq: hourly
title: 'SwiftNIO 实战之文本修改服务器'
date: 2020-11-22
tags:
- swift
- vapor
- swiftnio
---


为什么 `SwiftNIO` 能够实现高性能、高并发的需求?

> Netty是一个高性能、异步事件驱动的 NIO 框架，它提供了对TCP、UDP和文件传输的支持，作为一个异步 NIO 框架，Netty 的所有 IO 操作都是异步非阻塞的，通过 Future-Listener 机制，用户可以方便的主动获取或者通过通知机制获得 IO 操作结果。

SwiftNIO 是 Netty 的 Swift 版本实现。

但是我们对 Netty 并不熟悉，无法体会其特性。

所以接下来会写几个 `SwiftNIO` 的实战样例，体会它的强大之处。

> 待我们熟练了 `SwiftNIO` 的使用，再多个角度分析其高性能、高并发的原理。

## 文本修改服务器的需求

服务器需要绑定`8888`端口，当一个客户端连接到服务器，它可以往服务器发送文本并接收文本的修改版本，就像一个回显(echo)服务器，但还带一些附加功能。

服务器通过以下方式修改文本：

* 将文本更改为大写
* 用信号替换所有语言
* 使用转义序列将返回的文本的颜色更改为绿色

### 创建服务器的入口点

通过 swift package manager 进行项目创建

```sh
$ mdkir niots
$ cd niots
$ swift package init --type executable
```

在 `Package.swift` 中添加 SwiftNIO 的依赖。

```swift
import PackageDescription

let package = Package(
    name: "niots",
    dependencies: [
         .package(url: "https://github.com/apple/swift-nio.git", from: "2.0.0"),
    ],
    targets: [
        .target(
            name: "niots",
            dependencies: [.product(name:"NIO", package: "swift-nio")]),
        .testTarget(
            name: "niotsTests",
            dependencies: ["niots"]),
    ]
)
```

然后将 `niots` 拖入到 XCode 中

![-w268](http://blog.loveli.site/2020-11-29-16065769435401.png)

打开 `Sources/niots/main.swift`，开始工程的初始设置，大体有如下流程：

1. 创建一个 `EventLoopGroup`
2. 引导 Sockets
3. 初始化 Channel
4. 初始化 Handlers
5. 处理事件

导入 `Foundation` 和 `NIO`框架：

```swift
import Foundation
import NIO
```

第一步，创建我们的 `EventLoopGroup`：

```swift
let group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)
```

尝试设置 `System.coreCount` 利用所有 CPU 内核，因此在最佳情况下，我们可以在每个 CPU 内核中都有一个线程来处理客户的请求。

第二步，引导套接字

```swift
let bootstrap = ServerBootstrap(group: group)
```

我们正在使用 [ServerBootstrap](https://apple.github.io/swift-nio/docs/current/NIO/Classes/ServerBootstrap.html) 对象，该对象将创建一个侦听套接字，以后 `bind` 可以使用`ServerSocketChannel`。

```swift
let bootstrap = ServerBootstrap(group: group)
    /// ① 配置 ServerChannel
    .serverChannelOption(ChannelOptions.backlog, value: 256)
    .serverChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    /// ②子 channel 的初始化
    /// (当 一个连接被我们服务器接收)
    .childChannelInitializer { channel  in
        /// ③  将 Handles 添加到管道中
        channel.pipeline.addHandlers([])
    }
    /// ④  配置子channel
    .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    .childChannelOption(ChannelOptions.maxMessagesPerRead, value: 16)
    .childChannelOption(ChannelOptions.recvAllocator, value: AdaptiveRecvByteBufferAllocator())
```

① 对于服务器通道，定义 `backlog` 选项，该选项用于指定挂起的连接队列的最大长度。如果队列已满时新连接倒带，则客户端将收到错误消息。设置 `.so_reuseaddr`，它指定套接字可以绑定到地址的规则。

② 定义通道初始化器。

③ 将处理程序添加到通道的管道中。`BackPressureHandler` 由 `SwiftNIO` 提供给了我们————当无法以足够快的速度回写时，停止从远程对等方读取，一旦待处理数据已写入，它将再次开始读取。我们可以一次添加一个处理程序，也可以通过传递一组处理程序来添加多个处理程序。

④ 我们定义 childChannelOptions

> **Bootstrap**
> 
> 虽然可以直接用 EventLoop 配置和注册 Channel, 但为了简化创建工作，SwiftNIO 提供了许多 `Bootstrap` 对象：
> * ServerBootstrap：用于引导监听信道
> * ClientBootstrap：用于引导客户端 TCP 信道
> * DatagramBootstrap：用于引导 UDP 信道

建通道并将其绑定到 `::1` 端口上的本地主机（在IPv6中）`8888`：

```swift
let defaultHost = "::1"
let defaultPort = 8888

let channel = try bootstrap.bind(host: defaultHost, port: defaultPort).wait()
print("Server started and listening on \(channel.localAddress!)")

try channel.closeFuture.wait()
print("Server closed") 
```

以下是完整的 `main.swift`文件:

```swift
import Foundation
import NIO

let group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)
let bootstrap = ServerBootstrap(group: group)
    // Set up our ServerChannel
    .serverChannelOption(ChannelOptions.backlog, value: 256)
    .serverChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)

    //Set up the closure that will be used to initialise Child channels
    // (when a connection is accepted to our server)
    .childChannelInitializer { channel in
        channel.pipeline.addHandlers([BackPressureHandler(), UpcaseHandler(), VowelsHandler(), ColourHandler()])
    }

    // Set up child channel options
    .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    .childChannelOption(ChannelOptions.maxMessagesPerRead, value: 16)
    .childChannelOption(ChannelOptions.recvAllocator, value: AdaptiveRecvByteBufferAllocator())

let defaultHost = "::1"
let defaultPort = 8888

let channel = try bootstrap.bind(host: defaultHost, port: defaultPort).wait()
print("Server started and listening on \(channel.localAddress!)")
try channel.closeFuture.wait()
print("Server closed")
```

## 创建通道处理程序 

每个处理程序在我们的通道的管道中都处于特定位置，如果要将数据从一个处理程序传递到下一个处理程序，则需要确保一个处理程序的输出类型与以下一个处理程序的输入类型匹配。有两种处理程序类型：

* ChannelOutboundHandler
* ChannelInboundHandler

区别在于事件的发源地。

选择实现哪种类型的处理程序时，请记住以下几点：

* 如果事件来自源，请使用 `ChannelInboundHandler`
* 如果要将事件传递给源，请使用 `ChannelOutboundHandler`

在本例中，由于事件来自源，即客户端连接到我们的服务器，因此我们将使用 `ChannelInboutHandler`

```swift
Client: hello
      |
      v
   Server
      |
      v
BackPressureHandler (Receives a ByteBuffer - passes a ByteBuffer)
      |
      v
UpcaseHandler(Receives a ByteBuffer - passes a [CChar])
      |
      v
VowelsHandler(Receives a [CChar] - passes a ByteBuffer)
      |
      v
ColourHandler(Receives a ByteBuffer - passes a ByteBuffer)
      |
      v
Client: receives
H*LL* (In green colour)
```

**ByteBuffer**

ByteBuffer 是个 struct，其中包含从源接收到的原始自己，这就是 `BackPressureHandler` 传递给其他处理程序的内容。我们可以在处理程序之间传递不同的类型，但是我们需要确保类型匹配。`UpcaseHandler` 实现将 `[CChar]` 传递给下一个处理程序。

## 实现 UpcaseHandler

新建 UpcaseHandler 类:

```swift
final class UpcaseHandler: ChannelInboundHandler {
}
```

`UpcaseHandler` 要实现 `ChannelInboundHandler` 这个协议。我们需要定义下面的属性：

* `InboundIn` - 将传递给处理程序的入站数据的类型
* `InboundOut` - 将传递给下一个处理程序的出站数据的类型

因此，在本例中，我们将接收一个 `ByteBuffer` 并传递一个`[CChar]`。

```swift
public typealias InboundIn = ByteBuffer
public typealias InboundOut = [CChar]
```

在入站通道管道中，ChannelInboundHandler 协议定义了将根据触发的事件回调的方法。在本例中，我们将处理 `channelRead` 事件。

```swift
public func channelRead(context: ChannelHandlerContext, data: NIOAny) {
    let inBuff = self.unwrapInboundIn(data)
    let str = inBuff.getString(at: 0, length: inBuff.readableBytes)

    let result = str?.uppercased() ?? ""

    let cresult = result.cString(using: .utf8) ?? [] 
    context.fireChannelRead(self.wrapInboundOut(cresult))
}
```

通过使用 `context.fireChannelRead` 触发管道上的读取方式，因为我们下一个 handler 实现了 `channelRead` 方法，接下来将执行这个方法。

## 实现 VowelsHandler

原理跟 `UpcaseHandler` 一样，实现如下：

```swift
import NIO

final class VowelsHandler: ChannelInboundHandler {
    public typealias InboundIn = [CChar]
    public typealias InboundOut = ByteBuffer

    public func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        let inBuff = self.unwrapInboundIn(data)
        let str = String(cString: inBuff)

        let vowels: [Character] = ["a","e","i","o","u", "A", "E", "I", "O", "U"]
        let result = String(str.map { return vowels.contains($0) ? Character("*") : $0 })

        var buffOut = context.channel.allocator.buffer(capacity: result.count )
        buffOut.writeString(result)

        context.fireChannelRead(self.wrapInboundOut(buffOut))
    }
}
```

在这个 Handler 中，我们将为下个 Handler 提供 `ByteBuffer` 数据，所以我们需要创建一个 `ByteBuffer`，通过 channel 的 `allocator` 进行创建：

```swift
var buffOut = context.channel.allocator.buffer(capacity: result.count )
buffOut.writeString(result)
```

## 实现 ColourHandler

原理依旧同上，我们创建 `ColourHandler` 这个类。

```swift
import NIO

final class ColourHandler: ChannelInboundHandler {
    public typealias InboundIn = ByteBuffer
    public typealias InboundOut = ByteBuffer

    public func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        let inBuff = self.unwrapInboundIn(data)
        let str = inBuff.getString(at: 0, length: inBuff.readableBytes) ?? ""

        let result = "\u{1B}[32m\(str)\u{1B}[0m"

        var buff = context.channel.allocator.buffer(capacity: result.count )
        buff.writeString(result)

        context.write(self.wrapInboundOut(buff), promise: nil)
    }
}
```

在这个处理程序中，我们知道没有下一个 hannder，因此不需要传递数据给下一个管道。我们需要将数据回传给客户端，采用 contenxt 的 `write` 方法。强烈建议查阅 [ChannelHandlerContext](https://apple.github.io/swift-nio/docs/current/NIO/Classes/ChannelHandlerContext.html) 的所有文档，它包含了很多有用的信息。

## 运行服务器

```sh
$ swift run
```

您应该在屏幕上看到以下消息:

```sh
Server started and listening on [IPv6]::1/::1:8888
```

## 使用 nc 进行调试

`nc` 是什么？

`nc/ncat﻿` 是 `netcat` 的缩写，它可以读写 TCP 与 UDP 端口——或许你看不懂这句话，这没有关系。简单地说，它可以在字符界面下，让你和服务器沟通交流。

`nc` 命令在 macOS 中是自带的，在 Linux 中一般自带，或是可以使用相应的软件包管理器安装（如在 Debian/Ubuntu 中这个包名叫 `netcat`）

打开一个新的shell进行连接

```sh
$ nc ::1 8888
```

输入消息，然后按 Enter。您应该看到回显后的文本已修改。

![-w367](http://blog.loveli.site/2020-11-29-16066221925549.png)

## 源码

实现的完整源码：

```swift
import Foundation
import NIO

let group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)

let bootstrap = ServerBootstrap(group: group)
    /// ① 配置 ServerChannel
    .serverChannelOption(ChannelOptions.backlog, value: 256)
    .serverChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    /// ②  子 channel 的初始化
    /// (当 一个连接被我们服务器接收)
    .childChannelInitializer { channel  in
        /// ③  将 Handles 添加到管道中
        channel.pipeline.addHandlers([BackPressureHandler(), UpcaseHandler(), VowelsHandler(), ColourHandler()])
    }
    /// ④  配置子channel
    .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    .childChannelOption(ChannelOptions.maxMessagesPerRead, value: 16)
    .childChannelOption(ChannelOptions.recvAllocator, value: AdaptiveRecvByteBufferAllocator())


let defaultHost = "::1"
let defaultPort = 8888

let channel = try bootstrap.bind(host: defaultHost, port: defaultPort).wait()
print("Server started and listening on \(channel.localAddress!)")

try channel.closeFuture.wait()
print("Server closed")


final class UpcaseHandler: ChannelInboundHandler {
    typealias InboundIn =  ByteBuffer
    typealias InboundOut = [CChar]

    func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        let inBuf = self.unwrapInboundIn(data)
        let str = inBuf.getString(at: 0, length: inBuf.readableBytes)
        let result = str?.uppercased() ?? ""
        let cresult = result.cString(using: .utf8) ?? []
        context.fireChannelRead(self.wrapInboundOut(cresult))
    }
}

final class VowelsHandler:ChannelInboundHandler {
    public typealias InboundIn = [CChar]
    public typealias InboundOut = ByteBuffer

    func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        let inBuff = self.unwrapInboundIn(data)
        let str = String(cString: inBuff)

        let vowels: [Character] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

        let result = String(str.map { vowels.contains($0) ? Character("*") : $0 })

        var buffOut = context.channel.allocator.buffer(capacity: result.count)
        buffOut.writeString(result)

        context.fireChannelRead(self.wrapInboundOut(buffOut))
    }

    func channelReadComplete(context: ChannelHandlerContext) {
        context.flush()
    }

    func errorCaught(context: ChannelHandlerContext, error: Error) {
        print("error: ", error)
        context.close(promise: nil)
    }

}

final class ColourHandler: ChannelInboundHandler {
    typealias InboundIn = ByteBuffer
    typealias InboundOut = ByteBuffer


    func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        let inBuff = self.unwrapInboundIn(data)
        let str = inBuff.getString(at: 0, length: inBuff.readableBytes) ?? ""
        let result = "\u{1B}[32m\(str)\u{1B}[0m"

        var buff = context.channel.allocator.buffer(capacity: result.count )
        buff.writeString(result)
        context.write(self.wrapInboundOut(buff), promise: nil)
    }
}
```
