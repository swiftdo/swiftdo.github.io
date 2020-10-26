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
    "revision": "a41804c0faa7aad56fee7e9a1da766bb"
  },
  {
    "url": "about/app/index.html",
    "revision": "33afd7dabdaa773c2879804e5b42d825"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "87d58fc2894b55a8d2bf5e0306aa3f97"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bfe9b7f822bb139812074a1a9d63fad7"
  },
  {
    "url": "about/index/index.html",
    "revision": "3936b17cf36ec105d20fc47a1bda6b4c"
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
    "url": "assets/js/1.f5bfbac9.js",
    "revision": "d25c35a529e824a10392e774e3912169"
  },
  {
    "url": "assets/js/10.870ce170.js",
    "revision": "bd7fc62b5926950d899372ea2c8843ad"
  },
  {
    "url": "assets/js/11.5c4dd5d4.js",
    "revision": "cada028dddf3f9175af6ef858c0553e8"
  },
  {
    "url": "assets/js/12.f0d65a5d.js",
    "revision": "7c80409a8ce42968bdf00553b892205a"
  },
  {
    "url": "assets/js/13.4abb434e.js",
    "revision": "74b67427937a197fcc2027b38489352a"
  },
  {
    "url": "assets/js/14.85298c30.js",
    "revision": "b26355e42018d76202456720f647ff86"
  },
  {
    "url": "assets/js/15.b8142a3c.js",
    "revision": "7f1f54c81a58773e007d3f0770adc322"
  },
  {
    "url": "assets/js/16.5e2f9482.js",
    "revision": "98920ce1b809aa4067bc1a7faccf2b48"
  },
  {
    "url": "assets/js/17.9b0a2842.js",
    "revision": "d277c51ef7ba04b7e490d1a9a5fde331"
  },
  {
    "url": "assets/js/18.b6809d17.js",
    "revision": "1ddbcec0d1342d66222877c287ecc9d2"
  },
  {
    "url": "assets/js/19.df38015a.js",
    "revision": "84805c490a871056b507439977552644"
  },
  {
    "url": "assets/js/20.127c8673.js",
    "revision": "3e42ba62ddbbc101a9763a5dd4825107"
  },
  {
    "url": "assets/js/21.4704d19f.js",
    "revision": "a9a775f071a685f7b716c44593f45173"
  },
  {
    "url": "assets/js/22.b8077a1b.js",
    "revision": "3a2506719d04228f15b9d7c7f1e3fc38"
  },
  {
    "url": "assets/js/23.13bfc22c.js",
    "revision": "0972cd4f5054c07c5676023f02c4b218"
  },
  {
    "url": "assets/js/24.2dd0f23c.js",
    "revision": "18e92fa984917daf10d78d63b876643b"
  },
  {
    "url": "assets/js/25.32d2368a.js",
    "revision": "9bfcbe3ef6d452824008d19e8257a55b"
  },
  {
    "url": "assets/js/26.052e2640.js",
    "revision": "e9214ab0d2f31a4e6aae3949d5ad8fdf"
  },
  {
    "url": "assets/js/27.73e8ff52.js",
    "revision": "66748e0b21d8d98d083c15e468fd6b1e"
  },
  {
    "url": "assets/js/28.032b1e9f.js",
    "revision": "b0187e99132c72a5afc05ca30674d438"
  },
  {
    "url": "assets/js/29.172fa8c6.js",
    "revision": "f225e5884380a64311ab9506a2abdad6"
  },
  {
    "url": "assets/js/3.424717bc.js",
    "revision": "39e05bf0ca1c1528793236dc7e9ecfde"
  },
  {
    "url": "assets/js/30.a20e3dc3.js",
    "revision": "614e2bd42102c5b8db529e88b74c25a2"
  },
  {
    "url": "assets/js/31.8d11b2a9.js",
    "revision": "ed139098853a537bec4c887633308fea"
  },
  {
    "url": "assets/js/32.dad2ab98.js",
    "revision": "8285a9c999310bc0191b19b01cb1777c"
  },
  {
    "url": "assets/js/33.93a4179b.js",
    "revision": "0f4ed56ed536510a6ab1d95bce214171"
  },
  {
    "url": "assets/js/34.662950d8.js",
    "revision": "d9ca96f86488945ef1702672efc45d6f"
  },
  {
    "url": "assets/js/35.e479ed17.js",
    "revision": "9a96f1987cd937c37ecc3bd95af07481"
  },
  {
    "url": "assets/js/36.039b8de3.js",
    "revision": "ecc978c0575f391597461e5f43ac6a32"
  },
  {
    "url": "assets/js/37.e7440fe9.js",
    "revision": "d5443ef8c45d06a708df4b39a0546fdf"
  },
  {
    "url": "assets/js/38.974e3ce7.js",
    "revision": "8802937e936a52a561dd80809016733e"
  },
  {
    "url": "assets/js/39.3272d624.js",
    "revision": "4909462303d6ea05d4a6f84b8d97e433"
  },
  {
    "url": "assets/js/4.bb802eb1.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.a9cfc374.js",
    "revision": "d949e5c5b69b902efd58f0c99707cdc2"
  },
  {
    "url": "assets/js/41.d9c1bb14.js",
    "revision": "973b2b0b9d62c4456ddee5c0b6e28fa9"
  },
  {
    "url": "assets/js/42.15f87b8a.js",
    "revision": "dd30b8a8fb58eed422d85e2fc28f5ed3"
  },
  {
    "url": "assets/js/43.7e19e7f0.js",
    "revision": "e1000bb46616c31306bdcf6c7aa77aa5"
  },
  {
    "url": "assets/js/44.8ed3e270.js",
    "revision": "c9abe75b6e7cd94127760424d7ffbad7"
  },
  {
    "url": "assets/js/45.d9a7ca20.js",
    "revision": "12336b47028d77b515560e2be489bd8d"
  },
  {
    "url": "assets/js/46.dfc5c649.js",
    "revision": "00068a0ea8e63351814cd92ce633f5b2"
  },
  {
    "url": "assets/js/47.fcb39853.js",
    "revision": "d4b65417d07cd539fc3798f94eb4aef4"
  },
  {
    "url": "assets/js/48.cff70323.js",
    "revision": "b767576e18df6215985a0b3616cfb6f2"
  },
  {
    "url": "assets/js/49.a4b6e92b.js",
    "revision": "d3276fc31f8408ad3ef24050a1c37400"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.8b1aae27.js",
    "revision": "875f8aed44fc399a6510b8ced30ab449"
  },
  {
    "url": "assets/js/51.78819fda.js",
    "revision": "901643510870e8f084e7c47bc92b6f7d"
  },
  {
    "url": "assets/js/52.4c7e1534.js",
    "revision": "aa47eac9d106dc6a8d7b3006764b5ef3"
  },
  {
    "url": "assets/js/53.447974d2.js",
    "revision": "132a7678376f1f407d3848668f41df76"
  },
  {
    "url": "assets/js/54.eb95b2bc.js",
    "revision": "7da0e8d9ca3b08717af8aaa9c054564f"
  },
  {
    "url": "assets/js/55.3bdf218d.js",
    "revision": "fe30dc72dad2738a4699c56dda64aa9d"
  },
  {
    "url": "assets/js/56.1378fabf.js",
    "revision": "f51a1712793efbcbfd15f90195ac3eb0"
  },
  {
    "url": "assets/js/57.a069c805.js",
    "revision": "97f6dbecaad725299200cf6ffe13732c"
  },
  {
    "url": "assets/js/58.e9f9d4c5.js",
    "revision": "f05c32fc0c2720bcc37654336d8999be"
  },
  {
    "url": "assets/js/59.db16e427.js",
    "revision": "59308344bb0f04dc756df3cf6abe30a8"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.f23b574a.js",
    "revision": "3772bf9bbee0cc85eff8564e22a01662"
  },
  {
    "url": "assets/js/61.4e2b5eab.js",
    "revision": "c2ad71254801c333efeae24be3d8318c"
  },
  {
    "url": "assets/js/62.61e4c7dc.js",
    "revision": "01e466b7e3402522ab1124659a34d2e7"
  },
  {
    "url": "assets/js/63.9b3113b3.js",
    "revision": "6830b1cc1b68ae85ae33aa98a0a9cb19"
  },
  {
    "url": "assets/js/64.fe7ab7ac.js",
    "revision": "1134d18d20e0bc9836687e44a9496da6"
  },
  {
    "url": "assets/js/65.56d4e243.js",
    "revision": "46a4a50131b12b22727530b84e61edfd"
  },
  {
    "url": "assets/js/66.55e53794.js",
    "revision": "fdab202c9ab7cc21af194150dce11d9d"
  },
  {
    "url": "assets/js/67.5d101d79.js",
    "revision": "2f804dc7cd13b8b933c0e4dfddb079b7"
  },
  {
    "url": "assets/js/68.280f9a76.js",
    "revision": "d01153666389d536fe08d416ca636a84"
  },
  {
    "url": "assets/js/69.a4594274.js",
    "revision": "f3e678101bdcb61eb02799874400fabd"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.0abbf1ec.js",
    "revision": "30803a9af5db859efeace80f40f690af"
  },
  {
    "url": "assets/js/71.876126f5.js",
    "revision": "281ef21c87fc9a349a70d936ffb666c3"
  },
  {
    "url": "assets/js/72.20adeae6.js",
    "revision": "a523cade46a7a28d1658ece87d04fe2b"
  },
  {
    "url": "assets/js/73.f4484033.js",
    "revision": "7b543b5c81bb670f8e21588f62506f33"
  },
  {
    "url": "assets/js/8.7f7f6ea4.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.820efd31.js",
    "revision": "36f3e1c232c984d0c095db28720a668a"
  },
  {
    "url": "assets/js/app.dd73a8d7.js",
    "revision": "b49200c0c630a7281a2f37c042ea8e8e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "3230ea2a697950692a305018af5e62d6"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "649c95fef45155d3d4a522d0c28f2cdd"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "480e810f5383904466b3f701788cbd2a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bb18b39e59579a6a93ef1c611c5a78b4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f063b80ebfdcfd8178cfd247fbc5788a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e573126351ec06a8b595521e7ff25529"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f97883bb432490b09feeac18c89895ca"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5f2fb47f283b25edbd9c2ead476ae8da"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9d93adb05a4e23209e29d5e74815c287"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "aef3fe3005e9c5e706b93e55dff3be9e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9571fdedae084c144994796283ec042e"
  },
  {
    "url": "basis/design/index.html",
    "revision": "6ac17c853a70cf3b5efc6ca242b520e5"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "7d54ea64e630a4200bd55db404cc6ea6"
  },
  {
    "url": "basis/index/index.html",
    "revision": "82a99eff7bd9dbe2ef939171589810e5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ffe1df55da0a56c125ef37181f56617e"
  },
  {
    "url": "book/index.html",
    "revision": "eb1b070a0a00c22d0b066ddac72656a8"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c95efe8c3528d97688f96632380ef7c9"
  },
  {
    "url": "categories/index.html",
    "revision": "cbdfe2b18370dbd52c645f5bb3716a4b"
  },
  {
    "url": "figma/index.html",
    "revision": "a5e63065eaa2f1bda70d3503e9781f49"
  },
  {
    "url": "flutter/index.html",
    "revision": "a45fb2a676fabe3cc2eaf4b18e749242"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b6952d38b4a8f58a1e811d926eadae2a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a5725de5741a9c7919fc23d00dc94468"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d21c2b881d6c7c446f69cb7d2da84cba"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "2210ffbb160e95dba83b44c3f4d37422"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "5931b28c201d70ac8f3f3fb4c91a602c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d6590327a71efbedb148d6f7c40378cb"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5dbcacdb7f49456b77b6cfbb07562068"
  },
  {
    "url": "index.html",
    "revision": "b83221648318133c85d2805f925d8153"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "bfcab6121431c2bd35fc8c878a088ee8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b2d16ba75e28ea0bcf1514fec6fe33c7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0382110f7f13a21d979d60cb1fd69857"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c40788be3eeb75acae693ed1136bd62a"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f613bd82767a8e5be43d2a56ed629c7d"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "f62aa1d529b25fbf06ed33480ec0ca3b"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "83bfbd34985a6e365fb321a264b03da3"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "438b8fcb5f736cfda71cf826b993413e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "02c6b085cb961e1f38475a1bf2f2e847"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "1a767e475b42e214232b2a2e99718646"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "f7d297f2e04ad0945b16d132aa3e05e2"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c3b3f36d6b9fb0700355c66a5ef37b78"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "ef4d7f962a596d394f96afe5cdc1048f"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "59a912938d86bf6f952e53949b904d25"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4ab4716c34959870ae65a5b6d01630f8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "43c4f86db0e15ed4a98e12db66477423"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "944764342ea720bd7d95953a1331a733"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f3a81a03ebc6668c853ce26cf6a582d1"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ae6b30817460826e86528a1fdf9ee23d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "eb70bb4811ac1809c06bb3e4e12abfd2"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "55127d688e77a919a28db01e2ce9bf45"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "bd39a3d95c1c41f1d14fb5f7758a1bc0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e5feaf23f3d43a61b365d86659d5d1d1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "dacafba8c8821813a788e34fa5daa44e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6c3775cfa6d4536303e0c4f387160a58"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2f0b5420ac6a695225fed8d5d945ca45"
  },
  {
    "url": "tag/index.html",
    "revision": "eb8b03cc9f11c36ea505a43bce5fe6b0"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "88af3983d93c3df8ee983a1b1392734b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "348a922ba7d98d271ce208ad182e21fd"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8ae5df1b061a05c230f4499b1bfde8df"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "266c225d5ea5c2fc08c77653db1c3407"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "19fd826834331cd2ebbeba5e3b22de66"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c4edd17018f1dafac4749bcdbde6ea74"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9e557cd1fc2dfbe1faa49b77d7e64724"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "619ddbd159fb4250649997ba13b7967c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "07903aa1c3da9350f56493109c1ed6b0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "704087bcb901e3ce23f0cd01e8532bd7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e52162d3a9a2918982318405a621920e"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "88481a992ace3ff908f490d3776780cd"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c345f881a788f494aaee67ca6a8d31ab"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1562f74f42fc98a8c7ba802e04aa6498"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3276482073dea286378fd9254cb77564"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "145c2f2d4cd5e6a20c8f53edbe4f7ffb"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "852c8f96bec9a001b87ef8b80e632d65"
  },
  {
    "url": "timeline/index.html",
    "revision": "18c40a34e0aa5b6bea28b551e6951583"
  },
  {
    "url": "tools/git/index.html",
    "revision": "79721c59e2d25bd09ca7e062293dc474"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "086b79578e74effe5039861df837dfeb"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4bef11dd8cea6774712a08dc6cd28ec8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "570d8981d0e96d94f05079f9e4de3c04"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "caf1976d6f41a8f8ddaf59b5b7f99652"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "504cd63a17e11acf95f2d67289b27c99"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "31e5d09767c9138aa8571fece8fdf038"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "47f7608f57f7824023ec8234f13470e1"
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
