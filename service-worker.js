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
    "revision": "c1e98a7e1a60cb08d9a51d2176042e13"
  },
  {
    "url": "about/app/index.html",
    "revision": "2a9574766e6e268438848827491bd2cc"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "63d42edc13a0a441da79f06ac75d96c6"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "466f8338d0b79c6115fccc340819fd93"
  },
  {
    "url": "about/index/index.html",
    "revision": "fcd722bd57252510371d9f96cc419957"
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
    "url": "assets/js/19.cc51179b.js",
    "revision": "ac5380034484ebd4a488bea928e13f17"
  },
  {
    "url": "assets/js/20.c1a612f9.js",
    "revision": "00490363b1e601c71d232121a59ef777"
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
    "url": "assets/js/29.c1e39a16.js",
    "revision": "d15eca58d6981999577ed52c4a68bf35"
  },
  {
    "url": "assets/js/3.1b0902a1.js",
    "revision": "1710836fc76effd31953a68b908415ee"
  },
  {
    "url": "assets/js/30.3a8e1dad.js",
    "revision": "0c9616a60319053ea2fc3e113d887739"
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
    "url": "assets/js/37.70a93f7e.js",
    "revision": "2dbd99c8bffa31625f7a82610fe1eef1"
  },
  {
    "url": "assets/js/38.8384d80c.js",
    "revision": "03c097c25a211c24186e711e7bd49f54"
  },
  {
    "url": "assets/js/39.2cd1419d.js",
    "revision": "87a4d596c1fb6d1efabaa8296224d7d0"
  },
  {
    "url": "assets/js/4.0cf07b02.js",
    "revision": "7b0660a0fcb6ece7b8081a911ed9b5af"
  },
  {
    "url": "assets/js/40.84d69d29.js",
    "revision": "ef606bbf276f30d45905d1bd477fe010"
  },
  {
    "url": "assets/js/41.83cd9f32.js",
    "revision": "86679e21851db1d527c68ad4faa75613"
  },
  {
    "url": "assets/js/42.965d7a6c.js",
    "revision": "3ef8be1a09befdf89d24a6a2a487a375"
  },
  {
    "url": "assets/js/43.569961d8.js",
    "revision": "05c66d6cdb3f65cee756350b392a2540"
  },
  {
    "url": "assets/js/44.7627da33.js",
    "revision": "c336c1b4a1794cda0d4acc5896d07f13"
  },
  {
    "url": "assets/js/45.ee47df22.js",
    "revision": "0e631056105fd09bc3c1dc3c2be895df"
  },
  {
    "url": "assets/js/46.452ac3a3.js",
    "revision": "647890b15f1cc72ab50551fe1f7e3571"
  },
  {
    "url": "assets/js/47.1da7cab9.js",
    "revision": "99a499e733314301ecf5d41b074d1cf4"
  },
  {
    "url": "assets/js/48.ef58f318.js",
    "revision": "e0141e06d3f464f0a17a951a99ccb140"
  },
  {
    "url": "assets/js/49.81d88c6c.js",
    "revision": "01c19367d01b5254a099978229822a02"
  },
  {
    "url": "assets/js/5.e00cae0f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.2bea3e86.js",
    "revision": "9b37e56ce2e233e1aa1cb4bb53be5b6b"
  },
  {
    "url": "assets/js/51.62267db6.js",
    "revision": "43b9884db20dc6eea38eaaee273713ee"
  },
  {
    "url": "assets/js/52.cd32977a.js",
    "revision": "8e1d4c6227b3d725dce2a85d5fe8ddb1"
  },
  {
    "url": "assets/js/53.2d4c43f8.js",
    "revision": "570582cce5ee89df76e0acfd3619b39b"
  },
  {
    "url": "assets/js/54.293c15c5.js",
    "revision": "2d623846b9f9296582e187827909e63f"
  },
  {
    "url": "assets/js/55.6bf15713.js",
    "revision": "7f5e8f2f4036359d6d5108bcaef70c84"
  },
  {
    "url": "assets/js/56.89f1b903.js",
    "revision": "e7fcaceeba7b083b2565e3817b9a94a0"
  },
  {
    "url": "assets/js/57.46444141.js",
    "revision": "1c4536b7985ae0261b27be16dfe92983"
  },
  {
    "url": "assets/js/58.7c02b433.js",
    "revision": "7e637a813a078d78dc4f688da9951d02"
  },
  {
    "url": "assets/js/59.d48c00f8.js",
    "revision": "97a60cac59f2372389b55f8b71ff0acb"
  },
  {
    "url": "assets/js/6.6e678aff.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.59162d19.js",
    "revision": "441ad7639bddda17e91d59528dbc5b08"
  },
  {
    "url": "assets/js/61.a001904b.js",
    "revision": "3f316bfc2d6edf1eb4f33e7389a41ae5"
  },
  {
    "url": "assets/js/62.90150ae3.js",
    "revision": "0bfbeb5340ff8149cabfd9df3d8b23b8"
  },
  {
    "url": "assets/js/63.120cf9e0.js",
    "revision": "cea22b9768b8c92f377294ffe68e1161"
  },
  {
    "url": "assets/js/64.d8abfb8e.js",
    "revision": "d499ffe274f50688760ef3361bf8fdf4"
  },
  {
    "url": "assets/js/65.36f0e40f.js",
    "revision": "7723b96c8a4f3c8f10fb66dc052dc9a4"
  },
  {
    "url": "assets/js/66.d2201198.js",
    "revision": "763370fc8e4c6991f6f7e29879dfd411"
  },
  {
    "url": "assets/js/67.93f84304.js",
    "revision": "3a4e648a32747cd075427645f7b47390"
  },
  {
    "url": "assets/js/68.9d146b1d.js",
    "revision": "4b693e1b852d6189001c1432707c4857"
  },
  {
    "url": "assets/js/69.fc9c0cd7.js",
    "revision": "9c9f1fc71dfb5398cd3778bfd07f2669"
  },
  {
    "url": "assets/js/7.923ac453.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.f2e6fd25.js",
    "revision": "60f4092574de2c4957570c9cfc17b9c6"
  },
  {
    "url": "assets/js/71.f183ded1.js",
    "revision": "8a0f60c236273e51223f7d7a3ef60674"
  },
  {
    "url": "assets/js/72.b20353b4.js",
    "revision": "49b1cb7e7fddaa7a6b294b5d25f772aa"
  },
  {
    "url": "assets/js/73.033e7bd6.js",
    "revision": "646e50ff8571c23d8263b78c72b1d0fd"
  },
  {
    "url": "assets/js/74.6c31a7c8.js",
    "revision": "0441a3279da27473fac175a606adc345"
  },
  {
    "url": "assets/js/75.37b0ddb2.js",
    "revision": "e3bbcaa18fa875cb8855065e2291f420"
  },
  {
    "url": "assets/js/76.78027693.js",
    "revision": "c047f2ae1bf510b1a3ca843b6c2bb6e7"
  },
  {
    "url": "assets/js/77.55487e01.js",
    "revision": "94f617265d39fe5afac6db9f5759f1f5"
  },
  {
    "url": "assets/js/78.d54968e3.js",
    "revision": "39c38fb7d3c7e920fb5bd896fbcc6c7d"
  },
  {
    "url": "assets/js/79.14269b63.js",
    "revision": "9d1b80a360c09fd5e432ceff760a6d50"
  },
  {
    "url": "assets/js/8.9a4a9dd8.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.680caf72.js",
    "revision": "b39dbd490ab7098d3f3090f67a222823"
  },
  {
    "url": "assets/js/81.9dea144d.js",
    "revision": "0a971ab28ca8f5dd0e73638f6ce8a330"
  },
  {
    "url": "assets/js/82.435d656f.js",
    "revision": "a049351323d6420e33cc3399274885f3"
  },
  {
    "url": "assets/js/83.bf0f14b0.js",
    "revision": "4b3f4f2a23e6d535ba18799a7537a2b3"
  },
  {
    "url": "assets/js/84.259abfd6.js",
    "revision": "b8ebcbbaa9a0511340c7763d76ee514b"
  },
  {
    "url": "assets/js/85.aa073478.js",
    "revision": "7017983480de99660cd828e8ff466b87"
  },
  {
    "url": "assets/js/86.b6d67314.js",
    "revision": "ea78fd673384e408bfae670b17a1f93e"
  },
  {
    "url": "assets/js/9.7a64c4f8.js",
    "revision": "79dbd0d9e791ce7a61d97be734a6de9d"
  },
  {
    "url": "assets/js/app.95b393a1.js",
    "revision": "e97072fad0ded42e1402a0aefb5cff4d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a6d5f5d80ce3235f82ea04ffd284f574"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "be397d3f20c1abda1a71e89c81bed02e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "54ba614ff858605170f0479cda9e1ed3"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1b4b79deea7d68dd6d1705555032a241"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "d07cb4edfb0112ba3709fd6e960aae35"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0b0b85d9f61f42e801fdb3428bbaafe9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e1bbaa21ec05466b78651b23b5304f8e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6fa72b6082fdefd5937fdb054515706f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7596413c717f5c1c3c31396b4a276094"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "7d8661091da674e1ea2107271dcd8919"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "6692b4d26021e4c75d9c146d29d61869"
  },
  {
    "url": "basis/design/index.html",
    "revision": "c9f04e97f799d6c3b51419db6d5e2dd6"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "3324b163bbbeac3ba336ffa1313b2f77"
  },
  {
    "url": "basis/index/index.html",
    "revision": "505b9f11b869b62f82ce30defc49d1d0"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a56c8d032a3d8dff001c96490986e560"
  },
  {
    "url": "book/index.html",
    "revision": "d176add71357bd927033f502cccf08a8"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "06c733ec40fdc3d3c7c6b54ff5ab243f"
  },
  {
    "url": "categories/index.html",
    "revision": "7528d1e5b4c0ca17d8f1a9f6980a9bb4"
  },
  {
    "url": "figma/index.html",
    "revision": "5bccf0ca329f445010b967771c233cb4"
  },
  {
    "url": "flutter/index.html",
    "revision": "af7e606a181214c0afa731318a8794b3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c7eadf01a4a02f93c55a9666867c0bc9"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "34018f505dfafd58002c3c6721a7c4ea"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "bb78e37fdcca2945d2a310b54975078c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "13c995f5b8474d496ab7244a2e9b0f26"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6192d5f2d1051de4e453e8cd133970f4"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "a3936648c7692a51d3b5fe4b4cc632bc"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "72abf21d4cce416e3772f26e2b6e37a7"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5069644ceac672cc99a2914acc2aa31a"
  },
  {
    "url": "index.html",
    "revision": "94fa1ef2fa8119e70d08dbe01d092cc3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a6ae38187be7d9a6797c4df837b5dd92"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1765c564c58346bb3b226fbabc51d0c5"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a45f9fe2ca359ec65e0126a56bf7d8a1"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "15896e66994420cb7d07dd362709197d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "0ea4e6d8f9326f2edddf666e4b811d2b"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "71ee7e4ed1a25730383f430ebb2fa63d"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "7850c1b049122429fdcb181cad31ca6c"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "908db7c6543709a5880653c84c73e924"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "3497d2d3e1e16c3199897c3536bb662b"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "cc085b6aa5ddc4aee070ff527692beda"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b2d495b3d2f8897db0d70984b7ec3c95"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ceaf822b3f5934e87e3e09da34b1c70d"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9067d846171e92cf2537bb0f25ab15e1"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "7bb5254af1a1bf0e4f406a1768450827"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "037f28e0466f4d68f23c011ee4310ad5"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d5f827ff227718c8aa16a53c84490703"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "37d0553f5f2d568b69c017d4f6d5e79a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5e7c00ff7bc58a6dd617c3e1d4c5dfe3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d937ecd2a3a3789e5877287891b69309"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "58723b149aeb732da22668b8ac886e47"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a731edaa6fb649ff54fdea558a14d5da"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c09b0f839630037246e7c0861b57cc02"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "5d5e0cb9c82aa871aa634836a4fb4e30"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "68407d383e9d2d6d181286d27e4bf118"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a886e6a1804249e7efe74efac409f5a6"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "2c09e26abb61c106823d1fab4e87f982"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "4ecf779605ccad1810be85ced35655ca"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "19d3d86a87e45cf135289c11e579a767"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "23c80b5dea7fdad6699ce8a02b6df60e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4c6e7d4017a9dfccb71e6688563f9b01"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "028301da7181313abb2efd6992216bb6"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e4583f57f2f63b4cfb6eb046297461f8"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3e358b1119f7a02d2f83e9d51571e3f7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d0eb904d83c7b7990b1e50ff46e7ba05"
  },
  {
    "url": "tag/git/index.html",
    "revision": "776bc8fed7076c2c8f954577f1a6d573"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b0335ce41995e3df6b030b503ecc68e3"
  },
  {
    "url": "tag/index.html",
    "revision": "dee04bf49e64b3dcf095eaf0baafe6ab"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "cc658a2166cafbc1824128bfcd101b38"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "be149c32a9eb484e82d129b2bbaed62b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "bce9ff7953580b112852ee870136ac15"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c889343f98d176e31035051dcee661ab"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "511794e8e0d54bad48b12743ac42676d"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "1dd3d39b7751ea7fb6e3de931dda5ce1"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4398f2113fa73931fa633ef2e7466f08"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "62ac8040a404850a2c893d04898d0225"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "48a21ef109a498f6d07bcbc2ce4cb664"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "43d65281778614b331a5d565ece8e7bc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2d596bd4ca71810f9deb1b1ecbc003db"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9ffbf577359a256fa5dc892bb19b7b78"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "3d06cf6561dc5c36ec86de4271ff76f2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "79884e6d35814a0210dbf30fef7e9047"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ef6ad15a222b249a0ebd17acf2f27e3a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9d2ae45a92a1b040bde2a019c0a44278"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ecf1c0f1352ebd70fe7c5f80615674fb"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "2ea35e6325ed424671e1107e7bb9e18d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "10cb519c39cb85262a252868b14ae9a4"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "df308a2ff11a93657bd63e41c41eeae3"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "34aefd501357ca16b35a77faa93e9c7e"
  },
  {
    "url": "timeline/index.html",
    "revision": "791947d2028305de5a86e4ac408cceb3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9a854a76d2162ea9a47d43dad4f01d5e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "949d7d3cd0fee68cc7db8d84deaa2f25"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e34cd9c606e0b4cfa16b51123da1a0ed"
  },
  {
    "url": "tools/html/index.html",
    "revision": "562c53b5b3ce64e82353e750ce08cbb9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "31cb205a8b99325757bc0a40b304075f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "acfd7607e54070674c2c9687e71a1cb7"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "0ad432a74e475f114ea19f131b095c8b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7342e0ac5a5a9e76bd9bd341996c39ed"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "21610061fa211a019bef8d6328e75bdc"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "b9a107b8991af44c7bda95b569f469e2"
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
