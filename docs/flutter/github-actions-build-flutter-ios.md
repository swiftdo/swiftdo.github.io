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

在之前的文章中，有写过一篇[《在 Github 上部署一个 Flutter Web 应用》](https://oldbird.run/flutter/t5-flutter-web-deploy.html#flutter-web)，每次提交代码，就会触发 Github Actions 的构建流程，完成 Flutter Web 的编译部署，省心省力。那么是否也能自动够构建出 iOS 包？答案是肯定的，本文将阐述其构建细节。

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

* 可以通过提供的**密码**访问提供的苹果**证书**（`.p12`）
* **配置文件**（`Provisioning profile`）


## 参阅

* [How to build and sign your Flutter iOS application using GitHub Actions](https://damienaicheh.github.io/flutter/github/actions/2021/04/22/build-sign-flutter-ios-github-actions-en.html)
* [How to use environment variables and secrets using GitHub Actions](https://damienaicheh.github.io/github/actions/2021/04/15/environment-variables-secrets-github-actions-en.html)



