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
    "revision": "8ecb2883f57cdcf809f0d0c307de94be"
  },
  {
    "url": "about/app/index.html",
    "revision": "9ca1d2bcba7671edce7fbfe7c0106ea4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5929030625d35bc91cc35cf33f80d144"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a70c87177e9c57ab394347551326f08c"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "555e009b2ae233666419a7ea59170852"
  },
  {
    "url": "about/index/index.html",
    "revision": "24895b2ef8eeb033d04fbc1a9c552c94"
  },
  {
    "url": "ai/index.html",
    "revision": "978c9a048b57dc1b06265d96635a429e"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d1893c2250f68b4511a2276c4bdd6435"
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
    "url": "assets/js/100.ed597179.js",
    "revision": "eb64847f0c37cccef87745e34bacba78"
  },
  {
    "url": "assets/js/101.f7c83ef1.js",
    "revision": "643e6674c1847a09aed8bf9a9b5ba4df"
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
    "url": "assets/js/121.edfeab37.js",
    "revision": "febee3b73cab86e03f3688991eda6eb2"
  },
  {
    "url": "assets/js/122.7ad7597f.js",
    "revision": "8198c72ae28d074ac350fe96c30a11c0"
  },
  {
    "url": "assets/js/123.9014f25a.js",
    "revision": "96a70917c782515ce2ddbc4f954e158c"
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
    "url": "assets/js/156.5e47651b.js",
    "revision": "b8d4415059518600b4fc3ace75762c02"
  },
  {
    "url": "assets/js/157.8f4da794.js",
    "revision": "98f763a2b09e15503ac3972364f217a7"
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
    "url": "assets/js/164.3c0a56e2.js",
    "revision": "5f35470f1bfe1a6589e5da650ad620eb"
  },
  {
    "url": "assets/js/165.16538b13.js",
    "revision": "19007f4218c13504c4e1f1405e2fa6dc"
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
    "url": "assets/js/18.538a3161.js",
    "revision": "ec8030db49b3b3d0814286eecc84b0ff"
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
    "url": "assets/js/19.a78678f0.js",
    "revision": "7c92c2ab9f72f6283f0687f99a74c037"
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
    "url": "assets/js/218.968c6a04.js",
    "revision": "a09c893f946933dade221cb8fcd7da99"
  },
  {
    "url": "assets/js/219.ab5d11d8.js",
    "revision": "3be4635dd6efa814003b3a6f7aaa7f63"
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
    "url": "assets/js/250.54a1a881.js",
    "revision": "b31c9fa5c0102e25decae324878d2acd"
  },
  {
    "url": "assets/js/251.44b608d4.js",
    "revision": "af667c8f40856e5e9c00eaf368b65376"
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
    "url": "assets/js/255.5a1e8845.js",
    "revision": "f42445a0601cb15568d67fcca2c2268f"
  },
  {
    "url": "assets/js/256.826f7887.js",
    "revision": "ac55f39b11edc8776691b87c97bae5e3"
  },
  {
    "url": "assets/js/257.35ca4a17.js",
    "revision": "5ebafad9b793eb610f815f021f742c2d"
  },
  {
    "url": "assets/js/258.cbd94280.js",
    "revision": "04b6e0cd9317cd14ac9f6e2b45e7c448"
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
    "url": "assets/js/260.6422209b.js",
    "revision": "f72ef78144e3582af3d78004ff51c3bd"
  },
  {
    "url": "assets/js/261.fad755dc.js",
    "revision": "0d5c7f4c13516320980946757f7f72e8"
  },
  {
    "url": "assets/js/262.d109a6ee.js",
    "revision": "fc8f6e1903a241d2abcce9ccbb830983"
  },
  {
    "url": "assets/js/263.72d94c4a.js",
    "revision": "d5740f1ab4990112a88fa9b2c9a0d7e5"
  },
  {
    "url": "assets/js/264.95078805.js",
    "revision": "57d266efed5db70de0f4a44ca9153e85"
  },
  {
    "url": "assets/js/265.1a881979.js",
    "revision": "be38f2ddc3c25ec46d1ba86d577bb8f6"
  },
  {
    "url": "assets/js/266.23b54285.js",
    "revision": "7549ef2b1b3559a0b72104fd2978b8cc"
  },
  {
    "url": "assets/js/267.2985b88d.js",
    "revision": "b1ec3b80e124bfb6ad4adc9a58929030"
  },
  {
    "url": "assets/js/268.2a647cdf.js",
    "revision": "967fb3255554b1cb37aa10ee7f413961"
  },
  {
    "url": "assets/js/269.e94cf57c.js",
    "revision": "1eefd22c463348ca60a490c248d8307c"
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
    "url": "assets/js/271.dfb5b374.js",
    "revision": "7e8c215afee8de12f06abd379eb8abca"
  },
  {
    "url": "assets/js/272.303d6404.js",
    "revision": "c47e7e817079504e46e994a46a6478f1"
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
    "url": "assets/js/33.8074ec1f.js",
    "revision": "3aeced4634c6cdc4e00d355b622e22db"
  },
  {
    "url": "assets/js/34.968d76fd.js",
    "revision": "cebc6eb02ca954b11a8d88c1f199bc7c"
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
    "url": "assets/js/app.04e590dc.js",
    "revision": "0968aada37b57ff516098b41ba4e9a1d"
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
    "revision": "c6781ab174fed7a784df20fd42c1d168"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a9cac7f24cfe758dc4bdae88fc1c2d87"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "54b3d883c2a04e6ac92e9e863fae5bd1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f68691a587c00fce1331b5368dcdcc63"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2ec0a66fab5c61bd8992f440685fa2ff"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "cde7cc0be81fb59147013c9ac4b2fa36"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "953b8185ecb3448f2fec6c9d7e9bdcda"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "423eab29da874f2e6f07a3d061e38552"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "fa59e043a0d271728e2a7d7ed4f235f6"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "900b05e1bda957ad9ddcfd9fafab1af9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "cbfe80e87e65f30824238a7b211d2815"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "8fbb158f08e14b94a586183d83cf52ac"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "3eb2dcc9fa6259ee778766e418cf8531"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "daa93c6e9957a5107e5667d1989da756"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f24a197e04bf58b89425fdb83d913f6b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "2aad09cc50c6839c47bd3123a63f4683"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "aaea5847996b7c3cb91f1a9b7d793bda"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b8a3754846889b3894af0cab1af6748e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "49517dfdab8c19799a0d687335fc502b"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "1c9a794220859f38e2364460939f449c"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "c84447675d09f16d9e9bd1fa99297f41"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "b62b52c8cd0ea0770850a63dd36eea11"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "a45922868dcd4a85a2e3262eb49586b3"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "8ea1219271af3f0935b1ece0aaa924e1"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "4abe058c1aa6086b342beff22afe1ca7"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "d5c7ef4ae314e1d5fc3ccf138aa8c30e"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "b8e79cedfcc9170b18ff84cf35af7f9d"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "9f2c5b6dde432cf61e135da4b44ad45f"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b417d00e15d06758e9158f7063cb74d2"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "563e112faf52f7e9e9935d0786893ae5"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "57eefd33432bae98ccaac04da5e6a70e"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "e17bf9ab9573ae888c9f672a73443e7c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "e70d0b37c98fe956067a6a913880a5e4"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "74c5066687cf0d33450908f0de3932a7"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "295b2858eb4398d04ecc2caae7ce7d92"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "5b266d3478db6cfec5d8b980721c21de"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "826c4792cb030a39e25e0f54b97e4473"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "265ab3e7841dfcaa1f39f4b777089ae7"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f515199b095b4cb7142dfb1d3a63db98"
  },
  {
    "url": "basis/os/index.html",
    "revision": "72b35aaf5770f08efdcab1032d8a118d"
  },
  {
    "url": "book/index.html",
    "revision": "e8a876eb3986dc416bf9ca60a88f576d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c6338de95317eb0e7813ae2c902b48ad"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "9cc5186793660bf862bb4f012c1ab9f8"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c65d4da42e9f563c85e5f85ada2fdf06"
  },
  {
    "url": "c/audio/index.html",
    "revision": "1c6e4687bbad3917772b613f567a92ed"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "f2dc2cdfc41b9a580e28b026e55363b5"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "4b20d38c5d729cd82f5cf02ab274a44c"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "f2eed58a46b73573071cc07c6525b3c5"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "23dc5234e08bccbe3dfa866bf1f79dc2"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "5eb99649f7e1f11d10305305f5550dc3"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "f002acb1640453338140462435236ee0"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "fb6a390297280b8f2c21056e8a1fdb0f"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "f6d96ba8bec57cf11f196914d22ce0ab"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "5e5bf46864a154dc525eb8798b5a0ed4"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "72155cc273a5fb7f626ae5cb125d361e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "1e96db81ce70d848328286c05b214693"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "b3fb5bd8417709da1b50aba9d5d43257"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "9a1022dcef3265a618caa57d76b747a9"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "855299b39d412e139f656ab771674ad6"
  },
  {
    "url": "c/program/index.html",
    "revision": "dd23b9288f315bd27b9d0443257b36e2"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "91182e33576dcf1629bc077a9c423552"
  },
  {
    "url": "categories/index.html",
    "revision": "973674fe8b0470a768a95d88f036193d"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "87c0abf33bdf702540ac9ecbe678e7e5"
  },
  {
    "url": "figma/index.html",
    "revision": "21c7abc1eb437a0b14b1cc360375cc08"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "51dffa383f5cd7d2503605174fc4ae13"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "cd71778e69e601d9f8ad8e4e81ef9f2d"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "afa2c9ca5a767343853c43f3c468daa2"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "c3a56f180782831ffada8906e45212f0"
  },
  {
    "url": "flutter/index.html",
    "revision": "ca1e532049db5930e74f717cb138855e"
  },
  {
    "url": "flutter/point.html",
    "revision": "1ac2fb013adf96cbbaacb9709149b445"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "88325fb61a868b396db3467bd1f178ab"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "51c90415fa7d78a02413ec84d37066b2"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d3e1d25302db26eeafb5adb996f4124e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e315343832b3095220dd8cf1da659a7f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "5e3986a1f120afa3e70f1d5eb11a2fc5"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "28dea1a3671367ca191585eb167a4734"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "fedca232d07d6330c1488004d162fe47"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "c5175ab66363b53f9cfc177d247587b1"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "55bbbbd2bfaec5c693252d47bbd2787e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "5c52d7f915308e07b1e3089ef5fba557"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "92ebb83d3da36edbf7186b45a4fe4206"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9f5caea63c8017ac1f34fbb377f69095"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "525217d6327137d440641d5fe3d41666"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "5fe90fbbf970a5b4504427e5ef9db83e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ea097579ec26bdffbe458399b303f433"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "025d30f780dfc77b0419dab8c7dddcef"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "c18d06e99839d7a543c71f304a081d12"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "852f7a8f9387d312d8dc11868339a5ac"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f78fc75be9c3825fa042e93b75bebcf5"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "464404a076bf62bd2e388005f040a2b7"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "c466564feaba36faca9a05608c3777aa"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "74a4ebac2a8573b92dc817539bf3f02e"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "cef9bdd11c30e31aa81dc642ddaddda0"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "18e885bdbe98777ae25a440467567fb3"
  },
  {
    "url": "haskell/index.html",
    "revision": "c248511aabd1120e49b4042cac878a53"
  },
  {
    "url": "index.html",
    "revision": "f9f21b71c3abe8487f50eeee661be37e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "a726847b96d2409c2ed676e5bdc42945"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "50e77af46767125d6be48900bf0e7112"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "fcefee20f5b6a506e7f79328edeef3b8"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "9a7deb28f64c34d9b12531cc48fd465d"
  },
  {
    "url": "python/index.html",
    "revision": "06e95165d3f685bbfc1b3f544e8bc454"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "c128f5fed179b51e6fece846a0d8ab17"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "a2b2953eb31aeb4f632f955661a6fe12"
  },
  {
    "url": "python/python-file.html",
    "revision": "396947962bb86b92c980bfa907c82dc7"
  },
  {
    "url": "python/python-function.html",
    "revision": "e132782a201acc4d81875b2e198070b5"
  },
  {
    "url": "python/python-generator.html",
    "revision": "c9a01ba5e361e65056e933f6c875ec53"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "81257fca0355e09fdba0d427df8a8734"
  },
  {
    "url": "python/python-module.html",
    "revision": "3c6918f057b53d41f7d1218c9070bfa3"
  },
  {
    "url": "python/python-string.html",
    "revision": "14b24eb546026eb62516ae0f25e95b5d"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "04b0585a57eebee29008ca1087419526"
  },
  {
    "url": "read/index.html",
    "revision": "841a30d42034d4003cb560ef09103663"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "b0b0a93b8037fd9181b988c2af70c9f6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "af24d2e6b99dbc984fbc8d2686e1c146"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "c2bf3ac77f6c98eead6a54758b489cb4"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "f670d2d08859dd138f92c3cddb25faf0"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "b06b87ae289ab44c07a098965541fb0e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "e2db0ddb911566601c9f95dcbb7b363d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "13bece7affc5d743be4609303d198163"
  },
  {
    "url": "swift/better/last.html",
    "revision": "2b6b9579f2ccd6848f446095d18a30a0"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "b606b2fbab1657f5e1b2257c2e7a1d08"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f5def8abc439387c79e3f3b684d313c1"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "45c3c73783f5e2c049fc1d50c410f048"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "95ae11fe763b62f6d8c58e18498a6f83"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ed275a65d51d2e9a2b7c7e1e9c188d16"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "97fb9b0117f7988a8105d921ba4eb807"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "cdeed9062c876b12fdbecb03e4717335"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "a0b0a412e849f7c5722f7f299a6a587b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4d1416842e32ebd7d4bfd6cbd1245eee"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e0339e7159e620069aa4b98c874df039"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "8dd296fcb161703bfb4828c3e2d82a6e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f587cd7dc9f156acc0d9338f747c5762"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "3d9e65c1fdd8fdaec42629e334b93a3f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "3856ab0c0a6371ac5a4c260a58a53bc4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "023686c5ed616a468155a1eddacb1b67"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a719f8cd45fc4f828337735b81b53eee"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "485ffe52c94c1a86652d897860bf2e23"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "00ac595ddcedcc4c1b1a78983a03eb5e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "006fdc878c9826aabf023ff5895c8249"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "50bc56439bfa7ffed4ce86ce42e9c32a"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "2f980c7ba3d39f8ce9a547f06494e6c4"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "f4e870d1f546542355ca6fc944942ce9"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "9c31a7ced19c37ad3262a95c9a5733a6"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "67581e6e9f421766cc6b4244e7a72cdf"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "1f720406cd3d8761489c78d5925f545a"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "65603c2000c26ba64ce2d55d512f21c7"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "9704f5cdc9a0d077f02e432a7b442946"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "da495d11d5a93b871b20e656bac30fe8"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "62b1f50f6a9997372dd11407bd1ce171"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f586257bd1a8ba4f510849e4d6fa78c3"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "3029e0eedb33e5434e908a5848250ad0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d199f407bc21d655597fe24a49ad07f7"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "0db66067e907fa260f26da752c454a18"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "adb4edcf668c2fe3c28545d6c8ca15a9"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "38ec4a357558221402c57e738a893c9e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "32405156723937fdef3e2bf0921a76be"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "196c3c220df676af7965fe82d49b5522"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "ba9b2df7d48121fbb3a4bdd75e8a42c8"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "397870d2fa349664ac506454ed943560"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "f5674d35182e40053885167684204c29"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "951af78d441819f4f19070672f1b3b81"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "9ec55b691ea1d0051fc7cee9d8c6bf1b"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "6d4ffe86ddd8b533f9c9a068d7cc949d"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "f6c41d0ce58273b8d92a5e590a116d64"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "26d1bbde6e82ca97cefe32361415b185"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "03799991059eee19752f706b60d56799"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3cf33ae2cdf35d51d801abc06bbbaab6"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "54a740dae31d7a7b53f0e2113f9f8f81"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "f4326623a488467bad3778103aa8030b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bf89275702705a238c3c55958f8903a1"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "8f53a21d8f40871b4336df55985dedbd"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "2c97cd6f4c9d713de89e4dd2670caf20"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "1a74161cc8cbb47c0021bea0cb631a77"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "e4d33d3e1759d739d05ba53962509359"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "c78083c17b58ac9d59b5c88892da433d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "147a071ac401627ebfb2ed0514acf8e2"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b0dcdb14d369efa58470bbd7edfe5472"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "3e492a8f3db20a6232223bc83843c2aa"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "6bd4d6778679a5ee620e7bbe84c8e512"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5a5c4b4edf8afeb296c4a4ff2823bfc2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "6e63d738d38898be645f14879750d2fa"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "a6fc162b8b6feab17df307dc51f21173"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "44e90ef482537942ff95b7269586f332"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b5e084f79364fd4a5883c420551d28b5"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "49afac2290e6b6625e845202bd599cbd"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "57b6158853e7ddb57fab761518c84965"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "997a7573f53b579f5fbb26713b176598"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "174918641a471ee16930f26c315f848d"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f7f62e558e20863507be17c71603130e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "89a90e72dbbc45a530246598c0fce3fc"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "a672728419d92148eda70f2ac5e08bef"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "83d2ebdb9137ea528c6ae3b482537a19"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "f81ee673c6db2ae6c0efd2e7c05bf63f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "5b16530193dc49a0a6a85bd865aa32dd"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "2cd74ca1b9ac3dfa3faf1c8a5008b911"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7accc2afb5d707bf7d2f2329d41da781"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "03bf57171cfa9930b1a41d16e6c641ca"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "46f41cad379fdb30be87fbbc4d960787"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "cfec1461f0da6aa4eee6b9d944f64416"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "51922ac1bed1d7eddb446e3566f227de"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "71f20fd71437a3ad76a3eb3ad0360a29"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "67b434b41a189ffe91102c4a14adfa42"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "6a9a8b681d65dae8ec0800752ebcdacb"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "c7c0d311d76ce9c8ec24e9658fc538ba"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "74db52f4292db88c13bff02265b84143"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "dcdfc2475e47b801398c0dbbb4e36af5"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "29bf476a0800fe71d3e62a4a269bb2ff"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "e81749b5136c21c39bbdea1242b3ed24"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "3146af0d8677ba97fa41ae5cbcae36a0"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b4019ff3f8e69c802b0e889783b911de"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "677eb5074f6ec052ec6c9bc58e8f095c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "5da95d02624b4dd0bbf82231a21f60ae"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "446617c7bdeb52e7df563f67b025ff6a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "34a2c67b42547de00ef377b68c1cdf8b"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6d643fb38a11b3aa844ce9801b1f4981"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "fc4db835aab74e1efb23248b5e27819f"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7c7ead42ecc63346f097006907b4da30"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c1c01a3c1146d5eb4968b6594cc52a4c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "eecad76cc278bc2cd92895a933032e64"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "782c5fd529e247e3f6ed3ca14975a231"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "9fc8e8b63df0672057c354150c79d194"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "7bebef65281ebc62740295b91ae019bc"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f0fcf87451223e2338f70d1424383ff7"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "fa2dca1af64206659947c773113bbc0d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "74b52dda148c3a2d4d9bec97ff591d51"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d27439399769c6e11d30005abfc7b1f8"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "94c022d8e0e91b165aff028d551a7241"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8958180559de9cdf793d9489d33216ac"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "64e0d8fa025320f1a32462ef40b9e0a6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7c20b538c5bf4f5d0f70b9604580e31d"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b2dff2f7b68a8494257138a45b982273"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "58849c8cc4a83d31c6f2ae6ccd4d4b67"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "84ea02b7a38f0550357a5f2dec36d0b9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "a86848e27e82fcbabaf03b41cc7e553f"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2759f48324f359016b042e2cf07339f9"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "21431a5acc24abbac77831839f3d1074"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "99ce456ee78666fe3727f8de31246887"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "2229083c8faf1d3fbdcbcfde90dfcd99"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "148a246099f4c4dbacfd3833501be286"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "8673b2a3381b524f730fffc518019530"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "8e67d43fd381e16af58c6cb443b32d4c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "1f8824030525fcd1bc4298cedeb3e324"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "088d3e47b65f34694420bb3f35a4b2c9"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "9d73bb594bf2b397ad869931f0b4aeb9"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2474f21aae3e149a6161d26f92c56d3b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d05b6eede0589d195acee94e244824ed"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3a03fb97b0f8a4f3c0983058527a970e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f7cbf206c3b6b15b08daa3e1bf5b30da"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e8dfdff4bff94ff319be04984b17b7dd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7f1c3a6bdf0657918b091b383d36fd86"
  },
  {
    "url": "tag/github/index.html",
    "revision": "79a05823239c558b1eac89e6f8103212"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "bbfe085c565c37e24b5d88c95d3418b9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "44621044468ba4be36326d426ad6d3be"
  },
  {
    "url": "tag/index.html",
    "revision": "4c7e1333910cfede3918d2ad82ac82af"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "292aa5e2414d291e3c2fa887867513b9"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "759718e3801ee08c18a2d96ab87d9e6e"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "1016470cb0311aa779063152c809b42d"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "15495f633d8c81a193bbe022526ae20e"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "a51e1005e12a112554e7429f78c15477"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "2651ee854bdbbc3c32dad69f91b24f7b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "27b76d9baff84ee568fd242737d20927"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "7382756dddf9ce5fb2fbdb547ca63f24"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "75394d1cb1e814b6ce2275415d4ebcd6"
  },
  {
    "url": "tag/json/index.html",
    "revision": "38cf30b2b5ef02a3210f1a020dfa68a8"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "bfd1adba026a548c7430c86d8fca66a1"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "4f243cd7580274e3c0537e7edbd6e9f3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1ce40adbdb132b446eecaa768b441d60"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "76de3ca533055b60de0ad173748a8587"
  },
  {
    "url": "tag/read/index.html",
    "revision": "94a7aa542315cf45f4b8e91c179aaf0e"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "f96704920b434c5af2eea8ca1767634a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7af679c7c43bc97ec4c0edb07442bc0c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "2727a011b541fb92328b0d2999e74c52"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "cc34ef022ecd0951fba644ab06e4df69"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d96abd07325d005dd866523eaaca5094"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "f6ca8aaa8d140dfa9ad8d85c33e0e786"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "bc6f1fd82e8bd102768388544865c59b"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "06800046db0e843ea7359d1dd9209663"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3656e3ad16ce660d5a9183c6ab338d6f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f915250bebdf3d4ab9d6b404e4d39ee4"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "47fb4bf981ba62807514c9333671d9bc"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "c72a27279f138c38785fd201b74d286c"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "9bb9f74dbf5a8465dcf070389bd47752"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "8b95586c86c443ad45660b3f74fccf71"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "89cd83f8c2142d8b0a7950c33a0f3c9d"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "565fbf6417ec2f83c6ac9db0fb4a3173"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "0eb3dc53babe214e87e1b96472560a3d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e66eca23a8610e959251977d6f9d28ad"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "21a0a5c63714839b8bede9ecb395ca8f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "1746bce9ef8efaba9601ff74157d4dee"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "82a697583c506ce1a78e95ae4caf0a84"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "834600fc41b8a4afbf80f24bfb88e692"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "869f9508057891ec0930dd0d22e15f37"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "226bd87571ebbeb8a60812e8fe2e89b2"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "d9b86b56ec1d0e08eb43ae11cf078205"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "2fc44990adfb13ad1a9e690f81373502"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "eed18e36718ae690aec560fd42a4f920"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "b57b6319d889697e3d7d6fa0ee92efad"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fb215746a588797d8424d540aca5437d"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3fde9540d8101c95e879c904e9dbb483"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "5882beca8909a6ac1c752290ed549b03"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "44f27c8cfe94b74e4d39dd2170d9194e"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "1206530af5a0c7eac276ddbe9613637b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "33ce568f45a03b24d410f9e39cafc952"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "39d06e6119c9aa1af25058689392fefc"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ac14ba5d53716490c02400142ffe339e"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d07673c569fc349930e93bfe75dd142a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "1d35c037e20b480d18aa2c1fb3b6b58c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "23e2c4491a5f22e19d03774787560365"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "79bd15bbb1f0fa51f5be90df19cbb63f"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "5d45efd549fb9d2ef4c37d38b943bfbe"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a5dbff825c8d6120abd3e3229398502b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c1182094082128ed262389c4cfadf6ae"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "31ea180ab6aba77e176516f1e2c177ec"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "587b5edee04b0a8c595d1539eac2fb3b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d898bd734e8974ff2e7f9127a3c4fda3"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "78d83225a9ddd1f55f40fef535bac922"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c58293088e7413ddf52ecbebdfe2ec74"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "2c02c3accc3920a51047fb83090a3100"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "7cfd22452780e6939cb9f518a91dc0c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "31d1ea810fd91a9d65711e79f29c57de"
  },
  {
    "url": "tools/docsify.html",
    "revision": "7159263d6b5cd9f452c37d9cbf4d2c7f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "224f746eca89a2f2b8110bee5f9224e3"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "96275f09a87a9d86e3208c60d8df4c1e"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "d421493f01c4d62c2466257de1e19c63"
  },
  {
    "url": "tools/git/index.html",
    "revision": "01b21aa0a1247d84cf438bacdedfd67d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "af9fc9bf7e49b88f267ccc788bc282b3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "25a933c049f6a9c21a796537a51fc511"
  },
  {
    "url": "tools/html/index.html",
    "revision": "10a2de459f0df9118b207249012e8e46"
  },
  {
    "url": "tools/note/index.html",
    "revision": "470a23f18ba420c6be2f2b285a20728d"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "999d6a5c1e3305720b3cf9ec79c85833"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "317b5dc012fefe75455353d11c7db670"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "7844326028e1a78fb46834c548f9d6af"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "5f9242a7c0107dbf46b6e322944d2b25"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "3130c9aff673cc7cd155ed911fb8f48a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "fbd509b212d959dc27642ac4eb678ec5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "dd4269ee78bdc6bfb9bbbe5a31a9de06"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "1eaac2135427ca74ca508522899040f2"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "72083dd36dcd3d8f4305ac2af657446f"
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
