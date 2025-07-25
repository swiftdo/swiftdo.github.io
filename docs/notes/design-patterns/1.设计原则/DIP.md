---
title: 依赖倒转原则
createTime: 2024/09/25 17:05:01
permalink: /design-patterns/3v4iwa34/
---
# 依赖倒转原则

依赖倒转原则（Dependency Inversion Principle，DIP）的定义：程序要依赖于抽象接口，不要依赖于具体实现。简单的说就是要求对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合。

## 依赖倒转原则的意义

依赖倒转原则要求我们在程序代码中传递参数时或在关联关系中，尽量引用层次高的抽象层类，即使用接口和抽象类进行变量类型声明、参数类型声明、方法返回类型声明，以及数据类型的转换等，而不要用具体类来做这些事情。为了确保该原则的应用，一个具体类应当只实现接口或抽象类中声明过的方法，而不要给出多余的方法，否则将无法调用到在子类中增加的新方法。在引入抽象层后，系统将具有很好的灵活性，在程序中尽量使用抽象层进行编程，而将具体类写在配置文件中，这样一来，如果系统行为发生变化，只需要对抽象层进行扩展，并修改配置文件，而无须修改原有系统的源代码，在不修改的情况下来扩展系统的功能，满足开闭原则的要求。

## 依赖倒转原则的注意事项

- 高层模块不应该依赖低层模块，高层模块和低层模块都应该依赖于抽象。
- 抽象不应该依赖于具体，具体应该依赖于抽象。

在实现依赖倒转原则时，我们需要针对抽象层编程，而将具体类的对象通过依赖注入(DependencyInjection, DI)的方式注入到其他对象中，依赖注入是指当一个对象要与其他对象发生依赖关系时，通过抽象来注入所依赖的对象。常用的注入方式有三种，分别是：构造注入，设值注入（Setter 注入）和接口注入。

依赖倒转原则的本质就是：面向接口(抽象)编程。

- 每个具体的类都应该有其接口或者基类，或者两者都具备。
- 类中的引用对象应该是接口或者基类。
- 任何具体类都不应该派生出子类。
- 尽量不要覆写基类中的方法。
- 结合里氏代换原则使用。

遵循依赖倒转原则的一个例子，场景是司机开车：

```swift
protocol Car {
    func run()
}

protocol Driver {
    func drive()
    var car: Car {get set}
}

class DefaultDriver: Driver {
    var car: Car

    init(car: Car) {
        self.car = car
    }


    func drive() {
        car.run()
    }
}

class Bmw: Car {

    func run() {
        print("Bmw runs...")
    }
}

class Benz: Car {
    func run() {
        print("Benz runs...")
    }
}


var car: Car = Benz()
var driver: Driver = DefaultDriver(car: car)
driver.drive()

car = Bmw()
driver.car = car
driver.drive()
```

这样实现了一个司机可以开各种类型的车，如果还有其他类型的车，只需要新加一个 Car 的实现即可。
