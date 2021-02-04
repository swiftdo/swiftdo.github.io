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
    "revision": "80ae92ec86a1199b25282a33f2be6f7e"
  },
  {
    "url": "about/app/index.html",
    "revision": "a308bc23592b1855f3b31281e9c17a7e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c3d94a42197e2506b695198023c1e817"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "917b8da6e6d071b99ded5ed2df6ce07b"
  },
  {
    "url": "about/index/index.html",
    "revision": "1b967af4e3d21e018c2e8ac42a1a1146"
  },
  {
    "url": "ai/index.html",
    "revision": "0d33687e404d7b0e4da48c1f0dd48155"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "3dbf9768720c497c82826f8aa92f048b"
  },
  {
    "url": "assets/css/0.styles.ef8fbc08.css",
    "revision": "75d501d333253bf66acf622f468da4e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.a23113d3.js",
    "revision": "f9ad9ecee0d76c03cafb2356d554432a"
  },
  {
    "url": "assets/js/10.e2cce4b3.js",
    "revision": "4ca55ac5d9220c2795fef472275f8581"
  },
  {
    "url": "assets/js/11.3cbebaf8.js",
    "revision": "52dad7bfe1cecc3887b1dde613e10d5a"
  },
  {
    "url": "assets/js/12.2cc6e04c.js",
    "revision": "f1a2b7586032449e112c938cb9f6f904"
  },
  {
    "url": "assets/js/13.2d6171c6.js",
    "revision": "800ea8f1a2e10f98f752656e3bdd247f"
  },
  {
    "url": "assets/js/14.3f74a4b1.js",
    "revision": "5bea93e4498ea21bfb0a2f8bd77d05aa"
  },
  {
    "url": "assets/js/15.bfa0770d.js",
    "revision": "5c86a9c5c1c0a455e2b03f2bdef656be"
  },
  {
    "url": "assets/js/16.2529f1d5.js",
    "revision": "15cb029b3725ee56c12462f4c390d1ba"
  },
  {
    "url": "assets/js/17.fec580a2.js",
    "revision": "a63a1d372f6ef3fdc72b6f7d1aacd6be"
  },
  {
    "url": "assets/js/18.1c3c8385.js",
    "revision": "1f0269ddd81d799da3124cbbb760af45"
  },
  {
    "url": "assets/js/19.0f2b8da3.js",
    "revision": "b3d6f70bc166171e0d995b64532c0a68"
  },
  {
    "url": "assets/js/20.6c7f325c.js",
    "revision": "1c637b619c11e264741d777f08c46a8b"
  },
  {
    "url": "assets/js/21.6b764490.js",
    "revision": "0d317ee1910c6c7a3044e928bcd6bf96"
  },
  {
    "url": "assets/js/22.9d231090.js",
    "revision": "0d1ab1e4b31c0861afe0c3aee36c1e54"
  },
  {
    "url": "assets/js/23.3e1a4d85.js",
    "revision": "bd248353fd753d1edf4be3d452c18571"
  },
  {
    "url": "assets/js/24.6bf02ac2.js",
    "revision": "4d3455b005e7ece8c547d61ef89d074f"
  },
  {
    "url": "assets/js/25.7752a206.js",
    "revision": "2976f4445316aa01dd70cb68e50a7e27"
  },
  {
    "url": "assets/js/26.3f7cb616.js",
    "revision": "12a5edb48876c9d8f6c9cfd1f945a919"
  },
  {
    "url": "assets/js/27.743f9f3d.js",
    "revision": "63f3c0dca78dfaab9597cfadad46c1f0"
  },
  {
    "url": "assets/js/28.dce4f81d.js",
    "revision": "2fd6a25617dd11263edd304ab51269c1"
  },
  {
    "url": "assets/js/29.1abf73e9.js",
    "revision": "107daff7b6821f9a7cb1d1dd6b691091"
  },
  {
    "url": "assets/js/3.1b0902a1.js",
    "revision": "1710836fc76effd31953a68b908415ee"
  },
  {
    "url": "assets/js/30.dc5a3614.js",
    "revision": "6ef44b87da8002f31cea27b720542258"
  },
  {
    "url": "assets/js/31.ecdf7fa9.js",
    "revision": "5ab946ce674475855d4db6a0ad4e046c"
  },
  {
    "url": "assets/js/32.382b91ec.js",
    "revision": "b6ba9703f5d87bb38a8a11eadacaae58"
  },
  {
    "url": "assets/js/33.b788b7ac.js",
    "revision": "bcd7a44ac9b563947d77de92e9770ea1"
  },
  {
    "url": "assets/js/34.4ed3226b.js",
    "revision": "777f7fa72b40948ce2dfa19a28a2ebd5"
  },
  {
    "url": "assets/js/35.bb2c51da.js",
    "revision": "d64fecd69f8650236d5bb7661ada4878"
  },
  {
    "url": "assets/js/36.bdb1e9ae.js",
    "revision": "2d0a751c0b4ed736b588d4a823da6934"
  },
  {
    "url": "assets/js/37.006cfd49.js",
    "revision": "e2ee3c331b118d70335d050e5f5908dc"
  },
  {
    "url": "assets/js/38.6c20d02d.js",
    "revision": "787ace267e2117f5bd93045089ac22c5"
  },
  {
    "url": "assets/js/39.69af83b3.js",
    "revision": "a367f30d9090801c0b8b912bb2bf626d"
  },
  {
    "url": "assets/js/4.0cf07b02.js",
    "revision": "7b0660a0fcb6ece7b8081a911ed9b5af"
  },
  {
    "url": "assets/js/40.b1cca6ee.js",
    "revision": "e185253885bb521de4d549ae38b3e25c"
  },
  {
    "url": "assets/js/41.3dbadf85.js",
    "revision": "846be7e490ee185af372967d885fa5c1"
  },
  {
    "url": "assets/js/42.722012d9.js",
    "revision": "ff7f48ed38fdd0bc1f45a8663effd54b"
  },
  {
    "url": "assets/js/43.5bde1c05.js",
    "revision": "5b25065e575fc9a3c93a10594b1c57a9"
  },
  {
    "url": "assets/js/44.09eb16c5.js",
    "revision": "9875901fe834f3dd81f000303136272c"
  },
  {
    "url": "assets/js/45.8e6cef1c.js",
    "revision": "4a0a0f2f1c4a5690da43174bd560e036"
  },
  {
    "url": "assets/js/46.98bcf7bd.js",
    "revision": "1ae6f1f2b10062cb413eee1f8ce629dd"
  },
  {
    "url": "assets/js/47.3034817e.js",
    "revision": "1ed6fec23002a900615727638eda6e71"
  },
  {
    "url": "assets/js/48.c3cc3ea3.js",
    "revision": "fef7b47dbf1562cb6b442687bed65e5b"
  },
  {
    "url": "assets/js/49.17c70f18.js",
    "revision": "3622a6410b84f80b57b44669560cc4d6"
  },
  {
    "url": "assets/js/5.e00cae0f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.6e4b1c38.js",
    "revision": "5ae520146f98952818b4aa5047ffe4d3"
  },
  {
    "url": "assets/js/51.2af9d445.js",
    "revision": "2c2af1135a6b43a2f9637c8f24cadc38"
  },
  {
    "url": "assets/js/52.72f88d0f.js",
    "revision": "87b3ebaf5a3674f26a69ab219a6f7789"
  },
  {
    "url": "assets/js/53.7b0cc55c.js",
    "revision": "8782159f5a19ee584d155bc11818ee6f"
  },
  {
    "url": "assets/js/54.3c7be851.js",
    "revision": "87f3ddf759c72010ede7d8e49a9f2162"
  },
  {
    "url": "assets/js/55.6c087472.js",
    "revision": "63225eb0f71f2ca5b3ed40fc7c0e2736"
  },
  {
    "url": "assets/js/56.c58a2bbb.js",
    "revision": "bd5134bd4671fab27d6a2efa602ace49"
  },
  {
    "url": "assets/js/57.bcf116e7.js",
    "revision": "f6b7e40e7958bc963ea2e84c073724b6"
  },
  {
    "url": "assets/js/58.41dc344a.js",
    "revision": "a8f2ee4ec5703fd9f13d3db03444d0bf"
  },
  {
    "url": "assets/js/59.8a3a0e9f.js",
    "revision": "c4899fd7ef41d460893f64a21fb4b03f"
  },
  {
    "url": "assets/js/6.6e678aff.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.156b9a4c.js",
    "revision": "87376b2722bc9497d15b495fcf5eef95"
  },
  {
    "url": "assets/js/61.95a8b413.js",
    "revision": "9b36834b0b985af6f683bda613edba6c"
  },
  {
    "url": "assets/js/62.fb32e57a.js",
    "revision": "60b7bc02e89008ae6c1fabf691bb74ee"
  },
  {
    "url": "assets/js/63.3ceddf65.js",
    "revision": "a0f39b15f9c49a5d9c6be9f21bfd08f8"
  },
  {
    "url": "assets/js/64.5034f4ca.js",
    "revision": "5721721010c708826a9bc03c2307ad84"
  },
  {
    "url": "assets/js/65.2fcde9db.js",
    "revision": "e35e4841d3316730052347a3beff27e0"
  },
  {
    "url": "assets/js/66.8051729a.js",
    "revision": "11a08fb7f7b57970f992af5b3169458a"
  },
  {
    "url": "assets/js/67.cb898f6c.js",
    "revision": "b3ed592e5fe2e05639ce4cac7abd76cc"
  },
  {
    "url": "assets/js/68.3a40a995.js",
    "revision": "46dc0121cb65daf192c9c181c0b38b7b"
  },
  {
    "url": "assets/js/69.d53c9837.js",
    "revision": "4b8073b6638cd8fc49eaf3f6d181d166"
  },
  {
    "url": "assets/js/7.923ac453.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.d9b2f176.js",
    "revision": "f7f94041f733d79639142d9c00b36bae"
  },
  {
    "url": "assets/js/71.6df723b8.js",
    "revision": "db45fd9bd81915bb0ecf7635d7bbb6e9"
  },
  {
    "url": "assets/js/72.60163686.js",
    "revision": "609745e118527dd92970a997b13fd0b8"
  },
  {
    "url": "assets/js/73.4a71a863.js",
    "revision": "0cb4dbd04ea7249ac7efab582be1fb5b"
  },
  {
    "url": "assets/js/74.46f433aa.js",
    "revision": "b1e84aab72acd8081052cc3db2ad4640"
  },
  {
    "url": "assets/js/75.ef3d1444.js",
    "revision": "d65fc08a7164528b4b873d3db3da4e1c"
  },
  {
    "url": "assets/js/76.423b457c.js",
    "revision": "7db99bd36b4d8677d24c4b609aa47a20"
  },
  {
    "url": "assets/js/77.b1666d87.js",
    "revision": "b03ee77f4bde25d6c5b4730e390e5e4d"
  },
  {
    "url": "assets/js/78.88a6e29f.js",
    "revision": "9089a3aad57d42fe3aaba9de6425d9e8"
  },
  {
    "url": "assets/js/79.3571bb04.js",
    "revision": "f8da9c9ef606f0b38ee203a43e06506e"
  },
  {
    "url": "assets/js/8.9a4a9dd8.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.7e1692a6.js",
    "revision": "8660b0a9721ca940b14b62d7d2e1c34f"
  },
  {
    "url": "assets/js/81.a8b34066.js",
    "revision": "c6c0ba9ae7f950869918994e8db17429"
  },
  {
    "url": "assets/js/82.4f434b44.js",
    "revision": "4441aa7046f05fa7be5f34bfa240a948"
  },
  {
    "url": "assets/js/83.c37d67c3.js",
    "revision": "4b5e34930494030d6d7c568ee675d527"
  },
  {
    "url": "assets/js/84.3a682ff6.js",
    "revision": "99d2a9fde220bb96170cbbfbb5545a99"
  },
  {
    "url": "assets/js/85.98f9686e.js",
    "revision": "101ce99e42ef346e9c4651ce550cfd3f"
  },
  {
    "url": "assets/js/86.73bd5566.js",
    "revision": "3bb39422a588e4538e34c88e7aad1eb1"
  },
  {
    "url": "assets/js/87.6f7f3393.js",
    "revision": "0551b568e075424cb0f47c3f87de035c"
  },
  {
    "url": "assets/js/88.240a919e.js",
    "revision": "c9f40c6cd3e67526f7c4e7a30fc9cde9"
  },
  {
    "url": "assets/js/89.eb32be5b.js",
    "revision": "bf7a68c436c6fc9c1885eb0a0dd22bd7"
  },
  {
    "url": "assets/js/9.3c1feb6c.js",
    "revision": "7959600c98eaf8913f16b1211d7ab99f"
  },
  {
    "url": "assets/js/90.be037811.js",
    "revision": "761349dda91721c9e936066075ed4918"
  },
  {
    "url": "assets/js/app.95ecfa2d.js",
    "revision": "90579394ee4c97594fb74c6172f498f2"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "e4a2250c5650d12b7d58fa49c56292cf"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "80688f5fc2ec370d8aa814c69b923a82"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "269d009bffcb3af1233619b5d2640a3a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "64aa70ec54c8e3332102eb7f2ff4ae0c"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3babedbc42715339ce4ce1b8c4c40fb6"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "59ec99d2afcf4cd1cb56e553937a34ec"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "99978d44b7ef0fe17112c6f18f37e063"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "fc8b3e0fda9c5a5a033562d26e8f5f6f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "74c28d802e9ce22934fdd43bc1d4b50b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9829c7cf90377fa66b60c6b74b4e468b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b8bd0632dd9a996a11afe030092b3386"
  },
  {
    "url": "basis/design/index.html",
    "revision": "2461bdd6cfef648135f5282c3246a451"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "20e430ce8eeae7fe022d6445c152455a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "38ed6f22db7e47d1f177040239643771"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3fde4fd955c564a97e1cbb4995e8cbf5"
  },
  {
    "url": "book/index.html",
    "revision": "e3df6236456e958088be330f58c39ef8"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2f8eb91dfa421d57439139508bb7317c"
  },
  {
    "url": "categories/index.html",
    "revision": "8cb0d1f9c479711045924c3bacfb84d4"
  },
  {
    "url": "figma/index.html",
    "revision": "ffb1a93d892f473f1323af696c2a943c"
  },
  {
    "url": "flutter/index.html",
    "revision": "2e5da2a0ee88cb79eb930ec777d50931"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "cee8a75e37fa31aa629ac5b366daefcb"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "02b8cd76c881aac25a96126622cc24a2"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f41bfc3ad56a06ddc11f425282adec46"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "48b2f9e14a4b18df315e09ec8436bd16"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "452f317357314b7e50f2c28999891139"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ff11d909efa6cde88d2370a8ca712d07"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "2313b3804f1531e08ac0fe9ddef883f7"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ab59170bf3f4583190632651e142f924"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2a79d989faa6901fed7bce578816f3d7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "4bc451fbed5a6a196f82be718fb6cc10"
  },
  {
    "url": "index.html",
    "revision": "b78fd32ae31a3c3219bfc7759774584a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "721a4df2ba0d8de004b4d95c12cedd71"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "4d94fed6eaa060a3b1d3f46f2c378cdf"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "da2ad6fe402b41736347bb1f71604517"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0091bee5023b45abd63b7096da3a0499"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "18330f519cdd3ff8192c0cecb632ff7b"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "da17eaac6a9c13d407aec57df23030ab"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "40b4bb1d9886996976533dc5a43a1ef2"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "e699e1eeeee3b8f9b55ff520d73c32a8"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ec46d6b6adb8b1caddcfa6d65fa5b532"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "66187f14e5b8f3a8ff0916cb9e3680ce"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "25be87f7a80ff09798dc55db4ab85072"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "82de6f11327077032bd7183cc140270f"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "058578c9b9ff08e2673c5cee0c0d3928"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "517a668e86609372bff68af870ead4eb"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "1d5e9a1f58ee84417bf8d422287a2f12"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "524292c929ba438892419f904a638479"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "657121f7ce9d008a4503893a01f2ce00"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "cfafcf7a368b865f18fcaf645ca2feb1"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "93e3f22518342c729e21afc836a17b91"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7ddc17064ebf44f574a3b55d0296ee72"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e2c5c8a2c0333b3f2550c01d6322a2de"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5101e4d9abe2b5f615d08fc4c0b76260"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "49eaca1ec340de605c53187cdf3c85ad"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e2cbdd2c36273e8c96b4990db3edae42"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6c0f09368df062f17987c50d09d50140"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "640beefb55fee0e9ad5500a9fbe484bb"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "11c8eb3731a4edbadcc88ddd8662ce7b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "bb2afd87b762f48f1bccde3758b1dad5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c30dcf274580b010f0ad93a53b922050"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "dbbfad11f72574f5412ed04d4c5ca6d7"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ae8ff3181190e61d1570a3013ec4591f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "1f6309bdf6406b489dc6a85ce0b65966"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3268285c0b5b1e1465ab8f23ee8594b7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7fa3bf4e61026cfdd1fe55eaa9539aff"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4d77f08c000e462831831e2bba57ed0b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "48d26d061111f056d9ff8d888859d2af"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0b27b589195431adb8fed2d58043f942"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2733b89b5c2d2387249ac1c4f101c609"
  },
  {
    "url": "tag/index.html",
    "revision": "66249453ad803b8c9943355d469b8b65"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d9a6d1a622f41b173b12103dc33e73a2"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "74263d3b72b24511383e755ff77fc02a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e5f2f548ad4c66f10fea540ea442f714"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3389890e2d17088b36bc24ac3466859e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "a8588a682a1f7d68944fd5eef69ab4d9"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "55a04520e74f6f4b6e92146c6031f76a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "9e6a54b861bcc64a4f022886f8322168"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "35ad490d9d069b2f023d739eaccdd48c"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7d0e1b1ef630e0cf5f0106d73dc2cd32"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7b07eb0a5534a21d08c6290f765bd451"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a36f85bdbdc10ceea9539ce3d6eb488e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "794b94ea4ae2564fad589e9b45a23734"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "5ed790e83245ca2da7ccdbf755c99c79"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "701af815163558dbdd36f3784a1470a3"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "294c013ada6c4bd6e575a60bd8581140"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b798694add7224235e89c8c7f94704a0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "373520edfce8001b57768e15bf4114c0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a6dddb504866f04d8a1cdfac2f0881e7"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5a36938db4d7b6bb51cdfe15cc6c3c3c"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7e2982630031064ec1da53ff264b0dab"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3bfa5afd1eca625eefac2dda5ab2c6e0"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb71585f316b3efdfe30dcceaf86f144"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c2cbe39f45d3def2d107bca824c0e33f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "04f5ba3241ed6bdb06d6b78d11ab92f6"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2d36d03950c2dd62f4405c18a102897a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4d55ca34ac754565a7de08947941501c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e5ba0e3ae71f61a8cc9eea89f1ea33c5"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a5d92a9202c6d4249219f16906758581"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "58044ab956af68b8f33881062779ce03"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f993cf287923e1085a02ac6e619c9bc9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "cb8cd40e65c67d3babb92f0ab520e334"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "84c7beab0d194a6c0f4253a40b81a0df"
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
