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
    "revision": "39cec44e630cfc727dda7b2991ee76b4"
  },
  {
    "url": "about/app/index.html",
    "revision": "755fc2bfc2f152b1c6b817c63ef9a6e4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "871702d01c5129685d9d0ce5ff8e4faf"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "23b95475a6d350cc7511549a8375f036"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "4c9aaa21312805e008bdec92ca415cad"
  },
  {
    "url": "about/index/index.html",
    "revision": "52a06289155032f53cca7563bc83af33"
  },
  {
    "url": "ai/index.html",
    "revision": "01ec69e58fb082ece56229f10f2d214d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0d2b7b45ed47fb32737984511423196b"
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
    "url": "assets/js/121.188827a0.js",
    "revision": "3ea9cd481569bd9722897b3dbd05ae60"
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
    "url": "assets/js/153.7bfb6f71.js",
    "revision": "cb51c8175ebf3442ecfa9ba56e23d6fb"
  },
  {
    "url": "assets/js/154.e004cce1.js",
    "revision": "fbbabe5106d793168349b7618ad68218"
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
    "url": "assets/js/181.fd77d722.js",
    "revision": "3797adca204da30e343332cc059721d2"
  },
  {
    "url": "assets/js/182.6de3b8c3.js",
    "revision": "78fa2c3ede643e404bf03ac21341a841"
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
    "url": "assets/js/19.849b8e31.js",
    "revision": "29eb47665a391992e5ef80e137898f46"
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
    "url": "assets/js/20.5f14f5ab.js",
    "revision": "0483bc76f17732c5bd9871c8d61f4526"
  },
  {
    "url": "assets/js/200.5df0f1b3.js",
    "revision": "3d50cbcb01982a730946c3704c6dcb9f"
  },
  {
    "url": "assets/js/201.d19abf06.js",
    "revision": "e67125589cc20e36d8a8a0c92d745422"
  },
  {
    "url": "assets/js/202.37f6e2af.js",
    "revision": "6336f836f8d92432a324b13ba4a6d665"
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
    "url": "assets/js/230.edeafd6b.js",
    "revision": "9aec44650de35e23ac05d3c3db100ee5"
  },
  {
    "url": "assets/js/231.b38579d1.js",
    "revision": "6f6332f18f6243a7404a52a12a3a44d2"
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
    "url": "assets/js/238.6ee2e47f.js",
    "revision": "9475aa3c2e8545cccdad18c37cacb72b"
  },
  {
    "url": "assets/js/239.b1ed1d14.js",
    "revision": "8bed468d5ce0807315bc15e0054c5f6e"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.01128179.js",
    "revision": "fb33a66e9dfadec39fd99cf536eb5379"
  },
  {
    "url": "assets/js/241.b0a90280.js",
    "revision": "907d8e75d51eb803f9ebf6a121516f84"
  },
  {
    "url": "assets/js/242.7f9bd40f.js",
    "revision": "3360bc2a76b805a9b9238e013d499b1f"
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
    "url": "assets/js/245.f7ef05a2.js",
    "revision": "618276313ff9e29a3a34cb62482030f4"
  },
  {
    "url": "assets/js/246.28ba8eb9.js",
    "revision": "8a88a680f9d8b606fa6d47245a64d709"
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
    "url": "assets/js/251.ce00bc3a.js",
    "revision": "4bf445e12c413ca2e7e2cf83a539c138"
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
    "url": "assets/js/257.2f13eef0.js",
    "revision": "5ea5157699056f96c76cdfbf12af9612"
  },
  {
    "url": "assets/js/258.16de4ce7.js",
    "revision": "f416edfe534c4560fdbf8e327b07ffe0"
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
    "url": "assets/js/82.feeb09c6.js",
    "revision": "8564181778b89a6ae245843a728a2c21"
  },
  {
    "url": "assets/js/83.fdc2a85c.js",
    "revision": "3e9da65bc4576b3b596052b54766da52"
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
    "url": "assets/js/app.b6a0aa08.js",
    "revision": "a7a3f87d6bf3521ce18593648825ba93"
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
    "revision": "d915803cb8bb182e8693f759507a1d13"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8921b6d37c5d2e693f15e59fde3872c8"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "33d1950857b2b376f6905a569cbf3b25"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4a265b5e9532c6321b0493dbbac58dd5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "404a298fc3ff24791b2bdbd4a67f5f67"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2062664878be023d4b8013556c10eacc"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "471546175855222283e2d2e289abf300"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d62ed81a24ca6018162732e2abb5d260"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "dbab65baea77b797b807b6c98d88f490"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "2d2fbfdaf2b7fb9daba1e48a7818a482"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "04141df6dcf006525ad0f2f097c23cf3"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d2f510a304c567b32f5594362759be5a"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "2c87f47ada37c4abab59e260991db4ab"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "c06a10a4c77b5ce3738824568fff0d97"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "4613140b7c4546651651bf4b72289c07"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "91a2ff8ed6f7a944bb2ba6c8d1a6df50"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "89a7803eae2c66d71fb8c646523faeb3"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "70fc33070d081426d10ea3a4fa6e7557"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "4bcf55aae595b64e4e1e607cf8330333"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "dedcb2923525e3fc2f26b35cc37c22ec"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "60d052b26fbce111d868195a867bdb75"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "f4faf94b045e283a875aa8bf71b49bd0"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "288eed175cc91d895803d26737465fe7"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "52c0a702a12e080e2e819c6c65c292df"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "544d45f6f3a676fd324e002251e21ba4"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "bd1a3d43fdd1ecd2cd26636e4e005bf0"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "bb8b8307812e60dc7636e41cd7d29d8a"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "628bff7b9d12d9167d5a3b67df15f3db"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "af875becada55ac730311d98ace73801"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "3b2f1796492a30c0501acd053ab4c39d"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "82f6cc175cf990cf92b2fdec653ede04"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "8caffcde11f2de826628d6a753165624"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "21d80ba4c7d6ea6e20e5838a69a85ab8"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "73e979b0adb7204bedc23fa714b73255"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d5bdd703cadf7e4baeb1a131e4bb02b6"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "fe6c6e63c5e39aa1d3a36d2860675184"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "821f656d4eca08ffdc16159d05e663ee"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "01d7283960db7386207d9ae4c9f58ae3"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a45dbc1aae555aa4ff48647652d9f35c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b3407547dd2a7dbec36de1c606979703"
  },
  {
    "url": "book/index.html",
    "revision": "33051e571c39c1b04692ac63833829c2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e0c2d60c11a2f678b353bb193eb74eb5"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4c6ec9ceb44a9a3cf8f066160b314299"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "f0faeb38bad22003f1e2eac4bf51490f"
  },
  {
    "url": "c/audio/index.html",
    "revision": "fef1b4898b42f80d8543febe49ca270d"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "17c67f7d5efc18cd26125f16b6b13d3d"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "38a08ee06b45cbab50f367eb8ab91145"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "763253131148f50a86d71146d8c62a27"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "cb5ecc36244aeb2d21e882ace314c87a"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "36c2a89c95a11e80f5183564100c29a4"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "2f595d6b00b5dabb67a1d6928fb045f4"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "d816c5bb0584fdd4ecf390e7f35ab48b"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "244dc9074c06bc7dd065276e9048e6e4"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "aeaae28c41d19c44d0fa934b2845f559"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "598576d102c46573721bd9fd9e7fd5f8"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "08a5a187b842e0c6d38d32d75cd85ebb"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "0d6fe027f769ef308d8d05ea9b2245a1"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "cf8f16eba60af3881267359e2dc88ae4"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "41c1441efae4a098819f630da8a8c1e4"
  },
  {
    "url": "c/program/index.html",
    "revision": "2eaff32c0c42c052f2ca475dbe9358eb"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f8825300d7654a4e03e3f73e1ad35601"
  },
  {
    "url": "categories/index.html",
    "revision": "3deac317e0f5a163c66508d851eb1724"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "bf87d348e40923160fdb885f7c62ec37"
  },
  {
    "url": "figma/index.html",
    "revision": "8480dc83538d42f9d9890ddf0fea3d15"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "2623e0aad26ddcce5110a753385c4a5c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "ce56c97a58c8cacb549c4cb01b685bc1"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "098f22d96de2b9f6c3f7019b91c20091"
  },
  {
    "url": "flutter/index.html",
    "revision": "13edde58f4e65a7f26bba5bbad4c50ab"
  },
  {
    "url": "flutter/point.html",
    "revision": "a710dba1037ebf2e52b3da690b0f63ad"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3de4d0da67414c293bad147bf3b56b98"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1a33ad05950ec95a268c30304332289b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9c6fe2db98ccd44ffbe9733e02c9cd17"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4c920c940543bab67d8d076799ee68c6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7661627773242c69462b2e236af6142c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6e58339f2043d648963c1a7065d8e856"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "884965af687686326020dde271761e94"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "53e108888a21fdbe6a06f7e5d6bf034d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "dd0520644f4645c4b88f77012a0ace26"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a764d8552f4b0c81f886161b4e051d12"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9f25d595d28bff9001379db1a2722000"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "fdf35d35b0d40890279e5d60c0154cad"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c23e21450a98e4b2dd149a0b9c41f499"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "07e06ef28d59d2e991ecbc560ee30a63"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6dececbee8264f1c4ad13b5d9b66fce7"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "a7e0adb984e44df63e3bececbf6b9fea"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "5f1571e450a2d286d695a80839aa5485"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "6fd87648c71da90c03122bcf0f6ac17b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d608b2b354c60aa6c2731a1923c3b486"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "3ded4008854250f9ca22d097610b6fba"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "097047ed166f0aa3f692deeb92aad44e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "12d1e557bf3d477ed443670c2606504b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "6939cfcc59e33ac16ddd9de15ff8c5f9"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "1e09ac06321a51e0271406b5cc4e2f42"
  },
  {
    "url": "haskell/index.html",
    "revision": "195a7f465e3fadc108760e9c39d8e334"
  },
  {
    "url": "index.html",
    "revision": "0ced5c7e0e09d85999986168437303fb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "5dd4fd6f7ace06750a4da8417b0e108d"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "79564e6eea488f9ec86ce9684a3d35fc"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c3c9aae6e514472f48eab7a849d25bb9"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "7fac49555ce6627167806b5351f93ecb"
  },
  {
    "url": "python/index.html",
    "revision": "2b4f32ab77bc21a1cc3a1e9a0663894f"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "92a7f5b0b89ef20f3adbc67e7f7a1ef1"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "ff2e23dc67ce8750e91314cd802e564d"
  },
  {
    "url": "python/python-file.html",
    "revision": "a6b68846a43364b7550a6b2e4b8b4edd"
  },
  {
    "url": "python/python-function.html",
    "revision": "ca622e75abfc2ca7572640de3c2d92d0"
  },
  {
    "url": "python/python-generator.html",
    "revision": "36c9789a90a70dc02df8f5977d54c251"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "31d0b0c739d964d0d0a7feaed8e502d6"
  },
  {
    "url": "python/python-module.html",
    "revision": "5f9ec6696650a67d0f12ecbd5fc75ffc"
  },
  {
    "url": "python/python-string.html",
    "revision": "d7a63ad15123da5366b6423f7797f465"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "b3d3bf11a92dbbd3395fc8530e574904"
  },
  {
    "url": "read/index.html",
    "revision": "cc5374ed11e9dd2723cd45dbb6e5afb5"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "16cce576ec8c2f23e8011ac7fe4e2653"
  },
  {
    "url": "swift/better/available.html",
    "revision": "d17f1ec133e3fb1599bcc54c6ab2b2bf"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b3d24c97c400167611dcb70c90504f6b"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "86df68b20c290c7036fd490a873db6c2"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "6a492d43dd44f7a3a025eb6a7a7efdca"
  },
  {
    "url": "swift/better/di.html",
    "revision": "fdd56a770a843ad7e7673c161d720f0f"
  },
  {
    "url": "swift/better/index.html",
    "revision": "b59c40e4727ebfb9347b9767f8db7210"
  },
  {
    "url": "swift/better/last.html",
    "revision": "a95f7e7947cf099a3cf720da82b4e22a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "933bf48b8c2300f2c050b2b0e183aa3e"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "fba9caba1bc308329598710f46ee79f3"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a771878c1753bf8b86c3fdc8b6e29d1a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "9b9f171691649e67ab5cf0c0bd145198"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ae27839ca73ae79140ac26a4af5431e9"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "37d7f2c754a1416fec5e74926dbda432"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "1489632d80ac4434b87fc14654a524e1"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "0e1225a61d2d77c4173a05457b1b293e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "ec57f40d2bc72234b3d3c0bfb30752fd"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8c9e4b71dd99c862b420bf4a2812591f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "f18111e6d25669b7d5a817f837f10380"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "22dfaaadb0d10c63d4d26fd2f58a1a81"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "a36068d97a49758e77664e0624db7de5"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "1bf3471b7d84d7b6b2c2452149a88f5f"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "b9f1bde08bb557f61c0e1e3b6af518f4"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "05d7edb282fd4572cc7005ce3b4fb617"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "8c3356a83a447c17a867a6d3a416f1c1"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "c7d74ac9dcb320ef199f9af016eb1290"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "362ee4513574a5830cc267d048273e5c"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "e2c375f2cb8e8bf1c68b78002617c60e"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "b29d3877fcdbc024833cdd797a5c522a"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "5718a3d959f067ee9179c46161961911"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "f9510e8d5ef3e9a4ab01a03727d0879c"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "2210566d23d46c1c8a20a738e5207e99"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "8a0378edf8e93f3830946949a5dd9991"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "dae545ef3045f337c00cc74a96e1965a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "35f1850a321e92a43cd7f5bf9162426e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "438dfd918beb8a9d8afcdb9d2bbc21b4"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "4d72a96570dd98fa1cb11021dd46404c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b3d4201b836b09bb57cb08a50bcf42c4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b08238746322bfa375d3fde10b3fffb6"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "8be7c14f26d1f782102ec248d39110a8"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "a8a0fbaabae3b7dfab12507a433b154c"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "d63c173b85c684ed9f6aaabb58d5eaa1"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "c3f6567f4da9a63ec5baf76620fc71b9"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "57dd274a65d0dba8fc6d7d663b8f7bd8"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "26c62a7ee70bf91027ff434d55f03f15"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "96e2b0560a0635ade8c499e1753464f5"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "171c8d4e2ef5ba689bebb65ca2ae808d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "cc7c6b19de8842a55c0f67b0e54f02a4"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "c0b8e349353c382659336117d10d0b6b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "c395e29b7e7b9d7d8d1393d1bbfd768c"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "8504adfc7f8ab6ce90e3bde155d4d426"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "177e428b0aac84bd4cf02134c1f8ea01"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "5d8e3332c04a601d35d3a31c96e5a6fd"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "ebbca1ce2b35e14c7b63ec8f19a62fc4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1711acf35c160752bd295d127b9d9ba0"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "051730e8eb73941bd79383d8871d015d"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b4fabddfb1d21dd533a84bc00904de4e"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "1f7a6884dc00c61eacce72060331b453"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "a3815b587da407d78dbb7ecabef6a61f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "9c517f1b18953324bd8d592870f2b38f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "3635b13b4bfbf053b4f9a107a5cc1ff4"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "8beba294c54f7e41d8f6a20f38245701"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "215c11f0a7771b7b5b95bb0ae0c2363c"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f1f1094cbaf7036d3896eea217ca11da"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "02b0f9c789a760315085a1d3d52f1cef"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "123152ba98786690369697434316fcac"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "5022aa5106c08f817560cca91a20bc4f"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "d0f91aa1091d2d1e6fa3c584286cd2eb"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "72848b4ba0fb6170cb1e00bf69e16445"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b220367dd1d22e12e85aae3942de60ea"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4840719db2d3c881e9f139621dbb029f"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "d1e64555073d6d57df32a317d273e054"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ffa3112485b1991067b21a4dfc2de186"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "63832085180d623f881827470da756ce"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "53ddca152ba629d6f3d5c0a3852b6c27"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "919e8875c5b6aa1fbd5ac09eb7f8585c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "723d0461ea84757a19f29997d1437976"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3847f7ff2638f5457ba52c0f867338ff"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0c8eeb40523b8e5e83d47813dd206c65"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "705c468d9aab2157f4fa126e3cd312a3"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "958122c4417d0df1d7ff37b2aeba0fbb"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "7cde64b476c58a59be64f642d9cc19c8"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8f6a35f31c6b15fff5a4a938709be946"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ff3156e54fa8f865c78cb3de34b9534a"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "e17956aa49abb5784f02a0134838c6ee"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "ae678d9ac3b8cfba9d03b8936588b945"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "cdc2b1cc43e06eb3343426c18209aa65"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "d33ec8a36d6807b335e31186282dd10f"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "5443ca2ddca57e6ff22d260372178f44"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "42af3215f9668d9737a82d8f48ced7f2"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "910ce4f5dd52d860a1b72397d04719fd"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "bebe0e2e162777e7019ed6353fe6677c"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "712451342b635fd142f5dae7afbe5759"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "fdd70ba0dcea6721f73751cdd7826f6d"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f6c138504f2d006228d7b441c79e6eb4"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "b2439c17d1da4a9e4860e178b4abc4a9"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "cef5600e053d13423a6bae0e77a8093d"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "16a632c0775fe1cd6f5b08957979caf4"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "b5a712f8e1ba86737c7d41c835f797de"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "abc95cbbc3625dfc6b2b292099357e14"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "ca06fb3b1c34a5f858ff5d012373f06a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a72bf35b21a73f58fb538f0093b456bf"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "85deeeac429ced3bb1574f2f58fd085e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ab34b3824c422cef6049bf79538aad04"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d2f96b46418851756edf6e6d32142682"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "6ddf3fb3ecfb5e304a2a2ca7135e037c"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "b7a8429860b1aa933a74e6cc87fafbc4"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "26ae3578b4c6a63af9a429e9e9832a86"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "6525c3625644d4abcdef682d2dbe1a8e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a2e02e2286c0554949c05169e5380244"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "3468f7ac88be362090be8fb1124446ef"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "42abf1491d10b72931e5f3983f317226"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d81122dff5552b5ad839285c3a93157c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7a0a01922f998bb6e40f4111a112e86c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "55328e75ae4657e65164941ec3bff2a7"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "212386ef72539d76c029a5e2ca0e1564"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8958ddfedbfa928314363278768c8465"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ac30b9c908907d184571dc2243aa75b1"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "054ba7f45f7d5a0dfab00a67665b74d0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "16bdd0536cff8f6c90e59e1f926dbad2"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "4c799a9d2367c71790bdf5ea4ed1d4ec"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e2acddb9894ee1386001c1217f8d0e6a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "eda55b0eec275f6a727132649244e0b2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "06b054d6bddaa7bc651a5ec4145f3fe3"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "bde451e35e82b031b5e6f0a4b91a3c72"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "27081400e8b5a9b5874e573355a70cb2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "132ef7d88a4a8a475b350e946f7a5ace"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c86ab3c9bb3354e233314df55eb8c483"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "7690000f3631717e86d7f1a9e6a61b79"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "806b4f9fe09e7f41ce4bdb4d176dbb66"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "52bc601f45025d6a7d923b2d8c519620"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "481158a59dbb0136c820f294b4fdfd4b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "c84f2f52f9ca4da11add694432c01f64"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "27e710cfa84fa4a3b65c6da5709da995"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fadad2eb9d0c08ea88fdb5c2b03e8ae6"
  },
  {
    "url": "tag/github/index.html",
    "revision": "cc2133c472d11d54929ee64f272ecb5f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3ed3ff1eb1c1b78a93017d8f430fea60"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bd47bea344396d48d018464dceb1dea8"
  },
  {
    "url": "tag/index.html",
    "revision": "3b4feaf4146378b5e6466b2b04f7ecf6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "6979a4bb65f76b2b3659d91e53f96596"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3ce5b8c0cc897d8af526e011fe70c9a0"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "9ba7fdc4a54c58ddb57855ab36572f8a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "46502b8e28c63917af60035784af0974"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "02cb79a37fbd457370d6fd3b010156ab"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "fcdf335fb9a60aba2e6c0a946450decd"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "f7e7e543c8d488f4fa8c960b12e53860"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "b09e3828ddedb07db17dff374955e4a7"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "e384c72ef8a9d98622c0a9da40ee46de"
  },
  {
    "url": "tag/json/index.html",
    "revision": "53cfd7b9ceb8cb148719315b0c1e630e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1489107b1d54cbc91ef13b1da1a49389"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a5b18d7a3048f5ca23d904d2268d1fd5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1a3e9f7fc0b391e94fd9d9d09a8cfaf5"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "a49df50ec2c403e2d4857d4bfaeb5ef1"
  },
  {
    "url": "tag/read/index.html",
    "revision": "8bcdfe4fdc1a3ac3a752dacc781553be"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "1e9e482b5eaf3956445392ef112ac0f7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "25c82337fb4d0e567fc90086c745417b"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "fc4c8dc3ee4b37db7532e9a72ac34593"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "611db3f495952f6eb05cdf4e4b722aeb"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "51a9ff345e8d24cc0ba7d952e7e1c6c0"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "681c6dbcce16cea2f65dee8a2a23f944"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "4eb8ec31be7e09ae735ee6e0fc97cb43"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9a1519c37d6f0adbc12e1e16086cc712"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "bb166c045c78da525677b3b3bc23b596"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "cc5642e9764da365f103613f4afaf51b"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "0e45e511cd97b9471513c043d352de66"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "90a12fb6c8cfb500dad2112923075ef7"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "9314cc027ca79488e3d593d518886bfb"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "60ad57da4c2f58681363705f8a715df4"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "ae67dedf99f2091074ef3fb8c9200611"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "a20aa17e1b9fb41038946fe5c22e2a36"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "1286cb2736173a55d163c2598527a21c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d77a07bdeaed62c66effc055f21c9c29"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b046b4fde9df90aa4105e914991e2aae"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "573828d04a63876a0c1d2039a052acdb"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "66448d3e371eec7b19438954edd3b740"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "df6714a4302120ebdc4c8c14385374d5"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1dc074af3e9941044d4c93e64ad0e513"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "78b840482930dbe79559a60a14e6398a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "2357a0904cec33d091a5314f3a95d5d2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "332f93973cff1c5d31160d98ac9a602e"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "94c297f8acaf65b9d16d1d7af141d6bd"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "87e59e1a54e35988fbe8fe3a1597de69"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "bbc6c2177c927745b933b9e85b55d944"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f729c888b1e431fb49571f8bbe9fac74"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "fe5add5100d7c4ba783e5c1ed68dc41d"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "713bd9c82254a268cc8f005d5b4cfda0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "299572a4bee4dfde07314affaeb6a4fb"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d1279ed799f625fe9cf3b4b1f270aad8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e5df4ca099dcd8ab5234dcc70d672344"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "14731d04fe960bd2c3ac73037eb5af03"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "10f6e2c673178c83b831e808b237154a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5046df48593ca6b526ec190c6a34472f"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "de1e015712752282c1d6e5aee041ec92"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "2cbba033b763170a946f998090ace1a7"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "db8adaed0e767b868f44ace6846ad5a5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bdf7781c411ee1bc90c4c1f427f2ddac"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "da2dcce4cdd659b294387977bb908442"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4231d73f87437bd426e8964b85d6b763"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "ec127363a84b883365a33d6d2cf634b7"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c37d47a39bf9568a2f658f542848a37c"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "89745b41cbadf5b58e9d8b84d7c3a396"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "31fe02b964e2039b4967e07b92137c1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "655c4ed05e3c172409c80daa16848d32"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "f09c1999efc20c060e62e1ee0b1d9229"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "7a2fd1232f1f906073981b129e049adf"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "6294a11ea47456f3467e242812c04eba"
  },
  {
    "url": "tools/git/index.html",
    "revision": "74b38e957655c9cfa8fe12368f2a71de"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fa1c3032a3fe76efa32335377289457c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "7a21d1b2b1fbad174b42c0c9cab48a65"
  },
  {
    "url": "tools/html/index.html",
    "revision": "95446f0ae8f4e5721d6074c12a89cdb5"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e80cb5748db3dbb59450612c9c892f5d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "47744544b480f908adae7207ba50276d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1cfdfc11be2af9e5db2dacc7b601c9e8"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "6b7f49bf1771edce403e7ff4fdc02aaa"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4352f4ab347160fea4be3b9bdce8ba3d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1490451db38ed05785ab79b8a816328c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "df06ebdfb7fccbcd7e51657dc6e5232a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3c22f76b0d5d1425f9865ec2850171e5"
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
