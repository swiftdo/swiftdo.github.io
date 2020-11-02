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
    "revision": "e8f5ceeaf8ca453203d7b88182b6341d"
  },
  {
    "url": "about/app/index.html",
    "revision": "263a6daa81e83b6eb8be0e91850716c2"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0b7009387389a049ab10629c918e0df3"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "6132602cd21195880aa3e589cc334b2e"
  },
  {
    "url": "about/index/index.html",
    "revision": "036db0a0aade5fbf839c6d0f3179b7b7"
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
    "url": "assets/js/23.8de7ba62.js",
    "revision": "54d39b19e24b8d0b00e5a0f70ddf92d0"
  },
  {
    "url": "assets/js/24.6ffac7e9.js",
    "revision": "742c5fa2dd17b9cb34d4801ce208bc1d"
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
    "url": "assets/js/60.f23b574a.js",
    "revision": "3772bf9bbee0cc85eff8564e22a01662"
  },
  {
    "url": "assets/js/61.4e2b5eab.js",
    "revision": "c2ad71254801c333efeae24be3d8318c"
  },
  {
    "url": "assets/js/62.61e4c7dc.js",
    "revision": "01e466b7e3402522ab1124659a34d2e7"
  },
  {
    "url": "assets/js/63.9b3113b3.js",
    "revision": "6830b1cc1b68ae85ae33aa98a0a9cb19"
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
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/9.de7e8444.js",
    "revision": "aba163dbe0edbc5299171df278eb0867"
  },
  {
    "url": "assets/js/app.ce939a04.js",
    "revision": "fe52e4119bc6e8b767f7ed8745857431"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b6865a82ff9e70b179d6fa80687932ef"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0845c74e55156ec6b291d1ed26fcedda"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "65f0105a661897dd27cfee9a9d454f8f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5d56306149517267b76ee3bbab513cfb"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3bce58c8c19fb4cfbd4530c8569bc5ba"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "675ac4647783bc0e7198f29994e66512"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4561011834356bc3fed368a4f12081f7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0c33598a8e9531241f4df09bae811cb8"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "282dc2a7f769a6cf15c93cb380b9d572"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "5e202635bdd5b95d8a05ef04a521798d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "02eaff3cb0a5d9505390069e43c676d4"
  },
  {
    "url": "basis/design/index.html",
    "revision": "77ff5f178987556aeefdda908dcf644a"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "68c8b53b7cd1b7f0dfb593acad7914e7"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9c85e303be6de3899b7de76a553454e5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b0ea61e9016b389654a43fe1d9df2e47"
  },
  {
    "url": "book/index.html",
    "revision": "55d322fbefcfc0632bcd2e9f0239522a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f1aeee9929938573344fbe90853deec2"
  },
  {
    "url": "categories/index.html",
    "revision": "1d0e0c599b595674622ffdaf2eaf8e09"
  },
  {
    "url": "figma/index.html",
    "revision": "0acd0b2d393983b2e20b8a6aa217cfb8"
  },
  {
    "url": "flutter/index.html",
    "revision": "cad82e2cbd5516fd19148cc580cbfa30"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "95ce9a4416e227be30e4d7575bc58dce"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "92febf0966381c777d20ead2c0e10156"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "839421a5ed3a3952e9676e1bb3ea5b68"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "86a1f7301d8e6d47284c02d12964a80a"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c307e8c8e55f73446e7054eacd1d4003"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b950349775f4ed5c8ffd640777051f26"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5cfac5a873fbec60eb6280347a4cb31e"
  },
  {
    "url": "index.html",
    "revision": "80b41de91647e5ce18b52e1fa422ffea"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b0dc960bd9bca86864061f08c594236f"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "5aeb8425e3c05beb65a2d260e82a62a2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b5e312076374e7f85e5b086438bcda8c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f1760f110d4c4456576b30e6cc9df614"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "a84b4567e77b9154d387d7f5a8448164"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "6d2855816fb96ad8dceb4da9100002f4"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "d078eedf178f6830894c0c508768cb7b"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "315a83a017b8f867e4c4a8aa51076779"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "0c961a550e0623896975d779ef4e58ba"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "fb3f7f02d2a571098fd435b2236405e7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "dd8d4436cb6b0aedc55f136b1063d7a1"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "d24ae732895ab9e1903ddb99a98e8aef"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "f731fba20ef77180b76cb36baf1e04e7"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "e56c093fc329a6b79140ad660fd1904d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "01abdc203ba7e7812803cad23b722331"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ec7893b906e77a6e37146c515b59fe7a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9de68c5f141b7406f6353ea42979407f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "aa3f3ef9dc1aec97b3d09e10d05d6a4b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "80e3d742862d8213acbc6787f9f40b32"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "13f4533a8eaa22a4561a64586054164f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "edb21c9376d541607c49c19567c8800e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "66f1ef2ec139274d6530ab1bf946c534"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2ddb0affc013e94161e5df5f7f70e228"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "6e6525a47f7c0b4f2c5e7b918f98960d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8653cb38f546c14cfb856e260424b5bb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "da061630a8bf847ce034d0a9a9488c0c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d500f0529006518e762afc778e64af03"
  },
  {
    "url": "tag/index.html",
    "revision": "59abffc7eac7f75c17558c5c65a22337"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b6cb8041fd727e05a569747c872988ca"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "aca2c6f82fea66a469870ba9fdb693e7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5ac2cb82a548c3675ff384fe13b6336b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "cbf41d14790c81d52a870a93ca7074ca"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "363472aca87393f2e9a9c40faf9ea817"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "570b79b8c0b7f61641efc13311ca029f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4c17b191d47364f947da726706823265"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "7c3536a2c8b4f30e4b848f6832528ba5"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "52e0a602692b9acb8b391d4126e69477"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4fcc276b0c75084daaee5eb20dd2cf04"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ff81a4d0c7f095de892a101f8e5d7b65"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c2662605b9a0e48ae5dd5c6fc7962a8a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "43f475e42ece3a7558d4978a81ee91ea"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9f85744751af92c2e271aa84cad3a9a6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6387cc5295068cf48825dd31d719490e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7ec20adffd9c9ce0eeed2a9a5dcd1093"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4900941ebccf0aa44e1066921f8bf1ff"
  },
  {
    "url": "timeline/index.html",
    "revision": "25168d737c93a65fe203a41611c1b5af"
  },
  {
    "url": "tools/git/index.html",
    "revision": "837345cb8a488fbeec8aaa93ef46c31b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "59df188e0c411dcae954ef8a27184ca3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4f551e24823a12e23114208797f21805"
  },
  {
    "url": "tools/html/index.html",
    "revision": "14fa5d6614ceb575928188e3b828bdad"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "cb646181ed5ae423460c051e5ec4da4f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "95e88675ba4aa21b034f95dd36af83ba"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "eaea1c03acfab769a8815d1a1248a819"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e0532a4388934919871dd1e5ed530c9a"
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
