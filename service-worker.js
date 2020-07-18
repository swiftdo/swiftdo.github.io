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
    "revision": "ac85319b7969b73cc8b2dfa791f29b6e"
  },
  {
    "url": "about/index.html",
    "revision": "9544accd07ac71a8a39f9a62460637a1"
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
    "url": "assets/js/25.772d8d00.js",
    "revision": "5a7ae95df99f490e29cf35a96c12dbb1"
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
    "url": "assets/js/app.a971a333.js",
    "revision": "1bccf197bdd3e4249c6c614ff45edd6f"
  },
  {
    "url": "figma/index.html",
    "revision": "78d84efd74fecec84f7ac2cb553faff6"
  },
  {
    "url": "flutter/index.html",
    "revision": "35d723d71d6d6c83278055234ab204b6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "50ea815bc16ac5ac3d4652e5fd0b9fe7"
  },
  {
    "url": "index.html",
    "revision": "4a090a680ec99db43757e3062e9c8fe7"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "47b0f30f0292734e52c72ac38a1c1dc7"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "d05bd9291da030295fa3d4709db62d1e"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0c0697d4a1a15877eb025e16a6f2170b"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "54f8a6b3a4a809d17910fe397d3df6ed"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "e03f06c7d14cca82ed098534f1730560"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "78cda6339c5b1752f870c05a548341ca"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9800997ff18aa22be8e3096747230003"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2db8531f2ae9d6afddb4c38e5e6bedb8"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "46b5f2e7622e6ffccbfc6a6a3abde8a3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "25ba27201438e04462c5bbd6e48d1db4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a29f5a5aafdb65cd609dd1570a085a4b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3ead7f38ba26e4487b4ec14252491916"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ebe97c99718b4af85a1fc33539cc2c9f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b6ab571634954e184f1d59793badcc13"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b9efc511b77031199581f1a0d85a8536"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "38efcdc8a38cb6b93bf1315d409c2cb5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "18ae3057af4065f75663192c8fe0a894"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "37d5f30726eed7e9fb90686d8c9dc40b"
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
