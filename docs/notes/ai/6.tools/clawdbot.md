---
title: clawdbot
createTime: 2026/01/28 09:50:45
permalink: /ai/clawdbot/
tags:
    - clawdbot
    - ollama
    - moltbot
---

`Clawdbot` 是一款**开源、自托管的个人 AI 助手**，可以运行在你自己的电脑（例如 Mac mini）上，并连接到你常用的聊天平台如 `WhatsApp`、`Telegram`、`Discord` 等。它不仅能对话，还能执行任务、主动提醒、管理文件和自动化工作流程——可以理解为“你自己的私人 AI 员工”。

## Clawdbot 是什么？理解核心

Clawdbot 是：

- 🛠️ 自托管的 AI 助手：运行在自己的机器上，不依赖云端服务。

- 📱 跨通讯平台：可以让 AI 出现在 Whatsapp、Telegram、Discord、Slack、Signal、iMessage 等聊天程序里。

- 🤖 具备实际操作能力：不仅回答问题，还可以执行系统命令、浏览器操控、自动化任务等。

- 🧠 保持上下文记忆：可持续记住对话和用户偏好，从而更加智能。

所以，Clawdbot 不只是聊天机器人，它是新一代的“个人 AI 助手/智能体”。 

## 准备你的 Mac mini


在开始部署之前，确保你的 Mac mini 满足以下基本要求：

- ✔ macOS 系统（最新版更稳定）

- ✔ 已安装 Node.js（>=22） 和 pnpm 或 npm（Clawdbot 依赖）

也可以使用 Homebrew 安装：

```sh
brew install node
brew install pnpm
```


## 在 Mac mini 上安装 Clawdbot


###  1) 快速安装

在终端执行：

```sh
curl -fsSL https://clawd.bot/install.sh | bash
```
这个脚本会安装 Clawdbot 所需的依赖并设置环境。


### 2) 启动 Clawdbot

安装完成后，你可以运行 Clawdbot 的命令行界面：

```
clawdbot
```

建议首先运行**引导式设置**

```sh
clawdbot onboard
```

这个引导会帮你自动配置：

- 选择模型、授权方式

- 设置消息渠道（如 Telegram/WhatsApp）

- 初始化工作空间和技能

如果你不想使用 CLI 引导，可以手动运行：

```sh
clawdbot setup
clawdbot gateway
```

启动本地 `Gateway` 后，`Clawdbot` 的本地控制面板通常会在浏览器打开：

```sh
http://127.0.0.1:18789
```

如果暂时不接渠道，可以直接用终端对话：

```sh
clawdbot tui
```


启动和关闭服务：

```sh
clawdbot gateway start
clawdbot gateway stop
```

## ollama

ollama v0.15.2 版本，支持对 clawbot 的集成。

```sh
ollama launch clawdbot
```

可直接通过 ollama 模型启动 clawdbot。


## 接入telegram

- 打开 Telegram，搜索 @BotFather
- 发送 /newbot，按提示起名（用户名必须以 bot 结尾）
- 复制生成的 token（类似 123456789:ABCdef…)


把 token 告诉 AI，它会自动写入配置：

```json
{
    "channels": {
      "telegram": {
        "enabled": true,
        "botToken": "你的token",
        "dmPolicy": "pairing"
      }
    }
}
```

然后在 Telegram 里获取配对码，发给 AI：

```sh
clawdbot pairing approve telegram <配对码>
```

完成！现在可以在 Telegram 里正常聊天了.


