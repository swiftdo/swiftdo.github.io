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
    "revision": "a6406d59026badcae52011ae43bec0f8"
  },
  {
    "url": "about/app/index.html",
    "revision": "03a6bed2da8e9b4a0764a0cf3ff608ec"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d209333cccfe909f93bf003a115bad86"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4c5883b051f8379de34fc51c83bafa4b"
  },
  {
    "url": "about/index/index.html",
    "revision": "ad13f60549ca7c4859abbffb6a7a937e"
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
    "url": "assets/js/36.00a89a9d.js",
    "revision": "8d534828b58241666714860aa276e29a"
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
    "url": "assets/js/app.7ff02b34.js",
    "revision": "e14431a6d61ec014ec5bd3940c03ee8c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "efeb6cddbcd81065d1821c0e61969c20"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0f0a8f202cf4d222eba08810a763e493"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "953288587cb4d47719a6a91136b1d115"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8e54171232aa86ccdc503ad1662db60d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "dc5f95dff292158968eb3b196d8ae8c6"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4fd8a5fcf9f2716231a4af6adc35dae7"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8cd0cc68dda97bce5a69a9a89c4376df"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7f2765a757b3f81d16c9eceef9be0ba1"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "a3365f73590148ef70f4437d5550575a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "52b2b0fb14c24f89b64f2fd5338d780c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "6026887c9b2666d48be5530e2e15ba3a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "99d44b0e76a1a083fc6a3dfceacd6809"
  },
  {
    "url": "basis/os/index.html",
    "revision": "72e2889fa99304ee23b45fdb4ee8fdb0"
  },
  {
    "url": "book/index.html",
    "revision": "dda4123d778a7555266be4673495206d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "cbd140860b6a9c2e03290775911cafa0"
  },
  {
    "url": "categories/index.html",
    "revision": "10792adf46eb99e81ca40d5a391b00ae"
  },
  {
    "url": "figma/index.html",
    "revision": "a9bf97c9761f6f26017f9984d0b7aae9"
  },
  {
    "url": "flutter/index.html",
    "revision": "8c83d5715adde59dcafc3c4740048a97"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "458ee6c2ffbf29de81895e9a88c5f26b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "02ac6dd5b9da6ff94f90f337ae617543"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0048654b1381040664fae045a3302f6a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5fff3fa2a7c3e9c00d24273c5ca66e84"
  },
  {
    "url": "index.html",
    "revision": "edb56fbf2327c20eb94a1485c505057f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e9c01c4d305e88bd711bcaaad67a3a03"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c4314271f1dfa7b7659d74eb85f27b9b"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "6d46dff99c649d80fdd5d9240bbfd3f0"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "8596c876e14332373476a4503df15b94"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "8b377baa661ac58479804b181a7d5f3d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "db97cb59108e26c1e23f0d770ed1115a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "95cd360527de49ce021dec8b813f18f9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9d085528a00c3ded78d0516e6eb947d3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "193d09d309a138e77730f9f03ac61c0e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "878dfb5dc0a68bc0f9892693b5bfbe72"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8f4472a2aacb52b2beebd55563d6278b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "6bb71dd353fda049f424bbc9e56c4d5a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "11f8e94f4367ca0e369954b62a86bdf3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f039328f650b01e3d32d14239514edca"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cbd7d4686341c2354d3ee0f76b2d527e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2ef1e32a346cf2a7ea9f1cc5a3e81c70"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f9f4445f46aa81050b9c197a3273f119"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6f3c9f95dc05e655f77f6aa7a214c326"
  },
  {
    "url": "tag/index.html",
    "revision": "186f88f7cd0bac7dc3b6eedbd3b90a21"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "1554b675d9dd9d32c398d4cfc2ac2bc9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "62e80b739072613aee66aae5df160ad7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "993cde85e448615cd05d2863d5fbcb29"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e5b13ec7df4b870aa671bc6f62643518"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "c8fa55b1c56e4047bc56d86f1d36d92b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "83cd499b235464ee22651a08c5fc3e4d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fb7920db2d56d0acc327747b2dae19d0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "fd531fdb964bf75a84df95583b9a38e9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "5dc81feb6670f9d53512e6a2ca3ec249"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3295fe3de0d61398983850a596352d53"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9c2cfe888e076fd9174cfcabe33959c9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4789a256bb3e159c81cc733fa2a07c0b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "68f4ba005c008a06ed7eed13c0483e41"
  },
  {
    "url": "timeline/index.html",
    "revision": "0330419b542fd6c9f05b9dbe6d57bf16"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b17735b412e12441beddbe87f2557238"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "206e0fa208bf379eb434156ae2bb6526"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a2a8026a0fbb8b477162e5759bcf844d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f8d7640847ced995acde8e4512f4ae0e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7e3b40f0718e90f47f2cb647c3d99f0b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ddaa43c8d1e3d0ec6efd554c6fe59820"
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
