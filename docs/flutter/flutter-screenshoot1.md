---
title: "Flutter Widget 截图(一)"
date: 2022-06-10
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

Flutter Widget 截屏，将图片保存在本地并且实现图片分享的功能。

## 实战

首先让我们从一个 Widget 开始，一个红色的容器，里面有一些文本。下面是它的代码：

```dart
Container(
    padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 30),
    decoration: BoxDecoration(
        color: Colors.red,
        borderRadius: BorderRadius.circular(20),
        boxShadow: const [
            BoxShadow(color: Colors.black12, blurRadius: 10),
        ]),
    clipBehavior: Clip.antiAlias,
    child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
        const Text(
            "OldBirds",
            style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 25,
            ),
        ),
        const SizedBox(
            height: 20,
        ),
        Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
            Icon(Icons.accessibility),
            Text('Hello World'),
            ],
        )
        ],
    ),
)
```

这是上面的 Widget 在视觉上的样子

![](http://blog.oldbird.run/mweb/16548301392441.jpg)

### 用 RepaintBoundary 包裹它

要将此 Widget 转换为图像文件（或捕获/截屏），您需要将小部件包装在`RepaintBoundary` 中，然后需要创建一个 GlobalKey 并将其传递给 RepaintBoundary。

```dart
GlobalKey repaintWidgetKey = GlobalKey(); // 绘图key值

...

RepaintBoundary(
    key: repaintWidgetKey,
    child: Container(
    padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 30),
    decoration: BoxDecoration(
        color: Colors.red,
        borderRadius: BorderRadius.circular(20),
        boxShadow: const [
            BoxShadow(color: Colors.black12, blurRadius: 10),
        ]),
    clipBehavior: Clip.antiAlias,
    child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
        const Text(
            "OldBirds",
            style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 25,
            ),
        ),
        const SizedBox(
            height: 20,
        ),
        Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
            Icon(Icons.accessibility),
            Text('Hello World'),
            ],
        )
        ],
    ),
    ),
)
```

### 创建图像

获取图像字节的代码。

```dart
final boundary = key.currentContext?.findRenderObject() as RenderRepaintBoundary?;
final image = await boundary?.toImage();
final byteData = await image?.toByteData(format: ImageByteFormat.png);
final imageBytes = byteData?.buffer.asUint8List();
```

### 保存本地

将这些字节写入某处的文件，需要 path_provider 使用该包`getTemporaryDirectory`:

```dart
if (imageBytes != null) {
    Directory tempDir = await getTemporaryDirectory();
    String storagePath = tempDir.path;
    File file = File(
        '$storagePath/oldbird_gen_image_${DateTime.now().millisecondsSinceEpoch}.png');
    debugPrint('::file:path: ${file.path}');
    if (!file.existsSync()) {
      file.createSync();
    }
    file.writeAsBytesSync(sourceBytes);
}
```

### 分享图片

将保存到本地的图片，通过 `share_plus` 实现分享图片的功能：

```dart
await Share.shareFiles([file.path], text: 'Great picture');
```

## 说明

### RepaintBoundary

Flutter 提供了支持截屏的 RepaintBoundary，在需要截取部分的外层嵌套，也可以截取某一子 Widget 内容；RepaintBoundary 的结构很简单，通过 key 来判断截取的 RenderObject，最终生成一个 RenderRepaintBoundary 对象；

RenderRepaintBoundary 是一个对象缓存着 widget 的 UI data 信息，当 viewTree 要重绘的时候，可以提高绘制效率。

### ui.Image

通过 RenderRepaintBoundary 获取的对象 .toImage() 的方法，对 widget 进行截屏，并输出其当前的 UI data，返回的 ui.Image 是原始的 RGBA bytes，pixelRatio 参数可以设置要输出图片的分辨率，默认一倍图，可根据情况调整。

toByteData() 生成的数据格式一般分三种：

- rawRgba：未解码的 byte；
- rawUnmodified：未解码且未修改的 byte，如灰度图；
- png 为我们常用的 PNG 图片；

### Directory

若需要存储本地，跟 Android/iOS 类似，首先获取存储路径，再进行存储操作；小菜借助三方插件 path_provider 来获取图片路径；

**path_provider** 提供了 getTemporaryDirectory（临时路径） / getApplicationDocumentsDirectory（全局路径）等，可以根据不同的需求存储不同路径；

### writeAsBytes

文件的保存很简单，直接将 Uint8List 写入到所在文件路径下即可；

## 完整代码

```dart
import 'dart:io';
import 'dart:typed_data';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'dart:ui' as ui;
import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';

class CaptureImagePage extends StatefulWidget {
  const CaptureImagePage({Key? key}) : super(key: key);

  @override
  State<CaptureImagePage> createState() => _CaptureImagePageState();
}

class _CaptureImagePageState extends State<CaptureImagePage> {
  GlobalKey repaintWidgetKey = GlobalKey(); // 绘图key值

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.yellow,
      body: Center(
        child: RepaintBoundary(
          key: repaintWidgetKey,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 30),
            decoration: BoxDecoration(
                color: Colors.red,
                borderRadius: BorderRadius.circular(20),
                boxShadow: const [
                  BoxShadow(color: Colors.black12, blurRadius: 10),
                ]),
            clipBehavior: Clip.antiAlias,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  "OldBirds",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 25,
                  ),
                ),
                const SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: const [
                    Icon(Icons.accessibility),
                    Text('Hello World'),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _shareUiImage();
        },
        tooltip: '截图',
        child: const Icon(Icons.ac_unit),
      ),
    );
  }

  /// 分享图片
  Future _shareUiImage() async {
    Uint8List? sourceBytes = await _capturePngToByteData();
    if (sourceBytes == null) {
      return;
    }
    Directory tempDir = await getTemporaryDirectory();
    String storagePath = tempDir.path;
    File file = File(
        '$storagePath/oldbird_gen_image_${DateTime.now().millisecondsSinceEpoch}.png');
    debugPrint('::file:path: ${file.path}');
    if (!file.existsSync()) {
      file.createSync();
    }
    file.writeAsBytesSync(sourceBytes);
    await Share.shareFiles([file.path], text: 'Great picture');
    ScaffoldMessenger.of(context)
        .showSnackBar(const SnackBar(content: Text("分享图片成功")));
  }

  /// 截屏图片生成图片，返回图片二进制
  Future<Uint8List?> _capturePngToByteData() async {
    try {
      RenderRepaintBoundary? boundary = repaintWidgetKey.currentContext
          ?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) {
        return null;
      }
      // 获取当前设备的像素比
      double dpr = ui.window.devicePixelRatio;
      ui.Image image = await boundary.toImage(pixelRatio: dpr);
      final sourceBytes = await image.toByteData(format: ImageByteFormat.png);
      return sourceBytes?.buffer.asUint8List();
    } catch (e) {
      return null;
    }
  }
}
```
