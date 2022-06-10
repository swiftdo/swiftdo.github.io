---
title: "Flutter Widget 截图"
date: 2022-06-10
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

Flutter Widget 截屏，将图片保存在本地并且实现图片分享的功能。

## RepaintBoundary

Flutter 提供了支持截屏的 RepaintBoundary，在需要截取部分的外层嵌套，也可以截取某一子 Widget 内容；RepaintBoundary 的结构很简单，通过 key 来判断截取的 RenderObject，最终生成一个 RenderRepaintBoundary 对象；

RenderRepaintBoundary 是一个对象缓存着 widget 的 UI data 信息，当 viewTree 要重绘的时候，可以提高绘制效率。

## ui.Image

通过 RenderRepaintBoundary 获取的对象 .toImage() 的方法，对 widget 进行截屏，并输出其当前的 UI data，返回的 ui.Image 是原始的 RGBA bytes，pixelRatio 参数可以设置要输出图片的分辨率，默认一倍图，可根据情况调整。

toByteData() 生成的数据格式一般分三种：

- rawRgba：未解码的 byte；
- rawUnmodified：未解码且未修改的 byte，如灰度图；
- png 为我们常用的 PNG 图片；

## Directory

若需要存储本地，跟 Android/iOS 类似，首先获取存储路径，再进行存储操作；小菜借助三方插件 path_provider 来获取图片路径；

**path_provider** 提供了 getTemporaryDirectory（临时路径） / getApplicationDocumentsDirectory（全局路径）等，可以根据不同的需求存储不同路径；

## writeAsBytes

文件的保存很简单，直接将 Uint8List 写入到所在文件路径下即可；
