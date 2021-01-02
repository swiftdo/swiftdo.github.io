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
    "revision": "4c40f61508fe4f8acf64e4344be243e9"
  },
  {
    "url": "about/app/index.html",
    "revision": "218ace4ec24c7bf77f2eaef553df5920"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f00fc6d8d685932216cb9e3a079c0e71"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "520ee873a5924b8b9b5f0a2bfb92bc19"
  },
  {
    "url": "about/index/index.html",
    "revision": "b3a570c12d7dcca3dbf07940b0c72a02"
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
    "url": "assets/js/1.64b3559e.js",
    "revision": "f9ad9ecee0d76c03cafb2356d554432a"
  },
  {
    "url": "assets/js/10.95c2e97d.js",
    "revision": "4ca55ac5d9220c2795fef472275f8581"
  },
  {
    "url": "assets/js/11.73ae199e.js",
    "revision": "52dad7bfe1cecc3887b1dde613e10d5a"
  },
  {
    "url": "assets/js/12.f2927c7d.js",
    "revision": "f1a2b7586032449e112c938cb9f6f904"
  },
  {
    "url": "assets/js/13.94b730ab.js",
    "revision": "800ea8f1a2e10f98f752656e3bdd247f"
  },
  {
    "url": "assets/js/14.c0592bbc.js",
    "revision": "5bea93e4498ea21bfb0a2f8bd77d05aa"
  },
  {
    "url": "assets/js/15.f2d34918.js",
    "revision": "5c86a9c5c1c0a455e2b03f2bdef656be"
  },
  {
    "url": "assets/js/16.0b0863be.js",
    "revision": "b2bca1f28ad1fe9a8d4e37c70618f3a4"
  },
  {
    "url": "assets/js/17.37664bf6.js",
    "revision": "57a5307028ae394d7411cdf0808eb74e"
  },
  {
    "url": "assets/js/18.94191f1a.js",
    "revision": "9a79489ed5ade5bdb3ab4679e610f68c"
  },
  {
    "url": "assets/js/19.5190834c.js",
    "revision": "6af11bbdebaef8f72cd7fa47a50d7907"
  },
  {
    "url": "assets/js/20.30ee3df0.js",
    "revision": "3072860f7c58eb3a7c52af5fa994992b"
  },
  {
    "url": "assets/js/21.471a9b28.js",
    "revision": "cc045dd6dce444c9e302dcff85acc2f5"
  },
  {
    "url": "assets/js/22.2bc0b5b6.js",
    "revision": "1035438d6ee61faefeb1dd24889ad367"
  },
  {
    "url": "assets/js/23.8cd9c26b.js",
    "revision": "e46fde1ff1d09bd6957880035435b5ab"
  },
  {
    "url": "assets/js/24.5f940157.js",
    "revision": "d352aa6ce49fcd022aa0947f48356f99"
  },
  {
    "url": "assets/js/25.e945f0b7.js",
    "revision": "47b17832b5d84ae81793b5d345c76df9"
  },
  {
    "url": "assets/js/26.4d09dec3.js",
    "revision": "9b99b70e005ba8aaaa0898945b95a5ea"
  },
  {
    "url": "assets/js/27.7bfe7600.js",
    "revision": "397be1ec09bcdd6d8c0b107f77863123"
  },
  {
    "url": "assets/js/28.5c86c438.js",
    "revision": "cdbec9a48ca35418433c5187f92898c7"
  },
  {
    "url": "assets/js/29.bc8d4740.js",
    "revision": "ea53bb09ceab0ad9a1cb55f791cc4cca"
  },
  {
    "url": "assets/js/3.46f12886.js",
    "revision": "1710836fc76effd31953a68b908415ee"
  },
  {
    "url": "assets/js/30.bea82c70.js",
    "revision": "42ce1a03acd34b8b89417b724a7ef6b6"
  },
  {
    "url": "assets/js/31.aaaf6e02.js",
    "revision": "ed7aef4284fb98e25f699ecbf6137a8a"
  },
  {
    "url": "assets/js/32.db32486c.js",
    "revision": "b9de9a9d140b626454b1343ddf8379f1"
  },
  {
    "url": "assets/js/33.9b8ae32a.js",
    "revision": "60f6ccc4eb69046c3efea0be2f3b365f"
  },
  {
    "url": "assets/js/34.999516c8.js",
    "revision": "485acd8c0702327cd153f77a91beeefa"
  },
  {
    "url": "assets/js/35.314787ac.js",
    "revision": "0eb64ae9ff40399045cf14297ccdafd3"
  },
  {
    "url": "assets/js/36.cee9863b.js",
    "revision": "098ba94b38aecc617555e193efb1b1fe"
  },
  {
    "url": "assets/js/37.c4f95cf7.js",
    "revision": "e940e6d8d88ad81853be53b826e3bdef"
  },
  {
    "url": "assets/js/38.9959587a.js",
    "revision": "548bd3247bb496faf158f2359280cdbe"
  },
  {
    "url": "assets/js/39.12f8e3a0.js",
    "revision": "934e1b6c23796c95a9620ef24df8403f"
  },
  {
    "url": "assets/js/4.709c42b0.js",
    "revision": "7b0660a0fcb6ece7b8081a911ed9b5af"
  },
  {
    "url": "assets/js/40.a38a2ad5.js",
    "revision": "24ece0d07eef55612a36712c1c35f0de"
  },
  {
    "url": "assets/js/41.5c8072e7.js",
    "revision": "86679e21851db1d527c68ad4faa75613"
  },
  {
    "url": "assets/js/42.4b2c7a25.js",
    "revision": "ffd570be3345231a77b43be67b32e086"
  },
  {
    "url": "assets/js/43.8e08961a.js",
    "revision": "39187473f9893c036f34e8ade0b3394e"
  },
  {
    "url": "assets/js/44.0b0f8815.js",
    "revision": "ca649fef698b359b230ad7e6f6a54609"
  },
  {
    "url": "assets/js/45.cc62a61e.js",
    "revision": "ffb763c16b915b30395ab8cb6fbef1fe"
  },
  {
    "url": "assets/js/46.fa9fe08f.js",
    "revision": "fdf3b7b8ba91e4284999ed8549696206"
  },
  {
    "url": "assets/js/47.1d2f43e0.js",
    "revision": "295a11e03787328c2146e18b7860a436"
  },
  {
    "url": "assets/js/48.3bad6f86.js",
    "revision": "49bce04f5eb24bf3d494b788e87cee48"
  },
  {
    "url": "assets/js/49.dfda1202.js",
    "revision": "4dc91a3340ff9e8cb44b37cc414f8bb3"
  },
  {
    "url": "assets/js/5.6e94119f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.b10b14c4.js",
    "revision": "a76b74d3625cac2159267d4533207cc0"
  },
  {
    "url": "assets/js/51.893d4134.js",
    "revision": "d2a93911af854f3e7d4ab517d6478fb5"
  },
  {
    "url": "assets/js/52.29a8e634.js",
    "revision": "226098bf2814eca95cd9f63fbdeb0cba"
  },
  {
    "url": "assets/js/53.2f2b8b97.js",
    "revision": "138fd92a2b479f8abef8178d5aa7cf45"
  },
  {
    "url": "assets/js/54.ab928d82.js",
    "revision": "3e952d6d34cd2d4912ed49eea1b75dbe"
  },
  {
    "url": "assets/js/55.7a9ec2cc.js",
    "revision": "a54871f904ba95178b768376e7354c84"
  },
  {
    "url": "assets/js/56.812c6803.js",
    "revision": "0912fdbcdb8c58dfcde4740b36a9e9d9"
  },
  {
    "url": "assets/js/57.d77e97e1.js",
    "revision": "f1ff3c93ea5c24c9e823c499884d26c0"
  },
  {
    "url": "assets/js/58.15c4ec51.js",
    "revision": "ac03c754ebbbbf2f3b30e39b264c9dda"
  },
  {
    "url": "assets/js/59.9f081bd9.js",
    "revision": "40105e83225184daa3ab97463a61faa1"
  },
  {
    "url": "assets/js/6.f932b607.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.8b7a12d0.js",
    "revision": "fcb0cd4f4912dcab5798daa35d234dc3"
  },
  {
    "url": "assets/js/61.1c2e8d90.js",
    "revision": "f8ae559d7ea7904afa5a4ceccd729536"
  },
  {
    "url": "assets/js/62.be3f8e91.js",
    "revision": "8b3c013ce8fd45a87d9ac8a295cf190e"
  },
  {
    "url": "assets/js/63.febf05fe.js",
    "revision": "fb632bc29ef154a776e594b4e0b0ea11"
  },
  {
    "url": "assets/js/64.b18ed0c2.js",
    "revision": "67a087235048bd26288fc60900923924"
  },
  {
    "url": "assets/js/65.80ef25e3.js",
    "revision": "e03008673086c9cbbf00d573719d7a01"
  },
  {
    "url": "assets/js/66.db7ef0c0.js",
    "revision": "a0f6c4e2a3d19c8a31559da13fc9c8ba"
  },
  {
    "url": "assets/js/67.a1797950.js",
    "revision": "8a0a954b20dbc51abee33a74cde9885a"
  },
  {
    "url": "assets/js/68.ff0cf8b9.js",
    "revision": "baa401dd8be24f245a666bb7e3d34ed2"
  },
  {
    "url": "assets/js/69.b9812902.js",
    "revision": "e2d2a4d128f30642ced542d78dde2826"
  },
  {
    "url": "assets/js/7.22555c03.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.3e201d22.js",
    "revision": "1c7215cac13a058a6c6036ef5a6474b2"
  },
  {
    "url": "assets/js/71.d8d31dee.js",
    "revision": "3d27e853fa2b35595f9b846ba22f2d7e"
  },
  {
    "url": "assets/js/72.ea79a723.js",
    "revision": "98b29e6b8d2e2781ca3c7adc080db220"
  },
  {
    "url": "assets/js/73.7475429d.js",
    "revision": "0f1d53cb239c890ab878aeb201ff95ee"
  },
  {
    "url": "assets/js/74.6662506e.js",
    "revision": "224406a080c346e3e056bc2441c50866"
  },
  {
    "url": "assets/js/75.8e06e0ce.js",
    "revision": "8db9565a064d099df37e5061ce3f6530"
  },
  {
    "url": "assets/js/76.c23d2c36.js",
    "revision": "c4fbc30da7732fb5bdb26df7ca793f66"
  },
  {
    "url": "assets/js/77.bf5fa3b8.js",
    "revision": "1acda6429dfaeeb3b32234c89f379354"
  },
  {
    "url": "assets/js/78.43e1f4e0.js",
    "revision": "9787b9fc5b2b07301625abc4d73a12a6"
  },
  {
    "url": "assets/js/79.ea1e3088.js",
    "revision": "1acef596eab7922aec4c4667275671a2"
  },
  {
    "url": "assets/js/8.f39fae09.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.2d549be7.js",
    "revision": "c082753759dfe466827d9a840e158b27"
  },
  {
    "url": "assets/js/81.b9cd0915.js",
    "revision": "339ffa13c78b8ae90f368bb396d2683c"
  },
  {
    "url": "assets/js/82.a9b0c7a9.js",
    "revision": "8d1d8774b57b52b1725b9f27e8d30d20"
  },
  {
    "url": "assets/js/83.fdfeac7f.js",
    "revision": "7bb4f3f88435995dab676b9882b06e0e"
  },
  {
    "url": "assets/js/84.992f2466.js",
    "revision": "037b7de5fa69cfa65c97e6e895e876fb"
  },
  {
    "url": "assets/js/85.30341ec7.js",
    "revision": "ef722ba06541dfa1ffc1415671c4a54b"
  },
  {
    "url": "assets/js/9.0a295d05.js",
    "revision": "00584a1b02290f9b8a975f5ae34af5e2"
  },
  {
    "url": "assets/js/app.3707cde1.js",
    "revision": "cececafe2305daf07751ed62876824ad"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "57258a775e597b35ddfbca9d2e9d76c6"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6c64f67a0e1f54a78b3ed69de296960e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ff1c331735fc0bdcd0506713f3166ee7"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a5a4b77921036f1b2cbfcb4548d06728"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "02f9cb86ca4f801d90845dd0774920d4"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9a527782a53a349e908a7194c128313e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c79cf7d7893e19af6ebea7f367fcbcba"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1100ec93368d48084ede8e856aea4923"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9ee574b0dc3e0c8734a091dbb07a9ff3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9b18a2f5ea117dfd70a22b7d1443783d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0b97e2fc0315bf4d8a9a90caf6fd9b94"
  },
  {
    "url": "basis/design/index.html",
    "revision": "fe5f5da4989e39fe6a66f0799981f672"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "d95f2025fe956fb3534ca8ddbd1c6ed4"
  },
  {
    "url": "basis/index/index.html",
    "revision": "440bf4dfe302a6ff62bb3c4bdee705e5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "42831395ab66b8804cd42573e28e995c"
  },
  {
    "url": "book/index.html",
    "revision": "c7354a2ba0dc3c8be5c23fb7a7bc0b4a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e5186d1b0dc909f067b2ab59b3ce122b"
  },
  {
    "url": "categories/index.html",
    "revision": "0a5e973841029f8f031c581b1c21fe24"
  },
  {
    "url": "figma/index.html",
    "revision": "55727efda96955bbc2349346ed6b8e91"
  },
  {
    "url": "flutter/index.html",
    "revision": "f4dc2930d6e14bd874b800697a457896"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "70b6a5eaa07b6abc23c4f5c6e3cdd863"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b8f9e15f68960f277f563af8fbfb77f3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "58c032bf1fa2a1a538f1f356c61d3ce4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8e69e462a09a6d24ee4ccbd7086057fa"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2bf4a9f19aabed0cc3d0d7b54a92bf75"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b1786257527e80a9c82e5a024ea2ca5f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8f9df3ec72e1da1058fb67008c51c8fa"
  },
  {
    "url": "index.html",
    "revision": "747442fd0d1068c4c7919459ae04d0d6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "2bca84953c39e9d0eb2ab1c38a202c8d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "a4eb6b3f306a45de4ea985a0072833a7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a9e44a8acc6c22d7c18347eede665e95"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f535151626ff4ea5bb09f5a9d8d5c2c7"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "37fb074629eacd7c838fee4bc5aa09a8"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "ac46db5a0b4f03cb88c99c6b508eff55"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "b5dc92aa279c6c3f3f94fe7ced661cfe"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "26a01931a5d089aaf0f05261328f87cf"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "bf796a4b61b33df6b8f6ce61ce62de58"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "7385e66241f8dd112a54aaaeef3dc661"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "aa9f3e408e6c2281664d0156ae58327d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "9da4f58b27786c264256311755eb7ecc"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4ca5185b3ccd753b700422ad0da008b6"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "2a3fab1aa532467e900d15ad48bf5a05"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "f6e194026c294517a0020054eb443639"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d1ecbcfb173b8fedf528314dd70c038d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b02fb5303e7c2779df6e1a516619994d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "8eba91665224479aab373092a0304ffe"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "29b9121edcdc0a9c16ff11ee5fad16a9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "461fa3b8a2d32f7bcc1231d26b1ddb46"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "57a21892661cd1f1731866506ed3f389"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c487ccca2cba1a2e04c68647366678f6"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "885fbeff506ceb8dabfe81c6023117f5"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cde46a0257a5e0fadc941480dda5608e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "4a667d77631386d8d6523d447612da4d"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "20a5bb7998d79d636376ab928bcb4c05"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "85e8381a3f5b12f6b6f70d2e88a86820"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "83ca1c6eb9c811c21f8503ed4b8dec00"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c11f5773453184bc4a0dcc6680851dac"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "fa9d932126ae0ecc52b2167c6d95bd42"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1df9663c83d75ccdcdcc401cd6931274"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "54db08a84c83198f3bd2ec1f2c51827a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "bc6271f98d685b562e43dc51f40f5b0d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "824052ed77c5882862de9370cee38af3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ee28e925f36de3fb295b028898fee84e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "008b75816a809cd6e872c64118e9faaa"
  },
  {
    "url": "tag/index.html",
    "revision": "da7b803e9f7bf57901398f5243d4ae36"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "18ff1e8309002d96f863704fa41ddbff"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "401fbad56fddf1765f81b5853b208eab"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4fd179df8aa920778bc9529dc4b17c6e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "2d046355fcbd99cbe4d163409e7eb654"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3aeb84847219ab84bcd15737b4d7fee5"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "2bf78eb2b6a390f3f26b8e27e1948718"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e72b458be43ffc73bb18037ae2f0a992"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c61f919ffe68e57b24224b04323f6538"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "22cf5da47a321196effc8c19cd7f809f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "6fd33b38b421661a7c515c76ba3e3077"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "585825013a5d1db3481c98ea58fd8081"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e42173ac7a3db5a8a7106041118232cb"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "bbeec94128a63e3cb85d0959479bf77b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b4316800e1aa9eaffb50f5952eb76cbc"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b4873707abd42dc3eee77713ed6f6a00"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ffda9e0380344e72c51f8d93ffdf34a4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e46e6a10ec34af6da0f7214335e64c48"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d8948b0ae22ddc43cae4a9a8c78e11d9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4c6424471d4f0c55dfc4cb55aed3e24f"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9a4be19f9c7ae66ec39c34d58a0471eb"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "1f2d2841126a4157bbc5006baccb9a89"
  },
  {
    "url": "timeline/index.html",
    "revision": "184307bc3ad6b97aa22462618c33312e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "fb0ca2e63ce2d78e91c38eb2bb26b330"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f599841505195fcb8f58be76897572f2"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "029d658e9ce43d2206d3a80eb9c5aff2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d6135d1db4669136314cb119a087a470"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "fc733d273a23d8371044322b4d467363"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3a701e3783859ac2d60fc52535574d29"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e0202819947d5975c63897bd442fe12e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1473cf04ddcfc807fccbb7f9a0906d0e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d87486069b47fb1dbb1832a6757d3c15"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4cb42c6a90b66e40e4b93b54398d845c"
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
