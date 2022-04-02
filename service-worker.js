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
    "revision": "5c248445d2d235e9f5ea60c685c1d036"
  },
  {
    "url": "about/app/index.html",
    "revision": "f37723958c700ab841c1925181f48fcb"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8a2975b12e0dbcb8958ab8b8fb37b1ba"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f8394f8304b4706b2ba39392a8d8c537"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "221d373d78276837c2715a970bc75883"
  },
  {
    "url": "about/index/index.html",
    "revision": "e2e84f63c6aa671d5f1ed89aa1e46495"
  },
  {
    "url": "ai/index.html",
    "revision": "8cdd807b707883a6c44c43d4bb3ac2b8"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d364ce5a230b8e43f591a13212066d30"
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
    "url": "assets/js/123.981f78de.js",
    "revision": "db6774e2767c806d487984d5ff20c3e9"
  },
  {
    "url": "assets/js/124.13d44079.js",
    "revision": "5ea8bef30fa715d0ba4d91d4a5e3a378"
  },
  {
    "url": "assets/js/125.f9eafa9b.js",
    "revision": "7d35b9d4a45fdfdcae814bb4870c5e06"
  },
  {
    "url": "assets/js/126.12404870.js",
    "revision": "600034486570fc5f1b38584672bcb2c6"
  },
  {
    "url": "assets/js/127.ae2ccd5c.js",
    "revision": "d03376b531d8bcdf0a87f4b4348ce742"
  },
  {
    "url": "assets/js/128.74656b64.js",
    "revision": "470301300aa4d98f8e3d2cfd03bc9688"
  },
  {
    "url": "assets/js/129.7cef0d8a.js",
    "revision": "cf3cba2ea03ab16e63ae93a95ec5c411"
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
    "url": "assets/js/131.dd4ef80e.js",
    "revision": "58bd1a61449ca6184847c19c79c79097"
  },
  {
    "url": "assets/js/132.02e4032f.js",
    "revision": "1387d13925b9c23ecd32edcb64952f66"
  },
  {
    "url": "assets/js/133.26f13a2b.js",
    "revision": "1369e30187f97c3a359cf6996857f30f"
  },
  {
    "url": "assets/js/134.a46ae360.js",
    "revision": "f270b00eb5640ff49341be2799b6a0d8"
  },
  {
    "url": "assets/js/135.8f63ea57.js",
    "revision": "5fb5c2f593277986c6b1eb8c826a85c5"
  },
  {
    "url": "assets/js/136.d13932a3.js",
    "revision": "f4487a2cacaeb5b5c8d480b672c17e4a"
  },
  {
    "url": "assets/js/137.5bb76602.js",
    "revision": "6be6a72cbc9213d8faca3d7ecc878942"
  },
  {
    "url": "assets/js/138.02c47f57.js",
    "revision": "dfd9615af5a0ca795d1d98f8e5ce17ae"
  },
  {
    "url": "assets/js/139.a835c138.js",
    "revision": "0d1b968e1db56fc3bb5029ce6b2ac85b"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.25127ba4.js",
    "revision": "8b626fa785e542ef670c54a312175abe"
  },
  {
    "url": "assets/js/141.19370cfb.js",
    "revision": "d2ca610842baa82c6ea5ecbc94ec678a"
  },
  {
    "url": "assets/js/142.b0a09982.js",
    "revision": "86397868d10e621d1f38964c55175386"
  },
  {
    "url": "assets/js/143.b14cf513.js",
    "revision": "083b77e0f96d1395a7c21c93bfa2614d"
  },
  {
    "url": "assets/js/144.d52cab1e.js",
    "revision": "3032c01ed3ed342469118b36d2912881"
  },
  {
    "url": "assets/js/145.870081fd.js",
    "revision": "24ea499af3da2c6324bef5567281c2b7"
  },
  {
    "url": "assets/js/146.c604d237.js",
    "revision": "53965131d0c57a65da4c4706f84ecf83"
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
    "url": "assets/js/149.7cf88488.js",
    "revision": "607bfebb6ba5128eb04a99cf086ddfe3"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.bc6a2def.js",
    "revision": "1cd1e2657832d9631122540b62800c1b"
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
    "url": "assets/js/228.0e7071a2.js",
    "revision": "a69cd3a7afa6f12300483e3be75b9d6c"
  },
  {
    "url": "assets/js/229.93863f5b.js",
    "revision": "0f423efe476c4e19e7f86c41bffd9956"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.0a5d8c05.js",
    "revision": "1cbb0ba7e2d207550a919991e4a166d1"
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
    "url": "assets/js/265.d5e9eeeb.js",
    "revision": "aace35148494bbc0dd686b7c701886b2"
  },
  {
    "url": "assets/js/266.486e4bce.js",
    "revision": "cd47555c82d6ce7687852210268ea0d6"
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
    "url": "assets/js/88.ad3581fd.js",
    "revision": "09a4d69153ebe3aaa8631b8f516b13aa"
  },
  {
    "url": "assets/js/89.219876fa.js",
    "revision": "c15645fa24578dbfe1b874b9d9399160"
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
    "url": "assets/js/app.09c251c9.js",
    "revision": "15ff91a679f5eb4b2eb919a796e368af"
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
    "revision": "0b3fe62a9bd4ed9b344833ebdcdc5f07"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6e573322591d4fbf3582793b98bc92b5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "494d77717959f5c87065291b04f00c9f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c8abe7b724e2936296f0a3e556a50787"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3a021bde33bf130e0b7aa7c2118d44de"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f9290c87913dae7ee60725aa37acbdb7"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a74af59aebc6e30592c949b9281d8297"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "80e41c109ed03d878909200fe5973fda"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "686037ab34779b5b40707d465e42f844"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "7cc747d1959b306569448bcddde0a427"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "08dd9d883ccc532ebce359a4b23e2791"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "2abac992e427e344a333990bd9c9d876"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "ec670c5a7ea996f8d6d0789d4a222c96"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8cd28e48622b5924946ca10c13570b5a"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "4eee0c9e30bd450005c911aa1240e823"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "8f0a9d4fe6a751612bf795b9f777bf71"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "e0ca115472a36dd63970918b42b8ce7f"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "929523b5108c9101ae46ef9b0a2ea474"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "42d122e7e14c13015062798fe33dce52"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c8d8d30b3d98c66f5174af3f39c15809"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "5ea66881a695f54e4f82bbe456a3db1d"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "3385e71ed26167279aef420d86d09801"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "e4a2c87b16ebfbd73a38ace910817ff5"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "653b9b87dd11be338b1e727f060b7540"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "275e14dc7624274960c2010a853c0597"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "56d82f5d13b6269df0498b71b43c93c5"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "5ef64b19ba0ac186844e6c4bde7bdc4d"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "87ef941385fdfc4b8a6e919394df4c6e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "ea5b0758045271194846963e61baf278"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "cbf7b55f123af4020eea6362b25971fc"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a2314015264958be456252387161a4d5"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "de2d03362729c83a4116493e38afdf58"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ea7ec79a307cf8aeeb9c9a7e3a9e2a0b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "8bf9a588863fa3f08d4dc7dd46c64e72"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "20e994996589aef7df62d98aa5bbc163"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "50510f11256eb17aa95a3e541f00bd16"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "863d165d1e117687f34a96a5fabba439"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "a5c0923c5cc5a0013dd5bb7e1e481819"
  },
  {
    "url": "basis/index/index.html",
    "revision": "93d0214954bdfd52d02302d04f6a8f32"
  },
  {
    "url": "basis/os/index.html",
    "revision": "4c9242f7aca176b9d1eb682ff9ff6557"
  },
  {
    "url": "book/index.html",
    "revision": "8f31edbfb3b48d3cdf5d843befe95ae1"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2ccb67542da8ec4a686cebf5cab8a9d1"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "295ce6afdd96261c43279a111b018dc9"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "2a47d18e44b922bbd2535e2437625602"
  },
  {
    "url": "c/audio/index.html",
    "revision": "ffd6d8f36604a63dad0c9608321c1c34"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "47917f2c8572f1855cef4ef127c16273"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "9d65e6c6e47cf9101cc68c4d5a7543e7"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "8436a43eb43bc56a6e7bbf28b10ef5ec"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a795a0b334039843bd8295cf75a77721"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "1390d6edb382eaaa9440ee8dd3a2af8a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "3e35aee574e9d81b855ad7fca127d913"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "ff49804b174eb452e0f425110a95fd32"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "cbb9d6111665f2c942429c71318fab46"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "0c818dae086dbd79a8eacd6d06368ffe"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "546d835d8416a4627ef41137de1a8dda"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "3d64c24d04198fc7a5c92f7056a88551"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8ae517cef0a2faa235bad6aa8baa029f"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "d60f89efd744776066edfbe6e6aff17a"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "fe2bb9eb466883ef142b98ea949ddce8"
  },
  {
    "url": "c/program/index.html",
    "revision": "f89c82e139e72e2e9a8b28badb8e206c"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b4438d155375d276bef91b4013f64a7f"
  },
  {
    "url": "categories/index.html",
    "revision": "b21ee4c7812eb0cdc34d21289b668fbc"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b3285caa3487e9b658b63eefcbf5894a"
  },
  {
    "url": "figma/index.html",
    "revision": "7a03ee8953d17f08e7c8ce664db9839c"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "33d6cb93c01472fbb2daea7c17e62165"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "9007615424b76c887f9175def8310967"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "9a3f5efaf23aba47ee0f820f9bf4aa5e"
  },
  {
    "url": "flutter/index.html",
    "revision": "1fdfdf69a8b7d72f62cbdff3708becda"
  },
  {
    "url": "flutter/point.html",
    "revision": "124f577a5d8aac21f54cb305e624f141"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "f37bc30a747d93f4481c50b824191edf"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2e7aafb859dbd5a76dda794b64af26cd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5ee9dc60279aea4961dc6a714308080a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4f0410a54c69fde5945570515b37bb70"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e2fd651422848c41ce5428a7df37f059"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2e3002ebc652be4bbf431d2b9c44c3d0"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ff1eb6c14969208e69df9a8ffbc0cc66"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d3a17a5a986356fd722d7149a33824e4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "74c333acc00bafe2e2c153602ada56b3"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "00494ee7405c833cfb848753a0df0682"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "0ffe9431ef60c15e92e36e5db5bed252"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e6da9b1870192d1b7b2776aaaf2f814d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "b4ead6794ef222c5344c8116633fc985"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "40d4a7e2b05f5af0ab09664cb2d1893d"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "2435fbc10f183fa56d4acfe6e8f7d136"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "5010d8d7913576a3c48d10d3285fcc29"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "057f42b46f5dbfe80f32d1cb35827896"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3bfb103ea970a8d2e3bc5df9537da75b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "043ce86ac5d9828dc260020eb594e111"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "69c9e46cbb546d7f94c658e64958324b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b23f94230071f7e179fd0663f0b6b8c7"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "6a682c88134d6b3d26fb18648bdd4fe6"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "194c005d59c479d2a74cd5a84190350d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f831cd385e0a285fdf62c44ce55cd3da"
  },
  {
    "url": "haskell/index.html",
    "revision": "7c46edeb09fda57c0de8855e7d77889d"
  },
  {
    "url": "index.html",
    "revision": "cd9778bf4e57e0d85c74f6ef4cc9c4c9"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4cc668998dcff9186dc1048458ec0016"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8a00dfeb4917ccdc7da3c4182521d5ad"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "65ed98df697547a12a4d882e758e4370"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "7278e92e608ba70de8ecf994e575c3bb"
  },
  {
    "url": "python/index.html",
    "revision": "1ee42389c1b7af69b296cf0ad6eb0f1d"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "63ff8c044461626a70f3a0a4935c7880"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "db7ad013b9b8233b1b0a0047ae0158e6"
  },
  {
    "url": "python/python-file.html",
    "revision": "27acd00546cae93a633f220101483d22"
  },
  {
    "url": "python/python-function.html",
    "revision": "974d5d6e074de333f198422db23ed773"
  },
  {
    "url": "python/python-generator.html",
    "revision": "5474ca766c26e5746809bcdbebfc5798"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "a8dd965b2f6cd696d7d4449e96eb0d78"
  },
  {
    "url": "python/python-module.html",
    "revision": "b6177c43c940c38aa99184d7d7825c49"
  },
  {
    "url": "python/python-string.html",
    "revision": "34639a30e77d61957164adceab88b01d"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "59dd4688517b7bf92ae2bd02015401fe"
  },
  {
    "url": "read/index.html",
    "revision": "a1551623fc882ed5f04028fb6e6c9c61"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "de211b0379984fffe538021718e4faa7"
  },
  {
    "url": "swift/better/available.html",
    "revision": "59f6cbee052e8f85a8cc6aa4ddf5e367"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "21da564bff066677df19f07c70eb0591"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "22714bcc516d052d3a75ca9c0e46b5f5"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "bb401cafbca35a717fb3a8ccc0f99847"
  },
  {
    "url": "swift/better/di.html",
    "revision": "cf8c5f6c867bd6bde66d9c849a01d084"
  },
  {
    "url": "swift/better/index.html",
    "revision": "45c066b463500668a2693717d319bd46"
  },
  {
    "url": "swift/better/last.html",
    "revision": "1d9f95c74611ea06877c8d635dbd6f61"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "9a24546cf4a07285eb09878d0a63a828"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "dde8eeef7a188cf323786e612ba71ec7"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "e52acd9d079eeb890f8c5fce2d41df6b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4fe9209982390302576691318cd03797"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "97b44d7451806c8ed81c30fdb2df6f48"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "e0a34a7e4e9fd71f8175fe0da7262e3b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "67d4f34d03dba9dd054975f88451d4a3"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "f4e5888dab1e427674e47ef512e45845"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "1ab6b8c0745fc9fd6ad83f2f176d86fa"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "21dc35f7917aa4ba9358b7879c9d1ad4"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "064c908b8e4bc03ca8e071ef52fa283f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "a7792b7ebdec24b2d4547e4a2ae35cea"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "804576293525cf6216a837296a4ec25f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "971f60a2121f7faef90e7a1413f8085b"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "4eb9527899cbc0c27af7c3232e5f0917"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "a6110e3511e3112d4ddca2b5356c9f24"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "c139495b1d54b429b8045bd65634f001"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "45c4061beb3d3f94cbc5357e3053cc74"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "bd3e315ac5378b63d408675e0565b57c"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "a34878adbeec93e40361ffc743cae1e6"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "83a5c8a126bd459d6f196f7df430fa40"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "338d22c4508ad7e6cd07b441d663bb4f"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "4152f59d38e92c1119b40174dd416ad6"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "4541e393cee07fbae107af1371ffaa6c"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "7bcddcd097c5351e0282faa340b75b7c"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "fb3fa890fb6ec40b14ae7524af5c8059"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "f614f3e3aa38b93c2f4b62596f11a913"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "4e6c7701d8b484b723a2aebdc85dd2c2"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "1cf452c5b0ff96e082ed076cdc2c1af3"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "015bf1d40008c8a05b27284c6e57ef8e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "6048b3d26b9ad92366919a02d1abe152"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "07fe423c8e0ec9729797fbfb3c203fc8"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "cc7cff846709c87d3933fb84b8c7fc3b"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "9dded59ab4ea6a5d67b5e9ad9be40d1d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "16b184b1904d9d70e9c0136415c36403"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "c6031a97b323e1188986e8020743f754"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "acce58d1ee1b0d307a4e3dc4f5b2d112"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "6ea2f366ea7a023e4444796a3c5816b5"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "da7559b6911ebfbfa8cac29a4c4bd0c5"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "880abe0f5e893b4c98957d7c41cde781"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "39c26f57ac694e72cc768aac7e31c1d4"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "0c2779ac363222b3fbbcba09d0a35a0e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a168c461c1f3556a8f9f16fce1606adc"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "59ec1ca54adb0cb62cbd047bbd8293ff"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "74a60e05ccc97e199428c61bb983ac69"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "69da13b869c04ac545dfde1b96300336"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b9d8ebb64c4de5230b46f761a1fc1ef8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ec2a38d29ff4bd7643b5e39c6a05b5fd"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "09e8befc2a9e6b2fc7a478767bcbe021"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ed6f609840aab170fda24eccc248042d"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f953d446f37c900d48a9cc8dd8dfc2d3"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a54b5ff97819df171bf4414191e2356f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4fde3f562965371315152590899496e2"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "7d74392233d822b2f0bad1fe731abfd9"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "6b0e77500b8d04d57c5733a8a1721d7e"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "afbd1ade814013488e724b4fd1061441"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "2045a72af5e6354054ae3c26a0490686"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "44bf230205aba25ed695873d7107f10e"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "5f59bb0fd8adfefbe3c7394e91cb8c64"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "66b0f2794ab0e70d1be69e1297ac9e9f"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "fbc67bc06f6d6bcaca260e3b01a369d0"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "67458e1db97bbccf6f34a0074445e8b0"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "d5365b3d039517dc81ebab89acbbf7c9"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "febd564e4902aafffc47dc997498de30"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "8310901edc6c24ceead530b9893481c4"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "795fc9fd34ffe9d85fbdbc6ae5971577"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "fa6ace8568ac5efda57f5ac00f8e2b29"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "1ed96cd84983edb7e6186f82ca208963"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "330aab140461ac733e701b35fe48757c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "29c98bf1eb9caf9b3578bacda0ef1f15"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "ab45fa9c3893bdcc1f28faa8d3597468"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "d668ee74ca62fc7390d081f2d1d733a5"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "6755934e5a6ff1872579b1fe5fa6fbc0"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b157550ea36064a312bc021437045d5b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "02b131dcb4eec10a4dd51a7049c380b6"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "7ae2ed9412b301a4c636caaf2cb7d708"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "8910cef39feb41b26278e4bc5f4e6f61"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "fd164c153953cdb06a21ebaf4c793264"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "24460961891732c688b50ffa8ed90e17"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "fdc3678ebcf5574a8c8b3649f8a429dd"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "130deb2578fed8eef9d7eab2483ef801"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "22e046b77566b5a5082790d522ef164b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "3fada5b92f7ccc4d51887204ff12e8d7"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "28ef16d8ed2fa97c55122b7d0d7a45e4"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "5a879f9d5ee826b84a5e81a6664b6819"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b1e2cb5f998dea7372f14ad15dd20b60"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0923b9048858b6757b955dcbe809b9d5"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "e039a42ad0f97e3d7580f7a5102e8725"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "5f558977d773d2ce57df2e669cb96d17"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "1701195d27fa2e3b52c2fd6c2d4690d9"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "9c1b11baf82a72dc8be848e7a3507567"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "eb35cd4df4b2e7fdb7cf1351ac34e444"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "cb79fcfb2f44cb26f08585cb21b1f2e0"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "3e8527a411b4ac548bae30e69cf9bc53"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c77c8fc7cf5f4bcd9ab68f60cc9c369f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "00bf50c52ba0fe40550b940f9be79cdd"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "792b3a724b68bacc018d206729c6e39e"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "350f3c016bfb2ab6c91f1c3268514040"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "d862065ef9112a7397d593952b600fcd"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "4c32c529023feaf5f9cffec0677fd3f8"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "d8a65781fd943dd875b05d7238a408dc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4cf1d1337df59cd5343196480271d54d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7de0ebe5c9be14896d4539e2994ecbf9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "11600c8dc2aa71ba2a03d28794304c2a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "993e630e8cd16d9e4c6babed7f0bd535"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "063507f73b795e20b19375157c943c7a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "db15fb71aaa3273c112d783e0c146245"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "2d8108b8257076bcdc640d044bca20e9"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7b92fd2f30d81442bc6ea4654aab7c37"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "805e8df02df8b96ab1e808fc7d54f6f2"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "75b91f85903a3e0ea82abc21499a0cc3"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d1e7c555b24225f93182e18b2857f69b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "3831e32d9b5552d1440860d2234e0d4c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "813a63c63916149384d76817dda1cc2d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "c075138afbb4cc99048a695a39443a4e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2ab28dd97e804abdda5fd6b0ff93c1ec"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "edbc41be78bf803e06912622431aff02"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "6895fd64088af139bfc05de83e0f8a85"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "cfdd61dd3d29235c02df3c1a7e191ffe"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "6b121f4bf97304ac1b33000ddb3bb0ec"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "ec3425070cbec45f2d36ec09344eb461"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7c6e939f7b61184830ebb6c97e20af0b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "0615aacc943704409c50a2991a832c61"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "488454a374fb7588d3252f59d11c3ea3"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "07e0482c29e03d4fa41291259b2deb57"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "29c4dec78beafda21e0ad5fd906b35e1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8fd5502a7591152c84e86f8eac6677e2"
  },
  {
    "url": "tag/github/index.html",
    "revision": "546a8fcb67dd5670cfb9d4a0c5df697a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f5a20c7f0bfd8ca82d47e22c1bd5a4e8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "189758fda6fdffd269e2b6d652031e46"
  },
  {
    "url": "tag/index.html",
    "revision": "fd58186ceefacbbfd961de3b82c7f3cb"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "12f9d8d4c8aa7d90c316a28d9c15db5d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c87df7d0a5ba7905cf20ef90ba8f9353"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "35ca400a7cc0c947f13f0af125764eab"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "2eb2eede19b7f923dd09e807436f940a"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "e415cffd9b8a40863ec6f887d0fbb255"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "09fdc418ab3e26b17b177f0354f282b7"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "acf053193546e0cc185db480668239ec"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "9f6af81becfbd3c678fa5c6abad4a5a4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "5fd21061713e94066bbcdc7c19293857"
  },
  {
    "url": "tag/json/index.html",
    "revision": "6be8dd64b63654a68a0338455a260769"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "328270de4ef97d908aa04d0fa28f51d6"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "9945996898b38ef84ad76aac5f0d2894"
  },
  {
    "url": "tag/python/index.html",
    "revision": "03e16e5ef9eb7c12ac15184706337486"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "a14b99ccaebec4bf9252d36a2e97a4ab"
  },
  {
    "url": "tag/read/index.html",
    "revision": "cea445f8c7301744eefcbb19e6ffe412"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "b1d7d9bd0348b3ff0daa36f0981b07f7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "828e75c53e0698c9f9515acab050424c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "c7b001a35ce791ded2afad98b71106d2"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "502ed3e3722c4fd338c83872a1eb3c20"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "fb662f71a87fc54061e5c560955cced6"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "7530bdd4a9a424675a51e765166a97d9"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "4768aee94de4f7f8b55fc5a4c9299806"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "25513eb6db445d0009448c04c0262376"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ca78e72bd2b2a92a694939b2c975e825"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8e3a73dd371e0f26186f6c79b4a10170"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "10074ff4b8ce83727a84120889ec6d20"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "68fa5ff09252f634cc73766d61b2cd0e"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "af476c6723de93706f4ba856894da503"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "d67d476435d8264ba14a5b1a5e234957"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "73bcad08fdfa6af69afdcf983e66949e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f35292af8c8120e16294369f64eb1a03"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "4c6479d61cca763c29680073cf08a4dd"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "dd543e877161b77a2dbaace3d360cdca"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "94678a8aaac49232bb59590e4290cf64"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5383dc48f70bc5934672579b274870da"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "91c59455813125bff6362363939879de"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "1288258eb4a15f42bb702843edbd0a3e"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "a86795a7adf1918b826423300e2b3633"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "4249289aba9dd42e9f011733b0e710e7"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "6c6a523d00d9bc1d74d885ad2c329ceb"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9941aa8bb3f284e8ff2611c3c616c66a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b202a69feba651a25fc5a3922585e075"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "4571f7b5a40f6318e79b5bc411cfc4ef"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6e2293057f1424f7bb96f0a5cb3da7ab"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "5913d68a0a4f9f2c49d88e9884ef62f0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "27ef132a90ff1e889a75001409a3a93e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "6d585a9701a6a3440fdea9447a8d90aa"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "8db6cbe2cfa8357511113fc17e3b6bfe"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5887318e2b1bddc4873de22d2ac3f9a4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "34b4e9ea1f32c55d06bfc7b84d920d43"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c552b88d6a509a9cd2e782ab3385eeb8"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ded7126b2bdd4505eadaaa1648d4c992"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c269c6e359bcb5574d548687f30dae3f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8e2261c98dc614720344884e4a722e46"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8613f5241a6fb071bc3ae14aecc7ac9c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "003477a0aa48c6f775896e0a0c35552b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "217d1cd5c92e3767f9c2b24ced184235"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "83cc2bd931956ecce3368e4f38c5cc20"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "12b8c79d149a612e2fdca6d128a93c99"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6d80e31eea30ccea61ef7bcd13ac9263"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "9f9e75a4363d995e90b0a70039d59871"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a0d3398d8716b23c65423da7812b62c3"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "c4ef88158d73d34ab0edd7b6bd3d1cb7"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "2bcf63833e6a180ee32bba21de382b51"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2cbb6879fceca91fe6de3984322da72"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d476cf045725d5068329c5b1c59445d3"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "fe471d24a6abda75b04273deeffd6909"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "7a12fef315de6e0793f14ad6ffd4599a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a4c10692612d23aa450f78d58672206d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4f10db6d536ecf90a5baac9326adf649"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6fdde897f94b528dab7d2c43eb2ae0d7"
  },
  {
    "url": "tools/html/index.html",
    "revision": "bfa6abf340368a540b124029a2ba5fc5"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5e16e179ca36ede5069444777ef6e2ca"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f629a0f56fb346096d954fc0c86116e6"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "05baa0303df60131430ef7822e5e1b34"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "0a4e77c1fde74ee937a33f94d770cd64"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f114fdae5fd193ff26f1260f9b293865"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f331e2dc8d4b3c3353d89ec07cf7f02b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f8793896d21dd7a028ed753c98f50f99"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "edfad9fbdd7d539a9472c379ba2ecb56"
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
