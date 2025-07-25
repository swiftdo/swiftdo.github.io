---
sitemap:
  exclude: false
  changefreq: hourly
title: K8s 使用标签组织pod
date: 2024-09-29T00:00:00.000Z
tags:
  - swift
  - vapor
  - docker
  - k8s
createTime: 2024/09/29 14:30:50
permalink: /swift/1iu1je5z/
---

通过标签来组织pod和所有其他Kubernetes对象。通过给这些pod添加标签，可以得到一个更组织化的系统。

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod-v2
  labels: # 配置标签
    creation_method: manual 
    env: prod
spec:
  containers:
    - name: my-container
      image: nginx  
      ports:
        - containerPort: 80  
```

查看的时候列出标签

```sh
$ kubectl get po --show-labels
```

刷选标签：

```sh
$ kubectl get po -L createion_method,env
```

现有 pod 的添加标签：

```sh
$ kubectl label po kubia-manual creation_method=manual
```

修改现有pod的标签

```sh
$ kubectl label po kubia-manual env=debug --overwrite
```


## 标签选择器列出pod子集

列出所有pod, 且 creation_method=manual 的标签的pod:

```sh
$ kubectl get po -l createion_method=manual
```

列出包含env标签的所有pod，无论其值如何:

```sh
$ kubectl get po -l env
```

同样列出没有env标签的pod:

```sh
$ kubectl get po -l '!env'
```














