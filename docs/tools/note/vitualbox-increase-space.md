---
title: "对 VituralBox 虚拟机扩容"
sitemap:
  exclude: false
  changefreq: hourly
date: 2022-04-17
tags:
  - tools
  - VituralBox
---

用 `gitlab` 对内部代码进行私有管理，由于 gitlab 在 MacOS 上的部署太过复杂，所以采用 Ubuntu 虚拟机进行部署。随着项目的不断增多，以及代码的不断迭代，早期给虚拟机规划的 30G 磁盘空间现不够用了，今天出现超容卡死现象。本文就将此扩容过程做下笔记分享给大家，可收藏此文，以便不时之需。

> 使用的 VituralBox 的版本是 `6.1.22`。

## 解决超容问题

因为使用的空间超过了 30G，导致虚拟机重启一直失败。

```sh
Started Hold until boot procss finishes up
```

所以首先需要降低磁盘占用，可删除一些大文件或者无用的磁盘空间。

启动 Ubuntu 的时候，选择 `Advanced options for Ubuntu`

![](http://blog.oldbird.run/mweb/16502539034334.jpg)

> 怎么进入到 Advanced options for Ubuntu？
> 在启动的刚开始的时候，一直**按 shift 键**直到进入 GNU GRUB 菜单即可。

通过上下键选择到`Ubuntu 高级选项`（英文版：Advanced options for Ubuntu），按 enter 键进入到下一级菜单，然后选择 recovery，选最新的版本的 recovery：

![](http://blog.oldbird.run/mweb/16502540484712.jpg)

选中 recovery mode 之后，按 enter 键进入下一级菜单。然后选择 clean：

![](http://blog.oldbird.run/mweb/16502541029388.jpg)

按 enter 键之后开始清理碎片空间，清理之后，重启就可以打开了。

> 如果重启还不行，可以移步到 [这篇文章](https://www.codetd.com/article/9986683)

## 扩容

先给虚拟机分配足够的磁盘空间。

**步骤 1：复制虚拟机磁盘驱动器的路径**

![](http://blog.oldbird.run/mweb/16502546155907.jpg)

复制路径后，在某处记下它，然后关闭 VM 并退出 VirtualBox。

**步骤 2：在 MacOS 上打开终端应用程序**

在 MacOS 终端上粘贴以下命令，用来切换到 VirtualBox 应用程序目录：

```shell
cd /Applications/VirtualBox.app/Contents/Resources/VirtualBoxVM.app/Contents/MacOS/
```

**步骤 3：增加 VirtualBox 磁盘驱动器的大小**

可以用下面两种方式增加虚拟内存：

```sh
VBoxManage modifymedium "path you copied above" --resize [new size in MB]

# 或者
VBoxManage modifyhd "path you copied above" --resize [new size in MB]
```

比如空间设置为 35000MB，那么命令如下：

```shell
VBoxManage modifymedium "/Users/mimi/VirtualBox VMs/ubantu/ubantu.vdi" --resize 35000
```

其中 `/Users/mimi/VirtualBox VMs/ubantu/ubantu.vdi` 就是我们步骤 1 拷贝的路径。

**步骤 4：重新启动 VirtualBox**

当你在 MACOS 上打开 VirtualBox 时，你会看到 VM 磁盘驱动器的大小增加了。

![](http://blog.oldbird.run/mweb/16502551698544.jpg)

> 35000MB / 1024 ~= 34.18G

请记住，虽然你增加了虚拟磁盘的大小，但**如果你的空间是动态分配的，那么实际的分区大小仍然不变。**

可以手动将这块新增且未分配的空间分配到磁盘。

## 改变实际分区的空间大小

**步骤 1：安装磁盘管理工具 `gparted`：**

```shell
sudo apt-get install gparted
```

**步骤 2：打开磁盘管理工具**

```shell
sudo gparted
```

![](http://blog.oldbird.run/mweb/16502602095545.jpg)

然后可以看到有你自己的分区和未分配分区，选择自己的分区然后鼠标右键选择“Resize/Move”，将未分配空间全部添加给你的分区。

![](http://blog.oldbird.run/mweb/16502603166680.jpg)

点击编辑，选择“应用全部操作”，等待操作完成即可

![](http://blog.oldbird.run/mweb/16502603838579.jpg)
