---
title: "火柴人视频导演：AI 只写 JSON，画面是 canvas 一帧帧画的"
description: "一个 5,295 Star 的开源仓库，教 Agent 把任意话题做成火柴人解说视频。拆开看它不是「AI 生成视频」：A 模式只产出逐镜提示词，B 模式把片子退化成一份 JSON 时间轴，由约 43 KB 的 canvas 渲染器逐帧画完交给 FFmpeg。本文拆两条流水线、一致性的真实来源与四道验收闸，也写清它的成本、动作天花板与增长 SOP 底色。"
createTime: 2026/11/10 11:59:02
date: 2026-11-10
tags:
    - AI 视频
    - Agent Skills
    - 开源
    - YouTube
    - 火柴人
---

# 火柴人视频导演：AI 只写 JSON，画面是 canvas 一帧帧画的

2026 年 11 月 10 日，`kaomei/stickman-video-director` 是 5,295 颗 Star、858 个 Fork、3 个 open issue、152 次提交。仓库 8 月 3 日建立，三个月零一周冲过 5,000，MIT 协议，语言一栏写着 JavaScript。但你要是在代码里搜「视频生成的模型调用」，会发现它几乎没有——名字里带 video director，仓库却更像一本规则手册加一个小渲染器。

先看体量分布。254 MB、316 个文件，大头全是样片 MP4、画风参考图和九种语言的 README（英、中、日、韩、法、印尼、葡、土）。真正干活的渲染代码——`autopilot.mjs`、`autopilot-core.mjs`、`autopilot-render.mjs` 加上 B3/B4 两个运行时——合计约 43 KB；而写给 Agent 看的规则文档（`references/` 下 29 份）有 353 KB。**规则是代码的八倍**。一个「教 AI 做视频」的项目，八分之七的功夫花在立规矩上，这件事本身就是文章的主题。

## 它卖的不是软件，是一段提示词

这个仓库没有 App、没有网站、没有 `npm install` 式的入口。安装方式是：把 README 里那段固定话术原样粘给你的 AI 助手，让它去装一个「Skill」，装完立刻读 `skills/directing-stickman-videos/SKILL.md`。SKILL.md 只有 112 行，是一个路由器：判断你要哪种模式，再告诉你该去读哪几份参考文档。

读完路由，路就分岔了：

[![同一个 Skill 的两条模式分流：A 导演模式只产出提案与逐镜提示词，成片在外部生成器与剪辑软件里完成；B 自动驾驶模式把剧本写成 project.json，由本地 canvas 逐帧渲染、FFmpeg 编码出 MP4 与 SRT（本文绘制）](/imgs/stickman-two-modes.svg)](/imgs/stickman-two-modes.svg)

两条流水线共享的只有安装方式和 11 套画风编号，制作契约互不继承——SKILL.md 里用了一整段话防止 A 的规则漏进 B。**A · 导演模式**在任何能对话的 AI 里就能跑，产出物是导演提案和逐镜提示词；**B · 自动驾驶模式**必须是能读写文件、执行命令的编程 Agent（Codex、Claude Code、Cursor），作者首选 Codex，仓库里的演示视频都是在 Codex 里做的测试。

这个拆分其实回答了一个问题：AI 视频工具的「编排」和「生成」是两件难度完全不同的事。A 模式只敢碰前者；B 模式想把后者也接管过来，用的方式出乎意料——不是更强的生成模型，而是把「视频」退化成一份工程文件。

## A 模式：把片子拆成 N 个十秒

A 模式的第一个动作不是写脚本，是一道设置闸（setup gate）：源料、画幅（16:9 / 9:16）、时长、画风，四项缺一项就「一次性问齐然后停」，而且明确写了**催促、「随便选个常规设置」都不豁免这道闸**。写提示词工程写到这个防御强度的不多见。

过了闸，片子被量化成 N 个十秒：N = 目标秒数 ÷ 10，60 秒就是 6 段，每段对应一个 10 秒的 Gemini Omni Flash 视频提示词。内容配方也给了死数：

- 叙事走「五段高完成度心跳引擎」：黄金钩子 → 打破假设 → 揭开内幕 → 终极真相 → 升华讨论；
- 英文旁白按 **每 10 秒 20–25 个词** 定量，60 秒视频就是约 120–150 词；
- 每个镜头 3 个定时节拍、至少 4 个相关视觉装置、每 2–3 秒一次画面变化，**镜头里的人不许闲着**；
- 声线在 Phase A 定成一段完整英文描述，之后每段**逐字重复**，不许用「同一个解说员」这种说法打发。

两个条款值得单独抄下来。一是诚实条款：*Treat generated consistency as a visual acceptance check, not a guarantee from repeated text*——把「角色一致性」当验收项，而不是当提示词重复就能兑现的承诺。二是反幻觉条款：*Do not invent unsupported facts, statistics, quotations, or product claims*。这两句的假想敌都不是用户，是模型自己。

但要看清交付物是什么：**A 模式交的是 prompt，不是视频**。出片你去 Google Flow、Runway、Luma、Kling，剪辑去 CapCut、Premiere。一条 3 分钟视频 18 个片段，段段都要你手搓。它省下的只有「想分镜」这一步。

## B 模式：视频退化成一份 JSON

B 模式是 3,000 Star 那道门槛兑现的东西，2026 年 10 月 23 日上线（中文 changelog 里写得明明白白）。它的方案是把整条流水线接进 Agent：脚本、插图、配音、字幕、音效、合成，最后吐出一个完整的视频文件。

图省事的介绍会写「一键成片」，但真正的机制在这里：

[![Autopilot 的本地渲染管线：project.json 声明镜头与关键帧，validate 校验覆盖与媒体，canvas 逐帧绘制并 smoothstep 插值，FFmpeg 编码出 MP4、SRT 与联系表；右下示意镜头必须首尾相接盖满音轨，以及火柴人动作全部来自一张三格姿态图集（本文绘制）](/imgs/stickman-render-pipeline.svg)](/imgs/stickman-render-pipeline.svg)

一个视频就是一份 `project.json`。镜头是 `shots` 数组，每个镜头有起止时间，里面是图层（图片、姿态、文本、线条、箭头），关键帧支持位置、宽度、角度、透明度、进度，插值用 smoothstep。设计坐标系固定 1280 单位宽，**底部 110 单位留白独占给字幕**。渲染器是 `@napi-rs/canvas` 加 `sharp`，FFmpeg 只负责编码，Node 20+，不占你的 GPU。仓库自带的离线示例，第一个镜头长这样：

```json
{"start": 0, "end": 2.85, "layers": [
  {"type": "text", "text": "YOUR CHANNEL.", "x": 95, "y": 110, "size": 58, "bold": true},
  {"type": "text", "text": "NOT YOUR FACE.", "x": 95, "y": 185, "size": 58, "bold": true, "color": "#EC4338"},
  {"type": "pose", "pose": 1, "x": 720, "y": 35, "w": 445},
  {"type": "image", "path": "@b1/youtube-crayon.png", "x": 120, "y": 300, "w": 270},
  {"type": "image", "path": "@b1/camera-handdrawn.png", "x": 405, "y": 335, "w": 160,
   "keys": [{"t": 0, "angle": -0.08}, {"t": 0.5, "angle": 0.06}, {"t": 0.9, "angle": 0}]}
]}
```

几条硬规矩决定了它的性格：

- **画面服从配音**。镜头必须无缝覆盖整条旁白加首尾留白，validate 按真实音频时长算，不按剧本的计划时长算；文档明写不许放慢语速、不许插停顿去凑画面。
- **字幕单行、按语义断句**，超宽就重新组织成下一句短语，不许缩小字号硬塞。
- **镜头级内容寻址缓存**，改一个镜头只重渲那一个，中断续跑不用从头来。
- 内置音效只有五个程序化生成的 `tap / paper / pop / chime / jingle`，剧情要的重音效得自己找有授权的文件，B4 甚至要求单独记录每段静音的「为什么」和「什么恢复了声音」。

熟悉的面孔出现了：这条路线和上周写过的 [HyperFrames](/article/hyperframes/) 是同构的——那边是 HTML 加无头 Chrome 逐帧 seek，这边是 JSON 加 canvas 逐帧绘制，两边都把「视频」变成可 diff、可缓存、可机械验收的东西，模型都不负责出画面。区别是 HyperFrames 面向会写网页的团队，而这个仓库面向「手里一个画面都没有、只想开个不露脸频道」的人。

## 一致性不是模型给的，是资产锁给的

AI 视频的老大难是角色跨镜头变脸。这个仓库的解法朴素到有点土：**不用模型保证一致性，用文件**。

[![十一套画风与 Star 里程碑：A 系列七套、B 系列五套互不继承，A7 标注 5,000★ 解锁但 README 仍写 coming soon；今天 5,295 颗星，数字上已过门槛（本文绘制）](/imgs/stickman-styles.svg)](/imgs/stickman-styles.svg)

B1 的全部「动画」来自一张三格姿态图集——`pose: 0/1/2` 就是取那张 PNG 的第几格，所谓角色动起来，只是在三个姿势之间切换。每套画风各配一把锁：B4 有 `style-lock.txt` 和五张锁定参考图，B1 有 `approved-baseline.json` 与「已验收制作标准」，B3 有 `reference-manifest.json`；样片一经确认，连指纹一起存档，之后的每一帧都对着这套资产画。连参考图都带着 `SOURCE-NOTES.md` 和 `ATTRIBUTION.md` 记出处。

代价同样直白：三个姿势就是天花板。渲染器文档明写「图像不会自动获得肢体运动」，渲染器不会从一张静图里推断出害怕的表情或新的威胁——想要动作戏，得去 A 模式赌文生视频，或者自己画图层。作者没把这件事藏起来，反而把它写进了每份风格文档。我欣赏这种处理，但它也划清了边界：**B 模式做的是「插图 + 微动画」型解说，不是动画**。

## 它防的是 Agent，不是防你

这个仓库最有意思的部分，不在画面，在验收。

[![Autopilot 的四道验收闸：doctor 环境闸、validate 格式闸、approve 人工闸、render 缓存闸，合起来把「看起来做完了」挡在交付之外（本文绘制）](/imgs/stickman-gates.svg)](/imgs/stickman-gates.svg)

样片要先渲染约 20 秒带声版本，用户看过、听过、明确批准之后，才能执行 `approve` 写下一条绑定样片指纹的记录，然后才允许整片渲染。规矩写到这个程度：**Never run approve based on your own technical checks**——不许 Agent 拿自己的技术自检冒充用户签字。改了旁白或全局设置，旧批准作废；只补拍后面的镜头，已确认部分不作废。连配音选角都要求「真的用 Google 搜索」核实声线，并记录查询 URL 和日期——防的是模型张口编一个不存在的音色。

这些设计指向同一个判断：自动化管线里最不可靠的环节不是生成质量，是「Agent 声称完成」这个动作本身。四道闸的成本很低（大部分就是几条校验加一个指纹文件），挡住的却是交付流程里最常见的塌方。

## 冷静部分

热度归热度，几件事得说清。

- **免费不等于零成本。** MIT 是真的，编排层确实一分钱不收；但生图、配音、A 模式的视频片段全是第三方服务的用量账单，README 里就挂着 SJolt 和 APIMart（GPT-Image-2，$0.006/张）两个赞助 API。所谓 100% Free，免的是这套流程，不是你的生成费用。
- **A 模式省的只有分镜。** 出片和剪辑还是你的活，10 秒一段意味着 3 分钟视频 18 段。想真正全自动，只有 B 模式，而 B 模式只有插图微动画这一种动作能力。
- **画风选择的依据值得玩味。** README 里每套画风都标着来源频道的涨粉数据：@Zenn0009 20 万订阅、@IfverseTales 三周 6 万、@BeanieSurvives 三周 10 万……这不是美学分类，是一张增长 SOP 对照表。仓库的底色是「不露脸频道的工业化流水线」，作者在 X 上同步卖的也是每日工作流和增长打法。想拿它做创作工具没问题，但它首先是一套流量方法论。
- **文档 8:1 于代码的脆弱性。** 规则靠散文传递，Agent 漏读一份 reference，质量就退回「凭通用知识猜」。仓库里 11 个测试文件护住的是渲染运行时，护不住提示词层的执行——这是所有 Skill 型仓库的共性弱点，不独此家。
- **里程碑已过，货还没到。** A7 写明 5,000 星解锁，现在 5,295 星，README 里它还是 coming soon。三个月 5,000 星的项目里，承诺列表跑在代码前面是常态而非意外；按 1,000 星档（导演模式）和 3,000 星档（自动驾驶）的兑现记录，它大概率会到，但你要按它的节奏等。

## 一个判断

这个仓库真正解决的不是「生成视频」，是给 Agent 一个**能被机械检查的交付格式**：画面是一份可 diff 的 JSON，完成是一条带指纹的批准记录，质量是一道道可枚举的闸门。至于「火柴人」，只是这个格式上最便宜的内容皮肤——线够少，插画模型不容易画崩，三格图集就够支撑一部片子。

想试的话我的建议是：装 Skill，选 B1 极简手绘，先只要 20 秒带声样片；配音先用自己录的一段音频走通全流程，再考虑接 TTS；B4 那套声画纪律值得单独读一遍，哪怕你不用它做惊悚片。别拿它做动作戏——三个姿势的火柴人撑不起来，这不是它的 bug，是它的定价。

## 参考

- [kaomei/stickman-video-director](https://github.com/kaomei/stickman-video-director) · [SKILL.md](https://github.com/kaomei/stickman-video-director/blob/main/skills/directing-stickman-videos/SKILL.md) · [中文更新记录](https://github.com/kaomei/stickman-video-director/blob/main/CHANGELOG.zh-CN.md)
- 运行时文档：[Autopilot runtime](https://github.com/kaomei/stickman-video-director/blob/main/skills/directing-stickman-videos/references/autopilot-runtime.md) · [B · Autopilot](https://github.com/kaomei/stickman-video-director/blob/main/skills/directing-stickman-videos/references/autopilot.md) · [离线示例 project.json](https://github.com/kaomei/stickman-video-director/blob/main/skills/directing-stickman-videos/examples/b1/project.json)
- 相关文章：[HyperFrames：写 HTML，出 MP4，作者是 Agent](/article/hyperframes/)
- 文中 Star、Fork、issue、提交数、文件与字节数取自 2026-11-10 的 GitHub API 与仓库文件树；「约 43 KB 渲染代码 vs 353 KB 规则文档」按 `scripts/` 下五个核心运行时文件与 `references/` 目录 29 份文档的字节数合计；画风涨粉数据引自仓库 README，属作者自述口径
