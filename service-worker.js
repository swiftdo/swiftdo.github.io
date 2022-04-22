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
    "revision": "da4a5494c481888efc579572e5f1fa7f"
  },
  {
    "url": "about/app/index.html",
    "revision": "8435dca864791357d4c038970b8406b5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f125fe1c09b0fcd69594aea3c38731a0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "83f3b9066e1b99f8f0fa000820b676d8"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7b912346cfb9adaa2601ac889d868ef1"
  },
  {
    "url": "about/index/index.html",
    "revision": "26cd4b05bd34a6f0691d5dfb914ed8e0"
  },
  {
    "url": "ai/index.html",
    "revision": "2191db5c5318c8f9e4364066daf1b60b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0f6deade8e7d912d7c7ad4b79e546730"
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
    "url": "assets/js/120.ab49462e.js",
    "revision": "22f1570657d62c11b8b2bb4e51004363"
  },
  {
    "url": "assets/js/121.7a8eaaad.js",
    "revision": "f7cede2f0bd8fe39e521348d83e00802"
  },
  {
    "url": "assets/js/122.d06de73a.js",
    "revision": "ec38233eb9338bf594a8fc9a1f3485ef"
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
    "url": "assets/js/128.0c6ad0fe.js",
    "revision": "3bd26ddabee58a236f35cbc4a0f4f7e6"
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
    "url": "assets/js/131.0418769a.js",
    "revision": "2f0cb38b3650d78679d90b2fb148939f"
  },
  {
    "url": "assets/js/132.04f9d07e.js",
    "revision": "ea367e2e8dd763aa8d383379a27a1191"
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
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
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
    "url": "assets/js/144.7958bdcf.js",
    "revision": "48d5a93c1a5d1c71be5ff068e5586726"
  },
  {
    "url": "assets/js/145.c28d9091.js",
    "revision": "253bea2d4180c3283f32eea995ce14f9"
  },
  {
    "url": "assets/js/146.9d414ec1.js",
    "revision": "dbc6ee034ca02950ac4f7c8911046bcc"
  },
  {
    "url": "assets/js/147.52ac77da.js",
    "revision": "e4f2e0994e55a15636a0ae461ce097ed"
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
    "url": "assets/js/163.a9bf8c17.js",
    "revision": "818b4b9d2c02009e2693733740f55f31"
  },
  {
    "url": "assets/js/164.934ce5ee.js",
    "revision": "89aa91f0a5fd3a4244ac68f3342de580"
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
    "url": "assets/js/172.56849bec.js",
    "revision": "c3e3b51665ce5cd4a118ca8da1e8de16"
  },
  {
    "url": "assets/js/173.5796239c.js",
    "revision": "667a2b25614bbfa21025d0cf38ee8bcc"
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
    "url": "assets/js/181.dd4e6c68.js",
    "revision": "6a71aeea8e74e3fdfa95f5ce21f61c9d"
  },
  {
    "url": "assets/js/182.601ab46b.js",
    "revision": "5c9c73aea2fa4b2c971c1fb632bc4d79"
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
    "url": "assets/js/200.ed585244.js",
    "revision": "27ad070f25950d1e01c2d0d3c3baa0f3"
  },
  {
    "url": "assets/js/201.5fdcc048.js",
    "revision": "173746397195fb07f241c6e2e39249b4"
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
    "url": "assets/js/204.fef4b9e3.js",
    "revision": "c8d07fc2ad72c0dfe083aced11c22f4f"
  },
  {
    "url": "assets/js/205.eeea70d7.js",
    "revision": "878b02c92c2c40c6aa940f2c3bd116d8"
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
    "url": "assets/js/209.ae28ab34.js",
    "revision": "ff8412081ccb745594369bd1123e3a61"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.5799feac.js",
    "revision": "b212a4b7bc6ef41ad2793b4f406cd330"
  },
  {
    "url": "assets/js/211.5e791eda.js",
    "revision": "2b286243360cbb5e684604de5bf4b2e0"
  },
  {
    "url": "assets/js/212.ab534f6d.js",
    "revision": "293823cc1c900951f918037c9918f444"
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
    "url": "assets/js/218.e3196393.js",
    "revision": "f28fd46a0106192957ecdb430df85906"
  },
  {
    "url": "assets/js/219.c38e7704.js",
    "revision": "abd2d5ce8ea4a0bf43906ec2783cf0bd"
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
    "url": "assets/js/221.29e39d98.js",
    "revision": "c9a75787a9549178c501207cf6156fe4"
  },
  {
    "url": "assets/js/222.d658f49f.js",
    "revision": "fbdd6d389aae77740d68b1432dd1444e"
  },
  {
    "url": "assets/js/223.22000be0.js",
    "revision": "614a7b84048a00c7dbef2099bf051fed"
  },
  {
    "url": "assets/js/224.132d546d.js",
    "revision": "3478059a967f23566f1acd4d1d2726d8"
  },
  {
    "url": "assets/js/225.cd31a641.js",
    "revision": "db6bc56bab11f48b8b6d101a99ea9d60"
  },
  {
    "url": "assets/js/226.7af1f9fd.js",
    "revision": "e2c04825bd6fbe6c1770a255ebe8d08a"
  },
  {
    "url": "assets/js/227.b4880e88.js",
    "revision": "72f63915e92a5701b95d03594b94c682"
  },
  {
    "url": "assets/js/228.61d89c21.js",
    "revision": "0b2d69cfd75ff07877bc876dd7873cf5"
  },
  {
    "url": "assets/js/229.e5b5b294.js",
    "revision": "af620da9764bc7a2f9a2a803d26ea162"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.a764bc8d.js",
    "revision": "05104b65cc874a118aae20eb6bf2dfed"
  },
  {
    "url": "assets/js/231.209f047f.js",
    "revision": "7f614ad3b3115b40a26cf19e117e73fd"
  },
  {
    "url": "assets/js/232.94fcc31f.js",
    "revision": "8ee795e89b2da2d407deb08cb96fbb1d"
  },
  {
    "url": "assets/js/233.2eaf1016.js",
    "revision": "d7db1ba27cbc36059661b45132a2b02b"
  },
  {
    "url": "assets/js/234.8d1c1405.js",
    "revision": "2d932d8af66ae0311b963817224cf5d3"
  },
  {
    "url": "assets/js/235.d8136d2b.js",
    "revision": "baa337abf82a52188e7350dab14445d1"
  },
  {
    "url": "assets/js/236.04c99c0d.js",
    "revision": "90bd1933242826b651ebdbe74d4ba67b"
  },
  {
    "url": "assets/js/237.b6d4e0c4.js",
    "revision": "7cba0ed4b8034c15b1c8c7d4c901e2ad"
  },
  {
    "url": "assets/js/238.bc04498f.js",
    "revision": "632021201eb9d56a9211a42322b5166b"
  },
  {
    "url": "assets/js/239.f6646dcd.js",
    "revision": "fb604029d1837d7d6cf48e35f179f04b"
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
    "url": "assets/js/242.b629c671.js",
    "revision": "030b05c4d09969863ad535610058f0e4"
  },
  {
    "url": "assets/js/243.0abcf0e1.js",
    "revision": "b5a3b550ecf8980e3c1cbbd2a460c579"
  },
  {
    "url": "assets/js/244.b4db9a5d.js",
    "revision": "b5796345c7dd0ba4030107b4eb8d8c07"
  },
  {
    "url": "assets/js/245.ee9184b0.js",
    "revision": "4142e4435778e360d173dda62b35b9d3"
  },
  {
    "url": "assets/js/246.41eaa869.js",
    "revision": "51fb85fbb421768feaec0cbbe904955c"
  },
  {
    "url": "assets/js/247.2c5948f2.js",
    "revision": "fecbf2e87b3e1006418e825b1665c73a"
  },
  {
    "url": "assets/js/248.8611d9bf.js",
    "revision": "6f1f8d8eb279608c878b892cf36c9105"
  },
  {
    "url": "assets/js/249.e04f5475.js",
    "revision": "b1dd77da2315ddb49b82798ba786da13"
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
    "url": "assets/js/251.cbaa1d0b.js",
    "revision": "c3cd5d31c369f469f489cc4afdea3cb7"
  },
  {
    "url": "assets/js/252.4722244a.js",
    "revision": "a6d869c1ed698a8dfe7758c23e8b7817"
  },
  {
    "url": "assets/js/253.41878d28.js",
    "revision": "98e3f0a0e58fa5527cbc5a958b9f2329"
  },
  {
    "url": "assets/js/254.0be7b9f9.js",
    "revision": "3d8f59994e1268cd4113742fc2c7bbc9"
  },
  {
    "url": "assets/js/255.a6d0fc67.js",
    "revision": "556dd2d813dd220fc4c7f21b463d9561"
  },
  {
    "url": "assets/js/256.4ae9d02b.js",
    "revision": "9f2bdd65dc580038f509586aff9a3a1d"
  },
  {
    "url": "assets/js/257.ad8c39c5.js",
    "revision": "e649f55073d2e5ba481a89e2f1af3e41"
  },
  {
    "url": "assets/js/258.2ad24774.js",
    "revision": "92cc8945c4b12fc180fd91c640badb8f"
  },
  {
    "url": "assets/js/259.a2882eda.js",
    "revision": "c7fc000e453f24d79585af05bd53f7b5"
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
    "url": "assets/js/267.eb3df208.js",
    "revision": "ea061c475e3c89c599f11fa313a08090"
  },
  {
    "url": "assets/js/268.ad859e23.js",
    "revision": "cb26caa2fee6be97ede40ba905c5c5db"
  },
  {
    "url": "assets/js/269.7365b60d.js",
    "revision": "00f5c26496363f90b02fe5d3c1ecc26d"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/270.638c23b7.js",
    "revision": "e49288d19d74b6c7bae96efe8331688e"
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
    "url": "assets/js/42.e78db814.js",
    "revision": "55d55af0ff73bc07a2ed7b8ce61309e4"
  },
  {
    "url": "assets/js/43.26c01561.js",
    "revision": "00bfe55f2c337d861133603bc7761160"
  },
  {
    "url": "assets/js/44.6b429a17.js",
    "revision": "e28bf2f741982aa8cab4dc967e182781"
  },
  {
    "url": "assets/js/45.d60760ed.js",
    "revision": "38277da509e1053963a6f64815bf2666"
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
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.027762a2.js",
    "revision": "ec7caf1ac60f7ff4187f134ef6db2439"
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
    "url": "assets/js/64.72c8c9a5.js",
    "revision": "63b73d9548c06da08b1586a9630ea144"
  },
  {
    "url": "assets/js/65.98aa9044.js",
    "revision": "c3d1de321f62f090ee8540df51213c6a"
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
    "url": "assets/js/app.127d4148.js",
    "revision": "06646b0030253f0ecc30d886914fadfd"
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
    "revision": "e111de0e3099738056475ada8f8344ce"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1463f057c18fc2afc73054d0af29de0d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "166f9c424265196c011b4c9549ef18ec"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ec83bc4e2a9b2d9d1249513395477fa4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "cd9b1f015a99972ce975b1f74b3b9f5a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3cfb525d7ec164f848b87fbea829b55e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "32deb9ca1963ecf9b69768c1cca0582d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d94b6178d6bf3498e345cb0ee0f12445"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "97454ed4a0a54837150e76d913c83d05"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9c44a86f0b1566d31c292ba4e9b2fe4a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "05b21d662b6e0cc40b1030fcd9675de3"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "4b3d9c96df4c9aaddc847ae6a2437a06"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "d908ff6377cfcb231175516395a5802c"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "998aa81d22adf364e401f39aeb3bf0b8"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8a87eb37c31f3d7800d0dc17f3379bf1"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "87253ff4a9035f525873e5bee7bc9d22"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "561058392f9a6732d2eca5167799965c"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "4117dec77a2618c032d6df516931b8ac"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "1b162ee1766a1a16aec95e2c6d618e63"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "6d9ac57c5129a830686cd3720df95d4b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "dd243d24afa6f626efa4d997c735cf80"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "abcbab9cf5fe5a68e119e343f22ca029"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "1d8016b27e7a931e333fd2972280285c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "692dfa2b1d331619de40f2c65deac810"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "fbe5b8d8a0a0fe6b77aaeea4bddddb42"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "939ae70d25b1a22c05ea2670f0b3dcfc"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "3f43eb008615c228ca28f2b41cadcfc1"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "b2524030511143fc9278dbbbe939eaa7"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "459698c92e687839f506409845c0ed3d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "8146d3cb951f433f39a0121b8b2e7f66"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "e6bcc198d6ec7b2e523f69a34e7f4dcc"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "92a19cb53488f8b92ce5b27034deaa55"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "9bb64b2aac27ad90dcd532cf5445396b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "56ad0e7b35c4969fe9f4eb3846808ab9"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "997d0d853130c43f2df9919e9c8d6448"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "ec3a8cf1772ecc18e4b7bc862f0018fb"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "83a4d8dd7de5bd5c0daf784f04cb19ce"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "6d3334c802fbea05cbf5c87019a4dda2"
  },
  {
    "url": "basis/index/index.html",
    "revision": "73201320b7244f3619095a6944c93628"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2d1ac20db584fb4c31c6ae9c61361fb2"
  },
  {
    "url": "book/index.html",
    "revision": "ae6a52ed3ad4c4bb395b7596cbe978c3"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "887ed459e1549345e4818d7bea1d0e5b"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "83871a7d88567fa286d07e16acf08751"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "2cfa2280c87da967e9a49ff9fc437d3a"
  },
  {
    "url": "c/audio/index.html",
    "revision": "91b77cc01610b271f871b0b0f9399f9a"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "cb1e4671fa689653f819d3a185bf33a8"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "e1ea7d3be6d5dcd88900ba99169d1094"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "5d61837a5d84dbd85c0eff17ecf12440"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "8b608754dcbb366a87786962a9a597bf"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "19860417f01b474743f95a0c0c084dd3"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "b222a120480cf2960bbd6a127a27525e"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "6fbea7b8f282d95766eed023353e9025"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "9d43adef493e9e4a2085d3551ec8d6fa"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "c07a3cf62b17fd3a5abb07b2b2534bdf"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "330a36f98566eb59fb0bea33cef3720e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "d1a50f7603cbe393a8a5685f1be55e73"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "4564ef4b61aa9cfe2ace80b9b0b18a37"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "088eefc388a09d5ac4c981759c4d8555"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "62b3723b3695d2f028782ba62e2e1306"
  },
  {
    "url": "c/program/index.html",
    "revision": "e984e68702423dfad801345557688125"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "834b768c77d75380dfcd469f97058496"
  },
  {
    "url": "categories/index.html",
    "revision": "19cf285fbe61d0a01c7409970c9f5b35"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "e59e210436e045a23b21dfdb1071ef8d"
  },
  {
    "url": "figma/index.html",
    "revision": "963a7057a639fc3ad45175d183e7059f"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "69e78f5e1de86e462d07e2fd38a38a08"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "45cb8d9110f1b49724ce74f8aec90a15"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "6eed78c55175d5c0d9b4a6f185518d4f"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "d1cfb01063f8ff559669ab4f6f78ef46"
  },
  {
    "url": "flutter/index.html",
    "revision": "8f4fbae5be63d9a43396d8d09f257fca"
  },
  {
    "url": "flutter/point.html",
    "revision": "2750d2a67e0082f108bae907ccfd4d95"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "09400f520c9dda43f39031e17bddb102"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5ff3b53d64a70d7f2c34f7bc57431abf"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "94095a418454625dc0a2e937eacf5d05"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c5cbb3614a695199edffc45afec3a459"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a394b13d7945cfe0d69e8759fd09e9d8"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "fc589cba3676957a8b8327d978005869"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f1bcec3cee625b01af981bcaedc24ecc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "374ea82080dc99aad05493e88babc62f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "7d5c4bf2266d2c61b19d94974d48128c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "5318bd7a75bde2794b2b4ed52240f5bd"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "19fbb1b88a7ff9f06b708081ba90cc45"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "49734711387ef618d1c3d010b551e3b3"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "75610e12f256dbf5b187171c0e690cb1"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "aa4b146a066fb989b8f4b31f97e7af82"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "c8e6369f695ab0b03ed944eff1cf1fe8"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "aa870ade8c8e4df064ba53177b56c753"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a39d50775a12200c555fb3baba90475b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "96121f3a777a8db34dae05d3c771453a"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9942ee5d0c92b4433a99f9e7f073e61c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "72461f243184969151e905e2ab78a134"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "719625f986199ff435dd6440c8b27995"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "93569076cf620136aeafd4383c64b835"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5db56e35341f387db46143113cb420a6"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "329b9795aab79b9ce7adfddcbc2ec5c5"
  },
  {
    "url": "haskell/index.html",
    "revision": "f1438adfd03fd0ba975bf5bb5ba0ae51"
  },
  {
    "url": "index.html",
    "revision": "7f60925d5da53db758bf93bb1c0c9a4b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "715e861ae803a44d51715f025d715144"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "86ddca30cb25bcdf30e38885aaaf32c7"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c453e3af1b5f6ad9d9eab6227031656c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "75e6936f490a48160315ccac993abac6"
  },
  {
    "url": "python/index.html",
    "revision": "bec142696c3d60f61f29d483ad53bf7e"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "a32073ffa53466409e278a4c5975d293"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "8c46cc47cbf70c8f2c7a518e71cbe2e1"
  },
  {
    "url": "python/python-file.html",
    "revision": "8c73f4404f633789a565606cab49d5df"
  },
  {
    "url": "python/python-function.html",
    "revision": "ef767f71012f4850f4019375b5bd1253"
  },
  {
    "url": "python/python-generator.html",
    "revision": "12bed120cf9315d31fce23d4a0c15503"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "e585436800a6c9845df470cc0cdcb1fb"
  },
  {
    "url": "python/python-module.html",
    "revision": "3fe9ea6dc2ce1acb8a8641959d109736"
  },
  {
    "url": "python/python-string.html",
    "revision": "410907abc14fab9c07713796fb29aac6"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ef4a0f7a4df6d2f4bc7cc14460b68108"
  },
  {
    "url": "read/index.html",
    "revision": "ba945e469f318c04e169508259c3a08c"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "9dd24ed3c171fc73e9b3b28ab4c5b103"
  },
  {
    "url": "swift/better/available.html",
    "revision": "f3d6387c47d15aa5832da0345c8bcddc"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "d755f76ec8dd156b10fd50dfc72a5559"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "23992bf5ca8afacda1aaf8017d71b75e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "a4b7ea4648ba4888189948ee398d673c"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2e19332c94a8f97921b06a0be1bbfbcf"
  },
  {
    "url": "swift/better/index.html",
    "revision": "8bcecace6b2ee5542e72b5109f4d4b1c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "db33edc3cc0c48360f62789e5b7a5224"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "6cba007f3386f3a8404a8c705521b478"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "c6db6cd43e8b2024dc7ec75165c20bff"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f74e629f2fa85ee6df1a8b29e1835ebb"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4b94c12ff44f93c2603e09558e69e21d"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "cda74dad184804c09a81d38e1f1978f5"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "8f5775a7a3a7e9e68aa600271155335c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c606494cd25ef46fab13677210c1f7c7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "31b58fe4309d1b0044651cd730e07f7a"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "ab13424a1cc81df99968d2231e674d19"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "72268365436d8ff63d090978fc29fbe2"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "0339b58b944ec67073acedb50c82875d"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "998d8932e4cea714aeadda4171e68503"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "a7fcc17cb129b89b26afccab42d8cf05"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fd2f35e5e259111684432a23341e710b"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "9de5393489ef8b120f4f7fb43b0c85a5"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "d34a503f273e322877403976a384f70d"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "7136481d2c924e48cb04401c64aa36ce"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "fa696680fa0bef22000ee8e29fbfd4c2"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "1db1af9a1ed4f48623f29e9cc62ab193"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "5d700d00a0639700596941decfdada35"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "024bbdb3278b85b74bd677f949000111"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "5942b66ab032a789441d76895327c6c5"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "dd0953f10dc2ed1ce9c58e992f187b7a"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "ef86aafbdf2819ae7fed6c19080c44b9"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "20ece871c370b67b6765f2d223cd8a06"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "2f8240be7e215115dde31a0e9ee42049"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "9f5f1eb6e4c8000fa03822381d658ea9"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "e321a8f1219e96d71bdc91e1a7e7cbe4"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "89e607ba39e57824e71b26664eda024b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "38903d68d5e5be31b4c03a0388285bf8"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "75b3dd057c18b67e3e7e51bb3d179a05"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9a7690522ae2aab5c6599768c616a687"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "84aa0538b296c8c97b9452d09cc89260"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "d37915280ae3432627aafc385a4c39f0"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4a1c0b7d23f2f8b3c2cbf31362d2802d"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "450077ac2ee28b5871e6c64d7e22e812"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "6ba17fa78732c9e3290d21a7d054d4bd"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "889ebc50df3c3798c12e499f752eac02"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a70d8b1b8905c6df58cbcfccccced58d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "6fdaf3f2bf1732ae4f7c763b8a3f3aa3"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "43e1402615f20dd9e1073ce0c8c18841"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "cb9acd8c37dc200e7f49eb1718b5b93d"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "31868c42649906956b70937da813f642"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "8b4c481a8bec41954be0984b8df43304"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "18bff3755ac510a2f095bc789797168d"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "1d0613f527a065a1932356278a5cc562"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "d25a6c5a1afe942259b9f7c1883f5a78"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d3cecc0bd8ed7740ae2c7580d0283d22"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "ba3c9e202ce6e1003c5d1761c1e77bbf"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5a3b47f3c58923c9face1d9057229d0e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "377bb9eb00be74b922133b6cb1a341f4"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "6585ac765451a3e57a0ad383ce523b64"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "ae3f69527fd0bfefbd52e634e79d7aca"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "4dfe31d9c84741f75ca557c906f67545"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "fb54fa08617642a2e5b00641f60e6016"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "377ef2d3b94307964c4960a4aa6b1f93"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "0aab06b4c5c7e8649922b47da246dcab"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "4915d4050e8a150cf2ad96fc38279c61"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "14846d9d4a4b521bbfa10a066d04c647"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "09f1c97c20cac01b3ac9c32734ec4135"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "d63df058006e9533070cec27d2435543"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "08877395c72cc9f1b0bdeed9ab67036d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "dfbd51a5a9980b7a8070111e513ac48b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "76a39b58d45358f20119cc722623688b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "0177d5f3b59ca26d3f925bb3ac6bead3"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "684556b450aa150994e2238c107c191b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "32a3cd4c2e635bccd9db2ce8e99488ef"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "59ffe463b9a22dcab5a9b2e9734f85e9"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "d00492bce931132e387bc10770a83586"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "de781c095eaa4cd55a2070bea9ecc368"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "c52d4ca801688be181ee03bd0f0199e2"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "09aeed37888cbad2b1a32751b1fe5006"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "8c6669bd4385f606edd72f9c07591c42"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0a78af3cb082919470edc05fd669d9b1"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "e29d8753ae1bd8778d92c63714f7f6a4"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b4a81dd7bf956c759e54250e2fb74b13"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "b032bd751891b3bd1dcf021730316e2f"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "b8912f2d254c8bfebe9b1d2344049847"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c6c7e74ccd8f18c48653e01d1007a756"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "edc20a9c98bd04378ff43f7ffac09604"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "c6510e681d423c919bc01fec5897a324"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "14aea1450fbac059170f18dad48a1059"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "e05dda1838c00e83882949a2124b111d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "47b4a772e5896d9c8f4191241190c824"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "f478d87f4fd146f40552f85d4bbbdc31"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "ace72201956555b24cb39d85850c09e7"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "7b120e7f2903ff5b8bb66657586763ff"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "4fb9f534e8e72763992833bb679fe99f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "d58705f8edacfbb50f7b484c5df051b9"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "bb926f53ff37f553fc71e068e87d657e"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "cafe0ae56c300164a0d85506ae841c1f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "e1a2bb2b1033fc0946c7dc48bcea3b64"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "67318df8a9f59cc23c25c3aa824391c3"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2861e1fa82cb6591ebd449fad9884e70"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b4e598767c19a9642f303aaf1ba53038"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c42a3d31123978b45ae0c21081dd9970"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "8367160beeb7b9b80bfc14bb2fd8f0ae"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "486648ea0f1eb5b4521edf82002f7599"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "0d47af41617be73846d61885fc9bdc55"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f2c86e98e1a29a0eb1a541104f33372d"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "17327c88551e7a7f8805a86c7bb0fed3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d8024ce456553be4da9dd2dd1f2f618c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "288e487b893ad29bd60369009502227d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fade753515d4be882d98b460f1eebe6b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8b28855026c258155af0fc168390a202"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8af18ab75afc2c80a36ae173d7672b6a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f3c456cf29a8953e2a7b0e3490d914be"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d28c13f8b078b8deff0c1bc74ffb48d2"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "6483b265152b5c84a015905ee321f62c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "aeb57c93052fb35b13dd790ed5d8bd06"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "18401f71be9e2544f4f9b057f3f477b9"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "bbc43dbd31d2bf363925215d9ecb089a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "24fb96e653c237e9718d52bff5213cf8"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f2ad0b0ede9236e6cdb9069c45a84fb1"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8ebcb6744d4ecfcf6fe5fe9941dbac5a"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a25ec9f5cd22f8829a0249543df6ba46"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "778c1318c1ba7da2fc6f145c1b8ffc09"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "915baa8ff4dac884596a51ec6a6922ff"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "5b692730872d68bdc85fbea69d566641"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "bedd9287b252e8433f933a3f0106b847"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c1c635e991d11bb0f5b504e2d6905670"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b8e10fcf7347c59a2cdf397f1801eaa1"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e19449177c995ab739f9157c0138a729"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5a43644b399792934b003edfc97aa6cf"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "52f2878919ebba4978066a49fd208117"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ec3465a26d897a67a445ef00832c006f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ed569ccf467c3a063852bc90d7fb4fb4"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3660a86fe157bc084e11f720cb50c314"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "521d9041b2667477a58e9946ec74cae4"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c9781ca65393e983a07b8492382ec3a1"
  },
  {
    "url": "tag/index.html",
    "revision": "e093b804adedbbbd84abf15ff48c5967"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "03e26dcf35850a26f99d06b6adbbc9ce"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "7fc39c2da7a47ef8912dbfc2bc861680"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "66eefed8023707bed36e57daa7f1ad00"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "2c586939ca6204e3111fb9379d871088"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "6de97bc2990a00cc6c81adc063c875c7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "c5b9a1c8f5c892f93c3dcf7289c76db3"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "fe3c5d2a3d3406656ac09eac408674a7"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "41f0527bf02fa6e804a25872157135d4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ebcb4a6d56fc26697ed813ae024f3eed"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a14b474652bd4d8958332d9a36971632"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ef20cdf4bd5335f3cfa8aa4db9691d60"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "751016318e92c9ae8e28da7df9d076eb"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d6fdf7a1e4f1c9e6f9528df68cda91af"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "27329c55557d4236e530bd77195c0f11"
  },
  {
    "url": "tag/read/index.html",
    "revision": "df3c1e66c3abd1268da1349fbd435b5b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "52a4e171886b6e4a06ab0ac5a0e811cf"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "35733dc05e24499e265d5fe6ec94bc11"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "9def6c6f2045587b282181fb9a39d550"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "7e7ab6eadcaee0ae1cef3efd38d4ec37"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "57a2ba876085f366141569acd5f16de2"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "76e7feb10d668e2753c188150cd0d789"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "43fe40a507a8c66c93e73bf3c5900363"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "a6e355bb7190dd83b12a3e75323fbb03"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9fe1c08753e854efdaa4e80215c57977"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "076c9ac53d72a0d31332117f9b33bcac"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "7645503cc43165be6f6ece5922892e5f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "1ae1fa9803d2fde05272e14737eca86c"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "3f04d66988c547b78d83373e0806a679"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0ee6afe7cea3fa8c6126396c88bc09c2"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "929227eee927a7655907f6e0b644c0d6"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "21338d25978a93ece0a7cc93081e1956"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "a2302d8161cf64128b0d7279bea0e6a9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "ff5233a5ed44564f67953b445239c9c9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "94408825e894809d3c25efa3575b1592"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "30d0274169cc7882882f7480881a5403"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "00d063404aea28c9ab84b05ae6e67023"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "1525a11b3a9e9fdbb9484e721fbf6f02"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "90546414f961adeee3da3f31fce5986b"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b85d9b631735ddd262c1e6568e7b3a07"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "b1e4a324f7dc3b03aa056311d5efd2e0"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7bb01b799e49e5a08574321539b4c08f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d4b10c5ebd84da15c7a1a81019e72d2e"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f37d90ccad403f721ca47254b550ffa0"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "de764fc1ea08bd91a991e3e18150b1b2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d990f6bed436371a14924ec0a3fd5b98"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "06886ff86ae3dae643d936b11d2eb133"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "e45f5767b7d5d661368f323a2357f426"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "5814a589c3695c653d166b86984b003e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "26eaef35be6017d48a1c9cd49ca65c09"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "41f93153bfafc7fcb76985a23b67b82f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6ba307ddc5c671cc0cdd00bd899caf31"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b12e6c2e1038dd787c074ff100211638"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "88e4c443380ef591d7f4ca010d3479e8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "72684e40aef982775687e0c67766b068"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "49c5fb1caceafabed7c0f873ab11f000"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "d2c46bc71ccce55937eb45e7980a4b95"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a48f1504368136d38e593c7ae9e13f26"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f62579e3aef0eb27415ffbe9cd0a1b83"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "163877ca41de95ff1a26f8b6794dd360"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f968f38e1621c98cb3befd4b4d3e193a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "53322910d5493fb5ddae60e1b087eb1a"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "e3b25f43401d0b715d0acfe17f1f0abb"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "4b2114cb373ece0b53acfbeec4007bc4"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "382824e8f0ab8437fdb658e5ec9277dd"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "58bd643534e4d00d2b9d1889b47e6178"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7dad5af6556b8ae705ec1e78241dce4"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "0150511dd197b406deb23dff5695ec60"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "4b0dc1aa1bf4fb269f15508fe6d3ff88"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "725d7c5b91cb0911cf6620c181ee118c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2bd2e091ce75577e6206b827ea40b609"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "014f43434f6efaf49bc62086d9e120f6"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "512e1a5ec8835565eeee1f6dcc7541b8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "12e6d2a95d4a1abd9e4a19fb48f7a2ac"
  },
  {
    "url": "tools/note/index.html",
    "revision": "e6d71ef556339c431090a7168358066b"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "f065e07c08a2940160997905a9eed4ea"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "30e6dffaa60f1775d697f351cf1c6fe3"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8ece60a948952a67562c72cb1cffb972"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f493c575df7911eb0a72390166a1148d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "c23a5f8d1e72ca5f644acfb22452700f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "090a2720c3d661f09895aaa7caee0ab6"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "304a6082d92298f9dbfa1352b7fcedf1"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "430961076dab1319f970e7507ce436d5"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2e9804ab73c10792eec9c91148b52e4a"
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
