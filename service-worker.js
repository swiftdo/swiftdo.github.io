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
    "revision": "a81d62c510bca028df1e215f4bf127ac"
  },
  {
    "url": "about/app/index.html",
    "revision": "7908fd39ccf7ff9ff80f2d39f986db89"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5276466b6f71272b2333fb48f5c70725"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "518342ce4da5a12fe83341513732981b"
  },
  {
    "url": "about/index/index.html",
    "revision": "b8c691df2f44cee00689e855906baa5c"
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
    "url": "assets/js/11.c02a1f1d.js",
    "revision": "8d6e3ecf76e09905205596c703dd4c75"
  },
  {
    "url": "assets/js/12.e1c7639d.js",
    "revision": "2d0ed3506ce44398e04ad4927fa6c442"
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
    "url": "assets/js/60.09029981.js",
    "revision": "baebd621b2d0408fa98345c71821f203"
  },
  {
    "url": "assets/js/61.87cc232f.js",
    "revision": "2e6eb6e81cd0e6ce8f8c1da3f4f94917"
  },
  {
    "url": "assets/js/62.9e41ff79.js",
    "revision": "9fb7b4b3875f5e4141b9eb8ba1cd9286"
  },
  {
    "url": "assets/js/63.febf05fe.js",
    "revision": "fb632bc29ef154a776e594b4e0b0ea11"
  },
  {
    "url": "assets/js/64.227f802b.js",
    "revision": "cfeac1c01ac5d1556a54ff284c0f6f1f"
  },
  {
    "url": "assets/js/65.1fa86739.js",
    "revision": "83072baee39343ecccd95c6dada92abd"
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
    "url": "assets/js/69.9f381521.js",
    "revision": "6202c690cec48f8acb86c0b796bd4fd6"
  },
  {
    "url": "assets/js/7.22555c03.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.7a91e993.js",
    "revision": "80363e499ac2314e800c5911f53eb09d"
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
    "url": "assets/js/app.1521d38d.js",
    "revision": "214708757a0d900fd947f9e6b17a056d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "17156a41b8a699a873ecf264d2b48f22"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "bd59208c2540f35a9522c44fc9e5f9fa"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "225d835496af8371399dc9d2bafbed26"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "34dc1adfc0dd3732c5b4c9e52f08dfdc"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "fb61fe7a3912ccdee1e663813df6b98c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "00113a3baf8f19997cad6591c432da2c"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8ee692ebd1c5a505e9f8ef29b207c61b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "418e7eed91b9bed3b9474ff9564c93a9"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3f715e1d48be35187dec753552caa987"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "7f324702ab71f058ac9848b811da6a82"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a8f34e58ce5cfed432d84667311421c2"
  },
  {
    "url": "basis/design/index.html",
    "revision": "4a6aa90edd44cd3bd84579d1e68a133a"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "c96c6bd806667a2e4dffe58d34f2c69c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f4590b7d3a0375b0548dec35953406e7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "bd31fafb80eb2b9bda6dfcd4666714e8"
  },
  {
    "url": "book/index.html",
    "revision": "e2f56a103c753d3702868ab8aa0c0c4d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a7ef6c6fc769820bd15a253d4d045ad2"
  },
  {
    "url": "categories/index.html",
    "revision": "ee5c76bded45600c417dd4108b462d9e"
  },
  {
    "url": "figma/index.html",
    "revision": "9f4de2064e88c6e79251a1c2a152e12f"
  },
  {
    "url": "flutter/index.html",
    "revision": "46c9225849bc410ba30a2b11fd6abe23"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "14e9c41ab433107d76432156a07132ed"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "00faf7bf70956876f46b2845494c6eb4"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "083c53931c4724e6e6803cf6677fbf78"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8e9ec1e06fa594a283f87ec2cead7eda"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d01f47ab346e1022a9977f9fb83b259a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "dc241bcf1209d23b5bae1c014016e77a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e2ac7969456627beadc51a56de59e9ad"
  },
  {
    "url": "index.html",
    "revision": "14939496f6b6b4a96420b674cc0a2f74"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "dccc64070662cf6c44636ad37d2084ec"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "60e4c7228adc3c7ccb646399d9c173ea"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "26cb046d7cf9aa144833dc80a34af763"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1a677e3717425e520e071d1e2fa5242b"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "703ca76d4432a9985e96359b75849dfe"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "10ccea6ea2dd3d80e055d8abefa3179b"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "d21f9d944c356891b56c7b9e2a5662bf"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "6b14f5e0aabee8fef1653cf75d860a07"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "1e5754ea4581dd01b7ab12c9cae06b79"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "778d26220dcd2fef7c5006ca1d777389"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "f2cbf8bfa18100f4e24aa4cf21116fed"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "94f3b292416269906097d9116871742e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "372f77cc7f066ed4d5c561db2a70a6c8"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "f142a273d6b65f93195b76219167add3"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "ad53c2c8434a6339f08ee629bd747848"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "89e8aae494724f4230e6018accb08b72"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "5f96931fe3eb519523b65584e1b2e0ae"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f42a459af002a0e0600f4eee96551aac"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9120e8d97d3b95b8a91599a3aef5ae7e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e6a43752abb2d7af9b7cfd73a81cc680"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0a38d0d2c6a15c5966f3e7f2aa517857"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "51bde2dd5e01d3ba46d102b66bf4b259"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "dac38a1b0b12a4d1ad5ff4c96cd9a278"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "acc65fd601f3298d8c71b2aae38ea1e1"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "4b156f7ccc423be242a3fc437321cc44"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ff6772feb045549fb8c299c32cef4012"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b162b7f024c26c9f2526064efa357948"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "0bf179a28719c075b2bed471fd5ed9f9"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d119dcce5b99e528cf69d46f59e0e413"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "3577e0136e27716393f714077767f6ce"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1fb317297472557ef5fa48a90b4d9ec1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "367ca9d82116b4f90005d3cd41870929"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "2b771fc881cac94b5b4a4b3d91cd8461"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "7680757ec7df2a32415796b3a96b0682"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e3a967f7c0720b2ccb4270facf59f6b9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2be1503398916005a8784d919c8b7643"
  },
  {
    "url": "tag/index.html",
    "revision": "7f1aabdf88290fd7fcf7b85dda109e73"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "8af546fbbb2f7a89ec69575f3384bbb6"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "99f57dd81363d9115638a2a4cb7d5961"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "82f307d83a4cfd33e5121ef4b5af7943"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a09dcad2075ef8811f575d1267cd1194"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "62ed9d87be51c9750e7717e7dc9288d3"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "751399052a6c79f7e0b009434b29bf40"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "8d59717f733e1ecf22f876fe22e486e8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b51a2c3e740500321ab409d9e4d65e81"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "884c19c97caf38feeee812b4eed8f8d4"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "455b079c335a295ad4d858250c7573af"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ae38d2351193e5b232300eff55b8354c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f66a65060e875caf7f0e5fe720ddf8da"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f48f4216b1bf966c3092e47a81cab0a0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "62e2c0ad1a522f82aa8358bb138f1935"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1bf32a70b2b9e951184881ae0e90ca20"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0cd02a17775acc328d87777f7dfb93b6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bd8167041d4bf28cf4f0ca781fbfb3a9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "395621728848fed0752a317938a34a6a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d3f21fd24de56178ed9cb5a3eefb8062"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0f8e3d0ad368aa248c86bab5c3f97c0e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "711a2353e86122a7e6f61fe80fd3b477"
  },
  {
    "url": "timeline/index.html",
    "revision": "94c13b83195fa9be0bea5776f07c38e3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4c941621663077803c03c7bfb9833ffb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ffd8269edd252f7bd3d0e27d1731a1e1"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9957c0b97bf1c929399bede2647293c9"
  },
  {
    "url": "tools/html/index.html",
    "revision": "721474f9bf84f29e3ea0226b3dccc5f4"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "b54819a3f75c8ccf50737b71b51c191d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "57a9ec3342e860dad4122a71b2c4404e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "fcc2f47ac5da6220041ba622b2e5d49b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "59a2a8a5407e668d4bd7080e3ec37e3d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "eb6c0e7eade695dfdeb9fbce96aceb18"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "46732510febcd504f3ed2831605726e8"
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
