---
title: 实现CSS等分布局
sitemap:
  exclude: false
  changefreq: hourly
date: 2023-08-03T00:00:00.000Z
tags:
  - tools
  - html
createTime: 2024/08/02 09:19:27
permalink: /article/pljjhia7/
---

在我们写界面的时候，会经常碰到此等分布局。

## 案例需求

实现如下效果：

![](https://raw.githubusercontent.com/swiftdo/pics/main/Screenshot%202023-08-03%20at%2012.29.42.png)

在此分享2个比较好的处理方法：

## flex

```html
<style>
.parent{
    display: flex;
}

.child{
    flex: 1;
    height: 100px;
}

.child + .child{
    margin-left: 20px;
}
</style>

<div class="parent" style="background-color: lightgrey;">
    <div class="child" style="background-color: lightblue;">1</div>
    <div class="child" style="background-color: lightgreen;">2</div>
    <div class="child" style="background-color: lightsalmon;">3</div>
    <div class="child" style="background-color: pink;">4</div>                
</div>
```


## grid

```css
<style>
.parent{
    display: grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:20px;
    height: 100px;
}
</style>

<div class="parent" style="background-color: lightgrey;">
    <div class="child" style="background-color: lightblue;">1</div>
    <div class="child" style="background-color: lightgreen;">2</div>
    <div class="child" style="background-color: lightsalmon;">3</div>
    <div class="child" style="background-color: pink;">4</div>                
</div> 
```



