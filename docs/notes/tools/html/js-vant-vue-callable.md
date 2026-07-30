---
title: 提升访问域：外部js调用Vue的methods中的方法
sitemap:
  exclude: false
  changefreq: hourly
date: 2023-10-11T00:00:00.000Z
tags:
  - tools
  - html
createTime: 2024/08/02 09:19:27
permalink: /article/72f1j8lq/
---

最近遇到个场景：列表页面(h5)，点击添加按钮，进入发布页面，在发布页面(h5)提交成功的时候返回到列表页面，需要主动刷新列表页面。而这个场景是在**h5与原生的混合**环境中。

![](https://raw.githubusercontent.com/swiftdo/pics/main/20231011122715.png)

场景也很简单，但是在里面的实现中，用到了vant，页面是通过 html 嵌入Vue 实现的。

返回到列表页面后，通过原生的钩子函数（viewWillAppear），原生调用 js 的 `viewUpdate` 方法：

```html
<script>
const app = Vue.createApp({
    setup() {
    
    },
    data() {
    },
    mounted() {
        
    },
    methods: {
        refreshData() {
            // 更新数据
        },
    }
);
app.use(vant);
app.mount("#app");
</script>


<script>
// 页面刷新
function viewUpdate() {
    // TODO: 怎么样调用到 refreshData
}
</script>
```

核心问题：`viewUpdate` 如何才能调用到 `refreshData`？

首先肯定不能简单的用 `app.refreshData()` 的方法，因为 `refreshData` 不是 app 的属性。

一开始我也陷入的这个圈，想通过 app 找到调用路径。**个人前端比较菜，倒腾了下直接放弃。大佬若是知道，可以私聊下，☺️**。

后面想到，viewUpdate 与 refreshData 有个共性的东西，都处在一个 window。所以很当然的想到这么个办法：

```js
const app = Vue.createApp({
    mounted() {
        // 提升访问权限到全局
        window.MyRefresh = this.refreshData;
    },
    methods: {
        refreshData() {
            // 更新数据
        },
    }
);

function viewUpdate() {
    // 因为MyRefresh数据window的属性了，可直接访问。
    MyRefresh();
}
```

所以最终问题的核心就是提升方法的访问域，而 window 是现成的，它是全局变量。


