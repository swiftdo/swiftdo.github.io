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
    "revision": "de0115a26821db8e76d8df142c84e5dc"
  },
  {
    "url": "about/app/index.html",
    "revision": "024d96ba87121222aea6bc15b9d665a5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5dd2f5c6e54a5e861044cc4e80337306"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "cd3f1e320538c86934f1feb30c980a0a"
  },
  {
    "url": "about/index/index.html",
    "revision": "3bf44664b376e6b64e58009f86ab8830"
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
    "url": "assets/js/21.f9c412e7.js",
    "revision": "ff8aa9b842aa7bb579b73be647c78a0a"
  },
  {
    "url": "assets/js/22.8f5f0d2e.js",
    "revision": "7786a2dbb11a636b1380001c8c23873a"
  },
  {
    "url": "assets/js/23.64531120.js",
    "revision": "52bc00c19d197d8d4d5ac0cb916c3ab8"
  },
  {
    "url": "assets/js/24.4ef5f0b5.js",
    "revision": "742c5fa2dd17b9cb34d4801ce208bc1d"
  },
  {
    "url": "assets/js/25.159cf572.js",
    "revision": "d4b6b71a5e263c6d80d7f03ecb9079b1"
  },
  {
    "url": "assets/js/26.69a0e009.js",
    "revision": "d6892407d1d837e085aa15022aed02d5"
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
    "url": "assets/js/38.7cd52ecc.js",
    "revision": "b64ea6199d6d991b072538703cfe2c1c"
  },
  {
    "url": "assets/js/39.492da56a.js",
    "revision": "526cc2119a9ec1dddc7ad1f6abee6d2b"
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
    "url": "assets/js/45.8641d20c.js",
    "revision": "33ea303ac0f2d592197bad7c2b0b04b5"
  },
  {
    "url": "assets/js/46.bf9a66a5.js",
    "revision": "5991011ba50cc34b488ddd4803f35400"
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
    "url": "assets/js/54.7985ed44.js",
    "revision": "0771aa098a62a8b737d181ccf600727b"
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
    "url": "assets/js/59.17090ec9.js",
    "revision": "8507ba46bd0c5f0d697d5b257eb47727"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.46ee0b66.js",
    "revision": "8cd44070c656e7b57eccaf3eaf8a3a7c"
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
    "url": "assets/js/64.a1197b22.js",
    "revision": "d08e064f38b1bf1d0f3a5382b4172197"
  },
  {
    "url": "assets/js/65.4a3ea094.js",
    "revision": "0ac578f1f41b0915b59de95ce58e7ba2"
  },
  {
    "url": "assets/js/66.7822f306.js",
    "revision": "08b36b04e1af07e4be17970d77609635"
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
    "url": "assets/js/app.e3c43498.js",
    "revision": "d282e848f84e48966d0c95607b4e2ea1"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "4955cc7698e3dd05c8c34a05814d49e4"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "2ad87157adbcac18c6bd161e77019dc5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "be007c454f9051d84f2b23ffe025560f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c86bb7119de244e0f614b7ad1830f0f5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "39531e738f17aaaf7a5a12c5f7132d34"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "dbc21b080a9a2d477e7138f1e8c2c023"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e48842577cbadae71a422e516ffbe53b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "37f8275b91dbece91073bd03c534d409"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "926bb0794aaa36fd2983b4895bbb8d58"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9974f4be0e3d7ac6ee82f9c18a2de3c0"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9a2af5a4f29539f20ad3bfbc0e12d42a"
  },
  {
    "url": "basis/design/index.html",
    "revision": "70b4bfa52922748963bb432ee7e8abc8"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "5ac029831f3069ee72b62ad89db2f925"
  },
  {
    "url": "basis/index/index.html",
    "revision": "46b9f93e12b1f6034788b573a81d9412"
  },
  {
    "url": "basis/os/index.html",
    "revision": "bd16668d5e7d7926c57475dd15dda344"
  },
  {
    "url": "book/index.html",
    "revision": "1f7a2bc404c1daba3483b6883d9ef929"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4457c5900a60e8df1847d3bd0c930c91"
  },
  {
    "url": "categories/index.html",
    "revision": "8004c9e6808f3d869bd3aae2de6145d0"
  },
  {
    "url": "figma/index.html",
    "revision": "5a136cf76018715c993f0c484c4ff1f4"
  },
  {
    "url": "flutter/index.html",
    "revision": "6e720391f9d167993786796b81441340"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4890f02bd426cd894bbe71e1de7e85c0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "212d69902b36cb43795d32b30c4c98c4"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "44a60a0d9f71fc9edbdc37f21b50e300"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "7deb8bb154ab4026b6ffb43da3d1bc8a"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8555c8276ae90e6b086fbeb9cf5aacc8"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c84293fe5f0523cae95d2b7c78d6209b"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "460e4a3b7a4d90b7a1c70d587c05043f"
  },
  {
    "url": "index.html",
    "revision": "38c7376b2642e1327adf8f66977def31"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ffa36a5ec5bb985022c678ed683a4142"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "fe4acb8f4a61112654e8d17963659e2d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d5eb9631ba5c6cf60b99a0e359a7d17d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "813ce15217bcb7bccd2defe7a797fbb9"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "c224ff75af01d4e903cf1d5d44254bdb"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "e8995d9b69101240e4f90db98ef7ee5e"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "ad31f303718411dc7b860a93bdc25dc2"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d33fa0d10bf42a5278375c7eb679b6f7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "db76df87d6376c89a8cca0e09e811e64"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "acf8fb34c2c91de5ca1e761dbd840f8a"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ff8e67c2d055e0003ea78df6cbe53b0a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9d331aea48221b9259af2d1a6f06d759"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "ffb0253926683a476ddf2209eecc2881"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1b7fb0ab5b1eac2c432b967f28bef618"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "187b3fbd2bf558c7e96760e4af95b813"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "76dcd67e27d8b7b47f5ec3940667d903"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c4f9d066ff19e508007c8eaba46d9d22"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "03f9269f3b4127f14e5cf524561b76f6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "30ea40c3419fe7429341127064f245d9"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4b451093ff8c2d157b4b39bde7f923a8"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f3e67a9d852c2d02e7641b0cb78480b7"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "bf6a61c9ff262c1b712da29c79a545e7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a6d5fd921be57f55d9e57fcddab59879"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fc9a27bb04aca3cb1461dc937234c2a7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "eab1561b0dfc4720b778920d3713b157"
  },
  {
    "url": "tag/index.html",
    "revision": "4a1b855f3656988e4393f5fe055674bb"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f70258c577d290eb6cc69b70f39ebddd"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d3b525ce46296dad9b1cade8e888815b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7f495ac218f212a8bdb4a1ee968c02e8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "82a43b1fd0af0ea6c3b491c3ba6f87d0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "33b532df2b72b1378a4b7607c4946066"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "91e6542b20caeeb05cfbeb2b21d62b39"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "94a2a0ed35fec7357bf9402ebaf5fa59"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2b816b491c99bc0405301ed37746ac6f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "470ef7ddcc61340842e8d2513c3b0d88"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c68ed64eea244574c3cdd7012fcb4c4d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "152e009d32557837efc3ac22c70dcc6d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8bf53464cfc387b4fee1e5fb57c85e37"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fa1f14ff11e35f968a340fb6eeea2ee4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "3393907dd00dba1351c1198ee8bec0a2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9dbc81e761bb944330e49f864122f9a7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bd58454b0ddea7641246d4bd3930359d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "5ed7607e9a92900e2f2a3132a641d215"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd413e165e630af93788b2b8a3faaa3f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "753a91a8f932084a64a7542c474a1af7"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "efdf9f5e7a4a97e4baecb532ebf545cd"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c863855f3766c33bdd3fc240c9495b3e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ff166317418e77c13f2c1e53006027ee"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2828f7b50fccf7d24d2a7a5edcf85b88"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6048817d6f2fb29c1f253a91fd49cd7e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "be9327e136c5c1dc1c5e7f4679e28078"
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
