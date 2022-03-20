---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 迭代器"
date: 2022-03-20
tags:
  - python
---

列表（list）、元组（tuple）、字典（dict）、集合（set）这些序列式容器有一个共同的特性，它们都支持使用`for`循环遍历存储的元素，都是可迭代的，因此它们又有一个别称，即**迭代器**

迭代是访问集合元素的一种方式。迭代器是一个可以记住遍历的位置的对象。**迭代器对象**从集合的第一个元素开始访问，直到所有的元素被访问完结束。迭代器只能往前不会后退。

## 可迭代对象

可以直接作用于 for 循环的对象统称为可迭代对象：`Iterable`。

以直接作用于 for 循环的数据类型有以下几种：

* 集合数据类型，如 list 、 tuple 、 dict 、 set 、 str 等；
* generator，包括生成器和带`yield`的 generator function。

## 判断是否可以迭代

可以使用`isinstance()`判断一个对象是否是`Iterable`对象：

```py
from collections import Iterable
isinstance([], Iterable) # True
isinstance({}, Iterable) # True
```

## 迭代器

可以被`next()`函数调用并不断返回下一个值的对象称为迭代器：`Iterator`。

可以使用`isinstance()`判断一个对象是否是`Iterator`对象：

```py
from collections import Iterator

isinstance((x for x in range(10)), Iterator) # True
isinstance([], Iterator) # Flase
isinstance({}, Iterator) # False
```

## iter()函数

生成器都是`Iterator`对象，但list、dict、str虽然是Iterable，却不是 Iterator。

把list、dict、str等`Iterable`变成`Iterator`可以使用`iter()`函数

```py
isinstance(iter([]), Iterator) # True
isinstance(iter('abc'), Iterator) # True
```

## 惰性序列

惰性计算又称为惰性求值（Lazy Evaluation），是一个计算机编程中的概念，它的目的是要最小化计算机要做的工作，尽可能延迟表达式求值。延迟求值特别用于函数式编程语言中。在使用延迟求值的时候，表达式不在它被绑定到变量之后就立即求值，而是在该值被取用的时候求值。惰性计算的最重要的好处是它可以构造一个无限的数据类型。

**具有惰性计算特点的序列称为惰性序列**，Python 中的迭代器就是一个惰性序列，调用`iter()`返回一个`iterator`并赋值给一个变量后不会立即进行求值，而是当你用到其中某些元素的时候才去求某元素的值。

**惰性计算还可以在大规模数据处理中平滑处理时间，提高内存使用率**。当处理大规模数据时，一次性进行处理往往是不方便的。

## 总结

* 凡是可作用于`for`循环的对象都是`Iterable`类型；
* 凡是可作用于`next()`函数的对象都是`Iterator`类型
* 集合数据类型如 list、dict、str 等是`Iterable`但不是`Iterator`，不过可以通过`iter()`函数获得一个`Iterator`对象
* 生成器不但可以作用于 for 和 in 语句，还可以被`next()`函数不断调用并返回下一个值，直到最后抛出`StopIteration`错误，它是一个迭代器。








