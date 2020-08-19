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
    "revision": "53dd4f4fa6cb0d2f6134725ff07c7202"
  },
  {
    "url": "about/app/index.html",
    "revision": "0cd533f6ea9819d749370f6757dab5cc"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "df36553f87ae3ae70f7994e66d8f37ca"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2eb893f1939fd4103339cc9617b2c996"
  },
  {
    "url": "about/index/index.html",
    "revision": "9918789b50ea3bcfe6cc9f3baf3f656a"
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
    "url": "assets/js/1.61f9690c.js",
    "revision": "69a4efb389d3f8ea8550d7a04c553e3b"
  },
  {
    "url": "assets/js/10.45029e95.js",
    "revision": "516f705edab68410b8c8dec3ab349800"
  },
  {
    "url": "assets/js/11.280a42a5.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.77c00848.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.e239ad1d.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.c694108c.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.3036377e.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.c5ea8a1b.js",
    "revision": "ca79af369aca69d5e1a83a637aba3362"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.5dfcafab.js",
    "revision": "cb2cec8ff21e545101ce6659b0224adf"
  },
  {
    "url": "assets/js/19.4ab3834a.js",
    "revision": "f7e759dfd98ae862cb54af258b4fa790"
  },
  {
    "url": "assets/js/20.ec71b6de.js",
    "revision": "2142e61ce3a4678c512495ba9f0753b8"
  },
  {
    "url": "assets/js/21.8165eb23.js",
    "revision": "75b3701ecb949f4be22c9e9c1b0a7c3e"
  },
  {
    "url": "assets/js/22.de43d5c6.js",
    "revision": "29b04a898323e80ed93bd51221990182"
  },
  {
    "url": "assets/js/23.99f46275.js",
    "revision": "949947cac317a2d1026336e5aaca4b72"
  },
  {
    "url": "assets/js/24.f53bec46.js",
    "revision": "f080a6aede48b552222729c41a0e20ac"
  },
  {
    "url": "assets/js/25.082c9b55.js",
    "revision": "c5d5e1d17a2503c94947dca73a18b51b"
  },
  {
    "url": "assets/js/26.d879d9e3.js",
    "revision": "3ddc87bd4bbc99d736b1ae26985f2602"
  },
  {
    "url": "assets/js/27.f31beb03.js",
    "revision": "bd670fdc678b1abf2e77db0cc23133f2"
  },
  {
    "url": "assets/js/28.222bd60d.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.9c2e7d73.js",
    "revision": "fde04c5abafb2de778d0d47b219c93bc"
  },
  {
    "url": "assets/js/3.27d22ab4.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.bb3cbf38.js",
    "revision": "72b1f57f5b1e8bf0121ab36993d60faa"
  },
  {
    "url": "assets/js/31.2ab43dfc.js",
    "revision": "f09bfd0418a8078c424fb87b23e0b7a2"
  },
  {
    "url": "assets/js/32.88028983.js",
    "revision": "ac3b8b514fb2b03def3f5894aaac9429"
  },
  {
    "url": "assets/js/33.3945dcaa.js",
    "revision": "f2a7c9e4cf54387e4b05d435aebceab6"
  },
  {
    "url": "assets/js/34.218e91e6.js",
    "revision": "9948dc0c3d0ebcccf5ed2443327b3de0"
  },
  {
    "url": "assets/js/35.7b6668d2.js",
    "revision": "ed39c71c9eb61e98c4d5d0757d8146a5"
  },
  {
    "url": "assets/js/36.5ae45da2.js",
    "revision": "a115782842cdb44777f2165dc3f96094"
  },
  {
    "url": "assets/js/37.fd4f82f7.js",
    "revision": "8555a22c69a6ee67f023ded24c15ee78"
  },
  {
    "url": "assets/js/38.999eb768.js",
    "revision": "5af1d2ac4b0af12d0cfb9a489ae12331"
  },
  {
    "url": "assets/js/39.0e561807.js",
    "revision": "6ed4af744f7a46984882385373e5d20c"
  },
  {
    "url": "assets/js/4.a114e465.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.70dd9a44.js",
    "revision": "11422d3b5132a7768126cb8eaefa4d84"
  },
  {
    "url": "assets/js/41.c9bc191a.js",
    "revision": "3803752cb0c0818db1f73097488d5c48"
  },
  {
    "url": "assets/js/42.43fc87fc.js",
    "revision": "67a1e2bb7c45fff3861cadd3281b017a"
  },
  {
    "url": "assets/js/43.c8ac879d.js",
    "revision": "47e0c923f14ba0fa50fe0366be8e319b"
  },
  {
    "url": "assets/js/44.e3fcd5cc.js",
    "revision": "9e33b7732a606400f7523c185fd438aa"
  },
  {
    "url": "assets/js/45.6a4cfcc6.js",
    "revision": "a624760dd6a4a62423c136184a82ab8e"
  },
  {
    "url": "assets/js/46.e7e1170b.js",
    "revision": "830d1e7f770666dab68bee256952e8e4"
  },
  {
    "url": "assets/js/47.6f357f3d.js",
    "revision": "992aced5e297d09d01a2733ec72ea264"
  },
  {
    "url": "assets/js/48.0c354d1d.js",
    "revision": "80b49064b0d3bd48689a68f49fc1ed80"
  },
  {
    "url": "assets/js/49.efb77d8b.js",
    "revision": "4323c9afbe54d36e31ce05a16c19aa8a"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.57d590ac.js",
    "revision": "be4929e567114813415ea4b625d30833"
  },
  {
    "url": "assets/js/51.595ad1a0.js",
    "revision": "31180253f26597a9c79945a0a6f83c3c"
  },
  {
    "url": "assets/js/52.c082dc58.js",
    "revision": "73608c79424eb9a55884b173d8d61794"
  },
  {
    "url": "assets/js/53.0f9aa1e8.js",
    "revision": "c19994c6b98fe9a9fe74b9e2f181b1dd"
  },
  {
    "url": "assets/js/54.f89925dd.js",
    "revision": "23a6b5c1094cd42a505ec91d909d76ae"
  },
  {
    "url": "assets/js/6.07d8db56.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/7.283471e1.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.795c6f1e.js",
    "revision": "f90dd3cdb69ebc78dd8d579aedece24c"
  },
  {
    "url": "assets/js/9.13a92106.js",
    "revision": "db59c95282797a58613971b24a085158"
  },
  {
    "url": "assets/js/app.3cdfe107.js",
    "revision": "b47d8a28270ab285bb37d7ee20201000"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d0e5f9a3e4468bb73e1be6ba82a56886"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ed2701688d6914e6b6319f8714b6a6aa"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "b0041665cbde52a2ccf5747fb4b3e7a0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "716b491f0803b5c123bd54fd0f7612da"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a55d44ff449463cf31368fcaca6259b9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3df218d7245ceff892e361861d39b5ae"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3c502732f6587f4922a52fc72d18a4a6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0d3aae0c17351ea0ba8ed4d8daddae54"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0d5194e7909e6f0411ae176b6e51c486"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "d198264e9e6a209e679ed6f46a9530d3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "105549879d518edd3182063ec7e1675e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c70ab48bf87bd31d4c3d0b11fdb9025a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5d60f3a81f3fc8b53569d1bed592e1aa"
  },
  {
    "url": "book/index.html",
    "revision": "d27fac0c70872b338dd01c1ff8ad8095"
  },
  {
    "url": "categories/index.html",
    "revision": "cf807c0f97f4c31ccf0e8d500113a80e"
  },
  {
    "url": "figma/index.html",
    "revision": "1b094a17e199cc876ebd94a5543d9c45"
  },
  {
    "url": "flutter/index.html",
    "revision": "19cf1ae79dff82956eadfdda73aa02e4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "42b5514d23217d4e3e43a1e60cf817fe"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0c1ab9eb15d30ca0b0b31909cfec2086"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "96d388029db5e5a8b7be21839dbd159c"
  },
  {
    "url": "index.html",
    "revision": "4bcd4695211c92e04353c6b88af45201"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d0370c4f4cd1b38df69b43d2d9c2c577"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "0f6ef4e52e85950b784ffd68a771979f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "47cfc39e368aae06b58b06205635e718"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "e8ee0c8774e924d554bd17e80b2b7a61"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "bef0fbaabe34f6a4870e3d6bbef770be"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "074cc6eaabb2ebf71e68d1aec83b6893"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "845b1c0232e13156de947292119bdae6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "aa0cf514691216949ab2e6800d00f4f6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9696bfcb12ea0683cbc017d66c5712c8"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3abb9e3327816e211d55cb8c734208f9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "fa73c29dfb6cd9a4ed9435c6e6982846"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "bb7c029b7576a8ec58aff0dad414721a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b96cae13396588b3def1ac0412a35e6a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e21e9d0b7e294571144949cf5f5f88e4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "1248c07ecb6ae6f9dfbed8f67e7e28e4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "40e6ae19617e9e3cbeafb3fc6bf1685a"
  },
  {
    "url": "tag/index.html",
    "revision": "c68ef38167224f98dc7a17fb837a6b17"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "372c0c5473680022ea25c18699643c6b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "16c184e9d8837fbab504f502265a6bf6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a9516eb1adf045ce9353b3c33c71ff2c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "059a4b26a1307ae0e983cbfe9f493b3a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d9b3ac5acbf25691946ca4506776f94d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4d270987e5ee088685136e0eef592149"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "de0c64318498ba29baa4847f7c6434ed"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "090f276833bf170df59af39050efdd81"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "471a628de115058805b09de7b33198fd"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b809e9e53301f4c55c0f224262b5dcab"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "01e7f74f8b8f3941bdc9d78c7ee9a406"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "c8a64d5c40cbad5c1d6f785687f82439"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e9585051b41007efed8fefefb672ab8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a48cded45e1ddfa850c7920920c2c9d0"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b7e1961a335ce968eef2bb579b18c196"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cb79b2b614b363ef68e83ee31a155801"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d773c51c956a55c78a96ffd20270f375"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8e0083f61761de673db8f1cf20526705"
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
