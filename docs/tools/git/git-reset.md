---
title: "Git 恢复丢失的文件"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-02-24
tags:
  - tools
  - git
---

在使用 Git 的过程中，有时会不小心丢失 commit 信息。

通常最快捷的办法是使用`git reflog`工具。当你 (在一个仓库下) 工作时，Git 会在你每次修改了 HEAD 时悄悄地将改动记录下来。当你提交或修改分支时，reflog 就会更新。`git update-ref` 命令也可以更新 reflog。

1. 先用 reflog 看看记录的所有 HEAD 的历史: `git reflog`

2. 然后找到那个 SHA，进行恢复: `git reset --hard 98abc5a`
