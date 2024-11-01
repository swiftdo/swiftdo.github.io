---
title: "xm-select 使用指南"
sitemap:
  exclude: false
  changefreq: hourly
date: 2024-10-31
tags:
  - tools
  - html
  - xm-select
  - layui
---

xm-select 使用指南

```html
<div class="layui-form-item">
    <label class="layui-form-label">指定审批人</label>
    <div class="layui-input-block">
        <div id="nodeApprovers"></div>
    </div>
</div>
```

```js
var nodeApproversXmSelect = xmSelect.render({
    el: '#nodeApprovers',
    name: 'nodeApprovers',
    // ----单选配置---
    radio: true, // 设置是否单选
    clickClose: true, // 选择后关闭下拉框
    // ----
    autoRow: true, //自动换行
    data: allEmps, // 选项
    filterable: true, // 支持刷选
    toolbar: { // 开启工具，比如全选，反选，全不选
        show: true,
        list: ['ALL', 'REVERSE', 'CLEAR']
    },
    tree: {
        //以树状结构展示
        show: true,
        showFolderIcon: true,
        //展示虚线
        showLine: true,
        //节点间距
        indent: 20,
    },
    height: 'auto',//高度自适应
    initValue: splitStringBy(openNodeApproverIds, ","), // 初始值 [str]
    on: function (retData) {
        var ids = []
        var names = []
        var retDataArr = retData.arr
        for (i = 0; i < retDataArr.length; i++) {
            ids.push(retDataArr[i].value)
            names.push(retDataArr[i].name)
        }
        var idsStr = ids.join(",")
        var namesStr = names.join(",")
        openNodeApproverIds = idsStr;
    }
});
```

data的格式如下：

```json
[
    {name: '奖品', value: -2, children: [
        {name: '奖品3', value: -3, children: [
            {name: '苹果3', value: 14},
            {name: '香蕉3', value: 15},
            {name: '葡萄3', value: 16},
        ]},
        {name: '苹果2', value: 4},
        {name: '香蕉2', value: 5},
        {name: '葡萄2', value: 6},
    ]},
]
```

更新值：

```js
selectEmployeeXmSelect.setValue(['1', '2']);
```

更新值且禁止修改：

```js
selectEmployeeXmSelect.update({initValue: ["1", "2"], disabled: false});
```