---
sitemap:
  exclude: false
  changefreq: hourly
title: '视图和控件'
date: 2020-08-17
tags:
- swift
- swiftui
---

## Text

> 文档：[https://developer.apple.com/documentation/swiftui/text](https://developer.apple.com/documentation/swiftui/text)

显示一行或多行只读文本的视图。

```swift
Text("Hello World")
```

样式：

```swift
Text("Hello World")
  .bold()
  .italic()
  .underline()
  .lineLimit(2)
```

`Text` 中填入的字符串也用作 `LocalizedStringKey`，因此也会直接获得 `NSLocalizedString` 的特性。

```swift
Text("This text used as localized key")
```

直接在文本视图里格式化文本。 实际上，这不是 SwiftUI 的功能，而是 Swift 5的字符串插入特性。

```swift
static let dateFormatter: DateFormatter = {
    let formatter = DateFormatter()
    formatter.dateStyle = .long
    return formatter
}()

var now = Date()
var body: some View {
    Text("What time is it?: \(now, formatter: Self.dateFormatter)")
}
```

可以直接用 `+` 拼接 `Text` 文本:

```swift
Text("Hello ") + Text("World!").bold()
```

文字对齐方式：

```swift
Text("Hello\nWorld!").multilineTextAlignment(.center)
```

## TextField

> 文档：[https://developer.apple.com/documentation/swiftui/textfield](https://developer.apple.com/documentation/swiftui/textfield)

显示可编辑文本界面的控件。

```swift
@State var name: String = "John"
var body: some View {
    TextField("Name's placeholder", text: $name)
        .textFieldStyle(RoundedBorderTextFieldStyle())
        .padding()
}
```

## SecureField

> 文档：[https://developer.apple.com/documentation/swiftui/securefield](https://developer.apple.com/documentation/swiftui/securefield)

用户安全地输入私人文本的控件。

```swift
@State var password: String = "1234"    
var body: some View {
    SecureField($password)
        .textFieldStyle(RoundedBorderTextFieldStyle())
        .padding()
}
```

## Image

> 文档：[https://developer.apple.com/documentation/swiftui/image](https://developer.apple.com/documentation/swiftui/image)

显示图像的视图。

```swift
Image("foo") //图像名字为 foo
```

我们可以使用新的 SF Symbols：

```swift
Image(systemName: "clock.fill")
```

您可以通过为系统图标添加样式，来匹配您使用的字体：

```swift
Image(systemName: "cloud.heavyrain.fill")
    .foregroundColor(.red)
    .font(.title)
Image(systemName: "clock")
    .foregroundColor(.red)
    .font(Font.system(.largeTitle).bold())
```

为图片增加样式：

```swift
Image("foo")
    .resizable() // 调整大小，以便填充所有可用空间
    .aspectRatio(contentMode: .fit)
```

## Button

> 文档：[https://developer.apple.com/documentation/swiftui/button](https://developer.apple.com/documentation/swiftui/button)

在触发时执行操作的控件。

```swift
Button(
    action: {
        // 点击事件
    },
    label: { Text("Click Me") }
)
```

如果按钮的标签只有 `Text`，则可以通过下面这种简单的方式进行初始化：

```swift
Button("Click Me") {
    // 点击事件
}
```

您可以像这样给按钮添加属性：

```swift
Button(action: {
                
}, label: {
    Image(systemName: "clock")
    Text("Click Me")
    Text("Subtitle")
})
.foregroundColor(Color.white)
.padding()
.background(Color.blue)
.cornerRadius(5)
```

## NavigationLink

> 文档：[https://developer.apple.com/documentation/swiftui/navigationlink](https://developer.apple.com/documentation/swiftui/navigationlink)

按下时会触发导航演示的按钮。它用作代替 `pushViewController`。

```swift
NavigationView {
    NavigationLink(destination:
        Text("Detail")
        .navigationBarTitle(Text("Detail"))
    ) {
        Text("Push")
    }.navigationBarTitle(Text("Master"))
}
```

为了增强可读性，可以把 `destination` 包装成自定义视图 `DetailView` 的方式：

```swift
NavigationView {
    NavigationLink(destination: DetailView()) {
        Text("Push")
    }.navigationBarTitle(Text("Master"))
}
```

## Toggle

> 文档：[https://developer.apple.com/documentation/swiftui/toggle](https://developer.apple.com/documentation/swiftui/toggle)

在开/关状态之间切换的控件。

```swift
@State var isShowing = true // toggle 状态值

Toggle(isOn: $isShowing) {
    Text("Hello World")
}
```

## Picker

> 文档：[https://developer.apple.com/documentation/swiftui/picker](https://developer.apple.com/documentation/swiftui/picker)

从一组互斥值中进行选择的控件。

选择器样式根据其被父视图进行更改，在表单或列表下作为一个列表行显示，点击可以推出新界面展示所有的选项卡。

```swift
NavigationView {
    Form {
        Section {
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

`UISegmentedControl` 也只是 `Picker` 的一种样式。

```swift
@State var mapChoioce = 0
var settings = ["Map", "Transit", "Satellite"]
Picker("Options", selection: $mapChoioce) {
    ForEach(0 ..< settings.count) { index in
        Text(self.settings[index])
            .tag(index)
    }

}.pickerStyle(SegmentedPickerStyle())
```

## DatePicker

> 文档：[https://developer.apple.com/documentation/swiftui/datepicker](https://developer.apple.com/documentation/swiftui/datepicker)

选择日期的控件。

日期选择器样式也会根据其父视图进行更改，在表单或列表下作为一个列表行显示，点击可以扩展到日期选择器（就像日历 App 一样）

```swift
@State var selectedDate = Date()

var dateClosedRange: ClosedRange<Date> {
    let min = Calendar.current.date(byAdding: .day, value: -1, to: Date())!
    let max = Calendar.current.date(byAdding: .day, value: 1, to: Date())!
    return min...max
}

NavigationView {
    Form {
        Section {
            DatePicker(
                selection: $selectedDate,
                in: dateClosedRange,
                displayedComponents: .date,
                label: { Text("Due Date") }
            )
        }
    }
}
```

不在表单或列表里，它就可以作为普通的旋转选择器。

```swift
@State var selectedDate = Date()

var dateClosedRange: ClosedRange<Date> {
    let min = Calendar.current.date(byAdding: .day, value: -1, to: Date())!
    let max = Calendar.current.date(byAdding: .day, value: 1, to: Date())!
    return min...max
}

DatePicker(
    selection: $selectedDate,
    in: dateClosedRange,
    displayedComponents: [.hourAndMinute, .date],
    label: { Text("Due Date") }
)
```

## Slider

> 文档：[https://developer.apple.com/documentation/swiftui/slider](https://developer.apple.com/documentation/swiftui/slider)

从有界的线性范围中选择一个值的控件。

```swift
@State var progress: Float = 0

Slider(value: $progress, from: 0.0, through: 100.0, by: 5.0)
```

Slider 虽然没有 `minimumValueImage` 和 `maximumValueImage` 属性， 但可以借助 `HStack` 实现。

```swift
@State var progress: Float = 0
HStack {
    Image(systemName: "sun.min")
    Slider(value: $progress, from: 0.0, through: 100.0, by: 5.0)
    Image(systemName: "sun.max.fill")
}.padding()
```

## Stepper

> 文档：[https://developer.apple.com/documentation/swiftui/stepper](https://developer.apple.com/documentation/swiftui/stepper)

用于执行语义上递增和递减动作的控件。

```swift
@State var quantity: Int = 0
Stepper(value: $quantity, in: 0...10, label: { Text("Quantity \(quantity)")})
```

如果您要一个自己管理的数据源的控件，可以这样写：

```swift
@State var quantity: Int = 0
Stepper(onIncrement: {
    self.quantity += 1
}, onDecrement: {
    self.quantity -= 1
}, label: { Text("Quantity \(quantity)") })
```