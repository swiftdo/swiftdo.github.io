---
sitemap:
  exclude: false
  changefreq: hourly
title: MacOS 编译 Vapor 的 linux 包
tags:
  - swift
  - vapor
createTime: 2026/05/29 09:19:27
permalink: /swift/macos-build-linux-vapor/
---


## 安装 Swiftly 本体

Swiftly 是 Swift 官方推出的多版本 Swift 工具链管理工具，支持在 macOS 上独立安装、切换、更新多个 Swift 版本，无需依赖 Xcode，可实现多版本共存，是 Swift 开发者首选的环境管理方案。本文为**2026年5月**官方最新实操教程，兼容 Intel、Apple Silicon 架构的所有 Mac 设备。

在未安装 swiftly 前，swift 的版本信息：

```sh
$ swift --version
swift-driver version: 1.127.15 Apple Swift version 6.2.4 (swiftlang-6.2.4.1.4 clang-1700.6.4.2)
Target: arm64-apple-macosx15.0
```


打开终端，执行下方一键命令，自动完成下载、安装与环境变量配置：
```bash
curl -O https://download.swift.org/swiftly/darwin/swiftly.pkg && \
installer -pkg swiftly.pkg -target CurrentUserHomeDirectory && \
~/.swiftly/bin/swiftly init --quiet-shell-followup && \
. "${SWIFTLY_HOME_DIR:-$HOME/.swiftly}/env.sh" && \
hash -r
```

### 验证安装
执行命令查看版本，正常输出版本号即代表安装成功，当前最新版为 **1.1.1**：
```bash
swiftly --version
```

### 异常处理
若提示 `command not found: swiftly`，手动加载环境变量即可：
```bash
source ~/.swiftly/env.sh
```
也可直接重启终端恢复正常。

### 安装 Swift 工具链
#### 4.1 安装最新稳定版（推荐）
当前 Swift 最新正式版本为 **6.3.2**，执行以下命令安装并自动设为默认版本：
```bash
swiftly install latest
```

#### 4.2 安装指定版本
可按需安装固定版本或开发测试版，命令如下：
```bash
# 精确安装 6.3.2
swiftly install 6.3.2

# 安装 6.3 系列最新补丁版本
swiftly install 6.3

# 安装开发快照版（用于体验新特性）
swiftly install main-snapshot
```

### 验证 Swift 环境
安装完成后，执行指令校验版本，输出对应信息即为环境部署完毕：
```bash
$ swift --version

Apple Swift version 6.3.2 (swift-6.3.2-RELEASE)
Target: arm64-apple-macosx15.0
```

> 可以对比下前后 swift 版本的输出的信息。

### Swiftly 常用管理命令
日常版本切换、更新、卸载可使用以下官方标准指令：
```bash
# 查看本机已安装的所有 Swift 版本
swiftly list

# 切换默认 Swift 版本（示例：切换至 6.3.2）
swiftly use 6.3.2

# 更新 Swiftly 工具本身
swiftly self-update

# 卸载指定版本（示例：卸载 6.3.2）
swiftly uninstall 6.3.2
```

## 安装配套 Swift Static Linux SDK




