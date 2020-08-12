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
    "revision": "253c02fd0ba0b127741d7467116a4435"
  },
  {
    "url": "about/index.html",
    "revision": "abcb030388b2e399e1b5e01f82f7f2da"
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
    "url": "assets/js/app.751f6c04.js",
    "revision": "202346dc21bbefc709bffd75858af7ce"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "3c0af3df3ebac00efd4f937ef8287928"
  },
  {
    "url": "basis/os/index.html",
    "revision": "52b342e0ddd257e7f231664164cf60d6"
  },
  {
    "url": "categories/index.html",
    "revision": "2725ec997c22a42080f97442b6fde8ce"
  },
  {
    "url": "figma/index.html",
    "revision": "4a5130478c94adcda6aebd19096a9c3f"
  },
  {
    "url": "flutter/index.html",
    "revision": "3385a6bef440af65d24ae1f83ef946e7"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "853f5e851d87457219d27079852f0077"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a52d55a4c466b3613becaa198374310b"
  },
  {
    "url": "index.html",
    "revision": "75f6632954b4f22baee17be983fd71c2"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "cd11395c3b0c3bd4c8e519cedaa9853a"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8817682ef2ba131c361fa46991d05459"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "c56dc518ea166e8308dd201b597e0a48"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "fa0b182ed78dd72355c7c0fd2bf22193"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "c77da1be4275e146c168d3dd092f6b71"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "bb25e6ec8a58948e5876aac467efc4ce"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "48d520538d38a113f8e0077a1fd4a975"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ffc23849665c9abf83b876145955ef1c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "69180e3b34ce54bfd83a602a722a0fea"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "2bc6d56eb5ae94193f3527d1f6414d7d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "073a194d5524d1c62f9c98906ba7992c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3d84a34aa4d28ed5cc4275f2cc38e308"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ee47d890ad64aae03f9e24904346b2c9"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "467ac86e8386e780be0f40658dfffbc7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "1efa027271b55387c204ff3abc12db2b"
  },
  {
    "url": "timeline/index.html",
    "revision": "10d0cac0a69ba4604fceaf4aa4b98128"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0a3d0fe0a106db2ec9bd9f9d8ea3eb07"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3a0eed86a1c4ba1be91daebc0f5b2601"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0592870c1317378c9f9f53190a7cc3ba"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "dedbc128ad3636579d89d8eefa1be866"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2d53005d805af4c9a9ec54d328a77c49"
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
