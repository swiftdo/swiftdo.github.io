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
    "revision": "80599b814f7486dd55a0cdfaaa364ef1"
  },
  {
    "url": "about/app/index.html",
    "revision": "3938e00d9788641bded92b2a92c33e2f"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "66fb7fb5f078a70af4df7df80c6ddc6a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f65231b738c955eb4dc8545d47c60610"
  },
  {
    "url": "about/index/index.html",
    "revision": "678ca95368730b44c8c26268e0955f57"
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
    "url": "assets/js/app.325c8e14.js",
    "revision": "e1a839bac6ea1d8187d984df7309e35d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c7f99d387241d61fe0eedc5e014864cf"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "240817638fc05e035adeb46e20631082"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0b918d39917b7c307592e7b5a6f6f72b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ec1a8fc6333169484b3ab4e073e04f0d"
  },
  {
    "url": "basis/algorithms/t4-shell_sort.html",
    "revision": "3d34e5cc937550dc30e381ef0a4882b8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d96d4217d4c5fa0562c299a3f3352036"
  },
  {
    "url": "categories/index.html",
    "revision": "552cf50c0c4bf8473bfb288377edcfe9"
  },
  {
    "url": "figma/index.html",
    "revision": "2230ec7739d98dd44b560fa0a039dcc4"
  },
  {
    "url": "flutter/index.html",
    "revision": "aed4dfce749fe8ec4092bfd032469c9f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c00674fd2e68e4c01df37f90a00fb5f0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "802dac0f754210a7edc9253413e992ce"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "77d4901bd346e5ba11cf5a7ec364909a"
  },
  {
    "url": "index.html",
    "revision": "d6d49d6f376ce52b22597b0771c49163"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9241904d194a82ed6212dd8eed51e725"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "47764fdd15ee96dc967dc0a79b9559ee"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0235efa40d37fb6543e6669abd07551d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "f36202bdb2881dff7b19fced00e506af"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "31dd9894cd565ff4aa7b427411d0110d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "dfc2b3e01a3786eb4e81757a7798de50"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "bace46ff8e906c2d58c2ab4c1ba63bae"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4966ae9aa2298988df6ccae1b8695537"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "74c270a72158e49cf29db527dbf52e10"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a775dc876cbb78f41829b288c9d332fa"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0386f7693fb1b36315aed71305512c4e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "466f187c624a2616302defa4173181b9"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b37e63076235ce9f237c6f4cc9757e65"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cbd246a32d8e4aa81ab7ce2924ed58e2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "f98e5c38214f29bf4e56d953502f16a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "6981f814d400eaafffd45b95f04b6961"
  },
  {
    "url": "tools/git/index.html",
    "revision": "786465f0fe54b54e8418b454194c49bf"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "460e80f52775104f4d7300a289cfe768"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "eeb32f4263ddcd52bfa19b5ae273bba2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ded98ea0d2d4226ff4bce1f768281181"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7c4e8975a99dc87b97532fad7bb01d52"
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
