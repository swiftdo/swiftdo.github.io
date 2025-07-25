---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: Toggle
createTime: 2024/08/02 09:19:27
permalink: /swift/s16yhoid/
---

# Toggle

> 文档：[https://developer.apple.com/documentation/swiftui/toggle](https://developer.apple.com/documentation/swiftui/toggle)

在开/关状态之间切换的控件。

```swift
@State var isShowing = true // toggle 状态值

Toggle(isOn: $isShowing) {
    Text("Hello World")
}
```
