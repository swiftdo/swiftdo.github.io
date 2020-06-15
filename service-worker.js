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
    "revision": "961f3e500a33fc826dfd2d04c1a0ff56"
  },
  {
    "url": "about/index.html",
    "revision": "efd4054062a4217ca093422926d57506"
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
    "url": "assets/js/11.fc9a4f46.js",
    "revision": "00b3db33e4fad1e649fde5e58a00bb8c"
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
    "url": "assets/js/app.a9ffda10.js",
    "revision": "1f2a2566b2894e61621b56c1510f58e2"
  },
  {
    "url": "figma/index.html",
    "revision": "66402ce34ce16749e2dbb8e38d6eb320"
  },
  {
    "url": "flutter/index.html",
    "revision": "916286fa30e47f631e0fe2a8b232401a"
  },
  {
    "url": "index.html",
    "revision": "a94c0d173650cdfb70a65a14b733536d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7d8f2ea75c435486bb9bd84113149ec9"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "ad665a4ee17ef693261fc130d27fecd8"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2a7a18f38299ece28b64d82de79c741e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "486f86e46527e31a2f7e9ca21f339ea5"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "811984d0a5e32e6b8fac2a736f1da1c7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d8e8ba0f9ebdc7c1cf153c08e8f93216"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f279478fcaa1a2a6517e5151b105c911"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cab8398e98baf773bb89ac94d8b7834e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7c38c6aa42bb1c859006b6c62d4efb23"
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
