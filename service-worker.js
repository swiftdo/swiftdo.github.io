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
    "revision": "b801f85c5e70b5cd379e490145e42014"
  },
  {
    "url": "about/app/index.html",
    "revision": "13c3b3ca6146e4e0e3a5f14456043e14"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "545e9d73c93ee530be86863e65e1b629"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "024154fa5e742361d9c0b95d994562fd"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "85fe320c5b285097fbb7146b610bacfe"
  },
  {
    "url": "about/index/index.html",
    "revision": "37008d610e1bda635db14b148021cd80"
  },
  {
    "url": "ai/index.html",
    "revision": "4fddc1641eb0c8260e211cd12294c2d9"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4f55777414351de840abd2262d7c3793"
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
    "url": "assets/js/101.3e76fa16.js",
    "revision": "cd66d4d8efc3939690fd15b171c7e7ca"
  },
  {
    "url": "assets/js/102.6f5a5799.js",
    "revision": "9946adbfa35431fadf6a85947bc62740"
  },
  {
    "url": "assets/js/103.bb94d7d7.js",
    "revision": "4ffd8341d15634bfcd8093bb9adbc383"
  },
  {
    "url": "assets/js/104.b52c7cc8.js",
    "revision": "1740407089071b9adbf47d7df1658c79"
  },
  {
    "url": "assets/js/105.d11b590a.js",
    "revision": "cb0a08c85d5dc0cb540b5c90721a4f16"
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
    "url": "assets/js/113.716d3e27.js",
    "revision": "383d6149052f01bc11f77b9b534b766e"
  },
  {
    "url": "assets/js/114.b108b07f.js",
    "revision": "368be5b0c25d5498004cbf78f2db7d87"
  },
  {
    "url": "assets/js/115.4a397eac.js",
    "revision": "cc52d7bcfcc2809fd7dbad8801d7ed32"
  },
  {
    "url": "assets/js/116.898a0ce2.js",
    "revision": "344daf823e620d482843862c341c23da"
  },
  {
    "url": "assets/js/117.98a85cd6.js",
    "revision": "f3f3e4069b187dd5ce1ddedc833a5125"
  },
  {
    "url": "assets/js/118.bdf06ca9.js",
    "revision": "b866bf307f1cf5d939c2536fca54dd48"
  },
  {
    "url": "assets/js/119.bc487556.js",
    "revision": "b47d119b715a4d7e4faf6d611fe742fc"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.86c62e07.js",
    "revision": "67c97f0c5ad8c4a948bec90a76d89fed"
  },
  {
    "url": "assets/js/121.8971c37e.js",
    "revision": "9ef9cb394d5e700719cf0c1ebe5ab64d"
  },
  {
    "url": "assets/js/122.60717ab4.js",
    "revision": "a55b9e153aa374fe10f56f511faec07e"
  },
  {
    "url": "assets/js/123.7c8554d3.js",
    "revision": "9e2efca9336ec4a38259eb3a4893fc19"
  },
  {
    "url": "assets/js/124.ea3d12ca.js",
    "revision": "ebe12663cde781331711f8f4eeef2597"
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
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.a40cfad4.js",
    "revision": "17445c3e1e79869c80897b89e6cdd69a"
  },
  {
    "url": "assets/js/131.81293bb9.js",
    "revision": "cc4c368d8ef0fe93d09057da7cd2acad"
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
    "url": "assets/js/142.0b5d5c2d.js",
    "revision": "6ba2d1625454df7f873d86becae35f30"
  },
  {
    "url": "assets/js/143.b14cf513.js",
    "revision": "083b77e0f96d1395a7c21c93bfa2614d"
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
    "url": "assets/js/151.a4994da4.js",
    "revision": "16ede725915bd97a619d4658c7aefa13"
  },
  {
    "url": "assets/js/152.dbce306e.js",
    "revision": "8de19f80b001366eb54029143e54b71a"
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
    "url": "assets/js/158.efd054b8.js",
    "revision": "adab4c61a307c215344fe71d01f98e03"
  },
  {
    "url": "assets/js/159.43640a68.js",
    "revision": "065d4d3aa1180e53811f4294db07b1a7"
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
    "url": "assets/js/169.abbfb6e3.js",
    "revision": "8bc12a064ed15c0af222a1f9fc8d19cb"
  },
  {
    "url": "assets/js/17.120c5e0f.js",
    "revision": "2d2b65c917474e642365b71eecd6ac8d"
  },
  {
    "url": "assets/js/170.1176ae6c.js",
    "revision": "a6a50bc25ee8480e45b1b18bcd266517"
  },
  {
    "url": "assets/js/171.bd22844e.js",
    "revision": "a4fa014b773a9794eecceec1e52b4dc0"
  },
  {
    "url": "assets/js/172.e11d78ba.js",
    "revision": "a20cbed314801cd30ada38f1e50489be"
  },
  {
    "url": "assets/js/173.4f8cb5a9.js",
    "revision": "78062b7ba9c7cf153543f88517fc5149"
  },
  {
    "url": "assets/js/174.b7e2c32a.js",
    "revision": "b89b6a20baa769b80f727b29a5de5c1b"
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
    "url": "assets/js/18.117fa827.js",
    "revision": "3636cf20ef70c18f8e58c0e3f544d6eb"
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
    "url": "assets/js/185.8322e334.js",
    "revision": "ee6d1e490b7681ca5011b640a760cddb"
  },
  {
    "url": "assets/js/186.20ab9c57.js",
    "revision": "e8cf572a393dac0f1edb0068de77bb14"
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
    "url": "assets/js/19.56ccf8ff.js",
    "revision": "bc1a63e8e7ba4abc725c3effcf1afe6e"
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
    "url": "assets/js/196.ed105387.js",
    "revision": "3551706723607ef474fe170d4184ee6a"
  },
  {
    "url": "assets/js/197.7e3081af.js",
    "revision": "e0fe2193798bc83a87472c5799d24385"
  },
  {
    "url": "assets/js/198.746f0526.js",
    "revision": "f2b0051d0aae657dc8b050187cb7e15f"
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
    "url": "assets/js/200.6260684c.js",
    "revision": "e232ecc1615b36ab09d28b6100efb67f"
  },
  {
    "url": "assets/js/201.8bea50d8.js",
    "revision": "cbb08be031e0970ef2ae8e2097a35ef2"
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
    "url": "assets/js/207.0aa23c2c.js",
    "revision": "45141fe8204a39e2a4aa74730ea85598"
  },
  {
    "url": "assets/js/208.19860d06.js",
    "revision": "e3e831551532e4f39964d53194b42e90"
  },
  {
    "url": "assets/js/209.0a935aa5.js",
    "revision": "7583c5a72fe64fb16da269e18b0a1003"
  },
  {
    "url": "assets/js/21.e94ff792.js",
    "revision": "5278ae2eaa0fbf3f19cfd2fe6d54deb5"
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
    "url": "assets/js/215.1dfd74dd.js",
    "revision": "cbc9be4764a73c59cb9f9c14c1553a9c"
  },
  {
    "url": "assets/js/216.498d9cd8.js",
    "revision": "6d60d2857ee5c82f274db858bb90508c"
  },
  {
    "url": "assets/js/217.e4bc8181.js",
    "revision": "49aa5f7a58d8bcae8104f839c8c97231"
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
    "url": "assets/js/22.32664453.js",
    "revision": "dcf7e115c309074152fc82a7d3028530"
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
    "url": "assets/js/229.ea65b025.js",
    "revision": "60a5dcd0ecac3406de4b2e527c729a38"
  },
  {
    "url": "assets/js/23.b168cf43.js",
    "revision": "59536bf8ed9dcda9043eb26090146090"
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
    "url": "assets/js/233.be21dd0c.js",
    "revision": "11fc47db016511c17512572922939cca"
  },
  {
    "url": "assets/js/234.e8039ece.js",
    "revision": "83b76eff1c072ef11be1f57e1b7b077f"
  },
  {
    "url": "assets/js/235.23bb0fcc.js",
    "revision": "b93aa63c16f1c9ff562209961b9b7849"
  },
  {
    "url": "assets/js/236.3bbbccf6.js",
    "revision": "5867788e440f7224a670bdfb8ff9b4c3"
  },
  {
    "url": "assets/js/237.c4e31fc5.js",
    "revision": "5215c32203eb37d66c4757c4b1afc972"
  },
  {
    "url": "assets/js/238.8e7987d3.js",
    "revision": "af0a2301929fa52c4fc5d95ca8cc3ab3"
  },
  {
    "url": "assets/js/239.eaa0e634.js",
    "revision": "6ca422911dfa4c3d1cf5f74c262e5d6a"
  },
  {
    "url": "assets/js/24.a636d9dd.js",
    "revision": "796e4acb3a52707f3767157ecb64d98a"
  },
  {
    "url": "assets/js/240.540ebe2e.js",
    "revision": "ca2851e1dc6b575d46638edc975cffa4"
  },
  {
    "url": "assets/js/241.23aa7f7e.js",
    "revision": "b73f2eef4db1e7159ec45cc437859dd2"
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
    "url": "assets/js/248.9bca450a.js",
    "revision": "73095b8017e4bed0995ddbbf40443b39"
  },
  {
    "url": "assets/js/249.0f7cdbd4.js",
    "revision": "cb46cc7086da54d5861b90da8d4e61d4"
  },
  {
    "url": "assets/js/25.70035cb2.js",
    "revision": "0236fcd019613adbe33e6eb2cdcb42fe"
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
    "url": "assets/js/252.8e39649c.js",
    "revision": "8111ac4a78af4624b4db78cc27d3d1fc"
  },
  {
    "url": "assets/js/253.9e7d5dfc.js",
    "revision": "aa52628f8db46d0af62ba9061f6a6bd9"
  },
  {
    "url": "assets/js/254.bea426d0.js",
    "revision": "4c3e343c4509e5bf6374890695f8d83f"
  },
  {
    "url": "assets/js/255.98b4d43d.js",
    "revision": "8b6e03572fdbc7fc5bfe5296dc7b7264"
  },
  {
    "url": "assets/js/256.3c5bed67.js",
    "revision": "52759b6b2bc13eb0cb663e1d17ac8901"
  },
  {
    "url": "assets/js/257.91925f6b.js",
    "revision": "088e8ef55711a92cb5bc1bba08ac6da0"
  },
  {
    "url": "assets/js/258.16de4ce7.js",
    "revision": "f416edfe534c4560fdbf8e327b07ffe0"
  },
  {
    "url": "assets/js/259.aaba0aa8.js",
    "revision": "1c5e9f227cc01c16ca24a1e1277f66df"
  },
  {
    "url": "assets/js/26.9b5a266d.js",
    "revision": "cd3e41b761489b73d2602b305f9c3538"
  },
  {
    "url": "assets/js/260.bc93bb36.js",
    "revision": "49e48a2fc199a9e40832724d56de2f7d"
  },
  {
    "url": "assets/js/261.4812cd41.js",
    "revision": "b0eae3428fca43c193ccf9bc4acca713"
  },
  {
    "url": "assets/js/262.cac0d2b4.js",
    "revision": "a465671162d880d1cb96ba3442cca22a"
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
    "url": "assets/js/265.d9dc23ce.js",
    "revision": "8bde44520063dc3a4e9380d804b39219"
  },
  {
    "url": "assets/js/266.486e4bce.js",
    "revision": "cd47555c82d6ce7687852210268ea0d6"
  },
  {
    "url": "assets/js/267.eeef8991.js",
    "revision": "73c170ef45ea18e81a280f1b1a3971f9"
  },
  {
    "url": "assets/js/268.97c60eb3.js",
    "revision": "9933f4785c7c42a61b5169fe69056873"
  },
  {
    "url": "assets/js/269.a82c5a6f.js",
    "revision": "91c9cb6f83bb0443ce365c597a25164a"
  },
  {
    "url": "assets/js/27.3f70a8ea.js",
    "revision": "b4af334dd4bbe8675113fb031b12ffdf"
  },
  {
    "url": "assets/js/28.52f5da0a.js",
    "revision": "05318d60fc936a26b099c4667c3218ec"
  },
  {
    "url": "assets/js/29.005c5ef4.js",
    "revision": "57d08da1208bbc1b00bb959b68a03c29"
  },
  {
    "url": "assets/js/30.d6160abb.js",
    "revision": "8c778ad1920245db9fb472d8300f80ec"
  },
  {
    "url": "assets/js/31.2e5d8428.js",
    "revision": "5c93fc7dba5c0cae72a57e404c66d213"
  },
  {
    "url": "assets/js/32.2f57dd53.js",
    "revision": "3f5cb2b99431811ce495af7b3f39109b"
  },
  {
    "url": "assets/js/33.aca4d88f.js",
    "revision": "2bc431d863b5e7202a7fa730eafccfb3"
  },
  {
    "url": "assets/js/34.6e7ab3ff.js",
    "revision": "ab401f005bec99a509489deb512f29c1"
  },
  {
    "url": "assets/js/35.370e9427.js",
    "revision": "f7e14b81d7bb2aa934bfa8b4f07d9172"
  },
  {
    "url": "assets/js/36.4189a875.js",
    "revision": "e95cc6141734bb5b9dac7ea7bd61d069"
  },
  {
    "url": "assets/js/37.6e93365b.js",
    "revision": "2de6e04bc867dacb6d825f8212aed27f"
  },
  {
    "url": "assets/js/38.e37f0a51.js",
    "revision": "2fd13c9eeb3f3dff73c7b98b6fb93b2a"
  },
  {
    "url": "assets/js/39.f3b73e20.js",
    "revision": "60929e595ff422532b3cbe993e512742"
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
    "url": "assets/js/41.8c0f791a.js",
    "revision": "15f6dba477266e39d2e657725a0b58d9"
  },
  {
    "url": "assets/js/42.2ec2c566.js",
    "revision": "973429d9da550156457542f9468678c4"
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
    "url": "assets/js/52.af7f726e.js",
    "revision": "2ae60aa3b8700ac0288420509c92d973"
  },
  {
    "url": "assets/js/53.865d548c.js",
    "revision": "635936281c733aaef73646ece84e0be0"
  },
  {
    "url": "assets/js/54.027762a2.js",
    "revision": "ec7caf1ac60f7ff4187f134ef6db2439"
  },
  {
    "url": "assets/js/55.e8c9fe64.js",
    "revision": "95294d7c19e6546947801181cd64ff0e"
  },
  {
    "url": "assets/js/56.39ad5173.js",
    "revision": "7b1de3810a8f7ce3357d7c8693d3c359"
  },
  {
    "url": "assets/js/57.3de0d49e.js",
    "revision": "e2de4906baa7f6ab9d4d7266373639f8"
  },
  {
    "url": "assets/js/58.25363bf2.js",
    "revision": "8e29a0a70f5f31e3353266ca42380c25"
  },
  {
    "url": "assets/js/59.9cb4cfd1.js",
    "revision": "29aad12e5b13d7a90d1e24767810a782"
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
    "url": "assets/js/61.72f662ea.js",
    "revision": "690d5e8f94724d3d4ad74ad85ebaf60d"
  },
  {
    "url": "assets/js/62.7aa6c6b8.js",
    "revision": "586b76535393fee0ce8774d515d1c916"
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
    "url": "assets/js/77.ce48375b.js",
    "revision": "c21c4abe06152fa10c1f3544ce45ca12"
  },
  {
    "url": "assets/js/78.ba26b6ef.js",
    "revision": "78b71fdcbe6a9e0e300c04b923420f65"
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
    "url": "assets/js/99.a8fc3818.js",
    "revision": "9b8445efc1837a09387ec9a0cea5a198"
  },
  {
    "url": "assets/js/app.a9147446.js",
    "revision": "b918ef70cdad8aeb0a1e20fedfc24c37"
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
    "revision": "3d68059f8888453b9a9137627c15736d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b8acf5e8e078ce8f43567b5de8bea57f"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "14d7684d7e80819c5f74f761670ef6b0"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0ee4192b5229a08bc86db40c18a61590"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3050c4b6102ba3fedebbbf4134f093df"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "49113ddf56d47a6d96a48b710a0a8d86"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f71b687dbcacedf2a185d26f3d122cab"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "29013143170f94d5666e29b10085e720"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3f34b2fd7f6c243939c3e0011b17ac44"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "121d305ce925bd459560b4d771f05916"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b785408e47c3e92e0e39d3f02080627a"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "df33e6ad7b52c763ef9cb80d817e0eed"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "ae53eadae9d35d87f7b9c5bc9ce09d80"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "28cbc5e495d6a35ea458ee68b8e71d70"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d0ae865ae54b36d8eb940502d357dfd3"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "770080bcccf294da1aaa47eb2c6217fc"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "28e9e0d0c0af71add02121aed59c0d34"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "0d0a15ce8cd1683fd2181aa9ae20d88b"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "bab8b97c11c9ccec56e0f37e73bb7b76"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "dd3e2eb10fe195706c6fb5a8c39d4b75"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "41b873a80eec30883af073485eb3b61d"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "8311e841985ef21cfa4e1e4f105e2046"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "88cef70cc3180737dba03569d27c2948"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "4dbe9eab965698ea4aedd4dd053a7e4f"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "a37c5e2b5f417fbc61d4732caffa68a1"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "479a9ca3cd47a6a1f20b6a742241dd24"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "b3085c5f9fa78c8e47b2c4cb05d31c75"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "dd5bf1e64795ec44f697377a984b14cd"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "daffe2679c92bceb6aa819b854d3a5cf"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "a2da2173c7251006c4ae0c5aecf483e5"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a96de23ab4ee13cde5f2415348460539"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "e54654ea6ddda083c9f59ec4c9663bb0"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "5dc106e2a7dde1957ee832afc9fc39bf"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b1f80baaf322342e1a52b028c0a62503"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "00cefd57e7e4d9c5a55a4e7e0b1d5cce"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "b570373821bb63f4501863119ab0b3cb"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "0afd77b9b3ef76cd99c0b576d8ce7ce8"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "96f69210f2b764c235ad521357759c1d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "448a3dda20a54fb28ba9ef89fa1ef8b7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "73ed5fb39e9d64b1a299447daeebbbc7"
  },
  {
    "url": "book/index.html",
    "revision": "193206bf343f5e52cdd28f57fb620635"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c3da4784d004b969e6576f786373fa9e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "686b4d289a84cf7cb841c913a80a6da3"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "e410ea7626971f39d5418325e8472429"
  },
  {
    "url": "c/audio/index.html",
    "revision": "3b2ff4b8e564dee7957c215861f969bd"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8db83c38a58c839400d3f813dcdd1a00"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "ce1e5f0ee78fd2d71686b5acd5a161d4"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "7304b8545cfbd60b7d290adcf8a1e47b"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "5b28ff278d9450446421f5bc06e336c5"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "408b3ab3960033c8ee37b7d8be303164"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "72611a6d357c0b376cb493aed32d5424"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "8fa608640e2a0f60579ab0a0de7e326e"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "a31b34fa12ce92028624947286d30e0b"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "463bbd9b7c51191f2d9df3e2a4cf4592"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "69ebc278db1da1912d8f364265f05094"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "90c727d530307e2baa9ce24166ab4ef7"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "c2ff1c8ba65c612e55aadfdb9330c6a5"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "f73006cfd9026697366de259c7da2fe6"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "f23f9caf1cba466b55962291db1fc7cc"
  },
  {
    "url": "c/program/index.html",
    "revision": "12024484c78dd04ef5a22a84bd784989"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "960ee84399d403c3caac5058c93959a2"
  },
  {
    "url": "categories/index.html",
    "revision": "c836e63902b4c09756aee41ac07c6a07"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "a4994c8f693ea465da7f053d61d004a0"
  },
  {
    "url": "figma/index.html",
    "revision": "e35e79c4be4a05de3cff2024d525a065"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "2a24f86bcf4dd8cbe3b972138777d81b"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "41334d79757536044475b0ae1efedccd"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "9c0fff908be995916a0267c9aca4095f"
  },
  {
    "url": "flutter/index.html",
    "revision": "be396cb135eac6a59d485cc89afc18ae"
  },
  {
    "url": "flutter/point.html",
    "revision": "c794652e9a56e7a63ae584337323cb51"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ebf45955dcafc31b518f6a5b68daaea2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8e27bf1a1aa45225b5f015a9315662e2"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "10c13c91985c9104c442b78095062d1d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "266abaa4ad34a971876c4a7dcf4852b2"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "588a9b73de94508503f708086b9c9a8e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d5f3387ea963516c6f535478203de002"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "505ef9bee671577fdfe0eec02b25839e"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0a119c52c7a7a070dc6106aed1392fcb"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "dda0e7961db1579936e7465d27574248"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "7067f1ba30ef9613f2e0248e05b9f1c0"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c68963423e03ef603eced51df959839a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f7bbd76511c8b58686be5e0e6b9a2138"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ed8d7447f773685e31c0f81c8b614168"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e1c9da97690eaceaa8c2b094f3c6adb2"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "423a6f1a656461cb69aa5aee5c35f639"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "f834d07996d9927790a1981a0fd4cc33"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "461955b2bb12c9bd4dce76b796b55fe3"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "6e29a61b6e8a635f2bc2c478d7f3f542"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "914332b54d8196288e77452e336e317b"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1813c28568a4f4714e501aac9e1905ce"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "180a4f013c18e8363d9b4e1b232c5780"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d5b96e8129eae8956e488d78b2de83b7"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1e0833ad3f99b5d095751dc3cf1144f4"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d195a365493a7f5e4c515e395ae0ee09"
  },
  {
    "url": "haskell/index.html",
    "revision": "bd88f7330eaee37fcb26a97c814ce3f1"
  },
  {
    "url": "index.html",
    "revision": "7759d0d100e3d1d28b323aa94a2c7468"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "5e25a7c22a8822a4dc0d4a900b5ef755"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "58b62aafc9daaf9ec215e20fbd35254f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "5ac657ca9df38d4e3f9d337aa7169b3d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "a54e25bae8e38f3c3deeebadc555e594"
  },
  {
    "url": "python/index.html",
    "revision": "53306fbea6803f6808a84ec9566c422c"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "07b2e8624c6da2425f62590746491121"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "69b1981dd0a6198ee01564b03ed1911b"
  },
  {
    "url": "python/python-file.html",
    "revision": "0810b6a069c3deaa126de04c5cf1b4d7"
  },
  {
    "url": "python/python-function.html",
    "revision": "395963a1161e1914291a7b24033967b2"
  },
  {
    "url": "python/python-generator.html",
    "revision": "08b90055837b2d9bb51726c7092e1ecb"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "150534c80a05c8fe6e91d015da81f5f5"
  },
  {
    "url": "python/python-module.html",
    "revision": "795c549e079c1207c24e932d85942e00"
  },
  {
    "url": "python/python-string.html",
    "revision": "7abd479167ea9b29aff5e6de69703422"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "21d16cd82b48e3b6c8e91b035dc9590c"
  },
  {
    "url": "read/index.html",
    "revision": "8f22d9f353e28fafac953cdfd30805bc"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "a0d19040c28434a34ac3db307aa3c896"
  },
  {
    "url": "swift/better/available.html",
    "revision": "997563556689d644d023e6bf325ae8f2"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "49b1276ff980f8ea795d2f5892091a84"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "27c0f461afcd7fc17b186ce9a6db91c5"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "797ca41bebbb1e6b337d66a9b649f481"
  },
  {
    "url": "swift/better/di.html",
    "revision": "616549fe124c906c8adf0aa6442c101c"
  },
  {
    "url": "swift/better/index.html",
    "revision": "8a3c947a7cb402ca3ace25d5e29c83e4"
  },
  {
    "url": "swift/better/last.html",
    "revision": "d7b9bb1f5ab06f856ade538d4051d0c7"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "3f60912e8306a06f1ddd90d397930fb3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "fc45df994c7a4bfb707960000d931f31"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a35e945f2a33d2428aea3dee095666e3"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0e171ab8d5fca6d9f05d6370c4878bb0"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "2e4537db5c1d7457e3c27b39f9238725"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d87cf816655c38188066f9e358529a45"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8096d05fa1ca784aacf08a4d78636a97"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "5d6c6eff0c9fa92d26050d3e9166a3b0"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d6b12a80ecbce23b0642968046df381a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f0beebb5767f2c5911e47a80558440c0"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "f72d90ee3e23c8db7394e6f1a7eb51be"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "6020f09785a0c5829bc541d75ae0641c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "2987863cdd9cf8f2210c54a0cb1b8708"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "154b0394ddda68615b4b8f1e4d4c0827"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "8652e920a8e6af26afe4f97d0e61e138"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "624835e30d026708d0f7e5867a5548f0"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "16bdc250291b6c69e07b0af9c3347ab0"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e5c86380831b32fc94d8a5c10f96b217"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "6a24432b683d62d03e6f3b94d94c0732"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "60856588885b526d2a039f1ceda425d3"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "200a0ae08c6353ed95b48c8c63f66118"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "0e441d326789d65f70621bf7d9dba4fa"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "fe9048edc52c333163e2c6fd56352eed"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "2791b36241dbc4631fb2cea78e204203"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "687a1fddbd40895f358e2663f4a3aa34"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "231cf86f83c22cd55b7a03acde683107"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e2676ca024d790aaa93a658407f24475"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "69029cf75c19b39f894a33314b161f92"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "3d007081da7324d4b25661aad1e0d679"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "73b5b5cc9422f3039642024d5c1e3db4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "13eee452010879133038269da9dd340d"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "8eb0b2e6d7ef7fb02290f12d5dae564e"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c5c95ccc33e3398e36c36890af7b89f9"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "55254be8255182b1aa462b23a4f669f5"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "474434fc788b22a527133998e2e5313f"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "85b08e764f895bf0fcd2534e03b49f5b"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "842aa76a6c5e1bee18e8f6eedf08cd63"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "562021f3af4d60f609d2e8b22099cc4e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "89c0b6d24cee1bb1254c21d24776b397"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "839c3391f880544ff14cce9880eed04d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "ca102d542713d06fdb125cfbafe28d90"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "ea495c11796b72bea03e6c8166e61bd1"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "0f13f32f78639d5c4203131ce649eb9a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "241115c5920e84dc038af6e83001d59c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c1d4e6eff293379f31422c867f371d8f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "435eef601fbcbca9905718e3291d3723"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "0c2f1ea0c41043ed97dcf4aa9a26b3a6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a1e285054856e58fcc819a3db16a1aa4"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "a439c08820711d668167cad567033f58"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "6bc9f88a6ade5a634550a54f6f3e585c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "0f57834a3068890821bc8cb4da60d173"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "e035278c1d59b864f8612dc9092892ec"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "eaaab1db975b26ad80841a00e8b71704"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "3d30727cecc293248c1bbb4b081b21a8"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "5387a21e04b6e3c488d458ae97fc286e"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "001ec5768e32e407010f1a21d0de4796"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c9c2df23da9cbfda792eaa47298eccbe"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5e5da02560ca6c5f13a934c3b4a4ff1a"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "bec5a32236a5d24b8b2dc7f834a5cc2f"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "9c9d62f35daf22cd90c8adfba715923d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7996ccd38c630e47acb1f822e9aae9b8"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "4839615949bc4eb946eab8fb0390c46e"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "02af65b27fb30996830b350fe2cdc91a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "87bea9cec52bd11810d68497315bbaff"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "9651e292976102731fb2dc8a183c76a9"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "f17216eee0ccd05cca3ab192925c7055"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "9d76c8b681b96a95e031889cf814dbf8"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a80ad65b0b8d61babdfb31004c12920c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "38db6e29b991791a0204ee12182e7992"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "a42f9d13ccd8511f6fa997ed5f0a0663"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "dd97b867a5b83a8517f0b7986c290153"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a37d1e1b448b88e3fc1ea2964e8b8ede"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e8450533325dff3d2af28e697785c949"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "9f6e5b622eff4cac09cecace88aa4d56"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "40e562031ef41a7bfaedc4eafc04e056"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "772c58c3b3795500eb8efa933ba70e6e"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "f10e014e9860157f45a980b877eee6a6"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f1322520575fe93dc14ff48722a2b8b0"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "774931102f34f7709fa7d461b4d14e3d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4c40777b5933bed50f9aee3d804dfb57"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "8cfdb35e0c87885e8b9b952a01ce7431"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "f5a3ba29d907bb4173ec2ae4305c53fd"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "89b00c67fa7e090ebc2f22ae4a25cfb6"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f4308a6522ae41af9cb2454bdeeae42f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "58f643ac6b297fe72a357155d77cc5dc"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "4793b89ccfcbeb6720581a9f147d4f87"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b250798088601f5f812023aa4039e9f3"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "43516bfe3e79bfa8fa86dfa1befc1a71"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "4b470979562bc149b71c69c0e17ae1f7"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "97ad6f07a533ffb7098fec6f4c478e6e"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8d8f70103d011be618976fbed572a12b"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "d6b338b24792522aa804984720481339"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "8f3ea7ecd4d997b2275515ea48d34f1a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a8147b081eea85815b37f16af6da101f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4f3e1617be7f5deada44d5753e9a17bc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "00d4295fdefb249fff3b102f4648857f"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d21b43501dd74e45172314d8ed86f49f"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "a6b1915c128abe271d1835972f814a30"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "039b3dbdb7c1563ca9c53f7dd077d23f"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "684dee256a11513e7f7c549f0882c4c8"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "1091a7e80d6a91a3c517240b8288d633"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f89a0b7014940d07ec9939c65e4274d2"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "92e0bd3f83ce05969e167d8fe386f412"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a8a5e1d8a6a691a477e20d14a48865c3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d105137f99b00ae772a27c785808ba08"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c81d169573a8a9cab17f446465bb487f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "dfd9d8d0800e93ba21199345c8c6eca2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "58a5958a1d321f9a0b18223d48f8b8e6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "547d8a8a335f5785190e0e0c742ac560"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "631d5c82dad8b36b53b598360ce19a08"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c9a57294baec7deb271c082afd2e35e6"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "f3e9bf6e2af45457735b177e70cc9b70"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ca47cd240e79a9dcab985005c5ccf264"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1bcf8c335e100b659900f0a335c55358"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ebbf06766475b95fd4513cae02485a23"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "4754972df05a17986db372d9c2fca877"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "71ecbc2e86ee5ece1aa8067971b3c9d6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "949b5c7fb60ca00f4aa5661995427776"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "9785ebe0d0cd5e123f2be8c4d05e6201"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "10d32e0ece37e6823309c9cd056302a2"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "867387fde8d90e6b37b917089161d874"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "19868ca5dcb8948c34e78f4700a164d4"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "272f64239f84b219238e1522820ee6e4"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4b4c047be57cd28b5af40d8286c86d3a"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "becb5841eed30e6155771c357fc9ff07"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "18be0e733e076e7d841596754641dad4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1770efde9038eb46483c2ea82bb51029"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ddb1c04187d09ffc8c8dd8b59e58a1e8"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "12702d416ac17966b8ed0cb9b60b69cd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "42fa7070bb628f79fb2b79f50607b759"
  },
  {
    "url": "tag/index.html",
    "revision": "9d4467fdb95cc5ea4fda32e8da7fa924"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0ca86215eda6124042aadfd0eca75294"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "50423998d2e923af3f5430ae9981a7a4"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "9e0fab4c7622e6fa7bae6047a1d88144"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "db55d86ab454ff18c4661b53c5eee268"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "984764811cdbbcc579fa35fdd3b0c61f"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "408e0b3e8ecb5ca7e397002acde27fa8"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "3b8c5afa972c49cc06721448deeafae5"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "767726999dad3123983c4ca0482b39c3"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "84d5ae968ab132388c91b9db922db766"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a0456d4bb5685e00ac0a9a72f7b86b08"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "8ef583a4ae54174f4178a80bc517be97"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "04f8c6e1302b3f8e729a9f0d210d36bc"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c3adad6c0f7547926c7aee09a38ffb2b"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "bdc9494027b0de9e3ddb35fa96e4c3e1"
  },
  {
    "url": "tag/read/index.html",
    "revision": "11d5eea108df4d645c0cefef3f4a710b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "2aaba81cd90e2dd07f73db2b4bba6098"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c7641d53675bdc5c5fbd9f40de8ec787"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "f7094f9c9a0716054fc0dd501aa64c5f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0d7bf5270757aac004f8b793cfc7df06"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "1b656f8bc9edb9e97e8d9f638953d8bf"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9ae252f8eab2c570ea01c04480cddd8c"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "20b93a143b9aa0a83a64b4449556ec71"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "2dc3e93f9d1ba87ae72a25efdd26579f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bba0b9815f94e9acab00d9d9f4d605b8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e08d114cf8102e3eeaa8e7c751a41279"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "cfa310f1346e35f67472d60866b70996"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "5c2e0d6b9e544f7f31f1471a3a4fc0ce"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "3e1b1d3624777dc6bc1c37064c904b20"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "3ef2ea7300614d204547be33aede6c8d"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "d47e65de5c27b6ea236b43db3668fb4a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8b313933010426e7f47095e8dcc97603"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "f9cb09be3cc161e56a70f17eb1918e52"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "9932b2788ff184f7066c6e8f9df931c2"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "aa9087906d531faf8d191f84808e7c43"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "70fa0ebf067a8a6f0a54e504bda4f6d3"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a972602d4f8b149265c4f6ad51d654b4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "8c736bf7029913d160c1d703c4338a2b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "bfd5abc229995d187490edc2e5d5d387"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "850f6d4c73938bb6bf50e54ca6613e8c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "2b1ddac2c7e8050213b6a41e0f012f13"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "57c90bcfc54b1654c34360e3c56800a2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "73105a605c0f97be00e5a8541704bf8f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "183666439e63f7cf992107f443231d38"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "7b281c4cd0c021bc7ebf558e61a09f87"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "17fe296db4b38b85e06fd1fb19e0b9e9"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "77dbabbce2eae8d72f94433c00624e0a"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "48b1c5a6f81e4a50367a07522fd5db66"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "0739114a8a81b29a6f2192c7a4a976e7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0b59253f0600928abd652ca58b273f0a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a7173266eb5527d8d9402a96ed15f625"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9d9d0f7b8b05d07d75eaaeeb5fda94a1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "86ce32128369b959412bad1d6ed864ca"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "479a507d061639a8f0f02a4b450266b0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "03535f06cde54893c3686c41e88a96d3"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "56b6dae3d1a619da99d9101b6aa77982"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "833302a89aab98db8a044ca70171cf45"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "779534c58a926031f6428e5830d4e450"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "635aac9aeea017cb6aa5ffab832cced1"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "5a99b414fcccbe39902a90e56c0ea78d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ab8ce9d2aa8a22b7f1d04e869331f0b6"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "ba14da5f3deccaf6b8fcccbb794d6123"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "463662aec90af3cec5b41f339794746b"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "9a48aa28317ddeaea1f5b0d6d7d62acf"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "f8ef0f446f6d9ad839f61a12b3f6b3ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "18c1213fdced0df686a5b832acea7e5a"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "423fdf2593259763aa4df1e88b1b6193"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "9fcee3105a5f9b24b1d9548cc9644a83"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "d36af4a2809254d6b067baa8fcc97bcb"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c743adb6f767c9e233e7405b221a41bc"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4023ac20a511cab09d7601a5efdcdb4c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8fdb7d6ba49505b78f10878d67ae7e08"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fd8685b2687b047eba44b72d18c09fd6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "75f5af4c7fb87e2a0fe1b5851419036c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "658edae2ff28972b77f9f220feffd0b0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d19b08d35e1cdfca85859c02698078eb"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "57777cc145905eee463c6cc2ce89d5ca"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "02dfbe9d22456fffef230b09e00d9a24"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "0e3d0fd75bcf2fcb95abdcdcb1c06ca3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "9915ec1acb46fca8ba4f365cdb3ff69f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "96f5f67d405a5d594390e778a13ef052"
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
