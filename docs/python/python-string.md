---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 字符串"
date: 2022-03-19
tags:
  - python
---

Python 字符串相关的常用功能汇总，便于查找和使用。

## 字符串拼接

### `+`

第一种，通过+号的形式：

```shell
>>> a, b = 'hello', ' world'
>>> a + b
'hello world'
```

### `%`

在 Python 2.6 以前，% 操作符是唯一一种格式化字符串的方法，它也可以用于连接字符串。

```py
print('%s %s' % ('hello', 'world'))
```

### format

format 方法是 Python 2.6 中出现的一种代替 % 操作符的字符串格式化方法，同样可以用来连接字符串。

```py
print('{}{}'.format('hello', ' world')
```

### join

字符串有一个内置方法 join，其参数是一个序列类型，例如数组或者元组等。

```py
print('-'.join(['aa', 'bb', 'cc']))
```

### f-string

Python 3.6 中引入了 Formatted String Literals（字面量格式化字符串），简称 f-string，f-string 是 % 操作符和 format 方法的进化版，使用 f-string 连接字符串的方法和使用 %操作符、format 方法类似。

```py
>>> aa, bb = 'hello', 'world'
>>> f'{aa} {bb}'
'hello world'
```

### `*`

```py
>>> aa = 'hello '
>>> aa * 3
'hello hello hello '
```

## 判断某字符串是否是另一个字符串的子串

关键字 in 可检查某个字符串是否在另一个字符串中，返回结果为 True 或 False：

```py
isIn = "Cat" in "Cat in the hat."
```
