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

在上篇的介绍中，我相信你已经知道值语义是什么了，接下来我们来看看值语义被破坏的案例，以及相应的解决方案。

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

  通常这里很容易引发问题，如果我们不去看`Outer`的代码声明，就会误以为 outer2 是 outer1 的完全拷贝(深拷贝)，理所当然的觉得修改`outer.inner.value`值对`outer2`没有影响，进而写出不安全的代码。这通常应该避免，因为在值类型上使用引用类型属性会引入堆分配，引用计数和隐式数据共享，影响值类型的性能和其他优点。

## 值类型嵌引用类型

正如上文所述，当类型内部含有一个或多个可变引用，如果没有好的代码约束，很容易写出不安全的代码。通常，我们对值类型的拷贝都希望是深拷贝。而直接通过赋值且不做任何处理的话，这样是无法实现的。那么我们该怎么办？

### 自定义 clone 方法

我们自定义一个`Clonable`的协议。需要拷贝的类型都进行实现这个协议。

```swift
protocol Clonable {
    func clone() -> Self
}

final class Inner: Clonable {
    var value: Int
    
    init(value: Int = 1) {
        self.value = value
    }

    func clone() -> Inner {
        return Inner(value: value)
    }
}

struct Outer: Clonable {
    var value = 1
    var inner = Inner()
    
    func clone() -> Outer {
        return Outer(value: value, inner: inner.clone())
    }
}

var outer1 = Outer()
var outer2 = outer1.clone()
outer1.value = 2
outer2.inner.value = 3

outer1.value // 2
outer1.inner.value // 1
outer2.value  // 1
outer2.inner.value // 3
```

我们显示调用`clone()`来实现对`Outer`的深拷贝。
这么做还不如直接将`Outer`定义为一个类，语义反而变得清晰。当然抛开这些观点，Swift 对于这个问题有没有更好的解决方案？

### 写时复制

在混合类型中保留价值语义的诀窍是定义该类型，使其调用方无法看到修改对所含引用类型属性的影响。怎么理解？

这个例子使可变参考类型成为私有，并提供了一个控制读写的接口。

```swift

class Inner{
    var value: Int
    
    init(value: Int = 1) {
        self.value = value
    }
}

struct Outer {
    var value = 1
    private var inner = Inner() // 声明为私有
    
    var innerValue: Int {
        get {
            inner.value
        }
        set {
           inner = Inner(value: newValue)
        }
    }
}

var outer1 = Outer()
var outer2 = outer1
outer1.value = 2
//outer2.inner.value = 3
outer2.innerValue = 3

outer1.value // 2
outer1.innerValue // 1
outer2.value  // 1
outer2.innerValue // 3
```

对于可以访问私有成员的代码来说，这个结构包含可变的引用型属性`inner`，破坏了值语义。但是对于具有内部访问权限的客户来说，该类型的行为就像一个具有值语义的结构，有两个属性，即`value`和`innerValue`。

每当用户修改`innerValue`时，就会创建一个新的`Inner`实例，而这能保持`Outer`值的独立性。

如果`Inner`是一个巨类，每当从`Outer`实例只读取`inner`的时候，都是读取共享那个inner实例。那么对于多个`Outer`实例来说，将节省大量的inner内存占用，因为没有修改所以不会产生新对象的创建，节省了复制存储的计算成本。

一旦你对`innerValue`赋值，就会创建新的`Inner`实例。创建会延迟到需要的时候，从而最大限度地减少了即时的存储和计算成本。

但每次对`innerValue`进行赋值，都会创建新的`Inner`实例，特别是如果只有一个实例，多次调用`innerValue`，那么性能是非常低下的。Swift 提供了`写时复制`机制，如果对象没有在其他地方引用，就地进行修改。这个优化比创建一个新的实例和丢弃旧的实例更高效。

为了使其发挥作用，需要一种方法来告诉它是否唯一地引用了一个给定的实例。函数`isKnownUniquelyReferenced`就提供了这样的功能：

```swift
class Inner{
    var value: Int
    
    init(value: Int = 1) {
        self.value = value
    }
}

struct Outer {
    var value = 1
    private var inner = Inner() // 声明为私有
    
    var innerValue: Int {
        get {
            inner.value
        }
        set {
            if isKnownUniquelyReferenced(&inner) {
                print("just change \(newValue)")
                inner.value = newValue
            } else {
                print("create change \(newValue)")
                inner = Inner(value: newValue)
            }
        }
    }
}

var outer1 = Outer()
var outer2 = outer1
outer1.value = 2
outer2.innerValue = 3
outer2.innerValue = 4

outer1.value // 2
outer1.innerValue // 1
outer2.value  // 1
outer2.innerValue // 4
```

通过上面的修改后，作为`Outer`的使用者，再也不需要操心引用类型是深拷贝还是浅拷贝的问题了。

## 理解

就语言的语义来说，只有在数据被改变的时候他们的差异会有影响。但是如果你的数据是不可变的，那么值类型和引用类型的差别就不存在了，至少问题就转向**性能而不是语法**了。

**写时复制**让我们能够在创建值类型的自定义结构体的同时，保持像对象和指针那样的高效操作。作为结构体的使用者，不需要操心其内部引用属性是否破话了值语义的问题。得益于写时复制，大量的不必要的复制操作都可以被移除。

结构体应该是具有值语义的。当在一个结构体中使用类时，需要保证它确实是不可变的。如果办不到这一点，则需要(像上面那样的)额外的操作步骤。或者就干脆使用一个类，这样数据的使用者就不会期望它表现得像一个值。

最后：不管在设计一个值类型或者引用类型，都应该让类型的语义单一。

## 参考

- [Difference Between Value Type and Reference Type in Swift](https://medium.com/good-morning-swift/difference-between-value-type-and-reference-type-in-swift-1f2bd9dd32a7)
- [When to Use Swift Structs and Classes](https://www.mikeash.com/pyblog/friday-qa-2015-07-17-when-to-use-swift-structs-and-classes.html)
- [Swift 值类型和引用类型的内存管理](https://www.programminghunter.com/article/8083309595/)
