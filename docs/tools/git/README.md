---
title: 'Git'
sitemap:
  exclude: false
  changefreq: hourly
---

## 提交规范

在多人协作项目中，如果代码风格统一、代码提交信息的说明准确，那么在后期协作以及 Bug 处理时会更加方便。

* feat：    新功能（feature）
* fix：     修补bug
* docs：    文档（documentation）
* style：   格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：    增加测试
* chore：   构建过程或辅助工具的变动

如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。

> 参考：[git commit 提交规范 & 规范校验](https://blog.csdn.net/y491887095/article/details/80594043)