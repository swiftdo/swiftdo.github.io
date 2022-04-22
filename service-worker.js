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
    "revision": "7044f84a3a4a74e4dad2a9356b18c4ed"
  },
  {
    "url": "about/app/index.html",
    "revision": "5da6f66695d30aab84dde67b0af8352a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "dd41eed32054c9f593906e80d0403c13"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2296ddfe94b3937227469878bcf54ce6"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "a88fea40c5ef01728c812e2c99308a3c"
  },
  {
    "url": "about/index/index.html",
    "revision": "95ebcb866fb076238ff0f688beef6724"
  },
  {
    "url": "ai/index.html",
    "revision": "ddc55ebddbcfc4ac9a6dbab1d79b05fe"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7e9cd31c97312ee61d6b96e294c1abfb"
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
    "url": "assets/js/10.d9d3a525.js",
    "revision": "764e2f98839cc1f280a9bb16b817cc25"
  },
  {
    "url": "assets/js/100.e254f05d.js",
    "revision": "29a2040f2376ca11f1be5cf7e1e8a7aa"
  },
  {
    "url": "assets/js/101.233108ec.js",
    "revision": "ec2822d5d48b4e1ffd802c9a0e0fa593"
  },
  {
    "url": "assets/js/102.d023a34c.js",
    "revision": "ceef19a12254ebb3afe6291936057d06"
  },
  {
    "url": "assets/js/103.96189f37.js",
    "revision": "72fa3e17a3627d2fb33d6b50da4e74ff"
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
    "url": "assets/js/106.c74aef74.js",
    "revision": "7fe1a5456e1e2b50e935624fa50c8ce3"
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
    "url": "assets/js/110.914c0ecd.js",
    "revision": "2c0497d2ba9abc7cf4d96c016f5816d2"
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
    "url": "assets/js/120.8897e2ca.js",
    "revision": "08d03822c76b34cb5b8214de6c4be82a"
  },
  {
    "url": "assets/js/121.50fd077d.js",
    "revision": "14fb85ae96cd274e902273291e021196"
  },
  {
    "url": "assets/js/122.21d97db6.js",
    "revision": "951a0cc565e388f657823af0cd221c65"
  },
  {
    "url": "assets/js/123.dfad52b1.js",
    "revision": "ab7329d32a2943b3b7f755797f26f11e"
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
    "url": "assets/js/128.0c6ad0fe.js",
    "revision": "3bd26ddabee58a236f35cbc4a0f4f7e6"
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
    "url": "assets/js/139.f9e49dc7.js",
    "revision": "a766ef31becda398eec63ee5a98ac9fd"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.8f0f2fcf.js",
    "revision": "1f9d3bfc30c7ab51051c1b4727178c56"
  },
  {
    "url": "assets/js/141.b7f93907.js",
    "revision": "f711f45895be79046b7d08b9df0e7b15"
  },
  {
    "url": "assets/js/142.db1cba15.js",
    "revision": "f1865b8b0790d2afd767bc474d1f3f94"
  },
  {
    "url": "assets/js/143.55f5a9d7.js",
    "revision": "c516c80c7a02df04650b5f65ac9ba5d7"
  },
  {
    "url": "assets/js/144.07c09cfa.js",
    "revision": "782099af78c98755f20817d97ac19b90"
  },
  {
    "url": "assets/js/145.2c2cb6ab.js",
    "revision": "13307c112f5c3c861757e30f5b4cac06"
  },
  {
    "url": "assets/js/146.4f0f2e82.js",
    "revision": "273ae48015e5ba53311ce2cbb2b03a80"
  },
  {
    "url": "assets/js/147.59c55d9a.js",
    "revision": "3d3ba09cd35e3d79559627bb97097d1b"
  },
  {
    "url": "assets/js/148.a5c8928c.js",
    "revision": "3ef515d5511520af540d6be3d7f5c4f3"
  },
  {
    "url": "assets/js/149.b972ce11.js",
    "revision": "2b76fa01c16ed90f0597c53b481b3055"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.06e9f25d.js",
    "revision": "80c00d59d4433504b7f6539ee7dddf6d"
  },
  {
    "url": "assets/js/151.557fd942.js",
    "revision": "79877ad58aa7b66d0bd6657e13dc0bfe"
  },
  {
    "url": "assets/js/152.326a6f9e.js",
    "revision": "9dae84f413801defd37f1259c7b6d023"
  },
  {
    "url": "assets/js/153.710deb1c.js",
    "revision": "ea08111574697a7e6cb7a70624319a49"
  },
  {
    "url": "assets/js/154.5cf55967.js",
    "revision": "a78c1b5f9562f82ae31b806e0928967f"
  },
  {
    "url": "assets/js/155.c519e958.js",
    "revision": "5ff36c4a4671ada8bbe8d3ef7a8753d2"
  },
  {
    "url": "assets/js/156.31f099ac.js",
    "revision": "d9f1df9b10ae4c91a6fedce98d045173"
  },
  {
    "url": "assets/js/157.5fb2a9d0.js",
    "revision": "77f30941e9c5dc7710344f9701dfec23"
  },
  {
    "url": "assets/js/158.f2299306.js",
    "revision": "77ceb8aaa89dda1407cc2b0a804a2f9d"
  },
  {
    "url": "assets/js/159.d1b859fa.js",
    "revision": "371330bb8bf49514cdb628b1cc691ad5"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.924f17a0.js",
    "revision": "bc452f46c9379deda9c597d0ad459035"
  },
  {
    "url": "assets/js/161.4d333ec7.js",
    "revision": "81fa6ea0e6c931f12cfde16ea12c517f"
  },
  {
    "url": "assets/js/162.e13bce07.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.e0bf1e9f.js",
    "revision": "7c89625bdb29f18ea8041c3703b5ae44"
  },
  {
    "url": "assets/js/164.4a2e6eb9.js",
    "revision": "4cf8a3c9e3deccdfa742baf92e3168b9"
  },
  {
    "url": "assets/js/165.6d377cbe.js",
    "revision": "d8f6dedeb10226f941fdadb355d774ef"
  },
  {
    "url": "assets/js/166.d0a08642.js",
    "revision": "6a0a8ff7ad9129e127f5d088fbf76a40"
  },
  {
    "url": "assets/js/167.f79dfff0.js",
    "revision": "2ec1d2428088ee6358fa0713e5d6dd56"
  },
  {
    "url": "assets/js/168.5ccf4741.js",
    "revision": "e6e5595a5b9ba68d2bbef0124a72b037"
  },
  {
    "url": "assets/js/169.f8f4cd33.js",
    "revision": "323edeec2d088a6994296bc6534be572"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.900bc82d.js",
    "revision": "f8fc00fbe960855c0a8511f83521e7be"
  },
  {
    "url": "assets/js/171.43339cc8.js",
    "revision": "e0f5e97273882f9a94a2f1db311f5328"
  },
  {
    "url": "assets/js/172.8755a9ff.js",
    "revision": "85f59f55325e5bc282c6d5f3d55a3a90"
  },
  {
    "url": "assets/js/173.b7e16b0d.js",
    "revision": "5a87009e2da72ecaaac44d2db67d72e4"
  },
  {
    "url": "assets/js/174.8a181cc0.js",
    "revision": "f221fbf19d70bb118cc3cc03b9db7d7b"
  },
  {
    "url": "assets/js/175.6b570894.js",
    "revision": "e907f9e5338c6ca5a043d1e1089c8f80"
  },
  {
    "url": "assets/js/176.792a472b.js",
    "revision": "d69f7f977e0a4000e90e53e07d80e5f6"
  },
  {
    "url": "assets/js/177.b1c79465.js",
    "revision": "b443724281acd4c65f8d4e7ad9839308"
  },
  {
    "url": "assets/js/178.08683573.js",
    "revision": "04f150aed59d3702762ea852355aaa3f"
  },
  {
    "url": "assets/js/179.f2193200.js",
    "revision": "11e8b43b4f0d976b1c866ba2f89b7b40"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.3dff8df4.js",
    "revision": "2509df0c51041ac0c6ca1ac20cb9c7ee"
  },
  {
    "url": "assets/js/181.fabf126d.js",
    "revision": "6cb3eb638cb291f96bb6c558f3b2cad3"
  },
  {
    "url": "assets/js/182.12660ad4.js",
    "revision": "1a5e8382e7c48a0f7782fe8fdb87525c"
  },
  {
    "url": "assets/js/183.fd9827c5.js",
    "revision": "8c8236598da2f4074994720a94705608"
  },
  {
    "url": "assets/js/184.618a3103.js",
    "revision": "376014c802433a9a957013eed1ac38a3"
  },
  {
    "url": "assets/js/185.ec0a2b89.js",
    "revision": "013436d761e2fce793bed4bf2a71d6ca"
  },
  {
    "url": "assets/js/186.923b77aa.js",
    "revision": "d7fea211a9d971926da8a3dc65014d8d"
  },
  {
    "url": "assets/js/187.b56cdadd.js",
    "revision": "1a9a99fede046ecfe5a7039fadc58a6e"
  },
  {
    "url": "assets/js/188.c7c711ae.js",
    "revision": "9678b44153f01112450e9da208be80c5"
  },
  {
    "url": "assets/js/189.b0f04a0c.js",
    "revision": "cfbfbc5035f1f79124dff18a77a06809"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.f030a417.js",
    "revision": "5fc036bbb0cde2bda3177ff982a86d7e"
  },
  {
    "url": "assets/js/191.b5e83d67.js",
    "revision": "996b7541500d2e0d9f3bc98fdb3bda95"
  },
  {
    "url": "assets/js/192.71c30082.js",
    "revision": "b576e75e5a643762dc85aba48385355d"
  },
  {
    "url": "assets/js/193.b7b89858.js",
    "revision": "f6f212481bd75ae9dff7afe770fda035"
  },
  {
    "url": "assets/js/194.4f692633.js",
    "revision": "7625207cd7775d7d55c8d5654a397299"
  },
  {
    "url": "assets/js/195.85995904.js",
    "revision": "466a2552b7f299090adf1d9590c5ab8b"
  },
  {
    "url": "assets/js/196.35165149.js",
    "revision": "edb063ffd140f0b8ceec288f3f1918c5"
  },
  {
    "url": "assets/js/197.a1aad632.js",
    "revision": "906c808d25c9d86ef55a4f94dea49412"
  },
  {
    "url": "assets/js/198.aa1fd1c7.js",
    "revision": "5a89f6e46faf1806d3b4b68c106c8fd4"
  },
  {
    "url": "assets/js/199.53dad8f2.js",
    "revision": "66e6659f1e03852fb3874a6495a06c30"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.767d30ca.js",
    "revision": "8ff766ea937d28d037be8ec254bd935d"
  },
  {
    "url": "assets/js/201.ffa07e01.js",
    "revision": "3b560f99e08dab3a17baafd30a5d1f93"
  },
  {
    "url": "assets/js/202.eec32336.js",
    "revision": "3b19e75ebd98bf1de06c3a14f8709ae9"
  },
  {
    "url": "assets/js/203.310cd145.js",
    "revision": "553ab41b181878a0c4c111c8d68af331"
  },
  {
    "url": "assets/js/204.d6b943a1.js",
    "revision": "73242cc7badc4e16e0531467634e0370"
  },
  {
    "url": "assets/js/205.7a7e2eef.js",
    "revision": "bc5c6e17bd172b435bdaf659d04f23bb"
  },
  {
    "url": "assets/js/206.45267149.js",
    "revision": "3a49a57ea0a2524556cb3b066b157edb"
  },
  {
    "url": "assets/js/207.e76bab06.js",
    "revision": "7fc1735669279d6710cbf4043fe12445"
  },
  {
    "url": "assets/js/208.012988a0.js",
    "revision": "b69b1cf56fcb4a25e56bb743ffce5c51"
  },
  {
    "url": "assets/js/209.b7be6721.js",
    "revision": "c01df3e465f620c4eecd11228eb36a63"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.fe951dba.js",
    "revision": "dde0777f830032ca007a64f1502b0a7a"
  },
  {
    "url": "assets/js/211.24ad0e15.js",
    "revision": "d205baaba3d08e45e353299cd255fc73"
  },
  {
    "url": "assets/js/212.add773d3.js",
    "revision": "578734aab891ed8380d385b38a906703"
  },
  {
    "url": "assets/js/213.163a3f48.js",
    "revision": "47681d7a124e886e8d48b53463ecd510"
  },
  {
    "url": "assets/js/214.6ddc3fd3.js",
    "revision": "47a6119676f756fa816f26b4210cd18b"
  },
  {
    "url": "assets/js/215.c521a3d5.js",
    "revision": "a106beb2d47e140466beb27c6f75c408"
  },
  {
    "url": "assets/js/216.9dd6b672.js",
    "revision": "cf17af53d031b7895bdf1be5d8f23415"
  },
  {
    "url": "assets/js/217.393e61b5.js",
    "revision": "4b19495eac1608b4586afb9e34f4ef63"
  },
  {
    "url": "assets/js/218.0bbc7f1c.js",
    "revision": "3762bd7b23deb29532e43642831a006d"
  },
  {
    "url": "assets/js/219.0049bc1a.js",
    "revision": "09fca2836afbd411c6d7efb5b7f792e4"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.8e6c9526.js",
    "revision": "11ba88f343e76da366ddcc8b96b4a0fa"
  },
  {
    "url": "assets/js/221.149f49a2.js",
    "revision": "adfdd5c4f782d492b759ebd6b1e117d0"
  },
  {
    "url": "assets/js/222.4bcf1073.js",
    "revision": "32349582cf68477e020d8bff9b8bf36a"
  },
  {
    "url": "assets/js/223.b7caad2f.js",
    "revision": "83f17d3225542bec9c7cea8a44cc5466"
  },
  {
    "url": "assets/js/224.01fd05b1.js",
    "revision": "c421f01b4ae94e1c00b8cc973940ec5a"
  },
  {
    "url": "assets/js/225.18958ab7.js",
    "revision": "5125c48a63a3b7302be5d6022ca20f7c"
  },
  {
    "url": "assets/js/226.d12b3faf.js",
    "revision": "09c9e207364b308b23de74d2a07ac9e8"
  },
  {
    "url": "assets/js/227.507a8627.js",
    "revision": "88bb075ca4caefb7db8cb58f497c0d7c"
  },
  {
    "url": "assets/js/228.7e82b30e.js",
    "revision": "427963d20504ffcb468de6ad43dcb91d"
  },
  {
    "url": "assets/js/229.3ec079e7.js",
    "revision": "c4bcf30a7a9f6249070d41dba0640e37"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.5335052c.js",
    "revision": "e64d6db262b72c2cc8189288bdbc1f76"
  },
  {
    "url": "assets/js/231.dfd626f4.js",
    "revision": "ad5edd1c15f8fa74d8b1ec2dc0518ebe"
  },
  {
    "url": "assets/js/232.94fcc31f.js",
    "revision": "8ee795e89b2da2d407deb08cb96fbb1d"
  },
  {
    "url": "assets/js/233.11eced34.js",
    "revision": "cd22c4a1a42c5d66b33a555e25826d3c"
  },
  {
    "url": "assets/js/234.8d1c1405.js",
    "revision": "2d932d8af66ae0311b963817224cf5d3"
  },
  {
    "url": "assets/js/235.37da8a6b.js",
    "revision": "72fee6dfbf671e132c0691d0cb474460"
  },
  {
    "url": "assets/js/236.050f5f40.js",
    "revision": "25ff720a4ba0cb12b051e8a3677c4ce7"
  },
  {
    "url": "assets/js/237.65c68e15.js",
    "revision": "5cec9501c1fee900b668b4bab14d9b80"
  },
  {
    "url": "assets/js/238.084c87ca.js",
    "revision": "372c0c834cdd6f470d44803d4700f64a"
  },
  {
    "url": "assets/js/239.6d3d4913.js",
    "revision": "73ded3871c719bf1e7bd1ca17cd1caf6"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.affe1b7e.js",
    "revision": "c4dfd1b337acd03d5576d5143c3ade7c"
  },
  {
    "url": "assets/js/241.81ac7d23.js",
    "revision": "949b1eb8ced499c5b9949134d09a0683"
  },
  {
    "url": "assets/js/242.0f3abcdc.js",
    "revision": "8051efd9ea8e047265056ec92c3bf56e"
  },
  {
    "url": "assets/js/243.0abcf0e1.js",
    "revision": "b5a3b550ecf8980e3c1cbbd2a460c579"
  },
  {
    "url": "assets/js/244.e090a110.js",
    "revision": "2fc7a11313701ac9241fba66ddc6bfcb"
  },
  {
    "url": "assets/js/245.d51b1f3d.js",
    "revision": "3f72a3c3e8b006725140f5d4f0fbc0ce"
  },
  {
    "url": "assets/js/246.03095f4c.js",
    "revision": "1ec04482ac017bd25c248c7d7ab28d71"
  },
  {
    "url": "assets/js/247.030bb9ef.js",
    "revision": "fc60804f211fa025831dbeeb2e681c59"
  },
  {
    "url": "assets/js/248.417f5144.js",
    "revision": "9fbb4baee3cb36da717f46c921c8ce3e"
  },
  {
    "url": "assets/js/249.65fab309.js",
    "revision": "1b2f71843448c27faf8250347e5a300f"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.e99a9e43.js",
    "revision": "381e82f1744ed06569a58a9e1053ff9c"
  },
  {
    "url": "assets/js/251.2abf5298.js",
    "revision": "5b9f0d3c2d4ee55ba9717af2ad00f488"
  },
  {
    "url": "assets/js/252.c21bec7e.js",
    "revision": "1a5bfb09db4b4d45125553c9f632ecbf"
  },
  {
    "url": "assets/js/253.fea79857.js",
    "revision": "3417e8a597892b73a1a319bba5d1f9b8"
  },
  {
    "url": "assets/js/254.aee046ed.js",
    "revision": "95fa8046ac2864805b3d7b140db3459f"
  },
  {
    "url": "assets/js/255.a6d0fc67.js",
    "revision": "556dd2d813dd220fc4c7f21b463d9561"
  },
  {
    "url": "assets/js/256.1bfc3185.js",
    "revision": "444d90ec480c90eabcd9dee1a91b2a8e"
  },
  {
    "url": "assets/js/257.ad8c39c5.js",
    "revision": "e649f55073d2e5ba481a89e2f1af3e41"
  },
  {
    "url": "assets/js/258.09e8a556.js",
    "revision": "e2de25f1ff783ea995650d67829de3e1"
  },
  {
    "url": "assets/js/259.cc4395a7.js",
    "revision": "175aff2c1dd82fae7a877729d2c7fcb0"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/260.c0cab09e.js",
    "revision": "5579c46a1cb95c9a4a55596b892ddfb1"
  },
  {
    "url": "assets/js/261.61ad3e5a.js",
    "revision": "23fbd8344b96b5345aa1c129816f9a31"
  },
  {
    "url": "assets/js/262.18b1e88d.js",
    "revision": "d00fd80a0b6c9f1b1700990b46303afa"
  },
  {
    "url": "assets/js/263.d4f78f52.js",
    "revision": "6a550c363237a2b8ee9c37e787709582"
  },
  {
    "url": "assets/js/264.c509e992.js",
    "revision": "1bdfb999767df1538aaac0ecfad62f0b"
  },
  {
    "url": "assets/js/265.1b12592c.js",
    "revision": "2bb386157cbdda4c21020d224178e815"
  },
  {
    "url": "assets/js/266.c6a63c41.js",
    "revision": "0134149898e76290844528cae6ed0494"
  },
  {
    "url": "assets/js/267.f2f25be8.js",
    "revision": "4ebe681534d581f62201e23ea3b02833"
  },
  {
    "url": "assets/js/268.f731aeab.js",
    "revision": "b1aa6da6dbae13f7bd7e74edffa29657"
  },
  {
    "url": "assets/js/269.e2b14f71.js",
    "revision": "3f77e13dfcebf7fcfe31e379f853a40a"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/270.ccb78ec0.js",
    "revision": "8fcf9a31454ab2dd38077039ca76f390"
  },
  {
    "url": "assets/js/271.c0a39c8f.js",
    "revision": "c9319bccaf409648c2ee0e9712e901a2"
  },
  {
    "url": "assets/js/272.248248f3.js",
    "revision": "6ebcc40ffa3441cf2e07f833ef3f73d9"
  },
  {
    "url": "assets/js/28.1d321b85.js",
    "revision": "ebea04baef7a0fd7c5a2782610599baa"
  },
  {
    "url": "assets/js/29.b3a2a4a4.js",
    "revision": "b02525f7fc85a6dd045ad4ea65a27114"
  },
  {
    "url": "assets/js/30.806f0e31.js",
    "revision": "2c1bbb64a70596b49db8101281ba6775"
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
    "url": "assets/js/34.72be6ef5.js",
    "revision": "b475580d4fdd904aee2fb6ed6b80e3e7"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.fed85ca9.js",
    "revision": "3c48c254685b20bf23e89e69b6940eaa"
  },
  {
    "url": "assets/js/37.b86dd58b.js",
    "revision": "a2c979887f1e6ea6dd82213455aa5726"
  },
  {
    "url": "assets/js/38.02dda1f2.js",
    "revision": "8e5f297a369b87a1deb8f3e1b1d4f185"
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
    "url": "assets/js/40.dcf15fe8.js",
    "revision": "4f72e1918ab0a7dd276b7e7b990fa337"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.1a3bbd9b.js",
    "revision": "dbf2bf4d9d1e34951672119de548db01"
  },
  {
    "url": "assets/js/43.511dfcf3.js",
    "revision": "5f840d31113121450acdec132a0c8ee6"
  },
  {
    "url": "assets/js/44.387c2847.js",
    "revision": "0df80b66f81296fa088b5c2f00c26f93"
  },
  {
    "url": "assets/js/45.6f84f3a4.js",
    "revision": "edba111018a415b50f96812603d04973"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.0ac0bfce.js",
    "revision": "7eb7db0ff98a386b67d20542e2bb6344"
  },
  {
    "url": "assets/js/48.88acaea1.js",
    "revision": "125ff884b49d5dc6169a4bd0e65c11ec"
  },
  {
    "url": "assets/js/49.ebc9b4ac.js",
    "revision": "69a8bb2355d20ba4cfdb105bf0251571"
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
    "url": "assets/js/51.da8af6b8.js",
    "revision": "40b12615c2db3cdc507a35f716b8e429"
  },
  {
    "url": "assets/js/52.4b3c6f99.js",
    "revision": "345ab19ed4cfda55955bfe2d945e178b"
  },
  {
    "url": "assets/js/53.a14deeda.js",
    "revision": "728c11d007ed258a978c1b0df966c4d6"
  },
  {
    "url": "assets/js/54.f16fdb88.js",
    "revision": "dd88bb0fbc679f9b598c729c60c2561b"
  },
  {
    "url": "assets/js/55.d43d6c44.js",
    "revision": "6c50a9580c0763c86fe0a23f099989ee"
  },
  {
    "url": "assets/js/56.540e07af.js",
    "revision": "58e2250cf17d9e1dc74b3c92dcb045a9"
  },
  {
    "url": "assets/js/57.3de0d49e.js",
    "revision": "e2de4906baa7f6ab9d4d7266373639f8"
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
    "url": "assets/js/61.72f662ea.js",
    "revision": "690d5e8f94724d3d4ad74ad85ebaf60d"
  },
  {
    "url": "assets/js/62.7aa6c6b8.js",
    "revision": "586b76535393fee0ce8774d515d1c916"
  },
  {
    "url": "assets/js/63.364ce22a.js",
    "revision": "b46fab7e24bf8d08e70260c7db75a510"
  },
  {
    "url": "assets/js/64.d5d291c7.js",
    "revision": "d8fe05589ef7ce88ee9e8a74e5437efc"
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
    "url": "assets/js/72.5197b6a7.js",
    "revision": "f31aa23a0a30e935acea7ec8460755ae"
  },
  {
    "url": "assets/js/73.2c6139f2.js",
    "revision": "969ba5840f379fc0a9bd3989190ae87d"
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
    "url": "assets/js/82.81b4524b.js",
    "revision": "a20441464f046a8763a5ff6052edc5d1"
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
    "url": "assets/js/85.86daf340.js",
    "revision": "7e224c68eb186c00df775ad5b74c0887"
  },
  {
    "url": "assets/js/86.9dc4d049.js",
    "revision": "c7bed1919a72ba262cf8a106aa9fb9db"
  },
  {
    "url": "assets/js/87.b84e5eab.js",
    "revision": "76e1b7e5cd985fa826313831a94f02ab"
  },
  {
    "url": "assets/js/88.adc30bfb.js",
    "revision": "2863a0424fc3e3ab101e900d4ffc382f"
  },
  {
    "url": "assets/js/89.17eb1465.js",
    "revision": "87e8b7e84e0525ac1d30ddeeb838d559"
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
    "url": "assets/js/94.683bc3e0.js",
    "revision": "03f06a0f7263f754da19c70451335578"
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
    "url": "assets/js/app.7bb66de2.js",
    "revision": "43e277040fcdc2419424be314e8e5640"
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
    "revision": "3c08640f5876981ef08ef38e9ed6c548"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4b70da16b03950c0f65b34d974a36698"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "77d31f726a24333c311a73fffe760c73"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bdd4300ea8b308928a05c94118b1a350"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6e6881f5be54ef35af4348f4f38fbeda"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "aa5289441b66f82c1bfe92cf7a0d786f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "022d0928d32cac30a12ca99ea68abbd8"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "79ac782ea7121c058b2684219694a12d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b9fcfe87db5b3ea91c3a13d77a274939"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "77609887bcecf94bc266b3112f52123c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "68881620ae8feee19ddf3deab0d9352d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "92f872d8342ef8dc7e6bebbe70e8526f"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "31df6bd863ef13225723291bf4a47a39"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "3ffcd447d91ea599e790b3337215f54e"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "3643dcd783323c03eaac1197f7cc3491"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "4a83a3c463a10a52a5a3943210ee5999"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "c202305e7c0df3bebd610bde11a6012c"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "2b8a555a9fd203524e8200f1f42c76be"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "c7179e63cd435a95f40e4bec186c67fb"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "8430ff70c0123a6342fc2ec7ee79d497"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "0b52e7716246a26096881c730cea3b22"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "0162eb8acfd516a1be6244781eca2700"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "4e2470a2d94ff4b6076107fdd06a4289"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "88de0f574f06424b55c37c69d15f792e"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "3a380e8837bd3ca015268d14ed8d9256"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "45b58dd64d5f8350993ee87b34843147"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c369ba0db44ee94791cdf9cac519fc34"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "1816bd9bf924affcbe8ec3da70d1a2ed"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b7eeebeec970e30612c9edf84152c882"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "6fea402efc0eb79ef107f7d24ca14589"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "41c93206792a51325bda2dc4e61858c0"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "69262ce1a1768ccaf6069a701696c3e6"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "7754fedb8a0e8a11679472c5977b4a62"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b2416128f97171eed32b21e962249583"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "9585b2e23a52494cf680a08d3c9ce3a1"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "8f6baa1d80d057d518814bc1209cf95a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "48b5dc192fbd891895f61890d4e98d85"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "9d0d3672020f4ca8420cb7fb56176909"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ec6ace9072c7745acc77db3865130011"
  },
  {
    "url": "basis/os/index.html",
    "revision": "944e8f72764afbff624a7c8545a18824"
  },
  {
    "url": "book/index.html",
    "revision": "af2137d09bc2562af012b4c4e169dd42"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1e331f6d95830ab0761b33050523cc73"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7e3a038c70a825a4481badb267947997"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "286e84e4d3c1ad524943f8a3e4d9db46"
  },
  {
    "url": "c/audio/index.html",
    "revision": "cc5b22f8c6ac601de28d531a7237cbe1"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8a439b6a66540180d97a8d873f6e5ea8"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "46ede40a552902191dce319a5f4b7518"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "fcb4c25666cc55b1834748388a012134"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e6ab6484cf6712393e5ea81d4e765d02"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "4e13bfe2b09947fe1ef1067fc1b58d9a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "fba3fe07cf057f4b3d523e933363e3af"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c6eba15fb2ec00806e217db1b399d5c6"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "fa0a8fcd551cf3e1ea6fcb2ce5c5b4dc"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "73fa8df3f3a0c1722e4ca4c9264db1e7"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "e4bca9c846ba58b558692af0efde36ef"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "2eefee956323da78a865eb7bd6ae063b"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "282a1a4af5fb6cf5235590296c516e4c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "f4688115b8f8b8521969294911eccb44"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "b4950c32f372a954254929ee6b0fb0d7"
  },
  {
    "url": "c/program/index.html",
    "revision": "a3e9e6840ffe4258c2645bf0ab481d9b"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "44814a01ba97f9ec6b767324b0ca4513"
  },
  {
    "url": "categories/index.html",
    "revision": "b23421d4a53895733be34529e9432d98"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "df673532ce94d352ec7edff0ae6d71e8"
  },
  {
    "url": "figma/index.html",
    "revision": "b174e03905bb6bb7bd0f6a705a2f2567"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "5ef3514801bf85dfd46f5eba6d418419"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "3d2f59dc0e518e586280bc134917c460"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "2e3e60e77e01af6d42c0880392148849"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "4c289d7cb33df9275c453fadd17e907c"
  },
  {
    "url": "flutter/index.html",
    "revision": "f23112478c056cd5dc3a34af0fbb071c"
  },
  {
    "url": "flutter/point.html",
    "revision": "0468c14e69894cd0dbe5eff09d54c3f4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "34ee0b617e875dae7b77387fe3615938"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "6188aa4615d3c79a77cb7795ed446365"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "af5654355de54e12302627b84cb63dcd"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "75f2088d75c479b1617d6df30e0b3180"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "bf6eb9e4296b02455490305e03173d3a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "11b92355e5cd3c67e57dbcec832778b1"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "9d83e6d95474ea5fe1cbd24061c4e1b5"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "07c93b661e84c4352120f71281871d1a"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c48817f020069fc29b9a9685b60c7acd"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "eefb72e5f1d95f7dbed5cd8359b2cf97"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f4e9f4f6b953fb83886f6959def05470"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "b349e0f2d3d044e80f022de3212f8c74"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "71741a2173c22ff5108f9878c3f45969"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0fbd073aa7a0d2e69ba0002c1f7413d8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6d7729bc686f1abd2af8f8efc3e8e946"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "98c04068e29e653c6885948b5e799021"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "84003712e0dcd7dcb0f173c33ff7a6cd"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c47a64008909c0c715918d10e6a5d4b4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "71cbadf0e42f66139866649a24665f8b"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "9b5aae81d9c98ee0a1c23bba0364ec13"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0711f4017d185379f8fb06de389b8984"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ef6561897f817c22a142d17ac5c1d24a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "10391d1e9187354cb52dbf779b3c3535"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "785e0513a9922390f1ca002975703ab7"
  },
  {
    "url": "haskell/index.html",
    "revision": "5fadeaf37adf90997ae704a462398663"
  },
  {
    "url": "index.html",
    "revision": "4bc4516d87ec4e06bc1492b6d1a5bff4"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "9174584887363f487a809dca7465bdd8"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "133a5cafba053f7601a65ede24b95c3f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "5d1a6293490fabc4b4b8b73fa53b87ba"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "0998fbec44334af80de71cef2b0e40dc"
  },
  {
    "url": "python/index.html",
    "revision": "4897456d7c582fd4988643e7a7ef1cd3"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "bb5137a441923390fd69a6a7c32cc501"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "37dd222dd487b7360616e2800058c85c"
  },
  {
    "url": "python/python-file.html",
    "revision": "2e0b73c54046ec258514424eb460f4b4"
  },
  {
    "url": "python/python-function.html",
    "revision": "d76343b97c04e799425905e189b9d42a"
  },
  {
    "url": "python/python-generator.html",
    "revision": "98bdf0e9138545017051ba007c24f465"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "70499da4444631abb9361ca5395adddf"
  },
  {
    "url": "python/python-module.html",
    "revision": "f36daaf5fec2576afb478885b6838e6a"
  },
  {
    "url": "python/python-string.html",
    "revision": "30289e0290d00968e0ccc9e7fe645aa0"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "9dc0a5d4a7af22a647a08b54f312ccfe"
  },
  {
    "url": "read/index.html",
    "revision": "7bfa09243dc12395346a6f401105905c"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "5af85bf90c7bc93d3a3dc92f30c18fd0"
  },
  {
    "url": "swift/better/available.html",
    "revision": "340cfb4a79dada7c97c88a3838c7260c"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "8858da4785c865a51b8b72b6d9f8c1ba"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "68c832796a5305f946847fe82bccd4eb"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "8e83f069f79cebf67268e7b0083e913e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "f582e89bb42de0700063a0aeeddba3f8"
  },
  {
    "url": "swift/better/index.html",
    "revision": "06cd6c7e5cf44a3e6ba38e281996cd2e"
  },
  {
    "url": "swift/better/last.html",
    "revision": "d06f5ec4c1d5d5273bb2da473c50b124"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1a8e31161c69995845559773666aecff"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6273b6b24544dc1005b44ee21d41b2b1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "e1f5437698daed98869b6e9ad3786850"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "d099a8ad7b0291921ea2e9319f6bab17"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ff764a83f4e53b359cf95a7e59f7cf9e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "72ea112c9108970dbdb250a4c7dfd1cf"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "41c35584b2f44670f98677da2a7dd3d4"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "0e42ad765d00c4c2ab75dc66b997b9c9"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "fe954cc6bbdd4b3d4dd6a3a4663f7905"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8236b01642c54a1a986611926418f770"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "abf9cfe994b1beeef4dac263e607d7da"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "abf4b86979e90438a5383276e77ccaf2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0f69a0419367e3607a553cef95f1a086"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b8e1c1c59eeb06a2b20452060241bcce"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "02ddfd47eedb2a03478e4f493263bb43"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "886e8bc72eb91366debd758506f657e9"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b5a1654bddd5a39e9384943e04a604b1"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "820d2a94a3f965c4d51f7a07dd73eb36"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "67c7a1ebbb9297e50c71de90b95dfd34"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "a38e25f4647d2e285e138680b699c025"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "d60e527b42abac2c583a91f84296a583"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a5967b4afa8b7573a9de7bfc74863aef"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "b1c87860df2c2445df390cd6a8ed14b6"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "372a6a04d8871bcce2e975a394281de9"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "25aadc593316e51477ab1802addca3a2"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "74afdd2c7fc4343234038c515426d4c6"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "98e88261db2a9e15bfd6fc0bd844ec28"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "c76cad43162d36f2b695b5b4d2cd9401"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "5926d738e23c21634baa4b199fd2ee42"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c684c43a0065921d5805e55ecfe4cc87"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "464ca5df913a5a474a247b706a409d4a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "37a18da638d1eccff7a4266d3b8acc12"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c4339bd96c0e54ea26a944d897b18eb9"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "16491f0b2305225d65717f315e2a3058"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "5b7d16c6f017ecb473e1dddddc248382"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2342193c2810cdd7d23775dc42f8f4ff"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "7b270a42f1a1863b7135ea558340e803"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "e487de21620f74e524e184fafa7dce42"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "446aba03be8d75c65f51dec184bc58ef"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "1e38112a4ce0b5fd44059ecb84388fe8"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "110b4b77de8f428e63a3457a0e21b771"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "c6cec30c6ee43b5cc1a7d496540f3151"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "edf34fff6997277ab3ee23bd3fa6c2e1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "b6e1cb43cd9dd6680989664b6d5d2389"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "9429f5bd59668c9c34da79159f07e485"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "8abcc2626b0d2fcb03882c1f6919dab4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c4f303aa15b9182c0349ad48b0bd5a75"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f041f6c6d5c6685e1286a3ed71fef425"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "531b10d6b73347ce0c504f6c86d16d52"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "c7e873242913522f13a4432b0f3557b7"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "16706d817aa214cb566a2fe645a575db"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "b78d609f24392accc83167d67343a226"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4192fa9047e1b12f5219af1a40adb679"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "0f281cf71fbf5c218fce174d9ab9be1c"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f5ea2134497043ac7c1a457b44b529d6"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "350b71af0a5b82d722031ad005be690a"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "3e59bc8bd5b4792ab3933dbdc763d90a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "8dfaef09bda5fa104573b0e1f8c74934"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "0d2bc8a867b9cdd32e7330910d5f4fb3"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "688b963662443790f12c4dfa31b572e1"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "5b87bed17c0110a701bbb96aeeb89003"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "fe5ceff78181277456adf45b6058e6a0"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "56072acd1e8275e97b5aa4d1d2c0f95b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "ee1886fd55e0cebbee40fef600e6e722"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7a765194b541c1bc59f4f42f6ae88c7a"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "2812cfb8b6f89e425217b56e5cf8db4f"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "cf724c002268a8051d2fbf711d7ee971"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d138644fa87264af4397750842db55db"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "cc699e0b1b5ef43df9f9b3a256c4f482"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "db887ca1798a20abb77f4e76f0a18598"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "18491a7f5e78f20b75771572a7268d90"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "f2e1fdfa66e3a84a6bf88517f431bddf"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "491548978b8466a840d6d8831178e00b"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "3b06a27838beeef38a9adff0c41787f2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "66fac3701631c37ae26ca3a616a11971"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "0effba564cd028186bd467b32af5719b"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "fcfbd65b25b195c5a33638f1a3a3e75e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "d593286f594ec4bbd6a170c7f8af583b"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "391b843d26b2b2782cbe76cb85cb2307"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "830f2538ecab351f746fae2a751f9a92"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "4eea7bd1436904badc182656ab53f141"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "4e22999b0ffc66178a1cdf7f5ac7c9b3"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "45743bf1c57a9f9b6f05e46c7e4cf211"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "76eba97266aeb93c70d46bf91d8e7029"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c5eda80f5534e41e37bc2a3a4d840a48"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "e53d5c39037d29d021ef893ac846aea0"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "1f28fd07ed191a45617335e1eee29c59"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "fe6b237699f2c149495d27b0d63e9004"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "2cdb690f924b68f57e4f161141691f2b"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "fd41d907ca58f93c75362268412ea019"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "ca72dfa9c4cc3cc111850a51bf46afe4"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1a45d1223d0a77433acf709830b9b448"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "2fd5db8f5b0a48986925203b2fe7155e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "09ca8dd8950764727f1b9c8721c985db"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "76a3c790db7e43956e1897540545f217"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "780d5eac2eb3a9f2c2d53c306819dca1"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "cc84799cfa7d3b02ad5619b863843196"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "8297078cb58385e9e2da5f4f7c1862f5"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c9109e446896d5e0e26e06b04ca34f02"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "69ce532ef48f13d49929397dfa814241"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "63cce75101f4751691a171a006990b83"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f75922bb333e54b1702abfcc2454c15a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "bb852c3302576c216c118088911a1f30"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7468cc92ae27c5eb3deb37b91c84c871"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b5e5a5074568837ed317de36c58e4477"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7875b6220f27397a7b736480a4c48107"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6a93c211a2d0e3664d9cd9c9efd91923"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c24dec0b4e685d1c916c119e06eed017"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "0aab531555c05a758fb6355302d4faae"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "fa4afbcbfe95f7b91981da98eda44613"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "a7e9591d204829e075f8e57398fc4752"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9ea81230f0552bda8f2477effbf99729"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "8fc233fdeb17691faa7ba0efab2ac20c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c744a604905f1e5e7c5e692393a17202"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7891f2ff891cc61899418392423edb89"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "3af499d1e5de65e1444f2f9987ee48b8"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b78902896228ca0bfcf0e120788d2096"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "4e3cc4f7b103f858c56bc8d8b7061eda"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "c6a9609696148f68a91fb3c5338445ac"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c877e81f77e82e9911291dec3791366b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "4a3e50c619e911a8e709895f2fbe474a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "50b83fa1c379acd3dc9e4fe16646c07b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "fff8824f83b69a05189616563fe20019"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d3d77ee1a1e5f6846494bc32d5f035eb"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b07b5d884c40b50e5fa11ab0791a64d2"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9a070ac73ecee125e8b1af11c73811d2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "278a6d5d69b402e64b845b4a806ccc23"
  },
  {
    "url": "tag/github/index.html",
    "revision": "30a0baf6b04a7f33fa035f9d6747ea93"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "310931a628d4d1aafb2b06089468c6a5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0f16dc9f96bff3cc3c371551d9b17235"
  },
  {
    "url": "tag/index.html",
    "revision": "112085a760af9afd7943669925a60f6e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "353911f7b53a410616fbd660125896c7"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "ec2115c2160e32ce66dd2fb69d8a3bb5"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "95f95e4ba5924a29400c5373f673373d"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "b4853ef9e03c00713860ea17aebfd576"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "24f4b74cf40e0b5cd48542d921464223"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b1e3fc135cc7ade9dbe5d2bfbc676762"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "4e315b0b15bacd129ccdd1805061b9d3"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "057b7ad84c85aaae5ba89f7e0666ffb8"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ccf9c35919e7430f18dde119fe35f948"
  },
  {
    "url": "tag/json/index.html",
    "revision": "0b8ce203fa3af575435dae63a0572873"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f5d974ef2bac3a43ab0670293f2686f8"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "ad8c057fe03ee5b1e3215e7a319bf2f0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "99f0ff7534260893a3ea56d9d31025aa"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "0b86dfff430c0596f6d6e3ccdbc40fef"
  },
  {
    "url": "tag/read/index.html",
    "revision": "72ee3917e0185796172a705d5cb75335"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "9b30bef70ba3df883b40d316bc287374"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7b5c235c3b4c6f65f9d08daf316a7244"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "10079f45230e41d7abe2732380a1ba80"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "705b16b731d5bea410e967ab58d8579a"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "569c812d6a6b832e48b168f3a392ea75"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "3e604abb39d13cd9c60969e130d39b60"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "fd93f9722ddedd9660679ddb17870722"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "2b460a13ab083d4ccd559ac07b89ddd2"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "601237a62f196ddd3d5f563ab6de6f1c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "824935840f08f6355f08b4907eebf715"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ddf6860f4cb11c01a24868c5ba4697d1"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "c31dbbd9cac7369bea994d95e9958dbb"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "a6d3df3a8b6067ddd7dd65892677c975"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c2e86e18a1e0ac623bc24966e49f7f1f"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b9c8eddc22a5f0c4a45f4d6ceb6d991f"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "3332700df2c24c1d60245a86ea8c76f3"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "9b13ecec8d5cd2d293ce93e7a43549e8"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "cf036785e84d4fe4e7e95e1a4799e174"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ed3b49c8cd8ed4ebaa2525d28d22a630"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "25d2e3c9ef2210d52f8d01e85eb50c66"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "5cad5f752f0e3dace9fa81363141c3c4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "171bed482145ae4b8ce2103e5a612790"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "41339233b38e5eb5cae05d56ec10d6b7"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "2a1c0a4d056491fff5d5a4f90e206489"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "9dbf710e5769fa00343dc106997adb05"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ebd5cbd93ef2547b617c69eaa41e6b00"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4e9d88cbf359b188730e7dcefd802758"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "ad756b0fb0411fb19d9ced2794048b38"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "b0ac8d8bb7e84be557fea2576c6b9e17"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "13ecae961b2c7007682775146371c588"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1ef058e4f3c87787f97d91b76c377956"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "b0f7f1115aab3e1e5ae4b54a1f78ca23"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "811a05e1ef4ee97d7136b3753e03d24f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f6bdbc19b21aac840ada06f0302a7cc4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2d0737ac73565b9169294fa57f01bec6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "91ba718a90c2d1afaa2b578ca47ba17a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8ac5f736a9ec25347dd3e8066ac0e36b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "48acbc7a386ffe2d161560df01cd87a8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "73c89ab020eba619631666fd2539fac5"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ead3744f890006b8e7dc52f007f52ec4"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "6363be17d1a8e647fdf0fcbad6e8bdae"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "be4820bdefe888bd8addd1f9bb180bf4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a1d1a79ba1271f47ab2745f033345bca"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1aab7fa6393822b33500bbd2ea3d0e31"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "1a5401acc3ea0699229379944b2ca63b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3d8992e3374ede115aa331ae391578f7"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "38f5108947b45c234aa3e13717cc5639"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "93a763daa92ac02cfccf5e65dbd0dc2c"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "7cb355bcfc640033f531ea56c8793bcb"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "9177be9f18fdfee5892ad9716e89525b"
  },
  {
    "url": "timeline/index.html",
    "revision": "34230f55bab387a41c356fccfbdf61bb"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "e8c5ba52ce6eb56f010a4b20ed2ac0a7"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "4cee762b99df6a84fbdae3b376cd1d60"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "968e0dd5f0c8e1040cd7725075e775d5"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5d2362c5f5c967b50a4d4ada4463a22b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8bc71ca22730196498fe27160ff68474"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9e6fbcfe731ee12ee4aacb3bff8bc417"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c03e890308ed612d2a7316a9cd860b74"
  },
  {
    "url": "tools/note/index.html",
    "revision": "0eb5a2259b5aa66f9eb2efe743c13c81"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "463bb23dda6d89810aca04d4ac8372aa"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "73cdce775956a54cb1d063975dcbacf4"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "2926226eb403f09e34d3b12c014b1cfd"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1dd0688abb87a5699f120fdf7545a8cc"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "d40c25a5a8ce233c79cb2de14118a71a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a97cb19d72bc8468ec613d8a0a845184"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c7f9e65f6f3bb7af1f68f3042e4fc55e"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "042287135c803dac4348d1498004fcd6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7b43d45569556d7ef91df18619f57248"
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
