---
title: 'Flutter 中 const 使用'
date: 2021-01-20
tags:
- flutter
sitemap:
  exclude: false
  changefreq: hourly
---

在查看 Flutter Widget 的源码的时候，常常会遇到 const 这个关键字。

1）带有 const 关键字的 TextStyle

 ```dart
TextStyle effectiveTextStyle = effectiveTextStyle.merge(const TextStyle(fontWeight: FontWeight.bold));
 ```
 
2）带有 const 的全局变量

```dart
const Color _kLightThemeHighlightColor = Color(0x66BCBCBC);
```

3）带有 const 关键字的构造函数

```dart
const Text.rich(
    this.textSpan, {
    Key key,
    this.style,
    this.strutStyle,
    this.textAlign,
    this.textDirection,
    this.locale,
    this.softWrap,
    this.overflow,
    this.textScaleFactor,
    this.maxLines,
    this.semanticsLabel,
    this.textWidthBasis,
    this.textHeightBehavior,
  }) : assert(
         textSpan != null,
         'A non-null TextSpan must be provided to a Text.rich widget.',
       ),
       data = null,
       super(key: key);
```

4) 在方法形参中的 const 关键字 

```dart
Flow({
    Key key,
    @required this.delegate,
    List<Widget> children = const <Widget>[],
  }) : assert(delegate != null),
       super(key: key, children: RepaintBoundary.wrapAll(children));
```

5）...

官方的代码 const 随处可见，自己写的代码找不到它的影子。

> 任何事物的存在必有其意义

当然我也不推崇为了用而用，但是官方大把使用，事情肯定不会这么简单，在某方面肯定是有其益处的。

自己也简单分析了下用的少的原因：

* 没去了解
* 没去思考
* 没去使用

所以本文的目的就是，了解使用 const，以及知道为什么？

## const

看到它的第一眼，就会想到 C 语言中的 `指针常量和常量指针`，老犯难了。但是在 Dart 里我们不需要明面上跟指针打交道，所以不用怕。

对于 const 的使用，我们可以简单归耐成 3 种场景：

* const 用在 `=` 左边：定义常量
* const 用在 `=` 右边：创建常量
* const 构造函数：创建常量

## const 用在 `=` 左边

对于 const 用在`=`左边，这个比较容易理解，使用关键字 const 修饰变量表示该变量为 **编译时常量**。

const 在声明变量时可以省略变量的类型, double, int 等。
必须在声明变量时赋值，一旦赋值就不允许修改，而声明值一定要是**编译时常数**。


**什么是编译时常数？**

编译时值就要确定下来

* 数值、字符串、其它的 const 变量

    ```dart
    const bar = 1000000; // 直接赋值 
    const b = 'hello';
    const double atm = 1.01325 * bar;
    ```
    
* 表达式，表达式的所有值都是编译时可知的。

    ```dart
    const a = 1;
    const b = a > 1 ? 2 : 1;
    ```

* 集合或对象
    常量集合或者 const构造函数创建的对象
    
    ```dart
    const a = const [1,2,3];
    const b = ConstObj(2);
    ```
    
    对于const构造函数下面会进行详解

## const 用在 `=` 右边

当const用在=右边，其作用是 修饰值，它意味着对象的整个深度状态可以在编译时完全确定，并且对象将被冻结并且完全不可变。

一般用于修饰集合，它要求两点：
* 集合的元素必须是递归的编译时常数。

    ```dart
    var c = 2;
    //ERROR, 集合元素必须是编译时常数。
    var a = const [c,2,3];
    ```

* 不允许对集合做任何改变。

    ```dart
    const a = const [1,2,3];
    // ERROR, 不允许修改。
    a[1] = 2;
    ```
    
那么对于这两点我们做个小测验：

```dart
/// 测验 1
var a = [1,2,3]
a[0] = 3
print(a); 

/// 测验 2 
const a = [1,2,3];
a[0] = 3;
print(a);

/// 测验 3
var a = const [1,2,3];
a[0] = 3;
print(a);
```

如果你想验证自己答案，请对这 3 个小测验分别在 [https://dartpad.dev](https://dartpad.dev) 运行下。

写到这里，个人觉得最让人困惑的是 const 构造函数创建对象，之前我的理解是对象是在运行时期生成的，为什么可以用 const?

## Dart const 常量构造函数

一般对象是在运行时期生成，所以常量构造函数的条件还是比较苛刻的。

* 常量构造函数需以 const 关键字修饰
* const 构造函数必须用于成员变量都是 final 的类
* 构建常量实例必须使用定义的常量构造函数
* 如果实例化时不加const修饰符，即使调用的是常量构造函数，实例化的对象也不是常量实例

比如定义一个 Point 类：

```dart
class Point {
  final int x;
  final int y;
  const Point(this.x, this.y);
}
```

### 常量构造函数需以 const 关键字修饰

如下代码定义一个const对象，但是调用的构造方法不是 const 修饰的，则会报 `Cannot invoke a non-'const' constructor where a const expression is expected. `错误
```dart
void main() {
  const point = Point(1, 2); // 报错
}

class Point {
  final int x;
  final int y;
  Point(this.x, this.y);
}
```

### const 构造函数必须用于成员变量都是 final 的类

如下代码中成员变量x为非final，会报 `Constructor is marked 'const' so all fields must be final.` 的错误

```dart
void main() {
  const point = Point(1, 2); // 报错
}

class Point {
  int x;
  final int y;
  const Point(this.x, this.y);
}
```

### 构建常量实例必须使用定义的常量构造函数

如下代码，定义一个const对象，但是调用的却是非常量构造函数，会报`Cannot invoke a non-'const' constructor where a const expression is expected.`错误

```dart
void main() {
  var point = const Point(1, 2); // 报错
}
 
class Point {
  int x;
  int y;
  Point(this.x, this.y); // 非const构造函数
}
```

### 如果实例化时不加 const 修饰符，即使调用的是常量构造函数，实例化的对象也不是常量实例

如下代码，用常量构造函数构造一个对象，但是未用const修饰，那么该对象就不是const常量，其值可以再改变

```dart
void main() {
  var point = Point(1, 2); // 调用常量构造函数，但是未定义成常量
  print(point.toString());
  point = Point(10, 20); // 可以重新赋值，说明定义的变量为非常量
  print(point.toString());
}
 
class Point {
  final int x;
  final int y;
  const Point(this.x, this.y);
  
  String toString() {
    return 'Point(${x}, ${y})';
  }
}
```

## 为什么官方很多地方使用 const ?

* 具有 const 关键字的变量在编译时初始化，常量值必须在编译期就确定。
* 在运行时无法修改常量，无法重新创建。
    对于任何给定的常量值，无论常量表达式计算了多少次，都将在内存中创建一个对象。**常量对象在需要时可以重用，但从不重新创建**。
* 对于 Flutter 而言，状态更新后， build 方法中不会再次初始化。

    ```dart
    build(context) {
        return Row(
            children: <Widget>[
                const Text("Hello"),
                const SizedBox(width: 10),
                const Text("Hello"),
                const SizedBox(width: 10),
                const Text("Can you hear me?"),
            ]
        )
    }
    ```
    
    Row 有五个孩子。当我们使用 const 关键字创建具有 const 构造函数的类的实例时，这些值在编译时创建，并且每个唯一值仅在内存中存储一次。前两个 Text 实例将解析为对内存中同一对象的引用，两个 SizedBox 实例也是如此。如果要添加 `const SizedBox(width: 15)`，则将为该新值创建一个单独的常量实例。
    
    同样也可用使用 new 关键字(默认省略)来创建实例而不是使用 const，最终的运行效果也是一样的，但是如果你想减少你程序运行占用的内存或者想提高程序的性能，那么使用 `const` 是比较好的选择。
    
    
* 常量的不可变性是具有依赖关系

    ```dart
    final size = 12.0;
    const Text(
      "Hello",
      style: TextStyle(
        fontSize: size,    // error
      ),
    )
    ```
    
    我们尝试创建 Text 的常量实例，但是，我们说过 const 构造函数的条件比较苛刻，其成员必须是常量，"hello" 是字面量，可以省略 const 关键字。同样 Dart 也会尝试将 `TextStyle` 创建为常量，因为它知道 `TextStyle` 必须为常量才满足 `const Text()` 的调用。但是由于 `TextStyle` 依赖于变量 size, 但 size 不是常数，直到运行时才具有值。所以不满足 const 构造函数条件报错。要解决此问题，必须替换 size 为常量或者直接使用数字。
