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
    "revision": "c7e370896adccbad3e5a91a8516a2ddd"
  },
  {
    "url": "about/app/index.html",
    "revision": "28dd763109ad47041697a7ac41256cb2"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c7b806e2943e8902447611b428bbbc11"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b86062826f7c6374b9fe6763fc111ee6"
  },
  {
    "url": "about/index/index.html",
    "revision": "fb855cad1f4e7f82597cbb0029bdcaee"
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
    "url": "assets/js/15.aafc0345.js",
    "revision": "8b9cddc96eef2cfef3071d5db7920158"
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
    "url": "assets/js/28.b08fce97.js",
    "revision": "2c67322c085dbce4fd2aa446b9c46854"
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
    "url": "assets/js/app.5bbd44ed.js",
    "revision": "f10ff61ca14ee13399b21cbc3e70e651"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "f654288bc9dc25ad259b8b8e4ffb933e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3276baad275ed035bf4ed3469de06a74"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "5b2c8c85af100e58d3cc725940514181"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "4ddcbe1abf80578fb9071ed167e137e5"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "22e4adf001c4710f29404c57dc84719b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "95801e4cee100f3c2c56b90aeb4a8100"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "39b9ee132530c831f8135764d6846b5e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e88be9e537ad3f7f8b8ad1af241571c6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "41e441a0273285372c8b3a03d371145a"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "4fa085f83b5e64893b747658897083a4"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "59655f0b140fe47194b4b4e1bf73bb47"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a59f53733394fb3f88075e77a042f213"
  },
  {
    "url": "categories/index.html",
    "revision": "48e422cb1c0aa550ff79ec2562217879"
  },
  {
    "url": "figma/index.html",
    "revision": "78b330d673305a08da2111750ddce4ad"
  },
  {
    "url": "flutter/index.html",
    "revision": "6366a9276f4c64503dda85ea5bae8670"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0b31af1061bd3a7cf502feddb6db7a58"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "aba09504302b11f25aeb7cbdec1123eb"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "36cf7ac7dbbbcf9a1fe9aa1719a7b219"
  },
  {
    "url": "index.html",
    "revision": "7456ceadd74c37c0e1ab17e8c79bd6e8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "23503f9b0445beac6527991507c1d476"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "89b52892032011e4f8e0ceba62287bf0"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4b3ca82af6700b1124ca77c2fd3cd703"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ffb37585c862b9ff87e495cf6456797e"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "098934744fabd4c792e32bd457ddae83"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "fcd6ba4fa1838ea84783cb2e00c01478"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7c643ed6edd354dcd1d8f9ad83295eef"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "cb4cc592ef4d4a28198ddc229ba658b0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f36e6e879370cb31c7b2d3ee0b260907"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "653227adb4d0c0f0845a3901ca2ee48a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "3400771b409f70850dccf301fe4366e9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e7124713931a60a7ec201c2bc0c2748a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d78b5859734459208bbecb8c9e6c9310"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c10b52feb76d7bc999ae78e9ed4cec0f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d94b4acd802626df3c53f2b434034e6d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "432624c4f7f8237578fb91da1cd8aeb4"
  },
  {
    "url": "tag/index.html",
    "revision": "dbe27aef4076dd2dcf31f6ae519c78df"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ef494c35379519ecddabd4f4a232f18d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "45da6b79bffdeaa31008cbe986d4e9f8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4a089f27d561522e42bfd3b74908fe06"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "bb2d715e003098c8f77147eade1ae5c8"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "672f88d6c2941bf352f6e46d3c4bb150"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "88bedff98185b88b301eaf2f55d026c1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b533311cbfb97f769179d86bdd7ea6ef"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "489ed9418786aef9a8b8c2e0cbfdbe26"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0cb4ae36c11bd3b3f4776c170914ddc4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "71729ef3b874af647899ac2bcea0b8bb"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "05b10a253e09c395393604207f922c00"
  },
  {
    "url": "timeline/index.html",
    "revision": "c938fd60999ea363072780c21c4a6087"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7ff41dae15c2ede73aa4272012278241"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b180ec6b3c07ffaab6ab7b555366ca5b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3e40925e7bf31e3690283e2dcb53f92b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "49d9293650d2f857774efc66c35a5a42"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "6a931ca92480326be28e2654c86d5867"
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
