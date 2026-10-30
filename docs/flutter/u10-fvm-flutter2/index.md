---
title: Flutter 2.0 顺滑撤回，web 初体验
description: "Flutter 2.0 今早发布，web 开发现已在 stable channel 支持了，非常激动！"
date: 2021-01-19T00:00:00.000Z
tags:
  - flutter
createTime: 2024/08/02 09:19:27
---

Flutter 2.0 今早发布，web 开发现已在 stable channel 支持了，非常激动！

> 
> Flutter 2.0 的更新说明
> * [release-notes-2.0.0](https://flutter.dev/docs/development/tools/sdk/release-notes/release-notes-2.0.0)
> * [What’s New in Flutter 2](https://medium.com/flutter/whats-new-in-flutter-2-0-fe8e95ecc65)
> * [Flutter 2.0 发布 | 针对 Web，移动端和桌面端构建的下一代 Flutter](https://juejin.cn/post/6935520179262586917)
> 

因本人的特殊性，对 Flutter 有多个版本的需求。比如：
* 混合开发，需要在 1.17.5 的 Flutter 版本
* 旧版 web 开发，需要在 beta 的 channel 下开发
* 纯 Flutter 项目，跟随 stable channel 

为了能够在各个项目中开发，我需要快速切换 Flutter 环境。所以我采用 [fvm](https://github.com/leoafarias/fvm) 这个工具。

如果你不知道如何使用 FVM，可以直接参考项目的使用文档，或者参考上一篇：[《FVM 愉快的切换 Flutter 版本，强烈推荐！》](https://juejin.cn/post/6919469825547272205)

如果你是 FVM 的使用老手，那么下面的内容可以忽略了。

## 实战

假设在 Flutter 2.0 之前， 有这么个 flt_demo 项目：

* 使用了 FVM
* 指定了 Flutter 的版本为 stable

### 基于最新的 stable channel 创建 web 工程

创建个新项目 web_demo，且需要用 Flutter 2.0 进行 web 开发:

```sh
$ mkdir web_demo
$ cd web_demo
$ fvm use stable --force 
$ fvm flutter create .
$ fvm flutter doctor
```

最后我们获取到的还是 1.22.6 的 Flutter 版本。

需要更新到最新的 stable 版本：

```sh
$ fvm flutter upgrade
$ fvm flutter doctor
```

👌🏻，web_demo 的 Flutter 环境已经完成，可以愉快的玩耍了。

### 解救基于旧版 stable channel 开发的 fltDemo 工程

由于 flt_demo 也是在 stable channel 进行开发，当我们重新运行项目的时候，会报一些错误(某些 api 被废弃了，一些第三方库报错)。 

现有的 stable channel 是 Flutter 2.0 版本，但是对 flt_demo 来说，在 Flutter 2.0 是无法运行的。所以我们需要旧版的 stable 环境。

可以通过以下命令获取 flutter 已发布的版本号。

```sh
$ fvm releases
```

旧版的 stable channel 对应的是 1.22.6 的版本。

所以我们需要修改 fltDemo 的 flutter 环境为 1.22.6。

```sh
$ cd flt_demo
$ fvm install 1.22.6
$ fvm use 1.22.6 --force
$ fvm flutter doctor
```

👌🏻，完成 flt_demo 的 flutter 环境指定。

如果 flt_demo 是团队项目，提交你的修改。同事拉取代码后，在项目根路径下执行

```sh
$ fvm install
```
即可。


可以继续愉快的玩耍了。

> 顺带最后，用 flutter 2.0 快速开发了个 web demo 页面，可以体验下
> * 源码：[swiftdo/web-demo](https://github.com/swiftdo/web-demo)
> * 在线预览: [https://static-a693c500-6a23-40d0-8970-ffe97cc09330.bspapp.com/#/](https://static-a693c500-6a23-40d0-8970-ffe97cc09330.bspapp.com/#/) （尚未适配手机）
> ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b748de1929b04b06a0fdb44c36d12d94~tplv-k3u1fbpfcp-watermark.image)

更多干货阅读，请关注官方微信公众号: **OldBirds**
