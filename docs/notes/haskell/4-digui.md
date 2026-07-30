---
sitemap:
  exclude: false
  changefreq: hourly
title: 递归类型
date: 2020-4-06
tags:
  - haskell
  - vscode
createTime: 2024/08/02 09:19:27
permalink: /article/7pp9bqfg/
---

递归类型：**即它用自己来定义自己**。

## Haskell

我们将用 Cons 替换 (:) 构造器，用 Nil 替换 [] 构造器：

```haskell
data List a = Cons a (List a)
            | Nil
              deriving (Show)
```

设计一个函数能够接受任何一个 [a] 类型的值作为输入参数，并返回 List a 类型的一个值：

```haskell
fromList (x:xs) = Cons x (fromList xs)
fromList []     = Nil
```

传入一个 List a 类型的值，返回一个 [a]:

```haskell
toList :: List a -> [a]
toList Nil = []
toList (Cons x xs) = x : toList xs
```

以上是 haskell 的递归类型的实现。能否用 swift 代码实现？

## Swift

```swift
indirect enum List<T: CustomStringConvertible>: CustomStringConvertible {
    case null
    case cons(T, List<T>)
    
    init(list: [T]) {
        if list.count == 0 {
            self = .null
        } else {
            let trail = Array(list.suffix(from: 1))
            self = .cons(list[0], .init(list: trail))
        }
    }
    
    var description: String {
        switch self {
        case .null:
            return "null"
        case let .cons(a, b):
            return "cons(\(a), \(b.description))"
        }
    }
    
    func toList() -> [T] {
        
        switch self {
        case .null: return []
        case let .cons(a, b):
            return [a] + b.toList()
        }
    }
}

let elist: List<Int> = .init(list: [1,2,4,5])
let list = elist.toList()

print(elist)
print(list)
```

二叉树也可以使用这种方式去定义，这里就不展示出来了，当留作一个小测验吧。

