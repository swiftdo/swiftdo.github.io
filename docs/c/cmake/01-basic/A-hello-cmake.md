---
title: "hello cmake"
date: 2021-12-08
tags:
  - c/c++
  - cmake
sitemap:
  exclude: false
  changefreq: hourly
---

## 介绍

展示一个非常基本的 hello world 示例。

文件如下：

```shell
.
├── CMakeLists.txt
├── main.cpp
```

- CMakeLists.txt - 包含您希望运行的 CMake 命令
- main.cpp - 一个简单的“Hello World”cpp 文件。

## 概念

## CMakeLists.txt

CMakeLists.txt 存储所有`CMake`命令的文件。当`cmake`在文件夹中运行时，它将查找此文件，如果它不存在，则`cmake`将退出并显示错误。

## 指定最低 CMake 版本

使用 CMake 创建项目时，您可以指定支持的最低 CMake 版本。

```cmake
cmake_minimum_required(VERSION 3.5)
```

## Projects

CMake 构建可以包含项目名称，以便在使用多个项目时更轻松地引用某些变量。

```cmake
project (hello_cmake)
```

## 创建可执行文件

add_executable() 命令指定应从指定的源文件构建可执行文件，在此示例中为 main.cpp。

add_executable() 函数的第一个参数是要构建的可执行文件的名称，第二个参数是要编译的源文件列表。

```cmake
add_executable(hello_cmake main.cpp)
```

**提示**

有些人使用的一种简写方式是让项目名称和可执行文件名称相同。这允许您按如下方式指定 CMakeLists.txt，
```cmake
cmake_minimum_required(VERSION 2.6)
project (hello_cmake)
add_executable(${PROJECT_NAME} main.cpp)
```
在本例中，`project()` 函数将创建一个值为 `hello_cmake` 的变量 `${PROJECT_NAME}`。然后可以将其传递给 `add_executable()` 函数以输出“hello_cmake”可执行文件。

## 二进制目录

运行`cmake`命令的根或顶级文件夹称为`CMAKE_BINARY_DIR`，是所有二进制文件的根文件夹。 CMake 支持就地(in-place)和源外(out-of-source)构建和生成二进制文件。

### 就地编译(In-Place Build)
就地构建在与源代码相同的目录结构中生成所有临时构建文件。这意味着所有 Makefile 和目标文件都散布在您的正常代码目录下。要创建就地构建目标，请在根目录中运行 cmake 命令。例如：

```shell
A-hello-cmake$ cmake .
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
-- Build files have been written to: /home/matrim/workspace/cmake-examples/01-basic/A-hello-cmake

A-hello-cmake$ tree
.
├── CMakeCache.txt
├── CMakeFiles
│   ├── 2.8.12.2
│   │   ├── CMakeCCompiler.cmake
│   │   ├── CMakeCXXCompiler.cmake
│   │   ├── CMakeDetermineCompilerABI_C.bin
│   │   ├── CMakeDetermineCompilerABI_CXX.bin
│   │   ├── CMakeSystem.cmake
│   │   ├── CompilerIdC
│   │   │   ├── a.out
│   │   │   └── CMakeCCompilerId.c
│   │   └── CompilerIdCXX
│   │       ├── a.out
│   │       └── CMakeCXXCompilerId.cpp
│   ├── cmake.check_cache
│   ├── CMakeDirectoryInformation.cmake
│   ├── CMakeOutput.log
│   ├── CMakeTmp
│   ├── hello_cmake.dir
│   │   ├── build.make
│   │   ├── cmake_clean.cmake
│   │   ├── DependInfo.cmake
│   │   ├── depend.make
│   │   ├── flags.make
│   │   ├── link.txt
│   │   └── progress.make
│   ├── Makefile2
│   ├── Makefile.cmake
│   ├── progress.marks
│   └── TargetDirectories.txt
├── cmake_install.cmake
├── CMakeLists.txt
├── main.cpp
├── Makefile
```

### 源外编译(Out-of-Source Build)

外源构建允许您创建单个构建文件夹，该文件夹可以位于文件系统的任何位置。 所有临时构建和目标文件都位于此目录中，以保持源代码树干净。 要创建源外构建，请在构建文件夹中运行 cmake 命令，并将其指向包含根 CMakeLists.txt 文件的目录。 如果您想从头开始重新创建 cmake 环境，则使用外源构建，您只需删除构建目录，然后重新运行 cmake。


例如：

```shell
A-hello-cmake$ mkdir build

A-hello-cmake$ cd build/

matrim@freyr:~/workspace/cmake-examples/01-basic/A-hello-cmake/build$ cmake ..
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
-- Build files have been written to: /home/matrim/workspace/cmake-examples/01-basic/A-hello-cmake/build

A-hello-cmake/build$ cd ..

A-hello-cmake$ tree
.
├── build
│   ├── CMakeCache.txt
│   ├── CMakeFiles
│   │   ├── 2.8.12.2
│   │   │   ├── CMakeCCompiler.cmake
│   │   │   ├── CMakeCXXCompiler.cmake
│   │   │   ├── CMakeDetermineCompilerABI_C.bin
│   │   │   ├── CMakeDetermineCompilerABI_CXX.bin
│   │   │   ├── CMakeSystem.cmake
│   │   │   ├── CompilerIdC
│   │   │   │   ├── a.out
│   │   │   │   └── CMakeCCompilerId.c
│   │   │   └── CompilerIdCXX
│   │   │       ├── a.out
│   │   │       └── CMakeCXXCompilerId.cpp
│   │   ├── cmake.check_cache
│   │   ├── CMakeDirectoryInformation.cmake
│   │   ├── CMakeOutput.log
│   │   ├── CMakeTmp
│   │   ├── hello_cmake.dir
│   │   │   ├── build.make
│   │   │   ├── cmake_clean.cmake
│   │   │   ├── DependInfo.cmake
│   │   │   ├── depend.make
│   │   │   ├── flags.make
│   │   │   ├── link.txt
│   │   │   └── progress.make
│   │   ├── Makefile2
│   │   ├── Makefile.cmake
│   │   ├── progress.marks
│   │   └── TargetDirectories.txt
│   ├── cmake_install.cmake
│   └── Makefile
├── CMakeLists.txt
├── main.cpp
```

## 构建示例

> 代码：[01-basic/A-hello-cmake](https://github.com/ttroy50/cmake-examples/tree/master/01-basic/A-hello-cmake)

以下是构建此示例的示例输出。

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
-- Build files have been written to: /workspace/cmake-examples/01-basic/hello_cmake/build

$ make
Scanning dependencies of target hello_cmake
[100%] Building CXX object CMakeFiles/hello_cmake.dir/hello_cmake.cpp.o
Linking CXX executable hello_cmake
[100%] Built target hello_cmake

$ ./hello_cmake
Hello CMake!
```
