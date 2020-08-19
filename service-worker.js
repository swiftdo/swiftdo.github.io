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
    "revision": "091aa040d7ce1af5eae84c8718ff33a3"
  },
  {
    "url": "about/app/index.html",
    "revision": "16b29b1932a1e515f240ded3822b25cc"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c406d699b35c2b777c3fdf09521ea003"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c1f4924525338932abc789aaac47bdf2"
  },
  {
    "url": "about/index/index.html",
    "revision": "114d52e9202c8bf5e16224e2a8488e36"
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
    "url": "assets/js/16.b7343d36.js",
    "revision": "a12cb5a77a63c31274d14514d655445a"
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
    "url": "assets/js/24.8fe9e24f.js",
    "revision": "8350624757ad1075f3ea8cd96648310e"
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
    "url": "assets/js/29.518a0580.js",
    "revision": "4043061469e49fddb792bac5790254e4"
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
    "url": "assets/js/app.ac02ff6f.js",
    "revision": "b34ef165699e585653e9a7bf2116afb7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d44ef9b5a5e6c40f56e9c1c0b45d567b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f6cda53f6e6e02306c7c9e2411224ad4"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "c4e5e1590a47b2b357bc74f0e355f651"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "98c165edaa0dff3817349644902f622f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a5d3210270308861c09b1714aa23c7ce"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5144eb11581ba7df03fca3290bf91fbd"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "adb23d0a19a914dea6003cd11321d081"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b76fecdc36d85bf7b48593055878ee8f"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a18a095109766d213dd7c6c28eb3bb1e"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "0cee35dafcfdd9d1444e6dc506834cf6"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c1e41f5800d7645059cd8c90d99544aa"
  },
  {
    "url": "basis/index/index.html",
    "revision": "80c2a0b386d67ae78f3ae4dcbb660203"
  },
  {
    "url": "basis/os/index.html",
    "revision": "aaa23a66ec5a3311770cb650029173cc"
  },
  {
    "url": "book/index.html",
    "revision": "8d8b7a893a3edcc6e72d15e7ddd8a641"
  },
  {
    "url": "categories/index.html",
    "revision": "11508a8f6d8034bd9833f4f5722ad51e"
  },
  {
    "url": "figma/index.html",
    "revision": "47c1fd42a38aa4ddb4fa888ee2081674"
  },
  {
    "url": "flutter/index.html",
    "revision": "24c9fbbc4cfed8ce47e5ad96453c5e1f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "11f1fae9716f555d048b9ac7dceb9e7c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "27c866b6688bb43bdc8de84cf611efc0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a0e7e587a1722df3316917a2785cd291"
  },
  {
    "url": "index.html",
    "revision": "ace15e27ec3901bc3f22c20542f42cdb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1c984dceaea9b3b6098c7726ba75da2b"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "79bec4bbb1287af36f983d491d5bc7de"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "894c6009d5fbd2fc2daecdd196a94338"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "d14048a9dc07f91aad01292fa922a88d"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "7c11de9924ac8ab420c9d242a7dc81e2"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a010f56bd3fdb906d16eddeaa6122de6"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "14212e04db2c62db7e31f12320585914"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "11c4aef5509897706b2a3aec1782e173"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a52572f288643e5315d145a75b262409"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6b7e286d9ede451442b968be766682bb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "4b856af6cc5165406bea9b4d040e5545"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "976a1f9bf7ed9801b526d0cfddd251b8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "63803733845e8288e408f752862e516d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "438a23ed9d0519a0ca45b40ff9f4a521"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bb7b377492b3874bcd2f0562e3c6441b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5e3592e29da65c3e3bd63e10386d9ab4"
  },
  {
    "url": "tag/index.html",
    "revision": "e87c627cf4d389d4e09765279f0dddd7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3b90c75e4411cd52df4ad47fb69f73ed"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e7ee1bc3c61421f9ebc86f091f2aaf06"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3eb0cb0a4d63a91776ddade3af7e2bb9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "343d176744fd632ad4261d5f6fec3265"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "5849dc531b0a9ec8ba815bdb8c9ed6d9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0c3bd5140f55e604e9c6c0d98e135620"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ec4ee8dbd43c3906e1d128d4f78e7284"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1de954df0edd3f3412be8619a2b3254c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bca67171477c241cb64624011c3163f2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ff693ded766a7c26b00674f6b97a9b6d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "885788995d2a877dfd7f6fde8837f226"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f1e84d20ee4996a335e4f098ce898502"
  },
  {
    "url": "timeline/index.html",
    "revision": "1369d4daaabe0897ddee9b8732d23194"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7ef1c2fa6929bd6ca5958f1a5aac74f3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9085e70c10f93e7edc4253466d8c74c8"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "21c52219eefdd3c6aa83ca5e416bb3cf"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e2f588e8b46cc20354260ffda0e4c5aa"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4c9b9218dfeb13f283342f9303e807f4"
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
