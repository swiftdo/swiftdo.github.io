---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Docker篇'
date: 2020-08-17
tags:
- swift
- vapor
---

## docker & vapor

## docker compose

容器运行可以有很多参数，比如指定映射宿主主机的端口、环境变量等等，包在一个 docker run 命令后就太麻烦了，所以通常用 docker-compose 来组织运行，它可以运行多个容器，并且可以指定依赖关系，以 YAML 格式存储可读性更高。

**常用的几个命令**

```sh
docker-compose up app
docker-compose up db
docker-compose down # 会删除容器，但是不会删除数据卷
docker-compose down -v # 会删除容器，且删除数据卷

```

## 数据持久化

数据主要分为两类：持久化和非持久化数据。持久化数据是需要保存的，而非持久化数据不需要。默认情况下，所有容器都有与自身声明周期相同的非持久化存储——本地存储，它非常适用于非持久化数据。但是，如果容器需要创建长期保存的数据，最好将数据存储到 Docker 卷中

```sh
docker volume create myvol # 创建数据卷 myvol，默认情况下，新卷创建使用local 驱动，但是可以通过-d 参数来指定不同的驱动
docker volume ls # 查看所有数据卷
docker volume inspect myvol # 用于查看卷的详细信息。可以使用该命令查看卷在Docker主机文件系统中的具体位置
docker volume prune # 会删除未装入到某个容器或者服务的所有卷 ，所以谨慎使用
docker volume rm # 允许删除指定卷
```

### inspect

```sh
$ docker volume inspect oldbirds_db_data

[
    {
        "CreatedAt": "2020-07-03T13:03:04Z",
        "Driver": "local",
        "Labels": {
            "com.docker.compose.project": "oldbirds",
            "com.docker.compose.version": "1.24.1",
            "com.docker.compose.volume": "db_data"
        },
        "Mountpoint": "/var/lib/docker/volumes/oldbirds_db_data/_data",
        "Name": "oldbirds_db_data",
        "Options": null,
        "Scope": "local"
    }
]
```

* Driver和Scope都是 local，只能用于当前 Docker 主机上的容器。
* Mountpoint 说明卷位于 Docker 主机上的位置。

### docker-compose.yml

version  版本
services: 服务
networks: 
image:  使用镜像
ports: - 映射宿主主机端口：容器端口
volumes: - 映射宿主主机文件路径：容器主机文件路径
depends_on: 和其他容器链接 使用这里个化重点
restart: no 是默认的重启策略，在任何情况下都不会重启容器。 指定为 always 时，容器总是重新启动。 如果退出代码指示出现故障错误，则 on-failure 将重新启动容器

## docker 删除无名镜像

```sh
docker rmi $(docker images -f "dangling=true" -q)
```

## docker 磁盘清理

```sh
docker system prune
```

可参考文章：[Docker磁盘空间使用分析与清理](https://www.jianshu.com/p/7aeafe2ea792)

## 容器间互联

如何在本机上连接 docker 上的 postgres ？

### docker-compose 中 links 和 depends_on 区别

depends_on: 指定本容器启动依赖的容器必须启动
links: 包装容器如果 ip 变化也能访问(基本已经弃用，因为不适用 link 任然可以通过容器名称访问)
