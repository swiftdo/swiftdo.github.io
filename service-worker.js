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
    "revision": "0885c396172c2a923bf4334957281a2b"
  },
  {
    "url": "about/app/index.html",
    "revision": "8b2e2554a34350b714d4e0be1bae58d3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ae47e4fdcd0d0bc069f7d395dd6483de"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "16d9fbd942f2981fa47eb4ff7f9751bd"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "d4c608f60c047d2ca04b2c9dfb4eb48e"
  },
  {
    "url": "about/index/index.html",
    "revision": "ac406a61d9899447735a2823f5c5f7d3"
  },
  {
    "url": "ai/index.html",
    "revision": "00f203df15475443361fdf50b3296b71"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "29ec57fd6730b64dde3b841f357d8fa6"
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
    "url": "assets/js/121.a125d524.js",
    "revision": "7261ec712b780d5a5c4a4e2ae8f8dec9"
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
    "url": "assets/js/135.80da03f9.js",
    "revision": "0c6d4bda25b57349f93092a045a28ff8"
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
    "url": "assets/js/138.faedd824.js",
    "revision": "6e3f8878626d3085aebd4cea5fa0c602"
  },
  {
    "url": "assets/js/139.c26f6d00.js",
    "revision": "e671f449d4575c29afad674b9a1c59d7"
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
    "url": "assets/js/154.1b23f6b2.js",
    "revision": "02debfd5d2ca1aedcf2280cf203cd5ee"
  },
  {
    "url": "assets/js/155.e3f871f9.js",
    "revision": "2ce4cf0ffe8f4ebd0aedddabd5cd7b96"
  },
  {
    "url": "assets/js/156.76f57e9a.js",
    "revision": "91d01bf06df36a15715c3625635db1ca"
  },
  {
    "url": "assets/js/157.a22400e5.js",
    "revision": "f33189ac7bddbf02fae202a21450f737"
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
    "url": "assets/js/160.4e148c6d.js",
    "revision": "984a84da6244bf1b3d8337e8d6f85058"
  },
  {
    "url": "assets/js/161.395b8ef9.js",
    "revision": "0b78575ac7ace7ec44f3ac335cc88d53"
  },
  {
    "url": "assets/js/162.6e19c01c.js",
    "revision": "617c1eaa3af5af8b963d62d6cf38ba11"
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
    "url": "assets/js/167.95215168.js",
    "revision": "31ebd6658d8478733e9b7d50f5f2b099"
  },
  {
    "url": "assets/js/168.93ebc9b1.js",
    "revision": "f1ab72e824d1f10c8dbb7f7920e64faa"
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
    "url": "assets/js/174.68df0b00.js",
    "revision": "51d41c93e6654300b25ce56d3618e9cb"
  },
  {
    "url": "assets/js/175.b157a369.js",
    "revision": "c58534a6d3c4018d0c0071dc1321864a"
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
    "url": "assets/js/185.ec48ebc9.js",
    "revision": "919c485f7d5f7d02d715e501adfcd0a5"
  },
  {
    "url": "assets/js/186.94101791.js",
    "revision": "dc8deb7c68e9704dd22652b52b878f15"
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
    "url": "assets/js/201.22cd9ab1.js",
    "revision": "f72013925e640517e9bdb610f11879ba"
  },
  {
    "url": "assets/js/202.c0005cf1.js",
    "revision": "8ebb0339d2a487abbfc8e0a1c9c14fd3"
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
    "url": "assets/js/209.3d8ae2c7.js",
    "revision": "e355526b5dbfaef350fbddce19e99441"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.3c557628.js",
    "revision": "c0508083ef0921d954b757fedaaf0850"
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
    "url": "assets/js/226.521075ed.js",
    "revision": "70af0cc936776a8e95ff8733290170a1"
  },
  {
    "url": "assets/js/227.ec72a0df.js",
    "revision": "86b70088b85a0bdc4323397a636ced83"
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
    "url": "assets/js/239.33772ebc.js",
    "revision": "79480d7603001229c8da4e4e615b0700"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.c87343e8.js",
    "revision": "fd19fb449f8517036cf121e90c64bc9f"
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
    "url": "assets/js/248.33e08447.js",
    "revision": "eb341a5c220db7b07b8188dbb861a405"
  },
  {
    "url": "assets/js/249.cd23f73a.js",
    "revision": "73727df8e0206ee98efac567b0400971"
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
    "url": "assets/js/251.44b608d4.js",
    "revision": "af667c8f40856e5e9c00eaf368b65376"
  },
  {
    "url": "assets/js/252.36f5d055.js",
    "revision": "19e8eb9f2d5c343e8ead3d6aa5a5c36c"
  },
  {
    "url": "assets/js/253.64cbe1bd.js",
    "revision": "667fb6f4c03888dc20d18e8e9fc4e65e"
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
    "url": "assets/js/256.c102e423.js",
    "revision": "09cb248a6857a9bde12ce2ab8d0b4d1b"
  },
  {
    "url": "assets/js/257.35ca4a17.js",
    "revision": "5ebafad9b793eb610f815f021f742c2d"
  },
  {
    "url": "assets/js/258.d1253d25.js",
    "revision": "25c6d12b346ac29342f01947312f2ea7"
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
    "url": "assets/js/270.1cb36de6.js",
    "revision": "72f6df4159d336e30bfeb19c74d7552e"
  },
  {
    "url": "assets/js/271.ebeaf9d5.js",
    "revision": "0401a8829153e50ed0070f27a73e76b9"
  },
  {
    "url": "assets/js/272.303d6404.js",
    "revision": "c47e7e817079504e46e994a46a6478f1"
  },
  {
    "url": "assets/js/273.cd6df423.js",
    "revision": "6d31aa29ad9f881d1c239ab00dd02836"
  },
  {
    "url": "assets/js/274.f1a62d53.js",
    "revision": "9664c880bffca0df52d3571430d4c4da"
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
    "url": "assets/js/app.db3e6c53.js",
    "revision": "dcb526727cbdb1c805a372f018371646"
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
    "revision": "8459a8a71af8ea1259ede75ce3df8ba3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a7c51d601d2904bc17ecc6da67e05b1f"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8cdc29be090955443ead128a1a9a87bf"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0137b3e251ba2f782d509acac3337c61"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5700ee58a37a29c801581ce1b71ec422"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2c489e27de4f0489fa3cdfa478da9467"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e64bccad37f49fa41ed8e331b7d92102"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e2c3d85306a0d40119bcecd87a287097"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "292744a83104f7e0651630b24a5e2ffc"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0ca811bb2a2179f98e3f5b3b2da075df"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "70d884f246d4fbad5ad386847be50b79"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "f618246be6cad1a8778d4272c032c277"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "8479c34d5c062b365c03979d9ae2b225"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "b1a204de75b7991298ed3658dbe98e81"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e9ed8a554b11bd589e845266a63bd4bc"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "625da16b407f4ef2972a06bf4a8372b0"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "cd069cfc359e06975f1d4fcd44e3a7f5"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "3f84605f92e0c5f740294c86590a8536"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "488d2e0361b8fa97acafd86e232df717"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "7d1646f369e7d46b95b0e25a8ed79405"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "66b9a4b568e78dccc56cd043ef670830"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "be35440f52398c6d25e0d296f108d7be"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "3372cc9419d960188fec18a72f74affe"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "377be090b7892bfae44d2de0ba10a69e"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "0996ac09741b4f3227a3d5b14763b718"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "95c1e5d73f10cec963f410e66080a8e8"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "4590c3d0d1420e2f3b757c0a7de5d292"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "237798411d664ca9fde2cacbf7086056"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "14b0ace2d24adebb2e1366b9cbb6c68c"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "59791a720699ec3545536338119b824b"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "7478113dfc62b010b613319cc263bf83"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "988621dfb40507e1ff7c9da0afffa278"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "2bea42106abd18396ffd4488ee042fec"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "e960d087e05fda07f122a73967389ab6"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "5bfdcf16eca4d6cb78ff76f23120c375"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "6e25c657f7bfc6a89690d40b0641778b"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "34056f4704f308b1ac3fa5a37e792f6c"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "264fd38061f85037e1adaca91eda2897"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a0e7366e808d2cbb953c21d8e98a2100"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1a93544a884888a5f154608b67bd3b99"
  },
  {
    "url": "book/index.html",
    "revision": "6d1b2a0caaf1f3b809c897bf6a584203"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "bbaca0cc281a49a7f8ce0f342de13c4e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7d021fea574bd8b48295c426edd41359"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "f837711881a121b6247f10e7c2803995"
  },
  {
    "url": "c/audio/index.html",
    "revision": "c36557fa6ac6231abd1ee6271572910b"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "87849e4fb1694cfcdc70e872840795b2"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "308da8459d1bbdee24c5e2885f03357a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "e4f7857fbac439cf3b751a86773606ba"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "0730ad05c56c3e24ae34454f85549079"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "305e6e6c1197cf59d7e10750a3c21274"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "612d3b3962cda877ee4779ada080b6ba"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "32f64da1f1b61a271e8d1a080b547d79"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "507bdbc00fae23f370da74f4871bc8a6"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "4f6c965e1cb7d3e087aee945811de062"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "95323de21cab585ab46e81cc7f75a0b3"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "d0b11f55692f65cd82bba11ff6e77660"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "270990f8c59d40efefa82c6ac69c007a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "ce859dcfd80afc2ad963be701ffbe1f9"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "8cb00af0d55f055818fe108fb9372e38"
  },
  {
    "url": "c/program/index.html",
    "revision": "2f9e2940a8a611ae3595db853bad2073"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "3865fb18a53fee0cfdc85d8d0e662c70"
  },
  {
    "url": "categories/index.html",
    "revision": "8fd4baaf68637f42fb93d02456a315e2"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "d0a45858ede2c23d87c2a41d738d9077"
  },
  {
    "url": "figma/index.html",
    "revision": "8896facd328ed2649151fea8609f2ad8"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "48aad3127d14f884927ee1f94f6e0cb7"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "43d123c24d7ec5db2d73f682568b8723"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "f3986cce50bc1378f3ba35505f08500b"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "25404a09f844e5160775308ea671523f"
  },
  {
    "url": "flutter/index.html",
    "revision": "f6fec9997a6b68090ec747c2698a0a40"
  },
  {
    "url": "flutter/point.html",
    "revision": "d8f79ad2e9501531775e3f1b5de3268d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "07e910fc22a115461edb1437d9d89cde"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5eadee5a193dea053b20760459c99af0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "7e096fc403fca385d502a9b4c4414db4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4cf1be9505525b3908a9a7a5b964b765"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "902a23c9c48a23671d2b8d177f24add2"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "1d874097121e6997ac5632669af5fa62"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "7412f6f0c62603b03f824c42289105dc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b13a8435d97988409e51a60fe6b37c14"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "259e81cff846964ef83f624c84ce1eb4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f2fbe7e435a23080e171b68bb5e18ff9"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "088307c90f1d53bb218f80d4a99c9821"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8e6ba60e7e17b71fb0d49ac8c5c696ef"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "abc0a4f6c1a3da2a4329e5699255b1a2"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "69f8b4dab2d09127a8945685a8687b9e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "fbe17461b832d7e3b5c6ac27e05c4a4b"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "c5a99211d0b28976ea4f5f59b68b41dd"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f13d577845a6af6023f5df0f9974048c"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "e85f92297f176293cbc5150be57e9bf4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "8624b662d5edc32430dcaf8e5dbcffd0"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "32fddc6b2eb675c1ccb159e97f0221b0"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "534c30023cd2786e8682a497ac504dd4"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d3314352180d1f655569600cca505c0e"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "216dbaf92523e5db477fcff0854967d1"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d9760f3fc61517f7237337406e179d36"
  },
  {
    "url": "haskell/index.html",
    "revision": "f7bb61f6b0a7b484c0c395f2ceb869b4"
  },
  {
    "url": "index.html",
    "revision": "3f4aac7e1b7d8e16e8d369f81b4ea993"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "63f124fcf8ccb0c6e96273c07cc2357d"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7f478d470ac003caa818c385c561d093"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "0269d30b026679377b8def07bf04c1b4"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "40d9a3ac0eb543a0ec47c7e66e89a57d"
  },
  {
    "url": "python/index.html",
    "revision": "d9d6dffbc543cf7869c8897e8e991571"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "a6faec713f643b162a2dfb95d24e06f3"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "357970ec87e632de2d3b63859721396f"
  },
  {
    "url": "python/python-file.html",
    "revision": "520210afbd176ecb5a024c42ff1f1370"
  },
  {
    "url": "python/python-function.html",
    "revision": "a906188630bb315ac8a7577410a05803"
  },
  {
    "url": "python/python-generator.html",
    "revision": "ae80bcce72ecc347fc9cad6878892162"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "ed0f2b571c90e240b64423ebbe03485c"
  },
  {
    "url": "python/python-module.html",
    "revision": "e72135ec2cb803fd26c179ccf2b2f1cb"
  },
  {
    "url": "python/python-string.html",
    "revision": "59d5657fa20dcff24f20daf5932a037b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4ca061fa157c6203a2293a1945a6ec60"
  },
  {
    "url": "read/index.html",
    "revision": "5c8feaf6a4a7edb15b8e3798497c228f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ba7240843860a600b9aeccf5dd0adc8d"
  },
  {
    "url": "swift/better/available.html",
    "revision": "a4eb90b97657dd87271df7fb943afcb6"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "560999baf0a3dfa7c532cf792949f95f"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "9545c550d61eea7a292aa6082bbd828e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "5d1f52f51647c37b5e2786769f4d421e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "e5641777f3c8559f77ac9ed37425542a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "1875c8595237b1e96f50742fd896b5b8"
  },
  {
    "url": "swift/better/last.html",
    "revision": "0833540894e89ae019050e9ec0f7f37a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2eb9c8e1e6aba14a190493de2109fdde"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "13cd47ffdf8116f4ce662a5229e23b97"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "9958e42db094f5483bed29c1ad569577"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "4e2958cad5ddfd2eceec4430306cfa9c"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ca50931eedaf6f9ac0ed61f932e120af"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "304166fb11c177c60acbf9ebcf1d74cd"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "aa90578b4975bd73336bd9cf574922dc"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "13d9036755b18dff36f76e79b87180a6"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c4f9af96eea003303e8ae216495c7382"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "a57079b51b839407c517431191d5ee0a"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a77c8da80c5e7dc6446a8598e8d8d3ca"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d033bbf6292cb93c7e40e08e46bc8226"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "70a5f43c918ab0a286a1522e5b587dd8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "7d0a323bd04ca4fb046e95bdcdb98455"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b94f9c30cee8ed45d8936a5d4aced462"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "7edaaa1a81d58191979133a497dfed4e"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "5a4eb4adbf852961b262fa76e0ea551b"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "4a03eccfcfb0afb6fd4bffcea5def19e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "3fe303ded10c7fb92c472aeed7bb31c3"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "9b229624b831cec957e204154a2a83f5"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "6b18b606fd444f745d673870721588db"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "bae1a5ffd030fdf795b01700caad6160"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "d6ac377d9983632818e26ce29487b533"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "19fa7259ab5e2490dd085e9efa6e3005"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "11bcbe1a25669b4f43badda81437347c"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "aef6c7b1f1858403608f161b40e171c7"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "0ee7dfd2a390202680aad50522fa8858"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "683554b9231f8fdbbb2b19391846412a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ade928a8cb3f2e0fd5ac8579496add13"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "94b6650396e9320c1c017094d146c38a"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "803cc9c61196a47eda0e55a5fe3cc9f9"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f894ff4e8a884492bec146b315a7ac05"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "f124766782141f56641d6c124498049d"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "364bab5889f994440f3c2ab2d1e0d740"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "53ec6aa7c06604c82e118b177ce7d40a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "62cdc9d60c0b7ce56e44b19cc408fa93"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f9fe96356b3e87c116bd17430eaf8726"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "81c9cefd3f5bcd00ffd0cccc3613ade0"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "7d28aea092e60c9528c1c07ec6f602a2"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "e23b9ce54cf354d7f56eea49ae28483b"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "3223e3ceb15c108050c2a8bcfd543a3b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "3c58930c0501f15dc323bacd20348634"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "ca76fd654c601ea0e3fb9e42ec37a316"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "32ccaaaac6d97e99e8db264c66a64e16"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "7981595d1d79b72bf03d039e61ff1a53"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "7d21d621ad7594cd375df900566559d5"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "867752a35b861aeeee78dfc52e4d4f6b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "77be058df19f5dd36bb2a919c848d5f2"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "16fd22bf42c9efb51dbe5b7e15e775d3"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "dddce0b86d721a37cf78681072c69362"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "2014a4af0a38c39041a0abc4d1031f9e"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "85dcb92636e7d02830282690336d9ce8"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f742b1d7bf97a209a85383bba8373430"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "43138c503499c3c8716bdb46946494ce"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f7cddfed193aaffad58bdf5a12b39778"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b5098b9276cf0a546ed3327b51fbfc08"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "00911e6eb8406ce2486520b819769387"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "779390b00f1c538fedf05fc9dfc59a14"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "8bb3807bce217bf1f25a09758d136cf1"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "e8a79165a4de08a7380be92c2ab311d0"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "6389afb093b40c91a452434a0b386305"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "3b818153995480261fe5bb561976b0f7"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "b0eaa06512734ec7561a790467bcec3b"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "17bbba9e9824fe456b6d6da346cf0a10"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "0fd76e8f9147e39319957ae10bb95eb7"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "1c844d4222fc627d0c0a5844fee88239"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "5be9fcb647b75e2b368c6dc23e2ec47c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "de8da652cf09e5c2ca31819670cb2039"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "7e89540a28b9b9e53fd48b41fd19c74f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "1ec5a55cbaa3ff168f1a698f1c5d9c12"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "23e677773f949dfc01baff78b3a99012"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "a0a8df6daddee29c046f32e7422d080b"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "b2608e3801beb594f8cc93824c27ae0c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "7a748ce06872d3e64d0fe1dae7aacd88"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "352baffb8ce87cb43a716659e150b786"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "4f6db0842e3bd4656dbeae2e5bfab313"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6ad9159ad07c12f5f86a42c34402c16b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "9e2117973d53f546c3ef88897a9e3127"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b1b6e2a738111a5781355f20d4a7e6df"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "ecee85f4c6502b0dafba01ca68a31b00"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "3f615d993a3ac44d4ca705a175cc188f"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "9c0eac69100ae404a99cad29aa8d533e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "af0139a47de8baa9543523e7a81446a5"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "42aec0933167f2573eb4075ae6109e56"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2345e42f346cd54f0cd3a4340b806646"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "092e0b18e914d2e0ed9fbae67b9bc541"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "5543f92c302e58bab086931a5ea6b6b1"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c8509652963392e9ce71b2a07d131ed3"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5e45ce6e46f6d6636d0b44eff7afafdd"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "47582f0233588dac9bb3c34bcdc9f539"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "8da7a2a3a78dbc04a68ce371f7a50298"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "2c5be40f6d44822d1581a8278bbefbc0"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "826cd9f63aca70d9b882b5d93baeedd4"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "b00e1f33d9928653a26b8e059d87016a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b52bcb3aac1c87501b5052eae927ba06"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e83018dd9c15cc0605798e3c74c45151"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "e155a13163f38d910e03c7466cd1dc46"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2514aa77c915f2b5447a9ae3a4dfa25e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "cd6b420de81f5c5f80720332993c8bbf"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "a98e5b3a2d3d632301591deedb36e477"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "065469896fa265aab52009fb260d3696"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "f883bcea1cb5164ea71f3d6f1c567db5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "5e766e3fa6996c3e3b37a3da6cb4bdff"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "c80df4e124650a21d4a6ce7f9779d04f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "73eeb6d1dbe9fcefe5589a135ff608a1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f1bbb773e37520afc05d5c0c0ee31472"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1a6f9ca4d915264829ed2264c265c41d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "08d0c2e8bb873e90aa151d3503a8032c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "04b5052e42a84d232b327398a45b41e8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "36e8a67e76e735661389372c01f30430"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fef7bbe03454109f9bf0eb963a04067b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "519d8c7848b2f51afc26816172a8a898"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f420e7a3ed63cc386ec488b36dc7b05f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "64bcfe831354de3ac868591aefa78409"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ff53194f4755ab288776ab6dd2a5f44c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "0677b9fb0e4e4e0f6f0e2446091cb5aa"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1c1bbad3277b9cb688ff99f58dfcea58"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "fac464566129cd1ea441c81a8bcf368e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "cb0ac7b6bf06cd62bcc97b9d9eaec623"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "d91638c9382763c118d40df7387495d7"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "4cfcd686084b02bb3456296ee7c79c1e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "683f7c741bbda6b11b5fb608e3a85de4"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c4cbee619652658f22f554ddc1f08cd1"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "5ecddbb28b788e5ea01bf733ad0027ba"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "65ce62767cdce32af38c77f052f81403"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "13ce53fd4439a1b225c32356da1f2e2c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "7b021513881496f25c7c2a0ab006328b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "39af5fd2d2c3ec87e55ec39c4cbb4adc"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "228d6e6b4787864d1bf3e6a935653c3d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "719939253f988ffd821c6e57027fee18"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b4f19a78b25a8cc3b89497b328b39b27"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "427a94170bdba2de85df70c1fe47ce8d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a3384efbe4d5c11e7dc904ca64814ff4"
  },
  {
    "url": "tag/index.html",
    "revision": "a9f68a724151f31048b70ba7c07fd67a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "dbb12a8451c2c87f5bce014e5087d424"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "28b4698f9d0adb79053a765bab71b813"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "7d10e1a366bf224d0e9125c5d9b94ffe"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "11d441843174ef865cee734a3a3459cd"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "dacf16181e7b0c8379534cd0d554ecc6"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "75778b30461d8eae32eec6265934b404"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "e6f1d7ee4f07f3208c2d75ee0c0521ab"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "c003eeda8e80bf731efa462cdc604113"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "b9e3022477825b6ec33683d03795fd05"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "04b716f6325d328fbe462ebc094cc01e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "1fa256a00f830c55a5f239ff78d13ac9"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "de744218c3193b5ef0fd4e75e6ad64fa"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "dca6da6c3648ace8f4b4d5d6d50d5009"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e20b80c2ce4b0be652baf9d65769edc9"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "efa5fb4388fedffe0cb1a830fc93e8f3"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f546a9bdfdbc41ed405df14fedae6672"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "6d0c51ad0517cba643763d70d9d1263b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8362625c369c27ad332cedc05168377c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "158912d9cfdbd8eca513d0345917ec08"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e2861dd01aa99c81e9592f158bae30d2"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "2992c511e86898b12e4940c32ca2b4d3"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "1962c9887da2139977ac4e70b2030318"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "287e5b23dfbb128f9041f14e96fbe9e2"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "9a2d0395319228e84d5430390697613b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d0fb29492bb8021d033264d881df6fbd"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "23588211019badf8d17ca909c9dc8ea5"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "03b5f7737a2a3d5b4bdcef1486879b87"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "cc64e0ab60d183d4ad1be706cc64ff83"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7e84e9f7071f517587cbdee4b5c54eec"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "5c15390c210ab2226fb408850cf720d0"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "af5c1e9186554e55cc78044fcb51c841"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7891be0b26d7f55fb27543f7cdc8b1ee"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "5d7f1cb470567eea92a7eaa8e78afb98"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "fc948c0a2e16c88fc7c486071c578260"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f30823fb4f19cce2cc201a1d4dd96be8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8a040b2725c1482edda6b68068065095"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "bb746972e5f4f6aa6f00ac69816cfb18"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3e86d4613a6aca74ef49ecec5162bcfc"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "61b269045150fad67f888335aa1c1ccd"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e95f1aecadb95092338a31a0d75521fa"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1fb24c6e3e45774715936e07e3871de8"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "8cf6b0787adb162c285ce153d6250898"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "052a0e097134e08b283e058ced1744e8"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "53daabaf4c23bf6a21cc5ab7aa8e7e69"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "8b76052ba4933d7535afeb3c64c877f5"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "ccb137b2522146b935c95ab633efbbd0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7a644e5800145e118656ddc6e2a720dd"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "7c8cb751c76a21998ce9ba785b3f914b"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "621d03f9f8cba97a0cee3e599083a420"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "0b3433e35cc7bf764d7f6d1e6433cd46"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d943db96d7ff0e997cf5f35ce75c5a93"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2c7191066c57e4ff5c9940f103ba6080"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "044a5f07990c00da69b95b94d8edc22f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "639f62ebcf7bb37cdd45bff077210e06"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5be05e632f646698bb285245fb6ab3bd"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1df0cc960db1fe95fd919beab9fa3db7"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "978c4cdf91b7feb29320426114c149d4"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "0480511754cb51208a5c200004b98482"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9a7221088050c59c2f4af90bd756b194"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "cdab67d0f4c877eed302155f48de9440"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e0b4848b082f168345c937e1db81d812"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "03176f1fa0f41f788cadd8eed4cc482b"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "7680e6ed7e57f7d9e8aafcb407c2632b"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "4f80d9db32947bda5e547f1b6f9f5e90"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "83a146dbef6d44161c759599b51585fd"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "9f59c801e0ed225f2862fc0b15c96e18"
  },
  {
    "url": "timeline/index.html",
    "revision": "3d9520ceb4e8e21d2914b06eb32adc8e"
  },
  {
    "url": "tools/docsify.html",
    "revision": "830155dc230eca3b2efff871bf84c809"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "41fd9bb8922a575e2603219f9276ed2f"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "ad0df52e0c310335b458db1497e610ea"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "babedef2516837b6cea6da89e42f12f9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ce96cb4d84ef8414c3bf81d7df7d14b1"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8733c7e8cd1379932b9fd01ee070d208"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ab715aa5dcff2b2e9cfd5a55f6597fc5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "17fd30ed41d2674ac6abe34b07849ba5"
  },
  {
    "url": "tools/note/index.html",
    "revision": "52ab9e1c6abe51346a7da783e7bc90c2"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "793dc7fbb9936811472dfef94a365d9c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f4828c62be01165e7bbdafd218ebd344"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "26d976abc8926f0537a36d146d86d9fe"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "69f2fd9fcc40b59770ac9e622c9ce14d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "5539749fe2f461c0e09bde3501d16b1e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "fc964b1792909ed5c0e6b2e3ed8b0906"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4851bec336332c44b3fc22aec0deb980"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "34ce944808c9430acf62141b0769d0a5"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1f8d5a709750211ef31ff5eb27711917"
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
