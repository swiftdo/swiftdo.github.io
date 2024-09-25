---
sitemap:
  exclude: false
  changefreq: hourly
title: '在Mac上使用Docker Desktop启动 K8s'
date: 2024-09-25
tags:
- swift
- vapor
- docker
- k8s
---

当Mac安装完Docker Desktop后，可以启动Docker了，而要启动Kubernetes，需要Enable。

本以为就如此简单方便，谁料一直显示Kubernetes is starting，卡了很久都没有反应。那是由于网络原因（你懂的），启动Kubernetes所需要的镜像无法下载。

## 下载镜像

所需镜像可以手动一个个下载，当然也有人准备好了脚本可以一键下载，脚本在仓库：

[https://github.com/AliyunContainerService/k8s-for-docker-desktop](https://github.com/AliyunContainerService/k8s-for-docker-desktop)


具体操作直接看官方文档。


按文档步骤完成后，建议替换下镜像源，可查看此网站，获取最新支持的镜像源：

[https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6](https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6)

替换完成后，重启 docker 即可。
