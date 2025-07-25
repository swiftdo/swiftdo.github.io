---
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05T00:00:00.000Z
tags:
  - swift
  - ios
title: lazy
createTime: 2024/08/02 09:19:27
permalink: /swift/xxi4q9al/
---

# 性能优化利器 Lazy

## Lazy initialization

在用**OC**开发**iOS**的时代，相信你会看到很多懒加载的代码：

```swift
// 以懒加载一个UIImageView控件为例
- (UIImageView *)imageView
{
    if (!_imageView) {
        _imageView = [[UIImageView alloc]init];
    }
    return _imageView;
}
```

**懒加载就是在第一次访问某个属性时，要判断这个属性是否已经被初始化，如果已经初始化则直接返回，若没有初始化则进行初始化**。这样可以把这个属性延迟初始化，把它和包含它的对象的初始化分隔开，来达到提升性能的目的。

懒加载的好处：

- 不必将创建的代码全部写在类似`- (void)viewDidLoad` 方法中，增加了代码的可读性;
- 只有到真正需要资源的时候才回去加载,节省了内存空间;
- 当收到内存警告是, `didReceviewMemoryWarning`方法中会释放资源，如果是懒加载的话，以后再次用到了该属性，可以再次加载出来。

Swift 也能实现类似的懒加载：

```swift
private var _imageView: UIImageView?
var imageView: UIImageView {
    get {
      if _imageView == nil {
        _imageView = UIImageView()
      }
      return _imageView!
    }
    set {
      _imageView = newValue
    }
}
```

用这种方式，虽然我们的需求，但是代码实在太多，太不 Swift style 了。`lazy` 闪亮登场。

在变量属性前加`lazy`关键字来指定延迟加载：

```swift
lazy var imageView: UIImageView = UIImageView()
```

使用`lazy`关键字，我们用更少代码实现了相同的行为。

当然如果我们要给 imageView 设置更多的属性，我们可以通过 **闭包进行初始化**：

```swift
lazy var imageView: UIImageView = {
    let imgView = UIImageView()
    imageView.contentMode = .scaleAspectFill
    return imageView
}()
```

在使用`lazy`修饰属性时，**必须声明属性是变量**。

![-w747](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe0c127adcf44d5da7203de40263e2ea~tplv-k3u1fbpfcp-zoom-1.image)

对于 lazy 的初始化，我们就讲到这里。但是作为一个性能优化利器，文章岂能止步于此。

## Lazy sequences

在 Swift 标准库中，`SequenceType` 和 `CollectionType` 协议都有个叫 `lazy` 的计算属性，它能给我们返回一个特殊的 `LazySequence` 或者 `LazyCollection`。

```swift
/// Augment `self` with lazy methods such as `map`, `filter`, etc.
extension Collection {
    public var lazy: LazyCollection<Self> { get }
}

func lazy<S : SequenceType>(s: S) -> LazySequence<S>

func lazy<S : CollectionType where S.Index : RandomAccessIndexType>(s: S)
                -> LazyRandomAccessCollection<S>

func lazy<S : CollectionType where S.Index : BidirectionalIndexType>(s: S)
                -> LazyBidirectionalCollection<S>

func lazy<S : CollectionType where S.Index : ForwardIndexType>(s: S)
                -> LazyForwardCollection<S>
```

这些类型只能被用在 map，flatMap，filter 这样的高阶函数中，而且是以一种惰性的方式。在某些情况下这么做也对性能会有不小的帮助，例如，直接使用 map 时：

```swift
func increment(x: Int) -> Int {
  print("访问：\(x)")
  return x+1
}

let array = Array(0..<10)

print("✅结果:")
let incArr = array.map(increment)
print(incArr[0], incArr[5])


let incArray = array.lazy.map(increment)
print("\n✅使用lazy属性的结果:")
print(incArray[0], incArray[5])
```

输出的结果：

```swift
✅结果:
访问：0
访问：1
访问：2
访问：3
访问：4
访问：5
访问：6
访问：7
访问：8
访问：9
1 6

✅使用lazy属性的结果:
访问：0
访问：5
1 6
```

上面这段代码：

- 访问`incArr`的值之前，所有的输出值都被计算出来了！即使我们只读了[0]和[5]这两个条目，但其他的条目都被访问
- 访问`incArray`，因为使用了 lazy，仅就访问了[0]和[5]两条条目，不关心的条目没有被访问。

使用`lazy`后算量明显降低太多。如果 array 的体量更大，且 `increment` 更复杂，那么节省的算量就更明显了。

**惰性计算是函数式编程语言的一个特性**，有兴趣不防深入了解下。

## Lazy View

与没有“Lazy”的`HStack/VStack`的区别在于**按需加载**，例如，如果您尝试在`HStack`或`VStack`上显示 10000 个文本，则内存会立即激增，但是`LazyHStack`或`LazyVStack` 只加载屏幕上显示文本的内存。

当然在 SwiftUI 2 还新增了类似懒加载的 View：`LazyHGrid/LazyVGrid`

## 注意：

> Additionally, be aware that the lazy keyword doesn’t perform any thread synchronization. If multiple threads access a lazy property at the same time before the value has been computed, it’s possible the computation could be performed more than once, along with any side effects the computation may have.

lazy 修饰的变量是在第一次访问的时候初始化的，如果多线程访问这个 Lazy 变量，将会导致不可预知的结果：

- 有可能不同线程生成不同的 lazy 变量。
- 有可能一个线程初始化还没完成,另外一个线程就返回了这个变量。
