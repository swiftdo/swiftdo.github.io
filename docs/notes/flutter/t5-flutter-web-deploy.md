---
title: 在 Github 上部署一个 Flutter Web 应用
date: 2020-09-22T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/fa4cch27/
---

本文，我们将使用 Github Actions 上构建 Flutter 应用， 用 Github Pages 托管。

Github 刚刚发布了另一个名为 Actions 的功能。它可以帮助我们对项目进行 CI＆CD 集成。

## Flutter Web

第一步就是创建一个 flutter web 应用。我们需要使用 Flutter 的 beta、master、dev 其中的的一个 channel 来进行创建 web 项目。

```sh
$ flutter channel master
$ flutter upgrade
$ flutter config --enable-web
```

我们创建个 `flutter_web` 项目

```sh
$ flutter create flutter_web
$ cd flutter_web
$ flutter run -d chrome
```

![-w759](http://blog.oldbird.run/2019-12-23-15770764808850.png)

项目这边完工，那么如何用 github page 托管呢？

## Github

### 创建一个 repository

![-w162](http://blog.oldbird.run/2019-12-23-15770767088539.png)

创建好后，将本地项目提交上去。

```sh
$ git init
$ git add --all
$ git commit -m "first commit"
$ git remote add origin https://github.com/OHeroJ/flutter_web.git
$ git push -u origin master
```

### Gh-Pages

如何启用 Gh-Pages ？

我们需要将编译好的文件放到 `origin/gh-pages` 这个分支，然后 Github 会将这些文件作为一个站点，

```
username.github.io/repository_name
```

通过上面的 URL 进行访问。

### Github Actions

我们将创建一个 Action 来构建和发布 Flutter Web 项目，但是我们需要一个 access token，这样运行 Action 的那台机器可以进行提交。

![](http://blog.oldbird.run/2019-12-23-13_08_13__12_23_2019.jpg)

拷贝这个生成的 token。你切换到其他页面就看不到了

**Secrets**

然后需要在项目的设置里设置好 Secrets

![-w864](http://blog.oldbird.run/2019-12-23-15770780677496.png)

添加一个 name 为 `commit_secret`, value 是刚才我们创建的 token。

![Screen Shot 2019-12-23 at 1.17.32 P](http://blog.oldbird.run/2019-12-23-Screen%20Shot%202019-12-23%20at%201.17.32%20PM.png)

**flutter_build_publish_web.yml**

![Screen Shot 2019-12-23 at 1.22.05 P](http://blog.oldbird.run/2019-12-23-Screen%20Shot%202019-12-23%20at%201.22.05%20PM.png)

```yml
name: Flutter Web
on:
  push:
    branches:
      - master
jobs:
  build:
    name: Build Web
    env:
      my_secret: ${{secrets.commit_secret}}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: subosito/flutter-action@v1
        with:
          channel: "dev"
      - run: flutter config --enable-web
      - run: flutter pub get
      - run: flutter build web --release
      - run: |
          cd build/web
          git init
          # type configurations: your user.email and user.name followed lines 
          # git config --global user.email your_email 
          # git config --global user.name your_name 
          git config --global user.email 1164258202@qq.com
          git config --global user.name oheroj
          git status
          # change this remote url for examle your remote url is https://github.com/onatcipli/flutter_web.git then the following:
          git remote add origin https://${{secrets.commit_secret}}@github.com/oheroj/flutter_web.git
          git checkout -b gh-pages
          git add --all
          git commit -m "update"
          git push origin gh-pages -f
```

上面是我项目的配置，所以在你的项目中这三处

```yml
git config --global user.email 1164258202@qq.com
git config --global user.name oheroj

git remote add origin https://${{secrets.commit_secret}}@github.com/oheroj/flutter_web.git
```

需要进行修改成你自己的项目的配置。

完成这些更改后，我们就可以开始了！点击提交到到主分支上即可。这会自动触发这个 Action。

![Screen Shot 2019-12-23 at 1.36.25 P](http://blog.oldbird.run/2019-12-23-Screen%20Shot%202019-12-23%20at%201.36.25%20PM.png)

构建完成后，我们看看效果，直接在浏览器输入 'https://oheroj.github.io/flutter_web'

![Screen Shot 2019-12-23 at 1.40.03 P](http://blog.oldbird.run/2019-12-23-Screen%20Shot%202019-12-23%20at%201.40.03%20PM.png)

> 为什么会是 liveli.site， 因为我做了 cname。

那本文到此结束。你 get 到新技能了么？
