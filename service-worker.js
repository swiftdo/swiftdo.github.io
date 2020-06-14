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
    "revision": "f97e3679b2f3ef9281364cfbe5925d79"
  },
  {
    "url": "about/index.html",
    "revision": "4df7dfb2373ece32ea2bd1ba5412aa25"
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
    "url": "assets/js/11.3b7998f8.js",
    "revision": "9838ffa5198dd293f4889c2d941989bb"
  },
  {
    "url": "assets/js/12.346a5053.js",
    "revision": "a18477256427395bc60644d6cc5ef5b8"
  },
  {
    "url": "assets/js/13.99cddf84.js",
    "revision": "bac9f4de5b565aa29d0ce2987f5674aa"
  },
  {
    "url": "assets/js/14.371b36bc.js",
    "revision": "a944bdddfe80c6d27692f8fc50b3619f"
  },
  {
    "url": "assets/js/15.f0c268a4.js",
    "revision": "d9fce58525f3545c4867765b46ecc018"
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
    "url": "assets/js/4.faa5e266.js",
    "revision": "757f46690d41b3b5d149361d9738712b"
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
    "url": "assets/js/app.5323034c.js",
    "revision": "5bcfc8d2bcb9448f5878817a901146ea"
  },
  {
    "url": "figma/index.html",
    "revision": "b1b29f57df0fea6fd65680401ccc088d"
  },
  {
    "url": "flutter/index.html",
    "revision": "99bcf509b4dd49c89c927565e5cfec9d"
  },
  {
    "url": "index.html",
    "revision": "36cf99726a2d62d26bfff98a881b5733"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "149528fe74ed82da0c6e7278bd97e7ed"
  },
  {
    "url": "swift/swiftui/principle.html",
    "revision": "beb8ce56361a6cbe275a65dfd8dcd151"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2c0d98da6d1a6dcd9663555d8e6d46ef"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "991c49843777358e29a1cc15fdc9ed75"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a1b299dec20702a726db0e7cf39e7eef"
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
