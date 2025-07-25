---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: Principle01
createTime: 2024/08/02 09:19:27
permalink: /swift/q4aykeb0/
---

# 单表达式隐式返回值

```swift
// before swift 5.0
struct Rectangle {
    var width = 0.0, height = 0.0
    var area1: Double {
        return width * height
    }

    func area2() -> Double {
        return width * height
    }
}

// after switft 5.1
struct Rectangle {
    var width = 0.0, height = 0.0
    var area1: Double { width * height }

    func area2() -> Double { width * height }
}
```
