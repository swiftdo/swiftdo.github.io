---
title: "Astryx：Meta 把最大的设计系统重写了一遍，为的是让 agent 读得懂它"
description: "Meta 开源了内部跑了八年的设计系统，2.8 万星。但值得看的不是 150 个组件，而是它为 agent 做的三件事：把单次回答压在 1.5K token、把发现率靠 60 条别名提到 95%，以及每晚给自己打分并把输的夜登出来。也写清它自认的两个产品缺口。"
createTime: 2026/11/15 22:08:00
date: 2026-11-15
tags:
    - 设计系统
    - AI Agent
    - React
    - 开源
---

# Astryx：Meta 把最大的设计系统重写了一遍，为的是让 agent 读得懂它

2026 年 1 月 9 日建仓，到 11 月 15 日，`meta/astryx`：28,529 个 star、2,228 个 fork、未关闭的 issue 与 PR 合计 675 个、7,948 次提交。npm 上 `@astryxdesign/core` 上周 62 万次下载，CLI 31 万次。MIT，Beta，最新版本 `0.7.16`。

它自称是 Meta 内部用了八年、驱动 13,000+ 应用的**最大**设计系统，现在开源了。这几个数字都成立，但都不是这篇要写的东西——「开源一个成熟设计系统」在 2026 年已经不算新闻，150 个组件也不算。

真正值得一篇的，是另外三件事：

- 它开源的不是那套系统，而是在开源栈上重写的第二个版本；
- 它把「agent 能不能用明白」当成一等功能，为此做了一组实验，最狠的结论是「上下文预算比工具设计重要」；
- 它给自己建了评分器，每晚跑一次，然后把输的那些夜也登在官网上。

## 一、重写的，不是搬运的

[![左右两栏：左边是「带过来的」——150+ 组件的广度、表格与日期选择这类硬骨头、一致的命名与 prop 约定、约一半更新来自内部社区；右边是「扔掉的」——自研内部栈、改外观要 fork、文档只写给人读、只在 Meta 内网成立的构建链](/imgs/astryx-rewrite.svg)](/imgs/astryx-rewrite.svg)

*重写的账要这么算：留下的是八年攒出来的广度与约定，扔掉的是让 agent 无从下手的那一层。图为本文依据 how-astryx-works 与 README 绘制。*

内部系统叫 xDesign，issue 里至今写作 XDS。八年、13,000+ 应用、约一半更新由内部构建者自己贡献——这个体量是真的。但它跑在自研内部栈上，而官方那篇架构文章把重写的理由说得非常直白：

> AI assistants became dramatically more effective when working with in-distribution, open-source standards like TypeScript, popular OSS libraries, and modern browser primitives, and the internal system was none of those.

翻成人话：**模型擅长它见过的东西，而内部系统它一次都没见过。** 所以这不是把内部系统搬出来开源，是保留广度与约定、换掉那层栈、重写一遍。

这条决定后面所有取舍的方向。选 React 19 而不是自家框架，选 CSS 自定义属性而不是自家 token 编译器，选「导入一份预编译 CSS」而不是「你得先接我的构建插件」——**每一步都在把学习成本往「模型本来就会的东西」上挪。**

代价也在这儿：为了贴开源栈，八年的边界条件要重做一遍；为了给 agent 一条稳定入口，文档得当成 API 来设计。

## 二、设计系统的瓶颈，变成了 token 预算

问题起于一个 issue：#2182。有人给 agent 接文档时发现，`xds docs theme` 一条命令返回 42K token——代码还没开始写，上下文先没了。agent 的反应不是「读得慢」，是**放弃这个库，改回手写 div**。

[![对数刻度横条图：docs theme 一次返回 42,000 token，横跨整张图；search 加 component 两次回答合计约 2.6K；一条虚线标出单次回答 1.5K 的上限](/imgs/astryx-budget.svg)](/imgs/astryx-budget.svg)

*同一套文档，两种问法的差别是 16 倍。虚线是他们的经验上限：单次回答不超过 1.5K token，超了 agent 就会绕开你。*

这件事对他们的冲击，从后面的记录里读得出来：**设计系统真正的竞争对手不是另一个设计系统，是「什么都不用」。** 装不上、读不懂、太贵，agent 就直接写 div，而 div 永远不会报错。

于是有了一个 6 变体实验（issue #2306）：7 条最难类别的提示词（主题定制、布局、复合组件、表单、命令式 hook、导航、数据驱动），比对 6 种交付方式。

[![六条横条按得分排序：CLI + search 9.6 分 / 20K token，MCP Hybrid 9.3 / 35K，CLI 全量 8.7 / 63K，MCP 六工具 8.6 / 17K，只给搜索 7.0 / 15K，Concierge 5.7 / 6K](/imgs/astryx-tokens.svg)](/imgs/astryx-tokens.svg)

*条越长越费 token，右边才是结果。最省的那条（Concierge，6K）得分最低——省下的全赔在答不对上；最贵的那条（全量直投，63K）也没赢。赢的是「够用且不爆预算」。*

五条结论里，最重要的三条：

1. **别名表是最大的质量杠杆。** 「success message」搜不到 Toast 就没戏。60 条别名加词边界匹配，把发现率从 70% 提到 95%+。这跟模型多聪明关系不大，跟词典编得好不好关系很大。
2. **上下文预算比工具设计重要。** 所有赢的变体都把单次回答压在 1.5K token 以内。工具形状怎么改，都不如这条线管用。
3. **MCP 不改善内容质量，只改善分发。** 它让 IDE 里的 agent 零安装就能接上；喂进去的还是同一份东西。

第 3 条值得单独记一笔：现在一窝蜂给设计系统套 MCP，而这份记录的判断是**MCP 是渠道，不是产品**。他们真正押注的入口是 CLI——16 个顶层命令，全部支持 `--json`，错误码 60+ 个且承诺「只增不减、含义永不改变」，`--detail brief/compact/full` 与 `--dense` 控制篇幅，`--zh` 给中文；`manifest --json` 在文档里的定义是「给 CLI 用的 OpenAPI spec」，为的是「agent 不必去爬 `--help` 才知道你能干什么」。

这套东西对人有没有用？有用。`--json` 出来的人也能读，`--dense` 省的是你的眼睛，错误码稳定意味着你的脚本不会因为改文案而崩。这就是他们那句「为人做的每一个改进，对 agent 也一样」的实证——**不是公关话术，是同一条实现。**

## 三、它给自己打分，然后把输的夜登出来

[![两张记分卡：左边 2026-07-10 好的一夜，Astryx 98 分、基线 95，四维满分；右边 2026-06-28 差的一夜，Astryx 77 分输给基线 95，正确性只有 2 分](/imgs/astryx-vibetest.svg)](/imgs/astryx-vibetest.svg)

*同一套提示词，两周内两次结果差了 21 分。差别几乎全在正确性一栏：agent 编了不存在的 import 和 prop。*

vibe test 的机制：70 条提示词（另有 holdout、filler、distractor 三组不公开的干扰集）、四个靶子（Astryx / Astryx + Tailwind / shadcn + Tailwind / 纯 HTML）、5 个确定性维度加 1 个 WIP 的设计维度、每晚一次 cron。

它刻意做了三件事，每一件都可以抄：

**不打 LLM 分。** 五个维度全是静态分析，纯函数，`(code, target) → score`。正确性看 tsc 报错数，一处扣 15 分；效率算「装饰比 + 重复比 + 每个元素几个样式决策」；可维护性看语义值与魔法值的比例、状态在组件里的散布程度。不调模型，所以可复现、可回放、可对比。

**判分的不是选手。** 子 agent 必须全新起、不带历史、不继承任何 SOUL.md / MEMORY.md，只靠项目里摸得到的东西；标准答案（`expectedComponents`）绝不进 prompt；打分交给另一个 agent，因为官方发现「自己判自己，看不出差异」。

**承认对自己有利的偏差。** README 里有一节叫 Known Accepted Asymmetries，直说：Tailwind 的单行 `className` 在效率维度拿到的分低于 Astryx 的多行 `stylex.create`，尽管前者其实编码了更多决策——「这些是故意的，方向略微偏向基线，这样 Astryx 赢才更可信」。

结果也没美化。好的一夜 98 : 95；差的一夜 77 : 95，正确性 2 分。博客原文：

> Across our full ledger the baseline actually wins the plurality of nights; we don't always come out on top, and the scorecard is public precisely so we can't hide that.

一个设计系统把自己的分数、输的次数、连对自己有利的评分偏差都摆出来，比任何一个 98 分都更能说明它的工程文化。对读的人也有实际用处：**它给的分数是可以打折的，而它自己先打了折。** 这比第三方拿着一页 PPT 讲「我们的 AI 友好度提升 40%」要有信息量得多。

## 四、定制是一条阶梯，底下是 CSS

技术层面三句话：

1. 样式用 StyleX 写，但对使用方不可见——你拿到的是预编译 CSS 加带类型的 React 组件。
2. 主题就是一组 CSS 自定义属性覆盖，加上能改到组件部件、能加自定义变体的配置。`@scope` 挂在 `data-astryx-theme` 属性上，所以多主题能共存，深浅色一起处理。
3. 定制是一条一级一级的梯子：直接用 → 改 token → 自己的 `className` → 自己的 CSS → `swizzle` 把组件源码整个弹出到你的项目。每上一级，多一分控制，多一分维护责任。

两条要单独说清：

**「没有样式锁定」不等于「没有依赖」。** README 说「不用接构建插件、不用采纳某个样式库」，这话成立——你的代码里不会出现 StyleX。但 `@astryxdesign/core` 的 peerDependencies 里明明白白列着 `@stylexjs/stylex ^0.19.0` 和 `react >=19`。npm 7+ 会自动装 peer，所以它不挡你，但「零依赖」这个说法得打个折：它省掉的是**你写 StyleX**，不是**你装 StyleX**。

**两条发布路径的差价比想象中大。** 要么直接 import 预编译样式表，零构建配置；要么从 TypeScript + StyleX 源码构建，只打进你用到的组件——官方给的参考数字是**约为整份样式表的三分之一**。前者给「先跑起来」，后者给「上线前瘦身」。

顺带一个细节：`swizzle` 在项目外会直接以 `ERR_PROJECT_REQUIRED` 拒绝，不写任何文件。越界这件事，他们做成了显式的。

## 五、冷静部分：它自认的两个缺口

先说最普遍的那个坑。官方迁移文档把 cascade layer 列为最常见的翻车方式，而它吓人的地方在于：**出问题不报错。**

[![上下两栏对比：没有 @layer 时，零权重的星号 reset 输给类选择器，组件正常；有了 @layer 后，顶层 @import 进来的旧 reset 没进任何层，因此排在所有命名层之上，与权重无关，组件 padding 归零](/imgs/astryx-layers.svg)](/imgs/astryx-layers.svg)

*同一份 CSS，加不加层，结果相反，两种情况控制台都一片安静。图为本文依据官方迁移文档的层序说明绘制。*

在没有 `@layer` 的世界里，`* { padding: 0 }` 这种零权重 reset 是「无害」的，永远输给类选择器。加了层以后规则变了两次：**未分层的样式赢过任何命名层，后面的层赢过前面的层，两者都与权重无关。** 于是同一条 reset 从无害变成通吃——组件 padding 全归零，页面像样式没加载，但没有任何报错。

他们给的自检办法很土也很有效：渲染一个按钮，断言 `getComputedStyle(btn).paddingInline !== "0px"`；不成立，就是层序错了。

然后是更硬的部分。`internal/vibe-tests/setup-test/PLAN.md` 是一份迁移评测计划，目标是「装 Astryx 不能改变宿主任何既有的圆角、颜色、排版、字体度量、间距、阴影、边框、几何、深浅色行为和层序」。这份文档里，有两条被明确记为**产品缺口**：

**缺口一：主题没法退出裸元素规则。** 每个内置主题都会往 `@layer reset` 里吐一整块 `h1`–`h6`、`p`、`small`、`code`/`pre` 的排版规则，再加一条替换 `hr` 边框的规则，`@scope` 到主题属性上——哪怕这个主题只改了一个颜色，也照样带整份排版尺度。结果就是：宿主原来的排版无法保持权威。文档的原话是，这是「目前唯一挡住 `host-aligned` 策略通过验收的东西，而且是真实的产品缺口，不是评测器的产物」。

**缺口二：Provider 没法拒绝占用 document scope。** 没有上层 provider 的 provider 就是 root provider，它会把 `data-theme` / `data-astryx-theme` 同步到 `<html>` 上——主题 CSS 靠这个属性才能覆盖到 portal 出去的浮层。而它的公开 props 只有 `theme`、`mode`、`children`，一个都关不掉。文档承认最靠谱的办法是挂载后用 `MutationObserver` 把属性一直删掉，并注明「这是 workaround，不是配置」。

同一份文档里还有一句：配置中的 Codex bundle 因为上游的空回合问题卡住，所以「最终确认无法启动」。也就是说，**这套评测自己也没跑完。**

对本篇的结论来说，这意味着一件很具体的事：**它适合新项目，不适合「保留我的视觉语言、只借你几个组件」这种用法。** 后者恰恰是缺口一挡死的地方。

其他该知道的：

- Beta，`0.7.16`，0.x 语义版本，API 还会动（有 codemod 和 `upgrade` 兜着，但不等于不动）。
- 只要 React 19+。项目还在 18 的，先解决这个。
- `@astryxdesign/lab`（实验组件）不发 npm；`charts` 与 `vega` 只在 `@canary` 标签下，没有稳定版。想要图表，现在得自己接。
- 组件数量有两个口径：README 写 150+，官网首页写 180+。不是矛盾，是不同时间写的，但引用时最好标出处。
- 仓库约 1.3 GB，里面塞了评测用的 fixture 应用与快照。克隆慢是正常的。

## 六、给谁用

三条判断：

- **做内部工具、后台、管理系统的团队**：这是它的原点。表格页、详情页、表单向导、数据录入这些场景它天生就顺，150 多个组件里大半长在这上面。
- **大量依赖 agent 写 UI 的团队**：CLI 加别名表加 1.5K 预算这一条线，是我目前见过最完整的「让 agent 少犯错」的工程答案。哪怕你不用 Astryx，那套 vibe test 方法也值得搬到自己的项目里。
- **已有成熟视觉体系、只想借组件**：现在别用。缺口一挡着，你会花很多时间跟 `@layer`、`@scope` 打架。

如果你只想抄几个组件、不想引入任何体系，shadcn 那条路更轻。顺带一提，Astryx 自己做了 shadcn registry 兼容——`npx shadcn add <registry>/...` 能装它的页面模板，但装的是**真包**，不是复制一堆组件源码。这个设计挺聪明：**复制组合，不复制设计系统。** 复制一份 Button 到每个 app，升级就再也不能统一；复制一个用了官方 Button 的仪表盘，那是正常的应用开发。

## 写在最后

名字我很喜欢：Astryx 读作 asterisks，取自 *ad astra per aspera*——「历经艰辛，抵达星辰」。X 是致敬出身 xDesign；星号是那个代表一切的小符号，脚注、占位符、把系统撑住的那一小块。

但我觉得这篇最该记住的不是名字，是 PLAN.md 里的那句规则：

> Damage in the directed `direct` control is a product gap. It blocks candidate-instruction shipping; it is not an accepted limitation or a documentation result.

**直接的安装伤害是产品缺口。它阻塞发布；它不是「已知限制」，也不是「文档结论」。**

一家公司愿意把自己产品的失败写成「缺口」而不是「限制」，并且让这句话挡住自己的发布——这比 28,000 个 star 更能说明这套东西能不能用。

## 参考

- 仓库：<https://github.com/meta/astryx>（数据取于 2026-11-15）
- 文档：<https://astryx.atmeta.com>
- 实验记录：issue [#2182](https://github.com/meta/astryx/issues/2182)（主题文档 42K token）、issue [#2306](https://github.com/meta/astryx/issues/2306)（CLI 与 MCP 六变体对比）
- 官方博客：`how-astryx-works`（2026-06-29）、`vibe-tests`（2026-07-27）、`meet-astryx-from-shadcn`
- 仓库文件：`internal/vibe-tests/README.md`、`internal/vibe-tests/src/universal-eval.ts`、`internal/vibe-tests/setup-test/PLAN.md`、`internal/vibe-tests/test-sets/default.json`
