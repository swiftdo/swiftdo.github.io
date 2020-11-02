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
    "revision": "8cce81cdb7cc442f6637f0bcbe1f3d03"
  },
  {
    "url": "about/app/index.html",
    "revision": "d9919be5116da24f5bf51cfaa823a652"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "376e657ae70e01be5e11a9e01a03b751"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2f2d22e6a72330b2d8b289a47292bd72"
  },
  {
    "url": "about/index/index.html",
    "revision": "4af06ce2625866a512badc1109fc4b60"
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
    "url": "assets/js/17.a82cc66f.js",
    "revision": "168c261eae6c06573a442a2ee29ed848"
  },
  {
    "url": "assets/js/18.df040f87.js",
    "revision": "fbf0fff568b930c7f817f02288467bbd"
  },
  {
    "url": "assets/js/19.da57514a.js",
    "revision": "68ec63f6898baed2185ff24242742f78"
  },
  {
    "url": "assets/js/20.fa7697d5.js",
    "revision": "1df4ff4a8ec2dc25b0932f0ce0c98700"
  },
  {
    "url": "assets/js/21.d5afa2be.js",
    "revision": "ba01bc399d3c9de53253fb8ad2f2737c"
  },
  {
    "url": "assets/js/22.f901688d.js",
    "revision": "7786a2dbb11a636b1380001c8c23873a"
  },
  {
    "url": "assets/js/23.766c9e8b.js",
    "revision": "52bc00c19d197d8d4d5ac0cb916c3ab8"
  },
  {
    "url": "assets/js/24.6ffac7e9.js",
    "revision": "742c5fa2dd17b9cb34d4801ce208bc1d"
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
    "url": "assets/js/40.51834a68.js",
    "revision": "2be9029a05ec82498a9af11277acf700"
  },
  {
    "url": "assets/js/41.ccccd788.js",
    "revision": "999244921ea51634e39d362abdc9809c"
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
    "url": "assets/js/44.8ed3e270.js",
    "revision": "c9abe75b6e7cd94127760424d7ffbad7"
  },
  {
    "url": "assets/js/45.d9a7ca20.js",
    "revision": "12336b47028d77b515560e2be489bd8d"
  },
  {
    "url": "assets/js/46.dfc5c649.js",
    "revision": "00068a0ea8e63351814cd92ce633f5b2"
  },
  {
    "url": "assets/js/47.328b14bb.js",
    "revision": "7e287fba408496fabb7a894f53bc28c8"
  },
  {
    "url": "assets/js/48.1b9e37ed.js",
    "revision": "c8cc831caf9a3807ede9929ebb38d81f"
  },
  {
    "url": "assets/js/49.a4b6e92b.js",
    "revision": "d3276fc31f8408ad3ef24050a1c37400"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.8b1aae27.js",
    "revision": "875f8aed44fc399a6510b8ced30ab449"
  },
  {
    "url": "assets/js/51.78819fda.js",
    "revision": "901643510870e8f084e7c47bc92b6f7d"
  },
  {
    "url": "assets/js/52.4c7e1534.js",
    "revision": "aa47eac9d106dc6a8d7b3006764b5ef3"
  },
  {
    "url": "assets/js/53.447974d2.js",
    "revision": "132a7678376f1f407d3848668f41df76"
  },
  {
    "url": "assets/js/54.eb95b2bc.js",
    "revision": "7da0e8d9ca3b08717af8aaa9c054564f"
  },
  {
    "url": "assets/js/55.3bdf218d.js",
    "revision": "fe30dc72dad2738a4699c56dda64aa9d"
  },
  {
    "url": "assets/js/56.1378fabf.js",
    "revision": "f51a1712793efbcbfd15f90195ac3eb0"
  },
  {
    "url": "assets/js/57.a069c805.js",
    "revision": "97f6dbecaad725299200cf6ffe13732c"
  },
  {
    "url": "assets/js/58.6d38fd2e.js",
    "revision": "962f8514fd693c86a1532b5ccbe75613"
  },
  {
    "url": "assets/js/59.a16c8396.js",
    "revision": "b05dae8b5b95b0b566404372f4181da9"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.b7e316cd.js",
    "revision": "d452548d2d39505e9fe3b8a25a58050f"
  },
  {
    "url": "assets/js/61.4e2b5eab.js",
    "revision": "c2ad71254801c333efeae24be3d8318c"
  },
  {
    "url": "assets/js/62.75e2e034.js",
    "revision": "b8ee7aa72a5263e9b7d14c6295559dfb"
  },
  {
    "url": "assets/js/63.eabc7ba0.js",
    "revision": "e5a1d9a34a9fc90fc33b41d54b869084"
  },
  {
    "url": "assets/js/64.fe7ab7ac.js",
    "revision": "1134d18d20e0bc9836687e44a9496da6"
  },
  {
    "url": "assets/js/65.1d50f914.js",
    "revision": "9378b0cce6c95ee031f29365502b8236"
  },
  {
    "url": "assets/js/66.999f4643.js",
    "revision": "339ce66c7215888538e27578f83c57d3"
  },
  {
    "url": "assets/js/67.e228a65d.js",
    "revision": "3a0158c2b4ecbd3cf6888bb96c37a0c6"
  },
  {
    "url": "assets/js/68.0120080d.js",
    "revision": "45d88a34dd17511bb9fd4759aaa8ba0b"
  },
  {
    "url": "assets/js/69.36098829.js",
    "revision": "865525d5d93d3a7b74c0fd337d0b0d5d"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.5e1b05d8.js",
    "revision": "2b5a49f95fb2a064c4e72ac63b829405"
  },
  {
    "url": "assets/js/71.55f40e51.js",
    "revision": "b97bb94cae74b1e9c45367e986f158bc"
  },
  {
    "url": "assets/js/72.abb27777.js",
    "revision": "c55949fa5dcc903eafcc9b99d8021841"
  },
  {
    "url": "assets/js/73.d5447a0d.js",
    "revision": "d66df2566c106135ec14346212b2be05"
  },
  {
    "url": "assets/js/74.badeab7d.js",
    "revision": "11eb4b30e69d76a3de4ecb31912f94a8"
  },
  {
    "url": "assets/js/8.7f7f6ea4.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.de7e8444.js",
    "revision": "aba163dbe0edbc5299171df278eb0867"
  },
  {
    "url": "assets/js/app.1291adf9.js",
    "revision": "0522a1e167e16c78279787539a091ebb"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "beea64ea28776e9ff07498f762e089e1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "7286b3dae0d7979f0307d936484d4420"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "cde47f63a1d111584c18c3e4b6bdb09d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "457a3d994253998c63abbc359109d66d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2f56586d5b74252d36a44beb661a551c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "33269962dbe8e7334df0139bc1cc5368"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "bfae4a0c833aeece00b01793fe327ebf"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c13e077cbc3765b1481551da7961f262"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9a2d7d2e054d1ba6c731877bf53c6bc8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c27ecf50013fc72a9d603bed86308ba0"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a1f483111ec6acf7860f76b60526ef27"
  },
  {
    "url": "basis/design/index.html",
    "revision": "10e24348cb69232b08c6e6ee25f300f9"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "198da26a6aab3507b8c1bbb0c4c32252"
  },
  {
    "url": "basis/index/index.html",
    "revision": "318c1d688a41a21da627695bae6247bb"
  },
  {
    "url": "basis/os/index.html",
    "revision": "4b515737adc0019f251efd7b41086bc3"
  },
  {
    "url": "book/index.html",
    "revision": "80da464afa7278cfe3f289cda1443a83"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5d10a5309c818b4cb781d2f3596c2fca"
  },
  {
    "url": "categories/index.html",
    "revision": "e602e1288211ba764e9f9f8327246201"
  },
  {
    "url": "figma/index.html",
    "revision": "9ae64496675da636b577e521d2476e07"
  },
  {
    "url": "flutter/index.html",
    "revision": "6af965e7a82c38f4744cabc9f0eeaff5"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8449bd7a7e807d80ea4ece25fc259b45"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d5c2e066de350a5d12556f8a2a9375ae"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "31f882e97b9fc131ec06fa8458e3e09d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b1a01d9e3468f2700cca620375848992"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e365bb3646b152d1988eb6243220f1fa"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "071689909797a5a3687035d454806b22"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "46e4dc2a30a4c8deb7e61013a6b1a72e"
  },
  {
    "url": "index.html",
    "revision": "fd137fa9e3f5b5d50ea8e7e02f73cccd"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "7f91bb561e1d594007cca84664c0d869"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "cacd5a27cb97ec63a4526964e0cf657b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "29940365fca3739e18b267a36316e9e2"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "e4d9d13e076253ae75261919b7732db7"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "003581535b4cf2b166daff75e5d4fd3c"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "6c3a52d1b76e81de32e9c7011e21b10b"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "1f1ae08a182b0709d4de26afaface4f1"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8a2e8b2f197a06ca99cf91e2b7b7ccf7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "4af641a1896351cd950a1658ba711e42"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "9a0dc10769d0c2ae9a753f92e74ebdc6"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a518eb8b75f28d5ad9b246a358ab5d07"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "fcdc58a47fe1d5715eda112488c3b215"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "199a6625f71e69d3f84c414bc9862eb5"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "6d642e9e9a3e5ab3e65df81674a40f74"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7c960b5e3edcf227f42219bc1747e84b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a0fa7c2b177fb9a1aac8e637f915d09b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2a9a617b27030856af4703f1e6609377"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a89241e580647a937f437cde8214cbef"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "eaf0a93ac84f3e571612000cc8897bdc"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "041715550778d88be0e6ed7ebdd5f97b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "83d7cd1233569d2c1d00e7ddd6b14a75"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d340edc32b2de0cc95fb5d30ec2abacc"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "054aa5c8e981655dac2c283c58849605"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "f6ff81cd3fb9499477611b6cca466bd0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8ffb1f745ced0514fe013831fd5269ae"
  },
  {
    "url": "tag/git/index.html",
    "revision": "69fdc95b26ae2b711914db8062209e6a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "be77c42bf3463d916c01a008120b849b"
  },
  {
    "url": "tag/index.html",
    "revision": "27a95edd7933de3d7020d0bed043ad4e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b93d40594d0b51fbf33063c2620d01fc"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3083bafc298285717aa4d0088c319aab"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ff7c9a466ce34f1d51de8029b0ff4d9e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7eae67bb98416adff6b0b4b4e26c7fe3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "69a55fba86fe7a3c720651ae777c4538"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "577d46d4ef73c85438f5796ad3512372"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7f63f4a2e6c0735f21dbddaee8d55249"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "58ed1a7ea3a2ea66b2fe33704ab8f46f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d3f4b680d0e4c4c2d5768d3fff84ebc2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "896f282becf3c6c5039d4b67221f2706"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "95bec3dfde70aa4cf0742748b3bc409e"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "02da9af889a5482687b2fc25991d5538"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "30486830854be580d219210e144e3233"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a6ce33f6bdf23bc7f0dbac456b1041b1"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3d3b55e274d79df831280676c9015f72"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "83608563f28317b2b2485d998b53f327"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "71a2cc4b6061bc8be5e5bdc34d3bf17e"
  },
  {
    "url": "timeline/index.html",
    "revision": "51cc87c4a66788ace67aed923412f810"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0b4f6992b0202d35512c1dc5594ce051"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9abe55fea8517722e825fadaa9d54fbe"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "431cacb2b4c21b10b88195818902a483"
  },
  {
    "url": "tools/html/index.html",
    "revision": "34b1d5c943d2fff1207a0f4d7c786f03"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "55c7e3eb207cf7195e3ffa7a43c0f628"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d72cf3ea4849fa61943fcb1b2091d20d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c96347fb8ebe500c4edb14cdae4c298d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d883e994b7f2b34f5c935347d0641ea2"
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
