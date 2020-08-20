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
    "revision": "a3f8cb152b523b1f22212df066cfce50"
  },
  {
    "url": "about/app/index.html",
    "revision": "2e3e0c70528124893740b4706ca4c073"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7fe114f61c1e256d9af68b2c6d1b23af"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a66cb70314d1e0eaf4c8844d83fecf42"
  },
  {
    "url": "about/index/index.html",
    "revision": "00dcf3d3acc0a23689e43e91a3375ad5"
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
    "url": "assets/js/16.ea56bee5.js",
    "revision": "1ba3d1650908aa6562ceba0650937a86"
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
    "url": "assets/js/26.900ef4ed.js",
    "revision": "119ec9feddf4552c733506a405442913"
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
    "url": "assets/js/app.df6197e1.js",
    "revision": "d51b560deccef79ddee2fca8c928760e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d49924fdd45f234869ffe24f55e99d01"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "94f820cdefaa7b5ab45ab5ca4558417a"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "00969ae0349d1ad4e9c0791e53cad044"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a481e036957cd6f69a71d8b6d144202e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "36b8f0d6decc1ee7488e9496472ef487"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "56333f28529f06887429166f826509da"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a3e4b2dee813fd15efda8bad256475e7"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "2b2629ff8fe47a6315a8ec13e0292aae"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "8c634b58bbcc571ee74be3366dabb121"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "707e1f17fdafd97a64b52bf58a4d27da"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e5d5f80e070fe7cc9d8d07487c715cef"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b757fd1bd28828022cec36258bb9534c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "edd8088302c4a0c2cc029388bf6e616e"
  },
  {
    "url": "book/index.html",
    "revision": "f681c8df8fe9ff887ab2a20dddbb4ed5"
  },
  {
    "url": "categories/index.html",
    "revision": "2eb8448f4b264069eca4cb8e513d6807"
  },
  {
    "url": "figma/index.html",
    "revision": "f7905dada14f7f1d251975b620df3be7"
  },
  {
    "url": "flutter/index.html",
    "revision": "2dbfe203b0ea098d62d8a8a7200bdde2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "6a5164f6b4d5b363da50826efdd3ad3f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "83c73b37a782849f5d3886ea1b9631d5"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9db60603d32b48fcda909572bc7161db"
  },
  {
    "url": "index.html",
    "revision": "a8d3db2d911586e58e1228cfa8c775a2"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e4b72acb42c1928e19e6fc904235d786"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "0ea5b1c1cf6395a0ac3c105f7b0029fc"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "a257c1c0accb40234752d1d9f44a1e29"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "6fae0128372c7a11af4dae39183c4a04"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a7c1a62ef4a8427b31bc37b3760acef7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e13b0d984dbc6b8309b4c9b08ec643ea"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "6099be4fb830067569d2a364f3ab8b5c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "fe38941b4ce49fd14c66d47bbc5646bf"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "3d8a0d76549272de0608a1418ed8e067"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b490b59be184b53ff86f536fdc67591a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8de037ec16136f50f2168c262e3a06ca"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "359900e4b67a35e601ea2271715c74ca"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "326ec3cd394519b28d934847a88f578e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b2645ac9f0fe30a6ac51eef1bdfd690c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4ec081f149a3cba719f138964c0451f6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ec91fd0304fd02a619dd6a8a6228ea86"
  },
  {
    "url": "tag/index.html",
    "revision": "5fe1b2b2e1688f136fcca946242875dc"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d55f6c67a9bca434219ec076cd18431f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8020e8c83e4f368688525fd0ad4da09f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "64a40b2464a876ccbd65bd44afdc057f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "688f83dca3aaa1972c14875fa0144e74"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a87749783b9b3f84c3395cbd696e90fc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f9b43e966f34acaed56cc4ef001a4530"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f4159784d5907c6d5ee4938e596ce6b1"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "35b5b25dffe30fb19996b7db4f3fe6e1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3f74580ec41c85b3830db50962398e02"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b9286011b8a2c8090f0d1d90e41cfe9f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2b15c4dd6cefa32fc2efa70bfe35744e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "82ac9ecbec4ac5466e1a0925db990430"
  },
  {
    "url": "timeline/index.html",
    "revision": "533b5cc492d8f1dc17ded49949649b6f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3e1650fcad890a5e1eb73247f74ec513"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7f600871ea36015a4be62fc48329151b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3d65edb8fd4b65a0d7c495ef7ca50d4e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ba41c32e1735ca613a1834c6e542f317"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "501cd4ed607dee4b1eaaa6d04f645cb6"
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
