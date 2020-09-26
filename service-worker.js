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
    "revision": "f171041abab23c407abd383ab25cd8b2"
  },
  {
    "url": "about/app/index.html",
    "revision": "5192119ea7d62cf915ad3957241e76a8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8a9fade22f6d150dfd19a9e695719213"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d89bb5a0010495209dca73da83bb6834"
  },
  {
    "url": "about/index/index.html",
    "revision": "2dce64cf98284f7c5d15f870b03866c6"
  },
  {
    "url": "assets/css/0.styles.625902b5.css",
    "revision": "cbce2c0a748cf5fab169cab5edef8613"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ed13abcb.js",
    "revision": "2416e7e08846e26e398243e670751221"
  },
  {
    "url": "assets/js/10.d33307ad.js",
    "revision": "21a37afa245bd192b37a63d891a29d07"
  },
  {
    "url": "assets/js/11.5e6ede6c.js",
    "revision": "f6cc6d13755fab9f4c22373b52a6b5b8"
  },
  {
    "url": "assets/js/12.32c8b7e6.js",
    "revision": "1f91493bb9160279cad55c1f506b8abf"
  },
  {
    "url": "assets/js/13.eafd63ba.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.145fbab5.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.5f7b5bec.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.ee6de255.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.dc7a9df9.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.7500f234.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.1064ffef.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.ec1e80ba.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.8f17b6b0.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.f464170f.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.228231e7.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.a85ec7dc.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.5d6d0d49.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.62a6e1e6.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.6ba1e350.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.84791a07.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.25d3a50e.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.1394f437.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.40a2119f.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.e23ff899.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.565bffa6.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.8bebf36a.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.5ea8ca3c.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.938f5118.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.21569c25.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.cfac7559.js",
    "revision": "6c74fc62f958924637d6e9e511446a8b"
  },
  {
    "url": "assets/js/38.6bdf5ae0.js",
    "revision": "52274330fadac5d2321e1ba7079889c8"
  },
  {
    "url": "assets/js/39.cf2352af.js",
    "revision": "842b2443f405c8594fc8e5187ccf7e11"
  },
  {
    "url": "assets/js/4.cd5ac232.js",
    "revision": "39c76a2160a7e88868471fbf7c9e819a"
  },
  {
    "url": "assets/js/40.fd23637a.js",
    "revision": "b1956fb2fad5339ef4d19a7711a266e6"
  },
  {
    "url": "assets/js/41.ab7c1ff2.js",
    "revision": "0615ccdd3b4df282ece0e14d049b0fc7"
  },
  {
    "url": "assets/js/42.779d3c37.js",
    "revision": "1aa98bc13abe3bf7cec384208dd0acb7"
  },
  {
    "url": "assets/js/43.9efe4c95.js",
    "revision": "ee894a939ea49ad29c3a79a936a9518d"
  },
  {
    "url": "assets/js/44.47605ce6.js",
    "revision": "d1550c94d2d404283cf639f381d92a36"
  },
  {
    "url": "assets/js/45.c8d36cd7.js",
    "revision": "99d0773145ed3c0679bfa80324c09683"
  },
  {
    "url": "assets/js/46.15139992.js",
    "revision": "1f7de386b87d176c162f2bb26fba7386"
  },
  {
    "url": "assets/js/47.29c85e31.js",
    "revision": "0c7a23f4d3a2a75e924f4ec130b3bb7f"
  },
  {
    "url": "assets/js/48.1150c063.js",
    "revision": "930dc9746c08bc6d1a55e3b04db62470"
  },
  {
    "url": "assets/js/49.e90c5414.js",
    "revision": "b9070dd100edc85bc5ff08b40dec12e9"
  },
  {
    "url": "assets/js/5.d2a7825b.js",
    "revision": "4445e30254215797c29c8a7473cc9e26"
  },
  {
    "url": "assets/js/50.fec41be8.js",
    "revision": "bcf91a7912932a0a40537a1b2559963d"
  },
  {
    "url": "assets/js/51.842e9f4f.js",
    "revision": "f3a86dc16951b97dea4796b8e0ac337e"
  },
  {
    "url": "assets/js/52.4fee53c9.js",
    "revision": "4674ea35cc0b6960cebf217986c43148"
  },
  {
    "url": "assets/js/53.41717fb0.js",
    "revision": "f37b597cf8b4440df42b073f4eaf4cde"
  },
  {
    "url": "assets/js/54.a446332e.js",
    "revision": "48f3842ec7b21e7c2188175ee0271234"
  },
  {
    "url": "assets/js/55.d7fddff1.js",
    "revision": "42ccc656b379b1ef0a14c5bcc5e38b33"
  },
  {
    "url": "assets/js/56.e697ee00.js",
    "revision": "f279784cf0da6b05ac81ded50927d501"
  },
  {
    "url": "assets/js/57.b128acd6.js",
    "revision": "820820324ee1053e34cfa5d6bdfeaa24"
  },
  {
    "url": "assets/js/58.7db44c7a.js",
    "revision": "756aab6db5e2ad73ff3f80092263f991"
  },
  {
    "url": "assets/js/59.259bd591.js",
    "revision": "b5cfd2c9b6267ccc9f58b5ad32aa0077"
  },
  {
    "url": "assets/js/6.52cab3c6.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.de8f3f80.js",
    "revision": "93f1cea09cf90b03c32820b8421e837c"
  },
  {
    "url": "assets/js/61.1c0b1b48.js",
    "revision": "998a5591e770eb7eda0698cfb25df88c"
  },
  {
    "url": "assets/js/62.858890cc.js",
    "revision": "a017189806810c8225bf55c2f3c30d7c"
  },
  {
    "url": "assets/js/7.a5327269.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.2c0db0b1.js",
    "revision": "6694823c95de7f43946ed6b6380808a8"
  },
  {
    "url": "assets/js/9.b2992e35.js",
    "revision": "166d0005651352c9ddcc510107c3af12"
  },
  {
    "url": "assets/js/app.12ce7707.js",
    "revision": "1e876d8d92ab5b7248c5037495fe7bd9"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "fc50c30784c5d8e936ba0f8e4ed12b37"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "15fff4ef14900579dea82322c7b6467f"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "6189222bd8972071214d40acb9348426"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c45f2024b02e00fae1fc881704980c59"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "31a3af4c191d1bec13b565a39c65f5bf"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ad1202417fd59c9f516ec4c8d72b241b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "274ad9c186007cd6fb188f12285eb38d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d01f39655059634d21d9eb483c9dffde"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8ce1a25ed1f149d5450dee235cafe7c4"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "32887206f4e13385e8059ec2bdcc2c22"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "03a74f032baa41a2692850041b63ab76"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b8a7fcb3674ab27ac96a39c1211899d9"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0ff24ea7685516d7113c5f0fdbc599b2"
  },
  {
    "url": "book/index.html",
    "revision": "77808dfa66c0496e055c3154495aa1b5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "543b226842cf596f66ae2be4ae502d30"
  },
  {
    "url": "categories/index.html",
    "revision": "71ae174364419fd5e640be2624fe1699"
  },
  {
    "url": "figma/index.html",
    "revision": "440b32e3d31746ee97c9c7fcc8c53e62"
  },
  {
    "url": "flutter/index.html",
    "revision": "f8ae783ef2db4f29c5840313319e0ed2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "711edc4e486999c56c86fd6ddb90b7ea"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "281a1fb9c8275cd91c6faff4589f1838"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "fb50f60d69dff8dd17fac2babc039262"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "06b49346f1130965f955edf19951a728"
  },
  {
    "url": "flutter/t4-flutter-web-deploy.html",
    "revision": "ce780046c4c7dd77a994739ea42953dd"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2e41b09e74c991e1431ad7d46ac21ee2"
  },
  {
    "url": "index.html",
    "revision": "ea453fd1aefb76a49faf97cbd019e3e5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1ea7b0cf0ec7065efeddc822ed797cb3"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "b3a457cf673f42d79034b9b5fd8d9020"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7387c96522cf5fac555ac7ee56653e44"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "98b57164cea8b74304e0b26907bebc6d"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "005d8c1fed08f564d7ce979f9720f265"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "c643527f93ef69795366636a216ce144"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "92b797e90af1b5bb39b517858aebc0e9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9cef1749186b173e649fbaf4bee409e4"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1b73a518674ddb3fc5bf43fab763a7a6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4be093089ccc1891edc1133658e06e57"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "68c85b30eca2018903fa7ad678041127"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "6519939254147fe79056b9d6b1eb4854"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b2fb354d89daecb67581b51c570ad9f5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e0cd8f6361bef94464dd3476bf0c3abe"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "23067ae8b277e0d1ccbc5a4fef9e778d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cf214f8827355312de16f3ae11473b75"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a9f3dcf5d18d9f807c6a745560f8d0fb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3f4757b4ccb59c3d91369452fb275c76"
  },
  {
    "url": "tag/html/index.html",
    "revision": "319b762834ca64c6ab7afa7feb5cf2ff"
  },
  {
    "url": "tag/index.html",
    "revision": "eaf1e461e8cb9fdef0b719288ef36431"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8c3f2eea0e95a36926eb42235325ce85"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "771c601dbee6234c5679849f1de8cab8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fd9492e7b30680a706d4f012d41e375c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "45f5ece7f9698a506091c9154590a5ce"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5f1a80a74987c0a9c1f569bc031f170d"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d20581589e0b395ca9caadb56570bfd7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1581f5585776da73b2cda124a326da1a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4533220bc7e0e60c9dfe65c2fd14a2c9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "19c228b73eb23b7943715727b126bfc3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9da451f462e6441627d58937a37f1f58"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f07609a0f46668f9cc1fb7b9546c69b5"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9bad53d80a572dd52831a389d5e51fa4"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8e24c232284367caab2d759b8e6728e0"
  },
  {
    "url": "timeline/index.html",
    "revision": "31f9ddbb976309b2886fc286667098a6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "425e02635a6972ebb10e2c043bf6ac26"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8d2a3fa1da9afaae74d51e954406945e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "37a3b45def0d49b05c61964b34577555"
  },
  {
    "url": "tools/html/index.html",
    "revision": "78f3451393519e4833d1918254cb1241"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "81f3319541b17da271d500f2222d35d3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "304bfa3faf5d2b29af544dbf84f5a7c8"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "17895f77c55e290ec8d394a70909148a"
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
    "revision": "ecf97432d3f0c1c71f25d45113b4460c"
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
