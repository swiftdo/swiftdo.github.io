## VuePress

## VuePress 是什么？

* Vue 驱动的静态网站生成器
* 简洁至上
    以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
* Vue驱动
    享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
* 高性能
    VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

详情请看官网 [VuePress](https://vuepress.vuejs.org/zh/)

## 安装
### 全局安装

```sh
npm install -g vuepress
```

### 创建项目

```sh
mkdir blog & cd blog
npm init -y
```

创建完成后会有一个 `package.json`

```json
{
  "name": "blog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

根据官方文档，将 `scripts` 改成：

```json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
}
```

### 添加 docs 文件夹

```sh
mkdir docs
```

这个文件夹中主要放些你的配置和所写的博客内容

### 在 docs 文件夹中创建 .vuepress 文件夹

```sh
cd docs
mkdir .vuepress
```

这个文件夹中你就可以放[配置](https://vuepress.vuejs.org/zh/config/)了
