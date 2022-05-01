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
    "revision": "63afc6d2871a0b074c8a96a04e9e6392"
  },
  {
    "url": "about/app/index.html",
    "revision": "5869179fbe69d73ef97c2486c10b6013"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b5fa5c1ffb639f2ef43d34ff9fcc5e3a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c3202a974346dcf8f45b8c9cb6d6dcbe"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "915f3b2132c7f5a371e1deb74e1f9f72"
  },
  {
    "url": "about/index/index.html",
    "revision": "82c5523aa0a1591fcff96c00252e21e8"
  },
  {
    "url": "ai/index.html",
    "revision": "aeb38ac4e8799b3149e67d18f688c804"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d2254c69501d4eaaca09a156945c2a14"
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
    "url": "assets/js/10.edb9fd72.js",
    "revision": "4a35b91ca42058c03bc332e72edb8ae8"
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
    "url": "assets/js/121.20ba89f3.js",
    "revision": "b10941fdd2879948f46db6f9d3777d1b"
  },
  {
    "url": "assets/js/122.21d97db6.js",
    "revision": "951a0cc565e388f657823af0cd221c65"
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
    "url": "assets/js/126.8ea88f2b.js",
    "revision": "7fb3d30d6be11db3fe991b5ee3d3eb4f"
  },
  {
    "url": "assets/js/127.f28c32a3.js",
    "revision": "14e274ce2b81f769086093288d6a1593"
  },
  {
    "url": "assets/js/128.3c7357ad.js",
    "revision": "931abbb49f78df285aa0c8ce50514648"
  },
  {
    "url": "assets/js/129.62039df1.js",
    "revision": "11c26113c79eaf8a0722dcf7999bdc00"
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
    "url": "assets/js/161.5f5d6104.js",
    "revision": "466b32be275b626d0697824ccd6ec4a0"
  },
  {
    "url": "assets/js/162.aa543eaf.js",
    "revision": "f8d35ec2840f93dfeefcfb2fc24c2895"
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
    "url": "assets/js/169.f485c918.js",
    "revision": "1830f8ad7d9c6d5d6cc58da862dbf64d"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.06f8fb3f.js",
    "revision": "7d8e5fdf405341f042e80f1c544cbd12"
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
    "url": "assets/js/195.216ecada.js",
    "revision": "3038f30be699a54ae489e3df43965e32"
  },
  {
    "url": "assets/js/196.1fca3a5f.js",
    "revision": "ca94b79e8ccc704d4969395b3106d98a"
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
    "url": "assets/js/213.1ddfdc13.js",
    "revision": "c37ad0ed881162b4de4f8004b47ae1d1"
  },
  {
    "url": "assets/js/214.ff5a5869.js",
    "revision": "767fd8db707e8de6bfc393032b64ace3"
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
    "url": "assets/js/226.d3625df7.js",
    "revision": "fee7be0c73b73cc46e76fe4f397ff539"
  },
  {
    "url": "assets/js/227.507a8627.js",
    "revision": "88bb075ca4caefb7db8cb58f497c0d7c"
  },
  {
    "url": "assets/js/228.61d89c21.js",
    "revision": "0b2d69cfd75ff07877bc876dd7873cf5"
  },
  {
    "url": "assets/js/229.70a77938.js",
    "revision": "4a6543008647ef68b3a76c2bba2d4e4c"
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
    "url": "assets/js/231.cf0393a6.js",
    "revision": "71bc87dd18f98ff8f5dfe91cce7c3b6e"
  },
  {
    "url": "assets/js/232.463fe166.js",
    "revision": "98a6e10d23de1379486fcbcdd455bdbd"
  },
  {
    "url": "assets/js/233.e942ba26.js",
    "revision": "a1de2ad1671e67451058850f73c3238b"
  },
  {
    "url": "assets/js/234.04331e07.js",
    "revision": "be360bea42cf80639632ecea8c2cf4bc"
  },
  {
    "url": "assets/js/235.34906d96.js",
    "revision": "20719a224eba73409b7092125f1ac882"
  },
  {
    "url": "assets/js/236.2ab21d8a.js",
    "revision": "5ec69a534b0c807305550b3b3ca553a9"
  },
  {
    "url": "assets/js/237.df1ed5ed.js",
    "revision": "c8e1fc87886ad541a26bbe3778edde30"
  },
  {
    "url": "assets/js/238.f0eff728.js",
    "revision": "57550d3c2cc42f4d77e4636a9410ea30"
  },
  {
    "url": "assets/js/239.e10d2631.js",
    "revision": "735afabf25a0793de5411a4d4ebe959b"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.b1bade83.js",
    "revision": "610ea231179bdc890cbe0c43147e02bc"
  },
  {
    "url": "assets/js/241.07542bf4.js",
    "revision": "54c1ab252e2b971324d6a2f2d5af6bf6"
  },
  {
    "url": "assets/js/242.2522d6ed.js",
    "revision": "90d32be930d249182be118034e2effc9"
  },
  {
    "url": "assets/js/243.d822dc4d.js",
    "revision": "8346ab62986a4c7031f5a46862c3f130"
  },
  {
    "url": "assets/js/244.7f1ff60f.js",
    "revision": "bb07ba9b10b46b0f17ac20ab2b935187"
  },
  {
    "url": "assets/js/245.9652f33a.js",
    "revision": "158479a265e72b8887ca1abe9da9f97d"
  },
  {
    "url": "assets/js/246.6004c644.js",
    "revision": "467dda143f8cbedb6a011184cb60a83f"
  },
  {
    "url": "assets/js/247.59a880d7.js",
    "revision": "64408aa849b7f66f98cd6523ee14f897"
  },
  {
    "url": "assets/js/248.53bd6ed2.js",
    "revision": "c6cae5cbbf57d88d01902c76ad099252"
  },
  {
    "url": "assets/js/249.230fc530.js",
    "revision": "0711e242d6473377a64f11386b10db9a"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.b23e16c5.js",
    "revision": "eb9914f37f5261a0b66a2898f9e7c9cf"
  },
  {
    "url": "assets/js/251.3a1b097b.js",
    "revision": "f5a2bc76d64d0c87088fdfce64b898bb"
  },
  {
    "url": "assets/js/252.d06e9f1f.js",
    "revision": "b7a33e34940b26b86b001dd33f29ff45"
  },
  {
    "url": "assets/js/253.50f95181.js",
    "revision": "d4bd25e137bbd94772f6cb74009e367b"
  },
  {
    "url": "assets/js/254.3bda194c.js",
    "revision": "0225fdddfc2fe3ce2107e62da5606e34"
  },
  {
    "url": "assets/js/255.c0db8fbf.js",
    "revision": "bd58e889b0b8a2472aff695d9e51186c"
  },
  {
    "url": "assets/js/256.5131d790.js",
    "revision": "1ed2c5e24014aa83f5ffc9da7eea574c"
  },
  {
    "url": "assets/js/257.678eaae3.js",
    "revision": "cd492a4fd960d719df39116cf8a4ab86"
  },
  {
    "url": "assets/js/258.dd7d31f8.js",
    "revision": "34f90a92a1c87f56b3e26e8351f07964"
  },
  {
    "url": "assets/js/259.a118b94b.js",
    "revision": "432508d9dbedeefc1b2f6aae53c9143b"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/260.d2a6b363.js",
    "revision": "a818051ec656d0c97aa36efd6c411b08"
  },
  {
    "url": "assets/js/261.cc65bdc8.js",
    "revision": "7640f82898574244beb07fa96cfae771"
  },
  {
    "url": "assets/js/262.2b07c30c.js",
    "revision": "9b3d636ffbe52d59958c1b1eeb75e4cf"
  },
  {
    "url": "assets/js/263.e6c27b20.js",
    "revision": "710a88e97040483d9df8171dcb1a9042"
  },
  {
    "url": "assets/js/264.b00ca2dc.js",
    "revision": "6a5a8df57d62a1505c8f13948e6872a1"
  },
  {
    "url": "assets/js/265.31ff9ed3.js",
    "revision": "f1223ce73bd1c5719c68e6b3ef805541"
  },
  {
    "url": "assets/js/266.9f350b86.js",
    "revision": "dc01ebaa927e30f95bf0d5453d65b80c"
  },
  {
    "url": "assets/js/267.1772bca8.js",
    "revision": "0b1d3202e90c8b13205ff2750b9c1fdc"
  },
  {
    "url": "assets/js/268.2a698a2b.js",
    "revision": "6c765ced71b0b8107841b2aa39cea79c"
  },
  {
    "url": "assets/js/269.4ea07d40.js",
    "revision": "4715c2c8a6fb87418676e0560fc049b5"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/270.513f768c.js",
    "revision": "673afbc69029f374b0afd03e907b0ed8"
  },
  {
    "url": "assets/js/271.fbd4ee39.js",
    "revision": "d09f100f83b6456a3c314bb55e399caf"
  },
  {
    "url": "assets/js/272.38319248.js",
    "revision": "263c5c0a73a2297f17f4967e852f73c6"
  },
  {
    "url": "assets/js/273.3739c32a.js",
    "revision": "0f4c3ebfefee6cfec541623fed4daca9"
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
    "url": "assets/js/85.2dc65d76.js",
    "revision": "5b813949caf3e9669a8093ecded68939"
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
    "url": "assets/js/app.6ee23fa0.js",
    "revision": "4960ade2c1a829a2130bee26529092e0"
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
    "revision": "88d1e631fea0f6891aeec7863de25c86"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6eaa8467eff1d47c543dc5569e9a5121"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "eccddc7742608c652ca032c32ddbecb9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1ddb3a2ac2ab91b149d1159d4fa900eb"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "bfebb6636153a2234459d2556d893eff"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c18ce5323b7d42fc3666d88870f2c3be"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ac36c86d8cbc2b1fdcfdc88b2cf245fc"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "70befaaa33eef4630f466513949c2262"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ea48976e20287973cbc8451664354a9b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "30279ab11c233e7053c749a7d62f87d8"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a0d2e7d0a366058b76b5b7270847402a"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c22e2d512742c76edd190e9c61f3ac86"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "92eb21da7d105553e0a8e4df2e17f574"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "1d817076f648e90a64f93e16e2529aee"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "52d92d623741378d321a267e39f18ace"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "1d26d0dcf4bcfcce84a11d0428253c54"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "5a6c274bee9dc68c9d0446464cde4740"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "4b52423b6b53cda2dd4b215ae2f3e38e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "a5f67c8fc5481daca3cf5361cce90747"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "7e0a25e1a132e0708a77959209ea9986"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "5040bae342b27b6866b0da84ead5742b"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "72b750423bf1f3cf0fe4a1c93a8ae7a9"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "18ed742f2360131926b35a548b54c4de"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "bdcf3a63eba49985404d0feffae02240"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "66990841f6157a4383603d5a8f0c7387"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "b18aa66a90ff77c1459073460563f994"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "b04253f829df334a7bed60df58aee8a5"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "52b8ff06ef962faf7f6f56f90d4052bb"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "a3ab453d22c6777de818e47714407654"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "b457e189107f00ea40b6918547c1feae"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "3299d6767971f64484b9a681b5f41dad"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "8864bcf9bdf6d8e371f710d91ab84e4c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "040a3b4736648a37d0a03685eba9f6c8"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ddef85bfa02b6af9528894cc887ac33a"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "9bf0ed29963d4bd587c73e3320892200"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d8c0b7970d2ba38f745129bf39190fa3"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b823c4a53e0440f51aba8504e3782449"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "90902082e373847a92c7f527e83d881b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "deade38964b2d1b12f6c1ad27be84cca"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a385755ccc6d00e738d42c2ac9a9da8d"
  },
  {
    "url": "book/index.html",
    "revision": "940470fbd1ffd24e53a5f2feb523c549"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "07f8874b9783a4c98b188117f0f4f082"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "ac89ea60f80e4f2c50f51f8b6170a0e8"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b4a20418e5c6b10ba5c54b8a5fd15400"
  },
  {
    "url": "c/audio/index.html",
    "revision": "2425af0bcb556e2f0406ed11a5c26d4c"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "e446a220a93ee7e741e71faca427d844"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "ad3a434aaf8a50f35dc9789363790c58"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "4c6e8bacd2e0fa9c0ad9ebc374c82558"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "f4295f2d009d5564959f319db6085f0c"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "d87b7bc870b9f8f0dc4058d7a157a1d7"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "38782ed26d0bb5e3ca00038ee9a4dd2a"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "ff865709ebf980dc379a8cb3c72df385"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "a7d0790c9dbb55a814248ff53ccdf0aa"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "55c78a6ff1cb9e09df57dbcd5c4dd067"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "49bc4b4ec8bcb33570df378cc75d2c5c"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "1d0b0ac828c40b926b93df103bf3b4c6"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "fce540316d125660d45a156249642b7b"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "996ecb11de093b2e11b8ac92dac9d5e5"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "60ca06a572aa7cfeb33fa1e1ab83f6a5"
  },
  {
    "url": "c/program/index.html",
    "revision": "4b283c6a84fb426349d5c3e57c8bcebc"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "87516c315c82d042e6193e6feaf2cab8"
  },
  {
    "url": "categories/index.html",
    "revision": "a9ff420e455075466188337ea47f4286"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "4089e62c1aeae4b59e5d38641d42b2bb"
  },
  {
    "url": "figma/index.html",
    "revision": "71d6fa9b1ba306938fb013d61f1e618d"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "4c25ccfd966d1712fae0a7d327280e7a"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "fa7b43b8c9e796fb36c0f82cbafb5e7e"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "dac53338f22dd3dbb8821faa8d4d2554"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "09803082961649502079f99ba7dc3f9f"
  },
  {
    "url": "flutter/index.html",
    "revision": "1d693ed6dbac3d55f5e25767d576128f"
  },
  {
    "url": "flutter/point.html",
    "revision": "265a29bc9ffb870482a0834459fa323a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0bfbc536dac3894e54f45f1f93436e50"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "95b0c20e615a0421de74f0fd952cffa5"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c327c26726e7278bb48147a19c14fb20"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8eb18ba1ce75433aa64980e96b308793"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f759a48b02f19ffbd23e58e99f416e42"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "926d19477b1b911bb92fdd7a839525ed"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "901522d610d55e938f8d5040dff88e7d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5cf7d810afb719e253e038773f542467"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d42e49157f69e55f9b0633c86da8a326"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "dcc5a28d9907aab111d4b549c7082e43"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "def00e52355fe196c811acc120c8fa2f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "bf910521759735062960651a61e8ad14"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "53fb16c201df83bef36f7eb0e6413a81"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c496c86e0228c2f43b999078299e592e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "9e2d9e64ddc16ab9a7452f96adb65f03"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "9a1c650327b5a96a9ba83adb81e30811"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ba02d36d72ef7c86fb7549769371f60b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f20eb5e65c59f464afbcac502c4a9315"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9ffb77c5908c5bef587539813f658991"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "8a093bda4b3275f0293e6a9f41d8ceb5"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "9dee6276af64f89e3e30998ce4eb7907"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "cecf00352c58fa1509ff83a301f3f4ab"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "c478f609a10208a6545444425c6d06ec"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f751bc5c8a8d178f6bd69f2c20eb001a"
  },
  {
    "url": "haskell/index.html",
    "revision": "924553a43b571965b87d88446ba54153"
  },
  {
    "url": "index.html",
    "revision": "f08b770e6ffd500f5b5edd38599143f9"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "f87e80910e9687abc1193223cd5a0c21"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "62b70e0cee0c20e4b55051fd83615870"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b64d195a433e96f61824ac26417ab1f1"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "259ff0bca086f27f0aa89faa5d7c9d89"
  },
  {
    "url": "python/index.html",
    "revision": "7bd5bb7323fb7758e22d95958266cc5a"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "fb1a9b876943fd1d23fc6923869a9420"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2ae2118516725e99e1b18abe560f4fcd"
  },
  {
    "url": "python/python-file.html",
    "revision": "bbae30348d107d223cd60cc1ea1dbc9c"
  },
  {
    "url": "python/python-function.html",
    "revision": "d0e039f9d24547d6ae643c3eec234475"
  },
  {
    "url": "python/python-generator.html",
    "revision": "46ed11f61d1e0fd555038d97fae20392"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "98858c2ee2dfafb493181fbafcf755e9"
  },
  {
    "url": "python/python-module.html",
    "revision": "3bf4148c84ebce684ca504ef2ef26182"
  },
  {
    "url": "python/python-string.html",
    "revision": "2edd8389736bbd8f5220be4b40488a00"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "211bac8b8ae39465c895a00c784128c7"
  },
  {
    "url": "read/index.html",
    "revision": "dc1929cd6d9857b83a5360bd9e801ae6"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ad0175c7cd28415c7ad18bb1899857b7"
  },
  {
    "url": "swift/better/available.html",
    "revision": "1ec98b7884f90631ab3979319890d75e"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "672324b096499f6751f174ff64bd72ea"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "f3ec58c4d7f9528760da6474ef32cc42"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3f587b2ea32e973343fa63d929ea057b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c8632be46e537b33347f0a5f23b07d33"
  },
  {
    "url": "swift/better/index.html",
    "revision": "14636827c37029d024353e2d3eb8ed65"
  },
  {
    "url": "swift/better/last.html",
    "revision": "0f266e1dee00fcff577ddca123cef54f"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "99b7c91ad83be6b473049e5a339de4dd"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "7f6381aa7cbdb1e16bd6b54a399a1e93"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "fb2947eb4dd6773b2ce4308aed36a03f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "2d76791858310e92ad99a9d57574542a"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ea5c5835dd3d7a395b82176204e54e36"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "78633de38e4499c4a13ad5f02be12827"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "54959a42d378bc624b400506f4608406"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ad1ffbd4d4c62905f4b4a322b189dc42"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "37d1091ff3d064840d6bdbdead13ca37"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6383e94a3791819bdfc6c44fa9e7787c"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "6cd2893cba9af104a3d2f5b8e7029c01"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "487502ba73156ab1d620f6614d0cce3e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "5f394ab5c18b643163c8f8bb163f8669"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "9ecc49facacc33fe3ca46eee6c3a3871"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "fc942dbfc36cd615cee940a7d07b9b58"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "9c672e0abd6d96ac123f25d7c8633283"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "0181d82c9df54c26f1697d41634e747c"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "8c45e92b4e855d0dd94d41f03186eeaf"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "6ec790e038c65821aa7490e87dc85700"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "0423e8d9db5e005a8436785106f55739"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "fa8cf9f6e114bc08b5a353996b5d8562"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "365b36ffcc102bffe9faa9a0e579be66"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "d216d8705e101a071ce6bc37104db130"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "95649b056b4ac16a9bbaaf1f4ff47575"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "61968921d0bb37f61f48eb355061c386"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "90553ea3e0e7b6ce3452efc41d74e689"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "b59dd3dfcfdd36d877d6f9e267ac613c"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ee7017758329bf4a03acba62409cf7ae"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "7940133164dae04d313728e0fa7edbbe"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "444294d459ba769fbfeec3b62c427f3b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b4562a7b455acab68e895674ada4582e"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "56b9860afb04fe56482357ae814dd86d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "bf9e9efc8cb9d759e674033bcd4a1f40"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "e6ca5b7488645282504202f5fae42584"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "25d058f4f828b914912e9d6a7cefa916"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "6a15f45a4ef96b0d187bb08ac7cba9bd"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "a56f8234569bd13eacecc5bc8adcadce"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "44c6e1f709e3941f12cf42248e9c2e9c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0e24d1ed56d453c78ea8677c758e4a6c"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "a9f005bd8f369e203c33fac9f4217743"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "edc347c1c1aa39df020bae0581b7aefd"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "111cc261729a78599b9e4c441d731489"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "2f2a371fd917d1c53d71509ee618dfe3"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "ba8c4299a9f97e28c74bd76b031e23a3"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "ad6d2be62c9435e2c4e55ae1823af2ef"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "2bfa202fdd83789a8323b75cd05aa5da"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "bebecb789c4025f1ccaf0f9e14dad49a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7498127ed92463a0dbec1f90a7045367"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "1da45c29f71d1321e66c0de7037db565"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "d74d9b32c154cea168a71d380f9ecbc1"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "975b8c12a951d04760f89eb22db6bfe7"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "641ed1265baaf308aeb81202377e74fb"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f2a6a1df194e1352567023a0e063ed2a"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "919bd2c87dbcfc68ea664574daf1afba"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "73ded52ab9a763b9e20a0632f1f06934"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "fd7d548f34c5831bfa2f5144477f3887"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "79860ca757ad3efb92bb4cd58ad970a7"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "7438ac4d657d24e4ff9c62d72130c5f6"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "ba2ce4057d048775b809741ab07bd3a2"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "26de75671268b461c39f17bfd9ff6cde"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "283beddeffe346dc3aa722907b4ee62c"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5ac2a4d8318e9ed9b16d6c3618595e27"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "2510156460fba7d3419db6974020c468"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "41174118108f17fc749d7c58862c97b2"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "5569dcf1a082a2c3df9923deabb7da48"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "b8a179c6e81d8c549d5cabe7adee512a"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f3b4fe07855da93ae7cb6b4a5f2a8495"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "512ac33b5732bd2b256a59cea4ad46a9"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "46dc57aaff655e904b511da1485395ad"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "45dd4d45be0eb3c39374d47d68f88d00"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "8614df69a72df5d92796d479b185aec4"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0aed0eb633b5117fbe21d36917bc6a17"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "8cd65967c9d54e756cfc61cf5e3d48fd"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "2fec0e32785b93e5b70455d84f2e7ecf"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0538558c42354e29aff6f08ce5fa5341"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2e480a4304b5a820d305a961890b261a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ed77d528dbf51b1e6ea98c84b6b0a969"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "aa13df5153b2e3b3b8d7b6d6688da2b0"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "fbcefcf3cdfe3d00eb7ebeb65eecbce2"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "9b7d1759a82804480136ee55786d2142"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "48f6b670321e7da463d9548fbe00cd23"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "c016c889469b5eabbd50b682baa44ece"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "0ac6b3816e514a2e1ff9c75dcc3936c2"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "39f4dbdd89313f4bdf09e23a13c5c2e9"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "34f96e330594c6e3cec94f0eab4c24fe"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "b80cdac0f02d956447ac59066b0784b4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "36a7b10962a7ee22d7d74d08db6e72a4"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "5e7bda674d5df6564f6deaf7b1cf4ed8"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "69955c9602b24c46ba7636afb7bc05ed"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "09db443fe56969d9588ff5fcde886f02"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "ca2a1f362acc10322574e69dfa729039"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "3c421395f914df2a1578cb6aed87e69f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "2fc7c5ac17d3b28b0a7de3726e542a2e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "b912c0a6ad299c24049398af8df776db"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7064f5aa49847a7c8b00700fcb19348f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "1ee18668f27da7285805fb4c66b481f8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "61b7af4185c3b8b2339ec1d714defd33"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "af71284c2b5f1f2969092c1e405a8274"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "046becdb131409f0c78c21e80f1d7c4c"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "6e312b6b9e65d654fc52d72e92c895df"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "1ea32b9b36a1db09f3e699e641c6e3db"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "8b7fc3f4d2b3fb4e66a3c525e215a330"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2f34fd304f171e1a570ebd2912855107"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5086707bfe4c5e5ca44ff268c4448ec5"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "969d1c28dcd10236aadd0cb737e415f9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "34cdee2d09cc4d145390cfd28e540475"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b3cee46f81269d46b54d936a3874871e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "76799a823294a5e1276e7332d4e9e3ab"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6a75f482b17313f952e084e7a94cfeea"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f01cc5de9fefc77f0106a0885961566a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "546cc0d8dbfaceb25e0e82e829268a83"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "368ffedac5ecbf3b7ca8f5c168242c3d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "354bcb8dce6caedc93cdc6a80a51c1f3"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "4910163da0310ceb3d5932f6030025be"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4821a08e34bef8d68c37772ec3cf449a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "49f2c9c2632f29585ea48a1e86e15fdd"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c872a86ae03f328052d0f0fda93d949d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "4c4a30218343031879b409c9a6029d35"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "fa73ab84a421647e64c47291984a9904"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "1d1c078c0ab2396271ec7411b76069d4"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "1e3aa0895785179191f4dd7d8bd1efcb"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c9499761f61f6f44935edf72f331c51b"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "ad23165df057da45af337ac18a964709"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "8d56c1e78b9c319b94a32ac67ea10562"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "05d9f70b700e79375209cdafc0d8df88"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1e9cf4e3f3c7d484e4f81ce239df0bdf"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "3804f625a4bb192ea9f316f446fbc404"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a1604181fc030d84860a02b2830d37a6"
  },
  {
    "url": "tag/github/index.html",
    "revision": "e5d7b97795e535837dbc804a18882add"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c186e5888e551700cfb08e14e8b1745c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "95bd38073abbf2bb1fe5657775f566d9"
  },
  {
    "url": "tag/index.html",
    "revision": "a12e16c2ba555205a56418b61bbe74bc"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ca9e9ad5970431674fbc8653056e9fb6"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c14376bbc9ea454555cd614e40467deb"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "17430d1a3f2b0b83d627aac2a4aa9bf9"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e50d5b80c3f5c123b49d3df9aae7a66b"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "9616904d395a49911e94eab1ede25c19"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7e979caa0cc175b1081b3370a047af28"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5ab0272237b06d1928169022ab233098"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "f7b83a43b765bb78878bbd805fea7f34"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b2e19de4d5e2f3efb3d204f6514d85e3"
  },
  {
    "url": "tag/json/index.html",
    "revision": "2cf11760cbe241cbb9ba433ccf4d9bbf"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d1cfb45c2a9292ff08d2ce3bdca7885a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "c5cb9d794d8de03f342c662403a6fc51"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e17b8efcc38f17f1dc5e13f046362a05"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "058d682a4a3aa86ea6677ca9a11a7ee8"
  },
  {
    "url": "tag/read/index.html",
    "revision": "69ed46ecc066dfd21e5cd02b9fd91486"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "3bfb54e01d838ccefa0e94c5257e1535"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cb51ce2174b8ea246ea95ce8fc215614"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "97e69fb339ab0e5298dbd80ce84672a1"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "b550c8d56902525f1ae6fe7c326b2235"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "a790466949452553ace296d066bba4aa"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "654bbc4f35fd684c134aa8a7423713e8"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "147b38b2d6bf760a7288833c1d9c6f25"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "a4a96b11c88cd3ee3433c1ff1a0d7644"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f57c00d9025d52b859228f5ca497a59a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8492558f1cf2c5d6176f533892afb17e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "49078ec4a73608a9753c68b5ad934aac"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "38a78ebb6385d60bf7b9647d28239d72"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "35837e25433f352a6af5365593c67156"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "db5b895ed70037f34b11b18075842f40"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "c0ce3eb90900ce7958b525b078def54f"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "d9fae11fe92b897e385d8aa1a30a982f"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "48bc01268643eeedc636512715baa0ff"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "04fec6efa17dbc36a497ec42d83c9ed7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "08b44a1e3a92fbabf9cdcc6b2ce05f6d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "894ddd570abac412b3b0f825f57526a9"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "1c17edc5c53cf6ccb0132085be181994"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0b4e38473671c08e2f41a5b9393fd5bd"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "68f0d53e9f614eaeaf9e0e3e254b15ab"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c73f4fe6fb0ff183128fc646ac4a8fb4"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "ce810db591fbbba7958f3cda7ff8f570"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5e3b1efedfa8917b6294b47c8ec58247"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b4ae5cab4d5f653681bceb8ea0279f5f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "d346d2766cd4ba38a426b64678fbfd23"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "18973b1360c87528175e232cb3933ff6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "13ff812e8019530bf752a46ece3fe727"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e7dfcb0e901bcb51edbecdc1ff6988dc"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "67381822d8e5c3aadbf6a7f654724811"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "16b75c7c4a78f6706de1f1934efbec81"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "104597b73734019ef53e09e967e737c5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e148680882f8fea37746e1281d91683e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d2d68c0c883e2e44b23c1fa9bea1c201"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0a7aad6604a31e94b2c5fc742249a14d"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "5a50273e16cef43b1a5057dcd26f5aa4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "baf98fe55af447ef1ab71c356291a1c9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8cc0688d2c4b387a3571d66742ab782d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "6e3bbc8e85856ec1e7159b2f92db89d3"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "15068b911bffd5805bc54e5daf0ce82f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2af73ab005f20f6ba62daebfe2710410"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7db8752af3d049ab38bb6cdcdb2d8b27"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e9af6894d957b6826057e5289e921fef"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f678b2d33227f0f88f10a5f8fc2b24cb"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "af231e1fc8e6d18efed80d4006e98730"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "749939a09e6f6788e4314830f3968945"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "7f96dacb7322a3f3429c414262e63084"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1e6690c56d56cf60f46a0e0ef4c49a1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "9f93cdbdd8e301a08e98c822fe17907f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "dedf6d63fcf563906995659ecb4d4250"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "be1b2618d525450022baedf499ecb334"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "21357dbfad799383393a1f81eb2fd94c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b124ef8cb0a2b6a8d0d75b44bc3e43c3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b841eba80a88bbf8d7c1b7e41886c156"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2354267037b1967ecbf2c6d488daa652"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d20b3ff6784069456e7437f25baee69d"
  },
  {
    "url": "tools/note/index.html",
    "revision": "5bcf04b864d9dc50e4c68dd223007796"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "aec2b1966ea0f6bc3f3fea745119b877"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d987268b538f983b07b800b22deb9264"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a625e7e98f60848b439ba650001e9daa"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "700100bc91b00e22b9d63d6fe91162be"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "aa451935d525671d9733984e04b68391"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d46b6ccd7114dea636087280bd2a2219"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "80379b243d19ce630dcafadf8d096def"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "5b78032a3cda5e54999f55d3c7115fca"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "55e1ed08cfd8fde0c1eef18aa6f75978"
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
