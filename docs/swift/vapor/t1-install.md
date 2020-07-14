---
sitemap:
  exclude: false
  changefreq: hourly
title: '安装'
---

在使用 Vapor 的时候，需要先安装好 Swift，然后安装 `Toolbox`(非必须)。

## macOS

要在 macOS 上使用 Vapor，你将需要 Swift 5.2 或更高版本。

### 安装 Xcode

从 [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) 安装 Xcode 11 或更高版本。

![xcode](https://user-images.githubusercontent.com/1342803/66688324-2396bc80-ec54-11e9-8b96-bd8b29d0ce7c.jpg)

安装后，打开 Terminal 输入以下命令打印 Swift 的版本，检查版本号以确保安装成功。

```sh
$ swift --version
Apple Swift version 5.2.4 (swiftlang-1103.0.32.9 clang-1103.0.32.53)
Target: x86_64-apple-darwin19.5.0
```

### 安装 Toolbox

现在你已经安装了 Swift，让我们安装 [Vapor Toolbox](https://github.com/vapor/toolbox)。它是 Vapor 的 CLI 工具，包含一些实用的工具，比如创建新项目，数据库迁移等操作。

Toolbox 通过 Homebrew 分发。如果你还没有安装 Homebrew，请访问 [brew.sh](https://brew.sh/) 查看安装说明。

```sh
$ brew install vapor/tap/vapor
```

确保安装成功

```sh
$ vapor --help
```

## Ubuntu

要在 Ubuntu 上使用 Vapor，你将需要 Swift 5.2 或更高版本。可以使用 [Swift.org](https://swift.org/download/) 上提供的工具链进行安装。

```sh
sudo apt-get install clang
sudo apt-get install libcurl4 libpython2.7 libpython2.7-dev
#从swift.org找到需要的文件

wget https://swift.org/builds/swift-5.2.3-release/ubuntu1804/swift-5.2.3-RELEASE/swift-5.2.3-RELEASE-ubuntu18.04.tar.gz

tar xzvf swift-5.2.3-RELEASE-ubuntu18.04.tar.gz
sudo mv swift-5.2.3-RELEASE-ubuntu18.04 /usr/share/swift

echo "export PATH=/usr/share/swift/usr/bin:$PATH" >> ~/.bashrc
source  ~/.bashrc
```

### 安装 Toolbox

在 Linux 上，你需要从源代码构建 Toolbox，在 GitHub 上查看 [Toolbox](https://github.com/vapor/toolbox/releases)，以找到最新版本。

```sh
git clone https://github.com/vapor/toolbox.git
cd toolbox
git checkout <desired version>
swift build -c release --disable-sandbox --enable-test-discovery
mv .build/release/vapor /usr/local/bin
```

确保安装成功：

```sh
vapor --help
```
