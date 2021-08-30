---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python 遍历指定目录下所有文件名"
date: 2021-8-30
tags:
  - python
---

遍历一个目录，上传该目录下的所有图片：

```py

def upload_file_to_wx_gzh(path: str, filename: str):
    '''上传图片'''
    data = {
        "app_id": "xxx",
        "app_secret": "xxx",
        "gzh_name": 'mddyt'
    }

    # 判断本地是否存储了该图片
    loc_img = dz_unsplash_wx_collection.find_one({'filename': filename})

    if loc_img:
        print('图片已经上传')
        return

    print('图片上传中...')

    # 上传图片
    res = requests.post('http://images.loveli.site/xxxx',
                        data=data, files={'file': open(path, 'rb')})

    print(f'返回结果：：{res.text}')

    resJson = res.json()

    # 将结果报错在mongo 中
    dz_unsplash_wx_collection.insert_one({
        "filename": filename,
        "media_id": resJson['media_id'],
        "wx_url": resJson['url'],
        "gzh": data['gzh_name']
    })
    print('已保存')


def upload_bz():
    '''遍历目录下的所有图片'''
    doc_path = f'unsplash/wallpaper'
    g = os.walk(doc_path)
    for path, dir_list, file_list in g:
        for file_name in file_list:
            if file_name.endswith(('.jpg', '.png', '.jpeg')):
                file_path = os.path.join(path, file_name)
                upload_file_to_wx_gzh(path=file_path, filename=file_name)

```
