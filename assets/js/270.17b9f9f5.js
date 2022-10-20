(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{448:function(t,n,o){"use strict";o.r(n);var a=o(2),e=function(t){t.options.__data__block__={flowchart_382ee246:"st=>start: Start|past:>http://www.baidu.com\ne=>end: End:>http://www.baidu.com\nop1=>operation: My Operation|past\nop2=>operation: Stuff|current\nsub1=>subroutine: My Subroutine|invalid\ncond=>condition: Yes or No?|approved:>http://www.baidu.com\nc2=>condition: Good idea|rejected\nio=>inputoutput: catch something...|request\n\nst->op1(right)->cond\ncond(yes, right)->c2\ncond(no)->sub1(left)->op1\nc2(yes)->io->e\nc2(no)->op2->e"}},s=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("我们常常需要在文档中引用一些流程图，以便更清晰地说明运行流程。以前没有系统地学习过 Flowchart 流程图，所以想到什么就画什么，结果画出来的图形状千奇百怪，没有形成一致的规范。")]),t._v(" "),n("p",[t._v("当然有很多专业在线画流程图的工具，简单的拖拽即可。但是对我而言，习惯了用 markdown 写文档，如果通过工具的话，需要切换软件，还需要生成图片，然后生成图片链接等等。特别是在更新流程图的时候，还需要找到这个流程图进行重新编辑。所以整个工作流程还是极其不流畅的。")]),t._v(" "),n("p",[t._v("那么 Flowchart 可以解决这种问题。直接在 markdown 就可以画图，当然需要安装一些插件才能渲染出来。")]),t._v(" "),n("p",[t._v("笔者使用的是 MWeb，已经内置了 flowchart 的插件。其他软件可自行在网上搜索答案。")]),t._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[t._v("流程图的语法大致分为两部分。")]),t._v(" "),n("ul",[n("li",[t._v("定义元素")]),t._v(" "),n("li",[t._v("连接元素")])]),t._v(" "),n("h2",{attrs:{id:"定义元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义元素"}},[t._v("#")]),t._v(" 定义元素")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("tag=>type: content:>url\n")])])]),n("p",[t._v("1）"),n("strong",[t._v("tag")]),t._v("：标签，用于连接元素时使用")]),t._v(" "),n("p",[t._v("2）"),n("strong",[t._v("type")]),t._v("：该标签的类型。共有 6 种类型如下：")]),t._v(" "),n("ul",[n("li",[t._v("start")]),t._v(" "),n("li",[t._v("end")]),t._v(" "),n("li",[t._v("operation")]),t._v(" "),n("li",[t._v("subroutine")]),t._v(" "),n("li",[t._v("condition")]),t._v(" "),n("li",[t._v("inputoutput")])]),t._v(" "),n("p",[t._v("3）"),n("strong",[t._v("content")]),t._v("：流程语句中放置的内容")]),t._v(" "),n("p",[t._v("4）"),n("strong",[t._v("url")]),t._v("：链接，与流程语句绑定")]),t._v(" "),n("h2",{attrs:{id:"连接元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连接元素"}},[t._v("#")]),t._v(" 连接元素")]),t._v(" "),n("p",[t._v("使用"),n("code",[t._v("->")]),t._v("符号，如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("c2(yes)->io->e\nc2(no)->op2->e\n")])])]),n("h2",{attrs:{id:"实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),n("p",[t._v("mdweb 需要注明下语言 "),n("code",[t._v("flow")]),t._v(" 即可")]),t._v(" "),n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{pre:!0,attrs:{class:"token code"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),n("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("flow")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token code-block language-flow"}},[t._v("st=>start: Start|past:>http://www.baidu.com\ne=>end: End:>http://www.baidu.com\nop1=>operation: My Operation|past\nop2=>operation: Stuff|current\nsub1=>subroutine: My Subroutine|invalid\ncond=>condition: Yes or No?|approved:>http://www.baidu.com\nc2=>condition: Good idea|rejected\nio=>inputoutput: catch something...|request\n\nst->op1(right)->cond\ncond(yes, right)->c2\ncond(no)->sub1(left)->op1\nc2(yes)->io->e\nc2(no)->op2->e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n")])])]),n("p",[t._v("在 vuepress 中我们需要改成 @flowstart:")]),t._v(" "),n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("@flowstart\nst=>start: Start|past:>http://www.baidu.com\ne=>end: End:>http://www.baidu.com\nop1=>operation: My Operation|past\nop2=>operation: Stuff|current\nsub1=>subroutine: My Subroutine|invalid\ncond=>condition: Yes or No?|approved:>http://www.baidu.com\nc2=>condition: Good idea|rejected\nio=>inputoutput: catch something...|request\n\nst->op1(right)->cond\ncond(yes, right)->c2\ncond(no)->sub1(left)->op1\nc2(yes)->io->e\nc2(no)->op2->e\n@flowend\n")])])]),n("p",[t._v("效果：")]),t._v(" "),n("FlowChart",{attrs:{id:"flowchart_382ee246",code:t.$dataBlock.flowchart_382ee246,preset:"vue"}})],1)}),[],!1,null,null,null);"function"==typeof e&&e(s);n.default=s.exports}}]);