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
    "revision": "c057dc3f61c118e7e7ae5e1f3739b890"
  },
  {
    "url": "about/app/index.html",
    "revision": "c1459a9fc4e10c24c601fd114e5e9584"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "67b96635fe935cadea8f9546a15f3832"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b14bd592657fa3cb36c0c32cf9d4cacf"
  },
  {
    "url": "about/index/index.html",
    "revision": "21d7311b71c17b95dcaa26e58788fb94"
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
    "url": "assets/js/app.a30e87d8.js",
    "revision": "7da31151d4e29a464bcb7246abcce7bc"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "068f585b656f7e48d0a45e9bbb127397"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6b4bd239432902969f19e0c7b82f26c1"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "f86aa162516007cc758f7fa0fc88dcde"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e72d6ad0978207cc7c687d015217148e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f1491f00bd68a367132c5fd4d402c1ae"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "cf6c718180c60b946fb5b823fe4485d7"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2e037f85858888a4205ffa7da7f35dfe"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a5ce2198e2f85846998f95aebd7132c0"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "713778c77841196a9cc9cc7e35f8709b"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "3e3e32132c6129c7b56de9765edcaa4c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "00df6b8e6f9ac01ba55fa6d3d7a9ecf8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8a890b8d91d5231062f8479f21e75adc"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b48289502ce66852ce932b2b7174d1f3"
  },
  {
    "url": "book/index.html",
    "revision": "055a4e8b8fa1aee5039f4fdb5ede8ce0"
  },
  {
    "url": "categories/index.html",
    "revision": "9c12ce360d4f394138371ac3bf1f1a13"
  },
  {
    "url": "figma/index.html",
    "revision": "64e5851156c4d71340d194a80ad83957"
  },
  {
    "url": "flutter/index.html",
    "revision": "8c21c2d9f5b45cedafaaff7038ccedfd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7f498c3c1809ce7884d58940453cc0b6"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ee87434b56cfec2af09455205603d943"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0df72ab6476e272c72c627f7f60e6d35"
  },
  {
    "url": "index.html",
    "revision": "dd38d830541c702022d01ae0c2d90d20"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3631b7c5d5a6ee6c7aff30062127810f"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "d74282456054d37e6e33f618d396ec96"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0bc4a13d73997711a068f47664540e80"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "93618d7e45ce3be6d1e0be19c41b45da"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "149819a6e94085762364716b571fba19"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5aada565831197c81469cba0ea45e5de"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "fc30d24656f1b5e4165d258252e5ab42"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "40dacf19dd4a1e9f55b76229a79933cc"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b482d2a28026ea0d399b3d377a488124"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d98745247cce0886130cd8cecc1cd038"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b75505bb378439e33d56e97aaec2e427"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "cbe9736f20dee8c6d695b6b6399bf840"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "64d2db1ccc570e09ffb6b0ab588c430c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cb262c904349a4e2fac4999a5b88b1d8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6da32298c62a63db554a366ca5b31a5a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f772a34839137af80820b1b7da9828a4"
  },
  {
    "url": "tag/index.html",
    "revision": "9475ec47c0e882c491ccc8ebc359239b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a43f29467feeb5c694fb811a84375710"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "45aeb38803a6a40789fbc4b93abffefa"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "2ed71af6140b7baa1f4187955b6c2334"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "76b684fabd7067b74e96f4bf9d4b7bb6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "4841ef387ec11cc8d4c1c0da89dac5b1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "95101319b90905ba2460c5222fca47f5"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a95811efc3a12790ce5590005f7992b7"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "61bcd31c9d7e649242e4b1614fcbbc18"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a1feff3d194b9961ffc6de46f4b2b7e6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "46288c60873dfefc567d7834f254896c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5fb1e5c8ed8bc81b0675ac183425e989"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "287d72a892366b30c997a19d9789c332"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c3dd53113098be05e3a3b26f627eff5"
  },
  {
    "url": "tools/git/index.html",
    "revision": "591e263b82487d9980d0b30c8968913e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d913d5ac2f94567c6a4076ebf4d24cf8"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "07d12b75adb1680bbac5764efdd588f7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "26c068374054e382c733a84dc3a34b63"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e8d4aacfd1da6feb20b52d47ef2d9d8e"
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
