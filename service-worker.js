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
    "revision": "df2438db8278491f07d0aa605ed25d64"
  },
  {
    "url": "about/app/index.html",
    "revision": "842837e9b4cf8015a3310f6cb9352cb1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "cd890f8ff86d690f84f3674e22ce021a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "386eff05b6a4014d162658c9c089754f"
  },
  {
    "url": "about/index/index.html",
    "revision": "61d281af6f99d438fe689ffd41e08059"
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
    "url": "assets/js/18.ccdd996e.js",
    "revision": "34a9835d8cb63df223fe9f4db4bd1f21"
  },
  {
    "url": "assets/js/19.b72d5b36.js",
    "revision": "68ec63f6898baed2185ff24242742f78"
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
    "url": "assets/js/48.d6139d61.js",
    "revision": "f7392e2fa1cfdff2aa4dfef80b5c6aac"
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
    "url": "assets/js/57.21105d01.js",
    "revision": "4bb280ed2e8ddf4727d905e4e6268013"
  },
  {
    "url": "assets/js/58.1ca622d2.js",
    "revision": "42aab122b964c0247ee87a1d99b6c581"
  },
  {
    "url": "assets/js/59.1a919e1d.js",
    "revision": "7dd229062019cfbde2a2e301464a0417"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.1204bf5b.js",
    "revision": "d47ac907edd9036b2f45d0e368f90f4c"
  },
  {
    "url": "assets/js/61.9125ee69.js",
    "revision": "2f5af72dea627741d5b62e3012bfbd64"
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
    "url": "assets/js/64.a50b9a89.js",
    "revision": "f08c7fda17ae4c07a455ecdefdc1be45"
  },
  {
    "url": "assets/js/65.d21d02ea.js",
    "revision": "09627914407cbab7007f18b4287e3139"
  },
  {
    "url": "assets/js/66.1de8fd2c.js",
    "revision": "fc4d809b5079f74fbb7335164db8bdf0"
  },
  {
    "url": "assets/js/67.8fc0ef15.js",
    "revision": "4770f67bd58e68342bdc358868d068f4"
  },
  {
    "url": "assets/js/68.44c197fa.js",
    "revision": "635667f83e0ba76836b4d70957d077a2"
  },
  {
    "url": "assets/js/69.c9f2e3c6.js",
    "revision": "d217783ea80ac569090ecbe9e3195f17"
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
    "url": "assets/js/app.6c0e439b.js",
    "revision": "0211390be4147135696ac5e722a5efdf"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "e47598007bfd289889cee2f61849fec3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "25b8da6b6fc525249913720cd2c8a86d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fdd3f120ac8dceb9697aa68b3208d963"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "252b6992ee2981fc66f8046c4dcd3283"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "8dd9b83a4a05d4ef6388273d3ed37725"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a8fdfb3cae08748498aebe69ef9c98c1"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b0b042994ba652a53256488b8b3eb34c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d62b37955c48eb12038656f83359682f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "10e594426c7d432df4fc9cb14f3a433d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "fb28445255176473f84c5c4437e7e140"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "dd86c01d7490749408cf24eff1d5aa2a"
  },
  {
    "url": "basis/design/index.html",
    "revision": "448e5a601e0dea39fd54e75fb7ffd17b"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "45cd9a7cabda21f3917cc978df75a696"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1486d31b932db81858ac1c126f89a90c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ed7d81365bafd001899695dd067056f7"
  },
  {
    "url": "book/index.html",
    "revision": "dbbd43d9e5ebe81f3064d610ca4d5c6e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d88906003189f01c6d9aef0fa2ef9c41"
  },
  {
    "url": "categories/index.html",
    "revision": "5418959de8746a973983b6840b7e9f39"
  },
  {
    "url": "figma/index.html",
    "revision": "e0070957fb9f310668ce242d098d9815"
  },
  {
    "url": "flutter/index.html",
    "revision": "d1543fffeaf4748a8568693f574e30ed"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "50d863b3e9943625a406cf04c6d15b61"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a66ab188233af4c55b7af7a554c1f3d1"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6b92a02b3774efc33735d518dc00ac19"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "46ddc60e6dff53b0674658be35adaf73"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "700ea4b310dce0d3f84810001492b9b4"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "bd08d9ccf77181a2b7bd79d157b1efaa"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5e1d54cf5414de4d10bd3d354bc875c9"
  },
  {
    "url": "index.html",
    "revision": "b73157f15941a0759269009472a17888"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "aa87fc056cff333d0297ed24b0a9aea5"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "2201ee92dbc619131178db5639a66a78"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9711d1ac5f09545536f2aa690f92cebe"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "787a4c483063f45bcab68f507b625314"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "7a2ce39fedc3cb87ef48a97e79257ddf"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "780f746479d9a5f4cde757e3c7adc05b"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "48c055b39a098891dfde400563356262"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "fc83eb5b432d5a63884b9e0e20b5b208"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "bd72bac25d8087848568a2d22c2b04c6"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "02b0ab67410e55b7584d7d80040f5946"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d45a203f0c0e0103de0dbb4a1305f671"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4108c67f4e447e6fda41f9a6d589aa3e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "fd3c7ee7171398eb4f1bd53a8f694c91"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2d6d4f31642d3e11d309c25d62a810f9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "786e363b8f7b125dcbb787bf116e63ab"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f2d1ecc27395fced206255cb2183ccd5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0198ef489959f77421176c0249f10fbf"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "395e18d2e843f39b2cfd9a4045a3b19e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "402d9fb31704063a2e093fe3a11d1f11"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "92b84f4c9015e94b6a5896289f5ba58e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "30199a7a076fd79ace4b753d93ea210d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f1158ce64fb95d86696a1dc5a472f127"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8b36d94b9a99a41a7f6494250030efa7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "59a1180c4f917cc9a8495ec1cb93accc"
  },
  {
    "url": "tag/index.html",
    "revision": "65d74cbda3d23639fd4d3a5a0445315c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "749ca795e61151727b71a6c30733da43"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "47f1a7d021c0756b5f6769e8d8dc859e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e5aa910d2d556be569d9e30310d23e51"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "63ea257be88ec669277a66296da32b1b"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8f327910c1cd7bc51e1a802fd1bb7549"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c91e70db7ae18331bc47422b0c1cab0d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f9ab4e34119ad5d62c938ebc0c86e95f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "393186dceadf46f68ca1d28794fd0c53"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5150425a253f76e3c2a5ed8e18828d5f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3410e880da8a464546e43397efb249cd"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1ee65af5234d51c634a0be3deb404294"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e6ac6f17eac9fc8e6a742eb2f508949b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4ad27094c62c7817ce09af7312e9a620"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f61ecf36abec3f0816e202ff3742cda9"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4d79588ede2a9c9de605559bdcc3429b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b3770e70be602df57ed07a6757513bd2"
  },
  {
    "url": "timeline/index.html",
    "revision": "bea0db76a01bdb09c332eab009b582a4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "37df585338be217b474cba3116faba42"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "dc152f4593f0ac19a374688f3aadf597"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "de577e83da93368ebaf4cba761793c1b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5ac9a20cc388e523a28bf3a8064b296a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "678baebc26380cf0bbb5f82ee19e457c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "febf44e19a9c56d4b280009b936c882e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "33fc294c105c5fb50117ee66eff37ee8"
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
