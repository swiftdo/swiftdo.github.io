---
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: EditButton
description: "负责控制打开和关闭编辑模式。这个编辑模式需要和NavigationView相结合。"
createTime: 2024/08/02 09:19:27
permalink: /swift/swiftui/edit-button/
---

# EditButton

> 文档：[https://developer.apple.com/documentation/swiftui/editbutton](https://developer.apple.com/documentation/swiftui/editbutton)

负责控制打开和关闭编辑模式。这个编辑模式需要和[NavigationView](/swift/swiftui/navigation-view/)相结合。

在 [List](/swift/swiftui/list/) 的文章中，我们有写一个待完成清单的案例，本文将继续沿用。

```swift
var body: some View {
  NavigationView {
      List {
          Section(header: Text("待办事项")) {
              ForEach(listData) { item in
                  HStack{
                      Image(systemName: item.imgName)
                      Text(item.task)
                  }
              }
              .onDelete(perform: deleteItem)
              .onMove(perform: moveItem)
          }
          Section(header: Text("其他内容")) {
              Text("Hello World")
          }
      }
      .toolbar { EditButton() } // 这里实现添加
      .listStyle(GroupedListStyle())
      .navigationTitle(Text("待办清单"))
  }
}
```

![111ee0710](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42186b81c8354617935ad56d81d9bc8f~tplv-k3u1fbpfcp-zoom-1.image)

在这个案例中，我们发现 EditButton 的标题是英文(Edit/Done)，那么按钮有办法显示为中文标题么？

首先我们看下 `EditButton` 的代码定义：

```swift
public struct EditButton : View {
    public init()
    public var body: some View { get }
    public typealias Body = some View
}
```

从它构造方法中，我们知道它的构造函数是不需要传递参数的。同时也没有任何可以修改 title 的方法提供。

> EditButton 的标题和外观由系统决定，不能被覆盖。

那么还有哪些操作可以控制 `EditButton`?

## 控制显示位置

使用 `.navigationBarItems` 可以控制`EditButton`是在左还是右：

```swift
var body: some View {
    NavigationView {
        List {
            Section(header: Text("待办事项")) {
                ForEach(listData) { item in
                    HStack{
                        Image(systemName: item.imgName)
                        Text(item.task)
                    }
                }
                .onDelete(perform: deleteItem)
                .onMove(perform: moveItem)
            }
            Section(header: Text("其他内容")) {
                Text("Hello World")
            }
        }
        .navigationBarItems(leading: EditButton())
        .listStyle(GroupedListStyle())
        .navigationTitle(Text("待办清单"))
    }
}
```

![](http://blog.oldbird.run/mweb/16259265826634.jpg)

## 获取当前的 EditMode

可以通过下面的方法获取当前的`EditMode`，并实现更复杂的编辑操。

```swift
@State var isEditMode: EditMode = .inactive
var body: some View {
    NavigationView {
        List {
            Section(header: Text("待办事项")) {
                ForEach(listData) { item in
                    HStack{
                        Image(systemName: item.imgName)
                        if (isEditMode == .active) {
                            Text(item.task + "😄")
                        } else  {
                            Text(item.task)
                        }
                    }
                }
                .onDelete(perform: deleteItem)
                .onMove(perform: moveItem)
            }
            Section(header: Text("其他内容")) {
                Text("Hello World")
            }
        }
        .toolbar { EditButton() }
        .environment(\.editMode, $isEditMode)
        .listStyle(GroupedListStyle())
        .navigationTitle(Text("待办清单"))
    }
}
```

![](http://blog.oldbird.run/mweb/16259287112522.jpg)

运行效果如下：

![111ee0711](http://blog.oldbird.run/mweb/111ee0711.gif)

`EditMode` 是一个枚举，指示用户是否可以编辑其内容：

- active 激活状态：视图内容可以编辑。
- inactive 非激活状态：无法编辑视图内容。
- transient 临时状态：视图处于临时编辑模式。

现在可以通过 `isEditModel` 来获取到当前的编辑状态，那么能否自己手动去改变 `isEditModel` 的值呢？

我们可以尝试用`Button`来替代`EditButton`：

```swift
var body: some View {
    NavigationView {
        List {
            Section(header: Text("待办事项")) {
                ForEach(listData) { item in
                    HStack{
                        Image(systemName: item.imgName)
                        if isEditMode == .active {
                            Text(item.task + "😄")
                        } else  {
                            Text(item.task)
                        }
                    }
                }
                .onDelete(perform: deleteItem)
                .onMove(perform: moveItem)
            }
            Section(header: Text("其他内容")) {
                Text("Hello World")
            }
        }
        .toolbar {
            Button(isEditMode.isEditing ? "完成": "编辑") {
                switch isEditMode {
                case .active:
                    self.isEditMode = .inactive
                case .inactive:
                    self.isEditMode = .active
                default:
                    break
                }
            }
        }
        .environment(\.editMode, $isEditMode)
        .listStyle(GroupedListStyle())
        .navigationTitle(Text("待办清单"))
    }
}
```

![](http://blog.oldbird.run/mweb/16260053476955.jpg)

运行后的效果：

![111ee0715](http://blog.oldbird.run/mweb/111ee0715.gif)

从上图可知用`Button`替换`EditButton`是可行的。也实现了`Edit/Done`非中文问题。

总结：**EditButton**可以激活视图的编辑状态，从而让视图提供移动、删除、插入等功能。但其未提供丰富的接口，自定义限制比较大，可以通过 `environment` 的 `\.editMode` 绑定视图的编辑状态，这让自定义`Button`控制编辑状态成为可能。通过实践可知，自定义`Button`是可以实现`EditButton`的所具有的功能的。
