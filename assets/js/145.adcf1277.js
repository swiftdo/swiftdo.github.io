(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{610:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在 Ubantu20.04 中，安装宝塔面板，部署 Flask.")]),s._v(" "),t("h2",{attrs:{id:"环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),t("blockquote",[t("p",[s._v("python 3.8.10\nubuntu 20.04")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential python3-dev\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3-venv\n$ python3 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" venv venv\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LC_ALL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en_US.UTF-8"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LC_CTYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en_US.UTF-8"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg-reconfigure locales\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入虚拟环境")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" venv/bin/activate\n$ pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" wheel\n$ pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" uwsgi\n$ pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" requirements.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出虚拟环境")]),s._v("\n$ deactivate\n")])])]),t("h2",{attrs:{id:"配置-uwsgi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-uwsgi"}},[s._v("#")]),s._v(" 配置 uwsgi")]),s._v(" "),t("p",[s._v("在应用根目录创建 config.ini 文件，内容如下")]),s._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("uwsgi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uwsgi 启动时所使用的地址与端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("socket")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1:8386")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指向网站目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("chdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/www/wwwroot/www.itswcg.site")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python 启动程序文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("wsgi-file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("main.py")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python 程序内用以启动的 application 变量名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("callable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("app")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 处理器数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("processes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 线程数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("threads")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#状态检测地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stats")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1:9191")]),s._v("\n")])])]),t("h2",{attrs:{id:"配置-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx"}},[s._v("#")]),s._v(" 配置 nginx")]),s._v(" "),t("p",[s._v("在宝塔面板中，管理网站，设置，配置文件修改如下，\n或者在/www/server/panel/vhost/nginx/"),t("name",[s._v(".conf 下修改")])],1),s._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 如有多个web应用，都是80端口监听\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" resume.itswcg.com")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#地址")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("      uwsgi_params")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uwsgi_pass")]),s._v("   127.0.0.1:8386")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指向uwsgi 所应用的内部地址,所有请求将转发给uwsgi 处理")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uwsgi_param")]),s._v(" UWSGI_PYHOME /www/wwwroot/www.itswcg.site/venv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指向虚拟环境目录")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uwsgi_param")]),s._v(" UWSGI_CHDIR  /www/wwwroot/www.itswcg.site")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指向网站根目录")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uwsgi_param")]),s._v(" UWSGI_SCRIPT main:app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定启动程序")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"配置-supervisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-supervisor"}},[s._v("#")]),s._v(" 配置 supervisor")]),s._v(" "),t("p",[s._v("supervisor 能同时启动多个应用，能自动重启应用，保证可用性。")]),s._v(" "),t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" supervisor\n")])])]),t("p",[s._v("在 /etc/supervisor/conf.d 下添加"),t("name",[s._v(".conf 文件(resume.conf)，内容如下")])],1),s._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("[program:resume] "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#resume是<name>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##注意项目目录和uwsgi的配置文件地址")]),s._v("\ncommand=/www/wwwroot/www.itswcg.site/venv/bin/uwsgi /www/wwwroot/www.itswcg.site/config.ini\ndirectory=/www/wwwroot/www.itswcg.site\nautostart=true\nautorestart=true\nuser = root\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##log文件的位置")]),s._v("\nstdout_logfile=/var/log/supervisor/%(program_name)-stdout.log\nstderr_logfile=/var/log/supervisor/%(program_name)-stderr.log\n")])])]),t("p",[s._v("启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("supervisord "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/supervisor/supervisord.conf\n")])])]),t("p",[s._v("客户端管理")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("supervisorctl\n")])])]),t("p",[s._v("这样你就不用每次重启时都运行")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$uwsgi config.ini\n")])])]),t("p",[s._v("supervisor 帮你自动重启\n还有别忘了在宝塔面板安全中，放行端口。")]),s._v(" "),t("p",[s._v("几个常用命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl reread\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl restart all\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" hello\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" supervisorctl start hello\n")])])]),t("h2",{attrs:{id:"https-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-配置"}},[s._v("#")]),s._v(" HTTPS 配置")]),s._v(" "),t("p",[s._v("修改了 Nginx 后，如果要配置 HTTPS, 那么在 Nginx 的配置文件中需要注意这么一段")]),s._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" test.oldbird.run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.php index.html index.htm default.php default.htm default.html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /www/wwwroot/test.oldbird.run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page 404/404.html;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL-END")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ERROR-PAGE-START  错误页配置，可以注释、删除或修改")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page 404 /404.html;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page 502 /502.html;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ERROR-PAGE-END")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PHP-INFO-START  PHP引用配置，可以注释或修改")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" enable-php-00.conf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PHP-INFO-END")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" /www/server/panel/vhost/rewrite/test.oldbird.run.conf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#REWRITE-END")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止访问的文件或目录")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md)")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一键申请SSL证书验证目录相关设置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ \\.well-known")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("allow")]),s._v(" all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v("  /www/wwwlogs/test.oldbird.run.log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v("  /www/wwwlogs/test.oldbird.run.error.log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("这几行注释不能删除：")]),s._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page 404/404.html;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL-END")]),s._v("\n\n    ...\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一键申请SSL证书验证目录相关设置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ \\.well-known")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("allow")]),s._v(" all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);