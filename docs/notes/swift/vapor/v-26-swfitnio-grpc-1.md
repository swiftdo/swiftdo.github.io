---
sitemap:
  exclude: false
  changefreq: hourly
title: SwiftNIO 实战之基于Protobuf 的 RPC 框架（1）
date: 2020-12-20T00:00:00.000Z
tags:
  - swift
  - vapor
  - swiftnio
createTime: 2024/08/02 09:19:27
permalink: /swift/g15d55gg/
---

上文[《SwiftNIO实战之序列化》](https://oldbird.run/swift/vapor/v-25-swiftnio-do-serisize.html)中，我们将 protobuf 作为 C/S 之间的数据传输的序列化工具，在其他方面了解较少。本文我们通过写一个简单的 RPC 框架，看看 protobuf 的高阶应用。当然本人对 RPC 也是知之皮毛，如存在理解错误之处，欢迎指正。

本文大致有如下几个内容：

* 1、编写 proto 文件定义服务，并使用 protobuf 编译器生成 RPC 对象接口模型。
* 2、编写 RPC 服务处理主逻辑
* 3、编写 RPC 服务框架
* 4、编写 RPC 客户端代码
* 5、编写客户端使用样例

> 内容较多，将分 2 篇文章讲解

## Proto 定义 RPC 服务

### 编写proto文件

`echo.proto` 内容如下：

```swift
syntax = "proto3";

message EchoRequest { 
    string message = 1; 
}

message EchoResponse { 
    string message = 1; 
}

service EchoServer { 
    rpc Echo(EchoRequest) returns(EchoResponse); 
}
```

如果对 probuf 的语法不熟，可查阅其[文档](https://developers.google.com/protocol-buffers/docs/proto3)

### 安装 gRPC swift 的插件

由于采用 grpc，所以我们需要用到 [gRPC swift 的插件](https://github.com/grpc/grpc-swift/blob/main/docs/plugin.md)。

根据文档，我们首先需要编译出 `protoc-gen-grpc-swift` 插件.

```sh
$ git clone https://github.com/grpc/grpc-swift.git
$ cd grpc-swift
$ make plugins
$ swift build --product protoc-gen-grpc-swift
$ ls
.... protoc-gen-grpc-swift protoc-gen-swift
```

通过上述步骤，可在 grpc-swift 项目根目录找到两个可执行文件 `protoc-gen-grpc-swift`，`protoc-gen-swift`。 

将这两个文件放入到你想放的文件中，本例中我把它们放到了 `~/probuf-plugins` 目录下，然后需要通过配置`PATH`。 

```sh
export PATH="$PATH":"$HOME/probuf-plugins"
```

将上面的 PATH 追加到 `~/.zshrc` 的末尾。

```sh
$ vim ~/.zshrc
$ source ~/.zshrc # 让配置生效
```

到此，已完成插件配置。

### 生成RPC对象接口模型

下一步，使用 protoc 工具生成 RPC 对象接口模型:

```sh
$ protoc echo.proto --grpc-swift_out=. --swift_out=.
$ ls
echo.grpc.swift echo.pb.swift echo.proto
```

* `echo.pb.swift` 主要是对象`EchoResponse` 和 `EchoRequest` 的序列化的实现。
* `echo.grpc.swift` 主要是 `EchoServerClient` 和 `EchoServerProvider` 的内容。

### EchoServerProvider

`EchoServerProvider`，它是一个继承自 `CallHandlerProvider` 的协议。

```swift
internal protocol EchoServerProvider: CallHandlerProvider {
  var interceptors: EchoServerServerInterceptorFactoryProtocol? { get }
  func echo(request: EchoRequest, context: StatusOnlyCallContext) -> EventLoopFuture<EchoResponse>
}
```

`EchoServerProvider` 作为 RPC 服务端逻辑处理类(EchoServerImpl)的基类，服务逻辑处理类通过实现 RPC 定义的方法来处理相关逻辑，即实现 `echo()` 函数。

### EchoServerClient

`EchoServerClient` 实现了 `EchoServerClientProtocol` 协议，`EchoServerClientProtocol` 继承自 `GRPCClient`。它是客户端访问 RPC 服务的一个包装类。

从它的 `echo` 的实现中:

```swift

extension EchoServerClientProtocol {
  ....
  
  internal func echo(
    _ request: EchoRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<EchoRequest, EchoResponse> {
    return self.makeUnaryCall(
      path: "/EchoServer/Echo",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeEchoInterceptors() ?? []
    )
  }
}
```

通过调用 `makeUnaryCall` 实现与服务器的通信。GRPCClient 封装了 GRPCChannel，本质上是通过 GRPCChannel 进行通信，将 RPC 调用本地化。

## 编写 RPC 服务逻辑

`EchoServerImpl` 通过实现 `EchoServerProvider` 的 echo 即可实现服务端的处理逻辑。

```swift
import GRPC
import NIO
import SwiftProtobuf
import Foundation

final class EchoServerImpl : EchoServerProvider {

    /// 这是个拦截器，这里我们不需要拦截器，跟 Vapor 的中间件很像
    var interceptors: EchoServerServerInterceptorFactoryProtocol?

    /// 方法具体实现。将接收数据打屏，并设置返回数据到response中。
    func echo(request: EchoRequest, context: StatusOnlyCallContext) -> EventLoopFuture<EchoResponse> {

        print("接收到客户端的数据: \(request.message)")

        let response = EchoResponse.with {
            $0.message = "oldbirds server echo get: " + request.message
        }
        return context.eventLoop.makeSucceededFuture(response)
    }
}
```

编写服务器端：

```swift
/// RpcServer.swift
import Foundation
import GRPC
import NIO

final class RpcServer {
    private let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
    private var host: String
    private var port: Int

    init(host: String, port: Int) {
        self.host = host
        self.port = port
    }

    func start() throws {
        let server = Server.insecure(group: group)
            .withServiceProviders([EchoServerImpl()])
            .bind(host: host, port: port)

        server.map {
            $0.channel.localAddress
        }.whenSuccess { address in
            print("server started on port \(address!.port!)")
        }

        _ = try server.flatMap {
            $0.onClose
        }.wait()
    }

    func stop() {
        do {
            try group.syncShutdownGracefully()
        } catch {
            print("Error shutting down \(error.localizedDescription)")
            exit(0)
        }
        print("Client connection closed")
    }
}
```

通过 `Server` 进行服务注册，以及绑定地址和端口，这部分处理跟上文处理比较雷同。

## 编写RPC客户端代码

```swift
import Foundation
import NIO
import GRPC

/// 问候
func great(name: String, client: EchoServerClient) throws {
    let request = EchoRequest.with {
        $0.message = name
    }

    let say = client.echo(request)

    let response = try say.response.wait()
    print("收到服务器返回：\(response.message)")
}

final class RpcClient {
    private let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)

    private var host: String
    private var port: Int

    init(host: String, port: Int) {
        self.host = host
        self.port = port
    }

    func start(name: String) throws {
        let channel = ClientConnection.insecure(group: group)
            .connect(host: host, port: port)
        let echoClient = EchoServerClient(channel: channel)
        try great(name: name, client: echoClient)
        try channel.close().wait()
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
}
```

`RpcClient` 的主要逻辑：连接服务端地址和端口，通过 EchoServerClient 调用 echo 方法(发送消息到服务端，调用其 echo)。


## 使用样例

到现在为止，我们的RPC服务端和客户端都已经完成了，实现了客户端进行远程调用。

```swift

/// main.swift

import ArgumentParser


struct RPC: ParsableCommand {

    static var configuration = CommandConfiguration(commandName: "RPC",
                                                    abstract: "RPC CLI",
                                                    version: "1.0.0",
                                                    subcommands: [Client.self, Server.self],
                                                    defaultSubcommand: Client.self)

}

extension RPC {
    struct Client: ParsableCommand {
        static var configuration: CommandConfiguration = CommandConfiguration(abstract: "开启客户端")

        @Argument(help: "传递名称")
        var name: String


        func run() throws {
            let client = RpcClient(host: "localhost", port: 8033)

            do {
                try client.start(name: name)
            } catch {
                print("error: \(error)")
                client.stop()
            }
        }
    }
}


extension RPC {
    struct Server: ParsableCommand {
        static var configuration: CommandConfiguration = CommandConfiguration(abstract:"开启服务端")

        func run() throws {
            let server = RpcServer(host: "localhost", port: 8033)

            do {
                try server.start()
            } catch  {
                print("Error: \(error)")
                server.stop()
            }
        }
    }
}

RPC.main()
```

通过 [`ArgumentParser`](https://github.com/apple/swift-argument-parser) 库，我们创建了 `rpc` 命令行。

启动 server：

```sh
$ swift run rpc server
server started on port 8033
```

另启一个终端，像服务器发起 echo:

```sh
$ swift run rpc client "hello world"
收到服务器返回：oldbirds server echo get: hello world
$ swift run rpc client "oldbirds, day day up"
```

此时服务器端的输出：

```sh
接收到客户端的数据: hello world
接收到客户端的数据: oldbirds, day day up
```

## 总结

从 proto 文件创建到最后客户端发送 “hello world”， 我们已经实现了一个入门级的 RPC 调用。整体逻辑也比较清晰：

* 通过 Proto 定义 RPC 服务，生成 RPC 对象接口模型
* 服务端通过实现 `EchoServerProvider`，完成 echo 的业务逻辑
* 客户端通过生成的 EchoServerClient，`client.echo(request)` 进行远程调用
* 最后使用 `ArgumentParser` 建立命令行，通过终端开启相关服务。

到此，很多人会有疑问：咋没看到你所说的`框架`，都是在讲解使用 [grpc-swift](https://github.com/grpc/grpc-swift) 框架，这是一篇 grpc 框架的入门教程？对，本文确实是 `grpc` 的入门文章，但是 grpc-swift 还有些功能尚未提供，比如：

* 服务注册发现
* 负载均衡的实现方案

这两块是我们下篇文章的核心内容了，对于一个企业级应用(微服务)来说，这两块还是不可或缺的。
本文代码已放 github 中，可做参考: [swiftdo/rpc](https://github.com/swiftdo/rpc)

**如存在理解错误之处，欢迎指正**