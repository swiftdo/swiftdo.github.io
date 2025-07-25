---
title: VuePress build 内存泄露
sitemap:
  exclude: false
  changefreq: hourly
date: 2020-08-17T00:00:00.000Z
tags:
  - tools
  - vuepress
createTime: 2024/08/02 09:19:27
permalink: /article/phc1w8at/
---

## 背景

随着文档数量的增加，Vuepress 在 ci 构建的可能就会出现 node 内存泄露。

```shell
wait Rendering static HTML...
<--- Last few GCs --->
[5553:0x6387c80]   117350 ms: Scavenge (reduce) 2014.0 (2083.8) -> 2013.7 (2084.3) MB, 4.0 / 0.0 ms  (average mu = 0.125, current mu = 0.003) allocation failure
[5553:0x6387c80]   120580 ms: Mark-sweep (reduce) 2014.3 (2084.3) -> 2013.0 (2084.5) MB, 3224.1 / 0.0 ms  (average mu = 0.080, current mu = 0.032) allocation failure scavenge might not succeed
<--- JS stacktrace --->
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xb00d90 node::Abort() [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 2: 0xa1823b node::FatalError(char const*, char const*) [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 3: 0xcedbce v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 4: 0xcedf47 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 5: 0xea6105  [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 6: 0xea6be6  [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 7: 0xeb4b1e  [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 8: 0xeb5560 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
 9: 0xeb84de v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
10: 0xe7990a v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationType, v8::internal::AllocationOrigin) [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
11: 0x11f2f06 v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
12: 0x15e7819  [/home/travis/.nvm/versions/node/v16.13.1/bin/node]
Aborted
error Command failed with exit code 134.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
The command "yarn docs:build" exited with 134.
cache.2
store build cache
```

## 解决方案

在 package.json 修改配置：

```json
// package.json 配置
"scripts": {
    "docs:build": "node --max_old_space_size=4096 ./node_modules/vuepress/cli.js build docs",
},
```

修改了 docs:build 的执行语句，指定了内存为 4096。
