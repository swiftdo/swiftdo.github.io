---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05
tags:
  - swift
  - ios
---

# @autoclosure

Swift 中有很多有用的属性关键字。`@autoclosure` 是其中之一，是一个非常常用的属性。

为了更好的说明这个属性的作用，将用一个`ifelse`的例子进行说明。

```swift
func ifelse<V>(_ condition: Bool, valueTrue: () -> V, valueFalse: () -> V) -> V {
    condition ? valueTrue() : valueFalse()
}
```

`ifelse`实现的功能非常简单，当`condition`为 true，执行 `valueTrue` 函数，且将值返回。为 false 时，执行`valueFalse`函数。

我们对这个函数进行调用：

```swift
// swift 5.4
let value = ifelse(.random()) {
    100
} valueFalse: {
    0
}
```

只调用了一个简单的函数，但是必须将参数包装在闭包中。有没有办法解决它？

```swift
// swift 5.4
func ifelse2<V>(_ condition: Bool, valueTrue: @autoclosure () -> V, valueFalse: @autoclosure () -> V) -> V {
    condition ? valueTrue() : valueFalse()
}
```

在`ifelse2`中，`valueTrue`和`valueFalse`添加了`@autoclosure`属性关键字。但是调用代码就变得更加简洁了：

```swift
let value2 = ifelse2(.random(), valueTrue: 100, valueFalse: 0)
```

`@autoclosure`直译为自动闭包，会把`100`这样的语法自动转换为闭包执行。

## 作用

`@autoclosure`的作用：

- 1.使用`@autoclosure`关键字能简化闭包调用形式
- 2.使用`@autoclosure`关键字能延迟闭包的执行

对于第 2 点，本身不是`@autoclosure`带来的，而是闭包本身就带有这样的特性。代码中的`valueTrue`和`valueFalse`都是在调用的时候才去执行。
