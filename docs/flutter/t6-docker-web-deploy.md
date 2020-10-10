---
title: '在 Docker 上部署一个 Flutter Web 应用'
date: 2020-09-26
tags:
- flutter
sitemap:
  exclude: false
  changefreq: hourly
---

之前整理过一篇 [在 Github 上部署一个 Flutter Web 应用](https://mp.weixin.qq.com/s/i864_-vEpD9vLHUrvLPz2w) 的文章，可以很好的以 Github Pages 的方式进行部署。

近期在做 [swiftdo/boke](https://github.com/swiftdo/boke) 项目，采用 Docker 部署方案，前后端分离且用 Flutter Web 编写前端页面。所以在 Docker 的部署编排上，如何将前端的部署也整合到整个项目部署流程中，这是本文要讲的内容。

首先前后端有各自仓库：
* 后端项目 boke： `https://github.com/swiftdo/boke.git`
* 前端项目 boke-flutter: `https://github.com/swiftdo/boke-flutter.git`

后端项目 boke 已完成 Docker 部署编排，如果要将 `boke-flutter` 的部署也安排到 `boke` 的部署中，必须将 `boke-flutter` 放入到 `boke` 中。为了实现这个目的，将采用 `git submodule`。

## 步骤

在 `boke` 项目中，添加 `submodule`:

```sh
$ git submodule add https://github.com/swiftdo/boke-flutter.git
```

完成添加后，会在 `boke` 项目中会多出个 `boke-flutter` 的目录。在原有的 `docker-compose.yml` 中，我们已经完成了后端项目的部署，那么如何加入前端的部署，我们的目的是啥？

目的：开启前端项目

**前端项目如何开启?**

将 `boke-flutter` 项目编译完成后，通过 nginx 进行部署即可。

所以，需要实现：

```yml
web:
    image: boke-flutter:latest
    build:
      context: ./boke-flutter/
    ports:
      - "8090:80"
```

下一步，为 boke-flutter 编写 `Dockerfile` 即可。
> Dockerfile 存放在 boke-flutter 根目录下

```sh
FROM cirrusci/flutter:beta AS boke

RUN useradd --user-group --create-home --system --skel /dev/null --home-dir /app cirrus
RUN export PUB_HOSTED_URL=https://pub.flutter-io.cn
RUN export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
WORKDIR /app
RUN sudo chown -R cirrus:cirrus /app
RUN flutter config --enable-web
COPY lib /app/lib
COPY assets /app/assets
COPY plugins /app/plugins
COPY web /app/web
COPY pubspec.yaml /app/pubspec.yaml

RUN flutter build web  -v

FROM nginx
EXPOSE 80
COPY --from=boke /app/build/web /usr/share/nginx/html
```

开启前端：

```sh
$ docker-compose up -d web
```

这样就完成了整个前后端的编排。

整个编排配置，可以直接查看 `https://github.com/swiftdo/boke.git` 下的 `docker-compose.yml`。

更多文章阅读，请关注微信公众号: OldBirds。
