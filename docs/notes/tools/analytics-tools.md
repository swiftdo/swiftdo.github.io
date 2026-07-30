---
title: 网站流量分析工具
createTime: 2025/07/25 22:07:59
permalink: /article/analytics-tools/
---


> 本文汇总了 **10 款开源** 网站与网络流量分析工具，全部可 **自托管**，并标注了许可证、开发语言、官网及核心特点，方便快速选型。

---

## 1. 网站分析器（Web Analytics）

### Tianji（天机） <Badge type="tip" text="All-in-One" vertical="middle" />
- **许可证** `Apache-2.0`  
- **语言** TypeScript  
- **官网** <https://tianji.msgbyte.com> 

> 网站分析器 + 服务器状态监控 + 服务状态上报，一个 **all-in-one** 应用。

---

### Matomo <Badge type="info" text="GA 替代" vertical="middle" />
- **许可证** `GPL-3.0`  
- **语言** PHP  
- **官网** <https://matomo.org> 

前身 **Piwik**，插件架构、开放 API，目标成为 **Google Analytics 免费替代品**，已被 **140 万+** 网站采用。

---

### Plausible <Badge type="tip" text="轻量" vertical="middle" />
- **许可证** `AGPL-3.0`  
- **语言** Elixir / JavaScript / Shell  
- **官网** <https://plausible.io> 

- 脚本 < 1 KB  
- 无 Cookie，**GDPR / CCPA / PECR** 合规  
- 提供托管版，也可 **Docker 自托管**

---

### Umami
- **许可证** `MIT`  
- **语言** JavaScript / TypeScript  
- **官网** <https://umami.is> 

极简、高性能，支持 **MySQL / PostgreSQL**，可一键 **Docker** 部署。

---

### Shynet
- **许可证** `Apache-2.0`  
- **语言** Python / JavaScript / HTML/CSS  

> “Skynet + shy”——**无需 Cookie 与 JS** 也能提供详细统计，现代且隐私友好。

---

### Fathom
- **许可证** `MIT`  
- **语言** Go / JavaScript  
- **官网** <https://usefathom.com> 

- **不收集个人数据**  
- 提供托管 & 自托管（Docker 镜像）

---

### Ackee
- **许可证** `MIT`  
- **语言** JavaScript (Node.js)  
- **官网** <https://ackee.electerious.com> 

- **自托管** Node.js 应用  
- **匿名化** 追踪，极简界面

---

## 2. 网络流量监控 / 安全分析框架

### Zeek（原 Bro）
- **许可证** `BSD`  
- **语言** C/C++ / Shell  
- **官网** <https://zeek.org> 

> 网络 **安全监控（NSM）** + 通用流量分析框架，可用于 **入侵检测 / 性能测量 / 故障排查**。

---

### Cacti
- **许可证** `GPL-2.0`  
- **语言** PHP / JavaScript  
- **官网** <http://www.cacti.net> 

- 基于 **SNMP + RRDTool** 的图形化流量监控  
- 支持 **树状权限、LDAP 认证、自定义模板**

---

### ntopng
- **许可证** `GPL-3.0`  
- **语言** Lua / C/C++  
- **官网** <https://www.ntop.org> 

- **NetFlow / sFlow / SNMP / 防火墙日志** 多源采集  
- 提供 **Web UI**，支持 **实时 / 历史** 流量可视化  
- 可处理 **100 Gbit** 链路（配合 nProbe Cento）

---

## 快速对比表

| 名称     | 核心亮点                 | 自托管 | 隐私友好 | 推荐场景               |
|----------|--------------------------|--------|----------|------------------------|
| Tianji   | 分析+监控+上报 all-in-one| ✅     | ✅       | 需要一体化监控          |
| Matomo   | 插件丰富，GA 替代        | ✅     | ✅       | 需要功能完整统计        |
| Plausible| <1 KB、无 Cookie         | ✅     | ✅       | 极轻量、合规优先        |
| Umami    | 极简、Docker 一键部署     | ✅     | ✅       | 快速上线、低资源占用     |
| Shynet   | 无 JS / Cookie 跟踪       | ✅     | ✅       | 高隐私静态站点          |
| Fathom   | Go 语言、商业友好         | ✅     | ✅       | 商业项目、注重隐私       |
| Ackee    | Node.js 自托管、匿名化    | ✅     | ✅       | 个人博客 / 小团队        |
| Zeek     | 网络安全 & 流量分析       | ✅     | ✅       | 安全研究、网络取证       |
| Cacti    | SNMP 图形化监控           | ✅     | ✅       | 网络设备流量可视化       |
| ntopng   | 多源流量探测器            | ✅     | ✅       | 企业级网络可视性         |

---
