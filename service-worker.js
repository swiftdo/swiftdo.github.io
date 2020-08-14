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
    "revision": "e7a9103255e50bec2084a9d8f6dfc5fb"
  },
  {
    "url": "about/app/index.html",
    "revision": "7f9a52ddcfa10a62bade3bddc41c10a3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "dff0ede164a1cc0aa27d84209fe19d08"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "fdd7704bab1460498da5c7a124c60466"
  },
  {
    "url": "about/index/index.html",
    "revision": "768f34996792e311b601fd1af80c0ebe"
  },
  {
    "url": "assets/css/0.styles.39a5b3fe.css",
    "revision": "b867536469b2ee28cb88d26f4ef7aa1e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.bf4cb53b.js",
    "revision": "c0f0fb2618aa77ea17f74c2074fa96e1"
  },
  {
    "url": "assets/js/10.bc69588d.js",
    "revision": "759269e56ee985ff89687efc5ca14d20"
  },
  {
    "url": "assets/js/11.4737e7cc.js",
    "revision": "42ebabdac185c33f56d7a0bd5af559af"
  },
  {
    "url": "assets/js/12.a5c8d812.js",
    "revision": "4f280ee8e887e27bab449ff80147375d"
  },
  {
    "url": "assets/js/13.4035d729.js",
    "revision": "8962171f2856a5afe002f2e60bf6e302"
  },
  {
    "url": "assets/js/14.582c9236.js",
    "revision": "e3cbb319e52df71d95562a7295b347f9"
  },
  {
    "url": "assets/js/15.c7aceabd.js",
    "revision": "0609a632e7b433992ef21061d937649a"
  },
  {
    "url": "assets/js/16.2a615f1d.js",
    "revision": "7a559342e32a06cd278593fec3b683fa"
  },
  {
    "url": "assets/js/17.dd5e5e68.js",
    "revision": "0521860cf1f3ee488562d53cf1ea0bbf"
  },
  {
    "url": "assets/js/18.e4cee0c9.js",
    "revision": "4504ac638613168aa5c8d0a4c947e29f"
  },
  {
    "url": "assets/js/19.d2a6cb00.js",
    "revision": "9bdb3bbb6e82d6a7c37778b099ebc623"
  },
  {
    "url": "assets/js/20.36281c1a.js",
    "revision": "335eeb368d6289a05af060b79de7b439"
  },
  {
    "url": "assets/js/21.dfef91ec.js",
    "revision": "3d4a06101ba75eeedc221b869ddbd63e"
  },
  {
    "url": "assets/js/22.2468b664.js",
    "revision": "07782c424683b5b36bdddb8208e15049"
  },
  {
    "url": "assets/js/23.3ce3c2a7.js",
    "revision": "abc6f31f5b82c747a67b00f286354e1c"
  },
  {
    "url": "assets/js/24.75991135.js",
    "revision": "cbb9699b80fb2951aa1832d9da62b0c8"
  },
  {
    "url": "assets/js/25.267f7ca7.js",
    "revision": "8bba85b95e8c3fdaefa3004388ab97da"
  },
  {
    "url": "assets/js/26.05085426.js",
    "revision": "0a449c77146759a2c58042cb79d876a9"
  },
  {
    "url": "assets/js/27.c93a934d.js",
    "revision": "cb5b65e2ef7854bb47380fe7a17a9025"
  },
  {
    "url": "assets/js/28.4b5b34db.js",
    "revision": "590356f59d6c2a36b2e15e0ab7e061a2"
  },
  {
    "url": "assets/js/29.3892535c.js",
    "revision": "6b92312868dd32247250cfa813831bee"
  },
  {
    "url": "assets/js/3.c5c69ad1.js",
    "revision": "4c28f4b989709616ad27e3ce1b7dfc31"
  },
  {
    "url": "assets/js/30.22840273.js",
    "revision": "62ac039db0e5a43cb0e0bd54132aeb7e"
  },
  {
    "url": "assets/js/31.3b09c03d.js",
    "revision": "e629cd6fd67cd814046327bcb6507147"
  },
  {
    "url": "assets/js/32.bc2e1b5f.js",
    "revision": "588398a4dc3c914962a0135d9616d2bc"
  },
  {
    "url": "assets/js/33.b576a964.js",
    "revision": "fd74fb87d57325452eefc3832db68d94"
  },
  {
    "url": "assets/js/34.f0db86bd.js",
    "revision": "6041a61d3cf62cde66cec524089c1047"
  },
  {
    "url": "assets/js/35.052d9535.js",
    "revision": "0afc9987726228792113bae2e8c39238"
  },
  {
    "url": "assets/js/36.18c0758f.js",
    "revision": "3540843d22e41b165241f76e40aa3fac"
  },
  {
    "url": "assets/js/37.3bdd0526.js",
    "revision": "5e17dd3249279dd94ce38c7fc007904f"
  },
  {
    "url": "assets/js/38.1d9f4f9f.js",
    "revision": "1633d86ee702ab927024345317de7fd4"
  },
  {
    "url": "assets/js/39.636b39b7.js",
    "revision": "f122ba8d6572924d4d81829ca864a48a"
  },
  {
    "url": "assets/js/4.abfa018d.js",
    "revision": "097593dc8bf932f21249883d7b3af0c6"
  },
  {
    "url": "assets/js/40.cec4f5d2.js",
    "revision": "7479d41101f88b8f442743fd1e8aa454"
  },
  {
    "url": "assets/js/41.a34a3da1.js",
    "revision": "896ef09f22306164346f206eae4d157e"
  },
  {
    "url": "assets/js/42.3fcfd3b4.js",
    "revision": "865f51c2682e204598701b64a7668120"
  },
  {
    "url": "assets/js/43.911aef1f.js",
    "revision": "9c20c9e32f9f3f11608de551c4cdd533"
  },
  {
    "url": "assets/js/44.187bbf50.js",
    "revision": "8105d12f4d33b42b43d8293a2a98eae2"
  },
  {
    "url": "assets/js/45.aad4c0ac.js",
    "revision": "675914a79ae56a9fd6f75d57c9620748"
  },
  {
    "url": "assets/js/5.dcc4e78a.js",
    "revision": "999121ce119be37f9b53b8793dd7d482"
  },
  {
    "url": "assets/js/6.2f5eb645.js",
    "revision": "8c22eeee66f2a9a89347b8b0b0e67c99"
  },
  {
    "url": "assets/js/7.f4ea7564.js",
    "revision": "be161682945a63e4cf854dbcad89abc0"
  },
  {
    "url": "assets/js/8.7487a716.js",
    "revision": "c956c063af5279da119947e4f4978140"
  },
  {
    "url": "assets/js/9.bc881603.js",
    "revision": "6d68d3851afef38896877cde5c8f5243"
  },
  {
    "url": "assets/js/app.53151a06.js",
    "revision": "74c45e00951b9df11f444b645299857b"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d9cd5b2ca1e286f973f5399697b0c712"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "16366ef8b40cfe99a9757fec917582f0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "4662ba50e4a1350a9c912f037dca4019"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1c5201e63849bf06f80f08babc02c9b1"
  },
  {
    "url": "basis/os/index.html",
    "revision": "72b306494e4e34c8e56cb5eec71ecfcf"
  },
  {
    "url": "categories/index.html",
    "revision": "a5015ae2d4476af89560b2f98f234a76"
  },
  {
    "url": "figma/index.html",
    "revision": "34318e4fd221ce93605172f90df6f90b"
  },
  {
    "url": "flutter/index.html",
    "revision": "5b3851507d00bdee51771554ab06391b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "fc3fdde4ddf0bc7562db89b1635578cb"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9cecb4b101dd8f59ad9d0fe942f5a9cf"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "79626373cee77f9d481c60685df5c77a"
  },
  {
    "url": "index.html",
    "revision": "fba198c5ce1b0c2d81d13e173b028fe0"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "142b2ba5c76b39273ebcd14bc78643a9"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c0e54b3a24fceea4c6fda7f8423de3c1"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "3e80a4bd4286cd76f33e36fbea0ded83"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "19ad7e58405367c5ea0faf046d7deb33"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "0c2703fccf23c6bba353bae40c303fc1"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a29ba3662d94cb905a221400d218d037"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "6c0a2363fb296a113d8e94fae96a0900"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "25c6021e7ce104f4a726db5975e59250"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "569dbd8895054b65a78774a691d5ea16"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4f2f279e6a2c42f6cd7d251f0b0daee8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0d4a30aeb799e7fd588077ad37372d1c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "381736559ef381914e9637d4ea716fd5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a745207b749962c0ce271f9ea3c93028"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9004017ab88cc01608c4c2a4cbd92053"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "93e540fb3587c9c631b7d9fd8e58f35a"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e26d2237547f5d18740f8df81bd2347"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7ef9ad9ae8798cec135b68021e41ce24"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4e27417d82f637f61c36553d58803ba7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4f4adf773c3be69bab00628c4d728de2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c99d7160ed3b97a90c79c84b88393969"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "940f0561751f0c00e9876da15c01030b"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
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
