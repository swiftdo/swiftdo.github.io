---
title: "CMake 篇"
sitemap:
  exclude: false
  changefreq: hourly
---

## 介绍

[CMake](https://cmake.org/) 是一个跨平台的开源元构建系统，可以构建、测试和打包软件。它可用于支持多种原生构建环境，包括 make、Apple 的 xcode 和 Microsoft Visual Studio。

这个存储库包括一些示例现代 CMake 配置，我在探索它在各种项目中的使用时选择了这些配置。这些示例以类似教程的格式排列。第一个示例非常基础，并且在前面的示例的基础上逐渐增加复杂性以显示更复杂的用例。

这些示例已经在 Ubuntu 16.04 上进行了测试，但应该可以在任何支持 CMake v3.5+ 的 Linux 系统下工作。

此分支适用于 CMake 3.5 版以上。

## 要求

大多数示例的基本要求是：

- CMake v3.5+
- C++ 编译器（默认为 gcc）
- make

## 源头

本系列文章是对 [cmake-examples](https://github.com/ttroy50/cmake-examples) 的实操的一个中文笔记。
