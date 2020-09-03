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
    "revision": "2688c3df9d7b43bd84ce134184aa6678"
  },
  {
    "url": "about/app/index.html",
    "revision": "75cf2f2c500e6f30985188543fef13e3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b842c00b838e5c5a20e03c23d0283e4f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b9df582f8c53f3ba2a2040bcd25491b4"
  },
  {
    "url": "about/index/index.html",
    "revision": "57892520293202a009727c0145943eef"
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
    "url": "assets/js/36.fbb6e198.js",
    "revision": "fe8d0bfa5242b36045c8160ce0284961"
  },
  {
    "url": "assets/js/37.cd226950.js",
    "revision": "8d6a654f6d604a0ea1f30bb48ec781a6"
  },
  {
    "url": "assets/js/38.5139aa1e.js",
    "revision": "c3fd2a9cb424afe983f5c53c42c6554d"
  },
  {
    "url": "assets/js/39.2ee8f91c.js",
    "revision": "f82add81bc321554f2b87622524649b2"
  },
  {
    "url": "assets/js/4.a6b8f26f.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.f4c12991.js",
    "revision": "fb63c627125147758aea065f37f1f4e7"
  },
  {
    "url": "assets/js/41.6bb43be3.js",
    "revision": "23d63262bcb5bc5a8a49a08348d81891"
  },
  {
    "url": "assets/js/42.3ea4007d.js",
    "revision": "f79b29105ca4e459e731d82d21afe2d0"
  },
  {
    "url": "assets/js/43.dec82b79.js",
    "revision": "1c13cb0e997d7d9de62b550335ecb069"
  },
  {
    "url": "assets/js/44.74b3634b.js",
    "revision": "8c30f5664592e614dea6c57591ab521c"
  },
  {
    "url": "assets/js/45.5aa8457a.js",
    "revision": "05c616fd22ee0b01e0f53a91218f2e17"
  },
  {
    "url": "assets/js/46.e05a713c.js",
    "revision": "097b6409c8e6e697331ccb623dafa2cf"
  },
  {
    "url": "assets/js/47.9aa6c5ee.js",
    "revision": "ffa8dbfd753c3ea1221b41928609b168"
  },
  {
    "url": "assets/js/48.63e64116.js",
    "revision": "65769b39d3eb34eb4bc207fc6a4ef8d6"
  },
  {
    "url": "assets/js/49.f5ace6fb.js",
    "revision": "099538421de169725322abe27de65438"
  },
  {
    "url": "assets/js/5.6ab1ab94.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.477c8df9.js",
    "revision": "5367c7282c6baf4c6668a2d0cfc31bd9"
  },
  {
    "url": "assets/js/51.e50d84b2.js",
    "revision": "9a59edc4d1d3e9985e6a613238f3b499"
  },
  {
    "url": "assets/js/52.b7fc423c.js",
    "revision": "74125e4f18303918c0a38bf15fb17e32"
  },
  {
    "url": "assets/js/53.166dc27b.js",
    "revision": "999a159f6c35f2ea56c4c20588a5836e"
  },
  {
    "url": "assets/js/54.28db2a48.js",
    "revision": "a901606c9e8f29be71bd1963eb957f07"
  },
  {
    "url": "assets/js/55.0a5b08b7.js",
    "revision": "9ecb781a79cc6db9170b924c21c420b5"
  },
  {
    "url": "assets/js/56.0c062a2a.js",
    "revision": "3bf3c65ba93c14cf6f8ad5aeb9e8de56"
  },
  {
    "url": "assets/js/57.3d246cee.js",
    "revision": "662558d87177b98b629409d9b1780246"
  },
  {
    "url": "assets/js/58.bdbd7d58.js",
    "revision": "1b7d90bf4778c114224ef675e819ac0f"
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
    "url": "assets/js/9.65d45562.js",
    "revision": "e5023016baab2a86879ab9255f6e297b"
  },
  {
    "url": "assets/js/app.bae883bf.js",
    "revision": "78621ea98adaf88a61bcbe28f5fafa84"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "18cd0bd9e465d72579c5d1fdfab6f546"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4e1fc548e1f7ad67538fc9ab39bb7965"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b9ca5d3bb02ad0962f6dbec8d9ea2447"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "980f8ed49b95a7dbde109d12cf47d00b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "132e01b735e0074e90bedecc5e81d2fa"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a6b97924a8a9cf297653afdff3cdc2e9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d684634f2b3ea7beeda6b99dc7f33db8"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d9be70191603781b3707801253a5a3c4"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3ffb96541a7a67b068ed7bbfd2742dbe"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e093e773a7ba76d803acbd747275cb65"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "5d9a06da49e369cd88a354547dcf49cc"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2e8ecd7984c9037f002c98ef6925f665"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e50ba10ef550848b618f663fc1ba21a6"
  },
  {
    "url": "book/index.html",
    "revision": "a718c45e8f222d6e2d7d172f036f40a1"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a6ee1ca86cce3635011d6db50ef58e8d"
  },
  {
    "url": "categories/index.html",
    "revision": "9d41653675514fe72bc1890f57c8b498"
  },
  {
    "url": "figma/index.html",
    "revision": "4d7a429c73e0b2db2df3cd8ea34eaa28"
  },
  {
    "url": "flutter/index.html",
    "revision": "f907ce6905f8f5c55f28db55eb5c95bf"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "bb2b57ded830eade964cec30aa799c27"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "6c74bc193702dbfb32d8a65924e2c2fd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5b76bc7aa172ff8af0d62294e8e8b5d3"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "55ea532e19b03893916f678410a09bec"
  },
  {
    "url": "index.html",
    "revision": "93d31d23ae17b050593f2ca59eece84e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3b65d63a5d4a8cb2de583fbb0ffdddfb"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "9272398838e2f98140d0bc5e9a67fd6a"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "c0a2d8fb0b3083867680cc98819c53f1"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "f95b190d2cb81c07b0eae123e1136278"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "217bc23fc5f5322621308967b59f1d10"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e2b1973ccf634b6b1671c4e580523de5"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "6d4f6c522c8ff26160dd518dac6bbff4"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9df88a49ccec01cbf4448edde5edbeeb"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9af9cbe787b1dd61a1ed0227a6e85908"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6bbdd47f01788cdd07875ab1387d5007"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "5730190a3ef7d035bc47313120a7216c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d56bd0f4322727cfd65ed2ef5966204e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "001639f877a4fdeed42f1344ca3853ae"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "976bcd94b24b222ff0580c547c46534e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8eb4148b6295ce6fe4f6f8da98d338ea"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "1894b6a38c31e77d5f47d2a8ae44c610"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d267987acd70688edb542ad17dfc97da"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b8ecd1ebcc9a5ab71c4dfae7a9163bc0"
  },
  {
    "url": "tag/index.html",
    "revision": "7e277fcf8faffce3308fac66fdf2cf72"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "eed8fa0833e6a9c314e87bf5ac86b286"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "dd0c390699663873dcf43b339f2b4437"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "5b7e476962ba9a5b4eceaf38e4120cec"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "6180f4a2f503857942a31302f046863f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d063e53c6c9461e6ee358ee9276ef7c6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "617e4bb546c39ab257f0653f721f93e5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "38ac3d978f0b94cd820b367744cd361e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "799931afa1b638494d5f8f331aca4741"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "472779a64baf64410968ed930a071e09"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "12b8ec56bf22e35c681ed23f0bd7edb4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "30f47598d9199382871746c96d732898"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6ea57e7cde0904124cc6a943743d14f5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ddf8c4f25692853d5b941f4ebf9f4434"
  },
  {
    "url": "timeline/index.html",
    "revision": "bdff45af2c826dd23413eab3eaa38930"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4981f889f7f05c7a04bc2bf9d5095a19"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1731ad15466da74b7b8e20288baf187f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7c4cb78622a349a9a7c5d78ebf13f066"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "edac712c12d8847a3ad0385fb5218bb5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1fd88605cb2515015fc35c61c0f6101c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "cd804eda12627b7c6af676b3a5371162"
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
