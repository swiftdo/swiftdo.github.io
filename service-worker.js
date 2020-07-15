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
    "revision": "19c0bad479babd006cc776fb57639edc"
  },
  {
    "url": "about/index.html",
    "revision": "57e33fbe9c77b3540a569e55f8d3e77c"
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
    "url": "assets/js/app.48cbd7e9.js",
    "revision": "fa6f5cbb5840d0396d0014f5ad49d3b1"
  },
  {
    "url": "figma/index.html",
    "revision": "97341b2d15dcd0e0d32153864268baef"
  },
  {
    "url": "flutter/index.html",
    "revision": "c5463dc54ae70b018202dee8d93d9a7c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b851f68f409a9ac8d47ac86793572795"
  },
  {
    "url": "index.html",
    "revision": "dee8ad5985622594a311399debdd3fe0"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "61a6ac0bdd14f1528e66a7a133c64afa"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f79b4da2f85b12d926cbb7d737f9d90a"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "57b404cb63d57f1599319fee75903a1f"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "b07766f88cc4e1344633efbb573aeeed"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "345343ad8677b17aad1dac95c365c4e4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ded51401c3f2ebf55331fb569f32d405"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "e18c0729d9bb5b80d66d674f64b3da80"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "cda08ae030f25a446232d9a0fae453d1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b02cf2a665c4ac36874fa3832210c5b8"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4bdbcf4c8e6715fbc965319211534ec5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c1040d066463cd86e14040d6709cf37a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3783b7f2707330f8919afd7575fc1c85"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "bd717c3638200de877814c9d55370192"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1539e578f5594fc993d23b1f821c0cb1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "849fd3ad792813497b3fa040757b08a8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "fe02f2c3b5efe638dd4db1b076f6cef7"
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
