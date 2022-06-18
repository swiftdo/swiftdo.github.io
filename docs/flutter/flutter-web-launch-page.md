---
title: "Flutter for Web 自定义启动加载页面"
date: 2022-06-18
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
---

打开站点，首先会出现空白页面，且顶部进度条不断再走。

![111ee07159999fffff3](http://blog.oldbird.run/mweb/111ee07159999fffff3.gif)

出现的原因：首屏渲染时间长，单一文件加载、解析时间过长，且静态资源缺少 CDN 化的支持，影响首屏的渲染时间。

而一个站点，如果首屏加载太长，很容易引起使用者放弃打开，空白页面尤为乏味，如果不是上面有个进度条，还真让人觉得站点挂了。

如果从根本上暂时无法解决这个问题，那么可以从体验的角度上进行优化，这是常用计俩。

> 为了提高用户体验，首屏添加 loading 动画很有必要，转移用户关注点。

在启动 Flutter 应用的时候，无论是在移动设备还是 Web 中，在应用程序显示其第一个屏幕之前都会显示一个空白屏幕。暂且我们将这个页面叫启动页。

在移动原生端，各自平台提供了自定义该白屏界面的操作，修改也较为简单，不在本文讲解范围。但是在 Web 端，官方没有相关教程，那如何在启动时向用户展示一些不同的东西？

下面是本文的最终实现：

![111ee07159999fffff4](http://blog.oldbird.run/mweb/111ee07159999fffff4.gif)

启动页变样了，那这个效果是如何实现的呢？且看我一一写来。

## 了解 Flutter 中的 web 文件

在我们创建一个新的 Flutter 项目后，可以看到针对的每个原生平台的文件夹：android、ios、web、macos、linux、windows等，那么一起看看 web 文件夹下的内容。

```sh
web/
├── icons/
├── favicon.png
├── index.html
└── manifest.json
```

在这里，我们可以更改 Web 应用的一些属性，例如修改显示在浏览器选项卡上的图标，我们就替换 `favicon.png` 即可。

`index.html` 是站点的入口，其中加载了 `main.dart.js` 用于启动 Flutter 文件。

```dart
<body>
	<!—- ... —->
	<script src="main.dart.js" type="application/javascript"></script>
</body>
```

## 实现具体步骤

打开`index.html`会发现如下代码：

```html
<body>
    <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('flutter-first-frame', function () {        navigator.serviceWorker.register('flutter_service_worker.js');
      });
    }
    </script>
    <script src="main.dart.js" type="application/javascript"></script>
</body>
```

我们只需在 `<script>` 之上插入代码，插入后如下：

```html
<body>
  <!--loading 标签-->
  <div id="app_splash">
    <div class="preloader">
      <div class="cs-loader">
        <div class="cs-loader-inner">
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
        </div>
      </div>
    </div>
  </div>
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('flutter-first-frame', function () {
        document.getElementById("app_splash")?.remove();
        navigator.serviceWorker.register('flutter_service_worker.js');
      });
    }
  </script>
  <script src="main.dart.js" type="application/javascript"></script>
</body>

</html>
```

然后记得在 `navigator.serviceWorker.register('flutter_service_worker.js');` 之上加入移除 `app_splash` 的逻辑：

```js
document.getElementById("app_splash")?.remove();
```

目的是在flutter 载入第一帧的时候，就移除启动页。

我们重新运行代码：

![111ee07159999fffff5](http://blog.oldbird.run/mweb/111ee07159999fffff5.gif)

我们会看到右上角，在进度条下出现了6个黑点。为了实现目标效果中的动效，我们需要给它添加一些样式(css)：

```html
<!DOCTYPE html>
<html>

<head>
  ...
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="favicon.png" />
  <title>flutter</title>
  <link rel="manifest" href="manifest.json">
</head>
```

我们在 `<title>flutter</title>` 之上插入代码，如下：

```html
<!DOCTYPE html>
<html>

<head>
  ...
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="favicon.png" />
  <!--loading 样式 -->
  <style type="text/css">
    /* 初始动画 */
    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: white;
      /*#ee6736*/
      ;
      z-index: 9999;
      transition: opacity .65s
    }

    .preloader-hidden-add {
      opacity: 1;
      display: block
    }

    .preloader-hidden-add-active {
      opacity: 0
    }

    .preloader-hidden {
      display: none
    }

    .cs-loader {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%
    }

    .cs-loader-inner {
      transform: translateY(-50%);
      top: 50%;
      position: absolute;
      width: 100%;
      color: #EF5138;
      text-align: center
    }

    .cs-loader-inner label {
      font-size: 20px;
      opacity: 0;
      display: inline-block
    }

    @keyframes lol {
      0% {
        opacity: 0;
        transform: translateX(-300px)
      }

      33% {
        opacity: 1;
        transform: translateX(0)
      }

      66% {
        opacity: 1;
        transform: translateX(0)
      }

      100% {
        opacity: 0;
        transform: translateX(300px)
      }
    }

    .cs-loader-inner label:nth-child(6) {
      animation: lol 3s infinite ease-in-out
    }

    .cs-loader-inner label:nth-child(5) {
      animation: lol 3s .1s infinite ease-in-out
    }

    .cs-loader-inner label:nth-child(4) {
      animation: lol 3s .2s infinite ease-in-out
    }

    .cs-loader-inner label:nth-child(3) {
      animation: lol 3s .3s infinite ease-in-out
    }

    .cs-loader-inner label:nth-child(2) {
      animation: lol 3s .4s infinite ease-in-out
    }

    .cs-loader-inner label:nth-child(1) {
      animation: lol 3s .5s infinite ease-in-out
    }
  </style>
  <title>flutter</title>
  <link rel="manifest" href="manifest.json">
</head>
```
重新运行代码：

![111ee07159999fffff6](http://blog.oldbird.run/mweb/111ee07159999fffff6.gif)

页面顶部没有默认的加载进度条，且六个原点在页面中间，重点是有动画了。

## 启动页的其他效果

有些人会说：“我只会 flutter, 没有 html 基础，写不出这种效果，怎么办？”。

对于这个问题，肯定是建议去学习下 html 了，也不是很难。当然如果你仅仅是想要个效果的话，那可以网上搜索一些加载效果。

为了你搜索少走弯路，[《前端页面初始化动画 loading 的几种效果》](https://www.yuanqiao.pw/post/205) 这篇文章里提供了5个效果，且提供了预览，可以直接借鉴使用。

## 题外话

最近在将一个旧项目迁移到 Flutter 3。现已已迁移完毕，修改站点的全部UI，支持了黑暗模式，支持响应式布局，可以将项目直接运行到 macOS 上。

站点内容方面也增加了 `Flutter 面试题` 分类，对于面试者来说，是一个非常好的资源。

* 在线预览：[https://webdemo.oldbird.run/](https://webdemo.oldbird.run/)
* 开源仓库：[https://github.com/swiftdo/web-demo](https://github.com/swiftdo/web-demo)

![111ee07159999fffff9](http://blog.oldbird.run/mweb/111ee07159999fffff9.gif)