---
title: 'Flutter之 FVM 版本管理'
date: 2021-01-19
tags:
- flutter
sitemap:
  exclude: false
  changefreq: hourly
---

使用 Flutter 构建应用程序，我们一般会选用 stable 版本的 flutter，因为它是个稳定版本。如果你要用 Flutter 尝试写个 web 应用，就必须得使用 beta 版本，因为现在只有 beta 版本支持 web 开发。

这就意味着，在 web 开发和应用程序开发的时候，你需要卸载当前的版本，然后去安装另外一个版本。这是个很耗时的操作。可能你的网速快，机器性能好，不在乎这么点时间。但如果需要经常性切换 Flutter 版本，这样的操作就很痛苦了。事不过三，过三必重构(合格的程序员都喜欢偷懒，不做重复工作)

> 可能还有更苦逼的，同时开发多个应用，每个应用的 Flutter 版本还不一样，这就受不了了吧。

如果你写过 python，就会说：直接给每个项目创建个虚拟环境不就可以了。

如果 flutter 也能有这么个虚拟环境管理工具就好了。

而 [https://github.com/leoafarias/fvm](https://github.com/leoafarias/fvm) 就能满足需求。

> Flutter Version Management: A simple app & cli to manage Flutter SDK versions.

fvm 能够让用户同时在本地安装并缓存多个 Flutter 版本，并为项目创建指定 Flutter 版本的软链接，或者在全局环境创建指定版本的 Flutter 软链接，还可以快速在各个版本间切换使用。

世界那么大，你能遇到的别人也能遇到，你想偷的懒别人也一样想。话说回来，如果产品能解决痛点，会缺用户么?

## fvm 安装

```sh
pub global activate fvm
```

## fvm 常用命令

一般需要查看命令的使用说明，都会通过 `--help` 查看。

```sh
$ fvm --help
Flutter Version Management: A cli to manage Flutter SDK versions.

Usage: fvm <command> [arguments]

Global options:
-h, --help       Print this usage information.
    --verbose    Print verbose output.

Available commands:
  config     Set configuration for FVM
  flutter    Proxies Flutter Commands
  install    Installs Flutter SDK Version
  list       Lists installed Flutter SDK Version
  releases   Lists Flutter SDK releases.
  remove     Removes Flutter SDK Version
  use        Which Flutter SDK Version you would like to use
  version    Prints the currently-installed version of FVM

Run "fvm help <command>" for more information about a command.
```

* config： 对 fvm 进行配置
* flutter： 对 Flutter 的命令进行代理
* install： 安装 Flutter 版本
* list： 查看已安装的 Flutter 版本
* releases： 查看 Flutter sdk 都有哪些发布的版本
* remove：删除已安装的某个 Flutter 的版本
* use: 选择你要使用的版本
* version: 查看安装 fvm 的版本

对于子命令的更多使用方法，我们可以通过  `fvm help <command>` 进行查看，比如：

```sh
$ fvm help use
Which Flutter SDK Version you would like to use

Usage: fvm use [arguments]
-h, --help      Print this usage information.
    --global    Sets version as the global version.
                Make sure Flutter PATH env is set to: /Users/oheroj/fvm/default/bin
    --force     Skips command guards that does Flutter project checks.

Run "fvm help" to see global options.
```

* -h，--help ：可以查看更多使用信息
* --global: 将这个版本设置为全局版本
* --force: 跳过执行 Flutter 项目检查命令

命令学习的套路就是多用 help。其他命令读者可自行学习。

## 实战

### 创建全新项目

接下来我们将用 fvm 创建一个新 flutter 应用项目，采用 flutter 的 beta 版本。


1. 安装 beta 的 flutter 版本

    ```sh
    $ fvm install beta
    Installing version: beta
    Cloning into '/Users/oheroj/fvm/versions/beta'...
    remote: Enumerating objects: 3, done.
    remote: Counting objects: 100% (3/3), done.
    remote: Compressing objects: 100% (3/3), done.
    remote: Total 279564 (delta 0), reused 0 (delta 0), pack-reused 279561
    Receiving objects: 100% (279564/279564), 123.05 MiB | 2.52 MiB/s, done.
    Resolving deltas: 100% (216093/216093), done.
    Updating files: 100% (5185/5185), done.
    Version installed: beta
    Downloading Dart SDK from Flutter engine 7a8f8ca02c276dce02f8dd42a44e776ac03fa9bc...
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100  173M  100  173M    0     0  5686k      0  0:00:31  0:00:31 --:--:-- 4431k
    Building flutter tool...
    Flutter 1.25.0-8.3.pre • channel beta • https://github.com/flutter/flutter.git
    Framework • revision 5d36f2e7f5 (5 days ago) • 2021-01-14 15:57:49 -0800
    Engine • revision 7a8f8ca02c
    Tools • Dart 2.12.0 (build 2.12.0-133.7.beta)
    ```


1. 创建 demo 目录，然后采用 beta 版本

    ```sh
    $ mkdir demo
    $ cd demo
    $ fvm use beta --force
    Project now uses Flutter: beta
    ```
    这个时候我们看下目录下多了 .fvm 
    
    ```sh
    $ ls -all
    total 0
    drwxr-xr-x  3 oheroj  staff   96 Jan 19 21:14 .
    drwxr-xr-x  5 oheroj  staff  160 Jan 19 21:04 ..
    drwxr-xr-x  4 oheroj  staff  128 Jan 19 21:14 .fvm
    $ tree .fvm
    .fvm
    ├── flutter_sdk -> /Users/oheroj/fvm/versions/beta
    └── fvm_config.json
    ```
    
    flutter_sdk 软连接到了 `/Users/oheroj/fvm/versions/beta`
    
1. 初始化项目

    ```
    $ fvm flutter create .
    ```

    demo 项目就初始完成了
    
1. vscode 配置 和 Android Studio 的配置
    
    直接参考官方文档：[https://github.com/leoafarias/fvm](https://github.com/leoafarias/fvm)

### 给旧项目添加 fvm 

对于就项目我们如果想切到 fvm 的 flutter 环境，这个步骤还是非常简单的。

在项目根路径下执行：

```sh
$ fvm use beta --force 
```

完成上面的命令，会有个 `.fvm` 文件夹生成，然后配置 IDE，方法同上。

可以愉快的玩耍 flutter 了。


### 拉取已用 fvm 的项目
加上我们项目已经用 fvm 创建好了，这个时候我们把仓库提交到 git 仓库。 那么，如果你这个仓库在另一台机器拉取下来，这个时候该如何让 fvm 工作？

* 确保你这台机器已经有了 fvm 的环境
* 在项目根路径下，直接执行
  ```sh
  $ fvm install
  ```
  运行完成，就实现了安装。
  假设你机器上只有 beta 版本，但是这个项目用了 stable 版本，如果上面运行说未找到 stable 版本，那么你需要先安装下 stable 版本
  
  ```sh
  $ fvm install stable
  $ fvm install
  ```
  
* 然后配置 IDE，方法同上。
