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
    "revision": "67898d6c5f2f656122ace565f48ad067"
  },
  {
    "url": "about/index.html",
    "revision": "d7b90d094b6552265f3a1ab9bb486658"
  },
  {
    "url": "assets/css/0.styles.6078884b.css",
    "revision": "735233077fc8e7922622bff4900200b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.80b6919a.js",
    "revision": "f437b3c25247d950d5053b24547b55db"
  },
  {
    "url": "assets/js/11.6e39a65f.js",
    "revision": "67a159c487ac13113b72b432f7f3ce4b"
  },
  {
    "url": "assets/js/12.8719ea09.js",
    "revision": "2b6c549c9a700d4bf3dc28df8df74871"
  },
  {
    "url": "assets/js/13.13aeaf55.js",
    "revision": "17646a05c6b49d3b12c0566ca771ad8a"
  },
  {
    "url": "assets/js/14.05e3e929.js",
    "revision": "6c5facc7c9063086aadfeece717cb191"
  },
  {
    "url": "assets/js/15.a4b498e9.js",
    "revision": "2e9f06f780e2cebe5b602be955a87a26"
  },
  {
    "url": "assets/js/16.537b1479.js",
    "revision": "75de44596fa8025ca7f0899dbc469513"
  },
  {
    "url": "assets/js/17.d987129e.js",
    "revision": "488aa6a183c7fb1bd633cac8e97bc187"
  },
  {
    "url": "assets/js/18.d26f0ffc.js",
    "revision": "2ec9d819cf930ef470b1afb9458964e0"
  },
  {
    "url": "assets/js/19.2e9c06c0.js",
    "revision": "c365227816b941b459fd6bf322e03bf1"
  },
  {
    "url": "assets/js/2.93d46dab.js",
    "revision": "4812614ae5beea6d7e0ed9895ebbde57"
  },
  {
    "url": "assets/js/20.b2564e8c.js",
    "revision": "d581f7d580fdd0998af3d49bcc06210a"
  },
  {
    "url": "assets/js/21.b032182b.js",
    "revision": "d5fcb008c45228643305acbf345e9e09"
  },
  {
    "url": "assets/js/22.38d26cea.js",
    "revision": "b9255fbb88fccef1372b8198b749c163"
  },
  {
    "url": "assets/js/23.62bf71f6.js",
    "revision": "c225cd345ecc2288afe4cab25042027d"
  },
  {
    "url": "assets/js/24.acd639df.js",
    "revision": "775de5c387ddaa6b57d88c8d45c7f968"
  },
  {
    "url": "assets/js/25.11f4cd11.js",
    "revision": "3729519f23905dab0205c3c78528f730"
  },
  {
    "url": "assets/js/26.74223d7e.js",
    "revision": "45f2c1a1abcaa7ea4fdbf893c076876b"
  },
  {
    "url": "assets/js/27.67ac67b5.js",
    "revision": "845dbf2182beac421a01cf5b82251b6c"
  },
  {
    "url": "assets/js/28.0c4b3afb.js",
    "revision": "f2dace4c8674824dc14ee8e65d6f51c9"
  },
  {
    "url": "assets/js/29.491a3073.js",
    "revision": "b73603d9e9100892082fc2939684459b"
  },
  {
    "url": "assets/js/3.7140ce0a.js",
    "revision": "cbe5c98496c356cf38e8f99b603897f4"
  },
  {
    "url": "assets/js/30.02daf983.js",
    "revision": "a87b6ac4f877f6b6e2e35162afecbcd5"
  },
  {
    "url": "assets/js/31.c0c823cb.js",
    "revision": "0386bb7d432e90e135bd61b0158ad5c3"
  },
  {
    "url": "assets/js/4.a0de26b5.js",
    "revision": "df6513e41239dcf894edff2d2419eb28"
  },
  {
    "url": "assets/js/5.b71bddb9.js",
    "revision": "a01cf77fe9894be1ccbb4f0b6c66f416"
  },
  {
    "url": "assets/js/6.94b84969.js",
    "revision": "ed3a912b0d6bb65ffb7a888087e61aa8"
  },
  {
    "url": "assets/js/7.423f9eb6.js",
    "revision": "bae016f4da458b9c9c1a39240e5f9b96"
  },
  {
    "url": "assets/js/8.4ff1f2bd.js",
    "revision": "6ed4a372f8faacf63708c79381eddea7"
  },
  {
    "url": "assets/js/9.9aa5cb44.js",
    "revision": "c058a6a443685c4f9f562d40c08a8344"
  },
  {
    "url": "assets/js/app.e328c155.js",
    "revision": "e029ec07cf2ddfda31eddf54d1f9d3ae"
  },
  {
    "url": "figma/index.html",
    "revision": "84c306d2da4aa1402f99bb36832b3270"
  },
  {
    "url": "flutter/index.html",
    "revision": "be29973f071a8b52d34a241ab8e90d1f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2755827f67d36ba25eee9abaf30b2aa2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "119f67d197db3cf0de295fcfc634b24f"
  },
  {
    "url": "index.html",
    "revision": "518914fb2394abba7b40ee06aa4ed6e5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f61cb9f72afca38faf60fc315422b39a"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "921a3eca16e06e157d11ac35c4b31f2e"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4e81bcd32cc7bc8e5bdeb90d75dede2f"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "eb9afc6d8ab034449efa6956c2a7d961"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "ad504f66ea8b205110ebc912065c4f78"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d194f6f65a7a337f75f12be1ad10dfd7"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "5e878be250433ae0c8da4d790d0bc2d3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "6b644d3e307cf686a60745092c1ecd78"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f752f411214d68a83942fef7d6c957a9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a28b46c22fc48aae23165770100b850d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "228a972af968ade1efde5ed2c959110e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0b17eb9b5e976dcfbda3eee8bc5a718d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "dab6806b46787c86d3cb5e993f3114cf"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "55a2fed5768bc158f97f4b2a96051222"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b8f835daa6bc00867035650dba1d1b38"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "baa556550f065c41b11df08c90b030a9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e76f808a5910b6071493f405beb566d9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "67db41ffd8f7a0ae99697cc2d45eb228"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a7566765d7b092afac51dc6d364989e8"
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
