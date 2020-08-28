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
    "revision": "76e020e84a203c00b5485c2c3fa48901"
  },
  {
    "url": "about/app/index.html",
    "revision": "46f89696a685e598c52b3d30d774f622"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8750582aa1ffbb89090efd087128e47d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "6ebec5812d77cc5b23326ec2f9051f3b"
  },
  {
    "url": "about/index/index.html",
    "revision": "3636be0902eeb9eaffd989a4d6bd74ed"
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
    "url": "assets/js/43.8ab7ba52.js",
    "revision": "bc3ddb40201852c89fc531cf08f5fce4"
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
    "url": "assets/js/app.7cac101e.js",
    "revision": "4180f507ae9e8d42c84c6bfee5cbd53a"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "587fb6482017c4fe5e68352fbc7b029a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1c2c4869fe3502317341a646eddb0031"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e9b154859f3b65ae8c6c93e33c65cac1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "21afb7dfe34d4c48be55a365ca857908"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "69496bf7d240edab1f97cb67f630e3f9"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1129cc819decf97468cd1b1a741f44cd"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3160a3bdae1072ba4e36627b3f751866"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a9cf544040f241ad77eb94ac2eb154be"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "622cbfe15a7da3bc2977eeebbd3c773d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a61e7921f8417eb6e6f8e7b94bad3a0c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c6048e99d9135daf493e99d3d52033be"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d3758dee344d2f00e2aa956b393293c8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "fc7235476a3581d67f9922192dab417c"
  },
  {
    "url": "book/index.html",
    "revision": "7c7578a7ce6e9872aec820ab5a440e5d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d6cd077ae0c9c96bd712463dd3e4708f"
  },
  {
    "url": "categories/index.html",
    "revision": "442ba59eafc55b089c831e10203a4aef"
  },
  {
    "url": "figma/index.html",
    "revision": "3ecd2067a64192595018b367d3b2ff6c"
  },
  {
    "url": "flutter/index.html",
    "revision": "bafbc441de8515549a238322388a793e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3cbb52cbe5c7facda62723cdd79b0705"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b8eb6fbea7141ca541bea418b9977783"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4d86b51c94e69c6ce22c575928a93eda"
  },
  {
    "url": "index.html",
    "revision": "2a13318f4fe051a45262bf0fa8a9a2cb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "86d072fdf280623ef33eeac03e8df049"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "34a44cc5d21ddc9dd71c3af549f9ee7f"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "5d1b7b261a39166c41c45c07f5522f62"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "fdb440d154eaddc58be965bad8da62f0"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "692158fb81a5a0e6113607035dc2684d"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "1cd2396647d8c522075ef730883dc86b"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "25f71113fdcd63937ddb79f74326a08b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5ae726d64ff22ca71f0167a21705f0be"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3002eb0624f6175c7bf7eff813967295"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d6196558606105f1b32c962c6292e71d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1ce1af6493214e4b68371fa0b3ea4ec0"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2769c39149666ff4ddbc5366da769a0b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d515264c45525991b2e93b12ea8914af"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "dc3c95987656abba6449e4003063f846"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "a5c813f6e0c5662ad3f74d6a5fcebb34"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2cb1de6943eced5b41b6345bbf6244e3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "40b21f92d400635c61cdd672165cb886"
  },
  {
    "url": "tag/html/index.html",
    "revision": "70273281ae024c221319dd77b9e8a3a8"
  },
  {
    "url": "tag/index.html",
    "revision": "ffe1f0fbbb77dc58c5bec90bf1f0e649"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "85e708f1829d9a5e8017fb1f2b994053"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "25715a9079773f8cae1b130eabc641ba"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8f1c1be43904f89918b425002de79112"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "056011834776b1ad31bb38f4e178d1af"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0ac35c83ce3c079d47eba17c4763be54"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e36a809719b1ba8672cef9488a3e021a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "290918988548baba3485e9a8b9444313"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "60c24fc45e9073cd94f13eaa13b0d5eb"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f42bb11b714c8c511fecd942ad18155d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6bb4237b46ce5fad3040252e7e8aff0b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5a01607eb3d487369033dadfab683548"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cf76d5e71b4110b7a548b09bd2fb49f7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0ccaf1b67b45bf0b1baa2d54ec09f5d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "af7ba5ff1c10557dec3c2eae230099ee"
  },
  {
    "url": "tools/git/index.html",
    "revision": "59f3f23410905932b00405d686188b44"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b0024d0171c33740e52e9fa43c3773a8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fd6050d9872b66ae8a13c104ad6ecc6d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b77da277bd1325178642303d07fe4e76"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d571d25f144e40750dc7f749c6da522e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "fb3ac015676782f05c29a7a874c7c263"
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
