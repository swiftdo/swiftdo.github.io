(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{768:function(t,e,a){"use strict";a.r(e);var r=a(8),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Flutter Widget 截屏，将图片保存在本地并且实现图片分享的功能。")]),t._v(" "),a("h2",{attrs:{id:"repaintboundary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repaintboundary"}},[t._v("#")]),t._v(" RepaintBoundary")]),t._v(" "),a("p",[t._v("Flutter 提供了支持截屏的 RepaintBoundary，在需要截取部分的外层嵌套，也可以截取某一子 Widget 内容；RepaintBoundary 的结构很简单，通过 key 来判断截取的 RenderObject，最终生成一个 RenderRepaintBoundary 对象；")]),t._v(" "),a("p",[t._v("RenderRepaintBoundary 是一个对象缓存着 widget 的 UI data 信息，当 viewTree 要重绘的时候，可以提高绘制效率。")]),t._v(" "),a("h2",{attrs:{id:"ui-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-image"}},[t._v("#")]),t._v(" ui.Image")]),t._v(" "),a("p",[t._v("通过 RenderRepaintBoundary 获取的对象 .toImage() 的方法，对 widget 进行截屏，并输出其当前的 UI data，返回的 ui.Image 是原始的 RGBA bytes，pixelRatio 参数可以设置要输出图片的分辨率，默认一倍图，可根据情况调整。")]),t._v(" "),a("p",[t._v("toByteData() 生成的数据格式一般分三种：")]),t._v(" "),a("ul",[a("li",[t._v("rawRgba：未解码的 byte；")]),t._v(" "),a("li",[t._v("rawUnmodified：未解码且未修改的 byte，如灰度图；")]),t._v(" "),a("li",[t._v("png 为我们常用的 PNG 图片；")])]),t._v(" "),a("h2",{attrs:{id:"directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory"}},[t._v("#")]),t._v(" Directory")]),t._v(" "),a("p",[t._v("若需要存储本地，跟 Android/iOS 类似，首先获取存储路径，再进行存储操作；小菜借助三方插件 path_provider 来获取图片路径；")]),t._v(" "),a("p",[a("strong",[t._v("path_provider")]),t._v(" 提供了 getTemporaryDirectory（临时路径） / getApplicationDocumentsDirectory（全局路径）等，可以根据不同的需求存储不同路径；")]),t._v(" "),a("h2",{attrs:{id:"writeasbytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writeasbytes"}},[t._v("#")]),t._v(" writeAsBytes")]),t._v(" "),a("p",[t._v("文件的保存很简单，直接将 Uint8List 写入到所在文件路径下即可；")])])}),[],!1,null,null,null);e.default=i.exports}}]);