---
sitemap:
  exclude: false
  changefreq: hourly
title: Python 之 MongoDB 指定大小的随机数据
date: 2021-8-30
tags:
  - python
createTime: 2024/08/02 09:19:27
permalink: /python/tuqkzc6w/
---

从 mongodb 中从符合条件的数据中随机出指定大小的数据：

```python
def db_random_data(type: int, size: int = 21):
    dbRes = collection.aggregate([
        {
            "$match": {
                "is_gzh_upload": {"$exists": False},
                "type": type
            }
        },
        {'$sample': {'size': size}}
    ])
    res = list(dbRes)
    return res
```
