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
    "revision": "91adff0c955c5249e058b45045b6970d"
  },
  {
    "url": "about/app/index.html",
    "revision": "f55514f1d63bd2543fa891c4815e2f11"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d94729fec3429d803a1dbd73ad7746f9"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "46cbeb681192cacefe5498333bcdd622"
  },
  {
    "url": "about/index/index.html",
    "revision": "b58124343b6c13c4f1ad7a7194257b27"
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
    "url": "assets/js/18.0a484e6e.js",
    "revision": "fc293c71681a8ec60eb192167f364af5"
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
    "url": "assets/js/23.5c56aca5.js",
    "revision": "e235a0129d432edd551e16ad793970a5"
  },
  {
    "url": "assets/js/24.f2d4cbdb.js",
    "revision": "6b2e9ffd0e789918dbdb8225b2dcf59c"
  },
  {
    "url": "assets/js/25.f597f489.js",
    "revision": "b185d97c6400c3949579166378d99465"
  },
  {
    "url": "assets/js/26.70d6b412.js",
    "revision": "f572c597e601140831c2d3fc61d00d13"
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
    "url": "assets/js/app.03bbf574.js",
    "revision": "d85ef47322bb785fb6ba6cf5ca33367c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "6f147984c2b16557249025dd017ea028"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d07835c324b8574cb8ad0cbc778010b9"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "e3b168f6392fc02d81a2069fd3b9c400"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "be493ec7ec111f43378ded5954f85e73"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "52b5c79dd93b40f63e24090e0fae044e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e9dc35cccc7241948e27c6b0b241629f"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f3082d9aa2222f55e8007a9258286715"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "637675756d1007ee9b920ef5f6a582f6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7850978a61078a065ab31b3c7d7e9bb3"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "17d70a195b17793b595637301c3ef966"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0e072e31f6c9695b45b0c4b039fb614f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c9aaa2c8d0c41ca30192d8f1901681f5"
  },
  {
    "url": "categories/index.html",
    "revision": "a422ba2f687925630fb4f2962e5cff00"
  },
  {
    "url": "figma/index.html",
    "revision": "00d3f07e8dac7192dbdc9e7e0517b3ed"
  },
  {
    "url": "flutter/index.html",
    "revision": "d82973a542d35aa3cd5f5978884de3aa"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5fc98e0b6eadab80e32a10f84dfe3ec3"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d8c857a61bffd1d79ba2bf8c05855f14"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "293459c1dc3dc2eac15a40690e09ccec"
  },
  {
    "url": "index.html",
    "revision": "c3e5ea4e41a73bfab8f70da3a6e792cc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c45fa23aa7be34a83080892957d7974b"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "024c0cae8c885ba6f56954906b13c9c5"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4836392f798e698e3c1f9a497104789a"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "abc95b84a8bca608188aad8ec877cee9"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "4664c8aba35e1bde7508e20d6d93fc0d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "029ea117f4f8842a28cad71a059302aa"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c72a1962f0bc68f56e12cc16583a975b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6d81bdd7686cc2be1f3af9cfadd3a9af"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a4163f218f13c1bc19a95625241c16b2"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4afd62501677e1d27df70ebf51068bcc"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8eec15c5779d14b45a7016cb66db19bd"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "542b5719996f8f702c5489803d753a33"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "8bc46741a672a7138160675792d66d5e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8821f68b4e4ca2939bba2d1dfc5733c6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "d7d6d49c57555131b30ad471673b5374"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb39bbde551faec8f639cefa36c5c4a2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4adcda7d44de102bf2a2e960a6e40445"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9549bac8e2ae3bbc839b3771db47e04b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "390fc06c953b537f47c91a38269c7f1d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ad41d8c08ab8158fe6d62ff790aae0bf"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2d554787913caccf2f2d6eb92c74ed62"
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
