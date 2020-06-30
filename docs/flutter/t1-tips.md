---
title: 'tips'
sitemap:
  exclude: false
  changefreq: hourly
---

## Tip1 `stless` & `stful`

我们可以键入 `stless` 和 `stful`，会出现代码补全提示。

![01stlesstfu](http://blog.loveli.site/2020-06-19-01stlesstful.gif)

## Tip2 `If Null` 运算符(`??`)

dart 有两个运算符，可让您简明地评估可能需要 `if-else` 语句的表达式:

* 如果条件为真，返回 expr1，否则返回 expr2。

    ```dart
    condition ? expr1 : expr2
    ```

* 如果 expr1 为非空，则返回其值；否则，计算并返回 expr2 的值。

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

![](http://blog.loveli.site/2020-06-19-15925765686019.jpg)

**总结：**

* Spacer是通过 Expanded 来实现的，Expanded 继承自 Flexible。
* 填满剩余空间直接使用 Expanded 更方便。
* Spacer用于撑开Row、Column、Flex的子控件的空隙。

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

* **HitTestBehavior.deferToChild**

    只有有子 Widget 通过了 `Hit-Test`，才接收一系列的事件，接收区域也会被限制在该子 Widget 区域中。

* **HitTestBehavior.opaque**

    Widget  能够通过 `Hit-Test`，接收事件，且能阻止在它之前的 Widget（直观来看就是被它挡住的 Widget）接收事件。简单来说就是事件 `不能透传`。

* **HitTestBehavior.translucent**

    Widget 能够通过 `Hit-Test`，接收事件，且不会阻止它之前的 Widget（直观来看就是被它挡住的 Widget）接收事件。简单来说就是事件 能透传
