---
title: dsh-superagent：DeepSeek 的「数字同事」原型，把「谁批准」写成了代码
description: "DeepSeek 开源的 Super-agent 原型：盯着 GitHub 和飞书，自己接单、自己开目录、自己提 PR。真正值得看的是它把授权、准入和撤销写成了领域模型，默认只记录不行动；代价是依赖 DSH alpha、只服务一个仓库，安全边界靠约定。"
createTime: 2026/11/01 16:20:00
---

> 10 月 31 日晚，DeepSeek Harness 团队发了《Super-agent 设计探索：迈向更自主的 Agent 系统》，同时把原型放上 GitHub。一天 4.3k star，一次提交，236 个文件。

先说结论：**这不是装上就能用的产品。** README 第一段自己写着 research prototype、不是官方产品、可能有 bug、代码风格可能不一致。

它值得单独写一篇，是因为它把「agent 什么时候可以自己动手」这件通常靠一句 system prompt 糊过去的事，写成了可以读的状态机。这一点比它的功能更有参考价值。

| 项目 | 内容 |
|---|---|
| 类型 | DSH（DeepSeek Harness）插件包 / 研究原型 |
| 仓库 | [deepseek-ai/dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 技术栈 | TypeScript（ESM）+ React 18 面板；Node ^22.19 或 ≥24；状态存单文件 SQLite（内置 `node:sqlite`，WAL + `synchronous=FULL`） |
| 依赖 | DSH `^0.2.1-alpha.2`；pnpm 11；另需 git 2.32+、tmux、Python 3.8+、gh 2.48+ |
| 许可 | MIT |
| 热度 | 4.3k star / 398 fork / 0 open issue（2026-11-01 快照，开源一天） |
| 状态 | v0.1.0，单次提交，自述「研究代码，非生产可用」 |

## 它替你省的是「盯」，不是「写」

把场景收窄到极致：**一个 GitHub 仓库**。

有人在这个仓库的 issue 或 PR 里提要求，agent 开一张工单，在自己的会话和目录里干活，最后回到原对话里交付——通常是一个 PR。你不需要切窗口、不需要复述上下文、不需要问「做到哪了」，因为面板上只有两类东西：需要人处理的，和系统出问题的。

组里的人这么用：先在群里把方案聊定，再在 PR 评论里改要求，agent 理解前后两次的差别并调整方向；PR 合并或关闭之后，那句「顺便把 X 也改一下」还能把它叫回来，而且不用重新评估。

这套用法背后的观察写在设计文章里：过去一年，coding agent 让「单个任务」越来越少需要人盯，但一个人同时只能跟进 3 到 5 个活跃会话。于是瓶颈从模型能力移到人的注意力上。

## 五个概念，一条流水线

整个系统只有这几个名词，面板、工具、文档用的都是它们，没有第二套叫法：

```text
Source ──Trigger──> Thread
                      │ 批量
                      ▼
                     Eval
                      │ Decision
                      ▼
                    Ticket ──Assignment──> Executor
                      │
                      └──Channel──> 回写到原对话

Ticket ──订阅──> Thread：后续消息直通，不经 Eval
```

- **Source**：一条事件流。`kind` 是可复用的实现（GitHub、飞书），实例是一份配置——是否启用、听什么。它自己记住读到的位置，重启不重放。
- **Trigger**：一条不可变的事件。同一个 Trigger 被接受两次，只会产生一张工单。
- **Thread**：按时间排好的 Trigger 序列。同一条 Thread 上，同一时刻只有一个 Eval 在跑；期间到达的 Trigger 合并进下一批。
- **Ticket**：一张被授权的工作单。**只有 Eval 能创建它**，而且它的状态不跟随执行器会话——可以被交接、恢复、换执行器。
- **Assignment**：工单和某个执行器实例的绑定。一张工单会经历多次。

值得留意的是被明确否掉的设计。文档里有一张「拒绝的概念」表，比如「一条 Thread 上最多一张活跃工单」「Eval 自己调度延迟 Trigger」「工单状态跟随会话」都被否了，每条都写了理由。一个原型愿意把「没做什么」也列成表，通常说明作者想过。

## 两级过滤：先代码，后模型

绝大多数群聊消息和 issue 都不需要 agent 介入，所以判断分两层。

第一层是确定性的 **gate**，只看三件事：**谁发的、发在哪个范围、有没有点名**。每个 Source 有一张准入表，行是接收范围（飞书的每个群、私聊；GitHub 的新 issue、新 PR、评论、主分支 CI），列是发送者身份与是否点名，每个格子只能填 `explicit`（明确请求）、`inferred`（候选）或 `ignore`。

| 情况 | 默认 | 结果 |
|---|---|---|
| 名单内的人点名 | explicit | 直接接单，三种模式都生效 |
| 名单外的人点名 | ignore | 想让「谁 @ 都能提」需要显式改这一格 |
| 名单内的人没点名 | inferred | 进模型研判，看下面的模式 |
| 名单外的人没点名 | ignore | 不接 |
| bot 名单里的 bot | inferred | 只能产生候选，永远不能直接接单，也不能叫停 |
| 其他 bot | 不接 | 不在 bot 名单里的一律拦掉 |

第二层是模型 **assessment**：对每条候选判断是否命中某条已启用的规则，每条规则都要判一次，命中与否都记进 Decision。**主动接单必须至少命中一条规则**——没有「模型觉得这事该做」这条路。

接单模式是这套设计里最关键的一个开关：

| 模式 | 行为 |
|---|---|
| `off` | 推断出来的候选一律不是候选 |
| `observe`（默认） | 照常研判，正向结果记成一条标注「本来会接」的忽略，**什么都不做** |
| `auto` | 正向结果直接接单 |

默认是 `observe`。先让它跑一周，翻一遍 Decision 列表看它「本来会接哪些活」，觉得靠谱了再切 `auto`。把主动性从「信任模型」变成一个可以审阅的行为记录，这条比任何确认弹窗都实用。

## 授权是一张带版本的凭据

多数 agent 框架里，「人工确认」是一个弹窗、一个布尔值、一次点击。这里是一个对象：**Mandate（授权）**。

它记录：依赖的 Policy 版本、范围、强度（`explicit` 明确 / `inferred` 推断）、命中的规则、发起人在这条 Source 上的身份、以及这条 Trigger 是怎么进来的。它不可变——想要更大范围，就得申请一张新工单。

能改变它的操作只有三种：

1. `accept` 创建它；
2. 人叫停，撤回它；
3. 复核失败，吊销它。

工单结束不会结束授权。一张结束的工单如果还留着订阅，人再说一句话就能在**同一个 Mandate 下**恢复，不需要重新评估、不产生新 Decision。但在恢复之前要重新校验一遍：

- Source 是否还在监听那条 Thread；
- 推断来的授权，`auto` 模式是否还开着、命中的规则是否还启用；
- 从准入表进来的授权，按**今天**的表和**今天**的名单，还能不能给出同样的强度（把某人移出名单，就可能吊销他昨天批准的工作）；
- bot 的授权，那个 bot 是否还在名单里。

Policy 改版时它也不吊销在跑的授权，只做三件事：丢弃正在跑的 Eval、把 Trigger 重新排队、给受影响的工单送一条「规则变了」的输入说明哪条规则改了什么。理由写在文档里——直接取消会留下半成品。

这段是我认为最值得抄的部分。它把「昨天批准的事，今天还成立吗」当成一个每次都要回答的问题，而不是一次性的点击。

## 订阅直通：执行器自己听后续

工单会**订阅**它所在的 Thread。之后这条 Thread 上的消息直接扇出给所有活跃订阅的工单，**不经过 Eval**。

这条路径不授予任何新权限——Mandate 不变，只提供上下文。人在自己工单的 Thread 上说的话，由那个执行器决定接不接：在范围内就办，超出范围就**还回一次**，还回之后才轮到主会话去 accept、attach 或 ignore。执行器占着这条消息期间，主会话能做的只有「按人的要求叫停」。

PR 关闭或合并后订阅仍然保留。所以「这个 PR 已经合了，还能不能接着改」这个常见问题在这里有明确答案：能，同一张 Mandate，人的一句话就恢复；bot 和 CI 的消息叫不醒它。

## 执行侧：一票一会话一目录

- 每张工单一个执行器会话，命名 `worker-<ticket id>`，目录按工单短名建，默认落在 `<stateDir>/work`。
- 第一次派工前跑一次 prepare 命令（典型是 `git worktree`），限时 10 分钟；失败就是这张票失败，并把输出记下来。
- 并发按 worker slot 计，**另外给人留一个额外槽位**：满负荷时，人的消息和状态查询仍能插进来，新活抢不走这个位置。
- 一轮结束时后台还有 shell job 或 subagent，工单保持 `working` 而不是「等待」；30 分钟后 shell job 被 kill，subagent 可以继续跑，结果在下一轮读。
- 报告只有六种：`progress` / `waiting` / `ready` / `blocked` / `failed` / `dropped`。工单处于哪个阶段是从报告和输入**推导**出来的，不是执行器自己声明的——所以重启、换执行器之后状态仍然对。

## 面板只显示要人处理的事

六个 tab 按工作流排：Overview / Source / Trigger / Eval / Execution / Settings。设计原则里有一条很硬：**健康的状态不占空间**，一个数字只有在会改变你的动作时才出现。

两处细节值得记：

- 被丢弃的消息能一路点到它的工单或 Thread，Source 页会说明是会话不存在了，还是这条 Source 不再监听。
- Prompt 是一等配置，不是散在代码里的字符串。它由团队三节（范围 / 沟通 / 交付）+ 内置片段 + skills 组装；改过的片段标 `changed`，升级后如果默认值变了会标「默认内容已更新」，让你在「保留我的」和「用新默认」之间选一次——而不是静默覆盖你的修改。

## 怎么跑起来

README 不让你照着步骤敲，而是让你对自己的 coding agent 说一句：**读 SETUP.md，帮我把它装起来**。

SETUP.md 是写给 agent 的操作手册，规则挺讲究：一次只问一个问题、每条消息 300 词内、**问的时候不执行**、收齐答案后一次性给出完整计划、确认后才动手、永远不在聊天里索要密钥（需要你自己操作的步骤单独发一条消息，附上要执行的确切命令）。

装之前它会先跑一遍探针：

```sh
node -v; pnpm -v; git --version; tmux -V
python3 --version; gh --version | head -1; dsh --version
gh api user --jq .login
command -v lark-cli
```

硬性前置：Node 22.19+ 或 24+、pnpm、git 2.32+、tmux、Python 3.8+、GitHub CLI 2.48+、DSH 版本落在 `engines.dsh` 范围内。另外 DSH 自己要先配好一个模型 provider，否则装完也没有模型可用。

装完要配四样：

- **GitHub Source**：`owner/name` + 一个**专用的 agent 账号**。别用自己的账号——它写的每条评论、每个提交都会挂在这个名字下。
- **允许名单**：先只放你自己。名单越短，噪声越低。
- **prepare 命令**：给每张票准备目录，通常是 `git worktree`。
- **Delivery requirements**：提交身份、要不要开 auto-merge。默认不开，因为 GitHub 会把合并记在「开启 auto-merge 的人」头上，而这个 agent 不该拥有合并权。

试用方式：让名单内的人在 issue 里评论 `@<agent login> <请求>`，一分钟左右 Overview 里出现一张工单。

## 哪里会卡

**一、得先有 DSH，而且它还是 alpha。** 所有 peer 依赖锁在 `^0.2.1-alpha.2`，这个包只能作为 DSH 的 bundle 运行。没有 DSH，就没有面板、没有会话、没有模型。

**二、一个仓库、一个账号、一份状态。** 不是面向组织的服务。要接第二个仓库，就再起一套；agent 账号、状态目录、SQLite 文件都是单份的。

**三、文章里的东西，原型里没有。** 存算分离（执行循环在云端、本地只留轻量 daemon）、独立 Watchdog 会话、异步 ReAct 的双工改造，在这 236 个文件里找不到对应实现。README 自己写着：文章里讨论的部分设计是未来方向，本原型没有实现。所以拿它去验证文章里那组调度数字（约 300 条消息、其中约 20 条是工作请求；完成时间 p50 12.4 分钟、p95 15.7 分钟）是错位的——那是合成负载下评调度能力的实验，不是这份代码的跑分。

**四、安全边界是约定，不是隔离。** 执行器用 operator 的 OS 用户跑命令，不经过审批；`blocked commands` 只在「按名字调用」时失败，文档自己写了「用绝对路径照样能执行」。这些包装和目录给的是默认值，不是沙箱。要跑，就放在一台你愿意让它乱动的机器上。

**五、数据只增不删。** 单文件 SQLite，schema 版本只增不减，文档承认「数据无限增长，暂无删除机制」。长期跑要么定期归档，要么接受文件慢慢变大。

**六、0 issue 不代表没问题。** 一天 4.3k star、398 fork、0 open issue，这个组合更可能说明「还没人认真用」，而不是「没有 bug」。代码自己承认风格与工程实践可能不一致。

## 一点判断

它真正回答的问题不是「agent 能不能干活」，而是**「它动手之前谁批准、批准到哪一步、批准过期了怎么办」**。把授权做成带 Policy 版本的对象、恢复前用今天的规则复核一遍、改规则时只通知不吊销——这三件事，比任何「请确认」的弹窗都扎实。多数 agent 项目的权限模型是「一次点击换一次执行」，这里的权限模型是「一条记录可以被追溯、被复核、被吊销」。

第二件值得记的是那个默认值。**`observe` 模式让主动性变成可审阅的**：先记录它本来会接哪些活，翻一遍 Decision，再放开。这把「信任模型」换成了「审阅行为」，顺序反了就会出事。

但别把它当成能装进团队的工具。窄是刻意的——一个仓库、两种 Source、一种语言的面板、一套状态。它更像一份可运行的参考实现，要抄的是准入表、Mandate + Policy 版本、`observe` 模式这三样，而不是它现在的能力。

## 链接

- [仓库](https://github.com/deepseek-ai/dsh-superagent-prototype) · [SETUP.md](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/SETUP.md)
- 设计文档按顺序读，每篇只依赖前面的：[000 哲学](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/000-philosophy.md) → [001 领域模型](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/001-domain.md) → [002 授权](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/002-authorization.md) → [003 执行](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/003-execution.md) → [007 架构](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/007-architecture.md)
- 真打算部署，先读 [006 部署与排错](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/006-deployment.md)
- [DeepSeek Harness](https://www.deepseek.com/en/harness/)
