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
    "revision": "a1fe176f8585b2770c0658cb06c5d09e"
  },
  {
    "url": "about/app/index.html",
    "revision": "b4cfc1940fe796a7920c147b9d6707a1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "db00fe7cf79f92d9975708c0fdad155b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e1acd88d8192c500d75175b50e4c72ab"
  },
  {
    "url": "about/index/index.html",
    "revision": "3dcb1ec1a5a31a7d2c01ecc7ccdd71f6"
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
    "url": "assets/js/15.b8142a3c.js",
    "revision": "7f1f54c81a58773e007d3f0770adc322"
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
    "url": "assets/js/58.7857a607.js",
    "revision": "a46f5785e2193328fef7f3f9fd0cddad"
  },
  {
    "url": "assets/js/59.3b3cb26c.js",
    "revision": "03bdcbc120995f699925c16f5f97ab3c"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.f2d2e484.js",
    "revision": "6e2d11769f0248d0cd82e7015b06f077"
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
    "url": "assets/js/64.c1c32a6e.js",
    "revision": "2cf0602aaa403ec1610651f2e23edddd"
  },
  {
    "url": "assets/js/65.cc1e169f.js",
    "revision": "d3cbe5e35b37c34e08c16cdd28eb8c5e"
  },
  {
    "url": "assets/js/66.b682a20b.js",
    "revision": "a20cef967ed16f363f63d0f079be9c7f"
  },
  {
    "url": "assets/js/67.3a60a60c.js",
    "revision": "f01252c21813d17b50b1f26de69c3586"
  },
  {
    "url": "assets/js/68.0120080d.js",
    "revision": "45d88a34dd17511bb9fd4759aaa8ba0b"
  },
  {
    "url": "assets/js/69.257cc690.js",
    "revision": "6142555255d7d312f01f4bd7e8aa1de9"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.93f96e6a.js",
    "revision": "8f14e929e92070119623a9a1d30ff6f4"
  },
  {
    "url": "assets/js/71.dc7b409c.js",
    "revision": "e459bb4f3fe37424a0b5ef6de738bb3e"
  },
  {
    "url": "assets/js/72.78c7715d.js",
    "revision": "ddb2592c1c8233a390cadd5e1f2b0fa8"
  },
  {
    "url": "assets/js/73.887c7068.js",
    "revision": "5fb4d83fe381b2c156e95c0b30ac6391"
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
    "url": "assets/js/app.7c2bf7ec.js",
    "revision": "fda6593e76530ed53f280c864e81cae1"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "fc3c792fc7099f928cf45439278836dc"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f39a8210090c5d1dd27c473332dbaa1a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "84f52c080a8227fab0f89921560e373f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2a46529092f952df53584a432708e3dc"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6c3a27f5f720e9ec13bd5e38dd308e2a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "5019370c593037ad18829eb951970430"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "835a4cc9cc2135e5cb539e19ea61c0d6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "919a4ad64c854bd7365237da89acdc7d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "70af23be8c86458fa852bf67411a9447"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "1bc6997f3bb294540043ea43bd9c9f24"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9f0d03f589e7e846fd7abdb066d20f82"
  },
  {
    "url": "basis/design/index.html",
    "revision": "489cde87c4e5af64bb450c2338558cd9"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "9d0f0f9ad2762fa8124677af9fb0ca39"
  },
  {
    "url": "basis/index/index.html",
    "revision": "86fd0015b624424fc1ce6d1126733f39"
  },
  {
    "url": "basis/os/index.html",
    "revision": "08a13a3812762075a1b02a35f23bd962"
  },
  {
    "url": "book/index.html",
    "revision": "22e328f4df558bc443fa691daec61ba0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1c03b61321c04613d4ec8500b26ebcbf"
  },
  {
    "url": "categories/index.html",
    "revision": "91b6600414f4f77805aa4e2d87e1e7a8"
  },
  {
    "url": "figma/index.html",
    "revision": "4d0845b29a6d4e62c5400f2bd789d01d"
  },
  {
    "url": "flutter/index.html",
    "revision": "0596089beb015eecccbc1364a82f61e0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1f3b3a82f2376e8960759961c1833b1b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "713af7adf7c2c0111ef4a401419f81c0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6977da9134c14d6ffb57b128b593d1c0"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "36ca58fad6a0728eb7326a906aabb8df"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a802f9d74efc45f766d6d9438a0d36a5"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e01f6eed9e6b667cc8f47240e596a4a5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e6334d0b72bcc5e90b4383fc279a89fb"
  },
  {
    "url": "index.html",
    "revision": "33b9bf20bcae70e1445b970a5450ed0b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "137ca8cde672de3d148125bf25f632ee"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b55ef356a7e4dfa9203beb5d3d8f32cf"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3233d2749bef266a9ceabcc2598875ae"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "82e6a8a2abee04319113e3e6ab6a33c6"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "db418b76f00b21012e9d44db34913a01"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "f3a88bc9c9b21ff22b08ef47349cf074"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "fdc00846adf80577c8d664bfc87ffa7d"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "72e83b328cd55ff03b4c08de8eb95178"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "3966d981db7fbbb26ac02c7438d0eb2b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "f1182eca48de2f9df87e124682bc91aa"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d12e4c6a995e822432c19b9903ed50da"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "af834d31c5b80cc5f5b20b10fa6d9ac0"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "cd8f4bddcab781a8cdc8e1816fa450ca"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "5266bb4dae10ceaf40390b3300898c5f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "886b48e5b4629cf0af0a12221ac560e2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7b62ae230d512f1108e514457fa44cac"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "3605943a77f52eb14ee1c7d78054d0b7"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "74f6f8e084d451b2c69e968dbf733fcd"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c7782cef7487f396f6db84b0d4515cb0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d14457b9ffe216b4ae370d920dd63fe4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6ab018bed653511bad77c08f04d070e3"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4658e09bce130304ea8878344e88fcfb"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e911ac049043e4e1a84ff7ede6436df0"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "e0bf6256d54757bbc32cf3d38dec15be"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3ddae4263a388572307c1bcf11a9e00b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "98e6e11187d8d82a7d532eede75847ec"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2f572d636c29585ecf92d4b6b30ca822"
  },
  {
    "url": "tag/index.html",
    "revision": "1f31e265745a61474d7950282a24613e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "8bb4534ddf0ae4a2b17fc9ba002ec1c7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6894a936aae3b6fc7a3619575cdff554"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d495f9b43941ef4b17cc637bca6a6c01"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ccde72acbe1a901f941e5a4d6bf5cc9b"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "eb9719dbc40f16884d1c46c571677a34"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "811fa73182b72d438abfba6b04cf2395"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7b1b5c1de433e192ef256a2817f91e4b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "9a89ac9011c70f0f2e9d746bc50150a6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fda2aa196f24b66936fe7bf4c2de5839"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d40297712c9ec02d1bd692f327db7d44"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6baf69fe05ae0fb82036defb3cf6eb18"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f0a57dd0a205021e772d910c73ff39cb"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f9594e594234c4809b0f31412b57c308"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "452dc958d84592061de8afcad571a59c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "50278d3a626396cb69c39710bfa78b07"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9b165fb76a7e11ef2494ac9c612caff2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "471e564322b555874cfc392494404dd8"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a2c5479578bd61c2b73165a26fe1d77"
  },
  {
    "url": "tools/git/index.html",
    "revision": "37ac8ed0547c3df4587ae178430f86ad"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "05840db8008259de125ff6d3f501c071"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a960d090c63a6694b282f2c0d7a2df71"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c1d2583640998dd5a6562cdb0a65b805"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "6bd0879e2342765731f1335bf4bdb9d3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "aa7a9ca63cb8699bddc311b82271cf27"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "275ef009df9997d11df48326f3e647bf"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4379ef0c990a2dff6787fc2f20a676e6"
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
