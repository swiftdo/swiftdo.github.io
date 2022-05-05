---
sitemap:
  exclude: false
  changefreq: hourly
title: "Swift 码了个 JSON 解析器(二)"
date: 2021-4-11
tags:
  - swift
  - 函数式编程
  - json
---

我们将开发一个小而完整的 Swift 库，这个库用于处理和序列化 JSON 数据。

> 项目源码：[https://github.com/swiftdo/json](https://github.com/swiftdo/json)

在上文 [Swift 码了个 JSON 解析器(一)](https://oldbird.run/swift/fp/t3-json1.html) 中，我们构造了 JSON 数据类型，并且美化了其输出。本文是《Swift 码了个 JSON 解析器》系列的第二篇，我们将一起把 json 字符串解析为 JSON 数据。

## 解析分析

我们一起来回顾下 JSON 的定义：

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

同时我们也知道 json 的数据类型：

```json
"a string"
12345
12.3
true
null
[1, 2, 3]
{"a": 1, "b": 2}
```

将 json 解析到 JSON，我们需要做如下解析：

- 解析字符串
  当我们遇到第一个字符是一个双引号`"`，则需要从当前位置开始到下个`"`的位置，解析出一个字符串。
- 解析值类型
  判断字符是否为数字，如果是的话，读取字符到不是数字为止。解析这串字符数组是否为数字，通过 `.` 去区分 int，还是 double。
- 解析布尔类型
  如果遇到第一个字符是 `f`，则是从当前位置开始往后读 5 个字符，且读到的 5 个字符组成的字符串必须是 `false`，否则抛出错误；
  如果遇到第一个字符是 `t`，则是从当前位置开始往后 4 个字符，且读到的 4 个字符组成的字符串必须是 `true`，否则抛出错误。
- 解析 null
  当遇到第一个字符是 `n`，则从当前位置开始往后读取 4 个字符，且读到的 4 个字符组成 null，否则就抛出错误。
- 解析对象
  对象结构是 `{"key": JSON }` 的格式，我们可以先解析到 key 字符串，然后因为值可能是【字符串、值类型、布尔类型、对象、数组、null】，可以用递归的方式解析到值。
- 解析数组
  数组的结构是 `[JSON, JSON]`，因为值可能是 【字符串、值类型、布尔类型、对象、数组、null】，可以用递归的方式解析每个元素。

整个解析流程：

![](http://blog.oldbird.run/mweb/16183222059726.jpg)

## null、false、true

这 3 个解析的方式是一样的：判断首字符，然后匹配后续字符即可。

```swift
func readJsonNull(str: String, index: Int) throws -> (JSON, Int) {
    return try readJsonCharacters(str: str, index: index, characters: ["u", "l", "l"], error: ParserError(msg: "读取null值出错"), json: .null)
}

func readJsonFalse(str: String, index: Int) throws -> (JSON, Int) {
    return try readJsonCharacters(str: str,index: index, characters: ["a", "l", "s", "e"], error: ParserError(msg: "读取false值出错"), json: .bool(false))
}

func readJsonTrue(str: String, index: Int) throws -> (JSON, Int) {
    return try readJsonCharacters(str: str,index: index, characters: ["r", "u", "e"], error: ParserError(msg: "读取true值出错"), json: .bool(true))
}

/// tools
func readJsonCharacters(str: String, index: Int, characters: [Character], error: ParserError, json: JSON) throws -> (JSON, Int) {
    var ind = index
    var result = true

    for i in 0 ..< characters.count {
        if str.count <= ind || str[ind] != characters[i] {
            result = false
            break
        }
        ind += 1
    }

    // 后续字符完全匹配
    if result {
        return (json, ind)
    }
    throw error
}
```

## string

- 初始一个元素为 Character 的数组 value
- 遇到字符是转义符`\`， value 加入 `\`, 如果下一个字符存在，判断是否是 `u`，如果是的话，循环后续 4 个字符组成 unicode。否者报错
- 如果遇到是 `"`，跳出循环，将读取的 value 转换为字符串，返回组成的字符串和当前读取下一个字符的下标
- 如果读取的字符是 `\r` 或者 `\n`， 报错
- 其他，直接添加到 value 中。

```swift
/// 读取字符串,index 是从 ” 后开始
func readString(str: String, index: Int) throws -> (String, Int) {
    var ind = index
    var value: [Character] = []

    while ind < str.count {
        var c = str[ind]
        ind += 1

        if c == "\\" { // 判断是否是转义字符
            value.append("\\")
            if ind >= str.count {
                throw ParserError(msg: "未知结尾")
            }

            c = str[ind]
            ind += 1
            value.append(c)

            if c == "u" {
                try (0 ..< 4).forEach { _ in

                    c = str[ind]
                    ind += 1

                    if isHex(c: c) {
                        value.append(c)
                    } else {
                        throw ParserError(msg: "不是有效的unicode 字符")
                    }
                }
            }
        } else if c == "\"" {
            break
        } else if c == "\r" || c == "\n" {
            throw ParserError(msg: "传入的JSON字符串内容不允许有换行")
        } else {
            value.append(c)
        }
    }
    return (String(value), ind)
}
```

## number

读取数字字符，直到非数字字符位置，判断这些字符是否包含 `.`，如果包含，则转换为 double 数据，否则转换为 int 数据

```swift
/// 读取数字，index 是下个字符的序号
func readJsonNumber(str: String, index: Int) throws -> (JSON, Int) {
    var ind = index - 1 // 开头的数字字符
    var value: [Character] = []

    // 是否是数字字符
    while ind < str.count && isNumber(c: str[ind]) {
        value.append(str[ind])
        ind += 1
    }

    /// 如果包含小数点，转化为 double
    if value.contains(".") {
        if let v = Double(String(value)) {
            return (.double(v), ind)
        }
    } else {
        if let v = Int(String(value)) {
            return (.int(v), ind)
        }
    }
    throw ParserError(msg: "不能识别的数字类型\(ind)")
}
```

## object

- 读取到 `{` 后，需要先将 `{` 后可能的空格去掉，去掉空格后，判断是否为 `"`， 如果不是，报错
- 继续读取 `"` 后面的字符直到下一个`"`位置，将这些字符作为 key。
- 去除引号 `"` 后的空白字符后，判断下个字符是否为 `:`，是的话，读取 `:` 的非空格，调用 `readElement` 函数。
- 读取完成后，读取到后续的非空字符，如果是 `}`, 说明读取完成；如果是 `,`，循环读取操作

```swift
/// 解析JSON字符串为对象结构, index 代表下一个字符的下标
func parseObject(str: String, index: Int) throws -> (JSON, Int) {
    var ind = index
    var obj: [String: JSON] = [:]

    repeat {
        /// 读取到非空字符
        ind = readToNonBlankIndex(str: str, index: ind)
        if str[ind] != "\"" {
            throw ParserError(msg: "不能识别的字符“\(str[ind])”")
        }
        ind += 1

        // 读取字符串
        let (name, ids) = try readString(str: str, index: ind)
        ind = ids

        if obj.keys.contains(name) {
            throw ParserError(msg: "已经存在key: \(name)")
        }
        ind = readToNonBlankIndex(str: str, index: ind)

        if str[ind] != ":" {
            throw ParserError(msg: "不能识别字符:\(str[ind])")
        }

        ind += 1
        ind = readToNonBlankIndex(str: str, index: ind)

        /// 读取下一个 element
        let next = try readElement(str: str, index: ind)
        ind = next.1
        obj[name] = next.0

        /// 读取到非空白字符
        ind = readToNonBlankIndex(str: str, index: ind)

        let ch = str[ind]
        ind += 1
        if ch == "}" { break }
        if ch != "," {
            throw ParserError(msg: "不能识别的字符")
        }
    } while true

    return (.object(obj), ind)
}
```

## array

数组的解析跟对象的解析还是比较相像的，去除空格，`,` 用来分割每个元素。如果遇到字符`]`，代表此次的数组字符串解析完毕。

```swift
/// 解析JSON字符串为数组结构
func parseArray(str: String, index: Int) throws -> (JSON, Int) {
    var arr: [JSON] = []
    var ind = index
    repeat {
        ind = readToNonBlankIndex(str: str, index: ind)
        /// 读取下一个element
        let ele = try readElement(str: str, index: ind)
        ind = ele.1
        arr.append(ele.0)
        /// 读取非空白字符
        ind = readToNonBlankIndex(str: str, index: ind)

        let ch = str[ind]
        ind += 1
        if ch == "]" { break }
        if ch != "," {
            throw ParserError(msg: "不能识别的字符")
        }
    } while true

    return (.array(arr), ind)
}
```

## readElement

通过读取的首字母来调用各自的解析函数：

```swift
func readElement(str: String, index: Int) throws -> (JSON, Int) {
    var ind = index
    let c = str[ind]
    ind += 1
    switch c {
    case "[":
        return try parseArray(str: str, index: ind)
    case "{":
        return try parseObject(str: str, index: ind)
    case "\"":
        let (str, ids) = try readString(str: str, index: ind)
        return (.string(str), ids)
    case "t":
        return try readJsonTrue(str: str, index: ind)
    case "f":
        return try readJsonFalse(str: str, index: ind)
    case "n":
        return try readJsonNull(str: str, index: ind)
    case _ where isNumber(c: c):
        return try readJsonNumber(str: str, index: ind)
    default:
        throw ParserError(msg: "未知 element: \(c)")
    }
}
```

## 测试

```swift

let str = "{  \"a\":[8,-9,+10],\"c\":{\"temp\":true,\"say\":\"hello\",\"name\":\"world\"},   \"b\":10.2}"

print("json 字符串::\n\(str) \n")

do {
    // 解析 json 字符串
    let result = try parseJson(str: str)
    print("\n返回结果::")
    // 格式化 json 字符串
    print(prettyJson(json: result))
} catch  {
    print(error)
}
```

结果显示：

```swift
json 字符串::
{  "a":[8,-9,+10],"c":{"temp":true,"say":"hello","name":"world"},   "b":10.2}


返回结果::
{
    "b":10.2,
    "a":[
        8,
        -9,
        10
    ],
    "c":{
        "name":"world",
        "say":"hello",
        "temp":true
    }
}
```

## 总结

从头读取到字符的末尾，通过读取首字符，按照 json 的数据格式规则，完成对应格式的解析。对象和数组的解析中用到了递归。解析难度在于是否清晰 json 的数据规则，以及字符串下标的移动。

第一版本的 json 解析已完成，如若有疑问，或者想加入 Swift 微信群，请关注微信公众号：**OldBirds**
