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
    "revision": "602f9a7e176205e05d6d80b29611b475"
  },
  {
    "url": "about/app/index.html",
    "revision": "56b6031e94d64df0c45c03009299f64d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "04f2913515e697f0019dfb17c8280ab2"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5b07bca19065d59429f08164bdd7296c"
  },
  {
    "url": "about/index/index.html",
    "revision": "37030821f8cf3afd40fb53f14e699143"
  },
  {
    "url": "assets/css/0.styles.a3a52609.css",
    "revision": "8d353d26cdda7095a8f4bed77dc7ac82"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.88afa5ab.js",
    "revision": "d25c35a529e824a10392e774e3912169"
  },
  {
    "url": "assets/js/10.11797137.js",
    "revision": "bd7fc62b5926950d899372ea2c8843ad"
  },
  {
    "url": "assets/js/11.32f28b2f.js",
    "revision": "cada028dddf3f9175af6ef858c0553e8"
  },
  {
    "url": "assets/js/12.7683926b.js",
    "revision": "7c80409a8ce42968bdf00553b892205a"
  },
  {
    "url": "assets/js/13.33557c32.js",
    "revision": "74b67427937a197fcc2027b38489352a"
  },
  {
    "url": "assets/js/14.5f5de77b.js",
    "revision": "b26355e42018d76202456720f647ff86"
  },
  {
    "url": "assets/js/15.e4439e6d.js",
    "revision": "7f1f54c81a58773e007d3f0770adc322"
  },
  {
    "url": "assets/js/16.79038250.js",
    "revision": "609dbf8c75747f59de3640cd378126ef"
  },
  {
    "url": "assets/js/17.b7c59add.js",
    "revision": "53103a5cd6feeebde25d6ee0f28f9d96"
  },
  {
    "url": "assets/js/18.307d222f.js",
    "revision": "1ddbcec0d1342d66222877c287ecc9d2"
  },
  {
    "url": "assets/js/19.2f2314ed.js",
    "revision": "84805c490a871056b507439977552644"
  },
  {
    "url": "assets/js/20.3d3911f5.js",
    "revision": "3e42ba62ddbbc101a9763a5dd4825107"
  },
  {
    "url": "assets/js/21.5f087bcf.js",
    "revision": "a9a775f071a685f7b716c44593f45173"
  },
  {
    "url": "assets/js/22.37df95b0.js",
    "revision": "3a2506719d04228f15b9d7c7f1e3fc38"
  },
  {
    "url": "assets/js/23.15ae32d6.js",
    "revision": "0972cd4f5054c07c5676023f02c4b218"
  },
  {
    "url": "assets/js/24.66dafdc9.js",
    "revision": "18e92fa984917daf10d78d63b876643b"
  },
  {
    "url": "assets/js/25.013277dc.js",
    "revision": "9bfcbe3ef6d452824008d19e8257a55b"
  },
  {
    "url": "assets/js/26.6cf86c14.js",
    "revision": "e9214ab0d2f31a4e6aae3949d5ad8fdf"
  },
  {
    "url": "assets/js/27.07cdb1a7.js",
    "revision": "66748e0b21d8d98d083c15e468fd6b1e"
  },
  {
    "url": "assets/js/28.308ec362.js",
    "revision": "b0187e99132c72a5afc05ca30674d438"
  },
  {
    "url": "assets/js/29.e5e2a1f1.js",
    "revision": "5758dbf5408f8501b20239c823a3e1bd"
  },
  {
    "url": "assets/js/3.861d2001.js",
    "revision": "39e05bf0ca1c1528793236dc7e9ecfde"
  },
  {
    "url": "assets/js/30.a178c01a.js",
    "revision": "0ff4bfb557fc41747370c963e39b6710"
  },
  {
    "url": "assets/js/31.e1a7e79a.js",
    "revision": "55cac94f9d3eb17b416a6cb0d10ec0cf"
  },
  {
    "url": "assets/js/32.349cd5fe.js",
    "revision": "8706d28940968fd627d9f6f5b1953e90"
  },
  {
    "url": "assets/js/33.a08361c1.js",
    "revision": "3cf67c8c3ea319449e33163af927b44e"
  },
  {
    "url": "assets/js/34.9384357e.js",
    "revision": "840150eb2281c1bd1b2993eb22383af1"
  },
  {
    "url": "assets/js/35.5c83cca7.js",
    "revision": "e2a12a4233e91e998defb81d3b64593b"
  },
  {
    "url": "assets/js/36.a9a51a7a.js",
    "revision": "1665234a71b9f53ce5e0923f2a9303a3"
  },
  {
    "url": "assets/js/37.c355030e.js",
    "revision": "d826f1981d098628a326575d2081d114"
  },
  {
    "url": "assets/js/38.49288c19.js",
    "revision": "85f0e17a8bc7e8271638823499769544"
  },
  {
    "url": "assets/js/39.492da56a.js",
    "revision": "526cc2119a9ec1dddc7ad1f6abee6d2b"
  },
  {
    "url": "assets/js/4.b87db551.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.aa9a90fa.js",
    "revision": "0b54efaef0ac47fd3c31c44a24db0544"
  },
  {
    "url": "assets/js/41.dfd387b6.js",
    "revision": "999244921ea51634e39d362abdc9809c"
  },
  {
    "url": "assets/js/42.68df66d2.js",
    "revision": "dd30b8a8fb58eed422d85e2fc28f5ed3"
  },
  {
    "url": "assets/js/43.13095595.js",
    "revision": "fe69e3097cd03b40c326e381eac0f9c4"
  },
  {
    "url": "assets/js/44.fe4e3dcc.js",
    "revision": "dc2f94db72750dc9e9e33342cdd3d248"
  },
  {
    "url": "assets/js/45.5d7b7936.js",
    "revision": "42f2f019ab9105c94d40b99614cb0c11"
  },
  {
    "url": "assets/js/46.bf9a66a5.js",
    "revision": "5991011ba50cc34b488ddd4803f35400"
  },
  {
    "url": "assets/js/47.ab382340.js",
    "revision": "ccd86b9e9dd264d6bdc7c85e3b2e8b6c"
  },
  {
    "url": "assets/js/48.ab70d9f1.js",
    "revision": "5c85a3f92f2304c39f776b26f2aa328e"
  },
  {
    "url": "assets/js/49.98806867.js",
    "revision": "e9f6de7ac131d727c7a84a284d8eb101"
  },
  {
    "url": "assets/js/5.46ee72ef.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.8321c047.js",
    "revision": "2bf54e0cf2630903a9f35e36173a70c6"
  },
  {
    "url": "assets/js/51.decfc491.js",
    "revision": "30837b629ed4f536c2fc66dbdcbd66b4"
  },
  {
    "url": "assets/js/52.a1d00e8b.js",
    "revision": "1e15bb155afa6203af5c25783f51dd27"
  },
  {
    "url": "assets/js/53.8f919855.js",
    "revision": "81d6c1845d7b92398dcaa2e9751d9470"
  },
  {
    "url": "assets/js/54.c855217d.js",
    "revision": "bb02767d780f11695d52651569649c44"
  },
  {
    "url": "assets/js/55.49908c55.js",
    "revision": "088833905810885b0b6933522f90b691"
  },
  {
    "url": "assets/js/56.492e477a.js",
    "revision": "26b0b7f34a1823149f84e4474e4fc9aa"
  },
  {
    "url": "assets/js/57.da46cf28.js",
    "revision": "c3ad38634f7618effa93f1ab2a8b859f"
  },
  {
    "url": "assets/js/58.ec799b33.js",
    "revision": "a9b1e74c68280ec05a2f6e9b25d0cff7"
  },
  {
    "url": "assets/js/59.4206231d.js",
    "revision": "01050b156ae65ba9beeb74bfd825bbaf"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.35600db5.js",
    "revision": "7520983da8a85b801a23a10215bcf78f"
  },
  {
    "url": "assets/js/61.c8df4219.js",
    "revision": "6e691ea66a9da7ceab7accdf558528a3"
  },
  {
    "url": "assets/js/62.f23bb06e.js",
    "revision": "bc34189fe997b80dcc6b042c6fc830fe"
  },
  {
    "url": "assets/js/63.184773ca.js",
    "revision": "cd74c5d21066683d9853f3d2afd706c9"
  },
  {
    "url": "assets/js/64.b949c3dd.js",
    "revision": "1d3845a0972631a3b54eb2336d673661"
  },
  {
    "url": "assets/js/65.71dbf633.js",
    "revision": "8124a694c470966525cf9e9695c70214"
  },
  {
    "url": "assets/js/66.baf262b9.js",
    "revision": "5616d94f77159e8c9c152414c07f1718"
  },
  {
    "url": "assets/js/67.600a6501.js",
    "revision": "bb4b3ea55b9e7bb8ab4f77731a1f6924"
  },
  {
    "url": "assets/js/68.96635f02.js",
    "revision": "6409ffe6128335839e2ec3d9845b6559"
  },
  {
    "url": "assets/js/7.f07e746e.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/8.9749914f.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.09b11cdf.js",
    "revision": "f2f7957816a7aa87820cd8bff3bc3f6c"
  },
  {
    "url": "assets/js/app.59bf6248.js",
    "revision": "03d4a3670a9896bfb68ee3a84bade97f"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "7e7457d1bdb4d813e5fbfdd4a44819cc"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f54461bb91ed9e3d4a7708406294a103"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "72969be29bec414a46d7f7113eba0a7f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "68af88ed19ed19a70222025713633ea3"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "1b0738e2d40a609ec05c16e175d37244"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e780c7681881a925becd89f5f12598b1"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "037e4a38423b51e54905a58223e535a7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c8d9c053b6b8a28f357500d49d7994e5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "fa48e4ecf74183c4f4327c0ef51cf1b5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "1b6696dbebfe7da8ef2669e300b0ed7b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ac1deae6e044f3193a333ba42c828c04"
  },
  {
    "url": "basis/design/index.html",
    "revision": "fd6154cad6b7cac4abaedb8d50202603"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "54441c5c2553cb40520ec64723c13eed"
  },
  {
    "url": "basis/index/index.html",
    "revision": "db196e560cb68eaa2c886e6f091a4579"
  },
  {
    "url": "basis/os/index.html",
    "revision": "16f5fa0c495da33be7e4aa3ee6a5a037"
  },
  {
    "url": "book/index.html",
    "revision": "fe27a2c24b08bec7d312f993b1eeefe2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "aee4be95767a3c3699424246e269efea"
  },
  {
    "url": "categories/index.html",
    "revision": "c85c6fbc4ef28e3bb3bcce22b19aae0c"
  },
  {
    "url": "figma/index.html",
    "revision": "9539e5d556a7ca0dddab6031e23e0c36"
  },
  {
    "url": "flutter/index.html",
    "revision": "64a1004789e137dff8728323b163333e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8f3f3bfffa674af61fd4b5d1eae282b7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ea9bc58c205905aa2d0010b4e87b6666"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "fefa329522cb94fc6c2c8c74e8935385"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4438bc47fa96d3a018b91bd585b8df66"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "537160b556e20fe87e63ae5ef230a27a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "3d9e0191193b9271ffa9d65d2baf5a0c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b5f606b7313c9937d64b60c2cecee11b"
  },
  {
    "url": "index.html",
    "revision": "923c8cb26bbf83e2982a9b98404f7fea"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "70d09d52f93aa5561f2234702ae8dbcc"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f1be155f29f370159dfcf0c3e2fc63be"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f8eb73e3ad475c36856676d8edf63fa9"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "94b2f29b64a79544314a19432a799391"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "8aaae2b083fab9d11aa0947c9ee1facc"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "132cf220f49e6044219e70ab76c0ee78"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "8642c0d1d5923bcc014639dcb3bdbafb"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "17d13d312e32e3647c76b26cadfeaf4c"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "4b6cb8d464ef53161fa28244e49222c7"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "f2106f277312d6ed39ff119f5bd3b0bd"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "67caee9ad35463f0750027da7fdd700a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a4f38fac925c1d94ffc6e39a05eaccec"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6f256a73caf19d1c2b3d9ba41264c82c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "65f69dcdab62a40a9b166462069d4d5c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c22e4d262208fc93e00b87d20da9657d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "58ca085c93c4633d030ef9738f60960f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0fdb8ce1c89bbe50eb564996a512716f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b7f32ee840f55a84923704e32ed45272"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2dae9600e257d6b9fd37481ce3b835c2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "70ea695628863417150f73b1087f9359"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6e616ee770ca34970890886c9f0d22e3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e3a4161755c3812d6e60aa5ad97b9727"
  },
  {
    "url": "tag/index.html",
    "revision": "73aa2e9b2c0cafc60db1d0cbf0b9c542"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "44230382780345980bc005e402c606f2"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c1e79967cc308d9070a7f1773bc8b3f9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f0512450a1fdd7866ea4bf5e6b9f8a52"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "15869eac15856c1e0247d802aadfd2bc"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "99b793b7712e567c8042ae5eeaf76ee9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "55ee5653318beb01fbbbe680c6119982"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "498ab4627cf704776b765d2643a57ebf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "68d32e60fbc6d4c7d764a0c889f98193"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3afce328e0e7fa3b7a347fee0dc5cb3d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "6c1224f3420e7f7478a17a15e7f94029"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5c8de871ccee1a1bdf6360cd9d168be4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b69a8909cc7ebf38ffb21ec5f9c0b9b3"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "513afadd07729314f0876a5bda11dd1b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f83542daf0a7c80abdc48ed66001c482"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e1c15667d8d31f14aa1222c3b907d340"
  },
  {
    "url": "timeline/index.html",
    "revision": "d77d26e7eb431230ea8c173cdc8fab42"
  },
  {
    "url": "tools/git/index.html",
    "revision": "efcea21a63bc645b281bc75fe0e15f9e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "0357745fee642dcd4444363544f91647"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "376ca7947a290a13a9eca4053138adeb"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b2678c22d12aa59db7d11aa340361cdd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4eb7526759cb367b400fb954202813e4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d93aacc73cbdfe61f679b69820193bb0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "cb1decc673c355a48b81b68951776a6b"
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
