---
sitemap:
  exclude: false
  changefreq: hourly
title: 属性包装器
date: 2023-08-01T00:00:00.000Z
tags:
  - swift
  - tips
createTime: 2024/08/02 09:19:27
permalink: /swift/jtpdspfh/
---

属性包装器在管理属性如何存储和定义属性的代码之间添加了一个分隔层，便于代码的复用。

举例：`TwelveOrLess`结构体确保它包装的值始终是小于等于 12 的数字。

```swift
@propertyWrapper
struct TwelveOrLess {
    private var number = 0
    var wrappedValue: Int {
        get { return number }
        set { number = min(newValue, 12) }
    }
}
```

这个`setter`确保新值小于或等于 12，而且返回被存储的值.

```swift
struct SmallRectangle {
    @TwelveOrLess var height: Int
    @TwelveOrLess var width: Int
}

var rectangle = SmallRectangle()
print(rectangle.height)
// 打印 "0"

rectangle.height = 10
print(rectangle.height)
// 打印 "10"

rectangle.height = 24
print(rectangle.height)
// 打印 "12"
```

`SmallRectangle`等价于：

```swift
struct SmallRectangle {
    private var _height = TwelveOrLess()
    private var _width = TwelveOrLess()
    var height: Int {
        get { return _height.wrappedValue }
        set { _height.wrappedValue = newValue }
    }
    var width: Int {
        get { return _width.wrappedValue }
        set { _width.wrappedValue = newValue }
    }
}
```

## 包装属性的初始化

为了支持设定一个初始值或者其他自定义操作，属性包装器需要添加一个构造器。

```swift
@propertyWrapper
struct SmallNumber {
    private var maximum: Int
    private var number: Int

    var wrappedValue: Int {
        get { return number }
        set { number = min(newValue, maximum) }
    }

    init() {
        maximum = 12
        number = 0
    }
    init(wrappedValue: Int) {
        maximum = 12
        number = min(wrappedValue, maximum)
    }
    init(wrappedValue: Int, maximum: Int) {
        self.maximum = maximum
        number = min(wrappedValue, maximum)
    }
}
```

`SmallNumber`的定义包括三个构造器——`init()`、`init(wrappedValue:)`和`init(wrappedValue:maximum:)`——下面的示例使用这三个构造器来设置被包装值和最大值.

```swift
struct ZeroRectangle {
    // 等价于 @SmallNumber() var height
    @SmallNumber var height: Int
    // 等价于 @SmallNumber() var width
    @SmallNumber var width: Int
}

var zeroRectangle = ZeroRectangle()
print(zeroRectangle.height, zeroRectangle.width)
```

调用`SmallNumber()`来创建包装 height 和 width 的 SmallNumber 的实例

```swift
struct UnitRectangle {
    // 等价于 @SmallNumber(wrappedValue: 1) var height
    @SmallNumber var height: Int = 1
    // 等价于 @SmallNumber(wrappedValue: 1) var width
    @SmallNumber var width: Int = 1
}

var unitRectangle = UnitRectangle()
print(unitRectangle.height, unitRectangle.width)
// 打印 "1 1"
```
当你对一个被包装的属性写下`= 1`时，这被转换为调用`init(wrappedValue:)`构造器。调用`SmallNumber(wrappedValue: 1)`来创建包装 height 和 width 的 SmallNumber 的实例。

```swift
struct NarrowRectangle {
    // 等价于  @SmallNumber(maximum: 5) var height: Int = 5
    @SmallNumber(wrappedValue: 2, maximum: 5) var height: Int
    // 等价于  @SmallNumber(maximum: 5) var width: Int = 3
    @SmallNumber(wrappedValue: 3, maximum: 4) var width: Int
}

var narrowRectangle = NarrowRectangle()
print(narrowRectangle.height, narrowRectangle.width)
// 打印 "2 3"

narrowRectangle.height = 100
narrowRectangle.width = 100
print(narrowRectangle.height, narrowRectangle.width)
// 打印 "5 4"
```

调用`SmallNumber(wrappedValue: 2, maximum: 5)`来创建包装 height 的 SmallNumber 的一个实例。

调用 `SmallNumber(wrappedValue: 3, maximum: 4)`来创建包装 width 的 SmallNumber 的一个实例。


当包含属性包装器实参时，你也可以使用赋值来指定初始值。Swift 将赋值视为 wrappedValue 参数，且使用接受被包含的实参的构造器。

举个例子：

```swift
struct MixedRectangle {
    // 等价于 @SmallNumber(wrappedValue: 1) var height: Int
    @SmallNumber var height: Int = 1
    // 等价于 @SmallNumber(wrappedValue: 2， maximum: 9) var height: Int
    @SmallNumber(maximum: 9) var width: Int = 2
}

var mixedRectangle = MixedRectangle()
print(mixedRectangle.height)
// 打印 "1"

mixedRectangle.height = 20
print(mixedRectangle.height)
// 打印 "12"
```

调用`SmallNumber(wrappedValue: 1)`来创建包装 height 的 SmallNumber 的一个实例，这个实例使用默认最大值 12。

调用`SmallNumber(wrappedValue: 2, maximum: 9)`来创建包装 width 的 SmallNumber 的一个实例。

## 从属性包装器中呈现一个值

* wrpppedValue : 属性包装器的必要参数，用来提供包装器逻辑的实现。
* projectedValue: 后者是一个可选参数，用来映射自定义的值。类型没有任何限制`$属性名`访问包装器属性

```swift
@propertyWrapper
struct Wrapper<Value>{
    var wrappedValue: Value

    func log() {
        print("\(wrappedValue)")
    }
}
```

**如何才能去调用 log?**

```swift
@propertyWrapper
struct Wrapper<Value>{
    var wrappedValue: Value

    var projectedValue: Wrapper<Value> { return self }

    func log() {
        print("\(wrappedValue)")
    }
}

struct Text {
    @Wrapper var x: Int = 2

    func foo() {
        print(x) // 'wrappedValue'
        print(_x) // wrapper type itself, 私有的
        print($x) // projectedValue
    }
  
    // 理解包装器本质，大脑里详细下展开后的代码
    func myLog() {
      // 私有的处理
      _x.log()
    }
}

var t = Text()
print(t.x) // 2
print(t.$x) // Wrapper<Int>(wrappedValue: 2)
t.$x.log() // 2

t.myLog() // 2
```

## 使用约束

* `@propertyWrapper`：在类、结构体或者枚举的声明时使用该特性，可以让其成为一个属性包装器。
* 全局变量不能使用属性包装器。
* [支持用作函数中的局部变量](https://www.hackingwithswift.com/swift/5.4/local-property-wrappers)(playgroud跑不起来)]。
* 包装器必须定义一个 wrappedValue 实例属性。
* 可应用于函数参数。

## 总结

本文是属性包装器的精髓所在，需要细细体会和感悟。

属性包装器的写法跟普通的结构体、类等并无区别。
需要清晰的理解 `wrpppedValue` 和 `projectedValue` 的作用，以及学会对属性包装器进行展开。







