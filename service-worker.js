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
    "revision": "3523b12724bcce6f206d5e2c1e56bad5"
  },
  {
    "url": "about/index.html",
    "revision": "20b7a2e31f4922e4784fe7a7b06b5618"
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
    "url": "assets/js/21.9ef2c8a0.js",
    "revision": "be76fb5076d16cba8a1b84861bf64787"
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
    "url": "assets/js/24.c1554577.js",
    "revision": "8e66ecf07324cbbba3bad4efb0342bf6"
  },
  {
    "url": "assets/js/25.85791c91.js",
    "revision": "0f2a565090a2b3c82bfb002695cc5a20"
  },
  {
    "url": "assets/js/26.d7908987.js",
    "revision": "5969ed3ab01f86ac7ed157ca3947023b"
  },
  {
    "url": "assets/js/27.1dc93788.js",
    "revision": "bbb02e9677d02ca6452e27a50759451a"
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
    "url": "assets/js/7.e1b86f42.js",
    "revision": "0f69cd564662bec700551e0d89543537"
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
    "url": "assets/js/app.8c8f4346.js",
    "revision": "e4cc1e52e3c8e343f2b8ca0deb33b797"
  },
  {
    "url": "figma/index.html",
    "revision": "3ff4b491756300653555697996f4bb8f"
  },
  {
    "url": "flutter/index.html",
    "revision": "9e8a3603daaf575ae7e0967a51575d7e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b2ca8ec49eaf9c93402391ef701bd642"
  },
  {
    "url": "index.html",
    "revision": "34e57fadf1f0fc1091a946555fe4feee"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bde5ec9e1fb7720900266b6c3d911fbe"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "4dca103dfe59692a03602ef8b622740d"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "708039c218da357f423abee440787194"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "acf4fdde2e523c55f7862c309eda0a37"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b1f8e3624c09a426a0c46a86bc731d41"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "add8656b637098c96473c4c9e2c7de48"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "092cd4a846977834f247e3e4a4f917ec"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6ddcb0edc06f0462c93c7fb03052f99e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6b7436ac2268579fc306e77ce101260d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e8019b893065de1783aac5f3acd180bc"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "993c3231f6c5c4de6b69462199d9ad8c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0054f4e5307370ba35cd7f1349b5996f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "73d29eac13b417276a4df702521eaf0f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1338f52f136267b04bbcfd6b09b06ca2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7f13043cb07ce324585f8f76d2953fb3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e02246c218ff0b48dcbbf7beb5aa2ac5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "706e464230f651cbe66bf013f9b9fbb3"
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
