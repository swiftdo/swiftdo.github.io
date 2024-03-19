---
sitemap:
  exclude: false
  changefreq: hourly
title: "poetry 项目的依赖管理和打包工具"
date: 2024-03-19
tags:
  - python
  - poetry
---

## Poetry 是什麼？

Poetry 是一个 Python 打包和依赖管理工具，旨在简化 Python 包的创建、发布和依赖管理。与传统的 setuptools、pip 和 requirements.txt 的组合相比，Poetry 提供了一个统一和简化的工具和工作流程。


主要特点：

1. 声明式的依赖管理: 通过 pyproject.toml 文件，你可以明确地指定项目的依赖和版本。
2. 自动生成 lock 文件: 类似于 JavaScript 的 yarn 或 Ruby 的 Bundler，poetry 会生成一个 poetry.lock 文件，确保在所有环境中的依赖都是确定和一致的。
3. 虚拟环境管理: 默认情况下，poetry 为每个项目自动创建和管理一个虚拟环境。
4. 包构建和发布: 使用单个工具，你可以构建和发布你的包到 PyPI。
5. 完整的依赖解析: poetry 有一个强大的依赖解析算法，确保项目的所有依赖都是相容的，且没有版本冲突。
6. 管理 Python 版本: 你可以在 pyproject.toml 文件中指定 Python 的版本，确保所有开发者和环境使用同样版本的 Python。

## 名词解释：虚拟环境管理、模块管理、模块依赖管理

### 虚拟环境
虚拟环境是指内建的 venv 或 virtualenv 、 conda 以及其他用来创建与管理 Python 虚拟环境的工具，不同的虚拟环境各自独立，存放的位置、安装的模块也都不一样。

### 模块管理、模块依赖管理

**模块**是指虚拟环境中安装的第三方模块及其版本。大多数项目对第三方库的版本都是有特定要求，如果对旧版本的项目使用新版本的依赖，可能会报很奇怪的错误。

当安装第三方模块时，第三方模块可能会安装自己依赖的模块。当安装两个以上模块时，就可能出现第三方模块的依赖出现冲突。这种情况一般是依赖的版本冲突。这种就叫做**相关性依赖**

## pip 的不足

pip 是 python 内置的依赖管理工具，而它最大的不足在于 第三方模块的相关性依赖管理 的能力不足。尤其是在删除第三方模块是的依赖解析， 可以说是不会分析依赖。

案例：

1. 创建虚拟环境

   ```sh
   $ python3 -m venv venv
   $ venv/bin/activate
   ```

2. 安装 flask 并查看安装好的第三方模块（依赖）

   ```sh
   $ pip install flask
   $ pip list 
   Package      Version
   ------------ -------
   blinker      1.6.2
   click        8.1.3
   colorama     0.4.6
   Flask        2.3.2
   itsdangerous 2.1.2
   Jinja2       3.1.2
   MarkupSafe   2.1.2
   pip          22.3.1
   setuptools   65.5.0
   Werkzeug     2.3.6
   ```

3. 然后删除 flask 模块

   ```sh
   $ pip uninstall flask
   $ pip list 
   Package      Version
   ------------ -------
   blinker      1.6.2
   click        8.1.3
   colorama     0.4.6
   itsdangerous 2.1.2
   Jinja2       3.1.2
   MarkupSafe   2.1.2
   pip          22.3.1
   setuptools   65.5.0
   Werkzeug     2.3.6
   ```

    然后就会发现，只少了 flask 模块，而安装 flask 时顺带安装的依赖全部被留下了。也就是说 pip 安装模块是，相关的依赖都会被下载安装。但是在删除是，pip 就不会进行管理了，而是直接把指定的模块移除，留下一堆依赖。


还有一种情况就是，pip 手动移除依赖模块的潜在风险。flask 依赖了 click，他是一个协助制作命令行界面的工具。假设我们又要安装 black, 它是一个可以透过 cli 指令纸吸管格式化的工具，刚好也使用了 click 来做命令行功能。如果你移除 flask 时，同时把click 也跟着一并手动移除，那么 black 就会出问题————因为缺少click模块。

总而言之，直接 pip 手动移除模块存在下列两大疑虑，不建议轻易尝试：

1. 不确定想移除的模块
2. 及时确定模块，也无法确定这些模块是否还被其他模块所依赖

## pipenv vs poetry

因为 pip 存在这样的致命落点，所以很早就有相关的方案提出想要解決它，最知名的莫过于 Pipenv！

**Pipenv**:

1. 基于 Pip 和 Virtualenv: Pipenv 是构建在 Pip 和 Virtualenv 之上的工具，它利用了这两个 Python 社区中已经广泛使用的工具。
2. Pipfile 和 Pipfile.lock: Pipenv 使用 Pipfile 和 Pipfile.lock 作为项目的配置文件，用于定义项目的依赖关系和锁定依赖的版本。这些文件与 Pipenv 密切相关，并且与传统的 requirements.txt 文件相比提供了更加清晰和易于维护的方式来管理依赖。
3. 虚拟环境管理: Pipenv 自动管理项目的虚拟环境，确保每个项目都有自己的环境，并且可以防止依赖冲突。
4. 命令行接口: Pipenv 提供了一组命令行工具，用于安装依赖、管理虚拟环境、运行项目等。


**Poetry**:

1， 独立工具: Poetry 是一个独立的工具，它旨在提供更全面的 Python 项目管理解决方案。
2. pyproject.toml: Poetry 使用 pyproject.toml 文件作为项目的配置文件，这是 PEP 517 和 PEP 518 的一部分，旨在提供一种现代和标准化的项目配置方式。
3。 依赖管理和打包: Poetry 不仅仅用于管理项目的依赖关系，还可以用于构建和发布项目，使得整个项目的生命周期更加完整。
4. 内置的打包和发布功能: Poetry 提供了一种简单的方式来打包和发布项目，用户可以使用 Poetry 命令构建和发布项目到 PyPI 或其他包管理器。

本文结论就是「不要用 Pipenv」

## poetry 安装

MacOS下使用官网推荐方式安装，安装路径是：$HOME/.local/bin

```sh
curl -sSL https://install.python-poetry.org | python -
```

## 初始化 Poetry

为了方便解说，我们建立一个全新的demo，名为 `poetry-demo`。

指令很简单，但还是建议可以一步步跟着操作。

```sh
$ mkdir poetry-demo
$ cd poetry-demo
$ poetry init
```

然后会跳出来一连串的互动对话，用于创建项目的配置文件，这里我就直接全部一路回车，然后看一下生成的 pyproject.toml 配置文件：

```yaml
[tool.poetry]
name = "poetry-demo"
version = "0.1.0"
description = ""
authors = ["laijihua <oheroj@gmail.com>"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.12"


[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
```

此时项目的目录接口如下：

```sh
poetry-demo
└── pyproject.toml

0 directories, 1 file
```

## 管理虚拟环境

poetry 预设了很多自己的虚拟环境配置，这些配置可以通过 poetry config 进行修改。

当用户在执行 poetry add 等指令时，poetry 都会自动检查当下是否正在使用虚拟环境：

* 如果是，则会直接安装模块到当前的虚拟环境下
* 如果否，则会自动帮你创建一个新的虚拟环境，然后再安装模块

## 创建虚拟环境

```sh
$ poetry env use python3
Creating virtualenv poetry-demo-CwmQvoVm-py3.12 in /Users/oheroj/Library/Caches/pypoetry/virtualenvs
Using virtualenv: /Users/oheroj/Library/Caches/pypoetry/virtualenvs/poetry-demo-CwmQvoVm-py3.12
```

可以看出 Poetry 为我们建立了名为 poetry-demo-IEWSZKSE-py3.8的虚拟环境。

重点说明：

* `poetry env use python3` 是使用当前命令行下激活的 python3 解释器创建虚拟环境

* poetry 默认会将虚拟环境统一放在指定目录


对于 poetry 将虚拟环境统一放在指定路径下，这一点个人更偏向于 venv 的做法，也就是把虚拟环境放在项目目录下，方便用于观看依赖包的源码，在做项目部署的时候更方便一些。

所幸 poetry 提供了这样的选项。

## 在当前项目下创建虚拟环境

可以使用 poetry config --list 指令来查看 poetry 的几个主要设定

```sh
cache-dir = "/Users/oheroj/Library/Caches/pypoetry"
experimental.system-git-client = false
installer.max-workers = null
installer.modern-installation = true
installer.no-binary = null
installer.parallel = true
keyring.enabled = true
solver.lazy-wheel = true
virtualenvs.create = true
virtualenvs.in-project = null
virtualenvs.options.always-copy = false
virtualenvs.options.no-pip = false
virtualenvs.options.no-setuptools = false
virtualenvs.options.system-site-packages = false
virtualenvs.path = "{cache-dir}/virtualenvs"  # /Users/laijihua/Library/Caches/pypoetry/virtualenvs
virtualenvs.prefer-active-python = false
virtualenvs.prompt = "{project_name}-py{python_version}"
warnings.export = true
```
其中 virtualenvs.create = true 若改为 false，则可以停止 poetry 在检查不到虚拟环境是自动创建的行为模式，但是建议不要改动。


而 virtualenvs.in-project = false 就是我们要修改的目标，使用指令:

```sh
poetry config virtualenvs.in-project true
```

先把之前创建的虚拟环境删除

```sh
$ poetry env remove python3
Deleted virtualenv: /Users/oheroj/Library/Caches/pypoetry/virtualenvs/poetry-demo-CwmQvoVm-py3.12
```

重新创建虚拟环境，看一下差异：

```sh
$ poetry env use python3
Creating virtualenv poetry-demo in /Users/oheroj/Desktop/Dev/python/djangos/poetry-demo/.venv
Using virtualenv: /Users/oheroj/Desktop/Dev/python/djangos/poetry-demo/.venv
```

可以看出：

* 虚拟环境的路径改为项目的根目录下了
* 名称固定位 .venv

个人觉得这样的设定更加简洁。


## 启动与退出虚拟环境

在项目的根目录下使用`poetry shell`就可以进入到虚拟环境

```sh
$ poetry shell
Spawning shell within /Users/oheroj/Desktop/Dev/python/djangos/poetry-demo/.venv
```

poetry shell 指令会检查当前目录或上层目录是否存在 pyproject.toml 来确定需要启动的虚拟环境，所以如果不移动到项目的目录下，则会出现错误。

退出虚拟环境就更简单了，只要输入 exit 就可以了。

```
$ exit
```

## poetry 指令

poetry 是一个独立的命令行工具，他有自己的指令，需要花费额外的时间与精力学习，相较 pip 更加复杂，这个能是使用 poetry 的一道关卡。好在常用指令其实不超过 10 个，下面就来一一介绍。

### 安装模块

使用指令:

```sh
$ poetry add
poetry add django
Using version ^5.0.3 for django

Updating dependencies
Resolving dependencies... (0.1s)

Package operations: 3 installs, 0 updates, 0 removals

  - Installing asgiref (3.7.2)
  - Installing sqlparse (0.4.4)
  - Installing django (5.0.3)

Writing lock file
```

可以看到 poetry 会将所有的信息全部列出来，并且清楚的告知了新增了那些第三方模块。

此时项目中的`pyproject.toml`也发生了变化

```yaml
[tool.poetry.dependencies]
python = "^3.12"
django = "^5.0.3" # 新增部分
```

这里要说明，安装 flask ，则 pyproject.toml 只会新增 django = "^5.0.3" 这个字段的第三方模块，其余依赖不会出现在 toml 文件中。

这里是一个非常大的优点，以便区分那些是用户安装的第三方模块，那些是第三方模块一并安装的依赖。


#### poetry.lock 与更新顺序

除了更新 pyproject.toml ，此时项目中还会新增一个文件，名为 poetry.lock ，它实际上就相当于 pip 的 requirements.txt ，详细记录了所有安装的模块与版本。


当使用 poetry add 指令时，poetry 会自动依序帮你做完这三件事：

1. 更新 pyproject.toml。
2. 依照 pyproject.toml 的内容，更新 poetry.lock 。
3. 依照 poetry.lock 的内容，更新虚拟环境。

由此可见，poetry.lock 的内容是取决于 pyproject.toml ，但两者并不会自己连动，一定要基于特定指令才会进行同步与更新，`poetry add `就是一个典型案例。


此时项目目录结构如下：

```sh
poetry-demo
├── poetry.lock
└── pyproject.toml

0 directories, 2 files
```

#### poetry lock ：更新 poetry.lock

当你自行修改了 pyproject.toml 内容，比如变更特定模块的版本（这是有可能的，尤其在手动处理版本冲突的时候），此时 poetry.lock 的内容与 pyproject.toml 出现了脱钩，必须让它依照新的 pyproject.toml 内容更新、同步，使用指令：

```sh
$ poetry lock
```

如此一来，才能确保手动修改的内容，也更新到 poetry.lock 中，毕竟虚拟环境如果要重新建立，是基于 poetry.lock 的内容来安装模块，而非 pyproject.toml。

> poetry.lock 相当于 Poetry 的 requirements.txt 。

但要特别注意的是， `poetry lock` 指令，仅会更新 poetry.lock ，不会同时安装模块至虚拟环境。

因此，在执行完 poetry lock 指令后，必须再使用`poetry install` 来安装模块。否则就会出现 poetry.lock 和虚拟环境不一致的状况。

#### 新增模块至 dev-dependencies

有些模块，比如 pytest 、 black 等等，只会在开发环境中使用，产品的部署环境并不需要。

Poetry 允许你区分这两者，将上述的模块安装至 dev-dependencies 区块，方便让你轻松建立一份「不包含」 dev-dependencies 开发模块的安装清单。

在此以 Black 为例，安装方式如下：

```sh
$ poetry add black --group dev
```

结果的区别显示在`pyproject.toml`里：

```yaml
[tool.poetry.dependencies]
python = "^3.12"
django = "^5.0.3"


[tool.poetry.group.dev.dependencies]
black = "^24.3.0"
```

可以看到 black 被列在不同区块： `tool.poetry.dev-dependencies`。

### Poetry 更新模块

这个就很简单了，使用 poetry update 指令即可：

```sh
poetry update
```

上面指令会更新全部可能可以更新的模块，也可以仅指定特定模块，比如：

```sh
$ poetry update requests toml
```

### 列出全部模块清单

类似 pip list ，这里要使用`poetry show`。

特别提醒的是，这里的清单内容并不是来自于虚拟环境，这点和 pip 不同，而是来自于 poetry.lock 的内容。


你可能会想，来自于 poetry.lock 或虚拟环境，有差吗？两者不是应该要一致？

没错，理论上是，但也有不一致的时候，比如你使用了 pip install 指令安装模块，就不会记载在 poetry.lock 中，那 poetry show 自然也不会显示。


树状显示模块依赖层级

```sh
$ poetry show --tree
```

让主要模块与其依赖模块的关系与层次，一目了然。

而且很贴心的是，它也可以只显示指定模块的依赖层级，以 django 为例：

```sh
$ poetry show django --tree
```

### Poetry 移除模块

使用 poetry remove 指令。和 poetry add 一样，可以加上 -D 参数来移除置于开发区的模块。

而移除模块时的依赖解析能力，正是 Poetry 远优于 pip 的主要环节，因为 pip 没有。

```sh
$ poetry remove django
```

### 输出 Poetry 虚拟环境的 requirements.txt

理论上，全面改用 Poetry 后，项目中是不需要存在 requirements.txt ，因为它的角色已经完全被 poetry.lock 所取代。

但事实是，你可能还是需要它，甚至希望它随着 poetry.lock 的内容更新！至少对我而言就是如此，我在 Docker 部署环境中并不使用 Poetry，所以我需要一份完全等价于 poetry.lock 的 requirements.txt ，用于 Docker 部署。

```sh
poetry export -f requirements.txt -o requirements.txt --without-hashes
```

### 修改 poetry 镜像源

修改为清华镜像源

```sh
$ poetry source add tsinghua https://pypi.tuna.tsinghua.edu.cn/simple
```



































































