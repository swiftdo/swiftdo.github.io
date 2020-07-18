---
title: 'Yaml'
sitemap:
  exclude: false
  changefreq: hourly
---

## 介绍

YAML 是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便。它实质上是一种通用的数据串行化格式。

在 gitlab 里有 `.gitlab-ci.yml`，docker-compose 有 `docker-compose.yml`，flutter 有 `package.yml`。随处可见的 yml 文件，不好好了解下都说不过去了。

基本的语法规则：

* 大小写敏感
* 使用缩进表示层级关系
* 缩进时不允许使用Tab键，只允许使用空格（一般2个或4个空格）。
* 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可

允许表示的三种格式：

* 对象
* 数组
* 常量值

使用 `#` 作为注释，YAML 中只有行注释。

## 对象

使用冒号代表，格式为 `key: value`。冒号后面要加一个空格：

```yml
key: value
```

可以使用缩进表示层级关系；

```yml
key:
    child-key: value
    child-key2: value2
```

YAML 中还支持流式(flow)语法表示对象，比如上面例子可以写为：

```yml
key: {child-key: value, child-key2: value2}
```

## 数组

使用一个短横线加一个空格代表一个数组项：

```yml
hobby:
    - Rust
    - Swift
```

当然也可以有这样的写法：

```yml
-
    - Rust
    - Swift
```

可以简单理解为：`[[Rust, Swift]]`

```yml
companies:
    -
        id: 1
        name: company1
        price: 200W
    -
        id: 2
        name: company2
        price: 500W
```

companies 属性是一个数组，每一个数组元素又是由id,name,price三个属性构成；

数组也可以使用流式(flow)的方式表示：

```yml
companies: [{id: 1,name: company1,price: 200W},{id: 2,name: company2,price: 500W}]
```

## 常量

YAML中提供了多种常量结构，包括：整数，浮点数，字符串，NULL，日期，布尔，时间。

```yml
boolean:
    - TRUE  #true,True都可以
    - FALSE  #false，False都可以
float:
    - 3.14
    - 6.8523015e+5  #可以使用科学计数法
int:
    - 123
    - 0b1010_0111_0100_1010_1110    #二进制表示
null:
    nodeName: 'node'
    parent: ~  #使用~表示null
string:
    - 哈哈
    - 'Hello world'  #可以使用双引号或者单引号包裹特殊字符
    - newline
      newline2    #字符串可以拆成多行，每一行会被转化成一个空格
date:
    - 2018-02-17    #日期必须使用ISO 8601格式，即yyyy-MM-dd
datetime:
    -  2018-02-17T15:02:31+08:00    #时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区
```

## 复合结构

对象和数组可以结合使用，形成复合结构。

```yml
languages:
 - Ruby
 - Perl
 - Python
websites:
 YAML: yaml.org
 Ruby: ruby-lang.org
 Python: python.org
 Perl: use.perl.org
```

可以理解为：

```js
{
    languages: ['Ruby', 'Perl', 'Python'],
    websites: {
        YAML: 'yaml.org',
        Ruby: 'ruby-lang.org',
        Python: 'python.org',
        Perl: 'use.perl.org'
     }
}
```

## 一些特殊符号

* `---` YAML可以在同一个文件中，使用 `---` 表示一个文档的开始；

  ```yml
  server:
      address: 192.168.1.100
  ---
  spring:
      profiles: development
      server:
          address: 127.0.0.1
  ---
  spring:
      profiles: production
      server:
          address: 192.168.1.120
  ```

  代表定义了两个profile，一个是development，一个production；也常常使用---来分割不同的内容，比如记录日志：

  ```yml
  ---
  Time: 2018-02-17T15:02:31+08:00
  User: ed
  Warning:
       This is an error message for the log file
  ---
  Time: 2018-02-17T15:05:21+08:00
  User: ed
  Warning:
      A slightly different error message.
  ```

* `...` 和 `---` 配合使用，在一个配置文件中代表一个文件的结束：

  ```yml
  ---
  time: 20:03:20
  player: Sammy Sosa
  action: strike (miss)
  ...
  ---
  time: 20:03:47
  player: Sammy Sosa
  action: grand slam
  ...
  ```

  相当于在一个yaml文件中连续写了两个yaml配置项。

* `!!` YAML中使用`!!`做类型强行转换

  ```yml
  string:
      - !!str 54321
      - !!str true
  ```

  相当于把数字和布尔类型强转为字符串。当然允许转型的类型很多，比如：

  ```yml
  --- !!set
  - Mark McGwire: 65
  - Sammy Sosa: 63
  - Sammy Sosa: 63
  - Ken Griffy: 58
  ```

  将数组解析为 set，简单理解，转化的内容就是：
  
  ```js
  [{Ken Griffy=58}, {Mark McGwire=65}, {Sammy Sosa=63}]
  ```
  
  重复的Sammy Sosa去掉；

* 多行字符串可以使用`|`保留换行符，也可以使用`>`折叠换行

  ```yml
  this: |
    Foo
    Bar
  that: >
    Foo
    Bar
  ```

  可以理解为:

  ```js
  { this: 'Foo\nBar\n', that: 'Foo Bar\n' }
  ```

  字符串之中可以插入 HTML 标记：

  ```yml
  message: |

    <p style="color: red">
        段落
    </p>
  ```

  可以理解为：

  ```js
  { message: '\n<p style="color: red">\n  段落\n</p>\n' }
  ```

## 引用

锚点`&`和别名`*`，可以用来引用。

```yml
defaults: &defaults
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults
```

等同于下面的代码:

```yml
defaults:
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  adapter:  postgres
  host:     localhost

test:
  database: myapp_test
  adapter:  postgres
  host:     localhost
```

`&` 用来建立锚点（defaults），`<<` 表示合并到当前数据，`*`用来引用锚点。

```yml
hr:
 - Mark McGwire
 - &SS Sammy Sosa
rbi:
 - *SS
 - Ken Griffey
```

可以看到，在hr中，使用`&SS`为Sammy Sosa设置了一个锚点（引用），名称为`SS`，在rbi中，使用`*SS`完成了锚点使用，那么结果为：

```js
{rbi=[Sammy Sosa, Ken Griffey], hr=[Mark McGwire, Sammy Sosa]}
```

我们也可以这样定义：

```yml
SS: &SS Sammy Sosa
hr:
 - Mark McGwire
 - *SS
rbi:
 - *SS
 - Ken Griffey
```

再举个复杂点的例子：

```yml
merge:
  - &CENTER { x: 1, y: 2 }
  - &LEFT { x: 0, y: 2 }
  - &BIG { r: 10 }
  - &SMALL { r: 1 }
  
sample1:
    <<: *CENTER
    r: 10

sample2:
    <<: [ *CENTER, *BIG ]
    other: haha

sample3:
    <<: [ *CENTER, *BIG ]
    r: 100
```

在 merge 中，定义了四个锚点，分别在 sample 中使用。

* sample1={r=10, y=2, x=1}
* sample2={other=haha, x=1, y=2, r=10}
* sample3={r=100, y=2, x=1}

## 参考链接

* [YAML 语言教程](http://www.ruanyifeng.com/blog/2016/07/yaml.html)
* [YAML1.2规范](http://yaml.org/spec/1.2/spec.pdf)
* [YAML快速入门](https://www.jianshu.com/p/97222440cd08)
