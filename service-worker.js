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
    "revision": "a55a24c2309b25ee1c8bb17e3134c5b1"
  },
  {
    "url": "about/app/index.html",
    "revision": "4bb1cdb902f440bff95171f189c8495c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e438f61760477c00d5c523d97b6fe60d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "77b804b2c9087e6f9ffb4cbc925ea299"
  },
  {
    "url": "about/index/index.html",
    "revision": "ecf532abe7a03d0f72dd63cdaf59827b"
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
    "url": "assets/js/1.dfc5915c.js",
    "revision": "a2d76f0d5bc560169fe1d8496f1ff560"
  },
  {
    "url": "assets/js/10.272b42cc.js",
    "revision": "98f13cae4c9f1a2fefb0ec84fafef4d0"
  },
  {
    "url": "assets/js/11.f7dbd032.js",
    "revision": "ec3de465eb9ad7d5d3b72e39096ce7ce"
  },
  {
    "url": "assets/js/12.e1b87050.js",
    "revision": "1f91493bb9160279cad55c1f506b8abf"
  },
  {
    "url": "assets/js/13.ee3ce899.js",
    "revision": "e3adf2c8333262e533d34c7027bcfa03"
  },
  {
    "url": "assets/js/14.5cd77bcf.js",
    "revision": "a5c3ddc6b301046d320c09edbea6dad9"
  },
  {
    "url": "assets/js/15.db507451.js",
    "revision": "2dea1077bf1566c3b6494d559662a300"
  },
  {
    "url": "assets/js/16.3b74c8c9.js",
    "revision": "18557e09622b561627e43cf918784a7b"
  },
  {
    "url": "assets/js/17.b3d2c69d.js",
    "revision": "d0b42a5f4c3e794310e577c2a43d6f20"
  },
  {
    "url": "assets/js/18.6789c66f.js",
    "revision": "2f4583f02d1069d7a39194571fbeedca"
  },
  {
    "url": "assets/js/19.e3945158.js",
    "revision": "06a99c048b733eaf60918e9bbc3b214b"
  },
  {
    "url": "assets/js/20.3b3e939d.js",
    "revision": "07f26664c268c0015185dcd5582e6a7b"
  },
  {
    "url": "assets/js/21.5f28effb.js",
    "revision": "1d2b332eeef29a38ff19fd1e90cc0461"
  },
  {
    "url": "assets/js/22.3df39261.js",
    "revision": "3044c08374376ad25f89bd16efa650d4"
  },
  {
    "url": "assets/js/23.51d28068.js",
    "revision": "362ea8fb4879bec96f2f979cc210afb2"
  },
  {
    "url": "assets/js/24.cfb3699b.js",
    "revision": "b59261046af1074276d2185418ce2c95"
  },
  {
    "url": "assets/js/25.121f961f.js",
    "revision": "d1480179348637be178c95cc57fed4df"
  },
  {
    "url": "assets/js/26.3c9097a8.js",
    "revision": "1694dab87b21fe25fc548598514bf118"
  },
  {
    "url": "assets/js/27.a3e2bcb6.js",
    "revision": "d2176b5ead2144bffc320d2658248b5a"
  },
  {
    "url": "assets/js/28.278906f8.js",
    "revision": "5189d333f0bdea8ec0ea05d5bce9b6d8"
  },
  {
    "url": "assets/js/29.cb159d46.js",
    "revision": "a793e013b06f6725bddde75858cdaffa"
  },
  {
    "url": "assets/js/3.c04eb0ba.js",
    "revision": "173762cab3ac0583293f4de758a93090"
  },
  {
    "url": "assets/js/30.daa49c1f.js",
    "revision": "900b52a9615df8df216ad20fc9fa8ddf"
  },
  {
    "url": "assets/js/31.f554f420.js",
    "revision": "2d2aef24b845c4277a2b1af5e0e8bbb8"
  },
  {
    "url": "assets/js/32.4cae3e3f.js",
    "revision": "0ee531fd18a8f78d1a4e2c917a01ce16"
  },
  {
    "url": "assets/js/33.a0092f4d.js",
    "revision": "d27fe5f00aa6e09e35a585ffd85409b0"
  },
  {
    "url": "assets/js/34.98b15827.js",
    "revision": "eb9749a02165911151beb55d54cfc524"
  },
  {
    "url": "assets/js/35.82926880.js",
    "revision": "2af6ea7c781bd63976b9a73bdb99036a"
  },
  {
    "url": "assets/js/36.725c05c0.js",
    "revision": "16f0e42e74c0ee9446c5366e7cdc4958"
  },
  {
    "url": "assets/js/37.39e156e8.js",
    "revision": "2daaad6effb3e99654e0e11f5716deee"
  },
  {
    "url": "assets/js/38.73fea9a6.js",
    "revision": "ec0622a795561e235314739bdbadde1a"
  },
  {
    "url": "assets/js/39.3cbca778.js",
    "revision": "bf0cd9024b99a1f5c233f4fff8f5490b"
  },
  {
    "url": "assets/js/4.faaf6186.js",
    "revision": "54d430707d7d580d6a1a356696b5b322"
  },
  {
    "url": "assets/js/40.2ffda133.js",
    "revision": "f3b543beb195f23b59078392d202e47b"
  },
  {
    "url": "assets/js/41.f5b9084e.js",
    "revision": "97ca21f826d5d2504d1e7b2adeee108e"
  },
  {
    "url": "assets/js/42.8b092c71.js",
    "revision": "6f3ec216db8de58235c79a6a362c3078"
  },
  {
    "url": "assets/js/43.29320930.js",
    "revision": "30fb23a8f6bc7093d645d94ecd9bf50f"
  },
  {
    "url": "assets/js/44.7d550070.js",
    "revision": "7df1a846e088286b8c241cfce434c75f"
  },
  {
    "url": "assets/js/45.b8b3a073.js",
    "revision": "97b468dc3aebe6087ba97dd8b2169709"
  },
  {
    "url": "assets/js/46.24c63233.js",
    "revision": "4dda4225fff1eb4fa9bee08218fbc223"
  },
  {
    "url": "assets/js/5.41e1e65a.js",
    "revision": "c13b9e047557fc36791909c133cf934d"
  },
  {
    "url": "assets/js/6.740fda9c.js",
    "revision": "5046cf9467e2153bc50757972265732c"
  },
  {
    "url": "assets/js/7.08e32131.js",
    "revision": "df9ed9fbffc17d83f39ef4af01bf46eb"
  },
  {
    "url": "assets/js/8.f8a43a36.js",
    "revision": "b79b19848b9fa153d4cec60d471cbaa1"
  },
  {
    "url": "assets/js/9.e68ce685.js",
    "revision": "00c5254b571a9869d605070a7fdc6f14"
  },
  {
    "url": "assets/js/app.d1728b1c.js",
    "revision": "e1f7ba5de5a199fc8bcf01cbbd93c71c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "391538e05453ac078ef55586d75ed67f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "5f99c83aa3855a653ed45de26474091b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "44c9bcea2a621211200b8d27b9e2dcb7"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "fa87b35e80cd1491e61fd38265caad52"
  },
  {
    "url": "basis/algorithms/t4-shell_sort.html",
    "revision": "12fdb1323fa4b8e85b96ed22bbf3a758"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b99e3a45772901500159b373d3467e6a"
  },
  {
    "url": "categories/index.html",
    "revision": "f803bfd82598bf64c2ff4375e7c8b6fb"
  },
  {
    "url": "figma/index.html",
    "revision": "d1701f38d8040f1430a9bfbf7f913714"
  },
  {
    "url": "flutter/index.html",
    "revision": "0a5c7fc9d8dcf9a0676f1efe38024b23"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e38d850841525e122503d3d99b5686fe"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "beef43fd9bcb83437a8507fe83b03d91"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "74ad9c5a43a47a779c0dae7985c0434e"
  },
  {
    "url": "index.html",
    "revision": "c4263b372a9b5755a3f9dda53dc08a19"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "972820c1b7ecacb554d82c13b2bde59b"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "569173788536fd4f7e80fbe65857af04"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "32d72ad933e9791c63383154a8d3dcca"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "9f44eeac9b8e96de59cd30983b556062"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "34bdfd6f79140c29c9938ff174226223"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e223ec33c81daf090e74a18426aa4885"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "82c24b16db0cc23640fad12004c4a0b9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6f53f7dbc5c94084c94dabfcd4f6a81a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0ce0c600bac3f43a090b3c4f1930818f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c42d050dc262b25b0957caba96ef1748"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "6a16cccb18f4f99d197e4d71ff473a33"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e8d220b15a30991b128d0316bf3d301b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d4386b4847319135ed4626afaa405457"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1f9654bb4595bca4e9cf76f792ae4bfe"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "e0381e675cb44f74d7ee4718a7b37775"
  },
  {
    "url": "timeline/index.html",
    "revision": "72e631b97ecf366ab791c5ceacb88c58"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bf4befd72dca9ccad5acdb1dff849334"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "08f3ca5afde19f1fbb1142543ba97878"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "77d818ab609423748c90e9555b4f9413"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e6dbba0caad45c31a4e380e7a8a75ebb"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ee73e1bde15fb6819785f4ce3c52ab2e"
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
