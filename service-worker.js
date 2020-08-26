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
    "revision": "2342947ec7e4b400e79d5512d9afe44e"
  },
  {
    "url": "about/app/index.html",
    "revision": "43b9d4bb494e12cce920dbe87b999b61"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0bf20ac8c224a78b5829715661814c12"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ede5e35c72f422faf9893838c7bcd66e"
  },
  {
    "url": "about/index/index.html",
    "revision": "fd2cc536664dc63694baa2822b610b96"
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
    "url": "assets/js/1.a77c5691.js",
    "revision": "69a4efb389d3f8ea8550d7a04c553e3b"
  },
  {
    "url": "assets/js/10.b06c0997.js",
    "revision": "516f705edab68410b8c8dec3ab349800"
  },
  {
    "url": "assets/js/11.81c82553.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.c5800ffa.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.81c1f879.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.d3ade443.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.a135ccc6.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.1c30bf1c.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.a0a779df.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.f0e594d7.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.ef7b87f2.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.cbbf00f0.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.a0fda9fe.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.cb9919af.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.446c7abd.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.cfd9171b.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.336f6c5a.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.c77469c7.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.62ccc67f.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.9cca3e26.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.339b73eb.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.32491c79.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.a7a5eea8.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.a29e802b.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.cf799455.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.fd886188.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.be58dbc2.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.e44a5800.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.f383ae4d.js",
    "revision": "c6c9d09aef830f67ed3698df802ffd30"
  },
  {
    "url": "assets/js/37.82dd128e.js",
    "revision": "8d87cee30bc89bb15e9ba932295979bf"
  },
  {
    "url": "assets/js/38.7b2d1ddb.js",
    "revision": "c5a3ea851f0fcdead27ee86d73828814"
  },
  {
    "url": "assets/js/39.c3ed45c4.js",
    "revision": "ccab2e0feea8e45d80b19387a189be02"
  },
  {
    "url": "assets/js/4.a6b8f26f.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.66ac3bd3.js",
    "revision": "7495651c213baa4c7a87dffd2988d254"
  },
  {
    "url": "assets/js/41.2fd88d26.js",
    "revision": "a84267565c14b18768b02e51625dab4c"
  },
  {
    "url": "assets/js/42.4923682d.js",
    "revision": "1e34768bf4c35d9501f259717334ae18"
  },
  {
    "url": "assets/js/43.9a3ab465.js",
    "revision": "c37c9795470075180a06cf99eb590746"
  },
  {
    "url": "assets/js/44.39811995.js",
    "revision": "91c58b4aab25e9c4be839b8a0e0ae9db"
  },
  {
    "url": "assets/js/45.60a62396.js",
    "revision": "dc65a0a289a178eee3f04dfa41c8be7d"
  },
  {
    "url": "assets/js/46.7db70adf.js",
    "revision": "a6f0e379753b186569a7eb7e4cb183dd"
  },
  {
    "url": "assets/js/47.802713a8.js",
    "revision": "5cf1caed8b40874f6d74f7777cc15fc1"
  },
  {
    "url": "assets/js/48.567504a5.js",
    "revision": "cc19354a8bfea554d0a9f6b838186cc4"
  },
  {
    "url": "assets/js/49.043836cb.js",
    "revision": "95df315ca205fe07470007d11353e2c0"
  },
  {
    "url": "assets/js/5.6ab1ab94.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.9450ed61.js",
    "revision": "2208e050eb6f9e39f46a56f4bdb46c6f"
  },
  {
    "url": "assets/js/51.7eeb1ce8.js",
    "revision": "cc1971201d479abdbc99a097e9810eeb"
  },
  {
    "url": "assets/js/52.9a93bbbc.js",
    "revision": "9ad4c49d36495ba9bfe91603c55033c4"
  },
  {
    "url": "assets/js/53.e73262af.js",
    "revision": "bedf8e71b7a53e370fac2c9785712865"
  },
  {
    "url": "assets/js/54.d62458bb.js",
    "revision": "97b755c849a0c087ec0df4edf88afa0d"
  },
  {
    "url": "assets/js/55.925ebc74.js",
    "revision": "38e6632bd2e69d0bd66bd385b26f046c"
  },
  {
    "url": "assets/js/56.d0079009.js",
    "revision": "495518680c9d350e4ea183bf7de51f36"
  },
  {
    "url": "assets/js/6.23a75e3b.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/7.8fe10757.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.c3dfe21c.js",
    "revision": "f90dd3cdb69ebc78dd8d579aedece24c"
  },
  {
    "url": "assets/js/9.10d4e686.js",
    "revision": "19b188f4c679688bf0eb19ef66399e1f"
  },
  {
    "url": "assets/js/app.59bfb19b.js",
    "revision": "512d2e8e384ae7f6af0ef07fbfc35bcb"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "54a058f835fb4eb99b70a496bfd56e3a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "fdba6ebbadeef9da297a8fe0dfb3e1be"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "22dc7d01407805324fd759819b66491d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b0eeb998fd99f636806bb393323987cc"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c0a5c2f3481dbb1532e7fcd8beae95da"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2473f7d1adbfc6c631261ce49247875a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8bb6c8e12749a78cb2c59699c76c5c50"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "588be46bf6db524a18cb6ac6af2b499e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ff16ddebed347913098c591e697b798c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c5504a24c12d403d6b20aa7b3d44290d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "cabc4a73b094c9f471581f726d7cc308"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2c7d9d444ec2807b19f98f6f16c18e06"
  },
  {
    "url": "basis/os/index.html",
    "revision": "78aa87cd61ff5a959b2a7fd65c560595"
  },
  {
    "url": "book/index.html",
    "revision": "e7e115b2bde8fb7ecfeb8c38941aaf14"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1d4e9e85be84e01e5a0707b7c23c62b9"
  },
  {
    "url": "categories/index.html",
    "revision": "e415218eeb3906972ed442de960d168e"
  },
  {
    "url": "figma/index.html",
    "revision": "499eaa86d7139db40217ffd0cbe9a45b"
  },
  {
    "url": "flutter/index.html",
    "revision": "8b1409561f948e17e6a50694833f8996"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "300d5e19c53ed198ead02b19b552b612"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "376916945b6075e3fb591c1b2f1d4b05"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e02a0df710f295cb49926fa74d0a3306"
  },
  {
    "url": "index.html",
    "revision": "5dd8b09c59fafd625a4c25a8f99143fc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "be9e42b2fa8d10bf764e03695a9c81f8"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "358fe746a15ec57adfdb7b106be3ff30"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "62831e1edd84664af5ccf54bde6c5eef"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "e1ded5a4a7eccb3580020f320cde4598"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "5e53583977e45217b92c944606d00337"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "db761610982165d55c726c95bb374a15"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "a8e5c550fccfa54dad8d65903605bf33"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8c67fc708cd2f6fe2f0cf2aacff766eb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "02f1bb53fb21749f8cb16c94d328c868"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d6cee6ef6b50c37de23c38181fb4c623"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "79e2ade5f59fde4cf094df86cee1e644"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "1eeb87ad5c64d89875ffd375094cba3e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "70ba0548162d6a50b8ef99e30bbb856d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "105be95e107ce7b1a9fc562656e0eeb0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "da2ef0744a633fbf29f4e88eb05c1e82"
  },
  {
    "url": "tag/git/index.html",
    "revision": "af48487dc6cded9bf1b01db060babcd9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bcfbc5281226cb8de6cce3f358a5773c"
  },
  {
    "url": "tag/index.html",
    "revision": "5544e6f7027611d430e30b525c3edef9"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8e64161979ed1b14443cb7670313279f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ca3a58185de901b9c9f9f716f93ba267"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ec01d02a97862b3a1ced22f741ce861d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "25df17948377e8eb546fb3a8d28b4183"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "29ddbe003c5d00a3a87b70d0baafc200"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "969f283177441731c6506b0de3f1b825"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "36fdb7099585d8b0f806532500020abf"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2979d64eb1beec29b60a792f681d18ae"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4660d06a3bbb4557e448c76fbd79bf5f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f722f4600f651a97661409c740f364d9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9d291d1c2bcbbf04a45208efa003c2dd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e1b92016cc395e25b53b66e0d9d9e2ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b6eb5c952d81fa010f184be9176f65a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "72fe87cbe3122c50ac6c9ffa5b6c33e6"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3168f3c6d69081b6e5d69017f31999bf"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a7b01754950aa48cdce521101fb167ed"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "990835b94ad5836c11e33d296ad6ccd1"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e67c0ee74428dfd922e747b4a1eba312"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "455b8b5948515eec0724477cb664bda3"
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
