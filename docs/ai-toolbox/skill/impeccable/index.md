---
title: impeccable：24 个设计动词，62 条能跑进 CI 的 slop 规则
description: "给 coding agent 的设计词汇表：bolder / quieter / polish / critique 等 24 个命令，外加一个不依赖 LLM 的 Rust 引擎，62 条规则扫描 AI 味，可挂进编辑钩子、命令行和 CI。附前后对比与安装坑。"
createTime: 2026/10/31 22:05:00
---

> 「如果你把这个界面发给别人，说这是 AI 做的，对方会立刻相信吗？会，那就是问题。」

同一句话、同一个模型、同一份需求，两次结果可以差多远——这张对比图是 README 里最有说服力的部分。需求是「利古里亚海岸一家十四间房的家庭旅馆」。

![没有 impeccable 时：奶油底、细衬线、斜体强调、两个 pill 按钮](/imgs/ai-toolbox/impeccable/readme-without.webp)

这是「得体的默认值」：奶油色背景、纤细衬线标题、一句斜体强调、两个圆角按钮、卡片式插图。挑不出错，但也挑不出对。

![有 impeccable 时：整页围绕一张夜里的房子，从水上看](/imgs/ai-toolbox/impeccable/readme-with.webp)

第二种做法把整页压在一个画面上——夜里的房子、崖、月亮、一艘船——标题用压缩体和朱红，底部一条月份带（因为旅馆四月到十月营业），两侧竖排的栏目标签。它不一定合你口味，但每一处都是被决定过的。

| 项目 | 内容 |
|---|---|
| 类型 | Agent Skill + 独立引擎 + CLI + 浏览器扩展 |
| 仓库 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
| 技术栈 | Rust 引擎（自包含二进制），Node 只用于 `npx` |
| 许可 | Apache-2.0（源自 Anthropic 的 frontend-design 技能） |
| 热度 | 97.8k star / 5.8k fork / 67 open issue（2026-10-31 快照） |
| 状态 | skill-v4.8.0 / cli-v4.8.0 / engine-v0.1.18（2026-10-26），当天仍有提交 |

## 它其实是三样东西

很多人把它当成又一个「让 AI 画得好看点」的提示词包，其实它由三块拼起来：

1. **一套词汇表**——24 个命令，每个对应一种明确的设计动作（`bolder`、`quieter`、`distill`、`polish`…）。README 的说法是：说「让它更抓眼」等于让模型猜，说 `/impeccable bolder the pricing cards` 则是加载一份专门为这个动作用写的 playbook，并把它对准一个目标。
2. **一个引擎**——Rust 写的确定性检测器，62 条规则，**不用 LLM、不要 API Key**，所以可复现、能进 CI。
3. **三种运行位置**——agent 的编辑钩子、命令行、浏览器扩展，同一批规则。

## 24 个命令

| 组 | 命令 |
|---|---|
| 调节（Steer） | `bolder` 放大安全的设计 · `quieter` 压住过吵的 · `distill` 删掉不需要的 · `colorize` 给灰界面加色 · `typeset` 修字体层级字号 · `layout` 修间距节奏 · `animate` 加过渡与反馈 · `delight` 加个性 · `overdrive` 上 shader、弹簧物理、滚动驱动 |
| 评审（Review） | `critique` 打分的 UX 评审 · `audit` 技术质量报告（P0 阻断 → P3 打磨） |
| 收尾（Finish） | `polish` 上线前最后一遍 · `harden` 错误、i18n、溢出、边缘情况 · `clarify` 改写不清楚的文案 · `adapt` 适配屏幕与设备 · `optimize` 加载与渲染性能 · `onboard` 首次体验与空状态 |
| 就地迭代 | `live` 在浏览器里点选元素、轮换变体 · `generate` 批量出某个元素的变体 |
| 规划与配置 | `shape` 写代码前先规划 UX · `init` 生成 `PRODUCT.md` · `document` 生成 `DESIGN.md` · `extract` 把重复模式抽进设计系统 |

第 24 个 `craft` 是废弃别名，等于一次普通的构建请求。单敲 `/impeccable` 会列出全部命令。

这套命名的好处不在好用，在**可指认**：「更克制一点」是一个形容词，`quieter the hero` 是一个带目标、有边界的动作。README 里那句「窄目标效果更好——一节看仔细胜过整页扫一眼」，说的其实是同一件事。

## 62 条规则到底管什么

`npx impeccable detect --list-rules` 会打印全部规则。实际是 **62 条，31 条 slop + 31 条 quality**，其中 16 条是 advisory（只提示不阻断）。

slop 那 31 条是审美黑名单，几条值得单拎出来：

- **`side-tab`**：卡片一侧的粗色条。规则描述直接写「最容易辨认的 AI 生成界面痕迹」。
- **`cream-palette`**：暖奶油/米色背景。原文是——它已经变成反射性选择的「得体」AI 表面。
- **`italic-serif-display`**：超大的斜体衬线（Fraunces、Recoleta、Playfair、Newsreader italic）当首屏主标题。「单独看像有品味，但已经是 AI 创业公司落地页的通用首屏。」
- **`overused-font`**：Inter、Roboto、Fraunces、Geist、Plus Jakarta Sans、Space Grotesk——被点名的六个。
- **`ai-color-palette`**：紫蓝渐变、深色底上的亮青。
- **`nested-cards`**、**`monotonous-spacing`**、**`gradient-text`**、**`hero-eyebrow-chip`**、**`numbered-section-labels`**。

有意思的是，其中 `cream-palette` 和 `italic-serif-display` 这两条，恰好命中了它自己那张「没有 impeccable」的对比图——奶油底、斜体衬线。这不是自相矛盾，而是它对自己要反对的东西非常清楚：**它禁的不是某种颜色，是「反射性的选择」**。同一套配色如果是从品牌、从素材、从主题推出来的，规则不会拦（`cream-palette` 说的是整页背景，不是某个米色的小元素）。

另外几条 slop 规则管的是**文案**，这点很少见：

- `em-dash-overuse`：破折号饱和。而且写得很克制——至少 8 个破折号、密度接近每 500 字符一个才触发，长文里偶尔用几个不报。
- `marketing-buzzword`、`aphoristic-cadence`、`theater-slop-phrase`：营销黑话、「格言式节奏」、把什么东西称作「一场作秀」这种生成文案的固定小动作。

quality 那 31 条则完全跟审美无关，是工程毛病：`low-contrast`（对比度不足）、`cramped-padding`（内边距过挤）、`skipped-heading`（标题跳级）、`tiny-text`、`text-overflow`、`broken-image`、`script-error`、`content-hidden-at-rest`（内容默认藏着，得交互才出来）。

也就是说：**它一半在管「像不像 AI 做的」，一半在管「有没有做对」。** 后一半才是它比同类工具更有用的原因——审美可以吵，图片 404 和控制台报错不用吵。

## 关键设计：把检查焊在编辑循环上

规则再多，没人跑等于零。README 里有句话把这事说透了：

> 没有 hook 的话，检测器只在有人记得跑的时候才跑。

所以安装器会问你要不要装**设计钩子**：它在 agent 每次编辑 UI 文件后扫一遍，把发现**在 agent 说「做完了」之前**推回去。大部分 slop 是在这个位置被拦下来的。

同一批规则还有另外两个入口：

```bash
npx impeccable detect src/                    # 扫目录（只跑模式规则）
npx impeccable detect http://localhost:5173   # 扫渲染后的页面（跑对比度、小字号这类）
npx impeccable detect --json .                # 机器可读
npx impeccable detect --github src/           # GitHub Actions 注解
npx impeccable detect --list-rules            # 62 条规则的 id 与描述
```

退出码有语义：**2 = 有发现，1 = 目标扫不了**。所以接 CI 不需要额外包装。

还有个细节值得学：源码（JSX/TSX）只能跑模式规则，像对比度、字号过小这类**必须看渲染结果**的规则，只有扫 URL 时才会跑。文档直接建议你顺手把 dev server 也扫一遍。

品牌字体被误判怎么办？有两条豁免路径：

```bash
npx impeccable ignores add-value overused-font Inter --reason "Brand font"
```

```html
<!-- impeccable-disable overused-font: exported brand doc -->
```

要求写 reason、要求写在注释里——这两处设计让豁免变成**需要解释的决定**，而不是悄悄关掉。

## 上下文文件：PRODUCT.md 和 DESIGN.md

`/impeccable init` 每个项目跑一次：读代码，只问它推不出来的东西（给谁用、要做什么、有什么约束），写进 `PRODUCT.md`。之后每条命令都读它。

`/impeccable document` 则把现有的视觉系统抓进 `DESIGN.md`，让后续改动不跑出品牌。

这两件事的先后顺序很重要：**先固定「为谁做」，再固定「长什么样」**。多数「AI 味」的根因不是不会排版，是不知道为谁排。

## live：在浏览器里点选，热替换变体

`/impeccable live` 会在你跑着的 dev server 上叠一层浮层：选元素、选方向、就地热替换，接受后写回源码。支持 Vite、Next、SvelteKit、Astro、Nuxt 和纯 HTML。

两条限制值得抄进自己的工具规范：**只改本地 checkout**，别注入到已部署的站点，也别为了让它工作去放宽生产环境的 CSP。另外它应用文案修改时会跑 `package.json` 里的 `impeccable:manual-edit-validate` 脚本——在陌生仓库里用之前先看一眼那个脚本。

## 上手

```bash
# 在项目根目录
npx impeccable install
```

安装器会探测你装了哪些工具，问装到项目还是全局，并提示安装设计钩子。装完**重载你的编辑器 / CLI**，然后在 agent 里跑：

```text
/impeccable init
```

Codex 里是 `$impeccable init`。官方列了二十来种宿主：Claude Code、Cursor、Codex CLI、GitHub Copilot、Devin、Gemini CLI、OpenCode、Kiro、Trae、Qoder、Mistral Vibe、Hermes Agent 等等。

Node 只是 `npx` 的入口，技能本体跑的是一个自包含的引擎二进制（随包分发，或首次下载到 `~/.impeccable/bin/`）。团队要锁版本，可以用 git submodule 方式装：

```bash
git submodule add https://github.com/pbakaus/impeccable vendor/impeccable
npx impeccable link --source=vendor/impeccable --providers=claude,cursor
```

## 和上一篇 taste-skill 的分工

两个都在反 slop，但落点不一样，按需选：

| | taste-skill | impeccable |
|---|---|---|
| 形态 | 一个技能（SKILL.md + 几个 mjs） | 技能 + Rust 引擎 + CLI + 浏览器扩展 |
| 抓 slop 的方式 | 内嵌禁令清单 + CDP 在 1440/768/390 三档量 | 62 条确定性规则，可脱离 agent 独立跑 |
| 最擅长 | **从零做一页**：发牌 → 建 → 量 → 看截图改 | **改造已有界面**：改完立刻报 |
| 上下文 | 每次读 brief，无持久文件 | `PRODUCT.md` / `DESIGN.md` 落进仓库 |
| 进 CI | 需要自己接它的 inspect 脚本 | 原生 `--json` / `--github` + 退出码语义 |

一句话：taste-skill 管「从 0 到 1 长出一个想法」，impeccable 管「把已有的东西推到合格」。两个都装也不冲突，但先想清楚你现在缺的是哪一个。

## 坑

### 1. 钩子跑在模型审批之外

README 自己写了这条：在 Claude Code 里，已安装的 command hook **即使你拒绝了模型自己的命令也照跑**，所以第一次编辑可能顺带下载引擎。跑无人值守任务前先看清装了哪些 hook，或者用 `--settings '{"disableAllHooks": true}'` 临时关掉。

### 2. 遥测关掉也还有一次请求

新设计开始时，技能会从 impeccable.style 的 catalog 拉一组视觉方向。关掉遥测**不会**停止这个请求，只是停止「展示了哪些方向、选了哪一个」的匿名记录。项目名、文件、代码、`PRODUCT.md` 不发送——但请求本身还在，介意的话得从网络层拦。

### 3. 62 条规则会误伤

品牌字体、品牌色都会被判。豁免机制好用（要写 reason），但豁免多了等于自己维护一份例外清单。`advisory` 级的 16 条可以整类关掉，先从这个入手比较划算。

### 4. 67 个 open issue，是这个量级里最多的

前两篇的两个项目分别是 8 和 10。67 说明两件事：用的人多、迭代快；以及**有些地方确实还没修**。上手前建议先翻一下和自己场景相关的 issue，比读 changelog 有用。

### 5. 它从零建页是「更难的模式」

README 明说：Impeccable 最强的是**已经存在的界面**，指着某一页或某个组件迭代；从零建也能建，但那是个 harder mode。指望一句需求直接出成品，会失望。

## 适合谁

| 适合 | 不适合 |
|---|---|
| 已有一版界面，想系统性地推一遍质量 | 只想「一句话生成官网」 |
| 想把「AI 味」做成 CI 门禁的团队 | 团队完全没有前端规范，也不打算立 |
| 长期维护的品牌官网、产品页、营销站 | 一次性活动页，用完就扔 |
| 已经在用 Claude Code / Cursor / Codex | 环境里装不了 Node，也不接受二进制 |

## 一点判断

最聪明的两个决定，都不在提示词里。

第一个是**把检测器做成不依赖 LLM 的确定性规则**。62 条规则意味着可复现、零 token、能进 CI、能在任何人机器上跑出同样的结果。对比之下，让模型「自我评审」更像是让它再猜一次，而且每次猜得都不一样。

第二个是**把检查挂在编辑钩子上**。规则的价值取决于它出现的时间点：写在文档里等于没有，跑在 PR 里晚了半天，只有「改完立刻报」才真的改变行为。这也是为什么它值得单独装一个二进制。

但有一层它自己没说的东西：这 62 条本质是**对过去两年 AI 审美的黑名单**。黑名单的问题是会过时，也会误伤——`cream-palette` 这条就是证据，它把「得体」本身判成了 slop；而它自己的反例图，恰好就是那套配色。当足够多的人开始用 impeccable，被它推着做出的页面会长成另一种平均值，到那时「反 slop」本身就会变成新的 slop 特征。

所以把它当**地板**用，而不是当**审美**用。它保证你不掉进坑里；要走多远，仍然取决于你有没有一个真想法——那张夜晚的房子，是模型想出来的，不是规则算出来的。

## 链接

- [仓库](https://github.com/pbakaus/impeccable) · [官网](https://impeccable.style) · [文档](https://impeccable.style/docs)
- [README 讲解页](https://github.com/pbakaus/impeccable#readme) · [Changelog](https://github.com/pbakaus/impeccable/releases)
