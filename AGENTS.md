# AGENTS.md - 开发指南

OldBird 个人技术博客（线上地址 https://oldbird.run）。
VitePress `1.6.4` + Vue 3，Yarn 4.6.0，Node ≥ 20.6。
纯静态站点，**没有单元测试**——验证手段是 `yarn dev` 本地预览和 `yarn build` 构建通过。

> 2026-10 从 VuePress 2 + theme-plume 迁移而来。旧配置目录 `docs/.vuepress/` 已删除，
> 若在历史提交里看到它，仅作参考，不要照搬。

## 常用命令

```bash
yarn                # 安装依赖
yarn dev            # 本地开发服务器
yarn build          # 生产构建
yarn preview        # 预览构建产物
./deploy.sh         # 部署：构建 → 校验 → 推源码 → rsync → 探活
```

## 项目结构

```
swiftdo.github.io/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts        # 站点主配置（导航、搜索、sitemap、重定向）
│   │   ├── sidebar.ts        # 侧边栏生成器（扫描目录树）
│   │   ├── frontmatter.ts    # frontmatter 解析（只读开头 --- 块）
│   │   ├── redirects.json    # 旧 URL → 现 URL 映射（614 条）
│   │   └── theme/
│   │       ├── index.ts      # 主题入口：注册组件、挂载 AdSense
│   │       ├── custom.css    # 样式覆盖
│   │       └── components/   # HomeShowcase、Portfolio、YiqiguaDocAddon、YiqiguaPromo
│   ├── .env                  # VITE_EXTRA_EXTENSIONS：让 .html 直链不被 SPA 路由拦截
│   ├── public/               # 静态资源，原样复制到站点根（图片、推广页、ads.txt）
│   ├── index.md              # 首页（layout: home）
│   ├── article/              # 博客文章，一篇一个目录
│   ├── blog/                 # 博客列表页 + posts.data.ts
│   ├── book/  result/        # 书单、作品集
│   └── {swift,flutter,ai,...}/   # 14 个笔记集合
├── deploy.sh
└── package.json
```

## URL 机制（最关键，改动前必读）

**URL 就是文件路径，没有中间层。** VitePress 的规则：

```
docs/index.md                -> /
docs/swift/index.md          -> /swift/
docs/swift/swiftui/alert/index.md -> /swift/swiftui/alert/
docs/swift/swiftui/alert.md  -> /swift/swiftui/alert.html   ← 别这么放
```

所以站内 392 个带尾斜杠的 URL（`/swift/swiftui/action-sheet/`）由**目录结构本身**保证，
不再有 `permalink` frontmatter、也没有 rewrites。改 URL 的唯一方式就是移动/重命名目录。

- **新增页面**：建目录 + `index.md`，目录名就是 URL 段。目录名全小写 kebab-case。
- **不要**把页面写成 `foo.md`，那会得到 `/foo.html`，与全站 URL 风格不一致。
- 不要开 `cleanUrls: true`，那会丢掉尾斜杠，等于让 392 个已收录 URL 全部失效。
- 移动已有页面记得在 `redirects.json` 补旧链接。

## Frontmatter 规范

```yaml
---
title: 页面标题
description: 一句话摘要（≤120 字，用于 meta description 与搜索结果）
createTime: 2025/08/13 09:21:29           # 仅展示用，可省略
date: 2025-08-13                          # 博客文章用
tags:                                     # 仅博客文章用
  - SwiftUI
sitemap: false                            # 正文为空的占位页用，从 sitemap 排除
---
```

- **没有 `permalink` 字段**，URL 由路径决定；写了也不会生效。
- `createTime` / `date` / `tags` 不是 VitePress 内置字段，仅用于展示或数据加载，不会报错。
- `sitemap: false` 由 `config.mts` 的 `collectSitemapExcluded()` 识别，从 sitemap.xml 中剔除（现有 46 篇占位页在用）。
- 正文里**不要用相对链接**（`./xxx.md`）。站内链接一律写绝对路径 `/swift/swiftui/alert/`。
- 构建有死链检查，站内链接写错会直接 fail；`http://localhost:*` 已加入白名单。

## 文件组织

- 一个页面一个目录：`docs/<段>/<段>/index.md`。同主题内容天然形成层级，层级即侧边栏分组。
- 分组目录可以没有 `index.md`（只用来收拢几篇笔记）；这类目录的显示名和顺序在 `sidebar.ts` 的 `GROUPS` 里声明。
- 文件名固定为 `index.md`，不再有用文件名排序的余地——**侧边栏顺序按 `title` 的自然排序**，需要强顺序就调整 `GROUPS` 或标题。
- 目录名 kebab-case，全小写。旧的 `t1-`、`2.基础` 这类前缀已随迁移去掉。

## 侧边栏与导航

**侧边栏是自动生成的，不要手写。** `sidebar.ts` 的 `buildSidebar()` 扫描 `docs/<集合>/`：

- 含 `index.md` 的目录 → 可点击的分组（文字取该页 `title`，链接为该目录 URL），其子目录继续递归。
- 不含 `index.md` 的目录 → 纯分组，文字取 `GROUPS` 里的声明，未声明则用目录名。
- 同级内页码按 `title` 自然排序（`localeCompare(..., { numeric: true })`）；纯分组按 `GROUPS` 数组顺序。

- 新增笔记集合：`sidebar.ts` 的 `COLLECTIONS` 加一项 → `config.mts` 的 `nav` 加入口。两步缺一不可。
- 顶部导航在 `config.mts` 的 `themeConfig.nav`，VitePress 只支持二级菜单（原三级菜单已扁平化）。
- 搜索用 VitePress 内置的 local provider，无需额外配置。

## 博客列表

`docs/article/<slug>/index.md` 是文章本体；`docs/blog/index.md` 通过 `posts.data.ts`
（`createContentLoader('article/*/index.md')`）在构建时收集全部文章，按 `date` 倒序渲染。
URL 直接用 loader 给出的 `url`，不需要额外字段。

## public 静态资源

`docs/public/` 下的文件构建时原样复制到站点根，`https://oldbird.run/xxx` 直接可访问
（`ads.txt`、`logo.png`、`yiqigua.html`、`imgs/` 等），与旧站行为一致。

`docs/.env` 里的 `VITE_EXTRA_EXTENSIONS=html,htm,apk` 是必需的：客户端路由默认只把
「已知静态资源扩展名」当文件，其余一律当站内页面去加载 md 模块，于是点 `/yiqigua.html`
会回退到 404 组件。声明后这些链接不再被拦截，交给浏览器整页加载。

## 自定义组件与主题

- 组件放 `docs/.vitepress/theme/components/`，在 `theme/index.ts` 用 `app.component()` 注册后即可在 markdown 里直接使用。
- `YiqiguaDocAddon` 是全局挂载（通过 `Layout` 的 `layout-bottom` 插槽），不是普通组件。
- 样式覆盖走 `theme/custom.css`（CSS 变量，含深浅色两套）。组件里的 `--vp-c-*` 变量与 VitePress 同名，可直接复用。
- `theme/index.ts` 还负责注入 AdSense 脚本（有防重复加载守卫），改动时别破坏这个逻辑。
- 需要整页加宽的页面用 frontmatter `pageClass`，再在 `custom.css` 里按该类覆盖
  `.content-container` 的 `max-width`（默认 688px）。用 `:has()` 不可靠，见作品集页。

## 重定向

`config.mts` 的 `buildEnd` 钩子在构建后读取 `redirects.json`，为每个来源路径生成
一个静态跳转页（meta refresh + `noindex`），共 614 条、307 个唯一路径。

- 格式：`{ "/old-path": "/new-path/", "/old-path/": "/new-path/" }`，**每条要写带尾斜杠和不带尾斜杠两个 key**。
- 生成的跳转页带 `noindex, nofollow` 且不进 sitemap，不会产生重复收录。
- 新增重定向直接改 `redirects.json`，不需要动代码。

## TypeScript 约定

- ESM（`"type": "module"`），`import { X } from 'package'`，`export default`。
- 相对导入不要写 `.mts` 后缀（esbuild 不识别），扩展名保持 `.ts`。
- 导入顺序：Node 内置 → npm 包 → 本地文件。

## 部署

`./deploy.sh` 一条龙：构建 → 产物校验 → 提交并推送源码 → rsync 到自建服务器（**不是 GitHub Pages**）→ 线上探活。

先推源码再上传，是为了保证线上产物一定对应某个已推送的提交；任一步失败都会中止，不会留下「站点已更新、代码没推」的状态。

常用参数与环境变量：

```bash
./deploy.sh --dry-run      # 构建 + 预览 rsync 会做什么（不上传、不提交）
./deploy.sh --no-git       # 只部署
./deploy.sh --skip-build   # 复用已有 dist
./deploy.sh -m "说明"      # 自定义提交信息（默认 update）
RSYNC_DELETE=0 ./deploy.sh # 保留服务端多余文件
```

- 产物目录是 `docs/.vitepress/dist`（迁移前是 `docs/.vuepress/dist`）。
- **产物校验**：dist 缺 `index.html` 或文件数 < 200 直接中止。空产物 + `--delete-after` 会清空线上目录，这道闸不能去。
- `.user.ini`、`.well-known/***`、`.htaccess`、`*.log` 在排除列表里，**不会被删除**，可安全放置面板或证书验证文件。
- 服务器地址、端口、目标目录可用 `DEPLOY_SERVER` / `DEPLOY_PORT` / `DEPLOY_DIR` 覆盖；`VERIFY_URL` 设空字符串可跳过探活。
- 探活非 200 只告警不中断（可能是 CDN 缓存或地址写错），以 rsync 结果为准。
- 构建日志落在 `.deploy-build.log`（已 gitignore），失败时直接看这个文件。

## 排错速查

| 症状 | 处理 |
|---|---|
| 页面 404 | 检查是不是写成了 `foo.md`（得到 `/foo.html`）；要 `/foo/` 就得是 `foo/index.md` |
| 构建报 dead link | 站内链接必须写绝对路径且带尾斜杠，不要用相对链接 |
| 页面没有侧边栏 | 该顶层目录是否在 `sidebar.ts` 的 `COLLECTIONS` 里 |
| 侧边栏分组名变成英文 slug | 该目录没有 `index.md`，需要在 `sidebar.ts` 的 `GROUPS` 补显示名 |
| 侧边栏顺序不对 | 排序看 `title`，纯分组看 `GROUPS` 数组顺序 |
| 旧文章链接 404 | 在 `redirects.json` 补映射（带/不带尾斜杠两条） |
| 点 `public/` 里的 `.html` 显示"页面不存在" | `docs/.env` 的 `VITE_EXTRA_EXTENSIONS` 是否还在、是否包含 `html` |
| 代码块高亮报错 | Shiki 不认识该语言，改成 `text` 或确认是内置语言 |
| 缓存导致内容不更新 | 删 `docs/.vitepress/cache` 后重新构建 |
