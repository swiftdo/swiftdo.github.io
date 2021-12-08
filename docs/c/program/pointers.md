---
title: "指针"

date: 2021-12-07
tags:
  - c/c++
  - 指针
sitemap:
  exclude: false
  changefreq: hourly
---

## 什么是指针？

**指针**是一个变量，其值为另一个变量的地址，即，内存位置的直接地址。就像其他变量或常量一样，您必须在使用指针存储其他变量地址之前，对其进行声明。指针变量声明的一般形式为：

```c
type *var-name;
```

- `type`是指针的基类型，它必须是一个有效的 C++ 数据类型
- `var-name` 是指针变量的名称。用来声明指针的星号
- `*` 星号是用来指定一个变量是指针。

以下是有效的指针声明：

```c
int    *ip;    /* 一个整型的指针 */
double *dp;    /* 一个 double 型的指针 */
float  *fp;    /* 一个浮点型的指针 */
char   *ch;    /* 一个字符型的指针 */
```

所有指针的值的实际数据类型，不管是整型、浮点型、字符型，还是其他的数据类型，都是一样的，都是一个代表**内存地址的长的十六进制数**。
不同数据类型的指针之间唯一的不同是，**指针所指向的变量或常量的数据类型不同**。

## 使用指针

使用指针时会频繁进行以下几个操作：定义一个指针变量、把变量地址赋值给指针、访问指针变量中可用地址的值。

这些是通过使用一元运算符`*`来返回位于操作数所指定地址的变量的值。

下面的实例涉及到了这些操作：

```cpp
#include <iostream>

using namespace std;

int main ()
{
   int  var = 20;   // 实际变量的声明
   int  *ip;        // 指针变量的声明

   ip = &var;       // 在指针变量中存储 var 的地址

   cout << "Value of var variable: ";
   cout << var << endl;

   // 输出在指针变量中存储的地址
   cout << "Address stored in ip variable: ";
   cout << ip << endl;

   // 访问指针中地址的值
   cout << "Value of *ip variable: ";
   cout << *ip << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```c
Value of var variable: 20
Address stored in ip variable: 0xbfe601ac
Value of *ip variable: 20
```

> 每一个变量都有一个内存位置，每一个内存位置都定义了可使用`&`运算符访问的地址，它表示了在内存中的一个地址。

## 空指针

在变量声明的时候，如果没有确切的地址可以赋值，为指针变量赋一个`NULL`值是一个良好的编程习惯。赋为`NULL`值的指针被称为空指针。

`NULL` 指针是一个定义在标准库中的值为零的常量。

```cpp
#include <iostream>

using namespace std;

int main ()
{
   int  *ptr = NULL;

   cout << "ptr 的值是 " << ptr ;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```c
ptr 的值是 0
```

在大多数的操作系统上，程序不允许访问地址为 0 的内存，因为该内存是操作系统保留的。
然而，内存地址 0 有特别重要的意义，它表明该指针不指向一个可访问的内存位置。
但按照惯例，如果指针包含空值（零值），则假定它不指向任何东西。
如需检查一个空指针，您可以使用 if 语句，如下所示：

```cpp
if(ptr)     /* 如果 ptr 非空，则完成 */
if(!ptr)    /* 如果 ptr 为空，则完成 */
```

因此，如果所有未使用的指针都被赋予空值，同时避免使用空指针，就可以防止误用一个未初始化的指针。

很多时候，未初始化的变量存有一些垃圾值，导致程序难以调试。

## 指针的算术运算

**指针是一个用数值表示的地址**。因此，您可以对指针执行算术运算。
可以对指针进行四种算术运算：`++`、`--`、`+`、`-`。

假设 ptr 是一个指向地址 1000 的整型指针，是一个 32 位的整数，让我们对该指针执行下列的算术运算：

```cpp
ptr++
```

在执行完上述的运算之后，ptr 将指向位置 1004，因为 ptr 每增加一次，它都将指向下一个整数位置，即当前位置往后移 4 个字节。

如果 ptr 指向一个地址为 1000 的字符，上面的运算会导致指针指向位置 1001，因为下一个字符位置是在 1001。

在程序中使用指针代替数组，因为变量指针可以递增，而数组不能递增，因为数组是一个常量指针。下面的程序递增变量指针，以便顺序访问数组中的每一个元素：

```cpp
#include <iostream>

using namespace std;
const int MAX = 3;

int main ()
{
   int  var[MAX] = {10, 100, 200};
   int  *ptr;

   // 指针中的数组地址
   ptr = var;
   for (int i = 0; i < MAX; i++)
   {
      cout << "Address of var[" << i << "] = ";
      cout << ptr << endl;

      cout << "Value of var[" << i << "] = ";
      cout << *ptr << endl;

      // 移动到下一个位置
      ptr++;
   }
   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Address of var[0] = 0xbfa088b0
Value of var[0] = 10
Address of var[1] = 0xbfa088b4
Value of var[1] = 100
Address of var[2] = 0xbfa088b8
Value of var[2] = 200
```

## 指针 vs 数组

指针和数组是密切相关的。事实上，指针和数组在很多情况下是可以互换的。

例如，一个指向数组开头的指针，可以通过使用指针的算术运算或数组索引来访问数组。请看下面的程序：

```cpp
#include <iostream>

using namespace std;
const int MAX = 3;

int main ()
{
   int  var[MAX] = {10, 100, 200};
   int  *ptr;

   // 指针中的数组地址
   ptr = var;
   for (int i = 0; i < MAX; i++)
   {
      cout << "var[" << i << "]的内存地址为 ";
      cout << ptr << endl;

      cout << "var[" << i << "] 的值为 ";
      cout << *ptr << endl;

      // 移动到下一个位置
      ptr++;
   }
   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
var[0]的内存地址为 0x7fff59707adc
var[0] 的值为 10
var[1]的内存地址为 0x7fff59707ae0
var[1] 的值为 100
var[2]的内存地址为 0x7fff59707ae4
var[2] 的值为 200
```

然而，指针和数组并不是完全互换的。例如，请看下面的程序：

```cpp
#include <iostream>

using namespace std;
const int MAX = 3;

int main ()
{
   int  var[MAX] = {10, 100, 200};

   for (int i = 0; i < MAX; i++)
   {
      *var = i;    // 这是正确的语法
      var++;       // 这是不正确的
   }
   return 0;
}
```

把指针运算符`*`应用到`var`上是完全可以的，但修改`var`的值是非法的。这是因为`var`是一个指向数组开头的常量，不能作为左值。

**由于一个数组名对应一个指针常量，只要不改变数组的值，仍然可以用指针形式的表达式。**

例如，下面是一个有效的语句，把 var[2] 赋值为 500：

```cpp
*(var + 2) = 500;
```

上面的语句是有效的，且能成功编译，因为`var`未改变。

## 指针数组

想要让数组存储指向 int 或 char 或其他数据类型的指针。下面是一个指向整数的指针数组的声明：

```cpp
int *ptr[MAX];
```

在这里，把`ptr`声明为一个数组，由`MAX`个整数指针组成。因此，`ptr`中的每个元素，都是一个指向`int`值的指针。

下面的实例用到了三个整数，它们将存储在一个指针数组中，如下所示：

```cpp
#include <iostream>

using namespace std;
const int MAX = 3;

int main ()
{
   int  var[MAX] = {10, 100, 200};
   int *ptr[MAX];

   for (int i = 0; i < MAX; i++)
   {
      ptr[i] = &var[i]; // 赋值为整数的地址
   }
   for (int i = 0; i < MAX; i++)
   {
      cout << "Value of var[" << i << "] = ";
      cout << *ptr[i] << endl;
   }
   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```c
Value of var[0] = 10
Value of var[1] = 100
Value of var[2] = 200
```

您也可以用一个指向字符的指针数组来存储一个字符串列表，如下：

```cpp
#include <iostream>

using namespace std;
const int MAX = 4;

int main ()
{
   const char *names[MAX] = {
                   "Zara Ali",
                   "Hina Ali",
                   "Nuha Ali",
                   "Sara Ali",
   };

   for (int i = 0; i < MAX; i++)
   {
      cout << "Value of names[" << i << "] = ";
      cout << names[i] << endl;
   }
   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Value of names[0] = Zara Ali
Value of names[1] = Hina Ali
Value of names[2] = Nuha Ali
Value of names[3] = Sara Ali
```
