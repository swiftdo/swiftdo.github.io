---
sitemap:
  exclude: false
  changefreq: hourly
title: '入门'
---

## 路由

## 中间件

## Fluent

Fluent 是 Swift 的 ORM 框架。它利用 Swift 的强大类型系统为数据库提供易于使用的接口。Fluent 通过模型类的创建，读取，更新和删除等操作来管理数据库，而不是直接通过编写 SQL 语句。

为了更好的说明 Fluent 的使用，我们将对官方提供的例子进行扩展介绍（Postgresql）。

### 配置

```swift
.package(url: "https://github.com/vapor/fluent.git", from: "4.0.0-rc"),
.package(url: "https://github.com/vapor/fluent-postgres-driver.git", from: "2.0.0-rc"),
```

```swift
.target(name: "App", dependencies: [
    .product(name: "Fluent", package: "fluent"),
    .product(name: "FluentPostgresDriver", package: "fluent-postgres-driver"),
    .product(name: "Vapor", package: "vapor"),
]),
```

完成相关依赖的添加后，我们需要添加以下代码来配置数据库：

```swift
// configure.swift

import Fluent
import FluentPostgresDriver

app.databases.use(.postgres(hostname: "localhost", username: "vapor", password: "vapor", database: "vapor"), as: .psql) // 用户名、密码、以及数据库名你可以修改成你自己的
```

### 新增

建立银河系的 Model:

```swift
final class Galaxy: Model {
    // Name of the table or collection.
    static let schema = "galaxies" // 一般为表名

    // Unique identifier for this Galaxy.
    @ID(key: .id)
    var id: UUID?  // 主键

    // The Galaxy's name.
    @Field(key: "name")
    var name: String

    // Creates a new, empty Galaxy.
    init() { }

    // Creates a new Galaxy with all properties set.
    init(id: UUID? = nil, name: String) {
        self.id = id
        self.name = name
    }
}
```

创建迁移类：

```swift
struct CreateGalaxy: Migration {
    // Prepares the database for storing Galaxy models.
    func prepare(on database: Database) -> EventLoopFuture<Void> {
        database.schema(Galaxy.schema)
            .id()
            .field("name", .string)
            .create()
    }

    // Optionally reverts the changes made in the prepare method.
    func revert(on database: Database) -> EventLoopFuture<Void> {
        database.schema(Galaxy.schema).delete()
    }
}
```

将迁移类添加到 `app.migrations`：

```swift
// configure.swift
app.migrations.add(CreateGalaxy())
```

要进行迁移，打开终端，在项目根目录下执行迁移命令：

```sh
$ vapor run migrate
Migrate Command: Prepare
The following migration(s) will be prepared:
+ CreateGalaxy on default
Would you like to continue?
y/n> y
Migration successful
```

这样就完成了 `galaxies` 的创建。

如果你想撤回这次迁移，也很非常简单：

```sh
vapor run migrate --revert
Migrate Command: Revert
[ NOTICE ] relation "_fluent_migrations" already exists, skipping (transformCreateStmt)
The following migration(s) will be reverted:
- App.CreateGalaxy on default
Would you like to continue?
y/n> y
Migration successful
```

有人会问：我不想每次都在终端执行命令，可不可以代码运行的时候就修改完成。答案是肯定的：

```swift
// ....
try app.autoMigrate().wait() // 自动 Migrate

// try app.autoRevert()  // 自动 Revert
```

### 修改

如果要给 `galaxies` 表新增 `age` 字段，我们要怎么做？

创建新的迁移类：

```swift
import Fluent

struct GalaxAddAgeMigrate: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> {
        database.schema(Galaxy.schema)
            .field("age", .int)
            .update()
    }

    func revert(on database: Database) -> EventLoopFuture<Void> {
        database.schema(Galaxy.schema)
            .deleteField("age")
            .update()
    }
}
```

将迁移类添加到 `app.migrations`：

```swift
// configure.swift
app.migrations.add(GalaxAddAgeMigrate())
```

打开终端，执行：

```sh
vapor run migrate
Migrate Command: Prepare
[ NOTICE ] relation "_fluent_migrations" already exists, skipping (transformCreateStmt)
The following migration(s) will be prepared:
+ App.GalaxAddAgeMigrate on default
Would you like to continue?
y/n> y
Migration successful
```

## 队列

## 命令
