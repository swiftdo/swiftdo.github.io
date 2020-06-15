---
sitemap:
  exclude: false
  changefreq: hourly
title: 'SwiftUI 中的 UIKit'
---

## UIViewRepresentable

> 文档：[https://developer.apple.com/documentation/swiftui/uiviewrepresentable](https://developer.apple.com/documentation/swiftui/uiviewrepresentable)

表示 UIKit 视图的视图，当您想在 SwiftUI 中使用 UIView 时，请使用它。

要使任何 `UIView` 在 `SwiftUI` 中可用，请创建一个符合 `UIViewRepresentable` 的包装器视图。

```swift
import UIKit
import SwiftUI

struct ActivityIndicator: UIViewRepresentable {
    @Binding var isAnimating: Bool

    func makeUIView(context: Context) -> UIActivityIndicatorView {
        let v = UIActivityIndicatorView()
        return v
    }

    func updateUIView(_ uiView: UIActivityIndicatorView, context: Context) {
        if isAnimating {
            uiView.startAnimating()
        } else {
            uiView.stopAnimating()
        }
    }
}
```

如果您想要桥接 UIKit 里的数据绑定 (delegate, target/action) 就使用 `Coordinator`，具体可看[官方教程](https://developer.apple.com/tutorials/swiftui/interfacing-with-uikit)。

```swift
import SwiftUI
import UIKit

struct PageControl: UIViewRepresentable {
    var numberOfPages: Int
    @Binding var currentPage: Int

    func makeUIView(context: Context) -> UIPageControl {
        let control = UIPageControl()
        control.numberOfPages = numberOfPages
        control.addTarget(
            context.coordinator,
            action: #selector(Coordinator.updateCurrentPage(sender:)),
            for: .valueChanged)

        return control
    }

    func updateUIView(_ uiView: UIPageControl, context: Context) {
        uiView.currentPage = currentPage
    }

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    // This is where old paradigm located
    class Coordinator: NSObject {
        var control: PageControl

        init(_ control: PageControl) {
            self.control = control
        }

        @objc func updateCurrentPage(sender: UIPageControl) {
            control.currentPage = sender.currentPage
        }
    }
}
```

## UIViewControllerRepresentable

> 文档：[https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentable](https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentable)

表示`UIKit`视图控制器的视图。当您想在`SwiftUI`中使用 `UIViewController` 时，请使用它。

要使任何 `UIViewController` 在 `SwiftUI` 中可用，请创建一个符合 `UIViewControllerRepresentable` 的包装器视图，具体见[官方文档](https://developer.apple.com/tutorials/swiftui/interfacing-with-uikit)。

```swift
import SwiftUI
import UIKit

struct PageViewController: UIViewControllerRepresentable {
    var controllers: [UIViewController]

    func makeUIViewController(context: Context) -> UIPageViewController {
        let pageViewController = UIPageViewController(
            transitionStyle: .scroll,
            navigationOrientation: .horizontal)

        return pageViewController
    }

    func updateUIViewController(_ pageViewController: UIPageViewController, context: Context) {
        pageViewController.setViewControllers(
            [controllers[0]], direction: .forward, animated: true)
    }
}

```
