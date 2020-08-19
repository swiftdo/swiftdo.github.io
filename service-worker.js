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
    "revision": "dff06483c5fada0f6012ec7e85b38611"
  },
  {
    "url": "about/app/index.html",
    "revision": "78ed5468a12c7721b57451f76021665a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "117bdf83459d4fada89adf8e43132d22"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "821dc1a87c2192838148537aa4ca5f19"
  },
  {
    "url": "about/index/index.html",
    "revision": "e40bb13cb5da0f71b96faf9b7ae7351a"
  },
  {
    "url": "assets/css/0.styles.2cea3813.css",
    "revision": "c234890149bb6045f7b313554fc21399"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.61f9690c.js",
    "revision": "69a4efb389d3f8ea8550d7a04c553e3b"
  },
  {
    "url": "assets/js/10.45029e95.js",
    "revision": "516f705edab68410b8c8dec3ab349800"
  },
  {
    "url": "assets/js/11.280a42a5.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.77c00848.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.e239ad1d.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.c694108c.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.3036377e.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.b7343d36.js",
    "revision": "a12cb5a77a63c31274d14514d655445a"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.5dfcafab.js",
    "revision": "cb2cec8ff21e545101ce6659b0224adf"
  },
  {
    "url": "assets/js/19.4ab3834a.js",
    "revision": "f7e759dfd98ae862cb54af258b4fa790"
  },
  {
    "url": "assets/js/20.ec71b6de.js",
    "revision": "2142e61ce3a4678c512495ba9f0753b8"
  },
  {
    "url": "assets/js/21.8165eb23.js",
    "revision": "75b3701ecb949f4be22c9e9c1b0a7c3e"
  },
  {
    "url": "assets/js/22.de43d5c6.js",
    "revision": "29b04a898323e80ed93bd51221990182"
  },
  {
    "url": "assets/js/23.99f46275.js",
    "revision": "949947cac317a2d1026336e5aaca4b72"
  },
  {
    "url": "assets/js/24.8fe9e24f.js",
    "revision": "8350624757ad1075f3ea8cd96648310e"
  },
  {
    "url": "assets/js/25.082c9b55.js",
    "revision": "c5d5e1d17a2503c94947dca73a18b51b"
  },
  {
    "url": "assets/js/26.d879d9e3.js",
    "revision": "3ddc87bd4bbc99d736b1ae26985f2602"
  },
  {
    "url": "assets/js/27.f31beb03.js",
    "revision": "bd670fdc678b1abf2e77db0cc23133f2"
  },
  {
    "url": "assets/js/28.222bd60d.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.ea37fc54.js",
    "revision": "cf996ec07d4a5aa11f0467c042d284a8"
  },
  {
    "url": "assets/js/3.27d22ab4.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.9dff2f53.js",
    "revision": "07dbfbb4613c8ff288a655873ea6f2b3"
  },
  {
    "url": "assets/js/31.40390d1a.js",
    "revision": "a96d74eda7b035e3e9cb343f1ff68786"
  },
  {
    "url": "assets/js/32.fd5a316e.js",
    "revision": "931c7ccc0f2ad3c2662812e20674dde1"
  },
  {
    "url": "assets/js/33.f71cdf83.js",
    "revision": "68228b2c1e063f25c5defcf65278c1dd"
  },
  {
    "url": "assets/js/34.288dd30c.js",
    "revision": "2a8a139bff84aac6627183f19fc61a51"
  },
  {
    "url": "assets/js/35.16dfcd29.js",
    "revision": "062142b17249819f4b60df4ebcdeb5f1"
  },
  {
    "url": "assets/js/36.5c80f63f.js",
    "revision": "c774cf26890230530ca8a39620727af5"
  },
  {
    "url": "assets/js/37.cb1427ad.js",
    "revision": "b6d42cc99932bf24205eeddd2ee0079d"
  },
  {
    "url": "assets/js/38.f18edcf2.js",
    "revision": "aab7b830ab95495dd44ecef02f55b2f0"
  },
  {
    "url": "assets/js/39.0ac73ae6.js",
    "revision": "898c3c21cfccbae447f5a60b0dcaf374"
  },
  {
    "url": "assets/js/4.a114e465.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.5f3818ec.js",
    "revision": "a0eaf557e62f2a430f5d4109b6076bc4"
  },
  {
    "url": "assets/js/41.fd4229a7.js",
    "revision": "079a1e0bab85e9c3f06cab32254f458a"
  },
  {
    "url": "assets/js/42.63bbd6e8.js",
    "revision": "b84089815aa3a8d21217b8578220e720"
  },
  {
    "url": "assets/js/43.25df7472.js",
    "revision": "798ae5cff69e2d88b83b0458e28769b2"
  },
  {
    "url": "assets/js/44.18e79a95.js",
    "revision": "2a569ad44c3b6e03017c2eb860ed6e21"
  },
  {
    "url": "assets/js/45.1f1356a0.js",
    "revision": "09f1cf1d1750e4c0e3bd5497a9752ad5"
  },
  {
    "url": "assets/js/46.adfb3499.js",
    "revision": "ee6a43fce91d07c82eb7d5fdd3562c33"
  },
  {
    "url": "assets/js/47.cd87a8cb.js",
    "revision": "05fa1c9d017e055c78cbb9e9cf3fdcfa"
  },
  {
    "url": "assets/js/48.a34b6892.js",
    "revision": "97790ac44f0aebc22e1f88f4ab259256"
  },
  {
    "url": "assets/js/49.c1f11710.js",
    "revision": "345dda46575e2c2622962de47f7f78f0"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.be7401be.js",
    "revision": "b492d109e9f6a6827c2e10a031200356"
  },
  {
    "url": "assets/js/51.fb28fa45.js",
    "revision": "c18a0f73297c8aeb24ad563e56b3726d"
  },
  {
    "url": "assets/js/52.1366d23c.js",
    "revision": "b3a8a05c76c7977c09fc6795f82d880e"
  },
  {
    "url": "assets/js/53.f8fbe13f.js",
    "revision": "162fe28c1aeeb2b4bac0056ba554040b"
  },
  {
    "url": "assets/js/6.07d8db56.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/7.283471e1.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.795c6f1e.js",
    "revision": "f90dd3cdb69ebc78dd8d579aedece24c"
  },
  {
    "url": "assets/js/9.d1e9be40.js",
    "revision": "3525ace54c3056c00ffaeb79d288a7f0"
  },
  {
    "url": "assets/js/app.09852d79.js",
    "revision": "de186378dc337c0f6707a094aa8836e4"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "cddeef9e544e7519c38133af1b7e92ae"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9f797223c96d8f603246cca46f8badb6"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "0ddb8c164d2e27cede980c19e0b01c9e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fd78a3d4b2e02c5ee543d3a7b55e62c1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "6361e12df58b93a576c127fd55882df6"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "03b996f22899d2f82e7c30e0bd2584be"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "fbfd85159c3ab075dfe9d1e52cf592b6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5f92c2a64a209cc61fb6ce95e43929ad"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0d886a79d6dd87c0770f3934b4ac56c0"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "aba49475d992feb508b5194c0e62524a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "14db3db33e2ea6adf0e2911a66c0314b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "04c98f6604dedb88b4ffaadc1a4e6cd5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "45abdbc6d64b5390672edc2a6998eebf"
  },
  {
    "url": "categories/index.html",
    "revision": "f4249b7dac7a23cea1a51f837d3738be"
  },
  {
    "url": "figma/index.html",
    "revision": "996fbfbe1cfc4f50e900bb150072f779"
  },
  {
    "url": "flutter/index.html",
    "revision": "f318d107bffb9a9a81d621dfe1c5ce67"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1c7f0d4771641d42277f7c10e7bf132e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "91f0c891a731739b236513044dac1625"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "69cffd07ae2b3f3130cf39ac4e63adf6"
  },
  {
    "url": "index.html",
    "revision": "b3c19a4cc4dd0dc891d82b9e7dafb2b8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f61b8e5d1078d451f6fe917a29f0e684"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f5cb3d28809e81bff4b7fa2af0f34c38"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4208082884414743cdc77ad107e7dfab"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "5dcc38903b9f168301fb325453a9c519"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3a9e1ed5c8a690124fbbcd352ccd1242"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5fb0477209501f1a9c47fbb9e40f2670"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "64ae04a8e81f5049676db436d430e24f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f892d9ff7f22b4ce7648ac893ecb4db6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6221b1e7db4d7e25f3e9ad1516fb5f49"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ad2efdd9ceaa447b53199371730ab9a5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ff75e3f030ab9c1aedb14e06897f37f1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "1ef20d54248ab6a7c1ed4a6fe11d06fb"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "cd146a9002a01c4181f11cc3476a315a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cda043009778193cd5e9cbe3c6b8fb64"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "660e05c4869b01191ece5f134bc32bfd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a461958188613ba5ea0bdebda1e5e184"
  },
  {
    "url": "tag/index.html",
    "revision": "9ac392db2f9623b9d1baf3877696227a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9bdc214f3d53edbf57843c563b1c8bde"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4a4fbcd1c7aa27f79b1e0c0496d48ac3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "79cc8f19007cd9066b26ac0458699bb8"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "41f149ac4f909c61b92cda0b35df85b1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "ea97dbfea18420df9762aa3d49573731"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "022c5b4488cebd3f47bf7a29442ab6b3"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6a5b772f838e3088c8723745866d6e05"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "099e5e93a21990689c388085e0739c5a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e87073bebf8718c3a28246d5de7306a1"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "710488f57cb886895618068d6c2625bc"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "33ab3dd2e31debc6f97d3a28ffee3ca9"
  },
  {
    "url": "timeline/index.html",
    "revision": "817609f5752d2fc15384d1bdd8d3bcb1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c840e238b399afd614577a8fa5d7eb7e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "afb921154143b10a54cf34a4c6c378ad"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "39ede7af401cc68ec8024df3329a5019"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "97c8dc2a0fc5e5ecca924cb81b5d3430"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "594b746d36021e690d0a9f0019d9a867"
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
