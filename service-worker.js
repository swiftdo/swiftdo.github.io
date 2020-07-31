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
    "revision": "20dd8171867575cf3870c1fade215ea3"
  },
  {
    "url": "about/index.html",
    "revision": "bfa26980fed65b0e395dcb7854b7fb5b"
  },
  {
    "url": "assets/css/0.styles.765564d0.css",
    "revision": "ddc6098d8c7d17e6db3be87f96de5aa6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a28526b0.js",
    "revision": "f437b3c25247d950d5053b24547b55db"
  },
  {
    "url": "assets/js/11.b5c3231b.js",
    "revision": "67a159c487ac13113b72b432f7f3ce4b"
  },
  {
    "url": "assets/js/12.77417b5a.js",
    "revision": "2b6c549c9a700d4bf3dc28df8df74871"
  },
  {
    "url": "assets/js/13.c83342a9.js",
    "revision": "17646a05c6b49d3b12c0566ca771ad8a"
  },
  {
    "url": "assets/js/14.9d1f28e8.js",
    "revision": "6c5facc7c9063086aadfeece717cb191"
  },
  {
    "url": "assets/js/15.6e854798.js",
    "revision": "2e9f06f780e2cebe5b602be955a87a26"
  },
  {
    "url": "assets/js/16.e4e1ad2a.js",
    "revision": "75de44596fa8025ca7f0899dbc469513"
  },
  {
    "url": "assets/js/17.4bee5009.js",
    "revision": "488aa6a183c7fb1bd633cac8e97bc187"
  },
  {
    "url": "assets/js/18.9b3b9d6f.js",
    "revision": "2ec9d819cf930ef470b1afb9458964e0"
  },
  {
    "url": "assets/js/19.3b5b5919.js",
    "revision": "c365227816b941b459fd6bf322e03bf1"
  },
  {
    "url": "assets/js/2.0e06c8e3.js",
    "revision": "85ec80429e17c02939fa5e887ce52b8a"
  },
  {
    "url": "assets/js/20.6758cc6e.js",
    "revision": "d581f7d580fdd0998af3d49bcc06210a"
  },
  {
    "url": "assets/js/21.f27a2f45.js",
    "revision": "d5fcb008c45228643305acbf345e9e09"
  },
  {
    "url": "assets/js/22.35c8adfb.js",
    "revision": "b9255fbb88fccef1372b8198b749c163"
  },
  {
    "url": "assets/js/23.d371aaff.js",
    "revision": "c225cd345ecc2288afe4cab25042027d"
  },
  {
    "url": "assets/js/24.486008e1.js",
    "revision": "775de5c387ddaa6b57d88c8d45c7f968"
  },
  {
    "url": "assets/js/25.91e81693.js",
    "revision": "3729519f23905dab0205c3c78528f730"
  },
  {
    "url": "assets/js/26.31fa8103.js",
    "revision": "45f2c1a1abcaa7ea4fdbf893c076876b"
  },
  {
    "url": "assets/js/27.cb3639c2.js",
    "revision": "845dbf2182beac421a01cf5b82251b6c"
  },
  {
    "url": "assets/js/28.dea53f57.js",
    "revision": "f2dace4c8674824dc14ee8e65d6f51c9"
  },
  {
    "url": "assets/js/29.17e7ae25.js",
    "revision": "b73603d9e9100892082fc2939684459b"
  },
  {
    "url": "assets/js/3.fa8cdf39.js",
    "revision": "cbe5c98496c356cf38e8f99b603897f4"
  },
  {
    "url": "assets/js/30.1bea8b2c.js",
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
    "url": "assets/js/5.efe1834d.js",
    "revision": "a01cf77fe9894be1ccbb4f0b6c66f416"
  },
  {
    "url": "assets/js/6.977f9df4.js",
    "revision": "4671f30b5611ffc0faf39b12a188ef42"
  },
  {
    "url": "assets/js/7.9fe29232.js",
    "revision": "dc2eb56f26b9e83a313998e71ac80fd9"
  },
  {
    "url": "assets/js/8.bd825700.js",
    "revision": "81ce1e8322af3a6fce7543dcd06382c6"
  },
  {
    "url": "assets/js/9.cb500d15.js",
    "revision": "c058a6a443685c4f9f562d40c08a8344"
  },
  {
    "url": "assets/js/app.b3443d7a.js",
    "revision": "289734cf0327cbd3468399b786c76803"
  },
  {
    "url": "figma/index.html",
    "revision": "009f77d406df1274efe9e49113bf7e14"
  },
  {
    "url": "flutter/index.html",
    "revision": "e6943ded7c54ca31bd88c44378ed90a3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d4d70e21b5af6a2bba1df9817837063f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d655b4d38b2eadd9a6ca252ecc643a72"
  },
  {
    "url": "index.html",
    "revision": "7e63d730e0d53b16088db6550ebce0a3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "71cc06aba45f37e3e0fa7084dd0d81ad"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "785079d235536e650873e739435c644a"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "665faa81b91d7005ee580ea3b8e08b0f"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "c3bcb28b3486374c81e7a71cf865b4b1"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "f8d2c4c39810c03d505a0e318bfb2ccf"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2e31f344d7f13503363fb0c9bced21ee"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "faa854ea61f37da46e3d2698227fc3ed"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "bf547c4e85d78fd59c5f6d905edde405"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "73ac8897eda79238fb065c47a308ecc4"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "63ec4d4394ce3c0a36e88ad4aa63eb36"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "54feb34a85621b5e5e732af657294f02"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c180c79a107f579b41d3ad13f5505e87"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "55c273d79c10fcaddc98b93ca01e3370"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "3cdc6bc604c507b7d989c7d36d5bffb7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "791f61d15c6b2c05e5d07aaf46561d2e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fa44bf774fc2f88d4eceb4a75c0442c1"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "74c4d60b58ccf8b94a5178e77ab5ba6a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2bb9a4d9f42724636a5c633a732210c6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a8dc23b3e5a5477348b9ba210c1d5fa5"
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
