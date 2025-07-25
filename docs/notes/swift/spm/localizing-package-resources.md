---
title: 包资源本地化
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-05-08T00:00:00.000Z
tags:
  - swift
  - ios
  - spm
createTime: 2024/08/02 09:19:27
permalink: /swift/e0rubu7x/
---

> 原文：[https://developer.apple.com/documentation/swift_packages/localizing_package_resources](https://developer.apple.com/documentation/swift_packages/localizing_package_resources)

确保您的 Swift 包为许多语言环境提供本地化资源。

## 概览

将你的 Swift 包中的资源本地化，可以确保它对尽可能多的开发者有用。尽早采用本地化的资源，以避免以后的额外开发成本。

## 声明默认的本地化

要对你的包的资源进行本地化，请在你的包清单中向包的初始化程序传递可选的 defaultLocalization 参数。这个例子提供了英语作为默认的本地化。

```swift
let package = Package(
    name: "MyLibrary",
    defaultLocalization: "en",
    platforms: [
    ],
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
)
```

当你在软件包清单中声明defaultLocalization的值时，Xcode要求该软件包包含本地化的资源。

::: tip
**Important**

当声明支持的语言，或命名包含本地化资源的目录时，使用两个字母的`ISO 639-1`或三个字母的`ISO 639-2`语言代码，以及可选的区域或脚本指定符。参见[CFBundleDevelopmentRegion](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundledevelopmentregion)以了解更多信息
:::

## 将资源添加到特定于语言的目录

要使用Xcode的默认本地化机制，请将本地化的资源放在特定语言的目录中。一个特定语言的目录有一个使用ISO 639语言代码和可选代号的名称，后面是.lproj后缀，并且不包含子目录。例如，英国使用的英语资源位于名为en-GB.lproj的目录中。通过将软件包资源放在以.lproj结尾的目录中，并使用ISO 639语言代码，Xcode可以自动推断出语言。


将您的`.lproj`目录放在一个名为 Resources 的父目录中，这样您就能识别出它包含包的资源。

当您构建您的Swift包时，Xcode会验证该包的本地化资源并显示警告或错误，以帮助防止在运行时出现问题。例如，Xcode 会检测:

- .lproj目录下的子目录。
- 缺少某个地区的资源。
- 重复的、冲突的或不可访问的资源。

下面的截图显示了一个带有本地化资源的Swift包的结构。

![](https://docs-assets.developer.apple.com/published/5bf9736b78/3578946@2x.png)

## 本地化 Storyboard 和 Interface Builder 文件

如果 Swift 包包含故事板或 Interface Builder 文件作为资源，则采用基本国际化来减轻本地化人员直接修改这些文件的需要。要让 Xcode 自动识别 Swift 包中的基本本地化：

- 在软件包清单中为 defaultLocalization 声明一个值。

- 创建一个名为 "Resources"的目录，用于存放您的本地化资源。

- 创建一个名为`Base.lproj`的子目录，并将包的storyboards和Interface Builder文件放入其中。

- 将所有支持的语言的.lproj目录放在Resources目录中。

如果你喜欢明确地声明一个资源用于基础国际化，请使用流程规则并将`Resource.Localization.base`传递给它。例如，使用下面的方法来声明一个支持基础国际化的.xib文件：

```swift
.process("path/to/MyViewController.xib", localization: .base)
```

关于基数国际化的更多信息，请看[用户界面的国际化](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/InternationalizingYourUserInterface/InternationalizingYourUserInterface.html#//apple_ref/doc/uid/10000171i-CH3-SW2)。

## 访问本地化资源

Xcode 识别 .lproj 目录中的本地化资源并自动创建资源包。因此，您可以使用您在应用程序开发中可能已经知道的 API 来访问包的代码中的本地化资源文件。例如，使用Foundation在运行时访问一个本地化的字符串：

```swift
let localizedString = NSLocalizedString(”a_localized_string”, bundle: Bundle.module, comment: “a comment”)
```

类似地，你可以用UIImage访问本地化的图像资源：

```swift
UIImage(named: "image name", in: .module, with: nil)。
```

更多信息，请参见[在代码中访问资源](https://developer.apple.com/documentation/swift_packages/bundling_resources_with_a_swift_package#3578939)。

