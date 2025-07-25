---
title: 生命周期
date: 2020-09-15T00:00:00.000Z
tags:
  - flutter
sitemap:
  exclude: false
  changefreq: hourly
createTime: 2024/08/02 09:19:27
permalink: /flutter/1efa218r/
---

Flutter 的生命周期包含两部分：

* Widget 的生命周期
* App 的生命周期

## Widget 的生命周期

Flutter 里的 Widget 分为 StatelessWidget 和 StatefulWidget 两种，这两种 Widget 的生命周期是不一样的。

### StatelessWidget 的生命周期

* build 
    build 是用来创建 Widget 的，但因为 build 在每次界面刷新的时候都会调用

### StatefulWidget 的生命周期

* createState
    
    createState 是 StatefulWidget 里创建 State 的方法，当要创建新的 StatefulWidget 的时候，会立即执行 createState，而且只执行一次
* initState
    
    前面的 createState 是在创建 StatefulWidget 的时候会调用，initState 是 StatefulWidget 创建完后调用的第一个方法，而且只执行一次，类似于 Android 的 onCreate、iOS 的 viewDidLoad()，所以在这里 View 并没有渲染，但是这时 StatefulWidget 已经被加载到渲染树里了，这时 StatefulWidget 的 mount 的值会变为 true，直到 dispose 调用的时候才会变为 false。可以在 initState 里做一些初始化的操作。

* didChangeDependencies

    当 StatefulWidget 第一次创建的时候，didChangeDependencies 方法会在 initState 方法之后立即调用，之后当 StatefulWidget 刷新的时候，就不会调用了，除非你的 StatefulWidget 依赖的 InheritedWidget 发生变化之后，didChangeDependencies 才会调用，所以 didChangeDependencies 有可能会被调用多次

* build
    
    在 StatefulWidget 第一次创建的时候，build 方法会在 didChangeDependencies 方法之后立即调用，另外一种会调用 build 方法的场景是，每当 UI 需要重新渲染的时候，build 都会被调用，所以 build 会被多次调用，然后 返回要渲染的 Widget。千万不要在 build 里做除了创建 Widget 之外的操作，因为这个会影响 UI 的渲染效率。

* addPostFrameCallback

    addPostFrameCallback 是 StatefulWidge 渲染结束的回调，只会被调用一次，之后 StatefulWidget 需要刷新 UI 也不会被调用，addPostFrameCallback 的使用方法是在 initState 里添加回调。
    
    ```dart
    import 'package:flutter/scheduler.dart';
    @override
    void initState() {
      super.initState();
      SchedulerBinding.instance.addPostFrameCallback((_) => {});
    }
    ```

* didUpdateWidget

    didUpdateWidget 这个生命周期我们一般不会用到，只有在使用 key 对 Widget 进行复用的时候才会调用。
    
    
* deactivate

    当要将 State 对象从渲染树中移除的时候，就会调用 deactivate 生命周期，这标志着 StatefulWidget 将要销毁，但是有时候 State 不会被销毁，而是重新插入到渲染树中。
    
* dispose

    当 View 不需要再显示，从渲染树中移除的时候，State 就会永久的从渲染树中移除，就会调用 dispose 生命周期，这时候就可以在 dispose 里做一些取消监听、动画的操作，和 initState 是相反的。

## App 的生命周期

如果想要知道 Flutter App 的生命周期，例如 Flutter 是在前台还是在后台，就需要使用到 WidgetsBindingObserver 了，使用方法如下：

State 的类 mix WidgetsBindingObserver：

```dart
class _MyHomePageState extends State<MyHomePage> with WidgetsBindingObserver {
    ...
}
```

在 State 的 initState 里添加监听：

```dart
@override
void initState(){
    super.initState();
    WidgetsBinding.instance.addObserver(this);
}
```

在 State 的 dispose 里移除监听：

```dart
@override
void dispose() {
    // TODO: implement dispose
    super.dispose();
    WidgetsBinding.instance.removeObserver(this);
}
```

在 State 里 override didChangeAppLifecycleState

```dart
@override
void didChangeAppLifecycleState(AppLifecycleState state) {
  super.didChangeAppLifecycleState(state);
  if (state == AppLifecycleState.paused) {
    // went to Background
  }
  if (state == AppLifecycleState.resumed) {
    // came back to Foreground
  }
}
```

AppLifecycleState 就是 App 的生命周期，有：

* resumed
* inactive
* paused
* suspending
