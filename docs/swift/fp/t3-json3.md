---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Swift 码了个 JSON 解析器(三)'
date: 2021-4-11
tags:
- swift
- 函数式编程
- json
---


我们将开发一个小而完整的 Swift 库，这个库用于处理和序列化 JSON 数据。

> 项目源码：[https://github.com/swiftdo/json](https://github.com/swiftdo/json)

在上文 [Swift 码了个 JSON 解析器(二)]中，我们将 json 字符串成功解析为 JSON 数据。本文是《Swift 码了个 JSON 解析器》系列的第三篇，我们将优化上文的解析器，即我们 Parser2 版本。

最近在学习编译原理的相关知识，所以将从编译的角度去理解这个过程。在编译器前端一般会有三个步骤：

* 词法分析：把程序分割成一个个 Token 的过程，可以通过构造有限自动机来实现。
* 语法分析：把程序的结构识别出来，并形成一棵便于由计算机处理的抽象语法树(AST)。可以用递归下降的算法来实现。
* 语义分析：消除语义模糊，生成一些属性信息，让计算机能够依据这些信息生成目标代码。



## 实现概要

JSON 解析器从本质上来说就是根据 JSON 文法规则创建的状态机，输入是 json 字符串，输出是 JSON 对象。上文[《Swift 码了个 JSON 解析器(二)》](https://oldbird.run/swift/fp/t3-json2.html)我们就是从第一个字符开始解析，然后根据json 的语法解析成 JSON。但是在本文，这个过程将划分为两个阶段：词法分析和语法分析。

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




## 生成 JSON 