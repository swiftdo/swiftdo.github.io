---
title: "23 万 Star，2.3 KB：最火的仓库里只有四句话"
description: "231,203 Star、22,990 Fork、仓库 20 KB、9 个纯文本文件、七个月没提交——andrej-karpathy-skills 全部产物就是一份 2.3 KB 的 CLAUDE.md，四条规矩。本文拆它的四条原则、与 Karpathy 原帖的关系、四种分发方式，以及没有 LICENSE 文件与没有效果测量这两件该看清的事。"
createTime: 2026/11/09 23:33:31
date: 2026-11-09
tags:
    - Karpathy
    - Agent Skills
    - CLAUDE.md
    - AI 编程
    - 开源
---

# 23 万 Star，2.3 KB：最火的仓库里只有四句话

先看一组不太协调的数字。

截至 2026-11-09 的 GitHub API，[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) 有 **231,203 Star、22,990 Fork、1,312 个 watcher**。而仓库体积是 **20 KB**，递归列出来的文件一共 **9 个，全是纯文本**，没有一行可执行代码，没有依赖，没有构建，没有 release，没有截图，甚至没有 LICENSE 文件。全部提交 **28 次**，最后一次 push 停在 **4 月 20 日**——七个多月前。

核心产物 `CLAUDE.md` 是 **2,357 字节**，内容是四条规矩。

[![Star 增长曲线与代码冻结时间线：1/31 约 3,178 Star，5/2 破 10 万，11/8 达 230,672；最后一次 push 在 4/20，此后 Star 仍在涨](/imgs/kp-paradox.svg)](/imgs/kp-paradox.svg)

*代码冻结，注意力没冻结。1 月 31 日约 3,178 Star，4 月 11 日破 1 万，5 月 2 日破 10 万，11 月 8 日约 230,672；而最后一次提交停在 4 月 20 日，之后近七个月零提交，Star 又涨了十几万。底部是本仓库的实时档案：9 个文本文件、28 次提交、0 个 LICENSE 文件。曲线为里程碑示意，历史 Star 数取自第三方记录，实时数取自 2026-11-09 GitHub API。*

## 先说清楚它不是什么

**它不是 Andrej Karpathy 写的。** README 第一句就是 `derived from Andrej Karpathy's observations on LLM coding pitfalls`——把 [Karpathy 一条公开推文](https://x.com/karpathy/status/2015883857489522876)里的观察整理成了 Agent 能读的指令。仓库归 `multica-ai`（早期账号是 `forrestchang`），顶部还在推作者的新项目 Multica 和 X 账号。引用时把观察归给 Karpathy、把文件归给整理者，别混为一谈；也别和 10 月流传的那份「Karpathy 十条军规」搞混，那份据称是内部版流出，来源不同。

**它也不是一个 skill 合集。** 名字里有 skills，但仓库里唯一叫 skill 的东西是 `skills/karpathy-guidelines/SKILL.md`，2,518 字节，和根目录的 `CLAUDE.md` 几乎逐字相同，只多了一段 frontmatter。剩下的是 `EXAMPLES.md`（14.8 KB，九个反例/正例）、中英文 README、`CURSOR.md`、一个 `.cursor/rules/*.mdc`，以及 `.claude-plugin/` 下两个几百字节的 JSON 清单。

换句话说：**整个项目就是同一段话，用四种格式各存了一份。**

## 四句话到底写了什么

出发点是 Karpathy 那条推文里被引用最多的三句抱怨：

> 模型会替你做错误假设，然后不假思索地一路跑下去。它们不管理困惑、不寻求澄清、不呈现矛盾、不展示权衡，该反驳时也不反驳。
> 它们特别喜欢把代码和 API 搞复杂、堆抽象、不清理死代码……100 行能搞定的事，非要写成 1000 行的臃肿架构。
> 它们有时仍会改动或删除自己理解不足的代码与注释，哪怕与任务完全无关。

[![三条抱怨与四条规则的对应关系：前三条一一对应，第四条来自正向观察](/imgs/kp-four-principles.svg)](/imgs/kp-four-principles.svg)

*README 的映射里藏着一个容易忽略的非对称：三条抱怨各自对应一条解药，但**第四条不对应任何抱怨**。Goal-Driven Execution 来自 Karpathy 的另一半观察——不是「模型哪里不行」，而是「模型本来就极擅长什么」。本文绘制。*

**1 · Think Before Coding**——不假设、不隐藏困惑、呈现权衡。明确说出假设；有歧义就把多种解释摆出来而不是默默选一个；有更简单的做法就顶回去；不清楚就停下来说清楚哪里不清楚再问。`EXAMPLES.md` 里最典型的反例：用户说「加个导出用户数据的功能」，模型直接写了导出全部用户、JSON/CSV 双格式、硬编码字段的函数。正解是先列四个待澄清项（范围与隐私、导出形态、字段、量级），再给一个最简方案让用户选。

**2 · Simplicity First**——只写解决问题的最少代码。不写没要求的功能、不为一次性代码做抽象、不做没要求的「灵活性/可配置性」、不为不可能发生的场景做错误处理；200 行能写成 50 行就重写。自检是「资深工程师会不会说这过于复杂」。反例是算一个折扣就上 `ABC` + `DiscountStrategy` + `@dataclass` + `DiscountCalculator`，用一次要三十多行配置；正解是 `return amount * (percent / 100)`。

`EXAMPLES.md` 结尾有一句比规则本身更值得记：这些「过度设计」的例子单看**并不算错**，它们遵循设计模式和最佳实践，问题出在**时机**——在需要之前就把复杂度加上了。原文收尾是 `Good code is code that solves today's problem simply, not tomorrow's problem prematurely.`

**3 · Surgical Changes**——只碰必须碰的，只清理自己造成的混乱。别顺手「改进」相邻代码、注释或格式，别重构没坏的东西，匹配现有风格哪怕你更想换个写法；看到无关的死代码提一句、别删；自己改动造成的孤儿 import / 变量才清理。

[![同一处 bug 的两种 diff：左侧顺手重构，右侧只改必要行](/imgs/kp-surgical-diff.svg)](/imgs/kp-surgical-diff.svg)

*`EXAMPLES.md` 里最有画面感的一组对照，需求只有「修好空邮箱导致校验器崩溃」。左边顺手加了 docstring、删改注释、收紧邮箱校验、给用户名加长度校验、换引号与类型注解；右边只动了修复必需的三行，其余一字未改。检验标准一句话：每一行改动都要能直接追溯到用户的请求。本文依据官方示例重绘。*

**4 · Goal-Driven Execution**——定义成功标准，循环验证直到达成。把命令式指令翻译成可验证目标：

| 不要这样 | 改成这样 |
|---|---|
| "Add validation" | "Write tests for invalid inputs, then make them pass" |
| "Fix the bug" | "Write a test that reproduces it, then make it pass" |
| "Refactor X" | "Ensure tests pass before and after" |

多步任务要列成 `1. [Step] → verify: [check]` 的清单，每一步都能独立判定。文件里那句解释很到位：`Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.`

[![命令式与目标驱动的对比：弱标准没有可判定终点，强标准每步带验证点](/imgs/kp-goal-loop.svg)](/imgs/kp-goal-loop.svg)

*Karpathy 被引用最多的那句正向洞察：`LLMs are exceptionally good at looping until they meet specific goals... Don't tell it what to do, give it success criteria and watch it go.` 左边「review → identify → improve → test」没有一个可判定的终点；右边把同一个任务翻译成三步，每步带 verify，失败就回到该步重做，全绿才收工。本文绘制。*

四条之外，文件开头还留了一句自我设限：`These guidelines bias toward caution over speed. For trivial tasks, use judgment.` 结尾给了四条「怎么算起作用」的主观观察——diff 里无关改动更少、因过度复杂导致的重写更少、澄清问题出现在实现之前而不是犯错之后、PR 更干净。

## 一段话，四种装法

| 形态 | 文件 | 谁读 |
|---|---|---|
| 项目指令 | `CLAUDE.md`（65 行） | Claude Code，或任何读根目录指令文件的 Agent |
| Agent Skill | `skills/karpathy-guidelines/SKILL.md`（带 `description` / `license` frontmatter） | skills 运行时按需路由 |
| Cursor 规则 | `.cursor/rules/karpathy-guidelines.mdc`（`alwaysApply: true`） | 打开该仓库即自动生效 |
| 插件清单 | `.claude-plugin/plugin.json` + `marketplace.json` | Claude Code 插件市场，跨项目安装 |

安装照 README 是两条命令：

```bash
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills
```

或者干脆把文件拷进项目根：`curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md`（已有 `CLAUDE.md` 就追加，别覆盖项目自己的规则）。走 skills 生态也可以用 `npx skills add multica-ai/andrej-karpathy-skills`，只是 README 没写这条。

**注意路径**：README、两个 plugin manifest 里的 `author` / `owner` 至今仍写着 `forrestchang`，而仓库已经迁到 `multica-ai` 组织下。GitHub 会重定向，命令目前还能用，但用当前组织路径更稳；第三方 skill 索引也把「安装命令指向旧 owner」列成了质量瑕疵。

## 为什么四句话能涨到 23 万 Star

因为每个用了一周编码 Agent 的人都遇到过同一种失效：**它做得又快又像，但方向是错的，而且你在 review 里才发现**。不是语法错，是「像毛躁初级工程师的概念错」。这四条精准打在这一个点上，而且采纳成本几乎是零——不用换模型、不用装服务、不用改工作流，复制一个 2.3 KB 的文件就行。

Karpathy 那条推文本身也给了它势能：他描述几周内手写代码比例从 80% 反转到 20%，称这是「20 年编程生涯里工作流程最大的变化」，还预言 2026 年会是 `slopacolypse`。痛点被一个高信誉的人说清楚，解法又被压成可以直接粘贴的 65 行——传播几乎不需要解释成本。

放到更大的背景里看更明显：2026 年 10 月底的 GitHub 周榜，11 个热门仓库里有 7 个是 agent skill 或插件包，安装命令大多是同一行 `npx skills add`。**当模型能力趋同，竞争正从「换更强的模型」上移到「给模型立规矩」**。这和我前不久写的 Diagram Design 是同一条线，只不过那份规则约束的是画面（4px 网格、单一强调色、六条连接线铁律），这一份约束的是行为（别假设、别过度设计、别顺手改、给出可验证的终点）。

不过 Star 是一次点击，不是采用。第三方 skills 索引记录的累计安装约 4.4 万次，和 23 万 Star 之间差着一个数量级——规矩有没有真的进了 PR，是另一个问题。

## 冷静看几件事

**没有任何效果测量。** README 承认偏向「谨慎而非速度」，建议琐碎任务自行判断，但没给 A/B、token 对比、diff 噪音统计或回归数据。「How to Know It's Working」是四条主观观察，不是指标。它是一份经验总结，不是被验证过的方法论。

**规则之间没有优先级，也没有冲突处理。** 「困惑就停下来问」和「给个目标让它自己循环」在无人值守的批量任务里会打架；「保持简单」也可能和项目既有架构规范冲突。这四条默认旁边坐着一个能随时回答的人。

**许可证是真空。** README 末尾写 `## License MIT`，`SKILL.md` frontmatter 写 `license: MIT`，`plugin.json` 写 `"license": "MIT"`——但仓库里**没有 LICENSE 文件**，GitHub API 的 `license` 字段返回 `null`。三处声明不等于一份授权。个人往自己项目里贴问题不大，要进公司代码库或产品，先自己确认授权状态，或者提个 issue 请作者补一份 LICENSE 文件。中文技术社区也已经有人提醒了这一点。

**改名遗留与「招牌化」。** 安装命令指向旧 owner，README 顶部在导流新项目 Multica，最后一次提交是七个月前。它已经不太像一个「维护中的工具」，更像一块被立起来的招牌——这本身没问题（规则本来也不需要天天改），但别期待有人持续修 issue：仓库里还挂着 139 个 open issue。

**上下文税。** 把这 65 行塞进已经很长的 `CLAUDE.md` / `AGENTS.md`，会稀释项目特有指令；`alwaysApply: true` 的 Cursor 规则每次对话都要占上下文。规则越通用，越容易和具体项目打架，README 给的合并建议是再加一节 `## Project-Specific Guidelines`。

**别把功劳记错人。** 再说一次：这是整理者把 Karpathy 的公开观察写成了文件，不是 Karpathy 出品的官方规范。

## 一个判断

它证明的不是「Karpathy 说得对」，而是**约束本身已经成了一种可分发的产品形态**。9 个文本文件、20 KB、0 行可执行代码，却比大多数框架更接近开发者真正想买的东西：少一次 review 时才发现的错误方向。

把最近几个热门项目连起来看会更清楚：T3 Code 做的是「所有 Agent 的控制面」，Diagram Design 把审美写成可校验的规则，这个仓库把行为写成四句话。2026 年下半年最火的东西越来越不像软件，而是**判断的边界**。模型能力过剩之后，稀缺的不再是生成，是限制。

但也别高估它。四条里最值钱的那条，恰恰要求你先写出一个好的成功标准——而「什么叫做完」仍然是人得想清楚的事。把文件贴进项目是零成本的，能不能起作用，取决于你愿不愿意在派活前多写那一句验收条件。规则能管住 Agent 的手，管不了你没说清楚的目标。

## 配图与参考

该仓库 9 个文件全是纯文本、没有任何截图，因此**本文 4 张配图全部为自绘解释图**，其中 diff 对照与折线数据依据官方 `EXAMPLES.md`、README 与 GitHub API / 第三方 Star 记录重绘；曲线为里程碑示意，非等比例回归。

- [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) · [README](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/README.md) · [中文 README](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/README.zh.md)
- 原文：[CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md) · [SKILL.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/skills/karpathy-guidelines/SKILL.md) · [EXAMPLES.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/EXAMPLES.md) · [CURSOR.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CURSOR.md)
- [Andrej Karpathy 的原始推文](https://x.com/karpathy/status/2015883857489522876) · [推文要点整理](https://rvachev.org/en/blog/andrej-karpathy-s-thoughts-on-coding-with-ai)
- 文中 Star、Fork、watcher、issue、提交数、文件树与仓库体积取自 2026-11-09 GitHub API；历史 Star 里程碑与安装量引自第三方记录，口径已在图注与正文注明；许可证状态以仓库当前文件为准
