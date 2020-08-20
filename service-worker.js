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
    "revision": "1a2769796f098cceb31bb8838263fb31"
  },
  {
    "url": "about/app/index.html",
    "revision": "643a68b9ebf49f81a40afd2f4b620e63"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "cb108ffc3072dac524da059f86809ae8"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "941d232b87e259cf47e3b83885d35373"
  },
  {
    "url": "about/index/index.html",
    "revision": "e7cb62d4c0c2f191429b4a7c9d2e915f"
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
    "url": "assets/js/49.fbcfc655.js",
    "revision": "e3a9a53189419f7efe9ac6a715094788"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.fa54fb03.js",
    "revision": "55e5c2690c4f6d4e1124cb5eb5ffc0d4"
  },
  {
    "url": "assets/js/51.085fa9e7.js",
    "revision": "67fdd2cb2ca3c819eeae01b9c8bc778a"
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
    "url": "assets/js/app.cd76927f.js",
    "revision": "bf8a8a3f90d87027132d7b349e057817"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "bc3d19aae6e7ea03e167eb5cc0ecbb12"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f5748f7a0111859f20ec8fce26532a4e"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "9434c2aac84ddc73ffde5f0387fa0bdf"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "055369d0a26e30a5bfdae8222d4a34c1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0e1b5484d1edd003b7b609f1f2ea2af4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "047620c0aa31debf85fdfe0a4b6c1764"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f2f3104d5fea1f69e73f8bec27a23ddc"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "99eeaa4004e0bbac3ab9c7743cf14133"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6a72039bc1235695c80a0e600a1b81ee"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "ceac32225f6453f4cd27e55ea3ec7413"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "b456200de78261c065e488eafa3780c3"
  },
  {
    "url": "basis/index/index.html",
    "revision": "919d7863d1ec1cbe294e4008ad598eaf"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a502aa45cbd3b678a5efa44214e228d0"
  },
  {
    "url": "book/index.html",
    "revision": "ecdb54b4ef5c3504125eddf129c6f364"
  },
  {
    "url": "categories/index.html",
    "revision": "f6cf4b539401cb664c6df86a3cd3661c"
  },
  {
    "url": "figma/index.html",
    "revision": "465f8d45e7b42ea8d4d7832881649850"
  },
  {
    "url": "flutter/index.html",
    "revision": "362baf78e807ffbd209b9cef35a301c6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "607cdd6e0d1eac59243629f408b634ec"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "34dc19114274f0dc500c7958e6573e11"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "8fda1f47b4a0b50c80e4b67f2ecaa666"
  },
  {
    "url": "index.html",
    "revision": "c1dc0bacd0625e3c422cb868c974b6c9"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "fafa96f17736445c1eb6148dce7652d6"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "05120ab241d6282229c7f779b2140acc"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "6243ff34a2bf0198c88c41d09132260d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "778520accf5bc4bf3d3a227a9de55a40"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "93f1336bdee29983bd5b847760707430"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "4b3cf24a20797806059707c6c6c058f4"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3637be279e1ef9717749f37e3760974a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e32dc4f63bb09d1eafa1d503558f5ceb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "608143265f5bd3ce880cfb46be4854d2"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "63289d91111367028684e0b7c50db0c9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "464f53e3ebb4d42f3f049582f09ad0da"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c8b20d7c886d7fcce7065deff385d950"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7b3405cfc1e10c473e5c37de81b5c05a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "32cc6d8a483dc01bab1bf492ce3c7ec4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e7710528887849b34bb78912aae91a34"
  },
  {
    "url": "tag/git/index.html",
    "revision": "35b0d3719ed273903c77bdab411dfe80"
  },
  {
    "url": "tag/index.html",
    "revision": "912652ce2c11fc116cf70f1b70fc29a6"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "48af8ce126382d8a608dbafacd1c2fc1"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e3fa944ace5b5905e4c4e3f8519fdc2f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "681dfa5439c838f87efd1408eb18303d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "68208e5243ff64424b418eca47223cf4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c43c12ebee3019fb79ee111d51be79c5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "58fb70bc4d1e675ef18df0742067d257"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f17ddd0009f91ba0c2aac329e9beff62"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e06e0e5b6754dc5315000228601a30c9"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "00971fbdd0c9b2abdd4b962e7bc89baf"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "79d73e141d6ef90f51df009ff1ac3860"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d98aeb42ef68a2769c1d7a43bc40ad28"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "70bf69735c108cc53a42a38d587b49d6"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ef83437d9630a2f6d25af43f8e440f4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "113a1ef75cf0b8c4bce7768fec384337"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "24081bbc716f425ab636f513ce9fd023"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "bd7809f9a41b67d9d705df1cb9aaba64"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "058f3671f44c09c520676c7bd29899c6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "19f1d8920903228092cc4847d76c0489"
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
