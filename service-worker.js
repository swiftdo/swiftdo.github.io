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
    "revision": "81b9f72a32c990a0d6559a06f97bae23"
  },
  {
    "url": "about/app/index.html",
    "revision": "a82371993258cb0829784b883dcba8d9"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "36a7e577987312b4d3277fed85bc5545"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "cc9537b65110acf5c5ca0e39c316183d"
  },
  {
    "url": "about/index/index.html",
    "revision": "62d77e3aad3e74e335e8498d842159f6"
  },
  {
    "url": "assets/css/0.styles.2cea3813.css",
    "revision": "c234890149bb6045f7b313554fc21399"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.1d570f9f.js",
    "revision": "90fb4e709e1909b0bc5545ec3757048f"
  },
  {
    "url": "assets/js/10.bf04df50.js",
    "revision": "2430ba959775b283dbaebe0af5e2a7ac"
  },
  {
    "url": "assets/js/11.8835cfd3.js",
    "revision": "ec3de465eb9ad7d5d3b72e39096ce7ce"
  },
  {
    "url": "assets/js/12.52cb853f.js",
    "revision": "1f91493bb9160279cad55c1f506b8abf"
  },
  {
    "url": "assets/js/13.2fe4bc33.js",
    "revision": "e3adf2c8333262e533d34c7027bcfa03"
  },
  {
    "url": "assets/js/14.ee1538e8.js",
    "revision": "a5c3ddc6b301046d320c09edbea6dad9"
  },
  {
    "url": "assets/js/15.11460cce.js",
    "revision": "2dea1077bf1566c3b6494d559662a300"
  },
  {
    "url": "assets/js/16.39054b0c.js",
    "revision": "11aab4c07e40c7e278a6bb10f705d73b"
  },
  {
    "url": "assets/js/17.ad889219.js",
    "revision": "d0b42a5f4c3e794310e577c2a43d6f20"
  },
  {
    "url": "assets/js/18.919454de.js",
    "revision": "ecc894a3ba2d279578db2a9e217da56c"
  },
  {
    "url": "assets/js/19.c62870a5.js",
    "revision": "8e3cb6fc99200507d7e47ebfb27019fa"
  },
  {
    "url": "assets/js/20.ad46ac94.js",
    "revision": "8b811ee71d92a1d8e505c1d8f8514b0e"
  },
  {
    "url": "assets/js/21.ad2af200.js",
    "revision": "f61d9d4f60cae31e8c01139b2035f49a"
  },
  {
    "url": "assets/js/22.3fb54486.js",
    "revision": "ec47f7aa6965c992d7ff415665eb4398"
  },
  {
    "url": "assets/js/23.3bf8a98d.js",
    "revision": "b282f525b907873284bc7bc7ef4e4cf8"
  },
  {
    "url": "assets/js/24.f2d4cbdb.js",
    "revision": "6b2e9ffd0e789918dbdb8225b2dcf59c"
  },
  {
    "url": "assets/js/25.48eab9ca.js",
    "revision": "118a0d7429d3816aa5d9651819093c5f"
  },
  {
    "url": "assets/js/26.f53932dd.js",
    "revision": "5ab4c82ef485ae63401103c212a15757"
  },
  {
    "url": "assets/js/27.ed49f0f6.js",
    "revision": "ef52d854fe3bcd2bd6bdff238425039c"
  },
  {
    "url": "assets/js/28.67429bd7.js",
    "revision": "ed045bafcfe7fc32daad7e51c406d3b2"
  },
  {
    "url": "assets/js/29.e9d99f66.js",
    "revision": "81af9ee345f9991aa1cf1dff2c3abfdc"
  },
  {
    "url": "assets/js/3.807d42c2.js",
    "revision": "be974a8bd09e9dd09a5d291882e061c9"
  },
  {
    "url": "assets/js/30.631b373a.js",
    "revision": "0a6f27b0862ac583224c3503a9c67a37"
  },
  {
    "url": "assets/js/31.5cbd40d7.js",
    "revision": "4dae6e2b8cd08d22fb6888d539762c6f"
  },
  {
    "url": "assets/js/32.68a85c05.js",
    "revision": "086f6c51763fd7a57d1eb0a58b74c5a0"
  },
  {
    "url": "assets/js/33.336f2df6.js",
    "revision": "4918f6e291f83558c8eea466c9a5a3f8"
  },
  {
    "url": "assets/js/34.130909e3.js",
    "revision": "cc39a00ce76d8a81cb32715d7bffc2af"
  },
  {
    "url": "assets/js/35.7550ff46.js",
    "revision": "fed8a92c6424ff198eef65e3123f0982"
  },
  {
    "url": "assets/js/36.3faa4730.js",
    "revision": "5d815dbc9198856bbb0d0b837203894b"
  },
  {
    "url": "assets/js/37.3fef73ee.js",
    "revision": "f515aa8cf5dcec846adbad7525e21c75"
  },
  {
    "url": "assets/js/38.48af261c.js",
    "revision": "07a09aa9bfc30fa729ad3af515de1d36"
  },
  {
    "url": "assets/js/39.3db7d7d0.js",
    "revision": "2020ea036f307e398df9b9da909a5acf"
  },
  {
    "url": "assets/js/4.c3425ae5.js",
    "revision": "cdb982339fad331e78cd066d08691f4d"
  },
  {
    "url": "assets/js/40.54da159c.js",
    "revision": "ff496514f9aa22c98bd83697fce68e74"
  },
  {
    "url": "assets/js/41.550cbd1b.js",
    "revision": "53853c36abb8e3eeb8a53ab5833f75bf"
  },
  {
    "url": "assets/js/42.968f1a98.js",
    "revision": "4ffb7bec0ef3dcdf5a24acae90dbb3c5"
  },
  {
    "url": "assets/js/43.b860d19a.js",
    "revision": "228f52fa561a66bd56cc22e8245166ee"
  },
  {
    "url": "assets/js/44.492823ce.js",
    "revision": "f050ddadce35a4754eaf2c2bb20b16b2"
  },
  {
    "url": "assets/js/45.e4b0ec3c.js",
    "revision": "796bb4edaf1d94c963226d066d0c7459"
  },
  {
    "url": "assets/js/46.1339cde9.js",
    "revision": "22e9dc16dbc20aa854848dfc8930f9d0"
  },
  {
    "url": "assets/js/47.d2d56c47.js",
    "revision": "d61d27c0948f3f04b32abb05be9f29c1"
  },
  {
    "url": "assets/js/48.37306970.js",
    "revision": "971f6bdd3a474f65a0d4298d3a8231f1"
  },
  {
    "url": "assets/js/49.84e708a6.js",
    "revision": "f9405de39f5bc4334cc6fcaf6c1d853c"
  },
  {
    "url": "assets/js/5.85bcbdbe.js",
    "revision": "c319c2c0386110b4a1136ecc0e8c00d2"
  },
  {
    "url": "assets/js/50.f3534b8b.js",
    "revision": "e0020db1e4b9da666099bdc0d3bab3b0"
  },
  {
    "url": "assets/js/51.d948f5b0.js",
    "revision": "04b626093c7e7f5ba8907aad081313e4"
  },
  {
    "url": "assets/js/52.3b35fa35.js",
    "revision": "a1f07b53f889b6b9f14917cd12e855ff"
  },
  {
    "url": "assets/js/6.16268b64.js",
    "revision": "bd0888405b0d1934d1b065c23a748e96"
  },
  {
    "url": "assets/js/7.3de342c4.js",
    "revision": "df9ed9fbffc17d83f39ef4af01bf46eb"
  },
  {
    "url": "assets/js/8.889baed4.js",
    "revision": "b79b19848b9fa153d4cec60d471cbaa1"
  },
  {
    "url": "assets/js/9.985be12f.js",
    "revision": "ca93a5598e5f4b499e5323a40ea094a9"
  },
  {
    "url": "assets/js/app.9c4d26aa.js",
    "revision": "55374d44ec34410c1b7928d884bb2b18"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d859212161cd011707813ae06376288c"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f34348dbe5bcf77aa8fcefbc80491741"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "86f518552b757e7d7f13fafd5c9c76a2"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "23592d892807d7d505d6420162db1771"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c5fa591bf7b71c8f93a3dcc2bf7db5aa"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4ff2a7d0f0f7d6f45fd7df544a433096"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "50060bafbfcac2865c3cd1c16d86a3ba"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c3c9006bad75a140e3e3d360a8c7f083"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7416152016ce33045a77e0ab240f2fa9"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "66de0de6433eeba6b7da6924ca3a96ed"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f9bc67b7b56bb95a9c4728f4f8a535b6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "fb4e67ab5c26344f9452050faf4f2941"
  },
  {
    "url": "categories/index.html",
    "revision": "3fa83bbfce8f51b34be057cf8914c65f"
  },
  {
    "url": "figma/index.html",
    "revision": "5cfe30f6f21a34289f983f64b9e5f4d9"
  },
  {
    "url": "flutter/index.html",
    "revision": "1461cf34f8a79b4e561e29d962235c35"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d4501deaa266e531b7d0bfc6e2713b7e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "397428906b4d7f6afd66d42049adb3e7"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "af45c8baa681bad9aa5453ddd8640cea"
  },
  {
    "url": "index.html",
    "revision": "cbec5f6ff0fef6fc6114eb43a1fcbe1c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "eb6e92a134cfd64cc3d15e859adbc96c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f337b03053ad230e0ee7b5a488392ec2"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "21f47e95a3b4f0154cb9df6f26f0e73d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "4b2735c062d6b2bd7bae6411925ea792"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b4d92c58aa2b974f61199aa28646d191"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d0e630267c55573ff3c4e398fae71d6b"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "72b36eb19fd29259f8339d818a37c939"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2891ebd05d3dde1a7e0110544c44ac6b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "14b928adc80ba68e1c7a96a6c44bb937"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3b9f4bca48d88113f0f818a55fd02f66"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "beda7c330a5ce710af5e79965c8335c0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b7194723fc785a098cd990a9e4c82f51"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c93fc6100e5849683931f8662fdce126"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b5f0d579b0f687cffd821c2d045d6cdc"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "0eb5a51456cc16e8a745d486e52f1e3b"
  },
  {
    "url": "timeline/index.html",
    "revision": "7cfae6d188d5d5ce307edd3bb60f69c3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d0be25fb66a978766875772b088fe2c9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "0af5d16821cf63dba06e69a9f5620e39"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9aa84cc2a15e05fd76424ca95b3d45a8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2d5d26fa322a4c6a06ea8c85994b8ca6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "dc383369037e23ee23ee5d3932e2a2d4"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "wechat_cobe.jpg",
    "revision": "7c103210c64d14972d9429ef991b44d2"
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
