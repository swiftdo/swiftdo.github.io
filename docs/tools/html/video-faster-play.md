---
title: "网课视频加速播放"
sitemap:
  exclude: false
  changefreq: hourly
date: 2025-03-13
tags:
  - tools
  - html
---

## 背景
网课视频播放速度慢，需要加速播放。

## 解决方法
1. 打开“开发者工具”
2. 找到video标签,右键选择“copy>copy selector”
3. 点击“Console”, 输入 document.querySelector('此处换成我们前面一步复制出来的内容').playbackRate = 2.0; 然后回车即可

