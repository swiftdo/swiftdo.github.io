---
title: Gemini CLI 与 MCP 整合
sitemap:
  exclude: false
  changefreq: hourly
date: 2025-07-09T00:00:00.000Z
tags:
  - tools
  - gemini
createTime: 2025/07/09 21:20:51
permalink: /ai/iu3bisj2/
---


如何通过MCP协议扩展Gemini CLI的能力，让它能够与各种外部工具和服务交互。

## 什么是MCP服务器？

MCP服务器是实现了`Model Context Protocol`的程序，它向`Gemini CLI`这样的客户端提供各种工具。每个MCP服务器通常专注于特定领域的功能，例如：

- GitHub MCP服务器 - 提供与GitHub仓库交互的能力
- 天气MCP服务器 - 提供实时天气查询功能
- 数据库MCP服务器 - 提供SQL查询和数据库操作功能
- Playwright MCP服务器 - 提供网页自动化和爬取功能
- Context7 MCP服务器 - 提供开源库文档查询功能

MCP的特别之处在于，服务器会向模型"自我描述"自己的功能和参数要求，这样AI模型能够"理解"工具的用途，并在适当的时机使用正确的参数调用它们。


## 配置MCP服务器

要在Gemini CLI中使用MCP服务器，你需要创建或编辑配置文件：

1.创建配置目录和文件：

```sh
mkdir -p ~/.gemini
touch ~/.gemini/settings.json
```

2.编辑settings.json文件，添加MCP服务器配置

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your_github_token_here"
      }
    },
    "weather": {
      "command": "npx",
      "args": ["-y", "mcp-server-weather"],
      "env": {
        "WEATHER_API_KEY": "your_weather_api_key_here"
      }
    }
  }
}
```

3.重启Gemini CLI以加载新配置

## 使用MCP工具

配置完成后，你可以通过以下步骤使用MCP工具：

1.使用/mcp命令查看所有可用的MCP服务器和工具：

```sh
> /mcp
```

这会显示所有已连接的MCP服务器及其提供的工具列表。


2.直接在对话中自然使用这些工具：

```sh
> 获取南京明天的天气预报
```

Gemini会自动识别这是一个天气查询，调用weather MCP服务器获取信息。

3.或者直接指定使用某个工具：

```sh
> 使用GitHub工具列出我的仓库中的所有issue
```

## 用Gemini CLI+MCP解决日常开发问题

让我们通过几个实际例子，看看Gemini CLI和MCP如何帮助解决实际的开发问题：

### 分析GitHub仓库并提出改进建议

```sh
> 使用GitHub工具分析仓库"username/project"的代码，找出可能的性能问题和改进点
```

Gemini会调用GitHub MCP服务器，获取仓库信息，分析代码结构，然后提供详细的改进建议。这个过程包括：

1. 获取仓库结构和文件列表
2. 分析关键文件的代码
3. 识别潜在的性能瓶颈、代码质量问题和安全漏洞
4. 提供具体的改进建议和代码示例


### 使用天气数据创建示例应用

```sh
> 创建一个简单的React天气应用，使用weather工具获取实时数据，显示5天预报
```

Gemini会设计应用结构，生成代码，并集成weather MCP服务器的API调用，一步到位。
Gemini还会生成配套的CSS样式、API路由和后端集成代码，帮你完成整个应用。

### 自动化数据分析和可视化

```sh
> 分析项目中的sales.csv文件，生成销售趋势图表和关键指标摘要
```

Gemini会使用内置的文件读取工具解析CSV数据，然后生成数据分析脚本。

如果配置了数据库MCP服务器，Gemini还可以直接从数据库读取数据，而不需要中间CSV文件。


### 使用Playwright MCP实现网页自动化

如果你配置了Playwright MCP服务器，可以让Gemini帮你自动化网页操作：

```sh
> 使用Playwright工具访问https://example.com，填写联系表单并提交
```

Gemini会生成并执行Playwright自动化脚本，完成表单填写和提交过程。

这种自动化能力在测试、数据抓取和重复性网页操作中特别有用。



























