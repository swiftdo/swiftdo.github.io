---
title: openbot：把 agent 当同事排班，先接受它没有安全边界
description: "本地优先的 AI 团队工作台：每个 agent 独立 workspace，有队列、文件互传、嵌入浏览器，agent 之间能互相发消息。但它自己也写得很清楚——以 danger-full-access 运行，且许可证是非商业。"
createTime: 2026/10/31 22:55:00
---

> OpenBot 的自我定位是「persistent AI teammates」——不是更聪明的助手，是几个长期在岗的同事。

这个说法听起来像营销，但它确实把「多个 agent 一起干活」需要的那些基础设施都做出来了：各自的办公室、任务队列、文件传递、互相发消息、以及一个能看见谁在干什么的频道。也正因为做得太实，有些代价必须提前说。

| 项目 | 内容 |
|---|---|
| 类型 | 应用（本地优先的桌面工作台 + 自托管服务器 + 手机端） |
| 仓库 | [nightly-labs/openbot](https://github.com/nightly-labs/openbot) |
| 技术栈 | Electron + SolidJS + Bun；账号侧 Cloudflare Workers + D1 |
| 许可 | **PolyForm Noncommercial 1.0.0**（0.1.11 及之前是 Apache-2.0） |
| 热度 | 4.3k star / 424 fork / **420 open issue**（2026-10-31 快照） |
| 状态 | v0.56.0（2026-10-30），两个半月、56 个小版本，自称 development preview |

## 和 thinkrail 是同一类，赌的方向相反

这个集合里另一款工作台是 JetBrains 的 thinkrail。两家都在做「agent 的家」，但重心正好相反：

| | thinkrail | openbot |
|---|---|---|
| 核心单位 | 一个 agent 会话 | 多个 agent 组成的团队 |
| 隔离方式 | 每个任务一个 git worktree | 每个 agent 一个 workspace 目录 |
| 你扮演 | 审代码的人 | 派活的人 |
| 解决的问题 | 变更怎么审、意图怎么留 | 任务怎么排、agent 之间怎么传话 |

thinkrail 赌「更强的单兵 + 更好的审查」，openbot 赌「更顺的多 agent 协作」。选哪个，取决于你日常是「一个人跟一个 agent 磨一件事」，还是「同时压着五件事、希望它们自己排队」。

## 它给了什么

功能列表很长，但真正构成差异的是这几条：

**每个 agent 一间办公室。** 独立 workspace（`~/OpenBot/Agents/<agent-id>`）加一个共享目录（`~/OpenBot/Shared`）。agent 有独立会话、独立模型、独立推理强度、独立通知、独立面板状态。

**队列是 FIFO 的，且崩溃安全。** 支持暂停、恢复、取消；消息落地在 SQLite 里（事件日志 + 读投影），重启不丢。

**agent 之间能互相说话。** 消息、回复、表情、图片、托管文件传输。文件传输带 `.openbot-transfer.json` 清单，记着归属、接收方、大小和 SHA-256。

**频道里有一个「任务 owner」。** 共享频道支持显式委派、共享历史，以及 Stop / Resume / Reassign / Archive / Restore 一整套控制。这是「团队」和「多个聊天窗口」的区别所在。

**内置浏览器 agent 能用。** 可以打开、检查、操作；但它跑在独立的沙箱 session 里，**拿不到 `window.openbot`，也够不到托管的本地附件**。

**上下文会自动压缩。** 每个 agent 单独监控，长对话耗尽窗口之前先压。

Provider 侧支持得很宽：本地的 Codex App Server、Claude Code、Grok CLI，加上走 ACP 的 OpenCode、Gemini、Cursor CLI、Cline CLI。还有一套本地 skills 库（`create_skill` / `install_local_skill` / `revise_skill`，改版要带版本号、保留旧版）。

## 最该先看的一段：它没有安全边界

README 顶部有一个 WARNING，措辞比大多数项目硬：

> OpenBot 目前是开发预览。agent 以 `danger-full-access` 和 `approvalPolicy: never` 运行。在首次启动的显式同意之后，它们可以读写文件、执行命令、访问网络、控制嵌入式浏览器，**不需要逐次确认**。

`SECURITY.md` 里还有一句更直白的：

> 完整的本地访问是当前明确的产品决策，**不是一条安全边界**。

这句话值得停下来想一下。前几篇工具都在加边界：thinkrail 用 worktree 把你的分支隔离起来，impeccable 把检查挂到编辑钩子上，karpathy 那份文档要求模型「只碰必须碰的」。openbot 反过来——为了让 agent 真的能干活，它把边界拿掉了，把判断权交给「你选择让它做什么任务」。

这也解释了它安全报告的重点为什么写成那样：不欢迎「agent 删了我的文件」这种，而欢迎「远程内容能否触达 Electron 权限」「托管附件路径能否逃出根目录」「IPC 发送方校验能否绕过」「agent 能否做超出上述范围的事」。前一类是设计如此，后一类才是 bug。

## 值得抄的架构：控制面在云上，数据面在 P2P

一台机器的结构很简单：

```text
Electron main
├── 本地 Codex App Server 进程（stdio JSONL）
├── 本地 Claude Agent SDK 会话（stream JSON）
├── SQLite 命令日志 + 读投影
├── 类型化 IPC
└── 沙箱 WebContentsView 浏览器宿主
    ↕ 类型化 preload 桥
SolidJS renderer
```

真正有意思的是「把本机变成一台服务器给团队用」这部分：

- 发布之后，**Team API 仍然只监听 localhost**；
- 一个隐藏的、沙箱化的 Electron 页面负责把它通过 WebRTC 接出去；
- Signal 只传连接建立的消息，团队数据走直连 DataChannel，直连打不通才回落到自建的 coturn；
- Cloudflare 只存账号、配置、成员、邀请、逻辑会话记录和公开资源，**不碰聊天、文件、命令和远程桌面画面**。

这套「控制面走云、数据面走 P2P」的选择，和大多数「把一切塞进 SaaS」的做法是反的。代价是要维护 coturn、证书、TURN 回落这些脏活——所以它同时也提供了 Docker 和整机安装脚本。

## 三种跑法

**桌面**：macOS 13+、Windows 10+、Linux AppImage。装完在引导里选 provider，它会自己下载并 pin 对应的 CLI 版本。

**一台常开的机器**（VPS / 家里的服务器）：

```bash
curl -fsSL https://raw.githubusercontent.com/nightly-labs/openbot/main/scripts/install-server.sh | sudo bash
sudo openbot login
```

之后用桌面端、iPhone app 或 `openbot.run/app` 连过去。

**Docker**：

```bash
curl -fsSLO https://raw.githubusercontent.com/nightly-labs/openbot/main/docker/seccomp.json
docker run -d --name openbot --restart unless-stopped \
  --security-opt seccomp=seccomp.json --security-opt no-new-privileges:true \
  --shm-size 1g --stop-timeout 60 -v openbot-data:/data \
  ghcr.io/nightly-labs/openbot:latest
docker exec -it openbot openbot login
```

注意那个 seccomp 文件不是装饰：默认 seccomp 会把 Electron 的沙箱关掉，他们专门配了一份让沙箱能留着的。

还有 Nix flake，但仓库明说「OpenBot 不是自由软件」，nixpkgs 里要 `allowUnfree` 才装得上。

## 坑

### 1. 许可证是「源码可见」，不是开源

PolyForm Noncommercial 1.0.0：可以**非商业**地使用、修改、分发；**商用需要单独授权**——在 Settings → Billing 里买（Starter 单人版、Team 2–10 人），或者发邮件。0.1.11 及之前的版本才是 Apache-2.0。

这个集合里其他项目都是 MIT 或 Apache-2.0，只有它是这条路线。放公司里用之前，先确认自己算不算商用。

### 2. 两个半月，56 个版本，420 个 open issue

版本号已经到 0.56，issue 区有 420 条未关。迭代速度是真的，粗糙也是真的——数据格式、API、界面随时可能变。作者自己也把它标成 development preview。

### 3. Linux 上的摩擦最多

- Ubuntu 23.10+ / Debian 13 上非特权用户命名空间被 AppArmor 限制，**不装 AppArmor profile 就启动不了**；
- 远程桌面只在 X11 会话下能用，Wayland 不行；
- arm64 的 AppImage 不含远程桌面运行时。

### 4. 签名和 SmartScreen

Windows 安装包由 `SYNTHETIFY LABS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ` 签名（对，就是这么长的一串），但较旧的版本没有签名，SmartScreen 仍可能拦。README 建议核对 release checksum 或 GitHub build attestation。

### 5. 贡献要签 CLA

外部贡献合并前要签 Contributor Assignment Agreement，**版权转给 Synthetify Labs**。这跟「开源项目」的常见印象不一样，提 PR 前值得读一遍。

### 6. 没有中文界面

界面语言是英、法、日、葡（巴西）、土耳其。中文用户能用，但整个界面是英文的——对一个主打「团队协作」的产品来说，这会影响团队推广。

### 7. 用订阅跑第三方客户端，条款得自己确认

它复用的是你本机 CLI 的登录态，不复制凭据。但「用 Claude 订阅在第三方客户端里跑」这件事是否合规，README 只给了个链接（`docs/provider-terms.md`）让你自己看。别默认它替你想过。

## 适合谁

| 适合 | 不适合 |
|---|---|
| 同时压着多件事、想让 agent 排队自己跑 | 只想在一个会话里把一件事做完 |
| 有闲置机器 / 愿意自托管一台常开服务器 | 只想装个 App、不想碰 Docker 和命令行 |
| 需要「谁在干什么」有统一视图的小团队 | 公司里合规要求严格（许可证 + 全权限运行两条都卡） |
| 已经在用 Codex / Claude / Grok，想统一到一处 | 主力机上不能出任何意外的人 |

## 一点判断

它解决的不是「agent 够不够聪明」，是**「五个 agent 不打架」**。而这个问题的答案出奇地传统：独立工位、任务队列、显式委派、可查历史、一个能看到全局的频道。这些东西在企业软件里存在了几十年，只是第一次被用在一个会自己动手的「同事」身上。

它最勇敢也最危险的决定，是把安全边界整个拿掉。理由是成立的——边界太严，agent 就只能当聊天机器人；但这个决定把风险完整地转移给了使用者，而且转移得很快：两个半月、56 个版本、420 个未关的 issue。

所以我的建议很具体：**给它一台闲置机器或一个容器**，把 `~/OpenBot` 当成一个半隔离区，别在写着公司代码的主力机上直接开 danger-full-access。它值不值得长期用另说，但在「多 agent 怎么组织」这件事上，它把该踩的坑都踩了一遍，光读 README 就能学到不少。

## 链接

- [仓库](https://github.com/nightly-labs/openbot) · [官网](https://openbot.run/) · [隐私说明](https://github.com/nightly-labs/openbot/blob/main/PRIVACY.md)
- [SECURITY.md](https://github.com/nightly-labs/openbot/blob/main/SECURITY.md) · [架构文档](https://github.com/nightly-labs/openbot/blob/main/docs/ARCHITECTURE.md)
- [自托管服务器](https://github.com/nightly-labs/openbot/blob/main/docs/self-hosted-server.md) · [Docker](https://github.com/nightly-labs/openbot/blob/main/docs/docker.md)
