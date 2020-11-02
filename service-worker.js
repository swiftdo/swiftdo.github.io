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
    "revision": "9361b12a22683ac7f83d409a0efd8b4d"
  },
  {
    "url": "about/app/index.html",
    "revision": "91919ac92f79c15f97ecdab89fed1e12"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "edcf383c1f887c42bed9c6fe091cb58b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5a750d1be39dae5a4fe373a0cc08ad42"
  },
  {
    "url": "about/index/index.html",
    "revision": "c025563ef74c2058ac2e93ad6076a8ab"
  },
  {
    "url": "assets/css/0.styles.a3a52609.css",
    "revision": "8d353d26cdda7095a8f4bed77dc7ac82"
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
    "url": "assets/js/44.8ed3e270.js",
    "revision": "c9abe75b6e7cd94127760424d7ffbad7"
  },
  {
    "url": "assets/js/45.d9a7ca20.js",
    "revision": "12336b47028d77b515560e2be489bd8d"
  },
  {
    "url": "assets/js/46.dfc5c649.js",
    "revision": "00068a0ea8e63351814cd92ce633f5b2"
  },
  {
    "url": "assets/js/47.328b14bb.js",
    "revision": "7e287fba408496fabb7a894f53bc28c8"
  },
  {
    "url": "assets/js/48.1b9e37ed.js",
    "revision": "c8cc831caf9a3807ede9929ebb38d81f"
  },
  {
    "url": "assets/js/49.a4b6e92b.js",
    "revision": "d3276fc31f8408ad3ef24050a1c37400"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.8b1aae27.js",
    "revision": "875f8aed44fc399a6510b8ced30ab449"
  },
  {
    "url": "assets/js/51.78819fda.js",
    "revision": "901643510870e8f084e7c47bc92b6f7d"
  },
  {
    "url": "assets/js/52.4c7e1534.js",
    "revision": "aa47eac9d106dc6a8d7b3006764b5ef3"
  },
  {
    "url": "assets/js/53.447974d2.js",
    "revision": "132a7678376f1f407d3848668f41df76"
  },
  {
    "url": "assets/js/54.eb95b2bc.js",
    "revision": "7da0e8d9ca3b08717af8aaa9c054564f"
  },
  {
    "url": "assets/js/55.3bdf218d.js",
    "revision": "fe30dc72dad2738a4699c56dda64aa9d"
  },
  {
    "url": "assets/js/56.1378fabf.js",
    "revision": "f51a1712793efbcbfd15f90195ac3eb0"
  },
  {
    "url": "assets/js/57.a069c805.js",
    "revision": "97f6dbecaad725299200cf6ffe13732c"
  },
  {
    "url": "assets/js/58.7857a607.js",
    "revision": "a46f5785e2193328fef7f3f9fd0cddad"
  },
  {
    "url": "assets/js/59.db16e427.js",
    "revision": "59308344bb0f04dc756df3cf6abe30a8"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.74bd1f74.js",
    "revision": "87351a795a4fd2ed25a62a1a67e9dea0"
  },
  {
    "url": "assets/js/61.4e2b5eab.js",
    "revision": "c2ad71254801c333efeae24be3d8318c"
  },
  {
    "url": "assets/js/62.75e2e034.js",
    "revision": "b8ee7aa72a5263e9b7d14c6295559dfb"
  },
  {
    "url": "assets/js/63.eabc7ba0.js",
    "revision": "e5a1d9a34a9fc90fc33b41d54b869084"
  },
  {
    "url": "assets/js/64.c1c32a6e.js",
    "revision": "2cf0602aaa403ec1610651f2e23edddd"
  },
  {
    "url": "assets/js/65.bf026126.js",
    "revision": "d26e0585311e3ec2e4bfb6ee6c78bffa"
  },
  {
    "url": "assets/js/66.b682a20b.js",
    "revision": "a20cef967ed16f363f63d0f079be9c7f"
  },
  {
    "url": "assets/js/67.3a60a60c.js",
    "revision": "f01252c21813d17b50b1f26de69c3586"
  },
  {
    "url": "assets/js/68.0120080d.js",
    "revision": "45d88a34dd17511bb9fd4759aaa8ba0b"
  },
  {
    "url": "assets/js/69.257cc690.js",
    "revision": "6142555255d7d312f01f4bd7e8aa1de9"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.93f96e6a.js",
    "revision": "8f14e929e92070119623a9a1d30ff6f4"
  },
  {
    "url": "assets/js/71.dc7b409c.js",
    "revision": "e459bb4f3fe37424a0b5ef6de738bb3e"
  },
  {
    "url": "assets/js/72.78c7715d.js",
    "revision": "ddb2592c1c8233a390cadd5e1f2b0fa8"
  },
  {
    "url": "assets/js/73.887c7068.js",
    "revision": "5fb4d83fe381b2c156e95c0b30ac6391"
  },
  {
    "url": "assets/js/74.badeab7d.js",
    "revision": "11eb4b30e69d76a3de4ecb31912f94a8"
  },
  {
    "url": "assets/js/8.7f7f6ea4.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.de7e8444.js",
    "revision": "aba163dbe0edbc5299171df278eb0867"
  },
  {
    "url": "assets/js/app.3c4fca3e.js",
    "revision": "12fc6a8a87acf3dc8d76500d450ae780"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "fb7a66060f91584cc907e0e703e4c0d5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e97f5943b705096e8dc5453f59fade96"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "65ba14e5c46de653be949502e02a597a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c841fa88a590302f7a1421749ff06ac9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "551dc8b562139ea44904611f448ffa37"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e85e455cf6568271acadfa5d1caef42a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5b2948f0c4e1b86f547f68ba50461053"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e68a4c80362d516d8c4b42dca8f23bfa"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "be5fda029936e64ee077b1a3845c8fe5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c8a2ada1c56d4cdd7d21e775fda3c1d7"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "22508ebc7998809403cb2434164829a0"
  },
  {
    "url": "basis/design/index.html",
    "revision": "476e229579ac63b6b3a29ab0a0b0d71a"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "5773b740baa8039e36753775109b6d3b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "e7d23b3686861f596d1ccc8fc7767ac8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "198c351b520a2fd0eb0b8a751087faf1"
  },
  {
    "url": "book/index.html",
    "revision": "14982fb4c62a4c4b5088f19b0b87794d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "bb10a32e54c385ee3ea7282c36b5c8d6"
  },
  {
    "url": "categories/index.html",
    "revision": "c6231c330e397f2deb98cce158876520"
  },
  {
    "url": "figma/index.html",
    "revision": "a5384a532a78390505eba54efb8fdd8a"
  },
  {
    "url": "flutter/index.html",
    "revision": "b3322fc55f484b9fe47a07d3dd34fe6a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c63f11eefa84e5889ea33417245b4193"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "75bd1afb6f93da66f81e4a89421f9505"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "2f69163f4f9c3b8db26510e39f3e921a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ad206a3dcf7b48c02a5de6f416a496cb"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b9d45eea97a958e8bda9fd6149e2594b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "615e75c98d3d620a97d4bf2d82959842"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "58e6f6855ca3c35e3d396f1bebc2bee7"
  },
  {
    "url": "index.html",
    "revision": "9792617fc69646f7679f10b53ff8032c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "1d12ea21218344c798fca19c80a81624"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "2eb3e886578e88bf2bff40c48d22e877"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "368f9f61fc0c0982ea22e4bac574fa6c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "3fb297b57b1081ec3c264e3c1c10f626"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "a9bb85296d4829a9267c8bce2adc2670"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "f465c8bccb0abeaa9627cdf789db6318"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "d3db8c6da0a44b8941b69288cf3efa7b"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d197a461938a0e26e53dc11b193592e0"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2a82a40a5d478fa2e82da7a8b5e27077"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "63ff4416d10b6aeac530ac58288bdde6"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2a4c977d8d3967dc8872865f5a6c672f"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "33c38d8c99b4fcaa33812fafb36cad9c"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "1bec80712c3b85cd7ba87df5e4052b0a"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "59890aaf9ebed6921f8190839422acef"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "718f7503c5463424acd4c986b6017910"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3ebcf1c3a2c9369d51214a90cfb85f01"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "51e9ad50e0c5eaf53bc8a0f186111590"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3f0b79c73d45ae9ab45f1242163de104"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1e01af804f178beb468a17e10c45fbf7"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3c3d70cff0a563f3b84e2abc1c709d43"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7af5a2681a957b0d8605d89870e0b0dc"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "11b1a59771c6755bce095b5e62282fc7"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "328db7e36054764f06bb03ce4b6634b9"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "3496bbd89f4facded3776882f1616554"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f302ee8dbd680fac1dae8675b8b85153"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f154636ce5c8491343d5b40fe2df8dc4"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3c82bdabe77bf522f2e9000935e25d6b"
  },
  {
    "url": "tag/index.html",
    "revision": "ba24b6eeee274909205cc5a04d6ecbc6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "91817a8b1de7b8c06e99c525c6f04267"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5e273e888f52a824467a7e93f2ed46e6"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e5d5ef56e8ada4fdd5c11eccc250e020"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ded912fe45907db54febc6fb591b8429"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6a4a781378dd5304e5b256b94e8fc027"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "6fdebfae6e386c71d6a086b2baad263f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "316314436cffcfbc85c65a81a6909785"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "25369f50a0f13505e19f7560e98828f4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0a3ad3f67fb0fd164816bcbdf42967b4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d399898602e9b7f61ac66690f6d20710"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a44f3b81ad4e871fd68a948da4306943"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8227b7e7912849b865871d3f4eb18d45"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "712f7f20a9948de14ccc938369195a71"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "dfdf360c1991033b88eee7ab15b6e815"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "db37def631ba9c0beeebfaa3782bc8de"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "80197c6118d51754a8f33b14fbc43fcb"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "1aa8a36f02581a3a5774b9c20e02bbe1"
  },
  {
    "url": "timeline/index.html",
    "revision": "6edb403f839eca9fd875c9e8f306853d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bc7d5363b0af5edf5d654c1dae9a30e3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "310b378d185640df029218245aa5a04a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "98d092bb62194f48fc2c33ac3975455f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "64fcc5223dcf7f7d645e2a1a55840503"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f87a03913df69be0b35c6423ed9fb0f7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d615711c6e74786a82dacb60231f5b81"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a8d5198e8bbd25379d3e890e4a1efd83"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1ebb8ed10c648e18ba386e6457c3c2d3"
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
