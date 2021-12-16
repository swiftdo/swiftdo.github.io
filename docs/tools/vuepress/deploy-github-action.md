---
title: "通过 Github Action 部署 VuePress"
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-15
tags:
  - tools
  - vuepress
---

## 步骤

- 1.创建一个 Personnal access token
- 2.在项目的 serect 里面添加一个环境变量 ACCESS_TOKEN， 值为第一步创建的个人令牌
- 3.创建一个工作流程的配置文件 .github/workflows/main.yml

## .github/workflows/main.yml 的配置如下：

```yaml
name: Deploy GitHub Pages

# 触发条件：在 push 到 master 分支后
on:
  push:
    branches:
      - source

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Build
        run: yarn install && yarn docs:build

      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: master
          FOLDER: docs/.vuepress/dist
```

上传代码即可。

> 如果本地已经执行 `yarn docs:build`, 那么请不要将 `docs/.vuepress/dist` 文件提交到远端，不然会发现有些文件没有更新的问题。
