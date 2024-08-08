---
sitemap:
  exclude: false
  changefreq: hourly
title: 'String[]和List<String>'
date: 2024-8-8
tags:
- java
---

## 区别

* String[]数组里面是存放String型的值，List<String>是存放String类型的对象。

* String[]是 数组，定长，不可变
* List<String> 是泛型 ，非定长，可变

## String[]和List的互换

String[]转List：

```java
List<String> list = Arrays.asList(arr);
```


List转String[]：

```
String[] arr = list.toArray(new String[list.size()]);
```

## ArrayList和List

* List是一个接口，而ArrayList是一个类，它实现了List接口。
* 两者都是集合



