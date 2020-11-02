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
    "revision": "a1f83a9dd64eec843fdda3a8b5268d3a"
  },
  {
    "url": "about/app/index.html",
    "revision": "6c4261d65507a023569ae66443d16e7d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e512605a91f6b1902746adbc17faf645"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d43e27eec40890b18d818d375b63906b"
  },
  {
    "url": "about/index/index.html",
    "revision": "e4d739f615ef21741463b04c1b7c41fc"
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
    "url": "assets/js/65.7f624179.js",
    "revision": "4a0e54cb6b64037c6370510f5cef90df"
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
    "url": "assets/js/71.c8a2f0e3.js",
    "revision": "5c34d46e823964d52a768ff818d0e9f9"
  },
  {
    "url": "assets/js/72.78c7715d.js",
    "revision": "ddb2592c1c8233a390cadd5e1f2b0fa8"
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
    "url": "assets/js/app.3ede0f84.js",
    "revision": "87649954f51c74b889b6615a95d09a0d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "82fd5ba16694ab4ee8f73d1384582504"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "bfb533a179f3d5fc918e868b8a539c41"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7acb532d7afd375a0bb38c1fde77869f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "525ea4a7a3a06ce60e96e61bacb23a7c"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "848f0294f044b9c5202f63e224319166"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ffa3209077f7291f19b804684dd6db95"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "fc42033e0b7c74764efd81ebb35019d5"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "507544fa74d78d798279fac6a7fc23bd"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "12ec8ad00e89d9e87e2049562261c874"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "bb2b970b3445dad6cbf44580e8416cab"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d17172124f56e931001d226c2c714b3d"
  },
  {
    "url": "basis/design/index.html",
    "revision": "f76d23e297d6422510824cdab3fbc15d"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "396b6ea25f0846e7977a9027cf5e2351"
  },
  {
    "url": "basis/index/index.html",
    "revision": "3be303efe3359e3050d61de6c389fe4c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "19a36cff747c3480b0551339dd9bbb1a"
  },
  {
    "url": "book/index.html",
    "revision": "f703460321032f27823219fd864cf4d4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e5ad02864fb07edca5bf8da3119cc72e"
  },
  {
    "url": "categories/index.html",
    "revision": "d4be3edc68b158da589383fdd7e296ce"
  },
  {
    "url": "figma/index.html",
    "revision": "e2aaa6f619f3c7ae082400f8fdbc7429"
  },
  {
    "url": "flutter/index.html",
    "revision": "8418c264e148850d500b7fb3a91d80e6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "92ac152f8cb0d95468eb0446a83e3689"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "14cc72e669c319e89df214143729ca54"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1d32dc8b4076d1b125e2955b7b9ead70"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4cde40f54417549c51520d961912a4f6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8ca31d18183ed5a432095ee36c0280ad"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0465e73b33b36255c314478a1fb42714"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "188b39d9c745b4d2a2109b6a8493d588"
  },
  {
    "url": "index.html",
    "revision": "ea726190d529206b0019ce8ca3002beb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "135e04acd44422551a132166540373c6"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ed2be8541ef61be10388bf8d1a384f59"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d578966dd5d2e4309313025e505b45f5"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "2b07b67434a3989166e991ba6f840ee7"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "8a4365a879e33e7eaa3d3d83018a2c4f"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "d275cc1555d40b3608f7ae4b46469640"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "4077fd4428519c25370c91f42dab6333"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d8679247c0a67618a6b482ba069388d6"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2a51937fb9651c9a0eb74dfa841e956b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "2c31ff6ff67de7f04abb6dd4939ecf3e"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "56d5c489f88d8e97fc470aa243c2169e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c2e68fc7a77375d4e19d89d3bf787534"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "53db5c29b848c4997a3afb67937be8f9"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "b0fc97129e87643fd396c0b88505e2c3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7abef8f60a564c2c04a06bd60f506b85"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6e1d8f2c295f1fe6aca70299b92f89a2"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "cbc2f403ba9fdb615d09e12b8713b1cd"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e0f261f3e0029165d66b585923f85270"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b9294565e6caf3aa9baa1158735cf846"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "23a170c403c0dcc331ddd3c9171e4308"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f8752581cafbc7178094e2dcbe91ad6f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "218b78f27c909f62b6afe58ac3a513bc"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "fbebd5c79fb048117e538e8379293e62"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "bd55a7212cd16c2c9f3bd35716e71b8d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "921ed7cc185934a14da8344ad7b49bc9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9be116c7711f09672806b854783676cc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "587468525e294e4654a8caa4440aa2b2"
  },
  {
    "url": "tag/index.html",
    "revision": "594db8f0ccb0f34804b176a6c2cd89bf"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e4a9165ebadfa6eb3b651157a5b73271"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f34d1d5dad512a8f765d57b7c087a305"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bdc4be4f3a68652e773adfccb7cb32d5"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "cf2e80dc8834000213ce706f57134251"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "63e36f215b92f05a3a03af25f2eeb69b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "9372218bf075071d4d5ca23b3c7edc1c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5bf12116622f9bc758029dd673414902"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e50cffa156f60731f0e67ff146f2b42d"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "dab008b545bd5a807f3bf5c5f41f6f6e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c89170279aa7f39a1ffaf820fe2b7ad9"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "94aba29d273acd373cdd3e889cdebda1"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4c656482f41d7d2396dfc1ada4de7140"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8e35095fafdd46ffec8155829437fc94"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "881bd4d708e0e8306d31e9593dc26506"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c63ada217914feb724da55276c12adfe"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "08248ad4995406500bc7f27b9d62d032"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "5e1350a9d386b73a33e7784b3868daff"
  },
  {
    "url": "timeline/index.html",
    "revision": "6067615f72cb4867728b46745c56abb0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5f91e3c2c8c6f90ec361e7073e37fd4c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a85023c2f99fb1e7bab6cfbc045059cc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "50becfa08aa5fe78e749ef5dc74a6a3a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "480133bece6e84ce373e6c97f894f7e8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5b333dfad86dc3a98030283e024f3f45"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0d811dd8cf5eea637bd86863e809d17e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9148c3701a32a3a3182397885a5b9a65"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "092caa9d0eb00bc619fa089528f9f5aa"
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
