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
    "revision": "025e4f9004ad382ce9f19a6c66ae655c"
  },
  {
    "url": "about/index.html",
    "revision": "e7e07bb2a1c36f1ba238b67c5a74684c"
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
    "url": "assets/js/12.9df92401.js",
    "revision": "9649766f01804278b7aadcf85173f2b7"
  },
  {
    "url": "assets/js/13.2aa5cf53.js",
    "revision": "beefead115b7c144f3cf008abef4c4de"
  },
  {
    "url": "assets/js/14.7fc9b944.js",
    "revision": "75118b44c842e4b63bd56b0011262662"
  },
  {
    "url": "assets/js/15.d6d9a11d.js",
    "revision": "e70f211dffe4bc429355b78fea710476"
  },
  {
    "url": "assets/js/16.06002e15.js",
    "revision": "030268be8ba80e29eb607abac2e0ab6d"
  },
  {
    "url": "assets/js/17.7f584568.js",
    "revision": "7d6fce07ec4051b4b78ed78097cf985a"
  },
  {
    "url": "assets/js/18.634679da.js",
    "revision": "6486eab6bf77e05784a7930e239e2401"
  },
  {
    "url": "assets/js/19.1db0c2e0.js",
    "revision": "2dc92155dd70d5e9ba329772f0484f5c"
  },
  {
    "url": "assets/js/20.1f5b3afb.js",
    "revision": "9ab151889cf9ccf5a2cc7a30a4340f52"
  },
  {
    "url": "assets/js/21.e59834a5.js",
    "revision": "bc706e5d0d40a6c0b8807c3af9cf965e"
  },
  {
    "url": "assets/js/22.febd57fe.js",
    "revision": "b0ea94c2fbb4661ee2f6a87542f47d09"
  },
  {
    "url": "assets/js/23.2d5d85c1.js",
    "revision": "bae494a41ce59253c245696876a6ef59"
  },
  {
    "url": "assets/js/24.d9bafe8b.js",
    "revision": "2a2bcbca5a25fb2e8ffea8f8779dec21"
  },
  {
    "url": "assets/js/25.abd6b6e2.js",
    "revision": "8afe5777e98f358a3e243fcbce079917"
  },
  {
    "url": "assets/js/26.8fbcfe20.js",
    "revision": "e794aa7e927142a61b01f40320b58827"
  },
  {
    "url": "assets/js/27.310873ea.js",
    "revision": "37bc98cbc0c04adf91618c92fac5ccfb"
  },
  {
    "url": "assets/js/28.b07e62f9.js",
    "revision": "6eae2d9689c149cc0c3e87ef1909d50e"
  },
  {
    "url": "assets/js/29.03bc7860.js",
    "revision": "3ee65d79ae7ca3d0b0e733d6932dd3d0"
  },
  {
    "url": "assets/js/3.c5c69ad1.js",
    "revision": "4c28f4b989709616ad27e3ce1b7dfc31"
  },
  {
    "url": "assets/js/30.288c5e61.js",
    "revision": "8eca68c438526bec215e7cdc4e1c65dc"
  },
  {
    "url": "assets/js/31.e5939aec.js",
    "revision": "a062e6811ab15db16bcdf8dbe6a6f790"
  },
  {
    "url": "assets/js/32.dca42f86.js",
    "revision": "fdce893bb3a538df6acb7a739703ec24"
  },
  {
    "url": "assets/js/33.a0d07c11.js",
    "revision": "e7b42abfe94b9c7d8e57c7105320c01c"
  },
  {
    "url": "assets/js/34.a3033ce4.js",
    "revision": "156ff0982eaf529613d8835b9daae990"
  },
  {
    "url": "assets/js/35.e6407b1c.js",
    "revision": "8c154442f41b592552ab801e2156a22d"
  },
  {
    "url": "assets/js/36.974701e7.js",
    "revision": "92021802193be01d657e5a621b97d880"
  },
  {
    "url": "assets/js/37.da4557b3.js",
    "revision": "e167172214a3ba694e64299c9a4a0245"
  },
  {
    "url": "assets/js/38.07edbc0c.js",
    "revision": "3a0587008dd8bec525b7918040adfa91"
  },
  {
    "url": "assets/js/4.abfa018d.js",
    "revision": "097593dc8bf932f21249883d7b3af0c6"
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
    "url": "assets/js/9.6e43d9cd.js",
    "revision": "1fc7a39f257f8583916b0f4e2cdcd5c1"
  },
  {
    "url": "assets/js/app.8eb3e22f.js",
    "revision": "11036145bec65c4ab210d7717b63e594"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "5a8792b8f580b3fa09372e34ea7f830c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "24d6f679ec3a2647c8157e145a42a75e"
  },
  {
    "url": "categories/index.html",
    "revision": "e18758b83b5dfc7225445a71dae01611"
  },
  {
    "url": "figma/index.html",
    "revision": "f02e240a24fbc97cf333679e69202254"
  },
  {
    "url": "flutter/index.html",
    "revision": "05c465814f4addef5a972f75ec4e773b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "46f40ed16329f63e0d5eeaf821ee3fc3"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ff0776f2f97c2304122da7ddecb3e183"
  },
  {
    "url": "index.html",
    "revision": "515a57b49da9933b24daad752ab8c55a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6e99d707e4b0a7800cedb8ef33df1009"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "5f0129c6a8a6a0ad6a40515630c26eef"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "5a945c0a53aa6428e64559d81349610e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "c17f20965e035766c32a4f996bb780cb"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "e5b97510d833766586276e2aa08dcce4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d1b3a7b3bbaffebea97c64ffe17ced86"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "f65288be5fee90c23d6b06656a417515"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "bafb615077cb9cf82b6c654b44837278"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a2466b3d44c08f48354eec442d6c3bd7"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b2f8c884338c1e5fa134a36e2c4dd6fc"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f40151e9764fb94f6b4671da00fcebb1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "4994686c59a357f65210b9cae069a167"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "995e84c2c399387a4978fa6ed72d833c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b8de9315164909b60064386a560659d0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "cea7603bac5df23d43fae96048c86cd7"
  },
  {
    "url": "timeline/index.html",
    "revision": "431de386192f1833eecfccd9fe3eed5f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cd48a5950831cb8d8eecb95decbaaee7"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1c89c8f17cd71da82893a3e99f9843e7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e3973e84b17f87113e636f223fe943de"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a4dfd8d680efa3182b8416b6f33b6949"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bafbccd92194b889d1c38ff3c961a15c"
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
