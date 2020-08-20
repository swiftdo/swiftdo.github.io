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
    "revision": "b55325b5b21408031e1dfc752bbd1a71"
  },
  {
    "url": "about/app/index.html",
    "revision": "30465099a38b2660eb5111f54f0033ca"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0af5009e70d0c89f50d8637b1c23f232"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "1e7626449ceb997ef26beb4358605ee8"
  },
  {
    "url": "about/index/index.html",
    "revision": "afb8ca6d1f6964dc15bdfb029ab13c7f"
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
    "url": "assets/js/app.f78eb779.js",
    "revision": "65af9dbdd66ec5824ef73efc921136a8"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b3ea3a67b431dfb8c3af20edffc9a54b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "09151633c3f529b83117eb7c2deb5f00"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "279157a30fe19cd1d2236ee1756d8ed4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "03cd22e727dddfcfadf4ed06f6f14489"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3e8f3ab3ca773b51057488d0d27ede73"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c4b39e91bdcf76c34d0493071793d372"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "292552e07970121de80cbf6420d0b2b0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c0596e098461a24c1597b3e476ecfa08"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a8f71ffff39006c941278aa4a51726c3"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "b85514c676b9c6e6931cf688b49aed2f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "43693bac67fa60af03575f2b9587430f"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d251935accdb28c6943ad62e13d51860"
  },
  {
    "url": "basis/os/index.html",
    "revision": "972387187f61f61acca6c49d13ffdd97"
  },
  {
    "url": "book/index.html",
    "revision": "c7506b25fdd32ec7d0be2ea62a632d96"
  },
  {
    "url": "categories/index.html",
    "revision": "2c0b1b103aeadcfc7a71a2b38dfb8d1c"
  },
  {
    "url": "figma/index.html",
    "revision": "e8b869eb88aecf9332470393cfe7f460"
  },
  {
    "url": "flutter/index.html",
    "revision": "2ec789e61d51a95fbe8f5cf6f71ef6d6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "fd8c8203d69d97faf0e4f707ac1940a8"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "13684d88615dbf19cb8f47cf83b5da2a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5de5314896edf9ed8d0a1ae0e62f276e"
  },
  {
    "url": "index.html",
    "revision": "43e9087808ecb47a904f0b324fbe1425"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7ae82edb595ffcef6d15f30f0366a04e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "10f92f2baa95806653bccb0e6ab5dcb7"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7b370c19efcd9882745c9fce95fbb3d9"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "c2a5400fb9e1da51e51c1a58465ecefc"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "da7a40baa524b857e30edc36a5fd4d2b"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6902b081455fa2cd5db2c0841caaea67"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "dc5cec749aa2f042ab402e710c24e482"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "db8693df2dd213f9e229fea48b9c13ea"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "69689c5b998a35e87437f4c6390d82be"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ac86561f7675ab87f76fd592a10c0a62"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2f55a1e050841cdcff742f40d43e67cb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "200f77173a62ad3399677ce9b605f453"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "47c5d7b5bc2f53f76a241ec7227c2a86"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9d4abe397fa46239bdeaa961b4cfd0b9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "98a94c3892597bf2682303d73b1a925b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6e1c1dae3b1297de95569890bec1ea22"
  },
  {
    "url": "tag/index.html",
    "revision": "c501f177b797516722ea93d5301897f1"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5956f777926e6fc3e595290c46403103"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "15405d56f26f9a78d98987f25dccd51f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d7b00ca2619a5993f19dd85b2b68c348"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "92380d72db05c2602e7c750cd7a6c636"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3fb898d5a3783745aa0ef64890f5f885"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2633c5e81d5a770d2f75e376c9d21a8c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "440ccb0f030542b78b01f25f2cdfe699"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4ec5f56ed3bdb83ce2d48258bb0387c3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "60951b0ccbb598ae0747e9d1a23dc11d"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "08c0dfd52b4c882389cdfda28062966b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cf6ecb058e6d816afe774485e76675a4"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a6a7f1cc7265517851ace8418cd4cd66"
  },
  {
    "url": "timeline/index.html",
    "revision": "663dc39acc3bbc413dea3b6a999935b5"
  },
  {
    "url": "tools/git/index.html",
    "revision": "46c606fa02bbc250a7e1e0b32904e2b0"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "5d2fcd0db7fba6256065dafc99e1962e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "599af2710d3c6188d340166d3f3b4ef4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b1b617f9ab962ce08feccb5ccd2fea69"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9676e845528d6f0cbd0a9b262ad5b0f4"
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
