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
    "revision": "e2a3f1f0fd8113f1e141f602dccb35a3"
  },
  {
    "url": "about/index.html",
    "revision": "bbf23995681bdb73f92ccad02114d3b9"
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
    "url": "assets/js/10.5dd06315.js",
    "revision": "cd64ee6e9734e26038281dc062a0cd58"
  },
  {
    "url": "assets/js/11.3b7998f8.js",
    "revision": "9838ffa5198dd293f4889c2d941989bb"
  },
  {
    "url": "assets/js/12.346a5053.js",
    "revision": "a18477256427395bc60644d6cc5ef5b8"
  },
  {
    "url": "assets/js/13.f28a003f.js",
    "revision": "f610e01c57c2b2bcb4ee222591d3265e"
  },
  {
    "url": "assets/js/14.c0de3b27.js",
    "revision": "3d84b7f30ab78adbce79b816f892edb9"
  },
  {
    "url": "assets/js/2.fa1e857c.js",
    "revision": "4c7e087467fe5425dae09b66b28274ad"
  },
  {
    "url": "assets/js/3.7ba844a7.js",
    "revision": "af69fe71284e4b6a2353f7a8c96e8a1e"
  },
  {
    "url": "assets/js/4.6d3b8f92.js",
    "revision": "9f661136a1f91b49b5743985081b8140"
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
    "url": "assets/js/app.39477c26.js",
    "revision": "d7e121c2ebcad1367f0ca3c8dc8d25cd"
  },
  {
    "url": "figma/index.html",
    "revision": "8642d9c9b2f961020d7ad38ee0a4549e"
  },
  {
    "url": "flutter/index.html",
    "revision": "af5ad3931518b5285a3eb3b6458ee4c8"
  },
  {
    "url": "index.html",
    "revision": "e336a8a0db5ef02cbb144af4275b40b5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "df725a2d646a94e666161536e2b47037"
  },
  {
    "url": "swift/swiftui/principle.html",
    "revision": "f1ae53f767e810e9133d2cd495eb4b3b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0c274c8f574082bc6ba6fa15f38eac5f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "45685884f0a900ad4d50ff97f4f4ad39"
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
