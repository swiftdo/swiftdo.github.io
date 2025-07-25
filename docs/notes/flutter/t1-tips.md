---
title: tips
date: 2020-08-17T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/wyimh45q/
---

## Tip1 `stless` & `stful`

我们可以键入 `stless` 和 `stful`，会出现代码补全提示。

![01stlesstfu](http://blog.oldbird.run/2020-06-19-01stlesstful.gif)

## Tip2 `If Null` 运算符(`??`)

dart 有两个运算符，可让您简明地评估可能需要 `if-else` 语句的表达式:

- 如果条件为真，返回 expr1，否则返回 expr2。

  ```dart
  condition ? expr1 : expr2
  ```

- 如果 expr1 为非空，则返回其值；否则，计算并返回 expr2 的值。

  ```dart
  expr1 ?? expr2
  ```

当你需要根据布尔表达式赋值时，考虑使用 `?:`

```dart
var visibility = isPublic ? 'public' : 'private';
```

如果布尔表达式测试为空，考虑使用 `??`

```dart
String playerName(String name) => name ?? 'Guest';
```

要仅在变量为`null`时赋值，请使用 `??=` 运算符：

```dart
// 如果 b 为空，则 value 分配给 b；否则，b 保持不变
b ??= value;
```

## Tip3 级联调用 (`..`)

使用级联调用，可以简化在一个对象上执行的多个操作。

除了方法调用之外，你还可以获取同一个对象上的成员变量。这样做通常省去了创建临时变量的步骤，同时允许你写出更流畅的代码。

我们定义一个 Student 对象，然后创建一个 Student 对象，通过级联表达式依次调用它的各个方法和 setter 属性。

```dart
class Student {

  String string;

  void testMethod() {
    print("This is a  test method");
  }

  void testMethod1() {
    print("This is a  test method1");
  }

  String printString() {
    print("string: $string");
    return string;
  }
}

main() {
  Student()
    ..testMethod()
    ..testMethod1()
    ..string = "flutter tips in Oldbirds"
    ..printString();
}
```

## Tip4 Spacer Widget

```dart
class Spacer extends StatelessWidget {
  /// Creates a flexible space to insert into a [Flexible] widget.
  ///
  /// The [flex] parameter may not be null or less than one.
  const Spacer({Key key, this.flex = 1})
    : assert(flex != null),
      assert(flex > 0),
      super(key: key);

  /// 用于确定占用多少空间的弹性系数。
  /// 在放置不灵活的子对象后，根据子对象的弹性系数，将自由空间按比例分割，
  /// 从而确定[间隔对象]在主轴中可以占用的空间量。默认为1。
  final int flex;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      flex: flex,
      child: const SizedBox.shrink(),
    );
  }
}
```

`Spacer` 的通过 `Expanded` 的实现的，和 `Expanded` 的区别是：**`Expanded` 可以设置子控件，而 `Spacer` 的子控件尺寸是 0**，因此 `Spacer` 适用于撑开 `Row`、`Column`、`Flex `的子控件的空隙。

```dart
Row(
  children: <Widget>[
    Container(width: 100,height: 50,color: Colors.green,),
    Spacer(flex: 2,),
    Container(width: 100,height: 50,color: Colors.blue,),
    Spacer(),
    Container(width: 100,height: 50,color: Colors.red,),
  ],
)
```

效果如下：

![](http://blog.oldbird.run/2020-06-19-15925765686019.jpg)

**总结：**

- Spacer 是通过 Expanded 来实现的，Expanded 继承自 Flexible。
- 填满剩余空间直接使用 Expanded 更方便。
- Spacer 用于撑开 Row、Column、Flex 的子控件的空隙。

## Tip5 点击区域变大

使用 `GestureDetector` 包裹 `Container`，发现在 `Container` 内容为空的区域点击时，捕捉不到 `onTap` 点击事件。

在 `GestureDetector` 里面添加属性：`behavior: HitTestBehavior.opaque` 即可：

```dart
GestureDetector(
    behavior: HitTestBehavior.opaque,
    onTap: (){
        print("hehe");
    },
    child: Padding(
        padding: EdgeInsets.only(left: 150.0,top: 150.0),
        child: Text('Hello World')),
)
```

`HitTestBehavior` 用于控制事件的传递方式：

- **HitTestBehavior.deferToChild**

  只有有子 Widget 通过了 `Hit-Test`，才接收一系列的事件，接收区域也会被限制在该子 Widget 区域中。

- **HitTestBehavior.opaque**

  Widget 能够通过 `Hit-Test`，接收事件，且能阻止在它之前的 Widget（直观来看就是被它挡住的 Widget）接收事件。简单来说就是事件 `不能透传`。

- **HitTestBehavior.translucent**

  Widget 能够通过 `Hit-Test`，接收事件，且不会阻止它之前的 Widget（直观来看就是被它挡住的 Widget）接收事件。简单来说就是事件 能透传

## Tip6 Ink 解决“水波纹” 超出的圆角边框

`InkWell`继承自`InkResponse`，可以非常简单的实现水波纹效果。
`InkResponse`可以实现自定义的各种水波纹效果，它不强制水波纹是矩形的形状。

```dart
InkWell(
  onTap: () {},
  child: Container(
    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 8),
    decoration: BoxDecoration(
        border: Border.all(color: Colors.blue),
        borderRadius: BorderRadius.all(Radius.circular(30))),
    child: Text('这是InkWell点击效果'),
  ),
)
```

![InkWell](http://blog.oldbird.run/2020-06-30-20200225174825258.gif)

`Ink`隆重登场。让控件区域背景变成圆角矩形。`Ink`控件用于在`Material`控件上绘制图像或者其他装饰，以便`InkWell`、`InkResponse`控件的 “水波纹” 效果在其上面显示。

```dart
Ink(
  decoration: BoxDecoration(
      gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFDE2F21), Color(0xFFEC592F)]),
      borderRadius: BorderRadius.all(Radius.circular(20))),
  child: InkWell(
    borderRadius: BorderRadius.all(Radius.circular(20)),
    child: Container(
      padding: EdgeInsets.symmetric(vertical: 8, horizontal: 20),
      child: Text(
        '这是InkWell的点击效果',
        style: TextStyle(color: Colors.white),
      ),
    ),
    onTap: () {},
  ),
)
```

![Ink&InkWell](http://blog.oldbird.run/2020-06-30-202002251758102.gif)

## Tip7 assert 条件为返回 false，中断程序执行且抛出错误信息

如何在你确定错误的条件的时候抛出相关错误信息，可以将错误信息赋值给 `assert()` 的第二个可选参数。

```dart
assert(title != null, "Title string cannot be null.");
```

## Tip8 字符串乘法

您将字符串像数字一样使用乘法。

```dart
"Foo" * 2 //Foo
"Bar " * 5 //Bar Bar Bar Bar Bar

// ❌ 以前打印一个字符串多次
String oldWay(String value, int times) {
    String output;
    for(int i = 0; i < times; i++) {output += value;}
    return output;
}

// ✅ 使用字符串乘法
String newWay(String value, int times) => value * times;
```

## Tip9 获取枚举值

```dart
enum Month { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec }
```

如果我们需要获取 Month 元素对应的字符串。那么以前我们会这么写

```dart
print(Month.jan.toString().split('.').last) // jan
```

但当有了 [Extension](https//dart.dev/guides/language/extension-methods) 后，我们可以更加简便可读的方式去获取。

```dart
extension MonthExtension on Object {
  String get enumValue => this.toString().split('.').last;

  int get value => this.index + 1;
  String get cn =>
  [
     "一",
     "二",
     "三",
     "四",
     "五",
     "六",
     "七",
     "八",
     "九",
     "十",
     "十一",
     "十二"
    ][this.index] + "月";
}

// ✅
print(Month.jan.enumValue); // jan
print(Month.jan.cn) // 一月
```

## Tip10 CustomPainter 使用

在 Flutter 中，提供了一个 `CustomPaint` Widget，它可以结合一个画笔 `CustomPainter` 来实现绘制自定义图形。

1. 定义一个继承自 `CustomPainter` 的类
2. 重写 `paint(canvas, size)` 方法，在方法里面绘制各种形状
3. 将 `CustomPainter` 作为 `CustomPaint` Widget 的 paint 参数。

```dart
class SmileyPaint extends CustomPainter {
  const SmileyPaint(
      {this.mouthAngle = 0,
      this.leftEyesSize = 1,
      this.rightEyesSize = 1,
      this.showTongue = false,
      this.emojiColor = Colors.yellow,
      this.mouthHeight = 1.0});

  final double mouthAngle;

  final int leftEyesSize;

  final int rightEyesSize;

  final bool showTongue;
  final Color emojiColor;
  final double mouthHeight;

  @override
  void paint(Canvas canvas, Size size) {
    var paint = Paint();
    paint.color = emojiColor;
    canvas.drawCircle(Offset(100, 100), size.height / 2, paint);
    paint.color = Colors.white;
    canvas.drawArc(
        Rect.fromCenter(
            center: Offset(100, (mouthAngle * 10) + 130), width: 100, height: 80 * mouthHeight),
        mouthAngle,
        3.14,
        true,
        paint);
    canvas.drawCircle(Offset(60, 70), leftEyesSize * 10.0, paint..color = Colors.black);
    canvas.drawCircle(Offset(140, 70), rightEyesSize * 10.0, paint..color = Colors.black);
    var tongueRect = Rect.fromPoints(Offset(75, 150), Offset(125, 220));
    var cRadius = Radius.circular(20);
    if (this.showTongue)
      canvas.drawRRect(
          RRect.fromRectAndCorners(tongueRect, bottomLeft: cRadius, bottomRight: cRadius),
          paint..color = Colors.pink);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}

class Smiley extends StatelessWidget {
  const Smiley(
      {this.mouthAngle = 0,
      this.leftEyesSize = 1,
      this.rightEyesSize = 1,
      this.showTongue = false,
      this.emojiColor = Colors.yellow,
      this.mouthHeight = 1.0});

  final double mouthAngle;

  final int leftEyesSize;

  final int rightEyesSize;

  final bool showTongue;
  final Color emojiColor;
  final double mouthHeight;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: CustomPaint(
          painter: SmileyPaint(
              mouthAngle: mouthAngle,
              leftEyesSize: leftEyesSize,
              rightEyesSize: rightEyesSize,
              showTongue: showTongue,
              emojiColor: emojiColor,
              mouthHeight: mouthHeight),
          size: Size.square(200),
        ),
      ),
    );
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(),
        body: ListView(
          children: <Widget>[
            Smiley(
              mouthAngle: 3.14,
            ),
            Smiley(
              mouthAngle: 0.5,
              rightEyesSize: 3,
              showTongue: true,
            ),
            Smiley(
              leftEyesSize: 2,
            ),
            Smiley(
              leftEyesSize: 2,
              showTongue: true,
            ),
            Smiley(
              leftEyesSize: 2,
              rightEyesSize: 2,
              emojiColor: Colors.green,
              mouthHeight: 0.1,
            ),
            SizedBox(
              height: 200,
            )
          ],
        ),
      ),
    );
  }
}
```

![emojis](http://blog.oldbird.run/2020-06-30-15935295814964.jpg)
