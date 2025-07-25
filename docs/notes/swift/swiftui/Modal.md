---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: Modal
createTime: 2024/08/02 09:19:27
permalink: /swift/rmfs1qd3/
---

# Modal

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
