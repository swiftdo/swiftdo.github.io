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
    "revision": "0bd6e965c84724f6e9f4d1f9acbeece6"
  },
  {
    "url": "about/app/index.html",
    "revision": "2afefe116024b3801326e1914a45ff25"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6b3afb712a1f386f5a0c139b4856bebf"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ec3910d269ce12d29dad7231c77f1ad2"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7c2216c9e3d15b81f667d43db91701fd"
  },
  {
    "url": "about/index/index.html",
    "revision": "de1447170f270adbaef4d0fca8191e1e"
  },
  {
    "url": "ai/index.html",
    "revision": "04bf2f824e35b9f3df8ca0afe978a1a4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "b23d57235c989875d70ce16fb5a9263d"
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
    "url": "assets/js/10.ed0e9557.js",
    "revision": "4bee7d7ea97e2e69b59dd4f470b5f266"
  },
  {
    "url": "assets/js/100.088e8fa3.js",
    "revision": "5921232931f22dea4870e5c9a1ae7e81"
  },
  {
    "url": "assets/js/101.330832ab.js",
    "revision": "28e17445b4544e10b7655cd65bc63c50"
  },
  {
    "url": "assets/js/102.816336bb.js",
    "revision": "180552ceda7012d8a2c89a0b1ac255f4"
  },
  {
    "url": "assets/js/103.bb94d7d7.js",
    "revision": "4ffd8341d15634bfcd8093bb9adbc383"
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
    "url": "assets/js/112.69b39f1b.js",
    "revision": "74c0a2d73fea0210472b0438f6e04021"
  },
  {
    "url": "assets/js/113.741cbd0d.js",
    "revision": "f5a053c11e04cf7fd59ee0b399ac906e"
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
    "url": "assets/js/118.c0bbf02f.js",
    "revision": "80f57730c8024d040bd9daee19ed2259"
  },
  {
    "url": "assets/js/119.6fe5c589.js",
    "revision": "d16a01e02a8bc1ce7cc9209217c728d4"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.e63936f2.js",
    "revision": "b88ec97d4fdcb919b218c1a95cb5368b"
  },
  {
    "url": "assets/js/121.5576c8b7.js",
    "revision": "9493d078daa4611096e07e883023e4b4"
  },
  {
    "url": "assets/js/122.ac6c98d6.js",
    "revision": "1da7da96b9e824e6495ec016378f47ad"
  },
  {
    "url": "assets/js/123.ad24e5eb.js",
    "revision": "353e943e464bd0763556c0ac5a78d1cb"
  },
  {
    "url": "assets/js/124.683c3e0d.js",
    "revision": "d89673d226e96b0edb4f3a97d97e1bf3"
  },
  {
    "url": "assets/js/125.fcd19bea.js",
    "revision": "383955860d5383c397899c7ccdc337f3"
  },
  {
    "url": "assets/js/126.743e8a13.js",
    "revision": "b5d41a92444307274bcfc62ef1cedda0"
  },
  {
    "url": "assets/js/127.09628ee6.js",
    "revision": "1d43b1cf40ac9abec4b4587f098011bd"
  },
  {
    "url": "assets/js/128.41900ddb.js",
    "revision": "5c8b1a03fb7b1dc4a05e17f96b570a66"
  },
  {
    "url": "assets/js/129.042947d4.js",
    "revision": "63087364d781e196609a327486c9887c"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.74c7e4f7.js",
    "revision": "f59f423cfe8bae5a5390bb0a303d738b"
  },
  {
    "url": "assets/js/131.466627a7.js",
    "revision": "2962c82f8e8da9586ee4806b9972bc83"
  },
  {
    "url": "assets/js/132.5ee54497.js",
    "revision": "e83c3c37e0af9e87c9f29cdac2d65808"
  },
  {
    "url": "assets/js/133.28751528.js",
    "revision": "35fcc1ac0c8718e3fe9aad1ca7538193"
  },
  {
    "url": "assets/js/134.dc284e00.js",
    "revision": "ffc03e9dd236116ea473b5bb8d9a3e30"
  },
  {
    "url": "assets/js/135.8aa2b14a.js",
    "revision": "85ca798bd830415645d1fb26bd716930"
  },
  {
    "url": "assets/js/136.d13932a3.js",
    "revision": "f4487a2cacaeb5b5c8d480b672c17e4a"
  },
  {
    "url": "assets/js/137.3b3e00df.js",
    "revision": "38734f2801697b3f2981b027364fcd38"
  },
  {
    "url": "assets/js/138.02c47f57.js",
    "revision": "dfd9615af5a0ca795d1d98f8e5ce17ae"
  },
  {
    "url": "assets/js/139.5cd7f83e.js",
    "revision": "41567c192ff538f544861df0fa3694e0"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.e3002275.js",
    "revision": "6ff91760eb6227492bb700b7398d3f1a"
  },
  {
    "url": "assets/js/141.44ac836a.js",
    "revision": "a7b939c483eeb8f324a5c40d2dda5386"
  },
  {
    "url": "assets/js/142.21fc158a.js",
    "revision": "a58b1bb11dc0b09557fd486455cda4fd"
  },
  {
    "url": "assets/js/143.02201201.js",
    "revision": "899aa61e04469266251290c04fde8ea9"
  },
  {
    "url": "assets/js/144.1e81f6b6.js",
    "revision": "8cc5fcdb56c410b32395a7be87a926d3"
  },
  {
    "url": "assets/js/145.ea334322.js",
    "revision": "da1e9e6922d973e10fdf72c6c6c0ef94"
  },
  {
    "url": "assets/js/146.68d7d5b1.js",
    "revision": "8abe538402a0e38dd9bb9b1bcee4e8e0"
  },
  {
    "url": "assets/js/147.c6f2374f.js",
    "revision": "42636fee0bed0a2ef97d95b4fa66f5f0"
  },
  {
    "url": "assets/js/148.e1185505.js",
    "revision": "dbe1a4e7e3011c877a58d3f2b096ade8"
  },
  {
    "url": "assets/js/149.530cd4d2.js",
    "revision": "05c6d87dc176902ae29457f855b6126a"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.8bc24b0b.js",
    "revision": "f2c9e043eb532811e8ab804c90014a6b"
  },
  {
    "url": "assets/js/151.1165d23d.js",
    "revision": "cc74173087319b66f4d278f96dce4708"
  },
  {
    "url": "assets/js/152.73147796.js",
    "revision": "b13a9947e1634fede29d3722d3223c08"
  },
  {
    "url": "assets/js/153.9760515b.js",
    "revision": "5ebd4b8918ff941ab81112f3581b47d0"
  },
  {
    "url": "assets/js/154.ba500353.js",
    "revision": "f4f19df1a81de307fb803f92c7c691a0"
  },
  {
    "url": "assets/js/155.e19bda0c.js",
    "revision": "4755d067be5b56d5272da5f34310b3f8"
  },
  {
    "url": "assets/js/156.99705cbc.js",
    "revision": "7026b1b0753eefcfce936436d85bad5e"
  },
  {
    "url": "assets/js/157.4bb94af6.js",
    "revision": "cf61abdb3893752e6c4bbb7bc05d04a9"
  },
  {
    "url": "assets/js/158.7443680c.js",
    "revision": "ac1c3294f59f4435170d8f5a4de68dcc"
  },
  {
    "url": "assets/js/159.d135a383.js",
    "revision": "525ea04b910717ac90f821c43374d766"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.a611e014.js",
    "revision": "31327c10eca0aec9128ed75b978a8096"
  },
  {
    "url": "assets/js/161.3007907a.js",
    "revision": "7ddf8f3a8e32a4f8d823e40e463e9e96"
  },
  {
    "url": "assets/js/162.91656f7e.js",
    "revision": "76d44273826f56e68a7c219f0a8bec13"
  },
  {
    "url": "assets/js/163.e515fb99.js",
    "revision": "59ba9c48ce71ad994c4a73894ecd6a4d"
  },
  {
    "url": "assets/js/164.175a2b07.js",
    "revision": "5f345b977d449d6dcb46046eefaf6731"
  },
  {
    "url": "assets/js/165.fadcb494.js",
    "revision": "b232949e44f3d00577b0c6f5448a50e6"
  },
  {
    "url": "assets/js/166.9ec74d09.js",
    "revision": "715fd0fbaf72093f016971e879428a16"
  },
  {
    "url": "assets/js/167.fd1c05b2.js",
    "revision": "fb974f6076ec2b5612a80eb64b41364d"
  },
  {
    "url": "assets/js/168.78ae7ee4.js",
    "revision": "d8b68fbe811aef2792aae0f84127801f"
  },
  {
    "url": "assets/js/169.5880dffc.js",
    "revision": "2c78ea5b4b8e497773a64a2b45d15348"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.c24a3517.js",
    "revision": "6e0384b15d25284f87a95ac015781920"
  },
  {
    "url": "assets/js/171.1a22f457.js",
    "revision": "dc293090167aeda4acbeaa8429bef738"
  },
  {
    "url": "assets/js/172.a4875d52.js",
    "revision": "1ea91a721de8d196bf5178b390b39894"
  },
  {
    "url": "assets/js/173.4dad0a38.js",
    "revision": "dbdb622df90746d2abca0f56d2491d8f"
  },
  {
    "url": "assets/js/174.43f06e8c.js",
    "revision": "119583894b1a6f22a9fac31f6336b962"
  },
  {
    "url": "assets/js/175.9856f5be.js",
    "revision": "e2531ace5494617f5d35a92af22c3367"
  },
  {
    "url": "assets/js/176.0cdeb080.js",
    "revision": "a0b81b1786ebf561b3f4ce5293ae8485"
  },
  {
    "url": "assets/js/177.9114dd70.js",
    "revision": "aefbdc9b661dc17da922efc7f08ed53b"
  },
  {
    "url": "assets/js/178.4f6b8215.js",
    "revision": "398c86e7dc9a4c98c79e080e4bf4207a"
  },
  {
    "url": "assets/js/179.36ff54ef.js",
    "revision": "fb0b79242d861e43c04d60e91cfbf152"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.71cba652.js",
    "revision": "9f83fe5e9a7445473fc2b2dc26527503"
  },
  {
    "url": "assets/js/181.badb5f61.js",
    "revision": "f8ce87205ba406c64dc4f0af0078255f"
  },
  {
    "url": "assets/js/182.342729f4.js",
    "revision": "ef8e986e6864289da23832684cd64ce5"
  },
  {
    "url": "assets/js/183.c785f7c0.js",
    "revision": "90e1d2df8395cc469178dd798bd237ef"
  },
  {
    "url": "assets/js/184.d91ef3c7.js",
    "revision": "0b699d5448d3d99e7490151bffbb10e2"
  },
  {
    "url": "assets/js/185.5978cdb8.js",
    "revision": "4d6708d44fe27f514a7b0b5601929d1e"
  },
  {
    "url": "assets/js/186.e2ddfbea.js",
    "revision": "3c229bacf5edbc3d58a8bd675a78951b"
  },
  {
    "url": "assets/js/187.fd54a734.js",
    "revision": "123f20eedf7e610472956e387b198c29"
  },
  {
    "url": "assets/js/188.c07ce865.js",
    "revision": "5fe9fe6bd4d1fcc211bf41bedf09c110"
  },
  {
    "url": "assets/js/189.efa3d1b7.js",
    "revision": "ddb7e82851051e0f1ad961f80053ee9e"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.5638d22e.js",
    "revision": "eae64ba707cf1eb142afdbd7ae33c367"
  },
  {
    "url": "assets/js/191.2503f61e.js",
    "revision": "8a376f9b15b5a452674207aeaf654443"
  },
  {
    "url": "assets/js/192.4bd1b8c4.js",
    "revision": "318754d53dd1ab3475d7263b153f1725"
  },
  {
    "url": "assets/js/193.85997a60.js",
    "revision": "7c8acf59aa76f18aa2d4d50484e64849"
  },
  {
    "url": "assets/js/194.ee3c9004.js",
    "revision": "1995f3415a4ae2fd6fb187f1480d6ce9"
  },
  {
    "url": "assets/js/195.48c2e085.js",
    "revision": "42f44dd126aff9b173a40fc94a86e881"
  },
  {
    "url": "assets/js/196.bde4755e.js",
    "revision": "d94e9c88f9de5ec9c71d1e968aba7859"
  },
  {
    "url": "assets/js/197.f9cea416.js",
    "revision": "e45594f08511ef0335abc36c05daef00"
  },
  {
    "url": "assets/js/198.64b8f02a.js",
    "revision": "1a50d8ede176f3f518a1baf46a71e45e"
  },
  {
    "url": "assets/js/199.95c47634.js",
    "revision": "0190f5b0cbf3adc53eaf718c5e90ec56"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.dc92895c.js",
    "revision": "7f2b9fc623caac8eb47f4ef340c30b1b"
  },
  {
    "url": "assets/js/201.790c8ece.js",
    "revision": "02fc2b6400db7634988f6a1a4f26896a"
  },
  {
    "url": "assets/js/202.1468b2dc.js",
    "revision": "fa0eb433911bf85b3056f340fee808d0"
  },
  {
    "url": "assets/js/203.13da1ecc.js",
    "revision": "f8e0aa2b38e756cf3a0fc35c22785d2d"
  },
  {
    "url": "assets/js/204.666eb8e6.js",
    "revision": "ee6a43448895929879ae1b538ef7ec5a"
  },
  {
    "url": "assets/js/205.365636b7.js",
    "revision": "16491e010e9c889d11540eff3fbacbc8"
  },
  {
    "url": "assets/js/206.f9630099.js",
    "revision": "26321b8eb7a6c4b0946b560e27c4693e"
  },
  {
    "url": "assets/js/207.289969fa.js",
    "revision": "6f01a23fdedd4f16b813afc3a83df2f5"
  },
  {
    "url": "assets/js/208.66ad880f.js",
    "revision": "6f2f00411f5fc0ff58145454a05ea12a"
  },
  {
    "url": "assets/js/209.0a247d32.js",
    "revision": "863b56051fd4127583630d13d013d169"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.93bc2e0d.js",
    "revision": "f32e092d9af2965552058339e6e0ff9b"
  },
  {
    "url": "assets/js/211.b2514ad8.js",
    "revision": "2f8a66a356978f6dc9568af653a9e532"
  },
  {
    "url": "assets/js/212.88e46ab4.js",
    "revision": "5fcc7b88b4f6571e5b65edba1bc01e7b"
  },
  {
    "url": "assets/js/213.f462acbd.js",
    "revision": "e5ccc20af0f3b843c921bcb14d3b952e"
  },
  {
    "url": "assets/js/214.2b8432b7.js",
    "revision": "2a9086d88b9d9f25f56faf05fc00be84"
  },
  {
    "url": "assets/js/215.cbd44de1.js",
    "revision": "ed367ccf2e0d277db2fc8848599d0a51"
  },
  {
    "url": "assets/js/216.ee3b28e3.js",
    "revision": "48a2ba6208a74b45c799ff1a48f48d5a"
  },
  {
    "url": "assets/js/217.b0c50457.js",
    "revision": "74ed6a23296cbfe7f1dcc1161e783984"
  },
  {
    "url": "assets/js/218.d306e898.js",
    "revision": "71e83b1d5d60ff49677d937689b60bbc"
  },
  {
    "url": "assets/js/219.5c1130ee.js",
    "revision": "810028a55e26942f373366912abf0623"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.060fd339.js",
    "revision": "8d6c19cb4e6edde6038b6b87ebd77e7b"
  },
  {
    "url": "assets/js/221.5ac9db61.js",
    "revision": "1a9f9ed0b8bbf444b71beafb0526a4bf"
  },
  {
    "url": "assets/js/222.8a6e18ee.js",
    "revision": "2b32d2ffa0693935cce1ecbeeb8f9e62"
  },
  {
    "url": "assets/js/223.bff819aa.js",
    "revision": "2b753589e44cd6a94bb410417eee7c6f"
  },
  {
    "url": "assets/js/224.ea069925.js",
    "revision": "65aacc858505384db7899d0c7dffd387"
  },
  {
    "url": "assets/js/225.0ca35380.js",
    "revision": "5aafa47ac577a0db25d3c2683ac3e87c"
  },
  {
    "url": "assets/js/226.d40c4b62.js",
    "revision": "124f6732d78e935efacea32af3ce23af"
  },
  {
    "url": "assets/js/227.77d0a013.js",
    "revision": "a7e3d9db6cb39760c3b9d3b43a426181"
  },
  {
    "url": "assets/js/228.5759823b.js",
    "revision": "9d1a4b12950b9e8edcbad93860643222"
  },
  {
    "url": "assets/js/229.ebec1704.js",
    "revision": "858893791be67350028a0d77c9cf36e9"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.e186cddb.js",
    "revision": "199142788212f68731bd18ea9496f2d0"
  },
  {
    "url": "assets/js/231.a6938c34.js",
    "revision": "c07eed237bff3203fb552b02d6573f4c"
  },
  {
    "url": "assets/js/232.0d43cd20.js",
    "revision": "b379f53d489780b6bbd4507fd5531c18"
  },
  {
    "url": "assets/js/233.28feee2e.js",
    "revision": "ec2a1d7d2885ebff559d4ef9975f4b9f"
  },
  {
    "url": "assets/js/234.e17ab637.js",
    "revision": "36122c8e1e49fa812feee027e5b9defb"
  },
  {
    "url": "assets/js/235.27c33380.js",
    "revision": "71efc6cffd12ca0c0341b329ba57ef14"
  },
  {
    "url": "assets/js/236.230be94c.js",
    "revision": "a84e5a4ca3f88fe91d94b63395e6ff79"
  },
  {
    "url": "assets/js/237.3af77fcc.js",
    "revision": "e397210e477515afc726593a0c71b269"
  },
  {
    "url": "assets/js/238.3a851e3d.js",
    "revision": "3e852f6cb3b00886f32775491ac6e6b4"
  },
  {
    "url": "assets/js/239.dff8acf5.js",
    "revision": "25d9835653a9ae15830c90e4c3b166e5"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.510bc6ef.js",
    "revision": "a7b45f49a22e955f9acb6744a51d66d0"
  },
  {
    "url": "assets/js/241.c382a1c2.js",
    "revision": "bfcb0819e3cfc491b554593a50905c80"
  },
  {
    "url": "assets/js/242.0ccff846.js",
    "revision": "57fab916b7a48f5d8bdd9fd4bc14cc4b"
  },
  {
    "url": "assets/js/243.f918ac86.js",
    "revision": "fba3a77e5dbfe67f88bc4bf2468ebcef"
  },
  {
    "url": "assets/js/244.ed2a77b5.js",
    "revision": "a0849f79594caf3060b112270b225531"
  },
  {
    "url": "assets/js/245.21b698d1.js",
    "revision": "04113bf32f550805fd60d28c5b6f87c5"
  },
  {
    "url": "assets/js/246.0be4260e.js",
    "revision": "07aafb0d00213a0eb60e4d0f76f880ad"
  },
  {
    "url": "assets/js/247.8f1e15ca.js",
    "revision": "5385b1ba456a3b6cd0ef0619a7ab07e1"
  },
  {
    "url": "assets/js/248.3a2e57b3.js",
    "revision": "a6d745e84903d88ae988dd0ac8faf6f9"
  },
  {
    "url": "assets/js/249.ffbb77b3.js",
    "revision": "a472ef916f439e189b86ec2bd59dd5de"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.66483b90.js",
    "revision": "1bd16671311098ecbbba85b2871d6fdb"
  },
  {
    "url": "assets/js/251.c15f8237.js",
    "revision": "b405d7492cbd56f6b1282b2009b49cde"
  },
  {
    "url": "assets/js/252.e5d8743b.js",
    "revision": "f6a57f45f51ef5f4327f61e1165e7cbf"
  },
  {
    "url": "assets/js/253.34a98d98.js",
    "revision": "7558b737dfd3792ad9a3ead1b2a78e72"
  },
  {
    "url": "assets/js/254.27dd7e63.js",
    "revision": "3561e01622f173909c3e8cb4004ad056"
  },
  {
    "url": "assets/js/255.0a18b28b.js",
    "revision": "1e1253942bf2afbc57b4a3766b0a4f26"
  },
  {
    "url": "assets/js/256.799cbbcf.js",
    "revision": "ed95be0c024af704ee97f4d5a2b6e114"
  },
  {
    "url": "assets/js/257.2c19b782.js",
    "revision": "9b2d710bef57d68cdc07b95499124f81"
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
    "url": "assets/js/68.d9244519.js",
    "revision": "e2585bb1d9435c54758317d10954829d"
  },
  {
    "url": "assets/js/69.a73b2735.js",
    "revision": "4fe3f1e5c71f9d3ff35ef17ba37227ee"
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
    "url": "assets/js/90.549ca566.js",
    "revision": "a81ce1458224381aeb0e9a7c90d8cfa2"
  },
  {
    "url": "assets/js/91.5a551749.js",
    "revision": "03ed6ac0d040e76c4876a6a51c8184c3"
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
    "url": "assets/js/app.c14b45c4.js",
    "revision": "942ed387e64ff0a85526ef7778e5a9f5"
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
    "revision": "c5a91b504dec1531a43288ad0521475c"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0aafc3a95781ddeb0650624f88d798f5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ac0826898de5935537d111524d8d7d63"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "6367b3cf7229955c49a3099bc1b756db"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a1e8aeb3a9e5d1c7c0dea9d69aedb141"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7dc687ff548f4be76241b22810e70f79"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ed1831769786b7ce652269f2ea23b560"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1c323810998df0babfd911a78acf79ce"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1c6e78cf52095f1e6af5d5a63b3f294e"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "dce251c197dadffd5df151cffd2b9a9f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "de166d57f1ea75b6715636e5d5c420e7"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "31ad58eeb5bb41435bb9df5c0847d61c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "982957c801f4a0fd0f09a9d1433b93fd"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d62c18963238ba4788a2948b15b855e6"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "3f092c81a4a90625323f91bf267bf47b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "83fa5af5a7ca9d853aa93b01ecd5dc63"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "5cbd976de12fc0314b96f04dfcd4bdb6"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "70a53923b18d0a5bdb5256d1c86bbf96"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "b31282d3c1c3fb809d63e7a99ff84a14"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c9bc579a9671a8e149bbb8e31022cd1c"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "cca888823c75ee63a5267ab2fa1bdb86"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "cc14a1364d2b2fe29c6a3698a0dab7a8"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "e22e35b7a9319990175a69fcff8a4929"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d9a5b226d87abb141fe715e5cb4ff097"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "1eb50df79fe50ac2fb474a63be3e2d23"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "6ac511da7099ef4f9870221f7c7b9a98"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c16a1ad3d7b936d6ecb7d76b59442019"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "af9eb79ceca97feff871118530d33ca7"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "bb6faa1ccf1e8e42fea73a48e189fde5"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "2134e4ae7c24649a4792cc58c93b452f"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "b8ddbde299ee7853c6f4001586847fb8"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "6ebb107dd4a004d575d3f9c3027978dd"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "6df8188e040110da8e1c632ff7dc6b8b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "2a56150b328977b6b0c07ca20dbe1a4a"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "f0f77aa32c5c6f484ebccead3eb00525"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "1835b9ed7ede3eb1270230b3ee47ef35"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "4fb0beff10f52c1dba98a56dc8d57662"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "1bc27fdf9038516e27ad23d32b9cf05a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "59bab75fe46ee3a5055c2db0d70c9cc3"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ea85133cad776744f810b03f36c2dfe6"
  },
  {
    "url": "book/index.html",
    "revision": "62949014c32a72bcba7bf17c63f6c142"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4b54648ad2ca410d1531561c0f8803b9"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "dced3598b0cffcae918061f30b75f2a8"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b24391bb753811e6a341d780634fd9c4"
  },
  {
    "url": "c/audio/index.html",
    "revision": "08d52f6bf8917e5acd70b2b302cf9188"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "eb5a0cc727758b892733042eb15a54c4"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "ad285d201e7d37ebb4b87561295d8955"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "16a750d6bd116ff7495e925034fafb29"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "7dde4373a7ffb7e21cec2c95c7347edf"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a2d2878a3557c4f1aa542bfa6adde5c2"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "6f190ab8e67013999d5a211b03e79dd1"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "0850ef196c21b38c2990adbf7a6db1ea"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "3efcbe2e50046e4659332edf0152cddf"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "7dbdec66ee773175782d09b29a83201f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "9d2fbacf9b1f5573d78d5f7e8edebc97"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "36f93753a7e523c0f1bf024604be588f"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "6917c5d832349e9b8c61f6841daeadfb"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "65fe4e7fff6e12b0669681316560a898"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "c5ab44e5cdef9631e0486d2574b5369c"
  },
  {
    "url": "c/program/index.html",
    "revision": "8d055cba4b2869f136e4ed7dc2ad6637"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "1e44b417a74272b986d1fa112ccbad4f"
  },
  {
    "url": "categories/index.html",
    "revision": "7ff39b8db87258e68785368d5915425c"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "947e6756dcb701a6a92e54f64171f3ae"
  },
  {
    "url": "figma/index.html",
    "revision": "11fda8fd205864ba79e09a59b8d6afc6"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "9c0f67627a9bdb3bfbcc9fd999ff453c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "c3fb4013740fbb321dcc35b9c1c2150f"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "0e5b831b514df73f67aa27ce1a1afa2c"
  },
  {
    "url": "flutter/index.html",
    "revision": "11b539e30c73a239eb014a08e5beda9d"
  },
  {
    "url": "flutter/point.html",
    "revision": "894f7fc662e953ebcde3a9c1cf70b0a0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1adb7f6c30ac97e10ec38093fd9d73f7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a66f69550fdede32e878d139fc63a123"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "73223794ae87f850df8b9ac2d701970d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "88e4e5a403e1ae95ae3c46b50f30aa58"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b42cb6ea4e31a5ab8fbf558410a30c4d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0fe7ae111086575a4629353ba0209310"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "0dd9f6cbfd58f0db8541300eead7917a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5006cf4ac1e5673e9ef1dda779065c12"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e026ad8a4b9826e6fcf21c0673a76f0e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "c83cc2eb3d3738c9c5f1b7e87e3b2543"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9cc5e09517eb40d411974ff3d090850a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a5082db6515334e9b11e9ae725f76046"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "500b8b898db893fe2009eda8820168c4"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "d79da5e94c75ad7feeb02c6472645307"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "3e22bf86f442d7a16cbed6d53d9297bf"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "77a264562d4fc7e1f2b5273657faaefd"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "6a1f2937153cc6d0bc498c9fd2edae42"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "b04635eeeb098cdb8a8d9d26f7c1bd1e"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "1f97386309a790481390e50791770aa1"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a238e550c31fb1c6dcbe7f9fae2dff1a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "20f1fda0cc9c110c88272e458f175f65"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d9c145b6a59b301878c031a50ce72248"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "097cf2ce1220a25a64a37376d83eae13"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e906ab88ad634edbed49a37a7b6115c6"
  },
  {
    "url": "haskell/index.html",
    "revision": "1eaa7a747577f4b20e68cfb75bbac72e"
  },
  {
    "url": "index.html",
    "revision": "d12e70b4a595ba66f6b533a70ffc71b8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "c070eb499372206006f0b3a6f03b4ed0"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "e5890d6a1c66a6fd8dd0e7e519eaf4f1"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "fec249b9c9965f7e1836a10091e7f959"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "f6773511751c7f4d7ac5d977d481312e"
  },
  {
    "url": "python/index.html",
    "revision": "a428eec292c11379e803e451c30f8838"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "1461083e437ccbedb24a4527a89c111e"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "f064f329a8037572b37e204376281df7"
  },
  {
    "url": "python/python-file.html",
    "revision": "a52a614f88fd9657a11f63cfe6f4d0f3"
  },
  {
    "url": "python/python-function.html",
    "revision": "a13d796283845a28dd4e140b752b5c36"
  },
  {
    "url": "python/python-generator.html",
    "revision": "0bec26d17dc7d36f86cf79468e819b26"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "03df095380ddecd1cc871e8d5fcee8ec"
  },
  {
    "url": "python/python-module.html",
    "revision": "230d919433add62cab3328468a69bb30"
  },
  {
    "url": "python/python-string.html",
    "revision": "a319b006d15eb8eb37cebd68f480226b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "67dd9d9a72f35a2718d7648be15b5ea9"
  },
  {
    "url": "read/index.html",
    "revision": "09f1ecfa3bdf27041809946783844f01"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "cc07b5e0567f7b6d02dc0ef31a1d016a"
  },
  {
    "url": "swift/better/available.html",
    "revision": "75f103302d343525a6bb3bd8edb22111"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e29bcbbfe95b2a24c4fc2d3d3c215ddc"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "e6c6fb82f676a9193fcdb9b0fbf1c37b"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1dd2d3b21eb41753ae13e2d7cd55af06"
  },
  {
    "url": "swift/better/di.html",
    "revision": "7cef0d0b799f535c1edeab2f1fff0076"
  },
  {
    "url": "swift/better/index.html",
    "revision": "7a175db0949b5f6ac954591dc2374847"
  },
  {
    "url": "swift/better/last.html",
    "revision": "4f53f80827e188040b8643f8b5e50fdc"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "734373979d4b03f20df12b05c90609fa"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "25af2e21088df741679e54315bc2ef4b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "40f123f74200224d4e067fe8fe79ad74"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "a88e3685b67b6328e56a6aee76d8df2a"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "420737e5de700dcfd1ff8dc38a3247c4"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "bfbfa9e969c1490d5b21652525e195b8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b81fa6a3a771298835d5bfdbcd9e46a3"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "1c17927149fa98049adc501ee5c23892"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "688c23bf357e54125b2673701d9c8c71"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b24ad2cfb0911b879074b4e932ee7f09"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "20efbf3702e3c094b98438d29d8ee032"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "37030a98d19568c920451ddc53edc2fd"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "45329b1710d2fcb07f9a7dc71e1e6a62"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4a33685972948b045c0252372628a4ef"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "409625067b30783ae74550e0f59f0f1b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "7487e2af0eaa32a0d25e66542e2c1474"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "28796a967051f8fdd289becc60d6b54e"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "e8992217098941096c5a8c8de0dbb447"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "fd39d1f5c01c0edb2308019758bf9727"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "fa4602c8d0cd5b632c1f7f7d1434176c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "a2d9d68aa65ca9a037de8c4eea5d144d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "6a6bb591513b7a59e22be6dd08d2bf33"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "20873634e897a094d71dfaa064e4f894"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "09458625bc44583dbdaee11f6048bd5d"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "949b1aee295f1ee0485aa74f12f17906"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "c7a0ad1d3c57c254d1e35749549d87ca"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "53957bc5e1352939c878ec358a2ce781"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "151bfb69fb938258b74d835b4319295d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "9e3422c89b5ad4d54d7b6979c3ee5686"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "53d0bdecbfa1b8953c606097fd0f077e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "d94d7bdd476cd892f487593f5064c54e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "5f826461384fb26e65e477f7cae90e65"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2c6f9437bdfc7f0d3ac85eeb4ba91c94"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "86a5f52bc0985029e90cd350188ce94f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "60436c8c9c42344fd39e5a672be74f76"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a4576a6fce70e37f4b5b28f73c032f58"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "69ced4d28910b01b2254960a52dae634"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "cd805fce394e4013a3cc8802a496ce16"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "959f2be62a7ec6788ca89f8097300a2a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "f32cfb704317f9ae6506c197c05b3caf"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b69b867aafa936270b09540cff761a02"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "cafbc8b90b2608cf6f3b40ed0eaf7942"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "313ca237805bb3b2be84d226d38d5ad3"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ff4f8f4bb87995de6f28059a1c4518ed"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "9de7acb632d99628f9f99139c3fdf34d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "ab79c1b8e93c029851645b97acf341f3"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f1ff5dff657997266f4af646a7b2e58d"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "79eac617870d9bff5ec5cf7d7ac7f843"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "559b671238ce6de6f5e4efa557d605b6"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "a0dc91c71ade874f62bf1ef7efde190a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b7cb2e3096631f1a785ae80a13a86dd6"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "d9c2f0d6eef1738ac83b537d71733086"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "cc0a6bb4ae9affafaffdfcf978657d73"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "4bdd5ed1e1dadafa5fded3f956e9f35e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "7e3a8d9d481921f91593ab1a44e6daf8"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "afc7dfc77a1188446f78641fe98a1648"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "a1960708692391b77a90c6a85fda2af0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9e1c7e61c59a7722eec923bab13bb311"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "bff50664a1ea788e710d50a5c90fc4fb"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "c35ca3280526030699330e11682d954e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b9a4b111f725471670e0535fbc704be6"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "cdfad618fee7501b8c63a496a803e858"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5b53aa695c104873d0a1ff08a2c37ad0"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6e2a8ce72eeb552c29dc2267984794f7"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0b51bada753945ec68f55df3e4d359ea"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "ea40e8da366fcf9653e815e96bec4197"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c12b50a67fd3cb53cfbcab33da7f863b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "98727a393e10235e3c3315c732a7cc5f"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "a1444f76ebbecf6711a2cbb4110c26c3"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2b5e9933065170ecd67f09fd361bc160"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "040f4134fb73f403e5fd367f8f735f48"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "470bc34e4ccc80226ec0370fb5aa60d4"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "1b15b48fcb3caca09a8fc366e5a4e414"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "ae12f7b8d01729b9e44ffc6e0a3c7092"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "063390bc260b116bd9ae32d8630e721b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "00dcd98a15b94ce89cfff5aeab157704"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "badb356275dfc94edb7b50050aeeaa76"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6a2a87dae58873fea68e8d3d2f753833"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "56bd746a1ff0c323cda7989bd947e077"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "d36f9a41088ae9d9c8699ae692bb82fe"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "cf4cf8faa574ef26adf96d5b789ef73f"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a49ec12ed736157aa7abc0a66afdd7e4"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b5e1d4b563d4002d63f03d64a95c04fa"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1466ffa5eb3613e6491615bad478113e"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "312670192c1a510cca90812d19db5695"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "3e44efd84c16987a5265f71cd816815f"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "9425ff64e22b54801f7ef374029ed947"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f1325f6048722c43c4fb165133b989c3"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "61df07944c073e5b60e226e905198061"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "125a34707bf8517dac3ea7b374c0592d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d87c7ce96253abffb3a5b15ee2094e63"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9b23259ba9d6a38ba7bc3e3ec52ac18a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "593fb8b5641540c3396dec3dfe949a3f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e102b3a7c7d6942e529348fcb6430361"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "94e67bd5d0dbde1ba6ce818befbc2aa9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "7e0ea28242d386b861b24976647d066f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e944c6409284555e0f6cf6168051599a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "1af176d378a3b93fadb1aa2f5286475c"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "7b4367eb5de48b49e93ae6e884623c49"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "0985f791dee81a847f9e953101a21287"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1400f0afd0cd9924d1293ad9643ebd8e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ea14091706c308576227afbdcf857f88"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "18e36696c5feaa88cd725fe4738089c8"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "20904573f2a1ee9b9a78da65d0697c66"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "41635f3c8c0e7537005b40ac675ec053"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c087655cc192478c0ff7cc476c896755"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f7646fd955153298e8f63022eef95aa1"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "48b89a797a9717df4a0f67dd0b8d44ef"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "66f2b268dea5045cb6b72e77bdd54865"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "c015dab890b6a9c1f6329a539f7bf0d9"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "b793f596b89a753ca60341121c7c7e42"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a6c035fb8fb061ce121efb8b7efb7c3b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "03e2523232a919dceec8fba54410c907"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "54186a5d100cf2aeff28d8dd19ce1582"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1815a924352e94dadce59fff3aa52106"
  },
  {
    "url": "tag/github/index.html",
    "revision": "e51fd7a2b176c402bb1de9f8359cb722"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f3b7d95250fbcf2493ff2f4e48f2af8b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "46ec8e9a2925017ec3aef5b079f9711f"
  },
  {
    "url": "tag/index.html",
    "revision": "061bc3283d2e371e000d745955280f42"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f25fdb5bced813c96ff9b9cee97d796f"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "987cbe16b7ce29589348a902e14b3d27"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "5643ac241d82b5e3000988f8eae3735f"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "6c76f3fa4739786f2ddcaa839a4bcac3"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "a7665419b07ca73fe61d2fe4f582b5b0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "99ac0d903255366437195bcd3fa67fa4"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "73032108fd23ba0bea062647bdc083d2"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "873faa5c4cdd85c953268c8781684e9a"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "dc6d1dc02539b75984ef91d1aa3832e0"
  },
  {
    "url": "tag/json/index.html",
    "revision": "30069dbd12e509d42180566c1ef15803"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3b7c91d7ecc1bc8ab54e2d86e066a40f"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "79c79aa1e7e8ed90e00d4e64d288734a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f2f9f05307e0d7ad97f392073c2ded08"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "278302817cb2cc0a780fe4806ed081c2"
  },
  {
    "url": "tag/read/index.html",
    "revision": "11542b53d6c1633615380abb2a3acbeb"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9e87ea74bed628b18da88dd9811ee909"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ccc02bd6938dad31b2fc21b62a064185"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "fe3b799c30b68a3283910c93903f4794"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "cd98afa476802c964a85902c988b5cdd"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "6f28fd97f6a1a942a2b644d11d9b927d"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "651eef537e76ad59066cbab7e32725af"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b452d36556db5545e5dc9ca0a79302d5"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "149829f71f1485d625f600a52dc120c5"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "1544752eb27ad5a590502e8559b97e46"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "daf9227a217e11eccc2ad172278b0ab4"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "8fb60f23e4243ccca1d2da481b90fc04"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "10a5767ea4523c5b5219be7021397602"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "52fa4286edb0b03074bca86c200a7004"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "45fae1bf25cd5dffbda13e2ffcf66d92"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ab9377c31fb2e206c8b839bd970c809e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "a0f2a11d59e02560f427ca318d5961f2"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cc903266afcddd3d1e4005d10989dd9d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "1e756a99a6a7268349b9326e1e047293"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "3c2875e82c5a0abf8b7ae1bca609947c"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f01d2d4b4255d2fd17023b82116ee78d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "ff23b9411ec834cc1cebb6810f6dd8e8"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "bbe3e57e198e42690435137035645ab4"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "4ceb024ed3883d19ce278d615c2bf6a1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e91fcfa77aa6d59a4a5f12690fc007e4"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "386a1ae4a8fc950d687fdc74ff479b1b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a1d7de0e9b41779554d144891d50fea9"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "643f8df4be4dd73acafcb6b42523699c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6cd385e028bcc8ed035fba1eecb6a612"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "01bbbfc99bde6e6ce4602956679d875b"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "56b95a24276e6c4820971da8ff42b036"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c629bf51cd1a8c7e48b23b971dd81d09"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "65caf0e1c565a13c13a06a546bbcdeba"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "384ea25733b57d2a7fb025a7b17c58a7"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e42ba69780418bd0f97c24d61e60c6e6"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a76111d20e41783696d427a88fc08318"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8f9ca0defbc7d5ede8e81aec4566835b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0abded92067b9bb86159ba0f1937ce50"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8e7b6722de92923ee932fb0faf9bd55e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4c52f7461ed205874a93b4ed3490b15a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fadec9f060a0ace39e0ff33a4758cba8"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "abd1c568f0e1f82167eb7df22777930d"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "8688cb11774efb81549bf42a99cf7ba5"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b7bd74b21f3dc23ded16d9b3fdb26b18"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "6cdc30795ab1327088f35c2660a00134"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0d26f9e0bf3353400931c366d95469ee"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "86b836dab42c675aefb83dd8d042eab9"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "268793a9d0e06479eac92ce3acd1a166"
  },
  {
    "url": "timeline/index.html",
    "revision": "8bb4747376f0e6007c64fa18f56e810c"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "cb5de1c78bc5fb53135e60ad34627511"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "5212d29c3273cb37a729387fe816ffcd"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "7aa3f7e7a2ad1187497280b0471b736c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "025f5a64ea43849d9af8b79beae39537"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7d081c32488da9489a5d6a3503c1abc0"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1aa7019cde654866f5cde8183f33af42"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b95fa9ffe4b4456209e34d4ce39fedfd"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "eac85ddeddfb5c796724dd0602efb4ab"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "65f7611cefa741ccaf63a12969c9a72e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c9877e276483f76feef3552c55fc7a8b"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "4b575d21b521c94b5cd173acb4b9f444"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f061e878e9b8781b8bcc7cf3b1c94fc5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2fc617c2dba895378df0e9d06bccf9fd"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "c6576fece7c9217f3a88928e2ff39704"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8cf2781c5df1851e20ddaf5ec65179fb"
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
