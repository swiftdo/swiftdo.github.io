---
sitemap:
  exclude: false
  changefreq: hourly
title: 'K8s pod 存活探针'
date: 2024-09-29
tags:
- swift
- vapor
- docker
- k8s
---

在 Kubernetes 中，存活探针（Liveness Probe）用于检测 Pod 中容器是否处于健康状态。如果探针检测到容器不健康，Kubernetes 会重新启动该容器。通过这种机制，可以确保应用在发生故障时自动恢复。


以下是一个带有存活探针的 Pod YAML 配置示例：

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod-with-liveness-probe  # Pod 名称
spec:
  containers:
    - name: my-container  # 容器名称
      image: nginx  # 使用的镜像
      livenessProbe:
        httpGet:  # HTTP 请求类型的存活探针
          path: /healthz  # 探针检测的路径
          port: 80  # 探针检测的端口
        initialDelaySeconds: 5  # 容器启动后等待 5 秒才进行第一次检测
        periodSeconds: 10  # 每 10 秒检测一次
```

## 存活探针的关键配置：

- livenessProbe: 定义容器的存活探针。
- httpGet: 使用 HTTP GET 请求进行健康检查
  - path: 探针检测的路径，比如 /healthz。
  - port: 探针检测的端口，这里是 80 端口。
- initialDelaySeconds: 容器启动后首次探测前的延迟时间（秒）。通常给应用足够时间初始化。
- periodSeconds: 每次检查的时间间隔（秒），这里设为 10 秒。

## 常见的探针类型：

- HTTP GET 探针：通过 HTTP GET 请求一个 URL 路径，检测返回的状态码是否为 200-399 之间，来判断是否存活。
- TCP 探针：通过 TCP 端口来检测容器是否存活。
- 命令探针（exec）：通过执行一个命令，检测命令的退出码，0 表示成功，非 0 表示失败。


### TCP 探针示例

```yaml
livenessProbe:
  tcpSocket:
    port: 3306  # 通过 TCP 连接 3306 端口
  initialDelaySeconds: 15
  periodSeconds: 20
```

### exec 探针示例：

```yaml
livenessProbe:
  exec:
    command:
      - cat
      - /tmp/healthy  # 执行命令，检测文件是否存在
  initialDelaySeconds: 5
  periodSeconds: 5
```

存活探针可以帮助保持应用的可靠性，确保容器在运行过程中遇到问题时能够自动恢复。








