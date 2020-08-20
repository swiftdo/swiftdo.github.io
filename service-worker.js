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
    "revision": "e562550e28c9a6b9c4ce25b950e25d6b"
  },
  {
    "url": "about/app/index.html",
    "revision": "03063a9ff4c3697dbb455fa04360768c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "476682bac9806c635046dec4667e2e4c"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "994c81c23130e33df7b6c3a03ee28c99"
  },
  {
    "url": "about/index/index.html",
    "revision": "ce81b0f89cc3fefca7e1f6461ad497e5"
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
    "url": "assets/js/app.c45c0c70.js",
    "revision": "e323b040c85f18c98c6c15ebf46643fe"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "e3e27d9f5bf73d7a71f027b3d0d32838"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "abc9f10c537329f3b1f13ecceeffa74a"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "d2d6229db0965d4091628d57b194de35"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ede5850d626aebc1984048fd6666317c"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "96e6197a3e5c7ba42d33d228e83699b1"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "df2945f7de1fae40e959a10d7636c22c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "341ffd25d374384fa18da4f677d2cb69"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "063c4cb947cc2c0f35f64a0be24bad6e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d430c7914c557ea4b52c90bf34ae974d"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "be805e913a6df8983c8f3973119b350b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "20b89f211b380feb638eb7549cc73d0c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0b4b741c8658c52a4f45e14f7206237c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "19a20716c8307503d21e7675b6f3d3d0"
  },
  {
    "url": "book/index.html",
    "revision": "298ae8f36a965cea24fe3451328327dc"
  },
  {
    "url": "categories/index.html",
    "revision": "5e4e9f0293f221b0bf39a0e2127472a1"
  },
  {
    "url": "figma/index.html",
    "revision": "687f28124e441b9e9657f055427b581a"
  },
  {
    "url": "flutter/index.html",
    "revision": "c7828472d43755542c1f7905fbc4a6ef"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4883b31257ac77707b0c02cf74b1ef4b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "574bff5bd4d4d44edade7613cef1f955"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "70c1bef86070cb8849b3d77de58bb930"
  },
  {
    "url": "index.html",
    "revision": "9d09b9c5d26c434e6db9813853212083"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c1fd5e2f4c178652ddbd8949246c066c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "463994a9bcbf8465ae7133a4a3360da2"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "77dc3769d7d016a817c410b3158a63bf"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "29dea32cc0218ac02a19c4cf4ee742c9"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "27d07274102783fe7941e0298e7093f7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "148640f860ed4936c6934cfc8bac0fc3"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "b49290e7c42f28113083d98b8c9294dc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c50e1b41070e540b8003e73797d81b61"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9ed5fb51cf3f8547676ad8be084ba055"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fea2695a60dd4a0500fb3a8f0215c5f2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "af9e647a4dac69b154afe72bffd8a275"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "03e08af424f0430ccd3bfeaf1b4940ec"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "88a7c7edbc7085abffd7d42f320a21ac"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c8449ff8f022de09275817352a918563"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2b6e77f96afa0e7904033ffa980079af"
  },
  {
    "url": "tag/git/index.html",
    "revision": "16312522911d46957e8371aa94216447"
  },
  {
    "url": "tag/index.html",
    "revision": "ac1c706da3d3541cc3da35a416639917"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e41cd0aa4d992cc28ebc4cd2d3e799d0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "798842f6fdeb69e8a1e03b654e6b8d08"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cbc72b2544df2a003e8df13cc96caea1"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a2cd3298ac8d977c7715131a73d86a51"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "af739bea64f57bbb1b05f914959f6e5e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3c7101bfb08f213f92b6273915012a75"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "84ef76f9d2305f8a2cb8b0dba6ebb7eb"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f4577196649005f0c6a8d7009c0f6b42"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "68c378a3653b13960728acde75b143b2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f4e0147da4906fe2bc6d7f5c69b53c28"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6cadcbbeeccf0b5c2b7eec3b6afa2bf2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "26d6ae83a4bc18d33ab8ea9dfe0e65e2"
  },
  {
    "url": "timeline/index.html",
    "revision": "ee0ab99db646073101a422c632ec050b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "304d1c5c15a359c1940e84d3df599065"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "69b505dc5af11bd79322b4931e55b331"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c89d286cbe757b46d40c57d6c15e66fb"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f8d59dc6f5f577954ecc71f31c7dac51"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "31340a660ede5b28f55b1932c123a34e"
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
