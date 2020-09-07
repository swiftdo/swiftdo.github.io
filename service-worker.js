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
    "revision": "36a85306706364f4684c68dda1bc4bf2"
  },
  {
    "url": "about/app/index.html",
    "revision": "9076a4efae93221dc754b2c6593cb2c0"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4cc92b74e77723704e65943b5e3f596e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bf190679d274db9ace5a9c790560bc87"
  },
  {
    "url": "about/index/index.html",
    "revision": "9277d6eeb4ac825175a67e41bde60c4e"
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
    "url": "assets/js/51.1988d63a.js",
    "revision": "530ecdfd90b260d3da8740b838bb3914"
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
    "url": "assets/js/app.bb336edb.js",
    "revision": "4f66145f454e326a87a5089695477e2d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b92dff8778235e47d2c485b9e24c0f76"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d40c61a77a0006cdbfdf297e7e189f68"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e70e543d239f7bc8ee90ab551229468b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "148292796551f940d0ceb20886896864"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e30cee75706b11f87f416d062b05724a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e7723c0c78695632516898322ebb4530"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9677b988bfacee67c3ed46e570034648"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7ea7d7c15f45c9a7ddc31c498de7ee85"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "056160546b13c18ab4badef2d5f4da80"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "5e29d5c718560049fe7fc12bd7b9e9b1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "996175ddcab96e1fffc2b88e690aa0e5"
  },
  {
    "url": "basis/index/index.html",
    "revision": "30ec1f958f4ac69171ad05b4dd12e30f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "fc7b18a23781edb25673d2f064c128c0"
  },
  {
    "url": "book/index.html",
    "revision": "ee40d4e2b52f5a456413a2f726b7a712"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7b8ba3ed3347f0066d5d0805983b45cd"
  },
  {
    "url": "categories/index.html",
    "revision": "2556fd2115b567990cbded627b9ca526"
  },
  {
    "url": "figma/index.html",
    "revision": "4e5a05844417a0afcbb436877f027b41"
  },
  {
    "url": "flutter/index.html",
    "revision": "486639df298b8eef1e8fbb20cbfe486b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "25adbc335fbf972286713a8b4b7fd41d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "113fd0c4e9cab624506fb0bbf3b08b98"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "12452bfedd73de706ea3b6778c99ddaa"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "df18c14229f71e920360fc6d8b09903f"
  },
  {
    "url": "index.html",
    "revision": "49cf307e098bdd8f4ff70495b195a9fc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "03383f2a189c856e64ab659714d237c4"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "155b0facb3779b905ad22d9f2984dab6"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "83db7885165980d2e806f5406efca1a4"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "885bf7932aa57f4cfa60991ee19ffebf"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "c6a1e9b3d498c341991cac793e879c21"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "32f5a52f016b72fbc15c19bef911d797"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c3e7fa8cc1c27863a8de39fcce4763fb"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "832a7449827471f00c94c307c3ed3885"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "baf270d57a1e5fa5d80690d2982c6c4f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "13a4e57009e12fd1e697daa530c47403"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "806c814e50e16f655f2cdcb03a6ad156"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "cdf0a4ea4ef91e3e2c219c0fc74a7d90"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d6a19441ed57ae9c441898c5c067b8df"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7206939c3fcbfeeffed7b97b645b8847"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "88181c74ef6928214ef686c1aa0ed4f6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "501b18e2938526f2bedbf7371f5d9d9e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f146960fb736d793c49f0d51b9369dda"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e4cd5f26266c325c26eb0880270a8549"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b9dd3b0189b9a705e07b6288f06211e6"
  },
  {
    "url": "tag/index.html",
    "revision": "64781ea993d3ffdedaebb7305cc34608"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "83781d04d952f7cdcd19af3c68472543"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a508367b859bfa0e9f4b4b6bad4ee5ad"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6a91ff1f082904e4b5b4faeb8a1106b1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "82e0eaadc96f8e9cbb76b7c33598b42e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a78cb2f106e63254190b6f5831f389e2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3f3b89e74e810c0f6ea6a7c50c034b59"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a759488faa6e29171564b182d4552495"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b809fa07ef178a0d8707a1e328b1dcfe"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d9719026b610239a57f84d648ba49b66"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f87a35956052430d7af1623bf12a2d29"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "cdd964113fe308d6d38d3098d2643db3"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3a660c4d81717c394ec35eb9b5ef0e22"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3cd570267f220fcb97cac0f5666d6cd0"
  },
  {
    "url": "timeline/index.html",
    "revision": "afb9d822a3ca552793c2251a8547a0a7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0d4e91f3d09db601393ce2ba82d27e72"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "234686268e7adba2ff086c86bedf0ba0"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3d60eae0f30638e0be95a4ddeac04439"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ddf96911daaf5952ace8bf38fc679554"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "3215027de71dc6a90504526ce1bf24bd"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7ffd8a2d069b677584e9be4fa5f062bc"
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
