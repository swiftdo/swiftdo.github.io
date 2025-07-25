---
sitemap:
  exclude: false
  changefreq: hourly
title: Python 文件操作
date: 2022-03-19T00:00:00.000Z
tags:
  - python
createTime: 2024/08/02 09:19:27
permalink: /python/d8y7aqc5/
---

读写文件是最常见的 IO 操作。Python 内置了读写文件的函数，用法和 C 是兼容的。

## 读

```py
try:
    f = open('/path/to/file', 'r')
    print(f.read())
finally:
    if f:
        f.close()
```

但是每次都这么写实在太繁琐，所以，Python 引入了 with 语句来自动帮我们调用 close()方法

```py
with open('/path/to/file', 'r') as f:
    print(f.read())
```

## 写

写文件和读文件是一样的，唯一区别是调用 open()函数时，传入标识符'w'或者'wb'表示写文本文件或写二进制文件：

```py
f = open('/Users/michael/test.txt', 'w')
f.write('Hello, world!')
f.close()
```

你可以反复调用 write() 来写入文件，但是务必要调用 f.close()来关闭文件。当我们写文件时，操作系统往往不会立刻把数据写入磁盘，而是放到内存缓存起来，空闲的时候再慢慢写入。只有调用 close()方法时，操作系统才保证把没有写入的数据全部写入磁盘。忘记调用 close()的后果是数据可能只写了一部分到磁盘，剩下的丢失了。所以，还是用 with 语句来得保险：

```py
with open('/Users/michael/test.txt', 'w') as f:
    f.write('Hello, world!')
```
