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
    "revision": "70e2a7be480c73e90282ee328e3531a5"
  },
  {
    "url": "about/app/index.html",
    "revision": "9b059037191f82bdce392d6927879aa3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6b4e30f8545db2a16eff195ac0a38bcb"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4375693b54720009a2ceff66bf6a45c5"
  },
  {
    "url": "about/index/index.html",
    "revision": "2f04fa8b750e5b40ebb6027156902d99"
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
    "url": "assets/js/1.ee329d72.js",
    "revision": "a2d76f0d5bc560169fe1d8496f1ff560"
  },
  {
    "url": "assets/js/10.31d5592e.js",
    "revision": "98f13cae4c9f1a2fefb0ec84fafef4d0"
  },
  {
    "url": "assets/js/11.8835cfd3.js",
    "revision": "ec3de465eb9ad7d5d3b72e39096ce7ce"
  },
  {
    "url": "assets/js/12.52cb853f.js",
    "revision": "1f91493bb9160279cad55c1f506b8abf"
  },
  {
    "url": "assets/js/13.2fe4bc33.js",
    "revision": "e3adf2c8333262e533d34c7027bcfa03"
  },
  {
    "url": "assets/js/14.ee1538e8.js",
    "revision": "a5c3ddc6b301046d320c09edbea6dad9"
  },
  {
    "url": "assets/js/15.11460cce.js",
    "revision": "2dea1077bf1566c3b6494d559662a300"
  },
  {
    "url": "assets/js/16.f8642675.js",
    "revision": "86bb2dbca37b0007cc2b3d629c7a02b5"
  },
  {
    "url": "assets/js/17.ad889219.js",
    "revision": "d0b42a5f4c3e794310e577c2a43d6f20"
  },
  {
    "url": "assets/js/18.17019316.js",
    "revision": "2f4583f02d1069d7a39194571fbeedca"
  },
  {
    "url": "assets/js/19.f223d8ef.js",
    "revision": "06a99c048b733eaf60918e9bbc3b214b"
  },
  {
    "url": "assets/js/20.5e3452c3.js",
    "revision": "07f26664c268c0015185dcd5582e6a7b"
  },
  {
    "url": "assets/js/21.d315a9ce.js",
    "revision": "1d2b332eeef29a38ff19fd1e90cc0461"
  },
  {
    "url": "assets/js/22.71c12ef4.js",
    "revision": "3044c08374376ad25f89bd16efa650d4"
  },
  {
    "url": "assets/js/23.4a41d50c.js",
    "revision": "362ea8fb4879bec96f2f979cc210afb2"
  },
  {
    "url": "assets/js/24.aaca6576.js",
    "revision": "b59261046af1074276d2185418ce2c95"
  },
  {
    "url": "assets/js/25.d80607a4.js",
    "revision": "d1480179348637be178c95cc57fed4df"
  },
  {
    "url": "assets/js/26.8f4c70b3.js",
    "revision": "1694dab87b21fe25fc548598514bf118"
  },
  {
    "url": "assets/js/27.e511b5d5.js",
    "revision": "d2176b5ead2144bffc320d2658248b5a"
  },
  {
    "url": "assets/js/28.948206fb.js",
    "revision": "5189d333f0bdea8ec0ea05d5bce9b6d8"
  },
  {
    "url": "assets/js/29.330a29a8.js",
    "revision": "a793e013b06f6725bddde75858cdaffa"
  },
  {
    "url": "assets/js/3.c4b7624a.js",
    "revision": "173762cab3ac0583293f4de758a93090"
  },
  {
    "url": "assets/js/30.d08d6135.js",
    "revision": "900b52a9615df8df216ad20fc9fa8ddf"
  },
  {
    "url": "assets/js/31.cbce4a75.js",
    "revision": "2d2aef24b845c4277a2b1af5e0e8bbb8"
  },
  {
    "url": "assets/js/32.f4ef0bf0.js",
    "revision": "0ee531fd18a8f78d1a4e2c917a01ce16"
  },
  {
    "url": "assets/js/33.37fd1502.js",
    "revision": "d27fe5f00aa6e09e35a585ffd85409b0"
  },
  {
    "url": "assets/js/34.c17d7dc8.js",
    "revision": "eb9749a02165911151beb55d54cfc524"
  },
  {
    "url": "assets/js/35.69b648fc.js",
    "revision": "2af6ea7c781bd63976b9a73bdb99036a"
  },
  {
    "url": "assets/js/36.dc74a5b4.js",
    "revision": "16f0e42e74c0ee9446c5366e7cdc4958"
  },
  {
    "url": "assets/js/37.55041851.js",
    "revision": "2daaad6effb3e99654e0e11f5716deee"
  },
  {
    "url": "assets/js/38.3105ee89.js",
    "revision": "ec0622a795561e235314739bdbadde1a"
  },
  {
    "url": "assets/js/39.c814d7e6.js",
    "revision": "bf0cd9024b99a1f5c233f4fff8f5490b"
  },
  {
    "url": "assets/js/4.34ddf006.js",
    "revision": "54d430707d7d580d6a1a356696b5b322"
  },
  {
    "url": "assets/js/40.0a46e6f7.js",
    "revision": "f3b543beb195f23b59078392d202e47b"
  },
  {
    "url": "assets/js/41.4d5b6970.js",
    "revision": "97ca21f826d5d2504d1e7b2adeee108e"
  },
  {
    "url": "assets/js/42.d5aead86.js",
    "revision": "6f3ec216db8de58235c79a6a362c3078"
  },
  {
    "url": "assets/js/43.349e85fa.js",
    "revision": "30fb23a8f6bc7093d645d94ecd9bf50f"
  },
  {
    "url": "assets/js/44.d7ec0ee1.js",
    "revision": "7df1a846e088286b8c241cfce434c75f"
  },
  {
    "url": "assets/js/45.befe2f67.js",
    "revision": "97b468dc3aebe6087ba97dd8b2169709"
  },
  {
    "url": "assets/js/46.24c63233.js",
    "revision": "4dda4225fff1eb4fa9bee08218fbc223"
  },
  {
    "url": "assets/js/5.7091e9fe.js",
    "revision": "c13b9e047557fc36791909c133cf934d"
  },
  {
    "url": "assets/js/6.371fec66.js",
    "revision": "5046cf9467e2153bc50757972265732c"
  },
  {
    "url": "assets/js/7.3de342c4.js",
    "revision": "df9ed9fbffc17d83f39ef4af01bf46eb"
  },
  {
    "url": "assets/js/8.889baed4.js",
    "revision": "b79b19848b9fa153d4cec60d471cbaa1"
  },
  {
    "url": "assets/js/9.e68ce685.js",
    "revision": "00c5254b571a9869d605070a7fdc6f14"
  },
  {
    "url": "assets/js/app.3bbc81d6.js",
    "revision": "650f8a0a00e8d7d9ef13ea0dad50d901"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a73bf33b77289deabf9cad691b89687f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "71a8443a793d2b489bc9f99911b3518e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "aa5201693a6e00fbab7c3cbaa2ca7a17"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "eff8617d2df3faa22a0009b09c79cab7"
  },
  {
    "url": "basis/algorithms/t4-shell_sort.html",
    "revision": "5216628428e9af37fe797c4741c87350"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b9289ffad92c8ce89f0f0d3f232338da"
  },
  {
    "url": "categories/index.html",
    "revision": "c337d0fc94e37207c97dd42d5af79e13"
  },
  {
    "url": "figma/index.html",
    "revision": "bf796d9f3327cc66811201c38ce933f3"
  },
  {
    "url": "flutter/index.html",
    "revision": "dd19827e3011034048afb16c806f3222"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d1e6463f3d01d44554911c3357fdbf6b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "894a197b2a763d7a2c7eaf7c7ac16e7b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "82d42568f5112f8457abed1234a0f82f"
  },
  {
    "url": "index.html",
    "revision": "a65e51e93c9f1dee97c1862c96451e7f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d25cdec493158d43c0ea1b257b3253e6"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "754f93e6094f061a9793f3ee277b8071"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ebb740b474bdedf2f975a0b139eb7ace"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "1bf2dd3469a1a5dc5736c543b9c7e3f9"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3e038978db78e4b253b1134bde93f3ba"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "79deb43fed6f04d5eaf302903b0b189a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "55be720c1db6a9d3f9a6bb91fc07915a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8550874a216d3a4f2be282ff30cfd1c5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "aebbe8e3f417c295c28e739f4f561dca"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ed3b0debec9f0214c3bc4b61b9534921"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "365cf224b1a1ea96c04da98da4ca76c6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "29b9b237e34b26159190341088eca5bd"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b6ecfe6b54749b97f7328c107abed676"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "74a647e5effca28ef886a7f8b409bcf3"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "5bd7f6a0fd88f66942d6b0bdc0386747"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ba2c920aee67d0b79e033af1fd734d5"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6845d29bff03e4a07edd52f0853afdb4"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "18b69fd20f473c365f171122c68f8fd9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e088303a66c842f18fa4a65a6dcf82ed"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1bd2c4a6c2c1f82e7bda93eba4c35a31"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f3fa8ef539f82ae240e4cf73212a43e6"
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
