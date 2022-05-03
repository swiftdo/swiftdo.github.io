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
    "revision": "b56665223384938c4b682a759023f56a"
  },
  {
    "url": "about/app/index.html",
    "revision": "86aeb430f96ae6406068ce583d505f9d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c5730192dd1fe7119c42d4e69a2f26a6"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "850ad06ebbc90e3d8203a94579c9aa42"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "a402a6eb3acadf117b090b466ff2a87b"
  },
  {
    "url": "about/index/index.html",
    "revision": "925d09fb68c947c0ead1c5674cd030ce"
  },
  {
    "url": "ai/index.html",
    "revision": "ba14f94435d3b09547414677608afd4f"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "229126a948c200aceac9e7f5702f099c"
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
    "url": "assets/js/121.20ba89f3.js",
    "revision": "b10941fdd2879948f46db6f9d3777d1b"
  },
  {
    "url": "assets/js/122.b5f676e2.js",
    "revision": "37e6d471d4d05b9bcfbd5e4267775956"
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
    "url": "assets/js/129.83181d32.js",
    "revision": "d79cf630848e44861f4658d136438ea2"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.72018f2f.js",
    "revision": "60c4f983ca8983b2dbba802f801e9b18"
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
    "url": "assets/js/137.e61dcb74.js",
    "revision": "3a45f15ab87536d74a71fbad028f45a7"
  },
  {
    "url": "assets/js/138.a2fd2dfa.js",
    "revision": "f38b990bd896dac921f9693cff3d9d45"
  },
  {
    "url": "assets/js/139.48962192.js",
    "revision": "68676631f27bc3763ea1c568b1694b15"
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
    "url": "assets/js/181.58ef6386.js",
    "revision": "960c768df235b95561fb9a36cc5e0727"
  },
  {
    "url": "assets/js/182.7e493282.js",
    "revision": "8050b11d9cee0524fe75d3a0a88139f3"
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
    "url": "assets/js/208.deb43231.js",
    "revision": "79e545c92f3c9b8d87302b3810188a81"
  },
  {
    "url": "assets/js/209.6ed7e83c.js",
    "revision": "ad6ea3b67178f30a700e6763e572862e"
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
    "url": "assets/js/222.1b2e177b.js",
    "revision": "b890789808cc35170c9f6d9b8c64b393"
  },
  {
    "url": "assets/js/223.9ab7974f.js",
    "revision": "90ad6d3e900cd05372eb679c4acc49bf"
  },
  {
    "url": "assets/js/224.3352441c.js",
    "revision": "31b0709cb58cdc9e4f795794c325d8f9"
  },
  {
    "url": "assets/js/225.5014664c.js",
    "revision": "5d7506308a22dcb94892ae5b4fe7236d"
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
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
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
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
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
    "url": "assets/js/35.b91dd8c8.js",
    "revision": "b8831193d7f4e92e53335fcf7eb7df8e"
  },
  {
    "url": "assets/js/36.4189a875.js",
    "revision": "e95cc6141734bb5b9dac7ea7bd61d069"
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
    "url": "assets/js/57.2f1fc7d0.js",
    "revision": "893786aec02b0da526d9653c12c4d831"
  },
  {
    "url": "assets/js/58.4c7c9ef8.js",
    "revision": "671866894ddb89a648eefd55ca0417be"
  },
  {
    "url": "assets/js/59.9cb4cfd1.js",
    "revision": "29aad12e5b13d7a90d1e24767810a782"
  },
  {
    "url": "assets/js/6.9329e00d.js",
    "revision": "8ce97f156f3a1697e4bdb28395bda84a"
  },
  {
    "url": "assets/js/60.33767bf4.js",
    "revision": "9e1fdbfd2b9e4b0f1f24ea959c02b7d9"
  },
  {
    "url": "assets/js/61.adbbb66a.js",
    "revision": "7e8053a3277c2c7f3b46097a9cbf5d64"
  },
  {
    "url": "assets/js/62.7aa6c6b8.js",
    "revision": "586b76535393fee0ce8774d515d1c916"
  },
  {
    "url": "assets/js/63.55d336ac.js",
    "revision": "5b03fbeb5e2040a9650a070132fdb135"
  },
  {
    "url": "assets/js/64.dc1073d0.js",
    "revision": "79d79e1d221dd173499d8e6a6558e417"
  },
  {
    "url": "assets/js/65.98aa9044.js",
    "revision": "c3d1de321f62f090ee8540df51213c6a"
  },
  {
    "url": "assets/js/66.34826071.js",
    "revision": "63c91dfb28ddf695b31358e445f69c56"
  },
  {
    "url": "assets/js/67.0c3808de.js",
    "revision": "8b02f14ee3a4075f0949d39657cdd1a4"
  },
  {
    "url": "assets/js/68.fbc08afd.js",
    "revision": "bf2c7386a99842a5e324ed877ba51128"
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
    "url": "assets/js/app.35d09bc3.js",
    "revision": "78d7b084331e3480a377a39b704456b2"
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
    "revision": "cc02d5f849099275e7a624a4c970be50"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a1a18097ee25ccf6e74a333461073ecc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fa472b9cacbf22c60a29e52e5579bd11"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b92ab7aaaea70fff69611e089d3241c5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "53ba7ed863f217317c2a78ce2e64b303"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "562bc5b9cf0936ef3099ec45e00776b0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5707d276f390384110bee0a9b473e32d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "42d8869d7e074b8020e14288b29ab4ce"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "36bb5d4dce00b4f5d29e31b96f2cafec"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "79be31e0cb316586d921193139e3f947"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "02cce38ecf425edc3935eb2dd5d24cf0"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "b41a12ced5470b2a15813663a1d6770c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "89bc38b5274125fc667ae7376bb5c910"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "56cbeadbc9e8150134ad95c148ceae25"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "50aa3f92a10186b339bcdd6b26351759"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "a870f9f307839590146a6552473f634f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "2735d068710b46a63a00d6ad723fbc72"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "004d5a0993b9685924639e9fab9af950"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "46249eeeece9b96f4ed9d638ad814942"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f8f6b73601a10488b841098f164736d7"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f2712a778a26b3240b2f7457725c0810"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "8e8c28a6a32602b0095c1dcd5285ae8a"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "9569600470dafbeab4cd320ca171d9ab"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "6cfd5276280d131051cb6d1720890bac"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "7f48edda258818dfea755e9d0ef51ad1"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "31586833113231f539d722d36b5352eb"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "aa89cf98af33a972371fce41c11a589f"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "745e4c8b889645e8d227d87d98962925"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "4008a00e27336b5dc07850558a8e547d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "7036f65ea2afc29e1e4257f5081bc31f"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "5712d649068c5216e7cefe8bb3ea2425"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "20a768a0c6d9e00576e6a9c8a28c3b33"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "6fe920767793646601572c57f6dd5b03"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a5e9c4dc2855c7a1a3c755e2cd03684b"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ed75a1f747f8f028ac45005b56adf994"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "c7e6483b6ba87e51b3355c1cac1ce6e7"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "1466c1082508b101c98f27f8031f75d8"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "bd37d39c91c315b2c8637d12ee5e2524"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5ea4a4a255849de1cf252149ef6d64ba"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d7032965c47c188db59fda937ba5f8d2"
  },
  {
    "url": "book/index.html",
    "revision": "13f092ec4334dbe6ce82d060cfd52cf2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f0f31711100a3dc5e6ff3adc005d947f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4a656ba078735116c9e595aa2d8643dd"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "4dcc922927c5230956be6c08f21cc314"
  },
  {
    "url": "c/audio/index.html",
    "revision": "20681e9ebe2a68259f580abaa6dd9496"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "df59f117fdfe343cf7fc69c19be6b58e"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "c2e937f7a2656af2563c4a7550af55f5"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "b398e04587d1d2b3d46916086791b1af"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ae27daba5340bb4097e793ab7e16f94a"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "d6d1836ace1cb8cdd2767fb17a06c678"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d5a0a9ae7fd79d5d7d818719fadc3337"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "f6061eeb755795b5bc43fd0b975db0d0"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "11338f10ef7b64fc1a2f7c2e652f8b2f"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "eb29045e1e89c35d0d65c1d03fe031bc"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f8857e0f445c168b62f7e38ee22cd7e9"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "2a9be7fcdd0588314e68cbd8ec878008"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "ee339ca2e34908fc26fbb896aebafd45"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "369512b78e42f009c72c5f9f4a8ec385"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a64aded625b5e3f07ade33513ebaab0a"
  },
  {
    "url": "c/program/index.html",
    "revision": "d10b349647826056504d8f5ea2f8b28e"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f18bda7eb3e64705272474db25846748"
  },
  {
    "url": "categories/index.html",
    "revision": "04e3b07b0afe7ed3b3d3893c35555827"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "129d2dc43ecb67f87a6f8ee726dd0651"
  },
  {
    "url": "figma/index.html",
    "revision": "c24e9ea3b9824c1b48d193e991b46693"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "e9a9beb1cfd8c4ae3a68955ce163340a"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "ac046ac8e397291c78323d6fe901e0f1"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "5a29b763845aee19c13c7094dcd8b5cd"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "2eefdad3bb490ecbe3cad00fb4164922"
  },
  {
    "url": "flutter/index.html",
    "revision": "dd86504eb6d21abb702ae68a458c9fac"
  },
  {
    "url": "flutter/point.html",
    "revision": "f415d60639b0bfb82b341314ee3a8712"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e2b6b86470f62fbb1998950df38f87f1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5cdfe333478eaac51be6ff837f167e58"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "123ce205f4d1ac5a6661fd67248ec4ce"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "1f947e6754353a0b27920a55b9a65b31"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7bcb50b5d5a12a3b6ed31971bec59636"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "897a6e8707840d6bfa3e519b4fb65d1f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5b26fb909998b94cc0884a5ecb418dc2"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "f3900a0fb438400b8b62ecbb2b3acdbe"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "920848afd76dbe0eedd29d1407f40f1b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "c48c5481e0f6a9261ce90d49154b8053"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "01e9871ce7c1aea147709856afb4fd20"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "423fd0735ec72f2756527493b061a275"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "80eac9c2517efffbd0ae288688a5e0bf"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0de84c774a2abf1706d62967e45dcf20"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a316d9913ada1f3aea040c5f1e043210"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "07318ee8042bf3b807092f9abd0eba1e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ff5de0c67705556022502d984a9eebcf"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "8166c982ba1dbc2991d5867d5bf4c5f7"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "4e5258f2c9943b2faf0eddd923c0139f"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ea330702f46426817ac7e35247e0150f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "eaf70257ac92f5c3bb06dfc876b36e13"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "af15099e982f411f0544c7c764be1b43"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "c5521cb759924452f73e38e404001c9f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "924a5d0c6e9ad5bfc7b710538ec1e4d2"
  },
  {
    "url": "haskell/index.html",
    "revision": "2a923fe829db8ba56b51384244bd2942"
  },
  {
    "url": "index.html",
    "revision": "8ce5aa297b85d6f486517fe20ddc0b50"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "8eca27acdd712c26cb3ee37a6526a277"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9bf7e21720b198f911e7e211f613dda2"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "310e043577ffacbfc296a0f386595668"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "7f140b17f1c4e643681d5a8e80aa0fc9"
  },
  {
    "url": "python/index.html",
    "revision": "54863599e80eedb23d1036814d10715f"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "000bf238214cb61d4d22652707a7777d"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2e6a6688b1c4e350cf38f918598da397"
  },
  {
    "url": "python/python-file.html",
    "revision": "facdfaa1b5a9370b661c8bb161f3d296"
  },
  {
    "url": "python/python-function.html",
    "revision": "c7444a2bbad74d18f34a5026787c44d3"
  },
  {
    "url": "python/python-generator.html",
    "revision": "337ccdde463e2e1dafdc7d4819640b1d"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "d043e3f8d1ecc0a468c583ebf3505d6c"
  },
  {
    "url": "python/python-module.html",
    "revision": "d70685a9d7452254e850206fb6222601"
  },
  {
    "url": "python/python-string.html",
    "revision": "3467a9eb91e060ad1d41a37fd9bbf540"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "6490ac82cf5e0ada8d8907ce422ffc58"
  },
  {
    "url": "read/index.html",
    "revision": "845586a6e05f669379f1b5b079be9010"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "57a4f5712a49bbb93baa7c62d5a3faad"
  },
  {
    "url": "swift/better/available.html",
    "revision": "6a07b49f32c7527d3891fa5288de6189"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9dfeb103de7a35b698a17aff318cde4e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fcbfaadb8a7eab78130e82c71d7e00a0"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "45e16249fb0f47069bfa4d21f5e233b2"
  },
  {
    "url": "swift/better/di.html",
    "revision": "95853d67d0119ede20ba7bc8f4d6aa64"
  },
  {
    "url": "swift/better/index.html",
    "revision": "ebb0d9073693260781ac3d80b5de3bf0"
  },
  {
    "url": "swift/better/last.html",
    "revision": "bc4104fa7a9bc7b49b7c2acaa342c0d3"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "fab8e4cff5fd13564343d285300544e4"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e64b1fa5092882a81b4ca7af170edd10"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "1fc86d935757cebf19c5d45488d884f0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1d15425030c6d3bed8b5d448a3ec1104"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3903c00ec09ed443ad194aedd060ec90"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4fc0d8573e12986d993e646312861ae5"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "085219caa26069924fe8e908966a4c18"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "265429ee642d7136edbedb54a4f9aca2"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "304b5c0c763be3ff85242923d84407e9"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "87107dfff87959c16799f4929db9d030"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "3d5ce2a7606d9aa29d1a0d1cce0190cc"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "712be47adc28800e0c691d54f55f5629"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "733a3366a404d8194cf79acc37c71265"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "00b280e73986646f36a963a61555174a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c5e6412cf8ce91501092a28df235c2c6"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "a6af7fc659c5c4e516019b3c1a5a915c"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "b11534de0ca8c41eb1bd0bbc39833974"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "6456bcbbb896b0087ffb514bd5a437d5"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "23b9b70bc8ff54d6818b3a4c0fe49501"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "92faa4c1cc877a533af3aafc5b33c659"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "7c82df914f406917e0ccc39737ab707d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "d76e5800f767c35b074f08eebf62528c"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "f4b95b3ee08fe17c65a48ae513a59dd2"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "a958566e5dc91c412abc5525a150ee87"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "2c8b8a3eb323e33f58e1e039f9b323b9"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "aa0070dda8dae9bb62c2189035bf026a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "ef09b61a742a992d34a34d560854d4ec"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "aa1512e096ae265c2bf9f0fe20679ed0"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f086c578f018aa6966d580162f77648d"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "47aae77bae81261eb9a34205a7a9108d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "cb7b115c94dd68db56e9118cc2145057"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b2af35f21165e18d21222ef6ad08760d"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "70ef00ffc584710e3f49c9141f3f8a97"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "2dcd370aa3176f353bfd4ad3c007da05"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "861a072a4a51b4a19c7a845db65cfaea"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4626c98a18fb80538e8bd29a25d714b9"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "79b395699a0ec7a84d45d0b7cfa79754"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "68e6e5c41c8dc25070dce7c09168f0b3"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8779cd4d7088638e751d1300e6d009d0"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0a98684eda12ad438601b01734ad89d9"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "54d89f0978d51f13cc9dab9f98fee09e"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "82140116916d91e2a8c3653ed87f9f54"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "910292e3ab588cc2a806328f2c0f0a29"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "d000b0c64041b594c0558cdb75285fde"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "00668865622261231cdbf22d6e817c90"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "cedd8daa408b0ce641d488b9a56b02f3"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "da628e41e677ba2673b43c135020caab"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "a8cfb9e886ab17671178199a5008404a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b90d5736cf8bbdbab17766d85e5acc62"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "3779a3138faed199c8ae1e070a69f346"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5360f46dd2013cc1ff4ffc10b6fb9b9f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6343909adad7f4269b40e33e67cb67bc"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "f4fcd7a9503baece96692e7935791787"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "7f7142bc8e2608f924968c2b6b9e98b5"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "ec0bbb2b035aa378905bfd75d2be9179"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "85964a246abf4908fa7e4665b60e5b7f"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c6d15026b3c0720811d1e604c7aeeeb7"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "1d57316e685f9519297a67d1e4d0f6e8"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "dddd6d1436ae1e3a98807052c3e2f499"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "713d5fe31d00436642faf86add7bfe26"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "435c8d648af151778a170049d39b394b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "cbc09ab249963ef38df862a07bb2b164"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "42fd649535bee513ce9ae00aa4a33dc9"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e4f65772c5b2f84704ba4b083ff311de"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "6b0d8b1139ac014ff2b42d571affdbe7"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3fd122b349a670f14cb5ad74c24fce3b"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "bb378bb0693ff48683c01dc9b2b55b95"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5bfead3ba5e1ee39e991447b3b4b36ee"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "9a6941a2fba75e3d5320ddc63dfd1974"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "4d93799f7e2067cad72108117de134ec"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "79f6e9b021375f4d7bd65d5ce8ed8e6b"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "2e5a4107e7ade4a723921b02ec512e57"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "7fbe8cdb7084abb311f821134eca5652"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "e943597b295f19b88e28ece2cd1e2d6b"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "85ea42908a36bf779a1da61a9b06cd27"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "97ade753834138a559eb832f9883245b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "ce24c84681a078dbf5c7da88d2284654"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "84779ceb27e168ede7804d6cd739e900"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "665d202808ff7dc915f1bd80e1b18c7d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "d0574d89b92c82814fc80848ff314763"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "fcf9cafaef1b4510447b98f85ce02862"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "d98cf332c07003c2282a6285565aab5e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "cfb21df5e0f3d1e04ebd6724c6bc7cee"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "c0207ce27c6e3d2e3d9ca12cb459921c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "4414db438617db01966f2b66c7e178fc"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "e41ab7d29a5fd2dc08e9918bb03ff144"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "161523eadc10e989caf826b22b65814c"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2b2a3fafd74d0577ef66d546e3bb9ecf"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "5e10b2a8f764567fca797366b59252f6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "7524a2ddde3d75ad639c18693365010a"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6c9eb005c325a2ab906103ce5eca93f6"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "68d6ce87c47d7df7957b87be8ff2933a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "a0c028d57b4141eacffdb73c8d09c3f6"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "ea2f06b70b7cf0af3cb03c5706105285"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "f5825cdadc3303b13732ad846fc8f0d0"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "9105a8c06666ca5b46fcc68af7836f0c"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "41084594a605cd394fdeccac10fe88c2"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "241d7f7610b5acbc3831cc5d10b86165"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "4ecfad10b442134dd44101af2576d71a"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "42b866c7c476ee0b768d260460861f69"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "692c13281ee5aac52c6f41e2a599c37f"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "abe1f6c587e8bb5483528d1ec3decabc"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "8a2ffffc631b2e8d491b544879430e0a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "469aaed0ef734173dcb17b152a7e6aa3"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "8304f7a6de454bfc0ce963809e8ddeff"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "63a6c64972a147530be1889e6ca942e3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e744b11ba9af6209edd8745ef9296a32"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e5b46ae84f4852596ca6ae33baf9aef7"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "57711a587fdc99a21f2a54c178068233"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3a33b8181886baf3d9d35d184360e474"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7418d983d2637618e9c845199191d8aa"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ef41cb938a8c959c36ffb7e4103ab84a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "a26c09e9a6fde6759dfcd4d4fc0bc7bc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c308f74c50e5f884893254513e6ed17c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "df4a5938a1fa7d831d7284e9404178b0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "9c4e9060e83558072cea92b5ee5ee6f2"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "90adc8c33d09349a850428114ad07944"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "91ebc1bbc1cc64f570fc30970c240d4c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "24b6c56cf2913057191e5ef1183f1271"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "a4b9a803ec7ae44eb7ea9a9ac2e6a832"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "20961570e1f020d048d4a632e8b05f13"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "294e083267331b0e53475356f85ab72d"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "735666af7c13b5d1117222c7caa98cdf"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9f1fe4bb4cfa32b803d082e99854e076"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "38e8018cc983fcf8e76d16c3804f82a5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b1a9279b6c5e98f82877ca47954017d1"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "eed9d1effcb1053989ac61ed22489f89"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ed4554478a9498d7f5e464214796c0db"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4a04c35f6874bd14c016c9ab6dbb2166"
  },
  {
    "url": "tag/github/index.html",
    "revision": "03450472d22e805ef4d1c05ef6072400"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b8cde3868324179debe1858780fce472"
  },
  {
    "url": "tag/html/index.html",
    "revision": "79b621c88100aefcbf390a7dfab0a278"
  },
  {
    "url": "tag/index.html",
    "revision": "feaae74684577b3f6390d5ee8ade7934"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "13bf900640b77ae5408fdfd744d03626"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "8595f73d80627a4adf9a27a8c05edfce"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "fa2aa0214335cab62f6db93bc9fb63fb"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "a90b87bb05270056ad829b6a63a703e2"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "cbe5d8b5dcbce86adf1db18b1522c3ca"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "e1a3e9b60f487e58d79b557342b783f7"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5f2fcc56a3e42de88cb7d4f8bc434fa5"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a6c80d5be9bce234e2d62883508430b0"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6ab53ae8bf6141436c0bee69c4b033a1"
  },
  {
    "url": "tag/json/index.html",
    "revision": "7dbff7bcb93a42998b7202e7c633aa0e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7e3ba849183201d9d8aab19640a1662a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "040cce755b0a16fb5a71f99bc0519df4"
  },
  {
    "url": "tag/python/index.html",
    "revision": "42dd24ae518adaf18faa844bdddb3ca6"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "60f5f74e7293a5e8054ed3622bf77695"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3cd1be08dfa12c3799a0e91221e38f58"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "da65213bf2409302e550de85efc9b967"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "73ea3fbf94ba1e16e53539bf7405a841"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1855852c69ceaa52052eafae4b21353c"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "4ea54f95dc237fd01d6a29246888f968"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "c4cf8d74e60b096cc51affe1dc69c7bb"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9c41195239098677e162138ed562fc55"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a88f34cb4095d4d98b673b8e6bbc9f03"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "ffd9fb1958892a491ddfe3e99ef38289"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "441e4caaa0765705b0683709196e3590"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b440e5803b653fb812550f1f5696d274"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e9b1d4476e97c21dd0693944ffde2511"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "4310f6994746068e63f7071090456e92"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "19c2083bf811e3f1c9cd4f0b2f7af055"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "b711b619fc6b1426562f14c04c9b4d83"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "66b0eca6eb19a72aa111e1efe242eb22"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "24bcdd2662ea59b7bf985c1b94598174"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "62a1781209d597be8e9d2c91b8ea25db"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "62949e1da0596a64e3d9c9d00c861854"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "0643de85c10bef4ac3b74e6802f5cf5e"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7d2aa7871c9b370615c91bb409a891c7"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "f7015942b33fc14359aa5481463d8c89"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0c33685cf5c2a4c10f9518a0ef39f9a3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "6f623db07f26090ca14ea1a2dadc20b4"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "df68df1ab5c823ef4f81531559009303"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "4326b98a15d687b4f89b8d39e4df9d79"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ed531a41d8d4d37baa302faab0ad8320"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e82fc26e4ba5001471f99645d3d2640b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8cae05b739dbb212a1ed5df4df14d29e"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "22c04a1187268d3abdb028975d86d07c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0daf7c089516046b2559cf9841a3cffa"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b658d81b40355b0b09fffa8599eafeea"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "f79f8bc581afcd5b1bcfc21d058cd9ce"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "2df704fa8d8b6f460bdf9fa99bbf6d12"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6a6fe5ec1a3a604d10ce653ee98790c0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b3a567ccf742b677379047129aa9b472"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e9a171da039b88bfe9b931405cdb4314"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b4c12e2d3d08f331530553047e3f91c6"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "3bd8b7a529c7ace87e33cd4a6753fb6f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fad26cbf2b30218c0fce6dff5293d8c6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "cc28cc2c0d265838ecac937c4a52d464"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "b0d18a2ab91ebd7bc0aebbea30577189"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "6bd441317e72a145f09c8e0bfe252a60"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cf9dde5446da95bb90cb982df01b2c03"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0609d4f734537237fbc8f8b99ecc7883"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "bc30a09978e08285ef6567c7022e7b33"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "994b36b87baf55b5783e8e51881f18dc"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5a58782989842f643515efe7963e87a0"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "d785022879244a0ed79cf1bf42b95735"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "95d8d8a92b304a1766b42324e5cef335"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "b7c3b9f5348f30f20b9172918d27e1f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "040d02be2a7241c5463e1896989e25fe"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "3b4c0a76b5a3dcb8940a5f78e610ec9e"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f045b8b0794b0f1509f7846e7b84a5d0"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "50843f1512d0e8edbfba5c2a0d71bbe6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "85a86076f3853c4fe22df4be47211852"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "523d65506f026a2c945cf43b063db0d8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "28405e51fe42063342529b42c85f672c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3701de37862dc1354a05bf7dea5b1aaa"
  },
  {
    "url": "tools/note/index.html",
    "revision": "bbe670ddb6660d507874452b321cd662"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "8b4e63585e441def248061f7a174429d"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a9e8a4b41eda5e691cc96db1a891b594"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "29ce507173c1245fb818ae9559e386d0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f852dcac235f0758f75a6df5f7a74b3f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "71b31c2d7392540576b496b0bc72376c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "5ac5cf41de96f4bd74a450690ce73240"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "dbcc13a94a3d84a599b9f282d19cc5c3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "0dcebcd7660318277d3acd258996ac1c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a48f7516fa67f33abc8439808844a33e"
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
