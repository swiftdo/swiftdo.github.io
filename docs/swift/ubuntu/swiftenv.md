---
sitemap:
  exclude: false
  changefreq: hourly
title: "swiftenv篇"
date: 2022-01-12
tags:
  - swift
  - ubuntu
  - vapor
  - swiftenv
---

`swiftenv` 是 Swift 的版本管理器，可以对特定项目指定特定的 Swift 的版本，或者全局切换 Swift 的版本。

- swiftenv 的源码地址：[kylef/swiftenv](https://github.com/kylef/swiftenv)
- swiftenv 的官方文档：[swiftenv.fuller.li](https://swiftenv.fuller.li/en/latest/)

## 安装

1. 检出 swiftenv 的源码，且推荐将其放置到 `~/.swiftenv` 中（但只要设置 `SWIFTENV_ROOT` 就可以安装在别处）。

   ```shell
   $ git clone https://github.com/kylef/swiftenv.git ~/.swiftenv
   ```

1. 配置环境

   如果是 `Bash`：

   ```shell
   $ echo 'export SWIFTENV_ROOT="$HOME/.swiftenv"' >> ~/.bash_profile
   $ echo 'export PATH="$SWIFTENV_ROOT/bin:$PATH"' >> ~/.bash_profile
   $ echo 'eval "$(swiftenv init -)"' >> ~/.bash_profile
   ```

   **注意**：在某些平台上，您可能需要修改 `~/.bashrc` 而不是 `~/.bash_profile`。

   如果是 `ZSH`：

   ```shell
   $ echo 'export SWIFTENV_ROOT="$HOME/.swiftenv"' >> ~/.zshenv
   $ echo 'export PATH="$SWIFTENV_ROOT/bin:$PATH"' >> ~/.zshenv
   $ echo 'eval "$(swiftenv init -)"' >> ~/.zshenv
   ```

   如果是 `Fish`：

   ```shell
   $ echo 'set -gx SWIFTENV_ROOT "$HOME/.swiftenv"' >> ~/.config/fish/config.fish
   $ echo 'set -gx PATH "$SWIFTENV_ROOT/bin" $PATH' >> ~/.config/fish/config.fish
   $ echo 'if which swiftenv > /dev/null; status --is-interactive; and source (swiftenv init -|psub); end' >> ~/.config/fish/config.fish
   ```

1. 重新启动您的 shell 以使更改生效。

## 卸载

1. 从 `.bash_profile`、`.bashrc`、`.zshrc`、`fish.config` 中删除 swiftenv 相关安装期间加入的配置
2. 删除 SWIFTENV_ROOT 指向的目录，比如 `~/.swiftenv`。

   ```shell
   $ rm -fr ~/.swiftenv
   ```

## 版本

安装`swiftenv`后，您可以通过相关指令查看已安装的现有 Swift 版本：

```shell
$ swiftenv versions
  5.2.5
  5.3
* 5.5.1 (set by /home/mac/Swift/team-boke/.swift-version)
```

### 安装指定版本的 Swift

您可以使用`swiftenv install`快速安装。

```shell
$ swiftenv install 5.5.1
```

### 查看所有 Swift 版本

你可以列出所有可安装的 Swift 版本

```shell
$ swiftenv install --list
5.2.4
5.2.5
5.3
5.3.1
5.3.2
5.3.3
5.4
5.4.1
5.4.2
5.4.3
5.5
5.5.1
```

您还可以列出所有可以安装的 Swift 二进制快照

```shell
$ swiftenv install --list-snapshots
5.3-DEVELOPMENT-SNAPSHOT-2020-08-15-a
5.3-DEVELOPMENT-SNAPSHOT-2020-08-17-a
5.3-DEVELOPMENT-SNAPSHOT-2020-08-18-a
5.3-DEVELOPMENT-SNAPSHOT-2020-08-27-a
....
```

### 切换 Swift 版本

swiftenv 允许您在全局或本地进行 Swift 版本的切换。您可以配置默认使用的全局 Swift 版本，除非被覆盖。

**全局版本**

您可以使用`swiftenv global`查看当前的全局 Swift 版本。

```shell
$ swiftenv global
5.5.1
```

切换全局版本：

```shell
$ swiftenv global 5.2.0
```

**本地版本**

您可以使用 `.swift-version` 文件覆盖任何项目中的全局版本。 Swift 版本文件将指示要使用的版本。

设置本地 Swift 版本：

```shell
$ swiftenv local 5.2.5
```

现在，当您在当前目录中时，Swift 版本将自动更改为本地版本：

```
$ swiftenv global
5.5.1

$ swiftenv version
5.2.5 (set by /home/mac/Swift/team-boke/.swift-version)
```

当您切换到另一个没有`.swift-version`文件的目录时，将使用全局版本：

```shell
$ cd ../
$ swiftenv version
5.5.1 (set by /home/mac/.swiftenv/version)
```

### 卸载 Swift 版本

卸载特定的 Swift 版本。

```shell
$ swiftenv uninstall 5.2.0
```

### which

显示可执行文件的完整路径。

```shell
$ swiftenv which swift
/home/mac/.swiftenv/versions/5.5.1/usr/bin/swift

$ swiftenv which lldb
/home/mac/.swiftenv/versions/5.5.1/usr/bin/lldb

$ swiftenv which sourcekit-lsp
/home/mac/.swiftenv/versions/5.5.1/usr/bin/sourcekit-lsp
```
