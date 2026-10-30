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

- `docs/.vitepress/config.mts`：站点主配置。导航、搜索、sitemap、重定向生成、页脚。
- `docs/.vitepress/sidebar.ts`：侧边栏生成器，扫描 `docs/<集合>/` 目录树，**不要手写侧边栏**。
- `docs/.vitepress/frontmatter.ts`：frontmatter 解析（只读文件开头 `---` 块）。
- `docs/.vitepress/theme/index.ts`：主题入口，注册全局 Vue 组件、挂载 AdSense。
- `docs/.vitepress/redirects.json`：614 条旧 URL 映射，`buildEnd` 会据此生成静态跳转页。
- `docs/.env`：`VITE_EXTRA_EXTENSIONS=html,htm,apk`，让 `public/` 里的 `.html` 直链不被 SPA 路由拦截。

## URL 机制（最容易踩坑）

**URL 就是文件路径，没有 permalink、没有 rewrites。**

```
docs/index.md                     -> /
docs/swift/index.md               -> /swift/
docs/swift/swiftui/alert/index.md -> /swift/swiftui/alert/
```

- 新增页面 = 建目录 + `index.md`，目录名即 URL 段，全小写 kebab-case。
- 别写成 `foo.md`，那会得到 `/foo.html`，与全站尾斜杠风格不一致。
- 不要开 `cleanUrls`，那会丢掉尾斜杠，让 392 个已收录 URL 失效。
- 移动已有页面要在 `redirects.json` 补旧链接。

## 内容约定

- frontmatter：`title`、`description` 必备；博客文章另加 `date`、`tags`。**不写 `permalink`**（写了不生效）。
- **站内链接一律写绝对路径**（`/swift/swiftui/alert/`），相对链接会导致构建报 dead link。
- 一个页面一个目录，文件名固定 `index.md`；侧边栏顺序按 `title` 自然排序。
- 无 `index.md` 的纯分组目录，显示名与顺序在 `sidebar.ts` 的 `GROUPS` 里声明。
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
