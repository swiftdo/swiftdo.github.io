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
    "revision": "0718b6cde0965b4369a0e147d3e85aac"
  },
  {
    "url": "about/app/index.html",
    "revision": "c1f5822429c9dd6941bb287de9657156"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "fb5622e26a8420ac929c5d18a24d1bf5"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7afa7c666da478b39633a4ec33bb7848"
  },
  {
    "url": "about/index/index.html",
    "revision": "98f2ba9bc7277a760f1a4ccb1eecbcbf"
  },
  {
    "url": "ai/index.html",
    "revision": "0a707dff7c7e14846a82fcb13447681f"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "6c10a69314f9a8ff6a469e3bc506ae90"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.429f6100.js",
    "revision": "5079abc5c70e6401e011c2b0cd42e6b2"
  },
  {
    "url": "assets/js/16.de4c7be5.js",
    "revision": "91dfe2e910e1f674302d4876d7a1ae92"
  },
  {
    "url": "assets/js/17.0ddb612b.js",
    "revision": "d005c426a00d40956ca85e652bb17c68"
  },
  {
    "url": "assets/js/18.77bbacd8.js",
    "revision": "e799887b365b13b69b761f8a100d34d3"
  },
  {
    "url": "assets/js/19.9e579819.js",
    "revision": "d7e93989eb9cb8e0d42a115b9fddeb3e"
  },
  {
    "url": "assets/js/20.5ab45d12.js",
    "revision": "952a337862377b210b286e9d1d763026"
  },
  {
    "url": "assets/js/21.feed0bc0.js",
    "revision": "53aa1b695420ac448047037df4d0da89"
  },
  {
    "url": "assets/js/22.e652841e.js",
    "revision": "1598a1fe8fbd8495fcda0045859ca648"
  },
  {
    "url": "assets/js/23.ae326ac6.js",
    "revision": "7ed82f1b9810338287d73781e3ab0b08"
  },
  {
    "url": "assets/js/24.e0203ae5.js",
    "revision": "3187102e042dafa39816382f9f165be3"
  },
  {
    "url": "assets/js/25.457686cc.js",
    "revision": "79b476642e86d0f7aec070d0ef5949ec"
  },
  {
    "url": "assets/js/26.4b920c1a.js",
    "revision": "ec4d75a4732a721677fa92bd62169bf4"
  },
  {
    "url": "assets/js/27.64b91fb0.js",
    "revision": "7d583b00bf3347b8f8b5ce957d3e24ab"
  },
  {
    "url": "assets/js/28.06dc66be.js",
    "revision": "2ca610c92b76ac76e12274ee4cdbff74"
  },
  {
    "url": "assets/js/29.390db75e.js",
    "revision": "70ead5cdd356bb61d3af6a67d94d1e4e"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.bee18969.js",
    "revision": "cb3f9cfb5345ae194496ce98ac6e53c8"
  },
  {
    "url": "assets/js/31.3b4b2d51.js",
    "revision": "1dbcc732a7a3c026aa0c1661ea3fdd6f"
  },
  {
    "url": "assets/js/32.9e0642d6.js",
    "revision": "e4b4583f4d73476ebc5f71c335a76635"
  },
  {
    "url": "assets/js/33.d989b6d5.js",
    "revision": "2e2c4c22610583b1e1cc200827ea4c07"
  },
  {
    "url": "assets/js/34.cdcda296.js",
    "revision": "eecce383a8bc001a74c46d24361afeed"
  },
  {
    "url": "assets/js/35.a008f97d.js",
    "revision": "3328792ea738bae555848149bf25f1c2"
  },
  {
    "url": "assets/js/36.57604a30.js",
    "revision": "3aecddcd2cf64efb8e7f5ec853c372f9"
  },
  {
    "url": "assets/js/37.f0b34a25.js",
    "revision": "da82b5facab3f861480411ea46974331"
  },
  {
    "url": "assets/js/38.ce4e379f.js",
    "revision": "0696b40aab2c1f4cf0c26b4339abbc6b"
  },
  {
    "url": "assets/js/39.f1cc87c6.js",
    "revision": "bba63b134a11ea885dbb267e939250b8"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.40f86c16.js",
    "revision": "fa7ba1ffae8803060878c58b9a38ba28"
  },
  {
    "url": "assets/js/41.023f1973.js",
    "revision": "40153c122a931e092267afcf349c1d52"
  },
  {
    "url": "assets/js/42.5fd92d24.js",
    "revision": "7fb539efdb233ddc59ec5a377127801e"
  },
  {
    "url": "assets/js/43.a279e791.js",
    "revision": "45de2a263b6407dca51047c41af1499c"
  },
  {
    "url": "assets/js/44.9115e4fe.js",
    "revision": "066c716bb2c813c07c077a83f88b947f"
  },
  {
    "url": "assets/js/45.25d7c6c5.js",
    "revision": "8e38b6ff14487d4bd035bd78c3799d31"
  },
  {
    "url": "assets/js/46.04ede97e.js",
    "revision": "93c575778279f2db24006a937eb9ce99"
  },
  {
    "url": "assets/js/47.197458d9.js",
    "revision": "d7d98f793f90f34de09d0f66f7c5a171"
  },
  {
    "url": "assets/js/48.cff92216.js",
    "revision": "cc0c02d7e137dcd33ea8998384eb49d8"
  },
  {
    "url": "assets/js/49.87f44fc2.js",
    "revision": "712c7e10f77de352680e0a9232d5302c"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.96b0e1af.js",
    "revision": "de5113140ebbdd6393455d511ee6ca71"
  },
  {
    "url": "assets/js/51.38b48da3.js",
    "revision": "04543302e0e80d5bef8820e1f4c77461"
  },
  {
    "url": "assets/js/52.86b015e5.js",
    "revision": "d7c757e7bf52250f636eb1239b5248f7"
  },
  {
    "url": "assets/js/53.465c74e0.js",
    "revision": "0e156c9792e129efb5a9d759656c5d61"
  },
  {
    "url": "assets/js/54.34caddaa.js",
    "revision": "fb233e3237e220c940c5bca06eefed32"
  },
  {
    "url": "assets/js/55.460de266.js",
    "revision": "4d7f29fc6d4896f4d7d1cc84077a1978"
  },
  {
    "url": "assets/js/56.df6d1da9.js",
    "revision": "65b8a80099fe974ca6898f8aad17a61c"
  },
  {
    "url": "assets/js/57.f0827fd0.js",
    "revision": "5975f05d11ab3d6e9522c5c04604145e"
  },
  {
    "url": "assets/js/58.937add42.js",
    "revision": "07af86bda0cdc8f9cfec6fd8969b2413"
  },
  {
    "url": "assets/js/59.0235b962.js",
    "revision": "85f609194d1d70515aec35453a143d3f"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.5217e02f.js",
    "revision": "05401f767bfa3b7e8d4d0b76c9c0abe1"
  },
  {
    "url": "assets/js/61.e51ba456.js",
    "revision": "eb8f731a0ef5731e229e242697d169d7"
  },
  {
    "url": "assets/js/62.1986268a.js",
    "revision": "6f4cfc6b810d39044f001390f9703ad8"
  },
  {
    "url": "assets/js/63.2ff950e9.js",
    "revision": "a4bcf5ae92b87e149fc4b34f78490bf0"
  },
  {
    "url": "assets/js/64.5150360d.js",
    "revision": "5b3977c2ebc26efa929a33cc752990ec"
  },
  {
    "url": "assets/js/65.4a2f87d9.js",
    "revision": "d98a516ea9266c0c00e5a352b99f6057"
  },
  {
    "url": "assets/js/66.1c32b50c.js",
    "revision": "7ab4e58a6281411cfc446691f454a7f6"
  },
  {
    "url": "assets/js/67.bdfda77c.js",
    "revision": "ab039f1f5a5c80661241e6ff03b442d3"
  },
  {
    "url": "assets/js/68.b132fde8.js",
    "revision": "7c1010c8f06c02a02295c96e1e31af78"
  },
  {
    "url": "assets/js/69.68939c03.js",
    "revision": "5e03fd0867ebda7a636093ff25c1c2f9"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.07ec8a64.js",
    "revision": "d6daed817cd7b828d0295db894698d24"
  },
  {
    "url": "assets/js/71.7c67ab8d.js",
    "revision": "c156e7e12add4fa9082aee8245a8d28e"
  },
  {
    "url": "assets/js/72.8c09d089.js",
    "revision": "eeae93ff73fe2ea40c393a0b818736a5"
  },
  {
    "url": "assets/js/73.02b3082a.js",
    "revision": "e0101051511fada5e8f5b2c943b9975c"
  },
  {
    "url": "assets/js/74.1151875e.js",
    "revision": "f8c63decf5e634606d178fb1f2c516ef"
  },
  {
    "url": "assets/js/75.323cbcc0.js",
    "revision": "a794b3109512ca6b18100823538bd0e5"
  },
  {
    "url": "assets/js/76.16702c03.js",
    "revision": "b3ccadd053b03dab08d1137acf4ac054"
  },
  {
    "url": "assets/js/77.f9b41cb7.js",
    "revision": "916fa2b347194e54f9652ab61a4eb937"
  },
  {
    "url": "assets/js/78.9d042422.js",
    "revision": "6ce550c97b26f7ec34f171688242b59e"
  },
  {
    "url": "assets/js/79.4084f28b.js",
    "revision": "f5ecc054f549a59eb7e5a4c640cb6679"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.15d83935.js",
    "revision": "ac9edd5c82aeb68f2c30763b7555fc6f"
  },
  {
    "url": "assets/js/81.2157ecc1.js",
    "revision": "710ff10a6f9a8b92dc47e2150e9dab64"
  },
  {
    "url": "assets/js/82.caa6862a.js",
    "revision": "e3b8358b9b7cbb8dd9a5600f4d646122"
  },
  {
    "url": "assets/js/83.96ec15df.js",
    "revision": "ed578cc5d526eeb453390e69ecb05112"
  },
  {
    "url": "assets/js/84.db9268fb.js",
    "revision": "3ce254b1e83722bfa0e43f0fea2301c0"
  },
  {
    "url": "assets/js/85.b9a89bba.js",
    "revision": "6ab7fc2c16f37d245346fd1dd97a218c"
  },
  {
    "url": "assets/js/86.932a1d7e.js",
    "revision": "80ac8754a7ae7a2228eae4ac220ab747"
  },
  {
    "url": "assets/js/87.68025be7.js",
    "revision": "eb0d1d7a5a9654bc2ac284764a37ad26"
  },
  {
    "url": "assets/js/88.36ce45d8.js",
    "revision": "6fdf0f901f9690ee52fc001e0a4ad1ed"
  },
  {
    "url": "assets/js/89.982279f1.js",
    "revision": "4aeeeb8a9d03983db2fb4642c5a6e449"
  },
  {
    "url": "assets/js/9.c9a951a5.js",
    "revision": "daac8c6034697c3284b52b14d09a4c7a"
  },
  {
    "url": "assets/js/90.515746a7.js",
    "revision": "e3c0b6a93829b2992d5470f20efc7245"
  },
  {
    "url": "assets/js/91.1b4a8fd0.js",
    "revision": "2392bc883c094806c1375c43ed0b5207"
  },
  {
    "url": "assets/js/92.82b5f14e.js",
    "revision": "1b5ac296bb2ba6e43d65eec366e5ab1d"
  },
  {
    "url": "assets/js/93.cf03bde9.js",
    "revision": "5601d11f26e674a5d9704cdbe345c97e"
  },
  {
    "url": "assets/js/app.91b80025.js",
    "revision": "a6b49eb6451c0425d9995e031ab35766"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "8ecda64249da3451dfbdf6afcd632c8e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6d6dd11fa03edf39a8b1ee8997c0a639"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "6605dea288291ade2fa4404a0ab965e8"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c213e376e747a1d3c775815fe6a28917"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b2209c709e0cf9cdf442f2c06b62de5e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "106fb1467bf76c81eb346030fee0ce5f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "31c553f2a6f631756ce4fefb9e2d7238"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "62310a58751448abce87ebadf69427d5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "be591cba577307227e203ed8e4355b0b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e47ed0ace1a0d628dcfd5ecf4fb06ecb"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "eb15ec0ee0c88ac65c180e522e821dee"
  },
  {
    "url": "basis/design/index.html",
    "revision": "92a342345d48b67edb9cdc023e5e4556"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "4cf2f466178dde79fc30e55aa2744b62"
  },
  {
    "url": "basis/index/index.html",
    "revision": "69f0e5d92751cba717f6fe286b38db09"
  },
  {
    "url": "basis/os/index.html",
    "revision": "772d2aed817ca67e649c1d6ae65c79a9"
  },
  {
    "url": "book/index.html",
    "revision": "23a51bb768b6c8eb04767c9d832b3cdc"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4e76b2ada79aecb0f0cb5720b8851bf7"
  },
  {
    "url": "categories/index.html",
    "revision": "9e1049f4df964c2a077c2ef6b1d11aa0"
  },
  {
    "url": "figma/index.html",
    "revision": "e94b2c93e944843f15b57add67ffcd5b"
  },
  {
    "url": "flutter/index.html",
    "revision": "a25e49bdb6ff07491583f1508ca6675f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "90820ca2560813d24622c2b868b6f46f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "7a2e9bf8f43d86b99f74edcc80a1f088"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e25c0c38778231c91a8c4baab51643f1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "eec512c78516689f27c94e9dd3bb07cd"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2ea72dc1ef06f6bb3f107b7987390be5"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "19f0bab52fe55b6f617d13bb34e6a0ed"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1a34b9aceca5edc28e153fe738cab1a7"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d2c2e4397b4ad22222440345b7698556"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "8077b2e66f18f9d606b3178ff4b674a4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ab17ff1044252930b331b29e559ef17c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c3982bd67c6ec3af50a520a1d1a3eaa4"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "aa1082015be8f307dabc7742980b1e4e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "11abce27d48a4b29aa95fe95bfc1700f"
  },
  {
    "url": "index.html",
    "revision": "fbd59689b25df5d39e3a00eb0d9c71d4"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "15a589a7ff0ecceda33307b14ca8dbaf"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "70aed50ae03de21b81984b9ba250a2a5"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "680b2135298e1f2739f080fd146335e3"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c1cf7cba952a51ba6119b3e907bb7598"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f7a1761059e1d253eb2ef1ef2d845b22"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "ab4c2244f844ce0486c0df13fbc05807"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "29324c6013b9b61128883cb99edd4ebe"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "92040bc3c79424b614c8ec74ca8ca804"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "879b107021d2c385c1548fae56ca680c"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "09fca760811a918ca658b05125159887"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "824dfc9ded0c960672e809e0dabf8e48"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "9eb76245cd370133d251ef87ab9b2d74"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c5f37fc1a9ce96504dcbc17d1157ae25"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "effafac528d8b6dfe2098b1aeae910a7"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "a7f6f88007d87cf98a61c9b9a7cb794e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ab5a0d988ffbd303a7f23fcc3d61a434"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "337be6d1de2f0ef1024bca770dfe33cb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "408b8fd87e0435f034e272f7a3ca44c2"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "44e6cb099747f76ff53333b2c1c6469e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "18eb2c9878c6770ff988b5542f3039d8"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "80d5e28efeeecf9b94ccfc23a048d397"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "86ae5fd9be780ca90b112f1905c3be35"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8d38fd1454505028852bb8d0408bc4b3"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "233693f8b5c7ea27fca6c39378b1b635"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f8c966efd60f2628858cf3045ed0b314"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e3779f78d507641d58c950a810678c38"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1fb9f63af10db2cac370a36ea7704180"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a5d4c8207b0d6ed1c6732e05b66b0314"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d23fae1e79fb0557c167ce8afe94f17b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b333aa781e515c8dbaa04ddcd841e688"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1ff3c9779038802d2c42cc16022cbfdc"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "26d873a4e11bf64b9071498e344c1e9f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3ebfbe2d85a280dcecb77d754bda11c9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "dae4fb9c5d3dc08bdea9fd3d9a2fb79d"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "860e524d51ec4813a0755da8dd8fdf08"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "2957dae0e288a590f71f80e467ad6265"
  },
  {
    "url": "tag/git/index.html",
    "revision": "77c4d42d7c5ef7d5d2352b265eac5128"
  },
  {
    "url": "tag/html/index.html",
    "revision": "305d2636ae00db0cda50e85b7d56e6dd"
  },
  {
    "url": "tag/index.html",
    "revision": "2f10650572c9169d2141bce9fdc8c421"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "eeaa3daec79c9635c888476c5548e048"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "c52972a382e44f8f87c89879b930740b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ee86738817331fbb109afdbed44ccd27"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6c26db9892c78843186c3fd16ad0f9da"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0e67f13c0167941ee656e1e7d0299cbc"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d90ddc5fa004b11566692dd869f5fbf3"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bd11277af055c6baa43f01bb96363770"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "887ad9f7c3002d8d1563c3f75b8e9462"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b709b92f354a8b956bc6fb620617c579"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "f72f91a5e7196407205ebfa6e91df673"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a174e8dd4740a1768152647b7df9eeaf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "064489cbeaa4bc3347e7428a58e8e324"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c00c662d398029880bb7f2048fd9194d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "52a350db9d65d19e32572f35fd1ac945"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e18bf1d2acb963f0956778e1533f21b5"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0d5efb40336ae4acc2b8723281bdc4c4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d6d6f48bcca9d9ef466ae8b40766784c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fa5ccd56f1d91187093f5b93616fe084"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "73aa85ebe0b275402e0780d78d1b6798"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5607e82aa6fb1f52875700d98b5f398f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4684f4481aa232bbd7ecb1a0f68164ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d56399180afa63108a87b2271500733"
  },
  {
    "url": "tools/git/index.html",
    "revision": "00569a139465118cfa723236f51c4fa9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f3aef7d863eeaeb8d81b194fb8c5818f"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c2d743820073b0d0fe5e7e108efb8cfa"
  },
  {
    "url": "tools/html/index.html",
    "revision": "91b53b985ce84ae6a19c866fbea4f6c7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "2264f03cf4931c9e230b3f33011e8fd5"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e6fd6605ca40bfd01c73f13f8f6a9d69"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "59d47f1d64422cc82abba9637d4d5731"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2997473a8d7323efceb787a5907b18b4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "bb3ccb6e04fa69a2329293bd640dde93"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3bcba7c330c6574011ae97b67064f27f"
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
