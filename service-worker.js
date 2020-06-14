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
    "revision": "8e7ae516f39cec2d7ed446e18fe9ab6f"
  },
  {
    "url": "about/index.html",
    "revision": "cd421d79cbf9d18488fe254abd4b9039"
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
    "url": "assets/js/10.9702cad9.js",
    "revision": "8d480d3903cba01a9d608179921fb3cb"
  },
  {
    "url": "assets/js/11.b721a678.js",
    "revision": "197ef3538f963bec3e029e535d8eadef"
  },
  {
    "url": "assets/js/12.fbfa296f.js",
    "revision": "eefee287953b50452f4bc233ba40f4fa"
  },
  {
    "url": "assets/js/13.803ebcf4.js",
    "revision": "087fecfbae5f7265b5ff46105f070f74"
  },
  {
    "url": "assets/js/14.6e050b47.js",
    "revision": "ea60a5d6e9a6a950c9dd938e393885dc"
  },
  {
    "url": "assets/js/15.b3ab8e48.js",
    "revision": "9206d50398e3a2f96bf778c330856214"
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
    "url": "assets/js/app.5a14df40.js",
    "revision": "e74837cd92fef5a4ed5a2028285cc600"
  },
  {
    "url": "figma/index.html",
    "revision": "1add77ca08a3e5e2bad5907fe197cb1b"
  },
  {
    "url": "flutter/index.html",
    "revision": "32b3876b41592f4547c47dc1f53cdf02"
  },
  {
    "url": "index.html",
    "revision": "122b8326b1cefc9edd84515dd8e553ae"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/1-principle.html",
    "revision": "ed77809a0bfeab4cb73b1972e3738797"
  },
  {
    "url": "swift/swiftui/2-views_control.html",
    "revision": "d09ae09b8868d517021ec096fd7db4b9"
  },
  {
    "url": "swift/swiftui/3-layout_presentation.html",
    "revision": "9ce8e6d8aa69755696f19e1a299b9a4b"
  },
  {
    "url": "swift/swiftui/4-uikit_in_swiftui.html",
    "revision": "aa04b065609591a58668da277b3e8f61"
  },
  {
    "url": "swift/swiftui/5-swiftui_in_uikit.html",
    "revision": "925bcc96c48cc57dfc68d60a94c678de"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d1b6b086dd9e62dc459596bf80be787f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c56b1c90b67a23599c28d432322559cb"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e65f9103c2e12d1cb03945993c808953"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "bacf05164d6dadced5896037d5c259d5"
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
