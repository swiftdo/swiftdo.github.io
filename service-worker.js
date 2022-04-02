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
    "revision": "acdc3567a4c7618631380ee7b69e3340"
  },
  {
    "url": "about/app/index.html",
    "revision": "d63c4ee277f0277a91eb32db93d1a687"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "52556a5b171f5f5858a19f12f0c5e4bf"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "53a874b8867ab1697562f86f0f94f85d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "85d51b62f3736b03a84c09adaa0286cc"
  },
  {
    "url": "about/index/index.html",
    "revision": "a1d4eeab796b203f47c41a9974e8d11a"
  },
  {
    "url": "ai/index.html",
    "revision": "40d91c9611a015381af061025914cd10"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0b1d55cade0b9b5bd9c5959ed8f8691f"
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
    "url": "assets/js/100.3f3363c7.js",
    "revision": "372a3a764ba5335a53b194654b471a88"
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
    "url": "assets/js/122.71b56c08.js",
    "revision": "42ef3e9916b578102063eaec830db58c"
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
    "url": "assets/js/139.ee71c67e.js",
    "revision": "a508bb16f3449d64a1c2a804eacc9a9c"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.25127ba4.js",
    "revision": "8b626fa785e542ef670c54a312175abe"
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
    "url": "assets/js/151.5bef49e5.js",
    "revision": "34d2247d029247dc96229503928f71e9"
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
    "url": "assets/js/157.6c0ee8a8.js",
    "revision": "dcdbc46243f02be1633f6817ad285495"
  },
  {
    "url": "assets/js/158.58ac250b.js",
    "revision": "82091b6df4ca05e98f01b92cd5dbf929"
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
    "url": "assets/js/167.5b4ce5c8.js",
    "revision": "d2a966963e16d62c919b243d78bd967b"
  },
  {
    "url": "assets/js/168.cfc57dea.js",
    "revision": "e6fd66cfa63451cd0d9f37fc7177ba8b"
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
    "url": "assets/js/176.94c1e45f.js",
    "revision": "4a0055a8e307d108670f836cb88b504f"
  },
  {
    "url": "assets/js/177.0547f7f2.js",
    "revision": "3755e8c71e6ba4e86c3240fccf1941bd"
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
    "url": "assets/js/187.98e055d6.js",
    "revision": "ae660d4847419847f991a40ec4d77c72"
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
    "url": "assets/js/193.8f5f484a.js",
    "revision": "70d7cde5137c02a1603fd264c7f91abc"
  },
  {
    "url": "assets/js/194.ff02ec8c.js",
    "revision": "50bdc277cf4dd7b2743b980fc2558d7b"
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
    "url": "assets/js/206.a614e08b.js",
    "revision": "dd707a21d4f2d39a415ffad75a62769f"
  },
  {
    "url": "assets/js/207.1b943ab2.js",
    "revision": "0ba94f3c1e8ef148217bd781b559984b"
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
    "url": "assets/js/210.741c1c1b.js",
    "revision": "ba7e125845491856da4f9942475a26d8"
  },
  {
    "url": "assets/js/211.3ca312c1.js",
    "revision": "fad49adb0c6398b09e875f1403e4d09d"
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
    "url": "assets/js/215.1cf09020.js",
    "revision": "06f5049e22c50261fb29e828360273cf"
  },
  {
    "url": "assets/js/216.76ec7449.js",
    "revision": "d2d4a565c927beaec22720c328893127"
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
    "url": "assets/js/219.c0f204c2.js",
    "revision": "df77fba615717d7ceaac4ee3f149762d"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.83877c5b.js",
    "revision": "648b6a9ef02ac83ce198d26817051dee"
  },
  {
    "url": "assets/js/221.2713ccca.js",
    "revision": "2f92221d2a781e5d9aadda2f64a8fc5b"
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
    "url": "assets/js/233.526947ff.js",
    "revision": "2b75c717917987f773d2b7376c41820f"
  },
  {
    "url": "assets/js/234.6e98a941.js",
    "revision": "46be5c0f2e12d90707c57d3c7e1c5de0"
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
    "url": "assets/js/243.457cb0b9.js",
    "revision": "ae49cf25ef015044d62566a8b2a69ea1"
  },
  {
    "url": "assets/js/244.60773ac3.js",
    "revision": "ba398038bd81d9b8d6edc49da9c87b6c"
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
    "url": "assets/js/250.dba2c0f8.js",
    "revision": "4ada60d7c9a57b43a754799244b47c09"
  },
  {
    "url": "assets/js/251.6ee87ea9.js",
    "revision": "339b752448385da5bcd1591bb89f5099"
  },
  {
    "url": "assets/js/252.6b4a6177.js",
    "revision": "c97830f51db4e102e05ba4f0fe102ec6"
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
    "url": "assets/js/261.1aa1b567.js",
    "revision": "3aa916abe3f2beee1b3a965ef5a8a0f8"
  },
  {
    "url": "assets/js/262.cac0d2b4.js",
    "revision": "a465671162d880d1cb96ba3442cca22a"
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
    "url": "assets/js/65.14f8de47.js",
    "revision": "a1e9bc10be1cbe3eaded1ab757062e7f"
  },
  {
    "url": "assets/js/66.8363892e.js",
    "revision": "4b837a9f024d6d4507e5e02cf7e4a227"
  },
  {
    "url": "assets/js/67.0c3808de.js",
    "revision": "8b02f14ee3a4075f0949d39657cdd1a4"
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
    "url": "assets/js/99.f80d2443.js",
    "revision": "f904c95315e8b9db178b4439c5ca9b39"
  },
  {
    "url": "assets/js/app.cfdbcab1.js",
    "revision": "e664074adf996aa7ca43539a9574c2fc"
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
    "revision": "1d8bab9cd211e8b0e3b1ea5140994da2"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "cfc5b1d95d2bb6fe273904dd22cf2595"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e22f4320631d0cf36ab7f3e6c36e3f5e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "00af3034dd245994f492f1476e093972"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "7b355438b3e7446b4f114e8c8e6ad893"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9597f63b86c15d465f162e37b7fbac0f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4c22b3413667297f0f93c9423c512a16"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0188f8db80a400636ae29e4f987fc33b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3a454a3e1ef09565fcae88181383b468"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9e86e50271da35375be24f8a63815e09"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e743fe466e500ca411c1168818f95fdb"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c9e71ad179ee539dd5c1876e2195f359"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "fe8e1fa1c4f3d8623ae6de9ef5ebf050"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "9cdd14c2f0e0d9ff3d0a1a8a02063b37"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "88cb544d433ba720bd806f5d3e2f28c0"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "814deae0877e59093b0042d1151c13dc"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "3daf4eb62072a3b7bf1f11123950e4bc"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "98f513ab365f8026b90071c6d8fd6703"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6c284a803c8cd10f53a84c0760880163"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "da5914b5ff08149adf01de43b358cd70"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "02d012856d51712abb99d7a147a19a51"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "40c62c58598add955880b9efdc8c64f4"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "63160f044b775253cc5b806fa72eeacb"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "a0796f4273140807057278f3a11e7657"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ec4cddb07373cbe41ea5336ef324d994"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "bea67a1c08a414e662457fb7dd774acd"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "9517242ec905a3e7ffdd808348fb6f0f"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "025d1b547867808f6a70ba0250ea20ce"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "f5e27bac4e457ac87d4311ef8cc43c1c"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "72e89b7225b4aa5747f210162c549594"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "0bafb53c626fd4d887b17e3ca7d716cb"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "b27c7e3d227bdf05d8bdf0ba445e0938"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "5284b116988c278ad1216b06c24d1bad"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "c9a7960e6c90194f6b4820fadd396f26"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "c36ccaf7731923eec7a18148005ac853"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "4c34a8320403e8a09121ff7579bdd803"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "24d41b331ee9f6e73f3133fc1a3a4bcc"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b3c6087d6df7580910eb4c4d303c4a99"
  },
  {
    "url": "basis/index/index.html",
    "revision": "3fe635e34cc4515e480d9f6aa0561d5c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c18bc68f60783dc17a09d958b2fc20f4"
  },
  {
    "url": "book/index.html",
    "revision": "8ecd5fe25c4437d56982fbcaf9c451f8"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "b4e694b7efeeb20b6d828ec07658d039"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7c3c6583cd7269751c4f49c31571ee12"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "258c227c5fc8e07172396f12d1dd3a6e"
  },
  {
    "url": "c/audio/index.html",
    "revision": "a17ae7641fa2fef76ceac1fd0f06b10a"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8c5155c583421b9158dfe94989cac9ac"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "c1e14305016563e542a5276490154290"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "0649e20d804ef351dc6ed4c73e25a066"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "443c80439e9595f049c8d497ab702611"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "46c49499cce332479368bd8645681a6f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "6c3ffd52736234ff2da178e4e665681b"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c353944d7496400d6f23a9774ea08a71"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "11c87b2d28c5a72e5fdcfeb37b17e3a4"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "3ca7b6d13df1661708e3ea9369d717da"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "0023ab0763905f5b2b56d5679dcdc006"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "93131a4e2b3fd770a15fed4b651790d5"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "0474afba2c21086cd7d527ccdd96ed93"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "2942b2c22a863ccdf27ddce7fbb975fc"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "09201025ee47e0fc668e34e1935e3fca"
  },
  {
    "url": "c/program/index.html",
    "revision": "326d9c86e8e1b6545365573c4636c534"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "5aa065546e1a150f4f3443b0e0a55f67"
  },
  {
    "url": "categories/index.html",
    "revision": "c5508c230ebf40056eaa84d32624e6ee"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "d297eba23920780dfb1eff6f9976f3a1"
  },
  {
    "url": "figma/index.html",
    "revision": "70fd5e68482e181975412440f1f394cd"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "dda1fd9b605a4b9e2981033e28046f76"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "5abdf0dad76b438ac0f74459286b8cd1"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "b3294e240ab9c01e5bfe796167fa7076"
  },
  {
    "url": "flutter/index.html",
    "revision": "15073cf4dfe90c8401005e51bed6e026"
  },
  {
    "url": "flutter/point.html",
    "revision": "715266bf94de01fe807e72839e210e48"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "bbd84b80755142289ec23a230603a8db"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a3c664ee0ce14f4a2580703591d472b7"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "037e2e90c71a41f46b228f041ae23536"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "0eb98ee8d8de218f88cfe005e16baa88"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2db468335ff29875e1759530f0503fd5"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5d12c1186b4eea15a6607c9b7e1b61e5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "4da66e443812c188a0cd14c3af2a06ae"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "9563479821956ae2fba00de04665e252"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "4a3778663cd3e4db0206ef9d848836f9"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "93b4c1f9585eff1eec034561f6f1cb2e"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c358e0414ca29e817ef59e0065dbc2aa"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "0f81dbae6a88a38101e9269e65238b24"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "406801c8d7d09ee120e95c959331f7c6"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f076983d3e0a28d7f2800f8e2e56b345"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "abde7cf978ce5f6369a5f9092300feec"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "80160d903cc3aef6cce3c1c419a0cc23"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "91f1dd3e55982cc4e8421b3476e11f30"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "6c7e957d6b03cec926533502c80facde"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "345eba8c05248255ec903f05aa02a3b8"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "0fbee1e90b28db1e400bd97e2ddadc8c"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "65e702a56d58a0df4f83624d48e4a1bb"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "eec252ed8862f9ae20d0d98227bc45c2"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "0a503200ea803fb8743e2e90f9a5e279"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "fb6073837f236f098578e71a815133cb"
  },
  {
    "url": "haskell/index.html",
    "revision": "5689429e47e3a644833dde18fc2a0634"
  },
  {
    "url": "index.html",
    "revision": "2a58417a1e70a8ebd0e0a0d932985c88"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "aeec0b788f5631f488ca0c819030eb2c"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "110399e3ddf9595cb36686b0464076d3"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b1c4c1790f9bb3fbed7c434f5aaa2101"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b98aee6310844c0580ab1e3373a27868"
  },
  {
    "url": "python/index.html",
    "revision": "f18cf8de2200dc64f5a250f6b9a22e2e"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "37cc0199b4bf4297998639aa9083d050"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "894095c1d1cb833780cacd58f86efb29"
  },
  {
    "url": "python/python-file.html",
    "revision": "9fe3a417342ac8d636ceffc1fd9f0763"
  },
  {
    "url": "python/python-function.html",
    "revision": "539466365ceead33ba160968c8230a80"
  },
  {
    "url": "python/python-generator.html",
    "revision": "fab346c84e720efe0e44818727341b13"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "b228e09abafe8b833d3819eaea29810c"
  },
  {
    "url": "python/python-module.html",
    "revision": "c515be2322118054d0398d9f4da4b0af"
  },
  {
    "url": "python/python-string.html",
    "revision": "7318fea4085ab78ed7d7b8441abda580"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "d1bbcecab8f356b0e19545c72dd0b7dd"
  },
  {
    "url": "read/index.html",
    "revision": "458712934c26862ec3b32dc8c0099799"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "0e0a52dd70e37897b2710667b217ddc9"
  },
  {
    "url": "swift/better/available.html",
    "revision": "986d814b59c6c632014b71403e4d5300"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "eb78073e80dd0ff28fd3823cda7fb5a0"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "8b125319823274441b780eca9f35d5a2"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3f788ae630782149bd63134673d35b6c"
  },
  {
    "url": "swift/better/di.html",
    "revision": "767b72de690c1e1c1f1bbbb965a7eb8a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "716b32e31a6e69485667dd117057bd85"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e40d057fb7d445fa10b779c111a6361d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "d06b6cc75f8ce42105eb895785950bd3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "d10f2eeb00e20447b55431b965957aa0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a7c8ecbc6b328312d8f5f2a3d0197bea"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "5bf9bb76717ada05c314ce803f70c400"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4de0eb532b4c0fb23e39132217c097b2"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2fbb9290ef943edb19789919bf870970"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "7b1170235dcb201092f445298487cb1d"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ed48d31dee279bc1c4ba5de1b830ff9c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "c1b393cbc30523e5af98b78d33b0bcaa"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "113e01f76e071a37128faa1aab7e362c"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "7fa331ed085b5f6d827a0dddcc206894"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "8f87ec613ba9aa050305bfc5b931216f"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d32fe5f1b433ba3775c8c5dbf449a50d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c0132f68c60cfb11a9f9499053ee0597"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "4903b5f51273282fb3bc992a55d7c3e9"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "7feb8a922606bd2be47ac5dac41128a5"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "ef1708e2e500ff05690150da3d5c7502"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e0f2c88526b507cb22791a980f8b5c45"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "3715bddf5ec486a0d25d52f3ef21a021"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "53beac2e21d55efea83e6f9a1bfae251"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "66483ebabe6bdda1dff3b0b28669212d"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "90b84dcc76d684ad47582855602f502c"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "d8df14ea6fbc6e90a5a0fa234f1168bb"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "4df30506ac1ce7a0aa270d6b8792da5f"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "3324e1e5e61a46583afe32aa7ad46c05"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "1f28f35b3e841a4d47f78d83a5b67a65"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "02ece53369a8929409466437678dcd32"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "8908cd5e8db16062cddb80712fc7c9db"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "13fac7909dc69c102c3d4f7d078dc248"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "fe52d5b8c8ee228c0e7c90c9a3407937"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "7f6c52f5f121ece9f44fe4526e8a6ee4"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f97c875c64482dcca1dd1857add395bf"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "81b0b917ffb3cd9f3e063cfeaa3fffa1"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "ca21c13c504bef3a7d3cd46c84d94fb9"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "54f82973f67dc73b744cb1524e7accc3"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "a9507632506700af365b847ac5f938cc"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2a52768e15dbbf984758509e2aa021a0"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a9256a4e60c430ba93e94dd172dbc252"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "b20223d3583ad10299a35f389a68ea0a"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "cc69f4f1ec79908ead8bf762f7b0cc19"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "daf3836537b9664cf7c1f26af0219318"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "fe7fc7e002974c0fce7471bb2add4b6a"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "f70ec9175f56c18831eb9083739def39"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "7fc40aa4ded322ba453efd44b0c5a0a9"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "05fea1aa9d857819f2fcb731ec818edd"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "32c3d7a2bac08a0acfcab8e4044ae276"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "98324176224efe668fa4995d44c550c3"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "99fda0468cd1ceb1f390ed2561d8f710"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "1b8f27316ecfe18c5c6cd7e189c22a13"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f4273bc0ccddfc32d75bd444e7c3804c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "2a12484f62b11991f8d475701ea27463"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "efca4e0b24099c97a3c83b99e5e48866"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "bcd6451a0c7bb738b4107e7a30dc6b5a"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "eea1ae6dc51cff0ab14ef160ee3962c1"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "904c6618c6c2f8a6cd8d4b0452f69b11"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f0dd97721ce9b96b5ef45a6533720826"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "192b00bc85c9c6b44ab9d1ca666131b0"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0d90aae84488f968c2e73be7364b01f2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "d1efa7d2acd8259c2ecde620634213b0"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1b8971a088fff2290e50a3fb38dede3d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7e646974bbedfc4ebde9818c8b3d91a8"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "bed6a02b5a4c08aa3c7f9d7df37259a8"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "c2825b54b3f4a86a070a0719f4d4ac8d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "77b599023bd0ef5222269e9086fe89c3"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "b39e86ddefc53beafe28313c9ee1a126"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "01c93d6c72441ed1ad961d93b4450290"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "476c33c3b0d7fdc01de755faac139c4f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "78dd1940f57ffa86cc4ad8d4e802c0b3"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "66f3abfbc0598827172e6321d5cde972"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "75e292815a868b5dc27b245d0f336214"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8d2d3cec263cf65068bbd13149335758"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "36754d7316ebf4e59d2d9b8a980f0474"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c9ce7984ae02d1e1489535ed871b18bc"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "740173b7277681ce58841ed594176e4b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "bb0ce3d251548944c61da3acac8e827b"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "8357ef9807ad570be5052a70654c17a3"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "cfa0e3251f6e96ec84327c4b60ee4033"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "629cd23bb977d73b1312ea63beea0537"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ce9860dd37ae4208ec83697937d80dca"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "35ff2fc774034328064ed70d2a16fb29"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "2059c84f0d97d7cd61257ac26f7e72c2"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "5f0ff0b1b1e443d034cf97ea6e5b52e7"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f7673cfc26e9dca5f549da826138b041"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "10c2f1b3b513438b005f05a0dd36bea8"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "fcd514214c821731837dbbb35796df15"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "ea65a0c857fb1e7d2d70a8ee42c7b257"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "24143082ec45d51eef95c45d67f015fc"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "cde6baf5071ddcf2732c501a913d31d2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "a16ab92a8df931eaa8efa73ad2b903b2"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "94f4907eb39da076bc69f6005fc83b6a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "b741fe93fd0f62503beb54fd06775169"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "753187afcc14e8b5cbde5ceb83660957"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "07ca1cd143d736ab9d24765573de8f96"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "cd6dc619d633fbf7004911d9237fb5e5"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "a7845c9a4224d814780b6fbe16bba31e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a80560dabe824d9f7d08fc83a2ca9bf7"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "ed4c5ae963188fde6676070394596a2c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "8bf419fe82c6e9a5c2ba1d4a2ad6532d"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "896c607a14b162916792ae78a997bea7"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "900fb0b3a583ab826f55c8df77581412"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "7d4e0c3f64773dcd77c08ffdf664b79f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2e6d9381341a42fdb8e8836fb0112cc6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f12dffe52ef9ef4514685fbee695bd0b"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3cfac71e7bdb9a4128449084d7c38d1a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "477a6d916e461c5de3209b5c3cbf8a79"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "18c7c077e06c4327dd6dcc242acf3e8d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "646ad088c24abadf729538910e073f06"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6ec6beb5fd1450c094b03b30c1a35fa4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "982e74be4d76f3980a8db549a85b9ae2"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "2287ce5ce816c1b356cda0e4a14d393d"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "fced84ccd574b8ebaddefe3a132bff91"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9d88ee0b621c568f3d0531117bab89fc"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ae882922ff5f77be8e6d99bbbeec3207"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "cf1723d6b00ffe6879038f4cead73382"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "efe8fcf8bc5648b103fd4d249c698bf7"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a17af8931c3c7d703daabca36c099b2b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "c3eafcb166793d064292446602e068ac"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "68cf55c5cde0c2486f6cde2bd3ecd9e6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "bf2edc5c7a8c1959919e410a5f73ee1c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "8456ebe5a1742f958575e5cb9f50bea1"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "9e06a91aea77a7caaac03c46ffed8a0a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2fe8d837f2df76577ef4542287e856e1"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "14a6784145e4f7d29a2a0a3dba499b8d"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5bb7c4f8d8ed9dcddf039a14a9e8628b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3ab54a44cf8f13b4e9b061230d8491f6"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e20b079bd27bb8cd4be6404eceec9ebf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8c95e39411fbd7885b6e9a96041e0d32"
  },
  {
    "url": "tag/github/index.html",
    "revision": "4e971d06f7865030ff32ddb9bb4df7d3"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a1359ec341125f93d7f6090c30f4944f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fa2b8c2aaac193fec763b215137c2d59"
  },
  {
    "url": "tag/index.html",
    "revision": "95496d27d52342918d421c8009e730ea"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "559e75fb56d4eb5c3e13749133fdbf2d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "b62751e7c44f91ddd0bc8a43b30e5a3b"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "224a252e6914d96985cbced3f7e82d22"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "aa68600f9a0a509466a229ca6039d935"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "4a4bc65872e119a11fb26c17f9131f64"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "17bf6c8f09c7d118325f799b72310d8f"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "e44f306529e0e283b8e98e69606970b0"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "e89a507b04a9da98e3bd767720d42495"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "aa9fc73d384c8cf431a0b1c14385d8fb"
  },
  {
    "url": "tag/json/index.html",
    "revision": "eb1805ef19fc064555c1d5abdb0cba94"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "525bdd9ad9a129a56580ae296d4e5299"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "eea6fa0a7214cb005b33deb5ef842280"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0f706e1504587808d0b0dbba9d8d4e42"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "72ac3ed49a76b8ed6fe090928deadb56"
  },
  {
    "url": "tag/read/index.html",
    "revision": "c191a5f4145a9aaad598e80236b1eaa5"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "35bd4db89e26f4862dd840e7d584e918"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c349be1caeb595d8ee6d20e2c8743c01"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "899a0e5de3d65ac060b0ce3cd4352094"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e9c0537250bf6c47b48b02822c5ced60"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "67e39683b6f3ab230849f1c30657a18a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "3dbf5891aba125b69871dc9bcda6a21d"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "68fc670c4bc7c620d387c9f731fbca9a"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "b8825f97a7b336c444e4b7b6be33f782"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "160f7bd69429ced648616aee72ebbdfe"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "5a81d9e1768eaf300739b7faeead5cfe"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "8c448e62fe7087ff8349c2fffa4a6c57"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "41f0f645655ad6627320096462210d26"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "f9712f695e9da64fffa526322fc36486"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "8e5deaac997f5093e22fe843090e6196"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "df4256023d57efa613a086c62d74ca6a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "b0f9a1e3b6e358f7a01038fb120ac154"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "9f38ae3c2e89943ef7076c080f82520d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0773a0db5e065dc08c0a5eec17638ca9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a350482e9d89f95ef13ae5c65db83cde"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "310b0474b7ba3aabe63238fda15f358d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "95f739716b31e9d42624ef38dbeedc9f"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "4c36f722f3911e5c6617382c85abaf40"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "3ed160ed8e028b22beb33767e95c6bde"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "7f37164db5267ef694dd33d7fe76a268"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "94b17c6dea7c57d4709ffb76f6a86a64"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ea259a1d3cd081b117da2492de72060a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3657818d6bde9bf1c6383c249675362d"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "4fd0f673b600a4590e0ec3eabbe12f6b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "270018250ba183020fc253c3a855f3a3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0163b177f29fbf735a56144f92d3aa79"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "2caa9e0c4175d886dc2b3fcbba9a0fc8"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "4273a47f2561f1c87eb953199fb9ecc4"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "29996a55cb1d0e6efe28fed08783df2b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d2153ae9b830d6dce480dfad7894e333"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ff879de9234e9c86029c803852fde5fa"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c49d3067018809dea20477d9a4fa90b2"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "856bf6388144457970d47b4e0e7c537c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b73f63e5a8058a606153ed5b60a8a6cc"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "74e1513c10ab1372611f17ff665b49ef"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "7640575cc51adea29010d4a7c8fbf2de"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "43996b61bd5c0bd2009048c01bd5db47"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "dfa628ac3dd7031a692d562601097543"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "c637f4da234a3f55ff986e96e9ee4f92"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ba401cfe34dae93efa9e43fe8471766c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e90e63251ae5c7159828efd4473a8e2b"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "b61052af2e7cd345b27f735526170cd0"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "68caa41c347a77f73d30a68175bce655"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "48c341116992dc92db2cc820a3243d74"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "a02002c2eea1211bc29f2982cc392a8d"
  },
  {
    "url": "timeline/index.html",
    "revision": "f20306853b9d79e1985a28adb5209148"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "e39b0c72c2f28ce2add29509e5ca424b"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "c4df598ac1aeefdcade3d7566cc3a237"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "00defb2bd6c1442528d890b9c4aedb55"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d430a36537ab0a2c84c9599716130960"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "48e4c6b2db7692a09528c39982e0919c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "463a299d5be9bf98bb43c46b8fc34942"
  },
  {
    "url": "tools/html/index.html",
    "revision": "e73b699ee3c89bb46dd94f6aa33af16e"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0806724cf6b8f4ce76827c0a9e6bf30f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "cc519399fc7f4ad34dac490a34888b8d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "bffc6ed500bb3e51f3ca0ef5ea89d05b"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "915cacde59e41a81315878ebe6c5b84d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "5d49021f097f03a2172532535ef604f7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "fc3092f386d1209053092a9029815c04"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "ce3726301e883248576fd7c8643eee75"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "c25ab16e3e7a509d751ae0d3fc3ad16e"
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
