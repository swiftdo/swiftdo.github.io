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
    "revision": "a7c751c784f3bf63fea2237037bddb5c"
  },
  {
    "url": "about/app/index.html",
    "revision": "3f176ebd6910efc351c7646e71dc3694"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5cf4720efc706fee4dd32d6030aabe4e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ca4e7dfa36e1b9256e86c494269619ff"
  },
  {
    "url": "about/index/index.html",
    "revision": "d2d656a501875281fca2ad6e61b997ee"
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
    "url": "assets/js/23.8de7ba62.js",
    "revision": "54d39b19e24b8d0b00e5a0f70ddf92d0"
  },
  {
    "url": "assets/js/24.6ffac7e9.js",
    "revision": "742c5fa2dd17b9cb34d4801ce208bc1d"
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
    "url": "assets/js/39.a8763697.js",
    "revision": "120ccf21d29aa8971c196ab13f8729f2"
  },
  {
    "url": "assets/js/4.bb802eb1.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.b31b5c03.js",
    "revision": "0b54efaef0ac47fd3c31c44a24db0544"
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
    "url": "assets/js/53.3c9b43eb.js",
    "revision": "051f7741c3908594860e7c7ac4c7221d"
  },
  {
    "url": "assets/js/54.622a3a97.js",
    "revision": "bf949f5b222543a0b0553b99273c5d5a"
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
    "url": "assets/js/58.627360f2.js",
    "revision": "470d92cf4c4c3e0cd4f62393be8ef3de"
  },
  {
    "url": "assets/js/59.312d5e19.js",
    "revision": "04c64334e8d93ed46cdc268d6c3a2937"
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
    "url": "assets/js/70.74ea6ce5.js",
    "revision": "a56292d01a05f1347c42f5c56f9be9c4"
  },
  {
    "url": "assets/js/71.50f1b231.js",
    "revision": "85ba99239cc0c1b4251760de13af4e9d"
  },
  {
    "url": "assets/js/72.2e53e055.js",
    "revision": "286ea374e467826edd03e4aa77e41141"
  },
  {
    "url": "assets/js/73.623c61cb.js",
    "revision": "988e75f8614732c066524283fcf70172"
  },
  {
    "url": "assets/js/74.eaba2b62.js",
    "revision": "71bec1c883cb793192cac7af5c441a60"
  },
  {
    "url": "assets/js/75.32173bd5.js",
    "revision": "3ba29c3415e9b85dc74ef1ac76dfe5b0"
  },
  {
    "url": "assets/js/76.9f87450b.js",
    "revision": "8d97f6a30efd32b238a5ff13b7c62147"
  },
  {
    "url": "assets/js/77.6f335aa6.js",
    "revision": "fa12c9c4b697e3b95ff16161a1e0a3c1"
  },
  {
    "url": "assets/js/78.ee66634d.js",
    "revision": "6bf92021e0d852c96cf960c07c27a7ae"
  },
  {
    "url": "assets/js/79.e26664a7.js",
    "revision": "5390d3309382e4c837576c0970b17937"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/80.9f863fbc.js",
    "revision": "99a1b065699c876a60bfeedb9f955167"
  },
  {
    "url": "assets/js/81.dcfa3123.js",
    "revision": "198080c2e81b2dbade022063541a059b"
  },
  {
    "url": "assets/js/82.f93371b0.js",
    "revision": "6c63a052f8f3329479336a5fcf7209a5"
  },
  {
    "url": "assets/js/9.c63fc6ed.js",
    "revision": "5da331455a8cb69627b9241d40d8a6cc"
  },
  {
    "url": "assets/js/app.ff3153ba.js",
    "revision": "4534f3f552c89df32b6da6e0c14aa8e4"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "546fa8ecccc9143099fc14d3f024d191"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "724327a4a9d02beaf0871a332a13af76"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7fd1ac858680cc453674017a2290a688"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "21f6311164dd814870e1c2e0c1aa0a37"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f946cb2cd4bebe765f45d1976a2bd1d9"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "165a44be5536522ede1d92ef3605085a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f986ad209ccf5b79b971cff81a4f8aff"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "9fafdba2911aa73dd09fdb539a77fd79"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e6da18742aa9b2c781a884986e0f50ad"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8fc09e3db0be94b0362806215cb01692"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "840fcc412666a153da6a9d90be18cc0e"
  },
  {
    "url": "basis/design/index.html",
    "revision": "fa80783738ce811bc44ac6bd338dff12"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "cea52dea604220cc884ab4ad72c332d4"
  },
  {
    "url": "basis/index/index.html",
    "revision": "4a49f77c3abf0dc9aeff1f93a4ddb331"
  },
  {
    "url": "basis/os/index.html",
    "revision": "41a4e2d41e2d4a48c8e282349dec9ed3"
  },
  {
    "url": "book/index.html",
    "revision": "fc52d9f6f62574e034f802c02899b56e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5144d956e91ed4cdbee058b867e2abe3"
  },
  {
    "url": "categories/index.html",
    "revision": "8c8b1e5cdaad1a77a3b15e157a8f5748"
  },
  {
    "url": "figma/index.html",
    "revision": "aea7e67bbdd155b663783f5f88557741"
  },
  {
    "url": "flutter/index.html",
    "revision": "25566b4086b13c129575d45948beac02"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "bf28ad634a18853e02f945add65fded4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d9e4bff6074f78c56752390563a16c15"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c68987abe9ccd6583e8f85c362ec1f46"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "23d464b802921abc7a2de07d3b9b4cce"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "33be25ba81bb313d8957382865643421"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "36de892611431e72cc91249298b6c3b1"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a050af7ab5a73194be01ee2427fc6c35"
  },
  {
    "url": "index.html",
    "revision": "43a43e303a085a0ef06c01e41d4de3df"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d02ac47c4dfc642fddb6b2ecd93d1571"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "44e11fb406dfa8ea3c56a2ab9c870660"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "23cee26fabf829a38ab94898685c4152"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "654be80036277ac8bdef2b5786527531"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "e4251ce7250dbcfb766d6cfdc48a160b"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f939d9551dba469464b7a0b1405a03d3"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "224617e447fc3fbfea6a5cf5dd6a4759"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "6cc44235daa874f0fbd75e3249a8e508"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0b053908722a761013dd2b3aed7110cd"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "060f473a354c38d2a5a46ca4a3aa123d"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a65ecd2b2154293daa72a9ee743387dd"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "690f0c1b7020d6815c8000b5ebeba5e9"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "79c6d7bda39db22492f43820374c0c0c"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "5a9c21bb8e624beac18452c8186b688d"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "bf08bf9139e74cf723c042eb005b1728"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "0701a292a7226f7ebb8e4ffbf20a9ecf"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c77c640650b7e7e3a059a3e6b130c3be"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "03b875d4e38f5cb1ca47eb4f7f8878ac"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9a4e6336ebb9614e52f74af3590f1801"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "4549d517bc37cbb8146b09061305eac5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c16d51a03345b1976ff8da6a94a41a9f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e173fbcaa5866a471548588e99e1bc2f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c256da3e3b9391488f96536d16d0f918"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f5623def4aaf8319607c59fd452493f8"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ff50ec87d31712f4b33ee55cce821758"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c565a21af61352ef93fd0df5c2876689"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c2ac7a6ec23bd3ddea4a5d31e5650616"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "92e69f0149fe15f56df39435a3060478"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c74ef8cd78985d8687c07fcbcc747331"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "eedb9192ad3dc13c7e295d522ef98849"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "814c7a314e65b68ebb1bded5ddc7efb1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0100f2bc9e99140e560d5b7d7ce9d003"
  },
  {
    "url": "tag/html/index.html",
    "revision": "68ec8a19f094c13e1c744dc14d57b757"
  },
  {
    "url": "tag/index.html",
    "revision": "80099ec717bd09ff40a1bfdf78b0c863"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fa9a9d3efe72a0b6cb25c2cff7d48afb"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1550ad187e18c04689da45dcff140c0c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "522c825318af94a96b34f2543dad3d13"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4895b26dabded031eb2d647185dfcfca"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "24012ff2bec20c6ef2733150a7f612c5"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bac4c42350e06c94e4f8f4cddb7e9a20"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c9e1a49ddd3410d7246b722f91145459"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "73f23109f30d38bafa292d0f0e7a1d3b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "40f71ed3dd6f72282753fab156d221bb"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8fbc9c491377d82eb2a9c3c1f4473cf2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3ea7afea0ea159cab6d5232fe34dd725"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9b1f71a81dc30a9e0a2272fcee06af96"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "afea3ab5f2b0aaa2267aa3819d4a5da5"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "da4e0471f3233925f7333992db925243"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b40bd218c5c64ddb41ec200c43fd7d14"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0658ac03242fbf3ef16603e3e1b0200c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6398d0a2c2acac78d27c238839f43fd9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "97aa9b64d41e26b720cff1c9f92e910d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0427e3a2d998f1935c3ba45743652b2b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ef8061569d963c270bc88f17c5c9ba62"
  },
  {
    "url": "timeline/index.html",
    "revision": "421a64a7f85b33be5a11fd9afe2a9576"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d18887d58a471e5efeee49f9474f92f0"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "24db57a7644fb5994e0a360fa995e218"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "51d84402c3123f257847f66ad3188b2f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5704523a25b8194d5962a4b81a975dc4"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bfba402ca106df4f396394348f3d7e78"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8eafe5552f4d6c3bad614daaa78d6a81"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "940d45d12d3b17d5d434d611b4048a51"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7acba1d22b93f926fd3d5011506e4f09"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4d954180085db907cf31e7adce0e272b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "16519ef92eb7faddf29bf5a0e1f0b558"
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
