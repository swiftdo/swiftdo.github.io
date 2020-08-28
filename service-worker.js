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
    "revision": "a3146edc63e025eea0e19aa300840bc9"
  },
  {
    "url": "about/app/index.html",
    "revision": "9c09fd3d8da0afd2f8b45f6e742c8d32"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "077dde9b63c4abee8d54a95e7bbf82ab"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "639281d5e352cd71414c7e7dd48facc6"
  },
  {
    "url": "about/index/index.html",
    "revision": "1ab22383370e502efee10f39603a9ba5"
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
    "url": "assets/js/43.13ae9c52.js",
    "revision": "06efb517f10b2f706441f96cdedda0d1"
  },
  {
    "url": "assets/js/44.d9227020.js",
    "revision": "26991daf7cac25e565cc120ff0c14d0e"
  },
  {
    "url": "assets/js/45.8cedda75.js",
    "revision": "832c4070834500d0ddc55ee448d64352"
  },
  {
    "url": "assets/js/46.61e182a1.js",
    "revision": "21813b1dc733b29def78e40cf137a000"
  },
  {
    "url": "assets/js/47.3cb53dc2.js",
    "revision": "f4119083ed57ace7251f961e9e29516a"
  },
  {
    "url": "assets/js/48.47b4dcd4.js",
    "revision": "1f266db5ef34972037326705c7ab8a9e"
  },
  {
    "url": "assets/js/49.07663fba.js",
    "revision": "0d7a9b29ffd5f48c26a96023cef88f83"
  },
  {
    "url": "assets/js/5.6ab1ab94.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.1e2ec629.js",
    "revision": "fe6bff8e2a8cd5d7f2e7f713adfec22b"
  },
  {
    "url": "assets/js/51.f766d63a.js",
    "revision": "7509bf2519c188ff46866ead2d77eb9d"
  },
  {
    "url": "assets/js/52.724cf0c1.js",
    "revision": "b6dc715961bcc149d95da02f3f8b65af"
  },
  {
    "url": "assets/js/53.0cac02a4.js",
    "revision": "f18e74343f7c775b105f3ee1d464f208"
  },
  {
    "url": "assets/js/54.176a82b0.js",
    "revision": "221d78d8ecd5decd4f3537939180e543"
  },
  {
    "url": "assets/js/55.303e4ecd.js",
    "revision": "4511770b8ebdb953e4fd9466e044234e"
  },
  {
    "url": "assets/js/56.7339d5b5.js",
    "revision": "e8118b2b3f51b0d4f5a9e04d5be7f58f"
  },
  {
    "url": "assets/js/57.2df09a43.js",
    "revision": "6ca7bf0fd6954cbbff34ea699335c916"
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
    "url": "assets/js/9.58c9b149.js",
    "revision": "b4cb1714e6563458ad490304820818be"
  },
  {
    "url": "assets/js/app.e18f51e2.js",
    "revision": "6a3df6b5cc646578d413b02ffee726df"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "9c46f4e60463ccac8ee9da73519b3607"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "09e697252e485d6812dd27d3534c9d11"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d6a6344ed0a9256af205c19a2d6c4234"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1fc2d9f455604081d922af4039ff8c5a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "dfe088a3264ac7f8df0ebaa2baebb246"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "00bf9d0348ec1794e8327ec91a82a6b6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "728a1e1d0a88072b9069a2183d98f2d4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "131bddb0ac93d451c273f4b825056914"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "edea93e8d83734d68065fdb2c932f807"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4412dc9ee9b8b6e17408bc8840ba2653"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d5075d7ce68617ca36146ba7b4a19007"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f12a9eb88a36181f015df32b34e1164e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "efd20171d5c545a207c25c01e5de0ba2"
  },
  {
    "url": "book/index.html",
    "revision": "71c594d3d0b4ad23d4a314c4fd1b1e6f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "db87fa2d4a2b3c348d09165603e168d7"
  },
  {
    "url": "categories/index.html",
    "revision": "aed6d9914caa5adac00a60296c80836c"
  },
  {
    "url": "figma/index.html",
    "revision": "dccd8d6c1496599b68ca090075fae5fb"
  },
  {
    "url": "flutter/index.html",
    "revision": "ee151ccaf291e10e1d2081d81dee2b9b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5dbe811d4afcee35e6e2aa863b01cd30"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "eef71fb90b9f003d0d14eea507a36835"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "48dfdc139167322bf1f9ab22819ad939"
  },
  {
    "url": "index.html",
    "revision": "f362ad0575337841c4d48e3a6958a4fa"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "da4a8050d8991b13fee7a4c26c793f45"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "494b3c40e149243f12672ab71d7fa057"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "e60eef516ee28c29f6233ec5b3659750"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "c2d31c481028fccec619b4106a49f815"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "47135940b6a2bc09b324c3de18e3ddba"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "713dee59c7183ba60e19e6dc0da3624b"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "2480be2aac5f653932a44cd6078a5184"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5fff86c0153c98ecd07abde6a77c0e85"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "06d327e03fd5704c07c77ff42d5ae673"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d7102568b07b6e1e7c71601c9b54295d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "348f882aa6769e43392dcf659082c69a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "350f0357122d2e7bb8458f5f60496e3d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "83f215ce622a654271ae0b524b04801a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1dd8ffaef0abf455d3aeb86b1620cd55"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "79743d6b06a2f902b8273d1e9f3371e1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8a4be475656f605cdc2492604d0a5c10"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2548b3b7f2e72edef1136a4c2300dfc8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b1dd7ea9a1f1579658c6e64ddd004c0c"
  },
  {
    "url": "tag/index.html",
    "revision": "97a23b34f470b2a8c50226aaf74c9ee7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "05ac2d33cc475c623ac2bea64f7d39a7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "174754dd7a9ac74a95b452e4e94f3f74"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6447da7219f379ef879cb2c57546dd84"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "22e722acc9c7c52e92bd3ca56303d726"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ecdee796415c0bcb2eeba8d2bbbe8232"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "bec2e9c517865d97f69c1fa5b30ce8f0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "03acef480a458fbc39557d7069f0588c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "cffdab755ff887fda543c227922c3352"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "04b148768437b31b0155e3e21f5b6b84"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "927075f8dfaa82f458c4f9b436210e0b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6493c9298401f2dcd49d133be1fc778b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ef7997f5664743255da157c67f011a76"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3e861769877c69b908919903e38a6880"
  },
  {
    "url": "timeline/index.html",
    "revision": "ab4dad7bd12991297bcbc197fa35b776"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d897b1861a07f8d45267ee5b7916ab14"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ab2b70b749583a45daa2685c56c86549"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fa83087e65b9c5c1d805832de7df2f8e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b53faff9c555655a4245d9af9ddf6f30"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "91c537eb34fa99bddd89ffe644e477cc"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "19a29172042fbe717039a458e20f415d"
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
