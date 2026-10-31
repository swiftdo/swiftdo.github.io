---
title: last30days：用点赞、播放和赔率排序，而不是编辑
description: "在 Reddit、X、YouTube、HN、Polymarket 等二十来个源里并行搜同一话题，按真实互动排序，再由 agent 合成带引用的简报。全本地运行、自带 key，零配置也能用四个源。"
createTime: 2026/10/31 23:10:00
---

> Google 聚合的是编辑。`/last30days` 搜索的是人。

这句话是这个 Skill 的全部主张。它不打算做一个更好的搜索引擎，它想换掉排序的依据——不看你写了多少 SEO 友好的文章，看有多少人真的点了赞、看了完、下了注。

| 项目 | 内容 |
|---|---|
| 类型 | Agent Skill（Python 引擎 + 命令式技能） |
| 仓库 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) |
| 技术栈 | Python 3.12+、yt-dlp、Node（X 搜索用 vendored Bird） |
| 许可 | MIT |
| 热度 | 66.1k star / 5.8k fork / 17 open issue（2026-10-31 快照） |
| 状态 | v3.31.0（2026-10-27），九个月 31 个小版本，仍在日更 |

## 它到底在搜什么

不是「更多网页」，是「人怎么反应」。二十来个源，各自提供一种别处拿不到的信号：

| 源 | 它告诉你什么 |
|---|---|
| Reddit | 不加滤镜的看法。真实高赞评论，免费、不需要 key，Google 埋掉的那些 |
| X / Twitter | 最快的那句判断、专家的长串、第一反应 |
| YouTube | 45 分钟的深挖。全文转录里搜出真正值得引用的五句 |
| TikTok / Reels | 触达几百万人的那个说法，以及口播转录 |
| Hacker News | 开发者的共识。825 分、899 条评论，技术人真正吵架的地方 |
| Polymarket | 不是观点，是赔率——背后是真钱 |
| GitHub | 对人的：PR 速度、星标仓库；对话题的：issue 与讨论 |
| arXiv / Techmeme | 热潮背后的论文；科技新闻的编辑层 |
| 小红书 / Bluesky / Threads / Pinterest | 中文生活信号、后推特的社交层、视觉发现 |
| Meta Ads | 一个品牌正在花钱说什么——本月在投的广告创意与文案 |
| Web | 编辑报道和博客对比。只是众多信号之一，不是唯一 |

最后一行是它对自己位置的判断：**网页搜索不是答案，是二十几个投票者之一。**

## 为什么这件事非得 agent 来做

README 里这段论证我认为是全篇最硬的：

> Google 碰不到 Reddit 评论和 X 帖子。ChatGPT 和 Reddit 有合作，但搜不了 X 和 TikTok。Gemini 有 YouTube 但没有 Reddit。Claude 一个都没有。

每个平台都是围墙花园，各有各的 API、token、鉴权。所以真正的解锁不是「一个更好的搜索引擎」，而是**你自己带上 key 和浏览器登录态，让 agent 一次把十几个不相连的平台打通、放在一起排序**。

也就是说：它真正的本事是**桥**，不是搜。

## 七步流水线

1. **你打一个话题**：人、公司、产品、技术，「A vs B」都行。
2. **agent 解析「谁重要」**：找 X 账号（包括创始人）、GitHub 仓库、subreddit、TikTok 话题、YouTube 频道。输入「Kanye West」，它知道该去 r/hiphopheads、@kanyewest、YouTube 上搜「bully review」。
3. **所有源并行搜**：多查询扩展，按互动量、相关度、新鲜度打分。
4. **别人没有的那层深度**：YouTube 反应视频的全文转录、带赞数的 Reddit 高赞评论、TikTok 字幕、Polymarket 赔率——**不是标题和链接，是内容和投票**。
5. **同一件事合并**：Reddit 上宣布、X 上吵、TikTok 上报票价，合成一个 cluster 而不是三条结果。
6. **合成一份简报**：每条都有出处，按真实互动排序。它交的不是「我找到了什么」，是「什么才重要」。
7. **然后它变成你的上下文**：跑完之后这一轮会话里就带着这些信息，可以接着问、让它写 prompt、写邮件、排行程。

第 4 步是它和「搜索 + 摘要」类工具的分水岭。摘要是廉价的，摘要的依据才贵。

## 但「互动」不等于「真实」

这是我最想提醒的一点，而它自己没说破。

它把三种性质完全不同的信号放进了同一个排序里：

- **Polymarket 的赔率**背后是真金白银，押错了要亏钱。这类信号自带纠错机制，可信度最高。
- **Reddit 的高赞**是情绪和共识的乘积。一条 1,500 赞的评论可能对，也可能是一群人一致地错。
- **TikTok 的播放量**衡量的是传播效率，和正确性几乎无关。

所以你能得到的是「**大家都在这么说**」，不是「**这是真的**」。简报会尽量标出处、给具体数字，但把「流行」当「正确」是这类工具最常见的误用，而它把最容易误用的三种信号排在了最前面。

对照一下这个集合里的其他工具就很有意思：taste-skill 和 impeccable 在管「像不像 AI 做的」，huashu-design 在管「能不能交付」，这一个在管「信息可不可信」——而最后这件事，是唯一没法用规则或断言自动化的。

## 能拿来干什么

README 里的例子比功能列表有说服力：

- **开会前**：`/last30days Peter Steinberger` —— 他上个月加入了 OpenAI 的 Codex 团队、在跟 Anthropic 禁第三方 agent 的事、GitHub 上 23 个 PR 合并率 85%、在做 LobsterOS；r/ClaudeCode 有 569 赞在吵他是英雄还是「insufferable」。这些都不在 LinkedIn 上。
- **看招聘信号**：`/last30days Listen Labs --hiring-signals` —— 在招的岗位成为「重心在往哪挪」的证据，报告只说「招聘看起来意味着什么」，不替公司画路线图。
- **在爆之前找到话题**：`/last30days what's exploding in AI agents?` —— 切到发现模式，扫 Reddit 分类、HN 首页、Digg 的 AI/科技源，给你 5–10 个按速度排序的话题，每个都带一条可以直接跑的后续命令。
- **对比工具**：星标数是从 GitHub API 实时拉的，不是几个月前博客里那个数。
- **出门前**：哪个项目在施工、哪个设施在检修、本地人抱怨什么。

## 落地形态比宣传务实

这是它比多数「会写摘要的 prompt」更像工程产品的地方：

- **落盘**：默认存到 `~/Documents/Last30Days/<slug>-raw.md`，`--save-dir` / `--save-suffix` 可以按客户分开。
- **结构化输出**：`--emit=json` 有版本化的 schema，脚本能用。
- **持续监控**：`--store` 把发现写进 SQLite，配 `watchlist.py` 定时跑（有新发现可以推 Slack / webhook），`briefing.py` 出日报周报。
- **可搜索的研究库**：`library feed` 生成 `index.html` + 本地 Atom feed，`library search` 离线、确定性地搜你历史上做过的所有简报。
- **`--preflight`**：不读 cookie、不写文件、不跑研究，先告诉你这次会读什么、写什么。

## 上手

```bash
# Claude Code（推荐，插件市场会自动更新）
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days

# 其他 50+ 支持 Agent Skills 的宿主
npx skills add mvanhorn/last30days-skill -g
```

还有 claude.ai 网页版（下载 `.skill` 上传，得先打开「代码执行」能力）、Claude Desktop（`.mcpb` 拖进扩展，需要本机 Python 3.12+）、OpenClaw（`clawhub install last30days-official`）、Grok 原生插件。

**零配置就能用的只有四个源**：Reddit（含评论）、Hacker News、Polymarket、GitHub。跑一次会弹设置向导，30 秒能把 arXiv、Techmeme 这些免费的加上。其余的成本结构是这样的：

| 想加什么 | 需要什么 | 花不花钱 |
|---|---|---|
| X / Twitter | 官方 API token，或任一浏览器登录 x.com，或第三方 key | 官方 API 用你自己的额度；cookie 免费 |
| YouTube | `brew install yt-dlp` | 免费 |
| TikTok / IG / Threads / Pinterest / LinkedIn | ScrapeCreators key | 1 万次免费，之后按量 |
| 小红书 | 本地跑一个登录态的 x-mcp / xiaohongshu-mcp 服务 | 不要 key，靠你自己的浏览器会话 |
| 网络搜索 | Brave Search key | 每月 2,000 次免费 |

macOS 上还能把 key 存进系统钥匙串（`setup-keychain.sh`），优先级最低，`.env` 和环境变量仍然覆盖它。

## 坑

### 1. 「零配置」只覆盖四个源

这是宣传语和现实之间最大的缝。X 是这个工具最有价值的源之一，也是最难配的一个——官方 API 默认只能拿最近一周的帖子（除非你的开发者项目有 full-archive 权限），否则就得靠浏览器 cookie。

### 2. 稳定性不由它自己掌握

ScrapeCreators、yt-dlp、浏览器 cookie、各家平台的 HTML——全是外部依赖。平台改一次结构、封一次 cookie，某个源就静默变空。它设计成「缺什么降级什么」，用起来不报错，但你得知道自己看到的是四个源还是十五个源。

### 3. 用 cookie 抓平台，条款得自己判断

它给你的是能力，不是许可。用浏览器登录态去抓 X、TikTok，是否违反各平台 ToS、会不会影响你的账号，README 不管这事。

### 4. 九个月 31 个版本

v3.31.0，README 自己写着「本文描述的是当前源码树，你装的版本可能不同」。教程和实际行为对不上是常态，遇到怪事先看版本号。

### 5. 两种装法会打架

Claude Code 不跨安装方式去重：同时装了插件市场版和 `npx skills` 版，`/last30days` 会出现两条。一台机器只用一种。

### 6. Claude Desktop 版门槛更高

要本机 Python 3.12+，Windows 支持推迟。而且它的 key 和 Code 版不共享——Claude Desktop 和 Claude Code 按设计各存一份，同一批 key 要输两次。

## 适合谁

| 适合 | 不适合 |
|---|---|
| 写内容、做播客、要跟风口的人 | 要的是权威信源、同行评审的结论 |
| 开会/见客户/谈判前要做功课 | 涉及隐私或合规调查（大量来自社交平台的二手信息） |
| 想监控某个话题的持续变化（配 watchlist） | 只偶尔搜一次、不想配 key |
| 已经在用 Claude Code / Codex 等宿主 | 完全不想碰 cookie 和第三方 API |

## 一点判断

它解决的其实是一个很具体的问题：**训练数据永远落后社区几个月**。模型知道的是去年的共识，而 Reddit 和 X 上的人上个月就已经推翻它了。这个 Skill 本质上是在给模型接一根实时的外挂神经。

比「搜索」更值钱的是**实体对齐**：知道一个人在 X 上叫什么、在 GitHub 上是哪个仓库、在 Reddit 上该去哪个 subreddit、在 YouTube 上会被哪条视频讨论。这件事没有通用解法，只能靠 agent 现场推理 + 一堆平台适配——也正因为难，抄起来才不容易。

要泼的冷水在排序逻辑上。用互动量排序，等于把「被最多人看见的」当成「最重要的」。这在找风口、找人、找情绪的时候极其有效；在判断事实的时候，它会把流行的错误一起放大。用久了会有一种幻觉：**我看过了所有声音**。其实你看到的是被算法和点赞推到前面的那部分，沉默的大多数依然沉默。

所以正确的用法是把它当**入口**而不是**结论**：用它找到该读的那 5 个帖子和那 3 条视频，然后自己去读。

## 链接

- [仓库](https://github.com/mvanhorn/last30days-skill) · [中文 README](https://github.com/mvanhorn/last30days-skill/blob/main/README.zh-CN.md) · [技能本体 SKILL.md](https://github.com/mvanhorn/last30days-skill/blob/main/skills/last30days/SKILL.md)
- [配置说明](https://github.com/mvanhorn/last30days-skill/blob/main/CONFIGURATION.md) · [更新日志](https://github.com/mvanhorn/last30days-skill/blob/main/CHANGELOG.md)
