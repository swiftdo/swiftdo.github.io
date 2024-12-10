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
    "revision": "f96425c417f61417693fba86899bf0da"
  },
  {
    "url": "about/app/index.html",
    "revision": "3d8d9a6af70316cdb1ec7b3873af202b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "bafdc81b85b032ff512659395e7033de"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "393318366d21ef5d5bcb86fde714e721"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "1a1b98587710cfc047706c529136af29"
  },
  {
    "url": "about/index/index.html",
    "revision": "2f222204b2a457148b1268403cb45d30"
  },
  {
    "url": "ai/index.html",
    "revision": "95f2fe98f0e847f39626f2bd24621dfa"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c15e89bac6a87c6421a1ea076488d258"
  },
  {
    "url": "algorithms/index.html",
    "revision": "a1ad84457da88bd372363417ac78b8c7"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "a05b5bd73f4f70036fecc94e42b25367"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "07ed08c028323faa8f7840282d6848cb"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "60ae36ec1640e728a6212f642bae4ffc"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "5f2be86a1ea6f8f37459b459159b217d"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "623e721cf1369c9dcb4e535856d69dd7"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "74b3f7fd0dd2d9f32a0dadc5ae747522"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "8ecdf11ebb094b69ddd14739e2bd8d13"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "437718eec924e209768eb0ce04157cce"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "1490224ccecb76c8240d93c251ef9834"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "6422af0100b10e5c03838781ca857b1a"
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
    "url": "assets/js/101.3462d02c.js",
    "revision": "7531965132f9abc5cf8c9dfbf76ba195"
  },
  {
    "url": "assets/js/102.7ef0c7c1.js",
    "revision": "32651d2895bee4cd100baf0f7722fefc"
  },
  {
    "url": "assets/js/103.c970357b.js",
    "revision": "1441a759cfb987a5a64153d6026aabd8"
  },
  {
    "url": "assets/js/104.867007d2.js",
    "revision": "863afe97ca3a94df4e3141639dbba01d"
  },
  {
    "url": "assets/js/105.5949e287.js",
    "revision": "cfda0368c232231722721e36fb7c832f"
  },
  {
    "url": "assets/js/106.85e8712f.js",
    "revision": "8b8cd0781792963074e0d76b92508db6"
  },
  {
    "url": "assets/js/107.58d2c138.js",
    "revision": "4169f644a2d24098e6554e6ba1b6881f"
  },
  {
    "url": "assets/js/108.06d95523.js",
    "revision": "836446c636dac225e1cde3fd4d65ed5c"
  },
  {
    "url": "assets/js/109.8fd28a8f.js",
    "revision": "02f0236d249b84fbcdbf5a58d6ec4109"
  },
  {
    "url": "assets/js/110.fe698113.js",
    "revision": "ff2b77532bc06689d742b1a7e28c8d13"
  },
  {
    "url": "assets/js/111.513c10af.js",
    "revision": "434aa85036be1ff0d4561a664a9be34c"
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
    "url": "assets/js/114.707bb633.js",
    "revision": "331e9537b1bfe857042ee1b23ffe0273"
  },
  {
    "url": "assets/js/115.20f50b5d.js",
    "revision": "41fb416feac40a44c81a7bf9175089c6"
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
    "url": "assets/js/123.e6579443.js",
    "revision": "9b7d776330425e0d24272af68da6279c"
  },
  {
    "url": "assets/js/124.4e72c789.js",
    "revision": "03e6dd935b51016091a518442492fc93"
  },
  {
    "url": "assets/js/125.fa272bf4.js",
    "revision": "2dab0dd1575e4f7b4ca1707b4770babb"
  },
  {
    "url": "assets/js/126.39e4cbb3.js",
    "revision": "f065e3f95a32516612357c1e90c55d31"
  },
  {
    "url": "assets/js/127.43929a34.js",
    "revision": "a2663c1f66b5843fdd76d482f61e6ee4"
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
    "url": "assets/js/132.ff925618.js",
    "revision": "04ec2f21fa7adc5d38ca683bd147bc1e"
  },
  {
    "url": "assets/js/133.433fd6ee.js",
    "revision": "46e23bed817550fee32f0da763325dc4"
  },
  {
    "url": "assets/js/134.9105c609.js",
    "revision": "61ea7ba65e4993e5fde849d4b61597ca"
  },
  {
    "url": "assets/js/135.5ad993c8.js",
    "revision": "7941b2da0a00288209cb08175fe287df"
  },
  {
    "url": "assets/js/136.45a5f9be.js",
    "revision": "e07af29d9b3fb69be66f4940d48d703f"
  },
  {
    "url": "assets/js/137.9767c05e.js",
    "revision": "53f4cd9fa73e4d83603d9a31be51674a"
  },
  {
    "url": "assets/js/138.c402bf1b.js",
    "revision": "c46da3140ded97dd65d833bd02daf141"
  },
  {
    "url": "assets/js/139.d20c4407.js",
    "revision": "6ac324a29b44c93136f747f0df7f4d64"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.679832ee.js",
    "revision": "e8890e97a2568f4d8c2ef9dbe889c98f"
  },
  {
    "url": "assets/js/141.cfb7c991.js",
    "revision": "6b5514627cbd9b0f997c0f1bbbb16e6b"
  },
  {
    "url": "assets/js/142.0bd45c2e.js",
    "revision": "d39d1c5940c9791f4ee5772061f2ed2a"
  },
  {
    "url": "assets/js/143.e777dcb7.js",
    "revision": "8e4aeddac35cdf199a0cf37ee7421a15"
  },
  {
    "url": "assets/js/144.3953f382.js",
    "revision": "96375b0afd18d26ee2dc5f0fb1fbfbe0"
  },
  {
    "url": "assets/js/145.adcf1277.js",
    "revision": "eb69a1c6cdedb7ad2d13d5b2abbffaba"
  },
  {
    "url": "assets/js/146.4c662277.js",
    "revision": "5bd889c5e40f5e308f18d75c09d76594"
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
    "url": "assets/js/150.0873138e.js",
    "revision": "5b31713a92ab9726495f6a013178c63f"
  },
  {
    "url": "assets/js/151.d666090b.js",
    "revision": "5c2387a73bf043b76219c72d4a54d8b4"
  },
  {
    "url": "assets/js/152.d2555f59.js",
    "revision": "83c25acf0a9b79a68b4a2269b0719e1d"
  },
  {
    "url": "assets/js/153.1d27e385.js",
    "revision": "3d7339d155e99ac9e7a2bb48e51ecdd7"
  },
  {
    "url": "assets/js/154.18fc2e7e.js",
    "revision": "4cfc23c4adc75e4b6962b2c8015bd54c"
  },
  {
    "url": "assets/js/155.a2fbb25e.js",
    "revision": "2907c939412113512c17cc2963d6b12f"
  },
  {
    "url": "assets/js/156.5c2213ca.js",
    "revision": "aa7836f9518f966a1d02d7514f1f9aab"
  },
  {
    "url": "assets/js/157.9abbe4b4.js",
    "revision": "9f75f59e50eda6d3c478365c5e236788"
  },
  {
    "url": "assets/js/158.052b4c53.js",
    "revision": "b49e3e12ae4453686ff7ab3dc74469d8"
  },
  {
    "url": "assets/js/159.4b1c167c.js",
    "revision": "66f2ef702e92963d321a5ab3b7081905"
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
    "url": "assets/js/165.a1aa38bb.js",
    "revision": "ee5d312d2197279971e4297f6ff0e4ff"
  },
  {
    "url": "assets/js/166.0ee777be.js",
    "revision": "43caee3438b86b51eece50524f949fec"
  },
  {
    "url": "assets/js/167.3801f4e0.js",
    "revision": "1ed0a913f919081fbc2593c5d00d9732"
  },
  {
    "url": "assets/js/168.0082c173.js",
    "revision": "170922e23a5f987adb96f3bd19e29e9b"
  },
  {
    "url": "assets/js/169.4e0f104d.js",
    "revision": "48e6f2c3c70159d1ac22bc34b481d050"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.43d2d992.js",
    "revision": "e5354f84ef3ea2f6977e97aacb64c088"
  },
  {
    "url": "assets/js/171.c0888716.js",
    "revision": "0474132b7f88cea49c7acd7761951232"
  },
  {
    "url": "assets/js/172.11c54d70.js",
    "revision": "c3a08a8fe100ddd575758391d26efb66"
  },
  {
    "url": "assets/js/173.07cef941.js",
    "revision": "aadc82c0f92a4f5cde0f34aa46f56223"
  },
  {
    "url": "assets/js/174.327d5d84.js",
    "revision": "897c2484e28082ca10db1db7f2ead389"
  },
  {
    "url": "assets/js/175.fcc29405.js",
    "revision": "9aa7bef0b4a0356c885f76262447699c"
  },
  {
    "url": "assets/js/176.beafdaeb.js",
    "revision": "2bfe8bf687ab869798098fe0e1de71c2"
  },
  {
    "url": "assets/js/177.9cbb7ec1.js",
    "revision": "47e520661933e7edd5cd87f56d22946a"
  },
  {
    "url": "assets/js/178.532bcd0c.js",
    "revision": "bc162c1ae6588804cc275238dc9dea27"
  },
  {
    "url": "assets/js/179.0d169fe0.js",
    "revision": "a35ecf938f47a9818d9acee75ff7d228"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.54d7e328.js",
    "revision": "223aba9a392f6d77a3eadb9d614d54c1"
  },
  {
    "url": "assets/js/181.d6ff1f15.js",
    "revision": "f26b0ba981de62c2b995ba353d374820"
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
    "url": "assets/js/185.a70207a4.js",
    "revision": "6c1b6d533a13d8bff2c3e284b0a5973b"
  },
  {
    "url": "assets/js/186.2d9f4921.js",
    "revision": "3b445558226a7434db91e10736504a0d"
  },
  {
    "url": "assets/js/187.80c6bf01.js",
    "revision": "3f9752993c86fc7baa168ff2e3d162b9"
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
    "url": "assets/js/194.a0a998a8.js",
    "revision": "bda5d46d767fc8d3e2efc0cb5edf7490"
  },
  {
    "url": "assets/js/195.8ace0c45.js",
    "revision": "03284304144f10ac0c98c68365314616"
  },
  {
    "url": "assets/js/196.502d9ad4.js",
    "revision": "892255d83a327e71c38ed1b1c850ad0e"
  },
  {
    "url": "assets/js/197.6a18747a.js",
    "revision": "20736ce5ffd58e67da1c44f9ce71e070"
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
    "url": "assets/js/200.0546801e.js",
    "revision": "0c8d72180e9c6dbc8f6b9b962c99e702"
  },
  {
    "url": "assets/js/201.b7f8150f.js",
    "revision": "0fb1164b22b0db7bbcae3de6f2e49818"
  },
  {
    "url": "assets/js/202.46e86d64.js",
    "revision": "f5e286b5a6e1b6569cb8465215fb9ed2"
  },
  {
    "url": "assets/js/203.0fac968d.js",
    "revision": "1c9c84e2173a43f050bd6dd66940e518"
  },
  {
    "url": "assets/js/204.f7493def.js",
    "revision": "684c2090e28648f4403afdaafd87ab3d"
  },
  {
    "url": "assets/js/205.59cd535a.js",
    "revision": "bbdf1f3e2a46107f71b1fdc5fea94698"
  },
  {
    "url": "assets/js/206.45b82c66.js",
    "revision": "d2db0bb3e9bcc7e281695d1f78ef8105"
  },
  {
    "url": "assets/js/207.0fa84dd0.js",
    "revision": "8d894e71389a83ecf970e306dd5338bd"
  },
  {
    "url": "assets/js/208.6d572baa.js",
    "revision": "995f29fcc72eea403e5f328c920915c4"
  },
  {
    "url": "assets/js/209.2034eee6.js",
    "revision": "13426748ae70fbf79abbded4ce9d15fc"
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
    "url": "assets/js/212.dde35d38.js",
    "revision": "67dd55ebbd10f96af2176ae0bfb3fde2"
  },
  {
    "url": "assets/js/213.acc199bf.js",
    "revision": "2f16e63283075b8b9937d3300b456013"
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
    "url": "assets/js/216.620c0d09.js",
    "revision": "775b3f4465c6b17b9a3058860f703c50"
  },
  {
    "url": "assets/js/217.636bc8af.js",
    "revision": "41fec55b89e71bdbff6a306b02ff1d32"
  },
  {
    "url": "assets/js/218.c64de5da.js",
    "revision": "2cfe97dbec80bda5cb1cf8b23daca308"
  },
  {
    "url": "assets/js/219.fb3d37f6.js",
    "revision": "87f009605ab9b60146f7471bd5f12349"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.22227039.js",
    "revision": "70938bdf73ef1695710975ba94cabb0b"
  },
  {
    "url": "assets/js/221.41bba76e.js",
    "revision": "f759d83cf7ef436fee663a2705517944"
  },
  {
    "url": "assets/js/222.e22e7722.js",
    "revision": "42983783f0a362bdbdefab6ba11b5540"
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
    "url": "assets/js/225.3b8f4c6b.js",
    "revision": "814e4aaab70ec296630ca7d185da088a"
  },
  {
    "url": "assets/js/226.7bd9c7d4.js",
    "revision": "ddf5ee08ff2463144591536d222aa5b4"
  },
  {
    "url": "assets/js/227.458a01b1.js",
    "revision": "1efd8a9783ee15870b3edf43096d1ca2"
  },
  {
    "url": "assets/js/228.5dca724a.js",
    "revision": "a4393dc6781afbac929caa93a64c3b24"
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
    "url": "assets/js/230.03e28313.js",
    "revision": "3a46cfcaad1b26786854a23217da1096"
  },
  {
    "url": "assets/js/231.c5c073ea.js",
    "revision": "c0e93dce210d6f42d281079ac0622dec"
  },
  {
    "url": "assets/js/232.610160d9.js",
    "revision": "99ec396ba965f1d1b24f6e4ace5393a7"
  },
  {
    "url": "assets/js/233.069cbfb8.js",
    "revision": "973d151d092b9761a6029a9616f8ce0d"
  },
  {
    "url": "assets/js/234.3bb7173a.js",
    "revision": "9fb9bf9e9157f57b28d4fb27e2aeba98"
  },
  {
    "url": "assets/js/235.fff3e99a.js",
    "revision": "8df6a1a2815747df4c3b88f9fe4391c0"
  },
  {
    "url": "assets/js/236.a3074a91.js",
    "revision": "bdb8b2097714580085a6792308024f19"
  },
  {
    "url": "assets/js/237.1f34403e.js",
    "revision": "389c62694fb2aa56de409df8f1c304ee"
  },
  {
    "url": "assets/js/238.7acfff3d.js",
    "revision": "4bf17f05ee82bbc5d98f2b4b6addaa2d"
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
    "url": "assets/js/241.8e9db0c2.js",
    "revision": "ccf0c1365cf828ea3b8cdaf1507df9c2"
  },
  {
    "url": "assets/js/242.952175df.js",
    "revision": "e665e10de0006a3a1ab51c5b99604e0d"
  },
  {
    "url": "assets/js/243.73a36952.js",
    "revision": "c58e8386266ecf4a69888e77ba2c27b9"
  },
  {
    "url": "assets/js/244.30f01240.js",
    "revision": "f09dd9e2649b0449ac9a1619e3927e7f"
  },
  {
    "url": "assets/js/245.0ff66875.js",
    "revision": "134404140721bef2777fec86e759b297"
  },
  {
    "url": "assets/js/246.b10ef6ee.js",
    "revision": "2bf9eb1af14413582dbe61a3564d82f3"
  },
  {
    "url": "assets/js/247.9f7491fe.js",
    "revision": "f3b8659cd5be0c94a30e49180544659a"
  },
  {
    "url": "assets/js/248.21216341.js",
    "revision": "b5d15eb742e51ba76e779d36a834bbd2"
  },
  {
    "url": "assets/js/249.3dc83e37.js",
    "revision": "efb6e8e60c879986b5ba9dd052839deb"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.fff4eef7.js",
    "revision": "0339a1318707c6fa8b323f2c4f5ab5b0"
  },
  {
    "url": "assets/js/251.419c060e.js",
    "revision": "d80bfa51b2bb970f4873f6c7179e2198"
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
    "url": "assets/js/255.1f132556.js",
    "revision": "d8e6225897c4ae9fe9b4af8036abf527"
  },
  {
    "url": "assets/js/256.3d5220d2.js",
    "revision": "2edc876afd017f26844f641cf50ade5a"
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
    "url": "assets/js/259.e4677f56.js",
    "revision": "dd3525013eced7da5889256ea033197a"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.1af6aee8.js",
    "revision": "daf52ff5a4defcf65d62e16683c60284"
  },
  {
    "url": "assets/js/261.d9630f52.js",
    "revision": "4ceae7d0942911b52fef22366aca1bc8"
  },
  {
    "url": "assets/js/262.2e0073f4.js",
    "revision": "8211fdd11a9dd0453e6aec8aefbcfb5f"
  },
  {
    "url": "assets/js/263.c7db17e7.js",
    "revision": "00887ccb65fb33bfc7246eaa60dcf8b3"
  },
  {
    "url": "assets/js/264.e901d3b7.js",
    "revision": "35a294ca2b5e1086701ac9131c14aa20"
  },
  {
    "url": "assets/js/265.87d95366.js",
    "revision": "35b2278ab0dfddab4e8c7d4bee6cb768"
  },
  {
    "url": "assets/js/266.663ecb9f.js",
    "revision": "713a886fcd93d2c8be6c1b8a5fe8c9ee"
  },
  {
    "url": "assets/js/267.93bc947b.js",
    "revision": "6c595eb79364ba28751ab52e17f4a9c0"
  },
  {
    "url": "assets/js/268.797909be.js",
    "revision": "e07667c1316d2c41ee0c1d6e00556bab"
  },
  {
    "url": "assets/js/269.ccc9e5ff.js",
    "revision": "55252046fecac81871977eb8b57127ac"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.65595683.js",
    "revision": "036d17cf837ff0cb891629c0a21f44b9"
  },
  {
    "url": "assets/js/271.afed73b8.js",
    "revision": "f7f4097b70a81ce20f8ef72478e948fa"
  },
  {
    "url": "assets/js/272.eb78ffa8.js",
    "revision": "223146d5f4d5052b7db27cc363763c7f"
  },
  {
    "url": "assets/js/273.4f075c48.js",
    "revision": "c521c1f5062fbac4d8952fd7ccd17a5d"
  },
  {
    "url": "assets/js/274.886621fc.js",
    "revision": "b92829937a40b6659c6fec115a88b864"
  },
  {
    "url": "assets/js/275.8f909a09.js",
    "revision": "feee76927b09497546c5cc8ecc21da36"
  },
  {
    "url": "assets/js/276.1dace89a.js",
    "revision": "9923390598330da9e40f12880e5643fa"
  },
  {
    "url": "assets/js/277.9c3225ff.js",
    "revision": "f7cea639f8753d169c481f0b4c7dce72"
  },
  {
    "url": "assets/js/278.904aa5ca.js",
    "revision": "5320eb16e8da47cc082e107ce4a8601a"
  },
  {
    "url": "assets/js/279.8d15d2c7.js",
    "revision": "ed9787ae49d98f724e875f6846a122df"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.285e2041.js",
    "revision": "fcb8d4617ab47a44932d420c14e9d38d"
  },
  {
    "url": "assets/js/281.1aaaf4d2.js",
    "revision": "799cedcbcdbc5c99d8329c587bd34db3"
  },
  {
    "url": "assets/js/282.6a297d9f.js",
    "revision": "e40ecdc99eb8ba28388559aa16acaeb6"
  },
  {
    "url": "assets/js/283.9ed81e8a.js",
    "revision": "dff5bf968df83a08df1ee4e42d69685e"
  },
  {
    "url": "assets/js/284.082da1a4.js",
    "revision": "e7041cd04cb3c405eb5e26e98431d8fe"
  },
  {
    "url": "assets/js/285.c2286f68.js",
    "revision": "30bc05823b6cf07692806c34051f5fe3"
  },
  {
    "url": "assets/js/286.93cc613a.js",
    "revision": "3f8327bffe408621af91afa51b723dd6"
  },
  {
    "url": "assets/js/287.15fdff00.js",
    "revision": "dbb01801c266bc3b0bdb49bdc709d150"
  },
  {
    "url": "assets/js/288.89860fd7.js",
    "revision": "62719063172ea2f39d40d0dc96e40f06"
  },
  {
    "url": "assets/js/289.527b3e32.js",
    "revision": "17973fbfc7ab60e0e68d113d4e633cb5"
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
    "url": "assets/js/291.df10f22b.js",
    "revision": "4ea960c67f49e1af1517f13316a7ca06"
  },
  {
    "url": "assets/js/292.766e2806.js",
    "revision": "4d9149d449e109c0d85e8e6af885c762"
  },
  {
    "url": "assets/js/293.36d4d5f4.js",
    "revision": "20ba5642d33318ec765939469d1c9908"
  },
  {
    "url": "assets/js/294.59a98092.js",
    "revision": "8ac99a4da2757ad71535f39d4fb9b2c7"
  },
  {
    "url": "assets/js/295.f44dacaa.js",
    "revision": "0ed69895367134c52e99c914027d6ac5"
  },
  {
    "url": "assets/js/296.e933ac8a.js",
    "revision": "bdc033ea8ee969d61328989c4b6263ea"
  },
  {
    "url": "assets/js/297.0694747c.js",
    "revision": "6319bddee1d86b1d5eccf79a164d7375"
  },
  {
    "url": "assets/js/298.47d783c7.js",
    "revision": "0758d8dab8517acd401d60c04f5f07b4"
  },
  {
    "url": "assets/js/299.a9899928.js",
    "revision": "1a99dcbdb6ec50f6c1205f3c5e1d97ef"
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
    "url": "assets/js/300.3ac95087.js",
    "revision": "dc9f480cd3e47f73c08b6873860bb084"
  },
  {
    "url": "assets/js/301.f5f6ea39.js",
    "revision": "37202cf19ac91ba253377d8c8b571ff9"
  },
  {
    "url": "assets/js/302.9037f55f.js",
    "revision": "ce147b9f73e683181ed182bf4c38cfc2"
  },
  {
    "url": "assets/js/303.247a17b9.js",
    "revision": "3d7cbcaafff9240db1413f4a704179b4"
  },
  {
    "url": "assets/js/304.a5149f3b.js",
    "revision": "ea521fe06c2c93da0decd12ce7aee3f8"
  },
  {
    "url": "assets/js/305.21eeac30.js",
    "revision": "caf72faea570d2455d43e2f405d14537"
  },
  {
    "url": "assets/js/306.80bcea9f.js",
    "revision": "1b69fc0633fedd430f6dce6b6fae9275"
  },
  {
    "url": "assets/js/307.1438b122.js",
    "revision": "47c8534d1ff4f4c59024b338abaa1b34"
  },
  {
    "url": "assets/js/308.f9461d77.js",
    "revision": "82a01623c6c53544111e7c8d56667a17"
  },
  {
    "url": "assets/js/309.72e4a7be.js",
    "revision": "01eb7d4b3fa8841eb263841d4b9c87ef"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.12bf5173.js",
    "revision": "e72e275bb6911e778f7b2aa5c1f0766f"
  },
  {
    "url": "assets/js/311.da0c8ab0.js",
    "revision": "60111a01a105bd5a72803b4c745f63fe"
  },
  {
    "url": "assets/js/312.1d67ef55.js",
    "revision": "f44d01f99a8e510f9a7a01087633f3c4"
  },
  {
    "url": "assets/js/313.5775b1ce.js",
    "revision": "ea2d708cc6d4548a01220e7733128633"
  },
  {
    "url": "assets/js/314.f911c949.js",
    "revision": "3c7d6118fd3b6c244a52ac52c5b841bb"
  },
  {
    "url": "assets/js/315.3b6fd24a.js",
    "revision": "384b02b8ba880b5fd0a7995bad3a20d7"
  },
  {
    "url": "assets/js/316.cb515b16.js",
    "revision": "43978c5c8211ae1782bf97174117f7a9"
  },
  {
    "url": "assets/js/317.84737460.js",
    "revision": "5c71bb6ace9e537a284f4219682a5ca2"
  },
  {
    "url": "assets/js/318.4a3358dd.js",
    "revision": "b81916963bed9cc6eb7cdba0ecff0ef6"
  },
  {
    "url": "assets/js/319.5f9bf986.js",
    "revision": "d25e8cbfafe9a3d55f29d49caa9ab00d"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.f5670384.js",
    "revision": "a927dae1e04e2fb5144b8fa14da9cc10"
  },
  {
    "url": "assets/js/321.4110d454.js",
    "revision": "7c96a7cc9b099da75c8c6bd3370dd9fe"
  },
  {
    "url": "assets/js/322.a646c287.js",
    "revision": "fa4f282b91d86ff2e9d469b07db51777"
  },
  {
    "url": "assets/js/323.351eb9bc.js",
    "revision": "b9fe6ac5682ac1dd5b64e8928910691e"
  },
  {
    "url": "assets/js/324.7716c275.js",
    "revision": "aeb32508e7292f0db84a1555b071726a"
  },
  {
    "url": "assets/js/325.d2e011f3.js",
    "revision": "6a6eb25169784bd87cbd701fcbd84f77"
  },
  {
    "url": "assets/js/326.83e2f754.js",
    "revision": "b80da77ab378a9f0f746f6d4e599aa72"
  },
  {
    "url": "assets/js/327.3113acf5.js",
    "revision": "1fbd83279fc0d26f2e71d3884310056f"
  },
  {
    "url": "assets/js/328.30c712f6.js",
    "revision": "3f5ca3d41b279043ffa4a3e78d5a69ac"
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
    "url": "assets/js/40.d8887dab.js",
    "revision": "5c199233d8134852bb7a98cdddfc2d2d"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
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
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
  },
  {
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
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
    "url": "assets/js/49.7acf0eb1.js",
    "revision": "9ebf2ea0f5586f1e8af080fb271a886f"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.700e84d8.js",
    "revision": "9bd018bab0f809df58c70b08e9e5602c"
  },
  {
    "url": "assets/js/51.4aca88f4.js",
    "revision": "c0852cda5add6286ee1a5501f920d9e7"
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
    "url": "assets/js/56.21458346.js",
    "revision": "d2bb22cf0fedfce6d8362479966fcdfd"
  },
  {
    "url": "assets/js/57.a4789197.js",
    "revision": "0e1b0f7fd413a832c636e7e6d7c7d6b0"
  },
  {
    "url": "assets/js/58.1dc38aa0.js",
    "revision": "10f5c052ab47d3f61f74b9b78987f689"
  },
  {
    "url": "assets/js/59.827a7bb7.js",
    "revision": "7a6abd4e7f10f6c01bac824d8a097de2"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.df8b9e49.js",
    "revision": "246b6c85ad9a6f0f757f8eecc96f2005"
  },
  {
    "url": "assets/js/61.263f72eb.js",
    "revision": "d328d7f4111ec360f3f31c631444d7f0"
  },
  {
    "url": "assets/js/62.db231c89.js",
    "revision": "78be8f3aef76d7d65cc4b52e81a8ff18"
  },
  {
    "url": "assets/js/63.afe0ca39.js",
    "revision": "83b460464665fab3bec1d6daac60c359"
  },
  {
    "url": "assets/js/64.5b625f28.js",
    "revision": "29abae6b4eefcb4ff50b397d41315bb1"
  },
  {
    "url": "assets/js/65.206ba358.js",
    "revision": "7f934e17a0d89bc0acaf58916511d1ea"
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
    "url": "assets/js/68.76f7f452.js",
    "revision": "0bf4bc8aef4b2a295f5e5c50f37966f4"
  },
  {
    "url": "assets/js/69.8944ea35.js",
    "revision": "b6819f03c5eb9eb2c0c144152b5c4e27"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.b2533106.js",
    "revision": "979311bfd978433ea934e2772a774c53"
  },
  {
    "url": "assets/js/71.75776a94.js",
    "revision": "ce496ff017cb9ef8f0c2be34183c7b30"
  },
  {
    "url": "assets/js/72.3abbc13b.js",
    "revision": "ea4f9e275929d8dfe517ca69f502344a"
  },
  {
    "url": "assets/js/73.3caf7cba.js",
    "revision": "30878df93ad7393b8c7a60e4ebdbe00a"
  },
  {
    "url": "assets/js/74.d806e2d4.js",
    "revision": "dd8e996745f95d9f67dc7a6307f1e9df"
  },
  {
    "url": "assets/js/75.d9cf14c9.js",
    "revision": "6d50d824da33279bb2fedf95ddf7a551"
  },
  {
    "url": "assets/js/76.a2e8f402.js",
    "revision": "26e2927edbd67cd32882abc7c5140a3e"
  },
  {
    "url": "assets/js/77.bbf59c3e.js",
    "revision": "02adac6b56b0c81f4a2b50eceb519511"
  },
  {
    "url": "assets/js/78.b7a9d9f0.js",
    "revision": "7ef9292cad5afa1dd3b81a6672095675"
  },
  {
    "url": "assets/js/79.42b8acaa.js",
    "revision": "994f7cbd5c9daa74ba9b4e4b2556e65b"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.7cc271e4.js",
    "revision": "e41bb009aeada00b179ce83a73f093a9"
  },
  {
    "url": "assets/js/81.75cbafc7.js",
    "revision": "c8cbf110f459388128ac518736bde352"
  },
  {
    "url": "assets/js/82.c5e6a02e.js",
    "revision": "cdb857162e36b46f22afedebb88aaf4e"
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
    "url": "assets/js/86.2fb6498a.js",
    "revision": "4ba99cdab232d4918389fa0ead815ddf"
  },
  {
    "url": "assets/js/87.d4b8fd64.js",
    "revision": "65a948b69ffd8754910f119801ea7dd4"
  },
  {
    "url": "assets/js/88.a68e40d5.js",
    "revision": "ec55688a5b857d83ea870b7f4fdcd6ab"
  },
  {
    "url": "assets/js/89.f01ccc4e.js",
    "revision": "9f3ae8e3952bda17c1206d1450310382"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.18bf755c.js",
    "revision": "002acbac3e965679a482b697942ec514"
  },
  {
    "url": "assets/js/91.535e4de7.js",
    "revision": "2155c4d196f0c99e2bdde245b195b551"
  },
  {
    "url": "assets/js/92.01709ba7.js",
    "revision": "1e0a46164f42be102a5ad8442dc0c410"
  },
  {
    "url": "assets/js/93.c3d96d4f.js",
    "revision": "c884f64bcde163ddcb727ef0058b02b3"
  },
  {
    "url": "assets/js/94.651a6208.js",
    "revision": "9dfeeb3b4a61af4ed600ace0ba53f129"
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
    "url": "assets/js/app.4c517e16.js",
    "revision": "e5e1a807a59257b1cc0391ddb709d854"
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
    "revision": "3827410ffdec5f5dabdaac90949bab6b"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "299ee7fce5daefd870fc6f787a6089bc"
  },
  {
    "url": "categories/index.html",
    "revision": "8e0c324c7d4598b2018c5383c63409e4"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "afe4ae0e9a8887a70e59686762ea48aa"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "c294fd311aec8920428ecaaa1011a18c"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "56ecff9207f4580fd4f62a8224774c2f"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "47ba4763732c111bf223ecb5515779bb"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "38cb744a80e78caa3fd0869a0b829fc2"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "7a1a4602ffca9e0167f053d91a0a224d"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "4b0310734772f185bf964fc162030dc0"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "bc81d2c1d2e9ebeba8d8a7b249042ba5"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "7f91920928b7b2046ff4a6cb81c8afc0"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "62db8c00d897dd321afbce2c97594831"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "5ce376d5f1571fa577be95c0663cc92e"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "8af6aed4af8b276e2afd607ab317b947"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "ef8b534494b5536fb4ff385833f3c150"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "33886b231451b1224d5c2864098a84c4"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "4df311cac5b84bf48ab5b8ac18d5a4cc"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "9b037150e51282f5cfb4f9d979b3154b"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "8551e040e7b92010b8b0da35f4cf4f83"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "8114cad6b1151501d0a07cd61f90b23b"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "11ccd3695acdec0949645e73bacea2b9"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "b6cb5e8d3075ade07c097b4b16d36773"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "7827ddc31c9aee44a9ba1d32584ca9e5"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "87a3c1db34646d2f44594c0704f4b5c8"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "9a968b362cab4ff978e107d3a51cb55a"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "75dac88a0a863e56690d056c4a463630"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "94e279b6f6a3b725f0840d43c5d681d8"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "8008d7fe903f4742ffefca69961b701a"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "81389bffaccc372866d657550c0c739a"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "9ff2b831284c1416b3685b3050bd8eaf"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "8bd0cb1bfa741bb03516b6bf0de413ca"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "cf588fc408868a6a522ca3c1d0f1578a"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "6f71c115b6268fd1f3e113835a109872"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "dbf3c2857237b5ebd29224a4d4177091"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "6b5cadfa3548f7473a3dbbe3262821cf"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "2f2966745625d0a6c4eeb906257f373a"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "4416506e4f04ace882b8445d0e328639"
  },
  {
    "url": "figma/index.html",
    "revision": "86ad66f603bec0fb4f11fa0eecd3c5d7"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "f42209f1e7386e15f7a26f82d7ce1caf"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "685f5902ac279cfc275e87c1cfc25a77"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "b4148356de90d60fe53249a48c90bd2b"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "4b685d4ed14acf5b0c064365b11e6246"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "5b2bd7945d78b3a99bbbd674be794c97"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "2184f8044a4fe23ca269481fef04302f"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "4d99d82e81d68ed092167e547d9c2ad2"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "ddade0ea760b933a082c61e0c73add63"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "026b1be9d4acefbb7a289bdee16ac122"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "c2ebe0a2f75829dadbad0f9baee9f06b"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "00e439669e59cbb90f1f59f39fe703de"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a22bcb856fbee98982131510db7e80c4"
  },
  {
    "url": "flutter/index.html",
    "revision": "2fd09d489bdaf0268a33b7ab10d7022c"
  },
  {
    "url": "flutter/point.html",
    "revision": "77caaf3ddcf2bdcbf8d04d998733840e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0a854f64daec94f4fe085566c66ad986"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "171ab06e8865f3212eb804d42eb5b095"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b21a9a3f104c9d93c30b8527b105de4b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e2d20d2578848ec8bc9340f0a39e9843"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "403e73e32fa1909c073060378a84a7f1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7bd15ae3aae33c4d5a7b146ca1a9bebc"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "114fe972fa8639f9358072e5fbc01760"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "62cc321032e195e201051f5e76c90943"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "702eb7441e3e2c84ba70ecec076ccd06"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "199c54981e7ca8bf4bb740d68f658506"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1670cc239e192409f97333b8697bc9ab"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "ac50bf3f2bd511286ef1f7267d257ef0"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fbc9018b64452e58dedd0fe8dc2012c9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "7cd3dd064ab4ea83213b2b4732410f18"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "2ef6b7ab155fdd15e6388641d43f9904"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "181798b0f26d89af80501e4438a70c39"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "be0b1463ba92f22ea0e294e3602409b4"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d8c54bac57843c136ad29bfe72c2808d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "496ab03d8c4a3f529948cc502468e898"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d7360d4b8c84f6d744858dde862d6523"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0f3a6097d172aad59922df2fa5e6898d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "072e7a28e08cd0cd6c6b0a7146bf063d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "9121e3c7228a602eecfc11ac4d693d60"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4e7a1d780dd7c05d768eafa2019c13f8"
  },
  {
    "url": "haskell/index.html",
    "revision": "3875fea4fd11ba34b8f928c3977115ed"
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
    "revision": "4760d1024df9f30a7ee91b3567535120"
  },
  {
    "url": "java/index.html",
    "revision": "d1468977e71ec47d8879ee09d18e0bfd"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "63ea8e30f7aee3ca3e38a16fe4ed71e3"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "0563a1083264de28f0ee41f5c6dc82b6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "2f6a7dfead748f4a9b709218ef4e0159"
  },
  {
    "url": "ops/index.html",
    "revision": "18dcb331991064450d0b74b07f7a5cdd"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "48ce6adef04a35cf1d06e44ffd10b3e4"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "3ee730e30cd6da11398b87cd5771a39d"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "85ae26981a081c9ff043a4c695a8b715"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "98c908a4e0fad79d3aa9949364b1ad79"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "a35be3c3534acdd0bb851f834f9e7088"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5cf4e500a4dcde6bd9ca2408613104fb"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "d0e882d598aa32717083bfb2dbd30083"
  },
  {
    "url": "python/index.html",
    "revision": "2c8549af17b91858322cf9c485eb652b"
  },
  {
    "url": "python/poetry.html",
    "revision": "49d6fc2d61e5dac00215e41b99818c61"
  },
  {
    "url": "python/pyenv.html",
    "revision": "264a8f4d53d70ee3aab89f4396e7aff4"
  },
  {
    "url": "python/python-ase.html",
    "revision": "414330837dec8339972ff06c886e6e33"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "58b1b2416a5821fd4bb71320c978ce8d"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "cd7f8fada7f934144f434440679845e3"
  },
  {
    "url": "python/python-file.html",
    "revision": "5c9348691adbf29233c72450ebc81d51"
  },
  {
    "url": "python/python-function.html",
    "revision": "41bb67da0951ce2d61493b8983a1a936"
  },
  {
    "url": "python/python-generator.html",
    "revision": "2e2e32393279bb5612f77bd365a2d2ba"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "3316b8d0a7a9ebb010c373d470b33652"
  },
  {
    "url": "python/python-module.html",
    "revision": "713d0434370ad0b38ff073137cc59c71"
  },
  {
    "url": "python/python-string.html",
    "revision": "1d99852b9199681eef9db8c6c94fdde1"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ea6588940de1752e20902625be8a8f05"
  },
  {
    "url": "read/index.html",
    "revision": "1c833f39289020691aeb6c9cad4a0479"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "451c5656e9bdd69c4c924982c6011e48"
  },
  {
    "url": "swift/better/available.html",
    "revision": "dca4d0048c58f0681900b15fc39d7b6b"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7ce824729378a69917f9bb554cf300f9"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "33aff86f776f72118f7d00da5cc8b7cb"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ad1998c059d6af21937abf4e24dac938"
  },
  {
    "url": "swift/better/di.html",
    "revision": "600f847a95cc11b0ea5c338b75c49846"
  },
  {
    "url": "swift/better/index.html",
    "revision": "2cb22f3e94ac8e461c7745342b6448b6"
  },
  {
    "url": "swift/better/last.html",
    "revision": "b0a8e1f3915f076eaa2634825c66e94a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "b052a3e81dba45071734f1b6e18b26cd"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "0828961797d8713ee1d2ebf42c1fbea9"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "30913d575f0b9899a5666cc1800f9bf5"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "b97abeca049f4cc9eedac3a62455d13c"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1a3c4b72a70c3acd4a5a212c15c46ac9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "6eaab1b87d7e347267a2b653e48375d3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "598e46afa9b2c2610a7a2ea5d0a62424"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "daf15b00efa917f2deda49dfad26ee0c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "d48ae2051308eec6d5520227a71e4e0d"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "95d0132b14d7c81655cbbfd062f64a64"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a13af79fae55f6db9517578eebe51e7b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0efbcc5705b378a54f264dcdfbb16919"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "14878d992fe453b412f28bd1d985cbe7"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "61948760b535d161fae3374cec4278a5"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "131facfb6f0d411c9dec2fbb324b2829"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "36ada05968dc2a3914cad659ef8c8a6a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "876b686a1dcee27a16133c9e63b2a077"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "ca523bc7af9ba6215271ee608f80e12b"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "a3a4b3efd5fa925864dca22ca96314ad"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "5f99807a5fd9d8e88222fb356002900d"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "d834ab3df658348ceab436356f36ed90"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "8d793da34f4dee244f2c86d5868205be"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "2ba66865495bbede5c503eb8fedb615e"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "5ef6422b6649962b0ee0faffaf97b5c9"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "55964eaa9cc39eaf32901e999e1122cb"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "71dc1878b57ded0002b9b664051d5ec9"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "3e921519c4c108153738d1df67aea205"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "500c5b8893d254680f7dc84690030b81"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "030961b0eff24cfa71a9787b767c5810"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "18d71c34717374fa7cf6bab6030ecaeb"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "4a68fdf1bb465839e4106a6bc0536bb8"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "645d79c182453459ff3f7998321aeb16"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "40237aae50c492e0779b8a40bf58a517"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3da86a09462b12597f56c9e003011a3a"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "cb571ae693c742573e134f0f71c880a3"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "204b9e4ec82363c7a0772b293c559666"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "58e01058ffb256635ec5c9088321977a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "26aef5816354f515e6f9eed6b3e81e55"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "eeba7237ca54ad484efe31f946944eb6"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "dce75f69d71aba97e58be08118bb2d16"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "d0af188b60fc21a43ab061b4d6f56d1b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "5ba7e72b7b75799ed6dc85469ef990c4"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "1a6bd1e5756d3b6492c0c9c144e4cab7"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8a4958ed4cda095f43c8a1832683de56"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "dfabb01716667cec9d006ed325834910"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "aaee5a4427bb9c942e5643a92cb56717"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f4584e4c0d7ec8947038f9e9f7117431"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "bbca0566f06c73b0a3be58a43c749e8c"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "c0843a0ff3c392c4dff08072c1411863"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "958fcda198f3ee9079d3883243c578b9"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3381bec3fa22f1eaa84bad6ce2ae864a"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "e29fb94876644486d3657471818f8ab4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "86dd82e48ec08c6a3ed04c282ecc8e82"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "847c63f468329773e0ea931e71fc9225"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "3243c61b153adcd348b97f498fd88f2a"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "573ce436ffb090e6183cf85e6a604e4c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "88e9f4c18aff511c3bbbb6cb2d0a10de"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "f1b23f4859318a7b09ddee363d8d5e8b"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4cc3936caec6aca6e90bd7b388d36620"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b3e1d87d5081c3b2ed5f29cb64c54840"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "9b00bb1015b7b3029447d5f7179d46d1"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "95b6b91b0edba28319904768b87ee82f"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c20a78aa9371d50e76c5bb004e297d5b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "64267fe0b25b9cf0a63a70c56ccbdb1f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "2c94018c643490503bd61e52b6c0fa12"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "9d6bbf588fb8fc83e6ed13f6f82e9630"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "3e598470c45fd4e137f09293a7a0dad6"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "e20a28940f6179d3689e653adc85db8d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e2a18a941e47761cb17e9358d2d8b4cd"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "84fa4411245054e2967496dd1cfcbe3f"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7ac3e7ecde870e59c953a39406200493"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "7451baba41e71f689aa28638b2602492"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "b42c94fda706f69e88bf2f27fda64bdc"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "0da3e395ca0ec4a1d167df6d1c7cb94e"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "509cfc010a95d1c71869b678873e205a"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "a49dc3f4aa70f5163780316b1d17bdac"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "1e9a122fc450feb6b125c3817ac46907"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0c94e708c74a55916e92d07d0966bbcb"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a072a11c712c569174fe38c91bbe43fb"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "60e159cdd508a23f4843ffbd0cab7109"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "8bdc63047b6834f47b30981764a9c64d"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "100ae9921520293eb11401a44f470439"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "88eb01bbfd8486e2c7d8d470503174e2"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d0f9acbf552a254aa575f4bf92cc149e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "7dba6ee6aac83ec6c015a68d2ab18967"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b959721e8e13e312e0d492843f1195d7"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "058c6ca3c0004dfb0eed232333bba8c0"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "27bd4ed03e93e3d4abaacae1a47f7e93"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "71fadcc9065d82eee8778b52f47b11e4"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "374b200645796b983f371b24c273c525"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "2571aeda04eaaef29bc7d27fec7116f3"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a3656c2d253d62406b2ed050b8738b01"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "7154ef077b857573f66bc788d61c512b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "72b0ce78a8c6cc9d811312a3bdfa84f0"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "17fe3faeee6599a22c086d6be0dee995"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "61cff4074057165d5d294e97b7525c75"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "12e2a4f1a8e34634244abf871ce0a2a2"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8893a848e4c68475e8591a74a71649f8"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "25a8a05447528972215d9451cc63389d"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d57e05718d09a4dfb77db42a6959f23f"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a6a12b52f17b50646a3a06b52c6d118d"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b4960537fceb1c96a2e4de9a322f47c8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "8ee844b170f82388d7df493922c467c7"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "9461419c3ad0fa1f17662f477cc333f5"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "3cab253c8ada67cbd83502142116626c"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "8f5c0bdcb9b4f08a26f41659ce9deca3"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "07880e30d888e900a233efcfb1546e25"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "284d36fa7ab7322248694f0fdceaca31"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "4bc055d913bf77b3e49d41459f2430bc"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "1cd1a7de3058dd92f837d3e3cedcaf4d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "dc6049266553eae1b55dc56b06461c3e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "3e0227837fe2131b036dc7f05acda8c2"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "511dda22273430f70d3ec6a912ca70f9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "cf1a493b1e5e4b4b5d648886c93bbdcb"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "be5b751d7e80d211d836a8489c2339ae"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "f45b23853949fe545d3fe90477d726b9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "ceca7b9972d6515acd95c2ccdcbf4b8e"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "fb53005334168320489767c886a1e008"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "9a45b8161467b0ea87d5e3d4370fab7b"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "460646f04f5141a97c94bd818e8f24a6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "5703a51bef32a9ba6c7d75ce0852778b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0252b93db4fa03da44ef30d753b502ba"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "aef65024e33d7a3bbe030d1926b136e7"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6552f5ff4379837f8472ee905d44c0e6"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3423f8f3660e644b0946fb37da3fea63"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8031865d32e7d830320ec3075bb092fc"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "41ec14ec1f87b9f3ba4874e02cdeb5ca"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f64f52671219783fdac003d6c227e6e4"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "bc711e2c3cf28b2fb30d7916a3d4a506"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ed3d13b048bef4c211840e421fcf36ab"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "956c3f2294d2a8de7d6577111f03e7aa"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "c870048d1120e966781fc829b0d575d9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2ea298f636b8bd91c65a98cfa5189a9a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9448c183c0ea661201934e32a81e3d0e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "b4a76abea1ee2a9126a6db3028ae0bfa"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "ec88de598704722bac528d7afbde9e76"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e4e90fc548e4ad26a0401d883c6945dd"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "e0f9fbc2553beac697b9cbf881bf8e1e"
  },
  {
    "url": "tag/django/index.html",
    "revision": "2623659c47621485ea38c2d7437a451a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "06b442b63754d8b6c1810f1e2cb8faeb"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "bc11f64f60022093a5b7aed7511eec40"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "aa9c1a953b2690b799a8c1f77f2d625b"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6af4a47ec51af8dcdd1c6c3a3242f463"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "865047587c290ae4953cc42314a9f580"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "d74bef3e33d88dbbab6d4d7daf4af317"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "e32ef6be529f6387ed8487c6d9f9982d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "47c7d137a57387a421ff04376ee3d866"
  },
  {
    "url": "tag/github/index.html",
    "revision": "76f217166a43f10206c50b96ab747997"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "ae5e07b1c25afe00770007cad72b068c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2d0e661c4f144ed470d9a8a63e4f1ab0"
  },
  {
    "url": "tag/index.html",
    "revision": "39150f457dc6056668d203882bb8173b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5a1f1e59f8c028c82a29acee3ffe9b26"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "7c1aedb1e6fab6e6b675288210f69b28"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "9669923afa48c9749478acea5976fc72"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "a67032b23f8ae82f2dfc922367ab4da0"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9281f14f4f19e9bd39632844f27e4b1f"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "222679dc299c7ddbffafbb942343e1d4"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "dce49ae632a33f09e0a0379af717c9ae"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a8b140cd388613888a0cc012552c46db"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "8f7a6fc581cd08b1f54ccd60fea712f2"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "dd7f4dc0c3a9f0851e2ea607da320c96"
  },
  {
    "url": "tag/java/index.html",
    "revision": "b3664c2d26497ba1471ebbf8c24698f2"
  },
  {
    "url": "tag/json/index.html",
    "revision": "bc3cf51b18d3b836b6735f0e5d2ee8ba"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "8e51345b2e43f6e9ab6815eeeacb7a2d"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "dbe3685751254d53b4947afc7d696c83"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "36fe2990ae2a6995f42cbbc07fbc2902"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e1dfcff120d4a79a76ba2b67b22b92f5"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "74b28bbde94f87d633502b71aea1a0e2"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "d4f9fe7f8ba1649269dae0614195c207"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f6d107483273071c570b3d36e550fb4b"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "63d918cb8388f5cabe46a650d267e1e0"
  },
  {
    "url": "tag/read/index.html",
    "revision": "09a46ac229326e19cd186454a55fda1e"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "acb65794e271ce90a44edc91135a3750"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b7cfb4014a144ac100d3b6d55cd3eedf"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "58341815ab9b76d6f0a6fc9b0218aab5"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "6f2064e2e007e4040952ebadc2141213"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "bd43bd752a1c08a14ef86431c76b0611"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a01d01845ea3a0eb73cde3ebdff8c1d2"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "dd6ca8c6e0593731fa6e2d7f8f23761c"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c3ac754e99f2981195c312ba1897429c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "9140b91782861eae8b2df045f6eb620c"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0319830cf0539852d22507e517b5fba5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "95e645f82019b0e3f441fa103a72caab"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "248ee21f8c5869a338dda2d4daa78e59"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2fb1eb02d73d5763c912dc2f564baa35"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "441c1b2d90b901e9b323eb2fe64a9283"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "9e2d23008a2def54817828b443f4baaf"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "77b5310ca8671bb69768cda4266d8c55"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "017b0456114323971328cf5a03e60e73"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "79ff4acefc87207e688c922fa71a8b00"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "4dfe6d7a5bede1f23781c13858a8661a"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "3bba5a2e13cdada77c927d796855167b"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "2d3a49d0b34471991b36998bdc81fc48"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "02ff4ee9248edface31876201036da8e"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "30aa768ce55b04b23ebba5b993793acf"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "872914756f27f8dee28191bcfad1bc4e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1d4f3de3f6235548b01afec85ec32507"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d498f10fb031b4a12445f95f4669ff04"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "332f9fcb8e350981ef7288a23a200766"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "65b4b49b5d9545b3dfbae3f2faafd604"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6b18398610fb0c6bc7ad981c8d099300"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3aeb090e9479bdccd59b2ce7534c914a"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c12ccd6b31e1c9caccb00dcdefb5c601"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "73a10178c02fb6947eb7c36494076877"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "58339fd559ecd11063c41cd45b4e64cb"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "621b56998bc6198383238e8c2f293a05"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7441141bb3c1fb8314139df91935eccb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d89e6750e9bceefadf130af896c529d9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "09406604a60d94f40ab5f808f2e608c9"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "bd9da3ad77c0693b7b0c96a677054c4a"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "d28ecd666a54621966745b812956090c"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "3b6a5eab3fffc9bcc21e9ef3ccbbd702"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "33d446fab87092ff78bb4b8a8f2c3959"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3d252e39d95e087f9c85545d25ed79ea"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a9f045c4d805c3931eea9ba01571d730"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "cc52c33245dd9e1ca7c8165c131e09bd"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "285b9b6a3400219bd18397a84ff3c084"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5302f809fea985a67b792de49ac67b74"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8dbaf5bb1d7bd1598dcf88bb462c0502"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1a0d9e38606a2862739af7f544e4c0d2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "20b1e44109551c99e57192b2c3cd6d68"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "5f036e6d3759e57d7cc503ba0014c055"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "6f2e28471812ffc69d87e8ee46c60167"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "63db8a48f9ba3192c4033dacf5fd450a"
  },
  {
    "url": "timeline/index.html",
    "revision": "26e1cfa12486892a729b7e09537ea8bf"
  },
  {
    "url": "tools/docsify.html",
    "revision": "fcfcafb9b166882c604e09e4892a9021"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "6aeb854da367aa0524dec7b250e3a3a2"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "e7e927c73f0e0ad80b6e39657784ba5a"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "15f17ab41ed1ce6de6205c002d74c1ba"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f5c794a1d06f06a8251cbaee9edd967d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "19fddfdb9d68a4efc9d39d82de52fcff"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "824548a9de23841ac201dfd3b0182d37"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "acf5c9bb89827306c3fb2d1fe63193e3"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7dbf6f369e7f1d61ee465fda43f007ae"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "4441e943b0a5d26979b1b76c1109d76f"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "3ec1403a4378ff1bdbc1625be9536eda"
  },
  {
    "url": "tools/note/index.html",
    "revision": "6131d08cbf55c1516a9e4cc54ffd2bda"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "b2dec75c297e7ee4c078e21acdfe137a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "fd940510a531b105a84872f6e5bdf60b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "6378576764e2e7b6336e63eb4e098c2d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1774085a7e8f2e2766073b0759aa460d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "f8a216429cc1132c102d51bcfc491641"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "fc3dcc44762d32931186955744093718"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "89b3b6a58609f52c7dae48b7375a93ef"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "1eedfa879c1b2f0c826a598844cc8377"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "dcc985c45965562b07fc8307aff88fdf"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "d869111aea0f33462b334c6b346f2d8f"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "dae0572fc03d2070feaaf58990128c4e"
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
