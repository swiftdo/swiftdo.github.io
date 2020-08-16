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
    "revision": "7dd3d042c286fa2873c7c7fe659fa240"
  },
  {
    "url": "about/app/index.html",
    "revision": "302f68ffbf15c934335100d91c1737ae"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f88ac3a5ad543b2b60ed0f6dd5e0db1f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "fe92d89c7177d02ecab27c38ab28fbd8"
  },
  {
    "url": "about/index/index.html",
    "revision": "7ec78f35d72c50a4839b6f90ceb89c12"
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
    "url": "assets/js/19.d2a6cb00.js",
    "revision": "9bdb3bbb6e82d6a7c37778b099ebc623"
  },
  {
    "url": "assets/js/20.22cdd10a.js",
    "revision": "8fd7a0dfab99f71433faadab72b14d64"
  },
  {
    "url": "assets/js/21.4ad1a6f6.js",
    "revision": "db31bcf5130a8cfd5af3c3b0bfcd7521"
  },
  {
    "url": "assets/js/22.d051cdcd.js",
    "revision": "a91ec214fc88488ae634790824627df3"
  },
  {
    "url": "assets/js/23.e15fc7ac.js",
    "revision": "5ecc1714f82cceff43119323231afe19"
  },
  {
    "url": "assets/js/24.968c0030.js",
    "revision": "81403322541ccf7d8657d5a868cb599e"
  },
  {
    "url": "assets/js/25.70eb044c.js",
    "revision": "2f79a3c8a7f0b9b6a40f6dfa89b22e95"
  },
  {
    "url": "assets/js/26.680a2bb0.js",
    "revision": "582577ff97097f3843bb0cf259563a94"
  },
  {
    "url": "assets/js/27.dcdcfa7b.js",
    "revision": "0f19b99d54de8a022b32142750f1310f"
  },
  {
    "url": "assets/js/28.b47109d2.js",
    "revision": "0561e82bb6ce9ad3bae679c57dfec961"
  },
  {
    "url": "assets/js/29.9a1ba8e8.js",
    "revision": "f5652e9138ed589fbedb7bfd0b29806a"
  },
  {
    "url": "assets/js/3.c5c69ad1.js",
    "revision": "4c28f4b989709616ad27e3ce1b7dfc31"
  },
  {
    "url": "assets/js/30.93c34dff.js",
    "revision": "ce31d6b3cc0049773a9525fb02e15ea1"
  },
  {
    "url": "assets/js/31.4ec331ca.js",
    "revision": "91827f1760c3e9a501de6f42e32b4237"
  },
  {
    "url": "assets/js/32.ded95339.js",
    "revision": "2309747f1a0536867f927c8e3d9ce4e6"
  },
  {
    "url": "assets/js/33.fbb4f8cc.js",
    "revision": "4c96c82ac51fec172e56b14bfcb851c0"
  },
  {
    "url": "assets/js/34.780d50b7.js",
    "revision": "5748203192c6fef735c46cfe17f18aa8"
  },
  {
    "url": "assets/js/35.e6e65177.js",
    "revision": "30efa01eb6245119188ff898a7e13986"
  },
  {
    "url": "assets/js/36.267b41d7.js",
    "revision": "cb8db72eed9049b6cfd383dd47df248e"
  },
  {
    "url": "assets/js/37.521f825b.js",
    "revision": "46f8c0374a5fe6c0fae2a37f45038c6c"
  },
  {
    "url": "assets/js/38.bec293bf.js",
    "revision": "affb930008a3dfeb44ea15dce94ca11c"
  },
  {
    "url": "assets/js/39.d8e09188.js",
    "revision": "27fe7394360ea556993919c75c4d97ec"
  },
  {
    "url": "assets/js/4.abfa018d.js",
    "revision": "097593dc8bf932f21249883d7b3af0c6"
  },
  {
    "url": "assets/js/40.a23ce26a.js",
    "revision": "1b54c95f795f076d055d887607827ff9"
  },
  {
    "url": "assets/js/41.fda70f11.js",
    "revision": "b56a6ca22943394e0db8b3e9f6968e1e"
  },
  {
    "url": "assets/js/42.a1c586a4.js",
    "revision": "cce9b23f06fef9c85e766a97e4282dfd"
  },
  {
    "url": "assets/js/43.12c75f24.js",
    "revision": "b39646e9ffb83dbcf9bbf8099756f470"
  },
  {
    "url": "assets/js/44.98f67e9f.js",
    "revision": "4a7860994828295432810c289ad85d2b"
  },
  {
    "url": "assets/js/45.fc4762af.js",
    "revision": "8770366d56551b096b64785530130ba2"
  },
  {
    "url": "assets/js/46.768ee6e8.js",
    "revision": "c2f40f8dc84993d36368417ca76ae43f"
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
    "url": "assets/js/9.aa023d1c.js",
    "revision": "b5fde0a095e4b8734b13efff7abcf2af"
  },
  {
    "url": "assets/js/app.b96fa9b9.js",
    "revision": "a7f61d52f40c6fdcd4382970aa23aed1"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "33c588c48ddbfaa352417de1d48898c2"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "294ce3de2781a7510ff58b2738824395"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5c205a770d4c057875ff190f47fd0a16"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e403c3c60ac61264f534e09c9240a881"
  },
  {
    "url": "basis/algorithms/t4-shell_sort.html",
    "revision": "22022fb59c529203c3705dbf4856fb76"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1a888d6aa225aecbfffd39bbedb732b1"
  },
  {
    "url": "categories/index.html",
    "revision": "f827c09b7b3a2375044008472fe22a8f"
  },
  {
    "url": "figma/index.html",
    "revision": "532448ef10edf5a71fb8229b6af04b29"
  },
  {
    "url": "flutter/index.html",
    "revision": "18f014b046e7eb1ef8e91a8c6850daeb"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a35c50d87ad71e88cf1f8fd4f3e624b6"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ac64b8faa13e1dca905696ae6b587ff4"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "76574b05d8263d5916b48d0529956e3d"
  },
  {
    "url": "index.html",
    "revision": "ecab15b7bef59f3a3049bcfe71e1a977"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f17bbbe3e4a135f3d2c24aeca8ae4ead"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "21c63061d0f1b7a9f708493c482da2d8"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0cc77e29a0f1f74f510c72b7155bc4a7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "30c9fe91200bb3d7cce44623091c5676"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3f8f2831a51b82e0261aa5a6275872fd"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5bb3501b246d64024217d63acd61d589"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "db0a47a598489a7cb6ee829d5559cfe2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f6d5628a04fe166d987002779b489bad"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4b4d0d13893ebb3caa830d4eca628687"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3a0be3f8a8fc678d77c22d5494cc21e9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2842f7fbfbbab17952fd5760209e7f9d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0fcd86d2228ae6bf7a7117b1e0086d1b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "46dfa9e7691ca6a5668febf9b51e6dae"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8719b55494dfdbd7bc6447306060e0b8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "b0a41e101d6b90086f081dc84a5aa017"
  },
  {
    "url": "timeline/index.html",
    "revision": "15d068df51616a993c62fb680aeddf1a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0bccaa12fb9cbd5757974bd8a0bf976b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b99a90af912fde777aa77d4e5918424a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "16c9b6fa1053bc7ff74d5e42ad2b23d5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9a83239e05cc1ca8a940ea3da830072a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "19a768e1f33f9675d25837f5c172143b"
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
