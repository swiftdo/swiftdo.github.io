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
    "revision": "b8bfa81fba2099f852dda0f449269efa"
  },
  {
    "url": "about/app/index.html",
    "revision": "bbb55f7aeb2dedf94e6efdea5d2761a4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1ddc6bb3e8ad0579855789eac02cc5b2"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9f648c453a583666f221e92136851ae8"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f537b57dd99c2926d010afd2a2331dba"
  },
  {
    "url": "about/index/index.html",
    "revision": "8acee900395b224635aa76348aab7fb6"
  },
  {
    "url": "ai/index.html",
    "revision": "c84a7b470e86fb05d36bd0f049b41cbb"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "bad860049f1fea8dfe068150348a3d8b"
  },
  {
    "url": "algorithms/index.html",
    "revision": "4ee824c7bbcdc627997d3e35d4b3532f"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "473f6f180412025d513e15d642e434d8"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "905e288bf36f98ff2ab08999f6a8a22d"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "5f6a9e0351991b349ea8c9f2bc20b934"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "b70de2f6dba6ead6d5985685c821940d"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "865de41b4eee36663140fa6dea23e862"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "68e0678c1a1ec8d035294f276b358ab6"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "9c69a6c7e6d68067caae73cd85e5f1d9"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "e176088580900efb5a0ba2da8677087a"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "2e3e88a8df1aeda94469fcde6d56a92c"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "873d1025f4ff8eaec36c2f9bd6f4de9c"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.d9e8d7f7.js",
    "revision": "d9b876d22de3112628e72b43cebd9ec7"
  },
  {
    "url": "assets/js/101.f835813a.js",
    "revision": "11a53a8c50ec5efe1dea4138fc24094d"
  },
  {
    "url": "assets/js/102.2ef8fd4e.js",
    "revision": "943cd3d9835b0f3c66b5b1ea8c20604f"
  },
  {
    "url": "assets/js/103.4a175a29.js",
    "revision": "c34db4e5831bfbe73f3c12a27e210589"
  },
  {
    "url": "assets/js/104.348a74bd.js",
    "revision": "e82ffbc74e809311e473ef4d79e49807"
  },
  {
    "url": "assets/js/105.0c26851b.js",
    "revision": "1a88b7bcd62b2456c4c04df71830fae7"
  },
  {
    "url": "assets/js/106.27902184.js",
    "revision": "48b8a2679d00db65440c9303922a8402"
  },
  {
    "url": "assets/js/107.f91be472.js",
    "revision": "ef46e6412587284b7c6da92aacd70c61"
  },
  {
    "url": "assets/js/108.06d95523.js",
    "revision": "836446c636dac225e1cde3fd4d65ed5c"
  },
  {
    "url": "assets/js/109.10769b1d.js",
    "revision": "cebd50a10c92308f1d8a4f7671934052"
  },
  {
    "url": "assets/js/110.0e9132e1.js",
    "revision": "b50fc48597e9a5706dcae28baf4d873b"
  },
  {
    "url": "assets/js/111.70438c7b.js",
    "revision": "71835e80a59dff426fa928b61e6c9ca3"
  },
  {
    "url": "assets/js/112.e07df9e9.js",
    "revision": "b08ceadbaf0f1a2c4656f2ac25c0efa9"
  },
  {
    "url": "assets/js/113.8ec66faf.js",
    "revision": "6b5b465cd343476a69fc9892fe2d016e"
  },
  {
    "url": "assets/js/114.4b2ff682.js",
    "revision": "7183e73093175dcf8c4070cbbc915fed"
  },
  {
    "url": "assets/js/115.03fd99a5.js",
    "revision": "d902c647e2f7cbe72205c66c863bc666"
  },
  {
    "url": "assets/js/116.99d1dc74.js",
    "revision": "e1e6f10d71085b373365d393d3b4fc24"
  },
  {
    "url": "assets/js/117.e9537e85.js",
    "revision": "cb59a81c2cc6e641b05c4f581b6fecf1"
  },
  {
    "url": "assets/js/118.bf37f761.js",
    "revision": "d47fa7d904c5150af78a1db3504d7c34"
  },
  {
    "url": "assets/js/119.cc17a234.js",
    "revision": "b00b49e57b83c261e9e03baf722905ca"
  },
  {
    "url": "assets/js/120.ca57e92b.js",
    "revision": "0e68dd0b8802505854105b3017762913"
  },
  {
    "url": "assets/js/121.529890e9.js",
    "revision": "36835abceb2b2684688df69651b0ae52"
  },
  {
    "url": "assets/js/122.b3eda220.js",
    "revision": "b752fea4e496bc42b532ce8ef70ec649"
  },
  {
    "url": "assets/js/123.9ed712e9.js",
    "revision": "252800faca9bad709d30ca198538e321"
  },
  {
    "url": "assets/js/124.6b531731.js",
    "revision": "987cf6413365fdce8e87a6e23b065191"
  },
  {
    "url": "assets/js/125.bfd817e4.js",
    "revision": "06888b2da8229c6cfbbeae5d12e00244"
  },
  {
    "url": "assets/js/126.f0dfb7bc.js",
    "revision": "82f903f3d2f9a60301738152afa006cd"
  },
  {
    "url": "assets/js/127.a0bd01b0.js",
    "revision": "78acb1f0a6a2a491b0f60d9202118dd9"
  },
  {
    "url": "assets/js/128.7651b7a8.js",
    "revision": "bf084cda263c5ca86ea727eaceaa3a48"
  },
  {
    "url": "assets/js/129.acd17f1a.js",
    "revision": "8cacd22f16c4c1ad5453b96980a5fd15"
  },
  {
    "url": "assets/js/130.0c2a3c6a.js",
    "revision": "63e01b0f7c53a544bb6b4ab3826a5458"
  },
  {
    "url": "assets/js/131.fb171b2c.js",
    "revision": "ea880e173a0542daf8badb7e0c1dc370"
  },
  {
    "url": "assets/js/132.df6dd8e3.js",
    "revision": "17804f968fe476a31c91da209dc04de2"
  },
  {
    "url": "assets/js/133.5477148b.js",
    "revision": "fcb08cc59dbfedde014ccd55b2790625"
  },
  {
    "url": "assets/js/134.9105c609.js",
    "revision": "61ea7ba65e4993e5fde849d4b61597ca"
  },
  {
    "url": "assets/js/135.906de3a5.js",
    "revision": "4e6ac0abefb9befa8d14c866acde4714"
  },
  {
    "url": "assets/js/136.45a5f9be.js",
    "revision": "e07af29d9b3fb69be66f4940d48d703f"
  },
  {
    "url": "assets/js/137.64ff8685.js",
    "revision": "0a66a9693b674a06f6fa7c4fb9bbda29"
  },
  {
    "url": "assets/js/138.c402bf1b.js",
    "revision": "c46da3140ded97dd65d833bd02daf141"
  },
  {
    "url": "assets/js/139.c56c706c.js",
    "revision": "8cbee2a26743d7a5462c1d6b7a3f61c9"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.e3f648b4.js",
    "revision": "23d3c56965e4999484cba88a71972fc6"
  },
  {
    "url": "assets/js/141.f4d52dba.js",
    "revision": "be0a96db8b21af0c471a86be02eafe2e"
  },
  {
    "url": "assets/js/142.57e03dc7.js",
    "revision": "ae8714ac3e5173c591900643e5e51ca5"
  },
  {
    "url": "assets/js/143.3bb0d19c.js",
    "revision": "2d9e14662d720b43c07af3a54aeddc55"
  },
  {
    "url": "assets/js/144.00da381b.js",
    "revision": "aa85a203f26bb7dca5d4510f4fbc0128"
  },
  {
    "url": "assets/js/145.9e92eaf5.js",
    "revision": "2af56151f0bdd155cb91279c1ee4db1e"
  },
  {
    "url": "assets/js/146.462ba096.js",
    "revision": "a07911fc127ba01540e6a454b9772912"
  },
  {
    "url": "assets/js/147.53d4ec01.js",
    "revision": "7f4f96a919e2d4096dfeecb8008a86c8"
  },
  {
    "url": "assets/js/148.673edaf6.js",
    "revision": "cb68e73eb8630f381d4d310163acb113"
  },
  {
    "url": "assets/js/149.fd23fcd2.js",
    "revision": "423cd8966ed34bb95b4b22362b0fd2f0"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.881c8279.js",
    "revision": "05a943d3ac3a4fa80c0584312354ac9b"
  },
  {
    "url": "assets/js/151.9de32b49.js",
    "revision": "2b2af42c1b8fa903575dc550620984dc"
  },
  {
    "url": "assets/js/152.0606762a.js",
    "revision": "8a1d146b00089dad6ef6774c483984a4"
  },
  {
    "url": "assets/js/153.8730d4ae.js",
    "revision": "59a294f83dc842fcf376938977f758e1"
  },
  {
    "url": "assets/js/154.18fc2e7e.js",
    "revision": "4cfc23c4adc75e4b6962b2c8015bd54c"
  },
  {
    "url": "assets/js/155.286cb520.js",
    "revision": "f650b9d1d4b42e81c04ce081abf707e6"
  },
  {
    "url": "assets/js/156.266d21a3.js",
    "revision": "0f743d59dc1a2af51d84d67ed232f774"
  },
  {
    "url": "assets/js/157.5c249246.js",
    "revision": "1401cd9b7c47a90d7d45a1e6d4296d5d"
  },
  {
    "url": "assets/js/158.0da1b8b1.js",
    "revision": "30928963b49dc4b6bc013a8eec872dc4"
  },
  {
    "url": "assets/js/159.8129686f.js",
    "revision": "228ca2a3595617804c6280f1ce8ca3e1"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.7c96555b.js",
    "revision": "9236230b10ff474ebc4a06f484935972"
  },
  {
    "url": "assets/js/161.0099b796.js",
    "revision": "32358823e267477fc19cefb9dbd19085"
  },
  {
    "url": "assets/js/162.f16d05b7.js",
    "revision": "fb81a36f459c5669a64ced22ee8c9f73"
  },
  {
    "url": "assets/js/163.17dc7a57.js",
    "revision": "f5ab80ac190a86cbc071c473e663a1f9"
  },
  {
    "url": "assets/js/164.9e924415.js",
    "revision": "95b481cc0d0d151831c5d0b4d0249a38"
  },
  {
    "url": "assets/js/165.ceb70b2f.js",
    "revision": "30b01bed6b87c5d5a2a9f5f795dfa0b7"
  },
  {
    "url": "assets/js/166.ead7f59d.js",
    "revision": "c730cbfa71ad59129eaf3da8f4d42837"
  },
  {
    "url": "assets/js/167.cedef7e5.js",
    "revision": "1f3d32b7e120edd452213a3641e3c953"
  },
  {
    "url": "assets/js/168.36c46a3a.js",
    "revision": "dc07f62335c2f6d6fa0c452999adb10f"
  },
  {
    "url": "assets/js/169.95333db7.js",
    "revision": "42e332db5bc155c0e0ba07e0da8b9d4d"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.a64aa1c5.js",
    "revision": "ff3b5d7dcacff74b3c6a3c5885226879"
  },
  {
    "url": "assets/js/171.7a196b2d.js",
    "revision": "3b613eccfb798fcd4688a626d24e4989"
  },
  {
    "url": "assets/js/172.33d19a56.js",
    "revision": "7cfa03e59547ea26a645011a3f6ced8d"
  },
  {
    "url": "assets/js/173.d0f634a7.js",
    "revision": "596d5618afa82a85c9534ce8364f86a9"
  },
  {
    "url": "assets/js/174.69ad3a96.js",
    "revision": "e6c069e2913d4c4f1e2ab09e3202f367"
  },
  {
    "url": "assets/js/175.a8f7feb1.js",
    "revision": "73e8d23bf062218f8557a2100adf627c"
  },
  {
    "url": "assets/js/176.909d19ef.js",
    "revision": "58cc7ac5bc8ac131a3ba415f99de9153"
  },
  {
    "url": "assets/js/177.c946a4a5.js",
    "revision": "c078077e200d61e8840cd28a965684a3"
  },
  {
    "url": "assets/js/178.9b353ae0.js",
    "revision": "a2598b701b4965d4d2a3db750db40907"
  },
  {
    "url": "assets/js/179.5506cf06.js",
    "revision": "38600f0ae997c3ef585ff49653599df0"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.fe2cd794.js",
    "revision": "0cbc38ee492dfeff157ad385a7e9c528"
  },
  {
    "url": "assets/js/181.715cda91.js",
    "revision": "6111d011036e70e3880710bc83cb1950"
  },
  {
    "url": "assets/js/182.066cc965.js",
    "revision": "692edb62546cfd70a1ccf2adea9d62e7"
  },
  {
    "url": "assets/js/183.0fb70e8c.js",
    "revision": "f688fc206e5df224a2f8a73ac31db9d5"
  },
  {
    "url": "assets/js/184.47104ffb.js",
    "revision": "6e6086e08f15489cd47f5d45fdf6e972"
  },
  {
    "url": "assets/js/185.70ce06ec.js",
    "revision": "fce6264ff03049726b58b53813549d97"
  },
  {
    "url": "assets/js/186.d69a3a61.js",
    "revision": "106c476249ee23c3b0fb3486b1edb982"
  },
  {
    "url": "assets/js/187.9a846ce3.js",
    "revision": "6b9e2c13b9ec40e169218f9b5b5dbf33"
  },
  {
    "url": "assets/js/188.254bfdfe.js",
    "revision": "6236edc417f0e918c559c5e538b981f6"
  },
  {
    "url": "assets/js/189.f323f5c9.js",
    "revision": "a09a27035fe87fddd2689b1e4ee04690"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.93c4c8e7.js",
    "revision": "72f92f5b5bbc65c8ce5ca576c7343f53"
  },
  {
    "url": "assets/js/191.c3f6ecd2.js",
    "revision": "d5989a00a5e7079b3a4934e3a7fcbcab"
  },
  {
    "url": "assets/js/192.fd00a0b9.js",
    "revision": "98f49ed03abc184468943a4ede716710"
  },
  {
    "url": "assets/js/193.af2c8dac.js",
    "revision": "9a0b7888e8c9cd42ceb9ca8898531230"
  },
  {
    "url": "assets/js/194.c9291083.js",
    "revision": "c9bbac2f5104699b335838ebf6bfbe32"
  },
  {
    "url": "assets/js/195.8e211d44.js",
    "revision": "6440f51c42765b1a9445d6196e97c0f0"
  },
  {
    "url": "assets/js/196.9dac4269.js",
    "revision": "85f347df78f989661a039be91ef9fa30"
  },
  {
    "url": "assets/js/197.329a925d.js",
    "revision": "dfcec208383ef669d8cf8e7714bb69d3"
  },
  {
    "url": "assets/js/198.74b5d58e.js",
    "revision": "908ff238889b252c6fdf4442e8621e5f"
  },
  {
    "url": "assets/js/199.e0e43427.js",
    "revision": "d01b285ae79961d62f9f437973fdb4ec"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.e31d8d6d.js",
    "revision": "be1188dfd18d836e4c0904a7ad82f75a"
  },
  {
    "url": "assets/js/201.b7f8150f.js",
    "revision": "0fb1164b22b0db7bbcae3de6f2e49818"
  },
  {
    "url": "assets/js/202.316a9f27.js",
    "revision": "b6ee551b23aab7516910bf67ea513633"
  },
  {
    "url": "assets/js/203.f998ec01.js",
    "revision": "0e6429dcd9c1fbbb95836b227fc3ab20"
  },
  {
    "url": "assets/js/204.cd165741.js",
    "revision": "21fd5ad06f2fb945f2d1c6a335198057"
  },
  {
    "url": "assets/js/205.2dc9ed03.js",
    "revision": "942396f732a4808c529b5572043ab7ac"
  },
  {
    "url": "assets/js/206.45b82c66.js",
    "revision": "d2db0bb3e9bcc7e281695d1f78ef8105"
  },
  {
    "url": "assets/js/207.0c4ff6da.js",
    "revision": "c265ded1300d744f212045cdf2d3f65f"
  },
  {
    "url": "assets/js/208.bd703a47.js",
    "revision": "da1ba4a76f5213ab2c6e5875a62ec788"
  },
  {
    "url": "assets/js/209.b76b023e.js",
    "revision": "320b617b20ce35d59194f68a9089eea0"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.6e98a841.js",
    "revision": "3daedf5e58e28b72e1c6620be3a11b11"
  },
  {
    "url": "assets/js/211.d929b496.js",
    "revision": "3d14c9e87d99560c20c585da221e8de7"
  },
  {
    "url": "assets/js/212.91f4f4bf.js",
    "revision": "4ea627ec599a2e542707ec5446d98248"
  },
  {
    "url": "assets/js/213.075066ce.js",
    "revision": "d2e128ee2543cbdcf525aa69fd70f216"
  },
  {
    "url": "assets/js/214.d4216fe7.js",
    "revision": "287d39be0fe7d16d334185ed9e29c2a3"
  },
  {
    "url": "assets/js/215.e64fa830.js",
    "revision": "1133008642fc42579b52aa4b36d2bfec"
  },
  {
    "url": "assets/js/216.cde2b311.js",
    "revision": "959f5602194105d9e3e293101e465275"
  },
  {
    "url": "assets/js/217.b6bf69de.js",
    "revision": "a4e63361b6fabc68503b6afe2041ae43"
  },
  {
    "url": "assets/js/218.c64de5da.js",
    "revision": "2cfe97dbec80bda5cb1cf8b23daca308"
  },
  {
    "url": "assets/js/219.b44bda1e.js",
    "revision": "b034f8a366690e66e278ff082aa5f8b3"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.723f711c.js",
    "revision": "c2f5eabd8061aed52e9929980f58ba53"
  },
  {
    "url": "assets/js/221.f537fb38.js",
    "revision": "0d418739e321bb2161c30dcb0eb5bc9e"
  },
  {
    "url": "assets/js/222.48b3a8d7.js",
    "revision": "9ca8f179fbba47fe36555edaccb6dafd"
  },
  {
    "url": "assets/js/223.d8dfdc1f.js",
    "revision": "e5dd7bacbab6340f953d7c035bc090fb"
  },
  {
    "url": "assets/js/224.c445445f.js",
    "revision": "c19bce57f8a4b188da009551851adb41"
  },
  {
    "url": "assets/js/225.24e29579.js",
    "revision": "f6d3ff4d294b5527c3138173589dc682"
  },
  {
    "url": "assets/js/226.a0ebb715.js",
    "revision": "875d3a470df1bcc5455bb5df2d02bf6c"
  },
  {
    "url": "assets/js/227.1433108b.js",
    "revision": "31d1c195baf0691d44916e8fca39a91d"
  },
  {
    "url": "assets/js/228.82c5f927.js",
    "revision": "7981c4b958651f62244ec1a55ec2ae03"
  },
  {
    "url": "assets/js/229.deb1619e.js",
    "revision": "a39ef2f20a61f5b70372223b89d4a4b8"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.387f1369.js",
    "revision": "36bfefdfe57f461894430c119c8c200b"
  },
  {
    "url": "assets/js/231.3aa7b039.js",
    "revision": "4d05eb292904b924837f2b4ee4dba0f0"
  },
  {
    "url": "assets/js/232.af3beb6f.js",
    "revision": "1ab4429da0cc0bcde3c7ae2828e33580"
  },
  {
    "url": "assets/js/233.2b0bf4f1.js",
    "revision": "a32ec28f4f9e3193c0e2ee9c9f0757aa"
  },
  {
    "url": "assets/js/234.c398100a.js",
    "revision": "a52faa4e1e1da564b59160a27a45dc3c"
  },
  {
    "url": "assets/js/235.1852e253.js",
    "revision": "7a6233322e9f0ae2d02d628867d75358"
  },
  {
    "url": "assets/js/236.2f3808b9.js",
    "revision": "957216f4ebbe595aa1e6d0baa6c653f6"
  },
  {
    "url": "assets/js/237.c49d3ded.js",
    "revision": "40086c3affdd41e809829bbc64e9e8e1"
  },
  {
    "url": "assets/js/238.44559d9d.js",
    "revision": "c6b08a3ba522b4cd28ecd9c37be2c736"
  },
  {
    "url": "assets/js/239.312c5a4c.js",
    "revision": "3829743e47b2a01990f3dbd32fb40e2f"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.54079b06.js",
    "revision": "f00196a99aa3928b8459662bbf498ae3"
  },
  {
    "url": "assets/js/241.a521b408.js",
    "revision": "2bb831565545c39a043f57aa465c8f97"
  },
  {
    "url": "assets/js/242.5c7189c7.js",
    "revision": "85c2f72c5987e7fe32a6ac8f4c0fa044"
  },
  {
    "url": "assets/js/243.a0de834c.js",
    "revision": "7d9512d28c96ab22b5ee588691ea01fb"
  },
  {
    "url": "assets/js/244.30f01240.js",
    "revision": "f09dd9e2649b0449ac9a1619e3927e7f"
  },
  {
    "url": "assets/js/245.763043e8.js",
    "revision": "bb8bcdb79fb813cc2260e6802ee2d3b1"
  },
  {
    "url": "assets/js/246.b10ef6ee.js",
    "revision": "2bf9eb1af14413582dbe61a3564d82f3"
  },
  {
    "url": "assets/js/247.4682e02e.js",
    "revision": "e877a0e408bc479568a1a0e8c3be8629"
  },
  {
    "url": "assets/js/248.21216341.js",
    "revision": "b5d15eb742e51ba76e779d36a834bbd2"
  },
  {
    "url": "assets/js/249.4c10f32f.js",
    "revision": "a0652ceac87b0e5f86bc02e7c5bce6c7"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.5b9eef78.js",
    "revision": "18de15d459120ae8ee2cfcf8b10e19c3"
  },
  {
    "url": "assets/js/251.b2900d34.js",
    "revision": "aad54d76a71497833d6919c597e4ebcc"
  },
  {
    "url": "assets/js/252.eb8eb198.js",
    "revision": "e0aa79ce9e264769b7917f5141acd6bb"
  },
  {
    "url": "assets/js/253.455b703c.js",
    "revision": "69b2c21977fe2eafdde393ca39877412"
  },
  {
    "url": "assets/js/254.9127d720.js",
    "revision": "900ccdcdbfd473c39e385bd231e90b9b"
  },
  {
    "url": "assets/js/255.6ae82c6f.js",
    "revision": "815f3d7cb7f30ae5105813e7bced8419"
  },
  {
    "url": "assets/js/256.331a47c6.js",
    "revision": "8bf48b34d6e12f3bf77953c0e7da13cd"
  },
  {
    "url": "assets/js/257.19fd03b2.js",
    "revision": "eddb5e86e6ac8b23f7c33ef53b0f01a6"
  },
  {
    "url": "assets/js/258.ac347834.js",
    "revision": "dbc9d23da98e4c70a5d887007daa57aa"
  },
  {
    "url": "assets/js/259.427d2caf.js",
    "revision": "abae31858bf6d288cab19c7d003d5fad"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.dd48d08b.js",
    "revision": "4d7493bd24c3e4598aef67542afb3c04"
  },
  {
    "url": "assets/js/261.791151cc.js",
    "revision": "048cb245909413950fb9f4f008a210a2"
  },
  {
    "url": "assets/js/262.2b0cc196.js",
    "revision": "4e35ba08f978040b8505cbdb2f48cf67"
  },
  {
    "url": "assets/js/263.4270075a.js",
    "revision": "4e5e0265f480a3cf793234c7a2e61d17"
  },
  {
    "url": "assets/js/264.e901d3b7.js",
    "revision": "35a294ca2b5e1086701ac9131c14aa20"
  },
  {
    "url": "assets/js/265.e051b5e9.js",
    "revision": "9da93a9182bdb50406273e5ac3c8830b"
  },
  {
    "url": "assets/js/266.518dcc69.js",
    "revision": "9347787406f5f6e3e74ea9b108bd397c"
  },
  {
    "url": "assets/js/267.94cf7dfc.js",
    "revision": "5bfe1c2ea6b44394c49d033fe8504de2"
  },
  {
    "url": "assets/js/268.797909be.js",
    "revision": "e07667c1316d2c41ee0c1d6e00556bab"
  },
  {
    "url": "assets/js/269.398a8dc9.js",
    "revision": "8802c9c48de770257fae21d6d7adbc67"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.d8c97325.js",
    "revision": "19187817a6e7d989934495f9bf44bd0b"
  },
  {
    "url": "assets/js/271.866f09ac.js",
    "revision": "48bf87f49efa8b39d7c2f959be482609"
  },
  {
    "url": "assets/js/272.5c2dd25f.js",
    "revision": "49306f5983bf7664a5529de6a51b31a8"
  },
  {
    "url": "assets/js/273.ce3a0493.js",
    "revision": "6ae73bc9076938a6e9a6d4952131b136"
  },
  {
    "url": "assets/js/274.7e54ca1f.js",
    "revision": "1935bcbac042e1d45db9cad66cd938cb"
  },
  {
    "url": "assets/js/275.25ab0f7f.js",
    "revision": "3d225d3749b57115935f5a9194c22bfc"
  },
  {
    "url": "assets/js/276.4fbfad93.js",
    "revision": "83dbc4aed6c2761cbce8ebb030e7d2a1"
  },
  {
    "url": "assets/js/277.e7bd2918.js",
    "revision": "697dad8c282adbf83b14b3f42289ca71"
  },
  {
    "url": "assets/js/278.b27dc244.js",
    "revision": "a07f3e56b61651cf8adaebc418553bd1"
  },
  {
    "url": "assets/js/279.d15858b6.js",
    "revision": "47fe620acc314a46e205050611c7c15c"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.f350a77d.js",
    "revision": "c425f6662e38506f1a4691cf96b69197"
  },
  {
    "url": "assets/js/281.76270464.js",
    "revision": "b8801c7216d9e225306fc731b96df51f"
  },
  {
    "url": "assets/js/282.1ed74585.js",
    "revision": "be0e2716471b1e9055943e5710780009"
  },
  {
    "url": "assets/js/283.c7021c7b.js",
    "revision": "9cb4786f2d10cfec383f3af17e13885c"
  },
  {
    "url": "assets/js/284.84a3fc00.js",
    "revision": "a84a72e109a9a141eb02c8facfacbc29"
  },
  {
    "url": "assets/js/285.3d8b1bd5.js",
    "revision": "0dbd643acb74907eed82087c4d5e1770"
  },
  {
    "url": "assets/js/286.78908f4d.js",
    "revision": "6d2ed0bc314b08dbdf444c436688823d"
  },
  {
    "url": "assets/js/287.44d29027.js",
    "revision": "bcec3d6342cd67a7ee669b9ff8491e68"
  },
  {
    "url": "assets/js/288.e5142d29.js",
    "revision": "e173285caae1d686dce872ed7e7bd886"
  },
  {
    "url": "assets/js/289.13791a2d.js",
    "revision": "9c03cdd26ee21b759ece004a59795c41"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.a5a3cc58.js",
    "revision": "8b28a014bfa021ad9c37b70615904e76"
  },
  {
    "url": "assets/js/291.3aad4e97.js",
    "revision": "ce28868e3a74318d068a29f64e3e4e42"
  },
  {
    "url": "assets/js/292.ab663572.js",
    "revision": "2af03d20de8b5d691b907e1e1c33d5e9"
  },
  {
    "url": "assets/js/293.ad272d2a.js",
    "revision": "edc4ccb9ebd4663644a9c1f3ff150a84"
  },
  {
    "url": "assets/js/294.1901568f.js",
    "revision": "4eb5626fb14f66b46b8787f58a76ef3c"
  },
  {
    "url": "assets/js/295.f44dacaa.js",
    "revision": "0ed69895367134c52e99c914027d6ac5"
  },
  {
    "url": "assets/js/296.ea2d2c7b.js",
    "revision": "2723d14f85a54c34384f7bf11004db98"
  },
  {
    "url": "assets/js/297.22c176a1.js",
    "revision": "0580a6752cb943112df0502c51570cfe"
  },
  {
    "url": "assets/js/298.d2c60fe2.js",
    "revision": "a30ddf36eb3cdd2d50f947237182ce3c"
  },
  {
    "url": "assets/js/299.ad91d3ed.js",
    "revision": "c760ccb67f6f3dc09e2b723b62f9ade9"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.e86d872a.js",
    "revision": "06a04309f572ab531e761c5e588796d3"
  },
  {
    "url": "assets/js/301.df107cdc.js",
    "revision": "10f4fad095c374f8ea00ae9a43217e96"
  },
  {
    "url": "assets/js/302.d918053d.js",
    "revision": "3fecfbbe8dc1d725fa5fd2451c5e8708"
  },
  {
    "url": "assets/js/303.02c5be39.js",
    "revision": "7efd9f450d1084cabc12f3e61bca0df1"
  },
  {
    "url": "assets/js/304.ed5b039c.js",
    "revision": "ea90fcf96d55b1bdf59e902b9ba563be"
  },
  {
    "url": "assets/js/305.10bce27c.js",
    "revision": "e1a8e801d1763f4d261479680797682d"
  },
  {
    "url": "assets/js/306.d3727fef.js",
    "revision": "2502a15a4fe3888fadac3cbfc533f58a"
  },
  {
    "url": "assets/js/307.a36f1419.js",
    "revision": "0f1c99daf2feda28cda656edb84f2239"
  },
  {
    "url": "assets/js/308.159a7c99.js",
    "revision": "2aab2c79e9a002bb3bc22e282480d969"
  },
  {
    "url": "assets/js/309.e2d8ef93.js",
    "revision": "a6305931dac35b6672698219f2207f22"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.c6e8192d.js",
    "revision": "9be3d0aa2db622499ce8dbed0357b51c"
  },
  {
    "url": "assets/js/311.4de64dd3.js",
    "revision": "82e33beff849e8b70372f2a941ee6576"
  },
  {
    "url": "assets/js/312.1d08b070.js",
    "revision": "c171b0811758964e60d8f7c839e95d08"
  },
  {
    "url": "assets/js/313.b9d8e20e.js",
    "revision": "6eeaa7c752f6d6f645edb2f6fb9324fa"
  },
  {
    "url": "assets/js/314.0a8cc251.js",
    "revision": "02182e4b74a807654b4523b53ae144e9"
  },
  {
    "url": "assets/js/315.def38af3.js",
    "revision": "e1fa257ff1f211847042252959aba0cf"
  },
  {
    "url": "assets/js/316.4ae8e9ee.js",
    "revision": "5ecd5b6f1d15f0d7a810b51b1f84965d"
  },
  {
    "url": "assets/js/317.b612f289.js",
    "revision": "800e789cbe4ad0ba1b37229a7cbe4182"
  },
  {
    "url": "assets/js/318.8bb21810.js",
    "revision": "4ad60d24650a8ddec9fd34ced8e2ffe7"
  },
  {
    "url": "assets/js/319.fc9ab37f.js",
    "revision": "1433415afd6a651a91543e420bbc2f9a"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.838852ba.js",
    "revision": "de680252f73816924e882294ab930ddc"
  },
  {
    "url": "assets/js/321.3255833b.js",
    "revision": "386d3378e4c1727d8fea92baf936d634"
  },
  {
    "url": "assets/js/322.19d30df7.js",
    "revision": "b6e40dc7417545407b8ea5bfa0da1aa9"
  },
  {
    "url": "assets/js/323.2136a455.js",
    "revision": "474d99d3cedb44e242c27e35a7675f3a"
  },
  {
    "url": "assets/js/324.88d8e84c.js",
    "revision": "1a7322d9125e178681dab121967bc4b9"
  },
  {
    "url": "assets/js/325.46f34c3b.js",
    "revision": "2014149d995acc9f7e3eb9d6d0387cab"
  },
  {
    "url": "assets/js/326.09fba169.js",
    "revision": "addb60c9250f0729dd716db39c8c3f33"
  },
  {
    "url": "assets/js/327.baf66618.js",
    "revision": "3442d0584f4d4196a79541caddf2e0fe"
  },
  {
    "url": "assets/js/328.4ed1c8d3.js",
    "revision": "a03f356edb804cd6f0378ee32fec3388"
  },
  {
    "url": "assets/js/329.ce5622ef.js",
    "revision": "be1c5fad3dc383d6813ec6f90bdb327e"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d8604f80.js",
    "revision": "31ca916fa01b1b4c86f0a7f1e848325f"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.7d6162bc.js",
    "revision": "2f3d0f35b68e5022e9c74c0e45c5ca19"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
  },
  {
    "url": "assets/js/44.0b5e9d9b.js",
    "revision": "991864d46f8a5c6bf3113363341db718"
  },
  {
    "url": "assets/js/45.134dce27.js",
    "revision": "bb716fe40e1dce76efc57d8907d2c139"
  },
  {
    "url": "assets/js/46.17e59aa5.js",
    "revision": "42233b847e88b2112a6dd523e8a80ec7"
  },
  {
    "url": "assets/js/47.fc0717f1.js",
    "revision": "82fb958c414b1f8dcad72a4ab5dedcee"
  },
  {
    "url": "assets/js/48.44d0411f.js",
    "revision": "7cff24e17a3c00dfa33db4562a5cf2e3"
  },
  {
    "url": "assets/js/49.9f9f5531.js",
    "revision": "0af3d14c157b7a4622b13c1e547493a8"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.daaf0520.js",
    "revision": "01fa2243d47357c0716356f815a82144"
  },
  {
    "url": "assets/js/51.04cac253.js",
    "revision": "e9a856db77c0e7aa9ea4851e276e3024"
  },
  {
    "url": "assets/js/52.b614984f.js",
    "revision": "4971b998f94d9a08424d40f044e3a920"
  },
  {
    "url": "assets/js/53.a7326fea.js",
    "revision": "8f482dcfc8d3562cb95f221d47616c2b"
  },
  {
    "url": "assets/js/54.132dbd14.js",
    "revision": "c9c33058cc768551b8c892b7a4b7a8ae"
  },
  {
    "url": "assets/js/55.1de3bf60.js",
    "revision": "a0b2ba385d9913d95c5b48f079d3639a"
  },
  {
    "url": "assets/js/56.c1c80725.js",
    "revision": "5402f49ea41cd1af43b0c8e6ae7a5f84"
  },
  {
    "url": "assets/js/57.9c9b089d.js",
    "revision": "59e4243ff7354124a819b6817d9ab8ae"
  },
  {
    "url": "assets/js/58.05628664.js",
    "revision": "575ec55cd9485797912355696daa0c55"
  },
  {
    "url": "assets/js/59.94e8275a.js",
    "revision": "23fdc2a6e5f83f18c36aa6c59753b662"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.a4de4d79.js",
    "revision": "e6092a62ab62378bba2389426d75b37e"
  },
  {
    "url": "assets/js/61.dbd40088.js",
    "revision": "ade422e68e0d026799a3aa8a6e41a886"
  },
  {
    "url": "assets/js/62.ff8bee3a.js",
    "revision": "6d37396bbf6475e11ba5347f4f6c2835"
  },
  {
    "url": "assets/js/63.afe0ca39.js",
    "revision": "83b460464665fab3bec1d6daac60c359"
  },
  {
    "url": "assets/js/64.21956b96.js",
    "revision": "ee868fbf71402d0042ce0d8e684a2a05"
  },
  {
    "url": "assets/js/65.f1ba5230.js",
    "revision": "dd01fbc54a1ef94c270ac2a4f0496b47"
  },
  {
    "url": "assets/js/66.fb23f1c0.js",
    "revision": "93d017114f0a9b000e47904b6f064156"
  },
  {
    "url": "assets/js/67.0a14a3a9.js",
    "revision": "dd2efdf89369cf1e422a4b5db1f8a3e6"
  },
  {
    "url": "assets/js/68.9360ea4e.js",
    "revision": "589ce7c596c863066d5fbec7e3a88bd0"
  },
  {
    "url": "assets/js/69.bd8fa1d0.js",
    "revision": "8c5720100b8efa30305a5709835799f6"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.92b6e53e.js",
    "revision": "fe72914e384d488d923f12864dbc1131"
  },
  {
    "url": "assets/js/71.8da7ce27.js",
    "revision": "7fa93ce9a4e41981f292bcd06169e7b8"
  },
  {
    "url": "assets/js/72.5520a4ea.js",
    "revision": "e48a799151096d627ec03d9a26662866"
  },
  {
    "url": "assets/js/73.aee81306.js",
    "revision": "24db34af6a827285330ef19a8061cf9b"
  },
  {
    "url": "assets/js/74.d806e2d4.js",
    "revision": "dd8e996745f95d9f67dc7a6307f1e9df"
  },
  {
    "url": "assets/js/75.f1db91da.js",
    "revision": "71d79b7ec2cc761b206b142864eb7d17"
  },
  {
    "url": "assets/js/76.251491cc.js",
    "revision": "1b9b7fa2d60b773db298f0725ce826dc"
  },
  {
    "url": "assets/js/77.9139c1ce.js",
    "revision": "4d2be55bd4e6e81f25500a9c15c1e33d"
  },
  {
    "url": "assets/js/78.1dda16a7.js",
    "revision": "3c30869876a7f8f95648f0a348d9839f"
  },
  {
    "url": "assets/js/79.72dd1b63.js",
    "revision": "54a5ffa5ea0f097a06ccdc0ed2e7a3be"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.8e33a713.js",
    "revision": "64ec4ea4255be06be0bea3409e1cf201"
  },
  {
    "url": "assets/js/81.0a5bb6a4.js",
    "revision": "ec31b7812b7feda273db44757a2f3f64"
  },
  {
    "url": "assets/js/82.8682e5ec.js",
    "revision": "82882f013b7abffda2b379c93bfdb55d"
  },
  {
    "url": "assets/js/83.103a5959.js",
    "revision": "ed006d636f0e62f2da82f8a85de87032"
  },
  {
    "url": "assets/js/84.5451c1e6.js",
    "revision": "ee7104db88d42f15962dbcdb1a9f682a"
  },
  {
    "url": "assets/js/85.eee11fba.js",
    "revision": "1c2d3ed15ecc6ff5b190ffb2dfafe522"
  },
  {
    "url": "assets/js/86.8b3ff86a.js",
    "revision": "d46f156f69d297d235f99da92317da2d"
  },
  {
    "url": "assets/js/87.b8aae4e8.js",
    "revision": "04a05eeb3c5f38abb01c2164a7acf64b"
  },
  {
    "url": "assets/js/88.a68e40d5.js",
    "revision": "ec55688a5b857d83ea870b7f4fdcd6ab"
  },
  {
    "url": "assets/js/89.4d87b4dc.js",
    "revision": "88019c2a483fca6c857b635866de6e5d"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.351d24d6.js",
    "revision": "1918d48467c9235cebf88478d7187b91"
  },
  {
    "url": "assets/js/91.edecf5f9.js",
    "revision": "6a1a7a875db6c8881da9df073a0f91f9"
  },
  {
    "url": "assets/js/92.fc008f86.js",
    "revision": "3fb707b31ac3113103dfad8e8cd769fd"
  },
  {
    "url": "assets/js/93.8d4cf772.js",
    "revision": "fe55d9a7e02965fbf199f21cd6f197d7"
  },
  {
    "url": "assets/js/94.42bdd8d9.js",
    "revision": "4db85d24035e6814e8bde427ac58a763"
  },
  {
    "url": "assets/js/95.7c2121a3.js",
    "revision": "2c6835075e1928dd8da700ca0cab98f7"
  },
  {
    "url": "assets/js/96.3d435dcf.js",
    "revision": "a42f068844c42ea3b54e41d571e3d1ce"
  },
  {
    "url": "assets/js/97.87f80f0d.js",
    "revision": "3504dda2cd8f8e7b62dc2bd1eaf50f66"
  },
  {
    "url": "assets/js/98.b7cdb2e7.js",
    "revision": "0d2a843eb8612ac59b13e3388d49b660"
  },
  {
    "url": "assets/js/99.d6e1915b.js",
    "revision": "0d207dc3bb721f673b7ae1f1b4548a93"
  },
  {
    "url": "assets/js/app.a24ba610.js",
    "revision": "be324c78fc22ad5fa5d874aaa4cbe5e2"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "1d27f138d7592b0098e1f3e18a3c4424"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e0a376d0e2d962cf973cab3bda0a86d7"
  },
  {
    "url": "categories/index.html",
    "revision": "2d6bc9e12e80cd58aa21cfbebdbb2d97"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "72d7da5f3f34e1609c52bcec85c9b6d6"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "23eebe1740e540678753ef55f8741a06"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "90d4a0f39dc6ef1c84a18162a66cd07c"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0a648ccb8dda38617959ae9ada214d3c"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "2c8c45f73615dd286031bd522a8172c0"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "06cae9ee10f6f03332779a5747507208"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "e95d940bc235a4bf8a12755b6dfb2193"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "03ca3b82f9bda4d04ba6ea57f3dd5cfb"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "98351c953ed8d29de8637ce647ccf738"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "d24e8556d6a6fea882421ed4942a746b"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "6b57c49c0450b7028c1472ed0a422252"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "d787165acb815d458bea6a59ec437721"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "e6b12477faf2274b5de771fabb52ef5d"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "6ba2b057a8d2087896900e70587d81a7"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "b53272f091675477e973ba46fcd9e760"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "53717ce9e0a3197ba711ea691af7161d"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "9145224db478ed810a2f7b315051bf0e"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "4402bbcfacacef235c7ceb4bb5226df7"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "c8106726c952ec80e4f12b11a4fb55c4"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "cbac88cf15174922e78d02c7b8eb4ff7"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "d2be9b916f9a1ea8bccffa78a2116247"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "b6297ae9e87a736ab5829cae581aab1b"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "bef3fff595f549e3c9e392eef9ee8815"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "8dd7d81adf5601099560db9887656112"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "049e8b7fe0127c967d88474c9cd4ae80"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "a34a128b94332e5066613e3fadff9908"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "7fcbb9660827d7cabd15e526c5fff6bc"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "d9bbe4b470105bd9a557ab23b8327546"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "c33bbcd6e9a43b1f09381e825091eed2"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "4b8baf11bac2332d4af55f5acac33991"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "16662ca5d705ff7fe17fa7664483e633"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "fe2f0e03b47b3ac511bb27249911f64f"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "43883fbcbb7fa905292bd16a4b5ef71e"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "56aa73ebce3c98afb64fbb4342b4fa60"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "d28d46f02da92d2bb3ac745914a5c65b"
  },
  {
    "url": "figma/index.html",
    "revision": "0c415f607c6785504e9c9acb382bc0e3"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "cdf99b11487ecddc752ff41e49206fbb"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "3e289db3450476c8fb26341b81c8af24"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "67957eb1dac15cfab8aeae6e46f37c32"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "fa8926f819e9afe6d2e517685a9e3cb5"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "5084a881acd99ecce3a7dddee79bbe25"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "fb5b0ffb21b8d62ad2ed58fc7e506273"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "6f91bed7f551de864b7abbae3de5dc33"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "f1961873b68a64c6170ed69044b3f8d9"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "f7c5ab3ce2eee975ce14f93c6d6b6dac"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "4caa0375668d1843cd07eaf41f203d7d"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "28e16b531531652db82acb2756c3cdb7"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "6f6e8589bab97e74becca38eb1945cd7"
  },
  {
    "url": "flutter/index.html",
    "revision": "34af0b15908d8185e05418a717e14159"
  },
  {
    "url": "flutter/point.html",
    "revision": "2cc0a5b242d1e87036b187df3c42bec9"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a3ebef859b0a9a770f5b32040310cd10"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "608f95d74d7639e0fe8deff5171e0c33"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9c2e17ca0843a5f5cdd99810d75e6d2f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "67c910e2ce91c8f94dc1ba85d77428a5"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "844daecf3d6fbf305df328e1f0c7de71"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2aebfc41b84b61e3094c4bea276d24df"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1705033dfde3162fdc15203379308514"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0627592e13f8604f73634585109e99f3"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5c32c412f1049ce84f924ec80b28c240"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b571ec68dbf44c8918f37dfe093bba68"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "48bff5aec0096b0a59f379cc67b1377d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "0681863d1193721ec1dc5a19cd789a27"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "6c1a569d95e71cb996fc1485e9318ea9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "20753afdaaf63f2396d07f45b7f59919"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "0119aeea40a48163632bc0b49e8dde68"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "cd99a6cd3d14660021dc045e9f36e5f9"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "be56495e63210554506a60ea1f07f3d3"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "cfea03648bfd4a94e560478b8b5bba37"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e8e0ab68cf26ae1925017eba7c38b289"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "503516b6e2a167f97b1b29beae441001"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "910c10bc39f7551f17a39722849f5181"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3bf9bf453cc6fdcb924acfc6f73ffe17"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "21fbbe267c629df1fa51fe02fd1b6b1b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a7f0f406918195a55d4f8accc94d733e"
  },
  {
    "url": "haskell/index.html",
    "revision": "a7fb11bad25586faece11d7ac89c2673"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "imgs/xcode_launch_env.png",
    "revision": "c7f8697ae25d7739cb1fa6b3ea10ead0"
  },
  {
    "url": "index.html",
    "revision": "916a3edc0743c07ead7a9cf1de9ea05d"
  },
  {
    "url": "java/index.html",
    "revision": "545482701e2f7ecd42cd33dd144313c5"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "0a085bd7aba4fcddd40a820e29a06bd0"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "23a2f866a8de887db428c33fc14afbfa"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "78d0d8c6d31b019b551f46f21897fb40"
  },
  {
    "url": "ops/index.html",
    "revision": "3483c97e4c86b70733c95ff9b911a0e6"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "fc18ebb39f5d1f5ae6fe33308584edc7"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "aadd8084e47d285c6f55aaae2c408b7f"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "200412e0b26493fe757ab7279d9f8993"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8e6e130cbbca04eb0e09a372ad4be411"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "7a939a22bc40782b99cee90215a987aa"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "98ae8849486a4787c16f379d843fcc2a"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "8cf02b0435717c1aa589704aaa0eab77"
  },
  {
    "url": "python/index.html",
    "revision": "dda40e8c27430f4f027b0a148a876c8e"
  },
  {
    "url": "python/poetry.html",
    "revision": "14214fe40bef38f2e48c8a7a25ec4998"
  },
  {
    "url": "python/pyenv.html",
    "revision": "c7f14922c200eb3e0a5326af3d9e8c5b"
  },
  {
    "url": "python/python-ase.html",
    "revision": "860a6db82e9c6d7c5852fb1339d6ec08"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d309bb637d610b7814e0051889ee8341"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "35eca36b5c25d042f7d6bbc28b668276"
  },
  {
    "url": "python/python-file.html",
    "revision": "335f48cfe09f5f16186d285056d36452"
  },
  {
    "url": "python/python-function.html",
    "revision": "4f63dfe08773e8319aacd24a0e642f56"
  },
  {
    "url": "python/python-generator.html",
    "revision": "f7a0fe326a149f3851396b1270093399"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "0802cf1584585f007779c9fdcbb3f471"
  },
  {
    "url": "python/python-module.html",
    "revision": "483af6e49379cf78dbccfb1400eb8dcf"
  },
  {
    "url": "python/python-string.html",
    "revision": "00cd8ba9da17728ed19519a677a2164e"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "f7a3ed141cbcc04b292a4f775c40568d"
  },
  {
    "url": "read/index.html",
    "revision": "e8d271845d12cbf6e36b28612ccc0ce9"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "83976b320a65c8103fad0a00120677fb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "f54623e74f2ae9ed1b75d41502c09917"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4bdc98a654dcbb37f43536b8ea029da5"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "9fde940210779a470b41346d11192796"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "21dc4b9930a9a7ee29e5b0f305c9b888"
  },
  {
    "url": "swift/better/di.html",
    "revision": "ff5e2deb055d6b1566744cecd83bb174"
  },
  {
    "url": "swift/better/index.html",
    "revision": "4332cbba9584bec5db64b439328c1ee5"
  },
  {
    "url": "swift/better/last.html",
    "revision": "09a77317cdd62fe741f3b0c96341478c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "35ccd3e23a637eb6c3fa7e8bf78f4e40"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "8753d7b4220fbc8e5a3db5b1f82a0828"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "16384007899f05bffa2a7842f87b9568"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "cf21f264a3fb2ebdc29258d66f368364"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "54072e49fcb2eb59de7a16f537e62698"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "69a914f3d0010f06f2e0df03c4423a6c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "65629a167a7e66bca981b146e2409c21"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2f6fb4bd79b8af6cc53d418b293540aa"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "5fd2c5bbc529cc33cf42a08906d84e3a"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "91b9b0a264348dacad602dcfae7d5953"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "4f546aa9413cd1994e0cf7ba36fe3b05"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "9aa58765d4a768b01f75ebb59b45e150"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "3668307413e8cf5c3d60a089ca9c2016"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "d10248d47017e163dd8b1250a8e2db40"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "5b36cfe9525ba9f73114bd23455d7456"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7aff2d158f5aefa25780f53a47ae7c00"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a2424dd10f2fcd006ce28cc095b801d5"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "cb18fda36506825e609f0c7a841e5bf3"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "ccbd6140e7d6a4cf6d7db18ad36fb64c"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "4685bec18f656a875db472774941992d"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "4ae0a4cd5e67fc7867ad50c7b98c776c"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "72533b92b52722e4fd1196bba6393aec"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "5cb836d2eaa780bf70bdfe34848c95b6"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "a5bf7a39323cbea99f4cc3c5860e57e5"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "82acd9f0e74d3f673f5c85c4464ce581"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "c7d07dd22b155093cbf62a3001a12fab"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "226ef457b76d8f045ef0a47145952be4"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "9acfb217fbabe5cb088887152a2cdac2"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "b5181c3c3d4b9c925949c4966626a2bf"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "de4203c10a15f1e731e660d3b743b2f3"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "c13017b30165a2f4e9de15848e97999c"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "55a64f112cf678d4d8f3848b781d6a96"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "a103f5acc548d981a8fd863de33e0e31"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "62c510ca7e94436c5b3b073bcca57698"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "65733569f4c8a6d57694d549666cb3de"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "9b68a1bfbacc9e13393e0a39b2df6a9d"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "91e3233b28bb872f0cc31d6bf90a5077"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "60521c0c7b78c78d52d230d2b44c8820"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "685f145bcd85ee66a8a30b00cc316a7a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "b58b57bbba47573ee94fde6cd40b43f0"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "133fe03469103db57fe614ed5604bfcd"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2a2b0beb2b32a3c3700122f51ae8710b"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "75007750eeeac96ed317939072c820a3"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a7f795f31fa9974c79ce5963f30d384e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "c8deda5b559939306718f631df76e74e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "0571141045ae47a4888f81ec65bc3d50"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "24f4b6a08b6873069e76b4fae7845d02"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "1e875d94d7c43d632bebc012b5d96980"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5562c28ec2b726d31f6ca4c86e22e6b2"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "e003ce57a99326221c9a2dc620bdd098"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "0a0e68bc77d74ccf280f388d5c5152f0"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "b8c31788a5757e88343fb0d4b2856849"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c45dbf09161d93f8a2ba6caf7b911ff4"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3ee1fce407cc00df90141e1b92290195"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "822ec1a5552fe4dea1eafcb8e8acac2b"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "3ba609c03b4589b0dcf204218519b703"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "46cbc321cff833d0c7b41b3f9349247c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "2f2787efb94d9274a89955771c0afe2a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "bdefc2b6cac934b110fb95f87e426540"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b798f13456f597c00fa637f068805768"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "eba4a926ae98a3fb423a79ef5d3ae6fa"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f86ac0305ad8126143c0684d8c0af697"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "19f02d0a23421486220a0140a46bbf50"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "d7a7f9e9f0e206266e33f7567d95b5b8"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "33647e7d0865d13aed3b71755f172441"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "d1c0558652cf2347b912af56936237bc"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "443cf35e4fb098349ad63764919e4255"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f8fb4b9146689a9153903261cd6b53c3"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "dd45d5d4365702347e4006a2b48c677d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "6afc1d113333ffe439626e0b3971cea6"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "9c1f07bf788cce02bc16b666282c4acf"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "dd3bd606d30f4baaea033367edca0c32"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "71a9e3eb74aa0312839af335620313cf"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "59e5faa8b9465bf861eaa3ff1d45e9ad"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "0e5089552a162ac011a0b55cc5297d55"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "af5ac9b14a2f2115f619d1fa06bbe7f0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "8419b984f4586d01911e561fdd83e111"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "eaf12fe310c88c3ce83bdfa695600676"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "cbf59af55ba94d1c9f3ecbfebe4bbbea"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "f27172343d98f84c12080d9347d20a57"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "bdbba9a89807549734b52ec44ee6dbbd"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "6f489701cf7e8e28685c23b345fdc7ad"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "3070cdd5882be7f85bab2bbd6124bc86"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "5e95db3e219eb6b43d4442338b986c6b"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "654dd63116babb41caa22e6597f8a247"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c731cd1aed80da1b424c721ef57e5876"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "6de7afd068e95b3025c60fda04057b05"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e70c789bfc41f41ef813a468267c8818"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "8aaafebe94f4b2377389e740ff3b5289"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "520f6d4bfb89d39b065fd0830c32fefa"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f96d8d9f2c3d360744786f2707498b5b"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8b6c27b7d3ef9dce057cd349e1f8c5ac"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "1f1a9f134a31adbc615c2335c08b0723"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f8576cbdf611176621c996404bd382b4"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "0197ca8dedc1e9c6f811d41953ef4917"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c153a4e0f0898686df509463566aa047"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "433d70af857cf4d1ff47aa571aaad07d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "beb861b13a68572b4c5a3df9c3c5cfa6"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "780ca427f64238bec4845dd0feb91be1"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "fcca1c5ca9155ddc7897364da54f73fc"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "6b62fde3bf180b8b2858022637873a4b"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b5701e7854d967e5bc61126be4eae706"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "6033510fd430e7d7a5b362cccf6ad835"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "bdd375f58de141814e7f19bfc36b1776"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "394cd5d9561ca361a25205ba8b929fee"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "5a505a1b003cd4877a33afc86c33b573"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "0dfb878c0c4223a5b8ce828c897cb6f4"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "465f12ffb64ed04b4e1b5da396c00a04"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "5f10d3a1d8a2ecf0d6674297898df8fd"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "acf9f72b57071a717d1cf2ab7e861803"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "dde4590e7462d0ac7287bd23aa5bfae9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "710848fddc43078667d77045f29e54f3"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "845bfeb0ef6e80e83069897bc6ccbf54"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "27e2bf89d21470c0961fbd20820dd1bd"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "968d11f6c6a16e773da0c6293c0f4c6a"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "66edf1802c99cf7bc14457c045fafd0f"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "53c9c7f63e09be695459470c1269e820"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "f59d99e12e524c53a2e41cb347512765"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "6432bb0b347f09ae64b27128d04a7b4d"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "da0f6e09b3f173df0ee743ce9c0b475a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f25ae917af3121318ff6f1d74d9792e3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d7a42ef19a0ddcbbfdba29bfc6d6eac5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "4089ead07ececc0c43fa0d4d40d4a995"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f5bf5e87d389710702796cd4a863938b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "763aafbffd44015bbb05eb6c210141ac"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ed97893ebfd1bdb36a7acd7b9a80a2e1"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9f6b3b50d6442c977500b9b8c871eb0b"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "1797a3069d3403953b7f2248431664db"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a67fb7104e9eaaea1455049ff1c0a314"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "329da2d0f083737f30b557c2bdd3fb06"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f60fbc332995251e49755c269ff21b4a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "9ee5c33a604134ce75a65f1f60912da9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "3c892a1bf54cdc8d4cf62b22ccd1b774"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9463c051b98489da755d68d4422c6942"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "bac8dd94c5e2933bd07218576a48fafd"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "740a0d8c296a269a0cce39885db16557"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "78f706fddb1334fa78bb0ef4ef7d2705"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "200de13cbb48d39a5f2bc4904e515cbb"
  },
  {
    "url": "tag/code/index.html",
    "revision": "ba8d474150d2ad10c874e0ede7f45201"
  },
  {
    "url": "tag/django/index.html",
    "revision": "fa2da16fa35adf2d5d8ac855c0d3d060"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "cd1fc774f6e810c64cefd99272e68e65"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "627d8d6e18e049996c08a3c8ce9d1607"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "4faeda9b17ce58be445f1b17f4229f56"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "428e15b6f962a72e80b4acbc10715afe"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "a78dc290bcb23c6f8e08fa90d1e62721"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "b6d6fd731b15d68c5b5f9d18a58ee470"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "0ac3d032c2062ab83011e589cd686341"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dd19b0d10611dd729b3a7ed8cf8762b8"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3cdcdb122ba62ab29e586f86cc569eab"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "1a9eea13d0d06f00eeb385cb3d6a6843"
  },
  {
    "url": "tag/html/index.html",
    "revision": "55c0f879a935ec0c2471050563d6e74f"
  },
  {
    "url": "tag/index.html",
    "revision": "7b3957b05eeea1514941369e35123a12"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fb7b7945b4735e60040d8295ff7d32f3"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "5448a0608927e6b9ca4ed49e6f2643b3"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "26eebe9d148f6236dfe2193b46beaa69"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "895d4840b9665c0c300f8c3f9b66d120"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "7facab2e660a34eed3f94e533e32fabe"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ff0af5ea3dfc8519ce50169b1747f497"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "0e3ae75c26fb10d2e1260234414f5716"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "7d425400d12fcc2ab6350f7af0aa8f13"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "58b1b7370b451b0091d0f27593d62fc4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "a2e4dbd01142d5f3e1ef1a1ceaebbf48"
  },
  {
    "url": "tag/java/index.html",
    "revision": "7759e3d287c4f1d58db54d3c2028a5e0"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d7ee087fee3df896cc13c85f35c0bb3d"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "4b88efe31f81f304fd33363f6cd829e8"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "1432464ae08e903af3e1198de5380bd8"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0b4cf0dcd430597fd233673d3d0a540f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7372d7854aeca5ecb9dc77e64a343313"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "5b17321b675d73029c5baea1dd139626"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "11c579de5699f8c8dc8e3c04bd64bf48"
  },
  {
    "url": "tag/python/index.html",
    "revision": "994730eebe20ffe0541e930492600d27"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "c029a663ce7ee8af2a8f9540456b935c"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d6e382d1907337d9cf37452c2f5fcfd8"
  },
  {
    "url": "tag/review/index.html",
    "revision": "4208e921166a379fdb095f73d165a4d1"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "6375f471ae0dc359f5208100f66f7bcd"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8c45399d483a2c0600dc504732015c86"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "fd48860d4b7a77b20e7032c402c7f805"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "b328393136bbdfc91f2a8a07543ba19c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "0e5ce76f074e7fac73f41e0cef4a150f"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "feb48738c8f7c6518f629d04b6c806d1"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "6cd6900fce2b1ea67b3e5fa75cb7c9f4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "05e8c1e16fcf7f594f7f43bff09f72a7"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8a446814971665ba9b9215f5abc70eea"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "2c2cdea8b6285a1fe41c5871c2d71a52"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "6e2270e0bebc7895a9be2801c9b91097"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "fa239996528f5c747e367312a84fd353"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "194d526afba525995b5292ae2e56f8f9"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "51899b9ce782e5defad6a31d4766d2d2"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "168497e3bc8ffe311d18b0f04befc88d"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "5f7f4969d1296105d260827f856c279f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "3c0fb14d359f3559bc648deecd202679"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "030760a7a74ed02f15dd38b66fe60d8b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0dd28ae2a24b58f8315ae6d5e2e2defd"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "be9bba68b0610bed6c42ccdd18d882b1"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "04ce8a863bb79c0f565906084c333bb6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "2daea7086ae0918a98b9e7deb99e5687"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "990cf678157179b9d8d1fd45447030fd"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "42d71423f86625d8bedb6d98f635d58b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c873442e066636df177d04d75ce33dec"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "879387a9d82f2e911056db02247a475f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6050cf5634bec0a4834089360f236410"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "b2d2615a112cb3cf2018ea453c58a2c9"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "600ea34dfee962f110845f02671d3d81"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b3d22c15ac5bbb783c85fd470fa3b5ec"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e638aadbd8b7159ffda4179ed691ff11"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "9e5acfdd8b6b2ee92abd10867ddc9cbc"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "2ac84ab5924b42b1e3ed6ebcdde49f0c"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "683c6d32ae3376f3ec7a9658eab52f57"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d3c932f23593aacfc0e5edd3793f6af6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "eaaef6d8634694cedb8c8d45dfc13d18"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ea8e2eec8eb1fdaf7b7297640e9ac154"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "c53bc10a6c623b13bc1880192a41c793"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "59a49dc51005dce2b469e80fed01090a"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "9655a6f945797890bd0bf8bec8404ce3"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "63419038bf905e26d0b136b6fdd97fe7"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f83dcf32793b6245c709bdbbff5d0503"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f76eb29005ec051cdff8ffdff20ff527"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "c3a625035f2aad3957901a627c1809ed"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "aeda0698186002e9cd588f7215593ba7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "74a0bf459660bb392bd536c2725bcb6e"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "b9f203f2f9e8c80ef01a2085880a4a14"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1ed88980fd04237f5f66b73017354c42"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "46671eb16bed7e56edae174b299d0ec2"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f9b8efc928306c3a42b99ea75726c5de"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "e87f5b1579c8b5035f765a8667778e96"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "4bcced9fba92cd099e91659edc31a2fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "014c0dab47d412347a53d87ad70bf322"
  },
  {
    "url": "tools/code-review.html",
    "revision": "311a671c283647ee2d5ea8cad6916e1f"
  },
  {
    "url": "tools/docsify.html",
    "revision": "94e15c6be3f8a7e174d25d46a52db5cc"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "74e28e8ad225ea4298800cd9050c45a4"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "255be695be389177492db3ebd46af320"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "c63fe7a813562583f7058ef05dea480a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "47761fa26085f982721890a13618047c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "dec688f6eb8516c435210cf0cdd54f37"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f8e5003e555b3b04095730f0aa2c5bcc"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "404cbbad90292acd8579e156c8e61df5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c25f1a101d8087a3c3a85bd9ef384525"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "073a1c6c032a2858bfa9b276c80c5ec7"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "dc6fcbe26d67f4e13f5799e85cf1c6c7"
  },
  {
    "url": "tools/note/index.html",
    "revision": "c5c859c680af9119ba7cb4be84caf4d1"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "3fa777d60efdd999e4e3183475363ccf"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "953be02ad01953246d761a6b8d976525"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c2687b3f7c8c06a23df76be6a085f00d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e11354dd70f3d9fcc2f49d899da283f0"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "25057afa2ae24777a5206a0d9b98d174"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "acbef5f3a7d659ec70d25c2a1632477b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "03f3fadfd084367b73825c76992ace9b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b857da49f9d43fa12dcc534d0a7a7472"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8ac71cf8d04b8819c1e2ee3342472dde"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "67712beb04de381d133f8fc7608e2078"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "1bf57d91548c5511a2a438ad13a806eb"
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
