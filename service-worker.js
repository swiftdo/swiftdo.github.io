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
    "revision": "1ca11e638bcc370c976f81ad6df89cf0"
  },
  {
    "url": "about/app/index.html",
    "revision": "351f4c72182f11867fda13d5778921af"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3caa68cb59a20696f7b45a0e02c09cc3"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "1edb18288a800771393dbf27cb01d330"
  },
  {
    "url": "about/index/index.html",
    "revision": "29f9ee3607190ef3bbd890effb37b19c"
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
    "url": "assets/js/26.af2a9f70.js",
    "revision": "29bc23e0a5df2f7d9c8a43cd8b686a81"
  },
  {
    "url": "assets/js/27.fa493772.js",
    "revision": "f8f05dfd478203abf7d43fafed77914e"
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
    "url": "assets/js/34.bd619e62.js",
    "revision": "d6437dda9adc06074761caf7bf35a167"
  },
  {
    "url": "assets/js/35.5c83cca7.js",
    "revision": "e2a12a4233e91e998defb81d3b64593b"
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
    "url": "assets/js/41.708734dd.js",
    "revision": "973b2b0b9d62c4456ddee5c0b6e28fa9"
  },
  {
    "url": "assets/js/42.68df66d2.js",
    "revision": "dd30b8a8fb58eed422d85e2fc28f5ed3"
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
    "url": "assets/js/50.952393dc.js",
    "revision": "54aecbd657e0431380d075361183b93b"
  },
  {
    "url": "assets/js/51.91edf7a9.js",
    "revision": "02cbdfa4b996f7d1d5c1c45bef9f51fe"
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
    "url": "assets/js/55.c6ade27b.js",
    "revision": "efeb0e2b8b519a2385db93e2f3794f70"
  },
  {
    "url": "assets/js/56.9a119e2e.js",
    "revision": "1031fee6d1477feeb093b80bbfe6fb98"
  },
  {
    "url": "assets/js/57.254e2e59.js",
    "revision": "73ca39b0db843b1b1327a5c7d6956d68"
  },
  {
    "url": "assets/js/58.aedb8090.js",
    "revision": "d09afe6417d491eecda089035d604e93"
  },
  {
    "url": "assets/js/59.f07a4c18.js",
    "revision": "6312dfa8813d304f1e0edc695b31b447"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.26ec747a.js",
    "revision": "5bbaca23305ca933ee36809286fdd517"
  },
  {
    "url": "assets/js/61.7ce28a16.js",
    "revision": "06f9d3db08f98492cdf54f5e925ddab9"
  },
  {
    "url": "assets/js/62.04ba6f75.js",
    "revision": "704e6909435a095c1f67cee661a8b66c"
  },
  {
    "url": "assets/js/63.5586ebf2.js",
    "revision": "9d99d3a8bc14516f7533403d209b6889"
  },
  {
    "url": "assets/js/64.dfe3db3c.js",
    "revision": "046ebe3390cb823b376c4f4de3d8d033"
  },
  {
    "url": "assets/js/65.a635d1d6.js",
    "revision": "4cc32cf3f83269af83d29b62cca9540d"
  },
  {
    "url": "assets/js/66.f0a47229.js",
    "revision": "a2b6eabf1522eefbbc88c943089dbf2b"
  },
  {
    "url": "assets/js/67.20e938b0.js",
    "revision": "c516ce373611563a0dd0b366486a3490"
  },
  {
    "url": "assets/js/68.17636db4.js",
    "revision": "50b74c0348b3fe45aad6da74dea3343d"
  },
  {
    "url": "assets/js/69.ffbf22bd.js",
    "revision": "b4c8e02b9c8f7d29a8f6cd544bb807d9"
  },
  {
    "url": "assets/js/7.f07e746e.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.327f63d6.js",
    "revision": "9d5c39aee42b26cec85663e46b798aef"
  },
  {
    "url": "assets/js/71.57d0964a.js",
    "revision": "50b1127dfe88d17f4da3950c17ed418c"
  },
  {
    "url": "assets/js/8.9749914f.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.bcf3132c.js",
    "revision": "bbca90bf2469db2080ffbb34919935f3"
  },
  {
    "url": "assets/js/app.ee73425f.js",
    "revision": "e1b986cea30be3220148abf649b8438c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "bf1b4e747fdb9f0ddafeacddd40b1347"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "03b7ee1c164b2e7693523385a4fc21cc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f6eef7a8611165270c3a9ee8a6439efd"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "94cae043f65839d7351793a20d4c3d24"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "fa79ea1254068072a39e36dffea6e096"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ec86b519b0cd2a247c2215199c6058f9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "143f3501ee78a06d976054e953a56da9"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6cfaa87fc5782131c1b5b2d1b562db02"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8b229c8df4515dbe315f483c37db3362"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "133fe20714c725a6ac9e9c46a1b226a5"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "379f1b20da87723ae4d5902b500bdce7"
  },
  {
    "url": "basis/design/index.html",
    "revision": "0ed66016e4d9a465d915112c689b35f8"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "a81ad3b49a4ab68ebe7e3b976e02bc11"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0aa33139451dbfcb5aa748e9172c0f77"
  },
  {
    "url": "basis/os/index.html",
    "revision": "06a4f11dceed8532a5496a245801becd"
  },
  {
    "url": "book/index.html",
    "revision": "8f33e79e23f1034c8612a7555857c7b4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1d80bc1ad918112d229fc6ecad5b1666"
  },
  {
    "url": "categories/index.html",
    "revision": "14260b3ebdc70e709550b5baa59edceb"
  },
  {
    "url": "figma/index.html",
    "revision": "62dd5d15bdedfbf658c759b1059d700b"
  },
  {
    "url": "flutter/index.html",
    "revision": "d2af77ecaab725a63c7d4f6ac30bc966"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "014bf2c9b8b982942a76a085c15c890b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "69d6d52f7ea9abc0e360dd138f542328"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "98761fbcfa3d66ffb176a52caa5092b8"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "31ee42c777937e3fd4dfc68aaa2c38e5"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "62f261b12fdc0423f844557b80d6ee3e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "00e6cd9923537b45ee5544118f8c673f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e257f2f0ac04c99a4acd319463d6f8fe"
  },
  {
    "url": "index.html",
    "revision": "ebe37b43f68c2f535126a9b3f5a7d74d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "71aa79210acd990ad93a1678569cd190"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ad7c2e295d5a057fc1d652eb5611f9f2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "538d00d717f83417c57a68265400a5f3"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "5767fbebba4b47ca04a183462d9e6ec0"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "fb159a2f62d195a2fe585003842656a2"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "41fb340b97e8d119f901e1a4009fda66"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "f1632575d57ad65a5f9aee4cd392e65d"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ad7c29ef26505d05ce8a45498c288b40"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2afe022f24b51b5cdd67043aa0adbbbe"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "220e7550218f6ff535be91c064fb92d5"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e736933c747441875596fedc9de85a81"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "801c9626db87bca5bd93fc283e069677"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "ada5132696e40a9360f442f6f41ce49f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5528d9997e9bf6635c8731f8cc50db38"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "5eb07da61e897796bb79ed2a30019b06"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a49dacde5e540ecef5c885e863610afd"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e51addea50c86dcc3bc6ae260e1ab574"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2e638d662a151a79da240bf1e95cdd9e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9ccef2459dfc9975aacc3c642295f186"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "59441e9e04e20c524c4c4a9a95750432"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "292cf0710a67645f76ec35b1c3be5f15"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e8aa6fa46f932e0e9b5ae973ee078fbd"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "0803807e22b6197455bca68cb90534aa"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8f0cdf0621983e58be4f12a0dc127918"
  },
  {
    "url": "tag/html/index.html",
    "revision": "21a246b34e8f6fc1c754e9dd6d616970"
  },
  {
    "url": "tag/index.html",
    "revision": "fdd2fedc2d7c3282ff7687b331d7b3b9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3eda9a9cd5a00353e10f589cf53ae726"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "587ff95cc55da8c970e8d8a6082a1a64"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "81c0b160fc90e1f593be925008287b8b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "83cdd17bfbd94f52d711bf43c7a1b50f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d339e72a4829f1e91ccd23bb8359f34b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "971184c7f1797ec0f2bcd4f5ae146284"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5efe68e08924e375f1f02b37ae96d44d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "342261886ab4a4b388aee574a0b54e46"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "87186acd916b05d94064cb0272107207"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b8555391b95835a358c512341b3bec54"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "fc9a13abd5dc7cb61440c3c4be9d2489"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a43614c2e5215d3ac721e64b2245ab3a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9771ddb5ed1ab40c080638f3163dc725"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "692acd43970009d29d0add3c98c640a1"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4a6d12f08f183329fa837c8f853f6d5f"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5c6b49a970ea9d5a8c7e7337f9868b1f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e0a4e4765cfb30c776df893b32e64d68"
  },
  {
    "url": "timeline/index.html",
    "revision": "334683db99587e9f9ec9be1d7e5fe70c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2c369a1719971ffa82ce61cb714fb8df"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2cdee7d70456c269f4c329a665d5d39a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "abd1007b464cf22a7afd4bbf4f7871eb"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b538fd4796a979a4db2251a1a579088f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ff0c8a636f90f917d219c5b2194932b8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d5d427431f40d8ff807852241e629fd4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8bd099f656bb3051fb3f8833b8768436"
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
