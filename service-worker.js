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
    "revision": "4419faeb00a5cb773b6a45912f193f3e"
  },
  {
    "url": "about/app/index.html",
    "revision": "826c0b878ccacb6f6dff40025c492d92"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "deea142ddb88d7152979984fe61e5318"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d307d7652517042efd4dd22853dd7efe"
  },
  {
    "url": "about/index/index.html",
    "revision": "0925d02679a7000d55223a87dff2c2f5"
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
    "url": "assets/js/11.26bb3e0d.js",
    "revision": "c4ca3e063b638095141e1da0739f087c"
  },
  {
    "url": "assets/js/12.85cf56ff.js",
    "revision": "50dd455421a33e481896ca971d509d9c"
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
    "url": "assets/js/40.a9cfc374.js",
    "revision": "d949e5c5b69b902efd58f0c99707cdc2"
  },
  {
    "url": "assets/js/41.13c01d73.js",
    "revision": "47e5c0d18c2f572bc80cdfcd0beb9ab2"
  },
  {
    "url": "assets/js/42.7d98992b.js",
    "revision": "7e6fbf6be28aef46a9a35ccc1a3fdbab"
  },
  {
    "url": "assets/js/43.d1686fee.js",
    "revision": "fe69e3097cd03b40c326e381eac0f9c4"
  },
  {
    "url": "assets/js/44.9921f5af.js",
    "revision": "103a61a626843bf5725fddea770a2872"
  },
  {
    "url": "assets/js/45.fc3adc59.js",
    "revision": "62351949c7296f7a05901c7ecfca0089"
  },
  {
    "url": "assets/js/46.1111093f.js",
    "revision": "67648065c3cc55865a95beb11a99dc27"
  },
  {
    "url": "assets/js/47.4cd5346d.js",
    "revision": "5a3fe30e4340a7b9705ccce07f8e927f"
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
    "url": "assets/js/57.61fd9ef4.js",
    "revision": "003df451ea09ff443c89a585cb34e3b4"
  },
  {
    "url": "assets/js/58.e3445369.js",
    "revision": "01ac0afc0ecda8b21afe5d69e6adc03f"
  },
  {
    "url": "assets/js/59.dfa08d0d.js",
    "revision": "dca6684855b414f95d7878f9be0fbc5a"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.2443d66f.js",
    "revision": "5b88bb13d68e10905740f3e73ed76741"
  },
  {
    "url": "assets/js/61.a83517b7.js",
    "revision": "28348736474fcaf2a754246e3a111df8"
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
    "url": "assets/js/69.cecd447d.js",
    "revision": "bd17c416442f4c8b3df2eddd631b66b9"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.fc2fc98b.js",
    "revision": "4ca9c33ac9668dfeaa4aac90abfc901c"
  },
  {
    "url": "assets/js/71.58d4f167.js",
    "revision": "3c5ce3670378d73c33017ccab0630640"
  },
  {
    "url": "assets/js/72.965350c4.js",
    "revision": "cbecde3b2c23d1fe2a365d05aaa2a29c"
  },
  {
    "url": "assets/js/73.033cf673.js",
    "revision": "b1f302f2e0771562951dfc3809def9d0"
  },
  {
    "url": "assets/js/74.934a3c18.js",
    "revision": "f80fd453b68862efdd31648981973704"
  },
  {
    "url": "assets/js/75.7413f422.js",
    "revision": "15aa72456f0842f25dbcd71477895a26"
  },
  {
    "url": "assets/js/76.0e861be0.js",
    "revision": "53723995b93e5512b1df000120c361b8"
  },
  {
    "url": "assets/js/77.64acfaec.js",
    "revision": "19bd43c11d3fbe26410058e92baae675"
  },
  {
    "url": "assets/js/78.7887f73a.js",
    "revision": "626551d2a67c49e7aecf730c00a7d8c4"
  },
  {
    "url": "assets/js/79.2839470e.js",
    "revision": "22ebd0abbb1128bcb4b9ea61af8474ea"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/80.bca5764f.js",
    "revision": "23246368e0ec8cab5aaeeefe3e8d4d65"
  },
  {
    "url": "assets/js/9.944fc770.js",
    "revision": "f1eb8b2cd0a1789ca9e60a00fb481cfa"
  },
  {
    "url": "assets/js/app.da288fe9.js",
    "revision": "53593aac84cc4d8fe04300917e6b4fdb"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "16670379c38a22a5db051fe69b0ef29b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "02d4426f933d240209684974966bc1d4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "27a286756d0805b2bf2f41f853026ad2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c39b186058ab0b74fb9a39cab859f14b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "207f8802cc1935356fff6ab4c6a672f8"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2c312450963e9429f4f10abb79472052"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c0a4c583d0a5b9d9c543ff8ef5dcaffe"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d591bf59fd197b8f0ae24c0462705c05"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "85844b2dcebfa23806007961a229b5fd"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "bf8a8747122f82cf3bb8af25236e3bc1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8f11a1afc972dc426f167cd49a7cf6a6"
  },
  {
    "url": "basis/design/index.html",
    "revision": "049509658e6932adc91e9ca2e6d42b25"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "9674314b8c23ff891bc1f7039dbe5031"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8bbca97fc86824815b1f7893784ce2cc"
  },
  {
    "url": "basis/os/index.html",
    "revision": "da5c7359992f2a345c2196c739141c03"
  },
  {
    "url": "book/index.html",
    "revision": "88c6f716e476efa5463f4031ce82fae7"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f4e0f3c44b5d197b4bd71fe626b74361"
  },
  {
    "url": "categories/index.html",
    "revision": "78c3825903240be7ca61402e51e3c859"
  },
  {
    "url": "figma/index.html",
    "revision": "91ae532658e54a21dea19e8d86a8c6f3"
  },
  {
    "url": "flutter/index.html",
    "revision": "037b06f834147e8db2151d511d3d7014"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a3b1ef85b1765ef24023e3ae4f28809f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "52b7fcd60247658981018bf577e3801e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e8f93462c69772dddf3fb4c86d32514d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "cbcb4250ea0300f0c2ececcb0c9fffe6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f6f45dc5742f5bc827dc4b51a5461830"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "429926b063e70d7acaf4c812e74e72d7"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5d90c126023fca4b5976ed6e1760f4a6"
  },
  {
    "url": "index.html",
    "revision": "125f3162f70f2e5a29827b88b721963f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "160a76949dfa37a4d9bfa8e49521fa68"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9ebadc02f63045351fdf16c9c7c7da55"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "9ad72a5ed0c9695db0e09655aefe129e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "45c9267cc962f7b3cc7d8f6bc49968a5"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c80680972b766b0410bcb3af639535b4"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "9af2f5253ec62bfdf9d84a6a36bfb578"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "10c3fd2859c7003c4a26a64ec48f9cf5"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "11fab5912b2788b11953dd3ff00a1070"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "16898b529bd5598e6beb40793ed712e7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "b7acb107ddc9ea36aca9fe32cca8005e"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a9c656adc3badd45ba608a746d1d8456"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "4caaac15b8cf200e6e214ddfa79405d3"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "34ea5d019517a4e057029f83e8c9be9f"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "a56f383b0158d39ebc4de774fd902211"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "0a89191faf3b51dcc609aac22970d64e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5a3f6d7ade41010d062add40e2be1ef8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9cd4292f14b0fc32c018e003dad65473"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d2fff956c360c3698560a74e559691ba"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7e25b67a603cd618144ee55af89b36c6"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "dfa3aafb41bbf38c1d3b3582fb358f15"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "245d0d2b56c7e99b8e58f29c095905b3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2b752baa08529ecd2a4ba7e4d185e1f3"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0262f6f291c5c6178632c75e257f005f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "69f28f851ac99d89eef4d519eba282c7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "5a17167cffce646adb0225927731efa9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ba3e298e75649d54cfa32a988054d04c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d85fcb75edd2fab0fa654402fd709fcf"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ec0cb2d1f3db07b01fd0705f1749aacd"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d1a33624590a8310aaf551f453095d12"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ac460139a5599dce740d8b4280339d9b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "45c8987580f309afcb02ff14b3a5be6a"
  },
  {
    "url": "tag/index.html",
    "revision": "ce8cfd1fe580567ab2be57b792678ca9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4903504c5bbabee81e5cc2d36a74499e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e5921a73f87efb8e187fb9500b24241e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5be4b0160018f39faeef765230239adc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8e5de8d3afccddec7984b7751efae427"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "62a57b65425c02b6711396bf36110c2c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d24ac21ecf6f9462762cd783a55a67c0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "3d261d69e1fdddf960a952be2a071678"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c12bac661c84cdbfa40cd0f26768fe30"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0aaa802bc1a7883fc4a87334eec1bdab"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "cc713898bb4ba5574f985d43ef2f4952"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c711afecf44b285bea9335502a31d8e1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c6270c857421dd59d73de623d7b90761"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "433b0d29c701b5d8581b2875ae5c9135"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3aaf10b0a502b7003d68311b16fc8f76"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "df09b4e895be94262a7bdd0ec2469acb"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1ab90307e3549a146bafcfb71726c882"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d74273d704afdc53d98d7d12e60fbd03"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8edf2a19683518803b823eeff615576c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "447be6f6a50f6993143103c5a16776be"
  },
  {
    "url": "timeline/index.html",
    "revision": "27aa43762dba135c654102ca6b005084"
  },
  {
    "url": "tools/git/index.html",
    "revision": "06b2a6488e285b80dab5cfd69f9f5aa8"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4a74b8a4499d41b8073e37bddd69a623"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "98b94b081228f2e406483ebd86b37d6b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "cb5df7cf997109d2b7a953ead005c4df"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "14a8a927c041398f866314bd60f95066"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4a0623e2585c82541589119a2a8f43e4"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3179c4afcbb87ab1562f8cc32bac068f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "dd8469b383c636e1c7ee432ee94691ae"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "96d1ef9ede4b15379c78c56ed139b0b5"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8d3ceeb7c5d27d5b875a2d2e08fdebdd"
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
