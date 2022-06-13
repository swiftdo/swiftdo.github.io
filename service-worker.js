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
    "revision": "e4a9ff085429b6f4a8190b80e39aa6e9"
  },
  {
    "url": "about/app/index.html",
    "revision": "eb2d0e1008bb65848725426a8a04e340"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "58e3f86bb1c8a64d56ea8f2e1b0bbbb8"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "1015a5a13313de01de6597e0022ed2a3"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c75d16ae9e357e02d6a1c7cc720c26d9"
  },
  {
    "url": "about/index/index.html",
    "revision": "c331813eadaae6e3dd8db8a5994ade68"
  },
  {
    "url": "ai/index.html",
    "revision": "e6360931b975fb83c7f46a0681b4faa2"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "ba407cbd25e9f8ee24c720cc7fc6a845"
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
    "url": "assets/js/10.88dc9489.js",
    "revision": "c94a7147e6fba6dfddfca38d070d13f0"
  },
  {
    "url": "assets/js/100.3f8a2ba0.js",
    "revision": "8c494d106f6b053824c0356ee759b593"
  },
  {
    "url": "assets/js/101.768011f2.js",
    "revision": "6a4242ea7a0bfa55f18134f23271f70b"
  },
  {
    "url": "assets/js/102.e7132c09.js",
    "revision": "0a4bcb1128698c9d1a2756f873420aba"
  },
  {
    "url": "assets/js/103.8cd3ecbc.js",
    "revision": "6161d1723b800cc3ea63d565788b7ea3"
  },
  {
    "url": "assets/js/104.d9233536.js",
    "revision": "0a60d7eec4fdc606894b88a73e683371"
  },
  {
    "url": "assets/js/105.bcf26f22.js",
    "revision": "89a4f455afc525a2503c418f7fd84e49"
  },
  {
    "url": "assets/js/106.e602bb84.js",
    "revision": "8cc2e06fe3e71ea81722dc7fd6088a87"
  },
  {
    "url": "assets/js/107.e5dd112a.js",
    "revision": "1dd20a671b218b0969cb397bf0378684"
  },
  {
    "url": "assets/js/108.66b5ab91.js",
    "revision": "0068089b9c405acaff9c17fca0ce1752"
  },
  {
    "url": "assets/js/109.05230f58.js",
    "revision": "057db4030d4ef7fc8e695e45d81bd2ae"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.2e64bd54.js",
    "revision": "7b9e8ac73f0e993fb2cd7a93f383f2d1"
  },
  {
    "url": "assets/js/111.ef39c576.js",
    "revision": "b5ab54fa0aa12dd8d5a04abbfa0a8acc"
  },
  {
    "url": "assets/js/112.8fa1aeb3.js",
    "revision": "f12d740bd75e2f9b1d453820aded2426"
  },
  {
    "url": "assets/js/113.f7dd7ba1.js",
    "revision": "e1c6761c1f505c548827969b1b20deef"
  },
  {
    "url": "assets/js/114.27dde311.js",
    "revision": "abcde1c5b9392cc3a4da7497e9f1beb2"
  },
  {
    "url": "assets/js/115.1a5253dc.js",
    "revision": "ee7c3e44a4dd283823224e9b05eeb843"
  },
  {
    "url": "assets/js/116.5e050e50.js",
    "revision": "09e59256cbd33604fe71e8150be6c9ea"
  },
  {
    "url": "assets/js/117.88f51699.js",
    "revision": "3525520568b5965ddf50ae82b4feb295"
  },
  {
    "url": "assets/js/118.71ab8b5e.js",
    "revision": "f62d3bdaf0699513b0203e01dbd97991"
  },
  {
    "url": "assets/js/119.17291556.js",
    "revision": "e4bf7a69c611a468a49650dbfb9214a3"
  },
  {
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
  },
  {
    "url": "assets/js/120.4fa95c6b.js",
    "revision": "253f146ff2d109063a60e8888e69ef4b"
  },
  {
    "url": "assets/js/121.9e519175.js",
    "revision": "0292ad630d7f06360d4cf29d55ae9ffe"
  },
  {
    "url": "assets/js/122.098ca22b.js",
    "revision": "854fccb37a611c3e22009e0bc834ccf3"
  },
  {
    "url": "assets/js/123.c72d7fba.js",
    "revision": "c2ae13052d6ac5672c0ca20f625c6453"
  },
  {
    "url": "assets/js/124.6644c63a.js",
    "revision": "4211f65d999842628e2da1590a5d6fbe"
  },
  {
    "url": "assets/js/125.f6d26156.js",
    "revision": "d04e180425b872bac7ef479144bc36f3"
  },
  {
    "url": "assets/js/126.f0a600c0.js",
    "revision": "dfa45ef463815b8ac79a6d0d136fb8ca"
  },
  {
    "url": "assets/js/127.ce080d64.js",
    "revision": "9b6341a791c75f11d704471434f7613c"
  },
  {
    "url": "assets/js/128.c26e2d5c.js",
    "revision": "61d7c7c5b941dc0ac40f32c438b0f504"
  },
  {
    "url": "assets/js/129.a6074237.js",
    "revision": "c4d11caa96874a87082f58297c5050bc"
  },
  {
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
  },
  {
    "url": "assets/js/130.93b0dac6.js",
    "revision": "64fc3ce90a6c601a8c41a670d8ecee7b"
  },
  {
    "url": "assets/js/131.1441267a.js",
    "revision": "67a401666d7305ae3a17352aad745a56"
  },
  {
    "url": "assets/js/132.d1f0db95.js",
    "revision": "dc1cb44219847d7bc6d052ff4e2b2dcd"
  },
  {
    "url": "assets/js/133.f1a316b7.js",
    "revision": "9a55549025a56b96ed3ac60f7430dbb9"
  },
  {
    "url": "assets/js/134.f2dbe533.js",
    "revision": "a8361f5fcd546d114cbe2136d3288a70"
  },
  {
    "url": "assets/js/135.1955d2b2.js",
    "revision": "c981911ff2cc58b0cc2e7c5ebbab096a"
  },
  {
    "url": "assets/js/136.4d97a50a.js",
    "revision": "1e0eecf62c7034583f45541bcfaba767"
  },
  {
    "url": "assets/js/137.01af9674.js",
    "revision": "765d46f1f710dd271e756123c052ea45"
  },
  {
    "url": "assets/js/138.73ee673c.js",
    "revision": "5fce7dd01fdd6ffe1786ee86f0900ef4"
  },
  {
    "url": "assets/js/139.f85f8349.js",
    "revision": "4a4c0a4676217d6ea980f376e0de7998"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.615486e5.js",
    "revision": "6d96cd41a0c4bbb760988002713284f0"
  },
  {
    "url": "assets/js/141.0cfc193d.js",
    "revision": "c322a2ec82bc67639453be2285afd769"
  },
  {
    "url": "assets/js/142.8e07d32e.js",
    "revision": "bb7a9607a36b6027e4471d8d925978a4"
  },
  {
    "url": "assets/js/143.6767f57d.js",
    "revision": "f69e1efbc5e2badb5b37c64c69cd6c64"
  },
  {
    "url": "assets/js/144.35349bab.js",
    "revision": "867db45a12b0334fe0955d917160e608"
  },
  {
    "url": "assets/js/145.1eea8ac9.js",
    "revision": "979cefa2abc357921f817356a21ad34a"
  },
  {
    "url": "assets/js/146.22690810.js",
    "revision": "492cac131e82349830b6485c4b46c962"
  },
  {
    "url": "assets/js/147.b07c4bd3.js",
    "revision": "354a83c92f5b25816db072a4f7a25d22"
  },
  {
    "url": "assets/js/148.0ffe60e7.js",
    "revision": "80aac38713042f9b558bcaea4184cac0"
  },
  {
    "url": "assets/js/149.ca121e02.js",
    "revision": "5c105e0e475abdd86e775cc4d5b486af"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.92965a26.js",
    "revision": "d7f5eaf9d13b7985cf924d23a9c9aa04"
  },
  {
    "url": "assets/js/151.ffc57cfc.js",
    "revision": "63b783043869ee59c166c4466beb114a"
  },
  {
    "url": "assets/js/152.61c7d3eb.js",
    "revision": "cba0ce4af1d548931badf91fad1c893e"
  },
  {
    "url": "assets/js/153.755bbfe1.js",
    "revision": "2652da0928cd04a6053475304640ff48"
  },
  {
    "url": "assets/js/154.2043a7f0.js",
    "revision": "d717b274f51e75131567298db49ed5c2"
  },
  {
    "url": "assets/js/155.d88b3f1f.js",
    "revision": "b4e27aa9a0f85ec7ba3e06adebe9f19d"
  },
  {
    "url": "assets/js/156.ed70e9e1.js",
    "revision": "bc94f0260d17b9393b3b2452b6389418"
  },
  {
    "url": "assets/js/157.a454f37c.js",
    "revision": "042f94be126156e65768890323381664"
  },
  {
    "url": "assets/js/158.025abbc5.js",
    "revision": "3b08a5fc9bb9943986cfc841d2702b65"
  },
  {
    "url": "assets/js/159.56f71a64.js",
    "revision": "b0171811dd25462a0185c06977565302"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.8c749a53.js",
    "revision": "41533add6f4f3ac05e601c6aa31ec045"
  },
  {
    "url": "assets/js/161.275b0746.js",
    "revision": "137c1f9b5e1c93d3cd6dba5fe3ee38f0"
  },
  {
    "url": "assets/js/162.69137206.js",
    "revision": "d47f3c1120407723be75cca31b262afb"
  },
  {
    "url": "assets/js/163.3539e272.js",
    "revision": "a478bf1bb706fcac40decfbefb3b5b5b"
  },
  {
    "url": "assets/js/164.9d95b1b0.js",
    "revision": "e68730ff07eac680b05777e5cfe9c24e"
  },
  {
    "url": "assets/js/165.ede6186a.js",
    "revision": "535baee3a2724935eed41a887c70c468"
  },
  {
    "url": "assets/js/166.b4eccd4e.js",
    "revision": "a74dcf4ff3f39497875a046bd9e78ebd"
  },
  {
    "url": "assets/js/167.867a3416.js",
    "revision": "0e6de70c785ef5324e70641be9b92ebb"
  },
  {
    "url": "assets/js/168.52d6c838.js",
    "revision": "ce4739a4756cd6b1fe8c633fe29f781b"
  },
  {
    "url": "assets/js/169.f25a6c83.js",
    "revision": "3c4914d8a4f5b77bdad43e19c8f53d31"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.99a448c8.js",
    "revision": "19e831130692855cf14378b32bd0617a"
  },
  {
    "url": "assets/js/171.8dd54f0d.js",
    "revision": "31351c410c94d9f401efce3bdbee3fa4"
  },
  {
    "url": "assets/js/172.88902f16.js",
    "revision": "3c4672a8be775849f8a06cec09f332b6"
  },
  {
    "url": "assets/js/173.a81f55e1.js",
    "revision": "b3342920324773904af5a25d16fc4145"
  },
  {
    "url": "assets/js/174.c4c08550.js",
    "revision": "15c048c8705661bc078295346c2b0f1c"
  },
  {
    "url": "assets/js/175.a7aee474.js",
    "revision": "4788416c8c1df1a71132a3ea8a58cc33"
  },
  {
    "url": "assets/js/176.fd8e7e24.js",
    "revision": "9aeddc3e606c1301c87fd2b9a72fcfab"
  },
  {
    "url": "assets/js/177.d1a1f2da.js",
    "revision": "deb88db2ff81e0b9cfc50f766afdfc3f"
  },
  {
    "url": "assets/js/178.c78b1917.js",
    "revision": "0191d57133c6b53ef28da40be16585e7"
  },
  {
    "url": "assets/js/179.34c38736.js",
    "revision": "b1cc4c81218074b98baf59994da1a14f"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.8ca58c86.js",
    "revision": "22a8509cdbf7c163a2a737b87aed8639"
  },
  {
    "url": "assets/js/181.47ef4d7d.js",
    "revision": "09c0d80379ed445fcb4a68a2d931960c"
  },
  {
    "url": "assets/js/182.ce77da33.js",
    "revision": "dc9633307d52286a090505f1d77d0ca8"
  },
  {
    "url": "assets/js/183.cf7714c6.js",
    "revision": "df19a4fa5ada39bf0c7e52e71793c3d5"
  },
  {
    "url": "assets/js/184.57f2837b.js",
    "revision": "6a1f46b70568fb901ec90a9f47ef64dd"
  },
  {
    "url": "assets/js/185.808ce04d.js",
    "revision": "d34452c82d73cf024e1f512864aeacda"
  },
  {
    "url": "assets/js/186.c4d25636.js",
    "revision": "c998666bb03e2901dfc5e97fe4d70119"
  },
  {
    "url": "assets/js/187.a1747402.js",
    "revision": "4ed78857a51fb6b0c05dcef504c6a3ea"
  },
  {
    "url": "assets/js/188.1e672f0b.js",
    "revision": "efcc710e85e4674a9e149eb3e025bac1"
  },
  {
    "url": "assets/js/189.9fae2b8b.js",
    "revision": "bb1443c219b8f0bc3f837aac6130234f"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.daf2bda3.js",
    "revision": "ae8cc5311caae7d49ca9f3e7f6ac92ec"
  },
  {
    "url": "assets/js/191.17d6ba7f.js",
    "revision": "37a3c31356198f49ba73a3f91db04591"
  },
  {
    "url": "assets/js/192.68a4645d.js",
    "revision": "6ef6520bbb71dc184a3f1b60b2669a1b"
  },
  {
    "url": "assets/js/193.3f3156a1.js",
    "revision": "afa4e5edeed2c64d816fc139699cb97b"
  },
  {
    "url": "assets/js/194.6e010902.js",
    "revision": "dd396a74b05874df5c4d080617bd962a"
  },
  {
    "url": "assets/js/195.2725c71d.js",
    "revision": "2c62ada8f7c949e0712e7373f9fe642c"
  },
  {
    "url": "assets/js/196.daae4809.js",
    "revision": "6f86aea580fc854f16fb3e437dc58009"
  },
  {
    "url": "assets/js/197.00810fb7.js",
    "revision": "0007983585594d0932455783aa6ef139"
  },
  {
    "url": "assets/js/198.56749d46.js",
    "revision": "dc0a1134896c6b0e7ddd61315725cd3b"
  },
  {
    "url": "assets/js/199.03390037.js",
    "revision": "134ddadfda5cc94f7d43dbf03304341e"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.5b82bfc2.js",
    "revision": "58955e089051755c9932b189118230a8"
  },
  {
    "url": "assets/js/201.8ac389c7.js",
    "revision": "f64525a420e6db4ea22f5fff469c07c8"
  },
  {
    "url": "assets/js/202.fa5e08c2.js",
    "revision": "f5733ecf6bfb1c4195a601b6e85f6a46"
  },
  {
    "url": "assets/js/203.d9090a1a.js",
    "revision": "4324d6b7da2ec3752ff54e15e77a055c"
  },
  {
    "url": "assets/js/204.a6ce818f.js",
    "revision": "d32098e8b103a8965bb24da7a265123c"
  },
  {
    "url": "assets/js/205.97e3303c.js",
    "revision": "9b296cc1f88816cd2c4dfa4b69c9a921"
  },
  {
    "url": "assets/js/206.21b2fa8e.js",
    "revision": "d607812a942adb3ba3e14764c21f44b3"
  },
  {
    "url": "assets/js/207.0957740c.js",
    "revision": "efd81adee7f01810a0bd9f3a66512e30"
  },
  {
    "url": "assets/js/208.857dddcb.js",
    "revision": "227b4dbf38d8045ee8947e575fc1b219"
  },
  {
    "url": "assets/js/209.7e615bd2.js",
    "revision": "c8f716877d1b4276cc956a933cbc385e"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.f14f0206.js",
    "revision": "41c4b11c45c7486e2a19200c8ad64168"
  },
  {
    "url": "assets/js/211.1c33bbcf.js",
    "revision": "881f83b80ab563da352b824058e5d9fd"
  },
  {
    "url": "assets/js/212.7327260e.js",
    "revision": "287331054b8552ceb175a7e74507ef1f"
  },
  {
    "url": "assets/js/213.b262769a.js",
    "revision": "f2c87c83ff033f4089954ecda7894763"
  },
  {
    "url": "assets/js/214.2fa56a39.js",
    "revision": "e75e2dc1a5e888ef9e4868a3b92d14af"
  },
  {
    "url": "assets/js/215.0cf92d37.js",
    "revision": "e0445d2bdfb3bc31111ace045b2e8b67"
  },
  {
    "url": "assets/js/216.d3d67cbc.js",
    "revision": "62eec962f8982977ef57912ea682c762"
  },
  {
    "url": "assets/js/217.2156e57a.js",
    "revision": "603cb2c6dd9f706ca5d191879122a6f9"
  },
  {
    "url": "assets/js/218.33a629f2.js",
    "revision": "f78d16aa3e8fa9e5a0f51a48a9b918fd"
  },
  {
    "url": "assets/js/219.f163dafa.js",
    "revision": "1a54980d73e0dc14e1bec87b3e167047"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.547a6a0e.js",
    "revision": "fd78804ea10d40145ada2b454ee9670c"
  },
  {
    "url": "assets/js/221.41763fcd.js",
    "revision": "f8c89843abff6013163ec2895e1473c7"
  },
  {
    "url": "assets/js/222.6bb327cb.js",
    "revision": "e0567843b3b96837d5a7c80b66c46d78"
  },
  {
    "url": "assets/js/223.1f164cb2.js",
    "revision": "498466e35a94fab613da73c44ccd04a0"
  },
  {
    "url": "assets/js/224.28562d46.js",
    "revision": "f0161c644a63ea437d9c9d985cf4f6cc"
  },
  {
    "url": "assets/js/225.9b65a09a.js",
    "revision": "6a82057cf33155c45c8d91aa9f76c9bc"
  },
  {
    "url": "assets/js/226.075a73c4.js",
    "revision": "ab38ef21fc2ae19856782b757a57572d"
  },
  {
    "url": "assets/js/227.beba3349.js",
    "revision": "fe18992557750fcfbd84083705c2bc01"
  },
  {
    "url": "assets/js/228.4e9e7492.js",
    "revision": "bcc7500af6e9521ce56b1d91ebe8af8a"
  },
  {
    "url": "assets/js/229.c9c7cfc5.js",
    "revision": "dd2eba40838d113f037911167ef266bb"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.b575268d.js",
    "revision": "75085e1cda4c0ecf572b8427dc6af26e"
  },
  {
    "url": "assets/js/231.bbc29c06.js",
    "revision": "f6de3863074154b8e8d8105f31dc52f1"
  },
  {
    "url": "assets/js/232.7f8a0f22.js",
    "revision": "b3b725b77b6dfb41a10b052a0414acd0"
  },
  {
    "url": "assets/js/233.d3d7421b.js",
    "revision": "53db74f27e5195a48f62cc9c79c9acc5"
  },
  {
    "url": "assets/js/234.6bbf1e16.js",
    "revision": "4d6688bdc5c3549dd75eabe505056877"
  },
  {
    "url": "assets/js/235.07cb0395.js",
    "revision": "16a6825a636df13f8b44117949b72fe0"
  },
  {
    "url": "assets/js/236.e432929e.js",
    "revision": "81e0f7201568b778466afe2b2f2be241"
  },
  {
    "url": "assets/js/237.aa696dde.js",
    "revision": "801dd98b86c613ea7bc51ad88cbcbc77"
  },
  {
    "url": "assets/js/238.113a8a6c.js",
    "revision": "fbed13022a3018b881e5bc47e38b37b0"
  },
  {
    "url": "assets/js/239.e568a1f0.js",
    "revision": "01c8ae4097b033712580e256b6795764"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.d1ae0124.js",
    "revision": "c2114d909a1217fa09658c528ea2a8d5"
  },
  {
    "url": "assets/js/241.4d517de7.js",
    "revision": "eb278f07775481eb3a37dfeb29088321"
  },
  {
    "url": "assets/js/242.80370701.js",
    "revision": "7d3a517ea8a9a8da250584871fa33001"
  },
  {
    "url": "assets/js/243.1565a7ca.js",
    "revision": "aebb02dcef54fd12389b8b98daef9ea1"
  },
  {
    "url": "assets/js/244.62ef6092.js",
    "revision": "797967d2b5aed90e9c5dc70017091e12"
  },
  {
    "url": "assets/js/245.00d79b91.js",
    "revision": "3d0282d933c4d588e3a9a7270c7a23a8"
  },
  {
    "url": "assets/js/246.82146625.js",
    "revision": "d6af329f5930b374d648ee3e6fb1d0a9"
  },
  {
    "url": "assets/js/247.5168ecf9.js",
    "revision": "a4b8e5b5b658d941e1f027dc46081e60"
  },
  {
    "url": "assets/js/248.70e0b2ed.js",
    "revision": "4f35eab3990643ca180f4a12b0e797e9"
  },
  {
    "url": "assets/js/249.66381993.js",
    "revision": "0e8631b523cdf386471fbb79b71e8db3"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.b87654d7.js",
    "revision": "6daef7329afeeeecb6ffb209e097dff1"
  },
  {
    "url": "assets/js/251.cb99cdd0.js",
    "revision": "ef6d0ccc7bd9a6c102442377a92c0542"
  },
  {
    "url": "assets/js/252.fd2c6576.js",
    "revision": "4142580a6a29ad578b14349b839a8bd7"
  },
  {
    "url": "assets/js/253.abd32617.js",
    "revision": "c4521010fa67fcd7f28494b96825f027"
  },
  {
    "url": "assets/js/254.8a220a13.js",
    "revision": "95bbb9b6958d5c8f019e96a22314581d"
  },
  {
    "url": "assets/js/255.a8a790de.js",
    "revision": "e6977054728a7c15f218d14d21174981"
  },
  {
    "url": "assets/js/256.939eb9aa.js",
    "revision": "c7a6fc01999db7677a5f555f57858227"
  },
  {
    "url": "assets/js/257.a9b071db.js",
    "revision": "48cd6c70abe25322abcb83b8fc36a4fe"
  },
  {
    "url": "assets/js/258.0d5e13fd.js",
    "revision": "f66e72d46c47d1fd30029e60631244a0"
  },
  {
    "url": "assets/js/259.098a66b3.js",
    "revision": "274cd38d2af8a517f73f926c0dc3ddc9"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.656b2a0e.js",
    "revision": "082317c618ff9fc56c4ad65b0ccbcee5"
  },
  {
    "url": "assets/js/261.65112967.js",
    "revision": "4252fc995e6bc9e27c6866e3c6a34b44"
  },
  {
    "url": "assets/js/262.d5af9823.js",
    "revision": "03aab57aba342eb6b78edcf79576ec2f"
  },
  {
    "url": "assets/js/263.2acb6e0f.js",
    "revision": "8ba1a13edf762b4415c102ff304028e6"
  },
  {
    "url": "assets/js/264.f5a8ce2d.js",
    "revision": "ee45fbac00b4297a3a91ae5a18b062f5"
  },
  {
    "url": "assets/js/265.8ded41e8.js",
    "revision": "03a95767bf79d5f446497562d61bb1c1"
  },
  {
    "url": "assets/js/266.9115c119.js",
    "revision": "54e78c386101d03870d4d2b6f3b9cf22"
  },
  {
    "url": "assets/js/267.82d8049b.js",
    "revision": "195cbf58a46f97b91e3682406a62f601"
  },
  {
    "url": "assets/js/268.f5137b66.js",
    "revision": "353642f33172476177126a02f154e6f5"
  },
  {
    "url": "assets/js/269.3b05e236.js",
    "revision": "5afd3f09e568d0b51284c426490d6224"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.bff2dfab.js",
    "revision": "424147b6d2ba8b37cb7d965e09083247"
  },
  {
    "url": "assets/js/271.56b3af92.js",
    "revision": "f37507711651d8a4f52fe7b244c37952"
  },
  {
    "url": "assets/js/272.68afc0e6.js",
    "revision": "bbdbbb73e358e5ba381f000d128dba27"
  },
  {
    "url": "assets/js/273.93985d87.js",
    "revision": "b358af1d0e5e3439c2a3f6f6a5eeee5f"
  },
  {
    "url": "assets/js/274.c116ab63.js",
    "revision": "98f0d7748607b303d5a8377347e13a89"
  },
  {
    "url": "assets/js/275.e3cf834a.js",
    "revision": "1e889214ef08660fa396afb0c00572a6"
  },
  {
    "url": "assets/js/276.3c2655a1.js",
    "revision": "bfd8505d4b1961d627f7541ad8735ff5"
  },
  {
    "url": "assets/js/277.5e0dee2b.js",
    "revision": "62f6e47fb030c1d4dfef66c61d0e4b6a"
  },
  {
    "url": "assets/js/278.f364ca51.js",
    "revision": "0c353188f7d7df164d291380d9e393ef"
  },
  {
    "url": "assets/js/279.121755fa.js",
    "revision": "aec56caf138a1c2c232ac17a2170e529"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.5a2b70e8.js",
    "revision": "26696a029aff1099ab970901e6abd10a"
  },
  {
    "url": "assets/js/281.95022f15.js",
    "revision": "c38d66e8d4ca26507c073c1089a5f66f"
  },
  {
    "url": "assets/js/282.05448881.js",
    "revision": "1abba68e3fabcc32212d1c457b7ad3c4"
  },
  {
    "url": "assets/js/283.11979ae4.js",
    "revision": "e94ab13554181e332500778801601698"
  },
  {
    "url": "assets/js/284.428f09c0.js",
    "revision": "9d43292d250df3e5d3a8d50298a857a1"
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
    "url": "assets/js/44.496df8f6.js",
    "revision": "ba89d8cf74746c40076c7105921375d3"
  },
  {
    "url": "assets/js/45.f5372cf5.js",
    "revision": "a89c6b2671d6c3a7c5b7a2e1df7d4fe8"
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
    "url": "assets/js/52.9bb2d446.js",
    "revision": "710ad8f7c8bbd3b15e97e7b3db304bf5"
  },
  {
    "url": "assets/js/53.865d548c.js",
    "revision": "635936281c733aaef73646ece84e0be0"
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
    "url": "assets/js/91.597b0fa8.js",
    "revision": "a77574748b7b3501800709e5a4eaa7a9"
  },
  {
    "url": "assets/js/92.1ad7e06e.js",
    "revision": "38e53767d4dedc0f0381c5ab8b75abe1"
  },
  {
    "url": "assets/js/93.9694ebfb.js",
    "revision": "2f5c6b59f7a3335b91f559865d22576a"
  },
  {
    "url": "assets/js/94.365c394e.js",
    "revision": "033a16d27f81e84f336890dcd5e5a4c3"
  },
  {
    "url": "assets/js/95.1bf5f848.js",
    "revision": "cb5dcedb6e75503a8aa2f5453d2dab57"
  },
  {
    "url": "assets/js/96.78c41245.js",
    "revision": "c83180ebb82c166982eeaf99d157d58a"
  },
  {
    "url": "assets/js/97.51fe0212.js",
    "revision": "ceff8bbeb1600b69b068e06df8ed7391"
  },
  {
    "url": "assets/js/98.202c9b70.js",
    "revision": "fee1cf513182d96ec28523528f1537e8"
  },
  {
    "url": "assets/js/99.73517149.js",
    "revision": "c37a5f226e90befbb2722ba008fb2fd8"
  },
  {
    "url": "assets/js/app.30e6fe26.js",
    "revision": "1c890a8c8caf1815272d768e599c5705"
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
    "revision": "1be16c19d152c3c46be2de08f3285b49"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b4aac35644e1d64db9961c7567129e5e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "13663ca720e19e6d57b3977baf8a7b7a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "234bb4ef0ddf81e2e5e6c8c0673a3de9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "69d2c9de234c5f3a5098ef76e7fdca6b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0a668efa8bdacf7e22cce7c1d32e2834"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5c013fe27a42b15740b03068213a9649"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f1bde57bf88bc0dd92b45b79b97c863c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "862f43d6cc3c57dc9232ccd20f8b62cf"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f02ae7c93172283489a9a98fdc45a252"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "1d45b02c6314ae7823f7d78322be7df2"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "fe5c1f24625d99ed54f07da9334c90d7"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "bbe3bb69785c2bc6737af4c4e14398a8"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "54075948c655f015f86ed497158098d5"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "069515124e1690e54e010c8c7191ec29"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "40e14b71a26572a833212983c9a7021e"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "7139808063905a0fb4b8e449a12558a1"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "1b58ff9b4cde8fba081bfa96844e2f43"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "8d016ce6c3f3871516adaa9d511a5e27"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f8495dacf7b002f79b6cb0b64811807b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "8f05d4eb58fe98d0453760808426253c"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "cf9963e489843fb61c48e7f02772f187"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "982ba078fa573c275c0e549f86900281"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "e7949f052ba3872de01f9209b3e5df2b"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "adefa4e9be0f4a38a2afd4e9c8d94cca"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "35192d0543905c5f8004d3aa6237d06a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "523be2804f72c47729f225c0b8e5f1af"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "a5c56ecb6cc0350be08667a55636dc17"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "f32649bb2242191b3f260e7ade46ff0d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "8565d22e5e9191c8b47f92e2dd97b0cb"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "86aa32d88c8fecac7424bcabdd4dc6fa"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "50471bcecdfd4f4f1e67770bd67e5c32"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "f3d6b0f730bfb0e28c93981e234b5aaa"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "c93269739cd39e2f5bb9783f955392ff"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "56b60c16916ddb031cae9c216cedd25c"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "3d2ce86663828645dceb8c38d23f438c"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "71be0db0f3573d9111de05e1e28f7e74"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "dc2dfb158597321bdd4508586be05c75"
  },
  {
    "url": "basis/index/index.html",
    "revision": "cbfd2fb6dbad32a7f08ebbf400f6a8c9"
  },
  {
    "url": "basis/os/index.html",
    "revision": "fcd9af687fb898cda869c5f1a7f5eb3d"
  },
  {
    "url": "book/index.html",
    "revision": "e6ce26fc6ec12dd250ab2c84b7da8056"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "97b1f9780f7262bf49e8f8bab988dc83"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "26e5b31ff00323b042e2bf2a0b3f0e63"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "6de48a9c33de0826e14b232b34c694bc"
  },
  {
    "url": "c/audio/index.html",
    "revision": "7ef2c021b2c925beb353b3fdd223e735"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "85081aafc203e17a88df1c1e2bab41eb"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "417f9a40846ef9ef6b86ce608f886cf1"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "1d3ebd180545bcc757570234d963a74b"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "52e895c14e8c329674e2e306722a5eef"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "9616c86e753ac376a7e93c10a8d33af4"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "0487898abe86dbad53ec6766335204ab"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c0a6655bffdf7f21e1e18301199ee630"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "f0bcfd6f24bb44a72a89d1bb4e07f922"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "ad779d939ab8fda392a6b8a8c1bbac84"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "2df422b28a3f74a3884e72ea11dd6b7e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "fe0e7dc0ebeca57c9bc1dd5a5c39f4fe"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "43b2a65309fc824c702d6bd749aee4ed"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8c16af38d9c3b44649d2b883551067b2"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "00e7bb1432dd58b17565be1001f9bb41"
  },
  {
    "url": "c/program/index.html",
    "revision": "2ee12cf154eb2f0dfd0d00c91f07bd15"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "3cfab6520e907bf16ebf76aa77093f5b"
  },
  {
    "url": "categories/index.html",
    "revision": "7a7d0e4daf0c1e86c61ab0b4f8b678ed"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "ab88f36e3cf41175a3ab9b6ec0c812a5"
  },
  {
    "url": "figma/index.html",
    "revision": "0272510b357dcbb575dcfcb137bf46a3"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7678b0b1ccb8b89eb3ea5748c252e671"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "557c10b04f131f95757a885888e8a68c"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "1cf24687e5e7270a48bd1a0a2968e5d0"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "998aab0ba8938ed427ad7809ee6c3c32"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "7fbb1432d2e22e776b643767f5e57057"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "29e2b9debddd8040ae5dcccf49cf0177"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "c9494b57ef176e933a0232c6b107c341"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "54589cd046b9144fafe5b1360aa6dd5f"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "37f204adabccd2da95d4150bdf706bd2"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "8d5f899fa31f047fc2719f1ff9f32487"
  },
  {
    "url": "flutter/index.html",
    "revision": "c55fd3e237fd6ec647896d51c9a9611f"
  },
  {
    "url": "flutter/point.html",
    "revision": "58490dec38c7a0d303d04f22fc458069"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b8462a4963c2c8ccd4fc28899c3fa65a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "fe30a613d8dcb34ab1be178a00c101cb"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "119efba391db32c593f3716693f03efd"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e1ebcfac01acd9520db5c19f4905bfc7"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "437f8c14743fd503e9d445acc9f30ba9"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "fa64462d56bec5b666d028c61dadcf60"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "fbd6b91141785f8e136ff8e418a15194"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ffa93b8690da6f9cd67ae33f31348fc9"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "cafa68e46b4abf03249567cf9d584118"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "cbd724b0157839c2983c70c9f9379a88"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "dba0e16c70b5b7d66afabe559d219910"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5891052ae831c3b5ed50200fd5742cfa"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "08da0cffb9d87a1283fe650c6263d1a1"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e26bc30b84f08e323056da6e46a4bfff"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "83f9cb3bd3201df8a5b77bdbec3a5b72"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "b83986c32b1fce2e65be6aba6918f5af"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "c38d88abdfe5b035e5ff45981c4570e5"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "19df47ad94c87abbeb1f39e767c8e578"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "5262c975570cec334e78b67b1eb7ce79"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "63b82695304bb93ed75fac28d02a0185"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "044ca40375c8bfbef0af5805a1d9aeb7"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ec14c5917de7a3b504d0710d7634eb60"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "e6fd818fb79b3611597801d00f0c25df"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "24502364b7f44eb2e0cbd642440f13ad"
  },
  {
    "url": "haskell/index.html",
    "revision": "3caedf9273e27caeeab1c7b464617350"
  },
  {
    "url": "index.html",
    "revision": "84bbf5600209b95aa0012cb4812d661b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "6dd0a1674c7dd78a76327895362a9790"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "aacf0e813125817d08c6580cdd9f017d"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f16dbb756c7792df098759fbfa105487"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "8d5660b003a5abdda5b19506cff12cad"
  },
  {
    "url": "python/index.html",
    "revision": "1da06127c9b5e241e5f616bf9c3a846b"
  },
  {
    "url": "python/python-ase.html",
    "revision": "4a3c050ea09b0b335fc6def27754ff5e"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "11722298ffd047fa32e892143c0bef42"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "27c6eb30b63958b2e7dd74d7753ddbdb"
  },
  {
    "url": "python/python-file.html",
    "revision": "949ac6c0e2889f7557192ceeb61d72da"
  },
  {
    "url": "python/python-function.html",
    "revision": "f74b3fec62797a6f144f924682595e72"
  },
  {
    "url": "python/python-generator.html",
    "revision": "b19a1701ac191b4b296ab68e1e33c5dc"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "747503ffbe3548caaf52af685a2dfc18"
  },
  {
    "url": "python/python-module.html",
    "revision": "e4c372e6b7d7b8b80d821447c670301e"
  },
  {
    "url": "python/python-string.html",
    "revision": "0564fb45cae9e46d0dc4a6111c0278b1"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "e886bc2551c617d445ee6894be833a08"
  },
  {
    "url": "read/index.html",
    "revision": "8d8480ba9b0399c7afa8fbe74cf28bc4"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "23977566080343470f283a8885890232"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7ad3109f68081c79a81e7ac8277629dd"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "50f41aba4dd7c7cec4493578b9b8a22c"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "eefff24d82fc6bc5e2b2430a08b08666"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "d4c4987439c21014186632e7f3ca1693"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c88fc3af51f61c07f18f2c5985ca7ea2"
  },
  {
    "url": "swift/better/index.html",
    "revision": "de95cbe6f6999e04e6ed642225e62899"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c23cb7732294342744d16d5f2b6485bb"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "c745b2a75a78a8017e8139d8ad6025cc"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f19942e086f88d888b3d608762761a02"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "f68b0d75f7979769001bdd39e1cfba7f"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "7f733a84aedbe185a8a1299f1c4b7a36"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f46d775cae1653d91073fd53056176c1"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "334c250780ba0ff8c0ed155afa17e2b9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "af1e2d4635c9e1c9229723ce9d9fcd21"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "35617448d01062a8a8f68c8fd9f6c2ae"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a44db15092f57dfedb775604d739f210"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ad4a4bb8641adb63ce91ab0cb61bd76c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "b9ccd21ac40990cd4a80683de119f82a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "2b942345cca281914adf29b2e83b68e5"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "b8a717538dfee93d785d10373ae2ad29"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "68a6217fc241c3e4efae40b3505e941c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "93c1ac6cd5dc83d2ab7516aa401bf856"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "8d6f475fc1f14b999dc97b77b2832390"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "7be0b13cc03f61f0bddf9b29076a5755"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "0868b3573449209cd949e797dca5e589"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "424ef516402eed3eb6ef291d9ed6fa21"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "d8ed0b0679216f5f1507af854c39e671"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "5a50ae491776f592beafa3b5f006bbc6"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "4c1ac8f871a7895643b33a25ef4b33c8"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "b1f16a9740eaf3b0bdc3ac88790fcfb1"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "136753c24e2c707462b984bf1f7d464a"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "5f262b44a507d07863ab242270945e19"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c5f18043d03635596faec4a3d7e5356d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "54e21612e69f6df6afbae3d5cf31333a"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "01db31665b8af9189996e15353c86e3a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "e1440b498ce6e9200f56d7394b4b6d50"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d0e692329a34aab9a63070f7d6bc5ff1"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "e07018bcc3f121bc92c8fae69fda4ce9"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e818bf67fbe7f639b3c030375cfa4d62"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "3655333e7083c0b9d1f9ed6df8fe55b5"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ea0c3d048ec2948568c6a748ef90db59"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "cba11e512e4820e996f3687426ef4f07"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "41ccfab4635e74bf915607a69a7651c2"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "8b196f33c75701c91544b167b875d105"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "2073bde3b9071c6aee1bb78504ef9ad4"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "732dbe572cf88f1c7927baa4b6cd7ce1"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "fb330218d8c81d24fa3efbad4badece7"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "eab27d971fd6d7d4cde1433a46c3aefa"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "92e848e689b497be29b564d9b101835d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "1aa8d69054e4886a05087a75a4f7e19c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "8b5b38a5f0afb9aa2ee4b39270e40eb8"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "218e6620e599624b054eab827ae9adf8"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "abeef4b34f4a2ab67c6a487ccfa36548"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f2d9e084290acc9a8497955ae5700744"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "45735afcb7ca67361cc4f287c52ba03f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "03d5fec1261fea05be03185493605f99"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "6679710cf4776777b0c14fb3e5b0fdcd"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a99296ba113ed240ad5bb5251628fae4"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "170d7cfd38b4cb3b9fc8a7874fc97c5a"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "30babb06d396baf815064a690a657573"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "a0ac2a9ce7ca5d9401ce68404dd80e39"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "9437f471d7fc11dee43e5d51e27769b6"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a692cb6816bf5ffd177e1f55afbfb26b"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "69dc4986298ef230c160a48b081d93f7"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "9072492cbb1f9c64a36255b4a8975a85"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "8611224e883bde1f3ea5c41bf5c99047"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "45279f31d752ff522daee72e07f47193"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "e3207448a4496a83b9165d75c1e74298"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "14230e0dfefb26d9d3710772625211f9"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f39dcae99960bb45d088e24bdd27bc04"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f5064b31c2ddb26058cc873d0fe59253"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f27fb0245f8ba3199f1634686dfa949a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "ae1b63748a82cfe75886327b7a0f0ff8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "676e6737ca2ceae7e6a45424e47dc639"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "a72ae74abd42926a3a319d4e352c8680"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "81d6315d315d940ec0ad221b141cd247"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "c65a09b9211d230101f7d5fdd4f827e9"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "c965bb4bef35f21373a86dcb53b3c4e9"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "cc35dfbfbbf8aa5e1e4190b91090ee29"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "75cb1a77a6252cede123246ee8b47a73"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "99d02840823129f0678d3d484bd2b58d"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a2f856b8e5d82956822b4a499493e0fe"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "dd5a42d438c3549860a328b7c836652b"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d2edfd83cabb2c25be8a5f145e18b3bf"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0df73b3eb2dc81859b625641246328a5"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "05f6c555002eabe58ced446d73cbc423"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "393fd6f35fe90870282e6100905157fb"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3af000f080b2d80ff97190b9ecd7f8db"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f0e2807fa82e916dc9de31cff9837ad2"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b7b8f2fb866ca3c20e27aded6dc2bc26"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "e406698b66bbada76997b34305046267"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "ab75db85fd58030d8b9c8947e03c2c4f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "1acebce8740918540c320a41f9cde917"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "3bce7e2af9ebb4f74a1929ba627291af"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "4e186912c47020ed22980ced390acd70"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "41142e3828f4c02b541bdc31c242afd6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2378f00668a17cc8aa4ac3b656de28e1"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "4708fe634f9ce0683d906118fabeeb5b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "8b6eb9adc3a58b74b248ba71187b37fc"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "4c4f47e94545ba91fd6c76bbee3ef525"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "3ab5785819176cfb537264753e668a35"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "780f645d1e6574180ce7e134368c021f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6817218a92fdbaf0a1d80b614dfc79dd"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "42b31f0827d95f13561517c6ea6938fa"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "6e449701cfc712bc99c7fb8356fd8ce5"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b282f9f617666dfa2f41c9c15492f9ce"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "2fa396f952813d60d10b95cb95a87ea4"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "0339689d49934c04f89f27d4893ed64b"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "e766b52d256ec909a14cecfa62d809c7"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "19eff6e7f9153ceae45defa975c5f3d3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "4e1d0d47f0546765707097559dd332d9"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "b59c0f418302a05488f94d9d64048b69"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ed3732116b5f0c2f3d9d147dc7de1c33"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "dfd561b89ada214256709e5fde80781d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8241abf05f6296bb757df3057ae5138e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2f7e2d8c29106d50a20bcad976d788b7"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a3bf4480a905dce1e2e1653729bb4b7e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6b8de99cdb9c83e53492564a7c4551cf"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "53f79dcf3932262c35346c966ca11e6b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "053229e7c94f29663f3d8390bc440211"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "5fde9dfb3e12a7ba8a2f04cd6a65d572"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "67d156090cee532560b78009c647648c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "8c8ebf6ab7166c03bfe4d0f2dce1590d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "9b0f23813e92c308293b6c53f1355301"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "a75f5825d7e31be1a204d5c72a3802a5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "e11fa858aaecc72dc72dd062e3266f2d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1b05ac14701f0960952ee5f86096096f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "624fa908256ed558ceb3fbcdd4310aac"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "4505d35b619bbfabf291ca3f78695a0c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d68f6987708898d9c6ccfaf2acd559c6"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "e474ae1383ef62ae0d658025b5647e89"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "9d5171c9caebb6fa79cb4881a160bc9e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "3af0cae3bdcd3fb3121847390814d1a6"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "627961ab90d121887737dcd4c86d0040"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6af6826ff2c49699f25ac84a26140a09"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "86bcae5b541b286ff1ad0b997e0bfb7a"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "319eee48d2e577a01436871ddf2f8a10"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "f83ecebc77add3546944dd24aea5b71f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f948301a683dc544d54fc1ae0042c456"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8aaf14e9f69befec012d2b93d86eb7d5"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "82ca66cd2df851275874762436d0c113"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f78e00692b743a6ed7ae20fa7d0e2b64"
  },
  {
    "url": "tag/index.html",
    "revision": "2d4590dd3458978a7c0793d471b6844d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4724f38c1ebc5b5a99289783e100ec94"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "b950e3d41a71e1c9a4356acf6ca767e9"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "27660dbfee20860742711810662c5399"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "7d510833e8ff39c52af98ddb497377f3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1092045ad8cdf77df718b09b8c3d0ac8"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "d8106ade44f6a242bd93eefab2129315"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d04955e5f38f7fe52be09efddd25d34c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "16c0057833966fd03b5a3858bd601dc0"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d8575936cb58bf3d14406b60fbb00d86"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "03aa8e905b7dc3d1a498d0b85db7647b"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8693c4ad4f6ecdfe012c2f601dd1a6e5"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e12053732c0a0d057ac89adb1af7529b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "cc0b8d0d6b01fb6738f637c91426a880"
  },
  {
    "url": "tag/python/index.html",
    "revision": "40d534e54348cc909be76a1b1fb8e503"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "b4893e13d3ffb8f910eda7ef2a52051a"
  },
  {
    "url": "tag/read/index.html",
    "revision": "ba8e705c60f065d7ef81811a59b900e6"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "6365c335bfd6d7ccbfa9200c861c7d27"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d9be38b2eed5ba7b32cf5592f9d61f39"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "6c0ef8ee0c6417a992cc9e8c3657cdc0"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "da10c0d53ec0283d519ce1fccfe5ec8b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "4f72d98601d6bbb17b93a7b2a29993c3"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "7842baede7e8bb8d3763d852e2bfb3b5"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c1b6227d5c774d41b713d32e055d1648"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "b722ff333d5bbe224bd528e3e44fd2d1"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "f0a5326a0f863585eba679b4b551c420"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b05459e8e0f1b39b97ee22217b24497e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "56f0fccff1e3d27085602dbf212bef89"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "fe3f11116f730eb8bf77b40bc862168d"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "5f4e1af4ee89780f16b5bc32958c7008"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "3b9bb56faa789605fe91da34e1581b9b"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "492da0ded2d88ff2c674bc966e15a17e"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "7a86d82ae743746b15e12f8435203ce4"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "c2ebef794b03b7293ebe73dbd22333ab"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "0f79e213f3385130d46d6d39a6996d63"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "883253c34f8181ee2b8fd363e35b4149"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f934e7161c25284f92225756a3acebc0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "262c3179a1c0d1a3bb2b92e798701644"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c2fa46753f3321756bb9b60e1f3fcb2c"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "4654ccebe91e089b66980c101c12b53e"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "aed933f8b6da00c584a00b87d95b26b2"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c22d21664c6f08ed6e4b808d04d9536c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1dd28c32b1f8a1ce4f3639fce8670a5a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9fdc80fee0bb62e67539486b2bccf472"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "41b0d068ba2c32db0177315f12c08f0d"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "ce6726012381003548044d0d738902c1"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "3af034852012f3ca10be2bb4ff7cc214"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "40d4395ee51cde886d7f10550a263a4b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "d99a522cea593a423cca3efc2d5fcedf"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d8dbf23c6eb75916067cd456d0d792f1"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "0c6321f4e5c53e4bf5b8ce7482027b10"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "977c6f19c173ddd37699a750927b90f7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ac76d2a7be05c09d1c5a42dfcfe941f5"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4ce85b04157819ccc8f5bdaa97d53ade"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "830b3375c1dabae600fd630754d37822"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e4b652731741323d56a7927b83df2328"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "2ce03444c995c2668ab0d8134b9dffb0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d46517cdff686a7facd3104ca5239af9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8eddca7bb0c9781b2c05c7f581bb992d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "67b4b7a6faa2591c62f6e8fdab3c6413"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "535979207daab07499d71a30676adde8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a576a7a005ee9137fdbcc259c566bb32"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b1eca167d21bd592b14072791d019982"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "06829656c38d59b97fa1f3ca58c6aaed"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "bf7dad36f946ce33f522785628544ce0"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "327dec8efe2be3078f66f4704c25d2fd"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5c06cae8523ed1e26ed4aac3f766b556"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "05fef6c3aa6d2cb34a5879a7d88ad169"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "9862c7e48fca671cbaa81db26b36f01f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b35a4b267a13c7dbe9f9f3f1c0863856"
  },
  {
    "url": "tools/docsify.html",
    "revision": "2acca01922cd006b478743a72b3717c5"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "e7afccdfbf9a75130b1a43054fb396d3"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "bc445139117c8ef742b0744dbf07bb73"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "fde4a196cf2e7c5f13798af01417da9f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ff8bb109a427f00f6c706125d2e66637"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f2c401cd62c5c08a40ece4ee62984b57"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9367a9fe88db6446cf9668e9c47c7491"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a2b27725e179f17b229e0c4347b61de3"
  },
  {
    "url": "tools/note/index.html",
    "revision": "227605b14977e91b878d144fddbac0c9"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "14dfa8bae9e99253982a0119712a5dc5"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "336c5ed16805ba027536035aa49d760b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "b1f67f46adc92eed44ed3cb924e8e2c4"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "7d1ff2ec5ddcd66e0efd944580f66f18"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "9c4a3aa671c515d6643d9f19568622f0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d0f97570d72f2473b6f3f2eb3b2d5250"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "abc05540d13ee6c1f808342ea10a846d"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "659ad5701b664294c2262df68efd0347"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "62d5416efb0fd7454754fbeb9f14734f"
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
