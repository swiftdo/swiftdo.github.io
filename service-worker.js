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
    "revision": "ee95352efebf40439e7b2398eef3e254"
  },
  {
    "url": "about/app/index.html",
    "revision": "f81653a56fa036a752768b34b6a7c205"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "bbd5033934c49fe9de858974d33b8bbe"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "15343775a15d918ce72b377e4a355e65"
  },
  {
    "url": "about/index/index.html",
    "revision": "e0aa09d3d151774763df6d0925e597e0"
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
    "url": "assets/js/app.ac2d1bbd.js",
    "revision": "a8d9b1d1cf89decc38f089243cb126cc"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "5f83dc17ac5857560ea2734e6f19b080"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "412ce3826428fde818d13eddd7ffcad4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a36c4a00114f5802661ea5503ccb6987"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3805359e4d7aa951d6b53db179b15ba7"
  },
  {
    "url": "basis/algorithms/t4-shell_sort.html",
    "revision": "2b437b7f188ebcbdd7342117583296aa"
  },
  {
    "url": "basis/os/index.html",
    "revision": "549d27893f0eb65c1fc455b0d1fac86d"
  },
  {
    "url": "categories/index.html",
    "revision": "1afd5c68c420fea6fc9e2c417905abf6"
  },
  {
    "url": "figma/index.html",
    "revision": "ec0d380dabb9bec348dd7b24acd27550"
  },
  {
    "url": "flutter/index.html",
    "revision": "4f2e65334bd2756d3f19daa5c04a3bf7"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3cd5adcdde263c5fb94038a89ef5f8b1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d029f2b25515b103d84cb3a1d5b89ab3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "21ab4c161347f539e9295175f57bbd63"
  },
  {
    "url": "index.html",
    "revision": "ec0f6052cb77c42385f96fbb7b7c07bd"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "edb5945d56117c7b328f4e26d3f730b0"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "457b44a5edc5b7b700e68af2ad53530b"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "c82150ea4f318e50258cad7ec0acb8cd"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a8cc0085289f01170235c66ff0e67f3f"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3a9c17a80107339d2e2ad17515acf2b1"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "f6760bc66a4c4046755eaa087b644de0"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3a5726fd3bc8237cff7536a0dce45c7e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c8175495c3ab0f25dcd81e257827ead6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "94f3553d64a7a190f09ed001a9e08992"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "25f24b9bfaffa3189ac9f6556d040bba"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "25efb294e96dd43ea5ae8e77e57efdab"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5a866e4519d61d7db938684906e993c0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b455df35ec81232728b18ff2a0f97ccd"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e4fc7ad7d79c997931bff043b32aa07c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "40c5766e6bb245900b6e5b03edb25450"
  },
  {
    "url": "timeline/index.html",
    "revision": "03cfeaadb4b449b76335db68b04dab0c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b45fad08cfe9efb8461989d3aad7acd2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7fe36af1aed5edddf4c632208f9ace12"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2704be2d779da5517476f9e1d0e90f27"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d377077057b8ad4d3da194144f63b612"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ae5315346f770290e210ab6d95edc50e"
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
