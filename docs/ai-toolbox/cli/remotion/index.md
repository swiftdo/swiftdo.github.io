---
title: remotion：五年的老大哥，和它那套要花钱的授权
description: "用 React 写视频的框架：5 年、1200 页文档、四条渲染路径、一整套生态。它现在把「Make videos agentically」写在第一条。以及必须先看清的两档授权——4 人以上的公司要买商业许可。"
createTime: 2026/10/31 23:00:00
---

> 上一篇写 hyperframes 时，它的 README 里有一张对比表，被比的那一方就是 Remotion。这一篇写被比的那一方。

有意思的是，Remotion 现在的 README 第一行小标题是「**Make videos agentically**」——用你的 agent 把想法变成视频。被挑战者写进对比表之后，最好的回应大概就是把自己变成对方说的那样。

| 项目 | 内容 |
|---|---|
| 类型 | 框架 + 工具链 + 云端渲染 |
| 仓库 | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) · [remotion.dev](https://www.remotion.dev/) |
| 技术栈 | TypeScript / React；Node + headless Chrome + FFmpeg |
| 许可 | **Remotion License（两档）**，非开源许可 |
| 热度 | 69.3k star / 5.7k fork / 178 open issue（2026-10-31 快照） |
| 状态 | v4.0.539（2026-10-26），2020-06-23 开源，五年多 |

## 它是这个品类的定义者

2020 年 6 月开源，比这一整波 AI 视频早得多。当时它提的问题是：**为什么视频不能用写网页的方式做？**

五年下来它给出的答案很完整：1200 多页文档、一整套 API、四条渲染路径、一个播放器组件、一个能自己搭剪辑器的 starter，以及一个卖模板和接活的商店。你现在看到的所有「HTML/代码生成视频」的产品，多少都站在它的肩膀上。

README 用三句话概括了三种用法：

- **agentically**：让 agent 把你的想法变成视频
- **interactively**：像普通剪辑器那样编辑和加动画
- **programmatically**：用 web 技术，把视频当代码拥有

第三条是它的根，第一条是它现在最想被看到的脸。

## 写法：React 组件

它的心智模型是：**视频 = 一个组件，帧号 = 一个变量**。

组件里调用 `useCurrentFrame()` 拿到当前帧，用 `interpolate()` 把它映射成透明度、位移、缩放；`<Sequence>` 控制片段何时出现、持续多久；`<AbsoluteFill>` 提供铺满画布的一层。想要弹簧动画有 `spring()`，想要音频字幕有专门组件。

代价和好处都很清楚：

| | React 路线 |
|---|---|
| 好处 | 组件复用、状态管理、TypeScript、整个 npm 生态 |
| 代价 | 需要打包器；agent 交接的是一个 JSX 项目，不是一个文件 |

对比 hyperframes 那句「index.html 直接能播」——这是两种完全不同的取舍，不是谁对谁错。

## 授权：两档，用之前必须看清

这是它和这个集合里其他工具最大的区别。`LICENSE.md` 写得很明白：

**免费（含商用）**：个人；**不超过 3 名员工的营利组织**；非营利组织；正在评估、尚未商用的团队。

**需要买公司授权**：不满足上述条件的组织，去 `remotion.pro` 询价。

**明确禁止**：把 Remotion 的代码复制或修改后，用来出售、出租、再授权你自己的衍生品。

还有一句要特别标记：**LICENSE.md 开头就写着「在 Remotion 5.0 里，授权会有小幅变化」**，并附了一个 PR。也就是说，你今天读到的条款，下一个大版本可能就不一样了。

对一个五年项目来说，这套「个人免费换生态、公司付费换可持续」的两档模式是这个品类里最现实的商业样本。但对使用者来说，它意味着**判断能不能用之前要先看人数**——这条比任何技术特性都更早决定你能不能上。

## 四条渲染路径，这是它最成熟的地方

| 路径 | 适合 |
|---|---|
| Node.js API（SSR） | 在自己的服务器上批量渲染 |
| Lambda | 大规模分布式渲染，成熟度最高 |
| Vercel | 部署在 Serverless 上直接出片 |
| 客户端渲染 | 在浏览器里出片，不占服务端 |

官方还专门有一页对比这几条路的取舍。hyperframes 的对比表里承认「Remotion Lambda 更成熟」——这句是实话，也是它五年积累出来的东西：**不只是能渲染，是知道一百万个视频该怎么渲染。**

## 它已经不只是一个库

看它的产品清单会发现它长成了生态：

- **Player**：嵌到网页里的播放器组件
- **Editor Starter**：一个起点，让你搭自己的视频编辑器
- **Elements / Effects / Transitions / Captions / Fonts / Color correction**：预制件，不用从零写
- **Store**：卖模板和素材
- **Experts**：一栏接活的开发者名单

这也解释了它的授权为什么能收钱：不是收「渲染引擎」的钱，是收「一整套生产工具」的钱。

## 和 hyperframes 怎么选

两篇连着看，这张表应该能直接帮你决定：

| | Remotion | HyperFrames |
|---|---|---|
| 写法 | React 组件 | 纯 HTML + data 属性 |
| 构建 | 需要打包器 | **没有**，`index.html` 直接播 |
| agent 交接物 | 一个 JSX 项目 | 一个 HTML 文件 |
| 授权 | 两档，4 人以上公司要买 | Apache-2.0，无门槛 |
| 云渲染 | Lambda，成熟 | 有 AWS Lambda 包，较新 |
| 生态 | 五年积累，模板/预制件/商店 | 新，但组件目录在长 |
| 版本 | v4.x，稳定 | v0.8.x，一天一个版本 |

一句话：**要 Apache-2.0 和「无构建」，选 HyperFrames；要成熟云渲染和整套生态、且授权合规，选 Remotion。**

## 坑

### 1. 授权是硬门槛，不是提示

「3 名员工」这个数字很具体。四个人以上的公司用它做商用内容，就得买授权。而且 5.0 会改条款，长期项目要盯着。

### 2. 仓库 4.4GB

`size` 字段 4,460,335 KB。里面塞了大量示例视频和测试素材。只想要代码的话用浅克隆，别裸 `git clone`。

### 3. 打包步骤是真实成本

对人是小事，对 agent 是大事：它得理解项目结构、装依赖、处理 TS 配置，而不是打开一个 HTML 就能改。

### 4. v4.0.539 这个补丁号

一个 major 版本跑到 539 个 patch，说明修复很勤——也说明变动很频繁。锁版本，别用 floating range。

### 5. 学习曲线比 HTML 陡

要懂 React、懂它的帧模型、懂 `interpolate` 和 `spring` 的语义。这不是半小时能上手的东西。

## 适合谁

| 适合 | 不适合 |
|---|---|
| 要批量渲染成千上万条视频（个性化营销、数据驱动内容） | 四个人以上的公司，且不想买授权 |
| 团队本来就是 React 栈 | 只想让 agent 快速出一条短视频 |
| 要在网页里嵌播放器或自己搭剪辑器 | 需要 Apache-2.0 级别的许可自由 |
| 需要成熟稳定的云渲染 | 不想装打包器 |

## 一点判断

补这一篇，是因为上一篇的对比表缺了另一半。把两个放一起看，会发现它们其实在回答同一个问题的两种答案：

**视频到底该被「写」成什么？** Remotion 说：写成一个 React 程序，因为程序能复用、能组合、能被工程化管理。HyperFrames 说：写成一个 HTML 文档，因为 agent 会写它、人能读它、浏览器能直接打开。

两个答案都对，只是押的时间尺度不同。Remotion 押的是**团队和规模**——所以它做了 Lambda、做了商店、做了两档授权。HyperFrames 押的是**agent 和速度**——所以它去掉了构建、把时间轴写成属性、把技能装进 Claude Code。

最有意思的是双方都在往对方那边挪：Remotion 把「agentically」放到了第一条，HyperFrames 也在补云渲染。这场竞争最后大概不会有输家，因为**能写视频的人变多了**这件事，对两家都是好事。

至于要不要用——先看授权那一段。这是唯一一个会先于技术选型决定你能不能用的条件。

## 链接

- [仓库](https://github.com/remotion-dev/remotion) · [官网](https://www.remotion.dev/) · [文档（1200+ 页）](https://www.remotion.dev/docs)
- [授权与定价](https://www.remotion.pro/license) · [Agent Skills](https://www.remotion.dev/docs/ai/skills) · [Showcase](https://remotion.dev/showcase)
- 上篇：[hyperframes](/ai-toolbox/cli/hyperframes/)
