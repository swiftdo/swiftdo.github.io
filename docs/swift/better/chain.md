# 链式调用与@dynamicMemberLookup

在用 UIKit 的时候，我们会写很多类似的代码：

```swift
let imageView = UIImageView(image: image)
imageView.frame = CGRect(x: 0, y: 0, width: 100, height: 100)
imageView.backgroundColor = .white
imageView.alpha = 0.5
```

但在 SwiftUI 中：

```swift
Image(uiImage: myImage)
    .frame(width: 100, height: 100)
    .background(Color.white)
    .opacity(0.5)
```

不知道你的品位是否跟我一样，觉得后者比前者更具美感，更加简洁。前者需要不断通过`imageView`对象来设置，比较老式。后者的链式风格，流畅快捷，不需要临时变量来操作这个对象，一气呵成。

## 普通思维

如果要实现类似的链式风格，我们需要手动去修改对应的属性。

举例来说，如果有这么个类：

```swift
class Scene {
    var title: String?
    var backgroudColor: UIColor?
}
```

`Scene` 要实现链式，需要为这些属性添加对应的方法：

```swift
/// 每次属性修改，对应的方法也要进行修改
extension Scene {
    func title(_ title: String) -> Scene {
        self.title = title
        return self
    }

    func backgroundColor(_ color: UIColor) -> Scene {
        self.backgroudColor = color
        return self
    }
}
```

通过回传 `self`, 实现链式调用：

```swift
Scene()
    .title("Scene")
    .backgroundColor(.yellow)
```

这种方法，被动性比较大，如果 `Scene` 属性变化，那么对应的设置方法也得改变。妥妥的劳力成本。

但是如果在 Swift5.1 版本以上，还有另一个选择。

## Dynamic Member Lookup

在 Swift4.2 版本的时候，Swift 新增了 `Dynamic Member Lookup`，动态成员查询。在使用`@dynamicMemberLookup`标记了对象后（对象、结构体、枚举
、protocol），实现了`subscript(dynamicMember member: String)`方法后我们就可以访问到对象不存在的属性。如果访问到的属性不存在，就会调用到实现的 `subscript(dynamicMember member: String)`方法，`key`作为`member`传入这个方法。

比如说，如果原本定义的结构体：

```swift
struct Persion {
    var info: [String: Any]
}
```

添加`@dynamicMemberLookup`后：

```swift
@dynamicMemberLookup
struct Persion {
    var info: [String: Any]

    subscript(dynamicMember infoKey: String) -> Any? {
        get {
            return info[infoKey]
        }
        set {
            info[infoKey] = newValue
        }
    }
}
```

接着，我们就可以像直接存取 `Persion` 对象的属性一样，存取`info`的内容：

```swift
var persion = Persion(info: [:])
persion.name = "Emilia"
print(persion.name)
```

从 [Introduce User-defined "Dynamic Member Lookup" Types](https://github.com/apple/swift-evolution/blob/main/proposals/0293-extend-property-wrappers-to-function-and-closure-parameters.md) 提案中可知，这个功能是设计来与 Python 等动态语言互通的。

但是为什么跟 `链式调用` 扯上关系，因为在 `Swift5.1`，这个特性升级了。

## Key Path Member Lookup

在 Swift5.1 中，除了字符串之外，也可以用 [key path 来当做动态成员查询的媒介](https://github.com/apple/swift-evolution/blob/master/proposals/0252-keypath-dynamic-member-lookup.md)。

假设我们把 `Persion` 定义如下：

```swift
struct Person {
    struct Info {
        var name: String
    }
    var info: Info
}
```

那么添加 Key path member lookup 后：

```swift
@dynamicMemberLookup
struct Person {
    struct Info {
        var name: String
    }
    var info: Info

    subscript<Value>(dynamicMember keyPath: WritableKeyPath<Info, Value>) -> Value {
        get {
            return info[keyPath: keyPath]
        }
        set {
            info[keyPath: keyPath] = newValue
        }
    }
}
```

现在除了通过 `persion.info.name` 来设置外，可以：

```swift
// 语法可以高亮
var persion = Person(info: Person.Info(name: "helo"))
persion.name = "jackson"
print(persion.name)
```

其中我们当我们敲`persion.`的时候，是有语法提示的。

![Screen Shot 2021-09-08 at 8.17.57 P](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f2b1eec33d744328b2cf3e9fbc87654~tplv-k3u1fbpfcp-zoom-1.image)

这是因为编译器可以从 Key path 去查询所有的目标，以及它们的类型。正式因为如此，它就非常适用于包装类型：

```swift
@dynamicMemberLookup
struct Wrapper<Content> {
    var content: Content
    subscript<Value>(dynamicMember keyPath: WritableKeyPath<Content, Value>) -> Value {
        get {
            return content[keyPath: keyPath]
        }
        set {
            content[keyPath: keyPath] = newValue
        }
    }
}
// 可以直接把 Wrapper<Scene> 当成 Scene 来存取属性
var scene2 = Wrapper(content: Scene())
scene2.title = "Scene"
```

## 链式转换

从上面`Scene`的链式调用的实现，我们可以很容易知道，要实现链式无非就是设置完成后，返回 self。

```swift

@dynamicMemberLookup
struct Setter<Subject> {
    let subject: Subject

    subscript<Value>(dynamicMember keyPath: WritableKeyPath<Subject, Value>) -> ((Value) -> Setter<Subject>) {

        // 获取到真正的对象
        var subject = self.subject

        return { value in
            // 把 value 指派给 subject
            subject[keyPath: keyPath] = value
            // 回传的类型是 Setter 而不是 Subject
            // 因为使用Setter来链式，而不是 Subject 本身
            return Setter(subject: subject)
        }
    }
}
```

接着，只要把任何的对象实例用 `Setter` 包起来，就可以通过链式进行设置：

```swift
Setter(subject: Scene()) // 包装 Scene()
    .title("Scene3")  // 设置标题
    .backgroudColor(.red) // 设置背景
    .subject  // 读取最后更改后的对象
```

快速改写 UIKit 的 UIView：

```swift
Setter(subject: UIView())
    .frame(CGRect(x: 0, y: 0, width: 100, height: 100))
    .backgroundColor(.white)
    .alpha(0.5)
    .subject
```

愉快的扩展了 UIView 的调用方式，🐱 哇
