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
    "revision": "56c07bc1a105237acf3335b79d5796a0"
  },
  {
    "url": "about/app/index.html",
    "revision": "69b923f774ef65b478c2c21f359e0168"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d3b9653ccb6070ed98da1f4844cc2efe"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "908d404e6779173730375400790ffd4f"
  },
  {
    "url": "about/index/index.html",
    "revision": "80e1390245f504fc0c1ec01b549b32ef"
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
    "url": "assets/js/25.301df128.js",
    "revision": "a1f661b64dafea70e712e8b64ab5c5d3"
  },
  {
    "url": "assets/js/26.3b1c3f4c.js",
    "revision": "7e74b34d033dbca55e4bff24f91a6532"
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
    "url": "assets/js/43.46677f1e.js",
    "revision": "e30a799220c0bf8abedced962d82b6bb"
  },
  {
    "url": "assets/js/44.8dacc10c.js",
    "revision": "f95c8540fd09442e1afe65dfcc4db8a6"
  },
  {
    "url": "assets/js/45.95d17d12.js",
    "revision": "b4fa43c149fca94ef98e6174a5f5f817"
  },
  {
    "url": "assets/js/46.0c818649.js",
    "revision": "58ed89f28588d7cb2e1ea65a283c71de"
  },
  {
    "url": "assets/js/47.ad916ef4.js",
    "revision": "9292794801e7b76508539ccba84fd202"
  },
  {
    "url": "assets/js/48.6a57d7cf.js",
    "revision": "3eaa9d065b6bad90169f6b9c3443c88e"
  },
  {
    "url": "assets/js/49.72be352c.js",
    "revision": "dd05d233a2f7eb98cda7d95d4903c78e"
  },
  {
    "url": "assets/js/5.e00cae0f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.3723d779.js",
    "revision": "0c652446180fc4073f447003b569c085"
  },
  {
    "url": "assets/js/51.5122b2f7.js",
    "revision": "518aae440877f3b0b10ea7968edca79c"
  },
  {
    "url": "assets/js/52.4dee0410.js",
    "revision": "bb98484df8767211fae8ef7d548645b9"
  },
  {
    "url": "assets/js/53.5d0ae975.js",
    "revision": "9b60cbf8b6a07fe146ac3db39b920d10"
  },
  {
    "url": "assets/js/54.24992414.js",
    "revision": "4f7a32308bec9e44f6941e98be5f3b20"
  },
  {
    "url": "assets/js/55.68b32281.js",
    "revision": "bba1a16ecc9d59308fe7663de64a53b7"
  },
  {
    "url": "assets/js/56.453b158d.js",
    "revision": "a72dd3c994a8550e0bd728356ab3515d"
  },
  {
    "url": "assets/js/57.3d6cbfbb.js",
    "revision": "1760776715b6ec7c6ca510d533674fe8"
  },
  {
    "url": "assets/js/58.ef0fe414.js",
    "revision": "2f0e0a835bde4d62461b157abca4eb41"
  },
  {
    "url": "assets/js/59.8139188b.js",
    "revision": "fe51f77b84bfec5893b74260598c4732"
  },
  {
    "url": "assets/js/6.6e678aff.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.6e9efe02.js",
    "revision": "4d044f318ab435d24bcae3a6effdadbb"
  },
  {
    "url": "assets/js/61.bdbaf0c0.js",
    "revision": "40dbd4cb1ac14727a84a909dba85fc55"
  },
  {
    "url": "assets/js/62.90d8a0b2.js",
    "revision": "cfc393541783ea84e29e4ed54232c7f7"
  },
  {
    "url": "assets/js/63.085fb556.js",
    "revision": "eaaffc2583ea9e4c01848e4ee91b0de6"
  },
  {
    "url": "assets/js/64.3e2d0960.js",
    "revision": "2ea5a52e5d58a8c8c0e1039b828b4fcd"
  },
  {
    "url": "assets/js/65.62d4f0de.js",
    "revision": "b9ae0a5fcdfa50114e6c75dacbf84be0"
  },
  {
    "url": "assets/js/66.8e85b423.js",
    "revision": "bacbd01df0ff57edb36a517b1bb184fa"
  },
  {
    "url": "assets/js/67.a5163d3c.js",
    "revision": "83e0ddab7b75b8201da754acd60116b0"
  },
  {
    "url": "assets/js/68.3bb4fa48.js",
    "revision": "88fce6d63bc489eed10f54470297d39b"
  },
  {
    "url": "assets/js/69.75d2ca39.js",
    "revision": "3bcfd24ccc31f69bf216f697df284b90"
  },
  {
    "url": "assets/js/7.923ac453.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.cd3042f8.js",
    "revision": "31ed0900d946e38b735d155ab4cfdbc2"
  },
  {
    "url": "assets/js/71.b0b8032a.js",
    "revision": "3232b8c64614e52c6c38b3e25f20936f"
  },
  {
    "url": "assets/js/72.908718b1.js",
    "revision": "f246dcd03af00a182cb153bc9be04d4f"
  },
  {
    "url": "assets/js/73.02965813.js",
    "revision": "90adb367de8f448ed3c8073bd1bc72ba"
  },
  {
    "url": "assets/js/74.f9d51821.js",
    "revision": "57f8dd7c21598ffba57fac341d609c5c"
  },
  {
    "url": "assets/js/75.fdcf0cae.js",
    "revision": "7046dec779cdf659816d9e17c1909e60"
  },
  {
    "url": "assets/js/76.6322438c.js",
    "revision": "26008adc54d6c80d1a0c5146554e0bfc"
  },
  {
    "url": "assets/js/77.2f1589c1.js",
    "revision": "75d0cff4f8f75eb1a646b8238ea22212"
  },
  {
    "url": "assets/js/78.81ea6a89.js",
    "revision": "eae314e87e194800f1e62eddcda47664"
  },
  {
    "url": "assets/js/79.80a3b984.js",
    "revision": "b00760cab66cb4a5bd92aabc0967c0aa"
  },
  {
    "url": "assets/js/8.9a4a9dd8.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.4aee88a8.js",
    "revision": "e868e016dac77b7ecb8a4e71ee9e6b19"
  },
  {
    "url": "assets/js/81.a138b441.js",
    "revision": "2a4e96a5f36822d850e6960851a42ba8"
  },
  {
    "url": "assets/js/82.fd8b3d5d.js",
    "revision": "bb7e83481c6c5cb98d359ee42e9a5ffc"
  },
  {
    "url": "assets/js/83.80b5c2ff.js",
    "revision": "8f262368801e9751f63424721568ec73"
  },
  {
    "url": "assets/js/84.87a77082.js",
    "revision": "f8175a4312d015b413e0e401cf89c8bf"
  },
  {
    "url": "assets/js/85.c6085f1b.js",
    "revision": "38495c18edd8ca21e251ded9b5a4f61f"
  },
  {
    "url": "assets/js/86.d0a8068c.js",
    "revision": "a447893b12a7fb339d1e043519183782"
  },
  {
    "url": "assets/js/87.08348d57.js",
    "revision": "1a4faa9d019cce844ee30fe756d2703b"
  },
  {
    "url": "assets/js/9.790337fe.js",
    "revision": "298e3e5f180c531dc064a7dee191b84c"
  },
  {
    "url": "assets/js/app.574db1c2.js",
    "revision": "a02ecb70774a7a01e30c68208c5ce0dc"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "818deeb9567ce92d774ed8e3377ff417"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6294f9a521cc8f2b33d89a15be0066ab"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "6d9b704324ff85b2c5e6a99527093c3d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3df41b2860cf4d454ec7c1d12c81fe38"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3eee1e449289c5ab70dd9194ef4bcdbb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "42a6223896c8dd0599dca871892bbc31"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "19e0b5a72cd04365ee97ed9889bd0e9c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "24bc638a5527c3b088c709eefc426c04"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e4c05824171f5be808464c2a6a61eab7"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3f6d284246f2b6b6e80086dc379c72bb"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f87e39d14960e6c9d42d478f3c0a329f"
  },
  {
    "url": "basis/design/index.html",
    "revision": "a879d43e62078b906b0b922e478e0d06"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "676fc8e3f7b331e3c7b1aae1b1701ec4"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9a028275fcce40da7f46c3e11cf496b5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c331a047caed772907d9709cde446e89"
  },
  {
    "url": "book/index.html",
    "revision": "89724931c6c84536fd66bd7094960895"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8c8e37b2912392637f344ab133ad91fc"
  },
  {
    "url": "categories/index.html",
    "revision": "a6abd85e0fddfffb9e087af9828e9019"
  },
  {
    "url": "figma/index.html",
    "revision": "430cce8f95b4a4be50bd8ef22f2e68c4"
  },
  {
    "url": "flutter/index.html",
    "revision": "7f84b649437a33855f887562df130829"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "086294c8bef2a597d923058208191c75"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4d5738ac6350e1951d76a3bda3839ae8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a95405a4e3531fab22414e0d3c43f34c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6ee9f38ca41ed53d2d0dca5b2ca8d09b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "67c485de5e534a65b581ef1d146af426"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "eddf09b11e9442d05fcc1d780e8ee8cf"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a8cba7a309243de94d7df30d5c9a8bb2"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "f2fe9be6e18df5b04ebf0cd73b27a42e"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e34bef8023dfe9b1d7eb8d98e37ac671"
  },
  {
    "url": "index.html",
    "revision": "20e4af740627a91d2e7f44458285f415"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "83d439fb6f81ca9529ec1c6686dc9a99"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "16bf3c39ad59b23704563c5a74b5d944"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "834ab4615ff3532541071d5dcf6d136c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9ee6a3a21e8135a7951f55e6c6e37d20"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "113fb6c757f6aa44b410770536bfd955"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f93f9f381f3ebd46e20869fbb9d70627"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "039c47d153aa752eaee17c2955693efc"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "5028fadbd4e0938490bf059d40697471"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ae116b449f9198b8cb919b6f425363b2"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "950bd380f4142480973bb785402ae5e6"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "212919dd30dc18d06d2952569057e77c"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "63a28e34953806122ea376cdf5563e04"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4d4fbd8c5960ba21bc0e8085bbe5686b"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "cd55ff80e99aa601fa23e9250655fc8c"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "2d945a5ce04267bcc21ed640ce6d6776"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "76a56e33d96efc14f05ebf96fbaee988"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7a14701c1eb760467795d01ce2c8da1a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "cd4fb5eb7313dee222318c19f2e6c35c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3a43fc5887a93ca3b1365be79bed31a3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8230c94c40d0eaeb5a6f4fd4c769ef8f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0b386be02cc197e839e0b8e2961fa9c8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b092b29e434796d4aec866031657b934"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "1ec58c03703da758109b39c0bfadbdb4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f6afea2aa10fa880db8ad2c312e48c8b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "5474ce722cdfded6a9f5770cf4ecb748"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "18975ad8710a1a4bcb454b35a68a927d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "fb7df80baa0eddc681caf6c34b20a90d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "82cab3eec0347da876f74dad8936b7a0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f20c98c6e0d108c7787cb5d1d5979dcd"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "60253e24c81d9ce5ba27d13676973e9b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "69b257ce5500a0351900d5c8aaf8027c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "c9bc4f06b5ceabd64c27d5c1717e5ae5"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "ea3766bd0a306f4d76150eaacb1daa0e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ae23904d7dde7fce3f8c68bc338e4dae"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a056e89ec068d7b6a9ff61d0e93b455b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6f44cebba2e595345efa8b986b8b8116"
  },
  {
    "url": "tag/index.html",
    "revision": "08d910b8bf785709a23ab1764d8b0a80"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "26a19943c8bc971e5ba31532c2377ae4"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6ccca17338371f516c8a8b973c315209"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0a1854631d18404606c0885a818f3929"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ab0fb9be8b248b28f7f12a69b61747c8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6dc22d01afada11f15d534cd259208c1"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c434b21cfc070f560e04f659f543ca42"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d43394ffada99a96623b5e5ad0f95cac"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1add36772f482fcbaf2585385774e2e2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "dfc6e2bcc645b8c1331a2b042fb91e68"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "73d23bc09ee3d4caeaabfaac574441a7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "9c449c1219a89858c25daee900619b80"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "92fddbbcd26b6d4a453b15eaf12f92b4"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "efd638d231bbb3f97204445635bc79e2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "16459b064378236a81392c8abebfc132"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "bcb470872b6a98c8759a084e17a1913b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "5434edffef64114d1fca4409aa0148e2"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5bc60f4d037ca5c2c5818ab6354d6157"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fa580531e3165a6b9ae12339ef020d32"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fdbad87d1fcade5f75781018b28e8c41"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "809943c9e93e64981b26d7b56cbcec98"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "008f586cecb1313ca372917856b7c477"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ebd203a5d793689ce7c87051321dfcd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8fc738b6f01e6f429061a38ab14558fa"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "85e2bb86ded94a0737d390f2f7551048"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1c7f9780beb635589d0b76f95799f374"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8595c521b4a41989ffe7547023b31cb0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "9d09591cf919a943956087e744daba66"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "277a5385e4e4b7709da4350ba6d01106"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "72bd16656b66f30193edf74ff256380c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f93f808f6c0c183c46d355db7bf664a9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7372687393c730b75109a8c9a4c28c20"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "47e89f74435f95060291ab77e3e18471"
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
