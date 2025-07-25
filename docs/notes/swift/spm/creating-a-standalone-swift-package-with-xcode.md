---
title: 用Xcode创建一个独立的Swift包
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-05-08T00:00:00.000Z
tags:
  - swift
  - ios
  - spm
createTime: 2024/08/02 09:19:27
permalink: /swift/tnhqp5ho/
---

> 原文：[https://developer.apple.com/documentation/xcode/creating-a-standalone-swift-package-with-xcode](https://developer.apple.com/documentation/xcode/creating-a-standalone-swift-package-with-xcode)

将可执行或可共享的代码捆绑成一个独立的 Swift 包。

## 概述

Swift 软件包是可复用的 Swift、Objective-C、Objective-C++、C 或 C++ 代码组件。它们可以捆绑资源，将代码作为二进制文件来提供，或者依赖于其他软件包。Swift 软件包可用于捆绑可执行代码 (例如，将脚本捆绑为“可执行产品”)，或用于创建软件包来将可共享的代码作为“资源库产品”提供。用于提供资源库产品的软件包有助于促进代码模块化发展，方便与他人共享代码，而且也利于其他开发者在其 App 中添加功能。

通过 Xcode，您可以创建新的 Swift 软件包，添加代码、资源文件和二进制文件，构建 Swift 软件包，并且运行单元测试。

![](https://developer.apple.com/cn/documentation/xcode/creating_a_standalone_swift_package_with_xcode/images/original-1588885121.png)

## 创建 Swift 软件包

要创建新的 Swift 软件包，请打开 Xcode，然后选择“File“>“New”>“Swift Package”。选取名称并选择文件位置。选择“Create Git repository on my Mac”，以将您的软件包置于版本控制下。完成后，Swift 软件包会在 Xcode 中打开，就像是一个标准的 Xcode 项目。在创建 Swift 软件包时，Xcode 会生成所有必要的文件和文件夹：

* README.md 文件位于软件包的根目录下。它会提供 Swift 软件包功能的描述。

* Package.swift 文件 (即“软件包清单”) 描述 Swift 软件包的配置。您可以在访达中连按两次该文件来在 Xcode 中打开对应的软件包。软件包清单使用 Swift 和 PackageDescription 框架来定义软件包的名称、产品、目标，以及对其他软件包的依赖项等。

* 源代码文件位于名为 Sources 的文件夹中，并根据 Target 来设定作用域。一个 Swift 软件包可以包含多个目标，并且按照惯例，各目标的代码位于自己的子文件夹中。

* 单元测试目标位于名为 Tests 的文件夹中，并且遵循与标准目标相同的惯例，各测试目标的代码分别位于自己的子文件夹中。

![](https://developer.apple.com/cn/documentation/xcode/creating_a_standalone_swift_package_with_xcode/images/fca78bf1-9b3e-41ae-82b8-185b2e871766.png)

## 配置您的 Swift 软件包

Swift 软件包不使用 .xcproject 或 .xcworkspace，但依赖于它们的文件夹结构，并且使用软件包清单来进行其他配置。以下代码摘录显示了一个简单的软件包清单。它声明了 MyLibrary 目标，并使用同一名称将它作为资源库产品来提供。

```swift
// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "MyLibrary",
    platforms: [
        .macOS(.v10_14), .iOS(.v13), .tvOS(.v13)
    ],
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "MyLibrary",
            targets: ["MyLibrary", "SomeRemoteBinaryPackage", "SomeLocalBinaryPackage"])
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .target(
            name: "MyLibrary",
            exclude: ["instructions.md"],
            resources: [
                .process("text.txt"),
                .process("example.png"),
                .copy("settings.plist")
            ]
        ),
        .binaryTarget(
            name: "SomeRemoteBinaryPackage",
            url: "https://url/to/some/remote/binary/package.zip",
            checksum: "The checksum of the XCFramework inside the ZIP archive."
        ),
        .binaryTarget(
            name: "SomeLocalBinaryPackage",
            path: "path/to/some.xcframework"
        )
        .testTarget(
            name: "MyLibraryTests",
            dependencies: ["MyLibrary"]),
    ]
)
```

软件包清单的开头必须是字符串 `// swift-tools-version:`，后跟版本号，例如 `// swift-tools-version:5.3`。

Swift 工具版本声明以下内容：

- PackageDescription 框架的版本

- 用于处理清单的 Swift 语言兼容版本

- 使用该软件包所需的最低 Swift 工具版本

每个版本的 Swift 都可能会推出 PackageDescription 框架更新，但以前的 API 版本仍可供声明较旧 Swift 工具版本的软件包使用。这样一来，您便可以利用新版本的 Swift、Swift 工具和 PackageDescription 框架，而无需更新您的软件包清单，也不会失去对现有软件包的访问。

要进一步了解 PackageDescription 框架，请参阅“[Package](https://developer.apple.com/documentation/swift_packages/package)”。

::: tip
**注释**

在您编辑软件包清单时，Xcode 会提供代码补全功能。
:::

## 添加您的代码

根据惯例，源代码文件位于软件包的 Sources 目录下的子文件中，文件夹名称与它们所属的目标相同。注意上方的软件包清单是如何声明 MyLibrary 目标的。其源代码文件位于 Sources/MyLibrary 中，用于测试的源代码文件则位于 Sources/MyLibraryTests 中。您可以利用其他子文件夹来组织它们的结构。默认情况下，Xcode 将所有有效的源代码文件包含在目标的文件夹中。如果想要以显式方式声明所含的源代码文件，请在初始化 Target 时使用 sources 参数来传递它们。也可以传递目录的路径。

![](https://developer.apple.com/cn/documentation/xcode/creating_a_standalone_swift_package_with_xcode/images/58f3cefb-2e11-4282-a308-b25bbb8ab89e.png)

要将源代码文件添加到 Swift 软件包中，可以利用您已熟知的工作流程。例如，您可以将源代码文件拖入项目导航器来将其添加到软件包中，也可以使用“File”>“Add Files to [packageName]” 菜单来添加。目标可以包含 Swift、Objective-C/C++ 或 C/C++ 代码，但一个目标中不能混合 Swift 和 C 系列语言。例如，一个 Swift 软件包可以有两个目标，一个目标含有 Objective-C、Objective-C++ 和 C 代码，另一个则包含 Swift 代码。


## 添加对其他 Swift 软件包的依赖项

与 App 一样，Swift 软件包可以拥有“软件包依赖项”。要声明对远程软件包的依赖项，可以使用任何一种将远程软件包 URL 作为参数的函数。要将本地软件包添加为依赖项，可以使用任何一种将本地软件包路径作为参数的函数。以下代码片段显示了这两种选项：

```swift
dependencies: [    
    // Dependencies declare other packages that this package depends on.
    .package(url: "https://url/of/another/package.git", from: "1.0.0"),
    .package(path: "path/to/a/local/package/", "1.0.0"..<"2.0.0")],
```

请参阅 Package.Dependency，以了解所有可用来声明软件包依赖项的方式。在添加依赖项时，您可以将其提供的产品用作 Target.Dependency，或使它成为软件包的 Product 的一部分。

## 将二进制文件作为 Swift 软件包进行分发

除了分发提供源代码文件的 Swift 软件包外，也可以选择分发二进制文件。例如，专有闭源资源库的创建者通常以二进制文件形式提供这些资源库。要了解更多信息，请参阅“[将二进制框架作为 Swift 软件包进行分发](https://developer.apple.com/documentation/swift_packages/distributing_binary_frameworks_as_swift_packages)”。

## 添加软件包资源

在您的清单文件中声明 Swift 工具版本 5.3 或更高版本，以将素材文件作为软件包资源添加到 Swift 软件包中。例如，Swift 软件包可以包含使用素材目录、Storyboard 和 .strings 文件等的用户界面组件。要了解更多信息，请参阅“[使用 Swift 软件包捆绑资源](https://developer.apple.com/documentation/swift_packages/bundling_resources_with_a_swift_package)”。

## 使您的 Swift 软件包能够跨平台兼容

尽管 Swift 软件包在本质上独立于平台，并包含 Linux 等目标平台，但是 Swift 软件包可能是针对特定平台的。您可以使用条件编译块来处理平台专有代码并实现跨平台兼容性。以下示例显示了如何使用条件编译块：

```swift
#if os(Linux)

// Code specific to Linux

#elseif os(macOS)

// Code specific to macOS

#endif

#if canImport(UIKit)

// Code specific to platforms where UIKit is available

#endif
```

此外，您可能需要定义最低部署目标。注意以下软件包清单如何通过将最低部署目标作为值传递给 Package 构造器的 platforms 参数。但是，将最低部署目标传递给该构造器不会将软件包限制到列出的平台。

```swift
// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "MyLibrary",
    platforms: [
        .macOS(.v10_14), .iOS(.v13), .tvOS(.v13)
    ],
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "MyLibrary",
            targets: ["MyLibrary", "SomeRemoteBinaryPackage", "SomeLocalBinaryPackage"])
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .target(
            name: "MyLibrary",
            exclude: ["instructions.md"],
            resources: [
                .process("text.txt"),
                .process("example.png"),
                .copy("settings.plist")
            ]
        ),
        .binaryTarget(
            name: "SomeRemoteBinaryPackage",
            url: "https://url/to/some/remote/binary/package.zip",
            checksum: "The checksum of the XCFramework inside the ZIP archive."
        ),
        .binaryTarget(
            name: "SomeLocalBinaryPackage",
            path: "path/to/some.xcframework"
        )
        .testTarget(
            name: "MyLibraryTests",
            dependencies: ["MyLibrary"]),
    ]
)
```

::: tip
**提示**

如果您计划发布 Swift 软件包，而且该软件包仅支持部分平台，请考虑在 README.md 文件中列出受支持的平台。此外，也请考虑添加对其他平台的支持，以便扩大受众范围。
:::

## 构建目标并运行单元测试

Xcode 会在软件包清单中为每个产品创建一个方案。为软件包的构建和运行目的地选择一个方案，并像构建 App 目标一样进行构建。每个源代码目标通常至少有一个对应的测试目标。如果您的软件包中包含多个产品，Xcode 会使用名称 [packageName]-Package 来创建一个额外方案，以构建所有目标并运行所有单元测试。