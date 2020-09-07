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
    "revision": "a5218a44ed7222235c672517d509f066"
  },
  {
    "url": "about/app/index.html",
    "revision": "3f7c4762ab44208b346134d0739301a2"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "adba977aa056338789a8d0e4e5d33933"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0aa380e973dda0410c7b0de6abdd67ab"
  },
  {
    "url": "about/index/index.html",
    "revision": "6473e70b1ed556f9df6b3d62402f0fdd"
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
    "url": "assets/js/51.1c9d63d9.js",
    "revision": "1f0770119b9f4bb1c28bafaa30ffcc3f"
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
    "url": "assets/js/app.a2326ec7.js",
    "revision": "a043a214c127187b94afcfb2c83590c7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "78318d29775a8f973d7b15346f001453"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "313fa6cda1e9b648eb57e3df18a23510"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "27d4c1226eeb7f622dd8919e729409ed"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c8e7da33e982453ab2f3b936daac741e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c9ea0d5dfa84a440e764569dbd84f21b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7e72f24765f331280a94e24ff5882416"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6a4dcc27e8e2633f1dab230045f4982e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "484667281570a10fdab5ff5e0fac5c0d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "a1fb39f2d7fb17f2d3d18b48e1caba90"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e45c767a9ef73fc42f29869556f64c91"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "39c4b938282efef15d5d60ef0f3d2bee"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d7c109926cce2eb991fa2b4765bbb2a8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "fd1a747863c075986646e3810afa9353"
  },
  {
    "url": "book/index.html",
    "revision": "e8cd30df5c044ec829f49d6fa3755ac2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a52c6d8f7b5dcb68493bd69c19f230e6"
  },
  {
    "url": "categories/index.html",
    "revision": "c54d601c42134be2a4ef887c60554afa"
  },
  {
    "url": "figma/index.html",
    "revision": "fec1f24deb7884b9e9b8434e4f0a0bc3"
  },
  {
    "url": "flutter/index.html",
    "revision": "c9e0e1499d10e3241f4cf3ba9328547d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2763381b4c59636508761562ab4cce68"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "02849a6e014bcd342b530541dbee14d6"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "357ab1c45a35b5cc70a5362440cea203"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ec1024e65ab1b4de6b2d10a8ade9f6aa"
  },
  {
    "url": "index.html",
    "revision": "3410d7a43df18d4bfc8438bac4fded61"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "739489112dd18077aa46b2d600016542"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "6a946e92c212e62bf7efbb0d8096e21e"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "04167306d230c467595e7d4fe15415b1"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "50e1fc3628814bf84e1fa2a8476af175"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "cf2e2b2aa5457d451af7b7db579132d4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a7377dd6a5d6ce54fed4fd9d79c2d775"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9789531e4ddda3f91bbf7b2a31b68ed8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "15fca6f3f2ee73aa2ba9d16b85399164"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "25b588cb3b087bc9153654c6dcd3abcb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5240224047a79906c41716a9cb28ce74"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e5c249592736f2f4238241ed642defac"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "3f4cfc0f4df230ec8bc8a7e862e50d76"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "044d54c7e71f66aea1d94569f9abfee3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f23a64ba9d02b3f15e40369fe4c0e963"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "779ded0b35a53269b2f87839a497e60c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "0ea24802719d768efe792aac999adbdb"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "146fbae29db81b0b9cc6362c31b2c2a6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "91aa66dd0a55d0e9f7bc01bb4a19c66d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8912d2dc03aee460c1f097e2fecd6c44"
  },
  {
    "url": "tag/index.html",
    "revision": "97f9da862fa6c29946ff116f7fb2d75b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a60a8218f21fa18204bc73a728faa17f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "aa7442336705be08e22d9040b57a558c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "710dc5d44e7e3155df787dd5fa32b22e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "21a583028f3d9da6124e9f3b1e663b83"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d3e4aef37feea337de998479f5d6a87a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "48130a0bf59bc21f05a6f941120190ae"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4e849bd90b0b8434795851f73463b1cd"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "8232ebf10758f0e2b7edd1f41abd8df0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a25b31d35ab5013eda4a120cf2315b6b"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "108cd82cc6a33f5593a9adec52acb3d1"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "df82bb6234bc05e2046e9e13393cfa8a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a7af58b9a44ccac502fb7b924675e860"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a8153bbac03be4cc674b1f204def2cfc"
  },
  {
    "url": "timeline/index.html",
    "revision": "174b1af8cec43d266898a47a8c9f1d07"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e943713d286478e09601b91ea9b90de9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d029ec3e31fe78f74fd631e512839ae6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f64c4ff6676bb536a2ae9f88e1a37501"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "51b5b97aafabc3c9e2d891598bc87f80"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "787bd41e030b47e1ba87f0d3dc352608"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3c8ca8ea831b195df22f5e77c9378e50"
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
