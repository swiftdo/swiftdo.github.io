---
sitemap:
  exclude: false
  changefreq: hourly
title: Python 装饰器
date: 2022-03-21T00:00:00.000Z
tags:
  - python
createTime: 2024/08/02 09:19:27
permalink: /python/i6y8mood/
---

装饰器（Decorator）是 Python 非常重要的组成部分，它可以修改或扩展其他函数的功能，并让代码保持简短。它经常用于有切面需求的场景，比如：插入日志、性能测试、事务处理、缓存、权限校验等场景。装饰器是解决这类问题的绝佳设计，有了装饰器，我们就可以抽离出大量与函数功能本身无关的雷同代码并继续重用。

## 函数
### 函数也是对象

在 Python 中，`函数`与 Python 的其他对象（如字符串、整数、列表等）一样，也是对象，可以被赋值给变量：

```py
def hello(name):
    return 'Hello ' + name

print(hello('Oldbirds')) # Hello OldBirds

h = hello
print(hello) # <function hello at 0x103e3a160>
print(h) # <function hello at 0x103e3a160>
print(h('old')) # Hello old
```

可以看到`hello`和`h`都指向同一个函数，而函数后加括号`h('old')`是对其进行了调用。

函数对象有一个`__name__`属性，可以拿到函数的名字：

```py
print(hello.__name__) # hello
```

### 函数里的函数

函数里面还可以定义函数：

```py
def hello():
    def oldbird():
        return 'OldBird'
    print('Hello，' + oldbird())

h = hello
print(hello) # <function hello at 0x107b44160>
print(h) # <function hello at 0x107b44160>
print(hello.__name__) # hello

hello() # Hello，OldBird
```

此时的`oldbird`函数的作用域在`hello`之内。

### 函数作为返回值

函数也可以作为其他函数的返回值：

```py
def hello():
    def oldbird():
        print('I am oldbird')
        
    return oldbird

od = hello()
print(od.__name__) # oldbird
od() # I am oldbird
```

### 函数作为参数

函数可以作为参数

```py

def oldbird():
    return "OldBird"

def hello(func):
    print("Hello，" + func())
    
hello(oldbird) # Hello，OldBird
```

### 组合运用

函数可以作为参数、返回值，也可以内部定义，把这些知识组合一下：

```py
def wrapper(func):
    def hello():
        print('befor func()..')
        func()
        print('after func()..')
    return hello

def oldbird():
    print('oldbird')

od = wrapper(oldbird)
od()

# 输出：
# befor func()..
# oldbird
# after func()..
```

* 函数`wrapper`的参数是函数`oldbird`
* `wrapper`的返回值是函数`hello`
* `oldbird`在`hello`中进行了调用

原函数`oldbird`的功能不变，但又成功附加了两行打印的语句。**这就是一个简单的装饰器了！**

本质上，**装饰器就是一个返回函数的高阶函数**。

## 你的第一个装饰器

把上面的代码修改为装饰器的写法：

```py
def wrapper(func):
    def hello():
        print('befor func()..')
        func()
        print('after func()..')
    return hello

@wrapper
def oldbird():
    print('oldbird')

# 输出：
# befor func()..
# oldbird
# after func()..
```

实际上`@wrapper`就等同于下面这一句：

```py
oldbird = wrapper(oldbird)
```

原来的`oldbird()`函数仍然存在，只是现在同名的`oldbird变量`指向了新的函数，于是调用`oldbird()`将执行新函数，即在`wrapper()`函数中返回的`hello()`函数。

妥妥的语法糖。

## 原函数带参数

原函数有可能带有参数：

```py
def wrapper(func):
    def hello():
        return func()
    return hello

@wrapper
def haha(name):
    return 'Haha ' + name
```

下面调用会报错：

```py
print(haha('Bob')) # TypeError: hello() takes 0 positional arguments but 1 was given
```

可以给`hello`函数加一个参数，但这样又不能适用无参数的函数了：

```py
def wrapper(func):
    def hello(name):
        return func(name)
    return hello

@wrapper
def haha(name):
    return 'Haha ' + name

@wrapper
def hehe():
    return 'Hehe'

print(haha('OldBird')) # Haha OldBird

print(hehe()) # TypeError: hello() missing 1 required positional argument: 'name'
```

两个大救星派上用场：`*args` 和 `**kwargs`，可以接收任意数量的位置参数和关键字参数。

```py
def wrapper(func):
    def hello(*args, **kwargs):
        return func(*args, **kwargs)
    return hello

@wrapper
def haha(name):
    return 'Haha ' + name

@wrapper
def hehe():
    return 'Hehe'

print(haha('OldBird')) # Haha OldBird

print(hehe()) # Hehe
```

## 再次遇见 `__name__`

通过函数的`__name__`属性，可以拿到函数的名字，但是由于装饰器包装后的返回值是`hello`函数，因此出现如下：

```py
def wrapper(func):
    def hello(*args, **kwargs):
        return func(*args, **kwargs)
    return hello

@wrapper
def haha(name):
    return 'Haha ' + name


print(haha.__name__) # hello
```

但是往往我们我们关心的是原函数的内在属性，因为获取到`hello`的价值不大。`Python`提供了内置的解决方案：

```py
import functools

def wrapper(func):
    @functools.wraps(func)
    def hello(*args, **kwargs):
        return func(*args, **kwargs)
    return hello

@wrapper
def haha(name):
    return 'Haha ' + name
    
print(haha.__name__) # haha
```

## 总结模板

经过上述一顿折腾，现在可以总结出一个非常标准的装饰器模板了：

```py
import functools

def decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # 原函数运行前
        # Do something
        value = func(*args, **kwargs)
        # 原函数运行后
        # Do something
        return value
    
    return wrapper
```

在这个模板的基础上，我们可以衍生出功能更加复杂的装饰器。

## 具体案例

### 打印日志

装饰器非常经典的应用就是打印日志，比如打印时间、地点、访问记录等等。

```py
import functools

def log(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print('Calling: ' + func.__name__)
        return func(*args, **kwargs)
    return wrapper

@log
def some_func():
    print("some func impl")

some_func() 

# 输出
# Calling: some_func
# some func impl
```

### 计算一个函数的执行时间

```py
import functools
import time

def time_it(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        value = func(*args, **kwargs)
        end = time.perf_counter()
        duration = end - start
        print(f'执行时间: {duration}')
        return value
    return wrapper

@time_it
def another_func():
    time.sleep(1)

another_func()  # 执行时间: 1.003129938
```

## 带参数的装饰器

有的时候装饰器本身也需要接收参数，从而配置为不同的状态，比如打印日志时附带当前的用户名。

于是装饰器可能就变成了这样：

```py
@logit(name='Dusai')
...
```

既然这装饰器多了一对括号，那就是多了一层调用，所以必须在之前无参数的情况下再增加一层的函数嵌套，也就是三层嵌套的函数：

```py
import functools

def logit(name):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            value = func(*args, **kwargs)
            print(f'{name} is calling: ' + func.__name__)
            return value
        return wrapper
    return decorator

@logit(name='oldbird')
def a_func():
    pass

a_func() # oldbird is calling: a_func
```

这个装饰器等效于：

```py
a_func = logit(name='oldbird')(a_func)
```


## 类作为装饰器

虽然装饰器通常都是函数，但是装饰器语法其实并不要求本身是函数，而只要是一个**可调用对象**即可。

那只要在类里实现了`__call__()`方法，岂不是类实例也可以做装饰器？

```py
import functools

class Logit():
    def __init__(self, name):
        self.name = name

    def __call__(self, func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            value = func(*args, **kwargs)
            print(f'{self.name} is calling: ' + func.__name__)
            return value
        return wrapper

@Logit(name='oldbird') 
def a_func():
    pass

a_func() # oldbird is calling: a_func
```

个人觉得类作为装饰器比三层嵌套的函数的代码更容易阅读。该装饰器等价于

```
a_func = Logit(name='oldbird')(a_func)
```

## 将装饰器作用于类

装饰器不仅可以作用于函数，同样也可以作用于类：

```py
import functools

def logit(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print('-' * 10)
        print('Calling: ' + func.__name__)
        value = func(*args, **kwargs)
        print('-' * 10)
        return value
    return wrapper

@logit
class Tester():
    def __init__(self):
        print('__init__ ended')

    def a_func(self):
        print('a_func ended')
        

tester = Tester()
tester.a_func()

# 输出
# ----------
# Calling: Tester
# __init__ ended
# ----------
# a_func ended
```

**装饰器只在类实例化的时候起了效果**，而在调用其内部方法时并没有作用。


## 装饰器叠加

```py
import functools

def inc(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print('+' * 10)
        value = func(*args, **kwargs)
        print('+' * 10)
        return value
    return wrapper

def dec(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print('-' * 5)
        value = func(*args, **kwargs)
        print('-' * 5)
        return value
    return wrapper


@inc
@dec
def printer():
    print('I am here!')

printer()

# 输出:
# ++++++++++
# -----
# I am here!
# -----
# ++++++++++
```

该装饰等价于

```
inc(desc(printer))
```

展开效果如下：

```py

print('+' * 10)


#value = func(*args, **kwargs)
print('-' * 5)

# value = func(*args, **kwargs)
print('I am here!')

print('-' * 5)
return value

print('+' * 10)
return value
```

如果把两个装饰器位置互换:

```py
@dec
@inc
def printer():
    print('I am here!')

printer()


# 输出:
# -----
# ++++++++++
# I am here!
# ++++++++++
# -----
```

那么我们可以展开为：

```py
print('-' * 5)


# value = func(*args, **kwargs)
print('+' * 10)

# value = func(*args, **kwargs)
print('I am here!')

print('+' * 10)
return value


print('-' * 5)
return value
```




















