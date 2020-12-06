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
    "revision": "5a764bb901a32f571c4d0a4a89ebcf94"
  },
  {
    "url": "about/app/index.html",
    "revision": "a3bbb97e84ce3f95989ff276cc759953"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1e1920870885af06f1b5c8bc420ed042"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e45ef005ee0236d78314f529e2c610a5"
  },
  {
    "url": "about/index/index.html",
    "revision": "c600e53f9349ff3a1a34c8d397fa2ea6"
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
    "url": "assets/js/43.8e08961a.js",
    "revision": "39187473f9893c036f34e8ade0b3394e"
  },
  {
    "url": "assets/js/44.ebb4b4cd.js",
    "revision": "b042f06d73ba55e7755b2de9387c0f3d"
  },
  {
    "url": "assets/js/45.fc3adc59.js",
    "revision": "62351949c7296f7a05901c7ecfca0089"
  },
  {
    "url": "assets/js/46.2730f40f.js",
    "revision": "bac509a31ab01f4eafffac83bb231317"
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
    "url": "assets/js/51.1c912cb9.js",
    "revision": "7423947b79934e7a94b5ace988c6ac06"
  },
  {
    "url": "assets/js/52.145454cb.js",
    "revision": "9da74acb547f6c3b9fea32bfaa45964a"
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
    "url": "assets/js/58.627360f2.js",
    "revision": "470d92cf4c4c3e0cd4f62393be8ef3de"
  },
  {
    "url": "assets/js/59.673dcee4.js",
    "revision": "4f0d1cbc8f86c65be1b3428525e487b6"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.ac41aba6.js",
    "revision": "0bb001cd5ac7dc16e50c98e37fb3e9d9"
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
    "url": "assets/js/65.a78ea98d.js",
    "revision": "f8ecf5ae351348266256bc3f659ae372"
  },
  {
    "url": "assets/js/66.68a26808.js",
    "revision": "78209054c62d8420ef98f939564e7c95"
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
    "url": "assets/js/69.f826ad55.js",
    "revision": "998b1eb0743cd7dc695bf2d9b604ac3b"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.5d9089e5.js",
    "revision": "cc71ead10c46757ae4e0aa5ec8a8b69d"
  },
  {
    "url": "assets/js/71.468bca35.js",
    "revision": "eb9c69df7fc6c48af657b52ca35b8175"
  },
  {
    "url": "assets/js/72.ea483632.js",
    "revision": "a90389da4ce8b421344c91b40ca37477"
  },
  {
    "url": "assets/js/73.7e917073.js",
    "revision": "86ac91d563674d0699690ca51c393c3b"
  },
  {
    "url": "assets/js/74.0388c839.js",
    "revision": "fa95361f71f7749eb2aa6c4a3ea54474"
  },
  {
    "url": "assets/js/75.8b3ce39e.js",
    "revision": "796e81d108324a5f747ebbffd47726ac"
  },
  {
    "url": "assets/js/76.243ef2c0.js",
    "revision": "7c61db54a61a1955e1e6ad5becfe1ddd"
  },
  {
    "url": "assets/js/77.52ee5357.js",
    "revision": "46bc8c8b16cf681da2e10b75ebf11912"
  },
  {
    "url": "assets/js/78.19749c4f.js",
    "revision": "1abadce764fc660eccde5ebd0933891b"
  },
  {
    "url": "assets/js/79.20462556.js",
    "revision": "e3b358a4bba73241156ea75aa4a34263"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/80.c38527b2.js",
    "revision": "3b3d2fa0e8d7f2e07b561484d16d8f92"
  },
  {
    "url": "assets/js/81.6d370209.js",
    "revision": "ec1c95a2310cd314149e5b072d8a8ace"
  },
  {
    "url": "assets/js/82.204c96f8.js",
    "revision": "196a33a2e35c652d1a6126ffcbca233e"
  },
  {
    "url": "assets/js/83.e68ae20f.js",
    "revision": "2ffcb1e909f49abaae98540a5c361860"
  },
  {
    "url": "assets/js/9.14f212a9.js",
    "revision": "a013353ae145329a4deb6d1364660b64"
  },
  {
    "url": "assets/js/app.e3d6aa6d.js",
    "revision": "d40217f047c1f8c8978da69ddf821565"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "8098878a579e9794e4890a8c4ed3ad8d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6c8eda9ba75e3c979beab68da12114fb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "1365259570a9683dad0725470eceb26a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "53bf0ff1d55bcd34a2cfc65be6c9a3a8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "091c952b7c4eb934e4cecc0a206ea65e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2b54a35cd2927b471f135c91912087af"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4d6f20412b994963fd4c43fce8d8531e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d518e6f0e11f78b73e1c382db560e410"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "a524b4fb3705256259db22decd50256f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c6e4851fc02a8c60ec295cabb384db36"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e89009267451d9070a524282efe62fb7"
  },
  {
    "url": "basis/design/index.html",
    "revision": "7121a9797a614a49d3b86a8250088884"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "41f9bb1f0b8511281f4422a73d5cfc76"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2e73357693595b574f189a40c65ecd8e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "40f640ec547a7af798d0a3df46d6aae4"
  },
  {
    "url": "book/index.html",
    "revision": "4154f9cf1e6ef9251088d1dfec5c30a1"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f1ea3f1060ea803f5f54d05c73a8cbd1"
  },
  {
    "url": "categories/index.html",
    "revision": "4f88eee41f2a0aab40601d89912ab0ee"
  },
  {
    "url": "figma/index.html",
    "revision": "4c4a2a73ca127005bbffc669ade16b56"
  },
  {
    "url": "flutter/index.html",
    "revision": "808c948fbd8dda624f93968866c71700"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "93b567a7dae127e8c1da72a7aaf82b95"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "e49be3bb5b568e4ca30d957dad78266a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "bcb8895b1de5e0d6b4d6fb344d057c0c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c9446d5dbf25e756b442db4058421ad2"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "90c76e280829ab35c9bde9b3365e41c7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "9033b1d51337abe1c92ecabb91132cbe"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "29f99500e5fe7d713c2890078df13cf1"
  },
  {
    "url": "index.html",
    "revision": "adabcfeca2125c6c1f2e9269d1f30347"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8ba30d37230b08cfeda8c889f7385b0c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "877e86b6233422d262beaad2f8f3c040"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "43763f36804365218dc01d89ab7afcf9"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "72887e5652d078ad52af5f49a657e8c1"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "a32c25967306008b85ca721af0a0fe3a"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "13c9a9ea9cadffd614663d26eb571300"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "58c7e52e009308b444c13215326d6607"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "a25d8b7bcdd381c55f0db1cf4ba42bc8"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0ba248b8b9f595780b34e1c70ece734e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "aa2953e651b5b941df6d493721e7504f"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "284a3cdcfa81363bca639e2d6138051f"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e5ca3a234449254ae6d28d3ffbd21d10"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4617d092d8db77154b38cb3829b3b45c"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "8812be92301b527422c43fd98f386bb9"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "de29f740b492676f87a3248ea2b39afe"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "64a8c9ea0be521ab2f6b9495f6423ef4"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e0f4479aa331b28f720932ebb0e56230"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e8ce9e394a3c8652c7a0ac877db5e9cf"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d91555c0a5c237db6190bde039d9a343"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c9da90cc2d356406433da0acf32db283"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3bb924c38ddd680024c98015dccd100e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "53f791f31b578611af0f158ba844c706"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0f9ebbd5ee8f55cd6fe2c2e38b07a3fb"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "41273f98a904ac5ea303c54bea085310"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9e96b5f3284c427f1c4a9e937f466338"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "8cd634ea78533460a844e1c0da9e6158"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ff66c96fa121e82e4a1acdce3e1f1ca7"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "9d84cf57626a3d081ad851d75cd0409c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e0849ce83bf13249757d26afd7f542c5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8c4fe51302126d9758a41bf3be14c7ed"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "e7ad0364157f4463e0e8575cb07d1047"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2807961c591e30d3f2e0cfca17ed93f4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a766034f17053e17a3bf9988966dfe48"
  },
  {
    "url": "tag/html/index.html",
    "revision": "235957470a32f2646631f46001095a18"
  },
  {
    "url": "tag/index.html",
    "revision": "6ba1cc28d835af6413098b46969c5bdd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ce957b3adc0aca27089ebe41112cb20d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9d4a0073edc75e5b31d1f70fb85f3d69"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "70031169de1fe80e7630268f3fb1520d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fc79c1780f69257035ad8f2d3361d44c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c90b964a87925b147aa3ce1db83a0c1a"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "36a07df57b696b5929258dca8a5849a7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "76f7aae9b18f1918fba40570fde15e6e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "67866785fc24e9068d75d52617c09784"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f351ba63c5e971d25ff3e74f4c105ec9"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4c6ad4c528cf8f3792a78e54cb8d96c9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0cc33b895b87b37c26f880f16d116329"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d27bf2fb2973620d0545d96b2dcd8218"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "18feebaef73369e5cbb79adf12933731"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7f1f0c66102adc34006c604480445f25"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "680ce0bcadb07bf1d7b9c4c2026509cd"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9a7ae522e7bd1a1836ffc22d4a97547d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "33440d6e9a7df3019640a7b0536622aa"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c9a9233ed1d895b7b7836f2fd6f379dc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ee8dc4764d829a91475babb853113fc4"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "57d083e6ebb8b104fb8b62d93ace631d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "1deb8b90243bcab2bbfb53d420829f56"
  },
  {
    "url": "timeline/index.html",
    "revision": "acad42e789cf205ccd783d6f1e811609"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1dcb866c6b679183f5c9c1e3e50f720f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "36919cf65c467b3e77579591ab5e74c6"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8788abad1b41030365c03498e61ad145"
  },
  {
    "url": "tools/html/index.html",
    "revision": "50a3c055da49a00754b17c9cb01d1d0a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e101bed0e504127f4dec96c38d5e89d6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "07fefeebaa706acdd01a1f16ac526962"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "dfc33f532e31c061de84d1a511d62da6"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8f7617ea2d738fc26c64a80e4a2ec5b7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4bb4c6b137715967b56aefea5f20364c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1c50789cad21445a2350fe261d9b6e07"
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
