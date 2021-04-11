---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Swift 码了个 JSON 解析器(一)'
date: 2021-4-11
tags:
- swift
- 函数式编程
- json
---
我们将开发一个小而完整的 Swift 库，这个库用于处理和序列化 JSON 数据。

> 项目源码：[https://github.com/swiftdo/json](https://github.com/swiftdo/json)

## JSON 简介

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。

JSON 支持四种基本类型值：字符串、数字、布尔值和一个特殊值null。

```json
"a string"
12345
true
null
```

JSON 还提供了两种复合类型：
* 数组：值的有序序列
* 对象：是“名字/值”对的无序集合

其中对象的名字必须是字符串，而对象和数组的值则可以是任何 JSON 类型。

```json
[-3.14, true, null, "a string"]

{"nums": [1,2,3,4,5], "is_auth": false}
```

## 在 Swift 中表示 JSON 数据

要在 Swift 中处理 JSON 数据，可以用一个 Enum 来表示 JSON 的各个数据类型：

```swift
public enum JSON {
    case object([String: JSON])
    case array([JSON])
    case string(String)
    case double(Double)
    case int(Int)
    case bool(Bool)
    case null
}
```

这里我们通过 `double(Double)` 和 `int(Int)` 表示 json 的数字类型。

提供一些默认的构造器便于初始化 JSON：

```swift
extension JSON {
    public init(_ value: Int) {
        self = .int(value)
    }

    public init(_ value: Double) {
        self = .double(value)
    }

    public init(_ value: [JSON]) {
        self = .array(value)
    }

    public init(_ value: [String: JSON]) {
        self = .object(value)
    }

    public init(_ value: String) {
        self = .string(value)
    }

    public init(_ value: Bool) {
        self = .bool(value)
    }
}
```

完成上面两步，可以快速构建一个 JSON 实例：

```swift
let json = JSON([
    "a": JSON([JSON(8), JSON(9), JSON(10)]),
    "b": JSON(10.2),
    "c": JSON(1),
    "d": JSON([
        "name": JSON("world"),
        "say": JSON("hello"),
        "temp": JSON(true),
        "old": JSON.null
    ])
])
```

为了能够通过 `print(json)` 输出实例的内容，我们让 JSON 实现`CustomStringConvertible`协议即可：

```swift
extension JSON: CustomStringConvertible {
    public var description: String {
        switch self {
        case let .string(v): return "String(\(v))"
        case let .double(v): return "Double(\(v))"
        case let .int(v): return "Int(\(v)"
        case let .bool(v): return "Bool(\(v))"
        case let .array(a): return "Array(\(a.description))"
        case let .object(o): return "Object(\(o.description))"
        case .null: return "Null"
        }
    }
}
```

执行 `print(json)`，结果显示：

```sh
Object(["c": Int(1, "a": Array([Int(8, Int(9, Int(10]), "b": Double(10.2), "d": Object(["name": String(world), "temp": Bool(true), "say": String(hello), "old": Null])])
```

虽然可以打印出结果, 但是输出不够直观，不容易阅读。下一步，我们将实现美观地输出JSON。

## 打印 JSON

我们需要实现一个函数，将 json 实例输出为：

```json
{
    "a":[
        8,
        9,
        10
    ],
    "b":10.2,
    "c":1,
    "d":{
        "temp":true,
        "name":"world",
        "old":null,
        "say":"hello"
    }
}
```

我们将此解析函数定义为 `prettyJson`：

```swift
/// JSON 的格式化
func prettyJson(level: Int = 0, json: JSON) -> String {
    switch json {
    case let .string(s): return refString(s)
    case let .double(n): return "\(n)"
    case let .int(n): return "\(n)"
    case let .bool(b): return b ? "true":"false"
    case .null: return "null"
    case let .array(arr):
        if arr.isEmpty { return "[]"}
        return "[" + prettyList(level: level, pretty: prettyJson, list: arr) + "]"
    case let .object(obj):
        if obj.isEmpty {return "{}"}
        return "{" + prettyObject(level: level, pretty: prettyJson, object: obj) + "}"
    }
}
```

在 `prettyJson` 函数参数列表中：

* **level**：缩进层级(空格数)，默认为第0层
* **json**: 使我们需要格式化的 JSON

### string

**.string("a")** 输出为 `\"a\"`。

`refString` 函数的实现：

```swift
func refString(_ value: String) -> String {
    return "\"\(value)\""
}
```

### double、int、bool、null

对于 JSON 的 `double、int、bool、null` 的输出非常容易：

* **.double(10.0)** 输出为 10.0
* **.int(10)** 输出为 10
* **.bool(true)** 输出为 "true"
* **.bool(false)** 输出为 "false"
* **.null**  输出为 "null"

### array

**.array([.int(8), .int(9), .int(10)])** 输出为：

```json
[
    8,
    9,
    10
]
```

所以在遇到如果是 `.array([arr])` 的时候：

```swift
case let .array(arr):
        if arr.isEmpty { return "[]"}
        return "[" + prettyList(level: level, pretty: prettyJson, list: arr) + "]"
```

* 如果 arr 为空，我们直接输出 **[]**
* 否则，将 arr 的每个元素缩进输出，且被 `[]` 包围。在 arr 的元素输出前需要添加缩进（每个元素在上一个缩进层次中在缩进4个空格），然后打印出这个元素，每个元素需要 `,` 拼接且换行。

prettyList 的实现：

```swift
func prettyList(level: Int, pretty: (Int, JSON) -> String, list: [JSON]) -> String {
    // 缩进，上个缩进 + 4
    let level1 = level + 4
    // 换行，且拼接缩进的空格
    let indent = "\n" + replicate(count: level1, elem: " ")
    // 打印每个元素，然后以 ',' 拼接，然后为 ']' 添加换行和缩进
    return list.map { (json) -> String in
        // 这个元素的输出的字符串
        let str = pretty(level1, json)
        // 换行 + 缩进 + 元素的输出
        return indent + str
    }.joined(separator: ",") + "\n" + replicate(count: level, elem: " ")
}
```

* level: 缩进层级
* pretty: list 的每个元素的输出调用(递归)
* list: `.array(arr)` 中 arr

### object

```swift
case let .object(obj):
        if obj.isEmpty {return "{}"}
        return "{" + prettyObject(level: level, pretty: prettyJson, object: obj) + "}"
```

同 `prettyList` 的实现，我们可以很快实现 `prettyObject`。

```swift
func prettyObject(level: Int, pretty: (Int, JSON) -> String, object: [String: JSON]) -> String {
    // 缩进，上个缩进 + 4
    let level1 = level + 4
    // 换行，且拼接缩进的空格
    let indent = "\n" + replicate(count: level1, elem: " ")
    // 打印每个元素，然后以 ',' 拼接，然后为 '}' 添加换行和缩进
    return object.map { (key, value) -> String in
        // 与 prettyList 不同点
        // key + ":" + value 的打印
        let str = refString(key) + ":" +  pretty(level1, value)
        // 换行 + 缩进 + 元素的输出
        return indent + str
    }.joined(separator: ",") + "\n" + replicate(count: level, elem: " ")
}
```

## 测试

写个简单的测试：

```swift
let json = JSON([
    "a": JSON([JSON(8), JSON(9), JSON(10)]),
    "b": JSON(10.2),
    "c": JSON(1),
    "d": JSON([
        "name": JSON("world"),
        "say": JSON("hello"),
        "temp": JSON(true),
        "old": JSON.null
    ])
])

print("正常打印:\n\(json)")

let result = prettyJson(level: 0, json: json)
print("\n格式化输出:\n\(result)")
```

结果显示：

```swift
正常打印:
Object(["c": Int(1, "b": Double(10.2), "d": Object(["temp": Bool(true), "name": String(world), "say": String(hello), "old": Null]), "a": Array([Int(8, Int(9, Int(10])])

格式化输出:
{
    "c":1,
    "b":10.2,
    "d":{
        "temp":true,
        "name":"world",
        "say":"hello",
        "old":null
    },
    "a":[
        8,
        9,
        10
    ]
}
```

## 总结

本篇我们通过 `JSON` 定义 json 数据。然后通过 `prettyJson` 美化 JSON 的输出。整体来讲，还是比较容易的。

下篇，我们将会讲解将 json 字符串解析为 JSON，敬请期待!

如果您想加入我们的 Swift 微信交流群，可以关注微信公众号 **OldBirds**


