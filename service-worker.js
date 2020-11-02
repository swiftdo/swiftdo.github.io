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
    "revision": "a88b77d17b3a7bf2177c77a8175957ab"
  },
  {
    "url": "about/app/index.html",
    "revision": "bea81bfc25d186672d6711df562cb71a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3141a279f34d421580686ef18eda5de0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7edf26bee000d630fedef5d7a4802b99"
  },
  {
    "url": "about/index/index.html",
    "revision": "b669a73972816f2b2d798f770da94359"
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
    "url": "assets/js/13.2f24503e.js",
    "revision": "8a677c7c7e4401073d06eac3b5c49ab1"
  },
  {
    "url": "assets/js/14.e121f804.js",
    "revision": "785a6af11cc4b3193daa9357d6c8245f"
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
    "url": "assets/js/47.ca0fdc7d.js",
    "revision": "731c61db324c724bac23c1d070469991"
  },
  {
    "url": "assets/js/48.cff70323.js",
    "revision": "b767576e18df6215985a0b3616cfb6f2"
  },
  {
    "url": "assets/js/49.bfb179d3.js",
    "revision": "a127d312e5920c29652b05eb0bdfb47d"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.651bbe83.js",
    "revision": "ad03a1d7094e9fc9a017f63aece9172d"
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
    "url": "assets/js/60.fd3a6520.js",
    "revision": "f92d83e8f161805c5439f53e291111c2"
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
    "url": "assets/js/63.9b3113b3.js",
    "revision": "6830b1cc1b68ae85ae33aa98a0a9cb19"
  },
  {
    "url": "assets/js/64.2b96afee.js",
    "revision": "0f1911f1b9ce666b411235e3247fd45f"
  },
  {
    "url": "assets/js/65.116f48e9.js",
    "revision": "02d0e8a4df4f4ec44b2a72b91adc1d8d"
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
    "url": "assets/js/app.37277cb8.js",
    "revision": "990aa14f1afbb20a20cd681bb1d987d5"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "4f95e85c5c6af830f1f7110c351869a1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9c859e0d7c460cd6e544ce1438e8f929"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f85c453a215dddea9d27fb18fbe8da5b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "9cf629e700549f00708f791632f956b9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "067060e5c0c33a00168da9af359d7042"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "bdcf920e700d5e9fa2f6b7f28d66cb16"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "708025b92866df0c41acee94e1eccdf2"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "65f652f40a1c980fcb2d7ba8b8c244df"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3fd0b5d6727f17d7eff2aaee4e9dd9f5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f202b37ed6ffd5468f9dfb752c2fea56"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ca67c204590acfd5437d89b889eb3722"
  },
  {
    "url": "basis/design/index.html",
    "revision": "9a651151b6f48b6d40ae921b28e22e78"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "80ef2b9b41e280d3f61fc87d5d7cc5fa"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5e1151562b19a3f6efd941390cf0e7d4"
  },
  {
    "url": "basis/os/index.html",
    "revision": "6a415384be2e30f0699bd64e826bbf28"
  },
  {
    "url": "book/index.html",
    "revision": "32e20aa5c413f8845ad822a47ad3e6a3"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "840943b0edb7f0632cddab5e3b14030d"
  },
  {
    "url": "categories/index.html",
    "revision": "5194b6eb22f9c737bfc05ee2b1ed06dc"
  },
  {
    "url": "figma/index.html",
    "revision": "be36e02f964cbad783b1ab8fec2bad93"
  },
  {
    "url": "flutter/index.html",
    "revision": "4ac25e1c7764f946ce3dd1c7174cc28c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "76bec7e8f7eaf3d89fd53a3089891d67"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ec83987f0b6e91ddc01158e22575d326"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b3c51b1ab5d5672ed0357a50a0917fe6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "0434f37bead4a24438ecf294a3b26c29"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "84314c4d66c863b8b725128b2c3cd191"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b42ddb60fc8283ab8f068d68c3d062e5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5960bf40727800ab281d9f5419eae002"
  },
  {
    "url": "index.html",
    "revision": "8bba76ddd2c5d94c908b19a2ffb842fc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ea00bf9f69835095ee3caa8b5efac4ad"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0b0b755e791c80a31793c09537d4194e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f4fcc02bf68f57fd91a93bb069246542"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "1d72fbd42deff5c56b3cecf80e9e8c61"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "1ea130d4edc6449423ab095f0ce9acf9"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "040108e161e17670a06d11de4a37c919"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "2723b8c3e79eea314e3215e63d2f593e"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7f686b39567a0f3db1f2142a7bccb6f4"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "305f16e3935341a9898d516c860c0251"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "cd6e954719182758a8f40d98ffafd55f"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "c03ffaac9b4205e7163e4c82a5747fe9"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "2c061652b52bbdad014eba1b73aaa783"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "215cd76c76edeaf53108ceaf3d99cf96"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "1bb24b9e2aa25c29aef8bff38e25a6c9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "cdc1b35a3d69af9636eb737376ee84d0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6434288403b510806ae62fae7edc6b03"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9913e0cbf20fed65e62fcefac83e70ae"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e15fd74a7a107e1d7a64b4c01c1f4c4e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "18c6596763812a7a7c45b3a31688f5ad"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "084342960a7e1aa67f731b4043f326c0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "74a906b45e1f1d0717510ad39354cd10"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a00776bae1e4d8d93d1cbf33b9598614"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cca96144c32f54b410c90ba7f553eb8c"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "b4064eed2564481b12f44fbc3141e38e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "73b184d660c467583c7c6a0180a68ca4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0386964874ab8bf0d49473c66488bd28"
  },
  {
    "url": "tag/html/index.html",
    "revision": "38ec9a1ecc7aebb37221dc91bac55fdf"
  },
  {
    "url": "tag/index.html",
    "revision": "a5926b53e37eebbac7f37573df512d9d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "80df8e77b0f8304559fda59a5cde827a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "111054587abaa2066fdfb8cd65a00aa3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3f22502d08267a9e9d537d79c78003f9"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "664cdb0eb6df2016937d7deff22084e9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e1b9f72c14095c058f3e93da8f5f9d26"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ce9518986c8d5ffbc64626759c3cc634"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "12296db06dc3ad035424211e48d9fa42"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ab6703ee60f8860c85873b903dbdd353"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "099b89b3106121c1ff0923dbb3ee1d9b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a064bbd002e461a117f015b0f07cf060"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2c9417b9aee56cf47335025dcd33e6a9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "48a45ee31143e70bf5d5f03712408447"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5c13e80be51af2a1fbdd08df6e8aea3d"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bc177d8f49ae356e5de50e1f6f342758"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "15d7d526b5375f692713ea4925cfb273"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "78ab8266f043077a49fdca3db8c75a52"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "129b8fbdf53ea8e9d898ee011c30418a"
  },
  {
    "url": "timeline/index.html",
    "revision": "4559e6806460071e8b8455b3dfcf8b1c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a234163aaaf5116f52690c95b7ee221f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d4bce5d345a8b5b4429ff214c8291459"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6625e36c6a222a9d808c7d039d7ec7ea"
  },
  {
    "url": "tools/html/index.html",
    "revision": "236f7f4dc53c41811a5b1c443f28c0d8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "812b56649e78781f32476eca552db8fc"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a7db4182cae12eeacbd1002c4e22cbf8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ba8478046b9717ba5bed90a620b40f4a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2c0f03c3846f4293b67198d48c1cb0b1"
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
