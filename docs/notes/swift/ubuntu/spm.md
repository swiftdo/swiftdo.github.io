---
sitemap:
  exclude: false
  changefreq: hourly
title: spm篇
date: 2022-01-12T00:00:00.000Z
tags:
  - swift
  - ubuntu
  - vapor
  - swiftenv
  - spm
createTime: 2024/08/02 09:19:27
permalink: /swift/cxq2u8my/
---

## 快速创建一个 Swift Package

```sh
$ mkdir spm_mirror_plugin
$ cd mkdir spm_mirror_plugin
$ swift package init # or swift package init --type library
$ swift build
$ swift test
```

Xcode 直接打开这个 Package 的根目录，就会根据 Package.swift 自动生成 Target。

其目录结构：

```sh
$ tree .
.
├── Package.swift
├── README.md
├── Sources
│   └── spm_mirror_plugin
│       └── spm_mirror_plugin.swift
└── Tests
    └── spm_mirror_pluginTests
        └── spm_mirror_pluginTests.swift
```

## Package.swift

```swift
// swift-tools-version: 5.6

import PackageDescription

let package = Package(
    name: "spm_mirror_plugin",
    products: [
        .library(
            name: "spm_mirror_plugin",
            targets: ["spm_mirror_plugin"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "spm_mirror_plugin",
            dependencies: []),
        .testTarget(
            name: "spm_mirror_pluginTests",
            dependencies: ["spm_mirror_plugin"]),
    ]
)
```

**对内的`targets`的配置：**

```swift
.target(
    name: "spm_mirror_plugin",
    dependencies: []),
```
程序会自动到`Source`文件夹里寻找名为 `spm_mirror_plugin` 的文件夹，并把里面所有`public`属性作为接口开发出来。

**对外的`products`配置**

```swift
.library(
    name: "spm_mirror_plugin",
    targets: ["spm_mirror_plugin"]),
```

当第三方 App 引用时，需要`import`的`module`名。products 的名称可以随意改成自己希望的样子，比如 `.library(name: "demo_package")`，那么在其他 App 中添加这个 Package 后，使用 `import demo_package` 即可。


## swift package init

```swift
swift package init --type executable
```

**`--type`参数**

- **empty**(空包):

  Source 文件夹下什么都没有，也不能编译


- **library**(静态包):

  Source 文件夹下有个和包同名 swift 文件，里面有个空结构体


- **executable**(可执行包):

  Source 文件夹下有个 main.swift 文件，在 build 之后会在 .build/debug/ 目录下生成一个可执行文件，可通过 swift run 或者直接点击运行，从而启动一个进程


- **system-module**(系统包):

  这种包是专门为了链接系统库（例如 libgit、jpeglib、mysql 这种系统库）准备的，本身不需要任何代码，所以也没有 Source 文件夹，但是需要编辑 module.modulemap 文件去查找系统库路径 (Swift 4.2 已经被其他方式取代)


## Package.Dependency

依赖的5种方式：

- git 源 + 确定的版本号
- git 源 + 分支名
- git 源 + Commit 号
- git 源 + 版本区间
- 本地路径

```swift
.package(url: "https://github.com/Alamofire/Alamofire.git", .exact("1.2.3")),

.package(url:"https://github.com/Alamofire/Alamofire.git", .branch("master")),

.package(url: "https://github.com/Alamofire/Alamofire.git", .revision("e74b07278b926c9ec6f9643455ea00d1ce04a021"),

.package(url:"https://github.com/Alamofire/Alamofire.git", from: "1.2.3"),
.package(url: "https://github.com/Alamofire/Alamofire.git", "1.2.3"..."4.1.3"),

.package(path: "../Foo"),
```

## 系统支持版本

最小依赖平台版本：

```swift
platforms: [.macOS(.v10_10)]
```

## Package.Product

Product 是 Package 编译后对外的产品输出，一般可分为两种类型：

- 可执行文件
- 静态库或者动态库

## Package.Target

target 是 Package 的基本构件，和`xcodeproject`一样，Package 可以有多个 target。

**target 分为六种类型**

```swift
public enum TargetType : String, Encodable {
    case regular
    case test
    case system
    case binary
    case test
    case executable
    case plugin
}
```

**Target 的几个常用属性**

- **name**: 名字
- **dependencies**：
  依赖项，可以依赖上面 Package.Dependency 的东西或者依赖另一个 target。所以这里只需要写 Package 或者 Target 的名字字符串


## 更多阅读

更多详细配置，可以阅读官方文档：[https://developer.apple.com/documentation/swift_packages](https://developer.apple.com/documentation/swift_packages)








