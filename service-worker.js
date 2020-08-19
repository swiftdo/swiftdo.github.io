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
    "revision": "7b18116c336f6235fd94ddaf1a807d85"
  },
  {
    "url": "about/app/index.html",
    "revision": "1e5e5c28a6b422b8eb4393010e76f270"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "497f18905ca5ea21b76748b6a4d6b489"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "96c6358585ba9e42788f553ec79fdec6"
  },
  {
    "url": "about/index/index.html",
    "revision": "1b366c3ef62a01626e6fe7f393790935"
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
    "url": "assets/js/25.3b810160.js",
    "revision": "4b4d07a0bea78cce6bb82b4fe3299863"
  },
  {
    "url": "assets/js/26.70d6b412.js",
    "revision": "f572c597e601140831c2d3fc61d00d13"
  },
  {
    "url": "assets/js/27.db4df6e4.js",
    "revision": "dce455d3ecc860e163cc1a17fa8a9dd4"
  },
  {
    "url": "assets/js/28.98a428ea.js",
    "revision": "a126b1762cdc69608fbb1f4777b96d2f"
  },
  {
    "url": "assets/js/29.280b0f38.js",
    "revision": "90c1dfc0474a9907ae442c0c214e15b3"
  },
  {
    "url": "assets/js/3.27d22ab4.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.340c4e59.js",
    "revision": "04bcc9ba793725896b04b1cf07a023de"
  },
  {
    "url": "assets/js/31.b2acbf03.js",
    "revision": "892a651419a094adc275e218e3754c8f"
  },
  {
    "url": "assets/js/32.88a346e5.js",
    "revision": "c4f6366e36ba4ea72343c5224dbfe4c9"
  },
  {
    "url": "assets/js/33.07e7dff1.js",
    "revision": "470e6efb5ea2985da6a867e050753d7f"
  },
  {
    "url": "assets/js/34.63b05eba.js",
    "revision": "5e75fac67a9e6b156f002c375e97ac94"
  },
  {
    "url": "assets/js/35.e038a4dd.js",
    "revision": "9f42410dbef21de40e0850a6d1df6306"
  },
  {
    "url": "assets/js/36.8e118d35.js",
    "revision": "f9fcb6d4d5f23b562cc2e51258ee35ac"
  },
  {
    "url": "assets/js/37.4b04a640.js",
    "revision": "12ff288e5afd0b3526989a643d967bb2"
  },
  {
    "url": "assets/js/38.52d3e92e.js",
    "revision": "be12e106cbecae9f9c38ff2be4034afe"
  },
  {
    "url": "assets/js/39.a7831f45.js",
    "revision": "a17752e62c9c119b2e9e350c4c192eda"
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
    "url": "assets/js/app.3b9bd448.js",
    "revision": "a4ed8ab9bb51136106402a5d21e35b39"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "81f795ef57496fbd1d03f4d2f4402321"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ecd5d53f4e7376562c88c0c129c56daa"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "954451fcbf0ffc32a94809a585c85fb4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "cb8c05d5ba81ce9f99b686ce83d88a18"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b7d58e4fbe52b8d1ca825ba46a9de280"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a6356534a711d86f81ebea80f3b63621"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3b2dfd609e3114aaf9c8fde3df620690"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "68819c18063a5d3c9755fd9cf2f9311d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "17a711da17df5df3c31c6585ca6fb58e"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "24d32de85919eadd2a90a0077e0f3a00"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e9faa1b42273a47a6be5b965e8205146"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c0887f3a942307950b656fe474abc884"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0d88bbcea7ddcec769a41ac6306f9df2"
  },
  {
    "url": "book/index.html",
    "revision": "711afda0fbafa8ce298f77f392bb296f"
  },
  {
    "url": "categories/index.html",
    "revision": "f717ffc0757460f66d98059cb6f64020"
  },
  {
    "url": "figma/index.html",
    "revision": "c39af49dfe2607f240f69081f930ff8f"
  },
  {
    "url": "flutter/index.html",
    "revision": "ccabae5bb0688215ec9f49769222fbec"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3216fc670adb6a19b0cb49b06c4a12b4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5364a15e72a4abba73b161388c1537a0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b703299ece03dfff24cac579e8efb3e4"
  },
  {
    "url": "index.html",
    "revision": "16a45992eea511e9e3d0b607410bc0d0"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "4e6224ef57cb6e2ba2c64fcec076ae60"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "789f4b378a2c12635cab7e8c7a30cb06"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "230eb1b54c31792f71d2ac8f11dea0d4"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "02ba98110100faf251b4cbdc6aa3ae8d"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "96d818d4a7942cd79103ec4239389b54"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "24cb0b6e9bc4ce2654b8ebb48a71abb9"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "68299b34647e3c3eb30a31bd8086c643"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1aa03e69f9295284cac11246b37f3366"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4bb6ffe477de1ddd0414282f465a03df"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "44301e84b8577b0c9899882d412d071c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9c083f842c2bb818a154def7ab06f50f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ea63dc8c17e8bf23eaf433cb95ddc782"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d020b9cc06ba2c7eb2b223808452c141"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "47de17401096fa2f31320f17d8f6e2a4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "184bc0a2153d9db4a24ce4891ba05da8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4d5f875b42ac49546de4bc9e134ca328"
  },
  {
    "url": "tag/index.html",
    "revision": "d883b5de8423d6ee3391e5b389b2efc9"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e3b256d282fd7ad881c57c7b2dde2e11"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "27e9b4333e2ae1c498a194b62e992b9e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4b57635d18d62c17254e2ea5f4e47823"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0a6ab7ec2b860a16190203850f26f3fb"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "11f2644f3c151a3fff0ee07b040eef26"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cb3920d4b08cba0b29904921ce2796a5"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6c47c45c8255e2d1c37739e3f1a9a6c0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "96e3dfbabe515ed5353fce2afd04b1a5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ebb7431d2261fa57f3dd80a5428a82a5"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "3b0104f447b80edc0ca16d5739c0b690"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "7f741b8af83e89c52b3c7369314c8c2d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8535160cb5f24b73df555fb757509dcf"
  },
  {
    "url": "timeline/index.html",
    "revision": "436c5ea5621441f43284c995a31b397f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d96979ee8338b5620a002eda93c62ba5"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1bd14dc7e6923f776a35f5452e1d3e72"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b95f0adcfd073a5035d64151f4f91292"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "0d912c84acb41f5deb31875977eb6d70"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "34d6b715201cc609e5c1baded39c965f"
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
