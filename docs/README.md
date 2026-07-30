---
pageLayout: home
externalLinkIcon: false
config:
  - type: hero
    full: true
    effect: tint-plate
    tintPlate:
      r:
        light: 80
        dark: 140
      g:
        light: 134
        dark: 170
      b:
        light: 161
        dark: 200
    hero:
      name: OldBird
      tagline: 记录 · 实践 · 作品
      text: Swift、Flutter、AI 与易经——把学习沉淀成笔记，把兴趣做成产品。
      actions:
        - theme: brand
          text: 探索笔记
          link: /swift/
        - theme: alt
          text: 作品集
          link: /result/
        - theme: alt
          text: 易起卦
          link: /yiqigua.html

  - type: custom

  - type: features
    title: 学习主线
    description: 按主题深入，侧边栏可连续阅读
    features:
      - title: Swift
        icon: logos:swift
        details: SwiftUI、Vapor、SPM 与 iOS 工程实践，从界面到服务端。
        link: /swift/
        linkText: 进入 Swift
      - title: Flutter
        icon: logos:flutter
        details: 跨平台开发、渲染与部署，以及鸿蒙适配经验。
        link: /flutter/
        linkText: 进入 Flutter
      - title: AI
        icon: carbon:machine-learning-model
        details: 机器学习、DeepSeek、Gemini CLI 等工具与实践笔记。
        link: /ai/
        linkText: 进入 AI
      - title: 易经
        icon: mdi:yin-yang
        details: 周易、六爻与梅花易数；配套易起卦（六爻排盘）App 练习。
        link: /yijing/
        linkText: 进入易经

  - type: posts
    collection: blog

  - type: profile
    name: OldBird
    description: 用笔记记录技术，用作品验证想法。
    avatar: /logo.png
    circle: true
---

<HomeShowcase />
