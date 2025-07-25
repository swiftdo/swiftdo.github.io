---
title: Flutter 多线程
date: 2022-06-10T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/dmtyhkgg/
---

计算 0 + 1 + ... +10000000000 来模拟一个耗时的 json 解析操作，由于它是一个同步的行为，所以它的计算不会被暂停。由于计算任务比较耗时，界面会产生明显的卡顿。

```dart
int sum() {
    int res = 0;
    for (int i = 0; i <= 10000000000; i++) {
      res += i;
    }
    return res;
}
```

## 如何解决

既然 dart 单线程无法解决这样的问题，我们很容易就会想到使用多线程解决这个问题。在 dart 中，它的线程概念被称为 isolate。

各个 isolate 之间是无法共享内存空间，isolate 之间有自己的 event loop。我们只能通过 Port 传递消息，然后在另一个 isolate 中处理然后将结果传递回来，了解更多参考 [isolate API 文档](https://api.dartlang.org/stable/2.5.2/dart-isolate/Isolate-class.html)。

## isolate

使用 isolate 类进行并发操作，需要导入 isolate：

```dart
import 'dart:isolate';
```

该 Library 主要包含下面:

- Isolate 类: Dart 代码执行的隔离的上下文环境
- ReceivePort 类: 它是一个接收消息的 Stream， ReceivePort 可以生成 SendPort。ReceivePort 接收消息，可以把消息发送给其他的 isolate，所以要发送消息就需要生成 SendPort，然后再由 SendPort 发送给对应 isolate 的 ReceivePort。
- SendPort 类: 将消息发送给 isolate，准确的来说是将消息发送到 isolate 中的 ReceivePort。

### 如何创建一个 isolate?

1. 获取当前 main isolate 的 ReceivePort 及 SendPort；
2. 使用 Isolate.spawn 创建新的 isolate，需要传入新的 isolate 需要完成的任务名称及创建者(main isolate)的 sendPort. (用于将新的 isolate 的 sendPort 传递给创建者)；
3. 在任务方法中，获取新的 isolate 的 ReceivePort 及 SendPort
4. 将新的 isolate 的 SendPort，通过 main isolate 的 sendPort，发送给 main isolate，使新的 isolate 的 SendPort 能在 main isolate 中发送消息；
5. SendPort 发送消息，ReceivePort 接收消息，互相通信。

```dart

Future<int> calculation(int n) async {
  // 第1步：创建一个 ReceivePort，SendPort
  final receivePort1 = ReceivePort();
  final sendPort1 = receivePort1.sendPort;
  // 第2步：创建 isolate
  await Isolate.spawn(createIsolate, sendPort1);

  // 第5步：监听来自另一个isolate的消息
  int result = 0;
  await for (var value in receivePort1) {
    if (value is SendPort) {
      // 接受到另一个 isolate 的 SendPort,使用该 port 传递参数
      SendPort sendPort = value;
      sendPort.send(n);
    } else if (value is int) {
      // 接收到结果，结束
      result = value;
      receivePort1.close();
      break;
    }
  }
  return result;
}

void createIsolate(SendPort sendPort1) {
  // 第3步：获取新的 isolate 的 ReceivePort 及 SendPort
  final receivePort2 = ReceivePort();
  final sendPort2 = receivePort2.sendPort;
  // 第4步：将 sendPort2 传递 receivePort1
  print("sendPort1发送消息--sendPort2");
  sendPort1.send(sendPort2);
  // 第5步：监听来自另一个isolate的消息
  receivePort2.listen((message) {
    // 获取数据并解析
    print("receivePort2接收到消息--$message");
    if (message is int) {
      num result = sum(message);
      sendPort1.send(result);
    }
  });
}

//计算0到 num 数值的总和
int sum(int index) {
  int res = 0;
  for (int i = 1; i <= index; i++) {
    res += i;
  }
  return res;
}
```

工作 isolate 向主 isolate 发送了两次消息。第一次是将自己的 SendPort 发送给主线程，让主线程得以将参数 n 传给自己。第二次是将结果返回给主 isolate。主 isolate 使用 await for 方法等待所有消息，针对不同的消息做出不同的处理。当接受到结果的时候，关闭 port。

最终调用方式如下：

```dart
void main() {
  test('isolate sum', () async {
    final result = await calculation(10);
    expect(result, 55);
  });
}
```

## compute

使用的 Isolate.spawn 创建 Isolate 自然会觉得太过复杂，有没有一种更好的方式呢？

Flutter 已经为我们封装了一些实用方法，让我们能够更加自然地使用多线程进行处理。compute 是 flutter 基于 isolate 的一个封装。

使用 compute 在另一个 isolate 中执行该方法，并返回结果：

```dart
test('Compute sum', () async {
    final result = await compute(sum, 10);
    expect(result, 55);
});
```

仅仅一行代码我们就能够让 sum 运行在另一个 isolate 中，并返回结果。

## 线程池

使用 isolate 进行多线程操作会有一些额外的消耗，如何减少 isolate 创建所带来的消耗呢？

线程池（ThreadPool）是一种基于池化思想管理和使用线程的机制。它是将多个线程预先存储在一个“池子”内，当有任务出现时可以避免重新创建和销毁线程所带来性能开销，只需要从“池子”内取出相应的线程执行对应的任务即可。

我们这边推荐 2 个开源库：

- [isolate](https://pub.dev/packages/isolate)
- [worker_manager](https://pub.dev/packages/worker_manager)

使用都非常简单，这里就不增加篇幅进行阐述了。

## 参考

- [Flutter | 性能优化——如何避免应用 jank](https://github.com/awesome-tips/Flutter-Tips/blob/master/articles/Flutter%20%20%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E2%80%94%E2%80%94%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E5%BA%94%E7%94%A8%20jank.md)
