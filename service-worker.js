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
    "revision": "ce4ffb9fc45d696a339cdb4f6edf63fb"
  },
  {
    "url": "about/app/index.html",
    "revision": "4713aaa81195845b7833629bc40bde7c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "50e03d5675a87c97e865e49354fd7326"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "cde7f37c10a36c72d013cad1da9b4037"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "2453de6fc5889c786280c0a33b37994d"
  },
  {
    "url": "about/index/index.html",
    "revision": "43902933b362367de05db8fc5ea2d024"
  },
  {
    "url": "ai/index.html",
    "revision": "7984eda23368c609e2aa64333a62eb7b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "aede98015d30d65179fe499973d2dca9"
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
    "url": "assets/js/121.ec5739c8.js",
    "revision": "ce8b16e8b54c2b6ea2e5d2068ab194d6"
  },
  {
    "url": "assets/js/122.34a14f98.js",
    "revision": "081711237c1d58ea6983ecf17ce02e92"
  },
  {
    "url": "assets/js/123.edf2c720.js",
    "revision": "2f94a1096c3c5a71ed4fd0bc108d568c"
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
    "url": "assets/js/127.ef7180fe.js",
    "revision": "7b5b45886497910c07e3d11adc17b53e"
  },
  {
    "url": "assets/js/128.b5478fd1.js",
    "revision": "7867c413d08f544db2cf36b93a8cad9d"
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
    "url": "assets/js/134.de18ba37.js",
    "revision": "be5cd10ab73df1bf54a7e4fbf6c41d55"
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
    "url": "assets/js/139.9b066c46.js",
    "revision": "4d57819d558b3bc408855eca56752a00"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
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
    "url": "assets/js/149.146d9ec5.js",
    "revision": "79bcbb19e957f1f15d969fbb139b60d8"
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
    "url": "assets/js/151.fdfaecb8.js",
    "revision": "9d5270326e2ea30dbf62b2487c746f33"
  },
  {
    "url": "assets/js/152.9877a24f.js",
    "revision": "69e02cc2be9799853aad8e9f3a510157"
  },
  {
    "url": "assets/js/153.cb694ea7.js",
    "revision": "cc64ad1f2c563813d02b2c2decdd14cb"
  },
  {
    "url": "assets/js/154.f386e2b1.js",
    "revision": "8ce4dee901417f54b404fd2396c4356c"
  },
  {
    "url": "assets/js/155.189e5bd5.js",
    "revision": "130180fb4fd0c7d36ee073b8522df2e2"
  },
  {
    "url": "assets/js/156.8fcd059a.js",
    "revision": "1b69820840a549d8f6b9e2f7ded481d0"
  },
  {
    "url": "assets/js/157.8f4da794.js",
    "revision": "98f763a2b09e15503ac3972364f217a7"
  },
  {
    "url": "assets/js/158.1fe884fb.js",
    "revision": "82091b6df4ca05e98f01b92cd5dbf929"
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
    "url": "assets/js/160.5e9d2883.js",
    "revision": "906a1d3ee7d84fd71e6f97882d39dacf"
  },
  {
    "url": "assets/js/161.a534d905.js",
    "revision": "70d37f80964896aed1fb542c4d2b449d"
  },
  {
    "url": "assets/js/162.0ae26a3f.js",
    "revision": "f8d35ec2840f93dfeefcfb2fc24c2895"
  },
  {
    "url": "assets/js/163.3fdaa75e.js",
    "revision": "22648ba027006ddc4caa74896efa573b"
  },
  {
    "url": "assets/js/164.98e312b5.js",
    "revision": "a0afb60b39608444467501c9e498e7d8"
  },
  {
    "url": "assets/js/165.16538b13.js",
    "revision": "19007f4218c13504c4e1f1405e2fa6dc"
  },
  {
    "url": "assets/js/166.ee6dcc99.js",
    "revision": "b8c036913318ebf66ca4509461cfd486"
  },
  {
    "url": "assets/js/167.eadb3ec6.js",
    "revision": "64676153c76193c70b68c6310304f7ea"
  },
  {
    "url": "assets/js/168.93ebc9b1.js",
    "revision": "f1ab72e824d1f10c8dbb7f7920e64faa"
  },
  {
    "url": "assets/js/169.a5032a74.js",
    "revision": "ccdcaee1a580cb369bbe0ca49d1780fb"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.19f2f733.js",
    "revision": "dfbdb3b75840e18242d9437275b72f7f"
  },
  {
    "url": "assets/js/171.0d15f974.js",
    "revision": "a34108158af3fc282e4507d977384e04"
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
    "url": "assets/js/251.492bdeca.js",
    "revision": "a360de308fadd268592a05d3ddeb87ee"
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
    "url": "assets/js/255.8c22f428.js",
    "revision": "610d829f4e4c6026e7cbe4f6052686e1"
  },
  {
    "url": "assets/js/256.62dc80b0.js",
    "revision": "1efc9d67dbf09bbfc01532f7393127ed"
  },
  {
    "url": "assets/js/257.35ca4a17.js",
    "revision": "5ebafad9b793eb610f815f021f742c2d"
  },
  {
    "url": "assets/js/258.04b7b9e4.js",
    "revision": "5095d6a415d03a5fafe268db854ccd02"
  },
  {
    "url": "assets/js/259.65ff4674.js",
    "revision": "1b674a38d478ce74848a4c39b5059918"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.216dc21a.js",
    "revision": "5ccb3bf8289eb512525a85e5d42f0118"
  },
  {
    "url": "assets/js/261.c7f48c3b.js",
    "revision": "b47c919148bf51f33b40dfd621f20a30"
  },
  {
    "url": "assets/js/262.ae32009a.js",
    "revision": "a38588a458f9c087ae02928b114d7ead"
  },
  {
    "url": "assets/js/263.4777999b.js",
    "revision": "8fff14e39b82d4562abe1796f51a0e06"
  },
  {
    "url": "assets/js/264.ee2dfb90.js",
    "revision": "a59bf2b5ba3f3f42fa78f6150d876cb9"
  },
  {
    "url": "assets/js/265.e0cba1c8.js",
    "revision": "1956131580d594cbc82f90d6da3653fb"
  },
  {
    "url": "assets/js/266.746a1eba.js",
    "revision": "77a222083deac0623f4192f44a5c4c34"
  },
  {
    "url": "assets/js/267.bd842d0f.js",
    "revision": "62cf8c5127ff71855de7491e845a0b8d"
  },
  {
    "url": "assets/js/268.d5e80733.js",
    "revision": "e2b595221de355b617cdb1a3715299bf"
  },
  {
    "url": "assets/js/269.932cd725.js",
    "revision": "a31ece890d3b730363f374d746905666"
  },
  {
    "url": "assets/js/27.827a9ea3.js",
    "revision": "9a122e3175ea9499cf895cf6faf05e3d"
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
    "url": "assets/js/app.a41a1122.js",
    "revision": "b34d19fcff6aa177e8d3384ce67d505f"
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
    "revision": "e654a980888bde4731eaa1cc1898209c"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8a96f4f60569507201ec276fc5f870e0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c5b6381103c7e40612f74d65aeb07a12"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "aca8ef151541ddb2c8d7b4fff1ff0726"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "876d1e00ced75b903e32150ffbae6174"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b54601f26e4ad581634fcc3c58e74b9e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f2b0d43e35f7eab551447791ee8c64af"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "933fa71ffb534f2baea947b7275841e8"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b4b070763bfc033397dfcb9f0f1fd855"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "45cc26f3729ef60ab5bf909eed07dd0e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e9633ae61292b6e116382dd737e64242"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "baf5835f11ecab43e8d2009fba9d9f48"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "41faf9646640e9f8be36062b63e2cedb"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "b59a866519a93f0ce801df34c57a09fc"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "4ad40c8e45642f0aa0532383fc689c68"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "d0a3ed35a5e12ec83fd8f0d6ba8d85b8"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "bb6d72a148416f92fbb9bae75ef23ded"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "99ab3fc4b81751a26fd9b0cdefc83e05"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6ba537360c9f5cd0339bef4edd2d578a"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "7270c8b9cb07aa9ec1a0a3033dfa9f6e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "91f5aae53282acce5fdcd8a20e458aa8"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "278d44a8f25aa25a78cc991f3d74fe26"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "e4a18f7e51bb54bf02d8dccf03f156d1"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "6479227f6fa4a635f3454a532ef21bd0"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "92925d5fcbc8ab207816eb5ea832c49a"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "6e0249271d53a4b8dbc91e2911eeb890"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "dfb2d1a1da510615beb0673ad0ea616a"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "573855511fe970ca58f957d1811739ab"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "ebe040e0d5d3bf5be48d5cbf148b4cba"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "5d94fb476373de9235717ec73a234544"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "30fc11bf14ee5ca27455a3240cad294a"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "c64c4ef5c86c3bcb101381b091d51e8a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ac9a1268bcebcdc46ba9d786eb666d56"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "60cf16e5a0d70cc45ea37c9ce6d5d8dc"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "4b216769214199c935930e7048aabff5"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "38dce8ab6d340b7b0e583d7b85e9deb5"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "c0bb16209c2a003ea80c889b5027483f"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "49def88bc84e6104346a1260e599cab9"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c6a3eb1c109b57006a868c833f794fa7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8b7a220450027f9c2fc04f391a63ec11"
  },
  {
    "url": "book/index.html",
    "revision": "d5a84cbf13098f52aeabf14e1afd763a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "133d1ab135a86885443d9d0f0c65cea0"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "ce8b567627aa968fa83013a92d9f107a"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "7e096f9d6ac4c0da67cd2b1e117352da"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e017be5a313fad2bf1e1a72bd8192b1f"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "e377b9f66f6d38d78fa099a0134beaec"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "1e709ca923320673bba923fcbe4442fc"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "9f8871fe88844d2986e964aea69f14d0"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "678718dc207096335c3aa5973b2ac87e"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "5155b1a70666f1f9d8e4876e76c493fb"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "05bacc1d0626df69dc965ac193dffaf0"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "e72974c9580dbfc430e4b5039cbb76c2"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "74001ff0fa0d9553fcfbd18a4e0a1528"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "dd43e62228fba03ff335b65380d08696"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3450a787c09a781702c784c013732747"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "8b00dbdd902bbcf7958b6f1a3bf92009"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "3a81a4750462dc1c3d8dbe7ad357a161"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8bc94d65cef5baf9e23670af9f75d51a"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "447691b4c5287daa7adfd91cdcb4d17c"
  },
  {
    "url": "c/program/index.html",
    "revision": "920c44d576a82362492e22630528fc50"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d9104e49fd86053d9e2e632260861474"
  },
  {
    "url": "categories/index.html",
    "revision": "9cf1648df562f65a1a9ba2e47f719396"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "a19a81f197211c306130c78dbd677fc4"
  },
  {
    "url": "figma/index.html",
    "revision": "5cbf98d84f826f2a8dc4d862a5502b7e"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "4cccfe898f051f26186d135366866e50"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "35a81febb068f45822f7788c7978a1f6"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "44f75cc1a270664aa05b5a01d783d598"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "17651b6688d2f00925bf9fc41dc46b0e"
  },
  {
    "url": "flutter/index.html",
    "revision": "8c6fbd026df5260ce33af2e0eea8b380"
  },
  {
    "url": "flutter/point.html",
    "revision": "f274122403a446f695b05017ea4a2250"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "f88ba3908e121ea36b9db67917edcc3a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5c6b5b5d117cd12d094b5a686e1c01f4"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0b90482ef6d95b500e4437d86c3888d4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d2a4829c6d2198abbcf34bf792134a23"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a0bf0b0d9fe1976c96cb7cbfe2f47abd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "46541c3ba53774ff5b61c848b5214d9f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b7b6691d0b1bd556e7f5fba61b1cd97f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "87e52d31a1bd2d7b48cc10f05173ce1e"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "96d2cf86390fc5f4b5afe90b5637eff7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f251f244024cc94ed907f1ef748e4501"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9c7c9a823ab8fb16fcf986eedd17d3fe"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9b4fd645d64653bed1c94648778366fe"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ebb18e762f7429a8be82179ad1ea6a22"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "4f45cf576da2a2c4d3f8d6e992e47687"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a3d9c0342d625bcf9b0c9a62277e0576"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7f46a44e35e8bfab6c6d2f29b4f70152"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4f4b26365dcc5c0c32cc9bf847ff9f48"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "a6753b8f17e292d4e4da9807be8a2706"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "c120886bd9652e8ebfa939025bf1682e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1679cce89365a3ec0ab3af03b791a702"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "9172aaf45aeba3a4e9e215fc37583622"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "99b2fdc8c2a5ee8b72bce8a244a0c492"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d9cb6c3b292a65faa082e37bf6f01f46"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "cfc2131a24f4722120f889a810a25671"
  },
  {
    "url": "haskell/index.html",
    "revision": "5909c19a08adad5f1b44f2082cdbb80f"
  },
  {
    "url": "index.html",
    "revision": "50ed5b5bcd2751beee740a9092eb74e4"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "717cb2b23773287cc763ae874f159334"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "51d7664253f032dc8b0740c3ecffb63d"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f2dc884ac71b0057d9fee06cf0e4e26f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e1f5542f47ee0b89d14d2e96a4fea875"
  },
  {
    "url": "python/index.html",
    "revision": "1dc80efc82dbf8c68d594eaa8f35ef7b"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "332a107a87129d96a8fd99b9249b0a8e"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "04c3b23dfb6418c2cad32d9345167922"
  },
  {
    "url": "python/python-file.html",
    "revision": "fe5094acf712a99fa1b6f75120b1e3f5"
  },
  {
    "url": "python/python-function.html",
    "revision": "5f21747f4fe14562fcd9126eaf35c3aa"
  },
  {
    "url": "python/python-generator.html",
    "revision": "7c0922ac0d5a1586cc9429d9cdeaeff0"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "b6cd6c6f362870b6828d3c4d8d333476"
  },
  {
    "url": "python/python-module.html",
    "revision": "b093779db8f5bad110cb01e537b0892f"
  },
  {
    "url": "python/python-string.html",
    "revision": "66aa7814ad00121520d5ac2b95a5fe22"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "5fd754882e69ac59474e134e8c7e010c"
  },
  {
    "url": "read/index.html",
    "revision": "58aad2cdb9d4c32fbdd04557f59b90ff"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e5ff4480c0633166de42fb88c6a3a59a"
  },
  {
    "url": "swift/better/available.html",
    "revision": "e6fcfc15ac7cebed51d3ee5b129cf204"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4fb65a5fc7bca219ecfaa71ee48524f0"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "4989c947e79dec2f8bce454f7b894a6f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1f5fe73d83ee5631c14bdb5a6b5fb1df"
  },
  {
    "url": "swift/better/di.html",
    "revision": "d7ec48993c38fb40ee5e6c3c2e218d4f"
  },
  {
    "url": "swift/better/index.html",
    "revision": "56bb96241995690fa59d62443a047f8c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "cd3c23e438451022402deb15e30f35fb"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "827abb861245ebca7deb5f49fd666419"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6cf553c835d7629dbad8da4114a49355"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "4efd92da988059c386efe42aabcc6176"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "78446aec789ed00659163eee64b6ccbf"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c6945c974cac61ee574318b5fe8fc595"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "62fa952ac557786acd97f3e7d3f24fed"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4c12978a03324f319464ed02a6897ef7"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "4fddd4e343c810ff27abe3b1a2354173"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2a7868168735675bf73e43b664a2d9bf"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "809e8f7884f01829fc772b48310e9c95"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a37ba5e0e735b3b5a1fb4630bec6d6e8"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ad054c8a76ec536c4c506b792176fa44"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "55b4652c8ca0131baf6faa90c8ad4c5b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "a71685e4ee403733c8d1b8182f20d69e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9ee0c8666cd98070bcec922dbd0e822f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "74936512e46b84b3ba49f1958a999e0d"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "7704faf2f76a35c7e36d0c59d9482896"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "17e3817871b5cc3754f28bb3b37c2bfd"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "a9ebd94908b365b89865ed42d11cda77"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "55e4a5c136a89f7d107eb8c1a7b474fa"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "4b360301871c7fd45588ff2253ac0ad6"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "332e0ac4e5ea6009d74ddbeaed342c50"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "368a9b4a0bd1d406bacdc47497b374e6"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "841869744fcb15bf27c132da680f1ccd"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "0047b60ad02680ee1a9c55190124043a"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "1f3a9933c9d54ff8b602de92abb80055"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "7eee9a21775172d1a4a7f15f79fff958"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "2fb28033b5221f756cf7a0546c3400b0"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "49b6616ba932aedc65f8d0f51ac424dd"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f0998b6679863203e4396375e4639770"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "3b40b2b6efb89ff4db598834cab84a32"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "9ead8a5e946bdc5ad21848fae583c53b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b62cfd873fb5b28c314e36f35c33cd31"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7e771b2b3ca9ba3b6a63eb802efd0bd8"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b1101fcd898d9aef55c230e0f4c5a6a8"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "232f562b6a86099f190a1534fd7fb3f2"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "bbe5905a2c219a905953e88fe84b7e14"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "9738403831c640cc707beb539c439b18"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b5e57438f465854299731f5a4e0f8ae5"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "2b2d8b595ef49569286b25e4cb998c5c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "03b22853e0d76d7f9f28b62f1294c5e3"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "e0a5004bcd950ec7438f8bd742c2245b"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "66ca95c090690ad10a88ff90e0499f4d"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "346837eb2600b7d415f6e90fef8046b2"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "bb805c63ba562e0b51f582bfeed6e0fd"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "6926f4a28320359877d039e2c033547d"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "cb2c0578420f9c048b30e59e0d3d8d5b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "4dc1f2828af4edfdb64302a6eef37aff"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "481a0fa6c7517ceece5b562095c9bfaa"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6940280e71bf601285a1930b8a210163"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "2955813bb486eafad237870e60e49a44"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "49576c0d1c2f43101e836bfa23bbc47a"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "0a2220c95df3a5bf8505f7c8029e4c58"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "cd211de293b66fd55bb28b8949b7e974"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "5e2d4092c878fceef4445c60e36d51ba"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6540e5671416338ad9d110110b8005af"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "a37c8e96841cb20d93d82e6db40e83e1"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "5204999a4a148ad29f9c31f94567cb3d"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e7ee3f321e882821e4e37d1a25dcc1e0"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0ff28223e6dbd5a3642f210771f2f5a4"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f6cd943f3830e8fa7678cce0021b71c2"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "c97c1b4daf28ff06781563778a1e6e51"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "e15ff6eb2281573ddc2e3317bf772cdb"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "280872bbd0baafd95addd8ded8a5405b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "6c86b5f6b8193db87981479729c3465a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "9ddb23bd90f27f40fd17af30881d6000"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "a5509226c185b17a00c482bfde429c8d"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "771f86663b7b2fcf5406eefd5a2a28dc"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "0415ab71f2567f1a1f69826977b6c5b7"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "9bb94f510bfaf33c3ae5bfe84fcb5230"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e3adfa53cffab27f804095b16c4b52c4"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "527ac60f97c5e08a80438daf75ddbcfa"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "85f2f43d6120d4c70d4f4621380d0273"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "3d324d468f9fac349c8480e4682e315f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "fc8ca44e2bc65eddad10174b887f4d89"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "df9275e128e1f1a8aef4702f0bbbd8b1"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b4423d0e651ce2021e7f564396778888"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "34fe21ba90809025a9183cc7bad6902a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "0d38901bdc27f206926f365ed06232a9"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "9cfa9add0cbb4ca7628207ab6a63c10d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "6450e2c1851b6365dce78ecadd6aaf52"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "f57b03efd2126f2ee9ff9ee2a04f3307"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a89160d7623bd97db60eb305b715554a"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e6e5ed071dd1045fe969069e3f9d9277"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "71d45cec90f99c53112f52b7b37564dc"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "fadc08b4c89eb16a484624ad2be1bc16"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "6e8d1b58c6ae7d2e5b1e2fbc4741d8a4"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "e47f683949ed9ece81f885135ac94185"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "304637c94a828e9bda5cb944f811ffe2"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "748f488f6fcc709661bb9199e4e9bf97"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "0d8be52822169460b47a4ed4c6962dc2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6282cdd336d10d56c2a0bf6b16acedf5"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "4e473995e3e4f6fa386ae2781f951ea3"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "af89bd77111c5ddcbcd9e6db0cecd915"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "2b20115fe1e93db3c5e400d9174a2f79"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "41e0460fd2b66dbca6a5a57ac1ac2adb"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "0a56a1a95d095b555c457043d40682ba"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "fab14be0e3451b82b8144c0e3d41a512"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "92e04a866b0cbf1ca15ac8a427d79647"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "77b79d4267d8b72d6fc40a1982a3b7c8"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "46fb983cbc435bd13cac6c69a2ab6b64"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c14cf8e0c7db828e206aaad3996da84c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "3373561e09ebf6fdf6c89972dd79eddf"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "65e3e094787d90a718f36e2be3d93545"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ed8b9d33dc6424bf76035c4f6505452e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "be772ebb63981f19f0d4fbc028b7c8ea"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fe430391287a7cc05f2ca60b5d2796e3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "fa48102fa44c503ec3c325cc6ed2df68"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8c81b0d69a98f39155ee2ed0a43f2f29"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c115ff9bab00061bd445e35d9869c6e6"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4ac7bc66af46d635dd06de2e31b53a34"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5e20aa9e0634ff23c147faacedb1c99c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "97e13b4903fa1722b6d26a38237696c3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d7aaab027a5bb376342ca6697f3692ba"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "bc1d199e59f77d1ab0bb211a0176cfd3"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "473375faf0cb3345c48a5e8ff04a8e8e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ba52bef673ee133c2724199c04dc04a3"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "05e1257cc80007894493afbc66dc8c49"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "cfcd9fb2ea9f8d2ec5b0529773b9d398"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "27a60adce4a469141d356f7aa3aa8d9b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "dcb4da7b6776f730fa4ec036cc539b46"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "8df1c990ce56716cb8622d4584e531f8"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "60a2f7a8c2392fd8e2b6e8834be45e0e"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "64010530da788f3be32890f211cb8a51"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "91fdc36563c394315c28c6fc561398f1"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "0fe9ab84b4baabf8d81eb53a0005b93a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c16b5a4d49dd8a30d2aa645f728ee523"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "c4a8fcba01208d0e81cc778fe9dc090d"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "df3e81ce6cfd641cd66abdcad2d74cd7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a237c141bbb52a4b8a07e7c91dcd8905"
  },
  {
    "url": "tag/github/index.html",
    "revision": "939241ccb09a4f7381b57992e10bcb0f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f512dc4396108ba3425d98176a682ce9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "51c2ac46274d33d7dd3d1b607a3b4262"
  },
  {
    "url": "tag/index.html",
    "revision": "0e0e8bfd4a1931814cddbb94c6fe794c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "58e55f55a35e0a067a91ab603795bb66"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "91c8952abd9912c4fbde1d306d03114a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "dce434ee05f5fefbfb90d8501599ac3d"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "059b382299478b46f66d95662530dfc3"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "e819ee47c1931738a060d60be56ea29c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "0ed693e5f311a69d0fcd0b61905bfdde"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5e95de667a1d627251a8dc2cd28bf011"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d8e02f6669924201d016145487dc4a18"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "594977d362d271a4b736f1318b147576"
  },
  {
    "url": "tag/json/index.html",
    "revision": "b409d15c9690f41978ff7e62bf9f2518"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e8005e8c909bc1f99bcc430f775d99ba"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "aa45f5e4224b36ccee2f0f1a097d4246"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9dca03b93c11169537d571db02662696"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "0c8723f90cba7910172baf87cdd8631c"
  },
  {
    "url": "tag/read/index.html",
    "revision": "e0855f29cb49a5abf5cb27583c57ec0e"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "85df005a57cdeb737e2d89d7ae909aae"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7079c0f364bc669ced264fef1c05e4fd"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "883974da910796e4caf9168e11174573"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "20b3dc206e781fc652eaf44ba9929f0e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "c5f71edc7fb0212de71bd976046be50d"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "7c2c350dad49ba0adf6ea7b1ed1b359f"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "8aeb92e49433ee6d25ffb75d9ff926ad"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "15978ba0c5b2a34a736f77433adae035"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8caa9c9ff3aea4034a07d58bd1936f3b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "51ea2af010e1642f80a267ff8e9ec014"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "08f831f2f837b6ec75157e3112228a8e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "26009ff2298b9cf06fa4ecda7c19b620"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "c34e187a176b9ebf7014ebfdd5dc7d64"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0a656e6075b647d891b2dcc0f375b850"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "0ee1127c52bd37333c4ae0ebb21729fa"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "47a53755247002b4da6fb81ae4f004c0"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "496b93f8789d58a9147d836192dcfdd2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d8b1f60abd1480c2f28dbef2fdac902f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fe961c52950739100cc5094ff74720d7"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "86c3826381f817c3562c7805a5be075e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "4a30620564cf0905bde82c23db973660"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "536468c093c5f8967dfafa08e6aeea68"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "066bed185f2c5b1c94b10de16ed91699"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "67dd0e0099804ba37b0d31a49c31e553"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "2fa13a5c633278d657b8d295ba0cf396"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7cdc83301ed404304d409c79623e084c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "33393ccfa99168966ddd032bfb88fee6"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "37566e970be8a1798815ee2f642a93e2"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "32950b8b2f8d6e08cb506317c69804ed"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "71c2934ee16b7addf86bce07be610076"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7947dac0a625a4e3ca87c08e4f871636"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "f56c0150cf6e98d8cce1b90a15bc8b5b"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "97c9d943fb77706f5d836cd0e8facede"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "35fa21137a102543a22adc63fe67af74"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9e516a291e02d63e74c7639ec493252d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "476737f3aac877bf23f06b20434060aa"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "32cacc0145638370bfd34b1c84599012"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "6cad2400415eb0452785d0a267a05685"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "43dcc97a78b0ef7938dab6ff1252f007"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "98a8e2ebbdc2e23d5a89e0a51e32e308"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "0462995c056e870acc102ce645186ed1"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "d770197bc39db69821ecc3f4fccca88a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "aa3ba36245ce8e0f49c04a081c6c9d2c"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1e86b8192ced78c25331e5c6ec31a171"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c7396849064f04828f199a8e7df8fb64"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f824993bf9f12b7ff1d43d3e8b3d1bf0"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "c6b56db164de38bbcefed1d85e660a17"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0825d1685ed5ceccb5e2086553c02537"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "8ac60abbb058c7b12919f9ff9027bffd"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "e82e0c2e274824c46028a8752b31d62a"
  },
  {
    "url": "timeline/index.html",
    "revision": "ea9f3a28bd89a1a9635157fdbede6385"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "64527f39f34bc5ae6ee2e03566370657"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "7e08158e28eb0e20ae428f6eaa53a483"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "fec7e0a8b917c5378fd87d6456c3f62f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "14eab4366fcbf928449a55501c47f8f2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6cf8abfa0fb499bb1ec77d87694d535e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "74b4861dfb89c0ee897cab3bdc127fe5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "777269febe41b4e42fbf480b997bc9c8"
  },
  {
    "url": "tools/note/index.html",
    "revision": "18bcc744cdc159d4411e933488abdcbe"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "776ba79a19e326243d14595c4e754db4"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d62213c89299f0108c16d9ef7fce5777"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "648b2a488fcb384bcf0b2ff9cacfb320"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1a696e10166c6fe2c4db80fb61e56fa0"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "a19e9792851897dd72e024ac2230c877"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8361fdd8f3f089013033a78fb38aa508"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c03a86ca091644373359dda5089bd046"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "c22038030af55859071319346f50f911"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "122f80b5c02c0ca7c6c6b4a94208af7e"
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
