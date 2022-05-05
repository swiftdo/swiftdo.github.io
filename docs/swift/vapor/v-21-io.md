---
sitemap:
  exclude: false
  changefreq: hourly
title: "swift-nio原理之I/O模型篇"
date: 2020-11-22
tags:
  - swift
  - vapor
---

## 从 HTTP 说起

传统的 HTTP 服务器的原理:

- 1、创建一个 ServerSocket，监听并绑定一个端口
- 2、一系列客户端来请求这个端口
- 3、服务器使用 Accept，获得一个来自客户端的 Socket 连接对象
- 4、启动一个新线程处理连接
  - 4.1、读 Socket，得到字节流
  - 4.2、解码协议，得到 Http 请求对象
  - 4.3、处理 Http 请求，得到一个结果，封装成一个 HttpResponse 对象
  - 4.4、编码协议，将结果序列化字节流。写 Socket，将字节流发给客户端
- 5、继续循环步骤 3

用 python 代码很容易实现：

```python
import socket
import re
import threading

def handleRequest(client_socket):
    "用一个新的线程，为一个客户端进行服务（数据解析和数据响应）"
    recv_data = client_socket.recv(1024).decode('utf-8')
    client_socket.send(recv_data.encode('utf-8'))
    client_socket.close()


def main(server_address):
    # 1. 创建一个tcp套接字
    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 监听并绑定一个端口(SO_REUSEADDR: 允许立即使用上次绑定的 port)
    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    # 绑定
    listen_socket.bind(server_address)
    # 变为被动，并制定队列的长度
    listen_socket.listen(128)

    # 循环运行web服务器，等待客户端的链接并为客户端服务
    while True:
        # 3、服务器使用 Accept，获得一个来自客户端的 Socket 连接对象, 等待新客户端到来
        client_socket, client_address = listen_socket.accept()
        print(client_address)

        # 4、启动一个新线程处理连接  
        new_thread = threading.Thread(target=handleRequest,
                                      args=(client_socket,))
        new_thread.start()

# 设定服务器的端口
SERVER_ADDR = (HOST, PORT) = "", 8888

if __name__ == '__main__':
    main(SERVER_ADDR)

```

HTTP 服务器之所以称为 HTTP 服务器，是因为编码解码协议是 HTTP 协议，如果协议是 Redis 协议，那它就成了 Redis 服务器，如果协议是 WebSocket，那它就成了 WebSocket 服务器。对应的逻辑处理都在 `handleRequest` 中。

为了更清楚的理解上面的这个过程，我们一起理理其中的道道。

## I/O 模型

### I/O 模型分类

网络通信中，最底层的就是内核中的网络 I/O 模型了。《UNIX 网络编程》中将 I/O 模型分为：

- 阻塞式 I/O
- 非阻塞式 I/O
- I/O 复用
- 信号驱动式 I/O
- 异步 I/O

每一种 I/O 模型的出现，都是基于前一种 I/O 模型的优化升级。

### I/O 的定义

I/O 的全称是 Input/Output。为了厘清 I/O 这个概念，我们需要从不同角度去理解。

#### 计算机视角

冯•诺伊曼计算机的基本思想中有提到计算机硬件组成应为五大部分：控制器，运算器，存储器，输入和输出。其中输入是指将数据输入到计算机的设备，比如键盘鼠标；输出是指从计算机中获取数据的设备，比如显示器；以及既是输入又是输出设备，硬盘，网卡等。

用户通过操作系统才能完成对计算机的操作。计算机启动时，第一个启动的程序是操作系统的内核，它将负责计算机的资源管理和进程的调度。换句话说：操作系统负责从输入设备读取数据并将数据写入到输出设备。

所以 I/O 之于计算机，有两层意思：

- I/O 设备
- 对 I/O 设备的数据读写

对于一次 I/O 操作，必然涉及 2 个参与方，一个输入端，一个输出端，而又根据参与双方的设备类型，我们又可以分为磁盘 I/O，网络 I/O（一次网络的请求响应，网卡）等。

#### 程序视角

应用程序作为一个文件保存在磁盘中，只有加载到内存到成为一个进程才能运行。应用程序运行在计算机内存中，必然会涉及到数据交换，比如读写磁盘文件，访问数据库，调用远程 API 等等。但我们编写的程序并不能像操作系统内核一样直接进行 I/O 操作。

因为为了确保操作系统的安全稳定运行，操作系统启动后，将会开启保护模式：将内存分为**内核空间**（内核对应进程所在内存空间）和**用户空间**，进行内存隔离。我们构建的程序将运行在用户空间，用户空间无法操作内核空间，也就意味着**用户空间的程序不能直接访问由内核管理的 I/O**，比如：硬盘、网卡等。

但操作系统向外提供 API，其由各种类型的系统调用（System Call）组成，以提供安全的访问控制。
所以应用程序要想访问内核管理的 I/O，必须通过调用内核提供的系统调用(system call）进行间接访问。

所以 I/O 之于应用程序来说，强调的通过**向内核发起系统调用完成对 I/O 的间接访问**。换句话说应用程序发起的一次 IO 操作实际包含两个阶段：

1. IO 调用阶段：应用程序进程向内核发起系统调用
2. IO 执行阶段：内核执行 IO 操作并返回
   1. 准备数据阶段：内核等待 I/O 设备准备好数据
   2. 拷贝数据阶段：将数据从内核缓冲区拷贝到用户空间缓冲区

**怎么理解准备数据阶段呢？**
对于写请求：等待系统调用的完整请求数据，并写入内核缓冲区；
对于读请求：等待系统调用的完整请求数据；（若请求数据不存在于内核缓冲区）则将外围设备的数据读入到内核缓冲区。

![](http://blog.oldbird.run/2020-11-22-16059728054078.jpg)

而**应用程序进程在发起 IO 调用至内核执行 IO 返回之前，应用程序进程/线程所处状态**，就是我们下面要讨论的第二个话题**阻塞 IO** 与**非阻塞 IO**。

> 阻塞：服务端返回结果之前，客户端线程会被挂起，此时线程不可被 CPU 调度，线程暂停运行(阻塞状态)。
> 非阻塞：在服务端返回前，函数不会阻塞调用端线程，而会立刻返回。

### I/O 模型之阻塞 I/O(BIO)

应用程序中进程在发起 IO 调用后至内核执行 IO 操作返回结果之前，若发起系统调用的线程一直处于等待状态，则此次 IO 操作为阻塞 IO。阻塞 IO 简称 **BIO**（Blocking IO）。其处理流程如下图所示：

![](http://blog.oldbird.run/2020-11-22-16059731807905.jpg)

从上图可知当用户进程发起 IO 系统调用后，内核从准备数据到拷贝数据到用户空间的两个阶段期间用户调用线程选择阻塞等待数据返回。

因此 BIO 带来了一个问题：**如果内核数据需要耗时很久才能准备好，那么用户进程将被阻塞，浪费性能。为了提升应用的性能，虽然可以通过多线程来提升性能，但线程的创建依然会借助系统调用，同时多线程会导致频繁的线程上下文的切换，同样会影响性能**。所以要想解决 BIO 带来的问题，我们就得看到问题的本质，那就是**阻塞**二字。

单线程阻塞 I/O：

```python
import socket

def handle_client(client_socket):
    "为一个客户端进行服务"
    recv_data = client_socket.recv(1024).decode('utf-8')
    client_socket.send(recv_data.encode('utf-8'))
    client_socket.close()

def main():
    "作为程序的主控制入口"

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 设置当服务器先close 即服务器端4次挥手之后资源能够立即释放，这样就保证了，下次运行程序时 可以立即绑定7788端口
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_socket.bind(("", 7788))
    server_socket.listen(128)
    while True:
        client_socket, client_addr = server_socket.accept()
        handle_client(client_socket)

if __name__ == "__main__":
    main()
```

很容易发现我们开篇的服务器模型也是阻塞 I/O 模型。

### I/O 模型之非阻塞 I/O(NIO)

那解决方案自然也容易想到，将阻塞变为非阻塞，那就是用户进程在发起系统调用时指定为非阻塞，内核接收到请求后，就会立即返回，然后用户进程通过**轮询**的方式来拉取处理结果。也就是如下图所示：

![](http://blog.oldbird.run/2020-11-22-16059742545608.jpg)

应用程序中进程在发起 IO 调用后至内核执行 IO 操作返回结果之前，若发起系统调用的线程不会等待而是立即返回，则此次 IO 操作为非阻塞 IO 模型。非阻塞 IO 简称 **NIO**（Non-Blocking IO）。

然而，非阻塞 IO 虽然相对于阻塞 IO 大幅提升了性能，但依旧不是完美的解决方案，其依然存在性能问题，也就是**频繁的轮询导致频繁的系统调用，会耗费大量的 CPU 资源**。比如当并发很高时，假设有 1000 个并发，那么单位时间循环内将会有 1000 次系统调用去轮询执行结果，而实际上可能只有 2 个请求结果执行完毕，这就会有 998 次无效的系统调用，造成严重的性能浪费。有问题就要解决，那 NIO 问题的本质就是**频繁轮询导致的无效系统调用**。

非阻塞 I/O:

```python
import socket

# 用来存储所有的新链接的socket
g_socket_list = list()

def handleRequest(request, client_socket):
    "为一个客户端进行服务"
    client_socket.send(request.encode('utf-8'))

def main(server_address):
    # 创建一个tcp套接字
    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # SO_REUSEADDR:允许立即使用上次绑定的port
    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    # 绑定
    listen_socket.bind(server_address)
    # 变为被动，并制定队列的长度
    listen_socket.listen(128)

    # 将套接字设置为非堵塞
    # 设置为非堵塞后，如果 accept时，恰巧没有客户端connect，那么accept会产生一个异常，
    # 所以需要try来进行处理
    listen_socket.setblocking(False)

    # 循环运行web服务器，等待客户端的链接并为客户端服务
    while True:
        try:
            client_socket, client_address = listen_socket.accept()
        except Exception as result:
            pass
        else:
            # 设置为非堵塞
            client_socket.setblocking(False)
            g_socket_list.append(client_socket)

        # 轮询
        for c_socket in g_socket_list:
            try:
                request = c_socket.recv(1024).decode('utf-8')
            except Exception as result:
                pass
            else:
                if request:
                    handleRequest(request, c_socket)
                else:
                    c_socket.close()
                    g_socket_list.remove(c_socket)


# 设定服务器的端口
SERVER_ADDR = (HOST, PORT) = "", 8889

if __name__ == '__main__':
    main(SERVER_ADDR)
```

通过调用 `setblocking(False)` 将套接字设置为非堵塞。通过遍历 `g_socket_list` 达到轮询的目的。

### I/O 模型之 I/O 多路复用

解决 NIO 的思路就是降解无效的系统调用，如何降解呢？我们一起来看看以下几种 IO 多路复用的解决思路。

#### I/O 多路复用之 select/poll

Select 是内核提供的系统调用，它支持一次查询多个系统调用的可用状态，当任意一个结果状态可用时就会返回，用户进程再发起一次系统调用进行数据读取。换句话说，就是 NIO 中 N 次的系统调用，借助 Select，只需要发起一次系统调用就够了。其 IO 流程如下所示：

![](http://blog.oldbird.run/2020-11-22-16059759587853.jpg)

但是，select 有一个限制，就是存在连接数限制，针对于此，又提出了 poll。其与 select 相比，主要是解决了连接限制。

select/epoll 虽然解决了 NIO 重复无效系统调用用的问题，但同时又引入了新的问题。问题是：

1. 用户空间和内核空间之间，大量的数据拷贝
2. 内核循环遍历 IO 状态，浪费 CPU 时间

换句话说，select/poll 虽然减少了用户进程的发起的系统调用，但内核的工作量只增不减。在高并发的情况下，内核的性能问题依旧。所以 select/poll 的问题本质是：**内核存在无效的循环遍历**。

#### I/O 多路复用之 epoll

针对 select/pool 引入的问题，我们把解决问题的思路转回到内核上，如何减少内核重复无效的循环遍历呢？**变主动为被动，基于事件驱动来实现**。其流程图如下所示：

![](http://blog.oldbird.run/2020-11-22-16059761579874.jpg)

epoll 相较于 select/poll，多了两次系统调用，其中 epoll_create 建立与内核的连接，epoll_ctl 注册事件，epoll_wait 阻塞用户进程，等待 IO 事件。

![](http://blog.oldbird.run/2020-11-22-16059762518059.jpg)

```python
import socket
import select

connections = {}
addresses = {}


def main(server_address):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    s.bind(server_address)
    s.listen(10)

    # 创建一个 epoll 对象
    epoll = select.epoll()

    # 将创建的套接字添加到 epoll 的事件监听中
    epoll.register(s.fileno(), select.EPOLLIN | select.EPOLLET)

    # 循环等待客户端的到来或者对方发送数据
    while True:
        # epoll 进行 fd 扫描的地方 -- 未指定超时时间则为阻塞等待
        epoll_list = epoll.poll()

        for fd, events in epoll_list:
            # 如果是socket创建的套接字被激活
            if fd == s.fileno():
                new_socket, new_address = s.accept()
                connections[new_socket.fileno()] = new_socket
                addresses[new_socket.fileno()] = new_address

                # 向 epoll 中注册 新socket 的 可读 事件
                epoll.register(new_socket.fileno(),
                               select.EPOLLIN | select.EPOLLET)

            # 如果是客户端发送数据
            elif events == select.EPOLLIN:
                # 从激活 fd 上接收
                recvData = connections[fd].recv(1024).decode("utf-8")

                if recvData:
                    deal_with_request(recvData,
                                      connections[new_socket.fileno()])
                else:
                    # 从 epoll 中移除该 连接 fd
                    epoll.unregister(fd)
                    # server 侧主动关闭该 连接 fd
                    connections[fd].close()

                    del connections[fd]
                    del addresses[fd]


def deal_with_request(request, client_socket):
    # 将header返回给浏览器
    client_socket.send(request.encode('utf-8'))


# 设定服务器的端口
SERVER_ADDR = (HOST, PORT) = "", 8889

if __name__ == '__main__':
    main(SERVER_ADDR)
```

### I/O 模型之信号驱动 IO(SIGIO)

信号驱动 IO 与 BIO 和 NIO 最大的区别就在于，在 IO 执行的数据准备阶段，**不会阻塞用户进程**。
如下图所示：当用户进程需要等待数据的时候，会向内核发送一个信号，告诉内核我要什么数据，然后用户进程就继续做别的事情去了，而当内核中的数据准备好之后，内核立马发给用户进程一个信号，说”数据准备好了，快来查收“，用户进程收到信号之后，立马调用 recvfrom，去查收数据。

![](http://blog.oldbird.run/2020-11-22-16059763215360.jpg)

乍一看，信号驱动式 I/O 模型有种异步操作的感觉，但是在 IO 执行的第二阶段，也就是将数据从内核空间复制到用户空间这个阶段，用户进程还是被阻塞的。

综上，你会发现，不管是 BIO 还是 NIO 还是 SIGIO，它们最终都会被阻塞在 I/O 执行的第二阶段。
那如果能将 I/O 执行的第二阶段变成非阻塞，那就完美了。

### I/O 模型之异步 I/O(AIO)

异步 I/O 真正实现了 I/O 全流程的非阻塞。用户进程发出系统调用后立即返回，内核等待数据准备完成，然后将数据拷贝到用户进程缓冲区，然后发送信号告诉用户进程 I/O 操作执行完毕（与 SIGIO 相比，一个是发送信号告诉用户进程数据准备完毕，一个是 I/O 执行完毕）。其流程如下：

![](http://blog.oldbird.run/2020-11-22-16059764518724.jpg)

所以，之所以称为异步 I/O，取决于 I/O 执行的第二阶段是否阻塞。因此前面讲的 BIO，NIO 和 SIGIO 均为同步 IO。

![](http://blog.oldbird.run/2020-11-22-16059764725587.jpg)

## 参考

- [IO 模型知多少 | 理论篇](https://www.cnblogs.com/sheng-jie/p/how-much-you-know-about-io-models.html)
