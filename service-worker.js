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
    "revision": "4f0458b36095e995cd10a7bc2e39c4ee"
  },
  {
    "url": "about/index.html",
    "revision": "3344091a3226261fc0d5f491e508753c"
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
    "url": "assets/js/app.09d06614.js",
    "revision": "dce735bd84311d5e0f4e3b1d93e19235"
  },
  {
    "url": "figma/index.html",
    "revision": "d4e5694eca756cc4e4c790ba3627795d"
  },
  {
    "url": "flutter/index.html",
    "revision": "2c042ac67d29389e12b938d1b96d8303"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "91eb0f314b53f1924bf3f49b9be122b4"
  },
  {
    "url": "index.html",
    "revision": "55a130c8c364c6d99dbaa7cad5cceb53"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bb4c5bc5cd50ea627b1be4d615ec18fe"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f98c8777aa16fb330ceaceb18a087cae"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "29fdc684f2ec386dbe03d9aba9236f8b"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "fb9f53878a86561d96c16cbae66e5879"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "85b6d1d57bffa2508af298085315b514"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "79717d6cd1ce296970e3a3fe7291040b"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "42d6e3f768dedfce110d83efab775d14"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c75cec13bde62cf643353071d78ed6f7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f47c2ce69b547ecd824b7470c90716f9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f371930bc61391d7f1bddbc031da08fa"
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
