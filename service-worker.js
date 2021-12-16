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
    "revision": "40e8d92be5ef6e61de394c820e6cc47c"
  },
  {
    "url": "about/app/index.html",
    "revision": "fc3e62758bf9739f4808bdf354a770fe"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0ec0c7e05fe5abcc536364af43c3aac4"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b4d58a55cbc17209eb4669760db042c5"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "2afba6c0f5e95724f933c20c8688d45b"
  },
  {
    "url": "about/index/index.html",
    "revision": "3af2faa38c468106f86606d2b9409963"
  },
  {
    "url": "ai/index.html",
    "revision": "70cb9d4b87c07a6a237e9af9cbae33ae"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "5ff3968a5c313082b9d939b46c21d2f9"
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
    "url": "assets/js/103.df095cdf.js",
    "revision": "b6bb2d9e8906a7f4e2f6323f29af5fdd"
  },
  {
    "url": "assets/js/104.f278fecc.js",
    "revision": "73f1c1d37c00d5d0a1dcd65802a89091"
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
    "url": "assets/js/117.25bf8a07.js",
    "revision": "ccf02a037e57555d0e092a8cd03e744d"
  },
  {
    "url": "assets/js/118.97047fb6.js",
    "revision": "37840e8fc3ac4c02760d2c61d4df2066"
  },
  {
    "url": "assets/js/119.30dbccae.js",
    "revision": "2fa3bd22b4a8388d0afdfa016e69a163"
  },
  {
    "url": "assets/js/12.239f1e71.js",
    "revision": "135352a13e4465d8371aa6c0ebe3aacf"
  },
  {
    "url": "assets/js/120.dc15642e.js",
    "revision": "34a1a19488c73e89999c1bfd8cc09982"
  },
  {
    "url": "assets/js/121.1aed9d4e.js",
    "revision": "e82a855db969379b5b613f8068c2de19"
  },
  {
    "url": "assets/js/122.390ad010.js",
    "revision": "776c0217ed1968de3b72f03acd79606d"
  },
  {
    "url": "assets/js/123.d4647c0b.js",
    "revision": "8c22c280c4cad23b5c45d63a9435d747"
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
    "url": "assets/js/13.6d3c1e50.js",
    "revision": "43c21373e6bc06b1c996bd147d8ca308"
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
    "url": "assets/js/136.2deae8d9.js",
    "revision": "8c40804c913c79099201b096e7e0e878"
  },
  {
    "url": "assets/js/137.f1c8af04.js",
    "revision": "599a753dee61c6926678c4be7b6e4d19"
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
    "url": "assets/js/170.b27451d4.js",
    "revision": "03144d9a67075d84c10d7260a0af3068"
  },
  {
    "url": "assets/js/171.b6848ae5.js",
    "revision": "89a809362366098603b8255be5105a44"
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
    "url": "assets/js/180.a5ea36ab.js",
    "revision": "8c0e300026f1436c669bdf06c4ecb932"
  },
  {
    "url": "assets/js/181.27f13f57.js",
    "revision": "109d35177673158d3bf9a0a1920d96c4"
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
    "url": "assets/js/199.f3d3d6ca.js",
    "revision": "4156760b14cf585fe3115cdf2ba82ca9"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.c482760b.js",
    "revision": "b2f1f5c463ac114caef1df2eb35c269a"
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
    "url": "assets/js/229.064da3e7.js",
    "revision": "c8958c59851e0de26f814d97755f93dd"
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
    "url": "assets/js/app.4fa8c7a2.js",
    "revision": "f7a11466cb4973e7323f164664813b88"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "5fbd5cee7cd795c08dc620d4dd4eb0dc"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "98b0e8849c974796796b6601289adaef"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0f55876e8b67305c217fe0fbe350c5cf"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "7805d06e47edf1fdcbdb95504b6930f4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "0d9e27fd7f332b39e7eb5f928d545fdc"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "628944e853407533de7504b790642894"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e370bf1c672d111ff492bb91db85afb4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6cb4c28f1972d339589cb83ec84ecea5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "16dcd2f1bab200bdd41a0e687e98555e"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "15adcaa8d3e3b6d5b0346d3d461d0d9c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f99b43ca3ca4d42ab942af4abd99b97e"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "403e22c1ce9c9c882804e431f25c7f71"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5002d92b1c8577d0f67143ad35613c36"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8372fa873841fdbce6d3a941affe68e7"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f5afef1672dc8e0348c68853f126b9fc"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "0b92fdd6c4b8ebb68005b467c190a5d7"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "04baa3c912894ec09257ee9e232abdfd"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "4956e35d679cab045a40baca8c66e0c0"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "b9e5edb3271c56ddedbd3d4af47d360d"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "1f728b0164d513525dc22722e4855a21"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "794ee782c52636e080ddede8d6b1d76f"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "76ce60c5b197c8b7ed7e6982bbd1c095"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "653ae277bab35d288eecb7b8902ff428"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "94507f63a8432e4d4214d60d35303ad3"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "52926eb5e3cfff89e18676e0db49ff53"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "4082b4455f5eba282708860f87295c0d"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "589e3840fffb1b279aca3c566fc38654"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "03dbf4e9d3d6e8e0f94ef9c934a5107c"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "3346154fde07ef81cd71ae19e4fc0292"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "c122b8568301e90595f9e5f073850644"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "e35fc601b3ec528d9032c6619f779ad1"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "cee768ab2dc269b1361f28038b72dfb4"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "badd7f2a6829228f6b3074767c43a169"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "618aa957a1dc2e595b87b0c149fb5442"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d81ce73614d3bdce89c15f6dc85155bd"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "05acca2003e7477d8023e6abba3aea50"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "ddd812696bbb8ed0997aa10c0ccd1d45"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "a617284820ddcd6cf1f98150c4da228f"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9e4a1a0e679642788f7bfe5337ae154a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f5e710484045c3118fc39346711862c1"
  },
  {
    "url": "book/index.html",
    "revision": "3d35a7c5b6e4225ca8ce0ff48a2740e4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f159d1bfa107ca31cf9628aa04fc59a5"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "0ee6889597ca30162d57e6cac13549e5"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b14fd663b7fbda1687e7d1d72f214a92"
  },
  {
    "url": "c/audio/index.html",
    "revision": "ad5ae3c65fd48563eddfe824f8291a9d"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "6b05f9b0d329dc211837a140722c17b6"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "31b2ea6e5316f630fa61f03be2cddaaa"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "6e89d4da592406b00a62d743d596ff65"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ed62c3174635090f4685c78192afac7f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "5deb6f8dab616c862d1465151808dc60"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "bdc7cb32596277af8287e7019c342bec"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "cafcc3f0d1d4d3474dc94669f896a03d"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "d97feb49d8b1d45ea92da4dfe3d6c3ae"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "620ac756d21831f57ce8f61d3c9cb8b5"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "49c511dc13ddbbfcb1b50cc66e9364fa"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "2582a4d138d4a1c8392615456b4f5cb9"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "6ee5ed40636dd68e992a570529d6caab"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "25cd42055a23e93e0878eb0ba6e9f7a0"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "6ec7ebb10156a74eb80347e4d2c2ca9d"
  },
  {
    "url": "c/program/index.html",
    "revision": "07b1ad0190d64ce3417b9a431682af94"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "cf0fb5342ba3ff99c8d00a85d4b0383f"
  },
  {
    "url": "categories/index.html",
    "revision": "d22de9fd069ee1d60f0ef47abff21908"
  },
  {
    "url": "figma/index.html",
    "revision": "84d01782c26864c2d8f0323f917828b8"
  },
  {
    "url": "flutter/index.html",
    "revision": "03f24719574150181a443df72b5c7124"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b60ceafdc6bb1af5d32c9af522d271b5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ee69fee4146bdc3231fe7b26f77fa56e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "763b30bf8e2e8dca7acd3b1c8b95b115"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c6fb9b34066af7c2ccef5185fcbe45ad"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "28d3f96a479eb3b1fc5c56aec4a43776"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "a4ff7f582690b8d113e1a452ed6a9eec"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f850828db08c7b2a1fffaaed7a7a176e"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "25e8fe01e0ca039776dcf9ac6d85c9fb"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "6ce77ccc0fb25ce0bf0e289db9c2c28f"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8f913a6a0a931d62bbcbd691e746702b"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9d2feed0985bfdf5c611b6443ece6c88"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "b829e2dacc147b6800649b15e9c2462e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d1a2fb80a52c3a4d7fc1b4b64fe3799f"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "45704a21b7cec5d319507453e19d6a5b"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ee859556bdd47b92aa1e4f28b7d8d9a1"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "5fe896c13e45a5fb35a75af806cc774b"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "29f641cd5e1da0d982a8728a5de599bc"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f8fbcee7701a800f26d9f2b9c9f0b23a"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f54969edc1132d2dd62b22c48dad5818"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "157b1b3d6ae7f64bf75d3bcbefcb01a5"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "def56eb3ce5aed9d54872a12972e9e0b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "cf1344603a4aa3e226cb3d0ed9cfb38f"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "2237dcaeb409a52067eb66d321c64ffd"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "88646f400c1b168f41afeb38e5a825f7"
  },
  {
    "url": "haskell/index.html",
    "revision": "300b3bf394e931d3257af6309754f56e"
  },
  {
    "url": "index.html",
    "revision": "1245460a89e35e6103c7d004e95466dc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ecc9e06628a957ce77fb3c841c5b315f"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "dd33e97fc663187c48f057ca9ee21dd0"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b0dee00e0012563f07d8dfa82871d5b4"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "f72d2705a4fea5925c3db214e9a6338a"
  },
  {
    "url": "python/index.html",
    "revision": "5826df3017d80b134be50c80240a9fb1"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "41e1f476137f84cfe5cb0569c4145e8f"
  },
  {
    "url": "swift/better/available.html",
    "revision": "0600c1d79462bb4a694a56746f57f80a"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9f70cef3034b564faca0a5aed77119ab"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "64b45d17b9036210be98e6790a44e824"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "2b1ca6ce05cd5a45b6491d69b83acacb"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2353887a1d6807b46e710cb31d165f4a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "4c4b5eb8967d6ea189946d4ca6a761a9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ed55aa35f546e48c7daaf7873cc37796"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "4e3d1cf504f500e79709416cf8ce8943"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "ca886b573d4a42bb7756f9b4f6d8bacb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "5a330288a79b7faf848aff4964d700c5"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "1084b8b09f76bee9315f6ef246975320"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "bbbfdfb9f1f6ca785604c1037654ea08"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "a711bb548384fd07c0f4364feda548f6"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ff5258111f4d70ab7913e3426100b158"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2ce382f780d99b5b143a8ae092a55e7c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "013f4e9e435ae5bd00b5898ec83dfcf0"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "bf6f1f98fc63a190feb5009168fbed14"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "1d66473e31a47301638594ee595c5984"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f0a4d31f8c61eb1f0d08982bc6b5eb40"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "10dd66352d2e326a61ec6f9c491b770c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "723d9b4736b68d5ddea20d90c1337437"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "78502ef9e2b3ef2e8f76ac92cb82c6fd"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "710b534048f2861688b054e76792f99c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "411ee1c84859c3c87d1ba4457e243e70"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "af8c69c31e53881ec2999ce0182ff475"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "0b89bbdd6f52104583c5a1da1b9a1ea4"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b9cce51cd0824b167305166a2896a28c"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "90ca86b9045c081278c3c36478440f27"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4ff4ec282dd96c40764f8cd7f9c0002b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "1a71681ef5fd8dddc67605e5510963c5"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "e45027914163e9de2713ef2e610fb9ee"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "bedc1ecdba15a673b077ce877041e5d9"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "9529c92ffc8503ef5537457602126456"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5e24bd4b2e8574713d46a99d98964956"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "e22a5f61c7abe0767607a84f735c346d"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "b19f0fba8c7693099a1c041881723800"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "108cc91e7c74b759c652dc34c8de6a8b"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "a65d2bfd63c014cb3551271d18a688fd"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b2838e4e079c87d417423e5fcf15e37c"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "2cd7f92403813b9b59e642aa57efbce4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c211e50b983486750934bfc737eda5ac"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6546e49244e433904a05de0863da3204"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "f0ce6de2cb53a618348e33a5ed05837b"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "366795aecd5877aaa5c59350615136b4"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "4fb4fcffec44c4af71bc64df9e6593f7"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ad3a90fd7b50b450cf83024581de44f9"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "c223f39520fbb7cbd1f23ad7d4d2cee6"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6c6b8beed6657d5e1ccb371ce0607336"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "216232b29cd692db69981886dacb2607"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "48852e9c3e4985066e5e3257e35efdeb"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "dc800f535b4114de08f5977b8474d812"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a7b1c4b72985b1bb951636d110778f46"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f6b6febf323e9232b76b9f90714ca0ca"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "df0b150d0f8999539eb3e5e4d81b7e22"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "b5dcb91d82ab0891af8827d1b5e60a96"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "9f4346037a3db0565ef86df64325d6c1"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "6f4e90e5721f023510c228feb19435a9"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3b87bbd9e43a22a263086c9afffc9e6a"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "a12500670b4d62b5f6340c16af7b9b79"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "01f38c745aaa7f8d28370783f1af54e0"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "ae9976da860dc90c12360f4b9b87912a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "c90797a8a760aedfd5cbaf5e31e647e8"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2a2966361558f7178996afb4aef3160d"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "beadb2e11176cc6a6ec0f7fc0778f6d2"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "9858676fe4a861ec7e0f5a419ea49eab"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "252487198686b27bbad1f961a9bf0d26"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e0379f0310c570999c49ac14dc0d678f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "22a80420d945661e793ef90920e7811b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "49846b2d5723ae62e00d85af2e3ee9c9"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "07e7099b84e0b9541e69b0ec8601ba38"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "6eb96490d53f37f54ff0b76d3df74e99"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a67f8e603272f0b0a4d8694b45dd931e"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "9c3c1bb3a15f1131c042855e44764f5e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4ac7e9cbcc7e7d253e10af2279faba53"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "b48cc9c0a2f1058133037642692e5326"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "d31b03dc6ba2e1867626de4434e49d89"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "51f28aabd1ded34c6b2da14195a56fde"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "3bde665c952044640035aeb26024972d"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a7006ec803bdd74201c517ac7134e525"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "a185ac6b845cee09ef9384dc27d853d5"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "1d5cabfd1158c61300b3bfeef9b739d6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "536e943c6a45a5bdf6c9c26dda27ad97"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "746d317fc6382a3df82567861c9c26ae"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "2eb499d964aef9b2fca25792d49470a6"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "d0ab937fe4061b0e0d8a4263c0185ccc"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6017db4b8f59b4bd2f9dde506fc07dd9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "04c2f6cc58af8dc2b9793e40da053e08"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "874ecd3547b47446bada40280345bf05"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "5b70c7e21ea4687e96538ab0a32d84ff"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ed576dddbfcbeb237bdbfe9abdad7f42"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "46b4a0062b934c43fabd88e72555eee0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d6ea85aed274481bc3840f011eb1fde7"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a24dc0cbc47d2eb6578f54e8730a552d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "4ee769c5f19fe787523ca14367a1c4e8"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "94d1c57c83bbdd2a4ccf12672edbbf6f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "29463d6ce38b20b9d47ef942e65bae83"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fe0a8fb1492c0bb1bd534b763fe60245"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f3d275dfdb4f3568ad4ba1aec37e1ae9"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "3a9362b18f44fbbc4597c2f5929743e3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "821e372034a82f9e4bc402b17118fa54"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9a826d5bda4bd3b764a41caa68621aa5"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a12a8248a2734fc13de16ad0f6651e0a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d080cfc3f61f59d131bddffc22e4223d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "662c0886979f0dd506b3ededdfc0f5d0"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "aae053db5a452339215137b2cfadf4ca"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9791952aeae90e9b0ad9d10b59d8e234"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "a7d8449ce8b2bfe0656346c22457a1fd"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "dfdf20d5b86b7a715d34c2fab5adcfbe"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "bced836fe421830a08d03838769d01f7"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "b8ac8d165137c6ef56b84cd607e5c75c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2b6681093e8871e960f2e7f10dae9662"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e672a3cd620fa6a495ac5ef21ace3dd2"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "fa57fae1aa014b008ab237fb45047e75"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "74953608c07c91d50d42f4b73926c017"
  },
  {
    "url": "tag/git/index.html",
    "revision": "117d6330958b86919716c5cfcb724a67"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "256fed9e4d2ba9300435d67b35300d3d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0d7ac24db369b179b277cb08887f3ea8"
  },
  {
    "url": "tag/index.html",
    "revision": "2b37bab950625502f5db9ff45fda1a5e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "049ed9750e5f7a20032d9397e52f2f1b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "377be051102d3b4648a3461b4bd15ef1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "fa9f0e49b0c67ff348b3590c8778987a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9cf88d2c85e64bf8ffba35433fda1d2d"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "3910dd5a0a73317bf9997a64f26ea211"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b9ad48471fa14eb1bb2b15a9c4ef4573"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "8030e26677e2d97e45dd768acb23b79b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "08645fb2a6036083ea63c1d4acd19479"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7fb8357dd6c5d8e1af293c364864b3da"
  },
  {
    "url": "tag/json/index.html",
    "revision": "229ac49de1228acbe52e58c537198291"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "998537aa3f383797a7d7cbbed3620b98"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "96b94668b4fac01b60585e84131c067d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "bd6d06e2ed39155d9eb9fc98c9ba9491"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "009cc4313271193aea68f0353859f60d"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "402603a2b784b69589300f1748b36f11"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "5897374ed5e8a2ff14b16deb47fe8029"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ba7352df19f114a52953aa316b3d8182"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "c01842a135c37b1cfc5a5e6132db2413"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "b6629420d221c13e2e7e12e4d8b33719"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6fcdba1779d287b653bf7e898754d96b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "fa7e4bb6c5360a4c17597aa8b6af4f1c"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6e546cff7ec2e493d5f6a6e815597991"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "fe9c490cc6db72c64b02b15175ba06ed"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "37d4ed079c8bcb764fd344e83ae74afa"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c8222c834647da4872d79edb907f80a7"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "10f49822aef5f4cda7273c2474dd5a7c"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "6f8058f7e230851162feee432127842d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c834facf6d2e2fbb11e992531af2bdd0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "adbc97c3380c5bfdc189313d37319333"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b83458d245a50fa98d375a365cbd3c8e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "4b02bf5b46ab6ae975c52aed0b7551d6"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "e698bfa105be1e914151e87d18519deb"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "4e5969fbd50426d07f41cf0e8056dfdf"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b535a4d71c56250fbc450bed89ae806a"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "fed1ef86cca7b5505b034628434686ad"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d6c4fe88b6597a455df283bb9923e9e8"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5144c35e6a3e6f0cd0cc17ce4ce4f8ff"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "1abb2fd8573eb16b5a5c3ce905fad714"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "747bad1b5a17687fa71d860d49503af6"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "42fdab55eb95843470e28fad661620d8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "872a7406a3a65b44e16ec98681610066"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4876e7b20e275c1e3eeee07bec445621"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1f7adf87b3de6b8976917465986f068d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2158a4cc457be94487a801bad4272717"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "4d3e2f540e76f2a0b29cc9aaf432710c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5ecd60967b937b988df690b6cee7e111"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b90f0fc771f4ec69226e1076263b7c55"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "04a12d8e52662c96c8ec0d0d4f5a3cc3"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "99228850a60148fe8e4b2bcf850760dc"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "baf60f9f249d2d73584062b98aa2845d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8e2ce66004830259566a5d29d2074e99"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "b1b997119b237e7f808432e223e69b4f"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "030f6f84ffca4fde8d1037ca17b21060"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d3e452454349a9b47ff35fccd4d4eaaf"
  },
  {
    "url": "timeline/index.html",
    "revision": "c33432d88e865172a09d959bb7b434b5"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "c88ef8e97ab287f9d5a5fdd4d5cc116a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7f1c38f03f8f0b331f978ada90e286ca"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "49118f896d03feea67829df1f332882f"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4994aae6f66d4ace24c470b56de4bb23"
  },
  {
    "url": "tools/html/index.html",
    "revision": "121075843d25dcf6772f75e87e74b6f1"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "4382df098e711070dba67d1369eb7a5b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "98612b5fe556e6bbd1d97f2857199d1f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ee926262e309fa9449fd4af80b93d5f9"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "e463bd9bdb0274e35db3b90ef7280674"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a53f401b6d9dc910040d865d0584758a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6b4d10b6a053f82a0e80f04dab1cca48"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "26161d411fa33570436f036d4dc864f4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e2fbefc7454b684bd5f1ec4ca9167c68"
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
