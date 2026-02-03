---
title: macos 上如何关闭 ollama 开机自启问题
createTime: 2026/02/03 09:16:03
permalink: /ai/ollama-close-auto-launch/
---



如果你已经在 **系统设置 → 登录项** 中关闭了 Ollama，但它仍然在 Mac 重启后自动启动，那么可以通过 **修改 Ollama 内置的 LaunchAgent 配置**，从系统层面阻止它开机自启。

> 本文 **只针对「修改 LaunchAgent」这一种方式**。

---

## 原因说明

Ollama 在 macOS 上会注册一个 `LaunchAgent`：

* macOS 在用户登录后会加载该配置
* 只要 `RunAtLoad = true`
* Ollama 就会在登录时被自动启动

即使你已经从「登录项」中移除了 Ollama，这个机制依然会生效。

---

## Ollama 的 LaunchAgent 文件位置

```
/Applications/Ollama.app/Contents/Library/LaunchAgents/com.ollama.ollama.plist
```

---

## 操作步骤

### 1️⃣ 打开 LaunchAgent 配置文件

在终端中执行：

```bash
open -a TextEdit /Applications/Ollama.app/Contents/Library/LaunchAgents/com.ollama.ollama.plist
```

你也可以使用其他文本编辑器（如 VS Code、BBEdit）直接打开该文件。

---

### 2️⃣ 修改 `RunAtLoad` 参数

在文件中找到以下内容：

```xml
<key>RunAtLoad</key>
<true/>
```

将其修改为：

```xml
<key>RunAtLoad</key>
<false/>
```

---

### 3️⃣ 保存文件

确保文件成功保存。

如果保存失败，通常是 macOS 权限保护导致，见下方说明。

---

### 4️⃣ 重启 macOS

重启系统后，Ollama 将不会再随系统登录自动启动。

---

## 常见问题与注意事项

### ❗ 无法保存文件

macOS 对应用目录有完整性保护，可能会阻止编辑器保存修改。

解决方法：

1. 打开 **系统设置 → 隐私与安全**
2. 找到 **自动化 / 应用管理**
3. 允许你使用的编辑器（TextEdit / Terminal / VS Code）
   控制或修改其他应用
4. 重新打开编辑器后再尝试保存

---

### ❗ 升级 Ollama 后自启又恢复

这是正常现象：

* Ollama 在更新时可能会 **重新写入 LaunchAgent**
* `RunAtLoad` 会被重置为 `true`

解决方式：

* 每次升级后重新检查并修改该文件
* 或自行编写脚本自动修正（适合高级用户）

---

## 风险提示

* 此方法会 **直接修改应用内部文件**
* 不属于官方推荐路径
* 但在「系统设置关闭无效」的情况下非常有效

如果你能接受 **升级后可能需要再次修改**，这是目前最彻底、最直接的解决方案。

---

## 总结

Ollama 在 macOS 上的开机自启并非来自普通登录项，而是由 `LaunchAgent` 中的 `RunAtLoad` 控制。

只需将：

```xml
<key>RunAtLoad</key>
<true/>
```

改为：

```xml
<key>RunAtLoad</key>
<false/>
```

即可从根源上阻止 Ollama 开机自启。

