---
title: andrej-karpathy-skills：227k star，换来 2.3KB 的四条纪律
description: "从 Karpathy 对 LLM 编码毛病的观察提炼出的四条行为约束：先想再写、简洁优先、精准修改、目标驱动。一个 2.3KB 文本拿到 227k star，附原文细则、示例对照与许可证的坑。"
createTime: 2026/10/31 22:25:00
---

> 模型会替你做错误的假设，然后不假思索地执行。它们不管理自己的困惑、不寻求澄清、不呈现矛盾、不展示权衡，该提出异议时也不反驳。
>
> 它们真的很喜欢把代码和 API 搞复杂，堆砌抽象概念，不清理死代码——明明 100 行能搞定的事，非要实现成 1000 行的臃肿架构。

这两段话是 Andrej Karpathy 在 X 上的吐槽，被这个仓库当成了立论基础。整个项目要做的，就是把这两段话翻译成模型能读的指令。

| 项目 | 内容 |
|---|---|
| 类型 | 行为约束（`CLAUDE.md` / Agent Skill / Cursor 规则） |
| 仓库 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) |
| 体积 | `CLAUDE.md` **2.3KB**，`EXAMPLES.md` 14.8KB |
| 许可 | 文档写 MIT，但**仓库里没有 LICENSE 文件** |
| 热度 | 227.2k star / 22.7k fork / 138 open issue（2026-10-31 快照） |
| 状态 | 最后一次提交 2026-04-20，此后半年无更新 |

227k star，是这个集合里其他所有项目的总和还多。而它交付的东西，比谁都小：一个文本文件。

## 它到底给了什么

四条原则，每条一段粗体判断句 + 若干条禁令。原文很短，几乎可以完整抄下来：

### 1. 先想再写（Think Before Coding）

> **不要假设。不要隐藏困惑。呈现权衡。**

动笔之前：把假设明说，不确定就问；有多种解释就都摆出来，**不要默默挑一个**；有更简单的做法就说，该反对就反对；哪里不清楚就停下来，指出不清楚的地方。

### 2. 简洁优先（Simplicity First）

> **解决问题的最少代码。不要任何投机。**

不加没要求的功能；不为一次性代码造抽象；不加没要求的「灵活性」「可配置性」；不为不可能发生的场景写错误处理。**你写了 200 行而它本可以是 50 行，重写它。**

自检问题是这句：资深工程师会觉得这太复杂吗？会，就简化。

### 3. 精准修改（Surgical Changes）

> **只碰必须碰的。只清理自己造成的混乱。**

不许「顺手改进」相邻的代码、注释、格式；不许重构没坏的东西；匹配现有风格，哪怕你更喜欢另一种写法；看到无关的死代码，**提一下，不要删**。自己改动导致变成孤儿的 import / 变量 / 函数，自己清掉；本来就存在的死代码，不问就别动。

判据一句话：**每一行改动都应该能直接追溯到用户的请求。**

### 4. 目标驱动（Goal-Driven Execution）

> **定义成功标准。循环到验证通过。**

把祈使句改写成可验证的目标：

| 不要说 | 改成 |
|---|---|
| 「加个校验」 | 「为非法输入写测试，然后让它们通过」 |
| 「修这个 bug」 | 「写一个能复现它的测试，然后让它通过」 |
| 「重构 X」 | 「确保重构前后测试都通过」 |

多步任务先给计划，每步带验证点：

```text
1. [步骤] → 验证: [检查]
2. [步骤] → 验证: [检查]
3. [步骤] → 验证: [检查]
```

最后这句是整份文档的核心：**强的成功标准能让它自己循环下去，弱的标准（「让它能跑」）需要你反复澄清。**

## 真正值钱的是那 14.8KB 的例子

`EXAMPLES.md` 比 `CLAUDE.md` 长六倍，每条原则配前后对照。这才是它能落地的原因——原则是抽象的，例子是可以指着说的。

**例子一：一个折扣函数。** 需求是「加个函数算折扣」。模型给出的版本是 `DiscountStrategy` 抽象基类 + `PercentageDiscount` / `FixedDiscount` 两个实现 + `@dataclass DiscountConfig` + `DiscountCalculator`，三十多行装配，换来：

```python
def calculate_discount(amount: float, percent: float) -> float:
    """Calculate discount amount. percent should be 0-100."""
    return amount * (percent / 100)
```

文档给的理由很克制：**等真的需要多种折扣类型时再加复杂度，到那时再重构。**

**例子二：「把搜索变快」。** 模型默默加上 `@lru_cache`、数据库索引、async 处理，两百行优化代码，但没有问一句「快」指什么。正确反应是先摊开三种可能——响应时间（加索引、缓存，约 2 小时）、并发吞吐（async、连接池，约 4 小时）、感知速度（先出部分结果，约 3 小时）——然后问哪一项最重要。

**例子三：改 bug 的 diff。** 需求是「修空邮箱让校验器崩溃」。模型交上来的 diff 里顺手把注释改成了 docstring、把邮箱校验改成更严格的版本、还动了用户名的检查。文档的潜台词很清楚：**这些「改进」全都是风险**，它们让 review 变难、让 blame 变脏、让回滚变复杂。

## 为什么它能到 227k star

三件事叠在一起：

1. **它借的是一个有名有姓的判断。** 不是作者自己的品味，是 Karpathy 说的。同样的四条原则，如果署一个陌生 ID，大概率不会有人转。
2. **成本几乎为零。** 不用装 CLI、不用配 API Key、不用改构建，`curl` 一个文件就完事。上一个 100k star 的项目要 Node 22 + Chrome，这个只要 `curl`。
3. **它在做减法。** 2026 年的 AI 工具市场几乎全在做加法：更多工具、更多上下文、更多自治。这个项目说：不，先让它别乱动。

反过来说也成立：**star 数在这里度量的是共鸣，不是使用量。** 227k 人点了星，但没有人知道有多少人真的把它放进了 `CLAUDE.md` 并且留了下来。

## 怎么用

同一份内容，用四种形态分发，对应四种「模型能在哪读到它」：

| 形态 | 路径 | 场景 |
|---|---|---|
| 项目指令 | `CLAUDE.md` | 放项目根目录，Claude Code 每次会话自动读 |
| 技能 | `skills/karpathy-guidelines/SKILL.md` | 按需加载，不占常驻上下文 |
| Cursor 规则 | `.cursor/rules/karpathy-guidelines.mdc` | 在 Cursor 里打开即生效 |
| 插件 | `.claude-plugin/marketplace.json` | 一次装、所有项目可用 |

安装：

```bash
# 新项目
curl -o CLAUDE.md https://raw.githubusercontent.com/multica-ai/andrej-karpathy-skills/main/CLAUDE.md

# 已有项目：追加（注意先备份）
echo "" >> CLAUDE.md
curl https://raw.githubusercontent.com/multica-ai/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
```

插件方式在 Claude Code 里是 `/plugin marketplace add` + `/plugin install`，但**README 里的命令还写着 `forrestchang/andrej-karpathy-skills`**——仓库已经迁到 `multica-ai` 名下，GitHub 会重定向所以还能用，但这说明文档停留在迁移之前。

## 坑

### 1. 半年没动了

最后一次提交是 2026-04-20，138 个 issue 挂着。1 月开源、4 月加了 Cursor 支持后就基本停了。作者在 README 顶部把流量导向了他的新项目（一个跑编码 agent 的开源平台）。这不影响你用那份文本——它不会坏——但别指望它跟进新模型的行为变化。

### 2. 许可有歧义

README 末尾写 MIT，`SKILL.md` 的 frontmatter 也写 `license: MIT`，但**仓库里没有 LICENSE 文件**，GitHub 侧识别为无许可证。按默认版权规则，没有许可证等于保留所有权利。要用在公司的正式项目里，这是一个需要作者补上的空白，而不是可以忽略的细节。

### 3. 它是约束，不是能力

它不会让模型更聪明，只会让它更少乱来。对本来就克制的模型收益递减；对不爱提问的模型，可能变成「什么都不敢做」——每改一行都先问三个澄清问题。文档自己也承认这个 tradeoff（「bias toward caution over speed」），并让模型对琐碎任务自行判断。但**模型恰恰不擅长判断什么是琐碎**，这是这份文本里最没被解决的一处。

### 4. 四条原则之间会打架

第 1 条让你多问、少猜；第 3 条让你少动、别扩范围。两条一起用，容易变成「问了很多，但一步没走」。第 4 条又要求「循环到验证通过」——于是理想状态是：先问清楚、定好验收标准、然后闷头做完且不碰别的。听起来很好，实际执行时模型经常只做到其中一条。

### 5. 只有英文原件

有中文 README，但 `CLAUDE.md` 和 `EXAMPLES.md` 都是英文。中文团队直接用没问题（模型读英文更稳），但你想在团队规范里引用某一条时，得自己译一遍——而且要译得准，「surgical」译成「外科手术式」比「精准」更接近原意。

## 适合谁

| 适合 | 不适合 |
|---|---|
| 受够了「顺手重构」和「过度抽象」的团队 | 想让模型多干活、快出活的场景 |
| 已经有测试、能用「验证通过」定义完成的项目 | 没有测试、验收全靠人眼的项目 |
| 想在团队里统一「什么算一次合格的改动」 | 想靠它提升模型能力的期待 |
| 给 `CLAUDE.md` 找一份起点 | 需要持续维护、跟进新模型的工具 |

## 一点判断

四条原则本身没什么新鲜——资深工程师每天都在这么做。它真正的贡献是**把这些默认反应写成了模型能读的指令**，并且用具体例子把「什么算过度设计」钉死了。所谓 taste，很大一部分就是「知道什么时候不该动」。

但它也照出一个尴尬：我们需要用 2KB 文字去教一个据说很聪明的模型「不要擅自重构别人的代码」。这不是提示词工程，是行为矫正。而行为矫正的成本，最终会以「多问几轮」的形式还给你。

如果只从里面抄一句，抄第 3 条那句判据：

> **每一行改动都应该能直接追溯到用户的请求。**

它对人也成立。

## 链接

- [仓库](https://github.com/multica-ai/andrej-karpathy-skills) · [CLAUDE.md 原文](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md) · [EXAMPLES.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/EXAMPLES.md)
- [Karpathy 的原推](https://x.com/karpathy/status/2015883857489522876)
- 同作者的平台项目 [multica](https://github.com/multica-ai/multica)
