---
sitemap:
  exclude: false
  changefreq: hourly
title: Swift 码了个 JSON 解析器(三)
date: 2021-4-11
tags:
  - swift
  - 函数式编程
  - json
createTime: 2024/08/02 09:19:27
permalink: /swift/xzq38iwm/
---


我们将开发一个小而完整的 Swift 库，这个库用于处理和序列化 JSON 数据。

> 项目源码：[https://github.com/swiftdo/json](https://github.com/swiftdo/json)

在上文 [Swift 码了个 JSON 解析器(二)](https://oldbird.run/swift/fp/t3-json2.html)中，我们将 json 字符串成功解析为 JSON 数据。本文是《Swift 码了个 JSON 解析器》系列的第三篇，我们将优化上文的解析器，让其解析过程更加清晰。

最近在学习编译原理的相关知识，所以将从编译的角度去理解这个过程。在编译器前端一般会有三个步骤：

* 词法分析：把程序分割成一个个 Token 的过程，可以通过构造有限自动机来实现。
* 语法分析：把程序的结构识别出来，并形成一棵便于由计算机处理的抽象语法树(AST)。可以用递归下降的算法来实现。
* 语义分析：消除语义模糊，生成一些属性信息，让计算机能够依据这些信息生成目标代码。

## 实现概要

JSON 解析器从本质上来说就是根据 JSON 文法规则创建的状态机，输入是 json 字符串，输出是 JSON 对象。上文[《Swift 码了个 JSON 解析器(二)》](https://oldbird.run/swift/fp/t3-json2.html)我们就是从第一个字符开始解析，然后根据 json 的语法解析成 JSON。但是在本文，这个过程将划分为两个阶段：词法分析和语法分析。

在词法分析阶段，目标是将字符串解析成一组 Token 序列。比如：

```json
{
    "name": "oldbirds",
    "level": 8
}
```

经过词法分析会得到一组 Token：

`{` 、`name`、`:` 、`oldbirds`、`,`、`level`、`:`、`8`、`}`

而在语法阶段则是检查输入的 Token 序列所构成的 json 格式是否合法。因为 json 的解析较为容易，这一步我们可以将语法树直接理解为要生成的 JSON。

## 完成词法解析

**词法分析的目标是按照语法规则将 JSON 字符串解析成 Token 流**。

我们首先需要定义 Token 的类型。当词法解析器读入某个词，且这个词符合 json 所规定的数据类型时，词法分析器人为这个词符合构词规则，就会生成相应的 Token。
所以通过 json 的定义，我们可以归纳出如下 Token 类型：

```swift
enum JsonToken {
    case objBegin // {
    case objEnd   // }
    case arrBegin // [
    case arrEnd   // ]
    case null    // null
    case number(String)   // 1 | -2 | 3.0
    case string(String)   // "a"
    case bool(String)     // true false
    case sepColon // :
    case sepComma // ,
}
```

接下来我们将实现 json 字符串转化为 Token 流。

定义好了 Token 类，接下来我们需要实现词法解析器：

```swift
/// 分词
struct JsonTokenizer {
    
    private var input: String
    
    private var currentIndex: String.Index
    
    init(string: String) {
        self.input = string
        self.currentIndex = string.startIndex
    }
    
    /// 当前字符
    private var current: Character? {
        guard currentIndex < input.endIndex else {return nil}
        return input[currentIndex]
    }
    
    /// 移动下标
    private mutating func advance() {
        currentIndex = input.index(after: currentIndex)
    }
    
    /// 回到上一个
    private mutating func back() {
        currentIndex = input.index(before: currentIndex)
    }
    
    /// 生成token流
    mutating func nextToken() throws -> JsonToken? {
        // 过滤掉空格
        scanSpaces()
        guard let ch = current else { return nil }    
        switch ch {
        case "{":
            advance()
            return JsonToken.objBegin
        case "}":
            advance()
            return JsonToken.objEnd
        case "[":
            advance()
            return JsonToken.arrBegin
        case "]":
            advance()
            return JsonToken.arrEnd
        case ",":
            advance()
            return JsonToken.sepComma
        case ":":
            advance()
            return JsonToken.sepColon
        case "n":
            let _ = try scanMatch(string: "null")
            advance()
            return JsonToken.null
        case "t":
            let str = try scanMatch(string: "true")
            return JsonToken.bool(str)
        case "f":
            let str = try scanMatch(string: "false")
            return JsonToken.bool(str)
        case "\"":
            let str = try scanString()
            advance()
            return JsonToken.string(str)
        case _ where isNumber(c: ch):
            let str = try scanNumbers()
            return JsonToken.number(str)
        default:
              throw JsonParserError(msg: "无法解析的字符:\(ch) - \(currentIndex)")
        }
    }
    
    private mutating func peekNext() -> Character? {
        advance()
        return current
    }
    
    mutating func scanString() throws -> String {
        var ret:[Character] = []
        
        repeat {
            guard let ch = peekNext() else {
                throw JsonParserError(msg: "scanString 报错，\(currentIndex) 报错")
            }
            switch ch {
            case "\\": // 处理转义字符
                guard let cn = peekNext(), !isEscape(c: cn) else {
                    throw JsonParserError(msg: "无效的特殊类型的字符")
                }
                ret.append("\\")
                ret.append(cn)
                /// 处理 unicode 编码
                if cn == "u" {
                    try ret.append(contentsOf: scanUnicode())
                }
            case "\"": // 碰到另一个引号，则认为字符串解析结束
                return String(ret)
            case "\r", "\n": // 传入JSON 字符串不允许换行
                throw JsonParserError(msg: "无效的字符\(ch)")
            default:
                ret.append(ch)
            }
        } while (true)
    }
    
    mutating func scanUnicode() throws -> [Character] {
        var ret:[Character] = []
        for _ in 0..<4 {
            if let ch = peekNext(), isHex(c: ch) {
                ret.append(ch)
            } else {
                throw JsonParserError(msg: "unicode 字符不规范\(currentIndex)")
            }
        }
        return ret
    }
    
    mutating func scanNumbers() throws -> String {
        let ind = currentIndex
        while let c = current, isNumber(c: c) {
            advance()
        }
        if currentIndex != ind {
            return String(input[ind..<currentIndex])
        }
        throw JsonParserError(msg: "scanNumbers 出错:\(ind)")
    }
    
    /// 跳过空格
    mutating func scanSpaces() {
        var ch = current
        while ch != nil && ch == " " {
            ch = peekNext()
        }
    }
    
    mutating func scanMatch(string: String) throws -> String {
        return try scanMatch(characters: string.map { $0 })
    }
    
    mutating func scanMatch(characters: [Character]) throws -> String {
        let ind = currentIndex
        var isMatch = true
        for index in (0..<characters.count) {
            if characters[index] != current {
                isMatch = false
                break
            }
            advance()
        }
        if (isMatch) {
            return String(input[ind..<currentIndex])
        }
        throw JsonParserError(msg: "scanUntil 不满足 \(characters)")
    }
    
    func isEscape(c: Character) -> Bool {
        // \" \\ \u \r \n \b \t \f
        return ["\"", "\\", "u", "r", "n", "b", "t", "f"].contains(c)
    }
    
    /// 判断是否是数字字符
    func isNumber(c: Character) -> Bool {
        let chars:[Character: Bool] = ["-": true, "+": true, "e": true, "E": true, ".": true]
        if let b = chars[c], b {
            return true
        }
        
        if(c >= "0" && c <= "9") {
            return true
        }
        
        return false;
    }

    /// 判断是否为 16 进制字符
    func isHex(c: Character) -> Bool {
        return c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F"
    }
}
```

上面的处理逻辑，跟[《Swift 码了个 JSON 解析器(二)》](https://oldbird.run/swift/fp/t3-json2.html)是一样的，这里不进行过多介绍了。

## 完成语法解析

语法分析过程以词法分析阶段解析出的 `Token` 序列作为输入，输出 `JSON Object` 或 `JSON Array`。


```swift
// 语法解析
struct JsonParser {
    private var tokenizer: JsonTokenizer
    
    private init(text: String) {
        tokenizer = JsonTokenizer(string: text)
    }
    
    static func parse(text: String) throws -> JSON? {
        var parser = JsonParser(text: text)
        return try parser.parse()
    }

    private mutating func parse() throws  -> JSON? {
        guard let token = try tokenizer.nextToken() else {
            return nil
        }
        switch token {
            // 如果 [
        case .arrBegin:
            return try JSON(parserArr())

            // 如果 {
        case .objBegin:
            return try JSON(parserObj())

        default:
            return nil
        }
    }
}
```

语法分析器的实现的核心就是 `parserArr` 和 `parserObj`。

在 `parserArr` 中，通过 `.sepComma` 分割每个元素，如果遇到 `.arrEnd`，说明 array 的读取完成，返回结果。而每个元素是一个JSON 数据，可以采用递归处理。

```swift
private mutating func parserArr() throws -> [JSON] {
    var arr: [JSON] = []
    repeat {
        guard let ele = try parseElement() else {
            throw ParserError(msg: "parserArr 解析失败")
        }

        /// 作为元素
        arr.append(ele)
        
        guard let next = try tokenizer.nextToken() else {
            throw ParserError(msg: "parserArr 解析失败")
        }
        
        /// 如果是 ], 说明 结束
        if case JsonToken.arrEnd = next {
            break
        }
        
        /// 如果下一个元素不是 `,`, 那么说明不符合 json array 的定义，抛出异常
        if JsonToken.sepComma != next {
            throw ParserError(msg: "parserArr 解析失败")
        }
        
    } while true

    return arr
}
```

`parserObj` 这个方法，也是通过`.sepComma` 分隔，当读取到 `.objEnd` 代表完成 object 的解析。与 parserArr 的区别是，每个元素是键值对。

```swift
private mutating func parserObj() throws -> [String: JSON] {
    var obj: [String: JSON] = [:]

    repeat {
        
        guard let next = try tokenizer.nextToken(), case let .string(key) = next else {
            throw ParserError(msg: "parserObj 错误, key 不存在")
        }
        
        if obj.keys.contains(key) {
            throw ParserError(msg: "parserObj 错误, 已经存在key: \(key)")
        }
        
        guard let comma = try tokenizer.nextToken(), case JsonToken.sepColon = comma else {
            throw ParserError(msg: "parserObj 错误，：不存在")
        }
        
        guard let value = try parseElement() else {
            throw ParserError(msg: "parserObj 错误，值不存在")
        }
        
        obj[key] = value
        
        guard let nex = try tokenizer.nextToken() else {
            throw ParserError(msg: "parserObj 错误， 下一个值不存在")
        }
        
        if case JsonToken.objEnd = nex {
            break
        }
        
        if JsonToken.sepComma != nex {
            throw ParserError(msg: "parserObj 错误，, 不存在")
        }
    } while true

    return obj
}
```

根据 JSON 的定义，将一个或者多个 Token 解析成对应的 JSON 类型。

```swift
private mutating func parseElement() throws -> JSON? {
    guard let nextToken = try tokenizer.nextToken() else {
        return nil
    }
    
    switch nextToken {
    case .arrBegin:
        return try JSON(parserArr())
    case .objBegin:
        return try JSON(parserObj())
    case .bool(let b):
        return .bool(b == "true")
    case .null:
        return .null
    case .string(let str):
        return .string(str)
    case .number(let n):
        if n.contains("."), let v = Double(n) {
            return .double(v)
        } else if let v = Int(n) {
            return .int(v)
        } else {
            throw ParserError(msg: "number 转换失败")
        }
    default:
        throw ParserError(msg: "未知 element: \(nextToken)")
    }
}
```

## 测试

完成

```swift
let str = "{  \"a\":[8,-9,+10],\"c\":{\"temp\":true,\"say\":\"hello\",\"name\":\"world\"},   \"b\":10.2}"

/// 通过 paser2.0 进行解析
do {
    if let result2 = try JsonParser.parse(text: str) {
        print("\n\n✅ Parser2.0 返回结果：")
        print(prettyJson(json: result2))
    } else {
        print("\n\n❎ Parser2 解析为空")
    }
} catch {
    print("\n\n❎ Paser2.0 error:\(error)")
}
```

结果显示：

```json
✅ Parser2.0 返回结果：
{
    "a":[
        8,
        -9,
        10
    ],
    "c":{
        "name":"world",
        "say":"hello",
        "temp":true
    },
    "b":10.2
}
```

## 总结

通过词法分析，和语法分析，将解析任务划分了2个阶段，大幅提升了代码清晰度。词法解析隐藏了下标的移动，以及过滤无用的字符，传递给语法解析都是有意义的数据。而语法解析只负责 JSON 的识别，无需关注游标的移动。

对比上篇的解析步骤，本文的方法无疑是更具条理的。虽然性能上会弱一些，但明确清晰的过程更让人推崇，对于类似解析，完全可以套用。