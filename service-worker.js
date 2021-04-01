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
    "revision": "eab38ca93fa03af8195c8d149e7ab451"
  },
  {
    "url": "about/app/index.html",
    "revision": "f15fbbbfdc02647e11f3ad60ecaea34d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0a4e3770c64575962837c14a65c11a85"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8e31a45000fe13a04fb9468065398570"
  },
  {
    "url": "about/index/index.html",
    "revision": "6f3dbb075d905255cd82f6440a0f779e"
  },
  {
    "url": "ai/index.html",
    "revision": "7429c88c1e63b05978e71daf8251c6a6"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9345a9a16db53be6ad73d11e83fa1822"
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
    "url": "assets/js/100.ff44934c.js",
    "revision": "b3ffcae734fe0754d5e333afff627670"
  },
  {
    "url": "assets/js/101.0f35ea12.js",
    "revision": "dd7d3c2d43c4e37dcb37f475283f4cca"
  },
  {
    "url": "assets/js/102.e2f8753a.js",
    "revision": "1024a214dc3d15cad8ce16e41ac37000"
  },
  {
    "url": "assets/js/103.e1c413ad.js",
    "revision": "f0038d9d1bc845c7490c8ea6e6605d7c"
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
    "url": "assets/js/17.866983b0.js",
    "revision": "60b910433aca9f3658e7372409667abd"
  },
  {
    "url": "assets/js/18.b7236611.js",
    "revision": "c5ddc8a89736ff288ece062456417a52"
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
    "url": "assets/js/21.77b379d1.js",
    "revision": "301c66ec1b171868c52fa471fae11a53"
  },
  {
    "url": "assets/js/22.6911d8c3.js",
    "revision": "ff782cf36ae6511af6d21b796af724d0"
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
    "url": "assets/js/37.a4571437.js",
    "revision": "8ee30b0ce614b9313fc6c50c43bc40e4"
  },
  {
    "url": "assets/js/38.d8e5cb48.js",
    "revision": "0490570c458a79c4552f880ea86954d4"
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
    "url": "assets/js/55.bc723f48.js",
    "revision": "8b99fc22b6b9c78dd26c5aa46b22cda2"
  },
  {
    "url": "assets/js/56.1f4cd1cb.js",
    "revision": "01fdf33d9ccc0a3fc009a60d0725be76"
  },
  {
    "url": "assets/js/57.8147b707.js",
    "revision": "c00709813a88b4f10ed91f7975243de0"
  },
  {
    "url": "assets/js/58.3bdebf5a.js",
    "revision": "f3520347001319b62ce4ecea4e4fb593"
  },
  {
    "url": "assets/js/59.5675213e.js",
    "revision": "c072f550db3c97c5623cdaf1556ae591"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.7675d055.js",
    "revision": "d56cfef9b5e2ab3881b2e6d83d030b9b"
  },
  {
    "url": "assets/js/61.834a5364.js",
    "revision": "0463c05b4c2c7eed06eb680f29e9d185"
  },
  {
    "url": "assets/js/62.a9f0c6ad.js",
    "revision": "7eccb5d3e4ae207ea2f79a4ed80b4078"
  },
  {
    "url": "assets/js/63.63f25afa.js",
    "revision": "a491d67110ea334fd0b981fa69ab0adc"
  },
  {
    "url": "assets/js/64.286b33d1.js",
    "revision": "daea5e9b95389abe0890563f16e295b3"
  },
  {
    "url": "assets/js/65.93576056.js",
    "revision": "9c898fb04ef788fb1d16021340421b9a"
  },
  {
    "url": "assets/js/66.6670c013.js",
    "revision": "16aa9606cd8354200a54e63b93fe5fb5"
  },
  {
    "url": "assets/js/67.826350c3.js",
    "revision": "ea2aa99febb65c64eb7182395717e469"
  },
  {
    "url": "assets/js/68.53f13fa5.js",
    "revision": "e1b7fbcf908cdf85439849d471c62887"
  },
  {
    "url": "assets/js/69.7aac2eca.js",
    "revision": "aa53b378acc3594b85f8c379971793d1"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.8ad8ce7a.js",
    "revision": "c4e50ec3b1ff279106deafa455223519"
  },
  {
    "url": "assets/js/71.652e7140.js",
    "revision": "8d84ad19bc9a9d14eb353d4d1573b259"
  },
  {
    "url": "assets/js/72.61913637.js",
    "revision": "fece95d7194c1f17682053dbee74f25f"
  },
  {
    "url": "assets/js/73.20403603.js",
    "revision": "ba268e98552722437e38cbe70cfbf944"
  },
  {
    "url": "assets/js/74.728e4a25.js",
    "revision": "abbfd7b7a61c3c331b1f01f8a60711e4"
  },
  {
    "url": "assets/js/75.d9b22d4f.js",
    "revision": "5f5665d1256c70e2210d4f8d22e9f5d1"
  },
  {
    "url": "assets/js/76.166f2079.js",
    "revision": "be771618d6b8d4117775f3370e2707de"
  },
  {
    "url": "assets/js/77.affe7549.js",
    "revision": "ebdcb48ca7525be403cd40ee6f4cd52c"
  },
  {
    "url": "assets/js/78.09b12c80.js",
    "revision": "09a91db5f3b0a5437de893b1240c355e"
  },
  {
    "url": "assets/js/79.72d523b0.js",
    "revision": "b0830dcb800a2cdada6f096d37ba8896"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.2fb95f00.js",
    "revision": "1701f8c7be0d78285f92d8b1554b563f"
  },
  {
    "url": "assets/js/81.ce93f6cc.js",
    "revision": "d4d90488847602bec32465d05529e14a"
  },
  {
    "url": "assets/js/82.323a5eda.js",
    "revision": "863fdaad58a01cd6ef9521d434fd2bb8"
  },
  {
    "url": "assets/js/83.29239dd0.js",
    "revision": "643f3f3b37d87a491081402b472b7f64"
  },
  {
    "url": "assets/js/84.457ff36a.js",
    "revision": "9194562dc4651dbe501e52356c6fbef8"
  },
  {
    "url": "assets/js/85.352ce9dc.js",
    "revision": "d5b8b66417aa29e86f8885ac56db063b"
  },
  {
    "url": "assets/js/86.246d0e2f.js",
    "revision": "1f80b8ed1dd0fef82740380fe67f7c16"
  },
  {
    "url": "assets/js/87.e7121908.js",
    "revision": "c44fe20e820d6156c48733636ce1f7d0"
  },
  {
    "url": "assets/js/88.45ef9cd1.js",
    "revision": "a2d6cfd6cc2e9129f1bc9abcd690ad91"
  },
  {
    "url": "assets/js/89.78a2777d.js",
    "revision": "2b0f8e9fb9cba52cc6dab698f62df296"
  },
  {
    "url": "assets/js/9.004af838.js",
    "revision": "4dacb5d6890c80a17e856d62355a3d03"
  },
  {
    "url": "assets/js/90.03e2d0d4.js",
    "revision": "bd6d6492050494bba87dcf88bd632401"
  },
  {
    "url": "assets/js/91.0d53b8c8.js",
    "revision": "31a66ff89cd02b19b268283fc6900b4b"
  },
  {
    "url": "assets/js/92.584d27d6.js",
    "revision": "bb71f5338b1d130be777575d72c52795"
  },
  {
    "url": "assets/js/93.00878d18.js",
    "revision": "13a516dcdd8a40075320a235edaa9943"
  },
  {
    "url": "assets/js/94.d564ecfa.js",
    "revision": "88fa476d624c142d3dcb03e329a10675"
  },
  {
    "url": "assets/js/95.ebbfedcb.js",
    "revision": "b924eeca6f6aed664c0eec34ce03fe5b"
  },
  {
    "url": "assets/js/96.9df024c4.js",
    "revision": "7f5076437684dbcafbef4d0ae90affe3"
  },
  {
    "url": "assets/js/97.dd995857.js",
    "revision": "b06f45d31eb523a6bc6933ee33fd0668"
  },
  {
    "url": "assets/js/98.d168d2fa.js",
    "revision": "a12c97351972c73b409c7f5aebd0b03d"
  },
  {
    "url": "assets/js/99.c7813119.js",
    "revision": "dcccfecc6dd6a2e431b250b08f988f8f"
  },
  {
    "url": "assets/js/app.453ec150.js",
    "revision": "4e60800561aa06c7b977a6b8aefdf7ac"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "fc6a0461a4cb3762da2ea5f452513714"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b2f586a8912e089093be331c08975b75"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "2efaefcd7641634593ed45b787e8e660"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "772a78452135886611c2151876ab540e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "701918babeaa9816b224f8eb8ddd09d0"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b92cf44840316d75f9d49bd66c3587fa"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0a9d4162b64862f02d92562ce46f6362"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d5b682c5e4714a48df1ea9a8374f7e28"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e3fdba3b7fe131e10779f61b74e135b2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "92e93856e9b6ff58fd2ba962e21da958"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f3be72d7a652983ce8860cb4f21f92b0"
  },
  {
    "url": "basis/design/index.html",
    "revision": "a1ac78c03a838f075a511fcbf64f49a3"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "ef922bf55905d712d6a436f5d3706cae"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "8e83218fa1cf27fd6d6d592f1e571b11"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ba96be045007827248e8c39d2df0cd3f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1f7bc1a519cc97c020499ebf2f92d0be"
  },
  {
    "url": "book/index.html",
    "revision": "cb721ed2e546c0915607fa91b377ec1d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1b77ec9f2e9b51c0e80f0ed9820bfc51"
  },
  {
    "url": "categories/index.html",
    "revision": "4737061a0b031fc6e35d4dfba41c28e9"
  },
  {
    "url": "figma/index.html",
    "revision": "f0cd1408ec56661ff62fa1b963a8fe99"
  },
  {
    "url": "flutter/index.html",
    "revision": "f07718c6beb54a40e3ef186cc61bf024"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0a09e07b5574e59da98691593bf02034"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "6b68309ce454ad083daf37666ca29c5f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "2bc4aab4a9adc51e8a395f725ea2d144"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "0829882d8476c6004753249fac8da42c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8340e0aa1d7f99ef2bb94f1a995c0122"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c5bfcc779dc44c37c1be78ef33f52060"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "44bcebe10b382ff04f2668b2c9371403"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "91c2df7f8227d178d5028518273c2193"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "23b1b0db001c34650631a47284b8fad4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b0340ef88f057eaaa4c29d3c46a01698"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8340ecdce2d49ca1b9b7b6a5a7fad93b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6b43621ad534ab5d291245a8ad483035"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7d037ad1ad88d0b3c4432015d01009af"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "27c2c278d2fe589bfdef56b420a2363c"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f798853626bdf64d00fb26f47672fc5a"
  },
  {
    "url": "haskell/index.html",
    "revision": "411c40384adc9ae14b2acc1929281b0d"
  },
  {
    "url": "haskell/t1-install.html",
    "revision": "33171255f2ca25e11cc8103cfa3c5624"
  },
  {
    "url": "haskell/t2-vscode.html",
    "revision": "6e60532bbe3c06b7b18caa7d4bd2080f"
  },
  {
    "url": "haskell/t3-pktool.html",
    "revision": "c4553b3b4a5e2c30f13d7d1f69c6e53b"
  },
  {
    "url": "index.html",
    "revision": "296168b6856b9d10fd0b6bb5b90b1199"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "4c5807cd085a854ba317e08466e4e603"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "37fb4ebbe7ceb11478bc4c258b8b39b1"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "06dee10f78e6ea19d2428ebf472a2db7"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a7a4dd73056dbe270792802320820778"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b6d8279bfd21382b2f616b65dc399ec4"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "03adf747075499b3ed9881b3eb23284a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1fa353bc85bcac094c5615de0433b105"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "351f9fec75d283bac5f61051429b4ba6"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "da649727d3132aef4a791af8a22b6025"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "4e794bf2c9fac1cac0ba382047911609"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "02087fbf5f04b7379c9c01f781353aeb"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "40b356999a65162d975a725448d4a3c2"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2450bf4fa8a38bfa5dc5a6393ae7c54b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3fb230be173362c7965f04fcdae25920"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "3426ac832e5539b1ee0b6976c28af3c4"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9b8e388eb3b8fe834e00c43a0d8ec15f"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "33a6ec897ecf15052a2857e85a66660b"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "3db10a3375d9bfd2458281a3f38a4a69"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e9e7d5aa73d9d18196783c4c32879a58"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6f5abf543bb7380cebe7439bdf825bcc"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "067c7b9ad0c64d2c52f2d6e2a6e34f67"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a2c31bc4690f71ae4f64effb033650cb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "bc1d9bc7990ac2f8f6a6c542e3300b1b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "39bdfedc7ac2dfa08d0c0ab0fc204198"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "bbf552c6be1a8fbcdb61a6bbd0147464"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e151b09b683e2e26614aef532bc5ce03"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d4ead25ddb79256f654990bf45b0b7da"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e315aaf6467e0ce8ad17f64fa312f11a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "fe6d1f74e5ca57080399ac41cf19b045"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c393dcc16cff11f22f4fb230ab9f1016"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a7b0898c26e3dddcf660d9d29c5cdc4d"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "7e9e48bdd2113fc6ed87bac43fe7b172"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "24589875f8cbe374fa7ad0074b51b820"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "3702ae7a83764b14c2fe99249c46da6d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "832266b8f30f26db4263fa7e753458c0"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e343176102ccde14d0f644d6582e1697"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "1f778ef5082d45b738f9d45efaa18e8e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d3ab853b6805c95e5bf346a94ac5d3c9"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "4d792d840200e99872ac417ca59c40e2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6b59e0afedbaf28f0a424d26182da3c6"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "ade290deaff6c589363e488ebba084d5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2ab105949bf74774a4874380879714dd"
  },
  {
    "url": "tag/index.html",
    "revision": "dd6a77023f5a779aca69c4c56e690cce"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3b00e16a04234c5e966b49a5a437368d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7566f5e6d6481f486872b9845e7a8977"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "12ee61d77df3435a259f28ee97595317"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fef359b6a762328010d8fb3f1ee4e005"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7a106e4bcf1089b8eba7fcac52b9a9a3"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "647c2afac332eced025c15bfb0eca9c2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "eca563769e077f00f71fc3fb03d99db9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "88e866420c3ee95b9808e4394a4b71c2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "4b50e3235888435b800213a2fbf93b1e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "a55275a911bcf788ad14ff053120e946"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "620db855155b6ff88fe4d1e4030ecff0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9401e721e9db8ce59359f2fe116fcf21"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c2caac138e038fc9b61f424698ff8b34"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f077a074d4534abc3c5f858c14124080"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5a59b657642f46de5cadfcd5ee20636c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2920977c1233f3612df99c826c1ca083"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9d2a8beced2ecfa234c792fd6813b0b2"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "725426d0ca584969d5da047ddfa3c203"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e2a528f8ffc47e42efb24ef645ea1b8b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "3e30cb99ed4d848adc90362f3c23c46a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "29f1462f9e51857381677eb807b13fa2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "19e67e221c6ac4e77e65af5b6bd4a78e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d115075fd9dab86b9d32a7ca91208eb3"
  },
  {
    "url": "timeline/index.html",
    "revision": "8802d17f02f4f5fec2187278eaf01a9d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "373c123ed46f963d459eb7390f6a8b11"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c33b553671e9bc2368c41e6a587398be"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "67af4837e8a95877e833a45ba592ddcf"
  },
  {
    "url": "tools/html/index.html",
    "revision": "bd46e73d73d284eba20f23dc3cb8e619"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "00e9af02323f37e813c6d37d48176de7"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "b2a1bf2dbb72fb1d7bdfd3cc27b64c6c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1e292f3316810a40af72a5f95707fd94"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8c50c2e65f83af2e734a37e06e2fd068"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5ad7933b69fc48a7188303ce9252385d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "b70c3c848991935c1dafbfdf99e651bc"
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
