---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Docker k8s篇'
date: 2024-09-25
tags:
- swift
- vapor
- docker
- k8s
---

## 使用Docker运行一个Hello world容器

```sh
$ docker run busybox echo "Hello world"
```

busybox是一个单一可执行文件，包含多种标准UNIX命令行工具，如：echo、ls、gzip 等。除了包含 echo 命令的 busybox 命令，也可以使用如Fedora、Ubuntu等功能完备的镜像。

使用 docker run 命令然后指定需要运行的镜像的名字，以及需要执行的命令

应用是在容器内部被执行的，完全独立于其他所有主机上运行的进程。

执行 docker run 命令之后发生的事情：
首先，Docker会检查busybox:latest 镜像是否已经存在于本机。
如果没有，Docker 会从 http://docker.io 的 Docker 镜像中心拉取镜像。
镜像下载到本机之后，Docker基于这个镜像创建一个容器并在容器中运行命令。
echo 命令打印文字到标准输出流，然后进程终止，容器停止运行。

## 创建一个简单的 Node.js 应用

构建一个简单的Node.js Web应用，并把它打包到容器镜像中。这个应用会接收HTTP请求并响应应用运行的主机名。这样，应用运行在容器中，看到的是自己的主机名而不是宿主机名，即使它也像其他进程一样运行在宿主机上。

```js
// app.js
const http = require('http');
const os = require('os');

console.log('Hello from ' + os.hostname());

var handler = function(request, response) {
    console.log("request received");
    response.writeHead(200);
    response.end("Hello, World!" + os.hostname() + "\n");
};
var www = http.createServer(handler);
www.listen(8080);
```

为镜像创建 Dockerfile, 文件在app.js文件同一目录

```sh
FROM node:latest
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]
```

From 行定义了镜像的起始内容（构建所基于的基础镜像）。这个例子中使用的是 node 镜像的tag latest 版本。第二行中把app.js文件从本地文件夹添加到镜像的根目录，保持app.js这个文件名。最后一行定义了当镜像被运行时需要被执行的命令，这个例子中，命令是 node app.js。”

构建镜像：

```sh
docker build -t kubia .
```

用户告诉Docker需要基于当前目录（注意命令结尾的点）构建一个叫kubia的镜像，Docker会在目录中寻找Dockerfile，然后基于其中的指令构建镜像。

运行容器：

```
docker run --name kubia-contianer -p 8080:8080 -d kubia
```

告知Docker基于 kubia 镜像创建一个叫 kubia-container 的新容器。这个容器与命令行分离（-d 标志），这意味着在后台运行。本机上的8080端口会被映射到容器内的8080端口（-p 8080:8080 选项），所以可以通过 http://localhost:8080 访问这个应用。

## 配置Kubernetes集群

应用被打包在一个容器镜像中，并通过Docker Hub给大家使用，可以将它部署到Kubernetes 集群中，而不是直接在 Docker 中运行。但是需要先设置集群。

```sh 
$ kubectl cluster-info
Kubernetes control plane is running at https://127.0.0.1:6443
CoreDNS is running at https://127.0.0.1:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
```

这里显示集群已经启动。它显示了各种Kubernetes组件的URL，包括API服务器和Web控制台。

**部署Node.js应用:**

部署应用程序最简单的方式是使用 kubectl run 命令，该命令可以创建所有必要的组件而无需JSON或YAML文件。

```sh
$ kubectl run kubia --image=kubia --port=8080 --image-pull-policy=Never
```

一个pod是一组紧密相关的容器，它们总是一起运行在同一个工作节点上，以及同一个 Linux 命名空间中；每个pod都有自己的ip,并包含一个或多个容器，每个容器都运行一个应用进程。

列出pod:

```sh
 $ kubectl get pods
```

如何访问正在运行的pod?

每个pod 都有自己的ip地址但是这个地址是集群内部的，不能不从集群外部访问。需要通过服务对象公开它。

```sh
$ kubectl expose pod kubia --type=LoadBalancer --name kubia-http
```

列出服务

```sh
$ kubectl get services
NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP    97m
kubia-http   LoadBalancer   10.100.108.138   localhost     8080:30751/TCP   5s
```

暂时忽略 kubernetes 服务，仔细查看创建的kubian服务。负载均衡启动后，应该会显示服务的外部IP地址。




