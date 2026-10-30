---
title: Flutter 提交日志搜集
description: "公司要求每周都要写周报，周报的大体内容就是你本周做的事情，暂时不需要所思所想所感(质量要求不高)。通常都是自己从 gitlab 的操作面板筛选出自己本周提交的日志，然后每个提交 title 复制一份。"
date: 2021-01-20T00:00:00.000Z
tags:
  - flutter
createTime: 2024/08/02 09:19:27
permalink: /flutter/t9-logs/
---

公司要求每周都要写周报，周报的大体内容就是你本周做的事情，暂时不需要所思所想所感(质量要求不高)。通常都是自己从 gitlab 的操作面板筛选出自己本周提交的日志，然后每个提交 title 复制一份。然后我傻傻的把这件事干了 2 年多了，虽然觉得应该有更便捷的方式，但是还是屈服自己懒惰。直到有那么一天，上头要求 ci 打出的包，要附带发版日志😱。

```
总有那么一天，该来还是会来，只不过是时间罢了
```

本文就是在这个需求威压中产出，由于大大解放双手，所以将这个思路整理成文，一起努力成为一名偷懒的程序员。

## 从日志规范说起

个人通常在提交日志的时候，会在文本中添加前缀，且有以下规范：

* Feat： 新功能（feature）
* Fix： 修补bug
* Docs： 文档（documentation）
* Style： 格式（不影响代码运行的变动）
* Refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* Test： 增加测试
* Chore： 构建过程或辅助工具的变动

上面的规范是是某个东家学到的，起初觉得添加前缀规范，不过是快速知道提交的大致意图。所以在某些小公司，这个优点还是无法让一个团队从意识上遵守（如果不是技术负责人拍板），总有一两个人，或者几个提交突兀出来，破窗理论很快就得到验证。对于毫无决定权的默默无闻的你只能走自己的路了。

以前看过一本书，里面有大致的说辞：对于戒烟的人，要让他戒烟，减量、控制吸食次数类似方法，戒烟效果不理想。更好的办法是让他意识到吸烟的危害，危害的认识越深，戒烟的成功率越高。

> 如果一个规则无法普及，很大原因是这个规则的所带来的影响无法让人深刻意识到。
> 效果越好，驱动力越强。

## 日志实操

查看提交日志的命令：

```sh
$ git log
commit f35f45c654e56a1d55aaca24e0e3fd3b9577bcc0 (HEAD -> master, origin/master, origin/HEAD)
Author: jihua <1164258202@qq.com>
Date:   Fri Jan 22 23:03:05 2021 +0800

    Feat: 添加详情
....
```

可能对这个命令的认识，我们就到此为止了。但通过`help`命令我们知道它不止于此。

```sh
git log --help
```

`git log` 的功能就是浏览历史记录。可以通过许多不同的参数传递给 `git log` 来更改日志输出，这些功能可以概括以下两类：

* 格式化每个提交的显示方式
* 过滤输出中包括哪些提交

## 格式化

### 将每次提交压缩为一行

它仅显示提交ID和提交消息的第一行，这对于**获得项目的高级概述非常有用**。
 
```sh
$ git log --oneline
f35f45c (HEAD -> master, origin/master, origin/HEAD) Feat: 添加详情
199a0ce (tag: state) Feat: 状态不同步问题
6e2c7d4 Feat: 添加文件
```

### 显示指向每个提交的所有引用

很多时候了解每个提交与哪个分支或标签相关联很有用，使你**可以更全面地了解存储库的逻辑结构**。

```sh
$ git log --oneline --decorate
0e25143 (HEAD, master) Merge branch 'feature'
ad8621a (feature) Fix: fix a bug in the feature
16b36c6 Feat: Add a new feature
23ad9ad (tag: v0.9) Feat: Add the initial code base
```

### 每次提交时显示差异

`--stat` 选项显示每次提交更改的每个文件的插入和删除次数（请注意，修改一行表示为1次插入和1次删除），这使你了解可以在何处找到每个提交的更改。

```sh
$ git log --stat
commit f2a238924e89ca1d4947662928218a06d39068c3
Author: John <john@example.com>
Date: Fri Jun 25 17:30:28 2014 -0500
Add a new feature
hello.py | 105 ++++++++++++++++++++++++-----------------
1 file changed, 67 insertion(+), 38 deletions(-)
```

`-p` 查看每个提交所引入的实际更改。

### 简短日志

```sh
$ git shortlog
Mary (2):
Fix a bug in the feature
Fix a serious security hole in our framework
John (3):
Add the initial code base
Add a new feature
Merge branch 'feature'
```

它按作者对每个提交进行分组，并显示每个提交消息的第一行。 这是查看谁在做什么的一种简单方法。

### 自定义格式输出

可以使用 `--pretty = format：“<string>”`选项。这样可以使用 printf 样式的占位符来显示每个提交。

```sh
$ git log --pretty=format:"%cn:%s(%cd)"
jihua:Feat: 添加详情(Fri Jan 22 23:03:05 2021 +0800)
jihua:Feat: 状态不同步问题(Sun Jan 17 22:19:48 2021 +0800)
jihua:Feat: 添加文件(Sun Jan 17 20:30:07 2021 +0800)
jihua:Feat: 修改(Sun Jan 17 16:43:58 2021 +0800)
jihua:Feat: 修改(Wed Jan 13 23:06:06 2021 +0800)
```

## 过滤

### 限制显示的提交数量

通过 `-<n>` 选项来限制 git log 的输出数量

以下命令将仅显示3个最新提交

```sh
$ git log -3
```

### 查找特定时间范围内的提交

可以使用`--after`或`--before`标志来按日期过滤提交

```sh
$ git log --after="2021-1-1"
```

还可以传递相对引用，例如“ 1周前”和“昨天”：

```sh
$ git log --after="yesterday"
```

要搜索在两个日期之间创建的提交，可以同时提供-之前和-之后的日期

```sh
$ git log --after="2021-1-1" --before="2021-1-20"
```

### 仅查找由特定用户创建的提交

```sh
$ git log --author="lai"
```

还可以使用正则表达式来创建更复杂的搜索，以下命令搜索Mary或John的提交

```sh
$ git log --author="John\|Mary"
```

### 按文件

要显示与文件相关的历史记录，传递文件路径即可。 例如，以下代码返回所有影响 foo.py 或 bar.py 文件的提交

```sh
$ git log -- foo.py bar.py
```

### 按范围

以将一系列提交提交给 git log，以仅显示该范围内包含的提交。当你使用分支引用作为参数时，此命令特别有用。

```sh
$ git log master..feature 
```

以上是对 git log 一些参数的使用介绍，还有更多参数的使用，可以参考文档 [查看提交历史](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)

## 实战生成周报

功能需求：获取用户lai在本周的代码日志到文件 log.txt 中，不包括 merge 的信息，输出格式如下：

```
* Feat: 添加详情(2021-01-22)
```

那么要完成这个功能，我们要做的有：

* 获取到 lai 的日志
* 获取到本周的日志
* 自定义日志的输出
* 去除 merge 信息
* 输出到文件 log.txt 中

所以，整个命令：

```sh
$ git log --no-merges --author=lai --since=1.weeks --pretty=format:'* %s(%ad)' --date=short > ~/Desktop/log.txt
```

`log.txt` 的内容类似：

```sh
* Chore: 版本升级到 1.5.0(2021-01-23)
* Chore: 自动化打包脚本优化(2021-01-23)
* Chore: 脚本优化, 发版的时候强制设置环境，防止受其他分支改动影响(2021-01-23)
* Feat: h5 接口对接(2021-01-22)
* Fix: 解决数组越界问题(2021-01-22)
* Doct: README 文档修改(2021-01-22)
* Refactor：重构 WebController (2021-01-22)
```

那么这个功能就做完成了。但你以为就结束了么？

## 更进一步

对于文章开头提到的提交规范，我们说对于规范的益处认识不足。当我们将日志搜集到 `log.txt` 中，如果就怎么给上头审阅的，可能会被打回来，因为不能一眼知道，哪些是新增，哪些是修改，哪些是优化。所以我们必须给日志进行整理，不能就这么直白的输出。希望看到：

```sh
## 新增
* h5 接口对接(2021-01-22)
## bug
* 解决数组越界问题(2021-01-22)
## 优化
* 重构 WebController (2021-01-22)
## 文档
* README 文档修改(2021-01-22)
## 其他
* 版本升级到 1.5.0(2021-01-23)
* 自动化打包脚本优化(2021-01-23)
* 脚本优化, 发版的时候强制设置环境，防止受其他分支改动影响(2021-01-23)
```

那么本质上就是对日志进行归类：

* Feat => 新增
* Fix => bug
* Refactor => 优化
* Doct => 文档
* Chore => 其他

可以直接通过规范的前缀将日志进行分类。这就是日志规范化的另一个好处，可以统计提交。

```py
import os
import json
from pathlib import Path
import sys
import getopt

argv = sys.argv[1:]

name = 'product' # preview | product (预览模式和发版模式)
 
try:
    opts, args = getopt.getopt(argv, "m:")  # 短选项模式
except:
    print("错误，不支持m:")

for opt, arg in opts:
    if opt in ['-m']:
        name = arg


## 最开始收集日志的 commitid
start_commit_id = "xxxxw454344346"

# 是否是上传到线上
# 如果是上传到线上，则日志从 start_commit_id 开始获取
# 如果是日常发版，则日志从当前版本的上一次打包的 commit 开始
is_online_release = name == 'product'

history_commit_file = "%s/package-logs.json" % str(Path.home())

def init_history_commit_file():
    if not os.path.exists(history_commit_file):
        with open(history_commit_file, 'w') as f:
            json.dump({"name": "version logs"}, f)
    else:
        pass

def write_note(content):
    with open('release-note.txt', 'w') as f:
        content = f.write(content)

def git_shell(git_command):
    try:
        return os.popen(git_command).read().strip()
    except:
        return None

def get_history_commit_id(branch):
    result = {}
    with open(history_commit_file, 'r') as f:
        result = json.load(f)
    return result.get(branch, None)


def save_history_commit(branch, commit_id):
    result = {}
    with open(history_commit_file, 'r') as f:
        result = json.load(f)
    
    with open(history_commit_file, 'w') as ff:
        result[branch] = commit_id
        json.dump(result, ff)
        
def pretty_log(logs):
    # Feat => 新增
    # Fix => bug
    # Refactor => 优化
    # Doct => 文档
    # Chore => 其他
    pass

init_history_commit_file()

# 获取当前分支名
git_branch = git_shell('git rev-parse --abbrev-ref HEAD')

if not is_online_release:
    history_commit_id = get_history_commit_id(git_branch)
    if history_commit_id:
        start_commit_id = history_commit_id


# 当前分支的最后一个提交ID
last_commit_id = git_shell('git rev-parse HEAD')

log_cmd = "git log %s..%s --date=short --no-merges --pretty=" % (start_commit_id, last_commit_id) + f"format:'* %s(%an)'"
git_logs = git_shell(log_cmd)


# 获取到日志后，需要对日志进行归类，便于阅读
git_logs = pretty_log(git_logs)

# 写入日志
write_note(git_logs)

if not is_online_release:
    save_history_commit(git_branch, last_commit_id)


print('✅ 日志生成完成')
```

`pretty_log` 并没有提供实现代码，读者可以自己填充🤗。


```sh
努力成为一名爱偷懒的程序员💪，珍爱生命
```