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
    "revision": "5bd9ec89fbacc6c19beca65fe7984240"
  },
  {
    "url": "about/app/index.html",
    "revision": "9c7f5df4fd8aa5a7d155be5bbe6d11a7"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "358a854c7a61475fa32152354e3e5027"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b7fe0b9c869d7ae1df651223c9fd0449"
  },
  {
    "url": "about/index/index.html",
    "revision": "bcf49f6ff8e5d65bf49fe41b22114d89"
  },
  {
    "url": "ai/index.html",
    "revision": "ec2ad744bf46a589492cc319b86858a2"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9110ab147f103de08f1b5f9ef4d3999f"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.429f6100.js",
    "revision": "5079abc5c70e6401e011c2b0cd42e6b2"
  },
  {
    "url": "assets/js/16.de4c7be5.js",
    "revision": "91dfe2e910e1f674302d4876d7a1ae92"
  },
  {
    "url": "assets/js/17.0ddb612b.js",
    "revision": "d005c426a00d40956ca85e652bb17c68"
  },
  {
    "url": "assets/js/18.77bbacd8.js",
    "revision": "e799887b365b13b69b761f8a100d34d3"
  },
  {
    "url": "assets/js/19.9e579819.js",
    "revision": "d7e93989eb9cb8e0d42a115b9fddeb3e"
  },
  {
    "url": "assets/js/20.5ab45d12.js",
    "revision": "952a337862377b210b286e9d1d763026"
  },
  {
    "url": "assets/js/21.feed0bc0.js",
    "revision": "53aa1b695420ac448047037df4d0da89"
  },
  {
    "url": "assets/js/22.e652841e.js",
    "revision": "1598a1fe8fbd8495fcda0045859ca648"
  },
  {
    "url": "assets/js/23.ae326ac6.js",
    "revision": "7ed82f1b9810338287d73781e3ab0b08"
  },
  {
    "url": "assets/js/24.e0203ae5.js",
    "revision": "3187102e042dafa39816382f9f165be3"
  },
  {
    "url": "assets/js/25.457686cc.js",
    "revision": "79b476642e86d0f7aec070d0ef5949ec"
  },
  {
    "url": "assets/js/26.4b920c1a.js",
    "revision": "ec4d75a4732a721677fa92bd62169bf4"
  },
  {
    "url": "assets/js/27.64b91fb0.js",
    "revision": "7d583b00bf3347b8f8b5ce957d3e24ab"
  },
  {
    "url": "assets/js/28.06dc66be.js",
    "revision": "2ca610c92b76ac76e12274ee4cdbff74"
  },
  {
    "url": "assets/js/29.fc4bf6f6.js",
    "revision": "b84777742bed181d2d4b14b90987ac04"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.7c913065.js",
    "revision": "3b77d50e99a9af199a37b3f1eb9cdb93"
  },
  {
    "url": "assets/js/31.3b4b2d51.js",
    "revision": "1dbcc732a7a3c026aa0c1661ea3fdd6f"
  },
  {
    "url": "assets/js/32.9e0642d6.js",
    "revision": "e4b4583f4d73476ebc5f71c335a76635"
  },
  {
    "url": "assets/js/33.50c2e661.js",
    "revision": "37c2f9a06da6eeadd8aeccb381a65ea9"
  },
  {
    "url": "assets/js/34.cdcda296.js",
    "revision": "eecce383a8bc001a74c46d24361afeed"
  },
  {
    "url": "assets/js/35.a008f97d.js",
    "revision": "3328792ea738bae555848149bf25f1c2"
  },
  {
    "url": "assets/js/36.57604a30.js",
    "revision": "3aecddcd2cf64efb8e7f5ec853c372f9"
  },
  {
    "url": "assets/js/37.e9aaa5d1.js",
    "revision": "9cde3c297f4eedd1c750d0abea3f9158"
  },
  {
    "url": "assets/js/38.0798ed31.js",
    "revision": "eb1cf3184c569294bf59eba7a3c4ab03"
  },
  {
    "url": "assets/js/39.3141e4f3.js",
    "revision": "31a00a13189e1dc87b299e2346caeb5d"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.8481018b.js",
    "revision": "8868ad78aee3d258232c2448dddfe71d"
  },
  {
    "url": "assets/js/41.023f1973.js",
    "revision": "40153c122a931e092267afcf349c1d52"
  },
  {
    "url": "assets/js/42.5fd92d24.js",
    "revision": "7fb539efdb233ddc59ec5a377127801e"
  },
  {
    "url": "assets/js/43.a279e791.js",
    "revision": "45de2a263b6407dca51047c41af1499c"
  },
  {
    "url": "assets/js/44.9115e4fe.js",
    "revision": "066c716bb2c813c07c077a83f88b947f"
  },
  {
    "url": "assets/js/45.a50f15a3.js",
    "revision": "968106126e834095ad4b9adf80586bf8"
  },
  {
    "url": "assets/js/46.efeb034d.js",
    "revision": "e866df9d3ad47c9b5641dcdcef290fbb"
  },
  {
    "url": "assets/js/47.197458d9.js",
    "revision": "d7d98f793f90f34de09d0f66f7c5a171"
  },
  {
    "url": "assets/js/48.cff92216.js",
    "revision": "cc0c02d7e137dcd33ea8998384eb49d8"
  },
  {
    "url": "assets/js/49.87f44fc2.js",
    "revision": "712c7e10f77de352680e0a9232d5302c"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.96b0e1af.js",
    "revision": "de5113140ebbdd6393455d511ee6ca71"
  },
  {
    "url": "assets/js/51.38b48da3.js",
    "revision": "04543302e0e80d5bef8820e1f4c77461"
  },
  {
    "url": "assets/js/52.86b015e5.js",
    "revision": "d7c757e7bf52250f636eb1239b5248f7"
  },
  {
    "url": "assets/js/53.798e76f1.js",
    "revision": "342cb5f2db42962e3fb29d35595d1abb"
  },
  {
    "url": "assets/js/54.75dd30c7.js",
    "revision": "bf8e3f7128eec0ac743a9f3f885d60d2"
  },
  {
    "url": "assets/js/55.45185070.js",
    "revision": "2d69f1f69a123dca58d2669103823bbd"
  },
  {
    "url": "assets/js/56.09b37500.js",
    "revision": "945df41f2f3caae22691c58fb7bb2b49"
  },
  {
    "url": "assets/js/57.f0827fd0.js",
    "revision": "5975f05d11ab3d6e9522c5c04604145e"
  },
  {
    "url": "assets/js/58.3dfbfef3.js",
    "revision": "648b348f0f33ccb0268a15685f738d6d"
  },
  {
    "url": "assets/js/59.f850d883.js",
    "revision": "2d96d528e238f0accb4fb081015c56f5"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.5217e02f.js",
    "revision": "05401f767bfa3b7e8d4d0b76c9c0abe1"
  },
  {
    "url": "assets/js/61.e51ba456.js",
    "revision": "eb8f731a0ef5731e229e242697d169d7"
  },
  {
    "url": "assets/js/62.1986268a.js",
    "revision": "6f4cfc6b810d39044f001390f9703ad8"
  },
  {
    "url": "assets/js/63.2ff950e9.js",
    "revision": "a4bcf5ae92b87e149fc4b34f78490bf0"
  },
  {
    "url": "assets/js/64.5150360d.js",
    "revision": "5b3977c2ebc26efa929a33cc752990ec"
  },
  {
    "url": "assets/js/65.f6cae236.js",
    "revision": "af16ab356b5245d4af89ac7bcbbe9bb9"
  },
  {
    "url": "assets/js/66.62b1e246.js",
    "revision": "8896a402c07b5525a9f73c50686ce662"
  },
  {
    "url": "assets/js/67.bdfda77c.js",
    "revision": "ab039f1f5a5c80661241e6ff03b442d3"
  },
  {
    "url": "assets/js/68.b132fde8.js",
    "revision": "7c1010c8f06c02a02295c96e1e31af78"
  },
  {
    "url": "assets/js/69.68939c03.js",
    "revision": "5e03fd0867ebda7a636093ff25c1c2f9"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.07ec8a64.js",
    "revision": "d6daed817cd7b828d0295db894698d24"
  },
  {
    "url": "assets/js/71.7c67ab8d.js",
    "revision": "c156e7e12add4fa9082aee8245a8d28e"
  },
  {
    "url": "assets/js/72.8c09d089.js",
    "revision": "eeae93ff73fe2ea40c393a0b818736a5"
  },
  {
    "url": "assets/js/73.02b3082a.js",
    "revision": "e0101051511fada5e8f5b2c943b9975c"
  },
  {
    "url": "assets/js/74.1151875e.js",
    "revision": "f8c63decf5e634606d178fb1f2c516ef"
  },
  {
    "url": "assets/js/75.323cbcc0.js",
    "revision": "a794b3109512ca6b18100823538bd0e5"
  },
  {
    "url": "assets/js/76.fbdd2c73.js",
    "revision": "b6c715deb42636025643053b44e975b8"
  },
  {
    "url": "assets/js/77.ccb98352.js",
    "revision": "ab1cf6379fff7db2ee60b7433341d3de"
  },
  {
    "url": "assets/js/78.9d042422.js",
    "revision": "6ce550c97b26f7ec34f171688242b59e"
  },
  {
    "url": "assets/js/79.4084f28b.js",
    "revision": "f5ecc054f549a59eb7e5a4c640cb6679"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.69d96452.js",
    "revision": "2b04c07c6ab8a1addca64d0d883da3fb"
  },
  {
    "url": "assets/js/81.a78bda55.js",
    "revision": "43700ff2d98c6e05b5bd035e7414a3f6"
  },
  {
    "url": "assets/js/82.475ab0ba.js",
    "revision": "ca73d0eddc0ca3be0d7bc1ddf0464f15"
  },
  {
    "url": "assets/js/83.fa74f57a.js",
    "revision": "e3b83b9185db956ebec6a11f95b90303"
  },
  {
    "url": "assets/js/84.db9268fb.js",
    "revision": "3ce254b1e83722bfa0e43f0fea2301c0"
  },
  {
    "url": "assets/js/85.b9a89bba.js",
    "revision": "6ab7fc2c16f37d245346fd1dd97a218c"
  },
  {
    "url": "assets/js/86.932a1d7e.js",
    "revision": "80ac8754a7ae7a2228eae4ac220ab747"
  },
  {
    "url": "assets/js/87.68025be7.js",
    "revision": "eb0d1d7a5a9654bc2ac284764a37ad26"
  },
  {
    "url": "assets/js/88.36ce45d8.js",
    "revision": "6fdf0f901f9690ee52fc001e0a4ad1ed"
  },
  {
    "url": "assets/js/89.982279f1.js",
    "revision": "4aeeeb8a9d03983db2fb4642c5a6e449"
  },
  {
    "url": "assets/js/9.c9a951a5.js",
    "revision": "daac8c6034697c3284b52b14d09a4c7a"
  },
  {
    "url": "assets/js/90.515746a7.js",
    "revision": "e3c0b6a93829b2992d5470f20efc7245"
  },
  {
    "url": "assets/js/91.1b4a8fd0.js",
    "revision": "2392bc883c094806c1375c43ed0b5207"
  },
  {
    "url": "assets/js/92.82b5f14e.js",
    "revision": "1b5ac296bb2ba6e43d65eec366e5ab1d"
  },
  {
    "url": "assets/js/93.cf03bde9.js",
    "revision": "5601d11f26e674a5d9704cdbe345c97e"
  },
  {
    "url": "assets/js/app.4ed4f1e1.js",
    "revision": "729f8af02f1066661437c6380a3a717d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "54336245cdfb82648b6a24cbec0c229f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ecda6b99e6a6c8f43985a5ef6576784f"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "26c008c741059ec7e0d80bfde03f481d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "626f8903208727686c2794c1a20b3f36"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b0ad927b946890d4aaf6aa5674314583"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "516d2eb297cd15bc21e8aa9a071f2497"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a528cd941cf572c1f8f9e7e4e0167ba4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "df18a67207213423c832515fab46496a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "89e726d5f691f130854a3314b8fe49f1"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "926079638ab135b3cde767dc86e9e344"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "26a25ff1890ba1c139f091a2cf74ebb1"
  },
  {
    "url": "basis/design/index.html",
    "revision": "02d8edf7160b7ae34ee01a0a4c11f32e"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "60bac3234e811647954751a3107611a3"
  },
  {
    "url": "basis/index/index.html",
    "revision": "aff08801c20b7cdde6fddba36465c980"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5c3ea0fe48f9353052d65a26ab03ce4f"
  },
  {
    "url": "book/index.html",
    "revision": "ca220de19eb0d7326c8c17af1d63615f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "0fc0acebd2de2b3a1dd2c35312624eee"
  },
  {
    "url": "categories/index.html",
    "revision": "7494c87797eae1d4d6b54aeb4f211b68"
  },
  {
    "url": "figma/index.html",
    "revision": "cf974cd6c9cbb2ff05a963051f6498ae"
  },
  {
    "url": "flutter/index.html",
    "revision": "a04f1a9359c21aa5926cec5e8492e7e0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7d7de3e7a7cd0ce0f88fdd3984cf1203"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "737f7a4806bcd9a24bb888408da34419"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "45c4ab4be8f932158d5b52526137e50d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "704e68b081c6142fa7bc198296f3eecf"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "393d9777646512a273b269e259b2619f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "af5baa237593937fdd4ba9c33baa63c3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "bbadb73d5aca240567be6e345b03ac80"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "4ec761f43f36099eb2aad3a96d127333"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "26fa8b1da07584ec5214f3a4d5b7e5e8"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "59f56335dfd1093efe0f2efa73fe3023"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1b398facaa4d55b5806950b1af19bea2"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "55acd75693325928d7bb9d510ef81fb8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "a219555fa7c2eb098691ebefbbc23f6e"
  },
  {
    "url": "index.html",
    "revision": "373da1b3abdf73d5e8bd90c4be3c6eaf"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "09f74530e06feb77a9dba97090a693fa"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "670217ba8b14c789722d7478baf101a9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "54b2ab6925600325c886be894f58e398"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "58398d34664c9f5f40ae6255beec7fb6"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f5550a800aff890f29164168426ee8c7"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "3e969056bead520aed2e45462bdb3eb6"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "fbd968e43e8bdf07d48429f07c34cdc3"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "db4b295daa110cb98cb93d21289bb621"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "064eae7b8a6ca59790d7a3ab02b1aaca"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "7324312571cd6713eb75720a4b2d8d26"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3116c8ca97d36246d40ee231d57dce19"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "0dfaed8a1b121bf82274142f3af3b1cd"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "104a9433ac3ca4299dc0237775835f3c"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "f84abda832742e9a608da0837ba28772"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "b33dd36443a7a240d3c1d742c26692e9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "997458337f0c0dbc0bd05c8fda69c587"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "921ee3b5b307b2a89c731ab0a7218b2f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ab6b03c89ebc770a9caabf70cb9e1c50"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c338a1359550677e3b2554e3893c0d19"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9787d13f6bbbf719abb3bb0f9b32840c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ccd62e4bf25e9ee34809f675062ad834"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d9cc94ac23bf19ecc9ae010117e0c2de"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "966b5e2ee0ebb91a14282a4dea56459d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "21ea9672f5b149122b8761ddf48cd316"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9fa18004364e694064c7ad3d3ebc9699"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "56b2cafaca11e111ae737143fde49aec"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a2b67a8d249a4d76a079cf7ce2adcfda"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "df939df25eb5771e947a7ab08af81fb1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "572143047b9cff8536e3bbc557569509"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "2268c0f812e3781fc5dfe7af69d09585"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ec2d8f4abed9687b39963e5e6e02e305"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a0831f2c9ffe3e7bf34d334c14b0b72a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "cc58dd58778c705ffea024b89991dbbe"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "32f618da790f0eeebf592dc6ac6c95f5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bf350dfd863f6f838ff9cf664bd35e34"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "187d97ec737969fb69ef4caa09c97d17"
  },
  {
    "url": "tag/git/index.html",
    "revision": "96fb0ec0eb4cfb9bfed40bfddbe76009"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8f24d85b53f9c42838ccd59571eb4180"
  },
  {
    "url": "tag/index.html",
    "revision": "2ba070d80c531167856f7d7289eda627"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "81d16eb96bd2005449f34b04413392c3"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9236977ea1743e54e5f29de040e66f28"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ccee8576bb01bb665b70c9241eb92f48"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "2e68a5b71d18798cacdda26bc1de2f9e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c09ac0ff02f3bdc62f05df8ee7dd770e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6f9a75acad1a9f43961e51ac6cebf1d3"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "8c80d406f7cb64db557df2bc54c6897c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "bae09fc4364dbf4fc075df5f6468dbd9"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5ac1f472a46bd40b60d14a2e9e8d44df"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "66deeb52d7f4d872dde0046eeddd721f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5291c92d9657cbb1f592ae1dd072bdf9"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "19289f294719cc942e98e4be85bb04cf"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c36912d453d7cc08fbaa98127979a9c2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6056d6534c4ab491e78a6f744f7a2f27"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6216e72f7d89feafb366583bd0d9c571"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c2cfb96c31cfb0bbb0b3b01e7ee5f58c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8e04220fa8af270e0bb24fcc772ba89c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "14f76eb5221d2c0dee480799031969b5"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "b47cd2221fe8e2d6a7374be1d831a113"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0a08ee038ca76e85c040ed0788b04e6c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a371da66ced42f3ff7b4df103b162044"
  },
  {
    "url": "timeline/index.html",
    "revision": "b936f1ab606f6e4d799ca26aaf62d299"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2a421a4b564b1ae75b898fd71dcf7748"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "dd59f0c617e596077c73ec7c60952e5e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "736600df45190cac2dee875a21caa393"
  },
  {
    "url": "tools/html/index.html",
    "revision": "79b38973444a98106b89436b6bf185bd"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a7c4c89a1553f0959d4ab9d1e2c0f10e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "27a16d8d25ce146084260f307e538c3a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a3bd2c45aaab4dc1e640a5352aaf234b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "72ded8c405cc04d7ce6e104eae023b59"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "3ce174184fab37a4611e3293b64d61d1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "70717cb9145d78cfb70abca6471fe891"
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
