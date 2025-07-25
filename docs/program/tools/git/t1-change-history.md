---
title: 删除历史文件
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17T00:00:00.000Z
tags:
  - tools
  - git
createTime: 2024/08/02 09:19:27
permalink: /article/change-history/
---

可能你有过以下的经历：

* 没有添加很好的忽略文件 (.gitignore)，有个不该上传的东西被我上传上去了！后面删除，但是还是可以从历史中，于是便修改了源代码，但是在 History 中还是能看到以前的提交记录！(如果是一些敏感信息的话，那就 GG 了)
* 很久之前在工程里加了个很大的第三方静态库且入库了。但是后面的某一天改用Pod (依赖管理工具) 管理，删除了这个第三方静态库，但是仓库的空间并没有减少。

怎么解决上面的问题，可以从项目中彻底移除？

**[BFG-Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)** 闪亮登场！清除大文件，文件夹，隐私文件的神器

## 安装

使用 Homebrew，可以使用如下命令安装 BFG：

```sh
brew install bfg
```

## 删除文件

```sh
bfg --delete-files RobotArm.sdf RobotArm.git
```

这种情况 BFG 会保护当前版本(HEAD 所指的版本)，不去清理。但如果这个版本也有需要删除的文件，那么可以这么使用，解除保护

```sh
bfg --delete-files RobotArm.sdf --no-blob-protection
```

## 删除文件夹

```sh
bfg --delete-folders _Boot
```

跟删除文件一样，如果需要接触当前版本的保护。

```sh
bfg --delete-folders _Boot RobotArm.git --no-blob-protection
```

## 清理不需要的数据

完成上面的指令后，实际上这些原文件并没有被删除，只是删除了 `.git` 中的所有记录，还需要运行 `git gc` 来清除。

```sh
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

## 推送到远端

```sh
git push -u origin master --force
```

在多人协作项目中，如果代码风格统一、代码提交信息的说明准确，那么在后期协作以及 Bug 处理时会更加方便。

* `Feat`：    新功能（feature）
* `Fix`：     修补bug
* `Docs`：    文档（documentation）
* `Style`：   格式（不影响代码运行的变动）
* `Refactor`：重构（即不是新增功能，也不是修改bug的代码变动）
* `Test`：    增加测试
* `Chore`：   构建过程或辅助工具的变动

如果 type 为 Feat 和 Fix，则该 commit 将肯定出现在 Change log 之中。

> 参考：[git commit 提交规范 & 规范校验](https://blog.csdn.net/y491887095/article/details/80594043)
