---
title: "Swift 值语义(一)"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-05-03
tags:
  - swift
  - ios
---

在 Swift 中，一个被不断讨论话题：什么时候使用结构体什么时候使用类？

答案其实很简单，当你需要值语义的时候使用结构体，当你需要引用语义的时候使用类。

那么掌握值语义和引用语义就非常必要了。

## 值语义和引用语义

> Swift 中的值语义官方文档：[Value Semantics in Swift](https://github.com/apple/swift/blob/main/docs/proposals/ValueSemantics.rst)

### 什么是值语义

> For a type with value semantics, variable initialization, assignment, and argument-passing (hereafter, "the big three operations") each create an independently modifiable copy of the source value that is interchangeable with the source.

值语义(Value Semantics)：**所谓值语义是指目标对象由源对象拷贝生成，且生成后与源对象完全无关，彼此独立存在，改变互不影响。就像 Int 类型变量相互拷贝一样，拷贝之后就与源对象完全脱离关系。**

### 什么是引用语义

引用语义(Reference Semantics)：**通常是指一个目标对象由源对象拷贝生成，但生成后与源对象之间依然共享底层资源，对任何一个的改变都将随之改变另一个**。

## 有`值语义`的例子

一个简单的`struct`, 只有一个存储属性：

```swift
struct Foo {
    var value: Int = 0
}
```

假设 Foo 有以下调用：

```swift
var a = Foo()
var b = a
a.value = 2
```

在这种情况下，`b.value`是否也会改变？

> 值语义：改变其中一个不会影响另一个

因为`Foo`是一个**值类型**，所以改变`a.value`不会改变`b.value`。

![](http://blog.oldbird.run/mweb/Group%2067-1.png)

在这种情况下，`a`和`b`是独立于变化的（对`a`或`b`的变化不会影响另一个），所以我们可以说`Foo`有`值语义`。

## 没有`值语意`的例子

接下来，让我们看看一个没有`值语义`的例子。 让我们把前面代码中的`struct`部分改为`class`。 除此之外，其它是完全相同。

```swift
class Foo {
    var value: Int = 0
}

var a = Foo()
var b = a
a.value = 2
```

在这种情况下，`Foo`是一个类，因此是一个`引用类型`。因此，改变`a.value`也将改变`b.value`。

![](http://blog.oldbird.run/mweb/Group%2068.png)

在这个例子中，`Foo`不具有**值语义**，因为它的变化不具有独立性。

## 语义与类型

从前面的例子和名称可以推断出，`值语义`与`值类型`密切相关，`引用语义`与`引用类型`密切相关。 但是它们并不是一回事，小心将它们混淆了。

- 值语义 ≠ 值类型。
- 引用语义 ≠ 引用类型。

例如，有一些类型是**值类型但没有值语义**，还有一些类型是**引用类型但具有值语义**。正确区分值语义/引用语义和值类型/引用类型非常重要。

### 是值类型但没有值语义的例子

为了区分语义和类型，让 ​​ 我们看一个值类型但没有值语义的示例。

我们引入了一个叫做`Bar`的类:

```swift
class Bar {
    var value: Int = 0
}
```

给`Foo`添加这个`Bar`类型的属性。

```swift
struct Foo {
    var value: Int = 0
    var bar: Bar = Bar() // 👈 添加一个Bar类型的属性
}
```

我们可以用它来做与前面的例子类似的事情。只是除了改变`a.value`，也改变`a.bar.value`。

```swift
var a = Foo()
var b = a
a.value = 2
a.bar.value = 3 // 👈
```

在这种情况下，`Foo`是一个`值类型`，所以变量`a`和`b`包含`Foo`的独立实例。然而，`Bar`是一个`引用类型`，所以`a`和`b`的`bar`属性将包含同一个`Bar`实例的地址，并将通过该地址引用同一个实例。

在这种情况下，改变`a.value`不会影响`b.value`，因为`a`和`b`包含不同的`Foo`实例。然而，`a.bar`和`b.bar`指的是同一个`Bar`实例，所以对`a.bar.value`的任何改变也会改变`b.bar.value`。

![](http://blog.oldbird.run/mweb/Group%2068-1.png)

因此，虽然`Foo`是一个`值类型`，但变化不具备独立性，即它没有`值语义`。注意，`a.value`和`b.value`可以独立改变，所以这个`Foo`也没有`引用语义`。

像这样既没有`值语义`也没有`引用语义`的`Foo`类型是很难处理。这块在下篇文章将进行详细阐述，不在此进行累赘。

### 是引用类型但有值语义的例子

具有引用类型属性并不一定意味着丢失了值语义。接下来，让我们看一个具有引用类型属性的值类型具有值语义的示例。

将前面代码中的`Bar`类改为`不可变类`。

```swift
final class Bar {
    let value: Int = 0
}
```

为了使`Bar`不可变，将`Bar`的`value`属性改为`let`，并将其改为`final class`。之所以声明为 `final class`，是因为如果创建一个`Bar`的可变子类，`Bar`类的不可变性将被破坏。

让我们对`Foo`和`Bar`做同样的事情。然后，由于`Bar`现在是一个不可变的类，任何试图改变`a.bar.value`的行为当然会导致编译错误。

```swift
var a = Foo()
var b = a
a.value = 2
a.bar.value = 3 // ⛔
```

在这种情况下，`a.bar`和`b.bar`确实指的是同一个实例，但是`Bar`是不可变的，所以它的状态不能通过该实例改变。因此，拥有一个`Bar`类型的属性并不会破坏`Foo`实例的独立性。其结果是，`Foo`具有`值语义`，尽管它有`引用类型`的属性。

这种情况很常见，不会导致`值语义`的破坏，例如，如果该属性持有以下类别的实例。

- `NSNumber`, `NSNull`
- `UIImage`
- `KeyPath`

### 不变性和语义

如何看待**不可变类**本身的语义？

考虑以下不可变的类 `Foo`：

```swift
final class Foo {
    let value: Int = 0
}
```

对于这个`Foo`，执行同样的事情：

```swift
var a = Foo()
var b = a
a.value = 2 // ⛔
```

`不可变类`的实例初始化后不能被改变，不会发生改变一个就改变另一个的情况，这种情况也有`值语义`。

当具有**不变性**时，你无法区分`值语义`和`引用语义`。因此，我们可以说，像上面这样的`不可变`的`Foo`类同时具有`值语义`和`引用语义`。另外，如果它是不可变，即使它是值类型，也可以说它具有`引用语义`。例如，下面的`Foo`是一个`值类型`，但同时具有`值语义`和`引用语义`。

```swift
struct Foo {
    let value: Int = 0
}
```

### 用可变引用类型作为属性但有值语义的例子

在前面的例子中，如果你有一个**可变引用类型**的属性，你就没有值语义。

```swift
struct Foo {
    var value: Int = 0
    var bar: Bar = Bar()
}

class Bar {
    var value: Int = 0
}
```

“如果你有一个*可变引用类型*的属性，你就没有*值语义*”，用这种模式来判断语义是很危险的。 例如，标准库`Array`持有内部的可变引用类型，但使用一种叫做`Copy-on-Write`的机制来实现值语义。

**要根据定义而不是模式来决定是否有`值语义`**。

## 总结

在 Swift 中，当一个类型具有`值语义`时，该类型的值与变化无关。

值类型和值语义、引用类型和引用语义不是一回事，值类型不一定有值语义，而引用类型也可以有值语义。区分类型和语义很重要。在考虑一个模式是否具有`值语义`时，必须考虑到各种例外情况。根据定义决定是否具有`值语义`。

## 参考

- [Value Semantics in Swift](https://github.com/apple/swift/blob/main/docs/proposals/ValueSemantics.rst)
