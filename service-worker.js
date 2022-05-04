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
    "revision": "3496f56eb6dd8cfc91eb1eee8b3a6b94"
  },
  {
    "url": "about/app/index.html",
    "revision": "725c599fe0c25235c3de1cd3da6d3be5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "dd2ae52c03c6ec5777156a46e535cf61"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "612afc2b53de5036e58a073234ec1069"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "04a34a4532633f9c815d375388810468"
  },
  {
    "url": "about/index/index.html",
    "revision": "59d1d773c1f62b18b4935cafc6852d3a"
  },
  {
    "url": "ai/index.html",
    "revision": "c519a92a429155bc3ae2655a08d824c4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "15fb59bbd12f31501e896cef861910e2"
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
    "url": "assets/js/113.1fc4581d.js",
    "revision": "69d32d5c204ad03b529807b04b5b809a"
  },
  {
    "url": "assets/js/114.a2cfa0dc.js",
    "revision": "20076fd4e4e41f87e6f19c3853fd0476"
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
    "url": "assets/js/121.a210fb4b.js",
    "revision": "068416adc12b1cfd231b7e5f25872e5b"
  },
  {
    "url": "assets/js/122.b86e8a51.js",
    "revision": "5f4b94d59e93e4a816f2ad4b67f7ffdc"
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
    "url": "assets/js/127.d2b23619.js",
    "revision": "191acd2d365b81afdbb050cefb08d592"
  },
  {
    "url": "assets/js/128.b6711232.js",
    "revision": "8a8dc426aec893442acd1ff279b75476"
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
    "url": "assets/js/138.96b2b083.js",
    "revision": "1e20947806346e2431fb84448b86a923"
  },
  {
    "url": "assets/js/139.6d6877c6.js",
    "revision": "da79eb3d5526448bef25659b70836c24"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.13b9419d.js",
    "revision": "6914413195a3a4fc73f2e0b9cc917ab0"
  },
  {
    "url": "assets/js/141.6e10d07d.js",
    "revision": "0ea21bc16f7f985c948e88091c7ab69d"
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
    "url": "assets/js/150.2332e95c.js",
    "revision": "93541488401171595ca619b8c6d4672d"
  },
  {
    "url": "assets/js/151.d5386657.js",
    "revision": "dabe1a4d35ef03ccccf2f8e272207b70"
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
    "url": "assets/js/17.c5e8be36.js",
    "revision": "2f79f66232dfc6e4cf84ee95dc5655c0"
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
    "url": "assets/js/176.437e2676.js",
    "revision": "6c0513f6367d0a156168542342ab87e6"
  },
  {
    "url": "assets/js/177.d9d5c337.js",
    "revision": "9a12be6100acf03658638acf1dd061ec"
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
    "url": "assets/js/18.117fa827.js",
    "revision": "3636cf20ef70c18f8e58c0e3f544d6eb"
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
    "url": "assets/js/200.de5796b3.js",
    "revision": "6a80b100433daf0e2615d0e4a58861b3"
  },
  {
    "url": "assets/js/201.b118c91d.js",
    "revision": "e3da2557695be216ea89f627b64d98ed"
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
    "url": "assets/js/231.ed81b936.js",
    "revision": "1364d421b0bf6ad119817a7241b10134"
  },
  {
    "url": "assets/js/232.5bf3f4ed.js",
    "revision": "6aefe3aa88cbc9eeb79576286f0cf7ac"
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
    "url": "assets/js/251.9bdd48f2.js",
    "revision": "c809dc2c60e4d4cf99e6c87a32008a58"
  },
  {
    "url": "assets/js/252.5ccf6511.js",
    "revision": "2fe4b088e41177005651c9534e88d0ec"
  },
  {
    "url": "assets/js/253.0929c364.js",
    "revision": "0f211d2a6f85d9f62767923a488764e5"
  },
  {
    "url": "assets/js/254.aea2b034.js",
    "revision": "d252611505bce6ac827ea38fc560d491"
  },
  {
    "url": "assets/js/255.2f8a0eab.js",
    "revision": "5a837ee165994bf8c6c926c976a23b87"
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
    "url": "assets/js/258.309ba9df.js",
    "revision": "f2a76ed8d65b60909f0cd141a622ac38"
  },
  {
    "url": "assets/js/259.57861b09.js",
    "revision": "4aa51583d403b1f6094ae26e3189ac9d"
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
    "url": "assets/js/261.afda2b0e.js",
    "revision": "d714557ab397c3b65b8710f6ce688a93"
  },
  {
    "url": "assets/js/262.e88358d9.js",
    "revision": "a7d64ce477e737790aa94ecbc095b804"
  },
  {
    "url": "assets/js/263.cb62b2f8.js",
    "revision": "c93f1d0e5515e577d120d9d09a41edb3"
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
    "url": "assets/js/34.5a7cdc5f.js",
    "revision": "9c731717b542af79ec9198e6b439454e"
  },
  {
    "url": "assets/js/35.370e9427.js",
    "revision": "f7e14b81d7bb2aa934bfa8b4f07d9172"
  },
  {
    "url": "assets/js/36.4189a875.js",
    "revision": "e95cc6141734bb5b9dac7ea7bd61d069"
  },
  {
    "url": "assets/js/37.6e93365b.js",
    "revision": "2de6e04bc867dacb6d825f8212aed27f"
  },
  {
    "url": "assets/js/38.e37f0a51.js",
    "revision": "2fd13c9eeb3f3dff73c7b98b6fb93b2a"
  },
  {
    "url": "assets/js/39.f3b73e20.js",
    "revision": "60929e595ff422532b3cbe993e512742"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.e1569198.js",
    "revision": "a1d33d810844dae96fdc2a585e7dc4f8"
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
    "url": "assets/js/83.3b4f5656.js",
    "revision": "7baaa3e30aad47945a2c7c7f4550ea12"
  },
  {
    "url": "assets/js/84.b7eab024.js",
    "revision": "3d809cdf184166c942c9edc98ae474cd"
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
    "url": "assets/js/app.bfdf6116.js",
    "revision": "240d96b04d357a9b1fb8ece66ba2196e"
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
    "revision": "09cd74677c2f8c7013492ee49d518e6a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "772a5be4765da9fd5211e0787bd2af7a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b310aae108e229f16cb951a019d5a495"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ba6318004de8d5270d3e8674f6fcb1a2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4127801b83ce7c099d22abf33bd34938"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2b309752337bff13c3df74c6b27744dc"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6ef3c51155f9158f2972b01151b233db"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "db4fb5b8ea9cf58d7aebd3b514b1473c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "6eb33fb4184815db7a0c618767171dce"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3ef6b77fd4ab6d027e91f2a4bff1675a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "2ba734e8bc9777962055da4045568650"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "6765f86d1e28cb729e15539d56d3e1f1"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "44156f2aceb10b1729cbc8065e97d893"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "f970811b001b9ae5580f3481520a4736"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "ffda47785522c680fb27c65b3cd10d61"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "5ffe840cdca6ebd7d2a55e53deccc249"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "85f98f276eeb305d7c3da9a7fc1947de"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "8d4e6ac0373fc6db2bcb6e67b99a675f"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "61e365e00e5959d399370b7dfea955e2"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "7ad28251ab3c71ecc559631e0d427ec4"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4e9c2db55c4d0f94fa912786b4f5685e"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "82d2680e234d0a03fb8d146e6dcaca43"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "fcf07f34da3101a5141b16d5cb889801"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "1c7da256caf11e7a02a88c91ce58bfe4"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "2a63d641b0cb3db21f2971223ca87e8e"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "ae39eaf50c8f0db8b7a06fd94b6923df"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "d1796c2d72adad84d72a05c82b30f128"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "db987ba3e12ea61a3e1e1fdad6d8056a"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "9faf9e18582f0fd4716bdfa5524a2b57"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "4cb57d227467aaa1c5f3648ea59a055d"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "4192381ef6ef3a76c28f2f5715bfa5d6"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "a3c9733fcb630d7abce2feefdd7858ee"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "94f1dac4c1418a6b99513847d3405751"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "14a79d1b92941e6d612d0671ac9ea67d"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "8e2e9e44f7b20ff8ab014d98d3fa2903"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "c02d2dd679f14053e6a745f48a61c0b9"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "4f62c817c2c6b4caf9e397a194e9ffe8"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "aee2febe497734b4f7c5c50ee869769e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "3c6a24d184e949699a8fef9c6f36c4f2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "26533a88f0cf6e6d19ea9ee786cdd5b9"
  },
  {
    "url": "book/index.html",
    "revision": "fee0078b672fea7fad674b237221fab0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "bf563fc1261576d31c117b5687ec0876"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "f70838e5c07b3f2f9aa15d60ea9764f0"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "60083b5406548d195795486fac65232b"
  },
  {
    "url": "c/audio/index.html",
    "revision": "332a5c137452bd96433e02987ec90e44"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "b116ddd037f8e4b492c16f8491d5dbf6"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "8ab4bf4c1444c3803d5453fee714d03e"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "caaa81612cc60a73dfc06073070c817b"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "05c10d2b9a9c242f17cd2883c832b608"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "d9c86b0756397aab7b959fb71c4992f8"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d6624e4f17f503fa8c56f10e376ff313"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "511b5fc0d5d5ef11479e8835a7f04bef"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "ac7174c0d7530050cdaa434207635200"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "11e1515332bcb71996569c23dd667d5d"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "2ae5923121890850ada27a5ef1e62e11"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "671220093bcd373a1fe78364e09baf38"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8338c4577bde88372f218d9e1154948d"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "1a97443f513c2c56cc8939669e146c50"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ead43cb3b0bad6cb257d3a2431bd22cc"
  },
  {
    "url": "c/program/index.html",
    "revision": "065465c96e40b95a15df2f6611451bbb"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "ac222a5591f020ae18b516da3894aeeb"
  },
  {
    "url": "categories/index.html",
    "revision": "a2ee16df0ca2d19b2c6a2d477d7af099"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "0e0b4902be7196aa5a0ba17dd53c3c28"
  },
  {
    "url": "figma/index.html",
    "revision": "15d813ef32d497a3d51b76933e7e0c5d"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "5be28b019c8a6f6298497d2a58e6a957"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "d1c4a40b2881d88671354458599f6db1"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "f9c6a78464ea81c86a350b703f6a2463"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "ae23621920d6740baf401d140496227e"
  },
  {
    "url": "flutter/index.html",
    "revision": "e27c9b7d9d07c8aafde3969f5c8c620d"
  },
  {
    "url": "flutter/point.html",
    "revision": "4c324ef3ef81651e29e7d64fc32f1358"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7e49d951d7c84fb3c42d95e6560c455f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "75259305f9e7fd7d0cccdac6e092c4fe"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "49618e529f2eb605eb867ade75f0fb40"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "432c0bb73be52ee9b9e8525b4bd29220"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "eeb1ad4129eedfe1a7b53e9cbaa8060c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "bf590bded83336d64e4c169010e199bf"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "895f020b1dc16868ccf318815382f128"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "c2a970569206725ef2bb5f6eb479b78c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a693a904e1b7b8d26d026b6d8ac2c240"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b554c3312c62356ae0f7a682b8adba2f"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a2670cbb829cb5a12112f81d105a885a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8b6bfcd58a7e2cd539ced116667188a8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "246580b79b34c2b462ae8a9f8ff52aae"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "febadf0666beb4610bcb9c934428adfb"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f4eda4bb32f6c72cb5ad05051f9eaaaf"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "baf0fa24a3b4376a43685de1686d0c04"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "402c61600a841fd9e807b3ec12c20d0f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "6f1777e5a9fbc2e4a9cf7d9f896e94a2"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "da210986edf05794924f1f4e4fb6332d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "5c4b8e9fb5cc395fa8a253d0237b7bd3"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0a03a1f2d515edb5f2c4bf82cb4ca9e9"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d6d9561981fbec78acf9c38eca78e261"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "776402d0d04958a109694f10a6788467"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "9a59bfbf86757116166622444eb967c0"
  },
  {
    "url": "haskell/index.html",
    "revision": "0e91156c69022708cacbf9e185216972"
  },
  {
    "url": "index.html",
    "revision": "7427d708373f0b4529d130838468984e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "b9a92df894f1e886778f7398bcc5b180"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "494ed4f9b90409242da4c4f336d8ad2c"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c20cdfa606810ebdeb7d6445d5fe1548"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c9e5c36af2515498f1f1fe96f35c654e"
  },
  {
    "url": "python/index.html",
    "revision": "54f0b300a188e4b0fec095993e9ef0e7"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "f33110336a09d5098917679159b5bc7a"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "4294702a6e0429e73d98705a220462a0"
  },
  {
    "url": "python/python-file.html",
    "revision": "27f7c61396deaa389819cef8e7677463"
  },
  {
    "url": "python/python-function.html",
    "revision": "0b2be8a428c73314be4e03a388af6ae0"
  },
  {
    "url": "python/python-generator.html",
    "revision": "4a0edc4b3f0942ef24b9a364df8c14ff"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "11897a05c781431a8d11ef10e2cd818e"
  },
  {
    "url": "python/python-module.html",
    "revision": "245dedc8317bdda63e6090a2b9b7b61d"
  },
  {
    "url": "python/python-string.html",
    "revision": "62b04c5c855ac35db7df11e374b7935f"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "60f35201c5ebf4a1113564e36cee21d1"
  },
  {
    "url": "read/index.html",
    "revision": "0b4e1cbc354569b91dab5ae1665eea29"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "49ba35770dc2a9da3dfe70d673d778b6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "cb9cf8373265e682bdac655e5c07439b"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b3931167599910b640967934c58381a1"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "e4549d258af964ae17302fc80f09c488"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ae1d4cd141a313f22a14efc9b0fe14c2"
  },
  {
    "url": "swift/better/di.html",
    "revision": "002a6cd46392254055139e5310e5ffa4"
  },
  {
    "url": "swift/better/index.html",
    "revision": "1f3022a2ef0b573abea535ee77657b60"
  },
  {
    "url": "swift/better/last.html",
    "revision": "97e16625500ef521f6c84ed04bb66236"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "cf87a518626e6d7d863eb23f860d68de"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "9b442d641b26710fe5065bac64d853ca"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "16981314a7bb97e695fe22af9b0bda78"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f29183ad795ef9b7e5c562cac5ae56e8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "72df96ef62b0f5a291b088bbd7215c47"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a7fe7b5d81ebc3d8a2f367da26d04b5e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d5af8d976637e54ddc5de3da6adae9ec"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4cf49a8e7c6a9762e7d4cd41199af7dd"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c68bddbe33baad88fbd9f00984899f2e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "30b1dda520f965244406fae79ab06d03"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "20002da07a7fec97a284dd9b7c961064"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "ff055a2c5fd3f5fd7667ea2fa1d0d4a7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "efeb1588940c88f66d8d3354d81a724d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "6730a733c36a326edcd7390dd6a7492e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "bfbe538ef4cdd925ae9d116a0a7c930b"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "8c079f33fee0098f8f300cf62b7357b5"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "499fd796cf708ef4ac2c5e48272b8d4d"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "96a36f7520a2d0efb3f1ead94bf16cf1"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "fda89b1994aa225b5a27b917a8b7ed58"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "29fe8d22078ae9e354be46af11bc41b3"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "2428cc400e8bc44e57e4831cedb29617"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "b0b1672b7b3e142568680964f3cc2413"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "97b049a38ed9953f5f84757f7e049d57"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "8e3d659d7c3c63be9963ecfcdc2704a5"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "536e479c65afb71de29b1ce7b2e7d1fa"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "6ab0c2dd07c67cd0888d63c7040744d3"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "577c30bc6a46b9f80f9ae05d9625132b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "10a367ed5696927ad50e10bb932598c0"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "7c7d5e383f0dfb7eb022c2131cd2bbbe"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "a766f5856a11976d9849cb50d4a290b8"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "818cbac0f8b042c7cbb7b394baecc81a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b42d1200081cde406117cc384952942b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "fd9a002952917f601493747bdede343f"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "84cc5a7fab62f47622575d0a70512110"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "108c91b059172d8ac5b478ea3e884e51"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "77dea8b7a1aa97ec6e488755b1447ca4"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "0babac2c0a4053719d9e5556e1a6e365"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "702de20f396f954090d445d4000188f6"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b7aaa60ce0fffb85238da3e975d61dcc"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "1ea68985169d57627d1ccb293e063247"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "27df8401a9a0551cffd8ceddfabcd23b"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "cfa66be01a547c346e5699061f1c9b99"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "8a160c99a3803c04dd68503bc393c2ee"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "2f906c91f5a152c90f5fc6c9a3ac2584"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "76aee443baa970269e3298b15ab5da21"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b08df15285e9aaeb105679472ba87d4f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "b611811bba215b9ab54c6c07ed861927"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "cbdc08388794ee85a14b4aed8e668187"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "65615a387d0dc2cde3dfdc6457eec3cf"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "da3486c22fadfa3f36328a90bf0a3993"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "388def7555b7d340ac467783bd592be9"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d238675d3a1214ba1ffd09e9cddf2209"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "d0eb2cd64e7d936638f5599217f1ce04"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "45a0a2b2d08b4b7f2f5dab56a65309ef"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "09073e648569ef29875e685500816e0d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f83c8946c52f30f11f9a28baf28397af"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "edc17ed80e059aa08ca538286c32722a"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "7015c4e3c42db28003ae7b6a7e8b9a4b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "32e6908cdff3b8b26e9cfbfb0eacebf6"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "2a928dbc685852e03fe2ca99a449d4ea"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "6f8b425c799bc7d3b16de4f895909b52"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "c2ab91045a72b94729e2e81da2a5bc6e"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "9588157c9a5b2775fe006d789acaa468"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "8559acdb7c4d8482d43406e62d746cb8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "7b1d4d2d27edf8fd736b60c90ed03a52"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "55901e38533b4372e0e4234a1f3730f9"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "b30fdb59443341bfe86ec5d3ca7a7689"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "cfcdf78f45619298de3b583b897844e1"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b5bec93ae88bfbb90e4ec0dd46f758ce"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "75722dad0ac71644a095b0a8e03bce4a"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "b02625eb1fb5a674e2b740bed65380b0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "33547c77568534fc84521502d7e64ce8"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0741780279bdf922b23cb5331af8ce7a"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "9721a4c68a7295d8c6e2cf5f08b63fc0"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b97d9081234a6f8d498218ca1b2c1fa0"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "a3e0814dc6558162f9fab8d584fe91d2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "97deb0856eaf9be9e515697a5fc78003"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "8d185c37832303f83d0d1baeac52727f"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "8fdfaa0d7489c79244914e362f4118f9"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "0777f31578d4a7495894bc957b6d6de1"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "8ff49f15bc58086c7110083ba535b3ae"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f4e15dd4a03f362edc737df4fafa75b8"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "a16b297d1997e9a44466f48cd03019cf"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e5967b5524ed5c5647e7d77d52bdc8ee"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "784830b26826f9d8754198ef1fd284d1"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "d54835b7eb5d297ab93b9ac8f6063352"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8ad9071017f5ff29031501af8ba38201"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2cb1210062c1ac0a5f73b130739e91fe"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "58d31e7797cd9dd8740c6f4abdace418"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "018864a480f7902ee1144847f2d59fc9"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c06451c2d61418974e0c45092d22a1da"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "9828b9b3754efff4a33bc0d51cd5d37b"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "e78d21022993199063eeb3b13e799e2c"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "16f19d238ac40e60cae312a2484cedf9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "ca4e0a6427b3dae5da7c3ae4a9fb00f7"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "fc05740a0c08318730753d31eed9e5de"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "53666666ed20900dfb470ed1644b670a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b83c127c5c876c4a393ff92c27ced5c8"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b6fe19c2ac2725bb1c3da9aa1145059a"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "229fb1c8a5a10f8f8e03401e23e66cef"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "341c450304abe292e2714307e41d6f16"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "36682d9dfa8eb329d44db96fd99f59c7"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "a5b42455dcc67a7d2fa5c374d89b8610"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e299c3607f78e901bce993ea23b6ae0a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7ba57c60894a39ff3419796ead94f776"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "62d7b90c88eae0c54232296df58bf4fe"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "076e94581f9e5fd516196a98f9ca17f7"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e2d640ee1ffafecb5a9b56eb543044d6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7a5768157c0dc0c84490db5c0e307f88"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "414464ac946d6b4fbeb7a24260f1ce42"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "97a40ef9915c8b180f368d6b1fa57e50"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "933ab5332dad47512e7a353d1f4e3fe0"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "030566221abd49393a0cf898e5625d36"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a3fa95fc5d55893c48bae6fe8f93e085"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b83b71f69b7e556a7e4955a42a66a22b"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "06d892f22a3f11086a627819bb133c1e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7c39a7ac36d9538e510da3c895484e2c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "fc2a0f9e69cceac921dfb5351077e63b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ccad154fbaae7dbca605d53a78c50c89"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c646b8a67dcd6b9044a39834ac3220bd"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "49f0384197a8e18e97d6446a69ddbc0f"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "2d4306781507e019e24b9c748ce5a291"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c98ced7ac812b6a2f686cce7bed7bfcf"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4d107a299163215b07b8e0fdac81bcdd"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "4428a561892a4d16fd45e57b6bc09947"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "9674d046da0b49ecdc2dc4a2b4fa398e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "425f871bf6c52aabddcc64dce59326de"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "57c6d6159a671ab6e16edfba204c6006"
  },
  {
    "url": "tag/git/index.html",
    "revision": "892e14fa92a5462393b966a205d52fd7"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2b924bca965e7b2aedeb9b1b81c20faa"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "13df3fea2b3cc51fe87b00f028cddd2c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "265df1618b9d322093fd3c50e8b7a667"
  },
  {
    "url": "tag/index.html",
    "revision": "3dedc0abb83da01b044e043390a5f0ed"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "92b17bd03ff78d69372fffe573c80955"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3b1a135a43d2364238e8694a414169c6"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "7ca28502f69599045cae5668b3341a0e"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e32223d69068490a5847a7bca1010b67"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "cade9e5f3701cf58845ef5c2298fe198"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b587c48faf6a04dac490a7bc33b0d19c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "d71c394e5f987083a4a4f9569bd62a8b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "894d37b36640af139261d3cbaf5ac39e"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ddcd492e3a0a18a8714e6335b1de9766"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a61131f4efac2288459753ba943eddb4"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "02aff9967c8aba9c92f26057cd76e701"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "0bb103e60de49adf86d3890fc52c1bf8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "bc0155681abc85da2b1f29e8c61556bf"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9c9610b66a982effd8acc85a3fd67d34"
  },
  {
    "url": "tag/read/index.html",
    "revision": "5489b8b0ab6242a8916d3de803c18a83"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "717a6a28ee887a70241f76f7bd330ef3"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9b2626cf257ebf6baea360eff8af8eb7"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "70225f887ed799ae62ccc08feff5c2d6"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "98702454cd95c8d76e3f001df8bf307c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "c2e5f7dea2e395c420e60039f566935a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "51c9f9d525b919a3d0cfaca670add9c8"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "d75d6a2fe1424b10054c1e0ff4da0965"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "7ca82befc73777f32ee6d418cf1b2606"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "0f375ed9e98381cd8991e3818b5828ba"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e2bc4f0a19ed80899516d9eac9f6deff"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0f52610ca608cdae63d9a54b2bdcfae7"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "efedcf1bcc29afd6b2c90f4e5181c477"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "14db60e680230ef00c9bcae21cbacfa4"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "5da167777775d6b59c89fd0cd004e23a"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "266e87e9200bd36dd837ea75965ddd2f"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "95a5acd17bc54f71db43dc1bd0cc97a3"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "fca29c0b7e89d60b13ae95f18f023c37"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "04e641dbc5bedf20db71d7ee52fa6c2c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fc6bfdc4d746f504499a77760f645baa"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a2a20f6b74692602613c0c4756c5a756"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "840414409096c78869e16a8573aabc53"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "d0194fcf2c2828867ff684fb2d902343"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1324a6a1dbb765dfd3400f048a481088"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "0356018341d41d1ba906898678e65453"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f12bb073ab6a5388a9d43dc28dc0c51b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "64045a21c257ec612561eff589795ab0"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "c9af52e3bf2339d065ce3dbd9562653c"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a0b93a8a5ff15847177e00fe5be0ac23"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "bfef301a3f746ecf71cb8e5ff31de694"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1f2732de566087a5dcb84fd002972ca1"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1bdf3d9b2d366784b97dc0ccad05207a"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "2eed272cca9f1538a6276e73e8cfdb00"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "189393c1b3901f518c20a3eb4615af4e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "2c0e80732f3acd94ec105b3efc78bab7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "31e94bf410548bdb9f18bbc6f01ea9a8"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "127e1537977b6826129657f817d28e58"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cd90136058ba320c4938fd9dbd20be78"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "00f0092ad1aa3f75dd10a5907f3914bc"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7dee3b5aefd464fb594c82fd798fc809"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "dfd0d9aa1e3adc14c224f7754e70df9d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "52379a57a82c83bad4487b61937cc384"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a7c7d665291e928c2e1853f80a503f7c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "741fe26ac2e0b464dc2cf68b8557aca9"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "09c445af846b0a09899d5194b68aa9d7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6e9f7495bdfc17b201b0908b9e3a0e8e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "97d6a3b8e98102017c128d2069db175f"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "0274f241ac1968ef5231a5167acf1112"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "9e88fa7c2ebc3d11646f37d2b8feb6ff"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "d71ed46c5f2226bd4c8b7fc2c815695b"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "fc4ea338913a88f53644e16fecc4a5a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "e8f569e0968c2746f3ceeac21cee1b37"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "f643e23f9741cdfc139daa8ed4f090d9"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "bba9a9de0186d2dde2b7861e953b01fb"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "e85f37525d05799d723c52fc5d2b0b5f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cc2e2e3485d72ce1a5ffc08c393514a6"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fa6226b921b60707e1bbd714f807ce81"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f8b15432e32c6c89f01ce483e6a006df"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0f1ec5e62b9796506d3f5de6492d9cb9"
  },
  {
    "url": "tools/note/index.html",
    "revision": "e35d98385f7b933120bcfe77853158ea"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "f43949bc81b86ac64ab3e93348cf9576"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "86718b7c503ccf639147b71e17d24969"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f1dc58b5e387aeb137d322e3b53223ea"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "04eccc1f149fbf58eeb44fe65a8ef422"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "c22e55d49bf345ca3e6b5781fb1abe3b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ead203b7026df0513334601ee25b3719"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "08eeca2a7e3add23abc179da7d80bbc9"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "a9950ff44358097a1bdc698b186c384b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f3c2624aade11d9e668465a1c34569ba"
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
