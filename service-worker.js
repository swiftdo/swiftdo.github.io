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
    "revision": "e0665f20aee914dd935e6a9ab71d9e08"
  },
  {
    "url": "about/app/index.html",
    "revision": "35ba60926cdfc4c524ebc1878654db45"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "19d87995c61f65b65c066f43417d6402"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "80b6c76551d4151d5ae987558272b123"
  },
  {
    "url": "about/index/index.html",
    "revision": "4beb7345286fc13a42517dd46d16be6c"
  },
  {
    "url": "ai/index.html",
    "revision": "c484ca2f3fad36cfd58aeebd0216ccd2"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a1d45aa81b6097e9d47f4ec2069c840a"
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
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
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
    "url": "assets/js/29.390db75e.js",
    "revision": "70ead5cdd356bb61d3af6a67d94d1e4e"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.bee18969.js",
    "revision": "cb3f9cfb5345ae194496ce98ac6e53c8"
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
    "url": "assets/js/33.d989b6d5.js",
    "revision": "2e2c4c22610583b1e1cc200827ea4c07"
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
    "url": "assets/js/37.f0b34a25.js",
    "revision": "da82b5facab3f861480411ea46974331"
  },
  {
    "url": "assets/js/38.ce4e379f.js",
    "revision": "0696b40aab2c1f4cf0c26b4339abbc6b"
  },
  {
    "url": "assets/js/39.f1cc87c6.js",
    "revision": "bba63b134a11ea885dbb267e939250b8"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.40f86c16.js",
    "revision": "fa7ba1ffae8803060878c58b9a38ba28"
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
    "url": "assets/js/45.25d7c6c5.js",
    "revision": "8e38b6ff14487d4bd035bd78c3799d31"
  },
  {
    "url": "assets/js/46.04ede97e.js",
    "revision": "93c575778279f2db24006a937eb9ce99"
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
    "url": "assets/js/50.96a716fc.js",
    "revision": "feb45975b7237c7a81428fe008708056"
  },
  {
    "url": "assets/js/51.a890ad0a.js",
    "revision": "115eb14efec76f56e4d9f513cbdde165"
  },
  {
    "url": "assets/js/52.cba00454.js",
    "revision": "56ecce06293d268b681fc9936590785d"
  },
  {
    "url": "assets/js/53.b7e7b45d.js",
    "revision": "ebc8abe4d35b1c441c6a73b6318710d7"
  },
  {
    "url": "assets/js/54.3cdec3fa.js",
    "revision": "3f101351630e2778fe83ffe266a32373"
  },
  {
    "url": "assets/js/55.1babd1ca.js",
    "revision": "90e67faa454b9d4a97145a637bd70714"
  },
  {
    "url": "assets/js/56.6fc06cbf.js",
    "revision": "70c93f29504d30adfca2241c536c1ad1"
  },
  {
    "url": "assets/js/57.61c29534.js",
    "revision": "b11140600eb78569ec1f29b16e557c3d"
  },
  {
    "url": "assets/js/58.0945d176.js",
    "revision": "86c0f6ccc06b0fbe89d00343d0ccedde"
  },
  {
    "url": "assets/js/59.3d2b4751.js",
    "revision": "73f1d25e6d2964ef592e008988d661e5"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.b6d275fd.js",
    "revision": "87a7a45f9cbb01d633ccc6aec68ee30b"
  },
  {
    "url": "assets/js/61.d0031739.js",
    "revision": "e7002234cc6a6433ead9a39518354153"
  },
  {
    "url": "assets/js/62.6fdf12c4.js",
    "revision": "8a108783c7947ed49984b7a3ba6fd1df"
  },
  {
    "url": "assets/js/63.be9a5f1d.js",
    "revision": "591498d910cd43bfb69b4e17184460cb"
  },
  {
    "url": "assets/js/64.e5d33c75.js",
    "revision": "55cf2c196e206e9d0f97db500f11d944"
  },
  {
    "url": "assets/js/65.f35f342b.js",
    "revision": "b00e1354ad2e8e1c28b7af9619468799"
  },
  {
    "url": "assets/js/66.1b701223.js",
    "revision": "048ccc83ff904e42dd1352d67adada6f"
  },
  {
    "url": "assets/js/67.70cb64b8.js",
    "revision": "8c0cd5ba7ce7664834acfd30ca4f2b20"
  },
  {
    "url": "assets/js/68.e015cced.js",
    "revision": "adbb5158cd7cecd84082d84cc4b04b69"
  },
  {
    "url": "assets/js/69.1d041b80.js",
    "revision": "e089de15c8d23509729735116609af8e"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.9e7bf7b6.js",
    "revision": "0c9a896cb6db8b6bfda0b3d1e439b889"
  },
  {
    "url": "assets/js/71.2958905e.js",
    "revision": "db57f061c467adc596d59f9e6dfdabee"
  },
  {
    "url": "assets/js/72.5495cd0b.js",
    "revision": "505f57e08431621543bab7fbba93501a"
  },
  {
    "url": "assets/js/73.dd1c4e0f.js",
    "revision": "3c2ac8a977690a6577509516d4fbe1df"
  },
  {
    "url": "assets/js/74.ad960e35.js",
    "revision": "30671b897ee497fd84c529031bb4951c"
  },
  {
    "url": "assets/js/75.9b4085fc.js",
    "revision": "e4079a948bb7ef13f9942195b5d2c8cf"
  },
  {
    "url": "assets/js/76.a81f1da8.js",
    "revision": "7e72cc842aeefd860875bb1f1f21e82a"
  },
  {
    "url": "assets/js/77.91eb09f4.js",
    "revision": "04708d6ccf5712f79f4c3d1e3d3a4e44"
  },
  {
    "url": "assets/js/78.c9a27c3e.js",
    "revision": "3e1e781e807dd3613f126c1a496a0711"
  },
  {
    "url": "assets/js/79.c4fa4ed7.js",
    "revision": "e019444811a3461c3da7f8e4b3379a93"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.5c38eb54.js",
    "revision": "59e2074e3f87aa265ba6a5028001b537"
  },
  {
    "url": "assets/js/81.9c7dd660.js",
    "revision": "e482bc1eb8b6ba990ca0847626e2b744"
  },
  {
    "url": "assets/js/82.a7cfded0.js",
    "revision": "c7cd17a7a05e68f96ada5144e4a2fed2"
  },
  {
    "url": "assets/js/83.67c6e165.js",
    "revision": "dd018a627aedaed2c66a70b1802d5e80"
  },
  {
    "url": "assets/js/84.3837a4ef.js",
    "revision": "ac681f0b43bab2776809a481869598cf"
  },
  {
    "url": "assets/js/85.b0573ca5.js",
    "revision": "c50d78f4df682b1dab864e9f293a547a"
  },
  {
    "url": "assets/js/86.03876d63.js",
    "revision": "06886efbd0150cb7e7475b8e5570f383"
  },
  {
    "url": "assets/js/87.76aff78f.js",
    "revision": "78295cf00a5bc377b1df457f508ff350"
  },
  {
    "url": "assets/js/88.77ecbcf6.js",
    "revision": "2e5359423c6c3ae1a71e95c17a5cebec"
  },
  {
    "url": "assets/js/89.683d3236.js",
    "revision": "ff37a26dc1ab02f635e4c0160571cb63"
  },
  {
    "url": "assets/js/9.aa8222a9.js",
    "revision": "6ab38dfeeed7c69e1d221ec887d21fe3"
  },
  {
    "url": "assets/js/90.7f1e5bc5.js",
    "revision": "3906bb13d635bc671c5eeef030f55e88"
  },
  {
    "url": "assets/js/91.d447f093.js",
    "revision": "a2043becc5a0ba72e87cda349d6048ea"
  },
  {
    "url": "assets/js/92.6967e7d6.js",
    "revision": "4403519fcfad32d7eb285a8f596fa576"
  },
  {
    "url": "assets/js/93.b588de52.js",
    "revision": "ef547af24241824cc25c1ba164eb6758"
  },
  {
    "url": "assets/js/94.5bb93fc0.js",
    "revision": "64350f035c1fdb1a10df3a339dccd6b3"
  },
  {
    "url": "assets/js/app.c8130063.js",
    "revision": "5104606f826807a3b052dec5c2fee4a0"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "1a4e03bec5e9e9f15e4f7a34b3831a0a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3da942b725e0b236ff6945cc9f5397ac"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f010c6449309fafb955e9aae1eacf50f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b1edb28a3f2d464aa19d9ed06481eb04"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "65e505d8d962dda12513045bae94ee67"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d7fda36c05c9d1e97773f0ee6d849ad3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b7c271f209c04c6ffde3a8dc202458b4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2b668094835bef7f194680957b0a6990"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9979e09f13795c8cb343c2a5687a487c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a195334794f3623c3c69840b675d798c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e232a7f30e0459c3219f2cd0c67d20e8"
  },
  {
    "url": "basis/design/index.html",
    "revision": "7eea0156f019643123ce1111a5053cc5"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "fdd015ae09a2ae20a3b50331bd25df3e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2311c55a5aa1c954463278d7d932308c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "6c1cac304ac55a406b12b743d032c1d9"
  },
  {
    "url": "book/index.html",
    "revision": "2c4514703025e6e3974591b9010b3f96"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "090038d271dbe56cbbdde3e7e4be0054"
  },
  {
    "url": "categories/index.html",
    "revision": "c07816a4056e12b374ed9a75b1756447"
  },
  {
    "url": "figma/index.html",
    "revision": "85bcae03782fd591eb1f244a7ac4961c"
  },
  {
    "url": "flutter/index.html",
    "revision": "eb557708fdc6ca913c78c91404724dfa"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3a3af376117de5805b0fc0d1825827f8"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d5b217d385d757b81f9cb68d2dd5052d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "10ecbea22dfa8077df4590007daaa945"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f57484a5c4a4795fdb2273f1c349a634"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4b7c6a20c8c70bc88463f11d48cb1b06"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "cfbac650ac9e9fe14a7a295b94c1604a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b3a2c213ad831a8b6484f4d610a2b7bc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "cac3dc351f00c45c66db01f75b043acb"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "29c8cc79b81ca864ba523e789714d7ae"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ddc194cf762101c12a911917f3a8bf07"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f7339b42e4eda7328328c7a56a7ba0ba"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c490207e387aeb5368e3f05cf7e534f1"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "20919282893210d501eb630ceda78559"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "2397c4f4f32d9af28900fa150a607a42"
  },
  {
    "url": "index.html",
    "revision": "43dc7fa2f851affc8cf5dbe3be1e473a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "c6dfdd850504d4d6cbafd9507640366e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1d46a75b4e970d3a5f8ac269c9c7f41c"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "0f8ebf922d3cd1a3057416f994f8db44"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1702712a46a827e95ed272e7e10999fc"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8c82b032242ddbec109853cb10f549e8"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "8e3d35de07802e09ac3a6f8da33d8349"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "17e2888ee34bab20d8156b7165f36d43"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "f0abe9b29180851c432ff590069b3cb2"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8c6ddcf31d08f8947c09589b81a2f592"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "feaf72962859443247a7b45c2d078e2a"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b264ccd72f6bc772459031d44eb47ca3"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "19d3e1b334c8d8c501c42dabe12dd89b"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "b08c259de4e8226f1c96bf378b33c203"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "68dd9aae90c3136a3cbd60340b95dbef"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "3f013a260a79767e931d3bbd09a36be8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "107c727a8b3eb035bc553c7831ddd5b0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a8fc4f1f0bcf25a550569a1c6414e0c1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7f2940e9af8d905ef90dc704afad79cc"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "161cc2f6c77973ce5a9a3f44d6b425e3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9f57fd076fee7a35ad38d04677047bd1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "51c0cb89ac5816f0ca5cb94c172a1901"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3cd4226dbcf9f3348a0f371da6f98055"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b86332f98eb72b771e3fca5e7cb93902"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8135f96029171475d8b60f5c48549278"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8656679f2f2b5ffc562a9c8218c98594"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e7b551345fb0b627b9e3d9c2244a7747"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a27241035567f47ca81dd3042426f1ce"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "6ddeb1e05d23a95e511d9a0557ec88b8"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4df378214d76dff446497c2aa4ba467a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4df36b83448d5f92369ba717b383f688"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "e97d67a1b67ddffe42944d719966999b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "854adeda14142f2e28d1b8112f913d48"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "eaf95de93024bdbe3870137b4d674ec5"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a20633ce945d986f98c8f9d494803dc1"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "410b33c463a89fa817bf3655e28aa264"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "634c93aa3f3e873ce00585cb8efc74bf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "af47ee21efef33de27766cfdaa71d2e5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "58f3cf205f9de42a4b39ca2a3685b4a5"
  },
  {
    "url": "tag/index.html",
    "revision": "77eef459387e2ac010ccb2d0a741fda4"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "dc42435a3f190ab0b02783f22242c54a"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d714aea3bb8e3e85f917e1580613d72c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "41f08b0cae096268c329b1ea63a2b6c9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "899a140ef1d830b37f8b3304120d19b0"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "5c3837a13220b0fd52edf67a3051eebd"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "701844048081d859b2d6c66cc1d12c6b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "2de21d93b9b72bb84ffb98327f3f5ef1"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "75cb3f9c0fc82c1166e1403e517a21f5"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a0cbac3fde08b252c496860acf21f312"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4d729a25476655f3facdd6f31157c3f6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0aea78813d5a499d7f53426d311795da"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "4877c8391c2d2e0cac75fa6c9a005980"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "4c392ee8ecb41215413cec0374e017be"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5194b920f752499d43485d6a697840d7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "56153c1f0d0dfb8a34aeda4d37193dfc"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "46400e6e8ae32b5a77f6cbf850a1f35e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0ee14a1383eee0f492469527d2fcb24c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8b1011733536265cef131a07162096e0"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "b1b3fa7ee6b5b3a789d842861f9ef083"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b4ae9c22dcdb2dd403de8be4b59d164c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a3242da57ddb6cd75c01d9d94fbef2ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b09246bb9fe864aea343ad2e79cf0b5"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8cfb6fcce0e0a38f4787d03ef7063961"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7e6b92982ee38c19d797486e7e002cdf"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8add734e48a3eb57f3eb9efb24f9ef80"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1c79fdc0d48d9a090c10ffbc32cf8191"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f0ad9e5915c94e976141be41349e3075"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fe27afe9bd2c55e5be37a1771b8bc6c2"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "94249b0d9dfacb6d793907d3eb57e35d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0f309555e8ae169d6673082976997ada"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "aebcd1ee879b8095e92d2eaa55ae5d07"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "fb75027c7e6a1c809f2c93678fb3ac74"
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
