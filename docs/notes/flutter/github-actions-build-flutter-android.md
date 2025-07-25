---
title: Github Actions 免费构建 Flutter Android 包
date: 2022-01-05T00:00:00.000Z
tags:
  - flutter
  - github
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/c8vtk671/
---

在上文《[Github Actions 免费构建 Flutter iOS 包](https://oldbird.run/flutter/github-actions-build-flutter-ios.html)》中，我们完成了 Flutter 基于 Github Actions 实现 iOS 的自动化打包。
那么本文将继续完成 Android 的自动化打包。

Android 的打包相对 iOS 来说，容易很多，所以本文不会过多阐述重复步骤。

## 步骤概述

要实现构建出 Flutter Android 包的目标，将执行以下步骤：

- 配置 release 打包环境
- 指定正确的 Flutter 版本
- 拉取 flutter packages
- 构建应用程序为 apk
- 上传到蒲公英
- 分享给你的用户

为了完成顺利构建，请先完成 [发布 Android 版 APP](https://flutterchina.club/android-release/) 的配置:

- app 签名
- 在 gradle 中配置签名

本文将 `key.properties` 放在 `<app dir>/android/` 目录下，将 `key.jks` 放在 `<app dir>/android/app/` 目录下。

![](http://blog.oldbird.run/mweb/16451653664048.jpg)

## 配置 secrets

我们规划将`key.properties`的 base64 字符串在 secrets 的 key 为 `KEY_PROPERTIES`。
将`key.jks`的 base64 字符串存的 key 为 `KEYSTORE_BASE64`。

> 快速获取文件的 base64， 例如：`base64 key.jks | pbcopy`。这时候 key.jks 文件的 base64 字符串已保存在你的剪贴板中，可直接粘贴。

## 构建配置

```yaml
name: Flutter_Android

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build_android:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout the code
        uses: actions/checkout@v2

      - name: Setup Java to compile Android project
        uses: actions/setup-java@v1
        with:
          java-version: "12.x"

      - name: Install and set Flutter version
        uses: subosito/flutter-action@v2
        with:
          flutter-version: "2.10.0"

      - name: Create the Keystore
        env:
          KEYSTORE_BASE64: ${{ secrets.KEYSTORE_BASE64 }}
          KEY_PROPERTIES: ${{ secrets.KEY_PROPERTIES }}
        run: |
          # import keystore from secrets
          ls -all
          echo $KEYSTORE_BASE64 | base64 -di > android/app/key.jks
          echo $KEY_PROPERTIES | base64 -di > android/key.properties

      - name: Restore packages
        run: flutter pub get

      - name: Build Android App Bundle
        run: flutter build apk --release

      - name: Upload PGYER File
        id: pgyer
        uses: xtayga/upload-pgyer-action@master
        with:
          url: https://www.pgyer.com/apiv2/app/upload
          forms: '{"_api_key":"${{ secrets.PGY_KEY }}","buildName":"RSSAndroid"}'
          fileForms: '{"file":"build/app/outputs/apk/release/app-release.apk"}'

      - name: Publish Android Artefacts
        uses: actions/upload-artifact@v1
        with:
          name: release-aab
          path: build/app/outputs/apk/release/app-release.apk
```

整个构建过程相对简单，为了方便下载，做了上传蒲公英的功能。通过使用 [xtayga/upload-pgyer-action@master](https://github.com/xtayga/upload-pgyer-action) 这个第三方 Action，我们可以快速完成包的上传。

## 最后

完成的构建配置，您可以在 Github 中找到示例代码：[flutter_best_practice](https://github.com/swiftdo/flutter_best_practice)，这是个使用 river_pod 进行状态管理的 RSS 应用。

## 参阅

- [发布 Android 版 APP](https://flutterchina.club/android-release/)
- [上传蒲公英 xtayga/upload-pgyer-action](https://github.com/xtayga/upload-pgyer-action)
