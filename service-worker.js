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
    "revision": "d05d5b7e672d1e54edb7db1745192c7b"
  },
  {
    "url": "about/app/index.html",
    "revision": "bf2bbef1325c7c0452397f9d5f2f8a20"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2cc0c1cb95fb22bd33abbe9e48ea9a41"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9628fe7a31fc15ed9255f6a19872de65"
  },
  {
    "url": "about/index/index.html",
    "revision": "617c49c26e8310b6e127e5c626cbc7ae"
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
    "url": "assets/js/app.fba52bd6.js",
    "revision": "22c3874bb46900c96673608a810cba1e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "4f58a9b4759a9d487d469149a561cc50"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "5a322ba5ff1b5898d0d01a49f16c1487"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "baec14ecbaa0f6d38258361e17f1f212"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "1c39b0cba4d50fa0daf400bbae3b06a2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ad36669a57c1893c98bfe646576d8de8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "321df0b38a882d8e5603617bc8d895e7"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "80d6cbdc96db46d6c274bf84f54128ac"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "75f106082aca49347d8154e80f8b7cb3"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f360d9488bf549205c7206c1bbda3cda"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "5cb1c69bb915d9de4b985640333ed087"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6364e3cd6a97631d3aab680f7534fac9"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2c16a9e3aedcac6a9d7f671dc13c9d15"
  },
  {
    "url": "categories/index.html",
    "revision": "4932c47c60971f34937d3e5e5eb7fd34"
  },
  {
    "url": "figma/index.html",
    "revision": "93799cff6f4b1d6e50a555efbc553107"
  },
  {
    "url": "flutter/index.html",
    "revision": "0b40789993587107b7ce3e2944b6205e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1b86dba40dc5d7b13918dd146c8464c5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1b8ceac94a3a60253e24d12ea7e12cb1"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f68a4117c4157ba1c45f457da2e5e663"
  },
  {
    "url": "index.html",
    "revision": "00833397acc5e93cfd0c4cb8cdbea88c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "33dfd462140a72bc136f3b0692f29c9c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "eef905d762e00c80abb7a215ae0b0d04"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2b2b54aaba52f2c00b02d9cd80872347"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "091b9d71671631794ae3f46180b1843b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "80ac20618ace9fec8608bf352803dc7d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b42d90ebdf5ee657ba6a5b8094761940"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "6a46c7f62d75586c09adba174f626c28"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a39c0e195ddb1fb6f4017bf03b95d665"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "67f4eb1a1ec9b44f49e51d76bf8b95b9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d510869f9d718c795d583573f055480d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b3fb6152b5a94f15131c1670067bc4fb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "adf6448a07fe49c667a22db3b13a9e9c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "88ac4b7362c2b5b90f5cde50dfe42489"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cb501e8f193dc1cbd468a7df580e1b0e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f3854524012365530354eb2a00d6142f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e6ecd5e14353e87b4ccf605ab982bb67"
  },
  {
    "url": "tag/index.html",
    "revision": "80b531912e7f69302a4d85903e11edea"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "69bb1ee1db0f9d30da00b5a9c26dc92d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fc47605c6452157b7b58dd170d8a8db1"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c237b6ecac6a75c370ca7177f563c2f0"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3b1759eaf083f17f44e9f23c20e4c176"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "dc60394c6082ade5d84d16fe8016cd29"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2d389cf626ad497e4d2897fc496744a0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b2b8aa322d37db1d27fd51cba13fb870"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4602a9331bfd49c5a8bdddf9aabaa608"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7b7aac710bccb27cb7263401cba6997c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "29060d2d380e06edd35feca6cd4f515c"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "78fb2371a436c4c897d0700062af5601"
  },
  {
    "url": "timeline/index.html",
    "revision": "17c834b9376d9fb8d8cae5c5cba0f318"
  },
  {
    "url": "tools/git/index.html",
    "revision": "55a64b4a470b4ffb087b455297a2acf6"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1f45b544268a7d1ebb86e34a8b7fee84"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c7e396d75f9ce510aff72f04d67e4c87"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "530d2b26758d28f366cdaa546397991d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "b84e18976ebbec89f64be28d6250bc24"
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
