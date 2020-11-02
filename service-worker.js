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
    "revision": "31813c46c6fffe3b00a1ab0bf184483d"
  },
  {
    "url": "about/app/index.html",
    "revision": "e6678facd534d56a7620961784393024"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b0a61bd27e32d0ef5b62e845875f9580"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d1810dccd731257074b947bdf1f11276"
  },
  {
    "url": "about/index/index.html",
    "revision": "5f4d0871db4a576f0ed1ee3aa9c9a8b0"
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
    "url": "assets/js/65.4929949c.js",
    "revision": "7932113222d6a248c8545a83d02cdf33"
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
    "url": "assets/js/app.e094c943.js",
    "revision": "14ab673618be7fed7e37d9df33ee5744"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "375c6e6530a5a1346e87b1df406dcbc9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4e66b895ff345688f06c1691e44b6089"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0c2d7623cd77cdd78172ee15c192c558"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "40d3ebec3533217a03c867d4026f9a4f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "19484a87db349ebd0def312c076aa200"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "36fa97c05f2a6d750ef0a78a3079dd48"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1182a0256c9609a58eec308d859b0df4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2004e7344a181a9b8edf5f1726d49139"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8d568403f13b2d0570f6601505c6c137"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ec436429e7d2486b497267855c84878c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "945fc5a91c4148b21f491b437fc2c387"
  },
  {
    "url": "basis/design/index.html",
    "revision": "0c0248bb11205ea469f882b7be51d4e6"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "5f4df911bf7af9feac8374004169c454"
  },
  {
    "url": "basis/index/index.html",
    "revision": "078d850a3273f823de1b7dff28e6a767"
  },
  {
    "url": "basis/os/index.html",
    "revision": "60687659e6eaa012777f57470646adda"
  },
  {
    "url": "book/index.html",
    "revision": "96107a9a3168178614e3383fd49ae243"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c76bab20efd166fc42cb2322c2643cfe"
  },
  {
    "url": "categories/index.html",
    "revision": "bc8d624a27eee330377df3540eb26091"
  },
  {
    "url": "figma/index.html",
    "revision": "0a0a64610c27e0c0ef89ac4157235f09"
  },
  {
    "url": "flutter/index.html",
    "revision": "09d6e2a4d1cc7ceb3be3b488159510fc"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a97717343cc792dc7cbbd96daf5d696d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "e482bef31e2a4b964623c53bf1fc35c8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "30fdab9d074695b4084819628487f293"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "36bb9d87109b865fdf43ac2e583b1de8"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f4e211b98842631963723bea06651428"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "45fa184ae68477e95c524a5f53fc874f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "bbd3bc42ac533cd35443344c79243d81"
  },
  {
    "url": "index.html",
    "revision": "af3d095feb55c2e6fc9360fae48ccf28"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "047b5a63514566bf6de8012834edbc71"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "11ece8e9587b4d5ad326e6b541de337c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1d3ab2ad0a60557b4fadf84e4d2f3c18"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "025f0c1841d371ce32c969a880eb8585"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "ea440b4f5669c80203345a6e623ce95a"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "f810985b2af440af472ec1d6e09a0224"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "0acea42abf6611fe3479f7130b419ad3"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8daf6caefd2c6e3caecc63b460fa28cd"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ac9cb703fab4654a5cd3c2ffbba579a1"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "f41a9c927dc2b936c570df1a8e56582c"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "70be4618a61d569b0e70831d52243bd4"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "bd43f6897dab30797a62cf8465d3f26b"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "61ae2113ab90982faadf0429f8a14487"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "ffce300af39448a3c2269c3f07d59d82"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a15d26408431fbd2147c9ec094115d59"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "56d1cdddecac28c274baa47bc9bbd1c4"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "afc69da4705afd7a3f17536227664dd9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c0684da74c7c3f96126c61dc232de320"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "96a85d0ddb58279611435ab0ae6c4f1b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "bd31dbab02011ba37d19101d6f608b16"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f7d68c10dcd80fd31ec90c0a25bc4712"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "87ec647c6872caa537d36e83a4ec59fc"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "516c2de5b5ea2d36d75c1402926c893d"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "8c0921492682d6957b03afd2fc32911f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3501cc3778107a1f962b0e969140b62b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8cf0454f75f2fe08c7a892045754ef17"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f21200c007c2d53128f72a3072f424ac"
  },
  {
    "url": "tag/index.html",
    "revision": "6d4c951fb4d3ce98937de8a2230c09f1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0573047945c663d1f415af3b6c989686"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "35dfb95b48ecfa0f3c24db19630de4cc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1315678ade69183eba55b338bbdd495b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "121e6e9c1a502263d186c03d4146e5ff"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6c5738edefe538ef489c64137e56ac75"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "664cd9a17346ba99849b344b1ebdd844"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1f76c3e8fda92959a7c9ea270fea1bc6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a28f5c5dff5a8f60625159a4648d7b67"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f40b6366b937f3ccd65dd5c42c2e88da"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dedb625750b8f86c20112ab1bb1768f1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "0b9be175a9f74482266715cef51a360e"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "102832749880e81ab3cc7cbf6cdcaf88"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e0264aae81da1d20dc229d4c20e7a1ec"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "18120f7bda9bef7b12b806aff413cd24"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d347662dd3d245e5c8cf0b09e99689c0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "de139b8ac0577e56efff1f14f4f18e23"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3b01b9156c9f60c5f8d6664aad6d2f93"
  },
  {
    "url": "timeline/index.html",
    "revision": "77868ce56cb263a8159b0784697ae418"
  },
  {
    "url": "tools/git/index.html",
    "revision": "733031ad77cf2a011f12dfecc3b1f37b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "92694d4c47801ecfcf940f78242fd663"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "24cb6491b20f92bc584ebf18cccd2dae"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8a9e5c1f00f71b65f87b8b78094d188f"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "23b76d76723bf51ca0d28762f321698a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "47f18b2dd7aa219a0cfcf5045b4d26ae"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "81701d5d5196847dd6657bfb8d869b05"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "49950449e730a6f176630db04a7cf51e"
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
