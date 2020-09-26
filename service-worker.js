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
    "revision": "ce8c2dbeaf4bd04d8d669c9a69cae537"
  },
  {
    "url": "about/app/index.html",
    "revision": "5143585657c0a8c68d6bb3e1ed35504d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "eba39bf6733d8224a612ca40c1b2208b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "fd8aa528f9f5dd59cf92ccc3a3b3cdac"
  },
  {
    "url": "about/index/index.html",
    "revision": "0b7460841ccf4cc6f3db930e3e9aa7f6"
  },
  {
    "url": "assets/css/0.styles.625902b5.css",
    "revision": "cbce2c0a748cf5fab169cab5edef8613"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ed13abcb.js",
    "revision": "2416e7e08846e26e398243e670751221"
  },
  {
    "url": "assets/js/10.d33307ad.js",
    "revision": "21a37afa245bd192b37a63d891a29d07"
  },
  {
    "url": "assets/js/11.ae06c7f2.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.fe636fc1.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.eafd63ba.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.145fbab5.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.5f7b5bec.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.ee6de255.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.8d8673b1.js",
    "revision": "d277c51ef7ba04b7e490d1a9a5fde331"
  },
  {
    "url": "assets/js/18.2e3e5777.js",
    "revision": "2f4583f02d1069d7a39194571fbeedca"
  },
  {
    "url": "assets/js/19.1064ffef.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.4eb22213.js",
    "revision": "1df4ff4a8ec2dc25b0932f0ce0c98700"
  },
  {
    "url": "assets/js/21.98262725.js",
    "revision": "1bc7303d302251b79841e0919d00ed0b"
  },
  {
    "url": "assets/js/22.4641f8f7.js",
    "revision": "7786a2dbb11a636b1380001c8c23873a"
  },
  {
    "url": "assets/js/23.474984ec.js",
    "revision": "26a9f2277b523d05912fc134ae6abadc"
  },
  {
    "url": "assets/js/24.a85ec7dc.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.5d6d0d49.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.62a6e1e6.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.6ba1e350.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.84791a07.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.25d3a50e.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.1394f437.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.40a2119f.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.e23ff899.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.565bffa6.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.8bebf36a.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.5ea8ca3c.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.938f5118.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.21569c25.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.cfac7559.js",
    "revision": "6c74fc62f958924637d6e9e511446a8b"
  },
  {
    "url": "assets/js/38.6bdf5ae0.js",
    "revision": "52274330fadac5d2321e1ba7079889c8"
  },
  {
    "url": "assets/js/39.cf2352af.js",
    "revision": "842b2443f405c8594fc8e5187ccf7e11"
  },
  {
    "url": "assets/js/4.cd5ac232.js",
    "revision": "39c76a2160a7e88868471fbf7c9e819a"
  },
  {
    "url": "assets/js/40.fd23637a.js",
    "revision": "b1956fb2fad5339ef4d19a7711a266e6"
  },
  {
    "url": "assets/js/41.ab7c1ff2.js",
    "revision": "0615ccdd3b4df282ece0e14d049b0fc7"
  },
  {
    "url": "assets/js/42.779d3c37.js",
    "revision": "1aa98bc13abe3bf7cec384208dd0acb7"
  },
  {
    "url": "assets/js/43.9efe4c95.js",
    "revision": "ee894a939ea49ad29c3a79a936a9518d"
  },
  {
    "url": "assets/js/44.47605ce6.js",
    "revision": "d1550c94d2d404283cf639f381d92a36"
  },
  {
    "url": "assets/js/45.c8d36cd7.js",
    "revision": "99d0773145ed3c0679bfa80324c09683"
  },
  {
    "url": "assets/js/46.15139992.js",
    "revision": "1f7de386b87d176c162f2bb26fba7386"
  },
  {
    "url": "assets/js/47.29c85e31.js",
    "revision": "0c7a23f4d3a2a75e924f4ec130b3bb7f"
  },
  {
    "url": "assets/js/48.1150c063.js",
    "revision": "930dc9746c08bc6d1a55e3b04db62470"
  },
  {
    "url": "assets/js/49.e90c5414.js",
    "revision": "b9070dd100edc85bc5ff08b40dec12e9"
  },
  {
    "url": "assets/js/5.d2a7825b.js",
    "revision": "4445e30254215797c29c8a7473cc9e26"
  },
  {
    "url": "assets/js/50.fec41be8.js",
    "revision": "bcf91a7912932a0a40537a1b2559963d"
  },
  {
    "url": "assets/js/51.842e9f4f.js",
    "revision": "f3a86dc16951b97dea4796b8e0ac337e"
  },
  {
    "url": "assets/js/52.4fee53c9.js",
    "revision": "4674ea35cc0b6960cebf217986c43148"
  },
  {
    "url": "assets/js/53.41717fb0.js",
    "revision": "f37b597cf8b4440df42b073f4eaf4cde"
  },
  {
    "url": "assets/js/54.a446332e.js",
    "revision": "48f3842ec7b21e7c2188175ee0271234"
  },
  {
    "url": "assets/js/55.d7fddff1.js",
    "revision": "42ccc656b379b1ef0a14c5bcc5e38b33"
  },
  {
    "url": "assets/js/56.e697ee00.js",
    "revision": "f279784cf0da6b05ac81ded50927d501"
  },
  {
    "url": "assets/js/57.0303a35f.js",
    "revision": "fca28e61c4d584f9aaffe526e52369f6"
  },
  {
    "url": "assets/js/58.16167865.js",
    "revision": "17759323336d3bcad58ce5f9de102329"
  },
  {
    "url": "assets/js/59.8ac5fc4f.js",
    "revision": "113299cbde664e25c7d921aefd10087b"
  },
  {
    "url": "assets/js/6.52cab3c6.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.de8f3f80.js",
    "revision": "93f1cea09cf90b03c32820b8421e837c"
  },
  {
    "url": "assets/js/61.1c0b1b48.js",
    "revision": "998a5591e770eb7eda0698cfb25df88c"
  },
  {
    "url": "assets/js/62.858890cc.js",
    "revision": "a017189806810c8225bf55c2f3c30d7c"
  },
  {
    "url": "assets/js/7.a5327269.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.2c0db0b1.js",
    "revision": "6694823c95de7f43946ed6b6380808a8"
  },
  {
    "url": "assets/js/9.b2992e35.js",
    "revision": "166d0005651352c9ddcc510107c3af12"
  },
  {
    "url": "assets/js/app.c42c57ab.js",
    "revision": "0e3705bbaa42085e20ad3c91402f9c44"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "0b11acc29f876bc625287ef7cf25b430"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1559b7f900b460776adfb442ca29d07a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "475edaa297121f9f4e07ed73fe3c9e8f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5a13751083706436dc0d750dcd724594"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ad8072d0627417a61cfd051a2a157b0a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4e54520f3957cf637d7ff3fd03efb019"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1ec70f6a3c6977bbcef6f6d60f13ba34"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7f37684d54e932efcfb13119e1c777a5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8f03f887c652b3215962e5a991501073"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d65edbb89e94f45063b38e5fd673b10e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "bbe4a913b08b920f5e4c5da2f25bfaa5"
  },
  {
    "url": "basis/index/index.html",
    "revision": "74c4580261293a6664ba028e0f04074a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "30e752f0b1283a54fce203c2882eb591"
  },
  {
    "url": "book/index.html",
    "revision": "d97b2ce6fe457a167a19b59a990a16b7"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "387764be269794bc835e447690eb37be"
  },
  {
    "url": "categories/index.html",
    "revision": "f3bdacdbb7c678b996c70f816a6502b1"
  },
  {
    "url": "figma/index.html",
    "revision": "5444c4cf253407c77fbd147592d6a8db"
  },
  {
    "url": "flutter/index.html",
    "revision": "0e0b9d890ca9f48ca7da7d9770d7dc62"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "fa45e242dcccbc276a7eb10aa6d27002"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "157fb65268daa5e3d96cc630f712eafe"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9e4ea90a5811695263180710ec24c213"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "7377d0a65f780c68b27395b9a06520c7"
  },
  {
    "url": "flutter/t4-flutter-web-deploy.html",
    "revision": "2c73a477986208d919ffe77c1093960d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d5ba2c4a6ca388f59d404d88284919a2"
  },
  {
    "url": "index.html",
    "revision": "f15d9ea16506a754c899ac3dd8ac4786"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5d7c054e49282fe89150f3c40558df62"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "5af99e4c62a368816f6aac819521739f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "fc785d378bdf22efa298350bbf27fd1a"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "d7146a5b97d319d25be9c361d9622988"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "21aa4412f15f8660897d29d7029b05c2"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "3156c71f9fc5e2beb8f30c21009ff8de"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7a8a5f18031d68806b305f4f2ffcfc59"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "88edd782930c64ccb74720121bb356c8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c746216e6eed3614ec5640cacb5b3447"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "43d85abf4a30675c0f2ab3b5be953c88"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "03f06665398764037eb853092139eff7"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5c742ea8083324abf5aeb21d2bc1be23"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "83bb80c1ca7b03302c9f65620b0b5d74"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "036f4098a9fcd534c270e55b0d94db6e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3976e7508d23a03086756558cbce48c7"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "06724cf49424939830ab4f87487ca606"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d1c8c0a8b4ff0648d52f1e3ab14ceba0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "69bc3d74acc422ac3647cc6c467ebe78"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fffd3c56fbb00056ddd743d3a2306b94"
  },
  {
    "url": "tag/index.html",
    "revision": "0b9d6431c2161e3ebf0eb218f6b92fac"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "52861d43a8fcaca964a6c76be2978d77"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "03c2d4dcfe04468bb218fd27e7b0b534"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e4e9d52d2d3812c169fb19420ba4bc46"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "f4266dd8b96ee468be75930dba234ab0"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a905b8352123116085791aa786bf17a2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f9f64100288918266a0de5167b39e10e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cce427863c0c9d9b1da30173f7864d21"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "55cd7756a5cd7aba339277df5234f467"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "909aed4f31a229559700dce9f4b7ff11"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f8e1145ce6023ae5f930930dafe28d35"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5d99f6e5365e8144c4b53247858d70f9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "52f6e367ea5a8cbfe969bc7d7604f3cb"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "2121865c6775fcd3bfd2611b92d3a5a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "c1fa89dac91f8166cd9104fb908de263"
  },
  {
    "url": "tools/git/index.html",
    "revision": "51bb3566178396a857b0010e22e8463a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3701a1a8aeba39899ec46d41bef32a67"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4a3baedf0c566482c54249d00f46133e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "9527f7eb86a0bae6cb2459fa9ebaebe3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "48508988f1cd7005b099c9a8578abe5f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "52d65e462110d4d3b847d5eed99a23e7"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3dc1d911894872cb360c8c2c6d280009"
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
