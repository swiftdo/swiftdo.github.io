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
    "revision": "a67e586601bbbcbc77788c8a6d85dc0b"
  },
  {
    "url": "about/app/index.html",
    "revision": "1c76ef1d826f75894d886335c9b04099"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0c127dad778e44d466023f18611d8d37"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a7a5251d52ae45c6128a70c8d537c810"
  },
  {
    "url": "about/index/index.html",
    "revision": "92e51f2c3b2e1c9c132a13c13b4cab20"
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
    "url": "assets/js/app.5dc53b0d.js",
    "revision": "5f688a0d7d3f49fbdcc51c4a77d60fe3"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "41fe95129c57cbc56618f343d53ba4a1"
  },
  {
    "url": "basis/os/index.html",
    "revision": "4ebb3f3408e2de0fc2d22e69fa22942d"
  },
  {
    "url": "categories/index.html",
    "revision": "24d24214c1a951ec009eb4134fc8ca4b"
  },
  {
    "url": "figma/index.html",
    "revision": "fc570f0c0fff7094fc9efc8c1080e96b"
  },
  {
    "url": "flutter/index.html",
    "revision": "e390691e38f498ea8b03b408cb315cba"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e9831027f81f3f6d3ace44eda5c61f8d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ae0382db0f975058e4f9ab04e9fbb0de"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5a647fcecdce67023ffe77ff03c01cef"
  },
  {
    "url": "index.html",
    "revision": "5c69e1143fc9c36cfc2adc04f3ec1f7d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "280be8dd9f33fc09ad6025128db0d417"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "cab1fa4577e407a32af3191cecd6fb14"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "745de17c85d9b880868cb311a2a720b0"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "1116f2ea4685d8823ea7e63877e715a0"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "d90600ca4f3c83ef65e39ab1707c28df"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "941e392f108849ea3edba80e8cae4eca"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "311a9334461de1a0ae62c94644a66498"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f9149d4dc3e905dc173d10c09961371b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "037a22ddbbe73ad9cd68ae2311916a6b"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b7fa08dfe8da5937bd9023806bb7e086"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "dd1ce4e83bb3c556323eb7ce9e279100"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "19ea95f07dda33a43e458b00d3e06bdf"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "adf037257e48f6250cb86b302fc92bd3"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2bd49c12e826e32ddf68db424ced4693"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "7ba31596439e2660568644d86b38efe2"
  },
  {
    "url": "timeline/index.html",
    "revision": "03f87144f63e907887cad821b06c2b82"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ce225a280158190213783b0fbe50d576"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "42ef5cd41ee0cb37bacd90d6fab325a3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cc4c5151c0ac4bce7f40a3ba4ad9f952"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "cd2d1d00afb3bbbbf92eeb064d4cef79"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1fe3aa9006a8eca0857bce52e0b0fceb"
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
