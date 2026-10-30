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
│   │   ├── config.mts        # 站点主配置（导航、搜索、sitemap、rewrites、重定向）
│   │   ├── sidebar.ts        # 侧边栏生成器（扫描 notes/ 目录树）
│   │   ├── redirects.json    # 旧 URL → 新 URL 映射（614 条）
│   │   └── theme/
│   │       ├── index.ts      # 主题入口：注册组件、挂载 AdSense
│   │       ├── custom.css    # 样式覆盖
│   │       └── components/   # HomeShowcase、Portfolio、YiqiguaDocAddon、YiqiguaPromo
│   ├── public/               # 静态资源，原样复制到站点根（图片、推广页、ads.txt）
│   ├── README.md             # 首页（layout: home）
│   ├── notes/                # 笔记专题，14 个集合
│   ├── blog/                 # 博客文章 + index.md 列表页 + posts.data.ts
│   ├── book/                 # 书单
│   └── result/               # 作品展示
├── deploy.sh
└── package.json
```

## URL 机制（最关键，改动前必读）

站点有 392 个被搜索引擎收录的**带尾斜杠 URL**（如 `/swift/swiftui/action-sheet/`）。
VitePress 的 URL 由输出文件路径决定：`foo.md` → `/foo.html`，`foo/index.md` → `/foo/`。
为了不移动任何源文件，`config.mts` 的 `buildRewrites()` 在构建时扫描每个 md 的
`frontmatter.permalink`，生成 `源文件路径 → <permalink>/index.md` 的 rewrites 映射。

```
docs/notes/swift/swiftui/ActionSheet.md  (permalink: /swift/swiftui/action-sheet/)
        ↓ rewrites
/swift/swiftui/action-sheet/index.html  →  URL /swift/swiftui/action-sheet/
```

因此：

- **`permalink` 是 URL 的唯一来源**，改了它就等于换了 URL。改完必须在 `redirects.json` 补旧链接。
- 新增文章**必须手写 `permalink`**（迁移后不再有 autoFrontmatter 自动生成）：以 `/` 开头、以 `/` 结尾、全小写、kebab-case。
- 不要改成 `cleanUrls: true`，那会丢掉尾斜杠，等于让 392 个已收录 URL 全部失效。

## Frontmatter 规范

```yaml
---
title: 页面标题
description: 一句话摘要（≤120 字，用于 meta description 与搜索结果）
permalink: /swift/swiftui/action-sheet/   # 必须以 / 开头和结尾
createTime: 2025/08/13 09:21:29           # 仅展示用，可省略
date: 2025-08-13                          # 博客文章用
tags:                                     # 仅博客文章用
  - SwiftUI
sitemap: false                            # 正文为空的占位页用，从 sitemap 排除
---
```

- `createTime` / `date` / `tags` 不是 VitePress 内置字段，仅用于展示或数据加载，不会报错。
- `sitemap: false` 由 `config.mts` 的 `collectSitemapExcluded()` 识别，从 sitemap.xml 中剔除（现有 46 篇占位页在用）。
- 正文里**不要用相对链接**（`./xxx.md`）。rewrites 改变了 URL 空间，相对链接会解析成不存在的路径并导致构建失败。站内链接一律写绝对路径 `/swift/swiftui/action-sheet/`。
- 构建有死链检查，站内链接写错会直接 fail；`http://localhost:*` 已加入白名单。

## 文件组织

- 同主题内容放子目录（如 `notes/swift/ios/`、`notes/ai/2.ml/`）。
- 每个专题目录以 `README.md` 作为落地页，`permalink` 就是该目录（不带 `readme` 段）。
- 有序内容用 `t1-`、`t2-` 前缀；补充内容用 `u1-`、`y1-` 前缀。文件名里的 `数字.` 前缀不影响 URL（URL 由 permalink 决定）。
- 文件名 kebab-case。
- `design-patterns` 的五个中文目录在 URL 中映射为英文：`1.设计原则→principles`、`2.基础→basics`、`3.创建型→creational`、`4.结构型→structural`、`5.行为型→behavioral`。目录名保留中文，用于侧边栏分组显示。

## 侧边栏与导航

**侧边栏是自动生成的，不要手写。** `sidebar.ts` 的 `buildSidebar()` 扫描 `docs/notes/<集合>/`，
按目录树生成分组：目录 → 可折叠分组（标题取该目录 README 的 title），md 文件 → 链接（标题取 frontmatter.title）。
排序用 `localeCompare(..., { numeric: true })`，所以 `t2` 会正确排在 `t10` 前面。

- 新增笔记集合：在 `sidebar.ts` 的 `COLLECTIONS` 数组加一项 → `config.mts` 的 `nav` 加入口。两步缺一不可。
- 顶部导航在 `config.mts` 的 `themeConfig.nav`，VitePress 只支持二级菜单（原三级菜单已扁平化）。
- 搜索用 VitePress 内置的 local provider，无需额外配置。

## 博客列表

`docs/blog/index.md` 通过 `posts.data.ts`（`createContentLoader`）在构建时读取所有博客 frontmatter，
自动渲染列表并按 `date` 倒序。新增博客文章只要放进 `docs/blog/` 并写好 frontmatter，列表会自动出现。
URL 取的是 `frontmatter.permalink`（`/article/xxx/`），不是文件路径。

## 自定义组件与主题

- 组件放 `docs/.vitepress/theme/components/`，在 `theme/index.ts` 用 `app.component()` 注册后即可在 markdown 里直接使用。
- `YiqiguaDocAddon` 是全局挂载（通过 `Layout` 的 `layout-bottom` 插槽），不是普通组件。
- 样式覆盖走 `theme/custom.css`（CSS 变量，含深浅色两套）。组件里的 `--vp-c-*` 变量与 VitePress 同名，可直接复用。
- `theme/index.ts` 还负责注入 AdSense 脚本（有防重复加载守卫），改动时别破坏这个逻辑。

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
| 构建报 dead link | 站内链接必须写绝对路径且带尾斜杠，相对链接在 rewrites 下必然失效 |
| 页面 404 | 检查 `frontmatter.permalink` 是否以 `/` 结尾；构建后看是否生成 `<permalink>/index.html` |
| 页面没有侧边栏 | 该目录是否在 `sidebar.ts` 的 `COLLECTIONS` 里 |
| 旧文章链接 404 | 在 `redirects.json` 补映射（带/不带尾斜杠两条） |
| 代码块高亮报错 | Shiki 不认识该语言，改成 `text` 或确认是内置语言 |
| 缓存导致内容不更新 | 删 `docs/.vitepress/cache` 后重新构建 |
