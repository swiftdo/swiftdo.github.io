---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 模块"
date: 2022-03-19
tags:
  - python
---

使用函数的优点之一是可**将代码块与主程序分离**。通过给函数指定描述性名称，可让主程序容易理解得多。

可以更进一步，将函数存储在称为**模块**的独立文件中，再将模块到主程序中。**import**语句允许在当前运行的程序文件中使用模块中的代码。

通过将函数存储在独立的文件中：
* 能够有逻辑地组织你的 Python 代码段；
* **可隐藏程序代码的细节**，将重点放在程序的高层逻辑上；
* 让在众多不同的程序中重用函数，将函数存储在独立文件中后，**可与其他程序员共享这些文件而不是整个程序**；
* 把相关的代码分配到一个模块里能让你的代码更好用，更易懂。
* ......


## 创建模块

> 模块(Module)，是一个 Python 文件，以 .py 结尾，包含了 Python 对象定义和Python语句。

下例是个简单的模块`support.py`：

```py
def print_func(par):
   print(f"Hello : {par}")
```

## 导入整个模块

在 support.py 所在的目录中创建一个名为`main.py`的文件。

```py
import support

support.print_func('oldbirds')
```

`import support` 让 Python 打开文件 `support.py`，并将其中所有函数都复制到这个程序中。你看不到复制的代码，因为在这个程序即将运行时，Python 在幕后复制了这些代码。

要调用被导入模块中的函数，可指定被导入模块的名称 `support` 和函数名 `print_func`，并用`.`分割。

## 导入特定的函数

```py
from support import print_func

print_func('oldbirds')
```

使用这种语法时，调用函数无需使用`.`，只需指定其名称即可。

## 使用 as 给函数指定别名

如果要导入函数的名称可能与程序中现有的名称冲突，或者函数的名称过长，可指定简短而独一无二的别名。

```py
from support import print_func as pf

pf('oldbirds')
```

## 使用 as 给模块指定别名

通过给模块指定简短的别名，可以更轻松的调用模块中的函数，更为简洁。

```py
import support as s
s.print_func('oldbirds')
```

这样不仅代码更为简洁，还让你不用再关注模块名，只专注于描述性的函数名。这些函数明确明确指出了函数的功能，对于理解代码而言，比模块名更重要。

## 导入模块中的所有函数

```py
from support import *

print_func('oldbirds')
```








