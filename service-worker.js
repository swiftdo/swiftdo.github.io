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
    "revision": "aba51d6350fcc910b591f8c58b06eaf1"
  },
  {
    "url": "about/app/index.html",
    "revision": "6f9725d7d21cebee3dd21e7ca2e6aa0a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1d6c142065a25fb55b36dadea6f42ccc"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "960fbe16f950dc28b483ed4017ae9d2e"
  },
  {
    "url": "about/index/index.html",
    "revision": "e06cc9b775041c2b2ce92f2019dbea95"
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
    "url": "assets/js/33.93a4179b.js",
    "revision": "0f4ed56ed536510a6ab1d95bce214171"
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
    "url": "assets/js/41.d9c1bb14.js",
    "revision": "973b2b0b9d62c4456ddee5c0b6e28fa9"
  },
  {
    "url": "assets/js/42.15f87b8a.js",
    "revision": "dd30b8a8fb58eed422d85e2fc28f5ed3"
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
    "url": "assets/js/58.dc4b8151.js",
    "revision": "f342ee9f465bce6f3ef19950e9c28c8e"
  },
  {
    "url": "assets/js/59.812d1fc2.js",
    "revision": "a00351756a375bfdbf84849b949cde9b"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.bbd37c04.js",
    "revision": "33d57746c64a2bc13969a35ba33e6893"
  },
  {
    "url": "assets/js/61.0f2001b1.js",
    "revision": "a0d0dc86012e53e5478221a9b0087e91"
  },
  {
    "url": "assets/js/62.9d42bdcc.js",
    "revision": "e9f728c31c84094654d0bff39be2e504"
  },
  {
    "url": "assets/js/63.e7780d61.js",
    "revision": "0ed7c71a2f9106fe4f41666af35a0a73"
  },
  {
    "url": "assets/js/64.4aa7d9d5.js",
    "revision": "97f8d7f4f36a8ad206d9cf555d30b483"
  },
  {
    "url": "assets/js/65.b28a247c.js",
    "revision": "e28a3791340dbd824e3708acdfbdfed8"
  },
  {
    "url": "assets/js/66.6d49bb8e.js",
    "revision": "8e4198b0e70722b05dd2dd53474676d2"
  },
  {
    "url": "assets/js/67.f49681a4.js",
    "revision": "221df17e72d9c293ded49f04663e6b91"
  },
  {
    "url": "assets/js/68.3772a996.js",
    "revision": "dae998db2c8dda37fcef0690b92e771a"
  },
  {
    "url": "assets/js/69.fbbbfaa3.js",
    "revision": "a466f67e23603d2893ba17bcdc3ea653"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.935da329.js",
    "revision": "91ede5ff48b494c98468d696b77358d4"
  },
  {
    "url": "assets/js/71.bad91050.js",
    "revision": "d588a36d0aee4f2266f5961dca075a4b"
  },
  {
    "url": "assets/js/72.f38ad496.js",
    "revision": "9a7316359cab74eb28e0b4bf24ae9159"
  },
  {
    "url": "assets/js/73.022b1891.js",
    "revision": "0fc867928595a08beb2e554383a83c8c"
  },
  {
    "url": "assets/js/74.a21ec3b9.js",
    "revision": "a9b5ab4ebf76b092a55a824a6e6fd817"
  },
  {
    "url": "assets/js/75.1c853f93.js",
    "revision": "c395e0763362f19428b7e2f60c9063e6"
  },
  {
    "url": "assets/js/76.fa066f5a.js",
    "revision": "9949256f357ba5585d5fd8659b5adefb"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/9.abcebf33.js",
    "revision": "a8e422b395efbbbabad56a49d16e25ce"
  },
  {
    "url": "assets/js/app.118b8d53.js",
    "revision": "c688cc61c903c1604b92965713b5e475"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "7f77159fde6771574dae45f7037a14df"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "7b46874c42f052cd2d5cc0113e0ac005"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "dbd6c32e2090407b358b0978080257ab"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "85a7f3c4053b405a84c9ef449e784194"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "67512c60e9d4279e7c56fbc51f56b23b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a143dbe01774253ab7fcd6e598a348eb"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1a5a0672c3eaad2c70d18f53e09971c2"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e51351b92cc24830c0fbeae1ef49614c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ec938e7b0ae0101a9570c8545798e608"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "b38f128c9d411f24986f162d1bb1b5b7"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9445d105f619d90233b0db56bf8ed79f"
  },
  {
    "url": "basis/design/index.html",
    "revision": "269ceab09435c0ea6656a9322f963232"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "1d3afe054746f749ecf8994afbf64914"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c29af11430bfff3217d7a56041c181f3"
  },
  {
    "url": "basis/os/index.html",
    "revision": "16775bbc66d6bb56ff7ff1a3ab74d322"
  },
  {
    "url": "book/index.html",
    "revision": "428183432cea330873728c325a4afd15"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "989fc684df9ddbd67c2b936a1237a76a"
  },
  {
    "url": "categories/index.html",
    "revision": "34be79e0ec8caf8efb528560b06c9e08"
  },
  {
    "url": "figma/index.html",
    "revision": "85e72f6f8172c5b751a9f584de09b044"
  },
  {
    "url": "flutter/index.html",
    "revision": "6a046f0551426d595da5a27d2f166553"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9c06205b65c08aecef2948b11bea5a60"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "91ae161baae4c137ca1b13cd10bf9c52"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "69e061237610849e8c22b26b48cf94ff"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ed66e2104233cacd4d22748134b83082"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2efcc0ac5952cc4cc2c3e29b9d08e62d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "bb8ac7fae1dafed9d5875db3124d0d00"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3c5bbb5c889d286849a5c96da6e9f3bb"
  },
  {
    "url": "index.html",
    "revision": "0deb33f71f0d3fc836e23f64946aa394"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "56b453abdde967c308bf3f19d0c72ed2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "90664d5e6dcffc5b61032e0ddec24cc7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "42dd8dc5de5cf3a0414b3190f0986742"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c521583b36553b1c340c223b9cda72bc"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "fc20f4806c31c9471f982c52fa906851"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f419871acd8f8f0ed6aee8c615838d66"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "47dc1eb4b8047a82078d1ade70464d2c"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "b09edeb82fdeb52d7da68c2b33982d1d"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "b9e6eb42342d217bc149fc8568a667ad"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2b03db0b923c1aa4d999c9783ab17ac2"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "0cf96cdde9caeb9761a33aa978dbd746"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "3a4b20ae4c27d28d3edae3f9aa05c36a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "28aabe1cc69c6c43a4dc99c3eac610f2"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "414022e9d0e3249a65d5bb6aa1b60c3c"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "912ad47b73f741b3c3d16ad1711e2b4a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a9b610aa19ac6ff3fa0c64bd0b0e88d7"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2f56f5bdb53ad4ced0360787233cb2b2"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7446d622f7609baca67e6e2a0337b211"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b90c60288bda21b0007ebe9cf62bf8f8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f30e105a8d1685e6c8a640f03777391b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "11b90fda195a3431d9d949a0f6d37db0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "9c9b814c64fe0d35ed9d3f0f6e725a76"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "73501220daa9eebb95ab1d81c3be315f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "572eb0e2262a5448a2a1cacef41a8214"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "9917c800286d38680132c4bb227ead5f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d86b8f74bdbd5713cd9477041ee243bf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "444990f05c694c47dbe32d742c3d8b6d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "60304945008862f3a65744837f5d117b"
  },
  {
    "url": "tag/index.html",
    "revision": "b466d32c0fcd3cff3417c40f065f520c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "6c3beec540e53f64d5be8b46259f354d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "81d8f1e07195156182dbff450956cf61"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "60a1d92d7985e0cf0a897a1893bb8952"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "baac117f29d56f47a605f656f0263ed7"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "66dac5a0a9ad6f20a425d544ff8796ef"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f95f5a07617b5820e5d6d42a99dceea6"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "68c95c594f3469d5479092c9b5d2074d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d0713b08f2f6960f5eb6fae9c8aff70a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "80556dda962de8e47b48df5c0d25e3eb"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "2ce0fc5af9e0e49c9805cfcf15ae491a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3cf5aa52ac9665b2b5237c5cad52a5fb"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "79d57483fe88077ab6857aa065ab984c"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f267f2f28ac2389581db4f772308af1f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c9df70016baf16216a325cf19a3cb3b8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6c6cce779d4dd722c56053e6a5268e1f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "0f64b6da2d43b3ff75cdfbb3c4401e10"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bf2a09d911975d5150d31992766f44ba"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b0d95d8b55be88b728dbad9d34b72ec6"
  },
  {
    "url": "timeline/index.html",
    "revision": "62ad222aa715d7daeacb94651ca75d2c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2bbbba1d2854705bb34bea0cd58ec405"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8c5966df365fbc70f6116a25723dc7d1"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1fd6bbf4ffd0e0c45f9783d3a4c9cc6e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8147307938d8153c0862871bde0d6282"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a7723368ba5604d8177eccca067641c9"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fdaefac8bdc98ffd6f089d03f1ab6c60"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "14a7198ed2a8dad9fa7a804f5a4e4e59"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9e5ef678059fe5d292ce4138626730f3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bd3652b0194359e9cbfe635fc016172b"
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
