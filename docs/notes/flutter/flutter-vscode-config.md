---
title: Flutter VSCode 设置启动参数
date: 2022-06-10T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/5wfygxhf/
---

有些时候我们需要运行 flutter 的时候指定参数，比如，我想在 flutter for web 的项目中运行的时候指定项目：

```sh
flutter run -d Chrome --web-port=53794
```

这里是指定运行的端口号。

![](http://blog.oldbird.run/mweb/16551695787536.jpg)

对于这 `-d Chrome --web-port=53794` 这串参数，在 vscode 中如何配置？

在 `.vscode/launch.json` 文件中：

```json
"version": "0.2.0",
    "configurations": [
        {
            "name": "web-demo",
            "request": "launch",
            "type": "dart",
            "args": [
                "-d", "Chrome",
                "--web-port=53794"
            ]
        },
        {
            "name": "web-demo (profile mode)",
            "request": "launch",
            "type": "dart",
            "flutterMode": "profile"
        },
        {
            "name": "web-demo (release mode)",
            "request": "launch",
            "type": "dart",
            "flutterMode": "release"
        }
    ]
```

这个配置项，就可以设置参数

```json
"args": [
    "-d", "Chrome",
    "--web-port=53794"
]
```
