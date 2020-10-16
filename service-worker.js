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
    "revision": "03b599acd693da548c77cc72e6a0769b"
  },
  {
    "url": "about/app/index.html",
    "revision": "52a4d2c33e54d3227fc585b389e4f44b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "9d12d17b14dd15545ad629dd65ffd83e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "67ddb24dadc09f8ed9ffd4cc9db1df47"
  },
  {
    "url": "about/index/index.html",
    "revision": "a4f9191469e9d23f9910a4a979830022"
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
    "url": "assets/js/1.88afa5ab.js",
    "revision": "d25c35a529e824a10392e774e3912169"
  },
  {
    "url": "assets/js/10.11797137.js",
    "revision": "bd7fc62b5926950d899372ea2c8843ad"
  },
  {
    "url": "assets/js/11.32f28b2f.js",
    "revision": "cada028dddf3f9175af6ef858c0553e8"
  },
  {
    "url": "assets/js/12.7683926b.js",
    "revision": "7c80409a8ce42968bdf00553b892205a"
  },
  {
    "url": "assets/js/13.33557c32.js",
    "revision": "74b67427937a197fcc2027b38489352a"
  },
  {
    "url": "assets/js/14.5f5de77b.js",
    "revision": "b26355e42018d76202456720f647ff86"
  },
  {
    "url": "assets/js/15.e4439e6d.js",
    "revision": "7f1f54c81a58773e007d3f0770adc322"
  },
  {
    "url": "assets/js/16.79038250.js",
    "revision": "609dbf8c75747f59de3640cd378126ef"
  },
  {
    "url": "assets/js/17.b7c59add.js",
    "revision": "53103a5cd6feeebde25d6ee0f28f9d96"
  },
  {
    "url": "assets/js/18.307d222f.js",
    "revision": "1ddbcec0d1342d66222877c287ecc9d2"
  },
  {
    "url": "assets/js/19.2f2314ed.js",
    "revision": "84805c490a871056b507439977552644"
  },
  {
    "url": "assets/js/20.3d3911f5.js",
    "revision": "3e42ba62ddbbc101a9763a5dd4825107"
  },
  {
    "url": "assets/js/21.5f087bcf.js",
    "revision": "a9a775f071a685f7b716c44593f45173"
  },
  {
    "url": "assets/js/22.37df95b0.js",
    "revision": "3a2506719d04228f15b9d7c7f1e3fc38"
  },
  {
    "url": "assets/js/23.15ae32d6.js",
    "revision": "0972cd4f5054c07c5676023f02c4b218"
  },
  {
    "url": "assets/js/24.66dafdc9.js",
    "revision": "18e92fa984917daf10d78d63b876643b"
  },
  {
    "url": "assets/js/25.013277dc.js",
    "revision": "9bfcbe3ef6d452824008d19e8257a55b"
  },
  {
    "url": "assets/js/26.6cf86c14.js",
    "revision": "e9214ab0d2f31a4e6aae3949d5ad8fdf"
  },
  {
    "url": "assets/js/27.07cdb1a7.js",
    "revision": "66748e0b21d8d98d083c15e468fd6b1e"
  },
  {
    "url": "assets/js/28.308ec362.js",
    "revision": "b0187e99132c72a5afc05ca30674d438"
  },
  {
    "url": "assets/js/29.de85dd7a.js",
    "revision": "f225e5884380a64311ab9506a2abdad6"
  },
  {
    "url": "assets/js/3.861d2001.js",
    "revision": "39e05bf0ca1c1528793236dc7e9ecfde"
  },
  {
    "url": "assets/js/30.4e9a2b34.js",
    "revision": "614e2bd42102c5b8db529e88b74c25a2"
  },
  {
    "url": "assets/js/31.36e1102c.js",
    "revision": "ed139098853a537bec4c887633308fea"
  },
  {
    "url": "assets/js/32.cd9e0cc6.js",
    "revision": "8285a9c999310bc0191b19b01cb1777c"
  },
  {
    "url": "assets/js/33.f96ea019.js",
    "revision": "0f4ed56ed536510a6ab1d95bce214171"
  },
  {
    "url": "assets/js/34.adf02b0e.js",
    "revision": "d9ca96f86488945ef1702672efc45d6f"
  },
  {
    "url": "assets/js/35.993538eb.js",
    "revision": "9a96f1987cd937c37ecc3bd95af07481"
  },
  {
    "url": "assets/js/36.74fc5ab4.js",
    "revision": "ecc978c0575f391597461e5f43ac6a32"
  },
  {
    "url": "assets/js/37.190abcba.js",
    "revision": "d5443ef8c45d06a708df4b39a0546fdf"
  },
  {
    "url": "assets/js/38.5b0ab75a.js",
    "revision": "8802937e936a52a561dd80809016733e"
  },
  {
    "url": "assets/js/39.115593ab.js",
    "revision": "4909462303d6ea05d4a6f84b8d97e433"
  },
  {
    "url": "assets/js/4.b87db551.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.496579fd.js",
    "revision": "d949e5c5b69b902efd58f0c99707cdc2"
  },
  {
    "url": "assets/js/41.d46e59bf.js",
    "revision": "47e5c0d18c2f572bc80cdfcd0beb9ab2"
  },
  {
    "url": "assets/js/42.24ffb36b.js",
    "revision": "6a3b93bdc2a1782180e2c5c52a06b938"
  },
  {
    "url": "assets/js/43.3ca4f222.js",
    "revision": "e1000bb46616c31306bdcf6c7aa77aa5"
  },
  {
    "url": "assets/js/44.5017eb42.js",
    "revision": "c9abe75b6e7cd94127760424d7ffbad7"
  },
  {
    "url": "assets/js/45.1bc39c76.js",
    "revision": "12336b47028d77b515560e2be489bd8d"
  },
  {
    "url": "assets/js/46.d8e7a1b7.js",
    "revision": "00068a0ea8e63351814cd92ce633f5b2"
  },
  {
    "url": "assets/js/47.a3213036.js",
    "revision": "7e287fba408496fabb7a894f53bc28c8"
  },
  {
    "url": "assets/js/48.21817ab8.js",
    "revision": "c12f6002823877223bf657b387fdfa9d"
  },
  {
    "url": "assets/js/49.4a49bcad.js",
    "revision": "d3276fc31f8408ad3ef24050a1c37400"
  },
  {
    "url": "assets/js/5.46ee72ef.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.4beaab19.js",
    "revision": "875f8aed44fc399a6510b8ced30ab449"
  },
  {
    "url": "assets/js/51.b2391122.js",
    "revision": "901643510870e8f084e7c47bc92b6f7d"
  },
  {
    "url": "assets/js/52.d9aced77.js",
    "revision": "aa47eac9d106dc6a8d7b3006764b5ef3"
  },
  {
    "url": "assets/js/53.b635a814.js",
    "revision": "132a7678376f1f407d3848668f41df76"
  },
  {
    "url": "assets/js/54.d5ba709e.js",
    "revision": "9cccff2bfbd02a330819863104d374e1"
  },
  {
    "url": "assets/js/55.bad804ce.js",
    "revision": "44119aad50c4b46b92c26513874974af"
  },
  {
    "url": "assets/js/56.37ad6cbc.js",
    "revision": "241016649c125ef51022e21110d43815"
  },
  {
    "url": "assets/js/57.c2bb38dd.js",
    "revision": "24e43456b433d97d5e0ebca43272ff3b"
  },
  {
    "url": "assets/js/58.54cc0c92.js",
    "revision": "05541b49becca2d4b4435486050286cf"
  },
  {
    "url": "assets/js/59.8a93b0be.js",
    "revision": "7f957db3e0b89dff969bdbb112497a67"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.1b65f2ef.js",
    "revision": "59e60998acf07a1d5ac008afd388d722"
  },
  {
    "url": "assets/js/61.0134387f.js",
    "revision": "da72caa9747e3e5563e811f82765401a"
  },
  {
    "url": "assets/js/62.73826e72.js",
    "revision": "d8e712af6f6121861795d6c8e08f43da"
  },
  {
    "url": "assets/js/63.00546089.js",
    "revision": "6bd1a67e0a775ab90caec8a6eaef7a08"
  },
  {
    "url": "assets/js/64.4f81b014.js",
    "revision": "1ff5d796a57ab4566677ea89a669f67c"
  },
  {
    "url": "assets/js/65.e8bba991.js",
    "revision": "91a5d057f7b30c32e380477b579ac1e4"
  },
  {
    "url": "assets/js/66.b69fc7f2.js",
    "revision": "dc639f2ae3fd730979088b5dad581d2d"
  },
  {
    "url": "assets/js/67.3b306a2c.js",
    "revision": "5824d640ccfb87e0bb9d01b397efd543"
  },
  {
    "url": "assets/js/68.d0672053.js",
    "revision": "320a9a499a6ba9e38f09858a2e5790fa"
  },
  {
    "url": "assets/js/69.c9502519.js",
    "revision": "89096a9b44b35b3a28636566455fba1d"
  },
  {
    "url": "assets/js/7.f07e746e.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.d7f9ec8c.js",
    "revision": "e32ee89225a17d96e14d31c3f2a73ef6"
  },
  {
    "url": "assets/js/8.9749914f.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.1042bcc7.js",
    "revision": "15ea412f91f14415a473ec05a6198b81"
  },
  {
    "url": "assets/js/app.c505dbb2.js",
    "revision": "617d592bef487d3926be9294b7f246b5"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "48fb3792c8a1c40eaf0b0efcd83049f2"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "657e581638c9d1bc1acd04d0fd7c45a2"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d7c6c2f4723c6103a1f23b0e75123371"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "dbf645fedcb04073323c25ec249a0a7d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "aac2479e9e98846ee10951bdf6c42ee5"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9567152a7f544a2d676dc40ffaaa3661"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "33b2c303b913bfec9f646a1c3017d2ad"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4728e01245fefa158cf4966555cdf262"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1e96883961b9e7c1beb0f4594886488b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "2c51adbdbd1a5e582156c525d20bed01"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "251c81386725ca837efa7db01856c055"
  },
  {
    "url": "basis/design/index.html",
    "revision": "862ceccf09a4784ce0c67ae176ddfd52"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "76b86e9cf9727cbf4fc89bfcf868f03c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8ebdd81a710a9de8566b110c0345ca58"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d678e04f948bf70f9c7a0f6d4e8eb5e0"
  },
  {
    "url": "book/index.html",
    "revision": "86a950912a8f02d4c775512c0476f038"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "49979d0bbb95ac533c41360dc1bec2ff"
  },
  {
    "url": "categories/index.html",
    "revision": "055aa7534c55a5f195034537356210d8"
  },
  {
    "url": "figma/index.html",
    "revision": "e48d57cb4fd97c618b57740561476df7"
  },
  {
    "url": "flutter/index.html",
    "revision": "bf2c54667335f5dac6ea8131d07615fd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "40a3b188f21a70bd8868f353d3646b51"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "aa7a3127c45d3bb73b580a35ac60cf59"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "99e5075bf4214ad17b6f9f64dbabe9fd"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "25531ea0994418bd1a4215882c3ebf74"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f07c8328abb835df5ef6003571d9dcdd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "32f528a5715f424dee960b60d9ecfab5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a932730afa4c3fb5f75a4582ed7913d1"
  },
  {
    "url": "index.html",
    "revision": "b88ac3a81131ac719dc334ecad5a4548"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0b62e8a15b65e66ebb23f679690de740"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "2890cbac432bf1fc70c77f7da6a1289b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "55f9366e99c43e6b43f4c4c9ab5e6ba5"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "2cbf5b485ef62cbeac1f11351ca1691d"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "dd4eeb768f581e5be6eb30696550ab59"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "bdd8873100e3cb06da8085ecae1ae4d9"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "eb51648447f0b094d6492b6775804a98"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "aab816b85dfa7425781d6a733e5d935c"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "525b51b1734ecb78e70f28c1f6edd797"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b0d485a21ed0ab1775f417680ee712a8"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a10895e3be75facc369929190cc946dc"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "50d1aa6cc9e358fe16fdf07aa843c6fd"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1eaa223aa5f68ef53286eb0e6c1a8c4e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a21f33a21f7f86dd350fc7459423deb4"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2d49c10595cd4b2531a2cc64a27f566d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "da927a0515b655a29f43b993b8a58a07"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "33eb4f4429c0ed6b9efe6f4621e524c6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "83b24a524f8b14ca5384dbdb87b54f55"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5127a1dd2de79614aa4a56563e6ca4f9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e700d72a2200cfc854d182bf9f4366e3"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "95000d50b3cbad314a72f8b1459554d3"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "100612dac6601eff2fb665d5782ae92d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "06c8794eb61d724115b32f8b55ea1e7e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "db72ae9c56ad5eabaffd577c3e8a6a51"
  },
  {
    "url": "tag/index.html",
    "revision": "e53187ff67539a3695c30241b585685d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fa8b607ff123c428c5a2211ce62749af"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "54d5f23a1eea8aabc8cdedacab65605b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4d4049a5bec92e73a4ea6c07b0e6c7e2"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "97b33402ff13f240336d04292a17e718"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "2b338ade6da92a1ed1d99d9234e6e96c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b599e2c46aa0a905bb7ff15c1a790523"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ac378d1ab0c52dd95c57ab8fb739b722"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "4ff16906a731821bdcb8dd6047834628"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7d9408d26f260755ca262d55d47245e6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4a59075bb369b182f300430297eac717"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8d236625516c90e7d081030afc629238"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "54b76f9b34376bafa5176afa737532a0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b0bc84db9bf2530f6d1885e951ceea71"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "68b1911a18d74b889d6ba0fa3fc991f5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d48c90749898f2cde0ab761954837a7e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4e7385e1fd963d39eb64084d36e1c3f4"
  },
  {
    "url": "timeline/index.html",
    "revision": "90b871ec2f757bedca75789fd0bcd773"
  },
  {
    "url": "tools/git/index.html",
    "revision": "984ef94069260cbd87ad1c1ea207ecd4"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a8300cf1961c7f143ab98e3db8d851db"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8d50b4df26c37cd785c8f0a44c94a46d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ab0c805e2e0297aa24614be4364186f0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "946459f82e56448e433e437419055a3e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8c7f8b6d8a548a0d63d0d09dbf15dbbf"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bb4a633413cd54a53e570b6a23338f0d"
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
    "revision": "ecf97432d3f0c1c71f25d45113b4460c"
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
