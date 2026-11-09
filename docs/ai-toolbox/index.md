---
title: AI 工具箱
description: "AI 工具推荐合集：Agent Skills、MCP Server、Agent、CLI 与 agentic IDE，逐个上手，记录它到底能干什么、哪里会卡。"
createTime: 2026/10/31 21:30:00
---

这里收 AI 工具：小到一份 2KB 的行为约束，大到一整台 agentic IDE。共同点是它们都改变了你和模型协作的方式，而不只是多了一个聊天入口。

每篇只回答四个问题：它替代了原来的哪一步手工活、关键设计是什么、怎么跑起来、哪里会卡。工具都会更新，所以每篇正文都标了结论的时间点；star 数和 issue 状态也只代表收录那天的快照。

## 分类

| 分类 | 说明 |
|---|---|
| Skills | 以 `SKILL.md` 为载体的能力包，装进 agent 后按需加载 |
| MCP | Model Context Protocol 服务器，把外部数据和工具接进模型 |
| Agents | 能自己拆任务、调工具、跑多步流程的执行体 |
| CLI | 命令行或编辑器插件形态的 AI 工具 |
| 应用 | 桌面或 Web 形态的完整产品，装上就得换一部分工作习惯 |
| DSH | DeepSeek Harness 专属生态：插件、配置与实操实践 |

## 收录清单

| 工具 | 分类 | 一句话 | 收录 |
|---|---|---|---|
| [andrej-karpathy-skills](/ai-toolbox/skill/andrej-karpathy-skills/) | Skill | 四条行为纪律：先想再写、简洁优先、精准修改、目标驱动 | 2026-10-31 |
| [dsh-desktop-plugins](/ai-toolbox/dsh/plugins/) | DSH | 10 款核心第三方插件深度盘点：模型接入、上下文治理、记忆与工作流增强 | 2026-11-09 |
| [dsh-our-free-model](/ai-toolbox/cli/dsh-our-free-model/) | CLI | 免账号白嫖免费模型——这篇是风险说明，不是推荐 | 2026-10-31 |
| [dsh-superagent](/ai-toolbox/agent/dsh-superagent/) | Agents | DeepSeek 的数字同事原型：准入表 + 带版本的授权，默认只记录不行动 | 2026-11-01 |
| [hallmark](/ai-toolbox/skill/hallmark/) | Skill | 三层门禁 + 50 份「材料」，每页第一个 CSS 注释是它的印章 | 2026-10-31 |
| [handraw-style](/ai-toolbox/skill/handraw-style/) | Skill | 365 种画风 + 170 种排版编号化，选定编号出双语提示词 | 2026-10-31 |
| [huashu-design](/ai-toolbox/skill/huashu-design/) | Skill | 92 种风格库 + 六个候选挑三版，直接出 PPTX / MP4 / 小红书图 | 2026-10-31 |
| [humanizer](/ai-toolbox/skill/humanizer/) | Skill | 26 个模式清掉文字里的 AI 味，依据是维基百科的识别指南 | 2026-10-31 |
| [hyperframes](/ai-toolbox/cli/hyperframes/) | CLI | 写 HTML 出视频：可 seek 动画 + 逐帧渲染，同输入同输出 | 2026-10-31 |
| [impeccable](/ai-toolbox/skill/impeccable/) | Skill | 24 个设计动词 + 62 条确定性规则，把反 slop 做成 CI 门禁 | 2026-10-31 |
| [last30days](/ai-toolbox/skill/last30days/) | Skill | 跨二十来个平台并行搜话题，按点赞与赔率排序后合成简报 | 2026-10-31 |
| [openbot](/ai-toolbox/app/openbot/) | 应用 | 多 agent 团队的工位、队列与频道，本地优先、可自托管 | 2026-10-31 |
| [rea](/ai-toolbox/mcp/rea/) | MCP | 让 agent 直接看二进制、APK、固件，结论带证据与局限 | 2026-10-31 |
| [remotion](/ai-toolbox/cli/remotion/) | CLI | 用 React 写视频：五年生态、四条渲染路径、两档授权 | 2026-10-31 |
| [security-audit](/ai-toolbox/skill/security-audit/) | Skill | Cloudflare 的六阶段安全审计：覆盖率账本 + 对抗式验证 | 2026-10-31 |
| [skillspector](/ai-toolbox/cli/skillspector/) | CLI | 装技能前先扫一遍：71 个模式，26.1% 的技能有漏洞 | 2026-10-31 |
| [srt-whiteboard-animation](/ai-toolbox/skill/srt-whiteboard-animation/) | Skill | 把 SRT 字幕按叙事顺序画成白板手绘动画，直出 MP4 | 2026-10-31 |
| [taste-skill](/ai-toolbox/skill/taste-skill/) | Skill | 给 coding agent 设计品味，再用真实浏览器量到 0 FAIL | 2026-10-31 |
| [thinkrail](/ai-toolbox/app/thinkrail/) | 应用 | JetBrains 的 agentic IDE：worktree 隔离 + 真 IDE 审查 + 活的 specs | 2026-10-31 |

## 收录标准

- **说得清它省掉了哪一步手工活。**「又一个 AI 工具」不值得单独写一篇。
- **有可复现的上手路径。**命令、参数、环境要求都要能照着敲；跑不通就写跑不通，不拿「效果因模型而异」糊过去。
- **坑写在正文里。**放在最后一节的免责声明里的坑，等于没写。
- **不推荐的也会收。**热度高到绕不开的东西，与其让读者自己踩，不如写清它把成本转移到了哪里——这类条目会在标题和摘要里直接标出来。
