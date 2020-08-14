---
title: 'Flutter中的通信传值'
sitemap:
  exclude: false
  changefreq: hourly
---

除了常规的通过方法参数，以及事件回调进行组件间传值外，Flutter 提供了一些更为强大的传值方式。

## InheritedWidget

InheritedWidget 是 Flutter 中非常重要的一个功能型 Widget，它可以高效的将数据在 Widget 树中向下传递、共享，这在一些需要在 Widget 树中共享数据的场景中非常方便，我们经常通过这样的方式，通过 BuildContext，可以拿到 Theme 和 MediaQuery。

在 `StatefulWidget` 中，State 对象有一个回调 `didChangeDependencies`，它会在 "依赖" 发生变化时被 Flutter Framework 调用。而这个 “依赖” 指的就是是否使用了父 widget 中 InheritedWidget 的数据，如果使用了，则代表有依赖，如果没有则代表没有依赖。这种机制可以使子组件在依赖的主题、locale 等发生变化时有机会做一些事情，比如：

```dart
//得到状态栏的高度
var statusBarHeight = MediaQuery.of(context).padding.top;
//复制合并出新的主题
var copyTheme =Theme.of(context).copyWith(primaryColor: Colors.blue);
```

### 使用 InheritedWidget

主要涉及：

* 创建一个继承自 InheritedWidget 的类，使用时将其插入 Widget 树中
* 通过 BuildContext 对象提供的 inheritFromWidgetOfExactType 方法查找 Widget 树中最近的一个特定类型的 InheritedWidget 类的实例

共享数据类：

```dart
class InheritedContext extends InheritedWidget {

  //数据
  final InheritedTestModel inheritedTestModel;

  //点击+号的方法
  final Function() increment;

  //点击-号的方法
  final Function() reduce;

  InheritedContext({
    Key key,
    @required this.inheritedTestModel,
    @required this.increment,
    @required this.reduce,
    @required Widget child,
  }) : super(key: key, child: child);

  static InheritedContext of(BuildContext context) {
    return context.inheritFromWidgetOfExactType(InheritedContext);
  }

  //是否重建widget就取决于数据是否相同
  @override
  bool updateShouldNotify(InheritedContext oldWidget) {
    return inheritedTestModel != oldWidget.inheritedTestModel;
  }
}
```

在 widget 中引入共享数据

```dart
@override
Widget build(BuildContext context) {
  return InheritedContext(
      inheritedTestModel: inheritedTestModel,
      increment: _incrementCount,
      reduce: _reduceCount,
      child: Scaffold(
        appBar: AppBar(
          title: Text('InheritedWidgetTest'),
        ),
        body: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(left: 10.0, top: 10.0, right: 10.0),
              child: Text('我们常使用的\nTheme.of(context).textTheme\nMediaQuery.of(context).size等\n就是通过InheritedWidget实现的',
                style: TextStyle(fontSize: 20.0),),
            ),
            CustomerWidgetA(),
            CustomerWidgetB(),
            CustomerWidgetC(),
          ],
        ),
      ));
}

```

在子树中获取共享值（从上向下传递）

```dart
class CustomerWidgetB extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final inheritedContext = InheritedContext.of(context);

    final inheritedTestModel = inheritedContext.inheritedTestModel;

    return Padding(
      padding: const EdgeInsets.only(left: 10.0, top: 10.0, right: 10.0),
      child: Text(
        '当前count:${inheritedTestModel.count}',
        style: TextStyle(fontSize: 20.0),
      ),
    );
  }
}
```

## Notification

Notification 跟 InheritedWidget 恰恰相反，是从子节点向父节点发送消息在 Widget 树中，每一个节点都可以分发通知，通知会沿着当前节点（context）向上传递，所有父节点都可以通过 NotificationListener 来监听通知，Flutter 中称这种通知由子向父的传递为“通知冒泡”（Notification Bubbling）。Flutter 中很多地方使用了通知，如可滚动 (Scrollable) Widget 中滑动时就会分发 ScrollNotification，而 Scrollbar 正是通过监听ScrollNotification 来确定滚动条位置的。

### 使用Notification

* 自定义通知，要继承自Notification类
* 分发通知，Notification 有一个 dispatch(context) 方法，它是用于分发通知的，我们说过 context 实际上就是操作 Element 的一个接口，它与 Element 树上的节点是对应的，通知会从 context 对应的 Element 节点向上冒泡。

自定义通知类

```dart
class CustomerNotification extends Notification {
  CustomerNotification(this.msg);
  final String msg;
}
```

调用代码：

```dart
class NotificationStudyState extends State<NotificationStudy> {
  String _msg = "";

  @override
  Widget build(BuildContext context) {
    //监听通知
    return NotificationListener<CustomerNotification>(
      onNotification: (notification) {
        setState(() {
          _msg += notification.msg + "  ";
        });
      },
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Builder(
              builder: (context) { // 需要是子树
                return RaisedButton(
                  //按钮点击时分发通知
                  onPressed: () => CustomerNotification("Hello NotificationStudy").dispatch(context),
                  child: Text("Send Notification"),
                );
              },
            ),
            Text(_msg)
          ],
        ),
      ),
    );
  }
}
```

## 组件与组件间的传值

运用 event_bus 来实现传值。

```dart
import 'package:event_bus/event_bus.dart';
```

使用的步骤：

* 新建消息监测类
* 监测类变化
* 触发消息变化

具体代码如下：

创建监测类

```dart
import 'package:event_bus/event_bus.dart';
EventBus eventBus = new EventBus();
class TransEvent{
  String text;
  TransEvent(this.text);
}
```

监测类变化

```dart
 eventBus.on<TransEvent>().listen((TransEvent data) => show(data.text));

 void show(String val) {
    setState(() {
      data = val;
    });
  }
```

触发消息变化

```dart
eventBus.fire(TransEvent('$inputText'));
```