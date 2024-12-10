---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Sonarqube 安装插件报错 An error has occurred. Please contact your administrator'
date: 2024-12-10
tags:
- centos
---


Sonarqube安装插件时提示：`An error has occurred. Please contact your administrator`


查询报错日志：

```sh
$ docker ps
f7374fada1ba   sonarqube:lts-community   "/opt/sonarqube/dock…"   5 days ago   Up 4 minutes   0.0.0.0:9000->9000/tcp, :::9000->9000/tcp   sonarqube-sonarqube-1
4f175e671d01   postgres:12               "docker-entrypoint.s…"   5 days ago   Up 4 minutes   5432/tcp                                    sonarqube-db-1

$ docker logs --tail 100 sonarqube-sonarqube-1

Fail to process request http://192.168.4.235:9000/api/plugins/install
java.lang.IllegalStateException: Fail to download the plugin (checkstyle, version 10.20.1) from https://github.com/checkstyle/sonar-checkstyle/releases/download/10.20.1/checkstyle-sonar-plugin-10.20.1.jar (error is : Fail to download: https://github.com/checkstyle/sonar-checkstyle/releases/download/10.20.1/checkstyle-sonar-plugin-10.20.1.jar)

```

从日志上我们可以知道是插件下载失败。

解决方案，由于不能安装梯子，只能将依赖自己下载到本地，然后上传到插件目录。


## 下载插件

首先下载 `https://github.com/checkstyle/sonar-checkstyle/releases/download/10.20.1/checkstyle-sonar-plugin-10.20.1.jar` 插件

## 找到插件安装位置

找到存放插件的目录，在部署 Sonarqube 的时候，采用docker compose 部署，且插件的目录是已经映射到主机的某个位置。只需将插件上传到那个目录即可。

```sh
$ docker inspect f7374fada1ba


"Mounts": [
    {
        "Type": "volume",
        "Name": "sonarqube_sonarqube_data",
        "Source": "/var/lib/docker/volumes/sonarqube_sonarqube_data/_data",
        "Destination": "/opt/sonarqube/data",
        "Driver": "local",
        "Mode": "z",
        "RW": true,
        "Propagation": ""
    },
    {
        "Type": "volume",
        "Name": "sonarqube_sonarqube_extensions",
        "Source": "/var/lib/docker/volumes/sonarqube_sonarqube_extensions/_data",
        "Destination": "/opt/sonarqube/extensions",
        "Driver": "local",
        "Mode": "z",
        "RW": true,
        "Propagation": ""
    },
    {
        "Type": "volume",
        "Name": "sonarqube_sonarqube_logs",
        "Source": "/var/lib/docker/volumes/sonarqube_sonarqube_logs/_data",
        "Destination": "/opt/sonarqube/logs",
        "Driver": "local",
        "Mode": "z",
        "RW": true,
        "Propagation": ""
    }
],

```

我们可以看到目录挂载信息：

```sh
"Source": "/var/lib/docker/volumes/sonarqube_sonarqube_extensions/_data",
"Destination": "/opt/sonarqube/extensions",
```
前往目录：

```sh
$ cd /var/lib/docker/volumes/sonarqube_sonarqube_extensions/_data
downloads  jdbc-driver  plugins
```

直接将下载好的插件上传到这个`plugins`目录即可。

## 重启sonarqube服务，插件安装完成

前往到我们的`docker-compose.yaml`对应的目录下，执行

```sh
$ cd xxxxx
$ docker compose stop
$ docker compose up -d
```












