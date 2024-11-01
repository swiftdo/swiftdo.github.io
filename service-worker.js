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
    "revision": "a9da51472919c04621abd7cc5250bb8e"
  },
  {
    "url": "about/app/index.html",
    "revision": "4fc7a97b2dfa1437c1d67099e464ab3e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "304ec37fd2f2fde59b785aa2a3c7c262"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "79a3ecdbe68f1069fb101e5fd1c8f602"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "15f5677e58e415345b5001f05e816019"
  },
  {
    "url": "about/index/index.html",
    "revision": "b6391dc128bdfd02ebb3b9957113dcc6"
  },
  {
    "url": "ai/index.html",
    "revision": "5d68715c6ef077a2d2399f3d5de20ece"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d80a96c825f289e8683d1f08d4400a95"
  },
  {
    "url": "algorithms/index.html",
    "revision": "7778504e30da703542f20e6a97b7caa1"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "98a685d4b8297b982eb0e180342b9752"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "9c382ca4bd9dd36f79fc086b9460eaee"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "fd056b1b55a6b50d5b61bc4adf5b71f5"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "7f5dda9a730a9665f23a1454dbb953ab"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "11e113bb81f525eae14f02e5edcdf287"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "b765995196ff39fa0e895da28685977a"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "3bc5709d9ef0ad34bb93f0724e25b975"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "1fb1eb4d1b93ecd1d47858c1bd12f776"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "5e3482f23ab892e4935665ba3c149c91"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "4a7d51af73affdad42d3b755c49aadb5"
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
    "url": "assets/js/106.71bc6a7f.js",
    "revision": "9b61c9ccd3ef3e8ae5893b970e5593d4"
  },
  {
    "url": "assets/js/107.7ca9a14d.js",
    "revision": "fb94303ed7ead9e56414029b6de09257"
  },
  {
    "url": "assets/js/108.b415a5e6.js",
    "revision": "d509fee6d98c05de014162fc459e5ebb"
  },
  {
    "url": "assets/js/109.2c1a75de.js",
    "revision": "e4be330fae9c44b9b018f61cab6e8e0a"
  },
  {
    "url": "assets/js/110.6ed8b181.js",
    "revision": "213dc08430f58f4afcc333c10ec7f0d3"
  },
  {
    "url": "assets/js/111.3d3a554f.js",
    "revision": "fd54f249a1e8bf8712e3b40ee29b1c2c"
  },
  {
    "url": "assets/js/112.3678d88f.js",
    "revision": "dd31933d535c955c498c21e5658fcbb2"
  },
  {
    "url": "assets/js/113.bdf21016.js",
    "revision": "55c992a94c9b1196228b577082488e34"
  },
  {
    "url": "assets/js/114.e89141cc.js",
    "revision": "063527e5ce8e48c8543e241cfd75826b"
  },
  {
    "url": "assets/js/115.cc01eb96.js",
    "revision": "4c012831eb8da5ab9b5f388edb68a9ce"
  },
  {
    "url": "assets/js/116.eb2a0256.js",
    "revision": "902fcb91514595d748c869e42d8c858a"
  },
  {
    "url": "assets/js/117.1e2f6874.js",
    "revision": "78b037a72524a1f66c716e6d8ce81659"
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
    "url": "assets/js/122.8b0e237f.js",
    "revision": "903d481373b0f0bad3d3ca8dd4ae99d7"
  },
  {
    "url": "assets/js/123.848521ac.js",
    "revision": "8d59e81fd6d30b81e5bcac8f7c154753"
  },
  {
    "url": "assets/js/124.5f2ae79a.js",
    "revision": "01ee597235ddb43897c008eb54988f80"
  },
  {
    "url": "assets/js/125.0b8ebfd1.js",
    "revision": "caa67f828114c6cb073794e3d6c33ceb"
  },
  {
    "url": "assets/js/126.286c7d55.js",
    "revision": "102535feaefc2c6659e9a9087c2f8166"
  },
  {
    "url": "assets/js/127.d740c9f1.js",
    "revision": "17d14daf10d6b4d1e2ed46d618496614"
  },
  {
    "url": "assets/js/128.5e92f53b.js",
    "revision": "82517a79c7d2e736388a46d8a9a1bb90"
  },
  {
    "url": "assets/js/129.e52b3641.js",
    "revision": "52b193e0bdceb733d79acc8df9abb52e"
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
    "url": "assets/js/135.e1106623.js",
    "revision": "ef5e33dfa02eb84ddf785f20a4cd0666"
  },
  {
    "url": "assets/js/136.6ec34e6b.js",
    "revision": "f23bf06d343a56d3e14ad1957e222850"
  },
  {
    "url": "assets/js/137.074a2fa8.js",
    "revision": "39894f2f5dc4470291764b13164faf09"
  },
  {
    "url": "assets/js/138.35125a43.js",
    "revision": "68e93b63e0c487eef0854abdc6c312c1"
  },
  {
    "url": "assets/js/139.a3c23642.js",
    "revision": "fdb7102b89f9ac70c19c0d0d08e07df3"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.50f70028.js",
    "revision": "de7826e3a175e1844002e0893061b989"
  },
  {
    "url": "assets/js/141.c6351533.js",
    "revision": "195db2418357d833941ccb3edeb67df1"
  },
  {
    "url": "assets/js/142.17b16050.js",
    "revision": "e5db199853b9c4de6e7df122473c4692"
  },
  {
    "url": "assets/js/143.ffcbe888.js",
    "revision": "906104cffd46d77a8a1692e57ad8f4da"
  },
  {
    "url": "assets/js/144.7995442c.js",
    "revision": "ced3cb5a095dfa6be45a853bf8baa613"
  },
  {
    "url": "assets/js/145.28442111.js",
    "revision": "7b0278c12acfa0d77b2aedda79ae4810"
  },
  {
    "url": "assets/js/146.65f869e7.js",
    "revision": "d8604a910f5a67aa6fd9083e8b9cae5d"
  },
  {
    "url": "assets/js/147.6515b84a.js",
    "revision": "145cbcb91baa6104d912927895573d20"
  },
  {
    "url": "assets/js/148.22bf46a4.js",
    "revision": "17cb96b18f6684d60d86a9918394d043"
  },
  {
    "url": "assets/js/149.55c1534b.js",
    "revision": "14705be9c338d0412d68036f99d3e602"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.c53f3ef6.js",
    "revision": "0542b77f92504bd2f8b22dbf653ef141"
  },
  {
    "url": "assets/js/151.18f9a120.js",
    "revision": "802e71f31df1bb7e38f4e310abacf47d"
  },
  {
    "url": "assets/js/152.3d98ab54.js",
    "revision": "49a16d7ea04edddbc7b1062b3a8d46ab"
  },
  {
    "url": "assets/js/153.a04bf01c.js",
    "revision": "f498baa680415eb029f8d7b357e0212c"
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
    "url": "assets/js/157.c083abe1.js",
    "revision": "bed736e511bbbb7ca8222bcf7de4bec0"
  },
  {
    "url": "assets/js/158.2d8d2af6.js",
    "revision": "eac917fe8378d497845d7809ed0f992a"
  },
  {
    "url": "assets/js/159.faf0346d.js",
    "revision": "f56227672be3c751bc456a7509db89b7"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.093e7db3.js",
    "revision": "e999d4d29de8e67e0c5efaa5a63b0325"
  },
  {
    "url": "assets/js/161.11d34bff.js",
    "revision": "694349042dd8748f734e734f02f9a9cc"
  },
  {
    "url": "assets/js/162.a5925743.js",
    "revision": "66493a54a79cd08ec1c8b08bb9799988"
  },
  {
    "url": "assets/js/163.298861a6.js",
    "revision": "b7a67a92c3a33073f8ad32c0fad8b8d6"
  },
  {
    "url": "assets/js/164.752191d6.js",
    "revision": "72b4b41385503e408ec226e6a426ec6e"
  },
  {
    "url": "assets/js/165.33c4bf69.js",
    "revision": "11fd94ae952f06a37f9e888f56ea6fb6"
  },
  {
    "url": "assets/js/166.abd49a52.js",
    "revision": "180aab151bd07c27c1600c1384b10d9d"
  },
  {
    "url": "assets/js/167.18fee816.js",
    "revision": "80c09f6f5d0e74d6eb339e8fc60ddb96"
  },
  {
    "url": "assets/js/168.e2e4d659.js",
    "revision": "74dc63bf62fddb51013cf9869d584491"
  },
  {
    "url": "assets/js/169.531e5e6e.js",
    "revision": "8a34235e9cb02e405d0ec941aa202f74"
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
    "url": "assets/js/171.41c4bda8.js",
    "revision": "80a2071ef28fc474bdafca6d66cd3f2a"
  },
  {
    "url": "assets/js/172.ef02574c.js",
    "revision": "6a65b48b8f518ca6255fd1b0a79f3d81"
  },
  {
    "url": "assets/js/173.c92627c7.js",
    "revision": "38b26de22324258cce0d3878b947c709"
  },
  {
    "url": "assets/js/174.76e809a2.js",
    "revision": "0c8ab159691ebdb1204bde6aac170a10"
  },
  {
    "url": "assets/js/175.60324bea.js",
    "revision": "816b7a181024167952f6a873767274e9"
  },
  {
    "url": "assets/js/176.91eab0b2.js",
    "revision": "215771bf9bed7b5f4970eee2fc9a487a"
  },
  {
    "url": "assets/js/177.9bdc84a9.js",
    "revision": "8e0d1e48032d5282b87f1a4124d3e33b"
  },
  {
    "url": "assets/js/178.ff5dacb9.js",
    "revision": "6a8daf56b50f01a1eda0573e72fffc34"
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
    "url": "assets/js/180.21616cf4.js",
    "revision": "86c1196f6d3910c9c103baba70aa7475"
  },
  {
    "url": "assets/js/181.ff4ae24c.js",
    "revision": "ebf97e50d4a23b5a6c8d091d5f2445f2"
  },
  {
    "url": "assets/js/182.5a800729.js",
    "revision": "629200fb38e7542032ec24dcec000b8c"
  },
  {
    "url": "assets/js/183.e2e66943.js",
    "revision": "2ade1fb0c2790dcde65ff19cad65bf45"
  },
  {
    "url": "assets/js/184.cb6d7511.js",
    "revision": "c7fea3f494cbcd94d455a181d0b41d69"
  },
  {
    "url": "assets/js/185.e6a65e0e.js",
    "revision": "d7a778a1775941054126320532e247f2"
  },
  {
    "url": "assets/js/186.bdb4b844.js",
    "revision": "2a8f839b4e5837415c9e978cfe7ccade"
  },
  {
    "url": "assets/js/187.716994d7.js",
    "revision": "b62fddfbfca8f2a0e3a923354bea814d"
  },
  {
    "url": "assets/js/188.3ff5526a.js",
    "revision": "bcb55e81fcaa57810b6c8871e2fbfcd9"
  },
  {
    "url": "assets/js/189.44f40fd6.js",
    "revision": "f882fde7038985d4b85891ba7d189815"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.5430706b.js",
    "revision": "49889a2f8319ae9861884be2571458fc"
  },
  {
    "url": "assets/js/191.02b0c072.js",
    "revision": "3516189d163c264f95a6a20e17578a29"
  },
  {
    "url": "assets/js/192.992eeacd.js",
    "revision": "2760c7db778a8250d0883fda087881d0"
  },
  {
    "url": "assets/js/193.4565f928.js",
    "revision": "673b916ef4ab8374c9e4a395805f6b38"
  },
  {
    "url": "assets/js/194.a5dbc1d5.js",
    "revision": "1b3e3e9e9142ecbd922d948d2906885b"
  },
  {
    "url": "assets/js/195.f4f2b63f.js",
    "revision": "4989e49c30dd79c0243ed3ef34d718d3"
  },
  {
    "url": "assets/js/196.97fe1c36.js",
    "revision": "79d8cebba92b206c2e7db3c47fc86cc7"
  },
  {
    "url": "assets/js/197.0bb0f20d.js",
    "revision": "e24983b5d1351d6c880a18207ef85fc9"
  },
  {
    "url": "assets/js/198.fecf5192.js",
    "revision": "d629fbed8030a178badb54e718a338e6"
  },
  {
    "url": "assets/js/199.0512a4b4.js",
    "revision": "ae3153b12fa5cd2898862c202b3f0075"
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
    "url": "assets/js/200.ba796cfd.js",
    "revision": "ce1213efef060554b2f883bd5fce762c"
  },
  {
    "url": "assets/js/201.8e160138.js",
    "revision": "8e743e58d903bfd7e947e52b2b9d2587"
  },
  {
    "url": "assets/js/202.fbb84ba4.js",
    "revision": "783a219b99dee18819c9baa5d1d699a2"
  },
  {
    "url": "assets/js/203.c54445ab.js",
    "revision": "171339c2ff6704651cb49749b4218b0d"
  },
  {
    "url": "assets/js/204.68f23619.js",
    "revision": "5bfcd14a08e430e36638fd03811c143b"
  },
  {
    "url": "assets/js/205.99b39e68.js",
    "revision": "c416e7172ca4caf56b708a8a26846544"
  },
  {
    "url": "assets/js/206.09fe3766.js",
    "revision": "cc30ac8e2a3c4e6f638f80c03ed08390"
  },
  {
    "url": "assets/js/207.93bdb29a.js",
    "revision": "9f1197f90179aaca830bc903cbc86f47"
  },
  {
    "url": "assets/js/208.25ac3924.js",
    "revision": "6b7948af7ce16069863a7d0ce2d3c76f"
  },
  {
    "url": "assets/js/209.4d5a92cf.js",
    "revision": "6d1d5d83c5b50fc47a052d0d842793d6"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.f8a92690.js",
    "revision": "0c0c436c98b6ea44681754e89064f963"
  },
  {
    "url": "assets/js/211.0d1f9765.js",
    "revision": "efab28265ee1717625eec72d812d3249"
  },
  {
    "url": "assets/js/212.9550d92b.js",
    "revision": "1fb3c6ede0c866dc65a8ba308a7a9c95"
  },
  {
    "url": "assets/js/213.7ab7ad2f.js",
    "revision": "373ec14e16cb431c125eb5af662a5e7d"
  },
  {
    "url": "assets/js/214.e27a39a5.js",
    "revision": "1ab1004997bdd32d690d280c6b232661"
  },
  {
    "url": "assets/js/215.8c446f32.js",
    "revision": "6a283e22c7ce6ea9138523ecee64ee27"
  },
  {
    "url": "assets/js/216.f4a55c23.js",
    "revision": "3264de06ceca6fb0f9b65eaf746c549e"
  },
  {
    "url": "assets/js/217.751e519d.js",
    "revision": "dafefa0248abeb98f7da786a4a019057"
  },
  {
    "url": "assets/js/218.c0046453.js",
    "revision": "2e7aa12f31973261bbf0b954aec50f43"
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
    "url": "assets/js/220.d97e48f1.js",
    "revision": "2d6e33c3b3624b5615a12581a3002a26"
  },
  {
    "url": "assets/js/221.3305b5fd.js",
    "revision": "f0588f871c2604b1406e904181582740"
  },
  {
    "url": "assets/js/222.2bbf5e67.js",
    "revision": "0b871343af1967b5a02f552c69e9d4aa"
  },
  {
    "url": "assets/js/223.224193f4.js",
    "revision": "e0418009885f7fcf856182e66a7eb2a1"
  },
  {
    "url": "assets/js/224.c957f20d.js",
    "revision": "1b7ffa87eb3a449d3fe302e1efcb55e5"
  },
  {
    "url": "assets/js/225.f01e736d.js",
    "revision": "604e8e25cb5a75e79edba5df964e25c1"
  },
  {
    "url": "assets/js/226.ba7a4f42.js",
    "revision": "b2b4b3cfb0af33a1cb7aebb47116633b"
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
    "url": "assets/js/230.d72a45aa.js",
    "revision": "f1685cbd584db9835e4ca2e94d4c8ad9"
  },
  {
    "url": "assets/js/231.09d32a23.js",
    "revision": "f0e1c7dc471445ef56d6a4f2fae8b0e6"
  },
  {
    "url": "assets/js/232.ab4fe45c.js",
    "revision": "dbc30babf9d69916702cc1f0df4dc105"
  },
  {
    "url": "assets/js/233.3c3e0e14.js",
    "revision": "b0c29e9b19ddb8acd1c067b3cbd27535"
  },
  {
    "url": "assets/js/234.7635470d.js",
    "revision": "9bc280deb1631e8832e8f2c76f9636a7"
  },
  {
    "url": "assets/js/235.ec819f0f.js",
    "revision": "ae607a0b6dcbd2c94d6e9245f549c0e4"
  },
  {
    "url": "assets/js/236.a7df9fca.js",
    "revision": "7ebf4197630c4f4b95e73a4e9d2bdc58"
  },
  {
    "url": "assets/js/237.2e94e88f.js",
    "revision": "945a88429e6c3b20dffce9143c080369"
  },
  {
    "url": "assets/js/238.89c8cf6d.js",
    "revision": "2b0104e56192524bc5e5e15070a28f9a"
  },
  {
    "url": "assets/js/239.57fb5eec.js",
    "revision": "7a22afbe883e15617a0854c6ab809afd"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.28437120.js",
    "revision": "52ca6110ee0d64bdb5f2e3011c630bcc"
  },
  {
    "url": "assets/js/241.1c878d67.js",
    "revision": "e81a92c1327399761da1846f69283324"
  },
  {
    "url": "assets/js/242.d82f31c2.js",
    "revision": "cb13f36f4bb79b4215523834d7a60ad9"
  },
  {
    "url": "assets/js/243.495ccacd.js",
    "revision": "175e303eb4f3198403ae989b244460b9"
  },
  {
    "url": "assets/js/244.a8337f21.js",
    "revision": "2d6cf2411641c01baabebfcb8cd0e39c"
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
    "url": "assets/js/248.e7087c1b.js",
    "revision": "be862bac0aa21a3788d9a42b84f0b2f3"
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
    "url": "assets/js/250.d7bfb63b.js",
    "revision": "eb8564ec325575099970c96ba485927e"
  },
  {
    "url": "assets/js/251.d51e46d7.js",
    "revision": "f16711cdf08cf52d4e7af55c8a1545c6"
  },
  {
    "url": "assets/js/252.bbe8a506.js",
    "revision": "10bc495e8fa33907500f197c4ac9f530"
  },
  {
    "url": "assets/js/253.6441d368.js",
    "revision": "284967ef9c172b3a730316d6c7f59882"
  },
  {
    "url": "assets/js/254.ad235921.js",
    "revision": "323ca3eba65fc6c21568291faa4df7bb"
  },
  {
    "url": "assets/js/255.72444c47.js",
    "revision": "05059c10a4d90f12578e1bca4659d57a"
  },
  {
    "url": "assets/js/256.40d8ef5a.js",
    "revision": "f982ffab9a7c112b68789b53fd1ab2a2"
  },
  {
    "url": "assets/js/257.378e8f17.js",
    "revision": "daf19c9ac138bddd65c857c284b100fa"
  },
  {
    "url": "assets/js/258.7f0ad294.js",
    "revision": "29fc63f49540c7444c6c6bb8b59bd068"
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
    "url": "assets/js/260.8c6abbf1.js",
    "revision": "9f078a50dc8408ceda77768a9114dedf"
  },
  {
    "url": "assets/js/261.b660b52b.js",
    "revision": "faf114166abeba53039e59766f659759"
  },
  {
    "url": "assets/js/262.a6baa685.js",
    "revision": "1fa0c37479d3cba4548242babe43c12f"
  },
  {
    "url": "assets/js/263.cdf3b808.js",
    "revision": "908d4865122eb33e3130c0ec30398268"
  },
  {
    "url": "assets/js/264.5f94143d.js",
    "revision": "f9ee855a3ac67afd3317f557406d4b0c"
  },
  {
    "url": "assets/js/265.425b02fa.js",
    "revision": "688eeaaa2caddcc509ea5393b923c214"
  },
  {
    "url": "assets/js/266.31cb0e76.js",
    "revision": "3a3615aa7efae7f11ef32cb2f5b33174"
  },
  {
    "url": "assets/js/267.d0c720b6.js",
    "revision": "16152c3aa028a8504a90d3ca29bb4006"
  },
  {
    "url": "assets/js/268.326211b9.js",
    "revision": "a93e5e03bffc961428a423ae04fc61ba"
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
    "url": "assets/js/270.0be61e51.js",
    "revision": "627b81ce2e0d75d43092af3aae6bcd17"
  },
  {
    "url": "assets/js/271.62ca751f.js",
    "revision": "3d94eb2843e0a13b045103e3a72a0f85"
  },
  {
    "url": "assets/js/272.966f581b.js",
    "revision": "ddb1ccfd4ebab1d408cd59cb497e3616"
  },
  {
    "url": "assets/js/273.8da56735.js",
    "revision": "3795ada10bcf79c7d89a4a612ffcd210"
  },
  {
    "url": "assets/js/274.62b73150.js",
    "revision": "fb7ed5d3d5e41522bae8e393ad157f82"
  },
  {
    "url": "assets/js/275.f230820d.js",
    "revision": "5fccba19a3645421501e418b4751f683"
  },
  {
    "url": "assets/js/276.3003e6ca.js",
    "revision": "b93f9fae7f23158697918e4daf89b248"
  },
  {
    "url": "assets/js/277.dddc6011.js",
    "revision": "2b18418d0afcd51278bd3f432a7f2bed"
  },
  {
    "url": "assets/js/278.e4c68cc6.js",
    "revision": "2deb5f5545a1a5585194fa4098f9b01d"
  },
  {
    "url": "assets/js/279.16d74923.js",
    "revision": "212c489a359de5872f22411f910315b8"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.d90043bf.js",
    "revision": "d2e5cbdace25b9792ed35f737153f71d"
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
    "url": "assets/js/284.33762bc2.js",
    "revision": "399cbc9e74625240e7741d49e79a9d0f"
  },
  {
    "url": "assets/js/285.26914cde.js",
    "revision": "68372a89ac9cc89c1b87c679c3818c0c"
  },
  {
    "url": "assets/js/286.685de661.js",
    "revision": "a5bbfde737162f9511f6755c0909ff82"
  },
  {
    "url": "assets/js/287.378e7519.js",
    "revision": "39f2997c3585d6d3b78fe4cd8eb8d063"
  },
  {
    "url": "assets/js/288.2a3d0f5c.js",
    "revision": "39bc4e6383330d83035614d2a252517b"
  },
  {
    "url": "assets/js/289.a351e623.js",
    "revision": "c312ed754a2d75641563f01c03fa6f26"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.171bf55e.js",
    "revision": "8279a3625a0bb1d23dccdb29b230638d"
  },
  {
    "url": "assets/js/291.7dffc1d7.js",
    "revision": "329b23dccf653c24933c9b9e8af54a1b"
  },
  {
    "url": "assets/js/292.216e0fd2.js",
    "revision": "afc177287d239bde1d042dada8eaab20"
  },
  {
    "url": "assets/js/293.1a631f2d.js",
    "revision": "f2e572b6301fdc9f770ddb50bfd641cd"
  },
  {
    "url": "assets/js/294.0c5153cf.js",
    "revision": "f18ad004b99392142437f4ac3ab28bfa"
  },
  {
    "url": "assets/js/295.e5fc8fe6.js",
    "revision": "bc92bfebe01bc163253cc93c4c3e9297"
  },
  {
    "url": "assets/js/296.86441799.js",
    "revision": "648f252371af26bd20ef9ac4402571bf"
  },
  {
    "url": "assets/js/297.ee9d6a50.js",
    "revision": "81ac02c058daad49bdb7d5f0b992918a"
  },
  {
    "url": "assets/js/298.c970ba75.js",
    "revision": "5dd76ee8f770b5cc8c49582ff3874e07"
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
    "url": "assets/js/300.f792c348.js",
    "revision": "17f6eb50730748844b46e90eb2b6df34"
  },
  {
    "url": "assets/js/301.44361d1e.js",
    "revision": "7ae123012d7d3201338e78e63fc6f271"
  },
  {
    "url": "assets/js/302.88db4c6f.js",
    "revision": "2f536cca8d727ff8e88e00f3d71f845a"
  },
  {
    "url": "assets/js/303.f6516bfa.js",
    "revision": "78f5f083cdb4e93d2ea9af3ebd442fc1"
  },
  {
    "url": "assets/js/304.0eeee9c7.js",
    "revision": "dad8abf9bc02c6f30615288425631c4a"
  },
  {
    "url": "assets/js/305.0491af2f.js",
    "revision": "703fdb41cb4f7be767c2f04d9c51c4f8"
  },
  {
    "url": "assets/js/306.d5c1ee00.js",
    "revision": "85d3d998b21a770843ff6e214815dd01"
  },
  {
    "url": "assets/js/307.5487120a.js",
    "revision": "691740825111b70ba941074679cbba4c"
  },
  {
    "url": "assets/js/308.7a6191fc.js",
    "revision": "c47f0bad24e3a5173c000afb990cbe66"
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
    "url": "assets/js/310.75731fe1.js",
    "revision": "f24f02725ba370e9774a1b5c9e0ff09e"
  },
  {
    "url": "assets/js/311.c7d6c678.js",
    "revision": "c334cf6328cf77655bcd71ef6917a2af"
  },
  {
    "url": "assets/js/312.091a7e37.js",
    "revision": "269bbef1fd93279b09c5cab1e073ef7e"
  },
  {
    "url": "assets/js/313.f87cf1b0.js",
    "revision": "82134052f4ffdbae1be1134a7cd58b26"
  },
  {
    "url": "assets/js/314.20e98bb6.js",
    "revision": "495d2cce48a5509341689752ee29a09e"
  },
  {
    "url": "assets/js/315.c4ce044d.js",
    "revision": "a4ef754856c4d211f631ac41298d0d19"
  },
  {
    "url": "assets/js/316.02e2836b.js",
    "revision": "70a9938cc164030e88a275b0073c29d5"
  },
  {
    "url": "assets/js/317.91fe7a9b.js",
    "revision": "103ff4ac531eec125cc22a136163af00"
  },
  {
    "url": "assets/js/318.8bce6bb5.js",
    "revision": "d04e5a6c1edb62d05c11507fa5815ea5"
  },
  {
    "url": "assets/js/319.3d0dca7b.js",
    "revision": "9f2e8d0c6b268bda0dbb679a77c19f70"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.9ac0686b.js",
    "revision": "61795f0154ea7018f5c3535f3c6cd801"
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
    "url": "assets/js/324.76ed779d.js",
    "revision": "4447bcfc92711fc5d74882549da0083f"
  },
  {
    "url": "assets/js/325.4695a336.js",
    "revision": "0ab03baba75c27579df969956dc6398c"
  },
  {
    "url": "assets/js/326.34616bfb.js",
    "revision": "d05a3822e33da59a8a965af1559bf854"
  },
  {
    "url": "assets/js/327.ed63c40d.js",
    "revision": "e49625eace1d03be6ff7cedf28b4deb0"
  },
  {
    "url": "assets/js/328.cd3aebe7.js",
    "revision": "580b4414548eba6c83eedece5f36cf2e"
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
    "url": "assets/js/330.08e8046c.js",
    "revision": "4b0ed0b148c9cff29f0bf9167b9b699b"
  },
  {
    "url": "assets/js/331.fe1a1ffa.js",
    "revision": "d7673d700ffb5ab3714cbe56f0ddb3c1"
  },
  {
    "url": "assets/js/332.eed8b451.js",
    "revision": "a4b35918dc4585298f62aa50216e0f23"
  },
  {
    "url": "assets/js/333.49d2d942.js",
    "revision": "c3d79ae441d8af4029298d44518f86f7"
  },
  {
    "url": "assets/js/334.cc8dbe9b.js",
    "revision": "c535fe28b826ff9887569afa00a142c5"
  },
  {
    "url": "assets/js/335.c701df01.js",
    "revision": "f2c02375077d4ea5634c146c383a479e"
  },
  {
    "url": "assets/js/336.4d55645c.js",
    "revision": "e20b78fe153065910941f83b6de3be8b"
  },
  {
    "url": "assets/js/337.5c05c116.js",
    "revision": "893629c3be5095fc009cdb97b299c682"
  },
  {
    "url": "assets/js/338.085cdd72.js",
    "revision": "c645953a1a1547fa437cccabf78ae162"
  },
  {
    "url": "assets/js/339.77e1c88d.js",
    "revision": "1cace59218a058d99f7e28b2917e2d2a"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.21dee04f.js",
    "revision": "3d281c1aef652625df4d6139a24bd169"
  },
  {
    "url": "assets/js/341.2e6a63e4.js",
    "revision": "f7182ef04d0d0dfee486edab0351720d"
  },
  {
    "url": "assets/js/342.c5dfb15c.js",
    "revision": "711562e50393c4694b84e79d70728e02"
  },
  {
    "url": "assets/js/343.6e6f9922.js",
    "revision": "0405ac374eb9124a1a64c6dc1d8e6d4d"
  },
  {
    "url": "assets/js/344.2a3bfcfe.js",
    "revision": "179b0f67fce96300f86111a59ed5dcc7"
  },
  {
    "url": "assets/js/345.f6ce56cd.js",
    "revision": "777f13142c8a37fbef07970158a9eb07"
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
    "url": "assets/js/42.1900cc30.js",
    "revision": "a2c6044fa4791ee2006acb32f3f109e8"
  },
  {
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
  },
  {
    "url": "assets/js/44.53aa25f6.js",
    "revision": "2c7d897f62f3e35097072b207ca999b0"
  },
  {
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
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
    "url": "assets/js/50.80a7d146.js",
    "revision": "037121e96d51f9455396abd199a4b28a"
  },
  {
    "url": "assets/js/51.4aca88f4.js",
    "revision": "c0852cda5add6286ee1a5501f920d9e7"
  },
  {
    "url": "assets/js/52.cb0f686b.js",
    "revision": "e5beee03eae5606428d13a65432f24db"
  },
  {
    "url": "assets/js/53.a7326fea.js",
    "revision": "8f482dcfc8d3562cb95f221d47616c2b"
  },
  {
    "url": "assets/js/54.e9b811ff.js",
    "revision": "7f4f35e18d00e60b32acadcf93fd32c6"
  },
  {
    "url": "assets/js/55.2890cd6d.js",
    "revision": "2c7ac47f156bf2a7b42ed66e8aa81b72"
  },
  {
    "url": "assets/js/56.21458346.js",
    "revision": "d2bb22cf0fedfce6d8362479966fcdfd"
  },
  {
    "url": "assets/js/57.7a3df85c.js",
    "revision": "fca67054031cb8a7848d6c1e1b3dc0eb"
  },
  {
    "url": "assets/js/58.904eff84.js",
    "revision": "6dd77eefd76fb4108367ea5645a44bf5"
  },
  {
    "url": "assets/js/59.5334b91f.js",
    "revision": "1bd6de427c18d07e6bf7565db81ef0b1"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.086915af.js",
    "revision": "0d950b55774fd8f2ed0019d0357765b5"
  },
  {
    "url": "assets/js/61.3923ef64.js",
    "revision": "3e39cd75c87902f77f3ad21ffc89a1ea"
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
    "url": "assets/js/64.5c0091c8.js",
    "revision": "171b8b6cf87f72bfe3fd0a2fbda2e5c4"
  },
  {
    "url": "assets/js/65.4122ea45.js",
    "revision": "a7e2d4c1736a429e4dde7a2b44730ac1"
  },
  {
    "url": "assets/js/66.1e61a138.js",
    "revision": "af685eeafb3a9fe6fee6187140ee4587"
  },
  {
    "url": "assets/js/67.2462422b.js",
    "revision": "0a15ab699d1719a94aa867191216deeb"
  },
  {
    "url": "assets/js/68.4d6eedb6.js",
    "revision": "0f474788923fbf2974ebe521f06cfff4"
  },
  {
    "url": "assets/js/69.cb959ecf.js",
    "revision": "12ed865d48cf27cd8341a7811558030f"
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
    "url": "assets/js/72.6d2bc36e.js",
    "revision": "c0e8b2b42f4ca3f5754e070ec7e81065"
  },
  {
    "url": "assets/js/73.55edb1c4.js",
    "revision": "be367a7d0f7737199095a830c2f3a9ac"
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
    "url": "assets/js/84.d4e34960.js",
    "revision": "c6400caaf25ed700cfc055c803c5c4da"
  },
  {
    "url": "assets/js/85.488316f9.js",
    "revision": "6d2800cf421c191862aeedff34dcdff0"
  },
  {
    "url": "assets/js/86.9900f5d4.js",
    "revision": "858d755131688240f23a64ba26c44c9c"
  },
  {
    "url": "assets/js/87.c33c931e.js",
    "revision": "b296c9618e2c380c6327dec8329e90a3"
  },
  {
    "url": "assets/js/88.ed34d707.js",
    "revision": "9120646f637fe2d8a039231cfa32dda6"
  },
  {
    "url": "assets/js/89.91c8a955.js",
    "revision": "44b89c910b0dd2b33b03c62d12255318"
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
    "url": "assets/js/92.129f1582.js",
    "revision": "4e32d836bf005147c885df5edf56429c"
  },
  {
    "url": "assets/js/93.43df9f3b.js",
    "revision": "a7fd0d119d05321df88c44de9584cd8e"
  },
  {
    "url": "assets/js/94.5f51211d.js",
    "revision": "ece1e0f6f5fd7d2f33bbfaa228dee5f2"
  },
  {
    "url": "assets/js/95.acddd05b.js",
    "revision": "2acfc8eeccba3c2b64de17ee9d81c97e"
  },
  {
    "url": "assets/js/96.a75e0ca3.js",
    "revision": "9539b49b9c3120132ef7f6378eea57b3"
  },
  {
    "url": "assets/js/97.06d6e4bc.js",
    "revision": "e04fbb2a1c8fef8f8e5819cb560a3f7e"
  },
  {
    "url": "assets/js/98.af86dac0.js",
    "revision": "a753ce319cb90cfff2179148f5750e93"
  },
  {
    "url": "assets/js/99.905b6ad6.js",
    "revision": "f65e087d304634ce46b6cddc78c26175"
  },
  {
    "url": "assets/js/app.1b261de1.js",
    "revision": "dfcf4c5dda08c36fee9876063ac22c11"
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
    "revision": "b0e0be0ddc10a979946309ef8b1bfa7e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "af8fd6cf20cec226f7c72301f948fbd4"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "237a882cd65b7a222bb7ce53fa3c444d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "41c53102eed03e80431af72aaa7f1fa9"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "c4fe0bfa39f7866f5b1c7fdafc68bc78"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ab798c4cb17e74cb47b5c76bceaed09c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "17f75c574b77b08275d5188a251ea2ca"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "51a8a01d235092bd417aec3344e5b0ad"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "4cce2fd6a5f5d23fdc32010a3286382f"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "47096c0d2ede2ec12d8e8fe3a7b3ba41"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "60ef5b2fe8487b664e62e67dd3a103d0"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "13b425457a04e58a851b732110a62ecd"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "a24bdf354078d7499f9789c4235237bd"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "02a6ddacbc2760aa9a09c6893c08a749"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "163715019bccb1a4ccbc946f342473ad"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "b2d630136498d9b8613f89449e55f7a7"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "530a369d39c8f4ddd403d52337616e8f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "fcfb1d5303d33e64bb5c0c67c88740d4"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "58bb248e696c98c27a6e1702b414c8c1"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "ba831f7c317c59ea52b68936e4da9643"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "98bb5a61f9bf23a5f33ba451b7c54ff4"
  },
  {
    "url": "c/program/index.html",
    "revision": "16ece792e346f014162e71d7d2e683d8"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "960b430fac5e88aa6d087e2733ba4c57"
  },
  {
    "url": "categories/index.html",
    "revision": "c38cb89585bfb8175baa0dfedc6fe603"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "e1e3960c942240a7c601c83c319cf343"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "2a3b6d68859beed7ae699ec583e5152e"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "6c03a90ca15c44a4a1aef603a079b8ce"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "19e53a79f226c5128dce0c716b7a1bf2"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "7ba6932a509c1360e6ad944689ed2e92"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "351a1710af413f5276829511e4f5aac7"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "6a29c9af367d126b3111a2a5b08b15fd"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "035843ce884b453a3fc11963a0574116"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "455d06f437b88310cd3b9dc791928ee8"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "df68da46810b123a5c86cf29f54e4004"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "33b17dc42ba906903e104ed0bb6cd2b0"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "4340378ba0e5857226770395ed5a6fdc"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "5830bb82842647ea6a58a2cc8971f860"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "a6e2167528bf88f107422f8feb857aaf"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "8a15020afa79e0babf5c11e13ef49f4c"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "8a40007b4012a1c243b063dfb75293f0"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "e9292b20d3a15204c8ed59e4ba370905"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "10055f873adc5852654aa013518be299"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "55c5d36db3314f8df742ce3563bb58d4"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "e4c6dab2cc9edeb3c028b2d2c7cf6658"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "a45866181482d052718f27152757043d"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "6ddc8acc07d68c511259a93eca87ad19"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "16ae88121f02669b1f3cd13b4d4a5a63"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "57b35716487c239988a5ec6bd67e9887"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "e37a3c6282a3b958a73c9d9a536335fa"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "b055afb790d08044637876107dc56076"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "329cf86738450d067942657dca5128e1"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "36cd1511f7de28e2be08f0e93ac1cdbe"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "d9a735eed76ce9c6ef339499bf691c79"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "d0667c559f5f723db06c221f7bf120bb"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "bb4f15654277a9eb20cb61db36d633c8"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "2dfeb2baf58f44712c802e34be05ea36"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "2a44b2b1e58de97f866e46776d33f7c6"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "d9da0548a71577fb9bb56ef60442f031"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "562680f7b3270b6e03b66a3f07547c46"
  },
  {
    "url": "figma/index.html",
    "revision": "b3b2e0b326b3a22fb0594399bd0ab74b"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "6af980513b83b4eee69e26b2edff4702"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "727a0fddcc4d5b2b942a05b8ebb79e56"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "dc21075413059ed8671cbd34df959792"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "592864fd526f14b3e1ce985f334a2cc8"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "5a499434802666a4a618b363a5576164"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "dc8582f5bf44c780aae58b53a0f9414e"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "d854539b81469a6c5d5aeefe199df0cc"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "11dbfdd9efc6ca137c2d08011455708b"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "cf47955c1c8a785617250e85b9f90f67"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "cbcf4eaa0903fa844be76bb7d76e0e5f"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "eb327b85b534cd6fa1930a39a3fc2092"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "490ecf1fabd70ef989892e67d728e16b"
  },
  {
    "url": "flutter/index.html",
    "revision": "7583746c28ed193e8eb9613164990d67"
  },
  {
    "url": "flutter/point.html",
    "revision": "c9e08cf4b00785aaae62bc4b984d671f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "45f8d8a70176adc159cc13c001bd4ac7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4598406ccbd30f9e7de582cdba65ce31"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5f992f889c7836a364e915f4ea786340"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d5485f3b93512ac89c518b6e9aac35ae"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "db84a2059173154488a53ddc54175168"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "75c4cf42b4e77f7b51f29ab884cc0933"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ce20bd8c0bc981b73130e9d4ca62858a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "339941d298a5b90aacfbe08860b981e4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "0647adbeaea95034c4758be64c65fbab"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d845fac9e7bffb5fa778bda9a113fa4d"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "bfadcb44418b6c522c1c3ed115d871a7"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "85668d7fa34e4ad0304cc9c3194c4807"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "a49c54bdac38cac9a98eda72f65551a4"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "71bb0235bfe31f0b75f3d10b695509c2"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "2b3ea0a53ab08a96bcfbdc875efc2506"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "2a8f7354e2cb0de58a34a679a7f06232"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8ded65896519f46dba9ddb14eb2485d1"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "376585e6f3e6dffa42c4bf72a7fcca11"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "911a5e71c4d9061ef1b55e0dd9618c70"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a98a8d73d54a499ddc70f6e7ccb36829"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b8b5ddceac979e1a008a62d4bd003338"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e7ca01a2d4a958ae245794b1e0463d78"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1fabf4babe3ddab79f3eccb3f39f9732"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c3d36b86a0a6f8aa416dfd7ea3467ae3"
  },
  {
    "url": "haskell/index.html",
    "revision": "e4735026650b32f5861194a1ada38177"
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
    "revision": "6a1664d14dab1b2e1ec3692dd53b0cf1"
  },
  {
    "url": "java/index.html",
    "revision": "3cfde8caf05f5250fccc05601201b9b4"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "f7a381edbe5e3bf4da7d10218241489f"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "ddb2f22da66f7733f88544b7b4fb33e5"
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
    "revision": "cd605f7fbe48ebaa91dc36ebecbfa14a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "f0e906a7bffe0252ab31d101acfe7319"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3ae35455503436a6486ac1bf288b1edf"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d4de1395c353225a1c3ee5eaa5550c20"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "e2916fb9a16f21936995e79fe1e3cb40"
  },
  {
    "url": "python/index.html",
    "revision": "56cd75b6f72f63c1fcf284c24b30df04"
  },
  {
    "url": "python/poetry.html",
    "revision": "005fe8cebbb304e3f22970706dc11655"
  },
  {
    "url": "python/pyenv.html",
    "revision": "d83a7952535df802fc11b8d451df551d"
  },
  {
    "url": "python/python-ase.html",
    "revision": "e8ada331146991209612e13ed7fae575"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "b84d3aaa4ebc01148859e98ea3513fc6"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "96c8fd18eb723d63a8eca825eafe7b47"
  },
  {
    "url": "python/python-file.html",
    "revision": "355d17f85281994987a84cdfd13b81af"
  },
  {
    "url": "python/python-function.html",
    "revision": "1215abd377f8e2f9a3ff63d13bf37edd"
  },
  {
    "url": "python/python-generator.html",
    "revision": "6daa7f0900303c4aafa9ebe9138e4a3c"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "b034c41d9a619d51eb266d675d9e045d"
  },
  {
    "url": "python/python-module.html",
    "revision": "84a027e84c88d2884c16e5e48ffd87b1"
  },
  {
    "url": "python/python-string.html",
    "revision": "26f222e9dcc291b11c0869cb76ab8ed6"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "5fc25a8f0eb1a3e4ce8b806d70049835"
  },
  {
    "url": "read/index.html",
    "revision": "270c7346c4aea6bad0138469488392da"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "4fa3ca63310a6dcf09a2017034398df6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3bc1abd274da536c60394e389749e131"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "181912fef371486a70a4f15fbfba5f77"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "c424369ebe06cf70533ba08abc0ce76f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "991ef0e182397a279ca455b645deef96"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c30b64ef339308e06bbdbf196a9b393d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "46b9b645a1a39e64313c2cc722b07f4a"
  },
  {
    "url": "swift/better/last.html",
    "revision": "71a7d1c54555ce1fee974f25bc144ea1"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "a89cadd0615a2e0a4fe306ccb9c11596"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f048c8a378ede5b159ad8e9e362cfbdd"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "a1381da7689feef042c9735e25eade27"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "766782fd0fdb0f5fb9061ec98cd48d2b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "436b748b04076ccc8158ca2bc10851a5"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "33c383a657f6416eb74cdfcde2ecdbe3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a22dfa3eb6d8ee55913b2645ceb04784"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "9922ffd8f921c1ccfd8872f7fddcd703"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "0328b425aef8aa94b13b6e79d2b7d7f6"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "193824314d9abef2a969fa7b662f05eb"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "1fe2c73d332c9bb4051da76a9f2c1c1e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "82688879c29598df737a965782abc95a"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "ebd7de0f91b9ae14abce741d604736b3"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "dbeca2318bf68000442ca3cdaf1ac267"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "927bc0ced3a54c269891e902f9511cc3"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b1881355bc66f63acb9306f106557078"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d45ea68a23ca90cdf77711b9aadf29bf"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "be5e97e8787409d51c4c857ad4ab8834"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "65a21f0e50c9f23cc9f47522818f5ba6"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "f1edba1f6893656894882c661ec0662e"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "6c3cdb66cd24e5a9f31020050ab4c5ff"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "da62f1d2b10c14497272a93c29fde788"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "ba09447a5d0ba15b1a22a713e776fe6c"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "97d0c3f39772527e64619717f08a7837"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "e9fbea256fe983597757bd0d00f88fd3"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "435827e888a5b03f66616cbe5b2f5b26"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "055f1e5d3e581eabef88c9f98390d282"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "9d49c5052dbe9eb062533243527cc0a3"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "0160798b0299f56f7f42f4424268a934"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "bf93a903140a4743c76117358f35310b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "848683b629d844ac1a393b2416a5ccae"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "74d66e091c1aef8bfe8909656caea5bb"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ef372f0c302c682e0639b53e42da783b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "10b4ae5e4e49db258573343340535e78"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "a941df8959ad67097fa92a2dd622eb54"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b6dcd5394b610c1fe2f6d1a317723a75"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "208c51ca7c315baf60a31c1de4e4513c"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "caae90b225e14a6cfb9b67da7cb7e6f7"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "f5b1f6243397f48929c03bd8ed9170ab"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "3777ff981f10dd15bddb434180a6e5d4"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "36f35d51433cc4ff4336e00f23ec5f55"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "4b77c6588de4c68d5bb1432d5d16b6b1"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "460d2e917649ff66c5ccc2eea8e26817"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "e2b6d82bb409cf93ab6293ab685f2f55"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "ab70208748bb4da7d46234b2b0fce000"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "fe82ab39ab045d8caa651cb026a229f5"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "7bdb576d4d3dc14ca2d15a0a13480e8a"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "114d4089ebd1dcabeae926f9947705a3"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "abdee1bd0a0fcc6b4ca15a19b4d96924"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "8972c70d4b92d20fd043834929f75826"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c88b8770d2efa26b5b2c96380f8c573b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "c8f2962cc5ec0ad365d138b72aafd1a1"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "615c522051c6c00763587cb42ce630af"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "59008298e2104a6d0988352de608d2be"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "89dbd8042ea0d2dbcc598959b12a8187"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "45c37d943b2ee93377ae397ad15ae09a"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "3ca8f98d037a1a325cc9c57ea4553b02"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "40b3b19737b249146893a8514182af55"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "13dfdcd69648dcea285249ab2c44da9b"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "980404ddd5badfe8e85fb90547556af7"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "cd8c624685870652c923ace31541ed06"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "654eaf5f042127dc7a3ac1648426f254"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "106eb4ddd162cc6e11573fa48b6592ce"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "ec26fa0db8c21f7ba05b1d6f0a0a5cdc"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "baf7747ee721d603732aed433d913697"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "5bddd138628d32884651e96393a81199"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "393d82023373e1fb6c91e27b0a83d550"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "ea507e33f8d05924ef13229ddb5da4b7"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "42e1c290100e65a9706d6f8f7a2fe16e"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "8acb6a1a4e7fd16c49fb36ee5f757e4a"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "14912d0000e63b6a823f008a8fb8a9be"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "196edef1b59043626d31a7c3a1f687aa"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "653cf958d0b810e71d5e2cc3851bf3e9"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d2751d8beb47930fe470825eab06f960"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "ac4fcc363a620653f9b2a8d8be606bae"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "627085de36bda8e6b0d2d2f73e9920d4"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9a20d436e7f1f27897efb202c236c747"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0b59c30c306604fbd53b54ec3084156a"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "695911ae61365ebee865492a1da825a9"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "33d6a50dc5be28a043e8a87cddd48665"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f85934ed3b237446d7e48545f7e0402a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8831af98062f06188d0c1c23b0dbda6d"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "fa963fc2cad5ac8209fcab97323525b3"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "704761f503e2b65430da5a96f2dc66d7"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a401bfdaa8790e3bdafae2e19ac9060c"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "32ecdb6dd90286bc4f4023c25076f386"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "842e732d5da58cfe9b9e667666a43ac4"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "6cac36acec9e2890d926776e0557cc24"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6cea301a843fb9a617f0deb47015120d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "195a8fcaf1c45faca6b12337d001f3da"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "20d7ba4a67ef52f58a65347d83e0b719"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "93689cd566d4b2b3bf64cc487aa382b6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "dfb5fcfb3f1cb91e353a70cd1aaaef65"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "625c8dee759e904a0011248ab40c1a90"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "1e333d54b22fcf611f8845dae8a94cfa"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "74b86006b8a0019cb893821765f3a16e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "f829c19640d7f171eee762e2fffbb405"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "067114dce19edc8249e44941f68324f4"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "026eaa7b8723b733d2e220271feedcbd"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "f3c0fd10ed80e3ec5ec25a708c7ced82"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "65732d9d69bdfb049ea45149301a863c"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "16b958bf5de4f84eb6669a28da9187ca"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "29572cbdfac262faa88d027f0f770b70"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "ae2439b08f04fa335e66c7e1d4b825b7"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "0089449516c25944fd9c2910d480b871"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "151ace00a34770e073e83b1e70b463df"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "7bff879dd59ce740449ddc37b32a38d5"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e5076c72847ca220229f9226678840cf"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b49ffa0fa3dac8ffd09d97fa9300c7bd"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "31b3bb57b8d7e2d01c2608f876fc68e0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "bc426624ffe823b50d782ee7b6900727"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "11489655c17a744fb55dbde8df3a14da"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "8013f19e4579d3450a04c32ec799c0bf"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "1ac8749a5ca90644a82bc89b821eb029"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "28be1d4cf6633c1bd33f19f364465779"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "9a2e3078127a9b6d2c7eda3225e91992"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "a80564d39eea9dd0fb1ea13a00b05aa9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "203c0c1a8b433caf68ee29c14aecf9b7"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "bebd0222ea97c4c2a4ea90fd630ed8d9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "d24d210f6eb447345d295ce83281a844"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "88c21822e310f0f58fa76ce7e84b86d8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a3a6ac4d5b1175691948f8baafc1ab67"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2b7f31925264653bb77c0f7eb2d955ea"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1d4a0f75fa678974c8a519e897c54e0e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "70947e3036974ede1b59088572da50f7"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "a629f238996393c6acbd27d90f405ddc"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "03ae936714e50600b17f2db0e82ae074"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "50b9cfe962333a08b1ce106f4ae084dd"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "4cab0fac1687f7e49c174ed1ada1741c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d3cf2a9a7ddd7bd983f9362ea82a36a7"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "341e6f8ac91d6b8dbe4a0697d1d83020"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d58fac34b7b1f4aed356ee0db85645ac"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1dc18f28dd73febc577d886ad73b0a89"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2c1f4e019cda2faf797a60cb88bc8327"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "8488d0126700cfde0267d322aead2def"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "0f5cad1a8e2d8356cd12ad54c565fe35"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "bce65b0fccf71b571e2cbbdb817bce2c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d1f508d52a709a8929bcc52d8d5f1e51"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "54e3ec1d86343c4cebcfca49389cdfc5"
  },
  {
    "url": "tag/django/index.html",
    "revision": "2111c9ae89e258096c2b46335fd9d524"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "613aa56ef8615672ffa767a605a3e3cb"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b6a8e732c0f812796a5c293948a5bc60"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "cfb38654a9eb6b128800210fa08fac4f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c02fa56f5f35aa65795d4a3e3f6964fe"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "ea65544aa1788ce26b88db03911e4adc"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "441b66699a851f282f8a21fb96475d92"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "10c503d757f046526b65e44a49d1da7c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f38b54e55df0cd7141fc8b71a0e2fb67"
  },
  {
    "url": "tag/github/index.html",
    "revision": "5bafc096b75ff89050bea5885b2a9614"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3843fcd9cc5c5f1c2e02afb79ea0ef6c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d9f8aab3cb2603fc9e1b2e47fb4f3640"
  },
  {
    "url": "tag/index.html",
    "revision": "a55858390cfc16e1804740e687c9b435"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "98c6f508d3b418026a3134465e243855"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "7994e9b87e3dfcfb0cd86cca81f86eb3"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "fc9f73b0cd3bf0b3f7b3e5c9fd14f1d6"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "621ed30a493646bd39ecd8f65602c8da"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3e9d638fc5b1117d4f055180c2fbae96"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "3f4986d10df6e3df789f6b4593a9dbac"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ecfee867be619ed428db8915ccdbf4ac"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "21f71214579bba7c8b9cab56c1cb7dcc"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "9d1a71c1800271de4ee2fd3df1b39ab0"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "df7817e14c49a901c1a639023a7d2de4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "ea0f3a28093d88d461568c91c27f79a5"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e21442c55878d3d8b0315e0bb8b3fd21"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "610bb9e5f52528b5410367bf33bcc25a"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "de71289430dbf120668ed62e3ef7b69c"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "577cf542d453cf92af3ad2d3460b8732"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "3fe1503d588c0363ffa4ab65572ffbfb"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "6694456ef9737f310bc9153f8c612a82"
  },
  {
    "url": "tag/python/index.html",
    "revision": "443e46922e0e31a04d2447134ddc2195"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "fa14a3124f328f44931dec37d3f6da92"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3c82549de5172066df2bfb2a0980b62e"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "00ec069c48dd3fdd38ebd252c29c5dee"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9013014a0ccaceadf86e5aeabd048b9d"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "0fec1286db4a3739e3127b09e00ee9c7"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "7fbd585ddc6d22c76b4e13fdbf9cc888"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "3dd857874d2757bf60cc15d897ffddfc"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "55b355773f651a6479b08b81283d8fb8"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "9d761db495c1b6112f9e156c41fc8951"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b3f181ca682ba14ad5ce109612562d74"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "12e63f6aad45d700b6c33ddf00b1924c"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3f2faa3d1e92033c6ae79ff6cfea56fc"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "55f1371ff4b6135907b0231646ba648d"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "a8b54fdefbbbcf392f6b8525a13d69a0"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "008db242044172752176a8467f3a9ce8"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "0371864378b5aba3ea45d2785347ee83"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7ce2c856baffa4e3d64d299e8d9fb6e4"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "6de9608fd6c49b22f7e557b8db0ad643"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "65e48992868203802a0a773df0f8c198"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "0848f5d62dfdea1bddbc5fdf597bd9f8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0223bf9063af7402902a215f426572f4"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "1ac165afa813a6e82fa914a370a6dcd4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "bd94b2000d7e6e9689ac696affe7b12a"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "b56b57d0650006696fa08aa14a2de4e8"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b47e6a6489926604e6f7706221223927"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "bb043e0728fbf4d033bb0ee1c191077a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "f6ae2ff759fd09fcc0fd1a42c55d7a58"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "babff83f47ce2f76c2ddadf92d90f81d"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "e0c1dba1e529c0cb88a0ca016df4055d"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "98bb93a8d27db33226317acd627d87bd"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "82bf3f1fa3394c52c5a30ad1fe7d19a1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6a9a79162d18bd95549363453f7e9643"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "11a6508f068595bcb9e23d7b622d76cd"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "b6d862b2bc5a8608c105c3fce2b0cca3"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "565b9da73323dcab01d6b523fd966a9f"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "b669124700731a8d7413c74e3f8a2c8f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "8c2cb45ef1c21f3a9e822ff70a91dbd9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2ba1fc06bde6947de1772392e6f1265c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2b5fd27d18f6a4e6b0547b3b21e4278c"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "f6e5b3f799f12fd04c328e5f2f0bde8d"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "350ccf7e2dacf5f700dc2a25c609d3b7"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "4f6ee8aac43eb97338e09a3b17bbe8ac"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c8811eb632e49334fbafbce6b3df5943"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "11167fcc5826369ab58974098e59d142"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "36636299501ed5754b66ff9675bac420"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "7763d11a747f4d0f066c1ee6ddc590c1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7216eb0582c362b7a33b799346c47441"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "31646f47c18dc8d83a59f993e2b64fe2"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9042e2833c9f00dbff4ea1e248727d2c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "e28061a8f1c42a5bcd74f8c3036704b8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "aacbb336f1c6452ddef62ac7c11b40ae"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3a4a7e825429676ec84c42890303586a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "55e5109558b5ba90e925d4880826b768"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "44d51a93c164532a6d49e4895c25d7e8"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "50d7caf6dcd5af5ac2afc44ec217ed12"
  },
  {
    "url": "timeline/index.html",
    "revision": "a16d074d8d782dbfba4460870ac051c0"
  },
  {
    "url": "tools/docsify.html",
    "revision": "0e3a1d82bf980affb55c914f39d6409c"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "3b49c36ba985e36302aa34e7d76be708"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "1ab110a61d8cdb47913747de326a8855"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "244e44b1404712309791bdd569aef3a2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b1ed17ebfa076a91a58a4b070f8e4a36"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "aad279bd30e4abd0b1cd033739e75fad"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "44603af463d51fe171bbcc3540850da6"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "d2aa7514a8a893e936517548dcbae980"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3b3650c48c1a974000bc9d7de3bc26ea"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "ae0d26128bb196aadb1ef753d694ddc9"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "d90b05521acbcc50f19f258eceb6219e"
  },
  {
    "url": "tools/note/index.html",
    "revision": "2d7f28921fdb3004f390b2d8c2508dd2"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "014cddd85d4e9d59685639f4bd07f434"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0d959d0e14876f5faefeabf3b5ab100c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "6135c02cb6c1ef47d44466e57b8b4d50"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d85c5b31df623820602848d3c5ec4714"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "2f89ad519a8edd873ed216467346ae84"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d39b71f321e3b652872ed1edfb33c07a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "50742f6ce3beb8115bd4f3bc784529f4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "ca0475b991ed17bfd01def5cd47ddfe9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bc52b6c69a143b3a5213189195851c2f"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "8312e4c3ca1dd3608fdbf42be25e222b"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "283920d07d22206d3c668f4020aae361"
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
