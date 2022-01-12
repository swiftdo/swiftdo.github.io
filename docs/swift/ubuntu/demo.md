---
sitemap:
  exclude: false
  changefreq: hourly
title: "完整实战篇"
date: 2022-01-12
tags:
  - swift
  - ubuntu
  - vapor
  - swiftenv
---

下面将创建个 demo 工程，将上面的工具整合在一起，形成一个完整的项目开发流

## 创建项目

```shell
$ mkdir demo
$ cd demo
$ swiftenv install 5.5.1
$ swiftenv version
5.5.1 (set by /home/mac/Swift/demo/.swift-version)
$ swift package init --type executable
```

## 配置 vscode

获取 swift 和 sourcekit-lsp 的路径

```shell
$ swiftenv which swift
/home/mac/.swiftenv/versions/5.5.1/usr/bin/swift

$ swiftenv which sourcekit-lsp
/home/mac/.swiftenv/versions/5.5.1/usr/bin/sourcekit-lsp
```

`.vscode/launch.json`:

```json
{
  "configurations": [
    {
      "type": "lldb",
      "request": "launch",
      "name": "Debug demo",
      "program": "${workspaceFolder}/.build/debug/demo",
      "args": [],
      "cwd": "${workspaceFolder:demo}",
      "preLaunchTask": "swift: Build Debug demo"
    },
    {
      "type": "lldb",
      "request": "launch",
      "name": "Release demo",
      "program": "${workspaceFolder}/.build/release/demo",
      "args": [],
      "cwd": "${workspaceFolder:demo}",
      "preLaunchTask": "swift: Build Release demo"
    }
  ]
}
```

`.vscode/settings.json`:

```
{
    "sourcekit-lsp.trace.server": "messages",
    "sourcekit-lsp.toolchainPath": "/home/mac/.swiftenv/versions/5.5.1/usr/bin/sourcekit-lsp"
}
```

`task.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "swift: Build Debug demo",
      "type": "shell",
      "command": "swift build",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

## 添加项目依赖

将 `Package.swift` 修改如下：

```swift
// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "demo",
    dependencies: [
        .package(url: "https://github.com/vapor/vapor.git", from: "4.0.0"),
    ],
    targets: [
        .executableTarget(
            name: "demo",
            dependencies: [
                .product(name: "Vapor", package: "vapor"),
            ]),
        .testTarget(
            name: "demoTests",
            dependencies: ["demo"]),
    ]
)
```

然后点击运行：

![](http://blog.loveli.site/mweb/16419589840566.jpg)
