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
    "revision": "560189fe3fe35070d0d548f6c1c09e0a"
  },
  {
    "url": "about/app/index.html",
    "revision": "92af21d4ce0d96ccd463061b804d9b8d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3a2af80b86d56e571a5dc986ce0bde7d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "fa6df137a203402fa850d91788b35c66"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f2c9165d478c47dc4ed1622ccf924fe4"
  },
  {
    "url": "about/index/index.html",
    "revision": "8115358b08dc705e2db2a7043756afb0"
  },
  {
    "url": "ai/index.html",
    "revision": "f99d38d728d7ddf3892f21dcf7c25410"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "ed8d4712ff40629e858bb4abba686417"
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
    "url": "assets/js/10.0082ff9f.js",
    "revision": "d7924e5ff33553d5bce3e50fa4438730"
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
    "url": "assets/js/120.ab49462e.js",
    "revision": "22f1570657d62c11b8b2bb4e51004363"
  },
  {
    "url": "assets/js/121.fc6f67bb.js",
    "revision": "84c75d4bbba1d37228d06578919c4264"
  },
  {
    "url": "assets/js/122.793aa32e.js",
    "revision": "407ce011331407b5d82dd7bb895cd8a0"
  },
  {
    "url": "assets/js/123.94bbfa30.js",
    "revision": "b6c9ea9ce6c7acc6968c680534717c00"
  },
  {
    "url": "assets/js/124.1a41a40f.js",
    "revision": "0a5358edcbf956848e290f27e8b70961"
  },
  {
    "url": "assets/js/125.057f81e2.js",
    "revision": "a4d338fb012ef26855e7d138e27aefff"
  },
  {
    "url": "assets/js/126.3f99afa3.js",
    "revision": "d00858b2e69a90e5d10e5e0575b81621"
  },
  {
    "url": "assets/js/127.ef7180fe.js",
    "revision": "7b5b45886497910c07e3d11adc17b53e"
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
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.7c5f3302.js",
    "revision": "5e85e9369f14d8522fae1093d6e0452c"
  },
  {
    "url": "assets/js/131.0418769a.js",
    "revision": "2f0cb38b3650d78679d90b2fb148939f"
  },
  {
    "url": "assets/js/132.04f9d07e.js",
    "revision": "ea367e2e8dd763aa8d383379a27a1191"
  },
  {
    "url": "assets/js/133.7c5eff4b.js",
    "revision": "397d2a281555ec3b1e0304db31ad339f"
  },
  {
    "url": "assets/js/134.79be8712.js",
    "revision": "1a064dc931cb41ced894fda0da5b902e"
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
    "url": "assets/js/137.e61dcb74.js",
    "revision": "3a45f15ab87536d74a71fbad028f45a7"
  },
  {
    "url": "assets/js/138.a2fd2dfa.js",
    "revision": "f38b990bd896dac921f9693cff3d9d45"
  },
  {
    "url": "assets/js/139.e71790a5.js",
    "revision": "5b962e56603a20544b481f97655af1dd"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
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
    "url": "assets/js/154.1b23f6b2.js",
    "revision": "02debfd5d2ca1aedcf2280cf203cd5ee"
  },
  {
    "url": "assets/js/155.bcb62b15.js",
    "revision": "5ff36c4a4671ada8bbe8d3ef7a8753d2"
  },
  {
    "url": "assets/js/156.5e47651b.js",
    "revision": "b8d4415059518600b4fc3ace75762c02"
  },
  {
    "url": "assets/js/157.99037cd2.js",
    "revision": "4d6c4ecc01c367ef0e46b6681859c095"
  },
  {
    "url": "assets/js/158.df4368ea.js",
    "revision": "adab4c61a307c215344fe71d01f98e03"
  },
  {
    "url": "assets/js/159.9b87b6a5.js",
    "revision": "065d4d3aa1180e53811f4294db07b1a7"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.4e148c6d.js",
    "revision": "984a84da6244bf1b3d8337e8d6f85058"
  },
  {
    "url": "assets/js/161.395b8ef9.js",
    "revision": "0b78575ac7ace7ec44f3ac335cc88d53"
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
    "url": "assets/js/201.22cd9ab1.js",
    "revision": "f72013925e640517e9bdb610f11879ba"
  },
  {
    "url": "assets/js/202.c0005cf1.js",
    "revision": "8ebb0339d2a487abbfc8e0a1c9c14fd3"
  },
  {
    "url": "assets/js/203.9b3171db.js",
    "revision": "cac01b326000c469e8e5b34b848d6c1d"
  },
  {
    "url": "assets/js/204.cd8e0d70.js",
    "revision": "88ea90824aa159380ca1b2c21f02b53f"
  },
  {
    "url": "assets/js/205.68feea3e.js",
    "revision": "5dd8c710a602be1af3f2e89dfefb065a"
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
    "url": "assets/js/225.5d9d4934.js",
    "revision": "d3c538d7e5124bd4b53ce7a7a8d5bba8"
  },
  {
    "url": "assets/js/226.c8473d74.js",
    "revision": "4f10395c2d08bc249de42a99250ef4ca"
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
    "url": "assets/js/237.e9f7a530.js",
    "revision": "fdcb91cbec2441d98ef699f5b2bb702b"
  },
  {
    "url": "assets/js/238.0a37ba65.js",
    "revision": "2e9b9a4e0ec49116e90ca99f2017abd8"
  },
  {
    "url": "assets/js/239.33772ebc.js",
    "revision": "79480d7603001229c8da4e4e615b0700"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.c87343e8.js",
    "revision": "fd19fb449f8517036cf121e90c64bc9f"
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
    "url": "assets/js/250.54a1a881.js",
    "revision": "b31c9fa5c0102e25decae324878d2acd"
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
    "url": "assets/js/253.3814d673.js",
    "revision": "f9dc8bc8a4936b7acef100ce2669d7bb"
  },
  {
    "url": "assets/js/254.d0920cf5.js",
    "revision": "75790327363992b201065d77f4617db5"
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
    "url": "assets/js/258.725f3b91.js",
    "revision": "5e188b4cc060d5a9962da81e99b917b6"
  },
  {
    "url": "assets/js/259.b4028084.js",
    "revision": "4c8e341e3f60d08f86ede232892b7f5a"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.e5fd2392.js",
    "revision": "1f36b2d543bd663c2ba4bfe70c04fefa"
  },
  {
    "url": "assets/js/261.7f8274bf.js",
    "revision": "a6eb21fba7734bad732f2dc7754689c7"
  },
  {
    "url": "assets/js/262.0ea77ace.js",
    "revision": "9329aa54c511fc354dd5cfff40727106"
  },
  {
    "url": "assets/js/263.db9b6669.js",
    "revision": "53494659126b825fdcb65ed2560c795b"
  },
  {
    "url": "assets/js/264.5df60219.js",
    "revision": "75b34cfbd223ca77d863642720f391e0"
  },
  {
    "url": "assets/js/265.a0a32bad.js",
    "revision": "a71c0aefd905f5c043eeffe77b4a1b45"
  },
  {
    "url": "assets/js/266.78c27f66.js",
    "revision": "f1b0f044407de23b1c84b203fc9afaf7"
  },
  {
    "url": "assets/js/267.62ff8fa7.js",
    "revision": "dd11a8470ae8b1c1cb38a57d375740b3"
  },
  {
    "url": "assets/js/268.cb107781.js",
    "revision": "bb6b068ef878d9bf4d2dc10cabea47fd"
  },
  {
    "url": "assets/js/269.cbd988cb.js",
    "revision": "c7e163c5f5e23ac5f70685d9b0edc621"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.31e7c84c.js",
    "revision": "ac5e96f1e75589c0d28a796eb6ca2f8e"
  },
  {
    "url": "assets/js/271.c0927ca9.js",
    "revision": "dae5dce3da400d193eea9824745e05d9"
  },
  {
    "url": "assets/js/272.54fc3f19.js",
    "revision": "ff743ec032a01757de1bc4656c8b91f5"
  },
  {
    "url": "assets/js/273.648101eb.js",
    "revision": "cfbf4c7fe3563d5c64b82e8e5a18b658"
  },
  {
    "url": "assets/js/274.f0486403.js",
    "revision": "56956a187f0c4f7389090fdc55076163"
  },
  {
    "url": "assets/js/275.5ea87b62.js",
    "revision": "61e725be3fb136cffc9b94775b7eabb3"
  },
  {
    "url": "assets/js/276.28503327.js",
    "revision": "deae9bd5f6c4d64eb04baa69b2b8c8a5"
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
    "url": "assets/js/35.b91dd8c8.js",
    "revision": "b8831193d7f4e92e53335fcf7eb7df8e"
  },
  {
    "url": "assets/js/36.76a12120.js",
    "revision": "c01ab3a7bc7c7cf0e19d0700eee043d8"
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
    "url": "assets/js/63.c90f826c.js",
    "revision": "1c365344fd3494c2e9181ed11441f860"
  },
  {
    "url": "assets/js/64.d5edd80f.js",
    "revision": "d34896c786756e1ee2178a4122b55652"
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
    "url": "assets/js/app.0f185f66.js",
    "revision": "6336f363b5147216c06088e0d65b36bc"
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
    "revision": "05e74187292daeed6ccee842e3826cd5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c2261a17be59be982183dfd8e95c2280"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "46dfe0a9bc7c57008522271ff6fbfd4d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "9447a84ccd9f0dafc5a9801771bb176b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "255aeb1f9458d07746543f9c6fb8776e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "39d3712fe626ae42308b6e2056968942"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f0da6fc7d7e5a7264d4e2557265dc9ab"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d4dce6a66098ecf91883d6b192965c40"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "bddccb417285b559c41fd3fcdf5cc203"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "5f4f05f3014cd7400b7d9a34e6e1ecaf"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "216e2e3b7e4a3b49575c8e1e9badd081"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "5328bdb30854104993e660600aecc690"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "73bf4bc212ca7c32cd8839e1495324fd"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "eb4957bc3aeda0cfd65c2d80b644a5f4"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0da60e82d430c6c9941c710d2b92ae3f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "6ad3470f1d73d552d2e99ab0c9327621"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "9bd9fc1f560b02df03e348368b36e8dc"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "3bd30e228ad501c050e0072c71be4753"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "be7c359a1961f37d790e9232098c0763"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "500a4818af7dc677e5d1d507a6975576"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "9ce744d4d19f65d653dd5fd2c53fa611"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "37f010d6bfe0ae1e7522536ff99cc99a"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "034a5f37c8f43e39e37ed4a78924e82a"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "a4b4359d34bc1dac4585572a6bac895d"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e99d9f1dc7a54beb7cc71fa7c7fba777"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "44901a090d267d82bd68415e5d8df311"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "141b109bd975635974d7d55a8f54e96e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "aa6730217c32b345cd95e06dc4d17107"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "05274fe5add7166f5dc7894d37112077"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "f1579c61facd583f2be999c6e9ca9ae9"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "5e92d83c52936c392528405317561fe5"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "94d292cd62a2d1715c139a0ffe592fea"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "1947e252d2c143abeb0928db243d1ad3"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "d9f5157bcd42007f5fb9d6b1d48e449e"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "5792401a2cf6b53c41d390110977d49f"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "beb10feef1b87073180f496c35bdf64d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f4c68642c97e125feb3853b2fa83fea0"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "0df90a5c2c2d72b82e53bc46922413ba"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8bd0f3ba1a3f6f8cac79f13c5556c5f2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1d0dc473b492c36ea02419d6a3e5e42d"
  },
  {
    "url": "book/index.html",
    "revision": "6afd68990beedd0728a789430aad5914"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e272ec2018f8c73c479e70e4ce29507e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "afc6cb3b51384889a20872aae460cafc"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "79154692fbc3d8ee0be2e729fff5a9a4"
  },
  {
    "url": "c/audio/index.html",
    "revision": "c1d0a6922d98f027a1df04e0ffd8a139"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "b2c76a8e30d59c6ffe406d0a3d2b0f96"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "df321d2f682e933355d91c1ac3cfc46f"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "dd13d8c61e8ac3e27e477d83d1972078"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "562ef4ea918793162cdf245ae1968798"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "389d9a3414ee14be5bed74af2c8dc59f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "001bf113f528acc67f13b7625f3b11f8"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "7926d7285032aa0815767d89d6eccf46"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5a6d4fae3a97f12463b78c1d7bcc5f64"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "7e4fe418a091886b5fc62cde12f6b737"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "da68a44955004b68faba76df31904a11"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "38a39e90ff1d5a066c9955a9c05be2c4"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "e0c2405d30d1d399b90185788d6ad526"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "bece50a82a72e39524a7ff6b591c33a3"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "17f85d34611d0bda353d4f1c7eadb763"
  },
  {
    "url": "c/program/index.html",
    "revision": "80344c5c26a8d103a7aded25bf8cad4d"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b4114718d84b68514525b982b1783295"
  },
  {
    "url": "categories/index.html",
    "revision": "478287eed91ffe7398af40962d180f60"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b763d8d0b1c93c8c22fa5f0ffb38688e"
  },
  {
    "url": "figma/index.html",
    "revision": "60c0cb96caa7545ced011b4a75ea65b4"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "e16f4ed70eeca07784a52bf8dd1e416d"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "dc3f1b0e196b31aa7503c40f2d111f37"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "d8f80466b52fc2fc7f86148188acf246"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "77ecb101e65b706bd2d6b43bf8c42ffc"
  },
  {
    "url": "flutter/index.html",
    "revision": "384dc355eb4c7e7e8d4595ac25918bc1"
  },
  {
    "url": "flutter/point.html",
    "revision": "0464c30412d7d6dcaf5553cdd9ac8f1b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "413b67497789332a3cf0384a0b118e31"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3cbfd1c877b90ec2e87bcaec967138db"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "11010bb8f37e99955b17273f1219e59e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "57409cbedad6bc617859fbae549d9b78"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "5d91b4cabdf4db50c01347cab10d8748"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5589e43433864b935e0248dd03ace18c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "357b8a4b97dee966470ff490121f15f8"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "66c83c862b1883b21c679ea2ac6df8aa"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "fcb2dd9d85d3a830457b28809da023d2"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "88c25b132b247edd1a00ef537740fbbd"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a23e72a23dbe58350e09d5e8d9bf42b2"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "743d995fd346f6089cd45ed8d251f2e7"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7f627ce806d8f155211718b21b2bd4cb"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "dc2cde5f5a67441626bb53e34ecb10c3"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "70ff166272fe0ec2cdbd8f6d62570908"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "74fbd981171eae798879ec8c6d9554a7"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "523e4a288ac3dace0286d0843da83b4e"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "977d2d2fe94903b909312e622442fdac"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "be692ec467fc2d637a8c9f8aa006cda6"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "065c9e1ac3bfe8ebff57d9c38393faf1"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "44bf667d6d9e920f4db6b432008ffc19"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "622950d2e9c432e6aae895f262fd7528"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "8165777dd87b7290e1a99d9c0a332b1b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3608019f8e1edde117c91be4c4e57e1a"
  },
  {
    "url": "haskell/index.html",
    "revision": "7643fe2da41effb5c7fe55517d54339a"
  },
  {
    "url": "index.html",
    "revision": "f2836c8cc2c3f6e91553baf4c8810cb9"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4f75f7527799a75950325476eb0e9a5a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "44bc2afcf0a80e0012e1fe2d88dce502"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "a148438aac6efae327c830f7ded2ea37"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5299eaea0ec837dea6b9444b013386d8"
  },
  {
    "url": "python/index.html",
    "revision": "2580b7115846006c4ad123cb939235ba"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "a38cfb51b43dca22928b6beddb62a397"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "35de3b7db03478fe6500bdf4d3b45c13"
  },
  {
    "url": "python/python-file.html",
    "revision": "089df7b5145d46c444dc56a2be32e64e"
  },
  {
    "url": "python/python-function.html",
    "revision": "a2e4c4a66c33690a045bdd4538eadafb"
  },
  {
    "url": "python/python-generator.html",
    "revision": "4cdf52bd4c9247436ad05e90ee1334eb"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "98b4cb76da379fa3f59bec4422f16379"
  },
  {
    "url": "python/python-module.html",
    "revision": "02a0e9e6facfe3cb171b29dd365b8b46"
  },
  {
    "url": "python/python-string.html",
    "revision": "39525abcd8cdcd77f0f1e7b671a36cbe"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "1baeea76c34884b3c401f70383bd4101"
  },
  {
    "url": "read/index.html",
    "revision": "29e300b0f5e83a880e5d87f992654961"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "fa4d29682c7ab33e76babc64d15e2e9c"
  },
  {
    "url": "swift/better/available.html",
    "revision": "50a93a4dfaeb814606464e29349aa7a5"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "3247fd0e1499291892c156eb159bfd5b"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b57c2aaa1d77b1dab057a2749dbdf4eb"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "522749f7037dc2c6ef53189769b1f8fb"
  },
  {
    "url": "swift/better/di.html",
    "revision": "09b8a6464c430c3e1be124bb9060c536"
  },
  {
    "url": "swift/better/index.html",
    "revision": "406eeee404ed4a776ffe18e24bb14d07"
  },
  {
    "url": "swift/better/last.html",
    "revision": "89c0a6694ee9b38db7b51fe94a1a3503"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "b2bd7f20d1c23314913d12d963a90335"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "3cbda28d780a1c80b04aa76f4fc27fd5"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "5270f9e8f5a1196e8940fff910838771"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "9d4191286f0bd68d10e806daf8c514d8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "10bc522437610fce8333e8cf10130c1d"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "8d86d8bd0be9f79bae2d079ed87b395a"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "8c5338bb6b5417dee4299052872b0691"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "b486415aead811d76d591f7c4b2a1ef1"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "fde445e2ebda42e8d2a164630d9c0f78"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "7a0d500fadbd2130f6de7a99bc45814f"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9b935ae39145af83f4f4982beef8d839"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "18e4da58cb46d891a1af42d1dedc8616"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "207e1d6c8988f6deb22bf9cfec7e5c1b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "aeb40b3272ef94a93aeef723fe00a558"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "57996132ae5fc4ef5dc95ee0e7a7b929"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "3e16f107e52ff34c4ba3caa431716a7c"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "e8762e19c4b1f956a90f7b8c16c61b7e"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "d3da81a1194ab33b9eb37b24eeceaa2b"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "e6bed3b512e2ca3c1875e047aede9045"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "8acfdc4c1739adcf259ceb757463af95"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "9713c54123ed4c89ecefe81b437f0d5d"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "4dc5c9c3bb889f2bf900912df90f61d5"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "a410f4225403823c1de89630acabba8e"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "3821dd671f282a82d53bb221bb77449c"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "32e4a4d01ea76e148faf583379f438f4"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "ff02040d4d33763d72776f8336d56588"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "cacf73c8d8e882906dacb44af6f7e7e7"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "b0290b3337a52f90993145b63fad81b6"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "2592378642c62bbbe4ba92a0f60355f6"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "5dbc0c4da633a6ef4db166acd9ae9ed2"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "18459a4ee67d92478949ff498eb4426c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "29932a986fb6f06cacc6f601121f93db"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "be0746e320071e8352488d38a06f1973"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f98d614bf0d80612cb3ff088d8146d93"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "491cdb833d204f13b63ea7e5cce67666"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "8c00582c63621e75ca61162aefd465bb"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "9d93fdb9f0bb2fed11af152cc4d8cd91"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "102de618355594867fe06e6121f49539"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "12b9ded22d7eed15cff87e3fc092559c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "bff1e503405ec72a9d7c59bdf82f092d"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4bcfad3b575077a0d005b3d4f47e45f1"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "7c01fd92b35f6304978a1622ea6c2945"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "a5e6db78c36610c60f9e8b9c988a4f31"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9f62b24ff11ba9158e8f97d84b5b6c46"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "3004923d0e4a2412d00e1586846c1d63"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "5eab5484b60b01a60ae888bfbc435ab5"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "7cc5ea329a60200260f4dbf9ba34d8f9"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "f149067090d74f96f10a895c8f10a822"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "42908c1111e205e7f085a0df6de07255"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ce86d6ab1e145dd9ad394668cde42225"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "39909a52644cd6808563a5ec0e64b3a0"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "995a90ecd46e23fcced9de9ff698c93e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "27f8d357e532f793d52c3ee2857e36d9"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "9cfe60f66349e4be498019c22c53bfca"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "bfca1da98a641c9b703e196aa90ebd6c"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "c1117ef6970bb7d5a8c386b76d3cd825"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e3fcd730e8c41bb48944ec12ed5cc429"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ece6f6d7b40bc497b6d3393b26fc384e"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c5042973a10bd01406e2ffd06e3e1463"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a568a1c54e12d1ca74780a9a25ec347b"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "a65fe933ce0207213c853ef9244237d3"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "b70382c1aba4def1f101ff80b237acb8"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "21657ca395e56687cc05135046794411"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "6efb30bb33584d20df35a719de8c71fb"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "dff6c821c97336e7d47d273a9194c5a6"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "ef96124c2b9370e43924853201a2b602"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7db99fdd3f7cc94d291cc4b908200c83"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "f0801080482b666cf1cc59964f359182"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "d729ff960821a87c325f6f02c634fe28"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b9911c70acfade53c3e2f50521aa56df"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "0446c35b969007880d76330ccd2d4821"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "c266ae53144dda1682fbcb0e93613b66"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3d822a0a3b499a5c2017409e9257f347"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "ab82449e8ed0fee325c37add4a3028df"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "f247a0204525033f7be392f723a83791"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "27d53deaeaca8dc9431b140c3d5f3a1f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "2cc68955b48403222287e4a3b8bc9f4d"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0d0cb086f98e0c2ab6ddc0f3ba1f5a5b"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b53f9086f66829e608b8ad8b5d8fabe9"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0927cbef255ac016ffb824283f2848de"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "d4a553cc2bdaa86cb1c210b2f2628bcd"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d04f57e03bf5eb8d57a07678ddf96c63"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a338bb6850dd6f7713ba0bf90790d6e0"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "08769139ed95b359adec8b2797347316"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "3de6a3c7c28511419ca75fd040e75a7a"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "1ad99bbdd377f931c63332ff7d1f543a"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "fb429cc3be1201ebc6264d7ad7dd1340"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "edb89cbd6d6115f1b42a10851283e5d6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b7bdd614df485bcc256248eb50ed2e11"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "524a6a497c2b26398048fc9d2c6ffe0d"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "d0f130c7d5ff32760b1743e7da78a954"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6d448a871ff7ed97d08d4746aafaf154"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7aa584d95f7f80c6ee5c105fd6408018"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f5713294e76ca3de78881bd6d52a9e65"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "e44886674cadd5fe6535362b7eae2df9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "06a5123a88030dfa52fb5a07475b30ef"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2e0e72a1224727fd476908174fa440b9"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "02fb057c365624de4f7e9958fc02574d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "05b9429a8a117bf489baad01c0ef2183"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "45c5e44293311802e2da540d99bfc3a7"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "a9afa476885580ff8d062df6ed2f85f6"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "bfabab0b16a88881beb82d5a27055c26"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "800459b52d0db7cfe305ec5710b7abe3"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "da2851a280babc6232d235392c82bac2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3bf841a29fe57093192b6b20ebeda9c9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e62ff57579d9fde24390cd4a3613cb84"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c452532160dc7218675ac0f0670c1ad1"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "237f61c2b80f80793ab6901d2f54a4ed"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "245d9d5521165e7bef7ffc035c747af2"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7236f2c04f8e72db0ccf9424c4b39206"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b8de689918a962a2d85217e5af2c098c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "19c8d1a4102588bbffa945a8df306edc"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6ada251f378be97cfdf3cc2398eac8fe"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "06f177821f9ad8154217b9c5116bc3de"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6dc96a4dec555c9df978235a31896046"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "8011f6f6d127040e7fc694c737ba2dd2"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c18c179ad15f65a06ea0d456b4a87967"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1a5f77ee287f801bb4c13fb3408a66d4"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "546c201eb87e936fa32b4bdf9ae51cf7"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9d17003bbfa4f0ed1c17758cf0bb2be1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "5ee2db9d8edf811f78aac1d77cc1b302"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "296c3c41ebf31ba43589e9e86b534d82"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d82dd833d830eb46a86debf575eb3e4a"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "58586760ce7e2a41baee772370beff2e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "dbad58c84ff494940b29be6d124ce909"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e5c5ee25a29a2a6f319a4112bbbf52e8"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "fce46a878f7439371097c33bd903a3c3"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "727b5b1270df9022cd95f0a0c0a5b008"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "85df9cb6c59c70b668f7dada4726ba26"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ef9675f8ef5e455c336964bb3360571d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "19c6ef9051938e4f6de1d71b7764462f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e2a0b4dae275e03acf86648fcee34030"
  },
  {
    "url": "tag/html/index.html",
    "revision": "00ac0e9483ff0083f08c3b4188fdee12"
  },
  {
    "url": "tag/index.html",
    "revision": "53e06b5100294a510eb04c975c50b779"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e81024770a33731db9f4d2791bae14a6"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "96f84d7c6a07ec6ad41767d9512bdd8d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "6dc56d1d914e286914bd6b9f9d535e52"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4a66b13a77e2241970966894cbe0e7d3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "7b9bc8347c0b52effd745485eacbb991"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "b9cd16f58dc2975cf24f37aacc2da45d"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f1a79119fc7d3f5eae3efca257a9abb1"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "1ddc00765a5264502927b1259117950b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "3980a4f0e19eb7b872275f15cf535f7c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "8a789bac3dafe123570df23eb8db23ee"
  },
  {
    "url": "tag/json/index.html",
    "revision": "53be3c6f056edf584ff2c3abba19c592"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "15d7b2ed4c2775fe7f730fa76729faa9"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "c5f7e2fc7dc2fc8e690ef7e8aab22c82"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7c942a8ed824db5414ea2b6ba5483fc9"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8c24be13af70c75a4d3ca8372a077e81"
  },
  {
    "url": "tag/read/index.html",
    "revision": "6a7ff4216d8a5e7974260c2c1c567342"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "6dc5ce479543ed75382f30da8aef7933"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0acd56ca39a7e8faa81e7a28615029a0"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "a7f2afa22d5ad11d6ac9933762742510"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "804220ea8f04d4f47777857c323de64e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "03acc1f635bbb5e632dbca162cd00689"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9193573ecc146fa5b105f964c340a179"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c783bdb44edb014158c512527e652b19"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "c1daa6354265fb0f7926b425673f46a1"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c82621a51768a9e086abb441cf046a70"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "76bd328f571eb5d8e63f3156105babf0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "1a4d353a454f0fc37f53b3fbeda00889"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "84bf09c582adeadbb0b4a6c54124c168"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "685b21776abf71d2531baebbbb61581d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "deee15910f2fef4035a5bd72653fc764"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "3ab5582d1d6c22f395ec94ee2f28fa12"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "1d83ef0bf384579550e1f84538c5c380"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "dd8b4f91db2f60eb6edcbbb97bee5de8"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "82dbd73ab1d19012acc620a39429bf3e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b21fc84dc3f869aa1adcbe16439164e3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c513a4ca66555804ac1aec5a7de0f047"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b70dbd737f06aef26f0ed7afd30e5389"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3734e2425e3cf3da7677ff8c2d914f17"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "162a9174d4e2b355134852375ef2e2b6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "91d19337ff7a19eed72a29b66423f907"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1db095c1dc5438db58430c49105bc0e5"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "657e1be2937908f8d78b01ca5a2eb0bd"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "83953d56793b1374e134e56fd222dc71"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "cb8b7526cf6edf3c904097021ba2b472"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "f23017d3490ee618249652da723e9f8e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9440097e013b6eee8e11979577312acf"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "121db2260b544ca93f15fbf67ccb6f04"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "83562ac107987aff32087f62db5a78d8"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "9d40744b8f5df5250d289d81762c87fb"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "333d2e96c071457e2aabb553506def2f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "10767e266d51da298014baf4d3abfcb0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f93672af47a2ad17330ce4457b66f0b8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2280698f25816bf24908b9fcc83c4762"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "1d6a24a007f6a204d02459ca9c979138"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1473a13a7dfeaea30d2a5cf89b354039"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5c13686c1b7a81df179cc70ebb95e915"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3c62a35858cf956ab0d124d72a9fa1b0"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ba9a8ab02ec536dbb3ce832f0a9f7e33"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "7f9e580cd178aaccd3fdc02d9dc73994"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e5d67452966b3bec4a73e83335ff3298"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e5627b8eb4b137f3ab278289b08ac9f7"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a01a1deab876f40ffe7511a250d61391"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d7b45e3392a33f4254bb3937866171fd"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c6b1b7fc46c62b1817cd009a1b51a1d5"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "56e32a422b4dda4a5c3307c2739104e3"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "74b9928441699d96142c64b4f2558aa2"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6a60b66d5ab1c039956a67d971cca78"
  },
  {
    "url": "tools/docsify.html",
    "revision": "5067d09389faac527173ff8027acd3e6"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1bd52cfc96642ace6e5f6db835db98a8"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "fe056e00685ad63534519ffea5ecfe62"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "072887f7e691b6877e8c33c0f2ca81a4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2a7cd998b9d3968eb2e72cfb2dfe3c19"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "90c8f37889cc4683cc9e8351c2e255aa"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9ac0caaebc610193b26c932ea7c94113"
  },
  {
    "url": "tools/html/index.html",
    "revision": "40c86285e09c096f1505768433a51b2e"
  },
  {
    "url": "tools/note/index.html",
    "revision": "464fc4f71fa1bbdb172b3b1fb7832472"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "aa6b94146f0ac1aa6010ed7364ab8ae2"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "32eddd19644a8b0b660d481616568b86"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a360910538550573d15dcf3ed826cf75"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "cd1bf586a142007a6347c15b5fe59164"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "57d46306cb249a8bf48505dfc1716f4f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9d1c4038fad5e4e6a1f679bb5e92a1db"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b95060f7ccede0366e7a9bb997b43ff7"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "46c2d8eff6902047d27a696e6a32e9c9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "34c0eeb81b9b5c557e65baf670499de1"
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
