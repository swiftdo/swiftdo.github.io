---
title: Hermes Agent 入门指南：打造你的专属 AI 助手
createTime: 2026/04/11 08:45:42
permalink: /ai/hermes/
---

> 一篇面向初学者的完整指南，带你了解如何使用 Hermes Agent 构建智能工作流。

## 前言

在 AI 快速发展的今天，各种 AI 工具层出不穷。如果你厌倦了每次都要重新向 AI 解释你的项目、偏好和工作方式，那么 **Hermes Agent** 值得你关注。

Hermes Agent 是由 **Nous Research** 开发的开源 AI 代理框架。与传统的 AI 聊天工具不同，它具有**记忆能力**和**技能积累**特性——这意味着它会越用越"懂你"。

---

## 什么是 Hermes Agent？

简单来说，Hermes Agent 是一个可以**记住你**的 AI 助手。

### 核心特点

| 特性 | 说明 |
|------|------|
| **持久记忆** | 记住你的偏好、项目配置、工作习惯 |
| **技能系统** | 自动学习并保存解决问题的方法 |
| **多平台支持** | Telegram、Discord、Slack、邮件等 10+ 平台 |
| **模型自由切换** | 支持 OpenAI、Anthropic、DeepSeek 等 15+ 模型 |
| **完全开源** | 代码透明，可自由定制 |

### 与其他工具的对比

```
传统 AI 聊天工具：
每次对话 → 需要重新说明背景 → AI 回答 → 下次重新开始

Hermes Agent：
第一次对话 → 说明背景 → AI 记住
第二次对话 → AI 已了解 → 直接回答
后续对话 → 越来越懂你的需求
```

---

## 安装与配置

### 系统要求

- 操作系统：Linux、macOS 或 WSL（Windows 子系统）
- Python 3.10+
- 网络连接

### 一键安装

打开终端，执行以下命令：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

安装完成后，运行设置向导：

```bash
hermes setup
```

按照提示选择模型提供商并输入 API 密钥。

### 配置文件说明

Hermes 的配置文件位于 `~/.hermes/` 目录下：

```
~/.hermes/
├── config.yaml      # 主配置文件
├── .env             # API 密钥（敏感信息）
├── skills/          # 安装的技能
├── sessions/        # 对话历史
└── logs/            # 运行日志
```

---

## 快速上手

### 启动对话

```bash
# 交互式对话（推荐新手使用）
hermes

# 单次问答模式
hermes chat -q "什么是 GRPO 训练方法？"

# 加载特定技能启动
hermes -s github-pr-workflow
```

### 常用命令速查

**会话管理**
```
/new          开始新会话
/title 名称    命名当前会话
/undo         撤销上一轮对话
/retry        重试上一个问题
```

**配置调整**
```
/model        查看或切换模型
/voice on     开启语音模式
/yolo         跳过危险命令确认
```

**工具与技能**
```
/tools        管理可用工具
/skills       浏览技能市场
/skill 名称    加载特定技能
```

---

## 核心功能详解

### 1. 持久记忆系统

Hermes 的记忆分为两个层面：

**用户档案（User Profile）**
记录你的个人信息：
- 名字和称呼偏好
- 时区和地理位置
- 技术栈和常用工具
- 编码风格偏好

**代理记忆（Agent Memory）**
记录代理的经验笔记：
- 项目特定的配置
- 发现的环境特性
- 解决问题的方法
- 工具使用技巧

> 💡 **小贴士**：当 Hermes 提供了正确答案但你纠正了它，它会记住你的修正，下次就不会犯同样的错误。

### 2. 技能系统

技能是 Hermes 最强大的特性之一。每个技能是一个独立的文档，包含：

- 触发条件（何时使用）
- 详细步骤（如何执行）
- 注意事项（常见陷阱）
- 验证方法（确认成功）

**安装技能**

```bash
# 浏览技能市场
hermes skills browse

# 搜索特定技能
hermes skills search github

# 安装技能
hermes skills install github-pr-workflow
```

**常用技能示例**

| 技能名称 | 用途 |
|---------|------|
| `github-pr-workflow` | GitHub PR 创建和管理 |
| `test-driven-development` | TDD 开发流程 |
| `systematic-debugging` | 系统化调试方法 |
| `summarize` | 网页和文档摘要 |
| `youtube-content` | YouTube 视频内容提取 |

### 3. 多平台网关

Hermes 可以部署到多个消息平台，让你随时随地使用：

```bash
# 启动网关
hermes gateway run

# 安装为后台服务
hermes gateway install
hermes gateway start
```

**支持的平台**

- 即时通讯：Telegram、Discord、Slack、WhatsApp、Signal
- 企业工具：Mattermost、DingTalk、Feishu
- 其他：Email、SMS、Matrix、Home Assistant

---

## 实用场景示例

### 场景一：代码开发助手

```bash
# 加载 GitHub 工作流技能
hermes -s github-pr-workflow -s test-driven-development
```

你可以让它：
- 创建分支并提交代码
- 编写测试用例
- 创建 Pull Request
- 进行代码审查

### 场景二：研究助手

```bash
# 加载研究相关技能
hermes -s arxiv -s summarize -s youtube-content
```

使用方式：
- 搜索并总结学术论文
- 提取 YouTube 视频要点
- 生成研究笔记到 Obsidian

### 场景三：智能运维

```bash
# 加载运维技能
hermes -s plan
```

它可以：
- 分析服务器日志
- 编写自动化脚本
- 创建运维文档
- 监控系统状态

---

## 进阶技巧

### 1. 多代理协作

Hermes 支持同时运行多个代理实例，各司其职：

```bash
# 终端 A：后端开发代理
tmux new-session -d -s backend 'hermes -w'

# 终端 B：前端开发代理
tmux new-session -d -s frontend 'hermes -w'
```

### 2. 定时任务

使用 Cron 功能设置自动化任务：

```bash
# 创建每日摘要任务
hermes cron create "0 9 * * *" --prompt "生成今日工作摘要"
```

### 3. 配置文件模板

针对不同项目创建配置 Profile：

```bash
# 创建项目专用配置
hermes profile create work-project

# 使用特定配置启动
hermes -p work-project
```

---

## 常见问题

### Q: 支持哪些 AI 模型？

**A:** Hermes 支持超过 15 种模型提供商：

| 提供商 | 类型 | 获取方式 |
|--------|------|----------|
| OpenRouter | 聚合平台 | API Key |
| Anthropic | 商业 API | API Key |
| OpenAI | 商业 API | OAuth/API Key |
| DeepSeek | 商业 API | API Key |
| 本地模型 | 私有部署 | 自行配置 |

### Q: 数据安全吗？

**A:** Hermes 是完全开源的，代码可审计。敏感数据存储在本地 `~/.hermes/.env` 文件中，你可以随时查看或删除。

### Q: 如何更新？

```bash
hermes update
```

### Q: 遇到问题怎么办？

1. 运行诊断：`hermes doctor`
2. 查看日志：`cat ~/.hermes/logs/gateway.log`
3. 访问文档：https://hermes-agent.nousresearch.com/docs/

---

## 学习资源

- **官方文档**：https://hermes-agent.nousresearch.com/docs/
- **GitHub 仓库**：https://github.com/NousResearch/hermes-agent
- **技能市场**：运行 `hermes skills browse` 浏览所有可用技能

---

## 总结

Hermes Agent 的核心价值在于**持续学习**和**个性化适应**。它不是一次性工具，而是会随着使用变得越来越懂你的智能助手。

对于初学者，建议的入门路径：

1. ✅ 完成安装和基础配置
2. ✅ 在终端中尝试日常对话
3. ✅ 探索并安装 2-3 个技能
4. ✅ 配置一个消息平台（如 Telegram）
5. ✅ 在实际项目中使用

开始你的 Hermes 之旅吧！

---

