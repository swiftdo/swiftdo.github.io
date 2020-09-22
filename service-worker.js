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
    "revision": "f632be33fff506a031da2b465c5bddc0"
  },
  {
    "url": "about/app/index.html",
    "revision": "ffcffa4c6d4c691771fc77ea2bc80b9a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "221a0e70e73bf777a9c37a4833f399c5"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7183ba70292c42d051f0d0d9cf83905a"
  },
  {
    "url": "about/index/index.html",
    "revision": "e216f89116945713be6b15c4ab5ecdf4"
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
    "url": "assets/js/1.ab3b21a3.js",
    "revision": "2416e7e08846e26e398243e670751221"
  },
  {
    "url": "assets/js/10.fccd2600.js",
    "revision": "21a37afa245bd192b37a63d891a29d07"
  },
  {
    "url": "assets/js/11.7bb56983.js",
    "revision": "f6cc6d13755fab9f4c22373b52a6b5b8"
  },
  {
    "url": "assets/js/12.17f20ad4.js",
    "revision": "1f91493bb9160279cad55c1f506b8abf"
  },
  {
    "url": "assets/js/13.81c1f879.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.d3ade443.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.a135ccc6.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.1c30bf1c.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.a0a779df.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.f0e594d7.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.ef7b87f2.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.cbbf00f0.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.a0fda9fe.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.cb9919af.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.446c7abd.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.cfd9171b.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.336f6c5a.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.c77469c7.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.62ccc67f.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.9cca3e26.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.339b73eb.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.83a941bf.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.a7a5eea8.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.a29e802b.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.cf799455.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.fd886188.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.be58dbc2.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.e44a5800.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.1df174df.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.7cc0da14.js",
    "revision": "6c74fc62f958924637d6e9e511446a8b"
  },
  {
    "url": "assets/js/38.e46773b0.js",
    "revision": "52274330fadac5d2321e1ba7079889c8"
  },
  {
    "url": "assets/js/39.cc089b79.js",
    "revision": "842b2443f405c8594fc8e5187ccf7e11"
  },
  {
    "url": "assets/js/4.c8ef4a1a.js",
    "revision": "39c76a2160a7e88868471fbf7c9e819a"
  },
  {
    "url": "assets/js/40.0c00d8f9.js",
    "revision": "d02154a17e02ede5e8fdbb3920b7de9e"
  },
  {
    "url": "assets/js/41.28413689.js",
    "revision": "613d3d5766bacf14118fe499524a4029"
  },
  {
    "url": "assets/js/42.ef918488.js",
    "revision": "1aa98bc13abe3bf7cec384208dd0acb7"
  },
  {
    "url": "assets/js/43.c12c2d37.js",
    "revision": "ee894a939ea49ad29c3a79a936a9518d"
  },
  {
    "url": "assets/js/44.427d92f2.js",
    "revision": "d1550c94d2d404283cf639f381d92a36"
  },
  {
    "url": "assets/js/45.3ec861cc.js",
    "revision": "99d0773145ed3c0679bfa80324c09683"
  },
  {
    "url": "assets/js/46.be90c2db.js",
    "revision": "1f7de386b87d176c162f2bb26fba7386"
  },
  {
    "url": "assets/js/47.38f383a8.js",
    "revision": "7d9cd74b55f44212136e9eee9f41e6c4"
  },
  {
    "url": "assets/js/48.83dd0cbe.js",
    "revision": "c5fcb40fdd73679e76f0268dd3c038ab"
  },
  {
    "url": "assets/js/49.e3070a44.js",
    "revision": "b9070dd100edc85bc5ff08b40dec12e9"
  },
  {
    "url": "assets/js/5.e5fc5a13.js",
    "revision": "4445e30254215797c29c8a7473cc9e26"
  },
  {
    "url": "assets/js/50.bf66e42e.js",
    "revision": "bcf91a7912932a0a40537a1b2559963d"
  },
  {
    "url": "assets/js/51.e76255e4.js",
    "revision": "f3a86dc16951b97dea4796b8e0ac337e"
  },
  {
    "url": "assets/js/52.2d98b4a7.js",
    "revision": "4674ea35cc0b6960cebf217986c43148"
  },
  {
    "url": "assets/js/53.22cbd5a8.js",
    "revision": "f37b597cf8b4440df42b073f4eaf4cde"
  },
  {
    "url": "assets/js/54.221eef05.js",
    "revision": "48f3842ec7b21e7c2188175ee0271234"
  },
  {
    "url": "assets/js/55.e9377043.js",
    "revision": "42ccc656b379b1ef0a14c5bcc5e38b33"
  },
  {
    "url": "assets/js/56.f8f4941f.js",
    "revision": "f279784cf0da6b05ac81ded50927d501"
  },
  {
    "url": "assets/js/57.dd9f4642.js",
    "revision": "a68b1130bf21b82c1db0686597adb646"
  },
  {
    "url": "assets/js/58.238aa336.js",
    "revision": "3c9f1364a4bdc3062579ab4464ad4c45"
  },
  {
    "url": "assets/js/59.2df82bcd.js",
    "revision": "6aa15caafad7c3fce89e1637cf2d112f"
  },
  {
    "url": "assets/js/6.74959d39.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.620f7fb1.js",
    "revision": "5022c1c1f2fdf4f7975242e5d3c6cbf9"
  },
  {
    "url": "assets/js/61.c0104d0d.js",
    "revision": "6a936b3ea7ec91deb52a209fbd161ec6"
  },
  {
    "url": "assets/js/7.8fe10757.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.4b8f45c8.js",
    "revision": "6694823c95de7f43946ed6b6380808a8"
  },
  {
    "url": "assets/js/9.a8d6f92f.js",
    "revision": "54b23bb8a66f10665dc38808fd493187"
  },
  {
    "url": "assets/js/app.fdc3ec07.js",
    "revision": "a3cd6e778fd6cd18703f2602476f1703"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b5c5d6c182051a73995c3d6d3a899f20"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ec3ad39e819f7db29dd781c02bef615c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "52a81f56d4bcaa26e48b27ae564419b2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "731a68662fd1f80fd984c7b484d8e8df"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f2af87ac767aebfe28bbb31cbc883446"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "cdba9342088baa1134657490e0138197"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6bf95761fa4d3a477efcf27422eceb79"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "738e5126ee74da2f7a154a133304a5b2"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8c2446078027f0ed1ad6098cd97bb9f4"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ff3b288e40858d93840d79fa50fa1058"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8558197d2ff26b9e93a7e076bd85790a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6b9ead8341294d2ed1b16bdb893fe20b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "872a75c256e1b6b36360f59e773a1d1c"
  },
  {
    "url": "book/index.html",
    "revision": "b88cdb81e90162139ec0222d90e00205"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2c3398996e2e00beddc7e750df59bb93"
  },
  {
    "url": "categories/index.html",
    "revision": "d64a65736f846e78ffc80da392a3cc07"
  },
  {
    "url": "figma/index.html",
    "revision": "24118fb56cb8463305a925867f4a0e44"
  },
  {
    "url": "flutter/index.html",
    "revision": "f5e91427bc78b3fd51c0304b88c720c4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2c769063fb520b2e3c6fe27bd4f19b34"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "f6a103f4d1a58b3f541416fba1d8b1dd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "92f42243bffe357cd490a5f2d3b6ee7a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "a8f86630f3013aced4c1774c5ea00632"
  },
  {
    "url": "flutter/t4-flutter-web-deploy.html",
    "revision": "1c45dc0f175ae509712aed4dce5dc1e8"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "971eeaca5ace19100a496e673ef33f38"
  },
  {
    "url": "index.html",
    "revision": "edfd29d8f8cea81c4e971707d2823143"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e2b9799989d05457aa074fddaa1a3b77"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8dc6ff9e42b86f7ed0da8b93607984f4"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "10fb8542b3a74e3ad512fb321c713aa7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ac406efac71ad64e316278c5a0f1c339"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "e9f9164e9541f533693d6706e8b1a1c5"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "7102f996ac34f2ecb896209ae15b87f1"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "746fa9429b32ab7f069af2d6b01019e9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "816341c3195c23a1cea47a35353cfdf7"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c2d74ea8f8b952b2a44a90d9cee41601"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e10f8d64ae04a692ed8cd4ce40b559e9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "769b9cde7013227ce657750fcbdbdf3b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8980e9ee9a71b1ad67d2772ddc7896a1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "1c755ca95a3636e861a1455c64c140b6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f8edbaf95d28c3b435238c60082d0bac"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e7ee5fee6745add885b38ca7ef4daeb5"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "59dce100b9801e595d9b04c7a5e8c168"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "0a27f870382e17c31d9c95a5aee2138f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "700576b7452a1dd2cca74cc83b7c1814"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c5903f6ed9a04ac7470415d45afb7115"
  },
  {
    "url": "tag/index.html",
    "revision": "13058e5c17cf8669f7f0dadbd5b4a7c7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9d6fc12528e6a6baa0301c60e377e541"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fe76b01fc912f81ea33d6f150b45dfbe"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4ae632d2384ea09b62ed61844a000f31"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e47b723dd3d39c1a88b3f8db0d0ece20"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "72b524bebb3a2f807c6de1f8ce457a5b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "eafd70281afa14015809ce7c419604fc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "613b624321953da789eeacd6ff9f5b25"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2ae0a970049e65f402dc65fbf3adebc5"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d66462a796fbdc90de9793137f47389a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1707022b71eaf05daec1bb5af8c8bb63"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0f2646a235632dc66f237508714ad068"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3294b90846b92334321844a9fbe25399"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bcd76bd5416070d79c30488c0c79085b"
  },
  {
    "url": "timeline/index.html",
    "revision": "85db98a80f2f45dd3cdfbf975d6cc4d6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1e6762d76dab87835fdd3f44e79b9879"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "786cb27fae5afba39ff45214e6ab03ea"
  },
  {
    "url": "tools/html/index.html",
    "revision": "859a0affff002412d2399841737c74bb"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6a87262d0f6bbdb7054d2bc50300959d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1e5bc0afabf3a78c8ec751567da8ab35"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f398edf05a7ffa4ef1c384ecbfafb9ce"
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
