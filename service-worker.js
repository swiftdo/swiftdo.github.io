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
    "revision": "3e7ebc5964736df25e13f69ee446e8ce"
  },
  {
    "url": "about/app/index.html",
    "revision": "2eebfa126606e29a7f777a9c3d40ca65"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "89786ca150c3d8cf4f48ade0db3e9141"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8cceef47d91f11800fb74708c6e1181c"
  },
  {
    "url": "about/index/index.html",
    "revision": "0734dffa9dd32048d6403d52d65f134a"
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
    "url": "assets/js/16.c5ea8a1b.js",
    "revision": "ca79af369aca69d5e1a83a637aba3362"
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
    "url": "assets/js/27.f31beb03.js",
    "revision": "bd670fdc678b1abf2e77db0cc23133f2"
  },
  {
    "url": "assets/js/28.222bd60d.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.9c2e7d73.js",
    "revision": "fde04c5abafb2de778d0d47b219c93bc"
  },
  {
    "url": "assets/js/3.27d22ab4.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.bb3cbf38.js",
    "revision": "72b1f57f5b1e8bf0121ab36993d60faa"
  },
  {
    "url": "assets/js/31.2ab43dfc.js",
    "revision": "f09bfd0418a8078c424fb87b23e0b7a2"
  },
  {
    "url": "assets/js/32.88028983.js",
    "revision": "ac3b8b514fb2b03def3f5894aaac9429"
  },
  {
    "url": "assets/js/33.3945dcaa.js",
    "revision": "f2a7c9e4cf54387e4b05d435aebceab6"
  },
  {
    "url": "assets/js/34.218e91e6.js",
    "revision": "9948dc0c3d0ebcccf5ed2443327b3de0"
  },
  {
    "url": "assets/js/35.7b6668d2.js",
    "revision": "ed39c71c9eb61e98c4d5d0757d8146a5"
  },
  {
    "url": "assets/js/36.5ae45da2.js",
    "revision": "a115782842cdb44777f2165dc3f96094"
  },
  {
    "url": "assets/js/37.fd4f82f7.js",
    "revision": "8555a22c69a6ee67f023ded24c15ee78"
  },
  {
    "url": "assets/js/38.999eb768.js",
    "revision": "5af1d2ac4b0af12d0cfb9a489ae12331"
  },
  {
    "url": "assets/js/39.0e561807.js",
    "revision": "6ed4af744f7a46984882385373e5d20c"
  },
  {
    "url": "assets/js/4.a114e465.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.70dd9a44.js",
    "revision": "11422d3b5132a7768126cb8eaefa4d84"
  },
  {
    "url": "assets/js/41.c9bc191a.js",
    "revision": "3803752cb0c0818db1f73097488d5c48"
  },
  {
    "url": "assets/js/42.43fc87fc.js",
    "revision": "67a1e2bb7c45fff3861cadd3281b017a"
  },
  {
    "url": "assets/js/43.c8ac879d.js",
    "revision": "47e0c923f14ba0fa50fe0366be8e319b"
  },
  {
    "url": "assets/js/44.e3fcd5cc.js",
    "revision": "9e33b7732a606400f7523c185fd438aa"
  },
  {
    "url": "assets/js/45.6a4cfcc6.js",
    "revision": "a624760dd6a4a62423c136184a82ab8e"
  },
  {
    "url": "assets/js/46.e7e1170b.js",
    "revision": "830d1e7f770666dab68bee256952e8e4"
  },
  {
    "url": "assets/js/47.6f357f3d.js",
    "revision": "992aced5e297d09d01a2733ec72ea264"
  },
  {
    "url": "assets/js/48.0c354d1d.js",
    "revision": "80b49064b0d3bd48689a68f49fc1ed80"
  },
  {
    "url": "assets/js/49.efb77d8b.js",
    "revision": "4323c9afbe54d36e31ce05a16c19aa8a"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.57d590ac.js",
    "revision": "be4929e567114813415ea4b625d30833"
  },
  {
    "url": "assets/js/51.595ad1a0.js",
    "revision": "31180253f26597a9c79945a0a6f83c3c"
  },
  {
    "url": "assets/js/52.c082dc58.js",
    "revision": "73608c79424eb9a55884b173d8d61794"
  },
  {
    "url": "assets/js/53.0f9aa1e8.js",
    "revision": "c19994c6b98fe9a9fe74b9e2f181b1dd"
  },
  {
    "url": "assets/js/54.f89925dd.js",
    "revision": "23a6b5c1094cd42a505ec91d909d76ae"
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
    "url": "assets/js/9.13a92106.js",
    "revision": "db59c95282797a58613971b24a085158"
  },
  {
    "url": "assets/js/app.3e314d0c.js",
    "revision": "aea28f0968509a26954389e15968c856"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "13e9f8111346d8e07062d49569846076"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "af3dd4341afdf600044e827e0efa3b2e"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "7b960f25bbf52c6d4dcb4029aadb91e8"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "797a497eccf39cecf0ed6a02df03a84b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bb422a17673d6bc2c07e2b9770ba5149"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5c6f59901a0f164015dd3ace9e31e13b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "06ccc514559343b53965cf74e22abe6b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "be83eb705993f74fb73bd714ac1b87d5"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b49964cf9cbc1e887c658ab6c58fb33f"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "cfa567ae9d6be1e6c7a349ef4b63e534"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "04a3f9b55f1b2506d4ea991bfcc8a020"
  },
  {
    "url": "basis/index/index.html",
    "revision": "bcf196f1bb09ef5ef05aaa076bd7c9e7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b2d5411807f6dbcc62a24bdfd9164108"
  },
  {
    "url": "book/index.html",
    "revision": "1230059244df1d87f491eafe9fa44267"
  },
  {
    "url": "categories/index.html",
    "revision": "ad2a36afe45d8d5d15a323b5bcb1eb19"
  },
  {
    "url": "figma/index.html",
    "revision": "8fb57f84fcd7d8654f20b257f0e092c5"
  },
  {
    "url": "flutter/index.html",
    "revision": "dd34614ad835be982fed7d64bab35e3d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9b2bceaa6562a30cb9f4b498aa2fd2d0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "346a2f7c8a43eb228ba9a19813c4c598"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4787f36a8527275f00cb76118a493f42"
  },
  {
    "url": "index.html",
    "revision": "2f9388e09922555b98adf60adf5cbc07"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "353f3a6b746352af2210cdbdf757a08d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "6544f4704552582d1e0c2bc926c00c55"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ec6f3620a345f711bdcca9d123a25bd0"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "69ecce88c32b1d2eb7fcca0239239622"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "7c2b482a9797f1a22a01f2603b9d2039"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "cd0530d1511fc2f0261963764e770a2c"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "0223fadfe86f7c642be083804981613c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "623c205290112f6ca60b1ee9b48f259f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f891462db850120aaf5eee06394f30a9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "23fd11a073fa1309b206682b0ae1c5c5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a421762f9a0c5f7edab640cb4fe8381d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f232da45e53a44404f755216db361db9"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "cd6753dca6084fcb8144d875d7ecb315"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "547ec644e7deb186af74c0d4ae441591"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "1f4f25d8d507d57c6554abf9ff1b502c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f7c0b6b4f441919706f24a1ffae071b1"
  },
  {
    "url": "tag/index.html",
    "revision": "ae311254e292004d4c1925dee9b1b173"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ac1c950ba19e3db1296b83fbaa5951b9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "0220fdacca5972b4c9204cb5565f4cbb"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1d506de1c6a7e2d4020ce509fbcab338"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f98149e9adb7e772f987abad2e7e8e60"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a96172d29cd159150560d2f44ada4bac"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c1ee2ccc012e0de3b08ef9f1885923f1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3914ee157a4b2efdc3ecaed33f06a8da"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "fc65e4721d82d46691ec58c653c9b4b1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "40bd4d8846c8491045de8ab2ed56f1ae"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4a791598742b6e5043f7abeda8266b39"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f1efcce9f8b1fbb045f96df0eb6026fc"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "6305529ef5735d6fcfea0f7ce70346f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "58f3a590f6eda343af2e09ed49e88b14"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a4e938a3ddc9f1aac201c9a97cb6d15d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2d48646736641e897f352ee5e4bbf3a3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0697b1b04dc828559f7d05fb89f99936"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7b4e551c55d1788fdac91c3485b6c243"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f446e908f7bac74f38e8ac6685d5ed3b"
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
