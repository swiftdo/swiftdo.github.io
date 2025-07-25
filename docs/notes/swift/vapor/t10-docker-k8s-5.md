---
sitemap:
  exclude: false
  changefreq: hourly
title: K8s 查看应用程序日志
date: 2024-09-29T00:00:00.000Z
tags:
  - swift
  - vapor
  - docker
  - k8s
createTime: 2024/09/29 14:20:10
permalink: /swift/q2z6od4t/
---

容器化的应用程序通常会将日志记录到标准输出和标准错误流，而不是将其写入文件，这就允许用户可以通过简单、标准的方式查看不同应用程序的日志。

容器运行时（在我们的例子中为Docker）将这些流重定向到文件，并允许我们运行以下命令来获取容器的日志：

```sh
$ docker logs <container id>
```

使用ssh命令登录到pod正在运行的节点，并使用docker logs命令查看其日志，但Kubernetes提供了一种更为简单的方法

## 获取pod日志

```sh
$ kubectl logs kubia-manual
```

如果该pod只包含一个容器，那么查看这种在Kubernetes中运行的应用程序的日志则非常简单

## 获取多容器pod的日志

```sh
$ kubectl logs kubia-manual -c kubia
```

我们只能获取仍然存在的pod的日志。当一个pod被删除时，它的日志也会被删除。如果希望在pod删除之后仍然可以获取其日志，我们需要设置中心化的、集群范围的日志系统，将所有日志存储到中心存储中。









