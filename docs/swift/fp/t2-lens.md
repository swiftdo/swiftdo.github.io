---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Swift Lens'
date: 2021-3-31
tags:
- swift
- 函数式编程
---

Lens理解为不可变数据结构的 Getter 跟 Setter.


Lens的实现核心为 Functor（函子）。

```swift
struct Point {
    let x: CGFloat
    let y: CGFloat
}

let mPoint = Point(x: 2, y: 3)
mPoint.x = 5 // Error!
```

“改变”对于不可变数据来说其实就是**以原数据为基础去构建一个新的数据**，所有的这些“改变”都不是发生在原数据身上：

```swift
// Old
let aPoint = Point(x: 2, y: 3)
// New
let bPoint = Point(x: aPoint.x, y: aPoint.y + 2)
```

但是如果数据的层级结构比较复杂，这种对不可变数据的改变将引来灾难：

```swift
// 代表线段的结构体
struct Line {
    let start: Point
    let end: Point
}

// 线段A
let aLine = Line(
    start: Point(x: 2, y: 3),
    end: Point(x: 5, y: 7)
)

// 将线段A的起点向上移动2个坐标点，得到一条新的线段B
let bLine = Line(
    start: Point(x: aLine.start.x, y: aLine.start.y),
    end: Point(x: aLine.end.x, y: aLine.end.y - 2)
)

// 将线段B向右移动3个坐标点，得到一条新的线段C
let cLine = Line(
    start: Point(x: bLine.start.x + 3, y: bLine.start.y),
    end: Point(x: bLine.end.x + 3, y: bLine.end.y)
)

// 使用一条线段和一个端点确定一个三角形
struct Triangle {
    let line: Line
    let point: Point
}

// 三角形A
let aTriangle = Triangle(
    line: Line(
      start: Point(x: 10, y: 15),
      end: Point(x: 50, y: 15)
    ),
    point: Point(x: 20, y: 60)
)

// 改变三角形A线段的末端点，让其成为一个等腰三角形B
let bTriangle = Triangle(
    line: Line(
        start: Point(x: aTriangle.line.start.x, y: aTriangle.line.start.y),
        end: Point(x: 30, y: aTriangle.line.end.y)
    ),
    point: Point(x: aTriangle.point.x, y: aTriangle.point.y)
)
```

Lens 的诞生就是为了解决这种复杂的不可变数据的“修改”问题~


## Lens的定义：

```swift
typealias Lens<Subpart, Whole> = (@escaping (Subpart) -> (Subpart)) -> (Whole) -> Whole
```

其中 Whole 泛型指代了数据结构本身的类型，Subpart 指代了结构中特定字段的类型。


## Lens 初始化函数：

```swift
func lens<Subpart, Whole>(view: @escaping (Whole) -> Subpart, set: @escaping (Subpart, Whole) -> Whole) -> Lens<Subpart, Whole> {
    return { mapper in { set(mapper(view($0)), $0) } }
}
```

这两个参数都是函数类型，分表代表着这个字段的Getter和Setter函数：

* view：类型(B) -> A ，B代表数据结构本身，A代表数据结构中某个字段，这个函数的目的就是为了从数据结构本身获取到指定字段的值。

* set：类型(A, B) -> B'，A是经过转换后得到的新的字段值，B为旧的数据结构值，B'则是基于旧的数据结构B和新的字段值A而构建出的新的数据结构。

```swift
extension Point {
    static let xLens = lens(
       view: { $0.x }, 
       set: { Point(x: $0, y: $1.y) }
    )
    static let yLens = lens(
        view: { $0.y },
        set: { Point(x: $1.x, y: $0) }
    )
}

extension Line {
    static let startLens = lens(
        view: { $0.start },
        set: { Line(start: $0, end: $1.end) }
    )
    static let endLens = lens(
        view: { $0.end }, 
        set: { Line(start: $1.start, end: $0) }
    )
}
```


## Set / Over 函数


```swift
func over<Subpart, Whole>(mapper: @escaping (Subpart) -> Subpart, lens: Lens<Subpart, Whole>) -> (Whole) -> Whole {
    return lens(mapper)
}

func set<Subpart, Whole>(value: Subpart, lens: Lens<Subpart, Whole>) -> (Whole) -> Whole {
    return over(mapper: { _ in value }, lens: lens)
}
```

over只是单纯地调用Lens函数，而set同样也只是简单调用over函数，在传入over函数的 mapper 参数中直接将新的字段值返回

## 组合

```swift
func >>> <A, B, C> (lhs: @escaping (A) -> B, rhs: @escaping (B) -> C) -> (A) -> C {
    return { rhs(lhs($0)) }
}

func <<< <A, B, C> (lhs: @escaping (B) -> C, rhs: @escaping (A) -> B) -> (A) -> C {
    return { lhs(rhs($0)) }
}
```

Lens本身就是函数，所以它们可以进行普通的函数组合：

```swift
let lineStartXLens = Line.startLens <<< Point.xLens
```

Line.startLens作为一个Lens，类型为((Point) -> Point) -> (Line) -> Line，可以看成是(A) -> B，其中A的类型为(Point) -> Point，B的类型为(Line) -> Line。

Point.xLens的类型则为((CGFloat) -> CGFloat) -> (Point) -> Point，可以看成是(C) -> D，其中C类型为(CGFloat) -> CGFloat，D类型为(Point) -> Point。恰巧，我们可以看到其实 A 类型跟 D 类型是一样的，这样我们就可以把Point.xLens看成是(C) -> A。当我们把这两个Lens组合在一起后，我们就可以得到一个(C) -> B的函数，也就是类型为((CGFloat) -> CGFloat) -> (Line) -> Line的一个新Lens。

使用set或over来操作这个新Lens：

```swift
// 将线段A的起始端点向右移动3个坐标
let startMoveRight3 = over(mapper: { $0 + 3 }, lens: lineStartXLens)
let bLine = startMoveRight3(aLine)
```

## 运算符

为了代码简洁，我们可以为Lens定义以下运算符：

```swift
func |> <A, B> (lhs: A, rhs: (A) -> B) -> B {
    return rhs(lhs)
}

func %~ <Subpart, Whole>(lhs: Lens<Subpart, Whole>, rhs: @escaping (Subpart) -> Subpart) -> (Whole) -> Whole {
    return over(mapper: rhs, lens: lhs)
}

func .~ <Subpart, Whole>(lhs: Lens<Subpart, Whole>, rhs: Subpart) -> (Whole) -> Whole {
    return set(value: rhs, lens: lhs)
}
```

使用以上运算符，我们就可以写出更加简洁美观的Lens代码：

```swift
// 要做什么？
// 1.将线段A的起始端点向右移动3个坐标值
// 2.接着将终止点向左移动5个坐标值
// 3.将终止点的y坐标设置成9
let bLine = aLine
    |> Line.startLens <<< Point.xLens %~ { $0 + 3 }
    |> Line.endLens <<< Point.xLens %~ { $0 - 5 }
    |> Line.endLens <<< Point.yLens .~ 9
```

## 参考原文：

原文链接：[函数式编程 - Lens（透镜）原理与应用 [Swift描述]](https://www.jianshu.com/p/87e7b4f0cc67)





















