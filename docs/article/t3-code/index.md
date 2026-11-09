---
title: "T3 Code：不造 Agent，只做所有 Agent 的遥控器"
description: "不跑模型、不造 Agent，只用一个本地服务端把 Claude Code、Codex、Cursor 等七个 CLI 收进同一界面，还能用手机远程审批。T3 Code 九个月涨到 5.3 万 Star，本文拆它的架构、远程与 MCP 设计，以及 v0.1.x 阶段该有的警惕。"
createTime: 2026/11/09 22:01:33
date: 2026-11-09
tags:
    - T3 Code
    - Agent
    - AI 编程
    - 开源
---

# T3 Code：不造 Agent，只做所有 Agent 的遥控器

2026 年 11 月 9 日，`pingdotgg/t3code` 的 GitHub 页面是 53,406 个 Star、10,099 个 Fork、5,967 个 open issue，提交数 9,818，版本号还停在 `v0.1.8-nightly`。仓库 2 月 8 日才建，TypeScript 写的，MIT 协议。

一个 0.1.x 的项目拿到五万多 Star，通常意味着它踩中了某个具体的痛点。T3 Code 踩中的不是「Agent 不够强」，而是反过来：Agent 已经太多了，却没有一个地方管得住它们。

## 它不是 harness，是控制面

README 给的定义是 `agent harness control surface`。这个词很容易被读成「又一个 Agent 框架」，所以 FAQ 专门辟谣：

> No. A harness is what turns an LLM into an agent: it gives the model tools, a way to call them, runs them, and hands the results back.

harness 是把大模型变成 Agent 的那层——给工具、执行调用、把结果喂回去。Claude Code 是 TUI 界面加底下的 Anthropic Agent SDK，Codex 是 app 加 Codex App Server，两者都是「界面 + harness」的拆分。T3 Code 用这些 harness，自己不是 harness，离开它们也跑不起来。

FAQ 里那个比喻比定义更清楚：**Chef = LLM，Kitchen = harness，T3 Code = 让你自带厨房的餐厅**。它提供的 MCP 是递给厨房的一本菜谱，「但你不吩咐，主厨不会自己翻开」。

架构文档把这条边界写得更硬：执行必须留在拥有工作区的那个环境里，Web、桌面、手机通过带认证的 RPC 控制它；provider 进程、终端、Git、项目文件全归 server，客户端只提供平台服务和 UI；桌面 App 虽然内置了一个 server，渲染进程照样得走同一条边界，不许拿自己的文件系统或凭据顶替。RPC 契约放在 `packages/contracts/src/rpc.ts`，是「独立版本化的客户端与服务端」之间的分界——文档里还有一句很克制但很关键的话：socket 通过认证，不等于这个 socket 上的每个方法都被授权。

再往下是事件溯源式的一套：Orchestrator 只做决定、不碰文件系统和 provider，`EventSink` 在一个数据库事务里同时提交事件、投影、命令回执和 outbox 副作用，`EffectWorker` 才去真正执行。所以一条命令的确认，含义是「意图已落库」，不是「活已经干完」。Checkpoint 用隐藏的 Git ref 保存工作区状态，不往用户分支上塞 commit。这些设计都不是为了做一个好看的界面，而是为了让「断线重连、多端同时看、Agent 跑一半机器重启」这些事有确定的答案。

## 七个 Agent，一个入口；订阅还是你自己的

README 明确列出的 provider 有七个，前提是它们已经装在那台跑 server 的机器上并完成认证：

| Agent | 认证方式 | 备注 |
| --- | --- | --- |
| Claude Code | `claude auth login` | 走 Anthropic Agent SDK |
| Codex | `codex login` | |
| Cursor | `agent login` | Cursor CLI |
| Grok Build | `grok login` | xAI |
| OpenCode | `opencode auth login` | |
| Google Antigravity | 设置里启用 + Google 登录 | 不需要 CLI |
| fx | `fx login` | 必须在跑 server 的那台机器登录 |

文档里还能看到 Kiro、Pi、Muse Code 和 ACP Registry 的门类，比 README 的清单更长。据早期版本的 README，项目起步时只接了 Codex 和 Claude，后面挂着一句 `more coming soon`——九个月后，这个「soon」变成了七个以上。

最容易被忽略的坑是：T3 Code 不替你装 Agent，也不管你的账单。FAQ 说得很直白，「There's no way to pay us to use T3 Code」，软件本身免费、MIT，你继续按各家的订阅付费。CLI 装了但没出现在列表里，十有八九是它不在**服务端**的 PATH 上（不是手机），或者忘了先 `codex login`。

权限也不是一刀切。composer 里按 thread 选，四档分别是 Supervised（命令和文件改动都要批）、Auto-accept edits（自动准文件改动）、Auto（交给 provider 的自动审查）、Full access（不弹确认），**初始默认是 Full access**，建议在 Settings → Threads 里先改掉。不同 provider 的实现有落差：Muse Code 只给 Supervised 和 Full access 两档，fx 没有 Auto-accept edits 和 Full access，Grok 没有 Auto-accept edits；Claude 即使在 Full access 下，也可能因为自身设置继续发审批请求。管理员还能用 managed policy 给整台机器设上限。

## 真正让它出圈的是「远程」

Theo 在 FAQ 里给了个数字：「Less than 5% of my prompts run on my laptop.」——他 95% 以上的 prompt 都发给别的机器上的 Agent。这句话大概就是 T3 Code 存在的原因：Agent 在家里的工作站上跑着，人已经出门了，而它正卡在一个权限确认上等你。

远程不是外挂，是原生能力。几条路并存：

- **T3 Connect**：`t3 up` 后选它，无需路由器端口转发。流量走你机器上的 `cloudflared` 隧道，官方 relay 只负责牵线，文档明确说不代理 HTTP 与 WebSocket 会话。免费账号可连 3 台机器，手机和浏览器不占名额；挂 T3 Chat 付费账号后升到 Pro 10 台、Premier 100 台。
- **局域网直连**：`t3 up --lan` 或 `t3 serve --lan`，`t3 pair` 打印一次性配对链接和二维码，`t3code://pair` 也能直接拉起桌面 App。
- **Tailscale HTTPS**：`t3 serve --tailscale-serve`、`t3 pair --tailscale`，配对地址形如 `https://machine.tailnet.ts.net/`。
- **SSH**：桌面 App 里 Add environment → SSH，自动在远端拉起或复用 server 并开端口转发，provider 凭据和 Agent 工作留在远端。
- **Hosted web app**：[app.t3.codes](https://app.t3.codes) 直连你的 server，但要求 HTTPS 端点——文档特意提醒，托管配对链接不会把不可达的后端变可达，也不会把 HTTP 变成 HTTPS。

多路由的处理挺细：客户端按第一条能应答的路由连，人在外面时会短暂试一下 LAN 地址然后跳过；连着后每隔一分钟、网络变化时回查前面的路由，一到家就自动切回局域网。通过 T3 Connect 连上时还会学习这台机器当前的 LAN 与 Tailscale 地址并加成路由，所以「配对一次，回家走局域网」是自动的。

代价是安全边界要自己扛。文档原话：在局域网和 tailnet 上，**配对码就是唯一把别人挡在外面的东西**；「Treat pairing URLs and authorization codes as passwords. Do not include them in screenshots, logs, or bug reports.」而且不带 `--scope` 生成的配对 token 默认拿到全部权限，包括管理访问和 T3 Connect。想给只读客户端，得显式写：

```sh
t3 pair --scope orchestration:read --scope relay:read
```

## 反过来：别的 Agent 也能来调它

T3 Code 自己还开了一个 MCP server，地址是环境地址加 `/mcp`。这意味着 Claude Code、Codex、ChatGPT 这些**不是 T3 Code 启动的** Agent，可以反过来读项目和 thread、发起并追问任务、查可用模型：

```sh
claude mcp add --transport http t3 https://<environment-address>/mcp
claude mcp login t3
```

首次连接走 OAuth 登录页，需要输入配对码或由已登录的浏览器批准，然后选权限档位：Read only / Supervised 到 Full access，默认 Auto。一次登录有效 30 天，可在 Settings → Sharing & access 里随时吊销；对云端 Agent（比如 ChatGPT）必须用 T3 Connect 地址，纯 HTTP 的局域网地址能发现环境但完成不了登录。在宿主机上还有更直接的 `t3 thread start . "..." --wait`、`t3 thread send`、`t3 thread show`，走同样的工具但不需要登录。

于是它的位置变得有点微妙：往下接管各家 harness，往上又能被别的 Agent 当作工具调用。它占的是中间那层「线程、审批、编排」，而不是模型或代码生成。

## 上手只要三行命令

```sh
curl -fsSL https://t3.codes/install.sh | sh   # Windows 用 irm https://t3.codes/install.ps1 | iex
t3                                              # 启动 server 并打开本地 Web App
t3 service install                              # Linux / macOS 后台常驻
```

只想试一次就 `npx t3@latest`；更新用 `t3 update`，完整参考在 `t3 --help`。桌面端还铺满了各家的包管理器：`winget install T3Tools.T3Code`、`scoop install extras/t3code`、`brew install --cask t3-code`、`sudo apt install ./T3-Code-*.deb`、AUR 的 `t3code-bin` / `t3code-nightly-bin`，以及 nixpkgs。

一个最小工作流大概是：在项目目录开一个具体的小任务（`t3 thread start . "..."` 加 `--worktree` 让它跑在独立工作区），出门用手机看进度、批权限、补一句修正，回来审 diff 再合。改代码的任务尽量挂 `--worktree`，是这个阶段最划算的一条习惯。

## 火得快，也确实还早

README 里那节标题叫 "Wait, what are you selling me?"，回答只有一个词：`Nothing.` 团队说做过 Codex 桌面端、Conductor、Claude Desktop、Cursor Glass 的功课，都不够好，于是自己要一个「performant, remote-ready, and truly open」的东西；「If we ever go the wrong direction, we want you to have everything you need to fork and build the editor that you want.」不卖东西、可 fork，是它给自己的定位。

但同一份 README 下面还有另一句：**"We are very very early in this project. Expect bugs."** 配套的几条现实约束，值得在装之前看清：

- 版本是 `v0.1.x`，nightly 一天发好几次，open issue 近六千；官方基本不接受外部贡献，小修可能看，大功能 PR 不会收。
- 没有独立文档站，全部说明躺在仓库 `docs/` 目录里。
- 数据与隐私：代码和 prompt 从你的机器直接到 provider，不经过 T3 的服务器；只上报 provider、模型、token 总量这类用量事件，不含 prompt 和文件内容，可用 `T3CODE_TELEMETRY_ENABLED=false` 关掉。
- 已知上游问题：Claude 的 5 小时限额会被 Agent SDK 消耗得更快，FAQ 里 Theo 确认是 Anthropic 侧的 bug，已上报，不影响周限额。
- 平台缺口：Intel Mac 没有 `t3` 二进制，只能用桌面 App；Windows 没有后台服务，得让桌面 App 或终端里的 `t3 serve` 一直开着，而关掉桌面最后一个窗口就会停掉本地 server。
- T3 Connect 依赖中继，FAQ 对掉线的建议是「你自己上 Tailscale 兜底也不会让我失望」，作者本人就这么干。

## 一个判断

这半年 AI 编程工具的竞争，正在从「谁家模型 / harness 更强」往上挪一层：会话、审批、远程、多端状态，这些原来散在终端窗口和 tmux 分屏里的东西，开始被单独做成产品。T3 Code 押的就是这一层——订阅、模型、harness 全留给别人，自己只占住控制面，还把不收费、可 fork 写进 README，算是把锁定风险主动推了出去。

反过来说，风险也全在这一层：它的价值建立在各家 provider 的官方接口、订阅条款和登录状态之上。FAQ 里专门解释「会不会因为用它被封号」，也专门解释 Claude 限额异常，已经说明这种依赖有多实在。上游一变脸，最先受影响的不是模型，是这个遥控器。

所以我的建议跟多数早期工具一样：花一个下午把它跑通，先用本地、先别开常驻服务，让它在有备份、有测试的仓库上干活，别急着把它当生产基建。它现在最值得看的，其实不是那五万多个 Star，而是架构文档里那句「执行留在拥有工作区的环境里」——这个边界划对了，剩下的 bug 都还有得修。

## 参考

- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) · [t3.codes](https://t3.codes) · [app.t3.codes](https://app.t3.codes)
- 仓库文档：[README](https://github.com/pingdotgg/t3code/blob/main/README.md) · [FAQ](https://github.com/pingdotgg/t3code/blob/main/docs/user/faq.md) · [Remote access](https://github.com/pingdotgg/t3code/blob/main/docs/user/remote-access.md) · [Outside agents](https://github.com/pingdotgg/t3code/blob/main/docs/user/outside-agents.md) · [Permission modes](https://github.com/pingdotgg/t3code/blob/main/docs/user/permission-modes.md) · [Architecture](https://github.com/pingdotgg/t3code/blob/main/docs/internals/overview.md)
- [What is a harness?](https://t3.gg/blog/post/what-is-a-harness)
- 文中 Star、Fork、issue、提交数与版本号取自 2026-11-09 的仓库页面与 GitHub API
