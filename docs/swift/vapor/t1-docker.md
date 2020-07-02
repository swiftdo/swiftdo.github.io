
## docker 的开发流程

## docker compose

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

## 如何在本机上连接 docker 上的 postgres ？
