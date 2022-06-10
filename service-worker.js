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
    "revision": "3e181151a895779267f8acb0bc1885ec"
  },
  {
    "url": "about/app/index.html",
    "revision": "5a4499b9b229bef7f0a4bf626dff400c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4a965fc7e72c092941ce3412cb1c6d20"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "99cc4f09cb624c95eb2ed4af89bc9673"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6226d60e041f22af5dcc2f4647159c98"
  },
  {
    "url": "about/index/index.html",
    "revision": "3af63f09d2a3cfe1b463e3b3e34e9462"
  },
  {
    "url": "ai/index.html",
    "revision": "79e4e709718d3f3b9d8c27107eb3d04d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9dd6a589fd1b28bc1ae1875af79b2f3c"
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
    "url": "assets/js/102.2c30b339.js",
    "revision": "39e38de067e24f91743c6e0d1874f685"
  },
  {
    "url": "assets/js/103.abec4ea1.js",
    "revision": "a0ef2403b8de887f0d995c13dcd5cf66"
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
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.e55830a5.js",
    "revision": "3a0a94ae0be7d4fddf8cd77e4782ccc9"
  },
  {
    "url": "assets/js/121.2989e2ee.js",
    "revision": "c8d78c4fb29615ab58433c01fdc05795"
  },
  {
    "url": "assets/js/122.72a862b8.js",
    "revision": "7aad583027debdb3b75d2f522eb8a555"
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
    "url": "assets/js/126.0ec057b4.js",
    "revision": "d7578ab95f509c72d1a49c99a2e725e4"
  },
  {
    "url": "assets/js/127.edba71f8.js",
    "revision": "c0eed64a9d31fa4dd84cc9917792cbbb"
  },
  {
    "url": "assets/js/128.a2bbbefd.js",
    "revision": "ff0aadd8e922946636cc42792bd61a59"
  },
  {
    "url": "assets/js/129.9d11957d.js",
    "revision": "3eb2893b3892ba39a00fd4151c7388e3"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
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
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
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
    "url": "assets/js/145.13d59e8c.js",
    "revision": "a28f44625d93c04f18e31aee983b56b4"
  },
  {
    "url": "assets/js/146.bad11d09.js",
    "revision": "57ac8fc664d4d5ac9a572d859f7a72a5"
  },
  {
    "url": "assets/js/147.ff3751ff.js",
    "revision": "b58ad28ab318193d2feb54de097150e1"
  },
  {
    "url": "assets/js/148.836b6b6b.js",
    "revision": "b09b00e7996b984a170665e3260f68dd"
  },
  {
    "url": "assets/js/149.47236a43.js",
    "revision": "cce755a3af510e9ebc82635b621779df"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
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
    "url": "assets/js/157.424d1f07.js",
    "revision": "8c6f13074a1c38c0729343e2600ff85b"
  },
  {
    "url": "assets/js/158.21b19af3.js",
    "revision": "022dec6e4fd1a830e429502868518bbc"
  },
  {
    "url": "assets/js/159.7f297329.js",
    "revision": "6192bcbc0d3a8c3fdab63f435dde6302"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
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
    "url": "assets/js/165.231c6693.js",
    "revision": "16f21e7025998a9919cddd6d40f2a906"
  },
  {
    "url": "assets/js/166.bf31ee9a.js",
    "revision": "292ba5b090aa9867033995e856099c12"
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
    "url": "assets/js/170.fab41f3b.js",
    "revision": "5244218091d2ce77fd99867e777742c7"
  },
  {
    "url": "assets/js/171.443c49d2.js",
    "revision": "e7285b942202dc6205554db6c10192a8"
  },
  {
    "url": "assets/js/172.7e84bd3d.js",
    "revision": "bf9d05e44dc90406dc72dfd8b061f175"
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
    "url": "assets/js/176.8779101a.js",
    "revision": "ceec97e71f8c103184249b82105b72c0"
  },
  {
    "url": "assets/js/177.6ba741d9.js",
    "revision": "b2831f207174d0e066f8f1cb749f4354"
  },
  {
    "url": "assets/js/178.c7f66b62.js",
    "revision": "4e9b9d0b976a95d0723027c77d804c10"
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
    "url": "assets/js/185.ce7432fb.js",
    "revision": "b912fa13561b291f30751bd72fbf0f00"
  },
  {
    "url": "assets/js/186.26e961bf.js",
    "revision": "5361668da4c9bd6faae690d554b41840"
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
    "url": "assets/js/21.23ac3d47.js",
    "revision": "3b3dbfea3083bd9675cd0e9d06a2421d"
  },
  {
    "url": "assets/js/210.178d90b4.js",
    "revision": "2069201e214663158997c546bc857399"
  },
  {
    "url": "assets/js/211.b7a537a5.js",
    "revision": "68bd64d5edecd85d9aeec6729a58769c"
  },
  {
    "url": "assets/js/212.e5d42ec3.js",
    "revision": "ca29bfb700fcd876202a4c933154c049"
  },
  {
    "url": "assets/js/213.ffab1697.js",
    "revision": "22706c8b1ca3057706b809cd04699b57"
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
    "url": "assets/js/22.f6ff9e22.js",
    "revision": "b074aacaaccc2db93f89f1d3ed42647f"
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
    "url": "assets/js/231.5d49f7b4.js",
    "revision": "06dbe148093a7e5ae01e95dd78d7b8f4"
  },
  {
    "url": "assets/js/232.f97a694c.js",
    "revision": "afe66ffb5b941912f2ab60ae43379319"
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
    "url": "assets/js/250.820097e4.js",
    "revision": "7551458c754fe862cd80c454dbad3003"
  },
  {
    "url": "assets/js/251.60563b5b.js",
    "revision": "bfc82b6f210f253da9bace40c317e052"
  },
  {
    "url": "assets/js/252.16d8d05c.js",
    "revision": "5d8463cea15067edf2a1750962082479"
  },
  {
    "url": "assets/js/253.e5ff2416.js",
    "revision": "a8a37f01e02132982b9882af330d5024"
  },
  {
    "url": "assets/js/254.824a5f15.js",
    "revision": "d665d859f94797eb56516b20d2c4c595"
  },
  {
    "url": "assets/js/255.af7d3577.js",
    "revision": "ac7e16696b41290b00aa9af00774a1d6"
  },
  {
    "url": "assets/js/256.9265c2a8.js",
    "revision": "0a59f7bcc4b158ada5f0046e79d6a6cc"
  },
  {
    "url": "assets/js/257.6c5f7fb5.js",
    "revision": "98d29b3c9a2052fe184ac01945e7b9d1"
  },
  {
    "url": "assets/js/258.66764cb1.js",
    "revision": "7d9a44d486e1b01f9e223fbc2c23a5f7"
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
    "url": "assets/js/260.08b18bd8.js",
    "revision": "42e6378210f347050c4739e4dd996810"
  },
  {
    "url": "assets/js/261.461c7de2.js",
    "revision": "2dd35081a6a254162a9fdc05ffff09dd"
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
    "url": "assets/js/41.e436e0b6.js",
    "revision": "59abc4a6dd5dafedeefede3f5689c6cb"
  },
  {
    "url": "assets/js/42.5975f351.js",
    "revision": "78fa37132da41344f368c1ff19e2ceae"
  },
  {
    "url": "assets/js/43.47aeef75.js",
    "revision": "7c13343340425b4a1ffc1c8a37bd97c6"
  },
  {
    "url": "assets/js/44.70e3bfda.js",
    "revision": "75945434b4951f4bab866200fdc73113"
  },
  {
    "url": "assets/js/45.57473947.js",
    "revision": "ed93a2058ab29c0c9c54a2b29a087001"
  },
  {
    "url": "assets/js/46.041af430.js",
    "revision": "a65e607314022e649794cd5f64db99f6"
  },
  {
    "url": "assets/js/47.d959555d.js",
    "revision": "4b21d577324e979c04ff629c4b254181"
  },
  {
    "url": "assets/js/48.ae4420df.js",
    "revision": "26c74d65f6257e621c8b2773baba518c"
  },
  {
    "url": "assets/js/49.10e75eb6.js",
    "revision": "6690536d91888d062094200b92408c92"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.806154f6.js",
    "revision": "655db1b3744a890cbe1b5d8241ec49ba"
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
    "url": "assets/js/88.1ec89aca.js",
    "revision": "16fe2ce91d6f1d5ec3515ce47e3a414d"
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
    "url": "assets/js/app.d80f9647.js",
    "revision": "2dacb8f0986cfc4475850e63b6ec566a"
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
    "revision": "da7b0ed216d99b3733e05039501ca774"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "79bc4d9c6048dbb2ecdd7297c26a5bac"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e974895c7853ba830f97a8c7f7942942"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "56e5717823838386e5bfb249790fb668"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3d9165f4b6cd6745d7eaae4256b2e1c2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c5d5b6da6fcf521b3e512787bc50363b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "51471a2e574b058dcff92230e98c5f75"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "8db5dbfb1abca0aaee6f21fb9131ba05"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4e1b01928a1d8acd9cb2894577df8bb5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "cf6d7a9d2fd8a563dbae7cbacc2d88b7"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "86c106e8669c10e2e4822a210ca82b80"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "8ede30b9dcfa63156ba9e0a232392447"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "6800fe8e02ecccc3b4091fd790183551"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "6fa9e135aaa68706284f0248d7af0d46"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "107fe095509297469c225be6181e6773"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "79a2cd4df86ab8149bc90a03e4ba33a9"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "cb33e8a2e322faa4a6d22ff346b5a54d"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "98179185b14e3d2637c7224da0aa54f9"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "b84590a2d536c60b3e192a55a16416ab"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "7b3b4d7e60e7ba53d3f8b00ad666a23e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "5974e5c8035491daa432ecad005f02c2"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "df1e712351304818e8fbd04e7f700ee5"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "5f955c8b4acd5e229ae94271e640a656"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d6f67bb37cdca7ca92809316cf2255c1"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e314be1c7f9772c95e4b1a68b4099983"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "84f12349b3f8533c75cd2e3756b3ef05"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "7012d53d25742703364787629e27f0d5"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "a2d1124aa4b6fee95c6a29d08d280aaa"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "4aea1fd89d3a01c5fca4c8cbc24aa49e"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "b777692d842357c8176c169e5baa479a"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "2e51ce522092f95216db61eb587ea980"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "377129c6f452663501acb0e119eb247d"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "d6bf5153a688b580bb5759a94019d12f"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "9f928140bf2a044e0d92da1b1fe2fa2b"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "f9a27c18e14cecd1aa9b39b1d964baa1"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d272f0ec3bf5953e053c4c8e277d3902"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "c8066e6f6f0250d2be7fdb6b9b4fce9d"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "3697f196b18ea9df414bb1af200ee481"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1a6d9be68e5f16579e9b9946ff8f5b27"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c9dc122e849791a18c649168ee6ecb51"
  },
  {
    "url": "book/index.html",
    "revision": "6cf7ceb0923b7ed539d8f488c89868e6"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1a83775da006ab9de47fd7acaf70eaaa"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "b1b07b67eebaf783fe721de34b97199a"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "6953c4db994cb4161bd8664bd74e01da"
  },
  {
    "url": "c/audio/index.html",
    "revision": "894db9b7db8d4825fcb303eeae40b7c4"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "4a6050b354e248cc0ebdabe0f387baf9"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "ab7a3844ade45be80c87641973c0e61a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "009904923b17f451108b58078ece33f6"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "42b315ef00b071893e2d19e7b7d0f00a"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b26595fa404e0dd06b4b6b03cc8eb1da"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "7fb114178c5da692ceb45fb5ed307a4a"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "d8594dfd2d25983f04369e70656b1a91"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "aa4bc2639b7dff62dc9dc7863bd629fe"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "2bfcaea11db9cb22830d6ac82aa04b92"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "ddf7200f61b74f9034a9e0cc37424a22"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "e9a44f6e538d214146683fce1c44a9d3"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "0684e1e0be8279b890eebd889eeccd7c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "7f959e7ca8555364d2829bd067e0ab92"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "61379239393314f83667c28972e2da2f"
  },
  {
    "url": "c/program/index.html",
    "revision": "3c579ab47329c66afabae562bb0fc64b"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f9f75e6e17e152ff0df81be38cdb41e4"
  },
  {
    "url": "categories/index.html",
    "revision": "c821b8da81695302b63af06869ba8ffb"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "1849b33f9bc0accfdd42796f165a7951"
  },
  {
    "url": "figma/index.html",
    "revision": "c5fb9e8c77ea53b600c578af0069ec4c"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "afb1187676aadd88be472334c72255f0"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "929ac0f1e0d51597dca09d62ce7682b0"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "aee3786953f1ab3221842ac66f6c25e0"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "89bd3a963be9fb161a486162baeaa8e2"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "2d9fabb8e1ec28824b2fb56b61cc4431"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "b4a7a5633c562fcb96eb03627118bcd8"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "eb5c109c1cc2da8fa033475ff1bc4a9f"
  },
  {
    "url": "flutter/index.html",
    "revision": "c755c5cd2535fe2d3d724e613b0cecda"
  },
  {
    "url": "flutter/point.html",
    "revision": "cf31b7416f725914a9808ab67c221641"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9e3f6a5519513bc65301369aece44e59"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "f62b7bdf116033fd0c2e56b825f2d769"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "47f8745b1524615a5bf8be31c8a2fed2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ec56e9a055e6dfac26e25480d68dc08f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "1d3376e054bd6a6f979c206effb4c473"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "dd1b52db705826e931d227b461871b6a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e01d453d57b665ec796644412a44d80a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a33b63f09662962ed2071f1c55eeb063"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e71e715fc882825713e07b2f5322a9e2"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "0ea8f0d0b37009c2853d1a7ed710cf00"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "775120fef1aa2d291ca2ad1bf67bcb51"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "7a6b8baf3a0d146c8854b13fc7432f31"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "53bf9374fe3a412bc4e4f7101a161ba9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "90f23f145ac86f46c51b5a9cf6d0e0c2"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f9e4c31331d98a7fed1f99e4b3fb0ed6"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "b308507f0c46096bd773b066b4795262"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "11ef359c4b044fb0cec64834afb623a3"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "9b79b189c652d5854b3e8d0e7f771315"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "cf0b5e03d55fd0b463217664611d5571"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "f0af9dd7f8567136e9b97c5ccdd0b448"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "db60ec5b16974f02c8aef8f4c7d68afb"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "8ab3ab64f2a5eec6dbd814c4e68abdfd"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1cb77df11a65f6e814ce013192245e91"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ed3971fa3b1e18e7159e6abc5cba0cff"
  },
  {
    "url": "haskell/index.html",
    "revision": "8c27def4ae2149b7ae0e7007ef8e2a5b"
  },
  {
    "url": "index.html",
    "revision": "bbe52688463575d53c5511d96b701b12"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "3daf5eb48c89c65ae87fb623b0030a88"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7b62ffef353ad2042b32557eebc234de"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3202006ac01ba30f71e877dc48de8192"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "f345122620cc14a62cec0d112d94b4a7"
  },
  {
    "url": "python/index.html",
    "revision": "89b3b2d54e0f4bb233b04b920881d13c"
  },
  {
    "url": "python/python-ase.html",
    "revision": "20d2085a26bbcb73e7d18a5977fde229"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "30746028dd52beb551ba0a621bba0709"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "e14fc1001f1c5727b45693923e7a0c7c"
  },
  {
    "url": "python/python-file.html",
    "revision": "c4566e070507db5b1132ef5c7add5acd"
  },
  {
    "url": "python/python-function.html",
    "revision": "c4adeef01cc3e7ab18377d657891bc20"
  },
  {
    "url": "python/python-generator.html",
    "revision": "eb1ff8e9586a029336c389e42d9e54ec"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "1af421c0b3f2d58f74422a97398fd556"
  },
  {
    "url": "python/python-module.html",
    "revision": "60a5670e0db6077fb5e86cd1b7dbc483"
  },
  {
    "url": "python/python-string.html",
    "revision": "e7be9b0d9979097cfb937f149739af7c"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "c1e519b76d572b1eadd4d7bf58d6d238"
  },
  {
    "url": "read/index.html",
    "revision": "bd6c9c7b83f738a63e4e0ca3412a2360"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "f9e8a9ca2cb8b38958a7afb5ed990a9e"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3db3ca46eb6a71fbeffecca8893ab21f"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "8e719185c5572c91452fca1d5ff4a7e8"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "1c9d30116581846387960a9db2933502"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "13cbb4b4360694a8fef84d9d107e743b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "0e515e413a31be6f7df5316d285d9e1f"
  },
  {
    "url": "swift/better/index.html",
    "revision": "01231cd3de67edaf43ea142527e2eb6e"
  },
  {
    "url": "swift/better/last.html",
    "revision": "f02090b7969c731ff549cd89468a0d88"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "8434aea684eaafa47bd988bb0c81c218"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "3f3d63190d776c4b1516993184582d9b"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "25855f2092c87d7e2799ae5e011fc71c"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "e231e045534bbe5fe3dfbf8ac58330a2"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "dbba653b3ed83361cb9771370bd8e693"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7748e227e8f1bf39736903e05cf2a597"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "51caa578d3ea1d793ec990cb1b60f18a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "88c11559e4dd3f89dc588d4749fa14f3"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c09cd79e0be68c78464615e899c41e1e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "d6d0b6409bcf2a2be7a56c8f29e019d1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "90660aaf38f343e788bc30e277b68af3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "9964a54e8d6c6008e7ecd4b586319232"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "b6423aeaad54af79c95bad390168fced"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "3ec6ae052e8e554b25bf7916504faf32"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "49f56a9e22e9bf4db4e873dce736cac3"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "faa0b0d8d7433ba48b863fba84c62ac6"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "a8f4312ed2ddd23263f2bffc1f1e8aeb"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "5d7cddbac15f573a3c57bb32bd00a17d"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "394b0deda68a797eff41648b17a4d243"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b2da3b7ea79de09175a0d937116a0b8f"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "2a2fdf74e4a37b582846cc51c9eca5d7"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "74887b5816fa91af64328f77fc7ed963"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "e1d529557abf8bd1fb3e181ff1b39931"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "00d698f0f761a5d0c194c6e454bab0ce"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "0e743dbc7a3516d357c7c818f560a3ff"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "11fd822acf6e26fc43c4a475613fdfd0"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "2a3ab5610cd820f234cca905c21d78f5"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "253780a542bac16cc7fbfbf77191a629"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "a45d53f575f0a40c3ee5de4e04c6c344"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "1180f954ebda4abc3d804f38048a2c00"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "2bcaede0ff253eac62769454992506b0"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e3f2d5dd2fd9f59c52c7dff3c47f1938"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "af671668961e184604fd9b858841e5e4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "77ddece092b08b99dfaf58089577aee2"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "55bf66c5b7c9da0150a1f7742e45e89d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "bd25904b6d6e4ab687d7cbd0209ff0df"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "6b554ff6310a0ffda3fedcf3830d7a55"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "cc865ee2d693ef98276145204afc0dc9"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "ad08201e857fd9b771ead13117d22358"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "368bdae6babc04e37c8dc71c766d8ef1"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "f5c6afc92ebd7b5b1bcaf991cd502a4a"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "b55efdc7c8b0dafc5f9aaac3fdcfc870"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "98a9f8e1815110a0f8028a3d65ba1a0c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "42da876a312f5d50f1eb50014f3a231b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "3ed5459e799f0b6bd8cff9d2f261dadd"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "1de1f4b96122afc494d7f7c6adf51a60"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "51c13f099e269ec4b8e3eaed48a2bec6"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "eab75dcb76c3c2fc6ba84327c5ab4d1a"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "f1f7acc33254801935afdce601f459aa"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "ea262935737f6b4201f00da577bcd2ae"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "486ffef760b5cf57e40420534588d1fd"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "2fa9065e8ee50277ba870307faccab6a"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f6da7b0f16cf2f956e8236141b907548"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "7424ef426e5e21d66ec116ebe11c5b4c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "05e75ec74b8174f6388c0db329bb4c80"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "740cd016883a31a3770595affc13b3e7"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "5e697cf9d0185c14847a53820ef4f6c0"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "42d94fc2ac7b314e99c56d4f1b244a86"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b67f8cecf1b56730bf30f050da0f0a6c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "9583f1334968a4d93adfa8224c5b7eff"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "2b667ce0d40aa6372f83a6f29c1323f5"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e7b59b7db93819b210117f0a44c1b3b2"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1c7ea1722f4661a3407a95dc4819076e"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "c4e0d26b5e59a311f57b28f8e266ec6f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "3c2646de4ced1c5fc6cd4017070629f6"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "af28fbeb87f2cd7f7e182a45c5fa016d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "e720e2bcdbe0d842e8f650301250d5f6"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "a9b6dda8b9139c4dedfacf803804fcfd"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "20975aee24d1d6f3b00251f3e3ada77b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "1ac51b13c2991bd5489af10041579be5"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "31d11d7f5f8c9aa677b63c066d9fe2ff"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2f1d86b67924afe92d96e318b31ce088"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "26901f56d7f0887c3498038f666d69c7"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "578ee1106769810b6b343e1fd03ec873"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e9c77702fc3af8cd1b9ab66173990424"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a7598a3fa13acd470c260f2d3ff9608e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "ee773e4c2793d16fda59c486ec4969d0"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d50b977a3553191ca78cfe5e070f4180"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "54027dd9f8e491a2ee61cba11f4ee432"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "1ed83fc7d13144c84c06553e90b8d62c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "6c5b380956543b1fcb6864278d71f965"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "dcc68f13238bee1ef0aaba2b1309d907"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "25979721010d39011a9fbd8f0b269d66"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "2979dc159adf63fd0ad8a49ddcfe5487"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "3dac409905e3c29a48e112be91df267c"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "f8589f402572cff1f86f95b473a9d5b9"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "cb204e59e88f9d9f54e60103598adb5a"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7cd5f4785440c25406bf168112340dda"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "d027c93bb998ce2ce6f72b04786312f8"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "4eb01e3beaae8c7210ff1566460060d9"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "886999177567e5debac4492618b57a28"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "6d282eeacb02652a1166673fcca8ab17"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7e216202da015f25472114dfe6ab745d"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "51b47126ab3ed3d427918a03d28c5e38"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f515d7a8efc9fcf665493a37013f5e95"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7dd47e4982737878a61d332b267996bb"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "965b2393deb03e9dd4a2ca77baa2968e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2e84cb73adcf0d31600967a012d68b6f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3dc4fa7fcb9ab7df9380c95379e94f0c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "f85d0868d00a7340d32178f4882e7788"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "0206cea29b6212a42e105881b8ef171e"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "44810a3b0e1493bed95a49504ce78166"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "15ead383604823ac24fdec654e2778c5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "3a2240637970125b1739977a075afe79"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "9279883008a4e5bc4f0a7498ddefb2b9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4c26ff810177c305ad9970d62346bcdd"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "adfe957c5eb1ab90d2381dd5712fc6af"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "69fedbe0222d3ae7199fd7ff52a8d4e6"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ab37b068a88a12271f7c033269bd50ba"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f4c60764bfccb107a7b8c192713cf1d4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3e7848f9d25b0e28d7f8d7d5d7cfac50"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "308ca465fedb5dc63b7faaa186c3af88"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7c7368177ae5a178ebc1526e8b36f565"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "c71386b60d8691d6fe35293d0d08a249"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "5fdc96b915ccef0d83670ae7dcb1a8db"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "4dcf99dbdf279164ffe993354562cc43"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "56e7b75cd14a7b392cb3b437a970d277"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "19085a6efd50d109af2a92a7320c7f22"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "26cd8a3006f5831e60ff21d34849713f"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b85cf96f347d55c82cb27eb078487a52"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "6fe92261aa3b1da90f7330533090565a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "112ae49443ec3d39021155670120ab05"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "67e62f4c55d32fc5a9a5405bd7e208d2"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "817c8801343a9cdc86ee38d32d395036"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "dc5cd5c870df775bcbc68d707b8b79bc"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "04960682b8bc4bf89c5cd11f24ac0cdf"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "c3e2a8e7ddcc203b1e712aa003c52a04"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f5ebcc43113ef0689f8f950b26e90231"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "356fa7c67096cef28a74e6cb340a3784"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "523973e926da4b847cf460043f6bb112"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9472638559a32bae84fbd53d4ea9cf44"
  },
  {
    "url": "tag/github/index.html",
    "revision": "7321a8a1632e9f4a3c134b2c05bbc275"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "5b6b0190835c1360f83c7fa23db7bbb3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3e8b2e2638aa1e4d8bc8414c66af3d63"
  },
  {
    "url": "tag/index.html",
    "revision": "2e0d3f624fb855cbf8f3f5ec2ed4d8dc"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "06918d2ba476ad19bdbea9993c41cef3"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "c9a2b9e213080817a0b513fcd26c38f6"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "46abefbf9395f0fdc5f645e644c084d3"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "89a30b35e339fab3e19c8754d36ff011"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "f6567a765ea6536e2dfb062aa1efc690"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "a75886cdefb6226d22880a5eecf61e41"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "3548461ea2c6e6a1963af1726d0d2afc"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "715bf2a341dba4f20e73d7f6d70fd532"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "73e1451e96fb7f02c2f49ab3a514d579"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "888da631fa69cb2f13ea426a5b63359a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "05e4f6b130f33a7e38e4f3044831c162"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "67bf3d8c54c6e5a164b7ee61accd1ff8"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "84e93661ce3f09aa0d4c611acdd498f3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b9a440d4c9f3ecc3e2c954efeca6d521"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "e77bd78d555711a1f460482cb6f7436c"
  },
  {
    "url": "tag/read/index.html",
    "revision": "9509104569705dc1ecaf7abdc21f76a8"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "187582ceaa96d5b556cc8aea160be8ce"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0f638923db9cfd06d4ed832d408e7a53"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "2c61b95cd594879a477e4e20d2f22aa4"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "fc033fe073f1fffe730214aca18630c9"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "465d4255769c163df749ad3e5e1f0ec5"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a24b003845d889e3e50d46df60b48583"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "ec9e15efece15dcf25f771e372154369"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "22125aa78943aab92adb60af1bb9947f"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "08fa2c58a1eaed27297f80e52a613819"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9b2a842b322794037ede0a1e37d6168a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "1a1b8d9bb90e165defc191a7eb44ff2a"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "4b7fc1b5b3af65cd6d27ae03708fe73f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "a825e3bb1c8b920b1d78dbd11b074e7f"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7832bf7adfa9982e674d736c4b8e0caf"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "f8de0ac3cdeda8d5584ae242d525db66"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "f325049656b5d9031f0f6bf02823f092"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "904f62632a7a195c93572dedd3c6c79e"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "a91b94ae8c40277d09e1aaf2742a685f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7243dbf4c7c8e3eaf7a76e704bbab112"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1e2c3a51fafae3586e8204f005b0243f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "39a4afefc0210a4c9278deea44af7f4a"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "6f5f351653f176b67f74fd277392601d"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "a2ba22a53e4951eae226c27936398022"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "634eeac38353c56ada9d28035b3aed4e"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "75a7cbc0c6534a5f6e749863d1f3033f"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "ecc7b2133a80633064caca1e08b8084d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "8bc3ce47dac94731d054fb669c799a2f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ec28658cc1535401f8c35695e79d89ad"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "01a564f7c426f68a3c78e486b5c18fa6"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cfe387558cdd03322f4a21629cda1885"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "470fc58bb16e20186e1defa39945aa90"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b38d7d0ba85822789c44a11fdf65d755"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "2f6a1e7d9586723dea4d21035632c9b5"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "c0457ed8d633eceb5a4e71d767904ca2"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "31589d8cc4254381c921d471e2d8393b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0b2f5fc80fe419b7e8a79f44080d04d4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "11df9d5434c0c7a98510442a97cbef37"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1b814796b1f7f767bc1b52dbcd2ec6fc"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "14d495affd9815b4582339a87c33beb0"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "11fda402b2d4aeaf8ae458e99b444671"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3f34bbab1ec8944390c742a72616a992"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "269f7b84508891bb07ae256c4792b367"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3af49e523f6da7379437b81ed93a483e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "392430ad8ddb7989ee988bcdeee38d37"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "0534d82bde19d5c6f445237dd6401151"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f5cf1c51dcb37bc50cb0b4e1ad4e9923"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "83004f597859712357e6a94f9d36a32b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6247d29004e07e1e6960f6ac3bf6facb"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "91c32f0214914305e03fc72ea927d2d4"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a9cb2fae4e3b835b7dd2a473d61f65fb"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "80aeb0cddfbbc6b82e8165e713dec59e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "21ada902eb8b849b6e75a2971a738a59"
  },
  {
    "url": "timeline/index.html",
    "revision": "00d91937ca7b1d608d1d9e45c72af65a"
  },
  {
    "url": "tools/docsify.html",
    "revision": "cf2d0d982233121d024474f558a6f642"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5bdcd9863add308bee3a159d1d46c04c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "aebce659ee2d39e320c22e2d1c8de90a"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "d0524395b53f0f72de8011ef7d86fb1a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7335e0ec2f630ad695646ec9a6127d30"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e65e4838231e248235bbfe672d3c0b52"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "57ad2025dbf67d3961f5a25bcbe33c3e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b8a58ef880756884c7df545764e5f78f"
  },
  {
    "url": "tools/note/index.html",
    "revision": "ea18c554dddfb940c1a8492a891c86d4"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "fe6b01bcad313e4e451d47f51c118370"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "71d1de3ed0a47b2386cd9d8fb3a4cec2"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "6ba49adaa0fabb8e7f68071680323669"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "cf6dd2ecba86b46e591a4e2e3cd6ded3"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "6a06f2dbb30b75204d2365b68e42e3d4"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4e1fa8c064285e0899b8ffeec95a2fb9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2ae3888a6dc26062fe3f4e9094887977"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "57ced366690b7cb63e82357c5918c8bf"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "75e47801fb61182587f4ef0a534580bc"
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
