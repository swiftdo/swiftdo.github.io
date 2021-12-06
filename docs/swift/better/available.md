---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05
tags:
  - swift
  - ios
---

# @available 与调用方进行沟通

保持代码不变很难，因为需求不断在变化，系统、框架不断在更新。那么项目实践中，往往会废弃掉一些类或方法。如果是自己独立维护代码，且不需要将代码给他人使用，废弃 API 对你来说是非常简单的，直接改动源码即可。但是对于多人合作的项目，特别是开源的库，废弃一个公开的 API 不是简单的改动下代码就可以，因为你的改动将会影响使用你这个库的所有代码。公开的 API 的更新换代，就相当于你改动了和别人约定的契约一样，这也侧面反映了作者的专业水平。

那么如果要废弃一个 API，在 Swift 中我们该如何做？

## 小案例

Swift 提供了 `@available` 注解。可以简单地将其附加到特定方法甚至整个类：

```swift
@available(*, deprecated)
func oldMethod(value: Int) {
    print(value)
}
```

这会就会出现以下警告：

![-w394](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12bd296417e64f8d91359095f0f2e548~tplv-k3u1fbpfcp-zoom-1.image)

如果我们要给废弃的 API，添加更多的废弃信息，我们可以这样：

```swift
@available(*, deprecated, message: "不要再使用该方法了")
func oldMethod(value: Int) {
    print(value)
}
```

将 `message` 设置为 `不要再使用该方法了`，提示效果如下：

![-w639](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de1a80df892745b88658e25e808dea87~tplv-k3u1fbpfcp-zoom-1.image)

通常，废弃了一个 API，如果能提示调用方可以使用的新 API 是什么，那就非常完美了。如需要将旧的 API 改名，就可以这么做：

```swift
@available(*, deprecated, renamed: "newMethod(number:)", message: "不要再使用该方法了")
func oldMethod(value: Int) {
    print(value)
}

func newMethod(number: Int) {
    print("值为：\(number)")
}
```

添加 `renamed` 后，我们的旧方法调用：

![-w992](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2047df342dd74f4b98a22d1bb3bfc86f~tplv-k3u1fbpfcp-zoom-1.image)

这种警告是可以展开的：

![-w981](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28208eea776c4cd687edc31714c4b6c6~tplv-k3u1fbpfcp-zoom-1.image)

可以点击 Fix 按钮，代码将自动替换为新的 API。

## @available 归类

`@available` 有这么几种声明：

### 约束平台和版本

```swift
@available(platform version , platform version ..., *)
```

- `platform` 是指平台，可以是 iOS, macCatalyst, macOS / OSX, tvOS, watchOS 等。更多可以查看 [https://github.com/llvm-mirror/clang/blob/master/include/clang/Basic/Attr.td#L782-L789](https://github.com/llvm-mirror/clang/blob/master/include/clang/Basic/Attr.td#L782-L789)
- `version` 是指版本
- `,` 分隔多个版本化平台
- `*` 表示该 API 可用于所有其他平台。

举例：

```swift
@available(iOS 14, *)
class AppIntro {
}
```

在调用的时候，我们需要通过 `#available`

```swift
if #available(iOS 14, *) {
    let appIntro = AppIntro()
} else {
    // .. 14以下的版本调用
}
```

当然我们也可以指定多个平台：

```swift
@available(iOS 14, macOS 11.0, *)
class AppIntro {
}
```

### 约束 swift 版本

```swift
@available(swift version)
```

比如需要 Swift 5.5 或更高版本才能使用 `oldMethod`：

```swift
@available(swift 5.5)
func oldMethod(value: Int) {
    print(value)
}
```

### 约束指定平台的 introduced, deprecated, obsoleted 和 unavailable

```swift
// With introduced, deprecated, and/or obsoleted
@available(platform | *
          , introduced: version , deprecated: version , obsoleted: version
          , renamed: "..."
          , message: "...")

// With unavailable
@available(platform | *, unavailable , renamed: "..." , message: "...")
```

- `platform`：平台名称
- `introduced`：开始引进的版本号
- `deprecated`：从指定平台开始过期的版本
- `obsoleted`：从指定平台开始废弃的版本（注意弃用的区别，deprecated 是还可以继续使用，只不过是不推荐了，obsoleted 是调用就会编译错误）
- `message`：给出一些附加信息
- `renamed`：重命名后的新名称
- `unavailable`：指定平台上是无效的

这些参数可以相互组合使用。下面列举几个常用案例：

```swift
@available(iOS 13, *)
@available(tvOS, unavailable)
@available(macCatalyst, unavailable)
func handleShakeGesture() { … }
```

## 总结

正确的使用`@available`注解可以增强你和你的 API 使用者之间的沟通，新旧 API 替换体验会变得友好很多。

## 参考

- [Swift API Availability](https://nshipster.com/available/)
- [Declaration Attributes](https://docs.swift.org/swift-book/ReferenceManual/Attributes.html)
