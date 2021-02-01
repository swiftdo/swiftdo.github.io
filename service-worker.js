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
    "revision": "6f3f35e14f2c30aa7789599d51a25cbc"
  },
  {
    "url": "about/app/index.html",
    "revision": "d8901ab36d5b03014ad58d34327798c1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "301b5ace23022b739de94fc620f4ae8e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bab45b060499fa1cabc3a14edcd53c01"
  },
  {
    "url": "about/index/index.html",
    "revision": "6b4b4320645d3876d4b0523beaf1826d"
  },
  {
    "url": "assets/css/0.styles.ef8fbc08.css",
    "revision": "75d501d333253bf66acf622f468da4e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.a23113d3.js",
    "revision": "f9ad9ecee0d76c03cafb2356d554432a"
  },
  {
    "url": "assets/js/10.e2cce4b3.js",
    "revision": "4ca55ac5d9220c2795fef472275f8581"
  },
  {
    "url": "assets/js/11.c9745764.js",
    "revision": "8d6e3ecf76e09905205596c703dd4c75"
  },
  {
    "url": "assets/js/12.49def26c.js",
    "revision": "2d0ed3506ce44398e04ad4927fa6c442"
  },
  {
    "url": "assets/js/13.2d6171c6.js",
    "revision": "800ea8f1a2e10f98f752656e3bdd247f"
  },
  {
    "url": "assets/js/14.3f74a4b1.js",
    "revision": "5bea93e4498ea21bfb0a2f8bd77d05aa"
  },
  {
    "url": "assets/js/15.bfa0770d.js",
    "revision": "5c86a9c5c1c0a455e2b03f2bdef656be"
  },
  {
    "url": "assets/js/16.a5e1c9f3.js",
    "revision": "b2bca1f28ad1fe9a8d4e37c70618f3a4"
  },
  {
    "url": "assets/js/17.dc987c41.js",
    "revision": "57a5307028ae394d7411cdf0808eb74e"
  },
  {
    "url": "assets/js/18.bf7b1e37.js",
    "revision": "9a79489ed5ade5bdb3ab4679e610f68c"
  },
  {
    "url": "assets/js/19.c00a3102.js",
    "revision": "6af11bbdebaef8f72cd7fa47a50d7907"
  },
  {
    "url": "assets/js/20.3cbf4f10.js",
    "revision": "3072860f7c58eb3a7c52af5fa994992b"
  },
  {
    "url": "assets/js/21.85927cdf.js",
    "revision": "cc045dd6dce444c9e302dcff85acc2f5"
  },
  {
    "url": "assets/js/22.7c8f04d2.js",
    "revision": "1035438d6ee61faefeb1dd24889ad367"
  },
  {
    "url": "assets/js/23.577ce3af.js",
    "revision": "e46fde1ff1d09bd6957880035435b5ab"
  },
  {
    "url": "assets/js/24.b88ad7c5.js",
    "revision": "d352aa6ce49fcd022aa0947f48356f99"
  },
  {
    "url": "assets/js/25.3182394a.js",
    "revision": "47b17832b5d84ae81793b5d345c76df9"
  },
  {
    "url": "assets/js/26.fb1b6b52.js",
    "revision": "9b99b70e005ba8aaaa0898945b95a5ea"
  },
  {
    "url": "assets/js/27.50d208bb.js",
    "revision": "397be1ec09bcdd6d8c0b107f77863123"
  },
  {
    "url": "assets/js/28.abfe1ab8.js",
    "revision": "cdbec9a48ca35418433c5187f92898c7"
  },
  {
    "url": "assets/js/29.16086d9b.js",
    "revision": "ea53bb09ceab0ad9a1cb55f791cc4cca"
  },
  {
    "url": "assets/js/3.1b0902a1.js",
    "revision": "1710836fc76effd31953a68b908415ee"
  },
  {
    "url": "assets/js/30.2ee57be9.js",
    "revision": "42ce1a03acd34b8b89417b724a7ef6b6"
  },
  {
    "url": "assets/js/31.4b330b51.js",
    "revision": "ed7aef4284fb98e25f699ecbf6137a8a"
  },
  {
    "url": "assets/js/32.65834969.js",
    "revision": "b9de9a9d140b626454b1343ddf8379f1"
  },
  {
    "url": "assets/js/33.d8fef21e.js",
    "revision": "60f6ccc4eb69046c3efea0be2f3b365f"
  },
  {
    "url": "assets/js/34.6c134203.js",
    "revision": "485acd8c0702327cd153f77a91beeefa"
  },
  {
    "url": "assets/js/35.375aede9.js",
    "revision": "0eb64ae9ff40399045cf14297ccdafd3"
  },
  {
    "url": "assets/js/36.572d6680.js",
    "revision": "098ba94b38aecc617555e193efb1b1fe"
  },
  {
    "url": "assets/js/37.a9642e20.js",
    "revision": "e940e6d8d88ad81853be53b826e3bdef"
  },
  {
    "url": "assets/js/38.d69bbe59.js",
    "revision": "548bd3247bb496faf158f2359280cdbe"
  },
  {
    "url": "assets/js/39.4a170183.js",
    "revision": "934e1b6c23796c95a9620ef24df8403f"
  },
  {
    "url": "assets/js/4.0cf07b02.js",
    "revision": "7b0660a0fcb6ece7b8081a911ed9b5af"
  },
  {
    "url": "assets/js/40.95191603.js",
    "revision": "24ece0d07eef55612a36712c1c35f0de"
  },
  {
    "url": "assets/js/41.83cd9f32.js",
    "revision": "86679e21851db1d527c68ad4faa75613"
  },
  {
    "url": "assets/js/42.824a4251.js",
    "revision": "63f52bc0a0033697c26322a646d97bb5"
  },
  {
    "url": "assets/js/43.dbf3732c.js",
    "revision": "1d47318cc9f28bd74dba62fbde19d977"
  },
  {
    "url": "assets/js/44.b980063c.js",
    "revision": "6bff15ccb97068f1a75ef9423d185959"
  },
  {
    "url": "assets/js/45.df1d42ec.js",
    "revision": "84d3c849df97526c17f95c59dff7a4ad"
  },
  {
    "url": "assets/js/46.6fc18df6.js",
    "revision": "a66905f31d6f492d960acfae63e2e026"
  },
  {
    "url": "assets/js/47.8afa2e4b.js",
    "revision": "716ea9ba4bf8dbeddc7dad8d7da942df"
  },
  {
    "url": "assets/js/48.a391b13f.js",
    "revision": "4baf2664b6b89e3ec09ae74b5bad7e42"
  },
  {
    "url": "assets/js/49.4cee5e73.js",
    "revision": "9e6e1df0dbc2170d9e043528a6056269"
  },
  {
    "url": "assets/js/5.e00cae0f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.6c44764d.js",
    "revision": "5c7e2c0332154f50a216c7a858da8d85"
  },
  {
    "url": "assets/js/51.9c216d16.js",
    "revision": "4b03eb142bd98bb4f81c5bceb299ee2c"
  },
  {
    "url": "assets/js/52.c6ceabca.js",
    "revision": "395b12ce3e1c7b598717afc34c27322f"
  },
  {
    "url": "assets/js/53.230d8c77.js",
    "revision": "98ffa6639c29ef5b7549910c2818f821"
  },
  {
    "url": "assets/js/54.572dd89b.js",
    "revision": "6cbbe7c2789a0051a7b23bb55263c826"
  },
  {
    "url": "assets/js/55.517f9044.js",
    "revision": "98e4b62b6ca3d140cbdb6ca18acc340d"
  },
  {
    "url": "assets/js/56.7df48c41.js",
    "revision": "defbd974e39784d66a5e749561e1896a"
  },
  {
    "url": "assets/js/57.24aee490.js",
    "revision": "905ca8741d1b0f1ba2601195a11f53ec"
  },
  {
    "url": "assets/js/58.cdbb0cb3.js",
    "revision": "6af3ec07f53738612e2a212860b787f7"
  },
  {
    "url": "assets/js/59.44643f2d.js",
    "revision": "1ba72c0bc14b077e9b6c5c5bd8cdeb42"
  },
  {
    "url": "assets/js/6.6e678aff.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.b9c39dff.js",
    "revision": "f27da92e14ff9c5191824b102bba6288"
  },
  {
    "url": "assets/js/61.6b49ffe7.js",
    "revision": "d1353aee9dc06e7442a8fa91831faf07"
  },
  {
    "url": "assets/js/62.392ca78c.js",
    "revision": "fe1789ee48911146ebb8486f46647e35"
  },
  {
    "url": "assets/js/63.1a683a0f.js",
    "revision": "e0aefe2fa3204b4a937c0211c3709b03"
  },
  {
    "url": "assets/js/64.cf05169d.js",
    "revision": "fafe0c9ace643b39468db0cec7ca4479"
  },
  {
    "url": "assets/js/65.71ec139d.js",
    "revision": "cceddfe1a8560ae0195f89d947009cba"
  },
  {
    "url": "assets/js/66.0dff234d.js",
    "revision": "230646095cfe887acafebd2a9fff7e65"
  },
  {
    "url": "assets/js/67.2ef47b56.js",
    "revision": "1b3647e1060dc1b3f8b416f33f030d6a"
  },
  {
    "url": "assets/js/68.eae9fd16.js",
    "revision": "681da1e9fd899f61f632f700671f7df0"
  },
  {
    "url": "assets/js/69.f25aadcb.js",
    "revision": "6e6f19ef053e85729370531b9fb868c3"
  },
  {
    "url": "assets/js/7.923ac453.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.2be17a18.js",
    "revision": "948238934f539c306fd724a185545e3a"
  },
  {
    "url": "assets/js/71.be03c314.js",
    "revision": "76dd6654ba4c29674f925d24b1244d1c"
  },
  {
    "url": "assets/js/72.1d9206af.js",
    "revision": "ece2430c6ee2ab2dd6b9c93984a0ea4d"
  },
  {
    "url": "assets/js/73.89928fce.js",
    "revision": "c3f9ab44e5973131cadbc89e8174d4bd"
  },
  {
    "url": "assets/js/74.366f21bb.js",
    "revision": "1cb8c58b7e9e84b40f11f9c88ecc65a2"
  },
  {
    "url": "assets/js/75.aa120dca.js",
    "revision": "1294fdacf68c79cba025c51518ad23f2"
  },
  {
    "url": "assets/js/76.c8d7c8f9.js",
    "revision": "9e995c4912b995360f8fa839018f1501"
  },
  {
    "url": "assets/js/77.e22e610d.js",
    "revision": "691c85aa7f0337f7a33f3345bba90a85"
  },
  {
    "url": "assets/js/78.72ef0e97.js",
    "revision": "71b00f70a480d668df3f4934d9186dfc"
  },
  {
    "url": "assets/js/79.52381533.js",
    "revision": "019b329e72cf090ac643dde2e833dc06"
  },
  {
    "url": "assets/js/8.9a4a9dd8.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.54f3194a.js",
    "revision": "7b0a025c4cea3e1c9877c10bff3f5de8"
  },
  {
    "url": "assets/js/81.e20ba252.js",
    "revision": "8a445581753d1665f4f519ca6cfb7ee8"
  },
  {
    "url": "assets/js/82.2a008817.js",
    "revision": "7117963a84b5cb6dbf16646465f73f70"
  },
  {
    "url": "assets/js/83.ca69ec35.js",
    "revision": "50db92e44346515cc8b972042295b01d"
  },
  {
    "url": "assets/js/84.cecccce8.js",
    "revision": "ad7c94154427ebeebf13eec205d63030"
  },
  {
    "url": "assets/js/85.69880c96.js",
    "revision": "c0ae25789109952b551b603a8ea4b6f3"
  },
  {
    "url": "assets/js/86.436d852d.js",
    "revision": "b862e55c70be7149e18225b664a23f03"
  },
  {
    "url": "assets/js/87.1e498436.js",
    "revision": "05fc017c0e90e9e398e2bde84acbf67a"
  },
  {
    "url": "assets/js/88.17823982.js",
    "revision": "f9b0bfbcdd4114a8931d303236c166b4"
  },
  {
    "url": "assets/js/9.7cdb6692.js",
    "revision": "f8cb73f525bdc44e876e55b9a79d7100"
  },
  {
    "url": "assets/js/app.76842b99.js",
    "revision": "a156a5e3b13ddcae19f07c5e1854b62d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "13fba53d61cf00ab9c7c6fa783353ca5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f44b347a58780a47f43b2a1fc4f6445d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "47f3ea6451b1c9799d04547e207f3cbf"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1dc2b0ffeafc10b4a473ad23a60b2add"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2d336616a71fc330b3ee1fc40198d205"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2abad7d79da0e36c4d4c1c8c83f18d27"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "82d071f07d050d856d82e96c3f61a52b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4fdead8e813d5ee7046c884e372cdaa1"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "a4f11777acab580a9a9a4c02ab6ba33e"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "084ebdb5b6c962d610e90cc5bd5fe827"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0e9da589e5301227cc2c6f96c7c37370"
  },
  {
    "url": "basis/design/index.html",
    "revision": "50a1476151b7cf6166ee0f80ac43ff31"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "0ba0f4699569624bdbb5118dac109895"
  },
  {
    "url": "basis/index/index.html",
    "revision": "83ef49f6f0afc8a2da3d60739a723917"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b94bc1ffc7aceeb029c9b761d8f63d1d"
  },
  {
    "url": "book/index.html",
    "revision": "6041575ee5f1ee9848a114cdfdfccdb1"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8a08c5db503c8090ecdb0c70f7e1461f"
  },
  {
    "url": "categories/index.html",
    "revision": "9db585409edef22dc1aed804dff3df5c"
  },
  {
    "url": "figma/index.html",
    "revision": "32bd091fea18bdf7bbdc5f4b8131bc18"
  },
  {
    "url": "flutter/index.html",
    "revision": "7ac4ae7a97b8a7e424a381a63e970fe8"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "44c94b554f8e01f48a65d7fb27da4e1d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1087caeb203ab7bae816eac420082203"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9a7ff781190cc62ef62a379997f8e504"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8db97b845c68460867972576ba50698e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b2d5d379bf9dd5f7f3a0107f8928d890"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b985c86f07f5e03afbe653dd365f03ac"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "94589db7084e64fc8567f1c4644f6b74"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "26bf27a79cb1f1fcddfc65c9e1d590d5"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "64f017f6e3e65766218ff16fa3ac1672"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "290cb5e2c472724b809367a1120f2ed7"
  },
  {
    "url": "index.html",
    "revision": "ff5f646b70b1131b27abdc8ca18df0f1"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "903b701cce53c5674493ea2d119fbd5a"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d7d1c8a2451a5e96d6869cbbfc72b1e9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "5b4d50c64b39be7bc90a370b639d1132"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6e85b9c1b538687f4efd794fe2fe42ce"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "b4fc2c30a2459aab93be2e4bcc0c7670"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "3dd9bc2248342127039bc58e6b15cc82"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "44dcb4477bbf0ae4a8b6dd4663142453"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "4710d71f19f87e839d3b4561467e3be3"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "c68fdb99aaf9a6ff17d63e9ee98e760e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "e63432eb295d4ad6c73e9e662559005b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "fefe2273cdb203ba29f86962757c474a"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6ecbbc1aea786e64807e33f1937db783"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "da8bfc5f3d0214b78856262d05268de5"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "a3064d1d0aac2a3359651fc328123818"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "eb8232ede0f86eee7752e217dc243ae6"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9bb8fd9217948b9184af9b1a69e0fd42"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "789538859aab254aae03dcc59971fb1a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "11848032c6b60a5f6497e5093a9866ce"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "19f81b79f6c3ad4a47ed6f539c0b4773"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "3e5994e92ec744d199c6aa3e2adaf958"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ef8a00c837d9d0e5fbbf6ae33ec487d3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c387579715e8b409cd56d381bc4b1813"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "efffcb879920a4aab939948f09826653"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f61c0ba127c1b5563d6ec06e11568ea1"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "dc3a65005c62115244d43a259f5b1c31"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "137509c707309a6b3b2bfbc970b46902"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "38f24d054a62b639cca61569248b85c4"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "0afd813eaa5f7a105da755ec8fc6d1a7"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "7603dd30a6bbc20938d4f3106ec4434d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "5ae3a7c3a8238d18d679022574648d59"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c5d35e951c46113de83ecf9ffb46ff91"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7b8273e43e70b57f62a01a9e41bd76a2"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "6f919da2ef94b95db4864e0dbf51b6f4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8066b3150e417c7824a25e0807730d98"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "33d4ba0cac08227c1c63ca664e9114ae"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4498e767b6185c4db8cbc92da5ecbfaf"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5d48837c883ecdb303046f36f45627ac"
  },
  {
    "url": "tag/index.html",
    "revision": "b0417a0516e707fd41d1e9dc5292c2ac"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "889b59e0e71c1a69372bf4ad0b6b6343"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7ff5f12e7cc111736485f9da9471f595"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5d8c76fbe04d5315b473cec7972c4e6e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f4eab7fde2a379e7d4435a4300802854"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "63f9d8ec8f567c4451760aea94d2aba4"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "02e8da439207c70dcd11e9e4f31e6447"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "9341c488068863d9eed09c81d407b5e8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e98c827430d78e5e565c601bfdf5ed7a"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "2a6ff1c1440b5b78c7b798444e7e707c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "30c8c110ece6dce75f4d85cc638a38e6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b9c4f27dda61afef2b2818c274804b87"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "74a505757f0487657b5c4ee0edf8087d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f5f8882f992a881729fa3c3f1db098ca"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "170b0455a3eb1ff99fe3e39135988a97"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "8a9c9074ad52b919c9c0c700502d9c96"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e0cf4b53b2b05258adc31971849ee722"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "26c18aa254034995c7685f2032fe17e8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b8d067aa2cdaee8369504227d0689459"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "68a3f849393e637c6212a8dfb34dd700"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a96367c862fe80e85b8fca8e6fc6d25f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "927f422497059ab6867fc0254182a7c1"
  },
  {
    "url": "timeline/index.html",
    "revision": "96bdd1f405de0fc8f97fca571dd8b887"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6639ac99719865a7212f7788662c9783"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "eaf6e322cb04393a0a29f756512bfc41"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "95875680c51a5e2cd16458e75380b949"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a9bf8f74d5fa46406015bedbf0e52ed7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f189107beda3ba810f95c264854c79c7"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "bbfc68ff2ea4322f9fd35908c15239a8"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c80ad9ceae96b90ae87b8514ce10b2b4"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "79554506b9692463ff8449f0249517e3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b50af2b6686405224cf32b2710299130"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f3f4ada7b46d9cee75c321f659f65ab1"
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
