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
    "revision": "1ceacf044256ea72fa0336083f9f06e6"
  },
  {
    "url": "about/app/index.html",
    "revision": "8f2dde73cda4f5c384f17b9773a32efc"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "82660909c940becfa7d148e08a13d9c3"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "1c81adad0d2e63ba7b856a280e251fd1"
  },
  {
    "url": "about/index/index.html",
    "revision": "2ea4634ea93d6d5bc856eaccb6ed964d"
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
    "url": "assets/js/45.2750617b.js",
    "revision": "4f63a5a2ffc93d24d338f656fcb68b03"
  },
  {
    "url": "assets/js/46.5c964cf2.js",
    "revision": "fd8e0105a6cac749ea410b7202973c61"
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
    "url": "assets/js/60.525664b7.js",
    "revision": "dbd82db1cca20662f1799d07903585c2"
  },
  {
    "url": "assets/js/61.1c2e8d90.js",
    "revision": "f8ae559d7ea7904afa5a4ceccd729536"
  },
  {
    "url": "assets/js/62.db4ebdb1.js",
    "revision": "355822a479c7767ae5412d6a66388efa"
  },
  {
    "url": "assets/js/63.ff23970b.js",
    "revision": "c512d54292d2efb5f219eaf4ff980043"
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
    "url": "assets/js/77.5127fb64.js",
    "revision": "cd41bda62aa0fc53e8e2ccb9b87e0146"
  },
  {
    "url": "assets/js/78.f825b3bc.js",
    "revision": "26c30260bb64c83a376daf3f92ca6768"
  },
  {
    "url": "assets/js/79.90a46ed2.js",
    "revision": "19746318d73da5d182cb5aafcc0a49ed"
  },
  {
    "url": "assets/js/8.f39fae09.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.80d855b0.js",
    "revision": "3d0417e5f0ca8433164d4cc629da2ae9"
  },
  {
    "url": "assets/js/81.9aa14311.js",
    "revision": "89c145b42dd44f698e97e36304c6c9ed"
  },
  {
    "url": "assets/js/82.0d39d6a4.js",
    "revision": "d1a2b0ce9fd60c461dc9d32f0efda593"
  },
  {
    "url": "assets/js/83.519c45e4.js",
    "revision": "ac292f7f5aeb051f2ef24ad71ebb7a7f"
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
    "url": "assets/js/app.7b0e9f27.js",
    "revision": "7336b1f14e6c91ad9c6a860f63cd6f8d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b91445a6d5a4eb1ccc7da588b2fce6a4"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "cfea374dc42dd9cc1fe3ff4a34484aa9"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "72a2b3cfa09d19d98fcea7fac3c62acb"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "38277cf6bb638a63ac61d77d0956e613"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6748f3fae9ece03223654b13359f8431"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "236c2b1b3132b5fac47932d50690cadc"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6098ed22962ba31ef3a9bd12fe318652"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "adc8e0709faacb841049220e61c6c3d2"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "143c9e7166a81c828d8741506019e2b1"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "21a735e014389de1b0c29110c1a90363"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "6a44bb7446501ec3408c9b4e23582fdf"
  },
  {
    "url": "basis/design/index.html",
    "revision": "49bcb7ca0e5adbc2f22e5680d4aaa174"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "faa7a416e0a1c7b0dd13a78b2213274f"
  },
  {
    "url": "basis/index/index.html",
    "revision": "10744d596ac646fcb494ca2cd7c6235f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f7088fb4b84eb79152fd848dd85485da"
  },
  {
    "url": "book/index.html",
    "revision": "f458beb599e16d64d4bd2309fdd50163"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9510d5f0257c7c3c3497a01b7ccc4f8f"
  },
  {
    "url": "categories/index.html",
    "revision": "03fcae0de785d7e2a914edcb1e5a82e1"
  },
  {
    "url": "figma/index.html",
    "revision": "47e5237d44c6e54fdceba1216cab5d08"
  },
  {
    "url": "flutter/index.html",
    "revision": "47becc9986264973d9e207cd8bc0df62"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b82364a06f3c37179c1af794ac2a735c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "fe5608d3e8063f79c6e92410990b7189"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e4d7b2d4e9aa1d555fc0ad6825cf85de"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "af05f491510e3b84d20ba0c8414a0f75"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "cc1d2c4e2381607a903f28417b3bc1b4"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "fa027b07b29846af14f5965e5d8926ea"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "80610fab689fe2024bdfb52d7b1d72c9"
  },
  {
    "url": "index.html",
    "revision": "83fe715a05086de95524594d22a37cd1"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b1cfe98d7b4916df8a7a4c9ae29aa75b"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d4c74fb0f705989d11b7fb047ecb8f16"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "6c7d7ec94f6dca19f0d57d40fd979c4c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9f0c38d557633b941fb8b6ec741d630d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "fc28a69a494c3bc7ce2b5e39c6c8033b"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f63eef33ca71a0bef070b28f8290191b"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "472b232847f3c485614085bedc06c81d"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "32a1e5c991c64e8bdb106b23bd6ef286"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "20eb34074bb36d51a1054edaf845d043"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "d623956b6f0ceeda4ed83fb9445b13f4"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "ce1160c67060104b5b9fc3238493ae89"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e11fa1340714d53d124e483781cd663d"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "e603dc3bfae402443eb7cbe7c4754b6b"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "8352463092684c58a057ac49961a4746"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "58acf331844fe22508a56f0d0dbc90a0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "f1429af15728c5085f46675d78b7a3a4"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "38589a36d6d446928f1e83bb12e0e424"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9576ab24268f66180651987574759ca0"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8d7b234061209e43822e0cf27087533f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7a8773bd124f1204dca53ffa982fd39c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8cb76978d4ea28980795d83a9da96707"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "de665761a90ff227247e3eddfbb2cb24"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a3e4da7553d8eef01edf4da65b31d322"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "44252bfb0758d402fcb88cdf31c4c270"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a6e4e4105e8233d2055edb137204412f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ecfd4c66de3169d0286fe6a80333f035"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "4ac2b7883bc20f588b2ebb9eaf9c3285"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b1d7c627e52650af0b1093ad2ecb5335"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ee9f9f8c7729981fffa4da8a6b16a323"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "046bd875ca2ca8b1e44557f709bad4b0"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2dc1c8d2d5733e177f3434ca9f974f6a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "c63f9154ce47ab784b554f66bc6f8fb7"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "cd2e88e1c4d246c130936d7dd1cdbff4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "71996cdb942c1c52ba7fb94cd4520cec"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7a95d0320c95cc4c30aec77cceeb2488"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7c819427718dd56d4305d0451c3766d6"
  },
  {
    "url": "tag/index.html",
    "revision": "f6088854641c3016cb13b315fb94fa3a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e05f6865aa1e5fff988863ec0b58e86a"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ff4a031b89516e63bbe00a5a8c51edef"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b1fe7fbb8d5e28ac9b34d2dff7da898a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a1e86987d56ccf5770071825f448cf0a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4435140bc6c32f785633413f167d99be"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d58a50933364477ce12d46be33d634e7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f0eb19cf0e7723ef4b74263713cb6bf5"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "37b4c9648e64008e7ca633a2aa3ccfc3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d344d8ac85d06c2a0ed2e2c9202c3139"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c37f1895d344721bc2b31c3b03bd2b60"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "bbbdfac63452fc5739fe8c26b3486f43"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7997ad03a491abcedfd490f54711d582"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1ace9c7853d3036366a102c471ee97f5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7fc64cb0f566f3181c1d1fcada6075e6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e0c03d312c1d79b26abeaf6a81fad428"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8f7bb238405bcc4cebeceaaa961bfa04"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e26b63e48d9eabc89b1d30c9d6d289d0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9558df473a383ca8fd2fcdc30e404109"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "604c47fff85c3d106d0f417afa9018cd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b42e617f8af1cc801943934a4d24662e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a7e137b6bd7cfc5134745c8dbfd401c6"
  },
  {
    "url": "timeline/index.html",
    "revision": "80aed5a6adabb0bde6612d89c084345a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c8f88bad4f3c03a3a57675feca02a491"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fc53e586352baf50464ae2e91ff72dc4"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "19906179aa6c1b3a498a288d675ea9c6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5f83a3ac584086e8e118c63a1dd744d0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7360db92305611b64b2a72bbd7d9e5a3"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "73802d0e707413dcd2ce3dece854d6b1"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "acf13b98a7478814c089971789c4f299"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6fe3593baf365ac4aeafcc70b3e86d29"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1322811f793fa29730bc6408aa1835ea"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8a459733c121bf82e284ba06345373c1"
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
