---
title: '桶排序'
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17
tags:
- 数据结构与算法
- 基础
---

# 桶排序

## 过程分析

桶排序同样是一种线性时间的排序算法。类似于计数排序所创建的统计数组，桶排序需要创建若干个桶来协助排序。

![](http://blog.loveli.site/2020-08-21-15980148999452.jpg)


桶排序的基本思想是：
```
把数组 arr 划分为 n 个大小相同子区间（桶），每个子区间各自排序，最后合并
```

**计数排序是桶排序的一种特殊情况**，可以把计数排序当成每个桶里只有一个元素的情况。

1. 找出待排序数组中的最大值 max, 最小值 min
2. 用数组作为桶，桶里放的元素也是数组存储，桶的数量 (max-min) / arr.count + 1
3. 变量数组 arr, 计算每个元素 arr[i] 放的桶
4. 每个桶各自排序
5. 遍历桶数组，把排序好的元素放进输出数组

## 代码实现
```swift
var tmp = [4, 32, 5, 6, 8, 10, 31, 7]

/// 桶排序
func bucketSort(_ arr: [Int]) -> [Int] {
    guard let max = arr.max(),
        let min = arr.min()
        else { return arr }

    /// 桶数目
    let bucketNum = (max - min) / arr.count + 1
    var bucketArr:[[Int]] = (0..<bucketNum).map { _ in return [Int]() }

    /// 将每个元素放入桶
    for ele in arr {
        let num = (ele - min) / arr.count
        bucketArr[num].append(ele)
    }

    /// 对每个桶进行排序
    let tmpArr:[[Int]] = bucketArr.compactMap { subArr in
        return subArr.sorted(by: <)
    }

    /// 组装
    var retArr = [Int]()
    for item in tmpArr {
        for sItem in item {
            retArr.append(sItem)
        }
    }
   return retArr
}

let ret = bucketSort(tmp)
print("ret = \(ret)")

```

## 性能

时间消耗包括两部分一部分为初始化桶，连接排好序的桶，其时间复杂度为 O(n) 一般有 m < n (m个桶)

另一部分为对桶中的元素进行排序，这部分的复杂度，通过代码中的 for 和 while 循环直接看不太容易，这样考虑：每个桶里面有 ni 个元素，对 ni 个元素进行插入排序的耗时为 O(ni^2)。

于是 `T(n)=O(n)+∑O(ni^2)`，平均意义下认为ni=n/m，于是有 `T(n)=O(n)+m*O((n/m)^2)=O(n^2/m)+O(n)`

当 n=m 时，`T(n)=O(n)+O(n)=O(n)`

对于每个桶采用其他的排序算法：m个桶，每个桶中的元素平均假设有 n/m 个，在上面进行基于比较的排序，复杂度不会低于 `n * O(n/m * lg(n/m))`，平均意义下每个桶中的元素有 n/m 个，`O(m * n/m * lg(n/m) = O(n*lg(n/m))`，所以总的时间复杂度为 `T(n)=O(n+n*lg(n/m))`

当 m=n 时时间复杂度为 O(n)，此时和计数排序一样，桶数量越多，时间效率越高，然而桶数量越多占用空间也就越大。



