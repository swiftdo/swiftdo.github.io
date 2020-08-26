---
title: 'Flex 布局'
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17
tags:
- tools
- html
---

## 概览

![flex布局](http://blog.loveli.site/mweb/flex%E5%B8%83%E5%B1%80.png)

## 类型 

* display: flex; (本文章为此为主)
* display: inline-flex;

两者区别主要是父容器的宽度，flex 是 100%，而 inline-flex 会根据子元素的宽度适应。

## 父节点容器

1. flex-direction         主轴方向(一般水平方向)
2. flex-warp              处理一行排列不足的问题
3. flex-flow              1和2的简写（flex-flow: row nowrap）
4. justify-content        主轴(水平方向)对齐方式
5. align-items            与主轴的交叉轴（竖方向）对齐方式
6. align-content          多行在交叉轴轴上的对齐方式

```html
<div class="flex-box">
    <div class="flex-item red">
      1
    </div>
    <div class="flex-item green">
      2
    </div>
    <div class="flex-item yellow">
      3
    </div>
    <div class="flex-item black">
      4
    </div>
</div>
```

```css
html,body{
    background: #f7f7f7;
}
.flex-box{
    display: flex
    color: #fff;
}
.flex-item{
    width: 150px;
    height: 100px;
}
.red{
    background: red;
}
.green{
    background: green;
}
.yellow{
    background: yellow;
}
.black{
    background: black;
}
```

![](http://blog.loveli.site/mweb/15982325892669.jpg)


### flex-direction

决定主轴(一般是x轴)的方向，即项目排列的方向，有四个可能的值：row(默认) | row-reverse | column | column-reverse

* row: 主轴为水平方向，项目沿主轴从左至右排列
* column：主轴为竖直方向，项目沿主轴从上至下排列
* row-reverse：主轴水平，项目从右至左排列，与row反向
* column-reverse：主轴竖直，项目从下至上排列，与column反向

```css
.flex-box{
    display: flex;
    height: 100px;
    flex-direction: row; /* 1 */
    flex-direction: row-reverse; /*  2 */
    flex-direction: column; /*  3 */
    flex-direction: column-reverse;/* 4*/
    color: #fff;
}
.flex-item{
  flex: 1
}
```


| Css | 样式 |
|-----|----|
|   row |  ![](http://blog.loveli.site/mweb/15982326751549.jpg)  |
| row-reverse | ![](http://blog.loveli.site/mweb/15982326820811.jpg)|
| column | ![](http://blog.loveli.site/mweb/15982329129423.jpg)|
| column-reverse | ![](http://blog.loveli.site/mweb/15982329203547.jpg)|
 
### flex-warp         

默认情况下，item排列在一条线上，即主轴上，flex-wrap决定当排列不下时是否换行以及换行的方式，可能的值nowrap(默认) | wrap | wrap-reverse

* nowrap：自动缩小项目，不换行
* wrap：换行，且第一行在上方
* wrap-reverse：换行，第一行在下面

```csss
.flex-box{
  display: flex;
  color: #fff;
  flex-wrap: nowrap; /* 1 */
  flex-wrap: wrap; /* 2 */
  flex-wrap: wrap-reverse; /* 3 */
}
.flex-item{
  width: 150px;
  height: 100px;
}
.red{
  width: 300px;
}
```

| Css | 样式 |
|-----|----|
| nowrap | ![](http://blog.loveli.site/mweb/15983153641314.jpg) |
| wrap | ![](http://blog.loveli.site/mweb/15983153721998.jpg)|
| wrap-reverse | ![](http://blog.loveli.site/mweb/15983153849881.jpg) |

### flex-flow    
是flex-direction和flex-wrap的简写形式，如：row wrap | column wrap-reverse等。默认值为row nowrap，即横向排列不换行。 

```css
.flex-box{
  flex-flow: row nowrap;
}
```
  
### justify-content

非常重要，决定item在主轴上的对齐方式，可能的值有flex-start（默认），flex-end，center，space-between，space-around。

当主轴沿水平方向时，具体含义为

* flex-start：左对齐
* flex-end：右对齐
* center：居中对齐
* space- between：两端对齐
* space-around：沿轴线均匀分布

```css
.flex-box{
  justify-content: flex-start; /* 1 */
  justify-content: flex-end; /* 2 */
  justify-content: center; /* 3 */
  justify-content: space-between; /* 4 */
  justify-content: space-around; /* 5 */
}
.flex-item{
    width: 50px;
    height:50px;
}
```

| Css | 样式 |
|-----|----|
| flex-start | ![](http://blog.loveli.site/mweb/15983160606122.jpg) |
| flex-end | ![](http://blog.loveli.site/mweb/15983160715998.jpg) |
| center | ![](http://blog.loveli.site/mweb/15983160807645.jpg)|
| space-between | ![](http://blog.loveli.site/mweb/15983160872355.jpg) |
| space-around | ![](http://blog.loveli.site/mweb/15983160936471.jpg) |

### align-items

决定了item在交叉轴上(Y轴)的对齐方式，可能的值有flex-start | flex-end | center | baseline | stretch

当主轴水平(Y轴)时，其具体含义为：

* flex-start：顶端对齐
* flex-end：底部对齐
* center：竖直方向上居中对齐
* baseline：item第一行文字的底部对齐
* stretch：当item未设置高度时，item将和容器等高对齐

```css
.flex-box{
  height: 200px;
  align-items: flex-start; /* 1 */
  align-items: flex-end; /* 2 */
  align-items: center; /* 3 */
  align-items: baseline; /* 4 */
  align-items: stretch; /* 5 */
}
.flex-item{
  height: 100px;
}
.red, .green{
  font-size: 14px;
}
```

| Css | 样式 |
|-----|----|
| flex-start | ![](http://blog.loveli.site/mweb/15983162613793.jpg) |
| flex-end | ![](http://blog.loveli.site/mweb/15983162714821.jpg) |
| center | ![](http://blog.loveli.site/mweb/15983162794504.jpg) |
| baseline | ![](http://blog.loveli.site/mweb/15983162873501.jpg) |
| stretch | ![](http://blog.loveli.site/mweb/15983162952586.jpg) |


### align-content

该属性定义了当有多根主轴时，即item不止一行时，多行在交叉轴轴上的对齐方式。注意当有多行时，定义了align-content后，align-items属性将失效。

align-content可能值含义如下（假设主轴为水平方向）：

* flex-start：左对齐
* flex-end：右对齐
* center：居中对齐
* space- between：两端对齐
* space-around：沿轴线均匀分布
* stretch：各行将根据其flex-grow值伸展以充分占据剩余空间

> 1、设置flex-wrap：wrap，不然默认 nowrap 按照比例排满一行。
>  2、父节点 flex-box 与子节点 flex-item 存在高度差，才能起到作用

```css
.flex-box{
  flex-wrap: wrap;
  height:300px;
  background: #969799;
  align-content: flex-start; /* 1 */
  align-content: flex-end; /* 2 */
  align-content: center; /* 3 */
  align-content: space-between; /* 4 */
  align-content: space-around; /* 5 */
  align-content: stretch; /* 6 */
}
```

| Css | 样式 |
|-----|----|
| flex-start | ![](http://blog.loveli.site/mweb/15983166275047.jpg) |
| flex-end | ![](http://blog.loveli.site/mweb/15983166371707.jpg) |
| center | ![](http://blog.loveli.site/mweb/15983166470101.jpg) |
| space-between | ![](http://blog.loveli.site/mweb/15983168333538.jpg) |
| space-around | ![](http://blog.loveli.site/mweb/15983168422253.jpg) |
| stretch | ![](http://blog.loveli.site/mweb/15983168507008.jpg)|

## 子节点项目

1. order                          值是整数，默认为0，整数越小，item排列越靠前
2. flex-grow                      是其他item的放大倍数
3. flex-shrink                    但空间不足，按照比例被消化, 需在父节点容器中设置flex-basis宽度
4. flex-basis                     规定item项目的宽度
5. flex                           是flex-grow flex-shrink flex-basis的总和
6. align-self                     允许item自己在交叉轴(竖方向)有对齐方式


### order

order 的值是整数，默认为 0，整数越小，item 排列越靠前。

```css
.flex-box {
  flex-flow: wrap;
}

.flex-items {
  order:1;
}
```

### flex-grow

定义了当 flex 容器有多余空间时，item是否放大。默认值为 0，即当有多余空间时也不放大；可能的值为整数，表示不同 item 的放大比例。

如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。
如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

![](http://blog.loveli.site/2020-08-26-15984468078894.jpg)



### flex-shrink

定义了当容器空间不足时，item是否缩小。默认值为 1，表示当空间不足时，item 自动缩小，其可能的值为整数，表示不同 item 的缩小比例。

如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。
如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

![](http://blog.loveli.site/2020-08-26-15984469356935.jpg)

### flex-basis

定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟 width 或 height 属性一样的值（比如350px），则项目将占据固定空间。

### flex

flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

### align-self

允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

* auto：和父元素align-self的值一致
* flex-start：顶端对齐
* flex-end：底部对齐
* center：竖直方向上居中对齐
* baseline：item第一行文字的底部对齐
* stretch：当item未设置高度时，item将和容器等高对齐
