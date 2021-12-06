---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05
tags:
  - swift
  - ios
---

# inout(copy-in-copy-out)

在 Swift 中，函数参数默认是常量。试图在函数体中更改参数值将会导致编译错误。这意味着你不能更改参数值。如果想要一个函数可以修改参数的值，并且想要这些修改在函数调用结束后仍然存在，那么把这个参数定义为`inout`即可。

```swift
var variable: Int = 1

func changeNumber(num: Int) {
    num = 2
    print(num)
}

changeNumber(num : variable)
```

无法编译通过：

![-w878](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c14b5428f0864b6086c9a44d4a04ebdc~tplv-k3u1fbpfcp-zoom-1.image)

我们不能修改函数的参数。但是通过`inout`定义输入输出参数：

```swift
var variable: Int = 1

func changeNumber(num:inout Int) {
    num = 2
    print(num)
}

changeNumber(num: &variable) // 2
```

![-w519](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5099808cfa463f8c1862d79fe000bd~tplv-k3u1fbpfcp-zoom-1.image)

在函数调用的时候，我们使用的`&`可能会给你的印象：**传递引用**——特别是如果你有 C 或 C++ 背景。但 `inout`：

> An inout parameter has a value that is passed in to the function, is modified by the function, and is passed back out of the function to replace the original value.

`&`的使用确实将实参的内存地址传入函数（实参进行引用传递），但`changeNumber`内部并未操作指针，采取了`Copy In Copy Out`的做法：

- 调用该函数时，先复制实参的值，产生副本【get】
- 将副本的内存地址传入函数（副本进行引用传递），在函数内部可以修改副本的值
- 函数返回后，再将副本的值覆盖实参的值【set】

关于`inout`的更详细讨论，请参阅

- [in-out-parameters](https://swiftgg.gitbook.io/swift/yu-yan-can-kao/06_declarations#in-out-parameters)
- [Swift 系列十 - inout 的本质](https://www.cnblogs.com/idbeny/p/swift-syntax-inout.html)

## 总结

inout 在 Swift 是一个高频使用的关键字，以至于不得不独立出一篇文章强调它的 `copy-in copy-out`，以防经验的造成的思维定式。

**更好的去理解代码，写出更好的代码。**

## 参阅

- [In-Out Parameters](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID545)
- [‘inout’ in Swift](https://agrawalsuneet.medium.com/inout-in-swift-53fa441c3a26)
- [關於 inout](https://likeabossapp.com/2018/01/03/swift%E5%B0%8F%E6%95%99%E5%AE%A4-%E9%97%9C%E6%96%BCinout%EF%BC%88copy-copy-out%EF%BC%89/)
- [swift - When to use inout parameters?](https://try2explore.com/questions/10172533)
- [汇编深入分析 inout 本质](https://juejin.cn/post/6844903891075776519)
