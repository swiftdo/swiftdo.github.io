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
    "revision": "e21da1f0bf471041e1f01a0eba10e50b"
  },
  {
    "url": "about/app/index.html",
    "revision": "c4c38a05fc655b33d4d26559a559a39d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d3bd8d321f58916143b3f5fe2ce2b617"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "69a6b061094dc3713eb7d3d5a75bf830"
  },
  {
    "url": "about/index/index.html",
    "revision": "5512cb45be174d2163f0777d2c3449a6"
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
    "url": "assets/js/19.3a5d468b.js",
    "revision": "ac2348cf63d6e5f3e1cd225f73e4ff2b"
  },
  {
    "url": "assets/js/20.fa7697d5.js",
    "revision": "1df4ff4a8ec2dc25b0932f0ce0c98700"
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
    "url": "assets/js/58.6d38fd2e.js",
    "revision": "962f8514fd693c86a1532b5ccbe75613"
  },
  {
    "url": "assets/js/59.a16c8396.js",
    "revision": "b05dae8b5b95b0b566404372f4181da9"
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
    "url": "assets/js/65.1d50f914.js",
    "revision": "9378b0cce6c95ee031f29365502b8236"
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
    "url": "assets/js/app.19d4e458.js",
    "revision": "9584e53f3ff1b48908880bf26bb77b28"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "954dbe89ee80f54432d13bd598db120e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e837d1b38f50b66e8286f6b853daf708"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9f9b09686feb22e5a69e48e1d6f79837"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ac2355aff165bf2742ccc8c1c19d8361"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ba995902a5d79e39ec3d67b44cd14c82"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "34831b30e07654abdf875c2b845f67a6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8bb0758e1b3c4cbb94b14179a17521bd"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "57b29d7909a7ea76e9a1c07a5e8e391b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e1a5f6a2e089093e9efa77060733b287"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e0ebd7508c6928ca91656ffa2e82efbf"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "343ed418f8e4eea6fa9652260f25f4b4"
  },
  {
    "url": "basis/design/index.html",
    "revision": "dabdbe377d97372ebdca11b39fc1e0d9"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "c1392e9d981b4549bcb0d8631fc4e863"
  },
  {
    "url": "basis/index/index.html",
    "revision": "eaadcd110b1299fe9535dc241dff617b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f2e1f75608de1f064c62b04334ad288f"
  },
  {
    "url": "book/index.html",
    "revision": "0396432446dc08cdf671c045499329a6"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d37e4a921c91d478062d1e45911fb3ab"
  },
  {
    "url": "categories/index.html",
    "revision": "b221c6b6e2e511881a9409e6c5108722"
  },
  {
    "url": "figma/index.html",
    "revision": "a41dc5d39dc1b056fc3d1629050e03c0"
  },
  {
    "url": "flutter/index.html",
    "revision": "12eee2d0ebee35efb398eeccd1d73626"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "de96dceaf2572bf7a5345fd50facbc66"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b5107c3f99ba71d2b76246d273d87cff"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c92d4c2128009f18be744e48bd89b8f5"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "021f02e40de6cb92506cad2b9b41b26b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8f53f7fdf1f6f6422abf766dc23f69f1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5e2bc8069e5749b6f3c224c1d609b088"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "6dc20cf1eb4f51b0c1d6c78d661b39f7"
  },
  {
    "url": "index.html",
    "revision": "19da0051140811ae676ef9ebdf573505"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e9f246ffbd681e4cfb9bfa0d968bea33"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0af70a87c72ec7296c8077c2e5d7346a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0fd0129e4dbb27aa485fa95e0df41012"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "71cde2319d0f5b118ff0b9d915297c1d"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "146b7f07869174c1ecb3454756d635b7"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "289196a54cf48e89f08fa47a325314b7"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "e91b9848df23ee661297e6582a6ada7b"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "6e75863a4f60f54405f96dd9f27d5448"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ef23104d059e69760a3d97bdd7f08920"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "988ba3f432cfb839f36cf540225e3554"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "8cc065c49c8a1bf391d423807f79ce0a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "a1731c830ee9edd091255810af4f653a"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "e402cc50c10c557b3de3c0be4a23d2db"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "d043b98e768e70536e8466677e19aefb"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7985ce023073efc619bdcb1a56258d77"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "df3c4fcbc3cf48a795c369f5a5f49b85"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "fafe32a7890f8be2f4988b5ce93593a6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "431c11f9ff5159a8841c7293261aa70a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "80caf82c0493d53d7ea6128207a58757"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "dcb1ef61008774a342377fde2fc1a296"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2a07c6e975e90da6611c6c075e2d2a92"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d5c8b5e00080a79209f9f231281ed4ff"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d78f217371e996b02a95af4b72851aee"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "31d97ef5deecfdfb1b6d256f443d62a4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d28d5af206bc03a2a77ef73c5f454654"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b9c93f58b0c39f83a35981917ed5f5c9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "86ffb525dc9a86e22595431ca3f4987a"
  },
  {
    "url": "tag/index.html",
    "revision": "64ecea793694ff11a115dc1f25cd9caf"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e8300a95cddadc29f0ed4af24378b988"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b83f2dd8a8b02655cbb6ae1ceb26e9bf"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "cb43363b3e2a652595845a03d83c0a2d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "422d2f97483d0cf13c96196f13895fe0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fc48b7eeae569ed68a9b54300507e22a"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "cb0312260a909509268e9be35e1aaf26"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1f5928598bc57f7fef5cab7022442019"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f85a9fb32ebb67aa572dda160929673c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c321e4d51797cb153c3a33df7863a2b9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5481278a30af90717ec22d2918e57afd"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "8fa99d6e7734749b33409282716b4156"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1a2d8d0a8be371be2da37445372c3bba"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5c649121ec31b85e92f232113c2a5422"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c44cb012769fef28429f33f25538c54a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2405f1614d5f348990f82365829823f1"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7eb4c85798ad7083c5cd9dd0d4b08efd"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "99f8c8075df8fc9162399f3817358c9b"
  },
  {
    "url": "timeline/index.html",
    "revision": "7cc20eeda8b536fc67f10423c85101ca"
  },
  {
    "url": "tools/git/index.html",
    "revision": "10ad30c445ca5d6b32ba1df9aa4dd98a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4a58e55e8abd499d1ab5742f43682b59"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b5837774c0ea340aaf105257df146528"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b155c406b19c025f0dd065ae59c9813b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c5ee0b9f7d8589ebcfaaf4bc84ecdae7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ae9cbc82d2e1cc9b73cf79a168010527"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "39d3eea24f869e9328b65cd7558de1b1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4acc38ba75d0a62599f439408bf3ee83"
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
