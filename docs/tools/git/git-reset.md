---
title: "Git 恢复 reset --hard 丢失的文件"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-02-24
tags:
  - tools
  - git
---

在使用 Git 的过程中，有时会不小心丢失 commit 信息。这一般出现在以下情况下：强制删除了一个分支而后又想重新使用这个分支，hard-reset 了一个分支从而丢弃了分支的部分 commit。如果这真的发生了，有什么办法把丢失的 commit 找回来呢？

通常最快捷的办法是使用`git reflog`工具。当你 (在一个仓库下) 工作时，Git 会在你每次修改了 HEAD 时悄悄地将改动记录下来。当你提交或修改分支时，reflog 就会更新。`git update-ref` 命令也可以更新 reflog。

1. 先用 reflog 看看记录的所有 HEAD 的历史: `git reflog`

2. 然后找到那个 SHA，进行恢复: `git reset --hard 98abc5a`
