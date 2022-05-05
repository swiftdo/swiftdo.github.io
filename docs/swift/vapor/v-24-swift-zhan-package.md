---
sitemap:
  exclude: false
  changefreq: hourly
title: "SwiftNIO 实战之TCP粘包/拆包问题"
date: 2020-11-22
tags:
  - swift
  - vapor
  - swiftnio
---

在 TCP 编程中，无论是服务器还是客户端，当我们读取或者发送消息的时候，都需要考虑 TCP 底层的粘包/拆包机制。本文先简单介绍 TCP 粘包/拆包的基础知识，然后模拟一个没有考虑 TCP 粘包/拆包导致功能异常的案例，最后探讨 SwiftNIO 是如何解决这个问题的。

## TCP 粘包/拆包

在 Socket 通讯过程中，如果通讯的一端一次性连续发送多条数据包，TCP 协议会将多个数据包打包成一个 TCP 报文发送出去，这就是所谓的**粘包**。而如果通讯的一端发送的数据包超过一次 TCP 报文所能传输的最大值时，就会将一个数据包拆成多个最大 TCP 长度的 TCP 报文分开传输，这就叫做**拆包**。

### 一些基本概念

- **MTU**（Maximum Transmission Unit）：泛指通讯协议中的最大传输单元。一般用来说明 TCP/IP 四层协议中数据链路层的最大传输单元，不同类型的网络 MTU 也会不同，我们普遍使用的以太网的 MTU 是 1500，即最大只能传输 1500 字节的数据帧。
- **MSS**（Maximum Segment Size）：指 TCP 建立连接后双方约定的可传输的最大 TCP 报文长度，是 TCP 用来限制应用层可发送的最大字节数。如果底层的 MTU 是 1500 byte，则 MSS = 1500 - 20(IP Header) - 20 (TCP Header) = 1460 byte。

  > 字 word、字节 byte、位 bit

### 示意图

![](http://blog.oldbird.run/2020-12-06-16066537712606.jpg)

假设客户端分别发送了两个数据包 D1 和 D2 给服务器，由于服务器一次读取的字节数是不确定的，故可能存在以下 4 中情况：

（1）服务端分两次读取到了两个独立的数据包，分别是 D1 和 D2，没有粘包和拆包；

（2）服务端一次接收到了两个数据包，D1 和 D2 粘合在一起，被称为 **TCP 粘包**；

（3）服务端分两次读取到了两个数据包，第一次读取到了完整的 D1 包和 D2 包的部分内容，第二次读取到了 D2 包的剩余内容，这被称为 **TCP 拆包**；

（4）服务端分两次读取到了两个数据包，第一次读取到了 D1 包的部分内容 D1_1，第二次读取到了 D1 包的剩余内容 D1_2 和 D2 包的整包。

如果此时服务端 TCP 接收滑窗非常小，而数据包 D1 和 D2 比较大，很有可能会发生第五种可能，即服务端分多次才能将 D1 和 D2 包接收完全，期间发生多次拆包。

### TCP 粘包/拆包发生的原因

问题的产生原因有三个：

（1）应用程序 write 写入的字节大小大于套接口发送缓冲区大小；
（2）进行 MSS 大小的 TCP 分段；
（3）以太网帧的 payload 大于 MTU 进行 IP 分片。

![](http://blog.oldbird.run/2020-12-06-16066541018747.jpg)

### 粘包问题的解决策略

由于底层的 TCP 无法理解上层的业务数据，所以在底层是无法保证数据包不被拆分和重组的，这个问题只能通过上层的应用协议栈设计来解决，根据业界的主流协议的解决方案，可以归纳如下：

（1）消息定长，例如每个报文的大小为固定长度 200 字节，如果不够，空位补空格；

（2）在包尾增加回车换行符进行分割，例如 FTP 协议；

（3）将消息分为消息头和消息体，消息头中包含表示消息总长度（或者消息体长度）的字段，通常设计思路为消息头的第一个字段使用 int32 来表示消息的总长度；

（4）更复杂的应用层协议。

## 没有考虑 TCP 粘包/拆包的案例

本例子是个回显服务器，客户端发送 `Hello world, oldbird learn swiftNIO, day day up !!!` 100 次，服务端原文返回 100 次。我们的期望就是服务器和客户端都有 100 次的计数打印。

### 服务端代码

```swift
let group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)
let bootstrap = ServerBootstrap(group: group)
    .serverChannelOption(ChannelOptions.backlog, value: 256)
    .serverChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    .childChannelInitializer { channel in
        channel.pipeline.addHandlers([ServerEchoHandler()])
    }
    .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    .childChannelOption(ChannelOptions.maxMessagesPerRead, value: 16)
    .childChannelOption(ChannelOptions.recvAllocator, value: AdaptiveRecvByteBufferAllocator())


let defaultHost = "::1" // ipv6
let defaultPort = 8899

let channel = try bootstrap.bind(host: defaultHost, port: defaultPort).wait()
print("Server started and listening on \(channel.localAddress!)")

try channel.closeFuture.wait()
print("Server closed")

final class ServerEchoHandler: ChannelInboundHandler {
    typealias InboundIn =  ByteBuffer
    typealias OutboundOut = ByteBuffer

    private var counter: Int = 0

    func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        let inBuf = self.unwrapInboundIn(data)
        let str = inBuf.getString(at: 0, length: inBuf.readableBytes) ?? ""
        counter += 1
        print("Server receive:\(str), counter=\(counter)")
        /// data 是没有换行符号的，我们需要给数据添加换行符
        let body = "\(str)\r\n"

        var buffOut = context.channel.allocator.buffer(capacity: body.count)
        buffOut.writeString(body)
        context.writeAndFlush(self.wrapOutboundOut(buffOut), promise: nil)
    }

    func channelReadComplete(context: ChannelHandlerContext) {
        context.flush()
    }

    func errorCaught(context: ChannelHandlerContext, error: Error) {
        context.close(promise: nil)
    }
}
```

### 客户端代码

```swift
let group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)

//        defer {
//            try! group.syncShutdownGracefully()
//        }

let bootstrap = ClientBootstrap(group: group)
    .channelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
    .channelInitializer { channel in
        channel.pipeline.addHandler(EchoHandler())
    }

let defaultHost = "::1"
let defaultPort = 8899

let channel = try bootstrap.connect(host: defaultHost, port: defaultPort).wait()

try channel.closeFuture.wait()

print("client closed")


final class EchoHandler: ChannelInboundHandler {
    typealias InboundIn = ByteBuffer
    typealias OutboundOut = ByteBuffer

    private var count = 0

    func channelActive(context: ChannelHandlerContext) {
        var i: Int = 0
        repeat {
            let buffer = context.channel.allocator.buffer(string: "Hello world, oldbird learn swiftNIO, day day up !!!\r\n")
            context.writeAndFlush(self.wrapOutboundOut(buffer), promise: nil)
            i += 1;
        } while ( i < 100 )
    }

    func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        var buffer = unwrapInboundIn(data)
        if let received = buffer.readString(length: buffer.readableBytes) {
            count += 1
            print("client received: \(received), count=\(count)")
        }
    }

    func errorCaught(context: ChannelHandlerContext, error: Error) {
        context.close(promise: nil)
    }
}
```

分别运行客户端和服务端代码，当客户端代码连接完成后，`context.writeAndFlush` 调用 100 次.
输出结果过长，用 `...` 代表输出多个完整的 `oldbird learn swiftNIO, day day up !!!`。

在服务器端的输出：

```swift
Server started and listening on [IPv6]::1/::1:8899
...Hello wo, counter=1
...Hello world, old, counter=2
oldbird learn swiftNIO, day day up !!!, counter=3
```

客户端的输出：

```swift
[2/2] Merging module niots
...Hello wo, count=1
...Hello world, old, count=2
...Hello world, oldbird learn swiftNIO, day day up !!!, count=3
```

从结果来看，很明显，次数不是我们期待的 100 次，而且从这几次的结尾数据，很容易知道发生了粘包现象，以及半包的情况。那如何才能达到我们想要功能？

## 使用 SwiftNIO 解决读半包问题

首先我们需要引入 `swift-nio-extras` 依赖，在 `Package.swift` 中：

```swift

let package = Package(
    name: "niots",
    dependencies: [
        .package(url: "https://github.com/apple/swift-nio.git", from: "2.0.0"),
        // 加入依赖
        .package(url: "https://github.com/apple/swift-nio-extras.git", from: "1.0.0"),
    ],
    targets: [
        .target(
            name: "niots",
            dependencies: [
                .product(name:"NIO", package: "swift-nio"),
                // 加入依赖
                .product(name: "NIOExtras", package: "swift-nio-extras")
            ]),
        .testTarget(
            name: "niotsTests",
            dependencies: ["niots"]),
    ]
)
```

服务端进行修改：

```swift

final class EchoServer {
    static func run() throws {
        ...
        .childChannelInitializer { channel in
            // ByteToMessageHandler(LineBasedFrameDecoder())
            channel.pipeline.addHandlers([ByteToMessageHandler(LineBasedFrameDecoder()),ServerEchoHandler()])
        }
        .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
        ...
    }
}
```

新增了 `ByteToMessageHandler(LineBasedFrameDecoder())`，然后重新启动客户端，服务器端输出符合我们的需求：

```swift
Server receive:Hello world, oldbird learn swiftNIO, day day up !!!, counter=1
...
Server receive:Hello world, oldbird learn swiftNIO, day day up !!!, counter=99
Server receive:Hello world, oldbird learn swiftNIO, day day up !!!, counter=100
```

客户端的代码我们并没有进行修改，它的输出：

```swift
client received: Hello world, oldbird learn swiftNIO, day day up !!!...Hello wo, count=1
client received: rld, oldbird learn swiftNIO, day day up !!!...Hello world, old, count=2
client received: bird learn swiftNIO, day day up !!!..., count=3
```

客户端依旧是打印了 3 次，且发生粘包现象，不满足预期。

然后修改客户端代码如下：

```swift
final class EchoClient {
    static func run() throws {
        ...
        let bootstrap = ClientBootstrap(group: group)
            .channelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
            .channelInitializer { channel in
                channel.pipeline.addHandlers([ByteToMessageHandler(LineBasedFrameDecoder()),EchoHandler()])
            }

        ...
    }
}
```

运行客户端，输出结果跟服务器端一样，100 次！

程序的运行结果完全符合预期，说明通过使用 `ByteToMessageHandler(LineBasedFrameDecoder())` 成功解决了 TCP 粘包导致的读半包问题。对于使用者来说，只要将这个 handler 添加到 ChannnelPipeline 中即可，不需要写额外的代码，使用非常简单。

**LineBasedFrameDecoder** 的工作原理是它依次遍历 `ByteBuf` 中的可读字节，判断是否有 “\n” 或者 “\r\n”，如果有，就以此位置为结束位置，从可读的索引到结束的位置区间的字节就组成一行。**它是以换行符为结束标志的解码器**。

可能你会提出新的疑问：如果发送的消息不是以换行符结束怎么办？或者没有回车换行符，靠消息头中的长度字段来分包怎么办？是不是需要自己写半解码器？答案是否定的，swift-nio-extras 提供了多种解码器，用来满足不同的诉求：

- `FixedLengthFrameDecoder`， 按固定的字节数分割传入的 `ByteBuffer`
- `LengthFieldBasedFrameDecoder`，将传入的 ByteBuffer 按报头中指定的长度进行分割
- ...

## 总结

本文首先对 TCP 的粘包和拆包进行了讲解，给出了解决这个问题的通用做法，然后我们提供个回显的例子进行验证没有考虑 TCP 粘包/拆包导致的问题，然后给出了一个解决方案，即利用 `ByteToMessageHandler(LineBasedFrameDecoder())` 来解决 TCP 的粘包/拆包问题。

通用做法：

（1）消息定长；

（2）在包尾增加回车换行符进行分割；

（3）将消息分为消息头和消息体，消息头中包含表示消息总长度（或者消息体长度）的字段，通常设计思路为消息头的第一个字段使用 int32 来表示消息的总长度；

（4）更复杂的应用层协议；
