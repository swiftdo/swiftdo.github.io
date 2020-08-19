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
    "revision": "bea753dbe26f6c5147eeb7a16c92e6d8"
  },
  {
    "url": "about/app/index.html",
    "revision": "cea562762327e089585efc87be61e4de"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7d5fc19de1b8ecb6171ef06f03a03461"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "432c27037c0d6360f64697a9c51af0d7"
  },
  {
    "url": "about/index/index.html",
    "revision": "b5ad42a7145e83c092cb8fa9a3ea1a05"
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
    "url": "assets/js/16.236d9055.js",
    "revision": "07f4806f9451589f4301254624e4e63f"
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
    "url": "assets/js/24.f926d9bd.js",
    "revision": "1802d7193279716f2a2af3412d5ee18d"
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
    "url": "assets/js/app.30940aa9.js",
    "revision": "c846c06d3c10e622c9cdf483be592cc8"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "299d667f10b5409063cbe6748481cd4e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c4a27dbefe9e81d3e01a0f24c0f66157"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "03454b9186d0a2e89580e16af051454d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7b89411186c224bfc91463077e331069"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "7a1cbb975a4889c4aeaba942124600cb"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "8036cf45690ff159266e74aa4fe4d268"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "60a43c37a84413a7ff161ebcad8fc93e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f15c5cb9665ed7cbaebb92bb7ecc55d4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c17d54aca1835aec9122b2f13df5eb5d"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "24d82856fe1788bd6b096adfbba7872d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "00d7d36f8c3ea79392507172affde263"
  },
  {
    "url": "basis/index/index.html",
    "revision": "268b375214be915abb0e3afbad3976e6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ae48511be3f4b4ae9246629d8a32e886"
  },
  {
    "url": "book/index.html",
    "revision": "4700f74a1c3e803753f5195959cff4ad"
  },
  {
    "url": "categories/index.html",
    "revision": "2c1287badcc4a7adeab0706760dfe987"
  },
  {
    "url": "figma/index.html",
    "revision": "3f90d0f4bec75965336cc9b72a8b202c"
  },
  {
    "url": "flutter/index.html",
    "revision": "7434587e67de6cf847415efe339e2aad"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ee09c8ee783f632ea831bced603afc48"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ab3536d763404759ae3cbd72e3295a12"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f93a2b1f055e987b1bbfed0e4b54ee9a"
  },
  {
    "url": "index.html",
    "revision": "ce40cc1ce0d70f8c17a0a374f080f523"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5e5170570b8a6c3f1a66acca6aa3c38a"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "0b0a8ae04f02348cc0070d67be03b674"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "fda8fd0fb5e3b551193b9e3c24368082"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "4d027d71b3a4b33372a2b713d8b7e855"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "31e66a47ec86bdd14ee7bab36616fa32"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5d30d3a292812ba5f40de894830fb8cd"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "eaf3bb184e283d994eea9b155439e3ca"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "504024bfe4e8f6a860080bb2b71cb459"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6d5b74e21e3473cb3d0776a05c08e8d6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1f8c5842269d8b83b8ee055066583131"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b5b82b0d1202a8398b654f2424c3e3c4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e1d4719197641394491204e9fc2a4976"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "043dbf4a8c128003aef4f86cd58cf383"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c2854799c54f191363014f4cf50020ab"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f22b5d8e356d81520b86754f58b3378f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b8ea5b5c96fa79fb8e4a3b828ab59f00"
  },
  {
    "url": "tag/index.html",
    "revision": "becb654bfd9fa16c671f5b04e0d0948e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ead831954dce10230c82a918a6e9efd3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1b712204a6816f80cd7102122a3958cd"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "304e517046e75a38ea9d3031c7747a49"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "070e0f0affa58e1f1fc14ea63dcade5a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "798b6f326bd9550aa1ffecfd9c296077"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "72f31c45371ff7b12c335d54662445ef"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2137e6bba8b1400a404a9161cf41398f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "751a6dd08a4c7592c5e0b8413b1f541e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ee5127c596e2f704fb362a72679c02f6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b48692cd0c6493773c9e20ed6cf65587"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3ecc9d3027b7427073838798d3868ff8"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "433d8d96745a825a846c3e2fa5ca5129"
  },
  {
    "url": "timeline/index.html",
    "revision": "59ac6895a33bdb366332b9b6705cccf6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bb5e2016562f83bdc3a576fb58d299c8"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9790c0cd50745c168f41d85833a3ca91"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a56594d19d1e16b6529975d475430299"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "de8c98fc186f7fbe14a442c3fa215b9e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7944cb460ef519bfcb9689baa49310bb"
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
