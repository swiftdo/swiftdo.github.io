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
    "revision": "6d632aad3d1101cdd41de4e3ccf999f9"
  },
  {
    "url": "about/app/index.html",
    "revision": "92290a311aa101e1f1d5cff02c761558"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "cac0899e49fbf016e30fe0f932517550"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b57d87fce06ae45674730578b70432c3"
  },
  {
    "url": "about/index/index.html",
    "revision": "8e4bc5d05c77094f5d68dfca46c3d887"
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
    "url": "assets/js/25.07ff1d77.js",
    "revision": "9b44b551cb6276d13617897e15893889"
  },
  {
    "url": "assets/js/26.9b890d51.js",
    "revision": "d6892407d1d837e085aa15022aed02d5"
  },
  {
    "url": "assets/js/27.e2eeefde.js",
    "revision": "a0fc9c089fa67ff8eab124c7bc85467c"
  },
  {
    "url": "assets/js/28.ef4233d9.js",
    "revision": "d6ff297fe479f5cd22717b072b59520d"
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
    "url": "assets/js/35.bf5e510c.js",
    "revision": "306210b7db07e94982d37efb82e34710"
  },
  {
    "url": "assets/js/36.d5b14ef5.js",
    "revision": "1665234a71b9f53ce5e0923f2a9303a3"
  },
  {
    "url": "assets/js/37.884c59c1.js",
    "revision": "1fd0ebcb066bfba56a27b791450d52bc"
  },
  {
    "url": "assets/js/38.3d034752.js",
    "revision": "85f0e17a8bc7e8271638823499769544"
  },
  {
    "url": "assets/js/39.fa4dea47.js",
    "revision": "526cc2119a9ec1dddc7ad1f6abee6d2b"
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
    "url": "assets/js/58.a0efc666.js",
    "revision": "e3f214251877d477594d97dea545a291"
  },
  {
    "url": "assets/js/59.a35f4569.js",
    "revision": "e6dc6a62df544eaf4d9cfbb71dad16d5"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.525664b7.js",
    "revision": "dbd82db1cca20662f1799d07903585c2"
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
    "url": "assets/js/63.813cc351.js",
    "revision": "381eac2d797355c5d38a92c4fe49b365"
  },
  {
    "url": "assets/js/64.4aa7d9d5.js",
    "revision": "97f8d7f4f36a8ad206d9cf555d30b483"
  },
  {
    "url": "assets/js/65.4aeb3544.js",
    "revision": "ea3077d2150e6ffb6c5aebbef9b9cd48"
  },
  {
    "url": "assets/js/66.3f6ce7d2.js",
    "revision": "8c59fc794778bfd5badf008fe9280d58"
  },
  {
    "url": "assets/js/67.eb45641d.js",
    "revision": "b065eb4b900647b680321a7cba255cbf"
  },
  {
    "url": "assets/js/68.2c0cccdf.js",
    "revision": "0208fb50908a2d6f0cd5ec9c7d2207d2"
  },
  {
    "url": "assets/js/69.ac374a0b.js",
    "revision": "1b5a61f9af31f31e34c6ec6fffcbc860"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.fd3208ef.js",
    "revision": "cc1f2eefa71aac843c86bccc1e3eb038"
  },
  {
    "url": "assets/js/71.65d987cc.js",
    "revision": "82cc2553725e986fd98bd5f565dd7e92"
  },
  {
    "url": "assets/js/72.a628afec.js",
    "revision": "df869fba461675f3da01b049999e6165"
  },
  {
    "url": "assets/js/73.67a6ec68.js",
    "revision": "4ddefc891d61649918213319a65665b9"
  },
  {
    "url": "assets/js/74.70f8054b.js",
    "revision": "8f564ce57513e7edcbc9dbe6441e9310"
  },
  {
    "url": "assets/js/75.c73d33d9.js",
    "revision": "a105849da62a6773ee6cb3fdb3d1dd9c"
  },
  {
    "url": "assets/js/76.9783534e.js",
    "revision": "2f60f77069fc8ee478d692e364845d51"
  },
  {
    "url": "assets/js/77.e2b3e20a.js",
    "revision": "157e2b0f1be3ae1b363632740cef7491"
  },
  {
    "url": "assets/js/78.a1ab3a5b.js",
    "revision": "41cfcf1f1a5e962b0465ec9559a1138d"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/9.32f8f95f.js",
    "revision": "ae41501427895c2c111a0176104d45f2"
  },
  {
    "url": "assets/js/app.ee1d6ff3.js",
    "revision": "a20ca47fb8057eb8890563f4c27bdacf"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "767f96cd54f536111635ef69637fc8ac"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "98d842cf8851ddb0d9d04f2eef182b8c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9ca0eff544978304b83594f8b9819138"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "00bce34726b494e4798635fd0a49fdd6"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "bb14ed349e5aab1425c84def6ac86e53"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e61f30b99794fa9031b98e280a3da847"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f4453cfd7bd3fb9104197767de959c6f"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4de1ce4b73ed56c3a782369de7c37066"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "225a0fb5479dd9633d4731a13fb67689"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "b0a6756557c16b913145e6a4c4a1ddc8"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "14f55553cabb114ce2e9b6cf406a240f"
  },
  {
    "url": "basis/design/index.html",
    "revision": "0bf6a48b36c3273286258630be9e2138"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "eb385f86ad3dca962a67c4f21a31c690"
  },
  {
    "url": "basis/index/index.html",
    "revision": "99103ea530b2ab7e48caf53eb685af07"
  },
  {
    "url": "basis/os/index.html",
    "revision": "02b05a028c3bb763f665169c541b3146"
  },
  {
    "url": "book/index.html",
    "revision": "17df50be3a97f7a128e1180325d80796"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "840bfb3bb199ef6097d0484a8508222b"
  },
  {
    "url": "categories/index.html",
    "revision": "bdbb192b78b967700d1225d8d733e526"
  },
  {
    "url": "figma/index.html",
    "revision": "bb6fbd9e2bf912f8a0402e9bcdf33f2e"
  },
  {
    "url": "flutter/index.html",
    "revision": "71cb449f89f710fdc9ff054cb4a40c76"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "744bd7bb13fdacbf01985d053c49288d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8b60cb46ccf5fad626795a4a8c4b587f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1ea6096d8c47022c1fed543d3083f740"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f553a43c8d685e9003460fa79cdb4c77"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "cd0a1ac57f4a45747f239037071f8056"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "049e80b75138b771844e224f304d2b20"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1eea91e19e0ac762ba5189983fc8314d"
  },
  {
    "url": "index.html",
    "revision": "bae02496e3bda50a64fefdca4b4e89c1"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "900a3b1d0093bee37ce564d599d2a52c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9c86ff2ca5bb45dfbf826bbc1e415b1b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "83a75c9d21c8a106e4e26e735a0897b9"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "754581ab359cbbc7fad42b7cba9514d8"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "faa42142ef12de918733735db1a9e6f7"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "3763dc4fc6f7012e6afa898bc9986d03"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "0be9d0494ae1aaeaf9c99e3aaaef8a31"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "6617b152554fbc776613a5e3050c3f20"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0eec3d08c53396f3e0f8df588f5e2bbf"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "df312e37a0b1ab91937d8e10d3c4323c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "1e7cf0c0f98e689be1c6a3b526a07cb7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "79ca66e78d6abadbebe0020a5397b794"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "1a4ae5c0da9390ae686d7062ab9a0e30"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "5c6af3ad2e5df561e7a4a6de9738a20f"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "f3a303707cb1c1b4b2a47900fd7dee05"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a5825e33fadabecb808659b1879973df"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3b0c532a6786dcc2083828b29b68ab02"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c8fcb7621969b9925b44c178db31a7c3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "0ff68db99976336cafbfbbeb5d593abc"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "954082dfbc57e22937d5dcd7a3d50871"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d857ad23d552ba9706ffb7d366293b81"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5ee729fb139c3ffe018d9a5fca8e0f4c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "41e22d772708472c50b8226944ae7a98"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1f990ed6cb949be178124765365ddfc4"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "c4b71dad32df4db6cf6c8f10f6940634"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9d5080f778d51d8ed518d081b1f36f8c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "30ab88fa2fb3d40d3cc5ac985f711df1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c737981332c1232efa8da8aceb150212"
  },
  {
    "url": "tag/html/index.html",
    "revision": "dd5b0c30b86d84216a7894572d4f02fb"
  },
  {
    "url": "tag/index.html",
    "revision": "a1ede3c0eba32486f485d4d05c6ccd16"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "70fc20d77476aa5946a250205e80340b"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "c884ddb393bd2a24c8f32c68aa1cf676"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e8ad99e022b66c274cde469a90f473ae"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5a9a2e40afb54bfa20aded811ae3525c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f0b66a710f1d2ba076b748e6fe642d9e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d155bd2da845b919ccbfd9ab3534c0fc"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f79f2d891986c77370cc517d89dbde0a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "8089326acc659e83b63d4cab7e636183"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f61e8cd0de41fee387e19dc3af27212b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "530dc3c366518bb43cdef42a686bf476"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "da3d6b9e2e65e29306265072fc451f4d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "9429cd091d2b09c5944e69db9bcf3d1a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "02cb8da3d6652477be5f6e94d182c6c8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5b52b1bfa8f20f31ffd6e26872246901"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b8481dc13e108927616c8d478a44e116"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "22aebc3b6a5fc66f010c3fa22800d5c6"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5df915f845d49f4ad7a94c0e9dfa4f8c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8e01e4a00e82b92fa0af58d8bc973607"
  },
  {
    "url": "timeline/index.html",
    "revision": "e05c5f33a96768cfa1c88449041e68d4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d2ddae606545206b2577f3479131af91"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fbc6aa2cb469a2d6615bebf1889c1f88"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "526c7d508de90ab249457e8507519b24"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ee82cc2173e03857cf5515160567a09c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7a8edf03fe717b8a414d1839bac71d10"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e8fa8ef26e7aa1f1b829fab12420a8e7"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "fdacc9f3943e521632c20efcccf4e4bf"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "55524aa5c0774f6d998c51bba0dafc2d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f4d2e4c3575866786c3d9da13d8f2d1a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bce240d6024c674cf20101ad67508fb0"
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
