---
title: hyperframes：写 HTML 就能出片，前提是动画可被 seek
description: "HeyGen 开源的 HTML→视频框架：把时间轴写成 data 属性，用 GSAP/CSS/Lottie 驱动可 seek 的动画，逐帧截图再交给 FFmpeg，所以同输入同输出。附它与 Remotion 的真实差别和三条安装路径的坑。"
createTime: 2026/10/31 22:55:00
---

> 写 HTML。渲染视频。为 agent 而生。

这句话里有两个词值得展开：**HTML** 和**确定性**。前者是它的赌注，后者是它敢叫「为 agent 而生」的理由。

| 项目 | 内容 |
|---|---|
| 类型 | 开源框架 + CLI + Agent Skills + 桌面应用 |
| 仓库 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · [hyperframes.heygen.com](https://hyperframes.heygen.com) |
| 技术栈 | TypeScript；Puppeteer（headless Chrome）+ FFmpeg |
| 许可 | Apache-2.0（无按次渲染费、无商用门槛） |
| 热度 | 76.4k star / 7.0k fork / 208 open issue（2026-10-31 快照） |
| 状态 | v0.8.223（2026-10-31），七个月 223 个版本 |

## 它赌的是 HTML，不是 React

这个赛道的前任是 Remotion，用 React 组件写视频。HyperFrames 的选择是纯 HTML——README 里那句话把理由说得很直接：

> Remotion 赌的是 React 组件；HyperFrames 赌的是**人和 agent 都能轻松写的纯 HTML**。

| | HyperFrames | Remotion |
|---|---|---|
| 写法 | HTML + CSS + 可 seek 动画 | React 组件 |
| 构建步骤 | **没有**，`index.html` 直接能播 | 需要打包器 |
| 交给 agent 的东西 | 一个 HTML 文件 | 一个 JSX 项目 |
| 分布式渲染 | 本地 + AWS Lambda | Remotion Lambda（更成熟） |
| 许可 | Apache-2.0 | 源码可见的 Remotion License |

「没有构建步骤」这一条比看起来重要。它意味着 agent 写完文件，浏览器打开就能看——不需要装依赖、跑打包、等编译。**「为 agent 而生」不是一句口号，是把中间那层脚手架删掉了。**

## 核心约束：动画必须可被 seek

这是所有 HTML→视频方案的真难点，也是它最该被讲清楚的一段。

一个网页动画通常按**真实时间**跑（`requestAnimationFrame`、`setInterval`、CSS 的 wall-clock）。但渲染器的工作方式是：**跳到第 N 帧 → 截图 → 跳到第 N+1 帧 → 截图**。如果你的动画依赖「已经过去了多少毫秒」，逐帧渲染时它会和画面完全对不上。

所以 HyperFrames 要求时间轴显式声明：

```html
<div id="stage" data-composition-id="launch" data-start="0" data-width="1920" data-height="1080">
  <video class="clip" data-start="0" data-duration="6" data-track-index="0" src="intro.mp4" muted playsinline></video>
  <h1 id="title" class="clip" data-start="1" data-duration="4" data-track-index="1">Launch day</h1>
  <audio data-start="0" data-duration="6" data-track-index="2" data-volume="0.5" src="music.wav"></audio>

  <script>
    const tl = gsap.timeline({ paused: true });
    tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
    window.__timelines = window.__timelines || {};
    window.__timelines.launch = tl;
  </script>
</div>
```

`data-start` / `data-duration` / `data-track-index` 描述轨道，动画则注册到 `window.__timelines`——**暂停状态的时间轴**，渲染器可以把它 seek 到任意时刻。

动画库不限：GSAP、CSS 动画、Lottie、Three.js、Anime.js、WAAPI，或者你自己写的 adapter。约束只有一个——**能接受「跳到第 X 秒」这个指令**。

渲染时，headless Chrome 逐帧 seek 截图，FFmpeg 编码成 MP4。所以同一个输入给出同一串帧，产出同一个视频。

## 确定性带来的东西：视频可以进 CI

「同输入同输出」不是一句漂亮话，它让视频第一次能像代码一样被测试。

仓库里就摆着证据：`packages/producer/tests/**/output.mp4` 下有约 **240MB 的 golden 基线视频**，用 Git LFS 存。也就是说他们拿视频帧做回归测试——改了渲染器，跑一遍，和基线逐帧比对。

这件事的分量在于：过去「生成视频」是一次性的、不可复现的，改一个参数全部重来、而且无法判断是不是变差了。现在它更接近**编译**——源码进去，产物出来，产物可以 diff。

## 七个技能，装哪几个要先想清楚

```bash
npx hyperframes skills update      # 装「核心组」四个，最省事
npx skills add heygen-com/hyperframes    # 交互式选择（默认一个都不勾）
npx skills add heygen-com/hyperframes --all   # 装全部七个
```

核心组是 `/hyperframes`（契约与参考）、`/hyperframes-cli`、`/hyperframes-registry`、`/media-use`；`/slideshow`、`/remotion-to-hyperframes`、`/figma` 按需装。

技能教给 agent 的是一条**生产循环**：规划视频 → 写合规的 HTML → 接可 seek 的动画 → 加媒体 → lint → 预览 → 渲染。这段循环恰恰是「通用网页文档」教不会的——网页不需要考虑「第 37 帧应该长什么样」。

## frame.md：把 design.md 翻给镜头看

README 里有一句话我很喜欢：

> 每个品牌都有一份 `design.md`，但没有一份是写给镜头看的。

`frame.md` 就是那层翻译：同一套 token、同一套规则，但重写成 agent 能直接排片的规格，不用去猜字号在 1080p 上该多大，也不用把网页的导航栏和页脚搬进画面。

它的三条原则写得挺好：**原子不变，构图自由，数字来自脚本。**

![Biennale Yellow 模板的一帧：把设计规格直接印在画面上](/imgs/ai-toolbox/hyperframes/frame-md.webp)

这张图本身就是 frame.md 的可视化：REGISTER（文体：文学编辑风、双年展图录）、GROUND（底色：暖羊皮纸，永不用纯白）、TYPE（字体：Instrument Serif · Archivio · JetBrains Mono）、DEPTH（深度：氛围光晕、无阴影、细线），右下角还有 `01 / 06` 的页码。**一份设计规范，长成了能播的画面。**

## 顺带一个跨媒介的观察

前面写过 impeccable 和 hallmark，它们都把「小号大写字母间距标签」（tracked caps）列为 AI 味的重灾区，hallmark 甚至写进不可豁免的 Floor。

但你看这张视频帧——`FRAME SYSTEM · VOL. 01`、`REGISTER`、`GROUND`、`TYPE`、`DEPTH`——全是这种标签，而且用得很对。

原因是媒介不同：网页上那种标签是「给标题加个装饰性眉标」，属于生成器的惯性和尚；视频标题卡上它是**字幕与图注的行业惯例**，观众的阅读预期本来就是这样。

**设计规则是分媒介的。** 把一个媒介的禁令搬到另一个媒介，很容易把正确的东西一起禁掉。

## 上手

```bash
# Claude Code 插件
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes

# 或者只想要技能
npx skills add heygen-com/hyperframes
```

然后跟 agent 说：

> 用 `/hyperframes` 做一个 10 秒的产品开场，标题淡入，背景放一段视频，配一点背景音乐。

不想装 agent 也行：`npx hyperframes` 提供 CLI，可以脚手架、预览、lint、渲染；还有 macOS / Windows / Linux 的桌面应用，以及一个能直接在线试的 Studio。

## 坑

### 1. 七个月 223 个版本

`v0.8.223`——按天算差不多一天一个版本。迭代快是好事，但也意味着：**仍是 0.x，API 和产物格式随时会变**，208 个 issue 挂着。别把它当成冻结的依赖写进关键流水线。

### 2. 三条安装路径容易混

`npx hyperframes skills update`（装核心组四个）、`npx skills add`（交互式选择，默认不勾）、`--all`（七个全装）。README 还特别提醒：`skills add` 走的是 skills.sh 的 registry blob，**可能比 main 落后几个小时**。

在 agent 里自动装的时候，用 `npx hyperframes skills update`——它精确装核心组，不会把七个都拖下来。

### 3. 渲染依赖本机环境

headless Chrome + FFmpeg，两个都得有。想甩开本机就上 AWS Lambda 渲染（`@hyperframes/aws-lambda`），但那要一套 AWS 部署。

### 4. 「确定性」有前提

它承诺的是同输入同输出，但**字体、Chrome 版本、GPU 渲染差异**都会影响最终的像素。真要拿它做回归测试，得把这些也钉死——他们自己仓库用 LFS 存基线，就是在做这件事。

### 5. 仓库带 240MB 的 LFS 基线

只影响开发克隆。只想要源码的话：`GIT_LFS_SKIP_SMUDGE=1 git clone ...`。

### 6. 它是 HeyGen 的开源引擎

核心 Apache-2.0，没有按次收费；但配套的 Studio、云端渲染是他们的商业面。用在生产里之前，想清楚哪些能力在开源侧、哪些要走托管。

## 适合谁

| 适合 | 不适合 |
|---|---|
| 要让 agent 批量产出宣传片、数据动画、PR 讲解 | 需要真人出镜、实拍剪辑 |
| 已有 design.md，想复用到视频 | 只做一次性视频，不想搭环境 |
| 想把视频纳入 CI / 回归测试 | 需要成熟云渲染（Remotion Lambda 更稳） |
| 熟悉 GSAP / CSS 动画的前端 | 完全不想碰代码 |

## 一点判断

这一篇和前十三篇有个不一样的地方：前面的工具大多在**生成内容**，hyperframes 在**编译产物**。

视频从「生成」变成「编译」，带来三件事：可 diff、可回归、可流水线。这是这波 AI 视频里最少被提、却最工程化的一条路——它不追求「一句话出大片」，追求的是「同样的源，稳定地出同样的片」。

而「HTML 而不是 React」这个选择，表面上是技术偏好，实际上是对**谁在写**的判断：agent 已经会写 HTML 了，而且 HTML 不需要构建、能直接预览、出问题能肉眼定位。选一个 agent 擅长的格式，比教它一个它不擅长的格式便宜得多。

要说局限，也很清楚：**确定性只保证「同输入同输出」，不保证「好看」。** 画面好不好仍然取决于那份 frame.md 和你的审美。它把视频从「玄学」往「工程」推了一大步，但最后那一步——决定这个片子值不值得看——它替不了你。

## 链接

- [仓库](https://github.com/heygen-com/hyperframes) · [文档](https://hyperframes.heygen.com/introduction) · [Showcase](https://hyperframes.heygen.com/showcase)
- [frame.md 设计模板](https://hyperframes.studio/design) · [组件目录](https://hyperframes.heygen.com/catalog/blocks/data-chart)
- [和 Remotion 的完整对比](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion)
