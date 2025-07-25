---
sitemap:
  exclude: false
  changefreq: hourly
title: 自定义组件
date: 2024-08-02T00:00:00.000Z
tags:
  - vue
createTime: 2024/08/02 09:41:07
permalink: /vue/lpj9r3z1/
---

学习如何自定义一个组件

## 定义个组件

```html

<div id="Application">
    <my-alert></my-alert>
</div>


<script>
    const App = Vue.createApp({})

    const alertComponent = {
        data() {
            return {
                msg: "alert",
                count: 0
            }
        },
        methods: {
            click() {
                alert(this.msg + this.count++)
            }
        },
        template: '<div><button @click="click">按钮</button></div>'
    } 
    App.component("my-alert", alertComponent)
    App.mount("#Application")
</script>
```


## 传值

props是properties的缩写，意思为属性。

props选项用来定义自定义组件内的外部属性，组件可以定义任意多个外部属性。

props可以进行许多复杂的配置，例如类型检查，默认值等。

定义title外部属性：

```html

<div id="Application">
    <my-alert title='自定义按钮'></my-alert>
</div>

<script>
    const App = Vue.createApp({})

    const alertComponent = {
        data() {
            return {
                msg: "alert",
                count: 0
            }
        },
        methods: {
            click() {
                alert(this.msg + this.count++)
            }
        },
        props: ["title"]
        template: '<div><button @click="click">{{title}}</button></div>'
    } 
    App.component("my-alert", alertComponent)
    App.mount("#Application")
</script>
```

## 组件事件

在开发组件的时候，需要进行事件传递的场景不少见。

将其中按钮单击的时间传递给父组件处理，即传递给使用此组件的业务方处理。

可以使用内建的`$emit`方法来传递事件


```js

<div id="Application">
    <my-alert title='自定义按钮' @myclick="appfunc"></my-alert>
</div>

<script>
    const App = Vue.createApp({
        methods: {
            appfunc(param) {
                console.log('点击了自定义组件：' + param)
            }
        }
    })

    const alertComponent = {
        data() {
            return {
                msg: "alert",
                count: 0
            }
        },
        methods: {
            click() {
                // 触发事件，并传值
               this.$emit('myclick', this.title); 
            }
        },
        props: ["title"]
        template: '<div><button @click="click">{{title}}</button></div>'
    } 
    App.component("my-alert", alertComponent)
    App.mount("#Application")
</script>
```

## 内容双向绑定


## 自定义插槽


## 生命周期

## 属性进阶

属性验证














