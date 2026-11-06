---
title: "ThinkRail 0.3.2：把「再确认一次」删掉，把按键还给输入法"
description: "JetBrains 11 月 6 日放出 ThinkRail 0.3.2，30 条变更里 21 条是修复：中文输入法的按键所有权、一个 git 卡死拖垮所有窗口、多此一举的 Review 页被一并收拾，pi 同步升到 1.5.0。"
createTime: 2026/11/06 19:56:08
date: 2026-11-06
tags:
    - ThinkRail
    - JetBrains
    - Agent
    - 开源
---

# ThinkRail 0.3.2：把「再确认一次」删掉，把按键还给输入法

2026 年 11 月 6 日 09:26 UTC（北京时间 17:26），JetBrains 放出 ThinkRail `v0.3.2`（提交 `1bc1a9b`），距 `v0.3.1` 不到五天。这是 0.3 线的第三个 stable 版本。

先说结论：**这是一版几乎没有新功能的稳定化版本，但如果你用中文输入法，它大概是 0.3 线里最该升的一个。**

30 条变更里 21 条是 `fix`，3 条 `feat`，其余是 chore、ci、test 和文档。11 位首次贡献者参与，接近一半的 PR 来自仓库外部。它没有 0.3.1 那种「自带模型、自带 pi 包、自带字体」的漂亮功能清单，力气全花在把已经做出来的东西修到能用。

| 项目 | 内容 |
|---|---|
| 版本 | `v0.3.2`（stable，非 prerelease） |
| 发布 | 2026-11-06 09:26 UTC，提交 `1bc1a9b` |
| 基线 | `v0.3.1`...`v0.3.2`，共 30 条变更 |
| 节奏 | 0.3.0（10/29）→ 0.3.1（11/1）→ 0.3.2（11/6），均为 UTC；nightly 0.4.0 同期在跑 |
| 依赖 | `pi` 升到 1.5.0（11 月 2 日发布） |
| 产物 | 21 个：5 平台桌面包 + CLI 二进制 + 增量更新清单 + `SHA256SUMS` |
| 许可 | Apache License 2.0，JetBrains incubator 项目 |

## 最该先看的一条：把按键还给输入法

`fix(web): let an active IME own Enter, Escape and arrows in every text field`（[#879](https://github.com/JetBrains/thinkrail/pull/879)）名字平淡，内容却决定了中文、日文、韩文用户能不能正常用这个 IDE。

之前的 `#384` 只修好了聊天输入框。其他所有文本框仍然把 IME 正在占用的按键当成命令：用拼音打 `nihao`，按 Enter 选词，结果把 `nihao` 提交成了一条 TODO、一条 Plan 任务，或者一次重命名；按 Escape 取消候选词，重命名直接被取消、刚打的字也没了。Ask 卡片的 Other 字段里，↑/↓ 移动的是问卷焦点而不是候选词。更麻烦的是对话框——Radix 在 document 级监听 Escape，且不看 composition 状态，所以登录提示、新建工作区、模型选择器都会在选词的瞬间关掉。

这次的规则只有一句：**只要 IME 拥有这个键，Enter、Escape、方向键、Tab 和快捷键都归输入法**，只有后面那次普通按键才触发控件自己的行为。技术上要处理 `isComposing`，还要处理 `compositionend` 之后遗留的那一次 `keyCode 229`。

实现上有两个决定比修 bug 本身更值钱：

- 守卫放在 `@thinkrail/ui/keyboard` 的 `isImeComposing`，app、resource-renderers 和 ui 基元共用，删掉了此前散落在 `prompt` 和搜索面板里的两份私有拷贝；
- `DialogContent`、`DialogPanel`、`PopoverContent` 在**基元层**把调用方的 `onEscapeKeyDown` 统一包一层 `yieldEscapeToIme`，Radix 的文档级监听不会再误关弹层，34 个调用点一个都不用改。

还加了一道源码扫描单测：带文本框又有键盘 handler 却不用这个 guard 的文件，直接让构建挂掉。allow-list 里只留两条，并写明理由。作者也明确划了边界：全局 `Mod+K` / `Ctrl+R` / `Mod+W` 属于 app 级组合键，不归 IME 管；xterm 自己的 229 处理是另一套规则，保持原样。

一个 bug 从「只修 Composer」变成「规则下沉到 UI 基元 + 用测试防回归」，这是这版里最像正经工程动作的一笔。

## 把多余的确认页删掉

多问题的 `ask_user_question` 卡片，答完最后一题还要进一个 **Review & submit** 页。而这一页显示的东西，问题页和选项 chip 上的已答标记已经全都有了——每轮多一次点击，零信息增量（[#1149](https://github.com/JetBrains/thinkrail/pull/1149)）。

改完：第 1 到 N-1 页仍是 **Next →**，最后一页直接是 **Submit**，确认最后一题的 Enter 就是提交。部分提交保持静默，没答的题按「未回答」交给模型，chip 上本来就显示缺口。单选卡片不变。终端问卷没有按钮，末页对应加一行 **Submit answers**；一题没答时它只提示、不发送。顺带清掉了所有语言包里 5 个不再使用的 `tools.ask.*` review key。

同一方向的还有几条：订阅额度报错时直接给出 usage 页和 provider settings 的链接（#1175），报错文案里「不是引用」的对象从 header 改成 header 值（#1206）。都是把「用户自己猜下一步」换成「界面告诉你下一步」。

agent 已经问了一轮问题，就别再让人确认一遍自己刚答过什么。这个取舍我挺买账。

## 服务端：一个 git 卡住，所有窗口一起卡

`fix(server): bound every sync git call and move hot reads off the loop`（[#1015](https://github.com/JetBrains/thinkrail/pull/1015)）是这版技术上分量最重的一条，尽管标题只是个 fix。

同步的 `git()` / `gitBytes()` 没有超时，而同步 spawn 会占住宿主**唯一的**事件循环。`core.fsmonitor` 卡住、挂载点掉了、锁被占、hook 慢，任何一个都足以让 ThinkRail 的所有窗口停止响应。作者用包了一层 `sleep 5` 的 git 复现：一个 100 ms 的定时器在这 5 秒里 tick 了 **0 次**。当时有 35 个同步调用点，分布在 6 个 server 文件里。

做法：

- 每个同步 git 调用默认 10 秒 deadline；整树读取和 `worktree remove` 单独给 `SLOW_GIT_TIMEOUT_MS`（5 分钟）；
- 到点先发 `SIGTERM` 让 git 清掉 `.lock`，再对整个进程组 `SIGKILL`，把 hook、filter、credential helper 一起收走；
- 超时默认抛 `GIT_TIMEOUT`，**绝不**返回 `null` 或 `[]` 被上层误读成「没有 remote」「detached HEAD」「不是仓库」，也不在真实仓库上误弹 `git init`；需要自己处理超时的调用方得显式写 `onTimeout: "return"`；
- 请求路径上的热读改走 `gitAsync`，连事件循环都不占；untracked 行数按每文件 2 MB、每次调用 32 MB 封顶。

验收标准写得很实在：卡住的 git 只让**一个**请求在 10 秒后失败，切到别的标签页开文件仍然秒回。

同方向还有一串：worktree 清理保持异步（#1174）、指向 in-worktree 目录的符号链接按目录列出（#1118）、`githubSlug` 从解析后的 remote 推导（#1119）、窗口断连期间被删掉的 workspace 重连时丢弃（#1195）、新 chat 使用 pi 配置的默认模型（#1161）、逐文件 review 的 chat 路由恢复（#1140）。

这些都不进功能清单，但它们决定「同时开五个 workspace 各跑一个 agent」是不是真的能干。把「一个坏仓库拖垮整个 app」变成「一个请求报错」，比加十个新按钮更能说明项目过了玩具阶段。

## 一堆 1% 的边界

剩下的修复看着零碎，主题却很一致：**别在边界上把用户输入吞掉**。

- **Unicode**：终端截断输出不再切在字符中间（#1186）；Windows 文件夹选择器保留 Unicode 路径（#1207）；在 ftyp 里识别 AVIF compatible brands（#1185）。
- **数字与路径**：LFS 文件大小四舍五入到 1024 时进位到下一个单位（#1139，0.3.1 刚修过图片的 1024 KB → MB）；pi-dag 不再往文件系统根目录创建存储目录（#1167）。
- **配置与错误**：`THINKRAIL_PORT`、`THINKRAIL_WEB_PORT` 改成严格十进制解析（0–65535），非法值告警后回退默认值（#1156 / #1190）；项目 bootstrap 失败时把 git 的原始错误显示出来，且对 untrusted 仓库不再提供 init（#1189）。
- **桌面与网站**：主窗口启动居中（#1133）、菜单命令的 latch 到期释放（#1200）、CLI 安装选项卡不再被滚动条裁切（#1220）、release 构建里 Electrobun 工具链下载失败自动重试（#1145）。

IME、Unicode、路径、端口，全是同一类问题。但要提醒一句：**端口严格解析是行为变化**，原先靠环境变量传个奇怪值还能跑起来的脚本，升级后要改。

## pi 1.5.0 与分发

`#1160` 把 `pi` 升到 1.5.0（11 月 2 日发布，带来扩展更新 changelog 和更快的流式解析）；`#1178` 同步把 ask-user-question 提到 0.2.0、visualize 提到 0.2.1；`#1162` 给发布到 pi.dev 的包加了视频预览。

这里值得停一下：ThinkRail 不自己造 agent，它是「给 pi 套了一层真正的 IDE」。README 的说法是在 pi 之上做隔离的 git worktree 工作区、living specs 和可复用 skills，并且直接读你现有的 `~/.pi/agent` 配置。所以上游一动，ThinkRail 就得跟着动——pi 11 月 2 日发版，11 月 6 日就进了 stable，四天。

产物侧覆盖 macOS 14+（arm64 / x64）、Windows x64、Linux（x64 / arm64，glibc 2.38+ / Ubuntu 24.04+），每个平台都有桌面包、CLI 二进制和 `*-update.json` 增量更新清单，全部带 `SHA256SUMS`。桌面版在 **Settings → Updates** 里要你点 **Install & Restart** 才真正安装，不会偷偷覆盖。命令行安装：

```bash
curl -fsSL https://raw.githubusercontent.com/JetBrains/thinkrail/main/install.sh | bash
```

Windows PowerShell 用 `powershell -c "irm https://raw.githubusercontent.com/JetBrains/thinkrail/main/install.ps1 | iex"`。脚本会校验 SHA-256，装完 `thinkrail ~/code/my-repo` 直接打开项目。

## 11 位首次贡献者

30 条变更里，有 14 条来自 11 位第一次给这个仓库提 PR 的人。很多修复一看就是「自己踩到了，顺手补上」：LFS 的 1024 进位、Windows Unicode 路径、窗口启动居中、网站滚动条裁切。

这是开源 IDE 早期最健康的信号之一——有人愿意为一个只影响自己那台机器的小问题写测试、写 SPEC、走完整个 e2e。JetBrains 这边的门槛其实不低，`#879` 的核对清单里列了 lint、typecheck、8 个 e2e 分片、631 个测试和多份 SPEC 更新。

另一面也别忽略：0.3.2 几乎没有新功能，说明团队把精力放在收口上，而 `v0.4.0-nightly.6` 就在同一天（11 月 6 日 06:56 UTC）照常发布。稳定线只收修、nightly 继续冲，是典型的双线节奏。`#1152` 那条「第十个 prompt 之后求一次 GitHub star」也很有初创项目的气质——坦率，但确实是在要增长。

## 该不该升

1. **中文 / 日文 / 韩文用户：升。** IME 修复是决定性的，而且覆盖 34 个文件、下沉到 UI 基元，不是只补一个输入框。
2. **多 workspace 重度用户：升。** git 调用的超时与异步化，直接决定会不会整个 app 卡死。
3. **自部署 / 写脚本的：先看端口。** 两个端口变量现在严格解析；如果你在 Settings → Environment 里锁了 pi 的配置目录或版本，也要先确认和 1.5.0 的兼容。
4. **想看新功能的：可以等 0.4.0。** 这版是纯粹的债清理，三条 feat 里没有一条值得单独为它升级。

一个必要的保留：README 顶上挂着 JetBrains incubator 徽标，0.3.x 这个版本号本身也说明还在早期。stable 一周连发三个、同时跑 nightly，这里的「stable」更接近「当前可用」，不是「长期支持」。真要放进团队日常工作流，先拿一个不重要的仓库试。

## 参考来源

- [Release v0.3.2 — JetBrains/thinkrail](https://github.com/JetBrains/thinkrail/releases/tag/v0.3.2)
- [完整变更对比 v0.3.1...v0.3.2](https://github.com/JetBrains/thinkrail/compare/v0.3.1...v0.3.2)
- [README（v0.3.2）](https://github.com/JetBrains/thinkrail/tree/v0.3.2)
- [#879 IME 组合输入修复](https://github.com/JetBrains/thinkrail/pull/879) · [#1015 同步 git 调用超时](https://github.com/JetBrains/thinkrail/pull/1015) · [#1149 末题直接提交](https://github.com/JetBrains/thinkrail/pull/1149)
- [Release v0.3.1](https://github.com/JetBrains/thinkrail/releases/tag/v0.3.1) · [Release v0.3.0](https://github.com/JetBrains/thinkrail/releases/tag/v0.3.0)
- [pi（earendil-works/pi）](https://github.com/earendil-works/pi)
