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
    "revision": "b81e434dea013364c753ac34fb47d655"
  },
  {
    "url": "about/app/index.html",
    "revision": "76fbde55358d63d2e9f0d58b20217bc1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "363ee5aaf87a2b03866df50025240723"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "6a02b3a8052376cf2b6d425a26c2c43c"
  },
  {
    "url": "about/index/index.html",
    "revision": "747f113db7beaf9b083eee9489fd9e7d"
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
    "url": "assets/js/11.88f3b1f4.js",
    "revision": "c4ca3e063b638095141e1da0739f087c"
  },
  {
    "url": "assets/js/12.963ecf56.js",
    "revision": "50dd455421a33e481896ca971d509d9c"
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
    "url": "assets/js/21.cbc227c9.js",
    "revision": "8101060c88eb29fe84d23aab6492660c"
  },
  {
    "url": "assets/js/22.8f5f0d2e.js",
    "revision": "7786a2dbb11a636b1380001c8c23873a"
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
    "url": "assets/js/27.590ea00e.js",
    "revision": "a0fc9c089fa67ff8eab124c7bc85467c"
  },
  {
    "url": "assets/js/28.ce1b19e8.js",
    "revision": "d6ff297fe479f5cd22717b072b59520d"
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
    "url": "assets/js/46.66243437.js",
    "revision": "9bdcd8f2eb52d3dae3eb4c5cfbb1f2d4"
  },
  {
    "url": "assets/js/47.9b5eb473.js",
    "revision": "84f8160ffaa559f110f538bb2d0e8887"
  },
  {
    "url": "assets/js/48.257742f2.js",
    "revision": "c8cc831caf9a3807ede9929ebb38d81f"
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
    "url": "assets/js/54.275b5787.js",
    "revision": "7da0e8d9ca3b08717af8aaa9c054564f"
  },
  {
    "url": "assets/js/55.fd71e775.js",
    "revision": "fe30dc72dad2738a4699c56dda64aa9d"
  },
  {
    "url": "assets/js/56.3c126e24.js",
    "revision": "f51a1712793efbcbfd15f90195ac3eb0"
  },
  {
    "url": "assets/js/57.294d9528.js",
    "revision": "97f6dbecaad725299200cf6ffe13732c"
  },
  {
    "url": "assets/js/58.52e8277f.js",
    "revision": "92e74e08c53bda00a2fcd6259f2ad405"
  },
  {
    "url": "assets/js/59.1e592d58.js",
    "revision": "03bdcbc120995f699925c16f5f97ab3c"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.ea2e2eb2.js",
    "revision": "3772bf9bbee0cc85eff8564e22a01662"
  },
  {
    "url": "assets/js/61.5fe45616.js",
    "revision": "c2ad71254801c333efeae24be3d8318c"
  },
  {
    "url": "assets/js/62.8702f10a.js",
    "revision": "01e466b7e3402522ab1124659a34d2e7"
  },
  {
    "url": "assets/js/63.95945df4.js",
    "revision": "6830b1cc1b68ae85ae33aa98a0a9cb19"
  },
  {
    "url": "assets/js/64.485597f7.js",
    "revision": "1134d18d20e0bc9836687e44a9496da6"
  },
  {
    "url": "assets/js/65.5bec7b2e.js",
    "revision": "46a4a50131b12b22727530b84e61edfd"
  },
  {
    "url": "assets/js/66.aab37950.js",
    "revision": "fdab202c9ab7cc21af194150dce11d9d"
  },
  {
    "url": "assets/js/67.90126d04.js",
    "revision": "2f804dc7cd13b8b933c0e4dfddb079b7"
  },
  {
    "url": "assets/js/68.0246b11f.js",
    "revision": "d01153666389d536fe08d416ca636a84"
  },
  {
    "url": "assets/js/69.dc9e1123.js",
    "revision": "7395216e130a8e80fe30e832de7352f4"
  },
  {
    "url": "assets/js/7.f07e746e.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.ea8f4e1f.js",
    "revision": "a944f894109c96a2442945dfa7df89ea"
  },
  {
    "url": "assets/js/71.550cd883.js",
    "revision": "053e691c132e04d3200fac99f70edd98"
  },
  {
    "url": "assets/js/72.9d82c640.js",
    "revision": "c79b9c26892c69b67c6d1d4e1e4cdadd"
  },
  {
    "url": "assets/js/8.9749914f.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.cbe02d33.js",
    "revision": "cc2abcd911b4ecd2d68026fe7b9684a5"
  },
  {
    "url": "assets/js/app.b8ddcad0.js",
    "revision": "c7ef66d21ea50280571b3c89594ddf1c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "6abfae57cef7c4c2155cfab5b85bcc28"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "249f1d4a48b06b5069e59414351c7a2e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "3943669444395b2d7237559c7d3970ae"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "71f89ac9cc79bddbc548e2625f525e7d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "765be3633fe197ce19a474f9b150263c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2af15fdc942f8ca541141e72cbcb39f3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9317926a6b51e03a37a96f8ae0186def"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5c4e575516f3cc3c3ac29ffd59609d9f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "72bfada0d067de9abf2fe7f7b2344902"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "7982786f36f09e099679e9357e38cf46"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b67c657f69d2c7a0862f1f4e21068f58"
  },
  {
    "url": "basis/design/index.html",
    "revision": "14b6b89d7adef81f71d9b1ad1e1312e5"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "bd894c126fefbb692316d63d3b352e77"
  },
  {
    "url": "basis/index/index.html",
    "revision": "da239d082066ac398bef02b1c6ca0412"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d0da5f16a479b0006e634ff7372f6fa5"
  },
  {
    "url": "book/index.html",
    "revision": "ece29f4066abe6d57ee699e775f59f03"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f3023593fdc06e19b7abb4ef86d84b9d"
  },
  {
    "url": "categories/index.html",
    "revision": "c7607b59d8397307926e1b61f4fd640c"
  },
  {
    "url": "figma/index.html",
    "revision": "394baa236bce3d0eb6ae37cdd8efb2fa"
  },
  {
    "url": "flutter/index.html",
    "revision": "bd62aabc535a2fa4a1b84e3f1ec569fa"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9f59106f35d931accf012160fa2c102d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "aea4979a37a9677d007922adc0d3b98b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c88c71473b5d83a0621a9ef60e497713"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "1b0f8e06fbb5d3316bee26ff9585c659"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e5bda8c3335d3187dd6140956fa3528d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "45308cdef5c1b2b8fefeff8add14666c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "48580d527ac8668dac55dc601f1829db"
  },
  {
    "url": "index.html",
    "revision": "158868317741ee22d8e5167fc88c21af"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0ef0519bc9b906b1a8e9dc0bae4b29dd"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "036c2115413c0abd6f7f6e921c56324d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e08f3c62f242ae6eab68f9a7adad14d0"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "4bcff84d96a88579631ac073d1518d36"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "ea7c2cc2e02da948856b54468d474894"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "615f4e45a7afaec3e262d6cfc06ec7d2"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "0c01d18f9491720ef177554fa4620853"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2735efa714d969a54e5b844ecb01f700"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "fc1c5810a098bc4ab789c2e3c2f986de"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "af41c06d15670dd4e545203db2947542"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e27b01801b07ba0061a7bc89228a3149"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "5b27316b9d1338ac1cb360c55372c805"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "5770afee1f21073cfba03ffd702cbf58"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "c73f22ac3af63e956296dbac5a0795a0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "83fadd013261688a09de52ff5e12986e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "606f5be90ad0afec2c9cba9749bb80fb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "806269f5709e17bf79f79486e7f64c86"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a15052a60a344f0e060d94cd6ea45b4f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2262bffce5a95790f7541ba42b2a2dc9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7110ccfbb2e0844dbc381fa3b698cd8a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "547e5abc2cbe3e9984c50a70b37a5b66"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ced7c3629681c6832a905064c9beb20a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d43ad6afc5198046d5979dc3fecaf26a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bb3fb06bfeee7e33e54fb29655eec00c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "045d0bec256a021b0c299e430afff1c0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "eb67509e294913975dfe734d85d39f30"
  },
  {
    "url": "tag/index.html",
    "revision": "0304c28ec749d27d62a2da6ee5270abd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0a624e656697d923612336a68e6f4f71"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9f4b645cb374692a73232411b9c3a55c"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "559253812ed27461e02265965fe93160"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f9e68d2f5433f9ee72d8e42171b64add"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "48823175a44a7b7385aa15b68dc14290"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "918aa13ad74f7945d9912ee9d4889904"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "da3c761b73f53ac0c26f07f33dbc0af7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4d1be944fae15adedaa48bf7acdfc612"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a118fcb861d27ca7a6ebd69483df92e4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a119135d746f4ad746418b55d2d3a032"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "21db168fe3b2c555dafb0c5e362b109a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3d232be7f7bd3aecf11a88aecd451cfe"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a6c45e91ae38a0398e7f19b170076f37"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8160e8158f0f99ad9f9ee4b592e2ec3e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d2074a16cd2642adf76a05205888151e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "2dfa4c8ec00634b812a2b4aa6d8429d2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6795155f7d94c8bb3209a30c0f693f88"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9df8d4112e7e775ffdc8903afb29c66"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1b91eba55cfcd4df732a192cf4255e52"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "811fd6ea9f4a218c6a22d5b8e1a3f0ce"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8524772405bbeeb31bf71cdf8d8b643f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6718741b0cdc759b42d58513ffcfc306"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "43b2b653def68dc7a641384603080353"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b588097c9c3365b8082f171632db9337"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "72e185bbf8cbed742fe9b31dc366fee6"
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
