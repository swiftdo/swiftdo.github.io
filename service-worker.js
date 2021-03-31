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
    "revision": "996beca956d11ba6aec0dc18f2764757"
  },
  {
    "url": "about/app/index.html",
    "revision": "b5c02e0c8dbbcf6c71f609f1ae48b7e7"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1d26667569f8a75f37ccecc9f5136786"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5e8d1781534983608a65c5953e4ee48f"
  },
  {
    "url": "about/index/index.html",
    "revision": "a237c8bea42defd1c4ecd3d2a41cce0b"
  },
  {
    "url": "ai/index.html",
    "revision": "c7d3053336e1a8d420e69b3a5bd92747"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "5e4ab4d7bbbbdf17c8531e788fd46cc6"
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
    "url": "assets/js/53.76d16a15.js",
    "revision": "03141d7fe521ba9288e0b48815b37451"
  },
  {
    "url": "assets/js/54.9e68267c.js",
    "revision": "80b1f81ad5dbc0fe310e2ba98c59836c"
  },
  {
    "url": "assets/js/55.a890fda1.js",
    "revision": "ea236acc26fa3a9450c838bfa4a71b45"
  },
  {
    "url": "assets/js/56.e9a5f827.js",
    "revision": "62f63320220a507bd7555663c2aa8c41"
  },
  {
    "url": "assets/js/57.68884b81.js",
    "revision": "31bb73a47f092f5b91ac09ece4d62391"
  },
  {
    "url": "assets/js/58.affbb267.js",
    "revision": "74db96c9793ff4a299c1de16ecf22a04"
  },
  {
    "url": "assets/js/59.db70aa24.js",
    "revision": "2d325a1277743032dfd5e8817b574464"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.39cc2392.js",
    "revision": "3115d5cb0f81d1b0369063469f2b67b6"
  },
  {
    "url": "assets/js/61.d5904686.js",
    "revision": "c0851a4e312bf699778b0a1ac19b8b77"
  },
  {
    "url": "assets/js/62.98ac6937.js",
    "revision": "0fbdf2900f628f05df4ce6f8ee08c0ab"
  },
  {
    "url": "assets/js/63.77b42cd5.js",
    "revision": "57e3b0a393291d98c64f24cbd1f4a166"
  },
  {
    "url": "assets/js/64.1c72acf7.js",
    "revision": "49d5b7f01b85528f98891249fc9ac422"
  },
  {
    "url": "assets/js/65.ae2508ca.js",
    "revision": "e769890157d1b2afe89b00e883bd6e01"
  },
  {
    "url": "assets/js/66.ffe10fc5.js",
    "revision": "dcea3939e101ce55265725965afb804e"
  },
  {
    "url": "assets/js/67.0adae816.js",
    "revision": "6427135feaf5daef16c4066effbfde02"
  },
  {
    "url": "assets/js/68.921d2b52.js",
    "revision": "bd78f8a4b470e04931071d66c5ccac34"
  },
  {
    "url": "assets/js/69.e81ca460.js",
    "revision": "6fa83a29cd8255bf3f4887040f9a0ccb"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.94f0a15e.js",
    "revision": "14ee7b5c26c893aeb22545b3b60d25a1"
  },
  {
    "url": "assets/js/71.53796c90.js",
    "revision": "2c141c0379eaf2be8ab2a02c888d53c8"
  },
  {
    "url": "assets/js/72.81644c3d.js",
    "revision": "acfa82b927463caaea65022e208ad57f"
  },
  {
    "url": "assets/js/73.c78b6e9a.js",
    "revision": "82715c9159eb756f957679475654c835"
  },
  {
    "url": "assets/js/74.0fc09f90.js",
    "revision": "dab7d382d7358f9c58648d2659763b4e"
  },
  {
    "url": "assets/js/75.ee8c0cc0.js",
    "revision": "d38b6ad22eb1e681c1263a1c99166121"
  },
  {
    "url": "assets/js/76.152bf320.js",
    "revision": "78a2831a53d60d6bc34135b75467835f"
  },
  {
    "url": "assets/js/77.35add5d2.js",
    "revision": "ad607e0974512ccb0e98bb7df22e240b"
  },
  {
    "url": "assets/js/78.8e8ae573.js",
    "revision": "f29ea3c5263430b64eada154667ebfde"
  },
  {
    "url": "assets/js/79.5ef27320.js",
    "revision": "b236f5912f23f010a091e79f95054fa8"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.e2de7ca8.js",
    "revision": "e377ce765198535336f9e7effc5145b2"
  },
  {
    "url": "assets/js/81.dd8311e3.js",
    "revision": "abac1d9aeae861410f9a9d8b40e71c71"
  },
  {
    "url": "assets/js/82.52878905.js",
    "revision": "7a9aa8aee9ec412e444fbe715b3bf5bd"
  },
  {
    "url": "assets/js/83.95cdadbf.js",
    "revision": "02151f3384a11c463d5074e1a25ef22b"
  },
  {
    "url": "assets/js/84.12be8bdc.js",
    "revision": "331b22496d98316a2a1ee7075698a195"
  },
  {
    "url": "assets/js/85.2e972c04.js",
    "revision": "503ead96c361b1d5cb03e6479bc6368c"
  },
  {
    "url": "assets/js/86.6805b790.js",
    "revision": "23d776a7b831999165bbe8ca7fe863e3"
  },
  {
    "url": "assets/js/87.8061cf88.js",
    "revision": "52f2f0221db0624cac236c5d11b69a6c"
  },
  {
    "url": "assets/js/88.6e2f28ff.js",
    "revision": "0834dc257d562c9b30dd4ea19305a00f"
  },
  {
    "url": "assets/js/89.cd4ff1a6.js",
    "revision": "6d12531af0cf36e8a8da0d55c46149da"
  },
  {
    "url": "assets/js/9.27f1a4b5.js",
    "revision": "88fddcd7823466e71e88c0c9a11ee974"
  },
  {
    "url": "assets/js/90.9f1999c1.js",
    "revision": "1d32d4842dd7923a7d5ef09a431f294e"
  },
  {
    "url": "assets/js/91.5059f810.js",
    "revision": "3ce16788cbead3b55e546d3c83c6b546"
  },
  {
    "url": "assets/js/92.024734db.js",
    "revision": "18aade874c133af5633303d9377a2d6c"
  },
  {
    "url": "assets/js/93.ec88dd4b.js",
    "revision": "2880c724a31ef93dbcf7050c429fdec8"
  },
  {
    "url": "assets/js/94.a99e83f1.js",
    "revision": "476aa5a44bdadb7cea37b519a94528b3"
  },
  {
    "url": "assets/js/95.d94acc5e.js",
    "revision": "befeb21a8f0511b3900edd915bca1125"
  },
  {
    "url": "assets/js/96.426a82b5.js",
    "revision": "3549bcbf45df80dace95bd0112c9388e"
  },
  {
    "url": "assets/js/97.e308a7e1.js",
    "revision": "8a05b2db4f0b310ead52164cb63e1858"
  },
  {
    "url": "assets/js/98.8b79e1fd.js",
    "revision": "b9911f10127822003a2b04ec85da9f80"
  },
  {
    "url": "assets/js/99.7f3df676.js",
    "revision": "4767204b088d7df298269ed05801d165"
  },
  {
    "url": "assets/js/app.02175fcc.js",
    "revision": "53aadd3278cf10b12b7aaff0dc211a4c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "1a2881fb27e2cb1d47ea0eaaf088dd58"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4fea7593f60e63d75650b3b5136b684c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ba1a64667937afa8af094db1d73f5c70"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0ae9390622a19e727f3035d5e2feb976"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a8741a7a4a2ea4cd928292c3893b9016"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "66d8d888e3edafcba68c526018b854a4"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8dccb7fac83c2a88cf3b516d9149a508"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2fbfce11cc1ba8a14c3a45b6d291b063"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ef68c8c5a81cf063d2afb3a1ede49a8e"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c1602d944524d9c5428aa4b7c0710497"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f4a52de617bd6496b794acd00e8c09b3"
  },
  {
    "url": "basis/design/index.html",
    "revision": "f6cb5326fc3e9e7ac25ff412f1e4cc74"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "7fb247f16ac400acc1bc80ce2e3bc032"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "a8b64e5a24875faf35c82c3a96dd4f9c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5c265f821cff73e309898145750d0163"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ed80b3c97ee5034f52c11ef5166c5640"
  },
  {
    "url": "book/index.html",
    "revision": "bf401daf78c8e404144929e449ef9ba8"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "b04ad733764ad4cf5be05c0bbcac129f"
  },
  {
    "url": "categories/index.html",
    "revision": "a912ca3af03be8d2aa34df22fe3d6eca"
  },
  {
    "url": "figma/index.html",
    "revision": "bec542b4741d7c911ba55ae83a8890c3"
  },
  {
    "url": "flutter/index.html",
    "revision": "a65d98cebd98902cbb27d800f5cfb1ea"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3fad2a3839034ac41dc79bba66b140a3"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "68ad32c8a2a593dfbb6a16f1b0e3d5b9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "42b8434254f331fdf2b80697e76fe180"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "438d0b8f4239269e65b866086d7783d4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e7ce74250603ea9df076e73df9096cb1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "cc4121f18cdf3015f34cee40a4a7ce89"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "bd52585eef7fe7d49ac1b8b93fe19c3b"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "bb6101ed8dcf9265456ec952cfee04ed"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "6f8f88f09d6c245a1917a56a8c436ff2"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b211ae01339f21ba1b858fd1e151924f"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "3d028bb0760be6b24b04279480e5e096"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5835e66991e2703c2d912e2b28889154"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "db7ea203f79c3a5d808ab8b55caa74b1"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "83dc2881c29913dd8a23ccfe341a35bb"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "4abcdfae3076f819d1ac07f7f8740ebd"
  },
  {
    "url": "index.html",
    "revision": "dc19a862e3b81e114b0cf16f19a04697"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c69f29ee84e35221d1ca46196d9e7e1c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "57da5a1369c0f7756619fea6fd3c4959"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "80921f0494e4ddc0d0d39009303e8cb3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "cdae91b04f6a65ea18bc9f27415dada7"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "a05d135f0d10e943445edd4636f2d76c"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "f018f9ad1864ff316de48696369d3d81"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ce2b40fedd362dd1da4813f6256bf28f"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "54b2f256329ae696b1e2d7b6d9aa0303"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "28f367b3f1ddc2f927f2f4cc6a16a3ab"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "3aa0306b2a7e81510c789490cf76d2af"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "113a9078c803a96440d207921768c750"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "db9fe1020e58331bc00f12b3bdd66f20"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "fdcafb2839419fcc83f7b772ae66a34f"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "6fb7d74cc0de7b96fed46a3d3839aab3"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "77b729ddaf47963a2adec6ceb1513136"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "2609c47b704c12be8eaed8bb9ed83c12"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "02c2e3954ac95a4776657b9f3b08c924"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "b5fd72438ba47f4e3485d03cdf4f1df2"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a7e798b0facefecab10f2f40362bd5d2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2f5efdf7f1016d8223b5b9e0b4986c64"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "36bd4a1ff36c882ebd6ee558ae69fb53"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1bcf45f45ed5ef8bab4b6d9a417928f6"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b6b10e75c0f48fbe1993facf1be7f6f9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "35f502892504aa1ec60beeb678667ab5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "00a7fcb837b692959d76b85823ab8987"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "49744a2f7015dca6d1be17e8788e2052"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "a7ecf4ff258eb849b8e6ca6eaef591d1"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "86cf540bd8fe21a0f6c8acfe2266278b"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e0341646f4a5cd55a454994912e051c6"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6599fd21c0a01efd7e55da8b363d62e3"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e8965ed372aec7b2dec6ac2a0615617f"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "5a9b27dd222c32095131a785521c0ba7"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7b7f5205200431ab3aacd8fcc9b8c96c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "71086a255335816d136f0afa5a06cfab"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7be9437618606829438f81370bfcc915"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "34e8f1636833a5dfddef3bb6b0992ceb"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "5a454b0d803774357921c1cfefb971f7"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e860e299e841c7c11ce08d506638b7eb"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "e35d2a3ccdca05351a2b601e7e2a7b9c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a364b7672d9ba6fd84bb50d8280af667"
  },
  {
    "url": "tag/html/index.html",
    "revision": "16277dfbea1ce31053154b38e21358ff"
  },
  {
    "url": "tag/index.html",
    "revision": "83a66a2eab477ddf4a8580c36004c568"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0ac7c425472cf821223ca935abd22c25"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "0b5119e816d7236b043ce4657e74953d"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0abf96d7761b66fd55a81693d6d9d903"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "90f1dcaab6a70bc3fcaecd896418f9f4"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "a628595625acad3211c60dd6dac73756"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0d0a33133355047177c71484ea79816c"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "60f70fc017eda58eda36c2afd5afe3e9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "062ad8f5689a8e077ce1ed9c719cf265"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7c38d5037f71f725c844077c8c7b22d9"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "bb35cb778dce5db4bcbc72a93946d0d1"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "494d74a6f35db080caca11d3697c6ff9"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b9ae4fb18837e2c79d7b3a490825c562"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9e10206ea079253f34540cfc49cb2db5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "61bc42b620f7a7c12ba9f819bc05ae6f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "31d1ae6f618eb4189a0ff64c4902243a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "956d16084b5fb7f99844bc19a34c878d"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "729197afbd42932c1bd0d6af936f199c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a6fe3b04ee52b4cbc92b040fa810e9c2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6f2049fdd159f46d2cc971ca4771e312"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "721687627c969760d67417c2e4cf6dab"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4ede4adeaa83b5d86c71160f458af7c2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "71fd21dbd692fa2fb9bccf676865d06c"
  },
  {
    "url": "timeline/index.html",
    "revision": "712955d9ad0076e6ded3ac7b5a6c72a7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ed06b5237510c415dbe4c21c8ec85d09"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7fd3bb5262ee4a52fde8fdc502b627bc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "aa31dff90a11e5a25a2b0a96c8bc63d6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c6b2f0d03865d5f994090a12aec35773"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "9b9d6e3be7c8ae5307b4b5b35dd2826a"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3b6ac9568ecf62ddb3470faa90f229df"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "23c2f3a8bb44372f3cc26e6e992d3bed"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "31e17d9084fe7195c9bc85ef084d1288"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "40e568a6de432956d08660cfd5c0c5b3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "840d522110ee5c02b1a6b802fc0235d1"
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
