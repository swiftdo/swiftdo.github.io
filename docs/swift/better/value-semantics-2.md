---
title: "Swift 值语义(二)"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-05-05
tags:
  - swift
  - ios
---

在上篇的介绍中，我相信你已经知道值语义是什么了，接下来我们来看看为什么拥有值语义会让代码变得美好。

![1_N4CTsUuCT8mu7k2YlADqxQ](http://blog.oldbird.run/mweb/1_N4CTsUuCT8mu7k2YlADqxQ.gif)

## 没有值语义的问题

要了解值语义的好处，让我们看看没有值语义的类型会导致什么问题。

首先我们聊聊嵌套类型，当嵌套值类型和引用类型的时候会有四种不同的组合。

- **一个引用类型嵌套了另外一个引用类型**，没有特别之处，任何一个内部或者外部值的引用都能操纵他指向的对象，只要其中一个引用操纵值使其改变，其他引用指向的值也随着变化。

  ```swift
  class Inner {
      var value = 1
  }

  class Outer {
      var value = 1
      var inner = Inner()
  }

  var outer1 = Outer()
  var outer2 = outer1
  outer1.value = 2
  outer2.inner.value = 3

  outer2.value // 2
  outer1.inner.value // 3
  ```

- **一个值类型嵌套了另外一个值类型**，会使值所占的内存区域变大。内部值是外部值的一部分。如果你把外部值放到一块新的存储空间里，所有的值包括内部值都会被拷贝。如果你把内部值放进一块新的存储空间中，只有内部值会被拷贝。

  ```swift
  struct Inner {
      var value = 1
  }

  struct Outer {
      var value = 1
      var inner = Inner()
  }

  var outer1 = Outer()
  var outer2 = outer1
  outer1.value = 2
  outer1.inner.value = 3

  outer2.value // 1
  outer2.inner.value // 1
  ```

- **一个引用类型嵌套了一个值类型**，会扩大这个引用类型所占内存。任何外部值的引用都可以操纵一切，包括嵌套的内部值。内部值的任何改变对于引用外部值的指针来说都是可见的。如果你把内部值放进一块新的存储区，就会在那块存储区拷贝一份新的值。

  ```swift
  struct Inner {
      var value = 1
  }

  class Outer {
      var value = 1
      var inner = Inner()
  }

  var outer1 = Outer()
  var outer2 = outer1
  outer1.value = 2
  outer1.inner.value = 3

  outer2.value // 2
  outer2.inner.value // 3

  var copyInnter = outer2.inner
  copyInnter.value = 10

  outer2.inner.value // 3, 说明copyInnter是独立修改
  ```

- **一个值类型嵌套了一个引用类型**，这个就非常有趣了。可以打破值语义而不被察觉。当你把一个引用类型嵌套进一个值类型中，外部值被放进一块新的内存区域时就会被拷贝，但是拷贝的对象仍然指向原始的那个嵌套对象。

  ```swift
  class Inner {
      var value = 1
  }

  struct Outer {
      var value = 1
      var inner = Inner()
  }

  var outer1 = Outer()
  var outer2 = outer1
  outer1.value = 2
  outer1.inner.value = 3

  outer2.value // 1，独立的
  outer2.inner.value // 3，跟outer1共享
  ```

  通常这里很容易引发问题，如果我们不去看`Outer`的代码声明，就会误以为 outer2 是 outer1 的完全拷贝(深拷贝)，理所当然的觉得修改`outer.inner.value`值对`outer2`没有影响。这个时候 bug 就非常容易发生了。这种拷贝现象我们叫做**浅拷贝**。

## 不错的理解

就语言的语义来说，只有在数据被改变的时候他们的差异会有影响。但是如果你的数据是不可变的，那么值类型和引用类型的差别就不存在了，至少问题就转向**性能而不是语法**了。

## 参考

- [Difference Between Value Type and Reference Type in Swift](https://medium.com/good-morning-swift/difference-between-value-type-and-reference-type-in-swift-1f2bd9dd32a7)
- [When to Use Swift Structs and Classes](https://www.mikeash.com/pyblog/friday-qa-2015-07-17-when-to-use-swift-structs-and-classes.html)
- [Swift 值类型和引用类型的内存管理](https://www.programminghunter.com/article/8083309595/)
