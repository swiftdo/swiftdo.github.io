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
    "revision": "c5f2670adc8123766c02aebf947dc4cc"
  },
  {
    "url": "about/app/index.html",
    "revision": "19b5731d66a0ed3bda8feddc1a80b79d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "bdcc5c8ea134be6444dcf3b1ec604e0b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "76b7f63d1422379bdbdd952aa38c5b67"
  },
  {
    "url": "about/index/index.html",
    "revision": "3afbfd67af8463eb05c39e61becba0df"
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
    "url": "assets/js/18.f5bb9f53.js",
    "revision": "34a9835d8cb63df223fe9f4db4bd1f21"
  },
  {
    "url": "assets/js/19.da57514a.js",
    "revision": "68ec63f6898baed2185ff24242742f78"
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
    "url": "assets/js/38.2bfb183b.js",
    "revision": "b64ea6199d6d991b072538703cfe2c1c"
  },
  {
    "url": "assets/js/39.fa4dea47.js",
    "revision": "526cc2119a9ec1dddc7ad1f6abee6d2b"
  },
  {
    "url": "assets/js/4.bb802eb1.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.51834a68.js",
    "revision": "2be9029a05ec82498a9af11277acf700"
  },
  {
    "url": "assets/js/41.ccccd788.js",
    "revision": "999244921ea51634e39d362abdc9809c"
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
    "url": "assets/js/58.8f8eee8e.js",
    "revision": "4ab075f210a87c08a4cdd17cc4041329"
  },
  {
    "url": "assets/js/59.ab23fcd1.js",
    "revision": "e6b6bace034cab7716dd3404f1e08de8"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.d25d9b4c.js",
    "revision": "e39a44bb56bb5bb8b9f3240c7c59ead1"
  },
  {
    "url": "assets/js/61.0f2001b1.js",
    "revision": "a0d0dc86012e53e5478221a9b0087e91"
  },
  {
    "url": "assets/js/62.94109919.js",
    "revision": "adbefeff5680d10beb4a15b180807d2c"
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
    "url": "assets/js/70.9ad27eb5.js",
    "revision": "407d570552e280b2cb38e9348b7704c7"
  },
  {
    "url": "assets/js/71.468bca35.js",
    "revision": "eb9c69df7fc6c48af657b52ca35b8175"
  },
  {
    "url": "assets/js/72.2e53e055.js",
    "revision": "286ea374e467826edd03e4aa77e41141"
  },
  {
    "url": "assets/js/73.623c61cb.js",
    "revision": "988e75f8614732c066524283fcf70172"
  },
  {
    "url": "assets/js/74.eaba2b62.js",
    "revision": "71bec1c883cb793192cac7af5c441a60"
  },
  {
    "url": "assets/js/75.32173bd5.js",
    "revision": "3ba29c3415e9b85dc74ef1ac76dfe5b0"
  },
  {
    "url": "assets/js/76.9f87450b.js",
    "revision": "8d97f6a30efd32b238a5ff13b7c62147"
  },
  {
    "url": "assets/js/77.6f335aa6.js",
    "revision": "fa12c9c4b697e3b95ff16161a1e0a3c1"
  },
  {
    "url": "assets/js/78.ee66634d.js",
    "revision": "6bf92021e0d852c96cf960c07c27a7ae"
  },
  {
    "url": "assets/js/79.e26664a7.js",
    "revision": "5390d3309382e4c837576c0970b17937"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/80.9f863fbc.js",
    "revision": "99a1b065699c876a60bfeedb9f955167"
  },
  {
    "url": "assets/js/81.dcfa3123.js",
    "revision": "198080c2e81b2dbade022063541a059b"
  },
  {
    "url": "assets/js/82.f93371b0.js",
    "revision": "6c63a052f8f3329479336a5fcf7209a5"
  },
  {
    "url": "assets/js/9.c63fc6ed.js",
    "revision": "5da331455a8cb69627b9241d40d8a6cc"
  },
  {
    "url": "assets/js/app.def372b8.js",
    "revision": "b32d4ad5a1812f60dcba48f0e332bc4e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b684fe94449c735b3c5f99c8a017d42a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "021eb191ec5f3985e81f809806493831"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "63df8236f57f4e4af8f07495acf5b2bd"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "47d90b8ec2ba2b74824fd7eb64e9df02"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "d8b615b9afcccb7087f91dd5997f8b62"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "17bf649353a959f0ccd8d67faf390883"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "727d1ca61689f2f9ae9669dca043f3da"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7b971021e65527cec8afa6b300cc5bc3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "18e07e90afcf1658b11b36464e4d1ed3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "2ad179ab7de1370f40444832b85df8e5"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9f0e66d7767e30148172b34610f87630"
  },
  {
    "url": "basis/design/index.html",
    "revision": "e457235e3293b2001a17f6b16b4dddce"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "c6f41d051a3af7ce493cc5f082754264"
  },
  {
    "url": "basis/index/index.html",
    "revision": "51d8f24232650e1acd8aa979b70ef493"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2f1757aec70277351f9558bcc8ee1808"
  },
  {
    "url": "book/index.html",
    "revision": "92b2f2a6e37e150574494b1f68bea1fb"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f4ffe1d4ea9d510901f4560aef7ebb54"
  },
  {
    "url": "categories/index.html",
    "revision": "9b749afe9059b7a6aa09e4e34050807c"
  },
  {
    "url": "figma/index.html",
    "revision": "a4808b0fc6a105cc17513a9380badc11"
  },
  {
    "url": "flutter/index.html",
    "revision": "cb8b176c522db1f7b376a2ee43fe34c3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4e56b68d28d75d7c32ffb8ed79d3e7ae"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "07c1b1f2e2a1af2c058923af0e5b589b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "3d84e1c3c5b73b95fbf8c5a4f0b3f7ca"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "160a73a7603c3510d48b4ad17a4a5777"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "67190af693fdb78ac0f11b558d9f5729"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e97ac920af696f22d7892e404596d89f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "583e50190d1e1e6f0e7e706205c1278d"
  },
  {
    "url": "index.html",
    "revision": "c2fda793dfec7f6390cf4187b1ffebb9"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e8872b947e3e5e0aa8800841f117e142"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "cbf2d342a934d09719aafd940b7ed91f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fd0c1ca012d4e2900ec59d47ac2c3da2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8097164ae0f0d411ab793b242c367d15"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "7aeca3c6838059e5e5d3d05bb76747bf"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "79231a6ac2553db0dac0f57ee3ec31f7"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "cff35b1fc3de552c77a3974614b01837"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "bb5d7172ab6419c017d5a1dc4b9b2663"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "eb1d8bee17ddf3ec6c18373794c20573"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "08560f918b7889f40ad5487396f08c15"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "63a2b78a9ef2262686250f5d120f6594"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b15ce8b4e4f2d33ab59b218b75eb0f49"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "ad79656882bca3acdc61fc9aca26f998"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "bf3d06bb317eadcae14440b915d475ba"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "a86d19874bec053dccb83ddeeb87d504"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b04f3daeacf5250ff9dfc46508bc8dd0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "5661339d8aaeee841ab5dd499901d9c5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2d60ff670831c34c8eaf12e7f516c7eb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "362ce15d35f9d5ca86abc7275a9b776a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c2e9bbfb66fa753a11cc21db9cf95030"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f022710bac64d9cccf690ddde8014a90"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c329c3b81c3667ca7beb25b17205ac81"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4125c1c94ada8ae7725c57804176e0fe"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f1d04ac423e13c9771ef028195e1518f"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "df491417465c875c4e6686c424adbd19"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "5ac81a352095261da7084573a98af6a8"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "eb8fb89373dfc73847fe47e1c8eadbad"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b79b008ca5a0cab439857c8a58bb0019"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "dfa0845f5371cd9a4f4879657ef07cf4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "108dab58ad93469fcf61e75e5d4ab648"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "fbac5d7b678c6d05a2697705075500b3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1667c6cf960101cd21cacc21491d0c68"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0958d76b9d998000db98354efbe7a195"
  },
  {
    "url": "tag/index.html",
    "revision": "13a80105146a31f5e6de15df90ba8d4b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e8f08183bc0da8b45f8477baf0ae526d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "482340a952abdaddb754de209a53cd5a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8b2b9e483a6a4be6b0fbf753e55a1722"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6f847fa9a2c59433b03dac29125b2e93"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "d8195b4b7aa6b0272508dde481885b34"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "37daf60bf63d48063e3bc3a1093b21b9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ee92c8fa1a5ae16b46babfdd39ca6548"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b6a01b198c1bbb83992b673beee0dc11"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5a4d1518e2c5d8c827f91e4a8b291359"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d543eade533a319a64fd6a6ae707e8af"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6bef8dbc29cbf2a60989dae7f6776f13"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b845a440d3198f1801fa300686d343c4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c1158a5e8d0f6cfa6c6e51fdfc010344"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c595231c7b337fa54e5a464ad02dad83"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "634da6e564bb6e530f4e24202f04e264"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "774c0147e75bbea9ed2ed867b5b04e88"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6a39c8fab3ce75048072f4e0a3889f19"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "268e7ff6698871eb5f10076c9784c025"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "cfc07d22ff0b3203df2033394273b04b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "eae4cc009421fc02416ca9448a1a0f7e"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d82f691099d55037bb78d94ea6b6346"
  },
  {
    "url": "tools/git/index.html",
    "revision": "25b8c027e6936a429b173773ff555663"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2a2d2e39620afc630c03a64a95423a92"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "83fa099f61845f742b609cc36df03cd4"
  },
  {
    "url": "tools/html/index.html",
    "revision": "416df2c4f5626a773b69ff63b4e23ab4"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "90985616a8768ab9e428664e91fd41dd"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8d08d343c03035b133f584b64e64a02e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "35ffb39ef79d071b5fde0d0c28990427"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "83bf43561117e898886de2d737dc1351"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5d053db402dfbff555c3eb031b084720"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a886a5642eedbbe68b9ee3ee089d59b2"
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
