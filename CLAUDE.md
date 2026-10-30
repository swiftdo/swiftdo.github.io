# CLAUDE.md

本文件为 AI 编码助手提供仓库上下文。**详细规范以 `AGENTS.md` 为准**，此处只列关键事实，避免两份文档各说各话。

## 项目

OldBird 个人技术博客，VitePress `1.6.4` + Vue 3，Yarn 4.6.0。
线上地址 https://oldbird.run，纯静态站点，**无单元测试**。
2026-10 从 VuePress 2 + theme-plume 迁移而来，旧目录 `docs/.vuepress/` 已删除。

## 命令

```bash
yarn          # 安装依赖
yarn dev      # 本地开发
yarn build    # 生产构建（产物在 docs/.vitepress/dist）
yarn preview  # 预览构建产物
./deploy.sh   # 构建 → 校验 → 推源码 → rsync → 探活
```

## 配置分工

- `docs/.vitepress/config.mts`：站点主配置。导航、搜索、sitemap、`rewrites`、重定向生成、页脚。
- `docs/.vitepress/sidebar.ts`：侧边栏生成器，扫描 `docs/notes/<集合>/` 目录树，**不要手写侧边栏**。
- `docs/.vitepress/theme/index.ts`：主题入口，注册全局 Vue 组件、挂载 AdSense。
- `docs/.vitepress/redirects.json`：614 条旧 URL 映射，`buildEnd` 会据此生成静态跳转页。

## URL 机制（最容易踩坑）

`config.mts` 的 `buildRewrites()` 扫描每篇 md 的 `frontmatter.permalink`，生成
`源文件 → <permalink>/index.md` 的映射，让 VitePress 输出 `<permalink>/index.html`。
这样 392 个已有尾斜杠 URL 全部保持不变，且**不需要移动源文件**。

- `permalink` 是 URL 的唯一来源，改它等于换 URL，必须同步 `redirects.json`。
- 新增文章必须**手写 `permalink`**（不再有 autoFrontmatter）。
- 不要开 `cleanUrls`，那会丢掉尾斜杠，让全部已收录 URL 失效。

## 内容约定

- 每篇 md 需 frontmatter：`title`、`description`、`permalink`（`/` 开头和结尾、全小写、kebab-case）；博客文章另加 `date`、`tags`。
- **站内链接一律写绝对路径**（`/swift/swiftui/action-sheet/`）。rewrites 下相对链接必然失效并导致构建报 dead link。
- 专题目录用 `README.md` 作落地页，其 permalink 就是该目录（不带 `readme` 段）。
- 有序内容用 `t1-`/`t2-`，补充内容用 `u1-`/`y1-`。
- `sitemap: false` 可将空占位页排除出 sitemap（现有 46 篇在用）。

## 部署

`./deploy.sh`：`yarn build` → 产物校验 → `git add -A && git commit && git push` → `rsync --delete-after` 到自建服务器 `root@106.52.236.186:2002:/www/wwwroot/oldbird.run` → 线上探活。
先推源码再上传，任一步失败即中止；产物缺失或文件数 < 200 时直接中止（防空产物清空线上目录）。
`.user.ini` / `.well-known/***` / `.htaccess` 在 rsync 排除列表内，不会被删除。
**不是 GitHub Pages**，`swiftdo.github.io` 只是仓库名。

## 已知提示

- Shiki 不认识的语言（如 plantuml）会让构建失败，需改成 `text`。
- 构建有死链检查，站内链接错误会直接 fail；`http://localhost:*` 已加入白名单。
- 相对导入不要写 `.mts` 后缀（esbuild 不识别），扩展名保持 `.ts`。
