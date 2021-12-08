---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05
tags:
  - swift
  - 设计模式
---

# 单例模式

相比 OC，Swift 有很优雅的实现单例的写法。

```swift
class Tools {
    // 单例
    static let shared = Tools()

    // 私有化构造方法，不允许外界创建实例
    private init() {
        // 进行初始化工作
    }
}
```