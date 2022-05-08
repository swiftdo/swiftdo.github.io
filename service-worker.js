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
    "revision": "711bf08a71d11b2e1ba241ae9f38d1df"
  },
  {
    "url": "about/app/index.html",
    "revision": "b9a76b36d8bca5021ee6342c5e3adc44"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "327e07ce461043d44bbc2bed7fbe89de"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d5b83491cbd156c2c5779dcb608a04ce"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "893cce9cf0ef78ef2155fbcff6a9b2e3"
  },
  {
    "url": "about/index/index.html",
    "revision": "851f8f1fff447fc12402f7395ab4145e"
  },
  {
    "url": "ai/index.html",
    "revision": "d723c27eb9dd1a316638cbae262ae4e8"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7e887807f7614652f78214ea1ec61fba"
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
    "url": "assets/js/122.2eb1fc94.js",
    "revision": "d0621b92fbbb3314afe32e8179702fc3"
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
    "url": "assets/js/125.6a32d26e.js",
    "revision": "8d38056644bea0149d1913b06a23011d"
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
    "url": "assets/js/178.05a21152.js",
    "revision": "9ad67227a3b6955d0b1aaded5c7c4221"
  },
  {
    "url": "assets/js/179.5e2c7ae4.js",
    "revision": "60bba1b568f8ec70b6ba1070a1ce0010"
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
    "url": "assets/js/213.b6b7ddf8.js",
    "revision": "0a317cd515b5aaa14b3b455b58443899"
  },
  {
    "url": "assets/js/214.2235547a.js",
    "revision": "905aa9ba3266a3147a5ff01ada2e15a6"
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
    "url": "assets/js/250.e7292cfb.js",
    "revision": "50a91091e008e8e1018275190f5c2a20"
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
    "url": "assets/js/38.85954ba9.js",
    "revision": "68de898e550899659706ab80b2cefa41"
  },
  {
    "url": "assets/js/39.f3b73e20.js",
    "revision": "60929e595ff422532b3cbe993e512742"
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
    "url": "assets/js/app.a061f31b.js",
    "revision": "9fc57b3e6f0b4fce98b7ea5f00798279"
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
    "revision": "8eb9f02c96c420cbfd7cfef42d14b6f3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "318b0ce2afb6ca039b62a7d82f026b0e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d63502243567fbdb41f19a1b3114b812"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "465ccad859a202bf214b5e264de699a8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5993fac9acc632a0a3abd01eeac4e332"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e94e7c43742eaf0d00bff7caf81bae14"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "140c3791397a6b1a7f4ead061d9c3648"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "23e8fa31ebdd37c41e837c6f7d5a7075"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7941a655c5e245037dc08d270eda71ea"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "10b56b9cee49cb496a4d8caef6fc1e36"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "dda00304969fc457eee4bc1f0906a2f3"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "086454de87a586269e3e53ed77c6da9c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "ec3c76398a79c5de77817739a28903be"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "9651adbca3960c3029ffff40847ada38"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "a4c64e535a45617eb9d551eabb97aeb0"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "6a7b3ef5bbe004fd52952f5eca056772"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "d38bce92df8dc8cdbb36d59ade8e6857"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "e3d16d3c066daa9f46561910663aca87"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "ea97fe675154d3af410a249a775ce2ee"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "436a9397d44e235db37516a30fd40b8b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f5085bc0928ffb0e1be2a2aedc16e793"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "eade368ecf6c2c5bfb377f28749d4553"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "e381bd454ec11327dd2ca55ad6690db2"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "2483bc174ce7ed8cdaa28d5eba5bdfce"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ce2e4d6f884d6c53d040c74814815b82"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "047a6b0f4a6fee4fc26db4107ae3417f"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "d395b22d3ee59c532b019283cd246282"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "f7cb63599942cdc5ef8ba14cf6dde697"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "4a0d8b8deafd5af24728d44aa4e4d29b"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e142b5beda196890cbb93f44647279ca"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "44bdadad4b122ba9d67b80ff42c326be"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "6a174fb6357e51d800447d6281a88467"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "0d23b745fdfc9249d5bfe3305cfa8fd3"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "694f53644ddecd738745d63151a0cbe1"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "403820f864907f7e7b3795d133c0b586"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "9a95c07b093733abb081e1c8189866e2"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b4accae4cb405b87892d4b957fc65cdb"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "cc1273d3fbd4956db67105f52f9e9a78"
  },
  {
    "url": "basis/index/index.html",
    "revision": "66921904c64ad257e04964f4a1d9343e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7e11f1293d624d537900d76ea79063fc"
  },
  {
    "url": "book/index.html",
    "revision": "b9d683a7e067667b928f09e5f77a84bd"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "49bbd8e71336334a28deadc38e0c71d6"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "acf87760abbaaa88beafaebe4f7adcf9"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "bf589fc7eb8a58a637ee188ecd14705a"
  },
  {
    "url": "c/audio/index.html",
    "revision": "6d112dceab98d9e81cffd4fce2855da0"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "100940f999a79c929e8ca081072ea1fe"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "e3741c49f7269b2c7824cb1094f1000d"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "5d3cb73292732ac72fa377af6e29f71d"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "5a3c9d6375b388686c0b23e95dc10422"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "6845ad165b307143d0d7646a428833ff"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "92069a0744976f5d95cdb9589c9d74d4"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "964992f5fd3d6a3ed7656d2225210bbc"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "1580248ee6020d72b4deaf39ef32bed4"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "00c28ac861d972cb40ada6357d9a67bf"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "889658af68a502f6c2e83cfd668e6e09"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "fd7d2a49d265e7d0d6933c1d853d3346"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8f3f6311ecbd2ceb876357d140c3326f"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "72077de742ae597ede2c186adfe8a59d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d0c84d336af74e886c2583fa4aca6d5b"
  },
  {
    "url": "c/program/index.html",
    "revision": "a55b0f936f4fce0346af0af8d3c32079"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "15b84054a66d2cdb3101a5ef534aa807"
  },
  {
    "url": "categories/index.html",
    "revision": "1ddc0b074930929d9775ff36f73669fd"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "658fa64930ccaa861759ae1c9ce12e6d"
  },
  {
    "url": "figma/index.html",
    "revision": "b246dbed452ba8a036d69fe8f12022f8"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "52067a2bccc60077a9535739e6523ad0"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "2167178ce747c7a0caea39f33a804292"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "433c499379b5dee8f3b7c3cb90473b50"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "ee35cf3756b0452f5a54a1525a0b3af8"
  },
  {
    "url": "flutter/index.html",
    "revision": "3f4279cf9744996cf380bec119365889"
  },
  {
    "url": "flutter/point.html",
    "revision": "7933c03dc59cf85ed0ac96bccaaa2b4b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9a9a9ca93f07deb264322c3db95df8b0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c56fa7167f36b0d7803d54dd7e511184"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1e6bfa5a89f507e5a6e4d26a23d2ce11"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "058616732b6fbb0e756ee7f938366990"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0c860a0c33f92d1121a1bfc8260c03e7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "9285b7ce5df777cd5792dcbf5ad6c696"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "0978052bf14f50515648295a1ec4a0da"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1732df4c1ccc49798c2473e4cd64c28f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f74d06dfc329093d0c29c4cea391b32b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "69579108d6bb3d6a4537abd30730f681"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "e3a623ca22fbcbffbb84262f12eb4fa6"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "798689aab507d01c8c0f848ff8c87665"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fd80b8679b368aa6440d8018c86bcf2a"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e7a2624b1ac670ae954226fe125ba813"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "b3524abc18a97bf320e617fc658c2bdc"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "63671e64258f0f39ee4eb74c102cc155"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "6e48b690c08ba24adf16100a651b9c91"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "69552124b2d399a17b0ef086a1d97986"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d8661af9c106a83ea730d3f3c0c4041f"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "decabb32a7c5f5c6e71ba219af25abf6"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "199c8e3732a3aa385e00a925bd0942fa"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "95931faf5a3037db287317e0cd9853a9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "8dc1fdb8c4d9d23c891d984b5437e5e8"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ed8c89afeb84e93908b06d02db69f665"
  },
  {
    "url": "haskell/index.html",
    "revision": "0ebe74aa105f5596facd74ec0cff2e09"
  },
  {
    "url": "index.html",
    "revision": "57e424fc0771b813c32440a761df0114"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "c6059483c023eb7858bc88574f103b95"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "0b5b2da8e044eeaad182cf54ce721485"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c6981dadabc0510395988a82592be7ce"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "4881e73dd3a36d28e97780528cbe8659"
  },
  {
    "url": "python/index.html",
    "revision": "c142c36ec7e2452e38825dc91f0a9e52"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "f5425a6fcc06941847fd949704b77287"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "a88bcb1afc3cddf6afa4a54326e7e15f"
  },
  {
    "url": "python/python-file.html",
    "revision": "08c7e5cf860c25653a828f8e2feb2a8d"
  },
  {
    "url": "python/python-function.html",
    "revision": "6913d6831d61149bffb12818f1ab3662"
  },
  {
    "url": "python/python-generator.html",
    "revision": "c0e4f68bf257d893d927ae8f0928b814"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "13fb66980acce2faf81aac2fad6314c1"
  },
  {
    "url": "python/python-module.html",
    "revision": "9e23805ecf712864b63a1d9fb8689cdb"
  },
  {
    "url": "python/python-string.html",
    "revision": "a31110f2350e859db61b092de47831b2"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "caa7af805df6d912466121b0bf8ea921"
  },
  {
    "url": "read/index.html",
    "revision": "1ed8796aa24994938a3872fd5721254f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "acc3e6f6fc89ca7965ef2e0020bb237b"
  },
  {
    "url": "swift/better/available.html",
    "revision": "8cf3ed3d56cb19408f26af6f10a6a6fc"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9bd9826b5b465d4ecfbeb94f1753955f"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "18a3e7dfa43261ba41db1bccebfab48a"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1265dc3ae71f45d9c6e9a3ae48ba265b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "457d4e04334d7bacc12137aba70eee2d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "6052e0d77c0c3783e8e7ac91b1e58879"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c8ef0c7229c79924914b98997a9ba2ee"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f1c59d72dba08665cf6eb0e800651ac4"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "ca677eaae91d509f5e3f110f96650cf0"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "cbffc7ce5bf05f2a2dd3f4b2d5872d02"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "ac60814e2661fc891222d522f3517408"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f178376e9d9d5fdad21ae5cb33372741"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0fbfdabc8f904234bd079c4f508a43f1"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "77f8d80825f293032f8625d3e28e0efa"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "834d74f9c174948179faec278d948db9"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a999201c6f1f960b8987681deadccbcb"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ad829c6ee044d3630d16cc15c9fa90cb"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "85af9730d91313e38e621ce4c4640517"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6ce193064901953ace8802220073d526"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "874d83c047eb0fe01b269395e652a2f4"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "d792054abc69251940d397a68b29a50b"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f7d6c3e94ca40a4fcc6a74a63dc699df"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4328eb3f0b7a09a9c04adc9ed42eabf0"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "93507576cf3a3321434be6aeaa80716d"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "3b0ae5640c61ac1d3cddb6b115e68a5b"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "80dd6121e4eb10316211740bba376188"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e5b3d14d1385ff33ff6fd0240d4452d9"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "566228043fd813edfd761d0ff6460c68"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "55ce4d76f3f98830a5fba1ae7a493839"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "864539489153ed655e7cd0b42aab2975"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "f9906d23c3c4912a353a7a25e843d2b9"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "1b438ea7d5f72985ec96383a3d29c304"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "ee3fd8b9efdf9c12a7854196937d6b91"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "98ab2e812d96a4de94139d19cfd45059"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "70f3359b5e752bf2c39bd232b3a13f43"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "3609c44c7887a0ab2858f4f85ba14df2"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "cb9548554ef7c48c27becb1fc64a20bd"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "30cbdba1c920106cb048fa4271be8212"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "9e67a80f5482e239f12de02e21af6e99"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "9da190c3ed69e41efe26fcad7927cc5c"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "aebf0223e9d0ef3c4b516fa92c61db8b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ee6728c35c0e6c7348b65f40070631e5"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "44d45f708ed66a752262ae422024522e"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "31307a38378d09eb45bf0d4704bcc580"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "c62e5b54808d03edd15fff3d93ef876c"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "230f9ec76c9239b6559b506b4bd64992"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "c9d894cb887ab7d5cb82fc13ddaa2728"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "c6600543c4ca2e2c6f4bb76230bf5373"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5b8416c2df4940f98347dbbf01550a7d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "8468a28ac05505722505fa2dcd22abfd"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "4d4abc471482e430851613c331fee7ad"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6de32178d17857e86901b280a149832b"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "7a4ffcd22c5619ad6d535917194c0637"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "04b13be2999c7189550ab97e4da9794f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "c956a3122ecde47079e34c9d42f2b115"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "e13d2ecd20a03386c6809b9b5edf78ae"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "63d1354d057b9bf2c6fe5d810fca84ec"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6eeed1123939b742d131768d81ee9373"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "4620b52651bd3365885c62d734d786ae"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "de9d3092690fa588e8fbbfb7d7c4a2d6"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "288ca0a18a1194492c2c46a29a06ace3"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "2aae9c34082d941c9871a1e1c31b029c"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "3547cd3811b5e16e2b777eb80bfb9072"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "5fb9de3fabb4db8b781f7dcc6f8631fc"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "d2efd64e0f7b01351738ac1ef5e9d8c1"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "1b590b4fec06b945d188921b4b71110b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "41962d14b6ca324e9b2b51e5c5428631"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "589e7d56961d343f3aff538fbefa6262"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "56c47860f5f7fe7aa0f91ac6065f4a51"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "9f94d534820a4f60bb462b47dedf0c04"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "957aa54fd1dee2ef3898390b29dd2b51"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "ebed88bf30594ec0f25aaa292a9c739e"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "ca913ce0400a1b0a40cdcd67406b64fe"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f38e379823f3439aa31a326cd213c707"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "4294a716d0f46435cc67b1b9cb54f6ac"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "9aa265a2b5739b5e72145e6f98f8caab"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "977aed6787388eed2e7785a5c38e5924"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "bb3b8900599761a8034b0c170a674beb"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "400583139b29a92fbbf2c0c54d6cc23e"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "dc28d1df95ff6b3da68a0d19d044848c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "89077adb4fc27ff4481ec5b50f81ecc1"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "8b77cca97980473e7c7226dd17ae6277"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7343c6b3c88556090465b3fc647ef145"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6dcf3cc9d27ada7c8b4abaed4053a52b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "3f2d3b196a00c8deaef503afbd7f4a08"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "d8fa2db2b874c7df0846999635c2aecb"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "226e0c4e14533e9f5a88b6161d20cec2"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "21d5e216cfb821c30c579fe684540c27"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ef408cbee1284515e1588fae28ed17f8"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ef2313b61a87236b10494c76f13f2d3b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "5136b83c8206b3e7003bed95e1d068fc"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "d340b0fc1d2765fd488cca14fb0c363c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "6880dd1c43bcc1c383e3b9ca0fff20c3"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "8309f5d1d209852dca8accb8bca5ca98"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "6529ea9eb338d9d3bb4ba32c4fe3e46a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "91272498fd0776362789c4f2789972e6"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "8bc0dc8c8495c020996c692490a36a80"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "92e5ae50d681d171550b6c4e26cb8483"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "e26337355a9755c61c04c05ff1eca548"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "9486a0bc723b834262d0a2f24e36c3cc"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "489eac9dd9df1543b5c0b0bbd67de272"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "5ac599fcc2583ff74191cfaf2822855a"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "eee6b3a75b3abcdf3cbcb53d135a5db4"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a01e1be0485892d86bdcfeb4945e7afb"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3f2d5b4ac4049b106bec2541c6e3f4bb"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "53c3d026b09de6ddc9ceb6abb4086fb7"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "46decd5bae997194512b165f17425e8d"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "b8b96fa8d0030698eab37904ebd5ee38"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "a01569b7f7d19ab24b2c3319487af64d"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d7953d7f4883e29144ed1665e683a4b4"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "f896f33ba83df6aa5dac3704ce0f4cab"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1a9c0ce25582712c031512e16fb9acae"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "26487e4bd1238c690c7aa07c32e4d754"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6eb2c275b5550a979278b3605d3e21a4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "bb8d936c069b687c53fcc8401e975e21"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5c8a16d8a3b3d85f73857d4cf0c45d1f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ba1d565781b87033e759e0ddf4ca2e3c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8c4a17a0862490d45f544ef6bb7fd540"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "11bfe17629c3e7890462d7af312c9574"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6c11b4b748f69a01a8800d9515f56eb9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4c840a62c933a442bac7e3ec12b3c97e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "710f6fbd3b595855be063340c985a538"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "f499c9cdba5684922feb955093f3413c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f7a6ba0849f6b0545c5e4143ac9a29fd"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "a0f1d1b97abe8c191dfb1ae6a33f3175"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1fde3d12a22e25028ef7c751491cc22d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "51e3fd4648d295de570f4cfc68895d5b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3c256be7f3af133aef6dd849f20b92a7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "86fc64cf5ff8ff864a0d3b13371d212f"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "9af78e69b834a31702177fe021a13e28"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a1dd9c2b587122574b9632144918cea1"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "63fb9cb7abdbec478f0add5d0bbf7e05"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "87df2650d56c744449beb8f99d5f4ac2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "003b8c74198fa833b4e043025e29a6fa"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d09ad219c15cdd9af5106a1e4b1b5010"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c87f60ca6464a94d7ce6c9b2018a6aed"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6a5e5256620dfdc710723a15ef88dd88"
  },
  {
    "url": "tag/github/index.html",
    "revision": "d8cbcabe97705bf7356cfc46f5b15ec1"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "58d70cdaed66cb2b4d27d2214f160dd9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "85faa818cd017d6cd72ce5d7de8dca69"
  },
  {
    "url": "tag/index.html",
    "revision": "67975a03876cb6c6e650f1692474179a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f73e9017b0b6c21245b2291ed9663e3d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "32a9eb154fd267ac7e7e341bb2957322"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "bea18904feeede666f26a1b01a1494b2"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "c0fdebf8a31ad37cfc61ced8014797d2"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "507051f9cbeadccab7258863c9878bd0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "a8d7aa3763b97e5a8ec31860950ebc71"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "9cb8af3bfb4ba826ba196797a0b99120"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "5f76a06b85c67364b00e6eb974d7caf1"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "824f504174626bc3b93783b4d70e510e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f3fda0b158d4e7365221bb6a0b5d3008"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "cc5bb0b1a765b59c1dedf6a7a32e1b0e"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "b9539bc8ea9009aec6a18d1df322099b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d965cf7f5a193b2031b39a437078ce02"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "7ebff33967b8fdb2657a84778151b3d8"
  },
  {
    "url": "tag/read/index.html",
    "revision": "e1fa58b0b4d2ef09833a4cfdaaab665c"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "12a97ca36011a4f5c4d5f878edba1f42"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7a99df2dd263c5c3eceadfaa415d4118"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "9ea1b72ced13c3787aa7529ea85e952c"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "bc041d14638538e905c0b24c762cec20"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "8ada5f66422af1eb0055f49c5451c960"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "c89d39fb29c19bd313affc77e75ec27e"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "2ff1e43d08958ac5dc540f8ecf2526e7"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "235b60c93f8900c463eab2a83db94580"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7ceadf36c0e4d1896b3447524503bd45"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8797857744bc11aef020fdaf435226da"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "b236448e0842a95241b7740649b0cb6c"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "75f65ec319d470d6371aa4f211be3601"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7193fddb64e4f9250e9ee90b5156c850"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "eb42982a0895bd234d174012731b7a0f"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a223e291504d2391cd34633efe5252a3"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "2b6018e86bbf1d1baa63a9810d1b65b5"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "15e5494fe21152a2961d15c85dfcc1df"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c57350955d49739dab5169b23d69233a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "85d781efb0cf9783069163cb66f7edd2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f6e675013af1ec119ad8b6380b79dbeb"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c132579a3c6fec16854b66cf174f19b5"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "e0be2bf9cd1f7e9e29187ae7ff1bddcf"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "33c59b1e6f49d7107c997f87b8cebb5f"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "2a1ee6b6cd10e2f7185147dee0efa6c1"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "250a64565928e8c0535482f2fe94ccdf"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7297502b7b1c666c3412c54c9a13e2d6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f54212d636946ffc2b9df5bb568d89eb"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "fcdbfe261d619be0760fa5242fc28daf"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e768b7c56804fcb87f17e37e927eec2e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "23faa3eba48284b83e31c3a96db45373"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6b79eb1f15c85bef301e4e46d03568c1"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "88d919d51af512a98df0f23b79d2b77b"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "533bc6bcd90a7cb7daf523b54b5a695b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "8e104b5e44b3dfbb7727aeae65120891"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "98eba661ae5e04afd6ee88c68b7691e2"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b31c848bd2f7c081ce16018a4b4ddb06"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "fe942d28bd9f917ef695ff62238b41e4"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0a5e14cc7692e0d124383fe7d0db52bf"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "946d42073758258dc1f69affdea20539"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9321c7448cece9ba5fe38b29b6d63e90"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "757670cd276d50d5e7b7b8e53b77749c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "82b6f17f9d311cb783daeee7fe960edc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3a606db21f73c5590643da7b81bfd6f4"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ba806d82d384e3710749270c52c057e3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "54cf58f585ccc2264eb7bc81cfcf6fe8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "69c3dd5951614764f7ce06a77608b923"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d881b4407acb005c13944675ac1b1f3e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5eb3dca23506579835d722a7c07a15b5"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "1234952d923c90dbf882b1a985d11576"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "9a4ddf2df54d0de6bc05bd6ee0aed4c1"
  },
  {
    "url": "timeline/index.html",
    "revision": "f742f0cf9564e3683a5d298ced59c3af"
  },
  {
    "url": "tools/docsify.html",
    "revision": "ce20dabdd6f152a458c96bbfdc7f49b2"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "3ddf492b915a732d1b8fd7cf21a5cbf4"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "e8d9f1ebe3263c69a9a4d0e51a335df3"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "32fab0b134ed0aa78f1e7a5476c0ed73"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c29cd2bd802d2c85598fb660410d8929"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "717767119eb7ad3deb876ee5e3330253"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "bb8196dd8534bc413284619b390b1d21"
  },
  {
    "url": "tools/html/index.html",
    "revision": "2bac9d5e047490a79cd370fc0091470c"
  },
  {
    "url": "tools/note/index.html",
    "revision": "6f4b84f2aa4383e0be1a19d1e0184a06"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "b86f6688b82db47054a47c54f852ca3c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5618d57b8e3c94ee808d26d1b5d63bfd"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "748b17aeb05202d88d7a3d73a0bb6b11"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "94f5e511675c4068440664fc95465780"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "a826b86c21c165634cb241540be10aef"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0f4ed4ec5166e17c0387585b5849367f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "826a325242a0512d41ffdff344f0d482"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "ecc5fa56cf4cabf8b24e63897086209d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7e0d32af209b557f5dec6e55a699e86d"
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
