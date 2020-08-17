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
    "revision": "af0348d0c6a0aec9c470635b8857e488"
  },
  {
    "url": "about/app/index.html",
    "revision": "79e812bad4dd9873e8bb4043b786a1af"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4ffb08ad8efb5198bb6793546f31ac5b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e7da9e2aa2f3744671013b21a087c799"
  },
  {
    "url": "about/index/index.html",
    "revision": "984b7f5f171a8ad494892623afff5e82"
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
    "url": "assets/js/app.3deac4d7.js",
    "revision": "6394b0ddd50acf6bcf574b944a159054"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "48a34bc4ade01fed7fc6304a86284584"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "17b2f1759d75b41153649e0dfb5d8bb9"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "a1d0c93a9523887536ccdef4b11b1efc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "6e445ee5446a7984940e73676dd5713f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f2347650d5c09f83116d815b7532b3a7"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3ee1e632320e05578749d2a997cc388d"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3515b898a42ebb4ca9f54b804c5bbbdd"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "7560f492aff5a8b95ddc5ed294b70f86"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a6b28456e8521979c2b33ed92ffbc48e"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "34ce10fc0134ee3ee5da8f72d6b2d01d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c02a27fb839ef4c1b88f815d2d4773f6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2c5eeb5edb54c7aaefa02160f9ffb847"
  },
  {
    "url": "categories/index.html",
    "revision": "47696024d5e546fdc3ceeaa82c84a1c3"
  },
  {
    "url": "figma/index.html",
    "revision": "e7902e63ed4253758286a61c7ba11d80"
  },
  {
    "url": "flutter/index.html",
    "revision": "009c0b9dc9069f623932239482236b06"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b7407fb60bb08d0dc27592a6c9856170"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "94fa1148f35c59e5ad503094f8aa1050"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "85034fefa372aac2eb785b9a435746a6"
  },
  {
    "url": "index.html",
    "revision": "f2a2dee155f87a1ba74f8de15b60aa34"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c20c8c3c0dc53f6b4ad2315ed152155c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "adb292e18cd83497b4d8edc56002ee49"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "439236f572fe9578716cf164a06a2182"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "0cd895e9460d55fde649ec41d9255d20"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "ae28aa10e651c4ebff06e6b96178e397"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "451f5080ad7e52b3afbe2d4e4a3ad4e9"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7c95aa486afb17899ba1617729a83d15"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e1a4f3b65d9aaa40c2fb165655bb31de"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b106fee99357b1e462d4bb60c7d01251"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "06dce3a4f817994fe2ce7585e30baf50"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "833faae0d3d6153b26e136bf64c982ac"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9fe4fbfab86f8ac47facc72ca8987fc6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "faaef923a58c6d19bc438a835e0926c6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "bc22f0c24c26e625a2486ce3a134cf99"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4123cb01b3efdaca954e9fdff6a3bd50"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2457dcf6ef30aa62f091357f00606441"
  },
  {
    "url": "tag/index.html",
    "revision": "0fb51658b4fffc0877d08479b750318a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "73e2be3195e9a4d1d140dd841f8d72f0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f8bbd6f5674ba83b7460221240ec730a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "71b5971af41f75b8293e84d077d2374c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b51dba59985f21caf29ef466f5b38357"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "707676f2634cf0274529ea7c4bb5f16c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a2a51ecf3ed3363add99ab11348fb034"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5627369d7a8dd5d6c296da76ad86a2b1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "dfe396718864a06d006c96a8021bae65"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "15a7d737bf619fc1b742c379e9190270"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c5e6e3708260a9cf5663964d253e7edd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1609b1be40a967aa183ab53dd409c139"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f94ea69ed48dc50cc6e613f7d93bc96"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6dd377ba8045abe28702ba626740c29a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "684c761f6deadf76f30f61d9cdfa216c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1b952ef1458195a56147ce7bd213242a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d524d567a0bb925bd45ee2cfb2903c00"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "65a1d3f4c6d3f27438f62193db7d55c3"
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
