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
    "revision": "f1e126d3f790915a2a2079b3773249c7"
  },
  {
    "url": "about/app/index.html",
    "revision": "1051b7e7e1d18a68734b4f4bdbcca68e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c5e493657aad0a71d1eea7acdde23a7a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4694b794759c9367f4910ba7cbf22d02"
  },
  {
    "url": "about/index/index.html",
    "revision": "c510a490f29449ca0d3ed80f9bfdb4e1"
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
    "url": "assets/js/60.43e12819.js",
    "revision": "a67f3815bcbc53c348461562e6ed6541"
  },
  {
    "url": "assets/js/61.1169b0de.js",
    "revision": "f7ad5fca5a0a2388da6145aa3195c6f5"
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
    "url": "assets/js/66.7a772672.js",
    "revision": "850229e277bd426834b8e4684ca50d18"
  },
  {
    "url": "assets/js/67.3a60a60c.js",
    "revision": "f01252c21813d17b50b1f26de69c3586"
  },
  {
    "url": "assets/js/68.3a9fbf2f.js",
    "revision": "72d77fe27eadd633e92074c8af949f0f"
  },
  {
    "url": "assets/js/69.03b5d6de.js",
    "revision": "6b8c10c29cc67736d09cbb4f1be9f70d"
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
    "url": "assets/js/71.c8a2f0e3.js",
    "revision": "5c34d46e823964d52a768ff818d0e9f9"
  },
  {
    "url": "assets/js/72.78c7715d.js",
    "revision": "ddb2592c1c8233a390cadd5e1f2b0fa8"
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
    "url": "assets/js/app.8215b3e5.js",
    "revision": "e0258f91260a76d6d18fe0d92e6c0649"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "9e006a6dfbc8c1c817a1e7729318f28b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d1a1078219114e1ce8bbced4a87ee9a3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a4779118760a302926bbaf5dfd4fcb47"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "6ed22ff946efef36f7c79c5466d1fd01"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "fe49a6fb1251f87afb3ef1c4418ff711"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9895548b065c1e4e398ab9fc522848af"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "847afb887e8c4d5ddc8a2d300d97680e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "39ab7f2e69af438edc96133a21a8ed1d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8753a05e04c4f76727f4fea0d394c839"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4853c9431c0d208f03b36efcb2c5d84a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c70fcdf820d6577f939545276f19ca76"
  },
  {
    "url": "basis/design/index.html",
    "revision": "7e9d7fb89f151c33a6a16f9d1ad4f591"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "e06c786bf37edc0bffe3437e66a35545"
  },
  {
    "url": "basis/index/index.html",
    "revision": "76d875c6752ab6c484410c690ae02a88"
  },
  {
    "url": "basis/os/index.html",
    "revision": "aaaf63d731e689fa56f775a6ceb476cc"
  },
  {
    "url": "book/index.html",
    "revision": "5e356b8e6c278ef2c395ded8f2b96b9f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "fdc0dead76a62cdeb08d0f964c143149"
  },
  {
    "url": "categories/index.html",
    "revision": "f2bc18c0a22aacd04a8dc6c9e5bde06b"
  },
  {
    "url": "figma/index.html",
    "revision": "da0cb7380e931952f1b95483d7628c86"
  },
  {
    "url": "flutter/index.html",
    "revision": "374506db0b810fc4a1b8dc042fa28021"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "f116d4b87b9fb8b09e7dc7c5eb38bbc1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a8d8646f9494a1680ff0a3fcd74f6245"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a751db484936d13bc39605070b327668"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6b5b83a7c387be8d1eebd858df63915e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a90cfc8b9d57ab3faa5548d2dd92114e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0a8ba99f6e287af691903890bfef4922"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "24d407f5a97b2803a2d635146bde15f6"
  },
  {
    "url": "index.html",
    "revision": "65155a3b4aa457c29621e46bf86b5a98"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "449397cc3698d6cb92e5b4b8c18d8c2e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "e631e15a8209b03650e4f9e0837d202a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "cae443ed5b2acbcc83aa002fcf6545be"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "bab6dd65b10d966f7b57c0922bd8a921"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f098b7e2fabf8eceab031adfaa4ad5e4"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "8be14877b6c8c4ccb08cf64f4ac6f137"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "11100044d6b0c0532e1f5757a5c2b52f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "82a7b1da46866b8229b28fc87f0c9545"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "e04f966fe8299b0954a2c617776761ec"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "fe2a9a5e59205c3a8d9a7070dab10a01"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2d0f7c208870dc80b84d1c1b2f4a513d"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "f1f94c203fba556d40cdd2eb5875c07c"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "75eeac93ee9f4ff9c24cb01a06089560"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "af88d634d831d2b4291e00adb6b28e87"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "412fd06646ac465c1ecb448052b991f7"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8ec295cf0de2e0d5be0a988a66e97d39"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "8c7abf9325c9eeae8a0e6f02339a83d4"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8207953aa3e58105d82a34f0cf4b6fad"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0f4b32a3384b49df09ae7a00fbde2842"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "6fd843aa759c01167023d1a70aff4775"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4b9c2f84eec8747c65ae1a9b15e5ced5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "34e601f8252850e5798cf4e72448d80f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "872ad8e683b81294418618ed0b967aeb"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "39ec2860fbb8490493754183a85afc76"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d7dad0bb0ddb74068e7b45c63c71528f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d0407dcedf4da702a576c88418de9bdc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9d9d462777f892093407c546483632c0"
  },
  {
    "url": "tag/index.html",
    "revision": "8afab61c619801af80926ac4a13b7ea9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "711b59b9ecdaf1a2099f5affcb0b727c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "1ab2c66d32398065aa3876fb060f7926"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "2f1ec495c51b48e513d5c8ee95034fb4"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ff917b97378ad3e93fce3cfd3cdefe1e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6b8fe691a2a31f772efca63bdd29d70c"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "6b1d61fcfc469cd11054cf8eabeefdb5"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "116825efb01f7a658483a5e0b9453bcc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6667ee09c4bffa5077e345c83a431404"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c92eae038a5f5ff196eb4cae237463d3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8cc63af7cb8f6f5a330424d5f1840ffa"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "325be790c94b0f99190793d74322d053"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "944d26424a06aaa3e23645ec1374ae2a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1c1044c8074c2dbc6ffc0262a07f53c2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a4c76cb35d78fda67edf243dea9b0806"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c4eb7ead20c21a8657ee14e77810cffb"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "cefab801b952fb480e1cceb89c72effc"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "abbc08f187f20b73070bccd5d6dc1cc1"
  },
  {
    "url": "timeline/index.html",
    "revision": "62cf60431e61f509f7616f6fb3c3e018"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e54e99092e21b7b0180236722ad45e35"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6df4fd797bfa1fc22fdd6820a3145d27"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e1d290ca11690ad351a41595df629e97"
  },
  {
    "url": "tools/html/index.html",
    "revision": "eba246ac550633f622f13c4daf71165c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "32706f739e984eaedee206ed4e1d2bd9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d3bb377a51d7fa9c84a89389e1577fea"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e28d5f8c4ff9ecf5c275728641ad1a1b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "605a3dcba268fc380f8fd40310606b2e"
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
