---
title: "hello headers"
date: 2021-12-08
tags:
  - c/c++
  - cmake
sitemap:
  exclude: false
  changefreq: hourly
---

## 介绍

显示一个 hello world 示例，该示例对源文件和包含文件使用不同的文件夹。

本教程中的文件包括：

```shell
B-hello-headers$ tree
.
├── CMakeLists.txt
├── include
│   └── Hello.h
└── src
    ├── Hello.cpp
    └── main.cpp
```

- CMakeLists.txt - 包含您希望运行的 CMake 命令。
- include/Hello.h - 要包含的头文件。
- src/Hello.cpp - 要编译的源文件。
- src/main.cpp - 带有 main 的源文件。

## 概念

CMake 语法指定了许多变量，可用于帮助在您的项目或源代码树中找到有用的目录。其中一些包括：

| 变量 | 介绍 |
|----|----|
|  CMAKE_SOURCE_DIR  |  工程顶层目录。  |
|  CMAKE_CURRENT_SOURCE_DIR  |  当前处理的CMakeLists.txt所在的路径 |
|  PROJECT_SOURCE_DIR  |  CMake源码地址，即cmake命令后指定的地址  |
|  CMAKE_BINARY_DIR  |  根二进制/构建目录。这是您运行 cmake 命令的目录。  |
|  CMAKE_CURRENT_BINARY_DIR  |  target编译目录  |
|  PROJECT_BINARY_DIR  |  运行cmake命令的目录,通常是PROJECT_SOURCE_DIR下的build目录  |

## 源文件变量

创建一个包含源文件的变量可以让您更清楚地了解这些文件并轻松地将它们添加到多个命令中，例如 add_executable() 函数。

```cmake
# Create a sources variable with a link to all cpp files to compile
set(SOURCES
    src/Hello.cpp
    src/main.cpp
)

add_executable(${PROJECT_NAME} ${SOURCES})
```

**Note**: 

在 SOURCES 变量中设置特定文件名的另一种方法是使用 GLOB 命令通过通配符模式匹配来查找文件。

```cmake
file(GLOB SOURCES "src/*.cpp")
```

**Tip**

对于现代 CMake，不建议对源使用变量。相反，通常直接在 add_xxx 函数中声明源.

这对于 glob 命令尤其重要，如果您添加新的源文件，它可能不会总是得到正确的结果。

## 包含目录

当您有不同的包含文件夹时，您可以使用 target_include_directories() 函数让您的编译器知道它们。编译此目标时，这会将这些目录添加到带有 -I 标志的编译器中，例如`-I/directory/path`:

```cmake
target_include_directories(target
    PRIVATE
        ${PROJECT_SOURCE_DIR}/include
)
```

PRIVATE 标识符指定包含的范围。这对库很重要，将在下一个示例中进行说明。

## 构建示例

> 源代码：[B-hello-headers/](https://github.com/ttroy50/cmake-examples/blob/master/01-basic/B-hello-headers/)

构建此示例的标准输出如下所示。

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
-- Build files have been written to: /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build

$ make
Scanning dependencies of target hello_headers
[ 50%] Building CXX object CMakeFiles/hello_headers.dir/src/Hello.cpp.o
[100%] Building CXX object CMakeFiles/hello_headers.dir/src/main.cpp.o
Linking CXX executable hello_headers
[100%] Built target hello_headers

$ ./hello_headers
Hello Headers!
```

## 详细输出

在前面的示例中，运行 make 命令时，输出仅显示构建的状态。要查看用于调试的完整输出，您可以在运行 make 时添加 VERBOSE=1 标志。

VERBOSE 输出如下所示，对输出的检查显示添加到 c++ 编译器命令的包含目录。

```shell
$ make clean

$ make VERBOSE=1
/usr/bin/cmake -H/home/matrim/workspace/cmake-examples/01-basic/hello_headers -B/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build --check-build-system CMakeFiles/Makefile.cmake 0
/usr/bin/cmake -E cmake_progress_start /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles/progress.marks
make -f CMakeFiles/Makefile2 all
make[1]: Entering directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'
make -f CMakeFiles/hello_headers.dir/build.make CMakeFiles/hello_headers.dir/depend
make[2]: Entering directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'
cd /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build && /usr/bin/cmake -E cmake_depends "Unix Makefiles" /home/matrim/workspace/cmake-examples/01-basic/hello_headers /home/matrim/workspace/cmake-examples/01-basic/hello_headers /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles/hello_headers.dir/DependInfo.cmake --color=
make[2]: Leaving directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'
make -f CMakeFiles/hello_headers.dir/build.make CMakeFiles/hello_headers.dir/build
make[2]: Entering directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'
/usr/bin/cmake -E cmake_progress_report /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles 1
[ 50%] Building CXX object CMakeFiles/hello_headers.dir/src/Hello.cpp.o
/usr/bin/c++    -I/home/matrim/workspace/cmake-examples/01-basic/hello_headers/include    -o CMakeFiles/hello_headers.dir/src/Hello.cpp.o -c /home/matrim/workspace/cmake-examples/01-basic/hello_headers/src/Hello.cpp
/usr/bin/cmake -E cmake_progress_report /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles 2
[100%] Building CXX object CMakeFiles/hello_headers.dir/src/main.cpp.o
/usr/bin/c++    -I/home/matrim/workspace/cmake-examples/01-basic/hello_headers/include    -o CMakeFiles/hello_headers.dir/src/main.cpp.o -c /home/matrim/workspace/cmake-examples/01-basic/hello_headers/src/main.cpp
Linking CXX executable hello_headers
/usr/bin/cmake -E cmake_link_script CMakeFiles/hello_headers.dir/link.txt --verbose=1
/usr/bin/c++       CMakeFiles/hello_headers.dir/src/Hello.cpp.o CMakeFiles/hello_headers.dir/src/main.cpp.o  -o hello_headers -rdynamic
make[2]: Leaving directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'
/usr/bin/cmake -E cmake_progress_report /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles  1 2
[100%] Built target hello_headers
make[1]: Leaving directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'
/usr/bin/cmake -E cmake_progress_start /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles 0
```

