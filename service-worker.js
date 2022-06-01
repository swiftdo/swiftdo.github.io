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
    "revision": "9406896a30c6808b9cbdfa687ac349d6"
  },
  {
    "url": "about/app/index.html",
    "revision": "520929fb225cfd7e857f205289759775"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8383530e1f14928d1d74c035d39db593"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0868de19eb3ff9355df0ec4ce8d5f742"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "3ef7c8be22b5b4f1d8e0d06ee61393fa"
  },
  {
    "url": "about/index/index.html",
    "revision": "126e78620b8caa633fbb41cfc1910efa"
  },
  {
    "url": "ai/index.html",
    "revision": "780cc73e7ac8f0db92c5aec697c05899"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "6d4fd5489df1f8eedb78187fbe3b2c2c"
  },
  {
    "url": "assets/css/0.styles.69fe0ec4.css",
    "revision": "b222c2e7ac4543d2fa4d450479a65364"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.5964dece.js",
    "revision": "48529d0751226abf8bdf8838eb0a1898"
  },
  {
    "url": "assets/js/10.981f76b1.js",
    "revision": "1042e8a59aeb8cc5689291fbe154906d"
  },
  {
    "url": "assets/js/100.e254f05d.js",
    "revision": "29a2040f2376ca11f1be5cf7e1e8a7aa"
  },
  {
    "url": "assets/js/101.48328d51.js",
    "revision": "16d0f2d0d03c40cac19eaba6b15d12df"
  },
  {
    "url": "assets/js/102.d654ed34.js",
    "revision": "b14a282d47a16d3ddfd8ca9a0deeeb4b"
  },
  {
    "url": "assets/js/103.9d5dd9ce.js",
    "revision": "bacc4339f6c9c2c4c31c74fc899fc85f"
  },
  {
    "url": "assets/js/104.4830f36a.js",
    "revision": "c61e51764644fd888d80a6c6c74b3b53"
  },
  {
    "url": "assets/js/105.6c2e5fa8.js",
    "revision": "63f53c1e4eac0de3b14e1636ea5a5abc"
  },
  {
    "url": "assets/js/106.5acbecf7.js",
    "revision": "fbca5cfc3625728e36df1962d23e6abd"
  },
  {
    "url": "assets/js/107.4d3e9d9f.js",
    "revision": "126c3cd74ae715d8004454b3eb292a86"
  },
  {
    "url": "assets/js/108.2abcfa60.js",
    "revision": "938c67a48ae0bbd53d67de7ace4aa419"
  },
  {
    "url": "assets/js/109.b9bfc19c.js",
    "revision": "0ece66cadf80685af7fb865bf45546de"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.53413a4a.js",
    "revision": "4a796b7ea649046bb994ceb507a2fc09"
  },
  {
    "url": "assets/js/111.f574c49c.js",
    "revision": "441bf7694ce4e0e0dec3ed941eb78bac"
  },
  {
    "url": "assets/js/112.0c8df473.js",
    "revision": "57240957bc6e9b13cebe5f451efea085"
  },
  {
    "url": "assets/js/113.f8a2252c.js",
    "revision": "b1d2f1197e651023b4bb068c8480667d"
  },
  {
    "url": "assets/js/114.4637035b.js",
    "revision": "6253744694140f31fef14a54f53e10c2"
  },
  {
    "url": "assets/js/115.de7050ae.js",
    "revision": "37b833bb1a6563a7b6987f32a83c499e"
  },
  {
    "url": "assets/js/116.577fae82.js",
    "revision": "720eb77f6f8112169ed28537c7d34456"
  },
  {
    "url": "assets/js/117.87fb9796.js",
    "revision": "ad5259de12a43c737eacfc39e2fcd1da"
  },
  {
    "url": "assets/js/118.1d557f87.js",
    "revision": "4381bafa97b7cbe96459543e6ecf0620"
  },
  {
    "url": "assets/js/119.53cb852d.js",
    "revision": "42ec85cb31bffc180c4ceea67f4d1710"
  },
  {
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
  },
  {
    "url": "assets/js/120.3d91f6c6.js",
    "revision": "1639bb37ba24c8b118c5c12beb6b2da9"
  },
  {
    "url": "assets/js/121.d4e3153e.js",
    "revision": "5fefa449782f58e99d27f0065a126c53"
  },
  {
    "url": "assets/js/122.46c27d3a.js",
    "revision": "9d60b689191414d8d44c7eecb07f71b9"
  },
  {
    "url": "assets/js/123.dd48a385.js",
    "revision": "ef19e1d8ae8b5ac00cc315f9f7a42906"
  },
  {
    "url": "assets/js/124.cff23059.js",
    "revision": "76b55025c3d758aa94fc32a1d3759319"
  },
  {
    "url": "assets/js/125.5d42d4bd.js",
    "revision": "d50e0c593450decd61e805a501d4b293"
  },
  {
    "url": "assets/js/126.43d26624.js",
    "revision": "22e635dfffcc1bb99bbdbe117cbad1c2"
  },
  {
    "url": "assets/js/127.891402b9.js",
    "revision": "6259488e9b531eff6f3284e3f36cbd4e"
  },
  {
    "url": "assets/js/128.2069c017.js",
    "revision": "512c144555be3a77f6e342d46155fe35"
  },
  {
    "url": "assets/js/129.2107532d.js",
    "revision": "b4b48c92f4c35c39ddb730eb27049cd9"
  },
  {
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
  },
  {
    "url": "assets/js/130.70185fdb.js",
    "revision": "81ed832b0800cd66f1ec09bfeddaf0ce"
  },
  {
    "url": "assets/js/131.fe3558da.js",
    "revision": "ac5385eeae17163176f1d2eae336ac20"
  },
  {
    "url": "assets/js/132.739f33dd.js",
    "revision": "940bd6c6b7a470888e1768dfaeacbde4"
  },
  {
    "url": "assets/js/133.f192cf6b.js",
    "revision": "cb8532b7e8fe6e29431ce4a93529993b"
  },
  {
    "url": "assets/js/134.f004b9b6.js",
    "revision": "f2a1cb1ea7873a7ed2a9e5045e173df5"
  },
  {
    "url": "assets/js/135.d2d5d5be.js",
    "revision": "d79b5bd26d4b4d6eb95c7bef540bbd7a"
  },
  {
    "url": "assets/js/136.970e4393.js",
    "revision": "ca48e12a203185098c4c21f766d1adc9"
  },
  {
    "url": "assets/js/137.e24e536f.js",
    "revision": "17f2feed2f3b9c9185bda4e6194e0999"
  },
  {
    "url": "assets/js/138.f4b28d81.js",
    "revision": "3a733b7522d201207ad5d0ab56cea827"
  },
  {
    "url": "assets/js/139.63afdee4.js",
    "revision": "51c9d93c06922063bdedda0dabef5da0"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.44a4f854.js",
    "revision": "a114d013cd13d1b4a612f2403cda624a"
  },
  {
    "url": "assets/js/141.d95a37df.js",
    "revision": "f9e4ee204f651bc23c0a6f029a5c4409"
  },
  {
    "url": "assets/js/142.15de0b37.js",
    "revision": "ca1603119677acb54e32afac54d478b6"
  },
  {
    "url": "assets/js/143.34481a2b.js",
    "revision": "68805e14e2d31cfe28582be86cf87027"
  },
  {
    "url": "assets/js/144.ce012bf3.js",
    "revision": "aa78b4859154e0af2d388e8612220f02"
  },
  {
    "url": "assets/js/145.dbda9539.js",
    "revision": "dbc558555e0f17d54d63c5cc68e73b95"
  },
  {
    "url": "assets/js/146.ff439a84.js",
    "revision": "9c5c3b816c8c909f3134d8433e9aba96"
  },
  {
    "url": "assets/js/147.8e3895f2.js",
    "revision": "9e3020ec5e8ea82e881086e620f71da5"
  },
  {
    "url": "assets/js/148.72c2cc7f.js",
    "revision": "bf29ff16a0397f8928d29f39d810321f"
  },
  {
    "url": "assets/js/149.52133bf0.js",
    "revision": "0f1defa88bda0b256ea088f309f47302"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.3891767a.js",
    "revision": "6f9dcf197ebc68c7f317d1d5576e598e"
  },
  {
    "url": "assets/js/151.33528b07.js",
    "revision": "a1cc45d3da5f6a97c17ec9aa84665f88"
  },
  {
    "url": "assets/js/152.631d6f19.js",
    "revision": "919197db2572da860c8bf55406643885"
  },
  {
    "url": "assets/js/153.36695fca.js",
    "revision": "b9534c9b091c371f0051a21c907679b3"
  },
  {
    "url": "assets/js/154.67aac961.js",
    "revision": "407ef30b274e9fada73292b707b03bd8"
  },
  {
    "url": "assets/js/155.964d7af8.js",
    "revision": "0f3a9e520adca1c9e1d34b548cf4961d"
  },
  {
    "url": "assets/js/156.d5039e57.js",
    "revision": "665538ea0b91534f36fd13eccf931d7b"
  },
  {
    "url": "assets/js/157.44baad15.js",
    "revision": "dcdbc46243f02be1633f6817ad285495"
  },
  {
    "url": "assets/js/158.8022f010.js",
    "revision": "70eac60b31936b650815be05fe2492af"
  },
  {
    "url": "assets/js/159.f56cba67.js",
    "revision": "d2416993a46071257121eb7d35d6f7c3"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.a130b608.js",
    "revision": "bc452f46c9379deda9c597d0ad459035"
  },
  {
    "url": "assets/js/161.83e1410f.js",
    "revision": "466b32be275b626d0697824ccd6ec4a0"
  },
  {
    "url": "assets/js/162.05fa4e4a.js",
    "revision": "92d8c323adefd94c4d369bdf21dc6060"
  },
  {
    "url": "assets/js/163.74e3c2aa.js",
    "revision": "0349f5b1a1f831ca2c383ad8c03d19e4"
  },
  {
    "url": "assets/js/164.d16918da.js",
    "revision": "f9cce2ebad846ff7fe43f2a23f2d0625"
  },
  {
    "url": "assets/js/165.9d684df1.js",
    "revision": "e71c456079107e9eb891303345d0180f"
  },
  {
    "url": "assets/js/166.bf90072a.js",
    "revision": "2186ccff14a193d958f228f62db2f6df"
  },
  {
    "url": "assets/js/167.6275feec.js",
    "revision": "6a8e27936fb4cb85ea4a2d9a34c65acb"
  },
  {
    "url": "assets/js/168.2c62cbe0.js",
    "revision": "30a400653a936ccdbfb895f822f39bd9"
  },
  {
    "url": "assets/js/169.ef097b38.js",
    "revision": "d4ae871039c3e3be16e281bd33f5b5a5"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.127bb98b.js",
    "revision": "ebfb4fba672698f0d9363cceaefb16a8"
  },
  {
    "url": "assets/js/171.b32f584e.js",
    "revision": "c05d44ce4d28a0569df29a39b4d33b2e"
  },
  {
    "url": "assets/js/172.5e839b92.js",
    "revision": "0803104c56ab7665a5d1315e34c2f05e"
  },
  {
    "url": "assets/js/173.77329169.js",
    "revision": "7bc9806f9dd9e28bf574296afc8b4d71"
  },
  {
    "url": "assets/js/174.3594de42.js",
    "revision": "83d4aea98317bc6710c0aec61390e7b7"
  },
  {
    "url": "assets/js/175.f4864d2b.js",
    "revision": "1a6ea29be8860bf766ce9c5c8b8dccf0"
  },
  {
    "url": "assets/js/176.640ec6d2.js",
    "revision": "be75f1ebd5ed3030343d3cd7afe318e7"
  },
  {
    "url": "assets/js/177.16719237.js",
    "revision": "bda5927e4a2f8c4ebc56ea99bc7bcaca"
  },
  {
    "url": "assets/js/178.783d206f.js",
    "revision": "cc8c7d3e4bc05f0613babd72a759003e"
  },
  {
    "url": "assets/js/179.ea8acf64.js",
    "revision": "13fd2798eacf94109a2216cde27626fd"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.6656a0fc.js",
    "revision": "22310522822ed2cb6863b1a12d144d1f"
  },
  {
    "url": "assets/js/181.ae01b9af.js",
    "revision": "6b1116e12e82ca171cd27edbbe79c75c"
  },
  {
    "url": "assets/js/182.bc756974.js",
    "revision": "53a0d40685a671392bf4fe12d22637ea"
  },
  {
    "url": "assets/js/183.bcc305e3.js",
    "revision": "ceedd37ffb5c46e21476dbd0481b154b"
  },
  {
    "url": "assets/js/184.42ac1af7.js",
    "revision": "71a0c0a36009cc29294f46043f9e741e"
  },
  {
    "url": "assets/js/185.156b2e39.js",
    "revision": "c8dcef9905a88d1c30d21b3c9f8b0122"
  },
  {
    "url": "assets/js/186.71cbd9da.js",
    "revision": "28ba3b2eab4e1f7befde32bd9550db75"
  },
  {
    "url": "assets/js/187.12224e14.js",
    "revision": "b44613c8dc79af49991faea2f030fe5f"
  },
  {
    "url": "assets/js/188.5b4c23ba.js",
    "revision": "10f40a1bfda6054eae9161f4b5d7d682"
  },
  {
    "url": "assets/js/189.f04139f8.js",
    "revision": "a1fb6c3b267d081244e0b7a1e1936daf"
  },
  {
    "url": "assets/js/19.feea2fe9.js",
    "revision": "6c8eb4ff5afa1102e71d69958591df27"
  },
  {
    "url": "assets/js/190.f69a5b94.js",
    "revision": "999111d976a2a22d1fdfcabbb0b6c558"
  },
  {
    "url": "assets/js/191.cf65bd26.js",
    "revision": "66d70980fbd00f0941b8377865511a31"
  },
  {
    "url": "assets/js/192.22155c1d.js",
    "revision": "03e11873a78595b53136a2f96785d80a"
  },
  {
    "url": "assets/js/193.2e032d31.js",
    "revision": "dfa793282ccba6d3c8c3163e7d9002da"
  },
  {
    "url": "assets/js/194.99dc4e82.js",
    "revision": "f5fdc1089338e3ab043137be2a2ca4b7"
  },
  {
    "url": "assets/js/195.739bd569.js",
    "revision": "fd027deb8bc08a4023e5e6b4e86439cb"
  },
  {
    "url": "assets/js/196.331371a1.js",
    "revision": "d43985397bc887e7b04f6fe386f250c7"
  },
  {
    "url": "assets/js/197.38bc561f.js",
    "revision": "638044cb862d7a015ce6fb16a56be4e6"
  },
  {
    "url": "assets/js/198.07a6c3a9.js",
    "revision": "f739ffdfffbdadf6aba39e598bfe7b1a"
  },
  {
    "url": "assets/js/199.5310627f.js",
    "revision": "f2d31864145f242f2834848b00dc258b"
  },
  {
    "url": "assets/js/20.a4cf9422.js",
    "revision": "34abcb3fa966a0361c2f3611ec00dd53"
  },
  {
    "url": "assets/js/200.e3864575.js",
    "revision": "fdec7ec4bdd6d41a2813b601ecb0d875"
  },
  {
    "url": "assets/js/201.1700de85.js",
    "revision": "a89a1649cf83f1f25ac19927e7907c4f"
  },
  {
    "url": "assets/js/202.b3447700.js",
    "revision": "f30a46e5dccedbf2303630f4ace6f3b1"
  },
  {
    "url": "assets/js/203.6eb247e2.js",
    "revision": "dc8312425dd07cfe4c3ea8396605cbaa"
  },
  {
    "url": "assets/js/204.06443715.js",
    "revision": "ef44b8e427e3586aca347abc783ba0ee"
  },
  {
    "url": "assets/js/205.a3a28b5c.js",
    "revision": "1d8f146812b880d4df0fd370ffc3af55"
  },
  {
    "url": "assets/js/206.65b5def1.js",
    "revision": "256f0cde81ca05f18d946f94576b8ffd"
  },
  {
    "url": "assets/js/207.b4d18945.js",
    "revision": "888c1dd6dce227c1ba7f797b5da04026"
  },
  {
    "url": "assets/js/208.762a0571.js",
    "revision": "cceb7041853e5b8e3a664fc05c8e75ce"
  },
  {
    "url": "assets/js/209.726ae402.js",
    "revision": "cebb53bc607e52ec78ec76051b5f8d2d"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.0852557d.js",
    "revision": "a9b75545f84b98f5053692abde4d5d84"
  },
  {
    "url": "assets/js/211.7c1cf5e0.js",
    "revision": "7938f368b9bfbf5778bf4a8620a5a7bc"
  },
  {
    "url": "assets/js/212.5c818e61.js",
    "revision": "ae4159299d18521270b943583b1d5708"
  },
  {
    "url": "assets/js/213.1fefb796.js",
    "revision": "9433f0a98515b4e67b98de10332435af"
  },
  {
    "url": "assets/js/214.8049b076.js",
    "revision": "977039c0004734718fefad6b80158613"
  },
  {
    "url": "assets/js/215.adc39b8f.js",
    "revision": "560ce0cb4b5d7c99face55925a1a492b"
  },
  {
    "url": "assets/js/216.b472afdb.js",
    "revision": "f5aac27cc81e21ece6283f316622536d"
  },
  {
    "url": "assets/js/217.500c6ea1.js",
    "revision": "a7bc347bee3094eebdc53ae8a1a4c5b1"
  },
  {
    "url": "assets/js/218.921dc5f3.js",
    "revision": "603237fe1767b2d78683e895ab5423c5"
  },
  {
    "url": "assets/js/219.e3656ac0.js",
    "revision": "b55f5b7351a2479325912f0735c5c93d"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.6b29a71d.js",
    "revision": "3f50e77fb7d454b501abe76050281069"
  },
  {
    "url": "assets/js/221.87a3a50b.js",
    "revision": "45b3ec3ec91f946a4d8ce5761feb5ba8"
  },
  {
    "url": "assets/js/222.38b999eb.js",
    "revision": "fda4e4374c82244179fca44a4beb532d"
  },
  {
    "url": "assets/js/223.3e17e6c4.js",
    "revision": "2685ea3d091bc9c1e352b049bdd661ae"
  },
  {
    "url": "assets/js/224.63b2a43a.js",
    "revision": "13283524a95dbe94773fa7cb0418acf0"
  },
  {
    "url": "assets/js/225.cf27750c.js",
    "revision": "9e848fe318abf3a6bb6e12aa042c1ef7"
  },
  {
    "url": "assets/js/226.c525e349.js",
    "revision": "0fe70ab3a3782907776b5c05615afd57"
  },
  {
    "url": "assets/js/227.e7583e56.js",
    "revision": "f1abb44a7fc38fac23c3a3772fa861f2"
  },
  {
    "url": "assets/js/228.0a5a5d28.js",
    "revision": "e584608b4d83a03aa94fa4fdbe48c866"
  },
  {
    "url": "assets/js/229.b07aa23b.js",
    "revision": "c8e0a50a2a9bac771750424e5e95d6b1"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.dbd22283.js",
    "revision": "cdb5c06562baf76e0bcb668dfd23ce4c"
  },
  {
    "url": "assets/js/231.dbd85eae.js",
    "revision": "9372804ed07ced0d31c78a958169ebba"
  },
  {
    "url": "assets/js/232.653f11e1.js",
    "revision": "e483c87ef40ce74615420172423ce47c"
  },
  {
    "url": "assets/js/233.2b418f4c.js",
    "revision": "5a3bdfdf5f6501c7571266c10aedeb06"
  },
  {
    "url": "assets/js/234.fed876e7.js",
    "revision": "5e7347621e9b7a49e5711395fc73c842"
  },
  {
    "url": "assets/js/235.2ef5e641.js",
    "revision": "e49467c6f881889c9d6e9f22a7ab65df"
  },
  {
    "url": "assets/js/236.3b1a9441.js",
    "revision": "c79b01399fb76ad347dc0e9084a971cb"
  },
  {
    "url": "assets/js/237.57ecb46b.js",
    "revision": "f8c30f316e8608ef8b1fc6a80b04928d"
  },
  {
    "url": "assets/js/238.96bee3bb.js",
    "revision": "c3564033a0fa938373b2446b8177a523"
  },
  {
    "url": "assets/js/239.a7cecc9c.js",
    "revision": "2e1d02e8d9619bd4b85006778f079785"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.6c29aff0.js",
    "revision": "eb891ffc126c5228967feaf10dbb2ae7"
  },
  {
    "url": "assets/js/241.e5272bce.js",
    "revision": "5af08b85415a3926ef91a56224511294"
  },
  {
    "url": "assets/js/242.50dccec9.js",
    "revision": "be13800a3207e2c1910b426cdd575c68"
  },
  {
    "url": "assets/js/243.dd6670d1.js",
    "revision": "504a1b5ee61bc86dff37455529847be0"
  },
  {
    "url": "assets/js/244.29f7cc7e.js",
    "revision": "423cee4b67500cde842bde3c3f42d96f"
  },
  {
    "url": "assets/js/245.26c6c43b.js",
    "revision": "c0f83f456c5bd3068683e7004a3980f4"
  },
  {
    "url": "assets/js/246.d9d343fd.js",
    "revision": "ecd936f191a0c41dbcaeee268f4819b7"
  },
  {
    "url": "assets/js/247.4401b1ca.js",
    "revision": "20537589e7f6d9855297e087a5bdb5d9"
  },
  {
    "url": "assets/js/248.93ed2a3f.js",
    "revision": "723b25a9d9e36e04442ace1aa027325e"
  },
  {
    "url": "assets/js/249.062463c3.js",
    "revision": "bb81eb043b42df1518392dfff551c909"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.7062c201.js",
    "revision": "1ef14ef796afc5562186a95d5c7baeee"
  },
  {
    "url": "assets/js/251.48c4349b.js",
    "revision": "847c10780726529b51af69730a018cda"
  },
  {
    "url": "assets/js/252.ee888b60.js",
    "revision": "51d1834564a1bcacb291b77056f6ddaa"
  },
  {
    "url": "assets/js/253.b0b28c1c.js",
    "revision": "ed145540884695aa00efe1fc53f29fc8"
  },
  {
    "url": "assets/js/254.c97bd5ae.js",
    "revision": "c69a92f5885251cf5a2ebf7b881c4116"
  },
  {
    "url": "assets/js/255.4cc9c8b5.js",
    "revision": "6325a53d8a4646f11801abcdf2e5d0f8"
  },
  {
    "url": "assets/js/256.e24567c3.js",
    "revision": "c6bb464920da0e54b14078edf51a340b"
  },
  {
    "url": "assets/js/257.df8ebe5a.js",
    "revision": "cffff2632ae9c8df8ecb10c96f04a30e"
  },
  {
    "url": "assets/js/258.cdf8e7ec.js",
    "revision": "f177f1e144fac788861d0631c762ad9b"
  },
  {
    "url": "assets/js/259.8c136693.js",
    "revision": "9721ddcbc8538560edb78946e15e79aa"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.df8788f2.js",
    "revision": "d161a5984ec1d4a667336d367950738b"
  },
  {
    "url": "assets/js/261.8d7f9f70.js",
    "revision": "2af2109d477e6465852af5c6c5d22c93"
  },
  {
    "url": "assets/js/262.ea93757a.js",
    "revision": "815c5d9cf04bf0f51032ff1e35e75785"
  },
  {
    "url": "assets/js/263.ae34e37c.js",
    "revision": "4704e24e4a61c77cebc48eeaa860d54d"
  },
  {
    "url": "assets/js/264.10e12bb4.js",
    "revision": "a6e6d70f552021d765f2c5b2a05a4d3b"
  },
  {
    "url": "assets/js/265.fab43b05.js",
    "revision": "da015c3ffeae2bc49d5e48e7f8cdf975"
  },
  {
    "url": "assets/js/266.50d2fd7e.js",
    "revision": "836087867a72ffb1987c32ae66135390"
  },
  {
    "url": "assets/js/267.33cdd2f5.js",
    "revision": "6e70083b24136f26de0909d65df6cb5d"
  },
  {
    "url": "assets/js/268.41cc1b9d.js",
    "revision": "866e06eb1e41a8a6ce290bf306e17e1a"
  },
  {
    "url": "assets/js/269.f026755c.js",
    "revision": "e8d5315231aa975f7f3f7b53ebd6859e"
  },
  {
    "url": "assets/js/27.827a9ea3.js",
    "revision": "9a122e3175ea9499cf895cf6faf05e3d"
  },
  {
    "url": "assets/js/270.1596b50e.js",
    "revision": "e5f2c0194c3cb6fe81b4320c2006518c"
  },
  {
    "url": "assets/js/271.cbd4b8c1.js",
    "revision": "c15bbe4a17cd203a5232184d90f91139"
  },
  {
    "url": "assets/js/272.c57338df.js",
    "revision": "c25b55a882e124957d6e0f49dcbacf4c"
  },
  {
    "url": "assets/js/273.bf067444.js",
    "revision": "7436603729b676946bea60225be574df"
  },
  {
    "url": "assets/js/274.f472272b.js",
    "revision": "22fb0b3d734bb4dc640fda5ac62a69e6"
  },
  {
    "url": "assets/js/275.fba264fa.js",
    "revision": "3bb2a410e33f056071bb4e6a63b94b17"
  },
  {
    "url": "assets/js/276.9f2e1c77.js",
    "revision": "53ede603b7dbfcda5da05f78211bb095"
  },
  {
    "url": "assets/js/277.803223ae.js",
    "revision": "6e8b7c6f9f62a26bdd4feca745759819"
  },
  {
    "url": "assets/js/278.477fc5fe.js",
    "revision": "8c543cab6f404e92bb13365722847ba9"
  },
  {
    "url": "assets/js/28.fc94cc95.js",
    "revision": "1b4a6727356e489516019b3ed91842b8"
  },
  {
    "url": "assets/js/29.3f14bee9.js",
    "revision": "6eae4a8b0fa2fb5bbc00e054a913e487"
  },
  {
    "url": "assets/js/30.f64b4acb.js",
    "revision": "86aacfb8404d5fc293118c6dc45e7b8d"
  },
  {
    "url": "assets/js/31.4ce2a643.js",
    "revision": "efb66e197a3dbbf041823521cff85bfb"
  },
  {
    "url": "assets/js/32.df9d9187.js",
    "revision": "3be19c04043e5641c3eb486fc1e7fd44"
  },
  {
    "url": "assets/js/33.aca4d88f.js",
    "revision": "2bc431d863b5e7202a7fa730eafccfb3"
  },
  {
    "url": "assets/js/34.d2a3d2ff.js",
    "revision": "c843e16b1f81cb784bd8b3847552a791"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.d661a1d4.js",
    "revision": "d7ece8ac2220876dfe52b31c085e85f1"
  },
  {
    "url": "assets/js/37.511e77d4.js",
    "revision": "a601936a06d8493a20e186baf495f1bf"
  },
  {
    "url": "assets/js/38.e7010906.js",
    "revision": "bf9dd04b928f9c64b4889a78f7f68a62"
  },
  {
    "url": "assets/js/39.7c2c6898.js",
    "revision": "b04b35f74a31e2c656081cf5f39460fc"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.d4ae91b4.js",
    "revision": "503ca352e824c97b960072e5d873587c"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.60bba6d1.js",
    "revision": "99cb8003bab493d8ef40b1539fe51d42"
  },
  {
    "url": "assets/js/43.47aeef75.js",
    "revision": "7c13343340425b4a1ffc1c8a37bd97c6"
  },
  {
    "url": "assets/js/44.496df8f6.js",
    "revision": "ba89d8cf74746c40076c7105921375d3"
  },
  {
    "url": "assets/js/45.fc37439d.js",
    "revision": "e7cbb2ed61bfdb6c2cb40c59178fb487"
  },
  {
    "url": "assets/js/46.041af430.js",
    "revision": "a65e607314022e649794cd5f64db99f6"
  },
  {
    "url": "assets/js/47.8808044c.js",
    "revision": "83d7b49dacb0bf461d4a69f4eeb8daaf"
  },
  {
    "url": "assets/js/48.a2e61fc0.js",
    "revision": "898a49ca734b3a33ee9f1112e4681b48"
  },
  {
    "url": "assets/js/49.436504e0.js",
    "revision": "180aaa90e54cb8c1a29bd2d98b935d27"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.ecee4d97.js",
    "revision": "f38f60924f6e019351c0cc0b36c6c988"
  },
  {
    "url": "assets/js/51.17b67b59.js",
    "revision": "1f0104054fad0dda412d6b734d29977f"
  },
  {
    "url": "assets/js/52.fb1f4527.js",
    "revision": "8d1fd57f884bb0bd23a99ccce966e29d"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.62ff6c48.js",
    "revision": "3873751d5564d74670112deaff47fabc"
  },
  {
    "url": "assets/js/55.6f34170a.js",
    "revision": "1715db38936a0d735a933cf4ea63db47"
  },
  {
    "url": "assets/js/56.1b768cf3.js",
    "revision": "52cc19ee33a0d18ba1b66f410cf68d16"
  },
  {
    "url": "assets/js/57.5f186de4.js",
    "revision": "bdf4f390520cf24e33a806981f7450c1"
  },
  {
    "url": "assets/js/58.4c7c9ef8.js",
    "revision": "671866894ddb89a648eefd55ca0417be"
  },
  {
    "url": "assets/js/59.936f4c2e.js",
    "revision": "ca012df874eeb1a5506cf9e1a4673db3"
  },
  {
    "url": "assets/js/6.9329e00d.js",
    "revision": "8ce97f156f3a1697e4bdb28395bda84a"
  },
  {
    "url": "assets/js/60.2f36c42e.js",
    "revision": "01404cca5be0abacc2a5095ea20146ec"
  },
  {
    "url": "assets/js/61.bae0851f.js",
    "revision": "edc6dbc9e894c9a309d7664526ab15b2"
  },
  {
    "url": "assets/js/62.65001b7c.js",
    "revision": "87cbb99930453617343df2a63e53bf29"
  },
  {
    "url": "assets/js/63.364ce22a.js",
    "revision": "b46fab7e24bf8d08e70260c7db75a510"
  },
  {
    "url": "assets/js/64.92ca7de0.js",
    "revision": "894ed0738cb6fe50ad6dec4fb944f071"
  },
  {
    "url": "assets/js/65.14f8de47.js",
    "revision": "a1e9bc10be1cbe3eaded1ab757062e7f"
  },
  {
    "url": "assets/js/66.7ac6444f.js",
    "revision": "d72d08b925c7abd1d881bfb7184e89ca"
  },
  {
    "url": "assets/js/67.064cf1e1.js",
    "revision": "1faa284ba538c45cf51866e675431c20"
  },
  {
    "url": "assets/js/68.92904f15.js",
    "revision": "9ae47dc5c77be9dc06f5ef17ce4ee8c8"
  },
  {
    "url": "assets/js/69.09c48e83.js",
    "revision": "108eeed855305b649b54b2b2862ff198"
  },
  {
    "url": "assets/js/7.3defe02f.js",
    "revision": "d5cb8446c258e8c108a9be4a8183e381"
  },
  {
    "url": "assets/js/70.b060ff9e.js",
    "revision": "916ac59cbb10528402576c690be344ba"
  },
  {
    "url": "assets/js/71.aab7fd06.js",
    "revision": "54100e1516afa5f1368b1188bde2d4da"
  },
  {
    "url": "assets/js/72.b759eef2.js",
    "revision": "c498d1eaa6480b70f4655981b059f1c7"
  },
  {
    "url": "assets/js/73.f8cc5b73.js",
    "revision": "62d7a18f6b7d156767d8d54b700f1e88"
  },
  {
    "url": "assets/js/74.4e638b2c.js",
    "revision": "77a9325d5a9588539b638fd09174fe8a"
  },
  {
    "url": "assets/js/75.c4530927.js",
    "revision": "4475ad73691f99daa60857994b45a607"
  },
  {
    "url": "assets/js/76.866192fc.js",
    "revision": "05efa6e85fbe3cf08fb060f2c8187880"
  },
  {
    "url": "assets/js/77.795b5b8a.js",
    "revision": "b110aa5c6bb187814f2c1de4264e8bad"
  },
  {
    "url": "assets/js/78.f0d3acd1.js",
    "revision": "7680eb94846923dc172833c26dd6d639"
  },
  {
    "url": "assets/js/79.03d8460b.js",
    "revision": "62f0335e9d97a5092268161b86f209f5"
  },
  {
    "url": "assets/js/8.321f929e.js",
    "revision": "8089ae2cb60c42b9376220351e563b77"
  },
  {
    "url": "assets/js/80.73193e20.js",
    "revision": "4bb90c700beb89043df7acd04e0daadc"
  },
  {
    "url": "assets/js/81.5dd17bf7.js",
    "revision": "aae0ce75a696f6b52ee76e31a4214d56"
  },
  {
    "url": "assets/js/82.bb6d9443.js",
    "revision": "d602b342653b4c549eada629cc698c88"
  },
  {
    "url": "assets/js/83.fba68469.js",
    "revision": "eeb3cc8108da18a904ecc67bb2bed00c"
  },
  {
    "url": "assets/js/84.834aab2b.js",
    "revision": "6762b9f3ecf8ebeb6de3720d3907c41c"
  },
  {
    "url": "assets/js/85.275ce1ec.js",
    "revision": "0920b9d182472161cdd292ade591e8e8"
  },
  {
    "url": "assets/js/86.a41f8c65.js",
    "revision": "a25da6635d56577aba0c9c3e06b0e856"
  },
  {
    "url": "assets/js/87.1a80099d.js",
    "revision": "632f74086b11313369b8ed84029e78d0"
  },
  {
    "url": "assets/js/88.adc30bfb.js",
    "revision": "2863a0424fc3e3ab101e900d4ffc382f"
  },
  {
    "url": "assets/js/89.10ff9007.js",
    "revision": "dc37dfe83cb6a3591f539afb969bd944"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.8fe07dac.js",
    "revision": "b8e1bca7ef49eace43ac9acc30e6c792"
  },
  {
    "url": "assets/js/91.810193bc.js",
    "revision": "e255732e4a3b810f8f627f15a0b0f4af"
  },
  {
    "url": "assets/js/92.b4e5b4c3.js",
    "revision": "4f50c70ef8bef0681d87ff0f5ec74ae2"
  },
  {
    "url": "assets/js/93.f7472136.js",
    "revision": "4d3e35e077338bde837a233ad4e65086"
  },
  {
    "url": "assets/js/94.34a863f1.js",
    "revision": "6fda567516c7935f6943c8ca08e9bdee"
  },
  {
    "url": "assets/js/95.5e003bbe.js",
    "revision": "bde5a20ccef594c6aef6ee05f43e62ae"
  },
  {
    "url": "assets/js/96.7f2ef601.js",
    "revision": "2f9d948652925bd0293af1de0d602c18"
  },
  {
    "url": "assets/js/97.84372dfa.js",
    "revision": "7e80d96f4e1bfad4905fbfabfec583f0"
  },
  {
    "url": "assets/js/98.7d9459c6.js",
    "revision": "a00b363c0ba372e188596efebbdd9fb9"
  },
  {
    "url": "assets/js/99.3876449f.js",
    "revision": "3a8989c1430f220e5a273f52bad862df"
  },
  {
    "url": "assets/js/app.ae66639b.js",
    "revision": "40f79c09b04e4c4e69e7d4e8d3d113fe"
  },
  {
    "url": "assets/js/vendors~flowchart.cd0cfe9a.js",
    "revision": "b3af5997e713cab07832a64b4cd1f3ae"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c3ce123a6d1ad64285f60facee61982a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ffe4f28bfb50a1f46767348bf35c7c81"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "dbca6b3586fc93019f6425f809e4bbb5"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "641dd7159334cbe4aefb0bda39e518da"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ce1bf782061bf7cf0b2308c1811bc89f"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c64d97c997872735f08a5cf50f16567e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4bd2dc935a8d88fb49ccb978b8f375b4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1ba62f9a4c5d9e4c34140f377b4b788a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "265b93ef1335d03f859f7c3d3e6afd83"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "69ceb36c2792830a600b075d887024e2"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d543b398820816636fd194d1dbc06465"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d0efee76b63d280c9f255ced5af8ec71"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "84331193cbe2a8d4163289f9a4ec40fd"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "959af658804bf29daf32e4b8c2c0d279"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0e52b1df920014919f59772be846236b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "b804a61d1a08da57198a9ce416d6a641"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "23400534d937e270c437ab8b80ea5299"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b6116af69d744eec069ab585960d0852"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e60e22d324b6bd8d1e34b6061fa4b58d"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "cac6c87c47201831b93a77e48967896f"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "fd8ab5778a620dc88626da384c88244d"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "cfd35f839eb84ae451a7fef425da492d"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "7fdcd0df646761f2f31a3a4c47adcd4d"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "e5f233da4d216a432a30f0be1a5635af"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e660a5f04389c7fdfa53baafff33661d"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "6da35cfc6de2f254aa629656a6afd12d"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "30baedac8dc18c7bec8845422fcaaad7"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "a5edaf2352aa8f87fedb0437dd1c10dd"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "9157bfab7f6110caad062655f50be742"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "860c73e3132ef96dabc3bdc496324374"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "466c99e2d4fc1fb41185ebedccb2c479"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "a46735f79bddd4159942bff6b3d1f0c9"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "0ee56c46faf7149e57595c0c3fa68033"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "8e7552b3a1d7d684e7a3807607cdd8df"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "44147b3c7a334c43e4b207eb8a2f583d"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "a6469d93e366976608b64aca3b0a1881"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "d413db594d820410a04ec9f4abbe6c3d"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "1e4d85426870a6f22ac723e7944d78d8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "3a171dbc8a2bb241aa328030820a684b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "78c0a74b4abf75c56a08cca2c7c082a8"
  },
  {
    "url": "book/index.html",
    "revision": "64924bc311847047701796e8dfd91f79"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c0b5c248b678fb1853ef1a108b033f3e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "0c8b54ca11a7c7c628d3ba2631a1b2ec"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ea5bf9a4ef820ec897050aee76b4f69a"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e671cfd2debd395b40bcf6f7dc3a94cc"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "c3e99c7e90790794cfcdffaf207db982"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "814fe33ec5c552f1c4ae6fa1005e4cbb"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "e546c357b52043693248a00c87402680"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "1625c1af3f5e0b6903f295a814c74e0f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "2de95798a3f6988f4519e0a92611f599"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "dae53feafe5d71a0cc5a507d86784218"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "490999d46b3e8e519058d70220b43d9b"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "16cf0d237feeddf4861016e243831206"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "744500f8a08749f6807694e6a29eb5bb"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "1af2d0b7c700597612bda4802e5fd8d9"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "ab4da658a4f6c666be2d1446b76f1bba"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "7ea1fb50430ec4606c4d58c3856f35c6"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "c7520d521bcc8c43c7ce9f45dbdcb9cc"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "0b61423a8491b80ee7a3631fba7e375c"
  },
  {
    "url": "c/program/index.html",
    "revision": "4244c96159055b16a41e78b87227810e"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "56729b7fdd87cc67fffcedbdf25fa6a5"
  },
  {
    "url": "categories/index.html",
    "revision": "be36c2f7b1dc094fae4eeef570aed217"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "95dea13fc13d52829907d57f4d51102c"
  },
  {
    "url": "figma/index.html",
    "revision": "a291776248caa336e89eb9e4cbe82420"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "c70c6343e5b27c980776fa5ec3711578"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "61b6636b103593649d10bbd4bd475b75"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "0ee8fbc8a175e9efc6018921364b2048"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "70d80d6fdf16dbc57bcff8418724a583"
  },
  {
    "url": "flutter/index.html",
    "revision": "548f86b03b911e352564736543e88416"
  },
  {
    "url": "flutter/point.html",
    "revision": "b6b53d8d12ce5bebb2c521730f0a5b15"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e7991576b68ba57eb8e8055625dc4a17"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d890884a1c6ce4dbaabd04e1ead10313"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4bdf3d10f7a179c809a3f91554d316e5"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "1fd8b20990f5d56b617c179cd065a529"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "869e1587fab18121eedf9ac9464bd773"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "a3635cf724c9ae21d97fa7b4cff14326"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8b51f52d715b28ff9afb722ed8fc929e"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "23e3ea3f41dc86462f1ded178ed2c115"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e224421170269f1e1e459667feb2ffdb"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "85c8e40aaac713b9c7a3d78e29374383"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a2a3837838560462ea63f96e55c992c6"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "b274f0c77523b8a17329aff1be2a86b5"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "8f4b997db40e1f766a5930166b35eca4"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "04d75a41d7c6c18ed3392f351160c6b2"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "fe4212f2e1480e9225c73f8a9c255010"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "e1076c197d8ccc88c5bf897a524f6849"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "badd4bb284382b9dc9e18a1e12f539d3"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "1b75df6465a3293786120a04b6ab3d3b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "fb06034f47d9d4070916da24754ba3de"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "7ec62f390cf493e9f17c559c93ef044d"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "c6f2a0e828f690b36f65d518601a51c4"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "dd233c1714ec278d16d350190a757c08"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "0faedd483621e9d8b0f3ba0521591890"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "85b4e1326ed37503329003067b69094a"
  },
  {
    "url": "haskell/index.html",
    "revision": "a6ed81f67d14a0858acdbfff92a0d0af"
  },
  {
    "url": "index.html",
    "revision": "1cf259250a0318857b709874683711ed"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fea6da2c9bef28883671d5cfda1095bc"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ee92d55dba982c3fdba824be8b80582d"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "9834ee3601a883856637e028e835747d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e308576b114d5ee08ef1504c9465759d"
  },
  {
    "url": "python/index.html",
    "revision": "930f353d136426e237d17466a3e81c5a"
  },
  {
    "url": "python/python-ase.html",
    "revision": "94d9a883a5fc36d63075c3b54620414c"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "99dfd4e25d358142549be8d8c6576848"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "f57e40b267df2bce96d3b6ec09c40867"
  },
  {
    "url": "python/python-file.html",
    "revision": "507954efad9005e7226f33c566ac447b"
  },
  {
    "url": "python/python-function.html",
    "revision": "8278cbdbead1c630c219dbc4b530eb34"
  },
  {
    "url": "python/python-generator.html",
    "revision": "0bd1c90d2b1293fe1578e6380c8320b3"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "cb209f8ba41de9fe7aa0577d330ae69e"
  },
  {
    "url": "python/python-module.html",
    "revision": "f09d4b3d2c9101ae75106754e92749bd"
  },
  {
    "url": "python/python-string.html",
    "revision": "359bf5cedb31cd95c4b4f02a8b8ee2c7"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "1918c9b7a2928bf4405e4b345c3b9cb0"
  },
  {
    "url": "read/index.html",
    "revision": "330279b7db538540be3060781cc4448e"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e56f1ae07a4d2869141ea7a47f6876e0"
  },
  {
    "url": "swift/better/available.html",
    "revision": "9d72d58e70fbd820024717be4cfc2935"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "6e9c3adf70316de560ec0696012594b7"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "aa4f87ab320d658e788c78fc176486a5"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "bf17326043a03676054a8383d692c3cc"
  },
  {
    "url": "swift/better/di.html",
    "revision": "bdf766cbba77c2f29cf2b54a7cc7ed00"
  },
  {
    "url": "swift/better/index.html",
    "revision": "8673ec3f188f1bc6f8afe49f7e27ef9e"
  },
  {
    "url": "swift/better/last.html",
    "revision": "a259e8fb3941650be46eac297f6dc177"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "08334e81c5be94148374b699b906336f"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f5ef8cefd9f0f15489910b8ef925f886"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "481b96ce7b76a63748317c1388d7d582"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8c9ed41fb8587eb367d03109dfe7de3e"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "40e731fe0053a35a44d85323083fa66a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "5670b5d0f7dc2fe757e23aca1c698fe3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "810d11ed39cb1792502b836e8f9293c2"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "005b828ae6938e1de26dd336b7140388"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "f333d5c2c6f2c5e7ed19cf23432224d4"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "fb0b8a250ad613ed01fcea3582c54552"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e24c9523628886eecb492a74f7140ea4"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6838c278c9ba2dc984966ecfb5dcaa90"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "620a3c1713e78f11e331ddbf5d5eb8e7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "7e17e20d4def34073f6c1111df6be2f4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9e7393a45a35afb1898f781bbd913370"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b1639db30f53d5b52b289b4555e8fc7a"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "c976c78bd0333d02c5ee2a2fbf1b4039"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "57df7792d2600875e188a8d5862e64df"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "63783f62dcb9b10db26b46f90b03d79a"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "362762f34f02a51e6b90cf007202fc7b"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "2caad8345566f629f6fdbd5b0f17e83a"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "55c2fd6460add52994c29ba73fb09f1b"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "65269a6f56be2fd1d99e2be7a259f249"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "4514f349cbf9cf5f7e9323adf22c9749"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "3ec81c3a61b55a1ddafd68cb36f797cc"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "d44ed524f277ce5e3eb5b1e1afd50d85"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "14e474aa95a08059ad08b2e2e2d773b6"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "16f47934f25e78c4c847a526c2e7b37e"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "5d381243da4260c3b41dd44e805dd260"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "b54651d416d4ce8b61e3c86aa971d058"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "fb6c9d879f53d5a18e95f5607968715c"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "92dcb347f4e827b10ec747dac94d713f"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "42a34523091d55691eb504c752fd741d"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "52a6052246c4e1b1bf43480442e0cfd6"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "e46934dc62ebdbba75e78a433cbc7d7b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9e8672f3455b5dce98db635025ca1570"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "6a2dbb5561649507b82e07b76d7e3ec4"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "b89dfc60271d37bc802d76446a768f0a"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "61209fd6b632f21d9725d318430e9b5e"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "aa0030fbf522fcc99d1027b210d5fbfe"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a683b9f5c5538bc34b417ae4ce22d13e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "9b56f627df93d8dc09582d8ea0275bcd"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "98f634c2851e8aabd23ed1d6ee56f3e1"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "3c53a089c1c9fbc32c9f4ce533f478b5"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "02487cd523713fe44ff315314c31dc74"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "c0b93647d4913e7038b2579192f54351"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f3e393abde59c521bbc1576985690704"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e73e09fd05107728e5330da904c1dd51"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "dbbee6a56637a505a7f11a47b3338405"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1fa3f5abaf3c954db2b87064fb7c6d02"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "35049bc472b4936318c46d36343ddcfd"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c6bcb79a3465f91b5c4e2b1daba9e7fe"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e43a4ea915203407bd366c02d93ab284"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "9abe64ceed4f82ea08373d4e9ee681ab"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "3eb4cf94c49a5963a58b9a86d35759b6"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a8834b4e53c36b35e6ab5132230c9f69"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "660e99c3d3e83660116b106cd603dc22"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "5c2fb9d662618fce9ec741d78f93fd82"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "3fb471838d13744b58f27d13355782f9"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "15590266bf03b7e11cd02e4a2019f6a2"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "8de400b3fada6f38818380b7bac94b17"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "125831f92aaf014b0b58b4c79079edf7"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "4c686b1a55086ce23f52ee6fc458f16e"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "d558fecb7176820ac26b8f88ff0bc63c"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "6ec64ad04645323d44864b1455daa9c2"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "bf033dcb21b25c208f381f6fa85445e1"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b818876c09f0999c433537219c8e2790"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "5b504e969e08303e68b9708e876bc8c6"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "dcadb70e071a6124e8624ee958e2dd50"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "a93a4006fe6e59a2cbc4a95bc9197b3f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "5f2a57f57dcbed784f59ff3a1c8b8ded"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "3cde9f9e33cd6eea17cde8887753442c"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "5e7a2d72d204c78017802176ae69e44f"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "bd2ade5061eeb712a4233c6be940e820"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6580ad10d1c87ffeb1488821a8ba91c9"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "aad6a2a99564642ba01413ff1be450b5"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "188d32e372c1063c5e0b6d5334f7616c"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "749a6482081c754fdc4051802b9a4f8b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0887d215934b5c87ecd81e101d7d2363"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "565ec956e6a4e40041b61610252e69f5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c5629902f34590cebda56edaf37e8e85"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "d0cb303344ed914d307a09a18eb54ee9"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "8296f83d1310731b028288afe2a20976"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "32ce324d08f216d3048d804a6da4a141"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "aca6f91fc53287d737dfd3c37a8e08d3"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "06db6dd3405650ccb7bb95e9a5d86779"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "aeb49ca65723695a3ec6deeb79af250b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "49798a0d440a0bbf92eafe04a27a09d7"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "4c97a4d574de0c489145d657c5061dc4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2b9e3088facd5f8a08e24666b0fe2839"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a5c772b811f9e2a12548c1444d5450d6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "3dbc508e0de4b37f6405d2d76a1850b8"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "809ced3c9a2a563f6bed949526047b55"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "fc298d27f6e17a1839050edb82b2f048"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "46f3b32f1c4a4df602ef5733bff55f3e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "a62c97e97ff937c344021a34b04684e4"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "296e8ab3f46347a06dc6d8af5391635d"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "1344ab0f618d52fd4685ebcf92246852"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3a20fa246e5c40a28314cfbf52c82130"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3fc4b1990d752cb92bce608d6c2cd25d"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "7e6e369a4ae164af444a43d10a0bd9a2"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "c722362f01d03e6ab81501bd076d6be7"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e50381a00b3a23072c13184b72f3b4c1"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "4ea3c86a066f37c3bb221dd5da474bde"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "425d2f16c3f478ac1d4b9fe207d53029"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0746f9053202deede47398aa0bd0e93e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "69a3bf8d95d0d737dd0a2b6ffdbaf224"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "309223889d5d085d30d9692bc6a6ec6b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7b33f3a3a7882103eec02cb676762d5b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b063430cef05156b390eb86e7390e14b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ad7f50ee984aa521f757ce1b3f2bb362"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "bcfa33cfa58b1be6854f9860f5abefa2"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "fde07a4d7ea3cf8110391399b49d4a9e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "72275193f0fd90eb73af6890b04b3b36"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d01fe3d27f0ac86d5fa84da0f643fe51"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a9da306fe98fd355295600351f0908d8"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "af2ba43da7371c2ba9c46fd86f0f3ae6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "53a7cbe35ea10c785f843a8642eaf95d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "34312e720631f05be7ee37a2367e9869"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "595b10a320aeb37fec446fd1dec64aaa"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e8a18fa3eee9ab11b356be390e5755c9"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "76830b47af916acc92b6d26488be9c7f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "69ae7216134c54c5c628af48be606023"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "82b4bfe33d93f9ce6d40bc41247e3f00"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "3568cdda8a04455c1cb3e456f1ca683e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "84ce70a0208bf387caebeeed8c508354"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "067aaa8e504b270dad25ae5be288970f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e20794eb6b405cfe930c8a81d2ea233c"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "28dc4d9510a629d38cb5d6ea9244b32d"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ecc3b9ae42e67369357ddd626c25a8f7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d7d321f47b7ae6a6db2ceaf329bb985b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0657d243929900175c8915089f37554e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d43df1daca48876d6e8a14584666d3b7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "675f4dececba42b18802821beaaf388e"
  },
  {
    "url": "tag/index.html",
    "revision": "d789cdd756c8715ed7b62a896b638fdc"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f716083f649f893e54175f47662f24a0"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "86667d31192f8a4cf5df6af569eba24e"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "811e66a3cba8dae45c905548262b2eb5"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "c4da7c9943ca348473df3e6ac0e38eea"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "251fbca05360a4bd1d6c3780e458c053"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "35db379bd5463babaf661b3330e974c9"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ccbfaff6ef10de4785e80fb6bb6b5771"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "e0395e2048d2e2f8ec1e588a99e88fc4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "07917d9d0a534d605a13a7d915b37cc8"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "5f1863fa2fff897b69a6ac4a2be2441e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "241f949566b7fdd77f15f728253f925d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "4955fc938200f4f6c92183323c2dd360"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "6d9a4253e0071ee31211b5b064407a4d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "93e5a8b659d4efabd546b56332f0b9c2"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "02d4a19d24e4dbcf558ed4f57a0df1fc"
  },
  {
    "url": "tag/read/index.html",
    "revision": "4a351bdf83b6a868bdd3723ab2c69fb2"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "57e6bad77af9ca08c0a01768b40d6211"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8b9877d1b8235f911b5e8701c67c09c8"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ae40793368ef78ac5510838c47f51095"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "7a47d4dc681ba8331ec0e63290919887"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "70f86736895023d4a6fcbdd57b7fc21c"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "8815b59afcba5b923eaed81344d8c1a6"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "32873548c4aa1edef68a4556811a3740"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "db391f6d29e8b01c76b8d2476999a7b9"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "e0e12abe10da5b5efe94e9ce552f14ff"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e3076aa1ff9ff4eb11655545e4ca7add"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "1dbc9c0efb0fd33a78bbe64299aedd83"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f301bb5c0fb639335285ac42ac4de14e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "4639b4f91c0942988c59ccd4d2422861"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "c5722c8c3b3137776b4a90f0107df2d4"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "779e935ab4595cb249ce0a2be81070bd"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "5624d3140f6b35ab2bb2580804e0a8c2"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "423256abd4c737cc3418ffea15784469"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "f35ae11a938ca5e9e59d2377109a923e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "64c96dcb858f7b7f86e1895cbea3c214"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a5f6cac201d759048b8a62e4fca0acba"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7c113b50f8f65d85ccb80e3ceb6932d3"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "d2a75f9d72585bdc28c841e795a31556"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "a4c6d67999673833c3014e5e2cc2c8e4"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "f4ed46262e8ec93a052da10860fc62c2"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "6762acc2f820b3f974e1bd8fd034aab6"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8d055f43a9bde7eddf74e5d68aa605a6"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b799fef6982a1b86fe70ef138281cb51"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "7bde9499c328695a43fca414983044f6"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a1d221920747c417cf8176540236f6ac"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2b1c99c8e05b7dc96d8a5d0aa288c661"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "100ad5b6f7844a6cbbb9b5fa604a6c2c"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "5cfc100a3d998dedfce59bb5e4bfb7b8"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "788b084c37d98dc9820cfc187d65cb85"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "a5064bd07a2f2ad20e43e349741fa16c"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "0362ff8ceb2ddd603ef7c600a89eeb53"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3a351ab45706cfa385901d92e94914a1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "8b5b351c14cb9490d08c0e5974a0c9bf"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cb34c04519eb6bfc02f8b7832d1ccfbb"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d41460f9158e870fa90c94e61d75e3de"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "5b197347a378a671a7babfd692ce22e3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1305bbb8359e6b395ad18a9e6c3f522c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "731b0f330a7ba085b35f0107ce8a002c"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f0faadda9c0faf327d296cb5fbab0885"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "136b0fdc851a8f6d86db6c478c3dd611"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2e062f9fd4267ad99966ce214b5e8104"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "220dc1f36bd71881dc0061da57058112"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a74bfb868f87916dff04aa5f4b320ba8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8085492bacb24a40eca5d2fc3d064410"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "477cb6c264be399c4e6c1d48b8909540"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "26298b1ad9ea03cbc963675865036075"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "dd3b1e2d17f26932928a1d4724ec9b53"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "6ccdfeec66400caab05f1cfefc2731de"
  },
  {
    "url": "timeline/index.html",
    "revision": "0d516bbdb9f763ef2f19e32516bc3b39"
  },
  {
    "url": "tools/docsify.html",
    "revision": "67d91767fad00be31a3b4fe081c52508"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "ac0a7ed39f546b24c838dc89572348e1"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "d14de26e78622f1839b331f0905a3415"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "927cb24a0ee41da7abdbb5e8a40a3ff8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "48561b24115668698d5570993c293593"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "815f88cb7ed431009c107f327fb44be5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "25c170e1f591aeb97ecdad142ce4e5d9"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a5d9ade45dfb1d6d693d45927e7e2384"
  },
  {
    "url": "tools/note/index.html",
    "revision": "bf507484e87393756abf866a1b4c7ffd"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "23032d74b472512d5cdaa155d2a8fe94"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ddbc40940f5501768e5ca0efa47d6896"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "559f3f58b63ae2791a97ba2182ee14c7"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f653dc8fb16b79c45febbd6f5d159cf1"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "748ae40d865b1780fd2abb326c0b7eeb"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c832e90f11bfdf35d5bbb21de5059dfc"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "25fe349499be70ae7fca249f7f6f2b28"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8ed34eafa41c51ccd458029c074206c3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "631c34cac0d4868c55df6dd8eecd68e8"
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
