---
title: openclaw
createTime: 2026/01/28 09:50:45
permalink: /ai/openclaw/
tags:
    - openclaw
    - ollama
    - moltbot
    - clawdbot
---

`openclaw` 是一款**开源、自托管的个人 AI 助手**，可以运行在你自己的电脑（例如 Mac mini）上，并连接到你常用的聊天平台如 `WhatsApp`、`Telegram`、`Discord` 等。它不仅能对话，还能执行任务、主动提醒、管理文件和自动化工作流程——可以理解为“你自己的私人 AI 员工”。

## openclaw 是什么？理解核心

openclaw 是：

- 🛠️ 自托管的 AI 助手：运行在自己的机器上，不依赖云端服务。

- 📱 跨通讯平台：可以让 AI 出现在 Whatsapp、Telegram、Discord、Slack、Signal、iMessage 等聊天程序里。

- 🤖 具备实际操作能力：不仅回答问题，还可以执行系统命令、浏览器操控、自动化任务等。

- 🧠 保持上下文记忆：可持续记住对话和用户偏好，从而更加智能。

openclaw 不只是聊天机器人，它是新一代的“个人 AI 助手/智能体”。 

## 准备你的 Mac mini


在开始部署之前，确保你的 Mac mini 满足以下基本要求：

- ✔ macOS 系统（最新版更稳定）

- ✔ 已安装 Node.js（>=22） 和 pnpm 或 npm（openclaw 依赖）

也可以使用 Homebrew 安装：

```sh
brew install node
brew install pnpm
```


## 在 Mac mini 上安装 openclaw


###  1) 快速安装

在终端执行：

```sh
curl -fsSL https://openclaw.ai/install.sh | bash
```
这个脚本会安装 openclaw 所需的依赖并设置环境。


### 2) 启动 openclaw

安装完成后，你可以运行 openclaw 的命令行界面：

```
openclaw
```

建议首先运行**引导式设置**

```sh
openclaw onboard --install-daemon
```

这个引导会帮你自动配置：

- 选择模型、授权方式

- 设置消息渠道（如 Telegram/WhatsApp）

- 初始化工作空间和技能

如果你不想使用 CLI 引导，可以手动运行：

```sh
openclaw setup
openclaw gateway
```

启动本地 `Gateway` 后，`openclaw` 的本地控制面板通常会在浏览器打开：

```sh
http://127.0.0.1:18789
```

如果暂时不接渠道，可以直接用终端对话：

```sh
openclaw tui
```


启动和关闭服务：

```sh
openclaw gateway start
openclaw gateway stop
```

## ollama

ollama v0.15.2 版本，支持对 openclaw 的集成。

```sh
ollama launch openclaw
```

可直接通过 ollama 模型启动 openclaw


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
openclaw pairing approve telegram <配对码>
```

完成！现在可以在 Telegram 里正常聊天了.



## 整体架构

OpenClaw本质是跑在你电脑上的后台程序。工作流程大概这样：

```sh
用户消息（飞书/微信/Telegram）
    ↓
Channel Adapter（统一不同平台的消息格式）
    ↓
Gateway（核心调度，路由到正确的会话）
    ↓
Agent（选模型、组提示词、调工具）
    ↓
结果返回
```
关键点：不管你用什么聊天工具发消息，经过Channel Adapter统一格式后，AI看到的都是标准输入。所以OpenClaw能轻松接各种平台，不用每个平台写一套逻辑。

## 常用命令大全

```sh
1）基础命令
# 查看版本
openclaw --version

# 查看帮助
openclaw --help

# 查看状态概览
openclaw status

# 完整诊断
openclaw status --all

# 健康检查
openclaw health
openclaw status --deep  # 深度健康检查
2）Gateway 管理
# 启动 Gateway
openclaw gateway start

# 停止 Gateway
openclaw gateway stop

# 重启 Gateway
openclaw gateway restart

# 查看状态
openclaw gateway status

# 手动前台运行（调试）
openclaw gateway --port 18789 --verbose

# 绑定模式
openclaw gateway --bind loopback    # 本地回环（默认）
openclaw gateway --bind lan         # 局域网
openclaw gateway --bind tailnet     # Tailscale 网络
3）配置管理
# 交互式配置
openclaw configure

# 查看完整配置
openclaw config get

# 查看特定配置
openclaw config get agents.defaults
openclaw config get models
openclaw config get channels.telegram

# 设置单个值
openclaw config set gateway.port 18789
openclaw config set agents.defaults.workspace ~/.openclaw/workspace

# 删除配置项
openclaw config unset gateway.port

# 配置文件位置
# ~/.openclaw/openclaw.json
4）模型管理
# 查看可用模型
openclaw models list

# 查看模型状态
openclaw models status

# 设置默认模型
openclaw models set anthropic/claude-sonnet-4-0

# 测试模型连接
openclaw models probe <model-name>
5）频道管理
# 添加频道
openclaw channels add

# 查看频道状态
openclaw channels status
6）配对管理
# 查看待处理配对
openclaw pairing list whatsapp
openclaw pairing list telegram

# 批准配对
openclaw pairing approve whatsapp <CODE>

# 拒绝配对
openclaw pairing deny whatsapp <CODE>
7）消息发送
# 发送文本消息
openclaw message send --target +15555550123 --message "Hello from OpenClaw"

# 发送文件
openclaw message send --target +15555550123 --file /path/to/file.txt
8）代理 (Agents)
# 查看代理列表
openclaw agents list

# 添加新代理
openclaw agents add work --workspace ~/.openclaw/work
9）会话管理
# 查看活跃会话
openclaw sessions list

# 查看会话历史
openclaw sessions history <session-key>

# 重置会话
openclaw sessions reset <session-key>
10）技能管理
# 列出已安装技能
openclaw skills list

# 安装技能
openclaw skills install skill-name

# 查看技能配置
openclaw skills config skill-name

# 更新技能
openclaw skills update skill-name
11）日志和诊断
# 实时查看日志
openclaw logs --follow

# 查看最近 N 行
openclaw logs --limit 100

# 健康检查
openclaw health

# 诊断和修复
openclaw doctor
openclaw doctor --fix  # 自动修复
12）目录和工作区
# 查看工作区目录
openclaw directory

# 查看文件
ls -la ~/.openclaw/workspace/
13）更新和升级
# 检查更新
openclaw --version

# 更新 CLI（安装脚本）
curl -fsSL https://openclaw.ai/install.sh | bash

# 从源码更新
git pull origin main
pnpm install
pnpm build
openclaw doctor
openclaw gateway restart
14）安全相关
# 安全审计
openclaw security audit

# 深度审计
openclaw security audit --deep
```