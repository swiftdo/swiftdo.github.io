---
title: "Github Actions 免费构建 Flutter iOS 包"
date: 2022-01-05
tags:
  - flutter
  - github
sitemap:
  exclude: false
  changefreq: hourly
---

在之前的文章中，有写过一篇[《在 Github 上部署一个 Flutter Web 应用》](https://oldbird.run/flutter/t5-flutter-web-deploy.html#flutter-web)，每次提交代码，就会触发 Github Actions 的构建流程，完成 Flutter Web 的编译部署，省心省力，一劳永逸。那么是否也能自动够构建出 iOS 包？答案是肯定的，本文将阐述其构建步骤。

## 步骤概述

要实现构建出 Flutter iOS 包的目标，必须执行以下步骤：

* 安装 Apple 证书和配置文件
* 指定正确的 Flutter 版本
* 获取 pub 包
* 构建应用程序
* 使用正确的 Apple 证书对其进行签名
* 生成 `.xarchive`
* 从`.xarchive` 中生成 `.ipa` 
* 分享给你的用户

为了完成顺利构建，我们必须提供：

* 可以苹果打包**证书**（`.p12`），以及导出证书的密码
* 证书对应的**描述文件**（`.mobileprovision`）

> 如果您不知道如何获取证书和描述文件，可以参考这篇文章：[《iOS 打包证书制作》](https://oldbird.run/swift/ios/ios-build-cers.html)

准备就绪，那我们开始吧！

##  GitHub Actions 是什么

[GitHub Actions](https://github.com/features/actions) 是 GitHub 的[持续集成服务](https://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)，于2018年10月推出。

大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。

**基本概念**

（1）**workflow**（工作流程）：持续集成一次运行的过程，就是一个 workflow。

（2）**job**（任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

（3）**step**（步骤）：每个 job 由多个 step 构成，一步步完成。

（4）**action**（动作）：每个 step 可以依次执行一个或多个命令（action）。

> 快速了解 GiHub Actions，可以参阅[《GitHub Actions 入门教程》](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

我们将创建一个`GitHub Action`，让您只需单击一下即可生成您的`ipa`。

## 配置 GitHub Actions

让我们创建我们的第一个**工作流程（workflow）**！在您的项目中，您需要在`.github` 文件夹中创建一个`workflows`文件夹，然后创建一个名为：`
ios-release.yml` 的新文件。

![](assets/16446532582826.jpg)


该文件将包含我们的第一个作业`build_ios`：




## 参阅

* [How to build and sign your Flutter iOS application using GitHub Actions](https://damienaicheh.github.io/flutter/github/actions/2021/04/22/build-sign-flutter-ios-github-actions-en.html)
* [How to use environment variables and secrets using GitHub Actions](https://damienaicheh.github.io/github/actions/2021/04/15/environment-variables-secrets-github-actions-en.html)



