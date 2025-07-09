---
title: '自定义MCP服务器'
sitemap:
  exclude: false
  changefreq: hourly
date: 2025-07-09
tags:
- tools
- gemini
---


如果现有的MCP服务器不能满足你的需求，你还可以创建自己的MCP服务器。虽然这需要一些开发经验，但基本流程并不复杂：


## 方法一：使用FastMCP (Python)

FastMCP是一个Python库，让你可以快速创建MCP服务器：

1. 安装依赖

```sh
pip install fastmcp
```

2. 创建服务器代码：

```sh
from fastmcp import FastMCP
import requests

# 创建FastMCP服务器实例
server = FastMCP("web_tools")

@server.tool()
def get_website_status(url: str) -> str:
    """检查网站状态并返回HTTP状态码和响应时间"""
    try:
        response = requests.get(url, timeout=5)
        return f"状态码: {response.status_code}, 响应时间: {response.elapsed.total_seconds()}秒"
    except Exception as e:
        return f"错误: {str(e)}"

@server.tool()
def extract_webpage_content(url: str, selector: str = "body") -> str:
    """获取网页内容，可选择指定CSS选择器"""
    try:
        response = requests.get(url, timeout=5)
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        element = soup.select_one(selector)
        if element:
            return element.text.strip()
        return "未找到指定元素"
    except Exception as e:
        return f"提取内容时出错: {str(e)}"

# 启动服务器
if __name__ == "__main__":
    server.run()
```


3. 配置Gemini CLI使用你的服务器：

```json
{
  "mcpServers": {
    "web_tools": {
      "command": "python",
      "args": ["path/to/your/server.py"],
      "env": {}
    }
  }
}
```

## 方法二：使用MCP SDK (JavaScript/TypeScript)


如果你更习惯JavaScript或TypeScript，可以使用官方的MCP SDK：

1. 创建项目

```sh
mkdir my-mcp-server
cd my-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk
```

2. 创建服务器代码：

```js
import { Server } from '@modelcontextprotocol/sdk';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk';
import axios from 'axios';

// 定义工具
const WEB_STATUS_TOOL = {
  name: "get_website_status",
  description: "检查网站状态并返回HTTP状态码",
  inputSchema: {
    type: "object",
    properties: {
      url: {
        type: "string",
        description: "要检查的网站URL"
      }
    },
    required: ["url"]
  }
};

// 创建服务器
const server = new Server(
  { name: "web_tools_server", version: "1.0.0" },
  {
    capabilities: {
      tools: {
        tools: [WEB_STATUS_TOOL]
      }
    }
  }
);

// 注册工具处理程序
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [WEB_STATUS_TOOL]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  if (name === "get_website_status") {
    try {
      const response = await axios.get(args.url, { timeout: 5000 });
      return {
        content: [{ type: "text", text: `状态码: ${response.status}, 响应时间: ${response.duration}ms` }],
        isError: false
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `错误: ${error.message}` }],
        isError: true
      };
    }
  }
  
  return {
    content: [{ type: "text", text: `未知工具: ${name}` }],
    isError: true
  };
});

// 启动服务器
const stdio = server.createStdioTransport();
stdio.listen();
```

3. 配置Gemini CLI使用你的服务器：

```json
{
  "mcpServers": {
    "web_tools": {
      "command": "node",
      "args": ["path/to/your/server.js"],
      "env": {}
    }
  }
}
```


## MCP工具设计最佳实践

设计优秀的MCP工具需要注意以下几点：

- 工具命名要清晰具体：使用描述性名称，如search_github_issues而非简单的search
- 提供详细的工具描述：帮助模型理解工具的用途、功能和使用场景
- 详细定义参数架构：清晰说明每个参数的类型、格式和用途
- 添加良好的错误处理：为各种边缘情况提供友好的错误信息
- 控制返回数据大小：避免返回超大结果，可能会超出模型的处理能力


