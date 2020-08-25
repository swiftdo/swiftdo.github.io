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
    "revision": "a6bb67de35ab7eb308b5c6fa924c9975"
  },
  {
    "url": "about/app/index.html",
    "revision": "0beba953c9c9c96530c2a5286684be9d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5e3f3bb5668228edbccf0bd2f21c04a8"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a8a19961d505d6f924f5fc6de246d34e"
  },
  {
    "url": "about/index/index.html",
    "revision": "b54ceebf3aa6b59074b11a94ddd69100"
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
    "url": "assets/js/52.83cbaf2d.js",
    "revision": "bfdeb6be6963cb3701de78c14a802eda"
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
    "url": "assets/js/app.0b135cd2.js",
    "revision": "9460c717da2d6776bb53be0e61b52a14"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a54415373dbd6a69f12355a13fac9b4a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "879410a7c5236216fa1e3ebc45f46ecc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c4adbf1590eef78fc8907e0285495738"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d9bea786a8b1677b1aa172d4223cdf89"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "444e2a1664e7fc8c65aec41d03bdfc27"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "fcd309082b8fda683952a80cdf46b737"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0f70a66b0765d87b992d102f0d88a782"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6c887d06ddd08d98db5c341b14719f5e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e367900e7210fb4f5f40a5c9a8669584"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "fa5c58a1a9c85dc7bb6d3d5141481848"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0ce2dd75c734d75ef0e2b172ef5b812d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0badc851175e6763a13943d78de0daec"
  },
  {
    "url": "basis/os/index.html",
    "revision": "403a655423199b230d4b24c6b44a7751"
  },
  {
    "url": "book/index.html",
    "revision": "8a23d4879792155c7dea79bdca43600a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "11711d72e9c3a31c78c31a3b6fe46270"
  },
  {
    "url": "categories/index.html",
    "revision": "82c31daa162143386015ed75132894ef"
  },
  {
    "url": "figma/index.html",
    "revision": "953bc68a6c550d3d7cb3fbff7371d908"
  },
  {
    "url": "flutter/index.html",
    "revision": "927d734578cfc37274b3e73514f74ad6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3c4d4fb64fcfd1bd68cffb657dd8884e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a4a25ea4f26676112de6fb20a34fe66c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f61802e647fc7ec8d99e43f6509cb119"
  },
  {
    "url": "index.html",
    "revision": "9fd0741208f05847c62a593e23945345"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c68bcfdb06ffee9abd958a6e46c37cae"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "800030339c269f92748140266e71e106"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "fc8d80f25c4f47063db3b26c1c1dbe53"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "245bebb79e1ae8e0475df22c784d2116"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "533b9ee8c923ab2c2ec3e224c1a4db20"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "8d9ed522cdd692ed9ab2bdce01846609"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "1552e4e777bc9afb89bc8f19b34a57bb"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e64c4e2ed7e64a4b3a9995e8b1025ed6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f90df097e90fcdfa44ff1d8d733d184e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b4059ef70ae25b69faf556a1a0c81a8a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "fce20c6c836cab615e2a0428056d305b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d03555c8f694fc9dc95bd930e1b14a56"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c2f28b1840deea149899c799b3fd78de"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cbb5937e130e2d3162723c20b41b474c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "97dcc40445f4d7e978333932efdc9173"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4018565fe8e01989cf3911855c9825b9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ecd359b50e69ec0be7b0a64a15381bd3"
  },
  {
    "url": "tag/index.html",
    "revision": "1a429f225afa7ca24d0aca63b1e82f4e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "74778f65eee3b0da901ca71757aab840"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ad1b08c796b0c34861a86ef224fa722e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "69dd085433e67a68a0a26abcee8b2058"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8685c35365ed8ebfe43835cd8bc8262c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3fd9526ff0c236ecf99b943f31e6485c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "da43420ac6daab9768821d4721a6248a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "90869e9eedb8dcf47dc69e720f4925bb"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "78d34de767418a20573835f6db3702ba"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "85572e6428ff2c3d67ae9bb651570a68"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bf3f5cb1d04df2716f41f2a7cb0d43dd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cfd40726efb852fd0a79d44ed4e1439a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "c5c87780a79ae1a8384c29f21837e2c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "dfbdcd3d981de58da8349bda46902446"
  },
  {
    "url": "tools/git/index.html",
    "revision": "05fb5696824c3cd135390d24f301a487"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8eb122639b9ba25868564b62a45d65b7"
  },
  {
    "url": "tools/html/index.html",
    "revision": "09cd665f6699ffd77b86b0d6828670c1"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "088eebe204bb0e2dc5f185e4afcfb69e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6a8519f575a4cb2adf4092a3866bf486"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5dcdbb8405750ad519d6b9721c49e8cf"
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
