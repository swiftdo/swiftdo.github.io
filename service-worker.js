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
    "revision": "b2d16b9ebbac44a320952cb01b393eb0"
  },
  {
    "url": "about/index.html",
    "revision": "d1406786259186663f87f4ba78083df9"
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
    "url": "assets/js/10.a28526b0.js",
    "revision": "f437b3c25247d950d5053b24547b55db"
  },
  {
    "url": "assets/js/11.2c3d1b0d.js",
    "revision": "c320470014eb46653251840904740bbb"
  },
  {
    "url": "assets/js/12.12898468.js",
    "revision": "3601c7bb7e2af8eda08830b44132df22"
  },
  {
    "url": "assets/js/13.59e7316f.js",
    "revision": "af4001ad0e94bd43ea91029417b862a1"
  },
  {
    "url": "assets/js/14.4da972b1.js",
    "revision": "dbb3e0d59158589ba50f874fe2512989"
  },
  {
    "url": "assets/js/15.d5e39fb2.js",
    "revision": "df54f560b225d787136c052195c059f0"
  },
  {
    "url": "assets/js/16.d601c640.js",
    "revision": "dd0a426b1a4cae868b18fb81c91e890f"
  },
  {
    "url": "assets/js/17.464cb943.js",
    "revision": "35e1656b1992239c251bc66a9f75ed76"
  },
  {
    "url": "assets/js/18.f89b841b.js",
    "revision": "642f5d4e7b0b472574d6deac4c8a2a73"
  },
  {
    "url": "assets/js/19.24edb0ee.js",
    "revision": "01ed73d7ec6bb18ea783ff7e1281854a"
  },
  {
    "url": "assets/js/2.0e06c8e3.js",
    "revision": "85ec80429e17c02939fa5e887ce52b8a"
  },
  {
    "url": "assets/js/20.5ba19067.js",
    "revision": "f9cd498d6567d5fa3708e9ac563183aa"
  },
  {
    "url": "assets/js/21.d292c77c.js",
    "revision": "84975a0314ce7e6aa6e51a414a36d2da"
  },
  {
    "url": "assets/js/22.c3658222.js",
    "revision": "fd4539b02e1b0a479b8718139a89ae0e"
  },
  {
    "url": "assets/js/23.9e9f9824.js",
    "revision": "c225cd345ecc2288afe4cab25042027d"
  },
  {
    "url": "assets/js/24.83d04574.js",
    "revision": "6ca82353203b255ff478b5968df9bf03"
  },
  {
    "url": "assets/js/25.42405330.js",
    "revision": "a45453f6ea5b3c7873eb0d055ebd5f77"
  },
  {
    "url": "assets/js/26.cf3b4801.js",
    "revision": "0f765eee54394d90c91e0b58cd52738c"
  },
  {
    "url": "assets/js/27.0896d8f5.js",
    "revision": "4898c815b263937e647a293886e8474a"
  },
  {
    "url": "assets/js/28.21f44628.js",
    "revision": "7b9f3c7a0aea8fcbf513d8eaa30c92f5"
  },
  {
    "url": "assets/js/3.1c2e38d2.js",
    "revision": "0ebf46f7c5786b2091a82a8e5b84cde2"
  },
  {
    "url": "assets/js/4.d42c4536.js",
    "revision": "9948e334c15457b77b801e7bf2adf002"
  },
  {
    "url": "assets/js/5.efe1834d.js",
    "revision": "a01cf77fe9894be1ccbb4f0b6c66f416"
  },
  {
    "url": "assets/js/6.351593d0.js",
    "revision": "ed3a912b0d6bb65ffb7a888087e61aa8"
  },
  {
    "url": "assets/js/7.42657fb3.js",
    "revision": "4b1d903d6af69f7d653566fb80500f2c"
  },
  {
    "url": "assets/js/8.c3aa6057.js",
    "revision": "6ed4a372f8faacf63708c79381eddea7"
  },
  {
    "url": "assets/js/9.cb500d15.js",
    "revision": "c058a6a443685c4f9f562d40c08a8344"
  },
  {
    "url": "assets/js/app.74056971.js",
    "revision": "d2ed72369e8659a5fdfbd1c3efeb5359"
  },
  {
    "url": "figma/index.html",
    "revision": "d0bfefc35022da248129910da9e73760"
  },
  {
    "url": "flutter/index.html",
    "revision": "ff273dd1c796af901ec6faf9931d2d08"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3a2deb576233ba83896386a271c84e51"
  },
  {
    "url": "index.html",
    "revision": "5da21fb8aed1e8b636625afa6da5e2c7"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "eab1fe6e493b45504815c452e08c0a1b"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "ce54d2b51016ad6f4d9c2edef093cf47"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ca8ce7d07e7caeebbb38bcc382956d1d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "0fa8648ead6833f2cb184a59d7d7ece8"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "0595e548bde5ca370baa6f33ae633b64"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "eb6781000090c3b58497083a9f353294"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "64291f414ce12f72afd8c5a12a43e89c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9f1ab78e4abe3d7808b57f74b596adb1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ca292674419fabbd06c509216b57feba"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8056243eba7610100b14ba37c653bdfe"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "08baf22320d950111f333ae0f427d76e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f737dcf93845446829fa83c89192d10c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c0622a2e0f040645a9e19851ff4efbdd"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "701f50bb8e628ad578628d3969b2a955"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c500e7f3451d2c3c67df26a7fff7e90c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b2b1ce0fb4f3c0a40c2013de503328e0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e7771c8b96a7f4976958fc5a268b27e1"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
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
