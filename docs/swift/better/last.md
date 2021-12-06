---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05
tags:
  - swift
  - ios
---

# 技巧拾遗

## 添加前缀

为了避免命名冲突，在 OC 时代，我们的做法是在方法前面添加 `snp_/sd_` 类似前缀，在`Swift` 中我们有更优雅的处理方式：

```swift
struct OD<Base> {
    var base: Base
    init(_ base: Base) {
        self.base = base
    }
}

protocol ODCompatible {
    var od: OD<Self> {get}
    static var od: OD<Self>.Type {get}
}

extension ODCompatible {
    var od: OD<Self> {
        OD(self)
    }
    static var od: OD<Self>.Type {
        OD<Self>.self
    }
}

extension String: ODCompatible {}
extension OD where Base == String {
    // 添加方法
    func test() {
        print("\(self)::\(self.base)")
    }
}

"A".od.test() // OD<String>(base: "A")::A
```

## 快速交换值

对于这个，我们很快能写出：

```swift
// 普通方法：
func swapMe1<T>( a: inout T, b: inout T) {
    let temp = a
    a=b
    b = temp
}
```

需要引入一个临时变量 temp，那么可以不通过第三个桶来交换两个数的值么？

```swift
// 使用多元组：
func swapMe2<T>( a: inout T, b: inout T) {
    (a,b) = (b,a)
}
```

## @discardableResult 可丢弃结果

Swift 是一门要求很严格的语言，当函数的返回值未被使用到时，编译器就会提示相关的警告。我们可以使用`@discardableResult`将函数声明为可丢弃结果，即可告知编译器不产生警告：

```swift

func woo() -> String {
    return "oldbird.run"
}

@discardableResult
func bar() -> String {
    return "关注 Oldbirds 公众号"
}

woo() // WARNING: Result of call to 'woo()' is unused

// 当然也可以赋值到占位符 _ 以避免警告
_ = woo()

bar()
```

## 访问控制

访问控制可以限定其他源文件或模块中代码对你代码的访问级别。你可以明确地给单个类型（类、结构体、枚举）设置访问级别，也可以给这些类型的属性、函数、初始化方法、基本类型、下标索引等设置访问级别。

Swift 为代码中的实体提供了四种不同的访问级别: open、public、internal、fileprivate、private。

![-w417](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3d3be7688e54b26835c4f26364bbfb8~tplv-k3u1fbpfcp-zoom-1.image)

- `open`和`public`级别可以让实体被同一模块源文件中的所有实体访问，在模块外也可以通过导入该模块来访问源文件里的所有实体。通常情况下，你会使用`open`或`public`级别来指定框架的外部接口。`open`只能作用于类和类的成员，它和`public`的区别主要在于 `open`限定的类和成员能够在模块外能被继承和重写。
- `internal`级别让实体被同一模块源文件中的任何实体访问，但是不能被模块外的实体访问。通常情况下，如果某个接口只在应用程序或框架内部使用，就可以将其设置为`internal`级别。
- `fileprivate`限制实体只能在其定义的文件内部访问。如果功能的部分实现细节只需要在文件内使用时，可以使用`fileprivate`来将其隐藏。
- `private`限制实体只能在其定义的作用域，以及同一文件内的`extension`访问。如果功能的部分细节只需要在当前作用域内使用时，可以使用`private`来将其隐藏。
- 除非专门指定，否则实体默认的访问级别为`internal`。

更多控制细节，可参考[翻译文档](https://swiftgg.gitbook.io/swift/swift-jiao-cheng/26_access_control#access-control-syntax)

## 在 for 循环中使用 where

对于简单的循环，使用 where 非常富有表现力。

```swift
func archiveMarkedPosts() {
    for post in posts where post.isMarked {
        archive(post)
    }
}

func healAllies() {
    for player in players where player.isAllied(to: currentPlayer) {
        player.heal()
    }
}
```
