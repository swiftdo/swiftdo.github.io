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
    "revision": "f0b878ccb07e22d457d4169ddc22b356"
  },
  {
    "url": "about/app/index.html",
    "revision": "3008201f9e1d397c6c790923a963f929"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c2f0f6789e637d506838db234c02a3cc"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "243cc95b25ef9845dd90ca1a606ca0ef"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "98051aca684b52874a501d0c5cca7c2e"
  },
  {
    "url": "about/index/index.html",
    "revision": "21d78e9a180be5f9e6b1e6227af6b53b"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "c5d45fbc9baaa523064396c982ed3100"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "614192ab9a09f60c33a967cc7315ee51"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "a7a6b5bb509e30adacd267940ba671ea"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "82127870c38e4d4babd99b41cfcba20e"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "b0cdc8dd11f79c05c91c60dd21e261ec"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "1e152c4f304599ac73d9af9646fdcd94"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "26c655c12211bce271cd30b337d858bc"
  },
  {
    "url": "algorithms/index.html",
    "revision": "c6478f60ca28a1f1be8f95587fe42414"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "0ff492e4555f43d703c05b0d16aa9eb4"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "0e4d923e0f2cf59464d360227313fda3"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "941abcbc38fb1dd79e69b4b8d5f64e69"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "aefc764e68cbc860e3994de2b2d1fe6d"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "fdaa21ca117a65d415273d698fd8adbb"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "745d7cec69e37d1a2dd84a930ee3bc1b"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "4bfa477f4468c606b1dcff59529218a1"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "164ee73c197ec8a88681e84f7314784b"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "151d91aafc3e5fa8c9b3ea7541b8a990"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "516a817952dc44527039f32a5edc661c"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.08d6e399.js",
    "revision": "6360c81ade1f391355b38da76a0c5b92"
  },
  {
    "url": "assets/js/101.8ed9ec4a.js",
    "revision": "d3b29341ad9edd42fa467c4befc594a9"
  },
  {
    "url": "assets/js/102.68c4bf3b.js",
    "revision": "0a5d2acd117c0132393f8bd80a4823ba"
  },
  {
    "url": "assets/js/103.f5ba8d20.js",
    "revision": "9f71a6f1e6c8c59270db76c95108b887"
  },
  {
    "url": "assets/js/104.466be66b.js",
    "revision": "10db89a3ffcec72711231b6db8568546"
  },
  {
    "url": "assets/js/105.3e69541f.js",
    "revision": "2201e6f975006397b6ad3c4a6573ecc2"
  },
  {
    "url": "assets/js/106.1408ab2e.js",
    "revision": "ae7bad4276d36e62a4a331922126274e"
  },
  {
    "url": "assets/js/107.799e0b05.js",
    "revision": "0eb246d3f70cd82afbb4151a762f28fe"
  },
  {
    "url": "assets/js/108.698b0013.js",
    "revision": "aa8d2f316d8c1a098d2111a54f4b396a"
  },
  {
    "url": "assets/js/109.c057e1d0.js",
    "revision": "aef7af4c5ffcc5f3db436650807f824d"
  },
  {
    "url": "assets/js/110.ecc29d67.js",
    "revision": "808370fa3a8980bcb0cf289e45fc9899"
  },
  {
    "url": "assets/js/111.5d485199.js",
    "revision": "775036e5be7c55d705081a74e010fe99"
  },
  {
    "url": "assets/js/112.5c97d229.js",
    "revision": "54aea5e44c0150399551b80fd8592aa0"
  },
  {
    "url": "assets/js/113.9a53a95f.js",
    "revision": "780a3ff7e6754509d5f3a80859398382"
  },
  {
    "url": "assets/js/114.246c44e6.js",
    "revision": "2214580e8637970f97407ee539d673ae"
  },
  {
    "url": "assets/js/115.70c21148.js",
    "revision": "877c2a274179169a6c280522cacb7edb"
  },
  {
    "url": "assets/js/116.3352219e.js",
    "revision": "5ffc0d1cea8d31523298356fa8180245"
  },
  {
    "url": "assets/js/117.98e34c56.js",
    "revision": "93f178bd58c661a1453ac691b5792d31"
  },
  {
    "url": "assets/js/118.f88193ed.js",
    "revision": "e48f53198459059d6179223b385b4660"
  },
  {
    "url": "assets/js/119.67e31c9a.js",
    "revision": "15ccad92bb36d19fc3d83b513e068d07"
  },
  {
    "url": "assets/js/120.cc1772f3.js",
    "revision": "a35f95048ed1199ca6a2a6854312a519"
  },
  {
    "url": "assets/js/121.0b795269.js",
    "revision": "987246254277c514eb7831a09a1ac6c5"
  },
  {
    "url": "assets/js/122.d42fdeea.js",
    "revision": "518008e7a779d3514bf1c994323f8e21"
  },
  {
    "url": "assets/js/123.7e3efcc9.js",
    "revision": "353ab273621735338cc08475cd6d761d"
  },
  {
    "url": "assets/js/124.351205f2.js",
    "revision": "0302958f9e24859aeb77200dbf6f471c"
  },
  {
    "url": "assets/js/125.4c630d8c.js",
    "revision": "e1997e31ed3a6b542e892765b14cbbb0"
  },
  {
    "url": "assets/js/126.3931ebe9.js",
    "revision": "af36ada32d98c34b2fd1ded054cb58ef"
  },
  {
    "url": "assets/js/127.07f32fae.js",
    "revision": "29c97320f407e5f7a8fad0e901be3466"
  },
  {
    "url": "assets/js/128.18e1812a.js",
    "revision": "814ce0a8bf26f4558d4e39e0cbd7c9b2"
  },
  {
    "url": "assets/js/129.651f3d85.js",
    "revision": "9ee5512e41e1033be627aa5fc37af789"
  },
  {
    "url": "assets/js/130.3a6371e7.js",
    "revision": "801fbe6c6d8ce8137039ea747a8851f6"
  },
  {
    "url": "assets/js/131.58ef8516.js",
    "revision": "45f0db71adb61be31e2077be620bd601"
  },
  {
    "url": "assets/js/132.5aa11559.js",
    "revision": "11e9407ad71acc8031d207bc93e0f432"
  },
  {
    "url": "assets/js/133.a36510aa.js",
    "revision": "5188ea6e05189dd674467d2eaabd200c"
  },
  {
    "url": "assets/js/134.e7fe1e34.js",
    "revision": "e7bac9d67b7f501edd2143cb663e255d"
  },
  {
    "url": "assets/js/135.81690674.js",
    "revision": "80db8e8634c1439c4cf5de2176dbd949"
  },
  {
    "url": "assets/js/136.3422af56.js",
    "revision": "37f5b1f7b539c5db1f2de4e083ff8d61"
  },
  {
    "url": "assets/js/137.c91567ee.js",
    "revision": "90f5c62697af02b34ed58c3a04e91ad6"
  },
  {
    "url": "assets/js/138.cad170a2.js",
    "revision": "c359b523de424c0d8ba9ed600eaba939"
  },
  {
    "url": "assets/js/139.cd6862ac.js",
    "revision": "19a65d1e76852c4f2871199285a27d0b"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.62563523.js",
    "revision": "f96eddcfb79c0ae00cd4a099867bf332"
  },
  {
    "url": "assets/js/141.b7d87a0d.js",
    "revision": "6caad86865984e595009bb137c03a1d4"
  },
  {
    "url": "assets/js/142.bfc9c33c.js",
    "revision": "b1426670b26a808b37aa3ef73c54550a"
  },
  {
    "url": "assets/js/143.6833c3d0.js",
    "revision": "3e9a186f868a3d810e92898b5ed5b804"
  },
  {
    "url": "assets/js/144.11f52e8e.js",
    "revision": "da3282f31c1b45f8e66795186ef450b8"
  },
  {
    "url": "assets/js/145.921c7d40.js",
    "revision": "646ba6f47d47a25a2c9a07532b12ed99"
  },
  {
    "url": "assets/js/146.8af0271d.js",
    "revision": "fc0d04382331869d1a8fc2fb7fa63c9f"
  },
  {
    "url": "assets/js/147.c759b900.js",
    "revision": "19863be2ae67607918f7fa2d00b6c8ee"
  },
  {
    "url": "assets/js/148.4d3fb319.js",
    "revision": "340ce2fd52d72049a401609d4d09c793"
  },
  {
    "url": "assets/js/149.4e506fd3.js",
    "revision": "66235d56bbd3fd16494590e45eea4043"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.6fde33fd.js",
    "revision": "1b85cdaf5849fd32c3d094de07465479"
  },
  {
    "url": "assets/js/151.07e44df5.js",
    "revision": "1ee7e41a66294723f2ee54cda370b5e2"
  },
  {
    "url": "assets/js/152.df964320.js",
    "revision": "b7f461d820a978e57a514cb4fbb6ce28"
  },
  {
    "url": "assets/js/153.d5daeb89.js",
    "revision": "f3afdabd14a9c06af6224f1aabff052d"
  },
  {
    "url": "assets/js/154.ae469db7.js",
    "revision": "0174f8b381314d0f49f0cc16ec3c9edb"
  },
  {
    "url": "assets/js/155.ad9727cd.js",
    "revision": "3a168fe386af181f16600cbc733b2f1f"
  },
  {
    "url": "assets/js/156.f91cd8b1.js",
    "revision": "b20aa56fbbe8aa7d89f8adb3f474f0f6"
  },
  {
    "url": "assets/js/157.3b9a3e59.js",
    "revision": "7996cea0ba9d33b497cf3a85c7e378ee"
  },
  {
    "url": "assets/js/158.75fca043.js",
    "revision": "ad2675aa506f7dcc71890f3da9ad3f69"
  },
  {
    "url": "assets/js/159.d23429e1.js",
    "revision": "679e8cdac841912d2782e78908ea1a7f"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.7409531a.js",
    "revision": "1a26d3cce94d679149383683a4772088"
  },
  {
    "url": "assets/js/161.35ad3d75.js",
    "revision": "1f3e627b19cd93e05ff7808a11e49bef"
  },
  {
    "url": "assets/js/162.2a8de2ec.js",
    "revision": "a9ca35f0c5dc72f292961c95d2a725a9"
  },
  {
    "url": "assets/js/163.4116ce6d.js",
    "revision": "4a0876e1501bca0bd5c183def1419c1d"
  },
  {
    "url": "assets/js/164.96d3b2ab.js",
    "revision": "2f479e87ed5484b7bafa08d5ca7697f3"
  },
  {
    "url": "assets/js/165.32336df3.js",
    "revision": "00f9f6613006f4d0c1b51611875c7377"
  },
  {
    "url": "assets/js/166.505c870d.js",
    "revision": "965ef9a8293056f2262459d1871e219c"
  },
  {
    "url": "assets/js/167.34e2be70.js",
    "revision": "a7964b4604e37a23dec28a08b0703612"
  },
  {
    "url": "assets/js/168.641427a0.js",
    "revision": "89c3e70fa2eee114b60ec44545e66230"
  },
  {
    "url": "assets/js/169.5c0fd29a.js",
    "revision": "ed874f7b536fc622c6908fa4da890ec7"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.aaa45755.js",
    "revision": "b529dc0f5c307182fab5f3fca0c6e701"
  },
  {
    "url": "assets/js/171.bc644eb3.js",
    "revision": "3b367a019ef742a19781f1e463e8be36"
  },
  {
    "url": "assets/js/172.d7d9f184.js",
    "revision": "59ec4fafd5fb02321f929e2413c139b2"
  },
  {
    "url": "assets/js/173.7686740a.js",
    "revision": "2d61b614e5d987c8598ce912b9483cbf"
  },
  {
    "url": "assets/js/174.c94f45b4.js",
    "revision": "fce5a5a8322fc878363a4ddf02960958"
  },
  {
    "url": "assets/js/175.0e136280.js",
    "revision": "6e70fd6dc703d2ba34446cb4a66a8cf6"
  },
  {
    "url": "assets/js/176.4e2ee110.js",
    "revision": "5378af9daf540198ab9943ed56349bbf"
  },
  {
    "url": "assets/js/177.7e76f23b.js",
    "revision": "ea10f63be8a0e01a10fd851c646bc4ca"
  },
  {
    "url": "assets/js/178.23d00570.js",
    "revision": "9437617a7ab849e6153fb77307d6e5a2"
  },
  {
    "url": "assets/js/179.c68e75d9.js",
    "revision": "7c6f807a05e873ceb25cdbe3fc61c39c"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.67fc3863.js",
    "revision": "c29fbcb03f6126762c420093d807c6c8"
  },
  {
    "url": "assets/js/181.b7fe1f4d.js",
    "revision": "3f709ea91db5fce0bb5b3e9f435a57f6"
  },
  {
    "url": "assets/js/182.a928c426.js",
    "revision": "4a42c03107f6da46592c3cfd04e265c0"
  },
  {
    "url": "assets/js/183.db2acee9.js",
    "revision": "8ef3c95c6873ba204779e16f37beb713"
  },
  {
    "url": "assets/js/184.76814a51.js",
    "revision": "e80467f3abae56c56d7d3e612510f635"
  },
  {
    "url": "assets/js/185.405e0a1b.js",
    "revision": "962f06cc3f364b63bbb8fcc08ba20728"
  },
  {
    "url": "assets/js/186.990f2284.js",
    "revision": "a28c64e8751fba3f32a4aba8a613bfab"
  },
  {
    "url": "assets/js/187.1a0cc5c4.js",
    "revision": "9a3a1729734d9cd67dd7bf0a76877f03"
  },
  {
    "url": "assets/js/188.2afd7d43.js",
    "revision": "af2ff421684dc7716d6997d0caa2c681"
  },
  {
    "url": "assets/js/189.f16c5545.js",
    "revision": "cb7b524b4fd85b8d36fa0146e337345c"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.726048a5.js",
    "revision": "417ab7dd6a1a50f06ef70a504ea59abd"
  },
  {
    "url": "assets/js/191.a0d3bff1.js",
    "revision": "cd4b6e75ade4310f0fbe289a00acbbb2"
  },
  {
    "url": "assets/js/192.7ad5a7cb.js",
    "revision": "ffbde7200764f6d5d6450e57a4cbfc57"
  },
  {
    "url": "assets/js/193.d8cdc9dc.js",
    "revision": "91260aaaac21123ea17bc131983a8754"
  },
  {
    "url": "assets/js/194.bf9c8ed8.js",
    "revision": "694aefa3818968a3d1031c6e7d3d431b"
  },
  {
    "url": "assets/js/195.762c0522.js",
    "revision": "5dd6d51080bf43879306426b084bd4bf"
  },
  {
    "url": "assets/js/196.f1fdd9cc.js",
    "revision": "74c4d5e398e9fbb4a464e85adcde0b3f"
  },
  {
    "url": "assets/js/197.671051b9.js",
    "revision": "ce362e112d43d977d3db31b9a60ae164"
  },
  {
    "url": "assets/js/198.0092cf78.js",
    "revision": "3a10d53e4be9165acb0de9e741bc81c1"
  },
  {
    "url": "assets/js/199.87abf363.js",
    "revision": "7faf938c4e239fec43f8bc226d22ee63"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.38b11144.js",
    "revision": "00e1108d9c8234a2cb9169d98d4d69c1"
  },
  {
    "url": "assets/js/201.605bb2cc.js",
    "revision": "cffbf57174928658ff14f0731ba2c0ea"
  },
  {
    "url": "assets/js/202.e8ddef60.js",
    "revision": "223f932e1e7d0e32b4ac39b4dee53df0"
  },
  {
    "url": "assets/js/203.c8fec291.js",
    "revision": "51721a32ba993305f9b560939484fbf3"
  },
  {
    "url": "assets/js/204.7454298e.js",
    "revision": "7edf0d6672ec10583e339f4e366db39e"
  },
  {
    "url": "assets/js/205.90008270.js",
    "revision": "4cc07a3146bd2486024de5a9b02277aa"
  },
  {
    "url": "assets/js/206.736cccf9.js",
    "revision": "582150fbfb540c00c71e798692984ce7"
  },
  {
    "url": "assets/js/207.540a41b7.js",
    "revision": "39c487ca56ce5deb067ae5304e4c60ee"
  },
  {
    "url": "assets/js/208.69e2ed71.js",
    "revision": "084c16f97d57bfbe722123ebc34cec74"
  },
  {
    "url": "assets/js/209.5861a57f.js",
    "revision": "8c6dade01734cd544ce3a6484af8453f"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.f8b61aef.js",
    "revision": "4b431447487340a94dc493690b1c803a"
  },
  {
    "url": "assets/js/211.5702cb01.js",
    "revision": "f70151d638e5b9b442fb4dde8a572d5b"
  },
  {
    "url": "assets/js/212.eea10a33.js",
    "revision": "e0fdc7369dd2b6811fb9595fbd5d8f32"
  },
  {
    "url": "assets/js/213.b582fa00.js",
    "revision": "970aede08142395aa79b7595edaf1cf6"
  },
  {
    "url": "assets/js/214.35abf4e2.js",
    "revision": "1354b58174eef632d1a8445b8889224b"
  },
  {
    "url": "assets/js/215.304c4368.js",
    "revision": "87e841ef84473efe8b956d4d382b6cde"
  },
  {
    "url": "assets/js/216.b52bfea6.js",
    "revision": "5dc85f3387466db9ce0517087304bd79"
  },
  {
    "url": "assets/js/217.01d0c942.js",
    "revision": "ec79db0ba422a24433bdd9945336a937"
  },
  {
    "url": "assets/js/218.16e99c76.js",
    "revision": "f2d729e5e68e29665f7e22ae076e30b2"
  },
  {
    "url": "assets/js/219.f844ee97.js",
    "revision": "73717b1e75d0e55b5c4af7290f41e9b8"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.c32c3036.js",
    "revision": "749be30a7dda01f21aafb6b8861bc805"
  },
  {
    "url": "assets/js/221.5c945b60.js",
    "revision": "0e8c9cc0c96852550a93b42440932b31"
  },
  {
    "url": "assets/js/222.c648afe5.js",
    "revision": "394d76097a4f10085ab5a6a487a35e31"
  },
  {
    "url": "assets/js/223.56d53b34.js",
    "revision": "66e54d914d2b6c5b6acfd843cc34d98d"
  },
  {
    "url": "assets/js/224.6fb6bb4a.js",
    "revision": "65ad90fbb85dfd0df9e215bd92da8415"
  },
  {
    "url": "assets/js/225.a5e6a15f.js",
    "revision": "6f9dfd091865468b9fe750b78d795698"
  },
  {
    "url": "assets/js/226.01610b1c.js",
    "revision": "6c41d43f2dbb08bef35ba0836bb8dd7c"
  },
  {
    "url": "assets/js/227.9d6bfeb1.js",
    "revision": "d4f6c23943b92d9e7dceec206549643e"
  },
  {
    "url": "assets/js/228.1683bc72.js",
    "revision": "845d49fb52d22b81d5e73735d5b3f32a"
  },
  {
    "url": "assets/js/229.800a2431.js",
    "revision": "5a40583c3500ad5eb3908563f987d97b"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.1dcf48d4.js",
    "revision": "740cc706eb72ee1e415f65b47ec3d54f"
  },
  {
    "url": "assets/js/231.1dc82bea.js",
    "revision": "351645d43095363317aef5592c775c67"
  },
  {
    "url": "assets/js/232.aab2d2ce.js",
    "revision": "946fca6600683c1b414dc98ac2d48ee9"
  },
  {
    "url": "assets/js/233.af925fbd.js",
    "revision": "a8797a941cc63bb0bbceed018f505020"
  },
  {
    "url": "assets/js/234.19ed5d75.js",
    "revision": "af4eae914afd11c1e75660a2cd2deee1"
  },
  {
    "url": "assets/js/235.ebcd4cb6.js",
    "revision": "86aa36d40e7ab28ba42246ce894cab80"
  },
  {
    "url": "assets/js/236.3d0adcee.js",
    "revision": "6045d23931f13183cf0d78d25fc9cd30"
  },
  {
    "url": "assets/js/237.a004e612.js",
    "revision": "0f8d197b726ebc312b8eab7f4ce49666"
  },
  {
    "url": "assets/js/238.d4de6fb3.js",
    "revision": "8940c62d3d09bcc766869f5926377e92"
  },
  {
    "url": "assets/js/239.45ea45eb.js",
    "revision": "8e09d60a3e244d242a251ffa9fdf130f"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.e52c661e.js",
    "revision": "91107286ec84efb63a2bc92a3669c7e9"
  },
  {
    "url": "assets/js/241.3db29346.js",
    "revision": "972a1f15779442487c598d2c0714b1fa"
  },
  {
    "url": "assets/js/242.a40e54fe.js",
    "revision": "452fd444abf9474ee09c2b5a4229065d"
  },
  {
    "url": "assets/js/243.f1329529.js",
    "revision": "65123b2adeeeeb26d98b50534d29e677"
  },
  {
    "url": "assets/js/244.7870cafa.js",
    "revision": "e198aab54cacae689555815ea216c678"
  },
  {
    "url": "assets/js/245.cd8abff0.js",
    "revision": "74f69c12d3fc0b28cc36a5df45b59681"
  },
  {
    "url": "assets/js/246.73d0e536.js",
    "revision": "01c0bc653357290b26e6b7e7b1eafa52"
  },
  {
    "url": "assets/js/247.a314042d.js",
    "revision": "978326acd4ba5aedefb32b5ed9c1ebe3"
  },
  {
    "url": "assets/js/248.d66ed19b.js",
    "revision": "119efced75262a5536c2f9accffc0c97"
  },
  {
    "url": "assets/js/249.70e643b4.js",
    "revision": "4fdb4efc6f5a03f95f692076374102df"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.41d20bd2.js",
    "revision": "d582e2c5c77d2dd7ea0cac953c46cd65"
  },
  {
    "url": "assets/js/251.f253fa3c.js",
    "revision": "e250cb380d7cfe8a2a67be4df8dfcc0b"
  },
  {
    "url": "assets/js/252.cf5219b9.js",
    "revision": "841e7ec5b2ddd988a7012bb22ce110f9"
  },
  {
    "url": "assets/js/253.4d23e301.js",
    "revision": "90f9b67f0faee77c6a1b6dfe6b1e94c1"
  },
  {
    "url": "assets/js/254.fa90e01a.js",
    "revision": "49ae927ec8a4054600e18f97206311d0"
  },
  {
    "url": "assets/js/255.f5fc270c.js",
    "revision": "5989f5a1527d1f4ff18e1a264d06dbc3"
  },
  {
    "url": "assets/js/256.db506155.js",
    "revision": "fcb3fe25a4f04d1b0b27ecaa8f9b139b"
  },
  {
    "url": "assets/js/257.950d6ff8.js",
    "revision": "4b7c09c89d68bf3d80318266d18b8b13"
  },
  {
    "url": "assets/js/258.d79cf345.js",
    "revision": "31051d6473d0e02b98271d195a137839"
  },
  {
    "url": "assets/js/259.3a63be22.js",
    "revision": "1ed71a933275863f86907ad430d46106"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.2547fb5a.js",
    "revision": "87e085d2f027571d77499c0d91564d84"
  },
  {
    "url": "assets/js/261.e3ddc87c.js",
    "revision": "714c848a813261e1ef47c4abd9ce856c"
  },
  {
    "url": "assets/js/262.4a43e0ba.js",
    "revision": "160f4964e83e8b67d13055fd8b08ece8"
  },
  {
    "url": "assets/js/263.4b36d7ad.js",
    "revision": "82b3a2aeb2909c55176677d30765251a"
  },
  {
    "url": "assets/js/264.b883593b.js",
    "revision": "a4c9ad8ee15fc236fd6977834af44037"
  },
  {
    "url": "assets/js/265.377f0e8e.js",
    "revision": "f5b73647e27d3c9f674986dc46c33fab"
  },
  {
    "url": "assets/js/266.190c6dab.js",
    "revision": "b1ca6596c375aaec68425511f3109b99"
  },
  {
    "url": "assets/js/267.d278fcd8.js",
    "revision": "a0ccf214052e8b8d1190ecd86e282fd3"
  },
  {
    "url": "assets/js/268.af5d8787.js",
    "revision": "10c0f65a9beb63ddb77d240005c67b32"
  },
  {
    "url": "assets/js/269.39bfdd13.js",
    "revision": "64fb5b7a6c61dcf9e17244828b023b04"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.b444a858.js",
    "revision": "b6d51998e2ed679afecbfcb7680827e0"
  },
  {
    "url": "assets/js/271.8985de9f.js",
    "revision": "11c0b544b51f107fd9715e46ca8bddd5"
  },
  {
    "url": "assets/js/272.bb7fb349.js",
    "revision": "7fd9132078ef849f506c50e7396e7b7f"
  },
  {
    "url": "assets/js/273.3aa2bab3.js",
    "revision": "de00c4d8c739f0404c25c24a4b6d8990"
  },
  {
    "url": "assets/js/274.b5cbb6d7.js",
    "revision": "11224c18172a8cd20d2a7083d5faecf5"
  },
  {
    "url": "assets/js/275.9741f0d1.js",
    "revision": "e5c423a02a49916a5cace2a23845337b"
  },
  {
    "url": "assets/js/276.de6ae8ad.js",
    "revision": "0b9623062e158318a0a0c8f2bbd16389"
  },
  {
    "url": "assets/js/277.d08457ad.js",
    "revision": "4b6557bfde49dcc37302dc6fe872da2c"
  },
  {
    "url": "assets/js/278.7e9766c0.js",
    "revision": "a200d73f56891aede479d30af21a24e2"
  },
  {
    "url": "assets/js/279.dc459baf.js",
    "revision": "a44d54e7fb5f601a17429a2407413151"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.69475943.js",
    "revision": "66788cb6136867303d28e18daeaf4532"
  },
  {
    "url": "assets/js/281.d02923ef.js",
    "revision": "890e8d3cc13e3b68dba91f6dd1727ea9"
  },
  {
    "url": "assets/js/282.06290020.js",
    "revision": "898b01773704fd73b93c2361092f2882"
  },
  {
    "url": "assets/js/283.2bf17bbd.js",
    "revision": "1bb6700b8808156385e061b7fb78eea3"
  },
  {
    "url": "assets/js/284.a6c000dc.js",
    "revision": "b60f9deaf986021e56038d2ba12308c7"
  },
  {
    "url": "assets/js/285.d30434a3.js",
    "revision": "a994367546c76be73347724be3285e63"
  },
  {
    "url": "assets/js/286.f3242735.js",
    "revision": "9521f7f8af8f5c32dfb2851c5ea87274"
  },
  {
    "url": "assets/js/287.f4419c9c.js",
    "revision": "9f4af7befc99b7daede6b1e3693d17cd"
  },
  {
    "url": "assets/js/288.685569bc.js",
    "revision": "0f0508c55ef771c6b39f1c2928fe0f2b"
  },
  {
    "url": "assets/js/289.261fa4f4.js",
    "revision": "963d761c4eaf236ffa88fbb6d2946fee"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.bffff0a7.js",
    "revision": "2b897ec5efea5f715af80a41084b7d7e"
  },
  {
    "url": "assets/js/291.29ac6501.js",
    "revision": "3fae049312c4b10cc1dc29021e383465"
  },
  {
    "url": "assets/js/292.04603ef3.js",
    "revision": "ecf15fed0112a8f9e0350fe036a9a84b"
  },
  {
    "url": "assets/js/293.f5235cf6.js",
    "revision": "3e37a4c3a33c2fb0205d52970efef137"
  },
  {
    "url": "assets/js/294.27b5453a.js",
    "revision": "14fbdaf6bbdd7fd27995f241f4c92985"
  },
  {
    "url": "assets/js/295.e7a0b815.js",
    "revision": "fba0f6da9a96cbd93a646193f0ff8290"
  },
  {
    "url": "assets/js/296.7b0c69e1.js",
    "revision": "427f68eccb5d93c561abea1eb21d2838"
  },
  {
    "url": "assets/js/297.17a6f17c.js",
    "revision": "80c40514766c68e77872df731eb66f47"
  },
  {
    "url": "assets/js/298.bd8d2f0e.js",
    "revision": "d39608f4251d39c04205d42c7b50aa76"
  },
  {
    "url": "assets/js/299.448932dd.js",
    "revision": "dc1bbb7a9b421bd92ee5dd5c7b6a0c80"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.ce72a8b7.js",
    "revision": "17207c1fb556a08f66eb53cf63faf0e0"
  },
  {
    "url": "assets/js/301.63298650.js",
    "revision": "badcb10159b7f746d9e25b3a98e71eb6"
  },
  {
    "url": "assets/js/302.40e772e2.js",
    "revision": "0ec2d5e93dd765c594d6eef37e595174"
  },
  {
    "url": "assets/js/303.2de66cc7.js",
    "revision": "aff2ffa01f99d5d206092332a52bec25"
  },
  {
    "url": "assets/js/304.9bfe3e00.js",
    "revision": "ea840af6384d4c629a5e7d502ec49dd4"
  },
  {
    "url": "assets/js/305.584e8fda.js",
    "revision": "0cbaa16771472de363130c177f227552"
  },
  {
    "url": "assets/js/306.e70a7d89.js",
    "revision": "54dcc268020ee1469e22b554b43ed6d5"
  },
  {
    "url": "assets/js/307.0d551365.js",
    "revision": "957a8fab277ba5aded18b6321745f733"
  },
  {
    "url": "assets/js/308.82c871a3.js",
    "revision": "1b4846934bfb879dfc5a147f805c4d06"
  },
  {
    "url": "assets/js/309.6f6427d9.js",
    "revision": "a864c0c8d9d8c00bd6921cbe9b41365d"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.c05dc395.js",
    "revision": "74139a5851a0268b05a156d544ff84d1"
  },
  {
    "url": "assets/js/311.0351d763.js",
    "revision": "7b46469633d0f1d8d8fd96e88036cd5d"
  },
  {
    "url": "assets/js/312.194545d7.js",
    "revision": "df2ad2efadd7c7b481ada11086693f94"
  },
  {
    "url": "assets/js/313.7211f884.js",
    "revision": "4bb63d59a7c208910c61b6105b2207d1"
  },
  {
    "url": "assets/js/314.63965c09.js",
    "revision": "2100311d9b12ca99c400b4a44a96d105"
  },
  {
    "url": "assets/js/315.c789761b.js",
    "revision": "f08fca5351262ab0ffb2dfe9cf1a4cd4"
  },
  {
    "url": "assets/js/316.c1497260.js",
    "revision": "586d6d63f6a26c430b4dc907d8efb8f1"
  },
  {
    "url": "assets/js/317.51b8bb52.js",
    "revision": "b9e1441406cfa2f47991a82389f80f72"
  },
  {
    "url": "assets/js/318.cde03669.js",
    "revision": "4492fe3f363b2834e3065e726adeda34"
  },
  {
    "url": "assets/js/319.3d609df0.js",
    "revision": "63b22fc3be14b203e150984098e646b3"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.27aa78bf.js",
    "revision": "003c0f61834f516a5ec067e121d7fad9"
  },
  {
    "url": "assets/js/321.fd610efa.js",
    "revision": "ed8553fcd92d926cb27d6f4c2a9117eb"
  },
  {
    "url": "assets/js/322.7365f022.js",
    "revision": "605a17207cfd27ed2a18720aa10aa7ce"
  },
  {
    "url": "assets/js/323.d7adfc82.js",
    "revision": "b6dbab9881db64cba1f19f9a7989924e"
  },
  {
    "url": "assets/js/324.65b2db22.js",
    "revision": "ed4e360143ca3007fd442dbbafbc071d"
  },
  {
    "url": "assets/js/325.10903db5.js",
    "revision": "f5275d12944e5e5c4ab47457f6995909"
  },
  {
    "url": "assets/js/326.266d9da2.js",
    "revision": "38320d6c0490108427c7dde61e0a2f90"
  },
  {
    "url": "assets/js/327.e38413dd.js",
    "revision": "853434442cf525f9abb8a6a106a4c7d6"
  },
  {
    "url": "assets/js/328.706910f5.js",
    "revision": "51674e5303ca4f7f00f6f2037240c5be"
  },
  {
    "url": "assets/js/329.4ceb41ee.js",
    "revision": "9be4cf471dc6d4e325949541d5a7d8e7"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.4b47a32c.js",
    "revision": "a7bf3f5f862d4c57615a53b5dea20b40"
  },
  {
    "url": "assets/js/331.95c6ae09.js",
    "revision": "3f447f960ea2fe084815a4e54afa8ea8"
  },
  {
    "url": "assets/js/332.62a005db.js",
    "revision": "40160cae965064e3450f2ab93daf3bd5"
  },
  {
    "url": "assets/js/333.7e000bca.js",
    "revision": "83512ec14901ecf96826c8cb197e9823"
  },
  {
    "url": "assets/js/334.252b133c.js",
    "revision": "a08990c3bdd99a4f3d4c1a99801b88f1"
  },
  {
    "url": "assets/js/335.43acbb11.js",
    "revision": "6f5587e5805d174390e6df106b0ab203"
  },
  {
    "url": "assets/js/336.59d714a9.js",
    "revision": "6f629af8940448a18ed18c38c0c6f0f8"
  },
  {
    "url": "assets/js/337.f8a9304c.js",
    "revision": "94d7d9e12a6cff0a6c608e5d17ab3ae2"
  },
  {
    "url": "assets/js/338.d107479b.js",
    "revision": "faf2086a3d050f0aa36c5a8420cb3431"
  },
  {
    "url": "assets/js/339.359ca05d.js",
    "revision": "7578a9f5328b4bfafdf8e3117cea98ff"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.d1839954.js",
    "revision": "eb37ab2b917c1088f304a366554a06ff"
  },
  {
    "url": "assets/js/341.c8a27d71.js",
    "revision": "69b41a5bc9f9eb9bcfa1eb58f11a167c"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d8604f80.js",
    "revision": "31ca916fa01b1b4c86f0a7f1e848325f"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.e201f327.js",
    "revision": "901353ea6ff4601492f4cf533637cc57"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
  },
  {
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
  },
  {
    "url": "assets/js/44.0b5e9d9b.js",
    "revision": "991864d46f8a5c6bf3113363341db718"
  },
  {
    "url": "assets/js/45.63b58091.js",
    "revision": "496b6744dee469122ffaaecfc8dafe44"
  },
  {
    "url": "assets/js/46.cd4455af.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.61d739b3.js",
    "revision": "c8dfc7d6d32660a7179e16dfa6d6ce04"
  },
  {
    "url": "assets/js/48.8c083cbc.js",
    "revision": "56f2b98e136c37c1dc29b5bc772d0752"
  },
  {
    "url": "assets/js/49.3ed58838.js",
    "revision": "69ddcbdf334e984160755ca7476b3756"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.08a4a047.js",
    "revision": "f40543cdf1e6de2468cbf22c49ca6d69"
  },
  {
    "url": "assets/js/51.59d56e84.js",
    "revision": "9804b4e4f09d65107ece2c3ba46c0e64"
  },
  {
    "url": "assets/js/52.a59b6dc5.js",
    "revision": "be86fa2af156cdb01c1128bc318e70b3"
  },
  {
    "url": "assets/js/53.54d557da.js",
    "revision": "49948d9ee044d340f1492e858d4f42d8"
  },
  {
    "url": "assets/js/54.6be6a479.js",
    "revision": "d892e8d66dd65c94940de27af30f6f4b"
  },
  {
    "url": "assets/js/55.8271df14.js",
    "revision": "441d63aaff853ab2db9890de9f8436f3"
  },
  {
    "url": "assets/js/56.f600350b.js",
    "revision": "fb75f141fef467363517625e36c46ded"
  },
  {
    "url": "assets/js/57.32905ca5.js",
    "revision": "f3464a3e7c9aed3d1f3fb8d2f292e76c"
  },
  {
    "url": "assets/js/58.221ede42.js",
    "revision": "dc774d56727f7eafabe87ef21ee015e9"
  },
  {
    "url": "assets/js/59.9e870650.js",
    "revision": "7674a191f14257d987d8df6cf79aca97"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.39e749f0.js",
    "revision": "16b1c334166aa3431f0e31399b94fcfe"
  },
  {
    "url": "assets/js/61.25c51c87.js",
    "revision": "e4a63dbbe1e9d36318313c68ab115b3f"
  },
  {
    "url": "assets/js/62.cf141f0a.js",
    "revision": "771b5988b4f45d68890fc2eebe2cee88"
  },
  {
    "url": "assets/js/63.cc93770c.js",
    "revision": "7e83e5fdee89e648c794a7ce710c0417"
  },
  {
    "url": "assets/js/64.1f0c926f.js",
    "revision": "a4c919745e27cfbcf61fb0244f441da6"
  },
  {
    "url": "assets/js/65.62c9a1fb.js",
    "revision": "7e35f771a25374bf0bdfd9573ee7f12a"
  },
  {
    "url": "assets/js/66.7abc807f.js",
    "revision": "6a9b65f00c6094b9a571514f86ceacba"
  },
  {
    "url": "assets/js/67.469e5524.js",
    "revision": "2cf35e0c9a1544cd74fe8c86de6bb7d8"
  },
  {
    "url": "assets/js/68.9153f3ba.js",
    "revision": "213d12d5dd2ed86458a198022e1c2917"
  },
  {
    "url": "assets/js/69.04d0f47a.js",
    "revision": "de7c279b71a8aa112058c51e85bb8e6b"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.57a03a1b.js",
    "revision": "c9f9d57f96b96131cf1024ff287b604a"
  },
  {
    "url": "assets/js/71.6a912633.js",
    "revision": "992baa0cb4c8d96f80e05f04afa3684a"
  },
  {
    "url": "assets/js/72.dce9c4dc.js",
    "revision": "b3dc0a11113d11b54b0c7ba3c365c2ae"
  },
  {
    "url": "assets/js/73.a87b9afb.js",
    "revision": "eca400fe22b0bc29e0f146a0c7b7098d"
  },
  {
    "url": "assets/js/74.9af3fcd4.js",
    "revision": "1754865a22e3b9c76cbe567fc16dd371"
  },
  {
    "url": "assets/js/75.b6964dc9.js",
    "revision": "fbeeaf713a97d6e224d7c4b84a7dc0fc"
  },
  {
    "url": "assets/js/76.90a2b069.js",
    "revision": "dcae72f37300be18802b1b01bd58cca5"
  },
  {
    "url": "assets/js/77.37b89438.js",
    "revision": "c8d4c65a13b36d5e1cd7b51a328a74bf"
  },
  {
    "url": "assets/js/78.392a97b8.js",
    "revision": "c7b58cc6eb15153b041def30299738c0"
  },
  {
    "url": "assets/js/79.949f0f3a.js",
    "revision": "bf63d626d58d37254336dbb39c0cd1c3"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.2869b46e.js",
    "revision": "b27c7afd402ec3039f2f7d0d464674f0"
  },
  {
    "url": "assets/js/81.524d6a50.js",
    "revision": "aba3dd9a0ce0167c67e1fdd774a93b14"
  },
  {
    "url": "assets/js/82.1bb096e0.js",
    "revision": "5bf8cc5b8206754f73dd106d8cdc2e7d"
  },
  {
    "url": "assets/js/83.437190b2.js",
    "revision": "59667b0f83c82c49e675a52325392bdf"
  },
  {
    "url": "assets/js/84.cfa8e12c.js",
    "revision": "40ca254912d06c7674084445269824b2"
  },
  {
    "url": "assets/js/85.8265d33f.js",
    "revision": "32c6197d7a7554f240910f9cdbdbd93b"
  },
  {
    "url": "assets/js/86.f4d8287d.js",
    "revision": "59aa0ce4b6f08951a70cbaff67c20eb0"
  },
  {
    "url": "assets/js/87.bcb624cd.js",
    "revision": "4c1e616595f772352d633b0503c7d348"
  },
  {
    "url": "assets/js/88.c55e4a0c.js",
    "revision": "bf4c0224c15b37c554cbe480ebeca590"
  },
  {
    "url": "assets/js/89.2b3a40aa.js",
    "revision": "c423af06d42edc218527eb67d62a44f2"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.07a6ad67.js",
    "revision": "9f20299a7d7f736ca66c66efe48700a2"
  },
  {
    "url": "assets/js/91.2af7eefb.js",
    "revision": "ebfebd6aee55c1d8bd5c57bf4b6f5d5e"
  },
  {
    "url": "assets/js/92.6fd5243f.js",
    "revision": "6c08e19f4b3135ed7da9a3e5b325383b"
  },
  {
    "url": "assets/js/93.c59f8046.js",
    "revision": "bb40f0f698fc9798bf56cbbb26463855"
  },
  {
    "url": "assets/js/94.e44d4afc.js",
    "revision": "60f5b482d75d7e8a8cc8a116a612bf0e"
  },
  {
    "url": "assets/js/95.1bae7bac.js",
    "revision": "0b49044a418d411b951a4cc8257d3b64"
  },
  {
    "url": "assets/js/96.f519bd67.js",
    "revision": "025272e809c980df5ac99fbf68cbc086"
  },
  {
    "url": "assets/js/97.6d1971ad.js",
    "revision": "e73ac4b1e010fa7bcbc397bb1674e92b"
  },
  {
    "url": "assets/js/98.360dbd33.js",
    "revision": "d6d2defd4450e167dd53afe2c5075f70"
  },
  {
    "url": "assets/js/99.8ec46265.js",
    "revision": "c7caa87ac82158070ca82563a7c043e4"
  },
  {
    "url": "assets/js/app.95ef24c0.js",
    "revision": "788d4d0209628e208b0beb0bb3c77379"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "6b5cfe67557c9973fb03800e1d29fc5a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c340e7858fb53dc5b2e7b629528f9c6b"
  },
  {
    "url": "books.html",
    "revision": "88c3477878586ccb9d464013ef43bf96"
  },
  {
    "url": "categories/index.html",
    "revision": "f0e574fb45b1fbb150c863756ddcaf10"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "9f8f471413a70a54da9024024251cbd2"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "cf443c4bce9e3d3f662c01b9eb3b6d35"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "2aeb13562586e004bb6533b0f5196e9c"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "5da9adbe3a164a8e794bb2c96bd3e5a1"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "e339b06a5accc3cbf75b80c1a1c1b41f"
  },
  {
    "url": "deepseek/index.html",
    "revision": "5cb9a2c4593731e20dc0c497914e0859"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "bccc2ecb6c5cd6c69e2aa2c0d1fc6d60"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "9dcdfe9939ee4088fd8341083ea64bed"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "a614d44cfd4e0dffb46c39de721a318b"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f12e5f9460323a4ee120fb7b19e67eb6"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "4171b0e95fc8e63e5b308ac4bc36e7c3"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "1f9a0287181c22d5b7505d8dec028ad4"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "fc2eba66fe375fbce7f4d7212b09a317"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "cfe473ef8f44af3114c13c54aa831049"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "88790916e60a40fcb9da77095ae0927d"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "f348f1ca74579d1a3160ec4ad036d25f"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "a76cc029a115910c9c8b0e2af2157d98"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "03daf65ef5bc080ead16346c7d08e5e5"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "d84ed46e9fefe51bbbba6dac36d3cc50"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "057e1c922fe0418d2ea9ff28d3419cab"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "25ab7de03352a98cfb73d521036093e9"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "cff3d811fd6c2bd4a0786ddba34c882a"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "0fd11a6f76c99f0eedd8981c12747c47"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "620ec53e104e273dbef8147333af025f"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "6aa4fdd3c71f4ae19a22d12d333ccfe5"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "2a7bf0a301633e2e58be2b7f178c3cbf"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "a159d2945d969b484664c7fb64d385c0"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "7af114d164dd84d18baee1d79b0b7f0f"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "9f779188b0eccfbe64dd1bb4b7389991"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "db4fffe434be83cd75c83aa3d4e8e0ee"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "400b92cc6c8e2703d88902777a28b1af"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "f1dd3a658bbb3781a11af5c69cf8bc10"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "1567a66e543c25d85e62a3e09ab84e15"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "3ae95b04bd044cfad9189a0551d1e234"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "1676f5550a469f4b1b9b3cac00783b1d"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "3a8e60a62111ecf58929aed8b5092c88"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "80d228f9b6e61a8f29c2a6ff4f0625aa"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "a150737821264eb780be001edd419a7c"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "09dfc9bb47e117f2e56f55a43e2aca83"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "c2657f89e4c6c6bdde9c9e9f2be503b6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "ca8683c7d4ecb4c4607ee1feae50d80b"
  },
  {
    "url": "figma/index.html",
    "revision": "34d65332e51e09557009a0503a649a45"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "265981988047a1c6ac4a4961a3a74bed"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "6c6fa3f7a20088be1c29138db6f6fa19"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "f80288279d330730bd4f03daf9698a41"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "ffa4a386d4956f2c510960629b8e0bd0"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "ab50a40df40a7b1895560d5da866cd46"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "e8a925cc98258b7404fd28be1ad4ea42"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "2c6fab7d647bd0350f705e5371ab43b2"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "b55008a1ef783e4732e06bd231a87098"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "d886e20e157384247ae8b5184956c565"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "9dff3f068fe54fab93a71ac59a7380ca"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "02453a7df462cb4467a88eecc2a687e5"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "741c338a90ef12b1c22e506dc78159c5"
  },
  {
    "url": "flutter/index.html",
    "revision": "041bb3290f4d72451542b70b4116925d"
  },
  {
    "url": "flutter/point.html",
    "revision": "1d5a0a0c50215eded51d0ef03d103dda"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "88dac0f46a8aec19a252fe7081c56d42"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "e906d45021e3264b99e6deb6c8b82055"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "47891ce17c5b3b79fe94d527c1a59696"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "2d1d707ec93a71fa6d6f131421f08f99"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0e76de604950419eea79599c1a07e413"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "a9173a0cbdee375467a8de35ccb42385"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d6a150b363e19774a4d3d8dcbdd784cc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "f3a750f2f92fe85a52d2ccf5a347ff12"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "91d5366c8add21df2c1cb114e1e48188"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "c755478d43beab877bca6744a062f6a3"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8e73cf353d6e831e7e28023bd60ff11f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e2496a1805ec94d68ba60f521a3f8f45"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "cb357f9bcde0f211ad50ad2672198e4d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "796760ebbd1d9d3b8aadf74e011c832a"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d927dcc99535c9262f4b057541a1735c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "792aebcbf93d061032ba2041e24a7e89"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a2b4109d56d094d245dd545146060c4a"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f89760b2ad6971635a54541448d95fff"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f8fc173a17e362f8410c11ac00deb12a"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "5dd8311b53d023637bcf7d1aff7dc917"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f94f9d705a35427e5e46d33a1deb5bac"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a042befb0937288f2429aaa9b14dd1cb"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "7c830f0bccf3dc1c847427847ec47730"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "36d8329b7918a9615e19d4318b984573"
  },
  {
    "url": "haskell/index.html",
    "revision": "b88d61d09a7e9858233a20835e7a8994"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "imgs/xcode_launch_env.png",
    "revision": "c7f8697ae25d7739cb1fa6b3ea10ead0"
  },
  {
    "url": "index.html",
    "revision": "d4b9685917ceae5291edb533a76c3730"
  },
  {
    "url": "java/index.html",
    "revision": "c6b07ecdbba9f95de878738adb3d0130"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "300fb97e2eccfb9105f6043d83e0eca4"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "7f089c32fa580ace89bdeca936056482"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "005cbd70086943fd0f01af487d96d057"
  },
  {
    "url": "ops/index.html",
    "revision": "7f8b636076216f79b70d163c7ef216aa"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "0b3f8a40ad9d41add6e88490316cf08f"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "3fff69944c1347c379318dca4276900e"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ca19fedf1401e95c01991e6f35bd6ccc"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "581f05d0c26e2d32d4cf3ef48f9dbb56"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "50ce2be9de252c89e6a138ff9f39a485"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d288387dd41f58b487ac55cfb2a9438e"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "c616cd91a8e1c8fcea54eafc2fc31e84"
  },
  {
    "url": "python/index.html",
    "revision": "cef7aae6c4e3cc014b710cddb55442dd"
  },
  {
    "url": "python/poetry.html",
    "revision": "920a6c7239d202cd0b670f6b58b8f261"
  },
  {
    "url": "python/pyenv.html",
    "revision": "525f047753830a79f5159ca4b8a1bcb1"
  },
  {
    "url": "python/python-ase.html",
    "revision": "9699817ae5c39e738e1497bfa72d0774"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d1690ccbd91d6dbf6dbd4952413a6244"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "ea3660e67af901cdedf29c337b4e6a22"
  },
  {
    "url": "python/python-file.html",
    "revision": "59090e6e9b1ecacdb683b874511edbf7"
  },
  {
    "url": "python/python-function.html",
    "revision": "c880404bdbd47bddd4f0206af0bb6794"
  },
  {
    "url": "python/python-generator.html",
    "revision": "287e67c97f912165c35bd989b6830e83"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "130f83cf7fce879ba57cc15ca9d1e6bb"
  },
  {
    "url": "python/python-module.html",
    "revision": "67e403d30ea3838955a341684b38716e"
  },
  {
    "url": "python/python-string.html",
    "revision": "7efeb7fe1dad8320f3eaaf37fa0b93cd"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "fca8097c911b73e7962820d850167914"
  },
  {
    "url": "read/index.html",
    "revision": "e4cd6037903c54fb56e12b95cdf5d98a"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "582dc2b7d3224792cc43edf0c09710fe"
  },
  {
    "url": "swift/better/available.html",
    "revision": "9eb0478601ea5c3d9085057bf8a2b2b3"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "2f81e41c5a7b18cb14ca58d2beecde5e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "31d1d0ce1f9dddcf80102d06ebb267c7"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "d71792e08b44539634cfc97ce0aee618"
  },
  {
    "url": "swift/better/di.html",
    "revision": "98c3028bbefe650ccbbfe61d3bbb2bb7"
  },
  {
    "url": "swift/better/index.html",
    "revision": "5f0054fa7f55d096d2e11aeba1a8db37"
  },
  {
    "url": "swift/better/last.html",
    "revision": "2a02e37c4fac900f767ce03aaa5d4a46"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e9f1a874fdd3dd0f825a5ae02cabb645"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "86a0ded04f28716cbaa70e632921fd3d"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "dac9f7095a2a37e041b2f33de836a705"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "85cc844dd44ca63a0d0c0df321bea8bf"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "3772c2762f46a8b6f9b9da4f6ab5da1f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "39ce29576f22c9d66dd443b9c10a92ad"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "539e000448e1586b24b561ab7cab5248"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "f16f5ce4a50fcda99711f20f56bd0a04"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a87c1585d8c8c94a455c65706c32e0fa"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2597ee47fc19513423bfb3b90f05d80e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "05618c21b88f9b178a243e3406c07ed1"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "2188ab9edeedcf62f6495fe3993192d3"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "099b910a0334306576ad37a4ed22a343"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "a0e941b99e2dcda5a8b7000cf6007d6b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "7f1c7597264750e4efe007dc93db1ed2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b7a6c633073610ade49ecc57665d6abd"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fd796d95bf6434f63d7280b0da3c0cf9"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "77c9e6ad8980d62ab00287384135a797"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "9163eb584a69e0bf6e8659a5cbd7d378"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "a164eb83fe0ff87376b193c044eb8825"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "8e732c108d45fb3eb0565841580da1ca"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "d41101c4354c7f45ae3460f846db1b3e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "779916932931d177d5bc19568f2d186a"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "adc40051d964c8427df0d68ea832b339"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "fa5e9fa9457a3d8683519c302acab440"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "eda6a0c88d76c937176b90c8027b2f59"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "ab64ea8aabc4d67416ab1dec4baa177c"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "b8da57fd0324be496fadc80d148e9188"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "3cd077932063b706d4bc5120d4f8016e"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "13217843ee9f0912f8ad2461e6359b4c"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "0962137b7b61ad3fa7d031f2804b8e1a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "76d4cb08c4f30e97a5ab6e23aa475548"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8c54d1715230ce0268f2fae1b26042c8"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "5197700ccba4285fe5931f7909b399b9"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "50cef0040a65d72ea3c6a0bcadb99218"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "eb28577d7aab6243e493b362ab3c7d40"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "7702114dc37232ca3414abd86ba9e34f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "33b7a67c7c982065c3491d9d45cc8ddf"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "e5d3b24a8fe84c443fe84f00d3bb762a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "9e0984823f7bfeccf846615027013786"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "35c4ec620ef35b1c0279b9f168b51aab"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "3351ad8390f071a259bf0ffd33a08db9"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2d0fd2a8fe0069db940d4994fcdb365e"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "bbf273d5a303adc8e43c9714f7c09409"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "d56cfe924649fb0f6a804e0b7c8cf71d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "9e786ac027a8d19ffede741a3b381668"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "a2fca332a63d87393539ca3242d99229"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "644fa04ee944a1d4a3d6a607c1e6e06e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "94b3f3f639789e03fe04d005f9a7772e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "fd5a3d6b3c2410adc5254f16afe2d465"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c84921dbb1300a32de3ca417c5f59518"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "999bbd49519c01f541d9ca13e6773c18"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "058db3223b1c0547ccf5d678e99d2d65"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "717527415b52657a8265aae2e04523d7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "729f3b142ae20e61d13214db3c4cbfa6"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "8525053f0fbdfeecf675564529c2202f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "9e5e7d290c86fdcce9b244b1e9dfe274"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4e4caee63659f3df253fe57c52384ce3"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "87fa84622c66026cca823b9e3bbc42bb"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "2e1369d17084f8e4ac37bb526afa5c74"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "0d2e6f49f856b556c6c7cead3fc1221a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ccf93d46ef54dfb05e29a2fbe0185c7f"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "66dabbe1c66c76f2e4e5610f441e488d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "33ab93cfa4ae8b967370e249957a0be4"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "39b382553eac96aa507e121d7db224cb"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7c19711d3ceca4c5734f429fd240899f"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "b6c10e8c217f114a49eb9588cb222e33"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "70704ab093b38a7a9a1003e1be2d0ff4"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b38913daee90974c41a6280c60cf409c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "8324a98d7c229c279898e28b77d2eb55"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "76b56e92c193544177dea35e24583e77"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "a05e09b21d4243ee069f9c2e8180315b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "3ed6c9ba921a730e9025776512b23af0"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "54098463895adf93e000c38cb7ecb01c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "90345fcf7640a46a0aefdd259b6a2407"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "67441ef33d7fdefc29ac56d90846b5e9"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "c42b30a9bd91675feaeda80046963b10"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "07b5d063e4b4b06dd2c1c292d2c74159"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "b2fe384d053349d8d27d8e8a303653fb"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d38f9cc44c93865437605ff6d699cc67"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "432841bf1989274aec52f7be514ebb06"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "cf1a60061312a62a6cc724ea6d953574"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "0c1a3fde2690c895e719c1e8bea36802"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "b8de8d982d649e2870a38a8af26f4781"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "3b821f8ea69a24ff75cab3e9e6138e9d"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c562cb50bb4e161860677264289a4499"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5258dc126359ecc5583ba83130553c9e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "adccb0d5becbfcb7a8dda15cc7859f7f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "db6dcda9c4cc0520b737549cb3ddee2d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "e30d37f3e4184f6a68a7179d71facef2"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "38b75073f320f5c9bcb868d4f29a8954"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "065dc47fd24ee8efb0cbb0dded8e21d2"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "06034e5df7bb1224d27218515d95fd8b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "3cf44c49e07b58ca151778942dea87e1"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "5f6c50988b98b0a9f2620ee003823115"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "479567ce46b83bab2e4f66f66ede6af8"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "aca05fe071fd4a021a1de26f7cc8acf2"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "d6a38a4446f3d02b73baec6a38ee8eb5"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "3595c2b64c9d55e512e07f25da9557b5"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "46455c2d6548d551ad0bd59b9665167d"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "5538cbf8b6f4de9cab9d5abd2917410e"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "156121ba6cf404becf88e90b858b0034"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "f0f000acf95f9809cbc265f1266163bf"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "defea2a214b8285757f945c7c6e1b701"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "d21439a690403c862756f415cd0fb3a9"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "5b9b3de079a73d662db8bb93e495723f"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "e3d7e9121a81d89731e40065fa8a1622"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "fc9bd45336b6fa599e60aad0cb194603"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "8278c3dcb7dc3b648dd20c95e6b1ccf6"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "1880fce117513b13580e5b3e39569b7d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "76f77c2f45bcc6449a9fb2eb53e0f7ea"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "107b3b704f7528a47d0cf70d40905257"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "536b231f331bc47a626ee5e095d88f64"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "d5a28885403bc8915714bcd8edaf371c"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "8d7137f4b4ba7ccf7e844084f81f0ac3"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "25e57dc77661111fb7565e588ad8312b"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "59c2cb4729d6e3c7aa4cf4ca35bb7f07"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "31d90b9b7deaae81eef38fbd58ad6080"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "73748f07bec6e4cb4689f7bc49a93e16"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "eb2f2bbf806f9ef007c60720741a7161"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f7eeb864123a3b001752ad69adc80e18"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e72851699b18fd6551953b805cba8a30"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "da67eb8123ef101c715efe23aeafd1f3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f09710d4b2659f425d490228037e40ba"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "472258b005263d531662ba573aef6908"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "470e4dc8d1fe4cc293d2511a89ecb83e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a706e3c8a9b52361a71fa510654f81a3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "910823b5546f77068ba7c024735c42f3"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6b8be6f3e7e405eceb956b2fcdb211ad"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e791dc8b1189d2a714796e4df6b56268"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "5ac5f79748a7cabf85e879b85fec6ff4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "05af6ce687c883b9d639eb268f25ab7c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "745d0f04de3da45f67e3e77e84a648a4"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "69f8d6f1b2d3661cf506fb668d63abed"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "8dc2e41a2863661ca0104c5e4e548245"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "865aaaf58185e56ea1cf8be9e528014c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "49df770e2f5d22e6a9c26b7c55841479"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "31ff10bfaa95bc97034798dbaa7762ad"
  },
  {
    "url": "tag/code/index.html",
    "revision": "688dbee6175b9bb6714e7e23f268fb65"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "5791197c6cb0aa9e52ad6199c884307c"
  },
  {
    "url": "tag/django/index.html",
    "revision": "280753a79cdc4fdf1de6612f88743efa"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "5c23f55f83e4b8f37388c3da53981240"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e2dbf2627a62faeaef71389709959aab"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "64e55066ac768858cfe537d1ff1baecf"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "7b00ecf91f6a956548adf6f7758494f1"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d9bea9e736b18956eb2b36c4abe74169"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "ca036ed8c501b78fd86331f777fc9d89"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "d0fa318513be5a1621e8c987769b8ff6"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "f2c76aed9cd260fffb801762f1ebb0d5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "53346b4eaace9ccbf6e2ad3c28150089"
  },
  {
    "url": "tag/github/index.html",
    "revision": "26b8b1df628d90932cf951d7365a8446"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f278c73334591a1a8da0eaa5ab306c4c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d547ab374e649691338648c87fbd66dc"
  },
  {
    "url": "tag/index.html",
    "revision": "ac1646358be300f35e9c09f4d6fae89b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b20dbb26d560504a48d164d2b4b2be92"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "00c2335d17f617f1788c3d91546f15eb"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c61a1156c19e986ad83392ec379f803b"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "02f86119c0edc02b0e778a658c808c58"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "23468cc133a41d2532ad8faf7c1d53f0"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "1c2a644a2fd650f71f58ef518f511394"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b5ec6161ac2be06e7a847498ab2e94f5"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "7876232678372d2ec0931ddf81e872e4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "4d32069509b4ef8928b6c00f8f9c855c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ba84bd2278c4b9e654a0bd959ae4c1e9"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3d3e2f17f76150ba087a46a50ce5489e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "46be9366cd0470a1a620ad0858bdc7b1"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "a0d6cb1f5425ecb9986c38521142af89"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "c56e73d588f71a364189279d7773cd57"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "02d97661c290a290ededf3394b704d25"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "620935a3a9c26f3ffd671509585669ec"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "0bf7d27ee24bad236b5e6846463e7fce"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "992ac05ad70b200b9d79b16e18042260"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "729663371472faa908d0b8a64cecccfc"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "56cb48a2b0b302e4f6bf967d75621a99"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fc2a5b8b6722e35c0065990832144838"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "80ce91066b1afb6581de4b5486a8f168"
  },
  {
    "url": "tag/read/index.html",
    "revision": "ec5ae8cc33176492d04455e45c82df44"
  },
  {
    "url": "tag/review/index.html",
    "revision": "616f1d8e18d6fd7fcb0590b5322a4c67"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "d264cb9b6a77a829d7421efc14165278"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cb110a6892865078416859d2852d53be"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "7df14c85745a3835a415e4312878c46f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "bb2dc7383ea8d73b6a45beb3f00c04f1"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ac2b60fb626ca04c4ae888942566c7d5"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "1455c0cd0b4a8e61c995cc4a75b8d7bb"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "3627b4b1e01c638d541d63004c9f1622"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "882ac63541c93aec4e3d836ea240c156"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "d8ed68f251c63d011dd7b28158c6b28a"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c7316a734a055fc9197617c77f40d018"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "88fe5fb6c31d1b12a69313a7ae78387c"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "b9913d539a1d757d5921e1cd5125a204"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2de0969cde1da9ce7d069fd2ebd66698"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6da03d613dbc08351b8769e09edd8857"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "16f4d49c940bf14cd4b8820d35de90e6"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "381c7b6780af8756944d3885858cd828"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "97a2f219c4e5d6ef0c1601ac94c9ba1d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9a1429f96a851ef7ebfcb97526ba4fc3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a4d04ab932e02c29d62986aba4db791e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "cbba3fcdb3af5c4c1d957df352a32be8"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3fe5c009762fec002068404df66ff4e0"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "4f58f47aa1d7bdb2cb1a522aede842cc"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1f46823aa1b2ce020e6a2e7e9b680341"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1bdefa7fd83a17ac8ad948ffc94bc1eb"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "79e9630b76dc21b1891a17e753fd609d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "123953d9807528baa0b2794eaa965457"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "52f977bfa91942dcc8fdc717106c72f1"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "516448b7bc08ee2c9973a2f7528ed9f2"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "81bd063e2c888f4a0d92801f4929b3cd"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6b2a3bd3919f3bdf96f99333f3e137be"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "44fcfbf651996d96f94004e98d340596"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "4b1f69803d500a3f638c7a4547099be4"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "ffb57a27d0d92a305923bed48aa9cb90"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "649756c5dc83a3d5708a049aa72f1794"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "80661556660ab5100abca8616d387004"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "00c4ead7836fbe854b8611236c6f48f0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6c65ab1ae9a3347b1ceef8181ca79849"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "f314c05b461a08af94af861173fcd5a5"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "084423b89d9a4562dc31024739c04197"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "f65ed3ca35183ca74a3bc5a99522b13d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "412ad4269e66d2d95205a932e8c363ba"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "6d0f604ce0cd4326e453ffa5325946a2"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "3e1966fa8390254822d36de6e29fadb4"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "201cf58090d15b76be31327342ada998"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "0b61fb2b4e1bf0dc60b2f1104a66edda"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "8e82f38ee009212d6f3ac9fe94bbd149"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a12e0f2b822c1d741ce32ea13662ae8c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "642c265aa74e50b8ab11d6abc9692721"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "0dcd42d6cc24fd8ac08f861af91b0498"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c7e57c6bbaa802870614f0b81397b320"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f6882b98d54c71721f06892e31b3ea37"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "da75a1c1e0e32e36659c325ac5db5ce6"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "c731c0fa5ebe6c112058d7c2a5f73d25"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "26fc5a9f445212907224ff03701c39ee"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "57fd5ba1a5d0d39ad3656b4db4dbf1c6"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "b69bc5c7810b0bb7f633f6ffa2e3fc19"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "ee7ca5d8fb9039663e54ed4a02ab4200"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "f228174b12cb53648954697fe1e570de"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "810c577719db9fd082a2e261e85f5818"
  },
  {
    "url": "timeline/index.html",
    "revision": "b69383c8e78dda86007f0f8d7a7dab9d"
  },
  {
    "url": "tools/code-review.html",
    "revision": "d2c7e6208e5b173c79e4762521aa4394"
  },
  {
    "url": "tools/docsify.html",
    "revision": "dd8696b8fccec7b463366f5d76d94d68"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "0e7e788248910128dc59ad5806b4241d"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "ba0c94c6cf5d53a26efb31407ba0bdca"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "8cd2d0016d46584cc133b94bd0cbcad0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "99ec3aa9ff3b0a81412529e2673c83cd"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "49b4baedcc7cd9d9137bfebb6fd1e018"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "71260797e81e14c90d2729e2c3ee54b7"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "4347fbc8633b3612a927c94098c0d207"
  },
  {
    "url": "tools/html/index.html",
    "revision": "2e40cbee7a3793390acb32093667fa21"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "96a9c28a5b8a8b633fef419dff3593dc"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "6604ef8c14785f449c839fb56cee29a7"
  },
  {
    "url": "tools/note/index.html",
    "revision": "63d247bb7dbcbef74ca56d6471d2b871"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "d5dc5299ae035265f721bc066c1328fa"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "50686443e6845c3b2e18cee217af2ea1"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "6a1f9ed81a630db63a8227f71f7b2ee9"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "5e86d4f5e30b4820d636438c1fef2e2a"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "880520ec34e9d3d7d39bff21fd858fd0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1fd473511dc9780164f65b8f28f9cc94"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f83dab69bdc0b3df10659b15410db985"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "c646f96db1fcbbfc43ea1da344259b8e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4e56e1784431cf1cfe600d4738f0ba9f"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "8a998133242fa40a60d8e980f63ff35f"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "67da4243782db1e87c1476fc98883c53"
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
