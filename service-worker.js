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
    "revision": "b1cdc945fdb3c655e228cf7ac7e5b38b"
  },
  {
    "url": "about/app/index.html",
    "revision": "d9e4e01125a77fb487b01efd52a2510b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8a123c7edf97492e347dcf7d914cc645"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "57ae57f61462433a245680c610f4d71a"
  },
  {
    "url": "about/index/index.html",
    "revision": "b820dadf088c8437bdb47c3e43a399a8"
  },
  {
    "url": "assets/css/0.styles.2cea3813.css",
    "revision": "c234890149bb6045f7b313554fc21399"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.61f9690c.js",
    "revision": "69a4efb389d3f8ea8550d7a04c553e3b"
  },
  {
    "url": "assets/js/10.45029e95.js",
    "revision": "516f705edab68410b8c8dec3ab349800"
  },
  {
    "url": "assets/js/11.280a42a5.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.77c00848.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.e239ad1d.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.c694108c.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.3036377e.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.b7343d36.js",
    "revision": "a12cb5a77a63c31274d14514d655445a"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.5dfcafab.js",
    "revision": "cb2cec8ff21e545101ce6659b0224adf"
  },
  {
    "url": "assets/js/19.4ab3834a.js",
    "revision": "f7e759dfd98ae862cb54af258b4fa790"
  },
  {
    "url": "assets/js/20.ec71b6de.js",
    "revision": "2142e61ce3a4678c512495ba9f0753b8"
  },
  {
    "url": "assets/js/21.8165eb23.js",
    "revision": "75b3701ecb949f4be22c9e9c1b0a7c3e"
  },
  {
    "url": "assets/js/22.de43d5c6.js",
    "revision": "29b04a898323e80ed93bd51221990182"
  },
  {
    "url": "assets/js/23.99f46275.js",
    "revision": "949947cac317a2d1026336e5aaca4b72"
  },
  {
    "url": "assets/js/24.8fe9e24f.js",
    "revision": "8350624757ad1075f3ea8cd96648310e"
  },
  {
    "url": "assets/js/25.082c9b55.js",
    "revision": "c5d5e1d17a2503c94947dca73a18b51b"
  },
  {
    "url": "assets/js/26.d879d9e3.js",
    "revision": "3ddc87bd4bbc99d736b1ae26985f2602"
  },
  {
    "url": "assets/js/27.5cade51e.js",
    "revision": "cd95ade72ab419e90dfaebf487c3e914"
  },
  {
    "url": "assets/js/28.b57cb0a7.js",
    "revision": "4336895db8a36ef0b245ad283f7f43af"
  },
  {
    "url": "assets/js/29.744ba7d3.js",
    "revision": "903ac958547de308585aefff59338264"
  },
  {
    "url": "assets/js/3.27d22ab4.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.8d1d158e.js",
    "revision": "f932fa1dbeb5e7583660170452828dec"
  },
  {
    "url": "assets/js/31.a8ae8493.js",
    "revision": "00d24d5a8c6794c2a141906be94533eb"
  },
  {
    "url": "assets/js/32.d676c35b.js",
    "revision": "a49531424f2d0f07811f6560056d8586"
  },
  {
    "url": "assets/js/33.44d38085.js",
    "revision": "b134b01a93f6fa6f56912c293e43d890"
  },
  {
    "url": "assets/js/34.cf8a5dc5.js",
    "revision": "a1b60a66824cf91ac55c150b9954b34f"
  },
  {
    "url": "assets/js/35.ec41a1ad.js",
    "revision": "46275e1da290458952cae7108d0e4b0d"
  },
  {
    "url": "assets/js/36.76920831.js",
    "revision": "89d70f48f40bb9277c11c660731514a5"
  },
  {
    "url": "assets/js/37.96a6ed8b.js",
    "revision": "9da0f12f89b3722a095a15e6db0bceb0"
  },
  {
    "url": "assets/js/38.44f6dce3.js",
    "revision": "41117089c4d82cfa3e20c6f90a841497"
  },
  {
    "url": "assets/js/39.6068feaa.js",
    "revision": "2807d26487942b4bef32ec0a1a2d2cca"
  },
  {
    "url": "assets/js/4.a114e465.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.8378b82a.js",
    "revision": "581654d2bd07121264427c0e6bc938d0"
  },
  {
    "url": "assets/js/41.9fc204f2.js",
    "revision": "74e2ed878e9544b3ab63741ee09bf391"
  },
  {
    "url": "assets/js/42.6a678ced.js",
    "revision": "1740c76268ab8ecbdbc4dde6f44baae1"
  },
  {
    "url": "assets/js/43.9dfb404e.js",
    "revision": "c6e3b88883712f0b3dd7453849dc8a22"
  },
  {
    "url": "assets/js/44.8a2cb28e.js",
    "revision": "dee71d7ba0359881e92e920c02bb4b94"
  },
  {
    "url": "assets/js/45.459e4652.js",
    "revision": "272be8a56c4172f36d3a70837cc8443f"
  },
  {
    "url": "assets/js/46.63dfdc72.js",
    "revision": "578ee0fea1c8a070fb5e61ca6b76cefa"
  },
  {
    "url": "assets/js/47.b1da19c9.js",
    "revision": "01bed1363e1f35e47628a0fb1ecb35db"
  },
  {
    "url": "assets/js/48.87769013.js",
    "revision": "41bf836b23bec018b9abb5e120a6a681"
  },
  {
    "url": "assets/js/49.0e64674d.js",
    "revision": "6e2bb33df5b4fa799528f86ad86897af"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.299f737e.js",
    "revision": "1c0efdb785c3f117b165962c9292cc9f"
  },
  {
    "url": "assets/js/51.f6570fcc.js",
    "revision": "5b6ebbe2527145db9b228b09523a73c9"
  },
  {
    "url": "assets/js/52.3147c6fa.js",
    "revision": "5e2ce791ae37b00ee5e494fcd34abb56"
  },
  {
    "url": "assets/js/6.07d8db56.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/7.283471e1.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.795c6f1e.js",
    "revision": "f90dd3cdb69ebc78dd8d579aedece24c"
  },
  {
    "url": "assets/js/9.3f6321ab.js",
    "revision": "f9a7bd01315d284abb291583164aa5ac"
  },
  {
    "url": "assets/js/app.e71609b1.js",
    "revision": "8de48a00a247fd19ac689b97039131cf"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "075922dbb4d89631cb7ea12ae7dddd54"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "7ef6876195a5a2e9fa38b852845b1a0c"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "f9b43ccefdcfe0dc797bd06e63288beb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8d7383df32a51985d52f0be945e31d26"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f24b3542160459c7ab5767c2353e0144"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "94c3dae5c3a54bf8523fd13b8dc94e10"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6cc8e07b460ed109f6dd359e281af4f9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e54f572b9085e2ba32a2a5b71ec97080"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "80efea5e5ba11dd585ce41bccdec0936"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "c1e694ef68b4fb9ecc1f6749bd29746f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "5160f003f751df5712f93595d34e5f93"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7c63be864d94196e4eeb1f18f58f6552"
  },
  {
    "url": "categories/index.html",
    "revision": "552c6850ae8f52a57ddfeeb9348bc1f5"
  },
  {
    "url": "figma/index.html",
    "revision": "79c315c94d7d8bf95c9c77859ed1c935"
  },
  {
    "url": "flutter/index.html",
    "revision": "90e8cca5c816ed56ba425b59b73d66ff"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "86eeb0ad00d89b4ab760cb67a7832d37"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "65cd8ff4c2e2ee19fd860a909e1be0c6"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "fa6b8e0cd67d08499d4d86d63677787d"
  },
  {
    "url": "index.html",
    "revision": "1303c7758c6812d4ce00fbf74bd682eb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b17a7da610aac898e568e92f27e02662"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "670722054f4f070ae14cdeb0b1c56433"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "266338fc27655246efec3d7f1943cd02"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "8ba6dde05d0666f7b8be64bba6e508ec"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "7800ca8db875b0f87d2ce3e17c86cda9"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "8a29ad7057b003d584a03c09d640075d"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "56151639f1944fb2bc09c32af9f3a9f6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "537f577c5ae33775fdac03334abae8a5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9634986e2c9614ffd4abaf71356b4547"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "10c98afff24d6bec8aeec8727f0f7686"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f0fb21b335db75ec0596fb84657bd2c5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9b5809f0103dea41edabc71422abd311"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "332c391813c7fab62adf4cb7cf2a2106"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ea85a98d84812dab4840b3931de0ea96"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f723ce22ae058b764266e99972155b14"
  },
  {
    "url": "tag/git/index.html",
    "revision": "48cf5238aae019993455d9838956a69e"
  },
  {
    "url": "tag/index.html",
    "revision": "7fffbe17b91717d72e356b82fecfc95f"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "116fc975a0aeaef53bb122c8e5ce0adf"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "2082ede38ccb9cc7c03e302b14b2a53c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3e34553f2a0047cd5eb2e7ae3a92524a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2dbc307c1c6da68c9da98598d43344ac"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9bb46d28e2e26e8a42b31986fc5b3c0b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fa96511cb2eaf8af8c574cf51a1e1d61"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "67a3628aeeab6489e7142b07e3935f66"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2cb16389beb09538f930607b5e4aed49"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f98395a59f0aa55be3214d6f82a05d2b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a795cddac91a9c3342443d6b4869e285"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "843b844a7cf8c152960cb0e8177abbfc"
  },
  {
    "url": "timeline/index.html",
    "revision": "71382eb9fa84c8a0c846e9f34870a0ec"
  },
  {
    "url": "tools/git/index.html",
    "revision": "190853ee62e7eb9290ca4a5c31c1b02e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "cc2ff4525b242a9bb4ad03f3f0951a00"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "58caaf27bea2b7b74d1af239b9a0f5c8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e4c9e41ae704278d14355b9cae9bc166"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2bece9e87e88381ba7678e125cda5690"
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
