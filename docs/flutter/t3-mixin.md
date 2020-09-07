---
title: '分离 View 与 Model 方案之 mixin'
date: 2020-09-03
tags:
- flutter
sitemap:
  exclude: false
  changefreq: hourly
---
先来看一下官方的那个原始的 Counter 例子:

```dart
class _MyHomePageState extends State<MyHomePage> {

  int _counter = 0;
  
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), 
    );
  }
}
```

可以看到，在这个`_MyHomePageState`类中，`View`与`Model`混合在一起。如果页面比较复杂的话，类就变得臃肿且`State`更加难以管理。

为了将`View`与`Model`分离，可以采取`mixin`这种办法(之一)。

对上面的代码改造后如下：

```dart
mixin _CounterStateMixin < T extends StatefulWidget> on State<T> {
  int _counter = 0;
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

}

class _MyHomePageState extends State<MyHomePage> with _CounterStateMixin {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Mixin, You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}

```

* 首先新建一个 `mixin`,这里命名为 `_CounterStateMixin`;
* 把原来 `State` 中的 `_counter` 和`_incrementCounter()` 挪到 `_CounterStateMixin` 里。
* 然后原来混入 `_CounterStateMixin`

这样就把 View 和 Model 分开了，View 相关的逻辑都在 State 中，而 Model 相关的逻辑则都在 `StateMixin` 里。

## 优点

**简单**：

不需要引入第三方库，如果用MVP或者其他方式来实现解耦的话很可能需要多创建几个类，写很多模板代码，甚至需要IDE插件的帮助。

**副作用小**：

使用 mixin，运行时可以认为完全和原来那个 State 是一致的，与生命周期相关的函数如 initState()，didUpdateWidget()，dispose() 等都可以在 mixin 中覆写。如果使用 MVP 的话可能需要自己处理State 的生命周期，否则有可能会遇到内存泄漏或者空指针等问题。mixin 是对 State 的扩展，所以也会继承其局限性(可以考虑通过拆分Widget，接入状态管理等方法来解决）。

**复用**：

拆出来的 `StateMixin` 是可以复用的。例如你想在页面上放两个功能相同但是显示不一样的 counter，让两个State 都混入同一个 `_CounterStateMixin` 就可以了

## mixin 额外小技巧

```dart
mixin AfterLayoutMixin<T extends StatefulWidget> on State<T> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => afterFirstLayout(context));
  }

  void afterFirstLayout(BuildContext context);
}

class HomeScreenState extends State<HomeScreen> with AfterLayoutMixin<HomeScreen> {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(body: new Container(color: Colors.red));
  }

  @override
  void afterFirstLayout(BuildContext context) {
    // Calling the same function "after layout" to resolve the issue.
    showHelloWorld();
  }

  void showHelloWorld() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
            content: Text('Hello World'),
            actions: <Widget>[
              FlatButton(
                child: Text('取消'),
                onPressed: () => Navigator.of(context).pop(),
              )
            ],
          ),
    );
  }
}
```

在显示第一帧之后，提供执行方法的功能。


















