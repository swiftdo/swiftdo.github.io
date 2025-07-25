---
title: Git 恢复丢失的文件
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-02-24T00:00:00.000Z
tags:
  - tools
  - git
createTime: 2024/08/02 09:19:27
permalink: /article/git-reset/
---

在使用 Git 的过程中，有时会不小心丢失 commit 信息。

## 丢失恢复

通常最快捷的办法是使用`git reflog`工具。当你 (在一个仓库下) 工作时，Git 会在你每次修改了 HEAD 时悄悄地将改动记录下来。当你提交或修改分支时，reflog 就会更新。`git update-ref` 命令也可以更新 reflog。

1. 先用 reflog 看看记录的所有 HEAD 的历史: `git reflog`

2. 然后找到那个 SHA，进行恢复: `git reset --hard 98abc5a`

## 想撤销 commit

写完代码后，很愉快的敲下了如下：

```shell
$ git add .

$ git commit -m "本功能全部完成"
```

执行完 commit 后，想撤回 commit，怎么办？

执行：

```shell
git reset --soft HEAD^
```

这样就成功的撤销了你的 commit

注意，仅仅是撤回 commit 操作，您写的代码仍然保留。

## reset 参数说明:

**--mixed**

意思是：不删除工作空间改动代码，撤销 commit，并且撤销`git add .`操作
这个为默认参数，`git reset --mixed HEAD^` 和 `git reset HEAD^` 效果是一样的。

**--soft**

不删除工作空间改动代码，撤销 commit，不撤销 `git add .`

**--hard**

删除工作空间改动代码，撤销 commit，撤销 `git add .`

注意完成这个操作后，就恢复到了上一次的 commit 状态。

## 改一下注释

如果 commit 注释写错了，只是想改一下注释，只需要：

```shell
$ git commit --amend
```

此时会进入默认 vim 编辑器，修改注释完毕后保存就好了。
