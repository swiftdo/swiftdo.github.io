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
    "revision": "75006a02145a89b914396036a7d43a9f"
  },
  {
    "url": "about/index.html",
    "revision": "f7dd548d2540d0b2f62e59c4e746b463"
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
    "url": "assets/js/10.78a9811b.js",
    "revision": "79d90227873e044b498d1134e576a372"
  },
  {
    "url": "assets/js/11.85cc337b.js",
    "revision": "c320470014eb46653251840904740bbb"
  },
  {
    "url": "assets/js/12.d1c5de9c.js",
    "revision": "3601c7bb7e2af8eda08830b44132df22"
  },
  {
    "url": "assets/js/13.fa757e19.js",
    "revision": "af4001ad0e94bd43ea91029417b862a1"
  },
  {
    "url": "assets/js/14.7ff6f135.js",
    "revision": "dbb3e0d59158589ba50f874fe2512989"
  },
  {
    "url": "assets/js/15.2b2f85db.js",
    "revision": "df54f560b225d787136c052195c059f0"
  },
  {
    "url": "assets/js/16.ab5006f8.js",
    "revision": "dd0a426b1a4cae868b18fb81c91e890f"
  },
  {
    "url": "assets/js/17.4a3e6fb2.js",
    "revision": "35e1656b1992239c251bc66a9f75ed76"
  },
  {
    "url": "assets/js/18.0b0d8864.js",
    "revision": "05ded66bff667878f1efe787ca825c62"
  },
  {
    "url": "assets/js/19.cc903178.js",
    "revision": "dc55fe9a4405bb4a935bac0cef2c06ce"
  },
  {
    "url": "assets/js/2.b94b6e59.js",
    "revision": "6f013d85c7ccb75572995144c7928115"
  },
  {
    "url": "assets/js/20.b347e81b.js",
    "revision": "7d20ec919267e0dcde2b2e6a015994b3"
  },
  {
    "url": "assets/js/21.9d8a9cef.js",
    "revision": "5b7e5678fe419863d901f765ee815b53"
  },
  {
    "url": "assets/js/22.e030a4aa.js",
    "revision": "494b19b5dbb4f68e41a93ca9ba76e815"
  },
  {
    "url": "assets/js/3.77388770.js",
    "revision": "0ebf46f7c5786b2091a82a8e5b84cde2"
  },
  {
    "url": "assets/js/4.d1db603e.js",
    "revision": "159f1963cc63605a29da8d585c6ae39a"
  },
  {
    "url": "assets/js/5.ed83750a.js",
    "revision": "a01cf77fe9894be1ccbb4f0b6c66f416"
  },
  {
    "url": "assets/js/6.40d9d303.js",
    "revision": "ed3a912b0d6bb65ffb7a888087e61aa8"
  },
  {
    "url": "assets/js/7.8d135d57.js",
    "revision": "a4f0003b3e40752071f9ebc923a43a24"
  },
  {
    "url": "assets/js/8.8ee22ec2.js",
    "revision": "6ed4a372f8faacf63708c79381eddea7"
  },
  {
    "url": "assets/js/9.65031172.js",
    "revision": "33979625e1576092bbe346350f5707d0"
  },
  {
    "url": "assets/js/app.4c992fff.js",
    "revision": "472d63802a342ead2633765b27b7223f"
  },
  {
    "url": "figma/index.html",
    "revision": "0c0bd9b3d102807e2fd9735e201f1314"
  },
  {
    "url": "flutter/index.html",
    "revision": "6119bfbbdbcb4c03ccfc742be24ca0b7"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "12aae1d6d4dcd403b6dd2c12da8ebf44"
  },
  {
    "url": "index.html",
    "revision": "f9b94a2579f96945a76e6349fb33e366"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "138f81d64b3401021f0c7d6a440dabfd"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "0d5b0aad086ef34ecef25bcbd90f8252"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8f601a17ef0ceeddb6fb8bf709862858"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "d2a7b7a3612c55c42b158ea59c8d7305"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "4c9fb089164be9c78d7b5375d53c39cf"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "8412b240ce31b4b05bd77638c22c50d3"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "82a6ca24aae9608ba8ed815641d286ba"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e286139dbc1a5653e208ca54d55893bc"
  },
  {
    "url": "swift/vapor/t1-docker.html",
    "revision": "c2b837a46fee6300ae3d620f59323f6d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f55d4ae1b1bd86372bbd53910878a56b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "82cc9647df0497be926d65d7a6881cb5"
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
