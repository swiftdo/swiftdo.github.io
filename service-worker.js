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
    "revision": "bd55b8a1b75eca2e942689d03979a805"
  },
  {
    "url": "about/index.html",
    "revision": "ede2a99dec405064925e5568f9a66112"
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
    "url": "assets/js/11.2c3d1b0d.js",
    "revision": "c320470014eb46653251840904740bbb"
  },
  {
    "url": "assets/js/12.12898468.js",
    "revision": "3601c7bb7e2af8eda08830b44132df22"
  },
  {
    "url": "assets/js/13.59e7316f.js",
    "revision": "af4001ad0e94bd43ea91029417b862a1"
  },
  {
    "url": "assets/js/14.4da972b1.js",
    "revision": "dbb3e0d59158589ba50f874fe2512989"
  },
  {
    "url": "assets/js/15.d5e39fb2.js",
    "revision": "df54f560b225d787136c052195c059f0"
  },
  {
    "url": "assets/js/16.d601c640.js",
    "revision": "dd0a426b1a4cae868b18fb81c91e890f"
  },
  {
    "url": "assets/js/17.464cb943.js",
    "revision": "35e1656b1992239c251bc66a9f75ed76"
  },
  {
    "url": "assets/js/18.f89b841b.js",
    "revision": "642f5d4e7b0b472574d6deac4c8a2a73"
  },
  {
    "url": "assets/js/19.24edb0ee.js",
    "revision": "01ed73d7ec6bb18ea783ff7e1281854a"
  },
  {
    "url": "assets/js/2.0e06c8e3.js",
    "revision": "85ec80429e17c02939fa5e887ce52b8a"
  },
  {
    "url": "assets/js/20.5ba19067.js",
    "revision": "f9cd498d6567d5fa3708e9ac563183aa"
  },
  {
    "url": "assets/js/21.d292c77c.js",
    "revision": "84975a0314ce7e6aa6e51a414a36d2da"
  },
  {
    "url": "assets/js/22.c3658222.js",
    "revision": "fd4539b02e1b0a479b8718139a89ae0e"
  },
  {
    "url": "assets/js/23.9e9f9824.js",
    "revision": "c225cd345ecc2288afe4cab25042027d"
  },
  {
    "url": "assets/js/24.83d04574.js",
    "revision": "6ca82353203b255ff478b5968df9bf03"
  },
  {
    "url": "assets/js/25.42405330.js",
    "revision": "a45453f6ea5b3c7873eb0d055ebd5f77"
  },
  {
    "url": "assets/js/26.cf3b4801.js",
    "revision": "0f765eee54394d90c91e0b58cd52738c"
  },
  {
    "url": "assets/js/27.0896d8f5.js",
    "revision": "4898c815b263937e647a293886e8474a"
  },
  {
    "url": "assets/js/28.719e8674.js",
    "revision": "3b0f6ac1558126282006493a48955477"
  },
  {
    "url": "assets/js/29.bf6cca0a.js",
    "revision": "1f5d1a9c2b6e934515f8e7f8b12c9992"
  },
  {
    "url": "assets/js/3.fa8cdf39.js",
    "revision": "cbe5c98496c356cf38e8f99b603897f4"
  },
  {
    "url": "assets/js/4.f1af20be.js",
    "revision": "470fbb3db3797b87866729860e68b28e"
  },
  {
    "url": "assets/js/5.efe1834d.js",
    "revision": "a01cf77fe9894be1ccbb4f0b6c66f416"
  },
  {
    "url": "assets/js/6.351593d0.js",
    "revision": "ed3a912b0d6bb65ffb7a888087e61aa8"
  },
  {
    "url": "assets/js/7.67006398.js",
    "revision": "bae016f4da458b9c9c1a39240e5f9b96"
  },
  {
    "url": "assets/js/8.c3aa6057.js",
    "revision": "6ed4a372f8faacf63708c79381eddea7"
  },
  {
    "url": "assets/js/9.cb500d15.js",
    "revision": "c058a6a443685c4f9f562d40c08a8344"
  },
  {
    "url": "assets/js/app.b77f925d.js",
    "revision": "1bbc49f925d70804df84627eb424c2f8"
  },
  {
    "url": "figma/index.html",
    "revision": "1bb1d0bbf8b85f0ea9dfefdeebf51ed1"
  },
  {
    "url": "flutter/index.html",
    "revision": "365332b5fd76ccb947a48eb6a2b5af95"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0a9a2c77ccd4558e3e71cc11a02547f2"
  },
  {
    "url": "index.html",
    "revision": "24659d57e59242b892bdbc1ef09d2021"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "65f5e5b8e9f41958acadc870c451a4d3"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "a4e1cd1b2850c84000a90f9d9226219c"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "29da031899b17cf845451c1dfb13fd22"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "94ebe8a16e71103c4224fb0b50836ba0"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a2f1d30b67a976c6a99ea4bd1e64e0f2"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "4cb0a9a3cce58eae3e1fcfdb024767f3"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "b93e003de630322bd386e965b893774b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b6a9421b1996f2a7ae46b95f823175fe"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "de26d4f51500681575179b10d77e6681"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "090a9208e98f581dd95031b40d500e40"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0f83bc6614e2194f0a92eb116057bdf7"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7df2ae094f175bff3fe7bdf166c1307b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b13ccb5a1c82b0399b7000933a6fec46"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b6dd01f02fc1814103ed4caca91b5878"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d345428b11903ff083e996ec19ab4bea"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "818e0ab77eb514115acccde5983a5d2e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "37ebd2823b4a21a8c3005308ef5f2efb"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "67370519609406664b71257d10234af6"
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
