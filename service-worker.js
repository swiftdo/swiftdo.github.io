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
    "revision": "2ff69b237d46000f75f234a04be0da5d"
  },
  {
    "url": "about/index.html",
    "revision": "7a939533dcec3c3fab5dd94c91d03770"
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
    "url": "assets/js/10.0e7ab212.js",
    "revision": "e6a138c2a154cd613e1d2f2f808443e9"
  },
  {
    "url": "assets/js/11.535d6413.js",
    "revision": "fc40ee45bdf3abc5dd29531ea23e8497"
  },
  {
    "url": "assets/js/12.03959976.js",
    "revision": "7948287bda922da86df27456974f48d4"
  },
  {
    "url": "assets/js/13.78b41a93.js",
    "revision": "a28076d0a89888c148bd27a08a03309a"
  },
  {
    "url": "assets/js/14.2b80f4b0.js",
    "revision": "3c7584f9d1fbafa3ed27f958ecd7d000"
  },
  {
    "url": "assets/js/15.4db7a4e4.js",
    "revision": "780bde3d9524a131642fe66bc9b1005f"
  },
  {
    "url": "assets/js/16.b233728e.js",
    "revision": "c94caf74a42d08c93f4b4f9745868457"
  },
  {
    "url": "assets/js/17.0e1494cc.js",
    "revision": "3364d3617edb4212988a795ac332345b"
  },
  {
    "url": "assets/js/18.3ba5c76c.js",
    "revision": "ad0dce8881be4b1be5e2856937b25375"
  },
  {
    "url": "assets/js/19.79a3cab0.js",
    "revision": "49a794df44ae201d429c9ad5654e28bb"
  },
  {
    "url": "assets/js/2.017a221c.js",
    "revision": "7d211a35344bb34e215f8a4b94311c48"
  },
  {
    "url": "assets/js/20.876977b1.js",
    "revision": "46493be08719c3ba3bee1633c5c96973"
  },
  {
    "url": "assets/js/3.0a0abe6c.js",
    "revision": "180cc8dfb4f90673d83492864b20a388"
  },
  {
    "url": "assets/js/4.4a56a784.js",
    "revision": "60b1f9b1b08f4fc19463a0e06dddf005"
  },
  {
    "url": "assets/js/5.ed83750a.js",
    "revision": "a01cf77fe9894be1ccbb4f0b6c66f416"
  },
  {
    "url": "assets/js/6.40d9d303.js",
    "revision": "ed3a912b0d6bb65ffb7a888087e61aa8"
  },
  {
    "url": "assets/js/7.8d135d57.js",
    "revision": "a4f0003b3e40752071f9ebc923a43a24"
  },
  {
    "url": "assets/js/8.8ee22ec2.js",
    "revision": "6ed4a372f8faacf63708c79381eddea7"
  },
  {
    "url": "assets/js/9.2da3c6d4.js",
    "revision": "c1e3c96b635eeeadbf10a791492ae0dc"
  },
  {
    "url": "assets/js/app.d47ea769.js",
    "revision": "3d7f09b617fb7bfe89bf18181724732e"
  },
  {
    "url": "figma/index.html",
    "revision": "e3b2ce731014b32d9f7b43f0a30aac2c"
  },
  {
    "url": "flutter/index.html",
    "revision": "89f7e6ef0b7120611a86dc3c15a99485"
  },
  {
    "url": "index.html",
    "revision": "1057c5376d4f2baedc0d4363465ee4ed"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8056feb41faf5e4a220fb5888c9c6c3c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "b47f2a529eb6ca7b7ce4382d07abc712"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "e3aaeb457f618b4281e02d78b3657655"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "021e1c7c52f3286cfaeb0f97f8aa23c4"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a63ab94a8be3adafc0b6a2ef0cd621a8"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "3edddfbb07fa85d85af4dc880d42234a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "8610c15116800158a8c6fd64abef4a7b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "13a1a41e091636ba3d58696d7fa38687"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d77eeb70e43fe34254972cb282452272"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7bb7375c66947f5e5f7fc4f8ad9b5a2b"
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
