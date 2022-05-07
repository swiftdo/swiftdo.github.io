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
    "revision": "81b0337d11eb15b4f2f78cce5d10832e"
  },
  {
    "url": "about/app/index.html",
    "revision": "c9dd8a72422a84fef15600666dcf358c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "513216ff794dbe76420207c2142cf702"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d76626f2a35a0c1f204b04c007b5cfbb"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "3bb38dbe7856c45867aa8cf6defb3dd4"
  },
  {
    "url": "about/index/index.html",
    "revision": "8f6c931b1de03a3a3df1a00252147f42"
  },
  {
    "url": "ai/index.html",
    "revision": "5601f32263186f80e848e6f08ffd5f76"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "bc460e526ec68c9953d668d4ed9caa71"
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
    "url": "assets/js/121.4c6832ab.js",
    "revision": "7e36e27fd10fe86664e4f55434bef145"
  },
  {
    "url": "assets/js/122.f61ca852.js",
    "revision": "5e6a2045794c54aa594d19ae2cd8d279"
  },
  {
    "url": "assets/js/123.3c883af9.js",
    "revision": "bee9cb209cf76e67bc6ad1d9c7f103be"
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
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.7c5f3302.js",
    "revision": "5e85e9369f14d8522fae1093d6e0452c"
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
    "url": "assets/js/148.5a247512.js",
    "revision": "4adca5c632592d4f0934ada0e4970db5"
  },
  {
    "url": "assets/js/149.146d9ec5.js",
    "revision": "79bcbb19e957f1f15d969fbb139b60d8"
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
    "url": "assets/js/160.9bc9a684.js",
    "revision": "a640b3d4cc738c407a679fc2ee6e2208"
  },
  {
    "url": "assets/js/161.a534d905.js",
    "revision": "70d37f80964896aed1fb542c4d2b449d"
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
    "url": "assets/js/166.653f3dde.js",
    "revision": "80859bfc81d82592936b42d31d5ca46e"
  },
  {
    "url": "assets/js/167.eadb3ec6.js",
    "revision": "64676153c76193c70b68c6310304f7ea"
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
    "url": "assets/js/183.075e5bdd.js",
    "revision": "7d0caa6b4ea41f416d894b54b4fa13dc"
  },
  {
    "url": "assets/js/184.2cac26fd.js",
    "revision": "186acee21a543ba2674489b94db5dcb6"
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
    "url": "assets/js/19.feea2fe9.js",
    "revision": "6c8eb4ff5afa1102e71d69958591df27"
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
    "url": "assets/js/20.a4cf9422.js",
    "revision": "34abcb3fa966a0361c2f3611ec00dd53"
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
    "url": "assets/js/205.7280b3d3.js",
    "revision": "4d85c962fb995f12a3ad7c4d25186a15"
  },
  {
    "url": "assets/js/206.3104252a.js",
    "revision": "f08c1cdd965b3497482883bba54c6abe"
  },
  {
    "url": "assets/js/207.870b3c6b.js",
    "revision": "22b11a42364b9fdacb2faef14a552cd6"
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
    "url": "assets/js/238.a897522a.js",
    "revision": "87ea0b1a759fcd744af577e2dd2a564c"
  },
  {
    "url": "assets/js/239.8b9820ec.js",
    "revision": "6dc28956f2814083ed6bee3c8e85d989"
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
    "url": "assets/js/247.acc388af.js",
    "revision": "7b957ed5776ce3f0674749fd1d113eb4"
  },
  {
    "url": "assets/js/248.27518c39.js",
    "revision": "33160cc01c9791441e478561f4864b10"
  },
  {
    "url": "assets/js/249.9ee70c4b.js",
    "revision": "6d48b2a6b3da1d1cd9809a8d185670ea"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.a5f14103.js",
    "revision": "eab1c71a29e0d18709f733d1fa587646"
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
    "url": "assets/js/254.de4b52d8.js",
    "revision": "018358f671b9fe4c21688efaf1efefce"
  },
  {
    "url": "assets/js/255.5a1e8845.js",
    "revision": "f42445a0601cb15568d67fcca2c2268f"
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
    "url": "assets/js/258.f5f0e30b.js",
    "revision": "9c55c523b671947bbaa83ff8c219a251"
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
    "url": "assets/js/263.f6f88cbe.js",
    "revision": "ebe00e221bd1f64f62df4f04f3f11e7b"
  },
  {
    "url": "assets/js/264.95078805.js",
    "revision": "57d266efed5db70de0f4a44ca9153e85"
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
    "url": "assets/js/40.71217328.js",
    "revision": "cff9a36fdfd8ae4d9277bdff9b7ccba7"
  },
  {
    "url": "assets/js/41.352004d2.js",
    "revision": "e196d83fe923d88ba9f84675a68374dd"
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
    "url": "assets/js/91.a9d16eaa.js",
    "revision": "ded87ba3988ee16864ba9287be2e9c0e"
  },
  {
    "url": "assets/js/92.fbf3e2cb.js",
    "revision": "514a3334d7418685b049c5b88a3d6f41"
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
    "url": "assets/js/app.7363ead0.js",
    "revision": "3e4b68bcc155cf0d71519bb9d260b45f"
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
    "revision": "64142ef3f5b90e23087c33ea0cb64ba4"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b014cfcb63d44fc7fb2410ce45173691"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7bb6398d77848fd056ba23428281debd"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "51c38b081252d4b65bc7b22f94accd79"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b9614f22d5b2aff332ce23a7b2de4fcf"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "afd5ac6d705f652c19e25a3fe3849f56"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f09997b133f7c1c251f5c482dc19e93e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "46a9d331e73851a38a8bdd85b56df718"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4266106ad3e3189f573e9c927a3655c9"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "1c21675715b3e62271717dac8d53ceeb"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "46314ef660a419dfa15c567886855817"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c915d678172789a84c470fdbe2257327"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "c85afbdaff78e2de3b1f9bdd1ac6ae08"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "3e89b429372daf31b5f5afc373789828"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "c1c012d8b71100e8d48f6f307bc93420"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "5b6c2cd57c40ce32f1a08b4cf2b6b15c"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "0cfa1be704143a0b2902b6a4fb7f2d9f"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "9201c4d32426004c8f44a0e13e400f67"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "c4526f7f01add4f7dbb9c7f78f6c0083"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "35fa98dad886aa01e280cace5833dfe3"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "38c92405e46d9f63b09a730696614c3b"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "57f31e143ce1f04cb8297eacdfeba572"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ac5ad554650f3e4c882ff2faa8643532"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "19c35c59b5a879b49e0a013b09e41028"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "30ceb5090defda0ecd3eea131ee0b129"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "91bf5b949f22f735ce57859b3dd44eaa"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "3e150a1a30c52e5b8e53fd51154ccb6c"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ac6b91d2bc4dd980a8245a94ad5923bd"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b60c29eb201843ebfda72afc1ae2d1b2"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "6973ab0e7e477b855a1330f818c915b4"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "b16ebf09069358bb060132abafde33dd"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "bf6566bc9b448cc6c243425d34f8837a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "1de7131b9c41f22b2428ac2b486c6ba4"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "bf8ad437bf3b4e8bf638fe894d53470f"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "87b61b0fbf383ed8fa55ff44b03e289a"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f16eb4b3c1e3c76b7b4180f21989dbbd"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "8b2665bd0cf80c6714412fc1312c2b49"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ea80eed49bcd36bc2af852b9c6487123"
  },
  {
    "url": "basis/index/index.html",
    "revision": "7b5de32dea77930c40c4b220278eb566"
  },
  {
    "url": "basis/os/index.html",
    "revision": "99da853a2bde0b609e19d8b024ba5fe3"
  },
  {
    "url": "book/index.html",
    "revision": "cb3c57fa8631e61c0a0f5543e6eef322"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d5d2462f0f4012481e6137e506a5d276"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "fa8177192c73a3f6e1e4195ea63cdb91"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "f2549a6eeb84c2780c53a82b0d3f2ca4"
  },
  {
    "url": "c/audio/index.html",
    "revision": "fa0282d65d3275a4cc432b4cd5f738e0"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ea4beee0283c0d9729245bfd1b0ab645"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "43f10852b1e7cca7e28f3b6d27319949"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "b68a878cb4a5dd4a3a2559085c56df7d"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "346cbf48f97cd7b46564992d2132fc10"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "732037ade57a56bcb95a77afa5141c11"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "5bcfd906b26b92d7fde41a4f3d7fe51d"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "87760a694a99222644ecf8e7fa184308"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "85bddbb2a7a2a3612d3dfa9f4c54780f"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "407e4a3f2b5a8d5c0566f515694ff575"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "122d3ec860232ffd3328e15e9f3a1137"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "06a407853c4aeacd98da242658c4c3f5"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "3c634c798ac5fcd0470504dcb584cebe"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "492516f0558563f05b0a364d94ead87e"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "2f9b13d3f8d0a45730d5e882a1da6783"
  },
  {
    "url": "c/program/index.html",
    "revision": "353cae91556ca9987c0b50f0f2316467"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f3951fe901009d74ab20deecfec9bbc3"
  },
  {
    "url": "categories/index.html",
    "revision": "518dc3ff83f35c9b6ba9ec043c9b90de"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "2a2d7f387aa37349b89cd06915566a55"
  },
  {
    "url": "figma/index.html",
    "revision": "162b3f11b4b3c72e07e04c636767bc26"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "ed5559a61a187b4a38f9392748fcaaa2"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "b34e4a04bbc27ba52a7c6fe4d0e3b605"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "0ae04135b3b24375c09be9d124e9bab4"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "120434d73733bbf0042bf3d2af711330"
  },
  {
    "url": "flutter/index.html",
    "revision": "0dbe062b4714ce50714de433b2356e23"
  },
  {
    "url": "flutter/point.html",
    "revision": "ed62ae60be621f154567d325f97b36de"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "31e3a6f73a61a91cd535bff615d820a0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1c1f579a1f55ba79b93357524104d399"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "bf727bab286b4552947f6ec746d82e8b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d7ab20b477e4fb6e7a0005d2ff53d76b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "28a557494b1054a67d99223c53f2f6a1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ee95889533e091e64d0da3c471612780"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ee00d4148e81430b5f98c1c5f947f638"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "dba139d42b219989c7a6fb1553cd4114"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "b1505d7bc032f86eca3582e82d27b48a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "42bddfb1531da3c06b5e9bc16dbddc57"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d69793a8bb62794938aeffe7c147dad7"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "404bfe8ddbb126912c39904b56c53fe2"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "86d769771aa174eb18495f42d80151b1"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3661bd582ada1fcce5ebb4cd82ef746f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "2b39888e66c3ce8fd96b41b91cf6b586"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7bd75b6bbe21cda1f67ca6251eb792fb"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f6f658b24fc3450bc7f5ba86fc30ee2d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "44a16e7b2cae1aa8da8cc9ec6f8fb2bd"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d6695680b6e51b96fcccfd60a4179086"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "9bc43e52f1487293d85d2369819fcddd"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "8669e92767edff794524f2ab93f4bbfb"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "0ba671b69c2f2e181ef72350999eb115"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "19e073c61d84c1740a393e21e83e45bb"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e5d9be2f3a5fc92ec7a069432e85de78"
  },
  {
    "url": "haskell/index.html",
    "revision": "e50ed60fcf36e80779dc79b0afef3afb"
  },
  {
    "url": "index.html",
    "revision": "3b1c266f1498f529b245b843e0eca2dc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "7665293c0919aa243e2e0ce39b4e0f28"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "0e6a3e7e938263ea846d013e2b3a2dc7"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "1ecac0f37fa329f205dc117f48d3e277"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "a2be90e108e58db34c10d73ed4d1ae5d"
  },
  {
    "url": "python/index.html",
    "revision": "7b069f9ede48d52a941820103413cfee"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "dd49a34899156f8c673f6b341edfdc26"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2c5fbf39a5bbe4031bb21089ffb19f31"
  },
  {
    "url": "python/python-file.html",
    "revision": "8b36493ab3b34a1d83cfb5ca8298dadf"
  },
  {
    "url": "python/python-function.html",
    "revision": "73bab8b85b0ed1c580cbbcf4cde356b5"
  },
  {
    "url": "python/python-generator.html",
    "revision": "230284f1cb4a8a5f51d86574a370f977"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "14d5434efce624f1c65cdefd2aecca56"
  },
  {
    "url": "python/python-module.html",
    "revision": "79f1ca1d1f5cfd02c99aed3a629f1a7c"
  },
  {
    "url": "python/python-string.html",
    "revision": "398c2dafc24171fa544fd997453d1246"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "863a608814c92fb7c8314987c3110203"
  },
  {
    "url": "read/index.html",
    "revision": "01a558b899e95924b30a71061ec53201"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "aa6e67a41a7fc890efbe1fc81ae28626"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2fa80a275c2154f19fd14d26b0aea044"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e1f6c57472eb24b82caa03d05825c031"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "d1b94e1f13ce0abe88dd3cd7f1180258"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "9cc4b58ac1712ff4907b2624d5027118"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b18d27449a5eb89a16aa5ce61eaabb71"
  },
  {
    "url": "swift/better/index.html",
    "revision": "f0a9e922e69b790017892b1edf69bbe9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "34f835688bb2cbe9b1d8724a8ac5898d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f2a4d5c8a7697f75b388f6586c5acfff"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "2cf7533dd8a043ab53e29b937ed1ed8f"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "dd77f0f42625cd37d839949f5eff1a8f"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "569e7439482eda93fc3e08a556713678"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "0ebad55a3cea7157f0f6803335d5e8b8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "6a0040a62000b2f3350c7ec6a5c9c030"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b1cdb4cadbaf13b37131ef3df6615c88"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "3fc2d8eaf7a5246567f53475efdce270"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a9d057b0154860724390d958cb44bbff"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "f56def8c0e2cfd870ab117fbd501e277"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3a9136c400cfb12db4b5e1833af43ff4"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "944df29318fca4415e39e76e543bc3b7"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "48f8a4ec4134cc11ec9c1dfdcf69cf2e"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "49fefb77d53644fdb92ce7b61c7847b5"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "321e710abfc9e946fc366df5890a6283"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "f697a3d4659f9e89893d688b4eac189e"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "d9a5c3c82c7f1e36c5bd403501009ce4"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "3632ff7ca1b9e67f745eb51cdad89a83"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "2f4004ddbcdb7e1700656404915238fb"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "d1fce6d4406a233d3b0a00ace9c4fd5e"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "52780d9373640badfa8aed56c74f7c00"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "c52eb4a3a1d3568638e3bfe446b2cae6"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "dfad7df36e40d302f297a7b4ca7682e7"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a72e544ee530323d4b551f6da8a89732"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "514ad5b6498e647f8f56d93116d995bb"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "38dd39d05a26baf468025eba9f25af3a"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "0aac9fcf1906692581b6e733d88c146e"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "5055e7039e653531f9df6ca940ffedee"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "b6b2e2e367770193173c33cd961a439c"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a4b09154ef59b554127e910c5f9ad044"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "eab2134b03f30fe9fbe701f1b2235c1b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "5726a8b75988725fde1e3a4d0e33f432"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "72f049d80697d1ba84934d8d0138196c"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "05ceafa32fdf54afd6e60e693ab6551a"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "902ecf6f598a75eb9030e0d518abf530"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "3fced9e5cd16fbf76d3751aac471658a"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e76b03ed30510ca6aa1961af37b0efb0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d16851ea3b3e81ea9a47fe79591e891b"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c5b79b35941ed47497f2b1bfbad9b932"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "3f3bdb1b99d6e054ab45ab6a4d69d96f"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "c0532348e9f84c6b237e77805662d29d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "9795616d1ce094dac4f6a29beb506297"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "d4895a72dd61ba2c85fb4a1827b5a9cb"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "e6161958511e9c390ce57bbba4976f83"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "010ee182611c0fcaa5f8a02cb0212dba"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "16692838c0eea7654050f0604d413f09"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "94e916bef7591e1051a220d0a4b6fe82"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "90478d2a67b55544a3157ab73c33f305"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "0ec1106af8ff687278d9bcd907e232c9"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "4cac773e16e633f9f13febaf00ccc1c3"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "23d794a6575e4213a7bc088246ba7638"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5433b0e52af563915cef1eeba1e59a00"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "88f2cf71a254f62bab38e87e96a14f65"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4e933cfbb06f40a045d2af9b2fa8ec9a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "27df2f9ca84bbc2655f10a5531f25a9e"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6b04b2a6d0bfffa30123fdbfab4ba1a2"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "50b6bfa9b2d9b7f444453980029899df"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "80d41e08e4e632b188965569c2c95905"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "00505f3499192c341e293ca293fd1200"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "e92821526e2409c851bd62b64d8a458b"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "96378387ae064dc242947129fdd08a94"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "404ceafb29c6bc765c96acd846bbbf27"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "4348794006e1edc7424139301707a601"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "de5f119559464a850512d4869f3b8821"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b19adce71227dc83e7d6e8ceba07a212"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "e63b141268151fd775f20cbcb0046d41"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f423220491c460863d3fa7fc6662cde6"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "92b108ab87e5ac91e024064f31dae8a5"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "a84445b725042c807cf096ba509bc8ee"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "41be160be94b15b526be12fd6b777a4f"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f175cf01581ef973d1a520e9d1efdc5b"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "8ca14042d9fd03c2af2c16e600ad6aa9"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "4baa1bfe96eaa7975050725414cd92ad"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "c434e7508bfb0fc5e1348a15aa5b0ad9"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "0d70e20d31b48f2c152c1bd5515a83a3"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "63f2a3e617f356c44e2de78e9719327f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "5c0662bbe6f3c07206b468a27eb4f493"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "b6570e094391d9ec4f6589d2f23e4a38"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6083380184843706802cb57d52ba7cc0"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "bcdb1b41f036d5edf8a6e388bd6c7b3b"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "3ce8f1cff50409d1b809705a8a7e562a"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ba0e48cbaa8b974688629244353c8225"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f70a9f830d6d77b0bf2f1400ad6b8fe5"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "b9ce7571222add4d461c9bd5cdae7a9f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "412243619729f2f438a66f741be9ced2"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "6256b4cd935977ad166a8e1f21dbda98"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a6b9d72519faa9601accee655174ba3e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "6a07d845e4094e0898654618af2aa1c9"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "301c5667341e904924db31fcd5caf27c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "7bf509bf40a63a5c0ff4cdae0cb5a75d"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "3b156f17dd9f48ab6717f37016134a96"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c10fc7f765e5616b34f82860bb13de33"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "c6f7c22f34ad9f4eb1d4d5214c730e6f"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "686c72a7be24276b56a653d9e6cc1d2e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "567252a53e40feb1568f6b389cacf12e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "945cfe1e09bfddae9a24fe4fefde4634"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "4d472849dd2256b91140d7cae7542fcd"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4685fe1e23c19b9bc7228ecdfbee07c5"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1b469a59ac93ff56f48371613e441013"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "43ed32ffed90021a06badba387e26a46"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "930f657e71eebe66940624cd7f052ca9"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "a5ae11af5afb2dca5e891fd2504d8184"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "6ab7a5fe37d5f0738080e33df40b58c3"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "daf13803a6e9d6b7fcf67ff9c2f9ddc0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7818e562b2d0199df5036e29e7a90ed8"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6ddf812eb4efda91e0d0b9de5f04ab09"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8d83d60bc1e40e9ffcb63dcb68b68284"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d8eec1728dacd4fb1d130324fa09229b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a57675a1bdcc9972561e76d2d21452b2"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "744fb7b904b37d6d17b52589af7d1f0a"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a5f2978edf94c3c8b4f750496556ad2e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "af1ca1affa2e5c85220d364e224f34b2"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "96d8b00b663eb3ba733af7566af5b143"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "66b305f223f31f002aee214caa209dbd"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ff2c2ce9d4079ca1564d8d0bc21db6a9"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ddb8672dd568c91ba4b669b85188984e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d98545bce6ef1a6b8edda682013f2712"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "74c8c078da8b9ba7de73a4438741ad92"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "23b1b9dbb9ac07056cbaa66eae12a4d9"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "1db325c93aba509e3b6fbe0c94ecaad3"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "4e0f44ac547d8849558c47f94329fb1c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "8829dcf8b6aae597d8a3cf2d18be563c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "87805f7cf0c34f0459c30ff273bde4ad"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "bf91376b7d17ce82e915f00080ab8f55"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "dc8b0840bd40847ee62a9ad89ca91ccd"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "a5f5a392d30171101321deceea435145"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "609240bbb2e2f0eb917394c71dc2bcf0"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "be82dcfad79cd6dbc5cfcd2bc7f1c94e"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9daf900e1f5ae1af8cd530475d308543"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dbf6e9cc90c069d8ba35d7ef238946aa"
  },
  {
    "url": "tag/github/index.html",
    "revision": "7adce47519970d4a02aaf85dab066c29"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3835080ee8a773952863e3961ba39c2e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "397b6213910a03082fe07e38235a6845"
  },
  {
    "url": "tag/index.html",
    "revision": "7c9afe1f95aafd88de73ff5b6b3f321a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "36b8a4851729f576d93fbb6d9c9af783"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f61ef3ba92e64ab471cbbc3987cd0ccc"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "d211df275727f3c99803869b676040ed"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "defdc2ecbfad8d3ea4ec14ec8af18e4b"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "0d9572c64ab7b444471a465fde905352"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "df2989033ebe25dcc62142d26729eefe"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b91ed406b4ab73206ef5259d5f8e0e04"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "876f4fb2154db4953a37f8c6d9a6ca7f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "571a7f53dd505bdd56f62585d6241715"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f2eb5bef5d5d6e90642d77204502ef30"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "8bab88a77411086e604f58e4f761f43b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "dc5db855615ee5870d3d10adecb67178"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c7652a4a965063d5d03d7e7cc7abb36f"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "e3e087cc3ea4e53a126c12e88c6e23b5"
  },
  {
    "url": "tag/read/index.html",
    "revision": "98a854a1354b064b167eac045fce4820"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "fc2cb81ecd25d8f1e8563dcbadf82110"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "375dcb785530e2b70bdb3ee524106004"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "905ef00590dda8027b3dc7146013d1a2"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "8b54d5a37865f45f8bac7cf691228d5b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "1f182e5481949a51ce56e48aba9dec3a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "60c0fcda0148af2fd9ad6f334e5e2f27"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "5c2028ed8ea393164477d50fcb57e8ee"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "3957882ea17216e27950789ad6c7a510"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5893f1c4f45705f59d397435a5f5aad9"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "d8c43bc92be42fdc1e4b69df5ee3c0d7"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0dd8fcb2e5273b7b76c4a31e2594e7a7"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "4fb0e37a3e4cb28db06280fbdee9b9d4"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "600919972351e593d190935041cdadaa"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "5f540d217af2161111291090ed7b7b01"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "9f9cff742dba73805de5238b6ba79813"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "79eae39c855a7a5e9acaf614f3e826cf"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "de561773b7d96e2264c5f9f71aef8bd7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0e79efcea4bc0acca4eeb09b32bc3701"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fa4760a291911c23ec31b6146a47a891"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "49fcc7e4b55edbb8c5c613fdba8856aa"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "7f0fab0e64317276a67c88294e596e2a"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "bdc52170d07e86f21f173342707e5041"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1b5776af4f5bde5b9f79d72dbb707fea"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "97a0dcdcdde4d98eb62583b8ed3367bd"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a93b10cb30bd2173fb3e0b6f28d7f0be"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ce2c78f2f6bde9a6539a53a69659e32c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "eff25f00dbdc338455574291265ca087"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "918b232df2e77058f28f2085fb00591b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cfdd96f827ee8c7c298184b978603325"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "99dfc061afac72cc86d20f61a6695906"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "4ff03349927dbae3a726bddfd37c52b3"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "04d72af97d6697e7c7eaad34fc31a19f"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "31396879f280cb25a498e745a3f897a0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d0014dd70006ec4c8994d87ac20efe6e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "47a241e24c2cd103028b63a2de2f133b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a68d991d04730d805ea5865852c2ed42"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "11ff90af8d5f1859ffd137bd65dfb4cd"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "6999cf14568c73e93d7df66b94d29ae4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5367d11f7b70479b8b931b8ffaa5e648"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "85a60574c255584db8aea93a82e6f6d2"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f44608482322a2c7d1af74bf20411648"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "8d8fb68df1c64804890f0cc433219762"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "54471b85fd4c6acfb5b5b5d9941899ff"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "fc1adbc14ef189c911ebfc6a5c037ee3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ef76c0dc536444e61961beb1e73dccad"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "12a90cd236de17c44544bcc0a70dca46"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "33f1ed87b94cba8f0b77a215a0925a1d"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "adffe8ba45eb3e5ba9d80317624b2bd2"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "9fb0bf4d6135de847fb5a6d0005b1679"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "ffa50174806c27f6b5b9c22596b56019"
  },
  {
    "url": "timeline/index.html",
    "revision": "b7d4f26dd64966f91fcdf5c1b45a558d"
  },
  {
    "url": "tools/docsify.html",
    "revision": "38d69fdb0217e21efb1c9f29e600ddc3"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "a9391c3d3ca81baf7c2c6e3c15d86a61"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "d33d8d6dd6f028db4aae8a4e76f10ab9"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "a8aa09772fef8073727c0d816b7e43e1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4420afe227d39de65e40f3031e4c42d1"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "52cc8407bdbf40b5d402d94f43fcdb4c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3037a3ca62fc8cba51b98a18b45d5db8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "cca44dbde2182ac9f57931719b093359"
  },
  {
    "url": "tools/note/index.html",
    "revision": "d1fef1b503214b21c19f02348e13dfd5"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "3d3f2928b5cc26b203b80e14920afce9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0f54e049edac56135b816117d6164ac0"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "979b3f1d4d70c825e9e4caf41f744784"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "cb507186ddf0bdaa8a290296eda92dc7"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "7eed4cc8027267969b1ae564da36ce4d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f0f08d17610d26c4ca93070162e99e9c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "bbaa50253db2ea4e928a1452f5d38ca5"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "709ff962616f56cf2f9f0e98ff12721f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bd4d697edc72c840a97d1156660cbb5a"
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
