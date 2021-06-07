---
title: '状态栏颜色设置'
date: 2021-06-07
tags:
- flutter
sitemap:
  exclude: false
  changefreq: hourly
---

## 1. 使用 AppBar


```dart
appBar: AppBar(
          title: Text('appbar', style: TextStyle(color: Colors.black),),
          brightness: Brightness.light,
          backgroundColor: Colors.white,
        ),
```

## 2. 使用 AnnotatedRegion

```dart
return AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.dark,
        child: Scaffold(
          body: Column(),
        ));
```


## 3. 通过 SystemChrome.setSystemUIOverlayStyle 设置

```dart
@override
Widget build(BuildContext context) {
  SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.dark);
  return const Placeholder();
}
```

> If a particular style is not supported on the platform, selecting it will have no effect.
> 非全平台支持，有些平台设置了没有效果。所以官方也不推荐使用，而是推荐使用 AnnotatedRegion。其详细介绍可以[查看文档](https://api.flutter.dev/flutter/services/SystemChrome/setSystemUIOverlayStyle.html)












