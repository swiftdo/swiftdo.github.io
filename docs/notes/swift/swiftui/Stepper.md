---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: Stepper
createTime: 2024/08/02 09:19:27
permalink: /swift/qx39qnjk/
---

# Stepper

> 文档：[https://developer.apple.com/documentation/swiftui/stepper](https://developer.apple.com/documentation/swiftui/stepper)

用于执行语义上递增和递减动作的控件。

```swift
@State var quantity: Int = 0
Stepper(value: $quantity, in: 0...10, label: { Text("Quantity \(quantity)")})
```

如果您要一个自己管理的数据源的控件，可以这样写：

```swift
@State var quantity: Int = 0
Stepper(onIncrement: {
    self.quantity += 1
}, onDecrement: {
    self.quantity -= 1
}, label: { Text("Quantity \(quantity)") })
```
