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
    "revision": "6fb00bdc6cec24e8f66d7b2e1a06121e"
  },
  {
    "url": "about/index.html",
    "revision": "55f41d1217c3fa960d9f0848df7a40fa"
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
    "url": "assets/js/10.fd8dbdd9.js",
    "revision": "073c5a8a2e7015211842d7e39a9cfe5d"
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
    "url": "assets/js/16.aa6d6181.js",
    "revision": "a4ff2e9ca9064564d3f06d39b94dafbc"
  },
  {
    "url": "assets/js/17.a01f176e.js",
    "revision": "867aceb221ee327654fbdc64fae8bdcf"
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
    "url": "assets/js/app.bba93bd1.js",
    "revision": "115db5af6ac1f296b298d03c274ceb04"
  },
  {
    "url": "figma/index.html",
    "revision": "fa7b095ab227227830a207ebb4bae9ec"
  },
  {
    "url": "flutter/index.html",
    "revision": "02441fab53316b50a24082d3e5fe4b54"
  },
  {
    "url": "index.html",
    "revision": "b1aaff33f98c8a8fa0e22c47eb6f2c09"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f1f2c10ce33077909923278db3d2b3cd"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "537bb22aaeaca5a1394ccfb7efb88770"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "c861488190ad085545e1fd2b833315dd"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "c13d64a02f0b8a3cae09a2e46c85186c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "8d2833c7ed521726459af58d69cca417"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2b6f25e39914f35be5f2c55ce1bfc1aa"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "70add8de3465c58e7ec08715b6ba44f8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "542bf77ff933d9c39a03a26152130d5a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "73b9980ffb0750807bf75106aed6618b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1da0e2a885114aea60e7ffd7e71566bf"
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
