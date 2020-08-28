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
    "revision": "718a494bf176cfdcf3903179e6ddc043"
  },
  {
    "url": "about/app/index.html",
    "revision": "bd321ff335685dd614ed540f449f4777"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4d78849973187cdc5b33c822eef19135"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5a284e641e643ccfe26f000470e1b667"
  },
  {
    "url": "about/index/index.html",
    "revision": "914010f34816d064e02b04b62007628b"
  },
  {
    "url": "assets/css/0.styles.2cea3813.css",
    "revision": "c234890149bb6045f7b313554fc21399"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.a77c5691.js",
    "revision": "69a4efb389d3f8ea8550d7a04c553e3b"
  },
  {
    "url": "assets/js/10.b06c0997.js",
    "revision": "516f705edab68410b8c8dec3ab349800"
  },
  {
    "url": "assets/js/11.81c82553.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.c5800ffa.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.81c1f879.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.d3ade443.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.a135ccc6.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.1c30bf1c.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.a0a779df.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.f0e594d7.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.ef7b87f2.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.cbbf00f0.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.a0fda9fe.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.cb9919af.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.446c7abd.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.cfd9171b.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.336f6c5a.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.c77469c7.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.62ccc67f.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.9cca3e26.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.339b73eb.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.32491c79.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.a7a5eea8.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.a29e802b.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.cf799455.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.fd886188.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.be58dbc2.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.e44a5800.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.f383ae4d.js",
    "revision": "c6c9d09aef830f67ed3698df802ffd30"
  },
  {
    "url": "assets/js/37.82dd128e.js",
    "revision": "8d87cee30bc89bb15e9ba932295979bf"
  },
  {
    "url": "assets/js/38.7b2d1ddb.js",
    "revision": "c5a3ea851f0fcdead27ee86d73828814"
  },
  {
    "url": "assets/js/39.c3ed45c4.js",
    "revision": "ccab2e0feea8e45d80b19387a189be02"
  },
  {
    "url": "assets/js/4.a6b8f26f.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.66ac3bd3.js",
    "revision": "7495651c213baa4c7a87dffd2988d254"
  },
  {
    "url": "assets/js/41.2fd88d26.js",
    "revision": "a84267565c14b18768b02e51625dab4c"
  },
  {
    "url": "assets/js/42.4923682d.js",
    "revision": "1e34768bf4c35d9501f259717334ae18"
  },
  {
    "url": "assets/js/43.c91ce0dd.js",
    "revision": "69bb1d26243bdfef450a5be79fcfd7ea"
  },
  {
    "url": "assets/js/44.d9227020.js",
    "revision": "26991daf7cac25e565cc120ff0c14d0e"
  },
  {
    "url": "assets/js/45.8cedda75.js",
    "revision": "832c4070834500d0ddc55ee448d64352"
  },
  {
    "url": "assets/js/46.61e182a1.js",
    "revision": "21813b1dc733b29def78e40cf137a000"
  },
  {
    "url": "assets/js/47.3cb53dc2.js",
    "revision": "f4119083ed57ace7251f961e9e29516a"
  },
  {
    "url": "assets/js/48.47b4dcd4.js",
    "revision": "1f266db5ef34972037326705c7ab8a9e"
  },
  {
    "url": "assets/js/49.07663fba.js",
    "revision": "0d7a9b29ffd5f48c26a96023cef88f83"
  },
  {
    "url": "assets/js/5.6ab1ab94.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.1e2ec629.js",
    "revision": "fe6bff8e2a8cd5d7f2e7f713adfec22b"
  },
  {
    "url": "assets/js/51.f766d63a.js",
    "revision": "7509bf2519c188ff46866ead2d77eb9d"
  },
  {
    "url": "assets/js/52.724cf0c1.js",
    "revision": "b6dc715961bcc149d95da02f3f8b65af"
  },
  {
    "url": "assets/js/53.0cac02a4.js",
    "revision": "f18e74343f7c775b105f3ee1d464f208"
  },
  {
    "url": "assets/js/54.176a82b0.js",
    "revision": "221d78d8ecd5decd4f3537939180e543"
  },
  {
    "url": "assets/js/55.303e4ecd.js",
    "revision": "4511770b8ebdb953e4fd9466e044234e"
  },
  {
    "url": "assets/js/56.7339d5b5.js",
    "revision": "e8118b2b3f51b0d4f5a9e04d5be7f58f"
  },
  {
    "url": "assets/js/57.2df09a43.js",
    "revision": "6ca7bf0fd6954cbbff34ea699335c916"
  },
  {
    "url": "assets/js/6.23a75e3b.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/7.8fe10757.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.c3dfe21c.js",
    "revision": "f90dd3cdb69ebc78dd8d579aedece24c"
  },
  {
    "url": "assets/js/9.58c9b149.js",
    "revision": "b4cb1714e6563458ad490304820818be"
  },
  {
    "url": "assets/js/app.03fb5267.js",
    "revision": "419cf81981fe15882b944f5096c80278"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "998b038d13da480710089acf560a0b55"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "702f89b81ad5d5a5864d8e16985f9b19"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "531f771781beba8a4fa04a981732ae00"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a7c47f61bf390a4b366b84469aa014d9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "94761f0190b899ade455ad594fdbc7c3"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "abb8b693d4566f97385292211f95cfd9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "512384ef3bb72696075651716767319a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4e6d12df1428ce33543b390c04688282"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "db9be965beaaca12b39ea4a97e8c547d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ffeda5fedcbf6e328c7f7cf14d8c96b9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0fe2f107026be6751a906a5fc7328440"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a6b55720e3518f2ae0e999148e817d00"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2da8403b4ab11f08980abced41549b2e"
  },
  {
    "url": "book/index.html",
    "revision": "baf8261362829ab1e19b70fdcd925513"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e32ccf3a21135b66a9ccadaa36fe292a"
  },
  {
    "url": "categories/index.html",
    "revision": "bbc8e4393838048e4da19abf6af4f92a"
  },
  {
    "url": "figma/index.html",
    "revision": "4d07b4a9e970b5091fe5dce5333adc08"
  },
  {
    "url": "flutter/index.html",
    "revision": "d5e729d3d6385ae07d6c73e198def522"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "50295c4186dfd86fca5937e02df3c9b5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ac82d81377864acaae9d4fd76b82fcc8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "373d560d5652f6854ab63c3dcc515863"
  },
  {
    "url": "index.html",
    "revision": "7a5ffc23a4f73854dae195260e7cb33d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9e5236f789a9250e9008a3fd74f48739"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "e2e44f0566fe1be9292aedb01d6e7d0a"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "5dc4e14e7990a1f1703e70b7abbd67d7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "35b532b1196dc652960e860a2ecb7b41"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "94b95a80978470ad658c153acd6ea045"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "4e1916270ba0dd0df176e59628297510"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "cbe44424b5667b2134aeea065c319c61"
  },
  {
    "url": "swift/tips/READEME.html",
    "revision": "4dde85b8bcfcc1cf2077d024b43f5d18"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ec6f0f6532ee982859dd150d09f0f203"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b1df630325f566db8b96e2dc7b32dcef"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7e4aaa5805c05b3253eb2a0d1a1b19f1"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "dc49213f179d391d0122fb3b1563790b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "75ecdb40d7e4b4fe839428729db2071a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "544b5f7a8a28e4f24e6d4f1bb3724b07"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1d723041b09788e60cc377971c2acfd5"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "129829d5c56c6e2175c979cad0328c92"
  },
  {
    "url": "tag/git/index.html",
    "revision": "367914ecee5ca4dc7d699185bfe19b11"
  },
  {
    "url": "tag/html/index.html",
    "revision": "632668c8eb917a6d6a09947e60d5546d"
  },
  {
    "url": "tag/index.html",
    "revision": "ec2bdf40563cb2f1588536c0c7eed83d"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "fed9ac67933a0d7a9ec0f1271fe8babf"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "2aac2a7337bd1a07c3dc4021bf6ec486"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4e2e75f35f2ca3c0419cf7a9cb97035c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "43ecbe88c43e0c1d3252419f418be07d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a86bb60084a2d527ad058d60896ea0ab"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9823d8d31f3e83eb4ac1ac1d54f9b222"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "173bf5ecaf09a0df7682df2587a2d41c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "321c56a8ccf660c976bca403477f5c96"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d98fc52d4c3b1e607b4604d757bd4d98"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "cc8af8f30b989cdf833b7b31497f1b44"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "293c7ba0781d24c5b33e9715343abce2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a6663e1b4454d612c69a49112b0bbc8d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1b3ee65109cb91d0260f4815046a4f77"
  },
  {
    "url": "timeline/index.html",
    "revision": "598ed20ec5854b0be6586fbca980e941"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6d970ed92f81e21faef2ad1678deb369"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "631456cd570107f345ef53e94f20dda7"
  },
  {
    "url": "tools/html/index.html",
    "revision": "15ea3b8bbc0fa773ae64a70c90f464ac"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "fc4a2cc0490803bf8a7d29dbf676c50f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "db06c517bb1da40b17df54226d486184"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "aef3afe17c2c06d1d9f7e6b9630ce24d"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "wechat_cobe.jpg",
    "revision": "7c103210c64d14972d9429ef991b44d2"
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
