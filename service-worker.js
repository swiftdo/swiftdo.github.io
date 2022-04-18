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
    "revision": "0c0d0dce1edc1ebd32c33828ad3d553b"
  },
  {
    "url": "about/app/index.html",
    "revision": "59d7c35938a084b1778e76e3d1d7040d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "a55d6eb2cc179c0d14a3f79cd9e5c189"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9a9bb2890d62392d926e9a0310a1fde0"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "4382dc29e42f155747cc57ec9be3c1c9"
  },
  {
    "url": "about/index/index.html",
    "revision": "52dbf92d06e552da75343156124be1e4"
  },
  {
    "url": "ai/index.html",
    "revision": "25500b6dc4ff71774b691ad399d81a99"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "2cc27f3426e876c96e47dd510518902f"
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
    "url": "assets/js/10.6b6fc47d.js",
    "revision": "f438e71cc3183c82620ea5878f53c979"
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
    "url": "assets/js/121.188827a0.js",
    "revision": "3ea9cd481569bd9722897b3dbd05ae60"
  },
  {
    "url": "assets/js/122.170fa68d.js",
    "revision": "a91e643c5c7886d30ec9fb2d4de5cc74"
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
    "url": "assets/js/146.2ebb2291.js",
    "revision": "101435d6e613fbe056260ba4a8309811"
  },
  {
    "url": "assets/js/147.bb991af2.js",
    "revision": "7bc3fc35b632b4bb4dc355653c2c3fc3"
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
    "url": "assets/js/151.8ec1b1fb.js",
    "revision": "ddde08f31917b6daa68660fd762f417a"
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
    "url": "assets/js/158.6d632ba8.js",
    "revision": "ed9e598628c4f0fc0707ce66032f110f"
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
    "url": "assets/js/184.bf920045.js",
    "revision": "79d37c884feb18b6cd8ed20f5a30b317"
  },
  {
    "url": "assets/js/185.0e4e1075.js",
    "revision": "64a40668bab1e86f508759933f8d9f88"
  },
  {
    "url": "assets/js/186.84a91298.js",
    "revision": "9623ade19d3f26ac34d10dc8598a6281"
  },
  {
    "url": "assets/js/187.8ce3371c.js",
    "revision": "8358a90ed866a2ef6ae5f6720d151c49"
  },
  {
    "url": "assets/js/188.1847ac96.js",
    "revision": "312895df6542366cc658cc47505a6f08"
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
    "url": "assets/js/204.de1456f4.js",
    "revision": "00976b27509c1888170917c0b8a45721"
  },
  {
    "url": "assets/js/205.4142bbf8.js",
    "revision": "21902bae4b850f1fe03e4e382c5e6f1c"
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
    "url": "assets/js/208.f5c7e04c.js",
    "revision": "05ae6a5ddcf6bb2c520d541c5ffde6e7"
  },
  {
    "url": "assets/js/209.521881e6.js",
    "revision": "38cb9a603f1f260e89ae5b89bd380501"
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
    "url": "assets/js/223.d54dbe6b.js",
    "revision": "8f2e4d001344ec94fc1ae9b5dcb164a0"
  },
  {
    "url": "assets/js/224.ad061a43.js",
    "revision": "94d60e812a020d38428dd6075cb96f72"
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
    "url": "assets/js/250.03745dc8.js",
    "revision": "2511ea8ba5467eed95d19197963631f2"
  },
  {
    "url": "assets/js/251.017ca4a2.js",
    "revision": "791e02ff5a3b2e31fabc365288204177"
  },
  {
    "url": "assets/js/252.8e39649c.js",
    "revision": "8111ac4a78af4624b4db78cc27d3d1fc"
  },
  {
    "url": "assets/js/253.7d23b803.js",
    "revision": "e6dca1fbc4f0a61b46903c2687bcb270"
  },
  {
    "url": "assets/js/254.bea426d0.js",
    "revision": "4c3e343c4509e5bf6374890695f8d83f"
  },
  {
    "url": "assets/js/255.ef9fa114.js",
    "revision": "ac5901d2b3332c33a9147c366fa37003"
  },
  {
    "url": "assets/js/256.e3fa5380.js",
    "revision": "1ee4404a6725b14396f6474e29aa8f84"
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
    "url": "assets/js/261.81d6089a.js",
    "revision": "c86f3377842ee8478bdbfdc9684ffa5c"
  },
  {
    "url": "assets/js/262.4da546b1.js",
    "revision": "a96701be0cd3aca89eb1adcff134dcd9"
  },
  {
    "url": "assets/js/263.54d18e37.js",
    "revision": "78f84fed0c508e654dcba2c1d5ee1641"
  },
  {
    "url": "assets/js/264.e51d5146.js",
    "revision": "96fc72cd9b1b662bdaa053df2c933e0b"
  },
  {
    "url": "assets/js/265.cf8ebd54.js",
    "revision": "966b2baa1b29a865e98cdd2659fc9ee6"
  },
  {
    "url": "assets/js/266.7117cf9e.js",
    "revision": "1b428697e5fda64d0d1804b57e5107e0"
  },
  {
    "url": "assets/js/267.a59c0b9c.js",
    "revision": "8ef38999b30f212b4ab7ca3633bab0d7"
  },
  {
    "url": "assets/js/268.f17bdc18.js",
    "revision": "40bdb974dfe8044140f602cc1f2494f7"
  },
  {
    "url": "assets/js/269.3b8fe905.js",
    "revision": "241ed6928b71bfa91e185341c8776f7b"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/270.8297fc37.js",
    "revision": "f9e9ed86844b748f35ffa6f999b6b1c3"
  },
  {
    "url": "assets/js/271.8b0b4c02.js",
    "revision": "107a510d26709020f8c37ce8ff338ac8"
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
    "url": "assets/js/app.ba547d93.js",
    "revision": "3bd168458641b81c6be0993edad65891"
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
    "revision": "5c6d7a791af799355e660b2828be88b1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1d7c24c0ff3e0a6c2e5f5b973f40f518"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fc00849157e9996ca260591ad2fce50c"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a94c29f2377956ba72a1af4d14f6ab17"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5a6d87e2751959a8d5527dbd45776031"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b5b991f9150f6c3d5b686ed75a0690b0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "dff6667410377d6e39e145c23fbb9999"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "401cf9cb5eb95e9eebc1004992bf6b20"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b9172cac171e7f9e339005587168c167"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e674f56774e8241e6bac193007b233e3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "56c2d02b1e246ccadce43294a5d1cc0f"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "87025318ba913ebf6b612bdc07c8a240"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "1794f099fd5e1a74d2c6d4ac739f5cc0"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "2a8e575ac3dd1430b568a3f04314016f"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "4cfc3cc61e900112cbd5e5d370133eb2"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c2dd52f602d20e0c096bc3025a6b7959"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "0ab79b9423f5ea8a5f47057983826a31"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "864731606ab0ba858965e0a199bc4d1f"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "15750be7ffd2296ad8438c3da0321bf6"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "e73e9adb049d0f646149b7840a9ac2d2"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "e015c74f51580653bb5db670403d1950"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "5ad01d6dc34b6978686d0defd5e0a027"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "872d4fb26d8a6936b3e5b896d9e6c060"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "cd81dbf91ded59732c035f897b7a7192"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "904cd45d0e9f75b2d1d6f3eb9d4f225d"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "23377012f572a66d5376313c3f6c3d93"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "50117ea07e352573d449748145f64ab3"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "717141ec3247b303ec965f484b4864ee"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "81120323f4bd2401e2132b677ac181cb"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "6f7c767f7d83189d8774390c00bd88ce"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "815089901bf6f0249317769ea7781d2a"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "4d60e4faf25ca52a19af4de5aa56336b"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "7a103ce2950c5959e19cf52570785f39"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "29fb743f8ad276d427a66cb6270f7830"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "6fa5cee8b47ed136aeb24963313292b7"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0ee8b80e18f7c9469e12dd18cb19f6b2"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b770b73adacd6d33f7e5d58faaf17e2b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e55643d936fc5e7b39cae70af5c6b40b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "da30342b64713a0315885efad806aa1b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f5523999b41a9d976c003ae63441112e"
  },
  {
    "url": "book/index.html",
    "revision": "6d99e44950d7977bd6b174520f501d33"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7c90ef0ed603e1cbcbb62b4c94835514"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4f675824c5d5413424201bdb7eee457a"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "2f137a66b59821d2644427b955e713e2"
  },
  {
    "url": "c/audio/index.html",
    "revision": "6d07bb02e4ec6fa74942e436f8f497aa"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "db4f1aff51ea882c59512f7e3702876d"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "1d9403ccfff927f1b7312046f9d3f532"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "b30bdc9ba95e8da4ac4fc3d4aaa76496"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "6f1cf8f28f5c00a9989a910be5beadec"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "2c7ee6cddcfc91697e49fc1e2e3a823d"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "81ff7e5b532ebaa9c70e6efe5880b5a8"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "d3d49994612d71416fbf66d4e03c1bf1"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "fd3d35d92b3f9ed22f682e35865c9b42"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "26d2b7fea4455a2f39e0094b32e7fd4e"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f915194e0e7959f40d9b13fb822ee17a"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "d5eb8f2c2d634da0ba3d75f6fd562828"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "1bf28e4e29e02d3ca0dee57d7ec16a89"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "3b6a12b4f86eec59bd8bf80134c5333f"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "5a4f5e7751e95c34f6e568afdfa91705"
  },
  {
    "url": "c/program/index.html",
    "revision": "5752d2f37d943ffd5e3220392feb31d5"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "197b6fb64c1cbc4b9c1f554c3f4fbb89"
  },
  {
    "url": "categories/index.html",
    "revision": "3f2aad2a4ace5e14483b97bab5d0f774"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "dbd3be2cce07437a821cb3877105b505"
  },
  {
    "url": "figma/index.html",
    "revision": "3de2f98d22cd606fc256c3681af95a90"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "c2b98f03c549f3cd930fc9f7f8107369"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "9eba940c7d6f4716a86baabf12d2d318"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "352e0649c9ed818c0c9b2505f349ed53"
  },
  {
    "url": "flutter/index.html",
    "revision": "d8ebf0cb4db8903ca1735dc2a929d44b"
  },
  {
    "url": "flutter/point.html",
    "revision": "02d46be323120efa483f7276ab0d284e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9f0171fd5769975e7524330dbbfde9b1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "126a65086793f2ca6142c8687195aa7a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "31dd538ed2152f70293d863db724cae1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "70151481fbb262a657e2def0698a1927"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2ff9a7c9e4ae9b2290a0a6bec367f258"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "a35d68071cbb00934849c8c4840aa043"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3f483f7fc3aa71f1c6cc9a1b35d14d2d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "4b61d09c69b71acb1b60ec66593fad38"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ee9967e6b34430872a949583a92f4f19"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "15d389bfae78b9b0b2129e0b2c59f5ae"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "4a86b958b3fc421f0adcf5f8a56b326e"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "bec95119d12fb100ef189e0b4c2b56bd"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "20a9bb7665ca86f2c5509174b43356c2"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "9651e0c371025d16c437c8406fdb4a09"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a94b8b92caedfd0bc683f463c03109f3"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "03e215aa09456bfca8395fdbc8f21dad"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4752f74580c527719610ce7ce65baa4e"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "ec63910f72b67f6e22ba824df4b55cdb"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "cd67acf5f06469f7e10a5af5dd9d61be"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "16c05652e42c0653cb0c97f1824614bc"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "01d3895aa00de27473f83b0a539e51c2"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fe914ee512c7e5ddbd90ee18ab1b047c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "82c4ccafb9775353e03abaa3615db214"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "1313a7e014d1e0fe73f1eed1c3686d65"
  },
  {
    "url": "haskell/index.html",
    "revision": "90fb44d424dcae3314eb8f02b77b5f5f"
  },
  {
    "url": "index.html",
    "revision": "026eeb01a18bb1af5c78767f359c7d2d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fb0728c3f9c3e7a12c8c3ec0ac7efcad"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "0caf038c078973dc679251bda99930ea"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "8d7a5f4ca10a19d07ad00b694dcc419b"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c8416bef37d26875284112b8dc6cc9be"
  },
  {
    "url": "python/index.html",
    "revision": "300ccec1e8ef572d2b8b13f25cff501a"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "87f6101c7ec7b9d4619aaa44636ff8c8"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "d0d37effa480bf83d5495fbc6affa9a0"
  },
  {
    "url": "python/python-file.html",
    "revision": "40c45386475e0f38173b31e6c9b8ae1f"
  },
  {
    "url": "python/python-function.html",
    "revision": "2daf6a79adde581980de8f8ff8390bc9"
  },
  {
    "url": "python/python-generator.html",
    "revision": "90b7dccfcadabbf93db0aa25f4accfd3"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "c11b49dec52575f23ee5abc1e53ab34f"
  },
  {
    "url": "python/python-module.html",
    "revision": "625e3e6bf3dfad41f92fd77a1b744c03"
  },
  {
    "url": "python/python-string.html",
    "revision": "9f32fd1e3c051fa2a3d294235b9cf8db"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "d25490cc552e6265c45562b9800e90a0"
  },
  {
    "url": "read/index.html",
    "revision": "e6394f3bd9ee0ecdcaa20aa5181d0b80"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "82fbe0119a33228b99fddf44813a0813"
  },
  {
    "url": "swift/better/available.html",
    "revision": "1764a08a24423be6d30256336f28a330"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e1ec06e724fb30da62cea14430e1c54b"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "c1d772cf6d0bfeaf5f04a16511d39b07"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ba8706978c73f29e2c46dcd480e2d0f1"
  },
  {
    "url": "swift/better/di.html",
    "revision": "7dac7e396a7eb13d5c628564af7f7dd1"
  },
  {
    "url": "swift/better/index.html",
    "revision": "e6307db7b5338450371b946aef88a518"
  },
  {
    "url": "swift/better/last.html",
    "revision": "dc71972010b4895e090874b34fe7215a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "35d2bfa8b1b275f07ffd679f579d2d24"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e7529b9f28380ff50c8cd8b3ad783cb8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c820f51f8f4b0be81b98748d410b4787"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "9ce41df85fcad18fe7cae6a18b51eed6"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "670a5a60a897f74064288eb52d6e731b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "eae573b2e21bc10ae1907e947b1719e3"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "19c473eab954a319558f8c3c7e707a58"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2a681d7e542a26ac631db003a3ac2ff8"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "73715ecb98ff20480f922690150311b4"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a9ba094d310db33bb2cc262774aeabb8"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "2372615bf17769be5764b3f264afbea9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "274c2bb64d15cde85acf79ef88b4ef94"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c5b0a63c9e229ce2fa4749cca381254c"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "1e29032933801c57b5e3818a9dec65e3"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "b015e0105afa233148fec0c06b8ac19c"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "393f9b7daca1e0f0a720974d53919ca2"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "28065f5e0d82579e96b5f891643f18cf"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "df0eea6f24cda27f20e3dc0ac7b8af1c"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "8c240bbf669628e36c6f9a5468981597"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "70204c639564dd6cc78a9595834ec176"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "7938d1b1babed16cecda24020dec5174"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "5a260ce3153887e226110def0e5a2ad4"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "018792637ee900da1d4103aa95f1d4c9"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "680810d7be212fddb9031389756c3595"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "01ff0b91e8b0e7900e7564c216aa2cba"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "91325edc71867be6df1ce19ebf837147"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "75356207234454c6a4d7f18dd3b51b90"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3477db5f09cbcd153c6544c21c02e68a"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "2582e4ec402a23d0d55aa2bfec6e18f9"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "9d6c66ee69f9e0f6b3865e4bd2a2cbcf"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "639253900cf782f40abd10f7f9b55876"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "193cb0e3ab4267c6bfcdbf5680c142bc"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c34ffdd14f13e558fa9c15d75adf26cc"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "3ba9495373ee0cf68e3ba082845a56eb"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "ec90212058bfdec8495191bd5fbaa102"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "7fe1957eba6221e5303642766b5de4a7"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b0060c48ea4ee9637d8009086623f17c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "4c25565a4ff4677b59e587ae3f4bf05e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0c3417f5bc9a02afc47c17f37e311965"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "094064f129a01fe69616fc144b13bc34"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "4f157353318483e5cfe332c0a43a36f4"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "d60e10b9700d7f72ecd4e1bdacabe4a3"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "4b7769f13f355f6a09c2c9066d8a8c4a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "83a8b4ae198bc30a5378c056a53aed40"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "30eaccefb4d3ec159162807ea0bf6a6d"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "883aa9c31f2961d843bd34d5f51c68c6"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1551d356ad5b09ffe21661642d3a4e28"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "25fecc5cca2c6c919ef4f0b6cbf4d248"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "0190105220ec975d151cf27a2966df0c"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "299ad4f62767de464a6131431bae2cbc"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "84876267ac7334caa4c8a57cf85ce849"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "2ce5e6a5941f84019483c979f6b0f53f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f8d59e92f1c1e93e97cfbc07f836216a"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "f54812a8574e282aaba381d7c246232a"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "066e7e186f389d27b204c9b09c612d46"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "21e0ba4b04608e3d1d30badbcc3efb8c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "3ada2b5a31b6bb760474f068cfdfb3af"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "3776cd3a9286f25e086304d7e0460dec"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "be379916e5ad13233b53458ea828e424"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "b93606bc891e3804f55db79cd90c9353"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7af047e4a52332d6c2c4fb98f7b2f86c"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "74e1ae0f202b4d47cd0f48592f06cb45"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "a9b2a99ed7f8c21fd539c52ffcee97b7"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4992c47ecd69eceeb0259c9d16ec2fcc"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "69c6d3a8de0540f027bcffea400e0ceb"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "2844130fc7247cb5b906c33dda1a1381"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "20727ac2dca10c901de1c2bbabf0640e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "67b2372e18c27a11de59dc7a45051881"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "b7c52785b42170e23c56f6c16aab103f"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "5621b0a893d105f0565c7f4c1dcbeda5"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "96e162d9123b3c746e8afd7a4766f704"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "095d302938120364a7c97f44d43b6b7a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "4eb658943b66fed7df060e49988241a9"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "15e9ee8302d50a1959f118c25e1c31f9"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "72f67dd62bf3b93e11c63917682df2d2"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "94000e270db9e98b05f423ff6548ab55"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d6764cc6b8726d8afe50c403e6b31806"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "7ee33eb99eb8b25df55bf36b40951776"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b952986177f22c76fd477255e8656c4e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "87ef40dae2d12a7d0f3b6798a75136a3"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f26fa9e4490a7e85cd5e5867acccae99"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "94cc2a1f090fad90c19c625aa561bf6d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "b0e4391f29699a2d921231ad2cb0474c"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "6aa0c7935eceb28c88ec450f115fb968"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "680cd840074a07b095c8ee535f577811"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5bd45a1755181a97bf2e703363ded94f"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "051c20c02f4fcd5673cfad626ca0d1dd"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "5a8a5cdb28fb9397abeb452859760efb"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "71a854b8c0bb079364b405094385a486"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "017a59e29b231e2848e21206b5030b5e"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "baef2fc583c727bfde80bee421e13887"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "cc24c7c06365dca84074dcb8f389e585"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d22095ef2e6614fbfc3df73788e5c0ad"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "67148548bcc899d22bfaef1f992ade5b"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "e5b3d5d3910109674eadfd0f0c31c558"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3af8f5ffc3400041d4ab336b5690e93c"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "e060d05a1c60733725d58c989abeafbf"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "1bb5fd796d76d2abbbd0136f1e84dae0"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "bff4b28a8cca550a7ac5777253ed4259"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "a3a09fae6b077d4d65b99c93175f8add"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "e67fcc70796190acb36f3554239096af"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1f19121c5e0e55a586a4723768b4896c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "122cefe25ceb8dd0544995b447a3d8ae"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a724614f8f3a4199dc03eea925209276"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1c20681fa5c95c565010bf7b94d3ad86"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8d55888bd68c95b2f074050ab1b9578c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4194b50564142bd6d7b26504c459a448"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "7f0656ac7cce7965aeec2711f9cfaf03"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "aed278b5ee0ae94c7fc4cfd5ff5582b4"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6cef1b41a5e330936d620c4a9c83db09"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "04337f115233d56cb08dfee5b6dcad9b"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1b64d457d7e16562d130257cb01fe56b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fdc8149f201b1301e00ffa4683dd9f90"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "386c83dc3f168d9f3ba7039df75b266b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "bb0024d0c70fd764c7a62d1ed9c5dee1"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "5fd2f0dc366f809ef5a3bac379753359"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9e74328ac9c918694ff05541d5f4b22e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9fda8117a274f5c1890d0048295bedff"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "2f18c9e44aa4e391f073d8a74d52131e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "09b43e10153f04c7d910924bef4f2e53"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c0a02ea2c0f0aaaf21946b0575fd7823"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "71eac82395be45255f8828f7c6e8c7fb"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "22c7491d3b26616bffb38f8bbb199605"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6ab65bb45243ecafd99fbd48cbdbb6ae"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "6b893173150e81536d09a1516ae06e73"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ff5f5127af7202d9dfd42f2c3d996b69"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b848ec44bd537fc902aa2328004c97fe"
  },
  {
    "url": "tag/github/index.html",
    "revision": "579b01864c74b72152ac76275e652324"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d26d92ee4623583eb3f513ce586535ac"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d9a6d713f19657b5d3bdaa7eaa260f35"
  },
  {
    "url": "tag/index.html",
    "revision": "23d988e1866a40dbc53f6ed47493536e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fcf903f100d70dba0e3e40b905df9fdf"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "98d6021f2c918b09e8cc2fa925b9d3c2"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "d5903db23c2df5f83851d59e99a19f61"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "a705b047ff05cd67841e64020b652cdc"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "317775ef80c89c587ec4cbbf429eb8f0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "9ade205d7e3136b5b3cfe05b597a9988"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b369f74b19554bfcce584554683c45d1"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d9a7f4f8d15e472640e33fd4a97f30ef"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "055ee7cd3cd97d8bcf6d6ab2402f280d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "6b1f5347ba9a96353948b2ae44124305"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e4270885af5003b570e598b32b3cff3d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "0a5ab6ca1d289e67f87118f20117c6a6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2c5bf90846297f1dfcd3a9552787a3d6"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "c6d8f75d7225da245cdc524b292cf1ed"
  },
  {
    "url": "tag/read/index.html",
    "revision": "7ddbea43b7636e59b0f22b1d6eb3e802"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "0db3b995e735f8f3475a8d798f1fe5e5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "db7f553d2fecd83ac78e383225f1485c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8d61e7ede6fd38fc0f9a328f4a503ff0"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "774cfb2a90c0f624c4b31819e2c22a8b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "47a401ff7c232744852a2db312437c90"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "0372fb3c51ccab8127e5cf9839c0d872"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "79b5425ddbc6f929b3dd3eb359f141cb"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "889b6bc6c8d1a5c075ec6f6169d4320e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "85b1d5b514fda23eb9acd6f8a216d2cb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c7c37e6435646cba1823994a962b54cc"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f5577999b8d2ee74f3a7f05db5b0c91f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "95cfd10ecf2f3efad69626674d58a6d2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "9896a80f9ddc2637d1606540e0341ec9"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "7ea2e3763fb8243b9ede8094382b8285"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "f1c9a62390f8cf65f6feb08f032833dd"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f34e52484541e259c5e8463dc00fccdb"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "508e5f89aaf7275c590051c20d0a49f0"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bb44701c706a5a308e576d4ef5aa805e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c5a1db4da51897e57e3a030e66484c2a"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d93c75ee001848649eabf0dd5b493d25"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "fab3325add3e81a90bb0eb64e37929a1"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "404d1e2ec6cd93f387e855c20bf64d38"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "3899daac89c597b31dbf8a3ca91eddda"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "f58e6a554246a8ac8b9b33bc5c295c44"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "4617870ea270859dd77e1d19490d53ce"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "2c51585ea0a3bd0aaf95fdbdedf4ed49"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "000761a7266e57f26e23262cf6632380"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "ac0c70428b16587c8d24602ab8ebb163"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "21909ddfe475faea349dc02d1e25ffb8"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b5f714050fc1fbfdb561de273415b3bf"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ff1237411a7e2543ce39d6d6b231432e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "70afaa1baef82086c48acaa29ee9ce3f"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "fd21babe1cf6ae5f582da49b225df298"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "44ee1a32c7f4b4b5791b750b88fd4552"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0607f204c3bbf184b9233ff1669e8428"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2f896a95b09e1bc67f3d7b9885bc946b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "845dbd66be15fd9fdc2c82ce19eb731f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "bcbb0c0618ef0b7fd8c939ea386f8f42"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1e43f7d3599bbbff5d28ed271a2b62f4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "748daccaa6924e53c2393330242f48cb"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "61da54b9ca5d5318dc389c31355a3840"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "dbbb00bf16fee4db5532b194384d2382"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "068d11ceaa4a31c962f2bdcd61641b7f"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5adcba8c90145a4e7fb039b343e2eaf7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "7790dec98dbd2e06dce3f4922a9f98eb"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "76063d214cdcf32c6152ac67863bfd71"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1a06c829f2d6bfd0c4e08335c922affb"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "fc71f4a6f29c03957574d655911a1e7c"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "489f6ae0f600e86249a8e34a2759a7a9"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "9145b26cb7514019468d1997c5124612"
  },
  {
    "url": "timeline/index.html",
    "revision": "1265f7b44beef2698daf01168afbf7e8"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "83ce4d2f7d199e8b009576614cdadb6c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "0768510d8f3b70457f65a2ac09993cbf"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "c36f71f2f0d966e39b680044086a9373"
  },
  {
    "url": "tools/git/index.html",
    "revision": "61f718d787112f7676c8b0744d9066f2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c37189efa7de3d0678f025bdbe3df31d"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "5f6b9e4b9eb7d49c883b485b092f1294"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a2e8abba5e85bf58eab274775c1aa927"
  },
  {
    "url": "tools/note/index.html",
    "revision": "4201d4ca3752e10443715ffd0e71a959"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "66641b58aafc46ed47e83a77c334cd8a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0d55a751cf2468371d60bea77c48fe53"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c2fe0086328803c73776436de7754bf5"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "6659b3abff9c99f98d7e5766a856dfc3"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "3ab674d6188015b8e8ae5e0ff9021e40"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d68a32b14a248c0e557c0a00d3ddd316"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "3928d49f13a4a09e4cc4772399672ca3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "4c53a51dad2eb532011dfd78b7b1004c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "fe42e6ffa9479b6020641e7ed931a030"
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
