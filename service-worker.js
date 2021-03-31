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
    "revision": "ec43f58c1ae57ae79be20bd515539a3e"
  },
  {
    "url": "about/app/index.html",
    "revision": "66a727e8edf10b6b3b7f5d110c50284b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "fdd87c1cf8faaae3b712b1b1bc37b1fe"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "153069d7e3475267929163a3287ee0e7"
  },
  {
    "url": "about/index/index.html",
    "revision": "7cc8ec7ec97674b3656503fa22f05782"
  },
  {
    "url": "ai/index.html",
    "revision": "086a4c9098518faee72596069ef4f471"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "61122b1f16d777b8a2160903b256f4ce"
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
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
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
    "url": "assets/js/53.e048b116.js",
    "revision": "98f7c8685eed82b3ea334a089ee7ac2b"
  },
  {
    "url": "assets/js/54.9e68267c.js",
    "revision": "80b1f81ad5dbc0fe310e2ba98c59836c"
  },
  {
    "url": "assets/js/55.a890fda1.js",
    "revision": "ea236acc26fa3a9450c838bfa4a71b45"
  },
  {
    "url": "assets/js/56.e9a5f827.js",
    "revision": "62f63320220a507bd7555663c2aa8c41"
  },
  {
    "url": "assets/js/57.68884b81.js",
    "revision": "31bb73a47f092f5b91ac09ece4d62391"
  },
  {
    "url": "assets/js/58.affbb267.js",
    "revision": "74db96c9793ff4a299c1de16ecf22a04"
  },
  {
    "url": "assets/js/59.db70aa24.js",
    "revision": "2d325a1277743032dfd5e8817b574464"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.1f39207e.js",
    "revision": "dc896178d52b2330144dfd73d33a1c4b"
  },
  {
    "url": "assets/js/61.d5904686.js",
    "revision": "c0851a4e312bf699778b0a1ac19b8b77"
  },
  {
    "url": "assets/js/62.9cf6542b.js",
    "revision": "85996ca38a717c6fa2b114ca9d3d7621"
  },
  {
    "url": "assets/js/63.4eabfa9b.js",
    "revision": "3aff24466ea8b21ccd05b0582905ccd4"
  },
  {
    "url": "assets/js/64.43fd3524.js",
    "revision": "69df56246a027ea681e60f94c73d4460"
  },
  {
    "url": "assets/js/65.d7a18838.js",
    "revision": "3fdc47c138b6ebb358e3a11d97375a2e"
  },
  {
    "url": "assets/js/66.ffe10fc5.js",
    "revision": "dcea3939e101ce55265725965afb804e"
  },
  {
    "url": "assets/js/67.873fa747.js",
    "revision": "dee2b9e089d2e5161b88e9e98bfa5347"
  },
  {
    "url": "assets/js/68.8f6321e3.js",
    "revision": "2a7eaf7fa7ec9e9834e4aee8a01bb277"
  },
  {
    "url": "assets/js/69.b141552c.js",
    "revision": "f7764c6b40417142fe4f74026f6cd859"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.94f0a15e.js",
    "revision": "14ee7b5c26c893aeb22545b3b60d25a1"
  },
  {
    "url": "assets/js/71.53796c90.js",
    "revision": "2c141c0379eaf2be8ab2a02c888d53c8"
  },
  {
    "url": "assets/js/72.81644c3d.js",
    "revision": "acfa82b927463caaea65022e208ad57f"
  },
  {
    "url": "assets/js/73.c78b6e9a.js",
    "revision": "82715c9159eb756f957679475654c835"
  },
  {
    "url": "assets/js/74.0fc09f90.js",
    "revision": "dab7d382d7358f9c58648d2659763b4e"
  },
  {
    "url": "assets/js/75.ee8c0cc0.js",
    "revision": "d38b6ad22eb1e681c1263a1c99166121"
  },
  {
    "url": "assets/js/76.152bf320.js",
    "revision": "78a2831a53d60d6bc34135b75467835f"
  },
  {
    "url": "assets/js/77.35add5d2.js",
    "revision": "ad607e0974512ccb0e98bb7df22e240b"
  },
  {
    "url": "assets/js/78.8e8ae573.js",
    "revision": "f29ea3c5263430b64eada154667ebfde"
  },
  {
    "url": "assets/js/79.04a1ffa0.js",
    "revision": "982403394d8d9242c7b0113f637b6fdf"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.8e9ed84a.js",
    "revision": "269a8b1e1d68e9e228659d251ac36775"
  },
  {
    "url": "assets/js/81.c5e5bb1e.js",
    "revision": "442f34a95f1069134d540a4ab7dee76d"
  },
  {
    "url": "assets/js/82.52878905.js",
    "revision": "7a9aa8aee9ec412e444fbe715b3bf5bd"
  },
  {
    "url": "assets/js/83.95cdadbf.js",
    "revision": "02151f3384a11c463d5074e1a25ef22b"
  },
  {
    "url": "assets/js/84.12be8bdc.js",
    "revision": "331b22496d98316a2a1ee7075698a195"
  },
  {
    "url": "assets/js/85.2e972c04.js",
    "revision": "503ead96c361b1d5cb03e6479bc6368c"
  },
  {
    "url": "assets/js/86.6805b790.js",
    "revision": "23d776a7b831999165bbe8ca7fe863e3"
  },
  {
    "url": "assets/js/87.8061cf88.js",
    "revision": "52f2f0221db0624cac236c5d11b69a6c"
  },
  {
    "url": "assets/js/88.6e2f28ff.js",
    "revision": "0834dc257d562c9b30dd4ea19305a00f"
  },
  {
    "url": "assets/js/89.cd4ff1a6.js",
    "revision": "6d12531af0cf36e8a8da0d55c46149da"
  },
  {
    "url": "assets/js/9.27f1a4b5.js",
    "revision": "88fddcd7823466e71e88c0c9a11ee974"
  },
  {
    "url": "assets/js/90.9f1999c1.js",
    "revision": "1d32d4842dd7923a7d5ef09a431f294e"
  },
  {
    "url": "assets/js/91.5059f810.js",
    "revision": "3ce16788cbead3b55e546d3c83c6b546"
  },
  {
    "url": "assets/js/92.024734db.js",
    "revision": "18aade874c133af5633303d9377a2d6c"
  },
  {
    "url": "assets/js/93.ec88dd4b.js",
    "revision": "2880c724a31ef93dbcf7050c429fdec8"
  },
  {
    "url": "assets/js/94.a99e83f1.js",
    "revision": "476aa5a44bdadb7cea37b519a94528b3"
  },
  {
    "url": "assets/js/95.d94acc5e.js",
    "revision": "befeb21a8f0511b3900edd915bca1125"
  },
  {
    "url": "assets/js/96.426a82b5.js",
    "revision": "3549bcbf45df80dace95bd0112c9388e"
  },
  {
    "url": "assets/js/97.e308a7e1.js",
    "revision": "8a05b2db4f0b310ead52164cb63e1858"
  },
  {
    "url": "assets/js/98.8b79e1fd.js",
    "revision": "b9911f10127822003a2b04ec85da9f80"
  },
  {
    "url": "assets/js/99.7f3df676.js",
    "revision": "4767204b088d7df298269ed05801d165"
  },
  {
    "url": "assets/js/app.95ccd860.js",
    "revision": "5b2e7393ceb1351a89bba34443e1f941"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "591a0aaf123775aba66819deb4357cc1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4d08abc6a7422e62bd26c7b30476401c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "389712e6b65ec72c0a485b9d3d221eaa"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "fa908ab4c4e17360e1ab366c955e88fc"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "1932a9b59f8cfe0bb171e69de0a7051a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e5defaeb89378a1c5a02d1880000e05b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d1f0f03cf8a2522907d89bf535be810a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1c4f40a5e0e4954af3b40e32689a89b9"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "fe80eb198d7f429b0863c636cf8557b3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "7364769ac1afa93f1524018aa1077784"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3f97e4d620a3d667dc22b77b7e5f57cc"
  },
  {
    "url": "basis/design/index.html",
    "revision": "4a7fc0362339eab9b65a6504f10fd311"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "ec03594878c6a6d81aeb53ab3ed1d41e"
  },
  {
    "url": "basis/design/t2-gcms.html",
    "revision": "be077710975ecb147d64834aa1bf8f72"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1a5717db25dc8edfde7e38e4af5babb4"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0432efabaf89234c154c4f8a715e5fab"
  },
  {
    "url": "book/index.html",
    "revision": "6c6d47ff7dd46f0b0a4d906d7edb64bc"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9fa196d5cd97a4ad426ee25947a1bb01"
  },
  {
    "url": "categories/index.html",
    "revision": "419b3a3290a699f9e381295796e657fe"
  },
  {
    "url": "figma/index.html",
    "revision": "038535ee7db3b5c02739ced69dd306ad"
  },
  {
    "url": "flutter/index.html",
    "revision": "fce062c23e983f7b2ea4e8beabff80ef"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0f10fc85072ad23f969bdb7a83652855"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ea3b0593a9525ec78885101f94591060"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "dee998706a79b477eab15b86921ea9f3"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e80e268adf141013e927656272bd648d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "17ab79bf9cb350d2502d96e47114e1ee"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "bade92847c4f598073ddf3b9e8660294"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c98c61539c30bf85c0bcf952b9586af1"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "6766148c0967923aec89721e501933ec"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d6d4fac240f956a8e9f4127c706a423f"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3869f45f7fe2a7d273f09360fe7bf927"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "33dd38a2e04627faaa9933b91934b471"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1b466cf06a12d6d9955262271f140931"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "cf90b978342ca1478ea21f40f153064d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "4ff645562c71b20982df95b0276af835"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "21dd1e16f5b566e622b03c44c4549323"
  },
  {
    "url": "index.html",
    "revision": "b26170618b0730f2cd56f9844614edd2"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "5e02f99ae1c5205f18455ec2e1e32f1c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ac871820288af11038e50784d1e1be8d"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "54157a2ca6b6e9c7ae731ecc9d120c2d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "c81ff5d2c6e6f584c2870b39771be69d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "500fa754ec1af726b4a1665cd2172653"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "7dfe382c6b04fb03a00305d95c154ceb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8ef17f6be95d521a9eb53190a0d97f00"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "caf7340c12e2182f1dfd97c8e9ca661e"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f6ef694d01040bbe16d7b119b3673ac0"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "da121624e9c34b7fea3ea4e2362000c4"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "6df64cd82fc76ce36a7e57f1c99c49b3"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7125bee37c9fec6d488f4eb39849dbee"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "82214c4443a39c2d857a7df6596f1a7a"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "0971fbaf538fceb1248cdaf09b4800ff"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "c694ebc007702b96a7c920e11fb222aa"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "8e47ac7471048e70540866b594076878"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "1bf355269fc76a83baa7143761ec0d2d"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "63c7fb87fc51a8917d1f6c0a1d7fdd56"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4f604f0464127b4ca78e7b0fbf14df49"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "253af44059f9a222cfd8b885d5f9874e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "762239314874b3346c6de49ac07b2efe"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "cc095722ec40387fd5c5ed83cdf3306a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "83d1f84cde66939bd09e4cf533d41624"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2315a7ab17a160465c5e58f305c4a4b3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6ea1e2d89772df28bf4ce5ea9754bf8c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6aba764bdf6db6eb4b5ee23b58014fa4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "39e717ec1e8f2e3a90ad7cc42c435607"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a16435d7d543e086b8568218466bb33c"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "8f3107890d60e2d41f72be081f05c204"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "4bebced096303d88e7a4870a29c2b028"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "4c00147176faeef12eba481e2a8c0064"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "297f817c96425c9653c2cadd72e0c57c"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d0e76c58083086a0d69cb70aaa6ce4d9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "91360e1006d60e04ba4603160701b068"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f12cf59e84af8fe886ca175670dbd5a2"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f75bc62046b019c54e5fb3b393120a08"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b9d879785d14662d51d66d5998566943"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4c611301fa97a46be87aed75e33aba3a"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "536b592efc9a0da0ec874ea7d9b94bd5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "deb997d236be88be355726946330c254"
  },
  {
    "url": "tag/html/index.html",
    "revision": "44bbbaaeb5e5cfdaac3e73052116ab52"
  },
  {
    "url": "tag/index.html",
    "revision": "01ddb062e855dcb25079effb1af0fe09"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "dfbd75632be0dd24f6bf1a7662f58819"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e352400bc73f04c8f3324e9dceac3cf4"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e7a97f6086ee235887e630a90e6229d0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3eb97c0ad143bcb3ef8d3b68f81fe126"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e37a69160110770df63b29375eac732f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "7cffa96cb804798b8133302a0e124a4e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "39e73d68f490ac4a941fab2dfdc385bc"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "62b9314ab4af27bc313cd711cda56353"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "812c3f9915d2a0616f57eeb95c123254"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "71f20c93e70f780ad50ea138e1b45684"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "205e4d3306eeefaf8437cd53442f47cf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b222109e99b30c1412bf246f70c2a2f2"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f4cabbeff56a510455e6f96514e3adf6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9be83b5fc15a7e9dd2e18cb12bd94946"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ddbf63ea9fa3a48bfd2d36609cb4fa00"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f2115841fdc2bfb5f94e669f15a911f5"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a1e34ee9bddd9fc9b45f7101075aa611"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "460c79be8e4b2c9736707964d19f6e63"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "59d62ddf61fc186a4005b5ccdc819e9e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "84bc73dc7126427dad512cefc48bc09a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d6e7b47c531cfc886e24ba215369e36c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8a834975bd4c97fb0c0624b78f66b34c"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ad5478c71e3d770c91968e520699e6f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4a22e33d0a80b852a6e9bdcbcdac01ea"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ed39439fd89303de2ed6dd9523e21951"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "fe73393216cd78bb63fea44cc5cc580f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7f24e4d47001ed76552fa32f2e63cf01"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bf30ebd92a03eae55231572d5e115e73"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "afaf2ef5f26e9b1a38eca2e1795bf2d7"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ec96b11ae6b50e355852b75233e2065e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "68a655b00f6e666fa2fc0ca1e7e0cafe"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1135811a07d1ff4c84b9ce79d06f3cd3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "efacf26f916c2bc1b0b757984584e5cc"
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
