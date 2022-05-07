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
    "revision": "396e015de935768505c72c3553c56651"
  },
  {
    "url": "about/app/index.html",
    "revision": "5b3556399ed465b712bdc24037278323"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8bc4917e5aae373cf29b1fe4667743d7"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "93e81d48499164324a969b9d17abeb73"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "791f20927c97accc70919956e986c6aa"
  },
  {
    "url": "about/index/index.html",
    "revision": "bd494b1bf4f3b7f46e7b6d218222d579"
  },
  {
    "url": "ai/index.html",
    "revision": "ce78e2dcdb9f3dd93665cebfe6f16b4f"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c9e529960d03f8623680d0e55ed5c9f8"
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
    "url": "assets/js/119.98675e73.js",
    "revision": "ea192330fcf03e87f425b099f0b75825"
  },
  {
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
  },
  {
    "url": "assets/js/120.d96bbe4e.js",
    "revision": "9df3383e71d8c35c786f9f19bcc767da"
  },
  {
    "url": "assets/js/121.5a2b3e64.js",
    "revision": "05cd31c58372464602b33b7150d28396"
  },
  {
    "url": "assets/js/122.34a14f98.js",
    "revision": "081711237c1d58ea6983ecf17ce02e92"
  },
  {
    "url": "assets/js/123.9014f25a.js",
    "revision": "96a70917c782515ce2ddbc4f954e158c"
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
    "url": "assets/js/157.a8875f63.js",
    "revision": "dcdbc46243f02be1633f6817ad285495"
  },
  {
    "url": "assets/js/158.1fe884fb.js",
    "revision": "82091b6df4ca05e98f01b92cd5dbf929"
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
    "url": "assets/js/181.9e19886f.js",
    "revision": "8f3ee19e6d82baa9e181075a2e7e8a2b"
  },
  {
    "url": "assets/js/182.324f160a.js",
    "revision": "4bc6750ce9ab39d1f814923f1ec09f66"
  },
  {
    "url": "assets/js/183.08eec268.js",
    "revision": "107ab0e68b7d5ae44e94583a82d8ac0d"
  },
  {
    "url": "assets/js/184.2cac26fd.js",
    "revision": "186acee21a543ba2674489b94db5dcb6"
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
    "url": "assets/js/202.fed76597.js",
    "revision": "070a61f3be65fceefb1f5e8653ffb951"
  },
  {
    "url": "assets/js/203.701db98e.js",
    "revision": "3abab713e53780c7203acab500effaa9"
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
    "url": "assets/js/218.968c6a04.js",
    "revision": "a09c893f946933dade221cb8fcd7da99"
  },
  {
    "url": "assets/js/219.ab5d11d8.js",
    "revision": "3be4635dd6efa814003b3a6f7aaa7f63"
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
    "url": "assets/js/224.58f295a3.js",
    "revision": "81918c5b2cdd519dde5d9fc8e77dacb7"
  },
  {
    "url": "assets/js/225.a25a8a31.js",
    "revision": "fda1c312ac025e0a4bafff68d3a23d8e"
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
    "url": "assets/js/232.a5fb1489.js",
    "revision": "6427fb738e0210f40c7896704b8d20e0"
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
    "url": "assets/js/250.88379879.js",
    "revision": "345fe1cb7c1c62d89ecca34676af0022"
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
    "url": "assets/js/262.c766a60a.js",
    "revision": "d3e91d90aa405c5baf8fb8aa5b9ca9d3"
  },
  {
    "url": "assets/js/263.4777999b.js",
    "revision": "8fff14e39b82d4562abe1796f51a0e06"
  },
  {
    "url": "assets/js/264.834af580.js",
    "revision": "3f49187c824496cd707dd7942a248cc3"
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
    "url": "assets/js/75.644454ac.js",
    "revision": "06976000d47a02f3aa3be492305f7325"
  },
  {
    "url": "assets/js/76.5c3291d4.js",
    "revision": "319094fd913a0c8e5b7647bf691635d2"
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
    "url": "assets/js/app.cb360869.js",
    "revision": "9c1fdf41f0d7f9baec95a222d80bf89d"
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
    "revision": "55bd6f1f84e967966e3a04c0e37b80fe"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b905c1a07a9858e413f5621f57d91531"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d56cb139d15ec59f2bc8a72308e27be9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4d87aa66dec3cce65a4faacd3fa62101"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b112d819e50bdcb002b767bbb81f3370"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "8133f59b6bcdd1fd4252ddf0c77ca529"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b51823adba6c22f9a653bd959cd76d19"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "45c34d1020bac0fd61673558a8bb8489"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "86b22b96b7e188946cfc5324db96024d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a009c0aed3ab36a17915dd446380cef9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "cee309c737a3b447ba1516267c29c709"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "edb655454d144e640edf68cc1a4f13af"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "7e2ee88090076c7f9548cc83bf45ba26"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "7d47b92aee822ae7741aa2cb05c935ca"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "bdec3ec9c9ff2387877f82e1c02c790d"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "0418c65f9f9923514632b0f87f1714cb"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "86bae7f3f6e6d5d2d95fa16b3586b181"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b04d8c3c375c5962e1122adcdbd7baa6"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "05fb30220e4da7cfc204393feecae900"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c2fd1ef659149d7df31bfef9365b7b4e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "3e5047aaaafca507cec7fac5475ebd98"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "30923855769a4dd2c623827488c16d16"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "c458ab489fdd515ab5f307521f8b9a80"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "9399eda512d4708f51ed5ca73fd3480f"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "fa070da3dac6d83b9b76d7201b628b1c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "b1b51512a3b39150c761754084289699"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "b9a6b325823181b1e90b6d7fc3743182"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "503ed93f3889feaaaab51c3c7c750907"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "845c387461e3b450e58d5d220adf59ac"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "efcc98a6ed05f949608889d5ca5d9e50"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "5162df7f70f45cc84e20daa99453f0d1"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "1f1b09485acb598539bec655dc709738"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "31c68c6ccf70e97d6358202101e6fd94"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "f69581b94e05c94c9b22121c93040a67"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "beb74c1416ba5e3e49ac94bca1c19d1b"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f3df57563cede800182a0bc09da2eed0"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b8028ba0df35b36310d81e004cdd0ca4"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ebfbd8488384fc09a016cac1524c07d5"
  },
  {
    "url": "basis/index/index.html",
    "revision": "81aa36936b5f02747bf8161f8f0469b1"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ede38717ad5a8ea2fb00bf8baeb0c3fb"
  },
  {
    "url": "book/index.html",
    "revision": "1a699058d5e0133c1c642c8c5b92178a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7df69ad1993272a3d31651d36337b2ab"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "432a11d48de91a7c574d4f2054ef9ab0"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c4c0345c0818ddbfca3e32a51e5e25a4"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b4a842cf04ba28ea1307c5a91af3076a"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "4e56cb2678b7e3b977958d9e1214150c"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "998a3cce59a38cd56c70f7721a81d466"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "ac35ce82971ce26cbe20a9d2ab13066f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ea2d22877e697c3420d0dae8adc27ab3"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "9a577ab9ba105dba90dcb640000ac2bd"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "2bdac20aba7ce0e31903a36de1016b02"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "1ea15fab3f35a6c3f31ad101c502b51d"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "a4467f35994767affc03e5bc4b5be6f7"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "2da9ba010a9f55c4744cdc95ddd97c72"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3307768dc8ba3da296a13425076e809f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "d813a4a1124e9e749a6e47487c567288"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8c0018acf44207e2e80236130b246c56"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "226c460fb7475d6894ef9ac692ea8b86"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "35e2826b5ee99e6b249779443ef9e15a"
  },
  {
    "url": "c/program/index.html",
    "revision": "39cf83dc8b8c7b1eccc9a1cf4b7199fb"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "eebf2741b29dfe6f038d6c18fed12917"
  },
  {
    "url": "categories/index.html",
    "revision": "18f01c93a4be763bdfe8b9adabf5f33b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b2778d510ca5f52c70d435b34c0f7391"
  },
  {
    "url": "figma/index.html",
    "revision": "2e593755fdc80c945c803b4a5a0d0662"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "fde59b93a80015710c464f322617f6bf"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "e91e4e19817dabc512fd1dbb3d47d7f3"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "503e07a84084ad437a09724a0d92ebf6"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "cdee28376f737583ae664cd8e066a558"
  },
  {
    "url": "flutter/index.html",
    "revision": "841f2f23c2f7d3e687f4cd70bbf44d51"
  },
  {
    "url": "flutter/point.html",
    "revision": "392d00304dd5fa79aab65c7bce6c8199"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "519e4a2ec85561d99382c474a082b274"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "19a71f95280e4a0b1cda51ed6963f826"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "716d59adb1e97812c5f46b5c55409c52"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "141d1dbf0b6c3ec5a58698ae116e4804"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7c9a8a9f62383719599c58579b0b1891"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "feb02c522aea0154e512572b388a332f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1bbb4dd6034f9ec1d90071cbe3685b9b"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d5e8a1113f849df4d82d86e14072be2c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "03feb34b25552e549e2edee79b58df1c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "90eb1a14965b49655e8001f0bff2e6c0"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "68b01052142557a610a1f4213f8ac888"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6392ee8ff5e42a49e2e1594aecdcce89"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "5eba5c1fffa9fdb9f679ff2f86c5f20d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "081b2955ee0f0c880f7fc4492315f0ca"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "5efee86ce21042dbd831524affd77e26"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7d600c8dea548f60e9a0e7d11018f443"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "228a5c278613ca75aadfb2b4ab57922e"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "a965c72fbdca2a900bb9c30c09b8187b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "7b52b3e0ea36b832b9a5cd9338d56a15"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "84181a10f63ecf251f3242edba50ee52"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "79466dc60acab0fe53faa48c760cc932"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3dac72e8419eaaafaa7a0a7ccf1fbcd9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "9af3e800535c941af8ac4e8e3cbbfe2b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "0a3f1a6018206036d39ef50e4682cf05"
  },
  {
    "url": "haskell/index.html",
    "revision": "1d8a825704bf9a7d41dd565839d99541"
  },
  {
    "url": "index.html",
    "revision": "8b8e974c25d568145a1a9f8e1b09e562"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d03dfae57a9afbc272b6b347f544d8b3"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9713a925c1411c44ea3ed8ce73a8fa0e"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b738fca65065ddf10d51cf73aae33462"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "37b68769f9519e3008e18b0385fe40a9"
  },
  {
    "url": "python/index.html",
    "revision": "e9b54f9a0b7b2edb0618dd147b93a6f5"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "039b049f3337acd1737c4961bb8d2f5d"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "373939c3c6b48467a8f7091527b24a9c"
  },
  {
    "url": "python/python-file.html",
    "revision": "2f7f5b65a0db084a954e0e00413e61bf"
  },
  {
    "url": "python/python-function.html",
    "revision": "8da082cc63c08fa234c2a471ed11fdf5"
  },
  {
    "url": "python/python-generator.html",
    "revision": "320f2b358b08b11d8ae4dc275a130e56"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "ff97bc91c33fd04d7d970e6431712234"
  },
  {
    "url": "python/python-module.html",
    "revision": "a776caf2570dfd7211b69aa5ed04fd08"
  },
  {
    "url": "python/python-string.html",
    "revision": "cb4869bf245c1c507bd746346ed5b473"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "936dfe972c590216461ffbb9919effc8"
  },
  {
    "url": "read/index.html",
    "revision": "d5d58fc47ab4056eefb9fde1324f3079"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "91894c80919f12f68e8c731f5030eaae"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3a15218809332a4aff2140087878996b"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "358fa11ae3749c7f6803427315128563"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "81f48ec78d9cd5fbca5e71bff4eb0d5d"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "bb1de764554c168016daf4dbe50d72a6"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c5a3b8c45ef1f7bc063cefaebe5ffdbc"
  },
  {
    "url": "swift/better/index.html",
    "revision": "b39cf39f7e2212affd42659ab46fe140"
  },
  {
    "url": "swift/better/last.html",
    "revision": "064d93decb1d0dd53296334257a0ff86"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "489391f99eb46951676d64636142314f"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "81f38190d969af012bd70ebf6fce4376"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "fa097adb222362ae2156dd639b902f00"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "7204449c1f7c0658a354d04f8c8f9fdc"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "eef266db517018306aa77804a98d10bf"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7649e22e09738b11e381e2755f7e4260"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "f1fba3de184e129682a4d19ad2c1a80b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "1aa93b963ebeba2738149b2fbf9fe94c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "fac8f8b52ee6276734697a1d7a195ab7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6df497db318e311810d3f15111033785"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "2335dd0c79dce61432efc7e4ee7e7c0b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a999f12e056208e08dc59f7acd583946"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "427d2b8cadb9a0da9724d5fda9e522c7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "6881af14b9015b9f5be681e982b3671d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "5b4ead8d7eca71aa58e434cc1d070807"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "59e854803a1c950ee43eadefcd0f95f0"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "036559b9d08b2b1960f345c4800b6d76"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "80ad8e73b887acbdfcaac49db4a4e7b8"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "285d8cbf5ada978c2659f0b25527ac15"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "3a2704704f464a3807be11c1ede9f1b7"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "1910cf1b37457a923b8965cede6653e8"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "446ea35e770b422ee24dfcb8ea16e74e"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "16760e66158dd09c4ab6277938c9d6c4"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "18e7596e6e9a6f21ba3afa31884b1d1a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "e5820424478115055f4bf5c1d25b47b5"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "01f8035268c71253a9cb8e510ce5d061"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "dd484a68e7bb9be84cc6e38bf26f901b"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "c2582f94df1c8ecf096fe95b6cfa4e65"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "dba2730fbc0c017cc0d64f68f3a89b0d"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f142d74c5d6d218beff9d4e9433e5462"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "0bccc7d3ff61932f01e7c277a0d5793c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "216181024112596d58365c88fe7ce4d1"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "448f1ab8bb3fb4f893c5dd4632e76a94"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f06c1619f0a4b58b425ff3a816b75745"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "bcd0d004526da658d281de4208bf0e33"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "81f88ac2bbb340365a4458e14ceaaf4d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "82e9edb0d0c54eb0c175794064afae2a"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "895e0db8b7b69d399843a540fd253a74"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2be06b00b59f0e792182c67f950844bb"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "2e21b6af184265cf6fdbf19c90221344"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "cba79048bd7ac1e2be29a2b00fdbf382"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "3e706e6f2b2256baf5a05cc6e028886a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "900d88c7293d76b7c3f30d2e9fa9248d"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "fad027d280cf04aebe9a0074bcb7a714"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ed2c8c5b3609efbad8ff46f94a004363"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "3c51372da8d12b05f5aabf7d478db188"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e61502d0f5709ccff42b3b93666c71d7"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "5e619905aba375970054f53bd95a327f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "37c3ba617a3c08c512e83ed12dfab326"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6e1274d80fafd5dbb8d261da051bacd1"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "08b8b1e4ba8f7e9c7b4ceec63bd49faf"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "442632e301ca895ef5c50911b860dfea"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "77f7bfbd33d8ccac0bb84aff9583fc79"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "c5efd5c5311ffdabb9da212f9f5583a1"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "7594b2c6d44e0896be599c91d0f4ceca"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "fac6f30be8bc23507b062e294b85bd7c"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "93c14623c9b7a93774a766285661fe09"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "03ef6432d09aadaaa0d43f02fdc0da4b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "0df8bafd7bbcfa0ae54cd439d5d32c14"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "3da5c8eb670f2ce2c23fa1a499dbd932"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "3f5e517eb8ac8c3c44e6bd6acf3a5433"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "e808622affea66da9f183714e6c44d70"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "89edc4e364eb56bae548f83a332406a5"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "a2489c9195be9e14029dd88106935d2c"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4dc8eacef43c50dd995288d2167a1135"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "d23a7c2590e9fa3127155f6e965778c6"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "9b43f3b32a243433e75f9cb2d39c68e2"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "f6c2b91e91ccbb7d31c6d359dacfe1be"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "4356a94867ebd2be3b53e15c1407ee4e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "73c46e15f7d3151080f92256d9cee1e5"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "3f8b796f65ff6058778c8c500ccbdd23"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9b093cb62fb77414b31e12a1036176dd"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "d5e64f7adfffd657822413999cc6724d"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "18ba13aa8bbf45c8251a49048503f1a9"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "bd11c0dd7f3da1363c1e00b38cd77fc4"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "3cc18b9840ec3f15ee5b1710128cd60d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d71430ef6985bb990432c3940d5ac7be"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5a732e701963244ed2446dd7d883e382"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a1c0e18ab48b3d20d975f12a32cf65e5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "36d2222213c15f0de4e9cd7c6978fc9a"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "742f99620fbe533cab23a657b68895bd"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "4c5dd87257a962ec089d3224b8f1571d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "7d1818737029a7c1f0aa016e60e755ea"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "5f778b84bc86a7768797a46c138cc902"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "846c983309f3fb658314dd03fd7e07c0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "a09130ab4e6a0c553da379dc553fbe6b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "0b68b6e9a552cd5c0c4f067aefad2f44"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "0a238ceebb682b0a032b970306b9a8a5"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "09f2aa7a52a07cd075abb20176251b3a"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "de4b40f6533ced6f29a328e8fc013288"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "1231ed5606411d32cc294f22b728428f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "57e1bda042fc3c8505dc0801f9bc31ec"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "0ac05f9e2232a24f47a10e25ff39cedf"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "a2e1b83982b2c0611d624dbc5c5e1a17"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "3edc017e8ea14fca71f184a2e05ad12c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "a10de36d0318d80b397fbc9b607d8c3d"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "f675a54d3c725c986f1357008931fe38"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "d042b80125dd69737a5f3ffd03ffa9df"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "70ceb306b3671340a540412de3b03fc6"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "e0797eb49c83598c55caf60d881537cb"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "45cf560b5ba89a2d56718b94d0bbb253"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c3ed438486ec532b74fa291d5fe2a29c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "294c0df38c364d752af4c0b01176f377"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "dc39964abf3a044d4c64a5b325220057"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a22ca15a5f7c9926cf12a1155a4b688c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6763755b41d473b29bdd224aa4f08adb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "92826f3e21aa405b52a3715157c257d5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "31b93f23ed18a4c162b3d92bf974a45a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "66fc801795184c27a57553c3973b9413"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "abea71b453ad1762e227ded1495adc70"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fc1960cbcb8ad1c6b8c44e6e0818cd64"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5d5206e1eebafb4172d62bcb1438995d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "1e4b274993182a34ecad38c8e93002b9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9acbe3f8c813f6de4153544375f83721"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "01bd960097033a4ed935fc84ed204c02"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "0d9ae072cc852c95072069dc2a170871"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "068fa275d803bce12264cf98b520b1c8"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7abb50522d0f4227b9bc20503e2dfe96"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a240cac3f74c81c95664f4b9c995d4f9"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "befd42c597ae1388e5d8d9db31755037"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "99f3c01da61ea075bffe4e8b4470edb7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "db87ccc23f807424833b14f10888ca08"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c393f6e149414bf823448225009e0968"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "6a2e0fb4bfb7c2e99ab4eb80420656cf"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "3e5f8bc03238d2084a445ef5444ade9c"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "1f80a5f3e1f177712d2ea34d48ed00a0"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "7f5c17a568c55f9a27906211e2fdef4b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "279e206121b8a5100108d3f224459770"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ad3ed8bcf56bef309b67436be3254ca1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e838b13547b93514b954c6b287b30f81"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0f1009574a17d0f0787924f62f234fca"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7298c406d23e213ff544930e5ccf7680"
  },
  {
    "url": "tag/html/index.html",
    "revision": "64a250782aedf5b9f08212227962c125"
  },
  {
    "url": "tag/index.html",
    "revision": "ae137dec76ae638839b9845445189ec8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "1cfec2b17c0f50c6c3ee084b8f746325"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "56ff4e4f05c228f00bdcabe44471e6c8"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f8f23eb29ca37fcf081f0d2f41e29cdd"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1e8a651dbc3a9ce5eac648ec81a92979"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "24b5ca6bbb5b147b4497307687f28ea2"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "c90059e69e776374f13cb4ba40c23f99"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "21595093e426ba61b3ee57b9f29e3df5"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "84b0347c71f4d77bf0c5614feff34066"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "c784ec3acb831cc76787f32b00f635a1"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e4fcbfb17249c54642f3ae74add3588c"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "12afb0cd00a1f7e3560f46e3eca42783"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "cd22a4cc562005391adcd4ef52b79fe7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "58a7f31110bbc0d5515475ed63ea111e"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "027561c6dd0975e8d53ecf692efdaa59"
  },
  {
    "url": "tag/read/index.html",
    "revision": "5d7677d411e48c750f5fb3cfa8565f9a"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "df2c94ab18b000240f46384cfc00dd98"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b5774ae74c200f19ea2d345c56080086"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "6f4c496c5be0cfed43930019b8ba2d61"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "727737af9f3087fd9e8d0dc773b4e0c8"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ad668b588e82e1e66faae4e66dd7aa4e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "5928ca1e63be8daffb3f0fe4eae7505b"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "e012fe7340d697f15d8f4878c0b5fc5a"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "6d25941024f820c0f85854b3e127aaa0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fb7af90bea5fd0a9a308343746d93473"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8fd9e4cb5a39b2639f92efaf25b2601f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "7decee35e1092995ea25eee4e5756ff9"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "055c2f495c10b1ac3abb70a5473937c5"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "19bd82b1eb0f26abf829202613692770"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0e5599b5e9ac3502d686d42c544d8582"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "7ca101ae58c4cc320a8410a08038e9a2"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "a0d554ea59034be69ce18938d7b1f3fc"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "db6b2f6d35134bee534cf1bf2a2e77e2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "ec7a3dd1b9ebf7756d19d0d5e538a3c9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cf54a478096370343c0c07f55a64c81e"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0b769bae6100737a706845030ce50de5"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "2f36b6c90700fd993c5941e89de717e4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f6bd234d445a0d4143b616e077399401"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "741892a3c6f8b199da981e4da19cbe55"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "cabc3a703eaa4bddbb2e1363d963069e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "bc495648309ba8beb47d0c7347d771ab"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "fe7202f3191b2da8940d04cd9ab92f3d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d97c93288c403fe6f2579faa35f2df43"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "b7918e303fcd5bd6dc159100c8f08f69"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "982f99a855b338e509e162cd08082607"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "2ad088bf23eeaf5e9dc31fb98ea6c31d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "0a44ea782fcf4c8e3c4001f1bd7f8172"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d1659d03d3d3c325a8f8132a5511bada"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "394f09b983b8997e43ba685790ded8be"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "67edc92c023695c2dace397870af952f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "79c071f8acad99d3d5b9426537eb5011"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1a17dba270da80eed2d75058f3175d35"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "814ef02f03bf769dc4ccaeddbfcd5b59"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "06b11f21723ae7a41f2716acadf67c6f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "67cb4650922982cfa36f781f84aa90ba"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "dadb7659611fe136419f9fe61ff6a908"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8930d658c96489e37d325604698b0279"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "b540d7521c237b74026d89d6eb4ba08a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "553011ffb4112873c14f269d1fc82733"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e8034747e5d10e049476569c943842f5"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "7d76b9eb110883da615a5ea3520af2f1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2f63220cd54f08e12fce1b9ef81dd13d"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "31067ccf4bd28eef43d5056d6cb9a673"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a8a30b7622475493dd7ac1ccc9761e40"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "ee217d767bac7f6ea78aec49861b1460"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c567169979430680bc443e7cffd708bb"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb6276c48a4434d00d1ccd73a3ae651c"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "fbd70ce9f936b094ce27296fbbaf1cfe"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "9b93216e20cc69817b818b2e3daeed62"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "bf65e7625ddcdfb898e7e89ccc841f59"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a18f90000c479d74b1710915ca3cd593"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ea68ffd53a9b302d79e9073e58fac056"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "5f4971682b5ca023bb62e20b0a3d15e5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "560b1b0bb79afac99b898f84f395a4a9"
  },
  {
    "url": "tools/note/index.html",
    "revision": "29e2aaf991a59bbb659f738d8b9a4226"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "f75893e43000c9e4f33486ac445ede13"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "decfef35250e6490366fbd19eefc0ccb"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c1da02c9eb681631c83bcfc29adb18f0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c032dc7c95284acf53b1cf6dc73218ec"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "7659b600cd6de951e0f6f8998a8ade34"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "db0774712430955a93a737f6b0ccb3b2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4f75352090cd4ceb65bbb56c26387465"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f158db6f56ba52d54f97df1cf22b35d4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "57ba4d50d0d68438c052f9bff4bfe5fb"
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
