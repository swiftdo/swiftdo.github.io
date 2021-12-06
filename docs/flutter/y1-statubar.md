---
title: "Flutter隐藏顶部状态栏"
date: 2021-12-05
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

隐藏顶部状态栏

增加依赖:

```dart
import 'package:flutter/services.dart';
```

在最上层的 Widget 的 build 方法开头增加如下代码.

```dart
SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.bottom]);
```

举例：

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    //隐藏顶部状态栏
    SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.bottom]); -->
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Hello World!',
            ),
          ],
        ),
      ),
    );
  }
}
```
