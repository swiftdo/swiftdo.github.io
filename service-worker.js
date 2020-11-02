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
    "revision": "a89f65005c983c675becbd7e6b96cd0e"
  },
  {
    "url": "about/app/index.html",
    "revision": "e856893168b97438020d3edeb62f7092"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "87887c829c7d96e68a1c26fc794e1867"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2268a461f96fcac47461717a4fe99e74"
  },
  {
    "url": "about/index/index.html",
    "revision": "76f2f64a6dadf2959bd86df4fb409b6c"
  },
  {
    "url": "assets/css/0.styles.02431204.css",
    "revision": "02a21477cca6bdb33721f279084a1790"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f227fbe8.js",
    "revision": "aed5dcfcca1efac00ac39433b22c794d"
  },
  {
    "url": "assets/js/10.4ae0625d.js",
    "revision": "de0a66e60353160b65f8c632bb656432"
  },
  {
    "url": "assets/js/11.d5f57c64.js",
    "revision": "20cfe1c716539765eef66546b2455535"
  },
  {
    "url": "assets/js/12.f0d65a5d.js",
    "revision": "7c80409a8ce42968bdf00553b892205a"
  },
  {
    "url": "assets/js/13.bbf28b14.js",
    "revision": "5a97c4de46941002a5ed3892c6677756"
  },
  {
    "url": "assets/js/14.85298c30.js",
    "revision": "b26355e42018d76202456720f647ff86"
  },
  {
    "url": "assets/js/15.3cc4012c.js",
    "revision": "58104b95bd6449117bb5e872e0cb9220"
  },
  {
    "url": "assets/js/16.f8bf2c7b.js",
    "revision": "609dbf8c75747f59de3640cd378126ef"
  },
  {
    "url": "assets/js/17.9ad99f4d.js",
    "revision": "53103a5cd6feeebde25d6ee0f28f9d96"
  },
  {
    "url": "assets/js/18.f5bb9f53.js",
    "revision": "34a9835d8cb63df223fe9f4db4bd1f21"
  },
  {
    "url": "assets/js/19.3a5d468b.js",
    "revision": "ac2348cf63d6e5f3e1cd225f73e4ff2b"
  },
  {
    "url": "assets/js/20.649f6835.js",
    "revision": "6cdb0cc070e4ec578be6d9bf9f313f9e"
  },
  {
    "url": "assets/js/21.e60e4cc7.js",
    "revision": "8101060c88eb29fe84d23aab6492660c"
  },
  {
    "url": "assets/js/22.098ad311.js",
    "revision": "a09cfb0c121f013750d57b07861ef96c"
  },
  {
    "url": "assets/js/23.8de7ba62.js",
    "revision": "54d39b19e24b8d0b00e5a0f70ddf92d0"
  },
  {
    "url": "assets/js/24.d8fa631b.js",
    "revision": "f3dee10ac3963bbd36d7ea0443594db1"
  },
  {
    "url": "assets/js/25.07ff1d77.js",
    "revision": "9b44b551cb6276d13617897e15893889"
  },
  {
    "url": "assets/js/26.bca32032.js",
    "revision": "29bc23e0a5df2f7d9c8a43cd8b686a81"
  },
  {
    "url": "assets/js/27.e2eeefde.js",
    "revision": "a0fc9c089fa67ff8eab124c7bc85467c"
  },
  {
    "url": "assets/js/28.419b8645.js",
    "revision": "9e4c000ced9086645d94a1d56ed97c25"
  },
  {
    "url": "assets/js/29.ce751905.js",
    "revision": "96cba5ffcfacfe5e15cc384348292631"
  },
  {
    "url": "assets/js/3.efdd3efa.js",
    "revision": "afce79097afa51be3c456f96ff5706bb"
  },
  {
    "url": "assets/js/30.be2e87a7.js",
    "revision": "122bc5624b093e9360725450e7b3df15"
  },
  {
    "url": "assets/js/31.f0ff06bf.js",
    "revision": "a6f70245fc2a36731ba9b4d94d714644"
  },
  {
    "url": "assets/js/32.70596f0a.js",
    "revision": "d36a3f7857db2cabbc34dd724ef1a626"
  },
  {
    "url": "assets/js/33.0f40f33f.js",
    "revision": "b995d045fe659da24c2c389f74570981"
  },
  {
    "url": "assets/js/34.a4fbafa7.js",
    "revision": "d6437dda9adc06074761caf7bf35a167"
  },
  {
    "url": "assets/js/35.bf5e510c.js",
    "revision": "306210b7db07e94982d37efb82e34710"
  },
  {
    "url": "assets/js/36.29606cb5.js",
    "revision": "b2624929fda74b20b984241759a92fd7"
  },
  {
    "url": "assets/js/37.59fba592.js",
    "revision": "878db90b970d9360f7e57021e5cb2bb7"
  },
  {
    "url": "assets/js/38.2bfb183b.js",
    "revision": "b64ea6199d6d991b072538703cfe2c1c"
  },
  {
    "url": "assets/js/39.a8763697.js",
    "revision": "120ccf21d29aa8971c196ab13f8729f2"
  },
  {
    "url": "assets/js/4.12d0db8f.js",
    "revision": "f4acf16d6b281eb8347b062f7e02e4b9"
  },
  {
    "url": "assets/js/40.51834a68.js",
    "revision": "2be9029a05ec82498a9af11277acf700"
  },
  {
    "url": "assets/js/41.d9c1bb14.js",
    "revision": "973b2b0b9d62c4456ddee5c0b6e28fa9"
  },
  {
    "url": "assets/js/42.b6f3c3d3.js",
    "revision": "c79f4658e8b108736d5bdcfba92fe56e"
  },
  {
    "url": "assets/js/43.7e19e7f0.js",
    "revision": "e1000bb46616c31306bdcf6c7aa77aa5"
  },
  {
    "url": "assets/js/44.4820bbdf.js",
    "revision": "59eedbf27116d5307a84ce9aaa9d1266"
  },
  {
    "url": "assets/js/45.d9a7ca20.js",
    "revision": "12336b47028d77b515560e2be489bd8d"
  },
  {
    "url": "assets/js/46.ba3fe6ca.js",
    "revision": "9bdcd8f2eb52d3dae3eb4c5cfbb1f2d4"
  },
  {
    "url": "assets/js/47.fcb39853.js",
    "revision": "d4b65417d07cd539fc3798f94eb4aef4"
  },
  {
    "url": "assets/js/48.7edbfd40.js",
    "revision": "3284fc9cc97971241fd8c578174a40bb"
  },
  {
    "url": "assets/js/49.400534c1.js",
    "revision": "4262b16edb903c1dbe65e7376692b001"
  },
  {
    "url": "assets/js/5.f8ea9df0.js",
    "revision": "fc956de5f35d4013ef0d64a34dcff730"
  },
  {
    "url": "assets/js/50.d2d5580d.js",
    "revision": "54aecbd657e0431380d075361183b93b"
  },
  {
    "url": "assets/js/51.ecaa865c.js",
    "revision": "7b078f267a5ec51dc18d78d904a15b1c"
  },
  {
    "url": "assets/js/52.3e283551.js",
    "revision": "dc3adc17c4bac8f09dc2fdf6d0b59bdf"
  },
  {
    "url": "assets/js/53.504e6193.js",
    "revision": "fa9a13b4dd5ce87eb0b9058cf8bac3cb"
  },
  {
    "url": "assets/js/54.81123cba.js",
    "revision": "91ec109293853836859f432bdf6838f7"
  },
  {
    "url": "assets/js/55.25e715c9.js",
    "revision": "0e0d4fb62fecf41833207f14797f5ecd"
  },
  {
    "url": "assets/js/56.ba012f8d.js",
    "revision": "6ed9b66c21cdd5e7f9837de9bf70cb6b"
  },
  {
    "url": "assets/js/57.3e0d1125.js",
    "revision": "b0324a7ca22731ce1ffb0e3652e9996f"
  },
  {
    "url": "assets/js/58.2651775e.js",
    "revision": "f3bd81d7b2303590224513137e7adc4d"
  },
  {
    "url": "assets/js/59.a16c8396.js",
    "revision": "b05dae8b5b95b0b566404372f4181da9"
  },
  {
    "url": "assets/js/6.30d8466d.js",
    "revision": "995deaa39e844062b1da500f78bead08"
  },
  {
    "url": "assets/js/60.002f2e54.js",
    "revision": "74c6003eeac0836c4fb75ce735e40e54"
  },
  {
    "url": "assets/js/61.1169b0de.js",
    "revision": "f7ad5fca5a0a2388da6145aa3195c6f5"
  },
  {
    "url": "assets/js/62.61e4c7dc.js",
    "revision": "01e466b7e3402522ab1124659a34d2e7"
  },
  {
    "url": "assets/js/63.9b3113b3.js",
    "revision": "6830b1cc1b68ae85ae33aa98a0a9cb19"
  },
  {
    "url": "assets/js/64.2b96afee.js",
    "revision": "0f1911f1b9ce666b411235e3247fd45f"
  },
  {
    "url": "assets/js/65.3b1f2536.js",
    "revision": "1ce5f31b5bf3ff140d32aadf44bb01ce"
  },
  {
    "url": "assets/js/66.7a772672.js",
    "revision": "850229e277bd426834b8e4684ca50d18"
  },
  {
    "url": "assets/js/67.e228a65d.js",
    "revision": "3a0158c2b4ecbd3cf6888bb96c37a0c6"
  },
  {
    "url": "assets/js/68.2f8b82d2.js",
    "revision": "403dbf80d3295f01711b1e80d4b95329"
  },
  {
    "url": "assets/js/69.03b5d6de.js",
    "revision": "6b8c10c29cc67736d09cbb4f1be9f70d"
  },
  {
    "url": "assets/js/7.b76b832e.js",
    "revision": "5c9ee7202d15a668073076b08e8d7b5e"
  },
  {
    "url": "assets/js/70.2cc5558c.js",
    "revision": "4ac40d8f4f8008014cf2cd2c8fdf1b0d"
  },
  {
    "url": "assets/js/71.c8a2f0e3.js",
    "revision": "5c34d46e823964d52a768ff818d0e9f9"
  },
  {
    "url": "assets/js/72.cd5c4b52.js",
    "revision": "f26dd08341c950da31a1ada3339f3f7c"
  },
  {
    "url": "assets/js/73.41aba8ce.js",
    "revision": "a64f8b2caa7cdfb0ba406e2894846c54"
  },
  {
    "url": "assets/js/74.0a2e00f4.js",
    "revision": "00fb2f1c692231b8e02e7e7a5f32a673"
  },
  {
    "url": "assets/js/8.e4a9c76f.js",
    "revision": "9e9768a8be0e0a2e3a7dbc8ba953318e"
  },
  {
    "url": "assets/js/9.1d7b4d42.js",
    "revision": "272ab95d583d18c73a09c4174267035e"
  },
  {
    "url": "assets/js/app.6a366b32.js",
    "revision": "2a2dd2311d3a809f615c20fbbce52bcd"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "1a8b6d4d370e8aa69fbf2d18cc06711a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e5dd6bc739aebc309c92b887f25b57a0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c73eefa5162c63d35fb6edff210b7105"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bd1fd17cf0f3aa04e7513a6b74abb4b2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "9ffe25a695303e1f7e5efad7f6082b4c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1b6ed8be8a2b88debf674550d1d9bbbd"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "73228c0d39bbc63c2028d245e5f7fb83"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0f0e2b4def7b63995c1903755f1c27e1"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "5f00435d36e75b947cdde5ec71694c4a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "cc9fa2e4f677f219220c7dfbf078eb03"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "daf1295b370b1f42da1c03a1814e2407"
  },
  {
    "url": "basis/design/index.html",
    "revision": "ef58a0d3417200c177a2537fce11ff4b"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "b4003b1575c303635267fc0c7e93ca5b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5d5f4504b6fe007329c47d3627adb3b3"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2549e9c7b0820db5e59f8b8c8c85d253"
  },
  {
    "url": "book/index.html",
    "revision": "b2efe62075c027ddee336d3ebef92e40"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a7d200700c6a1f8f4fd8558cc723c9ee"
  },
  {
    "url": "categories/index.html",
    "revision": "015e75ef1982f808d31ba433962cf9e3"
  },
  {
    "url": "figma/index.html",
    "revision": "749a1a0113b365378fd0128f60bf3897"
  },
  {
    "url": "flutter/index.html",
    "revision": "4e147a0a5b9902ee0ca9be2ad7cd0ed0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "735dcfbf67a8f91c525c1f71bd362091"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ca7ed3496b88c20cc3d960f24bd8fa86"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "98ca74550b84a7a6b39c08a4c771f2fe"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "30167b71dc1d268370cbe85c824f6308"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a061088f106f60a6b4e9d32372d5dd13"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "df575e374c785ae02f2ae26d08ed43b9"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "0264bdcb4c4d0bcd95105062a571bb37"
  },
  {
    "url": "index.html",
    "revision": "4d124bd276915e961eb152d9f1f6c52c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "7a270e99b8aff88dfb17123332066d3c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "197041bd2f4659a687889290986aa076"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1dce8a0bdaee7a9012b1b387e2a7751e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "6f079ef0a03af7b31dbbfbef54fd3adc"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "dbc883388e76636868feffbd3022f7be"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "188b6273cf17200ba3e256a4b856bbc3"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "c25bf5885899629a0480bfce45976c01"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4cc05905b60681e47d25c9bbb25d71df"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "964554d758c2392bd0083204c8325d04"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "7864456657d46b0c51edb34fdf21ac1a"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "87050f46e5b888d3982801fe41ab8ea1"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "19d795a988e9117d24d00c1f16ff13e8"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "1f849e7476c189df86faf7fccc6ab9bc"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "67e9857df374def03217d9a68c081473"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9cac1966e808869d4c8e0de6067d4a0b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "fc904187cbef96ab52fc7e54253c8c51"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "eb8afdbb01b2c00d792e0292118dbfcb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "2d89f0b7b9f59eab28456b48c4597c6f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d56bfc3d262df37de4fb651f41b17515"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "695fe6f50aa2d1a7e96280c45dcfa06b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1701efd8bba7e90089ca62aa5ee6536e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e5c0331aa7fa5694b1ccfd759b0c7f8a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d54bc01f28a0f9d5acf353cac92f4cbf"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "1bca8c969370002082a47cf3bdea9113"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "49036a9d65f50613bc73b4a02348d2db"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3dbeede0b7f0c36810ebe52b67073ace"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c909f68b653fab75c8472142a4990865"
  },
  {
    "url": "tag/index.html",
    "revision": "51b424568ff227367075301dae929d07"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d941686237f5c784b8de5d38283a0ef7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "fed13d026b9d3b6f169c8cbcdd11c640"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "921d1f625f6c61b128e91b4081070829"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6e495a9005f10f13776f8e8d204b2d12"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "acbfcdd56141069ce79a957722cfc23f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7aa6b9f3826ba52c0617c8d9cbe6aed4"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "24b29ee8dafc04c6126a71fbd01f00f7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "9fec462d3b36290f47c098457b505955"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "ed460b2287ff3606d59fe8922bee0193"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "beee9d0dbac46819d9803bed2d231e42"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1fe15140cd33823a75eada4892d7742b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e3c6f4c8fc2f185189630d491d22c5e0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bef72a528c8661c6fd0b78dc40f3cbfc"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "01a70dbdf4ce3c09d536afd5072c2682"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e22ca98ddb6a86bf9a3661fe1ad0b592"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "69ea3603ac74d5f6ed9981f62604910f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ed1eed6d5a38e710952511183b3092b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "0d806e610a12198438f018c85055e58b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "37a38c5244855b82275b26a519b38c73"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a1f08c76e94a9ddfcbe7dcdbf9510a03"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "01f78efb1ea1b537b2a5f2cfe07388a8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fb0a88bdc2e7440136c3f23682f2ab3c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7170bb898fe57d065102c7f6cae64e55"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a116c61ca0bd3009f66c8de6b428250c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "43bf5a05021bb29140ad8f7e267ff063"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "119c88dfe90b804a81195c765b4aea3b"
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
