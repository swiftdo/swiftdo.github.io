---
sitemap:
  exclude: false
  changefreq: hourly
title: '快速上手'
date: 2020-08-17
tags:
- swift
- vapor
---

等久了吧？本文会给你好好介绍如何上手 Vapor。

## 创建

打开终端并使用以下 Toolbox 的命令行：

```sh
$ vapor new todo -n

Cloning template...
name: todo
Would you like to use Fluent?
y/n> no
fluent: No
Generating project files
+ Package.swift
+ main.swift
+ configure.swift
+ routes.swift
+ .gitkeep
+ AppTests.swift
+ Dockerfile
+ docker-compose.yml
+ .gitignore
+ .dockerignore
Creating git repository
Adding first commit

                                               **
                                             **~~**
                                           **~~~~~~**
                                         **~~~~~~~~~~**
                                       **~~~~~~~~~~~~~~**
                                     **~~~~~~~~~~~~~~~~~~**
                                   **~~~~~~~~~~~~~~~~~~~~~~**
                                  **~~~~~~~~~~~~~~~~~~~~~~~~**
                                 **~~~~~~~~~~~~~~~~~~~~~~~~~~**
                                **~~~~~~~~~~~~~~~~~~~~~~~~~~~~**
                                **~~~~~~~~~~~~~~~~~~~~~~~~~~~~**
                                **~~~~~~~~~~~~~~~~~~~~~++++~~~**
                                 **~~~~~~~~~~~~~~~~~~~++++~~~**
                                  ***~~~~~~~~~~~~~~~++++~~~***
                                    ****~~~~~~~~~~++++~~****
                                       *****~~~~~~~~~*****
                                          *************

                                 _       __    ___   ___   ___
                                \ \  /  / /\  | |_) / / \ | |_)
                                 \_\/  /_/--\ |_|   \_\_/ |_| \
                                   a web framework for Swift

                                 Project todo has been created!

                          Use cd 'todo' to enter the project directory
                          Use vapor xcode to open the project in Xcode
```

> 使用 -n 参数会按照默认设置，为您提供一个简单的模板。

那么简单的 todo 项目就算创建完成了，目录结构如下

```sh
.
├── Dockerfile
├── Package.swift
├── Sources
│   ├── App
│   │   ├── Controllers
│   │   ├── configure.swift
│   │   └── routes.swift
│   └── Run
│       └── main.swift
├── Tests
│   └── AppTests
│       └── AppTests.swift
└── docker-compose.yml
```

我们可以通过 xcode 打开这个项目：

```sh
$ vapor xcode
```

## 编译和运行

我们可以通过 xcode 直接运行项目，也可以通过命令行：

```sh
$ vapor run

[ INFO ] Server starting on http://127.0.0.1:8080
```

## 本地访问

打开你的 Web 浏览器，然后访问 localhost:8080/hello

你应该能够看到以下页面内容：

```sh
Hello, world!
```

那么恭喜你！成功地创建和运行了你的第一个 Vapor 应用程序！ 🎉
