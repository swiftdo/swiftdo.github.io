---
sitemap:
  exclude: false
  changefreq: hourly
title: '页面布局与弹框'
date: 2020-08-17
tags:
- swift
- swiftui
---

## HStack

> 文档：[https://developer.apple.com/documentation/swiftui/hstack](https://developer.apple.com/documentation/swiftui/hstack)

水平排列子元素的视图。

创建一个水平排列的静态列表：

```swift
HStack (alignment: .center, spacing: 20){
    Text("Hello")
    Divider()
    Text("World")
}
```

## VStack

> 文档：[https://developer.apple.com/documentation/swiftui/vstack](https://developer.apple.com/documentation/swiftui/vstack)

垂直排列子元素的视图。

创建一个垂直排列的静态列表：

```swift
VStack (alignment: .center, spacing: 20){
    Text("Hello")
    Divider()
    Text("World")
}
```

## ZStack

> 文档：[https://developer.apple.com/documentation/swiftui/zstack](https://developer.apple.com/documentation/swiftui/zstack)

子元素会在 z轴方向上叠加，同时在垂直/水平轴上对齐的视图。

```swift
ZStack {
    Text("Hello")
        .padding(10)
        .background(Color.red)
        .opacity(0.8)
    Text("World")
        .padding(20)
        .background(Color.red)
        .offset(x: 0, y: 40)
}
```


## List

> 文档：[https://developer.apple.com/documentation/swiftui/list](https://developer.apple.com/documentation/swiftui/list)

用于显示排列一系列数据行的容器。

创建一个静态可滚动列表：

```swift
List {
    Text("Hello world")
    Text("Hello world")
    Text("Hello world")
}
```

表单里的内容可以混搭：

```swift
List {
    Text("Hello world")
    Image(systemName: "clock")
}
```

创建一个动态列表：

```swift
let names = ["John", "Apple", "Seed"]
List(names) { name in
    Text(name)
}
```

加入分区：

```swift
List {
    Section(header: Text("UIKit"), footer: Text("We will miss you")) {
        Text("UITableView")
    }

    Section(header: Text("SwiftUI"), footer: Text("A lot to learn")) {
        Text("List")
    }
}
```

要使其成为分组列表，请添加 `.listStyle(GroupedListStyle())`：

```swift
List {
    Section(header: Text("UIKit"), footer: Text("We will miss you")) {
        Text("UITableView")
    }

    Section(header: Text("SwiftUI"), footer: Text("A lot to learn")) {
        Text("List")
    }
}.listStyle(GroupedListStyle())

```

## ScrollView

> 文档：[https://developer.apple.com/documentation/swiftui/scrollview](https://developer.apple.com/documentation/swiftui/scrollview)

滚动视图。

```swift
ScrollView(alwaysBounceVertical: true) {
    Image("foo")
    Text("Hello World")
}
```

## Form

> 文档：[https://developer.apple.com/documentation/swiftui/form](https://developer.apple.com/documentation/swiftui/form)

对数据输入的控件进行分组的容器，例如在设置或检查器中。

您可以往表单中插入任何内容，它将为表单渲染适当的样式。

```swift
NavigationView {
    Form {
        Section {
            Text("Plain Text")
            Stepper(value: $quantity, in: 0...10, label: { Text("Quantity") })
        }
        Section {
            DatePicker($date, label: { Text("Due Date") })
            Picker(selection: $selection, label:
                Text("Picker Name")
                , content: {
                    Text("Value 1").tag(0)
                    Text("Value 2").tag(1)
                    Text("Value 3").tag(2)
                    Text("Value 4").tag(3)
            })
        }
    }
}
```

## Spacer

> 文档：[https://developer.apple.com/documentation/swiftui/spacer](https://developer.apple.com/documentation/swiftui/spacer)

一块既能在包含栈布局时沿主轴伸展，也能在不包含栈时沿两个轴展开的灵活空间。

```swift
HStack {
    Image(systemName: "clock")
    Spacer()
    Text("Time")
}
```

## Divider

> 文档：[https://developer.apple.com/documentation/swiftui/divider](https://developer.apple.com/documentation/swiftui/divider)

用于分隔其它内容的可视化元素。

```swift
HStack {
    Image(systemName: "clock")
    Divider()
    Text("Time")
}.fixedSize()
```

## NavigationView

> 文档：[https://developer.apple.com/documentation/swiftui/navigationview](https://developer.apple.com/documentation/swiftui/navigationview)

用于渲染视图堆栈的视图，这些视图会展示导航层次结构中的可见路径。

```swift
NavigationView {
    List {
        Text("Hello World")
    }
    .navigationBarTitle(Text("Navigation Title")) // 默认使用大标题样式
}
```

对于旧样式标题：

```swift
NavigationView {
    List {
        Text("Hello World")
    }
    .navigationBarTitle(Text("Navigation Title"), displayMode: .inline)
}
```

增加 UIBarButtonItem：

```swift
NavigationView {
    List {
        Text("Hello World")
    }
    .navigationBarItems(trailing:
        Button(action: {
            // Add action
        }, label: {
            Text("Add")
        })
    )
    .navigationBarTitle(Text("Navigation Title"))
}
```

作为 `UISplitViewController`：

```swift
NavigationView {
    List {
        NavigationLink("Go to detail", destination: Text("New Detail"))
    }.navigationBarTitle("Master")
    Text("Placeholder for Detail")
}
```

## TabView

> 文档：[https://developer.apple.com/documentation/swiftui/tabview](https://developer.apple.com/documentation/swiftui/tabview)

使用交互式用户界面元素在多个子视图之间切换的视图。

```swift
TabView {
    Text("First View")
        .font(.title)
        .tabItem({ Text("First") })
        .tag(0)
    Text("Second View")
        .font(.title)
        .tabItem({ Text("Second") })
        .tag(1)
}
```

标签元素支持同时显示图像和文本， 您也可以使用 SF Symbols。

```swift
TabView {
    Text("First View")
        .font(.title)
        .tabItem({
            Image(systemName: "circle")
            Text("First")
        })
        .tag(0)
    Text("Second View")
        .font(.title)
        .tabItem(VStack {
            Image("second")
            Text("Second")
        })
        .tag(1)
}
```

您也可以省略 `VStack`：

```swift
TabView {
    Text("First View")
        .font(.title)
        .tabItem({
            Image(systemName: "circle")
            Text("First")
        })
        .tag(0)
    Text("Second View")
        .font(.title)
        .tabItem({
            Image("second")
            Text("Second")
        })
        .tag(1)
}
```


## Alert

> 文档：[https://developer.apple.com/documentation/swiftui/alert](https://developer.apple.com/documentation/swiftui/alert)

一个展示警告信息的容器。

我们可以根据布尔值显示 `Alert` 。

```swift
@State var isError: Bool = false

Button("Alert") {
    self.isError = true
}.alert(isPresented: $isError, content: {
    Alert(title: Text("Error"), message: Text("Error Reason"), dismissButton: .default(Text("OK")))
})
```

它也可与 `Identifiable` 项目绑定

```swift
@State var error: AlertError?

var body: some View {
    Button("Alert Error") {
        self.error = AlertError(reason: "Reason")
    }.alert(item: $error, content: { error in
        alert(reason: error.reason)
    })    
}

func alert(reason: String) -> Alert {
    Alert(title: Text("Error"),
            message: Text(reason),
            dismissButton: .default(Text("OK"))
    )
}

struct AlertError: Identifiable {
    var id: String {
        return reason
    }
    
    let reason: String
}
```


## Modal

> 文档：[https://developer.apple.com/documentation/swiftui/view/3352791-sheet](https://developer.apple.com/documentation/swiftui/view/3352791-sheet)

模态视图的存储类型。

我们可以根据布尔值显示 `Modal` 。

```swift
@State var isModal: Bool = false

var modal: some View {
    Text("Modal")
}

Button("Modal") {
    self.isModal = true
}.sheet(isPresented: $isModal, content: {
    self.modal
})
```

它也可与 `Identifiable` 项目绑定。

```swift
@State var detail: ModalDetail?

var body: some View {
    Button("Modal") {
        self.detail = ModalDetail(body: "Detail")
    }.sheet(item: $detail, content: { detail in
        self.modal(detail: detail.body)
    })    
}

func modal(detail: String) -> some View {
    Text(detail)
}

struct ModalDetail: Identifiable {
    var id: String {
        return body
    }
    let body: String
}
```

## ActionSheet

> 文档：[https://developer.apple.com/documentation/swiftui/actionsheet](https://developer.apple.com/documentation/swiftui/actionsheet)

操作表视图的存储类型。

我们可以根据布尔值显示 `ActionSheet`。

```swift
@State var isSheet: Bool = false

var actionSheet: ActionSheet {
    ActionSheet(title: Text("Action"),
                message: Text("Description"),
                buttons: [
                    .default(Text("OK"), action: {
                        
                    }),
                    .destructive(Text("Delete"), action: {
                        
                    })
                ]
    )
}

Button("Action Sheet") {
    self.isSheet = true
}.actionSheet(isPresented: $isSheet, content: {
    self.actionSheet
})
```

它也可与 `Identifiable` 项目绑定。

```swift
@State var sheetDetail: SheetDetail?

var body: some View {
    Button("Action Sheet") {
        self.sheetDetail = ModSheetDetail(body: "Detail")
    }.actionSheet(item: $sheetDetail, content: { detail in
        self.sheet(detail: detail.body)
    })
}

func sheet(detail: String) -> ActionSheet {
    ActionSheet(title: Text("Action"),
                message: Text(detail),
                buttons: [
                    .default(Text("OK"), action: {
                        
                    }),
                    .destructive(Text("Delete"), action: {
                        
                    })
                ]
    )
}

struct SheetDetail: Identifiable {
    var id: String {
        return body
    }
    
    let body: String
}
```

