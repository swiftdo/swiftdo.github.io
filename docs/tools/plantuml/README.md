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

时序图(Sequence Diagram)，又名序列图、循序图，是一种 UML 交互图。它通过描述对象之间发送消息的时间顺序显示多个对象之间的动态协作。

### 时序图的角色

我们在画时序图时会涉及下面7种元素：

### 角色(Actor)
系统角色，可以是人或者其他系统和子系统。以一个小人图标表示。

### 对象(Object)

对象位于时序图的顶部,以一个矩形表示。对象的命名方式一般有三种：

* 对象名和类名。例如：华为手机:手机、loginServiceObject:LoginService；
* 只显示类名，不显示对象，即为一个匿名类。例如：:手机、:LoginSservice。
* 只显示对象名，不显示类名。例如：华为手机:、loginServiceObject:。

### 生命线(LifeLine)

时序图中每个对象和底部中心都有一条垂直的虚线，这就是对象的生命线(对象的时间线)。以一条垂直的虚线表。

### 控制焦点(Activation)

控制焦点代表时序图中在对象时间线上某段时期执行的操作。以一个很窄的矩形表示。

### 消息(Message)

表示对象之间发送的信息。消息分为三种类型。

* 同步消息(Synchronous Message)
    消息的发送者把控制传递给消息的接收者，然后停止活动，等待消息的接收者放弃或者返回控制。用来表示同步的意义。以一条实线和实心箭头表示。

* 异步消息(Asynchronous Message)
    消息发送者通过消息把信号传递给消息的接收者，然后继续自己的活动，不等待接受者返回消息或者控制。异步消息的接收者和发送者是并发工作的。以一条实线和大于号表示。

* 返回消息(Return Message)
    返回消息表示从过程调用返回。以小于号和虚线表示。


### 自关联消息

表示方法的自身调用或者一个对象内的一个方法调用另外一个方法。以一个半闭合的长方形+下方实心剪头表示。

下面举例一个时序图的列子，看下上面几种元素具体的使用方式。

![](http://blog.loveli.site/mweb/16049018663468.jpg)

### 组合片段

组合片段用来解决交互执行的条件和方式，它允许在序列图中直接表示逻辑组件，用于通过指定条件或子进程的应用区域，为任何生命线的任何部分定义特殊条件和子进程。组合片段共有13种，名称及含义如下：

![](http://blog.loveli.site/mweb/Screen%20Shot%202020-11-09%20at%202.07.17%20PM.png)

### plantuml

#### 请求、回调、渲染
```
@startuml test
participant c as "Client"
participant s as "Server"
c -> s: fetch
activate s

c -> c: render
activate c 
deactivate c

s --> c: callback
deactivate s 

c -> c: render
activate c
destroy c 
@enduml
```

一旦参与者被激活，它的生命线就会显示出来。
* activate 和 deactivate 适用于以上情形。
* destroy 表示一个参与者的生命线的终结。


@startuml test
participant c as "Client"
participant s as "Server"
c -> s: fetch
activate s

c -> c: render
activate c 
deactivate c

s --> c: callback
deactivate s 

c -> c: render
activate c
destroy c 
@enduml


#### 自我调用

```
@startuml test2

participant c as "Client"
participant s as "Server"

activate c
c -> c: internal call 1
activate c 
deactivate c 


c -> c: internal call 2 
activate c 
deactivate c

@enduml
```

@startuml test2

participant c as "Client"
participant s as "Server"

activate c
c -> c: internal call 1
activate c 
deactivate c 


c -> c: internal call 2 
activate c 
deactivate c

@enduml


#### 入口和出口

```
@startuml test3

participant c as "Client"
participant s as "Server"

[-> c: enter
[<- c: leave

@enduml
```


@startuml test3

participant c as "Client"
participant s as "Server"

[-> c: enter
[<- c: leave

@enduml


#### 逻辑分支

```
@startuml test4

participant c as "Client"
participant s as "Server"

alt a 
c -> s: a
else b
c -> s: b
end 

@enduml
```


@startuml test4

participant c as "Client"
participant s as "Server"

alt a 
c -> s: a
else b
c -> s: b
end 

@enduml


#### 循环

```
@startuml test5

participant c as "Client"
participant s as "Server"

loop 100 times
    c -> s: DNS attack
end 

@enduml
```


@startuml test5

participant c as "Client"
participant s as "Server"

loop 100 times
    c -> s: DNS attack
end 

@enduml


#### 自定义组

```
@startuml test6

participant c as "Client"
participant s as "Server"

group title
    c -> s: do things
end 

@enduml
```

@startuml test6

participant c as "Client"
participant s as "Server"

group title
    c -> s: do things
end 

@enduml


#### 注解

```
@startuml test7
participant c as "Client"
participant s as "Server"

c -> s: fetch 
note left: left note

note over c, s
multiline
middle note
end note

s --> c: callback
note right: right note
@enduml
```

@startuml test7
participant c as "Client"
participant s as "Server"

c -> s: fetch 
note left: left note

note over c, s
multiline
middle note
end note

s --> c: callback
note right: right note
@enduml

#### 分隔线 

```
@startuml test8
participant c as "Client"
participant s as "Server"

== Stage A ==
c -> s: A
s --> c: callback

== Stage B ==
c -> s: B
s --> c: callback

@enduml
```

@startuml test8
participant c as "Client"
participant s as "Server"

== Stage A ==
c -> s: A
s --> c: callback

== Stage B ==
c -> s: B
s --> c: callback
@enduml


#### 外框

```
@startuml test9

participant s as "Server"

box "Box" #LightBlue
    participant c as "Client"
end box 

@enduml
```

@startuml test9
participant s as "Server"
box "Box" #LightBlue
    participant c as "Client"
end box 
@enduml
