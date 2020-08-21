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
    "revision": "c2ff1d64fdb8d3dd716e4deee748375e"
  },
  {
    "url": "about/app/index.html",
    "revision": "e306d1687f780b67893f5911c7a7a302"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "98da2679d9ec0b02b4b5ef95ecb55f26"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "05d2a0efd61a4b8709431e12271784d5"
  },
  {
    "url": "about/index/index.html",
    "revision": "0c2a40380667d6960f0d9558a1fe30eb"
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
    "url": "assets/js/1.61f9690c.js",
    "revision": "69a4efb389d3f8ea8550d7a04c553e3b"
  },
  {
    "url": "assets/js/10.45029e95.js",
    "revision": "516f705edab68410b8c8dec3ab349800"
  },
  {
    "url": "assets/js/11.280a42a5.js",
    "revision": "322cd1fc098c97aef8f615ba2dc88c5d"
  },
  {
    "url": "assets/js/12.77c00848.js",
    "revision": "a1eed18186deb23707e94d182c48db0f"
  },
  {
    "url": "assets/js/13.e239ad1d.js",
    "revision": "ae0f7bf1a87fa1516d2d632f96d50f9c"
  },
  {
    "url": "assets/js/14.c694108c.js",
    "revision": "091e80acfe86b02e1900bb205e857b5c"
  },
  {
    "url": "assets/js/15.3036377e.js",
    "revision": "8298ed3e743686d3bc6a381ca005da77"
  },
  {
    "url": "assets/js/16.7561a544.js",
    "revision": "caf55862f5a08a974fb76c6cc5c6e277"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.9e4dfe30.js",
    "revision": "26d1af4475d330452817924500ccc066"
  },
  {
    "url": "assets/js/19.3394e155.js",
    "revision": "9f850135cebab76fab145b05d1d7efb6"
  },
  {
    "url": "assets/js/20.88ec24fa.js",
    "revision": "11ed63d77461b89bab48ff33dc6233ed"
  },
  {
    "url": "assets/js/21.7368d240.js",
    "revision": "31dfffdeb68541fdc5298eb74ead1eae"
  },
  {
    "url": "assets/js/22.2f76a0bf.js",
    "revision": "448af79229a63f56abc4a1c79ea8a97d"
  },
  {
    "url": "assets/js/23.07e8de98.js",
    "revision": "8a16c6619be9534ae0fe3fdbd0990676"
  },
  {
    "url": "assets/js/24.9708f287.js",
    "revision": "a4adc04da6d433c6f58dc6dd7e3e2648"
  },
  {
    "url": "assets/js/25.07d134a3.js",
    "revision": "cc8a7d23a08aef00c7ced9c1ece35e86"
  },
  {
    "url": "assets/js/26.bbfb1273.js",
    "revision": "87ffd5cf1fbc420139eebd8617447eaa"
  },
  {
    "url": "assets/js/27.f31beb03.js",
    "revision": "bd670fdc678b1abf2e77db0cc23133f2"
  },
  {
    "url": "assets/js/28.222bd60d.js",
    "revision": "8528ac79fb40d7ab8944020f33ebdece"
  },
  {
    "url": "assets/js/29.9c2e7d73.js",
    "revision": "fde04c5abafb2de778d0d47b219c93bc"
  },
  {
    "url": "assets/js/3.27d22ab4.js",
    "revision": "6a3910b24d0af1e96da176979e650449"
  },
  {
    "url": "assets/js/30.2e6a317d.js",
    "revision": "7d905d4704013ae05695dc45f91bde95"
  },
  {
    "url": "assets/js/31.f523361a.js",
    "revision": "13d05cba1842c0691d4db3fda9ef8678"
  },
  {
    "url": "assets/js/32.ad5fc54b.js",
    "revision": "f47f6ed0724b86c8484c64ac76554a52"
  },
  {
    "url": "assets/js/33.acfe65e9.js",
    "revision": "2abecfdf25d433d0c445cc3cf763fa0d"
  },
  {
    "url": "assets/js/34.14b5e4d3.js",
    "revision": "b833c762c185e4bd60e225545c0bfe0e"
  },
  {
    "url": "assets/js/35.272c3aad.js",
    "revision": "d7f16edbc42a020d4cb4d710fd58502a"
  },
  {
    "url": "assets/js/36.23a1f974.js",
    "revision": "c6c9d09aef830f67ed3698df802ffd30"
  },
  {
    "url": "assets/js/37.7d5fb6f6.js",
    "revision": "9f4f2c0b15d1c71d1207f91e62ccad07"
  },
  {
    "url": "assets/js/38.e8865eae.js",
    "revision": "c5a3ea851f0fcdead27ee86d73828814"
  },
  {
    "url": "assets/js/39.8ee50e9d.js",
    "revision": "ccab2e0feea8e45d80b19387a189be02"
  },
  {
    "url": "assets/js/4.a114e465.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.0ef79ea7.js",
    "revision": "7495651c213baa4c7a87dffd2988d254"
  },
  {
    "url": "assets/js/41.b44fb778.js",
    "revision": "a84267565c14b18768b02e51625dab4c"
  },
  {
    "url": "assets/js/42.4d6b7cfb.js",
    "revision": "1e34768bf4c35d9501f259717334ae18"
  },
  {
    "url": "assets/js/43.1b4423fe.js",
    "revision": "c37c9795470075180a06cf99eb590746"
  },
  {
    "url": "assets/js/44.2a2bbcd1.js",
    "revision": "91c58b4aab25e9c4be839b8a0e0ae9db"
  },
  {
    "url": "assets/js/45.500c72ff.js",
    "revision": "dc65a0a289a178eee3f04dfa41c8be7d"
  },
  {
    "url": "assets/js/46.0ff16f2f.js",
    "revision": "a6f0e379753b186569a7eb7e4cb183dd"
  },
  {
    "url": "assets/js/47.673882e8.js",
    "revision": "5cf1caed8b40874f6d74f7777cc15fc1"
  },
  {
    "url": "assets/js/48.a330c5d7.js",
    "revision": "cc19354a8bfea554d0a9f6b838186cc4"
  },
  {
    "url": "assets/js/49.b139e408.js",
    "revision": "95df315ca205fe07470007d11353e2c0"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.8e91281b.js",
    "revision": "2208e050eb6f9e39f46a56f4bdb46c6f"
  },
  {
    "url": "assets/js/51.72e89382.js",
    "revision": "cc1971201d479abdbc99a097e9810eeb"
  },
  {
    "url": "assets/js/52.8147e06a.js",
    "revision": "10a9ec2e75ac3489bc2581a4f1db9a49"
  },
  {
    "url": "assets/js/53.880a8074.js",
    "revision": "9e8bf4e1f7308469bbad55475d85bb77"
  },
  {
    "url": "assets/js/54.d05ac961.js",
    "revision": "07c84a69c625e0a8ffbc54b67f0d6fca"
  },
  {
    "url": "assets/js/55.a467cbc1.js",
    "revision": "9ca1e88cacf90a494162c01947c97026"
  },
  {
    "url": "assets/js/6.07d8db56.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/7.283471e1.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.795c6f1e.js",
    "revision": "f90dd3cdb69ebc78dd8d579aedece24c"
  },
  {
    "url": "assets/js/9.2e547b70.js",
    "revision": "8a9bb253e07dcc94d5e73d64c6ea8113"
  },
  {
    "url": "assets/js/app.c41deb83.js",
    "revision": "065395b3f46ca587177f1782a61d2bc7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a431dfeffd16aa8164950e6e8a5453f5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9888c9abf47d56e53a700fcfdfa3fa25"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d02fbc1d9d3eaadbf91638f84392c927"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2985077275dab4edbb199448ba344290"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "76bc3f74eb133435d4f4c75f4f0c1eb2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "aea67ace3d5fba5ce2210b32297cfce9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "814871092cfc5bd35bc2bd9a86affceb"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "71698bb1eaf0b419808089907fb148d3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "fd86af1250ef957a1f27d3e85b10318f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a1ef821fb00f6470da25136e7160743e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "7f096a2197b613c89e0fba0168f81acc"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b42788a2f96c58ca625c87035f33a49b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a04ab87929afbea418a05a53a415bf7e"
  },
  {
    "url": "book/index.html",
    "revision": "49ff26738d09ed9a8b11b84f3ad28ad2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9fe7ec39b8cb198d55b48cc35749010b"
  },
  {
    "url": "categories/index.html",
    "revision": "723d9ecbaf2c7fd88984b470e86ebc5b"
  },
  {
    "url": "figma/index.html",
    "revision": "d9c03d0b911e74c8ae6b672de975b3b7"
  },
  {
    "url": "flutter/index.html",
    "revision": "a7e024cf373d91207bc0600f2b0324ce"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a755e7118752d46f68d49d01d338957b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c99270ec3c45697095c40a75ae8371f1"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "512bbffa1342008470db08340e77c1ac"
  },
  {
    "url": "index.html",
    "revision": "3a7c694fc815073d660cc80ee00302ee"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8623747274f4b75d29d5fb19bc18dfb2"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "b8612c96965f5423c536e1ea6d7312f8"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "18665561355778c138a76eb843081ce8"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "99fb548753305599489ca75a9ae667b7"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "5a1bb1b5b594b84945eceef46dbcbc78"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "35165d724876794a5ec2fe11ad850438"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "d3a6273468678c3f30841b68e8f26da5"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "200d614ea2e1ae053804cbf9d145e291"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a9c43ecff81c9adbdb27b57826a5c25c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "20656f46beb95af2af61fc729243fd48"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b8f2b673371d1b87539f27fc141ff40e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0b510e821bc8e185e50f0c7fdeed43cd"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2a332ce937325891a46ce819147346f0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "25c44ca6c6038ed1c5d19b99f31edcee"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3966426798d6ee97529fe09e55773b59"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e6a20a21f81deaecb2e311d005ed71b5"
  },
  {
    "url": "tag/index.html",
    "revision": "bdfb0821dd6203b912a0e5472ea63561"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7dcf4e47711f11bff952e7a1305860c6"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "43a9a7c967ee5cabb45693fd19489c1d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "16a0d479a1abb37808ba8edfa72f4b73"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6d03a8ed9dfd5055df7e1e66584937f1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f83ecb88a99c5ea0f7333a76eaf683c4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cf945593f1bd583110e705fe7bdc0d1d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "79e6998ace9bed83aabe224583923be6"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9db18f2e77ff77682539a45d930db938"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "691b72d9dfde6227d65120c97e40577b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1e7a680d3478769d996fa1fa087d6802"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ece39cfb04c6071052f72d892ba0eb12"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b9e940502d0321c66c1ebeb7248933c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c271c66a6c40b0cb07d5bd0fa4073c1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a8e2ac863773e1427c8c18eb6149f021"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "626d3b5749138af21a6f967e7583e462"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c31d4766836343451a75f51817601760"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b79f68268f4d2ed2801ae421355cd37d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4003b1fb9fe3d06c87f859a6baf9e081"
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
