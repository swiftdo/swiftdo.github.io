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
    "revision": "13089d477c775ef8d4f560f579318e35"
  },
  {
    "url": "about/app/index.html",
    "revision": "100cf4fe361881b699905476937d2b09"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e5c25ece012d991f6ce04801f0b8a5ae"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d8af60384b941885a22d0a6917c35c1a"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "40db4a6b461ac540fc40901fdd12ba66"
  },
  {
    "url": "about/index/index.html",
    "revision": "c1ec463d50b6e3290c8c203ffb18c35a"
  },
  {
    "url": "ai/index.html",
    "revision": "93dfd161cc8b9d2fda9d8247f9c7d976"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "e5d2e3e4a44778ec82fc18fd1178a91d"
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
    "url": "assets/js/10.c83db7c6.js",
    "revision": "0c82832eb328d691212f914da2fc80a6"
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
    "url": "assets/js/120.81b0145f.js",
    "revision": "6d7df00c99a5167b0a6e0d58ecd778ca"
  },
  {
    "url": "assets/js/121.72a5771e.js",
    "revision": "337aa09a743257cae3ad8f855beb6fb2"
  },
  {
    "url": "assets/js/122.a467700b.js",
    "revision": "7d3bbbee4dcc76faa447bceb44108520"
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
    "url": "assets/js/150.72288ca3.js",
    "revision": "164bc2a376dd8a7de4fd4cca01f69d18"
  },
  {
    "url": "assets/js/151.34f589d8.js",
    "revision": "2f3827cc56ce1ce3ba7523aecbf2135d"
  },
  {
    "url": "assets/js/152.8f95201f.js",
    "revision": "79c9c1dc44df21a081afd39ecd5aa728"
  },
  {
    "url": "assets/js/153.e8176a01.js",
    "revision": "ea08111574697a7e6cb7a70624319a49"
  },
  {
    "url": "assets/js/154.f8c143e4.js",
    "revision": "a78c1b5f9562f82ae31b806e0928967f"
  },
  {
    "url": "assets/js/155.308c6ffb.js",
    "revision": "5ff36c4a4671ada8bbe8d3ef7a8753d2"
  },
  {
    "url": "assets/js/156.424b6e4c.js",
    "revision": "d9f1df9b10ae4c91a6fedce98d045173"
  },
  {
    "url": "assets/js/157.37a8904f.js",
    "revision": "77f30941e9c5dc7710344f9701dfec23"
  },
  {
    "url": "assets/js/158.1e9ee486.js",
    "revision": "77ceb8aaa89dda1407cc2b0a804a2f9d"
  },
  {
    "url": "assets/js/159.dc20e144.js",
    "revision": "c0279eea803f368405be35eb2cfa3b23"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.a7112425.js",
    "revision": "bc452f46c9379deda9c597d0ad459035"
  },
  {
    "url": "assets/js/161.310ef498.js",
    "revision": "81fa6ea0e6c931f12cfde16ea12c517f"
  },
  {
    "url": "assets/js/162.3b21c328.js",
    "revision": "8bdb3b69188d628456f7666f2a43ab3a"
  },
  {
    "url": "assets/js/163.677ddf66.js",
    "revision": "ad182dd02fc2dba82601b992f0587f15"
  },
  {
    "url": "assets/js/164.d630f593.js",
    "revision": "7b5a66bd0eb33f05b8ef6d276fef6163"
  },
  {
    "url": "assets/js/165.ab7b8bf2.js",
    "revision": "2e90ebb3b19255fe31c1d142cb44cf5b"
  },
  {
    "url": "assets/js/166.5bce1e53.js",
    "revision": "b00b0809bdeb08e36e14b1583348b764"
  },
  {
    "url": "assets/js/167.b876ec36.js",
    "revision": "97f65b610ddf89960cec3c9ce7697307"
  },
  {
    "url": "assets/js/168.0ad0caf3.js",
    "revision": "e1c7dd99f8a4d4a8a02f4f458145076f"
  },
  {
    "url": "assets/js/169.0189049c.js",
    "revision": "8f75125287f176b8bfca44695d6d1123"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.8d4e8016.js",
    "revision": "477164dccdc8acf1df96eb94b1f3e198"
  },
  {
    "url": "assets/js/171.ef8f7f6d.js",
    "revision": "5fa1d2a2ccf74bc743f6dfc6d33f918a"
  },
  {
    "url": "assets/js/172.e11d78ba.js",
    "revision": "a20cbed314801cd30ada38f1e50489be"
  },
  {
    "url": "assets/js/173.e53b0ef2.js",
    "revision": "2cf6ade984755530d1f74cd327ac25c8"
  },
  {
    "url": "assets/js/174.09c71fb9.js",
    "revision": "cb92b9316e28c6703c3ce05332ebe4c4"
  },
  {
    "url": "assets/js/175.40c06762.js",
    "revision": "f8964b4459bf318ee45ca8d243fb6114"
  },
  {
    "url": "assets/js/176.01e4945d.js",
    "revision": "41b0920c122dab41a09b7c83c7beccc5"
  },
  {
    "url": "assets/js/177.c91ae350.js",
    "revision": "6cdd6afddc19ccbbb1d9b6d68b68353d"
  },
  {
    "url": "assets/js/178.a06df946.js",
    "revision": "be53a7edd9f6e3fa4ddc7c269abb9866"
  },
  {
    "url": "assets/js/179.cc55facd.js",
    "revision": "f3c2fbceb171cd62703d5dbc16a159fc"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.432b981c.js",
    "revision": "1774b7edbe4d2707cb3964dce12e19c7"
  },
  {
    "url": "assets/js/181.7da8784d.js",
    "revision": "8dbb4da77d3fb5c4a6d04acdc7d813c0"
  },
  {
    "url": "assets/js/182.b94c3f81.js",
    "revision": "ae8281d44d865775f991379374d24e7b"
  },
  {
    "url": "assets/js/183.e17f8efe.js",
    "revision": "85a607f6c6f6f7ca6ae6584c6a6b6af8"
  },
  {
    "url": "assets/js/184.d68ec6b1.js",
    "revision": "88b27399864e70e17fb12b3b8cc30651"
  },
  {
    "url": "assets/js/185.928545d8.js",
    "revision": "06e40347dec4b0545aa84a1c8086e23c"
  },
  {
    "url": "assets/js/186.c1321cb2.js",
    "revision": "597bc43bebe483ef9c8d26de6228de16"
  },
  {
    "url": "assets/js/187.6a43d544.js",
    "revision": "10c280defe0bfc520ede2dbc073e2f6f"
  },
  {
    "url": "assets/js/188.9b96b479.js",
    "revision": "c32c1b9210ba99b4a59b7f5a85b16afa"
  },
  {
    "url": "assets/js/189.5b41dbc4.js",
    "revision": "1efc2c2e0c0b837b0e3c861232bda78b"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.28a73837.js",
    "revision": "9abd6d620156c57d86e196f975aab123"
  },
  {
    "url": "assets/js/191.dfeedb3b.js",
    "revision": "c19c8eb83c036c0b835c012d3a7232c5"
  },
  {
    "url": "assets/js/192.327f4e5e.js",
    "revision": "2a05ad58f3af38dbafa0e44f0d0a2d94"
  },
  {
    "url": "assets/js/193.540dfefc.js",
    "revision": "0bf10fb9261a5009fbcaa33b409e6e93"
  },
  {
    "url": "assets/js/194.e70c4d0d.js",
    "revision": "ae889db443f5d00aa682bc4b70e6c846"
  },
  {
    "url": "assets/js/195.3f0eeb23.js",
    "revision": "3aa56940f81aaa7844fa1c82d8097f79"
  },
  {
    "url": "assets/js/196.f547f733.js",
    "revision": "f4bd23738283f85a4ad65a46edbcc5a8"
  },
  {
    "url": "assets/js/197.acac14d1.js",
    "revision": "bd550c0018d44bb777ecdbaf1add4c9d"
  },
  {
    "url": "assets/js/198.c83f8f38.js",
    "revision": "9b25dc7a1d8077542ce60a17977be2a5"
  },
  {
    "url": "assets/js/199.761230f6.js",
    "revision": "b0ff6156785c2cdcb88cef66956993c2"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.5df0f1b3.js",
    "revision": "3d50cbcb01982a730946c3704c6dcb9f"
  },
  {
    "url": "assets/js/201.c8dcc3da.js",
    "revision": "78f5fcc822cc06050aa3866ee3b81f5d"
  },
  {
    "url": "assets/js/202.6a13ca6b.js",
    "revision": "61153cd46b189e5706e7e803045b9599"
  },
  {
    "url": "assets/js/203.6575f0ad.js",
    "revision": "31d4b09eeb7b20c45305d3b2b6fdf07a"
  },
  {
    "url": "assets/js/204.b734e12e.js",
    "revision": "c4a32940fcef91be9b5b7af354664109"
  },
  {
    "url": "assets/js/205.08bec452.js",
    "revision": "3a66a945a74c8f399105bdd09a8fa0fe"
  },
  {
    "url": "assets/js/206.cb61e325.js",
    "revision": "3fb67593b4278ec890ee543c21b34111"
  },
  {
    "url": "assets/js/207.a849b178.js",
    "revision": "0f38429dc08f9daed3bb364f955acc68"
  },
  {
    "url": "assets/js/208.213417f1.js",
    "revision": "615794bf6bfac94a8f3dd85c8bf0dcd5"
  },
  {
    "url": "assets/js/209.d66d8b54.js",
    "revision": "434595b569906febc9734266b2c3f454"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.81934477.js",
    "revision": "f01ade02b1073c986866d36fc7181a86"
  },
  {
    "url": "assets/js/211.342c002a.js",
    "revision": "74380533b6de0ef6d929030a4771d360"
  },
  {
    "url": "assets/js/212.2557adff.js",
    "revision": "1e23606cc097a64a560c224c87e939c5"
  },
  {
    "url": "assets/js/213.fe130d18.js",
    "revision": "3fa894ae11c8eb2d7eba2243685b8291"
  },
  {
    "url": "assets/js/214.1210712e.js",
    "revision": "dcbc80665bb9bb7f400eaa1bbad18178"
  },
  {
    "url": "assets/js/215.1dfd74dd.js",
    "revision": "cbc9be4764a73c59cb9f9c14c1553a9c"
  },
  {
    "url": "assets/js/216.4f6b8b6c.js",
    "revision": "03fd549e61fb1cd42516a8d0170f15c0"
  },
  {
    "url": "assets/js/217.17d3a582.js",
    "revision": "bd0a490a23628fbbba3be42ae90de96c"
  },
  {
    "url": "assets/js/218.ce2d6cad.js",
    "revision": "7c65356fc14df5a5dc92e864bf903076"
  },
  {
    "url": "assets/js/219.7dbe5eab.js",
    "revision": "978591df7527fc6a25dbbb3c2bd177d5"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.df1723e5.js",
    "revision": "f41ee67b20d21e70be49a5d66ab05252"
  },
  {
    "url": "assets/js/221.d17f369d.js",
    "revision": "57f9ccc42b623dd85ae7876aca5a9589"
  },
  {
    "url": "assets/js/222.06ffdeb2.js",
    "revision": "9942df6c5617537123a600ae14138563"
  },
  {
    "url": "assets/js/223.bec305b4.js",
    "revision": "eac06c24fc10d33c33009e8c55ff8906"
  },
  {
    "url": "assets/js/224.d20a831d.js",
    "revision": "f829d9d5a35c9c6ba9d99a39347b1769"
  },
  {
    "url": "assets/js/225.77b64c72.js",
    "revision": "5d1e706767200b7b1036d15b7146743a"
  },
  {
    "url": "assets/js/226.97098f0d.js",
    "revision": "ed001fbc7636123df573c892368b3c2f"
  },
  {
    "url": "assets/js/227.481d3f8d.js",
    "revision": "476207a3fe829f0b2ba257e1a3419956"
  },
  {
    "url": "assets/js/228.97484859.js",
    "revision": "032859e9135c4841e72cccff701d4c18"
  },
  {
    "url": "assets/js/229.11208e0a.js",
    "revision": "2297291e017b2c5075301d9ea73012ff"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.09aac026.js",
    "revision": "c824e3c85e059bac6ab5c88c23512a60"
  },
  {
    "url": "assets/js/231.216e6a33.js",
    "revision": "7d845dbcc1d244a87da48ef7969ff387"
  },
  {
    "url": "assets/js/232.c1292da7.js",
    "revision": "924572ab496939099c1ef6aed9d86e49"
  },
  {
    "url": "assets/js/233.4eceb993.js",
    "revision": "d60f17de057ee8bf585efac939374e97"
  },
  {
    "url": "assets/js/234.e8039ece.js",
    "revision": "83b76eff1c072ef11be1f57e1b7b077f"
  },
  {
    "url": "assets/js/235.67fccb91.js",
    "revision": "c20f0ebc81073879fed3480ff74c85b0"
  },
  {
    "url": "assets/js/236.3bbbccf6.js",
    "revision": "5867788e440f7224a670bdfb8ff9b4c3"
  },
  {
    "url": "assets/js/237.3ea32dd5.js",
    "revision": "6df99f51b466fbea6bfc65aa0d420a51"
  },
  {
    "url": "assets/js/238.b7eb8381.js",
    "revision": "4a25b0fc1b9260f5288b42eaec2d4927"
  },
  {
    "url": "assets/js/239.eaa0e634.js",
    "revision": "6ca422911dfa4c3d1cf5f74c262e5d6a"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.540ebe2e.js",
    "revision": "ca2851e1dc6b575d46638edc975cffa4"
  },
  {
    "url": "assets/js/241.3197c519.js",
    "revision": "52a35f258750638c324e82832e4a49c2"
  },
  {
    "url": "assets/js/242.63247367.js",
    "revision": "152c1eeae4849ff88312d77e9691bb2c"
  },
  {
    "url": "assets/js/243.c9eb6c3f.js",
    "revision": "7637ed38f9f54bd313c8048fa9321fb8"
  },
  {
    "url": "assets/js/244.65c01e46.js",
    "revision": "b67c09b20735349b9e58555077fa3e4a"
  },
  {
    "url": "assets/js/245.2766d984.js",
    "revision": "01b2aa1e8a6f75a5b67e16755aba3387"
  },
  {
    "url": "assets/js/246.49f9ff62.js",
    "revision": "edfda232d3271b2cd5a4afcfaec6ed17"
  },
  {
    "url": "assets/js/247.728f0ec7.js",
    "revision": "2b2720dafc016e68afd1283cd1797dff"
  },
  {
    "url": "assets/js/248.f060cd59.js",
    "revision": "3d564b1e0abe9c797d2161ff60b2d96a"
  },
  {
    "url": "assets/js/249.2459656c.js",
    "revision": "5e830187b31560829c461479f39528b3"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.d0dbbc14.js",
    "revision": "48f3af7850219e5b27f432d1d61fa2f1"
  },
  {
    "url": "assets/js/251.86e08bab.js",
    "revision": "80ea2ee09039c2d51bfd6e382984a414"
  },
  {
    "url": "assets/js/252.83136241.js",
    "revision": "25aa06a8c343affe6ac120abd069779b"
  },
  {
    "url": "assets/js/253.a10e22b9.js",
    "revision": "e096cb811453ad0ebce1682a94d2c621"
  },
  {
    "url": "assets/js/254.bea426d0.js",
    "revision": "4c3e343c4509e5bf6374890695f8d83f"
  },
  {
    "url": "assets/js/255.133b5057.js",
    "revision": "105825a4de6ecd164d77b4aefcc15cca"
  },
  {
    "url": "assets/js/256.2b549222.js",
    "revision": "797ce55e92f5631c8bf79ee5144c5101"
  },
  {
    "url": "assets/js/257.31be6500.js",
    "revision": "01a0750d342765d54b9cdcb176212d70"
  },
  {
    "url": "assets/js/258.d9d80104.js",
    "revision": "943ca64e1e2fc765dcd7f50974eeaa8b"
  },
  {
    "url": "assets/js/259.e780260e.js",
    "revision": "b256f9c08b68113cbdfdd751aa7598d4"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/260.8746f920.js",
    "revision": "89839ec66e2da15637ccc9c71b26959c"
  },
  {
    "url": "assets/js/261.2705c1e6.js",
    "revision": "279882bb42ffd7c6a5517addb92cbeea"
  },
  {
    "url": "assets/js/262.c3d02a65.js",
    "revision": "1b8d7e25076af562cc1e6ae035851950"
  },
  {
    "url": "assets/js/263.185735bc.js",
    "revision": "4a4f571d5f5badbdd007f122ac9a50b1"
  },
  {
    "url": "assets/js/264.df9c7e28.js",
    "revision": "e06995435d77bb3e6a50ff3122ca9b2a"
  },
  {
    "url": "assets/js/265.608ac422.js",
    "revision": "829d45c7c95c758d2d0e42d8705fff33"
  },
  {
    "url": "assets/js/266.ef845b14.js",
    "revision": "38a5234335746d4911b8baabf26b141c"
  },
  {
    "url": "assets/js/267.ada2307c.js",
    "revision": "67efd7ab09a8841ec0744819d72998fd"
  },
  {
    "url": "assets/js/268.fbef6e47.js",
    "revision": "47673131c9381832d75096d2730f8ea0"
  },
  {
    "url": "assets/js/269.a82c5a6f.js",
    "revision": "91c9cb6f83bb0443ce365c597a25164a"
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
    "url": "assets/js/65.4b9e3601.js",
    "revision": "86dc7d471d478bf3116f759663b5da60"
  },
  {
    "url": "assets/js/66.34826071.js",
    "revision": "63c91dfb28ddf695b31358e445f69c56"
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
    "url": "assets/js/app.b3278430.js",
    "revision": "54bf7f36c9c6c4780d02c98e2caae671"
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
    "revision": "8e550a2cb0ea4905866b84f4493c1082"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ad5a95b89343f989fa4281a39ef4c404"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5dc049d984a1452f4d7542f8d50c1745"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "503cbe8516f06cfac41b1627714fcbef"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f41035c5c21e51b1a17515b2181217ff"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "396b75f5b1f6ea3ac672f796b841a1ec"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "20d012d532da8fb0dbe880ee374f84c7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "78a6c5a068d9573c74743effd9287791"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ab73e3e555c71b5d3df319e9fa774dbd"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6bf92031663ec5db183d235b321107f3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "62a6f00b1b5c2d099243736bb660f933"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "fe0253a077fecf31bed8346617da3be6"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "f9d684848e8a0256a6f09203473778c2"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "5a8fa677b6082ef3f2ede88b8268c879"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "c3435f903e370783495916bc71f05bd7"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "e3555a026ec66f5b52a457f9ff7180be"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "22d3d4bb42b266156e9e60039daedc30"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "6548edef30a8286df39730362482b678"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6ac220b596b7278e640baaab0ae3790f"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "a787b8394cc51c062031d26b62421420"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "28fbc95b7d26121cfabcc1ad5b59acc9"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "49245d4e857227054ccfdd9b4cce1422"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "106fd789bcfbada865accbbfd31ab3b4"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "09fab851a6701aa4547df64c449fef6d"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "4b3e0a9d0adff2a01dc834293ab3e1f0"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "0b4a1d1e2e70a153723cfe42833fc87c"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "db5ef2827714742c147b8f3f33039c18"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "0ab91fe53f69e36258c166d5b4632fdb"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "6364389abe56dff0cee8306e2f6e05f5"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "9cc0a45681e3df6ab36ba83a583dd56d"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "60786d8ffc7cf1fadd840b16613871b7"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "f479de7b9247d47d50c5a367297b8b05"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "3c4d7eb3bc5a2792309b3fd2f3662f15"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "30079aaa08802d68a8c31ccfcbaae7df"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "6da81f56081234acb38c4493918a74ef"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "af73c72c9b101ffef9ebec0d738e30f6"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "aaad33ba2a2a4d45e2c420292fe5c8b8"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "2446db11650160183b98ff65f681552e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "60de4ad45a80b81113f270f73c5217ff"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ce07dfd2a7c3b215044c7450f65b005c"
  },
  {
    "url": "book/index.html",
    "revision": "13004473c3158c307e30569b2bc8499d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2ed636817ae976c3e96f2abd55108229"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "5166eaaed5e49130b2c2533ba0088cfc"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "727128350f6ea9bf9f61434bd86e7745"
  },
  {
    "url": "c/audio/index.html",
    "revision": "8ab2a67157e491a053027324211dbe4b"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "607bdeee0f07272086033420e4c7e4b9"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "4ca0b652f04b6a554280b48b5b88d4bf"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "f1fac8797fcaf0d75ec7f9e216462367"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e7f5d6c18c5b32ac4bfd3a63a5893646"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b41276c98cdf6feac06f248231d5a7ad"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "c3a8102b812889e0e83dba688e39939e"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "4ff8772fa6343610759f2eb659ea96e3"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "c3b13de3821ac5aeaa8cde9c45558bf9"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "e9f1340ea408651d6650cd2b82e33eda"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "ab4a8af8406f8ecd0119fdd0688156cd"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "260925b6a656a2ef33cd68701abca13c"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "f801c9f028c595b4f579bb15bbb16902"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8dcf8f53041fb11e10aa53137f084ead"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "fe3b8a17833734d31b5ef17d53b08d8c"
  },
  {
    "url": "c/program/index.html",
    "revision": "4fb9990eabf26a95114802ee24098179"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "7304918588aceb8a6eb451bfbb37f936"
  },
  {
    "url": "categories/index.html",
    "revision": "95059c9e390aaa77e8f824da9c93c677"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "dad8f689d61c535a990e3e4b6b6d6606"
  },
  {
    "url": "figma/index.html",
    "revision": "fed56304f2236bec9ef8f1941bedbc47"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "c92d3a291b8ceedd7fd3a95c0b665147"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "8864a25626a7cc1cf55c0f525b236a8d"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a22afeea67b1190f597fc1ef818af2a9"
  },
  {
    "url": "flutter/index.html",
    "revision": "f804dc917ee4d4e0bd9f0e43e848ab9e"
  },
  {
    "url": "flutter/point.html",
    "revision": "1f52667217062521f95421b515522d41"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a24fb7dcd58fbcd8037d4df99b979313"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1a25a353abef6f9f90cc6c5e1bd5c6c2"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "02681f5573ffbbdaf693ec83042d8247"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fed09c5fdc69cb75bcc6147afea48199"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "1fe09912c6c9dbf0cc93a0b259e2330d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c84181aed5f673783b5ce8b8f51594da"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "42292a6799ddc73ebc2fd337ce519608"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "74946e8fa09a106fb89177d6ce46bb72"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "339a3ac8dd25a64ee05d8e672f32418b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f7373fed0a7661807467d90588c42996"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "04ea4ae55b9cb53c74634b0267c750a7"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "2eed0112d5d4959c4e428c6993c6ea91"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0d387b26331500da983ee208504ad632"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "77e7177746d814d7e00cdc31beb46911"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "fc712effbcf83712dcfbe5831b2a39c3"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "2d93e5a7f7c79fabf02f868470339a41"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "57b3da7f9cade019c7376112a2c0648f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "768e54ee41ff9e2bcbe3497e65eec7c6"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "b55ababb2c69000e76124c2b2602b03d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "637fe3cdb022489ff9704e85ef06a561"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "11df1965f58a38f35a0381126a517cf7"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "cf7514f90a1dcb3c87f3d63f6b53032c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "43663a41dd2dc0d0f3c71a20979193eb"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7742b60f6344cace980531a6ddcc3ff8"
  },
  {
    "url": "haskell/index.html",
    "revision": "ec6006e837a145f882335d69dd313343"
  },
  {
    "url": "index.html",
    "revision": "1eb5e4c81395286350456e04511bbe1c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "45ae2f874f163835921e580b74610a10"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c75f5904c45077390232737ce5d1bb41"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "74e94d830cf2a400e584919d6d87631c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "37842b1f57fb84ba2b3f3e57e2f3b5be"
  },
  {
    "url": "python/index.html",
    "revision": "f6af8a9aee9b0df2a65d44e711daf006"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "fd5d7be4f100c54bfc765a22becfb338"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "4e1320872e57c40621b3cf2e009c6a11"
  },
  {
    "url": "python/python-file.html",
    "revision": "41c8a4a82c7ad4375f1792509235ae82"
  },
  {
    "url": "python/python-function.html",
    "revision": "416e8de24e7fedef70c419b243cc5dff"
  },
  {
    "url": "python/python-generator.html",
    "revision": "79f502ba3ae33082f16981c24576bb25"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "ed1c9a10d6d86f0aa37afca77533ebbe"
  },
  {
    "url": "python/python-module.html",
    "revision": "a13bfa8143c668c268c6089b5ea80bea"
  },
  {
    "url": "python/python-string.html",
    "revision": "477c03ea9582e615220f428c3759d771"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "d8d3da5056f6fecd30480d92dedf1449"
  },
  {
    "url": "read/index.html",
    "revision": "13f6c87a0d8d43ecbf2a0c34ec247e5e"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c92817b0d7bbb503c8ceea6b8dc93b88"
  },
  {
    "url": "swift/better/available.html",
    "revision": "81225e79e5a499a131dbccda204e9c9c"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "f91837fd486711533164516993a3d720"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "565b94eb5217cd2d75a21c9f3b8b2967"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "8613906e60dd69d212b1b6324cfe6f74"
  },
  {
    "url": "swift/better/di.html",
    "revision": "917108761b666bc059fa21e160baf97a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "4da469a15a768814f720ae5605573d76"
  },
  {
    "url": "swift/better/last.html",
    "revision": "a62cb23a33301b9e8f6982a76d01488c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1124c8ece65c6ea0c2e359ab9b7ac208"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6c03d0e5f3993fb167e306dbff0ddba0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c8d2eb4410a3e8ca44143b9c9c147f61"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4c801601d35eed11456bfab81d28574c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "1b18d5707498f0e29e5032eb0d53f339"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "1c04c148e5836ba1685526d39bb02d03"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a67a23e334d665b9888f5353df2c7ec1"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "bbf865206b02a2b673a66f3d8609e57e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "1cea7e474742ad6aaad71bc54b0cadaa"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "589f94d3c825747a64d15a97b24b1d74"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "0952f1d33d46f87ae4b4f5bd43fe8503"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "63d0dd3a3af511c5f574bb54e22e2860"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "69c21e875e36e077e2ac2ba854f42e7d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "72af5eec00c2bd0b448bfc0ad3b3e26e"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "9495e27a63b8beab50fd3825af9abcad"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "4b3975328ceacf5f89c08beb01d41a70"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "417a388c15c2f4d4c1eae24729fcf187"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "c6b91ded8b349111ef1a1d3a0bfea4ea"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "481898e1b7231928c575c66eda746551"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "adac45fd1d3c94a29df3b2a0e3b608df"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "df1ee45baaed5079e7924e543cc6ae15"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "6e6c1296ea5999a1f92ae7a339760dd6"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "8f49263b5269ecc6cc65fe3a8472a8e1"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "eb7d26a6d69151e8077c181d6f8189b9"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "49c4ce0faa80b3afb57cb1e542972c52"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "474d2abde8dd7d16a22cf80920f2cbb6"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8b11945098bc050d1147d83aae7a9918"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "cc71a3233613a9007f420d21bffcb233"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "133dd0de3ec8d4cc871c1834728950fd"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "e1b580e7f4acbcb9cc77dac44efd7e03"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "c4df74fc8040fe62cb8a765f0e477370"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "00d58aaebdd0a6d0dfa03d49caf1474f"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "2af7f99145f10f2ff33ea79a3eeab2e0"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "fa7f17ee05407f253b85302f4b78ffca"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "50b236915ff4e9d0842522a164289b1d"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "193addc67575b6e2a531fdb5357d9fc6"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "f4ee883380f47ddc69be61817b4e656f"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b8a022e9427ffadbd8a9f2a678d80c45"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "12e78eddd947bf61cd5ef3e361fad0dc"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "fcb29683543ba5eb87c8e26be4ba7516"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "e951f9decc19f008cc23b77c1b8ffd3e"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "e9d72aeb79a3646f0efce4903ea1c6fb"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "e7b261a6b331fa6d719b3980844a85ff"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "460265da33fec8c786f7dc12c15fa5ed"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b526bf2b7e0d40afad68bb7a29e60b07"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "28a6a65656b01e04a2e4d539731e0dd7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "ab1f840dcec670e0b564065078432158"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5b48733093198e4a0174669001cfa5b7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "88ac51724af78ddee5e0619eb17a5b59"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "6aa5d220934d4ec49b423a5788e7a3ae"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6c28330a614a973d75810321e99a4a66"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "68d2a2641e3e2e44c73159730e0bc687"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "15102509445c2483f94e2193747b6736"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "30f10f39f77cc8d15841bd57e0cd6932"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "51d19c6d34823e2cc9f14d122f85dc90"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "01abb93e05ad6e698b42d62f945f2491"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "1ad640b4f3aa340fecf00cfa976d1564"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1e210731948dbe6c47900be8867ef150"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "dae1d11a6d15346f3f91b4dfc141c6c0"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "6cb850f8ac53f227f25dff743a02d802"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "4fa52dcb6ad46880bc72d1a1c2758601"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f7eef9d1d7452186d3325134252bfdf1"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "475160a2895ed2d340dd7c024c775ac4"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f56842755a14146217d1d26628296d1b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "b30dc0526d2fe2af8c0dc51beaf6d648"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "c01d544aeec7cb080cbad145cea1bf9d"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "a2f96fa585c6c67042f4c56f129fc54a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "5820d0e3ec9a645869815dfd80f529d7"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "688f06149261adfe6158fec94ea081bd"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "e267069dabfa698b01b76e5cc015411d"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "d11d04753a87dd09f4f96d8bc472f982"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "30271e6d9984d01bf88f91708ed12de0"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "555850214cd7d3a364720381f6955f6f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "1d85032978c3ecd6f7966218298838dc"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "e005f076a5c764112ffc547b6643a766"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6efd4f81736fde8b7bd2430a0ed30f5f"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "ced8f23149584c8dfa5c2c8b96d14177"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "d09e13f035b4514134f11eef83df54a6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "84728340a0c6c10b431cec1f66e9ca1f"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "178ecf0a905b92574d96acfb44726998"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "29637a2c68167fbd84a51199222913ad"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "9e71ecec80155e3549038b044c08278e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "9b5643af5426e1579950d2f533f59a07"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "8998d7f77e9ae13d0a7918a18752b873"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "be5c067455406597275272e484f06da2"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "fc7ae8afb3de4297923698a4eb040c0c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "c8e6cb56b4f669ec5247b98272b0f6ba"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "a54f7fe4388aeaa7aaddf4c3900e83c7"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "93dd3291583705b094e231dc1581f6ae"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "31ea7b9e7e48611dc9708e741ed0f403"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "001bc82de47adb6759481f6e18cb2d19"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0f7fac3d29acc9942f39e9fd5817187d"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "f261edfa65815a402c6c443a7309564b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "6779e2c2068b682d3ae9151eb69a6268"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "149a2ada0ab9f8baf665c5d939104850"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "45badad5ad312d7cfb39bcd7bb0b32af"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "ee6ad60e99c20e0fa5a8033ae966438d"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "8debb46789e24dcfdb36386ea705a005"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "4c1faa281a2264854971f99c48425789"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "a219e79e7800239bac56cfeca40f54d7"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "aa0e8908478de3d5d6d03b11d5e6b8e4"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9bb82e8e42599a1cbdc7ddcf1e0c4013"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a130ae34d53c24a807b0cd7a49c30d8f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "cf4dcdf66ca3450eab834361223ef69a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "250b65287ba2f2970fae31701c4f649a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "4cf5ba6371f80f7f72496370f295b6dc"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b6c8191d89a31c87dd70a47b7a935472"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "9e6fb0bbce737aeb71d4fcee9155cd81"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "4ff6556190900bb15c8cdc940ca7449c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "d5dc0e773ee0e115e43b8a8882c790ad"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "be34407ef62bf793811aa6b57acd1bb5"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "20cc75e0cb1bd37e52fa8fd866db4999"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d416ddc97e32b0f5f34453866100e629"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "88ef1ecf62a6f75e07a9d7a2d911b795"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0a899366d14a736adde2982c7839ff42"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a68428438e205f0ab114f1b9d6ef8261"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e8214640119603b817dc06ee23431217"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "a79798c1aa3e96d4fa9e6d5762bc4079"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a7be8f6dc1da9770fba62879688f9e31"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "0cab6f5cedb53d5b78c12f5c422f23b2"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a7bbe3083b3d21a2f7f297f1fd94a458"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2ac821cd34503c9939ce582d1fc21428"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "9aca11ad9f389fda54b960b2c2136bc1"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ee19b9d019cefe18123642cf987c73ac"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b884dc5ac8529c948aa7a338d0836cde"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "829c5b758c38b8ece79a7635e41768d6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "905345e687d05e39937bc31719f552f9"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6466edc8d29153fbf3e48e72db1ca309"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a1b4fe76514192474b53083b36ccaea8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fdfb67575e63fcc23ab97422612b0994"
  },
  {
    "url": "tag/index.html",
    "revision": "924a551843d2ed74bbe000bb6911f19e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "c8925f391ef309277ff8a9907fe30bb0"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c5d9d2ea37c7b7754905f37543857f43"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "5f9bafe6f2994bc138ccdc467dd6fdd3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9b383dc1df19b3fbfebe411aa2e6ff9d"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "7dbb0d8cb1c193091972a4bf799fa72e"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "8064dd91f0679553b0f9c6a2ec95d418"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b2b8c54fbd581d356aa41f904e2690b5"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "e0662cd0b12c1ae68f02d961e019a544"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "031afb63f72e7565019d39014df04c34"
  },
  {
    "url": "tag/json/index.html",
    "revision": "02489b36e7844326418275a1e86cb2ef"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "b0f2af276216cc1125bd516e4e0c5586"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "adbe858419e69350e584b3f300f9f865"
  },
  {
    "url": "tag/python/index.html",
    "revision": "416b4bce4461f97b7ba309739164cc9c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "d6deac8740261b75d64108733fcb3194"
  },
  {
    "url": "tag/read/index.html",
    "revision": "fde4173cfba213fb55087ba200af370e"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "5d709620fe410b2655aa6cae4d2fe57b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4ddebedccd209e577bb1e7add019b861"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "64a23bd7ba2f3f299bf79991cac89bc8"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "2652392bddc3bc2c68e6cd7f70d4ea52"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "054b95078375e72e6bfbc9d3ce02b92a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "b6a6a72511816a804f9096feb81869fb"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "0f57fbf6af6e11c8db2f31135c419b1d"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "4c9911a7324a56b66741ac582699ddf0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4060e84ae43c8b7f89a81258510c48e3"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3240c6c165790531bdd46c4f0d57d9f2"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6e7db463af4a113ec51acddd23d5716f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3414d0360a4c9f980f70892ab489e6da"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "8ebf6ece48ce82b73dd235a9e41dfd23"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "d11303729e6f0f0f6f081e8133dea45e"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6ae28cc72691c3666ab9e0651136848d"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "4105c015c4a8566e4d7aa527d224f83e"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "be244c1f4795d8e190de9b971335195f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "a2b2d9b07cad0cbfb55b0b3989a5d92e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4603bf411540a4adb4e51fe4774895f7"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "327c0005bc60558baa84c5a0a4d2b63f"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "6c3b8003e2b2703f95eb9f7849e6c583"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "9fa6c79bf60dd67e3752cfab9af9afe0"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "928439292cdd4940f0e581ea6784943b"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "59ce264df207968783577c0d07eb50b4"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "0ad6662af4bb41fe719d7b842897d903"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5ed2f78261da2181a26ce2a0337fcdee"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3def0f99905cbdef13febf630673ca70"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "01fab5d575acb4888052afe0d0978ad5"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "c970059a3f8b84ce067e1f762fa5e9b3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c177d56d5ce35e4466e37a153c3eecd5"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9bc8950b7773f5e039ad7e6a0ffa72c0"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "8ff74e9f0b000cca06f807253ce3ec97"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "17851c15c73df2f503062b40a7fa675b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4ba1a394f6653b915253acdc6e0a211f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "708629313c8402ac357290205c54eb84"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "7d89062df3195a91d3c1c7be899f4459"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "27038aded39195429f78151ad09b734a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1737a76ba5ff505a74f1ba02b73150d6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7e9395c140bcc660a274d3d274b1648e"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "70d38b779f5cd6d26b32e4f996435f05"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ba38dcf3ca71d44941b741fd08350ae4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c156f39cbb22cdb99c72a0618604553b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a96fa00ce89bffd69463123ec9dd6276"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "5a96b27e16c871394c0c25b4de8be837"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "7a6f7c64b2b865b6502cb50dcb3802df"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5cd73cbe530ffdc2262049dc1d519c1f"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "e357969d4808bf5045067d6f4a614029"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "1a2e77340e44e62ad05dbea521073e92"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "4b6421b9827c586f03d3f1359ccab051"
  },
  {
    "url": "timeline/index.html",
    "revision": "4956f44d4d48eceb6848f6dcc4df09e2"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "711bea67d1d1b21800aa051622aeb3f4"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "dd6a2f8e562fd5735ee408112e2236a3"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "4eaf18f481efa82b705634d772890277"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8c6b095a633fcd3f4cf5ae9a87eb2377"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3b355f23539a2662ac4edef335536e90"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "19a411ec847cbc012699612b05fccc33"
  },
  {
    "url": "tools/html/index.html",
    "revision": "02d69c6dde501328e7485e26e11b7e8a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1e54d4707a81cabe6287053a3f19adb1"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4befe96ee94e7a84710e159582817203"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "afc7ada58564d9d9295d4651b157665f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b8d134eee3480b597db8f0c4da1bc94d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "bcb048bf428530c3f9b46837480f893f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f45b194846f42e2273c525623b315363"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "872abcd12b78bbbd57966b5215b74a2e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "387c00d73223ba14da2337a231099cf0"
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
