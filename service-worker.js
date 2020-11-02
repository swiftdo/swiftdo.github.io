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
    "revision": "65e05b7cf4728cf400973ea9ed5628bf"
  },
  {
    "url": "about/app/index.html",
    "revision": "99858034986bbc7ad4ecd1be8b0f22ff"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e0f6f2808b9c83ef9275035f2a7d031a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9b65405f241370910a07bbf8fdbe10aa"
  },
  {
    "url": "about/index/index.html",
    "revision": "a387355bae4e038138ec556c30c0f76b"
  },
  {
    "url": "assets/css/0.styles.02431204.css",
    "revision": "02a21477cca6bdb33721f279084a1790"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f227fbe8.js",
    "revision": "aed5dcfcca1efac00ac39433b22c794d"
  },
  {
    "url": "assets/js/10.4ae0625d.js",
    "revision": "de0a66e60353160b65f8c632bb656432"
  },
  {
    "url": "assets/js/11.26bb3e0d.js",
    "revision": "c4ca3e063b638095141e1da0739f087c"
  },
  {
    "url": "assets/js/12.11a8a456.js",
    "revision": "866e8d98b4c50093ddaddea1807a0c2f"
  },
  {
    "url": "assets/js/13.2f24503e.js",
    "revision": "8a677c7c7e4401073d06eac3b5c49ab1"
  },
  {
    "url": "assets/js/14.dca8ac7d.js",
    "revision": "1e68cfd3bb61fbaf31ef75d9abf9e03b"
  },
  {
    "url": "assets/js/15.3eb8ac45.js",
    "revision": "9977d1aa50c64c2885ef292cba6a9d7c"
  },
  {
    "url": "assets/js/16.ffd364d0.js",
    "revision": "35595da9e1a846b1954ee277f70a3624"
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
    "url": "assets/js/25.07ff1d77.js",
    "revision": "9b44b551cb6276d13617897e15893889"
  },
  {
    "url": "assets/js/26.bca32032.js",
    "revision": "29bc23e0a5df2f7d9c8a43cd8b686a81"
  },
  {
    "url": "assets/js/27.e2eeefde.js",
    "revision": "a0fc9c089fa67ff8eab124c7bc85467c"
  },
  {
    "url": "assets/js/28.419b8645.js",
    "revision": "9e4c000ced9086645d94a1d56ed97c25"
  },
  {
    "url": "assets/js/29.ce751905.js",
    "revision": "96cba5ffcfacfe5e15cc384348292631"
  },
  {
    "url": "assets/js/3.efdd3efa.js",
    "revision": "afce79097afa51be3c456f96ff5706bb"
  },
  {
    "url": "assets/js/30.be2e87a7.js",
    "revision": "122bc5624b093e9360725450e7b3df15"
  },
  {
    "url": "assets/js/31.f0ff06bf.js",
    "revision": "a6f70245fc2a36731ba9b4d94d714644"
  },
  {
    "url": "assets/js/32.70596f0a.js",
    "revision": "d36a3f7857db2cabbc34dd724ef1a626"
  },
  {
    "url": "assets/js/33.0f40f33f.js",
    "revision": "b995d045fe659da24c2c389f74570981"
  },
  {
    "url": "assets/js/34.a4fbafa7.js",
    "revision": "d6437dda9adc06074761caf7bf35a167"
  },
  {
    "url": "assets/js/35.bf5e510c.js",
    "revision": "306210b7db07e94982d37efb82e34710"
  },
  {
    "url": "assets/js/36.29606cb5.js",
    "revision": "b2624929fda74b20b984241759a92fd7"
  },
  {
    "url": "assets/js/37.59fba592.js",
    "revision": "878db90b970d9360f7e57021e5cb2bb7"
  },
  {
    "url": "assets/js/38.e06a0f1b.js",
    "revision": "e19b33c24093fb7eaaaffbfcb231524a"
  },
  {
    "url": "assets/js/39.3272d624.js",
    "revision": "4909462303d6ea05d4a6f84b8d97e433"
  },
  {
    "url": "assets/js/4.12d0db8f.js",
    "revision": "f4acf16d6b281eb8347b062f7e02e4b9"
  },
  {
    "url": "assets/js/40.51834a68.js",
    "revision": "2be9029a05ec82498a9af11277acf700"
  },
  {
    "url": "assets/js/41.d9c1bb14.js",
    "revision": "973b2b0b9d62c4456ddee5c0b6e28fa9"
  },
  {
    "url": "assets/js/42.7d98992b.js",
    "revision": "7e6fbf6be28aef46a9a35ccc1a3fdbab"
  },
  {
    "url": "assets/js/43.a085132a.js",
    "revision": "24606c35ee1c6ec7d0bcac31428f5c73"
  },
  {
    "url": "assets/js/44.beaff288.js",
    "revision": "ee79492d508910caff0d674d3fed315b"
  },
  {
    "url": "assets/js/45.a32c3236.js",
    "revision": "33ea303ac0f2d592197bad7c2b0b04b5"
  },
  {
    "url": "assets/js/46.2dbbc0a7.js",
    "revision": "0994811581a57051abff67c54d13a78f"
  },
  {
    "url": "assets/js/47.328b14bb.js",
    "revision": "7e287fba408496fabb7a894f53bc28c8"
  },
  {
    "url": "assets/js/48.7edbfd40.js",
    "revision": "3284fc9cc97971241fd8c578174a40bb"
  },
  {
    "url": "assets/js/49.400534c1.js",
    "revision": "4262b16edb903c1dbe65e7376692b001"
  },
  {
    "url": "assets/js/5.f8ea9df0.js",
    "revision": "fc956de5f35d4013ef0d64a34dcff730"
  },
  {
    "url": "assets/js/50.d2d5580d.js",
    "revision": "54aecbd657e0431380d075361183b93b"
  },
  {
    "url": "assets/js/51.ecaa865c.js",
    "revision": "7b078f267a5ec51dc18d78d904a15b1c"
  },
  {
    "url": "assets/js/52.3e283551.js",
    "revision": "dc3adc17c4bac8f09dc2fdf6d0b59bdf"
  },
  {
    "url": "assets/js/53.504e6193.js",
    "revision": "fa9a13b4dd5ce87eb0b9058cf8bac3cb"
  },
  {
    "url": "assets/js/54.81123cba.js",
    "revision": "91ec109293853836859f432bdf6838f7"
  },
  {
    "url": "assets/js/55.25e715c9.js",
    "revision": "0e0d4fb62fecf41833207f14797f5ecd"
  },
  {
    "url": "assets/js/56.ba012f8d.js",
    "revision": "6ed9b66c21cdd5e7f9837de9bf70cb6b"
  },
  {
    "url": "assets/js/57.3e0d1125.js",
    "revision": "b0324a7ca22731ce1ffb0e3652e9996f"
  },
  {
    "url": "assets/js/58.2651775e.js",
    "revision": "f3bd81d7b2303590224513137e7adc4d"
  },
  {
    "url": "assets/js/59.a16c8396.js",
    "revision": "b05dae8b5b95b0b566404372f4181da9"
  },
  {
    "url": "assets/js/6.30d8466d.js",
    "revision": "995deaa39e844062b1da500f78bead08"
  },
  {
    "url": "assets/js/60.f23b574a.js",
    "revision": "3772bf9bbee0cc85eff8564e22a01662"
  },
  {
    "url": "assets/js/61.9d63d2ae.js",
    "revision": "5625ecc72d60a8afafc0f7636d601bd2"
  },
  {
    "url": "assets/js/62.8a4c95c0.js",
    "revision": "b3834ee72f55afd19d4b2c9ae2d5042c"
  },
  {
    "url": "assets/js/63.86245f77.js",
    "revision": "1fbafa8628248ae9e204ef7216dc2e19"
  },
  {
    "url": "assets/js/64.2b96afee.js",
    "revision": "0f1911f1b9ce666b411235e3247fd45f"
  },
  {
    "url": "assets/js/65.3b1f2536.js",
    "revision": "1ce5f31b5bf3ff140d32aadf44bb01ce"
  },
  {
    "url": "assets/js/66.7a772672.js",
    "revision": "850229e277bd426834b8e4684ca50d18"
  },
  {
    "url": "assets/js/67.e228a65d.js",
    "revision": "3a0158c2b4ecbd3cf6888bb96c37a0c6"
  },
  {
    "url": "assets/js/68.2f8b82d2.js",
    "revision": "403dbf80d3295f01711b1e80d4b95329"
  },
  {
    "url": "assets/js/69.cc13c663.js",
    "revision": "1be262fba27720b62bc592d93cd8a3d1"
  },
  {
    "url": "assets/js/7.b76b832e.js",
    "revision": "5c9ee7202d15a668073076b08e8d7b5e"
  },
  {
    "url": "assets/js/70.5e1b05d8.js",
    "revision": "2b5a49f95fb2a064c4e72ac63b829405"
  },
  {
    "url": "assets/js/71.c8a2f0e3.js",
    "revision": "5c34d46e823964d52a768ff818d0e9f9"
  },
  {
    "url": "assets/js/72.cd5c4b52.js",
    "revision": "f26dd08341c950da31a1ada3339f3f7c"
  },
  {
    "url": "assets/js/73.41aba8ce.js",
    "revision": "a64f8b2caa7cdfb0ba406e2894846c54"
  },
  {
    "url": "assets/js/74.0a2e00f4.js",
    "revision": "00fb2f1c692231b8e02e7e7a5f32a673"
  },
  {
    "url": "assets/js/8.e4a9c76f.js",
    "revision": "9e9768a8be0e0a2e3a7dbc8ba953318e"
  },
  {
    "url": "assets/js/9.1d7b4d42.js",
    "revision": "272ab95d583d18c73a09c4174267035e"
  },
  {
    "url": "assets/js/app.eb99b7c6.js",
    "revision": "e12366b591cc9926ee8a5b20597b52ab"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "72695cfe4227fdc1d29da87bc0bd1641"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c4c586fbd9f03ae91d65974f5b699f2e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "1d2703b890baec2218dc46d6f3342031"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b3095543f44d8511b432e784c008e1f2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e2c1abde8d0298288f7c3b91cda8d117"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "61ed31c88f1d1765151647ab45002de3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "fd243db24128312fafb8d5d62e69a620"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ba45a1f414d345039fe52e715f10745b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4efb5726584c2a7d01bd3514536697b9"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3e384783704953879e76afa03babe4fd"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "55e2661c3f511e32942b25465a2c88e6"
  },
  {
    "url": "basis/design/index.html",
    "revision": "d914ee7153cf150242f8dfacbc214545"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "792c6832a7ec03e3c1df972f2ecdb21d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "206a8e11b2e9136a3b318998abf0b117"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0c5a315ca7a915f1155562751f21ae9d"
  },
  {
    "url": "book/index.html",
    "revision": "b17a0b5cc3b5792faac9939f08a915e7"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f9e44b56668c2e305ed6530659d6975a"
  },
  {
    "url": "categories/index.html",
    "revision": "0fb42c52e346fd277395db077d2ea70c"
  },
  {
    "url": "figma/index.html",
    "revision": "a2bf5a6c8c919c1ec5e699093ab7e478"
  },
  {
    "url": "flutter/index.html",
    "revision": "4562ab2d6ac668bff32123690069ed39"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c34aaaedf80018e65d6e766719f3bab2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "cfa39be8ad70e9b6982f595217b15903"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "04a70263bbf4fcfa60fcf091937e189e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "a0aed7797eb3216d6768e2ece6d134ca"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b427cd5e6a69d9c9156a20c019c47336"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "69b7d74705cdcded11415e50ab8bb6f4"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d42942a1193b57a71c34d31469860458"
  },
  {
    "url": "index.html",
    "revision": "821d973f60fd23f89c85aaf05e5cf545"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "2aa1f8eaaddd38e0f64fd6c8cd038bd8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "98b7f48dfb60e6affe225c63468d02b2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "328d2ef735cdcdefad68910fcb95f3ee"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "ad915bbed3dc0335808421963b8edfb5"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "454ae905f4199dda6899565ca0e9cef5"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "959b698df154933a11080ec1322562da"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "da940c119092bcd897de9299e5e0871f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "97a977264e38fb80537602f16740f24b"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "0ecda4094bbb9e9610add36a9a148d9a"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "25d1422b692e38a28a26c8bdf211ca0d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "cd18a9332ffa2b9b7682c4fc31d4bfc6"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "13b51c2367e034137bca73c412b1f9ee"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "812d48d342177c3fc6f743b74df3eb92"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "3458f836a2aaed89c4b87f3732a8891d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9f6679ba9d6f5ebd1f4b29200ec97d73"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "27fe13bbdd150f4b67deaa5482478f5a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1abe28838f51e2b6a1804d390879e0db"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d51f9b915f2870f252036642777787e0"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f11ed251345d806392c1e5f501ac6c50"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0a2f37396bba5ca3dfc8591dde18199b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e009bf522f68f1ee690fb68551bfabfd"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "989e4f4c38e10abe9bc451120885dade"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "67dbdf8ec677f957aeddb520e2d18532"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "872fba6b1b41b12852e7aa583b9ea8f4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c10c9249a5f6e5d962a16fa260f91319"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b6abb97213e7872888791759ce375e47"
  },
  {
    "url": "tag/html/index.html",
    "revision": "56ddd7428dbc235747dfd4014d890f9a"
  },
  {
    "url": "tag/index.html",
    "revision": "c79e712603f826118494c79b6a2a5efa"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "be37cc198c0e555e15c9fc08192478bc"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "300b6717e8a26b8ed41fbc5b8ee076ad"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ec8e1d0ab7d97447c25b40eeab722cb8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e4c838d1fe1cfd54851da9ad47ea1491"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cddf34f53d64a71d4549709bed72cdd4"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "4c7dae691beb47a11201b1a962b483a7"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "cb2846eebab4901d7a5c8b96fb23efa5"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5fd83ec0de27e6092f0191d2eb483fc7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "230969d7a8f1fbc540c58c8c222c18be"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "90be4ee181919513e6ec96210a064acb"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1661b1cfb5d90fe4578c62006acdcb0b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "81c93572bf87fb9e7a4aa0e0f216a5cb"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "63d1298b97ba805a31e26472661f6bc9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "63fe4b49b0bc443b6c0b6f5426666e00"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fa60647b8fd70e9f7611b4d1c1473f6b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7c7f340821b0e8d01902980c5dff2446"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "032c450158cbe519cfecbba0e946b956"
  },
  {
    "url": "timeline/index.html",
    "revision": "d29d69cb4deb0c020ef56b3cbfc03ca2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "dd0c5817f38f37e89027dd3b4d311585"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d4cfeff434c1e093a326f733ba5a01f8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4195d342717cbfda9df71102614a604b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4e8a35c2cb50fd706dc7b02ff80894e8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "43ef659af5bcdb20c3e65aaa4ed93ee5"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4997cee7454b0e8bf6ed41efee9e0fa8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "537d57cf381c5033bdac7286d6828931"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e147e49fb7dcf92c153288ebf964beab"
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
