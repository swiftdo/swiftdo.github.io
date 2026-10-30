---
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
  - swiftui
title: SecureField
description: "用户安全地输入私人文本的控件。"
createTime: 2024/08/02 09:19:27
---

# SecureField

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
