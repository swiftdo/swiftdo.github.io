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
    "revision": "9f670b7f65a9d7274510e8bb1119cd10"
  },
  {
    "url": "about/app/index.html",
    "revision": "8d2798195c0f4d461acf97342fd672bc"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "a93447d79fc69876ac890700a1b36aa4"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "30aa3333a6dfb520e2e158934e499700"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6f9ed151d5163d27c45f416240bd58b7"
  },
  {
    "url": "about/index/index.html",
    "revision": "560c6f4ce68a06694c541ac1997f91e0"
  },
  {
    "url": "ai/index.html",
    "revision": "f906f079cc9b71fb37721abaf0289c7e"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "326baa47da1308cf1ee6ef3b5b031332"
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
    "url": "assets/js/118.f6aea1a5.js",
    "revision": "68684ce54db1a2d071c20aa2ea8ede7c"
  },
  {
    "url": "assets/js/119.c483400b.js",
    "revision": "53851b47ebe8b503822d44a10e92cb0e"
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
    "url": "assets/js/121.5a2b3e64.js",
    "revision": "05cd31c58372464602b33b7150d28396"
  },
  {
    "url": "assets/js/122.f61ca852.js",
    "revision": "5e6a2045794c54aa594d19ae2cd8d279"
  },
  {
    "url": "assets/js/123.298e5027.js",
    "revision": "f20030035b0e8349cad5a8cd52b1ca4e"
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
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
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
    "url": "assets/js/139.d59e5509.js",
    "revision": "3bcf637a4b78ec5eb4a706117ca8b6ad"
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
    "url": "assets/js/246.811d8751.js",
    "revision": "8cd0eba03e3683be389a2cf54f0d3d45"
  },
  {
    "url": "assets/js/247.2768ff31.js",
    "revision": "128e5fe762636494c4b96ed7d822a59a"
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
    "url": "assets/js/252.cfb01cb2.js",
    "revision": "3b454d0b35065f8c3430e4c0ec31ca99"
  },
  {
    "url": "assets/js/253.8dc25035.js",
    "revision": "2de17d8aea132d17875981331ea9c0fa"
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
    "url": "assets/js/36.ca1c0ece.js",
    "revision": "8f047735508e3826c77fbdb46178b94d"
  },
  {
    "url": "assets/js/37.d5875c34.js",
    "revision": "88eb3b2251680bb461abc9979000ece3"
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
    "url": "assets/js/app.e78523fb.js",
    "revision": "ce8300491d6c076118c54280f93cdc5f"
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
    "revision": "7ce7c6edac5a6b71cf39c50036e84161"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "64e100f98b0f2aded4889feb0792fd68"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "61fa77f1a4f1925a31acb1abb12e9923"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "99128090bdb4672967d41907ae69bb2e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "18803a2f36e3557d6dffbaf09ae2d674"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ffa473c083ab6e5ff350d71a22a943b8"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "16513bbf880b1a0f00e96ef26137adb3"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6f4c79fba675ef76f695a7ac276cb785"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "123d942463d9e5db7b652fcdb1e887fa"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f28b4fe88916e379fc0868d9920587b5"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f066dc3bd59ef7f528f062fc27c011dc"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "ec5dbe481f1b8e95ae1af98b34f9f817"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "d03a0384aa2ebf74dc09f06d1b077586"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "bb4f395c08b0afd3382d71ece84e4c96"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "ad6b86c0fc59d924346ff4d251f01b96"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "7e7214c34f59017f508ed67c24bdd57d"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4d20ef1ad05d0dde8c87b2acbb9952f3"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "460d9263aedc9c8b16f03679cab93b58"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "db80d156ad43b873c65348d50879baca"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "5cae721ec62fe3e6cc17ad296a2af920"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "656bf0525b14b11edb5bc5887da256bb"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "75a05bfa96a33a3cfea53badade0dd81"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "1757406958e9fc759c36a5a98799fc52"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "db3c29d5e1fc69f0c532648436bbf3e2"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "d1dfc556ab8672e6cec6f784255dba97"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "c79c1cc020f17b1dd63209011130ee37"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "7e3412ef9be79c517542755d229b9ee1"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "21f998d52cbfa08924135245c248a9e8"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "4fcd594314cc0249439d5115b33719ab"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "bd68a464fb59e1ab709efaa8b5eb8c46"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "ff7df9d62254336d8b7700f33b399422"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5fb72fde8691dd24deb8c8265a2507ba"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "9c4d95a69e2e04c881b3077f5c835864"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "29b507453b5ab86f4f0cfb259120cb54"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "481b5f3a09a34442c42322af1313be83"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d1e777bb7eb70e96a47a41a3b8f9e30b"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b48a21a70daf12b221f548ba5dec21d1"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "9dc9d4b7f1bf82f450e3945309de5a59"
  },
  {
    "url": "basis/index/index.html",
    "revision": "eff978cc15d53f468390a3bb8a9a8f68"
  },
  {
    "url": "basis/os/index.html",
    "revision": "524ac0e4f9074024d27d5637e60cadeb"
  },
  {
    "url": "book/index.html",
    "revision": "de1893f1a4a164d651ce2b3a616459bf"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9dba36ee7e4ff27f23feb8050d0cab8f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "b5dc433c3459d36aa00fde3eb4df076c"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c78bc4696c7a8b9e97a8cd64fd33db19"
  },
  {
    "url": "c/audio/index.html",
    "revision": "f35c7b6ab3ce68dd7ac67589e50d4cee"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "11f1d439b5d400924d74969134b7c731"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "4459846b2c7f07626302af7a7e9a595a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "03e83acecd41e086ca11d7e9d867eb65"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "7231a36b7aad17f5108004689b781727"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "0ac02684e964ecde6e5a8c9c2fe65f14"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "4dc57534d73ae1ab01238b464842e274"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "0c763996eece3e1506f498e8620c159e"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "3c256bf46e923ce97edc1eedbd778d35"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "e00c222e6a97eb4015c16a2f3d1583f7"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "a709216508219be9918b4cffb3833603"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "49300d03d3ec1f3d059a3601f0d16b87"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "a83004198a859fbfc9d436135deb906d"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "dd24f3971f716fa733ddca80415bfd03"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "0adde5386bc7a9235b90e4cde6a97fc5"
  },
  {
    "url": "c/program/index.html",
    "revision": "ae5ab5fd91f5fa3318d9fc1ae9e62f81"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "e84afd0cdf7c59ddd3dc7d964a444989"
  },
  {
    "url": "categories/index.html",
    "revision": "7d0ff4179fb06ffaee0000c12c984ea4"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "97e50bee810c4142a9e8f821c742175e"
  },
  {
    "url": "figma/index.html",
    "revision": "5baffc5e0a13826b4859aa23a9e68544"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "a13d005266dab1b7596ef297a1fa1b26"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "13b3f7296aaaba76928de3c76e319b7e"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "c7e63555980ebf6b699c6cd67bc94b06"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "99066977c9a85b0736ab151559b7698f"
  },
  {
    "url": "flutter/index.html",
    "revision": "1f28d7fc045ad2ac954c97550407c2e8"
  },
  {
    "url": "flutter/point.html",
    "revision": "195659885b7d1efa8fdfad62a97f48cc"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0182becf72f811e1657fed50754a1f1a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "e46cff321c6e57a1c31924b47ba4a41a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a9735308c22bfa6f8fce60b56fd520d7"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c091cc83dedec1451f1baa6f7f18979c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2e25613af67caf796531b8ce796dc8e1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "4ebf1aa29a26d497c68e2b006f5eee0a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "599b2e6eac206b64963b17226a235006"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b76aa2659f713a99e3070760f81da0b7"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "7a46b351c165fade7c97e9958f2270ea"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "997cab15368fc84de6e6b631950c2d56"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8421dc81867ae64ab886dfca28c9749e"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9e8f4dbeedf6bd9985b1edcff499d44a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "5c90681b9bbd04af60fbab7b38335ff0"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "274fae92fdcedde8a3f72579f58364c8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "539e3836afeb07d387c71a76997db37f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "73f6d32abb4c719a685f1ee2c6215bf0"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ddc49bd6d02ef4e09f9f4bd131dd02c1"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "0131ed90c808bf876a5dfbb4cda0aece"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "701779a9b91af0c5b74047f3d1247a11"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "bb705e9d0ea4c2800925db4e82175fd6"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "41047e85bf2b10bfb5592e5a5e407c02"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e1dbb15e149ebd7cece4ed221f19cc93"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "daf62a2d2d0ffeb3d8c5435a867ece18"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "05f8944ad93dd30fb8f6b360ed3562b8"
  },
  {
    "url": "haskell/index.html",
    "revision": "9334090aa3d2c261add6dc2aec08c744"
  },
  {
    "url": "index.html",
    "revision": "5d47b1bc38442a52a5e3b35853f88cd5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "bdf2a8b480b7b41d0be57fb638d68d8a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "e7f5abc3ec445b584aeda1836fe0d498"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "43403854a295d70708d4bd013e2ab0cf"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b375823a3be1f545930c7cc593d2bdde"
  },
  {
    "url": "python/index.html",
    "revision": "a87b87f25bb6a53a5fb8ebdd90eaf4e8"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "0a819cbd171e43b21cce1b19438bce6f"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "6a6c097f0f251c6518b6f02b03052d9b"
  },
  {
    "url": "python/python-file.html",
    "revision": "694703884d330b03421e4234459551de"
  },
  {
    "url": "python/python-function.html",
    "revision": "0641248535de97cec6aa02ac68b52033"
  },
  {
    "url": "python/python-generator.html",
    "revision": "1478d3104b845c4cb96410df3c732358"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "01a61319e2f170932fdf08aba5a7e129"
  },
  {
    "url": "python/python-module.html",
    "revision": "7bb7c2db2198e239763ec78f4bb224f5"
  },
  {
    "url": "python/python-string.html",
    "revision": "2187b11249ffb4f6c70721bb8834a6de"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "6ab9d05e157b8d0b06c6397c25f37765"
  },
  {
    "url": "read/index.html",
    "revision": "04a8b1af0b952042bcd20d3936d71361"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "39d56b08cf1f792d2bc2338c91416d5a"
  },
  {
    "url": "swift/better/available.html",
    "revision": "ec997e9edfecab5d74aa368b063dc3b7"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "bba077317d0d4c44fb00bfc08b0ddbe6"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b490281121dba9731b675dc5c9cd4608"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "5ae709168baae0d36e4fb229339f2d07"
  },
  {
    "url": "swift/better/di.html",
    "revision": "fc52e727fd4f5671d14558daf5e15ebe"
  },
  {
    "url": "swift/better/index.html",
    "revision": "50901489663f526b17988644433f7718"
  },
  {
    "url": "swift/better/last.html",
    "revision": "dd5085db95e04766630ab85d32e52404"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1300a462be30d872deb5e7ec53bbd011"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "d839efb6d7e0a8f4e97211bcab12de78"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "32e17197904199f46560097c0252ac78"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8d08980d23dd475aefa8ab05e4e8f552"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c592f1a9cfb5732e03afc49636a85a60"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "12f2eb67d1f89bbd96323fb1990e474b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5d80f5ea9be4a4cb31095db2e7040f0f"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "9199a54672d1c840d1a0fe7818895144"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ce273349d0c64d13464342c7ead204b9"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e74d5298d1ca826a7c4dc0fdf3259daa"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "0c6a4a7729fdc923e414b8d7913d1e83"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "34169ea17cd14a8571d2f0d6d366022e"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "cf4a5e90e3c2d1affffadcc5d7c04b1b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "52548a6a2b59424aa24305ab9942bdf7"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "463f95e274707de748e16ddce3dd5d80"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d8065d824d38c73af8cbcb5b7fbd4c0d"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "6cd55ae97ff39f2aa9277375951c41b7"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "98397570dafb680e673cfeb048aa7869"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "4702a4db36a9b4d4edf7c2d3bfc3328d"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "6fd73ad2c02092d89d525fc4595f21ca"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "e7649fe1c0783dd9251a748af180e03b"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "be0990a09ebf69d6433a6ba697d0d98f"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "005480e4910b8b9808ed1abee83dfeda"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "3dc2877c14a581d21fc37f46ca5e40cb"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c46e162629a5c749d8e53b6e9e0d7dc6"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "a67bc0219f9a1472a9fde91d4f229b6b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "ab62ff808564f9352890342f9616b732"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "d0094dfa9ddd2254effad15305a2a39a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "fb4ad617f64d6ffa2869806f5fe0fb21"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "057cae39b0aba09457d8085b4a480b5f"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "006121dee9824f9228dd9357bdc8a99b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "49cffa3ef035f70992d8c1ace5c05652"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "766e6665b053e1fc3b3c8a592e7bbc2a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "a99ac07ce6b4ffd8b05147ad6ae0e97b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b47bfc98a546b60cf0689d53da792072"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "1ba6ae2e86a804ee943551a0fb6a7f44"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4bfc53171c4c95fb9e37352b654d9e49"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d986586fa82c3859351440b31c3b6fd7"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "fc565d7c14927d2a0a8e6d80526b482a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "66ce21946a5b4f0ba1d8d8ba67122346"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "18239deaf1ae38cd39471ca078c7a55e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c3c0ce7bef2d79e9ed1b6e78d6f084fc"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "d1d7b2b3e99a93a350864ff4d1bd8501"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "77f2f1b5af15d147fd7d1aba674876e0"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "acb7952799b9881be0f89258e6fe5296"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "98fe492ebdc7bf3b93b4cafaf1aabc7a"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "6eaa8777e57cbcb1d3273e90ce2f63af"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "5d0fd86d835c170e579ff9943bdc89ae"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "07a1a139e91f9d57c91647e9d8118e07"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "11900d1885f2a8a38c65bae8282425c8"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "a62df712052c1560a2d85b001b3ea811"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "66dd61747cc0f36becb7976acd9ae8bc"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "340f284e366e9cc744eb9e43c51563f2"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "b30e856644b15221298975c164b02642"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4a535a90322cbbd7b3f27f8a39735f81"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "e8436ba71b0abe4c7e69bf30c6e7e806"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "0587fa021b53343cb852afe3954eb1ce"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "5da43d506a8dffc8bc40ad4d16894022"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "2d34d33ddfe8905e616a6deb1ee8aae6"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "7873ab240010711e423597f57848b8e4"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "4c114aee83bd03c97c5cfed67a742f8d"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "eeba013a335e8e95a001eb6db4f7f7e2"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "ccc2c83caa050ad1ef38f89607943283"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "48fe8887dd622b6c33781c389a21ac5f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "2c99b5003017a35334887afc17a1075a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "0cc4e9334b9d23e06cc2bbed72721213"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ba9233f279b64a6affef1c6dbfd17794"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "40106ee279011181fe36bd605ce6f03f"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "0f886ede57dfb3bda5df4e07cbfa66bf"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "9bab649e77b2c29a7272893336221028"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "a6edc831b7f61adda29435de237bb2ff"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "8979d0c15b33c7d7b3406bdf3f5c0897"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "230069173a70e97e3bc019158459f59b"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8b69a6af369bf86c16d38f67be3cd860"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "d8f7684c6c267ec3b9978fd32995dc66"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "a04e6506e7f490066bf6f78405213494"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "e6311048f786f53fbe3ab2ce78a19ddf"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "64b874b6d007a100edc5162bca2e4ace"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "08f12e642220a1048ae0f91f24a53757"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "470741c5f7b1878cfe0c6f7fd871a901"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "0e078aabcff71306f0059015789a0014"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "cb376a9d868dbfbd7cf902fb9206f258"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f9843363d261150ebffce8cbd41fc980"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "9fd003e784a28867cee88625b40b9c46"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "c31c0ba9fc404df86ace5a8f401c9aaf"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "9b7d4cbc22ed48b61b468e99afe32c77"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "4216c7f4c710871f8f568a7ed61904c9"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "3966e5495e319b2d03e15d7537fe6ae4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "dae4e1531b56af9afd012b7c8bd4dcc7"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0865b90e9762319553f9f91f3c14adec"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "d681516c2df493951dbfd064ce57a24f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "cf41a15f0fb4156123a7cbc6fcd541b9"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a68be2a4a107f58d919d7f656fa96a86"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "639830b7c87d269e810c761e204fe5d8"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "3da0897cd0e7efd0973d414c9034283f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "2b984c305096fb68aa6dfa73e9f7b8d2"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "682fcc1188d9e66dc9a5ff269ed9617e"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "a3669e160d1fa03e18e210524150f8b7"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "dc80a746ad2a0b3fcbf58e8a15653b28"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "0c63d779fb7696f021ffa68cdfd61dcc"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "ecf9ee97103990c9084d21025ab14ef0"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "f8f52e684b96dfb699cbfae8d47a7c15"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d1083655ee949267d714e971b234ee83"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "c6c6d632c87a0f0e6817527ebd0921c9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "09e4eb8d902c24ded5f0dbc9fafe39cf"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "942abdeb75fa66018d6231bcf7d4380a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "30dd88f14056cde39481bed93f77cdf3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f29abca0ddd59d53834fe62cfd1b1283"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8a240acec43a634194dfb2c9d3b6f6cd"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1005f2db7e2b5d11f792e1d9134d4803"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "448eb5ce5a1146fa6f809d6966f65469"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d0f91c2a49c1e7e4026de1ac608dae08"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6698a5c6ca47ff9d3bf5712cbd3123a2"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ff703cf2b9de682cb89b6393b7fc8918"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "103efacd5514319a4472199887a053df"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "63b7ec6717ea5974abcd01caa6667637"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c24b84556e8b1e544d5f8ef29a557256"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "96b8f8ddb5f3d6ac93537720cce34acb"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "66a3a3ab52f9609530e543a419d63d49"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a7335663e0c1f8ad091717fb921bd14d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c8cb989d1a31447e455d97a7b0708da3"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "43477fb1c258a98a19d37579b3edfa42"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "b586291c73a623d99669df031a05515b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "b96126a9e77908c40481419c226bda39"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "49e67cc83be0a6704ea0bf881f9d8076"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "f202ef289b51a49465e554f1b5fe7432"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "197c88a2f39881b694a756e9447753f5"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "7449b0b39ec08fd91eb2bd3a59744264"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "fa823aa38227e984b9bfabffafe094b2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d6c26bd15e16cb557b878102d82ad518"
  },
  {
    "url": "tag/github/index.html",
    "revision": "954c85857099db79f3f860372a364fc7"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "6cc9bc2d3ec27fbdd3e16d2588ba9b67"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c292fe7e9060475767d59bdcc0217023"
  },
  {
    "url": "tag/index.html",
    "revision": "e78fd7dc171bd5d1c11b41878fcac1e2"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "6a1b092c87509b42de90d3cccf6f6aff"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "84d8caf1c4926fc38167146660f9fc71"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "add0b2f39eaac862e5beb7b974fe8080"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "daea40fec15769c34cfe2dbdf513aea3"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ed1d7022de6c14117ff03fdbc628eff8"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "a10a35c1497839a2913a29da843eb3b8"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "f689126014574764418359757d7b4d8a"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "3be270ff30c607091501211bb89038ee"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "c4b0d621515517e07514d66ba2b84af4"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a482eeaa34ca2057124cd0bed9c368c0"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "70475c9bfe738a394ec65b8030a11097"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "da0ee055cf178778e04d02fa57213d8c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f19b7792fa9fd977094fde950e30a887"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "ea21ae5582ec5e09fe55b526cb7db215"
  },
  {
    "url": "tag/read/index.html",
    "revision": "9a30b7c71f1ba39bb92c295ce8ff3713"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "4990bcb5c6ed284f607105aec6fcb582"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "bb43ff8ec7cedb85af1b8917e12e1a07"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "2eae6f1989a6f1675a865b5daa1fb1f7"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "417e7e3af6547528423f94239d6fc7d6"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "6f19cdaa74de8d6fc28ed3ad44225165"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "dcc7dd22828be9f900be270782eeec14"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a2fcfdd675ed855ae6a6fc37ec281e63"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "15f0cce631f5de98572777aabcd64a5a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bfef0c177fd162baf266e5eb4f3f7158"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e92c99a0af2b208119a4e1813579f707"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f3615b7b69a9479ea9f7e634ab238054"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "d98efe1b8940c893e3891fac6b253ec5"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "59e4b666827eff22443d67e8fc05a07f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2cf2cc9d180a484e150d665eaeceefc4"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "2337f7863443e07c650f2bc5a80eff62"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "9287a677977ed5610a29dd4e2e2fd858"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "a27eb08a8e9ccec5d1bff46023243c83"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "9b0cf1c487368afecc11e0bf4d523bb7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "22fa27991a5f36631130723d972b2b89"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7de28569aec5d4a569a9c42c11af9d36"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "869368f5cd340ed24d57578f4ff34790"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ca6418ede729937eeee084eccdf10ee6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "bc86d3bb07033b9d940eff8152ef29b5"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "0ba55a8cf97f62e7581145fa550e4b17"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "6f99b59dcbe4fb95625d363b3b12b981"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "12c8a529de05dbeab3b13d39bc1f9c8e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8dd7fb07d3e8410c150f20df5bfd3827"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "9d8b3a00bc3a50c7881e0032f1427589"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6e035b857fefe67b05b7e627e1d19876"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3d201018657c3cce19f683b57c960f36"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f3fe4571b1194457fa80fb3e6d9d2a69"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "c30761e575c1e22ed1c4a7b1e2e9b5a4"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "5c360e1b3fe5975d28cc17299d72ce79"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "533ae3c418d466ded4798624ae6e37b0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fa6a02a6978b684382f1a83e48e93af2"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e10c19c7a11af56c780f39fa6493d920"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f384e39a6afe6f933f25532b6ee263ff"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "da166dd43a7680c43fac848befdb0d91"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e0f071b089760c63ec17732684059d5e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fa8873f689b74885b00db67847b59bd3"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "4b304272aefdc58126bf2f7bf17a8ed5"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "5de94f17413f35acc56f699246ccb328"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c3c67c7b00248d438815b82f1e3ab3b1"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "16276c8a525542c1a148a6a19c27bd5b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f205918e6e9a00278bbc6608c7539f8e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9b3dde61f1acb0ba3d90b84b1057ff84"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f7a62c37169e82035263c0dea6ded837"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "65405262411f9d6c0ff128059f752c1d"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "2929f9cb1dd7221f39f67fc76374f895"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1376ac2bf3a5e0412d3e510c832a07a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "328cc0e35aeb5b1bc785c2159f8dd36c"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "c8b8490c23ad7a8ab07ea54d3560d034"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f7077ab633ddf1859606b4d354a0758c"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "c4be5ebda4db2d97cc65833c44ca4e68"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ae5ac3abe27fef03145590e7d29efd08"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "192783be97f4f2c6ee588d3faa495433"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a60d6ebbcdf16408a8d4018a54bdff0a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "861f3c85301cc4f224442058c3bc80da"
  },
  {
    "url": "tools/note/index.html",
    "revision": "91da908933d7c92cced7a7e27ecf5af0"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "bb0ff6d1b4ec9a159bcf538c4b81e2d6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bb833a0cc4e7ba33d7189d2056398d81"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "66a0937421b0adba444cd3611d3b7134"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d4c2c602449f077cca7c2eab2bc702c2"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b2dc377c19e783a21f234b1cf30dcb4c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ce2abe68e0ca8d82ac24b5816a3e2580"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9c133077f6b51d23990a9fa71540415f"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "38c08c2901da4117f8858a521ca4b890"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "269a1e5c7e40fe8b4031cbdaceadcfae"
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
