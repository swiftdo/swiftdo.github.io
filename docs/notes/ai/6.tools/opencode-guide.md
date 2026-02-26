---
title: Opencode 使用指南
date: 2026-02-26T00:00:00.000Z
tags:
  - opencode
  - ai
  - cli
  - coding-agent
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2026/02/26 10:00:00
permalink: /ai/opencode-guide/
---

Opencode 是一款基于 AI 的命令行编程助手，能够理解自然语言指令并执行代码任务。

## 什么是 Opencode

Opencode 是一个智能编程代理（Agentic Coding Assistant），它不仅仅是代码补全工具，而是能够：

- 理解复杂任务并自主拆解执行
- 读取、编辑、创建项目文件
- 执行 Shell 命令
- 与 Git 集成
- 调用预定义技能（Skills）完成标准化任务

### 与其他 AI 编程助手的区别

| 工具 | 定位 | 交互方式 | 执行能力 |
|------|------|----------|----------|
| GitHub Copilot | 代码补全 | IDE 插件 | 建议代码 |
| Cursor | 对话式编程 | IDE 集成 | 编辑文件 |
| **Opencode** | **编程代理** | **CLI + Skills** | **完整任务执行** |

## 安装与配置

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn 包管理器
- macOS / Linux / Windows

### 安装步骤

**1. 安装 Node.js**

```sh
# macOS (使用 Homebrew)
brew install node@20

# Linux (使用 nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20

# 验证安装
node --version
npm --version
```

**2. 安装 Opencode**

```sh
# 使用 npm 全局安装
npm install -g opencode

# 或使用 yarn
yarn global add opencode
```

**3. 验证安装**

```sh
opencode --version
```

### 配置 API Key

Opencode 需要配置 LLM API 才能工作：

```sh
# 创建配置目录
mkdir -p ~/.opencode

# 创建配置文件
cat > ~/.opencode/config.json << EOF
{
  "apiProvider": "openai",
  "apiKey": "your-api-key-here",
  "model": "gpt-4",
  "baseUrl": "https://api.openai.com/v1"
}
EOF
```

或使用环境变量：

```sh
export OPENCODE_API_KEY="your-api-key-here"
export OPENCODE_MODEL="gpt-4"
export OPENCODE_BASE_URL="https://api.openai.com/v1"
```

### 支持的模型提供商

| 提供商 | 环境变量 | 推荐模型 |
|--------|----------|----------|
| OpenAI | `OPENAI_API_KEY` | gpt-4, gpt-4-turbo |
| Anthropic | `ANTHROPIC_API_KEY` | claude-3-opus |
| Azure OpenAI | `AZURE_API_KEY` | gpt-4 |
| 自定义 | `OPENCODE_BASE_URL` | 任意兼容模型 |

## 核心功能

### 文件操作

Opencode 可以读取、写入、编辑项目中的任何文件：

```sh
# 读取文件
opencode "读取 src/main.ts 的内容"

# 创建新文件
opencode "在 components 目录下创建一个 Button 组件"

# 修改现有文件
opencode "给 UserService 添加一个 deleteUser 方法"
```

### 代码搜索与理解

```sh
# 搜索特定模式的代码
opencode "找到所有使用 fetch 的地方"

# 理解代码结构
opencode "解释这个项目的架构"

# 查找 Bug
opencode "分析这个函数的潜在问题"
```

### 任务执行

```sh
# 运行命令
opencode "运行测试并确保所有测试通过"

# 构建项目
opencode "执行构建并输出产物"

# Git 操作
opencode "查看最近的提交历史"
```

### 技能系统（Skills）

Skills 是 Opencode 的核心功能，它将复杂任务标准化、模块化：

```sh
# 列出可用技能
opencode skills list

# 安装新技能
opencode skills install <skill-name>

# 使用技能
opencode "使用 frontend-design 技能创建一个 landing page"
```

## 使用技巧

### 有效提示词编写

**❌ 不好的提示词**
```
帮我写点代码
```

**✅ 好的提示词**
```
创建一个 React 函数组件，接收 name 和 age 两个 props，
使用 TypeScript 定义类型，包含基本样式，
文件保存到 src/components/UserInfo.tsx
```

### 任务拆解方法

复杂任务应该拆分为小步骤：

```sh
# 第一步：分析需求
opencode "分析这个需求需要修改哪些文件"

# 第二步：执行修改
opencode "按照分析结果修改代码"

# 第三步：验证
opencode "运行测试验证修改是否正确"
```

### 上下文管理

Opencode 会记住对话历史，但需要注意：

- 长对话会消耗更多 tokens
- 关键信息应该明确说明
- 可以引用具体文件路径

```sh
# 引用文件
opencode "参考 @src/utils/helpers.ts 的风格，创建一个新的工具函数"
```

### 文件引用方式

```sh
# 引用单个文件
opencode "查看 @package.json 的依赖"

# 引用多个文件
opencode "对比 @file1.ts 和 @file2.ts 的差异"

# 引用目录
opencode "分析 @src/components/ 目录结构"
```

## 实战案例

### 案例 1：创建新功能

**需求**：添加用户登录功能

```sh
# 1. 创建登录组件
opencode "创建 LoginForm 组件，包含用户名、密码输入框和登录按钮，使用 TypeScript，保存到 src/components/LoginForm.tsx"

# 2. 创建服务
opencode "创建 AuthService，包含 login、logout、getToken 方法，使用 fetch 调用 API，保存到 src/services/auth.ts"

# 3. 更新路由
opencode "在路由配置中添加登录页面路由 /login"

# 4. 添加类型定义
opencode "在 src/types/auth.ts 中添加 User 和 LoginRequest 类型定义"
```

### 案例 2：Bug 修复流程

```sh
# 1. 描述问题
opencode "用户反馈点击登录按钮没有反应，帮我排查问题"

# 2. 分析日志
opencode "查看控制台日志，定位错误发生位置"

# 3. 修复代码
opencode "修复这个空指针异常，添加null检查"

# 4. 验证修复
opencode "运行相关测试用例验证修复"
```

### 案例 3：代码重构

```sh
# 1. 分析代码质量
opencode "分析 src/utils/ 目录的代码，找出可以优化的地方"

# 2. 提取公共函数
opencode "将这些重复的逻辑提取为公共工具函数"

# 3. 更新调用
opencode "更新所有引用这些逻辑的文件"

# 4. 删除冗余代码
opencode "删除被替换的旧代码"
```

### 案例 4：文档生成

```sh
# 生成 API 文档
opencode "根据 src/api/ 目录的代码生成 API 文档，输出为 Markdown 格式"

# 生成 README
opencode "分析项目结构，生成一个完整的 README.md"

# 生成变更日志
opencode "根据 git 提交历史生成 CHANGELOG.md"
```

## 最佳实践

### AGENTS.md 配置

在项目根目录创建 `AGENTS.md` 文件，定义项目规范和偏好：

```markdown
# AGENTS.md - 开发指南

## 项目结构
- src/components/ - React 组件
- src/services/ - API 服务
- src/types/ - TypeScript 类型定义

## 代码规范
- 使用 TypeScript 严格模式
- 组件使用函数式写法
- 使用 ES Modules 导入导出

## 测试规范
- 测试文件放在 __tests__ 目录
- 使用 Jest 作为测试框架
- 测试覆盖率要求 80% 以上

## 提交规范
- feat: 新功能
- fix: Bug 修复
- docs: 文档更新
- refactor: 代码重构
```

### 项目规范设定

1. **明确技术栈**：在 AGENTS.md 中说明使用的框架、库
2. **定义目录结构**：让 AI 了解文件组织方式
3. **代码风格**：命名约定、格式化规则
4. **安全注意**：哪些文件不应提交、密钥管理

### 安全注意事项

⚠️ **重要**：

- **永远不要**在代码中硬编码 API Key 或密码
- **不要**让 AI 修改 `.env`、`credentials.json` 等敏感文件
- **谨慎**执行 rm、rm -rf 等危险命令
- **检查** AI 生成的代码再提交

```sh
# ❌ 错误做法
opencode "把数据库密码写到配置文件"

# ✅ 正确做法
opencode "使用环境变量读取数据库配置"
```

### 性能优化建议

1. **批量操作**：一次性描述完整需求，减少来回对话
2. **明确范围**：指定要修改的文件或目录
3. **增量验证**：复杂任务分步骤验证
4. **清理上下文**：定期开始新对话避免上下文过长

## 常见问题

### Q1: 安装后提示找不到命令

**解决方案**：
```sh
# 检查 npm 全局目录是否在 PATH 中
npm config get prefix

# 将全局目录添加到 PATH
export PATH=$(npm config get prefix)/bin:$PATH
```

### Q2: API Key 配置后仍然报错

**排查步骤**：
```sh
# 1. 验证环境变量是否设置
echo $OPENCODE_API_KEY

# 2. 检查配置文件格式
cat ~/.opencode/config.json

# 3. 测试 API 连接
curl -H "Authorization: Bearer $OPENCODE_API_KEY" \
     https://api.openai.com/v1/models
```

### Q3: 执行速度慢怎么办

**优化方法**：
- 使用更快的模型（如 GPT-4 Turbo）
- 减少不必要的上下文
- 网络问题考虑使用国内镜像

### Q4: 如何自定义 Skills

**创建自定义 Skill**：

1. 创建技能目录：
```sh
mkdir -p ~/.opencode/skills/my-skill
```

2. 定义技能描述（skill.json）：
```json
{
  "name": "my-skill",
  "description": "我的自定义技能",
  "version": "1.0.0"
}
```

3. 编写执行逻辑（index.md）：
```markdown
# My Skill

## 执行步骤
1. 第一步...
2. 第二步...
```

### Q5: Git 操作失败

**常见原因**：
- Git 未安装或未配置
- 没有提交权限
- 工作区有未提交的更改

**解决方案**：
```sh
# 检查 Git 状态
git status

# 配置 Git 用户信息
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## 资源链接

- [Opencode 官方文档](https://opencode.ai)
- [Skills 仓库](https://github.com/opencode/skills)
- [社区讨论](https://github.com/opencode/opencode/discussions)
- [问题反馈](https://github.com/opencode/opencode/issues)

---

**持续更新**：Opencode 仍在快速发展中，本文档会持续更新最新用法。
