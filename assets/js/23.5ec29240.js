(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{704:function(t,a,s){"use strict";s.r(a);var n=s(8),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("插入排序是一种从序列左端开始依次对数据进行排序的算法。在排序过程中，左侧的数据 陆续归位，而右侧留下的就是还未被排序的数据。插入排序的思路就是从右侧的未排序区域内取出一个数据，然后将它插入到已排序区域内合适的位置上。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"754476-b4e3e40e93224bf3","data-src":"http://blog.loveli.site/754476-b4e3e40e93224bf3.gif",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),s("ul",[s("li",[t._v("把一系列数字放在一个未排序的堆里。")]),t._v(" "),s("li",[t._v("从堆中挑选一个数字。 你选择哪一个并不重要，但从堆顶挑选是最容易。")]),t._v(" "),s("li",[t._v("把这个数插入一个新的数组。")]),t._v(" "),s("li",[t._v("从未排序堆中再选择一个数字，并将其插入之前的数组中。 这个数字在第一个数字之前或之后，所以现在这两个数字被排序。")]),t._v(" "),s("li",[t._v("再从堆中选择一个数字，并将其插入到数组中的正确排序位置")]),t._v(" "),s("li",[t._v("继续这样做，直到堆里没有数字。 最终得到一个空堆和一个排序的数组。")])]),t._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("p",[t._v("1.对数字 1~9 进行排序\n"),s("img",{staticClass:"lazy",attrs:{alt:"-w464","data-src":"http://blog.loveli.site/2020-08-14-15974187854474.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("2.首先，我们假设最左边的数字 5 已经完成排序，所以此时只有 5 是已归位的数字。\n"),s("img",{staticClass:"lazy",attrs:{alt:"-w474","data-src":"http://blog.loveli.site/2020-08-14-15974188214620.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("3.接下来，从待排数字(未排序区域)中取出最左边的数字 3，将它与左边已归位的数字进行比较。若左 边的数字更大，就交换这两个数字。重复该操作，直到左边已归位的数字比取出的数字更小，或者取 出的数字已经被移到整个序列的最左边为止。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w468","data-src":"http://blog.loveli.site/2020-08-14-15974188693718.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("4.由于 5 > 3，所以交换这两个数字。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w490","data-src":"http://blog.loveli.site/2020-08-14-15974189206263.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("5.对数字 3 的操作到此结束。此时 3 和 5 已归位，还剩下右边 7 个数字尚未排序。\n"),s("img",{staticClass:"lazy",attrs:{alt:"-w480","data-src":"http://blog.loveli.site/2020-08-14-15974189493112.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("6.接下来是第 3 轮。和前面一样，取出未排序区域中最左边的数字 4，将它与左边的数字 5 进行比较。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w468","data-src":"http://blog.loveli.site/2020-08-14-15974189965277.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("7.由于5>4，所以交换这两个数字。交换后再把4和左边的3进行比较，发现3<4，因为出现了比自己 小的数字，所以操作结束。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w520","data-src":"http://blog.loveli.site/2020-08-14-15974190358164.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("8.于是 4 也归位了。此时 3、4、5 都已归位，已排序区域也得到了扩大。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w291","data-src":"http://blog.loveli.site/2020-08-14-15974190933068.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("9.遇到左边的数字都比自己小的情况时......")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w311","data-src":"http://blog.loveli.site/2020-08-14-15974191392409.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("10.不需要任何操作即可完成排序\n"),s("img",{staticClass:"lazy",attrs:{alt:"-w513","data-src":"http://blog.loveli.site/2020-08-14-15974191604605.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("11.重复上述操作，直到所有数字都归位")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w305","data-src":"http://blog.loveli.site/2020-08-14-15974191942389.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("12.对所有数字的操作都结束时，排序也就完成了。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"-w314","data-src":"http://blog.loveli.site/2020-08-14-15974192214948.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("insertionSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..<")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertionSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),s("p",[t._v("在插入排序中，需要将取出的数据与其左边的数字进行比较。就跟前面讲的步骤一 样，如果左边的数字更小，就不需要继续比较，本轮操作到此结束，自然也不需要交换 数字的位置。")]),t._v(" "),s("p",[t._v("然而，如果取出的数字比左边已归位的数字都要小，就必须不停地比较大小，交换 数字，直到它到达整个序列的最左边为止。具体来说，就是第 k 轮需要比较 k - 1 次。因 此，在最糟糕的情况下，第 2 轮需要操作 1 次，第 3 轮操作 2 次......第 n 轮操作 n -1 次，所以时间复杂度和冒泡排序的一样，都为 O(n^2)。")]),t._v(" "),s("p",[t._v("输入数据按从大到小的顺序排列时就是最糟糕的情况。")])])}),[],!1,null,null,null);a.default=r.exports}}]);