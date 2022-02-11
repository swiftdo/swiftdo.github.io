---
sitemap:
  exclude: false
  changefreq: hourly
title: "iOS 打包证书制作"
date: 2020-10-10
tags:
  - swift
  - ios
  - pod
  - 打包
---

iOS 有两种证书和描述文件：

| 证书类型           | 使用功能场景      |
| ------------------ | ----------------- |
| 开发证书和描述文件 | 用于开发测试      |
| 发布证书和描述文件 | 用于提交 AppStore |

## 准备环境

- **必需要有苹果开发者账号，并且加入了 “iOS Developer Program”**
- Mac OS 10.9 以上系统

## 登录 iOS Dev Center

打开网站 [iOS Dev Center](https://developer.apple.com/devcenter/ios/index.action)，使用苹果开发者账号登录 iOS Dev Center：

![](http://blog.loveli.site/mweb/16445461096818.jpg)

登录成功后在页面左侧选择 “Certificates,IDs & Profiles” 进入证书管理页面：

![](http://blog.loveli.site/mweb/16445462261609.jpg)

在证书管理页面，可以看到所有已经申请的证书及描述文件：

![](http://blog.loveli.site/mweb/16445462515517.jpg)

## 申请苹果 App ID

选择页面的 “Identifiers" 可查看到已申请的所有 App 应用标识，点击页面上的加号来创建一个新的应用标识：

![](http://blog.loveli.site/mweb/16445465594194.jpg)

选择标识类型为 “App IDs”，然后点击 “Continue”：

![](http://blog.loveli.site/mweb/16445466030174.jpg)

平台选择 “iOS，tvOS，watchOS”，Bundle ID 选择 “Explicit”，在 Description 中填写描述，然后填写 Bundle ID，Bundle ID 要保持唯一性，建议填写反域名加应用标识的格式 如：“run.oldbird.hellorss”， 然后点击 “Continue”

> 注意：AppID 栏填写的这个 Bundle ID，就是 iOS 项目中要用的 Bundle ID。

![](http://blog.loveli.site/mweb/16445472577119.jpg)

接下来需要选择应用需要使用的服务（如需要使用到消息推送功能，则选择“Push Notifications”），然后点击 “Continue”

> 注意：如果 App 用不到的服务一定不要勾选，以免响应审核
> ![](http://blog.loveli.site/mweb/16445473210169.jpg)

确认后选择提交，回到 identifiers 页面即可看到刚创建的 App ID。至此，App ID 已经创建完毕，接下来开始创建开发证书，在创建开发证书前，需要先生成证书请求文件。

## 生成证书请求文件

> 不管是申请开发 (Development) 证书还是发布 (Distribution) 证书，都需要使用证书请求 (.certSigningRequest) 文件，证书请求文件需在 Mac OS 上使用 “钥匙串访问” 工具生成。

在“Spltlight Search”中搜索“钥匙串”并打开 “钥匙串访问” 工具：

![](http://blog.loveli.site/mweb/16445474843285.jpg)

![](http://blog.loveli.site/mweb/16445475058975.jpg)

打开菜单 “钥匙串访问”->“证书助理”，选择“从证书颁发机构请求证书...”：

![](http://blog.loveli.site/mweb/16445475215529.jpg)

打开创建请求证书页面，在页面中输入用户邮件地址、常用名称，选择存储到磁盘，点击 “继续” ：

![](http://blog.loveli.site/mweb/16445475961956.jpg)

件名称为“CertificateSigningRequest.certSigningRequest”，选择保存位置，点击 “存储” 将证书请求文件保存到指定路径下，后面申请开发(Development)证书和发布(Production)证书时需要用到

![](http://blog.loveli.site/mweb/16445476200305.jpg)

下面，我们一起来申请开发证书、发布证书及相对应的描述文件。

## 申请开发(Development)证书和描述文件

> 开发(Development)证书及对应的描述文件用于开发阶段使用，可以直接将 App 安装到手机上，一个描述文件最多绑定 100 台测试设备（开发证书不能用于发布应用到 App Store）。

### 申请开发(Development)证书

在证书管理页面选择 “Certificates" 可查看到已申请的所有证书（TYPE：Development 为开发证书，Distribution 为发布证书），点击页面的加号来创建一个新的证书：

![](http://blog.loveli.site/mweb/16445477017512.jpg)

在 “Software” 栏下选中 “iOS App Development” 然后点击 “Continue”：

![](http://blog.loveli.site/mweb/16445477181391.jpg)

接下来需要用到刚刚生成的证书请求文件，点击“Choose File...”选择刚刚保存到本地的 “CertificateSigningRequest.certSigningRequest”文件，点击 “Continue” 生成证书文件：

![](http://blog.loveli.site/mweb/16445477383153.jpg)

生成证书后选择 “Download” 将证书下到本地 (ios_development.cer)：

![](http://blog.loveli.site/mweb/16445477541844.jpg)

双击保存到本地的 ios_development.cer 文件，会自动打开 “钥匙串访问” 工具说明导入证书成功，可以在证书列表中看到刚刚导入的证书，接下来需要导出 .p12 证书文件，选中导入的证书，右键选择 “导出...”：

![](http://blog.loveli.site/mweb/16445478162360.jpg)

输入文件名、选择路径后点击 “存储”：

![](http://blog.loveli.site/mweb/16445478618171.jpg)

输入密码及确认密码后点击 “好”：

![](http://blog.loveli.site/mweb/16445478800102.jpg)

至此，我们已经完成了开发证书的制作（得到了 xxx.p12 证书文件），接下来，继续生成开发阶段所需的描述文件，在生成描述文件之前，需要先添加调试设备（iPhone 、iPad）

### 添加调试设备

> 开发描述文件必须绑定调试设备，只有授权的设备才可以直接安装 App，所以在申请开发描述文件之前，先添加调试的设备。

在证书管理页面选择 “Devices”，可查看到已添加的所有设备信息，点击页面上的加号来添加一个新设备：

![](http://blog.loveli.site/mweb/16445479427228.jpg)

填写设备名称 和 UDID（设备标识）：

![](http://blog.loveli.site/mweb/16445479648032.jpg)

获取设备 UDID 方法，将设备连接到电脑，启动 iTunes，点击此区域可切换显示设备的 UDID，右键选择复制

输入完成后，点击“Continue” 继续完成添加即可；
接下来继续申请描述文件

### 申请开发 (Development) 描述文件

在证书管理页面选择 “Profiles”，可查看到已申请的所有描述文件，点击页面上的加号来添加一个新的描述文件：

![](http://blog.loveli.site/mweb/16445480021950.jpg)

在 “Development” 栏下选中 “iOS App Development”，点击“Continue”按钮：

![](http://blog.loveli.site/mweb/16445480187814.jpg)

这里要选择之前创建的 “App ID” (这里是“run.oldbird.hellorss”)，点击“Continue”：

![](http://blog.loveli.site/mweb/16445481415683.jpg)

接下来选择需要绑定的证书，这里建议直接勾选 “Select All”，点击“Continue”：

![](http://blog.loveli.site/mweb/16445482252325.jpg)

选择授权调试设备，这里建议直接勾选 “Select All”，点击 “Continue”：

![](http://blog.loveli.site/mweb/16445482393511.jpg)

输入描述文件的名称（如“HelloRssProfile”）, 点击 “Generate” 生成描述文件：

![](http://blog.loveli.site/mweb/16445482856598.jpg)

点击“Download”下载保存开发描述文件（文件后缀为 .mobileprovision）

![](http://blog.loveli.site/mweb/16445483355148.jpg)

至此，我们已经得到了开发证书（.p12）及对应的描述文件（.mobileprovision），接下看一下如何制作发布证书及发布描述文件.

由于证书证书跟发布证书的生成过程一样，将不过多阐述。只是对应的**选项都选择发布证书的配置**即可。
