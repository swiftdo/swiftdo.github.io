---
sitemap:
  exclude: false
  changefreq: hourly
title: Swift 函数式
date: 2021-3-31
tags:
  - swift
  - 函数式编程
createTime: 2024/08/02 09:19:27
permalink: /swift/o8ai00vw/
---

## 类型构造体

以泛型作为参数来构建具体类型的类型

```swift
enum Result<T> {
  case success(T)
  case failure
}
```

## Functor

函子能够将普通函数应用到一个包装类型。

![](http://blog.oldbird.run/mweb/16171714130943.jpg)

打开封装的数据类型，取出值，用值函数处理以后，再封装回数据类型。

```swift
extension Result {
    // 满足 Functor 的条件：map 方法能够将 普通函数 应用到包装类
    func map<U>(_ f: (T) -> U) -> Result<U> {
        switch self {
        case .success(let x): return .success(f(x))
        case .failure: return .failure
        }
    }
}

precedencegroup ChaningPrecedence {
    associativity: left
    higherThan: TernaryPrecedence
}

infix operator <^>: ChaningPrecedence
func <^><T, U>(f: (T) -> U, a: Optional<T>) -> Optional<U> {
    return a.map(f)
}
```

## Applicative

适用函子能够将包装函数应用到一个包装类型。

![](http://blog.oldbird.run/mweb/16171714224888.jpg)

两个数据类型进行运算。首先，取出它们各自的值，一个是函数，一个是数值；然后，使用函数处理数值；最后，将函数的返回结果再封装进数据类型。

```swift
extension Result {
    // 满足 Applicative 的条件：apply 方法能够将 包装函数 应用到包装类
    func apply<U>(_ f: Result<(T) -> U>) -> Result<U> {
        switch f {
        case .success(let normalF): return map(normal)
        case .failure: return .failure
        }
    }
}

infix operator <*>: ChainingPrecedence
func <*><T, U>(f: Result<(T) -> U>, a: Result<T>) -> Result<U> {
    return a.apply(f)
}
```

## Monad

适用函子能够将返回包装类型的普通函数应用到一个包装类型。

```swift
extension Result {
    func flatMap<U>(_ f: (T) -> Result<U>) -> Result<U> {
        switch self {
        case .success(let x): return f(x)
        case .failure: return .failure
        }
    }
}

func <*><T, U>(f: (T) -> Result<U>, a: Result<T>) -> Result<U> {
    return a.flatMap(f)
}
```

Monad 就是一种设计模式，表示将一个运算过程，通过函数拆解成互相连接的多个步骤。你只要提供下一步运算所需的函数，整个运算就会自动进行下去。

## 参阅

- [图解 Monad](http://www.ruanyifeng.com/blog/2015/07/monad.html)
- [Functors, Applicatives, And Monads In Pictures](https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)
