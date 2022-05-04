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
    "revision": "1ae6e850477fba4cb407c2d8e86c3917"
  },
  {
    "url": "about/app/index.html",
    "revision": "b9deebd26d1d83fb0cc562846aefaac3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "fc606f9e72f918b99551b66ee97265da"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b9c8383c7fa340fa63f70e36a9262294"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "63e4959491c5489ebb5dd29d32af263d"
  },
  {
    "url": "about/index/index.html",
    "revision": "50036357d80136a1dfec37b715a73cf5"
  },
  {
    "url": "ai/index.html",
    "revision": "cd89046af1bfb51b23b3cda5a1785c8e"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "2c7548eb707bb2d6fae62944d54bb2a2"
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
    "url": "assets/js/121.71aec72d.js",
    "revision": "93e690046f555a781399f9458883b95f"
  },
  {
    "url": "assets/js/122.f61ca852.js",
    "revision": "5e6a2045794c54aa594d19ae2cd8d279"
  },
  {
    "url": "assets/js/123.66814cbf.js",
    "revision": "99678cda6543406825d281d6a3d77475"
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
    "url": "assets/js/139.9084d34d.js",
    "revision": "92f14aa57176190284e580b8f3b69b51"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
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
    "url": "assets/js/186.e9507d2e.js",
    "revision": "a14e0d62ce50f9ffe047c732e2d21ca0"
  },
  {
    "url": "assets/js/187.cd95811f.js",
    "revision": "7663f1f6e2074ba964ea07d9bf5714af"
  },
  {
    "url": "assets/js/188.0672e355.js",
    "revision": "bca4adc209edc9501c416bb2e1b846de"
  },
  {
    "url": "assets/js/189.7e4e1ff4.js",
    "revision": "0341fbd13411418d130f0614e090fd29"
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
    "url": "assets/js/213.c9d3365d.js",
    "revision": "592f7e646234708f24aa0d2dc06cff3c"
  },
  {
    "url": "assets/js/214.9e426da3.js",
    "revision": "5ed5598ef1f23f6bd859e17b59775c32"
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
    "url": "assets/js/219.7d28d6ff.js",
    "revision": "2d7197f95dc926973cc23055c82b87af"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.a00e76f5.js",
    "revision": "f2cc34369ff002a4b7c0c3264a7c26f8"
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
    "url": "assets/js/225.e305248b.js",
    "revision": "8e4c17b20fcb9a73031d74367e500ecd"
  },
  {
    "url": "assets/js/226.0e093686.js",
    "revision": "e00f4dd4cba73aaba9bb52894719cf94"
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
    "url": "assets/js/246.544b8bb5.js",
    "revision": "40d17bb5295049cfcccbda4f495e053d"
  },
  {
    "url": "assets/js/247.4255e14c.js",
    "revision": "f8cd1b691c26adef10bba53eac986621"
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
    "url": "assets/js/250.9ef1ddf6.js",
    "revision": "1d14f309ad65d2fb3d8847cf2d4c20b4"
  },
  {
    "url": "assets/js/251.1cada397.js",
    "revision": "24b61c27350fcf42274eb6badce5e731"
  },
  {
    "url": "assets/js/252.4b0b9267.js",
    "revision": "0ce584876c7ad8571afce9a9176bfa1e"
  },
  {
    "url": "assets/js/253.b74e1d5f.js",
    "revision": "d896ed4819822b20f5f20fb777c75bf5"
  },
  {
    "url": "assets/js/254.c393fd40.js",
    "revision": "5c06943af685f41483b3c54b7d17a484"
  },
  {
    "url": "assets/js/255.5b353924.js",
    "revision": "a1a8c584db1ec64ae105261169573eb8"
  },
  {
    "url": "assets/js/256.7312546b.js",
    "revision": "849279213a93c17dc361c9540833b369"
  },
  {
    "url": "assets/js/257.40a5d892.js",
    "revision": "ccdee3e48c06248820d190c52b36d42a"
  },
  {
    "url": "assets/js/258.3e7e195d.js",
    "revision": "cb4de87ca1e3c8a6923159ae953ee0f2"
  },
  {
    "url": "assets/js/259.0ae08692.js",
    "revision": "6094c864e8b4edebe36003b41e8e55ae"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/260.50a9b42f.js",
    "revision": "bc4b7bac5d5461b2720457642ba44fe3"
  },
  {
    "url": "assets/js/261.817416af.js",
    "revision": "b3836be1bf4587ccf16e683efbe84e26"
  },
  {
    "url": "assets/js/262.b83a3d8a.js",
    "revision": "69d59b4d6b78d815878a1f87f8e90001"
  },
  {
    "url": "assets/js/263.8219bc37.js",
    "revision": "a6d0c6419fcefc32654df5f4314ab646"
  },
  {
    "url": "assets/js/264.2a1cde22.js",
    "revision": "7157b02be62435bd050e542023db485e"
  },
  {
    "url": "assets/js/265.ebabb164.js",
    "revision": "fdab049d4c604605736948ab477911ac"
  },
  {
    "url": "assets/js/266.f4a8c53d.js",
    "revision": "9ba1681735e762e2bc51b18ba4c77386"
  },
  {
    "url": "assets/js/267.11d8de6c.js",
    "revision": "25120d97d6f4e52e65d057dc2c3e4a49"
  },
  {
    "url": "assets/js/268.0d0d08ca.js",
    "revision": "eafe691de2b6bbe7b2d6ecd330ddd912"
  },
  {
    "url": "assets/js/269.b471223f.js",
    "revision": "bd207228376a2394635a19c201754441"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/270.f766a5f7.js",
    "revision": "e6a5eb3fcb83abfc224f5a4ab5cbc42c"
  },
  {
    "url": "assets/js/271.1d3ce545.js",
    "revision": "3e8427015026bf8390a49f6f1245d830"
  },
  {
    "url": "assets/js/272.967e8c48.js",
    "revision": "ced3e66aa6e0afdcc9ac2d0cfb66179d"
  },
  {
    "url": "assets/js/273.4a73711e.js",
    "revision": "6ba381a748dd1c682965bf77a2ed6c69"
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
    "url": "assets/js/app.67642d85.js",
    "revision": "89fbea4197925fc257c57caa62f3076a"
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
    "revision": "59197f74c5d0fc2a1cb36abac83f6e71"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e280b869cea303e31558df3f06facf51"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e61687d9ff735b6e06f0b4c47690c676"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d6ad084ef93c1a0024c41ed893544fc3"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ed62449ce9b25f95d1b039e248f03630"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2231ad5d16258c2ce241db2c3d5f2593"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "04057e25ce85c4471d5e8a232c412bd1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "726e9822bc1178df3a8eeb95f322883c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1ff5ebbbdfabedc4886c5ac79fb92e36"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c7ff05f11ba0af899e40f8177d19033f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c56c8651abd83c159c2a87974fffbbdf"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "e183c991414eae76f6a2524f808ebcbc"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "f49591e248353ec9f3bda5ee67aa85b3"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "bcdd75b375f2262e39424a4b278fc7c5"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8a499db8aeb603d56e4739857488d2c9"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "65f934a855960f81ba9eafca67f71e23"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4214ae54c582dd65b2714c771a7f04af"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "02e2920f28738384c6e1025891a7bc84"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "1bce70dd710b2ec9fce15179b9b25adf"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "37f17fecd2981248e21f0e7c5a67f65e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "ee31f786c4e922d926eefa6c147429a0"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "9aac2955c672c6b2d5b5d014bca99f9d"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ea2de7738a126cb8ac05d2a2a063959e"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "03805100df75d998a9802a6e30ba0a5c"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "adc95059caddbcce83767317f530fa42"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "5746f323267361abff7328091a0003f1"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "89d40790c7e18cbc71214a913a0f6aaf"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "fc7a6a804c9e1e5ed3999416e84c4864"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "42ab14effde8acb37f5e0b50b1885d0b"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "27ef4db39779ee3255eefa758350f935"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "710dd8101e604aec48c70c96f3826824"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "a291e5522b32fa183dae87a07bed7f40"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "43f47cf5b24d8740cf4bb03a1cd57fe1"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b36a5cfd6fa6e3c34d09fa92edf00315"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "cf160d89658d5808c54e264dd3edc758"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "37edf968707b4e507a5d700dd73d867b"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "19ca84f3b2c12205fcd617f57ce19803"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "2f61facc7e1fdfbdad18e3633137c05e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "77c1ee344279138ea98535502eadf6e3"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b7e3a8362a5707adf8c9c0f2efb3a9e5"
  },
  {
    "url": "book/index.html",
    "revision": "f6fbf5e4d7894f3882c14922d237d50c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8b4402e402851a6d6dac54637c37a6bc"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "8701030322b65c93d963cf409c35b1e4"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "bbfa07cd7122c98dc875a123bfd62a69"
  },
  {
    "url": "c/audio/index.html",
    "revision": "53491989e172b354ffb0ce490fe24034"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "fd3f4c0841c3396d236d4121ec79b8cd"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "9dd9faab5229aab2ef88d06e37bcd5fa"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "14fbe419e4ca34281a0c22c9f65c0ef3"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "9b95312ae8359b48a52ae4c750dedded"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b1a573bbbb7cf0bafcc61164bf1a6e67"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d0c8c1fcd92dc636f46d388aa39047e2"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "2153cd807526d5cd53f7b8635e02b114"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "889fde36b1d97e079cd7e5f92d89851f"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "efbef3c2ae87742b54a8e085cf47494c"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "608127a2e2cf097b39122fa39a0f8b93"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "2d6940c04493e54e0cd738afa9d1911b"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "378f1164fd3fde118996e64bd6c22540"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "3866c2d947fd4e5f60b060b353c214e7"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "248a0eec11497bf8ce152d54d5e3313a"
  },
  {
    "url": "c/program/index.html",
    "revision": "aac9f69e981ae049f2c5179926bda9b2"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "a47a37a092f99787bfff8f04a09f8b49"
  },
  {
    "url": "categories/index.html",
    "revision": "e46ac44554cf9acbf692a35c319067d8"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "c14aa9144aa0a45c1cacce3bfeca117c"
  },
  {
    "url": "figma/index.html",
    "revision": "8fa80ea8efbf0b62c31421bcd345d555"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "4ac09736adbcafe95bc1ddc8e22797e6"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "98161b1132a353a376cacd823432d7c3"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "135a8d627c2e58b4facc4a444b09efe1"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "c8fad06282a2eab5436120db6e427952"
  },
  {
    "url": "flutter/index.html",
    "revision": "fe5a2155037ff846432a88f32ecd50c2"
  },
  {
    "url": "flutter/point.html",
    "revision": "0669290c60d7e54b99014cb88e5278c9"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "213a2ad05bf753abbc8710e69c53e9a0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "61b0689ace23e3b696f22f929e9395f9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "da725f312a1cced100230303659b741c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5e9bb22386ff77dd4d7c3aa490a87dfb"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c0591ce4b9da3b9b0be133f13aff3ad1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6377149dab8fee91c3cf0588e0a622f1"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "834ea584650a665c6fcd1edbb75c99fb"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "52492787fc844acc3cb00c381a657ff7"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "58dd618028fa76ed59f550bf6cb0dd32"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "9e5cf3d49f7e8401b9c80004044f4199"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "77a5b3a07736866581a01e1edf38e032"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "56899a1e10fc7d6e00c4eb0f7cc697a9"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d558a549f1bd505058421df2f6c4c3e9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e60f4b276e813fecd4c7a1ce50a37a2a"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a8c7203c8eb501e5c6d9ac3e0ec7fda9"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "2dc74daaecd14f917a8342aff976e170"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "b616f4418ed4d8e3f53ab82cbff90915"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "a9b7d1076af70459a8880bf4828daed7"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e685d6c86e6743938c7ef8e95a2d05c5"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "26a00e739ce9a9c4c1cba9ddd68f4aa4"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "864620057c69c597b2d5400783b1024e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d52a73978a307a91138ad5720badb085"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "bd6f0f83677c4a999bd89215c29a274b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3494a2ee9548b0a52e9099d91c511e4d"
  },
  {
    "url": "haskell/index.html",
    "revision": "d1fb34881c477c961497b86f9fffd19a"
  },
  {
    "url": "index.html",
    "revision": "9f3e6e042be9de923e7048b30f97de66"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "f9a75a4a108a59370240085777667c40"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "02f00267aa7b8bb4f3eff0b8dd6df0e9"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "302a6e04dfa367a6d56bb1232382053f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "cf8ec8bebd49ed2a3a6084bb5eaa2595"
  },
  {
    "url": "python/index.html",
    "revision": "dfb67c0ac1a9c74f2c0e46cf86873c30"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "dd40122ad693dcd30ad785b5bfb400f2"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "75e286c8b053f23599ae03a45224cdeb"
  },
  {
    "url": "python/python-file.html",
    "revision": "5b3e4c8fb8cbd17f133413f39aa5149b"
  },
  {
    "url": "python/python-function.html",
    "revision": "942f90fd9a97e83e82af53d24fc6043c"
  },
  {
    "url": "python/python-generator.html",
    "revision": "63364dfebf4377b948ede9b14cb41c37"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "daae3f6443cc2981bf0468540af1e186"
  },
  {
    "url": "python/python-module.html",
    "revision": "f640e6612d8ac3e261e0122a28f1a488"
  },
  {
    "url": "python/python-string.html",
    "revision": "ba7e93e5fba8c5cfb9930f505bf84ede"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "2b58403da5417e00b8a2a1d0993e25c5"
  },
  {
    "url": "read/index.html",
    "revision": "cd031b5b57f6b9cd610ee942c910b73a"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "a400492ae744ac94f57c9940729e4d6e"
  },
  {
    "url": "swift/better/available.html",
    "revision": "86834798c75db7c3e9d97c1fbc3cfc51"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "f1979416e6b73be8291dc7ddb3b50b69"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "d475b71f3000a415ef3a2328d40b7327"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "afc4d271b198fd583c4f896d67908ec5"
  },
  {
    "url": "swift/better/di.html",
    "revision": "e3a1857f8e10ea04c19fc40b71972175"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a4a0c0b62f7d37610f88693455ffd8de"
  },
  {
    "url": "swift/better/last.html",
    "revision": "cfa778468d7a36336a7bcbc9bd4cbefe"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1b3b7964e0819b65d9ebcdaa5ef5e8c3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b04dec26a474e6e7c03da699827979d5"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "daaf56d41f324fa1d6724750df733206"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "476108c12ce6a4b3e9946e504769abc4"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "820e407e20e4687249c47023d80fd7d2"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "538b4dbd3faab7c1854484d81da7e0ef"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2ccc0f3e8602a85ed9829d31d36a722a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "44a7a6ccbe5f0f7b5f400dfed786ac82"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "84606200e274c5caf1684bc782db19a1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "bcbd56444b387aac80b1c9b243e1b0a6"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "fdd67505c6aa3e08a05178a5e49e7149"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "966402d1b206c05dff7b275b21d9a7da"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "8eb0f3c99170f76f9470ee28aa0016a4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "cd550a03d7d89c0fdcd2eaef95fd0346"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a3d216b65b272e7eda68c279dce997e5"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "ee6a43c63abddc3b50a22f0f2e72700c"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "f758ded3f9cab785ce9e168771d75a2e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b38bb933d15b0982960b60945810626e"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "14a89edebec3f61a53ac830a654c3473"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "41e9ff957da8c9202b4a01760144ea5d"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "cd901bebd4be9a47e3c1385988414317"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "5a98ba6aa8077e0ef633b77f4cb796c2"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "8c6d1d05da7e0535b86d3fff554fcc22"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "efb540cdad57d77afb9a7f39825446f6"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "c11b61377905bd5fead0d87d6e0ce904"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "581a346295c69c2414b672cca176744b"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "1e2dcd262149e7d2fd372468ea543791"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d0a39fc31abfef9d45711de8f4e7c3a0"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "197f0c700c2e593eff970ce0a276e679"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "5c66307dfe09f47608da5930d99dcab3"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b41a76d1fa5636444887d1854670fa55"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "549ac9db738bbdd6c40413956c613c20"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2013b02e3494de1c75061d40227e4aa4"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "1d6f527f1e609124fa41df19a355ecb8"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "4d50dee518d376958d69ea4aef47ecc0"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "55701f989dedf3ce3072cee6ec15d401"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "93b98e3e947cc1a60b147a7ad3dcd33d"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "338fd78833f3bb17175781ab2570ebe3"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "065e3c4e9c70c97a0d0b670c0a3ab85c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "11a62302285edf01729f06ec84b2e80a"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "fe75fa7ea5198c95a8ebd8c675715614"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b6ed6e0b100f6e75e8e84aba45cae33c"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "68a89fca8dbd0cf3ae0d6346be060069"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "b89500cce331e52ff3e9bb7781ffc441"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "fe1b710ed4f955d7c0bf9e995b9f67d1"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "d2f509ba847124d21e426a8f66938216"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "fbecf1a56fbed9c5003136af10937fa3"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "72b25a0f50df8866644961644a68536a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b37737ba5e78e61f5176d1dce1c02521"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "08ecd0f36c1b99de4dcf2fb63ff3408f"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "4442e4c22e0a409796d3ea5fb60fd77f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b675f7585a5fca7fa960b02c19782e27"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "3d1f17171074d47355d0e5f1538c2bc0"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "195b8cac989da38ce62c0d21a13669cb"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "784e754067a7200ee88dab6ff17894ef"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "ca5455809a78e4fcc738bfde4a9ec2de"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "82008322bb6d542254dbc11d6554c5ab"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "72b84407c637f864a840efd08029e359"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5626fb691268651a85f148590a1d3a25"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "c69c63b14db4bed351450858d330783f"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1ea3bdeaa1b0f2c926daa2f454e2e065"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "20d51fbec10e11516ba4d3afdc710e87"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "a81a1d8c9097500ca819d60b2bbac21b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b37917957105653db133f25a0789f93a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "a59cdf91b868014d259fc7e1a67254bf"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "eca652aab9b53b752108d84c1bd42703"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "9524d647609040e6587e78407c0d7435"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "c1eac2edbaa4bf00a70d7731b72fe812"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "17ad6308be159154e3ec97ebdbb4e12f"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "044bf75888d5295171646cf4c2779249"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "358d0a354b1bdf6201981f8c062bf912"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "8cc7cfd97761dd6e942de6616053077e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "53ed6bfbde9b5c1f5a876b231c506900"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "60e227ea97dbffc9626db95e466f765a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "5017bb614ecb65ac30bf317cae8188db"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f7a31d59724ca701751af79d73cf3507"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5d511f91dbff845378defaf9528e9b0f"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "9312aca9eb4258bb0f02eb5665c870e3"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c3e306adbc25c53c10ed263f46641be4"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "4d9ba0d00af2583a76b16e5e182218fb"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b1e187d17a31487f83f6503aefe345ed"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "3b5b3515b34df08b6ebb2bfff7a72658"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "7e03985b6b1a7f3bdbdf6b2888c4a397"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "d903b4fcec62b90e8bf0db9575f8ad23"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "85b2b9debc66e6480c967580d4dfc493"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7dde97472e80bae9f9b7b553d3210e5e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "7a12c94198151f531d73b5f06e570682"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5613cc70446648c10ace61664ee58e10"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "1a2b258fd2627a3ec527cfc51dd9eb1e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "5a507e5e457ba2d96433410ac329dfb5"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "e78da3276c4113cca7589c490c9fc5c4"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "c47df8f1927ef9df581c26bce0e33322"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "387969a65983ef705eb36334765915bb"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0b51a3357423c061d53a077091b3c580"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "fa3e6521601fff9232d2bfc9c6507b80"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "f5af6fe5886c0761e192c69587d4a1d3"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "11c8591e3651d99049390d87070843fc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1bf80b1f454e712d42976afb6c0d0bff"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "6ade5f6f725ccbaddd3aa1b0a5fb3484"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "03fb66b1369917af80f4a44d1cb79790"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "5112a4828314f6c89e76fc5781e59489"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "92a288776f0e308640490ed51ebdd941"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "ef7cfc8ddc21a6b489b0304789e79415"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f2700338d328ac6a92d7458e11bd5410"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c7b0fe8cd0259ea50793ccecb9d63a09"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d08725b75da10645cead24f519b847a4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "376493bb7d92181bc26c1e714a64caf9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "821bfe4781e79e535e2738daaa5acab0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e1cfa4695bd8558cac0831f47722f200"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "55c19fbd27509a9928f01bd09b2947bf"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "6914418383ef54705027b165e8e893b6"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9f7f48b59f1a60fb691f1cc5ba01b579"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "6dcd34088f96ca673c04adfcc353cf1d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b4b4dc06460edba9dce7d9afc35034d6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1cde72380d4269d29e0283435a51dd65"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e677524bc0a63177260f0ae8682c9d5e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0a1ff0cc50a77ff901a923147398d729"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1e1d2819ba317117fcf20a5117f67df2"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f392bc59e0cb5c98bb57a56e85613e82"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "ad2efa0cbe13c898566d0b48af31816c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "0c7ca9a943971e6c2c187b75294d342b"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "323be7e6e5bf5a42d021f4e13d929604"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "619bf5ebef7ebbbf087e0dd6d5dc0459"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "ead6b5527a5de1206e38b821267f7881"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "56e56cbe4260ee324b108822d3ba2761"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "75b5a5f1ff4d24ecc154ac5f49fcc456"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "7e6e313f5620c32f2f8463c061e7059f"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "fe59777987d1ce98f70ebd48f5bfe288"
  },
  {
    "url": "tag/git/index.html",
    "revision": "22d7946d5582e65eff32e1e978f44fe2"
  },
  {
    "url": "tag/github/index.html",
    "revision": "838213351dc87803f62c9061f7fba365"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c0c073baaf2520dbb3264f434aec123c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "00208be88fbe4bcd360ebf742bd3e3fd"
  },
  {
    "url": "tag/index.html",
    "revision": "8696a72f956468affbd68f6b633972da"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a874d85208a51a98e280e4be4527b0bd"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "181abcf870f31187bfb25b812d2c8b88"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "70c5e42d2b44a38294e5e798a60fde78"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "286bd125da27bc15b8384cc1d2eadc72"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "67ac73b37a948d2928f57d2a2368dbe4"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b64d3afa1c0070a53791185edf86a032"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2de76ca30f54f6ddb98263c301aba5c9"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "3542b743c120d7f0cb89e2be2b2231d1"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "cce458f3f6735066704f2fc54d109ea2"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c016244409012941c860859a79af6e31"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2d607e3b3fb4d3bbe314b511604b04f0"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a295d31f8ae6f42bbc6c1580f732a4da"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5a639ed7789651b65f56d45592429983"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9acff9fe787481b516ef79564d13b128"
  },
  {
    "url": "tag/read/index.html",
    "revision": "cfc48f35671fcf6553105d9a2415a94e"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "9b1af1e8750a999b649a7616da693b10"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "1c2e5909b966240510694788b5ab9b2b"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "cf624a6726a664ef3a8a064e230b6f9f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d8f4b9dbb4bf6190de73ac7054ca1676"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "f3da9930966149f217e68560b2305761"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "70cd60a11808c716aabbb0f97f82a74d"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "f3a1b9a6e814379643b3c9f87d01d23f"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "52494d127ab1e0e4cbbd1250ed9601d5"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6ce114723fc781c68e67da04fe887a11"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f20143b8814bfb0fe582054484d07137"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a6cdfc8c8976e497665179504c107b7f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "6f7336458cf400cb4f769369063fc9eb"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "254d52c08f0367eb48c2710583af3dbb"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "65da7a37ad7db5af148462a0c4f95dbb"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "65f334e1fba4fccf1f1883ac2c3be2e9"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "a7a1d8f8b21f6fb24da8ada40d432af1"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "c66a16ee3901bf12e148f924b8089bce"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "b32548117107c09c205be6cd4ebab9a5"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "eddab134442dd7a8bd97778fa4f3e0e4"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f913a3574fc5c3efbf011f669c194cc5"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "56dff69afd131d687c0ffd5d9261151b"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ee30b5c2ba8fb79a0fc5a5eb4c8be48b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "69da044507a25ea5e217fd233d805e0e"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c525947b737c90579c9f82d5d3724077"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "69634305bc0228da9c8eadebda8619e1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "f9f422c7b433194be0f0aa6dc68a69c4"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ca6e321da3e079b28104007e2c98d6c3"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "481ea3a7b99434513135c7610c63b07c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "79de3958abce0337c43bf5e3c00d98cd"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "5b971a50156b7571e4aa532dff498459"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e62853aef823e1fe0c29b28f9dac5b6f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "7c27582843885b6ae9dc3e1fefe140c3"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "195eda6da3c1367df6ca4be6ce0d4bfc"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "884d83f876e5186cb1cdf5cd152c178d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "00d0d5438de9227baf73b8cf9ea0e820"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f83e2547b2cd0bfa5570892f0f4404e8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "7fd15efa7b00b7fa75496fcfe0c588f6"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2226b838955b2dbc788a181d8c9cf2ba"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6509e0f3d834e5c531b779e327aeb875"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d795ba4e3cd353ae18071ed0893f2928"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f98ae313bae9f47f1b9320820f22ccff"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "5129dfaf527da79d8fe08a27f8b385a1"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cd4e26fe390b0e25a717ee10f639d096"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7170303c29036d7c56c0e31d9b3176e7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "2435fcf1a71f1242bb513f296dcf6029"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "405af44db722bd42ed3d3057f2c247ae"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "316009a516d84d1105984752f43ef74e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "15b86e93620e5adaa5b510a4a256a880"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "8106cb760b2ea0a0159f66026c8231e1"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "a86a2aba8ea9df2684e167ec07eeb03c"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a83fd99a4991762fdec54d9dbfa51cd"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "8d2510cd5c2b47cebbf60cdd578aff6c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "3f851bfef41dd2f650a41908fd0e5f7f"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "f114883e6fb7d33a79b330bf3d23afac"
  },
  {
    "url": "tools/git/index.html",
    "revision": "14faefcf2a6c68ed2a20bba14654280f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c7c427d0966a055cc9e16e14bb6a8768"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9d95518c288453084f5de2c3a79d9cb9"
  },
  {
    "url": "tools/html/index.html",
    "revision": "13e7aedde615d629fe985e78b9b6a00b"
  },
  {
    "url": "tools/note/index.html",
    "revision": "543df383b10ed89355a2312e071a1ae4"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "bda73c54fedb3b1fe830f97abfb0223b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "95ad24b2d4b16be50ea7512c87e08af3"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e26aee417f0a7efb91bcaf2d08135424"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "447bfb778e032cd88fa167c657af3bc1"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "6963b217b056cc38099af27a525e689b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c757f35d7c7e2133826d9090b8cbfc16"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8679baabfc2da31fce4fc478682fd295"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "abc398b8a0ae478c3b1759edcad414d0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3699bffdeeeac83f5242f2eb01eed410"
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
