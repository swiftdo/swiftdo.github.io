---
sitemap:
  exclude: false
  changefreq: hourly
title: '安装'
date: 2020-4-1
tags:
- haskell
---

通过 brew 进行安装：

```sh
brew install haskell-stack
stack setup
```

stack 安装依赖库：

```sh
stack install <lib name>
```

ghci 的使用：

```sh
stack ghci
```

创建项目:

```sh
stack new hello
cd hello
stack run
```