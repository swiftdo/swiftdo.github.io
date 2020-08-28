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
    "revision": "f03beb1bab7db8ba0592a8f7e2129d73"
  },
  {
    "url": "about/app/index.html",
    "revision": "c8ff5d98c074455f443b417dbf73cf1e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e76466578794b730f8e1ebed34b41d5b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8d16736580ce200316865f5f6fe2c3ed"
  },
  {
    "url": "about/index/index.html",
    "revision": "7c2c0a6a46c26871ab273dcdc60f376e"
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
    "url": "assets/js/43.be25c06f.js",
    "revision": "69bb1d26243bdfef450a5be79fcfd7ea"
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
    "url": "assets/js/app.e63b3815.js",
    "revision": "fe58b545f160d3102414e7536b7441f4"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "6d080a33c7c6ae12e5e60ae75ddfe0b4"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "77226dbf18b658b3c9c54ad04d91d9a4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "759ac72f81385a900be97589a3de4c38"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2b8186370e76ac279af46b91422c8718"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "13995f7888f2542634c7e8ae3b66db56"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ba2a4835350214a79f719624b5518a3a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8cca97450cc828bdbf39d1cfd0e364e0"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "73941e997eceeaf5b5dd3d6b6222547e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "adba8189c75832e531df36552c629ffd"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4ca3adb8e62553c2d35d3712c4463292"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c02b87476fd6c26d52c46d5e7df77c0c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "99cdeabe9db844504bf363a1a8a36052"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e273e6e57c398669d7dab059aefcaca1"
  },
  {
    "url": "book/index.html",
    "revision": "158bc36e9148a81fd89fa937bdfc9573"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "936f68e40ac7fccfef876b512fda1203"
  },
  {
    "url": "categories/index.html",
    "revision": "5b44d0dcebd904295f75b4bbd1378202"
  },
  {
    "url": "figma/index.html",
    "revision": "d97bb3e5bc7658aea43d6c31b747f321"
  },
  {
    "url": "flutter/index.html",
    "revision": "081d3c514653a9e2e998d68a593c4470"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b909669f21e29d2941bbaa087cd1130c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "bae4efdf6224f6ff35b23d356d5f4856"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "162e51b8f72c54b902f133be3c635646"
  },
  {
    "url": "index.html",
    "revision": "c2c92994f178c652ebc9375b73d52958"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "64cfd68680656e34e07acfba7d632a02"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "4b329cdc1fb89c22e4b7a3b0e06d4553"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "bf9c3c187eb9ecd67ebbe327318cdbf9"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "3b2dd56dfd3b81135fce512ec8c9bca4"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "5cfbfe2c6750185c8b90aa5b2b345788"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6a75519f0bfea896060f8832032fef13"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "ecd474d636c661009bae8689dc9c19d5"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a77e3f38926416f02dbd274ab1a4f7f3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a78de46b058bb064a1795ecdad1ade38"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0ce65df1b61650fef00c1f6ef78de984"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "03187f43d37114d558e0638476e48008"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c9358343c1443d8d77eba0224e3a4739"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b000ad3496e7c5d1e446397f8581b3fc"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f32c6c9a0497e28320ecf7246c9b0156"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f9ce6c626d1d0b2529f6bb4ef6cb0986"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f14fbc79ad9a5280ddc8d21131ae4cf8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9b5326abf6fc2784dafe2af4bf5bb792"
  },
  {
    "url": "tag/html/index.html",
    "revision": "be3c72297db67cc4b8e9871fd70f1ee1"
  },
  {
    "url": "tag/index.html",
    "revision": "b90b7943815004e9b0d5e30df160fc9a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cfdb261825530e1df345069da6ff111f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b3b1b473e9da31b89b1072b0c49a720f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9358246a3b4a5341ac6691ef7e936262"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "361d0a0727a70af4e2f2f37915eb3867"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "c2faa622fa5feb1e0ff2cca34c2f80fe"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b0bca40094c33742bd68ec23ca1de93b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d76dc2ec93598c8cc49969f55bcc0449"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "9f23beadc079b0014b15331c9ba5c7f1"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d5db65f7406dae7aa03c0b6fbf0e94a5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e3f41ce608c68bee1ace9a2b32384477"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d1b43f7ebe31320c7a88d9997b6bac13"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "192a6c2aedb8ef5d6c2314f02899e612"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "25ef4af6df2430b00c00ed4a307d45ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "63800e472b53819065416c213a34351f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "13ecd65512592cc2615f7cbb4afee6be"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a07c8e137b2b92d1082792bcb191cc4a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "cdcc10c2e9d3efe5ca042ee7d45f6eb0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "900efb22cc2110cc2bb802950522b349"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "35b267b6db1e828c4a22c3bbb0da8868"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ba0e31f7f830ec4fd7a50e650dc374d0"
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
