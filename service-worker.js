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
    "revision": "483a9966713e36d4a33a694c66461eb6"
  },
  {
    "url": "about/app/index.html",
    "revision": "6a2fa402f1c09abca5c3045ca8ce46c9"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6da59e182cb037e1603e5f452ff2b8e3"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "24b2fe0d439fe0c24ae8c82649ebb2c1"
  },
  {
    "url": "about/index/index.html",
    "revision": "49062c54d11ebf39144588fc21e16d1f"
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
    "url": "assets/js/20.649f6835.js",
    "revision": "6cdb0cc070e4ec578be6d9bf9f313f9e"
  },
  {
    "url": "assets/js/21.d5afa2be.js",
    "revision": "ba01bc399d3c9de53253fb8ad2f2737c"
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
    "url": "assets/js/67.1aee90fe.js",
    "revision": "7f84a201ff7367bbeab580fcf9ca68f0"
  },
  {
    "url": "assets/js/68.3a9fbf2f.js",
    "revision": "72d77fe27eadd633e92074c8af949f0f"
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
    "url": "assets/js/app.5a5e2286.js",
    "revision": "be504ee2ebb07a405a993da38c04796b"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "1e4afe2cbd5ca47b21ad4761ffb1b5cb"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "366aff071aa29620ade1b03ea323d9af"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a986880d14bfa63f2690c3d99f46f62f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "687db8e06bf515b4c95aecf281d1746e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c4510531587330978d5a995c50b62ce7"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7c9475d0f66049842d82b370dea6bd28"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "bf275eb5b81c6af13f7bb061129aadc6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "087f29688737f153ee0d7cbc0c70cf4e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b7518675a1d785c018b167a30f913f65"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "803c441de9e96d42ed339c50274efbe0"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "59b21e229d564338934c32e9103a9050"
  },
  {
    "url": "basis/design/index.html",
    "revision": "9df619a113798db7272239e5163a0d07"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "5e82d4eead587ed88c855cff3caa5bcd"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f6d2780775ef1562ba39b463b91f4a08"
  },
  {
    "url": "basis/os/index.html",
    "revision": "47e00d46281b7ae1ae127852cb78be6b"
  },
  {
    "url": "book/index.html",
    "revision": "2dd47e1abb79f9e058899db3476d4567"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1814efa1e697dd749657723ed281fa9d"
  },
  {
    "url": "categories/index.html",
    "revision": "8910295a7d2be652e73ec4210802e5a8"
  },
  {
    "url": "figma/index.html",
    "revision": "e12a3f548f70f8937f2486c93c2b6757"
  },
  {
    "url": "flutter/index.html",
    "revision": "91bb75355e3d6cabc8b9cde7366e5784"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "04258ddcdb7aee515fc5db37299a4638"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0ea660541aa89091e765a535744bbcd8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "12bb6e27f943116d65199355374633cc"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "1fc5265585a4c6ef2b04e613b89e10e2"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f27ac3ceb666e6b6a8a32ef7d381afdf"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b79791951a5f7b862b9f77c9c7d48e54"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "372176e3dbb4faa833cac6300d73acdc"
  },
  {
    "url": "index.html",
    "revision": "4709f4b45d2134405d2e457e7dfc773b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a53ff320137ce2f2005b6fba4bb3a872"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c2841ab929fa06614f538171d6f724f2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "249f097747600b5db8978cf71389227f"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "5002f9fb559f58397d6aa0b540e5974e"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "d19f04db82cd59e87fcf48e45e4ec988"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "4730e92b34b9c74ad1dd18f128a01bee"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "7d9b3241b38b9d886ce67527f2219e69"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "309b3be0f09a9be8d7233792a31a5550"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "21a7dce66629d8d93e295344cd4ffc0b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "95f90ef55bf11a7bfad3cc9ba38cd465"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "45f4e1fe7bf5622f3f21d2112ff08c42"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "5d6658660a8d54e2c6403e29008039fa"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "a72737a9d5642cf1f3b330c089182d47"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "4c3aae26792df41f3ba1f8c6374a1a4e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "38f920f45aebb88512634446e95d4896"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e2e756d164a20817272ab2aa98b836ec"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "38ae9f473ef4c92c0cd1ec75045440f3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fe5246a9fb876b805060fb74e4b8b902"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "464eda5d6fdcff3501ff943dfd5f1632"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "815332f4f1e07d6d06165294cb84983c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "730cfe09deced4b1a5f7aad692ec292c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3182187e1881d08010b9e18bfc57f313"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "58fae8b5fb30fd01682c7a75fae4e8d0"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "040f1d6642f91b050650f61d8169e561"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f2a07422c09057c7b367e86f63f10d8e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "247baff67d3da089d4df5a980c6830bb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ff4c048a5a4e30bc0f536b36a49fd5ca"
  },
  {
    "url": "tag/index.html",
    "revision": "73541405352509d26263cd7cdd9422ab"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5b378f3dabb661c89594200a1a9fb16b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a3cfe3242dd2f1730ba6efe631b96c44"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "97e9dad282f973158b6c3c35851a4fa0"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "78cdd51b21468fd792ec61d1696ff410"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9db36b126ae4cd2c4dfa614c01b4993f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b982db1641a7b970e673957bb1100d07"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "55a807a35b65115a23eb0d75be530522"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "090feb4e2a10801d6c297c26476781ad"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a9226994480c97af486b342cfc4a7353"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a0ce7a110bbc631cd3c5337383cf2293"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "404d2cb686c3f242260eb692a2f20a98"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9f97816ddd78571496792ce46af96a95"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "75559a9e1eec457b6f7afd11d92ce9c8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "406bc618148be5cc387e635ca1080614"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1f83eeafa9103e3e70ec44008ac32fb3"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3cfc6c5e0ae1261f597359517367ff3d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "25b7597389ec0fb33baac996693f03ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "f91c4d554261a0d1c1dd27ef9bf866f8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4db7da250d31aaa1d1e8c996a848631c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a1aeaab704e21bcfbfa139385cc93568"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "bc996d1ea1b7fd73bd81c9012894a0ae"
  },
  {
    "url": "tools/html/index.html",
    "revision": "dbd66e272ee93258f19da36634bab935"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "94f1913cf0ad066fc59216244ed3240e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0718c3f4561a8ddb4a11ca8816759507"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f0dd76a7daab6dc56c27c50342a36b72"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "82f644af93ade05911c35657e3773c4f"
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
