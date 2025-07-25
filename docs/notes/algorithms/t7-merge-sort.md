---
title: 归并排序
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17T00:00:00.000Z
tags:
  - 数据结构与算法
  - 基础
createTime: 2024/09/25 17:05:01
permalink: /algorithms/3kbm070e/
---

归并排序是 1945 年由 John von Neumann 发明的，是一种有效的算法，最佳、最差和平均时间复杂度都是 O(n log n)。归并排序算法使用分而治之方法，即将一个大问题分解为较小的问题并解决它们。 归并排序算法可分为 `先拆分` 和 `后合并`。


归并排序算法会把序列分成长度相同的两个子序列，当无法继续往下分时(也就是每个子序列中只有一个数据时)，就对子序列进行归并。归并指的是把两个排好序的子序列合并成一个有序序列。该操作会一直重复执行，直到所有子序列都归并为一个整体为止。

![754476-026141fa68c25ddf](/imgs/754476-026141fa68c25ddf.gif)

## 工作原理

归并排序分为三个过程：

1. 将数列划分为两部分（在均匀划分时时间复杂度为 ）；
2. 递归地分别对两个子序列进行归并排序；
3. 合并两个子序列。

不难发现，归并排序的核心是如何合并两个子序列，前两步都很好实现。

## 例子

[2,1,5,4,9]

### 拆分

1. 将数组分成两半：[2,1] 和 [5,4,9]， 你能继续拆分吗？ 是的你可以！
2. 专注于左边堆。 将 [2,1] 拆分为 [2] 和 [1]，你能继续拆分吗？ 不能了。检查右边的堆。
3. 将 [5,4,9] 拆分为 [5] 和 [4,9]，[5] 不能再拆分了，但是 [4,9] 可以分成 [4] 和 [9]
4. 拆分最终结果为：`[2]` `[1]` `[5]` `[4]` `[9]`。 请注意，每个堆只包含一个元素

### 合并

1. 第一次合并的结果是 [1,2] 和 [4,5] 和 [9], 由于 [9] 的位置落单，所以在合并过程中没有堆与之合并了。
2. 下一次将合并 [1,2] 和 [4,5]。 结果 [1,2,4,5]，再次由于 [9] 的位置落单不需要合并
3. 只剩下两堆 [1,2,4,5] 和 [9]，合并后完成排序的数组为 [1,2,4,5,9]

![](/imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif)

## 代码

```swift
func mergeSort(_ array: [Int])-> [Int] {
    guard array.count > 1 else {return array}
    let middleIndex = array.count / 2
    let leftArr = mergeSort(Array(array[0..<middleIndex]))
    let rightArr = mergeSort(Array(array[middleIndex..<array.count]))
    return merge(leftPile: leftArr, rightPile: rightArr)
}

func merge(leftPile: [Int], rightPile: [Int]) -> [Int] {
    var leftIndex = 0
    var rightIndex = 0

    var orderPile = [Int]()

    while leftIndex < leftPile.count && rightIndex < rightPile.count {
        if leftPile[leftIndex] < rightPile[rightIndex] {
            orderPile.append(leftPile[leftIndex])
            leftIndex += 1
        } else if leftPile[leftIndex] > rightPile[rightIndex] {
            orderPile.append(rightPile[rightIndex])
            rightIndex += 1
        } else {
            orderPile.append(leftPile[leftIndex])
            leftIndex += 1
            orderPile.append(rightPile[rightIndex])
            rightIndex += 1
        }
    }

    while leftIndex < leftPile.count {
        orderPile.append(leftPile[leftIndex])
        leftIndex += 1
    }

    while rightIndex < rightPile.count {
        orderPile.append(rightPile[rightIndex])
        rightIndex += 1
    }

    return orderPile
}
```

## 性能

归并排序是稳定排序，它也是一种十分高效的排序，能利用完全二叉树特性的排序一般性能都不会太差。每次合并操作的平均时间复杂度为 O(n)，而完全二叉树的深度为 |log2n|。总的平均时间复杂度为 O(nlogn)。而且，归并排序的最好，最坏，平均时间复杂度均为 O(nlogn)。
