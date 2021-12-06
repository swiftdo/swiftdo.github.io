# COW(Copy-On-Write)

Swift 有值类型和引用类型，而值类型在被赋值或被传递给函数时是会被拷贝的。在写代码时，这些值类型每次赋值传递都是会重新在内存里拷贝一份吗？

答案是否定的。如有个包含上千个元素的数组，然后你把它 copy 一份给另一个变量，那么 Swift 就要拷贝所有的元素，即使这两个变量的数组内容完全一样，这对它性能来说是多么糟糕。

在 [Structures and Enumerations Are Value Types](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html#//apple_ref/doc/uid/TP40014097-CH13-ID82) 明确的提到了对其实现做了优化，可避免不必要的复制：

> Collections defined by the standard library like arrays, dictionaries, and strings use an optimization to reduce the performance cost of copying. Instead of making a copy immediately, these collections share the memory where the elements are stored between the original instance and any copies. If one of the copies of the collection is modified, the elements are copied just before the modification. The behavior you see in your code is always as if a copy took place immediately.

使用了 COW, 当将两个变量指向同一数组时，他们指向相同的底层数据。当修改第二个变量的时候，Swift 才会去复制一个副本，第一个不会改变。

- 通过延迟复制操作，直到实际使用到的时候才去复制，以此确保没有浪费的工作。
- 使得值类型可以被多次复制而无需耗费多余的内存，只有在变化的时候才会增加开销。因此内存的使用更加高效。

下面我们一起来验证下上面所说：

## 基本类型(Int、String 等):

```swift
import Foundation

var num1 = 101
var num2 = num1
print(address(of: &num1)) //0x108074090
print(address(of: &num2)) //0x108074098

var str1 = "oldbirds"
var str2 = str1
print(address(of: &str1)) //0x1080740a0
print(address(of: &str2)) //0x1080740b0

//打印内存地址
func address(of object: UnsafeRawPointer) -> String {
    let addr = Int(bitPattern: object)
    return NSString(format: "%p", addr) as String
}
```

## 集合类型

```swift
var arr1 = [1,2,3,4,5]
var arr2 = arr1
print(address(of: &arr1)) //0x600000e55510
print(address(of: &arr2)) //0x600000e55510

arr2[2] = 4
print(address(of: &arr1)) //0x600000e55510
print(address(of: &arr2)) //0x600000e55dd0
```

## 自定义类型

COW 是特别添加到 Swift 数组和字典的功能，自定义的数据类型不会自动实现。

```swift
struct Person {
    var name = ""
}
var p1 = Person(name: "oldbirds")
print(address(of: &p1)) // 0x101ab32d0
var p2 = p1
print(address(of: &p2)) // 0x101ab32e0
p2.name = "like"
print(address(of: &p2)) // 0x101ab32e0
```

上述代码可以看出，虽然将 p1 赋值给了 p2，但它俩的内存地址依然是不同的。由此可见自定义的结构体并不能支持 Copy-on-Write。

## Copy-on-Write 如何实现的

你可以在 [OptimizationTips.rst](https://github.com/apple/swift/blob/main/docs/OptimizationTips.rst#id29) 里发现如下代码:

```swift
final class Ref<T> {
  var val : T
  init(_ v : T) {val = v}
}

struct Box<T> {
    var ref : Ref<T>
    init(_ x : T) { ref = Ref(x) }

    var value: T {
        get { return ref.val }
        set {
          if (!isKnownUniquelyReferenced(&ref)) {
            ref = Ref(newValue)
            return
          }
          ref.val = newValue
        }
    }
}
```

`isKnownUniquelyReferenced`用来检查某个实例是不是唯一的引用。

该例子显示了如何用一个引用类型去实现一个拥有 Copy-on-Write 特性的泛型值类型 T。当你调用 set 的时候判断是否有多个 reference，如果是多个 reference 则进行拷贝，反之则不会。

```swift
struct Persion {
    var name = "oldbirds"
}
let oldbirds = Persion()
var box = Box(oldbirds)
var box2 = box // box2 与 box 共享 box.ref
print(box.value.name) // oldbirds
print(box2.value.name) // oldbirds

box2.value.name = "like" // box2 会创建新的 ref
print(box.value.name) // oldbirds
print(box2.value.name) // like
```

Swift 标准库中大量使用了这种技术。

有了上面的技术理论，我们一起来运用 COW 技术：

```swift
import UIKit
import PlaygroundSupport

final class Box<A> {
  var value: A
  init(_ value: A) {
    self.value = value
  }
}

/// 高斯模糊
struct GaussianBlur {
    private var boxedFilter: Box<CIFilter> = {
        var filter = CIFilter(name: "CIGaussianBlur", parameters: [:])!
        filter.setDefaults()
        return Box(filter)
    }()

    private var filter: CIFilter {
        get { boxedFilter.value }
        set { boxedFilter = Box(newValue) }
    }

    private var filterForWriting: CIFilter {
        mutating get {
          if !isKnownUniquelyReferenced(&boxedFilter) {
            filter = filter.copy() as! CIFilter
            print("😄拷贝filter，\(address(of: &self))")
          } else {
            print("共享filter, \(address(of: &self))")
          }
          return filter
        }
    }

    var inputImage: CIImage {
        get { return filter.value(forKey: kCIInputImageKey) as! CIImage }
        set { filterForWriting.setValue(newValue, forKey: kCIInputImageKey) }
    }

    var radius: Double {
        get { return filter.value(forKey: kCIInputRadiusKey) as! Double }
        set { filterForWriting.setValue(newValue, forKey: kCIInputRadiusKey) }
    }

    var outputImage: CIImage? {
      return filter.outputImage
    }
}

let view = UIView(frame: CGRect(x: 0, y: 0, width: 320, height: 660))

let imgUrl = Bundle.main.url(forResource: "6924717", withExtension: "jpeg")!
let beginImage = CIImage(contentsOf: imgUrl)!
var gaussianBlur = GaussianBlur()
gaussianBlur.radius = 5 // 共享
gaussianBlur.inputImage = beginImage // 共享
let filterImg = UIImageView(frame: CGRect(x: 10, y: 10, width: 300, height: 200))
filterImg.image = UIImage(ciImage: gaussianBlur.outputImage!)
view.addSubview(filterImg)

print("\n")
var gaussianBlur2 = gaussianBlur
gaussianBlur2.radius = 10
gaussianBlur2.inputImage = beginImage
let filterImg2 = UIImageView(frame: CGRect(x: 10, y: 220, width: 300, height: 200))
filterImg2.image = UIImage(ciImage: gaussianBlur2.outputImage!)
view.addSubview(filterImg2)
PlaygroundPage.current.liveView = view

print("\n")
var gaussianBlur3 = gaussianBlur
gaussianBlur3.radius = 2
let filterImg3 = UIImageView(frame: CGRect(x: 10, y: 440, width: 300, height: 200))
filterImg3.image = UIImage(ciImage: gaussianBlur3.outputImage!)
view.addSubview(filterImg3)
PlaygroundPage.current.liveView = view

print("OK")
```

输出结果:

![cart](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e65062e105f4a34a63025d1a1355baa~tplv-k3u1fbpfcp-watermark.image)

```swift
共享filter, 0x107547678
共享filter, 0x107547678
共享filter, 0x107547678
共享filter, 0x107547678

😄拷贝filter，0x107547688
共享filter, 0x107547688
共享filter, 0x107547688
共享filter, 0x107547688

😄拷贝filter，0x107547698
共享filter, 0x107547698
OK
```

## 总结：

- Copy-on-Write 是一种用来优化占用内存大的值类型的拷贝操作的机制。
- 对于 Int，Double，String 等基本类型的值类型，它们在赋值的时候就会发生拷贝。
- 对于 Array、Dictionary、Set 类型，当它们赋值的时候不会发生拷贝，只有在修改的之后才会发生拷贝。
- 对于自定义的数据类型不会自动实现 COW，可按需实现。
