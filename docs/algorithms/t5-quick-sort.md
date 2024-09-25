---
title: "快速排序"
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17
tags:
  - 数据结构与算法
  - 基础
---

同冒泡排序一样，快速排序也属于**交换排序**，通过元素之间的比较和交换位置来达到排序的目的。通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，

![754476-ac3bda064926d092](/imgs/754476-ac3bda064926d092.gif)

## 算法思想

快速排序是 C.R.A.Hoare 于 1962 年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法 (Divide-and-ConquerMethod)。

1.  分治法的基本思想
    分治法的基本思想是：将原问题分解为若干个规模更小但结构与原问题相似的子问题。递归地解这些子问题，然后将这些子问题的解组合为原问题的解。

2.  快速排序的基本思想
    设当前待排序的无序区为 R[low..high]，利用分治法可将快速排序的基本思想描述为：

        ① 分解：
        在R[low..high]中任选一个记录作为基准(Pivot)，以此基准将当前无序区划分为左、右两个较小的子区间R[low..pivotpos-1)和R[pivotpos+1..high]，并使左边子区间中所有记录的关键字均小于等于基准记录(不妨记为pivot)的关键字pivot.key，右边的子区间中所有记录的关键字均大于等于pivot.key，而基准记录pivot则位于正确的位置(pivotpos)上，它无须参加后续的排序。

        > 注意：
        > 划分的关键是要求出基准记录所在的位置 pivotpos。
        > 划分的结果可以简单地表示为(注意 pivot=R[pivotpos])：
        >
        > R[low..pivotpos-1].keys≤R[pivotpos].key≤R[pivotpos+1..high].keys
        >
        > 其中low≤pivotpos≤high。

        ② 求解：
        通过递归调用快速排序对左、右子区间 R[low..pivotpos-1] 和 R[pivotpos+1..high] 快速排序。

        ③ 组合：
        因为当"求解"步骤中的两个递归调用结束时，其左、右两个子区间已有序。对快速排序而言，"组合"步骤无须做什么，可看作是空操作。

## 例子

![](/imgs/15539988528666.jpg)

## 代码

```swift
func quickSort<T: Comparable>(_ array:[T]) -> [T] {
    guard array.count > 1 else {return array}
    let pivot = array[array.count / 2]
    let less = array.filter {$0 < pivot}
    let equal = array.filter{$0 == pivot}
    let greater = array.filter{$0 > pivot}
    return quickSort(less) + equal + quickSort(greater)
}

let tmp = [4,32,5,6,8,10,31,7]
quickSort(tmp)
```

## 性能

快速排序是一种“分治法”。它将原本的问题分成两个子问题(比基准值小的数和 比基准值大的数)，然后再分别解决这两个问题。子问题，也就是子序列完成排序后，把他们合并成一个序列，那么对原始序列的排序也就完成了。

快速排序具有最好的平均性能（average behavior），但最坏性能（worst case behavior）和插入排序相同，也是 `O(n^2)`。 比如一个序列 `5,4,3,2,1`，要排为 `1,2,3,4,5`。按照快速排序方法，每次只会有一个数据进入正确顺序，不能把数据分成大小相当的两份，很明显，排序的过程就成了一个歪脖子树，树的深度为`n`，那时间复杂度就成了`O(n^2)`。 尽管如此，需要排序的情况几乎都是乱序的，自然性能就保证了。

据书上的测试图来看，在数据量小于`20`的时候，插入排序具有最好的性能。当大于 `20`时，快速排序具有最好的性能，归并`(merge sort)`和堆排序`(heap sort)`也望尘莫及，尽管复杂度都为`nlog2(n)`。
