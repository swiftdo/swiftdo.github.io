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
    "revision": "63bbad9281b94a230efbe5952eb900bd"
  },
  {
    "url": "about/app/index.html",
    "revision": "97966ef69a7b71a89a94c69b3368bfd5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "66f86f08bf4a647466e64ecf567aff80"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7c705822f71519cd79d8ed4f1bbbfddf"
  },
  {
    "url": "about/index/index.html",
    "revision": "cf3e5d35d049bd9b34a652fa271ac391"
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
    "url": "assets/js/43.9a3ab465.js",
    "revision": "c37c9795470075180a06cf99eb590746"
  },
  {
    "url": "assets/js/44.39811995.js",
    "revision": "91c58b4aab25e9c4be839b8a0e0ae9db"
  },
  {
    "url": "assets/js/45.60a62396.js",
    "revision": "dc65a0a289a178eee3f04dfa41c8be7d"
  },
  {
    "url": "assets/js/46.7db70adf.js",
    "revision": "a6f0e379753b186569a7eb7e4cb183dd"
  },
  {
    "url": "assets/js/47.802713a8.js",
    "revision": "5cf1caed8b40874f6d74f7777cc15fc1"
  },
  {
    "url": "assets/js/48.567504a5.js",
    "revision": "cc19354a8bfea554d0a9f6b838186cc4"
  },
  {
    "url": "assets/js/49.043836cb.js",
    "revision": "95df315ca205fe07470007d11353e2c0"
  },
  {
    "url": "assets/js/5.6ab1ab94.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.9450ed61.js",
    "revision": "2208e050eb6f9e39f46a56f4bdb46c6f"
  },
  {
    "url": "assets/js/51.7eeb1ce8.js",
    "revision": "cc1971201d479abdbc99a097e9810eeb"
  },
  {
    "url": "assets/js/52.ad178859.js",
    "revision": "0baf754f88d0d3dfccf16529ee6f771a"
  },
  {
    "url": "assets/js/53.e73262af.js",
    "revision": "bedf8e71b7a53e370fac2c9785712865"
  },
  {
    "url": "assets/js/54.d62458bb.js",
    "revision": "97b755c849a0c087ec0df4edf88afa0d"
  },
  {
    "url": "assets/js/55.925ebc74.js",
    "revision": "38e6632bd2e69d0bd66bd385b26f046c"
  },
  {
    "url": "assets/js/56.d0079009.js",
    "revision": "495518680c9d350e4ea183bf7de51f36"
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
    "url": "assets/js/9.10d4e686.js",
    "revision": "19b188f4c679688bf0eb19ef66399e1f"
  },
  {
    "url": "assets/js/app.d368b8ac.js",
    "revision": "88c89f6ee8db63890d7b1fba1d8e488b"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "19acd182aadc33a99ef13bd3a7564946"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "90df0ca53be7071f463b150a9ac71b9c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "406edcde8a7a7073ad8c6b756dca33d3"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "20e682cb010eb6021992679eb11af989"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a76ba540fd99518e7a62ac2771e3ae57"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e4017f0733a31396a55abce34e570b08"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1ffdf614ed80147508d86e6678983b0c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "55beea768aabe902776ac87d4b13934a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b01d54ebf688979b69d43b3f2d448f3a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "1cad330dbf5731cc785194f115054cb9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4ba2a448c2b0a70f17289b01e56367b1"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6d089ca680ae63da5c074a0320da70d6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8d40c71bb0bf45000db1d1660fd53490"
  },
  {
    "url": "book/index.html",
    "revision": "e59f1bec44aa92d2681fafb22abdb1e3"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "46de6fe1fb05b487dfee8d8b537a6511"
  },
  {
    "url": "categories/index.html",
    "revision": "05c515f142d0869e2106e263b4c1cfed"
  },
  {
    "url": "figma/index.html",
    "revision": "f5fe86815cb5365dd8e31f6b2ecb2800"
  },
  {
    "url": "flutter/index.html",
    "revision": "48b128820f285429fd0039d0265676dc"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4be4917009dedc22bffe1da26ee05848"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9d0bc3959ba1882f6b2e46a0be56d17b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e924c2124d6821f4e9ccaff297ab3ba5"
  },
  {
    "url": "index.html",
    "revision": "927d1db83d794f238bf9761cca07f529"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "20f5ac21ff06aa39866f523eda4c15ee"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "bcf00d2ca13e0a95443da1924759a238"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "765798fadd4a84ecac82b37e5adc2949"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "79140b6e4fd57404f961960295196220"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "142921cb66ba0408fdff0c975747121f"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6dfa9d30d695da8aa2dca6a81b973180"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "47aef99f09304b64d3df350aebf371b6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f4791259560518b43f83d3abe57a5d83"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5c392d060b015c3ec471ad2e1529fb43"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c5a94d9cd6d0464d8e18ac84069b8e2c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d4fa9fd2b9ba6e85c295f0fb7e25b7b2"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "617dc8a91365cd5c5db2a0c08d730ae3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "20ee4f4ac56ff2badb95546d423ba8b8"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5f1d0b561e352d90c2ae65afda77cdd4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d9a06258261daa3a44ce61044d044671"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ac24f4aa009b044ba627f7fd0cf57ab2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b7373bd029c928b94a39552bca05e88a"
  },
  {
    "url": "tag/index.html",
    "revision": "40dda8f8932f5ea025171e1b21697951"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "533d08820c6ac46091c7714302f1e68c"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fa7eb93bb598eb095f972b9bf78f8e37"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "46bb994751e7b2359053f3c11f863798"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3c817ebaff69be859bb24dea2d219d45"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d4fbfe883339feed7dd98a5f6466f565"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "408292be44529442bebee89e736819bf"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "fb5b6b0f9efecadd1e26cfe0f3627844"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b08a12db5c3713277698ec247b03d057"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "232019f2d967ef485ee278711a8225e4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "624deb0cbb4caffdde267a411f6a63df"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ed5fb381949f47d36f14e70409f03745"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f092e25261df1c862f1a97bc1a528957"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a5d205f747b6e0a27d67f95a02668ae"
  },
  {
    "url": "tools/git/index.html",
    "revision": "01353f03d765dd3564230620234c4727"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6961079bb75913a4b1d40e42eb57eb72"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a06d3ac4288ef2e75ea6246dce79df95"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c5d426c6a14f986cd1cb64cb512f656c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5cc61a06d5552e03c34ae5c6a3cf9a95"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ef2fdec1c521094dc2bcb30d1b927404"
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
