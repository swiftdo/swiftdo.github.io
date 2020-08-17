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
    "revision": "a43f3bae46f6237b7bb7c76d878e5623"
  },
  {
    "url": "about/app/index.html",
    "revision": "01299c3d22bfaa2df72f609c22769bec"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5d66bb2c279f0009f5b6ac4573c3cf61"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "759980801bc5a3d5bdcd53c4d1c8d552"
  },
  {
    "url": "about/index/index.html",
    "revision": "d4946ceb8ed9cb6e77e0cea39878d493"
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
    "url": "assets/js/22.0d09f737.js",
    "revision": "38d5af4423a01ed4b811b359b655d10f"
  },
  {
    "url": "assets/js/23.de67fc42.js",
    "revision": "8de4a8f54a6bf46080ff4e0c6ffd3c33"
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
    "url": "assets/js/app.b1e877ca.js",
    "revision": "52701ca737c6091c2d4616a25dea4960"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "36ca287d60ecdd5bece555d3b4dda2cf"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b612ec583298852bc413100794170005"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "37ac8acadcf2459ab6e49927edbe0f70"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "bd5dfce39edc9fe9e2980cd260992d35"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f739b14d8d78b42bc9e33bdaa49db338"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "99732f139f7c33da81ec1c2f8c652b47"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "355e14b915530a937628b66b47a3ae41"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "7e02b41e8082a04354ef7a1d3784611a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "452f41470c1a36744b67bd296978e362"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "41cf0d04ec62e3ede9d433c280a1cc02"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8c5257f9716b385889c54e685e84a457"
  },
  {
    "url": "basis/os/index.html",
    "revision": "820a2ef17b05cb6e4648819071bacaa5"
  },
  {
    "url": "categories/index.html",
    "revision": "afe34786068aff084ea240e4f87ede3b"
  },
  {
    "url": "figma/index.html",
    "revision": "42e881c49e0dcb560aa2ac1840f58507"
  },
  {
    "url": "flutter/index.html",
    "revision": "90e4e08b1fd7981478929226e66c6c54"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a0997dbad96e20bd3abdb743c93e5c63"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5147f80f5856fdc75ab5bee4595a519f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "ec9987f9e8c68b8b6813f8309eb10f1b"
  },
  {
    "url": "index.html",
    "revision": "0064a739a09e943d286fc475913eeea9"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a3d9074110a5f28d6c84aab932767e18"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "19a16d4b618cc645ebcaa36f99783ba5"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8746c5b57cf842ad628a2066a87f9d9d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "0c7c59aea790f9ff29fedb9d55eae8f9"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "680ab6d519932a1f3021b19cfeff485d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "cd855eb803a02670cbbde5666324506b"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "80c83ad715d18a1a3e4abf1c1e0acc6e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b7d840299de6d59afafdee3f5a2e8fb5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1e084e188ecdf8ea9e370ac6a5e725a9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "bbee5bf3878d192582f6579b106fd40c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9439319754e52384c205636bbc1fd5fa"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a6fd7f1191b754505ea49bdf558076c8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3cd0e8a011327731213edb7f1e77319c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2a69d5bd39030cb3f09c2a4485952aae"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "44ad307b8ed9cc7564aea2be10c66f21"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1a24fb6c697a8abe09cac8a9d585c128"
  },
  {
    "url": "tag/index.html",
    "revision": "2935ebd6bf2108edd973d56fd3ee7860"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "1b7ddfeb736ef10eec30c240a244a9a6"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3eb320d56f27583852ef5e943b9da5b2"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c03f88bb4714d004b60ff318e839e194"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a88607d8cc4d412157153d9c4f4048ad"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9ab4aa0e4a5bdb040f3d3391934e05df"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "732d1776d77f76ee2a7d05be5d3465ae"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "abb454f4041c38350fd381c24ee521f7"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3383804d6d23e13fcf1c577265b48947"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9049a56a542645c82c403c5e818866c2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "baf89ae6dd598862db4fc3117c41eb0a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "deb84c0d7e2067c5dc522ad14d888e3a"
  },
  {
    "url": "timeline/index.html",
    "revision": "89e5e44497423d93089145db408a87a3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cfb7b190462f2508cc7288ebd58a8304"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "786cf02878e8a324a6b4f52300aab35f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "389e42dfba2c2b8a8e6fdeef4212c7a3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5aa548afe53285af350a6ff207c0c59f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "df1fe47a2d5f2c31b10b16cf369d60f6"
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
