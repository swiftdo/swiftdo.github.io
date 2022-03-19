---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 工程化环境配置"
date: 2022-03-19
tags:
  - python
---

为了更加快速的专业化创建一个 Python 工程，简要记录下操作过程：

- 创建目录
- 设置 Python 版本
- 添加依赖
- 导出依赖

我们就举例创建个 ebook-mini-py 工程。

## 创建目录

```shell
$ mkdir ebook-mini-py
```

### 设置 Python 版本

用于创建和管理虚拟环境的模块称为 venv。venv 通常会安装你可用的最新版本的 Python。如果您的系统上有多个版本的 Python，您可以通过运行 python3 或您想要的任何版本来选择特定的 Python 版本。

```shell
$ python3 -m venv tutorial-env
```

启动这个虚拟环境的方法：

```shell
$ source ./tutorial-env/bin/activate
```

关闭虚拟环境有两个方法：

- 要么直接关掉这个 termianl
- 要么用这个命令：`deactivate`

### 添加依赖

```shell
pip install flask
```

安装了 Flask 之后，我们发现除了 Flask 他还多引入了好多个间接依赖。

```shell
$ pip list
Package      Version
------------ -------------------
certifi      2020.6.20
click        7.1.2
Flask        1.1.2
itsdangerous 1.1.0
Jinja2       2.11.3
MarkupSafe   1.1.1
pip          19.3.1
setuptools   44.0.0.post20200106
Werkzeug     1.0.1
wheel        0.36.2
```

### 导出依赖

安装了 Flask 之后，我们发现除了 Flask 他还多引入了好多个间接依赖。

如果想要将这个信息记录下来，我们可以用 pip freeze 命令，记在 `requirements.txt` 中（一个约定俗成的名字）。

```shell
$ pip freeze > requirements.txt
$ cat requirements.txt
certifi==2020.6.20
click==7.1.2
Flask==1.1.2
itsdangerous==1.1.0
Jinja2==2.11.3
MarkupSafe==1.1.1
Werkzeug==1.0.1
```

好了，记下这个文件，以后我们如果需要在一个新的 Python 环境中引入当前的依赖，只需要使用：

```shell
$ pip install -r requirements.txt
```

## virtualenv、pyvenv、pyenv、pyenv virtualenv 的区别

Python 一个不友好的地方，就是版本管理。例如有的项目使用 Python 2.x，有的项目使用 Python 3.x，而二者之间就有很多不兼容，并且一些库只支持 Python 2.x，不支持 Python 3.x。另外，同一个库，有的项目需要用到高版本，有的项目需要用到低版本，这也会造成版本管理上的不兼容

为此，出现了很多版本管理工具，例如标题提到的 virtualenv、pyvenv、pyenv、pyenv virtualenv 等等（还有类似 pipenv 等工具，没使用过就不讨论了），主要就是用来解决上面提到的问题的。这几个工具名字看起来有点类似，导致有些人一直没弄清楚。

### virtualenv

virtualenv 所要解决的是同一个库不同版本共存的兼容问题。例如项目 A 需要用到 requests 的 1.0 版本，项目 B 需要用到 requests 的 2.0 版本。如果不使用工具的话，一台机器只能安装其中一个版本，无法满足两个项目的需求。

virtualenv 的解决方案是为每个项目创建一个独立的虚拟环境，在每个虚拟环境中安装的库，对其他虚拟环境完全无影响。所以就可以在一台机器的不同虚拟环境中分别安装同一个库的不同版本。

```shell
# 安装 virtualenv
pip install virtualenv
# 创建虚拟环境 myenv
virtualenv /path/to/myenv
# 切换到虚拟环境 myenv，此时命令提示符前会有 (myenv) 提示符
cd /path/to/myenv/ && source bin/activate
# 安装库，安装到 /path/to/myenv/lib 中，不会与其他虚拟环境冲突
pip install requests
# 执行 python 相关命令
python demo.py
# 退出虚拟环境
deactivate
```

### pyvenv

pyvenv 与 virtualenv 功能和用法类似。不同点在于：

- pyvenv 只支持 Python 3.3 及更高版本，而 virtualenv 同时支持 Python 2.x 和 Python 3.x；
- pyvenv 是 Python 3.x 自带的工具，不需要安装，而 virtualenv 是第三方工具，需要安装。

pyvenv 实际上是 Python 3.x 的一个模块 venv，等价于 python -m venv。

```shell
# 创建虚拟环境 myenv
pyvenv /path/to/myenv
# 或者
python -m venv /path/to/myenv
# 切换到虚拟环境 myenv，此时命令提示符前会有 (myenv) 提示符
cd /path/to/myenv/ && source bin/activate
# 安装库，安装到 /path/to/myenv/lib 中，不会与其他虚拟环境冲突
pip install requests
# 执行 python 相关命令
python demo.py
# 退出虚拟环境
deactivate
```

### pyenv

与上述两个工具不同，pyenv 不是用来管理同一个库的多个版本，而是用来管理一台机器上的多个 Python 版本。主要解决开发中有的项目需要用 Python 2.x，有的项目需要用 Python 3.x 的场景。

网上有很多教程，讲如何在一台机器上同时安装 2.x 和 3.x 两个版本，使用时分别用 python、python3 区分。但是这种方法有几个明显的缺点：

- 安装麻烦：源码手动安装，可能需要手动指定安装路径，创建软连接等；
- 2.x 和 3.x 分别只能安装一个版本：例如不能同时安装 2.6 和 2.7；
- 需要人工确定项目使用的 Python 版本，指定错误会导致运行报错。

pyenv 支持在一台机器上同时安装 cpython（平时说的 Python）、jython、anaconda、micropython、miniconda、pypy、stackless 等等的任意当前可用版本，例如可以同时安装 Python 2.6.9、2.7.15、3.6.6、3.8-dev 几个版本。

而且 pyenv 使用了垫片的原理，可以做到进入项目目录自动选择 Python 版本

```shell
# 安装 pyenv（推荐方法，此脚本会自动安装若干插件，包括下文即将提到的 pyenv virtualenv）
curl https://pyenv.run | bash
# 查看所有支持安装的 Python 版本
pyenv install -l
# 安装 Python 2.7.17 和 3.8.2
pyenv install 2.7.17
pyenv install 3.8.2
# 指定全局使用 Python 2.7.17
pyenv global 2.7.17
# 指定 myproject 使用 Python 3.8.2
cd myproject
pyenv local 3.8.2
# 在当前 shell 中临时使用 Python 3.8.2
pyenv shell 3.8.2
```

上面例子中在在 myproject 项目目录设置了 pyenv local 3.8.2 之后，后续进入该目录及其子目录时，所执行的 python 命令就是 3.8.2 版本，不需手动执行 activate；离开该目录之后，执行的的 python 命令就是系统安装的或者 pyenv global 指定的版本，不需要手动执行 deactivate。

### pyenv virtualenv

前面提到 pyenv 要解决的是多个 Python 的版本管理问题，virtualenv 要解决的是同一个库的版本管理问题。但如果两个问题都需要解决呢？分别使用不同工具就很麻烦了，而且容易有冲突。为此，pyenv 引入了了 virtualenv 插件，可以在 pyenv 中解决同一个库的版本管理问题。

通过 pyenv virtualenv 命令，可以与 virtualenv 类似的创建、使用虚拟环境。但由于 pyenv 的垫片功能，使用虚拟环境跟使用 Python 版本的体验一样，不需要手动执行 activate 和 deactivate，只要进入目录即生效，离开目录即失效。

pyenv virtualenv 的用法和 pyenv 类似（使用上述安装 pyenv 方法会自动安装 virtualenv 插件）：

```shell
# 分别安装基于 Python 2.7.17 和 Python 3.8.2 的虚拟环境
pyenv virtualenv 2.7.17 venv2
pyenv virtualenv 3.8.2 venv3
# 指定全局使用虚拟环境 venv2
pyenv global venv2
# 指定 myproject 使用虚拟环境 venv3
cd myproject
pyenv local venv3
# 在当前 shell 中临时使用虚拟环境 venv3
pyenv shell venv3
```
