(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{800:function(t,s,a){"use strict";a.r(s);var n=a(8),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("基于 Python3，通过 ase 加解密，需要安装依赖：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pycryptodome\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pycryptodomex\n")])])]),a("p",[t._v("算法：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" base64\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Crypto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cipher "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AES\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Crypto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Padding "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pad\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Crypto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Padding "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unpad\n\n_ASE_KEY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('b"0123456789oldbrd"')]),t._v("\n_ASE_IV "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('b"oldbrd0123456789"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解密")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aseDecryt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  cipher "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ASE_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_CBC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _ASE_IV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  plain_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cipher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  unpadtext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" unpad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plain_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pkcs7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  plain_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unpadtext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" plain_text\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加密")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aseEncrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  padtext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pkcs7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  cryptor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ASE_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODE_CBC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _ASE_IV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ciphertext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cryptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padtext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ciphertext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \ntext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是谁s34038080"')]),t._v("\n\nenc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aseEncrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aseDecryt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);