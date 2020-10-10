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
    "revision": "52bc9512a59a3c1d41b1cd54d093a00e"
  },
  {
    "url": "about/app/index.html",
    "revision": "cd807b9c0c3c8f94b2490f170c710588"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ff98d9fef7390883e7ca3e2043d613c7"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "84bc3b65f651142d12f6e8445c52f480"
  },
  {
    "url": "about/index/index.html",
    "revision": "503b69073a0630d4a21908fd44a47f4d"
  },
  {
    "url": "assets/css/0.styles.625902b5.css",
    "revision": "cbce2c0a748cf5fab169cab5edef8613"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ed13abcb.js",
    "revision": "2416e7e08846e26e398243e670751221"
  },
  {
    "url": "assets/js/10.d33307ad.js",
    "revision": "21a37afa245bd192b37a63d891a29d07"
  },
  {
    "url": "assets/js/11.ae06c7f2.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.fe636fc1.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.eafd63ba.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.145fbab5.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.5f7b5bec.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.ee6de255.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.dc7a9df9.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.7500f234.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.1064ffef.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.ec1e80ba.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.8f17b6b0.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.f464170f.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.228231e7.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.a85ec7dc.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.5d6d0d49.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.62a6e1e6.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.6ba1e350.js",
    "revision": "fb9f9d2c453db56fceddf678d36f8fcf"
  },
  {
    "url": "assets/js/28.84791a07.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.c5d17071.js",
    "revision": "5ca451a4558942d342d908126e5ee317"
  },
  {
    "url": "assets/js/3.1394f437.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.b7dabb02.js",
    "revision": "495fc627f8201db6d4d453fcc7da3a34"
  },
  {
    "url": "assets/js/31.e23ff899.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.565bffa6.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.8bebf36a.js",
    "revision": "5277d83b1dc662f04ef851a4d7b524db"
  },
  {
    "url": "assets/js/34.5ea8ca3c.js",
    "revision": "e5e3d44e82f7465c44f39fa216e21ed5"
  },
  {
    "url": "assets/js/35.938f5118.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.21569c25.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.6699dd40.js",
    "revision": "206b266a0f3f54f0a97c3100a5d9a6df"
  },
  {
    "url": "assets/js/38.8165e559.js",
    "revision": "09eb302b69e5f468ad823f8c4ac29385"
  },
  {
    "url": "assets/js/39.133792d6.js",
    "revision": "2e8a2c24ce76f58cae98d1f58abbde9c"
  },
  {
    "url": "assets/js/4.cd5ac232.js",
    "revision": "39c76a2160a7e88868471fbf7c9e819a"
  },
  {
    "url": "assets/js/40.d769d3ed.js",
    "revision": "da86784d147f51848cfe1270517e944e"
  },
  {
    "url": "assets/js/41.991da1c6.js",
    "revision": "32824e0a7cd4ff986b5be6ca764ef9ef"
  },
  {
    "url": "assets/js/42.08943c5e.js",
    "revision": "51f4afe1934be5f0599c505350fb38bd"
  },
  {
    "url": "assets/js/43.81e23e72.js",
    "revision": "c0987e26a29a4363e2fc030e3aab175c"
  },
  {
    "url": "assets/js/44.f0f29817.js",
    "revision": "81f2f61683b25c38b8c20f297abfa043"
  },
  {
    "url": "assets/js/45.e896972a.js",
    "revision": "c3d938bdf41f294f7f0dc9bbdc41bcbc"
  },
  {
    "url": "assets/js/46.4145fab9.js",
    "revision": "7d916a2448224fd1d83138fc6d0b3e39"
  },
  {
    "url": "assets/js/47.577aeff7.js",
    "revision": "f329cbf129429070d488be5553cc1f5b"
  },
  {
    "url": "assets/js/48.324a3276.js",
    "revision": "15d268a9d22383fe414709e0b6929e33"
  },
  {
    "url": "assets/js/49.0e3ab1e3.js",
    "revision": "2b963ca40b70327e7db02e3cd45ada74"
  },
  {
    "url": "assets/js/5.d2a7825b.js",
    "revision": "4445e30254215797c29c8a7473cc9e26"
  },
  {
    "url": "assets/js/50.d24184c4.js",
    "revision": "a121b2a33b7c6087140d00cbbb2a528f"
  },
  {
    "url": "assets/js/51.800a636e.js",
    "revision": "bec40b19d56c5516dd62a142f0de4528"
  },
  {
    "url": "assets/js/52.caa9b47c.js",
    "revision": "332d31a347474e4055d3dba47d766a09"
  },
  {
    "url": "assets/js/53.eb2f5ec3.js",
    "revision": "1b1a0d3700720c009583e8819654a485"
  },
  {
    "url": "assets/js/54.d004e314.js",
    "revision": "977e09036ecd60bce5d7649c669283bf"
  },
  {
    "url": "assets/js/55.b946acc0.js",
    "revision": "e0fa015abb14ed1c356b2779b80de572"
  },
  {
    "url": "assets/js/56.b532773f.js",
    "revision": "f102d864b0ae1a33a7c92c0287dc2ffa"
  },
  {
    "url": "assets/js/57.06284ec1.js",
    "revision": "5915c984c400681e8d9c518052b98967"
  },
  {
    "url": "assets/js/58.5fb45f3a.js",
    "revision": "e8d072d31e238aa7a2942e0a14c8d3ee"
  },
  {
    "url": "assets/js/59.8f0425bd.js",
    "revision": "7406ac5e1f995f6380243ba65fbc5345"
  },
  {
    "url": "assets/js/6.52cab3c6.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.3920f103.js",
    "revision": "d09880e7b51413fa789da31e43ff40cb"
  },
  {
    "url": "assets/js/61.71494ac8.js",
    "revision": "526beb61e3efec633e60d6d17db70519"
  },
  {
    "url": "assets/js/62.7b1b9532.js",
    "revision": "51941ab4415ccd547782e072725b7005"
  },
  {
    "url": "assets/js/63.50fae448.js",
    "revision": "38c69456e39f8871cdb169d11f30c095"
  },
  {
    "url": "assets/js/64.a0be4722.js",
    "revision": "8d68d4c99ce58c62e5a387d65e00a26c"
  },
  {
    "url": "assets/js/65.1f026da3.js",
    "revision": "8907522ca982619c5a822f730d146afb"
  },
  {
    "url": "assets/js/7.a5327269.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.2c0db0b1.js",
    "revision": "6694823c95de7f43946ed6b6380808a8"
  },
  {
    "url": "assets/js/9.8285b1d6.js",
    "revision": "2144d867f75b6f562f932af3348c4296"
  },
  {
    "url": "assets/js/app.6f8a6378.js",
    "revision": "e978150ed68fdbb429db7494e14b7ec1"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "f36110ba6cccdf582166eebcd37a7744"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "468a79df0669529d71adbd4cbdff2cb3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "4db4bd7759c3764b3206697304cb037a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "691de137af7ef09769cdc1a37abc2d06"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "add0db463a6473c6a1d31979ef39d1be"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c750153238dcd8cc341c111ce253ca61"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c4492630531351fbd9d5b043650ff356"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5ab5599204999cd8d6ddaed3544fd198"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "0011dd9d59fc74c05155933fd8b44108"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "77c9938d34518c8dea79e4d4d7711911"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ba09b74c0cea0db04bae3c65518415ea"
  },
  {
    "url": "basis/index/index.html",
    "revision": "520ddeff28ad075c6267a36bc2a88769"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3bec1b158c1c6be5b494fa1ca7d23edf"
  },
  {
    "url": "book/index.html",
    "revision": "41681c062f141d53bcde26fd54a89587"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "39eb2e91ca40e17ba4a8b04875714ffc"
  },
  {
    "url": "categories/index.html",
    "revision": "713711d8377bb16e2e3f4ef4ddc05631"
  },
  {
    "url": "figma/index.html",
    "revision": "951cb65175e6f63cc99a4d4efc45cfba"
  },
  {
    "url": "flutter/index.html",
    "revision": "dec75d7d950415b82c40bf30d38a1ca2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "eb038c9ef7495a513bb7fc12807545a4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3cb70d9c260ac2ae38f89899154405ce"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "82d4a1f7b4778c419a908875369508a9"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "eb5cc72e59ef70dab41ad00676e246ce"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "424271e0b535d2e6a516d2611852133b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "af84452367afa811a80fe7ed26c00285"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "34a8885d45bd176227e4fb393f597171"
  },
  {
    "url": "index.html",
    "revision": "be1cf084e3d601a01d552b8e41669cf8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "52a82148b026af782c460ed79957f63e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d56326c76ccbcd2ffc84ae8da0f284c7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a747e9eaceed8e6b958fa642b670cb89"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "367b33ad1c49d214199c162595e79035"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "806da3179f65fa43c58585eabfad4418"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "545ff9dcd3d9b7a4074eb313155b5dbb"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "570d50936f2f48552544de25d4e3daac"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5607acf752cb58e952a978a194a16c19"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3dc5f47e0e6ffd3b78072ccba4766048"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "025618346125cbd196dc70047a568f63"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "095eddda0188dbb8527fd4a8b49e3574"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7c32422b9eee9d6f313013b323fbb47d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "34676fb3a23aa4175025ef678058532b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8bbec8f303774578adbe2055518f536d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "30172ce2ee090d1e82bb3f3831ed7cf3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "08d506ea9a266b060ff424fc4ea6f91c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "649321e8ccb7284b045450430ced2954"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "006890baea01069c7ad94179d341cc58"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "47417eb86cb742390f30a997cff931b3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1d35d8590b5ec6bb4d6dc27790860730"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4a8dccfbaa76651b8fb5af5ebf6f32fb"
  },
  {
    "url": "tag/index.html",
    "revision": "a8d143c16262bef335d4db743718348b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ce9fc4ea0929f898ea931a4d2e079f96"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "2cb9be018941d1516229b18d4ddcc6b4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "22b79aa76236ac57fc2ccc1e86859fc4"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fad540b4ead164ca99ed51222ae4e0a4"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "0dc6ac135c17e5a051433e9d15292548"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "fc40e5a10de64e1ef95f4f9194ebda22"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1fff44ef290762090287b167c2317599"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "88c9ce8e8962c5002a832a30eeff95f0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e79514ac547089b752e732cc44a14710"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8a645154ba5212aa37bcba4c32296360"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "499c65aac85e0c21b491ec6ccddd144c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "93389ef4f520dc6e20c5ff236cfeaaf9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e4b4a4aba4a6dc984652f13d0548d9b9"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "6647a06bb6cfd6dd0cb575d36079a2b5"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b474497e29359097520dfb5aa22c957"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c4560be306dd06dc881e08f27c337815"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2f6b7837256e295d5d7802e3b5bee700"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3b83b66c86e306e44fcae6fdb5ccba61"
  },
  {
    "url": "tools/html/index.html",
    "revision": "30128a4aa94923f8b29b5061058f556a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "09750d3091217666bcb718217f4442fe"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "72835d51e00e4c22269cea510fbe43a5"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f1a2a1c99a1dab5179c05b5cd84e78b4"
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
