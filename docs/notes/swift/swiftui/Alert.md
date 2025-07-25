---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: Alert
createTime: 2024/08/02 09:19:27
permalink: /swift/3unni9yz/
---

# Alert

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
