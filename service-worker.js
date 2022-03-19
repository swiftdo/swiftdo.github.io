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
    "revision": "4c74e6bdf2082171a18d52373ec5ad0f"
  },
  {
    "url": "about/app/index.html",
    "revision": "99c30975e0312392caa2d46be7557066"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "db56d0d3304dea81f41b3233ad4238a2"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "52299342f011a40a82357c0c253a0b0f"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "b0be7142b022bd3147a42bc1f6357763"
  },
  {
    "url": "about/index/index.html",
    "revision": "2b277d31c971a9ca1100a988d1e23b91"
  },
  {
    "url": "ai/index.html",
    "revision": "c853c3efdff560b43117809c63f4ef34"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7e5f5064837a21189ae6d98fc0f8a462"
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
    "url": "assets/js/10.df967ac8.js",
    "revision": "ee243c51bafa61f50d91db97e0cfa4ee"
  },
  {
    "url": "assets/js/100.2b205315.js",
    "revision": "c6d0e6dd703c1cb0c4ecd641389ce354"
  },
  {
    "url": "assets/js/101.3e76fa16.js",
    "revision": "cd66d4d8efc3939690fd15b171c7e7ca"
  },
  {
    "url": "assets/js/102.6dee0d5b.js",
    "revision": "c059d0520144325f4d5cb5e86c9ccfe2"
  },
  {
    "url": "assets/js/103.0eb3e191.js",
    "revision": "bf0abcdb68064372bbc828399fac82d6"
  },
  {
    "url": "assets/js/104.cfc23d18.js",
    "revision": "b5ff8d506d6d70dd82f530daf493ebe9"
  },
  {
    "url": "assets/js/105.3fda9f7b.js",
    "revision": "147f752669e2ca0c6dcb3d3fa56898c7"
  },
  {
    "url": "assets/js/106.658ce3fd.js",
    "revision": "40c6aa7ab46cb3aed951ec3195d281d8"
  },
  {
    "url": "assets/js/107.2b612b73.js",
    "revision": "d1787edd838b78ef7c4187e224a5b70f"
  },
  {
    "url": "assets/js/108.5d0d1a2d.js",
    "revision": "231490a317b0b7680f5857af08265505"
  },
  {
    "url": "assets/js/109.f3a27906.js",
    "revision": "95f9cce7647273dab6bce51a3b828d52"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.b357b556.js",
    "revision": "492ccbfaeadd66d181fc86097f5b0a50"
  },
  {
    "url": "assets/js/111.36f1ea59.js",
    "revision": "84903311b44510ad31abea7b6c41db77"
  },
  {
    "url": "assets/js/112.350f2fde.js",
    "revision": "ab37e55c9cc9601dd1ec0eda775b091f"
  },
  {
    "url": "assets/js/113.c001d9ef.js",
    "revision": "5ae4cd7abc5b5ef7d2ffa07f47c6beca"
  },
  {
    "url": "assets/js/114.ae7a0e48.js",
    "revision": "96809c14d71370e4e1a8450a92107e90"
  },
  {
    "url": "assets/js/115.47872b0a.js",
    "revision": "3a40c3dec5c05902681c716dbc887588"
  },
  {
    "url": "assets/js/116.898a0ce2.js",
    "revision": "344daf823e620d482843862c341c23da"
  },
  {
    "url": "assets/js/117.52fdd5ea.js",
    "revision": "80ef936e029b65aa3a420b03c7ed606b"
  },
  {
    "url": "assets/js/118.d7e6e667.js",
    "revision": "eb2c0e881fa06adc74912d56907a8925"
  },
  {
    "url": "assets/js/119.5aa25197.js",
    "revision": "2e234fc11d93c632f64de13dda4a59d6"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.1ccb074d.js",
    "revision": "d0104704aaa5a01dc678676e11480316"
  },
  {
    "url": "assets/js/121.73aa90f7.js",
    "revision": "0fee5194dd8848557162329a8e734f41"
  },
  {
    "url": "assets/js/122.0a56a509.js",
    "revision": "9de3292f04f5eb375a7408b53731d4d7"
  },
  {
    "url": "assets/js/123.cb449420.js",
    "revision": "18e751ecbb57ad081389a8526c62ef2b"
  },
  {
    "url": "assets/js/124.4f79ef57.js",
    "revision": "54be7ffb3a37ab4032907e6281f08ff4"
  },
  {
    "url": "assets/js/125.c25c4b9b.js",
    "revision": "15c5e7134cb72c1bd713fde046dc5c80"
  },
  {
    "url": "assets/js/126.31c3fe51.js",
    "revision": "dc076d49e9b0fb29b519d4a9e60aef4b"
  },
  {
    "url": "assets/js/127.b4a47865.js",
    "revision": "76b8c2b438916f9a29cf0e7f9435eb89"
  },
  {
    "url": "assets/js/128.b1a9a9f1.js",
    "revision": "631587afbbaa4ca27d57877af570a014"
  },
  {
    "url": "assets/js/129.ba209512.js",
    "revision": "c1aaac47418030fe8feaba559ac537c2"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.a26a5bb0.js",
    "revision": "eee41d3232d16d731e71567810a09b3c"
  },
  {
    "url": "assets/js/131.8dfc0904.js",
    "revision": "9c96c7d367d2d748abeba4e5da6c5de3"
  },
  {
    "url": "assets/js/132.3288c95d.js",
    "revision": "e1e833ef941af3006306a9c2b3d49b62"
  },
  {
    "url": "assets/js/133.6768a213.js",
    "revision": "064c9942ff22a1c6478a7534cf10c474"
  },
  {
    "url": "assets/js/134.7fbfe12a.js",
    "revision": "8a44822b1f1d40340fb352f88caf9872"
  },
  {
    "url": "assets/js/135.638bfc1b.js",
    "revision": "771579552c8f02aef156be9003892b4e"
  },
  {
    "url": "assets/js/136.4920503c.js",
    "revision": "f25a773e67094b8d1373ff842efd48e7"
  },
  {
    "url": "assets/js/137.ab58a907.js",
    "revision": "48059976663b330a26ad376a9025a3de"
  },
  {
    "url": "assets/js/138.133588bd.js",
    "revision": "d6fe07623fef9d81a6e97230f6b4d103"
  },
  {
    "url": "assets/js/139.e763e6d3.js",
    "revision": "b2d2309e67f399aaad1c89eba951af9b"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.d707b73d.js",
    "revision": "78580712d5b8b83bbfc26a4b38283e05"
  },
  {
    "url": "assets/js/141.9a0f6f7b.js",
    "revision": "e4333a4ee9a74d098e662dd836569125"
  },
  {
    "url": "assets/js/142.bffed40e.js",
    "revision": "2d7c045a415a394ab1d1b1194cc812e2"
  },
  {
    "url": "assets/js/143.8ae4e7fe.js",
    "revision": "500c10c3696e66452597d9faca76a0d5"
  },
  {
    "url": "assets/js/144.bb60e013.js",
    "revision": "61a55b5d137d84602849c7d1fe54b353"
  },
  {
    "url": "assets/js/145.d4aa2caa.js",
    "revision": "3511178d1318901d8217b77be9164393"
  },
  {
    "url": "assets/js/146.1702d2fd.js",
    "revision": "8734aca1250c3150831d2dc35788c430"
  },
  {
    "url": "assets/js/147.a24d47ec.js",
    "revision": "7002a901ccab5499854a1ea7554c4e06"
  },
  {
    "url": "assets/js/148.70d5cbfa.js",
    "revision": "e16f0f6cd3225cdc30c4a1597c1c085f"
  },
  {
    "url": "assets/js/149.615559ef.js",
    "revision": "a8f8687372870fc2b5a5b4b17197e03c"
  },
  {
    "url": "assets/js/15.7a6baffe.js",
    "revision": "e1c5817963261e53249add7fa535184f"
  },
  {
    "url": "assets/js/150.3b24dbd6.js",
    "revision": "04c8b921882038eea75620056548c9fd"
  },
  {
    "url": "assets/js/151.0b242db8.js",
    "revision": "34ee9f3b99605a8eab483fb1e7d4327c"
  },
  {
    "url": "assets/js/152.ec065fac.js",
    "revision": "94d6f4acb663b662e4c1ea9b15a7cffd"
  },
  {
    "url": "assets/js/153.01ca95a2.js",
    "revision": "47cfc1372d91a1dbf92a9ab85ef41c2a"
  },
  {
    "url": "assets/js/154.af24776e.js",
    "revision": "a44eca07c34c786d53d14413578fa927"
  },
  {
    "url": "assets/js/155.abed68c5.js",
    "revision": "ca5904956d0f8348e9dc3bf002a99640"
  },
  {
    "url": "assets/js/156.79e75afb.js",
    "revision": "7b5d3137a62454b7668a2e08a51bb315"
  },
  {
    "url": "assets/js/157.2915646f.js",
    "revision": "53a8374e5bb9c65e4e2caf59afb4336e"
  },
  {
    "url": "assets/js/158.055b258e.js",
    "revision": "784e48f8c6b2a745c2b77f74e6ba282c"
  },
  {
    "url": "assets/js/159.6a77f8cd.js",
    "revision": "fc23d424795e27909f4ffe6c9fec92f7"
  },
  {
    "url": "assets/js/16.e4a55c2b.js",
    "revision": "d8ac1823a4917b8b0948fc4fd06131e8"
  },
  {
    "url": "assets/js/160.d5eb9bd9.js",
    "revision": "f29faf9513c72058bf8ad727a72bf3e3"
  },
  {
    "url": "assets/js/161.94abbeb7.js",
    "revision": "9bf096ffad2aee2d22236a171025fddf"
  },
  {
    "url": "assets/js/162.a4927cef.js",
    "revision": "67155a75ea95e94c2aaf3d19eaeeb41f"
  },
  {
    "url": "assets/js/163.7aaa5e5a.js",
    "revision": "0970eaf5f91e879be418714c08b4eb08"
  },
  {
    "url": "assets/js/164.c2f4e15a.js",
    "revision": "6c6aed6cb6f2b30c2f351d6f99b45aa7"
  },
  {
    "url": "assets/js/165.b2e1eec9.js",
    "revision": "b345a775e0fb7b38380b77a0e081b5a9"
  },
  {
    "url": "assets/js/166.7db73721.js",
    "revision": "32d106f066d3ba32e16fe16e5c595311"
  },
  {
    "url": "assets/js/167.3f0dc94c.js",
    "revision": "1ef1b978d5ba5965e0bf20cc72bd7cf7"
  },
  {
    "url": "assets/js/168.0b855929.js",
    "revision": "af2309f6bacac5a7a677648c8eb2d89d"
  },
  {
    "url": "assets/js/169.cfebd628.js",
    "revision": "9b42adb095fcddb2176e10482fca63ec"
  },
  {
    "url": "assets/js/17.e789d946.js",
    "revision": "88d9b9b93194c4187773920e400dff32"
  },
  {
    "url": "assets/js/170.d0260548.js",
    "revision": "ff5c076b00f46dd877b26d50ab2bda5b"
  },
  {
    "url": "assets/js/171.e95b63fb.js",
    "revision": "10e4ed8a039882ff06d850c2115b8158"
  },
  {
    "url": "assets/js/172.f2aea1c1.js",
    "revision": "763993adb17516bf406341bf94c7c912"
  },
  {
    "url": "assets/js/173.a65bd4bd.js",
    "revision": "d575cb54a50f5559cb518925df342ada"
  },
  {
    "url": "assets/js/174.ee41d43f.js",
    "revision": "282854ca3abfa47446cd2a98ef16b61f"
  },
  {
    "url": "assets/js/175.e2948e8c.js",
    "revision": "99e0f838207e86199df323a7666726b6"
  },
  {
    "url": "assets/js/176.bd47a82a.js",
    "revision": "ac7b69b2050c0e8958532225ab868a77"
  },
  {
    "url": "assets/js/177.e79a3c70.js",
    "revision": "749342623f97dd6fa087b8cc7b1c35ab"
  },
  {
    "url": "assets/js/178.194deff8.js",
    "revision": "f37327c932efd7d18a8d8262878e89ee"
  },
  {
    "url": "assets/js/179.ab503b44.js",
    "revision": "a0479be7c978f598b4f462c1b0be6160"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.5b909910.js",
    "revision": "a6d37ac9a26e9b9e41752fb343ddf98f"
  },
  {
    "url": "assets/js/181.2db8e0e1.js",
    "revision": "e346113b77f7acac97d15a50782953a4"
  },
  {
    "url": "assets/js/182.4434d0e3.js",
    "revision": "2edbf7725614cc97cfa81bee48b2123b"
  },
  {
    "url": "assets/js/183.ff57e8d1.js",
    "revision": "d91d96396b7891d1bd2b28d5a940a802"
  },
  {
    "url": "assets/js/184.aa51cdb8.js",
    "revision": "4b951fa2b3b5216fa61d03e25ef4aadc"
  },
  {
    "url": "assets/js/185.900cb6b8.js",
    "revision": "90a9e97cc7e1b030320fa02fd04b29f0"
  },
  {
    "url": "assets/js/186.fb375e56.js",
    "revision": "13617576a6cbac92de841324716035a0"
  },
  {
    "url": "assets/js/187.b728a240.js",
    "revision": "8088bc741baa3bb986875a225946df0d"
  },
  {
    "url": "assets/js/188.acf91c1f.js",
    "revision": "ccda6fbfb914bdf369b30d9ad4115bb0"
  },
  {
    "url": "assets/js/189.7a550e5b.js",
    "revision": "b322730fb86c7592a6d27660f6c60ed7"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.ec1ceb95.js",
    "revision": "f87aa4418362cdc07d979583bfe2f108"
  },
  {
    "url": "assets/js/191.1433d54a.js",
    "revision": "627cbdfda30a729f3d5c9fe017ae7d4e"
  },
  {
    "url": "assets/js/192.1c5a7c41.js",
    "revision": "9cef9fc397f4569cbeef10ab39b3664e"
  },
  {
    "url": "assets/js/193.d9bd5beb.js",
    "revision": "bdf5b07e577bf0b81f66b13cf3b55a45"
  },
  {
    "url": "assets/js/194.0acd0e8e.js",
    "revision": "886450000a986ad8a22d380a8ff63b45"
  },
  {
    "url": "assets/js/195.4f24caaf.js",
    "revision": "d71b0d49c2aa0b19c8102b7e6421cea0"
  },
  {
    "url": "assets/js/196.806c3a2c.js",
    "revision": "19f1e45f97824cb7571559e0c7f32981"
  },
  {
    "url": "assets/js/197.35544e3b.js",
    "revision": "a512e4c8986df19900c397c60b5a7fd5"
  },
  {
    "url": "assets/js/198.d20a3d9b.js",
    "revision": "cc8bff9610d485c0dc9ad192f7897011"
  },
  {
    "url": "assets/js/199.3b65d881.js",
    "revision": "cc1bd0eb7541bd1e6d43db580d8d1358"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.6ddf0312.js",
    "revision": "584816f8c967665c51f765c2e1685425"
  },
  {
    "url": "assets/js/201.42870316.js",
    "revision": "16ec96d93ec3dcd605968b65aabcd9b3"
  },
  {
    "url": "assets/js/202.7434e6aa.js",
    "revision": "2cd195ee4cc67cc4554c264de6a12219"
  },
  {
    "url": "assets/js/203.cfd885fd.js",
    "revision": "5b0ec11c53605e8448d47ddab1896885"
  },
  {
    "url": "assets/js/204.688cb1ac.js",
    "revision": "2175cb5b03263aa239cddb43c24327b4"
  },
  {
    "url": "assets/js/205.ca3ab5b9.js",
    "revision": "8a684934ce638f333d476c17b69faaa7"
  },
  {
    "url": "assets/js/206.425f65d5.js",
    "revision": "057f0b2ea4cf962e545d391fac4063b9"
  },
  {
    "url": "assets/js/207.ba56bc72.js",
    "revision": "cbbc2d37bbe9e0b52f02ca04fa701dcc"
  },
  {
    "url": "assets/js/208.25476241.js",
    "revision": "014f737330814f63b677f34f63be0b46"
  },
  {
    "url": "assets/js/209.844ee502.js",
    "revision": "0394f833dba4c43d2bc9c2013e4c2823"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.f107e7c5.js",
    "revision": "0682f650c34e2bb6c6dfa3f392f7bae2"
  },
  {
    "url": "assets/js/211.5d31ff12.js",
    "revision": "0eb04835496cb5baa3de30ff9df10946"
  },
  {
    "url": "assets/js/212.b9be053a.js",
    "revision": "b2da163b1b6475012a60266aa9216dbc"
  },
  {
    "url": "assets/js/213.33f8c0ac.js",
    "revision": "506d84c0ebd4084012412b924d0afe2a"
  },
  {
    "url": "assets/js/214.739a7277.js",
    "revision": "b223508615fe4bb6ff47390caa1752df"
  },
  {
    "url": "assets/js/215.52fb26a6.js",
    "revision": "41854948ffc382125a44ce5d80359901"
  },
  {
    "url": "assets/js/216.45319d83.js",
    "revision": "f3a519344080f979301d9ed556f16d16"
  },
  {
    "url": "assets/js/217.d2ff56fd.js",
    "revision": "8cc960fb2dc1ec2ef0617972fc5c7270"
  },
  {
    "url": "assets/js/218.96257d04.js",
    "revision": "80022bc906f7855200cde588314becce"
  },
  {
    "url": "assets/js/219.a04a8c57.js",
    "revision": "850fd0143e42eb03cb842084f178c740"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.e002a5dc.js",
    "revision": "7e42450074fffd60eb33f1e512a3f842"
  },
  {
    "url": "assets/js/221.9b48d35d.js",
    "revision": "81fb49982e39cfe5c5dcdaf12657fc37"
  },
  {
    "url": "assets/js/222.d935385f.js",
    "revision": "5e63a593e613ea34c900daa88efe9e79"
  },
  {
    "url": "assets/js/223.db3429b3.js",
    "revision": "1b8ca7e85ef80205c2f063d95fb5f204"
  },
  {
    "url": "assets/js/224.65f7e2bd.js",
    "revision": "fb18a41a91fffe4df5e54267bc0af2f3"
  },
  {
    "url": "assets/js/225.fdc08208.js",
    "revision": "be6fa8743ffbcdca1e5388595656c349"
  },
  {
    "url": "assets/js/226.2227283f.js",
    "revision": "35ebd70b518f7caa48b2079d59010253"
  },
  {
    "url": "assets/js/227.fca0b3eb.js",
    "revision": "0d34ea405f1fa699ebc87e3c3fb3bb69"
  },
  {
    "url": "assets/js/228.80a2613b.js",
    "revision": "b34bbda42620cbd7a92b38d5f5766ad3"
  },
  {
    "url": "assets/js/229.ef862f91.js",
    "revision": "02b568c729420dd0ba3b26a7394e1a5d"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.f591937a.js",
    "revision": "4e41f333099e693eba23a670c1979dd8"
  },
  {
    "url": "assets/js/231.a9bb13c4.js",
    "revision": "a58eeaea4870fa9460082350dc7dd334"
  },
  {
    "url": "assets/js/232.31a160c1.js",
    "revision": "83464b032dc9f5afe3d5e24f756472de"
  },
  {
    "url": "assets/js/233.43e38580.js",
    "revision": "0379f99a2852888f07cc4e4a33c8add1"
  },
  {
    "url": "assets/js/234.1d42e65d.js",
    "revision": "41eba2ec4641c993d853582d09d5e3f8"
  },
  {
    "url": "assets/js/235.767cd186.js",
    "revision": "ffe94fe8ba55a92954acd51fcbdfccb0"
  },
  {
    "url": "assets/js/236.8cf3f788.js",
    "revision": "6841ffb6ef06ce0a4a0b460400a2fe1f"
  },
  {
    "url": "assets/js/237.f1abe56d.js",
    "revision": "ec41b3cd9ab992d71605347f0fb12b6e"
  },
  {
    "url": "assets/js/238.0fea0232.js",
    "revision": "09b8a22187907eb0baf0e300e6fa4de7"
  },
  {
    "url": "assets/js/239.b1ed217b.js",
    "revision": "4e44ce175adf8e246733bbbbba805aa8"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.8b338b5c.js",
    "revision": "c7eb9f7c3aab9443e9d1a86027a16a14"
  },
  {
    "url": "assets/js/241.a7ae7317.js",
    "revision": "dbeec00533f0f763afe6799263008e82"
  },
  {
    "url": "assets/js/242.bff85171.js",
    "revision": "65560aee7f1f3e7b33f200ecfd3a68de"
  },
  {
    "url": "assets/js/243.e46f4df4.js",
    "revision": "132d76982ad9f099e2de92d2b3b9ab8d"
  },
  {
    "url": "assets/js/244.389d0761.js",
    "revision": "6ffe34d69ada305ece6f6522cde2d95e"
  },
  {
    "url": "assets/js/245.d22397c4.js",
    "revision": "f5c6b940c66596552b4d4684cefedf6b"
  },
  {
    "url": "assets/js/246.ed179036.js",
    "revision": "d7e50a6c071b836ece77cab0c3cd79f2"
  },
  {
    "url": "assets/js/247.63217716.js",
    "revision": "38851597953d7d111d5075efdb10d96b"
  },
  {
    "url": "assets/js/248.1cba4c08.js",
    "revision": "17637b62c600475d71ee1ae19e342602"
  },
  {
    "url": "assets/js/249.85be971f.js",
    "revision": "ca3d036174eeee24655a6b73226df3ee"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.a1b2b826.js",
    "revision": "e7fe79cbef764c11cd51e85e81f093ed"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/28.1d321b85.js",
    "revision": "ebea04baef7a0fd7c5a2782610599baa"
  },
  {
    "url": "assets/js/29.b3a2a4a4.js",
    "revision": "b02525f7fc85a6dd045ad4ea65a27114"
  },
  {
    "url": "assets/js/30.806f0e31.js",
    "revision": "2c1bbb64a70596b49db8101281ba6775"
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
    "url": "assets/js/34.72be6ef5.js",
    "revision": "b475580d4fdd904aee2fb6ed6b80e3e7"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.fed85ca9.js",
    "revision": "3c48c254685b20bf23e89e69b6940eaa"
  },
  {
    "url": "assets/js/37.b86dd58b.js",
    "revision": "a2c979887f1e6ea6dd82213455aa5726"
  },
  {
    "url": "assets/js/38.02dda1f2.js",
    "revision": "8e5f297a369b87a1deb8f3e1b1d4f185"
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
    "url": "assets/js/40.dcf15fe8.js",
    "revision": "4f72e1918ab0a7dd276b7e7b990fa337"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.e78db814.js",
    "revision": "55d55af0ff73bc07a2ed7b8ce61309e4"
  },
  {
    "url": "assets/js/43.26c01561.js",
    "revision": "00bfe55f2c337d861133603bc7761160"
  },
  {
    "url": "assets/js/44.6b429a17.js",
    "revision": "e28bf2f741982aa8cab4dc967e182781"
  },
  {
    "url": "assets/js/45.d60760ed.js",
    "revision": "38277da509e1053963a6f64815bf2666"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.0ac0bfce.js",
    "revision": "7eb7db0ff98a386b67d20542e2bb6344"
  },
  {
    "url": "assets/js/48.88acaea1.js",
    "revision": "125ff884b49d5dc6169a4bd0e65c11ec"
  },
  {
    "url": "assets/js/49.ebc9b4ac.js",
    "revision": "69a8bb2355d20ba4cfdb105bf0251571"
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
    "url": "assets/js/51.da8af6b8.js",
    "revision": "40b12615c2db3cdc507a35f716b8e429"
  },
  {
    "url": "assets/js/52.4b3c6f99.js",
    "revision": "345ab19ed4cfda55955bfe2d945e178b"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.027762a2.js",
    "revision": "ec7caf1ac60f7ff4187f134ef6db2439"
  },
  {
    "url": "assets/js/55.d43d6c44.js",
    "revision": "6c50a9580c0763c86fe0a23f099989ee"
  },
  {
    "url": "assets/js/56.540e07af.js",
    "revision": "58e2250cf17d9e1dc74b3c92dcb045a9"
  },
  {
    "url": "assets/js/57.3de0d49e.js",
    "revision": "e2de4906baa7f6ab9d4d7266373639f8"
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
    "url": "assets/js/60.0657c4b2.js",
    "revision": "6531adcb5a335d2b83a150c18310379d"
  },
  {
    "url": "assets/js/61.adbbb66a.js",
    "revision": "7e8053a3277c2c7f3b46097a9cbf5d64"
  },
  {
    "url": "assets/js/62.37c331dd.js",
    "revision": "f0d26be646a27eb1179a6780b119afec"
  },
  {
    "url": "assets/js/63.55d336ac.js",
    "revision": "5b03fbeb5e2040a9650a070132fdb135"
  },
  {
    "url": "assets/js/64.d5d291c7.js",
    "revision": "d8fe05589ef7ce88ee9e8a74e5437efc"
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
    "url": "assets/js/82.81b4524b.js",
    "revision": "a20441464f046a8763a5ff6052edc5d1"
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
    "url": "assets/js/85.c71f2d5c.js",
    "revision": "038c104868beb8dd97cd156e9f8f0135"
  },
  {
    "url": "assets/js/86.9d94f73e.js",
    "revision": "0090e9e3cc018d9c7fca8396445ba1ce"
  },
  {
    "url": "assets/js/87.25c6fa2a.js",
    "revision": "141deba77e6d38ee6df645acc50c9c4c"
  },
  {
    "url": "assets/js/88.7d86270f.js",
    "revision": "aa652a28b5273d85ad09722b107154ca"
  },
  {
    "url": "assets/js/89.3a119d90.js",
    "revision": "a8fbfcc94bb73936309da600cf4a1fab"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.135ccd04.js",
    "revision": "16eba041eb18c6e1f0134b8be7178b3d"
  },
  {
    "url": "assets/js/91.da87d995.js",
    "revision": "d6edfb772cea7d4abf2a2a6a92e7cead"
  },
  {
    "url": "assets/js/92.f403c43e.js",
    "revision": "ce39d93bb3b6f839d2de9425e2e32876"
  },
  {
    "url": "assets/js/93.aed57e01.js",
    "revision": "133f53e5b67ea79e76caa3454055b371"
  },
  {
    "url": "assets/js/94.6861134a.js",
    "revision": "1f08e89bc5fea7b67270107a94b0ca2a"
  },
  {
    "url": "assets/js/95.c5f5acd7.js",
    "revision": "5f091e6db0715bf0ecd96308ad3ac526"
  },
  {
    "url": "assets/js/96.9cd3c97c.js",
    "revision": "b5910e66b0d79eca23b4aa8a7f3a6f49"
  },
  {
    "url": "assets/js/97.6deb6f69.js",
    "revision": "b01293dc9ce718e4a6663d4091435c74"
  },
  {
    "url": "assets/js/98.87776596.js",
    "revision": "08137714d5d232abc4cd785b2c02ecbf"
  },
  {
    "url": "assets/js/99.d92adbca.js",
    "revision": "1a7e29c435880faf799f5295a39ae519"
  },
  {
    "url": "assets/js/app.ed9bd908.js",
    "revision": "86a077ff3af0b44efc5103e9ab5a3c33"
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
    "revision": "259341616dd041a7d40db4b2ac33ce7f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "537c1d08563ac7aac63d4272778c8c38"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "992504cafbc87ca99f3be2299d2c308b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c932234176a68554d53ca262bb10f8da"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c23b8a5c1827fa74834c9380cea224bf"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "89dbfeff7cc68f934fd1e954565c8b13"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c4fedb25992c6898a8af1294769c61ef"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4475210879bc6d8c2688bed703644f60"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ef5147d334e7ff069da54236d8774402"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ba50b74f78840c477bbde2f2f79da936"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "dc43aa160fb6a9d2d584274aa9615e80"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "eccc1d9f259e43bdd60779c12554c3b5"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "c067a5ef270d4b23222b73f35da6dfed"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "f98b60ee6875ee411a9c6ddd3de81b5c"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "01140277ee9ef2953e3ff9c6637482d5"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "e5875336e7e813845b481eca1df7120d"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "899494a66be0caad606fd7f9cc16c644"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "fb77b327e219db85665823063ca63ebe"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "37d620d507ce184d926647a8052be6db"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "138b79452257b65c80978110042c8276"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "167425ff860194eee95fb1d48777565c"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "30ce8d1b6831101ddd808a0eda3882a2"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "79357e34136ecb69872c710322271579"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "7a399143d381d67f78d1061276a3655d"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "2376b98aab7230a7f9fd4cf5498bc5a9"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "e6a4a09540d6b902c3d76fb51884c79a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "155e1bfee6caf63e1c4ee3ce8ca74082"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "f15fc09b7ec05367ab2322077e149036"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "eccb093a903ea54787fb947cc3e7b1da"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "36726421626ce3843d2e2d4979f9e461"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "7fa01518348d06d1ea9fb837a00b38f5"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "2deb83db3df9cac13db040462e16ed8f"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "7169ed220a9b15e418713d79f2a21624"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "48a91584fd6ac66131f0d67f5117fa79"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "48c823a27e9b7b79cf80e9f26c0c4342"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "9a5c1f24064f8f008041f1f3beffd1d2"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "dd85405bbf09f98bbad8e24e8fcf5f5c"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "62efd4406f464e5b2e4169f219ccd447"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c0144764ccda119f2e1b35366f0d01af"
  },
  {
    "url": "basis/os/index.html",
    "revision": "4528d4d93cf312cb8298aae9e77a5c47"
  },
  {
    "url": "book/index.html",
    "revision": "8acc62beac6a04af0b6141baa4f7fc75"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d0bef62227d9438969c6aeee0b0ba3d1"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "130e5e801cb4447b5bc329375c2512a1"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "40426fb14fe2ddbdc2a17efb7d762d53"
  },
  {
    "url": "c/audio/index.html",
    "revision": "664da2563c9f599d639be30c23723bec"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "aa9f9e512ed45f41fde535cf017770fe"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "92ba9a34d44a82800ee69d1c2ab3186b"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "48e2099ffdf41fa3e22ced154d9f7769"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "b04ca2e96d562633cfc884a360793bea"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "740458233f2f59293eb45d55c45b8c17"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "b3586d27fca820aaab99b670f12fc173"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "4a26c308f99f0f7fb9e86f0bd88678b0"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "0d749496e8ae441316264910e936a3a7"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "69db9b0f0055d6c329fff5a2bef7f1fb"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "98321dc518388c06e1a91ef28cfba799"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "08610858779965f0a23e903429725aa4"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "43751af6a78ecba8198173c1e5355e7f"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "3dc6f6ac8bbf1db7cea12eaa573f0b14"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d1f8ea04427cce373f6cc9d643a8b7a8"
  },
  {
    "url": "c/program/index.html",
    "revision": "2526ae4b81cef227e0d2a0cda19c0229"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f65b3c6c11c3bdb5ba0bf6c68c500fcc"
  },
  {
    "url": "categories/index.html",
    "revision": "8ab30aa0f9adba6cce6a37c69ccf1526"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "2d4db2b61578bc671fa5ba14c0b781c3"
  },
  {
    "url": "figma/index.html",
    "revision": "67d8f50ccffff060fe649058caa92a19"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "32b2687db4256d96d1506936e6fa8173"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "045d8bf31562b2e9d5a0a21085dfbcc3"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a3fc84e5c694c9f89c0ca704c1ecb6c9"
  },
  {
    "url": "flutter/index.html",
    "revision": "3d0bd80e49959ee398972f2225432c19"
  },
  {
    "url": "flutter/point.html",
    "revision": "f41504b9ba93a37b5129b30b800a4b7a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "05d33bb1bf21d8aad9f203450821a3fc"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a8797bf653b5fb74670a1876b5eb369a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "22ff8abb4a84ea55695c32730200c186"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "074cba37c43715bfc4213928f7f9730d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2e4604920072972d969324175a232767"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8ec99e38a699433731772dfa1122dcd3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "9311d834c937ccea7a83571f0671b126"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ec08898abfae6dbd70f10590da0e8b87"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e964459f0863ac6d31b8e24a59964a10"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b70b703ea2d468eee2efbbd7a287e476"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "da343d90d53fbbe7ad2122bf549ce1dc"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "848c9f7cb43c01e197d194a52724ecd1"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "69438af15b62e85de622adc2f61ff81b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "eea4eb5b1f9c4d450aebab95ca0c8318"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "16d36dbffb9fb727a8326fad839016ed"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "a06bfb3872698bfd53496012b3a123fe"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "bb6b971aa041104b133a56716ce8a934"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c38eecd745eef6b70edc8f7a4e717465"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "fd39f7873ede42e2942053f02443b99e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "59af5403bac8452bc5b6407c32a53f2d"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "e922a74bba4aba1742ef0bcd69c0fc09"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a982e577536631bc8a5b1bc38b2048b6"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5c4f31264f9c4b20b04d53b3008eae55"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6d225d65026d4d8c74cad20cd2eb1523"
  },
  {
    "url": "haskell/index.html",
    "revision": "7958d4e7e67ebfea2262676b4f97847f"
  },
  {
    "url": "index.html",
    "revision": "3622867df2b652293de8a4490d89e517"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "a26df18c742a2578c957fdd32ac035f6"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "fc288331ee7f0c92bc2f021dcfed4aec"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "13f10d0aecd695e8723a191387cf414c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "93679d08a46903746edd406e69a150af"
  },
  {
    "url": "python/index.html",
    "revision": "366e76c2c3bc74b10456b96117678eee"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "fdda434cfef8fa125a48e34f074042ca"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "80bdd411bbe7936c33613534e08a5ce8"
  },
  {
    "url": "read/index.html",
    "revision": "385f6b75d1f1de702ef938afac915475"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "1e00fede6612455e6d96f5d5101754f6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "78894ef9777a8c79ab96c69b19b9f38d"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "46f2d7f51dccfb5b5dde4a24af601bd1"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "90f35781081ded9a00b70b1d9789961a"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "52be7bc0de5250dad92dcd7652489342"
  },
  {
    "url": "swift/better/di.html",
    "revision": "812ad90b50512810b57a10e160003a7b"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c287b7e372ab519ba64ec16767b55c16"
  },
  {
    "url": "swift/better/last.html",
    "revision": "deb2a92f8e46886df709f165afa48d0f"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "83aa012a315ddb31e047aba1cf526b0c"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "bd616b45e25c5e39367ae294461c82f1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1fe6755a634c2aa5930becdba361f6bf"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ff96825dd93ebdabc4deb32eb2a09c6f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a3f51f1fa133e5eb2165358881df1400"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "772b48814e78a15c40e94d516f9cd305"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "42fee4206c87bfc727461d1bfec52a6c"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "43f536c7be70bcb04c22c13ece244271"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "7d536516c631e2b7a07cffc73cf2c26e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "be2ed4333e847f58cd299b6e19e2d070"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "39fb26a9a084b0a62de5c825c446ba60"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "c0549993c0c3ebf24aa4759f988f3fc6"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "39530943acd7ed87dfb219827a4019e8"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ce271f83c2b2889dfe393d4d6ec4406f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e27197be66c75f6b7c301edcf2dfc77b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "eee51f0b77c146d6d46cfcf436c2a47b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "863abc634f97027d84da01b6ac0f9056"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f960aa89bf2bc69ff76903a400032877"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "52cd09f587d73e08e5ae108465e3e9be"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "68df4d86ba19ce4518e2cf0443088d10"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "009d6a3173d074184176c42bd0af11be"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "e29cf46f7fd5cd28624782e370f04936"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "9d13268be8f7f9ff989c3931c682fa46"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "1825d06905b4d1916a0dbd2ec3819b3d"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "eadea58d4810e96b34ded3d6e326cd8e"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "dbfc58731c55ddce46eee809b6193be5"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a1848bbe57cb6193c8363092ea7ad168"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "ea0a12ca6184ef38f08e611c50fe815c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "7a19f9f7a33e57c4878bc54648e1fd42"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9bf3216cc46d6de42f076bdb7e44a7d1"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "bedf951ef8e95dcff9e96d9b9f47ed23"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f49a149869b1ac42fb3540938e802cc9"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "45fc9f9e41d50d3b60d8da46c1f8bd63"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7ac623e9a1f8eb8ca66341e1d20dced8"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "8bf32a391b0011a0fc93cae16a6be0a1"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "567de5e2674ff1997c51c22155c0d9a4"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "897b37d35c790fff253bd93a7e5ffee6"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "d7dbcdfdcc918fb3e66d21207b44a1c1"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b99d5596030d13c383b65d95e3c41197"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "33b507a34481529c6556ee3da86ccb31"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4a43108c7642acaf454d86645db2593d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "7f1c9f513ac4f3563c4fac674c8c4625"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "a4bf07e3dc798d420aa235640f3f5a47"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "8425452174069e09044d0e0491fdd984"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "1552ff52d703e702024bfcde6815177a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "67dbcbdac020401457cdcf9963fed658"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "47b64cd3cc9453cca86eef4e935f9f39"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "39226d5ee88f12725989a3674b8ad78d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "c7d1c3efce7dda8578796a09a4f4fbfc"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "ba713155e639f952db7e49d4646c8bc9"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "530977e68bde6d34862f9a457553c85b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b795f0aa9431e69332ba614997cdc548"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "610eabb1784dea7d698200455d2aa509"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "c6cfa51d49a924f5248a0a56821895d1"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e0810362a99e9326677d7f6b82a68dae"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ffd6f988daea6e143e9b4ad731be0881"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "802b0efa1d19fedc952b39e791f94aaa"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "0dc186c1e25ea02c43032c2ac6e05439"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "f0109cf262f13e7c4828fc79093c867d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "8cc9f3c392af9fe51f609f19419750fd"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b9772b61b993139ca9f1c4cf46cc6ae8"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "ed29bf6e9cfc39e08f5cf7fe68cec6ce"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c45f3e3c4432967f11f6428cb81d04b2"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "eb484dd160c65e45de06473c38c6fe4c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "04d8faa10b928f09c19db457a1cb2766"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "aefe347e9855b83e4f3724dc053b3adc"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "7f15b043a12bdefcc41ca36c5f68bc14"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "c2299f3dbe48c727de00016fca3debe4"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f05772cef6af45be699aa254ab9721df"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2aa2ff9acc25e918c8b275cc156dba6e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "b42d400e2241e6411e2210f3cd8594d1"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "653324a5f85b4c58beb4061b7503f9a2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "bd223e5b03a90b6d2647c088d2873e2e"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "0eea2ae1a56f5847f5460cef24dc1fee"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f32674ab4984e34bf43bd6883033ebde"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "01a8e7269be30a3b5debbbb82a876d7c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c51d423b55d89d61225910166beea80d"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7296a402d552ba3ac59f2f70b7e7837c"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "374c5c267dc16fd376564ff9d83983f1"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "35e829db625685149e52ce4c89bc8cff"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "3a3a0e348b1468cccbe691290243c02c"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "603dcba772143443217004f8e5e106a3"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "19875f8b430abee16b70422edd20b987"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7ef381ac7f2e1d7538e80559b0679d2d"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "646939e4340c4d6999dafcc9734a1b58"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "9c91a127ab8347ef3f170da9714388f6"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "14a4d986161e0031d7114c1811f5cc88"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "75740d2edaa7be90ba38e098c6364b90"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "dca8383856644dddef9ca037d1a566ff"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d213acc2735c278d7515703612d474f5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c74b619c9d5509b1eea7164a2253b5cd"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1b3e5da5ecf4adc1147a75bf48876cc3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0b9c580e099c386ca0f90007fb7794a1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8b7146849530607d6a67c183545cf4a5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2045b143568a6a065843cad66edb6e93"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "33454d8b97f69dd48d3f7282e6be5b35"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "18a73df7f2f79a02f0416c620c9b68bb"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "3bf39232cc061c05db080b3d8b5b1612"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9e2d75a6d7bb1b15520b6d16a9ade9ac"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "15b93786cc441c44f0676ec20e09852f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "47ac73370e5ab368459f66880f9fa506"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "558830d704b606d271ef4bf7d341812f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "806a5c04982b386d57e8aaf6d0211c52"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "91d7dbf8928a474d99982489ec749030"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "1f3fc5682caefcc7ad2ce328a4c9ac6d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f0ec1fab3ba9863613aed584ceb5955a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "331e6215974cba8913b442ce9fa1578c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "1e477849d7aa2d39d2b746bb5defe9e7"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "28cc03ea9627a92f31039dd1a8a54274"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "af68dfbaa069a9279c838dce70d3835d"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d087dc42b77d28f1cde756e3af67fc32"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "725f9669eb819f861210e5761bf86a11"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "ad8d48c38d287a5af7aa29c25b6175a9"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "7c3570d3103fff1ee01fbe111bc1bad7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8d19388efc557d3db41253413a485b25"
  },
  {
    "url": "tag/github/index.html",
    "revision": "bd232f1fb115c1ab0d7e7a34cf4902dc"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "9daa364ac8c4afe4dcdb4f58b70847a3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "99cbfb080af22fcedabf0054b0392270"
  },
  {
    "url": "tag/index.html",
    "revision": "8eb9975d73e82a7f5d5a25b474adc297"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "72ec23ebdb0546774a27567cbd4534b1"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "52ea3f6e8ed094e776441b7aed8feab3"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f6ff64c4d1f5145a69c4077c40397b4b"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "17c8fd2319cd093f58d57454f04885a0"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "3c0889b977ca7ec4ab841e2befd7354d"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "691a49fb1596189552f1476c7a982cc7"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b152e6a1589d42ff08c010d1eb20b75c"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "6dc691647c978a9c5c8b1c75735e7d3b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6e13fa59fc2572a0080e5b470b710c2b"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e78e34b0273380d254cc7be3b651da47"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6978196aa199c420872eea34272d8b08"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "97d8a3ee5927395ee8cb1401d29f6786"
  },
  {
    "url": "tag/python/index.html",
    "revision": "44ea9350f39af249975733dcb9b2747e"
  },
  {
    "url": "tag/read/index.html",
    "revision": "21aa9fe91801ded7595929b21c419c97"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8966debbb7cd2a547ea92775ea012cb5"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "bc71782d0c98381f730e671454a824ef"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d323512d3f0cadb2f20cfca2f7b21edc"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "0deb21e97848daad898bbd4db24b9c92"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "0fc3ab8cc6ac3fb21d79e6907caac119"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "44e030e3a90ff8ed9d76d1d2928b276a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7066e0b14f70f647492fce460db31e2b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8b5700571b6f264f7aa19074bfe2a775"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f73be4c725ad3109459923e5fe417538"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "0dc2726531011d67e320e81ebbae98c0"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "be025db494c88ab6d9546cd5d8d97a48"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2a56938441521b740b9f4e7e99249df6"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "d6b40c4d2a273f64d4cab298b6198e41"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "fe34c84fbaa2f44ef9f5e8f980c574fb"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "170f49d52b5d71fe2d935831babf1f97"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "1fed9b5350edb2789d6558d5a2c30bda"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b8a5679a76d6bff15e0716c20d061319"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "3b2cb7d1f133b07210d37e3f1bd5d035"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "8fc12558cada54f5d0fc5fac2be26522"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "7f9dffbc31b15c2cf8bbbaa9262d3a7b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "d69e8eb36021ef5c84df6c300888ffbf"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "94f16fdf89b3c68c7a5d7dc8bebcf7dd"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "edf0403eb3461a0b5067640f97707db3"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ff853972e63b146121b453cbece82029"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f77420935ef6f6c06eb530fe2e7fa5ec"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "0aa870c652717972862da1bf1d5db585"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fa928a95f98a8362feaf4001bba050d1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "5a1a874df41c2bfd777c13b379b96f04"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "af6e371b6eaf69a638af097891a1b1f8"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a577d7ef3c63ff7dda7bb3d9cff5bd26"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3da391bcb8d5680201fe65b65593fb72"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bd2616ce858adade35fd4fc78b8413d4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e02127ea3862b2d1ed7ff5902e74fcec"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "7e723d0ae7ab32f3f3a772c03a9834f0"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "47be03f8ee08a1e91a5969d6e37226eb"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0e9845c5d125425a49e8696b31d28afe"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8cebaf320201efeecc3babc511a8d923"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "d78e87ef7150c6c711e040426c439a85"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "effdd8d09a9808988238b75566ad53fc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a8a7067b877453b79799d3963b8fa8c5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b9dec64918209bbf17ec9817dfcb1918"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "2bfb8096a534126019f2fd67811add9e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "59c2f463f62be3e2dc90b666482b3714"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f1f004de8fa5997426c317335cedd79e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "9e42d7e2a436e567e1d00bc3fb2040e6"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "b319caad08b85330073fe82dae7579e4"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "36653791c027b7870f46656ba73658ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "92525df98964b486f36db2d13108e57e"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d94d55ea8a709ac507b573fdae9fb170"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "6a0cfb7fe42330ca95011882e3afb43c"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "4d7c1ef8fc743de5f3a4b6a0a8d369b2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "54e72dbcebfa9ca379473bd91ca832ef"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ca883db1b6e7eca584b4f30430e8b65f"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3bcc0dc8d4a9b1646b3cd7859e286574"
  },
  {
    "url": "tools/html/index.html",
    "revision": "97898cdd61cffb54480948159ad5aa23"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "46e4b51ec58ae6f7a7049be3d97e3e45"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e57b56245c87458b02d8d86289149523"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "502fcccff184cfaa273603c0c9d58c13"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "e0e81666fde7ccfb2f9811b3030a80f0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "eb9d1c3ad8ac52b77b977b8ec10c429f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8c8473a403526d24b401c521bb5fff94"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "5163a1f2185e8ec3090e9991fdadf559"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e1171c1cfbd43496a018efd4e71affaa"
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
