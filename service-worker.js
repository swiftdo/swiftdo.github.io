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
    "revision": "24339e8f7566445fef27cdba6d25fd23"
  },
  {
    "url": "about/index.html",
    "revision": "8c20d20dd5be4c78fba1f9c9a293172f"
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
    "url": "assets/js/10.3f9bea36.js",
    "revision": "a8fda7153b486d479ac97370378a44a7"
  },
  {
    "url": "assets/js/11.96632543.js",
    "revision": "2eed9069257bf67f3fa2a6961ca1e68c"
  },
  {
    "url": "assets/js/12.b4c29501.js",
    "revision": "4d6d7b025e8c2023cfa9a11c65d8c160"
  },
  {
    "url": "assets/js/13.95ad9a47.js",
    "revision": "7bf063bde5349e2e09a1ef1259475080"
  },
  {
    "url": "assets/js/2.08cd7f94.js",
    "revision": "570b403f7742e3482a6da228d34e8915"
  },
  {
    "url": "assets/js/3.d105bab5.js",
    "revision": "005f0cd4f90f80b0617950652ae2c5f2"
  },
  {
    "url": "assets/js/4.85c25b98.js",
    "revision": "a2ba4464e3178128c92c398f606ee12d"
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
    "url": "assets/js/app.37c05f5e.js",
    "revision": "7cfb4267f82413093877fbbd8ddff4b0"
  },
  {
    "url": "figma/index.html",
    "revision": "58737f8eece7929f8f389222f4389043"
  },
  {
    "url": "flutter/index.html",
    "revision": "9bd00bf120087d88f62b58a9229e02f6"
  },
  {
    "url": "index.html",
    "revision": "fe25ad7ce42cf45f9d937d1524f255f5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "2da46872201d466f21b680fccf8f3b58"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c1b04f466b2454c22f025e72181d0a09"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "edd8d9522b2ba338f44d998b14d7228a"
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
