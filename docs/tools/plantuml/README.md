---
title: 'plantuml学习'
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-10-25
tags:
- tools
- vuepress
---

PlantUML 是一个开源项目，支持快速绘制:
* 时序图
* 用例图 
* 类图
* 活动图 
* 组件图 
* 状态图 
* 对象图 
* 部署图 
* 定时图

同时还支持以下非 UML 图: 

* 线框图形界面
* 架构图
* 规范和描述语言 (SDL)
* Ditaa diagram
* 甘特图
* MindMap diagram
* Work Breakdown Structure diagram
* 以 AsciiMath 或 JLaTeXMath 符号的数学公式

通过简单直观的语言来定义这些示意图。

> 比较类似的画图工具：mermaid, viz, echarts, plantuml, sequence, flow 等。

## 安装

VScode 上利用 PlantUML 插件和 Markdown Preview Enhance 插件实现快速绘图，并导出图像。前者支持 `*.wsd, *.pu, *.puml, *.plantuml, *.iuml` 格式的文件，后者支持在 `Markdown` 中直接绘图和预览，并通过其他插件将 `Markdown` 文件导出为其他格式。

* 首先你需要安装 VS CODE
* 安装 Plantuml 插件
* `brew install plantuml`


## 时序图

可以使用 `->` 来绘制参与者之间传递的消息，而不必显示地声明参与者。
你也可以使用 `-->` 绘制一个虚线箭头。
另外，你还能用 `<-` 和 `<--`，这不影响绘图，但可以提高可读性

```
@startuml
Alice -> Bob: Authentication Request 
Bob --> Alice: Authentication Response
Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response 
@enduml
```

@startuml
Alice -> Bob: Authentication Request 
Bob --> Alice: Authentication Response
Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response 
@enduml


### 声明参与者

`participant`: 用于改变参与者的先后顺序。 

你也可以使用其它关键字来声明参与者:
* actor
* boundary 
* control 
* entity
* database
* collections

```
@startuml 
actor Foo1
boundary Foo2
control Foo3
entity Foo4
database Foo5
collections Foo6

Foo1 -> Foo2: To boundary
Foo1 -> Foo3: To control
Foo1 -> Foo4: To entity
Foo1 -> Foo5: To database
Foo1 -> Foo6: To collections
@enduml
```

@startuml 
actor Foo1
boundary Foo2
control Foo3
entity Foo4
database Foo5
collections Foo6

Foo1 -> Foo2: To boundary
Foo1 -> Foo3: To control
Foo1 -> Foo4: To entity
Foo1 -> Foo5: To database
Foo1 -> Foo6: To collections
@enduml


`as` 用于重命名参与者
你可以使用 `RGB` 值或者颜色名修改 `actor` 或参与者的背景颜色。


```
@startuml
actor Bob #red
participant Alice
participant "I hava a really\n long name" as L #99ff99

Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response

Bob -> L : Log transaction

@enduml
```

@startuml
actor Bob #red
participant Alice
participant "I hava a really\n long name" as L #99ff99

Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response

Bob -> L : Log transaction

@enduml


您可以使用关键字`order`自定义顺序来打印参与者。

```
@startuml
participant Last order 30
participant Middle order 20
participant First order 10

Last-> Last: this is a singal to self.

==newpage==

Last -> First 
@enduml
```

@startuml
participant Last order 30
participant Middle order 20
participant First order 10

Last-> Last: this is a singal to self.

==newpage==

Last -> First 
@enduml
