---
sitemap:
  exclude: false
  changefreq: hourly
title: 'K8s 简单的水平扩展'
date: 2024-09-25
tags:
- swift
- vapor
- docker
- k8s
---

前文我们已经实现将应用部署到Kubernetes，并通过服务暴露访问。使用 Kubernets 的一个主要好处是可以简单的扩展部署。

```sh
$ kubectl run kubia --image=kubia --port=8080 --image-pull-policy=Never
```

在 Kubernetes 1.18 版本之前，kubectl run 命令默认创建的是一个 ReplicationController。但是从 Kubernetes 1.18 版本开始，kubectl run 默认行为有所改变，创建的是一个 Pod。

kubectl run 是一个命令行工具，用于快速创建和运行一个单独的 Pod。
通常用于开发和调试，适合快速启动一个容器而不需要其他管理功能。

* 不支持复杂的管理功能（如滚动更新、版本控制等）。
* 更适合用于单次运行的容器，或在开发中临时使用。

kubectl run 的作用通常是启动一个 Pod，而不是管理多个副本，不支持直接管理 Pod 数量。

如果需要管理 Pod 的数量，可以考虑以下几种方案：

1. 使用 Deployment： Deployment 是用于管理多个 Pod 的推荐方式。可以通过 Deployment 轻松设置 Pod 的数量、滚动更新、回滚等。
2. 使用 ReplicaSet：如果你希望直接使用 ReplicaSet 来管理 Pod 的副本，可以创建一个 ReplicaSet。


现在我们使用 `ReplicaSet` 方式来实现横向扩展。

首先移除我们之前创建的pod：

```sh
$ kubectl delete pod kubia # 删除kubia的pod
$ kubectl get pods # 查看pod 是否存在
$ kubectl delete service kubia kubia-http # 删除之前开启的服务
$ kubectl get services # 查看服务
```

然后创建一个 `kubia-rs.yaml` 的配置文件：

```sh
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: kubia-rs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: kubia
  template:
    metadata:
      labels:
        app: kubia
    spec:
      containers:
      - name: kubia
        image: kubia   # 这里指定容器的镜像
        ports:
        - containerPort: 8080
        imagePullPolicy: Never
```

然后运行：

```sh
$ kubectl apply -f kubia-rs.yaml
$ kubectl get rs
NAME       DESIRED   CURRENT   READY   AGE
kubia-rs   3         3         3       90s
$ kubectl get pods              
NAME             READY   STATUS    RESTARTS   AGE
kubia-rs-cktr6   1/1     Running   0          8s
kubia-rs-hg5w2   1/1     Running   0          8s
kubia-rs-tp7gl   1/1     Running   0          8s
```

就创建了 3 个 pod，然后通过负载均衡的模式暴露到外网：

```sh
$ kubectl expose rs kubia-rs --type=LoadBalancer --port=8080 --target-port=8080 --name=kubia-lb-svc
```

这样外网就可以访问了。











