---
title: "Github Actions 免费构建 Flutter iOS 包"
date: 2022-01-05
tags:
  - flutter
  - github
sitemap:
  exclude: false
  changefreq: hourly
---

在之前的文章中，有写过一篇[《在 Github 上部署一个 Flutter Web 应用》](https://oldbird.run/flutter/t5-flutter-web-deploy.html#flutter-web)，每次提交代码，就会触发 Github Actions 的构建流程，完成 Flutter Web 的编译部署，省心省力，一劳永逸。那么是否也能自动够构建出 iOS 包？答案是肯定的，本文将阐述其构建步骤。

## 步骤概述

要实现构建出 Flutter iOS 包的目标，必须执行以下步骤：

* 安装 Apple 证书和配置文件
* 指定正确的 Flutter 版本
* 拉取 flutter packages
* 构建应用程序
* 使用正确的 Apple 证书对其进行签名
* 生成`.xarchive`
* 从`.xarchive`中生成`.ipa` 
* 分享给你的用户

为了完成顺利构建，我们必须提供：

* 可以苹果打包**证书**（`.p12`），以及导出证书的密码
* 证书对应的**描述文件**（`.mobileprovision`）

![](http://blog.loveli.site/mweb/16446564927836.jpg)


> 如果您不知道如何获取证书和描述文件，可以参考这篇文章：[《iOS 打包证书制作》](https://oldbird.run/swift/ios/ios-build-cers.html)

准备就绪，那我们开始吧！

##  GitHub Actions 是什么

[GitHub Actions](https://github.com/features/actions) 是 GitHub 的[持续集成服务](https://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)，于2018年10月推出。

大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。

**基本概念**

（1）**workflow**（工作流程）：持续集成一次运行的过程，就是一个 workflow。

（2）**job**（任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

（3）**step**（步骤）：每个 job 由多个 step 构成，一步步完成。

（4）**action**（动作）：每个 step 可以依次执行一个或多个命令（action）。

> 快速了解 GiHub Actions，可以参阅[《GitHub Actions 入门教程》](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

我们将创建一个`GitHub Action`，让您只需单击一下即可生成您的`ipa`。

## 配置 GitHub Actions

让我们创建我们的第一个**工作流程（workflow）**！在您的项目中，您需要在`.github` 文件夹中创建一个`workflows`文件夹，然后创建一个名为：`
ios-release.yml`的新文件。

![](http://blog.loveli.site/mweb/16446533386555.jpg)


`ios-release.yml`文件将包含我们的第一个作业(job)`build_ios`：

```yaml
name: Flutter_iOS

on:
  push:
    branches: [master]

jobs:
  build_ios:
    runs-on: macos-latest

    steps:
    - name: Checkout the code
      uses: actions/checkout@v2
```

当您在`master`分支上推送新更改时，将触发此作业(job)。我们要做的第一步(step)是检出我们分支的代码。

## 安装苹果证书

因为项目是开源的，但是打包又需要证书、密码和描述文件，而这些我们并不想公开出去。那这个时候我们可以借助 GitHub 提供的`secrets`功能，它可以安全的存放私密内容。

因为证书和描述文件都是文件类型，而 secrets 存放的是字符串，所以这个时候我们需要将文件进行`base64`成字符串。具体步骤，可以阅读这篇《How to use environment variables and secrets using GitHub Actions》(https://damienaicheh.github.io/github/actions/2021/04/15/environment-variables-secrets-github-actions-en.html)。

> 例如：`base64 build_certificate.p12 | pbcopy`

我们将定义以下 key：

* `.p12`证书的 key 为`P12_BASE64`
* 关联密码的 key 为`P12_PASSWORD`
* 描述文件的 key 为`PROVISIONING_PROFILE_BASE64`

下一步是安装您的`Apple`证书，为此我们将使用来自社区的名为`apple-actions/import-codesign-certs@v1`的操作并使用我们之前定义的`secrets`

```yaml
- name: Install Apple Certificate
  uses: apple-actions/import-codesign-certs@v1
  with:
    p12-file-base64: ${{ secrets.P12_BASE64 }}
    p12-password: ${{ secrets.P12_PASSWORD }}
```

要对应用进行签名，我们还需要安装我们的描述文件：

```yaml
- name: Install the provisioning profile
    env:
      PROVISIONING_CERTIFICATE_BASE64: ${{ secrets.PROVISIONING_PROFILE_BASE64 }}
    run: |
      PP_PATH=$RUNNER_TEMP/build_pp.mobileprovision

      echo -n "$PROVISIONING_CERTIFICATE_BASE64" | base64 --decode --output $PP_PATH

      mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
      cp $PP_PATH ~/Library/MobileDevice/Provisioning\ Profiles
```

正如你在上面看到的，这个脚本有 3 个操作：

* 创建`secrets`变量 
* 从`secrets`导入描述文件 
* 配置描述文件

## 构建 Flutter 代码

为了能够在我们的工作流程中使用 Flutter，我们需要安装它。为了实现这一目标，我们将使用社区的另一个`action`：

```yaml
- name: Install and set Flutter version
  uses: subosito/flutter-action@v1.4.0
  with:
    flutter-version: '2.10.0'
```

我们需要添加这个action并指定我们要使用的 Flutter 版本。建议指定确切的flutter版本，而不是使用`stable`作为值，以避免在发布新的`stable`版本时发生潜在的重大更改。

现在我们可以为我们的应用程序拉取 packages：

```yaml
- name: Restore packages
  run: flutter pub get
```

检索到它们后，我们可以在`release`模式下构建应用程序而无需对其进行签名：

```yaml
- name: Build Flutter
  run: flutter build ios --release --no-codesign
```

我们将在下一步应用之前安装的证书！

## 生成 xArchive

首先，使用 XCode 打开您的 iOS 项目并选择目标，并在`Signing & Capabilities` 中确保未选中`Automatically manage signing`，这样我们就可以使用所需的证书对其进行签名，而无需编辑 XCode 项目。

![](http://blog.loveli.site/mweb/16446565628123.jpg)

接下来，当您签署 iOS 应用程序时，您不会签署与其关联的 pod，因此您需要在 `Podfile`中指定它，如下所示：

```rb
post_install do |installer|
  installer.pods_project.targets.each do |target|
    flutter_additional_ios_build_settings(target)
    target.build_configurations.each do |config|
      config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
      config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
    end
  end
end
```

在生成`xarchive`之前，我们需要解决项目的`Swift`依赖项。当你有一些用`Swift`编写的 Flutter iOS 插件时，这特别有用。

```yaml
- name: Build resolve Swift dependencies
  run: xcodebuild -resolvePackageDependencies -workspace ios/Runner.xcworkspace -scheme Runner -configuration Release
```

现在要创建一个`xarchive`，您需要找到一些可以在您的描述文件或 Apple 证书中找到的信息：

* 开发团队标识符
* UUID，它是您的 Provisioning Profile 的标识符 
* 代码签名标识

完成所有这些后，我们可以这样使用：

```yaml
- name: Build xArchive
   run: |
     xcodebuild -workspace ios/Runner.xcworkspace -scheme Runner -configuration Release DEVELOPMENT_TEAM=YOUR_TEAM_ID -sdk 'iphoneos' -destination 'generic/platform=iOS' -archivePath build-output/app.xcarchive PROVISIONING_PROFILE=YOUR_UUID clean archive CODE_SIGN_IDENTITY="Apple Distribution: Damien Aicheh"
```


## 生成 ipa

使用生成的 xarchive，我们可以将其导出为 ipa。为此，我们需要在项目中添加一个名为`ExportOptions.plist`的新文件来指定导出选项。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>method</key>
  <string>app-store</string> <!-- app-store, ad-hoc, enterprise, development -->
  <key>teamID</key>
  <string>YOUR_TEAM_ID</string>
	<key>signingStyle</key>
	<string>manual</string>
  <key>provisioningProfiles</key>
	<dict>
		<key>YOUR_BUNDLE_ID</key>
		<string>YOUR_UUID</string>
	</dict>
</dict>
</plist>
```

根据您的项目配置，您可能需要向此文件添加更多选项。如果需要，您可以为项目的每个环境创建一个`ExportOptions.plist`文件。

然后只需运行此命令行，您的`ipa`就会生成：

```yaml
- name: Export ipa
  run: xcodebuild -exportArchive -archivePath build-output/app.xcarchive -exportPath build-output/ios -exportOptionsPlist ios/ExportOptions.plist
```

## 发布产物

要从 GitHub 界面访问生成的 ipa，让我们添加最后一个操作：

```yaml
- name: Publish iOS Artefacts
  uses: actions/upload-artifact@v1
  with:
    name: release-ios
    path: build-output/ios
```

这将发布包含我们 ipa 的 ios 文件夹。然后，您可以将其安装在您的设备上。

![](http://blog.loveli.site/mweb/16447391441739.jpg)



## 最后

现在，您可以根据项目的上下文与用户共享您的应用程序了！您将在此 Github 中找到示例代码：[flutter_best_practice](https://github.com/swiftdo/flutter_best_practice)。

## 参阅

* [How to build and sign your Flutter iOS application using GitHub Actions](https://damienaicheh.github.io/flutter/github/actions/2021/04/22/build-sign-flutter-ios-github-actions-en.html)
* [How to use environment variables and secrets using GitHub Actions](https://damienaicheh.github.io/github/actions/2021/04/15/environment-variables-secrets-github-actions-en.html)
* [在用于 Xcode 开发的 macOS 运行器上安装 Apple 证书](https://docs.github.com/cn/actions/deployment/deploying-xcode-applications/installing-an-apple-certificate-on-macos-runners-for-xcode-development)



