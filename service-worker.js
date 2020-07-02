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
    "revision": "0ec825f16b43faaf92d67ebd9156d483"
  },
  {
    "url": "about/index.html",
    "revision": "e97bff347ade698440eb71fb746a7ade"
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
    "url": "assets/js/19.c2ea7422.js",
    "revision": "0a5d98db1750e0e6cb11ee4ea3f67aed"
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
    "url": "assets/js/app.b9dfb1c4.js",
    "revision": "a9e6d770a1d7f6e7cca3e4b6ed30e713"
  },
  {
    "url": "figma/index.html",
    "revision": "210c1b9716c52d2fbdead83d895dc686"
  },
  {
    "url": "flutter/index.html",
    "revision": "a3979b604613964b4973fe1a873fcca5"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8ed1d1bdf6c23645bfa1638a68959d45"
  },
  {
    "url": "index.html",
    "revision": "efc39e6f26288432ec028c4058d9775a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "359770f5e21a00d0b22da256211e5c5c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "68a8260cba390b2254b3992aaf0abda7"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "466bb4c3487a562f8966e42fbcdb988c"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "b7872ac1e107127d637d0f1a73e9d745"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b2c7fa0f8f3a767384c4ed3fd0204533"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2ab3de63930a02d7ea4443fa59684cc5"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "ffb55553edf9fc6a4034c0a7a09cb046"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f7d3ab583fa06ded086fd8a20c37e2e5"
  },
  {
    "url": "swift/vapor/t1-docker.html",
    "revision": "1055be730eceda686028e1cfda3b39f0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "540fab9a123e524fa10a4d344cc684b8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9bb0f666e83d42930863ae29530a1e88"
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
