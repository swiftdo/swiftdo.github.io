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
    "revision": "40b69025f57b87d7af4d127495895ade"
  },
  {
    "url": "about/app/index.html",
    "revision": "e24afa08d5ed2e7c0f25199ff423714f"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "683588203e443c6cab76357aa09a8db0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "38926d4df521be823b182af26f3c7867"
  },
  {
    "url": "about/index/index.html",
    "revision": "f31cb4ec4ae36df415f54dcb73aaa0f8"
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
    "url": "assets/js/16.85aaec18.js",
    "revision": "0d6a6d2dc5708a590dc37c113e566d81"
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
    "url": "assets/js/app.a5e653e2.js",
    "revision": "6db4ae2b27be99c1b076989aad850eb0"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "1c2db2b6280d5f3976c3a8193af1126d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c62ca0a45169a92b5173c03baf3937ae"
  },
  {
    "url": "basis/algorithms/t10-bucket-sort.html",
    "revision": "947a28c17f1edbad1e9376d9e0985d78"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7958bb192cf47eb629737757d6204c43"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "83721b7c2292aa8087645a8fd2557b54"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f88502c5c13d156eeb17d27e9bf7b4f2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f5611fcadd5e512f35cda58544cd2727"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9d9d9af3deebc718da8562e313fd5aa5"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4496fd4f9bf3e5d91e0cf43fe0b771f5"
  },
  {
    "url": "basis/algorithms/t8-basic-sort.html",
    "revision": "2b804a8987f17b35efdc1f6cdacd9198"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0da5a903c12dbab78fde60353114bd00"
  },
  {
    "url": "basis/index/index.html",
    "revision": "efaa040e869ef0828111bceb6b28b8b1"
  },
  {
    "url": "basis/os/index.html",
    "revision": "351014e0a63c7b3205985fd6ff6ef7a2"
  },
  {
    "url": "book/index.html",
    "revision": "5ad9ea9801916905cd7989b1cce0c1c1"
  },
  {
    "url": "categories/index.html",
    "revision": "c28d5432e70fb53a5df93a3d5cefcdce"
  },
  {
    "url": "figma/index.html",
    "revision": "1562fbafe4a3cd2b56d5d3946c23b056"
  },
  {
    "url": "flutter/index.html",
    "revision": "b55150c47665e55a498086eb84b03045"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8e4030d81c627e331eff29f964706b9c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3f76244134f75fd1fdf92ce15e6db98b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "de1f9a48ed5dbcd394b0af2af59786cd"
  },
  {
    "url": "index.html",
    "revision": "c18eb5dafbc8ea47aae6a80a3ea00578"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b4ceb755371d18d5ce0e2efba784267e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "2c8eb10e30c325613bb285e24514dd57"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "cf75aba397bf20a59f2907e4985bf412"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "6852ebb4c7322abf638c9e3c41d03531"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "d60c55a5154df170c6c3cd6514ad76e4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "1d474a9af35e79b52ee19e83800cd6a8"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "e69e3fcb729e70d5d43bbc88961ad327"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2b6ac2b0cfb1fe6ba936d5c0f743c5ba"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7e7e30ee4936e0f9777006ad08566296"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fd54f38cff2d110e4d9a9ca1cc6d7d62"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f130ccd3c33859ae2e8b947f540b2533"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e6f002cec596f0983eb2b178c8718aa6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "9b7468b417ac07f1c7b2fe8884627054"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8ee8a04d969424da4b63b568a3637a01"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "17c85000f39ec75e5ea0c51b40b55a67"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7223ca6e874eb0be9389a39e7f731ec8"
  },
  {
    "url": "tag/index.html",
    "revision": "3efd5087937a6d500f1c295f33f89002"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "06fc8cf9aae7227db7f0129566f930cc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "681f693ce1e92a22221a14c9433b1b9e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ee8cfb6e837f6488b3dc759a5a8819c2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6b12b62ae726f16c0dd7c44791e0cdd6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "016ebff0417a13fc13df52fff6fc3b09"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7fcc8b1a12d732c443d790ef641fa9c6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f033fd5c36fa3cc0842e011aa564127d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9a5c1fcb4abf2069df9a91247dcec711"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fe12b33c85f16bbeeed31323ef79230e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "3ea1c48beed83c453e4bb702de26d228"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "88df232d9078ff02b9f29efa20c3fe81"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "596bb76148f33a1e8c67b2929753fab7"
  },
  {
    "url": "timeline/index.html",
    "revision": "93466770ef8ca410a26f1db8468f463a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6e87261fab428054c8da145a3262c651"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1a80cb7d5996307d1743a95288e07727"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "80cc0772bb3437211414ebbb90af9e50"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "0eb816b342445787325e1fb103d16eeb"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "503d30351c3554e27e12e46a52efe4c4"
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
