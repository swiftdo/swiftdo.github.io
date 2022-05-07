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
    "revision": "e38fd4dd4493341830df8ac451b6b3a6"
  },
  {
    "url": "about/app/index.html",
    "revision": "ced47de756db3814948c607559c7a916"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c05c0ab239685b7cfe38269bc84dbca5"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7402b7b69ebfe25895b9fe85d78d333f"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "e1fe88f2dd9efafecc44b200a893476a"
  },
  {
    "url": "about/index/index.html",
    "revision": "cf47b1714b1842a9ef0d91cd4b829e89"
  },
  {
    "url": "ai/index.html",
    "revision": "8f46710ac7ef26f814b3ddd8c3c12f2c"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "fa105b7852a4b48363e0e6758deae7e7"
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
    "url": "assets/js/122.d9746d73.js",
    "revision": "1012068475ba1e327b53042da47c2dc3"
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
    "url": "assets/js/132.37d2642c.js",
    "revision": "52a5fd08df1b1e3bdae4a6e6dbc20027"
  },
  {
    "url": "assets/js/133.33ea9f13.js",
    "revision": "25aeefd505448374aa2995f9722d991b"
  },
  {
    "url": "assets/js/134.79be8712.js",
    "revision": "1a064dc931cb41ced894fda0da5b902e"
  },
  {
    "url": "assets/js/135.9ebb9f2a.js",
    "revision": "3e309e88bb05b524f68970917bc4a694"
  },
  {
    "url": "assets/js/136.4ff90afd.js",
    "revision": "331602855fc051ab92610ca35e50aeae"
  },
  {
    "url": "assets/js/137.1641d7d4.js",
    "revision": "36a52e88314aee882e58c8331a291207"
  },
  {
    "url": "assets/js/138.a2fd2dfa.js",
    "revision": "f38b990bd896dac921f9693cff3d9d45"
  },
  {
    "url": "assets/js/139.96b92dd7.js",
    "revision": "0d73e16894d6a3eab39431514e7e2f21"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.c8f31b8a.js",
    "revision": "17d13ad13739441c0ec21894928ff09b"
  },
  {
    "url": "assets/js/141.4574335e.js",
    "revision": "de23572ff0f19634f38b53e4c20446e4"
  },
  {
    "url": "assets/js/142.d2e3c99a.js",
    "revision": "b15aaa24256010259545cc6a1f2ecaf5"
  },
  {
    "url": "assets/js/143.6a497dc0.js",
    "revision": "e74c24d1428e1660e7856e8396980c6e"
  },
  {
    "url": "assets/js/144.4cbb5d7c.js",
    "revision": "f92229805df82716ad418cdd8ebb3521"
  },
  {
    "url": "assets/js/145.d68c2bbd.js",
    "revision": "71c6789b75aa43f9b1b16938e5e0e98e"
  },
  {
    "url": "assets/js/146.e57ffc9c.js",
    "revision": "0463d9d6f879be4a9100da8a4116d321"
  },
  {
    "url": "assets/js/147.7cd12ccf.js",
    "revision": "e328c4078f1145827b6c6ad6ff5ebd23"
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
    "url": "assets/js/154.9632a0e3.js",
    "revision": "735fa9a87ecdc469980666f91d8b40c9"
  },
  {
    "url": "assets/js/155.e3f871f9.js",
    "revision": "2ce4cf0ffe8f4ebd0aedddabd5cd7b96"
  },
  {
    "url": "assets/js/156.8fcd059a.js",
    "revision": "1b69820840a549d8f6b9e2f7ded481d0"
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
    "url": "assets/js/186.cf7594d0.js",
    "revision": "0258ba9a028e8213a8e0ffb71a34afc1"
  },
  {
    "url": "assets/js/187.0d327ed7.js",
    "revision": "637220aaa329ac6a96f1b31d98604c7e"
  },
  {
    "url": "assets/js/188.e606153b.js",
    "revision": "7b2535065ffbd9dd32e2302f72a8f34d"
  },
  {
    "url": "assets/js/189.085e2c1b.js",
    "revision": "8c415b8df16cf0a3589880f49f7b2e61"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.c5a2646c.js",
    "revision": "cebc57f69bb0a0e4f47d3793f68acbb8"
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
    "url": "assets/js/215.909987f8.js",
    "revision": "7afb6ee08daa539aadc2deba1f3a76c4"
  },
  {
    "url": "assets/js/216.eb7b3775.js",
    "revision": "ca6443f0b6585b885a43c177d577644a"
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
    "url": "assets/js/221.350e5702.js",
    "revision": "d8e06d6ae5f6a643be602fba636aee8e"
  },
  {
    "url": "assets/js/222.208b843b.js",
    "revision": "3a81fbb0020d684a0b2bc12e3939acdf"
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
    "url": "assets/js/243.87a802ab.js",
    "revision": "b8f9d33e251275cdc35473eb9653247d"
  },
  {
    "url": "assets/js/244.aba79844.js",
    "revision": "085ee309e8fa484970236dffc39df972"
  },
  {
    "url": "assets/js/245.142441c8.js",
    "revision": "c0c4391ca4a9971cbbb910d4e0287342"
  },
  {
    "url": "assets/js/246.08d52c3a.js",
    "revision": "4af66af4503ccc83028de74ee01d1504"
  },
  {
    "url": "assets/js/247.2768ff31.js",
    "revision": "128e5fe762636494c4b96ed7d822a59a"
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
    "url": "assets/js/250.9b76d5e3.js",
    "revision": "f6161e0c12b575d1c10a38a6809357bb"
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
    "url": "assets/js/258.ff4c0f1d.js",
    "revision": "84a88d6a8347548dfb399ca399f18932"
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
    "url": "assets/js/268.cb107781.js",
    "revision": "bb6b068ef878d9bf4d2dc10cabea47fd"
  },
  {
    "url": "assets/js/269.d50c35b6.js",
    "revision": "7f143b6ecd8db071245400f89894712f"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.1cb36de6.js",
    "revision": "72f6df4159d336e30bfeb19c74d7552e"
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
    "url": "assets/js/51.5c3ee130.js",
    "revision": "e086f84737d7f01ba2524afbb212b111"
  },
  {
    "url": "assets/js/52.902fdacb.js",
    "revision": "1575a8332735d874b5918451f15d7e66"
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
    "url": "assets/js/98.48aa5dff.js",
    "revision": "7eac0daa9d01f6a61a4965733aefbb8c"
  },
  {
    "url": "assets/js/99.dbee4e32.js",
    "revision": "0af4ff36b78f00ce0e99fdc70b0a8906"
  },
  {
    "url": "assets/js/app.344dcbfc.js",
    "revision": "ba15d26ab2e2a3e050d3c66f46398ff3"
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
    "revision": "d22e7aabdcbe814c7468d6c10cf9024f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "06c8b95f21600caf8f8236d0025d282f"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "1b4f2598b8d20bafc5d37b66705620f6"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b435eb462930a18425d17298d3fa3004"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4825debaba095af8a706b79e799daf87"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0cc743f87ef512fa4e8985ab804ae484"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b47568f408d93f356d483e0c90f2bbf1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "53e77346a93a136551ef4bb4ef07d2c3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9d325a0f91a4990b8b580d1cee6c7ec0"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4656b6f1a904cd7fdd650bb6aedaf26b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "42e2309f8d4f3dc838e0c03ed2c94a5f"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "a74455e0fb5afd48e7c5a15486811e90"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "85ff3ce23f4435f924733a434049c39d"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "a429534999f7fbce1540dd96b62d7bd0"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "27f0b8cef93a3cdbc2c24b2bc6878804"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "e0fb9e2535176e6b9fd20ef356899a4f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "ab5768744b82201bbbda7eb309e93b85"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "c062321458f43df1566cc84bbc35fb7a"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "99f18d3460409c9f53a316ae8478fcc4"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "9ac8a40fd23eee87c7fe3d682a359502"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "7291be2233f614efd18cbdc72ada14ab"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "59fc6be137fc7a4ad5ef8e0febd9af69"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "7fc0a63a77db6a39147cc3534b3b7e18"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "552e2fb0d50ec5b50ba39d0f430cbb15"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "19a61ec8c56e5e8117cbeba7a03ee624"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "4c699b1f8a2a7960dc4043ec915f12e4"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "ec45f6ae282de1543726262400525630"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "6455569884a82faaf248745cf620943d"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "488e17e92080161e89882c14123647a0"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "fb99d8e4f006030aae4bf64329a95fbd"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "68fc9900e845969be33e28f0c5224b59"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "d303332ff40b2fa28dbdd40fed392706"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "d8afc4532ff2cbdd389eee1a6b782271"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "8cc1bfb8e81e17ee01f698ccf7796ca4"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "9bd20cc1deda5e04acd40f5aa9a1f3a5"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "862cf681cf0b291cdc1883f3e707d98e"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "6bead2f727bf377fd8ad88f7d8216e1b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "c3272c58de9a5ec99945ce13f2952ff1"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5ce5ee53c6009ee6e7e5f480d3c3228a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5b4aef29bb35045e8da50dbe20f9b713"
  },
  {
    "url": "book/index.html",
    "revision": "1e96baea3a769cb90ea529dea47307b9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9150108f855fc4da6ba223145ead562f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "168c887a83ed5ecdb9e663196192c4d8"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ed7671f46e5109df897a70c9495ab9a7"
  },
  {
    "url": "c/audio/index.html",
    "revision": "2abb07433916507bb64446561c7a6a8b"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "a35adb8e3ff0ab2a653be9539e1b1612"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "58c4b3370f4cd6ee83a3c498239997ee"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "a4974e5c1cf67de9af7e98bd12e9860d"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "f9eb7fe69723bbe2e15882895a832845"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ec9b61b61d412825534f33d927547c15"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "8973555714575fd23c4ead0ad0a7ac47"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "df20583f3ff8d361b9d7052fc3407619"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "15914b1ce7a131fd4b2e31934f3e0b9b"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "75902fdf4de1de16671e9d6cc8e3e36d"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "efae3336226bdfa80390b80f7815811e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "0c3958b2da3c12552d0c763600bc3782"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "28ed2b9d0d4babe58d92a65d8695c3dd"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "e2833090abe2791fb4ee831c1503f92d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "071c416f7cef9e4a2da3bdd8a854ac08"
  },
  {
    "url": "c/program/index.html",
    "revision": "af5bec12264fc8b071212e399590a3a5"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "e725f0d6219f0fc5224e510ec825b555"
  },
  {
    "url": "categories/index.html",
    "revision": "af6b8aa24875c9d6fc6c8ea5014522f1"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "2b09050c2c0e1d106b55f54c92f98cab"
  },
  {
    "url": "figma/index.html",
    "revision": "bbf66313c813710ef493e0c9cb20a83e"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "4b49e5528023c0036183a3cd720c2a80"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "dbd4b63eee160d8982e96fe93a0a872b"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "7eec0d7529efb27d5eeee50183b20eac"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "c1e0a2d9bc444666422c6d93ca2683e7"
  },
  {
    "url": "flutter/index.html",
    "revision": "d8da97efc891681319662b3786136655"
  },
  {
    "url": "flutter/point.html",
    "revision": "31ccc01925d3c3bf4a2cac3c7255ec81"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "41e3f9f66ec29c241181b3ffda846a04"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "55bb627e25010dbb6d4b56b9c51adfe5"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "de9ad79e82b760f883fdfbc2320c1865"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "08620edc75533b9d1f3f8a4c85199f2c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "9870c475f95d78b8cbd8114bfffb0d41"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ad6bad2dc722e52e21fdd9058aad87c4"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "fc7437266e0eb143fd0fa35c324bc032"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "123ec76adb75b57fa223696ff4e978eb"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "8939a2043c8292a7c41bd1763e8eba4b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "472b4bcc17f8c9d0ddbdb6b61ca6065b"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "ab6a1c2a7b41389a999b89a3cadbba65"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "81e0cc842d2fd6dcb25baf37a79a942a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "311c93a62307d03fba233c4b71c73c22"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "805cc040d8ebbcf1ab080f32ae82341d"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ecd40641ba85a42df1d08aa326bbfcef"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "545d603826ee9c23a223c8a6c79a1542"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "919db7e4cb74f2eb802389028aa0abe6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "bbd097ac194fdd1fa0c7bd6bba2b5909"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "75928a9baaf7cd0d6c67fd29a7782474"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "c0fa22be54dc6ada81550fb18aabf3e0"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f9a0269b3912d362f8c87c54131d1ab3"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "5a212adc51b9d092955649274ab7f6de"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "77f4879bc81013b49799c3ca426e62b9"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c07c94c0b05af95f729ed49d3275677e"
  },
  {
    "url": "haskell/index.html",
    "revision": "f51d6a5e46bef7b4b9815c1798ad9440"
  },
  {
    "url": "index.html",
    "revision": "457396bf639653fac07262183213af2e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fb700e213e0af75c58cb145a934dd4e4"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c9c0121fb69020ea056aad20daa386ae"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b092c605b825b9e94d4f48ca237c7ba7"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b9c5502e6db47afc64116c3f2ded61aa"
  },
  {
    "url": "python/index.html",
    "revision": "6bd8892d3bdc9d86a342d83423a52ddf"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "7f4142182a7d7f0ffdb4c70fe771244e"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "6f58ca5d8a4c32875267f8377d1a8a6f"
  },
  {
    "url": "python/python-file.html",
    "revision": "028cad07eb87f2b84cfda411f269e8a9"
  },
  {
    "url": "python/python-function.html",
    "revision": "70a18cb91abbf6c53e8397d57e7b0125"
  },
  {
    "url": "python/python-generator.html",
    "revision": "220bd596d562bc6056bc61ea209b7dca"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "87370f49d2cc316550c5f1f390c2ef12"
  },
  {
    "url": "python/python-module.html",
    "revision": "700e97f17fedccb68b30354d49491f4f"
  },
  {
    "url": "python/python-string.html",
    "revision": "f1e234d784024bee0f7726240ecd1bcc"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "c3b7e1ddf2a8859fc14131a41377727b"
  },
  {
    "url": "read/index.html",
    "revision": "8af6fb4c688b26abaa94bab0bad8cd1c"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "4ae13cb79d6ef51f176081991fab1880"
  },
  {
    "url": "swift/better/available.html",
    "revision": "bddebb299da735d85ef3a579d272360a"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "1387e86e839cd772a187e330f7a5ff3e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "81462654fb16133fdf4701daab053690"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1e226b2837b56c8ac5b21d80ea0300c1"
  },
  {
    "url": "swift/better/di.html",
    "revision": "62464919531d9fd34c1627d6b020eb43"
  },
  {
    "url": "swift/better/index.html",
    "revision": "2bfa379120c2a399a6791729dcc7d4e4"
  },
  {
    "url": "swift/better/last.html",
    "revision": "353ce08567644360f9bb3f4cfcb8caf5"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "64b6eff132f9ce99e483ce9655f8ae53"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "4f6f06a6296dca97b3344329560ef375"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "1ca32647dccb5afd200f49f91bcb9d7c"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "268f8d02f1ada6515cf5b097e3d5f329"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "bd6740b0193ee736753b0b80c2fa169d"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "73ba874f16711312f077dddd922d1454"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e3c68de5b1c53ecce0a6e965d88846fa"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ab18d109c0707152b81074b8be3ff93c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4c2fdee1974da88ce082ab8b7b4a69ff"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6b18e0e77fbe451c240c67d9eec631d3"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "437c82d219a59e6c9bd9a7c11e348908"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f690b9d856cbe32ade67b1e5f6a79b84"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "0839bca2b6acd7dfdf0d948bc929641c"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "760c4afd6bc1c0dd1928792b5129cd61"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7ae8ed9cf50d98a8fedebde71ac5c106"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "39364a63c0ae19ec2fb566bc16059211"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "310da84cd40784c6e115e9cf98aa2d62"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "f8e4ae9db1e011ebea06712051a72300"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "cc864d420e586986a964366b1fccae62"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "48f3495eeb4c79f78c08d3fdffad3169"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "bcbf3f9ba74ddf353cb5f8f9fecc0022"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "9840d740638ec4fe8625ef4795f6c3ea"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c05207a30578bb6b9d5ff37f21e62b3c"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "1d14089c7ea0ddf79a24e920efcd63f3"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "18e925e10f3c1a14764381a3a4b845d9"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "12f264f4946815249ee8d0cadc7d088d"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "c2bcac97c73a682cfe37085e29249f68"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "7b009314a6b3876416e32a49ff0d444d"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8188cae4b9791e565a56a15df2030d06"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f8d6eb57e7b6a23cc0deaa225835b29f"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "63a515b1d23fc24c579f215b25c0acce"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "20c7f0314c80c5867ec25bd325ce24b9"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "c2cc3a93ea0f20474aa2007c2bf6c308"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "1b2d5672423e031e145964488028d45a"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "a8c14c411b24c515b4276087941a700a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "f3d0e56605c3c51c03a56118168f5a1e"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "5d455ee386cf5e09ec5c9540046abc72"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "9740828ae356cd551c0fa3d61c07e41d"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "e29689b4bedce2d3f03e70a9f02af480"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "39a4d0daeb53eecf512e05b97153febb"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "27a22b650c37f65617c958b20b23ae5e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "262f0ada5bff60a80a02a94be7821b56"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b814cab0783ae492d59a729568550108"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "f327bf734dd1c4a39585824f03ca3d13"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "14b0c526c7c5fbf54233de56eb2f5518"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "cd06c9332ca010c5fd73c557cca026a5"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "6aca6929d0609e45af63a461bda9fc2f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "4527c86f8401f8d6a49a43b643be995e"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "13f54b9e7e9416a18ea59e570c180bb2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ed264118165993e6e307d8f448df1d7b"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6d5a1cab66d7cb087e6f33aaf61d887f"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ce433cc5c672664d9a09da82c0c63081"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "19ce1537995feb91f84458d9f3362ed3"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a1094ed7352e262956bc240988f1153f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "163b975b39c5c51071e667a46ea4ad27"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "2981d242b9c969b1f1f3d60b40c599f7"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "af18a90ea79f216423172c5b98b8725d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "eb768c66a8cc5505ac294bcc991b5165"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "76adfdcf98e68cad9f8be036f394b437"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a005b3dae700d66f1c49840875e8d89b"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e4017b53e6a6e7e60aed77f42c7d8ffe"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1c133a42c19853580ee8752b5dcec3bc"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "23b142596e86f50708f8d4ebf8b90381"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c354013bfe367bab9fb7bb1ac381f584"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "0add24264ddd10ca2e4df5528fdf0f37"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2afaff6e228e38e30da080fc28581037"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "71c4d9893630567ba5b9ff0512383a8c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "e371463d85de350bd2e249b09c649f88"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "60dbc21b98e77f34ea16b0d4a4d00e83"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "40843644d729bbe0a1e656c6ee3f1b90"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "44201c9d3d7390185994509a0152e22f"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "53dbaa429d3b842939e4ae18ca338394"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "4b6c5bd45aa52dbc56afeeff683d1c5c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e2d5624278882f6a22d7274f13570fba"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "630e8aa0614e894bef51ffd836cd5d2b"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "8506b4c924c9e7611c5d2097c5633bd5"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "1a1f61eac5cafefbaa60c53b33af0575"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "1d605f94d61c4efc87ab801e8092b48b"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "4ed11bb25502cb37f359496f58b42bfe"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d521c7f4a0f6243ea66e933137d0d233"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c6fc85ae894ba7ecca84cd6379e2c6ff"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ec7cfbdc7280a5d9f92265f2a7f56bb0"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "e868348ee309565bccd4725dd6945bde"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "238119e82a8da2e751b46af5dd1ffaae"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e9eb69b2d43767164879accf86777e4e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "b7d1cfc4aa9fb980c60e9e471ba00665"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "4965e63384dc38409a440e397f1e7818"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "34eaf013a94ff2162e7713654ac01f27"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2dba451fe94bce1bb44c6ad072ca0c48"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a3a48cb75769b78ba4175723d14da1bf"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "526bef5faf5a5a8f393c15a7ad81900c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c565efa3aedc744e8372819f143e2030"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "23908401327f2056fece5fa4f3f16d23"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "5c34495d656fd7f301caa1a0a8150c6c"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "665555a4bebae536b1000e613152583e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "0ec07d63ca05b213da4539023efeb7dd"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "8d78cff7e1e4cf1fdc2e2f698abdce79"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2eb6f5a481b9e52ed3759d80847f0d30"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c0f58f885dd04aca12304bd44853d51c"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "9855ba7fb544c1416a26f8e08fda81c6"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "6322925f43e77c39279220352ff72e92"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "d5fcee3888885178b7069d6013a82569"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "bce0a35b502d5957986683982d1c10cb"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "51bd47408209bba5083372b9fe28aaee"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7d0f63b66c7265b443474b45720817b0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "286458b681e5d1132f87663a07f49933"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "26072eee48fa96f1195a7513f63a942a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "20db8a41cf608e38c495419cc56568bf"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "1488ea9ae2cde95ef6796e489f366702"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ace36b45e6d1df33565eced22512db0d"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e2e7a82a104588a63f5e90b06ea68498"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "62bef75a457c198a1c8fbe0e0db8ac41"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "756c486103bc6eebe9d2dfce2fa34ba3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "5edaf9acb88926ae9f2eadef7f3d6590"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "28ec7145c3ac506bc601fe2c96ea0cb6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "5d6f8dbc58ca2f616501cc9d27c2b230"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c74d092808564171484fb9dfce2c6fb4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d2e19e4a0e22a98594b2874501eed999"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "8e0be4e5d332eb8d2e8abd752471fd26"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b426780f8a8a69d759a41eec2b020522"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "fad02aa616cbcce3502d42b927f41f43"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e84561d4541b830672978687dd4a2802"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "10b678e6e17106da8faa3343989bb624"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "53924c657560cd8762e069db8ccd0f1f"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "be2939c5cccdb725a4890b988fda87ee"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "1f15fb1e6934dcabf56effac11110aac"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "03ae3f779a3ae51ce5e4253b7f7e8b75"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0b4a266763239563c589e143200417e5"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "f6bcf4745a29f6768e7d0e08d1d2b68b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "50abe527debe94e3b1ff71a4e0e28270"
  },
  {
    "url": "tag/github/index.html",
    "revision": "9547f301f3d3d404281dee58c20ff0f4"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "ecfbafe3ed23085835daa525cbdd4dda"
  },
  {
    "url": "tag/html/index.html",
    "revision": "967f27e30630bf376d9503bd0c1d232e"
  },
  {
    "url": "tag/index.html",
    "revision": "e274e894e141463ea9827f8a8f3f5999"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "aba36f7dc3476a02b85b64c071d31579"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "74b6148beaa2723c607f07a24a77c2e1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "a5a9c131593c722fded79b35e035cf78"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "148897a48c9590fe2f4017a0aaa54226"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "4017b1cb97fee8d05878470c289b0951"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b64b420623339c8fa4e53888cb00c39c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "7fc556e71e6627345b2e5e98a622278b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ab8cb91fd26c39daa059876aa1247b41"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "93d8ac713b1aef42531ae0a9fbbca154"
  },
  {
    "url": "tag/json/index.html",
    "revision": "50ba499b520f0a1eb4e66b77a65a4c03"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "0c37c434bcb9d60ea549655c384453f2"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "6c9babcf2b9bfe26842247b74bd8667c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "4e310804e076336a00295a3389005a76"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "13031571909132ef040608cd811627e4"
  },
  {
    "url": "tag/read/index.html",
    "revision": "1507f023a9f9ee0f6c8d397b587124d9"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "bab2716bd84a5d1918d2944c85fbda88"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "77c42a3e13049e51580d6e9d9c73085f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "79ba431c7cb76f140f45ae929b435358"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "afedd1776a284b6774a2613dba736382"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "b5e0d3c772ec4bbfacd4e6cb41193bdf"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "cba1add3572d6ed82492fe8378de5805"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "967a0c76d13c976b42d4b5f92f12e912"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "e6490c7c3e283665ed552dd8e99c5480"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "65da28d562b2c3061da53c7a37a9dc4b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "a7d0d59b0f3eca338895d4070fb6a1c7"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "391df9c3a6f1ba6d40cb16b4de1b769b"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "e3723948256c2c131314886e807954af"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7d483492bb485f8e6e32d11ce409e84f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "728ceda72291511d2b9d76a623139b65"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "968d908be283eb4ea2497ae3af6bc5c2"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "acf741bcb3670bc84890ae9df5d6a813"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "67c3415963030da34fead69c16da575c"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4f37b18974005171692fc139dbe8cba3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "0f03aa3dcd311e90d0b3563bb5ad571a"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a8872ba8821df0dd029dc532be95211a"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "d6ebe1f1d83c1407318c974df589e2ca"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "d5ddc4990e29efa64f544a1fcfa272a3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "b2cd00dc6f7375cb3c0302212d1ee5e6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "fd71b9efb128f3e9ab41f7884b91cfa3"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "5b979619210a4b1c0f6e609b756b9b09"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c3669fa5bc4f8bc957d457c1e525f10b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "105e8533fe0ed85fac0e970888bc89b9"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "2b04fccc398f46cb6a971f43b2a21679"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "116612824c11f236ff416437849dd892"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "ba1d831ceb2bedbc4d171be31d9b53cc"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "59c036a521f09f2f3cf064ba1ae308cf"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "6097db8ddb6d8f3d4ad669faf9b74a49"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "23e8355cea38645b5c543cb446659123"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "893f20f8e4b4b343596fe6ea011d77dc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d1d79766e6bd685aa7ff74e2d77dca00"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e6a69bf3585c3577641fb11c4d0b87df"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "85243a778fb261bb16eb2070f75f156d"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7c99f3b3280163c6f899f6e8e324fc06"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a245b417e6504c71580b1e42a6220794"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "3772a81fa5b28334f432654d3cdd28d0"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "cf7ddc2e062b3d8e878d81a0a47889c5"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c34d8ec08c9e542ed860419fe28e4cad"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c8316f395b3ab72005472e60c51ac353"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5b626370654eefd7bc43769c722de65b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "78aec174040090e326d06214a1452d64"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "669f8be66e8f08ca987a65c12cefb2d0"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f17bfe5cae72ac4b40da2aa2dc87f0eb"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "7a2fee8fd283e85ede2d9bb2c1cfd3b4"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "fc0aba073d4f753aaa884022524d1811"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "bb3b999809eeb0a5684b37f1f4f756b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a44ad65221b58d79794593af1bc8d85"
  },
  {
    "url": "tools/docsify.html",
    "revision": "dc99c63f1f541728a9deee3bc7a3adb8"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1a310719abc8a7519d20c73a19adb6bb"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "735a8cab100e02d456d86ea7a78fc8b5"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "3fd5868bb22c3033326a2fdc4ee497e9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6f765be774528352cb228f69fb6785af"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "24b63e2bc808b00add83b96b4e5e42cc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1ce3abfb95f21105bac8c8bf7ca7b87a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1b3c1084f97fb8034b2b21a26614e0e0"
  },
  {
    "url": "tools/note/index.html",
    "revision": "0560f23a8ea633c1c8b0a66215d480d0"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "406b0562c6b04169c6234f161c0c4c51"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "18aa42dcf20a1ebe2541edcd5bd58a61"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "7920be6cb8989b3289c7be8eabccdfd4"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "6e3c6ac2cf350f38b54c86774ce0622d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "adc67b65c62b64a6e3dadb1980e3a132"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ba7fbcb045649c2d878753e0ca45f2cb"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "89a01a97647716a29486d9770212235f"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "50ff86dddb1aff44218afeb7a9f06289"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bb32ec5f4e92459e239d910fcfe3b0c7"
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
