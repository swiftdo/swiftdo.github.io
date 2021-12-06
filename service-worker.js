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
    "revision": "7d14e1ca960f3956d0ec1199683dda44"
  },
  {
    "url": "about/app/index.html",
    "revision": "ad80fe8dbd2031f46c88f602951d3259"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ca633dea4ae731d0002c22521ae867fc"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ae660ce6527d38bb1151f23d6d15c0db"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "4dd9e80a01a7992159095ac1275ec3a0"
  },
  {
    "url": "about/index/index.html",
    "revision": "4ed5f750115152036899f7cd3ba9b084"
  },
  {
    "url": "ai/index.html",
    "revision": "3d30812c1e38131d923d28a7339ea51a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f6ad5cfb008caffdd61dca5cccb1c8a4"
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
    "url": "assets/js/107.f2c90c9b.js",
    "revision": "16275d1b786ef4ba17196104f42bdb76"
  },
  {
    "url": "assets/js/108.d6eef65c.js",
    "revision": "5ce56f574fd4a0eefdbb9716e1012f53"
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
    "url": "assets/js/15.0727d298.js",
    "revision": "d4bda84b8171fb3466624824e999a764"
  },
  {
    "url": "assets/js/16.b68badca.js",
    "revision": "cf3baa1a349a2b9452aadced95552c63"
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
    "url": "assets/js/37.eb40e17f.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.463a3ce7.js",
    "revision": "978586b909be63129e5327d1fd722d89"
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
    "url": "assets/js/45.94e88710.js",
    "revision": "1dcfcdd7d88e5b21334e22016e58b098"
  },
  {
    "url": "assets/js/46.32fa9e20.js",
    "revision": "a49a032755bbfa65ad242b67c275e8d2"
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
    "url": "assets/js/58.801b5af3.js",
    "revision": "f3c9b19f8fb45a52fa5540eca0266410"
  },
  {
    "url": "assets/js/59.fa793623.js",
    "revision": "1e808f5971fe6d4022d21789fa86fadc"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.42a8a4e5.js",
    "revision": "038f84323bfc5510e48077c335731f99"
  },
  {
    "url": "assets/js/61.c719b077.js",
    "revision": "d59194e18a14541114de80b6588e9064"
  },
  {
    "url": "assets/js/62.b6371027.js",
    "revision": "efba6b799055ca9f698353cf41df286b"
  },
  {
    "url": "assets/js/63.3e9e3128.js",
    "revision": "c5f0e60d89f3bbd068b7543c548d92dc"
  },
  {
    "url": "assets/js/64.8c0f25f4.js",
    "revision": "184a7c15690833079a7d830ed7b08fed"
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
    "url": "assets/js/70.ec6226ec.js",
    "revision": "62c52bdc3ac881706b5a5f78807b6612"
  },
  {
    "url": "assets/js/71.ca47cb9a.js",
    "revision": "d3e77467002bd1ed29efeac4e878ce6f"
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
    "url": "assets/js/78.f1011beb.js",
    "revision": "b6f8da6cceb31a74f5be8950a6e46dfd"
  },
  {
    "url": "assets/js/79.300def1b.js",
    "revision": "30bdea215f1f1a0f0b7af06be3fdf67a"
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
    "url": "assets/js/app.4faffc74.js",
    "revision": "9e8a991f92d0183ecb1e0e3482ccef39"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "cd35038739d63fb3ab51910619c7bba3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a35fb2df7fc692eefcb36643b9dab545"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5217ecca29a24881dc47e3e607be11e9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3c94018d71d98e1f4780c4c774cb13da"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ec2df608cb6b41a387d799365674696e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e341b15691cecd79c19185a4414212da"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "dea7a763f63c0f044051a599530ceb02"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2a5b9b54a234f7e943012b74f6ac43d6"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3de35b15a7a25055d88ac08d236f3816"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "42b39150bd2c48280fbd4a8ce1e9bf9a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e5148b4fa4ded93f0e39cc18269efa84"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "7213b559a1a1e9c37f20c085e2bb813d"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "e8b9e72b84f1e0f6ddcc3a1fe13be452"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "e7ec30efa84326d47bca007a89232d30"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "3eed94f7d1322abc7aa5b81fde08e811"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "d64031c38a45d628ed689e67b7324d86"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "3262bd3f6e7bf00771ea0011fbc60ba1"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "215a84a4a1ed6a35f4369a027740e729"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "83e73ce41e252ed6c48bf34fca1b602c"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "809611a0c92127dada2246a9a8b89afe"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "64ebafa9a572f488e5b884d082976fe8"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "7a0dbe0f24e9ceff40de043fde2f2851"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "93c62528ef59a058912f5cf78f6e7c12"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "a9b9ba22442328d3bbded564f5859c60"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "fbe29fcdb297b47dc350fc1df46be23c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "fb31fe7cfd08e2ade75cb7bc88a78a58"
  },
  {
    "url": "basis/os/index.html",
    "revision": "281896891fefa9840b4b60bb2e475e27"
  },
  {
    "url": "book/index.html",
    "revision": "396bd3da0e9161232201765c39fbae06"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "06256ce428da27e38390d81e6886fc32"
  },
  {
    "url": "categories/index.html",
    "revision": "bd93aa6d94d26ac8c60bf15b350baeac"
  },
  {
    "url": "figma/index.html",
    "revision": "89e87f1706463efb48668ab937f13e2a"
  },
  {
    "url": "flutter/index.html",
    "revision": "e02b1d4f1b0aeff5d0fd067591704143"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "71b6914fcf3d3d09081dd6f7d3240fad"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ef438affef9141dd6057567147e37998"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c334783ac567ffd39a6492abe28ae649"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "78028ec4d88e5f48523281c2f4b4d02e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "35bc4e43318f77ef957be358d4db4325"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "1313e91a6942950a837c0217c8396910"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "978a78d6379617a47783f4ad889da3d3"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ed7370cad82e426ebc9b5970fedadef7"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d554384f81ee739d9c4557ac4bf2cb6a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "70ed3eaab385800725c72d70cedf41ab"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7ac65a4f455d6758bcc6f7d1b4bd6fe2"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "44432231dfbf1e1670dbf25eacd7a158"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7248cac7a64d2e9fae7513be1ab2c974"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "10719d266f289e46fbb8a2c8cf70aee8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f06eac2150a69ab6a65f5b866cdf6c95"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "a9532bf6467fddbf3d790543c1d4c30e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "33066c77deda977b9daadc5432757b2d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7b4d630d5b8c9884bd9b8a1c9fce4e4c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "1db730e4cca70c444c07b6062134d9fe"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "74d6615b5fa99d5183698da940c242a0"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "2b369266e36182b495289d1cb01c89e2"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "b98b787ed4f5cc847230f9ebb333454d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5db1ecb2df3781543c4e4ee2f46734b7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3239ae5e64a3da79cbad9d7da94ea1bd"
  },
  {
    "url": "haskell/index.html",
    "revision": "a3500530021774733f3b219c82f210b5"
  },
  {
    "url": "index.html",
    "revision": "3b6d4be4ffaeb6cbdc0426943c540f7a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "059d5f73a326e3dacc146f7c713700ef"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "aed108994d347b43ce9cad43b8480a9f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f3a010666640bae9dc73969dbeb9a9ec"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5faf8cbd00d74756fc4e96d76846d158"
  },
  {
    "url": "python/index.html",
    "revision": "8fb7c007db46ef7b926d15b9d9aa4e25"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "bb0a0d0633ee199823c0388d2533eab9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "b92b3eb20a0aac368c21e40be570909c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "8313f86b0845df1cc6614e159baf5b14"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ef5c45c55a3845668edc5dc2ebaff3be"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "33a60cd33d69aa56351e0e15102b6392"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c8dbceea6410ab9aa52f56c20095d23f"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a2c6c2422a4ff91dfccbde6123a757ee"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8c81b5f923a5bee7179227f3ae910bad"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "bd83eead64b2bd10b760dffefbb06c15"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a58defb49b6b42283e42740f0fe8c274"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "34fca19720b136c4e21671ae7c642f65"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "03f09a173737dbe320ea1e482aa14595"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "21f314b67aece2ecf4ce2744c85f8527"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "370b7c7270531b163c58b097bd6fabdb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e97d84908f934aa560f69ffc06ca1d5a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "dddcb146557574ea680e7c357f522f46"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d9592cacdd3de4d39b70effba9d5aa07"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e3619e80be04f957a556e60e6f565beb"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2ae77a093ec1e6cccd4d6b23e0b68bcd"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e9368762264f50e652dc87a9481c5559"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "81c4a400f821d5718350c95e7ea41018"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "e9514cc2b866d41fc71c0a19dc9f500f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e8bf7777da1c964894eb2802e44d58f5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "73f45a0137a56a56988d25b9c1cbd921"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4a9e632a8f8aaa463204cfce25b71936"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "471dc6c4dfc90554d815012b2846d29c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "34ad3677eeb7add41021612897351320"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "2a798466d0ce270666591baffc1bf704"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f1611c23d15a7cc0a4a14ee800abfad2"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "1a23ffff6703ff2319233ebe01b3dd1b"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "52621e1ec85659a5f9fcda09bbb2c116"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "18632d1b26c8891e58072154f5d87e4c"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9f543cec7818020c21666b6933f9342a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "cefd3a778d38d5663087f2865b85814b"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "00af1c1c24e1c0a69f769359047c7797"
  },
  {
    "url": "tag/html/index.html",
    "revision": "37f61723c669ecff31bb4243f569963b"
  },
  {
    "url": "tag/index.html",
    "revision": "b070a8547840877f21e22355f838b0be"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0c3d00962bc667137506587ce6ef67e9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "95d8660825fb057b7e7fa8f20b7aca94"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "29983f71423cb6f85aeb60f335a18480"
  },
  {
    "url": "tag/python/index.html",
    "revision": "62f6111373d0723e4303d6a743f67369"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d3ae9b14e6e353ee91420c7ae2287c21"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "29f61dd19c23c308663733ac87de2eca"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c54572c0f0faa5e32dedd8e2a038ff9a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "542c095fc7d3dfb8769837d0d52e0c9d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "6900702dd68cd248cb3de4afead38113"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "690de5174fa901d8a2a13be6cd75a21f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7f4fdb3ec5493187394099cb2cd63871"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "97ec3099f1d7f6b3632b08d354bb800e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a128c9e0f277b56d44fd88de44e212db"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3fae4276b42b2e4f1f1bd9c3bea82378"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a97dfd65345b69fd31bea1dce8dde7e3"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2bf7b07715db1a5bc93b5aa4c5ac1f93"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "c513c2b0a0c8b255651e388afeef46eb"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d0defc17246eb9e139af8da661fcc48a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "cfc64f14719ce15415580c92aba91d98"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3ee82fe2501ec6cee87f67c9dc124e19"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d18ced12326f6cdba2d830f22b146956"
  },
  {
    "url": "timeline/index.html",
    "revision": "4cd5fab5aeedef508e70eba24ce3233a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6ad0c071828dbc8f46157b0b75ef9681"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9b7a5c0c7596466beca8bdd68c814c4a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "49b1f87fb9e2599374fc0aae7950ef80"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8701a51cac3c2f08fa0b1e256dae87e8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1aa01e280163e7b3136a08ea17be6fea"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "18d966f6092103e9de47afb99f1da406"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "6bce047b9839f672a1112b89adf7ca1e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8fa86d607e425109ed55e363df5d9ce5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "279355c494c3b61808b9784c53384101"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d9cc475cd8f18baf90af9a6ca7eb4fa5"
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
