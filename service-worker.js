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
    "revision": "8b97a5b606bc60070edc03812ec01ae5"
  },
  {
    "url": "about/app/index.html",
    "revision": "9f1efb84c2c4712a7ba915fd044b603e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "04522902f54c1d137e90df4bc56bec94"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "15b8b929e462d0b21a72d504e0d4a24d"
  },
  {
    "url": "about/index/index.html",
    "revision": "ec5602d7240b25a27fd9a07bd4f9332c"
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
    "url": "assets/js/11.3cbebaf8.js",
    "revision": "52dad7bfe1cecc3887b1dde613e10d5a"
  },
  {
    "url": "assets/js/12.2cc6e04c.js",
    "revision": "f1a2b7586032449e112c938cb9f6f904"
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
    "url": "assets/js/16.e2282a40.js",
    "revision": "1df1300c991579a0baa4d0fe18635ea2"
  },
  {
    "url": "assets/js/17.e5defc69.js",
    "revision": "f22ab86caea982c7175ccc405d4dde05"
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
    "url": "assets/js/42.01f45413.js",
    "revision": "ffd570be3345231a77b43be67b32e086"
  },
  {
    "url": "assets/js/43.16d2b61d.js",
    "revision": "39187473f9893c036f34e8ade0b3394e"
  },
  {
    "url": "assets/js/44.d7ffeaef.js",
    "revision": "ca649fef698b359b230ad7e6f6a54609"
  },
  {
    "url": "assets/js/45.3fc33efc.js",
    "revision": "ffb763c16b915b30395ab8cb6fbef1fe"
  },
  {
    "url": "assets/js/46.3b235fa7.js",
    "revision": "fdf3b7b8ba91e4284999ed8549696206"
  },
  {
    "url": "assets/js/47.a399d150.js",
    "revision": "295a11e03787328c2146e18b7860a436"
  },
  {
    "url": "assets/js/48.f42221e8.js",
    "revision": "49bce04f5eb24bf3d494b788e87cee48"
  },
  {
    "url": "assets/js/49.1a597504.js",
    "revision": "4dc91a3340ff9e8cb44b37cc414f8bb3"
  },
  {
    "url": "assets/js/5.e00cae0f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.ecaa1158.js",
    "revision": "a76b74d3625cac2159267d4533207cc0"
  },
  {
    "url": "assets/js/51.6f830189.js",
    "revision": "d2a93911af854f3e7d4ab517d6478fb5"
  },
  {
    "url": "assets/js/52.b8aab87c.js",
    "revision": "226098bf2814eca95cd9f63fbdeb0cba"
  },
  {
    "url": "assets/js/53.26fb294a.js",
    "revision": "138fd92a2b479f8abef8178d5aa7cf45"
  },
  {
    "url": "assets/js/54.3978a1a4.js",
    "revision": "3e952d6d34cd2d4912ed49eea1b75dbe"
  },
  {
    "url": "assets/js/55.6f0addda.js",
    "revision": "953cb9e75e0aae82d5f747fffaacd907"
  },
  {
    "url": "assets/js/56.0340ced2.js",
    "revision": "bc689eeee2432390690cc0e331935ccd"
  },
  {
    "url": "assets/js/57.08b3bb4d.js",
    "revision": "f1ff3c93ea5c24c9e823c499884d26c0"
  },
  {
    "url": "assets/js/58.a0e33c4c.js",
    "revision": "ac03c754ebbbbf2f3b30e39b264c9dda"
  },
  {
    "url": "assets/js/59.24d1804c.js",
    "revision": "40105e83225184daa3ab97463a61faa1"
  },
  {
    "url": "assets/js/6.6e678aff.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.803a3e75.js",
    "revision": "b92599e24a12e0caae4176aed7db7cdc"
  },
  {
    "url": "assets/js/61.d677eb7c.js",
    "revision": "f8ae559d7ea7904afa5a4ceccd729536"
  },
  {
    "url": "assets/js/62.07772e26.js",
    "revision": "8b3c013ce8fd45a87d9ac8a295cf190e"
  },
  {
    "url": "assets/js/63.cdb230ad.js",
    "revision": "c512d54292d2efb5f219eaf4ff980043"
  },
  {
    "url": "assets/js/64.aee75f76.js",
    "revision": "cfeac1c01ac5d1556a54ff284c0f6f1f"
  },
  {
    "url": "assets/js/65.7a9b1657.js",
    "revision": "83072baee39343ecccd95c6dada92abd"
  },
  {
    "url": "assets/js/66.862ee1f3.js",
    "revision": "a0f6c4e2a3d19c8a31559da13fc9c8ba"
  },
  {
    "url": "assets/js/67.fa205b65.js",
    "revision": "8a0a954b20dbc51abee33a74cde9885a"
  },
  {
    "url": "assets/js/68.da8077b0.js",
    "revision": "baa401dd8be24f245a666bb7e3d34ed2"
  },
  {
    "url": "assets/js/69.988aceb4.js",
    "revision": "6202c690cec48f8acb86c0b796bd4fd6"
  },
  {
    "url": "assets/js/7.923ac453.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.65fbc252.js",
    "revision": "80363e499ac2314e800c5911f53eb09d"
  },
  {
    "url": "assets/js/71.fd9667a5.js",
    "revision": "3d27e853fa2b35595f9b846ba22f2d7e"
  },
  {
    "url": "assets/js/72.25e17941.js",
    "revision": "98b29e6b8d2e2781ca3c7adc080db220"
  },
  {
    "url": "assets/js/73.ad4a4059.js",
    "revision": "0f1d53cb239c890ab878aeb201ff95ee"
  },
  {
    "url": "assets/js/74.4fb08ae3.js",
    "revision": "224406a080c346e3e056bc2441c50866"
  },
  {
    "url": "assets/js/75.b474dd9d.js",
    "revision": "8db9565a064d099df37e5061ce3f6530"
  },
  {
    "url": "assets/js/76.8a48dfda.js",
    "revision": "c4fbc30da7732fb5bdb26df7ca793f66"
  },
  {
    "url": "assets/js/77.7d1c06fd.js",
    "revision": "1acda6429dfaeeb3b32234c89f379354"
  },
  {
    "url": "assets/js/78.3aa14bd6.js",
    "revision": "9787b9fc5b2b07301625abc4d73a12a6"
  },
  {
    "url": "assets/js/79.f0ddad44.js",
    "revision": "1acef596eab7922aec4c4667275671a2"
  },
  {
    "url": "assets/js/8.9a4a9dd8.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.e97ca495.js",
    "revision": "c082753759dfe466827d9a840e158b27"
  },
  {
    "url": "assets/js/81.7cbee3bf.js",
    "revision": "339ffa13c78b8ae90f368bb396d2683c"
  },
  {
    "url": "assets/js/82.bac4edae.js",
    "revision": "8d1d8774b57b52b1725b9f27e8d30d20"
  },
  {
    "url": "assets/js/83.4b8b6701.js",
    "revision": "7bb4f3f88435995dab676b9882b06e0e"
  },
  {
    "url": "assets/js/84.7c58545d.js",
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
    "url": "assets/js/app.c3670520.js",
    "revision": "8cca4638562693994f1a4f1c5004bd9c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "ed878e9cc14b04ff6ba734c97b01ebec"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "cc57fe0757a3651c3a5803f7c1371fc4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "85b7123bd11039e717afaac56ccad622"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "84c17ffd28d6fb11d8b92ec1f53e1770"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a3640a56c3b86c1da8da423accd69f64"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b7a988a86f159b08df9661ed1a97e4c2"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "eb2a860edd16037d6c3c24d39c85fad1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "99ffe97a943da06be3111a8b9de751bf"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "373c0071c078c4364452c2d4b84f1eb6"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8eedf2974e401f05bae466f7f706f7b3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a0c3779583f3898f827f47ec54545ba7"
  },
  {
    "url": "basis/design/index.html",
    "revision": "bf0be585039913ef568ba00514d007d5"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "ad526bc03b7dba0b6527d81d6713a503"
  },
  {
    "url": "basis/index/index.html",
    "revision": "3450e38ac6c9627d9f23770982cd92ce"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d0330afcb4351bf6274605425b3b7dae"
  },
  {
    "url": "book/index.html",
    "revision": "68caee0a821423e3bd428ac30b19e977"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7209517f12491df0a34f87dda9e1e22d"
  },
  {
    "url": "categories/index.html",
    "revision": "432129711ffcd6ba05a73e2ec5a3d06c"
  },
  {
    "url": "figma/index.html",
    "revision": "9ba7b13e6a81b4e1d60dfd1d4759a6da"
  },
  {
    "url": "flutter/index.html",
    "revision": "8e20dfdc29dd4cf29cf4e19501bf4dc7"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2425a5d3f6a79e7cb451ca1b7720da5a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2cfb9abff1721756b852cfd0af855e08"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e88c462951179704ff15a94582f50dc4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9ecf3fa11cc178d2211fee251c72100f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "338308c9682bd1bfe8ae85ba0cf9430a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "1af9a9ed57375d1b83b6a915be19878a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c40b4a48de4caf3a81a4988437adcee0"
  },
  {
    "url": "index.html",
    "revision": "c696694ccfe6617af1fd90d74e29c635"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "fbee9d7014acc9845ef074a32f798a09"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f81792e370d43747b75d486dcb2d66a8"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "2f8eb9c949b0396408baed95d1ab5228"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "85a535ea72c371c81e6c41e2d854d4dd"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8e708d18ebbb5633e7ab9db06804f60d"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "d93688991a3e556ad436f0c84c16b41c"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "d046c4771e8c99a5138a08e4db483a98"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "551ce0b159d31cc07bd14f49356692b4"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "a50d3cf7bf597917826e781f601bfe81"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "7fa624af498749d8bf62ddd57a54ced3"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a0b52e602e589acee33a6ee0bb0926e7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a7e320080197b125b929e07278db717c"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "91979055788234c0f8a2be6a462dc050"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "6a232a3f1da17f19053ecea9c4a3b0b2"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "afd4bc83c36fa590e100dc191c50c341"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d030f8e0313fdf4f0fdac8ebd1e57a56"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "912b366f95c19ffe9e77bc138961560d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a6414da318e8fc5232640784ec720de6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "5375540e32d5d33231c754a63a1f2c49"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2ef389cc4911d4b81820d01a774fd580"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9c7f7607b8da3ff2929e98cf0740d806"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "25aaa914fcad570019d9c54c55421a94"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0638001a25c770d493216bf47ccd4658"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ee7eb1fce0b849c8d02741c0dce919cd"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "dea927d1e6f0b72d71181859a04a5629"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "717f4fd590588d92c8025bfb6bc0bb05"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "667eaeb9b13f82a402693a3271ce9a5a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7365b5f0e367ac7465241c1b5ea4c9dc"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "3235757ece91328008b978eb45258b08"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ad92e1b83b63010ce305e30ca8ef8925"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "8ae2c3047673710bb8aebc9c54a1c0b7"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "41f346c5cab166da10b0d8a29f7a1767"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "8247e62c60981658f0a0306cf0a20c37"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3b3fd76ba0887398912c9ae56873ee24"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dbf72a2d26cc58c8a90da4cdf242bfc0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "575e081725f3908dc5f3fc49d64c9dca"
  },
  {
    "url": "tag/index.html",
    "revision": "c2bcc561231eee287a4958d8be344ba2"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "19d4565e0d094af66cfc8a81e46c50b0"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "144dcdf2820aa81e51cf58c8bb8d5caf"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d86e62a1d651ba09ab17f21bf4fd7bc0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "be0af080351a04b7d664ca01de44fa0c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "39eb84c8f55e0537b48d5db029142aed"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ad8f9d3af98875b3303aaffc5a9030c3"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "5c1b8e23b6392212d171708d51a87059"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ba68f810dd864bb8e82aea08124d6adb"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a8e6719ad898cdcf255097a517647f02"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "403de0b862b081701c343ed2692f044c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a6d61a548b8588cc771ba98920c6afc5"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1a45f26c09bbe61173bdbd77f674d58a"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "590d4085ea4c6b66d22a67c392dfa77e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b74bd878ef6c7b7e82866eadbea1a8a1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "47234eae4392538ebdfaf1e40db6ea2b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "26ca8178ce6dd885da3d5725bf49eafe"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bc8e47edccbad501114db284e87e0767"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5bda4d1394bc5f1348e1473e37d378aa"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "32f2b5513d531a40ba2519bbe3023dfe"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "31abe3e92a104dafe399cf9ca72289b8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "369f5b0b82a1396fbc5813d45b7c35ab"
  },
  {
    "url": "timeline/index.html",
    "revision": "b071aa5e340bf78626badffb562f99f0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a8aff509a1248b3bd73b0f3d605a134f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8b86e87996eecbd1f87ee10fb05a3635"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "47cc1c2548f7f0c77402f337a295fcfe"
  },
  {
    "url": "tools/html/index.html",
    "revision": "87bb5f8608c6b07266c6dcb8336d3e88"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7e3700ce703b12ecf510d964da40bc1f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "aa91fcc150a3f7782a1da0fea43a8743"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "47273877e859ae3e4c0ef9f04274add6"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "467f24b5e1ba21deeb4eac5447d4419a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "68da23f229e451ead796b0deade0d73c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a193c3242f152f3978520ae9934a683c"
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
