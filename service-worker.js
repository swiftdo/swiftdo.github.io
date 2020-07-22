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
    "revision": "f3c5195827dbba05545e211f77fabe8c"
  },
  {
    "url": "about/index.html",
    "revision": "9b8c7e9ebe7aaf16dd21dac1f1e30e9e"
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
    "url": "assets/js/23.78bcffc6.js",
    "revision": "4f12787e9d0b0dc983b9b63bda32e990"
  },
  {
    "url": "assets/js/24.83d04574.js",
    "revision": "6ca82353203b255ff478b5968df9bf03"
  },
  {
    "url": "assets/js/25.772d8d00.js",
    "revision": "5a7ae95df99f490e29cf35a96c12dbb1"
  },
  {
    "url": "assets/js/26.ec11fa2f.js",
    "revision": "a86bd329c29ee122ad838e6c7969d8cc"
  },
  {
    "url": "assets/js/27.d757b25c.js",
    "revision": "0655c41379d7fa0306793373279557e9"
  },
  {
    "url": "assets/js/28.e06e4ea7.js",
    "revision": "edc7f5ffe1ab89e64bddee4a105906d8"
  },
  {
    "url": "assets/js/29.cf55a0dd.js",
    "revision": "60bc737dac03c818bc0e62f8d41e9950"
  },
  {
    "url": "assets/js/3.fa8cdf39.js",
    "revision": "cbe5c98496c356cf38e8f99b603897f4"
  },
  {
    "url": "assets/js/30.310790b2.js",
    "revision": "b8cc283f417917caf6292e09a6a52b16"
  },
  {
    "url": "assets/js/4.4ab78c50.js",
    "revision": "49e712d927435fc41b2ec74697388c7e"
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
    "url": "assets/js/7.67006398.js",
    "revision": "bae016f4da458b9c9c1a39240e5f9b96"
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
    "url": "assets/js/app.65fbc24a.js",
    "revision": "3bbd757d1a31008ef437c555ce635379"
  },
  {
    "url": "figma/index.html",
    "revision": "a85c3fc7a6024d416d58867f3c0ac31f"
  },
  {
    "url": "flutter/index.html",
    "revision": "7687156e50288235087ce9bb013b9365"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8a422d79d03719ec9c7e892824c305c7"
  },
  {
    "url": "index.html",
    "revision": "59f55641ca2956c7c817ae0de3f329ef"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c2b2333c831e5430fda1af435b38502f"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "673997a1906a60f0c855e508b3a9ba86"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "49cecb639d52301bca31d38278c70daa"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "05c413e75d941115b27389b48fd79b7d"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "758efad90ea152a48e2875d350fa97ca"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6334275da4dd4284e4c4bb5a3ae7d7cd"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "afca63f6f2089967a617ed2c1a4b356f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "06b4acc71d16227e1803fcb6b16b5f09"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "bafedd9d7cd5402b59ce79833216b27b"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "badfc7ff58d3803029c34d78ceabf953"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1cd889e297326fc99f3c37f1bca08e41"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "15690780c87108c61bcbc745caa3a541"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "44237e732d22493c97d4c783652d344e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "70383ddf08ee6f7ae10b2a6897bc2f38"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9455b344d604e6d83282937f336d2abe"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "bd8bb030111be3b38e731d0e25822bc3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e0d257fa5ab978cf09c3ead0a12bb5ad"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "161ed2869fd73f9e157bfa0d0ed1770a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8f5847bb1888a4d87eaa3362bcdc72af"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "wechat.png",
    "revision": "ecf97432d3f0c1c71f25d45113b4460c"
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
