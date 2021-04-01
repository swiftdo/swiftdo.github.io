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
    "revision": "fab2429bb6cdb2e5bbce89e2c7eabfa6"
  },
  {
    "url": "about/app/index.html",
    "revision": "d03c80736a378ff263ca5e2e30cde812"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "534d75d0204146c975866e4261f1b83c"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bb152dc91b7f89478390d44392f65071"
  },
  {
    "url": "about/index/index.html",
    "revision": "1c283c8242cd521f968f7dd9febc52a4"
  },
  {
    "url": "ai/index.html",
    "revision": "a56902ae38058949c35b059097feed84"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0e40557917786b67acb61d14ba395164"
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
    "url": "assets/js/100.57c102e7.js",
    "revision": "916c036cb31cf1ea0fcb2cc12930a716"
  },
  {
    "url": "assets/js/101.33d4174d.js",
    "revision": "03ad99fa85bad0d04ce0b64d745b0125"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
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
    "url": "assets/js/31.efacc3d9.js",
    "revision": "817c4c734936860376419ce8bb438933"
  },
  {
    "url": "assets/js/32.995a268e.js",
    "revision": "1fe351917b0e95d2facfffd8d4936812"
  },
  {
    "url": "assets/js/33.c09dcbdb.js",
    "revision": "73413f3ed83cd09bd68922df21f3ee46"
  },
  {
    "url": "assets/js/34.1a538edd.js",
    "revision": "09901f6842517f0dfbcb59227ed30aed"
  },
  {
    "url": "assets/js/35.b8b44f36.js",
    "revision": "2df265271b9dd1c41d36effda376b980"
  },
  {
    "url": "assets/js/36.dce4cb1a.js",
    "revision": "7cb04fc5f146bcc16b8e75c9c73aed5a"
  },
  {
    "url": "assets/js/37.ec4b69e2.js",
    "revision": "19278999553cc61016e20ce19bb007c0"
  },
  {
    "url": "assets/js/38.dad68a7c.js",
    "revision": "57d7a6790928cfbb47704fe6692b8d67"
  },
  {
    "url": "assets/js/39.40fbc155.js",
    "revision": "5f5133a22defaab77e5e8b7bf392033a"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.385099c2.js",
    "revision": "63446ae6bff7c78526d3031329fc50f6"
  },
  {
    "url": "assets/js/41.37ee2e80.js",
    "revision": "c23202e310b72624f98b4553d6a73162"
  },
  {
    "url": "assets/js/42.aab870d7.js",
    "revision": "08d2d198f58150d1cbe14ac4791b2b40"
  },
  {
    "url": "assets/js/43.3f31cfac.js",
    "revision": "c8111cd350c1dd1ea7811321bb3bc8c3"
  },
  {
    "url": "assets/js/44.6f72d591.js",
    "revision": "4871643bd643e658d55583f644971ecf"
  },
  {
    "url": "assets/js/45.e9c64aa2.js",
    "revision": "a5094dab987f7290ee23cc915d5995e2"
  },
  {
    "url": "assets/js/46.510974d4.js",
    "revision": "861bf43bfdb6a5ca220500b2b80e1ed7"
  },
  {
    "url": "assets/js/47.c416541d.js",
    "revision": "a5d865c155a990452c9f0205880ede3d"
  },
  {
    "url": "assets/js/48.0b98b8c1.js",
    "revision": "b74e14ce93f0fdfb34c466a60624e3a0"
  },
  {
    "url": "assets/js/49.6949bbd7.js",
    "revision": "6a620ee4832d863426725dc4b3019700"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.36a0d8e8.js",
    "revision": "0296d80938b2f8af586c3b9b1ddae327"
  },
  {
    "url": "assets/js/51.e889fd44.js",
    "revision": "08550dec36b309e6e35fd44b930c467a"
  },
  {
    "url": "assets/js/52.eda0b59c.js",
    "revision": "3425f1d07df14ef68070cacd842da990"
  },
  {
    "url": "assets/js/53.c02051b3.js",
    "revision": "e72164b6f16bc1b39503797f528f373f"
  },
  {
    "url": "assets/js/54.2f48c1ef.js",
    "revision": "b06cbd948dd79a3af127d7011b7daff4"
  },
  {
    "url": "assets/js/55.3dc639a8.js",
    "revision": "d2db3094ee6e2d303475942edfca25fb"
  },
  {
    "url": "assets/js/56.45ada0c7.js",
    "revision": "ab1872f4072cd58f7af33825d31aa710"
  },
  {
    "url": "assets/js/57.46cbde2d.js",
    "revision": "14ed8766b392ec44b2735b4c657068fa"
  },
  {
    "url": "assets/js/58.6b2be9c8.js",
    "revision": "d9f2791b1d698dbb61c3602c61408eff"
  },
  {
    "url": "assets/js/59.901c594e.js",
    "revision": "abc0a46441199cbea14cb7e4473699e3"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.30f9dd6d.js",
    "revision": "f9d644245bf7f02e7844c63b75de5ea9"
  },
  {
    "url": "assets/js/61.d44540bc.js",
    "revision": "3d5a98217fcc2ce6ba98d54b92072b5b"
  },
  {
    "url": "assets/js/62.866d0d97.js",
    "revision": "a7c8453b014e22a9f3e2fc47ea970ae8"
  },
  {
    "url": "assets/js/63.4b949451.js",
    "revision": "613f7e0bd0ad7c96e9cc0e0cf07e04f7"
  },
  {
    "url": "assets/js/64.8d2efd8e.js",
    "revision": "10fc2ec260e59d74c8af03ef41250fcc"
  },
  {
    "url": "assets/js/65.be82ddd1.js",
    "revision": "ad7c7c6024fabd039e8227e82de28176"
  },
  {
    "url": "assets/js/66.5d201d29.js",
    "revision": "ab895867a8c566b0752aa156c14887ff"
  },
  {
    "url": "assets/js/67.8183adcc.js",
    "revision": "448f09483da70b9371c00eed4c945a09"
  },
  {
    "url": "assets/js/68.949ef079.js",
    "revision": "a67705f6ae125f8183b436f3b7ec517a"
  },
  {
    "url": "assets/js/69.92d2da87.js",
    "revision": "41efe719f66228b4f8809e5ee1a39474"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.7c2b63aa.js",
    "revision": "0b14487c409a9a1598217b42fb4a395a"
  },
  {
    "url": "assets/js/71.f36a430a.js",
    "revision": "7dffdfaa089d4cf52330f7b45541ca1b"
  },
  {
    "url": "assets/js/72.8f194752.js",
    "revision": "00cff4da3f6b49b1f5eaf8c4e6bb25a6"
  },
  {
    "url": "assets/js/73.a90aa14b.js",
    "revision": "9fa21ee1912a4060c2cf818a5ffc32f9"
  },
  {
    "url": "assets/js/74.7d4a5c41.js",
    "revision": "05b2d6bf1e1115c7898c2ade75858a9c"
  },
  {
    "url": "assets/js/75.7f0aa17a.js",
    "revision": "bcaf52362faa881ab229c1f3373959a3"
  },
  {
    "url": "assets/js/76.db85f37b.js",
    "revision": "35e802e18e86b9e61693330e4e43fa8b"
  },
  {
    "url": "assets/js/77.09795a66.js",
    "revision": "1807cf1105032009872e8d06912db758"
  },
  {
    "url": "assets/js/78.8ac82d5a.js",
    "revision": "f5ad93589efe79d993757ab088e2288e"
  },
  {
    "url": "assets/js/79.243156e0.js",
    "revision": "5478072b6f311e744690b104426ddbdc"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.fb1e4fed.js",
    "revision": "35269f7372047a0e2c81060f0a3c1df0"
  },
  {
    "url": "assets/js/81.f14dbc0a.js",
    "revision": "ce16d21babf882960b5bf71ef49d2bc9"
  },
  {
    "url": "assets/js/82.3279dc5b.js",
    "revision": "553156336d90b86358fd2436b984af73"
  },
  {
    "url": "assets/js/83.e4c02118.js",
    "revision": "d265bb6d755309499a3832aba5a85dbd"
  },
  {
    "url": "assets/js/84.465966bd.js",
    "revision": "ee71ce95c739a1d6b91d43c4d12d200e"
  },
  {
    "url": "assets/js/85.24e266a9.js",
    "revision": "aab9c91ac419994ca55539890b1f1e76"
  },
  {
    "url": "assets/js/86.f490393c.js",
    "revision": "594a940e11181c9f2759f785340fd54e"
  },
  {
    "url": "assets/js/87.dad1bef5.js",
    "revision": "4e24c4dabd1c4833ccf873e1a2392b0a"
  },
  {
    "url": "assets/js/88.4f70ae3d.js",
    "revision": "c0ad51306b4f49f8adc9fae376b7550d"
  },
  {
    "url": "assets/js/89.e6678e69.js",
    "revision": "36f9ba048cb7e4a9855729e975319e9b"
  },
  {
    "url": "assets/js/9.08a30146.js",
    "revision": "3d33e7a0983680eb33995a9f1b3cd4d9"
  },
  {
    "url": "assets/js/90.0ca5d920.js",
    "revision": "eed333c1f4835ac9c6dddc74613bca9d"
  },
  {
    "url": "assets/js/91.c3e5e097.js",
    "revision": "2d031dcea600fdbba05f2abb03aac381"
  },
  {
    "url": "assets/js/92.5447f460.js",
    "revision": "0c12259788b3bb8132b248523e7511cc"
  },
  {
    "url": "assets/js/93.ef52c317.js",
    "revision": "6d147fd06cb43a9639885e29567f2eba"
  },
  {
    "url": "assets/js/94.e51ad8c3.js",
    "revision": "444b3338c0212779b713f22438744ca0"
  },
  {
    "url": "assets/js/95.b41a8331.js",
    "revision": "66dd04f15eea5650e39f535eb4a12f5a"
  },
  {
    "url": "assets/js/96.59bbe7d6.js",
    "revision": "530b487517e5857c5ab4ad8315db331d"
  },
  {
    "url": "assets/js/97.a81555c1.js",
    "revision": "eba3fe9b335e03c82ff62c7865473a84"
  },
  {
    "url": "assets/js/98.152913b7.js",
    "revision": "93c9dc1887df029dc5afdbe47c37ad08"
  },
  {
    "url": "assets/js/99.bd112328.js",
    "revision": "21811e0f98a8bd905d34ef3eb74bc8f9"
  },
  {
    "url": "assets/js/app.dd441edd.js",
    "revision": "c43f008f0147c22cb724d6d5e3202c3e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "5b5c2378262fc9c57e82f8b5632f8bad"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "189983e12e83ceb56af1eeabded75ff3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e62aa872315c0ddccfabaa3fb16e797e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8f499cf64017adb0ffc22f9f634a63d9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "75f68a7c9af389dfbcfea83b45e02ee1"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7fe1ac8627f41bb3d480c5e9e11d88b5"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "753a84692626a870a8234e2afb95884e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e1f27f8fe3d1ae750f2083de27d5e458"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9454c1e000423ac237f0831734f96871"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0a5d9af4eb472675bc8f927db0de1a23"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "580f002a26a230dda9e52b504132deaf"
  },
  {
    "url": "basis/design/index.html",
    "revision": "122b351bbc2662add3776994d864fed5"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "7ec72e8201a201541d26665b4087e588"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "7c5a1ef76d7b9ff2ef9722b55d811c40"
  },
  {
    "url": "basis/index/index.html",
    "revision": "fe1147e4d59ff369558e1ce96359945f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3e64cf87cf6ffe1d5649950a13dac219"
  },
  {
    "url": "book/index.html",
    "revision": "664a5db4ddd7e99891dd561e4043eb8e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "13d7fe6ac6c06b0c59691f5ab1d97cc1"
  },
  {
    "url": "categories/index.html",
    "revision": "bc201e6e323d53dc32d4677eae0aeb0b"
  },
  {
    "url": "figma/index.html",
    "revision": "af64f9778351114c5492f95a4113284e"
  },
  {
    "url": "flutter/index.html",
    "revision": "58dce7f51c244a3aa4d8a8962a392791"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "acc4a5c0b80a6eb287a724692d801577"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "528ddfce0ab688218f3b192570f8a032"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "df66ee9bbd7290824b5a34deee8514e1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "a90c850a6bf065a639c418642043449c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "292bfc175a8b9610e3688fa955663fb1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b2c095a391e557635086f84cc4ddc8a0"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "efcd3b0da1fdf031da0d8f1ddfbb2f65"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "4ea1f1e597c3687142dd71e10596ce42"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d4065d8c7b711d09f8367905c3f9b363"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1b3daf6b03429dd7411fb8d9ab7ec6ad"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "ad6d4c283a9b736a90719d3a845ee391"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e1063a0d93a0cb821338775e28684cae"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "42ba03f25a9651df2ba0009bcc9496c9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "5eb5abec3b57a3c641d9decfb7005979"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a1552f1a17f8f18b58d80db3a6995ef8"
  },
  {
    "url": "haskell/index.html",
    "revision": "a5776ec11ff49d21f750362c297d1c0d"
  },
  {
    "url": "haskell/t1-install.html",
    "revision": "2875a827100ec3c6912d8a5e5edb0622"
  },
  {
    "url": "index.html",
    "revision": "95cf6a9e70beee761165749b4dd34b88"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "9ff7ba9b209e35fd50bff9e85a5ec523"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "e22df26d7a254e27ebf22c9d4a711ba9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "aaec8b8572a8802f255c966e6cf96cd3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "709c1d2287ee1303ac334921205bdf05"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ad0c1fa500abdfba04a56067a14b037d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "751cdd932f498bce5177eb4ba91f410c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3794bb64e31fee69862443f82666e310"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "ea34c481d58b566985b7301428b70859"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "4f3773be6e2a233c44f51301d94e6e64"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "dbeb97d67ac5aa6a92edbae1703f782e"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "db46244e8bd1e479d34813454cd23bcb"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4e9451a28b7403cf94ae95f33bd516cd"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "bb994f2947eeee63384b673c6fdc0677"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "bff23eda26089914cd5d433b3c9c6c40"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "1037d645c0340655cc9113fc32f2ecb7"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "b0a83668072cc38e0ae7c4a5403b01ed"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "917b2c7820581856e50d9dd4bfe264f4"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "c3203b5d9c6bfc51af216e071fc5e1ef"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5bc5c7375630087b5aae7450afd50e08"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "add46739eadd38ee3e8df51ef809f635"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6d936d35166fb5605a450f2e9e2e51ea"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b05af613bc45001313a5e9b3b7cc8c27"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "083024274ff4437e35ab5180238ed918"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "709d51589add8e54c718b6a05b1c958f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "062834ae8a46d400702b8f95ac4cc1da"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "08e3ad72bbad376e44bf12980d6fb0b0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2de2ac5469b7ad8221fc53d1df3c2d9a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "56a95d17b025d4c2def67b139ba8112d"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "a7c82f6f83f29b295fa319713ae210ca"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c0647930ccd84b529abebba120331c4d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "93583191a37a80330e8b0177f7e181e1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "44698f199a52a1274b3ecb1c95c82ca6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "3e9c1899426ed91d6904485c34b77c39"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "dd0d61a9577f7269e53008dd73b77e52"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "33138b083c64627ed557e977e884ed6c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "32b2c9b15f62dc7b00ec566811e2d436"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "9f3d26218c38d70fa7404d1143685557"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3158415149d6351208f0f32dcb4f1ec1"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "e72a4d01cb9078a6ebe21bc20c5f725d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3a2ad7412cc686f58f6043ae03dd1c6e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "67de336451ea4a55ba4465c74c42ad53"
  },
  {
    "url": "tag/html/index.html",
    "revision": "66f8297d7afb27095488feb1ea6a0dcc"
  },
  {
    "url": "tag/index.html",
    "revision": "69845746a373f7f451131897c4617dd7"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bd655fbae758cba36d110d7557223aa9"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "29c6888c29744545c66c99cc54cbd752"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4e1a833281f8c37bc995868b9786d10b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "84543958eccd75631a5252308b6bc4d2"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2c5dbdafab8764b819f7e0cfe2a7fd79"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "7c3e6e8bd7d7b22b3d8f12a9afe55df9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "25db4d0d902c5860b6582c4f4431bb76"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cd77c33d0356c7ceaea201aabbecd8c0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e728763d28cac7922f0984e8694dc58f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "a9bb47fa4d1c443b14b65f7f4807d69d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3748eaeaf8bd2776d17ee234afe2f2af"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e9cd296536f80921e20f9ce1ddd3cdc4"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "d7c75a98fbee19c93307d4ea402786c7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "78e0b7a0230c748721e5b62a0059aa3a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "34248db5b4b9fc88d0d5f988a6e11cff"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "37b120b5fb23674b25b19b4c28aded07"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ca2ea7cef6f897aeb15bfcea9a36888f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5cbada5ccca2eb747c102b951b6369ba"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e2cad763564911a23d9d86f459640fe4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a314fd5f220a96b822c0b8035d022a4c"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bc7087448bf3a1ca47cd917e6269ad77"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "15fba3b4a55a5280cfdbe9bba4adffab"
  },
  {
    "url": "timeline/index.html",
    "revision": "302cf79b5fe3cdf597b725aa6ba22ba0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "496c0cf67e6570f25f69edd55904f72a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "74ec37d31ee681f10cde5d6a7272237b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a875f529aa4c4d64af62939ea3d61313"
  },
  {
    "url": "tools/html/index.html",
    "revision": "42f9a6dc6be047ade7252a850ffa6c8e"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "786f57385ad9da5cb64b77668bcfd707"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a1b5cc62593e6d434ddd877ee3208dee"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1ed959dd0034ccbfaa668255b0cf97fc"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "168a52cd3035aa47e8d2597f4ef394d6"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8d2d437b7f1b94037fbc8c52a251e1e1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "927801a7bd4af77f3525ace7e40ec63d"
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
