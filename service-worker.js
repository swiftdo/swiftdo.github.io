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
    "revision": "4a6c566aa98439456b7a358680ce5712"
  },
  {
    "url": "about/app/index.html",
    "revision": "610da22fdec8106c724e0d2475f8257a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "fa5db5ea13ac5205ee1b3f6e6add406f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bc1209d481df02ef9981b94db9c73943"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "b49c6fe7bc03a815f6d6bc7cd40dc0af"
  },
  {
    "url": "about/index/index.html",
    "revision": "d0142c2d0e74b7eec4d2412baabbcf19"
  },
  {
    "url": "ai/index.html",
    "revision": "fb859a463c3acf9d37653d26d6f1c404"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "8dbd1de012947f563404787862128a21"
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
    "url": "assets/js/106.db63152f.js",
    "revision": "e15cd016877f8660af0a5ee663ea633c"
  },
  {
    "url": "assets/js/107.ff6cdc56.js",
    "revision": "31fd1db43d880e0f6ba7f7f8df1d77f9"
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
    "url": "assets/js/120.81b0145f.js",
    "revision": "6d7df00c99a5167b0a6e0d58ecd778ca"
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
    "url": "assets/js/123.53d6b93b.js",
    "revision": "ff0106256ca550a586b995968119d20b"
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
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
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
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
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
    "url": "assets/js/161.a9ee5c61.js",
    "revision": "ebf77012eb95c5c9211f23a76a9462dd"
  },
  {
    "url": "assets/js/162.5a9ba4e2.js",
    "revision": "04a1ad2965307bb506e89cb1853bb2d5"
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
    "url": "assets/js/190.d062d72d.js",
    "revision": "0022206a0a4aa0d5700b70a7cf373429"
  },
  {
    "url": "assets/js/191.f84f0887.js",
    "revision": "1410ad1b7fed35dca7ac3f3f7b4b800f"
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
    "url": "assets/js/198.f7921419.js",
    "revision": "3c71f90cbf777bcb549fc83aeb5327cb"
  },
  {
    "url": "assets/js/199.8e5a3763.js",
    "revision": "4c058ae9b7093b0a4918d40828da87ac"
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
    "url": "assets/js/202.36a10549.js",
    "revision": "e065465bff00fded699b9189adec37a6"
  },
  {
    "url": "assets/js/203.64a20ada.js",
    "revision": "b6b9cb89e721b872c3b6ddd8c8039dee"
  },
  {
    "url": "assets/js/204.97b3d355.js",
    "revision": "c74f3358eacd31b38a3a6d4249924f2e"
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
    "url": "assets/js/220.1ead5b75.js",
    "revision": "d75f8b3fb240878cb27b736c4bcc360a"
  },
  {
    "url": "assets/js/221.8021e9a6.js",
    "revision": "6cba642b5b4a0d6f58011e90cd3c5c45"
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
    "url": "assets/js/226.231c7fcb.js",
    "revision": "84534b7173a7b334bb069e8c195aa6d8"
  },
  {
    "url": "assets/js/227.a9847d3b.js",
    "revision": "4e5f035540eaa565e288f0a4c7d0d3e9"
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
    "url": "assets/js/231.ccd433e1.js",
    "revision": "926db9da8c0c574ac4e0c2aecc7310da"
  },
  {
    "url": "assets/js/232.3b6d1dd3.js",
    "revision": "839331d39e00ee4c7d63b081b60a5e39"
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
    "url": "assets/js/235.65f35275.js",
    "revision": "8f14db4087acc6c6fe5fe310f489e847"
  },
  {
    "url": "assets/js/236.c49e558a.js",
    "revision": "b839c14b35786b1d81c43458196c1953"
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
    "url": "assets/js/239.c8868190.js",
    "revision": "79bc2a292b0cbaf00aa3fddbd9649d89"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.a4b2600a.js",
    "revision": "f74e15c562c31e5fd3a9f3f687292300"
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
    "url": "assets/js/249.c813208d.js",
    "revision": "4d5f117cdd0f3fbbc33a12336c682b6b"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.8befa88f.js",
    "revision": "edb0e1007bb4cd8172bae218192da123"
  },
  {
    "url": "assets/js/251.b472b485.js",
    "revision": "c2f30ceef659ab366da1679967d44c66"
  },
  {
    "url": "assets/js/252.a090de4c.js",
    "revision": "1d411fbb4450abe9c080d21e0d4ff128"
  },
  {
    "url": "assets/js/253.2eca2aee.js",
    "revision": "cecf97bb7ef8c8b99e5627e3d6aad1b8"
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
    "url": "assets/js/50.10f4277f.js",
    "revision": "04fece173279020c09492e87870a1900"
  },
  {
    "url": "assets/js/51.3864fa53.js",
    "revision": "368b01835c517e87f0ab5b4d09248089"
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
    "url": "assets/js/app.50862b95.js",
    "revision": "c6d374262daaff052be70854be460350"
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
    "revision": "62622d6f506367c3664fcf76c881e207"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "54dcd7da96f5b70218bdc7361ac8eec3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a48e078664e418df4de3bcf4810708c1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bed3b6276a03fa512f1ead44ef6e4444"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "daf3d20cb338f9590f9815b70d2ded38"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7129771522b22215c0e3734dd5a998a5"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b4df9569cf70952e1564eb910ebb1f65"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d1d4963b1ba7b8a233638e23e2982186"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "fc517bb3e08188c0a98325adb1c5b812"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "bead0a8889cdaa02da2bc18148672d47"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a97e20313d557186c4aa6559ce372bc0"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "877fe45bebbff8d67f59f1852324fe8c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "a7b291d479da81393782619403cc180c"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8befdc081525eb637d60ab36bf490772"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "ceab1d5b8f06d8af2786d54b14781e64"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "2b2d9b0a3cd5f5184259e9c721dc7b7a"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "1226a49a9ebc791036596d316c9e7aeb"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "5e31c2dfb11c1c9d4e968375f93d6b21"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e8324376e01300ca934bb219c07ea6c5"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "38b17d3b6e2eb2b40a2e9475b8a7ffa3"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "79b88edd52a06aeb1e5d80680b0cf0f5"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "99c46e3bc1e2b262ff0c9da819bf8311"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "16ad83a596e67d68d4e541fd6f0c156e"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "dc2ffda58af2be2aaee176b9de4e3a9e"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "c8c241b887a3a1ae2700f91f4497d907"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "698faeef3f69b445b0cdbb219ae2f78c"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "1a4927f18bdaa265a4e0b4e6d01c3786"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "a257bc1ade7a3acb8e53b640f6892937"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "03caadca236d402304bfe5a95f26aca1"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "84147e86e0625ec960459503e22df506"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "e396e77e70bbf606890a529decee020d"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "7c13dec45417d139728cc50488d5d2f0"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "f2d3c020f8cb6d74b005923a600c12d8"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "5f18b9b9f5ca37fc98a4662bca22e870"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "b6b671008daf4b7a289ff98da939e0f0"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0a5bc9b39f4e6a8d373d72dd90ebb665"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "20b66570d3a802ecae807b948e90e823"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b141bc0cdc319e5943bebaca192a5d39"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8247346feceb01427416c831c1f80039"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c884cfb95fc042ac7beb3aad39408bfd"
  },
  {
    "url": "book/index.html",
    "revision": "9e8247b7951fadedb3fa1a8d805898f9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e700afb47a2ed2f8d12a4c118d0bb3bc"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "db0390406b7016e488003297c3f3cbed"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b3abac788e2a634894943f4f5873e685"
  },
  {
    "url": "c/audio/index.html",
    "revision": "0e5d4e6f7c4fd8bbdaa8fba42789f632"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "3a6d7957d31b4633621a4d2b85155651"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "a82df9691e7290476e7aa7c47d8063a8"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "c28be374b5b1e471c06bae6a2c423099"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "11d88efb29d03090359a7f454dc1469d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "e0a9f715a0dbdca702a38ee8c299941f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "95b3936ebcc8500ac8fa6abd90ba9bec"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "83a44260993982d2d8235157d42976dc"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4071c6287a55c390d671b88d3e12f4c5"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "f2279e8db3d47a48b0fa77e38f872b06"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "1d81741a5fce4fd7eac6c5c5d67ddf27"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "52c85bf2bb0d460dc3c083a4c4abf214"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "e7251db382f16aa03fda6d6b4c1a4a91"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "7acdc16a08fb252013d33bf3fe10df54"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "51a1ba73845f2a7fb9bd8d26d41fa7f5"
  },
  {
    "url": "c/program/index.html",
    "revision": "4668970c2d681fbeee52c02d13bbc9f6"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "12a669d78fc48b2e08cd279b8a97c49a"
  },
  {
    "url": "categories/index.html",
    "revision": "55c5beb61c1b7641cb117f9b8b65298f"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "c846a03d06061bf1e4a5c1738dd4ee56"
  },
  {
    "url": "figma/index.html",
    "revision": "c576baebcc208890aec465436605b09d"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "9ac66e203ad8010f7f883a9961d74d02"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "8b0c3480f88035e1a534c9eb37e5c1dd"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a9b7bd63ead005cd19d3781707e25a14"
  },
  {
    "url": "flutter/index.html",
    "revision": "9067be539a2a55d5d323e02a02256744"
  },
  {
    "url": "flutter/point.html",
    "revision": "9fc9648efee96bf022ea6f6c50c5f9fd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "68bdb5f5dd80ea3be2e4f7f8b90ec558"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "57983ca23b5422e0320221784065817d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c2977433a5d75fb1044873334f570508"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "393e932d2aef5b3064381d43e22eb2d0"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "641ae80a4c1ff7972a09b2554ce28f72"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2a57a36f403509bed5104e93cfa46b5a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d1bb9d8821f3a60a36a97dbaab881a5a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "2cf90426d479050b6ece21fbc0b37ca6"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "88bbe8df237a8c5acdf9ca350caa5db6"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "dd8d3689616133cd9a77e9bac05d86d2"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "459c3c38ce3ccc4ab5c50b0336665dca"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9cf91e7e4977f38f63814877b9c4cfb0"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "3629e76208827efa002c1f7436f00354"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "1ff5122bda91f855c39cb316f4df94f9"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "306a72c87c634d9555be87eae82d266d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "26a74860f413ad07b305b75fa3ac42a6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "1c4222419fb62c95474358755619a85c"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "5fb6bbe13706ac6b5293b3556ace21d7"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "117cccd2fd6cb43a97151cf4b2bb1483"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "0d13a70030c3bd3bfe83dd13edf4d4d5"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f7b2fccf0d31ac9c15a823013d621684"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "be8a330626481b33ba4b4c48a97879d1"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "832a916131f2dbc206ce79359b29d0fa"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "2069ec76ac05b01b288a72c98418d3ed"
  },
  {
    "url": "haskell/index.html",
    "revision": "4709cff622a3766d7fd3f6039b89d9e3"
  },
  {
    "url": "index.html",
    "revision": "8c18b09b278af470f61df7b91242d089"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "6ee401213a3c30352cb0a1bbabcca744"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "cc205c488c1464cc3e3fce95b4306e02"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "47ed413c6a6c64f868823b739a7ff774"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "88b7670c1d5b230c0a65d9e2ed33fc06"
  },
  {
    "url": "python/index.html",
    "revision": "a3bbe134fea64d9e5e16524798bbbc57"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "cc94cd64e38bd5ffe478745b5b54256b"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "dff4e4bc5d601ed4e1ccd41e1f8e4c6b"
  },
  {
    "url": "python/python-file.html",
    "revision": "67a8d1fffcbc60b92a7ef4424461ad2d"
  },
  {
    "url": "python/python-function.html",
    "revision": "e689c0f4bce0caf220420979c64a0db3"
  },
  {
    "url": "python/python-generator.html",
    "revision": "3e75afcb3dd7cc696473b54bc2196c9d"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "bcc1606635f44796cacb2334d3012c1c"
  },
  {
    "url": "python/python-module.html",
    "revision": "3e3d669758ec079bc7287f4be45c9f39"
  },
  {
    "url": "python/python-string.html",
    "revision": "78fbb85a55fc96340a849afcd4e7ed30"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "feb713f520cead084362d4b5424fc9af"
  },
  {
    "url": "read/index.html",
    "revision": "e488e7710127e318d4a9aa9b1403397f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "bf13fd5687cb3295dc18980ba174b7df"
  },
  {
    "url": "swift/better/available.html",
    "revision": "b934137a0480ddd012dbe3b7abe18d75"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "0206b1b21188d5ea175d06f3fed18fbb"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "691a8adff9742d800f7ea2c7472c51df"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "7b3028eaa9957cf0450ebcbba9355c34"
  },
  {
    "url": "swift/better/di.html",
    "revision": "984aac10b2addad26c2167adb7792ee0"
  },
  {
    "url": "swift/better/index.html",
    "revision": "f3faf3fa430b6c2442f0198e0a263d0b"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ac8e64a3ee262ab2daeb90fc906fd645"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "5d5bb7c441fad7cd00afbd4e7c647edd"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e6e92e0b75be761ac6cf6893972b6f87"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "efe5c4471f489f2d27e95c9799087003"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "f81e0dc40aa7cf38d99841ddb4ddb868"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b310ff82ad0d2f8975f3db216d1f689f"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "09c4d3209392e4bdfdee88334d54ac8d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "263eeeb327c500100490c9237876b1af"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "4cfa62ae384e98d80b66cacfd34bd4c8"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "b0d16b6824b55998b525aec5969ecbf4"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "19e8c84cf3a5648590d89c8c2ceed6fb"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "5c582f5ca0af9217ce77c5db48c90cc9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "f6c31d8d65d5f7ecf44a283009f6884e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "776c18129d14bd704c69d2cc49225515"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "510e3680e3046b6872a76299a2c37a0a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "1aa0abc48f238552168d366b7417cba4"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "c6191b8bdc39fd447036d847a63552dc"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e62d4349398a98c0c0422f2d82f3c48b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "5ae33e8d762bd1790373f9b63b5bc16a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "f02110cc082db5d226b8de71f0c8a750"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7f0d0f39ceb8d526e9005eb549045fb8"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ed1ba97ac401347decfbeaa906008414"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "9e93be74f596dcf72fb1ebf4d811a3fb"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "71f35d9ea94c75c48c2910840f9e86c0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "70e9d1be848c3b99131f22589cb7fc72"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "10373767edffd325d954e66ab11ea991"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b7753fb179da4f04e6990d4073582bc2"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "12078c150d2fbca35030b527f35d0f29"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d059e7ae7a19878fac7d1f87be943791"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f7938cf74b599b5cc27b5910974b1605"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "1c1648a80d5b48c676742333c7be026b"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "681b85db9969d6ae9f97839d367974dd"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "30355ea228350ca68c89225b0aeaf042"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "bfdc0160f209f031d45e945943b17f19"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "08a85041807baebfd053682049f52656"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "f3672b4a0d4e7a8d560a5bec54502916"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "33bde18d4d7ab63186c3b6d1d45e63b9"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "ad42c5beca76d71b4dcbcb29e102cd80"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f0967f7d012e830397a964b7403875aa"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "62aaed1ddb28df301921deeb600b0bfe"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "f2f098bb1ae3b5b52df162a05a3d49c4"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "03e31c2797ae11945857b1ab139e2a89"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "ec8c78376041f297749be30d9fb80149"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b6c1b27fbc564c57bdfbe5ca620d4f28"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "9dd80de45fec4e18495b06cc3d9f2611"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "ceecf61a1faa3c99c53d80c1513132cb"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "067b62620bc2acfaffcab6ec79d43c0a"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "fad86a402f8fbc513f5000216272b5d7"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "4c1e01742cc8b0f31097fb1c60fe5c1f"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "ca76f7231038d055721933daf64582ee"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "be83c247ce4dd751662deeef920686ca"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "5ced19f9206e401f4ec1014159d312c8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "38ed33453339d1879054c8816b4f9e31"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "864f3a432f6255bfbbc439c6b6746952"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "69dd7b2cf37d3deb4f0aa1dfcb53c205"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "94318dc6aa3ae3083aff5d9fb83f1ed2"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "7e20b5c5a3deab2172e93d802f2e48f3"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "5d0cc9a479c8a6d557ceb822bf5b7854"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "ec3d80d8959b3b9c5e1f6b7e769b49cd"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "1dc73806a8dd65303747b2ce8925fa54"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "acf41895f5859d2847a5cbc8f609d3b6"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "edbf6387ce5a93981f669bb40cc4de71"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "23af64511aa872a0b3863489bb91c1af"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0686e82f9c0843b47aa5ffbe1369aa37"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "7c1f0f56724becd41da43ac679813860"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "55160377194b8fd09b2303375b034eb2"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c67e6b4c8ca35d846495efa62da96134"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "f4bfb2fcfaa770b0cdda68251339a04b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f899995562b4fd121caa2a62b8ecbb6b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "d5dde9e997b7b78f7a50416fc31f4db2"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "be4d4230ad5b92f6c350372924d5b83e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "0d238609c6f008ca3949a99b7a4f51b9"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "07cbaa2b92a0c4bc579bf5d8db4da585"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "89ed5eb8703f11c0352f8d5119a341e1"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "6979eec2498e66ec096ca99b0e472357"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "d516f62fbcf62765550ae34d4c05cc05"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "1fa251c51c8cc98edeb065bc5588ff0b"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "9234e3392b06b1c6845d5b44217bb70c"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "0c45947f22ca8ec9e7708ba3312c9bb0"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "3c745e331a5f438631f07b9adab25f64"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7323cfa0d4863cd417d2f8fe665eb79c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "0f1b090ccc8657ce670c14c84e82091b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "6651dfdfac5c501deca16ad2e60bd37f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2443744768ca9f496934b5845f6c2f62"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "edf86feba08c739440cb63225adf5fa4"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "01ce23418d718038f6c6e039281fbd1c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "785b63a7ca0a0bbc15c171909cb46498"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "df0a478c0bac01b6ae61b39c78e81c05"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "1b684bbed704ab447de1af19c512a730"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "ae25cb49aebdc94cf2990ca5f45aa2aa"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b2c433a487a26e832e333644dbd70ce6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "07eabde1b888f0c85d0d8c2b23b1b2fe"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "60e6f60febac0cbfa4cf23b90cc18511"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7b9c32470c434fc946d735274a8aadcd"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2239859561a3bd7eff7f6d992c71846e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "44254f9cd1cc19023ed3b6e4f7717675"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "aa328ec3c3740b8ff3dea5fbca3f3077"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d0b0d72c031e155e456f9d18d0c2df78"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "708cb40408675772a07450a1c460cdec"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "51235958f670444ad62e4bb99d77ce72"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a6700d18850a43bbd775aaf98f15496f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b5b5e531a40bb35a3dd39e81eef1befa"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "3ff529b66ceb6dafd692caf425dcdb35"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "80c5ff4b03f2b570a59bb15cce436cc0"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "34711196e6a0d6a8a58b24d9a3926f02"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7b1fd64cf25e251c30dc5c3afc445d21"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e9ff910e4c7e5d52c4ed27f4a9327ac9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "4fab196afdc49de991d40782bd4879ed"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "bb7f77b15186cb99a9c3878df43c828b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "84d85d68e463e3793b343f81c19e6647"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b08175fa41c753feeca52d55204f0758"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "664e03f8e7bef3b7b03013a20e213e50"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6b8c5f0000ac513a4c260d48103aec14"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "03062fb2f245c7556b9e087d94bed385"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c446b6b46cd932a209b9742c34ad88e2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4174ad236e069be36fd457f942523551"
  },
  {
    "url": "tag/github/index.html",
    "revision": "f601a9ac2a9ed9038176135e876c1c2f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "14b66d013ad85d2f471ad112a3699579"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e4959e4963e385d13a32f84ee6e2c72b"
  },
  {
    "url": "tag/index.html",
    "revision": "c3501204270e4898bcfece0da784515b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f127b960f85f988fa1468ba74fea705d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "41a20b6c45e52bd86d76ac3e18aa6042"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "a57c0d97ee368cb392a486507ccafd18"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "6302259274a51b09a7312e82ba84e62f"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "0c5ff632db9bf71b1b4461296a122ec4"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "eb0bcaf518830f683e6f31674633048d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a49449d34066a5f38080a091b966d7de"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "79f98601b06f99b1f89d1c504d44b50f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "de06462a98d0204f521317599d8bb58f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "ac6dca6dd492751450a921bed5ba2eb4"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "5828a06b8d090fb8e1dc66b4aabf601f"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "1d901ca6e406968610a45fe844fde177"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d03872a06f42887523ec3fd3a87bae4e"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "22561381e4fdf29df929be8434618bb8"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f8179bef401a010b22a9c6c5c3d890a8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b551adde2f4998dbc37b618df48efe8a"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "f86dfba8b1fb33b455b2cee32c0e1210"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "49e9dfac24a21a0428b4810cc1b48822"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "f3e66a6d45697219bcc4a7a56a78f810"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "432562e4c123038f95679e87a85f5605"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "cd8b7a5f36571487f1abf7dd49828ce3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5c6333730cae5a36102d9bb88a934d8c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6ef2f37bc45e0b7f66cd7edff8eb77cd"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f5f63e033166a7f8920e01ac36968376"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "2631095b9d5d2cb28399b0bf192d8f16"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "8cb25bb8484bffc208156f57e83e78a0"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "20a9747ddc870ae76d6e1dae17a2f733"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "252704a0587f6295c5c1e4e7854dda08"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "810c48f05451f06c83c99688f327d657"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "05dae62a253bc6a209045d26034f2876"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "85856572732da2878361a3a93f10ab5e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "faf22b83498f305c623538a91b277c41"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d6787d6ba70bd89bd39d961711a5095e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e6bff0cce858fb50a860530d39e05224"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "c84ecb86af8f594f7441bd56bbfa32e1"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "d7db618b55b60c307117e9a6e0aeb3d1"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "7e6ee6aa1e38ab6b39023c3e139c845a"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "9bea294b9de8369ac40d75a80e3e2a85"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e24514042a79e65176f260cd4492d090"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8283e6bc77e115c9c290264803e089aa"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8a104db4d833771019818af9d3cdde9b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "f8904a6adb12acad9f029d7af7d89dbf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "189906dd779483c0ac1b74f52f2f990a"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "2031e5457ff6f6cb7ab39e9677e8fc43"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ebaadfe5e92abb2b3fc97358fa74f801"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d2482995eab38256ef4d2a0e0625992a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a85ebb99bebdad0fac7c05255450d5b0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "fe4b32c41d233baf5111eda7ab24c74b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2faa62204911a1c67c91566a25a8ee97"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ae039732be4b7b8c85bcebdf7cc1231e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "11325b0817ac21e3d188ee26d1215980"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b375c9844344583c3b775c932561a3cc"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "a27812e8d2ecc274866c5640688eb0f7"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "126bdca135ae008b03c5c16a09e1fc26"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fdd0d1434938b77102bb49ed0b78d6f8"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "250cec428fdef4513b7b7a1bfcb48999"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "2b8a835fca8bde9aebbcf399b5012d3b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "94cf38627090b8085c681deb9f0a1b6a"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5f2041c73696ad5e5b0ec7019e22950c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "18ba83169f18397b549aaa769d74b454"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "9631035a252969c325d4906514e19639"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "2c6050d5201d1a23b24da6ef26a59c1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "27bf3d1fedc4277b93744a2009a8711e"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "884b6f7a9d79a36bab99f04b937f2b6e"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "1f9e8079a07adc7194032db2c91a7177"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "efc3dc7745dd44cf735f38fca5369487"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2a5e5ff2e43a16eb2044500e75123ef5"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "39adbd88b6f94e5b62520649452173cd"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "93ba8a7f70a7995e7229ef7d395e119a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d82d3e64ac5982428a1e18637a77ee18"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "b442c351d06fb42284401aa05395535c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "7e2b32aed389dd8e2c630884349f88b1"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "45e0b18b7824df28bc388346e7bf828e"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "640c1a8eca08da22cf431d145c69d945"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2ac85703acc3738ecdab3db44ca45a24"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1842815cbaa286ab485dc3d1e764d330"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "82af3fbc820f0ac951264b6b1f1b195f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8512d2d93bbdd103b361bb14d665d318"
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
