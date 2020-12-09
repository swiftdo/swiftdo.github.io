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
    "revision": "5d5e023b7f891201344238e448ff264c"
  },
  {
    "url": "about/app/index.html",
    "revision": "cbcbe087f91fed159344bc21ea214d71"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f33b2f2990b2b33f4a78fd801f6c5ad9"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e769b17e82faf74fc52a5f3fbee4329f"
  },
  {
    "url": "about/index/index.html",
    "revision": "efab7de05d98fb4b64b52bbf2e43947f"
  },
  {
    "url": "assets/css/0.styles.7a61191e.css",
    "revision": "6cd718cab216eeb148e3657091d28f83"
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
    "url": "assets/js/11.26bb3e0d.js",
    "revision": "c4ca3e063b638095141e1da0739f087c"
  },
  {
    "url": "assets/js/12.85cf56ff.js",
    "revision": "50dd455421a33e481896ca971d509d9c"
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
    "url": "assets/js/15.3cc4012c.js",
    "revision": "58104b95bd6449117bb5e872e0cb9220"
  },
  {
    "url": "assets/js/16.f8bf2c7b.js",
    "revision": "609dbf8c75747f59de3640cd378126ef"
  },
  {
    "url": "assets/js/17.9ad99f4d.js",
    "revision": "53103a5cd6feeebde25d6ee0f28f9d96"
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
    "url": "assets/js/33.ac018a44.js",
    "revision": "bdc80fb2ea3ec5e0a6128dfc8ebcc666"
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
    "url": "assets/js/41.13c01d73.js",
    "revision": "47e5c0d18c2f572bc80cdfcd0beb9ab2"
  },
  {
    "url": "assets/js/42.7d98992b.js",
    "revision": "7e6fbf6be28aef46a9a35ccc1a3fdbab"
  },
  {
    "url": "assets/js/43.d1686fee.js",
    "revision": "fe69e3097cd03b40c326e381eac0f9c4"
  },
  {
    "url": "assets/js/44.577f48a8.js",
    "revision": "9fadb59d34d10416ec738b62d7ab93c8"
  },
  {
    "url": "assets/js/45.fbe50fbb.js",
    "revision": "98bfdf1ff3d18afeccab982e770106c3"
  },
  {
    "url": "assets/js/46.2a6b2669.js",
    "revision": "188e145fad3bb8c6fa0df77c342fc8e6"
  },
  {
    "url": "assets/js/47.12839983.js",
    "revision": "36bff595ea5bdf92861c8fb40841c563"
  },
  {
    "url": "assets/js/48.86c0ed61.js",
    "revision": "758bf07f0a41e780082ae01676e6a7d1"
  },
  {
    "url": "assets/js/49.fa866396.js",
    "revision": "27b93e233f52286a71ff5bfba044bb8f"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.59bc185c.js",
    "revision": "4a0fcb53f50fdaf2b8938cbbaaed7293"
  },
  {
    "url": "assets/js/51.650611d0.js",
    "revision": "85e7061797ccec9e588fd477fd5e789f"
  },
  {
    "url": "assets/js/52.1ad128cf.js",
    "revision": "4573fef22ef67a4585ef559ddac3ac8e"
  },
  {
    "url": "assets/js/53.05d5c10b.js",
    "revision": "e3d65167360d2004ce32bd9b8e82ad34"
  },
  {
    "url": "assets/js/54.6e8e31a3.js",
    "revision": "d0f362b31c2e6d1deffead47307f55e5"
  },
  {
    "url": "assets/js/55.1b595b09.js",
    "revision": "da3980921a3efbc1a612ae30242a96d5"
  },
  {
    "url": "assets/js/56.abab2692.js",
    "revision": "e593377ddec79cc7691ea7696a822952"
  },
  {
    "url": "assets/js/57.f839d286.js",
    "revision": "731c39f9ab0ad72307fb6dc46c8ff84b"
  },
  {
    "url": "assets/js/58.e3445369.js",
    "revision": "01ac0afc0ecda8b21afe5d69e6adc03f"
  },
  {
    "url": "assets/js/59.a0399962.js",
    "revision": "0d67026f94f9d3de6ec7136e327bd156"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.4f918542.js",
    "revision": "fb9fbdd9523a298530e8a8d5d2debc77"
  },
  {
    "url": "assets/js/61.ec188339.js",
    "revision": "4131a812c752ed6ef7e6d89bc5bb83cc"
  },
  {
    "url": "assets/js/62.9d42bdcc.js",
    "revision": "e9f728c31c84094654d0bff39be2e504"
  },
  {
    "url": "assets/js/63.98e36c2a.js",
    "revision": "3d0e9f0986d98f55942942a2e1519b7e"
  },
  {
    "url": "assets/js/64.ffee4e07.js",
    "revision": "3ce899a9d05b546e641bb0416510a17a"
  },
  {
    "url": "assets/js/65.b28a247c.js",
    "revision": "e28a3791340dbd824e3708acdfbdfed8"
  },
  {
    "url": "assets/js/66.60ecc842.js",
    "revision": "bdbfc08aa3a2848a8a3eb63b840fa0ae"
  },
  {
    "url": "assets/js/67.7dbb073a.js",
    "revision": "bc4f5fb5369cd64e8c0d6e8955cc044e"
  },
  {
    "url": "assets/js/68.155c0747.js",
    "revision": "0ab139c6b5065481befd6ec95c8b27e7"
  },
  {
    "url": "assets/js/69.6d52d045.js",
    "revision": "865e53168b13d434e419aca21325ad6c"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.9ad27eb5.js",
    "revision": "407d570552e280b2cb38e9348b7704c7"
  },
  {
    "url": "assets/js/71.468bca35.js",
    "revision": "eb9c69df7fc6c48af657b52ca35b8175"
  },
  {
    "url": "assets/js/72.ea483632.js",
    "revision": "a90389da4ce8b421344c91b40ca37477"
  },
  {
    "url": "assets/js/73.1646518e.js",
    "revision": "c8d8968e4cdc3a0a6803b417eb5498f4"
  },
  {
    "url": "assets/js/74.39f675f4.js",
    "revision": "090859369e6e0d954d630f509031ee12"
  },
  {
    "url": "assets/js/75.a9e33e9c.js",
    "revision": "bc2324016d3801b1b1b3f7763a1e9778"
  },
  {
    "url": "assets/js/76.4e042bd0.js",
    "revision": "d137500a315106a70680fe64192ad96b"
  },
  {
    "url": "assets/js/77.50909fce.js",
    "revision": "355e8486441bfc0ee33c28c9ef3ca107"
  },
  {
    "url": "assets/js/78.2410a2e8.js",
    "revision": "a170cc8bdee3af9a7825d6faab90ad28"
  },
  {
    "url": "assets/js/79.a58b40da.js",
    "revision": "94275a2d1737d636f688c5cbc6077f64"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/80.83f3cc2a.js",
    "revision": "adde63b187b9d1e6850f1d8d8445f0bd"
  },
  {
    "url": "assets/js/81.ec5d86d7.js",
    "revision": "f958b4d53ec1a36baebe248d5713b54d"
  },
  {
    "url": "assets/js/82.9d9541b8.js",
    "revision": "29c9ec85e7bdf09ceb93133a6f749067"
  },
  {
    "url": "assets/js/83.e84b3062.js",
    "revision": "644989ec32bfae0305122ea48ea6a8a1"
  },
  {
    "url": "assets/js/84.61a6b810.js",
    "revision": "dbdfc25a9333c192dee2a557991b1720"
  },
  {
    "url": "assets/js/9.d6bb19ce.js",
    "revision": "f14be5f8abf378b72b97bdecfdbdc3d4"
  },
  {
    "url": "assets/js/app.14be2313.js",
    "revision": "12e0059e52e38afa0fe627e8f6c7609f"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "5b1539fca1642bfcdb27e81be91904c9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "382cd920cf5e2d094923636e0cdc8f63"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "94aee68c2db782ed604859a9cc9e0964"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "38fb9411b65e096d274127c28074df3e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "0add02426081a22db49014d1e59b852a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9f1abe5ecb10a5bd4d35ac91bdce6f3d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "125f92e11a057f4cdeb31f8dd12e9035"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f2f5d480ee1cb56aa0c60ed1a5b348e0"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4c312070249824320a1005d369a17f0f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f5b61b8f4e47a03879d7b52818fe467d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b7f7530ae8928255c3a775406e215da9"
  },
  {
    "url": "basis/design/index.html",
    "revision": "c014678cb5f8fc126eb50759e1346c19"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "24de77b716bd7ae1bc9f95a8e7de14aa"
  },
  {
    "url": "basis/index/index.html",
    "revision": "78131faf61e196ed310e6cc9a0fb281e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7f78436e80b4f776a62af649bf082035"
  },
  {
    "url": "book/index.html",
    "revision": "7cb3fdc54fbcd1783ddbef4fdeff67c5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e46555745fdff08955e60f7d4048afcc"
  },
  {
    "url": "categories/index.html",
    "revision": "9563fc62f3c97e171ad0bbd735e7899e"
  },
  {
    "url": "figma/index.html",
    "revision": "03019131ce0b98ca6e023ddd0dd52ac7"
  },
  {
    "url": "flutter/index.html",
    "revision": "ba6f2b67b43f787365ac0f15fea94f8e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9ee828c6fe9243148e6e46cb87490bd7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "57488935e75fa7a5c2ad06f53a276bdc"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c7bc5420818d84f3c1f0f2a064696e34"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b9e66c0ecb3146b444caa56b33f99321"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2e673b95a06d31e07493d9a4fda40654"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "10a224aa059833807d841c299bc73871"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e9aa0a3df99addc5671a97b4ced7ec20"
  },
  {
    "url": "index.html",
    "revision": "78074201c3912d70d03bef319d39410d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d5e009e1630d93d8ec18d2c406c2cf1e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7fba851632107ab07cc7b6cce7bb84c2"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a1166a077438b5140a9437974df14de6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "001e4c57e9ee6d1251983ec272cbae83"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c65c5d9d32b86024e72bdd3bbcd35e9e"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "947539d7cfe3d1344e40dd9bb2733d05"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "f69244fad03be7b6c9da362570bba1c6"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "be946adc86ed60b54e7da85f8474541e"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "a3d4a20b93d636204cfcc9765f1260db"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "180c5c6e3d0bc39f440e07a3854d54ed"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "d8ea868f3f85f5fbad4018df2dedd59c"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5d155bb37acd955aaaa3eff568ac36c3"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c6e33890c3824f94eabeac90023c21d7"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "6ddb1ca704b8061c2442fcc9b2995edb"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "3f5121dd000b436c48521377d7d6166f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d204c6dd75868ddc6e15f2bf42dd945a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "af9467064fdb6db07c92bb820407edd3"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "baf1ee706fbcc77417b6a2bb5267869a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "bd73fa15a29c76dedd29ae1236897263"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9db5338881b0e3832f02370d09957603"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "fe53e49dc38cd7cc83826eb855de1b54"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f337f5c9dd44da03e2cf1d93e88d59c6"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0d8a003372f7ba0ffca8cd33349181c4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "4e327f74107805f8e69c4599eb5df588"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a84db838c8d4ee81a511ec508b687162"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c2acbf1c1307c87338aa791a3c96a1dc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "26afef0ef94b9b06f056f152f7ab9d84"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "eccc68ab1328ece10cefeca7c03025f6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "056797515163a4e40529b594b039bdb6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1603bc75dc5f0ac5afbcac8046a71515"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "0171fe94528398b942bf2446b2db20d0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f926f99390e9bbcfa8b8fba5035c633e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e01b38bca06762c7a7784e221e15315f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bf04c483195d1787027dec513a1cbfec"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3fffeaeffa45b4def0d471d0f794fdfa"
  },
  {
    "url": "tag/index.html",
    "revision": "8d312bde669931fef9db0710a61ef3de"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "1c756e5b3cb10148c9d7e54307b02703"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2d779ce686e9d47087184b2fe91d76e2"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b7c6c9704e85f1d7ae05c0a9bfabe862"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d8cefa2314a018db3dca8272c233defb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6275554985e8dcbace1676a766c656d3"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e31ece5e185eea05bc20987ef81e1b7b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "da01b2368c52ddd1b20ca928731ab715"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "28167f42d4e0c99038017bf560561d07"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a3c6013f0fe0c17f45821f5b75eb108c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d0e9dc9e8a0911aee61842c159e73a7c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "bdf5fd8704cf04766932f11043d36e80"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "caad68802016d32ecf0503fa541bd27b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "cdd5aff1dee2127ec16a19f9695561f9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5fa07dfe27114964a61cab5a5574cd41"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "0554bc03e13b18618cd816bd7eaf8aef"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2979480efffea3a76db70cac8b10987c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c5c6481ecebcec87f192a06bcce8f7bd"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "2fd1e99b7a796ab906542d38548d16b0"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "b9f693a3f3a0315467d08636b3454b69"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7c8c93b41cbef4d1c40ff85867d5b778"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d18aeeaf8e5eb1015ef6633753371a2e"
  },
  {
    "url": "timeline/index.html",
    "revision": "cdcd95604f4c6b2d96f430bffbab3700"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a6d28c70a52419296b58899871ba5049"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3bea707c9eef09662cd0e1468b723e62"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f2802ef59a7328ae9e9adcbdbf447567"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a1d9cdf93dff7590e8df9874c1892d98"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "87d75235802e50a5e216ebf423a25926"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "479cecc9db01fc9b3f9fa4420ddf465c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "97023b8b0d499af4173bb99401ef1ad7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "671cf5f06575ab4ad3c5ff734010cfe0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8d0d3e8278c1b7a1453f17daf4fa8f69"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "b9622e66a64c99a3861b02d470e452a0"
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
