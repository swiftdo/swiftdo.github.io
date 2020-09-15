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
    "revision": "9f909985d1c812f0cbb68f51fec5fb7b"
  },
  {
    "url": "about/app/index.html",
    "revision": "4a95b2360a499a77097a3a0be89f351a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0375879cbaaa052002e0391654e7ebbd"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "30a43d65f810a572d22fa066f4c5586a"
  },
  {
    "url": "about/index/index.html",
    "revision": "b17560a3f4c82827e55cc4a7bdadb09f"
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
    "url": "assets/js/36.1df174df.js",
    "revision": "1b6a22d28660673414e19f8387757965"
  },
  {
    "url": "assets/js/37.b7cf1b4a.js",
    "revision": "206b266a0f3f54f0a97c3100a5d9a6df"
  },
  {
    "url": "assets/js/38.ed91c36f.js",
    "revision": "f424ebb932e2ad1361237885343b89ff"
  },
  {
    "url": "assets/js/39.76e54961.js",
    "revision": "e92edde327fe4737930d4acb88feb7db"
  },
  {
    "url": "assets/js/4.a6b8f26f.js",
    "revision": "b7d64f5b0001e798d191460c01f78177"
  },
  {
    "url": "assets/js/40.5456a274.js",
    "revision": "30437573669e132374e9abfc1bba037f"
  },
  {
    "url": "assets/js/41.a148a176.js",
    "revision": "d42a776ec7efb24c889952dd67636289"
  },
  {
    "url": "assets/js/42.c8d607ba.js",
    "revision": "0cf217c5dd3540b58e530b4bfa8a963b"
  },
  {
    "url": "assets/js/43.1d307796.js",
    "revision": "92a2508cc98852779262de5ab41d83a9"
  },
  {
    "url": "assets/js/44.d31f2f07.js",
    "revision": "6107a8e51b0e2c1906cefc2fa8b45021"
  },
  {
    "url": "assets/js/45.dd971114.js",
    "revision": "5a8c0857805d0148a9227c5e28dd0d46"
  },
  {
    "url": "assets/js/46.8262b767.js",
    "revision": "6c110862e6996997f5ddde6d94ed76de"
  },
  {
    "url": "assets/js/47.c99106e6.js",
    "revision": "f59734bac3d150505a37e473bb9db60c"
  },
  {
    "url": "assets/js/48.19b42319.js",
    "revision": "126126b78001db90620b75d1f93c2755"
  },
  {
    "url": "assets/js/49.49598b83.js",
    "revision": "e921649c2c17cc81e44d73af45954d1f"
  },
  {
    "url": "assets/js/5.6ab1ab94.js",
    "revision": "8499eac88de4b6ee480b2b8ddac34971"
  },
  {
    "url": "assets/js/50.20838e62.js",
    "revision": "c2d26dba8098deb9515f18faec359039"
  },
  {
    "url": "assets/js/51.743fe29d.js",
    "revision": "f8c5a8a4e57735a14aea755e0977570f"
  },
  {
    "url": "assets/js/52.524d3765.js",
    "revision": "b2f0b082169189b8a9d575cf736d39ea"
  },
  {
    "url": "assets/js/53.f6e4df6a.js",
    "revision": "a3297c779f34018003e17d485bba1a2d"
  },
  {
    "url": "assets/js/54.66c06449.js",
    "revision": "86fe8c0a49be1dacff4f49b9316f2466"
  },
  {
    "url": "assets/js/55.df5a7435.js",
    "revision": "0e9f39a60311df2a1d5249cad469b6b2"
  },
  {
    "url": "assets/js/56.8c60e7fe.js",
    "revision": "5f3c9a63297686234a73fd245eacd74f"
  },
  {
    "url": "assets/js/57.57344f6b.js",
    "revision": "f54fc3b0ab960563612edfea933e4a99"
  },
  {
    "url": "assets/js/58.d816e1d9.js",
    "revision": "11f9f6e37a52290d2a5e397f7690f135"
  },
  {
    "url": "assets/js/59.a0b14117.js",
    "revision": "08aa71831b8ae2b1d21a6f591a09bbb3"
  },
  {
    "url": "assets/js/6.23a75e3b.js",
    "revision": "b62249d8ae294e9da42c4842ed8b6933"
  },
  {
    "url": "assets/js/60.cf30c644.js",
    "revision": "0a432df00c7c3c62dc451a614458cd0a"
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
    "url": "assets/js/9.f48a216c.js",
    "revision": "d44af85fe50a5abefc665a97e75dcfbd"
  },
  {
    "url": "assets/js/app.56222390.js",
    "revision": "4b54b7f12b7a7f4f760529a5fb8e6376"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "17176b6472fe8f2f4f292f30e053219d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a65467547bb1c28b9b545796c1dab27c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fe91966c4d6836256ca62cde486139c1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ee3e714d86208e808405c7cb45f89c8e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5524000155a67e964fdef95fa6cb6f6c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ab55b043bb131c741c5aa71d9eaccc8d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "cd9db30c34f2b7cdc263eb82b7ea3ee0"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "594edd753ce377f2601f7d66e9d6c6b1"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c2d2ee2a319580897f03bbe54c83d5c8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "fdd38c14100830a9ac13d821978d1cab"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ede3991a7845453bde99be1159f55e57"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a65b1a6151090f4d949438c0ec5c616d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "abcb555d29ad6bd582cafa3716ff4ff6"
  },
  {
    "url": "book/index.html",
    "revision": "0ff936eb89aae0969d7d50e00a70df18"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7a17738e7a496b6676a3eb6330e10e61"
  },
  {
    "url": "categories/index.html",
    "revision": "a943447a4a580a1c88e28492b77e2b98"
  },
  {
    "url": "figma/index.html",
    "revision": "4a71e39235318d956600aca15465caa8"
  },
  {
    "url": "flutter/index.html",
    "revision": "914d8bce2b75c68fa05dcf22766d2ab3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "545d6632660a24efb358150d03eec5d3"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1b41ecd8b359b36c9d294b8dd5552e0a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "cd7f62fde996a5344d5fe8ce2a7b4d2b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c3e1a91395938617816c00d389f8b6bf"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "af6dab85ce1ac1b5ceb1571c18ee299b"
  },
  {
    "url": "index.html",
    "revision": "eaa946651551cbba40350316d183743e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6e34124662e77a749d604ba9b505ed24"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "281b79707cd33100653514baef66f0da"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "17989cfb4dee51119e36593aea91356d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "0a11f8261697305b8b163a8a7bf91a94"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "24ad94d6c94db4b9eed577b51d02dcf0"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "f9bf31ab30eb6277a159b51c497211bd"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "ecee1a62aec129e0b42572420a9d6603"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b132725d04ab475087bddbc105c9f263"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c7bbc407aaa7d27ef3ed5b1a8068bb0b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6d3bcc71e38f23a1e0b7fdde4d459142"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "2802e3a8829c61615a8ceada6aae3b58"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9041f9a298e3988fc4ddada33b41c837"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "73abe5a2533bd5a8dd59d0fac4186c66"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0415bcc480f949e3f42c340486c411f8"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fbaa356d6db25359e189401eeec5ae19"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e732c67631ec88c89e24adfd726604d4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "30c2363bcea8334b70464da94e3e5a2b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "176076fce7a28569357aeb46e08628a0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6be867700758c4f01c641b233729f627"
  },
  {
    "url": "tag/index.html",
    "revision": "020906e7a5988560ce1e31b2589475c6"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ce353a422a2ace1f8e314837a6f27634"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "17d3db4ceba07a078e2c13e2ce5d5682"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "24a8049482722e2a3de97ccc7134d34d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "3138d2fcfbff89a2e91aa19454d1c59d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0d2c159894b2cd2ae1136ccc4d9d2a9b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9b317a30c60c4cfbbf677f0e236caeee"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7011c5ba4c5e8dd6f8f9d3f35bd5f8ae"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "43135997ff989246742799de622919c0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cec6eec3318baf77c482347db38b33f5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0be31dc55406f401b61ff5a4c7fbc288"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7073232187cbe039e442165b166b4fe6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "96fda39c4c5b5cf52c8fa2a10c2fd9e9"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "228d8ff0660c80a948bb4367b513256a"
  },
  {
    "url": "timeline/index.html",
    "revision": "b65f5a7d8a4b5acce47d33b484189c85"
  },
  {
    "url": "tools/git/index.html",
    "revision": "eb1cb3a7ca3404640e7632725350732d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "daa7ace225f8f1f8d154382f9fa9d9e7"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6bd408ca3693f5ac412b380201fe1585"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9a23ca2d078f48f8e6f20afa119992ec"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c54f3949252517b30abcfdba80a59ab0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4dddf905772047cb3ca074a870a55205"
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
