---
sitemap:
  exclude: false
  changefreq: hourly
title: 5分钟创建 WechatOpenSDK 1.9.2 版本的pod库
date: 2020-10-10T00:00:00.000Z
tags:
  - swift
  - ios
  - pod
createTime: 2024/08/02 09:19:27
permalink: /swift/bt62cl7c/
---

- 在 github 中**新建一个仓库**，git clone 将代码拉下来。比如：

  ```shell
  git clone https://github.com/swiftdo/WechatOpenSDK_Fuck.git
  ```

- 添加本地需要操作的类库

  从官网下载 SDK，然后解压将目录放入项目中:

  ```sh
  ./
  ├── OpenSDK1.9.2
  │   ├── README.txt
  │   ├── WXApi.h
  │   ├── WXApiObject.h
  │   ├── WechatAuthSDK.h
  │   └── libWeChatSDK.a
  ```

- 提交代码
  ```shell
  git tag -a 1.9.2 -m "1.9.2 版本”
  git push -—tags
  ```
- 创建 podspec 文件

  ```shell
  pod spec create WechatOpenSDK_Fuck
  ```

  执行命令后，目录如下：

  ```shell
  ./
  ├── OpenSDK1.9.2
  │   ├── README.txt
  │   ├── WXApi.h
  │   ├── WXApiObject.h
  │   ├── WechatAuthSDK.h
  │   └── libWeChatSDK.a
  └── WechatOpenSDK_Fuck.podspec
  ```

- 根据 podspec 的语法，我们将文件修改如下：

  ```ruby

  Pod::Spec.new do |spec|
    spec.name         = "WechatOpenSDK_Fuck"
    spec.version      = "1.9.2"
    spec.summary      = "WechatOpenSDK 1.9.2"
    spec.description  = <<-DESC
    WechatOpenSDK 1.9.2 完整版本
                     DESC

    spec.homepage     = "https://oldbird.run"
    spec.license      = "MIT"
    spec.author             = { "oheroj" => "1164258202@qq.com" }
    spec.source       = { :git => "https://github.com/swiftdo/WechatOpenSDK_Fuck.git", :tag => "#{spec.version}" }
    spec.platform         = :ios, '9.0'

    spec.public_header_files = "OpenSDK1.9.2/*.h"
    spec.source_files        = "OpenSDK1.9.2/*.{h,m,mm}"
    spec.vendored_libraries  = 'OpenSDK1.9.2/*.a'
    spec.frameworks 	       = 'CFNetwork', 'Security', 'CoreTelephony', 'SystemConfiguration', 'UIKit', 'CoreGraphics', 'Foundation', 'WebKit'
    spec.libraries           = 'z', 'sqlite3.0', 'c++'

    spec.pod_target_xcconfig = { 'OTHER_LDFLAGS' => '-lObjC' }
    spec.pod_target_xcconfig = { 'VALID_ARCHS' => 'x86_64 armv7 arm64' }
  end

  ```

- 完成编辑后，使用`pod spec lint` podspec 文件来验证 podspec 文件是否有效

  ```shell
  pod spec lint WechatOpenSDK_Fuck.podspec --allow-warnings --verbose
  ```

- 为了能让`pod search` 搜索到上传的类库，需要把 podspec 文件提交到 cocoapods

  ```sh
  pod trunk push WechatOpenSDK_Fuck.podspec --allow-warnings --verbose
  ```

- 如果之前没有注册过 cocoapods，使用如下命令注册，不然无法提交

  ```sh
  pod trunk register 1164258202@qq.com "oheroj" --description="one hero of j"
  ```

  自行修改上面的邮箱和用户名，以及简介。然后需要登录自己的邮箱查看邮件完成验证。

- 最后一步，添加你的修改，提交代码。

上传成功之后，正常情况来讲，pod search 是找不到的，你可以执行下列命令行:

```shell
pod ipc update-search-index --verbose
```

如果无效, 那么我们就粗暴一点：

```shell
$rm ~/Library/Caches/CocoaPods/search_index.json
$pod search 你的库名
```

完毕
