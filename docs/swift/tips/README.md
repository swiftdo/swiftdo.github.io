---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Tips'
date: 2020-08-17
tags:
- swift
- tips
---

## 支持值的类型可能为 String 和 Int 的 Codale 解析

```swift
enum MetadataType: Codable {
  case int(Int)
  case string(String)

  init(from decoder: Decoder) throws {
    let container = try decoder.singleValueContainer()
    do {
      self = try .int(container.decode(Int.self))
    } catch DecodingError.typeMismatch {
      do {
        self = try .string(container.decode(String.self))
      } catch DecodingError.typeMismatch {
        throw DecodingError.typeMismatch(MetadataType.self, DecodingError.Context(codingPath: decoder.codingPath, debugDescription: "Encoded payload not of an expected type"))
      }
    }
  }

  func encode(to encoder: Encoder) throws {
    var container = encoder.singleValueContainer()
    switch self {
    case .int(let int):
      try container.encode(int)
    case .string(let string):
      try container.encode(string)
    }
  }
}

struct GeneralProduct: Codable {
  var price:Double?
  var id:MetadataType? // 使用的话
  var name:String?

  private enum CodingKeys: String, CodingKey {
    case price = "p"
    case id = "i"
    case name = "n"
  }

  init(price:Double? = nil, id: MetadataType? = nil, name: String? = nil) {
    self.price = price
    self.id = id
    self.name = name
  }
}
```


### 扩展：数据解析精度问题

```swift

enum DecimalType: Codable {
    case decimal(Decimal)
    case string(String)

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        do {
          self = try .decimal(container.decode(Decimal.self))
        } catch DecodingError.typeMismatch {
          do {
            self = try .string(container.decode(String.self))
          } catch DecodingError.typeMismatch {
            throw DecodingError.typeMismatch(MetadataType.self, DecodingError.Context(codingPath: decoder.codingPath, debugDescription: "Encoded payload not of an expected type"))
          }
        }
    }

    func encode(to encoder: Encoder) throws {
    var container = encoder.singleValueContainer()
        switch self {
        case .decimal(let decimal):
          try container.encode(decimal)
        case .string(let string):
          try container.encode(string)
        }
    }
    
    var showString: String {
        switch self {
        case .decimal(let decimal):
            return decimal.description
        case .string(let string):
            return string
        }
    }
}

struct TestModel : Codable{
    
    var price: DecimalType
    var name: String
}

func tryParse(string: String) throws -> String? {
    if let jsonData = string.data(using: .utf8) {
        let decoder = JSONDecoder()
        let result = try decoder.decode(TestModel.self, from: jsonData)
        return result.price.showString
    } else {
        return nil;
    }
}

func tryPrint() throws {

    guard let tmpA = try tryParse(string: "{\"name\":\"xiaoming\",\"price\":10.98}"), let tmpB = try tryParse(string: "{\"name\":\"xiaoming\",\"price\":\"11.11\"}") else {
        return
    }
    print("double: \(tmpA), string: \(tmpB)")
}


try tryPrint() // double: 10.98, string: 11.11
```

