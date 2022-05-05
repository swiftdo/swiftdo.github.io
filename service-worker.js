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
    "revision": "f1e495214f339c63b8995717809df6b3"
  },
  {
    "url": "about/app/index.html",
    "revision": "0d433650153c87519c629c5632795e82"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "54e1528dd046a2142177c23c7e2d5bad"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b49a80d06b673e3c92e3ec2b31e36cea"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "ccd89ffa134fd03bb6c4c7ca975e5f57"
  },
  {
    "url": "about/index/index.html",
    "revision": "45c7c41dbac32872f05fde8c80418595"
  },
  {
    "url": "ai/index.html",
    "revision": "aa4689bacc51479c5a708cbd00a40d05"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "88ab4358105851547be66d16ce13388f"
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
    "url": "assets/js/103.f5218eb0.js",
    "revision": "63df5a806a51123bf9c91a221e480f1d"
  },
  {
    "url": "assets/js/104.53192936.js",
    "revision": "98621b73793f250333fc1d870a5ff78f"
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
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
  },
  {
    "url": "assets/js/120.ec838453.js",
    "revision": "a795fa998fa8bbd4c3ee7cd97c4875aa"
  },
  {
    "url": "assets/js/121.edfeab37.js",
    "revision": "febee3b73cab86e03f3688991eda6eb2"
  },
  {
    "url": "assets/js/122.f61ca852.js",
    "revision": "5e6a2045794c54aa594d19ae2cd8d279"
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
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
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
    "url": "assets/js/139.729b4370.js",
    "revision": "19bf8d81e75bddacd4c94e70c07b20bf"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.62adfd40.js",
    "revision": "755e7333b186e7bcbd07be04c3b13863"
  },
  {
    "url": "assets/js/141.4574335e.js",
    "revision": "de23572ff0f19634f38b53e4c20446e4"
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
    "url": "assets/js/147.1aeaf3e3.js",
    "revision": "9b93060db0da28a4b9d538ba8d701559"
  },
  {
    "url": "assets/js/148.eefb27bb.js",
    "revision": "2439b2d885a8fb46bda6550dc2fb1d43"
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
    "url": "assets/js/154.38d1c43b.js",
    "revision": "edec6d3f0d13dddd17c8516827ccf64f"
  },
  {
    "url": "assets/js/155.189e5bd5.js",
    "revision": "130180fb4fd0c7d36ee073b8522df2e2"
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
    "url": "assets/js/163.7a8dbb4d.js",
    "revision": "5ac28c57dfea3ddc97cbfb35a7f5dd79"
  },
  {
    "url": "assets/js/164.98e312b5.js",
    "revision": "a0afb60b39608444467501c9e498e7d8"
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
    "url": "assets/js/184.82eb32a6.js",
    "revision": "52ff888545dc61fa1164b80b7f5dac20"
  },
  {
    "url": "assets/js/185.2668d1a6.js",
    "revision": "8e8ac43bb4bbf505cfc021b26388c1c4"
  },
  {
    "url": "assets/js/186.229bd93a.js",
    "revision": "12ea0353d07be9d8896ae4ae6119b4e7"
  },
  {
    "url": "assets/js/187.23af9ee3.js",
    "revision": "4326d0e11fc439c5eda5289c30cac06d"
  },
  {
    "url": "assets/js/188.0e4281e1.js",
    "revision": "2775625dc1533bf22b8056331cc2e4ab"
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
    "url": "assets/js/214.25ffd310.js",
    "revision": "10d22f1a974b3a4450b18c6500e9f096"
  },
  {
    "url": "assets/js/215.654858fe.js",
    "revision": "92437d83a590de2d817aa0b64f3c12cb"
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
    "url": "assets/js/219.6e28ad3b.js",
    "revision": "2e3eb4e875579917c65c0fb129b62b0b"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.01ccb7c8.js",
    "revision": "6550acb3547f64762b08e96892e7c18a"
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
    "url": "assets/js/234.5d5e911b.js",
    "revision": "82d073f7a379349fa1195d904db285cc"
  },
  {
    "url": "assets/js/235.dddffb24.js",
    "revision": "568b5aa9b18ffcaeb38cf4381ebd0c75"
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
    "url": "assets/js/244.caab1e7c.js",
    "revision": "3de13add2f096e110ba0e1d1f6cde6ed"
  },
  {
    "url": "assets/js/245.142441c8.js",
    "revision": "c0c4391ca4a9971cbbb910d4e0287342"
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
    "url": "assets/js/249.75e1229c.js",
    "revision": "54ae77d6eb287212b5781b7879a09acf"
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
    "url": "assets/js/49.1a57e550.js",
    "revision": "ad2f20cf4ca11738baeed51392493854"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.806154f6.js",
    "revision": "655db1b3744a890cbe1b5d8241ec49ba"
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
    "url": "assets/js/76.ca9fc58e.js",
    "revision": "253b80d21e9173c071e3b4ada7437d72"
  },
  {
    "url": "assets/js/77.fbb0d65b.js",
    "revision": "9fb708902a75a7d2c4b27af13b75e5a2"
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
    "url": "assets/js/81.e0e15f37.js",
    "revision": "855fd5ab58814c710b483793faf6a350"
  },
  {
    "url": "assets/js/82.ab24a0e3.js",
    "revision": "4dca81eff8c69bafdd78b5de730f44d0"
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
    "url": "assets/js/98.48aa5dff.js",
    "revision": "7eac0daa9d01f6a61a4965733aefbb8c"
  },
  {
    "url": "assets/js/99.dbee4e32.js",
    "revision": "0af4ff36b78f00ce0e99fdc70b0a8906"
  },
  {
    "url": "assets/js/app.653f7fa8.js",
    "revision": "4b162f5d28556a40731a0bd00dd34304"
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
    "revision": "1453c922da10f6940d492d76c9994c12"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6d45b6e2b37b678c85c79f357af8c765"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "09780745529afac80446e2c0457c882a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c6465bbfaae43cab9ab5f67d054b7d30"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ce14a3cedc1cdddb38834b587f6b730e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "794dbc19af6c7bb78aeac6cffa1321a3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "7028a9a7c96c347d12717704d8d80b59"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "759cacefc73aee6b0100405f8011a206"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4ee151dd86e7fa8ee5c2c0fc5ce2467d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "467bbd522aca6d06907330b9b71a4114"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4f018b2a35cfd8ef83b100aecf20d8d7"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c74740df0f206427ec6fd9c8bd0df3c6"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "902983545117a81bd54d98ab8fe220be"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "9bd401c7a56c408c61d29990cefa4dc1"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "b89dba084be7f7f9ab8b3049e9356f32"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "0a72d5a750d089a84c858c38023d9b58"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "d2462203712d444af935e3f1385cfed2"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "fecb74d588661626eae0b8855832fe75"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "b2d51326a2f0c1af1dadf9d1fc4aa019"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f868a5ea4cfcf06f56d6c0c9fac44f20"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "2cfc0588afb59b7577365f5e965398b2"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "02923a590b5c3a86106bfd34a700ec11"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "165ff4bc3b5231a2dcb8385058b039cc"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "e3adad9dc2c9048270f951591fdb156c"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "271a8c27a996737581f4a1f5d98e48c2"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "cbfeb9dce4b727530c83d3ce4fc03c36"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "f9210aaf18da285cae76c9c48d85764c"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "c24be94b6817f0621bc945a1aacb24a0"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "bdcc71e42556db45d1cfc71e5b9f711e"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "4c56b92cf5b32be32fc0ce69b3c509e0"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "6d3b2cde5441e6a0eff990ceef08394a"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "97f9cf57958de940840ab9e7bb9d07cf"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "0e75562425e7ad6e9e3af1367efe8ed5"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "4a4c404e610f5f8e3aef8c169df04dd3"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "f4f51afb92f72a681f7b80d8aa8ab01f"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f90c59f7cda1c4589b78c2ba41e3c1c1"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f007677c2b8262a97317c9fc16dfeda0"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "2d9ae8e48e3cc531c785c19e5b22693c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "7b88122329f68e1ae8aacdf9eb122806"
  },
  {
    "url": "basis/os/index.html",
    "revision": "902dbd3953ae2c3153c8a39b80a6fe6d"
  },
  {
    "url": "book/index.html",
    "revision": "8652a6bc2f2e399ad08937ee81b8381c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ea0d98b4e272f611118e26cafb2479b2"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "d7460801c8c7bfb3264502a6e6512dfb"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "6cb200a37c989b41bbefd177fce630f6"
  },
  {
    "url": "c/audio/index.html",
    "revision": "5ff297ceece2568712d7b5af926216f6"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "78b79bf2bd47e95c5a8ed7c037f3c65d"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "2fc3b61303eaccc59001b4e0fc14d14e"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "3a748c55ef17e172c807d408411e9a87"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "67ae47d5a11ead96c15c7bf90637a17a"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a10001d5649f110e4ac200f6821ff4f5"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "fecea4513c862c0cf66133b52c745905"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "dfae3efe3b00027bfdcd79d2778d496b"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "73209ecbbea01346e15ee9a94fc9767e"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "5527bcedfccea7081d1bc17326f582f5"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "e1e7e0f13260cf6ce0b174400b111d31"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "ac60ce002a06f0d5e24fc0763085ac93"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "706a9a07f7d23ba4b4cd2d1f8c897708"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "5188ee2a048990d7b17c457ded9ea358"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a9f2900de200ef35cd09f68840e13e1f"
  },
  {
    "url": "c/program/index.html",
    "revision": "5ab9c25508d606fb27bd43ec0da47e18"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "35adb4316e3ad0f6bd3fc01bd0b59f54"
  },
  {
    "url": "categories/index.html",
    "revision": "f0b1fa4324aa8600a10e1d0e6a3766b6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b71ebc53e46482f37b69530d6cf9697e"
  },
  {
    "url": "figma/index.html",
    "revision": "9a2ee41ee56d9d3f7e3582a7da713b70"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "e616b300b8f6748302730deb02874de0"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "31fa324f4a729edf589658897802d862"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "3bb732b13802347c751f8a778a5b21d2"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "d0de0bdfe52446cb3503847a32f57b76"
  },
  {
    "url": "flutter/index.html",
    "revision": "10ab872179cbb93fa560c1ebad0f7071"
  },
  {
    "url": "flutter/point.html",
    "revision": "ceb703c0b9d65792240a7aa010f82e87"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "be2e397ffadfe14fcb2840bc4dc214f5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d8870196b872eb7f120f579d7f8427d3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1f3edecbd8400d21bfc45ca8ff00d3a9"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ddbfba1df5448815ad3a0010df07ed65"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "9f98af97f5c901d63631780eeeddd6bd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e06d019973f34e3a5496bd12ea53c2cd"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "fd2bab5aa02eefb87eb6a48d08ea5b3c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "cf4c02926086ef4a3d42ce3733d77920"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d6ed976cc1e03fdda151ab189206dd46"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "bb1c2dc79dcec79097352967532d4715"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "29fbe02cb7b92e7c3074fe90c6778c00"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "27ad57ed2d7c0c4233a73f69f9a78265"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0959b16e7fe4b1d0ea4d8cf904c75a02"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e04dc9d7ab7654fc233d8ed190c7ef8a"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "88c16c323d36241ecf6d80880dc80216"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d57070ce04c250b1c481a18305a0eddf"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f01da0ca098b17bfa7e3ebf8cd66fe8b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "ff57ed771f570fecf0de7131e5e4fbfc"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "a7e97423c51994ad4f5243b095a24129"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "90c6098431571670e105726728c21536"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "fa61c7dbef35debeff7e951526ffb83f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a040c32508a1fff2d5745d9c5c8e1d75"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "afbd045dede420d22dce0a77de3a6347"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a817392830363f0640a3ec3bd35de2d8"
  },
  {
    "url": "haskell/index.html",
    "revision": "a2c8012087fb0552c3f5709a3251a261"
  },
  {
    "url": "index.html",
    "revision": "6c6eb38014e0a80062498b459646fd3c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "21555cf2a4824d851a0118ca13986119"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "2b1781823e42b1821893be376ae722bf"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "5f23541cacf8f0874419c68d1bb83bf9"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "9300be7015ad256e021968eeee6304e6"
  },
  {
    "url": "python/index.html",
    "revision": "e6930da6e6d44ea52e43c3cafc6907d3"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "4467ba1f4e55baa1c2d7bd4db32f278d"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "96ebcf8994ea80eb899195bdc20db28d"
  },
  {
    "url": "python/python-file.html",
    "revision": "da699e8d76eedce2768b5c8f090f0e1e"
  },
  {
    "url": "python/python-function.html",
    "revision": "95cb8220fc142bba3dea521828c81537"
  },
  {
    "url": "python/python-generator.html",
    "revision": "090c07dfd1f990474013bcd8eca7e98b"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "6a426c146ace1ab41c73ab10950a6a99"
  },
  {
    "url": "python/python-module.html",
    "revision": "068a99732c20483e81d455520b2551b3"
  },
  {
    "url": "python/python-string.html",
    "revision": "f2dacc14ce2f33673bc74f783a7879f3"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "5f1be044c018b02f9db2e450e99d99be"
  },
  {
    "url": "read/index.html",
    "revision": "fced030b39b7fa8b13368eff11ad61a7"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "36cbaf824a3dc6066d5d2f7821872fc6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "e1bb8101013f131170ba394fb2f18d55"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b580fa9868222264efbdca9552ffc28e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "82dc12060d7a3a18e2bc999f7c1c274b"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "d52bffa615d947976f0d42ab31d7e91e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "4c8d50a89964c908c222fdadd2dba6a3"
  },
  {
    "url": "swift/better/index.html",
    "revision": "7f89f5b67d7366244ffa009f898a1898"
  },
  {
    "url": "swift/better/last.html",
    "revision": "2c700b2f1abf6c16ec6202f76c743030"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "271d7e910d3c45a2a8a93867b0e9119a"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "ef89d3517505260303ca1a9eb26b88cd"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "c6e31868616efbe1f2555db36be92560"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "5f64eb73bbbebceb44d93d26400d7e58"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "fc0de133e1c44209ea7825c972c65f4f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ac9eb8042c3cd5f085b76f723f7d5872"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "f69cd65c46215f953a9c5a05da6de176"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "28a88f7d117c76879d4648e7575a8cea"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "914586dc82f8f197e445e028adc2d4da"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "5265e857e75c949f46e3b36b78c7c2ac"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "f2047fc178d38e98cb528c07c7df0835"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "50fd47f95021781207817e19a1cf2efb"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "077b237354f4ffc78b7f4cbe28890543"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4b7390bb189cbd57e35a1043a7a627d5"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "4cfa9539a5f48186de3d9089ecb99e6f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "7f6095f5929d59d7b96ac801cf429726"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "8995fdff0ea83485805ce92f13d3f759"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "ff86cccb4ecbdee578f42b630e7cac90"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "aa3d217e3cec13c3873712408ad8ffb3"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "8052e0138181dfa3611a2f7c095c67a0"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "0e1b705cbbfe033df2a3954abd602b60"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "543759bcb32bec47da1ac30e6ab126e3"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "6a8af1b34e3af11b8b23acbbddd78ecf"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "2d47902b8e3d21686cb13c86c9d7d6d0"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "f6a5c76acabad2068bbbe205b7350c70"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "8da89c739d79fc0015d442c6afd02511"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "2a20eb86c6487857a01e73d6e7b0b6fd"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "56b7d0c3a0eb909f35d87935d32ba025"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "b38c99be532587b266b270635a572d68"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "08c81b1c4ec78ce2750fbc8127233dea"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "d420d9c937ae817f6e2b33f9a244e6d7"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "555af0de60c2450f6193c180e48bfbc8"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "eeba8358d7df1a10f5ec16b5bc1b48cd"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "92b406596c589f3d9a660d16f87a4554"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "36f8ceb998caa93d7ff1d2d7e8498f22"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "d76ec8bf612a83aa05c1da10019f4c58"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "a45bd3c3b742949599df20d0a25b45f0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "35338e4b39aaac811833ea77aa4fb8b3"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "919ccb34dd684cd66622fc73112faf27"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "09d076f82b39b03f7e821f59888c3b67"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "355065e3344f1709e374e2bb3ee826ad"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "8cdd0b14af3714e917c86db96f8acbf4"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "c4c947f0a57b4e70db4f1751033119f0"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "5e618458d1b50e7c27e93aaf269d9d43"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "13a568e13980d733e221a240c5701ce0"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "cd42ac7fdfd53f69805f030466daa782"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "7c53a7b06b1da187a5177999263b98fc"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "9944b6a1f94965e8c53e8d1372b1b09f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "5b0b7a33a1a75442a6b76ac1f9745c37"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9e083830926ecd59d97f6da083d36314"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "35d432547b5abd3a71180546f95c5d8b"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e9689be9db06e9b3f909d4ac754009de"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "7799c9a2b3e30127c919bbd0fe584cbf"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "8c6735dc59e13ab0c3fee0631cc628db"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "d48935684f52654d91168bffa2ca53bf"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "224cda6b9805e6305e58be3d19c2cf46"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "7112dcb88cd386c64d6fa257b1c3f504"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "40534b64ce8ca232a9c62ccb54a8c9fc"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "5ad1d0e02e784f0ccee7f193dd424bc4"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5607206ab58c78b9a75819c9cd533d14"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e66a623eb7132359ad7bfa52054e197b"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "581b249e96ed55eb2f7dd90c536d8371"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "5ec7751449f1c2faf1328d50f5e12bec"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "a259374ee89697d31f1729bd8438789a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "9f3e97f004aa2fc4b8f6301f74d3ea04"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "066b2c904d3ff80dcdec6de8f95c7be7"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3a99e641786ae8ea14c4ed4f90dd0e77"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "942194140d851d0cfc1a9be3549a129e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "31ee29b58d2961bc4b3a463584fad82a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "3661321d80bc10efd2f044195e8081c9"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "ef58402f98328a1776e1703c84be94e2"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "841cfbced6f2ddb8f6ebff5df24e7474"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "a571e2565ceac3751b6240ec08dd735b"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "07342487979a531565d10afe94a4be0d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "b31540bf3a6d2bdbfe66d265fbb24d86"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "df4da953821461d0e83b5859878d2aed"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "8f276da6e5cfacdb7a96bd7ba1ca91eb"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "372d1f43b1520c3fe29e0da45ac33cac"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "803fd7048569d7f60465efac6011f77b"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "7631aa9d90a38895e781d67e0694833d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "78c7006e725817b796a57e4b7b6fcc2a"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "f75ddbc7de444250092118ff649bd898"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "233581c48339bc2d74047c742ca0e382"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "78f24670fab3c16dd8ff661bd74d13b9"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "5a117aa9433d0ddd67bf2f09e50f4f12"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f220a47d79007cfe67fdb45e227422cc"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "0cc1a483c85f4a65fd86e238d98a9255"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "df0e00649386113faabb3d8a2f0b0b82"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "79bae233a085ebf53a6e91415b0f7220"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "4b4b1342f91b7058248ab55e68f6e33d"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9cf19be2a2fca996173140d00cf8c189"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "8d49323d0f93a8a61e2a9ecb507ddef7"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "fe57cb501cef1a0385902ea56e245c34"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8f8580e4147fb1b6765b5317dab89a32"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "77fd00745e7aa475d5b0b24918362853"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "478df39ea9dfd7d4362206ab3f6d984a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "dbf53e02b3d33fbce982bd4b93f92eea"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "bfe851af9632755ad8575d68503a2f52"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1060b0fb97b5c69d9724b183ab4777af"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b66996d9fe822df8264727f5acc2c318"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "2239a919ee5d6dcfae30435e0b06f9b8"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "a492017ac0ec50ecb89a1341b8b1f490"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "335ab357242cb46a1c6b22295087aedd"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "2ba32f76ae0791776d8e1f55ba252a7e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "475d52530260cf2776e8b4bbd27058ed"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "89594a77f86b7e108556bb9109c3fb26"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "23f52c453b1eb8e6ffe22e40351a8fff"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "fb118bb4eaa91311db518cd7cae81807"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c40b53e4e487084e16b6311c924d3efe"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f323dcf92db6fc83d44075cb13201c0e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "40993c17219a88c27c5b5d42002f0503"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "99b43fa6aac757b32795254ea598db88"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "bd75351dc5c0fca18094a96cd6fcbb57"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "2870ec2b50379288dffdbe1795feb7cc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "4b77efacdcf4287bf62ed0bd498dcb0c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "9540bb98da72da734b17f7bcc7dd59a4"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "901969cea24ffd9412c7ee16631fb776"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "55700f3fe8813c6552fbb8028157556d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "412af78d98f93cdab49c256765e13e14"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "195445e78dffbe152fe42070af908e86"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "12822919f84a38b89bf4965d73c3fbe6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7facc9fe3ed4c3ab1d2a2bb64a2f8e6c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c9259f5944e1976b52e4aefdba751705"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "e3a817db8ba71f04be090f49070ebf87"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "fb7d03b702ac6f836ce3acf08c148de1"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "a02b92166e9585a44a83de3e9cd7279d"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c179af1d266a02bb34e72f2f8e76e5c7"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "73b9990234dcfcdf34ff64d979ca5946"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "0ce5438c050efd2ed626a380f5b8547d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b28349305bf16adf2e4cd58178f68ee1"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2e3de0416a0c91e0c398156a3861b38f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "bec18c6879c5e3056a282867b2523d08"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ce806e6d96aeaa9c7bfff073dbd5aa41"
  },
  {
    "url": "tag/index.html",
    "revision": "714b6bc5bc59c64f56e314d521994c48"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "14d86b417cbae5fd7c6011b0218feb5a"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "14ae808e5ffb6db9e82fe0e5d828a5e9"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "32cc1c5480d98d3ebbf56083e82b2401"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e7d7f4b60f8229ec12c54d1111a26698"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "be869105c9a3ee305fc6118c075e0ccb"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "5e2eff3541409e5c75168d4119f66b6e"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "6c0958514f1ee77cf2f3dc5cc7af503f"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "530b0e0978d4e4760f3e98b52909ff4e"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "220f41c9ecbd7df0d9b90dc6af8e9a87"
  },
  {
    "url": "tag/json/index.html",
    "revision": "120a9952ae90f700c017ef85910793ff"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "64b1d57a82e1fcedf7ed1af81d91d593"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "0e932ba608d65c61bb20cb1dcbe0e1bf"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cfc764807ad125c93473ce25c2ecd48e"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "f3fa8ecde4fa31d69a384ae1d50d40fb"
  },
  {
    "url": "tag/read/index.html",
    "revision": "26583e642236e97a36efa39432fad5e7"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "85574528db1e6b1d38408d4df68cf4ae"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "00dc5a89781b77270042cc34c16acd06"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8823216b497b9dad6f29749104fb7369"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "bce5264be74e2abe4ac9f3fdac4fbdf9"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "02230545d3f09a8de5bdd7ce15056685"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "e5cda1de2f52d68fdc547918a22eec35"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "d3963bf028ba3fbb3fc599304a8ab46c"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "642b2ad9d264467cc0f527deec630f04"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "505c185d58f678880b8dca2307859e59"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "452794c614026b9900cc0732f96f8105"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e968daf53e68c0f8075f15748efd0478"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "0431837df576d93221f7bde6cf250754"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "d88e2272c08ef1d9ea4be14cbfcc6585"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "82e31e0c04be324c67e9e8348983d4f4"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a1cdf2867ce7ab61a6f9903d3f1c6afd"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "560e5841e7517d6b63ee4e2dd6402a70"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "b302f1af5ec9c521bcfe9978220afc92"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0eb387a8b4d46282804c220aeb478d9d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "51340dfb72690d256fd6ae987fb86ee3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c2b7a13c83d951458091d0495d84bfeb"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a99336a9acd6fceffbe0245ef5148e71"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "c2e89cc14483ca18b1f34aad912dcdb9"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "25469b20fbc48903b2abcaf86b7ecc60"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "27dbdaf5686e6b1f4035f82e87483d75"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "0f4ceaac8b5098edda2dfc90ebf173e2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "3e3000580159d918ec5224bbb0995f7e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f8abcd05b3d103a1ec9ab5ee516173e0"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "53e42020e85d5755d7bfcc82247808c0"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "db27f33d327375dfed313abe7609489b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "4f4870146fef4262a86b76dc6c34e5c8"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "24c41196e77fbc4abdb8a351d69f00dd"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "cea639a4d69fcade5d4945729441a388"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "44f9a15cdf02aa8725506d2018bd8022"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7af657c79bd4a63227dd8835c1efcc92"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7c7773e3accf57c7377ba4bbbf92e423"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e6f26859a054a359a30cd09b407d400f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "51089c27c732d7ba2103907c654531d4"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "960cfd3973997c82c26b75f7179b0e8a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9703ccb925e54bf68047ec591e6ded9f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0b03dc2c49d886b64ea97042d647ba56"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "e1723f540a31cc9a84f62edb0025c551"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "615ec336a9c5933d0708d9a3bab6b018"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e9e3bc89e4a7a2a2448c38d918fea505"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "426696f620a7ecfdb5e038fef350021b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "085c72573504061ad2205d45cf5f0f26"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "745d813436a53b7dbbdc9fb4c3d18a02"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "2180e5ea2d5ee8546d7bb266cdae614f"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "43c8812d47e54b9e959c8776b1a5f3da"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "5c67cb1b302ca266394033c7db88ef5a"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "608cac7a852ae698aaaa770537cec77a"
  },
  {
    "url": "timeline/index.html",
    "revision": "0226b2be38e47392060195b2aa63bdd4"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5d10d590bbe00fcedc9463831ffd2c3f"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "45a1f4220ccc159235bacdfb616ec297"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "454cb0e5d5f43dc33a49a56562050efc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2341f82a05e5495b1da734d474f9b0c7"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "42997c8c097505fa6dc8a549be9cecd0"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "eb23a8a78f586de93572e56299df76c5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "bd989e25ba884737bbfe22affc9fcd75"
  },
  {
    "url": "tools/note/index.html",
    "revision": "d8e54ad73fd13231fd049e4122e828e5"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "97e79deec4f6de18c95d3a0853abcff9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "76be4a7b180608009c4eda0496e608d2"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8cbc52cdd0e7352f751424189c26a776"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "38594c27b3aa9062d8663ffab6a8996f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "95f06013f57ae38198e5e509bb278979"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8eee025c1f9eb702cb25f9ceb98fa22e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "80379715f87ed03681a57ad802531247"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "91e1e70c0c1f4e51c022e73bad9354d0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "df9a6be5d47ff0cae96c2f8cdc0f2d40"
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
