---
title: hallmark：给规则分三层，再在每页盖一个章
description: "Together AI 的设计技能：Floor 不可豁免 / Reflex 可书面豁免 / Finish 不阻断，50 个主题是「材料」不是「方案」，每页第一个 CSS 注释写着它做过的决定。它列的灵感里有三个就在这个集合。"
createTime: 2026/10/31 22:45:00
---

> 它的 README 里有一节叫「Inspired by」，列了九个项目。其中三个，就在这个集合里。

impeccable、taste-skill、huashu-design——这三篇我前面写过。hallmark 把它们连同 Anthropic 的 frontend-design、Open Design、Kami 等一起列为灵感来源。所以这篇不按「又一个反 slop 技能」写，而是看它**从前辈那里学了什么、又改了什么**。

| 项目 | 内容 |
|---|---|
| 类型 | Agent Skill（Claude Code / Codex / Cursor / OpenCode） |
| 仓库 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) · [usehallmark.com](https://www.usehallmark.com/) |
| 出品 | Together AI（作者 Nutlope） |
| 许可 | MIT |
| 体量 | 845 个文件约 63MB（含历史约 230MB） |
| 热度 | 43.5k star / 2.3k fork / 66 open issue（2026-10-31 快照） |
| 状态 | v2.0.0，2026-04-27 开源，两天前还在更新 |

## 它改的第一件事：规则不再只有「过」和「不过」

impeccable 的 62 条规则是二元的：命中就 FAIL。这套东西好用，但你会在 huashu-design 那篇里看到一个反证——作者做了三轮盲选，第二轮「为了躲开 AI 默认外观加了一堆禁令」，结果是三版一起变得规整无聊，两道题全输。

hallmark 的解法是给规则分三层：

| 层 | 说明 | 能否豁免 |
|---|---|---|
| **Floor** | 永不出货：对比度、焦点可见、动效降级、编造数据、手机布局崩坏 | **不可豁免** |
| **Reflex** | 模型容易掉进去的默认值（比如给标题配个小标签） | 可以，但要**书面写理由** |
| **Finish** | 手工细节，永不阻断出货 | — |

Floor 一共 16 条，写得非常具体，而且**每一条后面括号里是一个编号**，指向 `gates.md` 里的详细条目：

- 所有颜色和字体必须走 `:root` 的 token，token 块之外不许出现字面色值（48）
- 永远不写 `transition: all`，不给 `width`/`height`/`top`/`left` 加动画（10a）
- 不许在正体标题里塞一个斜体词（38i）
- `html` 和 `body` 都上 `overflow-x: clip`，不用 `hidden`，不用 `100vw`（34）
- 每个交互元素都要有即时出现的 `:focus-visible`（26a、15）
- 每个动画都要有 `prefers-reduced-motion` 回退，脚本关闭时内容仍可见（27、62）
- 绝不编造指标、证言、logo 墙、案例数（46a）
- 首屏标题、一句话、主操作在 1280×800 上不用滚动就能全看到（44b）
- 一屏约 80 词（58）

这种「规则带编号、编号能查到解释」的写法比纯禁令好：你可以反驳一条规则，但得先读到它为什么存在。

而 SKILL.md 里那句话把分寸说得很好：

> Above the Floor the page is yours: you are a capable designer.

Floor 之上交给你。它没有假装能替你审美。

## 它改的第二件事：主题是「材料」，不是「方案」

taste-skill 的做法是从 20 个研究方向里发三张牌，选定后做完整稿。问题在于——**牌是同一个牌堆里的**，所有人都从这 20 个方向里抽，产出会收敛。

hallmark 的 50 个主题定义方式不一样，README 里那句是关键：

> A theme is a material, not a plan: it never says what a page contains or in what order, so two prompts in one theme make two different pages.

一份材料包括：纸（底色与纹理）、字体、颜色、表面处理、它自己的组件。每个主题就是一个不超过 8KB 的单文件，旁边配一张成品图，一次构建只读一个。

![Cobalt 主题：一个 webhook API 产品页，首屏是数据流示意，没有渐变没有卡片](/imgs/ai-toolbox/hallmark/theme-cobalt.jpg)

这张图值得看几处细节：标题大而左对齐、一句话支撑、两个操作、一段可复制的 `curl`、还有「Free up to 100,000 events a month」这种真实数字。**没有 eyebrow、没有渐变、没有卡片套卡片、没有 01/02/03。**

材料与方案的区别就在这：材料决定「看起来像什么」，不决定「页面放什么」。所以同一个主题写两个需求，会长出两个不同的页面。

## 它自己的第一个发明：每页盖一个章

这个设计我很喜欢，也是名字的由来。

Floor 第 15 条：

> CSS 源码的第一个非空行是 Hallmark 的印章，然后是 critique 行，再然后是任何豁免。

也就是说，**产出的页面自带出身说明**：用了什么材料、放弃了什么、豁免了哪几条 Reflex 门禁。

这不是装饰。它让「这一版为什么长这样」变成文件的一部分，而不是留在对话记录里某一段已经滚走的解释。三个月后接手的人打开 CSS 第一行就能看到。相比「AI 生成的东西没人能解释」，这个成本几乎为零的动作解决了一个真问题。

## 它自己的第二个发明：重设计的回归测试

```text
/hallmark redesign ./src/app     # 完整重设计，保留内容与接线
/hallmark audit ./index.html     # 只出报告
```

AI 重构最容易出的问题不是做得难看，是**悄悄删掉了一个表单的提交逻辑**。hallmark 的处理是：

- `sloplint --before` 先把每个链接、字段、handler、标题记下来；
- 重设计完成跑 `sloplint --kept`，**少一个就 FAIL**；
- 交付是左右并排的前后对比。

这是一个把「重构不能丢功能」变成可执行检查的做法。在这个集合里我没见过第二个同类工具做这件事——它们都在管「好不好看」，只有它管了「有没有弄坏」。

## 顺手记两个细节

**它读过条款。** 755 张照片全部来自 Wikimedia Commons，每张在页面上署名，各自保留 CC0 / PD / CC BY / CC BY-SA。README 明确写：**不用 Unsplash、Pexels、Pixabay，因为它们的条款禁止 AI 工具挑选图片。**

这个细节比任何「我们重视版权」的声明都可信——它具体到知道哪三家的 ToS 卡在哪。

**它对范围很克制。** 只有你点名 Hallmark，或者用 `redesign` / `audit` 这两个动词时才动手；其他对已有设计的改动，SKILL.md 写的是「按用户说的做，用项目自己的系统」。对比之下，不少设计技能会劫持每一个 UI 请求。

## 上手

```bash
npx skills add nutlope/hallmark -g
```

`-g` 装到全局，去掉就装进当前项目。Node 18+ 即可；浏览器检查（`sloplint --render`、截图）还需要 `npm i -g puppeteer-core` 和 Chrome，**没有的话静态检查照样跑**，只是少了渲染层。

四种宿主落点不同：Claude Code 在 `~/.claude/skills/hallmark`，Codex 在 `~/.agents/skills/hallmark`，Cursor 和 OpenCode 会自己找到上面两份。也可以当 Claude Code 插件装（`/plugin marketplace add nutlope/hallmark`），或者从 clone 装——`install.mjs` 会在复制前逐个校验主题和 reference。

想单独 lint 任意页面：

```bash
node skills/hallmark/scripts/sloplint.mjs <文件或目录> --render
```

构建流程是七步：pre-flight 读项目（`design.md`、品牌、字体、palette、框架，甚至直接抓你的 URL / dev server / 本地 app 截图）→ 只问一次材料 → 定形状并命名 → 发主题或自定义 → 载入参考 → 先单独建 hero，渲染冷却后再建其余部分 → 扫到干净为止。

「先只建 hero，冷着看一遍，再建剩下的」——这个顺序和 taste-skill 的「先关掉动效建静态页面」是同一个道理：**别在还不确定骨架的时候加装饰。**

## 坑

### 1. 仓库 230MB

845 个文件 63MB（50 个主题各配一张图、755 张照片的清单、几十份 reference），含 git 历史约 230MB。装的时候会觉得慢，不是网络问题。

### 2. 没有 release，版本写在 SKILL.md 里

`version: 2.0.0` 在 frontmatter 里，没有 git tag。想知道自己装的是哪一版，得去翻文件。

### 3. 浏览器检查要额外装东西

`sloplint --render` 依赖 `puppeteer-core` + Chrome。不装就只有静态检查，而静态检查看不到「首屏在 1280×800 上放不下」这类问题——恰恰是它 Floor 第 12 条要管的。

### 4. 50 个主题仍然是有限池子

「材料不是方案」解决了收敛的一半问题（页面结构不收敛），但**视觉上仍然会收敛**：用 Hallmark 的人多了，那 50 套材料会变成一种可识别的味道。它自己也知道，所以留了 `custom` 模式——把主题全丢掉，只用 Floor、门禁和一份 direction。

### 5. Floor 保证不难看，不保证好看

它的目标是「看不出是 AI 拼的」，不是「惊艳」。要惊艳仍然得靠第 4 步那个「属于这个客户的一个想法」——那一步没法脚本化。

## 适合谁

| 适合 | 不适合 |
|---|---|
| 要快速出一个不像 AI 的落地页 / 产品页 | 需要 3D、复杂动效、非 HTML 交付物 |
| 有真实素材、真实数字，能经得起「不编造」 | 只有一句需求，什么都没有 |
| 要重设计一个现有页面，还不能弄坏它 | 只想小修补（它明说不接） |
| 团队想统一视觉下限 | 想靠它代替设计师做品牌 |

## 一点判断

如果把这一串设计技能看成一条演化线，第一代（taste-skill、impeccable）证明的是「**能拦住**」——用禁令、用测量、用规则清单把 AI 味挡在门外。第二代开始处理第一代留下的问题：拦完之后还剩什么？

hallmark 的两个答案我都认同：

- **分层**。把「不能破的底线」和「模型的习惯性动作」分开，后者允许被有理由地推翻。这比一刀切的 62 条禁令聪明，也解释了 huashu-design 盲选里那次失败——禁令太硬，所有版本会一起僵住。
- **可追溯**。印章让每个页面能解释自己，`--before/--kept` 让重设计不会静默丢功能。这两个都是「让 AI 的产出可以被审计」的具体做法，而不是又一句「我们很重视质量」。

但它没有解决最根本的那个问题，也没打算解决：**50 份材料和一套门禁，能保证一致的品质，也会带来一致的味道。** 就像奶油色曾经是「得体」的代名词，然后变成 slop 的代名词一样——今天最像「用心做的页面」的那批，明天就会成为新的模板。

所以它的正确用法大概是：**用它保证下限，用自己保证上限。** 它自己在 SKILL.md 里也是这么说的——Floor 之上，页面是你的。

## 链接

- [仓库](https://github.com/Nutlope/hallmark) · [官网（50 个主题都能点开看）](https://www.usehallmark.com/)
- [SKILL.md](https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/SKILL.md) · [gates.md（39KB，三层门禁的全部条目）](https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/references/gates.md)
