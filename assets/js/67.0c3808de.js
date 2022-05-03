(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{747:function(a,e,t){"use strict";t.r(e);var s=t(8),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("显示一个 hello world 示例，它首先创建并链接一个静态库。这是一个简化的示例，显示了同一文件夹中的库和二进制文件。")]),a._v(" "),t("p",[a._v("本教程中的文件如下：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ tree\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n├── CMakeLists.txt\n├── include\n│   └── static\n│       └── Hello.h\n└── src\n    ├── Hello.cpp\n    └── main.cpp\n")])])]),t("ul",[t("li",[a._v("CMakeLists.txt - 包含您希望运行的 CMake 命令")]),a._v(" "),t("li",[a._v("include/static/Hello.h - 要包含的头文件")]),a._v(" "),t("li",[a._v("src/Hello.cpp - 要编译的源文件")]),a._v(" "),t("li",[a._v("src/main.cpp - 带有 main 的源文件")])]),a._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("h3",{attrs:{id:"添加一个静态库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加一个静态库"}},[a._v("#")]),a._v(" 添加一个静态库")]),a._v(" "),t("p",[a._v("add_library() 函数用于从一些源文件创建一个库。这称为如下：")]),a._v(" "),t("div",{staticClass:"language-cmake extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("add_library")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("hello_library "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("STATIC")]),a._v("\n    src/Hello.cpp\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("这将用于创建一个名为 libhello_library.a 的静态库，其中包含 add_library 调用中的源。")]),a._v(" "),t("h3",{attrs:{id:"填充-include-目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#填充-include-目录"}},[a._v("#")]),a._v(" 填充 include 目录")]),a._v(" "),t("p",[a._v("在此示例中，我们使用 target_include_directories() 函数将目录包含在库中，并将范围设置为 PUBLIC。")]),a._v(" "),t("div",{staticClass:"language-cmake extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("target_include_directories")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("hello_library\n    "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PUBLIC")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PROJECT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("/include\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("这将导致 include 目录在以下地方使用：")]),a._v(" "),t("ul",[t("li",[a._v("编译库时")]),a._v(" "),t("li",[a._v("编译链接库的任何其他目标时。")])]),a._v(" "),t("p",[a._v("范围的含义是：")]),a._v(" "),t("ul",[t("li",[a._v("PRIVATE - 目录被添加到这个目标的 include 目录")]),a._v(" "),t("li",[a._v("INTERFACE - 该目录被添加到链接该库的任何目标的 include 目录中。")]),a._v(" "),t("li",[a._v("PUBLIC - 如上所述，它包含在此库以及链接此库的任何目标中。")])]),a._v(" "),t("p",[t("strong",[a._v("Tip")])]),a._v(" "),t("p",[a._v("对于公共 headers，将include文件夹与子目录“命名空间”通常是个好主意。")]),a._v(" "),t("p",[a._v("传递给 target_include_directories 的目录将是包含目录树的根目录，并且您的 C++ 文件应包含从那里到头文件的路径。")]),a._v(" "),t("p",[a._v("对于这个例子，你可以看到我们是这样做的")]),a._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"static/Hello.h"')])]),a._v("\n")])])]),t("p",[a._v("使用此方法意味着当您在项目中使用多个库时，头文件名冲突的可能性较小。")]),a._v(" "),t("h2",{attrs:{id:"链接库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接库"}},[a._v("#")]),a._v(" 链接库")]),a._v(" "),t("p",[a._v("创建将使用您的库的可执行文件时，您必须告诉编译器有关该库的信息。这可以使用 target_link_libraries() 函数来完成。")]),a._v(" "),t("div",{staticClass:"language-cmake extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("add_executable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("hello_binary\n    src/main.cpp\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("target_link_libraries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" hello_binary\n    "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PRIVATE")]),a._v("\n        hello_library\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("这告诉 CMake 在链接期间将 hello_library 链接到 hello_binary 可执行文件。它还将从链接库目标传播具有 PUBLIC 或 INTERFACE 范围的任何包含目录。")]),a._v(" "),t("p",[a._v("编译器调用的一个例子是")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("/usr/bin/c++ CMakeFiles/hello_binary.dir/src/main.cpp.o -o hello_binary -rdynamic libhello_library.a\n")])])]),t("h2",{attrs:{id:"构建示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建示例"}},[a._v("#")]),a._v(" 构建示例")]),a._v(" "),t("blockquote",[t("p",[a._v("源码："),t("a",{attrs:{href:"https://github.com/ttroy50/cmake-examples/tree/master/01-basic/C-static-library",target:"_blank",rel:"nofollow noopener noreferrer"}},[a._v("C-static-library"),t("OutboundLink")],1)])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" build\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\n\n$ cmake "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n-- The C compiler identification is GNU "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.8")]),a._v(".4\n-- The CXX compiler identification is GNU "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.8")]),a._v(".4\n-- Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" working C compiler: /usr/bin/cc\n-- Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" working C compiler: /usr/bin/cc -- works\n-- Detecting C compiler ABI info\n-- Detecting C compiler ABI info - "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n-- Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" working CXX compiler: /usr/bin/c++\n-- Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" working CXX compiler: /usr/bin/c++ -- works\n-- Detecting CXX compiler ABI info\n-- Detecting CXX compiler ABI info - "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n-- Configuring "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n-- Generating "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n-- Build files have been written to: /home/matrim/workspace/cmake-examples/01-basic/C-static-library/build\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\nScanning dependencies of target hello_library\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Building CXX object CMakeFiles/hello_library.dir/src/Hello.cpp.o\nLinking CXX static library libhello_library.a\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Built target hello_library\nScanning dependencies of target hello_binary\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Building CXX object CMakeFiles/hello_binary.dir/src/main.cpp.o\nLinking CXX executable hello_binary\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Built target hello_binary\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\nCMakeCache.txt  CMakeFiles  cmake_install.cmake  hello_binary  libhello_library.a  Makefile\n\n$ ./hello_binary\nHello Static Library"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);