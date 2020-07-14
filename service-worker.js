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
    "revision": "c2a7d21fb63f42c64bc714c93c02a2ba"
  },
  {
    "url": "about/index.html",
    "revision": "f809923f214b18af19dd24139bbb3fc2"
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
    "url": "assets/js/18.4f10017f.js",
    "revision": "6b0ad13f8eb239fac58a1cddfdc85764"
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
    "url": "assets/js/23.d082159e.js",
    "revision": "d807b3211946e52adb1900e26ce43719"
  },
  {
    "url": "assets/js/24.83d04574.js",
    "revision": "6ca82353203b255ff478b5968df9bf03"
  },
  {
    "url": "assets/js/25.1f39b8c7.js",
    "revision": "91a6df4d41e33d91351c244877a78377"
  },
  {
    "url": "assets/js/26.362a9d83.js",
    "revision": "9d75a39fa80974182e5579b8c46f51c3"
  },
  {
    "url": "assets/js/27.09fcee64.js",
    "revision": "e696319fb7fe19b228203d7ae665c79e"
  },
  {
    "url": "assets/js/3.1c2e38d2.js",
    "revision": "0ebf46f7c5786b2091a82a8e5b84cde2"
  },
  {
    "url": "assets/js/4.fd7a3a97.js",
    "revision": "df4fce6f731a9f1d37ea52955f010a50"
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
    "url": "assets/js/7.06c80800.js",
    "revision": "5eee0d3637ef6eaf2808cb671f65da22"
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
    "url": "assets/js/app.8c288e57.js",
    "revision": "3956111e9fd7a0b13c7a02c290fda122"
  },
  {
    "url": "figma/index.html",
    "revision": "a49ab39e351907ce54f2a99ffb6b230c"
  },
  {
    "url": "flutter/index.html",
    "revision": "0b8c491c150c09a6d63851b9508b117d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "df46b5af702666b2974c56b2b0ed5db4"
  },
  {
    "url": "index.html",
    "revision": "56231479c7beea4f79b00091b1f160ac"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b3cde1f8ec392c39e24b5ccc038708f2"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "54fe11bb04ae1b1765f3ff35556a82c4"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4d036dcb1ffcabed8e872e4f0669aa44"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "3523c8c6dbe23d2dd31accd585432022"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "ebf2d383798530951d2b2aedf51ac387"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2ac344af2a709b6b9881aa003bbbe037"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "06cbc43f23bdf75ab4a6327923200b15"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ba4e7ed8cd829eda17ff229be756d5d5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "17e9793dda55b2dcd5d236f17123a99e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "755b6fc0de90439728b352cdee817bc6"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "26147b9cd7bc7d01b17eec39d032b418"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "bb4057b28ac5a72e3d14186e3794c58a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "64831fd083bc5f66c5cede158d6dc83f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5a4546115e7cf84746c620e95ff4ed10"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d0692a9831d2aa4868becb6ba7a24968"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d81affd797de087896ddfcd784ca5692"
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
