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
    "revision": "552fa45ddb44309849cf0a29072e6858"
  },
  {
    "url": "about/app/index.html",
    "revision": "5aa1aee8e7289ed96c679564697ea18a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "19954b5eba81e2b144e43fb485760965"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9e26b5461499a960789507eb0c33f757"
  },
  {
    "url": "about/index/index.html",
    "revision": "5b97f78cbc5423be1bd85494220924f3"
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
    "url": "assets/js/16.ea56bee5.js",
    "revision": "1ba3d1650908aa6562ceba0650937a86"
  },
  {
    "url": "assets/js/17.85a9c312.js",
    "revision": "3d0545d2baf56d643d5f86f7d1179909"
  },
  {
    "url": "assets/js/18.5dfcafab.js",
    "revision": "cb2cec8ff21e545101ce6659b0224adf"
  },
  {
    "url": "assets/js/19.4ab3834a.js",
    "revision": "f7e759dfd98ae862cb54af258b4fa790"
  },
  {
    "url": "assets/js/20.ec71b6de.js",
    "revision": "2142e61ce3a4678c512495ba9f0753b8"
  },
  {
    "url": "assets/js/21.8165eb23.js",
    "revision": "75b3701ecb949f4be22c9e9c1b0a7c3e"
  },
  {
    "url": "assets/js/22.de43d5c6.js",
    "revision": "29b04a898323e80ed93bd51221990182"
  },
  {
    "url": "assets/js/23.99f46275.js",
    "revision": "949947cac317a2d1026336e5aaca4b72"
  },
  {
    "url": "assets/js/24.f926d9bd.js",
    "revision": "1802d7193279716f2a2af3412d5ee18d"
  },
  {
    "url": "assets/js/25.082c9b55.js",
    "revision": "c5d5e1d17a2503c94947dca73a18b51b"
  },
  {
    "url": "assets/js/26.900ef4ed.js",
    "revision": "119ec9feddf4552c733506a405442913"
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
    "url": "assets/js/30.bb3cbf38.js",
    "revision": "72b1f57f5b1e8bf0121ab36993d60faa"
  },
  {
    "url": "assets/js/31.2ab43dfc.js",
    "revision": "f09bfd0418a8078c424fb87b23e0b7a2"
  },
  {
    "url": "assets/js/32.88028983.js",
    "revision": "ac3b8b514fb2b03def3f5894aaac9429"
  },
  {
    "url": "assets/js/33.3945dcaa.js",
    "revision": "f2a7c9e4cf54387e4b05d435aebceab6"
  },
  {
    "url": "assets/js/34.218e91e6.js",
    "revision": "9948dc0c3d0ebcccf5ed2443327b3de0"
  },
  {
    "url": "assets/js/35.7b6668d2.js",
    "revision": "ed39c71c9eb61e98c4d5d0757d8146a5"
  },
  {
    "url": "assets/js/36.5ae45da2.js",
    "revision": "a115782842cdb44777f2165dc3f96094"
  },
  {
    "url": "assets/js/37.fd4f82f7.js",
    "revision": "8555a22c69a6ee67f023ded24c15ee78"
  },
  {
    "url": "assets/js/38.999eb768.js",
    "revision": "5af1d2ac4b0af12d0cfb9a489ae12331"
  },
  {
    "url": "assets/js/39.0e561807.js",
    "revision": "6ed4af744f7a46984882385373e5d20c"
  },
  {
    "url": "assets/js/4.a114e465.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.70dd9a44.js",
    "revision": "11422d3b5132a7768126cb8eaefa4d84"
  },
  {
    "url": "assets/js/41.c9bc191a.js",
    "revision": "3803752cb0c0818db1f73097488d5c48"
  },
  {
    "url": "assets/js/42.43fc87fc.js",
    "revision": "67a1e2bb7c45fff3861cadd3281b017a"
  },
  {
    "url": "assets/js/43.c8ac879d.js",
    "revision": "47e0c923f14ba0fa50fe0366be8e319b"
  },
  {
    "url": "assets/js/44.e3fcd5cc.js",
    "revision": "9e33b7732a606400f7523c185fd438aa"
  },
  {
    "url": "assets/js/45.6a4cfcc6.js",
    "revision": "a624760dd6a4a62423c136184a82ab8e"
  },
  {
    "url": "assets/js/46.e7e1170b.js",
    "revision": "830d1e7f770666dab68bee256952e8e4"
  },
  {
    "url": "assets/js/47.6f357f3d.js",
    "revision": "992aced5e297d09d01a2733ec72ea264"
  },
  {
    "url": "assets/js/48.0c354d1d.js",
    "revision": "80b49064b0d3bd48689a68f49fc1ed80"
  },
  {
    "url": "assets/js/49.efb77d8b.js",
    "revision": "4323c9afbe54d36e31ce05a16c19aa8a"
  },
  {
    "url": "assets/js/5.8672a4da.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.57d590ac.js",
    "revision": "be4929e567114813415ea4b625d30833"
  },
  {
    "url": "assets/js/51.595ad1a0.js",
    "revision": "31180253f26597a9c79945a0a6f83c3c"
  },
  {
    "url": "assets/js/52.c082dc58.js",
    "revision": "73608c79424eb9a55884b173d8d61794"
  },
  {
    "url": "assets/js/53.0f9aa1e8.js",
    "revision": "c19994c6b98fe9a9fe74b9e2f181b1dd"
  },
  {
    "url": "assets/js/54.f89925dd.js",
    "revision": "23a6b5c1094cd42a505ec91d909d76ae"
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
    "url": "assets/js/9.13a92106.js",
    "revision": "db59c95282797a58613971b24a085158"
  },
  {
    "url": "assets/js/app.ab2d1014.js",
    "revision": "cac23421625285124b6242f2128d2651"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c5268de6a7fada9cebcf288d29622796"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "15ed9e64cc8054c007d108bc388bcde5"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "94a099cf7c1b55895e988659b47a0504"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "36a2e68c61f6cd56aa02cb16127e5210"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "98913266e01268eb99c4f0b0aef29d9a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5a617cf3813874ecb3ce50f57e49562f"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0cec76679e79d6381897062a80a36dd4"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "2d580429e0c474b7b3013238b11aaf8c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0fafc9c4834d0d9c361d755e89171303"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "19fdf92b946d94e5aaeff71d195b558f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a65da38bd5fbefc89afee05e6deb31c2"
  },
  {
    "url": "basis/index/index.html",
    "revision": "4f4723fa147a595b7a379d00e42c564d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e289edf8a84f158ca519043f51683479"
  },
  {
    "url": "book/index.html",
    "revision": "b0a0d9ce57f8388c1003618ef22d43af"
  },
  {
    "url": "categories/index.html",
    "revision": "31d394e0ef6cc257da599ae01a968011"
  },
  {
    "url": "figma/index.html",
    "revision": "2bf9b27cbc8867e7bdd717132692ca4b"
  },
  {
    "url": "flutter/index.html",
    "revision": "d2ef2d9263a104aa727d21afdf785614"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d28c412539d772f8a2f421343261e8f2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "32902e8f17d13d650ead5c2a68072660"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a7a308bec0468a70a9511072b2a050ef"
  },
  {
    "url": "index.html",
    "revision": "4ec87076c1d8d77ac9ed7f37600b3817"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3d37f6cea9f1331a55d50abd11d4f6ce"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "e11f75c8c9b31f185732ade6c60d0e33"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "355d39de547d177be3004d0559210227"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "4e26996367045addd82480a64b26c540"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "acb68f6344a56f36d64d3a21286774f7"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "8be26128c3479948f9cc895228a23242"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9dcf9845c43b67631f85a07f071a6b5b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a3077d81edbe0871961c19040af62d10"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1d69f19581d00696c7af21ef27c80b88"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e7496f01918cf6802bf53078b6203bd4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "865134463df9685168ebbf0cc22986b4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "350d60b296d2ddea1f95a538e6338c51"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "9e5dd4ef0ec33a70b31ef88ad615b6d4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9972c838524db9b92ad1262f1a2816af"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4a43dc8bd883fe8b458b914e751a96c1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c113e2367b7701579cce20890d5ed3c7"
  },
  {
    "url": "tag/index.html",
    "revision": "327636767445f805ea5f350d629e88e3"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "2d52f14ea2c1a2046b1cb7cf76e96b96"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "210c704e119542a2c324c4a403923933"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4668fb18df85daa5019e2f2228287b6a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f68b832753abcd0c396c6eab7a2b95f3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f73500f027611172624f0574d7abf124"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f68617df475acc8a84a02e3cb00d038c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b1817c8e39ccde44f4195e5bbbfd9448"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8ea161acaab9135cd3659b47a7022601"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ebef2606ccde8ad065df6f58d2c866f0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d71a65fabdc4aed2602cf6b0944e2b6a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "99b90775840aa66ba7a6be8993685a28"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "66f25b58523294ccdc22485931db8fe8"
  },
  {
    "url": "timeline/index.html",
    "revision": "34d32d16e777d9d003eaf05d6f6f8385"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cb0f8872f860fc00b858de2929e2c78b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "264a94963a3483beaab208ff29764ac9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "858f6b81bec20da10ca73589730499e4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "20410c0687f619696028071c9ac7938e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "b9b1029aeec55062f3f125891e792069"
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
