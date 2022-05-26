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
    "revision": "bd04d3cc87476434a938e09d2d7cb96e"
  },
  {
    "url": "about/app/index.html",
    "revision": "b4e65b6722a6d85cff4df7d14302c528"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "728c40255786e04d7998bfbbdaa96c63"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5545d11a53891d57492488dae07808f8"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "0079c6031f663b2de2f7e94b37388f5b"
  },
  {
    "url": "about/index/index.html",
    "revision": "7e135cfb703014c0e8052be30ce51447"
  },
  {
    "url": "ai/index.html",
    "revision": "2f46fe8a34ab5f8934c83a7d9dd9c07a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "e49662ddc0be3723c7bf39b23f43cb58"
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
    "url": "assets/js/117.96c165ee.js",
    "revision": "4f38c7a33ef0fc3879e0f5b9a1f59130"
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
    "url": "assets/js/121.50cd9bba.js",
    "revision": "330ceb57a774f07e6fb6448f2f7048ee"
  },
  {
    "url": "assets/js/122.46c27d3a.js",
    "revision": "9d60b689191414d8d44c7eecb07f71b9"
  },
  {
    "url": "assets/js/123.85721034.js",
    "revision": "6c0359bd6c0392aa94e660ed096725dc"
  },
  {
    "url": "assets/js/124.82ec5407.js",
    "revision": "9bdd6663f5264a671b039d9d0a0b0954"
  },
  {
    "url": "assets/js/125.5d42d4bd.js",
    "revision": "d50e0c593450decd61e805a501d4b293"
  },
  {
    "url": "assets/js/126.706ca07e.js",
    "revision": "1e2fd52cc63abac2c6a26d23ae2d428c"
  },
  {
    "url": "assets/js/127.7ed569b1.js",
    "revision": "7543d1fceffc82a1abdbba2bfed8e0e7"
  },
  {
    "url": "assets/js/128.42c0f963.js",
    "revision": "29b9d9403e9b6af295ad5b7d77f8ce9f"
  },
  {
    "url": "assets/js/129.2107532d.js",
    "revision": "b4b48c92f4c35c39ddb730eb27049cd9"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.8273e57d.js",
    "revision": "e9a5912428b3dfdd630c962f45687d09"
  },
  {
    "url": "assets/js/131.ba8376e3.js",
    "revision": "f6104bf4465a15fc47bbd4915650e952"
  },
  {
    "url": "assets/js/132.4767044a.js",
    "revision": "1a2ee76d8a1b9b952f13b7fc249f124d"
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
    "url": "assets/js/135.21207a47.js",
    "revision": "36ed536982828cb68c0c359af58642f1"
  },
  {
    "url": "assets/js/136.e6d3466d.js",
    "revision": "c08ada1fa12329494618dcdcc7191096"
  },
  {
    "url": "assets/js/137.26347c17.js",
    "revision": "6f38f8a9073a8b9fc6644f9bf6fa31df"
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
    "url": "assets/js/165.236e352f.js",
    "revision": "e7afe3e2f3034773e8bb70132732c2fe"
  },
  {
    "url": "assets/js/166.74b72319.js",
    "revision": "69638a87ad669289ce7bb51ca30e7f64"
  },
  {
    "url": "assets/js/167.c6bbca9d.js",
    "revision": "96b5e7aefc3e7de62cb386c9d91a8db2"
  },
  {
    "url": "assets/js/168.2c62cbe0.js",
    "revision": "30a400653a936ccdbfb895f822f39bd9"
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
    "url": "assets/js/173.d3e9c5a8.js",
    "revision": "91de99f0a97983e8310d2a37ae1cc3a7"
  },
  {
    "url": "assets/js/174.3594de42.js",
    "revision": "83d4aea98317bc6710c0aec61390e7b7"
  },
  {
    "url": "assets/js/175.f22a8086.js",
    "revision": "2d27cefbbdeb0c26e37de3eba1ffea64"
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
    "url": "assets/js/181.7dd96606.js",
    "revision": "04e2cc8c41b3d8e5d4ef4f6f75186898"
  },
  {
    "url": "assets/js/182.b64f482f.js",
    "revision": "7e8576fa295520e10d3d6fc0a96e3509"
  },
  {
    "url": "assets/js/183.bcc305e3.js",
    "revision": "ceedd37ffb5c46e21476dbd0481b154b"
  },
  {
    "url": "assets/js/184.42ac1af7.js",
    "revision": "71a0c0a36009cc29294f46043f9e741e"
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
    "url": "assets/js/212.cc47e3fa.js",
    "revision": "c7766b198165431705f42a76c5222d8c"
  },
  {
    "url": "assets/js/213.2fb73a78.js",
    "revision": "7a2c8dfab05bbf848bc9c0f9b776bef7"
  },
  {
    "url": "assets/js/214.8049b076.js",
    "revision": "977039c0004734718fefad6b80158613"
  },
  {
    "url": "assets/js/215.860007b7.js",
    "revision": "fab6e398ad0a6707c02d200702a5c4e7"
  },
  {
    "url": "assets/js/216.9240ee13.js",
    "revision": "6b0d2f5c3d0aa9a5616969475f4e72bc"
  },
  {
    "url": "assets/js/217.d9295310.js",
    "revision": "7bd826abf85f0d66b2c025c2e0c42c79"
  },
  {
    "url": "assets/js/218.1acf2260.js",
    "revision": "43b097c92a6e178ddab51d010135e541"
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
    "url": "assets/js/223.ba41d55a.js",
    "revision": "030834aa5d9fe464233d9f46cd1a7c7f"
  },
  {
    "url": "assets/js/224.35fea22b.js",
    "revision": "7d99a5c6ce23a8d27162cdc8602fe684"
  },
  {
    "url": "assets/js/225.08ee8856.js",
    "revision": "bd3076e005f7b95b544d36f1deedac08"
  },
  {
    "url": "assets/js/226.2aee7fea.js",
    "revision": "8cce19cd47d1f5f4f27a557da3115c8b"
  },
  {
    "url": "assets/js/227.e7583e56.js",
    "revision": "f1abb44a7fc38fac23c3a3772fa861f2"
  },
  {
    "url": "assets/js/228.0a5a5d28.js",
    "revision": "e584608b4d83a03aa94fa4fdbe48c866"
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
    "url": "assets/js/231.4714be2a.js",
    "revision": "4b9e4432c35f3beef9896ea9a3ffd3f3"
  },
  {
    "url": "assets/js/232.200bf2c6.js",
    "revision": "41279742d854324b2ea00ba816dab6d7"
  },
  {
    "url": "assets/js/233.4410bb7b.js",
    "revision": "a113ff0680464db16a9a14aba024b21e"
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
    "url": "assets/js/247.61a9cac7.js",
    "revision": "decb08cbeaf2c5e5fba4cb2960f23fb3"
  },
  {
    "url": "assets/js/248.ecd2124d.js",
    "revision": "0762c50142d9acb67a03b1e9ba30a4d0"
  },
  {
    "url": "assets/js/249.062463c3.js",
    "revision": "bb81eb043b42df1518392dfff551c909"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.a37a9540.js",
    "revision": "70d2505d0cf4b5eb3412d60ce1a8834a"
  },
  {
    "url": "assets/js/251.18a182cc.js",
    "revision": "984c15e563fe62bea173958aa20e5c35"
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
    "url": "assets/js/254.53b79eae.js",
    "revision": "11625f05434fb5de11f178a2b2a1a98e"
  },
  {
    "url": "assets/js/255.aec6c766.js",
    "revision": "437aeddfea97fc9026e179d6cf785a80"
  },
  {
    "url": "assets/js/256.21cf909f.js",
    "revision": "934f79c854c816495ff4c7cf82c48b59"
  },
  {
    "url": "assets/js/257.7c4435e3.js",
    "revision": "5f59203b0d946997477ad1a214f37553"
  },
  {
    "url": "assets/js/258.cbf50f7d.js",
    "revision": "ead14898012674776c51611e9c680bcc"
  },
  {
    "url": "assets/js/259.8c136693.js",
    "revision": "9721ddcbc8538560edb78946e15e79aa"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.4de2c673.js",
    "revision": "cce838ba7e76a46b1adab482fdca3924"
  },
  {
    "url": "assets/js/261.8d7f9f70.js",
    "revision": "2af2109d477e6465852af5c6c5d22c93"
  },
  {
    "url": "assets/js/262.1e33764d.js",
    "revision": "172653c4b70d90d0cdd336c219facd83"
  },
  {
    "url": "assets/js/263.ddb9edfe.js",
    "revision": "746600d892484e332d04c8e68c4b49bc"
  },
  {
    "url": "assets/js/264.4166bcdb.js",
    "revision": "3c6451cc0d5ab6fa7551e4fb87bd7789"
  },
  {
    "url": "assets/js/265.412097f1.js",
    "revision": "4f7a3101438637a2ee64b7679047e3fc"
  },
  {
    "url": "assets/js/266.1ceed0b0.js",
    "revision": "de745ddab153aad8f77cf69da04dbf53"
  },
  {
    "url": "assets/js/267.d01de905.js",
    "revision": "5ac8d5e801cac7724bca4e4e195a1b76"
  },
  {
    "url": "assets/js/268.88ff0d87.js",
    "revision": "c31e72638babd8338333da1d5a2968af"
  },
  {
    "url": "assets/js/269.60713451.js",
    "revision": "167e1cb0e494c6fe282d3a80aa8e84d6"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.5a206905.js",
    "revision": "da41b4763a6264992865084bfc713e9e"
  },
  {
    "url": "assets/js/271.f68dee89.js",
    "revision": "12ed1d42d874fcb7621ab3947c494b05"
  },
  {
    "url": "assets/js/272.5b4a0531.js",
    "revision": "9685a19baa10b2217e5ecfe3120fe848"
  },
  {
    "url": "assets/js/273.f6e9c21e.js",
    "revision": "0671eb12d778c122a34dc6b62b2d695a"
  },
  {
    "url": "assets/js/274.f472272b.js",
    "revision": "22fb0b3d734bb4dc640fda5ac62a69e6"
  },
  {
    "url": "assets/js/275.073f55f5.js",
    "revision": "6c09d752346a11ca44866056faca440a"
  },
  {
    "url": "assets/js/276.f35f7748.js",
    "revision": "dc14c04d2ef4346db381e7f05d86321a"
  },
  {
    "url": "assets/js/277.803223ae.js",
    "revision": "6e8b7c6f9f62a26bdd4feca745759819"
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
    "url": "assets/js/app.02d0cefa.js",
    "revision": "10311accdca57484751084cb15802aea"
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
    "revision": "6a11831e21f5ebe5a3ba4d86dcf8caac"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "40a435b5ae5d79835e5870b7b27a1bb3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "aed39fff41ec3987ef51e9966c3856d0"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "44d5e49a81c699536f267dc3a98c5a03"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a4a8eeba7396e3d305bcf0edd4cdd864"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e64265e0a7a2393aa746c8be0a736d6f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ea6b2e154f9c2edf6c47eee585301ba5"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "fe301a953a8244fc18b2c99a340c66fd"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7504c6ff931ecfc16aaab0cfd1596e92"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "417abd9ea9e81973e26d3b76e66d036f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8289d85096c0337d5e6b53fa59fe430a"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "bb142b18d5a4ccdbde714d4605e32758"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "51da5c8e2b80434c1dd7ecf05e5b65f1"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "ede29f6aea50d220e4059f8e006d3102"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "df78783e859ceb86bb7d1522b277c3ba"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "236258b9a03a1e32ad419eeadcca9325"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "bd669761a2b04bfe453c232c9504bf66"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "5f7c8c154783a0d1acff813b4db3ff8e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "06325d08586a616ab70132bd41516b91"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "58caeae39f225f2e3e7eca1192818a7e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "91e24321c2915cfa1cc3c8bcfcaf223d"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "cd4939399977e31a45b29ce823c61457"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "9710ce75f7e0e956c51fb3ef88b91257"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "a5c44dd4ea727e81750ed09466d6dc06"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "83a9ccd997ebbbdb6f75720f3fee087f"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "fd4d24597fb73ac31797af3e400cd3d0"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "73891941d6b784ce91c1cf3d794a634a"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "e78ac274505026f1769ba5af5e3c71d3"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "0ccc1e871ba2b902a75555ac03e9fe20"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "8f03bc3ae967ff360fcdedb7a775046c"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "837ebc86e19f0f54aab7538fc11ba40e"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "03a90ca8f7a4781b35e83b5fddf97b78"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "876b93b8c6b06798c2cd48713d905fbe"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a1d2789d643a9bc1410bdb6805a0c919"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "39b11b3f8f7fb894b3a368c5b342c802"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "2a2a05ae4772152e972b1bdfd2f7f9f5"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "dfd1bd3817774816d3f0bca18a924045"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "d0c0565c4a4af76bc51e2c528efe1b07"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0c1288e8f5f4763633b2987403e59af1"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c7c5415f7197a90ec619edcb748e81e2"
  },
  {
    "url": "book/index.html",
    "revision": "f24e9ed68b0af80b2cc463a2f5c81dc0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "24ca73a79dc7ccaefc8c76008563410c"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "a5f2ba3fa6c657519fbbf1477d659d82"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "11bd8922e31d3dc5d8757d482d0efd4c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "2744b7ad1e0fcd9eea65c985895ba848"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "b83a34ca5e85d72f71d29f0c17730db9"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "5ecebbe827f7bcb61a7d6f93e61a3b63"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "66f5d0f4176164b4d427c859ee951e30"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "edb8b968980c03d5606e088d50d3fe09"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a1cc86fbce582c8e5f72417a2ec6c23a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "5e3d946cb63a619d8b63541855f3ed0e"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "57866ef530922ad85bb60593bb248b9f"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "2a941f6dbbede234bc60c32a0d7bd420"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "d7fe7c28f34eb471350dedb67166710b"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3a957c800ca8bac43df5d3cfc61aa19f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "bd5671bb0eaa01019749e7e8496d9d83"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "16daa733591e45eede2583928f9d616a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "0a352d3717c19bfb84e6f68501127d0e"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a8a71f20ee0b83ecbdf22283252fb25d"
  },
  {
    "url": "c/program/index.html",
    "revision": "73dc40f9dab0852dd35b3cb7cb4c150d"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b1485c9717abfdf0961ff6e04c8de98d"
  },
  {
    "url": "categories/index.html",
    "revision": "dc26100c9db3c919a58df4761879189b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "9c3d0143dc254722be00d9ad064615dd"
  },
  {
    "url": "figma/index.html",
    "revision": "ab7f304055dd80dbe177d665506b28a6"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "8b0e8a3a2f8d8f5ddbae127cdea5b553"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "ffcfa0cd10874befaeb316caaf7fa0fb"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "adb73c5363316c057efe9c9f91fcb09b"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "e4e028ed5aebb3f07cfde9539ea286d3"
  },
  {
    "url": "flutter/index.html",
    "revision": "0f7f5a08c9e0584478b7ba0a60af547e"
  },
  {
    "url": "flutter/point.html",
    "revision": "8477e216cb7487920bd6a1018a33b574"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9a049bff9a0b8189bf36413038b267d0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4043c10908350cf28f30c1115f5a584d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6141d92be1376672077cf792dc4aef63"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fb061e2380aa1f91da8a83d11cb55ab8"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "438740adaa798cf521f382fd612ae4cb"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "df6b14dd4152c6c756eb3b0fa8918d57"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d7487ee1502aeb6ff3ebdddff8c67a64"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "7ecb74b1fa7006a172d15e41a81f32d2"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "25743f7ae6c4275a390a0e5be9fe251e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d66660c14eeb2f42e9c9956c2f8a012f"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "fdaa911f3348dbe9902cf110ce6b4716"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8cfc608583702f758b8f310361ef040f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "68131f5b75bd6918ee6cf325db090e43"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e304ad5cbfcf40a5697c8488e570f6aa"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "562965a9a5334eabfabd86668b278de2"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "9de9892e53cfe057772d3f16db061b64"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "69829a30dc3e836e52b4a9d68f7084d7"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "0ff1c3336e26849f04abdd70da31cad0"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "49460234962dbed1e7716606bb3187c9"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "fde5855738ee425d9578e603331a2201"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "75cdeef1b975f3fbc3c254f36c883ffc"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "15f0ecd1d1c499381f3ee3a1fd42d898"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "85a1c41306012fa0c9f18fa7c2b57ba8"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "618da31eb6139111b0c76a0d70e99ba9"
  },
  {
    "url": "haskell/index.html",
    "revision": "4d3534ba26a32120626cbefe26e9cd2a"
  },
  {
    "url": "index.html",
    "revision": "f788d259e581278bf6de8eaa7f28dd9c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "0818686642312b048e734753e4051139"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "94fc21c5da02207e39f2e30203e34029"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "6b4fcde31a455b0e163ce21b1ffb6ee9"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "067e861548af3d4ee6a55ad0d2422f94"
  },
  {
    "url": "python/index.html",
    "revision": "4f4caa9d3b6aaecdd1c4945267930a65"
  },
  {
    "url": "python/python-ase.html",
    "revision": "8d7882990542804bbdf4da1c70b68add"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "bd8ad0c7d88346588f2bd41e3fd98553"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "e6d231a4ad38495c3904f8e44a7b4804"
  },
  {
    "url": "python/python-file.html",
    "revision": "b2e911ef822345291fd3216d2f699c2d"
  },
  {
    "url": "python/python-function.html",
    "revision": "9fc7ce3023c63d4c98385b358aa6aecb"
  },
  {
    "url": "python/python-generator.html",
    "revision": "97feb77ac6465e582ca4d8dccb94243a"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "efa8d9f1d5078a341b1282d5f628a40f"
  },
  {
    "url": "python/python-module.html",
    "revision": "71cf95acbfbe0bdfa336cf23722b2c7c"
  },
  {
    "url": "python/python-string.html",
    "revision": "0f44ae9083110cfd3ef5ecc725b8bcf9"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "77c7c09d0267c97035c8e99c0ef74334"
  },
  {
    "url": "read/index.html",
    "revision": "941c9741c65db764da3cefec9ae01b6e"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "dad99b685b73392485720a49c49f7398"
  },
  {
    "url": "swift/better/available.html",
    "revision": "e3d8239cfe766c27abd53f633e893d7c"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "67f2b3e853503028a5687533537e40db"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "d85778cbdb583ff4f6177444217f1d63"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "a3729535022a0e298e95ef1dff9dbdbb"
  },
  {
    "url": "swift/better/di.html",
    "revision": "22b2928886594bb5dbb25a14749fd77a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "3d3b55c6119d95186f271953660cc5ce"
  },
  {
    "url": "swift/better/last.html",
    "revision": "97982a7e38f87785fa815b24ec05459a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "17a6051d11fd80d0e63539e4e92d1a62"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "595fb09bca86985c57156dd15cb0d54f"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "6cba9a5bd7c5cbee356146268bb28eaf"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "aa98586de7e17c941067ee16ea0e7ef3"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "cd63ca949ee57158025c3ca3073b1ba6"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3d95050385315c457d4f016b55368a21"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "477370538a65c9b0532675a6e275dc56"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "280a18e60f0ba6ba2947c55a401cdd67"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "86b7e8b982cd982a067dadb636116ee7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "4276b516c5641e434e8488f41b4759a7"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "4497ca039890e025fc06ef19a6da5624"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "c612e789ce249db77e6ed711c2d853bd"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "e445cf9f021161615586e7af0bdf54f8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "f17a7cded88b859899dd5cc6808f971d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "5824a9ac4ebc2bb706c6a964fba8d7f6"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d7b175095b36d8259f3e69dd00aa8944"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "5b41f25a2c313c05c8abdbdece825805"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "6bcfe23b5f8b9b7943310b1acb9adcce"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "af5aedea8fbb9059c2bdc669076c423e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "d5a83b41850d0d62dd36a8b5c869316a"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "12b00d338982ddfdf5403a5ea8637859"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "568414ba1dc4d9bc268c54a6a88d4bd7"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "ecacf90f71b179f3ce4a3fc1e34e5d49"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "24b0f372648147d19bc024842ad90e07"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "44add8567d6ba6c007daa88b5531b883"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "8b9b702381eb648e38f1330a742a41f7"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "79e422d5c896a0b2b3483f574e1d8619"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "41b44540b5bb0c77889d821edee9570e"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "22fb8084840665d2e2d42a7b31718673"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "eb3c4f483f5fb5d98e9e200384e71f3f"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "577ff96a96856de9fbeea2cf148d3250"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "f45d506953c9f0e380debf7731cdd856"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a563180cd00568ca91b981663f1684bd"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ce990f938417337a170a566ffc245590"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9b70ec53d5c53eed6ed0d34917d50a95"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "376bd98872bc4ce5e8a56f8bd8ead946"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "4db0ae579fbe922dcf0ae7fce56a76c6"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "d0e92f3cc8499c2b1de6f401d8ea51b8"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2bda881352b740fb43be2fc91a1149e2"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "bef0e7e261af40701d340c2d18c79571"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "4eb60a8c496c64ffbb212ed1a7ddc15d"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "c51a3800d579f2867d0d81bfc1e4121b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "7a8bc2e0574a0086a57606ef31b641ec"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "fe088090dcc2b41ea3eff89fce4f1715"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "4ca35dda0e017a73ebaf50a959c032cb"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "c165bb5afea357dd4268b65a7aeab6c1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f2501a3ee9ef713eaca841b987235bde"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "a3f1bfa7357f6202979588ce83bcbe79"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "27e697f038e49fc5dd0bf9782e5ab2ee"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "9c6ee783b113ce8ae14391f6d4edaa9b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "99122c11647e4fa4252b1b0efdc181f4"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c55516ec78ece4bdeff3c6458e7ce5e9"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "501bdb67e8f5d28f39833f8218e3ddde"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "5c8cf4230db0c07b70d5503d7045511f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "49bec7d17af432b59da9baa8cf37c671"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "0526f5f5374242d77475f6a8a0aecd75"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "623b17a13a0f77a5851aa02cfa2656ac"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "0a1d711ccded85999192bd99099a53e9"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c15093035b1e8dc0fcbaa21b5a0102e6"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "643780d58fe7ad97e5d1c7584ab49e0a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "762efb280104f033a869920de2cbda4f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "02171a6b9c91b722ecbe15933580e09e"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "29a5ae643bc5b49a98041f9d2fccddf1"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "79b7b738f473a436382bc23eedc804b8"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "0713ed9d77573f6ed629681a91fc4217"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "cbf7f2a5f82323573186ac84c1b2a516"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "5f6002ba747b13f955f851a615839a8c"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "026fec203f81774491dcdbc23cc0763f"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "5d611178edccc3753cd18c43fd034e2e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "4795d2f3df6e89578bc8ef1190bce11e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ac9571cfdb2e91f7284a30effa9d9b27"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "743d784386937cea0cf8051f601d0286"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9de328ca8b5e0c9d83852f0a39092e86"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "d1ae8f7fbe55c4b8f1a29e0cf3cdb226"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "b50a6c246fe6024033ceb94e63ba1fab"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "ac6d3ac8ca6c5202e90b3b7015fc4716"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "15b5d31e01a0707bcb7c891651764989"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f5ca00e7b109d8660522a46b5fab40f0"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "f378cd704c2379b68881cf70332e7695"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "4938ea4bbacfb266ae18420f3b2c2226"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "56a1b9f1e34f35b3c24c3f168dba9e15"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "041085c9f9163918fdb45e1f940038ba"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "a062b42927c9490a696b25594bee3b14"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ad915eb43ef6c5e03ffb206b706c3823"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "90c761d4c47f5bd923a32da13b2dbc7f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "b164891e96ea6653249a899dfc5dbfb0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "8e518c4cde5ff7c19f4f19a0d9f6e3ba"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "c84418783cbad5f70285160463a5843a"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "bd09c22ad9d1fd128c1bc09e9878cd67"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c7738a308668c18c51961bfa44fa279b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "9afd8936689a50febd99f3f90bbf7ad8"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "8718f0ad2433d0759770eb73933c1259"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "59d91f351afc3bda010010d641837b0c"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "e3ec8807f494a27bf3b7bcb003d81707"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "ba24c4cee4e3eada46e23934b4469237"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "f646075041d84e27a1846e8e89e3171e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "f85ef5c916020c90ebfc0ed1292732d8"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "9fd368654cacc620e1b76296792ad3fb"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3c8068cdeeff1d3322d07461dedc2d12"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "11db5a0fdc2f71ce9b76a6d46333c149"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "e1f4ed59496a416b980c4b67dcd8a652"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "b8b8bb269fcf8ad6d61a6d29a73c2290"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "5d918d50cd34342a103222431cbc3e56"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b94be5efa2d8822237904135f6b25603"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "92d461189c32e2107b87d5befa1f3b91"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "431da10376f4cd3cf54912273d6bbb6c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "435070cdf383f245407132843a4b7a06"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3479909e16ec351a26d8ae778f5a0f66"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f72b52216510efc65938a11143dcae74"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b7fe9c52cd475801ce12aa373f825211"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "728a0c580feb89f234d6fe9ffe9f46be"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "798a66867f80d1956729af91ab0f8fd0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8a8d95916b486253ab94535555274749"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "899252b8f1d30a6269d2b2f360c99f4f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "2223872179e9f968084bafd7d53d9ae4"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "26455a11cbc623920f7e8edcd14ef238"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "34aca9a3cc8fcefd32d95b4d00b9f0a8"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b7db811945072f70a742482ca53fb8a4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4f26c2dc1585076c86ad0038584afd22"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "42a90861a058a30f0835bf5862ba5fba"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "dd1996773bc22a875e03b34eecae245c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9628e709ef6e295ef99740881417496d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e460fd500f0cea288e291ed92fbec99d"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "7fad6b03db4c93d759edbd087c137901"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "d05b14a250d1ae06c6fc3b7bf432ff58"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "04ab93fc76ab207465cccbe860bb472a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "ca303ca8d58225de31f109d97a1eb170"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "080362d66f22d8f2db44e97c7a43b32f"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "dc4314dced557c23c392063c143f030d"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "1d74e112539d11926a9fa0b3615c50bb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1f177a3b2e24518042a5e809f3a57d8c"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b7ed41257f9d1441ab864bd7f7585d0b"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "31c46cd55269467bf5ec7773ef43162b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "146774a9590a355fa589ce5ac1414a13"
  },
  {
    "url": "tag/index.html",
    "revision": "edc2448a6d5c0a6b78a08f7431a26c6c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "772159ba501c70f4a250ad0920dd6252"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "6d3154079bed989c9376c02f9ac2de82"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "27dd5252b1b1836c7c219e8c2b67c0a4"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "cfb781ffa01943779f2e63ee1b77bdca"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "812c69807b075684a314ca6b4d4b628e"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "cc6e41162debabe6fd4f56e642fc1fab"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7f7ae2929feaf7ac63e972e3246e6d60"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "73ad4bb42a44ecfbdacc5e06f990217c"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "1e2e4b583edb380ced79d4949afc6c96"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "042ea3a6d7a36eb5ed86729f7efa3c5f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "753b753dca376217fcc25eac3c0d5761"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "b5166e0a1bc1410d18f81dfe3b224362"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "fe4502bfbbd2c3d356a14504cc79a2b0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7aa148c2e4ff9616772c7d489571b6b8"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "bcc48c7bb1c5079fcbbdea4bc916b244"
  },
  {
    "url": "tag/read/index.html",
    "revision": "96f78f557f85346a8d41ee360e09820d"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "89f397ed64574abf1949062062fa5bc1"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "39df568f31f6eb4277bfe50c7d749dc3"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "5baf437634d6f4abcea42aee7ede2e08"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "179585ce3e4f4e57496e668041589903"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "4702021abc637b6a9a87ea07949349cc"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "112b153f0d3346dde56dded40901b560"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "5070074819d5afcbe1f9b1515aeab040"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "5334c7e5009a34e0644f8014f73e0fdc"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "aa862d2e4ac4c025e4ae83d68de16dfc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b8859754992cec9cdbc211bdf5f8e314"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0d8fec1e147ab0ab0dd947332bf76162"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e8ec4fe50509e6009e76ac28ac20a0ee"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "796db92c8fa378f9f4a081196aa8c278"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "bf34827c4847fd562277182c93e7ff50"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "fc703e3cfc8749b31717844746ecc640"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "13620c8ff57dc8a7b14e152db4fd2916"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "30b60888cb0ed5c9292a6bfb1dc7bede"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "024a1c11750fd6734ceef118b8ba3040"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "2a208e83006f2615ca44755830207d50"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "dc5b80edfd1bd3c94882f2ccf787a8ba"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a86aa98f84565b50ee59e943f31f2c35"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c9e7746b41039a17e040828be2ed8835"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f53435a9da4dc2de89e1bd5bcb1b99de"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "334ffefc62c41a7e37093b6065f0c143"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "d88758de2eaca71ef70b287d3872adde"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "12f9cb505223670f07e5d9dfd83374d7"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "3117ee65ffdc2d91ce1f30ea7d5bb5b6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "9f965b715e4ab2ae685bf6bab70145c3"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "77145a8904f0888775e342202853390d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "a8bfdda16e722de1b7913100abad79f6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "977e8999b543fffe06252c1fec4ed385"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1e110c9bb8c808c24a4d4255b2a64f02"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "69afd14df10a87612b51de901714c912"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "8ee7b795efd821a01013b3e4d11291fc"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "746cfa7e0ac905a5c6db0c3dbfac0ae8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7ebe504d3ea3b664cc574fb86ee75e4e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "039b0e82d5bf50b1ad08f09b720655f9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4300ce159fefa9e17c74ae21133fe280"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e62c88aa9549104fd7ddd708d7ed4fef"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "839b10361315c92a210df3d9d4a7d8bb"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "be0a34bac7f4d94082a05275f85bf3f1"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "959bd7db77a72feb76d94d00194af478"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "319e2595291187659ac660345af4227f"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "bccac5a416dfc913fe04d54424a70f05"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "71d0daf87f565c4ca2302e93c98f0282"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d0845051b7ff570113d1c935dca84879"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "36169067e5b2030bcf79bbe149370b26"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4ee9678ab9c414bdeca750c397aff611"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "47dc60e4eb51e5008ca13244fd197d17"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "ac7020537f7f3c30500222219335dbb2"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "3406b730607829a350eab56dacfd2ec2"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "6dbc5f7c4688ce8e38ef3221b9c1d8aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "bfba3a796b2c0c33ce40124ffd7e89d6"
  },
  {
    "url": "tools/docsify.html",
    "revision": "fda523466840da25f2d602540acee1e2"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "7d411f80b399de746a2ccf533d1d8253"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "fc877be79b3a647e39121bd122fc1408"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "ab5f908b184c2c9d6f0864b3a04045b0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "48621d8f4607e9abe0d77e70dc35c40b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "872319db4658645b65e86056eea91e3c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "206143314ce674f1f2f18a8c96d79afb"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b4973d5de9dce01be6c21e09c1643a89"
  },
  {
    "url": "tools/note/index.html",
    "revision": "2f77c28a316f4616c67cce502bfd0d8c"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "0554ad83af8cba41db1741611f8df2cb"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d88b5baa865b704a43b75458287acafa"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fd20c8d81b12591d2e12e8a4877f7061"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "6c87221dc1c07a70e09be9fba9d5f37f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "0f42b49d4ce023397c638df1a614df4f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "15533d93d1f5b77f6602afe2b872061d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "879ca80293629120059ee13d01eadc10"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "af32db44597c78989cd190e03cd90db5"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "c589c3d7e21850cf75e92d9f998ade28"
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
