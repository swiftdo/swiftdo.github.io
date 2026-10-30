# AGENTS.md - 开发指南

OldBird 个人技术博客（线上地址 https://oldbird.run）。
VuePress `2.0.0-rc.31` + vuepress-theme-plume `1.0.0-rc.214` + Vite bundler，Yarn 4.6.0，Node ≥ 20.6。
纯静态站点，**没有单元测试**——验证手段是 `yarn docs:dev` 本地预览和 `yarn docs:build` 构建通过。

## 常用命令

```bash
yarn                    # 安装依赖
yarn docs:dev           # 启动本地开发服务器
yarn docs:dev-clean     # 清缓存/临时文件后启动（行为异常时优先用它）
yarn docs:build         # 生产构建（自带 --clean-cache --clean-temp）
yarn docs:preview       # 本地预览构建产物（http-server dist）
yarn vp-update          # 升级 VuePress 与主题
./deploy.sh             # 部署：构建 → rsync 到服务器 → git push
```

## 项目结构

```
swiftdo.github.io/
├── docs/
│   ├── .vuepress/
│   │   ├── config.ts        # 站点主配置（bundler、插件、GA）——改动会重启 dev server
│   │   ├── plume.config.ts  # 主题配置（页脚、profile、公告板）——热更新
│   │   ├── navbar.ts        # 顶部导航
│   │   ├── collections.ts   # 全部内容集合（1 post + 15 doc）
│   │   ├── redirects.json   # 旧 /article/ → 新 URL 重定向映射
│   │   ├── client.ts        # 客户端增强：注册全局组件 + AdSense 注入
│   │   ├── components/      # 自定义 Vue 组件（HomeShowcase、Portfolio 等）
│   │   ├── theme/           # 主题覆盖：components/Custom.vue、styles/custom.css
│   │   └── public/          # 静态资源（图片、各产品推广页、隐私政策页）
│   ├── README.md            # 首页
│   ├── notes/               # 笔记专题（swift 146 篇为主力，另有 ai/flutter/yijing 等 15 个）
│   ├── blog/                # 博客文章（post 类型）
│   ├── book/                # 书单
│   └── result/              # 作品展示
├── deploy.sh
└── package.json
```

## 配置架构（关键）

两份配置文件，**职责不同、不要重复配置**（`plume.config.ts` 会覆盖 `config.ts`）：

- `config.ts`：改它 → dev server 重启。放 bundler、插件、hostname、搜索等。
- `plume.config.ts`：改它 → 热更新。放 logo、深色模式、社交链接、navbar、collections、页脚、公告板。

`shouldPrefetch: false` 是因为站点页面多、特意关闭预取，**不要随手打开**。

## 集合（collections.ts）

```typescript
const swift = defineCollection({
  type: 'doc',            // 'doc' = 笔记专题（带侧边栏）；'post' = 博客文章
  dir: 'notes/swift',     // 相对 docs/ 的目录
  title: 'Swift',
  linkPrefix: '/swift/',  // URL 前缀，同时决定侧边栏匹配
  sidebar: 'auto',        // 按文件结构自动生成，或手动传数组
})
```

现有 16 个集合：`blog`（post，前缀 `/article/`）+ 15 个 doc（swift/flutter/ai/python/tools/algorithms/design-patterns/haskell/harmony/ops/java/vue/yijing/acupuncture）。

**新增笔记专题**：在 `notes/` 建目录 + `README.md`（落地页）→ `collections.ts` 注册 → `navbar.ts` 加导航入口，三步缺一不可。

## Markdown 规范

### Frontmatter

```yaml
---
title: 页面标题
createTime: 2025/08/13 09:21:29
permalink: /article/xxx/     # 必须以所属集合的 linkPrefix 开头
tags:                        # 仅博客文章需要
  - GPT-5
---
```

- `autoFrontmatter` 开启：新建 md 会自动按文件路径生成 permalink 和 createTime，**移动/重命名文件 = 更换 URL**，旧链接需在 `redirects.json` 补映射（每条正反两个 key、带尾斜杠，参照现有格式）。
- 构建会**回写源文件**（补 title/permalink、规范化 YAML 缩进与空行），属预期行为，不要当成脏改动回滚。
- 主题有个判定缺陷：单语言站点下 `filepath.endsWith('/README.md')` 恒为真，非集合目录的 README 会被强行写成 `pageLayout: home`。`config.ts` 的 `autoFrontmatter.transform` 已针对 `book/`、`result/` 做还原，**新增独立页面时如果用了 README.md，记得在同处补一条**。
- **关键**：doc 集合内的 permalink 不以 `linkPrefix` 开头，侧边栏不会显示。

### 文件组织

- 同主题内容放子目录（如 `notes/swift/ios/`、`notes/ai/ml/`）。
- 每个专题目录以 `README.md` 作为落地页。
- 有序内容用 `t1-`、`t2-` 前缀；补充内容用 `u1-`、`y1-` 前缀。
- 文件名 kebab-case。

## 自定义组件与主题

- 组件放 `docs/.vuepress/components/`，在 `client.ts` 里用 `app.component()` 注册后即可在 markdown 中直接使用。
- 样式覆盖走 `docs/.vuepress/theme/styles/custom.css`（CSS 变量，含深浅色两套）。
- `client.ts` 还负责注入 AdSense 脚本（有防重复加载守卫），改动时别破坏这个逻辑。

## TypeScript 约定

- ESM（`"type": "module"`），`import { X } from 'package'`，`export default`。
- 配置文件一律用 `defineXConfig` 系列助手函数获取类型安全。
- 导入顺序：Node 内置 → npm 包 → 本地文件。

## 部署

`./deploy.sh` 一条龙：构建 → rsync 到 `root@106.52.236.186:2002` 的 `/www/wwwroot/oldbird.run`（**自建服务器，不是 GitHub Pages**）→ `git add . && git commit && git push`。

- 构建或上传失败脚本会中断并提示，先看输出再重试。
- 历史提交信息惯例是 `update`，保持一致即可；改动较大时可写描述性信息。

## 排错速查

| 症状 | 处理 |
|---|---|
| dev server 行为异常/旧内容残留 | `yarn docs:dev-clean` |
| 页面没有侧边栏 | 检查 frontmatter 的 permalink 是否以集合 linkPrefix 开头 |
| 旧文章链接 404 | 在 `redirects.json` 补映射（正反两个 key） |
| 新专题没入口 | collections.ts + navbar.ts 是否都配了 |
