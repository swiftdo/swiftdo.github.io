---
titile: "Swift 值语义(一)"
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05
tags:
  - swift
  - ios
---

## 值语义和引用语义

值语义(Value Semantics)：**所谓值语义是指目标对象由源对象拷贝生成，且生成后与源对象完全无关，彼此独立存在，改变互不影响。就像 Int 类型变量相互拷贝一样。**

引用语义(Reference Semantics)：**通常是指一个目标对象由源对象拷贝生成，但生成后与源对象之间依然共享底层资源，对任何一个的改变都将随之改变另一个**。

## 有值语义的例子

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

> 价值语义：改变其中一个不会影响另一个

因为`Foo`是一个**值类型**，所以改变`a.value`不会改变`b.value`。

在这种情况下，`a`和`b`是独立于变化的（对`a`或`b`的变化不会影响另一个），所以我们可以说`Foo`有`值语义`

### 没有值语意的例子

接下来，让我们看看一个没有`值语义`的例子。 让我们把前面代码中的`struct`部分改为`class`。 除此之外，它是完全一样的。

```swift
class Foo {
    var value: Int = 0
}

var a = Foo()
var b = a
a.value = 2
```

在这种情况下，`Foo`是一个类，因此是一个`引用类型`。因此，改变`a.value`也将改变`b.value`。

与**值类型**不同，**引用类型**的实例不直接存储在变量中。代表实例实体的字节序列被存储在一个单独的内存区域（在堆区的某个地方），代表该区域的内存地址被存储在变量中。

在这个例子中，`Foo`不具有**值语义**，因为它对变化没有独立性。

## 语义与类型

从前面的例子和名称可以推断出，`值语义`与`值类型`密切相关，`引用语义`与`引用类型`密切相关。 但是它们并不是一等同，必须注意不要将它们混淆。

- 值语义≠值类型。
- 引用语义≠引用类型。

例如，有一些类型**具有** Value Type 但没有 Value Semantics，还有一些类型**具有**Reference Type 但具有 Value Semantics。区分值语义/引用语义和值类型/引用类型很重要。

### 一个值类型但没有值语义的例子

为了区分语义和类型，我们来看看一个没有`值语义`的`值类型`的例子。

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

我们可以用它来做与前面的例子类似的事情。只是除了改变`a.value`，我们也改变`a.bar.value`。

```swift
var a = Foo()
var b = a
a.value = 2
a.bar.value = 3 // 👈
```

在这种情况下，`Foo`是一个`值类型`，所以变量 `a`和 `b`包含`Foo`的独立实例。 然而，`Bar'是一个`引用类型`，所以`a`和`b`的`bar`属性将包含同一个`Bar'实例的地址，并将通过该地址引用同一个实例。

在这种情况下，改变`a.value`不会影响`b.value`，因为`a`和`b`包含不同的`Foo`实例。 然而，`a.bar`和`b.bar`指的是同一个`Bar`实例，所以对`a.bar.value`的任何改变也会改变`b.bar.value`。

因此，`Foo`是一个`值类型`，但对变化没有独立性，即它没有`价值语义`。 注意，`a.value`和`b.value`可以独立改变，所以这个`Foo`也没有`引用语义`。

像这样既没有`值语义`也没有`引用语义`的`Foo`类型很难处理，你不应该创建这样的类型。你可能认为你永远不会创建这样一个奇怪的类型，但是如果你给一个`Value Type`的属性一个像下面这样的类的实例，例如，你可以很容易地创建一个既没有`Value Semantics`也没有`Reference Semantics`的类型。

- `NSMutableArray`, `NSMutableString`, `NSMutableData`.
- `UILabel`, `UISwitch`, `UISlider`.
- `AVAudioPlayer`。
- `CMMotionManager`


### 一个引用类型但具有值语义的例子

将前面代码中的`Bar`类改为`Immutable Class`。

```swift
final class Bar {
    let value: Int = 0
}
```

为了使`Bar`类`immutable`，将`Bar`的`value`属性改为`let`，并将其改为`final class`。之所以声明为 `final class`，是因为如果创建一个`Bar`的`mutable`子类，`Bar`类型的`immutability`将被破坏。

让我们对`Foo`和`Bar`做同样的事情。 然后，由于`Bar`现在是一个不可变的类，任何试图改变`a.bar.value`的行为当然会导致编译错误。

```
var a = Foo()
var b = a
a.value = 2
a.bar.value = 3 // ⛔
```

在这种情况下，`a.bar`和`b.bar`确实指的是同一个实例，但是`Bar`是`immutable`，所以它的状态不能通过该实例改变。 因此，拥有一个`Bar`类型的属性并不会破坏`Foo`实例的独立性。其结果是，`Foo`具有`价值语义`，尽管它有`引用类型`的属性。

这种情况很常见，不会导致`值语义`的破坏，例如，如果该属性持有以下类别的实例。

- `NSNumber`, `NSNull`
- `UIImage`
- `KeyPath`

### 不变性和语义

应该如何考虑`Immutable Class`本身的语义？

考虑以下不可变的类 `Foo`：

```swift
final class Foo {
    let value: Int = 0
}
```

对于这个 "Foo"，做同样的事情：

```swift
var a = Foo()
var b = a
a.value = 2 // ⛔
```

`不可变类`的实例首先不能被改变，所以不会发生改变一个就改变另一个的情况。所以这种情况也有`值语义`。

"Value Semantics in Swift"还说，有趣的是，当你有`Immutability`时，你无法区分`值语义`和`引用语义`。因此，我们可以说，像上面这样的`不可变`的`Foo`类同时具有`值语义`和`引用语义`。另外，如果它是`Immutable`，即使它是`Value Type`，也可以说它具有`Reference Semantics`。例如，下面的 "Foo"是一个`值类型`，但同时具有`值语义`和`引用语义`。

```swift
struct Foo {
    let value: Int = 0
}
```

### 用可变引用类型作为属性但有值语义的例子

在前面的例子中，如果你有一个`mutable reference type`的属性，你就没有`Value Semantics`。

```swift
struct Foo {
    var value: Int = 0
    var bar: Bar = Bar()
}

class Bar {
    var value: Int = 0
}
```

然而，用模式来判断是很危险的，比如说"如果你有一个_可变__引用类型_的属性，你就没有_价值语义_"。 例如，标准库 "Array"持有内部的`mutable`引用类型，但使用一种叫做`Copy-on-Write`的机制来实现`Value Semantics`。

重要的是，要根据定义而不是模式来决定是否有`值语义`。

## 总结

在 Swift 中，`Value Semantics`的定义是：当一个类型具有`Value Semantics`时，该类型的值与变化无关。

值类型和值语义、引用类型和引用语义不是一回事，值类型不一定有值语义，而引用类型也可以有值语义。了解类型和语义之间的区别是很重要的。在考虑一个模式是否具有`值语义`时，必须考虑到各种例外情况。根据定义决定是否要有`值语义`。

## 参考

* [Value Semantics in Swift](https://github.com/apple/swift/blob/main/docs/proposals/ValueSemantics.rst)

