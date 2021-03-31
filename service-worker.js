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
    "revision": "05227e3dd1ecf74a3eb74e8e1fcf1f3a"
  },
  {
    "url": "about/app/index.html",
    "revision": "2dac84bbc31966d408496ea6498b3146"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c45058ccea1beb811a8724a9987fa109"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e0eac04b70f48c2c5dba9a701e13d817"
  },
  {
    "url": "about/index/index.html",
    "revision": "f5ebef2e3937bcace1d0eb5ed2177b0f"
  },
  {
    "url": "ai/index.html",
    "revision": "1ba2dfce0960e6ecc46e4c099c652fc7"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "56152657c630ba2c10dcb9b9e35a8b22"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.429f6100.js",
    "revision": "5079abc5c70e6401e011c2b0cd42e6b2"
  },
  {
    "url": "assets/js/16.de4c7be5.js",
    "revision": "91dfe2e910e1f674302d4876d7a1ae92"
  },
  {
    "url": "assets/js/17.0ddb612b.js",
    "revision": "d005c426a00d40956ca85e652bb17c68"
  },
  {
    "url": "assets/js/18.77bbacd8.js",
    "revision": "e799887b365b13b69b761f8a100d34d3"
  },
  {
    "url": "assets/js/19.9e579819.js",
    "revision": "d7e93989eb9cb8e0d42a115b9fddeb3e"
  },
  {
    "url": "assets/js/20.5ab45d12.js",
    "revision": "952a337862377b210b286e9d1d763026"
  },
  {
    "url": "assets/js/21.feed0bc0.js",
    "revision": "53aa1b695420ac448047037df4d0da89"
  },
  {
    "url": "assets/js/22.e652841e.js",
    "revision": "1598a1fe8fbd8495fcda0045859ca648"
  },
  {
    "url": "assets/js/23.ae326ac6.js",
    "revision": "7ed82f1b9810338287d73781e3ab0b08"
  },
  {
    "url": "assets/js/24.e0203ae5.js",
    "revision": "3187102e042dafa39816382f9f165be3"
  },
  {
    "url": "assets/js/25.457686cc.js",
    "revision": "79b476642e86d0f7aec070d0ef5949ec"
  },
  {
    "url": "assets/js/26.4b920c1a.js",
    "revision": "ec4d75a4732a721677fa92bd62169bf4"
  },
  {
    "url": "assets/js/27.64b91fb0.js",
    "revision": "7d583b00bf3347b8f8b5ce957d3e24ab"
  },
  {
    "url": "assets/js/28.06dc66be.js",
    "revision": "2ca610c92b76ac76e12274ee4cdbff74"
  },
  {
    "url": "assets/js/29.390db75e.js",
    "revision": "70ead5cdd356bb61d3af6a67d94d1e4e"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.bee18969.js",
    "revision": "cb3f9cfb5345ae194496ce98ac6e53c8"
  },
  {
    "url": "assets/js/31.efacc3d9.js",
    "revision": "817c4c734936860376419ce8bb438933"
  },
  {
    "url": "assets/js/32.995a268e.js",
    "revision": "1fe351917b0e95d2facfffd8d4936812"
  },
  {
    "url": "assets/js/33.c09dcbdb.js",
    "revision": "73413f3ed83cd09bd68922df21f3ee46"
  },
  {
    "url": "assets/js/34.1a538edd.js",
    "revision": "09901f6842517f0dfbcb59227ed30aed"
  },
  {
    "url": "assets/js/35.b8b44f36.js",
    "revision": "2df265271b9dd1c41d36effda376b980"
  },
  {
    "url": "assets/js/36.dce4cb1a.js",
    "revision": "7cb04fc5f146bcc16b8e75c9c73aed5a"
  },
  {
    "url": "assets/js/37.ec4b69e2.js",
    "revision": "19278999553cc61016e20ce19bb007c0"
  },
  {
    "url": "assets/js/38.dad68a7c.js",
    "revision": "57d7a6790928cfbb47704fe6692b8d67"
  },
  {
    "url": "assets/js/39.40fbc155.js",
    "revision": "5f5133a22defaab77e5e8b7bf392033a"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.385099c2.js",
    "revision": "63446ae6bff7c78526d3031329fc50f6"
  },
  {
    "url": "assets/js/41.37ee2e80.js",
    "revision": "c23202e310b72624f98b4553d6a73162"
  },
  {
    "url": "assets/js/42.aab870d7.js",
    "revision": "08d2d198f58150d1cbe14ac4791b2b40"
  },
  {
    "url": "assets/js/43.3f31cfac.js",
    "revision": "c8111cd350c1dd1ea7811321bb3bc8c3"
  },
  {
    "url": "assets/js/44.6f72d591.js",
    "revision": "4871643bd643e658d55583f644971ecf"
  },
  {
    "url": "assets/js/45.e9c64aa2.js",
    "revision": "a5094dab987f7290ee23cc915d5995e2"
  },
  {
    "url": "assets/js/46.510974d4.js",
    "revision": "861bf43bfdb6a5ca220500b2b80e1ed7"
  },
  {
    "url": "assets/js/47.c416541d.js",
    "revision": "a5d865c155a990452c9f0205880ede3d"
  },
  {
    "url": "assets/js/48.0b98b8c1.js",
    "revision": "b74e14ce93f0fdfb34c466a60624e3a0"
  },
  {
    "url": "assets/js/49.6949bbd7.js",
    "revision": "6a620ee4832d863426725dc4b3019700"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.36a0d8e8.js",
    "revision": "0296d80938b2f8af586c3b9b1ddae327"
  },
  {
    "url": "assets/js/51.e889fd44.js",
    "revision": "08550dec36b309e6e35fd44b930c467a"
  },
  {
    "url": "assets/js/52.eda0b59c.js",
    "revision": "3425f1d07df14ef68070cacd842da990"
  },
  {
    "url": "assets/js/53.76d16a15.js",
    "revision": "03141d7fe521ba9288e0b48815b37451"
  },
  {
    "url": "assets/js/54.9e68267c.js",
    "revision": "80b1f81ad5dbc0fe310e2ba98c59836c"
  },
  {
    "url": "assets/js/55.17f186af.js",
    "revision": "915f1355be2b714731bed4dfbf8b4535"
  },
  {
    "url": "assets/js/56.eca0533a.js",
    "revision": "320f5904fcb847f062a9228a6b587449"
  },
  {
    "url": "assets/js/57.f47bb510.js",
    "revision": "21d07b7e6c2fca19747bea66e2c9d97e"
  },
  {
    "url": "assets/js/58.03e7a327.js",
    "revision": "3652c8ad38ff584c48b713ccc8b75286"
  },
  {
    "url": "assets/js/59.a366e941.js",
    "revision": "3016ea1bdcaeb0d2c3116729b1dcf539"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.b11ad5c1.js",
    "revision": "5f7e31f4638d7aaea6e27b0441df10a6"
  },
  {
    "url": "assets/js/61.961236c6.js",
    "revision": "35d7d985bfc1b350d16498ac79c56836"
  },
  {
    "url": "assets/js/62.2777a963.js",
    "revision": "2a579268dfe96dcc288286acc1fec5b7"
  },
  {
    "url": "assets/js/63.29a12374.js",
    "revision": "b80b6e640b01edd6b35b1736a633612f"
  },
  {
    "url": "assets/js/64.e1b22072.js",
    "revision": "7c4f500abd5af9b39db5d46e969bb763"
  },
  {
    "url": "assets/js/65.310e4607.js",
    "revision": "11911b081802ca59f34511be7efc6a19"
  },
  {
    "url": "assets/js/66.55159c90.js",
    "revision": "c3a994eecd3c2d5f3e1983743f6fdb54"
  },
  {
    "url": "assets/js/67.4900509c.js",
    "revision": "5202551c25dd0811b5eaffda5f13ce97"
  },
  {
    "url": "assets/js/68.a898971d.js",
    "revision": "9527b0aede4e4135f880ba23272f9f80"
  },
  {
    "url": "assets/js/69.173dc3bd.js",
    "revision": "fdfd309464c96649d14a9078516606da"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.81afa5a7.js",
    "revision": "db9088491dbb033603c86227fc1c5881"
  },
  {
    "url": "assets/js/71.82aec2a7.js",
    "revision": "f9501a692b5eb8aaf11648af91c50a3f"
  },
  {
    "url": "assets/js/72.5d43744e.js",
    "revision": "c878fa7130cb7b0aa42f711e223d0a8f"
  },
  {
    "url": "assets/js/73.72f01d6b.js",
    "revision": "4249537917db0ff283eaf356809f7b0f"
  },
  {
    "url": "assets/js/74.addb2e83.js",
    "revision": "89480f2b28a1ba804f1840e4bda3ce9e"
  },
  {
    "url": "assets/js/75.a92418eb.js",
    "revision": "41acfc7605ed5813d631f3774c900bbf"
  },
  {
    "url": "assets/js/76.4739b641.js",
    "revision": "93d06b55afef43361131adff7e256d75"
  },
  {
    "url": "assets/js/77.314a3f43.js",
    "revision": "570f426c52f39f2787578c5f9a9085ae"
  },
  {
    "url": "assets/js/78.8051acd8.js",
    "revision": "7076a0461872998f8b45a628941c170f"
  },
  {
    "url": "assets/js/79.c838890d.js",
    "revision": "26bbf2b131d9977fca9e58ae7ddf5d95"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.b948be2d.js",
    "revision": "11c48c8f2b20cf4643dc20bc008b713c"
  },
  {
    "url": "assets/js/81.cc1bfee8.js",
    "revision": "5ec7b4645fb2e2cacd4b391c78f24120"
  },
  {
    "url": "assets/js/82.a6853439.js",
    "revision": "a20f3138593f03d762984affd42d291f"
  },
  {
    "url": "assets/js/83.e57c7d31.js",
    "revision": "732b53c89fa70ba74f5aabf597f26ca3"
  },
  {
    "url": "assets/js/84.d53a3551.js",
    "revision": "8fda69f6e100535881907585ed9751e2"
  },
  {
    "url": "assets/js/85.caf7a3b5.js",
    "revision": "4a2b5684262d3b83d2eec9d4e69df96c"
  },
  {
    "url": "assets/js/86.9569aa01.js",
    "revision": "6c6b71e06c2197bb36eafecbff35c482"
  },
  {
    "url": "assets/js/87.4c66e7ae.js",
    "revision": "4a52786a185f783f56357b88b19a119c"
  },
  {
    "url": "assets/js/88.310758e5.js",
    "revision": "0d988b91e0398ef2b253c7e759de10c4"
  },
  {
    "url": "assets/js/89.67d5e833.js",
    "revision": "4e0a9d340b8d1f6cf9253d5144a45aad"
  },
  {
    "url": "assets/js/9.5aa57b7f.js",
    "revision": "c8a68860021029e9caa10479bc84984c"
  },
  {
    "url": "assets/js/90.d32c2638.js",
    "revision": "3093c890249ea58c3a79dceeeaf7a2d7"
  },
  {
    "url": "assets/js/91.c385ceee.js",
    "revision": "aacfdca593cf2134c58461ac93ce4a79"
  },
  {
    "url": "assets/js/92.bcd67421.js",
    "revision": "f30f4dbf14dd2e13ebeea86d8a9a66ab"
  },
  {
    "url": "assets/js/93.40a9973a.js",
    "revision": "a0e50bd8191922a1b1d206a6c2f4add0"
  },
  {
    "url": "assets/js/94.dde961ee.js",
    "revision": "41e634a7126b8889600f92332f9b11e7"
  },
  {
    "url": "assets/js/95.21dfa13c.js",
    "revision": "ed147995e6f173f8a76cc904c6a2c1a2"
  },
  {
    "url": "assets/js/96.196ccdfe.js",
    "revision": "685dc40570475e2417fad01ef04c1d82"
  },
  {
    "url": "assets/js/97.28783ad2.js",
    "revision": "87d0572efd850aaad85d6d8d147dc73e"
  },
  {
    "url": "assets/js/98.25ddfaa3.js",
    "revision": "d9e44d1d25b07ea675eaa615270a5b7a"
  },
  {
    "url": "assets/js/app.e08d492c.js",
    "revision": "39f2342bcb259e68c52f207b747973df"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "8abe2fee5b6dc46ec6c796423d76de63"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0661d6ed18a431edfdaac66593f3e5fb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d3c41d0337a6e269e1ba12fa5dd62967"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "81bcceec96845e1aacef0e1b32684b54"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5c5a70fafdcbee04b351f5ae431a32b5"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d4276c6dc4c7b6b64df4e7aef67ba5a4"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b9f86e3a790dfdd4631c04a42c9a5810"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "54e7184f21188384511c926d7b348651"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1b31220e309923650c458a46d4a13f05"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "571a88bd196f23340778aebb2359b921"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a5f9b7582b3a0c235b7851a21b15ad48"
  },
  {
    "url": "basis/design/index.html",
    "revision": "046298c2d2927d10794ea9d6aac57767"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "99665e9991436708560ebeb3c2c3a582"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "e1ae9572230043302cf9e5b7b69daf0d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5c65c6f7fc4ba627af902f835496aba0"
  },
  {
    "url": "basis/os/index.html",
    "revision": "83cfd4e3385470ba62d3df2fdf788059"
  },
  {
    "url": "book/index.html",
    "revision": "fdf115f95e2bc01c7073909aa2586fda"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d9894dde5ca1f2d59ebe5869d1b7d18e"
  },
  {
    "url": "categories/index.html",
    "revision": "daf91ac8fb0dfe59fbe71d41f971e2d3"
  },
  {
    "url": "figma/index.html",
    "revision": "536e91029ecb100774c25da94dbd7b66"
  },
  {
    "url": "flutter/index.html",
    "revision": "f46d3d86d70f9654ad42e3ce905c0c05"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "64802d3f39ed78ec33333a848a1868ce"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "35e1ea9915d0816420229ec4c12465ee"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6b3875b9d4efea95538178cdbe6b3aff"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fe5729bcd1e7d31406fb877a6932818d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "30cf3b1d6e034afe7db64bfcf8c87c54"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "470130b34e09871a2fca200812c046ed"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5bd963a671d0ed8a55757d30fcd0a7f4"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b5b4fafa00f63a545942c0e7dd9065b4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ef757579702977fb0c93bb69ea5dac98"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8dbcfa5f292dcd378497bb589a02b9b2"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6ff87dc484fa593644cd14df577fc342"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "3fdf94982384b2d3efd65a65fefd5a63"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "f2d79c0f79f728aa0e66a943d25c5c37"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0e08bc9bf1af32b2b198b42186b282d4"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a67c5102f22c5dea197f570b7675930d"
  },
  {
    "url": "index.html",
    "revision": "bbbde3303cd65b083853f74c041d55ef"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "aa83046a33e6e57814e2b2f7508730bf"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "afae7d573791bd0e09fe1fb4f5956025"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "298aeae2e40a226a0712d7691817aabf"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3e65df0ec9a708a20e1f12a9f65312d4"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a224a382b14389975ba93ea3c31cd112"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ecbd5beb604bd097b7ddb52e78420c13"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "07665c978efbc6782df4dcc554b29435"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "13767b0c6c8be593181c71e70d5f2748"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "3ce4b6e1608e4f25ec6c66ad9f27bd26"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "928239c07a10d8438ab2f3dbbeb1f838"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d011e5416db34040deefda3e2f8d106a"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "11c0f317d1eca185b21e05d3e542c085"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "6fc67d81219e9bc56df0e039b716c7f9"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "53c5b5a86321ef1657fa553fe7aefcde"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "2c50ebdab97f59f19d92b187612d131e"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "233df469c9f772887dc97c75947534f0"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "1f43a31b86387ad7ee93da0f84d0934c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "45a1735f2e998c2bd7819aad278e4e54"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3922208baa29d1aa1d64b2686c523f14"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "94f8c6696dfd29095813a25689fb9d3f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "27f3b81c20f0bded8e44bbaeacbefc8b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ea5846f0d7fcec1bb1f6bf97c5c5ce42"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f8dcdba93220414487346b823481230c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "96970d4cb60da6d49d16dfb59c8d6079"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a9c304ffa89c8400132fc7020471b8b2"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c8e82c907a55244ca333aea0647fcddc"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "02c765f9d397a9ed57c7367a27aa17f8"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "529de8cfb8be84e31c0741da75d9afb7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c67bc93408cff451e397bcfd137adc3b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "cce740ce43d72163f1e022b2fb3a20fc"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "14e6d37300a8915334f57f34d1ac939b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b0aa18c2e9b4c38703b6f1495417f76c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "53babd1d2d009320abbe1e9fb36d2443"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a89d635b5cae1ba10ba95dc30ae711a1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "50e59ca738635f588add58cd6bc3d90a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "781b188177ad17eb730df52e9b81fab8"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f65a222ae508b991ad5324a0ee233874"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "804f8509f5074ed195f68457a6d43169"
  },
  {
    "url": "tag/git/index.html",
    "revision": "22beef9f9709a96ab9a28b52bbc98b6f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c64e35d15c2b35a9f5ec5acaff7dc719"
  },
  {
    "url": "tag/index.html",
    "revision": "276b0ecd16257fd15b285d4ff7e2e1a9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "c9a3391ef96a612767967ac0ff58bdd8"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7b836e8f7a85f454dfd90d8b2414d294"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a1d67b94f6cc42821add23299db74c5d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bdd8f7faa9e296e6ab48df20a35a988d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b2b6d62b581a75f0cde935a011599433"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "45a4cafc73263ee4281ce400a67c6850"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6624efd4e12d189651214d6ae85d5935"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fcd6bddda9e3106bb587ee7a40657f17"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "740545a49be09eee27c6e42492b7ab30"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "bb156eb329b4a5330d3a0001e48b3ac0"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "26b3a8dd329a95ad4c7167d65f7ffa10"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "85b6d41fa41ddd409c3cbfbbc2495889"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6d226d0d922732a639dc376b95758b84"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2c3294e73bec7d66110fbfe4bc50e8e7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "450c9f66bbffa518abbfc7b6c0694dd1"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ddd332756679162bedcda03ffb604038"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d0769d2704742893b3e0e9c88a775209"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7cf90fa5a91bda6a9b89761f26764995"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d1939ace757484f96c20a8538371b94b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "eb2959b967431af9689d53eaf5057f37"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5020e509df780b4b4139701ffddf0cc4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "1787ae7c5872da1383618f436835b968"
  },
  {
    "url": "timeline/index.html",
    "revision": "bdbaa51883eb67b93c3077931a59ec08"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f2294baea5e457aa3e4fa15e89589fa4"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4b01a95c20728330aae16fd98cc0b370"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "d76d8e8008089f83606e5e95d31007ca"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a46c671a3b89d41e5363f45f7da5fee2"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "89ef09b374fa691dd3b7de1adc219ac9"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "422a856fcb51ceb5330b7ca25eee0805"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "fe2f96d797a083c83934c549e9e8bdfb"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c0ce61402fc1ac27170241494009fefd"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a93e78f0d161227268b459db4fa0b46c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d26cc95cbeeab711b9a16e2311343440"
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
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
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
