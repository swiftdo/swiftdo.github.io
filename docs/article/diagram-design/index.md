---
title: "Diagram Design：把「品味」写成 Agent 能读的规则"
description: "66,043 Star、MIT、45 种图表，却几乎没有可运行的程序——diagram-design 卖的是一堆 Markdown 规则。本文用官方 before/after 对照图拆它如何把审美变成能 fail 的 CI 检查、为什么删掉描述里的类型名会让 skill 失效，以及 README 自己写的「别用我」。"
createTime: 2026/11/09 23:21:36
date: 2026-11-09
tags:
    - Diagram Design
    - Agent Skills
    - 上下文工程
    - 设计系统
    - 开源
---

# Diagram Design：把「品味」写成 Agent 能读的规则

让 Agent 画一张架构图，多半会得到一排圆角白卡片、蓝色数字徽章，底下再垫一条深色横幅。能看懂，但你不会把它放进文章或客户方案里。

下面两张图是同一份内容、同一个模型，唯一区别是第二次装了一个 skill。

## 先看两张图

[![没有使用 skill 时 Claude 生成的第一版：六个相同的白卡片与蓝色编号徽章](/imgs/dd-before.png)](/imgs/dd-before.png)

*第一版，没有 skill。六个一模一样的白卡片，顶部一道蓝边、一个蓝色数字徽章，箭头把它们串起来，底部一条深色横幅写着 `AI + Governance + Humans`。信息全在，但没有重点、没有层次，也没有任何一处编辑判断。*

[![使用 Diagram Design 重绘后的浅色版：六列四行矩阵，Triage 一列被赭红强调](/imgs/dd-after-light.png)](/imgs/dd-after-light.png)

*同一份内容重绘后。标题是衬线体、斜体落在一个词上；正文变成六列 × 四行的矩阵，每行回答同一个问题（Stage / Intent / Guardrail / Outcome），只有 `Triage` 一列被赭红标为焦点；顶上一条虚线 `CHANGE RETURNS TO INTENT` 表示回环，底下是三条宽度不等的 operating model 卡片和一条固定图例。*

差别不是「更好看」，而是第二张**做了删减和排序**：哪些信息该并排比较、哪个环节值得读者第一眼看到、哪些蓝边和数字徽章纯属噪音。作者 Cathryn Lavery 在 README 里写得很直白：

> The model already understood the content. What it was missing was taste, so I wrote the taste down.

她把 taste 写下来的地方，就是 [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)。

## 它卖的不是程序，是一堆 Markdown

先看数字：截至 2026-11-09 的 GitHub API，**66,043 Star、4,385 Fork、54 个 open issue、433 次提交**，MIT 许可，`language` 是 HTML，仓库 4 月 16 日建，最新提交是 11 月 9 日的 `chore(release): bump plugin manifests to 2.6.148`。官网还挂着「Hit #1 on GitHub Trending 17k+ stars」——这个数字早已被甩开，后面还会提到。

但仓库里并没有一个可以 `npm start` 的应用。没有构建步骤、没有 dashboard、没有服务端，PRIVACY.md 说得更干脆：**no server, no accounts, no analytics, and no telemetry**。真正的产品是这些文件：

- `skills/diagram-design/SKILL.md` —— 主入口，一份写给模型看的工作规范；
- `references/` —— 45 份 `type-*.md`（每种图表各自的版式语法）、`style-guide.md`（颜色与字体令牌）、`layout-budget.md`、`primitives-core.md`、`onboarding.md`、`profiles.md`、`animation.md`、导入与导出规范；
- `assets/` —— HTML 模板与每种类型的三种示例（minimal light / minimal dark / full-editorial）；
- `scripts/` —— 几个把 draw.io、Mermaid、Excalidraw 抽成结构化 IR 的 Python 脚本；
- 仓库根的 `scripts/` —— 七十多个 CI 校验脚本。

产物只有一个：单个自包含 `.html`，内嵌 CSS、内联 SVG，默认**没有 JS、没有外链图片**，唯一的网络请求是 Google Fonts（要求 system fonts 时连这个也没有）。双击就能离线打开，五年后也能打开。

README 里的三方对照说清了它的位置：Mermaid 是写文本、由渲染器决定布局、产物可 diff；draw.io 是手工拖框；Diagram Design 是把需求说给 Agent，由 Agent 在 **4px 网格**上摆放，并有 CI 检查重叠与裁切。所以它不是渲染器，也不是又一个图表库——**它是把编辑判断写成机器可执行约束的一次尝试**。

## 把「好看」拆成能 fail 的数字

这个项目的狠处，是没把设计停在形容词上。`SKILL.md` 里几乎每条审美都能换算成检查项：

- **一个强调色，1–2 个焦点元素**，其余一律 ink / muted / soft。原文：`If you're tempted to accent 4 things, you haven't decided what's focal yet.`
- **三种字体**：Instrument Serif 管标题与斜体旁注，Geist sans 管节点名，Geist Mono 只管技术内容（端口、URL、字段类型），并明确点名禁用 JetBrains Mono 当「开发感」字体。
- **1px 发丝线、无阴影、圆角最大 10px**；所有坐标、宽高、间距必须能被 4 整除。原文对这条的评价是 `That rule is non-negotiable; it's what keeps the diagrams from feeling AI-generated.`
- **目标密度 4/10**，并给了硬性预算：单图最多 9 个节点、12 条箭头、2 个 accent、2 个批注；`Above 9 nodes, it's probably two diagrams.`
- **六条连接线铁律**，标注为 `Non-negotiable`，违反即 `Automatic fail`：只能正交折线（斜线直接失败）、箭头标签必须垫不透明底板且离线 6–10px、平行线间隔 ≥12px 且交叉处用 bridge、同一边的连接点按 `L·k/(N+1)` 各自分开、不得从非端点方框背后穿过、先画箭头再画框让线待在节点下面。
- 禁用清单还包括：暗色配青紫辉光、三张等宽通用卡片、任何 `box-shadow`、`rounded-2xl`、箭头上竖排 `writing-mode` 文字、照搬 Mermaid 渲染器的自动布局。

落笔前还有一道流程约束：Agent 必须先声明**选了哪种类型、哪个语义模式、哪个尺寸预设、预算会砍掉什么**，并给用户一次改主意的机会；产出前再跑一份三十多项的 `Taste Gate` 清单，从「能不能再删一个节点」一直问到 `<title>` 是不是 `<svg>` 的第一个子元素。

[![架构图示例：单一赭红焦点、1px 发丝线、正交折线与底部固定图例](/imgs/dd-architecture.png)](/imgs/dd-architecture.png)

*45 种类型之一的 Architecture 示例。整个系统只有 `Astro Origin` 一个赭红焦点；`HTTPS` 蓝色、`SSR` 赭红、虚线 `RESP` 异步返回各有语义；连接线全是直角折线并绕开节点；`CONTENT` 是一个浅色包含分区；图例固定在底部横条，不漂浮在图内。规则不是描述，是画面上能逐条指认的东西。*

更关键的是这些规则**真的会被执行**。`CONTRIBUTING.md` 列了 77 道 validation gate，PR 在 Python 3.11 / 3.12 × Linux / Windows / macOS 上全跑一遍：`lint-skin.py` 查配色、字体、a11y 与单文件安全（拒绝远程资源、CSS `@import`、事件属性、多余脚本）；`lint-render.py` 用 Chromium 真渲染一遍查布局；`verify-geometry.py` 查标签遮罩是否被后画的节点裁切、连接线是否正交且各走各的端口；`verify-contrast.py` 强制文字 4.5:1、关键标记 3:1。带数值声明的图表还有专属 verifier 与**对抗样例**——比如 waterfall 的失败样例，末值标 236，但有符号贡献加起来是 238。

所以 README 那句 `No shadows. No Mermaid slop.` 不是口号，是能让 CI 变红的规则。

## 45 种类型，每次只读一份

45 种图表如果全塞进上下文，Agent 还没动笔就被撑爆了。它用的是 **progressive disclosure（渐进式披露）**：启动时 Agent 只看得到 skill 的名字和 frontmatter `description`；请求命中后才加载 `SKILL.md`；选定类型后再只读那一份 `type-*.md`，行为复杂才追加 `semantic-patterns.md`，要动画才追加 `animation.md`。README 的说法是：明天再加一种类型，别的地方一行都不用改。

这里有一段特别值得记的翻车，写在 [ADR 0004](https://github.com/cathrynlavery/diagram-design/blob/main/docs/adr/0004-skill-md-byte-cap-and-trigger-rich-description.md) 里。v2.3 初版给 `SKILL.md` 设了 35,000 字节上限，为了瘦身，作者把 frontmatter `description` 里 **27 个类型名删掉了**。结果「make me a flowchart」不再触发这个 skill——因为 description 是 Agent 决定要不要加载之前唯一能看到的文本，删掉 `flowchart`、`Gantt`、`org chart`，就等于删掉了词汇钩子。

ADR 的裁决把优先级倒过来：`description` 必须列全所有类型（由 `verify-docs-sync.py` 强制），宁可砍正文；上限提到 40,000 字节。2026-09-27 的修正案里，文件涨到 39,530 字节、只剩 470 字节余量，于是把细节整体搬进新建的 `primitives-core.md` 与 `layout-budget.md`，`SKILL.md` 瘦回 **28,869 字节**，变成纯 router。

这件事说明的其实不是图表，而是 Agent Skills 的难点：**规则写什么固然重要，更重要的是规则该放在哪一层上下文里**。放太深，Agent 根本不会来读。

[![渐进式披露流程：从名字与描述，到 SKILL.md 路由，再到按需加载一份类型参考，最后交付单个 HTML（本文绘制）](/imgs/dd-progressive-disclosure.svg)](/imgs/dd-progressive-disclosure.svg)

*本文按 Diagram Design 自己的规则画的流程图：坐标与间距全为 4 的倍数、1px 发丝线、无阴影、全图只有一个强调色、节点控制在 9 个以内、图例固定在底部，SVG 里也带了 `role="img"` 与 `<title>/<desc>`。用它的规则画它自己，算是这篇文章能做的最直接的一次验证。*

45 种类型也不是「一个方框换 45 层皮肤」。爆炸轴测图里，每个部件的坐标都来自同一个 2:1 投影函数，层间距相等，逻辑层是唯一焦点；架构 delta 有 Before / Changes / After 三栏加变更台账；Sankey 要流量守恒、waterfall 要累计守恒、treemap 的格子面积要等于标的值——每种都有对应的 verifier。官网那句 `Each is a real type with its own rules, not one box style restyled 45 ways.` 是有依据的。

[![爆炸轴测图示例：应用栈被拆成 Interface、Logic、Data 三层，Logic 为唯一焦点](/imgs/dd-exploded.png)](/imgs/dd-exploded.png)

*Exploded axonometric：三层应用栈沿同一根轴等距拉开，只有 `Logic` 用了赭红，配一行斜体旁注说明「产品决策住在这一层，另外两层可替换」。仓库为它写了 `verify-exploded.py`，专门检查轮廓是否与声明的 box 一致、间距是否相等、标签是否落在同一列。*

## 换品牌，不改图

开箱是「jet-black + tangerine」，纸白 `#f5f5f5`、墨色 `#2d3142`、强调 `#bf4520`。想换成自己站点的样子，只要说一句 `onboard diagram-design to https://yoursite.com`：Agent 抓首页 → 抽主色与字体栈 → 映射成 `paper / ink / muted / accent / link` 等语义角色 → 展示 diff → 写入 `style-guide.md`，还会附一份 fidelity receipt 记下采样 URL、颜色角色、字体来源和回退。

因为所有规则引用的是**角色名而不是 hex**，换皮肤不需要动任何一份类型参考。写入前会自动做 WCAG AA 检查（文字 4.5:1、关键标记 3:1），不达标就提议调整值并解释原因；默认强调色从亮橘调深到 `#bf4520`，就是为了让强调文字达到 4.71:1。首次在新项目里画图时还有一道 gate：如果 style guide 仍是默认值，它会停下来问你是要配品牌、粘贴令牌、读已存 profile，还是就用默认。多个客户可以用 `~/.diagram-design/profiles/` 加项目里的 `.diagram-design` marker 分开管理。

隐私边界也写得清楚：内容留在你的 Agent 会话里，LittleMight 什么都收不到；只有浏览器打开图时向 Google Fonts 请求字体（不含图的内容，可关），以及你主动给出官网 URL 时才会抓那个站点。导入路径另有安全约束——源文件的标签、链接、指令一律当不可信数据、绝不作为指令执行，Mermaid 语句限 4,096 字符，draw.io 解析拒绝 DTD 与实体，`self_check.py` 拒绝 CSS `@import`、`url()`、`image-set()`。

## 不是转换，是重绘

[![从 12 节点 draw.io 文件重绘出的架构图：EDGE / CORE SERVICES / DATA 三个分区与唯一焦点 API Gateway](/imgs/dd-import-drawio.png)](/imgs/dd-import-drawio.png)

*官方导入示例：一个 12 节点的 `.drawio` 文件以 `balanced` 细节重绘。原来六种粉彩填充收敛成一个 accent，手拖的坐标变成 4px 网格，斜拉的连线变成正交折线；三个虚线分区（EDGE / CORE SERVICES / DATA）重新组织，`API Gateway` 是唯一焦点，底部是固定图例。*

它吃得下 `.drawio`、Mermaid、`.excalidraw` 三种存量资产，但流程的第一步是 `Extract, don't render`：用 Python 脚本把源抽成 nodes / edges / containers / hubs 的结构化 IR，再重新画。原文是 `Redraw — never convert`。

重绘前要定四个旋钮：**Format**（html / svg / png）、**Size**（doc-inline 到 slide-16x9、print-a3-landscape 等十种，尺寸预设同时改 `viewBox` **和字阶**，投影用 16px 而不是 12px）、**Detail**（`faithful` ≤24 节点 / `balanced` ≤12 / `simplified` ≤7，按「装饰 → 重复 → 叶簇 → 基础设施」的固定阶梯降级）、**Audience**（engineer / mixed / executive，改的是措辞不是数量：`Auth Service / JWT · RS256 · :8443` → `Auth Service / token check` → `Sign-in`）。

每次导入还要交一份 **fidelity ledger**，列明合并了什么、砍了什么：

```text
Detail: balanced · 12 source nodes → 8 drawn
Collapsed: "Token valid?" decision → edge label on Gateway → Auth
Dropped:   1 sticky note ("legacy path, to be retired"), unconnected in source
Kept in full: the request path (Web/Mobile → Gateway → Orders → Postgres)
```

README 给的理由很实在：`You know the source; you'd notice anyway.` 带过来的只有组件、关系、分组、方向；源坐标、源配色、源字体、draw.io 的斜线乱麻、Mermaid 的自动布局、Excalidraw 的手绘几何，一律不带。

## 它自己写的「别用我」

这是这个项目最反常的地方。README 有专门的 `When not to use this skill` 章节：

- 图要住在 Git 里、每个 sprint 都改 → 用 Mermaid，它能 diff，GitHub 直接渲染；
- 任何清单 → 表格或项目符号；纯属性前后对比 → 表格；只有一个框的「图」→ 写句话；
- 动笔前先问：`Would a reader learn more from this than from a well-written paragraph? If no, don't draw.`

`How it compares` 里还主动交代了两个短板：**输出质量取决于你用的模型，同一个 prompt 两次布局可能不一样**；产物不是可编辑的源格式，PR 里没有文本可 diff，也没有画布能拖框。结论一句到位：`Diagram Design is for the diagram you are going to publish.`

换句话说，它做的是**发表物**，不是**工程资产**。这个边界划得比多数 README 都诚实。

## 冷静看几件事

**不可复现是软肋。** 没有可 diff 的源、同一提示可能两次不同、图里没有画布可拖——一旦进入「每月重新生成一次」的流程，这张图就不再是记录。README 自己承认了，用户就得自己决定要不要接受。

**连它自己的数字都对不齐。** 官网还写着 `17k+ stars`（今天 66,043），章节标题是 `Forty-four diagrams, one system` 但图库列表编到 `45 / 45`；`CHANGELOG.md` 的 2.6 段落写 `The taxonomy now stands at 44 types`，Unreleased 写 `Gallery numbering uses one number per diagram type, 44 in total`；10 月的第三方报道里 42、44、45 都出现过。当前 README、`SKILL.md` 与 `CONTRIBUTING.md` 一致是 **45**。一个专门写了 `verify-docs-sync.py`、连截图的 PNG 摘要都做新鲜度校验的项目，也没能让所有文案里的数字同步——这恰好说明高速演进中文档一致性有多难，二手数字别当准。

**一个人扛着 6.6 万 Star。** 仓库挂在 Cathryn Lavery 的个人账号下（公司 LittleMight 只负责发布插件目录），不是组织；433 次提交集中在约七个月，2.6 从 8 月 20 日到 10 月 9 日发了 70 个 patch，manifest 现在到 `2.6.148`，版本由 merge 后的 workflow 自动 bump（ADR 0009），PR 里改版本会被 CI 拒绝。节奏很猛，但 bus factor 是 1，54 个 open issue 也还在。

**装之前认准来源。** README 明说 `Official builds come only from this repository`，插件目录里其他名字的同款 listing 是非官方副本。用 `npx skills add cathrynlavery/diagram-design`，或各家 marketplace 的官方命令，别在目录里随手挑同名包。

**规则越细，越依赖写规则的人。** 这个 skill 的上限就是作者的判断力；换成你的品牌只换了皮，判断标准还是别人的。它替你省掉了和 Figma 搏斗的半小时，但也把「什么算好图」这件事外包了出去。

## 一个判断

6.6 万 Star 收下的不是渲染引擎，是一份 28KB 的 Markdown。它真正验证的命题是：**当模型能力过剩，稀缺的是能被机器执行的判断标准**。大家缺的不是又一个画图工具，而是「该删掉哪个框」的答案——所以作者把答案写成规则、写进 CI，卖出 6.6 万个收藏。

对做 Agent 产品的人，最可复用的也不是那 45 种图表，而是它的结构：一个字节受限的 router、按需加载的参考层、把审美换算成可校验数字、再用几十道 gate 防止规则漂移。这比多一种图表类型值钱得多。

而它自己承认的不可复现，又给这个命题加了个注脚：规则能约束布局，却约束不了「这次模型和上次想的一样」。所以——要发表的图用它，要维护的图用 Mermaid。这也是 README 早就替你写好的结论。

## 配图与参考

文中 before / after 对照图来自 [diagramdesign.dev](https://diagramdesign.dev) 官网，三张图库示例来自仓库 `docs/screenshots/`（MIT），仅作介绍用途；渐进式披露流程图为本文绘制。所有配图点击可查看原图。

- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) · [官网](https://diagramdesign.dev) · [Live Gallery](https://cathrynlavery.github.io/diagram-design/) · [README](https://github.com/cathrynlavery/diagram-design/blob/main/README.md)
- 核心文档：[SKILL.md](https://github.com/cathrynlavery/diagram-design/blob/main/skills/diagram-design/SKILL.md) · [CONTRIBUTING.md（validation gates）](https://github.com/cathrynlavery/diagram-design/blob/main/CONTRIBUTING.md) · [CHANGELOG.md](https://github.com/cathrynlavery/diagram-design/blob/main/CHANGELOG.md) · [PRIVACY.md](https://github.com/cathrynlavery/diagram-design/blob/main/PRIVACY.md)
- [ADR 0004 — SKILL.md byte cap and trigger-rich description](https://github.com/cathrynlavery/diagram-design/blob/main/docs/adr/0004-skill-md-byte-cap-and-trigger-rich-description.md) · [ADR 0009 — versions bumped on main after merge](https://github.com/cathrynlavery/diagram-design/blob/main/docs/adr/0009-versions-are-bumped-on-main-after-merge.md)
- 文中 Star、Fork、issue、提交数与版本号取自 2026-11-09 的 GitHub API 与仓库文档；官网的 `17k+ stars` 与 `Forty-four diagrams` 为页面原文（已滞后），文中已注明口径差异
