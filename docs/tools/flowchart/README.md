---
title: "流程图(flowchart)"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-01-07
tags:
  - tools
  - flowchart
---

我们常常需要在文档中引用一些流程图，以便更清晰地说明运行流程。以前没有系统地学习过 Flowchart 流程图，所以想到什么就画什么，结果画出来的图形状千奇百怪，没有形成一致的规范。

当然有很多专业在线画流程图的工具，简单的拖拽即可。但是对我而言，习惯了用 markdown 写文档，如果通过工具的话，需要切换软件，还需要生成图片，然后生成图片链接等等。特别是在更新流程图的时候，还需要找到这个流程图进行重新编辑。所以整个工作流程还是极其不流畅的。

那么 Flowchart 可以解决这种问题。直接在 markdown 就可以画图，当然需要安装一些插件才能渲染出来。

笔者使用的是 MWeb，已经内置了 flowchart 的插件。其他软件可自行在网上搜索答案。

## 概述

流程图的语法大致分为两部分。

- 定义元素
- 连接元素

## 定义元素

```
tag=>type: content:>url
```

1）**tag**：标签，用于连接元素时使用

2）**type**：该标签的类型。共有 6 种类型如下：

- start
- end
- operation
- subroutine
- condition
- inputoutput

3）**content**：流程语句中放置的内容

4）**url**：链接，与流程语句绑定

## 连接元素

使用`->`符号，如：

```
c2(yes)->io->e
c2(no)->op2->e
```

## 实例

mdweb 需要注明下语言 `flow` 即可

````md
```flow
st=>start: Start|past:>http://www.baidu.com
e=>end: End:>http://www.baidu.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes or No?|approved:>http://www.baidu.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
````

在 vuepress 中我们需要改成 @flowstart:

```md
@flowstart
st=>start: Start|past:>http://www.baidu.com
e=>end: End:>http://www.baidu.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes or No?|approved:>http://www.baidu.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend
```

效果：

@flowstart
st=>start: Start|past:>http://www.baidu.com
e=>end: End:>http://www.baidu.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes or No?|approved:>http://www.baidu.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend
