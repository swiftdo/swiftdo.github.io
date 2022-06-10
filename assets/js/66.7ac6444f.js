(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{747:function(e,a,s){"use strict";s.r(a);var t=s(8),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("p",[e._v("显示一个 hello world 示例，该示例对源文件和包含文件使用不同的文件夹。")]),e._v(" "),s("p",[e._v("本教程中的文件包括：")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("B-hello-headers$ tree\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n├── CMakeLists.txt\n├── include\n│   └── Hello.h\n└── src\n    ├── Hello.cpp\n    └── main.cpp\n")])])]),s("ul",[s("li",[e._v("CMakeLists.txt - 包含您希望运行的 CMake 命令。")]),e._v(" "),s("li",[e._v("include/Hello.h - 要包含的头文件。")]),e._v(" "),s("li",[e._v("src/Hello.cpp - 要编译的源文件。")]),e._v(" "),s("li",[e._v("src/main.cpp - 带有 main 的源文件。")])]),e._v(" "),s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),s("p",[e._v("CMake 语法指定了许多变量，可用于帮助在您的项目或源代码树中找到有用的目录。其中一些包括：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("变量")]),e._v(" "),s("th",[e._v("介绍")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("CMAKE_SOURCE_DIR")]),e._v(" "),s("td",[e._v("工程顶层目录。")])]),e._v(" "),s("tr",[s("td",[e._v("CMAKE_CURRENT_SOURCE_DIR")]),e._v(" "),s("td",[e._v("当前处理的CMakeLists.txt所在的路径")])]),e._v(" "),s("tr",[s("td",[e._v("PROJECT_SOURCE_DIR")]),e._v(" "),s("td",[e._v("CMake源码地址，即cmake命令后指定的地址")])]),e._v(" "),s("tr",[s("td",[e._v("CMAKE_BINARY_DIR")]),e._v(" "),s("td",[e._v("根二进制/构建目录。这是您运行 cmake 命令的目录。")])]),e._v(" "),s("tr",[s("td",[e._v("CMAKE_CURRENT_BINARY_DIR")]),e._v(" "),s("td",[e._v("target编译目录")])]),e._v(" "),s("tr",[s("td",[e._v("PROJECT_BINARY_DIR")]),e._v(" "),s("td",[e._v("运行cmake命令的目录,通常是PROJECT_SOURCE_DIR下的build目录")])])])]),e._v(" "),s("h2",{attrs:{id:"源文件变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源文件变量"}},[e._v("#")]),e._v(" 源文件变量")]),e._v(" "),s("p",[e._v("创建一个包含源文件的变量可以让您更清楚地了解这些文件并轻松地将它们添加到多个命令中，例如 add_executable() 函数。")]),e._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a sources variable with a link to all cpp files to compile")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("SOURCES")]),e._v("\n    src/Hello.cpp\n    src/main.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("add_executable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("${")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("SOURCES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[s("strong",[e._v("Note")]),e._v(":")]),e._v(" "),s("p",[e._v("在 SOURCES 变量中设置特定文件名的另一种方法是使用 GLOB 命令通过通配符模式匹配来查找文件。")]),e._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GLOB "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("SOURCES")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/*.cpp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[s("strong",[e._v("Tip")])]),e._v(" "),s("p",[e._v("对于现代 CMake，不建议对源使用变量。相反，通常直接在 add_xxx 函数中声明源.")]),e._v(" "),s("p",[e._v("这对于 glob 命令尤其重要，如果您添加新的源文件，它可能不会总是得到正确的结果。")]),e._v(" "),s("h2",{attrs:{id:"包含目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包含目录"}},[e._v("#")]),e._v(" 包含目录")]),e._v(" "),s("p",[e._v("当您有不同的包含文件夹时，您可以使用 target_include_directories() 函数让您的编译器知道它们。编译此目标时，这会将这些目录添加到带有 -I 标志的编译器中，例如"),s("code",[e._v("-I/directory/path")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("target_include_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("target\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("PRIVATE")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("PROJECT_SOURCE_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("/include\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("PRIVATE 标识符指定包含的范围。这对库很重要，将在下一个示例中进行说明。")]),e._v(" "),s("h2",{attrs:{id:"构建示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建示例"}},[e._v("#")]),e._v(" 构建示例")]),e._v(" "),s("blockquote",[s("p",[e._v("源代码："),s("a",{attrs:{href:"https://github.com/ttroy50/cmake-examples/blob/master/01-basic/B-hello-headers/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("B-hello-headers/"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("构建此示例的标准输出如下所示。")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" build\n\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" build\n\n$ cmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n-- The C compiler identification is GNU "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.8")]),e._v(".4\n-- The CXX compiler identification is GNU "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.8")]),e._v(".4\n-- Check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" working C compiler: /usr/bin/cc\n-- Check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" working C compiler: /usr/bin/cc -- works\n-- Detecting C compiler ABI info\n-- Detecting C compiler ABI info - "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n-- Check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" working CXX compiler: /usr/bin/c++\n-- Check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" working CXX compiler: /usr/bin/c++ -- works\n-- Detecting CXX compiler ABI info\n-- Detecting CXX compiler ABI info - "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n-- Configuring "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n-- Generating "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n-- Build files have been written to: /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\nScanning dependencies of target hello_headers\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Building CXX object CMakeFiles/hello_headers.dir/src/Hello.cpp.o\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Building CXX object CMakeFiles/hello_headers.dir/src/main.cpp.o\nLinking CXX executable hello_headers\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Built target hello_headers\n\n$ ./hello_headers\nHello Headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n")])])]),s("h2",{attrs:{id:"详细输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细输出"}},[e._v("#")]),e._v(" 详细输出")]),e._v(" "),s("p",[e._v("在前面的示例中，运行 make 命令时，输出仅显示构建的状态。要查看用于调试的完整输出，您可以在运行 make 时添加 VERBOSE=1 标志。")]),e._v(" "),s("p",[e._v("VERBOSE 输出如下所示，对输出的检查显示添加到 c++ 编译器命令的包含目录。")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("VERBOSE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n/usr/bin/cmake -H/home/matrim/workspace/cmake-examples/01-basic/hello_headers -B/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build --check-build-system CMakeFiles/Makefile.cmake "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n/usr/bin/cmake -E cmake_progress_start /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles/progress.marks\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" -f CMakeFiles/Makefile2 all\nmake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": Entering directory "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" -f CMakeFiles/hello_headers.dir/build.make CMakeFiles/hello_headers.dir/depend\nmake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": Entering directory "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\ncd /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build && /usr/bin/cmake -E cmake_depends \"Unix Makefiles\" /home/matrim/workspace/cmake-examples/01-basic/hello_headers /home/matrim/workspace/cmake-examples/01-basic/hello_headers /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles/hello_headers.dir/DependInfo.cmake --color=\nmake[2]: Leaving directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" -f CMakeFiles/hello_headers.dir/build.make CMakeFiles/hello_headers.dir/build\nmake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": Entering directory "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'\n/usr/bin/cmake -E cmake_progress_report /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Building CXX object CMakeFiles/hello_headers.dir/src/Hello.cpp.o\n/usr/bin/c++    -I/home/matrim/workspace/cmake-examples/01-basic/hello_headers/include    -o CMakeFiles/hello_headers.dir/src/Hello.cpp.o -c /home/matrim/workspace/cmake-examples/01-basic/hello_headers/src/Hello.cpp\n/usr/bin/cmake -E cmake_progress_report /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Building CXX object CMakeFiles/hello_headers.dir/src/main.cpp.o\n/usr/bin/c++    -I/home/matrim/workspace/cmake-examples/01-basic/hello_headers/include    -o CMakeFiles/hello_headers.dir/src/main.cpp.o -c /home/matrim/workspace/cmake-examples/01-basic/hello_headers/src/main.cpp\nLinking CXX executable hello_headers\n/usr/bin/cmake -E cmake_link_script CMakeFiles/hello_headers.dir/link.txt --verbose"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n/usr/bin/c++       CMakeFiles/hello_headers.dir/src/Hello.cpp.o CMakeFiles/hello_headers.dir/src/main.cpp.o  -o hello_headers -rdynamic\nmake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": Leaving directory "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\n/usr/bin/cmake -E cmake_progress_report /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles  1 2\n[100%] Built target hello_headers\nmake[1]: Leaving directory `/home/matrim/workspace/cmake-examples/01-basic/hello_headers/build'")]),e._v("\n/usr/bin/cmake -E cmake_progress_start /home/matrim/workspace/cmake-examples/01-basic/hello_headers/build/CMakeFiles "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);