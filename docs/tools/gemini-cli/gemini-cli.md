---
title: '如何在 Mac 上安装 Gemini CLI'
sitemap:
  exclude: false
  changefreq: hourly
date: 2025-07-08
tags:
- tools
- gemini
---

本指南将指导您在 macOS 上安装和配置 Google 的 Gemini CLI.

## 环境

- macOS 10.15 Catalina 或更高版本
- Node.js 18+（使用 node -v 检查） 
- npm（与 Node.js 捆绑）或 Homebrew
- 稳定的网络连接

## 安装方法

### 方法 A — 直接使用 npx 运行

```sh
npx https://github.com/google-gemini/gemini-cli
```

此命令从 GitHub 获取 Gemini CLI 并立即启动它 - 无需全局安装。

### 方法 B — 通过 npm 全局安装（推荐）

```sh
# Standard installation
npm install -g @google/gemini-cli

# Fix permissions if needed
sudo npm install -g @google/gemini-cli

# Apple Silicon
arch -arm64 npm install -g @google/gemini-cli

# Verify
gemini --version
```

## 首次配置

出现提示时选择一个主题。

选择使用 Google 登录可获得每分钟 60 个请求和每天 1000 个免费配额。

完成浏览器授权（如果回调失败，则将 VPN 切换到全局模式）


## 替代方案 — 使用 API 密钥

需要更高的限制？在 Google AI Studio 中生成一个密钥，并将其设置为环境变量：

```sh
export GOOGLE_API_KEY=<YOUR_API_KEY>
```

## 技巧与窍门

在交互模式下输入 `/` 来查看快捷方式。


使用 @ 附加本地文件以获得上下文感知的答案。

如果网络速度较慢，Gemini 将自动切换到轻量级的 gemini-2.5-flash 型号。


