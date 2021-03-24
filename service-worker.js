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
    "revision": "f5d315567bc4fb405c240c1101c5bc58"
  },
  {
    "url": "about/app/index.html",
    "revision": "8ab67f7894afa6524fc45e01c04d2a2e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b8e252f82b789026cc69b0a1970f9661"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "edae88196729ba3b8b285fc00b6bbebf"
  },
  {
    "url": "about/index/index.html",
    "revision": "ad1157fdd9a55504ddd99199b2dce213"
  },
  {
    "url": "ai/index.html",
    "revision": "e5e718b6afa6ab5134516c55627fc58d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a6d60109ce150a36b0b2dab78ab3e695"
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
    "url": "assets/js/53.e2db8262.js",
    "revision": "296fbb5e3918210cba914efeec55c43b"
  },
  {
    "url": "assets/js/54.766490c5.js",
    "revision": "a0c1396dc0210b85b54507a457f93769"
  },
  {
    "url": "assets/js/55.8b622a47.js",
    "revision": "a2c69e0d913c70f7f753fa9c1395639a"
  },
  {
    "url": "assets/js/56.24231166.js",
    "revision": "f4f3d842130fc022c17ef6c9a0294f25"
  },
  {
    "url": "assets/js/57.ce01f800.js",
    "revision": "5e9e262d721492fe67b5f454ef8bf356"
  },
  {
    "url": "assets/js/58.28527c3a.js",
    "revision": "a157e2de745f61d47bd911caf0f7fb55"
  },
  {
    "url": "assets/js/59.5d4e7b3a.js",
    "revision": "e6c13ec2f4b9ab247af6a0a05b04f05a"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.2aaa9ed4.js",
    "revision": "ae24824a3bca25139aa3b5a292d79da7"
  },
  {
    "url": "assets/js/61.449cc42a.js",
    "revision": "c70f17475ec73ccbb17bc5698664213a"
  },
  {
    "url": "assets/js/62.c34d7232.js",
    "revision": "f7fab2e9936281d1816eea1d05050efb"
  },
  {
    "url": "assets/js/63.10aa5cb7.js",
    "revision": "2ce29ebe58b616a131b5371ab1046b09"
  },
  {
    "url": "assets/js/64.865ab65e.js",
    "revision": "e84a82dc74204d5cf308dc9d4f06f49d"
  },
  {
    "url": "assets/js/65.443e3813.js",
    "revision": "82f367ac15f20461077b88572af66543"
  },
  {
    "url": "assets/js/66.b742b5dd.js",
    "revision": "e096f0fd2ec3a2caab2a462319c56770"
  },
  {
    "url": "assets/js/67.59d56fb5.js",
    "revision": "e56122c84a9b8659b5157c5c740a5a5b"
  },
  {
    "url": "assets/js/68.5b228c42.js",
    "revision": "45873b6986b3dd76aef06f1d61798554"
  },
  {
    "url": "assets/js/69.555f90af.js",
    "revision": "7d519ff2e576d203367870063cafbdfd"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.e2586cd7.js",
    "revision": "8bbbc269efbbfeac71fe99c6ff414bde"
  },
  {
    "url": "assets/js/71.e381cdcc.js",
    "revision": "cacc68d22195db93318e5d5baf29600b"
  },
  {
    "url": "assets/js/72.590fe590.js",
    "revision": "c2c1bb608f355ee250e50568df191b18"
  },
  {
    "url": "assets/js/73.c8ca3436.js",
    "revision": "fb6862ede364264840c45565fb5b408f"
  },
  {
    "url": "assets/js/74.63b06f47.js",
    "revision": "deab4644a202097b7159ae76eac464b9"
  },
  {
    "url": "assets/js/75.2270f82b.js",
    "revision": "b26d78e33c76d1f22b07fbacdcf6a083"
  },
  {
    "url": "assets/js/76.755184c4.js",
    "revision": "83ba792f41cc9e0cb0c5bdd2e01281f0"
  },
  {
    "url": "assets/js/77.ef8e0bf7.js",
    "revision": "138affa57b927bbbfa35785806875a51"
  },
  {
    "url": "assets/js/78.335adc55.js",
    "revision": "9cb83b6fd9bfa752a365bc48995ab456"
  },
  {
    "url": "assets/js/79.e0c52f6f.js",
    "revision": "16307e761ae1dc2ea7bba481ab409f7c"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.a3c3f86b.js",
    "revision": "5de4a791a6cb3885515072d674c60e33"
  },
  {
    "url": "assets/js/81.226b8258.js",
    "revision": "b2e3c33682c4900f828069b245ff4075"
  },
  {
    "url": "assets/js/82.f325f51d.js",
    "revision": "6bfa114247f887f728b141119e723ed4"
  },
  {
    "url": "assets/js/83.9479b0da.js",
    "revision": "230b4fd8874d7428e0393318064bdbda"
  },
  {
    "url": "assets/js/84.d8a0382f.js",
    "revision": "dc258f298c0d20cf182f05e9cab3a26e"
  },
  {
    "url": "assets/js/85.a066350f.js",
    "revision": "94340fae1a1fc10c649ae7caa620a91a"
  },
  {
    "url": "assets/js/86.258cd1db.js",
    "revision": "dde3398cafd3ec1fb850d490892c2fae"
  },
  {
    "url": "assets/js/87.20e93e23.js",
    "revision": "6d55419410705e1741c67d7f0d8b039d"
  },
  {
    "url": "assets/js/88.816f0198.js",
    "revision": "1a84cf3228cd5c2148e83460c8a53c3f"
  },
  {
    "url": "assets/js/89.707225aa.js",
    "revision": "1664ccae80febce85546422e14f0c8a9"
  },
  {
    "url": "assets/js/9.3bd8f2a0.js",
    "revision": "0e248fb8eb83aaedfe0e6c1f2301e32a"
  },
  {
    "url": "assets/js/90.52c96388.js",
    "revision": "50254475f81e7d0a83c0e622b34c699c"
  },
  {
    "url": "assets/js/91.2b2a449d.js",
    "revision": "24c36ab769d70f5b48b773777469dac6"
  },
  {
    "url": "assets/js/92.e8eaa636.js",
    "revision": "2e5f9c9e052ec163f91fc352befd3393"
  },
  {
    "url": "assets/js/93.e4712bd6.js",
    "revision": "c170fb5cef037dfcb8de2cd8b7e04c37"
  },
  {
    "url": "assets/js/94.8dd6772d.js",
    "revision": "9871206a5546901ff17f5de128292f06"
  },
  {
    "url": "assets/js/95.fc93660f.js",
    "revision": "b3ca4611377bd4b7782d7e5b03144fc6"
  },
  {
    "url": "assets/js/96.b5e3525b.js",
    "revision": "c009149ddf5e9591fa436ef854a03de8"
  },
  {
    "url": "assets/js/app.ffc8ddef.js",
    "revision": "0ed063048c5e3a7e46db02c59610af70"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "9b4e2c6a5513396317ec82c881251f54"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "103e2a6f006d2ab2d3f07ead71d98066"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "bf07cee3765e95b9475611c66534e163"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "538e08aac2f7cd36817bd9240450301d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "9101efe272a71c6db7d16aa3c971e818"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c14f346634bac8be416ff70ad115e4f4"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3e714833421c704c348368a86fd5022d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "8a7c10f3eb199127f41e06ca93a56163"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "02772083e8b8028172ed763c6a7ed10d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "135d442feb4bff7d3303f74e8d5f989c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "62a4ae83392efd466d78e35f4816a7a0"
  },
  {
    "url": "basis/design/index.html",
    "revision": "7df7583906bbf44d5fcd1515999421d7"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "104f35f43cddc519fac39b746c4dfc44"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "202f68ba377ab7317c19ab5fe84c1e47"
  },
  {
    "url": "basis/index/index.html",
    "revision": "448aa7dd46a4085eed170bf176eacfa8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "296902dcd1c21fefa19a6e773214e98b"
  },
  {
    "url": "book/index.html",
    "revision": "21cc2869e73c599f6d99a97260ff6e2c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ad01cb9d36a74039b1370bf9a0df2ac8"
  },
  {
    "url": "categories/index.html",
    "revision": "3791dd946ee549f3e7c09d9091f36480"
  },
  {
    "url": "figma/index.html",
    "revision": "3031fe3e7d137878e7d006bbc8feadf8"
  },
  {
    "url": "flutter/index.html",
    "revision": "c3d430e13d96a91abb855575e33eb240"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d51c9dcb33280791e99f85e0eea5acee"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1e410c0dd0f5780178c55b2c3a141233"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "90972f75b38dfecf4c15d6667926a1d2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "a8a38d6fde80017405e3f1e7d6fde928"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8936dcf22e4aa9f65071c75a386197e0"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "10a3b72f6f4665a2f9ecf7abffaefa79"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "81b50a7067d5458f995a1974096d59aa"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "9765d8000b439208d57cf5a787aa258d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "6bd717c40d897fa06f0c5b5898edb9b1"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f77a73ddd6ea3d06b4616efcf28728cc"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9157af7ff8a62a5016fe122acb1dc586"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "80807960869613ce737422ee831c4f4f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "2ba812efbdfa58f904dc467be77c781a"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "efd329b5ff5a2d5f6fa244b473962ba3"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "0a51fbe62ad24f4998c4b96fd0a44624"
  },
  {
    "url": "index.html",
    "revision": "c00c4b11152e1d33412b6ce91c7fc955"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ad023919e1d72ff46a08daadec2e756e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9e645583a17f0564a5bd25d20a62ed27"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "31edb00cf9eca9820558d371f3831df7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7bd5d6a96e9fd26ebdec61844643eea2"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "90b11888e110dfe231a86eb10cc2968e"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "d15f5b4875826b72c508655b21747742"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "4c4d2a16300523db9a43ffa66359afb9"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "2085bb47017fb45869ecc488fc812ea1"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7d373d1eaedf390ab5ddc4985d9ae85e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "308f47c804c9a6b7079a1ec0479c3326"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "098b69e0955972b70bfcb4148357ce1e"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ea412cd1757f9e7a621f04b7ac336660"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "b62c1c1d99564147b77943062cb42105"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "70427a62d5872ee8b5c4a35b584071a2"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "9eb7edc6c3da7c7d642845aca9eff6aa"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c206cd0bbdced2aa27912cbbb33798e1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a40aff9405876cafff6f32dc1d981c1a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "fc2a96786924be898437d33e150e1fdd"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1f08da79bc8210437bef5bfcddc39528"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "077e9547fcca903261742e173ae35fa4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "6fefb8221154a2c8f2b203780066ace5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "927430b2bce97d4f1a7c2d6f9074ace9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8ac8f13a87f61e0db956ba292372907a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "da351b607f5cd3e48e1d0494cf21fa95"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "41ac5441ad60fae6f91e2d2d794a7a6f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "825fe0e366a435fe09b794d08ae98b28"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c87e1d369d48192619db024e59f5d9d2"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "8326d3c9acbfb232d52bd6c62e75da3e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "087e50e709378f090ad942817c3cfd94"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "aa5b8d45ffb2307e65593bf5945a1254"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "de340b6ff95ff59aad3003d34bb6bfd1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ddb48d88bc59a04657cfa72824ce28f1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "96784629ac757c3d0eef3eb4cb51eece"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "2c91400ae4a2d326be95d1b93b995820"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d360df0edc6aefbc5ffd81681bf7cfd7"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "cc7bd347acaa3f21f6e2cf118731f7ec"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8d6071308859d5a590b86da1f9263cf3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bc73a28f6ef92dfb497bee4ba55f7284"
  },
  {
    "url": "tag/index.html",
    "revision": "7d41915ddd045794dfbdda92756892b4"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "81ddf55c5bef5ea731972962b181da0c"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "cb5e91c3ee04385e466724ed1b2f36dd"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3ad50e6fdf2b9aa43d7039c5f2a6d817"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "0ac81887efb39097c8d91a9f6c75dc2f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "1fbaa1b89b6ac57202c9cd79a60dee18"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "733e4a1de3ea39aa6f741f5c1083fc69"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "68b721306a428ff6696e8fceca2a9150"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a7177964ae355978017e2267e7bf05be"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "2d91c30d040bc9ab019559f76f95548c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7e13add05b82d87301abb7e886ed462e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ea400e45e14367e9392a60dc69af9641"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e204beb55107202db6dade5370b3e3d2"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "2025d80a0d7868822aa4a7ef9505be9a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dd78ba8be20905d35ffdbd758e788c73"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f6027821fc0798eceb4c3389091db39b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e3c7b88788366230546a81d2e0ca7f20"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4cd88f05e32fe58b1c8277aa4b05e066"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9e53104452391eee96f82f1ab3471240"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "83f6e6996fecd8ca3db6ec89ce62c219"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b808da3540eca43bdf4ba8c7744e0830"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "c4824e5e41c60bda1110fe5edf59c2cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "38ca3285b5f5f5a3ddfafb662e1452e0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "29003e34b939d06e59f6ebf0970f4e25"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "47fd2e1ddccb4828043fa61e7cbad51c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6fdfeec8d6556f44550baeb980085618"
  },
  {
    "url": "tools/html/index.html",
    "revision": "97e4dd4a8d12a012ee6aee3009bd040d"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "012c2a067c4a9f374f6b92b688c52b07"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "bb98402fbcb93dd87a710e243fe87c6c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "06742a8128be3c9ce30e6df9581d1b70"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c1c5f4d0710072689fb320006b4969e6"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "86309774b06a452b99ca6064f901f9f2"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "61644040b88f0cfce51da2c93caf1bb6"
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
