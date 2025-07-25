---
sitemap:
  exclude: false
  changefreq: hourly
title: Django 模板文件的放置路径
date: 2024-05-09T00:00:00.000Z
tags:
  - python
  - django
createTime: 2024/08/02 09:19:27
permalink: /python/h0enjgdl/
---

模板文件有两种, 一种是属于整个项目(project)的模板,一种是属于某个应用(app)的模板。模板文件的放置路径必需正确，否则Django找不到模板容易出现`TemplateDoesNotExist`的错误。

我们的目录结构如下：

```shell
./
├── README.md
├── docker-compose.yml
├── poetry.lock
├── pyproject.toml
├── requirements.txt
└── taskmanager
    ├── db.sqlite3
    ├── emoticons
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    ├── manage.py
    ├── taskmanager
    │   ├── asgi.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── tasks
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   ├── mixins.py
    │   ├── models.py
    │   ├── services.py
    │   ├── templates  # 应用模板文件
    │   │   └── tasks
    │   │       ├── base.html
    │   │       ├── help.html
    │   │       ├── home.html
    │   │       ├── task_confirm_delete.html
    │   │       ├── task_detail.html
    │   │       ├── task_form.html
    │   │       └── task_list.html
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    └── templates # 项目模板
        ├── _footer.html
        ├── _header.html
        └── index.html
```

## 项目模板

属于项目的模板文件路径一般是项目根目录下的`templates`文件夹。

需要在`settings.py`中将模板目录设置为`BASE_DIR`目录下的`templates`文件夹.

```py
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
           BASE_DIR / 'templates', # 设置模板目录， 属于项目的模板文件路径一般是项目根目录下的templates文件夹
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
```

那么 `taskmanager/templates` 就是项目模板目录。

## 应用模板

应用的模板文件路径一般是`app`目录下的`app/templates/app`文件夹(app 是应用名), 这样做的好处是可以避免模板命名冲突。

`taskmanager/tasks/templates/tasks` 是我们tasks应用的模板目录。


## 渲染模板

对于上面这个项目布局，在使用render方法指定渲染模板时，无需给出完整的路径，只给出相对于templates的路径即可，比如：

```py
# 指定项目模板
return render(request, "index.html", { "msg": "hello world!",})

# 指定应用模板
return render(request, "tasks/home.html", { "tasks": tasks,})
```




