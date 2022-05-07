(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{706:function(t,s,a){"use strict";a.r(s);var n=a(8),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("同冒泡排序一样，快速排序也属于"),a("strong",[t._v("交换排序")]),t._v("，通过元素之间的比较和交换位置来达到排序的目的。通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"754476-ac3bda064926d092","data-src":"http://blog.oldbird.run/754476-ac3bda064926d092.gif",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"算法思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法思想"}},[t._v("#")]),t._v(" 算法思想")]),t._v(" "),a("p",[t._v("快速排序是 C.R.A.Hoare 于 1962 年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法 (Divide-and-ConquerMethod)。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("分治法的基本思想\n分治法的基本思想是：将原问题分解为若干个规模更小但结构与原问题相似的子问题。递归地解这些子问题，然后将这些子问题的解组合为原问题的解。")])]),t._v(" "),a("li",[a("p",[t._v("快速排序的基本思想\n设当前待排序的无序区为 R[low..high]，利用分治法可将快速排序的基本思想描述为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('① 分解：\n在R[low..high]中任选一个记录作为基准(Pivot)，以此基准将当前无序区划分为左、右两个较小的子区间R[low..pivotpos-1)和R[pivotpos+1..high]，并使左边子区间中所有记录的关键字均小于等于基准记录(不妨记为pivot)的关键字pivot.key，右边的子区间中所有记录的关键字均大于等于pivot.key，而基准记录pivot则位于正确的位置(pivotpos)上，它无须参加后续的排序。\n\n> 注意：\n> 划分的关键是要求出基准记录所在的位置 pivotpos。\n> 划分的结果可以简单地表示为(注意 pivot=R[pivotpos])：\n>\n> R[low..pivotpos-1].keys≤R[pivotpos].key≤R[pivotpos+1..high].keys\n>\n> 其中low≤pivotpos≤high。\n\n② 求解：\n通过递归调用快速排序对左、右子区间 R[low..pivotpos-1] 和 R[pivotpos+1..high] 快速排序。\n\n③ 组合：\n因为当"求解"步骤中的两个递归调用结束时，其左、右两个子区间已有序。对快速排序而言，"组合"步骤无须做什么，可看作是空操作。\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"http://blog.oldbird.run/15539988528666.jpg",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("quickSort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("guard")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pivot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" less "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token short-argument"}},[t._v("$0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pivot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" equal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token short-argument"}},[t._v("$0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" pivot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" greater "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token short-argument"}},[t._v("$0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pivot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("less"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" equal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greater"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),a("p",[t._v("快速排序是一种“分治法”。它将原本的问题分成两个子问题(比基准值小的数和 比基准值大的数)，然后再分别解决这两个问题。子问题，也就是子序列完成排序后，把他们合并成一个序列，那么对原始序列的排序也就完成了。")]),t._v(" "),a("p",[t._v("快速排序具有最好的平均性能（average behavior），但最坏性能（worst case behavior）和插入排序相同，也是 "),a("code",[t._v("O(n^2)")]),t._v("。 比如一个序列 "),a("code",[t._v("5,4,3,2,1")]),t._v("，要排为 "),a("code",[t._v("1,2,3,4,5")]),t._v("。按照快速排序方法，每次只会有一个数据进入正确顺序，不能把数据分成大小相当的两份，很明显，排序的过程就成了一个歪脖子树，树的深度为"),a("code",[t._v("n")]),t._v("，那时间复杂度就成了"),a("code",[t._v("O(n^2)")]),t._v("。 尽管如此，需要排序的情况几乎都是乱序的，自然性能就保证了。")]),t._v(" "),a("p",[t._v("据书上的测试图来看，在数据量小于"),a("code",[t._v("20")]),t._v("的时候，插入排序具有最好的性能。当大于 "),a("code",[t._v("20")]),t._v("时，快速排序具有最好的性能，归并"),a("code",[t._v("(merge sort)")]),t._v("和堆排序"),a("code",[t._v("(heap sort)")]),t._v("也望尘莫及，尽管复杂度都为"),a("code",[t._v("nlog2(n)")]),t._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);