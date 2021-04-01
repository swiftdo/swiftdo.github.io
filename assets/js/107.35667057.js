(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{616:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"docker-vapor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-vapor"}},[s._v("#")]),s._v(" docker & vapor")]),s._v(" "),t("h2",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" docker compose")]),s._v(" "),t("p",[s._v("容器运行可以有很多参数，比如指定映射宿主主机的端口、环境变量等等，包在一个 docker run 命令后就太麻烦了，所以通常用 docker-compose 来组织运行，它可以运行多个容器，并且可以指定依赖关系，以 YAML 格式存储可读性更高。")]),s._v(" "),t("p",[t("strong",[s._v("常用的几个命令")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker-compose up app\ndocker-compose up db\ndocker-compose down "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会删除容器，但是不会删除数据卷")]),s._v("\ndocker-compose down -v "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会删除容器，且删除数据卷")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"数据持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化"}},[s._v("#")]),s._v(" 数据持久化")]),s._v(" "),t("p",[s._v("数据主要分为两类：持久化和非持久化数据。持久化数据是需要保存的，而非持久化数据不需要。默认情况下，所有容器都有与自身声明周期相同的非持久化存储——本地存储，它非常适用于非持久化数据。但是，如果容器需要创建长期保存的数据，最好将数据存储到 Docker 卷中")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker volume create myvol "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据卷 myvol，默认情况下，新卷创建使用local 驱动，但是可以通过-d 参数来指定不同的驱动")]),s._v("\ndocker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有数据卷")]),s._v("\ndocker volume inspect myvol "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于查看卷的详细信息。可以使用该命令查看卷在Docker主机文件系统中的具体位置")]),s._v("\ndocker volume prune "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会删除未装入到某个容器或者服务的所有卷 ，所以谨慎使用")]),s._v("\ndocker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许删除指定卷")]),s._v("\n")])])]),t("h3",{attrs:{id:"inspect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inspect"}},[s._v("#")]),s._v(" inspect")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker volume inspect oldbirds_db_data\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreatedAt"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-07-03T13:03:04Z"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Labels"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.compose.project"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oldbirds"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.compose.version"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.24.1"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.docker.compose.volume"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db_data"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mountpoint"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/volumes/oldbirds_db_data/_data"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oldbirds_db_data"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Options"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Scope"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("ul",[t("li",[s._v("Driver和Scope都是 local，只能用于当前 Docker 主机上的容器。")]),s._v(" "),t("li",[s._v("Mountpoint 说明卷位于 Docker 主机上的位置。")])]),s._v(" "),t("h3",{attrs:{id:"docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),t("p",[s._v("version  版本\nservices: 服务\nnetworks:\nimage:  使用镜像\nports: - 映射宿主主机端口：容器端口\nvolumes: - 映射宿主主机文件路径：容器主机文件路径\ndepends_on: 和其他容器链接 使用这里个化重点\nrestart: no 是默认的重启策略，在任何情况下都不会重启容器。 指定为 always 时，容器总是重新启动。 如果退出代码指示出现故障错误，则 on-failure 将重新启动容器")]),s._v(" "),t("h2",{attrs:{id:"docker-删除无名镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-删除无名镜像"}},[s._v("#")]),s._v(" docker 删除无名镜像")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker rmi "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dangling=true"')]),s._v(" -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),t("h2",{attrs:{id:"docker-磁盘清理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-磁盘清理"}},[s._v("#")]),s._v(" docker 磁盘清理")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker system prune\n")])])]),t("p",[s._v("可参考文章："),t("a",{attrs:{href:"https://www.jianshu.com/p/7aeafe2ea792",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker磁盘空间使用分析与清理"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"容器间互联"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器间互联"}},[s._v("#")]),s._v(" 容器间互联")]),s._v(" "),t("p",[s._v("如何在本机上连接 docker 上的 postgres ？")]),s._v(" "),t("h3",{attrs:{id:"docker-compose-中-links-和-depends-on-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-中-links-和-depends-on-区别"}},[s._v("#")]),s._v(" docker-compose 中 links 和 depends_on 区别")]),s._v(" "),t("p",[s._v("depends_on: 指定本容器启动依赖的容器必须启动\nlinks: 包装容器如果 ip 变化也能访问(基本已经弃用，因为不适用 link 任然可以通过容器名称访问)")])])}),[],!1,null,null,null);a.default=r.exports}}]);