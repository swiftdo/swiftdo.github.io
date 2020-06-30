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
    "revision": "f36a05f8848b2a6bc767d42f80411d77"
  },
  {
    "url": "about/index.html",
    "revision": "0015c28a8584fcc150077ae46ee0bdd1"
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
    "url": "assets/js/10.fe0b927e.js",
    "revision": "ca21fd5fa36309727fca72b35117e3fa"
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
    "url": "assets/js/19.b75f1495.js",
    "revision": "aa64ba3233e0178581d6d9070478a011"
  },
  {
    "url": "assets/js/2.017a221c.js",
    "revision": "7d211a35344bb34e215f8a4b94311c48"
  },
  {
    "url": "assets/js/20.b1359292.js",
    "revision": "beda0af72f51528cc03075e0a2250f27"
  },
  {
    "url": "assets/js/21.907a507e.js",
    "revision": "ad85a496c4fb36d2bbe9898363f5d69b"
  },
  {
    "url": "assets/js/3.0a0abe6c.js",
    "revision": "180cc8dfb4f90673d83492864b20a388"
  },
  {
    "url": "assets/js/4.30f180f8.js",
    "revision": "cb02cb13ce0943e2ec1ac9bccb15ebb6"
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
    "url": "assets/js/app.11fe9e37.js",
    "revision": "f81fe3661ed0daa913e852bac6340c44"
  },
  {
    "url": "figma/index.html",
    "revision": "2458c35d83d582341251ee49e94b2ef8"
  },
  {
    "url": "flutter/index.html",
    "revision": "77d4319e547f8ce89b4990b043175e5e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b165da662003fc034308303f0a7e3a60"
  },
  {
    "url": "index.html",
    "revision": "03584d08f0523202bec83022197c7329"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c6cf491215ab437b1d702e13ef13e61d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c23e31e7a70dbd43c1d46a0a7cfe2195"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "f56901b21c1f4040a951641e97a3df15"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "eeed94650b69c96dc1832e929c9f98ba"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "775df12c4b4090bf630658c2c43b2839"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "412de00a2084e20f2982bb97784f5136"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "00cd99b18bd79e77910f874b680d8304"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e9ffd19bc7cb6dcf61fca59524bedcd6"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "84021f5a938bd92a847ceac674802c3b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2ef4499b3b047e83f5c69c87429850c3"
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
