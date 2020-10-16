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
    "revision": "5b1f4dc643a731cdae47be966c451766"
  },
  {
    "url": "about/app/index.html",
    "revision": "3c36722985140a45e210cc65efefed4f"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f3011f2a7accc6f62ed5f62fe590cdff"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4c19e12bb93ca7cdb11f9ea985ac5c52"
  },
  {
    "url": "about/index/index.html",
    "revision": "11af17187675415f8313abd6890e5dee"
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
    "url": "assets/js/46.66243437.js",
    "revision": "9bdcd8f2eb52d3dae3eb4c5cfbb1f2d4"
  },
  {
    "url": "assets/js/47.9b5eb473.js",
    "revision": "84f8160ffaa559f110f538bb2d0e8887"
  },
  {
    "url": "assets/js/48.9b4ff474.js",
    "revision": "e9aac364db226e9ee504c7c721ef8a00"
  },
  {
    "url": "assets/js/49.74f5b623.js",
    "revision": "a127d312e5920c29652b05eb0bdfb47d"
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
    "url": "assets/js/57.c2bb38dd.js",
    "revision": "24e43456b433d97d5e0ebca43272ff3b"
  },
  {
    "url": "assets/js/58.2bc432ae.js",
    "revision": "3460ec34f6afb8d3260b079f8e3c3761"
  },
  {
    "url": "assets/js/59.0526b220.js",
    "revision": "869743171e9ba8a06942507edbcb1fa1"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.0d71911b.js",
    "revision": "802267888572ad09f2b583ced7a7fbd7"
  },
  {
    "url": "assets/js/61.0134387f.js",
    "revision": "da72caa9747e3e5563e811f82765401a"
  },
  {
    "url": "assets/js/62.73826e72.js",
    "revision": "d8e712af6f6121861795d6c8e08f43da"
  },
  {
    "url": "assets/js/63.43076aeb.js",
    "revision": "563784d94d0634f3eb0aa3b7c59bca08"
  },
  {
    "url": "assets/js/64.ac3d668e.js",
    "revision": "7529aaf691eff8d5094570efceee4338"
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
    "url": "assets/js/app.e4a07c55.js",
    "revision": "cef8fc4c3e1ce905813ece429afcce39"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a3d8101cd608c9991b4dc97b2420295c"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "bcf9ad890f54f89ce7460aed95733457"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "be880bcc30ce406873b5efa07398b274"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "709437bd76760145db8f5a6ecabe76ff"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "fe3956a81ef297e3437848fb0f52bb15"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "265823e1bacd4a5980b151fc9ee96e23"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8c7f3cdb026f58e359082a1e82bf6546"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ef303502f58482324d73d96d94d7c7b3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "90e09767ff8a1d82eff64949a1c58edd"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "2dba34b03512dd37a02b3381a33d7a90"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "6fde8d472dad2568e585489f93ab7f2d"
  },
  {
    "url": "basis/design/index.html",
    "revision": "eefd61e70937e171f2a1db553968d382"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "f9165a585e36110355d2024b7235be61"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d9df3a6fbcc9437d7c4eb517fabdfa26"
  },
  {
    "url": "basis/os/index.html",
    "revision": "18e3c02dc8b427e3613907ebd949803f"
  },
  {
    "url": "book/index.html",
    "revision": "63a0940230708642a0705dc271a770ce"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ae78924cc867ced762bc2a53079b50f8"
  },
  {
    "url": "categories/index.html",
    "revision": "b55264833c08b92afe23b3ab5f81154a"
  },
  {
    "url": "figma/index.html",
    "revision": "68ba56a7f6cefe6afc5a9a9f9e4f0a3c"
  },
  {
    "url": "flutter/index.html",
    "revision": "72d339942a52a212298c6e12f5d6101b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "29bc287a79fec6fe6e8a73b6fd70bf09"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0514bef87ef7a631081e33c1ebf095da"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c684676c5fd2ceb49a7c6442684f8096"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8b3dd1025f84c91a194a4ae45e51754b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2e978f3466c10ba39a2e7ede4ba8e71c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "1bc436e96343551899f199c4a3232bfd"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "60ae2361deb506b818350ed3ab9a7fc9"
  },
  {
    "url": "index.html",
    "revision": "59d2d50971720f8628713bc4064c1c4b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6d992e381bf874fa6a588ecea840ed18"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "54cb162b7cfa24ca0911d829dd3eeaa0"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "499ca42e840e5fa280b5bec9c5b17466"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "09b9e0393978f91d2d055c57aa8f1a9d"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "712959dac5dd7c13d0607d4e612b0142"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "68130469bb6a0ec3a187e004f7297fec"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "913e3ef08b89c366027bdd0b51d3f8ea"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "573e72474ab822cf33ea72d2368fcf7f"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "1a9ee49247e4bc06529be0b675420d9c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "e70115bfc3da75e2aa24345039b53107"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "29c21f0a10604f51888e0915c70cc658"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "80ce8769681c94963f5f5eded20c7af9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "bec265bcccc688c94b29117a17e3deb4"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "db45352ec090c2b3ef2d049a099cdca7"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "8c3769843f065ce950354f25c10ee050"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3aed385e8ca13236bb84b71916ea3b6c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0ec8bd37b2b3a723789ef82efd8bd48d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0aec40e9e80bc2f473e01c1014b3ee3c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "89ed6c4686cdad8d4759a3af3f258ee0"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3c004eabe95eb16bc182032f40e7e3d0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e516b3fdeb9bb64fffa7367b528fcbd9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e7cf41d4aeadb916495615af39dca223"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d45c777fca7c41a437c346c8f16dec2b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c33dc06a72f98c015c3f7df0f2e4d334"
  },
  {
    "url": "tag/index.html",
    "revision": "48aacbb0c2f7a959315db237afeef934"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e63741520efae626a538d3f3abeb0213"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d37d5a70c157a5def0d7d335cea84565"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f3dce2d048d6b6f59570dcd69c416747"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "d7a93b64c2c72a413dfd7cc046429905"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4d2de62cd32621fd5a071dff75d3b347"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "6d63d1c1502d4a9d2046f6c05df45494"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "1677ca849c2a1a519db3c01333264cb4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a7e1740c4b20c81868de17eab0548c23"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a7a9549c8a2af4bafbad067458d46cca"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "42de926dc1471eeaf33972059adb5856"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "88b6a23cccfc4383e7ae314b8003bf5a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5c5ef68357048d4cb92f9528c6a85d0a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bbfe321f6845870720ed4c3f028d1cf6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9d614b39dc3d06c206f8f9c0f8dd2533"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a12acb9ec8612cee1e6473ab68a451d4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "0ec8846c5ed7cade244c989221edc711"
  },
  {
    "url": "timeline/index.html",
    "revision": "5ab157a655f4d96f8fca64bdc5b3a6c8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "456fcd6fbf5c0732e3554b4731283a3a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f733da84b8cb9c3ccbfa54222ecacf29"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "49c17f3f23749f04105819901d1fb3b6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d396388ee36bd3d6d7feff13d917feaa"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "5ceeb6f40ae5b1de234a6b2e981b808d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "71ebf653d8c0558810705b5087ee8382"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "b0d3e6e24ffe1edaea63565b479074d3"
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
