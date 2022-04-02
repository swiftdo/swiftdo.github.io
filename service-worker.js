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
    "revision": "0eadb46f7273ae5c1f29e67bcb1d6984"
  },
  {
    "url": "about/app/index.html",
    "revision": "b8ab6a5450ecd484ac7ff204281e62f6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "56adecbd1df5bd0a2d7bd34453ded0d0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "95aff1a56297426952ccd78ce0de24c0"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "bedec83857abcf0dea7dc052c203a44e"
  },
  {
    "url": "about/index/index.html",
    "revision": "400f5c8853db6299735a1087e0184dca"
  },
  {
    "url": "ai/index.html",
    "revision": "2ae23cd407ef1f4a328dc32315df09fd"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "b49ba93451f52ab085dc20e008709570"
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
    "url": "assets/js/121.c9cecbde.js",
    "revision": "c1ff8e33557f5fa0ceeadcf6be778e26"
  },
  {
    "url": "assets/js/122.71b56c08.js",
    "revision": "42ef3e9916b578102063eaec830db58c"
  },
  {
    "url": "assets/js/123.811594a2.js",
    "revision": "e1a4bddcbcaaaf6cda3e89bd206f884c"
  },
  {
    "url": "assets/js/124.13d44079.js",
    "revision": "5ea8bef30fa715d0ba4d91d4a5e3a378"
  },
  {
    "url": "assets/js/125.fcd19bea.js",
    "revision": "383955860d5383c397899c7ccdc337f3"
  },
  {
    "url": "assets/js/126.9aa79567.js",
    "revision": "4b4059616faa020de0d0564545e489f2"
  },
  {
    "url": "assets/js/127.ae2ccd5c.js",
    "revision": "d03376b531d8bcdf0a87f4b4348ce742"
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
    "url": "assets/js/145.cfbc1c48.js",
    "revision": "0c641abbbdc9750ee249d737750fa8e5"
  },
  {
    "url": "assets/js/146.c604d237.js",
    "revision": "53965131d0c57a65da4c4706f84ecf83"
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
    "url": "assets/js/219.c0f204c2.js",
    "revision": "df77fba615717d7ceaac4ee3f149762d"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.3ad0dd76.js",
    "revision": "68e024b37ed2ac0e9e05aa645195b472"
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
    "url": "assets/js/231.4fcf4425.js",
    "revision": "00457cd37bf698fc1200b2e87028853a"
  },
  {
    "url": "assets/js/232.7744796a.js",
    "revision": "26872cb1b77d7dfe624e9caa56fb6b45"
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
    "url": "assets/js/242.c888f372.js",
    "revision": "33e769fb6533a92dc19d38ddc5d1fc90"
  },
  {
    "url": "assets/js/243.8c40d09e.js",
    "revision": "fe2c27b5b0f4870be6cfdf7258dd1eae"
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
    "url": "assets/js/250.dba2c0f8.js",
    "revision": "4ada60d7c9a57b43a754799244b47c09"
  },
  {
    "url": "assets/js/251.ce00bc3a.js",
    "revision": "4bf445e12c413ca2e7e2cf83a539c138"
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
    "url": "assets/js/261.2705c1e6.js",
    "revision": "279882bb42ffd7c6a5517addb92cbeea"
  },
  {
    "url": "assets/js/262.767c0c60.js",
    "revision": "d91283b106536ee5e40dc56185c52fd5"
  },
  {
    "url": "assets/js/263.a8a9a3f9.js",
    "revision": "63f9180f852d622c8a832c4bb1e55701"
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
    "url": "assets/js/app.4410693a.js",
    "revision": "148f2bf8ee6c3b2e7ea6e70af1d7e878"
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
    "revision": "11e28974cbf32a102ca5e6c1e3663cbc"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "936fab58df7381216065282768ed0750"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9bb5cde8c5ef9869069d005320d79ebf"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f1c952d7c7f718f7f06b67c65653f354"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e7e263ceb6c618b2f6fa2aa8261a37b3"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3ff8210f2247d5cae6ba28cee843456a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f559d9a3cc630e55c23c9324f501e640"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "324a620b32a7f2a61ba52ffb958e0af3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7439fac6c41607c9830592d61e428919"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ac3b4848bfa56ea9ef355bae62a0a7d8"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ba1208b6b76622f836dec653fbb6e8f2"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "1591aacd1ebce38535b10214d6706253"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "9554edb7498b70f80baa0acbc4252bd8"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "6b3a3d7629d136cce1441745a942c070"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "2744072d4ba4dba4d895a049e91dc2bf"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "4efb72a135e34996c5020934b062dd6f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "ebe95906e961f017fb1c3af3a72ce59f"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "1bf7a0284d3a1191ff015af11a72f183"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "45b04752bf7bf86bc2284ee81c207b03"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "06e845877164c7a6a8e3733eeb4af1c8"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "ae59efd920baa3b2ee6a7656fee10391"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "6c81b570c2f73a21911bccbdc610f464"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "5f0e3fe5416ed8de69e1834e49cdb892"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "509d8a1521b00e45ad11632d5d98965e"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "75e8f589e1ad1f760ff0cf621f4c56af"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "8919dc23dda9fc025797ce4085bda282"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "833a6bf76da8c5a343bdf8d2b6f90d4a"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "99d4b2866dc5a87a0628d8f17ebc84ac"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "1f6fd7072dba476b15e6d194be65883b"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "3587757dd4606bb3b5f462f408487c5b"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "3352eaa3d958c1c408b0730cfa0e0bfd"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "2ce560ab4053c116bd8b81eb05c075fd"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "565ae63ef9568f5942fcee9168163a54"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "48a614a9691f97215d7309f932dc66a3"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d1b21f68c967c1eb720508a9e59a2913"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f60a604d4a720c0c5eacb36034eb9451"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "4af69bf06dc3abb13afaea16deae7984"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "f05610f75e86e91dd7183a7d1aacfe5e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d3c2f9df781cb307838cd8758e04a144"
  },
  {
    "url": "basis/os/index.html",
    "revision": "007c15290678a923782ad03589ccd7c1"
  },
  {
    "url": "book/index.html",
    "revision": "ee467268eeba5bf0d1e9d30fc41cc779"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4d7aca4785203f8813c34647a5f48e6a"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "6f3e566cc186aac1d1385eddd23c2de1"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "311f46f0ffc8aaa50aa3a7d4d9c345a2"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e28e7c51777803e2b439bbc97d00be72"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "d573b9e18a2888f5a4ee0206ae875df1"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "515081b670d3921fbd888067dc8fca5a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "e446a2d9c3773cb3961bf43a1d024a42"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "27c2c2f5a02c4d0103fd7262f384be50"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "bac7e02bca4bf70bfeeb15811a18a92d"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d99496e5a8b5c205f6e2490bdc6f2db1"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "a384d885a04eab85b929a467e8e303c1"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5f3e24860231ffcb6916b8af093c8b0d"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "0b6c3861f7eab011bd53a432b82547e3"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "eeb5794867e228148fa9a12cddd25489"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "3e9c963dfa889f5d7c32a0e52b067b39"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "a7022b06aafb3321b60c6646b9316ea1"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a23eb6e96cd037c7884a3bf91635249e"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "9e4d66dbc2b6e0964cae204820f40dd1"
  },
  {
    "url": "c/program/index.html",
    "revision": "3ce782aee4a02a1e90162b3acc8c32dd"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "42104790974c976c598700e66788a21e"
  },
  {
    "url": "categories/index.html",
    "revision": "425972c7bcb8a3b95e0fb03c8c48448c"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "c693c2dd261f2a52001f603bbcf20e36"
  },
  {
    "url": "figma/index.html",
    "revision": "be4ade581c8198abb59606a6e717085f"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "34494706c15eea141c7cb3c85dbff130"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "31a99c40e5e8a2e79adf2b554d2b0468"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "77a6de9402f0c4bb02ebae3b4cd8a9e3"
  },
  {
    "url": "flutter/index.html",
    "revision": "e8bdd5bb0423a534599cb372787709c1"
  },
  {
    "url": "flutter/point.html",
    "revision": "f089ac42127265c732270cd87be39b8f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2fa632756e512cbab6f775ac37fbb13d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "abe63f6f54b58b1b45aa61f8a9b0a686"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e1c3abdb8ad933601ba48e38fd69be21"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "0ecb76fad1762294056bf6908c37594e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3bc03776b855685c261fac51c18cd932"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "43f208f9799c4e73255322fac5061a6b"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c0c71b8e24f1f5e02c59bf2f744ef226"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "3457702e3e4304ba56b695295e527edb"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5ec2b81736f45b9b111f15446cf0cca7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "9a091ea2cc5cee2b7d2f4a0d3eee1623"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8058fab52fe53c43a796aa66552a86d3"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6cc6d06b4371b66b9305e9e8e6bf59b8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "bd5342d893229286eca3d77281e04221"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "37338bad89094db4e662f44263e04d44"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "27599e2cfb685f15cc0898bdf745767c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "b10a4f3b8760efb52384484be3f1948f"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "1c5f0bdc70c2fd61925c364c87f52e88"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "ee143cd4f6e4da60a9c044ac2ea79d9b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "46a1e5d178afac0c54d6b6f3c203252b"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "281fb1523cd1bcc0c5a9953af791f3b4"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "c12ca7aa9283bcca87e4293675fcd5c7"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "6037110ba4af29177914cd4aad8c25e7"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "940edf67ff801f87e6e2bc469a03c0c7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "8a8a24e0fa6b74f60c6f6330761db4df"
  },
  {
    "url": "haskell/index.html",
    "revision": "3480ada3fc099e9c0911dbf90561d90b"
  },
  {
    "url": "index.html",
    "revision": "fee84d19c108ed15a1b4f668943aa292"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "454c7daead1368232a1b2b00cbdc96b9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "557ed749aaf5b50c67a78ee570520f23"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "0496be090fba546747a59a2232d5a23f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "8f4acb65f3edc89b7471bff0d0f67930"
  },
  {
    "url": "python/index.html",
    "revision": "418937a9c4486c4d1755cf6f8fecbbbf"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "70fc870b97d5d876cd1cc01de308221b"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "b59672530feb7f6c8840efd1af5942ab"
  },
  {
    "url": "python/python-file.html",
    "revision": "8504c9f714016972156d881a6571b3da"
  },
  {
    "url": "python/python-function.html",
    "revision": "85394394082e7875c4d50408ce3682cf"
  },
  {
    "url": "python/python-generator.html",
    "revision": "4db17b2bde2c0eab64ea6c1aea51ad79"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "2efa14aa10bdd51c66345416a65aee05"
  },
  {
    "url": "python/python-module.html",
    "revision": "62e2253fbc25cf192d6334d43a893380"
  },
  {
    "url": "python/python-string.html",
    "revision": "3d8e1c66d6b8a19b3ba9568a9c5aa91a"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "6d3ddf1eb2465b393e025d14f79dc3cc"
  },
  {
    "url": "read/index.html",
    "revision": "267b8885c0d91f1ff7e82fc89abb75a6"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "0207aa0065da42f315ddde28d7e8a40f"
  },
  {
    "url": "swift/better/available.html",
    "revision": "65fae5ce28e9a1bb710e1388f104521d"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "1c80d7556fe3c13a841460442345659f"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "d0b3060eecdc29e9a14ed8982e7a37ab"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c3c12c7a0be13bbb1d6d6e7e95948502"
  },
  {
    "url": "swift/better/di.html",
    "revision": "e49523952fc185b9aa17de9f2ae32df1"
  },
  {
    "url": "swift/better/index.html",
    "revision": "e6b8e93c1be47c4b84e82ab3a22516e7"
  },
  {
    "url": "swift/better/last.html",
    "revision": "d6d28a6ebfe4060b76ae56fcedfd572d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "0d047fbb437b9db1d2e0ccce73c72474"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "084dfd40a947c8782a55259ae2fd31de"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "b28d6a1339eb0cd54a49267c418f4dc9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "f5d1714ef8ebf47c8edda6034f2c2e90"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "af0262920cc044194c653fa4881fdaeb"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "c08dc5566310a9ba58c30123a323153f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "5bc33b9a00fe3a25a69a28108efdcfef"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "144dcc0794967ec1c8b3558f9863969d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e279038e2addd21e0cd6185f1f016afe"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "76f2d9ded5a07ed6942c0939eef08951"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "3d4ba211f908e66e53b2d99963133a82"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "02421ee954841b58bc12a7b0fc86bf3e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b7d4242e57cdde83dd3de4d429524a33"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "94e72142855602fc467832558aafc4d8"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "9f2c1fcf843e7bbd6dcbc76d20cf945b"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "7db3c32c6f416880697cd10a8d2f7e4b"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "f04f70d7a648a308515f2bd09802f438"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "9feb5a88ec2bb126ce4f0b627d6d6250"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "493fe6b3b97369b93e6f04f8fca5514e"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "75b6a1786ba864836d0d02e6ff7b7a2a"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "a46e7db40eae8f03b7accdddd6b9bf46"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "19111e0dde390fa1a93962175ddf693a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "891263f5116efce5a7915b31e510abbc"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "d54b36983c61d89d11d14e1e313dd70a"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "8a9bd014700c1cdaed0aeee031f1833a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "3a238d283ddef05b4cf7277f5cdec36b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "f3534479ce6f705cfae57d0f76c66133"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "2cb6fe2b4944d4dd7f1b4a8e31956002"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "c865d669bbde2f74f651a8f031f498b0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "07760e18cc3d0bb254a6741d4d072acd"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "9293ea99e012cc0f8daa285de4e4446e"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "295e8e7ba587a313a66cc436f07e3aa6"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "6ba6e6938ddad6daca57c8beffadf9bb"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "7f2d5f28f3f4f9bb4dd76de58f55e9b2"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "566adacfe43cdf940b93f2e60fe6a4f6"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "8e6361c4b5ba4b477641bd6bf2938eaa"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "071823466b57fdb935ab6efd47babaaa"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b6dfe6f1bc14066239e81a37e30f7aa4"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "cea9459b26866a8d5db427baef85e833"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f8715852a31410d8a38312f2c7753bcf"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "6734ccd5a551107759ff4bfa2620bdfd"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "1a58c517e2753d5bc5056c367631467e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "88be87f2e7a1eab0d4f8cd193ea7e52c"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "859ed7ddb192d73f0d1b9d39bf1619ac"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "36bdf4f7ec59a46170483f43ac813c19"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "042ef06435624dff2b9901b39f0e68c7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1f0dc4560301f440ca19e2028a7eff6d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "fd2c92f8ab9d27995da62b5a8297e3ba"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b1d15c83b909ded293b4372571d935d5"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "9db77914f57f6c2470faf7d9c6c81bd9"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "3e5ae97a9c8f4ed4501b6832135a7f65"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "c83208f358dd6c0ca65acd1d50363fb7"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "526716708018a4ef03f37a839f222bef"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6bce8667f7b70d6cf3e494933332092d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "382db960778095d06bd97fbf447b5277"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "3adbfc5a1aa6029bfe0ac77c2bdaf598"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "261f46a5e627671b40f9f1a3b2c8ed09"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "25eb580c0796b39a816b27d1cc66d25e"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "a466259243a61b8eaf56f97b26aaf19a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "9a7580c0f1e0e359996401460fb32f4b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "9f0c458682a0740eb9ead2dfa4bd9f66"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "faa3839007ded7eca1f876d782fb079b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "6dad7539ce60df2fa4ec7e1f3acddd55"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "eaf2eeb14046c9bdf850902cb4a8afcd"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "2afe4971c20b69c73e3c02d52c53be5a"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "540745f7a63da03cc91d143c7e662d7a"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "368ceb6b883c4d0fc693f9dd15321661"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "66c12971a2e22c1a6341f4699cbcef4d"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "c2887aa90275a52ae697f99ff52f8462"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "c7af0699a1c8c7bb8a7c2c2daa0bbaf4"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e966174b339bd64ec80f508e7d87876a"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "710e91c041ef16c2e5af509b623e2abc"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7d5149f44b4b742a5defd4700a508d50"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "7095e597df0970b8801f10317d85849a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "b2ddabd28e3c528033e9d47263469048"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b08c48e761a186ed41837308fd8bf962"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "ab1e9cb095d0e02683dc2abdf4634897"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "4991b31fdffbe361ce26e12a54fa39a1"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "badf5b086dbb3ad9109822f640d94db8"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "2f490a930c7cea8bb755504bd75e957e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "53045986b1218820e22e2f0625415333"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "a09c381599094924b0563eda88ff1e7e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "a73f53387c145f843ad74fdc78942e5b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "73cee3b9b67236a96e99909bbe1b1b63"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "1ad08044b0217a0aba3a27fe6af9b8c3"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "a281c157751888969f760ce9dc7793c4"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "1dd9510d073b0f9409e1e681f380fcab"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "310cf9d3f61fe65bc2bf0d24973eae3d"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "74efbb4d69d4f93abd5db3d53c2b893e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "e5a31df8d69bdc035485932a8fa96771"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8d3715bd58867d8009d3e9155376e322"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "23f5a6bbefae12d4c337ad8e703069aa"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "9cb3e3cb78468f2b3c75a0bff5306aa5"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "cba2442719d1457a214eae1868230276"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "de521be7d2ecf5450bf841781f7608e7"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "0afc64722e2b5365d0b09f84f41854c9"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b15265f114367683afa4402d3085222f"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "23c7716f6cf4752b1d46aa738dc0f1d8"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "9c6bd9b930bf5af7aa2067b3112a60d7"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d48dd264b800d6071c82202d53d57f5a"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "a15d52c9ec57118af95d9169948b807b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c4911d3ea7d4867f5abe623302fce62b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5813ad3c72596092bd82591d5bb473c3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "59851183b7b68f94c9f9a7756fc91003"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "25025917ed81a2052aa38f58c7c04887"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "6131e1d58009a4841cc73cd28f365807"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3e868f48867a1292512b6bbffa6e5274"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e2930c05b29d21ff12e1996b070768a4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "82f29c3571d09c072ba2d49549b5e55d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "1184ca7f6cb85734bc8d1828b0675795"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "7fe121fdc604790250b85d041acb2094"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "309a3c7a5afe36c8b8bd630df64a70ad"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "279af27738fdebbd73a19e0e323b673f"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "51527aac2dbdb4bc8ccc8552d1edb3cd"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0a0dd94160f324c2d2be2e8c26b39131"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "4177163d3358b617eb94dc768ebb1355"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b22221086ff0a09f2bc1ad86753116d7"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "058503ac0b5382a9b0855b9417873c92"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "399047a7d0bfdaae38cc2063ec10aa9e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "7bde0caf0d4e5e38c36dbc15c00ef96b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "0bf756800cff88e1db54cf46ded01c2d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "76aca265f079a08af7bcdfdbcd93a89a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "ef2fb43e5bd199ef7c173b6cbe979675"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "aa513fcb6f1068d13f00daff1a2f251c"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1d1a4ad3a0e286fb9c3e45623500d352"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "aac430e4ac3fc3051b35019a2c337c3a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bebc7b1594d1dd73d1392ff7b7386742"
  },
  {
    "url": "tag/github/index.html",
    "revision": "619d2925f965bc42e9ea423029ab665f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a39a91c73f6eb1765a821562ed37ab41"
  },
  {
    "url": "tag/html/index.html",
    "revision": "336dd533b86fe4633d3880621e641e18"
  },
  {
    "url": "tag/index.html",
    "revision": "50814b0bacd9a298ff8d7e5f8e65b52a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a8eb2685e3ebd62baea7c73269caf2ea"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "675518b20e337e46d52261871435503c"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "c847bf3bc360fb837e10f80bf93c14bb"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "95e18f658e5653d31e0f711de8466e0a"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "2e624a50529ff68b26a96c63ae4c5a69"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "2a7920ab8b5975dbf5c84e1458c84a1e"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "c7a553f2f447959676845df8b83acb50"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d416650c75e082b55b4e55d489fb0faf"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "1b18fee7f68ae1346729be72f4e61a93"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e38a2e33eff6d083292d80608f2a87ad"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "aa7671e96fe154190de1b65801ce8044"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "55ba9db7e7337247e8f0daae85e61a46"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0c97e6b2dfee8f190530ecad1095db87"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "a193782273b0e5d77eaefcd7d4b7acb4"
  },
  {
    "url": "tag/read/index.html",
    "revision": "22f7009c01de62ae43b6e1862f75726b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "0fd438f1ceb7ae5f07a2cb630616e9cb"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c5d53aa16470b47e6e95319800a3f921"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "203d482250a852254cfa39b462ba37cd"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e4eb852e1c62d98147073478579ee995"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "43a86e73b9db82e7b317b0f1b89f3111"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "105beee9387b29a0986a95d3b6394174"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "58977601235c6aff5b551329ad068b86"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "88924af7f46232d0f4595c29e050c59e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4ab1d33462e35364811f70cafed9057d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0ad8782ac37e0ab2b673f0d41a56b8ff"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "36da065381f9a6fae58efddd8c0f3340"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b72c4e25d71845641b83ab072fa3fcc6"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7d97fff9f1c46ad096b57494091d5a09"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e8d23da9a2cdedcbb0ed2eec9a631c36"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "57c90d00c6fac972d3c81013bf5aa31f"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "bd1bfbeb9970dee784161bfe852a4075"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "c57f672dc5f23d8cacf3cad0db255ee9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "26429030a9d9614ce4e9fc2019b168f3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4b7f92476b830b962abc039b8a677b44"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b23687028ecd028bf654f8957ba2b8fc"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "6d44adc3040e719c9ddab389ea8ec83f"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "9c943833b1891035be679ab0fed3e3d0"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "a2e7205d92e07f220943b34f3eb17357"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "afb52e27a4ac4850fc6e3d2b9f81b910"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "9c75bd3d2108b603670d0b7672aed3d2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c3235eb7a0e228a010fb0f9a8b8fea80"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "57cb868428ac1cd466ee8b0ef312d0ce"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "40bcd9bd9293a3eb75e53dc7a66ab451"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "f3a42393c47db02afa3a77c7fe575c4b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f3a643ee87cce1079d2adf26607983b2"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "0c13dedfbae662e2ad1bab5fb6f638fb"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "9239f60c46ed69f128ab7168c56f8a7d"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c7036684434ec9d6da9eda5d5efad10b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "94e2db6226222c060fa31c052742ef81"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d2e9b14f069afcd7f0f0e27ebe64d9fa"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9f67575c67db3e5d47fb0b045207c3b7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "4d116e977ef4ed14da8408ccf66baae3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "eed718c962c193d67f53bfb162456efe"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "329cbb4b39a0c09ec873065ab2945cb5"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "b9a068675fd0fb9926e2221fee2b323d"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "38b10bc3e766b48413cc91c66d35f84b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "23cdbc2ee40d4fb1b6653485a6931e16"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b7bf4b45a6f2829d4a20d746f7c1f8aa"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "23f6d6b7dc94de5692ea426b01415e3f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9d52c732d1b8f5576f9267bd8d468310"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d6995e8dad5901923d026ac4c6202d2a"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "e850126bf99168856af998cc1de2d5c3"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "1eaff6ac6a2e073609c20d37fd8f578b"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c0e3fa2c7d2ac26f4a423a626d3aed3e"
  },
  {
    "url": "timeline/index.html",
    "revision": "50a959df1cc3c6134fb03b2bdf536c85"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1c0fe34f5741a271efbf9880c33a8947"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "8d889e926683bead2e56ca677186ad28"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "6a713477acb01319884ed7308b869461"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3dfb4ea1634725af2b79ebf50d395478"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a20a8768d29e585484a43537195fee0b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "976d06fea22902b1d9a988c01765a358"
  },
  {
    "url": "tools/html/index.html",
    "revision": "26ece73b0cdf93381e51efc8054da5b7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e40bebaf710625509c5606c3e20859fd"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9fc8590dde354bf8603083ee1bd2baa0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "6a1a50a658eeec1f0c27a6214f895e10"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "cd5f00b135c7cb0f386e8d0cf4cf76e2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c59965461b2e60c9a8fad1fd31c6a620"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8fc4b9b2365cc017ac53b304376bd96c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b1b0995d74678133c0571bce9fe622e4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4212464b5c7ff2e8bce5cd6cbf035f50"
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
