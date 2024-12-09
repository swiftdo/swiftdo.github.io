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
    "revision": "9c69b2ad21c28e4ea92dacd92654855c"
  },
  {
    "url": "about/app/index.html",
    "revision": "e5ae1bf1c6255d93e84e9ba71761e3b4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0a1a9ec34cc3c4e3b7c077b04b3519ce"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bffd82022dc5cf534bfbc40055c1d3f1"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "5b982a3cb47244bb0b7012468f7d663d"
  },
  {
    "url": "about/index/index.html",
    "revision": "3ac5c09ce3f2d53a5b40c71f5c25c4d5"
  },
  {
    "url": "ai/index.html",
    "revision": "10c361f986c0d38afbd883d1065a5c05"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "41d7b69f42bdde7c143e46527d626700"
  },
  {
    "url": "algorithms/index.html",
    "revision": "a660c29fb11b4f5b7f7f54e2cd8641f1"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "4f865c405ec2f7910ecb14b2ecaba028"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "8665c316c7231c65da1e3bbb943e2848"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "26ad4a9d6011ff7473d8ea72ec4f19d9"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "7e698e15f8201215775b7c585884afae"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "da9c15ad289ac45c93f734ef09d2780c"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "a94520a96ad6938038fdf0bf12746873"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "e7bad39d4d1ca95163e059a61722a82e"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "2a3b1162af24a8d149acb85863d6bef9"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "c01cbf05396d8487949fddc204cc48c1"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "62958badabe7637e845b4dd344c61a98"
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
    "url": "assets/js/101.33bc4bf6.js",
    "revision": "ff8f49c32fe0f00388319ff2bae5f06d"
  },
  {
    "url": "assets/js/102.57ebece2.js",
    "revision": "2aec3d60157f106b36563722a574aa69"
  },
  {
    "url": "assets/js/103.f6de070d.js",
    "revision": "989d05f2f6a761b1854a4df2ba071d14"
  },
  {
    "url": "assets/js/104.1c50cbb9.js",
    "revision": "d13ae93e6b94cdea16b660c6109b413e"
  },
  {
    "url": "assets/js/105.5949e287.js",
    "revision": "cfda0368c232231722721e36fb7c832f"
  },
  {
    "url": "assets/js/106.27902184.js",
    "revision": "48b8a2679d00db65440c9303922a8402"
  },
  {
    "url": "assets/js/107.c1c26920.js",
    "revision": "63f6005193fd1d081371fcdef56fd682"
  },
  {
    "url": "assets/js/108.a5f14257.js",
    "revision": "c436309473831e33abaa27ebd4d648aa"
  },
  {
    "url": "assets/js/109.8fd28a8f.js",
    "revision": "02f0236d249b84fbcdbf5a58d6ec4109"
  },
  {
    "url": "assets/js/110.da66fc62.js",
    "revision": "1376c0540be8047495495f3e81adb791"
  },
  {
    "url": "assets/js/111.620db372.js",
    "revision": "7b9d1bc8f95871d111913b261f3c6bb4"
  },
  {
    "url": "assets/js/112.802d6a66.js",
    "revision": "6dafd343066261aa0ce50db96ba36e6f"
  },
  {
    "url": "assets/js/113.cc3690a8.js",
    "revision": "952a4101a5777ad8ad2e8a4d31df908f"
  },
  {
    "url": "assets/js/114.4b2ff682.js",
    "revision": "7183e73093175dcf8c4070cbbc915fed"
  },
  {
    "url": "assets/js/115.65f8fa13.js",
    "revision": "5eaae5403abfe38edeac785ccfba53b6"
  },
  {
    "url": "assets/js/116.2aba9e38.js",
    "revision": "15e0dcece650e5458eae08fe58fa13f3"
  },
  {
    "url": "assets/js/117.26d56b1a.js",
    "revision": "a0017a538533aa1f35c801c7dbc45c12"
  },
  {
    "url": "assets/js/118.fc8d7b37.js",
    "revision": "e42dd3f6a34abcfaa0cf9569ccd024a2"
  },
  {
    "url": "assets/js/119.7c9bc466.js",
    "revision": "c7eef4c086af8d081422ef340d18cfe4"
  },
  {
    "url": "assets/js/120.a77a0983.js",
    "revision": "6e1abf08575f586c5472df2492f13f1c"
  },
  {
    "url": "assets/js/121.d0d1feac.js",
    "revision": "4b42e21a3ef56a6fa6fbc6794de0b5df"
  },
  {
    "url": "assets/js/122.ab4c75b9.js",
    "revision": "9ff55e75fe2b6a9530fdaa1e9d322f74"
  },
  {
    "url": "assets/js/123.75f8e81b.js",
    "revision": "65c2e38f4033d67a7ea884c32b625568"
  },
  {
    "url": "assets/js/124.6b531731.js",
    "revision": "987cf6413365fdce8e87a6e23b065191"
  },
  {
    "url": "assets/js/125.4431a532.js",
    "revision": "149283c28ecd3f9f12e64c8bdb0d177e"
  },
  {
    "url": "assets/js/126.f0dfb7bc.js",
    "revision": "82f903f3d2f9a60301738152afa006cd"
  },
  {
    "url": "assets/js/127.43929a34.js",
    "revision": "a2663c1f66b5843fdd76d482f61e6ee4"
  },
  {
    "url": "assets/js/128.9b430adc.js",
    "revision": "30bd76beeb08be7a5f146fabf51affb5"
  },
  {
    "url": "assets/js/129.6854602f.js",
    "revision": "cee98c7bf0462fb1d1864d629304444c"
  },
  {
    "url": "assets/js/130.5e2f1ce7.js",
    "revision": "42cd81036a2bf5a5b59d3cfa6e13917d"
  },
  {
    "url": "assets/js/131.fb171b2c.js",
    "revision": "ea880e173a0542daf8badb7e0c1dc370"
  },
  {
    "url": "assets/js/132.1656a4d5.js",
    "revision": "2a7c0429a472bb7cbc85b29427d8213a"
  },
  {
    "url": "assets/js/133.0aad5b65.js",
    "revision": "14e8283d31844e132a7124bb99e9b6c1"
  },
  {
    "url": "assets/js/134.8ceb601b.js",
    "revision": "701dd6247b0eedad78234c67b654d799"
  },
  {
    "url": "assets/js/135.47dacfb3.js",
    "revision": "dec507343ca99525ab4cef470939d4ea"
  },
  {
    "url": "assets/js/136.88c5b6cc.js",
    "revision": "83910fe109d873c2c6fcc8dae24f2ea1"
  },
  {
    "url": "assets/js/137.f0db6906.js",
    "revision": "19666f37d13a6de90e936fba4ea779dd"
  },
  {
    "url": "assets/js/138.a547ab0a.js",
    "revision": "cb4d6880fa938d8c64e1754e49b00272"
  },
  {
    "url": "assets/js/139.a943b65c.js",
    "revision": "20e847f611951fd1ded68e0ae3f0a28e"
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
    "url": "assets/js/141.6da91521.js",
    "revision": "836680887b98d9990fd1ae40250dd34c"
  },
  {
    "url": "assets/js/142.145ae92a.js",
    "revision": "828cafe0acdf52d49c5209db8c38a911"
  },
  {
    "url": "assets/js/143.9df9ef2c.js",
    "revision": "4baf5c526f6001eb85163c5bb34dc04b"
  },
  {
    "url": "assets/js/144.98cdfaac.js",
    "revision": "4483edb6fac135a7cf2cbdfbb9cf66bc"
  },
  {
    "url": "assets/js/145.d427f7c2.js",
    "revision": "32de1553fd53a6922da478e0281d9c70"
  },
  {
    "url": "assets/js/146.c75c712d.js",
    "revision": "7ebab4f0a4859b6c2715b10870a1a33e"
  },
  {
    "url": "assets/js/147.c86ae5c5.js",
    "revision": "34206524854ba95f45e6ec2705d9be35"
  },
  {
    "url": "assets/js/148.8993cab2.js",
    "revision": "adb5ba8ef75ba8b985769b115865b65d"
  },
  {
    "url": "assets/js/149.7019a8c6.js",
    "revision": "d8480a7307b1a9d519ba24b9c6570590"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.118dc69f.js",
    "revision": "d9c607905b88a067342d5da162f8eae9"
  },
  {
    "url": "assets/js/151.c8fdd159.js",
    "revision": "849a172de9ff1866f499787fca80f520"
  },
  {
    "url": "assets/js/152.e10530c7.js",
    "revision": "97ea52bf366037214b34b4644978cd7f"
  },
  {
    "url": "assets/js/153.bf834f4e.js",
    "revision": "afffe26d9307c05273a5bef43d7c725a"
  },
  {
    "url": "assets/js/154.5b981b3c.js",
    "revision": "d2d7183dc256a4b1bf600ccf51fadad7"
  },
  {
    "url": "assets/js/155.a3f8bfd6.js",
    "revision": "2399035422bf00c96538df811ad8fa46"
  },
  {
    "url": "assets/js/156.56a32a6e.js",
    "revision": "0263e1be9767637ebddfc686005bd9cf"
  },
  {
    "url": "assets/js/157.0585d7da.js",
    "revision": "d7f9fafaf9b95f4ca70edabc97630093"
  },
  {
    "url": "assets/js/158.cebc82d9.js",
    "revision": "fee995f3b35ee23756d687b6967f019f"
  },
  {
    "url": "assets/js/159.2ecd790c.js",
    "revision": "89ee522a87b80ac106891912e44fb153"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.b233d4f0.js",
    "revision": "a94e999ec40486e839ab946a482dec56"
  },
  {
    "url": "assets/js/161.61201068.js",
    "revision": "dac1f1128ffceaa16cabaa788d9250a0"
  },
  {
    "url": "assets/js/162.68bc37d0.js",
    "revision": "7c42979efbd54b88c10543e1e676808b"
  },
  {
    "url": "assets/js/163.0202df03.js",
    "revision": "6085a78148bce4bed63287fcbb33428d"
  },
  {
    "url": "assets/js/164.1f480334.js",
    "revision": "8972dac2594ab2a6496972cc161a9f23"
  },
  {
    "url": "assets/js/165.88fa9a30.js",
    "revision": "36be0ad1d2ae40bff935ef3ddfd3216b"
  },
  {
    "url": "assets/js/166.6383c837.js",
    "revision": "f3fce06356aa9cd18debd23cbbed6cdd"
  },
  {
    "url": "assets/js/167.ca81713c.js",
    "revision": "35755e7422e03b176b92afb5369ada9f"
  },
  {
    "url": "assets/js/168.dea44dfd.js",
    "revision": "99d6263ba772645591124d8b660aa59b"
  },
  {
    "url": "assets/js/169.5eff7dcd.js",
    "revision": "457a96b6f2af0591bffc303b5139ce27"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.13941a74.js",
    "revision": "5d078dd5001887d0b3126278d1376a42"
  },
  {
    "url": "assets/js/171.beea31bb.js",
    "revision": "893720c474da651c5aa4c16c84082ac4"
  },
  {
    "url": "assets/js/172.63c49f1f.js",
    "revision": "51f328657e4d6271388e1ed44056e460"
  },
  {
    "url": "assets/js/173.1f36d107.js",
    "revision": "b2cd74e5a1bfe48944d276b1644d5f21"
  },
  {
    "url": "assets/js/174.d3f04170.js",
    "revision": "2a6479fd1235156f4f4a00333ee95b73"
  },
  {
    "url": "assets/js/175.47e7b26e.js",
    "revision": "ae00cf26ad2c9736c8f85c44e8fd45bb"
  },
  {
    "url": "assets/js/176.9841d1d7.js",
    "revision": "e62a2ff31b911f7e1677bccb56943d72"
  },
  {
    "url": "assets/js/177.ea2499cd.js",
    "revision": "06838156724c573dae7c5d49677a5528"
  },
  {
    "url": "assets/js/178.62642192.js",
    "revision": "86af0f2fe7078f5f0e1505807f534bb3"
  },
  {
    "url": "assets/js/179.c3d8803b.js",
    "revision": "d1f6adf1ed8c44793e64bc09bf6ac981"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.7bd0b8f6.js",
    "revision": "aa2f5e5e289507dcec3fd321052a900e"
  },
  {
    "url": "assets/js/181.89b6bc03.js",
    "revision": "04402e936f53616d0206817629c268c9"
  },
  {
    "url": "assets/js/182.c2ac3539.js",
    "revision": "c85d00c9615b07375de5715d38c44718"
  },
  {
    "url": "assets/js/183.6f29cb85.js",
    "revision": "96787a160ae91f20d0cc9f6af3766a68"
  },
  {
    "url": "assets/js/184.86ddeb79.js",
    "revision": "95276aba2d3675f417fe64e0b5409daa"
  },
  {
    "url": "assets/js/185.0c4a767c.js",
    "revision": "d737087cba4169b22f678b6a7fe1d58c"
  },
  {
    "url": "assets/js/186.dc136b67.js",
    "revision": "2ab8031ace5f84d268badce6736a3b1d"
  },
  {
    "url": "assets/js/187.2a48fbe6.js",
    "revision": "82bcd6d7ccf1612d4aca5404b050018d"
  },
  {
    "url": "assets/js/188.49c9912b.js",
    "revision": "ca6083990117b04f85ead657447866d4"
  },
  {
    "url": "assets/js/189.2edc2364.js",
    "revision": "abe5f0a88be1ed70bee7abfbc1d8bbf7"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.cf5bb894.js",
    "revision": "00b80d1fcfa8479ee5dacacfc1ac8b4c"
  },
  {
    "url": "assets/js/191.e7465f84.js",
    "revision": "6ddcb500b61288dc6d52622d10d533e7"
  },
  {
    "url": "assets/js/192.a95da14f.js",
    "revision": "4e899818c32d525837d998ab62c5d889"
  },
  {
    "url": "assets/js/193.a94f2553.js",
    "revision": "3ef6dbb5d3065fec15d9a66a7946d10e"
  },
  {
    "url": "assets/js/194.28c8eb5e.js",
    "revision": "3408536c28708a5d9ecfd678248eb7d6"
  },
  {
    "url": "assets/js/195.2bbaae83.js",
    "revision": "4e5685d485e38e13b3f05d9cb36a6015"
  },
  {
    "url": "assets/js/196.4fb3be9c.js",
    "revision": "3e0ad78d47b42c4028e86a67eeec8ff1"
  },
  {
    "url": "assets/js/197.d32897ad.js",
    "revision": "a4014b222aa6f2176b3679fe767f672e"
  },
  {
    "url": "assets/js/198.b2acdce2.js",
    "revision": "8f149d3fa64f196e36f62d7f59a9c0d6"
  },
  {
    "url": "assets/js/199.88a698cc.js",
    "revision": "170d13f3bea5181cfa69bec0ec123832"
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
    "url": "assets/js/200.f6fa278a.js",
    "revision": "636c38bbeccdecff1cbf4d7da694a7e7"
  },
  {
    "url": "assets/js/201.8b49f5ee.js",
    "revision": "8b2a7ea38d3148bf260e1e3bd0adc24c"
  },
  {
    "url": "assets/js/202.f094a989.js",
    "revision": "2dc8c065cb10584ee5b7c49e347ab075"
  },
  {
    "url": "assets/js/203.d99d138f.js",
    "revision": "59b3e01b331fdf8eb2462dbefc7f6046"
  },
  {
    "url": "assets/js/204.50ebdc26.js",
    "revision": "14bf8845ab16e3cc8245507b03eda2ad"
  },
  {
    "url": "assets/js/205.991f0cc9.js",
    "revision": "f78433b2d0f88214a337eb5c19656080"
  },
  {
    "url": "assets/js/206.fb4d5088.js",
    "revision": "fb89afc3fbe64a1a193ffd91e4d8ff7d"
  },
  {
    "url": "assets/js/207.155b287a.js",
    "revision": "074881d2fe72cb02dcc2149e6377c82a"
  },
  {
    "url": "assets/js/208.90c9928d.js",
    "revision": "f9e7cee13b10823d740d4e15e4d38c3c"
  },
  {
    "url": "assets/js/209.7e25462d.js",
    "revision": "a4590988184358402abcc51f0e53ea46"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.01f5012d.js",
    "revision": "7876a5d651a81b1efc89922a2a6d796d"
  },
  {
    "url": "assets/js/211.bd072299.js",
    "revision": "afcd1b01ef3ace2ce173c4f1327c652f"
  },
  {
    "url": "assets/js/212.8c0a71ef.js",
    "revision": "5e12d88ad937e6c2eb65d8d6fce496ef"
  },
  {
    "url": "assets/js/213.a646d0eb.js",
    "revision": "f3fd2242e01752d4e784ad7163cca34b"
  },
  {
    "url": "assets/js/214.e0f58210.js",
    "revision": "237d969c11484ac2e23ee08e520450fe"
  },
  {
    "url": "assets/js/215.7999c8b2.js",
    "revision": "6c69e90dd3d9a64fdb2af29ed221bad2"
  },
  {
    "url": "assets/js/216.37b5b95f.js",
    "revision": "0e63312d8151926052449a688e6767f3"
  },
  {
    "url": "assets/js/217.66e4ec51.js",
    "revision": "99c95ee5263bddac391c63db891143f5"
  },
  {
    "url": "assets/js/218.15b4d017.js",
    "revision": "4da804a080b9eef5ef3a61cfb6e611c5"
  },
  {
    "url": "assets/js/219.5ecc8047.js",
    "revision": "36fb907740f42fb146ab21fbdaad1cea"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.18554f58.js",
    "revision": "d720c9b74126e52bb313b802399ead75"
  },
  {
    "url": "assets/js/221.bc72fe38.js",
    "revision": "bb52774b93265f7deb3dada0b0cb1dd3"
  },
  {
    "url": "assets/js/222.ae1fe2e7.js",
    "revision": "87864b04c9794661a1e52747d6c72c0d"
  },
  {
    "url": "assets/js/223.0303e045.js",
    "revision": "135d9cbb71109082b4383aa73c41055a"
  },
  {
    "url": "assets/js/224.6ae989cd.js",
    "revision": "e26bafd0fdc407afa4b6a41ce0f20e6a"
  },
  {
    "url": "assets/js/225.5216187d.js",
    "revision": "f28b6ebe7381770c6a3232e49f7a44b8"
  },
  {
    "url": "assets/js/226.3913a931.js",
    "revision": "99d61b839b97817a02eb0e4be566c7a4"
  },
  {
    "url": "assets/js/227.fb933a23.js",
    "revision": "88ae2318c16eb7e6129573da54881354"
  },
  {
    "url": "assets/js/228.6f85d0d5.js",
    "revision": "d6e4e86b7d1f3e3a5492aefe93e6795e"
  },
  {
    "url": "assets/js/229.566a901d.js",
    "revision": "cee8a7bca197ae55dda816293115c209"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.2501148e.js",
    "revision": "96881d833dd13686618fc74598ab2f58"
  },
  {
    "url": "assets/js/231.e7dd613a.js",
    "revision": "189d1b6f7b911af296f7860f801917d2"
  },
  {
    "url": "assets/js/232.788651a0.js",
    "revision": "e9bac0c816e93cf2d0b83e193e798c11"
  },
  {
    "url": "assets/js/233.6ff0f962.js",
    "revision": "72df31623b468bf837c4f838a34a47d3"
  },
  {
    "url": "assets/js/234.12bb64c7.js",
    "revision": "4735e217fa429e8123954ceae2b2f425"
  },
  {
    "url": "assets/js/235.c886b840.js",
    "revision": "89dda12b4a6f740bbd3e75c082359c38"
  },
  {
    "url": "assets/js/236.6ba37aaf.js",
    "revision": "3d603e0ea47eaab6b87ff32711b5e1d8"
  },
  {
    "url": "assets/js/237.58508489.js",
    "revision": "709d92e5ceb1ccedfce8ce1c13a7654b"
  },
  {
    "url": "assets/js/238.64488fbe.js",
    "revision": "490de58dc3b6cee00c9c560f22dd868e"
  },
  {
    "url": "assets/js/239.746b3961.js",
    "revision": "fc69ae73a1705998806bee042a509c61"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.229089d4.js",
    "revision": "4ff90e0a0c1f1a2c84eae198d8dd9bdd"
  },
  {
    "url": "assets/js/241.03ab5a16.js",
    "revision": "54812cc48ebded3cbb2e1af00339f27f"
  },
  {
    "url": "assets/js/242.45b42f0a.js",
    "revision": "1514fc3fc4a02529c07e68b451c4f2d8"
  },
  {
    "url": "assets/js/243.9f19e64d.js",
    "revision": "31933b4bdaacd38179878ef7ddc77c59"
  },
  {
    "url": "assets/js/244.301b3c02.js",
    "revision": "27e4878b12c3c7619426e34eea0acc33"
  },
  {
    "url": "assets/js/245.de27c9bc.js",
    "revision": "d926759122367412d1d662020ebac222"
  },
  {
    "url": "assets/js/246.18637e73.js",
    "revision": "64cff95823e0d2ffb6cac431776e5fc0"
  },
  {
    "url": "assets/js/247.b6a5ae85.js",
    "revision": "6ba9d1c52921e7e1151179cf709475f5"
  },
  {
    "url": "assets/js/248.0ab6fc19.js",
    "revision": "98d65afaf1d9db2b4499b9a2c491f5c0"
  },
  {
    "url": "assets/js/249.92314916.js",
    "revision": "0b26109596c626872b07d2e675b4b0e8"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.15216dfd.js",
    "revision": "69aaefa6957e8db3284fec0522bf313e"
  },
  {
    "url": "assets/js/251.f846e575.js",
    "revision": "0fa0a2e8c2854eee30dad1c7570039ef"
  },
  {
    "url": "assets/js/252.fde88527.js",
    "revision": "4b90aae3e165efdb8d1d8a366fa43343"
  },
  {
    "url": "assets/js/253.e3df7de3.js",
    "revision": "98d62dddec0a11b9573b865a5457ad27"
  },
  {
    "url": "assets/js/254.8e2b4502.js",
    "revision": "23878b99b61f874ca74cfd3099467c73"
  },
  {
    "url": "assets/js/255.df39f7f1.js",
    "revision": "86050697c349ab573837400d39d33002"
  },
  {
    "url": "assets/js/256.8cb5439a.js",
    "revision": "7cb103562f930185ba6a5420b5a0b510"
  },
  {
    "url": "assets/js/257.76207b58.js",
    "revision": "73620d8040df26f0525c87d5533e2146"
  },
  {
    "url": "assets/js/258.85f55152.js",
    "revision": "6a4b2515449e0e58051ee9dc6486b5a3"
  },
  {
    "url": "assets/js/259.6f7a55ed.js",
    "revision": "5d3a71f6180ef6d89d0f279a4b227dfe"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.29ef26e3.js",
    "revision": "420f0d6fcc0d7373f3fe00b59799da97"
  },
  {
    "url": "assets/js/261.016139af.js",
    "revision": "8c5ae39f0615301cfe8a8d17584cb41e"
  },
  {
    "url": "assets/js/262.762612ec.js",
    "revision": "6eab8940d33b2f8efe3be65afb63a878"
  },
  {
    "url": "assets/js/263.4720c7c5.js",
    "revision": "07dd9d1f3bf7b748cfd39e0d52c51915"
  },
  {
    "url": "assets/js/264.369fb487.js",
    "revision": "81873b607d4f63db21bd56cbed3146d7"
  },
  {
    "url": "assets/js/265.73253210.js",
    "revision": "b0c8ceedaa671bd2368c6efcf6a9742e"
  },
  {
    "url": "assets/js/266.efc71b67.js",
    "revision": "f38fd2d41c2fb544f5f699fa04c968d8"
  },
  {
    "url": "assets/js/267.8dfb0edf.js",
    "revision": "98be93e9fea164c816fafd7f1ddfdcc0"
  },
  {
    "url": "assets/js/268.69ce4a88.js",
    "revision": "907fc2fefc254794b5a032642220b5c8"
  },
  {
    "url": "assets/js/269.ff890a56.js",
    "revision": "fa394993d76e278299c4d50ba7e88aa7"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.ca3bcd76.js",
    "revision": "c041dc1e4afd5d0b571ec8f8f9d2b1f7"
  },
  {
    "url": "assets/js/271.9c50dcdb.js",
    "revision": "40fc1ec0dc7ab15bae6f3fdd30d21a1b"
  },
  {
    "url": "assets/js/272.ed905951.js",
    "revision": "eaa6b008a2ef844b9a7cc7c6b732088d"
  },
  {
    "url": "assets/js/273.081e3e1b.js",
    "revision": "9b5487af3fc7672ee307005b4e5fc455"
  },
  {
    "url": "assets/js/274.846151a1.js",
    "revision": "d2f3415fd3d79ae53183e08c3a4e1107"
  },
  {
    "url": "assets/js/275.0cbc72aa.js",
    "revision": "35c86e5703d02aa8b9a7bd4a74c467cc"
  },
  {
    "url": "assets/js/276.f3c61a65.js",
    "revision": "990a4d5c82190e6432a8831f5872d91f"
  },
  {
    "url": "assets/js/277.62ef1f4b.js",
    "revision": "c499cc423abf811d2c78c46856bcd522"
  },
  {
    "url": "assets/js/278.54e1f6b9.js",
    "revision": "be09e166ebe83b2b72d29e9f7e62e6cd"
  },
  {
    "url": "assets/js/279.e0f09272.js",
    "revision": "d6d9bf82dc31df5d080f6ada0634c947"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.b59870ad.js",
    "revision": "28713dd3897a6725b575db33533d2e53"
  },
  {
    "url": "assets/js/281.42d510bc.js",
    "revision": "7245784dc8cceb3c486ad8d0a33ddbff"
  },
  {
    "url": "assets/js/282.3c51ff8a.js",
    "revision": "d9b7c27199fd93dd87e4afab5d1aeb65"
  },
  {
    "url": "assets/js/283.d1676cce.js",
    "revision": "34a56e743448771d1d5d5383e75dbb08"
  },
  {
    "url": "assets/js/284.ce9ba3e7.js",
    "revision": "2ea146779343fab558d04162c412b253"
  },
  {
    "url": "assets/js/285.5db1574d.js",
    "revision": "9a06eb79edbb9e328843f23f7ed98202"
  },
  {
    "url": "assets/js/286.44c4249c.js",
    "revision": "b16f21242e95fbd7181061e64fba51a2"
  },
  {
    "url": "assets/js/287.da639e3e.js",
    "revision": "7787579d4a0b20d57a69e4b83c0f220b"
  },
  {
    "url": "assets/js/288.2cd086bf.js",
    "revision": "e114f360666e3b46e62caa2572c83be6"
  },
  {
    "url": "assets/js/289.d2fe17bd.js",
    "revision": "7e427ae9d0d4814a9c286d90f4064f74"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.eaaad6c4.js",
    "revision": "c371a292ea50ae55df31077c0fa8f348"
  },
  {
    "url": "assets/js/291.6d82f81d.js",
    "revision": "7fba3541f5d58c00ce0a007e5f1e5e48"
  },
  {
    "url": "assets/js/292.59e45546.js",
    "revision": "9f4f07579918cab75982a5f4fc9bb399"
  },
  {
    "url": "assets/js/293.5705f7e4.js",
    "revision": "1c4fd3464eca6cbc212e9951074ab569"
  },
  {
    "url": "assets/js/294.c9447303.js",
    "revision": "98cc9d6de3fe98eb531ea61b380dc966"
  },
  {
    "url": "assets/js/295.cfe31812.js",
    "revision": "94d9625b38925d89882c3d6ce2c7c2e7"
  },
  {
    "url": "assets/js/296.7ac65196.js",
    "revision": "b7cb0cd1670a1d664ecebd7024e397f2"
  },
  {
    "url": "assets/js/297.71bea2cb.js",
    "revision": "e0cbd009cd3313d691b75fbc87dfde32"
  },
  {
    "url": "assets/js/298.a4119fdd.js",
    "revision": "345e3101b612a5033f290eb0d69f50b1"
  },
  {
    "url": "assets/js/299.354d9c10.js",
    "revision": "cc3872829983fffe8ce4e6b57061835f"
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
    "url": "assets/js/300.b2d4f1e9.js",
    "revision": "31ade0c51302ae3f8334f1ad802623ea"
  },
  {
    "url": "assets/js/301.86080924.js",
    "revision": "cdcb378be18aeeb2a60891a2e4b50479"
  },
  {
    "url": "assets/js/302.de08064b.js",
    "revision": "e5d0e8a1f9fd398fcea4e8c08f7e2579"
  },
  {
    "url": "assets/js/303.0928e86c.js",
    "revision": "b61e8f828e3a33ae3d905efabb64f7b7"
  },
  {
    "url": "assets/js/304.20d1aa65.js",
    "revision": "a7430884faf5657a479a6a5efdc088d4"
  },
  {
    "url": "assets/js/305.456a6a45.js",
    "revision": "65d22b6beb2718542f4035c61c875359"
  },
  {
    "url": "assets/js/306.92474d03.js",
    "revision": "0c1f89e498c458b92c056b634a731da8"
  },
  {
    "url": "assets/js/307.f2cf7aaa.js",
    "revision": "8960c95df82b3e1cb07ce8088177d51d"
  },
  {
    "url": "assets/js/308.112741d9.js",
    "revision": "8f32b7280ed0ecd197d7abcf41adb398"
  },
  {
    "url": "assets/js/309.372f49f7.js",
    "revision": "c58fcc16f122034d0ff97ac94b5f0fb7"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.353edda3.js",
    "revision": "96fd0e5cd353db41a79d89000a264749"
  },
  {
    "url": "assets/js/311.cf9fad8b.js",
    "revision": "37add9565f101584e1b2516b7031949f"
  },
  {
    "url": "assets/js/312.16023b13.js",
    "revision": "a8f8e7005368b98ecd8765068f2d1393"
  },
  {
    "url": "assets/js/313.03f2f715.js",
    "revision": "8249978b7487c6d69a3187cda8d21607"
  },
  {
    "url": "assets/js/314.2d20a428.js",
    "revision": "52f7388579a23acaf3b11aca560426cc"
  },
  {
    "url": "assets/js/315.ad95ed95.js",
    "revision": "d5cd08fb78266d5c1ee8874bf77c247b"
  },
  {
    "url": "assets/js/316.09e340cb.js",
    "revision": "8dd6f30be948fc201ea241e260e07b39"
  },
  {
    "url": "assets/js/317.c033a5b9.js",
    "revision": "213d0e46a0c0d7b501eabb297c8fbe96"
  },
  {
    "url": "assets/js/318.d8515a0e.js",
    "revision": "015db75a17bd34de7cd54edffeda481d"
  },
  {
    "url": "assets/js/319.6abb0df5.js",
    "revision": "201c0dc9f35535a59f68c2dab41bf6a3"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.e55feb4c.js",
    "revision": "8e605503a43f25a58ecef0d16dd58685"
  },
  {
    "url": "assets/js/321.406ae1ae.js",
    "revision": "5ef0e9e44aaae18604cc40af354f6d86"
  },
  {
    "url": "assets/js/322.ab4c74ef.js",
    "revision": "edb46496e7870fdc54b7348d424c1ba4"
  },
  {
    "url": "assets/js/323.d7443a41.js",
    "revision": "91715eccfb2259c959b1247ffc86b07f"
  },
  {
    "url": "assets/js/324.04063a14.js",
    "revision": "64df10ba7e211873f9f0befe396b65d0"
  },
  {
    "url": "assets/js/325.024ae530.js",
    "revision": "2687f506e22cf009686d39ce2d8d98b9"
  },
  {
    "url": "assets/js/326.98212fcd.js",
    "revision": "2d27186db3761343090a594bebeaa466"
  },
  {
    "url": "assets/js/327.a9949d00.js",
    "revision": "ae5e015277fdf14dabdafbb324fc7494"
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
    "url": "assets/js/42.1900cc30.js",
    "revision": "a2c6044fa4791ee2006acb32f3f109e8"
  },
  {
    "url": "assets/js/43.83a99001.js",
    "revision": "3a2f887888b9ffcd0373af50f4b511eb"
  },
  {
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
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
    "url": "assets/js/48.60b76064.js",
    "revision": "3ebd9175414e05a113a50fdabda4b7a1"
  },
  {
    "url": "assets/js/49.7e1c32d3.js",
    "revision": "28b1f9f76fee42aa8495c353eaf22d2d"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.97627448.js",
    "revision": "a79960ca5981408583ce65d57b00beb5"
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
    "url": "assets/js/53.45227a80.js",
    "revision": "6f4132f2d940f906b145dd6e7c66daab"
  },
  {
    "url": "assets/js/54.a9832a44.js",
    "revision": "1573a1c21d6b23d15385a1e3cc147a34"
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
    "url": "assets/js/57.7a3df85c.js",
    "revision": "fca67054031cb8a7848d6c1e1b3dc0eb"
  },
  {
    "url": "assets/js/58.708f1da4.js",
    "revision": "ba1bce3affe248227d211742194d3512"
  },
  {
    "url": "assets/js/59.3f7686bb.js",
    "revision": "b69d6e68d5d912eb729f01b10394d9ff"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.9ed7006e.js",
    "revision": "57534fb9257a3bf8fd3621a0a28f9131"
  },
  {
    "url": "assets/js/61.dbd40088.js",
    "revision": "ade422e68e0d026799a3aa8a6e41a886"
  },
  {
    "url": "assets/js/62.0b106852.js",
    "revision": "1dfd51e31aa3958e6043a1cb3b88d3e7"
  },
  {
    "url": "assets/js/63.458fb699.js",
    "revision": "db54cc39737880e6ee11984b9f7056c0"
  },
  {
    "url": "assets/js/64.d65aa49e.js",
    "revision": "7a43d194f971f9afb6384bbf4b2784ed"
  },
  {
    "url": "assets/js/65.f1ba5230.js",
    "revision": "dd01fbc54a1ef94c270ac2a4f0496b47"
  },
  {
    "url": "assets/js/66.0acc8980.js",
    "revision": "cefeb48595de77513f5ece162056c346"
  },
  {
    "url": "assets/js/67.4e946af9.js",
    "revision": "9dd7fb7b9acdea40738ff024d12d6804"
  },
  {
    "url": "assets/js/68.be49802f.js",
    "revision": "8e351d41927ab1dc4423ac38f99e195f"
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
    "url": "assets/js/70.0c637ce6.js",
    "revision": "4ab2abc81df44e78a581072740e1e33b"
  },
  {
    "url": "assets/js/71.2cd7c294.js",
    "revision": "a2938f739a33132c27221f54a76adb8f"
  },
  {
    "url": "assets/js/72.5520a4ea.js",
    "revision": "e48a799151096d627ec03d9a26662866"
  },
  {
    "url": "assets/js/73.2a5f0f92.js",
    "revision": "aee43bf3262c86b01bee8d4bd58237a2"
  },
  {
    "url": "assets/js/74.6b0ccb1b.js",
    "revision": "3890458736aa9d3b9e8ebd66033c9896"
  },
  {
    "url": "assets/js/75.86a024cc.js",
    "revision": "a94cbe515546dfb588708a172f8573b8"
  },
  {
    "url": "assets/js/76.760156a1.js",
    "revision": "d1ad4370345a6be574d515bfd69979c0"
  },
  {
    "url": "assets/js/77.6ee47d8c.js",
    "revision": "a313442ddd695df2736eb2b81a55f189"
  },
  {
    "url": "assets/js/78.1dda16a7.js",
    "revision": "3c30869876a7f8f95648f0a348d9839f"
  },
  {
    "url": "assets/js/79.854a37d1.js",
    "revision": "6c802bdc2e78297777be0a441865f4c5"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.5ec648f3.js",
    "revision": "47938fbcb39281bc96f49c8d473e7665"
  },
  {
    "url": "assets/js/81.2aa4543a.js",
    "revision": "b5b2d6383e81b72e0cd533af0b007745"
  },
  {
    "url": "assets/js/82.8682e5ec.js",
    "revision": "82882f013b7abffda2b379c93bfdb55d"
  },
  {
    "url": "assets/js/83.5ca9d85d.js",
    "revision": "8e240f03c43ac544ef40a58061375b10"
  },
  {
    "url": "assets/js/84.f8a3a53d.js",
    "revision": "3531eb6d8accc7587a6d3a3bbe220c90"
  },
  {
    "url": "assets/js/85.d25d2152.js",
    "revision": "90927b83d5f3fa0dd95781af48f683a8"
  },
  {
    "url": "assets/js/86.b84a0aab.js",
    "revision": "45af395337513811121c258f2bb03831"
  },
  {
    "url": "assets/js/87.d4b8fd64.js",
    "revision": "65a948b69ffd8754910f119801ea7dd4"
  },
  {
    "url": "assets/js/88.c09e18bb.js",
    "revision": "c911d620fa3c004a1815c54feaa77d2d"
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
    "url": "assets/js/90.7a3a8053.js",
    "revision": "4e2237f5e3df14cc7a6df06547469b1a"
  },
  {
    "url": "assets/js/91.535e4de7.js",
    "revision": "2155c4d196f0c99e2bdde245b195b551"
  },
  {
    "url": "assets/js/92.ebae2d6b.js",
    "revision": "bdd7202cf44431d2f0ef2fa91566018f"
  },
  {
    "url": "assets/js/93.88dc9f59.js",
    "revision": "530ea45cbe6d8afe29711c702f6824e5"
  },
  {
    "url": "assets/js/94.c0a89dc4.js",
    "revision": "a231720d0d6262a9a2e53cf9e7e70578"
  },
  {
    "url": "assets/js/95.a8e7cd88.js",
    "revision": "5ef469cf0dfede59eee551c6a75379f4"
  },
  {
    "url": "assets/js/96.394f1ea0.js",
    "revision": "c839b1234622b9fa8de103767035ef47"
  },
  {
    "url": "assets/js/97.3e9143f6.js",
    "revision": "e85066e484f885fa14251a768020c858"
  },
  {
    "url": "assets/js/98.b7cdb2e7.js",
    "revision": "0d2a843eb8612ac59b13e3388d49b660"
  },
  {
    "url": "assets/js/99.9669ec75.js",
    "revision": "110c745cf9af51e1a874195157c6a3f6"
  },
  {
    "url": "assets/js/app.c9320cec.js",
    "revision": "82000144bc02f566bc8f4b062767e594"
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
    "revision": "cfac52529051fcaefe79d1e04129c2cb"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e7b7a455f62ed7bdf3864c14cbc0fd92"
  },
  {
    "url": "categories/index.html",
    "revision": "ff0c08837814367cdd9b96d8ab82aa5a"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "544ecc44376bf139049e3651c822ad47"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "e13db67ff0e05918c5919363f4752ada"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "976d78a490f98315cbcd952f9e4f400e"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "7e7c903f5e7d856df84f647dc7763304"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "f0c6e647dcfd1adabc4c87ffdaa42465"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "ac4e3a59d8963ed77ee518fff5a1c228"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "5f43c1d402b2d7e897d54555ad835159"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "dbce6da0513ed669a686b933f17ee229"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "c9eab5daf72d7b00e71a3e93e7c9b724"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "9a145e0ba09c130232fc025fcf74aee8"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "d1ddf078caa770ef03322ad4dcad9de2"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "311e8c686db984363b6f035d6de64dc4"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "63ff7fea0743aa5f889dfe1ffa00f093"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "7f351c639554b266c7008ed7f95a1d9e"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "96c6dfd4a86a0a66c37d1d62bfdbeb8e"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "371508d202ad1d21c15146bc2225106b"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "dce533327d6ad554134458325faaa625"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "94abd7e69d8d0ff37f05998b381cd387"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "7314aa4dfa3930be9becbb9b2c77c8ba"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "2061918c305ff96e344b4328ec3da53a"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "0ba5fa365e5d0a9a59814f32b7a60b54"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "8991eb55af535433f23a83a242f2caa9"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "b1c866edd025ed3417e55a68807745c3"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "ba320315cec637d6a535c9f66debfde8"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "b0525374caaed6b14ce5a014c7d0dc70"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "950d7da2d0c0dfb0b548005215761f7a"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "beb964f3134c44ef85f331e17a6bcc32"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "e2ae8cfe7c69172094a1b97a23084b04"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "3e1d72bde1dfc2c73905c7e2205b8ba7"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "7e397932f564db577cb9c6e6814b2f6b"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "57d51e39e05e4212db213e87d7220995"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "6800bad27adff37f285da37873e00312"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "10b58988e24b059ac195e9e36239e5f7"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "f231593ed35999f326c9f7f3cc644d26"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "a2904e0507cb9d068c3b8762265f98ad"
  },
  {
    "url": "figma/index.html",
    "revision": "3263f6535496ea7ce7fd613108245704"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "06f1ded27f14b1d8e72027f2cea8727b"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "a8a97d98744f8e6cb9b12b8f41b7611e"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "f97cd170bd4913526fb27c0dda79a33c"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "3f36d8dc92aaa37f1dcf6d5877614025"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "adbf37422f3eb09dc0bcfb9ac11aab16"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "1c18ec9c8c60a59a381de3eb8f2d639d"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "e8a5e04f3c4419423c77ec2b3b202a7d"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "7ea18032dc3937aaa4aa1a1e364434f6"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "01ea713a25380b3b02fa76314d67a1bd"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "c832c7bca2c66455d14b7d97255b5696"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "94ed0ec09ccc9de27cf9ae08ea8b40bd"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "61e48c4e669ea1824bff37cc7728442e"
  },
  {
    "url": "flutter/index.html",
    "revision": "69ad05853a516c0018ac9b52257d99aa"
  },
  {
    "url": "flutter/point.html",
    "revision": "20ae2227d03b4f5766c302e80001eb7f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c7c0a901c5d09f27c8f21ce6cd1f3ba4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "94854057beeba59827ee622a27ffcf8a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "380ecbb134b373bf9e4cc8709264e276"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4781a720d1439f8306d151a2aae6c498"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6343a83795d270bda16bbc286b2fbf4f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "16613e44b5007351512a9c3a6ade085a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "026633231e56bbf15e9bd71ef81fb5d5"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "130160ba238e9703cca1759f976a2c4a"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "7f553ff0dc1321d84eeacae101545a3a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "5a03f576635e8c9f869612cd0323bf76"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "b3d4f5306fd3529e05faa057713b5ad5"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "7c0481d632914b26465c29ca2bb03017"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "1f2698a2968a05eb7bf6b5586b4b1b93"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f4316dd0248b3824738214a433c5f92a"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "0ba34988a477e134bbfab1fd40cef397"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "a8c24e1289474ec30ecdd15aa19ce3b4"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "226415641490c26c7249d0529066df70"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "df454dac15724356b945bcf03f5e2cd9"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f8b9d2bb66f802770afeb4cf74cfa2dc"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "8059a1caeb580ef0d9df031608baef0a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "52f58e5e26249b15ae6d08141bbf1c4e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "09ee8ae319902dbd2242436ef47bf72c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "15230a7799c60b6e67dc490191f5650b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "0eaf1ade8ada5b86dc00c44549f9cd18"
  },
  {
    "url": "haskell/index.html",
    "revision": "369b02ad8c66167950c4f7cb845b9d35"
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
    "revision": "1bb815c4d01eec5c49122acaa64b27af"
  },
  {
    "url": "java/index.html",
    "revision": "addc19f78a1939c1083ca6ccbb59c5c1"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "8297025a1938bbe5355b14ed6e54d49a"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "d2f1ed154f4de815bed19cbaddd821b5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "9a0dd441d1c8bf1b1b7fea02c5a1d167"
  },
  {
    "url": "ops/index.html",
    "revision": "7e6e79f936b91bf1831b8104bc033407"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "bc49c26ce38153f2c262c4070aff61d4"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "b374d65dda618a9ed3f5fbc1be6d05c1"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "3380430b402a28645ed7cb1898199579"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "300a628d952eca461b56b61149c00516"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "49c9f71b8e3d014b0fedd809b4c727a1"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "e650701a37bb7915876080f7c44c3515"
  },
  {
    "url": "python/index.html",
    "revision": "85afaaecacb786d914312bc2a947c296"
  },
  {
    "url": "python/poetry.html",
    "revision": "b4a023a961880af60d5ada1371041866"
  },
  {
    "url": "python/pyenv.html",
    "revision": "3aecd654f29a935e1c2edaaa2416686d"
  },
  {
    "url": "python/python-ase.html",
    "revision": "77e59b575da0bf8c3db9eb1af7bfdf36"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "f387697afb36963d98bc592f80477f58"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "9149e897f06f097e33b20acbdec02d11"
  },
  {
    "url": "python/python-file.html",
    "revision": "cd6d28f64fec21ed802cf99030c8504a"
  },
  {
    "url": "python/python-function.html",
    "revision": "0b62e72fe14637699c6c6a631f82ceae"
  },
  {
    "url": "python/python-generator.html",
    "revision": "e0c89e86de8752078daf9d35e48086a8"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "5b31ca32f3dad0603c9521b898501e10"
  },
  {
    "url": "python/python-module.html",
    "revision": "f917169613be3ececc506cbda16169da"
  },
  {
    "url": "python/python-string.html",
    "revision": "07e59a421c46ab3be81e2c71c898910d"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "2a6c43716869fd1c61e0f3ebc2355b7a"
  },
  {
    "url": "read/index.html",
    "revision": "e27473f96722bdeae214ea65f4fab6f7"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c3737312bf681b6532a391d9c3cba995"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2ac7494ba9644b1111b97da5ca00e4d6"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "db8b429f91af9e1009fa842b99f13d9b"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "ee1f33f9c817deb71f5d09401a048b93"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c12e578f8832332dc1254357d9de1cb9"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2f18717cd7dd0f4c8b06ffd46a7ad4f4"
  },
  {
    "url": "swift/better/index.html",
    "revision": "ceae70d23404e3405376881f3e0a9167"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9f2a06101d8a34b70ab8a641a9f9f980"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e6606e802b189b38a7a34f532ee17c98"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f16103b3876ef12468123cea3d8b739b"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "85196c383de18caedc3025e9d69451e5"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "3e1c441527434e56d554d34ea4f25cc5"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "deab21d491e34b306ce75c19eca90017"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "721689d769d2cba85659eb746f2b29ed"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ab95437df1a29a9e40b98e66562ba5fe"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "f8d2526da65b74e543b63c7e672118cc"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8b6a14db246286b88f3df0fc1fb10209"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "9b399f1e87e234e515224a63c7bb2a58"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e24088e01270219ad3f6696b2d3d1f9d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d44caf63652b3ea6be4858bbd6d6822f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "cad0a2e3b4b685118803e07f0b1b9aa3"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "fe7afc1f371f254c569e6007b05f6e6f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "bfd0d21b9f2521a9c3b9552e93e17c24"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d3a32ffd16e717799e469f28a627d4aa"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "19ac8e932f6ddc64ba252681d34db45a"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "6f2ce6aef4ef1145acefa8045aa0a9c3"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "421892affa2359206d6ab7a778989b3d"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "99a1c81226abd4203586d44e9cdb6465"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "4469b789ddf57eb73bcd1ffa23e4188e"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "b92b7929a382b19cc5657fda154a71c6"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "876d8cccec8a954152fe126fe5f8e9a0"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "9427da6fbd5080f2b3a394e55aa665fe"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "81717270a50905dcc54ebafb20fa4367"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "3c98b41c8282557ea76976ac43fb9a9b"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "d993414a45c8d5307b8f0a318a79a3ca"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "6b80a116bfd84aa0987562b6849b13cb"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "647633e059ec3967410b6a6047a3c7d5"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "623fe688a6726c2d3b56182556cbed7b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "26d5e6fa2c8136d02ecb2435542e32ed"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "adf318a976c4d04e4b7b291c79ce4105"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "2245bedbb2ae40ad89ea2f51d4c707ab"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "775d5e07ebf03c1bf0605089b80b1e95"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "314158affa2770cb940ecf19517b838f"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d5d99d509b2bc9cfc06f0570676b1cf6"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4f8933f7b82cdd699f61f2a2d35f850f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "1b388fb00a158a7d2547a8b8413d9f7d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "f404901209cac19f901a83d7f446c860"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "af7f142237831b760f29cd1d70458a7b"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "abafd85dcb74cae960dc21bd8d6990bf"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "ac2fe051fe40be32350a40ec7bdc6d62"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "24c4c45df580aa4acdbf159db35060c1"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "c05d36d37684783e5da2ad47157e9274"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "d20c8758433dd4a1773696d308c8d9ed"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "9965b0bfc20137a8b8f61a5b3122a0f7"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2f644f3dc6b6d30e32106ff687e63383"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "93f750462a9f10269ee35c3ddc57280b"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "7e1f9782b96eee123580b799d8aa10e6"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "d42b6a954338405cf3af84808dc47537"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "0f4a41c183ef993cbea8102b3c4ed47a"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "c48badffd9cb862c1085bcacafaa69f6"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "21980bf09b17bc08163fdcfe269f6861"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "da4c4b3663bda61ec8e4be5ab33d0390"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "a5ac7474d69c60c78f5eb226b92002ac"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "6a76bf73752982a49b211d39e9287472"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "39624775e51355d25467a0668e13e4ba"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ec773a7b586647efd2b546043c289546"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "ec22116a588eaea082d70bf1c0086c3b"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "a20bfd61d28f26e48b2b381bfbd14640"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "6725372171d8298452199d3a04ebd0f8"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "055b242810d52395856df8c216f5bc15"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d586dde187cf33592f4afb6a486fb32f"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "afede38ca33b83ad07f3002a0962b0d5"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e0e8943b74c1b251dead01a83314705e"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "45750c7ce3ff9c191d402d040d11a03e"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "248ae40c378a7f8bc130c8edd2aa8112"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "d0895921002891f5bbbe496e55fb5ebe"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1995822c68e8d679a9b186d76b7a7c62"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b83b7742e232c4f0a09389126796dbf4"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f3b1549dfffa7707f5498a63cb60b61c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "7b39024b292db556bce6c820ec5701f6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "43305b56968c12e45f3a448ec5feead6"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "459f5b770d45df44b4e914246bea4bf4"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "d2e3eadf665371ccf5f77d039b9c4772"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "709ac3da2584f9ed2ad869fec5bcfb2c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "b70227a8b7e4df9d44483c950a4926ad"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e8fc48198eddd4d0a91f04fb9ab0abb2"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "691db9432e6b11c3291626dd066079f7"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e364d4f750e8bc2719cb5b732499f5a8"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f65541c6a1cdc04dcb06d5ef2f1df1b0"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "d225a8068d624465be370accb1d61db6"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "57423f61a8de1cd408b787b8d48ad64b"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "492b27ec49a45e8b745ebdc300ce0c10"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f2a8471f5b3205d4c98bc3a98221a864"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "3f92bb4ef8195fb6766580299d6f5948"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "493e0f9116786c70a847d8ad4c520151"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "ede516c4680aaa8c04f436e6cffe63a6"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "31e22e0dc4543c87671a5ddb26762558"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "a7fe5b6b98f1e968efe09dd426d3b06a"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "280ebf588a58e0f73fa536eecf28a45b"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "ee7fc279c2d41bab42b41fb08d093502"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b6f4558a48a02ef761988ee4f90d7ae9"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "7a58a4457689c17dfd5dc32a58077275"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "afc4a7b418fc50630338d9a64ad0b224"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "cb6e05ef62ca65757abe69908cd2c75c"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6212de0ce7fa182862ac93c66e98acf8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "64e38cbdfacfc2346d94557b636eeeb5"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "ce77fbd5eb3e64df586b57d7849f2072"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "72d6a0ba31ea5e1cae94780ee8d40630"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7c9b6ae41566b44ceb16a5da31097284"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "f6a0aeaa04eeae0f78426769f74c799b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "381f9788ecf3b0ddafe8552aedb13750"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "59d3531e48b9dca1ad5d20e50339aed4"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "581c49abde758c6b6cb79db7ba3cd6ed"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "cc0c7c639587c180e084f7cb51bf1956"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "4f67148dc6774c1eb891454f25dcba1b"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "13d13d434fda3a457721a077b4da7b19"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b51fef6eafe745739c7b512c83e84847"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "ffa4d1a442bf98fcd9fa9037e93c8a47"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a31256c1bf6c5c53da5b54d85625e1fc"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6306db36e26b0bda34177ac355bd0df9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "34478a8489bfff09322f19e0761ec231"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "21ba519e1eb3be2148632e556a90ccc5"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "e8886a25a1159fce1c0575da54b50e43"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "66734b09010f2f8bda19d0384c01bdc7"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "be29044b443c4c799dd3d36b6fc301a7"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "a3209a7f7e4f3fad6a8bded0879ad217"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "d14cbc24ac1821e5d43087ed1f344920"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "28e7d941f62595b5c1fd2961f35fb526"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "58b9d1bda48d942a88023891142b6104"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "6da2e40e19b74fc7455b3f3efe162f5d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a116e8d5ca783275ba15e7cf3c23fdd6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c454e0c4cf315ab44cd5758ac4cdb2b9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "29f50cbef70e1620b16dfefe7c7d3f2a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cf1edd5db3126db0f9522ad4d275819d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "65bd451213a1606ed66203638baaf6ec"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "2c252e4875127d0d164157c7e9e4e1b7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "46b2a2548088409c9cde7826078c062d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "714a0b0e61543c26d96ad0fd81ea0f12"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ed34fe41411abadb112585ca321e953a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d1ae9a47296df47ca8ed2bc3aa9204fb"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b9f0424b3ea6386d9e7e280136cc7855"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "511a0ff956a174217a950da12654512e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "2b3295ee3cd98b11dc2fa40a7bd33a85"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "ee048d58d254ac7f9ff6abd69442bc03"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "0b64d5af936fe575124fc81014e9b472"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "d206b0a0140c0a4bfbc199aadc2b8c81"
  },
  {
    "url": "tag/django/index.html",
    "revision": "bc4e7d97a7be5211ee7b2d9110e502c2"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "2f21a40464ad8d7f9e8d55501a6fd1ca"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "c289158bc160ba0e74ce99ad6e17312b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d9f495bc79051f322dfd54d3099b9e4e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bfd9060543b32a9534cadd5f60824bcd"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "14198fce3f8ca1f20c6b8ccf4f619e65"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "4deec6a41dcbf0754f9830e33829a23c"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "a929dac49a3c9c4bc43a829e3d20817f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "88c7343443f55979515c2d0a2f6d3e5e"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b6c704623ae5fd57c73750e126b3ac5c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "5cd9869fbae88d88a33bbfba17eed4c4"
  },
  {
    "url": "tag/html/index.html",
    "revision": "43960e29e5781c9a03a3de62611a97dd"
  },
  {
    "url": "tag/index.html",
    "revision": "6c1aefbc6743f21566e2969a31fb33f6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "110ccbb44b4271b2a4adc4c709335edb"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "9cae8f6b88fa547848fbbbd646b67b15"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "951938bfa8b14300015c63e0069c2464"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "8ebf9f3f4d63e72e2340667a952b1ff0"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "5de854175feef6e1e678215b6f8f33db"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "0008c20ca2c9ef41d971dd14e6759323"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "996dfb5df90d33e7599613314400b1ea"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "3dc602ee6e94d1e8a1cd784894ca0177"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0c1a67e3cba784487e22809ae1526170"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b80521a859120ece6c817ee2396ca454"
  },
  {
    "url": "tag/java/index.html",
    "revision": "0d1b2208bf8f093b7a49c24d8c0e13ea"
  },
  {
    "url": "tag/json/index.html",
    "revision": "afc129003c348d9f5fd7cf1547c3268f"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "29af59cb35f444b9c05f23a6bd943e8f"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "fe48d05eb45179783bd383a42faa1cb6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a260e0ead0083590d1ad4a196b7c02e9"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6d32250ce2e7d33ecd9fce235d7fac57"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "ed9d7d252d20ab2b4d7ac5c89df62b73"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "6f35b1ef7216357d231d669b22edd972"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f705c891186bca4ca95e4b0b38cd39ee"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9d85a35f0fab1a8b98332a6a640ea3e4"
  },
  {
    "url": "tag/read/index.html",
    "revision": "5174d607eea547916408e355b38dcdf0"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "aabf308675098c97de91fa6113658ff8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cc7c0f7b98818b6d732fc77646e5b8a2"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "d4d98128b329d0a77848638efab06618"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "93b6730f95a9c400d42613771352a7f2"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "e34ed7ad14310291db55b8ec53ab1b20"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "f97c56b9a872a1934349291614b5c0f2"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "043bbdd4c334487d51bc68a41728da70"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1a826069cdb275128b375c6a8953a25d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ef681e6039410c2962e386fc2ea1776d"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "8b9cd383f9867ef1e54beeea70207d2a"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "26f51044e2094de3e47948d4818e08d1"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "854bb36ec5f068a7a894fa18eda3e96c"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "74d2e3afba9b0baa825c576edbb6d733"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "167c90b50c90fda40bc2acecd3969459"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "867ea22a04db6daca3c8b3eefa8822ef"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "504ab7d613a56d9e5596c5cfe40a689e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "24d9f0a833b1e7605eb7730a2ba70774"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "6a24f9d00c34d2cb43b5f51c8f2f115e"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "fb083d93a720d7104b5a42ec016dd0e4"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b5ff4dde86bcd09a99b6485a0edc5b03"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "fd2fd5aab89c76c27a1b4fd934f0f949"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "4af418ac015c9c9430125d460b60be89"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e9738a544cd4a004262f8606b5c7fd57"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "4adb550a498f5ac9b948198c49d9ac64"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "de23f9a390f9799a97752ecf5df54e9c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6f19de6f2328b5886193fd5ca52b9956"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "5e504db703eac0699a47006108c04c7c"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "b11416f0b428394f1906b0f3602f5489"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1ed51bcb9ee82ddca8fb0666204dd9b1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "58762cdbfecd16708fc8caf0e2d6533f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "8099de648bcd590cfc33f66fc922cdd3"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "257a2b6928fcc7082c9da08d55adeaf6"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "ed251f578cc998119998906fc9521316"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "abef614b4de12c73d0b02e5052f31d63"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b85bd09b6c6b865151856859442a6f67"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e966aefd4d17671de87b101e0c4f46c5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "aa500af037a506cb36e5f8a3a706e772"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "c072b4b21d5bd626abbfa5081601e228"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "bd16219813fea4cf8a68dcd226633f04"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "ed779ab99563f62a7580906380e11271"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "7b8ffb0ab2042fe249b90c552dd1a5b9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "73924097096039a1f0b171e36931afe1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e85d4345e6598a25f2e6dc108118ce77"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "f0433687fb8c7c7e4711361fbd25f8c6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f5e0ac68393e575ade3b38d8e031d1fa"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c6c0fe8fb6bdef3dc90ca3530c96e349"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "a1c689db0d514cc8098b0d44c3d13937"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "abd6f37dedd28e4503a531d8ff056735"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3d4230d813a1134669c225ac4c2510c8"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "918fa011e4908857d757627a59b66976"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "fbb6ab5e994c2638ffdda1dd4756b069"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "7cfd93bfc70691a90ca805e9b5159400"
  },
  {
    "url": "timeline/index.html",
    "revision": "ed950919afd82ee2c1aa4414c6b597ab"
  },
  {
    "url": "tools/docsify.html",
    "revision": "f9fff8e17bddc9c5eb5c9a5e89fd0b9b"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "6a62dbdfae4910fe0c3c00fb0f252dc1"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b0bd7b9d805f507c9fcf01ae7a375647"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "9ddf9aaa99acb14f8b8e6f96f5983156"
  },
  {
    "url": "tools/git/index.html",
    "revision": "daaf38a5d0cd2979efdee973cd64ac5b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "21afe79e52949dd945f9e06849e4f639"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9aa39a5c6d85eae0e60f6519d0a36912"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "a166aa4bc530cf282688afb52be87262"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ac41a62b84b91f0247342cf8466c3c36"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "bcc0ee25b977bd47fad36a01ea46abf1"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "da86760c097f426bedd07c0244bbfcad"
  },
  {
    "url": "tools/note/index.html",
    "revision": "a3c5751ad8e7ff13c82303f1c88f6370"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "326e643f4c0f008b16fcc21e7ae35d46"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3b745600c2b73c30891f81513cfefe40"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "65a2c31de2ae578700b562d285f0285f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c4b1fd08f5300a120a8d2eab8e605077"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "1a884eba5921cf0079a8825a279d2906"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "be672db1527a2df3b6ba148d7a5fd53f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "3d88de6c53bede15358af2f5e2355ad5"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "a25b7c2e76d8bb7c88c11740a21c5cfc"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "c474d8672d947cc63a406422f091d3bb"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "5bf483658ee8a94ec1dbfaf529303be4"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "4927c5a2fe595fbca2e4d850356e83f4"
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
