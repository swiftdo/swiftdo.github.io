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
    "revision": "284acaf729e124490b538b76582f37aa"
  },
  {
    "url": "about/app/index.html",
    "revision": "598e760afc3cd75f9c0139abd369f8ea"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "9e514f7f9d49dfe629eaa4bea3480c0f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "63d0ffaa71c90e59cf8fe087e73ed6f9"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "180ebd8a90124b4b0a282775d2333e96"
  },
  {
    "url": "about/index/index.html",
    "revision": "0f2a0d04fff1224ac1584310978f6e13"
  },
  {
    "url": "ai/index.html",
    "revision": "0ceb04fd4704293458115dc738e23770"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "5d5a1f558e6d837557a46c6780e7f82a"
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
    "url": "assets/js/101.48328d51.js",
    "revision": "16d0f2d0d03c40cac19eaba6b15d12df"
  },
  {
    "url": "assets/js/102.d654ed34.js",
    "revision": "b14a282d47a16d3ddfd8ca9a0deeeb4b"
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
    "url": "assets/js/121.20ba89f3.js",
    "revision": "b10941fdd2879948f46db6f9d3777d1b"
  },
  {
    "url": "assets/js/122.8e8ebb48.js",
    "revision": "7e926b706f563186178628e36d868f3a"
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
    "url": "assets/js/125.1f5f88fa.js",
    "revision": "c56596ed6efdd1fef36b1ce3d19ae7cf"
  },
  {
    "url": "assets/js/126.d62a1203.js",
    "revision": "a9f814b463b18830ccf9e279687012a5"
  },
  {
    "url": "assets/js/127.f28c32a3.js",
    "revision": "14e274ce2b81f769086093288d6a1593"
  },
  {
    "url": "assets/js/128.d6e8d7bd.js",
    "revision": "c9a72235df8b758be14948c930fd3fe1"
  },
  {
    "url": "assets/js/129.62039df1.js",
    "revision": "11c26113c79eaf8a0722dcf7999bdc00"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
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
    "url": "assets/js/139.9b3ffa9f.js",
    "revision": "be24815fcc7065790e0e4406b42a5cb8"
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
    "url": "assets/js/149.41a12c06.js",
    "revision": "de83acebecf9ebc220562c59a75e71f6"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.f2bcc38e.js",
    "revision": "fe25d34db6fccf5e5c879039d789a85a"
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
    "url": "assets/js/161.5f731270.js",
    "revision": "f993d6e6f27fd565bdc6a44edf930c9d"
  },
  {
    "url": "assets/js/162.0ae26a3f.js",
    "revision": "f8d35ec2840f93dfeefcfb2fc24c2895"
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
    "url": "assets/js/207.c22b1913.js",
    "revision": "ee5399d5a76e1180f92528ca02f15694"
  },
  {
    "url": "assets/js/208.c4b2a999.js",
    "revision": "43f560e69b0bda849174e2e0671ddcc6"
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
    "url": "assets/js/216.b1f59b51.js",
    "revision": "0325e3f59731e8d0f85c9f7871ca583a"
  },
  {
    "url": "assets/js/217.ce37d4e8.js",
    "revision": "2967e97e0b5c6d315e3e36e614342a7e"
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
    "url": "assets/js/250.ad223e0a.js",
    "revision": "bc5595ea28233f0ee365382951b08fa7"
  },
  {
    "url": "assets/js/251.492bdeca.js",
    "revision": "a360de308fadd268592a05d3ddeb87ee"
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
    "url": "assets/js/264.6e34fee6.js",
    "revision": "a5d3b10331f2c74012ba099cf34db913"
  },
  {
    "url": "assets/js/265.e0cba1c8.js",
    "revision": "1956131580d594cbc82f90d6da3653fb"
  },
  {
    "url": "assets/js/266.f65457b5.js",
    "revision": "1701bd459e5398992b25b8bb3f67993b"
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
    "url": "assets/js/272.41af26a8.js",
    "revision": "a7919a11b08ec58ab8e0e2a019bd73da"
  },
  {
    "url": "assets/js/273.36dd1bdf.js",
    "revision": "e4f3e27b5395abd7e7086ed8a9e8f654"
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
    "url": "assets/js/46.760f64ed.js",
    "revision": "1f01d862eef84814ef377af1a88ff102"
  },
  {
    "url": "assets/js/47.d959555d.js",
    "revision": "4b21d577324e979c04ff629c4b254181"
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
    "url": "assets/js/50.10f4277f.js",
    "revision": "04fece173279020c09492e87870a1900"
  },
  {
    "url": "assets/js/51.02b75672.js",
    "revision": "27b1640a94470c0c9f469996e7f47bfd"
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
    "url": "assets/js/70.b060ff9e.js",
    "revision": "916ac59cbb10528402576c690be344ba"
  },
  {
    "url": "assets/js/71.aab7fd06.js",
    "revision": "54100e1516afa5f1368b1188bde2d4da"
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
    "url": "assets/js/83.3b4f5656.js",
    "revision": "7baaa3e30aad47945a2c7c7f4550ea12"
  },
  {
    "url": "assets/js/84.b7eab024.js",
    "revision": "3d809cdf184166c942c9edc98ae474cd"
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
    "url": "assets/js/app.f98c31f5.js",
    "revision": "cdbe9d63b1fc741b29b10dd9d9fae917"
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
    "revision": "9346193258a31da326cd66baf425a0ab"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3309bb3b3e7d507031045e060ad722cc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d2ef5d35458f8b6b91fb9c3d4754a0eb"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f2f51699205d5c314152effc42ac300c"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "13a6d0f9cf4f7dd17c9661807705f5a9"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1ec45f52741e5e1ace9c0ced4e3726d4"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9aefccb0291a6d918d4ecbbae03c0d08"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3884087e3071615bf64012ca04431787"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f6f95e2be8794f4d2f461f063c1977ac"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "aa9028781ffea8a07755a1add1546e7f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c77cb7389272c575188a525d20c14ee9"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "8d811d606f2554bfa850a80aaf84e60a"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5542f8ef55f77fd613dc72aecfd4f373"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "cca4d3ba08e6d19fccf9dbe7a0a25f22"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "62c50c2b244a5ef0c1b2684f6c07733f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "b015d2d013f626868351d474e8ba6222"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "8769388078f5e64b7db043e3d03bf291"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "883f7bf0314089b2300b4dbb74eef3a5"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "5c90043e948cd6dcbc382012720f1237"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "420c539241353a25b6ecbcb28ba3a582"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "a777be4b86994925b94719dff89938ca"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "b922a158f42d326c692f3c43bd36ed92"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "7a4fc2a6be7e8e00f6d98f5a71131f0a"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "afd523d9695ef643cf59c6d11e01290a"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "d0a765c379c35663ce294205adcd6a0f"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "4791326c9e051faf5d2922076d29b9cb"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "12f6b4c87c651ba1acf4df99b2bbb203"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "dc0eab703ee95e2a379757d3dac042be"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "74ec7d1a976bcd9da89ac2542844d9d3"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "2bda524a729c1dc2e9039180093306eb"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "7b52479b6fbabfa630c822e7f79e12ac"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "adb2b73607f085bc395028739ea0887d"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "672594b0fa681ec6526643b9fa03799e"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "920a4899e72f4ec349e6326421919c07"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "79fb84cbfb62b718a3d6ce79645ca4b6"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "c74f26fa6395db1d7de417d01f46f49f"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "2c3a191beb2d7fa6db2fa3727c901991"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "5516635fd54bf7cc8ff7fdafcb81e3f0"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f110420debedfcc294d0956341eb9e84"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d9e8c98d1bcb5f87ef5359842bfa0891"
  },
  {
    "url": "book/index.html",
    "revision": "db44c4cd208ade8428c21d81d566fdae"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "0ea39e7deba8655e2641546ad63b9d26"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "9910f646817e59221aa55095cebbf94e"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "31fd17c664adc5a10add845a3d959fe3"
  },
  {
    "url": "c/audio/index.html",
    "revision": "74809200b0ab9b0a33d3d6530fc8fa11"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "5754e8b61c01b8a637fb4336a48e7132"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "6663e0eafd23882f42637d972a6bf926"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "a0630893001de0acc54a47a0308fd29e"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "07e59a9b1f0362a2e196e55e1751a6e2"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "f3e5bdd50c37ac1ede4754a40472843e"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "5047264a2eaf2d355040e5d9dda89ef4"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "cedb9f33538d3e9d120a210dfb5ff54c"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "f42c511657df1a414fb5e37b11488452"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "0bc222388bdd265f5424b111f020e856"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "24786c7743dbd7e8bf84927b182cef1a"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "58bdcf283860e7a812dc3f62aefea29c"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8382bdfca118c0d42fe7550a15b9c761"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a2741d92d16d8e08da1cbf30ed96ca9e"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d779c9e6d6b72879964e90743c29f0c6"
  },
  {
    "url": "c/program/index.html",
    "revision": "72ae7d7bbd7386a679c7b519766a45e1"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "356254efe330c000594e7bad604b6445"
  },
  {
    "url": "categories/index.html",
    "revision": "338fd79cd5d3294a5d0226fb0d2246d6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "da5347d00e9069589eb28bbd2c5cff11"
  },
  {
    "url": "figma/index.html",
    "revision": "68d64d60664867e5321314af28a9a4fe"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "3c1b911819421016a06feeac246422a2"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "1059fee1d62eb03f614259e9cb27bc1c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "f1a6ac2e6f8301adc94600cdacad5adc"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "027ad38e60b584ac62ec2d73be874f8e"
  },
  {
    "url": "flutter/index.html",
    "revision": "8d19ed76240f6f322884e73f7d37fac0"
  },
  {
    "url": "flutter/point.html",
    "revision": "5782687b8f0f60a78830ef1c2f7f76a3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a5d2472a337926282c1037a5f02af2c9"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "81701ed728009caf27e2359f75844410"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "cdca56b6b63fb4b5a8adceb7ce7a4044"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "cea9e6acd9d65ac8b2284ed1f04c428e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e800a4ca0da3f07bc6ec06c5729b18ea"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "baa203af361a7cbf953879133b85333e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5b862c3bf5041caf4c57d299bbe92e76"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "34d95c4bcab492349234772fea93035d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "304f27af6820d6bf9db3f569ed4ec685"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "074640cda8d154bc9405993b3d2ab419"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "718b61ee673f026db391fe8c9962345e"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "490c9a32d9fae5c005b74566df6268fd"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "76c2faf2d7d516b050604104fc6f0920"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "b3d8a236e1be188460ba21a89569e51f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "060b6371f43798286fd3f02021da0248"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "626529459150317bba06fc5894583e44"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a25de9c3e70fdd556db98f1b2c17886b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "ed1e932c6898327545d2ef1ed5299eb0"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "fd9101469913a0d3138c5f61507e0336"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "c46aeff4016742f8497adea09c53f158"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "7a96f2c4e745021e7185fc858e31353f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fffe1ca1f7ae4f26224c71ae761c51b9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "3c61798c50887f2bf25567ae96a0749f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "0e14bf46e0657f1dd52d8b09098deebb"
  },
  {
    "url": "haskell/index.html",
    "revision": "5578e2239ff0c168461f626744456cee"
  },
  {
    "url": "index.html",
    "revision": "239505216b61313f2de682d32954a415"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "dbe49ba2742d4b39841898cab37add28"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "719851bf59b4e8c4cb59053c2931e6bd"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "447f171c61dc0ac37ce9250b761a3466"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "6866db782165c92f305c59c2f2aba45d"
  },
  {
    "url": "python/index.html",
    "revision": "a2e428b26d68435b58c3a14cf6a9d24f"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "ad60a1c30dfbed44014a918232834a4b"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "b44148b84ebcad7f5e0d3fd8447bcf3e"
  },
  {
    "url": "python/python-file.html",
    "revision": "6f3cab21afaddd6ef596dcd4186dbb37"
  },
  {
    "url": "python/python-function.html",
    "revision": "50eec70817bb54d5a9ccc293d3861f39"
  },
  {
    "url": "python/python-generator.html",
    "revision": "16e792f7fb23fc52062fc6af87b3a7d9"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "3b55080a32ffadc98544df8d6d3e65e9"
  },
  {
    "url": "python/python-module.html",
    "revision": "bd79b9754eeeb0e0c81de42124f38bd8"
  },
  {
    "url": "python/python-string.html",
    "revision": "ca00d2fe28534158dbc76362fa23595e"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "f3936a4ceab8cf3aba934a8af16cfa0f"
  },
  {
    "url": "read/index.html",
    "revision": "bd43156c4c2754f2ad83d3e437c5f88f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "4790bb5583994738966d67c355978f5a"
  },
  {
    "url": "swift/better/available.html",
    "revision": "74d8e6f04fcc8af3d31b7ea31aeee466"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7bd86f7eac3f5c89362947c6e906f265"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "0b299104dd11960d44007e209d940630"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "f20b4dcab079d4788fe237aec36e81d3"
  },
  {
    "url": "swift/better/di.html",
    "revision": "e14a4655af9dbb56a0521c526a5f525f"
  },
  {
    "url": "swift/better/index.html",
    "revision": "30ebbf4c202aa2ec3e2d0dc0471f7ab8"
  },
  {
    "url": "swift/better/last.html",
    "revision": "5cfa8e6611d345f9495cced028833d3d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "78d8b023bfa68e8867857849abbfe538"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "445ac7cfaaab3c406b7976aba0cfcc95"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "47cd976da20aeab1cd2f5e4ccde74a12"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "911725d2237595e85ad252c00f1ce1c5"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "395fcff582eef27edd2dd84d11d24b85"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "058e88e9cec5ab71c7848907cea6ed51"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0ff12947b4c4c9b110f022380499dad5"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "c065d87f74dd8bc307d3461fc5e12200"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4d37dde9e177fdcef1fa4158c034ca22"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b0c07481e6a2b25049fc1d6d7f8a1513"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a56d13dfc37e66fce8dedd898f027438"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "3dd50f17e0f6d73b67ff2c3fb61f24e1"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "40b348c7beb1520fb625a564ab9a7332"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "1b062bdb6e94121dd0f07c091b2ac514"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "070401980484dbc37412f9197979df8f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ab3ea92031f03b57d218bfca5572012f"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "e2e5470e88eaa7c5f12912e42136e3ae"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "122b673989a453ad34d55a612a2e12de"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "353023612a590a164ebead9bb379d937"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "7af153fb51c3aed975ff595449ca6b03"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "228145be717c9d7458b8b966bfb9e5f6"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "5ed2f61bcb411b21448046f86b0d8b9d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "41be75741ce7ef340752d70d1324b292"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a15d1bd3cf182a3ace165be6cd8bf0c9"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c9c9cc4a79867acfae9f91ef46363180"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "041fbc934234b91d7bd6273c72095f73"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "4a479261dff81acd42bd98c7935d3d20"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "54931e26bb580e84c079007fdca5ae91"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "486df3e85fb94997098430c42e6d70aa"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b2b1b7e28184b77d67bf1f77f74fb8c1"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "10d5b12f27e66ab6772f7c7d2321e13d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "587faae6903307125d0d735887c041ab"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "bd8c1c99c04b991d6a59c144643c7424"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "65fb8882442e1c64961ba5bfedbf72c9"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "0614576fd529e2d3d066173370835d69"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "191b49636f7c4180cf65c7dfd0230b99"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4808f98c5eed1f1c6c4d50669244f780"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "dde7106a74692a55a42c5a8db2627ff4"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "46b91f1d73b602154042202ce6ae8164"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "fd6078a52c1dccc59339176b3a0aa277"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "ba6d69d06a34790dcdd932dcb50dfd51"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "183a5613c17ae468fbc827ff84ded349"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "80bb1b5c0e31277afecf0675099ab2ac"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "efbb8a53afa35e09575a44e3b3600f58"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "d4a7fbcbc42182ff0a3af82b5ad6aa3c"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "9e39a24ff4b95f7b606eb0b333cef465"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "f788220d65c34d1b0427532955edd33f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7c68860f4967a4bbfccc0d67335ed3b4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "42c58815776c31ba224dd1e6fd9e050e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "4bedd158e1268a3ee3938a66c644eda5"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "ff2b570dfbcad693c169084b192caeba"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "469975e4dd2e3003b64bcd99e88591c3"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "734244806f8ec24ec74ad793b2e620bc"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "2c762d8d976bb79ac5d41901236a52d7"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "7552d0b96d474e69840cdbfc819dc770"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "7236ad0886d4804f1cf2b48a34099643"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "722173431cde4d13d4d46b064092746b"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "d9d8b0b855b80e40ac8f4cba1540b1e2"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c27c3fe9a58a7ead760244397feb96f3"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "71f0eb9dfb6b9745ee8921b30f01ee6c"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "802123176e7e4c787b6adcd69f410126"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "59308c231e0ca5781d02d96af0ef7f19"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "5fec0818b707a150386635dd569bafc7"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "2b6db296230a136ee5684d13222cc68e"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "26a5db706f6c30800794bcd706d8b582"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3e3581d9ead7245766c4bd66de8e3fb2"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "89dc55286d6f303c1d7376a2b1386e6b"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "ffe64a128bf548b82310f8e25738ce5f"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "76ccf42cee83bf2d0b50de9c37dd7d1c"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d6d5184409d743c7adb50ca82b3ca8ab"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "9aff18fe53a3a85680df3382b03488c6"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "6e9800e59272116a744de09366cc5298"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "64b9a74bb59ac6e351dcabd3466bce41"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "92839d183d028ec0009eb1e557cbce09"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a680c2e2b25c2fc7559627415bd0e17a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b3322fae739b252eccd2ee3a0f4a1191"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "3ee8addbd93fd3a641bf8247bf9a6ddc"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0dc0df73c33122dbbfc21ec7c9bb296f"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "5a6c10fc6be135fb23189b7c0b3cce42"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c609da77ba0d86eebe8f9b4334c34efb"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "36ce9e8e15ac2cf004c04613ba0a597a"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "acfb144c8444219b3d7288d45cff44ba"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "e7dfb03508916504df68c33aab54c75b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "70aa07ace903e1d878f82ae56da71190"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "868f77dc14a2dcd74df96c2877c96a79"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "cf5548a3bc8f7dde2a3727554707a496"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f1e87e901c86f3ba5fccd0ee97862e42"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8f96487f380e6c8ecc4b900a14c928b2"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "87c071dded08ffafe154f7756a1bf6a7"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "5e5c354f7fb0b9290434e00a6638887e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "8ac9b31e82fa91532ef45c6ed07527cc"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "ab7bc89fb4229232cd0d25cda420a07d"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "411c305df495ee0029c25c1faac9be97"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "bffece1e4e4297e42c526864ff860e8d"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7b7bfc13b010a34c7bdb8c6c677db96e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "5ef2a003d8a52f518b1ffb29e3c9f800"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "dffb207478d3362933cb7985707776c8"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "26381553f539136d976983b7dda7a63b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5b3d0ea8c4f6ebd9493a70848e0b9742"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b7f036bcc855d319e173f5992e491f6e"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "a745d93d85ed3cbbda731d02068d03e9"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "f414bff2bca59710a06f4300995e1c4b"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f4844c18fc0838a600a2ed8413a9242c"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "0f00724f3df0bee8abcb9bfbb23d0c5f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7b41405a46bdec3a1ceeb5afa52c001d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "fba3d162ec481339e7aeaa407f752e6f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8eeec62ea3b34eddfd7c5b5c5077afe3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7f0e96d8b51fdaffbec67c2764fff779"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ddd88c6e1186261ada1b1a61b4285cad"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "fece4c545d2166b2cd65d6b4fe816fc9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6ad33698167a20ec4b456819a9735b38"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e68b0fda51cf6453606505051938af3d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a87fdd7bdd7f07a8443439b9e20f9d81"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "a9e8690578088b697f9dbc1602f73541"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c6d5f3bedb2de0be668e89667327e518"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c3579bb30a8f49d6b0419e49348f6b79"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e6e8cc1912e91d7bc73b1b3802f65c18"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "c6e889076134b49eb8d8fbeb719fc3b1"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "0ed44c1a28f9dae908220839fd0ddf16"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "d9d175adb9c54ec801ce786f7c1b7477"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3e431796c5b534c97ff2f74f8fc7a963"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b15092c2cbe9959c39d040cbb62c5f8b"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "56d0be2d2c574cb0f0c0ce7a5e4a261d"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "72272d52cf44ae072554fdb4766ca2f3"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "275bf8861b8a72574000e60d76c52bdd"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "f5c64d1609ebf059f0dfd6ad9e072e50"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "da57f36ecb333751419b548f025127ce"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "265ae2e174d64a27771f8e6779c45c07"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "63480dbb3b8113d82fddf56adc9c4f78"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a3df36502c6c75133bbd9792f9657313"
  },
  {
    "url": "tag/github/index.html",
    "revision": "18f283f978e584b77a3c5ee6bc0bd8da"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "9b0a2d36868202b1e23865d72bf3c1d2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d4a2f171f5065fd81ef09eb490873b86"
  },
  {
    "url": "tag/index.html",
    "revision": "672e8a0df9ac99911c79d42ee3ae37da"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f08a9dede0a83c992efe7f69a5ad06f7"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "0aebb46c2f49ce9247a663546cd18147"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "22a0c66c61dc553cbf733381acaa0765"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "07a7f99b565cc448d438f161cb075478"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "25e42780d137ad7f737ec8d24009c5db"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ee8d66de1a463ed485198af65bd5b6cf"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "7ef9b8c07afd420216a5d300016e97e2"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "6f4d4f7ab8a6b70bea5c4e3cacfb921b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "c00ca2a9df0d6e9f37ae78a9bdcac130"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e32b34417727e22c879fa5643024d587"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "b0f02a15d36772c5618f7c5a73ff4629"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "7956adad0312f3c5572dfd3a79d3fa81"
  },
  {
    "url": "tag/python/index.html",
    "revision": "391a5cb53bab45dd8a7b48122ae98afb"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "70503a9aecd35f4baa7f933686dba347"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3a4a8d561346b737798fe2c03deb677c"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "320023fa46dac7720a86cda8c17b1c71"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "677d4aafc04055075f12317c3929fc5f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "d04f0f1957696b61791c0634eb59ae77"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "77291081daa7d865e2ce664567708f19"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d93753e0031f3b2c3107af25ff2bf78e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "603ecd0a7068f6687f28a70993a73221"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "54c3ba4a9ebe39c708ec30c06e810bf2"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "a61172cf0d991982ecf8eb6df7b20e38"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "889c425acb02055fb35e5be814c391dc"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ebc204b8a3522e37e32e6380d86e2388"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6703320e462409629678cd065227a900"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "63c7be3343dafc3491de84c6a6ba2de0"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7a06c70ce67bbcb622f65f6f3bb4d8bf"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e1a5563a5e8090db9b28c2899f7934a5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "ac16b22f0e74c01246d564ba5526b925"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "dc6bf10b42649471b5ed59ae83751a44"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "0766ef898752df2d2f331f066d177616"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "022844fff366f6e974760e3ca9ded02f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "eafee92014c97af3f88a5d169fea2275"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "49a76e7d1b063c1d75d4fb15d5362263"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e870df0445db075802faf5750576180d"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "490b3420c4b45278f06082d8feeca921"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "c4db5fb650fb6e9790837ca7415c8bb6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "5b44b0feb6b6351cb8c25f322f24910c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "b54634ea59c8a45ceddcf99293baa4b1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4761da7c247c6a86a299cd7b0a478621"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5b5cca9e6493ce0c0309f999f4f428e3"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "1cef095619f6e6b82d62a9404362aa3a"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "760beb870ed43d78b17c7b20f4891abf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a46ddfbc9802479a94c9c1370777849b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "329c44157d3df03c6c1ad8007ab15624"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "002ce2f1fcfdcf20797c7aa0c802c745"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "9d9e7145739630de9c1e0adbadb1deb2"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "10134eda0bdea8b46fc3ce2edc30cb82"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3d8f837eaaf8746da7f7788d9be1bc83"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "de42e7a138cb8cdb4091da55008e3323"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ccae5277431e23dad9cc832f64a46e40"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "34eab6fb4dd67b3e5e1026f1ecdb944f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3a35ec90c21d20d3da8de93486f33d4e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "33358753e7e072a123eb3d9292c25548"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "5e5b55027e6e9e7d3dc8aa8d284f5003"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "e965dd9b8f73f00bdb7ed6d482720ab2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "56043ef080a62568f805e6203101029f"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "6da5fdd2a2ca5ca81222b4e8987c5eac"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a1a2452636aaaae850c0f348be529c0e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8d5c0eee99cd49aa4891fc4169f78d49"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f423d6cf194a296e0e78fdacf9915a9b"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "aeec5e24bb3afd421c8edbe860afc6ce"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "a4a6a1fc101946ed9bf552444bc00168"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "19ca5ea4405cc59768211dc289f47a25"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd4b515cc406b5f25678b35a90c93ec1"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "32734d5814a77ea0ec97256ad29a50df"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "1c2fe94fa08f566be3e7f98deb7c3f3a"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "3e6fb8f038d6cc3c8336ff0dcbc277c1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9cbb72edcd5a29b742ac1f96593ffc3e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "0631900e02d4f66d3e6e1f79e6e221ad"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "73388f4249c21e7fc70c4fda1bfbb732"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7388f8c81d813d710f9980937dad2341"
  },
  {
    "url": "tools/note/index.html",
    "revision": "50871b3f3f7dadc74195c1f86a451640"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "c172d6008a18928adf595014a57986cd"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "4efe744f1f61e848d2bce99de221fa75"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "b25dd2e06aa405a8cf3c3d7e12a0ae21"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "558991e2c94343a34a337a8ab75442a2"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "3bc56572d23cba89f15e033d57157c90"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "42a158aa1ed849e0fc88ea4cde9603e3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "607edf6c9988dee2af0356f698bb3c23"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "a9bf81a30c398ed1e964ee1092146b43"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ebad4438f4ba33eb3118ef2e4cbf1b2e"
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
