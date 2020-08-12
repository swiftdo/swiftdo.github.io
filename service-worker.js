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
    "revision": "a1a4679047828ef9c916216b9673b36d"
  },
  {
    "url": "about/index.html",
    "revision": "9db90d82b169928bc260fc4d73448481"
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
    "url": "assets/js/13.af74d107.js",
    "revision": "0c9501707b37ac70e439b2ebc21682d9"
  },
  {
    "url": "assets/js/14.9fba080e.js",
    "revision": "bbd07f1e6f2f3cf17b5f9cd57f5fbdc1"
  },
  {
    "url": "assets/js/15.b87c6175.js",
    "revision": "7c6c729d26141490240877a144f96981"
  },
  {
    "url": "assets/js/16.d5ebd9d0.js",
    "revision": "c103d891098c78b64157bc73d1a0c19f"
  },
  {
    "url": "assets/js/17.4847d174.js",
    "revision": "19504ab1e8cc15c2233cf3609709e218"
  },
  {
    "url": "assets/js/18.09bd8443.js",
    "revision": "f99f53820ffbb9d1867cc72cf0f6eaf5"
  },
  {
    "url": "assets/js/19.1491a3bb.js",
    "revision": "da2c4d582761bd4f222aae86d28c1c56"
  },
  {
    "url": "assets/js/20.2fd6db0b.js",
    "revision": "1fc30e04f400c5e64a714a1816bb2a93"
  },
  {
    "url": "assets/js/21.d04fde8f.js",
    "revision": "4bf7563e68ce8c5ada62a7beaaaba926"
  },
  {
    "url": "assets/js/22.c0a25366.js",
    "revision": "d6ec882df5788fb73a5881532e5e821c"
  },
  {
    "url": "assets/js/23.aca65f0e.js",
    "revision": "6b163f21891fa3b1ab3f56ccff9321cf"
  },
  {
    "url": "assets/js/24.fabd4d92.js",
    "revision": "99d18dabef604622d0271b0f00aaa5fd"
  },
  {
    "url": "assets/js/25.0492f433.js",
    "revision": "dbea83f1299c3b2a7c17ae536d6bdd4f"
  },
  {
    "url": "assets/js/26.0fcb3b21.js",
    "revision": "4501b1aa6c27602d1b93b4195ab488c5"
  },
  {
    "url": "assets/js/27.91ecc78e.js",
    "revision": "744421f505b0d90dabf07dd4cfc75076"
  },
  {
    "url": "assets/js/28.2d5712cd.js",
    "revision": "9aa758b637189abccee109c2eaad1179"
  },
  {
    "url": "assets/js/29.ed07e59a.js",
    "revision": "628d8c8d7f96f96d3b09703684d89003"
  },
  {
    "url": "assets/js/3.c5c69ad1.js",
    "revision": "4c28f4b989709616ad27e3ce1b7dfc31"
  },
  {
    "url": "assets/js/30.c971ceb2.js",
    "revision": "cf261a0305b1dd15de4c2ff403fcfdd8"
  },
  {
    "url": "assets/js/31.9bca95d7.js",
    "revision": "e8c5e08a502bbcc3ae39bc1ee1499e0d"
  },
  {
    "url": "assets/js/32.94f29109.js",
    "revision": "7fd55de164766b1f73e429f1190b1311"
  },
  {
    "url": "assets/js/33.0f39e3b0.js",
    "revision": "3de7567fe046d54c50c28db373c6d516"
  },
  {
    "url": "assets/js/34.af583242.js",
    "revision": "59e5df4d6a9712a427c4c6fdc0ce32ac"
  },
  {
    "url": "assets/js/35.08990cba.js",
    "revision": "712973f75db8b76d1dd1f41861bb39fc"
  },
  {
    "url": "assets/js/36.7059095c.js",
    "revision": "def9d6aef10ec661aa8a1591ceb25151"
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
    "url": "assets/js/9.93d5beab.js",
    "revision": "27749908e80d67b5d604e440a788cc79"
  },
  {
    "url": "assets/js/app.22c36b28.js",
    "revision": "63f0b7c36f3779f2979dc30b8de71881"
  },
  {
    "url": "categories/index.html",
    "revision": "06acfb25015621d2ffc5603d4ade031f"
  },
  {
    "url": "figma/index.html",
    "revision": "ac989a58fe42983d12cc9f00907eb4ad"
  },
  {
    "url": "flutter/index.html",
    "revision": "9dbae2c695b476b3f6e7b3cd9416717b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d624232d1bccaae72cdaf71e2b4ff02c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a93fe6c2fb61ef4e7523c10a5799a319"
  },
  {
    "url": "index.html",
    "revision": "f7638e012fcb9b4a1debdc8e4bac75a3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e8ec4c7cecd796006bc21be567207681"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c76303bff4a74ac514c12053c9192e2a"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "5a7206f9e641e609dd15cf8af519820f"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a4f39f2b5914e09881a34617abc22ff9"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "815854a58890b9f84e3dcf67899f2887"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "accde3d027081805a01bad70e7e34668"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "79a3539aacb4b3f9d27c36a0e68cdaf3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "da5612602411dca20e83e6efba28a4b7"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "71f3b7c1eafdcb1b0a0843c353179e36"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "25bd47e58a7e48d366e05eea37a56f4c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a6534f73eb7e53f2aa59206863cfd552"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8fffd69623bf557f490114e8666b5f30"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "292efabc66ee4f9b911793fc3c8347d1"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9e1b6774079c3710ec5c263acc8ccb38"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/index.html",
    "revision": "ffcd4388cecc24c779f81a1df8ed2022"
  },
  {
    "url": "timeline/index.html",
    "revision": "b71329721a553d3b941c7da9d00af3c0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "51df2a212f0fe3a60a1a76d70dddaccf"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "df1a59ef50b0f8d10b32e57b275bba19"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "85558683146475a584e572ca946b157c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "df5d830b799ec20523255616d543af59"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "aebed3ce2b7c15a5f1fda29feb495d7e"
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
