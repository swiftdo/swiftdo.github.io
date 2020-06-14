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
    "revision": "b67f935311bfe6f493ee89f7a401e389"
  },
  {
    "url": "about/index.html",
    "revision": "ea6088b53a3259e0dfc1cf26324bddc2"
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
    "url": "assets/js/11.dbd9069d.js",
    "revision": "2678b7ac6aa8bd3d5998490b6faa72f0"
  },
  {
    "url": "assets/js/12.696c1857.js",
    "revision": "689ae379fd49fa26dcb8cf31d1b49b91"
  },
  {
    "url": "assets/js/13.0b336eee.js",
    "revision": "087fecfbae5f7265b5ff46105f070f74"
  },
  {
    "url": "assets/js/14.e29558a3.js",
    "revision": "ea60a5d6e9a6a950c9dd938e393885dc"
  },
  {
    "url": "assets/js/15.bc30e30e.js",
    "revision": "ed8c86b2b638e791a382e288bfc82578"
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
    "url": "assets/js/app.2b894c1f.js",
    "revision": "89af3bbfb9ac00c3e7a327e9aaf5b16d"
  },
  {
    "url": "figma/index.html",
    "revision": "8129ff132a99346e48b97b5c2371ee16"
  },
  {
    "url": "flutter/index.html",
    "revision": "e78e0834f11990d27b462f8434215579"
  },
  {
    "url": "index.html",
    "revision": "b9837b6c3314d0ac133977df5850ff06"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6a61f72012302ad871d571100a338238"
  },
  {
    "url": "swift/swiftui/layout_presentation.html",
    "revision": "0ccfb4f1e3ad32c5834f19c41dc113c4"
  },
  {
    "url": "swift/swiftui/principle.html",
    "revision": "d0939e29d421a56a6efdb051f55e6c89"
  },
  {
    "url": "swift/swiftui/swiftui_in_uikit.html",
    "revision": "bca524df3f16ed377cdad22e7e9776d5"
  },
  {
    "url": "swift/swiftui/uikit_in_swiftui.html",
    "revision": "6f0991dba0177f6ceb21c1ba65b05b56"
  },
  {
    "url": "swift/swiftui/views_control.html",
    "revision": "a32aefc5d128d65c56fa06cd88437128"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "535d1b4614646e8b0e01f4a2cb337d29"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "963c87a069e3af188c152b76849dfc0b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "03c8623722b0131feae8db7f77baee0e"
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
