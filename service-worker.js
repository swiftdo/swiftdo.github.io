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
    "revision": "af85961e11233dd43cc5bf02516a2dd9"
  },
  {
    "url": "about/index.html",
    "revision": "6c689099c5000f715d68d3326b48d252"
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
    "url": "assets/js/17.9d3c3c9a.js",
    "revision": "4451a6733e2bbe20d11158665a6e77e1"
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
    "url": "assets/js/9.65031172.js",
    "revision": "33979625e1576092bbe346350f5707d0"
  },
  {
    "url": "assets/js/app.096ae730.js",
    "revision": "4e6f39b24527818b8cd0b2a6e33b7352"
  },
  {
    "url": "figma/index.html",
    "revision": "d6f2b7a2589fe527bb02f7ecf56e8520"
  },
  {
    "url": "flutter/index.html",
    "revision": "50748d7aff55beb25db5bbaaafd8932a"
  },
  {
    "url": "index.html",
    "revision": "28b91124abbde08d3cbe2f5f3c8040a2"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b0e9470c161b2b74d3a4ba84aba88294"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "570eb53a0d899c83a91ce38627e8caaa"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "75b9f8511898bd3403ab4421df6c762e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "1c1426f1b5f885dcd1081301dda4e3fd"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "c38db74512d9696e8c79e9b8b63cf4b3"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "938c56e8ea36a2e579282d9708630150"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "cd76d865a907473f485253c7ddbdff23"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d8385f6fc7d4acbbdd0a16eb388289e8"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "742ee9ab7a673886b6ae040cd2307a5f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9af6c6d6731844ee34c89cb1f0e56305"
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
