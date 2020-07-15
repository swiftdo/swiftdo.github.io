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
    "revision": "577055e4c6908cbc1d06552df521e091"
  },
  {
    "url": "about/index.html",
    "revision": "ce2a86d077dec9741484dbf0cd6905a0"
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
    "url": "assets/js/app.391c79b8.js",
    "revision": "d3870d113d728b7894dae593d25fff19"
  },
  {
    "url": "figma/index.html",
    "revision": "a80ca577ad88a13185f5aebc1c2b27ef"
  },
  {
    "url": "flutter/index.html",
    "revision": "17dd3aa0a5a259486b6014d49d829441"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d02a275f342a97510aa63e0ce35687b2"
  },
  {
    "url": "index.html",
    "revision": "656b8a6b7c6ad5551c206ee69969a660"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "14f4d66d784d9b0564434fa5c9afb950"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "7e0709bbfe539e6f5b22cda5d344021e"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "606f6ca34846266e38391c8d75cd61a1"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "7f028080af381480e395aec53121c2f7"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "732606f9721c1c1942ff24f51c2ed0eb"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a7d95cc58823594c8bec78520a9c116f"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9ae24cacad8b7aae9790c065c3f502c0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "81f6736c250800e5efab2c97202f0ed0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "33c8a17759651e4e78c689f1a2902112"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "68a28166506d3aa93b9688848e8a878c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c416965c23bd5c552a1bbdbc460c9b54"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "09a9446b2905ad46211f094c4a777c23"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "56b55dabbbf51c03e275e2107dadc1cd"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7cc6896cb4e3dae622728163a4c86311"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "58603a5a4eafa9c11ec965aff85a4866"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "42ad7a5971eea42589e70d4c71752420"
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
