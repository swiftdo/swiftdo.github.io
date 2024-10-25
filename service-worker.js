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
    "revision": "3317e9e92ee77e99d4645f511e9cbff1"
  },
  {
    "url": "about/app/index.html",
    "revision": "5c13c372e98c36546a395847acc52633"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "80b8706ad420067216460374f730d8ff"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "569101ef4d3ed3b1ada9dbd580a179bd"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "924be4728648864a3f7252278c55bb99"
  },
  {
    "url": "about/index/index.html",
    "revision": "2a1d778bf0ebd53d07acb49182da2b57"
  },
  {
    "url": "ai/index.html",
    "revision": "2b71fa2a726e479b1752b8ecc50c1b86"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "1a307034b3a6b00cc309c7acc7549b86"
  },
  {
    "url": "algorithms/index.html",
    "revision": "546e15fffba6de5d1b946e526136dfde"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "f210e4dae9b774257a9abf0dd65ddd11"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "ef8548055b07c6c3c7421e56470972de"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "6fa46414cbf687b60b89da945c2c7589"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "959fa367609e0a921aa6f3ad078273bf"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "93844573745fddec723626a85c4040e2"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "53b2335397b3c6ff33ae265dcacf93f6"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "ed9e5c6c876fbd82baf798e801557bdd"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "75039caa9c50a96e98794bef556d31f1"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "05fc9c7c579d839e728fa1fe0d1aed1d"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "498e0acc35fbcd9bc600f18ac62cf37f"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.09c75cd8.js",
    "revision": "1fcb58aeb692bb737c61eceda8eb0439"
  },
  {
    "url": "assets/js/101.86074a49.js",
    "revision": "527ae229932e69a7fdc39eaab6a703f3"
  },
  {
    "url": "assets/js/102.4bb95705.js",
    "revision": "adc515f6cbb1499c5241d667c59d9764"
  },
  {
    "url": "assets/js/103.f48a2ff9.js",
    "revision": "09f191c591517983169ea8ff853a386d"
  },
  {
    "url": "assets/js/104.09b129c9.js",
    "revision": "06b37a24806127065e169db7d5781639"
  },
  {
    "url": "assets/js/105.16d8fdf9.js",
    "revision": "e5ed0a91d26cb66a16d54432e0efdbdd"
  },
  {
    "url": "assets/js/106.32772f9d.js",
    "revision": "04fcf9b976ea273d4b53ae322bc1523e"
  },
  {
    "url": "assets/js/107.cc5463ec.js",
    "revision": "d0e4715c4d046cdda4717904e72e8e6a"
  },
  {
    "url": "assets/js/108.b415a5e6.js",
    "revision": "d509fee6d98c05de014162fc459e5ebb"
  },
  {
    "url": "assets/js/109.9867e1b8.js",
    "revision": "2f8a76abc5daa0a34038b7a2571d48ad"
  },
  {
    "url": "assets/js/110.39c3c738.js",
    "revision": "440c2a3c1b59de99cbf916fcce288940"
  },
  {
    "url": "assets/js/111.f3b73654.js",
    "revision": "23c23098c76745f5dee69ed4641f3b19"
  },
  {
    "url": "assets/js/112.9092efa4.js",
    "revision": "fc723c8ce92b5ccf7661d11f246c6b10"
  },
  {
    "url": "assets/js/113.bdf21016.js",
    "revision": "55c992a94c9b1196228b577082488e34"
  },
  {
    "url": "assets/js/114.3be2b39b.js",
    "revision": "32dacf15db50e8ceed2e9e7fb12027f1"
  },
  {
    "url": "assets/js/115.4dce97ab.js",
    "revision": "fa24baab85f13892193c78f3bc88414b"
  },
  {
    "url": "assets/js/116.7da0f747.js",
    "revision": "e4656120a93417a0d667fb165f5f5527"
  },
  {
    "url": "assets/js/117.046d87fd.js",
    "revision": "8e6193b645065c091cbeaf1a1a7a05e9"
  },
  {
    "url": "assets/js/118.85e80792.js",
    "revision": "8c4a6dec7750b9d2dc4c39f1d4e61719"
  },
  {
    "url": "assets/js/119.06a975cb.js",
    "revision": "fcde1e4bac7b5e0cc8f480ceaf7794db"
  },
  {
    "url": "assets/js/120.7a914dff.js",
    "revision": "5a59a872f228a9fcc510ba6d1646001f"
  },
  {
    "url": "assets/js/121.6cb557df.js",
    "revision": "fc5d2e0137d0de6f540672cb92766c2c"
  },
  {
    "url": "assets/js/122.e022f387.js",
    "revision": "c38f29ca7a711b03ec16c31080d29ac7"
  },
  {
    "url": "assets/js/123.0fd62d65.js",
    "revision": "5b9caccf8e35e876aa4fe36ce0548e68"
  },
  {
    "url": "assets/js/124.d6b39717.js",
    "revision": "4312c283f816f520889bbba215043717"
  },
  {
    "url": "assets/js/125.c99b7764.js",
    "revision": "f06e1fb0dc31a41ca3ede1eca83a23fe"
  },
  {
    "url": "assets/js/126.e309bd87.js",
    "revision": "da0b963b677fbbf1682e03f346212ce0"
  },
  {
    "url": "assets/js/127.15fc6fc5.js",
    "revision": "9bdca38c870de851dfba503247507b04"
  },
  {
    "url": "assets/js/128.2ceb30cd.js",
    "revision": "a4f328d1cf05ce6872101b0edadce71d"
  },
  {
    "url": "assets/js/129.b1c33b88.js",
    "revision": "ddd5fb32ef0ccb5ebddb4d721abbcd8c"
  },
  {
    "url": "assets/js/130.7f2cb654.js",
    "revision": "1e9eaf197b0cd91acb1fb02c292d84ef"
  },
  {
    "url": "assets/js/131.73605c79.js",
    "revision": "e853502bdfd8685298210b747afd8efc"
  },
  {
    "url": "assets/js/132.db61948c.js",
    "revision": "33a9af95828b11dcf6154f0aaadf1805"
  },
  {
    "url": "assets/js/133.5d754756.js",
    "revision": "f4f77d6181cc32a813da495fdd770634"
  },
  {
    "url": "assets/js/134.dd70b5ee.js",
    "revision": "d457154bc845574bdcd4c2f52815d69b"
  },
  {
    "url": "assets/js/135.09b72b1b.js",
    "revision": "a07a635a1d0fde00d493af9a6d6a52c2"
  },
  {
    "url": "assets/js/136.962e8ee7.js",
    "revision": "3895fcc316491b26dc89f4f4be94b82d"
  },
  {
    "url": "assets/js/137.85541ad4.js",
    "revision": "8953bb41c23772acbe6db051d8264673"
  },
  {
    "url": "assets/js/138.0b1e15d7.js",
    "revision": "f301c7300b9c945eafc810e271217d27"
  },
  {
    "url": "assets/js/139.0b1649ca.js",
    "revision": "075f3a4f2c96dda39a815c18b3275043"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.dd7cf92b.js",
    "revision": "f3149e6a6786f7559c40da5c3f1767fe"
  },
  {
    "url": "assets/js/141.c6351533.js",
    "revision": "195db2418357d833941ccb3edeb67df1"
  },
  {
    "url": "assets/js/142.414e82a9.js",
    "revision": "4a65cd99e8c6dd42ee90d33a8e4e6003"
  },
  {
    "url": "assets/js/143.ccede42d.js",
    "revision": "02822bbaa5e25870dba77299d245d981"
  },
  {
    "url": "assets/js/144.4e4649e1.js",
    "revision": "fbfa17f2208d98358b6b04f2062890a5"
  },
  {
    "url": "assets/js/145.d151327f.js",
    "revision": "487ac09ed760def63ed436e548590c17"
  },
  {
    "url": "assets/js/146.e2645faa.js",
    "revision": "fa9d5e6f8feda0a6b41ed850084ae4f0"
  },
  {
    "url": "assets/js/147.88fbe495.js",
    "revision": "28472083693e54697c97478d5dae3191"
  },
  {
    "url": "assets/js/148.0c8f2d77.js",
    "revision": "adb13f3bc84b539b1db78bc7922f27a0"
  },
  {
    "url": "assets/js/149.5132f468.js",
    "revision": "a5837ad27edd9f1b402719539ff8c22c"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.03c22098.js",
    "revision": "aee16027b4cabbb350f4b9d46214761d"
  },
  {
    "url": "assets/js/151.3d3acd88.js",
    "revision": "d1840667f12bf23a04125cbe8baeb95b"
  },
  {
    "url": "assets/js/152.cedbcd5c.js",
    "revision": "712762ed3ff815206dccbfac8328ce24"
  },
  {
    "url": "assets/js/153.721606de.js",
    "revision": "67858c6cd8befd2512282b9c71b6c105"
  },
  {
    "url": "assets/js/154.c14b0eea.js",
    "revision": "e4267f980797a0e67dc39d20cc1f97ee"
  },
  {
    "url": "assets/js/155.f3bd0f43.js",
    "revision": "85a809e68b0e666f30b7f37ced62ee91"
  },
  {
    "url": "assets/js/156.3dde5f3d.js",
    "revision": "73626425976ffffe4f02f1657ff15471"
  },
  {
    "url": "assets/js/157.08d92fd7.js",
    "revision": "0f5fd8f49215689f768c6d41e310eef6"
  },
  {
    "url": "assets/js/158.95805728.js",
    "revision": "f9665b1c1596b9bcf6b2209dc993e3c1"
  },
  {
    "url": "assets/js/159.46f75739.js",
    "revision": "867402b0f5146abbcde39e703e4179bd"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.c068bf70.js",
    "revision": "eccaaa5db4d634937b97305f2164f27b"
  },
  {
    "url": "assets/js/161.70177828.js",
    "revision": "2b0ce8c58ddda78e91bb6b237b1eb3b4"
  },
  {
    "url": "assets/js/162.109fb59e.js",
    "revision": "d1ba907ba240fc2c0326b9c951df7b2d"
  },
  {
    "url": "assets/js/163.21fd2d85.js",
    "revision": "d1254780316b7f0ec1c1e8739e7bd667"
  },
  {
    "url": "assets/js/164.752191d6.js",
    "revision": "72b4b41385503e408ec226e6a426ec6e"
  },
  {
    "url": "assets/js/165.09ff9fc1.js",
    "revision": "823bec8e1d59b2add1997e430b5fc734"
  },
  {
    "url": "assets/js/166.852c20b4.js",
    "revision": "78c61d270aa1c64bf5ecf0b43b142e57"
  },
  {
    "url": "assets/js/167.c5aadb5e.js",
    "revision": "d7f7c598de37884662302418a954e6c3"
  },
  {
    "url": "assets/js/168.56385f23.js",
    "revision": "f0219e659c81b346f69c5b145270740e"
  },
  {
    "url": "assets/js/169.471bc608.js",
    "revision": "bd26c4d1342ff4b88d3fa25fdc0f560f"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.04395d8e.js",
    "revision": "ac3e41bec218e5cdfc245ca25da47591"
  },
  {
    "url": "assets/js/171.363bfccf.js",
    "revision": "aabda7844cf2c092d2f43baacde47026"
  },
  {
    "url": "assets/js/172.36f25e0f.js",
    "revision": "e78a158bfb344aac164aeb76be73e251"
  },
  {
    "url": "assets/js/173.805b6cf8.js",
    "revision": "20c5a5c4fbd2fcfb55e1e7987dba70e2"
  },
  {
    "url": "assets/js/174.fa8c8e75.js",
    "revision": "ba4d36b7961628ef527b12307175bf2d"
  },
  {
    "url": "assets/js/175.73f51645.js",
    "revision": "53c188f8b4c7aa1775fcc2817c0c978a"
  },
  {
    "url": "assets/js/176.94508df5.js",
    "revision": "8d8b0f2042c53b5da015e656f4da9270"
  },
  {
    "url": "assets/js/177.82cdd018.js",
    "revision": "b8424a059bc55d3ec2dd2a04c6fa2e67"
  },
  {
    "url": "assets/js/178.c1b37aeb.js",
    "revision": "33c3fffd53861c92a73577c1a3ab5194"
  },
  {
    "url": "assets/js/179.3d699a64.js",
    "revision": "07a0d7d67c243085b611e04f1e106f0a"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.88deef48.js",
    "revision": "1b623d8622ae4c361ff27e8f79554e65"
  },
  {
    "url": "assets/js/181.ff4ae24c.js",
    "revision": "ebf97e50d4a23b5a6c8d091d5f2445f2"
  },
  {
    "url": "assets/js/182.dc968e2c.js",
    "revision": "305e974cf06f4586118219d7ca1176d0"
  },
  {
    "url": "assets/js/183.7248ec51.js",
    "revision": "3480686c6c98a85c0f5d1a662474f5e5"
  },
  {
    "url": "assets/js/184.cb6d7511.js",
    "revision": "c7fea3f494cbcd94d455a181d0b41d69"
  },
  {
    "url": "assets/js/185.4cee8a6b.js",
    "revision": "5b3005714638204a1ec174a707623fc7"
  },
  {
    "url": "assets/js/186.239eb085.js",
    "revision": "c0a5c107ae650dccb4ca728598c70c08"
  },
  {
    "url": "assets/js/187.0875165a.js",
    "revision": "5bd1d63580162590fd9debc5ac815152"
  },
  {
    "url": "assets/js/188.6c986033.js",
    "revision": "85ba96187397ec7be45e1ab8f6fd29ee"
  },
  {
    "url": "assets/js/189.6688c44a.js",
    "revision": "ad799014f4c64643271ce71bb2b9b631"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.d6a6c2b7.js",
    "revision": "9c9ff2487dd9e7263d9d1f8457ba8556"
  },
  {
    "url": "assets/js/191.48954ab8.js",
    "revision": "523d3c9d8d28f7fa352bda1f5093820e"
  },
  {
    "url": "assets/js/192.4924c567.js",
    "revision": "b6bdfad1e3a558199176e6f0f3cf834c"
  },
  {
    "url": "assets/js/193.c7cc3143.js",
    "revision": "d683606239a33ce86b454b180b7e4d58"
  },
  {
    "url": "assets/js/194.03644107.js",
    "revision": "eaf83bb5b297972f538f174adf80f6ad"
  },
  {
    "url": "assets/js/195.50972591.js",
    "revision": "a4b464edfae04d28d4473fda57035a6f"
  },
  {
    "url": "assets/js/196.c5103a31.js",
    "revision": "3159d778014084503a44f848af18e65f"
  },
  {
    "url": "assets/js/197.2257dd2e.js",
    "revision": "b88e563f94c7dba7f1244f157494f518"
  },
  {
    "url": "assets/js/198.ca3f146e.js",
    "revision": "80b2352ca5e142959cf0b5f6c48c48bc"
  },
  {
    "url": "assets/js/199.15ff508a.js",
    "revision": "426ef7d1245c45e569e7525a408e1d3e"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.64dfa34d.js",
    "revision": "393f5b8e707bc1b1211e9d4a52e82e8e"
  },
  {
    "url": "assets/js/201.8e160138.js",
    "revision": "8e743e58d903bfd7e947e52b2b9d2587"
  },
  {
    "url": "assets/js/202.e8980df1.js",
    "revision": "2b800ea8d0ff483a5665a2059d1d5c40"
  },
  {
    "url": "assets/js/203.2419a3b6.js",
    "revision": "22a2c6fc0e80f095328cbae2ef2b866f"
  },
  {
    "url": "assets/js/204.5446b80b.js",
    "revision": "117f70a71b04eddf55825d02f0872b35"
  },
  {
    "url": "assets/js/205.b0412491.js",
    "revision": "948846de0ef56e32ac7640fca35d5761"
  },
  {
    "url": "assets/js/206.2a3b2377.js",
    "revision": "46bb44d3a68464bda9a03e2d777c0f96"
  },
  {
    "url": "assets/js/207.dac9bf40.js",
    "revision": "a1cd1b606e91b463b2f4cf923ab09fbe"
  },
  {
    "url": "assets/js/208.986baff2.js",
    "revision": "c3133e5eac33ddd91bea69741e13742c"
  },
  {
    "url": "assets/js/209.01564c2c.js",
    "revision": "f9a15408a8862cef8bb6cf3745a59d29"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.e79da039.js",
    "revision": "5b0d589f71b785ab64e85d26e7f229fc"
  },
  {
    "url": "assets/js/211.4529400a.js",
    "revision": "97d2f6a992b17ea6a42e8f4138e63273"
  },
  {
    "url": "assets/js/212.80425459.js",
    "revision": "e0fdc7369dd2b6811fb9595fbd5d8f32"
  },
  {
    "url": "assets/js/213.7ab7ad2f.js",
    "revision": "373ec14e16cb431c125eb5af662a5e7d"
  },
  {
    "url": "assets/js/214.5577222e.js",
    "revision": "15cd7709c8be128dc5983d491a060346"
  },
  {
    "url": "assets/js/215.d2c18930.js",
    "revision": "d5dd27115cad8e8101c8ba9b4c4e266f"
  },
  {
    "url": "assets/js/216.d5dc98ad.js",
    "revision": "d240008fffc75a35aad9702d13f4470b"
  },
  {
    "url": "assets/js/217.a8bbb929.js",
    "revision": "607b5b4e14655ff450e86ff48ab09cc7"
  },
  {
    "url": "assets/js/218.2ea300e5.js",
    "revision": "67cd54668a227977e998cd6e329529b6"
  },
  {
    "url": "assets/js/219.d766d9bd.js",
    "revision": "624f61b36061a1f4800c78c088a5b2f1"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.7cd27d19.js",
    "revision": "3c1512843e6c6933bb0f335820b9de57"
  },
  {
    "url": "assets/js/221.001605eb.js",
    "revision": "3d233fc349d7741fa8ad4e177178af63"
  },
  {
    "url": "assets/js/222.e5a4cbf1.js",
    "revision": "698369de3de378af2d6016160278cccd"
  },
  {
    "url": "assets/js/223.76918fba.js",
    "revision": "ade8c3614c0f5027343b91bd923f7bc3"
  },
  {
    "url": "assets/js/224.2c87b782.js",
    "revision": "640a4cbf994d65b0f5834356bbd65a5a"
  },
  {
    "url": "assets/js/225.f01e736d.js",
    "revision": "604e8e25cb5a75e79edba5df964e25c1"
  },
  {
    "url": "assets/js/226.4f0f907d.js",
    "revision": "54713ffce05b4ad71811859b6f7125ba"
  },
  {
    "url": "assets/js/227.fe443695.js",
    "revision": "7cddcfa52fc0ea6ae21f94ba0114cf3d"
  },
  {
    "url": "assets/js/228.99c92894.js",
    "revision": "0e42d1c32bbe0bb2b9e1333e767d24c8"
  },
  {
    "url": "assets/js/229.730c1453.js",
    "revision": "fd66b5d7cfe491bd9621cec604b3b759"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.65fe8ed5.js",
    "revision": "1cc034fe55af77b2a22e4093e01fad6e"
  },
  {
    "url": "assets/js/231.8d8fcbe6.js",
    "revision": "f077b0616040447d3d94bd2c5891f1b4"
  },
  {
    "url": "assets/js/232.4b9114b4.js",
    "revision": "16578a69e9af902c9fe50de9fb68a4c1"
  },
  {
    "url": "assets/js/233.168100f1.js",
    "revision": "e2796ab5f498c9ba0870b07f1363ac74"
  },
  {
    "url": "assets/js/234.4a6375da.js",
    "revision": "ec5c5ec41bd55991c624e07c67067954"
  },
  {
    "url": "assets/js/235.b29d22ba.js",
    "revision": "d22284ed3e0c6496d22671ad05294561"
  },
  {
    "url": "assets/js/236.f2bd5627.js",
    "revision": "593de0887a0a4bd706b74d245835e94e"
  },
  {
    "url": "assets/js/237.2e94e88f.js",
    "revision": "945a88429e6c3b20dffce9143c080369"
  },
  {
    "url": "assets/js/238.fb03a056.js",
    "revision": "dfbb948420a9cee3ded81d1c30e9f92d"
  },
  {
    "url": "assets/js/239.1d465060.js",
    "revision": "7b10f631e82df349cbe28cd9c1f83b36"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.1ea24883.js",
    "revision": "12c65ecd7eb243ca0aa8aa68d515c57d"
  },
  {
    "url": "assets/js/241.3073d1d7.js",
    "revision": "9cd654e08b2299fe51dd75a74e1de9db"
  },
  {
    "url": "assets/js/242.ae435f3d.js",
    "revision": "1bb9281636e9c0082350bfd2572e271e"
  },
  {
    "url": "assets/js/243.db37ebcd.js",
    "revision": "7b285840ed8b5ab94ea4e23b3d749c7c"
  },
  {
    "url": "assets/js/244.0dce726d.js",
    "revision": "3c44cb618e6ed60b19be63d72e07bb2e"
  },
  {
    "url": "assets/js/245.a7156f13.js",
    "revision": "4e9e75fd3c56b02af532e50a2c8f745c"
  },
  {
    "url": "assets/js/246.d37e0e4d.js",
    "revision": "51dd99eb1f2a091cd196029fe079c7ff"
  },
  {
    "url": "assets/js/247.c9cb5eb4.js",
    "revision": "f268aad60b31ac60e3f6e051471b2515"
  },
  {
    "url": "assets/js/248.5dcd724c.js",
    "revision": "73a7f5fc081b0916e898f4418526d7e9"
  },
  {
    "url": "assets/js/249.d4896172.js",
    "revision": "317eb50578f9310600d8ff6e9b9266b9"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.1e33e6aa.js",
    "revision": "b8ffa8adbc47ed55715c2144e9ff6c0a"
  },
  {
    "url": "assets/js/251.450b550f.js",
    "revision": "0b6f06de8761a2d01e606adf8542dd45"
  },
  {
    "url": "assets/js/252.b180c7e2.js",
    "revision": "71bee1dcb9289eafb74067f85fce87aa"
  },
  {
    "url": "assets/js/253.da05204f.js",
    "revision": "cb0cdef611c9bada597c8592a5084898"
  },
  {
    "url": "assets/js/254.ad235921.js",
    "revision": "323ca3eba65fc6c21568291faa4df7bb"
  },
  {
    "url": "assets/js/255.01c9c7c3.js",
    "revision": "d216169a1c063928084f3eca39978df8"
  },
  {
    "url": "assets/js/256.40d8ef5a.js",
    "revision": "f982ffab9a7c112b68789b53fd1ab2a2"
  },
  {
    "url": "assets/js/257.01337fd1.js",
    "revision": "9cd286d643b74e17d83c878254e06b3b"
  },
  {
    "url": "assets/js/258.5725c8a1.js",
    "revision": "f57250fe8997270ddf8801bf08e1bd57"
  },
  {
    "url": "assets/js/259.aefd0dec.js",
    "revision": "439f4b87f94329eb913a0388a43a24db"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.18b8f487.js",
    "revision": "135a9ddf00d16933c320f4d001bc014e"
  },
  {
    "url": "assets/js/261.b660b52b.js",
    "revision": "faf114166abeba53039e59766f659759"
  },
  {
    "url": "assets/js/262.34afa6a7.js",
    "revision": "aff1f61a22584e15e57cacb87885979d"
  },
  {
    "url": "assets/js/263.435a4902.js",
    "revision": "2dd68b4fb3457d708601f906b4cc79b6"
  },
  {
    "url": "assets/js/264.cc2f0862.js",
    "revision": "5c2096f40e0dcd6c028b77c48d68878b"
  },
  {
    "url": "assets/js/265.425b02fa.js",
    "revision": "688eeaaa2caddcc509ea5393b923c214"
  },
  {
    "url": "assets/js/266.d31d1abb.js",
    "revision": "34d67847ec481fccf88941e43f4c0a4d"
  },
  {
    "url": "assets/js/267.b8268631.js",
    "revision": "c98592a97f5880337f0655f248e80fbd"
  },
  {
    "url": "assets/js/268.b13d33d9.js",
    "revision": "1a71aa9da4452c31d70c97e7cbdb4cf1"
  },
  {
    "url": "assets/js/269.fea0c05a.js",
    "revision": "12ca2957957a18ea4eb28ae5846ef150"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.143f5b97.js",
    "revision": "c554cb7bbea9c81ffe7b1032a1b61eb5"
  },
  {
    "url": "assets/js/271.380ec915.js",
    "revision": "60dfdfc4f6fb033e91c9ceaf485f7729"
  },
  {
    "url": "assets/js/272.89d1f8ef.js",
    "revision": "07934a13bbaf19bd6b7389d4768ec4c9"
  },
  {
    "url": "assets/js/273.551ee9a4.js",
    "revision": "a99acea4682788f7f3ffb75ef969feb6"
  },
  {
    "url": "assets/js/274.69badc68.js",
    "revision": "ccbe880690a196272263f4cf2d67ae49"
  },
  {
    "url": "assets/js/275.89d2eadf.js",
    "revision": "a2603010fa8599f82201e567319a358c"
  },
  {
    "url": "assets/js/276.3003e6ca.js",
    "revision": "b93f9fae7f23158697918e4daf89b248"
  },
  {
    "url": "assets/js/277.38a3be36.js",
    "revision": "be21bf95bc8225160fad00700c16d937"
  },
  {
    "url": "assets/js/278.1ff87c1e.js",
    "revision": "f99abac2c1e4a57310dc88576d19a211"
  },
  {
    "url": "assets/js/279.1a51a60f.js",
    "revision": "98c428efe5cc132f507e0756243d41f2"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.43d9b703.js",
    "revision": "2ed3c591aa65edd5e9aae0e403eafbb2"
  },
  {
    "url": "assets/js/281.ae56d0e2.js",
    "revision": "13d7684af402dcc9f21a2b9c720a626b"
  },
  {
    "url": "assets/js/282.e8a233ba.js",
    "revision": "9e71a6bcea0bd2c467724b47f359e644"
  },
  {
    "url": "assets/js/283.455bc008.js",
    "revision": "181019fa557baf2e3916ea3998797a8c"
  },
  {
    "url": "assets/js/284.be652624.js",
    "revision": "25b2f7a78a743c97a5e8a85e54fe7ffc"
  },
  {
    "url": "assets/js/285.fb0ad496.js",
    "revision": "3841f8e01b074a4db3fb705ea5699076"
  },
  {
    "url": "assets/js/286.b290055b.js",
    "revision": "9c3599691222688b0c3f4ba29f5c1752"
  },
  {
    "url": "assets/js/287.9ab696e6.js",
    "revision": "22418653a907403698a4f0f6271acf20"
  },
  {
    "url": "assets/js/288.e01ec192.js",
    "revision": "13bd0833bef92daa918cd0ce378a15b2"
  },
  {
    "url": "assets/js/289.9b05bf28.js",
    "revision": "7dd6a42d1b298c5f2d2699e0c08d724e"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.8881b87b.js",
    "revision": "fc4e87c94069d9e7d687fd111bca672a"
  },
  {
    "url": "assets/js/291.19ae4769.js",
    "revision": "3eda079046f652b8f13edd34ac7682b7"
  },
  {
    "url": "assets/js/292.78ae5425.js",
    "revision": "20bf65adc330db9cddc0fe3c22a5294a"
  },
  {
    "url": "assets/js/293.42481447.js",
    "revision": "d12c1a7498d5f46f380f5ea370b1c8d5"
  },
  {
    "url": "assets/js/294.fb3036cd.js",
    "revision": "9a44e5e0eea088cab2fa033f665447fc"
  },
  {
    "url": "assets/js/295.e5fc8fe6.js",
    "revision": "bc92bfebe01bc163253cc93c4c3e9297"
  },
  {
    "url": "assets/js/296.8a63fea9.js",
    "revision": "2f6a2ccf7f96f936b1cc8dd6ec83c3bc"
  },
  {
    "url": "assets/js/297.3c763140.js",
    "revision": "cd83f2afaf0c51712314f8d03750c7af"
  },
  {
    "url": "assets/js/298.661520c5.js",
    "revision": "fe75ff00ad150f7fdd6bc532591800a7"
  },
  {
    "url": "assets/js/299.4253059f.js",
    "revision": "12a43d9d481992b05b106364d815e313"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.df6042e3.js",
    "revision": "3ab0c9654ca220afad2033aa56aa47ab"
  },
  {
    "url": "assets/js/301.44361d1e.js",
    "revision": "7ae123012d7d3201338e78e63fc6f271"
  },
  {
    "url": "assets/js/302.8cc2cdd7.js",
    "revision": "954c5fcfe5cada9fdd0633e2b2b3c177"
  },
  {
    "url": "assets/js/303.4ae9488e.js",
    "revision": "694bef0d9aa6bc0dd0270a20480ab7a1"
  },
  {
    "url": "assets/js/304.6dfc1eb9.js",
    "revision": "3ad1a667594a2779c3b94b77781be325"
  },
  {
    "url": "assets/js/305.3ce7b646.js",
    "revision": "1a9fa5fe2e0cedfb8a68ee1a84a9b98a"
  },
  {
    "url": "assets/js/306.8df566ab.js",
    "revision": "c7f860fcee687e31c81f7f5afda4a547"
  },
  {
    "url": "assets/js/307.03ee2a9b.js",
    "revision": "83b723bd3d147f3576b39aa330b02ee2"
  },
  {
    "url": "assets/js/308.e27ef199.js",
    "revision": "0e4bcf8c833c204462c7b34cfed959a2"
  },
  {
    "url": "assets/js/309.8bbf39a3.js",
    "revision": "c0dff4347bf1864fc2928f32b322f7ae"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.7f1e6076.js",
    "revision": "9d7aa82a81a4b390b2c70a3473b30803"
  },
  {
    "url": "assets/js/311.c7d6c678.js",
    "revision": "c334cf6328cf77655bcd71ef6917a2af"
  },
  {
    "url": "assets/js/312.a3c20f98.js",
    "revision": "914528de4690287e925f75873ed10721"
  },
  {
    "url": "assets/js/313.fcc734cb.js",
    "revision": "31394242f7f8221d61ba2e10baf438bb"
  },
  {
    "url": "assets/js/314.0ff409b8.js",
    "revision": "43406593e36cac9bcfa010ae80c4e65f"
  },
  {
    "url": "assets/js/315.fdab3f51.js",
    "revision": "a2b1e30a47874b8e03171d835c2c1876"
  },
  {
    "url": "assets/js/316.92db81d7.js",
    "revision": "ff9475332e6434b37a96809d400fcb9d"
  },
  {
    "url": "assets/js/317.91fe7a9b.js",
    "revision": "103ff4ac531eec125cc22a136163af00"
  },
  {
    "url": "assets/js/318.0748d096.js",
    "revision": "0f1b16afd1ee5071ec3518326de7c40f"
  },
  {
    "url": "assets/js/319.57878758.js",
    "revision": "f12b1f882d5c4fa1794fd4ef5ef2128b"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.98da8913.js",
    "revision": "ac11005196b5b9d648f25fcd151cb3e4"
  },
  {
    "url": "assets/js/321.3dbde526.js",
    "revision": "888e698a37e83d6598848a1368411f02"
  },
  {
    "url": "assets/js/322.6c65e1d9.js",
    "revision": "0ebea66dfd69b7b24b27d4bdca5acd35"
  },
  {
    "url": "assets/js/323.27014bd9.js",
    "revision": "187e5b073b78c0c7c16f37f9b7d8c04e"
  },
  {
    "url": "assets/js/324.bba03c35.js",
    "revision": "87343a7026e1c79c0b471e3354595230"
  },
  {
    "url": "assets/js/325.c4f6c6cc.js",
    "revision": "5fc0bb019d231778b32c2d5ecffdcbfc"
  },
  {
    "url": "assets/js/326.f7b4b6c3.js",
    "revision": "87b1a3ea484b3d36cd9506307b9c8895"
  },
  {
    "url": "assets/js/327.077fa1b9.js",
    "revision": "d0ed1c4ad4ff2cf3b157851d7b94b420"
  },
  {
    "url": "assets/js/328.3d075374.js",
    "revision": "da6d7cb3842ea11bc9e697950c17c0b4"
  },
  {
    "url": "assets/js/329.8a614a55.js",
    "revision": "d8c7faba9f359002951c899580baa3ce"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.5985f2bb.js",
    "revision": "f0df33b16926f81278590d417631f679"
  },
  {
    "url": "assets/js/331.db1017fd.js",
    "revision": "4f8d91c145c1f6fdc202dc51c084cd8a"
  },
  {
    "url": "assets/js/332.37fb7e98.js",
    "revision": "6f3ea8a91ac2ad6c4db76d7d5e0aa671"
  },
  {
    "url": "assets/js/333.e1e047b9.js",
    "revision": "8a9a48afaa582eae40e560b8908c53dd"
  },
  {
    "url": "assets/js/334.da0d7ac5.js",
    "revision": "a6ca71d756f66e2e62e7fb9e927e6094"
  },
  {
    "url": "assets/js/335.3c4edb25.js",
    "revision": "75cb313f0468de31ff2a5966789786c6"
  },
  {
    "url": "assets/js/336.e50c6107.js",
    "revision": "f81259681408e069b13b5747dd002f91"
  },
  {
    "url": "assets/js/337.7f1d164e.js",
    "revision": "76889a06a6897693e963cb110c651f4f"
  },
  {
    "url": "assets/js/338.28a36fc7.js",
    "revision": "e403d291e5698e588d57c14b89eb8084"
  },
  {
    "url": "assets/js/339.d1738dc8.js",
    "revision": "95dd957d9bc8465cebc3045938229d28"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.8b9c8801.js",
    "revision": "21cfbef6f297845fd68b1921c5d96a74"
  },
  {
    "url": "assets/js/341.3ffa4c93.js",
    "revision": "5cf8fb95d7afd2f9a5da5f2ebbaa6e6d"
  },
  {
    "url": "assets/js/342.6dfb4169.js",
    "revision": "bde14c42eb6c9a5e4e9e4186f230d85b"
  },
  {
    "url": "assets/js/343.e64050a5.js",
    "revision": "1ea188ce9caa77dffed4177e7e39471d"
  },
  {
    "url": "assets/js/344.2c47e199.js",
    "revision": "804a496c1ec5e30230fecf6c2cf6262a"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d8604f80.js",
    "revision": "31ca916fa01b1b4c86f0a7f1e848325f"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.7d6162bc.js",
    "revision": "2f3d0f35b68e5022e9c74c0e45c5ca19"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.2e96c386.js",
    "revision": "e279e456eff37634a528b23eaa1b9158"
  },
  {
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
  },
  {
    "url": "assets/js/45.95f84d14.js",
    "revision": "405aef500e1d3796013ae7b087869227"
  },
  {
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.fc0717f1.js",
    "revision": "82fb958c414b1f8dcad72a4ab5dedcee"
  },
  {
    "url": "assets/js/48.44d0411f.js",
    "revision": "7cff24e17a3c00dfa33db4562a5cf2e3"
  },
  {
    "url": "assets/js/49.7acf0eb1.js",
    "revision": "9ebf2ea0f5586f1e8af080fb271a886f"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.700e84d8.js",
    "revision": "9bd018bab0f809df58c70b08e9e5602c"
  },
  {
    "url": "assets/js/51.4aca88f4.js",
    "revision": "c0852cda5add6286ee1a5501f920d9e7"
  },
  {
    "url": "assets/js/52.b614984f.js",
    "revision": "4971b998f94d9a08424d40f044e3a920"
  },
  {
    "url": "assets/js/53.a7326fea.js",
    "revision": "8f482dcfc8d3562cb95f221d47616c2b"
  },
  {
    "url": "assets/js/54.132dbd14.js",
    "revision": "c9c33058cc768551b8c892b7a4b7a8ae"
  },
  {
    "url": "assets/js/55.1de3bf60.js",
    "revision": "a0b2ba385d9913d95c5b48f079d3639a"
  },
  {
    "url": "assets/js/56.c1c80725.js",
    "revision": "5402f49ea41cd1af43b0c8e6ae7a5f84"
  },
  {
    "url": "assets/js/57.9c9b089d.js",
    "revision": "59e4243ff7354124a819b6817d9ab8ae"
  },
  {
    "url": "assets/js/58.904eff84.js",
    "revision": "6dd77eefd76fb4108367ea5645a44bf5"
  },
  {
    "url": "assets/js/59.7f2c6fa4.js",
    "revision": "83948a8f0713421d0deebeac846ea292"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.2848b967.js",
    "revision": "3b7f5018266b716f1be89ecd01718895"
  },
  {
    "url": "assets/js/61.b9e9aee0.js",
    "revision": "f66d08b0c7bfb4a0868c6d8ce8b4ed68"
  },
  {
    "url": "assets/js/62.e204a376.js",
    "revision": "26c3cd2b1ac8199319aab6a6b7112e50"
  },
  {
    "url": "assets/js/63.710b313e.js",
    "revision": "b7c63b2965b1f83f74d43cba0814458d"
  },
  {
    "url": "assets/js/64.0f65cea4.js",
    "revision": "0a77b431ef5e51159a40b38c0aafac03"
  },
  {
    "url": "assets/js/65.fa90ccae.js",
    "revision": "b18f809b8527b5926041ae6f45c11f95"
  },
  {
    "url": "assets/js/66.1e61a138.js",
    "revision": "af685eeafb3a9fe6fee6187140ee4587"
  },
  {
    "url": "assets/js/67.8f335cc9.js",
    "revision": "ec796a5b1d82d5accefcf785c75f723d"
  },
  {
    "url": "assets/js/68.6d881bb2.js",
    "revision": "9c39a21976630c036f11f62fdd41096a"
  },
  {
    "url": "assets/js/69.3161daf9.js",
    "revision": "aad1ae8312f500036c920dd1448d2736"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.c1a8c973.js",
    "revision": "e274e523700beeb28a4a4af4b4d23428"
  },
  {
    "url": "assets/js/71.b1a2004e.js",
    "revision": "a81f107614e07a525edf1a38ca5a8451"
  },
  {
    "url": "assets/js/72.06caec34.js",
    "revision": "50fad00200d5b982bf1f0b8bbfe4afee"
  },
  {
    "url": "assets/js/73.0a8fab9b.js",
    "revision": "d36e68b46828cfd17e47f2e1c3413798"
  },
  {
    "url": "assets/js/74.4328d99b.js",
    "revision": "9ca92807fe36201566c43490d8904ecf"
  },
  {
    "url": "assets/js/75.12da5957.js",
    "revision": "c1f98047b3c9a4254dc4aeb27c81b585"
  },
  {
    "url": "assets/js/76.e479bcc7.js",
    "revision": "cfc0e5b701f44bc29adad6be8bf6f556"
  },
  {
    "url": "assets/js/77.a3328eda.js",
    "revision": "1a0696f073a4b6a9523b38aef69f72e9"
  },
  {
    "url": "assets/js/78.5cf1c207.js",
    "revision": "74e36c5c592d92b8c398b0c7268510db"
  },
  {
    "url": "assets/js/79.ddc48247.js",
    "revision": "f54aec4261368471261ab53a0a3e733c"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.e0e3e65e.js",
    "revision": "603fb3d86cacc61fe82f16cb50b8b7b3"
  },
  {
    "url": "assets/js/81.e638bc6f.js",
    "revision": "2ada032ec096912e2b33f490f3636c1b"
  },
  {
    "url": "assets/js/82.1052902e.js",
    "revision": "2ba0d6c01ce2823d826bebc5dbe86b74"
  },
  {
    "url": "assets/js/83.3eed4b21.js",
    "revision": "3f4006bdaee85928fa0ff2aa08c50a9f"
  },
  {
    "url": "assets/js/84.48dbbd04.js",
    "revision": "cee6a936dc6469099dd506bdfa21454b"
  },
  {
    "url": "assets/js/85.b32ac70a.js",
    "revision": "c8d9c3a949ecbbc02afa11dc9ee3ed02"
  },
  {
    "url": "assets/js/86.9900f5d4.js",
    "revision": "858d755131688240f23a64ba26c44c9c"
  },
  {
    "url": "assets/js/87.7f73b335.js",
    "revision": "6bc21c1b58af4224577f9b13f958002c"
  },
  {
    "url": "assets/js/88.0cb4b24d.js",
    "revision": "7b39355ae8e4b8c355879f87fb7eb488"
  },
  {
    "url": "assets/js/89.1c290a17.js",
    "revision": "93d849919483bcecbf6dc8aa8e924cdf"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.393e3a69.js",
    "revision": "2eb5de3b01dc1100f6a01c67083f69d9"
  },
  {
    "url": "assets/js/91.4eb8b6a1.js",
    "revision": "4a39bcd1d11293897fba73a81b0b6c94"
  },
  {
    "url": "assets/js/92.003ae620.js",
    "revision": "31eab006d6234e0fc779c0c9c2d4357e"
  },
  {
    "url": "assets/js/93.0f9d7a79.js",
    "revision": "134d06dc70f01e20c849d43de4945bff"
  },
  {
    "url": "assets/js/94.5f51211d.js",
    "revision": "ece1e0f6f5fd7d2f33bbfaa228dee5f2"
  },
  {
    "url": "assets/js/95.b88fceb5.js",
    "revision": "8f3fdd267a4579feb0308c58360aa06b"
  },
  {
    "url": "assets/js/96.4f3f6d8a.js",
    "revision": "af72e2298c687c4b9ff289ae8814939c"
  },
  {
    "url": "assets/js/97.40c691d4.js",
    "revision": "a027f6a41a75c12d02100e42d7e084ad"
  },
  {
    "url": "assets/js/98.f622c7cb.js",
    "revision": "805ee88707c3329c3f249b68257245d9"
  },
  {
    "url": "assets/js/99.905b6ad6.js",
    "revision": "f65e087d304634ce46b6cddc78c26175"
  },
  {
    "url": "assets/js/app.60ed6d64.js",
    "revision": "8328f16a9de803ba76fff534e71d92e7"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "basis/index/index.html",
    "revision": "163ceb6edf504246bddff78315413ca5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8167fe51fdad6ff5d3446674b7229503"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "2089fa83a00eb82204cdb73a33dbc504"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "931bc5a479089fc5b4a9eacb2e81c7ec"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "ae9e1404498456cfc3d2be2f53b6e244"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "7bc72e1b4acd1444965b3326e03dd266"
  },
  {
    "url": "c/audio/index.html",
    "revision": "9106bb10c887d0721f63b06cc06a883f"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "c8add7fd8eda4fff33e5b6fba1710ad1"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "6f5b3d5fc805bfef23a60ba266c2d0d1"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "55705f76d5ac211ea8eaad3746c3c83a"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "1315318904e829065640e8aa228e8dd9"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "51861518c7f3ea63fc12b4da035c43fa"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "c00e2e4ad4ca5df789fdf5eee4964b75"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "0c71a77450f7d3b88dfb247376f94ac1"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "f78b6f103a1fe9ed34346ff86d784872"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "94df73bddc9f7e11f35148cbd08e5d14"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "867c7fe960fd116cb81de3832b4ff061"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "c9c649c30ba3152c3e1c153ef095db17"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "cdd284c004a90bfc211a4f33670d3278"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "ee68011a28163384851617f4d37f08c0"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "f8d74d1b51b23aa3b24c9c006a5738f6"
  },
  {
    "url": "c/program/index.html",
    "revision": "e937858ab761c1f4792046e8a7dd19cf"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "257d3b747e3ae49d2e57d807ef61e1bb"
  },
  {
    "url": "categories/index.html",
    "revision": "15b16a1d40bec7642427a0972aa6a859"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "88a48842ee8e5709914dfbde11c9d395"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "09d9b37d3c1a3e1b533193ada946e653"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "f7d5c525222ba29f62a787121c8a93a0"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "b7588882b521ce847dd2887f0128bb5b"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "697bff5f74af41d6f38c34b5497bb04f"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "5e4f1d861a623ede840d819be9132c6a"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "66bf6a5a87d747e612006402d51c7fb4"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "a981aae0445796f6706519b9d1936980"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "d4f10b9afaa23cb07a556b234ff66cb9"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "70f15bbb50c5cc46b342b7fd692e59a3"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "b2da6b6fd29886270bca2d2c484d98bb"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "1e31b01cc984a6726d0fc2e88af8853d"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "43e488bdd5310a4187bfce83a8f3a994"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "a9d6469c5f5a9dcf6045173e611e86fa"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "35f27b3eb65853c5e163c1fd04bb5ecb"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "e40fc72659f9d85864ba572b6c4ad88a"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "5baf403fbcb282104ee7dc7909f1cc57"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "3dd37e29bc2b58d9093acc1b22504d27"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "0293391a10156b835e5fd9256df6f316"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "c07173ec2bbf1971ee3e521266136e5b"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "48e5ededaeb326e078c1783f753e5ad4"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "97764375260f7c46b37fdad264190801"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "1265a6212aa5f78cac45b73d2b590683"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "c8613f58024853d65f459a3af0cd98ed"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "58e641746cc36c690de55c004dab5920"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "433995248bd63446eb448e3f33da92dc"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "f0ef19bd8ac4a6c1d4c9e900a2e58730"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "77041e343079115d3ce5abc74a1cb47e"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "9f341b4759b6827cb3b4b442b7b62045"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "224213c7bc97cecc3496087d9ecb88f4"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "e6b8468e840b608feea905f36f6a94f8"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "11a251f5b2de8f5d92ab324541f17268"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "489a941b65bb7a5aa4568d2397ea9e1e"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "5a9abeb1544c5e193b93e44594f543f1"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b19cdf7df73f5c5407022f0e4e6d9cb3"
  },
  {
    "url": "figma/index.html",
    "revision": "17e849e4b0e801198adab9da990e571f"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "31f90674c3e13f22712647b5a4fd29dc"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "139bed9ad02c5878a67165cdec40f137"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "d48730ce4b6fb5230ce80eb1523329de"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "713259c6d23b605a24a2a6016fc08f71"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "201001349a5da823ad1b9f50f28caeb2"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "dbb0a94632f2d047c5afc1a61befdea1"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "1b187f45ffaf518d1d7644edc74eeccc"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "11cf56d88763cdd5857292f615daaba7"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "3292eb68027b71d13c303d55f4e83830"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "33e6d0bf1f4a2b66b892ad112ece3ce9"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "55a3322c91e8b84d68caeecd6e710577"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "085be5819bfa8bb144721e3535858379"
  },
  {
    "url": "flutter/index.html",
    "revision": "a01aca7c92f799d266b8963b8fd42575"
  },
  {
    "url": "flutter/point.html",
    "revision": "1089741f7d8ea54fd4718665db47d994"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "200e8182d7ffcb3b61b520ef56f75f1c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9aba45233cfddb2004483eed15508801"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "2c6485a6f50717a65c3cecc6c1994a16"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d6549c2d8d9ea0c832c0eb9131ce73cc"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "dfdb675bae4c25139eeb2b958bb9aded"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "423de01d3db7508f13df964bea89b5bf"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e1452fce173b619ad2ce90f6ed1f44ea"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "67495ff14010884b6c40d0b2ff9e98d7"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "9079b7d2d05b6cbc6e40519851d27b11"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "02d2fbc858b465dff4ba99da932c0904"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1f5842b55575819f95180b767f4bf826"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "04bbdbeb46f880e08524acdf51ec0416"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "89c6bde4c7f43e6f4fc6fab8ece55e7e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "35d534aa9cbab0f7a2664c51b5318cc8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "9b933d80a92ee1f76d86794e6f58f003"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "3b6e5f5f5d1f27894d6286ba2fb2b849"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "28217e069f2a2a8efe37982b94900a5c"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c7b7092eea0fe6d97d96706f792b8b0b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "6a765627a69e202a551e319699fdccea"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a1524262fadd7d9ca132baec7134539e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b2f15578a01b1980412b71eca8aaf122"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fb80741b7f29dcc05576e98bfb94908c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "9e51b5dd5e52ee59fec8e8736c4585a9"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "2e44d59fe1ea52f049821eb3c447ea2a"
  },
  {
    "url": "haskell/index.html",
    "revision": "aa100bd57eff45962f51329dc6d5f9ed"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "imgs/xcode_launch_env.png",
    "revision": "c7f8697ae25d7739cb1fa6b3ea10ead0"
  },
  {
    "url": "index.html",
    "revision": "0151774a03d565099f42ed75e46ee297"
  },
  {
    "url": "java/index.html",
    "revision": "ba825601ea4a404e5c80d08ace5db1a0"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "7503f3cb00c99c156a3a2da0564454b6"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "0153358e488afecd30527c65c0723ec8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "06d5fa85a236ebebd01a9d900fb5f3b1"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "429960f46820e42652d97922e20b65a1"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "e811023a5100f891438ec1490187fd1e"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "449e6d16a98c4f7a0dd2c310110b9908"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "d9487e1b11dcb2e3241015f66de995c0"
  },
  {
    "url": "python/index.html",
    "revision": "92d20ce915b38f86a355c9ec75cbbb65"
  },
  {
    "url": "python/poetry.html",
    "revision": "78cf4145277b2fde2c779e98aed68159"
  },
  {
    "url": "python/pyenv.html",
    "revision": "a0b95191ac6ccb55647aca14d056b49e"
  },
  {
    "url": "python/python-ase.html",
    "revision": "65f4dd0e5b8e33364cd3716d6dea3e4a"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "b92c9d793b9ab48f0b903973e9781432"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "978b8a4e655bc6b5c4d49e5bbcae674c"
  },
  {
    "url": "python/python-file.html",
    "revision": "6557a52bde4ac88c8424c31ec2c18b10"
  },
  {
    "url": "python/python-function.html",
    "revision": "6f52616dcee1d1067362700da8be511c"
  },
  {
    "url": "python/python-generator.html",
    "revision": "1aecf6e2feed367316e07ab55c4ab4db"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "46bb76f3d66da9c79200472424e16088"
  },
  {
    "url": "python/python-module.html",
    "revision": "835cd87482e2bbb4dc8c3329e35ec5ed"
  },
  {
    "url": "python/python-string.html",
    "revision": "165cff683522716c387edcd3dd0ccd69"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "08850c3b43746b5d82265c2ef8646db0"
  },
  {
    "url": "read/index.html",
    "revision": "08cd329c51182d56f9fc60e6eb419739"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ce3374e16c06e5278cf63b868ae0df86"
  },
  {
    "url": "swift/better/available.html",
    "revision": "06a3d96250ec7ada5d166125df0bbed4"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "90b626354baef0e00497bd6c76acdc19"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "80fd47053e3899f669016d477771a727"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "081622eeaa74fe1874b206e8166f11d6"
  },
  {
    "url": "swift/better/di.html",
    "revision": "04edded6e0a67a8311455728f4bb7c6e"
  },
  {
    "url": "swift/better/index.html",
    "revision": "d77c97128ea00d6c282d998913aa2b96"
  },
  {
    "url": "swift/better/last.html",
    "revision": "8c86186dcfaeff8bd1168a245108f7a6"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "47051bf135904da3324e0d97f69cc8b2"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e2979e784dd9be3615eb1d7e8ff9767f"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "6afbf52224cb45c9d05f1c27bde4d4a7"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "399342f68b554cea54cb9fa1fcd332c9"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "b68f6433d0c856ef726c3b47251b572a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "391ec19f13d15864756e5738345cf79f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4b6a7d40e7f01f9b2b30b971c6274142"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "7097d21cfcc6ee14fac8e485121ed122"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "d5a48bb4caf93f89ea71ed09fee943cc"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "f382399a4416dce0447958bf74d2dbc3"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "8543083362f586ac32488b7bcdd842a7"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d0c49ac24572b742632287a953101704"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "9fa74a078e6862ea52cb53f5a116b989"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "b2b91847f3f122fcbaeb9312ece9b8e9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "53c4baec18d6edf6e43e95c2a5587c53"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "8634e365c0b73d4cb86286ba3ff5d54f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "bc46ce2ca5bc408d226417c21e801c90"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "34f9008fe5fd30e926bc4b4898758263"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "94d737bdb7d4c785faf63cbecf2435ff"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "fc188c141054e2df01d07577a0257c9c"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "1b4e3cb606f695e361f2f4c70dbf1673"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "03d75928c20c080e52781420f7dff660"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "1d84c37327899562b48a78de95b052d0"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "f33c0898e0b0990687622653e4bf8ba2"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "9921d6d649970e89a746c4fa49d62a7f"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "e5f67fabaa455231c5575f2570c18902"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "e0952798a4904ea10b81f6a95861e1dc"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "af616be3ccc5c8dd046acf9c379a72d7"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "7208538f41fb2bdc81cdfb9493997f59"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "3bd8018d7fada1db8cd6d9c015371275"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "9a064b664d5796d06d925cba66df63b5"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "7f9830e356d242fc63546e702c1b3d5c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "6c855cabf5afb69dc0a388f4470a2de2"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "966a1fad502111c59d035f636a4c1acb"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "aadd1d15b99efcdc8f7884460b14da42"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "833ce50ba08cb3b7165f24dc0490a00e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b7166994738158fbdf9f7c24d13871bd"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "61573affecb7ffbcf6afecefcce7fd38"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "cd44fbcc2a5338626025beaa327323fb"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "e30fef4607dd8c021eff5757a5e80faf"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "963a3ae52eaab8ccf444e0d87483285b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "4b8e8b5ab36bf21a750bbd4e7f9120dd"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "fbde68ffb0be555d90409f2d2d56c473"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a691fc935c7d03dec61d505891d5b804"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "dbd98d5d70d3d1268b19d6fdedfcbfcd"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "64cb7269740ebbe1faefa253ceb079f3"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "5df9519fd8682fadacbfcaf4b07bc64e"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "598f5aff51ff3fc20c3f43713c71bd11"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ad9af41f1af01338268d601e6fe4552b"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "ee8292ab2f0c0b9c69889eacbbffe132"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e3a243a3b1460db48109ac29d8ee4a7e"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "ee795b53a0bde5b931fb877e4ab7e1ea"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "2172c22262e67c5b956bd7a301e49beb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "800d0b89d9941e6b61225d428a4733f7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "e0ad8550e8e7c90fad8df37ccd5d68bb"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "0ea1f515733dc01d1edb66294d867493"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "e9c6a78a77480fb39343ab07396cb95e"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "d2bbe05acf7a22f431f1b482338d4cd4"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "16d62cb7457d105641fe1baed95a6776"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "efa678c57fca43db72143004efee3830"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e096f3125995d480b9f63407b63cf5ee"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "a6849a819a923f0e4d75cb46eaaa4e68"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "4b3d646816a8c4b8b9b4361cc8a99963"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "9fe12ab2078961ac3bd1ced73421e66f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "4fac92181d0dc4a7c41bbfe3ab9e3a6c"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f07ddce9397f461570d7c8ce62cfef9d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "6546fa587e993c9466c350572ac38241"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "09d01d759be71e11b7e85c5e3b8f8d00"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "c36fc23bf48c97256b99de04eb388fcd"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "cc9fd99dc6c7e635500d985260a0e86a"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "58d649148604d5a467d2995c640643bc"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "e2a1f169f2097519525c586ed17225ec"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "4c4fc327843d0f064332ca7ae3f09f17"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b5c0a15d0f37438eb78007553f88018d"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e8845ad620f8a959bae4b6436be27792"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "2340a71a1fd57dd2afab8e94a349a279"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "e2f2a923c185ce316e84a6e33595b87e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "42b50bfc53b67d3a55ac48b8d62c2f2b"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "db406566f4c082c88c3b22e3007df53e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "1a148e9592c577ada896b696d0ee8bdf"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "404277ba29c09cdc8a31374123d232c2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2f1782f4c51d0537dafe76731ee61871"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "68c33b7605b24cf10b146cfda49257e2"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "53bc82effec004d9885124ec0035b5c6"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "421032627a3a7723a91c066ff6e5438d"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "8f998b0326fa48112b53808e9aa99c52"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "67aac0185dad0e49b583229c4af4b97d"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "739507f0ab27eb43e1852ebe148e5cf8"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6af41c158f27b8c3d4b8bb13996ce9f0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "29a385856236ad4c2950bebead795445"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "dcf30c99a9233dc56f0501e3bfe6c8f2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "7c1270c1fd49245b1b50954bd2e97b86"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "652e314909b513a93ea0364652a9b2fe"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "ac26a28ebc17a4aecd5be910bbc22fff"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "428b2c7b7ed66e0eda006f16654a3446"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "8528972544e949856d2c284ffe15986c"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6295686d69a4b8d1089d6cd6e4958a24"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "93aaded32fb408b0f17ec89e97c56d46"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0fa8ba7db7fcfe71e9f813b792ab5d86"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "c02c242258d6dafd61b8592750057353"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7249e9326e117e92157d371303963383"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3bf6c55739c518b06342e30db2017447"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "99b10510d7221656dbd84c38f522f0c6"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "b152f03152ffe5f40c734ca06098e9b7"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "26e1e7fb17b9a2648c1ef0cb630c4948"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "cd601ec4cc763936226507b7c5d967b1"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "eb2daf7ac26cc0174649eba59a9f9c94"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "4a497d41b25be38e39608d7ca20985a8"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d98b68a34085fc358e95c22d7bcb7b55"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "f844265cd1646a59057412b846dd3ed9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "11e6318960cd1a8cdc83ccd1f3cfdc92"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e09aa7e0014796158fa095fdee5f469d"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "1f34f724fd45def855093323d63d1987"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "4eaffd68e02a4b64d5dd1711a8df98d1"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "5c8d121c44ca27a71671b3ac0a200f82"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "2984a446aa84727b35e600a0e2f2f1a6"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "730ff69becb8b0f78b1e935a453c1434"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "87d4a8922b622093eb2fa79ce700ad99"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "b7da3d06508ae46a3e4ce1aa2f8d80df"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "32b8c347c7c62c3cc035f2e143b2020d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d093aa46afea40d6ebdacaa3d1a2039f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "31148500481ad76da5b8ab7658ff0536"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "774e4d017934d5adf2e24d299b41b93c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "eb49968a87d269afae6648e43c5f71b4"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0ad3c96701cf80626448a13b4e6a0827"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d1768f21a0632a1cbcc0affeb656d87f"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f6773308b133a794e52b54d774b9b94b"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "09cd87871ac62f2786ecf97e9c32167d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "0651805882b20c64ce8a07c16460ce8b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "5dc4a0d63eb53fa8eb2413087627ceb6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "8c77fa12748a3256033a0ce8b23544c5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "351bca7bf004798e364f1a6c04bd41c7"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "99bd963fa696c0c4277bcc951828fbf0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f5ea53bbb3eba61c11b88ffd84a4f132"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "b3f9156763efef9fb105092b91cce363"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "3e46c3d8f303b674bdc309d43a07c3c9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a36bfb2156fbe883d458534b1a167c6c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "a5f0e09304c51e74ab8a8d6289759af5"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "245db3f2b10bdb857eb6dd4303faf2d8"
  },
  {
    "url": "tag/django/index.html",
    "revision": "ddf05192f1867d3408bb964ba5740d8e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "62d79cfae8b42c51fc224a5f87033187"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "bb5b43e5a6b9646990b4aa966005f330"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "2357603787f3fe81b8f53e4be52de6ec"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2d6566037cf0bd902a6b9cc7f9526cc8"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "2f45385fe583db4678096f70cca7dec0"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "f5e012b3bd1be93d2aefb342bbdd2aeb"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "97ed2dc42dc9ce9bb7de83a2b47da72e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9a1ca7e510194ede9575c01f3be2bbaa"
  },
  {
    "url": "tag/github/index.html",
    "revision": "fd4deb00fcd03e5ad5e04805c7935f8c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "31887cefc83b00d177fee34a49fb7417"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1558cea25578e1c32df635c0e9b04266"
  },
  {
    "url": "tag/index.html",
    "revision": "f9521d142b8b617a0aa1809fd1754dbd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "17e7dbb6f3d8a56e2d5b9393f3d6e22a"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "1c379bc52ce43f09d51de5c54bed63de"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "db208b7803f607a66bcd93329dde20bf"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "67ca087f847dfd7aa2c9cc3c191963cb"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "5b4760d4fba58b45ed3be92919e48604"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "5e06e0318c2adaa61f3fc65f15ef2880"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f9e4782df2a50df39d2d9dcb0e156711"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "61df751c6b8c3454f20a39653615c356"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "2ef7e11b6c99b41b353e5c3a0991b5ad"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "acdff9d7081a1e637ebe62fb62db024e"
  },
  {
    "url": "tag/java/index.html",
    "revision": "297edee31480ece10f211160355a1e7d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d6d373e609f60f6f4088d4d4db34371d"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "87e44c4dc5e3b1028534ea5e8df07161"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "eafe8e7bc3655dfcc759539a47c5600b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "25dc545d9727da9e64967e1b83fa35d0"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "8715d416bbf2b990d3783d90f4ac6953"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5ceef4d03395a59e99c038119f77d7d2"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "7908fbd8f9a1562d8514335609480a7c"
  },
  {
    "url": "tag/read/index.html",
    "revision": "4b214eb03b8251f24f92f76c6078c03b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "5f360bc77720016eb4d08e302e3e7bc9"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "621ad41b1f4104f404181efe78339af0"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ea25bd5e1bb7a2d59e8e57cba2399ea8"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "fceb9f915495ffb72847f5169f2fc867"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "7fc50a53b74368978d4d61fb8b8330c5"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "5a60542691f84927cffa61427a665455"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1dd6909e1bd2129cd1be8fc96b32a262"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e87cd3766028a4d2eae72ab4936c3be3"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6696b0794137b992005fe25c249f5117"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9af1710683a10218044c16f8837559a9"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "5c2ba96249586028b0063783def0fa48"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "32fc966942c1faec80147335a1118b34"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "5eaeba26c178ff24af44c6bc58248531"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "c170412fcc749b1295894e7e9e63992a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "5300f2daf8d30a58c4ac0ad8ea1b7af0"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "775f292031b1e5b74266de0c66e6237f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "17fdd7127bb8c0b7bf939100753ca3ab"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6fe7ea8bc2cba57c9a278ed0582c0ad2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "6dac4fe5a9f9b21177d12e9b8d78158e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "72b10c2a20d83c712f252a230a548ac8"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "75c284589f9e0fde188efb84b90ba524"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1fe8ce48188c2bdcc4f6ad9e81944997"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1d41af625473fd5e65babadda215b129"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "49397c7508d55c8065d34b3942b6c74b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "bd1a00d87e3b32a44234ca23566a9282"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "111aa66e8603e410d153169ea15a9d1a"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "797f6b99ecb790a7ad018bfbc5d4a0f5"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "d36a982503b220f26b28b799b7644926"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "223276a34a782b408676832481c67956"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "273b2f3096baf9682ea57400e92ce44e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "12f1626f7845a0a514271d5c9a9dc4b5"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "5598799853602d69e14b9479d75bc272"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "b77d76a45af4b14ceed8e498b989f866"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ca447b5526cc0d4fc2f7763e26cec429"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "311a48d8c9a1e0f3ff8edb9b99a4b964"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8d7f7d7a99501b39d69ea355274d62eb"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "2e9b3430b6822e66997643f329f8cde0"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "c77bac3c069add51d4a3aeade09f9e03"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b9cc190bf0b0ee76f548e35b227e9a67"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "571f565e6b8ef8f2bcf274a57f647070"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "480d5b8adb624755bf89bddb536ba2eb"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "5d7a2cc51943a56b797384d32016ae5b"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "742ae9f7e427af491a0dfb2debcf950a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "325a21414b03ecce5460ad87bd173ada"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "68a1c9a8b0c4309f9152e11bd48cd206"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4fd32166ed4b7c2f7d3622eb4be03cdb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "90f9b0dd8ad815de68b84883f8f1d110"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "6b60efb22a7c37e521c8c1854a021a09"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e745c317a9d6dbbda6776d720a717a84"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "2d8bc3f6d7376fc04b4417c43648d32d"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "a5e6f3970f1801516cb70d62428faadd"
  },
  {
    "url": "timeline/index.html",
    "revision": "e58458f68b05b4c272ff83f11dab078e"
  },
  {
    "url": "tools/docsify.html",
    "revision": "15b2ec68f5a70d9c3332f40b301fee06"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "33e912bebe733c97f24ee18a9ff7585e"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "821c522fe1d479d2e59db2ee1be92b5d"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "88c3cfada241ac6274089b5fa54cd4f2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ceff1618a3bf5a33d2ea492665860885"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fca47f08f5c4626f6a4198a16173a8c4"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3de9ef4f26ccf573981c50649f3c25c8"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "0de0eb7d03f7291e67fbe8a2455d7ab6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "32f4794258eb5d077af90b5fc841b51c"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "3ab3c7991695ef9598e2c2928f37fe3a"
  },
  {
    "url": "tools/note/index.html",
    "revision": "7d8838f42c6b93ff47e3be31657d7b79"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "604a950fa9e4adece4946d43395c0aa5"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "dc5fa5e9ba8f025d099c611d9762a78f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "0f279c1a8ba8515b5b454e31c0daa543"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1b47b1877453d555c115fb5c5f783173"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "18d93d70878cf825f8f39fbd043fef59"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "897b7147af9cd3b80151933d1b84ae72"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "0edfcf42e7811fd5be1db13d79158524"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "7c622e252cca7a1ee9dab7772f1bf550"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "81b4771d398b3d35f06db18a3529e490"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "8abe7fd98e7e8cd9acdc99be931e86ea"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "3fe221d8afbf966b2296f42b0c7f26dd"
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
