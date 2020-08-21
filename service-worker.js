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
    "revision": "f37a08ab2c8bcd0f0d5f7f8f874c7b95"
  },
  {
    "url": "about/app/index.html",
    "revision": "bc63ef2291b8f277f0b535544ce5c0e2"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "edbcb7989f70bc287826b1a6bb4ef069"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "12af0704851049fdfaa941bc7842e89a"
  },
  {
    "url": "about/index/index.html",
    "revision": "ae06ca4a0a4ed9394f7eb47a8adf925e"
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
    "url": "assets/js/16.7561a544.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.9e4dfe30.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.3394e155.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.88ec24fa.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.7368d240.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.2f76a0bf.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.07e8de98.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.9708f287.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.07d134a3.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.bbfb1273.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
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
    "url": "assets/js/app.4494039c.js",
    "revision": "917cb8d7fdd78bfd64c34b59865eb8a8"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d3ab9d64c398b1e42e3dddaf94483148"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "31c9c98ef1c783355e47d3e980835acd"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5533d72dea09041e821883e85bcb446b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "598fd8c53bea27ec68f255fe3ed4e205"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2904d469986af746a9910ff359095026"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "97661f2e08bbee9b9f07fbece121aa95"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3298472922df1cd39f04dbb40ba932e8"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a80039c3ff28155ace48f4a9a8eaff63"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "2174acd2ad754393dd969368ed01c78d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0c69ea9f82cd3acb3db119bcfc30885a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "211b4953233809eb5948d2c538e458f0"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a26dbb930ba14ca50566485a750ce8f5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "22d20caa147e4f9d3280c2b7a32bb687"
  },
  {
    "url": "book/index.html",
    "revision": "d0aaf73f417490ae2d239b2e7c715e35"
  },
  {
    "url": "categories/index.html",
    "revision": "5651eb8280744d1071f41a622b67c462"
  },
  {
    "url": "figma/index.html",
    "revision": "36a082a615cbfd05baaf3e7db650cbab"
  },
  {
    "url": "flutter/index.html",
    "revision": "7219587ab18074554f4f5f99d7eac589"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b51703200d1e8452d176d313f627a1ae"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "44060a08ffe23f0c8f3c5510943b8f6d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e5a7bedf64b3da6bba68575d1a3ce8ac"
  },
  {
    "url": "index.html",
    "revision": "4d5c8d544de0a296aaac2c0619e2a413"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "996d22ba68a545b8a54b529a3b08c1e7"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "5b517b832b39045908e7c1f6995624ca"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "48cdfd655d95225db9dbc90cbcfc7d65"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "617f7c523b3cfccd334dcda445c62d20"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "2e2755bb125e7f1a0f1875f156323419"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "c40d4891384a7258544ce9cc93e9cb25"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3180d6e76d22200ef11ebe0fc0157b1d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "80c10dd1dca269b654bd9634cb72a3fa"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "bc63042f8dd7a28c6fa037fc06a52d34"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f0ef9fa5d83ad36adedcb811727ec378"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c425c0092c8e9eef199002fbfe0cbde4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "bab822cfd7f3b65770c9a10a44e12590"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e0409b960fcaa50abe56fbb3f41fb657"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "66f3596878c0ff33668e79064baff2a5"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8f58fe498996a92d7e78634518c942e7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a8286bfdcf0dc515e62d4e365b89d9c2"
  },
  {
    "url": "tag/index.html",
    "revision": "23ba66153323b7bef0f320e7aa8558ec"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "815d930632e90b28c0277f229c765bd9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "23fbff54f697cbe0eb5f397956af1c1b"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4fd57b7a839b7a94c497f46b990c9516"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "73df8739d31ff3800b3b41b4c7e3e7ea"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0bb1592e87fdffb11d8be54f5c24b267"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0c8a879e88d2e2d76b43d2acc577ed7b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "14e81445fcbb019586f1d35f5f9f449b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9d4bb4ee6fba6c78aeec1c2913a26db6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "67b956fcdb4465a71e169555a070930f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c922efd53239081de56c512459ebeb7a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "93fdd066ff4fcacb641cabaa36d852d5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4fa8c4c5a1edd190bea2eaf61d4ac2c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "b7a8aa7ccdbb46b6ca52b77f0b7a260e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5ed0b8ce1182f07be5907db4e01c4224"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "472d12dc9d53b4140ef1472aaea84705"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e4ec065f8519aff9134dfca86af7a51e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1fab10e847c1a344d76c8b8425fa3758"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4dcfbf12dde9a5983180afc9d997e167"
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
