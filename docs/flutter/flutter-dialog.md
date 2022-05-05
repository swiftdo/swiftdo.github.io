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

![](http://blog.oldbird.run/mweb/16505854425991.jpg)

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

![](http://blog.oldbird.run/mweb/16505861509394.jpg)

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

![](http://blog.oldbird.run/mweb/16505865312773.jpg)

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

### CupertinoAlertDialog IOS 风格

![](http://blog.oldbird.run/mweb/16505865740868.jpg)

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

![](http://blog.oldbird.run/mweb/16505866058310.jpg)

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

![](http://blog.oldbird.run/mweb/16505866401719.jpg)

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

## 对话框打开动画及遮罩设置

我们可以把对话框分为内部样式和外部样式两部分。内部样式指对话框中显示的具体内容；外部样式包含对话框遮罩样式、打开动画等。

`showDialog`方法，它是 Material 组件库中提供的一个打开 Material 风格对话框的方法。那如何打开一个普通风格的对话框呢（非 Material 风格）？ Flutter 提供了一个`showGeneralDialog`方法：

```dart
Future<T?> showGeneralDialog<T>({
  required BuildContext context,
  required RoutePageBuilder pageBuilder, //构建对话框内部UI
  bool barrierDismissible = false, //点击遮罩是否关闭对话框
  String? barrierLabel, // 语义化标签(用于读屏软件)
  Color barrierColor = const Color(0x80000000), // 遮罩颜色
  Duration transitionDuration = const Duration(milliseconds: 200), // 对话框打开/关闭的动画时长
  RouteTransitionsBuilder? transitionBuilder, // 对话框打开/关闭的动画
  ...
})
```

实际上，`showDialog`方法正是`showGeneralDialog`的一个封装，定制了 Material 风格对话框的遮罩颜色和动画。Material 风格对话框打开/关闭动画是一个 Fade（渐隐渐显）动画，如果我们想使用一个缩放动画就可以通过`transitionBuilder` 来自定义。下面我们自己封装一个`showCustomDialog`方法，它定制的对话框动画为缩放动画，并同时制定遮罩颜色为`Colors.black87`：

```dart
Future<T?> showCustomDialog<T>({
  required BuildContext context,
  bool barrierDismissible = true,
  required WidgetBuilder builder,
  ThemeData? theme,
}) {
  final ThemeData theme = Theme.of(context, shadowThemeOnly: true);
  return showGeneralDialog(
    context: context,
    pageBuilder: (BuildContext buildContext, Animation<double> animation,
        Animation<double> secondaryAnimation) {
      final Widget pageChild = Builder(builder: builder);
      return SafeArea(
        child: Builder(builder: (BuildContext context) {
          return theme != null
              ? Theme(data: theme, child: pageChild)
              : pageChild;
        }),
      );
    },
    barrierDismissible: barrierDismissible,
    barrierLabel: MaterialLocalizations.of(context).modalBarrierDismissLabel,
    barrierColor: Colors.black87, // 自定义遮罩颜色
    transitionDuration: const Duration(milliseconds: 150),
    transitionBuilder: _buildMaterialDialogTransitions,
  );
}

Widget _buildMaterialDialogTransitions(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
    Widget child) {
  // 使用缩放动画
  return ScaleTransition(
    scale: CurvedAnimation(
      parent: animation,
      curve: Curves.easeOut,
    ),
    child: child,
  );
}
```

我们使用`showCustomDialog`打开文件删除确认对话框：

```dart
... //省略无关代码
showCustomDialog<bool>(
  context: context,
  builder: (context) {
    return AlertDialog(
      title: Text("提示"),
      content: Text("您确定要删除当前文件吗?"),
      actions: <Widget>[
        TextButton(
          child: Text("取消"),
          onPressed: () => Navigator.of(context).pop(),
        ),
        TextButton(
          child: Text("删除"),
          onPressed: () {
            // 执行删除操作
            Navigator.of(context).pop(true);
          },
        ),
      ],
    );
  },
);
```

运行后可以发现，遮罩颜色比通过`showDialog`方法打开的对话框更深。另外对话框打开/关闭的动画已变为缩放动画了。

## 底部栏弹窗

`showModalBottomSheet`方法可以弹出一个 Material 风格的底部菜单列表模态对话框：

```dart
// 弹出底部菜单列表模态对话框
Future<int?> _showModalBottomSheet() {
  return showModalBottomSheet<int>(
    context: context,
    builder: (BuildContext context) {
      return ListView.builder(
        itemCount: 30,
        itemBuilder: (BuildContext context, int index) {
          return ListTile(
            title: Text("$index"),
            onTap: () => Navigator.of(context).pop(index),
          );
        },
      );
    },
  );
}
```
