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
    "revision": "1b657219580251dd181838a2e90b1a37"
  },
  {
    "url": "about/index.html",
    "revision": "33fa036ed4dfed1f51556c6992f5e59c"
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
    "url": "assets/js/19.3097ea19.js",
    "revision": "4f7c30ceb6a108cb41a5e6d5c738b348"
  },
  {
    "url": "assets/js/20.c393cd73.js",
    "revision": "bf3f46b92337e60d13bf896638db6f6a"
  },
  {
    "url": "assets/js/21.3953ea04.js",
    "revision": "bb50a8c3d2a68ce369530943cbf7863d"
  },
  {
    "url": "assets/js/22.730f40d5.js",
    "revision": "3b817566e1becce39d96c8ec2db30cbd"
  },
  {
    "url": "assets/js/23.ffe10d10.js",
    "revision": "8aa6b7e91ab8d17788b60585edf8095c"
  },
  {
    "url": "assets/js/24.3fbb288b.js",
    "revision": "400bd1f735e1bd94d3284dd8953247de"
  },
  {
    "url": "assets/js/25.0bded2fe.js",
    "revision": "bcfe9f2310152b65e3b88f2e0ac5aab9"
  },
  {
    "url": "assets/js/26.06877065.js",
    "revision": "6ddb7447b0cd356c2a296bc6345b113a"
  },
  {
    "url": "assets/js/27.679a536f.js",
    "revision": "44c862f50cd137388f468377fa297205"
  },
  {
    "url": "assets/js/28.c567e3e8.js",
    "revision": "9b830d1c1ba75f68a96f3169f23a78ad"
  },
  {
    "url": "assets/js/29.5968e3f5.js",
    "revision": "040c8934bb4aafa4eae62de3644983fe"
  },
  {
    "url": "assets/js/3.c5c69ad1.js",
    "revision": "4c28f4b989709616ad27e3ce1b7dfc31"
  },
  {
    "url": "assets/js/30.7952202f.js",
    "revision": "c3ffe9f447fe0db7b836c53324fcf56e"
  },
  {
    "url": "assets/js/31.696321dc.js",
    "revision": "a539bb65206f9119ebd7724f35530162"
  },
  {
    "url": "assets/js/32.85e9cfd0.js",
    "revision": "8cd5cf3b997802f5d6c72300136e1960"
  },
  {
    "url": "assets/js/33.72ee8dc7.js",
    "revision": "5dba7fcaf8b40acafa28dce0aed8e68e"
  },
  {
    "url": "assets/js/34.739649ba.js",
    "revision": "e118f33cc215e89037bdfaa6dc4a21e6"
  },
  {
    "url": "assets/js/35.0c31a36f.js",
    "revision": "35113f59296b861fbcf5fa075f6b5f50"
  },
  {
    "url": "assets/js/36.be05d98d.js",
    "revision": "6f8ee0395d3b80875fbcc0587a7f21c6"
  },
  {
    "url": "assets/js/37.1efecab5.js",
    "revision": "4b83335679ea9650ce0ead39ae591c45"
  },
  {
    "url": "assets/js/38.6fc9bb45.js",
    "revision": "a85a07d990a5e952e14890653c78da7e"
  },
  {
    "url": "assets/js/39.2c36c81b.js",
    "revision": "a2c8a79ffd3d59cf79ef7dee438d993b"
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
    "url": "assets/js/9.c577c35f.js",
    "revision": "85f2f4ec1b25db1f0cb1d17094684707"
  },
  {
    "url": "assets/js/app.20c33361.js",
    "revision": "ccf2a7df7da52528dc94c98a10765fa6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a81fef50e7f77049220a50c5d2f07e8b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "db1c1d4ecfa5d2790616bd83914e2811"
  },
  {
    "url": "categories/index.html",
    "revision": "bed9c01d10efcaf317e400d45f74bde5"
  },
  {
    "url": "figma/index.html",
    "revision": "ceac0e4d60f9031793dde15a3dc6e0d5"
  },
  {
    "url": "flutter/index.html",
    "revision": "bc5b24a155412b89b884d6284745a457"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9dcdc105bdd94692a2eacb98c16facf1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c0f0ef2f7f4196c68cd11aa169988a18"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "39856c9288827747ba15151a9c52a6e5"
  },
  {
    "url": "index.html",
    "revision": "b8db209e065fe09daee22b57d159251c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bb7e39025557fbcc870715d888d403f3"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "d15134e4e364cea428f730b3bd681441"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "b546136445e20374285507cd3d6447b7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "783f91e7ca3afe5f1c5ce89e64826b66"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "024aabb85f5629ec26a6e511a8d4965e"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "7c59c6f8ae06c44dc5bbe3626c3d6d02"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "2fe349ec4b1b653d1e04f4f0d0bf565c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "aa805d53223c8333b6fafb49986640f6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "10474d672371e21889d06de5b3986e79"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4afd39c4c18542a9f6f2f953e8418508"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b03056ddd0f30c85f36aa8802258a01f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "eea0d86e4e6c6e0c0fd41b9cfd45084d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "40e1b0a8a877cd6049b038f9b87c9543"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "973da9308cc44d350e6a93769eb689c0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "7939f261a1bfc224092174d053040855"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f63fd245ab60cc73c521f1f425bb5ef"
  },
  {
    "url": "tools/git/index.html",
    "revision": "de325849f6c825a1c40b32885fd6b860"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7c62e7585ee5f4c9b8d60b44f17e21af"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "688e823e8014442bf67b6055f2b6be43"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b573ecd4658d449744caa4916b1c2245"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e631539bfbcece25d51d4c2cd463d2d9"
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
