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
    "revision": "dbfe388d781220dda9aeaa653fd1a6bb"
  },
  {
    "url": "about/app/index.html",
    "revision": "f8c929a9416f4f91d3e2776a56cd4e33"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d4282a3f875867a1942a3e205a89ef34"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f39b574024a51d8637f685850f6761fb"
  },
  {
    "url": "about/index/index.html",
    "revision": "3c4426f03b9603d456b9e0dc62eb124f"
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
    "url": "assets/js/51.587571c2.js",
    "revision": "d5a0225ee93e2d1aca05f11546707fcc"
  },
  {
    "url": "assets/js/52.d274d5f4.js",
    "revision": "739ac0292bba4e058f82cf76480222e4"
  },
  {
    "url": "assets/js/53.030c96e6.js",
    "revision": "abf728a1310e68f2bb64ba82e56fc70e"
  },
  {
    "url": "assets/js/54.e39d5d95.js",
    "revision": "3dc7d934a1a2a42785ba565bb5830103"
  },
  {
    "url": "assets/js/55.24eeb292.js",
    "revision": "bf494653caa9324d0992ba9b5cfabad6"
  },
  {
    "url": "assets/js/56.fe71bb62.js",
    "revision": "20d46ccf9053b3e74cda8ec97ddb22e6"
  },
  {
    "url": "assets/js/57.cc6135d4.js",
    "revision": "ae2b733d231df3630475ac2283125c11"
  },
  {
    "url": "assets/js/58.ac8f5dff.js",
    "revision": "1a0e15bda935cd653075fc610b85efdd"
  },
  {
    "url": "assets/js/59.d003b225.js",
    "revision": "21c58fc5f7d14416e9bcb599d8b245fb"
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
    "url": "assets/js/9.3b746b53.js",
    "revision": "62e2dbe405bcf74112e770c4969be439"
  },
  {
    "url": "assets/js/app.4f67053f.js",
    "revision": "1459893e61016aec548baa37e77ef9c3"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d3f152783c8fdacb94158d03ec8f6418"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4057f35ab7074f08fcfc15a7b8274a3c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "baf5cab38a4762cba659ffc7010c6648"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5b2cf9ff31a314d238fc657914d2ebc8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "76f16f3b1979d73d12823c56254b540e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4c50096ee3e005d266042f096cdcb89f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c5a5178365d58d1ed92d6d440f246a98"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d386a01f9e92f4aa31c5c757627d710c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9a5510dfba4ce6b11f04b1c661a90ac6"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4ca3bd749bb06f8666e83a13d13610a3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "446c884acd41484f6ec9fa70abbee0ae"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6d2835c7306bf06e8c03c93ea50d2778"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8741e9960f6d4d477ee3effdb2edb2f0"
  },
  {
    "url": "book/index.html",
    "revision": "3f43cd6dbbd70658896e18031bd8d5cb"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "737f2e28a03511c87451e0fc8a58c6c4"
  },
  {
    "url": "categories/index.html",
    "revision": "d4e71c4f0224550d51f4b2f7cfefb819"
  },
  {
    "url": "figma/index.html",
    "revision": "95732a2432629dc653c4f860e4046a87"
  },
  {
    "url": "flutter/index.html",
    "revision": "b35b84e07a4713c84989845ff19c3e9f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4db5aa5a32882cfceae71e5834f451e1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9526cd454b76fa2dc78e2fecd9d07eef"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "09480c24fd02f6d27c3ef64f4098c2b1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e57851555ae53badeac92588d5ccbf46"
  },
  {
    "url": "index.html",
    "revision": "1494e2f63ee47cf2a802c46f2236cc17"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9345d78ddd1dbf66b81bbbb7f2d1dd72"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "32c80b4324511b73fcbeda993f23aa32"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2eea685fddb44966633400fbd6370fa4"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "cf50187b6b7602fc459a8fbe7df614e8"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "e0a72580488522000461fc4c806924b7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "134ec25fece24cc9cb6e773690354b27"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "d02b3593792d26b06be1afc18aa6bdbb"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1bc3e3cb41efea8225c353a217569056"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d876207a40180f0661912422aa498220"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9374d7e611b6e47b2bd43b5d66e3f721"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "be3ea52fbaff7481a6b3bcf8ebaaf288"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "438e4bc709a4ed0124ed6e438ed8f74a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c0fbd4f0b3384b32e0d8c88227b3b1fe"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6efe31d80bebb0c35d38fa3fb3ca6624"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ceb6a561f63cfe9de25cdbe4a435449f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8a5ce75c4abf4321a077d1f406b85f89"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3b7f8988ee507e51252dfdb0459d19d0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "239ec1bf4df04ab69e11ce9d93cd666a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8ce454af01735e849963abd2308ffe91"
  },
  {
    "url": "tag/index.html",
    "revision": "570b7e74e49d5ceeed6cde00001777a8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ce95f0cf8a33a7a79d1741e2075a8355"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d4bfa5cf8b56fe07237381891665bf3c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "2b35934d7e1fd195fa81f46dd1916d81"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "6c07bd431b9db90dada529b94dcdc5cb"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "93d9d2495686cd031eb93ca50d0e4778"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "50b52e956d6eada9a46edff32acb2652"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "30c66b6c811b7faa8b216ca680d42a3b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b6b2f92a356560d66df6e51c714a7401"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "24c6dc0e8f3a960a39b55433d3e5bd45"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ecef2dfd9f88bd7ffa8750b89600c92b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6c93ddeb38892f414c316b26514db59f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d00118398bc95c4184062af4e28da7e3"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "c8ebc56bc93bd5282de2262de535cb9b"
  },
  {
    "url": "timeline/index.html",
    "revision": "822c64903ad9a8bbf7e181cbfc895fea"
  },
  {
    "url": "tools/git/index.html",
    "revision": "950ebc5bbb3fd423851d0bfc334b6208"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9bcf5699b97ec4d2cf9fe44e71b07e5c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "685a5e86cc21338e3855c5794eb7b346"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "900b67e0ad911ea722372ea189e705ae"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4d613758fc55d529d3b89610f3dba17f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f6d02448f7964586546c8c2c83963356"
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
