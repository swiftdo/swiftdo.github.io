---
sitemap:
  exclude: false
  changefreq: hourly
title: 'XCFramework'
date: 2022-05-09
tags:
- swift
- ios
---

XCFramework 是 Xcode 11 引入的，一个可分发的二进制包，它包含了 framework 的一个或多个变体，XCFramework的好处就是用 Xcode 发布的时候，Xcode 会自动选用正确的指令集Framework，省去了手动移除动态库中的模拟器指令集的工作。
