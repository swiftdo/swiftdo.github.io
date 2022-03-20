---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 生成器"
date: 2022-03-20
tags:
  - python
---

## 什么是生成器

以 list 容器为例，在使用该容器迭代一组数据时，必须事先将所有数据存储到容器中，才能开始迭代；

但是，受到**内存**限制，列表容量肯定是有限的。

而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。

所以，如果**列表元素可以按照某种算法推算出来**，那我们是否可以在循环的过程中不断推算出后续的元素呢？这样就不必创建完整的list，从而节省大量的空间。

在 Python 中，这种一边循环一边计算的机制，称为生成器：generator。

> 用 Python 构建**迭代器**有很多开销; 我们必须使用`__iter__()`和`__next__()`方法实现一个类，跟踪内部状态，在没有要返回的值时触发`StopIteration`等等。
> 
> 这既冗长又违反直觉。
> 
> 生成器在这种情况下可以派上用场。Python 生成器是创建迭代器的简单方法。我们上面提到的所有开销都由 Python 的**生成器**自动处理。

简而言之，生成器是一个函数，它返回一个对象（迭代器），我们可以对其进行迭代（一次一个值）。

## 如何创建生成器？

要创建一个生成器，有很多种方法。

### 第一种方法

第一种方法很简单，只要把一个列表生成式的 `[]` 改成 `()`

```py
L = [ x*2 for x in range(5)] # [0, 2, 4, 6, 8]
G = ( x*2 for x in range(5)) # <generator object <genexpr> at 0x7f626c452dbe>
```

创建`L`和`G`的区别仅在于最外层的`[ ]`和`( )` ， L 是一个列表，而 G 是一个生成器。我们可以直接打印出 L 的每一个元素，但我们怎么打印出 G 的每一个元素呢？如果要一个一个打印出来，可以通过 next() 函数获得生成器的下一个返回值：

```py
next(G) # 0
next(G) # 2
next(G) # 4
next(G) # 6
next(G) # 8
next(G) # StopIteration                             Traceback (most recent call last)
```
**生成器保存的是算法**，每次调用`next(G)`，就计算出`G`的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出`StopIteration`的异常。

使用`for`循环，因为生成器也是可迭代对象，并且不需要关心 StopIteration 异常。

```py
for x in G:
  print(x)
```

### 第二种方法

如果推算的算法比较复杂，用类似列表生成式的`for`循环无法实现的时候，可以用函数来实现。

斐波拉契数列用列表生成式写不出来，用函数：

```py
def fib(times):
  n = 0
  a, b = 0, 1
  while n < times:
    print(b)
    a, b = b, a+b
    n += 1
  return "donw"

fib(5) # 1 1 2 3 5
```

fib 函数实际上是定义了斐波拉契数列的推算规则，可以从第一个元素开始，推算出后续任意的元素，这种逻辑其实非常类似generator。

要把`fib`函数变成`generator`，只需要把`print(b)`改为`yield b`就可以了：

```py
def fib(times):
  n = 0
  a, b = 0, 1
  while n < times:
    yield b
    a, b = b, a+b
    n += 1
  return "donw"

F = fib(5)
next(F) # 1
next(F) # 1
next(F) # 2
next(F) # 3
next(F) # 5
next(F) # StopIteration...
```
在上面 fib 的例子，我们在循环过程中不断调用`yield`，就会不断中断。当然要给循环设置一个条件来退出循环，不然就会产生一个无限数列出来。同样的，把函数改成generator后，我们基本上从来不会用 next() 来获取下一个返回值，而是直接使用 for 循环来迭代：

```py
for n in fib(5):
  print(n)
```

但是用 for 循环调用 generator 时，发现拿不到 generator 的 return 语句的返回值。如果想要拿到返回值，必须捕获`StopIteration`错误，返回值包含在`StopIteration`的`value`中：

```py
g = fib(5)
while True:
  try:
      x = next(g)
      print(f"value:{x}")
  except StopIteration as e:
    print(f"生成器返回值:{e.value}")
    break
```

输出：

```
value:1
value:1
value:2
value:3
value:5
生成器返回值:done
```






