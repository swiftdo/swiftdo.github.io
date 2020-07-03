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
    "revision": "c9cdb4638c1e33a066b21b52482ec8e4"
  },
  {
    "url": "about/index.html",
    "revision": "d70d1ca31bb2bf81c87143ad95ff69ea"
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
    "url": "assets/js/18.dbb21737.js",
    "revision": "7e10914e9cc534cb96332f226df79deb"
  },
  {
    "url": "assets/js/19.a8bb84c4.js",
    "revision": "f5aa4b63108bf5fd90e4de6cf4ddd263"
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
    "url": "assets/js/app.454a87b5.js",
    "revision": "f0003437a92f572592d5c56cb6e294e7"
  },
  {
    "url": "figma/index.html",
    "revision": "ce01f9875dd11c36f00bcaae2c060409"
  },
  {
    "url": "flutter/index.html",
    "revision": "dc9ad6b08c66924cdbfa41428e29ff57"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "041e8accbecedaf719fd9765fccfecfc"
  },
  {
    "url": "index.html",
    "revision": "e05323a9bfadaacfb895105b38ce9a39"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "18048cb876fdd3cb596ec3cf91e75671"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "d863ada1f1ded24bf0b7de36432e7ebb"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2c6e2437871ba8b7ce22c7b571d7e05c"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "01172d85a4a8f385461c02d49d18f9e4"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "6bb87b1ac92d3607805fa00edc2006b6"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6e4054886e4db5e1a0a145837e4ca371"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "896a18f91d460157ff6cbaa1f04a2aee"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "af7beff1282db5d16eba9cef08dfcd97"
  },
  {
    "url": "swift/vapor/t1-docker.html",
    "revision": "185d07afd4cc2637dbe4a947d283b10c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "eee8c0942240a70779f883600ac873b6"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c4fe799c6ad3cc160728e4abcfa5c85a"
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
