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
    "revision": "fc51b7c0dcfd66d67cee1fb8d6ebe273"
  },
  {
    "url": "about/app/index.html",
    "revision": "6080ffe907161ccb2ac230e094cbaec8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "39658fbb7cc27db6c7e5a39f22870caa"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "cced1db5eb4fec53bb1476016dad367b"
  },
  {
    "url": "about/index/index.html",
    "revision": "78095dc3d4b45df5f27416c963e77f73"
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
    "url": "assets/js/24.d8fa631b.js",
    "revision": "f3dee10ac3963bbd36d7ea0443594db1"
  },
  {
    "url": "assets/js/25.2d682b1f.js",
    "revision": "d4b6b71a5e263c6d80d7f03ecb9079b1"
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
    "url": "assets/js/28.419b8645.js",
    "revision": "9e4c000ced9086645d94a1d56ed97c25"
  },
  {
    "url": "assets/js/29.f78cdadf.js",
    "revision": "e9b867a7850f88ff92c04cb7f8f371c5"
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
    "url": "assets/js/51.1c912cb9.js",
    "revision": "7423947b79934e7a94b5ace988c6ac06"
  },
  {
    "url": "assets/js/52.145454cb.js",
    "revision": "9da74acb547f6c3b9fea32bfaa45964a"
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
    "url": "assets/js/66.3f6ce7d2.js",
    "revision": "8c59fc794778bfd5badf008fe9280d58"
  },
  {
    "url": "assets/js/67.eb45641d.js",
    "revision": "b065eb4b900647b680321a7cba255cbf"
  },
  {
    "url": "assets/js/68.cf45bc54.js",
    "revision": "81572b9b262ec71d3c0ee4d867c5a08f"
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
    "url": "assets/js/app.ec47a6d1.js",
    "revision": "8c927bb8db7832b65a2a8479579768f0"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "18265c4d38c405c69d662fa9a68ac539"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c4c7c21bf1ccb8067df89109212ada1a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "871a25a7bf006818fb2347d03776151d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "fa5b1dafb20b02e2ef800659370f975d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "8e5e62617a6edb559d48f911ccd10048"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "5fcd4f59b65137f86bc80463863064b0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3a7841507eb6a3dec5a3faa3cb7bfd56"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "19e059f48e9070a98899936bba990513"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "835a91a8276633dcf6b54ae1fb089612"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a6d038fb9d5783551ca1b5f0e3aa80d4"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "bd338c2698a51cdc13afeb9a1f63bb66"
  },
  {
    "url": "basis/design/index.html",
    "revision": "28a21d2cc995db0a58a4db267e4c5c20"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "ba7422b58fe2118fd9f157a14ef7c8ac"
  },
  {
    "url": "basis/index/index.html",
    "revision": "58ee108f400c67824670a54acd0194c7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "edd946ec62aad95e3b1bdbc625cbd797"
  },
  {
    "url": "book/index.html",
    "revision": "75426cf476cde695fa4ac4b2c574b384"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "6f391a4b554a8e453092eff5552ded00"
  },
  {
    "url": "categories/index.html",
    "revision": "8a699aefbd5b07dd51c9b28c19254de2"
  },
  {
    "url": "figma/index.html",
    "revision": "8999d133e0a9e45c5e4f65366f03fdf5"
  },
  {
    "url": "flutter/index.html",
    "revision": "1509c85d8d8bacf987d28bf666c06714"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7e810154609d288944a87048312556a0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "bdb15b0a267826c3952c159712523e95"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4ca30ab4c8838520a608108df38f7cbf"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "62b7c3a6c288d714a687825501ff9145"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d6124e1130dbe4a140a67c6168c74f66"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "bd51d0efc4920303fe62b28413186453"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e36ecf5bdc58b1afce844ee8ea253cf7"
  },
  {
    "url": "index.html",
    "revision": "1bfe0a44283e22b4ab047191b7f43bb5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "352332cbf6f4a3af1a39cbc2791e3b70"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "713e449659b2d46b799915bd7fb7789c"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "cca2f7bf52ca7a08d25338b2b4dd7ef7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "928da7f02ce40eed5f91099c7572ad87"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "fb50390dd9218f32afdd6bfe49074852"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f93cdaf1eb6d0a4d4dc6238622c5e8d7"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "d805b4b9db67768ac360a4c17fe3a27f"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "375a00da7ecf143c5af30a26396ba233"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "c48a17837f8a5d9f2cb2b6704da53ec6"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "77221635a8d5628ab2025b64084a34f0"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b8103712f8313d760d9e98035da9a317"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e8de96b6b3f97b9a4060c60a51d0751f"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "a120df298dbf0b84ddaab7c8434c4132"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "10526c0d28637e201323eccb8f8dbcea"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "eb665403bcef16babc0853c8fba349fa"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "41d1657828ab88eb05fdc031d3ff1ae2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1c409be190254eb87d210b50786a6e69"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7fa7517d006652a4b7046a7e84784f78"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b9302cd4093957d6f0b11ff25c9e7d21"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5592549a04de6a3614e4a17f97b9f67f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c22693f819a24b81af2cf9739bf46997"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6099df5132ddb73ee657ee2b458db3bd"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "735dedc3af03bb5bd0cf1de4cb6c50c2"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ab7bb6972e643b9f59d738c31cb995b6"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "da710b9210e9a025384eec0218961f6b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "153c130efbd7a7aae8bdd61229f9de48"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bbb8a7c7de04b23f8c08b648d2438ad8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "0869b842c1fe792270609c599ad93d17"
  },
  {
    "url": "tag/git/index.html",
    "revision": "116b3378022b424269adc78531445f43"
  },
  {
    "url": "tag/html/index.html",
    "revision": "55f29ece2e305ed2ebc79b53089a2545"
  },
  {
    "url": "tag/index.html",
    "revision": "44ad136ee730ab062be1bcb17e8e32de"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b81db0ed1b4cb6fcaae6c24770713495"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "32069e5cae754b1ef5d9f97b4c7704dd"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6fc9c2665dff0c890aa10f66340f7fc7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c81e7150de7c71c015fc28776939d83c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c1c2319d08c5f9cc089cec43060972f0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4a4ad8d0867a773e44149c7e38b29a72"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7b4f1e751a2e4309c0f25327f0649815"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c241c65cbda187ac9d465ef3f068efdc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "24171e6e053ca3bd7d248f05731ec910"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fd3e52f011fc6ff3888f0df3abc91f92"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7fcd93e11a40c99c4ef9a371c5fa430d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e2cd1a0f7a483a71a73070ee616cc76e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "222f6989eebfa0dd619e377015e8ccae"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "23902fdf5f41cfb622eb8ac81a6f096e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9bab2e4e63e46dd29c0b07c062001cd7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5023296e0dfcb877c70d3498c8b8b09a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "20adaa85aa21e6c8b7bc3f0740fc3cd0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ebdb6c2d9bc10e4bfa990241280f96bd"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "42cf0255deac96262382cd0bc8856bff"
  },
  {
    "url": "timeline/index.html",
    "revision": "83602c9cb48afe2cfb774c74a0a46c6d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "589ae2f0c5b128b15c9acf88bba4f287"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "533e80badf9d3ec8f48ae51d23fb6c13"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4dd4ccb3f44b9be49b57486595178fde"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3af22dca2e0a96b517072ad6d25c28a0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bbef98038b819a8491754d716725046a"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "be457771af0ffe260cab1c367d7804ba"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ad818249443961c5caeb005ed02c7031"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a481a9cac56da4bebee009d9ee6ffcc3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "fa8399101843d8060a599b57f281049a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "40b566b5be1e46f6bf7875e2a095e954"
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
