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
    "revision": "a573bc9c7179b5f66ff64555d7b8e6ee"
  },
  {
    "url": "about/app/index.html",
    "revision": "029affccc1a8789b18b4379e0def9556"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "236f294592fa82850b318626b215bc40"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e233a56e94b5267f8520208c988790bf"
  },
  {
    "url": "about/index/index.html",
    "revision": "352025d75e452f049ae32b635bf743e9"
  },
  {
    "url": "ai/index.html",
    "revision": "6607987cd01c7b52f8749510ed6b7017"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c09126860cce1fca918ae9b5bab5397f"
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
    "url": "assets/js/54.cc6fe6c1.js",
    "revision": "bc7b6fd050d8d28718c8373dc2df1c10"
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
    "url": "assets/js/58.d9919cc0.js",
    "revision": "49d653aff54f3cf728d42f22db3b46d8"
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
    "url": "assets/js/60.3699aaf3.js",
    "revision": "f7d4401edd93bb069aaa994ca875a730"
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
    "url": "assets/js/app.842aa2fb.js",
    "revision": "77d85694011a638601273057e0b0cf24"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "729fcfadfb3590b15d20dc7d741e2a88"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e917d96a21f7f898d9116a4131dbfe28"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "1f968f2cf1ef33f32a8ec9e42c8761a3"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "53544cd5a6ad870a70fcb9a31d832f89"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c774da1257ad29ad190524b6f001d1eb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "50471df1b3d63a09651588af52171709"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8becd0a00516e64560c50086d60ce9d4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "bc63c8b5c242893ddf78902bf0e0777a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "2ae27c79b1835309299eeb22f7b30b0c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "93f5a9753d83e0a9cd4b71adfce05202"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c346a5c78a48faa549f6dc1ace137c2c"
  },
  {
    "url": "basis/design/index.html",
    "revision": "69134e0063b75e35714e9c0689edfa93"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "9bb0793d3a1aa4b5f23eca48d1bff20c"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "3eb220fbf55c9278ecf5a24205af9ebe"
  },
  {
    "url": "basis/index/index.html",
    "revision": "48d948fe5c89b1bcee1132033087aa67"
  },
  {
    "url": "basis/os/index.html",
    "revision": "4bb53f83feb75a43aaa230b4266a4dcd"
  },
  {
    "url": "book/index.html",
    "revision": "cca697fbe79d3e35d2db6b0cc92259be"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ad8adebc9be822730c6d0c93dbf20bff"
  },
  {
    "url": "categories/index.html",
    "revision": "eff6f064b267a73cac0523987965ba84"
  },
  {
    "url": "figma/index.html",
    "revision": "dc75356c2da448d4adb1360c600bb051"
  },
  {
    "url": "flutter/index.html",
    "revision": "8bfc6845e70e8c13604e019b609ab6f6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "6e4e228e5f4d192b0a2e59792e3c7bc8"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5d16a9e9f6ad9b40f0840dacd9e4e269"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "28d1315b036468f1c1e9b0956d351e2f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "78371aedce78ce082fbed6972bb2d60f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8e8cfd26edcbf2a5932e2e4bc5ca6780"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c058d91c83a735105e8b6d60a6dcba24"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ab20aa7ed8be59ef5898a2f4bba07d76"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "12bf400dad5ba7077729ee3eec7e1646"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "af03a220cd453e29ced3d788c749f397"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e5d8237b753a31c719212fb6cace8376"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f63d29302483d2cff7853f15daaf21c3"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e3bbc4016dcfe96bb1c8e472fcf82277"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "1857fa201488c46036a31a87f8d046d7"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "1e417269c0bd6128dcfd7cbf8d9a3976"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "8a55c7420721381413d86c421764a367"
  },
  {
    "url": "haskell/index.html",
    "revision": "b44f3a113439e7fe97bba59c7b09957e"
  },
  {
    "url": "haskell/t1-install.html",
    "revision": "b5fc4d5b9f44705d7363d8875db227bd"
  },
  {
    "url": "index.html",
    "revision": "97b9de577895d8b90df2b2228a12b191"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c143b4fd8c796b46b4d0a4a957a2a801"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "79aca11485db831d86d242c11dbac832"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5dbbb24d70ebf56cd6c2f68c27d6a803"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "952f4eb30848d05ac4908a67a754cc61"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3b52a45d4913564b9794dbadd1d776fd"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4273c242160f4f9289b8a5dc33673ef5"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9809f9c62b14c74b21cec534e5c40c00"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "1ac18be04a9d1f8c56a39a3ff8f5efac"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "1dd37f4e8ed8f7fa9c5791a91279956a"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "a1b721d8ec475eee8bd1f244124b5e50"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "d6ceaf7a3827034eadf65519a5372677"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "9dd2c3ac9f43b8c4c59d9090af76f6c7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "53e3d61579115d6e4487ac19b7a1e668"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "4adbcd2a38a6026a23652b1cd5d79be1"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ca9b5bd99b63e4eec8c0f66f63c5ba13"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7dc853600f4963dc97d2f25dfdf64446"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "40ed78e38a1f49f6cb362e0acf0343d5"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "19e87d4ec01737b5c124715a16e802e5"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "8f957108c002fdf9142ce44f68315178"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1b2e85b833bf2a5ac6b63b8edd1b7813"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ef8157ba2f1f28d714cdc8a11e129d18"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "74cea1f244a980f1902684b597f500f0"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c5ba409a452ed4385c3bfd9dafbe9ebe"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ec0d2ad56341b03de7decaaa440b8b42"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b66e9fef6991d7f1e8a004ee09fd711b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0c84dcede65d4f91492af71fa30a776e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9aa4f95a49bb3d08473044e9b5def288"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8d5264c1c5c303e26768068a6a5c0d3e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "637c7abd0b8c7206f4f45590ca2a3060"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d20eec10ddff774b7cbdc70de3b51ec2"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "f29ddfb8d6df491b3aceccd83610ab5e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "82e38aaf5a05396e1fd4386c79711782"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "57a2877926abbb7c2de26c9d8925ad93"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "55423f5f939693663b761f5636236e8e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "43e86d15b2b58cb241123fa4284a384f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "8b2007d510a2da73d38819bc0f6cf433"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "aec3676912912956c3db9b4f4f8eeb00"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c8d99e722c726d5f25dddafeeafed4fe"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "33fe54d94ce948b82c02702b285d884e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1952657d04d849d1117b3d554bf75ad8"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d01201d2f0e5bf4eecc9d6fca1de8b1b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "acfd94f5fb184e35a3fc690b6001b883"
  },
  {
    "url": "tag/index.html",
    "revision": "7373b68600eaf48508d5159a757ab841"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b903b435662e1e320975d08a554ef2dc"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "319bb0769e560ef2e193256f7a75dda3"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "371dd8ffd797dc915dede3f2254683cc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f6dc1c67326c13845da4d3dc9f7252b2"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "76730dd8c7adbae3ee3b1ed5af36a4ec"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a8c5c87398d0800cb4b117c8ee6cbfd8"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e56e5c2e90457ce6940c937cfe5a203e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3d9b78b9dc3951550d0a95d536e85573"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "eb46c035a85fe3c489bedd3527f86974"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "cfb2af15bb951bc0b82f18818c17a874"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "af9895eef01466c9aa896e835ab37e32"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "251cba212d2071c07f717e5397fe1aaf"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b3fa585062c34a4694d24be87188e75d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "db3c2a224ccf00e18d2104bad56ac776"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f0679a741724b40396ce11c1162a94fa"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b5459f4840c679cc63f445262090890b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "488d5557ab69961f575a4b3d6c7dc0b3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "477406b0d134988c6f3f85e81b3b717d"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "61858038aace85be807e90694839c4e9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6d8bc223d6ae939390e655f67ee32a07"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a70c9377ae03b11f6f12cd3410a29d2f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "dbfd121519c2d4f15530e1d3b5decfd4"
  },
  {
    "url": "timeline/index.html",
    "revision": "c0a47b04205ea4d29265eca0123bdbb2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "46106b90948f02b503bcb6c790880a76"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f6bf2c9f8577c4961c0c108566e7e46e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "d2ffad85cdfc09dc32024b8e1bad0867"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7ff24e8609f77c7d5a7e0a8242a6df4a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ea052f7033f42f2c6995365a7548a813"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "1f50269f435fc914e646b51111b9c18e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "069b80c249c6ecd4d17914582174fcad"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "74feef9e2cdfb9699b97d465c665902a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "34c60453ba408d3e1737d0bfe0d53d04"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bf6ec383b5d7b4bc7c744b026bf09d50"
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
