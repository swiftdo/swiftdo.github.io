---
title: "Result Builders 实战"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-05-01
tags:
  - swift
  - ios
  - swiftui
---

`Result Builders`允许某些函数通过一系列组件中隐式构建结果值，按照开发者设定的构建规则对组件进行排列。通过对函数语句应用构建器进行转译，`Result Builders`提供了在 Swift 中创建新的领域特定语言（DSL）的能力。

与常见的使用点语法实现的类 DSL 相比，使用`Result Builders`创建的 DSL 使用更简单、无效内容更少、代码更容易理解。

目前苹果在`SwiftUI`框架中大量地使用了该功能，除了最常见的视图构建器（ViewBuilder）外，其他还包括：AccessibilityRotorContentBuilder、CommandsBuilder、LibraryContentBuilder、SceneBuilder、TableColumnBuilder、TableRowBuilder、ToolbarContentBuilder、WidgetBundleBuilder 等。

本文将制作一个 Result Builder，用声明式的方式定义 AttributeString 使得代码更加干净、易读。


## 常规定义 greet 

我们来定义个 `greet` 函数，来实现一个简单的字符串拼接功能：

```swift
func greet(name: String, title: String) -> NSMutableAttributedString {
    let attributes = [NSAttributedString.Key.foregroundColor : UIColor.red]
    let attributes2 = [
      NSAttributedString.Key.font : UIFont.systemFont(ofSize: 20),
      NSAttributedString.Key.foregroundColor : UIColor.blue
    ]
    
    let message = NSMutableAttributedString()
    message.append(NSAttributedString(string: "Hello "))
    message.append(NSAttributedString(string: name, attributes: attributes))
    message.append(NSMutableAttributedString(string: ", "))
    message.append(NSAttributedString(string: title, attributes: attributes2))
    return message
}

greet(name: "读者们", title: "欢迎👏🏻")
```

运行的结果：

![](http://blog.loveli.site/mweb/16513897424154.jpg)

那么如何通过 `Result builders` 将代码改造成类似下面：

```swift
func greet(name: String, title: String) -> NSAttributedString {
  NSAttributedString(string: "Hello ")
  NSAttributedString(string: name, attributes: ...)
  NSAttributedString(string: "，")
  NSAttributedString(string: title, attributes: ...)
}
```

不需要 return 返回语句，且不需要手动拼接字符串。下面，我们一起来实现它。

## 创建 `result builder`

一个`result builder`类型必须满足两个基本要求：

* 它必须通过`@resultBuilder`进行标注，这表明它打算作为一个结果构建器类型使用，并允许它作为一个自定义属性使用。
* 它必须至少实现一个名为`buildBlock`的类型方法。

那么：

```swift
@resultBuilder
enum AttributedStringBuilder {
    static func buildBlock(_ components: NSAttributedString...) -> NSAttributedString {
        let attributedString = NSMutableAttributedString()
        for component in components {
            attributedString.append(component)
        }
        return attributedString
    }
}
```

然后我们通过这个`result builder`来实现这个`greet`的函数，并且命名这个函数为`greetBuilder`：

```swift
@AttributedStringBuilder
func greetBuilder(name: String, title: String) -> NSAttributedString {
    NSMutableAttributedString(string: "Hello ")
    NSMutableAttributedString(string: name, attributes:[
        .foregroundColor : .red
    ])
    NSMutableAttributedString(string: ", ")
    NSMutableAttributedString(string: title, attributes:[
      .font : .systemFont(ofSize: 20),
      .foregroundColor : .blue
    ])
}

greetBuilder(name: "读者们", title: "Are you ok?")
```

为了让代码看得更加简洁，我们对 NSMutableAttributedString 添加扩展功能。

```swift
extension NSMutableAttributedString {
    public func color(_ color: UIColor) -> NSMutableAttributedString {
        self.addAttribute(.foregroundColor, value: color, range: .init(location: 0, length: self.length))
        return self
    }
    
    public func font(_ font: UIFont) -> NSMutableAttributedString {
        self.addAttribute(.font, value: font, range: .init(location: 0, length: self.length))
        return self
    }
}
```

我们的`greetBuilder`代码：

```swift
@AttributedStringBuilder
func greetBuilder(name: String, title: String) -> NSAttributedString {
    NSMutableAttributedString(string: "Hello ")
    NSMutableAttributedString(string: name).color(.red)
    NSMutableAttributedString(string: ", ")
    NSMutableAttributedString(string: title)
        .font(.systemFont(ofSize: 20))
        .color(.blue)
}

greetBuilder(name: "读者们", title: "Are you ok?")
```

不知道你是否觉得 NSMutableAttributedString 太长了，我们进行优化下：

```swift
typealias Text = NSMutableAttributedString
```

最终我们的完整代码如下：

```swift
public typealias Text = NSMutableAttributedString

extension Text {
    public func color(_ color: UIColor) -> Text {
        self.addAttribute(.foregroundColor, value: color, range: .init(location: 0, length: self.length))
        return self
    }
    
    public func font(_ font: UIFont) -> Text {
        self.addAttribute(.font, value: font, range: .init(location: 0, length: self.length))
        return self
    }
}

@resultBuilder
enum AttributedStringBuilder {
    static func buildBlock(_ components: Text...) -> Text {
        let attributedString = Text()
        for component in components {
            attributedString.append(component)
        }
        return attributedString
    }
}

@AttributedStringBuilder
func greetBuilder(name: String, title: String) -> Text {
    Text(string: "Hello ")
    Text(string: name)
        .color(.red)
    Text(string: ", ")
    Text(string: title)
        .font(.systemFont(ofSize: 20))
        .color(.blue)
}

greetBuilder(name: "读者们", title: "Are you ok?")
```

`greetBuilder` 是不是看起来有那味了。

## 使用条件语句

如果传递过去的 title 是个空字符串：

```swift
greetBuilder(name: "读者们", title: "")
// Hello 读者们，
```

结尾出现了 `，`，我们不希望显示出来。需要去判断 title 是否为空，如果为空，则不添加 `，`。所以我们需要支持`if`语句：

```swift
if !title.isEmpty {
  Text(string: "，")
  Text(string:title)
    .font(.systemFont(ofSize: 20))
    .color(.blue)
}
```

![](http://blog.loveli.site/mweb/16513921938024.jpg)

为了让 Result builder 支持条件逻辑，我们需要在`AttributedStringBuilder`添加新的方法。

```swift
static func buildOptional(_ component: Text?) -> Text {
    component ?? Text(string: "")
}
```

`buildOptional` 用于处理在特定执行中可能或不可能出现的部分结果。当一个结果构建器提供了 buildOptional(_:) 时，转译后的函数可以使用没有 else 的 if 语句，同时也提供了对 if let 的支持。

## 更复杂的条件逻辑

如果标题为空，我们想显示为 `谢谢来访`。那么我们就在 if 语句中补全 else 语句

```swift
if !title.isEmpty {
  ...
} else {
  Text(string: "，谢谢来访")
}
```

![](http://blog.loveli.site/mweb/16513928302062.jpg)

buildOptional 只适用于if且没有else语句的情况。通过报错提示可知，`AttributedStringBuilder`需要实现 `buildEither(first:)` 和 `buildEither(second:)` 方法。

```swift
static func buildEither(first component: Text) -> Text {
    component
}

static func buildEither(second component: Text) -> Text {
    component
}
```

`buildEither(first: Component) -> Component`和`buildEither(second: Component) -> Component`，用于在选择语句的不同条件下建立部分结果。当一个结果构建器提供这两个方法的实现时，转译后的函数可以使用带有`else`的`if`语句以及 `switch`语句。

## 使用循环

如果我问候不是`读者们`，而是指定的一组人，比如：小华，小明，张三，李四。那么我们将`greetBuilder`将变为如下：

```swift
@AttributedStringBuilder
func greetBuilder(names: [String], title: String) -> Text {
    Text(string: "Hello ")
    for name in names {
        Text(string: name)
            .color(.red)
        Text(string: " ")
    }
    if !title.isEmpty {
        Text(string: "，")
        Text(string:title)
        .font(.systemFont(ofSize: 20))
        .color(.blue)
    } else {
        Text(string: "，谢谢来访")
    }
}

greetBuilder(names: ["小华", "小明", "张三", "李四"], title: "欢迎来访👏🏻")
```

![](http://blog.loveli.site/mweb/16513940187917.jpg)

同理，根据报错提示，如果要实现循环，那么`AttributedStringBuilder`需要实现`buildArr(_:)`方法。

```swift
static func buildArray(_ components: [Text]) -> Text {
    let attr = Text()
    for com in components {
        attr.append(com)
    }
    return attr
}
```

这块代码跟 `buildBlock` 的实现相似。添加后，报错消失，可以看到如下结果：

![](http://blog.loveli.site/mweb/16513945140098.jpg)

## 支持多种类型

比如我们可以将空格和逗号做一下封装：

```swift

enum SpecialCharacters {
    case space
    case comma
}
```

然后将空格和逗号替换掉：

```swift
@AttributedStringBuilder
func greetBuilder(names: [String], title: String) -> Text {
    Text(string: "Hello ")
    for name in names {
        Text(string: name)
            .color(.red)
        SpecialCharacters.space
    }
    if !title.isEmpty {
        SpecialCharacters.comma
        Text(string:title)
        .font(.systemFont(ofSize: 20))
        .color(.blue)
    } else {
        SpecialCharacters.comma
        Text(string: "谢谢来访")
    }
}

greetBuilder(names: ["小华", "小明", "张三", "李四"], title: "欢迎来访👏🏻")
```

![](http://blog.loveli.site/mweb/16513966586251.jpg)


为了支持自定义类型，我们需要实现 `buildExpression(_:)`:

```swift
static func buildExpression(_ expression: SpecialCharacters) -> Text {
    switch expression {
    case .comma:
        return Text(string: "，")
    case .space:
        return Text(string: " ")
    }
}

static func buildExpression(_ expression: Text) -> Text {
    expression
}
```

添加完成后，报错消失了。

`buildExpression(_ expression: Expression) -> Component`它允许结果构建器区分表达式类型和组件类型，为语句表达式提供上下文类型信息。构建器会将 SpecialCharacters 首先转换成 Text，然后再将其传入到 buildBlock 中。


## 样例完整代码

```swift

public typealias Text = NSMutableAttributedString

extension Text {
    public func color(_ color: UIColor) -> Text {
        self.addAttribute(.foregroundColor, value: color, range: .init(location: 0, length: self.length))
        return self
    }
    
    public func font(_ font: UIFont) -> Text {
        self.addAttribute(.font, value: font, range: .init(location: 0, length: self.length))
        return self
    }
}

@resultBuilder
enum AttributedStringBuilder {
   
    static func buildBlock(_ components: Text...) -> Text {
        let attributedString = Text()
        for component in components {
            attributedString.append(component)
        }
        return attributedString
    }
    
    static func buildOptional(_ component: Text?) -> Text {
      component ?? Text(string: "")
    }
    
    static func buildEither(first component: Text) -> Text {
      component
    }

    static func buildEither(second component: Text) -> Text {
      component
    }
    
    static func buildArray(_ components: [Text]) -> Text {
        let attr = Text()
        for com in components {
            attr.append(com)
        }
        return attr
    }
    
    static func buildExpression(_ expression: SpecialCharacters) -> Text {
        switch expression {
        case .comma:
            return Text(string: "，")
        case .space:
            return Text(string: " ")
        }
    }

    static func buildExpression(_ expression: Text) -> Text {
        expression
    }
}


enum SpecialCharacters {
    case space
    case comma
}

@AttributedStringBuilder
func greetBuilder(names: [String], title: String) -> Text {
    Text(string: "Hello ")
    for name in names {
        Text(string: name)
            .color(.red)
        SpecialCharacters.space
    }
    if !title.isEmpty {
        SpecialCharacters.comma
        Text(string:title)
        .font(.systemFont(ofSize: 20))
        .color(.blue)
    } else {
        SpecialCharacters.comma
        Text(string: "谢谢来访")
    }
}

greetBuilder(names: ["小华", "小明", "张三", "李四"], title: "欢迎来访👏🏻")
```

## 要点

* `buildBlock(_ components: Component...) -> Component`
用来构建语句块的组合结果。每个结果构建器至少要提供一个它的具体实现。

* `buildOptional(_ component: Component?) -> Component`
用于处理在特定执行中可能或不可能出现的部分结果。当一个结果构建器提供了 buildOptional(_:) 时，转译后的函数可以使用没有 else 的 if 语句，同时也提供了对 if let 的支持。

* `buildEither(first: Component) -> Component和buildEither(second: Component) -> Component`
用于在选择语句的不同路径下建立部分结果。当一个结果构建器提供这两个方法的实现时，转译后的函数可以使用带有else 的 if语句以及 switch 语句。

* `buildArray(_ components: [Component]) -> Component`
用来从一个循环的所有迭代中收集的部分结果。在一个结果构建器提供了 buildArray(_:) 的实现后，转译后的函数可以使用 for...in 语句。

* `buildExpression(_ expression: Expression) -> Component`
它允许结果构建器区分表达式类型和组件类型，为语句表达式提供上下文类型信息。

* `buildFinalResult(_ component: Component) -> FinalResult`
用于对最外层的 buildBlock 结果的再包装。例如，让结果构建器隐藏一些它并不想对外的类型（转换成可对外的类型）。

* `buildLimitedAvailability(_ component: Component) -> Component`
用于将 buildBlock 在受限环境下（例如if #available）产生的部分结果转化为可适合任何环境的结果，以提高 API 的兼容性。


## 参考

* [ViewBuilder 研究（上）—— 掌握 Result builders](https://www.fatbobman.com/posts/viewBuilder1/)
* [Write a DSL in Swift using result builders](https://developer.apple.com/videos/play/wwdc2021/10253/)
* [Result builders](https://github.com/apple/swift-evolution/blob/main/proposals/0289-result-builders.md)











