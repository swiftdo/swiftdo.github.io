---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: Slider
createTime: 2024/08/02 09:19:27
permalink: /swift/afcy15ko/
---

# Slider

> 文档：[https://developer.apple.com/documentation/swiftui/slider](https://developer.apple.com/documentation/swiftui/slider)

从有界的线性范围中选择一个值的控件。

```swift
@State var progress: Float = 0

Slider(value: $progress, from: 0.0, through: 100.0, by: 5.0)
```

Slider 虽然没有 `minimumValueImage` 和 `maximumValueImage` 属性， 但可以借助 `HStack` 实现。

```swift
@State var progress: Float = 0
HStack {
    Image(systemName: "sun.min")
    Slider(value: $progress, from: 0.0, through: 100.0, by: 5.0)
    Image(systemName: "sun.max.fill")
}.padding()
```
