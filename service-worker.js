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
    "revision": "92126e1d8845b2073fc189021f3495ac"
  },
  {
    "url": "about/app/index.html",
    "revision": "55530604f177144e9077a63d4451a1c2"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b2a53b12921c6842b35166f1472d8fd0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9d1ff6713ab5bb1952cfb8584ee68fcc"
  },
  {
    "url": "about/index/index.html",
    "revision": "469bdce8758ec0568f88b199a2258114"
  },
  {
    "url": "assets/css/0.styles.625902b5.css",
    "revision": "cbce2c0a748cf5fab169cab5edef8613"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ed13abcb.js",
    "revision": "2416e7e08846e26e398243e670751221"
  },
  {
    "url": "assets/js/10.d33307ad.js",
    "revision": "21a37afa245bd192b37a63d891a29d07"
  },
  {
    "url": "assets/js/11.ae06c7f2.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.fe636fc1.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.eafd63ba.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.145fbab5.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.5f7b5bec.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.ee6de255.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.dc7a9df9.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.7500f234.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.1064ffef.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.ec1e80ba.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.8f17b6b0.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.f464170f.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.228231e7.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.a85ec7dc.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.5d6d0d49.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.62a6e1e6.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.6ba1e350.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.84791a07.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.25d3a50e.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.1394f437.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.40a2119f.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.e23ff899.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.565bffa6.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.8bebf36a.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.5ea8ca3c.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.938f5118.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.21569c25.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.cfac7559.js",
    "revision": "6c74fc62f958924637d6e9e511446a8b"
  },
  {
    "url": "assets/js/38.6bdf5ae0.js",
    "revision": "52274330fadac5d2321e1ba7079889c8"
  },
  {
    "url": "assets/js/39.cf2352af.js",
    "revision": "842b2443f405c8594fc8e5187ccf7e11"
  },
  {
    "url": "assets/js/4.cd5ac232.js",
    "revision": "39c76a2160a7e88868471fbf7c9e819a"
  },
  {
    "url": "assets/js/40.fd23637a.js",
    "revision": "b1956fb2fad5339ef4d19a7711a266e6"
  },
  {
    "url": "assets/js/41.ab7c1ff2.js",
    "revision": "0615ccdd3b4df282ece0e14d049b0fc7"
  },
  {
    "url": "assets/js/42.779d3c37.js",
    "revision": "1aa98bc13abe3bf7cec384208dd0acb7"
  },
  {
    "url": "assets/js/43.9efe4c95.js",
    "revision": "ee894a939ea49ad29c3a79a936a9518d"
  },
  {
    "url": "assets/js/44.47605ce6.js",
    "revision": "d1550c94d2d404283cf639f381d92a36"
  },
  {
    "url": "assets/js/45.c8d36cd7.js",
    "revision": "99d0773145ed3c0679bfa80324c09683"
  },
  {
    "url": "assets/js/46.15139992.js",
    "revision": "1f7de386b87d176c162f2bb26fba7386"
  },
  {
    "url": "assets/js/47.29c85e31.js",
    "revision": "0c7a23f4d3a2a75e924f4ec130b3bb7f"
  },
  {
    "url": "assets/js/48.1150c063.js",
    "revision": "930dc9746c08bc6d1a55e3b04db62470"
  },
  {
    "url": "assets/js/49.e90c5414.js",
    "revision": "b9070dd100edc85bc5ff08b40dec12e9"
  },
  {
    "url": "assets/js/5.d2a7825b.js",
    "revision": "4445e30254215797c29c8a7473cc9e26"
  },
  {
    "url": "assets/js/50.fec41be8.js",
    "revision": "bcf91a7912932a0a40537a1b2559963d"
  },
  {
    "url": "assets/js/51.842e9f4f.js",
    "revision": "f3a86dc16951b97dea4796b8e0ac337e"
  },
  {
    "url": "assets/js/52.4fee53c9.js",
    "revision": "4674ea35cc0b6960cebf217986c43148"
  },
  {
    "url": "assets/js/53.41717fb0.js",
    "revision": "f37b597cf8b4440df42b073f4eaf4cde"
  },
  {
    "url": "assets/js/54.a446332e.js",
    "revision": "48f3842ec7b21e7c2188175ee0271234"
  },
  {
    "url": "assets/js/55.d7fddff1.js",
    "revision": "42ccc656b379b1ef0a14c5bcc5e38b33"
  },
  {
    "url": "assets/js/56.e697ee00.js",
    "revision": "f279784cf0da6b05ac81ded50927d501"
  },
  {
    "url": "assets/js/57.5b690886.js",
    "revision": "d1cd90c70561f32743dd0025329be85a"
  },
  {
    "url": "assets/js/58.16167865.js",
    "revision": "17759323336d3bcad58ce5f9de102329"
  },
  {
    "url": "assets/js/59.2d144aa9.js",
    "revision": "41bf30ccd7ea6b1af331ab9f11668c36"
  },
  {
    "url": "assets/js/6.52cab3c6.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.0d645063.js",
    "revision": "1dff8038b62a1b59c0f469760928d5f4"
  },
  {
    "url": "assets/js/61.7b915231.js",
    "revision": "89ea047bcf1e38dca3a6cc646fcaa8a6"
  },
  {
    "url": "assets/js/62.858890cc.js",
    "revision": "a017189806810c8225bf55c2f3c30d7c"
  },
  {
    "url": "assets/js/7.a5327269.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.2c0db0b1.js",
    "revision": "6694823c95de7f43946ed6b6380808a8"
  },
  {
    "url": "assets/js/9.b2992e35.js",
    "revision": "166d0005651352c9ddcc510107c3af12"
  },
  {
    "url": "assets/js/app.b155d2c8.js",
    "revision": "84d7e3a98e0f4d8ed91493c3a6aea08b"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "62cc69507e58b933f55785742585eefa"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ba99fa32a676c6d8e64196b932cde8e8"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "88786cafacb57dbff66c8e5dbe88e6b2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ce60336ce9f4a7db5ecb46f81c401a8d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "9e3d48fe547ef14ebed7dff752e6a6e7"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "17a3b58f2628ac93b414cd34578b011a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d1b3e58fa2eceb778c12aff29ec52389"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c0441e937fbf54f3aaf7e703a7ec39ab"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ba6df96bf1c306e817f8e7a9bda55661"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3928c9dcbb9ae8758985740a1c71d142"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a4df9188b4fa74ca43f6f8a32dd90c8c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "28f3912a66c9bd1fd942dca71a7893a2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e0537b62540c09801d0e3049a1f8b0c3"
  },
  {
    "url": "book/index.html",
    "revision": "2f5898dafdf5bb38754f4f2ca4a9c1ba"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5acc2455bbe3555fb323460c0a5bcb2d"
  },
  {
    "url": "categories/index.html",
    "revision": "fe10869635bc989e4a2c39f741af2c70"
  },
  {
    "url": "figma/index.html",
    "revision": "b897a88847ba03f90357578506164e80"
  },
  {
    "url": "flutter/index.html",
    "revision": "3d59c7378d04dbffb4f384a27c2a1188"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "186e1d0a42efc52d66e896fc937b100f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "16d61649ddede689ab418ed924ee80bd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1a5420dbea66089588ac22156f6e580b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5a3065932564b124e154b2b61dc8a206"
  },
  {
    "url": "flutter/t4-flutter-web-deploy.html",
    "revision": "2a23888f5b7a8d49a6793c0ae6eb3049"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "9f0b57a1ddb644d4dae0580e694d9ffd"
  },
  {
    "url": "index.html",
    "revision": "e7940189efeb8917fa03892d6ed53880"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bb80e868f84ab78a937909fbe135ea6d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "2639b9b5f12ff47ae4e01d9835bd8230"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d941e04d7525bf30eda3e2bea7120cc9"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "1052f1971c516601016bfc422c97fd4b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "e832b30bcb93a5a888aa24f317106554"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "022cf673269b181d0ecefb1b6b3e5c92"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "1db4afad4fece3880e8f625a3c59b38a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "6edecdf556ce367c1f7117ce2d0120f1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8529922f2133cd1d1818af717c6e7c4f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "15b970d00e4dfd88ee38af605545795d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "20818896f071e73ebb545d0400c7f086"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "fc68c2001a839a1013672a6e8aada35c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "63129c97b3765bc736913496d25293d8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "366b8bf867999988f86941a9e207f5b3"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "595d741839c003ec77b17be71c46a81b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "6fdda48b4d2506aad2e662fc965ff080"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b1632b87a88d61c184908d47783d0a49"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f930a96d0dccba55f9cea74175769fa0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3727134c1a39778e0d29587b6bf467ae"
  },
  {
    "url": "tag/index.html",
    "revision": "902853c7859db2c361a16adf6392f711"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f5731a96c71223adea783488b70ac7a4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a5d27401ef87e58eb3eced65aba7c11a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "31a8b0cf95eecad863642d5eb1f31c1b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "dc5d49e63f12ba322f3ef96997f9b64a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "eec9af1fc05c5b36e7687ea7cde5762b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "177c7ec7a65c0466a911c63084487751"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ff1f507f5c8968675fe3b1f1f4c68356"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "17cac3fcc5764c94871d8d3881b43aae"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "926741f0780fbe6d4f5b196a69a9e3b4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a6b584fa91a53cfe3784ae34a6599c91"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6f8420666fa6ac5a2e62ac7603529c93"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "aeff66bf45331cc49dd499ba30b0fe36"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0eae606086de55e02b42c9333697acd0"
  },
  {
    "url": "timeline/index.html",
    "revision": "84c56eb9c33f20b5b27eb977d8160539"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8806b4c03128c7c1ba1b96dd67519ae2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4bae3eba8d8b6be570429cde22a5c585"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8089491187c9376cd8c15406df9c5461"
  },
  {
    "url": "tools/html/index.html",
    "revision": "644bb6829a12eabab96e09f3c79ab784"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "77b52899a11e3fb22f4a68bc267fa058"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "bc61723df4f0773218b7ceef9234b2d6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9eac5511d38945666110fea9915bce71"
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
    "revision": "ecf97432d3f0c1c71f25d45113b4460c"
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
