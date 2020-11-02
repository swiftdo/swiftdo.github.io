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
    "revision": "aaf9ad37346eb1655307ae855eb45afd"
  },
  {
    "url": "about/app/index.html",
    "revision": "e58e3dfa2aa5cc74f45e8ff5001fa1f9"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "389f9ca063513393e51c133e5e65c65c"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "51acb0d5d9421c55825dc54130b2aa72"
  },
  {
    "url": "about/index/index.html",
    "revision": "6a95df321321a7e54ad8a7e55486dc2b"
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
    "url": "assets/js/15.b8142a3c.js",
    "revision": "7f1f54c81a58773e007d3f0770adc322"
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
    "url": "assets/js/60.b7e316cd.js",
    "revision": "d452548d2d39505e9fe3b8a25a58050f"
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
    "url": "assets/js/64.fe7ab7ac.js",
    "revision": "1134d18d20e0bc9836687e44a9496da6"
  },
  {
    "url": "assets/js/65.caa913d4.js",
    "revision": "333a548cfc446e1b5dd6fbae0fcccb1f"
  },
  {
    "url": "assets/js/66.999f4643.js",
    "revision": "339ce66c7215888538e27578f83c57d3"
  },
  {
    "url": "assets/js/67.1aee90fe.js",
    "revision": "7f84a201ff7367bbeab580fcf9ca68f0"
  },
  {
    "url": "assets/js/68.3a9fbf2f.js",
    "revision": "72d77fe27eadd633e92074c8af949f0f"
  },
  {
    "url": "assets/js/69.36098829.js",
    "revision": "865525d5d93d3a7b74c0fd337d0b0d5d"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.5e1b05d8.js",
    "revision": "2b5a49f95fb2a064c4e72ac63b829405"
  },
  {
    "url": "assets/js/71.55f40e51.js",
    "revision": "b97bb94cae74b1e9c45367e986f158bc"
  },
  {
    "url": "assets/js/72.abb27777.js",
    "revision": "c55949fa5dcc903eafcc9b99d8021841"
  },
  {
    "url": "assets/js/73.d5447a0d.js",
    "revision": "d66df2566c106135ec14346212b2be05"
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
    "url": "assets/js/app.a6947ed0.js",
    "revision": "f0ddd784b4feb9aa629af0d31c4768fc"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a5bfe99c9bb41b72c74f0b70d67f3083"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "68e39ad37ff76ad1eda4460cb690b7c4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b4e499dd7731a92ca937e82658c34d59"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "20398e97a74111f43648eab744a8895d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b901836c07d0aa7d7ee07fc0e57bbf52"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "5567741f724f44d8012d74c62b5ad02b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "31b24b319e8f50593e8883aac1e395d9"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3946f7ba81d662d648139a61859ccc70"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "79cb21f964a983924e88a8306c8648bf"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "2faf44a964d882291b1592e91a2bbe96"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "348ab5f272f28c08b5cca550afb2aef0"
  },
  {
    "url": "basis/design/index.html",
    "revision": "3caef51545869cc1f6b7d5b88cc69c4b"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "50adc9360b0a7a6b3a2ba667d58d3c26"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1c062e44f982b7e266899eb5df4997fd"
  },
  {
    "url": "basis/os/index.html",
    "revision": "cb89bf06278cf3a9e652aee323917fe9"
  },
  {
    "url": "book/index.html",
    "revision": "7c96e6610aa4fcd993e68469737278c5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "dee9a7d1770bdd2afaad5ada71ea4e2a"
  },
  {
    "url": "categories/index.html",
    "revision": "3ab658f3057b39877cf42d896c9a3ffa"
  },
  {
    "url": "figma/index.html",
    "revision": "c2ce77b7ce1333c93bf763f3082e4205"
  },
  {
    "url": "flutter/index.html",
    "revision": "8e02e7d9804ca004a4e32533165a5add"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4b45cf3c9da13ac3f4e2efb3fefcf417"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "33592b62f2e39b18647c460575ff5643"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e75e7e859723b484557fed6f1f85a3a5"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ec1ab25bf1f0231af51672a2afabf972"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7259e0ac14f6558453b28730604b68f6"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "51e87d7e4946c165fcc5cba76762a2de"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "df59d4ea4626aca2f5dfb3155c2d2942"
  },
  {
    "url": "index.html",
    "revision": "55a68b8dbcb6a968bfebec43587883d2"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b7f09c19ae4eba9b7fa0888e89ee1b8e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "651df3651a8847191360c6468bc70c86"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "11b5dbcf899865b7e3c5df7f72adeaf8"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "7fd73c356461440228c2ce77c99cc966"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "5ef3ba6f6ae6592ebfa5e10957fd7861"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "0ffdbb6d927ed905531cba9b94cd3abb"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "140f91a8c1db2d0b57339a6adfba7aa0"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "cd131d91a7e799143e1e7f06fb59213b"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2f329eae1d75cf52fdf6fe2105a27436"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "ae5c0a9674ea1351c2fd0f7414e4c855"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "52dc8986b3a4c9e7ccec06d20f216eb5"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "846f13d6f2983b0ee9615c96652cf7ea"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "5e85f330c511bcdbb87841f86ebc41ed"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "51d191d7a98ace6cb27f56f4d9e8d7db"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1bea3424dddc66df6752733165a1ab2a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ab501f19bc04be2fc17f2f3481bd1e7d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "316f0c869daba37bca871125ee056294"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "2b6e98132f41570d291cb2a744aeabf9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f4bab8e4ca30aff1c8a202becb1d50f9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "4f5540fe925d77c3ee9906af4365eb07"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4e6f0cf16f9fd66bc435ddc6919dfb82"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "97e7cc6bd5c8422500da5a502d12744b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "6a860da27c7dc5de3bac0ca3c1bb2254"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "c8a2d8cc564a8ebc2478c1b0021bcd08"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d16bf36a5af6837d8192a97fdd56b5d9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "72e7768c17b25f15cb3c75152ff47c4f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "61e6dc0da70a1739ee67bae55d10d686"
  },
  {
    "url": "tag/index.html",
    "revision": "bd8a1f4639ff23b56fb02b55131d2f67"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "c5d484b7a74a18593e1b9ff73feab3c3"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d28e2600b3a945bc25c33e0bcba8d29b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c344592a62c61d8f169cfc6d87cedbf7"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2741aeeffe8586b3e01ce5e43ad6cbd7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "01c3f573234883b488c7cf42cbc589b8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c79a661d9d221d52e6e62bdcabb661bf"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "6f0fb7cd1576283535cd2c3e591e4829"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "344b958bc1508a55a036fce53c2c91b7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "211368a4bf2e722e2c81d56c61602adf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "db7a394c626f48fb87f2b29fedaf9a66"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a7e17b014d1a363d1cc91db7e33d4b11"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "25f74eddf50cd9afeb383e288492e1a9"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a1d81e398e66e3b582a12aa04835d2e9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ac2e7c643e2a06fd42cc5f7787647483"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f880b49597b48e2605f83f8656afdf0e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3c0b69f51a304081b2073dfd19f8ba23"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f2ad07f6905ad57126b295cc0c6c41fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "2d7a1bbb0970d6427810e6abd14934a4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "76fb458ea28ead77be6e156c21dcd8eb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e3a145ff6de6f6bf5f31f3527667309a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b0f4263728acf3d309d15600c0352147"
  },
  {
    "url": "tools/html/index.html",
    "revision": "be0ba832c288bce6e4e5907cd23af649"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e1df4c2a1a11b8b88d6b73e5ca017ba3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "46298d8f970cc45c4baf1bb465060797"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "84319a4f99cdfa72765518f4187cc31c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3393991b89911d9b3a0a0853d19c7349"
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
