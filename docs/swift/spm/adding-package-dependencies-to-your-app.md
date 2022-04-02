---
title: "给你的应用添加 Swift Package 依赖"
sitemap:
  exclude: false
  changefreq: hourly
date: 2021-12-05
tags:
  - swift
  - ios
  - spm
---

通过集成 package 依赖，实现项目之间共享代码，或利用其他开发者的代码。

## 概述

Xcode 内置了对源控制账户的支持，并能轻松利用可用的 Swift 包。使用 Xcode 来管理包的依赖版本，并确保你的项目有最新的代码变化。

::: tip
**Note**

Package 作者可以将他们的 Swift Package 发布到公共或私人仓库。Xcode 支持私有和公开的软件包。
::: tip

## 添加 Package 依赖

要在你的 Xcode 项目中添加一个 Package，选择`File> Add Packages`，并输入其存储库的 URL。你也可以导航到你的目标的常规窗格，在 "Frameworks, Libraries, and Embedded Content"部分，点击 + 按钮，选择`Add Other`，并选择`Add Package Dependency`。

![](http://blog.loveli.site/mweb/16489060301766.jpg)

你可以在 GitHub 或 GitHub Enterprise 上搜索一个软件包，而不是添加一个仓库的 URL。在 Xcode 的 preferences 添加你的 GitHub 或 GitHub Enterprise 账户，当你输入时，就会出现一个软件包库的列表。下面的截图显示了一个用户在 Xcode 的 preferences 中添加了他们的 Git 提供者的搜索词 ExamplePackage 的存储库列表。

![](http://blog.loveli.site/mweb/16489061783290.jpg)

如果你在 Xcode 的 preferences 中添加了一个源控制帐户，并且你还没有输入一个搜索词，该列表中的内容来自的：

::: tip
**Important**

只添加值得信赖 Package。此外，与添加基于源的依赖项相比，添加二进制依赖项存在一些缺点。请参阅[识别二进制依赖项]()以了解更多信息。
:::

## 选择特定的 Package

当您输入软件包依赖的 URL 或从软件包列表中挑选一个 Swift 软件包时，请从下面三个 requirements 中选择一个。 Package requirements 决定了你的项目中允许的包依赖的版本，Xcode 会根据你选择的 requirement 更新你的包依赖。

* Version
  
    决定你的项目是否接受软件包依赖关系的更新，直到下一个主要版本或下一个次要版本。为了更严格，可以选择一个特定的版本范围或确切的版本。主要版本往往比次要版本有更大的变化，当它们更新时可能需要你修改你的代码。版本规则要求 Swift 包符合语义版本划分。要了解更多关于语义版本控制标准的信息，请访问[semver.org](https://semver.org/)。

    选择版本要求是添加软件包依赖关系的推荐方式。它允许你在限制变化和获得改进和功能之间建立一个平衡。

* Branch

    选择你的软件包依赖的分支名称，以便跟随。当你串联开发多个软件包，并且不想发布软件包依赖的版本时，可以使用基于分支的依赖关系。

* Commit

    选择你的软件包依赖的提交哈希值来遵循。不建议选择这个选项，你应该只在特殊情况下使用这个选项。虽然把你的软件包依赖关系钉在一个特定的提交上可以确保软件包依赖关系不发生变化，让你的代码保持稳定，但你不会收到任何更新。如果你担心远程软件包的稳定性，可以考虑基于版本的需求中的一个更有限制性的选项。

在你选择了一个包的需求后，Xcode 会解析并获取包的依赖性。选择你需要的包的产品，并将它们添加到你的项目中的目标。

在 Xcode 的项目导航器中，Swift Package Dependencies 部分显示了新添加的包的依赖性。点击披露三角形来查看包的内容，因为它存在于你的 Mac 上的本地。

::: tip
**Tip**

虽然Xcode会自动更新你的包的依赖关系和解决包的版本，但你可以从`File> Swift Packages`菜单中触发这两个动作。
:::


## 使用 Swift 包提供的功能和 Assets

要在你的应用程序中使用一个 Swift 包的功能，请将一个包的产品作为一个 Swift 模块导入。下面的代码片段显示了一个 controller，它导入了一个 Swift 包的 MyLibrary 模块并使用了该包的功能：

```swift
import UIKit

// Import the module that corresponds with the Swift package’s library product MyLibrary.
import MyLibrary

class ViewController: UIViewController {

    @IBOutlet var aLabel: UILabel!
    @IBOutlet var aButton: UIButton!
    @IBOutlet var anImageView: UIImageView!
    @IBOutlet var aCustomView: CustomView!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Use a string that the package exposes as a property in the MyLibrary file.
        self.aLabel.text = MyLibrary.titleText
        
        // Load an image that the MyLibrary package makes available through a class method.
        if let imagePath = MyClass.exampleImagePath() {
            self.anImageView.image = UIImage(contentsOfFile: imagePath)
        }

        // Use the Swift package’s CustomView class.
        self.aCustomView = CustomView()        
    }

    // Show an alert by calling the package’s API.
    @IBAction func showAlert(_ sender: Any) {
        MyClass.showAlertUsing(viewController: self)
    }
}
```

## 编辑 Package Dependency

你不能直接编辑你的软件包依赖的内容。如果你想对一个包的依赖关系进行修改，你需要把它作为一个本地包添加到你的项目中。请参阅[以本地包的方式编辑包依赖]，了解如何用本地包覆盖软件包依赖关系并进行编辑。

## 协调包版本

当在一个项目上进行协作时，确保每个人都使用相同版本的软件包依赖关系。当您在项目中添加软件包依赖时，Xcode 会创建 Package.resolved 文件。它列出了每个软件包依赖关系所解析的特定 Git 提交以及每个二进制依赖关系的校验和。在 Git 中提交这个文件以确保每个人都在使用相同版本的软件包依赖。

::: tip
**Tip**

你可以在你的 .xcodeproj 目录中找到 Package.resolved 文件，地址是 [appName].xcodeproj/project.workspace/xcshareddata/swiftpm/Package.resolved。
:::

## 删除 Package Dependency

如果您需要从您的 Xcode 项目中删除一个包的依赖关系，请在设置中导航到 Swift 包列表，然后从包的列表中选择 Swift 包。点击 "-" 按钮来删除选定的软件包依赖关系。

![](https://docs-assets.developer.apple.com/published/a687950960/a60b2460-f930-4bfe-bf46-4f57bfac42f2.png)



