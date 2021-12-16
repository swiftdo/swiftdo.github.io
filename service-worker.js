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
    "revision": "2c81717dca5a6d3ed70930a6d4c132ec"
  },
  {
    "url": "about/app/index.html",
    "revision": "05ca207d355c493057285974feaeadff"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "064cd0ed06ef804d2d07dce84cb139b3"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0686cdda8bcd844e051c7073fee6401d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7d8ad939c5f93f9fe20e0bbd97189eab"
  },
  {
    "url": "about/index/index.html",
    "revision": "e6fa1aad2e31cd8fbba20f5f29119bac"
  },
  {
    "url": "ai/index.html",
    "revision": "1958f2eb3dfdca11b5a86423b8418d94"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "652e0d5aa2b7682f15d9ac202f79a633"
  },
  {
    "url": "assets/css/0.styles.69e419d6.css",
    "revision": "84df19b9cf0610a91946ef13394769e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.16c5d5b7.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.bc471f7a.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.e25d0213.js",
    "revision": "835277c8075d2c06fb66fbc0c8ff29d7"
  },
  {
    "url": "assets/js/101.18f350f0.js",
    "revision": "e053cf7510690cd043d65609f7657191"
  },
  {
    "url": "assets/js/102.96f23469.js",
    "revision": "6a7b33ea9b4bdcc25c4b1e0e95acb86a"
  },
  {
    "url": "assets/js/103.ca5eea25.js",
    "revision": "e365e107a0d070db77f254eb530b6dcf"
  },
  {
    "url": "assets/js/104.f0cdf509.js",
    "revision": "442e0f0ca9ff93e6be0bac9c435d51d1"
  },
  {
    "url": "assets/js/105.4b7b6b22.js",
    "revision": "d451e3e8f37edc1fa2edd4aa7c62fbf3"
  },
  {
    "url": "assets/js/106.4187ed9a.js",
    "revision": "91734326927d868ef163bc7286af4a37"
  },
  {
    "url": "assets/js/107.3cbe4adf.js",
    "revision": "8543cbb0d33ef517fe7658277cba8fc4"
  },
  {
    "url": "assets/js/108.d17b4d92.js",
    "revision": "e111037599ae15245ccfcad9d7e9f7a4"
  },
  {
    "url": "assets/js/109.6a362bcc.js",
    "revision": "485f9abdad29fbefa2d3aee426a2fc94"
  },
  {
    "url": "assets/js/11.03204408.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.40ec3732.js",
    "revision": "3d9438a926a0a2a5671e3d78a977d9e0"
  },
  {
    "url": "assets/js/111.ebb0b900.js",
    "revision": "24d824e1d4e44d144febaa260b229965"
  },
  {
    "url": "assets/js/112.b95cd411.js",
    "revision": "071043d2611984ee8ecf1ff14d7f6b0e"
  },
  {
    "url": "assets/js/113.a3c60297.js",
    "revision": "625d9dde403d05cdddc164e5b9028c6c"
  },
  {
    "url": "assets/js/114.590edd46.js",
    "revision": "2719f9c328f8ee32f8bc93604bc5f67e"
  },
  {
    "url": "assets/js/115.ea4c782c.js",
    "revision": "1e8c66e6d683ca5922611212819b4832"
  },
  {
    "url": "assets/js/116.2c740fb4.js",
    "revision": "5846cd67fb7286583e84979c89254f5e"
  },
  {
    "url": "assets/js/117.7e3eab8d.js",
    "revision": "6db11d95d84c3dc59fafc64ebded7c84"
  },
  {
    "url": "assets/js/118.fe69acc3.js",
    "revision": "701ff65baa6048ef366b79ae461ce58b"
  },
  {
    "url": "assets/js/119.4f1b3299.js",
    "revision": "75a7b6266c6ddffeb0cdd031cf001ecd"
  },
  {
    "url": "assets/js/12.749f4d86.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.46c7e26c.js",
    "revision": "aac7216ac0b71a7077e4798b4cc05d48"
  },
  {
    "url": "assets/js/121.1aed9d4e.js",
    "revision": "e82a855db969379b5b613f8068c2de19"
  },
  {
    "url": "assets/js/122.7da81d39.js",
    "revision": "ccb651f87cd1fdf9160f600328c9da75"
  },
  {
    "url": "assets/js/123.44b64b4f.js",
    "revision": "886f5589c9fa9e98af101cade48da8ad"
  },
  {
    "url": "assets/js/124.cf14a377.js",
    "revision": "759fc896a63ce0a8c4b5322e081855b6"
  },
  {
    "url": "assets/js/125.a0e30f49.js",
    "revision": "5e03bb188f5cf73af7871966cdf7f032"
  },
  {
    "url": "assets/js/126.008662d1.js",
    "revision": "6eed66ebfa9c4708760dc8d12f578709"
  },
  {
    "url": "assets/js/127.25fc686d.js",
    "revision": "16fc41cba89003a106c7e9a2d467d4bc"
  },
  {
    "url": "assets/js/128.39b203ab.js",
    "revision": "ad3b0d28cf28b345a3fb1e64ff20f304"
  },
  {
    "url": "assets/js/129.3bb6c864.js",
    "revision": "3aa2760806e1cc81d29e41c78f4f4ee1"
  },
  {
    "url": "assets/js/13.d6981eb5.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.3cd95a59.js",
    "revision": "a70eaef328ac6d7965c574ab31f6320c"
  },
  {
    "url": "assets/js/131.7684c0cf.js",
    "revision": "664fca6388714e72d4a67a56e6a15b2d"
  },
  {
    "url": "assets/js/132.b7522f65.js",
    "revision": "f58db95afb201432e2edddab235ae858"
  },
  {
    "url": "assets/js/133.05cfb709.js",
    "revision": "3149c8d570c9600a1cea8a94804e1c39"
  },
  {
    "url": "assets/js/134.d38c0b29.js",
    "revision": "71c2ec65dbcc268237a01a0ced936dfc"
  },
  {
    "url": "assets/js/135.a8ac8d68.js",
    "revision": "cbabb1dcaefdbb71ad3dd91b191bbaa8"
  },
  {
    "url": "assets/js/136.6ff59ec8.js",
    "revision": "d491f2fae384f102ea3775854c7e0432"
  },
  {
    "url": "assets/js/137.36401bf9.js",
    "revision": "8755dc611f53fce1fea126e7243a8505"
  },
  {
    "url": "assets/js/138.4edf476c.js",
    "revision": "299c703f7afaf1dd1d0579937b043dfd"
  },
  {
    "url": "assets/js/139.89cd57f3.js",
    "revision": "89755d6f2e8a5589557e776b277a1ac2"
  },
  {
    "url": "assets/js/14.7a946a8c.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.83b449ab.js",
    "revision": "c3151fa025982eb1f1023fd18955b07c"
  },
  {
    "url": "assets/js/141.6fe21cc7.js",
    "revision": "5fe8b71c55c060eac1e6352db1440f38"
  },
  {
    "url": "assets/js/142.c88fed71.js",
    "revision": "c4e9e1fd6ab554b2d106359f13b8189f"
  },
  {
    "url": "assets/js/143.66f10a0d.js",
    "revision": "5fcaa6be9d92c569ce2115a80e983617"
  },
  {
    "url": "assets/js/144.d4b34c35.js",
    "revision": "df998ac35a100ebd0070e653133baf0f"
  },
  {
    "url": "assets/js/145.27b0a9a4.js",
    "revision": "e9c4c2e692d3d842be120d61540cc06d"
  },
  {
    "url": "assets/js/146.a758a067.js",
    "revision": "e250803ce611b44a458fc823d23b5c39"
  },
  {
    "url": "assets/js/147.b38e0fca.js",
    "revision": "73d507bb09d24adeb4b77191c7212236"
  },
  {
    "url": "assets/js/148.872e4fc2.js",
    "revision": "9368e9581478d09813badb3a1c5f1b39"
  },
  {
    "url": "assets/js/149.11f1b902.js",
    "revision": "2ea3d0eb953a1d6ceacba1b239ec7b60"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.d663afe0.js",
    "revision": "e39ac7e4009e501e701a115f339343a8"
  },
  {
    "url": "assets/js/151.b88b16e3.js",
    "revision": "40bcbafbf87e9ecd75a49c8cc11be7ef"
  },
  {
    "url": "assets/js/152.2aab058b.js",
    "revision": "fdc2675c92df92a28a7a1686d8607bd2"
  },
  {
    "url": "assets/js/153.112e4833.js",
    "revision": "ccc834d0a70b6a413609f22aeefdcf42"
  },
  {
    "url": "assets/js/154.40813408.js",
    "revision": "c485b2d768d69efecc294c6ca28d6d37"
  },
  {
    "url": "assets/js/155.26eed385.js",
    "revision": "884a2189ec7b529e2148d27b56e1da59"
  },
  {
    "url": "assets/js/156.0a8cc244.js",
    "revision": "0fb4a834659ae5b611f9dc3c86cb0a77"
  },
  {
    "url": "assets/js/157.420a746a.js",
    "revision": "f2444ff46ee2b22f1a41ee8d02cb02ce"
  },
  {
    "url": "assets/js/158.0e29f48b.js",
    "revision": "1c6c9b3864252c3ffe9a68707a28075e"
  },
  {
    "url": "assets/js/159.afce1a83.js",
    "revision": "6ed6a94360c7c0f0adeac0754ddfd981"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.f4118bdf.js",
    "revision": "121a77cc53407340b4c0254d428573ee"
  },
  {
    "url": "assets/js/161.1e3f73a0.js",
    "revision": "489a6201e94bc86bc0bcd14a227c729d"
  },
  {
    "url": "assets/js/162.d646beea.js",
    "revision": "8f6e530eccf8c1fad3ac15210e875957"
  },
  {
    "url": "assets/js/163.3aedac7c.js",
    "revision": "f3d9a42594f96efe7c35c81fe8a8b7cb"
  },
  {
    "url": "assets/js/164.8f60fcdd.js",
    "revision": "31ff55190f2088e1747104861515ba91"
  },
  {
    "url": "assets/js/165.d3811176.js",
    "revision": "97d5620c25105391af30ac7eb0ac4d97"
  },
  {
    "url": "assets/js/166.1fab981c.js",
    "revision": "c4697d93565e826bf82f65595ec4ee8b"
  },
  {
    "url": "assets/js/167.22c1f895.js",
    "revision": "06c16937540f7eb551161836eb4d0f28"
  },
  {
    "url": "assets/js/168.c0520297.js",
    "revision": "0d1ea34942b70a6da6821f5a10248c32"
  },
  {
    "url": "assets/js/169.57adba60.js",
    "revision": "0d69187ad4877653407922a5777f63d7"
  },
  {
    "url": "assets/js/17.7cc330cb.js",
    "revision": "a9feb5fb3a5ada4385bfbe840f8124ec"
  },
  {
    "url": "assets/js/170.3d3f4503.js",
    "revision": "5eff36f53edd6d02f1d872dceddb9318"
  },
  {
    "url": "assets/js/171.b110a287.js",
    "revision": "9ad157796bfde9f71238e6c06f4fa23a"
  },
  {
    "url": "assets/js/172.67268f95.js",
    "revision": "6a4aa4a3844739f9bd5ad37d5e916de4"
  },
  {
    "url": "assets/js/173.70c31147.js",
    "revision": "49969b02dd547fc5775d44cadc4968cf"
  },
  {
    "url": "assets/js/174.1d88711f.js",
    "revision": "3363b40723f69a42e94678d12a9efcd6"
  },
  {
    "url": "assets/js/175.92eddc05.js",
    "revision": "f88995949f954013140b6c44e63c1f89"
  },
  {
    "url": "assets/js/176.f453d86d.js",
    "revision": "25760c3fbf4f87b2e4cda6f355425f33"
  },
  {
    "url": "assets/js/177.03e28c92.js",
    "revision": "e3ab4ea9fcb4878c3432af47b18585f5"
  },
  {
    "url": "assets/js/178.42dcc84f.js",
    "revision": "ac6b5a1398286aa84e65f4809931d6bd"
  },
  {
    "url": "assets/js/179.e0ee3637.js",
    "revision": "d982632a2a3cb2c5c28d6d6757e201d5"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.63f7159a.js",
    "revision": "6a296fba0dc4b5f10f9ada6d76a9ca5e"
  },
  {
    "url": "assets/js/181.76b49f7e.js",
    "revision": "e06937d2f87386613a6837bc83c4a195"
  },
  {
    "url": "assets/js/182.f5a20278.js",
    "revision": "438aab1bd369ad0623571762faeaee1b"
  },
  {
    "url": "assets/js/183.f01e619c.js",
    "revision": "fab7ff14744c875317b0ca07133d8327"
  },
  {
    "url": "assets/js/184.a62db66f.js",
    "revision": "3ca13574e5791a48385ebaef77be83a0"
  },
  {
    "url": "assets/js/185.d27d02e9.js",
    "revision": "d3d63b3cb962e16201b14f7c3e5398a8"
  },
  {
    "url": "assets/js/186.2d8397e2.js",
    "revision": "2d4ffb62d73276e338a027dc20d4839a"
  },
  {
    "url": "assets/js/187.094c33e4.js",
    "revision": "272b4f1d69d4e21fa40b34c8492eb4b2"
  },
  {
    "url": "assets/js/188.e4bf5fa7.js",
    "revision": "c85169700bf05f86fb97b793530de6a5"
  },
  {
    "url": "assets/js/189.cf35bbd3.js",
    "revision": "0b56e646c353f8e9e3be144665a54681"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.f5f66b82.js",
    "revision": "ec376f298909be44ae0f4eb02fa47cd6"
  },
  {
    "url": "assets/js/191.d12e9cb9.js",
    "revision": "e7d81a3a792ae649109f78cebfa51456"
  },
  {
    "url": "assets/js/192.e62d7040.js",
    "revision": "0e3457004444c6f3813a27e590b191d9"
  },
  {
    "url": "assets/js/193.0f414840.js",
    "revision": "5d5160dbfd179676e4e9e6451261eed3"
  },
  {
    "url": "assets/js/194.183d305f.js",
    "revision": "83362410312d2ed272567226e751e5ba"
  },
  {
    "url": "assets/js/195.842a6c0f.js",
    "revision": "23e92c00c06792833bb6f56abce046d6"
  },
  {
    "url": "assets/js/196.d6da4d86.js",
    "revision": "9f1b1d726dbf78703be217bb1a5bb3ed"
  },
  {
    "url": "assets/js/197.53f8b098.js",
    "revision": "4158f8934165dbd39d09be64c0259cc1"
  },
  {
    "url": "assets/js/198.7fff0426.js",
    "revision": "420389334c3f2d57afd2b3bab759e3bd"
  },
  {
    "url": "assets/js/199.9e3bd966.js",
    "revision": "f1b3556077886bfdea832e6c7b6cde65"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.21e98fb4.js",
    "revision": "88a133f05f74ab6d252e62865bb64c24"
  },
  {
    "url": "assets/js/201.aa957392.js",
    "revision": "c9c884691329664f1d14ea6da5782672"
  },
  {
    "url": "assets/js/202.658fa87a.js",
    "revision": "04d596e83a2f4ea87315bf789eecd8ac"
  },
  {
    "url": "assets/js/203.64c0624f.js",
    "revision": "8c3d70ecd191633948a3993df03497ae"
  },
  {
    "url": "assets/js/204.a6aa244c.js",
    "revision": "7b9bcabeedee31bfd7fd13369d7a7b38"
  },
  {
    "url": "assets/js/205.10cce199.js",
    "revision": "4262671b16ff3c1da60553527ab1175c"
  },
  {
    "url": "assets/js/206.ce2c2991.js",
    "revision": "0e7d2c7b580dd9100a83107f5c7e7cbb"
  },
  {
    "url": "assets/js/207.a35efacc.js",
    "revision": "3551925507c1e2ab45020ccb3778c8a5"
  },
  {
    "url": "assets/js/208.f8649742.js",
    "revision": "eaa5f070da8031f8639a59357a5a42b5"
  },
  {
    "url": "assets/js/209.1a9924fe.js",
    "revision": "36128795de044ce480f9d906eabd3283"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.e2ed39e3.js",
    "revision": "bdeeebe667d92f46c9d104257a62f409"
  },
  {
    "url": "assets/js/211.e4f401ff.js",
    "revision": "7de51e6bded07f882f71d5da45effd6c"
  },
  {
    "url": "assets/js/212.8906ac2b.js",
    "revision": "68af092c63e4e2853bdc8a2da683ef50"
  },
  {
    "url": "assets/js/213.96953531.js",
    "revision": "e6e43f2e5ade80e510a17cb67c606cf3"
  },
  {
    "url": "assets/js/214.e2af5d64.js",
    "revision": "a79e739c0edc1cc2da43d629d1a0dccb"
  },
  {
    "url": "assets/js/215.a54b1878.js",
    "revision": "c047755ec0cf5b28f59149456709644c"
  },
  {
    "url": "assets/js/216.6f857621.js",
    "revision": "f8f0990d70a3bd38235ad24b684ae6f2"
  },
  {
    "url": "assets/js/217.22b02dba.js",
    "revision": "9a571fca3340a16901026f173b35564b"
  },
  {
    "url": "assets/js/218.4c579758.js",
    "revision": "5fdecf450d082df80c6721d571961c72"
  },
  {
    "url": "assets/js/219.3e069fa2.js",
    "revision": "fb9be1b9c4148c6aefb99c009f4cb80d"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.fc8f8a56.js",
    "revision": "f7ab115dcb6ae4d615ea7f84d793447f"
  },
  {
    "url": "assets/js/221.40558210.js",
    "revision": "51e86cb8a5256f5bf85923bb8aeab661"
  },
  {
    "url": "assets/js/222.76d8978f.js",
    "revision": "db9c50ae73a88a721d0ddc89d68e7297"
  },
  {
    "url": "assets/js/223.980a60af.js",
    "revision": "a597fd430f9b1b4b5d4cd6435d97375e"
  },
  {
    "url": "assets/js/224.ecb5bf98.js",
    "revision": "900b178b9e5bb04818e80c0d6c421142"
  },
  {
    "url": "assets/js/225.cf4c0190.js",
    "revision": "63f65917e0b8a00cf507e6354c0390b7"
  },
  {
    "url": "assets/js/226.d798d763.js",
    "revision": "20d57beca50304341c6fef511eaacd38"
  },
  {
    "url": "assets/js/227.0ef3b862.js",
    "revision": "b868fc43fff89d53cb4fffd224c3c538"
  },
  {
    "url": "assets/js/228.762fcc56.js",
    "revision": "abef1dfb3575fc3111a05b0da5e8a0fc"
  },
  {
    "url": "assets/js/229.b660c990.js",
    "revision": "0984385593a55937417a489049c44450"
  },
  {
    "url": "assets/js/23.a2e14971.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/230.1fc6d677.js",
    "revision": "46440c97d1feeae6c1bef491b494482a"
  },
  {
    "url": "assets/js/231.422f7704.js",
    "revision": "42af16eef3909294df2f580e1b9a33ff"
  },
  {
    "url": "assets/js/232.1a553839.js",
    "revision": "15a511ecba7f50b2fe4366f49dd98ae1"
  },
  {
    "url": "assets/js/233.96c21a20.js",
    "revision": "cc48b1eb8b5bc149be98f3ce52de6aca"
  },
  {
    "url": "assets/js/24.700d0f24.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.ef9e6863.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.4129a7fc.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.11ae4590.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.9f159f91.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.4f8fc819.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.b4d5b2d1.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.1f92262d.js",
    "revision": "8f8712cdaa426b3faaba1bef372f8bca"
  },
  {
    "url": "assets/js/31.c0a0b65c.js",
    "revision": "7dc97de67f37ad4a0f3377fb570605aa"
  },
  {
    "url": "assets/js/32.93ee1ef9.js",
    "revision": "48ff28716693e4d3e7d888b608fe1a49"
  },
  {
    "url": "assets/js/33.8344f41d.js",
    "revision": "43857ffce3bfc0f96e6ff2e853f0243c"
  },
  {
    "url": "assets/js/34.16e39487.js",
    "revision": "3185fec87dd2dd1b8781042775b96a95"
  },
  {
    "url": "assets/js/35.8bce70fb.js",
    "revision": "e8069bd6ef0f56cb5f3d16d3412b9b8d"
  },
  {
    "url": "assets/js/36.62a52656.js",
    "revision": "59217c43fed980796f778c0c3c76d6c3"
  },
  {
    "url": "assets/js/37.d67c5699.js",
    "revision": "f08bb8fba729fb60d361c2a81f1f33b8"
  },
  {
    "url": "assets/js/38.3049ddf9.js",
    "revision": "fcab6a68555801c730fc8c68b42e2515"
  },
  {
    "url": "assets/js/39.a03f9949.js",
    "revision": "b6543217c05898907e969cf7baca8095"
  },
  {
    "url": "assets/js/4.e6ba93f9.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.6026ae61.js",
    "revision": "7b8ab3f8f4a2d2af74584b566a999ef4"
  },
  {
    "url": "assets/js/41.dd29c01a.js",
    "revision": "2ae33420a0eb549331be3add1a4c8693"
  },
  {
    "url": "assets/js/42.b9e774da.js",
    "revision": "584e3838ac45c817842d4a706e5507b9"
  },
  {
    "url": "assets/js/43.dd0e440a.js",
    "revision": "29120603093903e786afa7959f5379cc"
  },
  {
    "url": "assets/js/44.89fde36b.js",
    "revision": "f66d6ad6bce7e682b642d230e97d725a"
  },
  {
    "url": "assets/js/45.b1c951d8.js",
    "revision": "d86cbb72249092751c5c5cb36fb20a4b"
  },
  {
    "url": "assets/js/46.8d0c048a.js",
    "revision": "130ea456180791cd853eefef9d5e0065"
  },
  {
    "url": "assets/js/47.c74bf5f0.js",
    "revision": "8239d15c875db888375a9f85413187e2"
  },
  {
    "url": "assets/js/48.a500fb2b.js",
    "revision": "87833b209b2d943788300fd2ee2211af"
  },
  {
    "url": "assets/js/49.a4864bad.js",
    "revision": "3a776b42017ae88aa48b2a4928f54b28"
  },
  {
    "url": "assets/js/5.2679ebfe.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.74c95467.js",
    "revision": "b63b269430ee6b9be0cfc421befb236f"
  },
  {
    "url": "assets/js/51.8697f1b1.js",
    "revision": "cf7f90268dfdac964b1bc22297ccec10"
  },
  {
    "url": "assets/js/52.03aad984.js",
    "revision": "e7778cf05fdb1b7b2e48665b6c46fbc9"
  },
  {
    "url": "assets/js/53.0613278c.js",
    "revision": "d41ca25dbb6f4b80b029b2ffa302c6a0"
  },
  {
    "url": "assets/js/54.151e4535.js",
    "revision": "f8b983fc888b0d6c4ac94f4eb97d92a7"
  },
  {
    "url": "assets/js/55.f64a0f61.js",
    "revision": "c6539461d4a1c0c54da8c8449f206b17"
  },
  {
    "url": "assets/js/56.9d0145b1.js",
    "revision": "9629eb4edc4b85906e2a54cf08029a25"
  },
  {
    "url": "assets/js/57.90cf8838.js",
    "revision": "78537b633820f0e93348608870866423"
  },
  {
    "url": "assets/js/58.37ef0841.js",
    "revision": "0498c2e0b6df86d6b7bac8c2b175885e"
  },
  {
    "url": "assets/js/59.db4774c9.js",
    "revision": "cac6d5a0e21623c817ec0975c38af5c3"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.3f21c124.js",
    "revision": "e70ac1da6c7ead6ad343ff3eda95e978"
  },
  {
    "url": "assets/js/61.c5f9e5bb.js",
    "revision": "929d5bccee5c29cc2593ee4da4fc6443"
  },
  {
    "url": "assets/js/62.e3c606e0.js",
    "revision": "a4d007b950f2f5d756064bd650ddb9db"
  },
  {
    "url": "assets/js/63.5533fa5f.js",
    "revision": "5c241ccf4e9b9b91aa5fd2f023d29910"
  },
  {
    "url": "assets/js/64.3ddb1082.js",
    "revision": "afcf511a8db0c45955cfea5690dea98a"
  },
  {
    "url": "assets/js/65.eef1ed93.js",
    "revision": "443ea2889b5a29ead3c93b9618c87072"
  },
  {
    "url": "assets/js/66.da83f998.js",
    "revision": "283385624d86ecb92d17f613900461c4"
  },
  {
    "url": "assets/js/67.fb1ce87b.js",
    "revision": "a6f976a36f181095054d300a1e965063"
  },
  {
    "url": "assets/js/68.36a855b9.js",
    "revision": "206ad708defd774b8f35c5a32773fd67"
  },
  {
    "url": "assets/js/69.9f3e0747.js",
    "revision": "b748e817729a435846a8a76d93a0d3fd"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.f49dea5c.js",
    "revision": "6be44178b3a6f5643018d8aba6e1f8af"
  },
  {
    "url": "assets/js/71.356f7d88.js",
    "revision": "8d5e4748a23a97754061159801325ec5"
  },
  {
    "url": "assets/js/72.de3a044f.js",
    "revision": "ad904b89f69bdd9fd56e359e84552c3b"
  },
  {
    "url": "assets/js/73.5a8f04fa.js",
    "revision": "080358ba9dd82b4c4ab5b355eefec65c"
  },
  {
    "url": "assets/js/74.8ea82ff7.js",
    "revision": "05641ab151d1fd53af133fdb3b6233ca"
  },
  {
    "url": "assets/js/75.f7efb4cd.js",
    "revision": "1594ccd0913e22809eebe93c657280fe"
  },
  {
    "url": "assets/js/76.14cddb32.js",
    "revision": "2ff9c7f1cb0c15f5f46caa97ac4b77f3"
  },
  {
    "url": "assets/js/77.09177b83.js",
    "revision": "7460380c85f0b422a9476b5df5905132"
  },
  {
    "url": "assets/js/78.0167b526.js",
    "revision": "d7628d67ee8b096c14efda136fd41dd0"
  },
  {
    "url": "assets/js/79.31963b6b.js",
    "revision": "66a8c4937942744a4991d5efb61de4d9"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.5ce42c1b.js",
    "revision": "d32d5adaf6b5cf23745464349c00208a"
  },
  {
    "url": "assets/js/81.27195c78.js",
    "revision": "a01a04a77bdc1be9bf08e5bf0aade680"
  },
  {
    "url": "assets/js/82.1075006f.js",
    "revision": "4e203154bea48b8ff336b2fd352d009f"
  },
  {
    "url": "assets/js/83.c0ddc56a.js",
    "revision": "b7c6f9cc743aad18fd061d52e4e5fee0"
  },
  {
    "url": "assets/js/84.6b826eae.js",
    "revision": "b457c788b3d820c04ce61667e5294c85"
  },
  {
    "url": "assets/js/85.0d43d51c.js",
    "revision": "7ff3aecfafe01d5fd21c7976d9a3edb9"
  },
  {
    "url": "assets/js/86.aa7239ab.js",
    "revision": "188365606146f39814b2754323d89507"
  },
  {
    "url": "assets/js/87.4f7c160e.js",
    "revision": "8f1369e55e39a4f7101d4b132c62d54b"
  },
  {
    "url": "assets/js/88.510463e9.js",
    "revision": "4dc62aa47f1f6217163c6829f5aba153"
  },
  {
    "url": "assets/js/89.c9eb163c.js",
    "revision": "d1c57337a75f1239a6b7ebb8f2629532"
  },
  {
    "url": "assets/js/9.a3f4bead.js",
    "revision": "f7b1659de903f097292b67ca841057e8"
  },
  {
    "url": "assets/js/90.b9e6e238.js",
    "revision": "e5c294b14f5b5100977d3517a42276ec"
  },
  {
    "url": "assets/js/91.4120393b.js",
    "revision": "b4a906217d5231ff1bc36a67c24ef672"
  },
  {
    "url": "assets/js/92.20a21e2f.js",
    "revision": "6da8d829da39cf7028267479cf696ba2"
  },
  {
    "url": "assets/js/93.7dc17cd6.js",
    "revision": "0783d2f5967e3222ee26c5e90e3a51a0"
  },
  {
    "url": "assets/js/94.a58c75f1.js",
    "revision": "7c523f110ee305bef40995ff895db03e"
  },
  {
    "url": "assets/js/95.8498f12e.js",
    "revision": "0208d4475c02c139a4375917fc4ce397"
  },
  {
    "url": "assets/js/96.a3afb961.js",
    "revision": "169ee04d2ed0b656dcd8df67bdc3ecb7"
  },
  {
    "url": "assets/js/97.32b4f2dd.js",
    "revision": "4065c38600ef194d9348557ba5c18bca"
  },
  {
    "url": "assets/js/98.f2a5b5bd.js",
    "revision": "3986ba1838d3768492ff6acae86c75f8"
  },
  {
    "url": "assets/js/99.02451fd6.js",
    "revision": "aeb29222f5d2fdc1504a2caab3418215"
  },
  {
    "url": "assets/js/app.e08ee50c.js",
    "revision": "5d67c37c871a37e98d2bdb0fa8e77818"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "e907780a7cd1af31936646b37b476f40"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "361bc9956e0fc85c97955d11dcb4bcc0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "552a092d4e92ea7dd5689c3ae6df2d26"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "33885257af4aaaf09e903383aaa10475"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "fe1e3a27ea68a90e63f36488496b8d64"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0fff88d0f1aa395765eb6072f46232e8"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9fa37f4e88d62fad8d741037da1b5544"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "eab8d0193c8426b4cd9ebb1a6f8192fb"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "2cd6cbe0cb42da76a264c9728f1530f8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "603f86093b804e11fb64659db0263a69"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "646c3d55fa1660bcd37f5f716ebdbf57"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "f96c48cac4538f3ce96674ccdeb4bf93"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "f23fe3fc81e4507971567e16d53e644d"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "6d65ff90994a43182104eab064dd53e9"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "7c7e2abc6760ba1ca1489bf94698bad3"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "9501e772608a44082eab4dcc34e00eea"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "21c6b0fb1e0d5517865ec6fdef7d6ebf"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "cf0935fe2fef9cf036baa118dc0c3d07"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "713c7e3720804084967522bab06b5335"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "009dce960e1c36a06fdad4597193da5e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "2f03ca339eb68d32bcf41025e2758a50"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "cb9880ef681b3a7a6bf0213d49ed04b0"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "01b05346eb263e516ce71dc1cf895c05"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c7fe69b143ffaa39be5ab62f8d94c129"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "5fdd9b6433208017774b3a00c0f6da2a"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "933786843f0019b7ab65a738fa66bca6"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "967bc5462f1c4e3cffc3bdcd0c165d8a"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "3728ba0dad3981552fc5dcab3afb5fcc"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "bdb3ee3f9e36862aa615551281caf062"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e6358ea9aca7c7e7d3c7a3e70b9a7269"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "b2385a39a1f58ddbad39e396aefb65dd"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "51da9a9af8a7de1ec98d6d6fd4c0be0c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "9e9c16cc61025914072ae8ba791a5a82"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "16f4f426955a253334d5975226b25a3c"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a848fc666f6a95d7a99bf60e900f7c85"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "445d4d6faa4196560dd84b06e83a35d6"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "fceeace22cec16317fa45d97a22a514d"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e208c33c59b25aa554f89b840e55d3a6"
  },
  {
    "url": "basis/index/index.html",
    "revision": "133b1ce847cc35c926d2c0d05663d06d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "62c3c0c98e71bbb5398b0ae51c21663d"
  },
  {
    "url": "book/index.html",
    "revision": "21b074b7f68365b3788041e5d1946d9a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "828eed84f315f0416f9b8968d46efc87"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "675bf9d4953f58e62f3df849e4b37311"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "59f0e4cb96ad9394f0ac097326e95f4d"
  },
  {
    "url": "c/audio/index.html",
    "revision": "35c683833200566ceddf703522611839"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "b56fdf8f703a75750c022b132dc09e57"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "e099f76e0516e2e107c208a658881f88"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "13b4ef8010bf9e0f672d17d29ec04e7f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "4da18d498aaead48c3454672baf3a2cb"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ed870aea4312af259eb0bdcb3ff0854e"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "b9daa8105cb233af51f785e9673fd7db"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "a92601a917a14f06c48e2b131b4a86e8"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "95707a76446b8be20a8f8cb33a57347b"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "4870262ea008f04c9d5aae9e9fa8a783"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "4b98f28cd74bf7806ae85892e74e060f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "909554652d19a3b5e3aa38a9b56e4723"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "100cfdebb3b003276307cc1d4d20c737"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "f91b6837ae7c637800ccb2371481ca90"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "649e5c2e07bce3222436fa207f522b2a"
  },
  {
    "url": "c/program/index.html",
    "revision": "f50203c47bc278343d65692e1d15bf16"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "33d681f3a0a20825bc68c9a2beed2b03"
  },
  {
    "url": "categories/index.html",
    "revision": "392b6387985fbed5b6f63147a5b5d7f0"
  },
  {
    "url": "figma/index.html",
    "revision": "98a6c4855b80169b1c1cdcbcb1769f6a"
  },
  {
    "url": "flutter/index.html",
    "revision": "1924120f0aa106b861614e2872cb769a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0e60e17d6d0f53e9c2c58342df77c9d1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5ab9ee41f1a70bbebbfd3909f2b4f5c9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "23c20afde68710f7223cd040bf9111d3"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "db66914c47a82b66f3d5f7743d19f1b9"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "cdfbe5c407d4e429f474edffe46fff37"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "353dcf042c4259c7c39baf5b972b23e0"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "efd647c29b256b45b420bd0b34c697b4"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b531540a0ccadbe5c65b8afe95d26b8f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "1917a826f10753627fee710488cd9a01"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "4fc704782cda1fe1107f8db47e489a5c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "3254e898ff895873303428aac8d3252a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "7bddd023a43665a642a4ffcd418356ef"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "43fabe79bf128a4f86c727147702b671"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "de621f4785e00c1ba310840aa15d6aa4"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "811a8dbf45fe4af7d75cc5cc2a291cd1"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "50169846e73a17e2653d69029ab5e782"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "564ca36c8c9ee5e26ee01eba9c492424"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d898ca418fa3ffe18c6556fcc316aac6"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d2ac31998ef0152971eabdd77afde42e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "fd54067b8d0da8f9bbd11054a87c792d"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f9fb3e19171a0923ea0081b6c96304f1"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "bede8f1e4c3ab65572581718c32c2e96"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "7afcd9090ecf00634c717d9d132427af"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "fac803eddccfc7502a25132616afe3f1"
  },
  {
    "url": "haskell/index.html",
    "revision": "ef019520fa95802e804821202668f2af"
  },
  {
    "url": "index.html",
    "revision": "db9ae9e5c1f3c601207adab7a390683f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "cfabd374434179106cbce8fc8dbac25b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "0b46dab10af74c75875ff012cab3b244"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "201eb641bc70488d56908a341ee9bd1f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "2a1054da37f6b109c17a2c7b8629617f"
  },
  {
    "url": "python/index.html",
    "revision": "3ef95136397003e44ffea19236ff8068"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "d438b2539745ab43fd8ba36f22228fee"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4246a4498afd48640e27f838fe142876"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "5abd101c904d8f21f0ebc995bbe125cd"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b15816506f8d7eeb1bae102da513a0ed"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "255a600dcafe48c74214fdaf5bd0c9a7"
  },
  {
    "url": "swift/better/di.html",
    "revision": "91114cc9167aa622d331953358900b6a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "43cda1691282a4d7742e02046bc9fdc5"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9b9d925e3411cbb1cbe7b34e61d191db"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "499f5c9eaa316211ceeddf1bd4beb0ac"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "29b5c0698f0503c257b85ae203e574c5"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "79fa9145331d49d16237efa76211166c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "846895dbabbab7925049f6698f957ac2"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "910c9f55201121e86e5dc378ed887bbc"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "54330fcbd097498c4df1fab33c47f536"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b58a5153bb7f121fa273be5a1501ad25"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2302f090c1f210baa30ca6bf981f4abf"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9d725652b6fa34f46d0ad779ee516742"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d00d3dd9633c86dc6f5283868bf06dc9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "749c962f4957e7aec3ed9b960d299654"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "5e35995c4b8df0d2a2cde9a269b952bd"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "8e81b91744348f4d48fd34bfe5cd0bec"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "fb9760332dd49a714addc801a85925ce"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "871621a81165bd5a7dc391b8dd0ca0f9"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "9c2877d5aebd18ef358e50d2d029675f"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a60552034ffdb9707df353de27264e8a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "98125ff0c22c74ebe628a3856e8a545f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7fd29f582c523a8c5c988d6d4563b35f"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "811d0aff8821a076dd24bece210afe71"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "5c600ec8ce126f0eafead3f9679fe2c0"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "94ece076498b1a94f3770233f9153ec5"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "e577d16148254790fe4f0be8303b0bdb"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "7bdc8d073315ede3e9690b4163ccbf8b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "0f469d4e074d9ede551116c4f05d4c17"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "bf8a733e500b7f5a936fa160eda2c98f"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "32db4de06909c5b52592e655af6d8a55"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "c6a0f66954fcd3d2bcad543fc7c372c5"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "bef05e8c92832cd01c5978b09764d2ff"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "e5ecd2a7b7813ae6ca86ed0ad4fd3dc1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "45224a5dc9ce729ac4333685f0e6837a"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "9e316592c205e2ff9f91821fd283fbd9"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "9f1fffa029eb5d92ce97c8aad429117f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "e4405967bdd20e93dbd7574066056319"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "223f0b751c5667a2c9f1df63b3902a4f"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "61455fa5db9c21a1f1594c66b5237fa9"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "28a37da609960700d00ea0950eb5e495"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "deb47cdc0ea64b58fd2b80f849e291df"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "67dadde34b62d1fc6708d344280d0da3"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "6680d7602376086ad35cd5f955edc3a7"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6069ab94db047318f97773c6918d0e04"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "37b71b1c98afa42ee437285abe3230c6"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "71eb0861eb7aeb8881959e951185e480"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c31e7af40314fe26700ca9a0f3a73142"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "630f392bb46583be5113a2729d74f454"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "dafaa2a6775acd8299549b6231ff4237"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "93da929f1ad6585871943faf0d0a482e"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "794505598efcb60b86702da3433c5269"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "939ca92cba214c71f3dffe1d74a14ab2"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "84fe8317287dd333cf6b1a78722d15f8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4f00756cc87d1579567c5fc8875651d7"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7b859bc945883e8181472070de967609"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "99f726c7da05874769f89acbbe79fd04"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "57372051d332ab4b634189a06b3d093a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "54d3b3986935d43bf50e8bad49ff5d47"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "92f91177c20bff42948bf52fa6e6a3ca"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "195625ac3221467533d35ecc1a8113ec"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0ab02743afec8df18fdd8400db3081da"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "6e644f688c89d44484cca014357c423e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "9e8e501ca5d8c5b5e90c635d53fb7658"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "aa89988f9bb164c4d0e5ccd0ce774dba"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c5cb9a098cef37e253923e9d82b16c1a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ae9795bdbb6b99d7f176b30fc6334ce4"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "046260be91de3e0a0082404b77ee4773"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "91905649ff32ae8d20da2fb094517276"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "017e9115c9efaa59cef11c8174e2da7d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "13d4c17e7b262ad6443ede0fbd9ca0ee"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "497785906437fbb703a44c3911f3c5a7"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "8ac53d3d7c360e9d6181dbe3877ce15d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "88b8f57b458794905d7c7494a8a5419c"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a63ffb0c3ce06ffa2a3d4926373300ca"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "71ed471f1744ebec59cd185ff9390b64"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "26da7a956f1fddbaaeda72d7a9e26320"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "af453785e093922295e4825b68543d84"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "6478d23f402195c227c4f40e40c25037"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f15d65b330ec056ace345bdf6e7d435e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "08c58fc5dfe26c999ec75e10301282f9"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "a8d970cb6cb88d540f16a35d48aa1de5"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "9589ed968e08d5cfdaa23ca52f1b375f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "009feccd1ff4a01174d101504e772bcf"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "b77b93e58f36133b8470d330c8dd28a4"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "5d2d3442193eb05a8125edefb3703abe"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3e42ce4a13350e87bbb77d46d6244dcf"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4e3a11c3702cca914a505a7c863d46da"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1c0c62974359fa950b5351f12cf7130d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "651ea731f808b1bcc78cf8197a94f4af"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f247d70f7c34647aa08c0b3e2548fa8a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "109a3c184a39ca59eeb1e796faaa1ddf"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e060220e661cfdfded8ee9d9e554e1a8"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "987b2f204f42cd5988a2784f53a1211d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9f4a22884534fa6a014d3317c5a88c65"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "61ebfdb0486cbfd9aa4ba344420557f8"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "1272528b52f28a9145ea718a509cff49"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c0f7cc53fa4d090d1a0305ab9d91af23"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "049bdeb484f7a1f21ea117be0acc0c7f"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b0f213f4ba0f67a59f41e7bc61761d0f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b11fa26e087a89cf5dac8c992cbb34f8"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "3b7ec98eb3529a6d42192289ee320132"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e7fdae2235df12fa59c79b2b87b196c2"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c71a222fa8ae4f8c5c2161e96d614633"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "1b1daf121ec8f455d3e57dc198bddc40"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "ce36689638e464915033088f66df7459"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c37a9be5945e9f272adb17c3c9991aab"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "10906f6000fec406c9a7e1b2586ee2aa"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6bc5751e0c661ae3f4071cf4f5f3f7b3"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "9f9a282af195ce7c2a0152174818c1d3"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "fd6982175c06d03a47218d3827b7ec1e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "49c226cbdf9769ee536dc4550b0dedb5"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "22c7039e0809f3a02169f6ee228fb2ca"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c5d23f35cc78b69f2794caea47f9b019"
  },
  {
    "url": "tag/index.html",
    "revision": "aea4136f66b16aa1eea08753a43378cd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3b1913467cafddf6670e10cd79c75995"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "b74f1baac47cf50a1139ab882acff0ba"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "b45a050dadbbcdff6a8aeaa9f4cf1687"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "45a08cec2645684cb125039fdb079f42"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "e708891b0617fd1f0ea9652ebdf94bf9"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d8396859e1d824596c9805f7664b5918"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "9c0a0afecd3acdf0ce2f9f8f4674eb53"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "554ffdb26fc3d0339252b911c3e58a53"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7a26ff8b4e51ac69dd4159f7d7a1455d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "7eaa8892f71d70029a9ac494e8124d3a"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d628f9583923368656d8e0107c4758d7"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "4d6e90c917a72b8f2d71528c544ca808"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9ad28ba374282f26d1420e4de3c23bf5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "622c7e50cb4bcb5ed51292e94412896b"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "0f809c022ac7bb19b6d531d04bab36c5"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "a3e45b21bdc391ddeffc010544e7fef8"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "56f1b9ab4d89252d887cf4ee82bbf50e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "920b16bf674eafa8eb218e75251b5bea"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "f825f74c02c8d21b8586a1ca3f588dae"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "72477a336a4c5ea8d0d79b9751df22b8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "cfbdf7c562049263f9dfb1ad9f5d5b9f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "19d4f9596b04bc4b30253948a2762609"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "4ef0907ad7ae4814874920ee4072a944"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "c8846dec1eb3e0f83d8e04aed02335bc"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "24e30c7948200d9d27f8c3549a82532e"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "5999d975582252642f1f85ba2f53c9f9"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7f3b48ad8bba389dd9e1be444ef40f5b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7ead9f925015ee72d188f3a248d1fb5b"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "db3086813b035ee66b9ce55654e4146b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ee16e4a0f95572e8a98c76ed96358554"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b1c2db8d709746b9f1c0d7cd39423543"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b6649252d0354d63ad34f8ff844e6d18"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "67ce460682529ed29f8f30927acc5e8d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "31f996ce5a442097b32e6da95d8f9f7e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8f00003e97aae5cbe22e5bdaab2f504f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ae17c1cd0bc025070b10b49d00ab3fcc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "dfa0d174e4e65a177235282dccb136c2"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "32dc56547956e1d10cc811a54be624a0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f6b367b65004396a1a4ca4919a78b916"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "efaab3768a4b6c2ad8daf537744ef6ad"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ef435fb6d489c2538e4ff103a3ddcbaf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "85ba11090bb69175b0c478bd67f80e1e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6116f5db774fbc5d23b881831af05e93"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "aa5ca85d2b6073a44b7b2455909a18a1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "5d180c6220e6ffd8b1d29bcc70fffe01"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e7a838564c80e264b4d97eca8854a804"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7c9bb64700e697e9d13c5c241c1cfc67"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "24570d2f8b835cb82509136d8139d3ed"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "52023f8f2c66ad4a50c35d35915efbae"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1a6ae9e2e158fb3278d318e76c7397e6"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d27c798cd42cfe384ce8005b2bbdb102"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d653b4dc4af515e968ff7f410da3b855"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3087b9b23ac8327c7785a129cc9298ba"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c95b4bdeee1651e82c2195db543fa583"
  },
  {
    "url": "timeline/index.html",
    "revision": "f507eb388d01b56d01a7cc1b65df2a4a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "21b414baf107debb3b8b7760635dbe89"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e804ee1adbb4935cec00cc80be869066"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8cdb265f5c35755794439e9a30cace29"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "06107c783a0666d910d9b0c3dc4bfe00"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8d1a4b58e046a9559413a1260e1b80ac"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "116d5d77ec8988efc5b5e1d3397682f9"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "42d352d46463814a5062c0005c372e1a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "0fc2a720980b808a9ca3a69aa6925301"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "ffdf323ff7718cba44270294b16d7b89"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "54dc9306a99370d950093e28fac94f5b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "416073d7604e043cb18c7bae077f1af8"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "2291e4a654a0d2923c4440fc9406d7c9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "c14bed6167e31aac81b9ca0e0f90c03c"
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
