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
    "revision": "29a56007e09e49a366da0b104d25800e"
  },
  {
    "url": "about/app/index.html",
    "revision": "df845f5724a4c87b6621e737a427c016"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "efc90dddbede6a10f625eb9d03770828"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9b9667ec7928dec3b21f4c3ee8377bcb"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "899d09745f251d784b5ba46c0ec17171"
  },
  {
    "url": "about/index/index.html",
    "revision": "fa2867c044a84d53ca050e8312626a43"
  },
  {
    "url": "ai/index.html",
    "revision": "ed560fc360c55638f9d18011b0484033"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4f467f812432e33f7a83145628339905"
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
    "url": "assets/js/108.2abcfa60.js",
    "revision": "938c67a48ae0bbd53d67de7ace4aa419"
  },
  {
    "url": "assets/js/109.b9bfc19c.js",
    "revision": "0ece66cadf80685af7fb865bf45546de"
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
    "url": "assets/js/113.f8a2252c.js",
    "revision": "b1d2f1197e651023b4bb068c8480667d"
  },
  {
    "url": "assets/js/114.4637035b.js",
    "revision": "6253744694140f31fef14a54f53e10c2"
  },
  {
    "url": "assets/js/115.2e9ac89d.js",
    "revision": "1f4a224d43170f9c2abc6dfd6eafc2fd"
  },
  {
    "url": "assets/js/116.90559de7.js",
    "revision": "34be4580b8c7570393f3ce73443359f7"
  },
  {
    "url": "assets/js/117.96c165ee.js",
    "revision": "4f38c7a33ef0fc3879e0f5b9a1f59130"
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
    "url": "assets/js/120.8897e2ca.js",
    "revision": "08d03822c76b34cb5b8214de6c4be82a"
  },
  {
    "url": "assets/js/121.4c6832ab.js",
    "revision": "7e36e27fd10fe86664e4f55434bef145"
  },
  {
    "url": "assets/js/122.2eb1fc94.js",
    "revision": "d0621b92fbbb3314afe32e8179702fc3"
  },
  {
    "url": "assets/js/123.dfad52b1.js",
    "revision": "ab7329d32a2943b3b7f755797f26f11e"
  },
  {
    "url": "assets/js/124.09a2510b.js",
    "revision": "0aed7242f1b72d8925249f64795c2623"
  },
  {
    "url": "assets/js/125.057f81e2.js",
    "revision": "a4d338fb012ef26855e7d138e27aefff"
  },
  {
    "url": "assets/js/126.8ea88f2b.js",
    "revision": "7fb3d30d6be11db3fe991b5ee3d3eb4f"
  },
  {
    "url": "assets/js/127.f28c32a3.js",
    "revision": "14e274ce2b81f769086093288d6a1593"
  },
  {
    "url": "assets/js/128.8e1fd120.js",
    "revision": "746bfaa1856302a6d9d0453aefeda66e"
  },
  {
    "url": "assets/js/129.466b56b7.js",
    "revision": "2f097520d06f007376f3aceecf567791"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.a50564c7.js",
    "revision": "c67c4312b54da6d8364640a347ef89cb"
  },
  {
    "url": "assets/js/131.9f735a92.js",
    "revision": "ffcf8b39662d6e3b96062116df1b19aa"
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
    "url": "assets/js/144.c6360c6a.js",
    "revision": "1d209021e31c09b463cb574fc7fb504c"
  },
  {
    "url": "assets/js/145.d68c2bbd.js",
    "revision": "71c6789b75aa43f9b1b16938e5e0e98e"
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
    "url": "assets/js/150.c42af10c.js",
    "revision": "2ff9e6d09771cad418f434c4b36015c1"
  },
  {
    "url": "assets/js/151.fdfaecb8.js",
    "revision": "9d5270326e2ea30dbf62b2487c746f33"
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
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.4b3a9b35.js",
    "revision": "3ea220df9534e0cd571ddbd025523714"
  },
  {
    "url": "assets/js/171.ee1fb0f7.js",
    "revision": "7ae0ba2c95e7180d10b8572f5142dcd6"
  },
  {
    "url": "assets/js/172.8f0d5150.js",
    "revision": "3ddc43e11f0a8721b912805ef0be5688"
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
    "url": "assets/js/177.d00a9a7a.js",
    "revision": "1d5eff6c59ac848eb673a07b298100a3"
  },
  {
    "url": "assets/js/178.6d7075fc.js",
    "revision": "b8d8d442ed664567d7e806028b8336b3"
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
    "url": "assets/js/190.a76c68be.js",
    "revision": "d533b73df6f0b42cc6337552e69c85dc"
  },
  {
    "url": "assets/js/191.d392af12.js",
    "revision": "846b0d35fb022780c1c1f1a3bfe2789c"
  },
  {
    "url": "assets/js/192.34e02533.js",
    "revision": "f265c29d08c535b6608290ff00d61fa2"
  },
  {
    "url": "assets/js/193.23158fce.js",
    "revision": "d003d1a3fa88d095e37aa879cc5bc5e2"
  },
  {
    "url": "assets/js/194.ea1e2bc3.js",
    "revision": "106d0cda1d97a1c7d187f1f545ed3d41"
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
    "url": "assets/js/205.71bbc21a.js",
    "revision": "64f56db71f5a9213c03345bbe49e415c"
  },
  {
    "url": "assets/js/206.a261e6d6.js",
    "revision": "5e187d012b98f36fecd20f5f99d6def9"
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
    "url": "assets/js/210.88750827.js",
    "revision": "18d3e0b4aebbc27303fd2d0d67b21593"
  },
  {
    "url": "assets/js/211.715f34a2.js",
    "revision": "a91bf2b4ba8c364af371eb4ce89ebde4"
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
    "url": "assets/js/229.d7de214a.js",
    "revision": "dd757a82b52a9cae2c7de8feb5852917"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.fe75a359.js",
    "revision": "d9d1f189812b97434a86836e5ae7615c"
  },
  {
    "url": "assets/js/231.11fd0e4e.js",
    "revision": "08b2adb66f7d422ea0497c0ec832b056"
  },
  {
    "url": "assets/js/232.d4a48ee4.js",
    "revision": "4d340e359919f91c4bf749709cf2f180"
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
    "url": "assets/js/237.a9ee76c7.js",
    "revision": "23b766931bffab8c4445e93628585d6a"
  },
  {
    "url": "assets/js/238.256a40e8.js",
    "revision": "24695da69048dbba68caea2d5c5f72e0"
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
    "url": "assets/js/240.c10bfe37.js",
    "revision": "c5d4339d5b7a05a0c0ab03e56017a39e"
  },
  {
    "url": "assets/js/241.aff5d15f.js",
    "revision": "2ec7c551183d829c73c0d60738aaba61"
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
    "url": "assets/js/250.88379879.js",
    "revision": "345fe1cb7c1c62d89ecca34676af0022"
  },
  {
    "url": "assets/js/251.712dffaa.js",
    "revision": "e625ea504a5204a9a9f166fd02e9777e"
  },
  {
    "url": "assets/js/252.89d66d5e.js",
    "revision": "86f299759e619599ae34143628983a61"
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
    "url": "assets/js/256.7d3ef119.js",
    "revision": "39fe7840efdc5233d98891d13dc5f551"
  },
  {
    "url": "assets/js/257.7f7212cd.js",
    "revision": "cc16dd4b29dbb59c35d766200b11f472"
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
    "url": "assets/js/260.5fe6bf3e.js",
    "revision": "d6b502a9f085137a89bbf225a69dfc0d"
  },
  {
    "url": "assets/js/261.983673c3.js",
    "revision": "5a49aba403c01c649efa7f1f4aabc6ed"
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
    "url": "assets/js/264.834af580.js",
    "revision": "3f49187c824496cd707dd7942a248cc3"
  },
  {
    "url": "assets/js/265.e0cba1c8.js",
    "revision": "1956131580d594cbc82f90d6da3653fb"
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
    "url": "assets/js/269.e598686d.js",
    "revision": "1e8e97c9b0d7a1963cb9199177921fe6"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.18db7443.js",
    "revision": "90e83672440df975fee389c669a88aa3"
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
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/29.3f14bee9.js",
    "revision": "6eae4a8b0fa2fb5bbc00e054a913e487"
  },
  {
    "url": "assets/js/30.f64b4acb.js",
    "revision": "86aacfb8404d5fc293118c6dc45e7b8d"
  },
  {
    "url": "assets/js/31.aad90f29.js",
    "revision": "235beab9740e480d3dc06d7989d4835f"
  },
  {
    "url": "assets/js/32.2f57dd53.js",
    "revision": "3f5cb2b99431811ce495af7b3f39109b"
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
    "url": "assets/js/45.fc37439d.js",
    "revision": "e7cbb2ed61bfdb6c2cb40c59178fb487"
  },
  {
    "url": "assets/js/46.041af430.js",
    "revision": "a65e607314022e649794cd5f64db99f6"
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
    "url": "assets/js/90.ee6492a6.js",
    "revision": "0ada5dac967e75f85bb7568902c0f12e"
  },
  {
    "url": "assets/js/91.f72738b3.js",
    "revision": "9d358011c58985efcafe39f6f6be7f17"
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
    "url": "assets/js/app.508d9aff.js",
    "revision": "eeab03e807e57295d8630bae5d37590e"
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
    "revision": "b42b19ab80eedbc90704a1b7aab4a3a3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "61431e09050eefeba3064aa9162778e6"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "de04ea44adbe58634964f05132fc7404"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f0aa21dd501e51fe4324d1825021b85c"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "0dc5c1feb7817540265643275818752a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e4b05cf26f88be9772c0301d44188e97"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8f8be954e7e4194a984f9823141083b6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6bc71b6ce8f65ca2c6722817de0dfd52"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8d98fe8edc0dcae6bccbb7c24237e1e2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "43671cc01644e8d302e5247cb21e4eda"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0b5af254e03cdd47485897ca71cc1e56"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "2ffa8fb49a1f83ba8e459038a8e8b784"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "db2c20acc8f6d2cfbc69394836005534"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "4bacf6c8dafc3b6ab3a1ce8f689e3cdd"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "26c6fa5b1b4ad4ad460c2bf2963a725b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "84e203b2727727fc5dc9b2cc20f9bfc5"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "7db17b0bcd209e46fb1207f13fbf4784"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "8353637bf61bf9d747a9f7cc41cfd6fe"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6748e53ff9d7fdbfc2f69d0150cfdb12"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "e7118ce7810c8337e6b0bfe385c83a6e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "c38a8ef56850347b4e4314a6687c2fdb"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "57d41bab93811e1800932072cd2556b8"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "5b67a21251e896fecfbd02b8b46eb1b2"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "6161f0f203f9e2e8ccb4ee5715eda2d2"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "a373214165a5d6cffab5f5bf16475070"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "886fd7e67d59c9844253873044bba9de"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "9cb038072db909741bd42eaa6ebd1b2d"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "d65b97d332dafb15e3b1e6e7fe170444"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "14dda2f2ba49b10a29790262045f9684"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e72a1d3ea6494c1fb1b1557bacd6b2c8"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "488047f427484bf51f33300afc7ba180"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "ef2dea4f7b6377392500d6a5d2e548f5"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ea3891536d07960edc95338365bab605"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "43ea32dc6e2689710cf71defe88ffb32"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "9f91d2d1d678ef935328941546cd1f14"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d36ba6842a60eaf59f096a24602b8929"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "46027e311a040d7edf7eec7d947f41e5"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "86c1032e9857a958a6e30fb96f68b08a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "7585f2d55ca2bc3eed8602684091474e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f85ef4e4808efed595fc2aea6e908c2a"
  },
  {
    "url": "book/index.html",
    "revision": "f502a4ab865c193d975153d7392a8f83"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "45565059f6febd3d87355b2e6e78ef7a"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "25698ad070c2f881bef58a9ea8c5cac1"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "d9b5adbd7c893281178cb78008734c2a"
  },
  {
    "url": "c/audio/index.html",
    "revision": "0378b28300630c59ca329136f4ec9710"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "d4b2082bdbd9609346ec4bf2f104f331"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "050d33ba5dd59c18c63ea4c7865e227c"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "c03d95d9b05fcb636704e670ff2c07fd"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "500b8bc48c70ae602f88553b4bb25376"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "81f922e2fe9f98e4d2ab74c847e4ed9f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "c2cfbe17fd416455a2a85ac157a7ed5c"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "5689488f29766bb28535c06322ea661a"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "51ec6e82d63def064ca6b042074ebf10"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "d0cd02f5aab6dea2bfd75835c2217057"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "859eeabd72d70e1f32837a89ec033b39"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "24026ca0d4a4f08fab1f00a8495b36a7"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "76ebb24cd75fe206be5cda43f7f7640e"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "96d48a91fba07c9d6150e4cb0dc47c45"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "13f3bef6d94e4c0977d9ffe90b2acd4c"
  },
  {
    "url": "c/program/index.html",
    "revision": "864e87c66e9ac38b60952dcdf534fe79"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "5370baa72d982fa2c0403d38e96e4c1f"
  },
  {
    "url": "categories/index.html",
    "revision": "8e2cd64627db3b0c93e493200021ca04"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "479a06324407d02d622689c0fc3551ef"
  },
  {
    "url": "figma/index.html",
    "revision": "de0e5c3b6be939b290f677bd8af5d2aa"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "35a4955bc59aa57a374702a19259a091"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "8dd3b3ad0841cd0bb639c3359fa76ec7"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "6c4345b9d399812c80a64d0037dadfda"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "945c4a8327f0b7599210ddcb5de0168b"
  },
  {
    "url": "flutter/index.html",
    "revision": "e98cfa06f47269a1e1a4f05978209211"
  },
  {
    "url": "flutter/point.html",
    "revision": "8b11cdcfc7af1ebcb77707fecf793bae"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "aa9fcc7f9f2dabc6e37638ffdce0cba9"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d7b1f4d91e1660481a0ed74c6b812c02"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "60eab7fbad0c1dda91da8086b1f5d9e3"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d1cc2f06c46a92330e71c9cc13c40ea4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3241160ffa91dfa1a9453f89b29eae12"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0d89529e127edd565f7b00d16884a886"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a26db4125bb7f7174357e9ce80fea6c0"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "9f9b13b7dc0c8133387d8757ad1ad023"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ec255f4fcbec4936385323422d1ebeb9"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e2dc966122b1e54b6321d1d1ce1ebe81"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6c3a70834ee0dd09abebea633bf13ed0"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "ddd6c34114d85eb7249ecf367cd7b002"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "01c5ecfeb369a333caf10cecdcba413e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3908d7d70fe63cba069c3e49ce2a26bd"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "299ecebcab738f9126ae732783fad68d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "862d58b65cb985485bab72d6e0af8605"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "2ecb4c8579c93490763c9df8288734aa"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "2b11c31fee08ff8b005c2d71d123376c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "aeef9f7e295cd8de1828342f4434fefb"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "8127f6ba4c96cd1c4cb8c8c993187f74"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f2432b1f5c8fb5bf83ffa507bacbd6a5"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a61a289f45a74c299d2df5b2da63e4f9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "34d80e227fd9f2d3c63da7ad4ec7a24a"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "69a9580d993e610d6e94204e72cc4c03"
  },
  {
    "url": "haskell/index.html",
    "revision": "84cbf577c5d9e6294f0c553e7250836b"
  },
  {
    "url": "index.html",
    "revision": "607cc5d9140c945bf9ae857d7a08def4"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "665bb509036dbbd827393ba8ec72e7fc"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "18b8278384651ec944718e0455c591dc"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "13a48cd7fcd289408ab7b6997c9f1158"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "25639d7377d5d43e57bf60ea13bbdb57"
  },
  {
    "url": "python/index.html",
    "revision": "364292a994dcfd3ce243e48fd749d69e"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "f54a18cdb5db0c123cfbc7b88ed85584"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2139bab22f485207265cbd9f79823868"
  },
  {
    "url": "python/python-file.html",
    "revision": "9ade34c57f0405a1cd02df4b4f4d8c30"
  },
  {
    "url": "python/python-function.html",
    "revision": "bb2db4a8e4caba95f5d0fde7c83573f8"
  },
  {
    "url": "python/python-generator.html",
    "revision": "5eca6b70f20939b499ba0ea2ef77d365"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "6f0b757940e22b7468d8469b002459e3"
  },
  {
    "url": "python/python-module.html",
    "revision": "453a3b8e9723179ff51f49f3f967960c"
  },
  {
    "url": "python/python-string.html",
    "revision": "21b305b11ea39d7c672769a25eb57521"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "b75de12685898625f15fd2250b92ac03"
  },
  {
    "url": "read/index.html",
    "revision": "d66f24ffe6152d7208d19e3682c8fdbe"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "7b2136e8a00ade8d2dda2430d72ce965"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2d4de99e3812ed860169774c980bf714"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e557a2641bccb223c16c7b08edb77208"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "141312557404bbcb4c139958d6e0ac74"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "d53ea93cada8ddc6199f871337c692c9"
  },
  {
    "url": "swift/better/di.html",
    "revision": "1e7e157d1ba8cb8bbc1899c13c7fa200"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c59190b9b0b77108eaf450e7500a3dbc"
  },
  {
    "url": "swift/better/last.html",
    "revision": "b11093b9da9ff8587effb416f8e08d53"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f0f3b73c8e8175d3fc45823c99438b05"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "3512f81ff09e4be131ce087742bc1721"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "904ff5401cb8c4ff27eec47fb5031702"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "6bb07e79fa5df64336e28a7b3c4af4a1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "6affc23338534f41104d82c65f88cb03"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4ffab57b1a04cefcede3eb3d54c9322b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5e634fdbf11245d5e54fc5e2ac38a722"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "425c337c7ea7d4338a6fa2c36aff50c9"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "84153c0ea6f611deaa676549f3ad6365"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "d60de92cdd7dd04e91cc2ad256074bde"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "00249cb493eff7405fe0b9fa9060ee0b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d3f13985826352da31e518e2e7b1909f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "55a2cb88b15c0dcec585796e150ab79e"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "dbf2ea518d8db1e614a3e1bdf664fcac"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "587aa1f1716cbb05c1de7949a48d09ef"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ae7eef4853452f9764247348c28863b0"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "f52b78a098118f561ffcb4dfa8b4495f"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "6e93b2821ccc0f80b43a4efdf2d27076"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "09168a635bd95874248dca9f5739d4c3"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "81b0af49d49f9b7f55366f8bb87bfbce"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "2efa5ba6c06d8858ac92464938e7de33"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "edcf5672c92c37df7982b1ac1c2fb2f6"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "52deef251136edae0ed5eab2cf816ecb"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "fab71044bbf51d0c236244f6ae544397"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "3db7880d2b05786be9216dc5c434f6d5"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "fa40ddce8a9ad642fbe192613d37a59a"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "e16e95d58266e53165980bb5b9ab8848"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "072737d9d25e715119f4f7a9c1033872"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "1d485283e1e48efe3cb1ae03f2929656"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "1afa5e89404be4529a3f2d8b8d34aacc"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "39fcd13f2531cf04d760b273d5b2ee55"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "64c90a4a7b00316aa5c76929c606c304"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "788f45fd0dabfa54626914a1d4f4ce56"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "76c60a7ee13c468b2da31a2058db072a"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "d07fa255e29db43d98762856b68f4b8b"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "edc4d6b15dd3e7da52e0ab22f0c99a03"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "0c790782316b676d868ccbfa2337c8a7"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "a3b58f3aecf6abf0315609d675a6ccae"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "ebac4cf93daf7a77329a6294bd405d02"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b90425e4a56b51945aa8f6d61af55441"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "20713f5327ce880037b92b238163f8b3"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "078f867a5f19d2fec7a02e792f52ad04"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "06d97c3e2c00d74b7c74463acac0a40f"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "8607f5e55339114ba85fc1cb79bdcb63"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "09c3f4893ee27761c0dba8c284a02633"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "39948268be449a28e147a7b41733aec2"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b0b4fcda49ecc961ab7b4ef915ba7553"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "338a8695629e7b051304d325ef1b0228"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "e9af63caf094a0fe7526dfecf459e633"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ce2e55e304a3f12852ed1ee756382d00"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "638fcf90150dd0b310f7503cbef76890"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "d08a1066b7e9cec72ec94520a3fe01e2"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "e089e62e42b4a47476874891765ea7df"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "bcd172e1d6ec2d3bf2084b8d07760a4e"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a961db6feb14cdaa3c5a0057c772c827"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "396072123dba1d0f44024f2b33eff6ee"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f99cbd3f002f71efce1b06694d3f08bd"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "a6ed9038c1ca841cded49e6bc80ece8c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "6dbd12b3908fcc4a6ab243e7ab20a476"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5389188bdb8b5ecb46b290ad6c78a34c"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "14a98f1d610298f9cede4614b8078bae"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "4f69c763f331d37b498919f3a12be3ed"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "3f5150dc8a86fe1ea2c5d16a76536449"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "cd52200d33690139b29ecb9caa081efa"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4dacc106385cfd333c5f02e4200cedeb"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "05931bccd6aadc475d6e84a1424897f2"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3fc70c75b3b15560aa588d2746483d91"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "31987e45752183f782a7fdc3d81c25b7"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "66b4abfe535471b26ad773811297ddc1"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "2a5db4ef03873cf5fcd81c6042239340"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "59fc748460687cead13c4cfb8d279d16"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "4bf83535cfef49142d3ed7e971bb94fc"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "bf5a30cb0a80822a44862935b4e67499"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "c8af9b8cc1efa9613549a0c8fe0f4170"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "baf0cf19e9ef634f0e919461418d8c24"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d1df8f855e44038f44f8bf82ffe20220"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "e6a93629de3022a2689b1735d1a2b744"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c7481c0ca230c55c6e094d56929ae0b8"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "0444d53f820611f2bdf02f6108ecc845"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "6f9b406f4050ece8f47ee7136ecdf392"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "efa46ae7ee3c6e585a9cb045f44ab846"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "249bb9317604b167b8302bd24dad8a0b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "e68dbde479533ca5e580637466e3dc8e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "135abfb40d7c15b0d41a97d436cd2e36"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6abe38608e7334cd9546ccc05a800e9a"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "eca5c1bf8db126b8efbcba33df997267"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "4407b75bade8ed66a81d8bf7d854bdde"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "b54ef69fb5c7bd1974cfb84ac7e4081c"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "e8c7350e704fb58ac0bb7eb35837889a"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "fa67b00418e12353f4a5704466a0e082"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "7f9b5f077d34682e72a48f95212fdeda"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "57b4e3c5604c5673a53ae95fab77ab75"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "bec90f93e7c067cd39bbd2f254d85abe"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "155ddbd5f9a72f4350fb98775131e301"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "4bfa4bda83c4e9384937c897a21aa708"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "48dce61cc34c339aa3066f67c61273b5"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "743939330a72245c9632ee1b67a6fab9"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "27da53c55e3ccc7e8a27f08affc89d21"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "79493d442557c97c661ac40706ddbfcf"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "9a29cb950e95b1fea8dce219d375a7c3"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "c7266e64f2a487b41ea88d71789cc775"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "df02b9d3906955820365f969f86c03b9"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "4e0ae727efbc9f03a10ab87c4bb7b64b"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "19146bcb44efe182284cb3eec76b433b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ed763b9cab13c04d056be756fc3d3458"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e4b30d6d6880fd986dc4c04fb66c6bec"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b3b5e5d512215369202f1c1213f18cd7"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "28ef43ebc166d69cb99833845a25895f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7cff2bffc979a31c2eb6f7ec0d5fd96d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2d07cddf62af3168c8eca6eab107b979"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d792ea35fdc1a27bdaa0b11a62f69016"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7f36cc0a393c9b29db7208881366b570"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "50eb8f5235848eccfb4b238064da36ea"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bd604e32cc709fe4f1dc23eeed8dba35"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a7c86d77014e497b9bf3c08e25675f87"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "67492062c9635f434b19a49a3511ac68"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "0a2d8b074a71a3bcf4b5286987579954"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b84c9617a3f7cb0ae0e302d7a51023de"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "0adf04f38c5bc106027ed59d3378019c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "12362e1cde467c1d2ad912b655b78d0c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "80ab1a4855cd4a4f66dc132f58608c3b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7e36a9dfbd7b5e6bf06ea9fd25bea407"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "afcbfa5b99b4489c150835a151306945"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "0a5988dabd26e2678f5e94025d985bd3"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4bc6eaabf5887c7f2b646e94be69cc02"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "3bbefe70619c58956f9075b6d1e57e75"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e676193d9166638f8d3e215ff8f7c51f"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3185463c0ae7757bf8655485bbe5128b"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "b74ed1e295f724109b9a61911f9daa22"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6c5fdfaa6506eb3985e0296b00996dc3"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2ae6839d2d7509d33a9f9cfa574e6345"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d92eee02c3f244d7bbbd08d62184d6bb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "badf35d24da24b961f3d78dc1f33e58e"
  },
  {
    "url": "tag/index.html",
    "revision": "b9f21dcb3e810b975ebd9475fc4b3412"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b444cdcd61f40379650a671858386e99"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "aaaba0daee29677983dfc374c9f83d79"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "acba36cc15ac36afa8436d707982f110"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "17b245776e0188e0c3aca1f193acde06"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "af8aff93e9f5a5c29e2efd69e8390139"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "6cc32f45e8af8f1588904f3e7bc3c18d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "3d642d315d32d678c20220e7f04884d0"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "fb25f55476bc7ec7b5ea978a935e055c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "06f77339c6614cc35a5654f2f6074811"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8c2dacc77062a2ead2cf48897b8315df"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d3c17dd4a6858b8ac0b128f0a93f5942"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "9bdf3c521250ade30e5cfbb50c35bced"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c6c5037ff7bfaef38d3b9a5778f8567c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "0ab35027e6f9d2d24ce51a1343166a1f"
  },
  {
    "url": "tag/read/index.html",
    "revision": "1fa733da2624e1f974334fd66574c25b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "5c85ff6a3b2689bf871cec0d24c0348b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ac402dbbece6fd8a8f1b4a10fc86ff65"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "73b2f406cb9c7686cdfa2e225c7303b6"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "8085faa86ed6f76df98fabb163cb21ad"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "337db4908cabd99f97ead8978bff5e4d"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "4183d2bf8618c3594253621e45411b76"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "73bb21f2ef8514aa74b9c8519d39f6ef"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "5f7ca5d3f338a7bb6f2bb9815f091d37"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ed1f2dca5954fb2b838aa889b2cdaa89"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f911fe4cd7cbd396e2646aed25eb56c4"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3406b731bcac72df61d5e5109683f874"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "f3d29391343dc2096301104db05444da"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "4a7e26050053d8d3cbe912a8d66bb020"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "a27ec43bea06daefbc04bc818e5a1bcb"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "e69bbff49b0c5e865c8cbebb505f5ba0"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "382b38f7bdfe749c0672d81254d6d4f0"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "de080d2eb56b54bf55d51eefcdfea4d4"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0965ab1f79018f99bece6b88fda823d2"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a45e00e2541f8178ce76ba822a2440f2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e365170421c2153d9fb42a0ed2f1483c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "44f7bb92f6e3f2f359613b6ad13812a2"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "7dd77dfd0c0e4984f75bf149e648bd1b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "b5c0ac4ef61e4f4979939b1ddba08786"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "6ba6795a3d62828e74dddee2dfc6babc"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "6eeaebd66f087914f5a4557e227cf2c7"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e6026bc4b45dec1e2b0df95b770b8aa9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "066f661310ef01a7c5e2f6e29a655a7d"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "ab8d202b15600808e230a58ceecd792e"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "9677228d9e3e528038d80e926e8e1b50"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "efca7f22b5f3ef882958e13d3aa22132"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "80c1db5988f14526363448059b40265f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "8e88fd5de41794eab282fb01abb9d48a"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "db7df214b4eb32550fc1d76637ee1250"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6de5e19016dbe0e1214ff16eaf26e16a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "299ac4e4805eabcdc03f71ddae9c354b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c582207ff5803e0bffeafb5aebb85471"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "14b86b13c91d8dbc767e364980c829cf"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f505edc2c1b6e04cf54b0616705ae327"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ef315e546bd19f86a6cf3d23f93ffaab"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "47da1a3e601f20bd21be411a502933e7"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "98682375833de657f01e320f6d16e95a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "08f980e7dd77e26466944bf685425885"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1f3101fd0132639e8e1ecb9919db4b27"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "72c51ba4936e3bf8b087773b9ab21c16"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "db657076474987cf210539c82f7a2c4a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "78c8b3207fc4135f58bafb0bb23fea59"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "bd695ebe2a5c4c863615d9052601a42a"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "644129b1cba7e396924fd5224820a40e"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "64df56ea06ce3639cb6c10aca1610e4a"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "58e33361305842aeca8f1881825aa6d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c317d28e62ddebb6d14e9ce65171ad2"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "e35b577a9afe5d116c7045826d30438f"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f5e8ede779980e7507022b68d96ededc"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "853a9e6ba86c53f5a5259e427d80cc14"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ee7d77195724b02bd2dde36053e89046"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fd1273563d5f0c1e068fdb2ee1af9412"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "7afdbaa42c0d20eb51c22ee7fd6f746d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ca7385e3b7245139b6b6b8e185c19b88"
  },
  {
    "url": "tools/note/index.html",
    "revision": "6e84c1ec984b8867adda2f2ece869f62"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "e176e2aa0af806cd48a153a41bb75cf9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "2ae7583e4f0f2f0a6deecb7fb72ecd20"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "120317bafef2ab52dd2a39d558de8431"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ac363adcd2f333f62a7c566102dac7ad"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "f34318460468a198accfd750e18d7a78"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1af0a2b0273d483f0ab59fec775477a3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4b1ac368a284ebaa510537258e574119"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "60495d1802c2b4e86952b50a9a61982f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f7b93d3fbffacbb012f5ae10ae536c71"
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
