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
    "revision": "9043b46cba0881b7924c430e299d16e3"
  },
  {
    "url": "about/app/index.html",
    "revision": "554d1a6a1e4d2535866e27d7f60a741c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "a2a3f6d0c18c44d9ffeced5b0bc6a257"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "580923dfd75420b4028a0fe16a005366"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "8b9ee981f9e748d12d53d498456ea917"
  },
  {
    "url": "about/index/index.html",
    "revision": "7f32de8be4701f488a00888ea04dfbd1"
  },
  {
    "url": "ai/index.html",
    "revision": "c4bfdffd7b9829a7dfca698613437223"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7b52ad0d62c0d871b9e11a7fdc2f9740"
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
    "url": "assets/js/102.dab14acd.js",
    "revision": "8057e1e013d95768dd44e870d0dc5ef4"
  },
  {
    "url": "assets/js/103.d45cf590.js",
    "revision": "1db6b61c319380026ba1de122b96c17c"
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
    "url": "assets/js/122.be6e5685.js",
    "revision": "5937f6613d5ed7be33b875a0bc2f3ea9"
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
    "url": "assets/js/136.d730a0a0.js",
    "revision": "d93b29094962cb4a1f697c62abf8fb77"
  },
  {
    "url": "assets/js/137.1641d7d4.js",
    "revision": "36a52e88314aee882e58c8331a291207"
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
    "url": "assets/js/169.9cab72d4.js",
    "revision": "777aeff6da75c1fd8e535f5eb09a85e3"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.19f2f733.js",
    "revision": "dfbdb3b75840e18242d9437275b72f7f"
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
    "url": "assets/js/182.18ab5b0d.js",
    "revision": "c0e729b161bf5e54e71fe8a6bb8b099f"
  },
  {
    "url": "assets/js/183.7105f3f5.js",
    "revision": "95c9289af44341f99a87a936d5f5855a"
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
    "url": "assets/js/187.47875142.js",
    "revision": "9ab197b4822dbcbe4ef325a9b3e9f149"
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
    "url": "assets/js/233.645daf69.js",
    "revision": "57688ab9210d5ad7a03a9b16265587ad"
  },
  {
    "url": "assets/js/234.a38c1da0.js",
    "revision": "61600c7507a1f967990ed86a377e0211"
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
    "url": "assets/js/242.1ddbaf08.js",
    "revision": "1302001828f7a16ff0830e2c6d74d2a8"
  },
  {
    "url": "assets/js/243.62c12d37.js",
    "revision": "dc8fc22a058ce3e1661feb138dd025a1"
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
    "url": "assets/js/27.827a9ea3.js",
    "revision": "9a122e3175ea9499cf895cf6faf05e3d"
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
    "url": "assets/js/274.721a0e59.js",
    "revision": "74c006252e174c43182d3cfa2708517f"
  },
  {
    "url": "assets/js/275.67a74373.js",
    "revision": "8597e5e847996e0ba97d776eed53fbdf"
  },
  {
    "url": "assets/js/276.28503327.js",
    "revision": "deae9bd5f6c4d64eb04baa69b2b8c8a5"
  },
  {
    "url": "assets/js/28.fc94cc95.js",
    "revision": "1b4a6727356e489516019b3ed91842b8"
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
    "url": "assets/js/app.dcb07ffc.js",
    "revision": "1b90ba74e22773a6b18868e55b28e733"
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
    "revision": "0656cc835b93eeaeb123aed2645593e5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4038b1e0c8d9fafcea6178fe85436b2d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d19ea0d137412418867d80a8b8368f8a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "86c43c049f825ef396ed9f4310f9b898"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2a1533f58ef1f496f8e09d03fadaf632"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "985a049fad55b7c5874c232290ff6402"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b9dbe227e356d23c5b221834c2c7f52b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "33a683a217753c58c6c5434d044342f2"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "a0288785a3129acba185dc67d31a6d5b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f7406d1f67684f3a6077f7d50790fd75"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "5b25ddfdb48a388f36ec0f7a361238d2"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c82f08b7dc54c8f6288e92ce844a6609"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "365923b6fab735bcbe943d643ac78fa5"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "131739629adc6109420358c34290b0d1"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e6ce2dddff42c4a7bb2da10be4ce2d9b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c1dbf727e0eb2555f52402ff718a6498"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "88fbf189ccaecb96190cd094e0d201be"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "4a13d2246b54f13c5f531598464ee6f0"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6726d93ad8dc8a17f04be9ce663af254"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "5aadc913461bb4055b84c44df1e5849e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "3db7116dd96c7ed6f45c4197ce0f0812"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "63159e92d6fc126d277527e123517c08"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "6ab39b950523c304124d57dcef1c265d"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "a932741d199e6896f57880bccd3f9878"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "5b6da32ecbed1999874724531f375e61"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "57d266caf1e568f0182d443ca53bd058"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "17ea6aabeeee62e2ee2f0a64514f3d78"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "0a7b0ca4fa1f07520dee05076d872f25"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "c34617e17a60999b35eeacf5547f0530"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "97ce837adb0c3da1dcf78b96f091c5df"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "21a03d4594e4ad5b41c7e030e45a51a3"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "e8f6a9fb27f61e646d4d0b0e4c40528f"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a9af3e8c871633bb0de2c1233417230e"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "81eb51cc1c4c7a8fabc8d7749d58c61a"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "67118bf5d074edf91c7de16fb35e221c"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "5f1e92c3ab7dbe88f99c92b674e055f0"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "e10492ecc160281274b48cfe6170d30e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "354af746dc5737608c316fe2e517cf82"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ee20368c98929c77c040a5f92aee93bf"
  },
  {
    "url": "basis/os/index.html",
    "revision": "11948d6c9936a048ce44b7d202570d6d"
  },
  {
    "url": "book/index.html",
    "revision": "b629642480d06990c094217c03cd1a39"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "740527506a62d7e5de4fdbb0bb1f6ada"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7760e9a06d4b7e0faf31b49f53d8c6b5"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "5b0d1b21f09ecb83a09be6cfbc8f8ead"
  },
  {
    "url": "c/audio/index.html",
    "revision": "8fddc50ee54433632d869a5a72ddd8f9"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "f5bd8e84674812c3253d684c4fdca955"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "43a4d906c637fe6415faeed7c21af379"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "0805ed9a280381c4a7717e077982ed93"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "c800b5cf8bec7601c8fc4188a8c5d19d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "bfd923641605cada6c9dc4cd1b0ba509"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "9630986fa0bbae19470b03411d5baf1d"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "2f9cf5d501da8c4aa1d7f526ba62eacd"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "6f3383c281e3769f8c20499f421d6202"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "9fc3bf0322cbe250df3591d8b5a569bb"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "2a64666eaeebdccc267a806d6dafe5eb"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "8f51a869e9c5a7c3f25777e64c99d6e5"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "957288154f0522f3fb8b7de9767f5228"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8a5c31c6ece069b9e0830a5eb366419d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "8e285ff3265c322fbc5c2734fdaa1d95"
  },
  {
    "url": "c/program/index.html",
    "revision": "2a53178e6b615649c1b11a26462d7640"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "abd6626256247c633d20381a0fc113df"
  },
  {
    "url": "categories/index.html",
    "revision": "56c74e0a5e3583bcba82f19e7d4cdd85"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "8dbaa2babfd4e66f93e0855a6cc71db6"
  },
  {
    "url": "figma/index.html",
    "revision": "d0a71772c1f518c3762edc72816ce182"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "34df1f9acd03d85eb72e2213161b6a7d"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "fd53d6696964099dc347035e97c5c219"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "34f1873ffaf0ee0895a13edd64500218"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "e74cad753424cf016d9436ffda471e87"
  },
  {
    "url": "flutter/index.html",
    "revision": "397300d5440a50abe9c11c72bf316be9"
  },
  {
    "url": "flutter/point.html",
    "revision": "16d7c9c29d8226a01df6e74a8a084f07"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "bd904ad3e56292428a3a7c3714bc9f52"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "81dfa2862ac1a2761a84fc77710fe301"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "cfb618e84b1040956a46bb041d4e3c38"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "24cf86e3e5a3b59ec4ff2fada354447d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "993d81a00666e782bf57c36c4e618a74"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "99a49cdecfc62c659ba63e6c3fe0b6a4"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "df12185e81a1ecec0ea93e38ed425fd4"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d0eff0d4aa9f95a5ebb5359ad03df7bc"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c7f744f1b13bad4082dcaf7b097a1108"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "cd29a1744cc1db8e9e5abd0008fe34e5"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "294253699ff76d7416ce4a5fe122583f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f06083b9e2acee10a7b63dedc3302e63"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d936234abdf5d51aef8cd78215d9f3cb"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "2560f5cb1566c1ebf6f3619c713eba3c"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "0fee2ed3a5d6a204c08e7ba78f75085e"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "02b2aae2797f8523e5a9a86f30bb3922"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ff7c021dc53dc14105317d36b59cb0f4"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "92bd90a5791a15ef76eb6ff7c9ae1271"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "3ceb8a17e3c492b9f604abbc63daf492"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1388077b05f97b29abb917a99f888492"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0911515bef14b5bac99ee180aa6c2f9f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "96adf0515e4419b0a3a68bcd79c20373"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "af1b3facea9b7f8364a986196d5c877b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "344970633d13d36edc2e336260d51029"
  },
  {
    "url": "haskell/index.html",
    "revision": "22cd30b0cf1e2dbbb25afff29cf2a13d"
  },
  {
    "url": "index.html",
    "revision": "039169e820367683aabc7e996318f1a6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "454d47ea98a2a5bc23b71f1eb915b40e"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "b0839287ae9948ffb00a67b3c56a7259"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "bf0fd56e8ce35be72fad6460fe392c0c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d9e2facd5d2117a7b2719254821df0f4"
  },
  {
    "url": "python/index.html",
    "revision": "22417f84085ad8efd3c6a4bd345ed53c"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d50753b6289b9e7a8d828d795764e7e9"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "6af95e69db10b5235f79a6dfa10ed6f7"
  },
  {
    "url": "python/python-file.html",
    "revision": "71edb768ec69bcab76d85240d1eda35d"
  },
  {
    "url": "python/python-function.html",
    "revision": "ded55b0c251551c39fcbcc27a24d52d2"
  },
  {
    "url": "python/python-generator.html",
    "revision": "8ea4b683b47cef9717496999a5775571"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "09307c1bbf7ae91e20d01b479b1d4168"
  },
  {
    "url": "python/python-module.html",
    "revision": "a5030d04ca3c0cf19ed6eef78b360a7e"
  },
  {
    "url": "python/python-string.html",
    "revision": "daf8115149ccdcf1b8869c21c6c25838"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "d3fb95433213032c7a9a0bee4b8c4a2c"
  },
  {
    "url": "read/index.html",
    "revision": "9ab99076b5d4ca0c2a37315c2d37aa01"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "70ea60cd938b9c458e7298408ac96221"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c13cb8a3dadc8d49822a270fc5e5e75d"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "a44a66c1a89a3479c23896e4db86bf36"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "6cad76a543f7e4fb95eec4b065e919d7"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4012fa44953e2e5e303d8fe723c7d2f6"
  },
  {
    "url": "swift/better/di.html",
    "revision": "96fc21e07cb7e54138e877725b74aeb1"
  },
  {
    "url": "swift/better/index.html",
    "revision": "af62946d70ba159f66797efa7bb51272"
  },
  {
    "url": "swift/better/last.html",
    "revision": "a582dbd5eeac4d24227e647311545a49"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2e3f95166bc44d257ed0d0dda2e19213"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f82f29d722b5d4320cd5c1f7739148ed"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "68cd64e2e26569724b1194bec1480d22"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "5563a17e2031295263a3cf352026bc50"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "3157bb37578eeb94937586f3740f99d6"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "2ad65b3f7628c047b4ed41a5e6762cf2"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "d0c3c7ae2e4776a698638172fa15dec4"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "18e9fe0974ffbc9f6f3d2209a2d381dc"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "17647bd402ba62664f749abef9a4e015"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e0179c00d5e3db8996c3720c04115bd5"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "31ff7c520625648d32bae2f84f6f7d2c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "3e48d1a92d95c5980557de25df52ab0e"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "c7253d83d5e8010e50c6780f5a68a50a"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "659031e08fa9420a7416d183e007e7bd"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1cdd7fdbef27bcc620b61d0e4eeb509e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "1bf45dad8de3d8b40eb89e0cccd0b7f7"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "41fbdf523cb0f58408452326a69bd3c4"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "ef9a96566298aa20ea5c385d7e56aad2"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b4404afc447ce156b0c78a8d6e009a34"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e4e03e7718e050e6963076c0c6bea94b"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "078055352f4d17eda8a53f89b6cf065b"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "88c48608eca851f0a795b66f8afbee13"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "883e2f194eaf683dfecaf9a9e6ccbf98"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "58ab2dfaa30115c4c7d7659df507b215"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "60b5c12f25fd435152287e71cdedb2af"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "a3a48ff811fb28bef68ac197bf467aa6"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "8aff8ebdf33eefc9dfb41a6bb8fb01ae"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "52b27f781ac6c88351d0682b230c3d5e"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8401a29e61dfe5c90b1ae5609cdf3752"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "2367792587dea0e51c2af1d809397b43"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "bc581bc82f17dac61cdc9cf5b2e902c0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "2b53d587e4b2edd2d5809b78be6dd69f"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "bd8a1ab3a293e320430fbe7dde662b7d"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "bd5c19adc1cfdce0c61f884839d364b4"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ac604a46361ffa5561485f6d857acb59"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "bee5ffcc274ae7920f9f98d69f9f4ded"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "409407fcced8c132d39e43137e02b955"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "11dc7b1fa13477869d4e7efd5562c073"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "029aab670f42304fb2c7141c6eb9ca6b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "181c8e78b384d4e1a075a2f46c5f267f"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "7ab823247c8665c6ddd3d86b616e3f6b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "79c34bf6657db56193eb8492999cbd3a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b2ce0394397fc5df232901fc0f015fe2"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "849456d6a4353d2bc85c0425d29c3f25"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6fd8f8f78d93e82a8617aee84b79f345"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "dc126f40e42c069ee11a321cd084ef3b"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "f00d24583e20b1fd442e3522cfb5baff"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "801209e79635eda5fd98d76b89a88ca7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "13bf9a5a47d5139f7d16688418092703"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "01a18f4b4ca66b3336dea2a749b99118"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "9b40f998966c96fed499f0b2d1332bb3"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "3eb150c2f9d6044897b52dc3d621bb8e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "9322e5f17205d9dc02b411f029094e95"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "78f240fee9d75e9eed91f55971c23e73"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "8de7de66c56f1a42bc4d9110ec6bd619"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "8f4e9d1c326202715975125dfcb2f7b2"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e1ce30ebb34e7ce3ee362259d75855b3"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "fba2a20757b3860f907adddab05fe02c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "957119bf89610732e2bd9c47125a94de"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "2a681c745ba439e26cf761434d4e621f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "364ab968a5d9773da949126162eb1a8f"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "53ca073ef4d76cd64e7386cc325a8a10"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "8ede306b09fa819391d1c2098c679c19"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "892e9c21c1cbe59105e2cc935153e5bd"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b59b5ef455b4b542f11985440de8883f"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f5a540978a4d79c5851f42bd3d02ddaa"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "0ce7fb71a92c9d5f576ec2e48534c54d"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "2d6457b04498e6e9afc94d68eec9bc03"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "764bc3480320d9486ca518d3be96b510"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "e75a76836047882c8f7ebbd9dbe7f6c1"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "16a5cd686aebad3e19ec9b83851c1ccb"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "1f9a044117fbdaac250a809e9342ef84"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "1d707c9e85f402cf226f35985a434c3e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "7e277d0573695a88c914c0ae02c5c3be"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "b38e09e1ff8f8ee68441157ee51b531a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "402f35a4c197e772726e7ae72073e6e9"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "82509d26889a9983341902ccd6c4c384"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "4ffb428590c4eeb81ca7cb924af9feab"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "7a1a07d4219de786048452b4da2e696e"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "5791fbbffd6b5979a3cdf24c27f51b8d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a6707bec8b733b0280d5f9665d3e8aa9"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "6ff69747f0f05da081ab4c2a95b03052"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "366c1500c712e37ed5b22a09426f79c1"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "463cd4ce8c6c27df24157d856eecf930"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "3520a901dde56d88dff6bd8b81fb42a2"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5a0fe6b6a7d476511dffdd3ccbc69ed6"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "2ba0f1c064b21d2e76ec15de99f70d46"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a0445ccbd5b8724adf0de0ed9c369086"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "fb6f4fa4399e91c7190e76d57519d076"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "ade7d7e30388d0e7918adc2d654b10ec"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "0a7847cee517932779ffe9d1ac5202d2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "bb01d35600f2dc8b74c57201a07a673e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "ae91228658b7b24e976b368e8a984011"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "127c6f95d3d1474dd900bff20e67b1f2"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0995fc26d7f2a1e6f9da39f48c096dd8"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "85b9aeadbc44287e200e08f994d7cfe3"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "03bcfd6321cfd29ca41a313443896709"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2d201564f32d77f6421b32871a620b11"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e90aec75e3b6379a728753886680e8b7"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "3bf7573e4b46e8837cce115cb7b9d65b"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "b0d461983edbdb61aea8378b0a195cf9"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "fedb48049a63b1ec57dfa7c9c9404a1e"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "a07afb5be1163d5058af5a95e8b0e591"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "36b328b26d768f7695f85c551cbb211d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "90df527474000486ab36ea9de335d4b5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c8f0f8712dca943e65d2386c852c99b7"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1c9bb7cc790d26106d282e6824670098"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e161481e0d5a0c7774c9ae3c03932786"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "94e121fc72a5c5a93282de94d2380330"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "dc7db77c72e5e03e4c3fc9845bc8d4ab"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e34d622166089b0849589d28c368a1f1"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ecef437f9f98740e57c06ff816543298"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "2acb4c9821d927fd05354165b96b7c7c"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e6fa203c7223f39ca407dad5c42f6f8a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d023b2787ea1b12c5c10069c716a71f8"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "4ce6b2db09c052dcba529e1c7e4923ed"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d8953c8d969bcd855f2d806bda5713da"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "a15732ddd0ee7e25b589ee1bc1eaf338"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c3b6cddd9ebf9e1cf2f9d1d48d36b447"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b6894a44a252b79e32e18ba269c0d83d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "7c253d17082aff1a8bacd9ffcbde552d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e396f7acc386c259881521b315b33e13"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "08658e02a16d2607bbf0fc78c62dc065"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a1f847f19b6cebd0a0aed9f0cc452c6d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "405a9b7707cd3373df5445ef4eb2878b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "44e98cdc075d76d06d8261385b2add0f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3f72ec05634f0379cfc3bcb178b26452"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "cb174f20154d7581f962a3cd1bbd822e"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9030f1e967c8c0b1e1e578d8ab05713c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7c1da18c15be9ff3de8c468dc4175c61"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2594f1c3706a25435ca315c4268b7e5a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "9b87492d5482fa05123e787ad05c28a6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0ebe0107d7263f2c5d0023117210ecbb"
  },
  {
    "url": "tag/index.html",
    "revision": "0e042de2a2a8e9e1f27eeb1f223f8b92"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9c3aafee40cfcd74f77deefb06d4f558"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "39cf56399b7ebb398804b3471e5c7be3"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "e04befb2925f5f4b60dd5f3c4f8778bb"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1d533cafc36bc648e9fdf0017e7cf170"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "e3da451bca31183e6007aa4abbbd5b07"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d57f2ea198b9318b47c2d6a9c6f227de"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b4dec1b304fbfb6decae774ff6017818"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "7469e06577109978c61b7243e86f1c3f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "73be49d4981d68c2628e00c7637faddd"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e642d8a47966050af93240f353b88bcf"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1b371d495b8e25ac3bc533e0dbf50c4c"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "cb068bc24f15ce13965bd976e2ff8ec8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8a18b1fe298d1446705aa84fad27867c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "4b426e2ca848319a14055935471c558c"
  },
  {
    "url": "tag/read/index.html",
    "revision": "73c26abb191fa3590175a2ac542ee817"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "fe192c1e555c16447f75e8e2be92a3c3"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b3abd6990fdd13bdd3b05e4537ecefde"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "18f5d4a810d0065e7719466115a27cd3"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "9f8c856eb3b4e39a5b5fb8225ccc2740"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "58a691ade7af1d622d1df2f3f5fb456a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "8f4081989699c49a8cb020439f71c29c"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "144e27cebcf3d5226de18f3710de398c"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "c53209484555c7a9bd08f80ef8e24955"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9b7102a0c233a6e4ea06ae6cc89b54e8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "402d5ae5ef32b321e33a4e06a53f6774"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "5b8c2e510ec4a8fdece0b21d7e2889d6"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "85f8760af033347ac06c698f86ac3976"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "0890d01c9de376cbb15ea72a9e10ed83"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4e20749167a97e510bfb3b019f62bb67"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a85813d7aa4f7d262a7e05a9ae336d3d"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "ea77c7d64977d50bd6a3b8845a4f065e"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "83d150ecd8a90dbb34fb2ab3570cefb1"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "2a3ebed2e830733766ff8dacce202fad"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b6cbbcaceb6ef56b053fd4449c6e43a7"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "28d51b8ce5f076d356bf8a2aee5cc371"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "3640a75e8f30a33683839be65bf7354b"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "42674656339ce82aa502dc37e0cb134b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "8ebd04d527fd9dfbcc40a2bc4a8615f3"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b519d10acd925e85366ff922f00f7396"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "262d6666524e8da3ba1b58ef85ec1354"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "663f07787f25f7fd690fe5504fd88ddc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "62c64a26260fccb52508b277fdbb3aed"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "5cdc325f18536e33b36fced9afa6a386"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "c52ddd03e4797c0ca7bf9496e87998bf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7010a10585bf00a2c591913344fc2eff"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "101b5f4263bb08ac3b4b778dd4de5e3f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ac4fbe4c2ffc800cb52d5dec890428a3"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "06f6bd68b14f1696dd30f6addf22ed22"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "2455dcb60c814cff524ea0a2c84152f4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b026f65683ecc7bd8cb4298bee2c7799"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "95901b9f996c2f2f544b7fd08691d086"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "697a17e798faf6b3ea12bea764a50525"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "4d8418412361694cf7b32767584af46f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c6802b9fc7107e9bdf308107a8d1c1f3"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "aafe39ed7fe6ca1478ad16b5cda84ccc"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3dcb2806668b237b2abdca1e3d77fa5e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f94a43a2e68f50b11af03e825819490c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ca7f35cf80aa77d3bac2c638d41a30c7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "26ac6407b2b8c17fce316699e89dfb82"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "191794562b895390558f440c217142e9"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "54edd50e6988c232ee8535a006105e37"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "28a6d14efb6cb5282e29cbeec070b5ab"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "316a499723c5d3c9682f5da447d14d74"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "4b76852d424c70289e91b991d4d5db18"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "64738eedc07fb1add2808fa0ecb3fc36"
  },
  {
    "url": "timeline/index.html",
    "revision": "7246b688cde37fdc2fb448f688e71bed"
  },
  {
    "url": "tools/docsify.html",
    "revision": "8006ecad9cc63841605efe570529fd20"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "60c026a0ee7c5a2a33075815ae5f9bd6"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "eade403cf5ea6013b592ac90a16ee34e"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "4c9ed4e6e1bf32844cf4df439268ebbc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "64e4b00aa432ed6d4f7891de20ae0478"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f22e75c40beedd0a66b728cc130ca8bf"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "bccdffa7ac7141508f32d0bfc8491f89"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6b19651a269b4c300986c3524a05a5e9"
  },
  {
    "url": "tools/note/index.html",
    "revision": "1fd057caa3e90b4cf33f96e8c874e1c4"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "9032c2fb0e2cd7aeccfe9402e00e57e8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c10ccc5aed2c40530e6913d0a76ecc18"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "0a8cd7bb1173354e44b3d9a973fd359f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "7ce11f62a0b7819a00fa4cbf01007738"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "c3d9b224ea48d8bdeb64b80c4aebb6c2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a276eaa2fca799d663663ad933c6641d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ba10701306fbec275c1c8181eb2acc82"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "31dd75172bbf4462bdc2949568178291"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2b53824519e7cd36d2fc63a0b3d1546a"
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
