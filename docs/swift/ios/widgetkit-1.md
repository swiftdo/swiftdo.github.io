---
sitemap:
  exclude: false
  changefreq: hourly
title: 'iOS 小组件开发之Include Configuration App Intent'
date: 2024-10-22
tags:
- swift
- ios
- widgetkit
---

在 iOS 17 及其后的版本中，Apple 引入了 **`Include Configuration App Intent`** 选项，用于支持**可配置的小组件 (Widget Configuration)**，使用户在添加小组件时可以选择不同的配置，例如特定的类别、内容过滤或其他自定义选项。它通过 **App Intents** 框架实现。


## 什么是 Include Configuration App Intent？

**`Include Configuration App Intent`** 是在创建 Widget 时允许用户**添加自定义参数**的功能。  
借助此功能，你可以通过 **App Intent** 让用户在小组件添加时进行某些配置，从而提供不同的展示数据或视图。

## 作用和适用场景
1. **个性化小组件内容**  
   - 例如，在日历小组件中，用户可以选择要展示的日历类别（如工作日程或私人日程）。
  
2. **多状态展示**  
   - 在天气小组件中，用户可以选择要显示的城市。

3. **提高用户体验**  
   - 允许用户在添加小组件时快速配置，而不需要跳转回主应用进行设置。


## 如何实现 Include Configuration App Intent？

1. **创建一个 App Intent**：定义小组件的配置参数，例如选择某个分类或特定内容。

2. **在 Widget 中使用该 Intent**：通过将 Intent 与 Widget 绑定，提供个性化的视图。

### 代码示例

**1. 创建自定义 Intent：**
```swift
import AppIntents

struct CategorySelectionIntent: AppIntent {
    static var title: LocalizedStringResource = "选择分类"

    @Parameter(title: "分类")
    var category: String

    func perform() async throws -> some IntentResult {
        return .result()
    }
}
```

**2. 将 Intent 与 Widget 绑定：**
```swift
import WidgetKit
import SwiftUI

struct ConfigurableWidgetEntry: TimelineEntry {
    let date: Date
    let category: String
}

struct ConfigurableWidgetEntryView: View {
    var entry: ConfigurableWidgetEntry

    var body: some View {
        Text("当前分类: \(entry.category)")
    }
}

struct ConfigurableWidget: Widget {
    var body: some WidgetConfiguration {
        AppIntentConfiguration(
            kind: "ConfigurableWidget",
            intent: CategorySelectionIntent.self
        ) { entry in
            ConfigurableWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("可配置小组件")
        .description("这是一个支持用户选择分类的示例小组件。")
    }
}
```

**3. 运行效果：**
- 当用户在主屏幕上添加该小组件时，会弹出一个配置界面，允许用户选择**分类**。
- 用户的选择会传递给 Widget，动态调整展示内容。


## 总结

`Include Configuration App Intent` 通过引入 **App Intents** 框架，让小组件的配置变得更灵活、直观。它的主要用处是：
- 允许用户在添加小组件时进行自定义设置。
- 提高小组件的个性化和用户体验。

此功能非常适合需要**多状态展示**或**个性化内容**的小组件场景，如日历、任务管理、天气等。