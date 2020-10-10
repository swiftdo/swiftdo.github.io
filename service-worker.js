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
    "revision": "6405e49c6b771bcd05b89b5c83c0c5b2"
  },
  {
    "url": "about/app/index.html",
    "revision": "9220833637602e569b06fa28c2a418ff"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7edc3e02a43046650b7770a090f6b324"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b56026e133c0fca7a0e01770cc4fed43"
  },
  {
    "url": "about/index/index.html",
    "revision": "823911ac4703f4e66d341de508bbce6e"
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
    "url": "assets/js/15.7c4bc606.js",
    "revision": "04dce0a10025b5166a49901e1dc9b926"
  },
  {
    "url": "assets/js/16.893245f7.js",
    "revision": "d1f4d47257e532af2eb1953dff94fbb4"
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
    "url": "assets/js/20.4eb22213.js",
    "revision": "1df4ff4a8ec2dc25b0932f0ce0c98700"
  },
  {
    "url": "assets/js/21.98262725.js",
    "revision": "1bc7303d302251b79841e0919d00ed0b"
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
    "url": "assets/js/29.25d3a50e.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
  },
  {
    "url": "assets/js/3.1394f437.js",
    "revision": "b6f62b8d066d3fcaad9d7cb271cd290d"
  },
  {
    "url": "assets/js/30.a0db87ff.js",
    "revision": "4b81d3edcdd3fbde329c4b26db4608a7"
  },
  {
    "url": "assets/js/31.fea966b0.js",
    "revision": "23174a94bbde18574175314cf6bb72a8"
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
    "url": "assets/js/41.df574ced.js",
    "revision": "d920f44dffa4760c293aab5f010afdd1"
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
    "url": "assets/js/58.4c1b15a7.js",
    "revision": "eb37b8a5e6cc82c8217fc96a88f791bd"
  },
  {
    "url": "assets/js/59.d4c6f7cb.js",
    "revision": "4cd082af19f403bbefead8c0a7dced19"
  },
  {
    "url": "assets/js/6.52cab3c6.js",
    "revision": "d6bca7b5b6a81de53146b3507674fcdc"
  },
  {
    "url": "assets/js/60.3961ffc0.js",
    "revision": "e893bd3d4454f5c6344a33b6809aab2d"
  },
  {
    "url": "assets/js/61.6cb5eb7b.js",
    "revision": "b1219cb90749560124db3f51b443e87f"
  },
  {
    "url": "assets/js/62.3b00a9f9.js",
    "revision": "4d71970735a3081cf088a3e128e5b9f8"
  },
  {
    "url": "assets/js/63.c616c7d6.js",
    "revision": "f0e410eca6cb310905795c1d9824bc6e"
  },
  {
    "url": "assets/js/64.f55b7a88.js",
    "revision": "3b6ad522b2e90135ce82e4c439ecb150"
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
    "url": "assets/js/app.c219e523.js",
    "revision": "a28f300ba2e30da15249100d98679c5c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b627ab1052f7a8f472566142f98eb80a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ce9bf5309f5f46df06b26bc9050b26c4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ddd5fc83ea1859d5f809340ecab318e0"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2073f047243df4c1f551910f04482204"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "41b5952b4a8a125d47d3233174bafb86"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7aaaaf2d6cf5fe4d9c4fc0f8c1000650"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b39630155f1dadbeb20ff9155ec7dff5"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6925023e416b0d616a5943b7f1ba7731"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c38eb10921ad4bfaec199c34f87e2b65"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "00397453ac02c11ba4158f59adfd9c0b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "2b2d48e65b14429132ce0053388b5f27"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b3f19412a2f3b2ed8af50a930077b50c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "de0d7541834c1b6021124bce8e017b98"
  },
  {
    "url": "book/index.html",
    "revision": "84d3538903c1d1f8b0ba83ebedb772a0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4d972154c976bf8bc96f8abdc0534231"
  },
  {
    "url": "categories/index.html",
    "revision": "3c218f39e8e425c4b287253bbe01aeca"
  },
  {
    "url": "figma/index.html",
    "revision": "eef1b78a6d554f3a6f517aa71acd11fa"
  },
  {
    "url": "flutter/index.html",
    "revision": "52dc91e1f6f9ca737d9b73ebc50baa39"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "eb3d70817ce50b7e8b7bb55635e2700c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d381cc0a7e808dfb532752ce83f4cf19"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "8bf539b2b50c8cf8cc45a07b8986e956"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "06dae4ef7685625c56c4eeeb949cec39"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "ae2b739dd3012c4646190e75d078b2f9"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5256bf78ccffd5de1dc6dfb50fb17449"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "bed5852986c73286666444bee880d03b"
  },
  {
    "url": "index.html",
    "revision": "e905a47b726ff5d57fd6e157bb24d136"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8f56fa51466f7db392aa2739ee64c33d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "e1e075277f8b6da1432a0d23c9b0867f"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ea2dbb6d1984bdda7f9ac19fb3acd86d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "46372f1ccc7ced893b64a37a09629860"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "1de7796b4093f004133f520325cc6f1b"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "9ddb3daac62edbac0e4c80728fa0d80c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "c06da0f06301a3227ece32eb04825ef6"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ef8f5646d73b50271baf6f83211e911e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "697c07178a875753bf4846055f23ddff"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b9d09f3e734be0d7e2084ea6fcb3111f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b1610dd74283bedcdc59b427734329a8"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6af64ffbfd8e9a2519e3cd0e989f7b4f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6af3d2e986e070c1a02ab95d5b5c7ed8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "56ba59f5d60b54f76161c5d873026e84"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "825cd83cf79d268e43fbdaae8bf9038e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "852b54b4b07b99ecab6b14c4a8822ec7"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "419353f4ac08a5d058e6ae3223be82da"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9e0268f34260177ae3a39a9b14330bc8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "dd8d8fd5b726c013edf86abd0a0f73df"
  },
  {
    "url": "tag/git/index.html",
    "revision": "47986d0493a3186bab81c627a3fc8751"
  },
  {
    "url": "tag/html/index.html",
    "revision": "33f926cda43e7d536b57d4887c7766aa"
  },
  {
    "url": "tag/index.html",
    "revision": "0a5b81b283f82110b192d3108b48f5de"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ec3c84bb1e6002f94d1f6b89bfd65a73"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "47f60ee80dd1fc307ac49af1196841c4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1a314a27b85858de9245af1f1b566e44"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f427e38746b3c4282f0cfe9f4338e3a3"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e8da128c40a01a8d7b263a31627c4d79"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "7f026b48019bca3fb36dbfe7ca6d6a43"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c30cc07a97d46d0068286f520e88029f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "92ebcc81b07feff134ad8578e9b6a113"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "169e453d1eafdc0c615b72090224e24a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d1c3954249b303837263ddb312f2f6a2"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "351e803738d779d8ddf90637f2a36649"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d9b7d499ead89b8581ed61f1810f289d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "13ddcc4049488bac8c173743e7738c15"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "95e72589dc611cc5983129f03965da01"
  },
  {
    "url": "timeline/index.html",
    "revision": "c3bba965ed904b0af3f7bfeab58e54dc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5e94bc4a31bbfa2335cb9c954c9cf459"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8e6afb1163cc023cbb1f12f4dc5ea5a3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "299be7ed94978a512638d3d53469e1c6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5ac77bcf461a3823446b93dad783a9cd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "5ce650d3c60e1631fe8272364ff6d755"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "96a497b072d1faca0087dd6885307509"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "71b2e949d3253fbbe5bb20ac2fe29b23"
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
