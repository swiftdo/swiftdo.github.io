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
    "revision": "358b8a9f01afe6d17d851dc34fc221a7"
  },
  {
    "url": "about/app/index.html",
    "revision": "b962b897ae3a65351453eecf460d5b44"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0b5edd932bb194bebc89d9d710f68063"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "13eb764f1f85a82bdb4eaa29ae81f18b"
  },
  {
    "url": "about/index/index.html",
    "revision": "49254594cd0f0fa52078483d9b86f737"
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
    "url": "assets/js/16.100bacb9.js",
    "revision": "fcc291abf19ced0ec06b15ff9b2c17fa"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.9e4dfe30.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.3394e155.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.88ec24fa.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.7368d240.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.2f76a0bf.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.07e8de98.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.45029f5e.js",
    "revision": "930ecece44a93771568697efb1a52f97"
  },
  {
    "url": "assets/js/25.fc627e2f.js",
    "revision": "f8452a7c5de867a4482b6474a616444c"
  },
  {
    "url": "assets/js/26.bbfb1273.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
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
    "url": "assets/js/app.833e16bf.js",
    "revision": "93ee3a64081281432e8ab10bb5c4ee62"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "bc83afee096f0a096cd6708d05008d6b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9bfeb65e2ad43ccb7cc525870db8ef24"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fc5a638e82c20da1114cbd6ed3e771b7"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "01c242f674136999efb3096d6717ece8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "40d9fd7dce402f98eb33a4118d601efb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b48871fe96bc18eaaa72e5b897984b7a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3611118bf35472319ffe74925f2b6f0e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c46e3b28f3cf00850508dff536bddbdb"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "59780a502fd0e80676e8f224bdd3b34a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "22e6341d857d09d33468092460c66bd6"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "7a2c675eaf94c39e7b218182204b1bef"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6a0e244c1d86ad5d45672a54cd1dbd84"
  },
  {
    "url": "basis/os/index.html",
    "revision": "27601aff3f3bf7853fbd350f0fffb385"
  },
  {
    "url": "book/index.html",
    "revision": "cc2eb8037aace59c02221b06bb9209c3"
  },
  {
    "url": "categories/index.html",
    "revision": "4b93e4dae6eb029b18973b6e4fdfe020"
  },
  {
    "url": "figma/index.html",
    "revision": "e7d67e8be31827ee1115887555050f38"
  },
  {
    "url": "flutter/index.html",
    "revision": "df0947cc4597d6c76722fe265dce1886"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ec65ac964fedab8747887f42c982d896"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "858a2a2d7d3726dd2ec40e2803b03851"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "fb4d2b0ab493d28cfd2d674f37e24fef"
  },
  {
    "url": "index.html",
    "revision": "6fcd3c4a9e20d02c40f4ea884d6ff242"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5f771644ac6c35d9c4142c94f9549c74"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "83712b544a3a133ca3897bc444b5b89f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "21233bc554980a2f156da6b2d2ac2deb"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "6ac7009ce13c39ac829fbed21223a872"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "beec36dd1e28ba2623a53d4b3cc79bef"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "f1b46e1d9b5ebb7ca19bca1d617cd3fa"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "286cfa2246212b2a0034ce2b9c256bd1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f04a0760efe0d993ceb51279dc8f5f07"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7064fc1ddb02b5f5bf12d32dfc41eb3c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ef97402dba5046bd240154ff0dc09b3b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e9e94164946ccf77b424b7dadfe19225"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "033285f7ea0570334e5c5ac05e51c5f5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c2390ec9470980e4d6b1541d8ba9a867"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "31d1441fbbe4310cae1d6679e14c9aef"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "59fde0d9fcffc069f49cdac027800351"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e84a03d74b8e592e82c050b25c261592"
  },
  {
    "url": "tag/index.html",
    "revision": "7aabe0f7e74897942bc1a0bc956b8030"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0fa63d54a8e2693418928a8fa4cc91a6"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e40fb87bece7572a05d5382341fe5de6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f12d3e2e89802a412fd865dc3c38d726"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "231f9bf2d29df726d303a7f7087b1284"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d177cb468604f4b899db97156f4fd6d3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d3b2737183363a4e6ebe009f3713851d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f83706255ce3892c5b85cd238ff115ef"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "bb9514961048df3a2a2598307672165e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "81624a9f9b584739806daab854ceaf43"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fd004e0327414405f4194946db581700"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f799d57ae7d2c4891d1f768057ff2fd4"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "135ab5edd0ce7c2a221f2d1e2d3c896c"
  },
  {
    "url": "timeline/index.html",
    "revision": "9dd83c56a10596dbe2e1141ce2d55a58"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9294498a222934d19517d9c26663bb98"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "92e1ef3440fa23992d8eaf5e25a79197"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "87d34fa9a446bb91bb8a79f3340fae68"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "657aa91a453d0635e692de8cafb35696"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7da19075385f09fcf3ff7dd592c366fb"
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
