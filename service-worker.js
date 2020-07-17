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
    "revision": "66d81c144c951a41d92f48c1501e38c0"
  },
  {
    "url": "about/index.html",
    "revision": "08eedb3256eb5c0fe7600785bc7c0645"
  },
  {
    "url": "assets/css/0.styles.765564d0.css",
    "revision": "ddc6098d8c7d17e6db3be87f96de5aa6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a28526b0.js",
    "revision": "f437b3c25247d950d5053b24547b55db"
  },
  {
    "url": "assets/js/11.2c3d1b0d.js",
    "revision": "c320470014eb46653251840904740bbb"
  },
  {
    "url": "assets/js/12.12898468.js",
    "revision": "3601c7bb7e2af8eda08830b44132df22"
  },
  {
    "url": "assets/js/13.59e7316f.js",
    "revision": "af4001ad0e94bd43ea91029417b862a1"
  },
  {
    "url": "assets/js/14.4da972b1.js",
    "revision": "dbb3e0d59158589ba50f874fe2512989"
  },
  {
    "url": "assets/js/15.d5e39fb2.js",
    "revision": "df54f560b225d787136c052195c059f0"
  },
  {
    "url": "assets/js/16.d601c640.js",
    "revision": "dd0a426b1a4cae868b18fb81c91e890f"
  },
  {
    "url": "assets/js/17.464cb943.js",
    "revision": "35e1656b1992239c251bc66a9f75ed76"
  },
  {
    "url": "assets/js/18.f89b841b.js",
    "revision": "642f5d4e7b0b472574d6deac4c8a2a73"
  },
  {
    "url": "assets/js/19.24edb0ee.js",
    "revision": "01ed73d7ec6bb18ea783ff7e1281854a"
  },
  {
    "url": "assets/js/2.0e06c8e3.js",
    "revision": "85ec80429e17c02939fa5e887ce52b8a"
  },
  {
    "url": "assets/js/20.5ba19067.js",
    "revision": "f9cd498d6567d5fa3708e9ac563183aa"
  },
  {
    "url": "assets/js/21.343abe92.js",
    "revision": "c0e59efec32d062be085c3d367fa6e3f"
  },
  {
    "url": "assets/js/22.c3658222.js",
    "revision": "fd4539b02e1b0a479b8718139a89ae0e"
  },
  {
    "url": "assets/js/23.9e9f9824.js",
    "revision": "c225cd345ecc2288afe4cab25042027d"
  },
  {
    "url": "assets/js/24.83d04574.js",
    "revision": "6ca82353203b255ff478b5968df9bf03"
  },
  {
    "url": "assets/js/25.42405330.js",
    "revision": "a45453f6ea5b3c7873eb0d055ebd5f77"
  },
  {
    "url": "assets/js/26.cf3b4801.js",
    "revision": "0f765eee54394d90c91e0b58cd52738c"
  },
  {
    "url": "assets/js/27.0896d8f5.js",
    "revision": "4898c815b263937e647a293886e8474a"
  },
  {
    "url": "assets/js/28.21f44628.js",
    "revision": "7b9f3c7a0aea8fcbf513d8eaa30c92f5"
  },
  {
    "url": "assets/js/3.1c2e38d2.js",
    "revision": "0ebf46f7c5786b2091a82a8e5b84cde2"
  },
  {
    "url": "assets/js/4.d42c4536.js",
    "revision": "9948e334c15457b77b801e7bf2adf002"
  },
  {
    "url": "assets/js/5.efe1834d.js",
    "revision": "a01cf77fe9894be1ccbb4f0b6c66f416"
  },
  {
    "url": "assets/js/6.351593d0.js",
    "revision": "ed3a912b0d6bb65ffb7a888087e61aa8"
  },
  {
    "url": "assets/js/7.e1b86f42.js",
    "revision": "0f69cd564662bec700551e0d89543537"
  },
  {
    "url": "assets/js/8.c3aa6057.js",
    "revision": "6ed4a372f8faacf63708c79381eddea7"
  },
  {
    "url": "assets/js/9.cb500d15.js",
    "revision": "c058a6a443685c4f9f562d40c08a8344"
  },
  {
    "url": "assets/js/app.398d574f.js",
    "revision": "2e269981ea92439818c367785702f8c1"
  },
  {
    "url": "figma/index.html",
    "revision": "b12baec4c8ceef14329451707858a399"
  },
  {
    "url": "flutter/index.html",
    "revision": "7e2ba87cfd3327ca19edd6df77693e37"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3325e97b747da296c2201a37cca23e45"
  },
  {
    "url": "index.html",
    "revision": "abbaa6b1e187ce961ae501456e071434"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "26a694574909b3127a4ca31974cb5039"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "a9ad4f867120216c0218917aefd13b27"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "1ad34f380efd3ccbe7f4e1c6f7813596"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "b1768f77de6fa8da02308fa11ef7a54a"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "d87b3083d6eec448e80c90dfee52d6bf"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "78747d6064bb8b20156e7ba56abb9bc9"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "92ef709089862bf91f435224b0a5b458"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b4b5b6dec13c94aa1eb89c8174476528"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4b5c31e067f53d218372bdd66b0364cc"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "0b20be52f3f461e3037587cce8a465e8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "23880bd15becb01b2d353bbf01203d0d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c59a2bd5dc6c18db78a35196a0f693c4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "440069efbacc4d1550b09934425e7a2a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b89bfaa0c5d85383551280fbc6b820f3"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7112440e0dacb4b3b85250c454f85b03"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ac3dbef243c8c318c452f3ff85447d58"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "83f67f89929c2058a5b183ca51bcfd3e"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
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
