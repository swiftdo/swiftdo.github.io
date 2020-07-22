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
    "revision": "9ae50f1ff26c03f9058d9821375d46e0"
  },
  {
    "url": "about/index.html",
    "revision": "7fed7ab7f8156dc58b8866a865b65c20"
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
    "url": "assets/js/23.a7728edc.js",
    "revision": "1e780a0e9ebcfea5c23aa11aae9fee47"
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
    "url": "assets/js/app.3f9b396b.js",
    "revision": "9e164c3ebd628525006dc8cded954561"
  },
  {
    "url": "figma/index.html",
    "revision": "55b148a13f84379bc230d88bbd79d687"
  },
  {
    "url": "flutter/index.html",
    "revision": "a35b573b39991b819bb2c15f87095904"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4dc00f0883f8bd33ed00bf63c2bf9e4c"
  },
  {
    "url": "index.html",
    "revision": "58f477aa6efeab76afc336143f78f567"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0ec647e716d2c23884522e49da7f84bc"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "04ea885d6b20dd3c7cad46dbc754cc49"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "9b33ec81bb549e7a5194d88cd019b211"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "e619329432920e58e34d248cd5f82a71"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "afb2f8a2efa7b367313153db691ecc81"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b37dc848cd6367f538d9225fdedd7073"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "178e1157e5e1ff301846e2c7aefc92c7"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "faf56abde91fe74edc69014a033ffd75"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7e55c7a9d89cd5e441c735592efb3692"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "aad0d40d671e1a0bb3926fe2b6b32d2d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ec155668370f88e9b9b33e920c53367d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b077208ec3a90614520bfca1da950025"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7bdb889736873c0869bb3e87988e0a76"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "eb15bc5108d9d723980757eef6f38691"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "508c95fd51664ca98a36bec0671f53fc"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6a8cdc16a81b657a036c2ac8ed2984ca"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "604ceabd1dd4687a0d5598b418dc74a4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "cdbd4a87b715eb1d44b394cc14d6fc43"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "6c31d0e7f86bdd26efd16d51dee253d1"
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
