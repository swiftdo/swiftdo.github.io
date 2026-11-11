# old-bird

OldBird 个人技术博客 —— https://oldbird.run

Built with [VitePress](https://vitepress.dev/) `1.6.4` + Vue 3.
Migrated from VuePress 2 + theme-plume in 2026-10; the old `docs/.vuepress/` directory is gone.

## Requirements

- Node.js ≥ 20.6
- Yarn 4.6 (`packageManager` 已锁定)

## Usage

```sh
yarn            # 安装依赖
yarn dev        # 本地开发服务器
yarn build      # 生产构建（产物在 docs/.vitepress/dist）
yarn preview    # 预览构建产物
./deploy.sh     # 构建 → 校验 → 推源码 → rsync → 线上探活
```

`./deploy.sh` 支持 `--dry-run`、`--no-git`、`--skip-build`、`-m "说明"`，
详见 `./deploy.sh --help` 与 `AGENTS.md` 的部署一节。

## Documents

- [AGENTS.md](AGENTS.md) —— 完整开发规范：URL 机制、frontmatter、侧边栏、版式令牌、部署与排错
- [CLAUDE.md](CLAUDE.md) —— 给 AI 助手的精简上下文，详细规范以 AGENTS.md 为准
- [VitePress 文档](https://vitepress.dev/)
