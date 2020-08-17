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
    "revision": "d5a8c8a9a304adbd959f98b958eadb90"
  },
  {
    "url": "about/app/index.html",
    "revision": "d7c19a40a23c7865e5fc0c74e1f9fcb1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d20059fb7923524644543f8bd54b3377"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "376c913415128b645c064fafe11505c3"
  },
  {
    "url": "about/index/index.html",
    "revision": "a197f905fc974b2b4f50fb8763f1ca43"
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
    "url": "assets/js/app.dbcf62ee.js",
    "revision": "5faf5eaa3745ae5445a65fa182917f77"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "dea865c39c145ca2bf8c017102fbe235"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1289a74d054373374db0f36cc16c6d1b"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "37010d6fe4c907c96821060aca7a1007"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a7f934cdc9c6f68de9c6ef62a0f45add"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b9d7c52612b5216ba8cfae2d6c19dbfe"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4e128fe10a811a4906c8991649eed461"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "71af06b3c042fb8e0de007b5b59f06ca"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c67fea336eeb936d1bc5f17acc414503"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c79f14a0d6f41550112e71f42340081f"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "10d90b8b8d97bd3e02feaa7a2d99208c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6b71bf70c6c33f5e5984f6ae6cd812cb"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c73a5989dc829ae8ebed1cb9edb82243"
  },
  {
    "url": "categories/index.html",
    "revision": "e1a23207cd1dd4c347668e5f2f2cdc8a"
  },
  {
    "url": "figma/index.html",
    "revision": "e4523c39d8f5deebd8b3c546fa5d7650"
  },
  {
    "url": "flutter/index.html",
    "revision": "9eb85c601cc62967fa97c98bd7d5edbf"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "97fdf3515386af1486fd28f0f47a1cb2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "cedc092a6bfbe3fff0768bc48a09db6b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b112cc3dec49b3f56f0ffcececd0716b"
  },
  {
    "url": "index.html",
    "revision": "2209f1dcf5736c484f5e0ac9f6e6abf8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "be6fa89b62bf09cddf9932ebb36911a4"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8276318c838c37b9f6dcdfefb4175536"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0d52a40fd01369f720e44d4a56d7cee1"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a156cdab087fc7932dd1bac1a1b29fe8"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "9f0a682183d597f2bba11b2d17461280"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "0842a6531d448c064ad271a725d603f5"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "8321e217436acd78a5055fe7a901d27e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a281bbefb876c50dde4bb3658c9eebe3"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b47c698a5034d0f52d91a345b86c5d70"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c81ea78851b1bbb617cb7c017101b23c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a3e68a2565ee986ec749f5a8d30eef32"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8ba769671a7235daeada91ebb7d2db07"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ae0e034cb9dc064cf68f577271fb6e86"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "68461eaf5bfbdd1ca74904f7890831b2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "7c7a9b5a47d1e3ad9de59a77f309398c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "de047e72736bf6d6797a6ebb4cdb3956"
  },
  {
    "url": "tag/index.html",
    "revision": "e497f6684cbf8be20f14f101061b08fb"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "486bbfa682312cb71091a4f989dc4378"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9172b2a61fd90975b49bb3e01e96daa0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3a22c40730a494e03c6fbe3af28dc950"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3e58e0ea7dae6d2f70a2ca2db615fc59"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c28dd6a7df28ae8092ed2d227b4184e8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bcd3d560f78333df9b272e51e923b945"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d4f05f0506065d8e01dbab6df06f66e0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "07b1666c45ddd37a6864017d4cc5b5ba"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "cfefaaa251914023ab91eef21f2a9f7e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d94ca412cafce82f2b886e9b8afe82f0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b51375304bc7a4e07d68c284cebec16f"
  },
  {
    "url": "timeline/index.html",
    "revision": "d873c4cb5c8ac3cfd404735c0cb92b16"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0778ed0e74eef73b3a7e566c58b4ffad"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a580d341fd6f8b3d419cf5ec5fef74dd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a52a547410bf05e4c3f6aadd850164b2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "45b95022610764205b48a693b5a7fd8a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ddb4f1d68bb541f0557f7db5a5c044a2"
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
