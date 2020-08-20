---
title: '计数排序'
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17
tags:
- 数据结构与算法
- 基础
---

# 计数排序

计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

![754476-b927ae5439d0ed31](http://blog.loveli.site/2019-09-02-754476-b927ae5439d0ed31.gif)

是一种O(n)的排序算法，其思路是开一个长度为 maxValue-minValue+1 的数组，然后

**分配**。扫描一遍原始数组，以当前值- minValue 作为下标，将该下标的计数器增1。
**收集**。扫描一遍计数器数组，按顺序把值收集起来。

## 代码实现

```swift
enum CountingSortError: Error {
  case arrayEmpty
}

func countingSort(array: [Int]) throws -> [Int] {
  guard array.count > 0 else {
    throw CountingSortError.arrayEmpty
  }

  // Step 1
  // 获取最大元素
  let maxElement = array.max() ?? 0

  // 创建一个 maxElement + 1 的数组，并且统计
  var countArray = [Int](repeating: 0, count: Int(maxElement + 1))
  for element in array {
    countArray[element] += 1
  }

  // Step 2
  // 确定在每个元素之前放置的元素的数量，这一步很经典
  for index in 1 ..< countArray.count {
    let sum = countArray[index] + countArray[index - 1]
    countArray[index] = sum
  }

  // Step 3
  // 输出
  var sortedArray = [Int](repeating: 0, count: array.count)
  for element in array {
    countArray[element] -= 1
    sortedArray[countArray[element]] = element
  }
  return sortedArray
}

try countingSort(array: [10, 9, 8, 7, 1, 2, 7, 3])
```
