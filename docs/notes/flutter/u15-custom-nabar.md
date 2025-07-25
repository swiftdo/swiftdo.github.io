---
title: 高度自定义 navbar 联动动效
date: 2021-06-07T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/w63zmm1z/
---

SliverAppBar 控件可以实现页面头部区域展开、折叠的效果。

![](http://blog.oldbird.run/mweb/467322-20200118181534530-1611648292.gif)

想更具体了解 SliverAppBar 使用，可参考 [yechaoa/flutter_sliverappbar](https://codechina.csdn.net/mirrors/yechaoa/flutter_sliverappbar)

SliverAppBar 联动效果的控制的还是比较薄弱的。在真正产品开发中，联动需求是非常奇葩的。

比如

- 滚动到一定高度的时候改变状态栏文字颜色

- 滚动的时候，实现背景色渐变：

  ![](http://blog.oldbird.run/mweb/gradient_background.gif)

- 某个元素的位置移动等等

为了深度自定义联动效果，Flutter 给你提供了 `SliverPersistentHeader`。

## SliverPersistentHeader

> Creates a sliver that varies its size when it is scrolled to the start of a viewport.

SliverAppBar 的动效其实也是基于 `SliverPersistentHeader` 实现的。

**越底层，可操控的手段越多**

### SliverPersistentHeader 属性

- delegate：SliverPersistentHeaderDelegate
- pinned 收缩到最小高度的时候是否可见
  - true：SliverPersistentHeader 会以折叠高度固定显示在头部，
  - false：缩小到折叠高度后滑出页面
- floating: 是否下滑的同时是否先展示

各种参数配置的效果可参考这位大佬的文章： [SliverPersistentHeader 使用指南](https://juejin.cn/post/6887396184015208461#heading-5)

## SliverPersistentHeaderDelegate

SliverPersistentHeader 的核心就是使用 SliverPersistentHeaderDelegate，我们需要对其进行子类化，也是非常容易的：

```dart

class PersistentHeaderBuilder extends SliverPersistentHeaderDelegate {
  final double max;
  final double min;
  final Widget Function(BuildContext context, double offset, bool overlapsContent) builder;

  PersistentHeaderBuilder(
      {this.max = 120, this.min = 80, required this.builder})
      : assert(max >= min && builder != null);

  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return builder(context, shrinkOffset, overlapsContent);
  }

  @override
  double get maxExtent => max;

  @override
  double get minExtent => min;

  @override
  bool shouldRebuild(covariant PersistentHeaderBuilder oldDelegate) =>
      max != oldDelegate.max ||
      min != oldDelegate.min ||
      builder != oldDelegate.builder;
}
```

要啥都从外部传进来，非常简单的实现了一个通用的 delegete。

## 使用自定义的 PersistentHeaderBuilder

```dart
// ...
@override
Widget build(BuildContext context) {
    // 状态栏高度
    final navh = style.size.navBarHeight + style.size.statusBarHeight;
    return SliverPersistentHeader(
        pinned: true,
        floating: false,
        delegate: PersistentHeaderBuilder(
        min: navh,
        max: maxh,
        builder: (context, offset, overlapsContent) {
            return AnnotatedRegion<SystemUiOverlayStyle>(
                value:
                     offset > navh ? SystemUiOverlayStyle.dark : SystemUiOverlayStyle.light,
                child: _buildContent(context, offset, overlapsContent),
            );
        },
        ),
    );
}

Widget _buildContent(BuildContext context, double offset, bool overlapsContent) {
    // 有了 offset 你可以做任何动效了
}
```

使用也非常简单，你想做啥就设置啥。样例中，我们在滚动偏移量超过了导航栏的高度，会去改变状态栏的颜色。
因为拿到 `offset`, 所以我们可以根据这个 offset 做任何联动效果了。

## 总结

SliverPersistentHeader 可以很好的控制联动效果，因为可以从 delegate 中获取到 offset。SliverAppBar 其内部已经实现了 offset 相关的动效，给外部的更多是内容填充。

要实现类似复杂联动动画，也就 SliverPersistentHeader 不可。原理上能监听到滚动的 offset，就可以实现类似效果。所以通过监听 Scrollview 的滚动事件也是可以的(没深入底层代码，说不好也是这么干的)。

背景渐变效果的实现：[miroslava-podybailo/flutter_sliver_header_delegate](https://github.com/miroslava-podybailo/flutter_sliver_header_delegate)
