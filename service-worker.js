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
    "revision": "8aa2c7ab671c40c0985132d373ee9af3"
  },
  {
    "url": "about/app/index.html",
    "revision": "f6f8b13f81338da40db449214251fb31"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f9f86edb0b99319b30be70e7f94f0d08"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7a902872b1fc7e6dd6175a57746b1a3b"
  },
  {
    "url": "about/index/index.html",
    "revision": "c049a10a860e0cefaa41781b14231c69"
  },
  {
    "url": "assets/css/0.styles.625902b5.css",
    "revision": "cbce2c0a748cf5fab169cab5edef8613"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ed13abcb.js",
    "revision": "2416e7e08846e26e398243e670751221"
  },
  {
    "url": "assets/js/10.d33307ad.js",
    "revision": "21a37afa245bd192b37a63d891a29d07"
  },
  {
    "url": "assets/js/11.ae06c7f2.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.fe636fc1.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.eafd63ba.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.145fbab5.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.5f7b5bec.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.ee6de255.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.dc7a9df9.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.a5ad71b9.js",
    "revision": "fbf0fff568b930c7f817f02288467bbd"
  },
  {
    "url": "assets/js/19.7feb2324.js",
    "revision": "06a99c048b733eaf60918e9bbc3b214b"
  },
  {
    "url": "assets/js/20.ec1e80ba.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.8f17b6b0.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.f464170f.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.228231e7.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.a85ec7dc.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.5d6d0d49.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.62a6e1e6.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.b47c23ac.js",
    "revision": "44373f84637a907141f666e5a4afa6ce"
  },
  {
    "url": "assets/js/28.2d353f4d.js",
    "revision": "cd2aec008fb6b51f3512b8525f8aa17e"
  },
  {
    "url": "assets/js/29.1209c3c2.js",
    "revision": "d86d6b5b52bfbeb89f161a9d2b8bba98"
  },
  {
    "url": "assets/js/3.1394f437.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.b67dc797.js",
    "revision": "c191bd3a5b3ca69abacc379da638a2e3"
  },
  {
    "url": "assets/js/31.92346edc.js",
    "revision": "dd88535437866931e3b0746a11574937"
  },
  {
    "url": "assets/js/32.23ee722f.js",
    "revision": "386428a2edc45425b9d0b6c8e7d60b1c"
  },
  {
    "url": "assets/js/33.f911c99d.js",
    "revision": "827935b53285abd381357102fa82c137"
  },
  {
    "url": "assets/js/34.4cc41a19.js",
    "revision": "12801ff7b20bde3fae41a7ea0b8f8063"
  },
  {
    "url": "assets/js/35.e1badabd.js",
    "revision": "73cdd0fd953ff22fc4326b31d9989850"
  },
  {
    "url": "assets/js/36.c9efd7d1.js",
    "revision": "f8064ddcc6e7616d7d2d097b9dc504d6"
  },
  {
    "url": "assets/js/37.de8d7439.js",
    "revision": "d826f1981d098628a326575d2081d114"
  },
  {
    "url": "assets/js/38.2833ab6e.js",
    "revision": "79b3c3ac857b2b2ed780aa0c8efaa4cd"
  },
  {
    "url": "assets/js/39.f0697c13.js",
    "revision": "94afcf846fe0b223ba8f535f3057aa06"
  },
  {
    "url": "assets/js/4.cd5ac232.js",
    "revision": "39c76a2160a7e88868471fbf7c9e819a"
  },
  {
    "url": "assets/js/40.5d98c344.js",
    "revision": "9d7e70f7eebaa5e3364c7b9e60f965b9"
  },
  {
    "url": "assets/js/41.f0874725.js",
    "revision": "b71d651044caebec136847699f1e9e30"
  },
  {
    "url": "assets/js/42.16025504.js",
    "revision": "99df6caa7a9f5366e6c4c0436e3ee0eb"
  },
  {
    "url": "assets/js/43.7a12cbfd.js",
    "revision": "fe69e3097cd03b40c326e381eac0f9c4"
  },
  {
    "url": "assets/js/44.295ca3dc.js",
    "revision": "cee89db305608ad3e7130985352a8e91"
  },
  {
    "url": "assets/js/45.c746c329.js",
    "revision": "abdbdbe5a221fcb65a37203e27f62e65"
  },
  {
    "url": "assets/js/46.29f7da9b.js",
    "revision": "4c52432e1bd4b900434fd97e573164fa"
  },
  {
    "url": "assets/js/47.0d7d15e3.js",
    "revision": "0808e30850c2b09760f1d74942f62c74"
  },
  {
    "url": "assets/js/48.ff20687f.js",
    "revision": "f430cf1ecbf52fbb2c845e58899c3f0d"
  },
  {
    "url": "assets/js/49.b42c0af8.js",
    "revision": "86549cbb61b5bf0ed3268f8b37ac5d64"
  },
  {
    "url": "assets/js/5.d2a7825b.js",
    "revision": "4445e30254215797c29c8a7473cc9e26"
  },
  {
    "url": "assets/js/50.5e5f9c8e.js",
    "revision": "24b79590fb05b78cd7eeaf420eec1e8f"
  },
  {
    "url": "assets/js/51.f1d8eda2.js",
    "revision": "1a66c8bd8c7eb11dd4ac12b80d1d97a0"
  },
  {
    "url": "assets/js/52.ae8f6b12.js",
    "revision": "559796638535ecaf1c1089b2e1427c47"
  },
  {
    "url": "assets/js/53.61899e63.js",
    "revision": "549d839c2b282caa95b014dc2679071b"
  },
  {
    "url": "assets/js/54.82d705a5.js",
    "revision": "f82bc4a990e3f87fcdbddb2e3e251974"
  },
  {
    "url": "assets/js/55.e0acbce9.js",
    "revision": "e75491caac33f1a65de8bd9f576c8593"
  },
  {
    "url": "assets/js/56.b8134fd0.js",
    "revision": "1866bebac2c34830d2820a72ab56df28"
  },
  {
    "url": "assets/js/57.39e2e14e.js",
    "revision": "107329e24b27fd5a75bdac5902d18e88"
  },
  {
    "url": "assets/js/58.f69016b0.js",
    "revision": "1acf9217c21b1190edf50f3e9c60ba7d"
  },
  {
    "url": "assets/js/59.807c0767.js",
    "revision": "1787bccda3cae8bf80890fec40511833"
  },
  {
    "url": "assets/js/6.52cab3c6.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.83fac5ab.js",
    "revision": "5da4ba5a54a6e6cf30292a71cf7c6d51"
  },
  {
    "url": "assets/js/61.9a940b17.js",
    "revision": "40661e0113006fb787de781daee46950"
  },
  {
    "url": "assets/js/62.130574dd.js",
    "revision": "f8f771593520e8c7babd4e64f738daa3"
  },
  {
    "url": "assets/js/63.a41018c0.js",
    "revision": "9fa78892c355a5581d04c24f777417f5"
  },
  {
    "url": "assets/js/64.7d03d4ad.js",
    "revision": "7dd7c427d8bf0978bb9a5ef229468ba9"
  },
  {
    "url": "assets/js/65.538bd078.js",
    "revision": "81694bc747ec8bf237ee04dfc452f7dd"
  },
  {
    "url": "assets/js/66.fb905450.js",
    "revision": "0d3edbedf0e46f0c2566008180bc86ec"
  },
  {
    "url": "assets/js/67.2b787732.js",
    "revision": "23e095646e1694e137a8005e42db1ecf"
  },
  {
    "url": "assets/js/7.a5327269.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.2c0db0b1.js",
    "revision": "6694823c95de7f43946ed6b6380808a8"
  },
  {
    "url": "assets/js/9.7d37cad2.js",
    "revision": "4246d58c6c71ce3a7c131c6aaa09c58e"
  },
  {
    "url": "assets/js/app.e907be1a.js",
    "revision": "f6b351e38f25a004ab36a79304537e29"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a9023d3356c650e0c97c5503fc66d091"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f365ae3a5ac7a793880bdc48dcdf593d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "07542fa2069240553581196589962397"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e4cd5fd06e25c9de3416bd6731e85138"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "afa559a13f3e80a87230314b3c2ad7ed"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d41faab1e170b7bc42bde2de1dd1fe8b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b3baa7c99f95eee1bda28525db035f27"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "9a5d9dca823f04db429127893f047a13"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "579a315de3b9c351659aa02900af45a2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6b0364fddaec580ddda86bba79a80918"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8f4b076262fb26c467d39e7a359d20e5"
  },
  {
    "url": "basis/design/index.html",
    "revision": "d12959cd036790b5f783c89f4fdae340"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "6f7008f904206a91a73a9e340b05975d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6d85abccd062c4b8323ae6cbd1e8cc61"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8a44361c252dcacf02ba2c604563f977"
  },
  {
    "url": "book/index.html",
    "revision": "97b6c00bb9512972496c80a5cfd75276"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5baa1f52f4caff1fd17d274a3721c122"
  },
  {
    "url": "categories/index.html",
    "revision": "bcaa4a364f42750c6d71b244b3b712f3"
  },
  {
    "url": "figma/index.html",
    "revision": "0d392991a18fd22ea1a5928df5986ef5"
  },
  {
    "url": "flutter/index.html",
    "revision": "867be341b4f1c84847acf0553b4d4a45"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "976ac16b8b74edf426173c2ed44a25db"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "6c6e2ba8afa21831eeef79106b5d30eb"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "82a044497ee3106448cd0071ee1d5ae1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "81e7f11e2b314dad6d2f3ccd89b1c060"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "5dc6bb8113d90813312f9a11dbe38826"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ecf0f970f5fe5f0fdf847333efa48ffe"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d40bef764fc9b16e8034c03f8cd59338"
  },
  {
    "url": "index.html",
    "revision": "7aae265b9575452fc2e1051e11d3285d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "df7fdc5296359399b5b8bbad47f88776"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c067e1e61998f66fbb26df62596d626f"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "65f6ecb5bb3980396e31f7fb5737af91"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "e5eecd891b8a1d07240ca09cb99bd26f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "012396ad7de5a0f3dcce7dad3eb8321d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "b40f2ba8a684d08df232bdce0f5444c3"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "91872c9baa4fc7e9c8b2e14b2076caa3"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2108731541dd8ece25fde9ad5c35f610"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4588f56e7a0393e3b32d9a92b64c8cbd"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b35713510e2f756b976b87ee4cfda412"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c96a7a976ace0a102ef83167fd74c590"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c104a3f0ea458261dc55a75cb4a59fa3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6d9175231169ace26b4251e49dba40cd"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "420e8e4dd9d3307a4a7f82b45a79e1cb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7c4630fd4e666d8250b74f7451d12849"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "274d996703f4df6c5878a649ce80a577"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a995024891102aa996bae01a478ae595"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ec039da6491ff637f40de22c52ae71ac"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "71634814bce249673c732642b4904374"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7290a9dae63579c716297a582e82051f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c8bec577e62f1be4e774d7db58b50c51"
  },
  {
    "url": "tag/index.html",
    "revision": "69e3fb5262e8c324c63a4c1c09dcef67"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "c05302b7fe630f646470f64c852b6ef7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ff992e357d707f46c1d2a85cbd0cba0a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5301fbf539a5587df815b70fd337c4ec"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3b3e1ba54e5562208b52f520bac2779e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "df73c5e9ca5a576b38156560b7eb26a7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "350a63a85badbb0c1696f7b16d19a769"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9a35f126b522fef50bda9afe5733afd2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c4beb8eb5dc9f30bc02afff4d5238944"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6caa6d2032ce9ff6caa3975504a3e915"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a290fd72f6a1aa9a3391816a9275f1db"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a896395ab6cff2af98e08b7e6498a542"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5c7faa1691ba2c19871b78178d801bee"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e1d12a782167fe9d45ba61e97cc09eba"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "549996d3cae9aa77a68a957388d6f8f1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2cd531bc0c26065c6b86f8d2dbf0afeb"
  },
  {
    "url": "timeline/index.html",
    "revision": "10312f32aca4961a14870ade50161f46"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4e5ebb888efc9ac484939258f6507eae"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "09efa7fa61bf12afc93fedd7a78c5397"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c401936c2c1e8f29fcdceb45dbe2c74d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c78a05eaf684d9ece64ecbab68fcce40"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ccfa071d155be2bde0d89c65cfcd8f1f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "efc6127a23fd5a4a53fe047464401b20"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0518d038b08b6dc4f46d33504cb9b407"
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
