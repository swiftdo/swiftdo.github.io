---
sitemap:
  exclude: false
  changefreq: hourly
title: 'UIKit 中的 SwiftUI'
date: 2020-08-17
tags:
- swift
- swiftui
---

## UIHostingController

> 文档：[https://developer.apple.com/documentation/swiftui/uihostingcontroller](https://developer.apple.com/documentation/swiftui/uihostingcontroller)

表示 `SwiftUI` 视图的 `UIViewController`。

```swift
let vc = UIHostingController(rootView: Text("Hello World"))
let vc = UIHostingController(rootView: ContentView())
```
