---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Docker 部署'
date: 2020-08-17
tags:
- swift
- vapor
---

使用 Docker 部署您的 Vapor 应用程序有几个好处：

1. 在不同环境中保持一致性，Docker 在容器内部维护所有配置和依赖关系。使用 Docker 容器，可以实现开发、测试和生产环境的统一化和标准化。支持多种操作系统。
2. Docker 确保您的应用程序和所分配的资源在容器间相互隔离。
3. 您可以使用 docker-compose 或 Kubernetes 来编排部署所需的多种服务(例如Redis，Postgres，nginx等)。docker 在部署过程中，将安装，配置等重复的部分自动化完成。只需要在第一次部署时，构建完可用的 docker镜像（装好集装箱），在以后使用中，短短的几行命令就可以直接拉取镜像，根据这个镜像创建出一个容器，把服务跑起来了。所需要的仅仅是安装了 docker 的服务器，一个Dockerfile 文件（装箱清单），以及比较流畅的网络而已，真可谓『一次构建，到处部署』
4. ...

## 安装 Docker

因各平台的安装工具不一，直接参考 Docker 官方提供的安装即可：[https://docs.docker.com/desktop/](https://docs.docker.com/desktop/)

## 配置

在我们使用 `vapor new todo` 的时候，它已经为我们生成了一份 docker 的配置文件。

```sh
./
├── .dockerignore
├── Dockerfile
├── Package.resolved
├── Package.swift
├── Sources
│   ├── App
│   └── Run
├── Tests
│   └── AppTests
└── docker-compose.yml
```

`Dockerfile` 、`docker-compose.yml` 和 `.dockerignore` 就是 docker 所需的配置。

## Dockerfile

Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

```dockerfile
# ================================
# Build image
# ================================
FROM swift:5.2-bionic as build
WORKDIR /build

# First just resolve dependencies.
# This creates a cached layer that can be reused
# as long as your Package.swift/Package.resolved
# files do not change.
COPY ./Package.* ./
RUN swift package resolve

# Copy entire repo into container
COPY . .

# Compile with optimizations
RUN swift build --enable-test-discovery -c release

# ================================
# Run image
# ================================
FROM swift:5.2-bionic-slim

# Create a vapor user and group with /app as its home directory
RUN useradd --user-group --create-home --system --skel /dev/null --home-dir /app vapor

# Switch to the new home directory
WORKDIR /app

# Copy build artifacts
COPY --from=build --chown=vapor:vapor /build/.build/release /app
# Uncomment the next line if you need to load resources from the `Public` directory
#COPY --from=build --chown=vapor:vapor /build/Public /app/Public

# Ensure all further commands run as the vapor user
USER vapor:vapor

# Let Docker bind to port 8080
EXPOSE 8080

# Start the Vapor service when the image is run, default to listening on 8080 in production environment
ENTRYPOINT ["./Run"]
CMD ["serve", "--env", "production", "--hostname", "0.0.0.0", "--port", "8080"]
```

### Dockerfile 指令

* **FROM**
  * 格式
    * `FROM <image> [AS <name>]`
    * 或者 `FROM <image>[:<tag>] [AS <name>]`
    * 或者 `FROM <image>[@<digest>] [AS <name>]`
  * FROM 指令初始化新的构建阶段并为后续指令设置基本映像。因此，有效的 Dockerfile 必须以 FROM 指令开头.
  * FROM 可以出现多次在同一个 Dockerfile 文件中，为了创建多个镜像，或者使用一个作为另一个镜像的依赖，只要在每个新的 FROM 执行之前记录上一个镜像的 ID。每个 FROM 指令都会清空之前命令创建的任何状态。
  * 可选的，每个 FROM 指令都可以通过`AS name`提供一个名词，该名词可以在子 FROM 指令和 COPY --from<name|index>指令中指待该镜像。
  * tag 和 digest 值是可选的，如果省略他们，将使用 latest 版本，如果未找到将会抛出异常。
  尽可能的使用官方镜像作为基础镜像。

* **WORKDIR**
  * 格式：
    * `WORKDIR <工作目录路径>`
  * 指定工作目录。用 WORKDIR 指定的工作目录，会在构建镜像的每一层中都存在。（WORKDIR 指定的工作目录，必须是提前创建好的）。
  * `docker build` 构建镜像过程中的，每一个 RUN 命令都是新建的一层。只有通过 WORKDIR 创建的目录才会一直存在。

* **COPY**
  * 格式：
    * `COPY [--chown=<user>:<group>] <源路径1>...  <目标路径>`
    * `COPY [--chown=<user>:<group>] ["<源路径1>",...  "<目标路径>"]`
    * `[--chown=<user>:<group>]`：可选参数，用户改变复制到容器内文件的拥有者和属组。
    * `<目标路径>`：容器内的指定路径，该路径不用事先建好，路径不存在的话，会自动创建。
  * COPY 指令从复制新文件或目录，并将它们添加到路径的容器的文件系统中。
  * 是绝对路径，或相对于 WORKDIR 的路径，源将在目标容器中复制到该路径中。
  
    ```dockerfile
    COPY test relativeDir/   # adds "test" to `WORKDIR`/relativeDir/
    COPY test /absoluteDir/  # adds "test" to /absoluteDir/
    ```

* **RUN**
  * 格式：
    * `RUN <命令行命令>`
    * `RUN ["可执行文件", "参数1", "参数2"]`
  * RUN 指令将执行任何命令在当前镜像的一个新层上并提交结果。提交后的镜像将会在下一步中使用。

* **USER**
  * 格式：
    * `USER <用户名>[:<用户组>]`
  * 用于指定执行后续命令的用户和用户组，这边只是切换后续命令执行的用户（用户和用户组必须提前已经存在）。
  
* **EXPOSE**
  * 格式：
    * `EXPOSE <端口1> [<端口2>...]`
  * 仅仅只是声明端口。
  * 作用：
    * 帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射。
    * 在运行时使用随机端口映射时，也就是 `docker run -P` 时，会自动随机映射 EXPOSE 的端口

* **CMD**
  * 格式：
    * `CMD <shell 命令>`
    * `CMD ["<可执行文件或命令>","<param1>","<param2>",...]`
    * `CMD ["<param1>","<param2>",...]  # 该写法是为 ENTRYPOINT 指令指定的程序提供默认参数`
  * 为启动的容器指定默认要运行的程序，程序运行结束，容器也就结束。CMD 指令指定的程序可被 docker run 命令行参数中指定要运行的程序所覆盖。
  * 如果 Dockerfile 中如果存在多个 CMD 指令，仅最后一个生效

* **ENTRYPOINT**
  * 格式：
    * `ENTRYPOINT ["<executeable>","<param1>","<param2>",...]`
  * 类似于 CMD 指令，但其不会被 docker run 的命令行参数指定的指令所覆盖，而且这些命令行参数会被当作参数送给 ENTRYPOINT 指令指定的程序。但是, 如果运行 docker run 时使用了 --entrypoint 选项，此选项的参数可当作要运行的程序覆盖 ENTRYPOINT 指令指定的程序。
  * 可以搭配 CMD 命令使用：一般是变参才会使用 CMD ，这里的 CMD 等于是在给 ENTRYPOINT 传参

    ```dockerfile
    ENTRYPOINT ["./Run"]
    CMD ["serve", "--env", "production", "--hostname", "0.0.0.0", "--port", "8080"]
    ```

## .dockerignore

要排除与构建无关的文件（不重构源存储库），请使用.dockerignore文件。此文件支持类似于.gitignore文件的排除模式

## docker-compose.yml

Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。

如果你还不了解 YML 文件配置，可以先阅读 [YAML 入门教程](../../tools/yaml/)。

Compose 使用的三个步骤：

* 使用 Dockerfile 定义应用程序的环境。
* 使用 docker-compose.yml 定义构成应用程序的服务，这样它们可以在隔离环境中一起运行。
* 最后，执行 docker-compose up 命令来启动并运行整个应用程序。

```yml
version: '3.7'

x-shared_environment: &shared_environment
  LOG_LEVEL: ${LOG_LEVEL:-debug}

services:
  app:
    image: todo:latest
    build:
      context: .
    environment:
      <<: *shared_environment
    ports:
      - '8080:8080'
    # user: '0' # uncomment to run as root for testing purposes even though Dockerfile defines 'vapor' user.
    command: ["serve", "--env", "production", "--hostname", "0.0.0.0", "--port", "8080"]
```

该 Compose 文件定义了一个个服务：app。

启动这个容器：

```sh
$ docker-compose up
```

关闭：

```sh
$ docker-compose down
```

关闭以后，这容器文件还是存在的，写在里面的数据不会丢失。下次启动的时候，还可以复用。下面的命令可以在容器停止运行的时候把容器文件也删除。

```sh
$ docker-compose down -v
```

### 安装

Mac 和 Windows 在安装 docker 的时候，会一起安装 docker compose。Linux 系统下的安装参考[官方文档](https://docs.docker.com/compose/install/#install-compose)。

安装完成后，运行下面的命令。

```sh
$ docker-compose --version
```

### 指令

* **version**
  * 表示我们的compose文件的版本，目前有 1，2，3，每个版本语法不尽相同，这里是 3.7 的版本。具体可参考 [docker-compose 文档](https://docs.docker.com/compose/compose-file/compose-versioning/)。
* **services**
  * 我们要开始定义服务，每个docker容器为一个服务
* **app**
  * 这里我们定义了第一个服务，app 为其名字
* **build**
  * 指定该容器的构建参数
* **environment**
  * 设置环境变量。
  * 这里采用引用 `shared_environment` 来共享配置。

## https + ningx + postgresql 配置

假设我们要部署:
项目：`todo`
域名：`oldbirds.com`
邮箱：`test@gmail.com`


```yml
version: "3.7"

volumes:
  db_data:
  pgadmin-data:

x-shared_environment: &shared_environment
  LOG_LEVEL: ${LOG_LEVEL:-debug}
  DATABASE_HOST: db
  DATABASE_NAME: vapor_database
  DATABASE_USERNAME: vapor_username
  DATABASE_PASSWORD: vapor_password
  VIRTUAL_HOST: oldbirds.com
  LETSENCRYPT_HOST: oldbirds.com
  LETSENCRYPT_EMAIL: test@gmail.com

services:
  app:
    image: todo:latest
    build:
      context: .
    environment:
      <<: *shared_environment
    depends_on:
      - db
    ports:
      - "8080:8080"
    command:
      [
        "serve",
        "--env",
        "production",
        "--hostname",
        "0.0.0.0",
        "--port",
        "8080",
      ]

  migrate:
    image: todo:latest
    build:
      context: .
    environment:
      <<: *shared_environment
    depends_on:
      - db
    command: ["migrate", "--yes"]
    deploy:
      replicas: 0

  revert:
    image: todo:latest
    build:
      context: .
    environment:
      <<: *shared_environment
    depends_on:
      - db
    command: ["migrate", "--revert", "--yes"]
    deploy:
      replicas: 0

  db:
    image: postgres:12-alpine
    volumes:
      - db_data:/var/lib/postgresql/data/pgdata
    environment:
      PGDATA: /var/lib/postgresql/data/pgdata
      POSTGRES_USER: vapor_username
      POSTGRES_PASSWORD: vapor_password
      POSTGRES_DB: vapor_database
    ports:
      - "15432:5432"

  pgadmin:
    image: dpage/pgadmin4:latest
    volumes:
      - pgadmin-data:/var/lib/pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: test@gmail.com
      PGADMIN_DEFAULT_PASSWORD: oldbirds
    ports:
      - "15000:80"

  nginx-proxy:
    image: jwilder/nginx-proxy
    container_name: nginx-proxy
    labels:
      com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy: "true"
    ports:
      - "80:80"
      - "443:443"
    restart: unless-stopped
    volumes:
      - ./volumes/nginx/conf:/etc/nginx/conf.d
      - ./volumes/nginx/vhost:/etc/nginx/vhost.d
      - ./volumes/nginx/html:/usr/share/nginx/html
      - ./volumes/nginx/certs:/etc/nginx/certs
      - ./volumes/nginx/dhparam:/etc/nginx/dhparam
      - /var/run/docker.sock:/tmp/docker.sock:ro

  letsencrypt:
    image: jrcs/letsencrypt-nginx-proxy-companion
    container_name: letsencrypt
    depends_on:
      - nginx-proxy
    restart: unless-stopped
    volumes:
      - ./volumes/nginx/certs:/etc/nginx/certs
      - ./volumes/nginx/vhost:/etc/nginx/vhost.d
      - ./volumes/nginx/html:/usr/share/nginx/html
      - /var/run/docker.sock:/var/run/docker.sock:ro
```

然后我们需要在根目录下创建 volumes 文件夹：

```sh
├── Dockerfile
├── Package.resolved
├── Package.swift
├── Sources
├── Tests
├── docker-compose.yml
└── volumes
    └── nginx
        ├── certs
        ├── conf
        ├── dhparam
        ├── html
        └── vhost
```

那么如何使用？

启动 app

```sh
docker-compose up -d app
```

> `-d` 可以在后台运行

数据库迁移

```sh
docker-compose up -d migrate
```

这样我们就启动好了应用，下一步开启 https:

```sh
docker-compose up -d letsencrypt
```

这一步会开启 nginx，自动扫描到 `app` 服务，`app` 容器的环境配置中

```yml
LETSENCRYPT_HOST: oldbirds.com
LETSENCRYPT_EMAIL: test@gmail.com
```

会被识别到，然后自动生成 https 的证书，以及配置 nginx 代理。

部署理论上完成了，但是这里有一个坑：在生成 https 的在证书的时候，letsencrypt 会去校验域名的访问性。
所以是本机的话，这一步会失败。

所以要生成 https 的访问，需要你放到服务器中，本地用 http://localhost:8080 去访问吧。

### 阿里云容器服务

上面的部署方案可以在服务器中部署，但是有个比较严重的问题：每次部署需要提交代码，然后服务拉取最新代码后，`docker-compose build` 需要重新构建镜像。

```yml
app:
    image: todo:latest
    build:
      context: .
    ...
```

在服务器中构建镜像是比较灾难的，网络和机器本身的性能的制约等因素，构建出一个镜像得花好半天，当然能构建成功运气也是极好的。另一个因素是，本地已经 build 了一次，docker 是隔离环境的，生成的镜像应该不管在哪个机器(系统)上都可以工作，服务器 build 的工作完全是可以避免的。

一般是将构建好的镜像推送到 docker 官方的管理平台。毕竟是国外的管理平台，有诸多不便之处。幸运的是阿里提供了[免费的镜像存储服务](https://help.aliyun.com/document_detail/60743.html?spm=a2c4g.11174283.6.549.185845413UYPAm)。

![](https://i2.wp.com/img-blog.csdnimg.cn/20200522153016220.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODY0MzAz,size_16,color_FFFFFF,t_70)

容器镜像服务直接按官方文档来就行，这里主要说的是迭代流程：

* 代码开发
* 镜像生成
* 将本地镜像推送到阿里云容器镜像存储平台
* 将本地代码中依赖的镜像修改为最新的版本，提交代码，然后服务器拉取最新代码。
* `docker-compose up app` 完成部署。

最终的 `docker-compose.yml`：

```yml
version: "3.7"

volumes:
  db_data:
  pgadmin-data:

x-shared_environment: &shared_environment
  LOG_LEVEL: ${LOG_LEVEL:-debug}
  DATABASE_HOST: db
  DATABASE_NAME: vapor_database
  DATABASE_USERNAME: vapor_username
  DATABASE_PASSWORD: vapor_password
  VIRTUAL_HOST: oldbirds.com
  LETSENCRYPT_HOST: oldbirds.com
  LETSENCRYPT_EMAIL: test@gmail.com

services:
  app:
    image: registry.cn-hangzhou.aliyuncs.com/oldbirds/todo:1.1.0
    environment:
      <<: *shared_environment
    depends_on:
      - db
    ports:
      - "8080:8080"
    command:
      [
        "serve",
        "--env",
        "production",
        "--hostname",
        "0.0.0.0",
        "--port",
        "8080",
      ]

  migrate:
    image: registry.cn-hangzhou.aliyuncs.com/oldbirds/todo:1.1.0
    environment:
      <<: *shared_environment
    depends_on:
      - db
    command: ["migrate", "--yes"]
    deploy:
      replicas: 0

  revert:
    image: registry.cn-hangzhou.aliyuncs.com/oldbirds/todo:1.1.0
    environment:
      <<: *shared_environment
    depends_on:
      - db
    command: ["migrate", "--revert", "--yes"]
    deploy:
      replicas: 0

  db:
    image: postgres:12-alpine
    volumes:
      - db_data:/var/lib/postgresql/data/pgdata
    environment:
      PGDATA: /var/lib/postgresql/data/pgdata
      POSTGRES_USER: vapor_username
      POSTGRES_PASSWORD: vapor_password
      POSTGRES_DB: vapor_database
    ports:
      - "15432:5432"

  pgadmin:
    image: dpage/pgadmin4:latest
    volumes:
      - pgadmin-data:/var/lib/pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: test@gmail.com
      PGADMIN_DEFAULT_PASSWORD: oldbirds
    ports:
      - "15000:80"

  nginx-proxy:
    image: jwilder/nginx-proxy
    container_name: nginx-proxy
    labels:
      com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy: "true"
    ports:
      - "80:80"
      - "443:443"
    restart: unless-stopped
    volumes:
      - ./volumes/nginx/conf:/etc/nginx/conf.d
      - ./volumes/nginx/vhost:/etc/nginx/vhost.d
      - ./volumes/nginx/html:/usr/share/nginx/html
      - ./volumes/nginx/certs:/etc/nginx/certs
      - ./volumes/nginx/dhparam:/etc/nginx/dhparam
      - /var/run/docker.sock:/tmp/docker.sock:ro

  letsencrypt:
    image: jrcs/letsencrypt-nginx-proxy-companion
    container_name: letsencrypt
    depends_on:
      - nginx-proxy
    restart: unless-stopped
    volumes:
      - ./volumes/nginx/certs:/etc/nginx/certs
      - ./volumes/nginx/vhost:/etc/nginx/vhost.d
      - ./volumes/nginx/html:/usr/share/nginx/html
      - /var/run/docker.sock:/var/run/docker.sock:ro
```


服务 `app`、`migrate`、`revert` 的 `image` 修改成直接指向阿里云的镜像地址 `registry.cn-hangzhou.aliyuncs.com/oldbirds/todo:1.1.0`。


