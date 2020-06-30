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
    "revision": "3f48531b494640e58f3d6d74d677122d"
  },
  {
    "url": "about/index.html",
    "revision": "e2bff124fa694eac95d122c4ab917dbb"
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
    "url": "assets/js/10.9a5adfc9.js",
    "revision": "ac7c03e67d0775e7aeab06d782122cdf"
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
    "url": "assets/js/app.c3341895.js",
    "revision": "6df3b50e971d3c43568ba9eda805e662"
  },
  {
    "url": "figma/index.html",
    "revision": "a8f3776cb8ddda5697c54a22cfbff036"
  },
  {
    "url": "flutter/index.html",
    "revision": "fc5adf82fd368225046a48964329baaf"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "fb8e7c269f38d19045c5f47a114ca91d"
  },
  {
    "url": "index.html",
    "revision": "c25294abe404c5d8bb89e34d56294347"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5e81967f6b0e1c6f3fccb3fe60ecd071"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8972b3ca88ae2202afc8d214a9e62fb9"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "3c477279bdd3cd9d8ffe859520820ab4"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a8a54b355cca5219e7b327691da381c5"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "c3a8e549d733b2c1dc0515d9405f26e0"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "13dfffe301fd133e7cecc85d5e700763"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9eae5409b027546881baf1117c97f628"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6582de57f8383642a4f6c90e88624375"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "54d9459cbb23d144af6a0875743f19bd"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d71ae1cca270e5d7ad604001a539cf34"
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
