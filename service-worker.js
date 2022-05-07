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
    "revision": "55a58ddc59b44d387330b21bfc0aa697"
  },
  {
    "url": "about/app/index.html",
    "revision": "34e4856e85f4511d23c8ce8be2136be5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3fc4834b23fb151798dffe8174d22379"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5e4c25e137efd86f8784e1616d7d0018"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "fc25cf9b706d4dadd92ea118c4525751"
  },
  {
    "url": "about/index/index.html",
    "revision": "960c1adca179ce067efc7bea47c534a8"
  },
  {
    "url": "ai/index.html",
    "revision": "52d25cf65ec7129dd59292946f9300a2"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "049d2f9adc7d9db4d2656a27c0b3121e"
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
    "url": "assets/js/212.3227f383.js",
    "revision": "82a9c30f3a281381b01c1f8e2e87777a"
  },
  {
    "url": "assets/js/213.267a79bd.js",
    "revision": "6b2e6554c547292cc49778697b243514"
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
    "url": "assets/js/223.bb8512bd.js",
    "revision": "13de0d05308e2381446d0fe450549e3a"
  },
  {
    "url": "assets/js/224.e1853f3d.js",
    "revision": "8653bcce56e57c5bd0b2290beb7ac370"
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
    "url": "assets/js/261.a7e3daa2.js",
    "revision": "d1fd8d36af45a13a7020e23dd802d312"
  },
  {
    "url": "assets/js/262.ae32009a.js",
    "revision": "a38588a458f9c087ae02928b114d7ead"
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
    "url": "assets/js/67.d2f55ac3.js",
    "revision": "6b03ce4540a558937e2e32536942014a"
  },
  {
    "url": "assets/js/68.fbc08afd.js",
    "revision": "bf2c7386a99842a5e324ed877ba51128"
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
    "url": "assets/js/app.8a5c2554.js",
    "revision": "a0bef5e8ecddfcb0af6d792ea47a0a06"
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
    "revision": "9f565d9be8981617fc322d352f46b952"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6d029d9b9fb8ad6da2358b6c74639e3d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0070b7bb75e094e8e21c7f17d4db9587"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a9af35a6f0a604e03903c8c67df672c3"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "1f2a52432dfc8ebde16e49330ce9f7de"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3ceeace14e1d1ace0fc19948d0061228"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "52ae26d808f191f664b5dfd629fe3106"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "20bf89e4d291b8d727350d1a036ebfe5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "84c746589ce8f0b76939202f1aa12143"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "164cb11091e06d836fbb41303c79083d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b11282794f4e2433505318c6f101e3ed"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "4b2f9fc0d2631b8a7825a64b8d6ef317"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "4aef684785d419263865bf787eb06ded"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "2ee4dfb34862504d709561acfc264859"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "77ce51279d088983f68e8dd02ec672c7"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "62e6dd35f4ee129a4310a432b89ac2ee"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "afc0e92ae1c69b1f37b0634250cf48c3"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "084c8e1a8817a737cfd171a2e347542c"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "0e1f89ba01f4d870a457db937a66e28a"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "cc9b43434885d46d604528b26fe28e4f"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "63a59aa52bd65f06e1d0ff989715f353"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "50a025d6fe6c6ca839213056a51418ca"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "fc418219a104deb8aefa096f3cb1ccfe"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "5f2507021ce890bda93cf3462d413665"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "b165952b492aa8f21769bbd0b9950f8e"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "e7413f621c653120ac26eb3f0f65d432"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "13c531913eb1da4425bc541104ac7485"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "74c4101d4e0b83e478557d3472d117fc"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b77ef260277ff869e0164ffdeec8ec0c"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "64758df376cc8648345eb78bb7f87ecc"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "f0bfb6814c65317ce888348a78395eb6"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "6f6854afb6071805e986bfae2854baaa"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "736bb78d1b7a3f5a46b1c3b644d9a6d7"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "9303641727460f88a4149b0e30462da2"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "e557283d9619c36a1f32f2be1148b64d"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f3b351428947cc5817d215d09f7ff1f0"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "a0c73f499a2ca5ed514e257d3e6bcdfa"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "6d1ef79e81b9b80831dbbe56c77e636c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "96a66d6bba072e3695de215d9537bb42"
  },
  {
    "url": "basis/os/index.html",
    "revision": "180af80f7df3e358bff27bcfc16b3109"
  },
  {
    "url": "book/index.html",
    "revision": "b85fef2eaa700d5740792ffdb3c3bb3f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d9d7bb2b65be44d2c0dddf6f1847a187"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "e191143454928e7639348c01b4a89bfb"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "0cc743a7e3c61c49258c6cf839ca3368"
  },
  {
    "url": "c/audio/index.html",
    "revision": "ea34f4640b6447ef2951f50c8af98936"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "4a5809ff9d617a6afc038b8a71be87ed"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "5dad4ab5e30aa15260a971b93c109efc"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "23a53b7014873809e1d6362cac7fc10f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "62563fdaa0de2d9f0be5fca1ee1610fc"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "452cd8dcfeec18e6897766c1e8ae6584"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "14289116d7b5e9c9e965eec4056c5936"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "ab172991bf704a8daddd11620ea5b232"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "e1a2a5bcb1e4082b1d0a0bb4f554887e"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "34f560d16d378a03a70e4370206e69d1"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "6d195cada101e5bf15dd1e911f116daf"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "ac488e084506edde6c790f2b726b6149"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8c066aca8d4c817dc8a7ed76f6043602"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8e83de14616ed3085833c48c4645badd"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "32c56be41738dadee99dbe26b3faa740"
  },
  {
    "url": "c/program/index.html",
    "revision": "4839018ab096499b647f1b75bd347197"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "dd78f2fb93e5b16f2e735f14b4e6078d"
  },
  {
    "url": "categories/index.html",
    "revision": "7ca39773b35c93c87dd4e854021ca598"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "8f7c8cc6627b67a818b872dbcb051130"
  },
  {
    "url": "figma/index.html",
    "revision": "9f1094210a6ed5385c6153dffe5a30c3"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "a0fa3a7b03bb5da603b580ba779b9824"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "36d74e37bf25c1ac391474e3608b184d"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "e617e279462c19cd236f66587c3e93b5"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "e7dc63f191a120bf1835086b20cd3b14"
  },
  {
    "url": "flutter/index.html",
    "revision": "45999c26c9c73f1595bf44efb7ced6da"
  },
  {
    "url": "flutter/point.html",
    "revision": "37c176d67987832c227e1d798ff14cd0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ae39ea4dee53845bcaba7e0ffb23132b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ec920f7ecd3a94cfc78216581e9f3540"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "dea56e732b31323b5a0235fbfcb41116"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "14bd4a75a9f9451980188af0fbb5ac9c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "100b29a0e9fdc7cd2d2947fa81d7b065"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "3f7fd4611bc707fa16a48b917efd4a7a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "fcd907033f2c5c3701ffacd39ba62235"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "13f2629af07dc4b32ab97110ef07b23c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "3fbd97c70a6f8b7d11b4132de2ce02fa"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "fd19cea1d92c0adbff1973aaa5c08428"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "791b6a9f1fa20c0297fd08191c2a4429"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c87833f81785439cfe5093d42802c9ed"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "a6e10cbb0e439804d19c5ec2ee0467c5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "658d6ad3ae8a30a49cf41cee3fca09f3"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "38d086022456847f6e5440d95eaf9193"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "230c6bbf185aab492ae20dc856244f70"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ffecc79c789d0782be5e3ac78d147ba6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "dab9559d82660004717dd687a7a3a563"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e6ebd99291d8b6115e9dc44b05ccf01d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "3e5fec4a11f7ff75d4fd89e8bc3cc75b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "2045ccd3c196ffa0bc01deaa0b0e1f8c"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a3ad96360ea670a752d641f69695bf7c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "141e60a72035b910aba3067dec38a655"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c369c901ac70cd556dc89818a657414d"
  },
  {
    "url": "haskell/index.html",
    "revision": "1225f6f75c21345e1fd096512535a7dc"
  },
  {
    "url": "index.html",
    "revision": "867906abfbfdeeef01948f1969059c9b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "2242a5e0b22063480793b42912d183d3"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c19b39711402bde1ee8baaa3d90a17a6"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "e5c7e223e96846328a173c540779994f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "4b22f0ae37d35a5f3338b2d781572f58"
  },
  {
    "url": "python/index.html",
    "revision": "8aeea03e146bd42fa149dea592911667"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "17d2a29dbc500bcf123fd6f1c07f6cd3"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "733b31e42d5b08869855c4d30ee1a1a2"
  },
  {
    "url": "python/python-file.html",
    "revision": "d4e89157b9181f76dc7ee632f03aa455"
  },
  {
    "url": "python/python-function.html",
    "revision": "f64371f9d5d2e7a84a260f0e57b99abc"
  },
  {
    "url": "python/python-generator.html",
    "revision": "0c9119a1314404265aaa3f0a299d6f97"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "489f2a2ef6d1ec2e09c267bbde62d24b"
  },
  {
    "url": "python/python-module.html",
    "revision": "46ed6961abdceaa07f375d05bac13a90"
  },
  {
    "url": "python/python-string.html",
    "revision": "3380bf66e9feb927f61658b07772020b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "7cabee003a5d0aece325d9944ee4fae9"
  },
  {
    "url": "read/index.html",
    "revision": "67af296eaf9becf3e56032250f62cdc1"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "63803dff3db12daa7c3fe69842fbc420"
  },
  {
    "url": "swift/better/available.html",
    "revision": "a3fe9a6ae12feebd6d28cf3e40813c03"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "5e26d700209307d4a65ba2e0f27ae9c6"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "2719c39b25c7d633abc2bd622fb58f18"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "54126d8b66280f50b923cfa78b2aa581"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2fcd9880aa2c31834897fe4cbb8d39a2"
  },
  {
    "url": "swift/better/index.html",
    "revision": "e6691ce14611439afd2a1d7690ec30d5"
  },
  {
    "url": "swift/better/last.html",
    "revision": "be68c4d9e1f056509bfe9fd785c0b50c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f033f577242d6755e19fd713a50e2ac4"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "38b6564898e88a201cc6773a711ca6ad"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "092d29e1d16422334c017d033cf8d010"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "6e26774d801914707d211873325fccaf"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "99617ae40ef37d947b9f4a932ecb02da"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "53e079c2e0662fc97d9e79d5e7a4b15f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "6de14c854b2c8193f3e48fae90047436"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d520dd6808394c8ce6d40087955bb3b2"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "78c47caacc56c1c94221ee52253e322e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "03d072ee1244a2f03bfd738d68f68b36"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "494022966c7f9744d26da93726b2bb75"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "1540f7cce3aa57ab6e26ca2f719928cf"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "4b7e58fa91bd50ca2fd25e5b63158c2f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "2da647f9e50a99589d0236ce24ad284c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7a6ae262db0c8383a369c843ac58fbaa"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d9275e4bcf2e11cd8103f71d0b330652"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "c81657bf7691145a63dfba3d5b95e9a1"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "45b0edcabdef523b258df1f2e1fbf1bd"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "7d43aceb1593b8554de66815c373ac94"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "5e8f9873b841744a43d2077c53f71b73"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "bdee73f56bdc675b09c7d31195990215"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "5e857e4265a92009a56dfd4efce9c90d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "f596d967312464b48e7e41c1a465b1e5"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a47e12fbc49985980c56179b37c977b8"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "423ab3f0649421fa1e85f9771e8caab8"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "7761559b5cd1dcc13f6e63c3efdbbf29"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "78d37d90e105b91ae679f4118a883110"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "6fedde1a090b7b96376766d08475f241"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "91b5e2c2b17764e8335da8e339f2bb90"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "9c2c7375855a0c4d62885c2499284a90"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "ada59571d858ee502e9cfac24007c688"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "cf42a89855d60d276381cf4312b10df5"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "0c6e4b9c5d2a9b777cca68d4cc70ad87"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "cb36f81d5ea36c9fa7e3f3324c66d166"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b9cf7f5987cd6482c636e936e196042d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "d66fd0756975a317a192519aff537d00"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "afb198e48f7fc7247e88cda26165b074"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "3b9dacf3ed814a5c92197bf18218d762"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "25bed36782fb382ec81d231bda8e4c5e"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "f9f98721c8cb5f0eeaabd8942b83ccc6"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "e8117472bdabd52bf57ac5ee03a9499b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "1e59c6ebeee72a01f2354bec963d8941"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "adf29bd1311c81e8404bdf61344058ca"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a49f4d54eb71b707153f3668e4f31148"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "7a5ee41d380f500f7049af75e594bd6f"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "1efc2d02c9c97af06d74dfb648ffa94e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2f23caa80e821d7bebabaa5c2f11a52b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "0953ea8ce8859becb31f30716f133250"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "3a9ccd739c0615b9e9563c074a4019a8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "4bdf97dc73ebc471ff3ae2fe6c1b4dfd"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "028c879af13991ddb1b3feafa36ed9ac"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "6ab4b07303ba71d93837b9a6c9238f1f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d58efd182bdde5fb684ea2c543e6d442"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "345a3fd7f03ab64cb63ef0aeb7a0a0c6"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4010360ef2f29ff4b49447c3a09d1071"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "4622e967aca570ab4db835cb91087084"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "49e10058c3c9ea97344b72c75c62ca30"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "634ed5cf7cfd28f50146dcde3034da32"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "71c534a8567ab945379b3309cd0aa986"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "4db9e4f5d23401fe95803724fe2e0025"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "428ad3bcc23aaf9e324c15120ef30164"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "eabf69c54d0a56dda094a7c8c471d4c8"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "0d5a6f48032972315fecf2f75f20eb75"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c9363db9f365cf88043ccad7337c89d3"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "c664c679db07820d5a924e782e586cc8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "8078d7f6595f2175bd1e40ef0b446d65"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "73d386c2971c50062635cea9ac1971ee"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "cf707f5e5f78fc94aa27c6c782ca7cbf"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "b5e6a5b574537fdca297c866e382a500"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "e13fd886e59c5467baab3c15684f90ab"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "9a6494ca61bf5aece1af3956a5ed1cf1"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "b3540d9f9d8161366b5b5e1966fc95c8"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "521abbc86de8041d6f5ca239e85f6276"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "76dee29e6482fdf78df72c557eec19f9"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "2cd7a564afc6e1622c3bee4fe9e80c18"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "af76cab15c6be6282038df5b9cf0f06f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "13bfaaeb792160b973b991a010b50903"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "17df4ebf3982a33f20e9c2afc5d2cf81"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "fdb21c9f11e4005b5d9bd5213117a6c1"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "84c4b1ce24b0dc83a292505ad1766125"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "80d69b3dece33121522e80a21c176f78"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "e2793a8310637ae09bb386547fd7843e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f8bc1c573c0b0214f4d11cff7568afba"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "7b33a82c8d95092b5e204baf6a77d3a1"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "35b7da5c5a0edd502d9be5b5e9da67ad"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "42f026cbdd6dab771d9c7dec7a4a8388"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "d54e34d194644865d9af05cc851c9257"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "436c0be81d9005acf64b4f08a1643029"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "04fd5616c45f25316bf70179ff3ac37e"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b026f2dd20def1dc12acbbc47984b312"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "fdd0878d48e94b65129192b58da60b97"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "018ef1c675bff149b0fdf0d4fa33058c"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "ed4bfee5dd7984b90b72983e8144a069"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "672800f8136017434d573a4c17fc690d"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "8a7f63eb3686a68f530964b6cd203064"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "899e89575abc436e071472d3f59e0c61"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a19f87d1365dfb2a70b7265e2cb4406a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "76ddfeca05e045ee4f7c708b15d14513"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "13a833153a64031b4ece609cf56d373c"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b4d560c8d193fd41d94fce6f35d5f763"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "dfeb2fc332a512a23ccbbaf9f13354f0"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "74129616b107c83d8c3f1a0a7f69db9e"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "2861b1489ee623ee8fd5969bdf4e83c2"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "a7a9715e83c429c0b47a767c26d7d86d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f92867eed681dd6aa5ba51c2d48149ce"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6f1155246b0f062207310ee1fb911031"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d2c87788e24093b197f427337b0b976e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ca5ca767a4ed5618047d3f6774bb8f64"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3003a7bdc27b794fc0b0b561a20d0d7c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "420d5731f0affeb0a952aa6afa4739af"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "684eb499df239c573f555ee03019c030"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9852262e162c7a7c21869a44b6fa01ca"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e857c7b04356a9cee5bfc90cfdd4e48a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f644bfef51531bce8a81311a0c1ef15e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9952a9e45ff1fc628d98fbce5f663d8c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "10de5d9f711e85831154d9dbc43287ac"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "9256daac4b155c0aa99a0cec901d26c5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "f82d79d0f20e94a389b3d0e58e89e731"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "11ef5900f890e4918d713b60af61c3e0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "5408e44d04fbe7165c24e41f4aabe6ab"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "09255cb5622bbddd5aa496c3a06a2789"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "2eb619dc51c1e8628022afe34e947b99"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "0712a88786e7ae5901a4bd0a1dbc66ba"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "688788310c654b5f5bf9461ce449b259"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "28fd38e2e2fcfa61226d2115df9d795c"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "8151804ec690bbd591cffc5c204ad5d9"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3d382bb1b7a3c7a27fecb8954f8d8ae8"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "28e304192d7594cf0d4285913fd6320a"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c9ad9a5819ca744c32445e651ee9fb5b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "726096df331830ed787bad9f78e1e8eb"
  },
  {
    "url": "tag/github/index.html",
    "revision": "423f1ff4c6b618ceb3c417c5002d6466"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "6d9c6f7600256a61b7630a0250a8533e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5f4c7778f73fab80e4a1cb60acfe6967"
  },
  {
    "url": "tag/index.html",
    "revision": "2e20a2b82eea6409a4f5619e045f63fc"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "facb9f5a2adcfb8f09b86a261b99cb10"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "b6e207bc5e7bfc3ae91dc06b2ef779c1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "bd170d3c8da7f7a09ee74bb7865d4122"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1212dcdcf703301f55d97701ef22e4b9"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "44161300bfcc6d76514990f265c6c368"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "a4912e4cce39d8bc0e37f0af54e5aa72"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "60e46b8c0a6b027251a6ab523c28efe6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "6b089e0198d58576eaa161fe9d192f42"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "8b0a4a630708523ca5a5545600e34515"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8b3797e88541a8b7e2e408882fd9bc27"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "5043a0ec52abbefb421fde826b9465fe"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "ddfa74b7b4630a5bfdffdb34a2ce426a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3a912d3ebcb376f7bcb3ccf1d8facbf4"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "e2cda46c5664603d79683dcb7a105a2b"
  },
  {
    "url": "tag/read/index.html",
    "revision": "57ec63fab6cf24a3f365503bf6a55409"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "532ba7c925d5661111466247eb369af4"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b8cf7f752c74755d97b606309a97b895"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "001ab46dc9528fa7da7f79bcdb6d0030"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "35d76b15dbd0294468758570e0406c3f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "b1f6057f96b17202c08388582ba54182"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "b090c5c4bc56990bfd2617869266275d"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "41635af428ec182304b76b6b68c20d7a"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "0024f1747db0d1b0b5f233feca74a7f6"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "770e2adfe6051127c91dd1da7f10128b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4cacf69122375128e8c6acb091a10140"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "4499f024c31c7303943b793b19a9a1b3"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "6574c468cbdc9a489f4ddc8dd76c48af"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "02e9386d7fb82c778cc2dc394c6c1b3f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e161937e5b46127391a0bc67d0c9d334"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "92032792deeb22083bd3a4f0ae52de66"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "1107816ef4b6274b756526c9a2422e15"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3aa9523e4fe1cce6e7e2c6bb93bb1eee"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "23ce0b66ffba549dc50eb5748d0ac819"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "dfb6b0fea1cceb2b10eaa05c6832e296"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ce891c9b4180c37565995bf6d2126a77"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c4d2c011a8202bdacfebd222e40f6548"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "1520ed9583af6462f13881bc5b9aa51e"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "809dcc22c01569d5f6226c9b140c10af"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1a804b32ef4354f943656d8755f22626"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "d9481e50278ff76bee8037b8bf172d6f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c4dfb16872c659c44b4d7e6e0e329dfb"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "04b4c721a522e75bc8f62f729847c673"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "9f20501fa93148b29f4b17ab785576ec"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1498da60e433290dafe039ddc5ab5208"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "2bdaeb07763daac6dba4b281cedb5cf2"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "39b9f023f9e602b25136086ce55816d2"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "e517f56a687b83b93ab786f4928ce269"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "28f8362c0ab0728a0d82e9cd85f0db50"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "15dac3c44d515e7ef7ad8c21bd9b89a9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ef8a9974be5a8a949c27c381e270ba60"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "980e18746a99b57937d139451466a622"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "22d716c63b1d83d76b98ca6ddd7c9560"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "370719bb06250c3efc7332289eb2260b"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3f17f06c2a8897f21feb531a97953425"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bac733bc5b37270a4bb3cf50603be1e4"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "32e40b12f00be2af8b7029de66788728"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "58f3ee849c8e8f3791777386345342e9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3c3fcaf9f1608bf9bd87a06c76f4ae6f"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "900d9e04f42abc27d94674e1e7f41e6e"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a49a47d7b25c4469e134b6597f23c79b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9c1fd33ca33c8dd484c961b93ca83408"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "426cf08ad62b1dbf0091346256e81e7f"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0e05fc7053d041bf818c20201783d969"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "16c11aaa50f7c7329e3e0c61ef885b9e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "84f4cec244a1c4a4d17152abd2d585f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "e561fb4671eb994b5c4e84d3fbaa74ab"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "ed66abfad3bd72cb49daf0d85c99b7ed"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "860aebf2933014ef3f52f3500352d561"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "befd874f317cf1c9d282ad1751d4deae"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d01a7fa1cda66e512aa7bc3498e7ed47"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f79418f31cdf86ec938ba8678ae345a7"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "653041229b03e6e93b93bac242d03091"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1562fb7cd6b0686b2ff6ba0c94f9aa12"
  },
  {
    "url": "tools/note/index.html",
    "revision": "3e222e36e69b65c4b15096c68935ee4f"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "e343d6f568f9714b47d862680120c778"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "9830c742d8fe1f865b909090a9d8ace1"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "ae1f2043807d90d01e4936aadae72d80"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4b0a74aabfc26fefac3bc7ca4364baef"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "707bd525b804a83118f9f4d324137f13"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "78aed0d068ae5eb12c9e49737baa7d69"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "455f849863c655b2fc5500b63428cd4f"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "1cadb2b5aa654faebdacc2ee34e66af0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4aedd1b7bbe40ccbd7de725d924bac84"
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
