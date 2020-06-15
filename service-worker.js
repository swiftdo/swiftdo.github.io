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
    "revision": "595436414951fab0fe494ae50ab4395a"
  },
  {
    "url": "about/index.html",
    "revision": "693376170d75e6a02f87b8f01546aa4b"
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
    "url": "assets/js/10.0e7ab212.js",
    "revision": "e6a138c2a154cd613e1d2f2f808443e9"
  },
  {
    "url": "assets/js/11.6e64756b.js",
    "revision": "c274638f433be0ed8ff847a199cd0d56"
  },
  {
    "url": "assets/js/12.03959976.js",
    "revision": "7948287bda922da86df27456974f48d4"
  },
  {
    "url": "assets/js/13.78b41a93.js",
    "revision": "a28076d0a89888c148bd27a08a03309a"
  },
  {
    "url": "assets/js/14.2b80f4b0.js",
    "revision": "3c7584f9d1fbafa3ed27f958ecd7d000"
  },
  {
    "url": "assets/js/15.4db7a4e4.js",
    "revision": "780bde3d9524a131642fe66bc9b1005f"
  },
  {
    "url": "assets/js/16.98d5953d.js",
    "revision": "5f1d32cf96d55eebd8b29f203bcec10d"
  },
  {
    "url": "assets/js/17.a100236c.js",
    "revision": "33c24aa990e33dbce9d7f6638a8be22a"
  },
  {
    "url": "assets/js/18.ef454c04.js",
    "revision": "bda4ef8b12a48d39eb6d22b70261483f"
  },
  {
    "url": "assets/js/19.731178e8.js",
    "revision": "58497892c808356b7d9c0137438f45d1"
  },
  {
    "url": "assets/js/2.017a221c.js",
    "revision": "7d211a35344bb34e215f8a4b94311c48"
  },
  {
    "url": "assets/js/3.0a0abe6c.js",
    "revision": "180cc8dfb4f90673d83492864b20a388"
  },
  {
    "url": "assets/js/4.b127ece1.js",
    "revision": "e5e84a3cba872aee354fb4b999af2fb3"
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
    "url": "assets/js/9.2da3c6d4.js",
    "revision": "c1e3c96b635eeeadbf10a791492ae0dc"
  },
  {
    "url": "assets/js/app.ccf0408b.js",
    "revision": "c39a1d164bd878aad6e466cd6d4b57cf"
  },
  {
    "url": "figma/index.html",
    "revision": "32dec823694dad30146b880cca2331c4"
  },
  {
    "url": "flutter/index.html",
    "revision": "0bb7e3e2d587bdabc232d231d0defb5e"
  },
  {
    "url": "index.html",
    "revision": "80e0f3f33a9e9e0a54406dd7b29e40b6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "926140da29a53258293cccf240d3ab79"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "65d8b3e49cc142741e37e18e384a88ae"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0afedd5d33216aae9466d3bee483638e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2941f50efac429d7752ad788e36aafe0"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "23b6a1a32f6f92f16bfcc27037298bc4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d760f8679392e863436cd4c332698917"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "27402649df81e0ea19d394ea9968e6b0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c5f959951eed202192c49ffe7de78c6a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2eda27b42095913718114fc72fba2eca"
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
