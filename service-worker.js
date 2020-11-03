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
    "revision": "21426f8e8957edef7de2c543898dca02"
  },
  {
    "url": "about/app/index.html",
    "revision": "922528d53db7c34bbf886db59645a48c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "fc8845deaf3e9c82bf39ba34dcc65001"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "adacf1069d87f61675bf037959ad020f"
  },
  {
    "url": "about/index/index.html",
    "revision": "4fba716e8dca3adae0ce50668be37afc"
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
    "url": "assets/js/26.bca32032.js",
    "revision": "29bc23e0a5df2f7d9c8a43cd8b686a81"
  },
  {
    "url": "assets/js/27.77b02d73.js",
    "revision": "f8f05dfd478203abf7d43fafed77914e"
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
    "url": "assets/js/41.13c01d73.js",
    "revision": "47e5c0d18c2f572bc80cdfcd0beb9ab2"
  },
  {
    "url": "assets/js/42.c653f4eb.js",
    "revision": "6a3b93bdc2a1782180e2c5c52a06b938"
  },
  {
    "url": "assets/js/43.7e19e7f0.js",
    "revision": "e1000bb46616c31306bdcf6c7aa77aa5"
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
    "url": "assets/js/55.2398e9f4.js",
    "revision": "c97b8370da14acc860b0c2a9934461a3"
  },
  {
    "url": "assets/js/56.af80061b.js",
    "revision": "4a3508fd618b1d1bdaf2cdf4068a20df"
  },
  {
    "url": "assets/js/57.f839d286.js",
    "revision": "731c39f9ab0ad72307fb6dc46c8ff84b"
  },
  {
    "url": "assets/js/58.dc4b8151.js",
    "revision": "f342ee9f465bce6f3ef19950e9c28c8e"
  },
  {
    "url": "assets/js/59.e2db6aab.js",
    "revision": "2556c16ba843615d6bf2ae4a1b4fd214"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.d25d9b4c.js",
    "revision": "e39a44bb56bb5bb8b9f3240c7c59ead1"
  },
  {
    "url": "assets/js/61.0f2001b1.js",
    "revision": "a0d0dc86012e53e5478221a9b0087e91"
  },
  {
    "url": "assets/js/62.94109919.js",
    "revision": "adbefeff5680d10beb4a15b180807d2c"
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
    "url": "assets/js/66.6d49bb8e.js",
    "revision": "8e4198b0e70722b05dd2dd53474676d2"
  },
  {
    "url": "assets/js/67.d6641f44.js",
    "revision": "d0c0b9351901dd896aad9e0a20ee5d08"
  },
  {
    "url": "assets/js/68.ef0bfc24.js",
    "revision": "ac66a32269ad8083243013680c0ecbf6"
  },
  {
    "url": "assets/js/69.7f1cb51a.js",
    "revision": "7084a85e62c48b1375bcaf2601b87a3e"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.8232909c.js",
    "revision": "00629cf209fb77180757cbbad05cbaef"
  },
  {
    "url": "assets/js/71.75366d9a.js",
    "revision": "9507db4046272f308fa22037f61317ff"
  },
  {
    "url": "assets/js/72.cf432c8e.js",
    "revision": "3a05c048fb7622b59227e8b04023af42"
  },
  {
    "url": "assets/js/73.73b711bb.js",
    "revision": "07a8fa97fa24ee7bbef686d530ef68b7"
  },
  {
    "url": "assets/js/74.8485f9cf.js",
    "revision": "91521c1b5f352942d41bb149b393f8eb"
  },
  {
    "url": "assets/js/75.482e4d62.js",
    "revision": "0629e1a9a34d4b23e7965be95359a6e7"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/9.72c48980.js",
    "revision": "f198c93e68e3b47812c96d0ac41b3065"
  },
  {
    "url": "assets/js/app.33e9c67b.js",
    "revision": "9bc0d836bf65da80d82028c69423b0aa"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a3ddfa599989bb4d60d1cb1821c697b6"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "933967c021922863ff1984a78091199f"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "bc32f10de1be529ed80eb15ce1f4de33"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1d83b5cb34e3903a1e207f804c0f3fa1"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "64c29e47e92281e79a137e7473e61525"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c09d32733a1893d22272373b157941f0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9f3ed0401c9023995bc28330ef3cf383"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "513fc526b648a38df49c2979e2ffe776"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "bf7a91465a86b10e6a2a824f16e82838"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a5bf506fd1562727ad27c3db097161cf"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "2e28464968fdc3796e6dd2f69ccd653e"
  },
  {
    "url": "basis/design/index.html",
    "revision": "bfbd838566b9632eaa3f761d7e678de8"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "5feaaf49c8d6aaf8d16408e8b88a70ec"
  },
  {
    "url": "basis/index/index.html",
    "revision": "bb934666e521b48f82be8a0aa09f2f92"
  },
  {
    "url": "basis/os/index.html",
    "revision": "97a3904ddfb4ba88eeb3a49ac44e4c81"
  },
  {
    "url": "book/index.html",
    "revision": "8959017de1c5eea1b79f5edb7fbb6dcb"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "15e99d98f381e627c343c01474561e50"
  },
  {
    "url": "categories/index.html",
    "revision": "8e5654f49320d5d8cbae381d2464b67a"
  },
  {
    "url": "figma/index.html",
    "revision": "5f8f7ef16c17cdc9f4674de51df5bb78"
  },
  {
    "url": "flutter/index.html",
    "revision": "d04378b2cc1e0606ff8dc7c6d675628a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8fb5a7b81cbc3141aed7278c2cd751b7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "356ea34b83090c957f26368e4fd2580c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "7b3f4f8423d3e8cf0ffc544b9c28c6b3"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "58b684460721f33144709e17c1d8f565"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8a6eb70f41d2ab7a16854d17380dd627"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5a0b1938f42c0e968c9779432db71914"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8224579438ee6ad0d92957306586ce39"
  },
  {
    "url": "index.html",
    "revision": "9e3ac8206f69fcd5ada523d2f82fd7fa"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "339c7ee0b0a3d95291f8759474988d14"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b3253d4cf4894e08f2218c8eb6bffa66"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "52017c5ecb75a6ac470a074268cf55f8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5cb0dd4d3fb625e58c2b9cda810fb30d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "1df9c2dfaf9b518cfe7870827ceadd6d"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "a6a59dcb6e9253689d2e0e1e468e4b3d"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "dead90ca00c08fc98dd5a2bf98f033f3"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "b42c47dc14d19f8797d2480eee879fe1"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "3133b793cf2ed048a376d871360899ca"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "91d112cc2de1d93fcd020dfebd0a17f7"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "55ae414307081fb263962bb13416e81b"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d613ad015af2668d9e09676df7003d17"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7d5e1efbd337b65b04a807112ab732fa"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "70eb81b30fd47ed92eb377bf1893ed81"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "d9cdea16227e8c94621ee32203975fe3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "f9bc51ecdaa268eafb225a9f4f82e5b8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3a17cbf78e94be972f80eeb150d67c67"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a73d2281baae99d34bd22f382e3cc7d6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "0bb92ec7614da288d305013272702fb7"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f2548e9e1e1161ae0d9491f9558400d6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "551622608559f7f681854cf3ddc5e99a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2cb0d130bd77d7e0fede1d92cc746067"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "1bbae76194304d8552b73061b4929d32"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "64d3e47d03cb639910fe008efb82f44e"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "8a2481a2b46096dccf90dda24eed1199"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ba82d38c6c576fecc5903b9933000ff8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5a0fc7506a68f4f6e350a58b02aa13a2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fbcbd15f22b80e45766ff4e13c44e42f"
  },
  {
    "url": "tag/index.html",
    "revision": "b96dd4851e9037e700c82cfe058e3553"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "90199f980baf1e480bcee0aeb9712264"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cc441621e0622a72c542458fba201add"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c893e9c210cca01236afc7bbb13066a8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "235f52067b0b9809377859026467c504"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e1637c18654b704e986c7cc6bfeeccd2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ab94c3df1b047b6fc5575be5e8517d6f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "37e2ad6e2c1debf694569baf2f041cfc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3aeb8bb66a0b8b18cdb906454406fe67"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "05b2e720ec1bda795377527796cb0437"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "49d6bc8659e47c3ff754727f62566107"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "54ddb9c94f2323408f36356e00dc9948"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b8f8ab9ebb1a3f3bb53ba3a4c3fa0a72"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8ccf366049c6710dd8e98f361b8f6d95"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "690e73949a5ec9a2929b846b5c4c7be1"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1674f3dfae43a231dc01b1b40b4de645"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "13ce63e7476c2a5de47d783275b47098"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "90e9c3060824114a01119da0cd692d10"
  },
  {
    "url": "timeline/index.html",
    "revision": "afff0342dc593c4176ba3417b8b8a0b3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "689614ce38ba5c31dc390a72eee68560"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "35d8eb7118b03b48ed543993b67a67c5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1a0a10ff71501f3f51772a34c499f389"
  },
  {
    "url": "tools/html/index.html",
    "revision": "528672689ec60f0437cae455a97f6a0a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ad76f5fe7a74f1ad3ec8bdca7f2118b8"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1f7c91c7e1dd27f4ffdb96062b7c07ae"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1fa78e0204b8f38969657b6d44ca5de0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4a3ceee3fff240a20881b387ff039d03"
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
