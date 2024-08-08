---
sitemap:
  exclude: false
  changefreq: hourly
title: '@FunctionalInterface、Lambda表达式'
date: 2024-8-8
tags:
- java
---

Java语言从JDK1.8开始引入了函数式编程。

函数式编程的核心特点是，函数作为一段功能代码，可以像变量一样进行引用和传递，以便在有需要的时候进行调用。


## @FunctionalInterface与“函数类型”



Java对函数式编程的支持，本质是通过接口机制来实现的。

函数式接口(Functional Interface)就是一个有且仅有一个抽象方法，但是可以有多个非抽象方法的接口。


首先定义一个仅声明一个方法的接口，然后对接口冠以@FunctionalInterface注解，那么这个接口就可以作为“函数类型”，可以接收一段以Lambda表达式，或者方法引用予以承载的逻辑代码。例如：

```java
@FunctionalInterface
interface IntAdder {
    int add(int x, int y);
}

IntAdder adder = (x, y) -> x + y;
```

@FunctionalInterface下只能声明一个方法，覆写Object中toString/equals的方法不受此个数限制。

```java
// Comparator.java
@FunctionalInterface
public interface Comparator<T> {
    int compare(T o1, T o2);
    boolean equals(Object obj);
    //...
}
```

@FunctionalInterface注解不是必须的，不加这个注解的接口（前提是只包含一个方法）一样可以作为函数类型。不过，显而易见的是，加了这个注解表意更明确、更直观，是更被推荐的做法


## JDK提供的“函数类型”:

```java
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t); //接收一个类型为T（泛型）的参数，无返回值；所以叫消费者
}
@FunctionalInterface
public interface BiConsumer<T, U> {
    void accept(T t, U u);//接收2个参数，无返回值
}
@FunctionalInterface
public interface Supplier<T> {
    T get();//无参数，有返回值（所以叫提供者）
}
//注意没有BiSupplier，因为返回值只能有1个，不会有2个
@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);//一个输入（参数），一个输出（返回值）
}
@FunctionalInterface
public interface BiFunction<T, U, R> {
    R apply(T t, U u);//两个输入T和U，一个输出R
}
@FunctionalInterface
public interface UnaryOperator<T> extends Function<T, T> {
    static <T> UnaryOperator<T> identity() {//一元操作，输入原样返回给输出
        return t -> t;
    }
}
@FunctionalInterface
public interface BinaryOperator<T> extends BiFunction<T,T,T> {//二元操作，输入输出类型相同
    public static <T> BinaryOperator<T> minBy(Comparator<? super T> comparator) {
        Objects.requireNonNull(comparator);
        return (a, b) -> comparator.compare(a, b) <= 0 ? a : b;//传入比较器，返回较小者
    }
    public static <T> BinaryOperator<T> maxBy(Comparator<? super T> comparator) {
        Objects.requireNonNull(comparator);
        return (a, b) -> comparator.compare(a, b) >= 0 ? a : b;//传入比较器，返回较大者
    }
}
```

## Lambda表达式

Lambda表达式用来定义函数实现体。

```java
//无返回值的时候
(int x)->{System.out.println(x);}
(x)->{System.out.println(x);}//参数类型自动推断
x->{System.out.println(x);}//只有一个参数的时候，可以省略小括号
x->System.out.println(x);//实现体只有一个表达式可以省略大括号,System.out.println本身无返回值
//有返回值的情况
(int x)->{return x*x;}
(x)->{return x*x;}
//x->return x*x; //错误，不能这么写!!
x->x*x;
```

## 方法引用

函数类型可以接收一段Lambda表达式，或者对方法的引用。

方法引用就是对一个类中已经存在的方法加以引用，分4中类型：（以Test类为例）:

1. 对类构造方法的引用，如Test::new。
2. 对类静态方法的引用，如Test::staticMethodName
3. 对对象实例方法的引用，如：new Test()::instanceMethod
4. 是2和3的结合，如Test::instanceMethod2，但要求函数类型声明和函数调用的时候，其第一个参数必须是Test类的实例。





