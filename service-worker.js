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
    "revision": "86ced76beaa5356e34267170e3ed8bcd"
  },
  {
    "url": "about/app/index.html",
    "revision": "f5587dd3a3046f80da5838e53a29848d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ace1b6a935ea2dfb4458e398a31d8877"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7d6814e5a54182442b970c7c61417b8c"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "030b5a5d24ffc33c3c1555b0f39d6aee"
  },
  {
    "url": "about/index/index.html",
    "revision": "4811a82119934b98bb7aedccc93ba2f6"
  },
  {
    "url": "ai/index.html",
    "revision": "902680c38eb38b542d4ca55633490501"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "98a9d6de05c5bea9f47e746191864403"
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
    "url": "assets/js/121.edfeab37.js",
    "revision": "febee3b73cab86e03f3688991eda6eb2"
  },
  {
    "url": "assets/js/122.793aa32e.js",
    "revision": "407ce011331407b5d82dd7bb895cd8a0"
  },
  {
    "url": "assets/js/123.3c883af9.js",
    "revision": "bee9cb209cf76e67bc6ad1d9c7f103be"
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
    "url": "assets/js/14.7606189c.js",
    "revision": "8e9426dec2f484bc673ec625502a820d"
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
    "url": "assets/js/15.f12a533d.js",
    "revision": "9585110cfe427b041790eb4799f4ec0c"
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
    "url": "assets/js/153.fae1442f.js",
    "revision": "a60578ad1696f5b7df0037142ca7293d"
  },
  {
    "url": "assets/js/154.f386e2b1.js",
    "revision": "8ce4dee901417f54b404fd2396c4356c"
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
    "url": "assets/js/173.c96f487c.js",
    "revision": "f9d2eb0696fda29b7e107e91a75d0fd2"
  },
  {
    "url": "assets/js/174.901295ab.js",
    "revision": "321f198e8eebdf623c3cf723700fec64"
  },
  {
    "url": "assets/js/175.dcf21a82.js",
    "revision": "16ee79c67b2cb634ad8e6a40a72eebfe"
  },
  {
    "url": "assets/js/176.c881fd5f.js",
    "revision": "190b0962020f9d852591802c34280e8a"
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
    "url": "assets/js/180.49dd9e1a.js",
    "revision": "f3202a948a141cc8367a76c7832df313"
  },
  {
    "url": "assets/js/181.6ad983c7.js",
    "revision": "204dabf312a42a00bb1c6e820402ec8a"
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
    "url": "assets/js/186.cf7594d0.js",
    "revision": "0258ba9a028e8213a8e0ffb71a34afc1"
  },
  {
    "url": "assets/js/187.0d327ed7.js",
    "revision": "637220aaa329ac6a96f1b31d98604c7e"
  },
  {
    "url": "assets/js/188.25b2fba6.js",
    "revision": "26d048d784d4460eabf45b834c26ce27"
  },
  {
    "url": "assets/js/189.a8aa2147.js",
    "revision": "8f1e7d7bff5eb21f3dd16b4a26117d7d"
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
    "url": "assets/js/194.ddf9e7d4.js",
    "revision": "30d56cbc06699eb8961abfa99979f7ee"
  },
  {
    "url": "assets/js/195.4cb8c633.js",
    "revision": "e989663a82bbc0f94b7b2e90e3e5b5df"
  },
  {
    "url": "assets/js/196.11658b11.js",
    "revision": "dc62df610f447843d68de1dac08630bb"
  },
  {
    "url": "assets/js/197.fe37beb6.js",
    "revision": "6a5a093339861011577de1bf5f32aea7"
  },
  {
    "url": "assets/js/198.65f6fd00.js",
    "revision": "50d22c66ccad50dd822f178443f92370"
  },
  {
    "url": "assets/js/199.cd0ba349.js",
    "revision": "283b4ca4a663c5c7461b7e4cd7148e90"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.b44dd5db.js",
    "revision": "bac6ab3fa5361801c1435e5454dd8f1d"
  },
  {
    "url": "assets/js/201.e81a3675.js",
    "revision": "1f253e4cd36c703024194fc344481188"
  },
  {
    "url": "assets/js/202.b23433ca.js",
    "revision": "7dd3e0143a2cf5ee183e2e584030458b"
  },
  {
    "url": "assets/js/203.c1f78291.js",
    "revision": "c129a8341209304a7931d8992d157af7"
  },
  {
    "url": "assets/js/204.cd8e0d70.js",
    "revision": "88ea90824aa159380ca1b2c21f02b53f"
  },
  {
    "url": "assets/js/205.7ffe7300.js",
    "revision": "c44b7e02909b9e80b36b2c3b00884f22"
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
    "url": "assets/js/208.56f64ba8.js",
    "revision": "c9140a31d88b81e7ae943c0e24044ff5"
  },
  {
    "url": "assets/js/209.33d84d32.js",
    "revision": "dca7388beeaabc11c76a0701611ca4a6"
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
    "url": "assets/js/230.1baad38d.js",
    "revision": "d2eb8c125f468e6722fc106e00af14dc"
  },
  {
    "url": "assets/js/231.cafb1f07.js",
    "revision": "b3716c4e2ede0cddf6883f7e57c6e511"
  },
  {
    "url": "assets/js/232.fc60023e.js",
    "revision": "47e9afab416f0b11f2b8dc983f799680"
  },
  {
    "url": "assets/js/233.d3ed045c.js",
    "revision": "f2d6651a8a1dfd55cc5a9d97267a05fe"
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
    "url": "assets/js/251.2130d7de.js",
    "revision": "4ec84b7b4961c3e254197ad10494e955"
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
    "url": "assets/js/254.9660e03d.js",
    "revision": "b4a47298fb3b2915d50f4bc8bdf79028"
  },
  {
    "url": "assets/js/255.22f0d9ea.js",
    "revision": "a7294f5a6e97cf61192dc1c55b869f34"
  },
  {
    "url": "assets/js/256.826f7887.js",
    "revision": "ac55f39b11edc8776691b87c97bae5e3"
  },
  {
    "url": "assets/js/257.7f7212cd.js",
    "revision": "cc16dd4b29dbb59c35d766200b11f472"
  },
  {
    "url": "assets/js/258.f40b540b.js",
    "revision": "47857a80911bd2a255bbfe0b1725f7b3"
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
    "url": "assets/js/268.7fa59067.js",
    "revision": "2feb3c69aebdc1f84a03884cd79da079"
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
    "url": "assets/js/271.c0927ca9.js",
    "revision": "dae5dce3da400d193eea9824745e05d9"
  },
  {
    "url": "assets/js/272.54fc3f19.js",
    "revision": "ff743ec032a01757de1bc4656c8b91f5"
  },
  {
    "url": "assets/js/273.6be9009b.js",
    "revision": "e4302d8845df40dac6f6faf743e06a7c"
  },
  {
    "url": "assets/js/274.f1a62d53.js",
    "revision": "9664c880bffca0df52d3571430d4c4da"
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
    "url": "assets/js/34.1aaa2915.js",
    "revision": "81f0cbdfca9288836286242b618cac1c"
  },
  {
    "url": "assets/js/35.370e9427.js",
    "revision": "f7e14b81d7bb2aa934bfa8b4f07d9172"
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
    "url": "assets/js/43.3079ee4e.js",
    "revision": "8be7bb500a72808f7c2648266835b4f6"
  },
  {
    "url": "assets/js/44.70e3bfda.js",
    "revision": "75945434b4951f4bab866200fdc73113"
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
    "url": "assets/js/92.a2f2c4d8.js",
    "revision": "f6021b9655e94bf6e3fab12e0974961c"
  },
  {
    "url": "assets/js/93.b2b1e3f7.js",
    "revision": "313f3596b7b5a2f9905b6faedac1e59a"
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
    "url": "assets/js/97.792a46ce.js",
    "revision": "91f2e9404f39d8ec7c8b95474b137cc4"
  },
  {
    "url": "assets/js/98.75cfa658.js",
    "revision": "bd345640bbcf640e6194a93ada0c280b"
  },
  {
    "url": "assets/js/99.3876449f.js",
    "revision": "3a8989c1430f220e5a273f52bad862df"
  },
  {
    "url": "assets/js/app.b4621f10.js",
    "revision": "7af56e294ef1f6ac2469327e47ed8853"
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
    "revision": "56c32ce9150d998a3cb244dc03e8b397"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4689bfecacff04fde3d6d046df00a49e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f0c5b524d98c9f11f6891840f9b8c0ee"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "222645af6642bb2f582a9cb9e6cec154"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5121934e3279cf120d2805d1cd5214e3"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7ce824f7fc56adee12111adca0aa456a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "96091510960d63e53bffb7a2a2fe1944"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3d067691b44217791ba92de5fecf4b95"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4d91dfea0aa6f827afd5b5e57c38dd8c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "229383c31b815f22d411b3c3af16fbf5"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e26a52e663a87cc70f236c384d9c1ced"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "ffbf542588b281379cb76d3df6879ba7"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "c8528dd5d102e597af184262d6b420ed"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "64c9b690a4dcc5f716afa6f5235d2f8f"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "88f62ae78d576938ab490eb6ffb404c0"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "08aabd07da384e9a9e9daae8758f31d1"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "7a5caa85b5e84dd70b8a2251b0616269"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "61b53506115499dde053fc82894512c6"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "2619c13e14ece4180d4834b9f0cd7d3a"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c48df3828ef902ad6f1c26682f3609d8"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "59d5d503bc0afbb03cb7b821a6f27821"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "a5663cec7fc5e67498558cd2ea590af6"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "9711413e909ae28c14d1391b7f2dd289"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "486798588099f32f98528b4bd7860f27"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "4f792dcd843311f1ab4e77b5d3d92086"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "2b7065d7b817ec6409931f002830b7d6"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "3594176e9c98391f1f089f5e70fcc21b"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "49456f6ba68b4a6e60f2e0d0259e0415"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "04b5cdfcbf86ca115866ccbeeafd3715"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e4791ade1abee249f80e8bea2e863064"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "9467fe54900ff960ad4e3df860dc455d"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "65e18f0f3df52f2f62e57084cccdeae2"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "4424f04293c9c88039db053241f45264"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "bf2bdf5d7d64b98a1e2bb3022bef578f"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "37e98c9846f2be2e504a43ebf72629c4"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f41331254ab9140ddf9b44d5059e218f"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "8bccbd3f82234c0f269aabac2c614ecf"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "4ed15a6dd50a3423ae96ff35c8e03412"
  },
  {
    "url": "basis/index/index.html",
    "revision": "607879ddcdf9a7d12db1383b567f8bbb"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a7426ef36560e2f7842af1e5bffffa09"
  },
  {
    "url": "book/index.html",
    "revision": "684aa5a518a5b63026bfdc29b35f7079"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4e511547972f556396df485307775603"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "6589736c90aff1918a42435f58dc5d05"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "9b28fbb5f32d8a431a4c8dcab2de8f38"
  },
  {
    "url": "c/audio/index.html",
    "revision": "eed1fcd412243244e4d94722527d4abc"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "d09983f868e533cb3c77478569e4c0be"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "29b26bd05ce287842fd25a591b3a69f8"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "10e3918b8c3a8af393500d5f2f038b30"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "9f8169b640c941c2aa27c04ea8d2d35f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "1e8e3c53da5d8bdf139b6ccd564ec494"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "a9f39bbb858474e16fc0eca79a862056"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "03552cbdb32647fb981a44e194f6f9ad"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "e45fdc6bf693a932c3ef69452fe0fa96"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "48f4f32f8bf541f49c2ef4079dfa6a16"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b9d9c5f04c7ff56e8aae19b9e27e97f4"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "135709cfc9005e8d8210342a47f518bc"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "4907124aa9002eb4ebb9653c3e47f567"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "ce86a83b69186f911e608139a3af0f78"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "f62c996eb2525bb7bbb0eca32843df07"
  },
  {
    "url": "c/program/index.html",
    "revision": "2bd66ad30d3a6bf74808ff04bee79459"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d0ef6ab7b54f2127ac25965f5d231d50"
  },
  {
    "url": "categories/index.html",
    "revision": "1a63e34fd4785199c52d767258223ca7"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b709b3bf553dd0ed34995f973dc5e4e9"
  },
  {
    "url": "figma/index.html",
    "revision": "e6460fa5648783c7a9060cef1f1a54c5"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "0dbe3e7668a8501eb4dae6345b7577cb"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "5c5564a07b0d83215cbf000367f09a8f"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "b1b5938bb5bdae2b3db87f3d08b624bb"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "974c4bb3df7d577082bcd219a35b75e8"
  },
  {
    "url": "flutter/index.html",
    "revision": "6be06d5e35ad4e75be7b93464cffe7bf"
  },
  {
    "url": "flutter/point.html",
    "revision": "968aca6422d2b8a5a2f612d6c20223b8"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8eb51793e0079c8fe44f85ee9df1c42e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "77926619c027024a01c855bd270dfe50"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f85b26baf5b1410e587293ba4a8dcf6d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c8765b9da119a8b4e742f52ed18226c6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7ce86a6d917a38db2d505ad19c1fb006"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "22f25d383310521df476690c9783df68"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3cd5a2750ba3ec3a24cf1ea3f5279bbf"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "cabb9448cbd417be42175625bee492fc"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "b50bedc5e24d2a23d12b15dfbeee8b53"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "dd59d5ef130632730fee926d0a9af489"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2da63874293225e926fb2dd0608fdfbc"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "7471a85fcafc41a9ded05d6b023cf1fc"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "5c7859a3b7c00f9972933d9135d7add9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "bb1fecdd22198453a50f8a6dba64c7c0"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "9e0ab363f69f601d3525956e218b61d3"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "ee63eb9d77ac3e1c45f38d588b1eea65"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a8ef20bd5abc858f1e1fe1105ed675b1"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "53284552880f8e1b6d7f45ad1a7e8c71"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ec3523e0650d33245f5c86f289a3a842"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "24b00ccb744b59cb50e927c2108a62d6"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b29e8e3321c46552e9416b169efb2490"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d0b0ec0d5c697a3a06052301cd3b88dd"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1f554324692b408abf8d6a536eee6829"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "40da5de430a7e847c06fcca1d486485b"
  },
  {
    "url": "haskell/index.html",
    "revision": "1f2b89d28278f1f64963719b74224647"
  },
  {
    "url": "index.html",
    "revision": "accadd9d505d79e8229056163fdc96cb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "9fb2318e515b8295cd66597b895b9d8f"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "bbc9f02371bdcff29530c21311db59c1"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "373eb4ca1d92aad6105e0408fe1493d2"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b679d045cae88e6551311f3e7e1f8366"
  },
  {
    "url": "python/index.html",
    "revision": "6dd04a809ea8f1123ff3b85d220fdacf"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "56e9ea49ec650e066fa47ffd5c7daf0e"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "f35f2c5180477eff956ed27f7470d49d"
  },
  {
    "url": "python/python-file.html",
    "revision": "63fe21284a8dba7ec710e51c44a2f825"
  },
  {
    "url": "python/python-function.html",
    "revision": "4b3bd6ff9be37cb466eb481fb688fc1c"
  },
  {
    "url": "python/python-generator.html",
    "revision": "f744d0562976e8c15f289be687977d08"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "e2bc1ccd9a2605a5be7d766730b2a890"
  },
  {
    "url": "python/python-module.html",
    "revision": "bab75883e1409e83e7af857967d9f212"
  },
  {
    "url": "python/python-string.html",
    "revision": "d19e081326b521600fde488e1cc0f4c3"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "344420458cb4ce394ebfc1c3664cbaec"
  },
  {
    "url": "read/index.html",
    "revision": "c145c8e65ddbc1a36a48efdf5941af0f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "da4dda92e32ce60d9c5c62231dcb3058"
  },
  {
    "url": "swift/better/available.html",
    "revision": "e9a5c2234436b3f18eb4ec9f3638e029"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "ce53b17fa41b21c2a07502ff9b5dd908"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "0634d85395a84312ef09af55324b7d28"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1a2e0770c5da18b557a4fba98c298fee"
  },
  {
    "url": "swift/better/di.html",
    "revision": "69a1ccf320f33b1b62e0d3ddf41c3f87"
  },
  {
    "url": "swift/better/index.html",
    "revision": "b69def2215de374fc2ef45b51dd9fbb1"
  },
  {
    "url": "swift/better/last.html",
    "revision": "fcf974630135adafe4f9afa11523ee29"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "bc8b24c79fceda2f8a7c8a094a3da676"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6c4dc42a6e6745f96d678e4a1c2bdcbf"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "01bc3a2952379db44553092cc06b627b"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "08b9965bc90127ae3e5a3d5c2f78fed7"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "0742d8124626488b63d5190f7cd077ee"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "07c46f44a72f0afbdce46bd6bbb4091c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "3ad533bd33c0d782b8ed62d7229f7ea8"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d3a59a271755a3f43660613eb05e3d1f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8f3a1caee35ba477d1effbda0341ac97"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "f70d1bdcaaac15a283c820bf552dd0cd"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "c7494ec83f6440ae90353b0297e0603b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e0e0d080413f20d9ede881bfd2a74813"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "58c5c8497baaadabea5c3e7b722d64d8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "97dc486206388bb5a88e55a38ed0488f"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f6b3868b771f21b5c26ebdee2c8cf849"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "435a2d5274fc21d7e9c2affdd3914c19"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "98b8a66bf871f5957e10132ac9f76600"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "0f5e1a39a826bb137cb1e5f880b67e04"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "f859e84dd49deab896a36df43d1823f1"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "566de5d7c60afc2776cbfa4f0c94c2b1"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "5c6a1fefd7bcf7bdf1e5693d8be40e40"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "a4d8a152992a967de8002af7c40cdc87"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "62c076d5c390316d02d14f1cef6c49a6"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "d95a30360c90f2d4806fc63a63a96df7"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "e9b88ba0bc6e182a3849f50432651e69"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "b1daeddb5b21949bb0b3d57de80358ea"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "12174088cc2de34df6b0895084287d5f"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "92baac454e1126146bc1ed975b77a17f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "bc744b160e1076b412d634ac839fae08"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "543a76a1488c590c90424c783d655d98"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "48be4ebc5197203b8d0160ccb5a5e872"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f10025064857c9f35224a4f91365cbc1"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "6ac94524426665fb40f0bd1af6a2a840"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "cb3677209152d4276acb439dc62fd74a"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "cf4a9e0f33ca490c703befd888cf7e21"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "25327ea33e4ad5405188b92e48e0949d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e6ebad21d69fc60d851c54d622c80ca1"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "f378855223fc55bebcad17488ede6411"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "9aebb15fd17e19c6e91b6e125e85c786"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "47faaf804ecb6396a2396b67272775b0"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "e1356ce2bbd2881ca121e5dfa0655e40"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f8f5dee2a67117e590f4eab085c3382e"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b73d943c333f1c14a86336a7d7870db8"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9e97054182c2522e19ad95e297f720cd"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "72dd3c1ba7f40032b6a532ccbb59f65b"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "58fb8ee62b8f3973f32b95a9686b7969"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "50def7edeb6b05fd4432aaaa50d1cb70"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "39a2cd92547be958b20ab7810f278940"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "419c3cad109e41ba9e9e410c1fa993a8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a2610bdf61abd4b8440cb1c67bd4e414"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6050b0d1308ea666bef18a639edeaeec"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e7e7702369d48679900939f8d2f676d7"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "443edbe94b5b13a17f45e752600f91de"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "93ddd485c2fa8d1e4c89db4423063e74"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f278871c7793c974c7f76cc87632ac78"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "90b8b33a2ace6a5b773559bb05d5e7e8"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e5af5fb842ea9f6629a03f67220cab01"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "8b18fdc5c2f332418528cf9b4cdcbe83"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "bcfb79911427b88492e07dd43e72ce0c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b64724ec30b6f917816291ee5c978b96"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "0fcde8891398c9dd52b59f1346a0c308"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "993077fb6062888ff8359232c26b5353"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "cba8ad00d857dd909f008bbae9fde0dd"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "8f94f9b38fb61ca936c8938e7d610961"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "f29cf41602fe5be648a3236b941164fb"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "786fff78241686078f4fc15e8cf1c62d"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "fe32bda58e6e91d89492b440d417b232"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "db75da1481f518c868fabbd11921495e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "26bd85f31ec3fced462bb04a39d1ec56"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "806283082d479cd9646bcc0fe7268a79"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e5a9aa0ea0004ead5a36735ddd04d46b"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "969d078b2a3f3189ac67e300298da425"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "b51a8968d03c6f72d953277bd33db8b8"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e7b4b9bfab10871c6b87372973dd22a1"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "95ab3b9a19bd6f03907072cd8012bbbf"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "0a55da1c37b8d5e74351497b261f7802"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6f717bb960f525437f1badacc995e4ad"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "28c10d5c4e9320687cab85daf18dde8e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a4f08af740ba98ab13487def536bc5d6"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "e745b83c6baa82211b2b659772a6d62e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "4a2ada3b7787881ca7d5edf32ede6021"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "1501baaac6d0f075c8c35a28a1f3ca6d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5700081107ac8fd24fe8de3b97da3767"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "146d9eef89cecba727e4fc06b9d6cf51"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "5533748ca7b8b5d417b1bb262e5d8b0d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "9ced61c3761d9b424f9f17ddbbe22ce2"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7cce0b8fa4116fcd94730ea9e7323c91"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "92ef013c9460ace5c62d30686acc6b97"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "d2ad04e1215e47d0ccade8c3e274ced1"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b95e29eab7b550efdee24904ee81341a"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9af4f2d67aa6848a39320ef7de01804d"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b7ba9eb3c68d0cd59b383c022f9891a2"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "0925254b1798adf2802639efcfcb957b"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "9d1dc4d3c7c55e476107ce6b1d336542"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "fb08d30e3bfd75aabbdb265b7f7ed5c2"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "a04630312f79765285beab9971b0a1f3"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "f2398204ca02db9efe068966c2dc5553"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4b48190c2c45fbc9d5b811f7d52d58b3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d128e366759e2ddf3f46ac8a0915ee62"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "1047722f41be654e3b5fc2d86e972ad8"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "55a7ef9faf1326f31e132488fdb68e36"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "bf2b7f057279e5bee57c4caaea1d5af3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b9ec2f1d553faa1cc1e6158fd24b0c22"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "b1be932794575dc5b4f8506e7dc2d5fa"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "faee0d8dd7761ab54c580f61d5bbd227"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d761ef44d7924c3d27df85c3a709f4d2"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f02a2c7b51be09f0329e13018c4ce731"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e959269fb9a4e21d79767c9ad9c2c386"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "6296e1fec4e0737616e9b3e772024623"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7c3f4c28e15a117ad82f5d8697a1bbc3"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "abf07ac76b6e8f70f97a8e9087c8098a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b7bfec040000aa8fb51dadbf4d556d4e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "171317f137a4bd176dcd9dd2ca293a7f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e54a58117890a52af2069e9b3a644391"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "3c6a2a062ccd6e0435e929ce58b579c3"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "002c7f86ef4a092a7886136255bed460"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "10a736d8f84e5373d00f26319bfc6e85"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4c56769b0b438aba3f72a4a646350de9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "297acc44a9bf2bacc8cd633d8b2f7505"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "28d68af8d9adec60afa11f1aab88f675"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c5f78bab1d4bb18384b35ce5fc12c80d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "4e055b97f6100cc7130159d20094ac24"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "8a6a18142eeb49fa08fbc69ac4a0b342"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "58a4d3dc420ce8cee682107780dd0fb3"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "61eb29d8a6da82241e7ab62839d8617a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "0881877f8023c9c51362472cc467e123"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d5233b47051df97200426757d88e6753"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3dfd0e3277d63f40e9d8ffb32021176c"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "31548db61cd3794e3ea79150fafaf1a4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d558aaf091e41627dc987392f149400f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2073e567b1bc8da847dc168007f03442"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "716a77d2143ab6fa09d1f1f02267f6e0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "48a658c8c84b83840af773ea973047d9"
  },
  {
    "url": "tag/index.html",
    "revision": "64944ea9fcdd37d0092c41b5fa143e59"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "77daf3a5add780993545ff7e20943468"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c8de2d04ec6c1e41490662f4bf91c30d"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "71eeaa8acdc26651590afc649695cbd4"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "d2e8bdaaadbd2b492246ba25650077a9"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ab17c8b36f2f066a080aa096af0beb77"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "178a39c9d5c320bd8909c5af7cacb9d7"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5492304da21543686705946f072b866c"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "db26118d5da45b04bb425736145a263a"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "0befa953de4691eef148cabff579df17"
  },
  {
    "url": "tag/json/index.html",
    "revision": "bb3cc33241d57219451c05dfe1d09917"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e097e653daa52658539e535a845a697d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f9b077c12373de34a14a7bf0da480d65"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b8f179816a44c74cef6616ffe2cefd87"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "f4e0f5fbcb2a559caf2ec68357264d63"
  },
  {
    "url": "tag/read/index.html",
    "revision": "358b1528791dcb122296026e16ce7460"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "16d3d32c44e132747995bdcbd71b7681"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "63f872a49af2bc2123abf114d3d185e5"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "38b43b7d8d9b596ec30b0c8a7a0236ba"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e9b6f9c2e1bc78ba0ce794b2b6ce0b0f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "bee0a7dd64bcecd72c655bd72b5ac432"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "5bb3a6ceb3dae7ce081db3d80a024c12"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1d14f32043469eb96b5538c759dd86a1"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "058ecc4011f9a0c2b935d42404cc15ab"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fb395cab107a5e18d1ac0ded598f6800"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "be290226e7e6bf81b1b1967cef0d6a19"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "563567bd52ca8e1d597e1ce353f14c51"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "01f151c8697f0b5dd3f661d842f5536f"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "f7418dc3e7e2140fd935a02c92333a69"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "256e5692ffc430d520900ade94461bc2"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "4612aa82aacc20c48082695b1af48de8"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7a9e887630ed32b8148d087a657c38cf"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "369e6380e3811bfcdebed81907d7d0f9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6ff8c02dd54ad9528415c15817911182"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9dc8be2f162bffe57f870dd34035fe67"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e3358e0f80f183a66681449051982916"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a69299964f9fb1bd818d347b5f18016d"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "559393dd8235c136dcd90fb1a3336964"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "12674f032da1ba3457360062c35e788b"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "31dd667d96ec7bf045751bbf22a17d00"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "22305511e4df2577163340eed110709a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4c1cb10bdd6a3b8bc678bfaa4a47f33d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "fed96bb784ef236429fd42c4a7e7bb0a"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6d9e83b2f120d27d53bef20122ca5497"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "d05ed9dbf16ece73857d71deb491c6a4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0dd161b295119b3b4c239cd244d3ad91"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6567302d3bce306d45ccac620511268f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "445d09ac151d6dbf1f161782143e8211"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "0fe8b288b76a7d01ef8166bcbbab8226"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d8169c5f1ed81d6448fcf6693341261e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f5d1a5ac53f3c766d25149fe59b99d20"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "22a7552db4409746664706272f69a986"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2047b9c974064af788ba2f0a5bbc833c"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "c8ede58a99093b930f7e8547f3dc8a8d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "45926a9291090d2f893f775bdf1bfc70"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7fed333326bba4f5bb640434f8644c80"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "886cd3e6398f03ab77213701f6731524"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c568295fd8cfcd9c10cb946cf50477bd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "23cb09b70d2bffa3d753de6ef1166313"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0804790151e4e1f2c9c593be2405eccb"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "025f1d224e00e412c286890b2cbb31d4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "293609c8bc931b2f57d033d018438185"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "c6445a40531036e8ddd5354494965937"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "ccf3b582e9c02f284e3c533ebe7ebcb1"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "d969eb1ab233ce38d217d29530e13fc2"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "ffd6d5c66157dbb75a298c1144eda1db"
  },
  {
    "url": "timeline/index.html",
    "revision": "833cd656a567f0ef16fb19ae93a4c03c"
  },
  {
    "url": "tools/docsify.html",
    "revision": "e496cdabb1e4e4eebc964ba136f08a9e"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "04a50cc63b7af4b097187c178f6cb696"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "5b227bf43afeb10f44f8c0c53e601505"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "9a4882ce9074042092b360b487196d3d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "fde17af8cbcaadca96d635d8bdfdb84f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "203fdedc31bfe353bf27b01ba1f3e991"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "de03c881970aa62c0f360c1db0cefe76"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f2ae28bc24a0331703c797502a9473e4"
  },
  {
    "url": "tools/note/index.html",
    "revision": "914693dc3fc8cdd9a16f9eaa35649ead"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "6fe4242aaf9d77d1439f54821026b5de"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "57139082dcc6212d77a2b48c5f715c4e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "b5f590657b3316db69945462782516d0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f9114c889bfcab1bf9939fcce6b77a96"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "eeda65db336a69b01f343c2781547979"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "00c2ef46499afb3a72c5a3291211e37b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "3eb65b2fce90b45404bb42e592597af7"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "69a662addd2312430bb783b2c6f9bec3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5fe1005ad93dc24a6dc86048e2284790"
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
