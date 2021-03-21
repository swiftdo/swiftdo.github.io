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
    "revision": "989c6c43aaa5194afbf77b3cce146e84"
  },
  {
    "url": "about/app/index.html",
    "revision": "e503d6652c8eb07d5a557461c4711e98"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "dc6fd1faccd78fdec4731614b551b321"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3f8f69b18018d1be81719a2fd6bf15a1"
  },
  {
    "url": "about/index/index.html",
    "revision": "2c6a09cee5cb95364ca65eb869055041"
  },
  {
    "url": "ai/index.html",
    "revision": "335e276005f5b6160f5db836f082e409"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c5b486389cd9342e79ad9ffc41229648"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.429f6100.js",
    "revision": "5079abc5c70e6401e011c2b0cd42e6b2"
  },
  {
    "url": "assets/js/16.de4c7be5.js",
    "revision": "91dfe2e910e1f674302d4876d7a1ae92"
  },
  {
    "url": "assets/js/17.0ddb612b.js",
    "revision": "d005c426a00d40956ca85e652bb17c68"
  },
  {
    "url": "assets/js/18.77bbacd8.js",
    "revision": "e799887b365b13b69b761f8a100d34d3"
  },
  {
    "url": "assets/js/19.9e579819.js",
    "revision": "d7e93989eb9cb8e0d42a115b9fddeb3e"
  },
  {
    "url": "assets/js/20.5ab45d12.js",
    "revision": "952a337862377b210b286e9d1d763026"
  },
  {
    "url": "assets/js/21.feed0bc0.js",
    "revision": "53aa1b695420ac448047037df4d0da89"
  },
  {
    "url": "assets/js/22.e652841e.js",
    "revision": "1598a1fe8fbd8495fcda0045859ca648"
  },
  {
    "url": "assets/js/23.ae326ac6.js",
    "revision": "7ed82f1b9810338287d73781e3ab0b08"
  },
  {
    "url": "assets/js/24.e0203ae5.js",
    "revision": "3187102e042dafa39816382f9f165be3"
  },
  {
    "url": "assets/js/25.457686cc.js",
    "revision": "79b476642e86d0f7aec070d0ef5949ec"
  },
  {
    "url": "assets/js/26.4b920c1a.js",
    "revision": "ec4d75a4732a721677fa92bd62169bf4"
  },
  {
    "url": "assets/js/27.64b91fb0.js",
    "revision": "7d583b00bf3347b8f8b5ce957d3e24ab"
  },
  {
    "url": "assets/js/28.06dc66be.js",
    "revision": "2ca610c92b76ac76e12274ee4cdbff74"
  },
  {
    "url": "assets/js/29.390db75e.js",
    "revision": "70ead5cdd356bb61d3af6a67d94d1e4e"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.bee18969.js",
    "revision": "cb3f9cfb5345ae194496ce98ac6e53c8"
  },
  {
    "url": "assets/js/31.3b4b2d51.js",
    "revision": "1dbcc732a7a3c026aa0c1661ea3fdd6f"
  },
  {
    "url": "assets/js/32.9e0642d6.js",
    "revision": "e4b4583f4d73476ebc5f71c335a76635"
  },
  {
    "url": "assets/js/33.d989b6d5.js",
    "revision": "2e2c4c22610583b1e1cc200827ea4c07"
  },
  {
    "url": "assets/js/34.cdcda296.js",
    "revision": "eecce383a8bc001a74c46d24361afeed"
  },
  {
    "url": "assets/js/35.99422366.js",
    "revision": "17390078d807948b98f616564617b9c9"
  },
  {
    "url": "assets/js/36.81819b82.js",
    "revision": "c33003a87f3e026e9cd838caa189296c"
  },
  {
    "url": "assets/js/37.afec76cd.js",
    "revision": "41b8e4ef945b65faef8760b37459a5e4"
  },
  {
    "url": "assets/js/38.ce4e379f.js",
    "revision": "0696b40aab2c1f4cf0c26b4339abbc6b"
  },
  {
    "url": "assets/js/39.85a4cda7.js",
    "revision": "5d6a19529a80cb660208edf2f28af56c"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.40f86c16.js",
    "revision": "fa7ba1ffae8803060878c58b9a38ba28"
  },
  {
    "url": "assets/js/41.023f1973.js",
    "revision": "40153c122a931e092267afcf349c1d52"
  },
  {
    "url": "assets/js/42.5fd92d24.js",
    "revision": "7fb539efdb233ddc59ec5a377127801e"
  },
  {
    "url": "assets/js/43.a279e791.js",
    "revision": "45de2a263b6407dca51047c41af1499c"
  },
  {
    "url": "assets/js/44.9115e4fe.js",
    "revision": "066c716bb2c813c07c077a83f88b947f"
  },
  {
    "url": "assets/js/45.25d7c6c5.js",
    "revision": "8e38b6ff14487d4bd035bd78c3799d31"
  },
  {
    "url": "assets/js/46.3b769007.js",
    "revision": "5eac70cfc39530044e01314600c6623d"
  },
  {
    "url": "assets/js/47.8ec09180.js",
    "revision": "018e76452ed57ade9681f283dcd2d846"
  },
  {
    "url": "assets/js/48.cff92216.js",
    "revision": "cc0c02d7e137dcd33ea8998384eb49d8"
  },
  {
    "url": "assets/js/49.87f44fc2.js",
    "revision": "712c7e10f77de352680e0a9232d5302c"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.96a716fc.js",
    "revision": "feb45975b7237c7a81428fe008708056"
  },
  {
    "url": "assets/js/51.937711d8.js",
    "revision": "b8c49cd2cd42e8453e2fdd39751e712b"
  },
  {
    "url": "assets/js/52.dc304b53.js",
    "revision": "e53af6653e335ace3e7b05b7bbe06609"
  },
  {
    "url": "assets/js/53.a45e6022.js",
    "revision": "9bcbb96b44c54a14b27cd8c146d94528"
  },
  {
    "url": "assets/js/54.26b3db34.js",
    "revision": "b1d79e1476c9081822c3945a726cdcd9"
  },
  {
    "url": "assets/js/55.529e4842.js",
    "revision": "33b4e3b07f0ba6ed5ac409995c53ac29"
  },
  {
    "url": "assets/js/56.dd94df57.js",
    "revision": "6f2ff99f82452b6171594bab6ec1870b"
  },
  {
    "url": "assets/js/57.a2223a3e.js",
    "revision": "7a8c1946d1f98d3c5cd77a84799a55f4"
  },
  {
    "url": "assets/js/58.567591db.js",
    "revision": "3e2e286016c1380c548bbf92b75cc274"
  },
  {
    "url": "assets/js/59.f01cc5e8.js",
    "revision": "36d57bfe6e535c6b50037d21dc428c95"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.3d156529.js",
    "revision": "676fbb725074ab075385562d953b4bc9"
  },
  {
    "url": "assets/js/61.fdaa3f68.js",
    "revision": "d1541569ec03463761ebc9216f1ef123"
  },
  {
    "url": "assets/js/62.dbe5e94d.js",
    "revision": "9cdf72f42a2e0118d8cccd504e611e17"
  },
  {
    "url": "assets/js/63.b9d76684.js",
    "revision": "c739237a00e3e52add4d53c24e1e854e"
  },
  {
    "url": "assets/js/64.accb88ad.js",
    "revision": "20bc22cc342acef94feb882ef69b2466"
  },
  {
    "url": "assets/js/65.93c732a9.js",
    "revision": "32ab8960588481462665a1cbd58c209f"
  },
  {
    "url": "assets/js/66.411f5a0f.js",
    "revision": "1593b3bc39c364be71a6b55c634daf7e"
  },
  {
    "url": "assets/js/67.ae8f6c3a.js",
    "revision": "826c0058b7e1f257f76e61072ede5be9"
  },
  {
    "url": "assets/js/68.c702dba1.js",
    "revision": "2951f27d6d15ba233025a270655e3be3"
  },
  {
    "url": "assets/js/69.d6474425.js",
    "revision": "b58e59fdada7f9f03c733f214bdb97f0"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.10b36444.js",
    "revision": "0aaec5957dc29b3cf34ee2081c10af99"
  },
  {
    "url": "assets/js/71.b1947641.js",
    "revision": "5302339643438f3ff882eebcefdfb690"
  },
  {
    "url": "assets/js/72.0ebd3322.js",
    "revision": "ec00cfda65332dffd943c94cccdbc04d"
  },
  {
    "url": "assets/js/73.435eec93.js",
    "revision": "9f8fb12e1a1640c28bbe0e4e22186487"
  },
  {
    "url": "assets/js/74.1dc96c82.js",
    "revision": "03982b5819ebca670408a82864eeed12"
  },
  {
    "url": "assets/js/75.b371f1b3.js",
    "revision": "0d30d43a4dc0a255ff55a21ad506885f"
  },
  {
    "url": "assets/js/76.b338726f.js",
    "revision": "974dccfbf74ae7edbaa1e0daae5214f3"
  },
  {
    "url": "assets/js/77.aca6cfb1.js",
    "revision": "25f3eddac140bf665d8838ddc2ace56c"
  },
  {
    "url": "assets/js/78.15e4a11d.js",
    "revision": "383bb7e04442fb2e6fc1533636323d10"
  },
  {
    "url": "assets/js/79.e0bd10e4.js",
    "revision": "6c75f7d4107df2365049beeffdba53fb"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.7f810dfc.js",
    "revision": "2539c86269f0ad3528eef9b370855339"
  },
  {
    "url": "assets/js/81.a16db0f7.js",
    "revision": "e0cbf1acd91fc1bf32225780ae3bb6a9"
  },
  {
    "url": "assets/js/82.1ed61cf5.js",
    "revision": "3a1a3e41d5d01386a83759a64cfdbb6c"
  },
  {
    "url": "assets/js/83.0cbc246d.js",
    "revision": "fb60067f9a64454b9d60efced118aa42"
  },
  {
    "url": "assets/js/84.ad5a3926.js",
    "revision": "b1eb59331598124619648fd58e696913"
  },
  {
    "url": "assets/js/85.3a17db7a.js",
    "revision": "9d03c6864b8a3f8a96ac1c24e8a2c2fb"
  },
  {
    "url": "assets/js/86.5043700c.js",
    "revision": "302aca8a119828a6c5cbfb2a40a5b0ce"
  },
  {
    "url": "assets/js/87.cd56151d.js",
    "revision": "756a17cef6193c0a1a8b8349777e8518"
  },
  {
    "url": "assets/js/88.ebbc8041.js",
    "revision": "166fc442c07e951066c281624b2e3b2a"
  },
  {
    "url": "assets/js/89.8ffa3f88.js",
    "revision": "1afde3b16827c598eb84a9019ef8aaaf"
  },
  {
    "url": "assets/js/9.2dc32ee1.js",
    "revision": "9f00c23786eb16adccaef83c2ebefdb7"
  },
  {
    "url": "assets/js/90.31c5774b.js",
    "revision": "b6e5fe1119553ac011bbf0a98717da21"
  },
  {
    "url": "assets/js/91.86ef4541.js",
    "revision": "95814305e77a928af5d02634e40b4374"
  },
  {
    "url": "assets/js/92.32fe9d99.js",
    "revision": "b44a2316f80a40942f62fc0f8390fcc1"
  },
  {
    "url": "assets/js/93.3e6c7333.js",
    "revision": "d42fe0f38b0d6569ef14c28789b7b169"
  },
  {
    "url": "assets/js/94.c3d36e31.js",
    "revision": "b54f8a047787ccdb8a09f118d93f9e75"
  },
  {
    "url": "assets/js/95.1f407fb7.js",
    "revision": "1c5a7fead627c7e1e3a6d1de5a83dd79"
  },
  {
    "url": "assets/js/app.302754f0.js",
    "revision": "130fcf5e1a88913164a80b972d50e84f"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "e95e5ae7faa41c79ffaab2c561266246"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d679f150565c9476711038b92ba7c1e0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "31bf02fc65424a42b95c68131ec84574"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d4bacc47938955a4d5d1d040bec74968"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2ca6c4c5d0ac49b1162683e436cd31e7"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a6b742a0662a7e1b12764c38a7579758"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f58201b60caa381a31d44152ebdea27a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "9d635581f124e026e90c600b25e30845"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "df80024cabd4d3d8b7eb5526f344b86b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "173da0ad10d925aec2343c53faeb7296"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d017d4c8b7c6d9dde45a4e03eb6d8472"
  },
  {
    "url": "basis/design/index.html",
    "revision": "5fdf87f64cccac813e11beebe1a4a84d"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "810dddd7b4e69762af040a45ab400870"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ea2e8978b33c2bded6178e0ad4f5177b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "9b66b23e1540eda2e6b08e191d977f0d"
  },
  {
    "url": "book/index.html",
    "revision": "5a75bbc50ff64e2e760c18604e66fcf1"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4f3a28f127f2d10cb58ec4b634aab6a4"
  },
  {
    "url": "categories/index.html",
    "revision": "fe6d3393d787aed1140f4ea4666280f0"
  },
  {
    "url": "figma/index.html",
    "revision": "4113354af662c30d97d6ee0e2c1e5d68"
  },
  {
    "url": "flutter/index.html",
    "revision": "6ac7c9a07f3d407adf4de54fa4dcdfc1"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2a7962b3a08b9143e92a183a4134dcf2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ad6cc329d5587b0e4d0c30ee791b18ac"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "60ae058f5addbc909c79cfd69967b8b7"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b5e0044b57cb3c39d90739a8c55f801a"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "662878edc07751941704b9a5ed8d3513"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "4bea49b0f3fb57a2437983a713603942"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a41f8171d85b63eb3caec6388b5bd00f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "28100073bba1ac99cc058fc72c621c1c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2d33534f781fd51f26c4bd06918bf079"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b3801853566e1253b517978a7746fb10"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "083098e8b005d31b186e456554b412b5"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "3848ff1f8f1476d96590cf8de1b3a4fa"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "581538da28c75b4117b109eb9adca607"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "71e801b1b0d66776b0945f5b16a91d07"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "56de189181128f65d22d34838774f0e6"
  },
  {
    "url": "index.html",
    "revision": "8cefb5fe642885daa2ae338f97b357ba"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "300e5ba3e86d565ecd8d9987eba6e956"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0154eb2aea8bdb205d0594674e8e3ecc"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "08bb4f719e852cc83691dbbff8a3d670"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b65a127079d1c34ae3d20502106fd466"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "dc966b96e3530a8c8cefdb021dfecb70"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "1d97e9991080fcbd06997bd400923e1a"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "731041e1d56f53f2ba589227fa8449e4"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "e87ba1488b0ce769add363d7cfd9f47c"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8ac76247b9aea76a0d5dfbb151b08b35"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "dc2d8db636ba1d6c4a2b7538bbd433be"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3d3d47ec1a61e210b9ff2321bbe8dac8"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "df5060189275af142520a5ed9b0fdbd7"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "15d5154b3b2e68f8dcfb08545f0e726e"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "abf5516d763dec2d288e05e5f3bbbf8f"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "d0d75c5accae2c9209bf32e0ce9490e6"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1a0ced686f28cdc0647c2bc25279742d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e3c103cb14889060e6e634bb2280d060"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "47a0982869afeadee0b2b361ec8c8a29"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "281d5d0d2c0c9058b72fdbd908f262c8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ecb245b4fd37b4a312e6af9aa4dd4cd4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "de08b3787845b69f2a16d14e28124e86"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f1710b0530874f3d6bb62ac06771ca95"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b32838b93150ebe5f0e8794e4ffd253e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "56628c17e773eed4d892a46cc73c3a4e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "d0120a86b4342d4ef5d13307f9eb6541"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "3f4baa3c6e41e52b83780baf3df696fc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2183330f51f6be467b12592398c6c428"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "73894bd75386a1060d01445573b10884"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b1ac0b0f5bd0f6e0dd0e7afb43120a77"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "daf64d566f6e0230a2c60fb6b8f65752"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "5ccaee91cf72a5014869c049d11e233f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "0e796f3f4d31b6b6762f28e09d9ec0a6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "87569b95b8ec97365825ec650f524cae"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f5fb6c486213daf6f723ae7988f6977f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "61444603f980d9ce5260041b41b1d8f0"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "4d3b92bb67594595bfcff3966acf285e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4dafe740fe6e4bbc399bbbb7e9b50c4e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b1f639c8002f9848703f4203d0cbceec"
  },
  {
    "url": "tag/index.html",
    "revision": "eec0ffe17c8b21e49c9fc4fa54c21814"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9badf33db26c39aaa4895c539b0f43c7"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f7cc3bee49f16f150e4e9c5222569b32"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e08f2f08036593914fecf1d52ec6c22f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d939f9090000b7b19d4653115bae7e95"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b372c1a699263d889aee550ae4aef6b5"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "92d87cb0582fa819e3324d97d8760516"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "03e3308126c08b3be2ed62b612ba2b74"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "27f254f40aa4e2eb9a35af9a02ab0491"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "bbae5eaef7636b99ec69f0ca7b2dcd04"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7dfdfbfa22aae10e326bd708b9721b32"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0424f4b5ce10d91e7bbdb9e1fa54d980"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "ffd6faf613158f74864f63a0d97a5218"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "695951d80e66c6ac85ac253557b3b0bf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "03dec8e346fe4f942521e7ac0e88ce3d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5b405abfe95c81f54102747a2076e920"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "703b69f59bda280a4472bdb59a9a0a2d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "dcc640766ffc0f68a40ba4920fa73ae7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "092d4625e4a6afcb1577663ddd74272e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2585776927053eaf50c560fdc2694915"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "c4a699164feec03da9bed5962e70bde2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8f55ff419ef9ac2419ca6f26271c984f"
  },
  {
    "url": "timeline/index.html",
    "revision": "c7a9d9b77bfd415d5bf4823355f72162"
  },
  {
    "url": "tools/git/index.html",
    "revision": "dd2f637e3acbc7d92df0abc70163ac5a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f3b5e59ae9fd74212894be439305e77d"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8bb4d8771c8ad88d063bc5db67c64a69"
  },
  {
    "url": "tools/html/index.html",
    "revision": "689748d4dad13d2674ecc50aa198e8e2"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bbfba3310c5630930c8d99bcd44dd785"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3814635c1ea4242d596ee98429896ecd"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f27cea71fbfbd35981e9789b23e473c5"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "57340b5500fd53efd2da7f99878cb389"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ecd7450433d0261384ccd5faa5662823"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2b49c54f9552efd81c7ed7ea2801d2f3"
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
