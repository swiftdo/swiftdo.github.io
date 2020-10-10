---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Pod libwebp 安装失败'
date: 2020-10-10
tags:
- swift
- ios
---

`pod SDWebImage/WebP` 遇到下面的问题:

```sh
[!] Error installing libwebp
[!] /usr/bin/git clone https://chromium.googlesource.com/webm/libwebp /var/folders/xt/lv4v305j3vq73d84r84db2300000gn/T/d20181030-8624-1jw0he8 --template= --single-branch --depth 1 --branch v1.1.0

Cloning into '/var/folders/xt/lv4v305j3vq73d84r84db2300000gn/T/d20181030-8624-1jw0he8'...
fatal: unable to access 'https://chromium.googlesource.com/webm/libwebp/': Failed to connect to chromium.googlesource.com port 443: Operation timed out
```

除了通过梯子解决这个问题外，还可以通过修改 libwebp 的源。

## 解决流程

* 查看 Mac 中 cocoapods 本地库路径: `pod repo`

    ```sh
    $ pod repo

    master
    - Type: git (master)
    - URL:  https://github.com/CocoaPods/Specs.git
    - Path: /Users/ammk/.cocoapods/repos/master

    1 repo
    ```

* 在 Path 中找到 libwebp 对应的文件夹: `find /Users/ammk/.cocoapods/repos/master -iname libwebp`

    ```sh
    $ find /Users/ammk/.cocoapods/repos/master -iname libwebp
    /Users/ammk/.cocoapods/repos/master/Specs/1/9/2/libwebp
    
    ```

* 在 `1.1.0` 目录下的 `libwebp.podspec.json` 文件中修改 git source

    ```sh
    $ vim libwebp.podspec.json
    ```

    部分内容如下：

    ```json
    "name": "libwebp",
    "version": "1.0.0",
    "summary": "Library to encode and decode images in WebP format.",
    "homepage": "https://developers.google.com/speed/webp/",
    "authors": "Google Inc.",
    "license": {
      "type": "BSD",
      "file": "COPYING"
    },
    "source": {
      "git": "https://chromium.googlesource.com/webm/libwebp",
      "tag": "v1.1.0"
    },
    ```

    homepage 改为 `https://github.com/webmproject/`
    source->git 改为 `https://github.com/webmproject/libwebp.git`

* 最后重新执行 `pod install`


