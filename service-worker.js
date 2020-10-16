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
    "revision": "2318cda7f271b9407244ef9501360fd7"
  },
  {
    "url": "about/app/index.html",
    "revision": "4a19f8071e846bd5bafbaab3fe7f8ec3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "bfc5cc5274301b3f8fdee2c9be8fa4ee"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3ce193a6a4cb4046b1c6beaef219b9e8"
  },
  {
    "url": "about/index/index.html",
    "revision": "7f2dc67cce6a361bc31a86ed03551b6c"
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
    "url": "assets/js/48.fc83e9c2.js",
    "revision": "44b697151b1539af600598b7a11b7e99"
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
    "url": "assets/js/57.6ff2994b.js",
    "revision": "e94f9f56359665dc5836bfe1b4b4bee3"
  },
  {
    "url": "assets/js/58.10933ef7.js",
    "revision": "ea387c124862c4ec51ddbcbeba04832d"
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
    "url": "assets/js/62.be088008.js",
    "revision": "c1e55a3cac2f67bfb9292ff4f7c7a624"
  },
  {
    "url": "assets/js/63.b468efb1.js",
    "revision": "17695b97ab0a7f0009c1edf53b410176"
  },
  {
    "url": "assets/js/64.4f81b014.js",
    "revision": "1ff5d796a57ab4566677ea89a669f67c"
  },
  {
    "url": "assets/js/65.62095896.js",
    "revision": "d3993a1b1abfaac669abf75ca661139c"
  },
  {
    "url": "assets/js/66.8ac7936f.js",
    "revision": "a33988bcaa5a72fcd8123be044e54e1b"
  },
  {
    "url": "assets/js/67.17a61c15.js",
    "revision": "ba0230d7ddc0612406173a81ca62042e"
  },
  {
    "url": "assets/js/68.efb5054e.js",
    "revision": "8aedc616754ec5a6f865ceab43a45b5d"
  },
  {
    "url": "assets/js/69.085a7ec9.js",
    "revision": "26e080d9ec80180bb6722d35422fb60f"
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
    "url": "assets/js/app.d586183f.js",
    "revision": "fb33af1e749f4b9fefaeb60a2830e8c8"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "7bcc677c1047456a6a228a99e974e629"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a97a45a37bb4e6f4d8317c817e6f37ca"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "75c61dd4d408ec735fd16f1895da4d67"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ffbd99e1349e17a025f0590617a2a961"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "94677a70cea169c45140deec19e5ef82"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "93de75b56644ad14511714b8296488a8"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c5d7ea8d35709350138e92619dda0ce1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "41f6995bfb5b86d0a3b03b75ce09ad20"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "a8e7a99a8e4e9b9ffe46fa4747095fa2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "339ae9471127df34ff1920c9987b01b1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4712b61a6bb17bfc782ba68cb21ea2b1"
  },
  {
    "url": "basis/design/index.html",
    "revision": "5186dd8d83da84e07acdce7bc9f33e10"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "ac30410d1406292b8149a05f276f99de"
  },
  {
    "url": "basis/index/index.html",
    "revision": "61c9762ae839da7c4e7aacc228a6e224"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8ecb53f62363b7cfca3866571c0457ff"
  },
  {
    "url": "book/index.html",
    "revision": "fd646e46af405eccb9cf2ccc78279881"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "cbb77cb45a272c69943080d0eab804e0"
  },
  {
    "url": "categories/index.html",
    "revision": "d06dc29ed45dbb3e307569c2644a266f"
  },
  {
    "url": "figma/index.html",
    "revision": "df1cd69254bf465bc573fae042383c46"
  },
  {
    "url": "flutter/index.html",
    "revision": "0e5cfd2b417be1e77f888f87c81300aa"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9db7bc41463faed4a99fbbb73ea557e4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "36f24553181ff18b26d198ed632159bd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "471b955e8225d44cab053b41ce53e351"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "51b5d414986999c96be4b1cdaa7b9692"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "298d1da5cd5d636ddad653eb8012c4b7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "3efedcee2b32ea055a635b0af18842b8"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "33cd5ed5c3513776c9032135bd6dfd3f"
  },
  {
    "url": "index.html",
    "revision": "c2903f5ed0c19160912275aa01a5a339"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "c8561123a588e14b750303e50c750454"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c4d636855e28af5f79b88599604d26d6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b9216d4db8864e045cbef045ddd341c0"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "5d0954367f7227930e64cb7909e69b1b"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "7b7d6f6c1d533cd04e68c88621d33f1d"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "303187f41636730ca037da99f879b272"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "3cba76b47543f06b77139369868d2bdf"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2befda98a8de3ab745ff04592631382c"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "02c417c0ac7473c46094decc93b8381c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "7c4aab2c152a30cc67ccef0b55795d30"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "9b40a22d150d3f533b51350d5d0b846e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "8c8c23c180c665849a1d7e49a3846c99"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "51bd74e4b6e4b16cf0ded7bfa0ba60fb"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "abe8ae2429201e72bc8957a78594046f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "73dfda331acb15f2b3442a9907ca1300"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ad04ff9a3c040b58af7a6b1f206205a4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1adafd690361527cb9685f0f54441b50"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "223882c4648ee4c261828c88be3d4b74"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1b9df1137e5f02bee5e559eb3e5cbe23"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e7108e138c89a81bfadef5e0aa64213e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "70b1046d2f4813e5662d3e98a09f3d5a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "fa798d36eda2b7df12f1a7d8059243be"
  },
  {
    "url": "tag/git/index.html",
    "revision": "af394aef5cb377b8126e14eb9e605e34"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2dd02d742da635eb8da966e581b3621e"
  },
  {
    "url": "tag/index.html",
    "revision": "2c47fec53869cfc99034bf5ee2e69368"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0adcb5453741256b59b6d097e735fb2c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "2c4a47078876ca65fd0f25923e24296f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9d1f8a1971af88215df2ce83a058ca0f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1d8c37f6cb15619ff6748936b4b5e8e9"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "855e947ca9e0f693a2219962593f94fb"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f4424540e2dcb2b23391810d0a9ad131"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0d6bf0e0a7ccc15e6f6f93a4385eb4f2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2cf8e842c8d6ee682bbf707c96ba47fa"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1e2b432d4f8b6cf75a5bd0c256c68088"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3649f2d39c5692a94dc11298fa3b1f87"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0611c7a43a19edd5233747f2606119a9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6bf65cc37082149eec18e8c9f00a4b90"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "bc6bccf154b06f06f33df5333a359780"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "baf3704a07190cd81823a57bd004da61"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "066d84f2efd2c97085ac992859a829e1"
  },
  {
    "url": "timeline/index.html",
    "revision": "2e8dfac6ad3a07bd7ad274aeb2428eb8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cf6a4234900e51a4a556d67ac27baccf"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "deb64e857bd738feb02956b8b3b5c1d3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "7945a42601bc8b010dc926860f79c182"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4036db7771a971d91495edb26b1e9173"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3a498641ab2891986c4332577ecf2ce2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "647823be97695d1ddbb704521b6a1dd3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "33a0532519a5d85f22efb63ce2183c5a"
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
