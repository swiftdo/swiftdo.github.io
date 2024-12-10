(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{750:function(a,t,s){"use strict";s.r(t);var e=s(2),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("通过标签来组织pod和所有其他Kubernetes对象。通过给这些pod添加标签，可以得到一个更组织化的系统。")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("pod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("v2\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置标签")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("creation_method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" manual \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" prod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("container\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx  \n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("  \n")])])]),t("p",[a._v("查看的时候列出标签")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ kubectl get po --show-labels\n")])])]),t("p",[a._v("刷选标签：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ kubectl get po "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" createion_method,env\n")])])]),t("p",[a._v("现有 pod 的添加标签：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ kubectl label po kubia-manual "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("creation_method")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("manual\n")])])]),t("p",[a._v("修改现有pod的标签")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ kubectl label po kubia-manual "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("env")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("debug "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--overwrite")]),a._v("\n")])])]),t("h2",{attrs:{id:"标签选择器列出pod子集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标签选择器列出pod子集"}},[a._v("#")]),a._v(" 标签选择器列出pod子集")]),a._v(" "),t("p",[a._v("列出所有pod, 且 creation_method=manual 的标签的pod:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ kubectl get po "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("createion_method")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("manual\n")])])]),t("p",[a._v("列出包含env标签的所有pod，无论其值如何:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ kubectl get po "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v("\n")])])]),t("p",[a._v("同样列出没有env标签的pod:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ kubectl get po "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'!env'")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);