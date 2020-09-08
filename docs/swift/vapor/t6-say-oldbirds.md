---
sitemap:
  exclude: false
  changefreq: hourly
title: '实战：say-oldbirds'
date: 2020-09-07
tags:
- swift
- vapor
---

## 概述

say-oldbirds 是一个类似于留言板的程序，用来让用户发表问候。say-oldbirds 的使用流程非常简单，用户输入问候信息和姓名，按下提交按钮，就可以将问候加入到页面的消息队列中。

![say-oldbirds](http://blog.loveli.site/2020-08-26-landscape22.png)

在线体验：
* leaf 版: [https://say-oldbirds.herokuapp.com/](https://say-oldbirds.herokuapp.com/)
* flutter 版：[https://swiftdo.github.io/say-oldbirds-flutter](https://swiftdo.github.io/say-oldbirds-flutter)

vapor 的基本操作本文不做过多阐述，可参考 [安装](t1-install.md)

### 主页

主页是 say-oldbirds 唯一的页面，页面中包含创建留言的表单以及所有问候消息。页面上方是程序的标题，使用大字号和鲜艳的颜色。页面底部包含程序的版权标志、编写者、源码等相关信息。

### 问候表单

这个表单包含姓名和问候消息两个字段，其中姓名字段是普通的文本字段，而消息字段是文本区域字段。

### 问候列表

问候消息列表的上方显示所有消息的数量。每一条问候消息要包含的信息有发布者姓名、消息正文、发布的时间、消息的编号。消息发布时间要显示相对时间。消息更具时间先后排序，最新发表的排在最上面。

## 程序开发

环境：基于 macos(10.15.6), xcode(11.6), PostgreSQL(11.5)

### 数据库建模

通过功能概览和设计图的了解，基本确定需要使用哪些表来存储数据，表中需要创建哪些字段以及各表之前的关系。在 say-oldbirds 中，用于保存留言的 Message 模型代码如下：

```swift
// Message.swift
final class Message: Model, Content {
    static let schema = "messages"

    @ID(key: .id)
    var id: Int?

    @Field(key: "name")
    var name: String

    @Field(key: "body")
    var body: String

    // https://docs.vapor.codes/4.0/fluent/model/#timestamp
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?

    init() { }
    init(id: Int? = nil, name: String, body: String) {
        self.id = id
        self.name = name
        self.body = body
    }
}

// CreateMessage.swift
struct CreateMessage: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> {
        return database.schema(Message.schema)
            .field(.id, .int, .identifier(auto: true))
            // .field("name", .custom("VARCHAR(200)"))
            .field("name", .string, .required)
            .field("body", .string, .required)
            .field("createdAt", .datetime,)
            .create()
    }
    func revert(on database: Database) -> EventLoopFuture<Void> {
        return database.schema(Message.schema).delete()
    }
}
```

> 如果要约定存储字符串的长度，可参考 https://stemmetje.com/2020/05/defining-a-varchar-column-in-vapor-4/

因为 Message 和 CreateMessage 都使用了相同的字符串，可以进行重构：

```swift
// Message.swift
final class Message: Model, Content {
    static let schema = "messages"

    struct FieldKeys {
        static var name: FieldKey { "name" }
        static var body: FieldKey { "body" }
        static var cratedAt: FieldKey { "created_at" }
        static var id: FieldKey {"id"}
    }

    @ID(key: FieldKeys.id) var id: Int?
    @Field(key: FieldKeys.name) var name: String
    @Field(key: FieldKeys.body) var body: String

    // https://docs.vapor.codes/4.0/fluent/model/#timestamp
    @Timestamp(key: FieldKeys.cratedAt, on: .create) var createdAt: Date?

    init() { }

    init(id: Int? = nil, name: String, body: String) {
        self.id = id
        self.name = name
        self.body = body
    }
}

// CreateMessage.swift
struct CreateMessage: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> {
        return database.schema(Message.schema)
            .field(Message.FieldKeys.id, .int, .identifier(auto: true))
            .field(Message.FieldKeys.name, .string, .required)
            .field(Message.FieldKeys.body, .string, .required)
            .field(Message.FieldKeys.cratedAt, .datetime)
            .create()
    }

    func revert(on database: Database) -> EventLoopFuture<Void> {
        return database.schema(Message.schema).delete()
    }
}
```

在 `configure.swift` 中，修改自动生成的数据库连接配置后，添加：

```swift
if let databaseURL = Environment.get("DATABASE_URL") {
    app.databases.use(try .postgres(
        url: databaseURL
    ), as: .psql)
} else {
    app.databases.use(.postgres(
        hostname: Environment.get("DATABASE_HOST") ?? "localhost",
        username: Environment.get("DATABASE_USERNAME") ?? "root",
        password: Environment.get("DATABASE_PASSWORD") ?? "", // macos 无需设置密码
        database: Environment.get("DATABASE_NAME") ?? "say-oldbirds"
    ), as: .psql)
}

app.migrations.add(CreateMessage())
```

### postgresql 基础知识

1; 安装

```sh
$ brew install postgresql

$ brew link postgresql
```

2; 启动 postgresql

```sh
$ brew services start postgresql
```

3; 关闭

```sh
$ brew services stop postgresql
```

4; 创建一个 PostgreSQL 用户

```sh
$ createuser username -P
#Enter password for new role
#Enter it again
```

上面的 username 是用户名，回车输入 2 次用户密码后即用户创建完成。更多用户创建信息可以`createuser –help` 查看。

5; 创建数据库

```sh
$ createdb dbname -O username -E UTF8 -e
```

上面创建了一个名为 dbname 的数据库，并指定 username 为改数据库的拥有者（owner），数据库的编码（encoding）是 UTF8，参数 “-e” 是指把数据库执行操作的命令显示出来。

### 运行

创建数据库 `say-oldbirds`:

```sh
$ createdb say-oldbirds -O root -E UTF8 -e
```

运行项目，在终端执行：

```sh
$ vapor run

[ NOTICE ] Server starting on http://127.0.0.1:8080
```

在浏览器中输入 `http://127.0.0.1:8080`。 -> It works!

执行上面的操作后，`say-oldbirds` 数据库依旧空空如也。

我们需要执行数据库迁移操作：

```sh
$ vapor run migrate
```

执行后，刷新 say-oldbirds 数据库, 可以发现 messages 表创建成功了。

## Leaf模板引擎

现在 `routes.swift` 仅仅只有一个 get 路由，且返回 `It works!`：

```swift
app.get { req in
    return "It works!"
}
```

站点的目标是进入首页直接就是留言板页面，那么该如何实现。可以采用 Leaf 来实现。

在 `Package.swift` 引入 `Leaf` 的依赖：

```swift

let package = Package(
    name: "say-oldbirds",
    platforms: [
       .macOS(.v10_15)
    ],
    dependencies: [
        .package(url: "https://github.com/vapor/vapor.git", from: "4.0.0"),
        .package(url: "https://github.com/vapor/fluent.git", from: "4.0.0"),
        .package(url: "https://github.com/vapor/leaf.git", from: "4.0.0-rc"),
        // 添加 Leaf 依赖
        .package(url: "https://github.com/vapor/fluent-postgres-driver.git", from: "2.0.0")
    ],
    targets: [
        .target(
            name: "App",
            dependencies: [
                // 指明 Leaf 依赖
                .product(name: "Leaf", package: "leaf"),
                .product(name: "Fluent", package: "fluent"),
                .product(name: "FluentPostgresDriver", package: "fluent-postgres-driver"),
                .product(name: "Vapor", package: "vapor")
            ],
            swiftSettings: [
                .unsafeFlags(["-cross-module-optimization"], .when(configuration: .release))
            ]
        ),
        .target(name: "Run", dependencies: [.target(name: "App")]),
        .testTarget(name: "AppTests", dependencies: [
            .target(name: "App"),
            .product(name: "XCTVapor", package: "vapor"),
        ])
    ]
)
```

添加 Leaf 的配置：

```swift
// configure.swift
public func configure(_ app: Application) throws {
    app.middleware.use(FileMiddleware(publicDirectory: app.directory.publicDirectory))

    /// 配置 Leaf
    app.views.use(.leaf)
    app.leaf.cache.isEnabled = app.environment.isRelease

    //...
}
```

configure 方法的第一行启用了一个中间件，用途是从 `Public` 目录中提供文件服务(图片，css，js等等)。
默认情况下，`Leaf`模板文件应放置在 `Resources/Views` 目录下。可以通过在配置属性`app.leaf.configuration.rootDirectory` 上设置新的根目录来更改此设置。

在 `Resources/Views` 下添加 `base.leaf` 作为父模板:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/css/frontend.css">
  <title>say-oldbirds</title>
</head>

<body>
  <div class="so-nav">
    <div class='so-title-big'>Say OldBirds</div>
    <div class='so-title-small'>to the world</div>
  </div>
  <div class="so-content">
    #import("body")
  </div>
  
</body>

</html>
```

在 `base.leaf` 中，采用了 css 样式

```html
<link rel="stylesheet" href="/css/frontend.css">
```

所以可以在 Public 目录下新建 `css` 文件夹，且在 `css` 文件夹下创建 `frontend.css`，内容如下：

```css
/*frontend.css*/

* {
    margin: 0px;
    padding: 0px;
}

body {
    font-family: Menlo, Roboto;
    font-size: 16px;
    line-height: 1.5em;
    background: #F2F2F2;
    width: 100%;
}

hr {
    margin: 15px 0px;
    border: none;
    border-width: 0.5px;
    border-style: solid;
}

a {
    text-decoration: none;
}

img {
    width: 100%;
}

h1 {
    font-size: 28px;
}

h2 {
    font-size: 24px;
}

h3 {
    font-size: 20px;
}

.so-nav {
    display: flex;
    margin: 40px 80px;
    justify-content: center;
    align-items: baseline;
}

.so-title-big {
    font-size: 50px;
    color: #EB5757;
    font-family: Menlo;
}

.so-title-small {
    margin-left: 20px;
    font-size: 20px;
    color: #828282;
    font-family: PingFang SC;
}

.so-content {
    margin: 50px 20% 20px 20%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-items: flex-start;
}

.so-form {
    display: flex;
    flex-direction: column;
}

.so-name {
    display: flex;
    flex-direction: column;
}

.so-form-title {
    font-size: 22px;
    margin-bottom: 10px;
    color: #4F4F4F;
}

.so-input {
    outline-style: none;
    border: none;
    font-size: 20px;
    padding: 10px 10px;
    border-radius: 5px;
}

.so-message {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}

.so-textarea {
    outline-style: none;
    border: none;
    font-size: 20px;
    padding: 10px 10px;
    border-radius: 5px;
}

.so-submit {
    margin-top: 30px;

    width: 150px;
    height: 44px;
    outline-style: none;
    border: none;
    border-radius: 10px;
    background: #EB5757;
    font-size: 18px;
    color: white;
}

.so-list {
    margin-top: 50px;
}

.so-list-title {
    font-size: 28px;
    margin-bottom: 20px;
}

.so-list-body {
    border-radius: 10px;
    background: white;
}

.so-list-cell {
    padding: 20px;
    border-bottom: #eee solid 1px;
}

.so-cell-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.so-cell-name {
    font-size: 20px;
    color: #EB5757;
    font-family: PingFang SC;
}

.so-cell-time {
    font-size: 14px;
    color: #BDBDBD;
}

.so-cell-message {
    font-size: 16px;
    margin-top: 10px;
    color: #333;
    font-family: Menlo;
}

.so-id {
    color: #BDBDBD;
    font-size: 12px;
    margin-left: 5px;
}

.so-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px auto;
    color: #4F4F4F;
}

.so-footer a {
    margin: 0px 5px;
}
```

在 `Resources/Views` 创建 `index.leaf`：

```html
#extend("base"):
  #export("body"):
    <form class="so-form" method="post" action="/create" >
      <div class="so-name">
        <div class="so-form-title">name</div>
        <input class='so-input' type="text" name="name" />
      </div>
      <div class="so-message">
        <div class="so-form-title">message</div>
        <textarea class="so-textarea" rows="3" name="body"></textarea>
      </div>
      <input class="so-submit" type="submit" value="Submit" />
    </form>

    <div class="so-list">
      <div class="so-list-title">Messges(#(count))</div>
      <div class="so-list-body">
          #if(messages != nil):
            #for(data in messages):
              <div class="so-list-cell">
                <div class="so-cell-header">
                  <div class="so-cell-name">
                    #(data.name)<span class="so-id">##(data.id)</span>
                  </div>
                  <div class="so-cell-time">#(data.time)</div>
                </div>
                <div class="so-cell-message">
                  #(data.message)
                </div>
              </div>
            #endfor
        #else:
            <div>no messages</div>
        #endif

      </div>
    </div>
    <div class="so-footer">©2020<a href="http://oldbird.run">OldBirds</a> | <a href="https://github.com/swiftdo/say-oldbirds">swiftdo/say-oldbirds</a></div>
  #endexport
#endextend
```

> 在 xcode 中选择 `Editor ▸ Syntax Coloring ▸ HTML`，让其语法高亮。

模板文件经过处理后，将呈现为HTML字符串。首先，我们需要响应一些 HTTP 请求，然后告诉模板引擎呈现模板文件，然后将其作为 HTML 响应自动发送。

```swift
/// routes.swift
import Fluent
import Vapor
import Leaf

func routes(_ app: Application) throws {
    app.get("hello") { req -> String in
        return "Hello, world!"
    }
    try app.register(collection: MessageController())
}
```

在 `App/Controllers/` 目录下，创建 `MessageController.swift`：

```swift
import Fluent
import Vapor
import Leaf

struct MessageController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        routes.get(use: index)
        routes.post("create", use: create)
    }

    func index(req: Request) throws -> EventLoopFuture<View> {
        struct Context: Encodable {
            let messages: [Message.ViewContext]
            let count: Int
        }
        return Message
            .query(on: req.db)
            .sort(\.$createdAt, .descending)
            .all()
            .flatMapThrowing {
                return try $0.map{ try Message.ViewContext(message: $0)}
            }
            .flatMap {
                let context = Context(messages: $0, count: $0.count)
                return req.view.render("index", context)
            }
    }

    func create(req: Request) throws ->  EventLoopFuture<Response>{
        let message = try req.content.decode(Message.self)
        req.logger.log(level: .info, "\(message)")
        return message.save(on: req.db).map {
            return req.redirect(to: "/")
        }
    }
}
```

项目到此完成，然后在终端执行

```swift
$ swift run
```

> 如果是 xcode 运行，如果报错是因为路径问题，需要配置下：
> In Xcode click on the "Run" target -> Select "Edit Scheme..." -> "Run" -> "Options" tab -> Check the "Use custom working directory:" checkbox and select the root of your Vapor project.

## Heroku 部署

[Heroku](https://www.heroku.com/) 平台的灵活性极高且支持多种编程语言。若想把程序部署到 Heroku 上，开发者可以直接使用 Git 把程序推送到 Heroku 的 Git 服务器上。在服务器上, git push 命令会自动触发安装、配置和部署程序。

### 注册 Heroku 账户

您将需要一个heroku帐户，如果您没有，请在此处注册：[https://signup.heroku.com/](https://signup.heroku.com/)

### 安装 CLI

确保已安装 heroku cli 工具。

* HomeBrew

    ```sh
    brew install heroku/brew/heroku
    ```

* 其他安装选项
  在此处查看替代安装选项：[https://devcenter.heroku.com/articles/heroku-cli#download-and-install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

### 登录
安装cli后，请输入以下内容：

```sh
$ heroku login
```

用以下命令来验证邮箱是否登录：

```sh
$ heroku auth:whoami
```

### 创建一个应用程序

访问 `[dashboard.heroku.com](https://dashboard.heroku.com)`，登录您的帐户，并从右上角的下拉列表中创建一个新应用程序。按照 Heroku 提供的提示进行操作即可。


### Git

Heroku 使用 Git 部署您的应用程序，因此您需要将项目放入 Git 存储库（如果尚未安装）。

#### 初始化 Git

如果需要将 Git 添加到项目中，请在终端中输入以下命令：

```sh
$ git init
```

#### Master 分支

默认情况下，Heroku 部署 master 分支。在推送之前，请确保所有更改都已签入该分支。

检查您当前的分支：

```sh
$ git branch
```

星号表示当前分支：

```sh
* master
  commander
  other-branches
```

如果您当前不在 `master` 分支上，请输入以下命令切换到 `master` 分支：

```sh
$ git checkout master
```

#### 提交变更

如果此命令产生输出，则您有未提交更改：

```sh
$ git status --porcelain
```

使用以下命名进行提交：

```sh
$ git add .
$ git commit -m "我代码修改的描述"
```

#### 与 Heroku 连接

将您的应用程序与 heroku 连接（替换为您的应用程序名称）

```sh
$ heroku git:remote -a your-apps-name-here
```

#### 设置 Buildpack

设置 buildpack 告诉 heroku 如何处理这个 vapor 项目。

```sh
$ heroku buildpacks:set vapor/vapor
```

#### Swift 版本文件

buildpack 会寻找一个.swift-version 文件，获知使用的 swift 版本。 （可根据自己的项目来替换下面的 5.2.1）

```sh
echo "5.2.1" > .swift-version
```

这将创建 `.swift-version` 文件，内容为 5.2.1。

#### Procfile

Heroku 使用 Procfile 知道如何运行您的应用程序，我们可以使用下面：

```sh
web: Run serve --env production --hostname 0.0.0.0 --port $PORT
```

可以使用以下终端命令进行创建:

```sh
echo "web: Run serve --env production" \
  "--hostname 0.0.0.0 --port \$PORT" > Procfile
```

#### 提交变更

我们只是添加了这些文件，但尚未提交。如果我们推送，heroku 将找不到它们。

提交，使用下面命令：

```sh
$ git add .
$ git commit -m "adding heroku build files"
```

#### 部署到 Heroku

您已经准备好部署，可以在终端上运行它。构建可能需要一段时间。

```sh
$ git push heroku master
```

#### Scale Up

成功构建之后，您需要添加至少一台服务器，一台网络是免费的，您可以通过以下方式获得它：

```sh
heroku ps:scale web=1
```

#### 持续部署

每当您想更新时，只需将最新的更改放入master并推送到heroku，它将重新部署。

#### Postgres

##### 添加PostgreSQL数据库

在 [dashboard.heroku.com](https://dashboard.heroku.com) 访问您的应用程序，然后转到 `Add-ons` 部分。

从这里输入 `postgres`，您将看到`Heroku Postgres`的选项，选择它。

选择`hobby dev free plan`，并进行配置。 剩下的事由 Heroku 完成。

完成后，您将看到数据库显示在 `Resources` 选项卡下。

##### 配置数据库

现在，我们必须告诉我们的应用程序如何访问数据库。在项目的根目录中，运行以下命令：

```sh
$ heroku config
```

这将会有如下输出：

```sh
=== today-i-learned-vapor Config Vars
DATABASE_URL: postgres://cybntsgadydqzm:2d9dc7f6d964f4750da1518ad71hag2ba729cd4527d4a18c70e024b11cfa8f4b@ec2-54-221-192-231.compute-1.amazonaws.com:5432/dfr89mvoo550b4
```

`DATABASE_URL` 此处将代表 postgres 数据库。不要将这个 URL 写入到你的代码中，这也是一个坏习惯。

下面是一个数据库配置的样例

```swift
if let databaseURL = Environment.get("DATABASE_URL") {
    app.databases.use(try .postgres(
        url: databaseURL
    ), as: .psql)
} else {
    // ...
}
```

如果您使用 `Heroku Postgres's standard plan`，则需要 `Unverified TLS `。

不要忘记提交你所做的修改：

```sh
git add .
git commit -m "configured heroku database"
```

##### 还原数据库

你可以使用 heroku 的 run 命令执行 `revert` 或者其他命令。默认情况下执行的是 `Run`。

还原数据库：

```sh
$ heroku run Run -- revert --all --yes --env production
```

迁移：

```sh
$ heroku run Run -- migrate --env production
```

## 前后端分离

### 模块拆分

### json

### 跨域

### flutter for web

### github-pages

