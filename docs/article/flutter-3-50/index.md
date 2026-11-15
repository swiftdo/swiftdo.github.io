---
title: Flutter 3.50：Material 搬出去了，旧账也到期了
description: Flutter 3.50 与 Dart 3.14 同车发布，188 位贡献者、1,200+ 提交。这一版的分量不在新功能：package:flutter/material.dart 正式废弃、FFIgen/JNIgen 转稳、iOS 触摸少一帧，以及三条同时开始倒计时的迁移。文末把几个需要看口径的数字单独拎出来说。
createTime: 2026/11/15 21:45:00
date: 2026-11-15
tags:
    - Flutter
    - Dart
    - 跨平台
    - Impeller
---

# Flutter 3.50：Material 搬出去了，旧账也到期了

2026 年 11 月 11 日，Flutter 3.50 稳定版发布，Dart 3.14 同车。官方口径：本周期 188 位贡献者，其中 69 位是第一次贡献，合并 1,200+ 次提交，`flutter upgrade` 即可。

先把版本号说清楚，因为这个坑每年都有人踩：**这一版是 `3.50`，不是 `3.5.0`。** Flutter 的次版本号早就走到两位数了，`3.49 → 3.50` 只隔一个小版本，和 2019 年那个 `1.5.0` 完全不是一回事。`flutter --version` 会输出 `3.50.x`，如果 CI 里写过 `>= 3.5` 这类浮点比较，建议现在就改成显式的版本约束。

| 项目 | 内容 |
|---|---|
| 版本 | Flutter 3.50（stable）+ Dart 3.14 |
| 发布 | 2026-11-11，作者 Emma Twersky |
| 规模 | 188 位贡献者（69 位首次）、1,200+ 提交 |
| 结构变更 | `package:flutter/material.dart`、`cupertino.dart` 及本地化委托正式废弃 |
| 互操作 | FFIgen、JNIgen 转 stable；Pigeon 新增原生互操作模式（preview） |
| 最可感的一条 | iOS 触摸到出帧少一帧：60Hz −16ms / 120Hz −8ms |
| 最硬的三条 | CocoaPods trunk 2026-12 只读、AGP 10 构建失败、Intel Mac 退出 |

## 这版的主角，是到期的旧账

功能清单照例很长，但如果只让我留一句总结：**3.50 不是一版加东西的发布，是一版结账的发布。**

过去几年 Flutter 攒下的兼容层，这一版把三条同时标上了到期日：Swift Package Manager 不再是「可以试试」，而是「不用就警告」；插件的 Kotlin Gradle Plugin 不再是「你随意」，而是「不迁移就掉分、就构建失败」；Intel Mac 不再是「能跑但慢」，而是「不再测试、以后不再支持」。

[![三条同时开始倒计时的迁移：CocoaPods 回退转向 SwiftPM（2026-12 trunk 转只读）、手动 KGP 转向 AGP 内置 Kotlin（AGP 10 下构建失败）、Intel Mac 转向 Apple Silicon](/imgs/flutter350-deadlines.svg)](/imgs/flutter350-deadlines.svg)

*三张卡片都来自 3.50 的发布说明。注意三者的"到期"写法不同：CocoaPods 有确切月份，KGP 绑在 AGP 10 上，Intel Mac 只说了"未来版本"——这个差别本身就是信号，越确切的越近。*

三条里最急的是 CocoaPods。trunk 在 **2026 年 12 月转为只读**，也就是这篇发出来约一个月后，你不能再往 trunk 推新版本。Flutter 这边的动作是：从 3.50 起，禁用 Swift Package Manager 会在每条 CLI 命令上打一条警告；接下来会移除禁用它的开关，以及 CocoaPods 回退路径。对一个只依赖官方插件的应用，迁 SwiftPM 基本是零成本的；真正会被卡住的是本地写了 podspec、或者依赖了没人维护的 pod 的项目——**这类项目现在就该去 pub.dev 翻一遍依赖列表，而不是等十二月。**

## `package:flutter/material.dart` 变成了 deprecated

如果说上面三条是"迟早要还"，那这一条是"已经还了"。

`package:flutter/material.dart`、`package:flutter/cupertino.dart`，以及 `flutter_localizations` 里的本地化委托，在 3.50 里正式标为废弃。`flutter create` 新建的项目默认导入的是 `package:material_ui`。迁移入口只有一条命令：

```bash
dart fix --apply --code=migrate_design_widgets
```

[![Material 与 Cupertino 从 package:flutter 中拆成三个独立包：material_ui、cupertino_ui、flutter_localizations，迁移用 dart fix](/imgs/flutter350-packages.svg)](/imgs/flutter350-packages.svg)

*拆分不是这一版才开始的：`material_ui` 与 `cupertino_ui` 的 1.0 在 3.47 就发了，3.50 做的是**关掉旧入口**。从发 1.0 到废弃耦合入口只隔了一个版本，这个速度快得有点反常，说明它本来就是一份长期计划里排好的收口动作。*

我更愿意把这件事读成一句表态：**Material 不是 Flutter 的一部分，它只是 Flutter 上最常用的一个设计语言包。** 这个区分对写业务的人没区别——`dart fix` 跑完，`import 'package:flutter/material.dart'` 变成 `package:material_ui`，`ThemeData`、`Colors`、`Icons` 照样用。但它对生态有区别：设计语言可以脱离 SDK 发版，三套包可以各自演进，而框架本体不用再为了 Material 的设计改动发一个 Flutter 版本。

代价也是真的，而且 `dart fix` 覆盖不到：`ThemeExtension` 的子类、自定义的 `LocalizationsDelegate`、在 `MaterialApp` 外层包了状态管理或路由适配的代码，这些地方的耦合要靠人读。**如果项目里有一层自己的 design system，这就是一次值得做的清点，而不是一次跑完命令就结束的迁移。**

## 平台通道退到二号位

FFIgen（绑 C 与 Objective-C）和 JNIgen（绑 Java/Kotlin，含 Android 系统 API 与自定义库）在这一版转 stable。这件事听起来像工具链细节，实际改的是插件怎么写。

[![平台通道要经过消息编码、平台线程转发、消息解码；FFIgen 与 JNIgen 直接调用原生 API，无序列化，支持同步与后台 isolate](/imgs/flutter350-engine-call.svg)](/imgs/flutter350-engine-call.svg)

*旧的 MethodChannel 路径：每次调用一进一出两次编解码，接口只能是 `async`。新的原生互操作：直接调用，可以同步，也可以在后台 isolate 里调。*

差别不只是快一点。`MethodChannel` 的异步是**结构性的**——你没法在 Dart 侧同步读到一个原生 getter，只能 `await`；涉及高频小调用（传感器、渲染参数、文件元信息）时，编解码和跨线程切换的开销会盖过逻辑本身。原生互操作把这条路拉直了，同步调用也成为可能。

配套的还有 Pigeon 的原生互操作模式（preview）：仍然是写接口定义、仍然生成类型安全绑定，但底层换成 FFIgen/JNIgen，iOS、macOS、Android 上的数据转换与原生生命周期由工具处理。**对插件作者，这是接下来一年最值得重写的一块。**

一个容易忽略的边界：这套东西不替代通道的可移植性。你绑的是 C、Objective-C、Java、Kotlin，绑不到 Web 和 Fuchsia——跨端插件仍然要靠通道兜底。所以更准确的说法是"通道从默认答案降成了兼容答案"，不是"通道要没了"。

## iOS 少一帧，是这版最实在的数字

发布说明里最不起眼、但最容易被用户感知的改动在 iOS：引擎在触摸事件之后的帧调度被重构了，事件不再排队等下一个刷新周期，而是立即交给框架，在同一个周期内建帧。

[![3.49 及以前触摸事件要等一帧才建帧；3.50 在同一刷新周期内建帧，60Hz 省 16ms、120Hz 省 8ms](/imgs/flutter350-ios-frame.svg)](/imgs/flutter350-ios-frame.svg)

*时间轴示意，非等比。官方给的数字是 60Hz 设备快 16ms、120Hz ProMotion 快 8ms，也就是整整一帧，并在 iPhone 6s 起的硬件上做过验证。*

这是社区成员 Matej Knopp 提交的改动，也是这一版里唯一一条"所有 iOS 应用都白拿"的收益——不需要改代码，不需要开开关。滚动跟手、滑动返回、长按拖拽这些直接吃触摸延迟的交互，理论上都会有感。

但也别把它当成万能药。它省掉的是**排队的那一帧**；如果你的触摸回调里在做布局计算、图片解码或同步 IO，主线程该卡还是卡。而且 16ms 是引擎调度的账，不是端到端的账——真机上的感知还取决于显示器、系统手势层和你的首帧复杂度。

## Web：Wasm 在 Safari 上终于过了 JS

Chromium 系（Chrome / Edge 137+）早就默认跑 Wasm 了，这一版补上另外两家：**Safari 26.2+（macOS 与 iOS）和 Firefox 147+，在重度 Widget 基准测试里帧率超过 JavaScript 构建的 2 倍。**

注意两个限定。第一，这是"重度 Widget 基准测试"（benchmark），不是你的业务页面——真实应用的瓶颈常常在图片、网络和第三方脚本上，渲染器的 2 倍不会等比放大。第二，它不是默认开：要在 `web/flutter_bootstrap.js` 里把 `wasmAllowList` 的 blink / webkit / gecko 都设为 true，未来稳定版才会默认启用。`flutter build web --wasm` 会同时产出 Wasm 和 JS 两份，旧浏览器自动回退，代价是产物更大。

另外三件对线上部署更实际的事：

- **`--web-content-hash`**：把内容哈希写进 JS、Wasm 和 `assets/**` 的文件名，并同步更新 `flutter_bootstrap.js`。有了它才敢给静态资源挂一年缓存（`immutable`），同时让 `index.html` 和 `flutter_bootstrap.js` 走 `no-cache`。以前靠 `flutter_service_worker.js` 硬扛的缓存问题，这次才算给了一条正路——它还会生成 `build/web/precache_manifest.json` 供自定义 Service Worker 用。
- **`--no-deprecated-js-interop`**：`dart:html`、`dart:js`、`dart:js_util`、`package:js` 都已废弃，加上这个参数后，只要依赖还在用旧库就直接构建失败。**建议在 CI 里先开上，比等着哪天被迫改要便宜。**
- **WebParagraph（preview）**：和 Chrome 团队合作，用实验性的 Enhanced `TextMetrics` API 让浏览器自己在 canvas 上排系统字体，不再打包 C++ 字体解析器。效果是 CanvasKit 的下载体积从 **5.46 MB 降到约 3.75 MB**，同时消掉回退字体的网络请求、减少国际文字的"豆腐块"，还能原生渲染彩色 emoji。

最后这条的数字很漂亮，但它挂在 preview 上，且依赖一个还没标准化的浏览器 API。**省下的 1.7 MB 现在还不能算进你的性能预算。**

## 引擎与桌面：SDF 铺开，纹理数组来了

Impeller 的 SDF（有符号距离场）渲染器在 macOS / Linux / Windows 上把快速路径扩到了线条、细边框、圆角和渐变，还顺手加速了 macOS 的渐变和重复文字阴影。这类改动的特点是**你感受不到它存在，只会在滚动和长列表里少掉几帧**。

更值得看的是 Flutter GPU 支持 **2D 纹理数组**：sprite sheet、tilemap、地形分层这类资源可以打包批量绘制，减少 draw call 且没有拼接接缝。加上着色器管线配置出错时会给出更清楚的 Dart 报错——这是把一个"只有图形程序员能用"的能力，往"普通应用也能碰"推了一步。

桌面侧这一版的几条都在补老账：Windows 默认请求 OpenGL ES 3（保留 ES 2 自动回退）、支持非 ASCII 路径加载资源（国际用户名目录以前会挂）、文字更清晰并跳过每帧一次全屏拷贝；Windows 与 Linux 的抗锯齿都有改善。多窗口 API 继续和 Canonical 合作推进，`RegularWindow` 更名成 `Window`，`sizedToContent` 换成 `shrinkWrap`，`WindowManager` 挪到了 `WidgetsApp` 之上——次级窗口可以有自己的 UI 与导航状态。

**如果你在做桌面端，这几条加起来的分量比 Web 那几个 headline 数字更重。**

## Android：一台 API 34 以上的机器，才配得上 HCPP

Hybrid Composition++ 是把平台视图的合成交给 Android 系统，滚动更跟手。3.50 给它加了 `AndroidViewSurface` 上的无缓冲运动事件分发，修了 `RenderAndroidView` 的布局顺序，也修了一个社区报的崩溃（`FlutterEngine` 活得比 `Activity` 久）。

门槛没变：**要 Android 14（API 34）以上，且 Impeller on Vulkan**，不满足就自动回退。这意味着一台 2021 年的中端机基本吃不到。它从 3.49.0-0.1.pre 起在 beta 渠道默认开，稳定版还没默认；想提前试就 `flutter config --enable-hcpp`，然后去 logcat 里找 `Using HCPP platform view rendering strategy` 这行确认真的生效了。

另一条是安全，值得单独拎出来：**Release 构建现在会忽略外部 `Intent` extras 里的 `route`、`dart_entrypoint`、`cached_engine_id`，并拒绝通过 Intent extras 或预构建 APK 传入的运行时引擎标志（比如 `--dart-flags`）。** 这条改动没有出现在任何"亮点"里，但它说明有人真的用这条路绕过入口、直接跳内部路由或者注入引擎参数。Debug 构建只记警告；要在预构建二进制上测自定义引擎标志，得改用 profile 模式或重新构建。

工具链默认值一起抬了：新项目用 AGP 9.3.1、Gradle 9.5.0、KGP 2.4.20，最低 Java 17，`compileSdk` / `targetSdk` 到 API 36、`minSdk` 保持 24。Flutter Gradle Plugin 这一版重写成基于 AGP 9 的现代公共 API（不再用 `BaseExtension`），官方插件全部支持 Built-in Kotlin——**这就是前面那条 deadline 的由来：基础设施已经搬完了，剩插件作者自己搬。**

## AI 侧：包开始自带技能

这一版最不像 Flutter 的一条，反而是最有指向性的：官方发了 Flutter agent 插件，里面有任务导向的 agent 技能、Dart/Flutter MCP server 配置、专用 agent 和持久化规则。其中一条叫 `flutter-hot-reload`，作用是 **编辑 `lib/` 下的文件后，自动通过 MCP 触发 hot reload / hot restart**——它替掉了一直以来那根最没技术含量的手动链条。

更值得注意的是包作者这一端：可以在 pub.dev 包顶层放一个 `skills/` 目录发布 agent 技能，用户用 `dart run skills@ get` 装；发布前可以用 `package:skills_lint` 在 CI 里检查 `SKILL.md` 的 frontmatter、目录结构和命名。

**翻译一下：包的"文档"从一个给人读的 README，变成了一个给 agent 执行的技能。**这是很聪明的一步——README 解决"人怎么用"，技能解决"agent 怎么替你用"，而后者在 2026 年已经是真实的入口流量了。

生态侧顺带记几条：Genkit Dart 1.0 转稳定（端到端类型安全、流式 flow、工具调用、OpenTelemetry）；MediaPipe 上到 pub.dev，端侧视觉／音频／文本共 20 个任务；Flutter 应用在 Google Play 的上架数破 100 万。这些都是官方自述，没有第三方复核。

## 几个数字，得按口径读

这一版发布说明写得很密，但数字的成色不一样，我按可信度排一下：

| 数字 | 口径 | 我的读法 |
|---|---|---|
| iOS 触摸 −16ms / −8ms | 官方实测，60Hz / 120Hz 各一档 | 最实在。一帧就是硬件上限，改的是调度，可复现 |
| Wasm 帧率 2 倍 | 官方重度 Widget 基准，Safari 26.2 / Firefox 147 | 方向可信，业务页面别按 2 倍算 |
| CanvasKit 5.46 → 3.75 MB | 官方下载体积，且是 WebParagraph preview 路径 | 体积可信，但现在还不是默认 |
| DevTools 冷重命名 2.0s → 0.9s | 官方单次测量（16-context 工作区） | 数量级可信，具体秒数别当真 |
| AdMob 内联横幅 iOS +23% | 生态包自测 | 单一场景，仅供参照 |
| 100 万 Play Store 应用 | 官方统计 | 累计上架数，不是活跃数 |

再加一条不算数字、但比数字重要的：`ignoringSemantics` 在 `IgnorePointer`、`AbsorbPointer`、`SliverIgnorePointer` 上被彻底移除了；`RenderProxyBox` 的 `computeDryBaseline` 在子节点无基线时改为返回 `null`，不再断言失败。**这类"清理型"破坏性变更从来不上头条，但升级时的编译错误一大半来自它们。**

## 你该先做哪一件

按代价从低到高，我自己的排序是这样：

| 顺序 | 动作 | 代价 | 不做会怎样 |
|---|---|---|---|
| 1 | `flutter upgrade` 后跑一遍 `dart fix --apply --code=migrate_design_widgets` | 一条命令 | 下个版本里 import 全红 |
| 2 | CI 加 `--no-deprecated-js-interop` | 一个参数 | 等到旧 JS 库被删，一次性还债 |
| 3 | 应用开 `--web-content-hash`，改缓存头 | 半天 | 缓存命中率上不去，或上线后用户看到旧版 |
| 4 | 依赖树里的 pod 全部换 SwiftPM | 一天到一周，看依赖 | 2026-12 之后没法发新版 |
| 5 | 自研插件迁 Built-in Kotlin | 一天 | AGP 10 下构建失败 |
| 6 | 自己的 design system 与 `material_ui` 对齐 | 按规模，最贵 | 每升一版都在旧 import 上叠一层补丁 |

有一件**现在不用做**：为了 HCPP 去改代码。门槛是 API 34 + Vulkan，稳定版还没默认，等它默认了再说。

也有一件**现在就该确认**：你的构建机是不是 Apple Silicon。Intel Mac 上这一版只警告一次，但"不再测试"之后，"不再支持"通常只隔一两个版本。提前用 `flutter config --enable-macos-arm64-only` 出一版纯 Apple Silicon 的产物试试水，比到时候被动换机器强。

## 参考

- [What's new in Flutter 3.50（官方博客）](https://flutter.dev/blog/whats-new-in-flutter-3-50)
- [Flutter 3.50 release notes](https://docs.flutter.dev/release/release-notes)
- [Flutter 迁移指南：material_ui / cupertino_ui](https://docs.flutter.dev/release/breaking-changes)
- [Dart 3.14 发布说明](https://dart.dev/blog)
