---
title: Gemini CLI 基础使用
sitemap:
  exclude: false
  changefreq: hourly
date: 2025-07-09T00:00:00.000Z
tags:
  - tools
  - gemini
createTime: 2025/07/09 21:11:20
permalink: /ai/l0t2gou1/
---

完成安装和授权后，你就可以开始使用Gemini CLI了。以下是一些基础功能和常用命令：

## 基础对话交互

在终端中启动Gemini CLI后，你可以直接输入问题或指令：

```sh
$ gemini 
> 解释什么是Flutter及其主要特点
```
Gemini会给出详细回答，支持markdown格式和代码高亮。

## 文件和代码操作

Gemini CLI能够读取和理解你的项目文件：

```sh
> 解释lib/pages/main.dart文件的功能 
```

或者使用@符号直接引用文件：

```sh
> @lib/pages/main.dart 有哪些潜在的性能问题
```

## 执行Shell命令

你可以让Gemini CLI执行shell命令，方法是在命令前加上感叹号：

```sh
> !ls -la
```

或者进入Shell模式，连续执行多个命令：

```sh
> !
$ ls -la
$ npm list
$ exit  # 退出Shell模式，返回Gemini CLI
```

## 内置工具和命令

Gemini CLI提供了一系列以斜杠开头的内置命令：

- `/help` - 显示所有可用命令
- `/tools` - 列出所有可用工具
- `/chat save <标签>` - 保存当前会话
- `/chat resume <标签>` - 恢复之前保存的会话
- `/clear` - 清除终端显示
- `/quit` 或 `/exit` - 退出Gemini CLI




