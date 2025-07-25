---
sitemap:
  exclude: false
  changefreq: hourly
title: Python 之 mongodb 分页上传数据
date: 2021-8-30
tags:
  - python
createTime: 2024/08/02 09:19:27
permalink: /python/jdx1mqpq/
---

将本地全部数据，分页上传到服务中

```py
# 上传全部壁纸
def upload(page_no: int):

    page_size = 1000
    skip = page_size * (page_no - 1)

    res = collection.find().skip(skip=skip).limit(page_size)

    arr = list(res)

    for item in arr:
        del item['_id'] # 删除_id键

    if len(arr) > 0:
        params = {"items": dumps(arr)}
        tt = requests.post(
            "https://xxxx", data=params)
        print(tt.json())
        upload(page_no + 1)


```
