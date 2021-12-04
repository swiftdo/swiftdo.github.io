---
sitemap:
  exclude: false
  changefreq: hourly
title: "宝塔面板 + flask + nginx + uwsgi"
date: 2021-12-04
tags:
  - python
  - flask
---

## 环境

> python 3.8.10
> ubuntu 20.04

```shell
$ sudo apt-get install build-essential python3-dev
$ sudo apt install python3-venv
$ python3 -m venv venv
$ export LC_ALL="en_US.UTF-8"
$ export LC_CTYPE="en_US.UTF-8"
$ sudo dpkg-reconfigure locales
# 进入虚拟环境
$ source venv/bin/activate
$ pip install wheel
$ pip install uwsgi
$ pip install -r requirements.txt
# 退出虚拟环境
$ deactivate
```

## 配置 uwsgi

在应用根目录创建config.ini文件，内容如下

```ini
[uwsgi]
# uwsgi 启动时所使用的地址与端口
socket = 127.0.0.1:8386
# 指向网站目录
chdir = /www/wwwroot/www.itswcg.site
# python 启动程序文件
wsgi-file = main.py
# python 程序内用以启动的 application 变量名
callable = app 
# 处理器数
processes = 4
# 线程数
threads = 2
#状态检测地址
stats = 127.0.0.1:9191
```

## 配置 nginx

在宝塔面板中，管理网站，设置，配置文件修改如下，
或者在/www/server/panel/vhost/nginx/<name>.conf下修改

```nginx
server {
  listen  80; 如有多个web应用，都是80端口监听
  server_name resume.itswcg.com; #地址
  location / {
    include      uwsgi_params;
    uwsgi_pass   127.0.0.1:8386;  # 指向uwsgi 所应用的内部地址,所有请求将转发给uwsgi 处理
    uwsgi_param UWSGI_PYHOME /www/wwwroot/www.itswcg.site/venv; # 指向虚拟环境目录
    uwsgi_param UWSGI_CHDIR  /www/wwwroot/www.itswcg.site; # 指向网站根目录
    uwsgi_param UWSGI_SCRIPT main:app; # 指定启动程序
  }
}
```