/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9da7da2968264facdd7ea124b9fce52a"
  },
  {
    "url": "about/app/index.html",
    "revision": "20d34137d1c3ed640f0f1cf562ae3421"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5e12c81c69efb43019fdac3083911aac"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "683bbd8a61ec54b8518c7b42c43655d3"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7987400cca7b1a25b6676c19774af3b5"
  },
  {
    "url": "about/index/index.html",
    "revision": "736d4a06138997eb5fb90a5592fd5f57"
  },
  {
    "url": "ai/index.html",
    "revision": "4714061eba121d7c145665e7f1bcac1c"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a17ce53a62853764a7b78a33a2f8f4d7"
  },
  {
    "url": "assets/css/0.styles.69fe0ec4.css",
    "revision": "b222c2e7ac4543d2fa4d450479a65364"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.5964dece.js",
    "revision": "48529d0751226abf8bdf8838eb0a1898"
  },
  {
    "url": "assets/js/10.fdb5f42a.js",
    "revision": "0b94c942f3bac49c4bcd2344af2cace1"
  },
  {
    "url": "assets/js/100.9e395d60.js",
    "revision": "90d47e8abe25f9c6b3d276c26617a81e"
  },
  {
    "url": "assets/js/101.e1e63393.js",
    "revision": "a40dc600de2c8a709164c63824ce69f8"
  },
  {
    "url": "assets/js/102.6a3c2ab5.js",
    "revision": "f50144a3a6341493b69af7a140636d78"
  },
  {
    "url": "assets/js/103.f47e76f7.js",
    "revision": "b5829b2ce34f363e2c90c2f02adb4269"
  },
  {
    "url": "assets/js/104.639c7371.js",
    "revision": "1ca556cfe8bc0e6b803eb86509ea3a66"
  },
  {
    "url": "assets/js/105.0e4f2937.js",
    "revision": "2d183ee92d4ce82ee8409d38ba02091c"
  },
  {
    "url": "assets/js/106.9bdcc44a.js",
    "revision": "bbd739b21ab82552e35f3c3c2a3d6859"
  },
  {
    "url": "assets/js/107.cdc94605.js",
    "revision": "bab8df2a3e0c866e0bef7d8d5eaa8380"
  },
  {
    "url": "assets/js/108.d39c12ce.js",
    "revision": "e78db589642b984e71063e4e690ab2d3"
  },
  {
    "url": "assets/js/109.557a778a.js",
    "revision": "22e126e0ae4b6079392de8ca37971fd0"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.a806403f.js",
    "revision": "be5fbd61d6fcd5d8ba4ca88e853537ca"
  },
  {
    "url": "assets/js/111.47b8c493.js",
    "revision": "4b92cc1cf13062efb182e07147226f01"
  },
  {
    "url": "assets/js/112.51e3d32a.js",
    "revision": "30235e7fa61bb4ab26fc37635832b96c"
  },
  {
    "url": "assets/js/113.7606e6b0.js",
    "revision": "d812567e1f6c9374b759f353c2f6cd15"
  },
  {
    "url": "assets/js/114.c55acbce.js",
    "revision": "e618c807e0fa2d41f3f52865be6b1838"
  },
  {
    "url": "assets/js/115.7818b535.js",
    "revision": "ed71160d72f3763907385f6fcaf35693"
  },
  {
    "url": "assets/js/116.54f76385.js",
    "revision": "4f1c78803d8fe4572646e3a3d7bb31bf"
  },
  {
    "url": "assets/js/117.b0f78101.js",
    "revision": "1b5911bb55d3c5e1275b08feff9b593c"
  },
  {
    "url": "assets/js/118.1007c5c9.js",
    "revision": "ca8dccfef241fd305cea2133b4904031"
  },
  {
    "url": "assets/js/119.7969dd3b.js",
    "revision": "dc5b1c0f00e3e20ba4f0c424149d48fe"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.363d28de.js",
    "revision": "fc446164843e0399f04102d9bee58495"
  },
  {
    "url": "assets/js/121.b6b9eaa8.js",
    "revision": "a796fd8b22324d6c3a0ed3eab49ddb83"
  },
  {
    "url": "assets/js/122.52a50a2f.js",
    "revision": "65842eacf41fcf1e75653b5b36388ec2"
  },
  {
    "url": "assets/js/123.28a0f3db.js",
    "revision": "0c2f92e07fca2c4dc530ba00f3b6613f"
  },
  {
    "url": "assets/js/124.9316d9e9.js",
    "revision": "86c02f4698b9d471cebec384dde32d20"
  },
  {
    "url": "assets/js/125.0c8cb2ab.js",
    "revision": "80588ba24e7d7b14b4dc2f1f42cf84ea"
  },
  {
    "url": "assets/js/126.02647977.js",
    "revision": "763207d27494014179afc5782dc35c16"
  },
  {
    "url": "assets/js/127.b40e1ba0.js",
    "revision": "99e0eaadf46808eb91e80d1f82d19d3a"
  },
  {
    "url": "assets/js/128.eb282601.js",
    "revision": "b1c141936e036c7be1442d825b9a4789"
  },
  {
    "url": "assets/js/129.8faa50d5.js",
    "revision": "991dc4749f25689c7d9147e542f19ea5"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.ce63818f.js",
    "revision": "c6dbca1768db6a1645d6ed9e28c73e34"
  },
  {
    "url": "assets/js/131.bed8fdce.js",
    "revision": "ede22356e98dc12b6f4b77ec2fc61735"
  },
  {
    "url": "assets/js/132.5ab15301.js",
    "revision": "5a8794496d0373dd137a1c3c01e0d82c"
  },
  {
    "url": "assets/js/133.4dddb3c2.js",
    "revision": "58e7bc65422d79285be969e2775fb0ac"
  },
  {
    "url": "assets/js/134.abb5e094.js",
    "revision": "95841616b9052fa9efd099d259374106"
  },
  {
    "url": "assets/js/135.2e4f9d5d.js",
    "revision": "8107f9ee60983f541cda59710f1884cd"
  },
  {
    "url": "assets/js/136.63fa1e4c.js",
    "revision": "88d020c9a3aa9b252698e583458d7355"
  },
  {
    "url": "assets/js/137.7f98684c.js",
    "revision": "7451d1e2b89ed4a0de61cc15d967aaf3"
  },
  {
    "url": "assets/js/138.3e228175.js",
    "revision": "122dd4e05033a35cfd0954cca777ff9b"
  },
  {
    "url": "assets/js/139.51e8105b.js",
    "revision": "50cf4a4dd3778574362c936d8d29f2b7"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.543d1fcc.js",
    "revision": "36c28ab000c1d368d4710f82c102d21f"
  },
  {
    "url": "assets/js/141.b4674b07.js",
    "revision": "b82b3f5c3e41f0d3de57c85518a54c5b"
  },
  {
    "url": "assets/js/142.569aed0c.js",
    "revision": "8c3a20545ff442332d67ff054856d854"
  },
  {
    "url": "assets/js/143.cafc6648.js",
    "revision": "4eaffdc0bc16a5b98e739787ee78943a"
  },
  {
    "url": "assets/js/144.a9684ff8.js",
    "revision": "971be5d80933f6e9bfa9d5377ae3f6e6"
  },
  {
    "url": "assets/js/145.fcb41565.js",
    "revision": "bb2b8950c28a2f708bd4f3447a1ed940"
  },
  {
    "url": "assets/js/146.c3bb8420.js",
    "revision": "4deda4036b471fab2daf9d9bb53116c7"
  },
  {
    "url": "assets/js/147.15a560de.js",
    "revision": "5e99902787d12a12bb44f1065777a0a4"
  },
  {
    "url": "assets/js/148.f96bceb2.js",
    "revision": "803c02a47238dcaa6d96fc8949dedc11"
  },
  {
    "url": "assets/js/149.2ddbfe80.js",
    "revision": "304956a8619d37733b979b853dbc230a"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.f25517c8.js",
    "revision": "61dc5b42046bcbe1cb5ae1c3bceef09e"
  },
  {
    "url": "assets/js/151.ffa79cce.js",
    "revision": "c1241f3dfd12c8c7c5abd4df09e94d8d"
  },
  {
    "url": "assets/js/152.bfa83135.js",
    "revision": "5347c571c7c381cd9e955b85bab9a59b"
  },
  {
    "url": "assets/js/153.5d65abb4.js",
    "revision": "f1eba3855cf01c316e570db66b661976"
  },
  {
    "url": "assets/js/154.61a65b6e.js",
    "revision": "960adeb719a2fbf86649db92f5deb26b"
  },
  {
    "url": "assets/js/155.bb98cdd6.js",
    "revision": "c985caccd875de5232c2c2055c98e7a3"
  },
  {
    "url": "assets/js/156.2c919498.js",
    "revision": "41d9e0655d12868fc7cf0988a7189e78"
  },
  {
    "url": "assets/js/157.326dd1a4.js",
    "revision": "07fd08bfc40ca5bc94323acd6b3a1fc2"
  },
  {
    "url": "assets/js/158.0928cf0d.js",
    "revision": "091cc30a7a83414bc258b8a0d241d15b"
  },
  {
    "url": "assets/js/159.c71508db.js",
    "revision": "e7002b98dd9b012da76ae2ebab5b5091"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.7539d813.js",
    "revision": "138f0c000427dcf490fbcce37cf79443"
  },
  {
    "url": "assets/js/161.89e57be1.js",
    "revision": "5ae832950d4b9d23cca1d80f24400e41"
  },
  {
    "url": "assets/js/162.a6155d2c.js",
    "revision": "a1bc2f8b0545b235186d485d33a76a05"
  },
  {
    "url": "assets/js/163.1cd4147f.js",
    "revision": "3637f2c6e8e3e215aa42f5870a17cbc3"
  },
  {
    "url": "assets/js/164.db70d5e1.js",
    "revision": "8a60880db27c2e8202b3573fe00b7830"
  },
  {
    "url": "assets/js/165.104f8358.js",
    "revision": "9f4fe1ca6364a4cf9134d98e5f1b44e2"
  },
  {
    "url": "assets/js/166.54e70744.js",
    "revision": "8cb4fc3b9affcd03c79800b7fc656130"
  },
  {
    "url": "assets/js/167.976ae16a.js",
    "revision": "0e6de70c785ef5324e70641be9b92ebb"
  },
  {
    "url": "assets/js/168.4e180b6a.js",
    "revision": "c18252301947091308f255cb77122c5b"
  },
  {
    "url": "assets/js/169.89cf3230.js",
    "revision": "3fa6bf93e2abf8fe2b6780d81925c44a"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.35a4c2a8.js",
    "revision": "17ab616dc5cdcf1704b26f356b267c87"
  },
  {
    "url": "assets/js/171.4c27feb7.js",
    "revision": "da97d7f0b4b254f43ccfc28afa0efe58"
  },
  {
    "url": "assets/js/172.a2da6c2b.js",
    "revision": "3c4672a8be775849f8a06cec09f332b6"
  },
  {
    "url": "assets/js/173.57039515.js",
    "revision": "f16a58e7e3871403f05cecc7bec1e73f"
  },
  {
    "url": "assets/js/174.4093da5e.js",
    "revision": "235fb0bfd0f14a63e9e7c2d44d838c8e"
  },
  {
    "url": "assets/js/175.2a68450e.js",
    "revision": "e43826185e027826d203ba0818d46c73"
  },
  {
    "url": "assets/js/176.f4306414.js",
    "revision": "76190165b7d92eb89338f83c3d48f77d"
  },
  {
    "url": "assets/js/177.9089a3f0.js",
    "revision": "8bed73a207eb797602a4a88f3ef84e0b"
  },
  {
    "url": "assets/js/178.646bcbc8.js",
    "revision": "9e34f15768431d9b143c48e5b655752d"
  },
  {
    "url": "assets/js/179.a0136695.js",
    "revision": "454cdbfe01395e9792c55b24d8e778d9"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.26ce0337.js",
    "revision": "2270fd0258173835ba8da874c9c2b1b7"
  },
  {
    "url": "assets/js/181.c45a83f9.js",
    "revision": "d972be6b7d95e4984820ff1e83ee9e6d"
  },
  {
    "url": "assets/js/182.694dc20a.js",
    "revision": "9b019a6dd51bb1e2a0bd398a950e2e0c"
  },
  {
    "url": "assets/js/183.f6dc8e86.js",
    "revision": "7c9e859c0c4f1dcfe92263dafddab35f"
  },
  {
    "url": "assets/js/184.161c9a33.js",
    "revision": "a34b23b6c218f87bdcc001cd34843335"
  },
  {
    "url": "assets/js/185.e9944d5c.js",
    "revision": "de860c33104d9a8e062b487e12f01319"
  },
  {
    "url": "assets/js/186.5770c53f.js",
    "revision": "e6a5755c51e8f702f5e84cdf365dd1d6"
  },
  {
    "url": "assets/js/187.1f592f8a.js",
    "revision": "faa7bc170c68c04662688ec7a29f07a6"
  },
  {
    "url": "assets/js/188.11893701.js",
    "revision": "8b95f4d3f2fc2b8d55bfb0550621a4ab"
  },
  {
    "url": "assets/js/189.486eb71a.js",
    "revision": "71f846dee871c8d0a1d447034b91001a"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.60cef45c.js",
    "revision": "5c500d6fc9d27b17e768ca38cf7252be"
  },
  {
    "url": "assets/js/191.97710a55.js",
    "revision": "6ef7dbd2402eec1d660f84c7d0cd0ef0"
  },
  {
    "url": "assets/js/192.c45959ad.js",
    "revision": "a6a319e3ecb4c7fcf524dbc5daa4d811"
  },
  {
    "url": "assets/js/193.a1778fc6.js",
    "revision": "1913c391bbf3f56430b29885e9d6fc51"
  },
  {
    "url": "assets/js/194.51cdad45.js",
    "revision": "6f059bbda4fd0f421b2b39a8bdf768dd"
  },
  {
    "url": "assets/js/195.d3fd56e7.js",
    "revision": "1d31f24ff53688e1362d3cf7bd12c1e8"
  },
  {
    "url": "assets/js/196.1e7bb2f4.js",
    "revision": "e18b1d2912f56e8b66618f9926c48f76"
  },
  {
    "url": "assets/js/197.3640fb2c.js",
    "revision": "9d98a30402646f21aec1af3255bd59a7"
  },
  {
    "url": "assets/js/198.95575766.js",
    "revision": "0590bb4ffec0cb38a1fd824cbf8d6e61"
  },
  {
    "url": "assets/js/199.9cac318c.js",
    "revision": "2e2e25bbebda7500ec397d5f55a611be"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.1f8cb9c1.js",
    "revision": "18d130bcaacd7a432cb8310d90bf42fe"
  },
  {
    "url": "assets/js/201.0b4f2c39.js",
    "revision": "1645d76d0b1fa8cd6929a430e7097a36"
  },
  {
    "url": "assets/js/202.b9f82bc5.js",
    "revision": "9d01c9be381826c39fc6e49d6d695d8f"
  },
  {
    "url": "assets/js/203.cbbf9e36.js",
    "revision": "0897ebb4e3891a302795c968c4ef984a"
  },
  {
    "url": "assets/js/204.4fe2fc07.js",
    "revision": "a539b5c2cd68bc79e812798242b10788"
  },
  {
    "url": "assets/js/205.184308d0.js",
    "revision": "41229926d150455c50f2a5f73c274735"
  },
  {
    "url": "assets/js/206.cbafa11d.js",
    "revision": "d12eac8f6868b4ea10dddb52a3cd7dc9"
  },
  {
    "url": "assets/js/207.bc621060.js",
    "revision": "3f99a5d35d78a58a2c302ac3c719b777"
  },
  {
    "url": "assets/js/208.f940405c.js",
    "revision": "27f87dd7ce7e24490716ecfd5822f047"
  },
  {
    "url": "assets/js/209.18acd605.js",
    "revision": "3cbd1f5945db835779268d5a6f33b4ca"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.779b1620.js",
    "revision": "61b51e80c78e3deb7a756b05236dfbde"
  },
  {
    "url": "assets/js/211.447474a9.js",
    "revision": "4557b39a306c42dc1ff9cf3a4828060e"
  },
  {
    "url": "assets/js/212.ea98a6dc.js",
    "revision": "74b2c3781fd5326043c465fb9e4673dd"
  },
  {
    "url": "assets/js/213.b7f43d20.js",
    "revision": "890bccb3cae15ede0ba82d98bec0e639"
  },
  {
    "url": "assets/js/214.22e1120e.js",
    "revision": "59348bb80e5600b591e4304bdb294932"
  },
  {
    "url": "assets/js/215.a6c64876.js",
    "revision": "ffd8c6d56374064b836618a61cda13de"
  },
  {
    "url": "assets/js/216.911f2b4d.js",
    "revision": "0a8755fec24e49572c5d925ff2b57337"
  },
  {
    "url": "assets/js/217.66378ee8.js",
    "revision": "b9b1ed3d34b9733bffb310f0cb29efc1"
  },
  {
    "url": "assets/js/218.4c15c165.js",
    "revision": "b0cb0c7d227f3926fe333d5d30df7bb2"
  },
  {
    "url": "assets/js/219.5bcc59eb.js",
    "revision": "66ce64d4b90595018fd9686dcba3d665"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.fdd2433a.js",
    "revision": "e473c4121d1c81fcbdfe6900a10027ff"
  },
  {
    "url": "assets/js/221.69909a2a.js",
    "revision": "4f09cc5d1dcb673427b62bd9e056795a"
  },
  {
    "url": "assets/js/222.ac028afe.js",
    "revision": "bd6387ba3dc25fad4a859d8eab327411"
  },
  {
    "url": "assets/js/223.4de8ed2d.js",
    "revision": "67434e918df8d539f721454d38075310"
  },
  {
    "url": "assets/js/224.aae8b4ca.js",
    "revision": "4e9bf98496abbb5fd78df60836b1917b"
  },
  {
    "url": "assets/js/225.c4d06206.js",
    "revision": "2ed3c0a17b2b75e1cdd3eb84d2e8dbcb"
  },
  {
    "url": "assets/js/226.d0d9c520.js",
    "revision": "7fb8e75c68c2400641a5c8d7441fb1a8"
  },
  {
    "url": "assets/js/227.a7c32466.js",
    "revision": "dc6e70b6b59aa017fd69b67746939fbb"
  },
  {
    "url": "assets/js/228.69cf253d.js",
    "revision": "c3b7c5bb645486906085ad5ed29bc52e"
  },
  {
    "url": "assets/js/229.7fb78e8b.js",
    "revision": "544104c6888053a5ac5a817e62885fad"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.7455263d.js",
    "revision": "a34630e76995d7f0020010067b913162"
  },
  {
    "url": "assets/js/231.ea717d86.js",
    "revision": "fc732d5eb10f28ec6ce076c8a0cf4cd8"
  },
  {
    "url": "assets/js/232.1d3c1bd4.js",
    "revision": "fddd0661adfc691feac8f029810de0d2"
  },
  {
    "url": "assets/js/233.156465b1.js",
    "revision": "bf3ff7dcb15dcf140a2d1c771f2e1edd"
  },
  {
    "url": "assets/js/234.846a1813.js",
    "revision": "ef3fbadbbefeab384a9efd56081a5c18"
  },
  {
    "url": "assets/js/235.267a3599.js",
    "revision": "95ec193b8fe3217c1e5c45ca98754fbb"
  },
  {
    "url": "assets/js/236.56770268.js",
    "revision": "62d7d625574790c0ed1450da47670200"
  },
  {
    "url": "assets/js/237.28b883dd.js",
    "revision": "ae649e255507e73b827319565058019f"
  },
  {
    "url": "assets/js/238.88f8a430.js",
    "revision": "32038a3131f4f6eedf40b384d237d9b6"
  },
  {
    "url": "assets/js/239.27342ce9.js",
    "revision": "f7db4d79b0726d2a261b8613362da8ab"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.bd690f5c.js",
    "revision": "8fb3f06e2c138e686a4b517fae51e2d8"
  },
  {
    "url": "assets/js/241.bc4d1832.js",
    "revision": "547ef8e05bed15a90182ed238f64559f"
  },
  {
    "url": "assets/js/242.ad139b92.js",
    "revision": "7ea53e8d62ca49952c5d2479e2c9f4f5"
  },
  {
    "url": "assets/js/243.da8ba950.js",
    "revision": "7d95fc80b1bd2f55b59dccac1a7e0f08"
  },
  {
    "url": "assets/js/244.553af658.js",
    "revision": "cade9767ae2ad2aca4ce0f5b769fcfa7"
  },
  {
    "url": "assets/js/245.71a9cd22.js",
    "revision": "1bacdef9e0443bf1a7358902f78887b2"
  },
  {
    "url": "assets/js/246.b5f39f12.js",
    "revision": "f35384932210be6acd9adecc7c877967"
  },
  {
    "url": "assets/js/247.5a29ed3e.js",
    "revision": "daf391dbc5eeb599e8dde50becb25f1e"
  },
  {
    "url": "assets/js/248.48930173.js",
    "revision": "7582ab793a258ca5e3d2b2642e09de22"
  },
  {
    "url": "assets/js/249.9f25a22d.js",
    "revision": "e83a5e090f64538aa6139cbd94fe878e"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.0de07865.js",
    "revision": "1b1c3048e5b08810fa219e43ecb8af67"
  },
  {
    "url": "assets/js/251.faa1f46c.js",
    "revision": "cdb91ba9ce9bc4baed503bde6e8e89c5"
  },
  {
    "url": "assets/js/252.4b93d479.js",
    "revision": "e198658b4bea46584717e0840c5b7edf"
  },
  {
    "url": "assets/js/253.f8f04fd5.js",
    "revision": "374e1496dd5cfab5f4d89f27492abd43"
  },
  {
    "url": "assets/js/254.8b477050.js",
    "revision": "92ef0457bb67c4b7fc892c1d2af239e8"
  },
  {
    "url": "assets/js/255.15c00356.js",
    "revision": "c5e558dd27d82ea9f64e15aca94609a8"
  },
  {
    "url": "assets/js/256.3506dd7c.js",
    "revision": "7107137504f58f2c2ad9a0beb8f20157"
  },
  {
    "url": "assets/js/257.0523992d.js",
    "revision": "5f4841096c25579311b112a62813959d"
  },
  {
    "url": "assets/js/258.020a148c.js",
    "revision": "70b50cd0d929e67959e44f9c75a7bc24"
  },
  {
    "url": "assets/js/259.e703b97d.js",
    "revision": "86f7cd7447b1d59095aa7752ca0efa96"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.506d7052.js",
    "revision": "47afe3bd0cc5b72170e6989babe28812"
  },
  {
    "url": "assets/js/261.6c208915.js",
    "revision": "32f8e58854b42ddc1f6e19bcd6c9c641"
  },
  {
    "url": "assets/js/262.758dac25.js",
    "revision": "a5c8032c9ba80588e6019d2484baed17"
  },
  {
    "url": "assets/js/263.59f6baee.js",
    "revision": "507e434b34ea28602d914d661bf9e981"
  },
  {
    "url": "assets/js/264.48dd731e.js",
    "revision": "1f65136423dc06853a49d6e16031e452"
  },
  {
    "url": "assets/js/265.49abd085.js",
    "revision": "eefc19d2a51f5c448ce1c42ffd88fa94"
  },
  {
    "url": "assets/js/266.d15637d6.js",
    "revision": "0ba7ed4e96025005934d7114e18af317"
  },
  {
    "url": "assets/js/267.b8ff8d65.js",
    "revision": "5872c6f4f9ea9527061573f57ba000a4"
  },
  {
    "url": "assets/js/268.899e4032.js",
    "revision": "335d1fffa6095cbc6ee9dcc31b7dc2da"
  },
  {
    "url": "assets/js/269.25996059.js",
    "revision": "ed1d21d36f645533897acd131215bbbc"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.1d2e8c76.js",
    "revision": "1a3bbdd54dd57436d98fe76967474715"
  },
  {
    "url": "assets/js/271.d63b341f.js",
    "revision": "fe259806be1cdba40c5cfdaf461291c8"
  },
  {
    "url": "assets/js/272.d4170a76.js",
    "revision": "f1c64b6dd81c4b9eebd037f6eaed1218"
  },
  {
    "url": "assets/js/273.6bfb305c.js",
    "revision": "1a893b34f35e560a193db4e2771f450b"
  },
  {
    "url": "assets/js/274.438abfe3.js",
    "revision": "069480b0959664376fed9e804810440f"
  },
  {
    "url": "assets/js/275.740f5052.js",
    "revision": "2c57d593f3f6f03e38c52b120157aa72"
  },
  {
    "url": "assets/js/276.2ae06d6f.js",
    "revision": "b577e6e056dbf53f660043a278c156ef"
  },
  {
    "url": "assets/js/277.fc3ed12a.js",
    "revision": "f6d2204efb284accb91073067f3ad51e"
  },
  {
    "url": "assets/js/278.d3fdcc86.js",
    "revision": "880a6177810abb2c1d42955571afde5a"
  },
  {
    "url": "assets/js/279.70d18f60.js",
    "revision": "03c5abdff06ca94e077ce7446fc194a3"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.9d4f7511.js",
    "revision": "767d1f1adefaa400f5ce582e0bca83b3"
  },
  {
    "url": "assets/js/281.7af66f04.js",
    "revision": "3de266e8a0e5fe595b08d0799a62391f"
  },
  {
    "url": "assets/js/282.e6fba44b.js",
    "revision": "ce62ce6b5d99115736c6fdf8308369e7"
  },
  {
    "url": "assets/js/283.b453c0ff.js",
    "revision": "6ba4e782455d5b07982534590b792979"
  },
  {
    "url": "assets/js/284.953d2533.js",
    "revision": "254323be3f5b67115aa14fd886d0289c"
  },
  {
    "url": "assets/js/285.ffc17c8f.js",
    "revision": "c44f0a93c849a46f08d3c827a1e0fd7f"
  },
  {
    "url": "assets/js/29.3f14bee9.js",
    "revision": "6eae4a8b0fa2fb5bbc00e054a913e487"
  },
  {
    "url": "assets/js/30.f64b4acb.js",
    "revision": "86aacfb8404d5fc293118c6dc45e7b8d"
  },
  {
    "url": "assets/js/31.4ce2a643.js",
    "revision": "efb66e197a3dbbf041823521cff85bfb"
  },
  {
    "url": "assets/js/32.fa70387b.js",
    "revision": "23cc305443a3e56aa52c08fb298af488"
  },
  {
    "url": "assets/js/33.f8113b4f.js",
    "revision": "a4af639cf5ab52272f5129ca93d664ec"
  },
  {
    "url": "assets/js/34.d2a3d2ff.js",
    "revision": "c843e16b1f81cb784bd8b3847552a791"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.d661a1d4.js",
    "revision": "d7ece8ac2220876dfe52b31c085e85f1"
  },
  {
    "url": "assets/js/37.511e77d4.js",
    "revision": "a601936a06d8493a20e186baf495f1bf"
  },
  {
    "url": "assets/js/38.e7010906.js",
    "revision": "bf9dd04b928f9c64b4889a78f7f68a62"
  },
  {
    "url": "assets/js/39.9f63f8b8.js",
    "revision": "9a2a141d36db837ffe2e596f1a5402c4"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.e1b36b0b.js",
    "revision": "5812f7b7ce165af8c24ebe8f28149ee7"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.d6335a0e.js",
    "revision": "c2e201315dc01d9bb899aa40147b4521"
  },
  {
    "url": "assets/js/43.94a96c73.js",
    "revision": "6a90367bc85cb8affca1fa22db7cf092"
  },
  {
    "url": "assets/js/44.c9418160.js",
    "revision": "89020d3861d033777362f06e4bf0abb0"
  },
  {
    "url": "assets/js/45.57473947.js",
    "revision": "ed93a2058ab29c0c9c54a2b29a087001"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.8808044c.js",
    "revision": "83d7b49dacb0bf461d4a69f4eeb8daaf"
  },
  {
    "url": "assets/js/48.a2e61fc0.js",
    "revision": "898a49ca734b3a33ee9f1112e4681b48"
  },
  {
    "url": "assets/js/49.436504e0.js",
    "revision": "180aaa90e54cb8c1a29bd2d98b935d27"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.ecee4d97.js",
    "revision": "f38f60924f6e019351c0cc0b36c6c988"
  },
  {
    "url": "assets/js/51.17b67b59.js",
    "revision": "1f0104054fad0dda412d6b734d29977f"
  },
  {
    "url": "assets/js/52.fb1f4527.js",
    "revision": "8d1fd57f884bb0bd23a99ccce966e29d"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.eb6298eb.js",
    "revision": "02b5ba8409d90c15f01d836d19d341a8"
  },
  {
    "url": "assets/js/55.84ff7f52.js",
    "revision": "0181fbc302f6955e9b9bf75ec6cd71ef"
  },
  {
    "url": "assets/js/56.1b768cf3.js",
    "revision": "52cc19ee33a0d18ba1b66f410cf68d16"
  },
  {
    "url": "assets/js/57.82e26de0.js",
    "revision": "8916be9c99e83adc3eff4d8fbb5bd788"
  },
  {
    "url": "assets/js/58.07a61b26.js",
    "revision": "5755efe798230aec0cbe93c6ed502081"
  },
  {
    "url": "assets/js/59.936f4c2e.js",
    "revision": "ca012df874eeb1a5506cf9e1a4673db3"
  },
  {
    "url": "assets/js/6.9329e00d.js",
    "revision": "8ce97f156f3a1697e4bdb28395bda84a"
  },
  {
    "url": "assets/js/60.2f36c42e.js",
    "revision": "01404cca5be0abacc2a5095ea20146ec"
  },
  {
    "url": "assets/js/61.bae0851f.js",
    "revision": "edc6dbc9e894c9a309d7664526ab15b2"
  },
  {
    "url": "assets/js/62.65001b7c.js",
    "revision": "87cbb99930453617343df2a63e53bf29"
  },
  {
    "url": "assets/js/63.364ce22a.js",
    "revision": "b46fab7e24bf8d08e70260c7db75a510"
  },
  {
    "url": "assets/js/64.92ca7de0.js",
    "revision": "894ed0738cb6fe50ad6dec4fb944f071"
  },
  {
    "url": "assets/js/65.14f8de47.js",
    "revision": "a1e9bc10be1cbe3eaded1ab757062e7f"
  },
  {
    "url": "assets/js/66.7ac6444f.js",
    "revision": "d72d08b925c7abd1d881bfb7184e89ca"
  },
  {
    "url": "assets/js/67.064cf1e1.js",
    "revision": "1faa284ba538c45cf51866e675431c20"
  },
  {
    "url": "assets/js/68.92904f15.js",
    "revision": "9ae47dc5c77be9dc06f5ef17ce4ee8c8"
  },
  {
    "url": "assets/js/69.09c48e83.js",
    "revision": "108eeed855305b649b54b2b2862ff198"
  },
  {
    "url": "assets/js/7.3defe02f.js",
    "revision": "d5cb8446c258e8c108a9be4a8183e381"
  },
  {
    "url": "assets/js/70.af07dd2f.js",
    "revision": "581ebc91f7d83d3c5a6883c700e5f1e3"
  },
  {
    "url": "assets/js/71.49f88104.js",
    "revision": "3935f9f73414c67eea31caf457930289"
  },
  {
    "url": "assets/js/72.b759eef2.js",
    "revision": "c498d1eaa6480b70f4655981b059f1c7"
  },
  {
    "url": "assets/js/73.0581cc53.js",
    "revision": "43ebc1eabc7cea00292f3b6419655e46"
  },
  {
    "url": "assets/js/74.aff0e133.js",
    "revision": "8f9dc8cd96b58025c93242ae8bc45a4f"
  },
  {
    "url": "assets/js/75.c4530927.js",
    "revision": "4475ad73691f99daa60857994b45a607"
  },
  {
    "url": "assets/js/76.866192fc.js",
    "revision": "05efa6e85fbe3cf08fb060f2c8187880"
  },
  {
    "url": "assets/js/77.795b5b8a.js",
    "revision": "b110aa5c6bb187814f2c1de4264e8bad"
  },
  {
    "url": "assets/js/78.f0d3acd1.js",
    "revision": "7680eb94846923dc172833c26dd6d639"
  },
  {
    "url": "assets/js/79.03d8460b.js",
    "revision": "62f0335e9d97a5092268161b86f209f5"
  },
  {
    "url": "assets/js/8.321f929e.js",
    "revision": "8089ae2cb60c42b9376220351e563b77"
  },
  {
    "url": "assets/js/80.e3564d5a.js",
    "revision": "18531106f827c939d28f946ee4864f4d"
  },
  {
    "url": "assets/js/81.9fc9a5d5.js",
    "revision": "6d4b758254e28687bc3ba09329bfda25"
  },
  {
    "url": "assets/js/82.bb6d9443.js",
    "revision": "d602b342653b4c549eada629cc698c88"
  },
  {
    "url": "assets/js/83.fba68469.js",
    "revision": "eeb3cc8108da18a904ecc67bb2bed00c"
  },
  {
    "url": "assets/js/84.834aab2b.js",
    "revision": "6762b9f3ecf8ebeb6de3720d3907c41c"
  },
  {
    "url": "assets/js/85.2be196ee.js",
    "revision": "9a185f9253a56626e88749d72e6023d4"
  },
  {
    "url": "assets/js/86.051f416c.js",
    "revision": "3b23d0dceb52c7606bd71b88fbb1f4f9"
  },
  {
    "url": "assets/js/87.dab6d190.js",
    "revision": "87ec35117d136b74fb850f1951297781"
  },
  {
    "url": "assets/js/88.e0eac106.js",
    "revision": "163643296f138097f596400e2120f91c"
  },
  {
    "url": "assets/js/89.fff27227.js",
    "revision": "ed4d2ad5a36c6988eca554a472a79663"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.3eb3e2df.js",
    "revision": "d642512cef5347349623bacbebdc6b95"
  },
  {
    "url": "assets/js/91.2981c655.js",
    "revision": "8243621cd5c80fc068061c7e44f3a5fc"
  },
  {
    "url": "assets/js/92.44890fec.js",
    "revision": "b8525ead9993e06f6a22a3ff08346796"
  },
  {
    "url": "assets/js/93.3209d6c0.js",
    "revision": "5ef19d1d93d16629436f384c182fabde"
  },
  {
    "url": "assets/js/94.990de828.js",
    "revision": "8bbb79d8d81f00155ea1483161fc7a86"
  },
  {
    "url": "assets/js/95.4776ff7a.js",
    "revision": "1a6061ee74debef4d4407868d53247c6"
  },
  {
    "url": "assets/js/96.27d357cb.js",
    "revision": "ed13306498389a364212824a9442ae4e"
  },
  {
    "url": "assets/js/97.87cc60a1.js",
    "revision": "4a4bbabcf4289b776ec6ad3a0832ff44"
  },
  {
    "url": "assets/js/98.802da515.js",
    "revision": "d1965ece7c79549de69831f9df172d76"
  },
  {
    "url": "assets/js/99.cddf007a.js",
    "revision": "4db49cc0c3352aa185fab186bb960d61"
  },
  {
    "url": "assets/js/app.4ee10e72.js",
    "revision": "823f6397ada492b580606556ef753490"
  },
  {
    "url": "assets/js/vendors~flowchart.cd0cfe9a.js",
    "revision": "b3af5997e713cab07832a64b4cd1f3ae"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "07c8cc91f8a540ceeee7b5f7be1a48fe"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9022b69c9424f5d1aba3207bd3fd6fb5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "4758d1fa945093ace8d5ce6910a24049"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "201802fae2186f84e6713a78d6ed3aef"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "64b586d0eace544c8767affae106c160"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6cd9fd51b10c908de8e6ea1dd7cf1d6e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "17c347a8e7bdec4d2e8a3be1aee919ae"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "723c755a804bb92ee566e4b1e28366ea"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8e4058d8f4d3fd97c4afeeddd3b2ef73"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ce903cc5d22b69ed637981796df7f3d9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a38430f49586ed80d37f11fd7eea2dea"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "f75809e4637c92168758ab4885e725fe"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "476dd7611a47d6d2fbbae7e11f77496f"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "0cccb2b70bbb275551508bebe013b269"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "208ecff8d60c87119458da76f128772a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "62884770ba1c1062998900ecc9f968e9"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4e4cbdcbc6c2c658834df21aa156121e"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "82af73c15bbe360ed344c60ff174e31d"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "955e55158e11c3355a387e9b634d6961"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c5dd90b6e60d9c5de5f5c1d029c157f8"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "ce2add0d3c84e8ea1bd1e68d7d15db44"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "d116d7d7433448534be7a48b611144cd"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "18820d9b1c20d474233bcda27a7d8f09"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "fc1d0699209302e4e1cbeecdc1850cfd"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "04f549a57efdf358437d52e053558d59"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "a10adf8d5a7f774a24d737def47787d2"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "4acee923cbe6efe711a993150bbc62d4"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "8ea485dc86b13b30a5a9f637101a4622"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "041e1e0695ecdb8a8c2359f6610738c9"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "c947938b8d0de653f3cfbf4839509e36"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8338ee56d44890206f8c9a94506f98e0"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5b516bd2f035d173d367a46a6954c7f3"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "d5ddca5039f07ac846df85fe58a10a88"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b05d827369bc9f3a35dc04bad788af52"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "42cd701fd53845dd356b84e588506e3e"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "7b7207472298281cc102c1074337bf57"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "205ef0f2c08254c4877d5dc1cc3d4db5"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "72c446aee986c3c2abfab74a997fce19"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ea380d96c70f90ccb08723c315931c19"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0d4dff20462034f0f6689f46e0af5fc4"
  },
  {
    "url": "book/index.html",
    "revision": "25def5ad81236355bb084822a0611203"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "57dcf806b269ee62cad2377b897b5ae8"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "a88cbaaeaa85ef6c230a4ca6ae502186"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b22e39aee302d52781d7db72a13643ac"
  },
  {
    "url": "c/audio/index.html",
    "revision": "77f215884947f1aaf7c41a5295b4a693"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "53fd9151a007d13b7e54d183814bdf1f"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "92eff5f3ca5d4f469fbc969da8dca32e"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "4c4d4a423daa27a75f7fa24b4c8b7b1d"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a72635dc71304943333b06ff1a533f1c"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "70d12bf7187bca8eac880cb257ee1568"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "fb3e69f40b4bb02c9225db1f1ff919e0"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "0524d040d4d5278bbaeb484534edfc10"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "be251076cc3294e458b17c97f1fa9616"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "940758239dc20360230500279356420d"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "82f365b9679194afcff588892553a81f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "113015fadd737da8f24f63449041305c"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "b6051d76d5df9d66c2bda356d136e84e"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "0ba70884e9775f45053d3a57e6f6683b"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "3a82ebe770b592e55e8d9ef922cd5024"
  },
  {
    "url": "c/program/index.html",
    "revision": "85da504651b475fb517b4794cf0d2b39"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d17e4af0bec2ce56f46334ff20a89422"
  },
  {
    "url": "categories/index.html",
    "revision": "069a94c797402bbd208fab5a4017faaa"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "a0de6b53a8913e2405290accc2166e03"
  },
  {
    "url": "figma/index.html",
    "revision": "ba3cd74aee74cec996793e74d1e1c590"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "46529abb255ea915af2b90c4154ba672"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "e04d0fa3e47483e2c0e0d382146957a5"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "fb2ff57b33b5d3009632ca050b223df2"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "8833402087b5e9a688ec47b298d9d0b0"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "6dece610604c2e1b8cf500ab869aa2c7"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "3b48d9366ae1be49ed379123dd60ebfe"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "4a458d4ab0e1ef85d76672590fc168c9"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "2556cc5d7fdfe4b058e8e4bd63f533e5"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "5d007de2b633827b31cbf96db090afc2"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "52fe7ca2f0dfae108ebe01c2f43af932"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "ff067116b4fad06185fed44596126727"
  },
  {
    "url": "flutter/index.html",
    "revision": "c06c9d2a8e3a30f2a7dbb476af50043b"
  },
  {
    "url": "flutter/point.html",
    "revision": "5ab399e4286b1eda61475db535d8c063"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8ec3c33211614bb83133c2f840afa104"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4d7c22387081832512efc415826cd53a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0b1e57e0a567f0358e0c52831cfaea50"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f3d5415f2d3fc6cb4bfbc3a10754a3f7"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e95c2414f4e7225a5f8c776d9ed54c27"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c98aa8ce790483e154fa67ca66b111fa"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a5f6177446ccdae5338e5d9e0c80fe2a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b5ffccc073e39546c01c15cf9ba50eac"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "62b1afff5e0441e5b65577d6f941aed1"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e2978ce93ff90cd6a418d93626397b83"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5320116568cfbfca5a0f43b4a4ce7826"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "0673eacefdb7cd1367efd98171eb056b"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "617fcf0ad390e0f7691494e2c52af04c"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "310e704697fc484a6ccfcd1c7df2891f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "e0d441da928178bd563220bbe9f5c952"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "c60f7513c85900be8154a9cf22133c3f"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4989934d6adb6637ac511b39252ea641"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "5eff88d82b85a3e0d5bb3377caaab706"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "1ca35dd75fdc2bb33aef2de7be4dc9e1"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "5b504d56778aa8eb8f40a0e68b69246f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "2d07d5f2c9634392bf374a0076dc5cfb"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d44096616000c254b852e677a2e48cf4"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "0930a6c7c8b016e140d17c4e35d9e122"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "9c08c36a8189caa552a549b0bd515024"
  },
  {
    "url": "haskell/index.html",
    "revision": "687ed16b76011a56387f9addc91d4dcf"
  },
  {
    "url": "index.html",
    "revision": "7b9490bb8ef164aae4416415748d7f54"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "305e39c6991b4faf3a4cb771937c15b8"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "b6ad8ccdef3e02e844f12507d644aee0"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "855d5b4f8ce216115a9b87db3321e8fe"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "7bba253f1398736b76bbcf49ba5634c6"
  },
  {
    "url": "python/index.html",
    "revision": "20ee5fe849ec0d646ab13adb017270e0"
  },
  {
    "url": "python/python-ase.html",
    "revision": "507560b11991781e3ff629f887617db7"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "6a1e11cda235f37ce17b9255ef1200d4"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "47f1a9d392f066e01158526346bf0ffb"
  },
  {
    "url": "python/python-file.html",
    "revision": "1cc80351844eccdfc7ddeaa3f7bfd85d"
  },
  {
    "url": "python/python-function.html",
    "revision": "3379a7ed1acd400d54a67ddd0cd2360a"
  },
  {
    "url": "python/python-generator.html",
    "revision": "0eb165ba04d3cf1185f6974236871461"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "58d2b3e3644861f11d3c242b1f0c1140"
  },
  {
    "url": "python/python-module.html",
    "revision": "d612767332fe1f432bdd7a51774eec53"
  },
  {
    "url": "python/python-string.html",
    "revision": "ee4547ede4e2c54db8ab7b3373d9fec8"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "68ddf0e988e704c940fd29cea8fb96c7"
  },
  {
    "url": "read/index.html",
    "revision": "269602fa50ccddfa9c3166c63373f9ab"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "04ec5d91b71318393fb0d0bdd253c2dc"
  },
  {
    "url": "swift/better/available.html",
    "revision": "ff372916304d9caabb9e5de5fbff73cf"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "3228a9e54bf149cb6c4d22486b7cd5c8"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "920b9ed73da19b02c037e358e9b45960"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "cfe0ef3ded8e45c30ed98ec4c23d1454"
  },
  {
    "url": "swift/better/di.html",
    "revision": "5b045f5bee45f363957a1f81ab196aaf"
  },
  {
    "url": "swift/better/index.html",
    "revision": "503429a407a02d079937b6d6baf726da"
  },
  {
    "url": "swift/better/last.html",
    "revision": "7c7b04b312f503f9df8fe96cf87dbe68"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "7d4f83904c857ecf1e95315deac73086"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "aa900581727c841b315472ff5199f203"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "ab10a364a8c00f2da43876ad1da016ca"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "ccca2173278a4fa05fd70993e6127f9b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "4b693306d64e8972735e4c207c78747d"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3bc6557bc4d3090b10d6254f46a535c9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "6b039d8c9926d270d701c923a4497123"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2d7aa1ba73485e197fbc838eb59a5bfc"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c24b018bbb0348eb7c47625b51791618"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6a9c29f157bbefd65839bb4ed909e450"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "96315c41208c2fd4abd56510e90f1a3d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "48fd77f84b1e13b453180b81b72bf9a6"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "570d5da3773b50bdc6106a1454755f32"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "8c41e3ed2033bee565287b30520ad798"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "912d2130a3588c867e53edc36a1e0c70"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fbed5b2da97f54ba62050284756e9679"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "591596ae73214689a1ad2a832c0285cb"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "004783c24f9b5e93f734d01e24fc8c59"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "89d6bf53613375e52e3ea031c5c33dee"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "a68da81571e178718acffd707f6fcba8"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "43fbaed53296486b4836436fecc1c106"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "b5cdf87c8766c6a90677b22d848ca888"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "36c36b25cf8215b55b4178b96d296865"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "d4759da87d5b8cbae1e9f97794842fcb"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "de821a2a19e718d74b599b30e1578efc"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "2341028be538d8d5855cb6fe1bfe5d74"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "d7c3edf4038774ae62aa0c99a67ccf07"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "b119acde5895cbcb667b9bc21fbf0ac3"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "a5c4ac1bcef60475ad94397c3ee4fe34"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "a23c31ef4d2aed5a450c17aeba8d06a8"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "17961526067c30489bb433ee37911fda"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "adee5165fe78fc844481e34a0aff1431"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "67b673814f2004890efd4ab4db39309a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "f4587ae3f8095a42fe5ba5100aaeeed7"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f2a8dffaea36d7b49c3b75d36a283b98"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "801eb7187cc911c575498468b972dd7e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "96fe4af048e3916ab57058ae986cdc48"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "67ae63e5cafeef203b776b43e6cd0c2c"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "391826dd15e7c1d3336e5f458e7e7828"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "709c1c62f6dd600c0158c113b06c8481"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "2d95e10eeef25e6840911025143f9035"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "03f458d7df95b77563f1d0a3bd92ad27"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "729a437a653ec3eb718aaeb93af71173"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "df821a3562702b16b99963fae83fb16c"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "8407529c495d9456e7272744a83a3b2e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "2cb28e704bb46ec6a408eb56b65aa1a1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "caceb0fcd885f1eb65832b79e70b1f49"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2e36fbe8d578682160edec1f3c2b3f41"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "9c02188634a27d91aa9e30fac56acafa"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "935df36aaad8cb32113cac1086f8fc68"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6f82c4894fce06fc7cd5361b061708f7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "e38a6b8705e8976c491b861e7556b025"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7095dfaedabe92bc498e0784758043c2"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "c150fe5c02fc81e55764f406c696a5fc"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "eca5f9ff8898acb998a75d8ffc0d5ae2"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "2c8f269e9846c2aeb235b2505132b615"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "41f2a4670e60429b900479d37597115c"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "8c9e89e5c863cd7a39eb5f5d2fecd578"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "24f5f08b6e4b1439572ec0bcb1c0324c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c51fab20ff9b1b4d03ffb93222cd9574"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "36a5d6f97fa839839a1afbf335ec075e"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "314b97c650e621cd660f0171e24417b1"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "4b8fede9084f4ba439b09aaeb502e9de"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "bb9d104b2cf94787f034df95ecbe1406"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "fbdc7d64b7518c51d6e735ff1baa072b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "dcaf39c83a28932c641f0dc99790501b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b85180525c0a4f07692533b05e7b80bb"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "da763a1c075dce30c7efe91152985de1"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "a7cf353e7b3dcbaa205897db8d233ebc"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "13a4d28eee6f7d96890afd2a842b6210"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b30df116fc51ff878984ffa0e9437766"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "7292e91f00e2dbff3df1708840d988c4"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "2733981bad2e8ecbfa1debb8bb8bb1ce"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9ee546cf651be870875861f3572746ac"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "93890aa78a25e21ccc44c4deaeeaec2f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "814cc1e51e4b2c820d63546a79dce3f2"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "339c61150604bd693f6788199bbb6ffc"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "a7418ee97dffb46ba958ead374a2ed40"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "6ffc922a1ff599aa2682689a48e1e38a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "1525d7bc19e4dea0b007379de62b770e"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0c560216c41b4c206b4cdfe969bcdb15"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "466c9159e36c631c8a47a770d80f2b24"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "7978311f6cc4d67c8eea6388c89bc33b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "13e775c05434e9fed52ed20c4d338ae4"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "039fa8476edb75adb8fdcc4b09cc220d"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "8b671b698149a397cd257e49d79cef65"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "dca79a38e49a7e3abbef2176e85f7a8e"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "aa4dc4d4e17998397d9eccd135164564"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a4ec8bf523fc65a74093012a19b1359d"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c5836c5a7214d88af3c6d6684f3471e4"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "c7b1d9ee6b0d5099bcedcfa5e37eee28"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "b9f5af79d2db78dab559e521e31fecd6"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "27462f904287d631153de0bc8ce9ecd2"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "8f7588dea6398b72f1ec954619b3d493"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8444f35821de5a3a94978431844dd0f7"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "fd3995a3da4aafc3a16092e789e9e087"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d7f542ea10269d12891ac1565ca03835"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "17eae4035e82d73bdb6e6de9131aeffb"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "9687272f1b68a711d6631d4a65535e5d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ed60ff1a9bdbcefb6d9d91d511fa8995"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "c3d6b816e883fb2bcfdd34a6406237dc"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d0cac66de1d3c6e38352424d2c5d4561"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "5c1861faf0bfc20469b41c244778520c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "a2deb5f2ff4e8bff3ee236017c4767a4"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "f588842f20890ea50db298881fd76723"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e45d5b40cc6920a30104f005cfc40da2"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "44cef5ba12cf6f3cbcef634ee616bc77"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "252dbc45356defd6af63e0c8d444fc4d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "22c2ee9d964358079c667ad6801b8fe9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2d5c1568a456706d30ee5b0d0c0f1471"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5143336870461378a74d8d634b976cd5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e29f0aa9fe8c356dd6d4acdced23303a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5ef2864fbc52da72288999699460b2da"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "36c9298befe6296629577befb597168e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "53bcb57e87fa99be1347e59850464026"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "5253d5ccf01279230f51ff02132239a1"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e0101070315de8b34a8c8c5dbd90f0d0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4eecc67e910c52f69690d219287441f9"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0c6e346284131041bb30927818172f30"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ff44d510219dac32863c9af0f5391dd0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "de93cac79eec4c06824ff7ffee11f309"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1feb3601c964c2c83d96ebf69a5a4dfd"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3dc228e96ea6a8b20723c550ee3f984a"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "e4562d7471aa519af62d71a7018654aa"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "3bcb299e2684ee6e19d2931f1c8490e1"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "d8baa098f005703f663cfeba40092b37"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "14700add4e7a7a05aba6a50a0668ec2e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e87840f69436b771b2148aea4fc9abe8"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "147e330bb73ce860179b1be570d2be73"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "3a78495ac2323a7fa378aa8595b6d8bc"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "d94ea73bae0dab7f167cc08a6d1b0795"
  },
  {
    "url": "tag/git/index.html",
    "revision": "02f0e92f779cba342c48f38ad1e7d06f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "728f0b615cce7c7df122e339bd63843f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3b1526ceebb766cc661366c543632078"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f48154b97d38af24aacebb214038f025"
  },
  {
    "url": "tag/index.html",
    "revision": "d19bb868a232d2e0f69a4801d2664635"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0c3b3a7a50d39106983413ca00121143"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "04c0590f32b8a8e42ed45a6edeb2765c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c1b4e767e0701cba36a689e007a953f2"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "799540dea02adfbbc905e176b250e1c2"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1448c5eb287cd844d81546f3e0fa5f09"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "5499a0af297613928cfd280869f1d554"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b80724d09b8102b725177deb83c44009"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "3eef8931f728b1860d7c9410de2a897f"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "568359624f318edb3047ab8078430d5e"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6a540fca3848d28b3cffe5cabb145dd4"
  },
  {
    "url": "tag/json/index.html",
    "revision": "664344a0db2812776a2c8951ed030e92"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e82506a740d3399dc4139eb0c75a2a7a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f5fffa6d0ee0c3f59a2fa84b9f6557e6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "18b492f8f58fc04f59aaa00e6edb03a1"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "ba79c34e7690d6b511cda142f7baeed7"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f2d1e7383f774c6f70097a04a2a1b9f8"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "630fb0e1024dd429524dad390859d35b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0dd5943da26087c96a26d4a123155d9d"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ea86f20b3dcd86c039c07c30d9660ff2"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "c0ae6be3787cce0229a0235600078206"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "2bb1e694e683112bc8d29136d58ad665"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "15fbe4bce127bc5cde0d6bc4741d193c"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "66de1df4ee62ec58ffa15a905b833389"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "a52b1c99d0065d4a234396ba790637a0"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "d97ca6c69b9afd6c343f9133cc7bb92d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "32e9d660ff29629556e7ed8d13eed34c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "a6cdb2742c09c11e0cf53053e62f5cf0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "b3334f1907b0e9a957690a6b056adf63"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3b0b0eaffbecce0bd3acee4798536ece"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1b3329b744d0f7858b3f93e76ae7dbfe"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4befcc2f10c6d5700f7b473239742c8b"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "57f6f0b39365abda873e94f1457c2cc3"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "bf5a6ea5518a72aeec072e8d82ef0863"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "164ea536e6628edbf1a234012e37941a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "04317ca01042aec504747843616c7078"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "bba4e18c423a5d40dfa8dd801201e74c"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b5b7d598ab4eed7f197c5d5a77f3bc55"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "dc103b98f30454d426c23607a40e4795"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "fa43ceb9107938e88485122343e417ee"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "9001efab0f29936a5ccd1a2b7a0f7e9e"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "4ce9ac3d7b2e83e6c93ee9553810494d"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "bf7ce2926ea48f473b271aa0cbdd495f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "dc26a83a2eefddd0152c4a35373cf045"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6d041269ed1dcb9b1a9213d45f66ac87"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "4045f67e7505e902ef659b57e3c58918"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "0a803422de852e00b0525b466f46020a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "444624b609809556a109cb7b2d547723"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "2ea2f3ce1f668d39175c3610efd262fa"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "819e78ec55e26934d00ed6f4eddfd3e7"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "581dfcde0ae08fe868e63df47f1c96f0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "9b7b58df50329f6d1e777205dc0db8f6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9ebab415f84d60fc07f9a462de0fdf07"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c196725e1c1f60d65cafd79bea1ecec1"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "df82374b032269285b060c5fcfbf477e"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "8f8ed1be67088543aa748a45cb32674f"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "a46f9a6c0f842c2b16b9203ec0df1c4f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "cba8f1489c28da7935a0ed9031ff10bb"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "12fc276188158622c20f56bace205dcf"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3b682c5ca7823c6c22c9a05a6e8f7ad3"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f2e056c80d968bb6cfec4b6be3942ca4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fe7e620256d0b56f1bb8773b98ecbaeb"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "95f2aca0ca7a953395b8203ffadea8ef"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "25f036882bca83025ca1465762aa312f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "60d60cae424d33c0bf8c4b5807f6d126"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "90ab6c160cc942d6c55dc8a256775754"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0b0a6db33b7f8b6713b1dc6140160b5a"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "5b4e1c1dcb30c85b087b7ed085af0190"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "27a9d8e38d29f5e5664d3db9bbd95015"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc462b17f05c7500c712944fa87df254"
  },
  {
    "url": "tools/docsify.html",
    "revision": "0bc8e9e9f341de9efe94e0bd5d0e750f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "0fabfae6f692164e8536ef2c76dcbe13"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "6b17a10277e1a45f20a44a8fd1e87d37"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "46abba6c207116d04ba15b763df9e0eb"
  },
  {
    "url": "tools/git/index.html",
    "revision": "22126f083d5d6e72ea9819a02ea4601a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2d995820acc961d1fcc0f97e513f70e2"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "0114be8679bb6d9604ea473c496451d0"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3b052aace6fad8666662cb80d787fe9c"
  },
  {
    "url": "tools/note/index.html",
    "revision": "3ad8e978ff2f2c081fb0a7bfaaef174e"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "9408b9af194878be25e485dc2f285fab"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f4d84af2891d3184183a821d17650a52"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "243a296e2e7576b1173c7dff197a72d8"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "7c7b8c952e17d09c4314687071521c70"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "d3d9d269fb69572c4b13eb7f03d64560"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8440dc207fffb09ad3672a3b5b65c9a0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "51628840ffa372f36c08954945a88e61"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8d37c02edccdea8166513b598d33d0e6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e743ac1df8e83f24bf353c691cc65c6b"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "wechat_cobe.jpg",
    "revision": "7c103210c64d14972d9429ef991b44d2"
  },
  {
    "url": "wechat.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
