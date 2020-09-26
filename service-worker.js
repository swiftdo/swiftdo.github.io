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
    "revision": "63728f868d5d64a099be40bf33bddef7"
  },
  {
    "url": "about/app/index.html",
    "revision": "edaeb808251551c19735da3bf149613a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "65bdaea292cd49b6a85446574d50657d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "cc4ce8aaca45310226ad4c2a471c0598"
  },
  {
    "url": "about/index/index.html",
    "revision": "86712da662d48766a36a64d4b7b75e86"
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
    "url": "assets/js/11.5e6ede6c.js",
    "revision": "f6cc6d13755fab9f4c22373b52a6b5b8"
  },
  {
    "url": "assets/js/12.32c8b7e6.js",
    "revision": "1f91493bb9160279cad55c1f506b8abf"
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
    "url": "assets/js/18.7500f234.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.a4e9c3bb.js",
    "revision": "68ec63f6898baed2185ff24242742f78"
  },
  {
    "url": "assets/js/20.78870bfc.js",
    "revision": "07f26664c268c0015185dcd5582e6a7b"
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
    "url": "assets/js/27.6ba1e350.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.84791a07.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.25d3a50e.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.1394f437.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.40a2119f.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.e23ff899.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.565bffa6.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.8bebf36a.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.5ea8ca3c.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.938f5118.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.21569c25.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.6699dd40.js",
    "revision": "206b266a0f3f54f0a97c3100a5d9a6df"
  },
  {
    "url": "assets/js/38.8165e559.js",
    "revision": "09eb302b69e5f468ad823f8c4ac29385"
  },
  {
    "url": "assets/js/39.133792d6.js",
    "revision": "2e8a2c24ce76f58cae98d1f58abbde9c"
  },
  {
    "url": "assets/js/4.cd5ac232.js",
    "revision": "39c76a2160a7e88868471fbf7c9e819a"
  },
  {
    "url": "assets/js/40.456d243f.js",
    "revision": "842150546f125678ebedb7165de46d0d"
  },
  {
    "url": "assets/js/41.c9baf80a.js",
    "revision": "04b5e4594460cabfc94c14fb450dc899"
  },
  {
    "url": "assets/js/42.9bdfd1e9.js",
    "revision": "f800e9ab20134a1750b7435261f50527"
  },
  {
    "url": "assets/js/43.4f110d19.js",
    "revision": "efa7555b889aaa43a4311ed4b9b0dc5e"
  },
  {
    "url": "assets/js/44.118565fb.js",
    "revision": "8091ca1001d143c51edfc349b971fb00"
  },
  {
    "url": "assets/js/45.b7815f99.js",
    "revision": "b0d58cbe5daca999d6ca4c9c5f32cb0e"
  },
  {
    "url": "assets/js/46.14a2c067.js",
    "revision": "a625b308b116a10b1635f1955d81c2d5"
  },
  {
    "url": "assets/js/47.99efcc00.js",
    "revision": "65c556afe090ca94dc2860196f14843a"
  },
  {
    "url": "assets/js/48.5884c853.js",
    "revision": "39db16591c4325d5774414e5cc6a7bfc"
  },
  {
    "url": "assets/js/49.486e39c2.js",
    "revision": "db3e574adcb9e0a424bd40bfa6b110c4"
  },
  {
    "url": "assets/js/5.d2a7825b.js",
    "revision": "4445e30254215797c29c8a7473cc9e26"
  },
  {
    "url": "assets/js/50.af20ceff.js",
    "revision": "691e351a191f29bd9debcbe982741a56"
  },
  {
    "url": "assets/js/51.40e1c1e0.js",
    "revision": "e1931901fe877173560663ef07dcb27c"
  },
  {
    "url": "assets/js/52.588ec5f5.js",
    "revision": "e46cf9ccfcf7f05f1d64545c34651d10"
  },
  {
    "url": "assets/js/53.4016e231.js",
    "revision": "0c577af747012a1a3def3d68e4ace08b"
  },
  {
    "url": "assets/js/54.fa818264.js",
    "revision": "9534113dbc1424b98d1997fd70a56c41"
  },
  {
    "url": "assets/js/55.6b650aed.js",
    "revision": "faa4b95a2a2c60fa0143414b0da4cbff"
  },
  {
    "url": "assets/js/56.c19b0343.js",
    "revision": "7b1bc6d6f25ce5ec62621afc232f55f8"
  },
  {
    "url": "assets/js/57.72ac167a.js",
    "revision": "f254fd136e108430d70dd588f1b76691"
  },
  {
    "url": "assets/js/58.f037578f.js",
    "revision": "b1f37b8f0596356077197f7cf905ab4a"
  },
  {
    "url": "assets/js/59.9a112671.js",
    "revision": "b5d49271637749c6fe41a65bb62ae0dc"
  },
  {
    "url": "assets/js/6.52cab3c6.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.a7e0b33b.js",
    "revision": "0ad387b519c91b910340d524e0080a56"
  },
  {
    "url": "assets/js/61.749712f0.js",
    "revision": "394c8e839d2bbda81f4b4f04c1a69b3c"
  },
  {
    "url": "assets/js/62.2fd41b91.js",
    "revision": "6ce78c28f5e4be6aa8c8760992da2ad9"
  },
  {
    "url": "assets/js/63.d6b6e1e3.js",
    "revision": "6d6af565ad7576dff86f6ff08c0814ba"
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
    "url": "assets/js/9.7001545e.js",
    "revision": "32395f1269ad3c98fecf7e9090324270"
  },
  {
    "url": "assets/js/app.3313c864.js",
    "revision": "33f7f01f22fddafeb60da46d4772da61"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "883c68991c926e04cb8716fa52dd5f54"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "975f6863dd5d75139f2d66572bf64b84"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f483eeddc81ed42a27fd1fb644a78a68"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e423a3cf38f4e32d08d13f0cdd5dc65c"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a341753c964ab5aee3eeaea9cfa622f2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7021ebc4c54215ff1f6fbece62070b8b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5db2fc58e2319c2e92b99de0ec694594"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "cf91efa2b626459da2a43f040981d008"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "0234b38bc169d2be0a76c0a5c83f67aa"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4bddb858c81f78bc57c618d94df7f82c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "95e54cb825678106845d071ea845c9b9"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8dd026b1de68f73514738dd75c8ea50a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ab02227f6c83028f76344c3e36ebe6b7"
  },
  {
    "url": "book/index.html",
    "revision": "a1fcb6cfe36c2da18a751359c3945ca2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4d22030a0e24f811c7c00f1b78254fbc"
  },
  {
    "url": "categories/index.html",
    "revision": "6cdd8ae27b1b1b8677da5c1c17e0f08f"
  },
  {
    "url": "figma/index.html",
    "revision": "d3ffafd144982515f2e11a1fb4af4cf3"
  },
  {
    "url": "flutter/index.html",
    "revision": "1cceb7b135b0f0913c45015864a8f956"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b263552ca46d92453d77d6634262ae24"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "98ea66ec137cecd2b43610e0c1bd3d31"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b8d4feee1577116c98e341a7309cfcc4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e1d4f8821f3e35b31cb76e348609de89"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7aa1d31c90aeebfc3fd34a8f575f7601"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8daec161b6f2125ec77291c006d370e6"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c82ffb77c042a16f05db320941ed4558"
  },
  {
    "url": "index.html",
    "revision": "9ab41fe5221fac0085b13c303c5fcae3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c61e03ea336e5dd705d43a2d5aa4282e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "75aa75dde6d73ce7689ffb63cddf3808"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d9b95e278d8e85f92b5dbb3758f21d53"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "6fd41b0f0573bdd8f159c9a773810c0e"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "6e610378606f0f377401c295c7ee559a"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6329201e9109ec8a5a424ffce93b1daa"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7a77a17e5c9087a628e6a2a28774f67b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "bf71017a26dc07433c43a1626f83dacc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b4fd8d26066d2b4a374dd9a53d7eed46"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b2aad977876b2fa7bb6615c5782baf16"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e501f32d103ed29c5e537e9f42817208"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8bf430261ad1d96f05c58b94b538c4bf"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "73fdc8012b1946d4975a5eacb5d146a3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "13458ffdb1b916619498cda3fd8377bd"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "24bc43b693567ff402161ebaa024e5ea"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "bf0aca21c06b85aae9e4da51f7a4f1b6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "68114088a74db4dfe8b136d14143c648"
  },
  {
    "url": "tag/git/index.html",
    "revision": "61ae4fb9f5d91de0d9bf73449c9daee7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ed0420b5c3aee3dec24543171a4c9541"
  },
  {
    "url": "tag/index.html",
    "revision": "124aa1ea163f9801d869b4186d58e991"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c2f54a12a61a39ad6f544f0ba45e575c"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "29b10fa8df0994ce3f709cf6581ac8a8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "629f59c8d004308acb9c0879f50d4e63"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "fb9d93e07ab91daf3d6a53ca82f8219d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4f751aca34e4ac5c5f914edc4b4ba873"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "44dba02b80964145b4614e55dab4d242"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7ab3925483b4e54885099d5e2bd33b9c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "55fbd7de42324e3c21296f8ec2975ab8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c8e7eea9cc18b7cd614828d66145bf7c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "42206dd7e46551ca87da55140e204437"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "007a5422e3d8bb0d0b73b77b91e1856f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "81da93df6a857647c60ee0d56d7035c2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "874bcf46125b2ebe454a4e0e9130cd6a"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ae24e4ba53f0378d4b5e59b8c871688"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b2974a655cf4f816b3adbf63dd916c90"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c93d1b37349c0f2b2842d8018e768cc8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9f68618704a3300be6df913c618b71f4"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6732b6711afab826d72ae6b621b81daa"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "56b729f7bc2035adef39975994d97a87"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "103fa276abd673da1f4d82af0afda07a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d73d5e9cc2c5f1523a619dab485bdfe3"
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
