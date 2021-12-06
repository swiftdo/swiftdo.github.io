# DI(依赖注入)

**依赖注入**是一个很重要的设计模式，它使用得非常广泛。

本文将围绕几个问题来学习这种模式：

- 什么是依赖？
- 什么是依赖倒置原则？
- 什么是依赖注入？
- 什么时候用到依赖注入？
- 依赖注入的几种常见方式？
- 依赖注入的作用

## 什么是依赖？

> 依靠别人或事物而不能自立或自给称为**依赖**

**依赖**是程序中常见的一种关系，比如类`Vehicle`中用到了`CarEngine`类的实例`engine`，通常做法就是在`Vehicle`类中显示地创建`CarEngine`类的实例，并赋值给`engine`。如下面代码：

```swift
// 赛车引擎
class RaceCarEngine {
    func move() {
        print("CarEngine 开动")
    }
}

// 车
class Vehicle {
    var engine: RaceCarEngine

    init() {
        engine = RaceCarEngine()
    }

    func forward() {
        engine.move()
    }
}

let car = Vehicle()
car.forward()
```

我们将`CarEngine`作为`Vehicle`的属性，当`car`调用`forward`方法的时候，我们就调用`engine`的`move`方法。

**存在问题**：

1. `engine`不应该是具体类，如果我们想切换成其他引擎，那么就必须修改`Vehicle`，`engine`替换其他类，不符合依赖倒转原则——依赖于抽象，不能依赖于具体实现。
2. 类`Vehicle`承担了多余的责任，负责`engine`对象创建，这必然存在耦合性。
3. 可扩展性，假设我们想修改`engine`为火箭引擎，那么我们必然要修改`Vehicle`这个类，明显不符合开闭原则。
4. 不方便单元测试。如果想测试不同`engine`对`Vehicle`的影响很困难，因为`engine`的初始化被写死在了`Vehicle`的构造函数中

## 什么是依赖倒置原则(DIP)？

依赖倒置原则，英文缩写 DIP，全称`Dependence Inversion Principle`。

> High level modules should not depend upon low level modules. Both should depend upon abstractions. Abstractions should not depend upon details. Details should depend upon abstractions。

高层模块不应该依赖低层模块，两者都应该依赖其抽象；**抽象不应该依赖细节，细节应该依赖抽象**。

所以 `Vehicle` 不能直接依赖 `RaceCarEngine`，我们需要给引擎定义一个规则，抽象成一个协议：

```swift
protocol Propulsion {
    func move()
}

class RaceCarEngine: Propulsion {
    func move() {
        print("CarEngine 开动")
    }
}

// 车
class Vehicle {
    var engine: Propulsion

    init() {
        engine = RaceCarEngine()
    }

    func forward() {
        engine.move()
    }
}
```

但是这就符合 DIP 了么？答案是没有，为什么？

因为在 `init()` 方法中，用 `RaceCarEngine` 具体类去初始化 `engine`，这也是一种依赖。这就造成，很难在没有 `RaceCarEngine` 类的情况下使用 `Vehicle` 类。

那么怎样才能解决这个问题？**依赖注入**闪亮登场。

## 什么是依赖注入？

如果模块 A 调用了模块 B 的方法，那么就认为模块 A 依赖于模块 B，模块 A 与模块 B 发生了耦合。在软件工程中，设计的核心思想：**尽可能减少代码耦合，采取解耦技术把关联依赖降到最低，而不至于牵一发而动全身**。

在 `Vehice` 类中如何通过依赖注入来改进代码？代码如下：

```swift
class Vehicle {
    var engine: Propulsion

    init(engine: Propulsion) {
        self.engine = engine
    }

    func forward() {
        engine.move()
    }
}
```

我们现在没有直接在 Vechicle 的 `init()` 函数中用 `RaceCarEngine` 去初始化 `engine`，而是通过给`init`添加一个 Propulsion 类型的 engine 形参，用这个形参去初始化 engine。

虽然这改动非常小，但是效果是非常显著的，因为`Vehicle` 再也不需要和`RaceCarEngine`类直接产生关系。

然后我们的调用代码：

```swift
let raceCarEngine = RaceCarEngine()
var car = Vehicle(engine: raceCarEngine)
car.forward()
```

raceCarEngine 对象是从外部注入到 `Vehicle` 对象中。**这就是依赖注入**。这两个类仍然相互依赖，但它们不在紧密耦合——可以使用其中一个而不需要另一个。

> Dependency injection means giving an object its instance variables.(依赖注入就是将实例变量传入到一个对象中去)

通过依赖注入，显然提高了代码的可扩展性。我们可以轻松地将`RaceCarEngine`引擎换成`RocketEngine`引擎：

```swift
class RocketEngine: Propulsion {
    func move() {
        print("3-2-1... RocketEngine 发动")
    }
}

let rocket = RocketEngine()
var car = Vehicle(engine: rocket)
car.forward()
```

## 什么时候用到依赖注入？

依赖注入在以下场景中很有用：

- 更改您无权访问的代码的实现
- 在开发过程中“模拟”或伪造代码中的行为
- 对代码进行单元测试

## 依赖注入的方法

- 构造函数注入：通过初始化`init()`提供依赖

  ```swift
  let rocket = RocketEngine()
  var car = Vehicle(engine: rocket)
  ```

- 属性注入：通过属性（或 setter）提供依赖，iOS 框架中有很多属性注入模式，`Delegate` 模式通常是这样实现的。

  ```swift
  let rocket = RocketEngine()
  var car = Vehicle()
  car.engine = rocket
  ```

- 方法注入，将依赖项作为方法参数传递

  ```swift
  let rocket = RocketEngine()
  car.setEngine(rocket)
  ```

## 实战

让我们看一个使用`Repository`对象获取数据的`Service`类的示例：

```swift

struct Article: Equatable {
    let title: String
}

class Basket {
    var articles = [Article]()
}


protocol Repository {
    func getAll() -> [Article]
}

class Service {
    private let repository: Repository

    init(repository: Repository) {
        self.repository = repository
    }

    func addArticles(to basket: Basket) {
        let allArticles = repository.getAll()
        basket.articles.append(contentsOf: allArticles)
    }
}
```

我们通过给 `Service` 注入注入了一个 repository，这样 service 就不需要知道所使用的文章是如何提供的。这些文章可能来自从本地 JSON 文件读取，或从本地数据库检索，又或者是从服务器通过请求获取。我们可以注入`mocked`的 repository，通过使用`mocked`的数据使得测试更具可预测性。

```swift

class MockRepository: Repository {
    var articles: [Article]

    init(articles: [Article]) {
        self.articles = articles
    }

    override func getAll() -> [Article] {
        return articles
    }
}

class ServiceTests: XCTestCase {

    func testAddArticles() {
        let expectedArticle = Article(title: "测试文章")
        let mockRepository = MockRepository(articles: [expectedArticle])

        let service = Service(repository: mockRepository)
        let basket = Basket()

        service.addArticles(to: basket)

        XCTAssertEqual(basket.articles.count, 1)
        XCTAssertEqual(basket.articles[0], expectedArticle)
    }
}
```

我们首先创建了一个模拟的`expectedArticle`对象，然后注入到的 MockRepository 对象中，通过 2 个`XCTAssertEqual`以检查我们的`Sercice`是否按预期工作。

构造函数依赖注入确实是一个不错的注入方式，但是也有些不便问题：

```swift
class BasketViewController: UIViewController {
    private let service: Service

    init(service: Service) {
        self.service = service
    }
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa453d2c9b134d03a21ff778cbc15925~tplv-k3u1fbpfcp-zoom-1.image)

写了新的构造函数，我们需要额外的做些处理。

但是如何在不重写默认构造函数的情况下使用依赖注入呢？

我们可以通过属性注入的方式：

```swift
class BasketViewController: UIViewController {
    var service: Service!
}

class DataBaseRepository: Repository {
    override func getAll() -> [Article] {
        // TODO：从数据库中查找数据
        return [Article(title: "测试数据")]
    }
}

let basketViewController = BasketViewController()
let repository = DataBaseRepository()
let service = Service(repository: repository)
basketViewController.service = Service()
```

基于属性注入的方式也有不完美的地方：属性的访问权限被放大，不能将他们定义为私有了。

不管是属性注入，还是构造函数注入，都包含了 2 个工作：

- 创建 `Service` 和 `BasketViewController` 的实例
- 完成 `Service` 与 `BasketViewController` 的依赖关系

因此这里又出现一个潜在的问题，就是当要更换`Service`的时候，又需要去更改这些创建实例的代码。如果有多处地方跳转到 `BasketViewController`，那么这类代码就得多处修改。因此可以将这两个工作移交给一个独立组件去完成，它的职责就是完成对象的创建以及对象之间的依赖关系的维护和管理。很多人想到这个组件可以用[工厂模式](https://www.swiftbysundell.com/articles/dependency-injection-using-factories-in-swift/)进行设计，这是可取的，但是本文将封装成类似 SwiftUI 中的 `@Environment` 的设计。

我们的设计目标就是：

```swift
class BasketService {
    @Injected(\.repository) var repository: Repository

    func addArticles(to basket: Basket) {
        let allArticles = repository.getAll()
        basket.articles.append(contentsOf: allArticles)
    }
}

class BasketViewController: UIViewController {
    private var basket = Basket()
    @Injected(\.service) var service: BasketService

    func loadArticles() {
        service.addArticles(to: basket)

        print(basket.articles)
    }
}

let vc = BasketViewController()
vc.loadArticles()
```

最终完整代码：

```swift
struct Article: Equatable {
    let title: String
}

class Basket {
    var articles = [Article]()
}

protocol Repository {
    func getAll() -> [Article]
}

class DataBaseRepository: Repository {
    override func getAll() -> [Article] {
        // TODO：从数据库中查找数据
        return [Article(title: "测试数据")]
    }
}

public protocol InjectionKey {
    associatedtype Value
    static var currentValue: Self.Value {get set}
}

/// 提供获取依赖
struct InjectedValues {
    private static var current = InjectedValues()

    static subscript<K>(key: K.Type) -> K.Value where K : InjectionKey {
        get { key.currentValue }
        set { key.currentValue = newValue }
    }

    static subscript<T>(_ keyPath: WritableKeyPath<InjectedValues, T>) -> T {
        get { current[keyPath: keyPath] }
        set { current[keyPath: keyPath] = newValue }
    }
}

@propertyWrapper
struct Injected<T> {
    private let keyPath: WritableKeyPath<InjectedValues, T>
    var wrappedValue: T {
        get { InjectedValues[keyPath] }
        set { InjectedValues[keyPath] = newValue }
    }

    init(_ keyPath: WritableKeyPath<InjectedValues, T>) {
        self.keyPath = keyPath
    }
}

private struct RepositoryKey: InjectionKey {
    static var currentValue: Repository = DataBaseRepository()
}

private struct ServiceKey: InjectionKey {
    static var currentValue: BasketService = BasketService()
}

extension InjectedValues {
    var repository: Repository {
        get {Self[RepositoryKey.self]}
        set {Self[RepositoryKey.self] = newValue}
    }

    var service: BasketService {
        get { Self[ServiceKey.self] }
        set {Self[ServiceKey.self] = newValue}
    }
}

class BasketService {
    @Injected(\.repository) var repository: Repository

    func addArticles(to basket: Basket) {
        let allArticles = repository.getAll()
        basket.articles.append(contentsOf: allArticles)
    }
}


class BasketViewController: UIViewController {
    private var basket = Basket()
    @Injected(\.service) var service: BasketService

    func loadArticles() {
        service.addArticles(to: basket)

        print(basket.articles)
    }
}

let vc = BasketViewController()
vc.loadArticles()
```

结果输出：

```shell
[__lldb_expr_388.Article(title: "测试数据")]
```

## 参阅

- [Inversion of Control Containers and the Dependency Injection pattern](https://martinfowler.com/articles/injection.html#InversionOfControl)
