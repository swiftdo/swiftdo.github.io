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
    "revision": "20a462dce36c01a9e5ccc18a6c00f467"
  },
  {
    "url": "about/app/index.html",
    "revision": "0d20ed80756709dbcf4cf50d0455b7a9"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5491efa72f8f8b278fab5c1ad787879e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c86f08590e0c7fea4b26ad35e93a3e17"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "485085583619d66b93c913c5904d18b8"
  },
  {
    "url": "about/index/index.html",
    "revision": "4b6d4e9a093b4ea11ed4016e29a11f15"
  },
  {
    "url": "ai/index.html",
    "revision": "9055120f2697282b221148ef4c78cfa4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "43d8b98f6cdc79a67f1399666154b819"
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
    "url": "assets/js/100.ed597179.js",
    "revision": "eb64847f0c37cccef87745e34bacba78"
  },
  {
    "url": "assets/js/101.9c50a68f.js",
    "revision": "1c5072a6f80f549758dd272c03e9ba3b"
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
    "url": "assets/js/109.8e9ef179.js",
    "revision": "825994ba815a684ac3fe76d22db19c41"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.8f2e475e.js",
    "revision": "c2c1cc6f4b6a0b77657d1e12b7dd8cb4"
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
    "url": "assets/js/122.f61ca852.js",
    "revision": "5e6a2045794c54aa594d19ae2cd8d279"
  },
  {
    "url": "assets/js/123.3c883af9.js",
    "revision": "bee9cb209cf76e67bc6ad1d9c7f103be"
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
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
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
    "url": "assets/js/137.991454c8.js",
    "revision": "93b941cf5ea014227e4348b4721e1466"
  },
  {
    "url": "assets/js/138.faedd824.js",
    "revision": "6e3f8878626d3085aebd4cea5fa0c602"
  },
  {
    "url": "assets/js/139.48962192.js",
    "revision": "68676631f27bc3763ea1c568b1694b15"
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
    "url": "assets/js/172.b5642119.js",
    "revision": "88da89fa4faf5d8e803f74ea50a3c3f7"
  },
  {
    "url": "assets/js/173.35d94333.js",
    "revision": "fb91acf94a4eb07f9913f52d80a1d4a8"
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
    "url": "assets/js/178.4670f4a2.js",
    "revision": "bf4cce445631fb89ae76bb49adb5e330"
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
    "url": "assets/js/185.60eae4e7.js",
    "revision": "3b355d8e76b7f687b1421ab068dc3e30"
  },
  {
    "url": "assets/js/186.6442317f.js",
    "revision": "df8212231378ce8268317d391dd93143"
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
    "url": "assets/js/207.4ad90a67.js",
    "revision": "e4aadb12b089cb7a2e32935e0a3d5a8b"
  },
  {
    "url": "assets/js/208.34440831.js",
    "revision": "b0355c6cfc82a94db501efce63fa1f63"
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
    "url": "assets/js/214.77171be5.js",
    "revision": "f894ee0d59328aef023fb3ad0546bda8"
  },
  {
    "url": "assets/js/215.2a6ee8a1.js",
    "revision": "ba7f92a9e42b67626547bcfb02a6e19c"
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
    "url": "assets/js/239.8d69edb0.js",
    "revision": "14dd6265e86e5ed6cb4c162527e0aac6"
  },
  {
    "url": "assets/js/24.f7ae0327.js",
    "revision": "9c7828de18ebb1c2858e2e8a119bf590"
  },
  {
    "url": "assets/js/240.ebe7ff8b.js",
    "revision": "0b19cb631da108db031fb87c388855a6"
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
    "url": "assets/js/249.3b37d855.js",
    "revision": "73ac7e98ad77df321d58ecc2f2c1cfdd"
  },
  {
    "url": "assets/js/25.70035cb2.js",
    "revision": "0236fcd019613adbe33e6eb2cdcb42fe"
  },
  {
    "url": "assets/js/250.9efbac0f.js",
    "revision": "46c6e853f7c1bc063eff89410ab7d8f4"
  },
  {
    "url": "assets/js/251.9bdd48f2.js",
    "revision": "c809dc2c60e4d4cf99e6c87a32008a58"
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
    "url": "assets/js/258.de282d19.js",
    "revision": "f45899a9c708d38d3aaea0b8aeb98375"
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
    "url": "assets/js/260.78b1c238.js",
    "revision": "fae9a95e24d54b28910d1ce6c4d1be62"
  },
  {
    "url": "assets/js/261.2100d914.js",
    "revision": "94622410633766246bafbdd15312b928"
  },
  {
    "url": "assets/js/262.e88358d9.js",
    "revision": "a7d64ce477e737790aa94ecbc095b804"
  },
  {
    "url": "assets/js/263.bd990ca2.js",
    "revision": "11e7a7f353558ca4cb8f3421946ce84c"
  },
  {
    "url": "assets/js/264.2a1cde22.js",
    "revision": "7157b02be62435bd050e542023db485e"
  },
  {
    "url": "assets/js/265.9dcbdd20.js",
    "revision": "ee1666b53e07484002694969bfb591fd"
  },
  {
    "url": "assets/js/266.b7ca5199.js",
    "revision": "7383fb404741e8dad82ad8179eaab705"
  },
  {
    "url": "assets/js/267.11d8de6c.js",
    "revision": "25120d97d6f4e52e65d057dc2c3e4a49"
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
    "url": "assets/js/31.aad90f29.js",
    "revision": "235beab9740e480d3dc06d7989d4835f"
  },
  {
    "url": "assets/js/32.2f57dd53.js",
    "revision": "3f5cb2b99431811ce495af7b3f39109b"
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
    "url": "assets/js/69.7610c13a.js",
    "revision": "74b223bd73c8fcfec9594dc731196cf5"
  },
  {
    "url": "assets/js/7.3defe02f.js",
    "revision": "d5cb8446c258e8c108a9be4a8183e381"
  },
  {
    "url": "assets/js/70.427b1673.js",
    "revision": "66920d2940bf3aaa999c628be9e8509c"
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
    "url": "assets/js/85.b1a2a182.js",
    "revision": "fc8dc72a070fa1444cce26e9291d4817"
  },
  {
    "url": "assets/js/86.cb74bfe2.js",
    "revision": "c361064cb375b05a560d166566c2b382"
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
    "url": "assets/js/app.0c79ece2.js",
    "revision": "f7cbc30fc6107473776ceec98ef55ecd"
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
    "revision": "725aab82d96f3c34949269cc50599530"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a7c4f1a32f698088350f45e6d67a1a17"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "df9f3324216e7fcfd3901c13aa484ecf"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ceee91df2796075046b7672d5a3b092d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "af708b01fb79d92f4f1335251ab70291"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f338016f3837d0b0544969b101c11ebb"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "042c997d339edc11538e17ba986ecd10"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "9e9b1a1c75761fcbc34f505b1d03ce80"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ee73e98cf3ae45bab1a18984ae17b94c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9cfaf510bfc00005b46e85d6b7d024d6"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0beca1b1b454b2cbe91c1cd94e71a937"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "ebbea9a8f7246ce50899d43f9b58bcd3"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "cd60f8ca3a6f78122e08ece1125cb660"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "89f4d09f36a4baef1730cd5bfff840c6"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "19ccf8d208b2a9ccf2564295c3913c57"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "943ae703e577ebd7aebee8e8b71053d7"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "844b81c1757bdca2fd6213d432259038"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "8f4277892699e448d734e570eeb1a77e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "b3ac58e8214064e263c48c7707f58ef5"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "60469d6248deb5cee3a07a9aeeabe05e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "a310a0d5ee9887069cb4c344993c3bdf"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "cf7b57debb433b1a60697dcb63178111"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "359bcc909d1a2dafee1a3ad83150484a"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c32df8d720f075fd3e0e3362111278cb"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "9253b3cbe24d18dd5d2f42f0b2bb8513"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "13e60dfada4745ec4718672878da1ae1"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "198478bbc355bac68184eacd51ad7412"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "34da8e8f9cec26f908603d0ae28492be"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "1f720a085c1052926ff44e88dce95e2c"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "3a80cb684cbf866134a29bbc4e811efe"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "06228d5f6e28aa3b49ebb28b46eaacaa"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "dc7888ba27a3187dfabf4afb60ac0432"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "da6c44b1ad9a22396167c8753f90688b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "11b86dc8562550100ac789027807e242"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a23a19a3a1f6a4d3f14bafb5f2cfa044"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "19e77132d742aa4f3abf4d89f0141cd1"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "c470cb14b98eb0af6843ad0f74af4e21"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "cf1b4d1f23166acebf7cf96b14e68f6b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a72d4252b3b5fdc0663ee7298352f91b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "33aa34c776c5996aad301b23af990200"
  },
  {
    "url": "book/index.html",
    "revision": "4b06ab5952411761d98debb8c48b341f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "70aeaa56462cef53bf8aff1155885d7a"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "f7871e79331a427e2701d5789336de24"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "83de3191bbc8b8303a34be5988ae0597"
  },
  {
    "url": "c/audio/index.html",
    "revision": "9c7ec3198c1b29e17b452326be00d687"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "3568588b268fc530b460ba1c15d223dc"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "e7e5a26e1bb43ede0fa2a9538b45cc27"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "a31784709f313094916340b420027795"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "aac2a99886fd954b61f6908e446751d4"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b77043d005ae8e3f47d36ff2729433d3"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "b74adde21c328c5dbb03cefc5a6e119b"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "2c3cf4e56458b6603e5d220c337634c8"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "0b943e8761169bf546cd0aae8fd7e011"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "3fa0609af9112d65ae9b7bfd93c6651d"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "a19c90ab9ff46a5fb4c5f7520133efcd"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "453e347f72d00c4deead71a3392e4c15"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "eaf3acd94aebc7d87021a250e529f6b9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "bad8dc838f722ce16fc294de6c4dbdfc"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d17587ccec0eea9ff638bf47c33efe33"
  },
  {
    "url": "c/program/index.html",
    "revision": "fedd16c7f7c9f3b6809ef56d7da6e533"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "42f3ccbf086e485ee8624816b34b8b3b"
  },
  {
    "url": "categories/index.html",
    "revision": "333051c82f5bb2c57b40c63c0f09b88e"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "96e2a364ccc4bc93fe9b8067be7d8e0d"
  },
  {
    "url": "figma/index.html",
    "revision": "84429069421cf4d86f8ff2e0c9b554f2"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "4437c228904805cd1c7208d4a2fb9ae5"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "61c5468cafbdc7ad45af1d7cf75955be"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "099a6ed402213df1d5f229856e1135e3"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "4e5344e25e907f1e29c374f65b180180"
  },
  {
    "url": "flutter/index.html",
    "revision": "a4ab252c762e50795a0ea65b206b5070"
  },
  {
    "url": "flutter/point.html",
    "revision": "12b8d7645088ce72aa32d7e9f96a7da2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "dbe62cda924edcc8f4275130445be1d2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a09c7f15b79ef72260c10bbf0cd904da"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "26928f5618c0afddf8c1d6796f252522"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4c3cea301c3016df7e59a942dc7787b4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "534897decae1224c1cbdd394cd130ece"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "31d414c48d88ddbcf45855ed2ce00d44"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "72cf73ef45d796c415cbf11486ceaef8"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e50a45216514e058efba39f4f8c01215"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "fc201e31403dcf216630bb4b1cff5d44"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "fe5ffd5ab93eb4ae0a8c3376783c0929"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "79e908ac73f64e17cc0a2f67213504f9"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "18fa2e0438ff5a117f317aaf6fa97e7f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "156a6cc11fc3829daf0929680487d06e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "507fd6793b769fcb964c6a38f4d06915"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "55ed53973abfe0d894646c3669197c6f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1ef2a43f044c084ab87f0442d3d72be3"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "14abe3613f06dc0d2533e2ead1f410e7"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "14045804f3c11fd0a509e21b92a7b8e0"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "881981efae2482ff12fab38f714b5ad9"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ea0b6c29acffa34999e66419a2f21e45"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "a3c6436e159e1ce4b0d4f91fbe628b48"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "43d7eefa96ccd3616c5e98411ab3840f"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "99c230049f08cc0443748115ced1c393"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7d4b9e7d34b83ae636a5fd6cc4f9f0a0"
  },
  {
    "url": "haskell/index.html",
    "revision": "3cd591756c2658eb20322b4fae76760a"
  },
  {
    "url": "index.html",
    "revision": "53ae3535a8644c775978014bb64b93cc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "78bb6add783c854f0771765bb8ec0c2f"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "1e001b4843628693429725e76757c2fc"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "d118e6bea173340d432156413fe4d75b"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "0793032849fdc0a2411f1ab79c616ad6"
  },
  {
    "url": "python/index.html",
    "revision": "2d4ecf2be6c95f6c4de0b82edae6aaed"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "99ec8c3e2f68247fb279a25efe1e0922"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2e8ab3e57b984534fe3113721945e0e8"
  },
  {
    "url": "python/python-file.html",
    "revision": "706b095bd149ed1203828373f5cf4614"
  },
  {
    "url": "python/python-function.html",
    "revision": "bd6d218745ceeb49d8e9c5b80dbed87b"
  },
  {
    "url": "python/python-generator.html",
    "revision": "86f44dc6ac0fd758b5ee5bfb078383e1"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "3058683ee8f8953d0cf7f20665e170ca"
  },
  {
    "url": "python/python-module.html",
    "revision": "7cef7dd05603b9f986fdff718a1f1e04"
  },
  {
    "url": "python/python-string.html",
    "revision": "86f5b06862f6a937982341c33e158740"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4b6067eaecada3374553576d3fef80d7"
  },
  {
    "url": "read/index.html",
    "revision": "97c6efe25c669205dcde54ea2aa5ab92"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "69c63ef1f1cd571e8b0992ea408ae347"
  },
  {
    "url": "swift/better/available.html",
    "revision": "0060fa1bf413570175e2bcf2e79497e9"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "0a801bb2e99f2130d74609ed9730d8e0"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "17b1fe25181366bd6eca5db71d44646f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "aeeb438a23d5f0f8859b7f082c9de3d4"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b231e223780dd4e2006f0375c19275c7"
  },
  {
    "url": "swift/better/index.html",
    "revision": "b9dc4a179f7b2a86a3992b17e36bb140"
  },
  {
    "url": "swift/better/last.html",
    "revision": "668aaa58059a7d9f38be1090e170c783"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "00d9c1a115b24ac3f36fab7376e8e51a"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "022728eba1d1dafbdb30e5cfe2fd7996"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "e323c847ee5a5cf0a100ad614c727195"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "068518b2dd2466ec05c6959978bbec1b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "da7afd1f4bbb483cfd1eac631de1d027"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e6a1d348010193a0eba07d0f1ca3ea5d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "6075f3ea0a25d54b0062598de97b28bf"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "69e2e71c48b218e4d8feeddd6c82067a"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "49538395e02c715f0e22cae82056d0d4"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "fd6bfa1a9de8b2253311c7f174863f16"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "10b87df529aeaed8b2c43207f2b41a56"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "e78ee39c1ffa744e69795e4f3f1c3c0d"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "d6abfa184190fa0c92a060f155c05e53"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9b4416352fe3a83f0436bee230c6e222"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "157c35274738340eaa95ab50abde41c3"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "61b13c0711dc0551f0ec46057a6aaa5f"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "6138f8928626cffe529fcda37be3f5a7"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "fe57d56609c2b7b01093922bde1c4e93"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "802fc7000c0fd6663d252fd49a3b81ac"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "71c3095d6487f9e648e7f80a7d56c438"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "d1ddc53dbed90df73be5d7b9eb50825a"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c047e935a855d03e15afb253acd51cc9"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "d9693c2657ca9715c9a1042013f436a5"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c2e35f8d64792b4c0aaad2df0b203bc7"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "02175d1fd567551393cac10f3f91268b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "6ae767c1d36f35c5e289748f1dcd9a6a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "02f374062885d0903157eb774c874c10"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "9ac26ff1aa02b91f11058d6f2075c1a1"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3ed5d22516f13c65cade3a942540286c"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e9709ade93bfadc8b93687a8e1af5a41"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f63f1e8863e557edd0cf043e7763b3b4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "a2f766bd8fef627717fe891619e47049"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "3c1f0815ea444e049e54ee0874c8394d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "986ede6714efb5d6dcd214c3a0d171e1"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "72bfe243fc1d81ab5e2fd732be610386"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f732db5f85fe31ea6123eb866fe5bbcf"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "1c0c11275ca18c678c1b4e3f3f0e7cde"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2b811d9f7fd7d29775ea7354426c4e01"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "09219da82cadfbeb24778254340a9a46"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a006bad3f31ab27a9297a3e1d8dd57e8"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "b19327b04c71beb623dcd0be83a6c430"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "0646db903f911ec802465bea51261073"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a7058a2c9fb0c724a33ba956c02b17a0"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "4e65855314750854d6c67aba07981f53"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "7f5f698b905114dd38d105d9a6ed396f"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "66a971fb6bf37f6d84497238de324754"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "e2f9166fe99e0f978e338cc9fa877d20"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "6eb596ec0e964901eabaab7ab7d3c148"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "40e7587df93c23e27399dacf4fbed915"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "8c7ff780b7df61e9ca2896b74cbf8728"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "da23411317505fc3334b3c9f6ce413f1"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "c66786c49861fbdf5290b0ce3c8f2aca"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ccabe9fb8fe08527e20f045c802b3e8e"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "87c0bc207a169abd7f875079bdceda3d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "d330a1c6216db21f52efc7cc6b9b80fe"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "c5c61d082e872b73d58998f79f476419"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "539e0e4709a09d3e26ec34d3eadd3ff4"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "42c2483a95685033027b601e9f503e34"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "632a0b858462e05e0b289ada5e84ad37"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e4565ca2c903c3276e3ac35f7a4c8d4a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "01e0e778569adc2d527d8609397bbac4"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f5026d80057e74eee49476298b29412e"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "2015e11d1d9a675ac506c1a8816bbf59"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "d6c7423c6e4b30a884e9bd78f418a9f6"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "30352b44a864a0615e331f7a6d232468"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "8e57a84db3dc9ba7cc8be3338f4dd5d9"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "7000eb1a8c5ca0ce4e32ecf25c4532b4"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "ea3366257d144012943cd9403cd7906d"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ddbd59997df3a766a46dc5f3b72749b0"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "5d849516c3b7e4d6c5d08451b0be9dc0"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "3c627e759286b9890441ff9ed1b771de"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "a1ce477d524e65e5e745f8363ff41dca"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "dfee8c95784504b1adac1c3301321012"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "dd7c698f64369b10cd8216437cd84bef"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "22185fc63ae8380e83200a569e3f1a9a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "8566b318a31885a42b8cecb5893c6274"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8e7022315ca6f95254dd56257fa820aa"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "73108f2393ef5ddeb579b14b101b876e"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "7f632920146d22d8c3f9e3301c3981a6"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c22ea5b98d383abf7f1d1046f0c3319d"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "a6c5ef4d8842de44049e2b04f8bfb306"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "92b74b86f620558d37ec632e4afd0692"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "af665f8c4954e1f0ab69de2930fdb112"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "aa48a24006748d1601043a0dc1be7920"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "af8bbeac6dd12c899ea27a7dbc8c47da"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "e58581b812bbbf8f849d17720adeff48"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a445874cbf54aa2782a8edb9b9060868"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "3dce9e546327368e4f3eaba508120758"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a6e4c99d561096f1814bb50864d71459"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "097955c38189f2ffeff002d8262e1049"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "d04fb018073c085187a70d1101345b02"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "75784838d03d1c9a8f9b0d4b3bdcef11"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f543684d2cac0febad291a4161a659ce"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "c979287e7f072e1ee9aceea349ee0a40"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "c2910f388ae862058a6119fc517eeec5"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "650396d4ec6b4900d57c88e75f57c876"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4efc433c6182dd6158a77a2ad2e76d6e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4a4d6e8353ca3d9db6164775a88d58c9"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "03d2e6adf53769299a87a62537264be3"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "71b313771e7bfe536e179204ddce8767"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "4086938d158347162ba6ffc7e6270fb5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e5ede1c10a09d59103e25a264df20c26"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "fdeeb09e235cb925e90a4761c74bedd2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "698f6a88c6abc857bf00177699f843eb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "320a6b853e8117d1e7186f511118b127"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3ae9a239efdf86358c67775f270dff65"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "356be44f84087f3fd2f466f5d7680573"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "107921c3d49ae4a194d6e71e1e93e1f5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0051f006dc917bf8aaf4a7f5811e6f2b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "eb6f61fb28f26c922e4aa4b40cb8db9c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8943c1471485d5df523fc69cedc6b6bc"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "665c7bc23f5b498caa0dd8909286ffa0"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "97d841975f734b19082395547f93f9f2"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "24f8034f8929ada54e665e4fa3b9fd71"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "98166b586bd3f18b4d907fb38214cc6a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "99e1676463d54a701fc427c6682a5845"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "048793f9d1c9cc6e32187dfc0a342eb2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c3c96219ea91ccca287aef83fdfb7766"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "bcb009b097478e1a950422e4c5a99760"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1a6931f54ead3b7fe73101280b62e7bb"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3e078e88778aa0fc12d0a3a02aa61eb8"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "9849b14590a565c9b878db1c1a90a3b9"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "8f804621fa8f643864bf010aaccfa779"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "26e0f077445ecddd460bd38dd59cf4ef"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "bed307168af4e78f33b57274d6a30cbd"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "db18b4bd5f1a3a9e5ee328aa3a50adee"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8c3e1c40a516c0e693f1e46f6abbcd8b"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ae1dc77da01858e64ad56574ff765971"
  },
  {
    "url": "tag/git/index.html",
    "revision": "eb11e83c70d5bb5d2ea5a14003146c40"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c3ba07c5d0a771775370ecf47ff471ab"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "0feb223f30e7e0d30d385172b81a5c0a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b9cf43d61241cbbf462261d31b9c87d4"
  },
  {
    "url": "tag/index.html",
    "revision": "6334edc3d97654d4e56b04f17cf00302"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "991eeec19a41fb7f845744679cd490fd"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "a1d6c37ea2eb2e8ca98e3d372ac5c8c2"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "556097a4bccb674f65d1157489f2d0e6"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "d233f2f50371627413030aec25b9d1ba"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "62c32cb55d318d42f41679e16a85189b"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "36b3c69ae3e086ddd8f91c7f409aed59"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "ee9abceef2ae0e894fde1742068c8a13"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "1cdc99d329666b38261175e0520989ca"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "cd8d75255c0a87c2d4bac4e24dc82ee1"
  },
  {
    "url": "tag/json/index.html",
    "revision": "0fb3dd765e5962a3eb94a4c982b56f17"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d62edead6d23d5dd46adae967c8dd200"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "227daf179e40b3c37170cdc76a2aef31"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5567efff4eac3b76363c6454d8e2c764"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "82c3c9a293b96c7aaf5de0c8da256d48"
  },
  {
    "url": "tag/read/index.html",
    "revision": "6efe3035b8cfae317ce1459db2d94afd"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "8ed4a4cbefc499dda234254d67beb490"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "159b4a542f3057b0ce65d0a7d9215006"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "2aed31e089ba9aa70dd4fc12f23af3ff"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "1f8317946bb04fb7963b1308acae5a7e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "dd7add84259e43af838b2e2ac8bf654b"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "0b378021fdbb320a290c67adb457ed2b"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "d258f9dfc6a2f73c0cc9ee8fc65cfe39"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "3db97e7f774323da3318a71a1a9247ac"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "95482d55027fe61c9a331e80af9e8bfa"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "42e8c19407990c2912178e524f90f9b5"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3b83d67b1db8c4f26a3c8f1408510ec9"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "791c1865d7060530527b9538fcdf8c68"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "e1e9a288f0a216fdcc852b0e4f2d0751"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0715ef265d7bfa7d5eddb04b8ca91a36"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6df2ed6658ff1b42cf6624109c13a863"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8d8e91a5fe5959fc5b8550618725a432"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "199b756f666c7fe256ada2afbe0a151a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "531f8e3d5b67d178c6f58fd055a9e952"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f0a951ffe57e0047db3ea1a93a3371fe"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "bb45ad1a39a0fa0c3fb616dd50aefcbf"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "3e3b4ee4b18a512026d628555397856f"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "249f21bcfdab3942f32a1ac04de2bf99"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "3a14bea90a87e9ed6b3037a669fd4f13"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "4a3ab5a5025c7c142ed08dcda509f3a4"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a2f82f896ae51a121b7822e609ade8ca"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "fc64c2c2d631d1d60c5f79b17fee7384"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "40a1ee8f214d664c9c220fac95cace29"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "01ffdcfb9c532eefe83c2ae00a7987ef"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "629c877717acae1fe68092cf403f6768"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a6edad68e1866251a681972c9679ca78"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1bc7c22dea448a6c1a71223f8d163014"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "186e2e0f7f77eeb5d6ea5cc92e3d7a59"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "27c4b66c89841ae27f3c91e07def7aab"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c18d14d771e39b7d7bb1818c62914a66"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "77086c0eb56796216b825d3c3bcd17a0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "235ad5dba5ae2b593e4a70c85d3b64d1"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cd763073763ddaab6e3b6adbbe47f2f9"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a8e71b954fb4c71a6291f3d3ffd9ec02"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "514d08af5468eb2838cc22fb86a9a137"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "416d72c953fa6967ddd9c93b10168f33"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "626b5a800acce0c8e65336332cae5f83"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "6c95ef9b47a3b981a51cb8f8a168db64"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "18d0faa12fbfc566d9ce5d91f641afc0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "fcca63dfe4a26cc7ef08559928d283de"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "4699b03096a791c6b08f49d07d266815"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9fd22587dfe6f54a064d57bada663d99"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "0374106013904ffe570376fc5e34c7ad"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "95a874e5e92befe4523ec804e36ccbd1"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "3d91df77498f22d16c6d4547d5643b96"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "77f63e4c8b497155402cb03a90def3f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "e0c9ae2ab24944b665813eda3075aab1"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "3d7fb25e0ecac9146757a69ebfba6719"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "da2f02169bc8016ec0de3e421af67473"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "0088fb596eb59288badb07d162c43cc1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "883d9e7b0d4a292ce53eb3d4c2147df7"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "be8d8aac64196f0a7466873964033e56"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3859adf95d1b28e5fcc868048587697a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "cf8ccc1e472a62eae16e3426a5741cb8"
  },
  {
    "url": "tools/note/index.html",
    "revision": "a6164df0a2b6e42d0c87f953315a6c96"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "774021cfd101267fa180f745f1722847"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c2983156bcc41424b4df7e9dcddcde37"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8f14cd23d6aae5b349b78c833c96ade5"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "80596738fc8da0abb71ba90f154819f5"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "feca9c80b9143be02005894581e98819"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9d07e817ad33837f77ed98a680602771"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "164ce69cd2c1359645504776f02ea38f"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "5838c5077464d66d9b59c1ab3cea8c36"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "cf236ab16f232b136608f2bd471eb80e"
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
