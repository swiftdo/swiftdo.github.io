---
title: "Qwen Code安装"
date: 2025-07-23
tags:
  - qwen
  - cli
sitemap:
  exclude: false
  changefreq: hourly
---

`Qwen Code` 基于 `Gemini Code` 进行二次开发，但阿里进行了 `prompt` 和工具调用协议适配，使得 `Qwen Code` 可以最大程度激发 `Qwen3-Coder` 在 `Agentic Coding` 任务上的表现。

## step1：安装Qwen Code

确保已安装 `Node.js 20` 及以上版本，可以通过以下命令安装：

```sh
curl -qL https://www.npmjs.com/install.sh | sh

```

## step2：通过 npm 管理器安装 Qwen Code

从 npm 包安装：

```sh
npm install -g @qwen-code/qwen-code
```

从源码安装：

```sh
npm install -g @qwen-code/qwen-code
qwen --version
```

## step3：配置环境变量（使用 OpenAI SDK 调用 LLM）

`Qwen Code` 支持 `OpenAI SDK` 调用 `LLM`，你可以导出以下环境变量，或者简单地将其放在 `.envfile` 中。

```sh
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
export OPENAI_MODEL="qwen3-coder-plus"
```

除了 Qwen Code 之外，现在还可以将 Qwen3‑Coder 与 Claude Code 搭配使用。只需在阿里云百炼平台申请 API  Key，并安装 Claude Code，即可开始畅享编码体验.


