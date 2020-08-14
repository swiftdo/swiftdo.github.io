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
    "revision": "82c56206511a09e420ccbb4445d3eb26"
  },
  {
    "url": "about/app/index.html",
    "revision": "1b29721a51bd2ac84b21a72a791d0531"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "bfa7fe762a816a7c8c06b24cb2b8fed4"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bb8ebcad36949a15f5490e4655008e03"
  },
  {
    "url": "about/index/index.html",
    "revision": "ad28fa7c52feecf458220edfceb48880"
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
    "url": "assets/js/17.ba0b1358.js",
    "revision": "13a9d91548442bacf3bdfcbd17c992b8"
  },
  {
    "url": "assets/js/18.68d6e77b.js",
    "revision": "ddb48a1e5b65bbc709c0d4353875fcc3"
  },
  {
    "url": "assets/js/19.46461368.js",
    "revision": "2d996098b2a5bab6a4ec7f821882e39e"
  },
  {
    "url": "assets/js/20.11d08367.js",
    "revision": "cb3903258cb0619b9293e34be264e6e8"
  },
  {
    "url": "assets/js/21.2a4e1e82.js",
    "revision": "af99ae38df598f9d768199ccb35ffeff"
  },
  {
    "url": "assets/js/22.62640ff5.js",
    "revision": "51b4b40db58e4ebff3cdbf2a47574c61"
  },
  {
    "url": "assets/js/23.af3766e5.js",
    "revision": "b3450e38119e94103d86e031159a11bc"
  },
  {
    "url": "assets/js/24.635baba2.js",
    "revision": "552c6e831f231078f4cf5b92c999b3f5"
  },
  {
    "url": "assets/js/25.191fa62f.js",
    "revision": "9f8a32527f35a1aec79202b4a6df0f9b"
  },
  {
    "url": "assets/js/26.9dfbdd24.js",
    "revision": "2f4aa142e492394a129499148a42a93b"
  },
  {
    "url": "assets/js/27.57116377.js",
    "revision": "0ce793732925a90e779391203ccf81ce"
  },
  {
    "url": "assets/js/28.f0edd293.js",
    "revision": "7fb1276a80c1b3e22bee4b5d058779a0"
  },
  {
    "url": "assets/js/29.7c4489a2.js",
    "revision": "01298c91609149750e102521cb01dd94"
  },
  {
    "url": "assets/js/3.c5c69ad1.js",
    "revision": "4c28f4b989709616ad27e3ce1b7dfc31"
  },
  {
    "url": "assets/js/30.4126d7ce.js",
    "revision": "0098a8c85c5348993c2c7fd6eace5be2"
  },
  {
    "url": "assets/js/31.c6f69768.js",
    "revision": "3db668fce89770fac6978390852ea090"
  },
  {
    "url": "assets/js/32.7a21b7af.js",
    "revision": "837d20c837b3f6f50ffe1ec1750df255"
  },
  {
    "url": "assets/js/33.559e63a7.js",
    "revision": "0026d44c940491145f0c2fcb4cbe1378"
  },
  {
    "url": "assets/js/34.4212a1af.js",
    "revision": "d53fa4228ebc27cd4d5d2ac58e2c1727"
  },
  {
    "url": "assets/js/35.27a051bb.js",
    "revision": "b7c051029fe462b5bd7e5603b19a525c"
  },
  {
    "url": "assets/js/36.997098c1.js",
    "revision": "2140104b7a1265d78fbb8a54f93bdcce"
  },
  {
    "url": "assets/js/37.d9628863.js",
    "revision": "24ab565b4351af7b151b604c67c5beea"
  },
  {
    "url": "assets/js/38.827868b2.js",
    "revision": "7e6db8b25a5c1f95d63c46527f25bda1"
  },
  {
    "url": "assets/js/39.67bf2fdb.js",
    "revision": "e61212f972b3573983cf421b55a6156e"
  },
  {
    "url": "assets/js/4.abfa018d.js",
    "revision": "097593dc8bf932f21249883d7b3af0c6"
  },
  {
    "url": "assets/js/40.e8681f82.js",
    "revision": "1893ece424fc76efafc29c97c0902ba2"
  },
  {
    "url": "assets/js/41.7842d9e4.js",
    "revision": "e8de416a769212f7c2a0e20f6b3fe648"
  },
  {
    "url": "assets/js/42.6ec10e3d.js",
    "revision": "ddcd379123f3ef99613c4ab757b9ddac"
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
    "url": "assets/js/8.2a1ec8ba.js",
    "revision": "f7605ec6ddba9a84fc66481e51b5b350"
  },
  {
    "url": "assets/js/9.24682f95.js",
    "revision": "dd089dec7bcb444a4a686f9a52d0fe02"
  },
  {
    "url": "assets/js/app.25aa364c.js",
    "revision": "4ebe5f81a96d0a152a2ae34cff739e86"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "ed13fa7f60bd76048242e38df08dbca4"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ed4e71cdb69d0e3a3d48c36296825f3e"
  },
  {
    "url": "categories/index.html",
    "revision": "15c8e7794146fa7bcceb6475dda5c6e0"
  },
  {
    "url": "figma/index.html",
    "revision": "cb7de282412843c16f1ce9f2e88ba44e"
  },
  {
    "url": "flutter/index.html",
    "revision": "9c8dc53ac029ccaef06e3aaed4fc6640"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0424ea056430a752c3aff15b4df9021a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5f3ac065447b1c1ffc69a613eaf8aa86"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d89fb200fd0be87b4755a8b3c43604e3"
  },
  {
    "url": "index.html",
    "revision": "442884e6218fa7958e118b277f0a0444"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "4d9adf1229bfb5d6fa053d344c3ec609"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "0ac2526443aa38b89af2488da50fe11d"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "593286023f4ccd97381d6bc930537216"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "154735e48a0fd67e5bd2e5060c37b84b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "6a1e40d4048a566554e1d1debdfe3cbb"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b911b0184ee0686f0492d75ff7b08c6f"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "d7b525afcbbf9da99b005d9ef808d123"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "80f3ebf83a6a9c27f22439addc0fd69b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "35ec580a19ad40c5035f009988e98fb5"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a4cee68bc569de74c857397d353386da"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "4e4f55141921863b8c231a9821a9563a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "eaf9224ac889a662b70af0d5140694e5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "979a41f6d408387b7bd2789f34194de8"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "79b1cb1c662d103dce7605d0c11e0ea9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "dfbcd6989aa8adbcb57f074e824a544e"
  },
  {
    "url": "timeline/index.html",
    "revision": "0684415aea5df598d9637d70042c2407"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3e12b89599a55661bdab456c2cf0c6b0"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8cbbc49e8480141c4a7c72bf99ca1d59"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "31ce9976b2ccd95948315c08ecb489c5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a395eeefa6994efa5f8dcad9e3f406ff"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "36f776f9879973de4f1f907443f838dc"
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
