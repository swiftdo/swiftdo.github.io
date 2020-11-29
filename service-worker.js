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
    "revision": "d715c7d62994cf6c3792bf0be5b3be29"
  },
  {
    "url": "about/app/index.html",
    "revision": "d782155bb1f46c713515262d2d4901b2"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "86e67ecf2aa3e43cc08f2a19db2dc82e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "57dd0f0fd931b8d2bece971cad58df37"
  },
  {
    "url": "about/index/index.html",
    "revision": "cbce5b6df189240ef0ac076130e0a883"
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
    "url": "assets/js/13.2f24503e.js",
    "revision": "8a677c7c7e4401073d06eac3b5c49ab1"
  },
  {
    "url": "assets/js/14.e121f804.js",
    "revision": "785a6af11cc4b3193daa9357d6c8245f"
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
    "url": "assets/js/38.974e3ce7.js",
    "revision": "8802937e936a52a561dd80809016733e"
  },
  {
    "url": "assets/js/39.3272d624.js",
    "revision": "4909462303d6ea05d4a6f84b8d97e433"
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
    "url": "assets/js/58.e3445369.js",
    "revision": "01ac0afc0ecda8b21afe5d69e6adc03f"
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
    "url": "assets/js/60.099f4546.js",
    "revision": "ea8d8b75375084a8afc1c3c2ad62a7a0"
  },
  {
    "url": "assets/js/61.ec188339.js",
    "revision": "4131a812c752ed6ef7e6d89bc5bb83cc"
  },
  {
    "url": "assets/js/62.9d42bdcc.js",
    "revision": "e9f728c31c84094654d0bff39be2e504"
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
    "url": "assets/js/70.74ea6ce5.js",
    "revision": "a56292d01a05f1347c42f5c56f9be9c4"
  },
  {
    "url": "assets/js/71.153e66e1.js",
    "revision": "f7fe0d3584d933ab3226fc588e0ca12b"
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
    "url": "assets/js/app.c66d2243.js",
    "revision": "046206eecfd3b75537215c50f5612b32"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "636b84cdcebddf741bd77a3b38094d48"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d2cca5cdb7d6bff6e99bb94c7583bcb8"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0b4ff6fe9e272dbc539d133ebbeed165"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d2c6304ff62eab45e631185baab5a22e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "cd7316e00a7071fee8d9c6cf92a4c6fb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "567813e00aa317d15375fd50ff5bd8fa"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "eecebb4cdd5fadad7c3fce54015cc429"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2d6877c94f8f8655ce3859a1be844bd4"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1d796697002ff67a7b16120823261fe0"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "7e1ec24e3f1947c54f806f242a484e2b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c718c052deb2713431da3f2287742032"
  },
  {
    "url": "basis/design/index.html",
    "revision": "3b8be2db5dae4c960baf245fd01e4244"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "385bf4799a497ecaf865e90001f6c1e1"
  },
  {
    "url": "basis/index/index.html",
    "revision": "851b825ecd758290886565086f856fd6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a46891a3674120c7757684f0e3af5eac"
  },
  {
    "url": "book/index.html",
    "revision": "cf711a662ba4fe0150549b3e1df92613"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5dc4807acee9be961b3e35d62da3e806"
  },
  {
    "url": "categories/index.html",
    "revision": "a00f9c535ec3135ab201a9b5b49f6c8f"
  },
  {
    "url": "figma/index.html",
    "revision": "fedbb61f60559bd4569236267a1a3e4c"
  },
  {
    "url": "flutter/index.html",
    "revision": "0773a0d02f5163de7ec2900c1b489da7"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "89e16a54d6bdd3c7c17a5e5846a7e3db"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1b0f3da55b947456a959b8b06291ac12"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "798198e306b1fa2459f9cc435adacc42"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "bf7d39a2c9628494670570a7eaedba9b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "21931afd59619e8bdea655a1486c766f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "fe441ca9b443f6d5a2f53563c808c3d5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "362aa556a8638027e55209228f42cc99"
  },
  {
    "url": "index.html",
    "revision": "c47b03fc3340e589020bbcffc1ffa337"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5e4c541a8b2fb5e8522f32e566f44d3e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "414b3ffc3f5584f9ba637729b39e4002"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "0e18827d8deaf5784ae7cbd4638b26c7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f6c132452db95d0c2a1b9d498b09a5bf"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "d666aac48a1020578232ff1a3bcec8a2"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "d3467a60e0db9a60fcaf1e3bbd349b08"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "afb95a2b931e4d1de84fb1c347649812"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "cef7fbb636857c78c41b6a60c1e1f347"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7424a77a590ebeae402de7e0f7a0ae65"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "231548bcea69210a1c7107ecb2e0eb67"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "001622b0b302e073849f27d2de4b8fbb"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "88215ed692ed8ca79d8b5d30fc6a5617"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "dafa75cd83090c56f8ab29c9ec90421f"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "07fc29f0848c8826cc3038261f89ec56"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "05bbe25f7bfbf16db3777fbfe6ba880c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "faf710b0e0ec85c995207dfb575582f3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "dec14c83631614794576aa1342766aa2"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "8068b2f8afa57df0c0ebf050b15f9a2a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "64d1d74e2b23b3a9cc959a4aa62c4290"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a36f820bfc3d5ec3d833b2226d1a991d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0129ae26686f06208016a05244860400"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "03f597da924a7e92f1c56e9eb58ddd07"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "45a94c622b11c8be6c87979317d19fcc"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b170e96d56d3bd5f38511ac0639f8f95"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "0b927702b25ee003ef50f910f580ce05"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "5afa18ce664fb891ad2984c44adfe96a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "60a806436af16ae0dbfbdf738b48485f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "18665f47c59b7eb5cbf4567e96a3810e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ef0ae95fda1c949e0c30f978ac09889e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "bf3a4f6d08326fa53735067e991e3e53"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d528eccc6b94ff97b749c875bccfa256"
  },
  {
    "url": "tag/git/index.html",
    "revision": "17a809b92158728c7622da160fb2c1ca"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e0052ec821d0947f26b332d8a69ad24a"
  },
  {
    "url": "tag/index.html",
    "revision": "6ed918ebabb9f2f7d444752eeeebf953"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e3b4ca2fd8b3f6675f8134c92f4c91ab"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "376e8cfec638142a559b2b8f1e81d69a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "bead293ab1c4d56bd84d42dad6d4c5ff"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3d108ac11db0f738dd2c1c184301533f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f90e236d325f6468bd9efcdc5b720ef1"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "380a8d3c8b648df9c67bbdea931ab694"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "100ffbe9e0fadda9924755b8e274c692"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "6a30b88855ce828030697c299b8f2100"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "32d472175224b87db98df90c393b0fef"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "896731624a92e1a52f11ce7dece41d02"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "8dfce21db60bd06ac87dd4578f333c5e"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "cc2100b4cf2efcf3356b41c016e9edf4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ac68ac6a0ee4ad19c25859e9d92b846c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "91d7f3b68924c01b8d32685eac70337b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c086d4c61f29e47bed61fdec7f7a24e3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "89b7895360e62b8f1a4c6f706dfe847f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d3a387a524ebe119a79154f3fa2e223d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ebee204f99ff92b4d7208cbaae1c0f3d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "fed97140c49eb9fb6afa5017c4233ff3"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f439aff3b54d215272b19afc5634bd2c"
  },
  {
    "url": "timeline/index.html",
    "revision": "1da7f024141b25a8517bf9af44a1f80d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d019d588e8232b7493543e06b90e2482"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "371fd0691d475a050767f1bc17365d10"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "356cd7502a1cd2d3c594d605dc319e42"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6330b0d15e78a4b5925fe46e815b8d9f"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "b4fe07eb9edd9c25bd9e0901773a167b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4a1012bd56f73233fad5c4d4cfd0ac77"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "229b140788564ad94a1593e8c80c0f70"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0927d2347c7ef12a7034533beca0a43a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "29f8bdf3fa68b09ef9c6d0abf7d31fe1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f7295dcc89d7444bac7b4dd12485b796"
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
