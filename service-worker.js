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
    "revision": "f332ed732f23151e5b49d42a88ffbc1d"
  },
  {
    "url": "about/app/index.html",
    "revision": "4602a2bc60ca79849a766f2b3d01a8b4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e8408078901f8d84879bf7e2a9ebc180"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bbb1f248af2dd2ca0c1b5f557c4f2de2"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "b888b43ee611d50212f4bab04b6d23a6"
  },
  {
    "url": "about/index/index.html",
    "revision": "20f16142f43d950729fdbba15478db3d"
  },
  {
    "url": "ai/index.html",
    "revision": "8a51eb9a2c5af13f1864a302ec222697"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "6e767c617bcbb14d725142440e5259d0"
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
    "url": "assets/js/10.d3414d3d.js",
    "revision": "2dd0771d0834999b9a91aff5ac2a7f88"
  },
  {
    "url": "assets/js/100.1f6d540d.js",
    "revision": "5f46867f84d0598f7d72f11dfbd810b4"
  },
  {
    "url": "assets/js/101.178ae9f2.js",
    "revision": "b054d80e16edbae2a8d525680f455bd5"
  },
  {
    "url": "assets/js/102.cba1497a.js",
    "revision": "ba4cbd1182da7b5021ee0942c10be99c"
  },
  {
    "url": "assets/js/103.78346fb3.js",
    "revision": "c6aaf5f5d1a631b77aa180983758d7ec"
  },
  {
    "url": "assets/js/104.ae823524.js",
    "revision": "57a686d16ce10f17523ccbe3fdabbf7c"
  },
  {
    "url": "assets/js/105.aa73250b.js",
    "revision": "e5458a42ffeea74cf7093ac835d096b9"
  },
  {
    "url": "assets/js/106.d13593fb.js",
    "revision": "a6f249be6a1bdd5e2012d9190a0afaf4"
  },
  {
    "url": "assets/js/107.387fc744.js",
    "revision": "0e57223eeb15317a72e8767047ec5ed8"
  },
  {
    "url": "assets/js/108.179846bc.js",
    "revision": "88c21992a90d318c15a3bb7cbf79b269"
  },
  {
    "url": "assets/js/109.b345312e.js",
    "revision": "8183339d9385152251ade6bc33957bfb"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.99014719.js",
    "revision": "3c55f7bee15d6a5efe6605b12f8164d6"
  },
  {
    "url": "assets/js/111.7bfafd1a.js",
    "revision": "df5d92f86ca341ec26b0c0538781bb87"
  },
  {
    "url": "assets/js/112.3a3eebab.js",
    "revision": "f39937c24610a2e32267f25090060883"
  },
  {
    "url": "assets/js/113.f49fa32a.js",
    "revision": "0c68da6701fdc013e90c57d3cd8893af"
  },
  {
    "url": "assets/js/114.44a82cb1.js",
    "revision": "e598a346c1f530653388173d01ed3e59"
  },
  {
    "url": "assets/js/115.ede6a898.js",
    "revision": "1df4c8b91e864fdb454cfe52758cd491"
  },
  {
    "url": "assets/js/116.cfa39397.js",
    "revision": "3f807ff48f12c45722ce354141371d77"
  },
  {
    "url": "assets/js/117.1d90a990.js",
    "revision": "d36af3734087399b44916853bdae8012"
  },
  {
    "url": "assets/js/118.b682e743.js",
    "revision": "6cdf44b6982a0e06933efd6622f584c8"
  },
  {
    "url": "assets/js/119.10d2223c.js",
    "revision": "25953e449f7356cc65479e731cc1e7e0"
  },
  {
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
  },
  {
    "url": "assets/js/120.e55830a5.js",
    "revision": "3a0a94ae0be7d4fddf8cd77e4782ccc9"
  },
  {
    "url": "assets/js/121.59a79bc4.js",
    "revision": "68e1c7bc0a7708e0a936e57c86ba322e"
  },
  {
    "url": "assets/js/122.ead0ef3e.js",
    "revision": "10d018ae2d839ccab8d90efde0e46faa"
  },
  {
    "url": "assets/js/123.eb19fed0.js",
    "revision": "ffd335c6c1cda31a597553fc4b0f0257"
  },
  {
    "url": "assets/js/124.3558842c.js",
    "revision": "66b68ff72ac03ebd4e4b71be0b23c373"
  },
  {
    "url": "assets/js/125.bd8ae08d.js",
    "revision": "e6f68eddfad7ae3f6d377a19d734025b"
  },
  {
    "url": "assets/js/126.61ccc831.js",
    "revision": "92806bab0c1bfe285654174f88800b37"
  },
  {
    "url": "assets/js/127.f9a87d67.js",
    "revision": "fc09267f4fdc74b3d6edb2583c3d5cd2"
  },
  {
    "url": "assets/js/128.dc65c0b8.js",
    "revision": "11be41a321c573eb647e123d62e2177d"
  },
  {
    "url": "assets/js/129.6b51be26.js",
    "revision": "a88bad9bc7f90cc5712459e8c9f86b7a"
  },
  {
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
  },
  {
    "url": "assets/js/130.0d8afc48.js",
    "revision": "1fcd4c37f27fca6515e63a902371003e"
  },
  {
    "url": "assets/js/131.394bd868.js",
    "revision": "420bd6cbcbb5f8675c84bcc09d2a5d62"
  },
  {
    "url": "assets/js/132.4f9c9dfd.js",
    "revision": "d06b66a9d7dbd4eb38f61d0dad5b6364"
  },
  {
    "url": "assets/js/133.96d6e1b1.js",
    "revision": "a2479a6db6f849852e33dfaa45daba64"
  },
  {
    "url": "assets/js/134.4901311d.js",
    "revision": "f4804c6b7910e185239e21a8e131a3b9"
  },
  {
    "url": "assets/js/135.d0f88272.js",
    "revision": "0b16fcebb81c9e42f1da0f543ad2fe51"
  },
  {
    "url": "assets/js/136.547fb5cc.js",
    "revision": "e6a0f104144f1a376291100a1e945f63"
  },
  {
    "url": "assets/js/137.16a52269.js",
    "revision": "7cb950111e68e32efe545dc0270c7eb5"
  },
  {
    "url": "assets/js/138.2224d783.js",
    "revision": "2bc50921b61496ee304388fddda1a707"
  },
  {
    "url": "assets/js/139.d71091a6.js",
    "revision": "4f99041b4048d5a75b8e4da13803a75a"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.b8003b21.js",
    "revision": "c5a14a4fa8eb532ddfdf8e789e33ea68"
  },
  {
    "url": "assets/js/141.334edef4.js",
    "revision": "03754a4de1bb1a3cc64760f92d56a9d8"
  },
  {
    "url": "assets/js/142.7b2397e3.js",
    "revision": "242668014254f629cc58a79cc645a945"
  },
  {
    "url": "assets/js/143.286bd9aa.js",
    "revision": "81fac635c195c1f66da0a9a20d9eab8e"
  },
  {
    "url": "assets/js/144.e825cbfe.js",
    "revision": "7b9702fca57dfba4dd9ad1a624d86885"
  },
  {
    "url": "assets/js/145.2b0471d0.js",
    "revision": "35358ace06844e8e8209e92195a87087"
  },
  {
    "url": "assets/js/146.aafdd202.js",
    "revision": "0fa738c83a65cb691bbdbb2263ccc324"
  },
  {
    "url": "assets/js/147.ff3751ff.js",
    "revision": "b58ad28ab318193d2feb54de097150e1"
  },
  {
    "url": "assets/js/148.45563e1f.js",
    "revision": "b9bc908dec76bd5beb864895b8312c66"
  },
  {
    "url": "assets/js/149.c2ca3c58.js",
    "revision": "681f9242302ba240ccf218069be78120"
  },
  {
    "url": "assets/js/15.0e5dc693.js",
    "revision": "3ebf8df690a3ed1bb24c029339b70da5"
  },
  {
    "url": "assets/js/150.cad127d0.js",
    "revision": "6a2a4941d8c446f4928a42d5ed3fe1cd"
  },
  {
    "url": "assets/js/151.28c72ab3.js",
    "revision": "5765e2450c03f765b09fb2777f98492f"
  },
  {
    "url": "assets/js/152.08f49adb.js",
    "revision": "c4fcf14465fec150fa0c0f89b47d8b93"
  },
  {
    "url": "assets/js/153.91a3e65e.js",
    "revision": "2d4e38f4ce795260f85f8174049b2675"
  },
  {
    "url": "assets/js/154.6d01ccee.js",
    "revision": "184fd8dacd8524a259cbe8f37285d2a6"
  },
  {
    "url": "assets/js/155.f854d973.js",
    "revision": "d7c438d626cce52cb04fb696cc852d89"
  },
  {
    "url": "assets/js/156.e4c8a10b.js",
    "revision": "be10181464f73e8116db7a4e61107887"
  },
  {
    "url": "assets/js/157.86736d9c.js",
    "revision": "2f47e8b5aa08e6c0584ba622db9795e8"
  },
  {
    "url": "assets/js/158.defe9ebd.js",
    "revision": "df6331161b47a4b4308d34020bc02dbb"
  },
  {
    "url": "assets/js/159.7f297329.js",
    "revision": "6192bcbc0d3a8c3fdab63f435dde6302"
  },
  {
    "url": "assets/js/16.e4a55c2b.js",
    "revision": "d8ac1823a4917b8b0948fc4fd06131e8"
  },
  {
    "url": "assets/js/160.4b12e052.js",
    "revision": "bc452f46c9379deda9c597d0ad459035"
  },
  {
    "url": "assets/js/161.1b790f98.js",
    "revision": "75dbb6a58765a1238b9ab7dc6eec67a2"
  },
  {
    "url": "assets/js/162.ee59d010.js",
    "revision": "8a7964990201f139f67cf299c195cbea"
  },
  {
    "url": "assets/js/163.9cc8c6a9.js",
    "revision": "a478bf1bb706fcac40decfbefb3b5b5b"
  },
  {
    "url": "assets/js/164.f769aeee.js",
    "revision": "8a60880db27c2e8202b3573fe00b7830"
  },
  {
    "url": "assets/js/165.38fd75b1.js",
    "revision": "f138052d94bd7f8e0bd85bb1168ed92a"
  },
  {
    "url": "assets/js/166.a1c2e2d1.js",
    "revision": "22392f9fea5076bce1f9c1d0c09e5422"
  },
  {
    "url": "assets/js/167.954fcae4.js",
    "revision": "984d646e08260cb4986319f99803bf55"
  },
  {
    "url": "assets/js/168.c0394f8f.js",
    "revision": "c18252301947091308f255cb77122c5b"
  },
  {
    "url": "assets/js/169.a7cb5f23.js",
    "revision": "e284a9e45ad0303a77335ffa1a457bed"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.acca4429.js",
    "revision": "4ca967751bbacb6e965d22b31082b9f9"
  },
  {
    "url": "assets/js/171.21e5e303.js",
    "revision": "c568992c2c1bb1996e11d193dcd3f874"
  },
  {
    "url": "assets/js/172.7d84fbce.js",
    "revision": "fc702073458a70fdd10e274bce840e40"
  },
  {
    "url": "assets/js/173.12b54b4d.js",
    "revision": "4c35ef0966c083fa0b20e3d1b65e588b"
  },
  {
    "url": "assets/js/174.1bf2fc16.js",
    "revision": "409b82db26e7f7210f3c801a83d47981"
  },
  {
    "url": "assets/js/175.68b561b4.js",
    "revision": "64a9ab4be35ea8885bf21fcd15c15227"
  },
  {
    "url": "assets/js/176.e719acc0.js",
    "revision": "e6f7093c0552d08096c9d3e40fdf92c8"
  },
  {
    "url": "assets/js/177.773e8e54.js",
    "revision": "bf214f3da5b8b5d918feeb17865b548d"
  },
  {
    "url": "assets/js/178.fd3afdcb.js",
    "revision": "c745838619000ea3fee23d7b276f0750"
  },
  {
    "url": "assets/js/179.ca2dc3b8.js",
    "revision": "3368e98490735086e8aa464fbf2f570c"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.970b3117.js",
    "revision": "f90388f22e94d521856ffbe3ee12a978"
  },
  {
    "url": "assets/js/181.cb3f8485.js",
    "revision": "1ed7ca6c40003b8779758cb58143808c"
  },
  {
    "url": "assets/js/182.0ef72a77.js",
    "revision": "4f4de7bcf4536b23709bedb7789777c9"
  },
  {
    "url": "assets/js/183.91e155b4.js",
    "revision": "0406f0bdaf8165921155033500f8609e"
  },
  {
    "url": "assets/js/184.38bd52b1.js",
    "revision": "6621434ea67d7ea40c73acb509fe780a"
  },
  {
    "url": "assets/js/185.ad53da8e.js",
    "revision": "0d31f28e3782a8650dca841a3f886738"
  },
  {
    "url": "assets/js/186.003712a4.js",
    "revision": "eb9ac4ff682b71ac0829572eecef4ace"
  },
  {
    "url": "assets/js/187.7d904da5.js",
    "revision": "ae1d7b168e159233395ad933a960f4c1"
  },
  {
    "url": "assets/js/188.a2920b99.js",
    "revision": "a79b2907f092cad4f92f2bb97c464ee9"
  },
  {
    "url": "assets/js/189.a744388f.js",
    "revision": "494bb0a5b74d23e567741cab3acfa782"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.dd55264a.js",
    "revision": "45f5d88b88c603ef036cbea3e0339c2e"
  },
  {
    "url": "assets/js/191.a7d7be3c.js",
    "revision": "71724acd6bc354a969b1e1687d630757"
  },
  {
    "url": "assets/js/192.f1d96f9f.js",
    "revision": "e700e0f971f92e193c91c06c168eb6c0"
  },
  {
    "url": "assets/js/193.6300ad63.js",
    "revision": "2ad4a5dd640901c3ec1a5e5037df2851"
  },
  {
    "url": "assets/js/194.6c6d4196.js",
    "revision": "f132bd2f189033ee6947df67894e3a4b"
  },
  {
    "url": "assets/js/195.f0649d2d.js",
    "revision": "ef66e08a74c4a03b16e227b6f86f6973"
  },
  {
    "url": "assets/js/196.3375af77.js",
    "revision": "fba68eccb621a2226462686e9e79368e"
  },
  {
    "url": "assets/js/197.d49173ea.js",
    "revision": "6bf0d68d9a47bd437e8fac4790ff059a"
  },
  {
    "url": "assets/js/198.a25556cd.js",
    "revision": "be0750fca9c1394b618f2cc8538ab6c6"
  },
  {
    "url": "assets/js/199.d5ed6d87.js",
    "revision": "3a4fc28537882a53f120734892681e8c"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.83b5f68f.js",
    "revision": "a49a62142218e03b5374a1679d5a87b5"
  },
  {
    "url": "assets/js/201.bf7218fb.js",
    "revision": "3515376e19ef89e526db313bdeaf0386"
  },
  {
    "url": "assets/js/202.0eb01976.js",
    "revision": "7e4efeef4e2d904d3e86bc38453d5bce"
  },
  {
    "url": "assets/js/203.7fe27f56.js",
    "revision": "bdde2d75c3ee5bdf0fe7448dc1055490"
  },
  {
    "url": "assets/js/204.bbe4afc7.js",
    "revision": "cd075d459e3364efccaa7d8b22cd9b76"
  },
  {
    "url": "assets/js/205.3a540e64.js",
    "revision": "089a80e0b6cb1850ea11250d93e7f00d"
  },
  {
    "url": "assets/js/206.9b9d2239.js",
    "revision": "ff1c73aae0fd8f62c6accd7452c61884"
  },
  {
    "url": "assets/js/207.c509d29e.js",
    "revision": "cbb6de3726fe933fef055cc332ef28ae"
  },
  {
    "url": "assets/js/208.326d4dce.js",
    "revision": "e7c389398504a71c849578071dfeb235"
  },
  {
    "url": "assets/js/209.4294909d.js",
    "revision": "f58881d09ca99a4e2282a32880de92ee"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.3a48855d.js",
    "revision": "911a3d245e51fc2fc638a4bcd78341b8"
  },
  {
    "url": "assets/js/211.27943495.js",
    "revision": "c35990d47ceb19a8cb764d0dbda2b589"
  },
  {
    "url": "assets/js/212.98ab344a.js",
    "revision": "9960a76f80e4636473c1aac9fbb4d0c8"
  },
  {
    "url": "assets/js/213.667853ba.js",
    "revision": "c8a8f5840d89178217019f3f0803c0c3"
  },
  {
    "url": "assets/js/214.db6bd75d.js",
    "revision": "b500c22fe2e15d7852a013e8c2cc88c2"
  },
  {
    "url": "assets/js/215.010c1dee.js",
    "revision": "c45fa5c2b59dffc01638cf6970bf8b33"
  },
  {
    "url": "assets/js/216.73cecf8c.js",
    "revision": "8835ba5c7fd224a95b6897de2aeabfa5"
  },
  {
    "url": "assets/js/217.a92ab662.js",
    "revision": "91c3e9d47ae176b66e1d465ed419ed96"
  },
  {
    "url": "assets/js/218.d20c488a.js",
    "revision": "88c39c641eeb13a210cb2cffd373651a"
  },
  {
    "url": "assets/js/219.a1e32a7f.js",
    "revision": "04ba904ac829efce63f79d884f36791c"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.709c9b13.js",
    "revision": "569f7a20449d494a8c076f421c1b1c9e"
  },
  {
    "url": "assets/js/221.9f983776.js",
    "revision": "5b00cb5c35b3d122971b687c162fcb76"
  },
  {
    "url": "assets/js/222.6cc0eb9f.js",
    "revision": "2bfa4ca4c882b7f9d68f4db7b537fb82"
  },
  {
    "url": "assets/js/223.e08c34f1.js",
    "revision": "53ad1860f8a94b60f84a2e2bd3334032"
  },
  {
    "url": "assets/js/224.40da991c.js",
    "revision": "9d6b0adbb0d6dca3bbc70814d3c68328"
  },
  {
    "url": "assets/js/225.66e27e7c.js",
    "revision": "61ef71a64bd89db86af34c339ebfbdad"
  },
  {
    "url": "assets/js/226.e13ad2ee.js",
    "revision": "1440d4af2a873f2c1732389d57c90480"
  },
  {
    "url": "assets/js/227.a02e6aca.js",
    "revision": "e33ae480a0ea2740adde9149b1cc0bae"
  },
  {
    "url": "assets/js/228.895fefc3.js",
    "revision": "2ab79b75837f4ab9c932fc130d309711"
  },
  {
    "url": "assets/js/229.3ac70aa5.js",
    "revision": "a793439b1e985e40fb1b58dcc217b675"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.66f087e6.js",
    "revision": "a01fc4d66b140df3f1af4401a12e0a87"
  },
  {
    "url": "assets/js/231.406f6cf6.js",
    "revision": "26a7052bd6cc512a9274779aa7fe9677"
  },
  {
    "url": "assets/js/232.42c08583.js",
    "revision": "5a454e3d65623807ebb033cef59c6ad8"
  },
  {
    "url": "assets/js/233.dc879aef.js",
    "revision": "68dc5af64e9c32c301c51cd4f2904d70"
  },
  {
    "url": "assets/js/234.e46635c8.js",
    "revision": "635f14a2802d21e8c4eb6360a67ae332"
  },
  {
    "url": "assets/js/235.5c753852.js",
    "revision": "8e1d3235c021a2dffb6de082feddade5"
  },
  {
    "url": "assets/js/236.0fb6294d.js",
    "revision": "ea1eb5d7bb99cea7e3e3a5ea770ee38a"
  },
  {
    "url": "assets/js/237.0f25fe40.js",
    "revision": "02c042853bcdeb439435d7ab49de6a87"
  },
  {
    "url": "assets/js/238.b26f276d.js",
    "revision": "cb7c361ca2e67d583a15d35d959c45d2"
  },
  {
    "url": "assets/js/239.f36745a5.js",
    "revision": "6e60f520041badf05a2883834e6841c9"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.fc2ea4c8.js",
    "revision": "49840ab695d84d6e499f53603cd5a9fe"
  },
  {
    "url": "assets/js/241.018197f0.js",
    "revision": "4bee1f54a273fa525970f54c66a368e5"
  },
  {
    "url": "assets/js/242.fb25bc88.js",
    "revision": "d92f1bd2d57c5f46822759c8c8761445"
  },
  {
    "url": "assets/js/243.06765303.js",
    "revision": "6085b559644e38f4fbaedc3a63b2b609"
  },
  {
    "url": "assets/js/244.1f0b0ad8.js",
    "revision": "0fe7532d65b6a6194ba2c7b0df05fe36"
  },
  {
    "url": "assets/js/245.02e5198a.js",
    "revision": "68b8fc057e7c372ce7e73e389558880a"
  },
  {
    "url": "assets/js/246.a1fbc26b.js",
    "revision": "9d2447d833a014c6c8ada7cccc9e3a1e"
  },
  {
    "url": "assets/js/247.79a6c1f3.js",
    "revision": "89b2cc9c25ea02744600846593b64ba2"
  },
  {
    "url": "assets/js/248.57a11fb1.js",
    "revision": "7e1eebe048a2f9e59aa0142e2a163e1b"
  },
  {
    "url": "assets/js/249.64fec603.js",
    "revision": "dd7ea6ef0ad39e1e490300bdd8c03cfd"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.8eee9381.js",
    "revision": "e2554795f07a3197a4f7a90675d4432e"
  },
  {
    "url": "assets/js/251.06816511.js",
    "revision": "731617ba85b06a3e09952f557ea73086"
  },
  {
    "url": "assets/js/252.16d8d05c.js",
    "revision": "5d8463cea15067edf2a1750962082479"
  },
  {
    "url": "assets/js/253.d43b28cd.js",
    "revision": "ff788fa6491bc98ff5158902f0f1b5b8"
  },
  {
    "url": "assets/js/254.68ab61d4.js",
    "revision": "2d9a11805305f17a98b5608313646c20"
  },
  {
    "url": "assets/js/255.af7d3577.js",
    "revision": "ac7e16696b41290b00aa9af00774a1d6"
  },
  {
    "url": "assets/js/256.f037c4eb.js",
    "revision": "23e71c383fe112859885ec28b13d2456"
  },
  {
    "url": "assets/js/257.0afe6eba.js",
    "revision": "01e5667e0f5dd74bffb0f79dabd05dc5"
  },
  {
    "url": "assets/js/258.4822a358.js",
    "revision": "514a995fe68589de3a12ad0eac54ebcf"
  },
  {
    "url": "assets/js/259.e992600c.js",
    "revision": "f61d81a0e4907f5de8ed9c4dab83bb56"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.52a5d577.js",
    "revision": "78062288283d859c15c42d2eddf0fb66"
  },
  {
    "url": "assets/js/261.a2b00524.js",
    "revision": "27e366bd61f3dcb9470cb6d354fa0a12"
  },
  {
    "url": "assets/js/262.101dccce.js",
    "revision": "e24c4e384592a59a105f9ebe7d2041f7"
  },
  {
    "url": "assets/js/263.9a6a2f94.js",
    "revision": "4e3aef4dfa8a1ce4ea9e63735956681a"
  },
  {
    "url": "assets/js/264.7d68df89.js",
    "revision": "57d7a9104da9d6e26dd33d6891ee498b"
  },
  {
    "url": "assets/js/265.fe47d4a8.js",
    "revision": "e17a8e1bcb3c192333a135817fc7ecac"
  },
  {
    "url": "assets/js/266.3facb4fa.js",
    "revision": "34c8a418da80062e6c2e915529d002c1"
  },
  {
    "url": "assets/js/267.e4605a85.js",
    "revision": "1091cee95961f6d7cac05b50612db72d"
  },
  {
    "url": "assets/js/268.cc4d4fba.js",
    "revision": "d0d75d488a34cc05a82212294011e190"
  },
  {
    "url": "assets/js/269.2a2bf9a7.js",
    "revision": "10ac8f42d6edd22235980781ad9c3acd"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.0fa063fa.js",
    "revision": "4c1f18554f42e0950676a5a87e39babc"
  },
  {
    "url": "assets/js/271.8c3a5714.js",
    "revision": "5c157061c7f2c3d2eb3771f94c09ea10"
  },
  {
    "url": "assets/js/272.1b551f79.js",
    "revision": "6253d380edd38982598bd0d8b522e21c"
  },
  {
    "url": "assets/js/273.bf433b12.js",
    "revision": "56e496468bdf1e6c844d9ceee8a72c10"
  },
  {
    "url": "assets/js/274.65f44a11.js",
    "revision": "91f1a23b21f6cecd187875757ce57a3c"
  },
  {
    "url": "assets/js/275.2141c2aa.js",
    "revision": "50bf05da86a7a7faf85c932df01f91ab"
  },
  {
    "url": "assets/js/276.a84a1503.js",
    "revision": "cfbc4186521853ff98871b1b65b5c995"
  },
  {
    "url": "assets/js/277.a6935948.js",
    "revision": "8d4a2c88aa60923d0ce1ed60a30c8ac5"
  },
  {
    "url": "assets/js/278.7368fdc7.js",
    "revision": "e6de3bb43a8e8cdaef5ff86bcfaa09bc"
  },
  {
    "url": "assets/js/279.2f2e71f0.js",
    "revision": "f51c30a1c6f83ac1efdcaa75434bc506"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.262da7fe.js",
    "revision": "4cf1f9709797fb3902e99236e190c19a"
  },
  {
    "url": "assets/js/281.2251369e.js",
    "revision": "3beca3245667f47a684944aaf76f0a1e"
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
    "url": "assets/js/32.fa70387b.js",
    "revision": "23cc305443a3e56aa52c08fb298af488"
  },
  {
    "url": "assets/js/33.f8113b4f.js",
    "revision": "a4af639cf5ab52272f5129ca93d664ec"
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
    "url": "assets/js/39.9f63f8b8.js",
    "revision": "9a2a141d36db837ffe2e596f1a5402c4"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.e1b36b0b.js",
    "revision": "5812f7b7ce165af8c24ebe8f28149ee7"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.d6335a0e.js",
    "revision": "c2e201315dc01d9bb899aa40147b4521"
  },
  {
    "url": "assets/js/43.94a96c73.js",
    "revision": "6a90367bc85cb8affca1fa22db7cf092"
  },
  {
    "url": "assets/js/44.496df8f6.js",
    "revision": "ba89d8cf74746c40076c7105921375d3"
  },
  {
    "url": "assets/js/45.f5372cf5.js",
    "revision": "a89c6b2671d6c3a7c5b7a2e1df7d4fe8"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
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
    "url": "assets/js/54.eb6298eb.js",
    "revision": "02b5ba8409d90c15f01d836d19d341a8"
  },
  {
    "url": "assets/js/55.84ff7f52.js",
    "revision": "0181fbc302f6955e9b9bf75ec6cd71ef"
  },
  {
    "url": "assets/js/56.1b768cf3.js",
    "revision": "52cc19ee33a0d18ba1b66f410cf68d16"
  },
  {
    "url": "assets/js/57.82e26de0.js",
    "revision": "8916be9c99e83adc3eff4d8fbb5bd788"
  },
  {
    "url": "assets/js/58.07a61b26.js",
    "revision": "5755efe798230aec0cbe93c6ed502081"
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
    "url": "assets/js/70.af07dd2f.js",
    "revision": "581ebc91f7d83d3c5a6883c700e5f1e3"
  },
  {
    "url": "assets/js/71.49f88104.js",
    "revision": "3935f9f73414c67eea31caf457930289"
  },
  {
    "url": "assets/js/72.b759eef2.js",
    "revision": "c498d1eaa6480b70f4655981b059f1c7"
  },
  {
    "url": "assets/js/73.0581cc53.js",
    "revision": "43ebc1eabc7cea00292f3b6419655e46"
  },
  {
    "url": "assets/js/74.aff0e133.js",
    "revision": "8f9dc8cd96b58025c93242ae8bc45a4f"
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
    "url": "assets/js/80.e3564d5a.js",
    "revision": "18531106f827c939d28f946ee4864f4d"
  },
  {
    "url": "assets/js/81.9fc9a5d5.js",
    "revision": "6d4b758254e28687bc3ba09329bfda25"
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
    "url": "assets/js/85.2be196ee.js",
    "revision": "9a185f9253a56626e88749d72e6023d4"
  },
  {
    "url": "assets/js/86.051f416c.js",
    "revision": "3b23d0dceb52c7606bd71b88fbb1f4f9"
  },
  {
    "url": "assets/js/87.347d1d24.js",
    "revision": "936c933f52923f6bc507450655a15e8e"
  },
  {
    "url": "assets/js/88.7ea609bf.js",
    "revision": "924be252924a96b7a3ff4f235669e59f"
  },
  {
    "url": "assets/js/89.a740ad26.js",
    "revision": "3a0585ead1fc5d39cafeccb883448a26"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.08e85631.js",
    "revision": "9eaa4432723fa555f54b3bbbd545e63c"
  },
  {
    "url": "assets/js/91.24a77b61.js",
    "revision": "b6be8e0fc94b94bed3123ee79ddc1239"
  },
  {
    "url": "assets/js/92.b21715af.js",
    "revision": "cc5bc80eaf77041ff633be20361bb985"
  },
  {
    "url": "assets/js/93.cbdd32d6.js",
    "revision": "d0ba7f7ad66c38819dcf337c82ba01f7"
  },
  {
    "url": "assets/js/94.6b4da1c1.js",
    "revision": "65bf6cb54b812b40570f2132c6e6319a"
  },
  {
    "url": "assets/js/95.db8147d8.js",
    "revision": "0697c4e1626218e2ccc23841bedad664"
  },
  {
    "url": "assets/js/96.7e890f79.js",
    "revision": "92b3e7b22784e1413ab5ddfbdc2c2dec"
  },
  {
    "url": "assets/js/97.c29454f2.js",
    "revision": "fb2a72ca5508be01488205507609beda"
  },
  {
    "url": "assets/js/98.b82569a6.js",
    "revision": "0c84949fbb029700ad85b866ed8d683b"
  },
  {
    "url": "assets/js/99.15b38b24.js",
    "revision": "38acb7fdce48c66ab2fce9b618802c7c"
  },
  {
    "url": "assets/js/app.f71acef6.js",
    "revision": "cd840f70bd05bd251bc5fa8c9bb9196c"
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
    "revision": "bea750c1e1d75e5bb2fd34c40ba54598"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "086f9107bc2f1f17fc98985ab3b38c94"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "63f5dd31f902f09375ee7d7c0fead169"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "831dcbca0d545a1529f3a47157fb5ce2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "526872040af2d4ed89a46735bb30dcde"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d58b3181473b6c33670a0889eece768e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0e1be495ffcecf7babbd542e2b284277"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "87a053442325fc30d9ac09313936c476"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8cbeccd1f32e1f7f9fc2b51ecf6b5dbb"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e495aadb99a4f17b63cfa72a89a5cbe9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4c8c035fa9fb66d9c60f8694c67819bd"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "401edb86b0b2ccacb85df577d09499f6"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "373bfc11b8dd06853619d3782dade02a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "725cf16239fb6c9356b60c483fad9779"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "ee1daaf7898745c0c987a5e1e6cc46f2"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "724b45772f9755abaa7b499d6044e6d5"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "85905b69a88f857e2a351dad99a6234c"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "241376e117bac7aaef5c969c33a63041"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "687b9e359fdccfd7069d564b62f5380d"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "b7967edb9c53174c1726965dc23c869a"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4dcdf0f1c1662d28a9931b345ec7110f"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "1624c21e75c5f0c2428ccdf68e1e7d0f"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "f14a58834cda26100a0bd41191937af2"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "535646efdf588f52aacb9ec4512eb523"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "6aba9dd838ff52167550dd9f4a02f7f3"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "025f6bd9d0d1799e1042cb8becb76001"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "0097444fd1cfb66956101677d1b8fac8"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "43849811286da45ead14d28b5c4424ba"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "9d57331bdb47af49b3d38360ada43394"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "db65029a3719a0ae14577e45dbc77527"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "1dbe87f2407cb7f4c0445958c9fdce39"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "a1287576b385a821909434b755454aa1"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "fd96d83c8ef89fdadc09e3ceba919f3e"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "3d1592f9ff1634d9560782fe5a2ea3b9"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "227a666c1ec2bc34028b18c4f55dfa10"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "c9695901901587299c815095b33d7d19"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "78b9d599b15c7baec3f0817c0d8a8889"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "8f9f35bf9cad45b9fa73e0afb819901e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b27f85170b1418f0fda9bbfd2b9625ec"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ff6222b44d68fe2ab9e203e4a5772087"
  },
  {
    "url": "book/index.html",
    "revision": "9ed3942c34f0fb9801cf3f79d7c3ebcf"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9b4df4d209f9cfe7036d3b3572589ded"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "0993ba1e4216a19d60599931d39903a8"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "4e283ee8610ad77b1c5f4064a5cd8729"
  },
  {
    "url": "c/audio/index.html",
    "revision": "99ab325deee8e81478dca916d1b231a0"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "22074254f44b585cc5abeb56f56072ff"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "2c32469f877cbcfa10cf861f6346ff86"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "27b84066e129ce3b84a46646581ebdd6"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "2678d6ff0ec6af135ebcf023fb785d8e"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "effdaf02525e6f2dd129b996c3501d33"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "525eaffabef8bfd3e86ff374f221a1d8"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "5ec34c29123a1644fc1e3c6ac40935e0"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "41610d5e557f44b6279b3dafeec6d113"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "4f1ea70fd5ccfc3926416ea25999c018"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3741663c5ca5879fdbe2476414488409"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "53ddfc90d5be7305a41d08ad40a2448c"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "60253bfd25e7dc6b1a7f4da8f08cbfc7"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "7f864fa9becd43179b83e5d397a4f401"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d20a875edb6c2cd2c8d86854a10e9325"
  },
  {
    "url": "c/program/index.html",
    "revision": "94b7df545e42b1e0b7115db50e16dc04"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "11b6ace1d4e1d22c5bad6006fcc99419"
  },
  {
    "url": "categories/index.html",
    "revision": "198a7d4a9fef2f04aa4627032800258f"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "ebb80f4c7725d5597b9d91827b68ed10"
  },
  {
    "url": "figma/index.html",
    "revision": "8402e0fdcb3498f8aae2a5fa7abd2d9d"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "00b1429c37581f0e90eaedadb0cfb564"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "7da22953e593862f5f86054047c0ad0c"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "28538fcd3ca43e162bab1abcced6c5eb"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "4fc6bf09c9c5aae083f0ac0b4b4d4983"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "c05f43a199ffc64a80b33119833621de"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "08f87c43d202bc539932cd473affa3ff"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "91cd82f1c54af3e2c6c049172f0d98fd"
  },
  {
    "url": "flutter/index.html",
    "revision": "5ac5c93a31ffdab10d8b62109bd4f062"
  },
  {
    "url": "flutter/point.html",
    "revision": "901d1f95e6779ccf21d5ceb11dd73e82"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1b01dcaf31508f406a3b98dcf1b5c23a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8105bfac27dba495cea52766b617504f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4f9687aec27c5526eb3129642e83e934"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6a076317eeae01d79cddf4f66248a831"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "9d446f715a01417bffef232efccbcfdc"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "15611fa810c274fa054f160e871a22ee"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "872a043c37de9acfc7673cb77499c9f0"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "47cef78be11e0e526e1bd1163f559217"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "acaec6b70596446861330031e7a088c6"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "0c0eb0fef7771bbba40f3d823b04c0f8"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "ee1c8d55260d555270ac02139c3b1d8c"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "329e0b4a14361c7a74ac9ceec9c9203f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d8ad64914738194d6c26c3bfbc02427e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "36864c259ec153c096684a80b37c8d9f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "412f3b974bfcc544c5954e7292d52137"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "ece901b0748b41f4429b27fc967d7416"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8afa61ab2e6fea73c0117e7249a30acf"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "0f5396cd4f4b0440cb5b284bee682406"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "fef3dd5da607fc6ad55005f3926becef"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "38d0f1f2d5c85e8824ede458b1d73c21"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "c121524e5107bfa80269df06dfa0ebca"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "41ad5da10812948473cdce73307eaaf6"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "01d7e0891547abae63c70538825a7965"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c0ae3fed3e6fbf035cde261a44370748"
  },
  {
    "url": "haskell/index.html",
    "revision": "a6a5224aca0eefb784b31a62f247548a"
  },
  {
    "url": "index.html",
    "revision": "c2558d019ab3c32bd5ea0e87a03505c2"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "9bd184ab097b558fe03ccc61d4f54f05"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "f1dbbb5d4227cd0486ea66416b06b5d1"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "a16e1ba2dec55a3cf91b39ea46a58c26"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "821090dca872adab1c2df6971150edbf"
  },
  {
    "url": "python/index.html",
    "revision": "38e7f537ef7a6b1d86e4541923a32942"
  },
  {
    "url": "python/python-ase.html",
    "revision": "b14c599c05aff9d9614e950a9ca8a155"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "85fb71710df31f06408fb8c88e6c9ad3"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "ac2624fd28746bbca17354cc5f30f626"
  },
  {
    "url": "python/python-file.html",
    "revision": "d82a075ae367260069ccfc5e5cbf3297"
  },
  {
    "url": "python/python-function.html",
    "revision": "9a88517ae3def3be31f8c8e7aba25f07"
  },
  {
    "url": "python/python-generator.html",
    "revision": "1099f8b6894157e0e8d4f4776ebe4a25"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "c674f04f19ec99f765c404c033230907"
  },
  {
    "url": "python/python-module.html",
    "revision": "f5aaac53886762635d1ecb3b157894c7"
  },
  {
    "url": "python/python-string.html",
    "revision": "25ae7b01b8bc7f1b0da3357e22b02311"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "3b2487b76fa881fd12a0386afa8eee63"
  },
  {
    "url": "read/index.html",
    "revision": "0013277b1440e83ee8d54fe8f829c0d3"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "f28c954243dd8c70db78e006f353003b"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3d4ebc1d967eadf29e1cb0fd2699a1a7"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "501c6bc463d06302837be06ad386d1ef"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "c4b25f51c77a5f6c5c618cdbec19f307"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4e3f060da12c41b38ca013e43fb45fa0"
  },
  {
    "url": "swift/better/di.html",
    "revision": "a565c1c946853b4ca3d2b41bfa52abd8"
  },
  {
    "url": "swift/better/index.html",
    "revision": "108f4163bc6fa495f5701f281febb196"
  },
  {
    "url": "swift/better/last.html",
    "revision": "41c857a1755ce3ef2acfa9b90459b7bf"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "9ed9e98f3ac670c20e6840b81e009174"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "744f0a3a62945720703339ce314e4f5c"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "e735216679925df5c15abbaa1e8e0873"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "0708b22f387c28d2a0a58add21ec1117"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "34668b8aaa86b75d8a4c31c8b3a0acbf"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "5129f80ce3693e9b68c2f9f614fa7786"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "7fa2f37df779f9bccedaa60d4bdca08d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "8740597947c33dce6a3c95ef596b51b7"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a06dce54e0d17caff3a3f5f34398ff50"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "0abd86fa46d3b583220fb3d4b9858bd6"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "063faea867ae87483f194f04cf1ed99c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "adf6ef3990b44b6fdf8f3cc43d0b0378"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "ff9dcb904022eeb08eeab505f8ad1437"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "458dcdfc5d17f4faee6a49c2d2370369"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "92351d7f4a4e91a5d5020282b53e9682"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "357aae10ccff6f02baa1af4a023cd577"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "62431eb40f407cff680f5ea9ebfb3b50"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "c9394875092c5de1022272db2a25bbd4"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "95b9497af117ce018b8cce7e88060faa"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "6665429bcc089d44cfa3f9b626da7fed"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "83a8a855616cd7520862ce14523176ae"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "ce0accdcb08ddcf69081cd6738a34b2b"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "a0fc2d15a031293224b6118fe5f9c18a"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "9de3e3fa233adb9d972a5be1a1dd0b99"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "3dd0cb994145993c92b0e729db980ef3"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "dee797e013b2a67467097d36471e344d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "78491c03d3a93770f049e0204e8ac065"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "94b28af8c353fd50b2f58fb0822af4f6"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "2d04adb0e1d2e86e0e88432eaf121315"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "3e8c4c5b8ed0e8ec036628cd49c22a69"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "bb7d1069c9eb531c9e317e6165cce399"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "21451e64927e1df6ed52aa0d3a2d1e15"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "81d835884ad52dc2c55769c4909a529b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "f9f50498863d0d744d46fb562990b563"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "224140d2c0727d2ebbce3cb753fe269c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "e2cdee89df7c5778fdbc6e81315614c3"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c6fabcf6b3cf4b99b9d35f2c9695b8d4"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4568aaf1dd552464b854bc7ae7de1499"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "b89dee2c4772f02a30f8cac326698cdd"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "af29b2d746df12fb690074e28553b9c9"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "84fb09fcd65260cd246e510ef28b4c9e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4bdc9064dbf5ce4403228cdf51478254"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "6701600d92a66e2aca17212848ee59f2"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "4efdcfb12bc16c6344d3cc421b536ae7"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "592259a862eb12bea99a4c8b13e20a35"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "171ddcbf26207b14a097bf633558692d"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "0e479dff3b4d2fd1403bfc5d947601b3"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "94571d3e9b109efbe76a732cb3d5849d"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d40b83b45f50143151935af3b96fefc4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "5e7751a93ea6c2388ee5fd0404afee6d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3330f7b2abf69e83af026e93790e46b7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "f6c99a340e636c41f9ae48346d03c982"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7fe0e104122930d25182c7dc4f2305cf"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "68ead43bb53c684a9feadf3cdf42accc"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "54ee56571840f51d01a48d9faf432b4f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b3b194a19c9d785a1bba0416d48348bc"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b6d80fea5364ab9218d262cc1c8b65cc"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b2d2f34300effe607dc2a2a716441a5a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "68379faa3d95b5b21f05e5e5622425df"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "5cbd4ab7f9c8ee9b3a42a68a147ae5be"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "9777388a151879a695c7dd17317565d6"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7306226da679c70872a1fe7147b8f060"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "38bb38a86edf137f0e192b3f78d05b69"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "4367651deb15ff354cc94b0ee1d6c405"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "3eadfab73900bb90bfb14bf10c2e5fc9"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "500ee0a28d078bf751b51e914add03f2"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "9249511b8bd36057be2a096d91d0bf2c"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d2c788f55857233b4a5351d17e8d5428"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "e0709d518cc4a1c3cd4ce3f7b7985a24"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "55c8e6aef319734b25deade59698288a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "186432f758ff8a9c2219f38c79d57d67"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "c5d21989f2d28542cf312f2e43b96be4"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "25e286e7deeed15d7f53ee17d78a89fc"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3e92f1749e6014c1f8440164878dd461"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "bcef4ad71919b133f57cd6a52ef8cecd"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "d367db20604d8099a29f081e218e5ece"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "52cd58a54b751facf7fd070a1b146b6d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "3445cd852556561d8078116d09d6e14b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c9a6c60987df56e8e02c6b6b9cf3c44f"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "f80977c47ac0aaf11a0c19fed5e90bd5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "1153970ca65c813765cbfe35a6a4853a"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "921182476e38dc0cd861f70ebae8fdf6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "2a5bd6609319ae1dc9a2798b98929df8"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "091d570ecc74f9ab8aac1f86b1643e52"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "b62ef1e3fac27e7508882b863e60bf10"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2dbc0b2bcb2f26788f5e1b0e90736caf"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5fbb159c364e8d2ca9018e8a8b5a600b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "da57bc93248e5059e7e5d9e9db3b6370"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "294ebc704b42a659108b17386eb4edde"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "95b49e43c7923e5636f38c78d09bf4de"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "931ad2da499d975ec94b889d9370d066"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "f3b51628eae97bd6489b1ff7c40659a1"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "9db6a7a262b8d5fa21f19556bd252b8c"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "42c5ad1eda6985c0b0eb9b9f7b428213"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2643c5daeaafb3d5b5b650dbeb398266"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "eb5978c2d63c1d6dcb537702f6a6a80b"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "4a509f15371eee45fee66bec354802c6"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "b6ede784f01b1a6fe2c78b9fabfd5547"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b445074500135a3ca01f63903a7db86f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "330b22725bc3f75ff5320b97c8b9387b"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "3ab7acea5d32cf8888c145fa0f0f6803"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d523ff2ee9f307bb099b7285a910159c"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "f45f678b82feef533ef27a51646d1bd2"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b361a89cc35ac4676ab61dcc476ad459"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "aa03d95ef2ea7c7eb4e8216d04a1f806"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8f169f5a08bee861702d9cab0e0e9c4d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "080dab8c2aadde89978f948b6cbb83f4"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8a3a6816dd2ad56a6b42e9b5e8e7c94a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "166fb8a685442268dcb060fc55a0b490"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5f2079e4f82e9ecbe63572653038d230"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e9902325239faac46e1c7a0f2caf1d5f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f85398551946041c8164c6cb75819e7b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9a9679ac2ac5ee9a3cdfaed2bfa7c5b5"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a0d11f64a5695e8eb9284fdfd19dcc51"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c7a9d92f460b796ec80ff34cf927cadb"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9467f99541e9380705d12dc65bced358"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c117a3e696b910406ebc4c0abaf55232"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c93954e9867bddf3c74950b29855aebd"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "850beddce31bf495868f52f29e31fc26"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "74d1d8dbc6f07db4559e3f8185fc2b60"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e6bfcd05b14a5d9b0de70e5b65eef41f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "d24194df218d647f50651568d287299b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "fef3a6c6bdcac32afff382b05d5f3ba4"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "1d1640e07e2c8b983a8e6db3cd74ba86"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "f5bd6df066153f348adc67e2009b844d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "32fd0c8af15b83145b676735c4f51b5d"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "43c97f11b85e5785423734f136a320d2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "037b8d227d2f82cb5bda380f7e910e6d"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "213d87f835f6be69d6d6e3e35209572a"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "cba73d5ca8230c5431885591acd33c91"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e5eec2db2d4fe7ea89cfc67b7cda9225"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2629ab83c82f91bfdce598bb32453770"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "fb28c73d72b5d987bdec691e7a03be6a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "13f78ebbe25c6d9ae3abeacbe0a8400b"
  },
  {
    "url": "tag/index.html",
    "revision": "50f13329b030444a9f144ce7d034aaa8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ef445ac5cbc8078dba8ec7085844b803"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "afc2f286c742ff14ef79408b414bba2c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "d0078b9e80a3c3aded6bdb727adb28a7"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "48fd6b66da9a8831c85a42c346075160"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "25fc6c4a57351b9b45b1bdafb91b6f78"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "635f237ca9f53f13cc8571c8bd61420c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "109c3337220e9b5a5ec58417d6520ed8"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b7b24a9ddc9dd91e3351237b8e5b5fbc"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a73ba9c46a7123b41d43a73da41459a6"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "1ab41e0504095beaa2778bb84363f934"
  },
  {
    "url": "tag/json/index.html",
    "revision": "edfa419e33a458bec45be0f3a3237f6c"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6fa88681362b2e21d3bb7bf345454f5d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "c65d4f91052c5943cacffca6f8978844"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b5df13e78d90bc430e1f6ec7080afb9f"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "a66390010d11cd885052fc9f0c03b250"
  },
  {
    "url": "tag/read/index.html",
    "revision": "66037521157706fb62c5915420c5a336"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "80077b831ded1ba7f71a28d9c4f0004e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c7f4b06342a2406ca63eb55d1be1316b"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "f8774e1eff92a193e9bde5e62bb0d8b5"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "78f242349cd00f2b0ec32a68da053357"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ae0080179a63c1a860fcc4f6668bed79"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "f64c3b3a054c4214023bb4523be1dbec"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "820ee53942c8841f849a5a334ca42e7b"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "528e1364b4e287ef6e4f70559fae8569"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "a408920209d5de29993febd708db590c"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e7cb3edd7222b26b2fc7f2dd368b671c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "09cea560c66e98f4e12aaa118a0c2385"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d94de489841f11630ed3c0f13c28e90b"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "101d5807db3f23ee66bfccc1f0b1cc40"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "d78e139769de811c1e5471a231b531f1"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "aad339bff8e45fcbf6c51e7fdb627f12"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "8f5a34d38d5b2c2fb41cd5bfb0a38d30"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "172257d6391f8c6520ffb0e898d7b9bf"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "0fe96af54f5647d9cc0aebde057c5491"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c8ba3a5cef18c160445e4819d9441d43"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9741cc0150ed96bab51dd0683782a350"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "4dc4a3f6b6267d141b4d8a8f812ede2c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c30344c80bf6f9a82d0c53a69072c14d"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "e022b62a8f392531b60c7b55c66832d9"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "98250a17c783932117e5fcebea82affd"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b2a29ed4fc66916ea98c73118a7ef6ea"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "5ba3af114407d9c67f92d74a99b5c0c7"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "aa3cc9b6b566a364cf0c3059dfab3a69"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4dca68a52a688c16eaeecbc10a10d6bf"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8c164f2b0c8f7db083601df7a81054f5"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "614d6f7768e84372a9db62616a40cd35"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "696b4fa95a6c88fe3bdf86cbb0e8951d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e0483bc8de89621333d7000a7621fe4b"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a8d1980014f1088604fafc131b518055"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "c22a1d67a0342332256cb65eddbb0290"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "903d9bfa21706e9efd84d3b4948236ce"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "580cb2d0acf83afd0e979f09375b0173"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "82e2754b358e191d09880fc84b33096f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "abe7cce22b732d100651f5dd2a2d3dc3"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "89d7332c6cdc4748ba0fee6a3744a2c7"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "eac8fb699df40190b0cb22e4af52edcf"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "35e9d60d6f44409a5624a4c3cb354f6f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f620a48fc83b403444ec91e8707ec4da"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "df0db6cbe472814ed168e756fd7f9b5f"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "90b683341b05bbeaee3ae0a0a2e23362"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "7486ee59e689ea9bdf292491adc50f2a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "fe40ef18b9b95bf9d03a8cfd9d5b13e3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "bd492c70b2d65488a1d41483f3d71422"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e31c65d23a8018c88084b2ced660e0af"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "4decfe9a89add00c14ff8fa2597fb6f8"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3808a9a8dc3befec33531cf3ee5ed285"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "597d2abfd5cb72b23749d73ca92bb6fd"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d8b2d30595aed8dc23fa0dc736f09e8d"
  },
  {
    "url": "timeline/index.html",
    "revision": "f279b0bed51ec27b9955069f89b3b207"
  },
  {
    "url": "tools/docsify.html",
    "revision": "370d13c5e9cacd13ad695eaacf85b697"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5cf7e5bd331b53e9cf388fd2b939e64f"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "27587a16521675b94a89fa561d5094ef"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "3c99d346300f109ad8c55a6da46e623a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "612c51fbb235473e817edda7c7d6c3c5"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "11b7f6706767a5c1b4d7614cc26c6130"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2b470e0a1d1d6716317876c99cd070bf"
  },
  {
    "url": "tools/html/index.html",
    "revision": "047c29ed2ac74a7eb70957f78bb4d607"
  },
  {
    "url": "tools/note/index.html",
    "revision": "90b4771d4331d15535034af7a4dc9487"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "4a71cd62534da3830f26ce7a639e0ca5"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0974ea05de0f3087347d3ad98711d97a"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "905680a2aee87002db4c0ab0afdbcee9"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e0b72c6dd6e475a985ed1b057163e652"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "4cad0bb2e6aaebeb6a6f1f544aa87680"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "fb31358e867c4953c74a20131cf2621c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "185588c98a46b92c3e901beca80b9bc9"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "98934f8ff784ab16efe20a318fe1b970"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d6d97c90f1cfdc297c62178428d9b008"
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
