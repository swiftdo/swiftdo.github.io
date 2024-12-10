(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{609:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("模板文件有两种, 一种是属于整个项目(project)的模板,一种是属于某个应用(app)的模板。模板文件的放置路径必需正确，否则Django找不到模板容易出现"),s("code",[t._v("TemplateDoesNotExist")]),t._v("的错误。")]),t._v(" "),s("p",[t._v("我们的目录结构如下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("./\n├── README.md\n├── docker-compose.yml\n├── poetry.lock\n├── pyproject.toml\n├── requirements.txt\n└── taskmanager\n    ├── db.sqlite3\n    ├── emoticons\n    │   ├── admin.py\n    │   ├── apps.py\n    │   ├── migrations\n    │   ├── models.py\n    │   ├── tests.py\n    │   └── views.py\n    ├── manage.py\n    ├── taskmanager\n    │   ├── asgi.py\n    │   ├── settings.py\n    │   ├── urls.py\n    │   └── wsgi.py\n    ├── tasks\n    │   ├── admin.py\n    │   ├── apps.py\n    │   ├── migrations\n    │   ├── mixins.py\n    │   ├── models.py\n    │   ├── services.py\n    │   ├── templates  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用模板文件")]),t._v("\n    │   │   └── tasks\n    │   │       ├── base.html\n    │   │       ├── help.html\n    │   │       ├── home.html\n    │   │       ├── task_confirm_delete.html\n    │   │       ├── task_detail.html\n    │   │       ├── task_form.html\n    │   │       └── task_list.html\n    │   ├── tests.py\n    │   ├── urls.py\n    │   └── views.py\n    └── templates "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目模板")]),t._v("\n        ├── _footer.html\n        ├── _header.html\n        └── index.html\n")])])]),s("h2",{attrs:{id:"项目模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目模板"}},[t._v("#")]),t._v(" 项目模板")]),t._v(" "),s("p",[t._v("属于项目的模板文件路径一般是项目根目录下的"),s("code",[t._v("templates")]),t._v("文件夹。")]),t._v(" "),s("p",[t._v("需要在"),s("code",[t._v("settings.py")]),t._v("中将模板目录设置为"),s("code",[t._v("BASE_DIR")]),t._v("目录下的"),s("code",[t._v("templates")]),t._v("文件夹.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("TEMPLATES "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BACKEND"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"django.template.backends.django.DjangoTemplates"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DIRS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           BASE_DIR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置模板目录， 属于项目的模板文件路径一般是项目根目录下的templates文件夹")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"APP_DIRS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPTIONS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"context_processors"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"django.template.context_processors.debug"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"django.template.context_processors.request"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"django.contrib.auth.context_processors.auth"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"django.contrib.messages.context_processors.messages"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("那么 "),s("code",[t._v("taskmanager/templates")]),t._v(" 就是项目模板目录。")]),t._v(" "),s("h2",{attrs:{id:"应用模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用模板"}},[t._v("#")]),t._v(" 应用模板")]),t._v(" "),s("p",[t._v("应用的模板文件路径一般是"),s("code",[t._v("app")]),t._v("目录下的"),s("code",[t._v("app/templates/app")]),t._v("文件夹(app 是应用名), 这样做的好处是可以避免模板命名冲突。")]),t._v(" "),s("p",[s("code",[t._v("taskmanager/tasks/templates/tasks")]),t._v(" 是我们tasks应用的模板目录。")]),t._v(" "),s("h2",{attrs:{id:"渲染模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染模板"}},[t._v("#")]),t._v(" 渲染模板")]),t._v(" "),s("p",[t._v("对于上面这个项目布局，在使用render方法指定渲染模板时，无需给出完整的路径，只给出相对于templates的路径即可，比如：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定项目模板")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定应用模板")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks/home.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);