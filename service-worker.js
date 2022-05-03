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
    "revision": "a3df9a5dfb19451af04eabb0629d312b"
  },
  {
    "url": "about/app/index.html",
    "revision": "8767f9c3dc6b4ff12cab67a02946b32a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "04b73b7fa5fd1cdef0a0f5a9f5e78594"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3f0da7c5557f77d6fb41cc34d8e88463"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6e93c6c0efb53ed9e1c0741572804f6c"
  },
  {
    "url": "about/index/index.html",
    "revision": "0ee1864eadfb8cbf52064a6e510ebb61"
  },
  {
    "url": "ai/index.html",
    "revision": "4dbd2545d27b0e9c60f399c17214c3fa"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "3572e52868d3724bed0a6268b17b8593"
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
    "url": "assets/js/120.8897e2ca.js",
    "revision": "08d03822c76b34cb5b8214de6c4be82a"
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
    "url": "assets/js/133.7c5eff4b.js",
    "revision": "397d2a281555ec3b1e0304db31ad339f"
  },
  {
    "url": "assets/js/134.79be8712.js",
    "revision": "1a064dc931cb41ced894fda0da5b902e"
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
    "url": "assets/js/139.2722da62.js",
    "revision": "61126bda37747345dbf8bd05d738a4cb"
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
    "url": "assets/js/142.3a026d58.js",
    "revision": "f6d6588864e74ef6f6b3bc45ceda4bd5"
  },
  {
    "url": "assets/js/143.4bd980f4.js",
    "revision": "aafeb46264b5252874c763e122087407"
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
    "url": "assets/js/146.3e218b8a.js",
    "revision": "d03b252d6fcd744f96d2ad2cdbaa2379"
  },
  {
    "url": "assets/js/147.1d03499d.js",
    "revision": "3685f4f4a130abdf781c9b031798e607"
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
    "url": "assets/js/153.f88e57df.js",
    "revision": "042b6c739141d03152ba85c17fefbc95"
  },
  {
    "url": "assets/js/154.37a29609.js",
    "revision": "fbbabe5106d793168349b7618ad68218"
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
    "url": "assets/js/16.7872efef.js",
    "revision": "13e1350e921b0c1765a05958471374a4"
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
    "url": "assets/js/164.42721442.js",
    "revision": "69f18aade0f644abbbc9fd36272fc026"
  },
  {
    "url": "assets/js/165.bfe69d80.js",
    "revision": "cd16f23b6113b421173851de294993b1"
  },
  {
    "url": "assets/js/166.8627e16b.js",
    "revision": "28ad4286e55857927c0cc9567a0d91f7"
  },
  {
    "url": "assets/js/167.1143efb0.js",
    "revision": "c4eca0f29eec37d031496c6f9f95183a"
  },
  {
    "url": "assets/js/168.700866cc.js",
    "revision": "2323da83ec5ecbb2caac5952b2536cac"
  },
  {
    "url": "assets/js/169.345492d7.js",
    "revision": "d39cb04e239f0ba8644a3ecb7792bf70"
  },
  {
    "url": "assets/js/17.e789d946.js",
    "revision": "88d9b9b93194c4187773920e400dff32"
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
    "url": "assets/js/174.1bcdaad2.js",
    "revision": "890a9aac613ad78f4922ec4b78da9507"
  },
  {
    "url": "assets/js/175.2163f31c.js",
    "revision": "fd99c0d04bbf31a24d85476f357ea32d"
  },
  {
    "url": "assets/js/176.3a9a5991.js",
    "revision": "e4c2b6b92a65aac6a2c66241a9987e5a"
  },
  {
    "url": "assets/js/177.d9d5c337.js",
    "revision": "9a12be6100acf03658638acf1dd061ec"
  },
  {
    "url": "assets/js/178.bd58a8fa.js",
    "revision": "dfe1a5ead73198518768b4acc58bbe0a"
  },
  {
    "url": "assets/js/179.04ab758a.js",
    "revision": "f61581abdb819a2d19bb2fe4e2062aab"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.07326824.js",
    "revision": "b29e5445a8a01fa5cc04f38237d09948"
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
    "url": "assets/js/203.a92a6d2f.js",
    "revision": "463594aef12f27cd6e8daedcba1fbfb6"
  },
  {
    "url": "assets/js/204.1d0ae6a2.js",
    "revision": "9ae195a6fb89c06e1b87a8783cf52a5b"
  },
  {
    "url": "assets/js/205.16d9f9db.js",
    "revision": "24df75f98c0150ee70a9592dabe2e4d2"
  },
  {
    "url": "assets/js/206.ed9ae7de.js",
    "revision": "9e629417ae96b745a6b4cc28f1561bf2"
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
    "url": "assets/js/223.72187812.js",
    "revision": "94a87d9daea61d866ac519e94b83519c"
  },
  {
    "url": "assets/js/224.3352441c.js",
    "revision": "31b0709cb58cdc9e4f795794c325d8f9"
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
    "url": "assets/js/241.6182a445.js",
    "revision": "76f413c0d76bfae83fb351d87370c09a"
  },
  {
    "url": "assets/js/242.f5cd7730.js",
    "revision": "ae38b8f8036642286e61106da14491da"
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
    "url": "assets/js/269.5cab7b7a.js",
    "revision": "c6f2388362a5532fbda7772f7253854e"
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
    "url": "assets/js/76.ca9fc58e.js",
    "revision": "253b80d21e9173c071e3b4ada7437d72"
  },
  {
    "url": "assets/js/77.fbb0d65b.js",
    "revision": "9fb708902a75a7d2c4b27af13b75e5a2"
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
    "url": "assets/js/93.4a89e1e2.js",
    "revision": "38fa04857e1c7f128b1bd7aa3599065f"
  },
  {
    "url": "assets/js/94.4fb352e5.js",
    "revision": "4ab11f30276c9160bf9b2d808ec2c1c8"
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
    "url": "assets/js/app.5edea1fb.js",
    "revision": "0cd69bb6c9d71c22b54e661ba52d1077"
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
    "revision": "8275cefa584693c6bc0a4c22fc6d581d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d4d08bed6936c280e4b64660bea553fc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "413962d850ef8c72ac89b0b8b0fb4eaa"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "08ccce45d2bb1368a42b7051d1a75555"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "97e8c59bfce3d90bb7129b85458b6c42"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "8baf164860e2f741848f0be34244069d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e33cb7c2b86347f3213d2e1268e161f4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a3563bcdd01ab7bf8e153458781018d6"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "a1cc629ea1f58c941770f7f2e44271d7"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "b33d921dec2b9dfb0a94e2a5da55101d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "1bb762e6788734fc7eeb4394cf33ead0"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "983884266618117865cb8f845b4331c9"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "dfd883329dae74110f600e9a45345584"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "52ee98575e19445a78cae8594284091c"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "7080ee7a8a88698b40e45131dc24709a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "dfb40749202960264881c93a47fdba94"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "f11c7316cddb839755e3d5679498b36a"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b4ce9155fa8ecd0d8f1c1e675c88a6f1"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "59b926e97a00a4b9edae79fed6cd6bfb"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "bb354433cef2eaab9146a951a363fcc3"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4a2c6246617f4053c8565b5c48918b56"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "9a59d68e32d06fc6336037f12bdc1ccd"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "392d001a1a5e9d90ab14b94478388fb7"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "7b9df80322f54dd6ce753b05ce2f1c64"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "9dfce5ec6d4ad1fdc84769acbea869fd"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "6c6a7888a5f9883db68b51924fcdc8c4"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "d018558f47194334000ca5c0cceaea78"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "4022e880f35bc1ef32df5f48a52d4902"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "5ecd173e6b9345832eedd328eb53b6fd"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "f50366f4aec77610a6a98a1051a3634b"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8dfbf91db3ca0a576fece3992ad64f9c"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "f58563816ac930d26c5d4d1bdcc40949"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "e4771cd971f77c0b42f791d2d8256e44"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "cb41e6f205f2cd7e9defebef0905c9e3"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "fe31b0801807648810318ada3c3c8ff9"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "61211ce183f69fe66ef365d36dc951a3"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "42c8046b21b58c34ec22345285cd45db"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "7a5e9f55b774fc009308f9e5c22ea4f3"
  },
  {
    "url": "basis/index/index.html",
    "revision": "611619401d7d0da380eaa62a9d825856"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d17a440499998222e371b214dd870835"
  },
  {
    "url": "book/index.html",
    "revision": "8d066eb69710dad5e170a9677cb5668c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a96962afdd1a64ea61b9280b3c64e9d1"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4bda6faade7b708807e568df2d4ce7ef"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "2dd57090f4b2faec01cf53d99d796a09"
  },
  {
    "url": "c/audio/index.html",
    "revision": "326de7a31744b5c4f4cd5980ded775c2"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "c833f1db40e22cf8104f55029b992b17"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "64c77a8045136f14a80c6ec60f556757"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "d1eb8df2d8060a1437184db12cdc2a93"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e4e6237c9dbfe71a7cedd47e586aae4f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "e9a513f5510daa6b2bd0639696beed61"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "67e50e7a225aecd9fc8e3bb8906abf13"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "58b81e063b932457707c0ba65da6878a"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5b9f57f0e88b4a689062c215b96cff7a"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "61fbe348413e1492a2bd5704c120b162"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "2b14df4a1cc949804bbfeac083288fdf"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "36b2d5cf3e55ce785ccc5f9df60da85d"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8734a2764fcb74b8c5b022df6344bfc9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "ee7ba20c64263b7d3efdc07bcca9833f"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "860236454ac270674c4d7ae9abc58cf1"
  },
  {
    "url": "c/program/index.html",
    "revision": "49274f011e5d2f31449b8dbebc48108f"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "dbb7a90eff85ebc12793864af852a98a"
  },
  {
    "url": "categories/index.html",
    "revision": "e95cbb59c91792eb4c016848ceabc6d3"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "f7ec7aedb8cbec478b7452e533f6af0b"
  },
  {
    "url": "figma/index.html",
    "revision": "bfdea7c0f0117984296f9d85be41ec75"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "df2648e5be6db15cf4c9a421614dd787"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "10567d471e7a5e279a2d10bcf4dd5d9b"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "4ff9ae1cf1d8005cd7f1cd00d0fa0646"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "b53dc5eaa54309508dfb8f41db0da6f5"
  },
  {
    "url": "flutter/index.html",
    "revision": "a9794f6ba43fa80a301bd62a3d0ce955"
  },
  {
    "url": "flutter/point.html",
    "revision": "d5fb291db1f28ad14d9996659b61a74d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2655b36fc7fb8b9d00a1f57d158e39ce"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "cbef7da3cb7dcdcc84f5e156376b10e5"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "dbbc5d0ed4756e119e3bef3e8f2fab16"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "68896b031c42c9591f231d2bcc56c973"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "725b16dccfb14c9dce8004cc2758bfd3"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d959dc02593b300265d5b28b09876fdd"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3b2dde8ae34362c63cac8501260c61a9"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "3ceef074c11991b824dfc455dff82416"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "efa61a2dc4b4e72413d775d34a1c3487"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a811664899ee920cf5cc9101b74f0659"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2fb7f7d8b636cfeb0e315a4790cfc453"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "dd17beba8fd9b4eb2546d134eae42186"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "2305edd92076a27ebf88343ff6e34849"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "8c536edec83f82d0b07b7414925e4078"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f8fc7dbb6dbbf6cc688bb7550fe4bbad"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "6ea2be78920c43087b0e9111744cb85a"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "e3eb394ba8a4b2d91c85a90e6b461b15"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3e99e6d64b675dc8939e7bc9e9ab370d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f032d37900ee124b8d164a50b02a1329"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1d3581088aa7c8d9bd1478799a620716"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "5682847e96fc68c610ac1bf9a4f99fd3"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "db4ea1a80ed54f6fdc6e0271f103eab3"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "ad40700e676a890029150a54703ef6f0"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f0734f8dea5237882dbc57ea65c396da"
  },
  {
    "url": "haskell/index.html",
    "revision": "d91f1e2273a9f73a4919b575407bff6d"
  },
  {
    "url": "index.html",
    "revision": "0a4352c926832e1943daa42893b5a834"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "217689d82c7cb445c37411afb2870382"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "97452291412f76c589b9914610b13220"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3c87ddea08f73d2d5960dd781947e655"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "ff30f40fa2e12a266d36ed24580e5802"
  },
  {
    "url": "python/index.html",
    "revision": "9384b50baed62613638c8572da919445"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "660c04d75fc34c12c16c022cb59c5285"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "c31748e45a6610323886d006aa37067a"
  },
  {
    "url": "python/python-file.html",
    "revision": "4dd3025f050da88ef1874bf7db4d1252"
  },
  {
    "url": "python/python-function.html",
    "revision": "0742729c8815edc0c6bb0ab33031e0b4"
  },
  {
    "url": "python/python-generator.html",
    "revision": "c7bf4ffa540338e187d70db3aca353e1"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "4fe92b31ec54e99bc16e584f08c89438"
  },
  {
    "url": "python/python-module.html",
    "revision": "b4d818c42781e873014b53e6f4d2641b"
  },
  {
    "url": "python/python-string.html",
    "revision": "fe2c557e0cd9a0665d108b1ff2bcbd2f"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4a8b29e541ece037a0f0ac520ab16d79"
  },
  {
    "url": "read/index.html",
    "revision": "0a202b4ac13331dd351df2a29fddf2c2"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "7104fcae505bff068b840801e13d6bfc"
  },
  {
    "url": "swift/better/available.html",
    "revision": "f785532b3db606645c0b32ed253dc016"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "070a3e1a000f5a8b09d96777d5f71c3c"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "0379391c1a13604299ea07c8f08a37aa"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c85bdecdfd1059f59f664543880fd6b0"
  },
  {
    "url": "swift/better/di.html",
    "revision": "5de38c9e09c02b5b991bbd2b2f172ab7"
  },
  {
    "url": "swift/better/index.html",
    "revision": "0a90f32e235b0faf9ef8bb64a769d492"
  },
  {
    "url": "swift/better/last.html",
    "revision": "0491c376459d6ddb90d4f34e95cd8e44"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "27b39b0ef85040ae3d2583d9468ae365"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "86c92b75c93becf14d2ae786f78c8d4c"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "b9e11e72ade42f8a22effba16b217e71"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f59b1eb38ae185d1dd9f1f5e78cf19a8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7be783425cd0b03edb49550dbe4e29e4"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "9c10ebe42981e5b58ddf6406bc5f2723"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "bd8e42dd2ff385d0529e2626abe640aa"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "fe5c25d78a4dd75fc09acfec29ececc5"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6ecb0afabd3161d20213f16a833705b9"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "99db22083995b50c7e629df0b65521c3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "aef5c54faef86951d0297ef210e5d1d7"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "d03048d39c7287e1ef8a2b80d81a306b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "fd631720430586d418cc44e17b7d92d1"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "529390485b035cfd391a030f3d5f6587"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "41b5edfd83c7e4cd249a7e39519efbab"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "d919eb2f607fffa1c76a6eb47aee31dc"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "df220cdd8d3341bfe853412e24f18e7d"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "4338fe5ec0db29da7d3e95c526d75570"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "6f43aca433c2fda82d2359804c5441ce"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "8d3e1ed548b4e5395f8490c797d6a6bc"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "8d37b30abf20929c9a97256ca8c255d1"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "e26c89a911b7211c113b4b53030304df"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "afc909a6ae3501877f83aaa0e96c1cec"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "cbf3205400c204c2d7fb0cc77208c17c"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "afd16857258e1c960655b7004c9c7da7"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "5b96d6f60b234bbde000f95ead997407"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "71b648b9318b27dae43f9181290a585e"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "595d68fde19de8ac3d3d34366b15b46c"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "94ed479a98a3187827ade0d3ca87394b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "c0100b3de0797642b2bead9d31776dab"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "777897741b3ba332f15addd1c45a9d8e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ad67d986ef49b235fe9e32533192a6f0"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "605bd70b2edcfca40d1b282419903d0f"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "5e86cf5f364594be73b606743cc3b03d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "70139040d96a2dce4f7f13175b195185"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "7b970a7e5a8b24df7d89017bb02c73be"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "024c61d252d554afa21e4dfc5c74e582"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2ef68106b4791ab55a35c331d39e297a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "0fbbb282906b9e3941299b1c11af8015"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "e61627699e689e0e5da61ae90080fdcf"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "fdc414e70b7cb8dc72eec27b90ebb774"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "7f15b3315358f10a29f569d9f3cacc2f"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "80a3421abdd37f752af63da475ee5327"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "50f391706c55e080d50183122a0d34c3"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "4ace7ab873d26b51ef3a4966e6c7702d"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "d740b0cc21c38ef230fddd3ab998df08"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "aea55122fa871e3ea3e5c17750eb4a4e"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "7c210878bf5a08271ab7093c95dd2283"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ebaffce8241c8e771a9f4c25c57e83e7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c80536cadcc474c7a4addf6da5595d83"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "abe5e200ee51f4a6355e3cd1451d828c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "bb4a989f6b17ffe5149e130b2245607b"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "97341b3384f10957616f5294b7694913"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "9680703c68af349c6d0aee27c2fa8fca"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "f501180e2f8a6eca920e523b273a6e9b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "6e2950b43d7c62410a1e2913e5a87ecf"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "e8a7a1a2f4fd56ae5ac487c925ef0199"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "2db37fab2ca16ad4207cbcc8fdf0ec2f"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a84abb340b9f8973b7249e75276123eb"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "6125b8cd0ac9897b477c59bef638799b"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8608554f53fdc76372dfaa698261c64a"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "bfda56a4aa4783b423ed5884bd659ddb"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "4148fe7793e0b5ba14ad9ebf312e1a4f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "94f334fe52bb4e817d723c5f4cae1ebf"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "58e419bf1c183869978a80ba092460f7"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7fc2d58f922d6584532c9bf05aee5fcc"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "be95723a04af2d00cd871d79b85fa778"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "0b8ae80a28a0cbf9df0e56cabb33fb4f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "2cab8755f95227bdebeed0013d9dba6f"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "1ca4876045998f87897a59079c119800"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "713ad47650ac2e9d05020640fa170106"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "70bd001cf76fd42f47893e1ab48c78c4"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "1142e2a49e9b4fb1e263de9b951fc681"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "d686104632f5f3d3c70f05896806af92"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "a10a79d2e34b15a8f207a31513103a1f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "78809fec7d89d20b1774e026e04bbf05"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "f7d75c41722246bd8bbd9fa278a6eb71"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "4a63e338576ff59cfa925df7c5aa7a16"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "585561d7d7b9f2f21126c026b7fae6e5"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "7b2e3d867d98076a11db16100b15535f"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "93623b071c75ba512296756b39df9b4d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "97378b344ff276eedff09f6cd0bb45f3"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e3482b33e9c7e06c9199642c162c8f8f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "4b6986f77d408ca51d23850e5ee6581d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c32c7d8a6f2c3b792b34bd4f475b1772"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "6f0bff8ce26947e833c4023a1f869130"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "fa580ccb834fa0743704ce993aa1f18d"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b38ca059bbbce690b922a417abcdcc4c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "2b1040fb13927dbfa338c5f4882f6a1c"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "5c3596c53ccc9d0b5d7550c67e978499"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "184832ea7d74fb1f672bfcc81298e159"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "4f6f5831fad4db2473b623876320e21a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "90a4b3b393f9a50f0f8e1f6e77a6eb00"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "208c3bc978d9ba9261d0b126a21a327a"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "cc9e9480e80c29887ed4add80310323b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "050acd97b6b302712be8c80155e6f202"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "6f9e13c8a78af2ce75bef0dcb73a1465"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "132d641bfea7e02cb09236c793c4cdc6"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "590c032f0c62f4264a998fc518b0aab1"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "0300f69bd197f81235306cdc345591e9"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "b14c2826f88b1d5b3eb73d13525cbff3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "c66de11fd27712a32b822a0f953f55a1"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "56715baff3f0d6e8f83b83d315e178d7"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "5a80ed45bcbaa0c4ee0733738526b4b1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2a8d6157f8b613c6d4b94ddcfcc681ab"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6440964a86cbaef765d572194d5e5209"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d88002e9ba0aefc68170dfffcbabf158"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d15bb0ef7019225490d561cfbebad9db"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6c847272d7c48391d541967a4a857b60"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "058ebce5768dac1c8325b192ce9adfe2"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f4a71746774682325e795d9a973ce1b5"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "fddcbb5fcdc0c339954567bc74740228"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e9daf15ad5d27ca5ceee381eb60c6135"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "dcd61ba957425d96bb09d955487180e8"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "89ec754617cc341c7e393e5c157b475f"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4caacce3d50c5bec3f1b06b0aea69e26"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "6d08342de33241acbc60629a38e6f3e0"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "104e25f397a912121196c6255bd5afd1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "941b3bfef92b2367ef494bd4a17ebbd7"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "2cf85a5a948143b20509b4a2e17de999"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "0ef86db346cc2cf2272e0f955a5ce5e0"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c5ab96331e31899ad26d6b105c98cbdf"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "5f9d8efc87521f49de0d67043465dd81"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7089c2e7bdf0e90e9ff70a29e31dab75"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "110785c8fcd9deaa09e016d674c71f94"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "163b19e8d74dcb0e92067bd1abafab4e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "fe72905cc23dff7af161cb6375fc8631"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "01f4bfbde54c789b7190a1061278d445"
  },
  {
    "url": "tag/git/index.html",
    "revision": "965bb2a03570c0e25c6ba7b13c1df003"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ccadd46f7214572ce7244d6eeaa2a535"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "28718dad5b0aa165f174be4fd198e8c3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "15cc3d958649f03bfd0a525a180fd360"
  },
  {
    "url": "tag/index.html",
    "revision": "6f6f6c7d9f3849fb54b412aabe5a8ecb"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e249797458fe2852375b24c941733807"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "73e2d8dbde93333e21933a303b55bba1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "03a5fcaab8fccf44d7bb66463d12e79a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e901f0c522e6c0443b8e21d96e265c36"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "d350799906e1d9d24417fbf42c8db566"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "fd4edbeb8c3d22ebfc2de63c87766d96"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "0a22e17eb613a3bd0584ea4b535a5bd4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "7c759347149b8860e28c30a83797a582"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "5e06d4ada582c2bbc6ca377ddb6556fa"
  },
  {
    "url": "tag/json/index.html",
    "revision": "91618729b75e1dfa471c0f96c15ce5c3"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "5cd45a17a6baa729eaf07dd8e154b93b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "d453335f04e3532db0f45d64f29bcbc9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0418adee0f0e706bf9269f31763682b1"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "14cef76cd5114ec75a1f2afe4c5669d5"
  },
  {
    "url": "tag/read/index.html",
    "revision": "98874dcab51928ccf31385b0b431f039"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "4ac00a8726d36a76da5443cc6ea0015a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "eddd517b0746f3d77d81c8e2b34a250a"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ff4848c89fda7d75732171824c7cfa48"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d9a267da8d74e8a17cd816557949d74c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "fd6196bad3fc6b2aa9e0474ce3eaf8e8"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "f9868a2c64025ffe16f68bf7a53f7720"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "ea6b1ccf3d74225a9f5883f72a3b01ce"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "1e411ce755667d4ed8892febef7dc400"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "c7d674451a63068626c30f043ef23b98"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "49a4d00421e3cc8a4fdf79dbcdbfdb7e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f5f3a7d953b570f2e6fb885c022bb5ed"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "043d67768c04d0ae02ffdcc24fa7f2dc"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "519ae661334a603a636cb3d8fa41bb10"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2644446d5f7818c45e9d4d1e897789b5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a7349a9c3b5a01809056fd3505187954"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "b5529935ee79ecbf4fc1e73c499c4e6f"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ab0f4b21e5df6cacbc1a6f0b23e6a9f2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d872afded276b93e42a66a54ba7d17b8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4d4635510024313dadd2638362ece2e3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "aa12d60eb4dd668ebae970fc55023e2c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c0250af948bce8de16b4ea1a86d19062"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "a5bf04bf1d1d135613030a1de895d360"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "ec18b36159f05e7a0b9ff80c78d4579d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "2095daf11442a782009c489636acdd10"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "4a8c04327d02c6cb3923b50286aba537"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "01689a6358e0297bc39a44658a914198"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5a07fe8802240d0c64b21c9a0ab0d818"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "54042183e3cbd010664f4e01b191a052"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1902c217eeb92c77b5931f4e885ef122"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3bc012976de3331da4f6a3ecb6f779e0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "3a62277234c8df6ae8736ef0c47bc914"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "7038d6c83f2e169ea74065969042b3ec"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "051032f63a648adc28bfe0a58dd10d1c"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4f218509f5787e8044124a31971211e2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "40892576cc2509a6506d3c952152842f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "7ea2cee9964e7f6ca19767e31e9f1b11"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "189d5c91382020b0a6b505c218be6c4f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "3c573c6ff8b9ec379411adcd3d679f59"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e79f521df6a39cb8167f765589994e4b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "2eb2d1ab62e79f93bbcbe533e61933b7"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "dd704aa2de45f33aeb1bcc7dc3836737"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "22b91321de89acd26ead823b04fcbf2d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "8c848e681ed5e4fc57af15e1216a5428"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "abae0432f4026b31d202024238c56a9c"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "aea3f621d6ce4ec1e348da0410fa8d17"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "7450fc9e7c91455df8e533905fd0e3bc"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "0845826a19be7ee65048b5bbe1e6059d"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c03b184512251c94d84585b38dcecb85"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "ee651a008b06a1b7d174a9d65ebb15c0"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "718db72629fe2acf4bd303bc5b4c686e"
  },
  {
    "url": "timeline/index.html",
    "revision": "ffdf8864d670871fdc168d0aeea0c18d"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "cf48b34cfecf3d6da0d90a002c3a1ef4"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "01c409b5466164fc4a23e29b54a5dca2"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "db8411fad0465d8827b1df484b6820cc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cd54a5470cf064bd5349a659e0ebf3de"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3e7aa0157b7077c71c7ce8c2d5c98865"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a6c32147775a8bff282f12f320636162"
  },
  {
    "url": "tools/html/index.html",
    "revision": "800ded9f48872d8af77ea5a7718b9b71"
  },
  {
    "url": "tools/note/index.html",
    "revision": "07d2206c90191a17710c5f06075eae83"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "40fbf185077d028613b7acd0e3ed9ca1"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "eab58ca5f5e2526fa72b6260ceaf192d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c920d4d2d7371589586032ed073afd15"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "2975efe845a9595f89eebaaffe82def0"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "12db4c939f8b30aeed71f5eae073719a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e4df2ba720f046fed22b71e0eeb676ef"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "bf03d9defe3098cc52f645a4d4eddf96"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "3a69a67c506949e0b1f654d0beec80bd"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "6a94de83c02f1c42a7df40db305a8c9c"
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
