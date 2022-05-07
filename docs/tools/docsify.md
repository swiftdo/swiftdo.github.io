
---
title: 'docsify'
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-16
tags:
- tools
- yaml
---

前段日子，对设计模式进行了一个梳理，把梳理的文档整理到了仓库：[https://github.com/swiftdo/design-patterns](https://github.com/swiftdo/design-patterns)。

最近，发现直接在 github 上阅读 md 文件体验上不是很好。所以想着对文档进行 html 化，给这个仓库添加个静态站点。

之前用过 hexo, vuepress, gitbook 这些工具。但是如果对现有文档采用这些工具，会有一些麻烦：
* 如果采用 hexo, vuepress，需要对现有的 md 文件头部增加一些额外的说明。还有一些前期的配置
* 如果用 gitbook, 样式太过单一

对于这种不想改动源代码，不想太多配置，又想比较符合个人审美的需求，发现还真有个工具比较符合。那就是 **[docsify](https://docsify.js.org/#/zh-cn/)**。

![-w1606](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1add0452c9a44adf8b369d960f1c350b~tplv-k3u1fbpfcp-zoom-1.image)

看到这个首页，有木有觉得非常非常简洁，非常非常美观。不管你喜不喜欢，反正我是爱了。


## docsify

docsify 是一个文档网站生成器。可以快速帮你生成文档网站。不同于 GitBook、Hexo 的地方是它不会生成静态的 .html 文件，所有转换工作都是在运行时。如果你想要开始使用它，只需要创建一个 index.html 就可以开始编写文档并直接部署在 GitHub Pages。

![-w1210](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f31d5fb591b44cb1baf66dd945fb6566~tplv-k3u1fbpfcp-zoom-1.image)

Github 地址：[https://github.com/docsifyjs/docsify/](https://github.com/docsifyjs/docsify/)

它的主要特性如下：

* 无需构建，写完文档直接发布（运行时markdown文档转换）
* 容易使用并且轻量（压缩后 ~21kB，当然这里不包括markdown文档的大小）
* 智能的全文搜索
* 丰富的API
* 支持Emoji，可以在文中添加表情
* 兼容IE11
* 支持服务端渲染SSR

更多细节，请查阅文档：[https://docsify.js.org/#/zh-cn/](https://docsify.js.org/#/zh-cn/)

我按照官方文档走了一遍，成功把站点建成。可以体验下：

![-w1593](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/789c552339dc4462865995790a39c226~tplv-k3u1fbpfcp-zoom-1.image)

站点地址：[https://oldbird.run/design-patterns](https://oldbird.run/design-patterns/#/)

整体操作非常简单，途中遇到的唯一为题就是 Gitalk 遇到一些问题。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/488540f3435b460a975f21599f9e601e~tplv-k3u1fbpfcp-zoom-1.image)

## Gitalk

Gitalk 是一个基于 GitHub Issue 和 Preact 开发的评论插件。


![-w1207](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dfb6692174544e5fa64ed4bf7f7fc396~tplv-k3u1fbpfcp-zoom-1.image)

Github 地址：[https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)

Gitalk 的特性：

* 1、使用 GitHub 登录
* 2、支持多语言 [en, zh-CN, zh-TW, es-ES, fr, ru]
* 3、支持个人或组织
* 4、无干扰模式（设置 distractionFreeMode 为 true 开启）
* 5、快捷键提交评论 （cmd|ctrl + enter）

## Gitalk 配置

![-w1494](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1151e3b622f04a81ab2d04fedb168c33~tplv-k3u1fbpfcp-zoom-1.image)

集成到 docsify 还是非常简单的。这里主要说明下参数的填写：

### 首先申请 GitHub OAuth application：

* 1、打开 Github 网站登陆后，点击右上角的用户图标，选择 Settings
* 2、在 Settings 页面选择 Developer settings 选项。
* 3、在 Developer settings 选择 OAuth Apps, 然后会在页面右边有一个 New OAuth App 按钮，点击这个按钮就进入到新建 OAuth application 页面。

    ![-w625](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0bcfb9f0c914a19b2c0987d0766851b~tplv-k3u1fbpfcp-zoom-1.image)

### Gitalk 的参数说明

以 `https://github.com/swiftdo/design-patterns` 为例：

```js
const gitalk = new Gitalk({
      clientID: '2c899ee8d4dc774ee56f',
      clientSecret: 'e69d5fcc23e6c8396a31ad3a3a011b4523a3a73e',
      repo: 'design-patterns',
      owner: 'swiftdo',
      admin: ['OHeroJ'],
      distractionFreeMode: false,
    })
```

* clientID：申请的 OAuth App 的 Client ID
* clientSecret：申请的 OAuth App 的 Client Secret
* repo：Github 上的仓库名字，用于存放 Gitalk 评论
* owner：Github 仓库的所有者的名字
* admin：Github 仓库的所有者和合作者 (对这个 repository 有写权限的用户)

### 问题出现我再告诉大家

```
所有年轻人
年轻人 年轻人
问题出现我再告诉大家
告诉大家
```

按照其教程配置后，出现了 `Error: Not Found.` 的错误。

有的时候 URL 中带着页面标题的链接，导致 URL 长度超过了 50 个字符长度，会导致创建评论 issues 失败(长度超过50个会创建失败)。

怎么解决？配置下 id 即可(这是docsify文档上没有的)

```js
const gitalk = new Gitalk({
      clientID: '2c899ee8d4dc774ee56f',
      clientSecret: 'e69d5fcc23e6c8396a31ad3a3a011b4523a3a73e',
      repo: 'design-patterns',
      owner: 'swiftdo',
      admin: ['OHeroJ'],
      distractionFreeMode: false,
      id: decodeURI(window.location.pathname),
    })
```

虽然 id 不是必填参数，但是非常重要：

id参数用于评论记录和页面对应的唯一标记，有的时候发现好几个页面评论是一样的，就是由于配置id参数的时候，这几个页面的id是一样导致。由于id参数默认值是 location.href 页面URL。

## 总结 

docsify 也是我第一次使用，有种一见钟情的感觉。对于我后面的一些专题类型的文章还是非常有重要(一个专题一个站点)。

因为第一次使用，docsify 一些高级的特性还未使用到。所以还是看下文档为好。

更多阅读，请关注微信公众号：**OldBirds**





















