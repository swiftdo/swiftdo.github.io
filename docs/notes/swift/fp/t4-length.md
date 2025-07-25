---
sitemap:
  exclude: false
  changefreq: hourly
title: 递归思想求列表长度
date: 2021-3-31
tags:
  - swift
  - 函数式编程
createTime: 2024/08/02 09:19:27
permalink: /swift/kblribzn/
---

在 haskell 中，列表的长度是这么计算的：

```haskell
length [] = 0
length [_] = 1
length (x:xs) = 1 + length xs
```

那么如何将这个思想在 swift 中表达：

```swift
extension Array {
    var recuse:(x: Element?, xs: [Element]?) {
        if let head = self.first {
            return (head, self.dropFirst().map { $0 })
        }
        return (nil, nil)
    }
}

func length<T>(list: [T]?) -> Int  {
    if let arr = list {
        let (x, xs) = arr.recuse
        if x == nil { return 0 }
        if xs == nil {return 1 }
        return 1 + length(list: xs)
    } else {
        return 0
    }
}
```