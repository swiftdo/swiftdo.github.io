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
    "revision": "21fbbc492b09c0dc3ce54745d61dc282"
  },
  {
    "url": "about/app/index.html",
    "revision": "4971c12f8c257fbe626efeae19968f09"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c3b5c4e3c871380a88e110edf3d632af"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4ff93b813813302cec7ebc472ce79891"
  },
  {
    "url": "about/index/index.html",
    "revision": "c759b5424e1e55f08ab37138dbc6eee4"
  },
  {
    "url": "ai/index.html",
    "revision": "5fdd2143a67133801fe667882a68465b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "ad64737c6ab968a761fb9608fa9302df"
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
    "url": "assets/js/100.42079903.js",
    "revision": "5f8845ee54f3a48654225a83e54b7c1e"
  },
  {
    "url": "assets/js/101.7c8c8d20.js",
    "revision": "21375c2bd3db7220981c40ece502d349"
  },
  {
    "url": "assets/js/102.91504285.js",
    "revision": "816dd7cf25213e71817ebb0e5d49e258"
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
    "url": "assets/js/52.4f27753a.js",
    "revision": "9e0e24ab919d7bcf96dc6e2f45a44c5f"
  },
  {
    "url": "assets/js/53.9878c73c.js",
    "revision": "49227ac3bd0f4a69bd933943f10b11f9"
  },
  {
    "url": "assets/js/54.2f48c1ef.js",
    "revision": "b06cbd948dd79a3af127d7011b7daff4"
  },
  {
    "url": "assets/js/55.bc723f48.js",
    "revision": "8b99fc22b6b9c78dd26c5aa46b22cda2"
  },
  {
    "url": "assets/js/56.5c7faae8.js",
    "revision": "8e85fd6b02b90d4c8857d23af576e2ed"
  },
  {
    "url": "assets/js/57.a0523afa.js",
    "revision": "2d5c2c6cdc411637303baf5bea0f25f0"
  },
  {
    "url": "assets/js/58.56351868.js",
    "revision": "809d9fc99af66a436b91003a2abf743e"
  },
  {
    "url": "assets/js/59.e633cba6.js",
    "revision": "d5d2b81d0141eac11f6a15cbe896304d"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.33f4bf6c.js",
    "revision": "fec69436e588bacb0c5f337c8f106d76"
  },
  {
    "url": "assets/js/61.01bbc9fd.js",
    "revision": "91aefd10478e62a42f0c182590edaa6d"
  },
  {
    "url": "assets/js/62.94cb3bb1.js",
    "revision": "2272e7628697b2a87dfcf9e37eae7d1d"
  },
  {
    "url": "assets/js/63.b9331ea1.js",
    "revision": "d485bbe8ac0c59850979fe4836682549"
  },
  {
    "url": "assets/js/64.1ccc7286.js",
    "revision": "c15b7044437c698de03dd4dac0e8c35a"
  },
  {
    "url": "assets/js/65.93e5c1f3.js",
    "revision": "b8fe33fc584f8499d578cafdf4e8069a"
  },
  {
    "url": "assets/js/66.9ca92403.js",
    "revision": "28acab2c9820c2c06bbcbf50e84a3a2f"
  },
  {
    "url": "assets/js/67.ed227c2e.js",
    "revision": "cdcb9ea10f45b29cfb10d940b7d567c9"
  },
  {
    "url": "assets/js/68.19f2a612.js",
    "revision": "1e6ea50b5b375211af0157289efc6b27"
  },
  {
    "url": "assets/js/69.485f401d.js",
    "revision": "22792903fa9951fd1c555b30969d4890"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.39ee5499.js",
    "revision": "3b33624d767bfc554dad7f2a68ba68d4"
  },
  {
    "url": "assets/js/71.3588653b.js",
    "revision": "091734ce5b969190c73cff8245231e86"
  },
  {
    "url": "assets/js/72.6d859fe3.js",
    "revision": "fd864a7ec150a4c9b0f4ca91b9149815"
  },
  {
    "url": "assets/js/73.a70ed65e.js",
    "revision": "0b659467defd0067c8537c96510914ca"
  },
  {
    "url": "assets/js/74.aa35ed34.js",
    "revision": "196fb6c7e0b28b1049bf46692b691871"
  },
  {
    "url": "assets/js/75.d62a66fc.js",
    "revision": "179c4f134ed62a73916fa982122cefaa"
  },
  {
    "url": "assets/js/76.7249fa13.js",
    "revision": "abf32bc5aa5d212f2a942aced742d4a9"
  },
  {
    "url": "assets/js/77.1d31c2ec.js",
    "revision": "9c3408cba423c1c4b31f48dfbeaa1afb"
  },
  {
    "url": "assets/js/78.9a866c7e.js",
    "revision": "00130d3126cf9290ca5ae4766e33f8b5"
  },
  {
    "url": "assets/js/79.e2a0bf6a.js",
    "revision": "0ef0bd1ca20125f453125d671537c88d"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.7727b5c2.js",
    "revision": "1fcefb59b3c7f83b1f58eb44f5e96ad9"
  },
  {
    "url": "assets/js/81.ad18ba0e.js",
    "revision": "0635d4411b22ba4fdd68ec4926967b11"
  },
  {
    "url": "assets/js/82.9407bbc9.js",
    "revision": "0a8022a031163120addc5520beafe1e2"
  },
  {
    "url": "assets/js/83.228754e8.js",
    "revision": "bd04faa90f8c9638edb73caddb6d7239"
  },
  {
    "url": "assets/js/84.78c4f079.js",
    "revision": "10a6a9276fe756bc116b54eddf1cfb1d"
  },
  {
    "url": "assets/js/85.709d6ee2.js",
    "revision": "1c103cbbad58d3f65f3cd267ce86402a"
  },
  {
    "url": "assets/js/86.2d74bca2.js",
    "revision": "75d1b8370aa7792f25cab37bbf131c60"
  },
  {
    "url": "assets/js/87.23542abc.js",
    "revision": "84d2ec930c8070df8c6c78d0b20c8e13"
  },
  {
    "url": "assets/js/88.27c95d81.js",
    "revision": "5710aba30598953f7e15b10563ac4c67"
  },
  {
    "url": "assets/js/89.6b9e83a5.js",
    "revision": "a070d404d83609268cc1292f1a46266c"
  },
  {
    "url": "assets/js/9.74b7bf7f.js",
    "revision": "c8a580e71e8784b41c3e2a7c96b5f034"
  },
  {
    "url": "assets/js/90.5f81ff32.js",
    "revision": "e2551cc9999b3e7e7225cf30ecb4c707"
  },
  {
    "url": "assets/js/91.30f8af63.js",
    "revision": "da0068016324933c9dbd24049b881b8f"
  },
  {
    "url": "assets/js/92.8e21ef41.js",
    "revision": "acf04edc75bdc557167f0b649ffecc29"
  },
  {
    "url": "assets/js/93.f51f7b48.js",
    "revision": "79583af54fc76a0590eaedb2fb624ade"
  },
  {
    "url": "assets/js/94.9144a214.js",
    "revision": "29301493751ee308fe99c86c82fb4de8"
  },
  {
    "url": "assets/js/95.03ed1d19.js",
    "revision": "1b49224f9419a05ed0549107acb731f3"
  },
  {
    "url": "assets/js/96.627ed257.js",
    "revision": "ea9d47cac9191afce14b9b62841760f2"
  },
  {
    "url": "assets/js/97.5bef4781.js",
    "revision": "41ac0067bd53b814b44ee03e2446da20"
  },
  {
    "url": "assets/js/98.3f08ea40.js",
    "revision": "258c6aa5114c8c4466ed65c88da88adc"
  },
  {
    "url": "assets/js/99.362b9591.js",
    "revision": "040947b0dbf924d5f3c5573823f2c7e1"
  },
  {
    "url": "assets/js/app.a396f0c5.js",
    "revision": "8347748ae0fda12936839cafba383209"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "42bae74f7bdd69102def5c26a7341c1f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ecc7920401ca8663944848a78d1d9b00"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "35cff4dbaf9ac999ae9545ec6d73f699"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5ba91bd35e1a26b8a546261c5e380d66"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "cbf2ffa2fe30974c693fbd5ba2c479f1"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7fb05d2da00fa8115c30e18c1a9d2aaf"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3a45d7c40a044089d7b7eb33a1d77b1c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "efe902c2e41823c5fac8b45dfecaf71e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "bcc6be7de5b12d88ed2f07217b2f580f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8890b3eee62b58aa0dcd84d06ccd2ada"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f7552b6d47008badb78a583629db3383"
  },
  {
    "url": "basis/design/index.html",
    "revision": "bb1d0c0ab6c758e6cefd7c0076a1c932"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "265c19db0269e1c476ab9889d2714562"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "d828109e0ded58038c3ad68abc5c82fe"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8b8754e3fa45d3f3d72a3695b8af8d30"
  },
  {
    "url": "basis/os/index.html",
    "revision": "02f092c8a96a542fb1c60b22585fc54b"
  },
  {
    "url": "book/index.html",
    "revision": "ce506c03663f781ddda8f522f304d064"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1c25f9dc7f2a8ff904e2da19fd4d4863"
  },
  {
    "url": "categories/index.html",
    "revision": "b5736425d863bf29fbaee5921fba9d3b"
  },
  {
    "url": "figma/index.html",
    "revision": "e1498f5e7c31533c7fb2a4b51e8e5ec9"
  },
  {
    "url": "flutter/index.html",
    "revision": "5f8a29e8e4017975fde808b3b0ddb4ed"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2f48d13820346ac1d6b28f7236f67b50"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3deb72543320b546174cbf1913dd4096"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0f3f2e45649bafde74cbf8c3cd5bcae1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5bd54bbaec50db988d8eb438e4271c04"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "1284ea24da559bcf91e91d5ce7293623"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "127e8925c32a4fd3f60b6217304a1cc1"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f6f4e569a21f1d4ee51b20ebd5232697"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "06b6b95a486eb23c2cdde1a60881e206"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "213e70776e7c359cfa274552761bb33f"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b25f6faffa7a414b35403342ac89d6d4"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9048fc9f598448f03658713f5760fdda"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "54410e8680e7edd0e84becfb094e3dd8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "86c1cfc88a745e38146460bb1f7d9119"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e2fd8b35fb0b9c3301d715dd7ef09947"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "1d64b9facc4ccec66ee5227a52d2699e"
  },
  {
    "url": "haskell/index.html",
    "revision": "b247307970aa3a538d6f2756cb7bf0a5"
  },
  {
    "url": "haskell/t1-install.html",
    "revision": "a39ad7a982f65baf166eb7af3a0e4fea"
  },
  {
    "url": "haskell/t2-vscode.html",
    "revision": "ce2bbf960cea4919ab5a356bc9d50797"
  },
  {
    "url": "index.html",
    "revision": "3b98df978fb6addf941b83ec784d714e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d0e3b45f5d8d94515b8fa7da2111e8ec"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "9b4a323b67ee3e6bd249bf8f33f5af96"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "c220d0826baee7a495c04e4f47ffec78"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "534d54b117693151aa141490f0a6dceb"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9bf4d30de36eec5b7a50cc15fbd358e7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "62c878077e8b825604516d992a304a64"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9e9bb893b23875007fbb2443a2513648"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c476569185bd4b618587c7ea6043e023"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "5cd5288de01bf723e3f1b29005447c25"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "c1b265859bdc9c5da3f3570716da2604"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "c1e07ff5aa1b248dae60a44321849757"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "afb9489f1e29651a3f97c3b26fba20e4"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "28c7ccee33f736c8b82344481c7fe099"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "145bd2022ee8eede839f8a902768a210"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a2cc745cc15b02f682cfbb754983f155"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "6c0921be95d3c579be372c2e1e429d6c"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "ed1d18474f74cebe8a6d8072c696525e"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "df277f4b6cab1cb9a87f2bc4d6f5ca6c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5408909c400d6322c28864f7a257bd2c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4cf34c7473207ee53977a7acabca30b0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1d92343dddac49d66ef611ac7aaed41c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "5d1d46a76aca159185c3e7f799632133"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "848d5c21996a15741870a762ffab7b60"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2f05f272cd671725a626339d281019d5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "8f52dbe950d45ec7884f2cce4f8cee1c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "9ccd7196bdba1883ad2c02e9a798f044"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f39abfd5548b5e94cac257fbc7582cfb"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "036c82c02f7af20e592c19a356387023"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "5a5674287af5dc0fc8b1b55ab9e44ff7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9653e163a40d79bc76354f15ad4eb126"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "32001322ae360db19d6d0b017f5c5c4f"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "658ede2ffa8f824b29fa02ecc592aedb"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "275cb1ecd769a67d8a9b4c3205242ab9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "fc4ad7f8f9151c01a0531b682c321a61"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "93f13ea5b2413773b831c47d603cc024"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "008524dbca1e5e6c47cb13f482460698"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3e4552ebeda6503b3b8dc9f1cbf2507a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "30f7c5e004aa89af88c09cb6d026bd02"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "4adc90764da51d1bc8c28bcea6f0af1a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "96fd66e06bb18d19badb5130f6f4122c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "1aa69f2361c358f7c97ce00690f2f09d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "99f256e93347a7cf008a7bf1c801f3e2"
  },
  {
    "url": "tag/index.html",
    "revision": "6a933832afb712e2ca22d199293d4316"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bfd8ed91b97827e0a6821560e7c85d01"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f20ebb4fa70c191ba950130a055a9c0d"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "05bf1d3617badb2d165c933283f79af9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7bb115da641284cb6dc48fefed6844c4"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7bb572bda84932c9de1622bde3d34d4c"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9fbdcf6c4afcd0b5f790ecd5c14d947a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "b598b78fea058259c0f05dde7d57a0df"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ef5105a370ce8e1039178ccbb31b58e7"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "49ee751a85b27ebd0312fe0832a1976c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "33e766a6327ab26a8d4f12cd1870ebda"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2a97b542683f2e2b281a4917d444016b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a4724bd90cb00c480536a049347ab103"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b30cbd6292885657d8562d93f77994ab"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "30bfcbb8228aebd217aaa4f5792d2001"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e941c727a594a81f9f4d60ff6d66aaec"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "bf6d7bf474a2441fa62100864627572d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d8ebfdb284f3d615d270061dddfa3fef"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a87ae6e89abfa7703942c14c7799619b"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3b9e2d2d7121996f8345b54c8ffa0510"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "26fb2150440c952dc44ab4b6c4721238"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "7bcc4822b9ef84ca3c61a1f8eee2e89b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "74fb66157c9b4070fde3f4aea0da73b6"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "049fa637b016a4f67b58d6ba3f20f8b9"
  },
  {
    "url": "timeline/index.html",
    "revision": "8eef06c51133a69a40fec4f41ad5bcb6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1ad80e553a385156dc3dcb62c67eaf34"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ece47f8261c48a460e22f0df019aa5ae"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "533d609ca8c7c15ab19a5c8eeef8ab2c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "61ce30e69098f7d62c2891c0cdbcf949"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0eabc213384a9cd52e59b199e53e7acd"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "b8f5c3b04d63ccb74d5ac5f196f63983"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c906a1cf746a1214c72132c10d6f371f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a030459f4527dd634c6ee3cfbdf26c9a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "19ebca45ab65f370065dca775e307f03"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "902f11a62158a0718c4ed048998059c4"
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
