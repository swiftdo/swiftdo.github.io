---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 生成器"
date: 2022-03-20
tags:
  - python
---

以 list 容器为例，在使用该容器迭代一组数据时，必须事先将所有数据存储到容器中，才能开始迭代；

但是，受到**内存**限制，列表容量肯定是有限的。

而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。

所以，如果**列表元素可以按照某种算法推算出来**，那我们是否可以在循环的过程中不断推算出后续的元素呢？这样就不必创建完整的list，从而节省大量的空间。

## 什么是生成器

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


## send

```py
def foo():
    print("starting...")
    while True:
        res = yield 5
        print("res:", res)
g = foo()
print(next(g))
print("*"*10)
print(next(g))
```
代码的输出：

```
starting...
5
**********
res: None
5
```

如果我们调用如下：

```py
g = foo()
print(next(g))
print("*"*20)
print(g.send(7))
```

输出的结果是：

```py
starting...
5
**********
res: 7
5
```

程序执行`g.send(7)`，程序会从`yield`关键字那一行继续向下运行，send 会把 7 这个值赋值给 res 变量。

由于**send 方法中间接调用了 next() 方法**，所以程序会继续向下运行执行print 方法，然后再次进入 while 循环。

程序执行再次遇到`yield`关键字，`yield` 会返回后面的值后，程序再次暂停，直到再次调用`next`方法或 `send` 方法。

## 生成器函数与常规函数之间的区别

* 生成器函数包含一个或多个yield语句。
* 调用时，它返回一个对象（迭代器），但不会立即开始执行。
* 像__iter__()和__next__()这样的方法会自动实现。因此，我们可以使用next()来遍历项目。
* 一旦函数产生了结果，函数就会暂停，控制就会转移给调用者。
* 局部变量及其状态在连续调用之间被记住。
* 最后，当函数终止时，在进一步调用时会自动引发StopIteration。

## 为什么使用生成器？

### 1.易于实施

与它们的迭代器类对应项相比，生成器可以以一种清晰而简洁的方式实现。下面是一个使用iterator类实现2的幂序列的示例。

```py
class PowTwo:
    def __init__(self, max = 0):
        self.max = max

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n > self.max:
            raise StopIteration

        result = 2 ** self.n
        self.n += 1
        return result
```

这代码很长。现在，使用生成器函数执行相同的操作。

```py
def PowTwoGen(max = 0):
    n = 0
    while n < max:
        yield 2 ** n
        n += 1
```

由于生成器自动跟踪细节，因此简洁明了，实现起来也更加简洁。

### 2.节省内存

一个普通的返回序列的函数会在返回结果之前在内存中创建整个序列。如果序列中的项目数量很大，会影响效率。

而这种序列的生成器实现对内存友好，因此是首选的，因为它一次只能生成一项。

### 3.表示无限流

生成器是表示无限数据流的绝佳媒介。无限流无法存储在内存中，并且由于生成器一次只生成一项，因此它可以表示无限数据流。

下面的示例可以生成所有偶数（至少在理论上）。

```py
def all_even():
    n = 0
    while True:
        yield n
        n += 2
```

### 4.流水线发生器

生成器可用于流水线化一系列操作。

假设我们有一个著名的快餐连锁店的日志文件。日志文件中有一个列（第4列），该列跟踪每小时售出的比萨的数量，我们希望将其求和以得出5年内售出的比萨的总数。

```py
with open('sells.log') as file:
    pizza_col = (line[3] for line in file)
    per_hour = (int(x) for x in pizza_col if x != 'N/A')
    print("Total pizzas sold = ",sum(per_hour))
```

这种流水线高效且易于阅读。










