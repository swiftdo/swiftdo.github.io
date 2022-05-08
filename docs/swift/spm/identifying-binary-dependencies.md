---
title: "识别二进制依赖"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-04-02
tags:
  - swift
  - ios
  - spm
---

> 原文：[https://developer.apple.com/documentation/swift_packages/identifying_binary_dependencies](https://developer.apple.com/documentation/swift_packages/identifying_binary_dependencies)

找出包依赖项是否引用了二进制文件并验证二进制文件的真实性。

## 概述

当你向你的应用程序添加一个基于源代码的软件包依赖时，你可以检查源代码，贡献错误修复，并在需要时重新编译源代码。然而，一个软件包的作者可能选择以二进制形式发布他们的代码。例如，一个公司可能更喜欢分发二进制文件而不是源文件，以保护知识产权。一般来说，接受一个依赖关系总是需要仔细考虑，因为你在向你的应用程序添加代码；如果你要添加一个二进制的依赖关系，那就更需要考虑。因此，你必须知道如何识别二进制的依赖关系。

## 查看二进制依赖项

仔细考虑你是否要添加二进制依赖，因为这样做有弊端。例如，二进制依赖的可移植性较差，因为它只能支持其包含的二进制文件所支持的平台，而二进制依赖只适用于 apple 平台。如果你可以在基于源码的依赖关系和二进制依赖关系之间做出选择，如果它提供相同的功能，就使用基于源码的依赖关系。

## 识别二进制依赖

要想知道一个包的依赖是二进制的依赖还是基于源码的包的依赖：

1. 在Xcode中打开你的应用程序的项目，确保项目导航器是可见的。
2. 展开 Swift Package Dependencies 和一个单独的软件包依赖关系。
3. 寻找一个名为`Referenced Binaries`的文件夹。如果它存在，说明该包依赖关系分发了一个二进制文件或有一个二进制依赖关系。
4. 要进一步检查被引用的二进制文件，请控制点击`Referenced Binaries`文件夹内的`XCFramework`包，并在 Finder 中打开它。

下图显示了应用程序扩展的 Swift 包依赖项，包括一个名为 SomeRemoteBinaryPackage 的包依赖项，它分发二进制文件。

![](https://docs-assets.developer.apple.com/published/43ac692ec4/rendered2x-1587161101.png)

::: tip
**Note**

为了帮助验证二进制依赖的来源，其作者必须创建一个校验和，并将其包含在软件包清单中。当 Xcode 解决或更新软件包的依赖关系时，它不允许二进制依赖关系改变校验和而不改变版本。
:::





