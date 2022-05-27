---
sitemap:
  exclude: false
  changefreq: hourly
title: "Python ASE 加解密"
date: 2022-05-26
tags:
  - python
  - flask
  - 加密/解密
---

基于 Python3，通过 ase 加解密，需要安装依赖：

```shell
pip install pycryptodome
pip install pycryptodomex
```

算法：

```py
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from Crypto.Util.Padding import unpad

_ASE_KEY = b"0123456789oldbrd"
_ASE_IV = b"oldbrd0123456789"

# 解密
def aseDecryt(url: str):
  msg = base64.b64decode(url)
  cipher = AES.new(_ASE_KEY, AES.MODE_CBC, _ASE_IV)
  plain_text = cipher.decrypt(msg)
  unpadtext = unpad(plain_text,16,'pkcs7')
  plain_text = base64.b64decode(unpadtext).decode("utf-8")
  return plain_text

# 加密
def aseEncrypt(data: str):
  msg = base64.b64encode(data.encode('utf-8'))
  padtext = pad(msg, 16, style='pkcs7')
  cryptor = AES.new(_ASE_KEY, AES.MODE_CBC, _ASE_IV)
  ciphertext = cryptor.encrypt(padtext)
  return base64.b64encode(ciphertext).decode('utf-8')
    
text = "我是谁s34038080"

enc = aseEncrypt(text)
print(enc)

dec = aseDecryt(enc)
print(dec)
```