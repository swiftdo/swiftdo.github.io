---
sitemap:
  exclude: false
  changefreq: hourly
title: Haskell 包管理工具 stack 介绍
date: 2020-4-1
tags:
  - haskell
  - vscode
createTime: 2024/08/02 09:19:27
permalink: /article/gzjmrg2m/
---

Haskell 项目中，经常用到包管理工具：

* cabal
* stack 
* nix

这里对这三个工具做个简要的说明。

## cabal库

是一个 haskell 包集合的库，提供了不同的包以及不同的版本。cabal-install 和 stack 均是前端基于 cabal 库使用的工具。


## cabal-install

最早用的工具，用于 haskell 包的管理。提供了规范文件，来构建包，同时也提供了工具来进行包的下载安装cabal-install。

## stack

stack 是一个可以替代 cabal 的工具，提供了更加便利的包管理，对于包的依赖，不同的版本，均提供了很好的支持。同时 stack 也支持不同的 ghc 发行版本管理。可以将不同的 ghc 发行版本来进行本地安装，通过配置文件，来进行选择。


stack 通过提供沙盒机制，来进行隔离，从而使得不同版本应用之间不会冲突。

## nix

nix 其实像 stack，都是提供项目代码的包依赖，将这些依赖的包编译并且运行。但是 stack 要求依赖的包都是 Haskell 包，而 nix 是一个更加通用的包管理工具，可以是任何的包。它提供了一个库管理的通用方法，每一个库不同的版本，均有一个唯一的标识，这样可以做多个包多个版本的管理。

