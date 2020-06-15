---
sitemap:
  exclude: false
  changefreq: hourly
title: '理解'
---

## 单表达式隐式返回值

```swift
// before swift 5.0
struct Rectangle {
    var width = 0.0, height = 0.0
    var area1: Double {
        return width * height
    }

    func area2() -> Double {
        return width * height
    }
}

// after switft 5.1
struct Rectangle {
    var width = 0.0, height = 0.0
    var area1: Double { width * height }

    func area2() -> Double { width * height }
}
```

### @propertyWarpper

```swift
// before swift 5.0
struct User {
    static var usesTouchID: Bool {
        get {
            return UserDefaults.standard.bool(forKey: "USES_TOUCH_ID")
        }
        set {
            UserDefaults.standard.set(newValue, forKey: "USES_TOUCH_ID")
        }
    }
    static var isLoggedIn: Bool {
        get {
            return UserDefaults.standard.bool(forKey: "LOGGED_IN")
        }
        set {
            UserDefaults.standard.set(newValue, forKey: "LOGGED_IN")
        }
    }
}

// after switft 5.1
@propertyWrapper
struct UserDefault<T> {
    // 这里的属性 key 和 defaultValue 还有 init 方法都是实际业务中的业务代码
    let key: String
    let defaultValue: T

    init(_ key: String, defaultValue: T) {
        self.key = key
        self.defaultValue = defaultValue
        UserDefaults.standard.register(defaults: [key: defaultValue])
    }

    // wrappedValue 是 @propertyWrapper 必须实现的属性。
    // 当操作我们包裹的属性时，其具体的set get 方法走这里。
    var wrappedValue: T {
        get {
            return UserDefaults.standard.object(forKey: key) as? T ??  defaultValue
        }
        set {
            UserDefaults.standard.set(newValue, forKey: key)
        }
    }
}

struct User {
    @UserDefault("USES_TOUCH_ID", defaultValue: false)
    static var usesTouchID: Bool

    @UserDefault("LOGGED_IN", defaultValue: false)
    var isLoggedIn: Bool
}
let user = User()
User.usesTouchID = true
let usesTouchID = User.$usesTouchID
let isLoggedIn = user.$isLoggedIn
```

实际上属性包装器是在编译时期翻译为一下的代码, 并且编译器禁止使用 `$` 开头的标识符

```swift
struct User {
    static var $usesTouchID = UserDefault<Bool>("USES_TOUCH_ID", defaultValue: false)
    static var usesTouchID: Bool {
        set {
            $usesTouchID.value = newValue
        }
        get {
            $usesTouchID.value
        }
    }

    @UserDefault("LOGGED_IN", defaultValue: false)
    var isLoggedIn: Bool
}
```

### 如何理解 `@State` `@Binding`、`@EnvironmentObject` 和 `@ObjectBinding`？

* @State - 视图和数据存在依赖，数据变化要同步到视图；
* @Binding - 父子视图直接有数据的依赖，数据变化要同步到父子视图；
* @BindableObject - 外部数据结构与 SwiftUI 建立数据存在依赖；
* @EnvironmentObject - 跨组件快速访问全局数据源；

## 关于 some View

在 Swift 5.0 之前我们如果想返回抽象类型一般使用 `Generic Type` 或者 `Protocol`, 使用泛型会显示的暴露一些信息给 `API` 使用者，不是完整的类型抽象

但是使用 `Protocol` 也有几个限制: 泛型返回值在运行时都是一个容器，效率较差，返回值不能调用自身类型的方法，协议不允许拥有关联类型，由于编译时丢失了类型信息，编译器无法推断类型，导致无法使用 `==` 运算符。

这个特性使用 `some` 修饰协议返回值，具有一下特性:

* 所有的条件分支只能返回一个特定类型，不同则会编译报错
* 方法使用者依旧无法知道类型，（使用方不透明）
* 编译器知情具体类型，因此可以使用类型推断。

```swift
struct ContentView: View {
    var body: some View {
        Text("Hello World")
    }
}
```

`View` 是 `SwiftUI` 的一个最核心的协议，代表一个屏幕上元素的描述。

```swift
public protocol View {
    associatedtype Body : View

    var body: Self.Body { get }
}
```

这种带有 `associatedtype` 的协议不能作为类型来使用，而只能作为`类型约束`使用：

```swift
// Error
func createView() -> View {

}

// OK
func createView<T: View>() -> T {

}
```

这样一来，其实我们是不能写类似这种代码的：

```swift
// Error，含有 associatedtype 的 protocol View 只能作为类型约束使用
struct ContentView: View {
    var body: View {
        Text("Hello World")
    }
}
```

想要 `Swift` 帮助自动推断出 `View.Body` 的类型的话，我们需要明确地指出 `body` 的真正的类型。在这里，`body` 的实际类型是 `Text`：

```swift
struct ContentView: View {
    var body: Text {
        Text("Hello World")
    }
}
```

当然我们可以明确指定出 `body` 的类型，但是这带来一些麻烦：

1. 每次修改 `body` 的返回时我们都需要手动去更改相应的类型。
2. 新建一个 `View` 的时候，我们都需要去考虑会是什么类型。
3. 其实我们只关心返回的是不是一个 `View`，而对实际上它是什么类型并不感兴趣。

`some View` 这种写法使用了 `Swift 5.1` 的 [Opaque return types特性](https://github.com/apple/swift-evolution/blob/master/proposals/0244-opaque-result-types.md)，它向编译器作出保证，每次 `body` 得到的一定是某一个确定的，遵守 `View` 协议的类型，但是请编译器“网开一面”，不要再细究具体的类型。返回类型`确定单一`这个条件十分重要，比如，下面的代码也是无法通过的：

```swift
let someCondition: Bool

// Error: Function declares an opaque return type, 
// but the return statements in its body do not have 
// matching underlying types.
var body: some View {
    if someCondition {
        // 这个分支返回 Text
        return Text("Hello World")
    } else {
        // 这个分支返回 Button，和 if 分支的类型不统一
        return Button(action: {}) {
            Text("Tap me")
        }
    }
}
```

这是一个`编译期间的特性`，在保证 `associatedtype protocol` 的功能的前提下，使用 `some` 可以抹消具体的类型。这个特性用在 `SwiftUI` 上简化了书写难度，让不同 `View` 声明的语法上更加统一。

## 关于 ViewBuilder

SwiftUI DSL 的需要：

* 从表达方式上从简：尽量省略不必要的逗号，`return`，中括号等等。
* 支持简单的逻辑控制，比如 `if` 控制语句。
* 强类型：`some View` 代表了一个复合的强类型，在 `View` 发生改变的时候，复合的强类型有助于做 `View diff` 优化。
* 与 Swift 已有的语法不冲突

```swift
// 定义
struct VStack<Content> where Content : View {
  init(alignment: HorizontalAlignment = .center, spacing: Length? = nil,
  @ViewBuilder content: () -> Content)
}

// 使用
struct ContentView : View {
  var body: some View {
    VStack(alignment: .leading) {
      Text("Hello, World")
      Text("Leon Lu")
    }
  }
}
```

如何在一个容器类型 `VStack` 的构造函数的闭包中平铺其包含的两个 `Text`；另一方面，在闭包的函数声明中，我们看到了 `@ViewBuidler` 的修饰；
其实不难推测，为了编译通过， `ViewBuidler` 对于这个闭包中的代码在编译阶段 “动了手脚”，那么这是如何做到的呢？来看 `ViewBuilder` 中的关键方法：

```swift
static func buildBlock() -> EmptyView
static func buildBlock<Content>(Content) -> Content
static func buildBlock<C0, C1>(C0, C1) -> TupleView<(C0, C1)>
static func buildBlock<C0, C1, C2>(C0, C1, C2) -> TupleView<(C0, C1, C2)>
static func buildBlock<C0, C1, C2, C3>(C0, C1, C2, C3) -> TupleView<(C0, C1, C2, C3)>
static func buildBlock<C0, C1, C2, C3, C4>(C0, C1, C2, C3, C4) -> TupleView<(C0, C1, C2, C3, C4)>
...
```

我们的两个 `Text` 的例子中，编译器自动（根据名称的约定）使用了 

```swift
static func buildBlock<C0, C1>(C0, C1) -> TupleView<(C0, C1)>
```

方法，这时候 `VStack` 的类型就成为了 `VStack<TupleView<(Text,Text)>>` 了。经过 `ViewBuilder` 转换后的代码：

```swift
struct ContentView : View {
  var body: some View {
    VStack(alignment: .leading) {
      ViewBuilder.buildBlock(Text("Hello, World"), Text("Leon Lu"))
    }
  }
}
```

值得一提的是，由于 `buildBlock` 的 overload 版本最多泛型参数是 10 个。所以当超过 10 个的时候可以使用 `Group` 包一下； 如果有循环可以展开，则可以使用 `ForEach`。

**分支条件的情况**

`ViewBuilder` 中还有两个函数被用来构建含分支条件时候的类型

```swift
static func buildEither<TrueContent, FalseContent>(first: TrueContent) ->
 ConditionalContent<TrueContent, FalseContent>

static func buildEither<TrueContent, FalseContent>(second: FalseContent) -> 
 ConditionalContent<TrueContent, FalseContent>
```

如果根据不同条件返回不同的视图，那么生成的类型中包含两个类型。

```swift
struct SlideViewer: View {
  @State private var isEditing = false
  @Binding var slide: Slide

  var body: some View {
    VStack {
      Text("Slide #\(slide.number)")

      if isEditing {
        TextFiled($slide.title)
      } else {
        Text(slide.title)
      }
    }
  }
}
```

此时，`VStack` 的类型变成了

```swift
VStack<TupleView<(Text, ConditionalContent<TextField,Text>)>>
```
