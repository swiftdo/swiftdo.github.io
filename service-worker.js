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
    "revision": "ae14f822506bbe5bdd8f008868df292b"
  },
  {
    "url": "about/index.html",
    "revision": "c4e01aff3dda75a8ca10914a147a1471"
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
    "url": "assets/js/10.53b4f542.js",
    "revision": "2bb634c2f7a455043bd6f8c410292b0c"
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
    "url": "assets/js/app.a6082a62.js",
    "revision": "59189af3eb1a5bcdd013acef10602b24"
  },
  {
    "url": "figma/index.html",
    "revision": "d12a3fe28aeac528061ff84cebf628fc"
  },
  {
    "url": "flutter/index.html",
    "revision": "af3114e02cece3ddd83e59fd934b838d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ef6e086d2b4014265562e93723a4f9c0"
  },
  {
    "url": "index.html",
    "revision": "09830ea3b60740cf953828fac37accfb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "985673287bbaee320e03f2e8620f0ea1"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "4b7bf1fe55653d77d5230058519bc714"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "b618d07843622db73312e324b289c5b7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "6aabf4ce38f319151c4e5fb4d571267e"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "67a98c14c5eecbad27d1cde640ec16a7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "c9f7c23043f99fba3ffe44484046a601"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9032710ffb5aa6569bde7ce4ed207d2f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0f4cc0d1c345ca7fcadf5d3822247964"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "81f4964453260ed056dc3a85dafea7c0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9770cc4234a80a3d7c55d95152bba8b1"
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
