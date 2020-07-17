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
    "revision": "44a0122eef542273e717abd1f7b33ac9"
  },
  {
    "url": "about/index.html",
    "revision": "d34051bb105775f182b9e07ac8b40332"
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
    "url": "assets/js/app.fc4d4321.js",
    "revision": "8754bba7c35b4b89a1bfe87dc5525230"
  },
  {
    "url": "figma/index.html",
    "revision": "85e86dc389705dcf0b8e4c937b3e01df"
  },
  {
    "url": "flutter/index.html",
    "revision": "3f2fb671b5aebc3af8e10ada9cd26c57"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "cf8a37bc0644c04eb4a4386126a40e1e"
  },
  {
    "url": "index.html",
    "revision": "e8dd72ebcb8ab69000616da07bbd33e3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d54a6605d57cd18475e90e21b1f07af9"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "af9baeb36697db94d01d29ab87da8a8f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7d194bc6ffff28e9ba96dd6a29278aa1"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ca7b022be242c55a34e824c67bf953a1"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "c564fa976febe2fc105476b45ffd97a8"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "4a6ac027037782022ddf8a75dd7447a8"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "875adedb877e79148686e34df1f20be2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "78ab4d5cf17e02b3048ffb9dba1f305f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f072269be6fbbe8626f48b749cc40a19"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "96592ba1edcbff983418ab94188cd303"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ab4400289a075ab33bb9da792c7e4302"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "597c467ac9e9ed9b40b00bc85aff1ab8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f360d441da1b532bcaf57ce0b7985cc6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ddb972e0adb67c555d0fb5850d82be41"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "225a7d2c72c07a26621cfbf648616897"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4f810de0d2c64cf8e7a4219f4364b5f9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7e358ecc8c5d5bb07bff7964d9adbeb5"
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
