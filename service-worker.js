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
    "revision": "658d299554b1c46e80a7aaa864523c85"
  },
  {
    "url": "about/app/index.html",
    "revision": "0b93e621815b2e68a908591138acc7f0"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "69a21913de73b2108bf48f32bbbb1f73"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7ecbf2fe54afec70883f370bbbc88e0f"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "73e5f5ca4f02f2b51995d79018fc958b"
  },
  {
    "url": "about/index/index.html",
    "revision": "6c17193199c870fcb61d774a4b07c25b"
  },
  {
    "url": "ai/index.html",
    "revision": "394f56c776eaa7692223bf7b3f23b3e4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "2a46d0cbb443bf180c2565870ee802b7"
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
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
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
    "url": "assets/js/122.5a931553.js",
    "revision": "810c6b301fec1dd3d809cd1447055822"
  },
  {
    "url": "assets/js/123.7c8554d3.js",
    "revision": "9e2efca9336ec4a38259eb3a4893fc19"
  },
  {
    "url": "assets/js/124.683c3e0d.js",
    "revision": "d89673d226e96b0edb4f3a97d97e1bf3"
  },
  {
    "url": "assets/js/125.b89686ef.js",
    "revision": "55d2ef8e3296df7c1a46031065c97792"
  },
  {
    "url": "assets/js/126.12404870.js",
    "revision": "600034486570fc5f1b38584672bcb2c6"
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
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
  },
  {
    "url": "assets/js/130.d8217dbb.js",
    "revision": "092aa50ee9b9f5b583a3ddc591f22f70"
  },
  {
    "url": "assets/js/131.81293bb9.js",
    "revision": "cc4c368d8ef0fe93d09057da7cd2acad"
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
    "url": "assets/js/147.79d5829b.js",
    "revision": "3d6fa9a6b656553de390f2022e43b934"
  },
  {
    "url": "assets/js/148.be2c942a.js",
    "revision": "39ebe18bc63210416162deb3bb247ee1"
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
    "url": "assets/js/155.567df775.js",
    "revision": "e18c3323c0c5c65aa16e6428b2aa0cf9"
  },
  {
    "url": "assets/js/156.1f6a413f.js",
    "revision": "6ab9b8a6c8cdb9e7dc56a994efea0409"
  },
  {
    "url": "assets/js/157.5a2f7ade.js",
    "revision": "8d4416b5ac84863edbf30cd759d28694"
  },
  {
    "url": "assets/js/158.bf7d8fd2.js",
    "revision": "b99abfba05e3ffbf39edb03f4d7f2fed"
  },
  {
    "url": "assets/js/159.9608e1c1.js",
    "revision": "8204e52efea6bce92e7fa2a633ab6b37"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.2cfa291f.js",
    "revision": "fc216b7a79ebe867bfcd6b3015efdc2f"
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
    "url": "assets/js/170.7d12fec9.js",
    "revision": "ec49e8bf5e38b194623b5938ea5b802d"
  },
  {
    "url": "assets/js/171.e87a4634.js",
    "revision": "efcc92fe3fea1900cc023d203a68bdb9"
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
    "url": "assets/js/185.536ab6a1.js",
    "revision": "27909ce2217f4f9fd58a669c8739316d"
  },
  {
    "url": "assets/js/186.60bb9442.js",
    "revision": "679fe54a1ee4d9f7e01e1851d6ab09a9"
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
    "url": "assets/js/210.e5f99bd1.js",
    "revision": "c2ad7866e5074acaf0b235c349617e55"
  },
  {
    "url": "assets/js/211.67cc12f1.js",
    "revision": "4d48b9a1d66adade2beb628046244da5"
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
    "url": "assets/js/222.7c549a53.js",
    "revision": "4d78cd069fe85f67c3bb173da6ce8f2a"
  },
  {
    "url": "assets/js/223.6670636e.js",
    "revision": "6849a79023edcc99abc5bcb0251ac67c"
  },
  {
    "url": "assets/js/224.12dab1fe.js",
    "revision": "18556ac10b81798eacab36471b551dee"
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
    "url": "assets/js/234.01255b7a.js",
    "revision": "e457d6c279e8f517f95731ffbd614b92"
  },
  {
    "url": "assets/js/235.744064e6.js",
    "revision": "aebc7486da3ca87bcef734e3a6c567da"
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
    "url": "assets/js/238.2a4db0a8.js",
    "revision": "9981f8c587b90145dcaef2b2e1de18b7"
  },
  {
    "url": "assets/js/239.cca81f24.js",
    "revision": "ff74c45651efcad0a13d097336f868be"
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
    "url": "assets/js/250.ffaa19f3.js",
    "revision": "72bc9250338f26839707aa865b84198e"
  },
  {
    "url": "assets/js/251.f1301e25.js",
    "revision": "c21de0c9e6427ff6282d28257b2e67cd"
  },
  {
    "url": "assets/js/252.a090de4c.js",
    "revision": "1d411fbb4450abe9c080d21e0d4ff128"
  },
  {
    "url": "assets/js/253.29a4bd31.js",
    "revision": "a051e116ea5c42c1b21a797f70d975d0"
  },
  {
    "url": "assets/js/254.b06f42bc.js",
    "revision": "e12eaea8be814a61c7dfd5d31cad5df5"
  },
  {
    "url": "assets/js/255.96377298.js",
    "revision": "b843114084472461ee105eb4e3db818d"
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
    "url": "assets/js/app.4006eaca.js",
    "revision": "8c10622902c566436a627444c3e49d6d"
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
    "revision": "69bc943da6dda48c0fac5bbb413d3a97"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b5629cc5c8821a4cac98096a0cd702aa"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "41fbb7fb37f8d44d3878e71770336ce3"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5f0c32c19f4041b59a872d91f5a917cb"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "72753b06fe329584dba4d17c0e9508e2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3ff7b4fcd11340cfa8bfea4ffdd1d1d0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4df9aa4dfffecd5b7d5be0eadeabf705"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6bd0eb1f64f1652405acd8623ccf0557"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "114ac1c8bda2ec2a2a5a05286d2a4452"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "cd8f022586ce37ef8dfe174018d4daa9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3c4ef14f08f3924b5301ffbc4e1f7a81"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "acf57896ef327197bb9dad0edf497ec6"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "4613d08b462376f6a77459a6765a83be"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8102ead2f10cdfe39607105c2e94129a"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "22bdaa4fcfe7cfc0836de2762f662738"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "5f77da51409c2f733bddf68388ae2677"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "5c0b93f1ce5ce1caa230df4525278a09"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "e9746098b73ca4e218c0aa54a1334ec2"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "92f1eb775f9566b223fbcdf280c2091c"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ce9545d66524dbee2370884a3fb50442"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "cb74e583a2f6b9d83187a3e2540d599c"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "07f3b7af668201e25a606bf69afdc10a"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "88678263f297520f2612d2a05405848b"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "1d9ec1b317f3ea6fdb79b784826f6c16"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "da286e2627856a8f77782fa2f6485582"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "86d9f2cf05e5935fb60b577cfb11a8e9"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "ccb1a28320ce1c78a9103015c10afbc6"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "4d1744d324b3bc114366ec854506dff1"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "a8944728790e2b27068674c3913b4049"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "ddbf9d5b5010a199e4fe11a2280c181a"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "68d863d15563b1e498552624de20508c"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "093ee10efa5af70a7bded09df8e4c6be"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a83c81f6c22eeaea85f56d400335f2e6"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "05bb85c7bef051c503b58cdc26a2102b"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "2411d360239d4bd2f248601eab3b21d1"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "69be118c0652f1ced1b0f34961602c9f"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "973000c04942ef76b7081a41f0fd04a8"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "a43029ff3adf14dd71d5c8cae3242ddb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "49377e126982d65f7e6f9e93ed94ca16"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3e860fbc8a8c9befce5ef5366466c677"
  },
  {
    "url": "book/index.html",
    "revision": "4a59e0e3eb4fac6b090ada6521791d11"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "73b638f59d41d12b16459f95af4ac09b"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "c1c3645b551645c7762c9c31edd82541"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "34763c185f9ec4ec3216291a29be4499"
  },
  {
    "url": "c/audio/index.html",
    "revision": "40fc873b965cd217e472fdd3ef6e3f57"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "0de5be58a26bcb26e863a4c4b5287c12"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "c58b5be7ee20c8342102b45bfbdf7b30"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "571d03399c88ef6fcf3dd353e510e9c6"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "3a6777916c51afd82425bd1c28996bc0"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "bad2d28a2e5f277565244b3cddbdec1e"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "aa55741449bca729e75d231e46a3e01c"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "e46e2a2dee0fb0e7860cd9770459aae5"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "ab564672bf0b6d61936d8be8911c47c0"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "0c9345e0aa90e8172784494a8ddcab0a"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "c36e98701f5a918a1016c54bcfb08abd"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "54f334e8c0f9c26455cd8daa9a3d6bff"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "acf17607994385f0d42e10248615549e"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "edd91a6c95b24ae303fa0bbd5a267c93"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "444e1c09051fedc8f0aff8d5115c7c53"
  },
  {
    "url": "c/program/index.html",
    "revision": "82ff2c5e23a0865ba24040a2944659df"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "70e14ec37877d8dfb8332e36772b8f36"
  },
  {
    "url": "categories/index.html",
    "revision": "d68807d5a934d8ec5cd07bc4c1ed28d1"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "6b6f46cac4347f4e74f721836c6068d5"
  },
  {
    "url": "figma/index.html",
    "revision": "89c9463708c8e65c47406f4873d64b12"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "65ede40b3ac3febaea368986cb489e9b"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "775bcfd4e97ef52f47cbd119b8b3a6f1"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "43c1098caeeba038dd8cf29e75fd89cc"
  },
  {
    "url": "flutter/index.html",
    "revision": "d968c346cc46a69efe5ece6f17836167"
  },
  {
    "url": "flutter/point.html",
    "revision": "74d47bd04a6cc7908bde08386a32c47b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c3912dcb9d22cbc4c5e9db768b5680b5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "be91c25e0ce2a1a7a2027693f7c05821"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "adcb01a0e5a37916f830e81290f73437"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ad7ed0d0f28baaf302e957287d69175b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0fa153e94afe4960914629a3c7c5a0b3"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ba1a14443af3d8d3e4c76260eb551d92"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "dd32cfd3f2600db39345a352ab5d57c2"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "8ebcd9ff46261bffe08613770c43deb3"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "58bedcb47a1d22a508eb924c4ac5cac7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "bf1134e4e3cdcfca3f3630c4a385427b"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "003be68d0fdf6056ce225d9d3cb51732"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1509203b8e3965ad097f5ea5fb95146e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "b07b3a47509748dd9775db3986fd1365"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0b41ff2875f190ccdce5a04a2392f127"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "767ff882ec7b08682b18e2c049db426c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "c7a303548c217bebcbb52547a5feab9a"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "5ccda2bb03d638e33a7d6e4070ebc1c7"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "9a48bb290f74ed4ba6aa0d0e28011074"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "3b288ce796ffdec92279241b9c91c914"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "436257007e3c4c66267069ff07c291b6"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "2d913c4febcdbbb271b44c9ff1348b86"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fe0b52e7d2ed2d784521e03861071a6c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "cd168a3925fc600bf3a187480cdff0f8"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d6e8895c2d942f85db65011322dcd8ce"
  },
  {
    "url": "haskell/index.html",
    "revision": "83679ec51b208848d7e50810d5d71d92"
  },
  {
    "url": "index.html",
    "revision": "74c6224833566d963144efb9767fa658"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d00f7da5d3252720a5b1ba233d16090a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "4338903f9f4f05cc713896d97ff33ed9"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "faa8c74121e0005a3512306c02fe12f2"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "82e1d70d90d6dd4e5318fa32af4ecbd0"
  },
  {
    "url": "python/index.html",
    "revision": "485bd59d4b9e20e9986ef583fb60fe34"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "5aa365ce09c29df61468ebda377c5f73"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2f91002e6b8858b492c233eca4e526b4"
  },
  {
    "url": "python/python-file.html",
    "revision": "5fce4ffec9d5c9e289a248341cae7f8a"
  },
  {
    "url": "python/python-function.html",
    "revision": "c136762d1e9d2e7154a5624236139627"
  },
  {
    "url": "python/python-generator.html",
    "revision": "2b2b9e618be21883fea0a3b1083c13d7"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "a24aba8b8842997c978e1fb453147198"
  },
  {
    "url": "python/python-module.html",
    "revision": "6fe651ad72d91aab5ccbc40cdded2df3"
  },
  {
    "url": "python/python-string.html",
    "revision": "ae9070863873e93836f5ec6ec453ce81"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ee4b904cb7ab0ecb0b34cb91bdad4985"
  },
  {
    "url": "read/index.html",
    "revision": "a3484984cbba163fed1b93405742751f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "738854668d1734fe2976372dc1f91cfb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "fa4a41381c29eb529fe98f10f2829ae4"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "a39a9c582fc0fec440b4bdf63cd3ac20"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "96e307d899f0d6e3e0bd4570246412eb"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "f2b8ee32f0b32a1ab5a73ff1bf222340"
  },
  {
    "url": "swift/better/di.html",
    "revision": "cf7fbef97b2d959eff06eab78adf3149"
  },
  {
    "url": "swift/better/index.html",
    "revision": "d265e26a913f35a5665041914d0f4aae"
  },
  {
    "url": "swift/better/last.html",
    "revision": "a27b4eab7c4f8fdc299a9ef4c8ea13e4"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "3225c437274dac096cf391222c943ebd"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "3470eabc09fbf3529b1329ddd7704a77"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "6403f790d728c2c6342f055c5beb408a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "6953e82ab7ab9a54dcae28669a6a3a10"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "865ec02a80633f965f00c112509c842b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "072439dc054568479b046998212e5e6b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "00f9bb257c203abfac61baa2f74c9d87"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "935c4f044155521722f42d5b32d49ce1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e411bad74f12c17e6338b4a04e1ebc59"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "06fb1caf36471894f0924fe36d775a8d"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "934bd7944b4e99e0e49e5b6cd7a3a268"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "6abcac93635bc8fd2dbfca1ca94592de"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "15e923198c6d01b06936fb76063779b9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "72f949b2f1e1f03a4c3d898209f52a2c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "5432ce78ef953207c5326363e084a332"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "921251a26e9523bf7090f762c244b3ef"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "69eb9f13d4f31cb335783b124f75f71e"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "fce1cf9179600f04dbc240cf6950a782"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "47f4f7d8d78fc3e0d494f2dbf20093c9"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f5437a1d9e0092091d09e13f9f4eb158"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "d9f02d1e073078e21701be04b40e672e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "324f8d4cbbcbbb3026eb24191abc798d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "61acffd602de5adc57abab51d71bfb6a"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "ceb9afa9c096c9fc65c4e96869a8a219"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "5e1ad78cb1ac21d2f2e8d1d41414ecc8"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "02f7b47555e5ce72493359d8165f5a3a"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "8b734d04bd90fc234ad5fabab679b2f7"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "dde56e4e06378f33fdd23cdb7a31610d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "88a18b0a81c8f1704253436c8e8d4707"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "2195a72a24a723f243af31a83fc40c97"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "16f4b61a539c4c508c8b4199d5b1f875"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "8d48b87d7dc1a010a0df5046b33fa3bf"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b98b3b1e189650e6044ccd7afd2b54bf"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "2c87e4a0a4f75e255ba5c8249d888c04"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "716ed649fc3a2b19083d4b3775469eb9"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a05eee93e2018339d883d07e980eecff"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "2966bf662d2387eba911cf41ecabd23a"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e6606058182dc3c0349215050745117b"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6798e029b161a581eee5f4d8600ef40e"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "c0b2c2fd3ba5bfb51a23c64dc5e15684"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "1d99f4acc981b437297f4ca02df26704"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "463934e94c71bf0a6236a61a80205c68"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "4580d78e7f231937fea572060b6f3576"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "49b402f5222192e9d0ca94a0cbc2c380"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "4ce7255ce0ed153c593bba4e0e21ebc1"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b4af1c5d1e6de701115cc3495a748323"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f4b12953717e08d742ac708cdbfab34d"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "e76c26f5d82cdd8290757cae9505d179"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "65bbb8440e66a96a5b7a558e8f74d086"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "6199ffda19cfaff3998046b0ae17c28d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "dd09b18450c97c650d9a6064067bfdd3"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "137da350bebdb55b6e57a59c9fb2c991"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d9b0020e9b5d13fbd06312fe181b2327"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "a51f64073e0095f351c7a2696576a747"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "158be078e5876d2ee2bce8f41cd8a54a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "8c616cb02216c7d168366783318f9bb2"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "5d92a9bdbc5a5c844f52a8141e37230b"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "1d6880108e77c6d2b6ca80bfef62a433"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6118478cb4534e3c2829e23a4358d2d7"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "601f2dddb63cf7279e24e5ce9d9b80fc"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7e7d21e70b7358222f3dcd7ac5df727e"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "96d3c400a2faaafb571e49a2c3ffa3fa"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "ed1882bf3475eff65737fb978655fac7"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "2759f8fdf0c00baeff17758e2d17ca07"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "edeb916bfc81ea6751c935a543242c34"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "88c8634b7ab73f8489da7b975214c9d1"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "97bdb1c486329d3c4f271ad0691b298b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f302baca8cce8a3816f242a79ac1e786"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "47b76aae658052cb18f90d6ae59091a4"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "dca430505a2be3d98da293af90e80519"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "9596ca6da499aca0929ec3de99984be7"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "622e1d38759b4427f216fcbcd14490d9"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "028fb1ab6232485404a1d32f871fe749"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "1ba96193dc9ed45a7a8c6d2431224e67"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "7bae3adf9d20dfbc83e888d2f52ee0c7"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "d8587cb4edc5b409f9f7b10808a27146"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "3cb43947312e1f4ad8fc933586606052"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "d959eb6d84ffb4281318026a770389d9"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "6d0d25f60ce38856b901cc05af1172da"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "98d689dc6bf34122579601bfa4f4d418"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "b54116e7498455383681102a9876ecaa"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "3e4583c1403091e3b13f90917643b72c"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "881e310b515aeb099f1fda8117652b28"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "f1df864e1c56705c40faf633571c6741"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "48282470cf7e5cb9da0158d683ecaf4e"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "03ae84d1c0160671ae67be722a320a6c"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "698a9b1a2628b2186058fe617a3f244a"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "7b966b92331957ea11a772ab8f94886e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "3c0200aacb2db7fad22e55eda0f1c46f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "eedec909d48e731d544602192620ad0a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d785f2d0cc6047c8d32cbd915c137bee"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "bdec27da37dc5123d654c932e4f4a396"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ccf6fe10c6cd19f2b5068433ea8d8280"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e235517fca96a25d30be6fef5c98f0f0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "779ad47a5248676b6d36ae934b0aff25"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "580d64b97f507e155ec8452a39c4d257"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "159f21b2fe42086d29bd7c13ae114afa"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "d7645ba396df8b8783161954c8892476"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d872c6e341f198d1e4d3381b621ba3e4"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "53691e02c626fadacedd4e6f0bdf986a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b4594070cba69fabb68dc74b3bb55566"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "eb3474c761b7e06440234350697a63d4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "10c0209ce98f2a389dc39d5f85b3d495"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "91364f15dd6f3990265c3c28489b9217"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "3dbb871fdfc88ec50bff3d860f38a319"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c01c66061b90c3b93e904f2ab6d3a65a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "5bce2c573b0e73b3d421e5971bfdfabc"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "3b317bd7534c3edbcf417f462ca2ad56"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "43db2f8a7cefd1dd83b9513024c3271c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "6a11b1c035b266d755b1a9f8f7c91b07"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d3bee985d294d525154994e54a1e915c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a020bfe06bee8c47255234a39d71a0bf"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "2e37dc44ad610ae7f344472cd6fb3bcd"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "b20b16cb845b372c0228e473d96a20c5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0fcaf7753887eb1feb72a514d09ed18b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "46b22116e8fa9915109a19528d169844"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "2c8bc89aa28299395a4a08287edab911"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0fd64163dc29e8f5defa776e5968d3fa"
  },
  {
    "url": "tag/index.html",
    "revision": "c1741e0c6846e3960ad0a4ae6dca4f7b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a35fd7eba33a6abac76a021b1bbf2370"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "6011b9f63bae9f72183f7939328159e1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "c3dcb6709a9135724d9e71bd542f52cf"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3145c5fb30e626d4610fc2c7411588c3"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "a987bbb471a7d04168daa85b43dcbd50"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "10ea020807e5e76627defabba4dd57ad"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a21f9b3f72da289a9d36977a96953029"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "1ce4a6e76d7ae856e038a89abdc7c4e5"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6ee8664af514582ce44572031f287689"
  },
  {
    "url": "tag/json/index.html",
    "revision": "bd9fb89570404496e1e55d3ab1c82769"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "fb84b194967b4a1176ee42d32d6b67f0"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "80fd472d5bbbc15e11df3a08f2b3a459"
  },
  {
    "url": "tag/python/index.html",
    "revision": "18a0721f3ca74ffb5854bab7b61e0a54"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "69e81e741556c9624599ddf97e7326d9"
  },
  {
    "url": "tag/read/index.html",
    "revision": "eab81978ffa86e90344dc27163a56503"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "97a9097d4f3598fe092876446fc4ab5c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cefc8d8343cc848b4ce8f381849f2e30"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "73fa9f1c9d727de056a13d73af0f7e9d"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "bf565f276a042ac577f7337f1a11b396"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "71c2c802d98b6937132924520165f21d"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "e0cf26e7438cd215b6837f0ce14bd016"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "b7d5465af066d67edd59a9b6ba37042a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b4149ba1d8bde76fffe5132d48777d48"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "10d8bc1c8e847fb3a7454c6f809c49f0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "5a0c3d76d95ec05d9aa5f67ebdfafeb6"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "7580eb05de04f7964296101845121f48"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7295911513a8a9fd76b422d93d487138"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "48d3e4888ae93a2b1e0cd66bbc17e123"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a9e67ba2c8dbfa8d06d869348ca1707c"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "fd8ef6e05b4555c05972fc498f5c19ca"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "e79c998d48f6c5cd170680b81bbcfc30"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "62dff23f2444fdc115c5451d0ec7f875"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9a06ceb848e169d11b1e0d0468cdc82c"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "96acfb717c68e92b5ab2c39c953ddd60"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "9601a6b09fa85d8d4ff2a081f60b969c"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "67b55960f6eab9f3f0370f1a6c3771a6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "3ea8bd1de34455d653833b977bf945bf"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "abdfee08257ae7a12f1eef75a7022e9c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a3c2ed18cbb15c121ca9ec9af4d75bb2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d1176f155ece4ca7e2febdbf70978a89"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "45d9ad1b1fe129af5c0812748e5f2f31"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8fb1011973f367f2d4c42b5f2c5aeb76"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "513b6324d129c5292ed4f0df69fdd430"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "276e9c145fed255fcc785ac364bf6306"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "50a5761a008d7899afca7e848716ea96"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "513de26069ee402ae865b860e20b1359"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "32d2d29a2c37ee6ecd80503d73222666"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "000175c0a554e82b28ee187f2e17bd4b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "289f8f83531a85612617a754ebcd54ad"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c3a86814188667722d43561128fdc061"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a33a3bdcee67b77c574993effcba7eb5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5a959d259cbfdcd862a4cac9356a49f4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "cf9ac553091bd6014dd8d73fb91711d4"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "69fe540f0cd4d30c3231f51749996d74"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "9757de31769c27b8bf033e1b14719941"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "11a616eaee0853f445ffc133d1eaa154"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "efa17a785a09bea212ef3d25f6660b13"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "985f71ecbe9d9d2adda9485a51484308"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a5b1506562596e5797a35d46310bff64"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "cdcf77e2d62865e530971125ccb310ac"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "fa4f7d65697d6975ad771b5dfaf5ced6"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "ecf2b108ae89f790e8d39d3e8c5d3fa3"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c4dc03a318ecb5900734218567fc8c6d"
  },
  {
    "url": "timeline/index.html",
    "revision": "296b248a0c74aec7b520dcd80e872412"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "73307d14c524c419837491302b5d0a3e"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "0e313827040893be9bc2370e6f1d2dac"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "fd0c6df85afd1ab4a59c0e29b9986011"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8ed345f40d3f267138c3bb35b2de5191"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ede601ca89483d53f7bb71cf93509830"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c4a6f9d2315f168cfe8011ec207ff36a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4f5f48517e2f666e44a612879c68dad1"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "cf828ec57081e308eda1bca57c40099a"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "ec9c95e801e3d6f4173cb5a8a350ec65"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a28eb763803f4e508b7bff9e961193aa"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "26e7d108d3b6d4742fc8ac41b58ca4e2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "bf35747dbefa345cb173284ee6091857"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "515cdd00e981f448a6aafc8f0e89e012"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f03e1ad5e8985dd065d2fe85cab85e3c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2fe0afed6a0312e4a121385a3eab719c"
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
