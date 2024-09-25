---
title: "基数排序"
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17
tags:
  - 数据结构与算法
  - 基础
---

# 基数排序

基数排序（Radix sort）是一种非比较型整数排序算法，时间复杂度是 O(n) 。

![754476-6bf41f1ec1fdb8b4](/imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif)

## 思路

它的主要思路是：

1. 将所有待排序整数（注意，必须是非负整数）统一为位数相同的整数，位数较少的前面补零。一般用 10 进制，也可以用 16 进制甚至 2 进制。所以前提是能够找到最大值，得到最长的位数，设 k 进制下最长为位数为 d。
2. 从最低位开始，依次进行一次稳定排序。这样从最低位一直到最高位排序完成以后，整个序列就变成了一个有序序列。

![](/imgs/2020-08-21-15980163815241.jpg)

## 代码

```swift
// 不能处理负数
func radixSort(_ array: inout [Int] ) {
  let radix = 10  //在这里我们定义基数为10
  var done = false
  var index: Int
  var digit = 1  // 我们在哪个位数上

  while !done {
    done = true  // 假设现在完成
    var buckets: [[Int]] = []  // 我们的排序子程序是桶排序，所以让我们预定义我们的桶
    for _ in 1...radix {
      buckets.append([])
    }

    for number in array {
      index = number / digit  // 我们将访问哪个桶？
      buckets[index % radix].append(number)

      if done && index > 0 {  // If we arent done, continue to finish, otherwise we are done
        done = false
      }
    }

   /// 输出
    var i = 0
    for j in 0..<radix {
      let bucket = buckets[j]
      for number in bucket {
        array[i] = number
        i += 1
      }
    }

    digit *= radix  // 下一位
  }
}
```
