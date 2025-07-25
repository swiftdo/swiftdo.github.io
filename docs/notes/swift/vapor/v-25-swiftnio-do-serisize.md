---
sitemap:
  exclude: false
  changefreq: hourly
title: SwiftNIO 实战之序列化
date: 2020-12-09T00:00:00.000Z
tags:
  - swift
  - vapor
  - swiftnio
createTime: 2024/08/02 09:19:27
permalink: /swift/uac12wqd/
---

序列化一般有两个主要目的：

- 网络传输
- 对象持久化

一般评判一个编解码框架的优劣时，会考虑如下几个因素：

- 是否支持跨语言；
- 编码后的码流大小；
- 编解码性能；
- 类库是否小巧，API 使用是否方便；
- 使用者需要手工开发的工作量和难度；
- 类库的开源性以及社区活跃度；

在同等环境下，编码后的字节数越大，存储的时候就越占空间，存储的硬件成本就越高，并且在网络传输时更占带宽，导致系统的吞吐量降低。

## 主流编解码框架

### Google 的 Protobuf

Protobuf（Google Protocol Buffers），由谷歌开源。它将数据结构以 .proto 文件进行描述，通过代码生成工具可以生成对应数据结构的 POJO 对象和 Protobuf 相关的方法和属性。

它的特点：

- 结构化数据存储格式
- 高效的编解码性能
- 语言无关、平台无关、扩展性好
- 支持的语言比较丰富

对比 XML, 尽管 XML 的可读性和可扩展性非常好，也非常适合描述数据结构，但是 XML 解析的时间开销和 XML 为了可读性而牺牲的空间开销都非常大，因此不适合做高性能的通信协议。Protobuf 使用二进制编码，在空间和性能上具有更大优势。

### Facebook 的 Thrift

Thrift 是 Facebook 于 2007 年开发的跨语言的 rpc 服框架，提供多语言的编译功能，并提供多种服务器工作模式；用户通过 Thrift 的 IDL（接口定义语言）来描述接口函数及数据类型，然后通过 Thrift 的编译环境生成各种语言类型的接口文件，用户可以根据自己的需要采用不同的语言开发客户端代码和服务器端代码。

## 实战 Protobuf

### 安装

您将需要 protobuf 的编译器来生成指定语言的的文件。

我们需要安装：[apple/swift-protobuf](https://github.com/apple/swift-protobuf)

```sh
$ brew install swift-protobuf
$ protoc --version
libprotoc 3.14.0
```

### .proto

创建 `.proto` 文件，然后在里面定义消息，再通过 `protobuf` 编译器生成 `Swift`代码。

对于 .proto 文件，我们可以用任意的 IDE 或者文本编辑器进行编辑，个人建议用 `VSCode` 然后结合 `vscode-proto3` 插件。

Google protocol buffer 的官方文档：[文档](https://developers.google.com/protocol-buffers/docs/proto3)

我们简单的创建个 `movie.proto`：

```swift
syntax = "proto3";

message Movie {
    enum Genre {
        COMEDY = 0;
        ACTION = 1;
        HORROR = 2;
        ROMANCE = 3;
        DRAMA = 4;
    }

    string title = 1;
    Genre genre = 2;
    int32 year = 3;
}
```

然后将其进行编译：

```sh
$ protoc --swift_out=. movie.proto
```

执行后，编译器会生成 `movies.pb.swift` 文件。

### 功能需求

创建 `MovieClient` 和 `MovieServer` 两端，然后使用 SwiftNIO 将我们的 Movie 结构从客户端发送到服务器。

然后两端都需要依赖 `apple/swift-nio` 和 `apple/swift-protobuf`

```swift
// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "MovieClient",
    dependencies: [
        .package(url: "https://github.com/apple/swift-nio.git", from: "2.0.0"),
        .package(name: "SwiftProtobuf", url: "https://github.com/apple/swift-protobuf.git", from: "1.14.0")
    ],
    targets: [

        .target(
            name: "MovieClient",
            dependencies: [
                .product(name: "NIO", package: "swift-nio"),
                "SwiftProtobuf"
            ]),
        .testTarget(
            name: "MovieClientTests",
            dependencies: ["MovieClient"]),
    ]
)
```

MovieClient 和 MovieServer 将生成的 `movies.pb.swift` 分别引入各自项目中。

MoviewClient 的工程目录：

![-w269](http://blog.oldbird.run/2020-12-10-16075304217750.png)

MovieServer 的工程目录：

![-w269](http://blog.oldbird.run/2020-12-10-Screen%20Shot%202020-12-10%20at%2012.13.27%20AM.png)

两端代码的 Handler 是各自业务的核心。其它代码是 SwiftNIO 使用比较常见的使用方式。

本例中使用 8030 作为服务器的端口，整体过程比较简单，核心地方都有注释。

> 如果你对创建 swift 项目不太熟悉，建议看之前的文章

### 实现 MovieClient

MovieClient.swift 的实现如下：

```swift
import Foundation
import NIO

final class MovieClient {
    private let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)

    private var host: String
    private var port: Int

    init(host: String, port: Int) {
        self.host = host
        self.port = port
    }

    func start() throws {
        do {
            let channel = try bootstrap.connect(host: host, port: port).wait()
            try channel.closeFuture.wait()
        } catch let error {
            throw error
        }
    }

    func stop() {
        do {
            try group.syncShutdownGracefully()
        } catch let error {
            print("Error shutting down \(error.localizedDescription)")
            exit(0)
        }
        print("Client connection closed")
    }

    private var bootstrap: ClientBootstrap {
        return ClientBootstrap(group: group)
            // Enable SO_REUSEADDR.
            .channelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
            .channelInitializer { channel in
                channel.pipeline.addHandler(MovieClientHandler())
        }
    }
}
```

MovieClientHandler.swift 的实现：

```swift
import Foundation
import NIO

class MovieClientHandler: ChannelInboundHandler {
    typealias InboundIn = ByteBuffer
    typealias OutboundOut = ByteBuffer

    func channelActive(context: ChannelHandlerContext) {
        var movie = Movie()
        movie.genre = .romance
        movie.title = "那些年我们一起追过的女孩"
        movie.year = 2011

        do {
            /// 序列化对象
            let binaryData: Data = try movie.serializedData()

            // 创建 buffer
            var buffer = context.channel.allocator.buffer(capacity: binaryData.count)

            // 将数据写入 buffer
            buffer.writeBytes(binaryData)

            let promise: EventLoopPromise<Void> = context.eventLoop.makePromise()
            promise.futureResult.whenComplete { (_) in
                print("Sent data, closing the channel")
                context.close(promise: nil)
            }

            // write and flush the data
            context.writeAndFlush(wrapOutboundOut(buffer), promise: promise)
        } catch let error {
            print(error.localizedDescription)
        }
    }

    func errorCaught(context: ChannelHandlerContext, error: Error) {
        print(error.localizedDescription)
        context.close(promise: nil)
    }
}
```

main.swift 的实现：

```swift
let client = MovieClient(host: "localhost", port: 8030)

do {
    try client.start()
} catch let error {
    print("Error: \(error.localizedDescription)")
    client.stop()
}
```

### 实现 MovieServer

MovieServer.swift 的实现：

```swift

import Foundation
import NIO

final class MovieServer {

    private let group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)
    private var host: String
    private var port: Int

    init(host: String, port: Int) {
        self.host = host
        self.port = port
    }

    func start() throws {
        do {
            let channel = try serverBootstrap.bind(host: host, port: port).wait()
            print("Listening on \(String(describing: channel.localAddress))...")
            try channel.closeFuture.wait()
        } catch let error {
            throw error
        }
    }

    func stop() {
        do {
            try group.syncShutdownGracefully()
        } catch let error {
            print("Error shutting down \(error.localizedDescription)")
            exit(0)
        }
        print("Client connection closed")
    }

    private var serverBootstrap: ServerBootstrap {
        return ServerBootstrap(group: group)
            // Specify backlog and enable SO_REUSEADDR for the server itself
            .serverChannelOption(ChannelOptions.backlog, value: 256)
            .serverChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
            .childChannelInitializer { channel in
                // Ensure we don't read faster than we can write by adding the BackPressureHandler into the pipeline.
                channel.pipeline.addHandler(BackPressureHandler()).flatMap { v in
                    channel.pipeline.addHandler(MovieServerHandler())
                }
            }
            .childChannelOption(ChannelOptions.socket(IPPROTO_TCP, TCP_NODELAY), value: 1)
            // Enable SO_REUSEADDR for the accepted Channels
            .childChannelOption(ChannelOptions.socketOption(.so_reuseaddr), value: 1)
            .childChannelOption(ChannelOptions.maxMessagesPerRead, value: 16)
            .childChannelOption(ChannelOptions.recvAllocator, value: AdaptiveRecvByteBufferAllocator())
    }

}
```

MovieServerHandler.swift 的实现：

```swift
import Foundation
import NIO

class MovieServerHandler: ChannelInboundHandler {
    typealias InboundIn = ByteBuffer
    typealias OutboundOut = ByteBuffer

    func channelRead(context: ChannelHandlerContext, data: NIOAny) {
        // 将 NIOAny 转化为 ByteBuffer
        var buffer = unwrapInboundIn(data)

        // 获取可读的字节数
        let readableBytes = buffer.readableBytes

        // 从 buffer 读取
        guard let received = buffer.readBytes(length: readableBytes) else {
            return
        }

        // 将 bytes 转化为 data
        let receivedData = Data(bytes: received, count: received.count)

        do {
            // 反序列化
            let movie = try Movie(serializedData: receivedData)
            print("收到: \(movie)")
            // 做其他事情
        } catch let error {
            print("error: \(error.localizedDescription)")
        }
    }

    func channelReadComplete(context: ChannelHandlerContext) {
        context.flush()
    }

    func errorCaught(context: ChannelHandlerContext, error: Error) {
        print("error: \(error.localizedDescription)")
        context.close(promise: nil)
    }
}
```

main.swift 的实现：

```swift
let server = MovieServer(host: "localhost", port: 8030)

do {
    try server.start()
} catch let error {
    print("Error: \(error.localizedDescription)")
    server.stop()
}
```

### 运行结果

分别运行服务器和客户端，客户端输出：

```sh
Sent data, closing the channel
Program ended with exit code: 0
```

服务器端输出：

```swift
Listening on Optional([IPv4]127.0.0.1/127.0.0.1:8030)...
收到: MovieServer.Movie:
title: "那些年我们一起追过的女孩"
genre: ROMANCE
year: 2011
```

## 总结

本文的主要目的是介绍下网络编解码的一些入门知识，其中以 Protobuf 的样例进行简单的讲解，从而知道 Protobuf 在 SwiftNIO 的基本使用的流程，总体来讲也比较简单：

1. 通过声明 movie.proto，然后用 probuf 的编译器生成 swift 代码，这这份生成的代码引入客户端和服务器端；
2. 在客户端中创建 Movie 对象，然后序列化成 Data，通过 SwiftNIO 发送给服务器端；
3. 服务器端接收到客户端的数据，从 ByteBuffer 中读取到数据，然后将其转化为 Data，在通过方法将 Data 反序列化成 Movie 对象，完成解码。

proto 文件生成目标代码，简单易用；
序列化反序列化直接对应程序中的数据类，不需要解析后在进行映射；
二进制消息，性能好/效率高；

对我而言，可能成本在于写 proto，需要学习其语法。在客户端层面，普及率还是没有 json 广泛。

## 参阅

- [序列化和反序列化](https://tech.meituan.com/2015/02/26/serialization-vs-deserialization.html)
- [Protocol Buffers with SwiftNIO](https://fattywaffles.medium.com/protocol-buffers-with-swiftnio-69a2804b5ba9)
