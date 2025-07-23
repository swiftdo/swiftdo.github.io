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
    "revision": "595af76cd9868067409e65ccf969e31e"
  },
  {
    "url": "about/app/index.html",
    "revision": "0351760b35076ec6aa8462f7de20f758"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8c347448504eab00a5efaf0247716618"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "db666033b1f19485ebc36565ed71a1eb"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "b4883719a77ab46c9e3983cb6240588b"
  },
  {
    "url": "about/index/index.html",
    "revision": "aa9d4e977845895656b9f003667421a8"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "b2f3e4093a14f8f316a76b5024a88198"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "caa07cf80abee70304734a968f5321f7"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "5700e8effa93aba719ec6e7fe577b0c1"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "9eb9c617674440847086e5711f3dbf79"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "a87b8826fc9cb549c119f48613672898"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "6b04c3f38d331096bbba946abf6bfe99"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "84303ac1b022f16f8fdda87a7fca7fea"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "f5d5ec571933a65b002562a9a5c9e839"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "17023611c77327c545bd3e342ff896fd"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "401a78b5cbd3c880d96fedf32921b126"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "ccd24a19a37af0310398c96bdfd9bff1"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "c59cf0bd3c975a0f37d783c332be2966"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "92dbf1fafe15716b95dc6e13c3f24d33"
  },
  {
    "url": "ai/tools/index.html",
    "revision": "2573c82d9f68fe77a978a1421feea191"
  },
  {
    "url": "ai/tools/qwen-code.html",
    "revision": "eca8357e5a249c956031d11a5b5475d7"
  },
  {
    "url": "algorithms/index.html",
    "revision": "3700b4f27c0b7cd42b08ea371af5c899"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "0e1805d6b645439a0029fdfeaec73b9d"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "d25be7284941968a2e6bbe3b92a97c47"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "c298e8713d774d0b29dc8e587d25435a"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "2aaa15a9e031bc67ab2cad80eebc2a51"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "911ee4a27db8423fa6e87fa3fa7d3e7a"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "37cf0d486bd887cc95fee867107ec36c"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "326810304f71cf1b8d0f1a784aebcfc8"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "0cd260b9cbda3a44042e50f90869f9f5"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "8f64642cf8163a883704f33922ee70db"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "d2d97e5f42068c6df51ba2603b72597c"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.23270ba7.js",
    "revision": "0fa32e6f296c9e0624eaa26f21e6c25b"
  },
  {
    "url": "assets/js/101.f90863bb.js",
    "revision": "242fc632d3cb2bb39eb1e290edb208da"
  },
  {
    "url": "assets/js/102.2667a166.js",
    "revision": "d2e449f83252fccda1a9bffe2dbac54b"
  },
  {
    "url": "assets/js/103.cb09c6f7.js",
    "revision": "8b7588280fa3719a4dbb7de8f1357219"
  },
  {
    "url": "assets/js/104.0c85873a.js",
    "revision": "6974bc1ac13f1c7f3005e04cadaee3c1"
  },
  {
    "url": "assets/js/105.5b26aff4.js",
    "revision": "4bdde597b5dc5c382474e99e710c0c8d"
  },
  {
    "url": "assets/js/106.abf9e059.js",
    "revision": "bab3b91c7721f3fc837fa6f0f54966de"
  },
  {
    "url": "assets/js/107.2bf0094b.js",
    "revision": "084b2b9f844af998578514a82b8b4038"
  },
  {
    "url": "assets/js/108.bb2a904e.js",
    "revision": "545f6449a4f9d39cf3927f18496cb854"
  },
  {
    "url": "assets/js/109.ee7bcf15.js",
    "revision": "676c1165b575cb2002bbfabf68942c12"
  },
  {
    "url": "assets/js/110.f0dac6aa.js",
    "revision": "5571933803ba049a1578da8b995df5ec"
  },
  {
    "url": "assets/js/111.3adc19ea.js",
    "revision": "9d6732e768f945195390c67c545ff477"
  },
  {
    "url": "assets/js/112.78782451.js",
    "revision": "b0ff81ff62830c80f9f010f828812f97"
  },
  {
    "url": "assets/js/113.c9d1cddc.js",
    "revision": "1f73e86c88969e1ef1f9f15a7b0e1c24"
  },
  {
    "url": "assets/js/114.6d793e90.js",
    "revision": "bda7fde532d79576aa0695fa3fadd8b7"
  },
  {
    "url": "assets/js/115.cd7e1a2e.js",
    "revision": "28397488363f84e4df34c96f1d8568e0"
  },
  {
    "url": "assets/js/116.966bf5dc.js",
    "revision": "5e8511ff10370d8d483d63a8d2cecd46"
  },
  {
    "url": "assets/js/117.517bd2ec.js",
    "revision": "d237056a7011a784aed93f2aedbe3d7c"
  },
  {
    "url": "assets/js/118.3b6ba223.js",
    "revision": "9ff5eb5e3cb4cbb2c817093f07d0eefd"
  },
  {
    "url": "assets/js/119.6b8e2445.js",
    "revision": "2856a7c17ff3694160712f332bbdd7bc"
  },
  {
    "url": "assets/js/120.633227d8.js",
    "revision": "2db8c85b9b29735c68f1bd8aab570484"
  },
  {
    "url": "assets/js/121.2a9b42ff.js",
    "revision": "e8d7265fe5c67595084d0a84d77eb4cd"
  },
  {
    "url": "assets/js/122.d632b341.js",
    "revision": "896f83201e3dc97818c2ea4dd5f6a2c0"
  },
  {
    "url": "assets/js/123.3b08c62d.js",
    "revision": "785a64f900b444fccb6ebba4e6c1a076"
  },
  {
    "url": "assets/js/124.1e928619.js",
    "revision": "d5ae7d2c191acc89fed141ca67683325"
  },
  {
    "url": "assets/js/125.2f5d5269.js",
    "revision": "249e7a9358930d892c64fa249be6018f"
  },
  {
    "url": "assets/js/126.bd7342bd.js",
    "revision": "16b1258523fc2ee507f85cfbe7fe345c"
  },
  {
    "url": "assets/js/127.334c7d95.js",
    "revision": "9e0ae2b32a81a4a8d6ec727e74cabff7"
  },
  {
    "url": "assets/js/128.c9c73c7d.js",
    "revision": "cf1545ebddaa591b8aec96896bf2d5c4"
  },
  {
    "url": "assets/js/129.e7bbdc55.js",
    "revision": "6cb514fff3b8bd4a3a82d0dfb61115bd"
  },
  {
    "url": "assets/js/130.c9852ac1.js",
    "revision": "78df925c9a3e5256bddaf87b37adaa7c"
  },
  {
    "url": "assets/js/131.ed7b59cd.js",
    "revision": "5f848fc985615b9c2253681c134324f2"
  },
  {
    "url": "assets/js/132.e2a19516.js",
    "revision": "b1cb445bbffbf89d8104f376461172c7"
  },
  {
    "url": "assets/js/133.828aa499.js",
    "revision": "4d266fa3d6e53ba9693106c1ace38e9d"
  },
  {
    "url": "assets/js/134.0e47ce6e.js",
    "revision": "058752d866c24fca23c56ae02a72f4d6"
  },
  {
    "url": "assets/js/135.b46ff135.js",
    "revision": "6da1a8dfb82b3a1818135e2d26bdcf7c"
  },
  {
    "url": "assets/js/136.67d0f06c.js",
    "revision": "c2ef0824b1c70100c7fec7ebc3d8fc26"
  },
  {
    "url": "assets/js/137.a1b1e1f9.js",
    "revision": "8439fa663f98a7e9cd2a2c2f745ad125"
  },
  {
    "url": "assets/js/138.0020d6d9.js",
    "revision": "85d99aaeb20dd5bb11ac45e34725648a"
  },
  {
    "url": "assets/js/139.002ddb0b.js",
    "revision": "ef955f56f3ad8286ad2f9f087eea81a9"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.9bdcf424.js",
    "revision": "acf45af2ac399147138540762bd35da9"
  },
  {
    "url": "assets/js/141.213b0203.js",
    "revision": "42c0adc83d71cdde9c01564dc62f4ab3"
  },
  {
    "url": "assets/js/142.6af36f4c.js",
    "revision": "a82563164a2f79d86a6e6d36297d7b5c"
  },
  {
    "url": "assets/js/143.6362b832.js",
    "revision": "9b880479b10016546534bc6aeb1d256c"
  },
  {
    "url": "assets/js/144.4ab2acf5.js",
    "revision": "1d7949b5feb8c3e448ab3b1530163a5f"
  },
  {
    "url": "assets/js/145.1f66402d.js",
    "revision": "b41b5fb449eef837902f829eac70bab5"
  },
  {
    "url": "assets/js/146.8e9803cb.js",
    "revision": "e574647b3a8f29c6d3fb504b7f33cefb"
  },
  {
    "url": "assets/js/147.7564d763.js",
    "revision": "583f759af4f9fbede7a07306ffff2276"
  },
  {
    "url": "assets/js/148.39716a80.js",
    "revision": "5a8c60a1c317b9a43da582ef11988e49"
  },
  {
    "url": "assets/js/149.d5f544fd.js",
    "revision": "beafabd9bbbc329cac1ac83d74d7dae6"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.e391b1a2.js",
    "revision": "370023bd70df9839f1a36b6355e93e6a"
  },
  {
    "url": "assets/js/151.1d01071a.js",
    "revision": "c8d786372cbabdbb086fd2e44c1a61d0"
  },
  {
    "url": "assets/js/152.a2d3c20c.js",
    "revision": "c3d6da8952b20954693235bdf563b4c8"
  },
  {
    "url": "assets/js/153.8143f5ec.js",
    "revision": "9fb12d21ffe05ab3a5e2b674eb3fdbc8"
  },
  {
    "url": "assets/js/154.37e1eead.js",
    "revision": "1f38cb500cc0266f9b5c4357e50fb45c"
  },
  {
    "url": "assets/js/155.9c920c75.js",
    "revision": "d22f1aa570e0dfb84825c92c1f6483c9"
  },
  {
    "url": "assets/js/156.10f8145b.js",
    "revision": "405bc9217cb24fd5cd6365ee94de32c6"
  },
  {
    "url": "assets/js/157.c67e5734.js",
    "revision": "d2840e4c06b1f8f41e677d5b30aa50d9"
  },
  {
    "url": "assets/js/158.b43df5b2.js",
    "revision": "c44ec6e2357c66fd7e229bc79fd81741"
  },
  {
    "url": "assets/js/159.6179f0c2.js",
    "revision": "b61bad92f54aa839e78be5f51a1d6456"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.b1029b35.js",
    "revision": "1ea3c5321f08649bd702b7c57a76ef41"
  },
  {
    "url": "assets/js/161.c19b64f7.js",
    "revision": "770f5883c739193049e30cffeb3cbd7f"
  },
  {
    "url": "assets/js/162.f121bbd4.js",
    "revision": "c13ebd1c450bc349c0983aa85a663625"
  },
  {
    "url": "assets/js/163.bb88d390.js",
    "revision": "cf9bb191d24aa0b1825f5e9651b687c7"
  },
  {
    "url": "assets/js/164.bb40c6ac.js",
    "revision": "b8c233b583bd7852bcaf1e616bcd0fb1"
  },
  {
    "url": "assets/js/165.33c463d5.js",
    "revision": "1e6ca1a0588d9bb81cc3ff642e04b16f"
  },
  {
    "url": "assets/js/166.e559573f.js",
    "revision": "87466f8d3be0ef50d0e502048d3ff67d"
  },
  {
    "url": "assets/js/167.d70f81ca.js",
    "revision": "19fd8aca5fc1256b52b6f59728ac6271"
  },
  {
    "url": "assets/js/168.a9f5c9d4.js",
    "revision": "835b2c7c74a14c278e85f770d5a8df4a"
  },
  {
    "url": "assets/js/169.47a8e997.js",
    "revision": "c00a674f1ce213d9d9b1abc13bf15975"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.489e3d12.js",
    "revision": "2d7f1ca405657c52aa65c53c2d37b9d2"
  },
  {
    "url": "assets/js/171.2dd188bc.js",
    "revision": "af8403526cc228bf302710de73460c05"
  },
  {
    "url": "assets/js/172.9bfe7a86.js",
    "revision": "4e96bb333c8de46e083226fdae5f22b8"
  },
  {
    "url": "assets/js/173.7cfa8700.js",
    "revision": "dde60041e7f8092d05ffc6f604d034af"
  },
  {
    "url": "assets/js/174.6f660a07.js",
    "revision": "b4a254564f31a667da98e9cf2e215193"
  },
  {
    "url": "assets/js/175.96439bc7.js",
    "revision": "44098770fd05ef6f0afab0b1adc0ba63"
  },
  {
    "url": "assets/js/176.256849f3.js",
    "revision": "3e0e00619b908882fbc1ee6d98a65a14"
  },
  {
    "url": "assets/js/177.25a83045.js",
    "revision": "992b78b2c1e86df500f4bb3950396c91"
  },
  {
    "url": "assets/js/178.11d610fa.js",
    "revision": "a7c087296a7695bc456973cf5fff61a2"
  },
  {
    "url": "assets/js/179.d80c5bf5.js",
    "revision": "5310daf3d33ac257724d152fb0a2f02a"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.95102d5b.js",
    "revision": "4d7da3d4d54f2d827e884d73f70c774b"
  },
  {
    "url": "assets/js/181.27ecf11b.js",
    "revision": "cdeb420c1f31ec505c9c2d495a45ceda"
  },
  {
    "url": "assets/js/182.089470cc.js",
    "revision": "cf606b539ac01dd95d57735771980389"
  },
  {
    "url": "assets/js/183.133cb355.js",
    "revision": "8c4c56d03e3f87c984fff9542ef9e8fb"
  },
  {
    "url": "assets/js/184.eafc15dc.js",
    "revision": "1c7a6cbd76fe3dfed8cadcbdfc4ee5b3"
  },
  {
    "url": "assets/js/185.b6449ea7.js",
    "revision": "a444e6749ec56a4e4907e43e5870ac72"
  },
  {
    "url": "assets/js/186.119f4fc9.js",
    "revision": "75701962b9ece08217689932d1cd9c60"
  },
  {
    "url": "assets/js/187.cc4bffb0.js",
    "revision": "5a58bfded3c2a21331435e3761234efa"
  },
  {
    "url": "assets/js/188.d39e2649.js",
    "revision": "2f0a6763d1c7bcfa2495049e0f503118"
  },
  {
    "url": "assets/js/189.f1217665.js",
    "revision": "7fe0fa7e49d1febee382529cf65ef346"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.a4c20d93.js",
    "revision": "30e9148e2d078c2f33520a62ff7ffc28"
  },
  {
    "url": "assets/js/191.f0347a51.js",
    "revision": "bc02732191eb346b5a3182ba85f9801c"
  },
  {
    "url": "assets/js/192.7e4297d1.js",
    "revision": "46d86fef4a8c8679b4b353b50b1bddb6"
  },
  {
    "url": "assets/js/193.0f80a6d7.js",
    "revision": "718ae34215feea678951867470abac1f"
  },
  {
    "url": "assets/js/194.4bc57196.js",
    "revision": "55c45b029ddd9f08622881de61686665"
  },
  {
    "url": "assets/js/195.079d9ab4.js",
    "revision": "f7f0b6a64482a49d7fae072778b587e5"
  },
  {
    "url": "assets/js/196.6b44fec3.js",
    "revision": "b827dc3a922b4f8d9cbc6b24501b2d3a"
  },
  {
    "url": "assets/js/197.e60c7449.js",
    "revision": "64dfacfab5578417318df98a16aafba9"
  },
  {
    "url": "assets/js/198.0c3b1bf7.js",
    "revision": "40442c70c9b8c69bf35da71d36a84b00"
  },
  {
    "url": "assets/js/199.a7c46832.js",
    "revision": "f731e74bb749016c8d9c9f4475506190"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.57ecdf34.js",
    "revision": "81dbed9eaefb29d86bfff82ad95d681d"
  },
  {
    "url": "assets/js/201.7727e574.js",
    "revision": "c0f5d0adb312c791a262ac4950e1eb54"
  },
  {
    "url": "assets/js/202.2841c66c.js",
    "revision": "82d1378f45b5a7aa09c826d1c6e2218e"
  },
  {
    "url": "assets/js/203.8e7d9605.js",
    "revision": "f195ac8f9a3877a2b9cd15dd6a8630d8"
  },
  {
    "url": "assets/js/204.1c18547d.js",
    "revision": "959909282f84229070ddc1b1df40184e"
  },
  {
    "url": "assets/js/205.147e8bae.js",
    "revision": "e6d5e83e4a068d08771889ccc39d2120"
  },
  {
    "url": "assets/js/206.f3cbcb08.js",
    "revision": "481093ba537c2b20fcb86788605171d4"
  },
  {
    "url": "assets/js/207.a05d8bb2.js",
    "revision": "d85a9e3939b385b594dc21c9ed7eb981"
  },
  {
    "url": "assets/js/208.9611c4f6.js",
    "revision": "df65b154b393581c9477cfe1788f1478"
  },
  {
    "url": "assets/js/209.b44c96ad.js",
    "revision": "5fbf04e3809cb6337a0873c1fbf1148c"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.457f830d.js",
    "revision": "1251d37b4c32f0336a11b7ec115a0e37"
  },
  {
    "url": "assets/js/211.40bfb1c3.js",
    "revision": "0922db147b6c73c7bf9b2793a59d66d3"
  },
  {
    "url": "assets/js/212.8918e590.js",
    "revision": "aabb49a3a269a57e387f4200a670acfd"
  },
  {
    "url": "assets/js/213.fca461d7.js",
    "revision": "a2eeee28b36bc104fcfb2c1c3850dfb6"
  },
  {
    "url": "assets/js/214.30a910d8.js",
    "revision": "96c536bd41fa95d5f9d429d1b458f8c8"
  },
  {
    "url": "assets/js/215.05f956b4.js",
    "revision": "4ec4dc01c072f6db64ef923657120dcb"
  },
  {
    "url": "assets/js/216.9baa41d4.js",
    "revision": "1466c7585089a0c1d48517c4c9c9a1f7"
  },
  {
    "url": "assets/js/217.cb870af6.js",
    "revision": "bb91cafc45c14831bb682ce494f4375d"
  },
  {
    "url": "assets/js/218.9b32f5a8.js",
    "revision": "bd3f39713d777adfc30b9a6d35c9c87b"
  },
  {
    "url": "assets/js/219.431b6dc1.js",
    "revision": "cbaf7bc40aface72fc4ec8783776ffd4"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.f8e7e88f.js",
    "revision": "d0fd26a65a4a789983a7c24c974797c6"
  },
  {
    "url": "assets/js/221.da6749f5.js",
    "revision": "d1d0a3632d64f093a6cee51c705fe09e"
  },
  {
    "url": "assets/js/222.4c50443b.js",
    "revision": "a7b3e38a7d1537ebaea8c399a52b73f6"
  },
  {
    "url": "assets/js/223.752ba42b.js",
    "revision": "b7426d8d8271b0a10556de375dff4afb"
  },
  {
    "url": "assets/js/224.fb45716d.js",
    "revision": "8e3d6313433bca8ab8275de5ad649ce5"
  },
  {
    "url": "assets/js/225.84d61d89.js",
    "revision": "cfb8f74dcd5863bdf853cc1c155879aa"
  },
  {
    "url": "assets/js/226.90582128.js",
    "revision": "c0bbf60eca574f7fa97444400aae645c"
  },
  {
    "url": "assets/js/227.6e8cef08.js",
    "revision": "8bed71896483feb10ea322db71ff7c10"
  },
  {
    "url": "assets/js/228.76cc1277.js",
    "revision": "b004e005d37f3240ec94d0cb0fe9bbe4"
  },
  {
    "url": "assets/js/229.c3589c4e.js",
    "revision": "a9f6d22e3cee38412a97f15d36dd3720"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.becb8fca.js",
    "revision": "a004c232d7ba29c0d675da99184ba394"
  },
  {
    "url": "assets/js/231.18db76c9.js",
    "revision": "8d224663b96db3c5b40ae2e6126c9b9a"
  },
  {
    "url": "assets/js/232.4cfd581c.js",
    "revision": "bbf596fb9d93e85c5c6a9c4df8d149bc"
  },
  {
    "url": "assets/js/233.976f9aab.js",
    "revision": "29d7d48c631f5656b64b115498f0405a"
  },
  {
    "url": "assets/js/234.0aa97fc0.js",
    "revision": "31e93368dcc483f8d67409680fb536d1"
  },
  {
    "url": "assets/js/235.4671cd20.js",
    "revision": "97ba9395821d04b884dafb209faeb2aa"
  },
  {
    "url": "assets/js/236.7b0326ec.js",
    "revision": "712aac99e2ec9b915d474b025c53e0a4"
  },
  {
    "url": "assets/js/237.dce0327b.js",
    "revision": "3998c05aa8355d3d3317cb9a7217e7d5"
  },
  {
    "url": "assets/js/238.a3e80bad.js",
    "revision": "fdaaca4250cc1b72892ef2bb2f2506d8"
  },
  {
    "url": "assets/js/239.f9391e55.js",
    "revision": "d1d69177aaa5f46881a91bcca4be0484"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.035c1a9f.js",
    "revision": "d6e966ade72521a00a98cba2d9411be0"
  },
  {
    "url": "assets/js/241.4193f0ba.js",
    "revision": "4e1a52028b21a354702cc93ce1cc5880"
  },
  {
    "url": "assets/js/242.afb052bf.js",
    "revision": "22c18c2231fb48ca15419c5bd641e615"
  },
  {
    "url": "assets/js/243.c6be6cc2.js",
    "revision": "3bcd2c4e826b4c68fe2ac8298bc5a374"
  },
  {
    "url": "assets/js/244.6c1346f3.js",
    "revision": "50b888959e7205fd6000f368b7e50498"
  },
  {
    "url": "assets/js/245.2acf259b.js",
    "revision": "0317cdd40addd768548cf8e78e871970"
  },
  {
    "url": "assets/js/246.efe12e99.js",
    "revision": "1438290e9f9e81e6b41678a2cbf819e2"
  },
  {
    "url": "assets/js/247.5ad8bde1.js",
    "revision": "80989a4aec96db68b4b5b8a93d435813"
  },
  {
    "url": "assets/js/248.3a97ceb8.js",
    "revision": "4377d53cac155fad6a6a48ff9aba0c4e"
  },
  {
    "url": "assets/js/249.e6a774a6.js",
    "revision": "eb9d9d14c53e9e3788aeb8b93b073a9b"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.39fd6584.js",
    "revision": "0adaa0ee0fae068246823f6cad5211ad"
  },
  {
    "url": "assets/js/251.30f2e9d8.js",
    "revision": "7092a9e6cfb7b849c113545cff166c8d"
  },
  {
    "url": "assets/js/252.77b781b2.js",
    "revision": "0759013317ec442294edec262488d35e"
  },
  {
    "url": "assets/js/253.5d3de24f.js",
    "revision": "30bbee0ac47878153d10cb15e636fd71"
  },
  {
    "url": "assets/js/254.8fd00b55.js",
    "revision": "b4c15c5e495037bb624b89a5d308a37e"
  },
  {
    "url": "assets/js/255.71bbf219.js",
    "revision": "cf82154b7c643e2d88b3e6a8869b9634"
  },
  {
    "url": "assets/js/256.478924f5.js",
    "revision": "df823a4d41e65fb94ae3b960844665be"
  },
  {
    "url": "assets/js/257.b2316d08.js",
    "revision": "932587738fa5b413fe93e12fbda8e2fb"
  },
  {
    "url": "assets/js/258.df62e996.js",
    "revision": "4a8c346a455f8a6f3a9479a4915d36a9"
  },
  {
    "url": "assets/js/259.b34342c9.js",
    "revision": "0745e4815145dbd6d78a1ea4b7868915"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.1a8abf57.js",
    "revision": "c2358689f8a3700a01d0b6112db4af83"
  },
  {
    "url": "assets/js/261.3949fdca.js",
    "revision": "c052d432b0035b166cde2ba1cdff5d87"
  },
  {
    "url": "assets/js/262.da3cfd3b.js",
    "revision": "40ff91f2eb4fd9229519e2d1cf5e553d"
  },
  {
    "url": "assets/js/263.ac083798.js",
    "revision": "36498d7ce08e3f898467856b2c456403"
  },
  {
    "url": "assets/js/264.59a76e46.js",
    "revision": "b0574cb31c5b44d20e3fe848e5ad7f37"
  },
  {
    "url": "assets/js/265.46ac3850.js",
    "revision": "2475bd0f640233b20f8428170da56fa7"
  },
  {
    "url": "assets/js/266.b37054f7.js",
    "revision": "18ca94d5f514d2c3299caf373823fc6a"
  },
  {
    "url": "assets/js/267.4b4565f6.js",
    "revision": "31568cd8c46f61d429831940cfcbe3a5"
  },
  {
    "url": "assets/js/268.98439750.js",
    "revision": "fe1c436ba757eaf12b90e1f73cc44862"
  },
  {
    "url": "assets/js/269.59c531e7.js",
    "revision": "adeaf336fc284980f58ecc2a88aa54d1"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.8da207f2.js",
    "revision": "7f96484203644459bf45068cc33f5814"
  },
  {
    "url": "assets/js/271.3d7b4365.js",
    "revision": "e130dd4ed0408a8d469d7b4620f822d0"
  },
  {
    "url": "assets/js/272.3d1902c8.js",
    "revision": "fff388b96fc3e22f7eb5904fd15cec5e"
  },
  {
    "url": "assets/js/273.a625ce0f.js",
    "revision": "5990a6527aca6f8829000ffca3fba1bc"
  },
  {
    "url": "assets/js/274.10682aeb.js",
    "revision": "4bbf5e41aaa203f63610d030c868bc74"
  },
  {
    "url": "assets/js/275.03bdeeb8.js",
    "revision": "d259d686f857274a7286b804dbe7803b"
  },
  {
    "url": "assets/js/276.11b1aa72.js",
    "revision": "8818ee4035428c2f1f67b5f8c250689a"
  },
  {
    "url": "assets/js/277.c2caa21a.js",
    "revision": "09c12298ab42d8fc91c170407ac5fb07"
  },
  {
    "url": "assets/js/278.a62e2154.js",
    "revision": "2974c7b7969917546f47c65f4e1bc375"
  },
  {
    "url": "assets/js/279.c7bd7ab9.js",
    "revision": "c10f3986d01b5a5dae60da479aa4dc60"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.32f1989f.js",
    "revision": "574ae22af4bf5c0eef11a60f8f7d09d6"
  },
  {
    "url": "assets/js/281.df5311c9.js",
    "revision": "deb96c4c5393db7f2b45a9f6d2c8ebc4"
  },
  {
    "url": "assets/js/282.2cf02541.js",
    "revision": "05435b49562be9e78f78a0ad533bcd93"
  },
  {
    "url": "assets/js/283.856578dc.js",
    "revision": "4262be1d1fa9b914c8b3d7e299af37a4"
  },
  {
    "url": "assets/js/284.6ccbc37e.js",
    "revision": "8f402f132d43c96eef6986b0ad842bc0"
  },
  {
    "url": "assets/js/285.d7111b69.js",
    "revision": "45355e5cdac39f7d7108f81c7b84056a"
  },
  {
    "url": "assets/js/286.acf82e3b.js",
    "revision": "1bda2bb5c6e51b6f7d27bc4f84b3adb7"
  },
  {
    "url": "assets/js/287.e4dd611a.js",
    "revision": "afe6631626c4913f486034193a03c340"
  },
  {
    "url": "assets/js/288.629d213b.js",
    "revision": "67dbdb2b77cddfb8aa45cfc4d62186eb"
  },
  {
    "url": "assets/js/289.7d4d72f2.js",
    "revision": "7ca6ff89016cae12f80e2c126a66e3ce"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.4bf0b21e.js",
    "revision": "7c158fd4075c22ac2d21f76deea822be"
  },
  {
    "url": "assets/js/291.c56f5ad2.js",
    "revision": "1f987ffc5c15e3d18a8108ea94564b9d"
  },
  {
    "url": "assets/js/292.d4f394cb.js",
    "revision": "0038b1d137a7518ca15c26dcee0de632"
  },
  {
    "url": "assets/js/293.1088dba2.js",
    "revision": "73dd83af5fa28a40e0116664d3173880"
  },
  {
    "url": "assets/js/294.f9962bff.js",
    "revision": "e83e749e11953fc40ee907c7f2bc0780"
  },
  {
    "url": "assets/js/295.d7e97e3f.js",
    "revision": "f4329ae18f89f5da39373de0d8f40339"
  },
  {
    "url": "assets/js/296.959ba8dc.js",
    "revision": "5b9a87941f9b225045a01ddefd427438"
  },
  {
    "url": "assets/js/297.018a47e4.js",
    "revision": "f49c4c38c06719bfcfcc8b30d0fb7702"
  },
  {
    "url": "assets/js/298.d956c4e8.js",
    "revision": "b201ba89a019a3cdd10550ce9607794a"
  },
  {
    "url": "assets/js/299.afe153e8.js",
    "revision": "a60c2faf3bca0d33a2d4964875167980"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.5423ba34.js",
    "revision": "51aeeed04ca982a812423901014a3df1"
  },
  {
    "url": "assets/js/301.68dcb80c.js",
    "revision": "e2ea1071de76b760a882e950f2469ee9"
  },
  {
    "url": "assets/js/302.78e7b3e2.js",
    "revision": "09b676c6a48d1a608d426c0fa3e73bca"
  },
  {
    "url": "assets/js/303.1feda83c.js",
    "revision": "7df301fccac51de9e48b0b81995d5bd0"
  },
  {
    "url": "assets/js/304.f0892bd7.js",
    "revision": "d43328ae4eed4826f855d3754defb603"
  },
  {
    "url": "assets/js/305.5eec1f56.js",
    "revision": "344dc3cef697289c7e1fc4781e033711"
  },
  {
    "url": "assets/js/306.f24aab76.js",
    "revision": "799e1fb363f42d7b5b91b046f1419f2a"
  },
  {
    "url": "assets/js/307.1426f97f.js",
    "revision": "4eda3170fdbed170270c753bbf5aab3a"
  },
  {
    "url": "assets/js/308.d4ef6a9d.js",
    "revision": "d6fb721763ae503aaed840065de4369e"
  },
  {
    "url": "assets/js/309.550c20a3.js",
    "revision": "7f588e085090e2a28ef6eb0d99460202"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.057333a0.js",
    "revision": "90f060606b61dbc21a4fd6eb1e468a52"
  },
  {
    "url": "assets/js/311.a9174eb3.js",
    "revision": "6819b4c25b96fd50523e3a6c6b070620"
  },
  {
    "url": "assets/js/312.06737176.js",
    "revision": "9f5820b9d66d58dd7c6dd64888210f23"
  },
  {
    "url": "assets/js/313.ff05c989.js",
    "revision": "4de9f8b8f16246e0f9201d663853c1b5"
  },
  {
    "url": "assets/js/314.733eb19f.js",
    "revision": "b6bcaee481d58ec2be113cc4d0115fa7"
  },
  {
    "url": "assets/js/315.6206b796.js",
    "revision": "3c028a0a44aad69cde604756c6db8966"
  },
  {
    "url": "assets/js/316.5f0553cd.js",
    "revision": "05a8afea5a8b88d3bc827080f93d421e"
  },
  {
    "url": "assets/js/317.b510e827.js",
    "revision": "3340306497151af6ed858009d5aee4e2"
  },
  {
    "url": "assets/js/318.3db1d3d5.js",
    "revision": "da2fcaa42689e245dc9c2cb260709dd3"
  },
  {
    "url": "assets/js/319.d3aaa225.js",
    "revision": "1dd0041faf435b59863e66da7aa0c1ed"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.d717a749.js",
    "revision": "857af3ecfca674ee802056dd8d016170"
  },
  {
    "url": "assets/js/321.cb1504ec.js",
    "revision": "eedefb92a38f1d198d2adbc05ec8af26"
  },
  {
    "url": "assets/js/322.372d3c43.js",
    "revision": "820dcc3e99e5f3a2b6d1ab3fa12fc289"
  },
  {
    "url": "assets/js/323.0a1e5219.js",
    "revision": "8ab65317db5d6287c0651a76dc5aeee3"
  },
  {
    "url": "assets/js/324.e29ef714.js",
    "revision": "f06de7d728af89b1ff7a3098b013a7a5"
  },
  {
    "url": "assets/js/325.ff66ab68.js",
    "revision": "96ab13abcb23cd0dce4c225d685c9d08"
  },
  {
    "url": "assets/js/326.ea0088c7.js",
    "revision": "62a9d09e3de3cc891d7e15958b1ed3cd"
  },
  {
    "url": "assets/js/327.086dae6e.js",
    "revision": "592114d60862794c000e6682e328c2eb"
  },
  {
    "url": "assets/js/328.018fdb65.js",
    "revision": "e7f3e8124f65ff52fc779ca96a5ee0a9"
  },
  {
    "url": "assets/js/329.7487c4ec.js",
    "revision": "5c62377ea871daa1889a3b2ca4047432"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.8c0e4a92.js",
    "revision": "066276c9c67c6e609f392364f0df5408"
  },
  {
    "url": "assets/js/331.25c23444.js",
    "revision": "f4888671e627f4f2b59fce6eb5598ca0"
  },
  {
    "url": "assets/js/332.5c1425e3.js",
    "revision": "46ed0a27f9dc703bd32582b9dcfa0dd0"
  },
  {
    "url": "assets/js/333.6964916f.js",
    "revision": "0890e6c4069038e78be7c8e5df16c7d9"
  },
  {
    "url": "assets/js/334.9951b729.js",
    "revision": "e41876d182e94369be3c54b29c5c9f5e"
  },
  {
    "url": "assets/js/335.4e757157.js",
    "revision": "84e72536a2376d540c5859af7ac4a8c0"
  },
  {
    "url": "assets/js/336.7c0f0be2.js",
    "revision": "39d997ea638a9432c53e449be96417a7"
  },
  {
    "url": "assets/js/337.04c16314.js",
    "revision": "fe181f1698f2c107edc1134ee7423ac9"
  },
  {
    "url": "assets/js/338.ea2a5fba.js",
    "revision": "70a619da4d8554db2dd7348b8dd8a3ea"
  },
  {
    "url": "assets/js/339.ea0aaaf5.js",
    "revision": "125ecc8ab0c95dd6732860188f1044be"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.b6020570.js",
    "revision": "c136b28b6e757fddc4bac0243500616a"
  },
  {
    "url": "assets/js/341.a995bb07.js",
    "revision": "cecb4e7105c0e4f140209b4500b0b946"
  },
  {
    "url": "assets/js/342.49546f69.js",
    "revision": "5a1166cf6044dee73f3ed092bd811b71"
  },
  {
    "url": "assets/js/343.783bcd3b.js",
    "revision": "932a694dbf5fb6833bf258a6117c5cc4"
  },
  {
    "url": "assets/js/344.5afa9627.js",
    "revision": "88406346c3cbe2712051123a0e7b35cd"
  },
  {
    "url": "assets/js/345.7e335309.js",
    "revision": "623d9c734892f6a17f619b2be3ccc58a"
  },
  {
    "url": "assets/js/346.3b640881.js",
    "revision": "48de35378c6fd873483f82a97fd28362"
  },
  {
    "url": "assets/js/347.3fd15a2e.js",
    "revision": "3dc0c6e8fd21b9f9fd94e48de41d7d58"
  },
  {
    "url": "assets/js/348.1da69027.js",
    "revision": "bb20d8b0ec2cdf86f5ddb0fb8787dc7d"
  },
  {
    "url": "assets/js/349.aee09a11.js",
    "revision": "4c68bbcdf0ba49ec3336e2aeefbef178"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/350.99c86d1a.js",
    "revision": "aaa1a5b4fdc1b98357c121a8cbc68b76"
  },
  {
    "url": "assets/js/351.a2078a3d.js",
    "revision": "7a8bae79b0d234c2ea086a1b9d90ca80"
  },
  {
    "url": "assets/js/352.e8e2e566.js",
    "revision": "b495b7380b08e030e1e02fd1d15189f4"
  },
  {
    "url": "assets/js/353.177048c3.js",
    "revision": "5ee1cbd933902c7190797a1b7e26b520"
  },
  {
    "url": "assets/js/354.318cb6bc.js",
    "revision": "27eff73749a9d2ddfaf2dcaf6e42c83a"
  },
  {
    "url": "assets/js/355.a1979bab.js",
    "revision": "d74b4b6ab717f1fd043d4dd42c2cb5a2"
  },
  {
    "url": "assets/js/356.1c68c446.js",
    "revision": "f57aba7c1d76c55e33e086a1a0af0bdd"
  },
  {
    "url": "assets/js/357.1d3c3b03.js",
    "revision": "7cb103c67b76ab63179434bbb5a210c5"
  },
  {
    "url": "assets/js/358.c1e3a8ae.js",
    "revision": "af6dad38720b1b210bbc326b0c2ce861"
  },
  {
    "url": "assets/js/359.e6fb7c18.js",
    "revision": "15f2bf3fdd67851b6670a3d47e149afc"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.d4bc1237.js",
    "revision": "5a2166bfc9363b872d54f6ef3307f5e9"
  },
  {
    "url": "assets/js/361.a2d271dd.js",
    "revision": "099968e959b8261df7290a065188e65d"
  },
  {
    "url": "assets/js/362.1a157472.js",
    "revision": "f058183fc019966b2a825f00c40a0963"
  },
  {
    "url": "assets/js/363.f953970c.js",
    "revision": "0fe45f95c186e5a8f2c34e869e7af8d2"
  },
  {
    "url": "assets/js/364.467964f5.js",
    "revision": "f9bd07c1b476c3a6af77d516bc715d64"
  },
  {
    "url": "assets/js/365.3c120813.js",
    "revision": "6030f625741f864e76017126118d4de5"
  },
  {
    "url": "assets/js/366.37d5e484.js",
    "revision": "eb8abf9084853e97509c8308b572d7b5"
  },
  {
    "url": "assets/js/367.6f109ed7.js",
    "revision": "f56f79f8d060799351d9b94690891e71"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.c6a60dfe.js",
    "revision": "de6f81fb6691f86b4283058f1d9c3528"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.4600d658.js",
    "revision": "13f17db84c21c7b02109a6d1a10e9bfb"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
  },
  {
    "url": "assets/js/42.1900cc30.js",
    "revision": "a2c6044fa4791ee2006acb32f3f109e8"
  },
  {
    "url": "assets/js/43.83a99001.js",
    "revision": "3a2f887888b9ffcd0373af50f4b511eb"
  },
  {
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
  },
  {
    "url": "assets/js/45.63b58091.js",
    "revision": "496b6744dee469122ffaaecfc8dafe44"
  },
  {
    "url": "assets/js/46.9fd609e4.js",
    "revision": "a8dbe4ac2ab19e9389a259bd2b036bf0"
  },
  {
    "url": "assets/js/47.9ebc3de8.js",
    "revision": "1be38880c440de6849a5c4c7f66ce9a1"
  },
  {
    "url": "assets/js/48.756dd4e2.js",
    "revision": "dac45279e7da1e7da4c394501647105c"
  },
  {
    "url": "assets/js/49.77f44627.js",
    "revision": "03d89a677c1fa098b4f21b5f3e67d9af"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.a627ead0.js",
    "revision": "bfe430ce728167abf1d6a4948e2aea0f"
  },
  {
    "url": "assets/js/51.32c1776b.js",
    "revision": "0ddacf7d73c512014aeec0a8e7eea80d"
  },
  {
    "url": "assets/js/52.5a0d878e.js",
    "revision": "3cf16ef257f079a4b2ffed25fd407d2c"
  },
  {
    "url": "assets/js/53.82ea34b3.js",
    "revision": "9149d21c19532f8a11065ee8a7fbfb91"
  },
  {
    "url": "assets/js/54.5bb6adad.js",
    "revision": "fafb1288037925154a18344e2366a840"
  },
  {
    "url": "assets/js/55.6e30dd97.js",
    "revision": "df1d8fe7904181ae194f41ee00e91bc4"
  },
  {
    "url": "assets/js/56.dd3f1bff.js",
    "revision": "1c5d89ef345016292c5c4c87b607d6c2"
  },
  {
    "url": "assets/js/57.88995396.js",
    "revision": "42ddb636e0edb21aa45ff077fb918584"
  },
  {
    "url": "assets/js/58.b6cec79d.js",
    "revision": "5d12ac11ee75fcd1c3ca77d6db2c0c86"
  },
  {
    "url": "assets/js/59.72b0f428.js",
    "revision": "4df1a64f24ad2610beec4c66607cf0a3"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.5bfefa3f.js",
    "revision": "35bd69d0bcf5508e13f48dd07eedcd3d"
  },
  {
    "url": "assets/js/61.fe9b48a7.js",
    "revision": "4c9f9e0b14b5ed4c6041f1794f067a50"
  },
  {
    "url": "assets/js/62.7320cb89.js",
    "revision": "88e9d23790a1b0a0129b6a9af9e000b9"
  },
  {
    "url": "assets/js/63.a3bce606.js",
    "revision": "4eb04944667ec6e6c7edb77b7d8d8e73"
  },
  {
    "url": "assets/js/64.3d4f2c1f.js",
    "revision": "a9dd349986e151f9270af11343b29414"
  },
  {
    "url": "assets/js/65.9fb2fcfe.js",
    "revision": "1921d782ce294c7b0c51aaeb4cec1895"
  },
  {
    "url": "assets/js/66.3d6ce4b3.js",
    "revision": "dea09b178386de07432b3d7d9aee132d"
  },
  {
    "url": "assets/js/67.c876f443.js",
    "revision": "392836d45a90d90daa698734d8cd4102"
  },
  {
    "url": "assets/js/68.4278c12a.js",
    "revision": "70da30dea58779c6a211df03f7ecb926"
  },
  {
    "url": "assets/js/69.6621cddf.js",
    "revision": "03387afe1f2b98b298b4c3bfff46d6a8"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.42f95671.js",
    "revision": "37a9603383d1416bc48277db9a9fc6d0"
  },
  {
    "url": "assets/js/71.ad117358.js",
    "revision": "b6541bb4b8aec091badec8cb82f231e9"
  },
  {
    "url": "assets/js/72.a5a26ba3.js",
    "revision": "da2c8accdd56d97a9954d2ec19d2bbc9"
  },
  {
    "url": "assets/js/73.50c3c308.js",
    "revision": "5a91a071a929385b1b2ff4a667144be4"
  },
  {
    "url": "assets/js/74.a8b0fd46.js",
    "revision": "449b27314a5bc1a3c19c590c1582bfbc"
  },
  {
    "url": "assets/js/75.fb39b1fe.js",
    "revision": "43e016f7db3ce8b25358acdf1ff3bb65"
  },
  {
    "url": "assets/js/76.713eb62d.js",
    "revision": "7780fbabf4f9b987e33adc14c8f2b16b"
  },
  {
    "url": "assets/js/77.d103d959.js",
    "revision": "04406bd4b1f34310cc1b2e620e091cdd"
  },
  {
    "url": "assets/js/78.fa086fc2.js",
    "revision": "efa44ae0b7d65c6f563c3879ba711a4a"
  },
  {
    "url": "assets/js/79.afbd5bae.js",
    "revision": "1abf1f1b837b004a944fc5850c7e831f"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.77cf7fb1.js",
    "revision": "eb77935da3e041c361912507f462bb50"
  },
  {
    "url": "assets/js/81.7647cb90.js",
    "revision": "6cbda0e7c753bd5855363c184e761428"
  },
  {
    "url": "assets/js/82.688e2d5c.js",
    "revision": "6704d2833081944fac37cadca5bf24e5"
  },
  {
    "url": "assets/js/83.b1360e2c.js",
    "revision": "5a3d899e802d7f3e87c65f2557e3e5a0"
  },
  {
    "url": "assets/js/84.829fc192.js",
    "revision": "ef26208bd3a6b40c3faa42302dda65ff"
  },
  {
    "url": "assets/js/85.e962fae7.js",
    "revision": "602b3291314fb7eded56e4e8baef5be0"
  },
  {
    "url": "assets/js/86.f594f54f.js",
    "revision": "bc694532c5a4cae95f3571ecad435017"
  },
  {
    "url": "assets/js/87.cbbb8592.js",
    "revision": "4eaee6823ac47586361b15e51a13274a"
  },
  {
    "url": "assets/js/88.3228886d.js",
    "revision": "fd5c364fd86ca0a58f98739c4de7eb8a"
  },
  {
    "url": "assets/js/89.1df39450.js",
    "revision": "374e22b2d4efedb6c9123bf2289cb7a3"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.635d8609.js",
    "revision": "2d22d91badb5b56e824e9b9a531204a4"
  },
  {
    "url": "assets/js/91.b895b77e.js",
    "revision": "6cd1a9bd9fff6bb86d73a4cd2b604eec"
  },
  {
    "url": "assets/js/92.4c63c7ca.js",
    "revision": "a08726de013a5a2174943fb7fe298116"
  },
  {
    "url": "assets/js/93.7697b2eb.js",
    "revision": "bc1f9619687fd310be0427c4399ed795"
  },
  {
    "url": "assets/js/94.66eeac9f.js",
    "revision": "e7acde2c4665629d1d3c8a97fb96611a"
  },
  {
    "url": "assets/js/95.79677fac.js",
    "revision": "fc00c79225805fab8d132708abafb8e7"
  },
  {
    "url": "assets/js/96.3630da3f.js",
    "revision": "0fe967435d79a2e294794236492e7c58"
  },
  {
    "url": "assets/js/97.0bdc452c.js",
    "revision": "952218d3f9e80808563586331138fca7"
  },
  {
    "url": "assets/js/98.5f50eb64.js",
    "revision": "cd579d551a1f95bbef78649180639797"
  },
  {
    "url": "assets/js/99.511e1ef0.js",
    "revision": "6b8dcba0bdbd682405d9926092e62d65"
  },
  {
    "url": "assets/js/app.a80dffab.js",
    "revision": "5419400fa0ab1d71689d440fad3e3f7c"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "987f6ce48de65fc53c51915129b078dc"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e9cd55a98b15cc8518bc81d713fcafd0"
  },
  {
    "url": "books.html",
    "revision": "839c15a997c92260635935a5e256fe0c"
  },
  {
    "url": "categories/index.html",
    "revision": "1edff017bb1b7bb19365c1ffd7484db3"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "57e730681684b20d7f02f95648024d56"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "14a441065cb1ccb42bb18a557e6ded0e"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "d1795cfe9dcf9ef0afa8d3fc1375d5d2"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "9c6b341c7fcfa62b58756cfadf6cfd61"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "ecceabe609f06f410f36847fb449e236"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "cbdd9c9318d2c7055ff3dfdb0fc3208e"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "27f40aa438f21b840364eaa9b0892b88"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "3907d8ae590e678fbbefc7b4e1d7fc7a"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "da205c5e9a5c79716f41fd07884b0427"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "2e25f0aef7c87eab68dae9fc7e0cbbef"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "45629ba07beaccf9846d8d473990a481"
  },
  {
    "url": "deepseek/index.html",
    "revision": "4c5a24e3e31fbed6440afff58c9f4b48"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "38ee1c61502fb396237399010ce0d292"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "856f1cf9fc10615ceaab22554c0fa9f9"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "10ed55f6acbf5d62422698fa675174f5"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "90c8e17f55dfefd34cf2278a62b23af3"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "7a7328c7656ac29a9c8912076962d254"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "715ed8092ee0714d7f3652f467aab99b"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "a175861241c84b92b60eeaf61aa5b754"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "d582599deedb105b2bfe683a7e831cb6"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "aae7c7c4d05716571e598b327c0e9f9c"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "c71745145bc333ffd25cb89635423191"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "30399f920cf9fc7df85584940dc2de37"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "17b7e3878d437aaa1efc952297611adc"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "dc43be4225ec9ef49194a3df67c4704e"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "de471ce0ec8428ba694576ad29dfb085"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "61b0d73129fbfd1416bf7cf9db8113da"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "730d06835ed3c5093c5906415917a287"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "609a4ad76886f3b228fdeaf9e166f42f"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "5efff200a951224494b75073680eb028"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "fd62cbfd075114225d41b9232dd74115"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "62d29de8b8fc8443a607b87a5e6fadf6"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "957c96d16985e674075fddba48e1a961"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "04c1af213cfe02be20bdcddb8e226e62"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "af33c2a2e1a74b594c0b6acd3d7f01a8"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "0d035e092c57d2ba7414cf311d4dfca8"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "e8e0d8b5f6f3109d53a37c7aa8a91b5c"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "b57dd211a6df2cd004b9dad6945c7d6a"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "6f37c89ab9786d7f7a8de0bab6cbc437"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "7c59014fa797b371de0ac58056cddcd7"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "bab84bc3c9b9fe37eb39a2f3347b9ac8"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "c215010013a09968156ec13173ff999f"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "ceb201755114d9d7def986bd26917a21"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "f99b83e78237dc37461f3856b596b9d1"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "358365077a8bc3c2e7a3821cec524f1c"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "5a4d1a221b237efec7c78005c09d8f5d"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "daedd504b529a94c5f98d00ae67b8743"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "6c37d0ad07ec67cd49c7e1f967c84ec8"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "eeeb9f88473994dc73bdaa8518144d78"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "2c373c3336b6b051895cd8238b101454"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "b7f605f7d36a737dde579a94a991a2f3"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "f6272a3d2e4b2ae34aacccc75158c36e"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "4358487e730e79e8073e46087cf490c7"
  },
  {
    "url": "figma/index.html",
    "revision": "c3b0705789087ec34bfefa5fbe510a20"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "0bef8d0a6c0d3520c424a9b821542f52"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "4774b7f2d9256ebf13c57f1e3f02231e"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "9102fdf6f720258d7469b4fcf99187aa"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "45a405f5ce77316b28671a923712fcce"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "054ce7fa260e968fd5ac2d3b2c7e7943"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "7e09cbd3254fb43eec9231fa555aeb84"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "f5ed44114876858b61fe1b67eb431c28"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "dc26af20eed8a420395d2fa2b3945edb"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "5448aafc11aa1b3e23efd58e78de6e35"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "e9d974a2b628fcda88802334341e7677"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "1bd0ca32c5e8f36af9a144ddc79e1a4d"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "67bd7a339ada148cbcd0c0591f3e8721"
  },
  {
    "url": "flutter/index.html",
    "revision": "153bf1ef2f4230caa31d9fbfe6ede610"
  },
  {
    "url": "flutter/point.html",
    "revision": "4eb50851ef512129328018eb74218490"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "19f45592671bedb9fa67f364a6d1872b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5b84d03fa29e6b0af0d4be10648579e1"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "35399c890aed0bc7a023ebfb086458e2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c92a05626ba322ddfda3b309c5bba05f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "fe0447389e2f98fd881482df0518ccb4"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "16bb9c900846208d982b03461c900164"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b08e266672e128180bf77d40e0bc000a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "bdce5647a75de43d59fbcbbd78fed032"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f7abbf395696c580e9cc6a2dc0a914cc"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "6e76471f15d1633860a8196adc670ac3"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d7252512efeeac67456d2ef5c07e7a82"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8271172a3cd71b9a044b2b87c1e3c840"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "5a82d3bc5f47216664b2a320a4aff0e6"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "567343e9d123666f2b6b1d02553e5729"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "925efacda652c37445d02087fb905cfa"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "8ab20a4fdd83e2d36b9d7defa09dcd29"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "38d88b656d9ffb34474efe23d8ed6e34"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "6dd06ce7363e242abfd6dd5462830e33"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f24156d3f403718c47d3be1424957904"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "b12fea075d1d895e0391f0fe52a77b0f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f3b1b302442c055ad909c71e4fd8f9b2"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "91fcfedbad4931dc4b5347fa4ba3dcd8"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1cabdfada2b5285723566c44bba6e96d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "5c5eb29fa6911188afdfc248855b573a"
  },
  {
    "url": "haskell/index.html",
    "revision": "f18c14844696805ab6542980dd51ceb4"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "imgs/xcode_launch_env.png",
    "revision": "c7f8697ae25d7739cb1fa6b3ea10ead0"
  },
  {
    "url": "index.html",
    "revision": "b6d09927df9ea35ef2c93df3ba03c5b9"
  },
  {
    "url": "java/index.html",
    "revision": "c37b64cfbfa7ab6082163164a56f87e2"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "4f4e19fdc74bcb4b981d3fd772371feb"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "3809ad4f331b70feefe4a5b54f476880"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "8827b6c41abd961166f6c4b14577d809"
  },
  {
    "url": "ops/index.html",
    "revision": "7f70cf2bbc8cb75a3de7489b81791424"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "74931f79c2084c2c3607c5c746d605a7"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "3bc76e4533f8ab4006e6b8e74f8b23ac"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "puzzle-sec.html",
    "revision": "8629bbc4baa52aa3690af1fe6dffe3b8"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "a5941abc2f317282662fbe66534af495"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "3d84c53c2b434f40d4a5a7203607d803"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "99e574b7e25848edbfe986d610822954"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "ebad108776fd898148997eb640ac3bc1"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "566a2c6ec8ed854852717d44e1ef0ee4"
  },
  {
    "url": "python/index.html",
    "revision": "a8517c85cb50318e9d0bf6721be0e857"
  },
  {
    "url": "python/poetry.html",
    "revision": "976343ab5b60960f55758941fa0eebd1"
  },
  {
    "url": "python/pyenv.html",
    "revision": "884d780c83291f58b44f0c88adc71f72"
  },
  {
    "url": "python/python-ase.html",
    "revision": "9705040beb1070d61b97093fe7f298e8"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "0b9b6e8769dac94d96817b75c16508da"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "142ed7aa457a0909f88d5662e94f117f"
  },
  {
    "url": "python/python-file.html",
    "revision": "6dd269d9e64508584785b700e5f41f0e"
  },
  {
    "url": "python/python-function.html",
    "revision": "fbc5d0aef916963ece0c3f756b790533"
  },
  {
    "url": "python/python-generator.html",
    "revision": "257e55d4cc866a5c6b3307fd99baf257"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "700196cc4581c491e1ffe68496f14228"
  },
  {
    "url": "python/python-module.html",
    "revision": "08864fa508298965e96f39dd5431ea71"
  },
  {
    "url": "python/python-string.html",
    "revision": "04c8bc5bfd57503aa29b21701edf93d5"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4a0baba7c54372fc8503c1ce2ce66281"
  },
  {
    "url": "read/index.html",
    "revision": "60e0d369b59e7524d7c57821a4ace027"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c80edee8bfcaa0e18b6af9bcde1fa8cb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "fe69e99652d7c4843ed28ca6fd4c54cd"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "0c14ce95765603ef04331f03858b06f9"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "6fc75f8cbf76000a6deb66292efd01f4"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "880f1e24bb953559a6aa1eb2bfaa42cf"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2462af60d76dd23d5d7b591cc22aef6c"
  },
  {
    "url": "swift/better/index.html",
    "revision": "4bd4ce05fa309c9f9049ac7c083d0de9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "2d5d62176faf7542ecf76f6637388390"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "732c4f99595097e8a73cf085941c836f"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "a490ab2f3412c5f6447a85d17e8db28e"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "5dbb764e4e2fee1ea071d1154f7a1b1b"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "137f45019c14f829ccdb8ce31d114985"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "e29e9f26f51f2a0a3947459f3e8eccd1"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "dc92d2334dd60cdbf67c7632642635f4"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "de788d3879b275c9338c1589a304ab7b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d65ca83a754e0fd8411f8d177a347ebb"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4ef93b42dac0b0f5cf569b3c0d883862"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e2bacb3744a8b7526033a64387696aff"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "fbee44e00a6e801e84746c0766a00098"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "4261e7877080b82a830a797eff16731b"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "702c235765d83c6be80898172417d855"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "ecc4769177a74d9f891644b4f19e6186"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "27a89c5a9619f1ed04f31d895fb4a6b8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "de46a6d46886cf26148559d0f4d8c4cf"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "194e7217ea708a77bddfa625d6cbbf3c"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "fd365f1c46e273beee18f0e26afd3000"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "503e4d7fbdef2814d7aff3333149c920"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "b3c1bee5822e5632f8f7a941cbaaa895"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "fc5e4ded2f0353d513ec3d5f766b5577"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "20f66aa20bc82ac77cdd464d00bca88d"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "6afb65fa4358af712165171db325afcf"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "883d156740afee637cc6b364c0e3bbad"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "cac11a630f20c7a15b1cc0a47dda5a76"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "439d8a247473cac6f82cdef8b6fc5bae"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "1267d22f1654a229d65af9277a366345"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "52085f0c6bcd009f351306340c8e24b6"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "53acf4f67119d6e469d4a13691fa54dc"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "6bcd4c46c3f06988b8d2fc0ad93264cb"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "8f3b231ffe394d936321315b9f3cf6d4"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "3707636e9ad13e5f2cfa73d538b8eefc"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "4292f10a605b62935c92a346e4a63fbb"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "5006201881f5015a52327d9b3b2348e2"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "162db7e5564b524a3ced5ee5bc3437f7"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0f650922768cfb9d74e675f0abd7bf96"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4fd27e65ccfe2eb29f91c7b680df59fc"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "51eed2637b181054e4b856b67fc36823"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "745c622ef5ed41a1938573e1020cd32f"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "9757f47096a454dc08e911e19089aef3"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "2e2b7831c676259a17fb1080b055a398"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2adfe02353d7da59705728f362de1180"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "3e47870f0cc6c75ece493da76e502dee"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8b394b689051dff063f201d8fa2c17aa"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "6617ae798bb3e86ac1b783a23d85efde"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "0967b189fb14a430a9ddd23f7f604e1c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "12dd93afe1fa6e55963f42b8cda1cffa"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "143cdd8e6cfd056814b6fb09a8994bc1"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "3116172970b9a6989011a58aa64da4a5"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "939ffe427cdc3456c8ea125133cf270e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3d052f8a6ce7f08a2d1cc1deedeef14e"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "29aac408a0b2ae1ff4f38000ce70fbdb"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "7493c90e0015ea6d79b7190bda98bdc2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "04ed04d4bbcc6df0dd9be2d99b2266b2"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "ebbcb0441b1500403eb707a008995e72"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "2920ec5d2c9517f1a76a50ebb3812ef7"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b8bb06117832465817b6c6de15975a0c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "7a1aa8116cd28d80b426b851d70e4b4a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "723bb81fff901ab11102de365e5cf07d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "f14fada1db8b8ceda9c796e14d87938d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "daf1e507168dd1824f7c32749cc231a4"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "379bbfb358459088b4f33157cb391c6f"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "739255ca4c2bed31f1cbfc3f98a9fae3"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a98e9c5555e32c732e3d0f620688c918"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "ef35e445b5669661928ae2284a13c01e"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "d069cd98345e56904a820d87f3c39882"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "22e76fbc35113b88eb8865206515cc12"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "0ad8699442f39bff209f73f661b3fcdb"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "958308514ec9c30374fb3d111892d550"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "12574ea279165fdc4c65939d3e04d195"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "943347e2949b7a9cc0e7336a433f72c1"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "50d9303720f95f9abb91dab71e73bb34"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5fd6fad990470095cbeea7ca81145e87"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "8752d6efe544265eeb8c9a683db2dce2"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "144d343487f5b7d0cb8b1b4fb7123467"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "989a205a6160a34d889a27b4dade252e"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "1aab3fdcac3ed3e682fb2ceb2e3fa4e8"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8cc0bb77848198ba42e3fff02d5693e5"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "add1de4a289cedc484d3ee86dd36f6f5"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "23a693ee13fd7876ffdf67db8b00914d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "655684c8e94f14e664ecdbe2a482e004"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "6a906fef6af03a188086e124b5b61be3"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "635578d6d600fe2409164c3f3f1c4f34"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0da90b8aae7b3dfec4a1296435b8b1ba"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "15b0cbe377b3991548126f659a81c6c4"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b0a9e3ea2c93c0a1683baee400249e3a"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "2db389b305f73877b44866b8c9baa5bf"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "7bc8aa6e1bac493f954410120e984b03"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "af9cc47efc54891594e4dedbfb3c9c93"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "55d7784c6d938faa4a7af4429290a20e"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a175424237b298d72fd72f55055d6dc2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "88216124126f9032814c8949638b371a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "be819d93d515c1cadcc4f453da7b7cae"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "3b44f1f15e13a91609efa004f9d0920e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "a5b08b949c11652ddc48a7f7e0bf23e4"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c9d237aa4969b40b3d91d4bbecc40a9c"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "baf523acd78956f42bf4e0e4147a0ca4"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "cfc32b7e1a39e32567830cb6812960d6"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "e68612463e058b6e96bf16a5c12dc937"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e3840d1805e31b34514e215a143f2f3b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "0acf60b8e468bc528399ba0586180898"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "9b8f529cd9cdb8f7a430d23655460e97"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d75b8972057e923086f7eb26f49c94f4"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "b53bf426b245d7bf53d8ce3bf0bc36b2"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "31131f70c7dfd7a874109126d1fc4cdd"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "abbe4892a8e6da6dad67a6d9110b4e0e"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "0246defe4303de7eb90b275ddea08fab"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "3ccb4a1857df0af23abec74664af309e"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "cbf955438daee8e8b566c31ae47d071d"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "7a85985705c12cd656746ff5f500b962"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d1113402c8a330dcc1b74f948c9e10d0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4a6ad19c2e4f1e7908767dea4b04d9d0"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "a8e2ad82885b87ebf30e4dc18aa05d5e"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "38fbb68531246b29c50919193d69a85f"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "fbf5c4da478c22180de7c87eaad52aa6"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "fbc3042b53d5d941151211b9f3de69f6"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "0f19afefc910208d5410603d26f38787"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "3899e880f3c45b33b6c09fa23aee601d"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "2ae0f316eca8f5d94150725d67de05f8"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "d6245a439989eb262a5b0653b6e65ea3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "bb82ff8b3012f9e4379fe73730a8ef90"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7ab0e126273a7fedd80fbd6f13dabf7b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "51734f3b191e8c0124fa6beaa224b256"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2be952673166bb4c2fe6bff96b053a93"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8ad63081f2c56367b08a8f453a9b6a9f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "0d739912059a7c47e53519255cd269b1"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f9227966d709fc7dfdd4e53ae7ad6174"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "32986d690da5f75d22463d6aca8b3345"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "3b9e63211f96878a8858e2cb5c1fec8f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b41218f812869d906bac42729de37569"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "cd70f845d29b9d24c2a6379e2b5c1c29"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d6060968dd440424e510ff2eca60720b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "0458be2a4e59c407d062de999641ef66"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "38e3fe679f897e8c6085e2b5a6a42640"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "854ea46a133c4fcca0d7a94e3317cd64"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "7688398f127aafafd20e1d2af8ad0c11"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7420fb20de66686285f8602004cdb04d"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "9bed9f585ff42700573c3b2fe20f7cfc"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "83962a6225d7320f337c4c20254e0b4d"
  },
  {
    "url": "tag/cli/index.html",
    "revision": "d37e285b4952beb7db21e2c42aa0a2d7"
  },
  {
    "url": "tag/code/index.html",
    "revision": "059ba380301cbe801966b27091e2eec3"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "18ab1b4b129165ff72201b497a061938"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "82acab0e57554e8f2fc6369733501145"
  },
  {
    "url": "tag/django/index.html",
    "revision": "faae775bd3b64a02a70daf07cf7945e2"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "82307742471539166a83e01e3362ad11"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "ae66b058d918bc1d1a6d04a7dcd5e9d9"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "192097d0b555a4d5eb11aff0852332ed"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "6766c0e2f3fb42cf6101c6a4af5f5257"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a23b3b0fb61a67c78645873c6809283c"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8b29febe9b95a5ccf9cb57c406c7ddfe"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "7ed1e7c36d083eeef9703a579562f2b2"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "f97e8225807bacc0cf72e91705301bd1"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "4df2c744098b2d8a7a9b2d48cc961fe7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fb135b437fd872d88b3ef1a883432fab"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6e530b16148897fed77ef02c9591f2bf"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b9d959982abb6e83d4489212dbf402ca"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9de4e7bd06d07238d8945571872298bd"
  },
  {
    "url": "tag/index.html",
    "revision": "00b3e126f5aaf0f518fc28d510bfb704"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5e028151b8409c8ef88f92a5c0589f89"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "ed57b1f6633b6b6604214d6094ab0389"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "0d96cc8bc4f7e46c23b25a61c37d1de3"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "b536691cc7ec35ed0118a95b17709d67"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3de85e7ec9630357b710eebd59e235d8"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "40037c3b3e1add4630ad99cd32b9c17f"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7206de3f4b29e1f2237c817254dbd092"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "e211c2d35e37f5c5771c3d8f0d77f116"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0e83ba0cee81531223a5ab1b2b5ca683"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b74c5dd902f8accaa44a25e3f4de88c1"
  },
  {
    "url": "tag/java/index.html",
    "revision": "e75b75f8f179b4b2ae0c952c2182693f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c05dbd50af4fba49f58d025da6f002d0"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "39d4a8d0cea7e6971bb42418ab0e5620"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "8555ca3708d7172081b3c40e17315667"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "995b8b801d2136f55458a4846c4a625f"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "c01d699ea9e3499e785149981f723575"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "584113b769fb886d74b13584a7e7f7ae"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d44c08bf950ae4fe6e53e8eb5cb5a8fa"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f1a2c82f9e1b8a5622217680fee03db7"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "1f6b5b0f51b4900ced75d8f6927cac51"
  },
  {
    "url": "tag/python/index.html",
    "revision": "20ddf0f3f09dfa47b3f5b7781e419418"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "7b864a83b83c1f059694a1d65ffe3571"
  },
  {
    "url": "tag/qwen/index.html",
    "revision": "2c44d587f549152a0f59404b4b2856d5"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d42c1e63b8701ab6c1b6be9a42c65bdf"
  },
  {
    "url": "tag/review/index.html",
    "revision": "5533661ec04ccde65731a40079cdfa9c"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "d635f46d6dab623d406e41173cfb88f8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f037c10dbcb49e11794f131b997ec6cc"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "b46defec4987efa0f30f27db35788108"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "61e9e3bee97f1061069ea404cb1879f2"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "aa6dbe137f1d51c89be0a0493301612d"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "c1d3ceb707fc5112d08fcbacb670359a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "221d8ad9093f24b184aba1323bbe843f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bc5a1062f83618ca3f2ca2bc8f166a8f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "828a355f69d3aa3d46d64197556a414b"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "8d1146bedadba876599425d87c93ea0e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "2ff8626eaa8d65ae05a6fb77aab23bd7"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "3c74c2fdac39fb55e5250e39ff4a7b0a"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c9a10e01f1519aa1dc8ad7145ff8a2ec"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "dd34c7451c0bdd8faff1d1967dc1a3d3"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "b8a90382d5e529cb505b85edafeb87c2"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "56534de6f1765b7382d80c50fdd083cd"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "35307553b1f2e7a70e1efc5e39b21bd6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e43ba7cd498be774f4864ab237e6e650"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "034a378869872bc83c965072eee3914e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "568b4c6b4131159140c78adfc6294407"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3591315da1e2a5733c309069c6a2b40b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "373e6c4355c4ad8ffea37485ec4be2e2"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "40a2adbe6b8220b54534bcd7d1b99708"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "6822d01bf3bcd21a897492477a37931a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1c7518160f515e2aa3d11d4b8470b7ce"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "eb5f7dda8fe00d88296e57abc9e332a2"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "9c42babb88bea8fb2c8b35d46056ce73"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "5041604ceb4a0d21c5efad6f3310c95e"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "4dcda126d3dc9a396fcf4ce30f0c3edf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "72b3e263fd27b15187b0188886545149"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1988ac11ce0236015f8dc51d4d8a904e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d007315d7fdf4c389b80c460e19d258b"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "61d5ebbca11295547d0e61d220e3a72b"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "40318d91570c2fb8961a773a80986081"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b6eb6dcd7ba4f46d5a7986efd854786b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9947e09ee39c14919a1880d837381071"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7f584a87e75e5989e5ba21dd79ef584d"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "62bd4de5e6a4359bcf0b8938eeafd3bb"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "ff664e32e4c8c958296c5ca88b2e43cd"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "c8c0d05727c745edc9c0682b015e7d68"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4633be0ccf1c798015587c2ee488c1ba"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b74ff73f7cc8e33136f99adebc58491d"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ee751f932f16c44b6543ba207ac9b6d8"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "0c9ff50a7dab565fe3cd4d511964edeb"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "7ce308ee67e194e5ad185857ca4eab70"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "7f2547017e2252de4dd5fb7506df42cb"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5723fc28176c8e02e4984865eefbf938"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4153a8d4ace5a649c1d99aece5a3cf4e"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "6e81f4f58bf27a08b07f3c9531da42d2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "32a604797d7374b839bd5a92203b4162"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3576c8d736493516764bc60270649a67"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "297a0f32d3807c718e08fbcad474ff42"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "e8610059588aabb67c535bf4ca3172a3"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "1ac3d042020c96bd42556896d0d40c3f"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "a4eb2ad84bc726bb2d42d463ff8e12c5"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "55f6b08f2132115655a7283b2d980a76"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "bfbbca7d06b4a96b1e3ebe6212d49404"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "e889b70aee1ee42e55dda2f1af082ccb"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "71dee32d6ed046200ee1e43753e81191"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "647f48fc39a9e88ebc9648ec3bba3f4f"
  },
  {
    "url": "timeline/index.html",
    "revision": "92e69ad2aabb0d7d4d69bb3c8f2716f3"
  },
  {
    "url": "tools/code-review.html",
    "revision": "2be69a70f10a5caa7011ddbb8123cdd3"
  },
  {
    "url": "tools/docsify.html",
    "revision": "7adc00a38e8a67820e8a172780178faf"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "8ace2bc7dfaae6aaf42ba5fef7f779ce"
  },
  {
    "url": "tools/gemini-cli/basic-usage.html",
    "revision": "10a71210c26a72cbb34edd3a85d4d1da"
  },
  {
    "url": "tools/gemini-cli/custom-mcp-with-gemini-cli.html",
    "revision": "97d601ff2988c0f2d08c454bdfa4614b"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "67ef6e42d45d54c76fe1993435a9c35c"
  },
  {
    "url": "tools/gemini-cli/mcp-with-gemini-cli.html",
    "revision": "6df90f2032fee46823c2e74df5239239"
  },
  {
    "url": "tools/gemini-cli/pro.html",
    "revision": "d26de3644ad0d467173f0981b07496e9"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b2df445e3be50496c30bcb1512d2451b"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "e104ef65d8a29046ae6431e68659f161"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a5d3658e72f5b45b6224f31d2c802de1"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f76b20ea1ee8a6d19a57f079e04845c5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "0e40430587e7552b9504898de3afd2de"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "063bab99dbd739e76d4d31c9f7b71310"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0b5b545d59a2beb98036f7d23decdf4a"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "88da076800e46017faea46e6d1147992"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "6c19c62419e1da2e3146faa959efbb43"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "3cf68450b098537856e8124d8080f3cb"
  },
  {
    "url": "tools/note/index.html",
    "revision": "69fc2bf503c87cb48ac6d311012667c8"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "8a1553683cd3b2939c1146707aa30690"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "db74ce12e8fa716c65c9dc88df4eec65"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "15538115e1094e767d315ec1993b6136"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c1065ea231b8fb04e40203f1882965ae"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "33034072b3ec4867b7b6652de54f0c8b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "43784c51c97e98b544466bc8a3fa7416"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7771104ca218f929be320cb7c412e7f4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8a20f43d860fda2ef5292f003f286554"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "317363dcda61e4152b960e90f55471ff"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "adc4643d1b4b30e51e81eb62280dcf1b"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "d418c535d231d5d51c0f91d0838ac0ad"
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
