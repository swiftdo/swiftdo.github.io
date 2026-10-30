# CLAUDE.md

本文件为 AI 编码助手提供仓库上下文。**详细规范以 `AGENTS.md` 为准**，此处只列关键事实，避免两份文档各说各话。

## 项目

OldBird 个人技术博客，VuePress 2（`2.0.0-rc.31`）+ vuepress-theme-plume（`1.0.0-rc.214`），Vite bundler，Yarn 4.6.0。
线上地址 https://oldbird.run，纯静态站点，**无单元测试**。

## 命令

```bash
yarn                  # 安装依赖
yarn docs:dev         # 本地开发
yarn docs:dev-clean   # 清缓存后开发（行为异常时用）
yarn docs:build       # 生产构建
yarn docs:preview     # 预览构建产物
./deploy.sh           # 构建 → rsync 到服务器 → git push
```

## 配置分工

- `docs/.vuepress/config.ts`：站点级配置（bundler、插件、GA、autoFrontmatter、搜索）。改动会重启 dev server。
- `docs/.vuepress/plume.config.ts`：主题配置（logo、深色模式、导航、页脚、公告板）。热更新。
- 两者不要重复配置，`plume.config.ts` 覆盖前者。
- `docs/.vuepress/collections.ts`：1 个 `post`（`docs/blog/`，前缀 `/article/`）+ 15 个 `doc`（`docs/notes/*`），侧边栏由 `linkPrefix` 匹配。
- `docs/.vuepress/navbar.ts`：顶部导航。新增专题需同时改 collections 与 navbar。
- `docs/.vuepress/client.ts`：注册全局 Vue 组件 + 注入 AdSense。
- `docs/.vuepress/redirects.json`：旧 `/article/*` 链接到新笔记 URL 的映射，移动文件时必须补。

## 内容约定

- 每篇 md 需 frontmatter：`title`、`createTime`、`permalink`；博客文章另加 `tags`。
- `permalink` 必须以所属集合的 `linkPrefix` 开头，否则侧边栏不显示。
- 专题目录用 `README.md` 作落地页；有序内容用 `t1-`/`t2-`，补充内容用 `u1-`/`y1-`。
- 主题的 `autoFrontmatter` 会在构建时回写 frontmatter（补齐 title/permalink，并规范化 YAML 格式），属于预期行为，不要把它当脏改动回滚。

## 部署

`./deploy.sh`：`yarn docs:build` → `rsync --delete-after` 到自建服务器 `root@106.52.236.186:2002:/www/wwwroot/oldbird.run` → `git add -A && git commit -m "update" && git push`。
服务器地址/端口/目录可用 `DEPLOY_SERVER` / `DEPLOY_PORT` / `DEPLOY_DIR` 覆盖；`RSYNC_DELETE=0` 可关闭服务端删除。
**不是 GitHub Pages**，`swiftdo.github.io` 只是仓库名。

## 已知提示

- 构建日志中的 `@vuepress/plugin-shiki: Missing plantuml highlighter` 属正常提示，PlantUML 代码块仅不着色，不影响构建。
- 代码块复制按钮由主题内置（`copyCode` 默认开启），不要在 `config.ts` 里重复注册 `copyCodePlugin`，否则会告警「used multiple times」。
