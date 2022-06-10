---
title: "Flutter Widget 截图(二)"
date: 2022-06-10
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

在上篇文章中，我们已经实现了 Widget 的截图功能。但是有一个问题，我将图片放到 `Figma` 中，会发现如下：

![](http://blog.oldbird.run/mweb/16548308539593.jpg)

本来期望的截图是带有圆角的，但是结果是有个背景色。

因 API 方面没有设置圆角的接口。现提供一个可行的解决方案，就是手动对图片进行裁剪。

## 图片添加圆角

我们通过 Canvas 对图片进行绘制。

```dart
Future<ByteData?> _roundImage({
    double radius = 20,
    required ui.Image image,
  }) async {
    // 创建一个记录仪
    final ui.PictureRecorder pictureRecorder = ui.PictureRecorder();
    final Canvas canvas = Canvas(pictureRecorder);

    // 获取当前设备的像素比，绘图是几倍，这里就是几倍
    double dpr = ui.window.devicePixelRatio;
    canvas.clipRRect(
        RRect.fromLTRBR(
        0,
        0,
        image.width.toDouble(),
        image.height.toDouble(),
        Radius.circular(radius),
        ),
    );
    canvas.drawImage(image, const Offset(0, 0), Paint());

    final resImg =
        await pictureRecorder.endRecording().toImage(image.width, image.height);
    return await resImg.toByteData(format: ui.ImageByteFormat.png);
}
```

- 先是创建了`PictureRecorder`；
- 然后使用`PictureRecorder`创建了 Canvas ；
- 之后通过`clipRRect`将画布按圆角矩形进行裁剪；
- 然后将我们生成图片绘制到画布中；
- 结束绘制，通过`toImage`转化为图片，返回图片二进制

然后我们只需要在 `_capturePngToByteData` 调用即可：

```dart
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
      // final sourceBytes = await image.toByteData(format: ImageByteFormat.png);
      final sourceBytes = await _roundImage(image: image, radius: dpr * 20);
      return sourceBytes?.buffer.asUint8List();
    } catch (e) {
      return null;
    }
}
```
