---
title: taste-skill：把「页面好不好看」变成一堆能 FAIL 的检查项
description: "给 coding agent 的设计品味技能：从 247 个获奖站点提炼 20 个方向与一套反 slop 硬规则，再用真实浏览器在三种宽度下量，0 FAIL 才算过。附完整规则清单与真实边界。"
createTime: 2026/10/31 21:50:00
---

> 模型建的页面通常看起来像它见过所有页面的平均值：居中标题压三行、上方一个小标签、一排 icon 卡片、一层柔和渐变、几条细线、一句 monospace 小字。里面没有一样是错的，也没有一样是被决定过的。

这是 taste-skill 的 SKILL.md 开头对「AI 味页面」的描述，比大多数讨论都准。它想解决的问题也很清楚：不是让模型画得更好看，而是让模型**做出决定**——然后把这个决定拿去量。

| 项目 | 内容 |
|---|---|
| 类型 | Agent Skill（`design-taste-frontend`） |
| 仓库 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| 技术栈 | Node 22+，CDP 驱动真实 Chrome/Edge/Chromium，无需 API Key |
| 许可 | MIT |
| 热度 | 106.7k star / 7.2k fork / 8 open issue（2026-10-31 快照） |
| 状态 | v2.1.5（2026-10-24），254 次提交，当天仍有推送 |

106.7k star 这个量级已经不能用「小而美」来形容了。所以这篇的重点不是「它有多好」，而是**它凭什么量**、量出来的是什么、以及这套量化本身有什么风险。

## 先看产出

两个例子，都来自 README 里的一句话 brief。

![咖啡店页面：巨型标题压在手绘店面插图上](/imgs/ai-toolbox/taste-skill/coffee-storefront.webp)

注意这张图里没有的东西：没有渐变、没有卡片、没有 pill 标签、没有阴影、没有「01 / 02 / 03」。右栏用五块纯色把菜单、豆子、烘焙日、地址、营业时间做成色彩索引——这是「用色块划分表面」而不是「用线和阴影划分表面」的典型做法。

![夜间活动页：日期排进照片网格里](/imgs/ai-toolbox/taste-skill/night-dates.webp)

第二张更能说明「idea」是什么：活动页的信息无非是时间地点票价，常规做法是三个卡片。它把日期做成黑色块，直接压进一墙发电厂照片的网格里，日期本身成了版式的一部分。

## 规则是从 247 个站里数出来的

整套东西建在对 247 个策展站点（One Page Love、Awwwards Sites of the Day）的研究上。SKILL.md 里最有说服力的部分，是把「审美偏好」翻译成了对比数据——按评审打分 7.5 以上 / 6.5 以下分两组：

| 元素 | 高分站 | 低分站 |
|---|---|---|
| icon 顶着的功能卡 | 1% | 28% |
| pill 徽章 | 14% | 34% |
| 渐变 | 22% | 52% |
| 阴影 | 24% | 48% |
| 小号大写字距标签 | 16% | 57% |

所以「禁止渐变」「禁止 icon 卡片」不是洁癖，是相关性。真正有意思的是反转的那几条：

> monospace 标签、`01/02/03` 序号、hairline 网格，在获奖站上反而**更**常见——正因如此生成器一直在模仿它们，现在读起来像 costume（戏服）。

于是这三样被**无例外禁止**，连「高分站也这么干」的理由都不给。这条逻辑比规则本身更值得记：一个手法一旦被批量复制，它的信号价值就归零了。

## 于是有了一份很硬的禁止清单

不用装这个 Skill 也能直接拿去当 code review 清单：

- **结构**：禁止标题上方的小标签（eyebrow）、pill badge、`New ·` chip；禁止 `01/02/03` 序号；禁止成排相同的卡片；每节必须有 heading，页面只能有一个 `h1`
- **装饰**：禁止渐变（背景、按钮、文字都不行）；禁止静止状态的阴影和 glow；禁止 hairline 分隔线、1px 描边框、网格线；禁止玻璃拟态和浮动 pill 导航；禁止 emoji、渐变光斑、假仪表盘的灰条
- **排版**：`h1`–`h6` 与首屏主行**最多两行**；大号引文必须用 `<p>` 而不是标题（桌面 ≤36px、≤25 词）；禁止给标题里某个词换字体/颜色/下划线做强调；全站最多两种字体，通常一种；禁止小号大写加字距的标签
- **组件**：按钮要么全方角要么全圆，一次定死（`9–16px` 的「柔和圆角」被点名为弱站默认值）；导航只有 wordmark + 3–5 个朴素链接 + 一个 action；控件要能自我解释，需要写一句话说明怎么用的控件应当重做

三个豁免区：真的 `<pre>/<code>` 代码块、真的表格与表单字段、根节点带 `data-ui` 的真 UI 片段。除此之外 inspector 一律照查。

## 十步 run

README 用六句话概括，SKILL.md 里实际是十步。前三步决定成败，后面是把它做完：

| 步骤 | 在做什么 | 产出 |
|---|---|---|
| 1 | 读 brief，**盘点素材** | 8–12 件只有这个客户才有的东西（名字含义、街道门牌、数字、材料、仪式） |
| 2 | 把页面写成「主张 + 证据」 | 每节一行；没有主张的 section 直接删 |
| 3 | 跑 `draw.mjs` 抽方向 | 一张 direction sheet：构图、排版、配色、hero、场景 |
| 4 | 找 idea | 一句填空：*「在这个页面上，[属于此主题的某物] 变成了 [方向要求的装置]。」* |
| 5 | 先写纯文字稿 | 每条 headline ≤2 行、一句支撑句、一个主 CTA、每节完整内容 |
| 6 | **关掉动效**建静态页面 | 完整的静态页面：tokens、图、交互件
| 7 | Gate | `lint.mjs` + `inspect.mjs` 跑出 0 FAIL，截图存档 |
| 8 | 看自己的截图 | 14 项检查 + Awwwards 加权打分，修最严重的 3 个，最多 3 轮 |
| 9 | 加动效层 | 签名动作、逐节入场、控件反馈、一个动态画面 |
| 10 | 汇报 | 方向与 seed、重抽原因、图片署名、待替换的示例内容 |

「先关掉动效建静态页面」这个顺序值得单独说：动效能遮住很多问题，等静态页面立住了再加，是唯一能看清骨架的做法。构建顺序也定死了——tokens → hero → 逐节 → 图片 → 交互件 → 滚动场景 → 补满空节 → 校边框 → 状态与语义。

SKILL.md 自己写了句大实话：**第 1 到 5 步只要几分钟，却决定了页面到底好不好**。

## 机制一：发牌，而不是让模型自由发挥

`draw.mjs` 从 20 个研究过的方向里**发三张**给你选，选定后再发这个方向的 type system、palette、hero 构图、section blueprint、照片池。参数包括 `--sector`、`--sections`、`--tone`（quiet / bold / warm / technical / playful / luxury / editorial）、`--have`（photography / product-photo / product-ui / illustration / video）。

关键约束：**只能因为三个理由重抽**某一项——

1. 违反品牌约束
2. 需要不存在的素材
3. 这个 section 装不下真实内容

「重抽到更舒服为止」不合法，而且每次重抽都要写进报告。这是把「品味」从提示词祈祷变成**有限次抽样**：选项来自语料库，选择权留给人，理由必须可陈述。

## 机制二：真浏览器量，不是模型自评

`inspect.mjs` 用 CDP 打开真实 Chrome，在 **1440 / 768 / 390** 三个宽度截图并测量：

- headline 行数、字号、**字体是否真的加载了**、颜色、分隔线、阴影、渐变、对比度、溢出
- 框（frame）：两侧边距是否相等、有没有 section 挤在一侧、有没有超过半屏的空白段、标题是否存在、有没有无标题的 section、文字是否贴屏边
- 图片数量下限：整页至少 **4 张真图**，通常 6–12 张，SVG 不计
- 动效计数：真实移动元素 **< 8 个 FAIL，< 16 个 WARN**
- 控件有没有可访问名
- 任何东西压在 headline 或 statement 上 → 直接 FAIL

通过标准是三个宽度全 0 FAIL，**WARN 一律当错误处理**，除非你能一句话向设计师辩护。SKILL.md 原话：不许和 meter 争辩，不许藏东西。

还有一条很务实的：最后一轮 gate 必须跑在 **production build** 上（`vite build && vite preview` 或 `next build && next start`）。dev server 会拿到 WARN——minifier 可能把 dev 下可见的 `backdrop-filter` 删掉，你在开发环境测出来的通过不算数。

## 机制三：看自己的截图改

第 8 步是这套东西里最有意思的地方：让 agent 打开自己刚才生成的截图（不只是首屏），按 `references/critique.md` 做 14 项检查、Awwwards 加权打分，然后只修最严重的 3 个问题，最多 3 轮。

报告里有一份「必须全部为真」的清单，最后一条是一条诚实条款：

> **Do not claim a check you did not run.**（不要声称你跑过没跑的检查。）

这句话放在 AI 工具里有点刺，因为「假装检查过了」正是模型最常见的偷懒方式。

## 上手

四种安装方式，按你的宿主挑一个：

```bash
# 1. skills CLI
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# 2. Claude Code 插件
/plugin marketplace add Leonxlnx/taste-skill
/plugin install taste-skill@taste-skill

# 3. Codex 插件（装完要新开会话才加载技能）
codex plugin marketplace add Leonxlnx/taste-skill
codex plugin add taste-skill@taste-skill

# 4. clone 后 symlink（git pull 即更新）
./install.sh --all-agents
```

`install.sh` 用的是 bash 数组和 `[[ ]]`，不是 POSIX sh；还有 `--list`、`--uninstall`（只删指向本仓库的链接，不会误删别人的 symlink）。

依赖只有两样：**Node 22+** 和已安装的 Chrome / Edge / Chromium。不装任何依赖，不需要 API Key，只有找图那步要联网。框架无关——React、Vue、Svelte、纯 HTML 都行，规则只管设计不管实现。

常用命令：

```bash
node scripts/draw.mjs --list sectors      # 看有哪些行业/角色可选
node scripts/lint.mjs src/                # 静态检查（Node 18+ 即可）
node scripts/inspect.mjs http://localhost:4173   # 三档宽度实测
node scripts/scenes.mjs <url>             # 有滚动场景时
node scripts/assets.mjs --credits         # 打印素材署名行
```

## 坑与边界

### 1. 它管设计，不管事实

SKILL.md 里写得很清楚：proof 绝不编造——没有的客户、引述、评论、媒体、logo、商业数据一个都不许出现；示例细节（菜名、房型房价）可以补，但必须在报告里列出来让客户确认。

也就是说**内容仍然要你给**。第 1 步那个「盘点 8–12 件只有这个客户才有的东西」，是最费人、也最不能省的一步。它的效果上限基本由这一步决定。

### 2. 图片是借来的，商用要换

只从开放馆藏（Wikimedia Commons、Openverse、Met 等）取 **public domain / CC0 / CC BY / CC BY-SA** 的图，下载进项目、在页面上标注来源、写进报告，绝不允许伪装成客户自有素材。真要上线商用，换成自己拍的更稳妥。

### 3. 一次构建 30–45 分钟、几十万 token

这个成本比「一句话生成落地页」高一个量级。它的定位是「做一个页面」，不是「批量出五十个页面」。拿它当模板工厂用，会又慢又贵，还得不到它擅长的东西。

### 4. 规则很硬，硬到会跟你打架

如果你就是要玻璃拟态导航、渐变按钮、icon 功能卡，它要么判 FAIL，要么你得用 `--allow <rule>` 逐条豁免，并在报告里说明理由。品牌规范跟规则冲突时也是这条路。接受不了这种约束的话，装了也会想卸。

### 5. 装错仓库会拿到 v1

v2 之后技能被拆开了：`high-end-visual-design`、`minimalist-ui`、`industrial-brutalist-ui` 这些老技能在 `taste-skill-classics`；`imagegen-frontend-web`、`brandkit`、`image-to-code` 在 `imagegen-skills`。主仓库现在**只剩一个**技能 `design-taste-frontend`。照着旧教程装，装回来的是一年前的版本。

### 6. 没有官方代币

README 专门声明了一句：本项目没有官方 token 或加密货币项目，任何借用其名号的 token 都与之无关。一个 10 万 star 的项目要写这种声明，说明已经有人拿它做局了——搜教程时留意。

## 适合谁

| 适合 | 不适合 |
|---|---|
| Landing page、产品页、作品集、活动页这类「一面之缘」的页面 | 后台管理系统、内部工具（除了它的 app screens 分支） |
| 已经能提供真实素材和真实文案的项目 | 手上只有「帮我做个官网」一句话 |
| 想给团队立一套可执行的前端视觉规范 | 需要严格遵循既有品牌手册且手册本身很「AI 味」 |
| 愿意花 30–45 分钟换一个能看的首屏 | 要批量生成几十个页面 |

## 一点判断

这个项目真正值钱的不是提示词，是**那 247 个站点的统计和 `library/` 里那堆 JSON**——方向、hero 构图、section blueprint、字体系统、配色，全是从真实获奖站里抽出来的可枚举选项。规则是这套语料的副产品。

比语料更值钱的，是**把主观判断拆成能 FAIL 的检查项**这个思路。headline 超过两行、边距不等、动效少于 8 个、图片少于 4 张——这些都不需要审美就能判定，判完之后 agent 才有改进的闭环。相比之下，「做得高级一点」这种指令，模型只能靠猜。

但它有一个自己没提的风险：**反 slop 很容易变成新的 slop**。20 个方向来自同一批站点的研究，规则又是统一施加的，产出会收敛到另一种平均值——不是「居中标题 + 三个卡片」的平均值，而是「巨型标题 + 出血大图 + 色块分区」的平均值。这两年在 Awwwards 上看到的东西，本身也有很强的同质化。

所以它适合当**下限工具**：保证你交出来的东西不会像 AI 拼的。上限仍然取决于你有没有一个真想法——第 4 步那句填空，是整套流程里唯一没法被脚本化的一步，也是唯一决定这页面是否值得存在的一步。

## 链接

- [仓库](https://github.com/Leonxlnx/taste-skill) · [SKILL.md](https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md) · [官网](https://tasteskill.dev)
- [247 站研究文档](https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/references/research.md)
- [老技能仓库 taste-skill-classics](https://github.com/Leonxlnx/taste-skill-classics) · [imagegen-skills](https://github.com/Leonxlnx/imagegen-skills)
- [v2.1.5 更新说明](https://github.com/Leonxlnx/taste-skill/releases/tag/v2.1.5)
