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
    "revision": "73467f313a3d4efb2774fcf77bd0c163"
  },
  {
    "url": "about/app/index.html",
    "revision": "d1745f2eeabad9c60852364ab8d368db"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f53b8fbd91fcfad12f4c666b1d679482"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b7865bcdb6289fec538e28a895c09e8d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "51a9bde4374ae6ab1df03021da600649"
  },
  {
    "url": "about/index/index.html",
    "revision": "87786f3c00fc805fb5a6c6f41ea28678"
  },
  {
    "url": "ai/index.html",
    "revision": "26f9ba99394a2a7d5536d2a12c127ef8"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "1700e7dd01b7ad4d1af8a74c2d5fced5"
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
    "url": "assets/js/121.cd4926bc.js",
    "revision": "e31eece685f1477ed5d140ba4b3f12b1"
  },
  {
    "url": "assets/js/122.51c7c765.js",
    "revision": "664dc88dbbc9bd4a7c369199c6cf044c"
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
    "url": "assets/js/125.6a32d26e.js",
    "revision": "8d38056644bea0149d1913b06a23011d"
  },
  {
    "url": "assets/js/126.d62a1203.js",
    "revision": "a9f814b463b18830ccf9e279687012a5"
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
    "url": "assets/js/132.57ff3f2d.js",
    "revision": "878a38bc64496a8c6cafa4c9c1221dc5"
  },
  {
    "url": "assets/js/133.33ea9f13.js",
    "revision": "25aeefd505448374aa2995f9722d991b"
  },
  {
    "url": "assets/js/134.c00a09fa.js",
    "revision": "c7e6caf9508d68e667e1fa5aa4ea3d9b"
  },
  {
    "url": "assets/js/135.9ebb9f2a.js",
    "revision": "3e309e88bb05b524f68970917bc4a694"
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
    "url": "assets/js/139.089c8427.js",
    "revision": "00bf8c84cb89b672b767432c6b228d59"
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
    "url": "assets/js/148.b31bf406.js",
    "revision": "c98742166be228d36ad4664bfd28f41e"
  },
  {
    "url": "assets/js/149.1f77cd83.js",
    "revision": "f87a6525be3df579e6dc31a09a5163f0"
  },
  {
    "url": "assets/js/15.7a6baffe.js",
    "revision": "e1c5817963261e53249add7fa535184f"
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
    "url": "assets/js/158.81e1355c.js",
    "revision": "adab4c61a307c215344fe71d01f98e03"
  },
  {
    "url": "assets/js/159.e21d14df.js",
    "revision": "065d4d3aa1180e53811f4294db07b1a7"
  },
  {
    "url": "assets/js/16.e4a55c2b.js",
    "revision": "d8ac1823a4917b8b0948fc4fd06131e8"
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
    "url": "assets/js/177.42f026bf.js",
    "revision": "5f3238a58c4819948d3f52f5f6c64df2"
  },
  {
    "url": "assets/js/178.bd58a8fa.js",
    "revision": "dfe1a5ead73198518768b4acc58bbe0a"
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
    "url": "assets/js/190.816e558e.js",
    "revision": "54ccdd570c9b0f64bfcebb55e99aecca"
  },
  {
    "url": "assets/js/191.569343a5.js",
    "revision": "c4174ccbcaaa96716412e3445ce85d92"
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
    "url": "assets/js/196.da7f3434.js",
    "revision": "2e24609813c1aa5575ffd7f84b0fafbc"
  },
  {
    "url": "assets/js/197.8523b99e.js",
    "revision": "58b5762a584a046963dd5c496e7ea33c"
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
    "url": "assets/js/202.3497f3a1.js",
    "revision": "ebb9deb924d43db51afb290c3d1c4bda"
  },
  {
    "url": "assets/js/203.cf471982.js",
    "revision": "9a2c1a01e24bdec3df2158997ca91421"
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
    "url": "assets/js/242.4bd0a17b.js",
    "revision": "67b08b59e6fb1dc44d0b4a9ad07d124b"
  },
  {
    "url": "assets/js/243.6a87fc17.js",
    "revision": "0553fdb593f28111179c3bec40564e9a"
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
    "url": "assets/js/249.73d8b9d8.js",
    "revision": "e7bdae035126f63c21d6e66db48bf30f"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.4b96cf72.js",
    "revision": "1d586158db2145ab0c55e82a4d72d114"
  },
  {
    "url": "assets/js/251.217df8a4.js",
    "revision": "c8e26b864aec39e10b91e64153be39ce"
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
    "url": "assets/js/256.35244645.js",
    "revision": "2f2d40354553b9cafe1cbda622b9a5a9"
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
    "url": "assets/js/54.764c2bac.js",
    "revision": "6d60f1ae90bd1b8ad0c178920eaf8b83"
  },
  {
    "url": "assets/js/55.0704782e.js",
    "revision": "d45b153847d0b4d0b907c2af8ec3497d"
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
    "url": "assets/js/app.9ada6a20.js",
    "revision": "1e537ed4e20a89b4bfa7799203b82f73"
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
    "revision": "46021ecfbc3511129523f5a1a3a3c227"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "bdf60b888a3be9fee95190368a6a59d0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "19d20a0fab982199c372e7955c3912ef"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3a7d5c0f262c6a1e09d62546dcc8b90d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "90abe1537e19ae39ba2f1f565e17e823"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "595c839bd7a13c86f88972cdde0405d3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a6718f9e4d48ec22e248c6a7ecc9bd19"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "44f8b7ea43934897c74b6cf32e7e5d74"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "00744b78daec8eecfc65a87245b6e422"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a791f167aae4a43f2b05198c7479de95"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "58e4d295f600e34b984fa1eb21085e2d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "2170196e3eafe547387d0c16867263b0"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "51b1b34f492acdb688b2d091ecbaa7cb"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "364657ae2471c0ef2ed3036a880ac128"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "1ca1ea781c22bde358d0cb50cdf73f27"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "d6a762aa6500fed83c8dbd9d09da55f8"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "94b4888be14e7f75d80ca2260bf6e8f5"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "e5985e5b4f77b1dee3a9400ee703a03b"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "55bc3e7801b4a330c0f4c571e8cb89bc"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "a4c254dcda0d30cb953bba926d1cf551"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "823e0e7a97b57c55ecf2b208470d30f5"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "7801b1ba997ebcc958d941243990dee5"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "d00637c3a8bb795ce85e4fab63c8c832"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "69795e34a4380c83db6cb2db633d3695"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "992e86e3accf3caeb72ad396e648c79d"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "8c82a740237cb7a56410e107a97aeee5"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "47e7fccd71a6cce6665620a39403d214"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "0f0121cfef2b055ee0ee21083c11ae96"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "febc0f8e9d0eabbee1e2044e8e15dd73"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e5a740bd323bdc6c24092bda98fda9ab"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "f1d814593a7df587d4dd6b2824371edb"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5ce93ac209b4976ad7d092e885c07457"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "3f9bbfe331f958fa151a86881547d772"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "725d8595cee5e8b3e3dcb61f690c3c74"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "77622337f3ddb1c6801527dab835e338"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "fce85a6873938d16a5ed7204dfe89c99"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "160ffb7cb8fa7f45f68527cede737409"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "0e2463221ea4f8c7ef75e488116aea63"
  },
  {
    "url": "basis/index/index.html",
    "revision": "63dda06a2e29f6b261d4b5d676f516c7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f3b1e8a9f0f2c07e30b721b02d3f8d0d"
  },
  {
    "url": "book/index.html",
    "revision": "5ab8e43fe08f2f137f810dbdeed9bc91"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "23620f25360b01dc1aab0c2ebdf2bfb8"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "1a25e896def9c3f5c03edcd8381db53d"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b5c98f10843f0f4ed267414013760a48"
  },
  {
    "url": "c/audio/index.html",
    "revision": "7c09ae68631b8bd38c52d247cc5bed78"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "2e194d893a1fbeaaa704b81d74f164d2"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "7804bab9220cb5bfa953d487b5675909"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "9fc613cf0319a0df0550952231bf362d"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ff762f4703063842fcb5ba9eca287a45"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "71b0b9e581dc2a1d3da023511770262f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "a63971b1e4b7c4e512edb7032b37e9ac"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "305327a5015dfc39636a48828c38f0ff"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "235b04760d3862ce6624e0ac4fd07830"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "472ae4435ef4c68f7316e08827414ce5"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "5c1b98d9fc9c2339bedd2d66a0b3c175"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "63bd0d7c14229f48e993e7818b11e9a6"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "5f660bb1fa35538bba1ad8f7edaccc0a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "685bbece93b1c81ce06b6e55dec19f9f"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "27f7e6e1f13964c0485d2657e6527acc"
  },
  {
    "url": "c/program/index.html",
    "revision": "cb0a24da9a603fb3faa9a2ab273b18db"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "8ab6f4f52c16d6861b3109d830cdd30f"
  },
  {
    "url": "categories/index.html",
    "revision": "beb4f25769807a75f796ede0afc0e2d6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "77e39e7789c99ba1f167a629e1d4d1a8"
  },
  {
    "url": "figma/index.html",
    "revision": "5592c54f6f4b751bd61002cf9a937633"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "33e67f995a1b9a85ad3d417e818f3333"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "c8b5fe9f5f3364e6ac73cc48ce5742f4"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "49d6ff76c2c8cb29fa8fb4131f45402f"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "bf4bfc72f8eaaaaa8fcfe392e33b4fdd"
  },
  {
    "url": "flutter/index.html",
    "revision": "0188f8a95f01b0392f89c07e84bc92e9"
  },
  {
    "url": "flutter/point.html",
    "revision": "79b990c6dfa908a73c16f32058aeac5f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a6349ba24ea0ed5b750aa740ff483a5b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5e5ecda53be24966185a97c4bd163e45"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d013de4a205466bcdde1d1cf5691cd5f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e77f0bfae8425556445c2c1caf9d6e69"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3faf1d53adee3a6bb8501ef358a857d8"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "bdc3e96eb6fcf4f63550cebe87662df7"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "6229167ccf3095ff7bdc887011cf8d68"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "704964f61c5ef8fcfd34e1969cdd84fa"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c9b0d3bcd8262bb8f8683a1f4ad04ee4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "91cdf57c845c4fd87b927c6f9dbf7d03"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c2abea565c750046c06fb84756db6eda"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1a3fbd1b8fe870032cfbc586567f932c"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "277f2ed95dad64254a887c9cceb31a3d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "36fda69e957d5c7b8e375e66599af40c"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "117dac8830d5650c7d71e3ead3a5e31d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "ee326032511d81e2ebd373d972643d50"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0f97dcbb470b673b784bb6ada129bf8c"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "2adfe7ec77de95bd6d237c792915ef51"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f5b45a75138346fdd38b68fd0e9c8640"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "01dc2a056dc821ecf785a5d5a9c0d4da"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "5c384520414df9fcc45acc19b5d07f05"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3cf284046aa650e4fa35f0759b97562b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "50a66c9591382848300790a84c41dba1"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ab5772f685e73e1cc9a36eca3298a01b"
  },
  {
    "url": "haskell/index.html",
    "revision": "2b2f6b30a6350651e683d46337ebf6f0"
  },
  {
    "url": "index.html",
    "revision": "9a0f8e50df4b77610ecf94a009ff5e1b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e2f3db7721a0c9cba5f65525dbf7310e"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "2f72c4dd150a1adcde0f04f994d49951"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f4152494b4174270bdf4f79a98e9af72"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "46da2940941911ea7ce1f7af81e29d89"
  },
  {
    "url": "python/index.html",
    "revision": "499687c0d193f876dac8ef21e6870bb5"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "7629039ef047f9b067f4ee861025b22a"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "7b757304d6742e4ad43a3d622179c0c1"
  },
  {
    "url": "python/python-file.html",
    "revision": "ddfaa47134eede57da8875d66db2f0fa"
  },
  {
    "url": "python/python-function.html",
    "revision": "4ca19db759df54713bcad99510ec59df"
  },
  {
    "url": "python/python-generator.html",
    "revision": "c5127d6b94d4944ca0bedf817f69391a"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "d5471c757b5cbc337b29b08085f3bf7c"
  },
  {
    "url": "python/python-module.html",
    "revision": "281e56edc4937f3a0e832721c8bae225"
  },
  {
    "url": "python/python-string.html",
    "revision": "0517d509b79ac01c958e242da6ee65ad"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "121ae88f3f2624b35cfed7a9a3fb8e69"
  },
  {
    "url": "read/index.html",
    "revision": "dc190418cbb73a79c56f62cdac3c6070"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "4b065ffbd2c24c6ebf0ff9489d1d5974"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4d761e204d2c1dd1c72166ba59d30d2f"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "937f4fd885ca44b947ece626f6f83779"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "3c770aa608c32b7c3447dbd0d883d655"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4092eda2f43da65a82f30b3f3b812a9b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "da65e0072dc092e2916da571150a830e"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a3689f2d73b97007a32621c58b5999d5"
  },
  {
    "url": "swift/better/last.html",
    "revision": "d3a114590c96668d86e318e6b1758c7c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "ede8b448d5a2c3ed3d68500adadca2f9"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "c522bf12e73ecd0c8037dd4ca570ef3b"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "d8209d7e952a43d8a3c63965a8668f70"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "346ef8dabc39421be3844ccdcca95f39"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4404af0aa126477aae18903e4ea0f108"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "6fea3d4db0f1bd947d275f1c461d542b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "cb3d9b2b79ea3f9c1635a06a3d5f8f9a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8cea17e58cc2f7e60f97a7303ccc0230"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "81353a43b24b278e44b41007d71ab050"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "52bc0f3c64a30c880796005a975cb059"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "9b52aeb9f974ef1541523c6189d6a9b8"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "76541936f818168b4e591258bfc510cd"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "10157a54f6ff96becb7c540ccbd4295b"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b8ef1567a831a794465d661366395afc"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "006d88090df83353829faba0eb9e3754"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "f5f8ac7dffcafe8350d96c040f52b86b"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "da3442f91e77dba60b0be1c0f1f0df6e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b55a2cbf22d0e7d6eaec6e4eec42da2a"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "6e1f9e3eb6f5675fae3453cadf69a8de"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "718310e2a64fd015c99d2a943960f099"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "880aaec0c33cf265bc4d4878661a27ed"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "972486e04a56fd411e2c98e982199aba"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "aaf87164fc777d18b8ec66d7a1e06763"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "7ad3184f0386f7ced6d2a162bf8cdac0"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "a209f60d2a402949ff6c2c2a7d68593e"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "e599398f9ff2e6e5f2e744d8f770f864"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "6d922269e5e91f8d5157838e31dc4e3c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "cbe52c3830b7b50b31d3a668cab3f903"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f21e042139e06fb8d48c2d9ca0945b08"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "d76422d68bb832ff24e46390741849ff"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "55ca9e767817accbb35ea07d2b2efbdc"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "e76bd95364e90cce57b10921afcaf5cf"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2b5b6cab41bf32d23f1df5a5b3116b9e"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c4535345c031b5003de8d8bf4724a855"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "5b4074a4a0cab8d46156639f6d5ae6ea"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "0295a0ddc7b09721982b9587d5d1b07f"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "b0c526b2a6bc5f878ccfcde3672d02a7"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "d62217064c0c15f272cfe92d4a521071"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "29b3671830018546c23f5513b751884b"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "e2048e5c507bbd1d298a332c1ef349d6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d38ee16ac7c275514e3ba0986175b7de"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "99ccb6ce4b2fd35121362f27074e2d1e"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "dafa41818db5dec6477207f2b9829a94"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "f5ea8649328b722644c21a2df8eef146"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "e0ae34be26fb230f3ac071e15d9b1e9f"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "89da4d1b1a8637b92273fad2ba9976bb"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "92147a0e4117ad7533133119cc08706e"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "895ad76131b3ef20e9faaf513a673810"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "274e048568a9b5f6f3cfaa4754053ba8"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "806728098403e773882214d9bd78bef7"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "d9b447f6501e93294c7ab2dfdeb19f90"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "999502c201b65adcca02ca1e96ee2789"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "72a9abf5e0b20c788a3d05a1a24873ae"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "d678510f89e8fff370b4bed951d8fa53"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "8f4f73cf3f79040942d07a76bd729f73"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f1af9345e78c87bd52f29ff6ab405c61"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ccec4ec5cc0718817e932fce54901c00"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "9e942bdacf266a56f414a7f5f4ea5276"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "88f17c21f093804da4071ee1db8c1d26"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "0137737181cb17dc7a70e2723d90ecff"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "5210a14ce371185ba772b64d12288296"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "12dde96d692a372bb808e8a597e7b633"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f5ee0f4094db165aa29eff09093e47f6"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "ec2b5248f914d8d8c2b5fe67dab1e8d1"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "5f9c0ece9a91960e5ed7d89801c17b81"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "2acb9c54105394c2e50acc6160958e92"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "585998ab879584481816f94139b027ba"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "026c9e52c658163d38369ee386363bf6"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "0934df001d2724e0cf3ca6a2523cec28"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2f58d20c26616c23b4f5f5bca8546e50"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "1c418e2752b5d6bf8a583a76aa81a3d7"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "cdbe6cd73a856877bc329f1619838fa8"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "71b424aa52bdf298dc401bcddd744173"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "9100de8fb616b6de04448497398ef03f"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "21347ca3c7725ac8ac899ba47ad79cee"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b234d4fbdbe8482e9918d25175132e59"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2ef5fccf71ca84552969a1c187858d17"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "11793eba46d89e40867eeef5428743a4"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "db825c8cf8af1117f7d0a1e43ff813fb"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a4aa1f703437a88b268fe5b23a07fc4f"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "dc7628ab958cdc3aeda8bed2b365f28b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "3bf82fe842e355818b9fef8609e17fa3"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e2128037b672b3cf31dbb3a14015e00f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6dafb019c4c564345e8d9500d79a137b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "699f4053e310811f2d7534da221714cc"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "e4e7573da2205f2eac2c9315361dbc35"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "926016593855ae770f97d9c1d35ca98f"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "4aad154b96de964eaa2cd098456c2338"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "62a3a871cfc5837df3f3a9d723b016a6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "15a6e7816b14f8bfd83fa348f805564f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "d7d5ece135f77367b08592fff784d053"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "2303bbabda5c2303d0df0303486013a5"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "daa92f90a77b63e5ac5a78ada317a0d5"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "5a337d17a418fe6c645a3ad62fba78b5"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "bffdaa56eda284b2c91d58581d52bec7"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "8979faa8429c9e50c5ab096c5658e7ce"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "6022d9d020cbd3a225f43b9d193abc32"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c51fde4486d4003b7023879bfacde8fc"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "611bd82c321544ef2193a6f89436640d"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "3b86f1bbba8987d2358092c2c9630f7a"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "2c59cd18cadcc506b3a9a6c316a30c61"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "5b7a424c340981afeaf0419d12c11d7d"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "796b9063c78f0ffe1a474d45fd06c03f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1ecff15c96d25a9e0673e88b472fbf16"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c471f4907722e472c474f01dabbdae3d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a0b91663980dc725ea69d486a5e4cb68"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8abe36eed099909eec737829c6cc5117"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "76c63a321293e7cae82f58ebe7036839"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "78b8f5e03944825d2b1825eb354e3309"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "42abcb85fc6224f2f0230188b6a23282"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "511645fc2466718063e437fc0b4a6e16"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "86df6b32a54ebd8c94cea101ad613d23"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e937cc54e0961f3c51c274e22db74bac"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c93ecc20199c191e80e3fd3308aa6d50"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7eaa87f46810adfec9f736274c1a6e81"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "be81c1917059357e1a3f19f3f410e929"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "f83b28d5a5a05f0f41f859bbfbce7d3f"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "9bdbfdf5ab4e7e212c7e3333e1732579"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "62e42e6a3200bfe069242b0b3ee2473a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1583b5b919cb876bf2e6e9d559c4f854"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b2a747c4c95906b2f8acf563e9d98b2f"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "23686b356aa7be529c57ea878c3a883b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "233d57e349c7738b307df7168e98e9ad"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4406fa6fdf2d0c30b913ebc5bbefcd98"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "205a4144d31908894da8cea316b219a2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "0314c580561a2b80ccb01c52a5c343da"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "fecf8c97b69a11865503f6ed4d1485f1"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "23cb171cfb768bf0fcb077b27346ba1f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2c85bf33e04de46097a4e8603aa379e3"
  },
  {
    "url": "tag/github/index.html",
    "revision": "beeeb713ac5e3eb5b2df32060a4e4d75"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d8d2b460a44db68ded6fe7ee033ac1ec"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8dc5ddc482b8b157167546c66c172d71"
  },
  {
    "url": "tag/index.html",
    "revision": "aaa9bf327b6670a3c82a5c7455af6bd4"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e8678c94d30d710f9bfd19f14d4ca550"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "2a50eb71661ebe2182436819b01c46af"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "36ed8ca56598f7d92046f8a3b8d1a3d1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "7b5ae80701754f340fccb676c2e451fe"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "eabd97eb9e5cb2ae7a04df578b169b77"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "14b8fdcf1c2fc01cafe11f5bf00538fd"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "1c5a8a7a22ccdb375764a5d36f3763c5"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "6ebb607d75b31e685c435b57b971c827"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "47049b37353d422931ec1d09f924056a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "0048b2e50168d1f9e10bd6ad9a6cb88b"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1642227c067151a806ca1925a0f589ee"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "e4e99a01180f97be158c2344096f8719"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fa763e921923272aa851124d558a0b7d"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "727671a92b9f2588675eb4bab947b225"
  },
  {
    "url": "tag/read/index.html",
    "revision": "2a44f1324015833909b60cf55db93765"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "fad64c35b4d8bc3051e8f0be25a8972a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "2a9e2b13cbc250e6e97c995a9c06203a"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "691e540532a668416d517019a526fe79"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "7f79dcef7b3a1023a68abbd2b4579b5e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "55c0a830a7ce04c722d8ba9e686b032b"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "90819cc5b245678f5656f16cc6511bf2"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "88e8635d283c1cf08156efc69cbf9471"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "b2fb87351b1bc9793f7c1b7da01608fe"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "773eb090adbc8f6026d0a275ba61fd89"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "d9047afa0f0f5ca60119d357c6baaa80"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c600b14e517726f01eaccf030239b084"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "1fc4d073591e329bc06716cf0a8e3541"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "4462f5b9a588fb6a37fabf280b13e36d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "af50c7e5d8b018d65b9bf7c9746319b0"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "8aae71c98995dd3d1ff6ba14c2bd7072"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "71c9e55b3efed26245f13336b1c4b94b"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "d9facad9ee073dc4f6b7383c9f1a5157"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "64b312138deba04364909889e7f22a1d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e17b1b1f14fb9a7e3acf5057ee9cb6b3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "150f5c1186711fcee5bf0d6565f9d545"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "d41188d5c6f9398f1c5cf1358823073e"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "752ba68df9a485ca8d9b805a8885dcfc"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "dbb1307af0b7b1ca1f6edcf230d87cab"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "14e16cb8692f82e079adef7f683ceb88"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "e93d3445da842ac644b93c6890e9208d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "2fd34cac94528ed6ee54b65ae61c6381"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "22447a20f8d6e157dcb8891afe6be8ee"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a46dfc90487d20e6ff56210952bdb24c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "72537dba778d0d9ee2fcee8fdd472ca8"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b732e99ac609a12a0b9f62875c031a54"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "88edbfcb0e951739980b042570512629"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "00622aff81e1a007e51d1420bbc515cc"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "6cf0391074cdbe921d2df1f8282c3a63"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f542c5b55368264552dbb93d4c3c1585"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1e97c40a91fa9e481d5a2a7717ad261e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c379ec409fecb3e7c72e197a1b591141"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cd580365d1414ad0bf386ff593bdfc04"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f2556675a52f0770d6bc1475a193d48f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bfa59a12773e10c066e236fafe22441d"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9cac88dc5a9fc4ba35f5bf28fb659c66"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "274a386f08f5693f018ffe2b1fb5a931"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "61057ad7c8b5d1046916d8b0e52bf16d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2f0256b4ee07f8cddf229bfd5ee35cdd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "49c27052f5f9612940cfca9dbef266ea"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "1f3ed74d96adb0a963755eb3b32f3105"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "0df1233200c24fae15290af6a2941976"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d8f4c50157b42defa037126ed2c681a5"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "8f178b87b9b7bce73b7b6cc3a591de6b"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "66d32af3605e479bc0c0195a52564c78"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "051f8e8079bccfa7ca763ce0fb1a8e90"
  },
  {
    "url": "timeline/index.html",
    "revision": "3380dff817ab7ae90d9d4d8266a5c627"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "930ba7a8e20b60d306e51365c5cbd2cf"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "d7592f9c6ea1a3e52971c2bb99a69d68"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "f162d776dce3b6bedcdc358aeb601e2c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8b195a960f6da14632d5b1193a3e4030"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "438368cb2ee990930325e966bbb3d2df"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "bcead095e915f1b059d4c123333bce68"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ab23935ae481f35dec69230eb09ba2ba"
  },
  {
    "url": "tools/note/index.html",
    "revision": "8c0bb6edef5b7e98dd1e356a6ac7a827"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "3f63b7727647d2fbdfedce181633bf66"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d069910d7a0e46aa6f663813f7801c73"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "57a76c1ecaf9b66eebf89b231b9c6337"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "86fc00b6577e89807a60437f55cb89e1"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "3ef0b1ba15260a53b79fff79479b5a39"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "050adb942a1fc6ffbf31698f34ed0c5f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "bc8caf4fce0cb0c8197467cf1d3ae762"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "2dd3c97bfe8aed513c7faed4fd122d8c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3d224fc7d0c6676948c3ae0c71132af5"
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
