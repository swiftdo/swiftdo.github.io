---
title: "Flutter Widget 截图(三)"
date: 2022-06-10
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

Flutter 屏幕截图，超出屏幕截图。

用于 Flutter 自定义截图，超出屏幕的部分也可以截取到。

首先写个小 Demo：

```dart
class _CaptureLongImagePageState extends State<CaptureLongImagePage> {
  GlobalKey repaintWidgetKey = GlobalKey(); // 绘图key值

  @override
  Widget build(BuildContext context) {
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: SystemUiOverlayStyle.dark,
      child: Scaffold(
        backgroundColor: Colors.white,
        body: RepaintBoundary(
          key: repaintWidgetKey,
          child: SingleChildScrollView(
            padding: const EdgeInsets.only(top: 30, bottom: 30),
            child: Column(
              children: List.generate(10, (index) => _buildCard(index)),
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
      ),
    );
  }

  _buildCard(int index) {
    return Container(
      margin: const EdgeInsets.only(left: 16, right: 16, top: 16),
      padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 30),
      alignment: Alignment.center,
      decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: const [
            BoxShadow(color: Colors.black26, blurRadius: 12),
          ]),
      clipBehavior: Clip.antiAlias,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(25),
              color: Colors.white,
              border: Border.all(
                color: Colors.black,
              ),
            ),
            alignment: Alignment.center,
            margin: const EdgeInsets.only(bottom: 16),
            width: 36,
            height: 36,
            child: Text(
              (index + 1).toString(),
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
          ),
          const Text(
            "OldBirds",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 25,
            ),
          ),
          const SizedBox(height: 20),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Icon(Icons.accessibility),
              Text('Hello World'),
            ],
          )
        ],
      ),
    );
  }

  /// 截屏图片生成图片，返回图片二进制
  Future<Uint8List?> _capturePngToByteData() async {...}

  /// 分享图片
  Future _shareUiImage() async {...}

  Future<ByteData?> _roundImage({
    double radius = 20,
    required ui.Image image,
  }) async {...}
}
```

为了减少代码文字占用，将 `_capturePngToByteData`、`_shareUiImage`、`_roundImage` 都进行了隐藏，它们的实现跟系列篇第二篇是一样的。
运行效果如下：

![](http://blog.oldbird.run/mweb/video1.gif)

生成了十张卡片，然后分别在 2 个位置进行截屏。

| 截图 1                                             | 截图 2                                             |
| -------------------------------------------------- | -------------------------------------------------- |
| ![](http://blog.oldbird.run/mweb/WechatIMG934.png) | ![](http://blog.oldbird.run/mweb/WechatIMG935.png) |

从中我们发现，2 次截屏的图片，都只是当前屏幕可见的内容，而不是我们期望的整个列表的内容。超出屏幕的部分如何截取到？

RepaintBoundary 会测量直接子 widget 的宽高，而此时它的直接子 widget（例子中的 SingleChildScrollView）的最大宽高就是屏幕宽高。
解决方法也很简单：把 RepaintBoundary 套在真正要截的外层，一般就是 Column（这个 widget 的宽高就是我们实际想截的宽高）

将 RepaintBoundary 包裹在非滚动组件中。

```dart
 body: SingleChildScrollView(
    padding: const EdgeInsets.only(top: 30, bottom: 30),
    child: RepaintBoundary(
      key: repaintWidgetKey,
      child: Column(
        children: List.generate(10, (index) => _buildCard(index)),
      ),
    ),
  ),
```

这样`RepaintBoundary` 与 `SingleChildScrollView` 位置交换后，再次点击截图按钮，生成的图片如下：

![](http://blog.oldbird.run/mweb/16549266412689.jpg)

当然还有一种方案就是给每个卡片都进行截图，然后对卡片进行拼接。此过程读者可自行验证。
