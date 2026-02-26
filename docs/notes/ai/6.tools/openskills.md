---
title: OpenSkills 使用指南
createTime: 2026/02/26 10:00:00
permalink: /ai/6-tools/openskills/
---

# OpenSkills 使用指南

[OpenSkills](https://github.com/numman-ali/openskills) 是一个通用的 AI 编程助手技能加载器，它将 Anthropic 的技能系统带到了所有 AI 编程助手，包括 Claude Code、Cursor、Windsurf、Aider、Codex 等。

## 什么是 OpenSkills？

OpenSkills 为所有 AI 编程助手提供统一的技能系统，使用与 Claude Code 相同的 SKILL.md 格式。

**核心特点：**

- **完全兼容 Claude Code** - 相同的提示格式、相同的市场、相同的文件夹结构
- **通用性** - 适用于 Claude Code、Cursor、Windsurf、Aider、Codex 等
- **渐进式加载** - 按需加载技能，保持上下文清晰
- **版本友好** - 技能文件可以存储在项目中并进行版本控制
- **支持私有仓库** - 可以从本地路径或私有 Git 仓库安装

## 快速开始

### 安装技能

```bash
# 从 Anthropic 官方市场安装
npx openskills install anthropics/skills

# 从任意 GitHub 仓库安装
npx openskills install your-org/your-skills

# 从本地路径安装
npx openskills install ./local-skills/my-skill

# 从私有 Git 仓库安装
npx openskills install git@github.com:your-org/private-skills.git
```

### 同步技能到 AGENTS.md

```bash
# 更新 AGENTS.md 文件
npx openskills sync
```

### 读取技能

```bash
# 读取单个技能
npx openskills read pdf

# 读取多个技能（逗号分隔）
npx openskills read pdf,skill-creator
```

## 安装模式

### 项目级安装（默认）

技能安装到 `./.claude/skills/`：

```bash
npx openskills install anthropics/skills
```

### 全局安装

技能安装到 `~/.claude/skills/`：

```bash
npx openskills install anthropics/skills --global
```

### Universal 模式（多助手支持）

如果你同时使用多个 AI 助手，安装到 `.agent/skills/` 避免冲突：

```bash
npx openskills install anthropics/skills --universal
```

**优先级顺序（从高到低）：**

1. `./.agent/skills/`
2. `~/.agent/skills/`
3. `./.claude/skills/`
4. `~/.claude/skills/`

## 命令参考

```bash
# 安装技能
npx openskills install <source> [options]

# 同步到 AGENTS.md
npx openskills sync [-y] [-o <path>]

# 列出已安装的技能
npx openskills list

# 读取技能内容
npx openskills read <name>

# 更新技能
npx openskills update [name...]

# 管理技能（交互式）
npx openskills manage

# 移除特定技能
npx openskills remove <name>
```

### 常用选项

- `--global` - 全局安装到 `~/.claude/skills`
- `--universal` - 安装到 `.agent/skills/` 而非 `.claude/skills/`
- `-y, --yes` - 跳过确认提示（适用于 CI）
- `-o, --output <path>` - 自定义输出文件路径（默认：`AGENTS.md`）

## SKILL.md 格式

OpenSkills 使用与 Anthropic 完全相同的 SKILL.md 格式：

```markdown
---
name: pdf
description: Comprehensive PDF manipulation toolkit for extracting text and tables, creating new PDFs, merging/splitting documents, and handling forms.
---

# PDF Skill Instructions

When the user asks you to work with PDFs, follow these steps:

1. Install dependencies: `pip install pypdf2`
2. Extract text using scripts/extract_text.py
3. Use references/api-docs.md for details
```

### 技能目录结构

**最小结构：**

```
my-skill/
└── SKILL.md
```

**包含资源：**

```
my-skill/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

## AGENTS.md 格式

OpenSkills 会在 AGENTS.md 中写入如下内容：

```markdown
<skills_system priority="1">

## Available Skills

<!-- SKILLS_TABLE_START -->
<usage>
When users ask you to perform tasks, check if any of the available skills below can help complete the task more effectively.

How to use skills:
- Invoke: `npx openskills read <skill-name>` (run in your shell)
- The skill content will load with detailed instructions
- Base directory provided in output for resolving bundled resources

Usage notes:
- Only use skills listed in <available_skills> below
- Do not invoke a skill that is already loaded in your context
</usage>

<available_skills>

<skill>
<name>pdf</name>
<description>Comprehensive PDF manipulation toolkit...</description>
<location>project</location>
</skill>

</available_skills>
<!-- SKILLS_TABLE_END -->

</skills_system>
```

## 创建自己的技能

### 步骤

1. 创建技能目录和 SKILL.md 文件
2. 编写技能说明
3. 安装技能：`npx openskills install ./my-skill`
4. 同步：`npx openskills sync`

### 本地开发技巧

使用符号链接进行本地开发：

```bash
# 克隆技能仓库
git clone git@github.com:your-org/my-skills.git ~/dev/my-skills

# 创建符号链接
mkdir -p .claude/skills
ln -s ~/dev/my-skills/my-skill .claude/skills/my-skill
```

## 更新技能

```bash
# 更新所有技能
npx openskills update

# 更新特定技能
npx openskills update git-workflow,check-branch-first
```

## 常见问题

### 为什么使用 CLI 而不是 MCP？

MCP 适用于动态工具，而技能是静态的指令和资源文件：

- 技能只是文件 → 不需要服务器
- 适用于所有助手 → 不需要 MCP 支持
- 符合 Anthropic 设计 → SKILL.md 就是规范

### 环境要求

- **Node.js** 20.6+
- **Git** （用于克隆仓库）

## 参考资源

- [OpenSkills GitHub 仓库](https://github.com/numman-ali/openskills)
- [Anthropic Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
