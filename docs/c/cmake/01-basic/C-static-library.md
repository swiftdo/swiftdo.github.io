---
title: "static library"
date: 2021-12-08
tags:
  - c/c++
  - cmake
sitemap:
  exclude: false
  changefreq: hourly
---

## 介绍

显示一个 hello world 示例，它首先创建并链接一个静态库。这是一个简化的示例，显示了同一文件夹中的库和二进制文件。

本教程中的文件如下：

```shell
$ tree
.
├── CMakeLists.txt
├── include
│   └── static
│       └── Hello.h
└── src
    ├── Hello.cpp
    └── main.cpp
```

* CMakeLists.txt - 包含您希望运行的 CMake 命令
* include/static/Hello.h - 要包含的头文件
* src/Hello.cpp - 要编译的源文件
* src/main.cpp - 带有 main 的源文件


## 概念

### 添加一个静态库

add_library() 函数用于从一些源文件创建一个库。这称为如下：

```cmake
add_library(hello_library STATIC
    src/Hello.cpp
)
```

这将用于创建一个名为 libhello_library.a 的静态库，其中包含 add_library 调用中的源。

### 填充 include 目录

在此示例中，我们使用 target_include_directories() 函数将目录包含在库中，并将范围设置为 PUBLIC。

```cmake
target_include_directories(hello_library
    PUBLIC
        ${PROJECT_SOURCE_DIR}/include
)
```

这将导致 include 目录在以下地方使用： 

* 编译库时
*  编译链接库的任何其他目标时。

范围的含义是：

* PRIVATE - 目录被添加到这个目标的 include 目录
* INTERFACE - 该目录被添加到链接该库的任何目标的 include 目录中。
* PUBLIC - 如上所述，它包含在此库以及链接此库的任何目标中。

**Tip**

对于公共 headers，将include文件夹与子目录“命名空间”通常是个好主意。

传递给 target_include_directories 的目录将是包含目录树的根目录，并且您的 C++ 文件应包含从那里到头文件的路径。

对于这个例子，你可以看到我们是这样做的

```c
#include "static/Hello.h"
```

使用此方法意味着当您在项目中使用多个库时，头文件名冲突的可能性较小。

## 链接库

创建将使用您的库的可执行文件时，您必须告诉编译器有关该库的信息。这可以使用 target_link_libraries() 函数来完成。

```cmake
add_executable(hello_binary
    src/main.cpp
)

target_link_libraries( hello_binary
    PRIVATE
        hello_library
)
```

这告诉 CMake 在链接期间将 hello_library 链接到 hello_binary 可执行文件。它还将从链接库目标传播具有 PUBLIC 或 INTERFACE 范围的任何包含目录。


编译器调用的一个例子是

```shell
/usr/bin/c++ CMakeFiles/hello_binary.dir/src/main.cpp.o -o hello_binary -rdynamic libhello_library.a
```

## 构建示例

> 源码：[C-static-library](https://github.com/ttroy50/cmake-examples/tree/master/01-basic/C-static-library)

```shell
$ mkdir build

$ cd build

$ cmake ..
-- The C compiler identification is GNU 4.8.4
-- The CXX compiler identification is GNU 4.8.4
-- Check for working C compiler: /usr/bin/cc
-- Check for working C compiler: /usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++
-- Check for working CXX compiler: /usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Configuring done
-- Generating done
-- Build files have been written to: /home/matrim/workspace/cmake-examples/01-basic/C-static-library/build

$ make
Scanning dependencies of target hello_library
[ 50%] Building CXX object CMakeFiles/hello_library.dir/src/Hello.cpp.o
Linking CXX static library libhello_library.a
[ 50%] Built target hello_library
Scanning dependencies of target hello_binary
[100%] Building CXX object CMakeFiles/hello_binary.dir/src/main.cpp.o
Linking CXX executable hello_binary
[100%] Built target hello_binary

$ ls
CMakeCache.txt  CMakeFiles  cmake_install.cmake  hello_binary  libhello_library.a  Makefile

$ ./hello_binary
Hello Static Library!
```