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
    "revision": "1ea402101fb8a9297fb168714d7e9b58"
  },
  {
    "url": "about/index.html",
    "revision": "8154f88adb0b39f119f323f8181e7c4d"
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
    "url": "assets/js/19.f548796b.js",
    "revision": "3b58ed221ec0d4605d7b7454e72dfc53"
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
    "url": "assets/js/app.0c1680b2.js",
    "revision": "aa13acddbb01c9cef8ad6b94d39cea06"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c52f8f9e071dbb9344eb58fba33c5f25"
  },
  {
    "url": "basis/os/index.html",
    "revision": "81b34d0d8c43fb1ecce347fd9dfee473"
  },
  {
    "url": "categories/index.html",
    "revision": "4846a56226fc7e97428050ed673f71cc"
  },
  {
    "url": "figma/index.html",
    "revision": "6301172cbc729e15f99c1a139197bcd4"
  },
  {
    "url": "flutter/index.html",
    "revision": "498bc7e624bc664969dbb67bc02299bd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "eb1d368f9a23e6cbaaa3e279c6294423"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "eee600f4e8b17143ce499dbf4651852d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e80dc6926d5eb96a22d5f4ff3ce0c8c5"
  },
  {
    "url": "index.html",
    "revision": "7094388e407a9d944de7865029123dcb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8c0ee3cfcae978ce192b8c501cfb71d1"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "705803dd33a150d3ce802de5f55d5f01"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8c606d75535ae2f9782ce12a7dca0db8"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "e8b1bd671315bebc1dc75a919685b5a7"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "bd925c2f03fa5f0bd6a1c6a8103c7ee6"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "7b4c55c15fab093aaa98c3ce16f038ff"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "a310bf20eab86066a7bedfb40985e210"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a62eed23107b5734fb0f984a5082a21b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7c6e9db0ddc9cad2070349cb263578a9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d3f6a79ae21c2d4e75d481f61989aec6"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0584e5caafbf3ffc85a0aab825c47396"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "472156ecfe6c7a47e05d86262ff94187"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e00fc127d1ffede4c00608b9103f86eb"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "480c93b5c212cf67b558c2eafbe76fd9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "57ef0a0ea47bb63aebd2668b3d57321e"
  },
  {
    "url": "timeline/index.html",
    "revision": "f683a59e417ff9f47a3aa8f39a3f50e0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "51d3f73c8ac9f8dc25a5f7d79e4c251d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "77b50087998bc82d075103d65646089a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "37e66174b027061d5df14f9df660c0a7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e2dafcf5eade9e2e4c19a7d1a1dd9bb8"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1e89aff209e1070d977b7c7573843e0a"
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
