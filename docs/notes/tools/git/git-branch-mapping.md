---
title: Git分支映射
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-15T00:00:00.000Z
tags:
  - tools
  - git
createTime: 2024/08/02 09:19:27
permalink: /article/git-branch-mapping/
---

本文中 git 操作的目标为建立本地分支与远程分支的映射关系（或者为跟踪关系 track）。
这样使用 git pull 或者 git push 时就不必每次都要指定从远程的哪个分支拉取合并和推送到远程的哪个分支了。

## 查看映射关系

```shell
$ git branch -vv

* source 75452b0e add
```

## 建立映射关系

如实现本地分支与远端的 source 分支进行映射：

```shell
git branch -u origin/source
或者使用命令：
git branch --set-upstream-to origin/source
```

完成后，查看映射关系：

```shell
$ git branch -vv

* source 75452b0e [origin/source] add
```

会发现多了 `[origin/source]`, 说明本地分支与远端的 source 分支已经建立了映射关系

可以直接执行 `git push` 等命令

## 取消映射关系

撤销本地分支与远程分支的映射关系

```
git branch --unset-upstream
```

完成后，查看映射关系：

```shell
$ git branch -vv

* source 75452b0e add
```

执行`git push`失败。
