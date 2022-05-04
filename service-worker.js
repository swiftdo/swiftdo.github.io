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
    "revision": "5115e4c85706be5eb38599aa63dfbed1"
  },
  {
    "url": "about/app/index.html",
    "revision": "ed6ce741693101a7c27fffdbddc1df66"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "397011e3c2665e47a5a35673e8819c6d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "77a01187ff388e353524bb01e32be9ce"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "990224917e2cada2aaab4aa645b8cebc"
  },
  {
    "url": "about/index/index.html",
    "revision": "637dd7b714a7c6c7570f57c67f982a1c"
  },
  {
    "url": "ai/index.html",
    "revision": "c1bd49f4512782fba2893f5d784dcf67"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9247410f04bd46d68df0fb22a0fcb959"
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
    "url": "assets/js/10.46e41fff.js",
    "revision": "5c89d115f5f24220fcd050048f63d644"
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
    "url": "assets/js/121.5a2b3e64.js",
    "revision": "05cd31c58372464602b33b7150d28396"
  },
  {
    "url": "assets/js/122.d06de73a.js",
    "revision": "ec38233eb9338bf594a8fc9a1f3485ef"
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
    "url": "assets/js/139.153813ae.js",
    "revision": "f951be7b1ba4a894a144b2d82f5e94b7"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.f061af64.js",
    "revision": "c3e2d3473f2500fe7112f41df50de98e"
  },
  {
    "url": "assets/js/141.799970dd.js",
    "revision": "190d27179fa9974783eb1c7e15202bd3"
  },
  {
    "url": "assets/js/142.17511d32.js",
    "revision": "bb2f3f5f96c4ad58877518bc87d62875"
  },
  {
    "url": "assets/js/143.72704444.js",
    "revision": "134783782aca143f91475559076701ed"
  },
  {
    "url": "assets/js/144.f877b203.js",
    "revision": "a3da4d886bbabae82a8f8a82e09e7be4"
  },
  {
    "url": "assets/js/145.5ad01bac.js",
    "revision": "83b1ed01457e014267dcba09bff272eb"
  },
  {
    "url": "assets/js/146.fa59acdc.js",
    "revision": "1fa5a118702fae182f2298cbe08b1a02"
  },
  {
    "url": "assets/js/147.173e95c2.js",
    "revision": "fce25ad40822357224fead882944b288"
  },
  {
    "url": "assets/js/148.25c0066d.js",
    "revision": "065aff1837ebea9dac6cfd186088fbdc"
  },
  {
    "url": "assets/js/149.32eb0850.js",
    "revision": "1cf7dfd31349d855ed2b1e078b575115"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.b52b13e8.js",
    "revision": "b14dd3e943526568d84efc5b8029d7ec"
  },
  {
    "url": "assets/js/151.f2965cd6.js",
    "revision": "5c95ffc849a438993835d527b4e70014"
  },
  {
    "url": "assets/js/152.7f2d6c4f.js",
    "revision": "ecc9202dffa3a3264dd711dd244dd2d8"
  },
  {
    "url": "assets/js/153.07f8c87b.js",
    "revision": "97eecad88b5ef819538c0161ba1bb681"
  },
  {
    "url": "assets/js/154.7875a082.js",
    "revision": "a78c1b5f9562f82ae31b806e0928967f"
  },
  {
    "url": "assets/js/155.027a5aa4.js",
    "revision": "5ff36c4a4671ada8bbe8d3ef7a8753d2"
  },
  {
    "url": "assets/js/156.7d15b53e.js",
    "revision": "d9f1df9b10ae4c91a6fedce98d045173"
  },
  {
    "url": "assets/js/157.3279b79e.js",
    "revision": "77f30941e9c5dc7710344f9701dfec23"
  },
  {
    "url": "assets/js/158.637f816d.js",
    "revision": "77ceb8aaa89dda1407cc2b0a804a2f9d"
  },
  {
    "url": "assets/js/159.3dd8a4d5.js",
    "revision": "c0279eea803f368405be35eb2cfa3b23"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.668de6bf.js",
    "revision": "a4a4b88665abedf3e94a6d2c6a7bdfc3"
  },
  {
    "url": "assets/js/161.45823305.js",
    "revision": "81fa6ea0e6c931f12cfde16ea12c517f"
  },
  {
    "url": "assets/js/162.d4fbbe39.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.23f84d8a.js",
    "revision": "a478bf1bb706fcac40decfbefb3b5b5b"
  },
  {
    "url": "assets/js/164.6d659763.js",
    "revision": "5080d4eeedc7291e74374018e4727d75"
  },
  {
    "url": "assets/js/165.1caf4495.js",
    "revision": "0ed2994b1e55b076452158194725d08d"
  },
  {
    "url": "assets/js/166.8627e16b.js",
    "revision": "28ad4286e55857927c0cc9567a0d91f7"
  },
  {
    "url": "assets/js/167.80550896.js",
    "revision": "7c2669aa408e7d6116acac79ccdb086d"
  },
  {
    "url": "assets/js/168.3bdbbe70.js",
    "revision": "3dd41ca1e1391e473a964c07bf87c48f"
  },
  {
    "url": "assets/js/169.345492d7.js",
    "revision": "d39cb04e239f0ba8644a3ecb7792bf70"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.1ffbc9e8.js",
    "revision": "2c6226737bdc14865968a88aba6c891b"
  },
  {
    "url": "assets/js/171.5d0073ca.js",
    "revision": "11c4e693a0e1c2accff8bcaccd5790e6"
  },
  {
    "url": "assets/js/172.9a58f1e0.js",
    "revision": "b0286cfffe83224fe490b654394aa912"
  },
  {
    "url": "assets/js/173.f8f6f823.js",
    "revision": "57d28fd94e816a327af6ed7627ef95b9"
  },
  {
    "url": "assets/js/174.d8520fc3.js",
    "revision": "26f2f45be47e63ead90a10afdcb03c0c"
  },
  {
    "url": "assets/js/175.2163f31c.js",
    "revision": "fd99c0d04bbf31a24d85476f357ea32d"
  },
  {
    "url": "assets/js/176.c23b2408.js",
    "revision": "eda5e8ee40df7f8f9526a9ff33c50381"
  },
  {
    "url": "assets/js/177.6322a54a.js",
    "revision": "85db1fa8ec9c18023185cfc9d3427513"
  },
  {
    "url": "assets/js/178.45939b0a.js",
    "revision": "d10ff523fd2da8d5eb529529e365e801"
  },
  {
    "url": "assets/js/179.9cacf259.js",
    "revision": "c69ce2eaee380089a9f837cbb8b4d79f"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.6eb1aa53.js",
    "revision": "cf7af185169cade07f0a255f8c27a102"
  },
  {
    "url": "assets/js/181.46a229be.js",
    "revision": "770e5aba33dc55f129ca24cd06985aec"
  },
  {
    "url": "assets/js/182.8893d830.js",
    "revision": "7d053f1e1147082f5344ba3e3853f9dd"
  },
  {
    "url": "assets/js/183.5203462a.js",
    "revision": "b3b96f352c6f3462356fb58a3bc8f6f0"
  },
  {
    "url": "assets/js/184.97525867.js",
    "revision": "82840fd220020fd04d637fc06f84a774"
  },
  {
    "url": "assets/js/185.ce2e7021.js",
    "revision": "a0e395c9ff856e28316f9b26fd7eebc0"
  },
  {
    "url": "assets/js/186.02a3b87e.js",
    "revision": "5a974f0da39fdd0eb54fe2748613b03d"
  },
  {
    "url": "assets/js/187.80f9de1f.js",
    "revision": "293a88a86b0a0c2dd271e2320ccf157e"
  },
  {
    "url": "assets/js/188.70e717e4.js",
    "revision": "b3cc28a758a3332658ca4b63f9edd3f4"
  },
  {
    "url": "assets/js/189.9ff635d2.js",
    "revision": "2494d80301d6ee4714b3a90d17a5e2cc"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.aaadbb19.js",
    "revision": "2ffcf764780551cb09aca74fd1c8eefc"
  },
  {
    "url": "assets/js/191.e22572f7.js",
    "revision": "30afa45edec46557229b93068d023e01"
  },
  {
    "url": "assets/js/192.9b08b13f.js",
    "revision": "088e84217980d9cc51c382515baad8ed"
  },
  {
    "url": "assets/js/193.9bbd75e1.js",
    "revision": "9ebc7493da4083592c6d008b6a005ff1"
  },
  {
    "url": "assets/js/194.ae67c6b5.js",
    "revision": "317b8fbeea37d7c270e30d37adb18426"
  },
  {
    "url": "assets/js/195.65fc8707.js",
    "revision": "7ed056e0596e8c2d619da65e40f56b9b"
  },
  {
    "url": "assets/js/196.c6553b65.js",
    "revision": "42f9d74a4ad54c5d30ced70987e03251"
  },
  {
    "url": "assets/js/197.38e03837.js",
    "revision": "b11272609717fb9e1bb093526d99cc7a"
  },
  {
    "url": "assets/js/198.54b8ffca.js",
    "revision": "45e15f5e158e863f538f84980af51f0d"
  },
  {
    "url": "assets/js/199.f91db713.js",
    "revision": "a9b3b386d5669a875b929fe29303803c"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.2d7fd413.js",
    "revision": "14ccca4696b51a7cb800c184e6b1327c"
  },
  {
    "url": "assets/js/201.5a0f9227.js",
    "revision": "af58b380ba530569230823cf4eeffeb9"
  },
  {
    "url": "assets/js/202.f7fe6726.js",
    "revision": "e9e7fb01301d22b154e2eaa013fa656e"
  },
  {
    "url": "assets/js/203.0871bf2a.js",
    "revision": "faa4b986a760de9b8cdf5ff66cd2d2fa"
  },
  {
    "url": "assets/js/204.c827ed3b.js",
    "revision": "b4f7b2d18469c5e6a1fffc8218aec6e0"
  },
  {
    "url": "assets/js/205.533c67c4.js",
    "revision": "4615d526794fff799a7257b1c5e90628"
  },
  {
    "url": "assets/js/206.f35c8911.js",
    "revision": "4471afd38676c5a9b2744c7553d23f1a"
  },
  {
    "url": "assets/js/207.38a3d925.js",
    "revision": "b4450e336e4d3b480c141bc0322003f2"
  },
  {
    "url": "assets/js/208.f4eeb9d6.js",
    "revision": "b614381ecc4d412891e64e2448b4255b"
  },
  {
    "url": "assets/js/209.55d60ec0.js",
    "revision": "4c328153e75ab9c7b4f11767786150f6"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.83295c72.js",
    "revision": "f4997de3c9e1cfe086855e55be459413"
  },
  {
    "url": "assets/js/211.ca8c838f.js",
    "revision": "bbb915aa20f6c51986e3aeacc66707ae"
  },
  {
    "url": "assets/js/212.1fbbcfb0.js",
    "revision": "2f0e42b045007d41592ae3bb4226cb08"
  },
  {
    "url": "assets/js/213.b387e1f8.js",
    "revision": "0b5df6fc5cfdc44e55e1ef5d8e5629bf"
  },
  {
    "url": "assets/js/214.949b27c5.js",
    "revision": "ed228bc17edb4a3a5d99b9b6db332e61"
  },
  {
    "url": "assets/js/215.bbb01c6d.js",
    "revision": "4f4b594bd9b7f68f6937ddf90c9c5a1d"
  },
  {
    "url": "assets/js/216.29d79b3d.js",
    "revision": "4601b3c22f702ef2c5d807c1f92fb2c3"
  },
  {
    "url": "assets/js/217.0b662b63.js",
    "revision": "036ccacffd8c2a43d1b844be0713389f"
  },
  {
    "url": "assets/js/218.a3615cd0.js",
    "revision": "2daa701f8a95c82f95e5f6d98d4d322e"
  },
  {
    "url": "assets/js/219.f96746bf.js",
    "revision": "c7176f2fbbb6e18b7af36db5be6fbdaa"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.a3fc053b.js",
    "revision": "95c23752394ce9f1852351ba021d3a8f"
  },
  {
    "url": "assets/js/221.9a23c65f.js",
    "revision": "2bcfad95beb30c5dbf328d01412d7166"
  },
  {
    "url": "assets/js/222.760c7331.js",
    "revision": "32b289d56c91144c2b411cbee42c0d77"
  },
  {
    "url": "assets/js/223.ae31ea82.js",
    "revision": "d8719ff0baad871ef03f66569769c447"
  },
  {
    "url": "assets/js/224.5c0102cc.js",
    "revision": "01331959b3d3521d663e6d309c6befd1"
  },
  {
    "url": "assets/js/225.65e9908a.js",
    "revision": "c4e4473d6c57feafa7c6be0d1b9b0f1c"
  },
  {
    "url": "assets/js/226.53f467c2.js",
    "revision": "da408d309490e38eb8d87c8621e78bb3"
  },
  {
    "url": "assets/js/227.9d57179e.js",
    "revision": "87364be93df6c1e0b07de8e97e0d74ff"
  },
  {
    "url": "assets/js/228.c4900695.js",
    "revision": "b083c0022d9922bd1121dab9c84f9ba9"
  },
  {
    "url": "assets/js/229.9fbe09c9.js",
    "revision": "905813ebb377a52823496f93f3fb264f"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.d575d403.js",
    "revision": "225e18c5c473da6957a2c3d7a7da7f62"
  },
  {
    "url": "assets/js/231.3abdbd40.js",
    "revision": "e0db994ad9190aea8f8a712d99a3f332"
  },
  {
    "url": "assets/js/232.5f7152f7.js",
    "revision": "d840aa7c6a11b1b7d4c0fa4360c44742"
  },
  {
    "url": "assets/js/233.43d4f512.js",
    "revision": "f7604e73c68024d088c7c7bccb2ca488"
  },
  {
    "url": "assets/js/234.156dee3c.js",
    "revision": "80b3447ecb4a17d6282c7ab33ffad7b9"
  },
  {
    "url": "assets/js/235.907103b0.js",
    "revision": "4b30091f46bc8c6bdf423382fe08bb74"
  },
  {
    "url": "assets/js/236.5c94115f.js",
    "revision": "03a32110605e83157fd1c23bec8f7adf"
  },
  {
    "url": "assets/js/237.fc32de82.js",
    "revision": "6e102bac122bb0db3a585cfe91552ef9"
  },
  {
    "url": "assets/js/238.6c85073f.js",
    "revision": "160fd79da5532eb4687b18bd518df0d5"
  },
  {
    "url": "assets/js/239.03dd6e80.js",
    "revision": "5ad9043c49529299500f7381a02a1439"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.9d19ef14.js",
    "revision": "68c8b42b9fb8859a588de44a9e6270f2"
  },
  {
    "url": "assets/js/241.0487c59b.js",
    "revision": "c1c84d321b7e743fcca5fd9c641ebe18"
  },
  {
    "url": "assets/js/242.b066759b.js",
    "revision": "1f5fc4b0a82249e8e8d59e7ddf1b8960"
  },
  {
    "url": "assets/js/243.46823d7e.js",
    "revision": "680f3dd62f84858a26a0dfc71212493b"
  },
  {
    "url": "assets/js/244.f494cf61.js",
    "revision": "98ce267cb1b18f44802edf41b4bfa39c"
  },
  {
    "url": "assets/js/245.48dfb6a9.js",
    "revision": "31b42bac5aed1f9d0c1fa52ee8cd09de"
  },
  {
    "url": "assets/js/246.e332a554.js",
    "revision": "9711427a991a7349e09b6a71cd36ffcc"
  },
  {
    "url": "assets/js/247.6bd8fcdd.js",
    "revision": "6835169e9adf2bd66818c0b26cada053"
  },
  {
    "url": "assets/js/248.15b4ca04.js",
    "revision": "ced62cc5d954b59cd90224b9bf6e89af"
  },
  {
    "url": "assets/js/249.36ddf029.js",
    "revision": "91efef70b0fa57dd8b9c12a8b076152f"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.8c147f37.js",
    "revision": "d92aa6528e269372d98455b15f790177"
  },
  {
    "url": "assets/js/251.1cada397.js",
    "revision": "24b61c27350fcf42274eb6badce5e731"
  },
  {
    "url": "assets/js/252.111157f6.js",
    "revision": "1cbe12b6f8ab336361421bdd67c36dce"
  },
  {
    "url": "assets/js/253.8a33bcad.js",
    "revision": "c8d36b7d79d85d7ac057ce341a75cf6b"
  },
  {
    "url": "assets/js/254.014c4de4.js",
    "revision": "89a04b440e342e9a9e34f60dd9533d10"
  },
  {
    "url": "assets/js/255.6b514785.js",
    "revision": "ff075e71944ecf5fb07fd5f7fca356c5"
  },
  {
    "url": "assets/js/256.2e63df05.js",
    "revision": "96a47c6f47fdda239177e56b56510dd7"
  },
  {
    "url": "assets/js/257.40a5d892.js",
    "revision": "ccdee3e48c06248820d190c52b36d42a"
  },
  {
    "url": "assets/js/258.309ba9df.js",
    "revision": "f2a76ed8d65b60909f0cd141a622ac38"
  },
  {
    "url": "assets/js/259.52936a32.js",
    "revision": "b7c5253eb5fe24b955f13aac82eb69ff"
  },
  {
    "url": "assets/js/26.1b19592f.js",
    "revision": "2c595447d507a660e96dae0a1d0708cc"
  },
  {
    "url": "assets/js/260.c8a67d31.js",
    "revision": "7b3dce8cb2bae72e182492ae0c7bb318"
  },
  {
    "url": "assets/js/261.afda2b0e.js",
    "revision": "d714557ab397c3b65b8710f6ce688a93"
  },
  {
    "url": "assets/js/262.e88358d9.js",
    "revision": "a7d64ce477e737790aa94ecbc095b804"
  },
  {
    "url": "assets/js/263.d9524376.js",
    "revision": "33651513d2acc5fef3bb33ebcd9c7e36"
  },
  {
    "url": "assets/js/264.29dbb116.js",
    "revision": "2d01e4306683870f59f7497d6785dea8"
  },
  {
    "url": "assets/js/265.9dcbdd20.js",
    "revision": "ee1666b53e07484002694969bfb591fd"
  },
  {
    "url": "assets/js/266.93425928.js",
    "revision": "fcc6e9492b823302d88988493606e85e"
  },
  {
    "url": "assets/js/267.a66f4b20.js",
    "revision": "74e5131005d2d948dd5937a36e815d97"
  },
  {
    "url": "assets/js/268.8501a156.js",
    "revision": "beedbf72c5443da7457804b98aa468be"
  },
  {
    "url": "assets/js/269.ca8fc106.js",
    "revision": "bfae3a8f12791f011230333ac63a6920"
  },
  {
    "url": "assets/js/27.3f70a8ea.js",
    "revision": "b4af334dd4bbe8675113fb031b12ffdf"
  },
  {
    "url": "assets/js/270.c3a86716.js",
    "revision": "7246fc79ecaf20babe3f7e3af1e2bc5e"
  },
  {
    "url": "assets/js/271.68760d99.js",
    "revision": "cb2b2ab3dd592a8590bb120e825af828"
  },
  {
    "url": "assets/js/272.9f2a919f.js",
    "revision": "8f575a11bf1b3283d6240333f01fc555"
  },
  {
    "url": "assets/js/273.6ed30b7c.js",
    "revision": "d1af6aea2c4a91d2adbc814e5f6bf24d"
  },
  {
    "url": "assets/js/274.a5b6887e.js",
    "revision": "e95ff0d4d73310906c804c51fc49a6fa"
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
    "url": "assets/js/app.3d9cbdbb.js",
    "revision": "d06ebca22f1ed0c60b6699718633c8ca"
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
    "revision": "4271c45ad015f6b9df7ab177e18f5770"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ac35af266f211e5f68c2d87bb1d4bebc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0c88544f48ae5d682f341023c98a10b9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5d52305f204b552bd03c2bbcdda26021"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ed6eb53b7c1a82675bf6efd4da34efd9"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f4d2795e8a2e89f85579848709e8cce3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c97e85e8d01fd5885eb27fa13b1668bd"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "34002d8ee3e3f80cbb9254cde3a084c9"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "d6b1bd45e9380d066df98b133e1bc2e3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "06eb5c13b01fcdd3945c839665e60d6e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c652a27c1910b6002b0b777a24482261"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "9b8bffc6682f752e1908698407e48f37"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "072a210b43fcc797820afbd72d09644c"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8e64f5ebbccbcbb6156362b301a0f30e"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "a5e968682a3ee424adc970498a86d22a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "1516e7dc57c4d49ffba35620ccf9f01a"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "7700d8d115eb38fbd384619ff1bc4eef"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "6501844e0ddef52222ceea0200037db1"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "de59c606afbd206cf73ff55c86d64ed1"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "3930b9ebb5709183d955779f82684928"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "71bdb05cb8ab9ce0c9e48be704610302"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "a15842a922ee1b75e4d045a0aac26cff"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "2e294a810a02b6d9a0f27716f2767c67"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "93ea24e65009f9db8c338016f43646aa"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "3b8f8d41261cf0405c5400ccb3d53542"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "07100aa293bcb2a43b62bdd69809b49e"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "bc24f3f54188db2c437663ecfd977ac5"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "667c31a4edc3df25e162bab9407e6086"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "48c093c0735957037d7dc108c9dcf2a1"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "2319a2b3f3d0adb9cbb473218ecb7c3d"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "c64dd9c347bb419d1446bed33b58284d"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "67841e5f5abed56afc80490d9a57e72a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "f3bfd0d020495c7177dd7ee4e6603de5"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "5bba9e0871376d3bc0accd9b348d5e73"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ea164ef2636614d2edb2143fcfcab8e7"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f07ad4fcbfe80051d44fd8770681ce1a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "dfcc9837b00b6dacad2aaa86593ad30b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ba014512414ab9bfe4ed9905c6c14097"
  },
  {
    "url": "basis/index/index.html",
    "revision": "de8e0205b9f51ca49fd1b319b320e26c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "753ca45c45019bddbe1353431d9b8e4f"
  },
  {
    "url": "book/index.html",
    "revision": "2710cfae47d64337812f5c42f681642e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "0083dc9568873ae55f45236c16a4894e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "c34bdd217e409cc41496feece29bd623"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "98643fa5191a63de3e7d36dce16a754c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "98097d6755b20be6eb3b297bd44e5662"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "d9e104e35f58411a966d6a3b91388163"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "67c34cafc53e4a25eb6da918870a5ac0"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "2348f98675bb210cafea45605d96dc81"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "dd1afb31b09d74a704b80c1355dcf282"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "61079f75c9cb041ccac9fb4dc3f3cfce"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "fc49a7020fdfbebd1ebd4bd840e9118d"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "fab67f9a3b21eb15793542acf3c4bb2e"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5c7c26810e052c81a95c20ec40c9a54e"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "8bce2f4718e11e8ee45f55964a9b1ce0"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f8ec441d5ec5432942f1d85459566d44"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "00487ca93b0f406534b67dcc77798e2e"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "82d454b7a7316f083d41799b7b837dd3"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "2629aa1b200194126197032985d5e393"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "2322e78d59ac9592fe7d7f662da2af21"
  },
  {
    "url": "c/program/index.html",
    "revision": "945e8044a946dc6890aa21febaa540fa"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "3011d522ee29471368565c6837c20567"
  },
  {
    "url": "categories/index.html",
    "revision": "25e60c78f67741270c4366f6eed62aab"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "cae90db2acf9975e2a01a5e7150c15a3"
  },
  {
    "url": "figma/index.html",
    "revision": "d882c4f88960059dd1f466bef45a3201"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "29adc7f5b5c8ad9b255e7702ac910398"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "0e3f468386827654164434d222ba0e40"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "9e65ac7a782a6429d02a4f34b826b7d0"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "8d4d73a5f1389728d6eaa94ff27f7c6a"
  },
  {
    "url": "flutter/index.html",
    "revision": "2b92a113b8a09a01a3a434425f945704"
  },
  {
    "url": "flutter/point.html",
    "revision": "2010c25623b562c5851821f4e99e7b21"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0754dfd5143d05ee6a2ae44d13747768"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d4c6128a24fbea6ad41dd5948135501d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "40addd845f3e8bd7d259055f05635811"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "99757fdafe725073a23007f546f85098"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3c8b1f064fff8286ea29a19a2f705cb7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "f16b1d7bb53e3ea23fce69e7ebb9b2f2"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a6c5667967fbc6ff5e640904787df10c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "750530640e115987011c472aea377208"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "03b724430c430cbcb1aa8c80896eeb5c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "53d233b9ed022ae6f543ccfed3fd57ee"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "cb7ba214362b97602c9670093f668c24"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e4ec5ebe4e5152d6cd0597b31e3f0c80"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0d07d96e699456b51b572794c147d06d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "422893a205e55e7df8e64f5a119f8848"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f1a43672b1add2f95b6ac2abe7877415"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "48f21234d7ac5bb0289193fbf52b8264"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "b58159f31f14ed1ae4345831dcdaaa53"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3a706855dbf0dbac674f80c6f312a209"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "82ed9b518347fa5854e3ccf1fceca5bb"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "09824b4a9ab3c0723e85a4427473ddb7"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "6315d64974bc6fb41d7e373e7b06428e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "f23602b9320f1ed3d9d57dd10e1529b4"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "e1159b02eb72c8d77de75dad16254ae3"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "83fe028bfd6780ae605e7724881edfb6"
  },
  {
    "url": "haskell/index.html",
    "revision": "d783f43b34a844d44cc14696b228b3dc"
  },
  {
    "url": "index.html",
    "revision": "b6ffcc5f86dcfbf490b5a5541b21f902"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "3d7806fb74bf9a11b0cec089c5b8f852"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "cefd73dff600d2ae9805dcc8513c8559"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "4279f5a3ee25736fde9087c23bfbe855"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "075b0355964b0ee971af6e5205399159"
  },
  {
    "url": "python/index.html",
    "revision": "1a53fdef2292b22632f47b753c569095"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "727751677d73278fe9e2299079c918e5"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "289e01671c2d43d3bd6985eb3d5df9ce"
  },
  {
    "url": "python/python-file.html",
    "revision": "7f8f93ae9170f6ae2477c8866ee5799f"
  },
  {
    "url": "python/python-function.html",
    "revision": "cdb8c552ccbccd5a735acaea2395732c"
  },
  {
    "url": "python/python-generator.html",
    "revision": "740dd4ccc463c01a1e46b7b66f1369f7"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "686da1d44432d5d3783a622b76bc8154"
  },
  {
    "url": "python/python-module.html",
    "revision": "a692307d71ef51417e299d385590cb94"
  },
  {
    "url": "python/python-string.html",
    "revision": "97103f963ee5026ad43f6893c53236d9"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "e143cf64f684754d4f195ac3dc4a0d7c"
  },
  {
    "url": "read/index.html",
    "revision": "29f1ddd2ded034528d8bf601145d8b6e"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "a067e2c0d30051cc1c57155112df86cf"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7881d87ebe14e45e1b438f42e39f8872"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "c6433df787caec70010159d1381223ce"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "24db711f9b757d965d148eb6db7b551f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "16eb18de4f96ad6269aa8f17c1cb3bdf"
  },
  {
    "url": "swift/better/di.html",
    "revision": "5cad1dcf2d55bb0d15d346b558d4b283"
  },
  {
    "url": "swift/better/index.html",
    "revision": "5b56ff133bb3e93602ed71982bac9b1c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "74e9579e031d38b7bdeabd2ef3ae5e9e"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "4ddfb7348646a52bad5a8e84cdd82cb8"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "af26f08d775b0aea7f2c6086dfee53be"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "c513665ad5ac39289a903256f8363eb8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ed990b6e90abb20e910305dc9f15012f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "d3f0b48e95425d90ed80b3fb138f4ef7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "923232c282d545078c199d332e3eb18b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "c9154462b70b888d51ac312a1a07ac79"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "3a236b5f9b8dca9a5b51aa9b9c718240"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "85048e08d2fc196d55ce245f72ec207c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "474d4f71bb5d8ffc00e24da57a912e59"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "239b86882d3e9b70ae4b9f3fd1431548"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "64c3c78f3f515a9559e0082a1258c346"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "bb90b818c3154777d2f2c8e1545f933b"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7111b593ca54de189cc138d646f10f13"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "cfd98e78e86a72df405273dbf26fe2e4"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "3dd0345c4100594abfa1d0ea0d48dd0a"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "120af8ed695be7b43fce9a2f60c13828"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "2312097da6de15f1f72d0030da1fec5c"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "526a8dd2e3386712d88cca35343053cf"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "108b68c928684eda68a3f1809e0671b9"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "88b819989444e254fe0a10e0f8548ada"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "ce804822c5f58bc9db49a2d12499f726"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "48739596e82ca56316d5926178687c36"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "117abc62966262101c57e3f83152fc1d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "f7b275160b54dfee4b4f6264643ef412"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "9c3245c4377760dc2490136d3c511bf6"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "963c917a70209120dab067a6ddade243"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "73420cffb3977fd5779595cf32991f19"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "bb4e251d99490d0910feb48acd7f2122"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "1617fa54ec012e9cc29aac4aea3a6d7e"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c87f7e4f2b4eb2d8412473eaeb2eee7b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "bc3b10ae25adf18e8a43d23dbfc9470b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "de8cc55d81a172299ceda53043383049"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "652074104af98ffde7ac01ce55dafc4e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "7d5259526c6e7fac20a87ea4778f7021"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "94ab94b1e91194a82c55f3496741c870"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "125ff89b49f11bbf45d7d595bdcde27e"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "3f0e6bd7eb5088f56df0d7729f959b6a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "d9651770d388523338ff9b606652c5f6"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "88ed682f27efee7bcb17ce00a7ef5f77"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d49bea0395542f3cce53435eb0287614"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2cdca7f4398e35ce3f5b11eee05adde7"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a793d9040dd946597721ee532c9a9a75"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "afb7ee01300f8a036bd928dfee605c5e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "7f5ad880bbf623d522ab651da7a8ab6d"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "dc26324aaacc07cf12359c0745a6517f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "0973e071a54f016894e0f29e76d221e4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "4618bb97fa04cd0697ae5cb821c64221"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a66f3479184c98b8a62749817c97c646"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "ca553d8c61d7d953c68d85b5db5047bc"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "3d69305094dea101890ef35d6ec82e17"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "9f8c34b4e58add525dea6e22b2972fa9"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "145c9850c14c1061114d0e879c5a2535"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f7b923f99fb4c85e47c79913b5cb3d11"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "8d069377920069ec5deb91d33d11829d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "4431852795e1ac535a695c1829bd545e"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c870861f42214a0f7e2625dafa7751a6"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b6d880c86d922467a50e65a6f400c99e"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "651df18d41e6802d598013248d501ebb"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "14b04b54fe76238da11e56d00b078594"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8fd36180611bf5bb25a37023262a0194"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "72c6f8a467c62b962607038bdd3f1472"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "bde5a74a888e8d83f9586d10502f5e8f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1070e4b71041334e2ff268929b5b3eed"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4d2f615fafa780b186063cf0f8f6b0d3"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "02d3b0b7d2bb20fddad8f57ae6963055"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "1c056f54edb19075261dac38f662a999"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "75358d676d9487fcecefdca7f9405769"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "8ec49116f3735004da20a1159adbb8d7"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "6c7dcc9f112592783c90d97ffd6bc61d"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "ec8bd7dc136b996d05e9fc364b370bd4"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "b566db4c0e04385965197a7ce53c6f4d"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "1e5bd8bdaf6cfc7c3c3de1972d412978"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "59d9f65c3e58786af24a7d03eb03d91e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "36f0aa8fef457f7fc2eeab486897ac01"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "21f1fbfb3dae30f22ff785476405997d"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "39d4d2776774b069a6920ac050c53463"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "8e3be6b0f719c8b21e700d522da825be"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "86d74478d38e7474c89551d4d04d735c"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "9d0eefdb8cd6d4ab3057ab58849d30a2"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "00dd3563ff42ef43fc35b76905ec9f2a"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ca6fe2bce402bd7e010249ca95476317"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "ba025026c106033fb4ba3ac32b3e7521"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "290c87d57b7ffc1217059337d677430c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "4ab0201443b7f54c3f76cbf4377b6e95"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "c7f829e668c54c5cdda4e835b74e6a26"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "1e34cf01831d29d5f145ea79d13f4073"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "a19c394dfbb9551d7d56546f5222e7ab"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "c22a0c4f650d06e6d68d45dfcdc0cd89"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "bbf7caf97d390b88bf97595ecd40f64c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b9bbea41893a778ed32997098668486b"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "46a33ebb0b6b08de4b7b794baf5ebd05"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "d2ff48b25f09e94dbcb5d64b2a37e551"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "2ef30c28db0479e796ead5477113e159"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "1affc8de550ed957fecbe3f34c48f071"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "be242ca8f6a9c7971abd00032c747178"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "e9ccfb66a8293b0a8f495b7c9ebda9d3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7ecf1581f5a208e418111f959389d5e3"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "9d74e790d0def0cbade66e32bfb741bc"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "6f8db38ee4f46073d763291c462280f0"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "4b6ebe331dfc0e357f6e8300648c9622"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "01117ba4424c48b8f972a85fcd394c7b"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "d933909b6929ccd76f25536f1f9f43a1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f04352274788c979bc1c78dbffd9acdb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9135d164ed65e2717c694e511a181245"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "bb101bf92cc376e84c5ee5ce1e775381"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "de47282f76b002c638abfd1713ac404c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "24e63a240d000d86ae62de21387357a6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "70d6b337b80737e583b701551d7ed607"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "1b0cd77474b0f422887ebca5bb87665f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "6f5dd3c164f4f31be91a38f5e1012a52"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6df6ccbead4464608a69c56098a91264"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "8269810691104a26be2fafd221cc0524"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "aadf88e951a94d77208466755b3690ca"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "33151664ef67e42f19493dee8e6180b5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e7094f2220ba36cc0f87dbdd2e335338"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "90f17bbb1ae09f706f3a13493760ac91"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "af2694841f8c77b90f5066fd26b7f9dd"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "001a3fb9eadcce87ff38070746f84fb9"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "cbb02af5948ca380ecc6932914b9c1a1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "04fc93de5bb3e4dbdefe8d409011cd0a"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "de01ce1f2cb20e0b04c5e08b4483fcce"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "9488580c232d750dcc1bcd5ccca1eac0"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "1f0e0700c5204d1cbf62cc19685b9522"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e1508f1d132c950a13de036551c5cc50"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3d01bcaecda57b93506dd722062296a9"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8520156b34c0727122258a412e4779bb"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "2bec5acf46b3ec5dea21e53159c26de4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "56625db882cf453bb94a86768d22d4a0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "a820128c1f895b25e0086bae057e75cf"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "4b22283acbed9fd42c25f6c9fcb218bf"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ef7a3bad8b10293e6b2102a7467d06ec"
  },
  {
    "url": "tag/index.html",
    "revision": "797057885c5093dd2549da0446af56ba"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4dcdf2899e96d1d4fb0d3a4c37384c3a"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "98892fea4c81c55914c2780b10a504b1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "78a6c503bd29023ff5c84e92a7e53e3a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "84afc7f0287f84665ed10ab72973fe94"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "a8f842b228e1585b86438f801a1a4159"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d17034a1ce2fae10874776fc7d4bef0b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "4e2f183c7f0fb3dbbc193844a8dcbdc4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d56428a4d3628aa5efc086848439b2f5"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "e59032efc15056a6ee9eeca4f943e02c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8a0190f7db1ab1c204d6733e754c83d4"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "16f2bcc736d460ef437ff5ea91aad50a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "104848010b3d7b69a3c920f88b769f07"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9afeae3a04827a2820a7f774c47e6700"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9efc4ef67c7bf9874ce27c697aa89405"
  },
  {
    "url": "tag/read/index.html",
    "revision": "ec13a90b66bb10b42760401dcfd519f6"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "2ab3e1e949579156092d87bc30dcf44b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "112f396cf641fe3e0fff351fbb0d1c17"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8e8e6e0cc63d0562fe255c8ab4adb20c"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e8534389fdcf4a4f9a649829d6de5db4"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "c913eadbaa870129c19c1c7ca5ecbe3e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "670afb54f4f2fefc616edeea236c9883"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "caba0012be060fe5c7d6bc2918affdd3"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "e9c189300b8b312043ca37c71cdefc5a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "88f32d5dfdefb865773c5221339d3640"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "9ff24072b149f499a95e39ff777442d9"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d8ac77c4279c127d56f88f06db787e04"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "cdb09186b89b0980b232370261f08225"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "d1e5e043a82ef730068e711b34ab4a2f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0610769510723bf68ed51c84e0431689"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b862f057fa1a689303d9a46c9ce49076"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "ab53f22a1df508574d8b9a8e7c5487de"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3bb6b474190b685a570f7f5c788d62db"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "8cc4d3185951c7b0f9dc9b8326e2cd22"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1234e381f628533fdcc775521d1a159b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "91d3553adbb3b3ceb9abdb561be97ea2"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "195623d17e6bcb4536055505b51f2d07"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0185f885032f6494b7e1b1747877d250"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "231b077e72027f30b6231489a0c91329"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "8f6bae021a27e096c6d46b9e65f2154a"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "0ea8356f3fb786bf1b06ce68f1df490b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "383628cc91d3703f20d8b887e6357848"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a8caa824b1f376373df8b0a8febe437c"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "c9da11c7aaad7200f7931f371fdf366d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "f6659d1830118a877e86aef463bc75b4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fc2b003a6ed04b6d6ae0d28c12617b35"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "341cc583ca0a941a1e898d0552cb3b11"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "fe64e310fdfef7ea06a3ad78cb0566a1"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "12366c160bfd65e81d4cef5bbede7a2b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "2e8aae3da51aa20365ac214800132397"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4ef621f95ce6e423cf8a8c2e9a801347"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b2a87d6251a26edc238b5bb87ffef494"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1114e923a78be844c190c3cc9ce97522"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2b368476e82250ff20b84578acfca0ac"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "823137d72c3907ab8d40eb29c278ede2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "910a758dadd95b647cab917cda7251f9"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9c24c6a47e2086cc651ee6237201c399"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a16a2ad38178725a96054b3c539121e4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c25037de2d2a87e3bc469f9ce074d816"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "88f54a4b7c0be57c83e451b6abc794e7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "7b3211e16ebbc0f15b47a8bbdf5ec9a8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d197492e5a470ecefa002258bb93c21f"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "fc9b2c6ebd7a163ed7279aff370b0b4d"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "6f5a11c12ba7820ffddf0027fc506d38"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "45575882141beeac81aba060e643c225"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d5585461ec8d601e30a51b3aabf66b33"
  },
  {
    "url": "timeline/index.html",
    "revision": "879201df1dbfa887f2ecfbb64d3e9261"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1f6d7ccb8aedd9339c80659670c22f6b"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "91c80071aaadd0e799958c148f3e0ef6"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "7409e51416ef6d39d8d2900eb5a83bb0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0f1641ac742e6b637a7bd7b55f665439"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "10c6860696afd1ffe0b184bd71fa9590"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ee07ae27f68d008287c03b895ab11c5b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "60e5ef6818578816d9c680c8e3a20064"
  },
  {
    "url": "tools/note/index.html",
    "revision": "7535f7efe187380dac020ea07499fa6f"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "551d8deffb23f9606a841a1ce2c6cdb0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5620389143d77f4db126b289080df5f8"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "25196af083269c7f03a4c225bde455ab"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "9449ce9315049963f604d8e7ff41814d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "2a5d3a3834bad5bd8cae0ede9a0561fd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3dbcb60271c8675f7a8155bdffeb39aa"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "3763b5780af5439ea6dde37f4162549d"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "58d5c40b5bf9c45e76f20de256a88a82"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "256544f0723906043222a75d5e0b3a86"
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
