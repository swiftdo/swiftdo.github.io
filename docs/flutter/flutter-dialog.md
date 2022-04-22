
---
title: "Flutter Dialog 的使用"
date: 2022-04-22
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

Dialog 在是很常用的一种 UI。那么在 Flutter 中如何构建一个 Dialog UI？

## 如何展示 Dialog?

通过调用`showDialog()`来展示一个 Dialog：

```dart
Future<T?> showDialog<T>({
  required BuildContext context,
  // 构建 Dialog 视图
  required WidgetBuilder builder,
  // 点击 dialog 外部是否可消失
  bool barrierDismissible = true,
  Color? barrierColor = Colors.black54,
  String? barrierLabel,
  bool useSafeArea = true,
  bool useRootNavigator = true,
  RouteSettings? routeSettings,
});
```

只需要调用这个简单的函数就可以展示一个 Dialog。而 Dialog 的重点在于在 `builder` 中构建你需要的 UI。

一个简单的例子：

```dart
showDialog(
  // 传入 context
  context: context,
  // 构建 Dialog 的视图
  builder: (_) => Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Container(
              alignment: Alignment.center,
              color: Colors.white,
              child: Column(
                children: <Widget>[
                  Padding(
                    padding: EdgeInsets.only(top: 8),
                    child: Text('简单的 Dialog',
                        style: TextStyle(
                            fontSize: 16,
                            decoration: TextDecoration.none)),
                  ),
                  Padding(
                    padding: EdgeInsets.only(top: 15, bottom: 8),
                    child: FlatButton(
                        onPressed: () {
                          // 关闭 Dialog
                            Navigator.pop(_);
                        },
                        child: Text('确定')),
                  )
                ],
              ),
            )
          ],
        ),
      ),
);
```

效果如下：

![](http://blog.loveli.site/mweb/16505854425991.jpg)

点击 `确定` 按钮后，调用 `Navigator.pop()` 来关闭这个 Dialog。

本质上 Dialog 也是一个页面，在 `showDialog()` 的实现中：

```dart
return Navigator.of(context, rootNavigator: useRootNavigator).push<T>(DialogRoute<T>(
    context: context,
    builder: builder,
    barrierColor: barrierColor,
    barrierDismissible: barrierDismissible,
    barrierLabel: barrierLabel,
    useSafeArea: useSafeArea,
    settings: routeSettings,
    themes: themes,
));
```

## 自带的 Dialog

为了帮助开发者快速的的 Dialog，Flutter 提供一些常用的 Dialog。

### AlertDialog

![](http://blog.loveli.site/mweb/16505861509394.jpg)

```dart
showDialog(
    context: context,
    builder: (BuildContext context) {
        return AlertDialog(
            title: Text("提示"),
            content: Text("确定删除吗？"),
            actions: [
                FlatButton(onPressed: () {}, child: Text("取消")),
                FlatButton(onPressed: () {}, child: Text("确定")),
            ],
        );
    },
);
```

### AlertDialog 自定义样式

![](http://blog.loveli.site/mweb/16505865312773.jpg)

```dart
showDialog(
    context: context,
    builder: (BuildContext context) {
        return AlertDialog(
            title: Center(child: Text("提示")),
            titleTextStyle: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.black,
                fontSize: 30,
            ),
            content: Center(heightFactor: 1, child: Text("确定删除吗？")),
            backgroundColor: Colors.yellowAccent,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
            actionsAlignment: MainAxisAlignment.center,
            actions: [
                FlatButton(
                    onPressed: () {
                        Navigator.of(context).pop("no");
                    },
                    child: Text("取消"),
                ),
                FlatButton(
                    onPressed: () {
                        Navigator.of(context).pop("yes");
                    },
                    child: Text("确定"),
                ),
            ],
        );
    },
);
```

### CupertinoAlertDialog IOS风格

![](http://blog.loveli.site/mweb/16505865740868.jpg)

```dart
showCupertinoDialog(
    //点击空白处取消
    barrierDismissible: true,
    context: context,
    builder: (context) {
        return CupertinoAlertDialog(
            title: Text("提示"),
            content: Text("确认删除吗？"),
            actions: [
                CupertinoDialogAction(
                    child: Text("取消"),
                    onPressed: () {
                        Navigator.of(context).pop();
                    },
                ),
                CupertinoDialogAction(
                    child: Text("确定"),
                    onPressed: () {},
                ),
            ],
        );
    },
);
```

### SimpleDialog

![](http://blog.loveli.site/mweb/16505866058310.jpg)


```dart
showDialog(
    context: context,
    builder: (BuildContext context) {
        return SimpleDialog(
            title: Text("提示"),
            children: [
                Container(
                    height: 80,
                    alignment: Alignment.center,
                    child: Text("确定删除吗？"),
                ),
                Divider(height: 1),
                TextButton(
                    onPressed: () {
                        Navigator.of(context).pop();
                    },
                    child: Text("取消"),
                ),
                Divider(height: 1),
                TextButton(
                    onPressed: () {},
                    child: Text("确定"),
                ),
            ],
        );
    },
);
```

## 自定义 Dialog

![](http://blog.loveli.site/mweb/16505866401719.jpg)

```dart
showDialog(
    context: context,
    builder: (BuildContext context) {
        return Dialog(
            child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                    "hello world",
                    textAlign: TextAlign.center,
                ),
            ),
        );
    },
);
```
