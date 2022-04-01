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
    "revision": "6cdd155cec78cd21cd4b20ed8d609186"
  },
  {
    "url": "about/app/index.html",
    "revision": "bc8c6258247b07e09ee7238c16003292"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "36cefae2d8b2f670d7f29cc6ab2b7594"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "1a4fa2b1ac5e218a9d6f4d86f5035a98"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c05544ffb9f3b8d8003d0643e1d2e6a5"
  },
  {
    "url": "about/index/index.html",
    "revision": "b781c7791610bae92f2eeed2602aa868"
  },
  {
    "url": "ai/index.html",
    "revision": "05a34cf825da6d8f9c02a63ed1dd0690"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9928406525d0e984d5e3e02cedc52900"
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
    "url": "assets/js/121.dfd2262c.js",
    "revision": "7bc5e65d2c97ddb1fd133eb5184370de"
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
    "url": "assets/js/132.b31c672f.js",
    "revision": "ea02b0762e3c1ca84fa3b2e92f1d4032"
  },
  {
    "url": "assets/js/133.26f13a2b.js",
    "revision": "1369e30187f97c3a359cf6996857f30f"
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
    "url": "assets/js/144.8f54bfc2.js",
    "revision": "3ffc1fca263b97fb405e401672b145d6"
  },
  {
    "url": "assets/js/145.870081fd.js",
    "revision": "24ea499af3da2c6324bef5567281c2b7"
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
    "url": "assets/js/150.db2c9ec0.js",
    "revision": "8b730a8f77f495d7cf602d58fa50ebc4"
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
    "url": "assets/js/209.0a935aa5.js",
    "revision": "7583c5a72fe64fb16da269e18b0a1003"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.b4b332be.js",
    "revision": "7663b9946710759fd09a69ff5a7567d9"
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
    "url": "assets/js/226.25e94448.js",
    "revision": "046fb378cf75a3e5630b473568e29f4b"
  },
  {
    "url": "assets/js/227.98efa6d8.js",
    "revision": "37f87cd90c702a51ae0ad938a2871288"
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
    "url": "assets/js/259.56fc37a7.js",
    "revision": "810dc49e15bfe4beff191b4b98ebd571"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/260.bc93bb36.js",
    "revision": "49e48a2fc199a9e40832724d56de2f7d"
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
    "url": "assets/js/93.7594b9bd.js",
    "revision": "e3f99a719032b4803b88c36cfa25ca6f"
  },
  {
    "url": "assets/js/94.1a8ba134.js",
    "revision": "9e5a862b9bdbabe41b97ce52d6158929"
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
    "url": "assets/js/app.5ddefc01.js",
    "revision": "13da379166cf3facdc3ba64df6f87334"
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
    "revision": "9876104b16b1905ce06e6b682a6b9700"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "98bea1edd5c864a2b9afc9911b0967c3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d88876bc4b46a98cf67ed966fff9ac28"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5b28b25b340131c8d1986a45d68a6977"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ad37ed627b310b7701e975cdafa288c4"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4d5a50e31b5425c73217ba9129f44dda"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9bd6dc49c1bcc9e6587d8992b147d9c6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "dc5fdb562d8f623485551da8c92956ea"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b67df235b495bd1a85fb90b45179e5c0"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "819e77303a591f59aced6d708a0525ff"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "fa84ed986cd0fd4176a9c53d89f823f3"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "794cadd1883f2fb023b038b9bfbb76e1"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "8be49befb1ac6dd3be405f7aafdfff24"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "7038d572ee73d5e41c9038eafe293a0b"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e3c908dd71ba9bb0e9cd455f47c74587"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "984d8f4d6acb279e55689739ee6c77b6"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "6914d86c9e90d1d9f06b86c78d54b630"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b756258339ba6935c56503e53f4ca20e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "227c5c69eae1341eb51f15da276b50fa"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "25589cc5acd87b523f438e94a5d569cc"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "5622abaed5870c54ee841af16df3a251"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "66daa55fce624dbc2402c4d40cb55ded"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "d79a33b533bf70e7737f366c81ce452d"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "79a5087815cc4ca5acdb7c3535e6d4de"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e05af13009a9d355480486fa4077d65a"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "c4122f497a07d3dec9a4d0701d85d290"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "f91879dc79320d5696dc7a0f2a4166cb"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "0a5a0f737c3854305e716e394f9cda19"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "5089d17177384d830c0082e3be0c71a8"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "4700e99bd491e11bc7e1653031695ae2"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "7174a9f4665f8a9129059470e4340482"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "7cf34d7b50a2849700e6f40546a0f011"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "fcf8930606afe4d9386cbc5490efb8e4"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "0a28723f4964ff174de70fddc85c95dc"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "719060ad560f664b183d70afb85f12bc"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "658ec5104696b9c6e999d0afa16892c2"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "88c1291efebe079e7afe3ada3e824736"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "8cb502cf0e62208be6817da8ea0ed276"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ae5e83145665a60f6c6cc08c5cdbe822"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3fbcf9b4d55982a5454bad982a3c3964"
  },
  {
    "url": "book/index.html",
    "revision": "d2c09a9a40a30992fd9dde17a9f53e8d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "57ac841f22c08251e92f6211ef484a56"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "804339a61ec3cf018a1bcde0889301f7"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "7ae4bc2f04668572d0aa2a703433c218"
  },
  {
    "url": "c/audio/index.html",
    "revision": "0d5e35e69ef45b80791c928250615c2b"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "6df5a28ec34962b6501c5b6870311772"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "395d9df0cd5dd14e9465893886110f4a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "f32c2673609eb833598803f6ca1f5167"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e4f0bed7d54a5cca8ebe341b50fbee23"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a127cfccff43fe92f6b436ec06f0f7a6"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "2e9058dd8f43487f625c3cbb32d51737"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "d0bafaf872c9efafeee621b18af9e030"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "fc867bdb635ca4c82cfe957b8d3ebc2c"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "d9b817ba04acbe587346fc632f01cdf7"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "0a63736a22ed269c8bddf3c6a9c0d2ab"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "4fee45af4a540f84624e3a5e46b62d6a"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "95899ecebad6c019b54a27f72c2d2ffa"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8d0500f29d3f1be90687df3a9835214f"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "cfa864ebd5704e050268c53318c51ebf"
  },
  {
    "url": "c/program/index.html",
    "revision": "b3063a29bdf2027224f24764c5f55a93"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b56e5211c4c53a303edec7d2b776140a"
  },
  {
    "url": "categories/index.html",
    "revision": "39e560a58a32174f987bd8c302758a29"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "8c97bbbd625b0da774b8d430aa8e9353"
  },
  {
    "url": "figma/index.html",
    "revision": "514a1d40a7d47a8dbe946adacaa368b6"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "51a30ea8d2a7126a94398316aaa5b014"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "0b5700345a173456eed8fbd20a254945"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "1536fd2b32706d04f05d47b9bae38b9a"
  },
  {
    "url": "flutter/index.html",
    "revision": "24ab6494f70054f6ad3d76f667e2d5d0"
  },
  {
    "url": "flutter/point.html",
    "revision": "78fcb1429a8c17096ad99e3b7e637ca0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3b04ea008ed0eb45f2db254040363469"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b668cc4b12539cbbfeee4fc6bed57de8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c135a286c777ee18fa5ee2199f536fa7"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "54c45ff8061b64c17c4ec3e021406486"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c5a9d8b85a09f670908312bd817c1d4a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0a99b161b0e89453fb9ed22033fabadc"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "47c1078e8e59671b63f20b4c2e3927aa"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5c3d363771a2c6bd8c4f781f37d060b5"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f4ac33139dc43f150a01cb936fa37fcb"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "c21227c88e4e81177ac510a9e9be6698"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "79da8cef98c00322a1b46d5b57d961f7"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "d3c18b4b221ede3c7ec3761e3bfdb700"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "96a66ce08a7a6b72532b39f66f666bb9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f44fe2c1fbf473571f4cdc741d4693fa"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6b602ff6840754984e010d0264ec92b0"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "5b5fc7a1b4fa34ba6880b7c752236df7"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "c6bc2fac80281cfc87d3d7363424030d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "2cf5e7d74cc82ced70a49f43885ee3d7"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f811cda8e5aabf261cb88f178a0bf313"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "556cfaca857f37e98a24b3da2093a0f2"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "ab51e64f27fa7897341ab25066b2332c"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "18051159514e9f1c9a6473455f83151d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "534ef8701ceaf2a70eed9deba92bd8d6"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3b114877d81ff7d8250977eec30ca758"
  },
  {
    "url": "haskell/index.html",
    "revision": "b597cc31502b73881f9f0ae591b80feb"
  },
  {
    "url": "index.html",
    "revision": "67f846de89a4622b55cc8cbcff0154dc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "763bf09512b54909c22a1ce851825f12"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "e45f199e4a73cd6a4c80acc13f817798"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "2ef5f3343ac6b2b2ec5419c470637d7e"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "8b1eaf0d5b5115dfa1d86516c287bdda"
  },
  {
    "url": "python/index.html",
    "revision": "31d23e4bee562cafe53191c33b42a1e3"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "8f3ab0fb4f31db5ccca656bef58692ce"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "6438c2786a1a1d499b37640705b3c8f9"
  },
  {
    "url": "python/python-file.html",
    "revision": "8ed9ff7327cc949a8c30e99e03079761"
  },
  {
    "url": "python/python-function.html",
    "revision": "5abe832d9a0306d2422ba0bd75fd7c6a"
  },
  {
    "url": "python/python-generator.html",
    "revision": "5ff02969a3e4f1f9d9a44b800fd8ed61"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "815804da69f241a998c9d3f1733d1f9d"
  },
  {
    "url": "python/python-module.html",
    "revision": "e97928f361dc9322644c031a75f931c6"
  },
  {
    "url": "python/python-string.html",
    "revision": "576971fc7aa399ef80693b386d683c6e"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "259d5656105c866992c5f083ce803101"
  },
  {
    "url": "read/index.html",
    "revision": "c7e26414a4612a9b8bb30c6112a2c436"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ded81e075fd6560b88cf3950a4aae0ad"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2c5b127f5f4976a766c3693eba1b1ca8"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b593a912fe9ce3c2bcfb19d0601691bf"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "63f71ca83578e157c66cb446b26d4488"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "f6fb171b96ae38630024b0d44e079824"
  },
  {
    "url": "swift/better/di.html",
    "revision": "6a2fbce18a86a6dd648adda199e0f9db"
  },
  {
    "url": "swift/better/index.html",
    "revision": "fec7f81f01f53e2bf7896749f00f5314"
  },
  {
    "url": "swift/better/last.html",
    "revision": "2dc6fad6a75acf58640c8642dc0de44d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "11afbda04b16dafa429856a6b0ae84ab"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "952897e0ed5d7f7e6e66419d81830e19"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "b512d51feaea2fb0e958237e6837e492"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "bf5c9ae21e2d35e0080fe3a185e8b9ea"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "be92db767ac474cd236c228a086df467"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "0dbad3e0c02ff94d9f7458b73a841d0a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "da05a2b312087bbe23f85c8edbc71ebc"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6b91850b5f3fb243c33cfe768d2b90c9"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "2582093910f874954629cf3e7e1c0860"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "c85f3b0462cc4e7897435700628f0517"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "898997454a1db1cf7be223084f7c7710"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "12366315557bdec5abbcc985d92e9f37"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "8f1b18698392072617c3d42d62f4edfa"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "0daa927f1fe293361195bc16ffc4b1e2"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "6d97de6175566e991baff64866945ffa"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "3e0a2d48b60f64d69c4c316eecaf2c9f"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "bc4a035c9bd2b6c6107c0766abd3769a"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "0289a80ed38f6bd950886cc614fab086"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "05978cbbbd85f8beb93d8f7e8698acdf"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "ceb94ea9cbc35e8526abfdc27d35dbeb"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "bc47e37c22f7c696be1e10cd0733d6f2"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "3d1b5e95ba9695749df3df062f36ed97"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "37ad149eadb1fd6bc3eb1f8d54ed9151"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "c70cd032c080c3c750d8072a01928baf"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "fcbe35c2e92921cd03f5c09db69dfcc4"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "35bb49563abc2610c6d7f416af2718d6"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ca34632e21576b399fa54a159a18e0d3"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "07d8e5c513b69b0d58b2c5e9df7b5b05"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "3874575a30c35c238e050f58e030e9b6"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f5092f59a66e0ddab4de88e2fb5b7038"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "c20b2358097df7eb7a75c3c79ba86d35"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "d4aa04007aa41542e651d0ede6402b31"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9f7befc74fca41b9bd34b05759c9c294"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "d81cd0f282aac0c80c7fa42433057988"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f588ba50eba9b7bf35736b1499003d0b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "4e8010b79428a6a4beb3596321d9d440"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "3c1eecbd9a5c5018f8d8de78d8e99008"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "ae4a6d9184dabf1865fbf79fa8df3cf0"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a978b24c24628869be372d4493ec91ec"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "447245d3c6eaa9a8a676a0e2ceeb0192"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "a5124a26ff7cd0c8e42adf013bc61652"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "32513657e09bbfbb1c7ee2b82c07af3e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "405ef927ea739be921fa65dc7c9c8897"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "aa53038583414e3efa945f0c12e92c92"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "ca4f18da8cd13cf6e39c2d2c7b2453cf"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "1416e8f842b4c600fada7de93d66127b"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "ebd7d9238da8cc4682f67c4c17d1970c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3cf063c1db3758deb15f9b2979e1f0d6"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c319202906e5c6be1419cdaeffefcb39"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "b29f5e018e491e96f157767c8899a1dc"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6c5c33510b4eb3d7cc87b7b533963c87"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "72af58b38cc181686c08d36f00909483"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "92973951faa853f0076d8f5e5593a102"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "3520157ecd31c6448fd29d2e1dc82b8d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "41736437dc161e6bddac0f2279d36b56"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "64c0cc09af2283ef50a821945387f95b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "37e8eb71d1f546f50c82f999386f0f4c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "659dd102326f1b1db1686b00060eac10"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "bb03c508abf25e848746cafde4a86be5"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "ece8fab73253ec681f117a7ec54009b6"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "ffc3fbeb2e8803dc6adbc043e5144344"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "1ff0a1f9ac159d176ec92e4514287bdc"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "29777d041b71470e723386a5ca77f857"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "658afd5df9bbf4eecfd2fb29c0358a08"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ed5fef343df95acf2a1abc8927ca62fb"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "0910de80c44ba7406cd88b8e138581fb"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "bc7f1d8f3e7fa2cc78d2ae53c6c79c3f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "3da42a64601644258a4bad5d4c852967"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "9634848cf1199b0cc7bc3e49bef9192a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "917a097cc5765766e8bd3d7ad43fa66c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "188d8d86b580bb645544e3de6e61d4d5"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "da70c7283dceaf71853caefc3cd5762c"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "dedf6b29ba40739a07fc919f6a8f62ff"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "449dbdfaca988a26db0f48368aeff462"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "555a1831fb426c4c35b8fde4248ea9a8"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a978c479eaf15c0421f312c26700b1f1"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "5b848b9c24c6b7da158d1e52d7bca898"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "38b482bb94460b5ef5869d97f717ff1c"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c5afd88e84723e17fa49688c3c1a7bc2"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "fb0862c156e0e8752627968eeb794ee9"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "717e374cad26c91f55c07a7b7552e81a"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2edd7118105ede4e76dcb53147c48aff"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "ea6d4e5cde72a3fc284afd390d97aae9"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "2289675a558f05ff77e6db5f3e6b4fd2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "9a1800bacc7d59741dc0362ff818f070"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "8f81143fe262d52d412ea4fd26e0cbf5"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "623d425ecc6b58457914aae612f50495"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "95e4c03478e85c5a055c2c393fe49b07"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "660363d01fb099778551adeb09ebb0e6"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "5ce29aa5170b5fa3525bb3c4ee74c05d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "a240611cbb0faec588dafac9df6eb6e5"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "8079092d23be402433f8e144f346b2b7"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "ce32c4573abac89dd3c6abcbb70d4be9"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "8b57047fb731e4e683970886eba9cfbd"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "df94289a46cae440a645eca49e3961ba"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9302d8ed6b05add6e5383b11da1e7e27"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "0c17b4f9a9a6cab79f5bb07c5f8f98bd"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "51ba3aa7a03006dba072f743beed8a21"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "a35b753c222707f88d6baa4df385f705"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "c1111fa53839da2d2293789d382b265a"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "265cf7bd8e0d4aba04512629c67b6b2b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7181abd2897c4fa7811cb717fcee4482"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "521f0ff70b970c5064d45155b0dfeed9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "91892a1f3a4eff69e52297f6785ef0ed"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c02c6b4e8182ef76ab8f69cba9e65ab0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8891282b68cca4902e4814577826efae"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "044d67ddd23edafe1530e5ccafd58005"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0b4155e08f1c35ebc66d951dfdbba5e3"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8400521c31ab204819f9ee7e6e4be9f7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6057ab683cf506d6a93113212b53fb41"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "93bdd7e7604c02d699edc48c720d9217"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b88fde7b0ee0e7cd230dbaa8bdeb9d43"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c2c8a3094a419249fa9e1539016711a7"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "de9b1df465049d4b70e19fca1eb881a0"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "df640d07fec5230cb5582dea28c248a3"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ae47f83852ed77c9c69e83629b0f52b6"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "c5daf34754c05c2064795ef06a788fd6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "21fb67de323bf729c68196000220542d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "0985f567bbf5b55ad7f3e3af0c253fd9"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "7e67553a98eb18fbef63c5791651a2e2"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "d7f58944ac61c7ef163e77164351cd75"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "ce8ae4bea22ce6cde70715a992ad9543"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "37e88e2ace6106b9190f6f95c0b84533"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "772a87cebbc6fcc60b44b6237fecdd28"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "982a61c39b03faa53c6a01dfe76dcf61"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "866ac773e06c498958ae953077ed0075"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2c4c68de19c3bd1d457db3d2f87222ae"
  },
  {
    "url": "tag/github/index.html",
    "revision": "26db5f32681420c3a84f5a676d560052"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c9d8a378f828fffde3cb62332d82ca15"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6397ab5c86ed10ad39d7a270f539c2f6"
  },
  {
    "url": "tag/index.html",
    "revision": "87ab9b96ddc3c0e49f97c96abc541df6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3ae39f4dde6dad8b520576c9fd972b10"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "a65aa6dd5fb2366a8d66b8d8abac645f"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "5999034d94a2f14a88aaeec392a81e85"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "36e7f7183b6c3d42c906db8d063dbac5"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "12501613f3b58947fd7060539cf3adf1"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "c946a65fad9edcb5f19bb36172c25466"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "4c7a285c6bb4b75bf98e1d3a7df0c7f9"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ae272696d80514e0430b12b5c0cf15af"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "e644c5b36be92f70a8438aa4509da1ed"
  },
  {
    "url": "tag/json/index.html",
    "revision": "0a65e09d999ea76592693d89a13f925a"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "8fdc8b98b3c961780a3d7695b6d24f0b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "1bdf6a2b897c8e3cd7f1b66b3e4f1a12"
  },
  {
    "url": "tag/python/index.html",
    "revision": "4c93c677ee39a6083cc1d0e315d30509"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "6d9dd18372abcf00367f6f0ba9b7485f"
  },
  {
    "url": "tag/read/index.html",
    "revision": "0bae556cd84e5b3ad9b383ba0535cac6"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "4e2fe40ed14fc2f1fbaa0a8813c48cc6"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "127b0efc449cfc86cbb70da9881eb353"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "fa6217205e57772babeb39a45a841b11"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "5dbd07bdc2962db0866e1b9b3b30181a"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "3a1aa08385f80b1946e9b985ab6a2c0c"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "074adac364d3b5d35553b73eb7e56ccf"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "139cf9015f29d934605e2332acd9d814"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "2b105ba61f1e2a3a6d955bf30f764d00"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f3fffe447d0f697c7d5006db2e3c6323"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ef54dd45aa0335cc740cab985d85709c"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b366093d5078732d90a095f999dc0762"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "45da781908e3dc25ef99aec351d6b0ae"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e43c732512941c60e630b18f31201774"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "30a7586d8fbe771ba168c70ff66bb303"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "30815d3072a55106d81a80e644509414"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "831a06765e7bbb2503ebab958ec783e7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6a59a4d8c42ba3c3f25c56c58cedb911"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a483e1ada39a6b9691255d61007076ca"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "446e1d4240d72e052331fb97d0c62b18"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "5ab8f590334af6a973883b54dfaccff9"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3fd18adf703ebae5c5f29d3e1130c886"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "473da3efa4bf3032959f314b74b9f783"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "01ad816b78c55508e08ff1df5ba7256c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "05edbc6ecba747de3b552cc3c6eaf9ff"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b8777003814ce5d5ba426f6ba7f2c33d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "cfa51d216110e410f2eef0f58b6eef3f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "5e28c0897785485d6192f06e94d76427"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1023e00751c6412eeab12b3f262b86f9"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "ad086d9c2ecb246307f4c8d2bd3ac9d0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "8dfc12be225ec651ec364fd16d1d0453"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "dd8ad40b1b33d855c1793c97e838438f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c028fa4946e1f1f6e32efe5380f7781e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ac475923c2ff076f0ae7592686654953"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d90c83312c1f0552c9e4127678b19e44"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b0835962198ab07c4d449c6e748c4798"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f4d40e8240643cbac0aec60117d5645a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "064e8c3709167edc72b85b94a81c62a4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8c1558acf97e65e758e8c365e3a47aa2"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "7a42d53da878820248bf79e7e1eabba9"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ccdf49ac4a20af7a7c8b8ed439a8c1c6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e6c30e4bf30433cadc736ac56db07c15"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0feeed7b368c4f2fbb9dc921dc1019de"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "31e7222390b2ea87da2e269093578d23"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d300f4eb11c3d2cfee372546d4874813"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "4fbf5762afc675e9d2309cdf1a5c0727"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "6f5a21605f6ad534c1c9fd353ccd8adc"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "e69f25a0870643cee1c2ce0cc6f50a74"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1833f645c36f5f3005beb1eaec96d4a3"
  },
  {
    "url": "timeline/index.html",
    "revision": "e980b5df1e3ed144095b50cc0b3c93d4"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "313f34763109b6afd626a1173f1459bf"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "79702b90975e86e6540d0fb3dc4a9e65"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "6194c3d5182a9b64071be8c507d7bfbc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f08e46946cb7662a2019e7c440edbbeb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "33e1c27996205c4ced23dbc9df9da21b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c3547d46aede3ed82027a7901706eddf"
  },
  {
    "url": "tools/html/index.html",
    "revision": "93efa5124ae20d43404832bf19feed4b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "77158e3eb0012b019154ef440bb198f6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "30865366165b9477fcc632fc3ab3cc7c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "20a10fc7aff415075826119decbebb41"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "affe64e2fccb4c60bf0559f9a2949416"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c5d74e9b0222cc9f340bd001a9a861a2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4595ab69354605ea4900f0e80c4e9169"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "cf390b30a102d58271115b847fc48120"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2fa3f4ab9784fd1388be4e48d06d2449"
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
