---
title: Flutter必备点
date: 2022-01-05T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/3sq67kmt/
---

## 必备要点

- Flutter 启动流程和渲染管线？
- 为什么要用 key ?
- Widget 更新机制?
  - Widget 只是一个配置且无法修改，Element 才是真正被使用的对象，且可以修改
  - 当新的 Widget 到来时将会 canUpdate 方法，来确定这个 Element 是否需要更新
  - canUpdate 对两个（新老） Widget 的 runtimeType 和 key 进行比较，从而判断出当前的 Element 是否需要更新。若 canUpdate 方法返回 true 说明不需要替换 Element，直接更新 Widget 就可以了。
- widget rebuild 了，一定会刷新么

- Flutter Stateless vs Stateful Widget vs Inherited widget
  - 生命周期
  - Stateless 它只能通过构造函数传入的数据来控制如何显示
- State 的生命週期

  - StatefulWidget 呼叫 createState 建立 State 時，mounted 為 true。
  - initState()：第一次建立 State 時，進行一次性的初始化。
  - didChangeDependencies()：在這裏進行 InheritedWidget 有關聯的初始化。
  - build()：在每次更新畫面時都會呼叫；以及呼叫 setState() 更新 state 時。
  - didUpdateWidget()：當父 Widget 重新建立子 Widget 時，以顯示含有相同的 runtimeType 以及 Ｗ idget.key 的 Ｗ idget 時。
  - deactive()：父 Widget 刪除了子 Ｗ idget 時呼叫。
  - dispose()：最後，當 Ｗ idget 被銷毀前，會呼叫 dispose()。
  - 最後，mounted 為 false。

- Flutter 的三棵树
  - framework 层的重要组成部分，Widget 树用来描述 UI 的配置信息，Element 树连接 配置信息和 UI 渲染的，而 RenderObject 负责根据配置信息去真正的进行 UI 渲染
