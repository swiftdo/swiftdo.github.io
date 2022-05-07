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
    "revision": "28c3833a2d8d2bd097cce16b4f5725e3"
  },
  {
    "url": "about/app/index.html",
    "revision": "c2bd363ea3e65cae4bf14aaa35f6f4b8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "220069048e8e052f1b331953b7304bb1"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9cccb4aae5622507acd3bc0e29dab156"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "81f1bff35ada48ce6280dd5dd08889cc"
  },
  {
    "url": "about/index/index.html",
    "revision": "1c08b1b7b0e1440900e0dd4b17abd74f"
  },
  {
    "url": "ai/index.html",
    "revision": "bbd8cdc0671f76fdb38cd68d2428be8d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "69720b468e5be891b68d3ae9c19e8249"
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
    "url": "assets/js/10.fd02a121.js",
    "revision": "ae3b3e287b03cfb5ac87fdebc4238801"
  },
  {
    "url": "assets/js/100.e254f05d.js",
    "revision": "29a2040f2376ca11f1be5cf7e1e8a7aa"
  },
  {
    "url": "assets/js/101.4a82d8ee.js",
    "revision": "8d474c0b2300106240022348b9e98095"
  },
  {
    "url": "assets/js/102.7224ae93.js",
    "revision": "f60dbde891531512c2d6d5c72c27e71c"
  },
  {
    "url": "assets/js/103.9d5dd9ce.js",
    "revision": "bacc4339f6c9c2c4c31c74fc899fc85f"
  },
  {
    "url": "assets/js/104.4830f36a.js",
    "revision": "c61e51764644fd888d80a6c6c74b3b53"
  },
  {
    "url": "assets/js/105.6c2e5fa8.js",
    "revision": "63f53c1e4eac0de3b14e1636ea5a5abc"
  },
  {
    "url": "assets/js/106.5acbecf7.js",
    "revision": "fbca5cfc3625728e36df1962d23e6abd"
  },
  {
    "url": "assets/js/107.4d3e9d9f.js",
    "revision": "126c3cd74ae715d8004454b3eb292a86"
  },
  {
    "url": "assets/js/108.ea085aeb.js",
    "revision": "110894688a3af48beb0d29ddf2a8f279"
  },
  {
    "url": "assets/js/109.2b6f4803.js",
    "revision": "c35e407c59945a101fb003ecd71ddf55"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.53413a4a.js",
    "revision": "4a796b7ea649046bb994ceb507a2fc09"
  },
  {
    "url": "assets/js/111.f574c49c.js",
    "revision": "441bf7694ce4e0e0dec3ed941eb78bac"
  },
  {
    "url": "assets/js/112.0c8df473.js",
    "revision": "57240957bc6e9b13cebe5f451efea085"
  },
  {
    "url": "assets/js/113.1fc4581d.js",
    "revision": "69d32d5c204ad03b529807b04b5b809a"
  },
  {
    "url": "assets/js/114.a2cfa0dc.js",
    "revision": "20076fd4e4e41f87e6f19c3853fd0476"
  },
  {
    "url": "assets/js/115.2e9ac89d.js",
    "revision": "1f4a224d43170f9c2abc6dfd6eafc2fd"
  },
  {
    "url": "assets/js/116.25456f6a.js",
    "revision": "920b969efa4a7bae1c0793404412cd96"
  },
  {
    "url": "assets/js/117.8c826470.js",
    "revision": "68f6fc1a71bdf722ad197d98ba810537"
  },
  {
    "url": "assets/js/118.1d557f87.js",
    "revision": "4381bafa97b7cbe96459543e6ecf0620"
  },
  {
    "url": "assets/js/119.5fbca813.js",
    "revision": "6da06dc41f3d218f20446c2de012a331"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.ab49462e.js",
    "revision": "22f1570657d62c11b8b2bb4e51004363"
  },
  {
    "url": "assets/js/121.cd4926bc.js",
    "revision": "e31eece685f1477ed5d140ba4b3f12b1"
  },
  {
    "url": "assets/js/122.34a14f98.js",
    "revision": "081711237c1d58ea6983ecf17ce02e92"
  },
  {
    "url": "assets/js/123.2b63c89f.js",
    "revision": "02c8869a015674551e8513693cee4f55"
  },
  {
    "url": "assets/js/124.09a2510b.js",
    "revision": "0aed7242f1b72d8925249f64795c2623"
  },
  {
    "url": "assets/js/125.6a32d26e.js",
    "revision": "8d38056644bea0149d1913b06a23011d"
  },
  {
    "url": "assets/js/126.d62a1203.js",
    "revision": "a9f814b463b18830ccf9e279687012a5"
  },
  {
    "url": "assets/js/127.d2b23619.js",
    "revision": "191acd2d365b81afdbb050cefb08d592"
  },
  {
    "url": "assets/js/128.b5478fd1.js",
    "revision": "7867c413d08f544db2cf36b93a8cad9d"
  },
  {
    "url": "assets/js/129.83181d32.js",
    "revision": "d79cf630848e44861f4658d136438ea2"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.72018f2f.js",
    "revision": "60c4f983ca8983b2dbba802f801e9b18"
  },
  {
    "url": "assets/js/131.4264ee73.js",
    "revision": "97f97028ec03c304cd2f21696b503c60"
  },
  {
    "url": "assets/js/132.4e8a4980.js",
    "revision": "37364059bc32feb4c6918d9cf0bd3c39"
  },
  {
    "url": "assets/js/133.9127ff4a.js",
    "revision": "e41640ac1d6bcb596b8c63c31287d7c3"
  },
  {
    "url": "assets/js/134.9b235d25.js",
    "revision": "0ba594ad1a1e9fcb9d99fb628542d0e1"
  },
  {
    "url": "assets/js/135.d205d54d.js",
    "revision": "0bdb7cfdad6eec7215cac24f66d6f70e"
  },
  {
    "url": "assets/js/136.f75c8524.js",
    "revision": "84bb12ce2c4862529739ba97d87c6e41"
  },
  {
    "url": "assets/js/137.991454c8.js",
    "revision": "93b941cf5ea014227e4348b4721e1466"
  },
  {
    "url": "assets/js/138.faedd824.js",
    "revision": "6e3f8878626d3085aebd4cea5fa0c602"
  },
  {
    "url": "assets/js/139.e71790a5.js",
    "revision": "5b962e56603a20544b481f97655af1dd"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.3f9a6c95.js",
    "revision": "ee06707013259f8a34f7a24aafafcb6b"
  },
  {
    "url": "assets/js/141.c1b856bb.js",
    "revision": "e25ad51883390d6936eb57b64bb9589c"
  },
  {
    "url": "assets/js/142.9ddde1a4.js",
    "revision": "f08181b5076f2976f0a621dad8cab374"
  },
  {
    "url": "assets/js/143.d43255a1.js",
    "revision": "9dadd1d626fa58e4fbfb651e4c2cf157"
  },
  {
    "url": "assets/js/144.39cd0a08.js",
    "revision": "c5a399f59bb1261068cb21b0dfba15bc"
  },
  {
    "url": "assets/js/145.48692656.js",
    "revision": "5ed0fe5f7763f03f72086b32d74ebf66"
  },
  {
    "url": "assets/js/146.481357c1.js",
    "revision": "8cba1d47841ac5fb73fe5bf301fb69ec"
  },
  {
    "url": "assets/js/147.faeaf3f8.js",
    "revision": "910e2e0cfb7122a3f3ab062ec809f86f"
  },
  {
    "url": "assets/js/148.64835abb.js",
    "revision": "20f54bd01152e9d2060be55599a77d94"
  },
  {
    "url": "assets/js/149.0a837536.js",
    "revision": "a72e8d8531f8984a7c9e115b55cd4763"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.1ea953e7.js",
    "revision": "9aca0c0bbdb0e4244f5058df3831594a"
  },
  {
    "url": "assets/js/151.a32956da.js",
    "revision": "02643808854964b1a2ac46b5d5fcc1ad"
  },
  {
    "url": "assets/js/152.99878d0b.js",
    "revision": "3a96a27ded817e85e1066d72f40a4d08"
  },
  {
    "url": "assets/js/153.efe421c1.js",
    "revision": "a21480cbdc713833bc9a7fa516711aa3"
  },
  {
    "url": "assets/js/154.9632a0e3.js",
    "revision": "735fa9a87ecdc469980666f91d8b40c9"
  },
  {
    "url": "assets/js/155.bcb62b15.js",
    "revision": "5ff36c4a4671ada8bbe8d3ef7a8753d2"
  },
  {
    "url": "assets/js/156.c77395c0.js",
    "revision": "d9f1df9b10ae4c91a6fedce98d045173"
  },
  {
    "url": "assets/js/157.0c4fb88f.js",
    "revision": "77f30941e9c5dc7710344f9701dfec23"
  },
  {
    "url": "assets/js/158.cb20ac76.js",
    "revision": "77ceb8aaa89dda1407cc2b0a804a2f9d"
  },
  {
    "url": "assets/js/159.4c86f82c.js",
    "revision": "c0279eea803f368405be35eb2cfa3b23"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.3444b74b.js",
    "revision": "bc452f46c9379deda9c597d0ad459035"
  },
  {
    "url": "assets/js/161.139ac97f.js",
    "revision": "86cefb295bddc5c057f713e83fe1ed56"
  },
  {
    "url": "assets/js/162.0ac44bc5.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.e1eb3528.js",
    "revision": "a478bf1bb706fcac40decfbefb3b5b5b"
  },
  {
    "url": "assets/js/164.2b9da000.js",
    "revision": "8a60880db27c2e8202b3573fe00b7830"
  },
  {
    "url": "assets/js/165.1ec0b843.js",
    "revision": "611213ce7f3f58e1ae6f1e3f18c74913"
  },
  {
    "url": "assets/js/166.f94586ab.js",
    "revision": "b6d4d398b6b0c6bef0a5487abf1e6843"
  },
  {
    "url": "assets/js/167.0656bc44.js",
    "revision": "ae678f8206d895c199fcf930a902f99b"
  },
  {
    "url": "assets/js/168.cf8865c5.js",
    "revision": "a051910cd1a8c91ee316a223b3e3d1ab"
  },
  {
    "url": "assets/js/169.6d5e6fcf.js",
    "revision": "779cd43c7d2efd6c7b65e0912e7b4698"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.4b3a9b35.js",
    "revision": "3ea220df9534e0cd571ddbd025523714"
  },
  {
    "url": "assets/js/171.8681156e.js",
    "revision": "e2449853c4caa240bd8ad3a0d74b0f8a"
  },
  {
    "url": "assets/js/172.5d7ba0f9.js",
    "revision": "73f3cf245d57ad03f96f3415dccad2d0"
  },
  {
    "url": "assets/js/173.a1075b7e.js",
    "revision": "cc7cb7dccf45f8b599d244719ff9fac5"
  },
  {
    "url": "assets/js/174.27f64d4d.js",
    "revision": "3145569717f0fa1eb5b79d66621df044"
  },
  {
    "url": "assets/js/175.00c0897c.js",
    "revision": "5c1c1f6d37fa445d028b0da36d84532f"
  },
  {
    "url": "assets/js/176.6c4445e1.js",
    "revision": "2e9b82d6adbe3fa8efc2fb8ac4da887e"
  },
  {
    "url": "assets/js/177.7f4a90b2.js",
    "revision": "77aee19d8657c7fad4d996dd2481a3ee"
  },
  {
    "url": "assets/js/178.2c3980ce.js",
    "revision": "0c4f1f8dcbde31689db15d16bddcefe2"
  },
  {
    "url": "assets/js/179.2f68b977.js",
    "revision": "1ac320dd4e2f6f7e0a647d712444be52"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.7a4fe3d1.js",
    "revision": "722a9446d0aeb2cb7e9de6de9fa25230"
  },
  {
    "url": "assets/js/181.894136af.js",
    "revision": "6b4ed078710e4b89db431f3c1a9b5d89"
  },
  {
    "url": "assets/js/182.324f160a.js",
    "revision": "4bc6750ce9ab39d1f814923f1ec09f66"
  },
  {
    "url": "assets/js/183.513b7282.js",
    "revision": "eb6055ac4b9932c3ecb146152486d394"
  },
  {
    "url": "assets/js/184.d9c55be1.js",
    "revision": "4b6e6926ec5407db52314fc9bec6407e"
  },
  {
    "url": "assets/js/185.8f1b7f67.js",
    "revision": "40afb2e459f54a11db42ef7b9377d8a2"
  },
  {
    "url": "assets/js/186.229bd93a.js",
    "revision": "12ea0353d07be9d8896ae4ae6119b4e7"
  },
  {
    "url": "assets/js/187.47875142.js",
    "revision": "9ab197b4822dbcbe4ef325a9b3e9f149"
  },
  {
    "url": "assets/js/188.e606153b.js",
    "revision": "7b2535065ffbd9dd32e2302f72a8f34d"
  },
  {
    "url": "assets/js/189.cd517317.js",
    "revision": "444b6b028ed3f2f57ba155c558b9ffd9"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.083e5a43.js",
    "revision": "1278d412904216c59008c75dc9653ad4"
  },
  {
    "url": "assets/js/191.d8ae1907.js",
    "revision": "31b38bcd8723d4fe90d526f95e9633f5"
  },
  {
    "url": "assets/js/192.34e02533.js",
    "revision": "f265c29d08c535b6608290ff00d61fa2"
  },
  {
    "url": "assets/js/193.ede6dddb.js",
    "revision": "c88c77768a026d9095830805816a26a0"
  },
  {
    "url": "assets/js/194.5a0316d3.js",
    "revision": "4309e6443941f47a8058a88e68ebdbdd"
  },
  {
    "url": "assets/js/195.2ad5f331.js",
    "revision": "1eaba6b6effa667f852afebb5679c66a"
  },
  {
    "url": "assets/js/196.40decec3.js",
    "revision": "4d5dc79b439d42c1e55469dfcb1300f0"
  },
  {
    "url": "assets/js/197.edc470bc.js",
    "revision": "f729c10ecaa5bb2a86041547508b6e1a"
  },
  {
    "url": "assets/js/198.3daa7a33.js",
    "revision": "db2b4f15fe8069b2a46bfec6e4fbffd7"
  },
  {
    "url": "assets/js/199.f66f6359.js",
    "revision": "921793ef1fab2cafcf5e29437188aeb2"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.e5456a32.js",
    "revision": "705efb4c5c56e88ee84e444a50ba3d6f"
  },
  {
    "url": "assets/js/201.1a09b23d.js",
    "revision": "d520ca04c6c03bd8c4f3beb11f598936"
  },
  {
    "url": "assets/js/202.b23433ca.js",
    "revision": "7dd3e0143a2cf5ee183e2e584030458b"
  },
  {
    "url": "assets/js/203.9b3171db.js",
    "revision": "cac01b326000c469e8e5b34b848d6c1d"
  },
  {
    "url": "assets/js/204.dad2dae6.js",
    "revision": "73063ca01e58df4e4bb8b6c4b5edcfcc"
  },
  {
    "url": "assets/js/205.701d3564.js",
    "revision": "f0d603009f03a7d5e8cf94ab901ffacb"
  },
  {
    "url": "assets/js/206.3104252a.js",
    "revision": "f08c1cdd965b3497482883bba54c6abe"
  },
  {
    "url": "assets/js/207.381f7e6f.js",
    "revision": "4840f368f24963c3f6281869a0f1a07d"
  },
  {
    "url": "assets/js/208.c543de8a.js",
    "revision": "d31370a058a87ff10e3f6113f48dadc8"
  },
  {
    "url": "assets/js/209.51b35515.js",
    "revision": "d59d280346668bb3c47517e83a79773e"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.064d363a.js",
    "revision": "f09da562f6b82458a4609ae6d80af9a5"
  },
  {
    "url": "assets/js/211.866c3514.js",
    "revision": "00aca61bc20564a923ff13ade5936eba"
  },
  {
    "url": "assets/js/212.f5a1ec67.js",
    "revision": "efd168ddb60cbb8dda183b248483f8c7"
  },
  {
    "url": "assets/js/213.c4744871.js",
    "revision": "585dd99d1f9581bbe1b6acbe4308efce"
  },
  {
    "url": "assets/js/214.47751f70.js",
    "revision": "b25aff1796515e0af69c237f11bf5275"
  },
  {
    "url": "assets/js/215.4e46ba51.js",
    "revision": "195dbc08b412bd14b67265743ec25a8f"
  },
  {
    "url": "assets/js/216.c0d4c37b.js",
    "revision": "4ace75c08f4d4a13421f6f15ceb672a3"
  },
  {
    "url": "assets/js/217.5b62465c.js",
    "revision": "f73974ffd0735fbf36d82404f8b68a35"
  },
  {
    "url": "assets/js/218.19be4841.js",
    "revision": "1be6912803235303a422f193f8f21ca4"
  },
  {
    "url": "assets/js/219.d18d8997.js",
    "revision": "4c3c8630122306c4b553b976e5d381d9"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.10a09ed4.js",
    "revision": "7311a40ec6d26095f6ba807008b48c8a"
  },
  {
    "url": "assets/js/221.d666e815.js",
    "revision": "7b57ccc5f32cea9408378229b88b34c3"
  },
  {
    "url": "assets/js/222.e905fbb8.js",
    "revision": "c3bc2b86f6bc2d46aae388f324b41172"
  },
  {
    "url": "assets/js/223.05193cc2.js",
    "revision": "c5d97d332b51af9c445b76c629aef74e"
  },
  {
    "url": "assets/js/224.7f2b988b.js",
    "revision": "3d1137548a5f567144bc7227644d7bdd"
  },
  {
    "url": "assets/js/225.146e9412.js",
    "revision": "a183a6e681d67a398d82fae2712e9bad"
  },
  {
    "url": "assets/js/226.5c579d3f.js",
    "revision": "d30ff46620d40682929c1952090eac49"
  },
  {
    "url": "assets/js/227.d8821a2e.js",
    "revision": "779b8b447f81e44db73879808c02f994"
  },
  {
    "url": "assets/js/228.6a6989a7.js",
    "revision": "46fd9854351675eaf2247db678549de8"
  },
  {
    "url": "assets/js/229.f25cd557.js",
    "revision": "58cbed193c66a36b4ac84f512c4eef4a"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.b5d65a69.js",
    "revision": "3625d68402c036a9f7ba4bc392f4e206"
  },
  {
    "url": "assets/js/231.c4e1d029.js",
    "revision": "94b186e3c7f5a24728406e1c35861cfa"
  },
  {
    "url": "assets/js/232.9d9b7718.js",
    "revision": "0296040c021fc6f48478d435d193df8c"
  },
  {
    "url": "assets/js/233.225f4bc2.js",
    "revision": "30e5c9ea466d381c6860ee9577f8404d"
  },
  {
    "url": "assets/js/234.81648489.js",
    "revision": "0312e3e2421fd2ff9c097709ed27a0c6"
  },
  {
    "url": "assets/js/235.19211581.js",
    "revision": "3aab1e89c0b062da4d1191f367b1e26c"
  },
  {
    "url": "assets/js/236.5cdc1bac.js",
    "revision": "8a5911d6dbfb560cfcba7d97d229e657"
  },
  {
    "url": "assets/js/237.e9f7a530.js",
    "revision": "fdcb91cbec2441d98ef699f5b2bb702b"
  },
  {
    "url": "assets/js/238.0a37ba65.js",
    "revision": "2e9b9a4e0ec49116e90ca99f2017abd8"
  },
  {
    "url": "assets/js/239.d2785a7a.js",
    "revision": "7986dce066e5dc638f51cb8db30d9272"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.1775aeee.js",
    "revision": "602117bc536b61d4cf6ecaa720a00ce8"
  },
  {
    "url": "assets/js/241.0c87e30d.js",
    "revision": "59e2f93bce6388b686d779926bc76afe"
  },
  {
    "url": "assets/js/242.6bdde8f7.js",
    "revision": "ab528ff745895a0dcf64b951b231d086"
  },
  {
    "url": "assets/js/243.bcce4650.js",
    "revision": "d9f2dc2edeed4cc756fbd9c9a6e2d504"
  },
  {
    "url": "assets/js/244.f68ecabf.js",
    "revision": "c03449c257dd2b897052ed4ec1b512a9"
  },
  {
    "url": "assets/js/245.704719af.js",
    "revision": "1c1ff4892675663502c1789fd68edd1f"
  },
  {
    "url": "assets/js/246.7744dceb.js",
    "revision": "a4a03451748700ddf4d3e8c887577430"
  },
  {
    "url": "assets/js/247.77b4db7e.js",
    "revision": "873b35d6fb94a93e028e98c84e3359be"
  },
  {
    "url": "assets/js/248.296aba5e.js",
    "revision": "d1527cf3467162e3d1ef8d0c9d2c1008"
  },
  {
    "url": "assets/js/249.0c97f790.js",
    "revision": "df8af5a9bcae96a2f0ff22c0b556d0de"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.54a1a881.js",
    "revision": "b31c9fa5c0102e25decae324878d2acd"
  },
  {
    "url": "assets/js/251.8de5a877.js",
    "revision": "8c238bc1848d68c760292b759aca9e17"
  },
  {
    "url": "assets/js/252.cfb01cb2.js",
    "revision": "3b454d0b35065f8c3430e4c0ec31ca99"
  },
  {
    "url": "assets/js/253.66d8f82a.js",
    "revision": "84ca0c4d9764f059516e89097e6785db"
  },
  {
    "url": "assets/js/254.9660e03d.js",
    "revision": "b4a47298fb3b2915d50f4bc8bdf79028"
  },
  {
    "url": "assets/js/255.8c22f428.js",
    "revision": "610d829f4e4c6026e7cbe4f6052686e1"
  },
  {
    "url": "assets/js/256.c605ff71.js",
    "revision": "ef4638358b56cbabecf2324a48d39c90"
  },
  {
    "url": "assets/js/257.35ca4a17.js",
    "revision": "5ebafad9b793eb610f815f021f742c2d"
  },
  {
    "url": "assets/js/258.04b7b9e4.js",
    "revision": "5095d6a415d03a5fafe268db854ccd02"
  },
  {
    "url": "assets/js/259.5b570f08.js",
    "revision": "261ba2cca71c663f186ae4b9974b3ee4"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.2bdc31f9.js",
    "revision": "f0823dc5ac698de273d920c03f860323"
  },
  {
    "url": "assets/js/261.c7f48c3b.js",
    "revision": "b47c919148bf51f33b40dfd621f20a30"
  },
  {
    "url": "assets/js/262.3b2f47e1.js",
    "revision": "797db1951066f2dc3c027482f6970ffe"
  },
  {
    "url": "assets/js/263.a5cb8bce.js",
    "revision": "e125b29d544b4250495c371076b048ac"
  },
  {
    "url": "assets/js/264.ec241ff3.js",
    "revision": "6390f8fa7b83238fa86f8ce6aabaf7ac"
  },
  {
    "url": "assets/js/265.2c03efa8.js",
    "revision": "bf05cbc91d7ff0842434cf38a6ffa2c9"
  },
  {
    "url": "assets/js/266.746a1eba.js",
    "revision": "77a222083deac0623f4192f44a5c4c34"
  },
  {
    "url": "assets/js/267.8d0b4f23.js",
    "revision": "3d41da33b9a0d6af21ed27e785362693"
  },
  {
    "url": "assets/js/268.47401d9e.js",
    "revision": "29458ce08030600e004f7790ae189c73"
  },
  {
    "url": "assets/js/269.d7ab6ce0.js",
    "revision": "0bce2892efa0196a9739947cbefff994"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.d5ac47ca.js",
    "revision": "7333914a7db47c98253429111657cc35"
  },
  {
    "url": "assets/js/271.3bb81787.js",
    "revision": "2e3bee57fa435aeabfdd8a5dc94c051b"
  },
  {
    "url": "assets/js/272.7845c3bb.js",
    "revision": "ee8ca1d04465d836d26bad5528f5449b"
  },
  {
    "url": "assets/js/273.96b432c2.js",
    "revision": "d02c8bc92537bc9b9d2a789d94030ff0"
  },
  {
    "url": "assets/js/274.eac0f61a.js",
    "revision": "52b4e408055269cfea899b9568f822d4"
  },
  {
    "url": "assets/js/275.55b9280e.js",
    "revision": "3419e8803c88addaf694a0a51ae40086"
  },
  {
    "url": "assets/js/28.9ce211da.js",
    "revision": "948b428866895b9f5c9f159933761680"
  },
  {
    "url": "assets/js/29.1d1e7653.js",
    "revision": "be3aec80b21cd5478c4270ee7b584f35"
  },
  {
    "url": "assets/js/30.f64b4acb.js",
    "revision": "86aacfb8404d5fc293118c6dc45e7b8d"
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
    "url": "assets/js/34.d2a3d2ff.js",
    "revision": "c843e16b1f81cb784bd8b3847552a791"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.d661a1d4.js",
    "revision": "d7ece8ac2220876dfe52b31c085e85f1"
  },
  {
    "url": "assets/js/37.511e77d4.js",
    "revision": "a601936a06d8493a20e186baf495f1bf"
  },
  {
    "url": "assets/js/38.e7010906.js",
    "revision": "bf9dd04b928f9c64b4889a78f7f68a62"
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
    "url": "assets/js/40.e1b36b0b.js",
    "revision": "5812f7b7ce165af8c24ebe8f28149ee7"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.d6335a0e.js",
    "revision": "c2e201315dc01d9bb899aa40147b4521"
  },
  {
    "url": "assets/js/43.94a96c73.js",
    "revision": "6a90367bc85cb8affca1fa22db7cf092"
  },
  {
    "url": "assets/js/44.496df8f6.js",
    "revision": "ba89d8cf74746c40076c7105921375d3"
  },
  {
    "url": "assets/js/45.f5372cf5.js",
    "revision": "a89c6b2671d6c3a7c5b7a2e1df7d4fe8"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.8808044c.js",
    "revision": "83d7b49dacb0bf461d4a69f4eeb8daaf"
  },
  {
    "url": "assets/js/48.a2e61fc0.js",
    "revision": "898a49ca734b3a33ee9f1112e4681b48"
  },
  {
    "url": "assets/js/49.436504e0.js",
    "revision": "180aaa90e54cb8c1a29bd2d98b935d27"
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
    "url": "assets/js/51.17b67b59.js",
    "revision": "1f0104054fad0dda412d6b734d29977f"
  },
  {
    "url": "assets/js/52.fb1f4527.js",
    "revision": "8d1fd57f884bb0bd23a99ccce966e29d"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.eb6298eb.js",
    "revision": "02b5ba8409d90c15f01d836d19d341a8"
  },
  {
    "url": "assets/js/55.84ff7f52.js",
    "revision": "0181fbc302f6955e9b9bf75ec6cd71ef"
  },
  {
    "url": "assets/js/56.1b768cf3.js",
    "revision": "52cc19ee33a0d18ba1b66f410cf68d16"
  },
  {
    "url": "assets/js/57.82e26de0.js",
    "revision": "8916be9c99e83adc3eff4d8fbb5bd788"
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
    "url": "assets/js/64.92ca7de0.js",
    "revision": "894ed0738cb6fe50ad6dec4fb944f071"
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
    "url": "assets/js/82.bb6d9443.js",
    "revision": "d602b342653b4c549eada629cc698c88"
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
    "url": "assets/js/85.275ce1ec.js",
    "revision": "0920b9d182472161cdd292ade591e8e8"
  },
  {
    "url": "assets/js/86.a41f8c65.js",
    "revision": "a25da6635d56577aba0c9c3e06b0e856"
  },
  {
    "url": "assets/js/87.1a80099d.js",
    "revision": "632f74086b11313369b8ed84029e78d0"
  },
  {
    "url": "assets/js/88.adc30bfb.js",
    "revision": "2863a0424fc3e3ab101e900d4ffc382f"
  },
  {
    "url": "assets/js/89.10ff9007.js",
    "revision": "dc37dfe83cb6a3591f539afb969bd944"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.8fe07dac.js",
    "revision": "b8e1bca7ef49eace43ac9acc30e6c792"
  },
  {
    "url": "assets/js/91.810193bc.js",
    "revision": "e255732e4a3b810f8f627f15a0b0f4af"
  },
  {
    "url": "assets/js/92.b4e5b4c3.js",
    "revision": "4f50c70ef8bef0681d87ff0f5ec74ae2"
  },
  {
    "url": "assets/js/93.f7472136.js",
    "revision": "4d3e35e077338bde837a233ad4e65086"
  },
  {
    "url": "assets/js/94.34a863f1.js",
    "revision": "6fda567516c7935f6943c8ca08e9bdee"
  },
  {
    "url": "assets/js/95.5e003bbe.js",
    "revision": "bde5a20ccef594c6aef6ee05f43e62ae"
  },
  {
    "url": "assets/js/96.7f2ef601.js",
    "revision": "2f9d948652925bd0293af1de0d602c18"
  },
  {
    "url": "assets/js/97.84372dfa.js",
    "revision": "7e80d96f4e1bfad4905fbfabfec583f0"
  },
  {
    "url": "assets/js/98.7d9459c6.js",
    "revision": "a00b363c0ba372e188596efebbdd9fb9"
  },
  {
    "url": "assets/js/99.3876449f.js",
    "revision": "3a8989c1430f220e5a273f52bad862df"
  },
  {
    "url": "assets/js/app.fdf0cfdb.js",
    "revision": "3e55b588313832cc2e69e8c461f9fe18"
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
    "revision": "234e555bf86ae1cf308223fb90c237b9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "78ac30ebb41a134ed2c2771ef0f02cae"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ddcef3c8b31bad5fb72b7bda65f4336b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "7d5a54eee2524fbcdeb3631fe09d7408"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "420efdfcd0deca8a2c54c5e2cf374a39"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "78e5f0dadce85b24b0149dfc64bcc528"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "fe72c08ee2f4aa5547339efc1437423a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "586a918ae70fa0edc93d5e9187488fe0"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e1885ed1f4702fa7ae211ba48045d3d8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "436e301172523ba13d202c89fb13b22b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "16b5a2fb53e379f9c56a295a660c26bc"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "262ff116d3112212e4eaff89d6eba37d"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "515457df1156a83c93be27d173f69fb6"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "95de443472992ea7c263364064a3f6c2"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "213d93475cbbba91b988342aa06bc5e1"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "6de22558def901a94563779b29f6674c"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "3370ec70254222d21ad401110e4bfa4a"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "d856c73caf3846547b0f0d747056826a"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "a40c36c3bddbd2377553051f24a1653d"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c8af7e3e6009927564286ed115413176"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "871e7256acb62ba7285dd2601f17b08b"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "b55ff213d5073ca4ce6994fe14a045f9"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "046647d48de67c24fba0da2e074f887d"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "ce3352553f6724fcde788332699fefa6"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "12b7918448673baf70acc5510d6ed4b8"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "2c92c9d4a9fc0f51efc85d52cb0f03e6"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "58466bf6fab06fab3adf8e4c9a58512c"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "abdbd0151f0b80eed06045b655ca62e3"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "ba910a5d611c72e6ae107e1de96c0fb5"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "9bba51c636a9d51b5a85b7d8054769ee"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a51fc7111e43d579a765d23aa14dffce"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "3ef9567184f9dbf709da4bf9401a218c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "3d6af912b6107ece2c406f4afe77ae6b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "f2372c2c72ae7c76e1f4690a9c229fbb"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "c788edcdf6d354234096b8a39a0e2dea"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0ca8e55b194d812d08ab60d8d0e8abd9"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "a4e3166c66b6824eace5c456503a47aa"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ea893773a3688592537a281f5c87ec77"
  },
  {
    "url": "basis/index/index.html",
    "revision": "cb096c08d60e03f66d666d20f277bc07"
  },
  {
    "url": "basis/os/index.html",
    "revision": "84cd9387b82e9a7fb592b1c1f8b16cea"
  },
  {
    "url": "book/index.html",
    "revision": "0739ec52ba881b6d36af93332b56ca6c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4ad8453d2979ce3e233226b57dc71efe"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "402cea2177d115417f12b6261ff8936d"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c3708e03d54638ebd626c4b61eee6e93"
  },
  {
    "url": "c/audio/index.html",
    "revision": "2499fcffdd5c8f8b3cdf2c524aa83a33"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "a5990931dc73fccc4d307d2040cf3e3c"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "cfb6f2dc0a6eccdb8e42ad3a6f2a2d8b"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "b2ad9d99f0c8c9ec6b9372657a967e80"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "34f1c4e2f6db85e405ec88bebb16f5a2"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "4e1aa9e4050b11c33e72aaeb7a8cff46"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "2c004ad4a710f450df45347e6703d833"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "9172e9ef11d7739bef0b9fd68777c86d"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "9caeac2daac43a053d4af7ab775df7fe"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "df36146f631a1c266f600f3279f2a5fd"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "a795090edfb0a042086a70c6e501de2b"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "737ec474dde53b5654394378fd3b1cf6"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "41e0833ad4c874dd10f1fb9ba74b18ab"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "53f6bc97ec69a4ebcc51e4c80b0bd410"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "66783db63cd24b3b7da89f340e1bd071"
  },
  {
    "url": "c/program/index.html",
    "revision": "b782a84a05c9fc618e2b698da19967f7"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "58b328ddccd9d8dd793418a499a17dc0"
  },
  {
    "url": "categories/index.html",
    "revision": "80b408964626ca2f68c5c13f5e406946"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "317531c6937ba3b579af2ca9739261d8"
  },
  {
    "url": "figma/index.html",
    "revision": "e5dc6e3c8a6a12cd388794e2f789e105"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "cc2e25985155a390f8d4deb94bcd9b38"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "20d15a4ef11fa203e41e19e9859891da"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "7ff5bbdb4c2797e5d0cba858940ccf73"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "940384c5a62a125eb859c59d7d798827"
  },
  {
    "url": "flutter/index.html",
    "revision": "650823ee31d62457ea85fb9643e0018b"
  },
  {
    "url": "flutter/point.html",
    "revision": "fc87c3f942016b1d3d610d8a7ffcc938"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "eb428f940bd30357f07e1f95a49abec8"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a5477601f1bf1141dec2f44eca338ca8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "835b00d4b32d4b19da35d900bb0b25fe"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "77abb446ab43b8f42847160327eec708"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2a6569e67c2358fe43816574c8b5e03f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7c54538a16cd73c1d20ee6218900add8"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f1b8e8a579de967eb4f9df0d6895c624"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "c0eba99795c5fdacc795259f890131ae"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "fb4506cd6b7800b3880badbd0210b913"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "9380e13970c6d72757ffc2a75bc1d843"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1851c49982e5a29507b0c157fffb91be"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a207dc24d220941df23d66bac40c1165"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "6e1a9976bd8e2d256024a087281205a9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e17cd6b91d266bdcdbd3612d1a03332a"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "3240aacb63ab9d6e4d5129892a23f8e8"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "cb286a9c7aac37593311bbcbc469947e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a43c9f870d6e4f01860e831d18439228"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d097c3e0e1fbcad65ac02fd8c1b8234b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "207ef7ab6129882eca68af2fbebe3a31"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "dee802c3d2e0d9ec1c2e0b19b7aa59b7"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "6af7fed7bfb2df6b6d9e5f0875c35f49"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ef952207a5c4d208578ffc642cc2d2e6"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "86f82c47b3550334e429d734e9dacde8"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "17b2c79fcad13a389df1d4cd3c81c890"
  },
  {
    "url": "haskell/index.html",
    "revision": "da472ad4a05fd8c6b1facd07ba5f6ce6"
  },
  {
    "url": "index.html",
    "revision": "549877c4ae55a8622c6d90bcbfe952bd"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "b93be8e922e56af282e6aaed6702ae82"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "e2ec5ce3a9f33cce05942c47ada43d12"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3e6ce6b3a04526e6aa90ab6aab9bccb6"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "00a3e57556c9d065fb728d22d679bde7"
  },
  {
    "url": "python/index.html",
    "revision": "c4e21414d49a0d80738263997f00e73e"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "0561d95282d9f4aac10a7c1c5ba5b114"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "0900f514a5fde4859eb41e9daf038f6a"
  },
  {
    "url": "python/python-file.html",
    "revision": "908c57a02162cbe3d3df9fa1127aaec9"
  },
  {
    "url": "python/python-function.html",
    "revision": "b53a6f9a190d92c6d6656f2ebd5b0e50"
  },
  {
    "url": "python/python-generator.html",
    "revision": "d25b527124731908f8b996852097d143"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "b8473429fced11d6ef439939e927de7b"
  },
  {
    "url": "python/python-module.html",
    "revision": "f2e7f6468e16a6a58cc2394c0962ac6c"
  },
  {
    "url": "python/python-string.html",
    "revision": "9b33d2cf9f567ccc535f8ab150b19353"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "67f52d137075ffa3500231140e53b9d3"
  },
  {
    "url": "read/index.html",
    "revision": "c65266d64b90711528b7e41bdfdecf1a"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "32b9ef2e19cc71d1e913984cd40aaa89"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3eda0db8beea5d830dd532c6a8cfc8a3"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "bae12d675a5276e3278504087bf35932"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "e9e3e85f19cf9ebe3a4456341b0d9c92"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "be1f0a17aadb3fb60ed758a0eac031eb"
  },
  {
    "url": "swift/better/di.html",
    "revision": "cdeb03a6f5631c9da94a25eff65e97c3"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c7fa6d03497ecb5bfc1c9b76da862f5c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "b490b08fde38b92314d30b8df40b2045"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "d7b401213b58e309f944880b9752139a"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "0cc701576c3a664fa3609a26245b5f92"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "af3f6784ca5800cd7b812feb4b476d14"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8377d9a15103358f2660ce33d2c291bb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "de95ca054d3d2336987f7c4c46d0f61e"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4731e949d8111503e780086a2257e21a"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "77400b8e9013b4944f3aa16455271425"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "a25b280591e2dd42b6d22e0df572d81d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "3941e7a501556d9eb1c773265f0a0456"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "26d5587641d477924ed05a5947edcc81"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "c543d880d576ff2f711c62ef9ad0356b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "55b35d4548b132a3fafa29052e6a82f0"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "a88572c11577d2dfd5cc8532c607654f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "0552f0281073825aee7ad2f2d74a7b47"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "58d196bcb563298126a963fa119ccce7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4f8d29e9fc03b4e3fcdff7352f8940da"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "faa8e4336b51ae35a488ee3ded1505af"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "f41d9e758867f29c14fbf7bf53dd39f4"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "4eb9cddd9572bafaf64fdfde8bbb1857"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "095f98c2e7197922285d51c948b33c34"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "624ac2af5f0e5121efe56ccea0fffcb4"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "b3220afb01bf26eabb732209b5ea19ba"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c9e4a863a361de397656c69c5ec9b469"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "edbbd9a5e96b28ef7cfe41fce1e0c44d"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "2e9581e14f574b4ff2eb64b8f1286eac"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "a9cd09481d6693be5471393bfd6c5fcc"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "b32fc2fd5d269fb8a757b63d99fa3fbc"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "f43dd00b75f404c3c9c225549322a46c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e037a0f9bbcd1104d9089330f3d7c740"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "7d190cb0a6d73c3dee7408e4a3264f23"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "fdb9ba5106718f2b7c122fcbe95be99d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "e434a0198062c45f60e042d4dabc9148"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "50923f4ca314635705ecc6a7d762a59b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "e80df3841d3c1147ac5e2b5374123b07"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "f9593e9d4052726c466a69df9de3f20a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "b6fb8358bdcb707782b0183afa4b97fd"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "44e7376d780eb5159b3454080f8fcbb1"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "09513681be2fb55de0025295f15ef3c3"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "7ca63c8b04dfd7ebc2cf8a3f78266301"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "5649b1cd6d56cf004d82c6fc053b6c02"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "dcfd0f8e9d192b1c223c124327d643ea"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "72a461db364927ac157daa8bcfc33251"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "644395f2e897e58fdbd1e2d2fdbc6098"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "f5fb6814be3c1131e2f326460bf8b09b"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "21b93f2616840a933637f8876e4ab117"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "126e9a61bbbff85172723abc235abe76"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "d47ce287efa102736b3749029fc5ccd5"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7ac28777a342e607604204ec2810e9ca"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "45cd94c80a56207ae4d87b171207e53b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e36cbb709dfa268da2cf67274ad44b2c"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "422d54ac2431ccc787ac6c521eedbf37"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "65a133a6fac443cdbb829d5a35404fe2"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "8f0a73e833d15819af9f76bde7da891a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "538cfa390c448356ee24d2d312bc9841"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "ac4b6fe7c6210c4ede1b730c96a7c13c"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "184cb4a5157ca0801b7f552659aa40a8"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "bee1f2b4134bbaf774ab4ef8f4b52c91"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b5714454dc54bd3fb51f8756df146a12"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "fe0a504c07e51d5fae397882880d5bbc"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b333356be76e027c81334fa1f57b15c6"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "9698cf8bd982478a9c8b628271ec80c9"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7d3c6057489f1ee289b8c427a572a972"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "fe87aca401860d7f4b0feacbb73777a3"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "1597fd57fefb115fae83e2021dc97b5f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "a3c999b1507fff980c3e4ec6eedfac5a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "bee13dd863c3fd21c1f9f0fd0854e7ec"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "957ce7f706e20843b8d4baf54352ad0f"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "dcec520482235cfd7273225ac02896da"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "3c1e4ce61eeb2e0126aacae5c7679939"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "8cd1e3a1f6b76508f461344636fec1f6"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "634611a50ab93c25d18689c9e7cb7fd8"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "7ef59510d78b288ef5199045968be3ed"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "0e30037dc88732fce51f0b85eebcb32e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "68727ffb8ebb7d0fd873afe1696a03c6"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "34cae72e3f98f817c2ba38c1265a388e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b61ee1dc5e027fbdaf3b9ed609799d46"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "503397bb1bdeecaf3811eac303f01253"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8a7fa081badd9601df920e266dbfa845"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "24e9be9667d452aafd77ccce3a5a07bf"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "4611c33b5719f1cbe59447bd0d574de3"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "6f81afb4e0ff6128dd01fd16870ec31c"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "7a49b2741a1d891e05d98332bd9a71d1"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "bd8be270e9f8830f4e0f59c2cc89ada3"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "cc35b80e35339ae2f6c9ac81770504e0"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "1285b0b518c174837c55f5cf55170f29"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "e8a318ab3be01f53e8c5cc20227d3b46"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a540051d8aa467ae54bdc7aff230caed"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "60144cdb99ff9994e9a0be66117caeb1"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "21506a889567c332c0a2e1064520bdb7"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "76bcd298775b6283588ebfc8e5480d08"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "d8b0fbeef60b193416ff1521c3a3f3c1"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "cae0168321befa0a2f40045e2cea5a31"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "1ace25380318941df2e26b1b339b2bd8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "109f8f62b076013c926967dbf6377bdc"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "73b4d18a01cb0b97104c4734ed80c85f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "4b217a9014878fee0fb039bfd6b8b9bb"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "33494484019935fce719961403aa361a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "65ac34ea9133317c948588a00d080653"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d363e19db58b739a5aaaa5e056c1b9a1"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "21183e9a17dd9925831007c5fc87ca2a"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "6a824e0fdb976338a30e7274435522e3"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "40de0187f44655b07f9b0ad5046460ce"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b48e4ea1baa58ab5d5dd261e95f9d049"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "755aa6243f9d5b03848118eb9349ffb1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3933e61220ef65b67dba24abf5a6d3b7"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "92745eea04ec972dd14ead1541a6ef32"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1cd2de07170f7a760fbfa043cfb0acd9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c109bd30f434b37abee17395540ac4bb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e0a4eba1643da7b9f7df8c15aac529e5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "fa8e6c234681876e3500df198bfdc33c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "9527afdae5b3a707beabbfbc1a73db5a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "013595b6fffcb3e12e338a2a5636e2fa"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "71a4fd2f77e702f690de12105a2935de"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b0f7761be72448d0e226beb75165a00d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "703a54145d45c207fe87923341c0221e"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b7c9f4caec474202d526b94d5f4ad484"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "fa0960b36abf82a55d325393126dd855"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "e9b7bf1126bcb4f3a790bda5a64b5f23"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "5c2539b1f90c97a5ffe99908adc095e8"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9d85369229865eb17f6850aa9e5898a5"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "198359e8bdfaba2d92c419b54057f19b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b22918edb8eeab2348cc97c5419c46d9"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "1b84587e64ee299df5ccd4b8f7bc15c7"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "9c47a335d5b3546fabf2ebf51f96e210"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "5b1e8e7f38913e337b37f2c878b2f072"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "140d9ec5dc5e9035188cbc18d3e30601"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f65216cf91566d7edb4cb92cd4318a96"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "dd100294abdb551cf020724fa455e09a"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ca6490ca08952fbacc87a319b08e5c86"
  },
  {
    "url": "tag/git/index.html",
    "revision": "75f918003cb2ee9087eea96bd83fd637"
  },
  {
    "url": "tag/github/index.html",
    "revision": "a17664e0bd769ca88eaf4eb367e57817"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e666b515bed9e37995dad3d8a019a4cb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "86a393abe4683f425ee36e94b875133d"
  },
  {
    "url": "tag/index.html",
    "revision": "8a6f77f59c1c44022344a64249afaa4c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "60c5702b5414e3db0d28dfed04398331"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "9e92a5882954723770a2e71618935f5a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "d75b87779d7c4a9f413dfbd22c99a00e"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "a6e888650b2caf57bc8a79600002c248"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "be35db9d02d9ac7c9bd6c021b251bab1"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "3d592a0263a0b5be0fea0cd074660d31"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "bb1b7cf67e9626855a607546f253fb38"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ea225cdfc3afe9c46a760936f167b78b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "41f4e8e339fa8eb017c1f166e58eb0b7"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c5f58d5a2f529b8ee20f120218b31650"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ced3e55794b8ec6150ee3d0f101e3fb4"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "b76719a86bbed465e19068f3f4c8e92d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "312c4dbc80f0e27c015a6d5b4f5330e1"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "fc05ffea088e23e6d64a6e7bab1a8f34"
  },
  {
    "url": "tag/read/index.html",
    "revision": "7a3be9e6222c4548ea45bc16f7d92ce7"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "03ce6862151c288dcfac48d429bb84be"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "659441c779c76cf2a6bbe542e298ffee"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "5ca6332326360c3fad985cc46ec5b3f9"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "3fc7fd6a80e9a3ba66a3f8c7db4dd2b9"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "129b1733a05bd900cc509e5c9f5a87ef"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a351874a5c7c6b8883a7b1225282e4f9"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "362a3d2ee6c16bcdc820fb7bfc683d59"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "798592b8660ee710d9fd7c23fdd14d0d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "525d4a340e61f6a7e8662939c91815a2"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "edf989f4c987adfc4543e65ab5821f85"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "bf6f938c3fb5d0364b639096e236aeab"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "94e79763aa57ef4ec4fbc273882c40b3"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "c7e7a484f657f1f7fcf6e3eb39f9929a"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0fa011bddadebff1570962b53562ce0c"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "830af74b881fb4a8e92ccd80b24ed2d4"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "a5e9b6e6b93bc1db328adeff55491796"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "05fbd6ac274c0b52ab455e0f2c473cd5"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "55daceee9122217ba2a82afcadc08a0d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d1e5b1ce30753ee14002f77414ed96c8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "3cebb1522ad831eb478d4bc94da57c8d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e0ed5b565aa9e728e81624ecbdb0131e"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "72dcd3fad5adb96ec7f0a400cd0dbdfb"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "841304d6041d364497c69193d41f8967"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b3f36046b1d5a75588aaec72dde54010"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a10a823642be1a5ed72cd2e90badac40"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ca73d8e714e7eabb19448dc08bf2d143"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "58442f5b1efe3c6ab2957ce2fcd1119f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "30f803edccccb0b6daa744bb7b7e2443"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "140a83ae81a5d1c91d721aebbd47a462"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d121b4c8f8ef2125106ccb71e60f4198"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "4f3f4ebd69e3952245e8998b2b9ac158"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "805ebba7b4f787d0ae54fb995952f034"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "1bf3c84fc1955819e557fa2fa85da81d"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ab345f00b8c0cd6f5b6acbeeed509159"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e394f984e507e7944e6dcde8231e5f9a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e8203950605fd60c1729b94c98a91290"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d35881fb86c857e5f3c777bb91f4a028"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "4ed8e82141a75f6462585ddd8821ac9e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0e6e0f7709fb70655f48097481f1db8d"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a2928f8a2bbe25e63657d7da3c28c317"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "bff0a986c913e351b3918297e172b1c6"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a53953db7656e6dfdb864f3e9216bbfa"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e7c9f82306e0048ff9cd6b0750281267"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "914210d2a33a18251080cee637fe167b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6da573376c4aea166ecfd7b0a2887cfa"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "899016aaee151ec239a0cdca961326e7"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "78ad61105458b616117fbb214feabec8"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "894d49e29ef7c2f460e10e1ca1f5ab3e"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "e1917b9bf150a2b4fd0b61083687b781"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "8cfa561c46b4b7362834ded5e365ce7c"
  },
  {
    "url": "timeline/index.html",
    "revision": "d1ade5de8edc571835461a62c34e1a04"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "af1b038f6669799108f3b708a47e3205"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "d9866720203bb553e5419fd52daf2367"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "6c17d7e1c156ad1a4e2f087df1ed2c87"
  },
  {
    "url": "tools/git/index.html",
    "revision": "00e473a7ff0ba18097b25a3edca80760"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1b46616359a22e5702f67666aac8b1e8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f320ffc8539fc8a0192489d9fcc3094f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1bda0be172e38d73839bc82930b7583d"
  },
  {
    "url": "tools/note/index.html",
    "revision": "c219a6016ae08e9c2ab5aa82cfa4d413"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "5ed06a43cfa6be950fd258776b5a3758"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "402143a1caf79ab499b3c6c802bd48b1"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f7e9463505f80a74dcc856a722642eda"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "33576c1580499f7e98a494acffb58ce7"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "dcf967e29dcf6301fdab3fc07a4f633f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3bf443c5608f39ad18ec12c2ba065770"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "807b5da949fd0ee2b07180a1f0f8c29b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "4268d27d2d4d280396fe0a8678f61791"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7b730308c92c1411865d65b004c407f1"
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
