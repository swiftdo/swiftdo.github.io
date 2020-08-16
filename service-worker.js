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
    "revision": "cd9ea461291401a416abbebd189432fa"
  },
  {
    "url": "about/app/index.html",
    "revision": "0f12b318051e210e69a05763f20ca25b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4ee459291c47ab796b4b449b862f3b73"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "86310460ce7a22f8ec9062bb3a2c8476"
  },
  {
    "url": "about/index/index.html",
    "revision": "a4a2368bdc78de50e9f0f753ebfb282e"
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
    "url": "assets/js/1.1d570f9f.js",
    "revision": "90fb4e709e1909b0bc5545ec3757048f"
  },
  {
    "url": "assets/js/10.bf04df50.js",
    "revision": "2430ba959775b283dbaebe0af5e2a7ac"
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
    "url": "assets/js/3.807d42c2.js",
    "revision": "be974a8bd09e9dd09a5d291882e061c9"
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
    "url": "assets/js/4.c3425ae5.js",
    "revision": "cdb982339fad331e78cd066d08691f4d"
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
    "url": "assets/js/5.85bcbdbe.js",
    "revision": "c319c2c0386110b4a1136ecc0e8c00d2"
  },
  {
    "url": "assets/js/6.16268b64.js",
    "revision": "bd0888405b0d1934d1b065c23a748e96"
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
    "url": "assets/js/app.f63927e5.js",
    "revision": "2bd9908d667dad4378180c7993e0dab2"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c814f21ecfe653244e95dfeac0bc0a5f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "92bb05516b87f9f284ebf7a69de3ecf3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0c46223b2b1c38d2897b69dab6c08492"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "fbfcc9829ea3a8b7c12d4f0a80ff3f6f"
  },
  {
    "url": "basis/algorithms/t4-shell_sort.html",
    "revision": "9fd16a73cad5261b2ef8e0ba2f67b55a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a72efec4b5a7287b3809497ebc6baf5e"
  },
  {
    "url": "categories/index.html",
    "revision": "191c1590fc8787b28c02fba359a30c26"
  },
  {
    "url": "figma/index.html",
    "revision": "356bbe55b16ae365689e7f8281420bf7"
  },
  {
    "url": "flutter/index.html",
    "revision": "a05e46fa4aa4b32ea03eef921b866ae3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8aec7ff63f9734fada9d04595c9da61e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3d6b11fcc01fa1513e2ed693af9df86a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "983398e7c66bc0727303189863bbe45a"
  },
  {
    "url": "index.html",
    "revision": "0cba45b5fd3c6ddd43bf6f16b2b519ff"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bd36f5d83aed8dd47aad501bf630202c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "d8718923aae00b0e79da9e3a544544ac"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d5d119d9047928ef992811a9cdb66752"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "f0909a87235b47088393dde1a589da9f"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "fd2c30ac2c53903b9da9e6952304c6bc"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "15f5e5409fe4bd089eb5ef1562eb395e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "f361a5c877c31af86eb22ff48c6fae64"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e8911f471331e4cfdbb8002b48bad881"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4021d43be20ff49092902759309621d9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c26a1dcf9f88c9e9a8d290cd8e6eca61"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8bd5e7842b504c7a96eadc26cadf55a4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "39e910067ddde59e2169234bbc7afd1e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ae41212fb063e5e2679ac2cfd219cf42"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cde288a238996bb50c4da9e29739929b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "3a85c2beba115a4b27d2c603eb8496c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ae3eee51e04ae9b3d9220636cdf0945"
  },
  {
    "url": "tools/git/index.html",
    "revision": "556dfc96377d263dde9618b86791b4bd"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d8353a947b51657672d55d82998acdf9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b623720cb0f927cb5bc901d894028321"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c077002849025c9f9c21ca2c1d3d560b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e4628a178750795c78cdbc3684c84aff"
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
