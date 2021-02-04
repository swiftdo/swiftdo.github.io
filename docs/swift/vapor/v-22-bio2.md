---
sitemap:
  exclude: false
  changefreq: hourly
title: '伪异步改进同步阻塞I/O模型'
date: 2020-11-22
tags:
- swift
- vapor
---

## 一连接一线程的弊端

BIO 的服务端通信模型： 采用 BIO 通信模型的服务端，通常由一个独立的线程负责监听客户端的链接，它接收到客户端的链接之后为每个客户端创建一个新的线程进行链路处理，处理完成后，通过输出流返回应答给客户端，线程销毁。这是典型的一请求一应答通信模型。

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
        
        # 4、启动一个新线程处理连接   
        new_thread = threading.Thread(target=handleRequest,
                                      args=(client_socket,))
        new_thread.start()

# 设定服务器的端口
SERVER_ADDR = (HOST, PORT) = "", 8888

if __name__ == '__main__':
    main(SERVER_ADDR)
```

该模型最大的问题就是缺乏弹性伸缩能力，当客户端并发访问量增加后，服务端的线程数和客户端并发访问数呈现 1：1 的正比关系，由于线程的创建依然会借助系统调用，同时多线程会导致频繁的线程上下文的切换，当线程数膨胀之后，系统性能会急剧下降，随着并发量的继续增大，系统会发生线程堆栈溢出、创建线程失败等问题，并最终导致进程宕机或者僵尸，不能对外提供服务。这种模型显然无法满足高性能、高并发接入的场景。

为了改善一连接一线程模型，可以通过线程池或者消息队列实现一个或者多个线程处理 N 个客户端的模型，由于底层通信机制依旧使用同步阻塞 I/O, 所以又被称为 “伪异步”，那么能否满足对高性能、高并发的接入诉求。

## 伪异步I/O模型

采用线程池和任务队列可以实现一种叫做伪异步的 I/O 通信框架。

当有新的客户端接入的时候，将客户端的 socket 投递到线程池中进行处理。由于线程池可以设置最大线程数，因此，它的资源占用是可控的，无论多少个客户端并发访问，都不会导致资源耗尽和宕机。

```python
import socket
import re
import threading
from concurrent.futures import ThreadPoolExecutor

def handleRequest(client_socket):
    "用一个新的进程，为一个客户端进行服务"
    while True:
        recv_data = client_socket.recv(1024).decode('utf-8')
        if not recv_data:
            break
        client_socket.send(recv_data.encode('utf-8'))

    client_socket.close()


def main(server_address):
    # 创建一个线程池
    pool = ThreadPoolExecutor(128)
    # 创建一个tcp套接字
    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # SO_REUSEADDR:允许立即使用上次绑定的port
    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    # 绑定
    listen_socket.bind(server_address)
    # 变为被动，并制定队列的长度
    listen_socket.listen(5)

    # 循环运行web服务器，等待客户端的链接并为客户端服务
    while True:
        # 等待新客户端到来
        client_socket, client_address = listen_socket.accept()
        pool.submit(handleRequest, client_socket)


# 设定服务器的端口
SERVER_ADDR = (HOST, PORT) = "", 8888

if __name__ == '__main__':
    main(SERVER_ADDR)
```


## 伪异步 I/O 的弊端

### recv 方法

阻塞式的 socket 的 `recv` 服从这样的规则：当缓冲区内有数据时，立即返回所有的数据；当缓冲区内无数据时，阻塞直到缓冲区中有数据。

非阻塞式的 socket 的 `recv` 服从的规则则是：当缓冲区内有数据时，立即返回所有的数据；当缓冲区内无数据时，产生EAGAIN的错误并返回（在Python中会抛出一个异常）。

两种情况都不会返回空字符串，返回空数据的结果是对方关闭了连接之后才会出现的。

```python
client_socket.recv(1024)
```
这里采用的是阻塞方式，这意味着当对方发送的请求或者应答消息比较缓慢、或者网络传输比较慢时，读取输入流一方的通信线程将被长时间阻塞，如果对方要 60s 才能将数据发送完成，读取一方的 I/O 线程也将会被同步阻塞 60s，在此期间，其他接入的消息只能等待执行。

在上方的举例中，`recv` 和 `send` 都是阻塞的，阻塞的时间取决于对方 I/O 线程的处理速度和网络 I/O 的传输速度。本质上来讲，我们无法保证生产环境的网络状况和对端的应用程序足够快，如果我们的应用程序依赖对方的处理速度，它的可靠性就非常的差。

伪异步 I/O 实际上仅仅只是对之前 I/O 线程模型的一个简单优化，它无法从根本上解决同步 I/O 导致的通信线程阻塞问题。

如果对方返回应答的时间过长，会引发什么故障？

（1）服务器处理缓慢，返回应答消息耗时 60s, 平时只需要 10ms。

（2）采用伪异步 I/O 的线程正则读取故障服务节点的响应，由于读取输入流是阻塞的，因此，它将会被同步阻塞 60s。

（3）加入所有的可用线程都被故障服务器阻塞，那后续所有的 I/O 消息都将在等待。

（4）由于前端只有一个 accept 线程接受客户端接入，线程池接受消息过载，新的客户端请求消息将被拒绝，客户端会发生大量的连接超时。

（5）由于几乎所有的连接都超时，调用者会认为系统已经崩溃，无法接受新的请求消息。

如何破局？