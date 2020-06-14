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
    "revision": "ce7e1bc60b371cb525879a8582a675af"
  },
  {
    "url": "about/index.html",
    "revision": "39e746c8001dbf2d74e3c38d4abcb35f"
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
    "url": "assets/js/11.d117179b.js",
    "revision": "9838ffa5198dd293f4889c2d941989bb"
  },
  {
    "url": "assets/js/12.03959976.js",
    "revision": "7948287bda922da86df27456974f48d4"
  },
  {
    "url": "assets/js/13.bb88216e.js",
    "revision": "50c1db5842014c9b6c9e4fdc311432e8"
  },
  {
    "url": "assets/js/14.586438a0.js",
    "revision": "ea60a5d6e9a6a950c9dd938e393885dc"
  },
  {
    "url": "assets/js/15.e1afbd72.js",
    "revision": "7090776e89803babee90843768417eea"
  },
  {
    "url": "assets/js/16.98d5953d.js",
    "revision": "5f1d32cf96d55eebd8b29f203bcec10d"
  },
  {
    "url": "assets/js/17.a100236c.js",
    "revision": "33c24aa990e33dbce9d7f6638a8be22a"
  },
  {
    "url": "assets/js/18.74ff9f38.js",
    "revision": "82e3edc8579350567457eed8c2e511fd"
  },
  {
    "url": "assets/js/19.731178e8.js",
    "revision": "58497892c808356b7d9c0137438f45d1"
  },
  {
    "url": "assets/js/2.017a221c.js",
    "revision": "7d211a35344bb34e215f8a4b94311c48"
  },
  {
    "url": "assets/js/3.0a0abe6c.js",
    "revision": "180cc8dfb4f90673d83492864b20a388"
  },
  {
    "url": "assets/js/4.b127ece1.js",
    "revision": "e5e84a3cba872aee354fb4b999af2fb3"
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
    "url": "assets/js/app.3f1c402f.js",
    "revision": "80fd18ea0e0460f3b93cba31ff088020"
  },
  {
    "url": "figma/index.html",
    "revision": "59f8ef8bce9ce3f0999f6b0a2e318203"
  },
  {
    "url": "flutter/index.html",
    "revision": "2a3b0d723e231e086952fc852ad919d3"
  },
  {
    "url": "index.html",
    "revision": "f613063bce074cc609c1d4a6acf83637"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "47e93f4041c2dc737282df848fb43ba1"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "875d1ac983f23a94c8f240ec0b2b8339"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2bc0046c0dd3aaeccb8517d10a4ba9e9"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "9a8968c10cc12b56aba854a4554df4df"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "9337a5f38d8bfab31452d666934eafcf"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "0c80091c6fe56bee56f59eaffdada60c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8ffd2a6ae853187333b058684ea481f2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7052e1bfcd3f279bc3fbe624c4d4f3b8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "72a9145ef7926491db632a989fadfc1f"
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
