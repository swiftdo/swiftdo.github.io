---
sitemap:
  exclude: false
  changefreq: hourly
title: 禁止海外ip访问
date: 2024-12-8
tags:
  - centos
createTime: 2024/12/09 10:56:14
permalink: /article/q4tftyiy/
---


只需要国内访问或个别几个国家访问。那就选择白名单，把允许的几个国家加入白名单中，其他全部屏蔽掉即可。

获取国内 ip 列表：

```sh
wget https://github.com/17mon/china_ip_list > /root/china_ssr.txt
```

创建 `allcn.sh` 脚本：

```sh

mmode=$1

 
CNIP="/root/china_ssr.txt"


gen_iplist() {
        cat <<-EOF
             $(cat ${CNIP:=/dev/null} 2>/dev/null)
		EOF
}

flush_r() {
iptables  -F ALLCNRULE 2>/dev/null
iptables -D INPUT -p tcp -j ALLCNRULE 2>/dev/null
iptables  -X ALLCNRULE 2>/dev/null
ipset -X allcn 2>/dev/null
}

mstart() {
ipset create allcn hash:net 2>/dev/null
ipset -! -R <<-EOF
$(gen_iplist | sed -e "s/^/add allcn /")
EOF

iptables -N ALLCNRULE
iptables -I INPUT -p tcp -j ALLCNRULE
iptables -A ALLCNRULE -s 127.0.0.0/8 -j RETURN
iptables -A ALLCNRULE -s 169.254.0.0/16 -j RETURN
iptables -A ALLCNRULE -s 224.0.0.0/4 -j RETURN
iptables -A ALLCNRULE -s 255.255.255.255 -j RETURN
#可在此增加你的公网网段，避免调试ipset时出现自己无法访问的情况

iptables -A ALLCNRULE -m set --match-set allcn  src -j RETURN
iptables -A ALLCNRULE -p tcp -j DROP


}

if [ "$mmode" == "stop" ] ;then
flush_r
exit 0
fi

flush_r
sleep 1
mstart

```

授予可执行权限：

```sh
chmod +x allcn.sh
```

国外IP无法访问网站：

```sh
./allcn.sh
```

恢复访问网站:

```sh
./allcn.sh stop
```
