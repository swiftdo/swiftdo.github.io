---
title: "OpenAI 收购 Pierre：给 Codex 补上 Git 这一层"
description: "OpenAI 收购 Pierre Computer Company，把 Trees、Diffs 与 Code Storage 并入 Codex——补的是 agent 时代 Git 这一层。"
createTime: 2026/11/05 13:55:36
date: 2026-11-05

---

# OpenAI 收购 Pierre：给 Codex 补上 Git 这一层

11 月 4 日，OpenAI 宣布收购 Pierre Computer Company。公告里只有一句说明：这笔交易用来扩展 Codex 在「写代码、理解代码、审阅代码」上的工具链。金额没披露，按媒体的说法，还要过监管审批。

## Pierre 是谁

Pierre 是 YC 出来的开发者工具公司，最早的切口是代码评审——把「合并之前先把改动摊开来讨论」做成产品。后来它做了 Code Storage：一个给 AI agent 存代码的云服务，顺带存许可证、设计稿这类文件。官方拿 Lovable 举例，说代码检索延迟降了约 70%。

真正让这笔交易成立的是另外几个开源库。Trees、Diffs、Highlights 都是开源的，Codex 的界面里已经在用前两个：Trees 管项目文件树的导航，Diffs 负责把改动逐行摊开、让人直接在 diff 里改，Highlights 是边写边亮的实时语法高亮。

## 买的是什么

一句话：Git 这一层跟不上 agent 了。

过去一年 coding agent 的工作方式变了。不是一个人对着编辑器敲，而是一堆 agent 并行开分支、改文件、提 PR。人看 diff 的速度成了瓶颈，而 Git 本身是照着「一次一个人改一点」设计的。

OpenAI 自己的动作能对上：就在收购前一天，它公开了 Pando——内部使用的 Git 后端，专门优化 agent 建文件、读文件的耗时。Pierre 这边，Trees 和 Diffs 解决「看」，Code Storage 解决「存」，三块拼起来正好是一条从生成到评审的链。

Axios 的独家报道把话说得更直白：这是冲微软的 GitHub 去的。

## 还没确定的

- 金额没披露。
- 交易尚未完成，要等监管批准。
- 开源库会继续开源；但 Code Storage 这类付费服务怎么并进 Codex，公告里没有细节。
- Pierre 团队之后做什么，官方口径只有一句「发布新产品和平台」。

## 一点观察

这类收购常被读成「大厂抢人」，但这次的产品逻辑比人才逻辑清楚：Codex 缺的不是模型，是模型产出之后的那套协作设施——文件怎么组织、改动怎么呈现、版本怎么存。这三件事 GitHub 做了十几年，只是它默认操作者是人手。

Pierre 值多少不好判断，但它补的位置很明确。能不能真的把 GitHub 的活抢过来，要看 Code Storage 并进 Codex 之后，团队协作是不是真的比 PR 流更顺。现在下结论太早。

## 参考

- [OpenAI 公告](https://openai.com/index/openai-to-acquire-pierre)
- [SiliconANGLE 报道](https://siliconangle.com/2026/11/04/openai-to-acquire-developer-tooling-startup-pierre-computer/)
- [The Decoder 报道](https://the-decoder.com/openai-acquires-pierre-computer-company-to-make-git-keep-up-with-ai-coding-agents/)
- [Scaling Git at OpenAI（Pando）](https://openai.com/index/scaling-git-at-openai/)
- [OpenAI Newsroom 的推文](https://x.com/OpenAINewsroom/status/2117999237745049883)
