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
    "revision": "1fdbc9a6e1beb11f657ff8d1124a4e82"
  },
  {
    "url": "about/app/index.html",
    "revision": "61d6d8e0344f2c326f6f24210e0d04ef"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f1d6fd3f0af3c69adeefbc658e842ad0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bf6e757c882e1241edb1005bb6df5e4a"
  },
  {
    "url": "about/index/index.html",
    "revision": "9d8e4631ec9dea14b40e81e39ba19e1f"
  },
  {
    "url": "assets/css/0.styles.39a5b3fe.css",
    "revision": "b867536469b2ee28cb88d26f4ef7aa1e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.bf4cb53b.js",
    "revision": "c0f0fb2618aa77ea17f74c2074fa96e1"
  },
  {
    "url": "assets/js/10.bc69588d.js",
    "revision": "759269e56ee985ff89687efc5ca14d20"
  },
  {
    "url": "assets/js/11.4737e7cc.js",
    "revision": "42ebabdac185c33f56d7a0bd5af559af"
  },
  {
    "url": "assets/js/12.a5c8d812.js",
    "revision": "4f280ee8e887e27bab449ff80147375d"
  },
  {
    "url": "assets/js/13.4035d729.js",
    "revision": "8962171f2856a5afe002f2e60bf6e302"
  },
  {
    "url": "assets/js/14.582c9236.js",
    "revision": "e3cbb319e52df71d95562a7295b347f9"
  },
  {
    "url": "assets/js/15.c7aceabd.js",
    "revision": "0609a632e7b433992ef21061d937649a"
  },
  {
    "url": "assets/js/16.2a615f1d.js",
    "revision": "7a559342e32a06cd278593fec3b683fa"
  },
  {
    "url": "assets/js/17.dd5e5e68.js",
    "revision": "0521860cf1f3ee488562d53cf1ea0bbf"
  },
  {
    "url": "assets/js/18.e4cee0c9.js",
    "revision": "4504ac638613168aa5c8d0a4c947e29f"
  },
  {
    "url": "assets/js/19.c72b0ace.js",
    "revision": "dfec3d46ab03085b504a9d8d3cb2c95b"
  },
  {
    "url": "assets/js/20.7c454799.js",
    "revision": "f97b79a05cd407e756d1966c4ec0f773"
  },
  {
    "url": "assets/js/21.dbff7e82.js",
    "revision": "82f203536cff21a8718de9333b53f9aa"
  },
  {
    "url": "assets/js/22.ff673fdf.js",
    "revision": "18306c61e84805d0268af57e2a4a2371"
  },
  {
    "url": "assets/js/23.d41d5ea4.js",
    "revision": "d9dee3c9131ad9c60f69cb848d3edaf1"
  },
  {
    "url": "assets/js/24.15aca217.js",
    "revision": "f4eafd0a36e38e5f1e04e4b06b326240"
  },
  {
    "url": "assets/js/25.0dffadd9.js",
    "revision": "2b4811fb0f97a69f819b1916e6ea0d55"
  },
  {
    "url": "assets/js/26.a2364e9f.js",
    "revision": "b77d937044e016aff7f2289a751d60a7"
  },
  {
    "url": "assets/js/27.65170af6.js",
    "revision": "6fddead4a428a1e7aff30731897f2ad4"
  },
  {
    "url": "assets/js/28.a150bed0.js",
    "revision": "f3d7d18f608dd9e0351b81674a088b64"
  },
  {
    "url": "assets/js/29.99170230.js",
    "revision": "dac071771484468d79489b5d77bec20b"
  },
  {
    "url": "assets/js/3.c5c69ad1.js",
    "revision": "4c28f4b989709616ad27e3ce1b7dfc31"
  },
  {
    "url": "assets/js/30.ac21f7fa.js",
    "revision": "26a970804a59ae657a41eb89fea2fcad"
  },
  {
    "url": "assets/js/31.8a1af7db.js",
    "revision": "9e833733592ea0e2b5c5248f17e3c426"
  },
  {
    "url": "assets/js/32.f3eaf771.js",
    "revision": "0c425f65ce48a07d7de659fc9ad11747"
  },
  {
    "url": "assets/js/33.5f97ffdd.js",
    "revision": "eb84f22e9ff4f6eed1f17db2b7aab0dc"
  },
  {
    "url": "assets/js/34.ed47d1aa.js",
    "revision": "4981f352e5402d29a19f1bd23e02bc93"
  },
  {
    "url": "assets/js/35.16072dc8.js",
    "revision": "1e9188aa6e4238ec46655f1a12a3961d"
  },
  {
    "url": "assets/js/36.5ad00571.js",
    "revision": "c82dca6c8fa09e685a20bbe62ccb133c"
  },
  {
    "url": "assets/js/37.24ca501f.js",
    "revision": "5b893d7667de5eb2f893c51b5006175b"
  },
  {
    "url": "assets/js/38.06031844.js",
    "revision": "34b81adfdbd9649172ac4f1e95e5c639"
  },
  {
    "url": "assets/js/39.213dc439.js",
    "revision": "d40179bdbca77a5594383cf9d2275892"
  },
  {
    "url": "assets/js/4.abfa018d.js",
    "revision": "097593dc8bf932f21249883d7b3af0c6"
  },
  {
    "url": "assets/js/40.4f428d79.js",
    "revision": "f2def8aa24142e08dbcc7ada2c0fca9d"
  },
  {
    "url": "assets/js/41.de8c050f.js",
    "revision": "0ae5e18ddcb332eaea9ea093d5ceab0b"
  },
  {
    "url": "assets/js/42.718ad8ef.js",
    "revision": "5bcd2a9e07c1242d5b0ddf8b6702fb32"
  },
  {
    "url": "assets/js/43.91449bc8.js",
    "revision": "75309216885333b2aa2584ab98ac0b2f"
  },
  {
    "url": "assets/js/44.5592c5d1.js",
    "revision": "7b549f5dc4c20752b389fa2556b95b9b"
  },
  {
    "url": "assets/js/5.dcc4e78a.js",
    "revision": "999121ce119be37f9b53b8793dd7d482"
  },
  {
    "url": "assets/js/6.2f5eb645.js",
    "revision": "8c22eeee66f2a9a89347b8b0b0e67c99"
  },
  {
    "url": "assets/js/7.f4ea7564.js",
    "revision": "be161682945a63e4cf854dbcad89abc0"
  },
  {
    "url": "assets/js/8.7487a716.js",
    "revision": "c956c063af5279da119947e4f4978140"
  },
  {
    "url": "assets/js/9.8e5d9dc1.js",
    "revision": "f3d5576189b76ddef4424ffbd963356c"
  },
  {
    "url": "assets/js/app.c5c117cc.js",
    "revision": "ff4df0c36b92b2d09115d8250752d407"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "bb98e9c6046232076ea03791c6aed1e1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0e5f84270750aebddfd7ee7503ee0fd9"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "3907a8b7493a2590f14571b2a2b3e29d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "bcb5b3c2a610d64354543daef91f8251"
  },
  {
    "url": "categories/index.html",
    "revision": "2858de9e21e70a1ba7ee0494541e8065"
  },
  {
    "url": "figma/index.html",
    "revision": "c6c085845edb30d9e43c00b419ff8d9a"
  },
  {
    "url": "flutter/index.html",
    "revision": "659db38353518b4f7a828e9fb51a5438"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8cfc934c1dac1065a20be6eb95067c39"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "976af9bfb2ddd2e512d98e5ce8d4ceba"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9fb64a4bf4d7899b80238ea0905615db"
  },
  {
    "url": "index.html",
    "revision": "fee9a99dcd0d70f3731e9b16316364cf"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3d9b919ac0a589e11a5ffb09b188a34c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "4338e1730a0cd9acb0f3d2c4256fe1b2"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "c3766b70ad6b65400999df6abfc24014"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "6f956f6a922c13b95182ae0e96a8271c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "27db76578a307e8c07b09bfb27df966d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ad71ed24a2562ddc8749f856c2e18275"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3fc8bf8f4a0b1a3a5c7269b0177e997f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0b598e70d525cc880cf847af936dc1b1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c75288d09caf643d88300e7d081171d8"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "540a6a7a00755405c3d794fe8f76384f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ea3351c981726887d8f913d07e42afbb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3f605c2105a379c5e8f8e4f2b6325dc3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b8e9e02f86574b847d4c321a44dceb0c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "90a03f31007f48591054515e1a52ef69"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "99e03d4e4d974e3791b681296715a446"
  },
  {
    "url": "timeline/index.html",
    "revision": "6e8327263698e4525c9019bbcc98ac81"
  },
  {
    "url": "tools/git/index.html",
    "revision": "18a5939f19d4c9a71d48d047f64a103a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "290153e9e58fdc2579f3ce8db73f7f3e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "69c1cf8a8080bdcdde6e067cbc78f40c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "aa4a783b1fb4577444e4a50d9a787d9d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a66f6bf17fb9c1b8fa59eb5ca66121f4"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
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
