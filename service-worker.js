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
    "revision": "26e90833c3418db90d41c2682eb32d67"
  },
  {
    "url": "about/app/index.html",
    "revision": "8fb19a00d5185e1ac20bc9abb9fd154b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2eb89697e758f9b81d814d52ef694a2a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "79541dd493781d4a7223e9df4b33bd72"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "25cd1ff85f49b1f2c3bce26865281c4c"
  },
  {
    "url": "about/index/index.html",
    "revision": "0244b659e2ce25f9260a91d733b14944"
  },
  {
    "url": "ai/index.html",
    "revision": "4b39de1b888530c1ad631c7f7c7b33f4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "fbe1e4b160efe5c453388ba42563f4a8"
  },
  {
    "url": "assets/css/0.styles.69e419d6.css",
    "revision": "84df19b9cf0610a91946ef13394769e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.40d766f2.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.a1b7c426.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.82f9b93e.js",
    "revision": "ee9fa8e6a41237f87f240aa90d0a9b98"
  },
  {
    "url": "assets/js/101.2800ced3.js",
    "revision": "e868719eeacc999ca822037d203443ba"
  },
  {
    "url": "assets/js/102.13a369d9.js",
    "revision": "2a4908fa24f1d0a02d90b5fc4285f801"
  },
  {
    "url": "assets/js/103.9a309884.js",
    "revision": "8c01a66d07aa472a511b0950c2748d5b"
  },
  {
    "url": "assets/js/104.9939b966.js",
    "revision": "bde30c32af45d94303b9f3c4508aaa28"
  },
  {
    "url": "assets/js/105.df1766ce.js",
    "revision": "17193ef6ef1601f78b923d5c913bf8ed"
  },
  {
    "url": "assets/js/106.7011cd31.js",
    "revision": "8533c6793cfd9f725b1d2b86930ccc3e"
  },
  {
    "url": "assets/js/107.0ddda37a.js",
    "revision": "eda17c3a6492b7f2e6e0d8a8f9003493"
  },
  {
    "url": "assets/js/108.845c2532.js",
    "revision": "11e38cb236ec7c8f3748add0de404a17"
  },
  {
    "url": "assets/js/109.6de1f923.js",
    "revision": "371fe31c3dd9e914b720e3683c041f7c"
  },
  {
    "url": "assets/js/11.2c085d70.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.5b2a85ea.js",
    "revision": "d9fbdc839a43d1c6242f3626df9e39c5"
  },
  {
    "url": "assets/js/111.20227f3a.js",
    "revision": "94911f0dbb4f39352de8288fbbc2f2d6"
  },
  {
    "url": "assets/js/112.6ca3a10b.js",
    "revision": "22b5f17b37be42ba89f9a1c7e416f0e8"
  },
  {
    "url": "assets/js/113.59671290.js",
    "revision": "f9114f97fbc3dc8b36906c836667481b"
  },
  {
    "url": "assets/js/114.1bde5b85.js",
    "revision": "e12f7e8dfc35cb749d86b73c3e96fa78"
  },
  {
    "url": "assets/js/115.f6630d6a.js",
    "revision": "7ad943da4e5a97af1916e3bb84e3a480"
  },
  {
    "url": "assets/js/116.9150fccd.js",
    "revision": "fedcebcd7900f7f06f5f31e0b0510552"
  },
  {
    "url": "assets/js/117.ad51f654.js",
    "revision": "6bfac399fc84581349c857e07690c158"
  },
  {
    "url": "assets/js/118.c183206d.js",
    "revision": "74651d99b1dc6e8581fda1065f35fd60"
  },
  {
    "url": "assets/js/12.6d4d6a4d.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/13.46bd07b3.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/14.c655ffbc.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/15.f3c0b53a.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/16.3964a598.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/17.eeeddeee.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/18.8ab0e1f0.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/20.83d8f04f.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/21.f2ac8f76.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/22.487afd95.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/23.aaac1724.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.d1aa06c5.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.60497cb3.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.537bdc9e.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.a087bf61.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.03f74411.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.cbea7ff0.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.548b5112.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.a6631d9f.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
  },
  {
    "url": "assets/js/31.831b550b.js",
    "revision": "72111967edccec374cf25773de6d7f82"
  },
  {
    "url": "assets/js/32.1ab61c12.js",
    "revision": "aa6562ae9c19d3c5bed61548aeec5261"
  },
  {
    "url": "assets/js/33.aae173fa.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.4dbf7aac.js",
    "revision": "a47a0be7f06b9634eb77a7f424c67eac"
  },
  {
    "url": "assets/js/35.ec60a253.js",
    "revision": "065010bfb77dadaf44b00a7edbed68bf"
  },
  {
    "url": "assets/js/36.8b8b5b23.js",
    "revision": "062fd7e7cdc9c9b16d8895b0f99dc9c5"
  },
  {
    "url": "assets/js/37.0d909f14.js",
    "revision": "5afd792a2310984c5f48d541f5e2ef1f"
  },
  {
    "url": "assets/js/38.9d8d2f93.js",
    "revision": "bbd3d790bd27bfe4d309286fdd5949b4"
  },
  {
    "url": "assets/js/39.9192be50.js",
    "revision": "6cf602ec5ac7fd1aa415e6548faf82df"
  },
  {
    "url": "assets/js/4.6330a4ac.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.2bb4453d.js",
    "revision": "90c3cf99f395792fa706fc288cb332ea"
  },
  {
    "url": "assets/js/41.56528ebb.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
  },
  {
    "url": "assets/js/42.91a71cfa.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
  },
  {
    "url": "assets/js/43.b7a1f86e.js",
    "revision": "90ac1710caebac649d4148cb7247bc9b"
  },
  {
    "url": "assets/js/44.d39ac3e4.js",
    "revision": "64ddf026fee87a4cc9916da5b3f6e913"
  },
  {
    "url": "assets/js/45.4912dda4.js",
    "revision": "add3eaa32c6aa871886f2f88ceedec1b"
  },
  {
    "url": "assets/js/46.987f215a.js",
    "revision": "0d4c6d4ba6bfd0ebd6dc4c5bb3fac756"
  },
  {
    "url": "assets/js/47.27f2e0c8.js",
    "revision": "8cc77b93720a0381ac0c42620fa756ac"
  },
  {
    "url": "assets/js/48.45814c6e.js",
    "revision": "72f2356d644e6f34e632d5d6a59bc065"
  },
  {
    "url": "assets/js/49.0e48290c.js",
    "revision": "04ba172e9f7462252f553b11c3a664b9"
  },
  {
    "url": "assets/js/5.9cc3b324.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.d5591e25.js",
    "revision": "8116e18c7dbd093ce9c4de97fa643f14"
  },
  {
    "url": "assets/js/51.ae430d19.js",
    "revision": "b712e74766a9ded677c0889351adc5aa"
  },
  {
    "url": "assets/js/52.c1517772.js",
    "revision": "b155add68c05336ad267fe0f1f14b64d"
  },
  {
    "url": "assets/js/53.7350d586.js",
    "revision": "5d6460b5f604bd0fb2c7cd6f1a596521"
  },
  {
    "url": "assets/js/54.73dd66d5.js",
    "revision": "638949d0a0435b5b09f0db32315dc231"
  },
  {
    "url": "assets/js/55.78f1799b.js",
    "revision": "ace5ef285c269da1109472ed4d8f3521"
  },
  {
    "url": "assets/js/56.6921e1ff.js",
    "revision": "a451d0852e3e0da62c7945b954bdd20d"
  },
  {
    "url": "assets/js/57.cd6b9b4d.js",
    "revision": "5970ca67425e8a7cba7aba68e88e1f82"
  },
  {
    "url": "assets/js/58.d59e179d.js",
    "revision": "2e81a9c76c0de92790c92e2115dc8a33"
  },
  {
    "url": "assets/js/59.476df463.js",
    "revision": "0803a29e7cc332aefce29596ea6b3666"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.e3fdcea8.js",
    "revision": "348eaf5264d6abc8a05377325848f2dd"
  },
  {
    "url": "assets/js/61.9a19f360.js",
    "revision": "52f829e8ef40ef43ce6c86367806a4df"
  },
  {
    "url": "assets/js/62.c24453c9.js",
    "revision": "a7d8dfcc8715595ee9e7ea16e6b82530"
  },
  {
    "url": "assets/js/63.3e9e3128.js",
    "revision": "c5f0e60d89f3bbd068b7543c548d92dc"
  },
  {
    "url": "assets/js/64.1646a4d5.js",
    "revision": "34db93d1667a771a9492eda0c3d13537"
  },
  {
    "url": "assets/js/65.17ab00ac.js",
    "revision": "8b0bf68b2c7f40429893261153e0e25a"
  },
  {
    "url": "assets/js/66.9cf60789.js",
    "revision": "7cd6f1faeac6713a96ebeb17e7544f3f"
  },
  {
    "url": "assets/js/67.34caafee.js",
    "revision": "83df2f09faf3565436adbfd7c9bfce36"
  },
  {
    "url": "assets/js/68.a2749ca4.js",
    "revision": "0cbd3977e1a8ad9a90f882da61502cc5"
  },
  {
    "url": "assets/js/69.4c6bf92c.js",
    "revision": "e90885ef82765b7d2ae6907b7687ffa0"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.f0894c92.js",
    "revision": "49422b722e8fa65068b8348dd7e8ba2a"
  },
  {
    "url": "assets/js/71.4e19c38b.js",
    "revision": "cd3014bd1de2e0a09d7531a588a8dd8a"
  },
  {
    "url": "assets/js/72.da6e10f9.js",
    "revision": "f0e019ceb944cc3bf8ef1b08f290629f"
  },
  {
    "url": "assets/js/73.dd4b2ae9.js",
    "revision": "c11e4312405b27a251faa87997c71bcd"
  },
  {
    "url": "assets/js/74.2b96686f.js",
    "revision": "8c3d4a32c5478e7fd77472d1003304a5"
  },
  {
    "url": "assets/js/75.dce83f24.js",
    "revision": "f5b6e20f766b509cf61b5d8bd7f94d76"
  },
  {
    "url": "assets/js/76.7d796ac1.js",
    "revision": "33881d40ad43d8f6f8363066bc7e32d0"
  },
  {
    "url": "assets/js/77.0b4f3688.js",
    "revision": "16655bd4dcdacfd3177a2aea608c139d"
  },
  {
    "url": "assets/js/78.26f7a031.js",
    "revision": "6c684dfd8d1971abcdfa7e87e51d383d"
  },
  {
    "url": "assets/js/79.c16240ea.js",
    "revision": "641ef332b7787ee742f46d6c54050a1a"
  },
  {
    "url": "assets/js/8.ce438359.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.e7168bae.js",
    "revision": "78ed7d80e41ab86501c52c6bffad1fe9"
  },
  {
    "url": "assets/js/81.4c3b4a12.js",
    "revision": "f16551e25b473b3fc074ae5583f7c52b"
  },
  {
    "url": "assets/js/82.b0748196.js",
    "revision": "fbbd6c8db9e02d4b8552f2dc5bc705c5"
  },
  {
    "url": "assets/js/83.17ed38b9.js",
    "revision": "fa3f7ae9e1cb8f017e0f3d46beefab07"
  },
  {
    "url": "assets/js/84.604e7b83.js",
    "revision": "fafba4d5bc8679113544826ad61196d8"
  },
  {
    "url": "assets/js/85.a2c68869.js",
    "revision": "a4b56c7d7b17011f2e1c1b09b9f451a7"
  },
  {
    "url": "assets/js/86.968fb563.js",
    "revision": "43dce6836560cb423567f453013232d2"
  },
  {
    "url": "assets/js/87.82296e9a.js",
    "revision": "66eb7625b0cfa8ee254753fa99c4241c"
  },
  {
    "url": "assets/js/88.8d1cbb11.js",
    "revision": "caa442ce923459981440088ec1764b6b"
  },
  {
    "url": "assets/js/89.46230c50.js",
    "revision": "3a7f860412b9b4ccbefdbcdfc0371b6e"
  },
  {
    "url": "assets/js/9.4cef9909.js",
    "revision": "dcca90512bd3a56042ef5e62ed2ea0a3"
  },
  {
    "url": "assets/js/90.0cde20d7.js",
    "revision": "c92410269843dcb756a9fd5b9d468e6e"
  },
  {
    "url": "assets/js/91.831f50b0.js",
    "revision": "3f5136bb1c7e7d9110dc72d9b0c9c27f"
  },
  {
    "url": "assets/js/92.87bab91b.js",
    "revision": "e9fbb67aaed6d7e53dbc6e795c30d214"
  },
  {
    "url": "assets/js/93.9348cda5.js",
    "revision": "1cf959046e51df9e41d0f9007c9b80a9"
  },
  {
    "url": "assets/js/94.c4090b4e.js",
    "revision": "705209017667cd84aa0a5570b38e3526"
  },
  {
    "url": "assets/js/95.04d8d5bf.js",
    "revision": "675e3f582eb69c5e2a2a4cddcf7c8e6c"
  },
  {
    "url": "assets/js/96.6a938fd2.js",
    "revision": "d75878a8248c5fa887a2177b1ea0c3a6"
  },
  {
    "url": "assets/js/97.9925266c.js",
    "revision": "9ffd12a1cb51d3682692c1cce4dbc3aa"
  },
  {
    "url": "assets/js/98.e290016b.js",
    "revision": "6f0a6971c13844cb7e73938ddb88884f"
  },
  {
    "url": "assets/js/99.7ad43508.js",
    "revision": "a3f8de193a52e7f10a9eddad045904cc"
  },
  {
    "url": "assets/js/app.b7c7ee17.js",
    "revision": "b1ec8f4f7ce28aaebd82a2f091506889"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "deee41b8f2533c73b2c988ddde539fd2"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d59d1d4b755c5447933df7804f76f651"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5057fd24d981624feee3ca59e36f1fcd"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "18b7a8df3500d5ed0e3c042e3f04d962"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "11034e3c3a69c3f77d51bf42b2ad623b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "98c501eb9451bf8986f22a8c00fc7603"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "81fb503c337621df763c240d44b53571"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "44dc54d343b1c246c92dcf5ddc3979d7"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "2db204cbdf4030004230031f0c51e19e"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "926e504240f1bb0b2aa520668e564bc0"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3b5028028366890c9179245021ae3117"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "fe401f5a043d8111a667ea1b1a7a705a"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "5ed861aa635e9161e93d5f036826e4f8"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "02dd59619633f69bfa21a7624bd7034c"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "410cc88528e2482449f0588f899f95cd"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "bd2677b2be152c5aa79823b543f82fce"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "82cae639f67ee102934e3532180890aa"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "34ab6d36bda4ee75a08afec4fdc7b956"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "af2c02a17f091e7dfc716784755a0916"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "dc1adbd8ee7fa77cd281da38b5c344d0"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "fc1fac9e61640a5ade765a8fb8a4feba"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "812d2f1dd9fb90552bf87656603151e9"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "a190c97ccfdc1ff4e9aa97b44d04c19a"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "59f2b3adbdb459edede37e14650a22d7"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "c744b0729cd5316287148c710e60cc5f"
  },
  {
    "url": "basis/index/index.html",
    "revision": "440f5cfde2539bd4aec61b7b73320a11"
  },
  {
    "url": "basis/os/index.html",
    "revision": "fae465d50c8d9111bb92aeeaba2445e6"
  },
  {
    "url": "book/index.html",
    "revision": "781e0e2dba63f863d4d7787c42e040d3"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8e8669b1b5d33ae8b5d7e7cdc8851d8d"
  },
  {
    "url": "categories/index.html",
    "revision": "26ec8e0c4dd48096ea6fa17ebdabdd01"
  },
  {
    "url": "figma/index.html",
    "revision": "1e44b47b0442be19cab688ebaae29737"
  },
  {
    "url": "flutter/index.html",
    "revision": "1feaaf0b02860cae7cbf2445a5b471f3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "75da8cae627cb8da92695a0f2a50d24b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "037112198e33b844830fb18ae1fec173"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "51d330a20307bafeac1850ebaa7ebcb0"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d4418e653f22587fbeffe47f75c29079"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c104d36fd824f9aedc47b3f4244c4d3a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "f0765a144369f70b6838ea000110cab6"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b3c5df86df02049a9a5632571a7bd194"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0b0a24b2ad5a2209ba1c030161a4a22a"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "b04869ab51767c1203ba448c62eb0c01"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a864a384af5dd7bd182ef7bb8f233db1"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6fff85adabe89355b78cfe2236eb35c5"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5e284bb77fc2f6cfd928f7c11b2d7cbd"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7ceb2b13e00ea551272b5fadf9f09c46"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "67f0abecf4843bc119a7cb2b3eb132f8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "4552df74e59244c68315a145324166ca"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "76fff65f474a2699e330fd8e7fcaf706"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "fa01775722bb0367deddb1616ca94ac8"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "4affbd3d9a61d806c236344ee0b4f17d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "124d5edebc1e183e862b5b02556b5697"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ece90a2535df239003fbf7920eaf0cac"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "6091c90b866f1738aaa98617a715cb2a"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "1749c46015c6cc4abfeb365df6fbf98b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "41e60654e42eba5b24d2580c328535f1"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "dced3892005ef8feddd423d1e68d0f48"
  },
  {
    "url": "haskell/index.html",
    "revision": "6597132fce9208916aeebebc68c7a8dd"
  },
  {
    "url": "index.html",
    "revision": "ac85ce58b1087eef8f9bd6e880c9b2c7"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "8a7fd958a2da9a90c74daf32a38315f5"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "dc7d717dfe5682f1decdc5ae2a2f4084"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "196f4eb7fa08bcce4c9aedb7344bfc8d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "700f7dc006cabc793fcf69336122b3b4"
  },
  {
    "url": "python/index.html",
    "revision": "623d290141bcae2b33d47025dbe6f357"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "26ad35ff2d71defa571cb883722318bd"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0d31ea5462a8dfd0b59cdabcd1e348e8"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "262910580e7e90d7890c2424814e36fa"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "50afcaee3310cb3f34328c147e35acea"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2b305f7ff3a7c0a4b91dfcdd26ec07fe"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "41b5093972f78f946387ff1d05896ae5"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "18cc4a4d3c916c3de0cc029fe3f6de69"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8837d6ccf2eac8009be48dc841e993dc"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "962ccb75bf70dd3ab6c41fe68b31e303"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ef1366fbe7a9fe820dcfab30a90aa902"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "805bd1d8436d8be3708d0e0743056f16"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "798473014fcadfb2f7a0f214f72ec751"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "505623988435d99d28fe356079af6e6a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "88ff5871256c529cdf41516d7444f23e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "04498e4ff9020bc2aea8d55ef4e38509"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2d0fe6be38a30bd49a2561f97233fdf9"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5f7c544c0c8585817bf7a554f919b41e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e952114f3e779e16e5efee3ea1a133b2"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "bd287ef7e62cc79eeec409015659650d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "eb7b0521edc5b8e677e54ad29d8e7bde"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "385a988c7d0f5a273022bf3c7b6863ba"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ad33f38a7b4fdc1063d17152bf316f25"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "6b77c239b014a13f6485c7a7b58e3de6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f25aabd74f9f8988c48176b5358d74ba"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "34ff9f19b831a4593e4029b29deeedef"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "7fdaeeb89cc2bfc27320438c55ba5498"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "4be4b5dd0cdd3dfc51e85142fcd4b863"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "50952c4a2987b3c2a69fad92c305ac7d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "15b793af6d7e03533dbc68bc3d598ac2"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "646cc470bc23846d465045c8cae54ee5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "7df567cc46c8b21dca9f8fd0a5de07ab"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "e6cc856a6ac3df5916bb7f0722824046"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "fc6a4b7f0cc02387d9be00dc9515b079"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2985871fa8fc8142183965f8b47fab04"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d06f39aab65bd1e1eb605aaa264b0897"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c48730042531a844f9612b9daca2fa21"
  },
  {
    "url": "tag/index.html",
    "revision": "e42e3ee57e336d804207f9e050982ed8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b3e2adfe09285f7ca403ae74409fd1ff"
  },
  {
    "url": "tag/json/index.html",
    "revision": "236e60daf6502766c48181ff171f7ab2"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "71a1142b51b4359ac0bf72ada19bb398"
  },
  {
    "url": "tag/python/index.html",
    "revision": "85df73137614dbfb1326930adc16f8d7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5857d67486f2801c3b0c6893ef1b21e8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "32a3a8456150f4699e24f486b96fe6bf"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "fa570380ea097ed3a19b31d61d9faf23"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e40fa313f5092954039fb7daa0707578"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "89db4dd1a1b8f05404909be75f763bb7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "202573e8b96af222e8797ce8f769176c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0c0ddb712a7aed25bbf8957363bbc958"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "0eecb018a873093cef07555828278813"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "1245207a82ba5ce84e57299777344431"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "13ed3c5ef168c2c905d99a2341dec29f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "39717d09d21b435031f9adc559dd74a8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3b64a7d3dcfa7f8038a88dc327d83f41"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2a5ad2345fe62a2aea6ecf2c791696f0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "23ee56abb99b88c8237d92e7e70a1c72"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a9244678ca7b56fe3b02f5a20e7e9862"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "67d1198b0ef50bb575335d223b3a00b5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ffcd3d6cbd892e2e7f9c74bfd0b83435"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd89d92e2110dfeab44a912f3640bf04"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a8660348ab30173061b7aa8e8c3e7c30"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "54cbfcdc702fab98918bb60d545437c9"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "301b1f9b7e09abc2891a9416392d0698"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0bd6113fc1b5ef7ebac1724c5ec3dbae"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0d5d1e60f03f1f7e6610c419506eed21"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a61a2b51969738d6baff7ce51eaa98da"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1b41164d56ae79b8ffe78d4faf6a4dd5"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "662c317c5d3b7e58b822346e6376f967"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "eacfef207e395e7fac889dba98422202"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0ea052e2a6c96a925a45e565358eb75f"
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
