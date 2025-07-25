---
title: Flutter RepaintBoundary
date: 2022-06-10T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/rzw3stf3/
---

Flutter Inspector 中点击 “Repaint Rainbow” 图标，它会为所有 RenderBox 绘制一层外框，并在它们重绘时会改变颜色。可以帮我们找到 App 中频繁重绘导致性能消耗过大的部分。

一个小动画可能会导致整个页面重绘，这个时候使用 RepaintBoundary Widget 包裹它，可以将重绘范围缩小至本身所占用的区域，这样就可以减少绘制消耗。

例如，页面的进度条动画刷新时会导致整个布局频繁重绘。

但是使用`RepaintBoundary Widget`会创建额外的绘制画布，这将会增加一定的内存消耗。
