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
    "revision": "9a5bd16a076ae59f88731152c16693de"
  },
  {
    "url": "about/index.html",
    "revision": "7fe9cbbdd9ab76c669a1b469a2e8685d"
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
    "url": "assets/js/11.d117179b.js",
    "revision": "9838ffa5198dd293f4889c2d941989bb"
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
    "url": "assets/js/7.8ac360fc.js",
    "revision": "cbb5fcfdac28baf005f2bb7b9aedbf59"
  },
  {
    "url": "assets/js/8.240ceef2.js",
    "revision": "81ce1e8322af3a6fce7543dcd06382c6"
  },
  {
    "url": "assets/js/9.2da3c6d4.js",
    "revision": "c1e3c96b635eeeadbf10a791492ae0dc"
  },
  {
    "url": "assets/js/app.c3928066.js",
    "revision": "b3b534499b448029dfbcb6e93a52dd4a"
  },
  {
    "url": "figma/index.html",
    "revision": "e9d21a0c515b16230c23c9205a8decd6"
  },
  {
    "url": "flutter/index.html",
    "revision": "714a95e14588d9246d62b39dea91a0bd"
  },
  {
    "url": "index.html",
    "revision": "a5af2d440c6a7245975d0d905d454511"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c260d984a6bac6d116dfa26b439b6bd5"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "72ad98b86a4f9109bfe1e7b4d9745efe"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "f9271bafd832c85aa55f9a8e6b1d9593"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "54ca647a1d0420e900164a2a5e8a5df6"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "0791699679cc63bf26c79ab02a3edd6d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "f8ef254b15e0ec88f098c7b8c9ee91ca"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c7aaded19df95499da277f766cd16dd7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b34c9e8b11fdccf674e90d9581344e4b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "db737fd657d5020afaf2cbd52ec5f0df"
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
