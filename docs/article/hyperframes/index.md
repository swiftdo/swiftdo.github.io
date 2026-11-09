---
title: "HyperFrames：写 HTML，出 MP4，作者是 Agent"
description: "HeyGen 开源的 HTML 转视频框架，11 月 9 日已有 81,447 Star。它不靠生成模型造画面，只把带 data 属性的网页逐帧 seek 成确定性 MP4；对标的不是 Sora，而是 Remotion。本文拆它的确定性契约、Agent skills 与许可证差异，以及 v0.9.x 该看清的边界。"
createTime: 2026/11/09 22:34:01
date: 2026-11-09
tags:
    - HyperFrames
    - HeyGen
    - Agent
    - 视频
    - 开源
---

# HyperFrames：写 HTML，出 MP4，作者是 Agent

2026 年 11 月 9 日，`heygen-com/hyperframes` 是 81,447 个 Star、7,520 个 Fork、242 个 open issue，提交数 6,947，版本 `v0.9.26`——同一天里还发了两三个版本。仓库 3 月 10 日建立，TypeScript，Apache 2.0，4 月 HeyGen 在月度更新里正式宣布开源。作为参照，一份 10 月 20 日的第三方统计里，Remotion 约 6.5 万 Star，HyperFrames 约 6.8 万——一个还没到 1.0 的项目，Star 数已经反超了做了六年的前辈。

更有意思的是这家公司本身。HeyGen 是做生成式 AI 视频的，对外说已经生成过 1.2 亿条视频。可它开源的这个东西，一帧画面都不用模型生成：给定一份 HTML，用无头 Chrome 逐帧截图，交给 FFmpeg 编码成 MP4。一家卖 AI 视频的公司，把最「不 AI」的那层开源了。

## 一句话定位：Write HTML. Render video. Built for agents.

README 的定义是「把 HTML、CSS、媒体和可 seek 的动画变成**确定性** MP4 的免费开源框架」。官方文档把它拆成三件事：**Agent-built**（你说要什么，Agent 写 HTML/CSS/JS）、**Editable**（产物是一个项目文件夹，不是压平的黑盒，Agent、浏览器编辑器、你自己的工具改的是同一批文件）、**Reliable render**（渲染器向项目要每一帧，而不是靠实时播放录屏，机器慢也不会丢镜头）。

一个视频就是一个 HTML 文件。时序写在 `data-*` 属性里，动画交给已有的库：

```html
<div id="stage" data-composition-id="launch" data-start="0"
     data-width="1920" data-height="1080">
  <h1 id="title" class="clip" data-start="1" data-duration="4" data-track-index="1">Launch day</h1>
  <audio data-start="0" data-duration="6" data-track-index="2"
         data-volume="0.5" src="music.wav"></audio>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
    window.__timelines = window.__timelines || {};
    window.__timelines.launch = tl;
  </script>
</div>
```

只有三条规则：每个可见片段带 `class="clip"`、`id`、`data-start`、`data-duration` 和 `data-track-index`；timeline 必须 `paused`；最后注册到 `window.__timelines`，key 与根元素的 `data-composition-id` 一致。官方对比文档特意提醒：**漏掉最后一条，你会得到一段没有动画的静帧**。这也是后面所有「Agent 约束」的由来。

没有 React、没有 JSX、没有构建步骤，`index.html` 直接在浏览器里就能打开看。动画运行时是适配器式接入的：GSAP、CSS 动画、Lottie、Three.js、Anime.js、WAAPI，甚至自定义 runtime。

## 确定性：它不「播放」视频，而是「问」每一帧

这是整个项目最硬的部分，也是它敢说「视频即代码」的底气。

渲染器从不播放动画。它用整数运算算出时间（`time = floor(frame) / fps`），把这个帧号交给 frame adapter 的 `seekFrame(frame)`，由适配器把动画、DOM 变更、canvas 绘制全部拨到那个瞬间，再用 Chrome 的 `HeadlessExperimental.beginFrame` 原子地抓一帧像素，最后 FFmpeg 编码并混入 `<audio>` / `<video>` 的音轨。相机慢、帧再贵，都不会漏帧——只是渲染得久一点。

代价是一份不能讨价还价的规则清单：

- **没有墙钟**：不许 `Date.now()`、`requestAnimationFrame`、系统定时器；
- **没有未播种的随机**：`Math.random()` 每次跑出的帧都不一样；
- **渲染中途不许取资源**：所有素材必须在第一帧之前加载完；
- **尺寸与帧率在帧 0 之前锁定**，且每个 composition 有已知的终点。

自定义 `FrameAdapter` 还要满足：有限的帧数、支持前进/后退/乱序 seek、同一帧重复请求结果一致、异步工作必须在抓帧前完成、生命周期严格 `init → seekFrame × N → destroy`。这份接口目前标注为 **experimental v0 API，v1 前签名可能变**。

「同样输入同样输出」还有个容易被忽略的前提：字体和 Chrome 版本因机器而异，本地渲染可能差一个像素。官方给的解法是 `npx hyperframes render --docker --output output.mp4`，用 Docker 把 Chromium、字体集和 FFmpeg 编码器一起钉死，让平台不再成为输入。仓库里用 Git LFS 存了约 240 MB 的 `output.mp4` 作为黄金回归基线——把确定性当测试锁住，而不是当宣传语。顺带一个反直觉的结论：预览按真实时间播放，会受机器性能限制；渲染是逐帧 seek，**预览里卡成幻灯片的片子，照样能渲染得完美**。

## 真正的差异不是「不用 React」，是「给谁写」

README 里直接摆了一张 HyperFrames vs Remotion 的表，官方还专门写了篇对比指南。两者的渲染底座其实一样：都是无头 Chrome + FFmpeg，都支持 Lambda 分布式渲染，都有可视化编辑器。差别只在作者模型上。

| | HyperFrames | Remotion |
| --- | --- | --- |
| 你写什么 | HTML + CSS + 可 seek 动画 | React / TypeScript 组件 |
| 时间单位 | `data-*` 里的秒 | `useCurrentFrame()` 的帧号 |
| 动画怎么驱动 | 渲染器暂停并 seek 你的 timeline | 组件读帧号算出该帧的值 |
| 构建步骤 | 无，`index.html` 直接能播 | 需要 bundler |
| 许可证 | Apache 2.0 | 自有许可，3 人以上公司需付费 |

官方做过一次同题对照：把同一段 15 秒发布视频的需求各交给装了对应 skills 的 Claude Code（Opus 5.5），各跑一次、不重试、不后期修改。Remotion 用了 12 分 30 秒、10 个 TS 文件 1037 行、装了约 950 MB `node_modules`、没有声音；HyperFrames 用了 11 分 50 秒、4 个 HTML 文件 822 行、没往项目里装东西，还自己配了音乐床和 5 个音效。**这是官方自己跑的单次实验，不是独立评测**，但「最后你手里剩下什么」这个对比很实在：一个 React 工程，或者几个能直接在浏览器打开、让 Agent 接着改的 HTML 文件。

难得的是官方那节叫 "What Remotion does better"，话说得不含糊：Remotion 更老、更成熟，模板、教程、已回答问题和生产历史都多得多，Remotion Lambda 是文档完备的成熟系统；团队本来写 React 的话，组件、设计系统、图表库、带类型校验的输入全都白送，不用翻译；而且「一个帧号的纯函数」在脑子里更好推演。**HyperFrames 要求你守规则——paused timeline、不许墙钟、不许未播种随机——漏一条就悄悄坏掉。** 这句话基本解释了它为什么要花那么大力气做 skills。

许可证是另一个绕不开的点。HyperFrames 是 Apache 2.0，README 特意写明「没有按次渲染收费，也没有商用规模门槛」。Remotion 是 source-available：个人、非营利、3 人及以下公司免费，超出要买公司许可（据 10 月的第三方整理，约 $25/席位/月，或按渲染 $0.01/次、每月 $100 起，企业版 $500/月起）。对要把「批量出片」做进产品的人来说，这不是小事。

所以我的判断是：这不是「干掉 Remotion」，而是把视频的作者范围从「会写 React 的人」扩到「会写网页的人」以及「会写网页的 Agent」。官方甚至提供了 `/remotion-to-hyperframes` 迁移 skill，把 `useCurrentFrame` / `interpolate` 映射成 timeline tween、`Sequence` 映射成 clip、帧换算成秒；遇到 `useState` 状态机、异步元数据、第三方 React UI 这类翻不过来的东西，它会**明确标记而不是悄悄误译**，还会把两边都渲染出来逐帧比对。

## 为 Agent 而生：skills 不是文档，是约束

「Built for agents」如果只是「Agent 会写 HTML」，其实撑不起一个框架。真正的做法是它把规则编码成了 9 个 skills，让 Agent 先读 `/hyperframes` 再动手，而不是凭通用网页知识去猜。这套 skill 教的是完整生产闭环：规划片子 → 写合法 HTML → 接可 seek 动画 → 加媒体 → lint → 预览 → 渲染。

核心 6 个是 `/hyperframes`、`/hyperframes-cli`、`/hyperframes-registry`（约 450 个可直接装成可编辑源码的现成 block）、`/media-use`、`/reverse-any-video`、`/style-sampling`；按需装的是 `/figma`、`/slideshow`、`/remotion-to-hyperframes`。安装方式覆盖 Claude Code 插件、Codex / Cursor / Gemini CLI / Copilot CLI、OpenCode、IBM Bob、Google Antigravity，也能通过 MCP 从 Claude.ai / ChatGPT 里直接建片：

```bash
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
# 或独立 skills
npx skills add heygen-com/hyperframes
# CI / 非交互环境，装与 CLI 版本对应的核心集
npx hyperframes skills update
```

CLI 默认非交互，本身就是给流水线用的。周边还有 Studio 桌面 App（Mac / Windows / Linux，免费，Pro 才加 HeyGen 的视频、图像、语音、音乐模型）、浏览器编辑器、约 450 个 catalog block、AWS Lambda / Google Cloud Run 渲染路径，以及一个挺有意思的 `frame.md`：把品牌那份写给网页的 `design.md`「反转」成写给镜头的规范，同样是那些 token 和规则，但让 Agent 能据此拼出宣传片，不用去猜尺寸、也不至于把网页 chrome 元素带进画面。输出是 `DESIGN.md` 的超集。

## 上手：三行命令

要求 Node.js 22+ 和本机 FFmpeg：

```bash
npx hyperframes init my-video
cd my-video && npx hyperframes preview     # 浏览器预览，带 live reload
npx hyperframes render                     # 输出 MP4
```

现成组件用 `npx hyperframes add data-chart`、`npx hyperframes add flash-through-white` 装。走 Agent 的最短路径是 `npx hyperframes skills update` 之后，在项目里对 Agent 说「用 `/hyperframes` 做一个 10 秒产品 intro」，它会留下项目文件夹并把预览打开；之后想改，继续在同一个对话里说，或者自己开 `npx hyperframes preview` 手改同一份 DOM。

## 热度之外，也得看清几件事

- **还没到 1.0**：`v0.9.x`、一天数版、6,947 次提交、Studio 状态写着「Available, evolving」、`FrameAdapter` 还是实验性 v0 接口。生态成熟度、教程密度、云渲染的生产历史都不如 Remotion，这点官方自己认。
- **确定性是有门槛的**：跨机器像素级复现要靠 Docker；本机得自己装 FFmpeg 和 Node 22+。规则一旦被 Agent 漏掉，产物是静帧而不是报错。
- **约束靠 skills 传递**：Agent 没装 skill、换了工具、或者 skill 版本与 CLI 不匹配，就回到「凭猜写 HTML」的状态。所以官方才让 `skills update` 按 CLI 版本装对应 tag。
- **开源的边界要分清**：Apache 2.0 的是渲染引擎、CLI、core、Studio UI 这套；`/reverse-any-video`、`/style-sampling` 两个 skill 和 Studio Pro 都挂着「HyperFrames Pro」，媒体/模型能力接的是 HeyGen 生态，云端渲染也走它的账号。框架免费不等于整套链路都自托管，官方博客说得很直白——开源是为了让 Agent 和创意团队有一条共同的出片路径，分发入口自然指向自家平台。

## 一个判断

生成式视频解决的是「手里没有素材」，HyperFrames 解决的是「视频没法像代码一样被管理」。HeyGen 在 4 月那篇更新里写：「Video is now code. That means version control, code review, automated testing, and reproducible builds for video.」——它能进 Git、能 diff、能 code review、能在 CI 里跑回归，因为同样输入必然同样输出。对一个要批量出产品发布片、PR 讲解、动态图表、带字幕社媒短片的团队，这比「再生成一次碰碰运气」有用得多。

再往下一层，它其实给 Agent 增加了一种**可验证的输出格式**：Agent 最熟的是 HTML，交付的却是 MP4，中间那层确定性渲染器负责把「写网页」翻译成「出片」。这跟最近一批「给 Agent 做控制面」的工具思路不同——不是让 Agent 去操作别的软件，而是让它的产物本身就是最终产物。

我会建议这样试：先跑一个 10 秒小片，用 `render --docker` 把环境钉死，确认预览与成片一致，再考虑接进流水线。别急着把它当成替代现有视频栈的决定——0.9.x 的接口还在动，而它真正稳下来的部分，是那份「不许墙钟、不许随机、逐帧 seek」的契约。

## 参考

- [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · [官网](https://hyperframes.heygen.com/introduction) · [README](https://github.com/heygen-com/hyperframes/blob/main/README.md)
- 官方文档：[Deterministic rendering](https://hyperframes.heygen.com/concepts/determinism) · [Frame adapters](https://hyperframes.heygen.com/concepts/frame-adapters) · [Agent skills](https://hyperframes.heygen.com/guides/skills) · [HyperFrames vs Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion) · [Quickstart](https://hyperframes.heygen.com/quickstart)
- [What's new at HeyGen: April 2026](https://heygen.com/blog/heygen-april-2026-release) · [HyperFrames vs Remotion: Cost, Speed and Claude Code](https://www.growthcab.com/hyperframes-vs-remotion)
- 文中 Star、Fork、issue、提交数与版本号取自 2026-11-09 的仓库页面与 GitHub API；Remotion 的 Star 数与许可价格引自 2026-10 月的第三方整理，价格以官方条款为准
