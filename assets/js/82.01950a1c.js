(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{739:function(e,t,i){"use strict";i.r(t);var l=i(8),v=Object(l.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"必备要点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#必备要点"}},[e._v("#")]),e._v(" 必备要点")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Flutter 启动流程和渲染管线？")])]),e._v(" "),i("li",[i("p",[e._v("为什么要用 key ?")])]),e._v(" "),i("li",[i("p",[e._v("Widget 更新机制?")]),e._v(" "),i("ul",[i("li",[e._v("Widget 只是一个配置且无法修改，Element 才是真正被使用的对象，且可以修改")]),e._v(" "),i("li",[e._v("当新的 Widget 到来时将会 canUpdate 方法，来确定这个 Element 是否需要更新")]),e._v(" "),i("li",[e._v("canUpdate 对两个（新老） Widget 的 runtimeType 和 key 进行比较，从而判断出当前的 Element 是否需要更新。若 canUpdate 方法返回 true 说明不需要替换 Element，直接更新 Widget 就可以了。")])])]),e._v(" "),i("li",[i("p",[e._v("widget rebuild 了，一定会刷新么")])]),e._v(" "),i("li",[i("p",[e._v("Flutter Stateless vs Stateful Widget vs Inherited widget")]),e._v(" "),i("ul",[i("li",[e._v("生命周期")]),e._v(" "),i("li",[e._v("Stateless 它只能通过构造函数传入的数据来控制如何显示")])])]),e._v(" "),i("li",[i("p",[e._v("State 的生命週期")]),e._v(" "),i("ul",[i("li",[e._v("StatefulWidget 呼叫 createState 建立 State 時，mounted 為 true。")]),e._v(" "),i("li",[e._v("initState()：第一次建立 State 時，進行一次性的初始化。")]),e._v(" "),i("li",[e._v("didChangeDependencies()：在這裏進行 InheritedWidget 有關聯的初始化。")]),e._v(" "),i("li",[e._v("build()：在每次更新畫面時都會呼叫；以及呼叫 setState() 更新 state 時。")]),e._v(" "),i("li",[e._v("didUpdateWidget()：當父 Widget 重新建立子 Widget 時，以顯示含有相同的 runtimeType 以及 Ｗ idget.key 的 Ｗ idget 時。")]),e._v(" "),i("li",[e._v("deactive()：父 Widget 刪除了子 Ｗ idget 時呼叫。")]),e._v(" "),i("li",[e._v("dispose()：最後，當 Ｗ idget 被銷毀前，會呼叫 dispose()。")]),e._v(" "),i("li",[e._v("最後，mounted 為 false。")])])]),e._v(" "),i("li",[i("p",[e._v("Flutter 的三棵树")]),e._v(" "),i("ul",[i("li",[e._v("framework 层的重要组成部分，Widget 树用来描述 UI 的配置信息，Element 树连接 配置信息和 UI 渲染的，而 RenderObject 负责根据配置信息去真正的进行 UI 渲染")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);