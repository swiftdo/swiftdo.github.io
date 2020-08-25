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
    "revision": "33cadbcd800ec587a45c4af0e20c17a8"
  },
  {
    "url": "about/app/index.html",
    "revision": "3d11af197ffc5dcff2381de56aa7b0f1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "9fa9cfffae243568a5d63a8778bb36f8"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "57f83391149f9da0bab753988f790950"
  },
  {
    "url": "about/index/index.html",
    "revision": "488b809817fa1bb3b68d5651f925373a"
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
    "url": "assets/js/52.b1d89613.js",
    "revision": "a7c6bad9db6dc3c366e4fc26821adf66"
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
    "url": "assets/js/app.d0bd7043.js",
    "revision": "e2c1ea0d1b7aca519ac0d538644edb73"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "20ac5477a028dc44586234bbd22ba02f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c617a57a55502c2b533f2ae7e34f959c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9a29b6f6d1e6654331071588da0dd9a2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "14afad3dca68998943f9b947586018aa"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "92df200adf6f162b28c5b7aa27b2c544"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "37dc80282d4806adf49e889eb9ee96d6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3cfd9f438ce7ec304456d9bd5ce5f0b4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a693f51b0ab5d692b6bc9b82b5db9a8b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "fc18573ccb37de2398b7cd3a01e0d721"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "879a3e7efa50fbedf4097e591e0e328c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f533d28cc6fc5e42322766c54c733d10"
  },
  {
    "url": "basis/index/index.html",
    "revision": "460a7bb6a96310d8b870c54f97a92fc9"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7af665163c9cb6a5ee8abf84cd569fdc"
  },
  {
    "url": "book/index.html",
    "revision": "8dd7f7a6be96acb71d3d6078a7a4a862"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "93b7b74cdf04473845b6ef35730c7aaa"
  },
  {
    "url": "categories/index.html",
    "revision": "e2b0fee7398b3fa94e0cd7d74dc1bebc"
  },
  {
    "url": "figma/index.html",
    "revision": "d02360f49d0af3bceeafc0123f077df0"
  },
  {
    "url": "flutter/index.html",
    "revision": "295b18e3887dfa870f1fd20e7bc58d75"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "892a053d98cefb58f15071a1305d2f26"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "53f069565b5a25edade194bcc50e19b6"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "22bd75ec4687bc1a56cc548dd3bff66e"
  },
  {
    "url": "index.html",
    "revision": "49cc39fdebc3e9d7581a78c97c1d0185"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "70c08024fba4fc8d239534b9db9df39e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "e0cc6b9da6276d82894fca673413c156"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "31ee0681e77f781ae231593d1ecf6f8e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "de20af6af3ea37e75757f4f4439b50d7"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "1997666c85a81c362e6ce8b4de3b21cb"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "73ce9a2bdd4ac7dd1fd6e20ef0065739"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "87048aa47a6c9fbab951caa7b0929f47"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7e98c7e87ae7d378dd71e894cd6ef9b4"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e70370ee8a1f3e956c14e64a600b8189"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e3b54d266f1bd02929f7f400c0c1b7f3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2ea84727b871ba4154abe62ddf0b1e43"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f9b07b45380ba96147d4da8afaa8b06f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "09bb6c4098f027e4f7af5d7d477d3d72"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9b848b586b1b67f664e3022ffc1bacec"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "dc2673e4951e695ba70d3f9199d34801"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e68bab26cde6b84e6030a3f2d221f7cd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a765362b56b3ccc18eae46a298193ffe"
  },
  {
    "url": "tag/index.html",
    "revision": "612366eab051a162a558b3cd6474f7a0"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a1ba4c069901abc5766c8fa2f49c8008"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a010347efe440e317aded7d9acc65f0e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8d3cfca92f5f3f048998c682b75b4c6d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "34a7740352af0956ece17997b8f3ffed"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "53f55381ef8b1960a700a7eef11afddd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "79399a9cf662751e0b4385037b8376ef"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a4a0a055d96f15bb45c46c9a96101903"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "42c78ee5e563014bc86e461f908e4ff1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5e228e2fc5ae599683d3dc5b2d9b9f06"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "13238f1c78a14baf2be279fcb2786cd7"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6e5defbf7ac71937a7022e93de8e9645"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "72d6a148ea57995bd42b7f02578b098e"
  },
  {
    "url": "timeline/index.html",
    "revision": "0ff3416b0776b7c8a0a1d9e3fcf4381f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c2cfab857010ce4cbce99c6f483d7d6c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "88220122c870077c2cd3af84f50d816f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "28748756fc875dfb1da71b00fd55a2d3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6e15eb889beb2a73e0a02aab37d9cd77"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d2c68bd73f5e1d43bb918f21a1db53a0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9dfee1786a9a43f239d0c43381212e9a"
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
