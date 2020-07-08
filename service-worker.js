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
    "revision": "fccd16d0e3e04900157e08f2851d66ea"
  },
  {
    "url": "about/index.html",
    "revision": "44a68305a3f332100ea0a49f8d22e25d"
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
    "url": "assets/js/18.77d5be28.js",
    "revision": "6f16cbb557073f274a7c606058d79686"
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
    "url": "assets/js/7.2808847f.js",
    "revision": "7c87dfc64f76465be36fe2a3f8db9308"
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
    "url": "assets/js/app.3e4608d5.js",
    "revision": "01ed2acf1888dc313834b681ec02d523"
  },
  {
    "url": "figma/index.html",
    "revision": "4398db556f265c1e5fc691a63767874f"
  },
  {
    "url": "flutter/index.html",
    "revision": "567c0d1019c84bcf06151d16eda48124"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "56c033e957393dd79492ca28a9bb32db"
  },
  {
    "url": "index.html",
    "revision": "a7d79f49476d985181867424d6bea48d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bbc76aa71c0005f9663e34ac5a6d791b"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "3f5389405fe62caf1889a783417d675d"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7985dfec965ac67e11ee242623dc6882"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a3ce758578ee4d2f1195853cd8975202"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "110a4d5f3d9ea946f118defe523929d4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "c50c0135369eaeb29c26023d53984f4f"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4199ee129d6037388bc631f548509842"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b040a49d09c736c73fc02705bbb51b2e"
  },
  {
    "url": "swift/vapor/t1-docker.html",
    "revision": "a8de071027ea3e4b4734b29547f38236"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "aeaaff536958564e98cdee9752ad62e7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5fa6a5283b04ffd33d102b402ce97521"
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
