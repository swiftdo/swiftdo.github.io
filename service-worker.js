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
    "revision": "d1345631592ef04144379080dcd5c805"
  },
  {
    "url": "about/app/index.html",
    "revision": "0bfc3c79ebde8881aab3db0b35e787ba"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "074f55bb9645e31ddaebddac21c3b8dc"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "eee2cfeb5280f63171077f2b46ffc0cf"
  },
  {
    "url": "about/index/index.html",
    "revision": "241b4923d2b66fee55dc261b70525f99"
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
    "url": "assets/js/1.a77c5691.js",
    "revision": "69a4efb389d3f8ea8550d7a04c553e3b"
  },
  {
    "url": "assets/js/10.b06c0997.js",
    "revision": "516f705edab68410b8c8dec3ab349800"
  },
  {
    "url": "assets/js/11.81c82553.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.c5800ffa.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.81c1f879.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.d3ade443.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.a135ccc6.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.1c30bf1c.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.a0a779df.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.f0e594d7.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.ef7b87f2.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.cbbf00f0.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.a0fda9fe.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.cb9919af.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.446c7abd.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.cfd9171b.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.336f6c5a.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.c77469c7.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.62ccc67f.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.9cca3e26.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.339b73eb.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.32491c79.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.a7a5eea8.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.a29e802b.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.cf799455.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.fd886188.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.be58dbc2.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.e44a5800.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.1df174df.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.cd226950.js",
    "revision": "8d6a654f6d604a0ea1f30bb48ec781a6"
  },
  {
    "url": "assets/js/38.5139aa1e.js",
    "revision": "c3fd2a9cb424afe983f5c53c42c6554d"
  },
  {
    "url": "assets/js/39.2ee8f91c.js",
    "revision": "f82add81bc321554f2b87622524649b2"
  },
  {
    "url": "assets/js/4.a6b8f26f.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.f4c12991.js",
    "revision": "fb63c627125147758aea065f37f1f4e7"
  },
  {
    "url": "assets/js/41.6bb43be3.js",
    "revision": "23d63262bcb5bc5a8a49a08348d81891"
  },
  {
    "url": "assets/js/42.3ea4007d.js",
    "revision": "f79b29105ca4e459e731d82d21afe2d0"
  },
  {
    "url": "assets/js/43.dec82b79.js",
    "revision": "1c13cb0e997d7d9de62b550335ecb069"
  },
  {
    "url": "assets/js/44.74b3634b.js",
    "revision": "8c30f5664592e614dea6c57591ab521c"
  },
  {
    "url": "assets/js/45.5aa8457a.js",
    "revision": "05c616fd22ee0b01e0f53a91218f2e17"
  },
  {
    "url": "assets/js/46.e05a713c.js",
    "revision": "097b6409c8e6e697331ccb623dafa2cf"
  },
  {
    "url": "assets/js/47.9aa6c5ee.js",
    "revision": "ffa8dbfd753c3ea1221b41928609b168"
  },
  {
    "url": "assets/js/48.63e64116.js",
    "revision": "65769b39d3eb34eb4bc207fc6a4ef8d6"
  },
  {
    "url": "assets/js/49.f5ace6fb.js",
    "revision": "099538421de169725322abe27de65438"
  },
  {
    "url": "assets/js/5.6ab1ab94.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.477c8df9.js",
    "revision": "5367c7282c6baf4c6668a2d0cfc31bd9"
  },
  {
    "url": "assets/js/51.e50d84b2.js",
    "revision": "9a59edc4d1d3e9985e6a613238f3b499"
  },
  {
    "url": "assets/js/52.b7fc423c.js",
    "revision": "74125e4f18303918c0a38bf15fb17e32"
  },
  {
    "url": "assets/js/53.166dc27b.js",
    "revision": "999a159f6c35f2ea56c4c20588a5836e"
  },
  {
    "url": "assets/js/54.28db2a48.js",
    "revision": "a901606c9e8f29be71bd1963eb957f07"
  },
  {
    "url": "assets/js/55.0a5b08b7.js",
    "revision": "9ecb781a79cc6db9170b924c21c420b5"
  },
  {
    "url": "assets/js/56.0c062a2a.js",
    "revision": "3bf3c65ba93c14cf6f8ad5aeb9e8de56"
  },
  {
    "url": "assets/js/57.3d246cee.js",
    "revision": "662558d87177b98b629409d9b1780246"
  },
  {
    "url": "assets/js/58.bdbd7d58.js",
    "revision": "1b7d90bf4778c114224ef675e819ac0f"
  },
  {
    "url": "assets/js/6.23a75e3b.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/7.8fe10757.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.c3dfe21c.js",
    "revision": "f90dd3cdb69ebc78dd8d579aedece24c"
  },
  {
    "url": "assets/js/9.65d45562.js",
    "revision": "e5023016baab2a86879ab9255f6e297b"
  },
  {
    "url": "assets/js/app.a92d9883.js",
    "revision": "aacccdb81de76fcbe8ee12ed08be8c86"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "9a1139b50321261b7628b692ac98da8b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8f477a8f0ce68f9e4ba04e299f4214bb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7877d129858f9a98760e0746ae5f0c76"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "7f60a70a3b8179d5a24a75e997b1e78b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6c79db2636b19077e7c46be42aa7bbd7"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "de70cccfed0341e20be7f42e84d0e930"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "951ac81da051880792d84b98a606ec61"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f9a778f40009b180cb9b47f478eca274"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ec6f62834a7515f0f831be6185d5fb52"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c331ed8e0763459a0111c9bba625b079"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "74fe91f3125d36298eed7d3d0493ecbe"
  },
  {
    "url": "basis/index/index.html",
    "revision": "300c1acf10b4cd820bfc9439a537b0cb"
  },
  {
    "url": "basis/os/index.html",
    "revision": "95d3c880059f30bbdded4fac78e24b12"
  },
  {
    "url": "book/index.html",
    "revision": "618f8b2f5a88345249c6db17bd1f601d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "596ed37565fc1217e9c72ef5a56e23ff"
  },
  {
    "url": "categories/index.html",
    "revision": "e3aebad64b95fda8fbc0152d434f1659"
  },
  {
    "url": "figma/index.html",
    "revision": "34fcb8d7050be9b7e598f102c8ea399f"
  },
  {
    "url": "flutter/index.html",
    "revision": "54e11299676ce1ad80b9213181d21c1a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "379d96c5bf4bd8a7551aaba0b08f0e0e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "bddfb15c96d04873622b0b138fa0eeea"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4d6efdcd8e224262d1649321bc4bdb59"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d804c390cee44f1a7dba2ef67cedc671"
  },
  {
    "url": "index.html",
    "revision": "8cfad8ff91f45b1c4b810f55d5792f8b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a5088e604f7d0b0e2eb028ec2328b70e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "0f89066456d60abec0a15c3bce497551"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2f5a0be941ddd308ecd1e8869ffc8532"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "8e2a127944600a5439c300fe71ae6758"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "90511c351f280f89219635f9dde860dc"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "f5e1378244eddf0c58e11bcfa7acc1bd"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "e3e8c6ec563641938c560d255c4813aa"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d289980845cbb9e0719eb277642e4e95"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a4c17180f17134bbd4174c0d788463cf"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5b26a8b158b503d71fb0c25316ea51c4"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4149ef142945fa854c7e498d23b0f406"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d3cb9048aee349c2455953c682a9e42a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7bc1e089f46cb1270e5d1f2adbe88671"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1fde16595a0513e585fa5ab376162429"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "915a4d969328db670fe02f57f3cc418b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "1de2b6bad4c455d2a1580a83881167b5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "87cc3613b17e0cd5b82ba83004fd9572"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1a692afe514f7bcba2a1a47e055a5b3f"
  },
  {
    "url": "tag/index.html",
    "revision": "8df7e054d173f22dc63210139f404d64"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "51ad2605de301430004bfe6f1b17a2ff"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "0d4e93dde1d47457c11c94b2a4395e32"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ac174dd5bb0c0818049799b219a93df6"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5a8a81018d87bd6bd198771a40d2691b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5ded862141c69b5f1b25fc41381e2558"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "896407c800804024635d11feffa31d3a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ca27759465f971f9d8e7f8141ce64068"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5938bf6d596610e19e8431cb64b61e9a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "033aac48107a7c60f732921e8407d50c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "858b356cef38b424dc6a0095a6994ac9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d1950c355fc0fdd51cdfe0500ef3acdc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4376b80db3074a4dc2697e1277953456"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8235826f1bb02344f3e01d01f502e066"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9ffb58ec40acb4ad7bb3e1fb9e036b8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "289bd76fbba9d8217f576359d6ddec0e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "52f38fdcec7143a3867c37e420983c25"
  },
  {
    "url": "tools/html/index.html",
    "revision": "83c36286a363f669dcde23e8087220d4"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6aeab89826f0ca206fe3e910056d1e1f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2f970105ca5545d34d15c2d9a6b2b3ca"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3df8b031a7316076238bef7f02070c11"
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
