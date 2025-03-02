module.exports = {
    "/swift/spm/": [
        {
            title: "简介",
            collapsable: false,
            children: [""],
        },
        {
            title: "Package 依赖",
            collapsable: false,
            children: ["adding-package-dependencies-to-your-app", "identifying-binary-dependencies", "editing-a-package-dependency-as-a-local-package"],
        },
        {
            title: "Package 创建",
            collapsable: false,
            children: [
                "creating-a-standalone-swift-package-with-xcode",
                "bundling-resources-with-a-swift-package",
                "localizing-package-resources",
                "distributing-binary-frameworks-as-swift-packages",
                "developing-a-swift-package-in-tandem-with-an-app",
                "organizing-your-code-with-local-packages",
            ],
        },
        {
            title: "Package 发布",
            collapsable: false,
            children: ["publishing-a-swift-package-with-xcode"],
        },
        {
            title: "持续集成",
            collapsable: false,
            children: ["building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows"],
        },
    ],
    "/swift/vapor/": [
        {
            title: "VAPOR",
            collapsable: false,
            children: [
                "",
                "t1-install",
                "t2-quickstart",
                "t3-turotial",
                "t4-advanced",
                "t5-deploy",
                "t6-say-oldbirds",
                "t9-docker",
                "t10-docker-k8s-1",
                "t10-docker-k8s-2",
                "t10-docker-k8s-3",
                "t10-docker-k8s-4",
                "t10-docker-k8s-5",
                "t10-docker-k8s-6",
                "u-11-auth",
                "u-12-permission",
                "v-20-read-code",
                "v-21-io",
                "v-22-bio2",
                "v-23-swiftnio-do-text",
                "v-24-swift-zhan-package",
                "v-25-swiftnio-do-serisize",
                "v-26-swfitnio-grpc-1",
                "xcode-env-setup",
            ],
        },
    ],
    "/swift/ubuntu/": [
        {
            title: "Ubantu Swift开发",
            collapsable: false,
            children: ["", "swiftenv", "spm", "vscode", "demo"],
        },
    ],
    "/swift/ios/": [
        {
            title: "iOS",
            collapsable: false,
            children: ["", "t1-pod-webp", "t2-youhua", "pod-wechat", "ios-build-cers", "XCFramework", 
                "ios-webkit", "widgetkit-1", "widgetkit-2"],
        },
    ],
    "/swift/better/": [
        {
            title: "写更好的Swift代码",
            collapsable: false,
            children: ["", "autoclosure", "protocol", "chain", "Copy-On-Write", "copy-in-copy-out", "di", "lazy", "available", "last", "value-semantics", "value-semantics-2"],
        },
    ],
    "/swift/tips/": [{ title: "TIPS", collapsable: false, children: ["", "structured-concurrency", "property-wrpappers"] }],
    "/swift/fp/": [
        {
            title: "FP",
            collapsable: false,
            children: ["", "t1-fp", "t2-lens", "t3-json1", "t3-json2", "t3-json3", "t4-length"],
        },
    ],

    "/python/": [
        {
            title: "Python",
            collapsable: false,
            children: [
                "",
                "python-develop-env",
                "pyenv",
                "poetry",
                "python-string",
                "python-file",
                "python-module",
                "python-iterator",
                "python-generator",
                "python-decorator",
                "1-file-map",
                "2-mongo-random",
                "3-page-upload",
                "4-bt-flask",
                "python-ase",
            ],
        },
    ],

    "/deepseek/": [
        {
            title: "DeepSeek",
            collapsable: false,
            children: ["", "deepseek-intro", "deepseek-1", "deepseek-2","deepseek-3", "deepseek-4" ],
        },
    ],
    "/ai/ml/": [
        {
            title: "机器学习",
            collapsable: false,
            children: [
                "", 
                "supervised-vs-unsupervised-learning-concepts-and-differences",
                "classification-and-regression-in-ml",
                "dataset-and-feature",
                "feature-engineering",
                "overfitting_underfitting", 
                "anaconda_installation_and_usage",
                "jupyter_notebook_usage",
                "mastering_pandas_and_visualization_tools" // 新增文章文件名
            ],
        },
    ],
    "/ai/dl/": [
        {
            title: "深度学习",
            collapsable: false,
            children: ["", "t1-gzj"],
        },
    ],
    "/ai/nlp/": [
        {
            title: "自然语言处理",
            collapsable: false,
            children: [""],
        },
    ],
    "/haskell/": [
        {
            title: "HASKELL",
            collapsable: false,
            children: ["", "1-install", "2-vscode", "3-pktool", "4-digui"],
        },
    ],
    "/vue/": [
        {
            title: "VUE",
            collapsable: false,
            children: ["", "vue-component"],
        },
    ],
    "/java/": [
        {
            title: "JAVA",
            collapsable: false,
            children: ["", "java-@FunctionalInterface-Lambda","String[]-List<String>"],
        },
    ],
    "/flutter/": [
        {
            title: "Flutter",
            collapsable: false,
            children: [
                "",
                "point",
                "t1-tips",
                "t2-what",
                "t3-messages",
                "t3-mixin",
                "t4-lifecycle",
                "t5-flutter-web-deploy",
                "t6-docker-web-deploy",
                "t7-fvm",
                "t8-const",
                "t9-logs",
                "u10-fvm-flutter2",
                "u11-flutter-render",
                "u12-flutter-create-w",
                "u12-flutter-web-01",
                "u12-flutter-web-02",
                "u13-sliverappbar",
                "u14-navbar-color",
                "u15-custom-nabar",
                "u16-shape",
                "y1-statubar",
                "github-actions-build-flutter-ios",
                "github-actions-build-flutter-android",
                "flutter-color",
                "flutter-dialog",
                "flutter-deps",
                "flutter-screenshoot1",
                "flutter-screenshoot2",
                "flutter-screenshoot3",
                "flutter-repaintBoundary",
                "flutter-isolate",
                "flutter-vscode-config",
                "flutter-web-launch-page",
            ],
        },
    ],
    "/figma/": [
        {
            title: "FIGMA",
            collapsable: false,
            children: ["", "figma-install-chinese-font"],
        },
    ],
    "/basis/index/": [{ title: "BASIS", collapsable: false, children: [""] }],
    "/algorithms/": [
        {
            title: "算法",
            collapsable: false,
            children: [
                "",
                "t1-buble-sort",
                "t2-selection-sort",
                "t3-insertion-sort",
                "t4-shell-sort",
                "t5-quick-sort",
                "t6-heap-sort",
                "t7-merge-sort",
                "t8-radix-sort",
                "t9-count-sort",
                "u1-bucket-sort",
            ],
        },
    ],
    "/ops/": [{ title: "运维", collapsable: false, children: ["", "iptables-firewall", "allow-white", "sonarqube-plugin"] }],

    "/tools/vuepress/": [
        {
            title: "VuePress",
            collapsable: false,
            children: ["", "deploy", "deploy-github-action", "memory-out"],
        },
    ],
    "/tools/git/": [
        {
            title: "GIT",
            collapsable: false,
            children: ["", "t1-change-history", "t2-git-submodule", "git-branch-mapping", "git-reset"],
        },
    ],
    "/tools/yaml/": [{ title: "YAML", collapsable: false, children: [""] }],
    "/tools/html/": [{ title: "HTML", collapsable: false, children: ["", 
        "css-equal-distribution-layout", 
        "js-vant-vue-callable", 
        "xm-select-use",
    ] }],
    "/tools/plantuml/": [
        {
            title: "Plushum",
            collapsable: false,
            children: ["", "t1-sequence-diagram", "t2-class-diagram"],
        },
    ],
    "/tools/note/": [
        {
            title: "Node",
            collapsable: false,
            children: ["", "vitualbox-increase-space"],
        },
    ],
    "/about/index/": [{ title: "INDEX", collapsable: false, children: [""] }],
    "/about/app/": [
        {
            title: "APP",
            collapsable: false,
            children: ["", "t1-protocol", "t2-secrect", "t3-miniapps-sec"],
        },
    ],
    "/swift/swiftui/": [
        {
            title: "前言",
            collapsable: false,
            children: [""],
        },
        {
            title: "原理篇",
            collapsable: false,
            children: ["Principle05", "Principle01", "Principle02", "Principle03", "Principle04", "Principle06", "result-builders"],
        },
        {
            title: "基础控件",
            collapsable: false,
            children: [
                {
                    title: "文本",
                    collapsable: false,
                    children: ["Text", "TextField", "SecureField"],
                },
                {
                    title: "图片",
                    collapsable: false,
                    children: ["Image", "WebImage"],
                },
                {
                    title: "按钮",
                    collapsable: false,
                    children: ["Button", "PullDownButton", "ItemBasedPopUpButton", "NavigationButton", "PresentationButton", "EditButton", "PasteButton"],
                },
                {
                    title: "选择器",
                    collapsable: false,
                    children: ["Picker", "DatePicker"],
                },

                "Toggle",
                "Slider",
                "Stepper",
                "SegmentedControl",
                "WebView",
                "UIViewController",
            ],
        },
        {
            title: "布局",
            collapsable: false,
            children: [
                {
                    title: "Stacks",
                    collapsable: false,
                    children: ["HStack", "VStack", "ZStack"],
                },
                {
                    title: "List",
                    collapsable: false,
                    children: ["List", "ScrollView", "ForEach"],
                },
                {
                    title: "Container Views",
                    collapsable: false,
                    children: ["Group", "GroupBox", "Section", "Form"],
                },
                {
                    title: "Alert",
                    collapsable: false,
                    children: ["Alert", "Modal", "Popover", "Sheet", "ActionSheet"],
                },

                "NavigationView",
                "TabView",
                "HSplitView",
                "VSplitView",
            ],
        },
        {
            title: "状态和数据流",
            collapsable: false,
            children: [
                "Bindings",

                {
                    title: "Data-Dependent Views",
                    collapsable: false,
                    children: ["State", "ObjectBinding", "EnvironmentObject"],
                },
                {
                    title: "Environment Values",
                    collapsable: false,
                    children: ["Environment", "EnvironmentValues"],
                },

                "LocalizedStringKey",
                "Transaction",
                "DynamicNavigationDestinationLink",
            ],
        },
        {
            title: "手势",
            collapsable: false,
            children: [
                {
                    title: "基础手势",
                    collapsable: false,
                    children: ["TapGesture", "LongPressGesture", "DragGesture", "MagnificationGesture", "RotationGesture"],
                },
                {
                    title: "组合手势",
                    collapsable: false,
                    children: ["SequenceGesture", "SimultaneousGesture", "ExclusiveGesture"],
                },
                {
                    title: "自定义手势",
                    collapsable: false,
                    children: ["AnyGesture"],
                },
            ],
        },
        {
            title: "其他",
            collapsable: false,
            children: ["ViewModifier", "GeometryReader", "PreferenceKey"],
        },
    ],

    "/basis/design-patterns/": [
        {
            title: "基础",
            collapsable: false,
            children: ["", "ClassReleation", "DesignPrinciples"],
        },
        {
            title: "创建型",
            collapsable: false,
            children: ["FactoryPattern", "BuilderPattern", "PrototypePattern", "SingletonPattern"],
        },
        {
            title: "结构型",
            collapsable: false,
            children: ["AdapterPattern", "BridgePattern", "FilterCriteriaPattern", "CompositePattern", "DecoratorPattern", "FacadePattern", "FlyweightPattern", "ProxyPattern"],
        },
        {
            title: "行为型",
            collapsable: false,
            children: [
                "ChainOfResponsibilityPattern",
                "CommandPattern",
                "InterpreterPattern",
                "IteratorPattern",
                "MediatorPattern",
                "MementoPattern",
                "ObserverPattern",
                "StatePattern",
                "NullObjectPattern",
                "StrategyPattern",
                "TemplatePattern",
                "VisitorPattern",
            ],
        },
    ],
    "/read/": [
        {
            title: "阅读笔记",
            collapsable: false,
            children: ["", "head-first-oop"],
        },
    ],
    "/books/": [
        {
            title: "书籍",
            collapsable: false,
            children: ["books"],
        },
    ],
    "/design-patterns/": [
        {
            title: "前言",
            collapsable: false,
            children: ["", "ClassReleation", "DesignPrinciples"],
        },
        {
            title: "基础",
            collapsable: false,
            children: [
                "principle/OCP",
                "principle/SRP",
                "principle/LSP",
                "principle/DIP",
                "principle/ISP",
                "principle/CARP",
                "principle/LOD"
            ]
        },
        {
            title: "创建型",
            collapsable: false,
            children: [
                "FactoryPattern",
                "BuilderPattern",
                "PrototypePattern",
                "SingletonPattern" 
            ]
        },
        {
            title: "结构型",
            collapsable: false,
            children: [
                "AdapterPattern",
                "BridgePattern",
                "FilterCriteriaPattern",
                "CompositePattern",
                "DecoratorPattern",
                "FacadePattern",
                "FlyweightPattern",
                "ProxyPattern"
            ]
        },
        {
            title: "行为型",
            collapsable: false,
            children: [
                "ChainOfResponsibilityPattern",
                "CommandPattern",
                "InterpreterPattern",
                "IteratorPattern",
                "MediatorPattern",
                "MementoPattern",
                "ObserverPattern",
                "StatePattern",
                "NullObjectPattern",
                "StrategyPattern",
                "TemplatePattern",
                "VisitorPattern",
            ]
        }

    ]
};
