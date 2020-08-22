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
    "revision": "c20d796662afc0e6d841111225f7cb64"
  },
  {
    "url": "about/app/index.html",
    "revision": "86049265b9a8395f589c374be96306c0"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7236bf529e1d80da43a12d8ce82d4e04"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5d8c6fff90f7990edf9fc58cff68a015"
  },
  {
    "url": "about/index/index.html",
    "revision": "fe00976cc572df9ec5c0c7110fe8735b"
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
    "url": "assets/js/29.77faa895.js",
    "revision": "90b82cc5cdb87523f3f7280560a217f7"
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
    "url": "assets/js/app.50ad2ffb.js",
    "revision": "6da90793fc6e2345ff9f5a29a29b4563"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "df5d08de2420b49964bf52df55ef7543"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3e56494f2c5a73a2262d004f8e9219a4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "3712e4c06a21b2c879ff8905287c271a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5cd080aa057339f6dcba414d0cf9c0e8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b97779fdd353ce7f64703eaa17a6c551"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "62e9691cc66fe314b245b779d090cb8d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "81d8a5c54e7d15b0048f4f1be43cbfbf"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "8b80f29ac738d088c093c4ae8c71edcf"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "177f6fda9a5d7ce9365498972623779b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4369d7971a7bfdb23f4b943c67425224"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a8a031aa0748ad6378873f96fde51a6c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9a90b9d534cbc9cb2ea2f607d4604477"
  },
  {
    "url": "basis/os/index.html",
    "revision": "9fb43c98dd2986aaac34a1813abb40c7"
  },
  {
    "url": "book/index.html",
    "revision": "6a6e0b0734bc50d3758a5806d09276a5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "443bbcedc3129ffeebf603e3baacc654"
  },
  {
    "url": "categories/index.html",
    "revision": "7f23879bd0d7509efb6bbf1e915d0c98"
  },
  {
    "url": "figma/index.html",
    "revision": "68f7ee2e0d5edb3d9bab536662bf5a6f"
  },
  {
    "url": "flutter/index.html",
    "revision": "bd19572a8bfc91208b71a61b3754fd7b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "094185cb72957fce2fe0ebf18693410d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ac79d480087f4cb0c41844c725911e0c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f5f847b009d111149cc08b8521fdcda0"
  },
  {
    "url": "index.html",
    "revision": "5e08ada4ba0d65faf41f4fad1e563321"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "dab1ee0b49ebdac1d2e5aef0f700199b"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "56f04dda46e2762aa41533550b400982"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4fbd1ab8a788a36a129d7bd7d3ca91d8"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "626c136382f5954be51b79fef0a0873f"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "5410d1f913e96e5f6af875577c6d7144"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5a4b89dfd1a37d18ce41dacbb6a5b9de"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "0a0e6f0980433656cce72dd18b8acfb5"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "78de90b8a353d3bd4b6d93d4d4853eb5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ee96239afbd133bf302fe8da1aad2a02"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "09399d39b2e34ee69a4d6761e82e0bba"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1c903e7436c1328b430a2d169265fbb7"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "20f1629ebd159d5268c4b5fb374daf24"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a93f8ccd9bf76d3b935f570c37431b60"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "34dd32400b18ae1a2c3c5e9b6a8a9ae9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f5e0b90aad6f1bd66afb69c7a2700608"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4bbb4a62cc1dd625029bdc952b7a0614"
  },
  {
    "url": "tag/index.html",
    "revision": "b322f774778c150465aaef60affc0148"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "dbd1e355460459aad4e7756f5c5277c7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c56432ea4a913d68055dbaf926afb0c5"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f4f3df87c9fe37085433cc7fef7c0d69"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "7c0a7fe2c5284635ee32a7f7e04bd03d"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b75ba29217a5f7063711a98a68aceab0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b46e2090e61935def67d9773130fa3ef"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d64ffaf362affb943bfe2cbb0d68e102"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "5f33c9a9c0896e8c01687ae58eec7ee1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0eb137410225f3fbd50ab7896e982908"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4e3e6d5e1da7f51e79728d78e4230dd9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "18ec7fa34dfbfccb50f0f1085f90d4fd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "cc200c4adf9cbbf31168d6d1b430e098"
  },
  {
    "url": "timeline/index.html",
    "revision": "b531f3038f9a7b9fc1fe24ea49ef7611"
  },
  {
    "url": "tools/git/index.html",
    "revision": "042dea27c106c992da34695e6303f5ea"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7c9f1ba9cee2e9ccafa83e3ca63eca63"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "06aa3847f31ec903e0dcad785348d627"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8d1e98d71601ca23cf27ce1c73744fba"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d952baea6258c5343bf4b1da9c85754d"
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
