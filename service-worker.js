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
    "revision": "abd59976e4a9fc336473a333f7ff1a85"
  },
  {
    "url": "about/index.html",
    "revision": "f302df218a0cff3d7a7056f5a4ae6df2"
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
    "url": "assets/js/29.948404cc.js",
    "revision": "5684764a0f7fa22e462b2843f8fd5522"
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
    "url": "assets/js/app.a1b69e3e.js",
    "revision": "5a8a31b4306c786a1866dbcff2236597"
  },
  {
    "url": "figma/index.html",
    "revision": "acb2d90f27a2b09d9124b17359f2361a"
  },
  {
    "url": "flutter/index.html",
    "revision": "9f67d6003e84ac68f360708015d01aa0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e642b70547bb339b99ff34a8970ec5b3"
  },
  {
    "url": "index.html",
    "revision": "50d4fb6d32921c7b1e6a0cacd383e3b5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "245f8759f47e4784495e10f28a3ee186"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "abc545ebc1296bf456c86ab79395e564"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4438b3b95a5bfeb2106e194d7091c7cb"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "eb7dee6dadc6a8a54e0179a871af5fba"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3fba086dc75c98805d56c6a4ed51e399"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "36d4bb70b30eef3bd628acb4cd2a5ad3"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4f366b5a1fbf9ae6b877f486771eea9e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f6a137e1474fa4794f3344e8d955462f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f37192eef20c0321f090723f4cfeb71d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9fc701dc146372291cf19cfd0d836f31"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "60eefa28b4ebd23fc0b5623881b61c62"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "64b3e767c97c7d21dffdb2c181ddf430"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "fc652b9026286b3e9a6ac7ff152a2ed3"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "3be70c4d898930c0485be525d45e4512"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ffcbe239a4402600f979fc97b3b79069"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "bdd3a56ba8bd9e936aa110e9fa1254d3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d8330b670fec16f17d251054600d83ea"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5beefcbded52884a532b4c3af2ded10e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0f3997d59b362b9a62ccc8b353b89e72"
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
