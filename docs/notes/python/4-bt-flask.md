---
title: 宝塔面板 + flask + nginx + uwsgi + supervisord
createTime: 2024/08/02 09:19:27
permalink: /python/k5o30cqs/
---




## 环境

在 Ubantu20.04 中，安装宝塔面板，部署 Flask.

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

在应用根目录创建 config.ini 文件，内容如下

```sh
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
或者在`/www/server/panel/vhost/nginx/<name>.conf`下修改

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

## 配置 supervisor

supervisor 能同时启动多个应用，能自动重启应用，保证可用性。

安装

```shell
sudo apt-get install supervisor
```

在 `/etc/supervisor/conf.d 下添加<name>.conf` 文件(resume.conf)，内容如下

```nginx
[program:resume] #resume是<name>
##注意项目目录和uwsgi的配置文件地址
command=/www/wwwroot/www.itswcg.site/venv/bin/uwsgi /www/wwwroot/www.itswcg.site/config.ini
directory=/www/wwwroot/www.itswcg.site
autostart=true
autorestart=true
user = root
##log文件的位置
stdout_logfile=/var/log/supervisor/%(program_name)-stdout.log
stderr_logfile=/var/log/supervisor/%(program_name)-stderr.log
```

启动

```shell
supervisord -c /etc/supervisor/supervisord.conf
```

客户端管理

```shell
supervisorctl
```

这样你就不用每次重启时都运行

```
$uwsgi config.ini
```

supervisor 帮你自动重启
还有别忘了在宝塔面板安全中，放行端口。

几个常用命令

```shell
sudo supervisorctl reread
sudo supervisorctl restart all
sudo supervisorctl add hello
sudo supervisorctl start hello
```

## HTTPS 配置

修改了 Nginx 后，如果要配置 HTTPS, 那么在 Nginx 的配置文件中需要注意这么一段

```nginx
server
{
    listen 80;
    server_name test.oldbird.run;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/test.oldbird.run;

    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    #SSL-END

    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END

    #PHP-INFO-START  PHP引用配置，可以注释或修改
    include enable-php-00.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /www/server/panel/vhost/rewrite/test.oldbird.run.conf;
    #REWRITE-END

    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }

    access_log  /www/wwwlogs/test.oldbird.run.log;
    error_log  /www/wwwlogs/test.oldbird.run.error.log;
}
```

这几行注释不能删除：

```nginx
    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    #SSL-END

    ...

    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }
```
