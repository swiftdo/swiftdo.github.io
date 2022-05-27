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
    "revision": "f7a74d0669475301e7f523f66d3a378f"
  },
  {
    "url": "about/app/index.html",
    "revision": "9eb759237be98cb7d05573dd8cdcc387"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6681a1ed17d2a419207fca6ca2d1a1ae"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c6281dc2fbacc962be22c9cd63ffd1d2"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7143773ad0d14b02da3c8ab5fa3a54bc"
  },
  {
    "url": "about/index/index.html",
    "revision": "189c02397df1fda7b1aee28b0267c142"
  },
  {
    "url": "ai/index.html",
    "revision": "cf064c6657c01da2f03e27d504e42e7d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7f8a00a06c9e6d8212acfcd35c00d47c"
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
    "url": "assets/js/10.981f76b1.js",
    "revision": "1042e8a59aeb8cc5689291fbe154906d"
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
    "url": "assets/js/117.38e8d44d.js",
    "revision": "51546f16bce8389f1a62ed43bfb2cd29"
  },
  {
    "url": "assets/js/118.1d557f87.js",
    "revision": "4381bafa97b7cbe96459543e6ecf0620"
  },
  {
    "url": "assets/js/119.53cb852d.js",
    "revision": "42ec85cb31bffc180c4ceea67f4d1710"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.3d91f6c6.js",
    "revision": "1639bb37ba24c8b118c5c12beb6b2da9"
  },
  {
    "url": "assets/js/121.f80ddd9f.js",
    "revision": "49053fd401b7e07857cc797f98634268"
  },
  {
    "url": "assets/js/122.d2a2da05.js",
    "revision": "9fb49fa4b66b7899462cff3ee7e53178"
  },
  {
    "url": "assets/js/123.dd48a385.js",
    "revision": "ef19e1d8ae8b5ac00cc315f9f7a42906"
  },
  {
    "url": "assets/js/124.30c3d1f4.js",
    "revision": "98ae812ab2a25a6201e6fc736c15e43f"
  },
  {
    "url": "assets/js/125.ddf8ab50.js",
    "revision": "2ba488ff033b356b4a4d718eaad8e5ef"
  },
  {
    "url": "assets/js/126.43d26624.js",
    "revision": "22e635dfffcc1bb99bbdbe117cbad1c2"
  },
  {
    "url": "assets/js/127.891402b9.js",
    "revision": "6259488e9b531eff6f3284e3f36cbd4e"
  },
  {
    "url": "assets/js/128.79c907e7.js",
    "revision": "4b828feeb07cd276ce9a946fb3e41a0c"
  },
  {
    "url": "assets/js/129.fcbfa88e.js",
    "revision": "2eaa5d63d4a4764cb6681342e3ada089"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.70185fdb.js",
    "revision": "81ed832b0800cd66f1ec09bfeddaf0ce"
  },
  {
    "url": "assets/js/131.fe3558da.js",
    "revision": "ac5385eeae17163176f1d2eae336ac20"
  },
  {
    "url": "assets/js/132.feeec032.js",
    "revision": "bc0fe925dadaf65d000b1990e3f8a6ae"
  },
  {
    "url": "assets/js/133.07541129.js",
    "revision": "5790bffc01ec4d616b9dcf051cabc825"
  },
  {
    "url": "assets/js/134.e47fa2db.js",
    "revision": "58dd9b93ee105721e1151b8e0a0eacad"
  },
  {
    "url": "assets/js/135.526fc7c1.js",
    "revision": "d488c7b3c4481f90b0616219d481b6c7"
  },
  {
    "url": "assets/js/136.970e4393.js",
    "revision": "ca48e12a203185098c4c21f766d1adc9"
  },
  {
    "url": "assets/js/137.e333e17e.js",
    "revision": "a95daff3563111772a8d6185a6e0a845"
  },
  {
    "url": "assets/js/138.c17d277d.js",
    "revision": "fa07bf1b5c9275d37f3f1db3fb368239"
  },
  {
    "url": "assets/js/139.63afdee4.js",
    "revision": "51c9d93c06922063bdedda0dabef5da0"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.44a4f854.js",
    "revision": "a114d013cd13d1b4a612f2403cda624a"
  },
  {
    "url": "assets/js/141.d95a37df.js",
    "revision": "f9e4ee204f651bc23c0a6f029a5c4409"
  },
  {
    "url": "assets/js/142.040b6fda.js",
    "revision": "5888a746221ed63cc490cfb8e9639062"
  },
  {
    "url": "assets/js/143.3fa7f709.js",
    "revision": "64f5c9e1f2d5f5b53b290f75865700c9"
  },
  {
    "url": "assets/js/144.ce012bf3.js",
    "revision": "aa78b4859154e0af2d388e8612220f02"
  },
  {
    "url": "assets/js/145.7183858e.js",
    "revision": "2038d80514c9edf1fa2f33b6a06e1b7f"
  },
  {
    "url": "assets/js/146.a2801ade.js",
    "revision": "58226dfa03d051e8bd702fc33b618b01"
  },
  {
    "url": "assets/js/147.8e3895f2.js",
    "revision": "9e3020ec5e8ea82e881086e620f71da5"
  },
  {
    "url": "assets/js/148.72c2cc7f.js",
    "revision": "bf29ff16a0397f8928d29f39d810321f"
  },
  {
    "url": "assets/js/149.8ccffdd1.js",
    "revision": "c786d02152df12e14babaaf700bf6188"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.f0d4c916.js",
    "revision": "a9da14a083aed8a0d5733528c0c7cf84"
  },
  {
    "url": "assets/js/151.33528b07.js",
    "revision": "a1cc45d3da5f6a97c17ec9aa84665f88"
  },
  {
    "url": "assets/js/152.07c5325a.js",
    "revision": "4ae6b641bbe031fb5f7f157b712c9830"
  },
  {
    "url": "assets/js/153.92a96cd6.js",
    "revision": "27bc59b83cd6acad166073f0bcad3f79"
  },
  {
    "url": "assets/js/154.67aac961.js",
    "revision": "407ef30b274e9fada73292b707b03bd8"
  },
  {
    "url": "assets/js/155.964d7af8.js",
    "revision": "0f3a9e520adca1c9e1d34b548cf4961d"
  },
  {
    "url": "assets/js/156.d5039e57.js",
    "revision": "665538ea0b91534f36fd13eccf931d7b"
  },
  {
    "url": "assets/js/157.b076dee0.js",
    "revision": "77f30941e9c5dc7710344f9701dfec23"
  },
  {
    "url": "assets/js/158.6165df9a.js",
    "revision": "2963123565a190707e2fc1d640dd30d4"
  },
  {
    "url": "assets/js/159.f56cba67.js",
    "revision": "d2416993a46071257121eb7d35d6f7c3"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.a130b608.js",
    "revision": "bc452f46c9379deda9c597d0ad459035"
  },
  {
    "url": "assets/js/161.36fbb72c.js",
    "revision": "81fa6ea0e6c931f12cfde16ea12c517f"
  },
  {
    "url": "assets/js/162.805a95cd.js",
    "revision": "154bbaf003f778638f6210af7884263e"
  },
  {
    "url": "assets/js/163.74e3c2aa.js",
    "revision": "0349f5b1a1f831ca2c383ad8c03d19e4"
  },
  {
    "url": "assets/js/164.d16918da.js",
    "revision": "f9cce2ebad846ff7fe43f2a23f2d0625"
  },
  {
    "url": "assets/js/165.9d684df1.js",
    "revision": "e71c456079107e9eb891303345d0180f"
  },
  {
    "url": "assets/js/166.f3d5c843.js",
    "revision": "a74dcf4ff3f39497875a046bd9e78ebd"
  },
  {
    "url": "assets/js/167.e16ea470.js",
    "revision": "084e849097e4466a79728a7ed44c069e"
  },
  {
    "url": "assets/js/168.73b58afe.js",
    "revision": "56e62a9694cb978a9ceee366a362bbd3"
  },
  {
    "url": "assets/js/169.ef097b38.js",
    "revision": "d4ae871039c3e3be16e281bd33f5b5a5"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.127bb98b.js",
    "revision": "ebfb4fba672698f0d9363cceaefb16a8"
  },
  {
    "url": "assets/js/171.b32f584e.js",
    "revision": "c05d44ce4d28a0569df29a39b4d33b2e"
  },
  {
    "url": "assets/js/172.5e839b92.js",
    "revision": "0803104c56ab7665a5d1315e34c2f05e"
  },
  {
    "url": "assets/js/173.7a3d63a1.js",
    "revision": "b778b445ea9a39e816c96e17ce6d322b"
  },
  {
    "url": "assets/js/174.b961ed98.js",
    "revision": "67c643c36a67c608681539c750155942"
  },
  {
    "url": "assets/js/175.f4864d2b.js",
    "revision": "1a6ea29be8860bf766ce9c5c8b8dccf0"
  },
  {
    "url": "assets/js/176.640ec6d2.js",
    "revision": "be75f1ebd5ed3030343d3cd7afe318e7"
  },
  {
    "url": "assets/js/177.16719237.js",
    "revision": "bda5927e4a2f8c4ebc56ea99bc7bcaca"
  },
  {
    "url": "assets/js/178.783d206f.js",
    "revision": "cc8c7d3e4bc05f0613babd72a759003e"
  },
  {
    "url": "assets/js/179.ea8acf64.js",
    "revision": "13fd2798eacf94109a2216cde27626fd"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.df16e91b.js",
    "revision": "eff6adc6d9b38c6eaef2d73b199e0611"
  },
  {
    "url": "assets/js/181.3ea556ae.js",
    "revision": "41090f98c0d7049e8d8ab4bd8cad9c96"
  },
  {
    "url": "assets/js/182.bc756974.js",
    "revision": "53a0d40685a671392bf4fe12d22637ea"
  },
  {
    "url": "assets/js/183.29399d5d.js",
    "revision": "d965fb9dce1398793f1a793cf732946f"
  },
  {
    "url": "assets/js/184.f1f32a9c.js",
    "revision": "c55906c695132b48300addbcddcfd6a1"
  },
  {
    "url": "assets/js/185.156b2e39.js",
    "revision": "c8dcef9905a88d1c30d21b3c9f8b0122"
  },
  {
    "url": "assets/js/186.71cbd9da.js",
    "revision": "28ba3b2eab4e1f7befde32bd9550db75"
  },
  {
    "url": "assets/js/187.12224e14.js",
    "revision": "b44613c8dc79af49991faea2f030fe5f"
  },
  {
    "url": "assets/js/188.5b4c23ba.js",
    "revision": "10f40a1bfda6054eae9161f4b5d7d682"
  },
  {
    "url": "assets/js/189.68b74c06.js",
    "revision": "4c4692d68f25c94e64fd4ec59f17f4dc"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.c61a49bf.js",
    "revision": "da30e16f7639587b2bac815d86509994"
  },
  {
    "url": "assets/js/191.f5e96003.js",
    "revision": "535cbf1cb95e946f28ba69fa120c0d3e"
  },
  {
    "url": "assets/js/192.b591f228.js",
    "revision": "9e4334f23807cd1208cd7556fecdc58b"
  },
  {
    "url": "assets/js/193.cfe306c4.js",
    "revision": "ea26031fcbe56be2b06c240717622a6e"
  },
  {
    "url": "assets/js/194.a38085b4.js",
    "revision": "c1596696b56c60e4b2cc80c6dd717063"
  },
  {
    "url": "assets/js/195.791383c0.js",
    "revision": "b68d61e51a71f3bf077282cf6e72122c"
  },
  {
    "url": "assets/js/196.a15468ec.js",
    "revision": "e5404b000317bb6822446fd33caf4cd0"
  },
  {
    "url": "assets/js/197.38bc561f.js",
    "revision": "638044cb862d7a015ce6fb16a56be4e6"
  },
  {
    "url": "assets/js/198.c0305955.js",
    "revision": "ace2c20c69289d01d704bb454ac5bbb9"
  },
  {
    "url": "assets/js/199.fa599848.js",
    "revision": "499ab6bb3825b386a97798e296ef6495"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.76e8098c.js",
    "revision": "e2109d9e099a1a21943df9ebdf565391"
  },
  {
    "url": "assets/js/201.1700de85.js",
    "revision": "a89a1649cf83f1f25ac19927e7907c4f"
  },
  {
    "url": "assets/js/202.a9db5262.js",
    "revision": "454ecaf63c195b3f55efab9ec1a9ad17"
  },
  {
    "url": "assets/js/203.3dd57172.js",
    "revision": "87797effb6e0c6e5fff8004a60c9f794"
  },
  {
    "url": "assets/js/204.06443715.js",
    "revision": "ef44b8e427e3586aca347abc783ba0ee"
  },
  {
    "url": "assets/js/205.61d77bf2.js",
    "revision": "098fa445628c93c5341d7790c88f72d3"
  },
  {
    "url": "assets/js/206.3390758e.js",
    "revision": "5bb1c2de1dff10f2c8b62972ba916aa8"
  },
  {
    "url": "assets/js/207.b4d18945.js",
    "revision": "888c1dd6dce227c1ba7f797b5da04026"
  },
  {
    "url": "assets/js/208.762a0571.js",
    "revision": "cceb7041853e5b8e3a664fc05c8e75ce"
  },
  {
    "url": "assets/js/209.726ae402.js",
    "revision": "cebb53bc607e52ec78ec76051b5f8d2d"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.0852557d.js",
    "revision": "a9b75545f84b98f5053692abde4d5d84"
  },
  {
    "url": "assets/js/211.a61b18c1.js",
    "revision": "7cb3250c1f0e552a491f036641104fc7"
  },
  {
    "url": "assets/js/212.913f064f.js",
    "revision": "7694ab1661becc2ade9c71fcac240fdc"
  },
  {
    "url": "assets/js/213.1fefb796.js",
    "revision": "9433f0a98515b4e67b98de10332435af"
  },
  {
    "url": "assets/js/214.8049b076.js",
    "revision": "977039c0004734718fefad6b80158613"
  },
  {
    "url": "assets/js/215.adc39b8f.js",
    "revision": "560ce0cb4b5d7c99face55925a1a492b"
  },
  {
    "url": "assets/js/216.b472afdb.js",
    "revision": "f5aac27cc81e21ece6283f316622536d"
  },
  {
    "url": "assets/js/217.500c6ea1.js",
    "revision": "a7bc347bee3094eebdc53ae8a1a4c5b1"
  },
  {
    "url": "assets/js/218.921dc5f3.js",
    "revision": "603237fe1767b2d78683e895ab5423c5"
  },
  {
    "url": "assets/js/219.e3656ac0.js",
    "revision": "b55f5b7351a2479325912f0735c5c93d"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.6b29a71d.js",
    "revision": "3f50e77fb7d454b501abe76050281069"
  },
  {
    "url": "assets/js/221.87a3a50b.js",
    "revision": "45b3ec3ec91f946a4d8ce5761feb5ba8"
  },
  {
    "url": "assets/js/222.38b999eb.js",
    "revision": "fda4e4374c82244179fca44a4beb532d"
  },
  {
    "url": "assets/js/223.3e17e6c4.js",
    "revision": "2685ea3d091bc9c1e352b049bdd661ae"
  },
  {
    "url": "assets/js/224.63b2a43a.js",
    "revision": "13283524a95dbe94773fa7cb0418acf0"
  },
  {
    "url": "assets/js/225.08ee8856.js",
    "revision": "bd3076e005f7b95b544d36f1deedac08"
  },
  {
    "url": "assets/js/226.840580b1.js",
    "revision": "15c3bdc51327f89bbccb33219871d790"
  },
  {
    "url": "assets/js/227.cdff0103.js",
    "revision": "3597dd0d141f00b49c7eb07b6112e02b"
  },
  {
    "url": "assets/js/228.ba9e2adc.js",
    "revision": "a6e8c40a5e6829ac26d1a2451728f078"
  },
  {
    "url": "assets/js/229.b07aa23b.js",
    "revision": "c8e0a50a2a9bac771750424e5e95d6b1"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.dbd22283.js",
    "revision": "cdb5c06562baf76e0bcb668dfd23ce4c"
  },
  {
    "url": "assets/js/231.dbd85eae.js",
    "revision": "9372804ed07ced0d31c78a958169ebba"
  },
  {
    "url": "assets/js/232.653f11e1.js",
    "revision": "e483c87ef40ce74615420172423ce47c"
  },
  {
    "url": "assets/js/233.2b418f4c.js",
    "revision": "5a3bdfdf5f6501c7571266c10aedeb06"
  },
  {
    "url": "assets/js/234.e31380ef.js",
    "revision": "660709a415e20854520fc2603f75847d"
  },
  {
    "url": "assets/js/235.b38e50cd.js",
    "revision": "f276d2dd703b982e390af0d927a44641"
  },
  {
    "url": "assets/js/236.3b1a9441.js",
    "revision": "c79b01399fb76ad347dc0e9084a971cb"
  },
  {
    "url": "assets/js/237.57ecb46b.js",
    "revision": "f8c30f316e8608ef8b1fc6a80b04928d"
  },
  {
    "url": "assets/js/238.96bee3bb.js",
    "revision": "c3564033a0fa938373b2446b8177a523"
  },
  {
    "url": "assets/js/239.a7cecc9c.js",
    "revision": "2e1d02e8d9619bd4b85006778f079785"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.6c29aff0.js",
    "revision": "eb891ffc126c5228967feaf10dbb2ae7"
  },
  {
    "url": "assets/js/241.e5272bce.js",
    "revision": "5af08b85415a3926ef91a56224511294"
  },
  {
    "url": "assets/js/242.50dccec9.js",
    "revision": "be13800a3207e2c1910b426cdd575c68"
  },
  {
    "url": "assets/js/243.8e6ddbb2.js",
    "revision": "8599ec325df5bcc96d26e9b09b0ca726"
  },
  {
    "url": "assets/js/244.bf19b722.js",
    "revision": "c63362348c1cb8ee3f299ab22a56366b"
  },
  {
    "url": "assets/js/245.ee918ff1.js",
    "revision": "8d5d2392468f5a8ff90ceb4aaa8413ad"
  },
  {
    "url": "assets/js/246.d9d343fd.js",
    "revision": "ecd936f191a0c41dbcaeee268f4819b7"
  },
  {
    "url": "assets/js/247.4401b1ca.js",
    "revision": "20537589e7f6d9855297e087a5bdb5d9"
  },
  {
    "url": "assets/js/248.93ed2a3f.js",
    "revision": "723b25a9d9e36e04442ace1aa027325e"
  },
  {
    "url": "assets/js/249.39276a26.js",
    "revision": "2bb081e6a8a53edb188363c12fdd2802"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.71d0d08c.js",
    "revision": "5d52789a17a68f0542f6d0f1cec03cde"
  },
  {
    "url": "assets/js/251.ec5b9ff4.js",
    "revision": "e845f47280821688604e5ab41ccf6fe6"
  },
  {
    "url": "assets/js/252.ee888b60.js",
    "revision": "51d1834564a1bcacb291b77056f6ddaa"
  },
  {
    "url": "assets/js/253.d2c795f5.js",
    "revision": "d94aad4a215a6f6827d1984248ccc551"
  },
  {
    "url": "assets/js/254.2d7ebdc8.js",
    "revision": "574602a7c07a338881ce2b79d088357f"
  },
  {
    "url": "assets/js/255.4cc9c8b5.js",
    "revision": "6325a53d8a4646f11801abcdf2e5d0f8"
  },
  {
    "url": "assets/js/256.e24567c3.js",
    "revision": "c6bb464920da0e54b14078edf51a340b"
  },
  {
    "url": "assets/js/257.df8ebe5a.js",
    "revision": "cffff2632ae9c8df8ecb10c96f04a30e"
  },
  {
    "url": "assets/js/258.cbf50f7d.js",
    "revision": "ead14898012674776c51611e9c680bcc"
  },
  {
    "url": "assets/js/259.20a0168f.js",
    "revision": "a228dff5537063a99f10f4cfdc4ff885"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.c4d405df.js",
    "revision": "568c310a7575002dc5d3d0bcc4f951a3"
  },
  {
    "url": "assets/js/261.8d7f9f70.js",
    "revision": "2af2109d477e6465852af5c6c5d22c93"
  },
  {
    "url": "assets/js/262.ea93757a.js",
    "revision": "815c5d9cf04bf0f51032ff1e35e75785"
  },
  {
    "url": "assets/js/263.ae34e37c.js",
    "revision": "4704e24e4a61c77cebc48eeaa860d54d"
  },
  {
    "url": "assets/js/264.f0ae7ade.js",
    "revision": "4d47057a1b1aaed2591decba1b26cb50"
  },
  {
    "url": "assets/js/265.2271436d.js",
    "revision": "2e55898761c627e9aa7027355c233a55"
  },
  {
    "url": "assets/js/266.1d65f5ea.js",
    "revision": "5f915203e12f111a23c5aee91c7cf325"
  },
  {
    "url": "assets/js/267.33cdd2f5.js",
    "revision": "6e70083b24136f26de0909d65df6cb5d"
  },
  {
    "url": "assets/js/268.41cc1b9d.js",
    "revision": "866e06eb1e41a8a6ce290bf306e17e1a"
  },
  {
    "url": "assets/js/269.f026755c.js",
    "revision": "e8d5315231aa975f7f3f7b53ebd6859e"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.1596b50e.js",
    "revision": "e5f2c0194c3cb6fe81b4320c2006518c"
  },
  {
    "url": "assets/js/271.cbd4b8c1.js",
    "revision": "c15bbe4a17cd203a5232184d90f91139"
  },
  {
    "url": "assets/js/272.c57338df.js",
    "revision": "c25b55a882e124957d6e0f49dcbacf4c"
  },
  {
    "url": "assets/js/273.bf067444.js",
    "revision": "7436603729b676946bea60225be574df"
  },
  {
    "url": "assets/js/274.1083bbc8.js",
    "revision": "661ad2382a8c04aa801ba9e5317d35bb"
  },
  {
    "url": "assets/js/275.073f55f5.js",
    "revision": "6c09d752346a11ca44866056faca440a"
  },
  {
    "url": "assets/js/276.f2c319e5.js",
    "revision": "a42c2784e6cc5a6b1d5a503efe758d87"
  },
  {
    "url": "assets/js/277.1a97a540.js",
    "revision": "292510a00e32e953438ba5034ac80629"
  },
  {
    "url": "assets/js/278.477fc5fe.js",
    "revision": "8c543cab6f404e92bb13365722847ba9"
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
    "url": "assets/js/app.e3497ba1.js",
    "revision": "d63aa9bfcbc2202d7053fbc1c62f0856"
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
    "revision": "72deb89067529e9cd1167ec35ff48c35"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e6f7882b59ba7b1d66f92f0ba55b035a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "584fddd7dc2092b57415453c53e6deae"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "054615362a8cfe95b334fa3adcb42087"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ffe7233fe48cb6f658973648043693b8"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3f9676edff1d42fc4f5702ea331d9f6e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "331a2ede94539e7b9f532959b718bdaa"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ab1c0de5e09de9f5f0f6099443cba505"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8ffb7d0adf31ddd89a9f26f67c374ef9"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c9b45de53a624edbc467bc52c0a45d49"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "61fddc062d57591a4c2e94eeee3c981c"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d894126bd0947e2fe4d7c4531eca91d0"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "a21b05f1e87816e8bbcdcd2203e82db2"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "9b567dbced8261ad7b568436dae1631e"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "35e7e0248f823559502c23c23b746a62"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "fb5651f8b265cd6d37bbef129d9226c6"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "1e8d5d3973b49fa00a00eb33f192d18c"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "a59e61728cc107ccef170fe9c4275daf"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "f8505d3c4ec0cfa83951cd2590574b76"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f281013306dc2389ed06db6443a06956"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "7ab9e971fc1210667fec4fc229bc21ff"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "a3a1e99acb1e98918e0b4b31b5777565"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "3ee2ec319070857bdbf21c8c980fd746"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "cf1da74d8e379f2eee55ae15d6045793"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "85155682d2cc5791bf445445db623150"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "ea884bd9a19db5528f4150f07f88e93a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "61a50bb43c29d4ac111cd04cc5cc9c25"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "9349a9e179ef26e7f4ba7f031d67c645"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "1b792f8b9d4dc3cca60541614550b887"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "bca3a058b85a250626c92f26fe002ad8"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "83e200ea64da0341f0009e870019fdb4"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "8dcea2a05472da5e004f00e5d5ccad7b"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "96ba3f4677ae7c0b1007052df7cff703"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "7861d155e837e39b22c593affc02bf99"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "e0eaa6319ddd5c8a7fcf3a2e8557bb65"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "da9941c8dc4594a9c7ffc8ae79064c36"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "9d0ef77d6cfd87ff1aaaa78a5cddc572"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "f1603a2c1f44609d4c53acac0a50c4cc"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8bd9229c19f7df40fa6132ad072c9c50"
  },
  {
    "url": "basis/os/index.html",
    "revision": "98951175635d7e0c357e87a721c57893"
  },
  {
    "url": "book/index.html",
    "revision": "e8abab28c2ad5dd0dc1e7688e0922262"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e1abddb116a7f37be49b8f0da517ddb3"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "57359fe409528d7600fa9dc4d9268ff5"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "4cc88f8f19ac0a7137bc5139cb956c69"
  },
  {
    "url": "c/audio/index.html",
    "revision": "2f1baee6084cef14c06a7b0e507f47cc"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "c30434b2721babe1ca8d0b9bda100d7b"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d1c340ee9b1d8e9aa48bb2ab0a31bebd"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "4195b01116626721486c591772f6547f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "3d42b019575acaafe60fd08501f25c46"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "371b246d3dc6872e5156fef64553ebb3"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "7b7dfa1b3a6e41f3f2372fd7ed962ba1"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "88b0aa03ad74a061557a44197fc5573b"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "531832a4f894c5f85359967f8ef46592"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "1835b4596d70c693bfb4da54d002fa13"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "e77be0f58b8e57251068c62d917605d2"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "3f07a83a4bd24c4c1cbc1aea5844abae"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "72b9b7b8827396dbec724be6717d9ec0"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a2b4a4cc1fd94df08d6658059701ca1f"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "bf3058ff0e489dea0ad663bcaf554d59"
  },
  {
    "url": "c/program/index.html",
    "revision": "0508d7972acdd2a30fc17d9326f8a9f6"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b9a8fe3f81f75e64fdf93d33cda11fb5"
  },
  {
    "url": "categories/index.html",
    "revision": "4cf565d18ce554b105a577a667419310"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "0024cba2930c19ec8a3267c948bf56d2"
  },
  {
    "url": "figma/index.html",
    "revision": "35825dd3df16c87edb587fc72a524b51"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "13fd14927a994769e5bd8e7452f02712"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "d0c4468d1e7179678a6588a9169fe339"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "80c97fa296c85ec7d4c53cf282dcd782"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a18ad1d82eb40862bb9b95359e598941"
  },
  {
    "url": "flutter/index.html",
    "revision": "879978dd2617ca25d7801bf866f75055"
  },
  {
    "url": "flutter/point.html",
    "revision": "8b7af7cd2d8ca0d8cc13af3eac720ff4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7ba9435487eb00c7c64529143c37d9c4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "964713b8983917dfcc9661daafcf3290"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6807f44d307b2191db90c7b57cffcb6c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b8ca6bbaf5fda92e1563623c52de44ba"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d8d001919e430ce00b8949c6d907996f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8bee5998bf972fac004207d0a45b7282"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "7b8bc153d7db6f814a35c0f1a4d9d18f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "f035c49651c41adbd34a62d7012ce6b4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "376834dbb15e465885ffd013379b8a0f"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "7b768db15478536814361b1996bff93c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "68401b25010fde25ec2fe0aeadd23017"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "715800a27ecd5bac74c84952ee6051a1"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "db8d1b8b2a64451cc92608fe407fc093"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "8f7fa5af199292f4969f01566860097c"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "b684c7131e05393d8232ff8a2ed733a5"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "f04a47fade55acd0320699c56647787c"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0a9b32b40c6d2dc965704471752f4051"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "b16d684f12b141c9e5a22eb44deabdb5"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "03767909ee66c6b375e67f94d55e53e2"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "c85fc3dc110e5ce59a6834b98ef2fff5"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "fc5198014d2783e7849a3ea5ff7f4afc"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ea22812f41c518a6aecbb9eb9828f902"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "bbdd10813f2f401defce758555e83851"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ac5a7427c5d4dac8110aa91f51530df6"
  },
  {
    "url": "haskell/index.html",
    "revision": "d4e191f22d02c43a9078be746962dfaf"
  },
  {
    "url": "index.html",
    "revision": "7b205c992eea2bb481f7e44e1bfba22c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "119bb75da2e087c6cd30f1f136039893"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "2d9ef7124e56a1cac0753ff998dc0b63"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "13930490777cc05391d02b4f6d8a678a"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "66bacd12cf147356bdf87fe306668164"
  },
  {
    "url": "python/index.html",
    "revision": "d8d9988418e959772a267088caf8d290"
  },
  {
    "url": "python/python-ase.html",
    "revision": "918c32ec88353b317ad7cab6cfc688fb"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "c0a754156b462620fac0d3bfaf4a75ef"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2fdc49e2fa4d0ed479a931cd80bfafe0"
  },
  {
    "url": "python/python-file.html",
    "revision": "879f33b26e582170a05ad8fc04996cfd"
  },
  {
    "url": "python/python-function.html",
    "revision": "2388ed894bdb79c66e553d9d0cc21fc5"
  },
  {
    "url": "python/python-generator.html",
    "revision": "ae244a5d5a5fc5feccb5ecdd5f405a57"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "259ffdc3fb5cf08692a642f46c4a98b6"
  },
  {
    "url": "python/python-module.html",
    "revision": "d82c5dae9af3840b485fa64c2c6ab30c"
  },
  {
    "url": "python/python-string.html",
    "revision": "e77a4c78f769341a3b22e1099528e2ec"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "773f363f26299d0d663f9500e43426b4"
  },
  {
    "url": "read/index.html",
    "revision": "c4ac2d84459e7aa9b1f88916cb7ee033"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ab731b90e9b448d0b986571137f4caae"
  },
  {
    "url": "swift/better/available.html",
    "revision": "64d6e3bba2c5ccc968d351944d4aec2f"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e0348127fd73ed0f80f53e1af47a7a62"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "799ebfd8dfdb580146b0009a36cedd26"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "5e1cc230602373308d16b6a535398d12"
  },
  {
    "url": "swift/better/di.html",
    "revision": "6a20735b761f17164ed2c428fb62df52"
  },
  {
    "url": "swift/better/index.html",
    "revision": "5bc3e1c1693c9b7943ed426c5a6e3554"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e6957192ae44854e3144a57396cacae3"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "df6957d29497d279c53612364eaa42aa"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "c8ee453c758e9c50b85741b9c2ce47ab"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "661102561a3ef03a5aef3d1a4c9fa154"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "2fb4a6671f8265be115c163b46051b4a"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "7f4a3c2a2d0d1addc0f6f7943a25c502"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "30bdcf91ed952961d18fa7e773d7cd47"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4ffbd4b6db460e54a7c3476780e52259"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "18f53541be411a8917e12ad9746e2b4a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "f3d5a9ce31d8415ffb3475cd29da4d9a"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "82179d07472622be064f571a10adaaf0"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e11aa9e203a68a1b740119e8c4e678bb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "1176ab252762b649ac02f80f8dfb1d24"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "3786b137b14a77a4c0e3715c7b22ff7b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "d8303c5a3bf802f6183392c282f04b01"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "6343ca634986cf20e8a56709c2be49c6"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a7aa22fa645642c4537dba305b16e0c8"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "1d0fd5f2ad12da40afadb3bbc227cb7a"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "eda12e2711f12919bcee01a8be866369"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "aff5b86229eb179978d6bf82081875e6"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "a95dfc4b4842212ddf0030b66622897f"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "1d7ae52895e5ce90ea4ab6786eaab7e0"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "d7cdcc861091e4d887264693b55dc496"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "a0a478ca5f2dd5f40d140f071541bf2a"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "6cf01e2aa3c5bc6abc666f57f8119671"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "6c7f7d1d63276dcb542247741d791d3a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "79414f86bb57307f78aefae30bf31e62"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "2a5223af4c1897d05f522eb99356ef9e"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "503c330bdf8f1a960ec05c9914de0b8b"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "d57889336430a924ca1b433a920266ce"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "9633253b20f948ccc26c5f6a29e6195b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "7b2306fc08df0e75634139907aced887"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "8d98cd987e1f2efdbe06e2aa5b8d9e5d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "1f262614c6c57d0271033fd6e5168f23"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "aabcc35348fddfdf00f93ec550830f51"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "d8d992131f7194a8bc3112dc1049ba53"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c1344707b7ae10336e0afad357f0bdc1"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "729fda7107025c1166a7a4ac3841fb43"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "cee780b8114c8bedecf6b6a2a917aa85"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "37bf3e49391bdaf177450666b24588ff"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c6e6a09798e8defbf8e3f2fcca8162c0"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "1fabb015d1ebb0fbc41b2b999effc148"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "e0872e8f47c9fdddb21f80492ee0834e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "54764344529e29dd5138e18e7fafd456"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2a549754fcb1b224cb31b5144fb4fa73"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "646ebd759a9d3de87da9a13327a44399"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "002d69d9efdfe6e42c24ee4b122192d0"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c7985499b772e85c3a48012edd937ef3"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "83b5c9126bc6484c65ad20b7ec07a641"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "718f3b3cd2abb48f0dce5ff461643e28"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b2723441ea9ea17c36c68d7506d5c596"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1ec608c5d950195310e1f047c517eab6"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "29bf8df86aad9df4f5d9b993ad91fe32"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "27c49d1f8ce6e6c517a039cac1167edc"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "fdd50829b238e3d439dd16b1d559a78c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "7dcfd6aad052efbc0b6ad55129a8ef55"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "c492bd6ccd174c321c1ac7471fad8455"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "eb9c7666bc834a24dfe31e8a7086a45b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "81c1c497921cc3c71dbedb189e8ed5e0"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "61853c433636ed937d5e4f4f7205fb89"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "3ef6b9a468ac88712afceabd4bdec220"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "e395d4822705f61f51a4a9c8b7a02b4c"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b8f72817db7f4e5a83ca2cf2af7a0502"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "9ca2d3e7b84b4527dace871d8a5693c4"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "0cd39ea29a818d7200e219d96a036fc4"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b913ee27f97b61666b2c5eb04781ca8b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1b95f7cb4bed75181c469569d50c24a4"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "a0f6b6608e2c171dadecc0470b342e03"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "55d9fcdc5fe02224aba23dd4858743d4"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "8949e9326666bb25b1dc653ae6208638"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "3a9403c6f2f0a225e2520dd1cf2c02a3"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "7ff7fcdb8c4c8cccb44a312aa4d85f0c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "4b2ae17757d2a41b43c9d75fd400435a"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "7a0941b23a6cd7f98efc322f8a5ed317"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "4aed44f8fbca3a618f47a723ebb4d89a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "c3856b7f599a00bdf3774dd951ddfa36"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a8d51614fed94b96294bbf087cc54945"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c71a2fa1e35c18c4ca033ccce8f4eff1"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b79ae2c2a951a246cbb37f41e3fcb194"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "ba453528007af875db11b234d09e6bd1"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6ab431ecd1efcbd3eb8cfce5836be55f"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "612cda62a22955d7d9556380f26b46a3"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "71ec0ba98c84c17ca19831e7cb13ac5a"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "f3324148a34123d89308238e2cff0f49"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9eb972c963278be420deb6222c86c26e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f9c0ca7173afeaa443db8bb04f0ff84f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "a5bf9886a505cc5dcdbb4701302afe28"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "a8fc789a747d1db3db4f53cb5f3d130b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "699cfa8864f6f5fa6209c767fa51bfc7"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "68fa3097d0c7a335ef5671d5e6f2e0c1"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c4d5fecf37f8b8bf1dc4259a5e2df202"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "155eaf27348e81c81faf973f776b3264"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9a366ff6be462abd6238420ccf23fbce"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "1f1b1db83e4ce20890759c65b9fd1f9e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a3254b360ab934f32799c61f154ed2d5"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "3f0badf3d77a2722a3ba93dcfcbed83f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "24d4107d8fa779b440a1df0569395135"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "ff9c59b4dbbda536130cd5f303a38d46"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "46840309120b1398978081061d86889c"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c149ea03bac1bf0c5a15034faa508360"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b9fe9d510d626e6c76e72a718c380ab3"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "1f30b3d688c28a22b9727880356cc29c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "5d8edcbee158714f18a7780cda62967f"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "37059160c689447809ea8709a7612765"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "20314f008d4c1abda7e769a88f854dfe"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "5d0b1b0afc401777fb6d6b09cc8c95ca"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "06b0036e6c92adf1cf7541b8db4ac1fb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "87cc9c2c8935a70d6484a95e59140dbb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "689447c3ae4eb7b426c428b29a5d76a4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "caba51002464df1de241c75a652ae4bb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b3b2d239671ab59e21729fd3dafb1f32"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6fb46d417f8a00e12c409c6fec523c13"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "725cae8aec6bb594591f5e55d545f08f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1dc67eaac07338f7e0c307fbf34d4336"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ab85c8f961e72db073f5cacc1714e3ee"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "1278709b8e5b1d8405d67e55f3d952fc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1ba006722ce9feac757d32f55f44db73"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "24840d0fbdf66385d17e0a1af5db8d4c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "84416ce23ff1a271f376152f090f3922"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "06735b6cf4ff44750494dc5726401a4e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ff999fc77d7eb560c51cbc1afa17baba"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2a97238eeb35e7040d440ad033137617"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "51f153386dd85d3ab48fc5c170697a35"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "0b87a687c76b8590761a4d62f7362f5b"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d056bc7ca5a487a8de595fbb97320e20"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a8541f0e4230f49bb56912d13af7000d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9aec28bc0da70e092d6673b8165c92de"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "b45237f33c819b7b54a15e4ae528245f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "00e66fe3f46fbd0929bf4d84f1be299e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "bc6f12277ac031df8ee221addf2ff684"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e9e990bf8393897df7ad42e3693f774e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "270d94887d42115ae9edff424892b7be"
  },
  {
    "url": "tag/github/index.html",
    "revision": "240cc989f0e3c65e2c6cdb076a5f56c5"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d2a0e244ce929f524ea5e3b64ba8f5ed"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ac6bbd5a4928c2fd6cb84329cbecd38f"
  },
  {
    "url": "tag/index.html",
    "revision": "0c8ede032a43f357bf03d7a8c5b6f5de"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "99bde88d1fdaa0c18eb30d13218fccb8"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "fc945933d0c79cdeb870b90d7470a1d4"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "7f258cdfc7ef81fefc1adc7f59c219df"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f45807cf8f329622320f8115a39ed6d9"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "fc27a01d43f563f45f992d30627f0344"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "f7f0b7b4a2e255d67e644535319156d7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ff9f7f95194e117e1c91e47e84bcd82d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "c9a5eed1a21d34621a7cbb2fa0626c82"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "117001bf1606ac16a33389b0aeb8e7a2"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "38d36721a30e3c7ae86f5f2c2237e47c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "05ef348beaed840d5ca1d4d51e0a4a47"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ff57b3328a27e066a65edfacd4706641"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "c44dc4ff94cb30d7be75168c7721f638"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f6cce2bba247c2c25d12ece963b9a045"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8d3c6a8bb62efe2967af58bcc093df3e"
  },
  {
    "url": "tag/read/index.html",
    "revision": "0ba543e20130d18b4379ed27d558ea30"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "9b8c4dfb378460fd5a0fb4b14d9804c7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "1da8699277237ac6b6ff0bb56bd3444f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "9c4a0823374b589c65a032dc0cd0baeb"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e29486a1b2381f49905e60189ec36482"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "aefd31ffca8b3907c68fbc6c12cc9b95"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "1f29c81e8b76ece309bb62b412c203fe"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "3b1a83192b9c3cf5ef160ef105f87c52"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "6140c0bc2a730cfccf2a951f3773a500"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "7b820030b32b4dd4b1b7923bbe719134"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4b16dc72c4ba1b44073bb6faa54b62fe"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "95ed279e4c2c9ccddc35e32a4d55d01f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "07a1bb0f1b06d93cb4cf21a7c7045692"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b212cba65b6c62195158efbf021572b2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "bf7d4845a727a7faae1004c948e525b6"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "421700d437b14d71ebcdd488ef360a94"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "573d591809a9baf4025724461d0a7f03"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8967e9eb2bf9725b010364fc9a95f8bc"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "aaac0de77f2a5f79e6288cd608c820a4"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f865ab3280a481ed752c72be1701b452"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "00f4204a00dc07dccbfebd9b61421388"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b1a8d800470416627b0f5f7550bd147d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "56eb97b8a2553c4715068df7c534c031"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "14b6d2266ad5f8c63afd6cff7f3ce83b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "8952b84633808d470e2ecedf12f8dd55"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "fa8599092115a0f8d9093f35733375e8"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a62d3b49a3d0f0768e28f9bccaf693cd"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5f3dbd45f71c9022c69b6dadea83a397"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "fbf390e3a366128335adacb786c9eb40"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "d12ee4202efc90d2c5532ff2fde67c26"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cd30e7a16dde7c9cd2b218506f7b756b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "11776d1c04811c34f46c5ad3cd5f05f8"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "8bf895bf70e3a7062f79f30fcff43b6f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "cddaca9ce2b1480ead12d18d80a07d95"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "fc5053e9684e956be5f760d283ab5849"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c3d7f8c6d8ad33557b1de5a434b57dad"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f612ca1ada20759d00035c1b15ee315d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c2915ee07afd45b80d464d0b1bfc871e"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "04513da095e754a8d2e89b1cc30dadb3"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "4c55162446f6284c2b5403c5e37dd486"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "48bd65cafd314126f27d9fb47fd1fb94"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fc63c7b11fedd2443faf063f0ec35ea2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4bc6d50a65b33931779ea662fcd29a1a"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "581ed403a55cb782b09a23d1334d7269"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "99e18a4ca7a3adfd6786caf41b83c6b0"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "05f3abeeb063c9e9497fb417a88e7d18"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "64e5882ed6154cafccf6d04e568486d1"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ac14bb139bfd5de23d15b56817837dbe"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "45519793cf150d466c16b64fef81d877"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "919111b3054be827056a3e7f20cd99ab"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "774474c52b8b9fb2ea2f013389f2295d"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "3531b3299efe0fd1f990b14331605303"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1762d4c9f5fc326dbf83130379fc782e"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f0adcfbeae057b46827ad9da3099b74"
  },
  {
    "url": "tools/docsify.html",
    "revision": "ecacd77d94b79c513a4a26bcf064e4b6"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "6ee9cb6f2b8d25989a12f23d8de2eb4d"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "4869912c905a26f23d5ded03f9f8171a"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "ed3a9de3a35098f29b9890d06ef57eb1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a7771b934d9818acab2f06258bdd7c24"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9bd2bfc3638770ac138419fe24608f38"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2fc143ff2bfcd5fcf4d7bf66591503a5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d1e7c165e2c4cce18cda531a79b37c2b"
  },
  {
    "url": "tools/note/index.html",
    "revision": "b6b5263f8fc878a80b3c6d1b915a631a"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "90ec67c5044bf543fd543e1ade245cad"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "863432d7a0c11df5dcd6b723db2aa33e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "ffb68f3a7a8a2e7a71df89f2e4f2b3ee"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3a14a64012c3493e29c322fbcda71d74"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "4d3ca3c401d2cc06d9b70bffed65ffc9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "edb50368c0edbd20d90b0bf40d84d4fd"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5d81d0ba774d097374236de1b6fdcab5"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "41823c079db829bc3211e635e593cd38"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a90d506b901448aa6f64e2775fe52bee"
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
