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
    "revision": "149c09c0f3f2377238b5fe6391b889fe"
  },
  {
    "url": "about/app/index.html",
    "revision": "48acab9d473dc20405cbf6868cecb022"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "486cc65cd5855e32fec03f273ccc67a0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "119c34f7d20f358f4c5cadd8f3625652"
  },
  {
    "url": "about/index/index.html",
    "revision": "330f48db3523b5992c88dd2dc9465a1d"
  },
  {
    "url": "assets/css/0.styles.7a61191e.css",
    "revision": "6cd718cab216eeb148e3657091d28f83"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f5bfbac9.js",
    "revision": "d25c35a529e824a10392e774e3912169"
  },
  {
    "url": "assets/js/10.870ce170.js",
    "revision": "bd7fc62b5926950d899372ea2c8843ad"
  },
  {
    "url": "assets/js/11.5c4dd5d4.js",
    "revision": "cada028dddf3f9175af6ef858c0553e8"
  },
  {
    "url": "assets/js/12.f0d65a5d.js",
    "revision": "7c80409a8ce42968bdf00553b892205a"
  },
  {
    "url": "assets/js/13.4abb434e.js",
    "revision": "74b67427937a197fcc2027b38489352a"
  },
  {
    "url": "assets/js/14.85298c30.js",
    "revision": "b26355e42018d76202456720f647ff86"
  },
  {
    "url": "assets/js/15.3cc4012c.js",
    "revision": "58104b95bd6449117bb5e872e0cb9220"
  },
  {
    "url": "assets/js/16.f8bf2c7b.js",
    "revision": "609dbf8c75747f59de3640cd378126ef"
  },
  {
    "url": "assets/js/17.9ad99f4d.js",
    "revision": "53103a5cd6feeebde25d6ee0f28f9d96"
  },
  {
    "url": "assets/js/18.b6809d17.js",
    "revision": "1ddbcec0d1342d66222877c287ecc9d2"
  },
  {
    "url": "assets/js/19.df38015a.js",
    "revision": "84805c490a871056b507439977552644"
  },
  {
    "url": "assets/js/20.127c8673.js",
    "revision": "3e42ba62ddbbc101a9763a5dd4825107"
  },
  {
    "url": "assets/js/21.4704d19f.js",
    "revision": "a9a775f071a685f7b716c44593f45173"
  },
  {
    "url": "assets/js/22.b8077a1b.js",
    "revision": "3a2506719d04228f15b9d7c7f1e3fc38"
  },
  {
    "url": "assets/js/23.13bfc22c.js",
    "revision": "0972cd4f5054c07c5676023f02c4b218"
  },
  {
    "url": "assets/js/24.2dd0f23c.js",
    "revision": "18e92fa984917daf10d78d63b876643b"
  },
  {
    "url": "assets/js/25.32d2368a.js",
    "revision": "9bfcbe3ef6d452824008d19e8257a55b"
  },
  {
    "url": "assets/js/26.052e2640.js",
    "revision": "e9214ab0d2f31a4e6aae3949d5ad8fdf"
  },
  {
    "url": "assets/js/27.73e8ff52.js",
    "revision": "66748e0b21d8d98d083c15e468fd6b1e"
  },
  {
    "url": "assets/js/28.032b1e9f.js",
    "revision": "b0187e99132c72a5afc05ca30674d438"
  },
  {
    "url": "assets/js/29.172fa8c6.js",
    "revision": "f225e5884380a64311ab9506a2abdad6"
  },
  {
    "url": "assets/js/3.424717bc.js",
    "revision": "39e05bf0ca1c1528793236dc7e9ecfde"
  },
  {
    "url": "assets/js/30.a20e3dc3.js",
    "revision": "614e2bd42102c5b8db529e88b74c25a2"
  },
  {
    "url": "assets/js/31.8d11b2a9.js",
    "revision": "ed139098853a537bec4c887633308fea"
  },
  {
    "url": "assets/js/32.dad2ab98.js",
    "revision": "8285a9c999310bc0191b19b01cb1777c"
  },
  {
    "url": "assets/js/33.ac018a44.js",
    "revision": "bdc80fb2ea3ec5e0a6128dfc8ebcc666"
  },
  {
    "url": "assets/js/34.662950d8.js",
    "revision": "d9ca96f86488945ef1702672efc45d6f"
  },
  {
    "url": "assets/js/35.e479ed17.js",
    "revision": "9a96f1987cd937c37ecc3bd95af07481"
  },
  {
    "url": "assets/js/36.039b8de3.js",
    "revision": "ecc978c0575f391597461e5f43ac6a32"
  },
  {
    "url": "assets/js/37.e7440fe9.js",
    "revision": "d5443ef8c45d06a708df4b39a0546fdf"
  },
  {
    "url": "assets/js/38.974e3ce7.js",
    "revision": "8802937e936a52a561dd80809016733e"
  },
  {
    "url": "assets/js/39.a8763697.js",
    "revision": "120ccf21d29aa8971c196ab13f8729f2"
  },
  {
    "url": "assets/js/4.bb802eb1.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.b31b5c03.js",
    "revision": "0b54efaef0ac47fd3c31c44a24db0544"
  },
  {
    "url": "assets/js/41.13c01d73.js",
    "revision": "47e5c0d18c2f572bc80cdfcd0beb9ab2"
  },
  {
    "url": "assets/js/42.c653f4eb.js",
    "revision": "6a3b93bdc2a1782180e2c5c52a06b938"
  },
  {
    "url": "assets/js/43.7e19e7f0.js",
    "revision": "e1000bb46616c31306bdcf6c7aa77aa5"
  },
  {
    "url": "assets/js/44.577f48a8.js",
    "revision": "9fadb59d34d10416ec738b62d7ab93c8"
  },
  {
    "url": "assets/js/45.fbe50fbb.js",
    "revision": "98bfdf1ff3d18afeccab982e770106c3"
  },
  {
    "url": "assets/js/46.2a6b2669.js",
    "revision": "188e145fad3bb8c6fa0df77c342fc8e6"
  },
  {
    "url": "assets/js/47.12839983.js",
    "revision": "36bff595ea5bdf92861c8fb40841c563"
  },
  {
    "url": "assets/js/48.86c0ed61.js",
    "revision": "758bf07f0a41e780082ae01676e6a7d1"
  },
  {
    "url": "assets/js/49.fa866396.js",
    "revision": "27b93e233f52286a71ff5bfba044bb8f"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.59bc185c.js",
    "revision": "4a0fcb53f50fdaf2b8938cbbaaed7293"
  },
  {
    "url": "assets/js/51.650611d0.js",
    "revision": "85e7061797ccec9e588fd477fd5e789f"
  },
  {
    "url": "assets/js/52.1ad128cf.js",
    "revision": "4573fef22ef67a4585ef559ddac3ac8e"
  },
  {
    "url": "assets/js/53.3c9b43eb.js",
    "revision": "051f7741c3908594860e7c7ac4c7221d"
  },
  {
    "url": "assets/js/54.622a3a97.js",
    "revision": "bf949f5b222543a0b0553b99273c5d5a"
  },
  {
    "url": "assets/js/55.2398e9f4.js",
    "revision": "c97b8370da14acc860b0c2a9934461a3"
  },
  {
    "url": "assets/js/56.af80061b.js",
    "revision": "4a3508fd618b1d1bdaf2cdf4068a20df"
  },
  {
    "url": "assets/js/57.f839d286.js",
    "revision": "731c39f9ab0ad72307fb6dc46c8ff84b"
  },
  {
    "url": "assets/js/58.2bb5dfe1.js",
    "revision": "97f4a35061ffa26e8e9f820d6b6c2b01"
  },
  {
    "url": "assets/js/59.312d5e19.js",
    "revision": "04c64334e8d93ed46cdc268d6c3a2937"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.ac41aba6.js",
    "revision": "0bb001cd5ac7dc16e50c98e37fb3e9d9"
  },
  {
    "url": "assets/js/61.ec188339.js",
    "revision": "4131a812c752ed6ef7e6d89bc5bb83cc"
  },
  {
    "url": "assets/js/62.9d42bdcc.js",
    "revision": "e9f728c31c84094654d0bff39be2e504"
  },
  {
    "url": "assets/js/63.98e36c2a.js",
    "revision": "3d0e9f0986d98f55942942a2e1519b7e"
  },
  {
    "url": "assets/js/64.ffee4e07.js",
    "revision": "3ce899a9d05b546e641bb0416510a17a"
  },
  {
    "url": "assets/js/65.b28a247c.js",
    "revision": "e28a3791340dbd824e3708acdfbdfed8"
  },
  {
    "url": "assets/js/66.60ecc842.js",
    "revision": "bdbfc08aa3a2848a8a3eb63b840fa0ae"
  },
  {
    "url": "assets/js/67.7dbb073a.js",
    "revision": "bc4f5fb5369cd64e8c0d6e8955cc044e"
  },
  {
    "url": "assets/js/68.155c0747.js",
    "revision": "0ab139c6b5065481befd6ec95c8b27e7"
  },
  {
    "url": "assets/js/69.6d52d045.js",
    "revision": "865e53168b13d434e419aca21325ad6c"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.74ea6ce5.js",
    "revision": "a56292d01a05f1347c42f5c56f9be9c4"
  },
  {
    "url": "assets/js/71.a9e124a5.js",
    "revision": "7e5ec45874a26c6a013a0a4781189a7a"
  },
  {
    "url": "assets/js/72.3f2f0add.js",
    "revision": "28f2844a3692cb7e6ba85b55caf96d88"
  },
  {
    "url": "assets/js/73.c11cf3c4.js",
    "revision": "d4bcda057063eb18563ba933915ea7e0"
  },
  {
    "url": "assets/js/74.d2453138.js",
    "revision": "526739ae6b1f4c4774834ab7b959598d"
  },
  {
    "url": "assets/js/75.9738d277.js",
    "revision": "8ea4ecdc1a06f34033dc7c301a36e241"
  },
  {
    "url": "assets/js/76.4c45bf15.js",
    "revision": "17d0b6a9d51c0dbce25d0b5cd5a0599a"
  },
  {
    "url": "assets/js/77.23c46ffd.js",
    "revision": "1df65493f8941ff2e0185f6b8b22bca0"
  },
  {
    "url": "assets/js/78.7dc75248.js",
    "revision": "c290666d01912fe26f8b1594ea5b16a2"
  },
  {
    "url": "assets/js/79.45850f83.js",
    "revision": "3d1daf8e20495481c7568124f41327d7"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/80.7768495a.js",
    "revision": "49a1363d73fa0c696b065ce7f6f6568c"
  },
  {
    "url": "assets/js/81.1287a831.js",
    "revision": "5bb04219a08eeb6d4e57c783eb845356"
  },
  {
    "url": "assets/js/9.28d2952b.js",
    "revision": "d200ba1858bd029562fadd3c45ab9025"
  },
  {
    "url": "assets/js/app.6638c20f.js",
    "revision": "382eb9c8fa0605e9c323845bc13a3098"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "71ebc9f4c3a2928889dd0f7db32cc5d1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "79115fbcbf568f280bca5c28d0809335"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5c030a46a7e3c8e59e2c66c080cc22df"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "9fad4097b6776c5fa6975880adfd60ff"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5f4122a9fb2f6a3f563b6380d4e5eee4"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1da8f1d2592973c75d7b6e2e18b67354"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9ef5a690abb7cebf1046d61577fcc301"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "9a9b8f9b260549c99e2645d5d7a79588"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1690e8f41effbf508dbb42aef0eab8ab"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "850cc8a908d675e63ba8b9d8a90abb62"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "dedf5463d778d4f459e5c4bb56b04054"
  },
  {
    "url": "basis/design/index.html",
    "revision": "f77e3eda99d4b67f06cc009e18f7bb96"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "881996b60c3c7cf62e904c55aca0860e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "82bc0f7e8b2f6ea8ae51f5c34b194b80"
  },
  {
    "url": "basis/os/index.html",
    "revision": "41c9af49446c9dcbe8e89ffd20512fd7"
  },
  {
    "url": "book/index.html",
    "revision": "555b5758da0439fa3c8456c6c1a101d4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5cd186807fdf2b65c5f23b13d6af32e4"
  },
  {
    "url": "categories/index.html",
    "revision": "5c89a3b66e8f8fae7f1e1d76f994a6a7"
  },
  {
    "url": "figma/index.html",
    "revision": "20939a6a59631d45ed16165c9d4dd919"
  },
  {
    "url": "flutter/index.html",
    "revision": "c0cb3cbd4ffd9f0bafc28bf1b238d1dd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "441a9b42f94d2b423e8312e04670b026"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2e6d2af3876c505a075aa622902ffba9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "494acc22f36d4471be026791472196ec"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "83376752ad9c3b40115f1a9b42e016ae"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4beb7c4ccb99c3fa00c6fa1afb8cd19f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "4754c2fb40e52dbbe4dbcaa149db7560"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "6126a2f151ea0d86e523856e34529f7e"
  },
  {
    "url": "index.html",
    "revision": "2fcd06998447ea16150b20035f49c2c6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "71520f7c88e86e802103a7ff70453ec4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0c77735897bc74fa81328dffaacc312f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fbcef8e6a601460965b27689dc28075a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "fdafc23daafa2e16aed8883ba5e64c3e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "64e22e8af5d51b43b4ab837b196d04c5"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "7044c0dbbf99d2032709b069fc0ade51"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "aa399a255231bc1960ba17e9e71649f3"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "5d5c5bea8cb0c528b168a566f61128b3"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "66ad44b4c59320d6dbacecf01d569752"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "8f09abde077b7926d56c27c21adaae19"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "d12cbcfeef63a9eac1b8bf70a9694ccc"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5f3f83515ad9e53e51e3297370607db0"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "5e51bf4f549c939701348251338a2955"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "251f1f033c82958de6288a7023e4a79b"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "b94aabb21ef7a8a66f1663955a512820"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1fcc83a7e3f012ec3cdd74849633ddf6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "602b41f0b6d8ecb1a03058f7fc6e3641"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0f6adc57124a8aca54ba4a799e766d03"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4fd1c83d5de435b1d5c3c19cbb73ea37"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "3a4c9200918d6a0edc61a1c987fbd80d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d02cd9e2994d8a63d5978070f6c5f3dd"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "af1b22a3468bd3e645c34dd7230ce6d4"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "caae5d1029adbf1e961a0ff29b660855"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c0338624c0f9b1a74ad2b803ef1c9d3b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "c1e8036309920706fd6bca1bb9f9836a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4f4655420386c772deea372bf32bc4d1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "492092d3412896721e5e27e3a3e68bcb"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1a66bc1987ed0afb1adeea28ca2a2a08"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "417e1a6b95b7c0c44e1c1838a0095719"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b57b49804b8de5f84f3de182ae8471f5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "cf57a5a4e7f9e118d5b0e2fea38d9831"
  },
  {
    "url": "tag/html/index.html",
    "revision": "15229eccdaddeba62fce210adf5ff6ce"
  },
  {
    "url": "tag/index.html",
    "revision": "a1336509ca5e63e973133ea045891109"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2230a014c44d096ee7b8617279f3bd8e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3d1af51ee998566e62a395fcde32e4f6"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7d7ff7091a5f3436a02fd4eac64b2ab5"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "07dde8101eaf41c6a0c49aa953d68e47"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "42a7ecc744273e9d95d254aa05abe3ea"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6784c246f1ac466df25fc34d5d204122"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5a59d57b69dedcac5b55c7e81b30d123"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "fdec07299602d039b86eddb9c7e306e0"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4437b16af7d1d758b537a29143070ea8"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "71a2c17161b216805089a27ba0a847eb"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ac250cab6cbd4ee55a6a02f901669fab"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0350de86466f42ea31d9879e0ddc076f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "9b787c41c717e97d76069f66392b5c98"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0740f72b9e476782bcddc1f7881e6607"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bf86382523beba528740c10fb92548aa"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f663d3d37485114ca74a48a9f684f761"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "528ae429baa5223f42557f5f1b65d372"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1013d690fe377a6830bed176d4b7c816"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "131459c3a8c1bd3b90b826e15386cb19"
  },
  {
    "url": "timeline/index.html",
    "revision": "b9cbe6ea74db8a4d1cd980350c5a88ab"
  },
  {
    "url": "tools/git/index.html",
    "revision": "25d6ad451ae2ac77ed63d50286f8e1bf"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3c224f4561880b85d0f15034a0ce8f88"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "eed5cccafbfff6cbbc1235fbc13d610f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ae7f42d221dbd1237e1d7f34162ba8c6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5f5457ba93ab55e2e903add4e4afded7"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "73998897998ee53ffa26df626e37ebda"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "74090bcc49c5c62e6e6c04ab95535c77"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "909cf843933634bd2cfa2060396cbb07"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "88f03c02267ac7f3f586b317671bf40b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d2461c37727fa0114cee31e178467685"
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
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
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
