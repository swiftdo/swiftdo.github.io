---
title: 通过 Travis 部署
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17T00:00:00.000Z
tags:
  - tools
  - vuepress
createTime: 2024/08/02 09:19:27
permalink: /article/mcxm96cz/
---

## GitHub Pages

GitHub Pages 是 GitHub 提供的一个网页寄存服务，于 2008 年推出。可以用于存放静态网页，包括博客、项目文档甚至整本书。Jekyll 软件可以用于将文档转换成静态网页，该软件提供了将网页上传到 GitHub Pages 的功能。一般 GitHub Pages 的网站使用 github.io 的子域名，但是用户也可以使用第三方域名。

有两种最基本的用法：

1. 作为你自己（或者组织）的网站（访问地址示例：`http://username.github.io`）
2. 作为你某一个项目的网站（访问地址示例：`http://username.github.io/projectname`）

更多细节请阅读[官方文档](https://help.github.com/cn/github/working-with-github-pages/about-github-pages)

## 使用 Travis CI 自动更新

[Travis CI](https://travis-ci.org/) 提供的是持续集成服务（Continuous Integration，简称 CI）。我们在软件开发过程中，有构建、测试、部署这些必不可少的步骤，而这些会花掉我们很多的时间。为了提高软件开发的效率，现在涌现了很多自动化工具。[Travis CI](https://travis-ci.org/) 是目前[市场份额](https://github.blog/2017-11-07-github-welcomes-all-ci-tools/)最大的一个，而且有很详细的文档以及可以和 Github 很好的对接。

### 持续集成

持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。

持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

可以阅读 [持续集成是什么？](http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html) 进一步了解。

GitHub Pages 第二种用法的部署，VuePress 已详细提供，直接按照 [部署](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages) 配置。

下面一起来配置下第一种用法的部署方案。

提供一个我已经配置好的项目作为参考：[swiftdo/swiftdo](https://github.com/swiftdo/swiftdo)

### `.travis.yml`

```yml
language: node_js # 指定运行环境
node_js:
  - lts/* # node环境的版本
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master
```

这是最基本的配置。

- `provider`：解析支持者为 github pages
- `skip_cleanup`：值必须为 true 不然会把你在构建时生成的文件给删除掉。
- `on: branch: master`：当 master 分支有变化时，才执行这个部署。更多条件设置请参考[Deployment](https://docs.travis-ci.com/user/deployment/)
- `GITHUB_TOKEN`：生成请参考 [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)。如果你的仓库是公开的，那么在给权限的时候只需要给`public_repo`, 如果你的仓库是私有的那就要给 `repo` 权限，尽量给更少的权限。然后在[Travis CI](https://travis-ci.org/)的控制台设置环境变量 `GITHUB_TOKEN` 值为刚才生成的 token。在添加环境变量的时候有个开关 `Display value in build log` 不要打开，不然别人就可以在 CI 的 log 里面看到你的 token，就可以对你的公开仓库进行任意修改（给少的权限，不公开）。
- `local_dir`：是将要推送到 GitHub Pages 的目录，默认的值为当前目录。
- `keep_history`：禁止 travis 对你的 github 项目进行强制推送。

对于样例我们要通过 `https://swiftdo.github.io` 打开站点，那么生成的站点必须放到 `swiftdo/swiftdo.github.io` 仓库这里。
然而我们的文档源码是在 `swiftdo/swiftdo`。

### 如何将构建的产物放到 `swiftdo/swiftdo.github.io`？

方案一：鉴于之前使用过 [hexo](https://hexo.io/zh-cn/)，它的部署方案比较简单，直接配置好产物的远端仓库，通过 `hexo deploy` 一键部署。原理很简单就是通过本地构建产物，然后将其提交到远端。所以我们可以自定义 [deploy.sh](https://github.com/swiftdo/swiftdo/blob/master/deploy.sh)， 执行脚本提交。

方案二：`.travis.yml` 中去掉 `deploy`, 直接在 `script` 中 `- sh deply.sh`。

方案一是可行的，但是失去了 CI 的便捷性，部署强依赖开发设备上的环境。方案二可能引入更深的坑，比如编译好了产物，提交怎么办，怎么获得这个提交的权限。所以上面的方案都不是很完美。

> 在这里我犯了个错误，对于 CI 的半吊子，直接经验性思考，造成片面。
> 新事物，一般是变得越来越简单，而不是越来越复杂。
> 全面了解新事物第一手资料就是官方文档。

所以，看到这里，请你在使用的时候，一定要读一遍官方文档。

`repo`：GitHub Pages 所在的代码仓库，默认值为当前仓库。
`target_branch`：GitHub Pages 所使用的分支，默认为 `gh-pages`。

所以最后的配置：

```yaml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  repo: swiftdo/swiftdo.github.io
  target_branch: master
  fqdn: oldbird.run # CNAME 的域名
  keep_history: true
  on:
    branch: master
```
