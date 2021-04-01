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
brew install ghc
brew install cabal-install
brew install haskell-stack
```

分别装了编译器，包装器，集成工具。

创建 `Main.hs`:

```hs
main = do 
    print "Hello world"
```

编译，执行：

```sh
ghc main.hs -o main
./main
```