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
    "revision": "820bd414d7b0a36f80b92a5fb000ca07"
  },
  {
    "url": "about/app/index.html",
    "revision": "ce84cb2d0b4e02505012fb8e08017bdb"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4666eb1eca04ba544968ce298efde49e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "19481303261e7bc4a05b765093cd012d"
  },
  {
    "url": "about/index/index.html",
    "revision": "71606bf855ab2c2f9c4ea366ae8630d2"
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
    "url": "assets/js/app.cfc0395a.js",
    "revision": "e70510c7059b20916e90604ad885d9c3"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "050d551c51f6e4ef5026c5ac6808e1cb"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "603bbc5d272d1f19f86d4c826e80f728"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "b5b5956ab75701e377588234bf9349d2"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "cb26d2517f46acc6d103d9e1bb272202"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "6bd00c5df1f1fe53c43dc856c1cd424f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6d654339e423f39cee690da222f01887"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7a6b7e06271ab983e17d36d49560e5f6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "721a1311a2af17e0e565e94866ce0a03"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "34a6ee69d162a6b0447ce4e21207a47c"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "53b1ce51c1f71cbe279a03498318b943"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "294c7b971aab6d566b650e603501c1b8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5f856fb8ea87f4044e740c2cb930b86b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "26332e7555ff3c7e74a01c81912e414c"
  },
  {
    "url": "book/index.html",
    "revision": "1dd618b2d546dc56d1d291a4e5f1279c"
  },
  {
    "url": "categories/index.html",
    "revision": "7b4a8e9c26c91a3755932b6a703e2d44"
  },
  {
    "url": "figma/index.html",
    "revision": "613e042a10866881c61a3d37c3be8be2"
  },
  {
    "url": "flutter/index.html",
    "revision": "77846e3ffcb7294773ee39f1ab5e322f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ee0b58ae955c0c666e9f05c3b21f3453"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "7acc671ff31d9c4ec94ca78d94eb4daf"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e9f47f0b55b2a6eb9f95212c93c825fd"
  },
  {
    "url": "index.html",
    "revision": "d46b56ea505a11c6832a1fabaad109b8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "57b495c43848cc1b077f84ebf0bed03f"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c48aa29962391f60a35d3c33240969fc"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0afe65b61ed641ff4e1b44e0fd7ca077"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2a55aa285f71ca82c96a68bd941eb5f4"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "cefb3e111ff8c4f6a0f7935db37d1125"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "1ca8735509cebf146a51dacedb12c0d8"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4abea7eac3262b9c6679bd31b741f6dc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8a3030f920be738139c95a378347e13e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "3c3d7144da56926c2661a41e5f8f8f82"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9adbf9d27862f407ab63adb3c757c90c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e26008860f523be53471f84c049f327c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "523c4ccc9a787429c562e2fdf9c20f2c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "17b4cd686870293aef557e74e71cc889"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "20d424b7fa1d561d0d4966b7850d1dc9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "45d845c62208d062b5e72bf2d62fce3f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2faa10671e1269fd297bb60329cef3fe"
  },
  {
    "url": "tag/index.html",
    "revision": "9dd3fa8c55bf84b79bd6dde0a07d30e1"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5b12df6b82e5f0beb5b0e62d62f12db8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "897dd193d4be228292fcbf7ca6dd976a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "191ccbb53a8c1c1074f39da2969a2b6b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "cb23357902a7425a444490523a49eef0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e1fb29266c172d0f23f8bf24595bf635"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cd9550b6f59cb53ac7bc14c0f79621fe"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "486f6af1b9fe29da2b14c459bbea9d65"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "bd4574dff3e29ff10bb4675e93947f1a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "15e48316722c45055b8993acbc37b12e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bfa64887320ff65fd7cb198f10c323dd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "04ac24a54e502178509442e7db965581"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d48525d470c25a98d8a0fc71c501cfa8"
  },
  {
    "url": "timeline/index.html",
    "revision": "a745276ce01d090302545d9e0830e6e8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b0adf5b82e2e09b98ce5d217b0f5e06f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3073b32eae9591cbc500a9900c4cde5c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1866766f987992d6d6d760652aa215f2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1f44041107871b759480002e0e635338"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0fae99c654d024d1b1bb1b31f5b4e8ef"
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
