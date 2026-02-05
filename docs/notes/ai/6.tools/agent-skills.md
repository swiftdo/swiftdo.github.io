---
title: Skills
createTime: 2026/01/30 09:46:47
permalink: /ai/agent-skills/
---



最近 AI 界又有一个概念火出圈了，它就是——`Skills`（技能）。

## 什么是 Agent？

> Agent = 会自己做事的 AI，而不是只会回答问题的 AI

- ChatGPT 👉 你问一句，它答一句
- Agent 👉 你给一个目标，它自己拆事、找工具、反复执行，直到把事干完

👉 Agent 像一个「数字员工 / 智能助理 / AI 实习生」

## 什么是 Skills?

Skills 翻译成中文就是“技能”。

什么叫技能？技能就是你执行某件事的方法论。

> 举个生活中的例子：我会打羽毛球。当球飞过来，我拿起球拍，在合适的时机、用合适的力度击球，让球准确落在对方场地，这一整套操作逻辑，就叫“技能”。

在 AI 界，Skills 就是让大模型按照某种特定的方法论去行动的机制。

Agent Skills 就是给 AI 智能体（Agent）做的 “专属能力包 / 插件”，把 AI 完成某件事的具体方法、步骤、规则、参考资料打包成一个可复用、可组合的标准化小模块，AI 需要时直接 “装上” 就能用，不用每次都重新教它怎么做。

> 有人会说：“这不就是提示词（Prompt）吗？”

你可以把它理解为 “超级进化版的提示词”。因为它比普通提示词强得多，通常由三部分组成：

- **元数据** (Metadata)： 包含对这个技能的简短描述。它保存在全局上下文中，因为体积小，所以非常节省 Tokens（省钱又省心）。
- **行动指南** (Action Guide)： 这部分才是真正的提示词，规定了 AI 每一步该怎么做。
- **资源文件** (Resources)： 这是最厉害的地方！它可能包含 Python 代码 或其他执行程序，保证程序在调用 Skill 时能完成复杂的动作。

与传统Prompt的根本区别：

| 维度 | Agent Skills | 传统Prompt Engineering |
|------|--------------|-------------------------|
| 形态 | 标准化模块/文件夹，可复用、可分享 | 一次性对话指令，难以复用 |
| 内容 | 包含完整工作流、规则、资源，支持渐进式披露 | 通常是简短指令，缺乏系统性 |
| 稳定性 | 结果一致，遵循明确操作规范 | 结果随机，依赖模型随机性 |
| 扩展性 | 可组合、可叠加，形成技能网络 | 单次使用，难以扩展到复杂任务 |
| 开发范式 | "能力工程"(Skill Engineering) | "提示词博弈"/"炼金术" |

> 提示词是 “临时指令”，Skill 是 “永久工具”。


## 从“人类能力”角度看 Agent Skills

| 人类能力     | Agent 对应技能                   |
| -------- | ---------------------------- |
| 理解别人说什么  | 理解目标（Goal Understanding）     |
| 会拆任务     | 任务规划（Planning）               |
| 会查资料     | 信息检索（Search / RAG）           |
| 会用工具     | Tool Use                     |
| 会动手干     | Action / Execution           |
| 做错会改     | Reflection / Self-correction |
| 记得之前做过什么 | Memory                       |
| 知道什么时候停  | Termination                  |

> Agent Skills 就是：把这些“人类做事能力”教给 AI

## 使用 openskills 命令安装

```sh
# 直接将openskills安装在全局，然后通过openskills来安装
npm i openskills -g

# 安装 Anthropic 官方提供的 Skills
openskills install anthropics/skills -g




# 同步远程仓库的最新更新
openskills sync

# 查看已安装的 Skills
openskills list

```

## 创建 AGENTS.md 文件并写入 Skills


前面只是将 Skills 安装到本地，如果想要让 Cursor、Trae 这些 Coding Agent都能发现和使用这些 Skills，那就必须运行第三步，否则前面都是在做无用功。


先在项目根目录创建一个 AGENTS.md 文件，然后运行

```sh
openskills sync
```

再次选择你要将哪些 `Skills` 写进这个 `AGENTS.md` 文档中。


你选择的 `Skills` 就会写进之前空白的 `AGENTS.md` 文档中。它将作为 Cursor、Trae 等 Coding Agent 接下来使用 Skills 的指导文件。


## 在 Cursor、Trae 中调用 Skills 项目

Skills 是可以被自动调用的，如果你想手动调用，可以直接在提示词中指定要调用的具体 Skills，比如：

```sh
调用 frontend-design skills，用HTML开发一个视频剪辑软件的SaaS介绍页
```

又如：

```sh
调用 fronten-design skills 用HTML创建一个现代化的个人博客网站原型，包含首页、文章详情页、关于页面的完整博客
```

## 自定义  Skills

- AI 编程工具迅速知道怎么创建一个规范的 skill，最便捷的方法就是把官方 skills 仓库克隆到本地，然后让它先阅读。这样无论它最开始懂不懂创建，都会通过官方仓库的 skill-creator 这个 Skill 快速学会；
- 创建 Skills 的原因一定是你想要将某个工作流给标准化，那么你需要提前将这个工作流给梳理出来，这个只有你自己最清楚，所以没法偷懒。但你可以借助 AI 来拓展自己思路或提前规避一些问题；
- 对于稍微复杂点的 Skills，即使我们梳理到位，但试图用官方的 Skill-creator 一次性生成的方法可能会出现一些问题；更稳妥的方法，就是每个步骤都可以单独拆开出来