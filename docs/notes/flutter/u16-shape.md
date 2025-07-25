---
title: 自定义 ShapeBorder
date: 2021-06-09T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/7qdr31de/
---

需要继承自 `ShapeBorder`

```dart
class SimpleShapeBoder extends ShapeBorder{
  @override
  EdgeInsetsGeometry get dimensions => null;

  @override
  Path getInnerPath(Rect rect, {TextDirection textDirection}) {
    return null;
  }

  @override
  Path getOuterPath(Rect rect, {TextDirection textDirection}) {
    return null;
  }

  @override
  void paint(Canvas canvas, Rect rect, {TextDirection textDirection}) {
  }

  @override
  ShapeBorder scale(double t) {
    return null;
  }
}
```

## paint 方法

paint 中传递过来 Canvas 对象，和组件的区域。有了这俩货，算是可以为所欲为了吧

```dart
@override
void paint(Canvas canvas, Rect rect, {TextDirection textDirection}) {
    var paint = Paint()
        ..color = Colors.white
        ..strokeWidth = 2.0
        ..style = PaintingStyle.stroke
        ..strokeJoin = StrokeJoin.round;
    var w = rect.width;
    var h = rect.height;
    canvas.drawCircle(Offset(0.3*h,0.23*h), 0.12*h, paint);
    canvas.drawCircle(Offset(0.3*h,0.23*h), 0.06*h, paint..style=PaintingStyle.fill..color=Colors.black);
}
```

## getOuterPath 方法

返回一个 Path 对象，用于形状的裁剪

```dart
@override
Path getOuterPath(Rect rect, {TextDirection textDirection}) {
    var path = Path();
    path.addRRect(RRect.fromRectAndRadius(rect, Radius.circular(10)));
    return path;
}
```

