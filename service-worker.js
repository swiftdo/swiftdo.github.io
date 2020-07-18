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
    "revision": "7d277623ff268415b32e258aaadea032"
  },
  {
    "url": "about/index.html",
    "revision": "9f82fa63f1deeb16d216700327197325"
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
    "url": "assets/js/26.ec11fa2f.js",
    "revision": "a86bd329c29ee122ad838e6c7969d8cc"
  },
  {
    "url": "assets/js/27.d757b25c.js",
    "revision": "0655c41379d7fa0306793373279557e9"
  },
  {
    "url": "assets/js/28.e06e4ea7.js",
    "revision": "edc7f5ffe1ab89e64bddee4a105906d8"
  },
  {
    "url": "assets/js/29.cf55a0dd.js",
    "revision": "60bc737dac03c818bc0e62f8d41e9950"
  },
  {
    "url": "assets/js/3.fa8cdf39.js",
    "revision": "cbe5c98496c356cf38e8f99b603897f4"
  },
  {
    "url": "assets/js/30.310790b2.js",
    "revision": "b8cc283f417917caf6292e09a6a52b16"
  },
  {
    "url": "assets/js/4.4ab78c50.js",
    "revision": "49e712d927435fc41b2ec74697388c7e"
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
    "url": "assets/js/app.ecad112b.js",
    "revision": "89c421e26b99b62952cabea855e0f95f"
  },
  {
    "url": "figma/index.html",
    "revision": "0cb7267be70ad80c3db6c8bec7ede808"
  },
  {
    "url": "flutter/index.html",
    "revision": "f082bfe86f47dc5c079c0905517042da"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "83ed55d062cf85569f7a7097d21107fa"
  },
  {
    "url": "index.html",
    "revision": "b72eaebd6b48c54224b626772c13ad63"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "15fa810dfb4e4f2c6da8fbcd2d432103"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "a5616da65d69f91e32ffe78ee14c11cc"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "2a3f0b448ca170e6a96a1492acb75cdc"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ec9199816f5bb5d396bfb898a1e76e94"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b831c0747130bf83f56780b913d4a726"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "12d917ba4a5fa8fc3a02896829f96899"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "f0be4dcae1525223600b012b8b21e00b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9c43984abdf031a09be27f281f992eff"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9f9b7c1f0f7e31a9b12ce34bd21cf811"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "0a18223640500cfe3ac809ca984d4820"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "04857b79d067aade2af8b82645cb4d26"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8c79c4672189537ce1f6fea37de76512"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "52fd55cba5737cce4065d12bcc9be895"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c2d5007dc3169dce6b9d2ddbfbd2bd0c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "35b45d650c7079d65ebe4d6404965b79"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1e4f67a7a61fdbfb442fa3058855eb52"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4833c043c22cb3ba0a349da5659f3b3a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "83264bae0bb3385459076ddb47f67dac"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0b574c453ae7cd523fd6220d154b329d"
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
