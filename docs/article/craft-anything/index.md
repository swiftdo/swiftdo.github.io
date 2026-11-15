---
title: "Craft Anything：15 天 3.3 万星，它把逆向工程做成了带证据台账的流水线"
description: "Craft Anything 建仓 15 天拿到 3.3 万星：32 万行 Rust、303 个工具、净室白名单默认拒绝、把「像不像」量成能回灌的数字。本文拆它的证据台账与检查回路，也写清早期 alpha 的缺口——相似度只是代理指标，净室也不是沙箱。"
createTime: 2026/11/15 21:52:04
date: 2026-11-15
tags:
    - Rust
    - 逆向工程
    - AI Agent
    - 开源
    - 工程方法
---

# Craft Anything：15 天 3.3 万星，它把逆向工程做成了带证据台账的流水线

2026 年 10 月 31 日建仓，到 11 月 15 日晚，`storytold/craft-anything`：33,380 个 star、6,754 个 fork、1,039 次提交、7 个版本（最新 `v0.6.1`，11 月 12 日）、369 个 open issue。数据取自 GitHub API，平均每天涨两千多颗星。

定位一句话讲完：**指向任意网站、应用或游戏，说清你要什么，它用真实的检查工具研究原件，让你电脑上的编码 agent 建一个新项目，再把结果与原件比对、迭代收敛。** 纯 Rust，MIT / Apache-2.0 双许可，自称 early alpha。

但它不是第 N 个「一句话生成网站」的壳。真正值得写一篇的，是它把三个通常只活在资深逆向工程师脑子里的东西，变成了代码里的硬约束：**证据**、**边界**、**可测量的收敛**。

## 把「要看多深」钉在第一步

[![Make 界面：选网站 / 应用 / 游戏，填地址，选净室或深度，写下要求，按 Start](/imgs/craft-anything-make.png)](/imgs/craft-anything-make.png)

*它只问你两件事：复刻什么，要什么样。真正定义这个工具性格的是那个默认开着的开关——Clean room。截图来自官方仓库。*

净室（Clean room）模式下它不读原件内部的任何东西：不读代码、不读文件、不读页面源码。它只能像访客一样看——截图、可见文字、量到的布局、颜色、字体、间距、展开的菜单。深度（Deep）模式才拆二进制、反汇编、读 JavaScript。

默认是净室。这一个默认值，决定了后面所有能力的方向：**它要在一只眼睛被蒙住的前提下把事做对。**

## 检查环节才是产品

[![一个网站项目页：start page 96%、/about 91%、Likeness 93%，中间一张审批卡问能不能跑 curl robots.txt，右边列出待回答的问题](/imgs/craft-anything-project-website.png)](/imgs/craft-anything-project-website.png)

*一屏把整件事说清了：分数、审批、疑问。中间那张卡是「我能不能跑 `curl https://example.com/robots.txt`」——"This is outside what the builder may do on its own. Nothing happens until you say so."；右边 Open questions 问的是「原件的 logo 与文案可以复用，还是必须换成占位」。*

构建方是一个 agent，所以每个越界动作都变成一张审批卡，每个它不该替人决定的事都变成一条待回答。而「你这版像不像」，它没有交给模型去主观表态，而是去量。

源码里负责这一轮的是 `crates/ai/src/rebuild/kinds/website.rs`，它算四类东西：

- **文字重合**：两边标题与词的 Dice 系数；
- **结构重合**：区块先后序列的交集（页头、卡片、表单、页脚）；
- **布局**：每段 padding、一行几列、尺寸、颜色、字体逐项对比，并给出「原件用了、你没用」的具体值；
- **感知相似**：缩到 512px、8×8 窗口的 SSIM，走亮度通道逐窗平均；原件里会自己变的区域（轮播、时间戳）先用噪点掩码盖掉。

[![检查回路：原件三种屏宽截图与测量值 → 构建 → 同条件再拍一遍 → 四项度量 → 合成 93% → 够 90% 就绪，不够回灌](/imgs/craft-anything-check.png)](/imgs/craft-anything-check.png)

*一轮检查的完整形状。左边原件和右边构建必须在同屏宽、同页面、同展开状态下被拍下来，四项度量才有可比性；合成分数决定停还是再改一轮。图为本文依据 `website.rs` 与 `web_common.rs` 的实现绘制。*

默认 `good_enough: 90.0`、`max_rounds: 6`。分数不够，就把差异清单连同两边截图塞回给 agent，让它再改一轮。

这里最值得抄的不是分数，是回灌的那段指令。它没说「再像一点」，它按优先级说：先修布局和区块顺序，再修间距、尺寸、颜色、字体和缺件；再修它逐项点名的 padding 与「一行几列」；补上它列出的缺失标题和文案；重建；然后用一两句话说明改了什么。（提示词见 `website.rs` 的拼接处）

一个会自己给分、自己点名、自己限轮数的循环，比「帮我复刻这个网站」这种一次性请求可靠太多。

## 连被检查的东西都要先签合同

网站好办，重新截一遍就是了。应用和游戏不行——你怎么看一个窗口？

它的办法是给构建物定契约。`SCREENSHOT_CONTRACT` 要求生成的程序支持 `--screenshot <file.png>`：正常启动、画约 120 帧、把窗口存成 PNG、退出；而且必须不抢焦点——egui 用 `with_active(false)`、Windows 上加 `AlwaysOnBottom`、Unity 设 `runInBackground = true`，否则检查会打扰你正在做的事。

「构建出来必须能被检查」这条要求写进了给 agent 的 brief：没有这个开关，或者截出来是白图，这轮就不算通过。游戏还要多一层——跑它自己的自检（移动、HUD、碰撞），并对比控制树上的标签集合，报出「原件有的按钮，你的版本没有」。

[![贪吃蛇项目的就绪页：四步全部完成，一个 Play the game 按钮，右侧是「生成图片与模型」开关和「添加原件的图片」](/imgs/craft-anything-project-game.png)](/imgs/craft-anything-project-game.png)

*游戏项目的「就绪」页。右侧那个 Generated assets 开关是要你自愿打开的：拿你自己的 fal.ai 密钥生图与 3D 模型，界面直接标价——一个 3D 模型约 0.65 美元、一张图约 0.15 美元，关掉就用占位素材建成。下面那栏「Add pictures of the original」也说明了一件事：净室模式下，你能提供的越多，它才越可能做对。*

这是我认为整个项目最聪明的一处：**它没有试图去观察一个不可观察的东西，而是改变了被观察者的接口。**

## 证据不是形容词

[![进阶模式工作台：左边函数列表带地址与大小，中间伪 C 反编译，右边证据台账三条带置信度，底部 agent 回答](/imgs/craft-anything-workbench.png)](/imgs/craft-anything-workbench.png)

*左边 `percent_key_pressed 0x401a50 size 64`，中间伪 C 三行就把取余键讲完了，右边三条证据各带一个标签。截图来自官方仓库。*

注意右边台账的第三个词：**Seen it**、**Worked it out**、**Best guess**。它们对应 `crates/evidence` 里三档 `Confidence`：`Observed`（直接从目标读到的字节、头、抓到的请求）、`Derived`（由观测经确定性函数算出来的，比如调用图）、`Inferred`（启发式、命名、模型的解释）。

同一份结构里还有 `Authority`（原件本身 / 我们自己跑的一次 / 历史记录如 HAR / 外部服务 / 人的推断）、`Limitation`、`Coverage`、`Location`。以及一个我特别喜欢的类型 `Unknown`——记录「我们还不知道什么，以及什么能把它敲定」，注释只有一句：**absence is not proof**（没看到，不等于不存在）。

还有一个容易错过的细节：每条证据的 id 是它规范化 JSON 的 SHA-256。作者的注释是「同一次观测永远得到同一个 id，任何对存档的改动都可被发现」。这不是给界面好看用的，这是让台账具备防篡改性质——你没法事后悄悄把「猜测」改成「看到」。

## 净室是一张白名单，不是一句承诺

净室模式的实现只有 208 行，核心就是一个数组：

```rust
/// The tools that run in Clean room, by id.
pub const TOOLS: &[&str] = &[
    "core_session_show",
    "core_evidence_show",
    "core_evidence_browse",
    // …
];

/// Whether `id` runs in Clean room.
pub fn allows(id: &str) -> bool {
    TOOLS.contains(&id)
}
```

白名单一共列了 109 条（里面还包含 AI 与设置层的几个工具），而引擎工具总数是 303 个。其余一律拒绝，拒绝时给一句原因加一句出路：`"This looks inside the original (its code, files or page source), which Clean room never does."` —— 要开深度模式，动标题栏的开关，或者 `--deep`。

关键在默认值的方向：**新加的工具默认只能在深度模式跑**，作者必须主动把它加进 `TOOLS` 才能进净室。能加的条件写在文件头：它要么完全不碰目标，要么「像访客或用户一样从外面看」。

还有一层更硬的——它连 agent 自己的工具都收走了。净室对话里，Claude Code 被 `--disallowedTools` 关掉自己的 `Read` / `Glob` / `Grep` / `LS` 和联网工具，只留下 Craft Anything 的 MCP 工具，因为 deny 规则优先于任何 allow。`docs/claude-code.md` 把理由写得很直白：不能靠 Claude Code 的默认权限，因为它「默认允许读自己所在目录，而且某次发布或后来加的一条 allow 规则都可能改变这一点」。

但这种诚实有边界，而且作者自己写了。放行「运行任意命令」的构建方，等于让它拿着你自己的权限跑，它当然可以用别的方式改掉那些文件。原文是：这些措施 **"raise the bar; they aren't a wall"**——抬高门槛，不是一堵墙。

这句话比任何安全承诺都值钱。

## 32 万行的骨架

[![十个 crate 的代码量横向条形图：formats 七万三、engine 六万四、ai 三万九、ui-egui 两万五](/imgs/craft-anything-loc.png)](/imgs/craft-anything-loc.png)

*790 个 `.rs` 文件、321,069 行。最大的两块是纯解析器和引擎核心，界面反而是第四名——一个逆向工具的重心在哪，这张图就说完了。*

`formats` 73,218 行，纯解析器，无 I/O 无工作区依赖：ELF、PE、Mach-O、WASM、DEX、APK、ASAR、plist、.NET、Go……`engine` 63,856 行，装会话、项目、工具注册表、设置、许可、审批箱。`ai` 39,506 行，模型后端加 agent 循环加重建流程。`ui-egui` 24,793 行，排第四。

分层从 L0 到 L6 是写死的：evidence / formats 是 L0，disasm / js 是 L1，analysis / platform 是 L2，engines（Ghidra、adb、CDP、Frida、JADX 这些外部引擎）L3，engine L4，ai / mcp / setup L5，ui-egui L6——注释里点明它是「唯一允许使用 egui / eframe / winit / rfd 的 crate」。`cargo xtask layers` 在 CI 里拒绝跨层引用。

几条硬规则值得单独抄出来。**「永崩」**：生产代码禁止 `unwrap` / `expect` / `panic!` / `todo!`，不许对输入派生的值做下标，每个 crate 根挂 deny 属性，每次崩溃修复必须配回归测试。理由是「敌意输入就是我们的主要输入」。**「一切都是工具」**：任何用户可见行为都得是一个 `ToolSpec`（id、标题、摘要、白话说明、toolset、副作用、依赖、参数结构、run），UI、CLI、MCP、agent 全部按 id 派发——这解释了为什么 303 个工具能同时是 CLI 子命令、MCP 工具和 agent 的调用项，而不是三套实现。

测试规模上，源码里 grep 到 4,392 个 `#[test]` 属性；`docs/STATUS.md` 里记的基线审计是 923 个测试通过（2026-10-23 的 main）。两个数字口径不同，别混着引用。

## 冷静的部分

**一，它是早期 alpha，而且文档自己说得比宣传准。** 构建必须依赖你电脑上已登录的编码 agent，Claude Code 是唯一被真机验证过的，Codex 适配器「已存在，但还没在真实安装上验证过」。API 密钥构建「已实现，尚未真机跑通」。应用与游戏的行为检查部分可用，少数引擎工具只用替身测过。第三方实测里，深度模式把一个零字节文件夹当成 App，问它结构时回答的却是上一个项目的 Hacker News，findings 从 368 掉到 1（单次运行，v0.3.0，非官方数据）。

**二，相似度是代理指标，不是质量。** 那 93% 是文字、结构、布局、SSIM 的合成，衡量的是「看起来像不像」，不是「能不能用」。一个登不进去、深链全断、键盘焦点全丢的站，首页照样能拿 96%。更麻烦的是它会被净室规则反向惩罚：同一次实测里，Hacker News 从 72% 迭代 16 轮到 91%（29 分钟、1,760 万 token、按 API 价约 7.49 美元）；而 2048 只拿到 59%，因为净室不肯抄美术。**分数低不代表做得差，可能代表它守了规矩。** 复刻出来的 HN 叫「Ticker News」，logo 是个 T，每条新闻都是编的——这正是净室在起作用的证据，也是你没法把它当「克隆站」直接上线的原因。

**三，净室不是沙箱，更不是法律意见。** 工程意义上的「只喂公开可观测信息」，和版权法里的 clean room 是相关但不同的两件事。README 的说法是：请在你拥有或获准检查的软件上使用；它绝不绕 DRM、登录或反作弊；重建是依据证据复现布局、风格与行为，agent 被要求不得复制 logo、照片或文本，除非你确认有授权。但「布局、风格、行为」在多数法域是否构成侵权，取决于个案，不取决于这个开关。它降低风险，不消除风险。

**四，账单和耐心。** 一个网站 1,760 万 token 不是异常值，是这类工具的常态：每轮检查都要重新截图、重新比、再把差异读回上下文。6 轮上限既是省钱设计，也是质量天花板。

**五，文档比代码慢半拍。** README 英文版写 320 个工具（引擎 300 个），中文版写 314 个（引擎 298 个），生成出来的 `docs/tools.md` 写 303 个引擎工具，`ROADMAP.md` 又写 314。都是同一个项目、同一周的数字。状态段还写着「接下来：第一次公开发布」，可 `v0.1.0` 在建仓当天就发了，至今 7 个版本、每个 24–52 个安装包。半个月 1,039 次提交的项目，这类不一致是必然的，但引用数字时得知道自己在引用哪一天的。

**六，它背后不是一个人。** `storytold` 组织下还有 PhotoCraft、VectorCraft、FilmCraft、WordCraft、GridCraft 等十几个同名前缀的应用，共用一套 Craft 命名与同一套工程规范（`../craftrules`，且「仓库之间不共享代码」）。Craft Anything 是这套方法论的反向用法：别的 Craft 替你做东西，它替你看懂别人的东西。这解释了 32 万行代码的产能从哪来，也解释了它为什么一露面就是「产品」而不是「脚本」。

## 该不该用

如果你想的是「输入网址，输出一个能上线的站」，现在别用：它是 alpha，会烧 token，会出串项目的 bug，而且相似度和可用性不是一回事。

如果你想要的是一套**可审计的「看懂—重建—验证」流程**，它目前是同类里最完整的开源实现。价值不在复刻，在于它逼你把每个判断变成可反驳的东西：这条结论是看到的还是推出来的、这个动作谁批准的、这一版比上一版好在哪、还差哪几项。

顺带说一句工程品味：代码是 MIT / Apache-2.0，但 `docs/brand/` 里的 ArtCraft 名称与 logo 是商标、不在许可范围内，分支和修改版必须移除。把「代码开放、品牌保留」写清楚，比含糊的「开源」两个字有用。

## 参考

- 仓库：<https://github.com/storytold/craft-anything>
- 仓库内文档：`README.zh.md`、`docs/STATUS.md`、`docs/ROADMAP.md`、`docs/claude-code.md`、`docs/tools.md`、`AGENTS.md`
- 官网与产品矩阵：<https://getartcraft.com/apps/craft-anything>
- 第三方实测（单次运行，v0.3.0，Mac mini M4）：<https://dev.to/rainytechlab/i-pointed-craft-anything-at-hacker-news-claude-code-rebuilt-it-91-without-me-writing-a-line-4ce8>
- 本文的仓库统计取自 2026-11-15 21:40 的 GitHub API 与当日 `main` 源码（浅克隆后本地统计），代码量含注释与测试、不含 `vendor/`
