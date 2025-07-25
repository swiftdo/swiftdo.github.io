---
title: 将包的依赖关系作为本地包进行编辑
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-04-02T00:00:00.000Z
tags:
  - swift
  - ios
  - spm
createTime: 2024/08/02 09:19:27
permalink: /swift/h0573fu1/
---

> 原文：[https://developer.apple.com/documentation/swift_packages/editing_a_package_dependency_as_a_local_package](https://developer.apple.com/documentation/swift_packages/editing_a_package_dependency_as_a_local_package)

要编辑一个包，需要将其作为本地包，覆盖依赖关系。

## 概述

当你在你的应用程序中使用一个 Swift 包作为包的依赖时，你可能想对它进行编辑。例如，你可能想为一个开源包贡献一个错误的修复。但是，你不能直接编辑包依赖的内容。要进行修改，请将 Swift 包作为本地包添加到你的项目中。不要删除你的包依赖；添加本地包会覆盖具有相同名称的包依赖。当您从项目中删除本地包时，Xcode 会再次使用该包依赖关系。


把Swift包作为本地包添加到你的项目中：

1. 从 Git 仓库拉取包的源代码。
2. 打开您的应用程序的 Xcode 项目或工作区。
3. 在 Finder 中选择 Swift 包的文件夹并将其拖到项目导航器中。此操作将您的依赖的 Swift 包作为本地包添加到您的项目中。
4. 对本地包和你的应用程序进行修改，然后通过构建和运行你的应用程序来验证它们。
5. 当你完成对本地包的编辑后，将你的修改推送到远程 Git 仓库。
6. 当这些更改被纳入包的下一个版本时，从你的项目中删除本地包，并将包的依赖关系更新为新版本。