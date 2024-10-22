---
sitemap:
  exclude: false
  changefreq: hourly
title: 'K8s 中的 pod'
date: 2024-09-29
tags:
- swift
- vapor
- docker
- k8s
---


容器间是彼此完全隔离的，但是我们期望的是隔离容器组，而不是单个容器，并让每个容器组内的容器共享一些资源，而不是全部(未完全隔离)。

K8s 通过配置 Docker 来让一个pod 内的所有容器共享相同的Linux命名空间，而不是每个容器都有自己的一组命名空间。由于一个pod所有的容器都在相同的network和UTS命名空间下运行，所以他们都共享相同的主机名和网络接口。

每个容器的文件系统与其他容器完全隔离。

在 Kubernetes 中，Pod 是最小的部署单位。它是运行一个或多个容器的抽象层，通常情况下每个 Pod 只运行一个容器，但也可以运行多个容器，它们共享网络和存储资源。


主要特点：

- 单个容器：大多数 Pod 通常包含一个容器，Kubernetes 会自动管理容器的启动、停止和重启。
- 多容器场景：某些场景下，Pod 可以包含多个紧密协作的容器，这些容器共享同一个网络环境（即相同的 IP 地址和端口空间），并通过本地存储进行通信。
- 共享存储和网络：Pod 内的所有容器共享相同的存储卷、网络接口和 IP 地址，但它们之间仍然是隔离的进程。
- 生命周期：Pod 的生命周期是短暂的，当 Pod 被销毁后，不能恢复，因此 Kubernetes 会创建新的 Pod 来替换它们。

Pod 是 Kubernetes 中部署和管理容器的基本单位，尽管容器是核心组件，但 Kubernetes 不直接管理容器，而是通过管理 Pod 来完成容器的编排。

决定何时再pod中使用两个容器：

 * 他们需要一起运行还是可以在不同的主机上运行？
 * 他们代表的是一个整体还是互相独立的组件？
 * 它们必须一起进行扩容还是可以分别进行？


##  以yaml描述文件创建pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod  # Pod 的名称
  labels:
    app: my-app  # 标签，用于标识和选择 Pod
spec:
  containers:
    - name: my-container  # 容器名称
      image: nginx  # 容器使用的镜像
      ports:
        - containerPort: 80  # 容器暴露的端口
```

解释：

- apiVersion: 指定 Kubernetes API 的版本，Pod 通常使用 v1。
- kind: 资源的类型，这里是 Pod
- metadata: 包含 Pod 的元数据，如 name（Pod 名称）和 labels（用于标识 Pod 的标签）。
- spec: 描述 Pod 的详细配置，包括它运行的容器。
  - containers: Pod 中容器的列表。
  - name: 容器的名称。
  - image: 容器使用的镜像，这里是 nginx 镜像。
  - ports: 容器暴露的端口，在此例中，容器暴露的是 80 端口。

这是一个最基础的 Pod 配置文件，你可以根据需求进一步扩展，比如添加环境变量、挂载存储卷、设置资源限制等。


几乎在所有Kubernetes资源中都可以找到的三大重要部分：

- metadata 包括名称、命名空间、标签和关于该容器的其他信息。
- spec 包含pod内容的实际说明，例如pod的容器、卷和其他数据。
- status 包含运行中的pod的当前信息，例如pod所处的条件、每个容器的描述和状态，以及内部IP和其他基本信息


然后通过`kubectl create` 命令从yaml 文件创建pod:

```yaml
$ kubectl create -f kubia-manual.yaml
```


  
