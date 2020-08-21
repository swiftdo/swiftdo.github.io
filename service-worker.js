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
    "revision": "1950a6f4dde96290828e1a27636d51a6"
  },
  {
    "url": "about/app/index.html",
    "revision": "a17ed786d2da3b4dcf49ba8e609355c3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f46d24a0abce1e6b4d76c43d13700839"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f40619a3e0dbe643bb23c510ff3f22ba"
  },
  {
    "url": "about/index/index.html",
    "revision": "81a464b2e81e65498ce04aa6af63e810"
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
    "url": "assets/js/16.7561a544.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.9e4dfe30.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.3394e155.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.88ec24fa.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.7368d240.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.2f76a0bf.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.07e8de98.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.9708f287.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.07d134a3.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.bbfb1273.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
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
    "url": "assets/js/30.985c37e3.js",
    "revision": "0d6dda9063b42acfe18f1c1881eaab00"
  },
  {
    "url": "assets/js/31.f523361a.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.ad5fc54b.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.acfe65e9.js",
    "revision": "2abecfdf25d433d0c445cc3cf763fa0d"
  },
  {
    "url": "assets/js/34.14b5e4d3.js",
    "revision": "b833c762c185e4bd60e225545c0bfe0e"
  },
  {
    "url": "assets/js/35.272c3aad.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.23a1f974.js",
    "revision": "c6c9d09aef830f67ed3698df802ffd30"
  },
  {
    "url": "assets/js/37.7d5fb6f6.js",
    "revision": "9f4f2c0b15d1c71d1207f91e62ccad07"
  },
  {
    "url": "assets/js/38.e8865eae.js",
    "revision": "c5a3ea851f0fcdead27ee86d73828814"
  },
  {
    "url": "assets/js/39.8ee50e9d.js",
    "revision": "ccab2e0feea8e45d80b19387a189be02"
  },
  {
    "url": "assets/js/4.a114e465.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.0ef79ea7.js",
    "revision": "7495651c213baa4c7a87dffd2988d254"
  },
  {
    "url": "assets/js/41.b44fb778.js",
    "revision": "a84267565c14b18768b02e51625dab4c"
  },
  {
    "url": "assets/js/42.4d6b7cfb.js",
    "revision": "1e34768bf4c35d9501f259717334ae18"
  },
  {
    "url": "assets/js/43.1b4423fe.js",
    "revision": "c37c9795470075180a06cf99eb590746"
  },
  {
    "url": "assets/js/44.2a2bbcd1.js",
    "revision": "91c58b4aab25e9c4be839b8a0e0ae9db"
  },
  {
    "url": "assets/js/45.500c72ff.js",
    "revision": "dc65a0a289a178eee3f04dfa41c8be7d"
  },
  {
    "url": "assets/js/46.0ff16f2f.js",
    "revision": "a6f0e379753b186569a7eb7e4cb183dd"
  },
  {
    "url": "assets/js/47.673882e8.js",
    "revision": "5cf1caed8b40874f6d74f7777cc15fc1"
  },
  {
    "url": "assets/js/48.a330c5d7.js",
    "revision": "cc19354a8bfea554d0a9f6b838186cc4"
  },
  {
    "url": "assets/js/49.b139e408.js",
    "revision": "95df315ca205fe07470007d11353e2c0"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.8e91281b.js",
    "revision": "2208e050eb6f9e39f46a56f4bdb46c6f"
  },
  {
    "url": "assets/js/51.72e89382.js",
    "revision": "cc1971201d479abdbc99a097e9810eeb"
  },
  {
    "url": "assets/js/52.8147e06a.js",
    "revision": "10a9ec2e75ac3489bc2581a4f1db9a49"
  },
  {
    "url": "assets/js/53.880a8074.js",
    "revision": "9e8bf4e1f7308469bbad55475d85bb77"
  },
  {
    "url": "assets/js/54.d05ac961.js",
    "revision": "07c84a69c625e0a8ffbc54b67f0d6fca"
  },
  {
    "url": "assets/js/55.a467cbc1.js",
    "revision": "9ca1e88cacf90a494162c01947c97026"
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
    "url": "assets/js/9.2e547b70.js",
    "revision": "8a9bb253e07dcc94d5e73d64c6ea8113"
  },
  {
    "url": "assets/js/app.e83d78d5.js",
    "revision": "30618cc099f0a0eb6794b5a5802c9a66"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b4697f630c013a70bea4b8af4b39f653"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f065b4d55806888015d5ef6c004a5647"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "734fb74dbf0b7cafc1fb5ca4b603febb"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5a7b22e2ac6e889efda1da3ef88f5c08"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "91199a155ce7252bc386183447018a81"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9f6c0f77789416ef365006b79d71d055"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5524389f16bf29016c5887346d642052"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b4cc5d0c9a1062db437642e5c0ffa62a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "10b00b34d8c7747bf38ffcb0e015b7d5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "914c723af129d5172ea9e9e190bd6a4d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "76a0a999948013f4b400957df14347d6"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2e95ee2cd5304a7c65b6bc1229ed4a1c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5730a1cb8e1413869c8dd00748d1efa4"
  },
  {
    "url": "book/index.html",
    "revision": "c39852ac6dd7d4e7598f1973e6c4604c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "73d82076d316f57f4e356b900ae9d852"
  },
  {
    "url": "categories/index.html",
    "revision": "3659da51d14642ae79cfa398df44032e"
  },
  {
    "url": "figma/index.html",
    "revision": "9ad64e776288b092abb767fab12e3222"
  },
  {
    "url": "flutter/index.html",
    "revision": "c42dcfc0b75b976fc561c9de201c03c4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "93c5925173af2c30f8eaaf151c2029a8"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "abb09a472fdfb30ab2b7e7015219c2d0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "177b5a6fe1a524df95eb80b8cd83d554"
  },
  {
    "url": "index.html",
    "revision": "ed217674e676da650da4a32ff6a712d6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e62d54de3bd2752705c62d88e0d28b8e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "a4f937c0a1538ec40c335985835e4ee9"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7b1434fae33764273d47a6b3cb80e72d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a20e09ab72dc00337dbef1fe36890dcb"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "6608c1d61c4229a89f783e920d68d186"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5c661ef813d368e2580fccdd71352a43"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "fe01127bf2b6322d630c76fa73444b2a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "dd7fa8de0a6e8faa670c539cbe40a72c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b122ab98e148051b72c816bd61188c1e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "902ad4bb44e40521910e33641c147932"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "aeb7e58e34dfd2e0295b2362bf5e38c5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "28d5650e73a340a311176f93828868a1"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "387167ca0a20563e2519edd75bbeab6c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1b3685c066ad60bd6cf9458e20151eb2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6f35e4027d3f5339d2d75d7cac0de4fb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e4dbe15dd9b1287ce4934e4e7d976690"
  },
  {
    "url": "tag/index.html",
    "revision": "717b1135b620dde7e3ea18a7727b771f"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ce85182f606d5d728bafb6bccfc5fb69"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1dea6e33b21857db56716cfa577d985f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8a0eaff69f6ca53fd1340c34976d6c70"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "28d0a2e907059f23dc28cf2a513798c1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a5b9cf510a2af4fc9e7cdb7638431fe6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5e044178114d6e763b212581474735c0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "328d3572e54eb948c11598b9283c748c"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "defc495ca78056b8b76bfa6bcf98be1c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f2a2ea6564936592c33ef9a733dfcbe8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b67bfb4b8468cb876482998710a5f94c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "87e14e08bb7d0c3350327757b36ec4d2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1f3130c8965183d66fdcc1ae1ab3fcd0"
  },
  {
    "url": "timeline/index.html",
    "revision": "87e4bc66098c45c5d6e21749d80aaf77"
  },
  {
    "url": "tools/git/index.html",
    "revision": "76b2b05f5e6188ac109607427f95ccf3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2e32f98516893b0f8aae973a4970f193"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "55267e6693fcfa5d5b6442a78e44ec1c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7006b5d44b1fcce79643c1d431abbe38"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "06d5d8898e4068aee3ca773cf90fb3c8"
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
