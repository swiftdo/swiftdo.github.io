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
    "revision": "acf9bc02a90f3f591d66a4506744d510"
  },
  {
    "url": "about/app/index.html",
    "revision": "a8daa2511a14eeadddf2818f29780568"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2a3bc71facae593bcc910a29a9d25b5b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8afb9a4e40811d58921d192fc3fcae29"
  },
  {
    "url": "about/index/index.html",
    "revision": "9c42877a447320a89a463e3f5a390ef6"
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
    "url": "assets/js/58.e8d214ef.js",
    "revision": "0f0b6816ecc926eaac15fe47830cd3e4"
  },
  {
    "url": "assets/js/59.73186f72.js",
    "revision": "2342c56413001e7532c4c06604255a03"
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
    "url": "assets/js/68.87e0e083.js",
    "revision": "de3fbdc6a643c66babd40ef67e570ddb"
  },
  {
    "url": "assets/js/69.0b35b5f7.js",
    "revision": "d0de1e89f782853ba2cfa319469b83e3"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.4f3bb07d.js",
    "revision": "8fa16ba431de16ed970c39a31fabac47"
  },
  {
    "url": "assets/js/71.e623344a.js",
    "revision": "0d10df8bf6d50007f355df9fbd7180e4"
  },
  {
    "url": "assets/js/72.0d7294a9.js",
    "revision": "f60926b029f83179838579494325f7c7"
  },
  {
    "url": "assets/js/73.a5a31d2e.js",
    "revision": "513dd232218fd264c3a852eef6499587"
  },
  {
    "url": "assets/js/74.fe020fb8.js",
    "revision": "218a14fba530606113d44d82c4953aa2"
  },
  {
    "url": "assets/js/75.c8454a2f.js",
    "revision": "dd863b7193471879d08d512b6fa53f1e"
  },
  {
    "url": "assets/js/76.2984278d.js",
    "revision": "7d998512e7b9b02d19e995b206b78384"
  },
  {
    "url": "assets/js/77.cb90029e.js",
    "revision": "71478a7cded24e5b105d83b87d377975"
  },
  {
    "url": "assets/js/78.864a1d7f.js",
    "revision": "6c1fa2ec3a9972efeaa25d1c197f657c"
  },
  {
    "url": "assets/js/79.31a53dd6.js",
    "revision": "12fd6a57f033cd8a817de2e369c29b9e"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/9.c33aef7d.js",
    "revision": "3d38d925326fcb3ad63a3f418160cee3"
  },
  {
    "url": "assets/js/app.bf790cbd.js",
    "revision": "091d546cc4799c7ac8d8778aa63916eb"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c525e3c6c2f8cd45448b3eba7a1e0b96"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "13f474a72048b520c5aab8dcef8fd7ed"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "53ae5eaa4fec625f9a5a3cd0df953e2e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "599272adc086bf7c6d37ac123824858a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "7457b356c771a8a36257a89adbab1a37"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "67502f6e804e5663113c5083f7e2945f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0179cd6020833420e4c40d16e147f27d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "58b3953fb0a1027825ffa992588c8ba7"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c39220849b60df3a35c986e567c9a45a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a61d8f63c019f500fb84cd06c7cc998c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f3ed854289c43a7eed5f88cfd09bb03a"
  },
  {
    "url": "basis/design/index.html",
    "revision": "85d33bc569899b4bc2efe9e9e9dc9a1f"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "1fd1d33f02a30ce73a5682167c0b2402"
  },
  {
    "url": "basis/index/index.html",
    "revision": "017aa0508b7a194834b7a5af394f44cb"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ae699d905de49cc6446e44f6cdb934c1"
  },
  {
    "url": "book/index.html",
    "revision": "ae1420f031136b3f33c3aa1b58b7a752"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "cd338bf3fea49af968291c36a748644d"
  },
  {
    "url": "categories/index.html",
    "revision": "5f3deba99257e13a9099ef9b79f94ec2"
  },
  {
    "url": "figma/index.html",
    "revision": "2619b9922ebca30de9cff3341f8e78db"
  },
  {
    "url": "flutter/index.html",
    "revision": "f87341b9396d2cdd2845a6c4795e0b81"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2f1d192ef6b67d86d2451b129024e631"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b2046c605235c225ee23620b04d2ed5a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f22ba92a77438148c7726d31dc1cc088"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ab864ce3937204e985444d33e5f8d328"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6fbe47e740f2eae18e0be7dfe7bfb61a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "468cf7d09691fc1a982a01e926cba08b"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b0b09213ad1ee9a122e97fed29f5bd8b"
  },
  {
    "url": "index.html",
    "revision": "a81c3d37ca20c861299aa2a95e1046a6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e5f7233ba318c60d3b5ffac2e94191e2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "eeb853aee3a5baec4e81419535024bf8"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "712e90f9de11779efdc3cf71f1d9bedd"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7c03a5919a88dbf3c4897106215b404d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "240179ee7a3103e9c6114d57c0d6629d"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "2b4b377e9b28e327dec63e9f63fd13b1"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "0092268b38477af476569b79204cda0d"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "35cabf85391a7b21f138f53b7f570695"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ff6dac218ff92aa9a97ccf1f20de6ec6"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "9e67537e638cdcd71be6e6d47a9a0365"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "30a91c1ea3cb350b47e125afa5138458"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "363635b57416800b7666c2fa549c6425"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "f714348787d50a65aaed01dcdee2cab1"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "785d42e530a3c713cb6455092f662ade"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "1a579d3bce3db8a03ac04615417148cd"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e66002405dfb71fdac87c10d828f1d5c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "46ecfb06bc85ac04cc687bfffe225578"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e23b0d070b94bec73e7771fbda7f4782"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b52bf611b02b553d991956eb7f416eed"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1cdfd04e39e6a4c6707e44ebe4102019"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8d3324948aa84ad9246873a3a47fb8e7"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ccc96e0340ce9b3d47793cfa4b9ced1c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "dc287f9ae51c87d4a7ede4a153aaa6e4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "3e6f4ce65a06153aaff660e5977b5ce8"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "13552b83b8b5634abef3371e52282209"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "88b7551c308deae08c7988a48d5b8fd9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "82059c431d3588f7bf432c718a037160"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "df71fe78dcd1d7bf781f7c465c63572a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "91653e6357a0520d4de5baa185c92002"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d47d69647893fd5090b01bdd25cf62bd"
  },
  {
    "url": "tag/index.html",
    "revision": "a369b2e3d4f0b6a65926522ecb504ce0"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e0ba5d165fa52e9d2ab12544bcf7e5ab"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "21f6bd81cc9a7e45f97b70dd73c186cd"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "bb40b4a0750dc6238e896f3406b50de9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4a809977dbad9cb4036d1c06dbf68adf"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "569fcd4306540683e8b5cfd39d8ae2e4"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4c1d22976ce4f7151a6832a338c394e0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8258a946ddb5db6044b26c2637c72cdf"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "dec92fbe6c66274111ee6b90688d1428"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "223bae92c410c216612fa5daf1483867"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "42739fb1c71cd8111afe63fb8d8aa85b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7d7f08eba8e2b60bcd872bd02d794a22"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b7db6ba417c2bf280a0d25a25a843b77"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a8671741c5b38411d96879d52163038f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d3e26d35b57baf3d9bb64b395cb23873"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c11f27f6bdb103c75c610a10e658b7a2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5120749ba915a53664e7e766aa7c2cdb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "50f4bb0e9abbc94c733b6cbc645e81c5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f4f639fdf345a4edb37273a011e5deb8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "92e935e428a103c8e047adfff2021a8a"
  },
  {
    "url": "timeline/index.html",
    "revision": "93fe105375a3a6714da5553e1e7bd4b9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "756717d954f248d247559bd80d0a5ca0"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f6c1e1dcc34c795b4c000217ee9b8620"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b5099744e711cdcc2807f646f152f84c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7ac334d7a86438709b1e91ad88de899b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "eec5f4c47b411841651132ed7650fc22"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "679e8348d353d0ee55e2fc2d40c30942"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c3f8ec0b196047e8538fed2f9faa2d6b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6f218ddc8d8e71bd55ba85761ba320c6"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "fda59ce8eb22540d28a2256d41328623"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "81298dbfcbe78970c48f58dd86146e99"
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
