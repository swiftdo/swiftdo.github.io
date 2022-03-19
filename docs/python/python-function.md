---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 函数可变参数"
date: 2022-03-19
tags:
  - python
---

学习比较特殊的点。

## 可变参数

`*`与`**`是Python参数中的重点知识，他们都被称为可变参数（任意参数），我们经常会在代码中看到`*args`、`**kwargs`

### `*args`

有时候，预先不知道函数需要接受多少实参，好在 Python 允许函数从调用语句中收集任意数量的实参。

```py
def argsFunc(a, *args):
	print a
	print args
	
>>> argsFunc(1, 2, 3, 4)
1
(2, 3, 4)
```

`argsFunc`中匹配完定义好的参数，**剩余的参数以元组的形式存储在 args**（args 名称你可以自行定义），因此在上述程序中只要你传入不小于 1 个参数，该函数都会接受，当然你也可以直接定义只接受可变参数，你就可以自由传递你的参数:

```py
def argsFunc(*my_args):
	print my_args
	
>>> argsFunc(1, 2, 3, 4)
(1, 2, 3, 4)
>>> argsFunc()
()
```

### `**kwargs`

形参名前加两个*表示，**参数在函数内部将被存放在以形式名为标识符的 dictionary 中**，这时调用函数的方法则需要采用`arg1=value1,arg2=value2`这样的形式。

> 为了区分，我把`*args`称作为数组参数，`**kwargs`称作为字典参数

```py
>>> def a(**x):print x
>>> a(x=1,y=2,z=3)
{'y': 2, 'x': 1, 'z': 3} #存放在字典中
```

什么时候可以用到它？

```py
import mysql.connector  

db_conf = {
	user='xx',
	password='yy', 
	host='xxx.xxx.xxx.xxx',
	database='zz'
}

cnx = mysql.connector.connect(
	user=db_conf['user'],
	password=db_conf['password'], 
	host=db_conf['host'],
	database=db_conf['database']
	)
...
```

相比，使用`Mysql Python`库时候，经常看到这个样子的代码，`db_conf`一般都从配置文件读取，这是优雅的不定字典参数就派上用途了！

```python
import mysql.connector  

db_conf = {
	user='xx',
	password='yy', 
	host='xxx.xxx.xxx.xxx',
	database='zz'
}

cnx = mysql.connector.connect(**db_conf)
```

### 总结

**作为函数定义时：**

1、`*`参数收集所有未匹配的位置参数组成一个tuple对象，局部变量args指向此tuple对象

2、`**`参数收集所有未匹配的关键字参数组成一个dict对象，局部变量kwargs指向此dict对象

```py
def main(*args, **kwargs):
    pass
```

**作为函数调用时：**

1、`*`参数用于解包tuple对象的每个元素，作为一个一个的**位置参数**传入到函数中

2、`**`参数用于解包dict对象的每个元素，作为一个一个的**关键字参数**传入到函数中

```py
my_tuple = ("old","birds","hello")
 
temp(*my_tuple)
#---等同于---#
temp("old","birds","hello")
```

```py
my_dict = {"name":"oldbirds","age":32}
 
temp(**my_dict)
#----等同于----#
temp(name="oldbirds",age=32)
```
