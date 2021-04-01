---
sitemap:
  exclude: false
  changefreq: hourly
title: '配置编辑器 VSCode'
date: 2020-4-1
tags:
- haskell
- vscode
---

当我们安装好了 stack 后，我们还需要配置 vscode。

![haskell项目](http://blog.loveli.site/mweb/Screen%20Shot%202021-04-01%20at%208.17.04%20PM.png)

现在我们的工程代码没有高亮，我们需要安装插件，搜索 heskell：

![haskell 插件](http://blog.loveli.site/mweb/WechatIMG161.jpeg)

安装完成后，代码高亮了：

![Screen Shot 2021-04-01 at 8.24.55 P](http://blog.loveli.site/mweb/Screen%20Shot%202021-04-01%20at%208.24.55%20PM.png)

但是会有警告出现，怎么解决？

点击警告中的 `implicit cradle`，我们会跳转到 [https://hackage.haskell.org/package/implicit-hie](https://hackage.haskell.org/package/implicit-hie)

> Auto generate a stack or cabal multi component hie.yaml file

自动生成一个stack或cabal多组件 hie.yaml 文件。

我们需要安装这个工具，打开终端：

```sh
$ stack install implicit-hie
```

安装完成后，需要将工具的路径 `~/.local/bin` 添加到 PATH 中。

```
export PATH="$PATH:$HOME/.local/bin"
```

写入到 `~/.zshrc` 中，然后让其生效：

```sh
source ~/.zshrc
```

最后我们通过 `gen-hie` 生成 `hie.yaml` 文件：

```sh
$ cd hello # 项目根路径
$ gen-hie > hie.yaml
```

完成后，我们需要重启 VSCode，可以看到项目有 hie.yaml 文件：

![hei.yaml](http://blog.loveli.site/mweb/WechatIMG164.jpeg)

当我们将鼠标移入方法上面，会有相关方法说明弹出且没有导入失败问题，说明完成安装：

![方法注解](http://blog.loveli.site/mweb/Screen%20Shot%202021-04-01%20at%209.11.10%20PM.png)

如果项目还有报红，运行下项目即可：

```sh
$ stack run
```

到这里，我们就完成了 Haskell 在 VSCode 的环境配置。










