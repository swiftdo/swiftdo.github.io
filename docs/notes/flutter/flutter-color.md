---
title: Flutter 关于颜色的几个补充，非常实用
date: 2022-02-23T00:00:00.000Z
tags:
  - flutter
  - github
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/276uhar6/
---

## hexcolor

> pub 地址：[https://pub.dev/packages/hexcolor](https://pub.dev/packages/hexcolor)

- 该插件可以使用十六进制字符串给颜色赋值，比如 `#f2f2f2`：

  ```dart
  Text(
      '颜色',
      style: TextStyle(color: HexColor("#f2f2f2")),
  )
  ```

- 也可以将颜色转换为**十六进制字符串**

  ```dart
  String textColor = ColorToHex(Colors.teal).toString();
  ```

## palette_generator

> pub 地址：[https://pub.dev/packages/palette_generator](https://pub.dev/packages/palette_generator)

用于从图像中提取主颜色(突出的颜色)：

```dart

Future<Color?> getImagePalette(String url) async {
    final PaletteGenerator paletteGenerator =
        await PaletteGenerator.fromImageProvider(
            CachedNetworkImageProvider(url));
    return paletteGenerator.dominantColor?.color;
}

final color = await getImagePalette("http://m.imeitou.com/uploads/allimg/2020052714/w0kcbj5hjbj.jpeg")
```

## 判断颜色是否是暗色还是亮色

Flutter 为我们提供了一些可以帮助我们完成这个判断的方法。

- 使用`Color`类中的`computeLuminance()`方法，它可以返回一个[0-1]的一个值，数字越大颜色就越浅

  ```dart
  Text(
      title,
      style: TextStyle(
        fontWeight: FontWeight.bold,
        //根据背景色亮度来确定Title颜色
        color: bgColor.computeLuminance() < 0.5 ? Colors.white : Colors.black,
      ),
    )
  ```

- 使用`ThemeData`类中的`estimateBrightnessForColor()`方法，可用于计算任何颜色的亮度，间接调用了 `Color` 类的 `computeLuminance()`。

  ```dart
  Text(
      'Hello',
      style: TextStyle(
          fontSize: 80,
          color: ThemeData.estimateBrightnessForColor(_bgColor) ==
                  Brightness.light
              ? Colors.black
              : Colors.white,
      ),
    ),
  ```
