---
sitemap:
  exclude: false
  changefreq: hourly
title: 'iOS 优化角度'
date: 2020-11-04
tags:
- swift
- ios
---

## 包体积优化

* 1、图片：

  本地图片尽可能改为从网络下载。

  本地图片可以无损压缩减小图片大小。

  使用`Assets.xcassets`来管理图片。

  使用阿里云的`iconfont`加载图片。

* 2、合并功能重复的类库，删除不必要的文件和第三方库

* 3、清除类里面不用的代码

## 内存优化

1、重用问题：如`UITableViewCells`、`UITableViewHeaderFooterViews`等设置正确的reuseIdentifier，充分重用；

2、尽量把view设置为不透明（alpha最好不要是0）：可设置opque为NO，图层的半透明取决于图片和其本身合成的图层为结果，可提高性能；

3、不要使用太复杂的`XIB/Storyboard`：不仅后期维护困难，而且比纯代码耗能太多。

4、尽量使用`frame`布局，不要使用`autolayout`

5、选择正确的数据结构，避免反复处理数据：减少接口调用次数。选择对业务场景最合适的数组结构，来极少数据操作。

6、gzip/zip压缩：当从服务端下载相关附件时，可以通过`gzip/zip`压缩后再下载，使得内存更小，下载速度也更快。

7、延迟加载：对象懒加载。比如，网络请求失败时显示的提示界面，可能一直都不会使用到，因此应该使用延迟加载。

8、数据缓存：

对于cell的行高要缓存起来，使得reload数据时，效率也极高。

对于一些网络数据不需要每次都请求的，应该缓存起来，

可以写入数据库，也可以通过plist文件存储。

9、处理内存警告：不需要的对象及时释放

10、重用大开销对象：一些objects的初始化很慢，比如`NSDateFormatter`和`NSCalendar`，但又不可避免地需要使用它们。通常是作为属性存储起来，防止反复创建。

11、使用`Autorelease Pool`：在某些循环创建临时变量处理数据时，自动释放池以保证能及时释放内存;

12、使用`instruments`等工具排查内存泄漏，减少或避免泄漏

## 流畅性优化

13、线程优化，耗时操作放到子线程：例如，子线程请求数据，主线程刷新 UI

14、runloop的mode，scrollview滑动时使用UITrackingRunLoopMode，其他情况使用kCFRunLoopDefaultMode

15、尽量减少视图数量和层次。

16、减少离屏渲染。

On-Screen Rendering：当前屏幕渲染，在当前用于显示的屏幕缓冲区进行渲染操作
Off-Screen Rendering：离屏渲染，在当前屏幕缓冲区以外新开辟一个缓冲区进行渲染操作

**离屏渲染消耗性能的原因**
* 需要创建新的缓冲区
* 离屏渲染的整个过程，需要多次切换上下文环境，先是从当前屏幕（On-Screen）切换到离屏（Off-Screen）；等到离屏渲染结束以后，将离屏缓冲区的渲染结果显示到屏幕上，又需要将上下文环境从离屏切换到当前屏幕   
 
**哪些操作会触发离屏渲染？**
* 光栅化，`layer.shouldRasterize = YES`
* 遮罩，`layer.mask`
* 圆角，同时设置`layer.masksToBounds = YES`、`layer.cornerRadius`大于 0
考虑通过`CoreGraphics`绘制裁剪圆角，或者叫美工提供圆角图片
* 阴影，`layer.shadowXXX`
* 如果设置了`layer.shadowPath`就不会产生离屏渲染

## 启动优化

1、按需加载，不必要的接口后置请求，包含数据结构优化，前后端定义好需要哪些数据。

2、启动图压缩，减小大小

3、广告图空闲时间预加载，下次启动再展示

4、线程优化，耗时操作放在子线程

5、移除不需要的动态库（dylib）、类、库，可减少加载和编译时间

6、减少宏定义、静态变量

7、release版不要打印（NSLog）

## 耗电优化

程序的耗电主要在以下四个方面：

* CPU 处理
* 定位
* 网络
* 图像
优化的途径主要体现在以下几个方面：

* 尽可能降低 CPU、GPU 的功耗。
* 尽量少用 定时器。
* 优化 I/O 操作。
    * 不要频繁写入小数据，而是积攒到一定数量再写入
    * 读写大量的数据可以使用 Dispatch_io ，GCD 内部已经做了优化。
    * 数据量比较大时，建议使用数据库

* 网络方面的优化
    * 减少压缩网络数据 （XML -> JSON -> ProtoBuf），如果可能建议使用 ProtoBuf。
    * 如果请求的返回数据相同，可以使用 NSCache 进行缓存
    * 使用断点续传，避免因网络失败后要重新下载。
    * 网络不可用的时候，不尝试进行网络请求
    * 长时间的网络请求，要提供可以取消的操作
    * 采取批量传输。下载视频流的时候，尽量一大块一大块的进行下载，广告可以一次下载多个
* 定位层面的优化
    * 如果只是需要快速确定用户位置，最好用 CLLocationManager 的 requestLocation 方法。定位完成后，会自动让定位硬件断电
    * 如果不是导航应用，尽量不要实时更新位置，定位完毕就关掉定位服务
    * 尽量降低定位精度，比如尽量不要使用精度最高的 kCLLocationAccuracyBest
    * 需要后台定位时，尽量设置 pausesLocationUpdatesAutomatically 为 YES，如果用户不太可能移动的时候系统会自动暂停位置更新
    * 尽量不要使用 startMonitoringSignificantLocationChanges，优先考虑 startMonitoringForRegion:
* 硬件检测优化
    * 用户移动、摇晃、倾斜设备时，会产生动作(motion)事件，这些事件由加速度计、陀螺仪、磁力计等硬件检测。在不需要检测的场合，应该及时关闭这些硬件


