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
    "revision": "7882c24c73b145aba853fd2ed2b8e328"
  },
  {
    "url": "about/app/index.html",
    "revision": "cc1965fb4f58881b422a0fcd8a43578b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e9c83aee14c37ec68f92ed2a43dab77d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "91c331a1286c0e061e9024ee268bde05"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "eb26c0e46625b865cadb5b1c30a15881"
  },
  {
    "url": "about/index/index.html",
    "revision": "72c48382a13397b00c01e2cff74124b6"
  },
  {
    "url": "ai/index.html",
    "revision": "9917e90980c18b341f61cf253a3df7cd"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7dfcb8eba2b57361d3a346c439cd5290"
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
    "url": "assets/js/101.48328d51.js",
    "revision": "16d0f2d0d03c40cac19eaba6b15d12df"
  },
  {
    "url": "assets/js/102.d654ed34.js",
    "revision": "b14a282d47a16d3ddfd8ca9a0deeeb4b"
  },
  {
    "url": "assets/js/103.9d5dd9ce.js",
    "revision": "bacc4339f6c9c2c4c31c74fc899fc85f"
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
    "url": "assets/js/106.5acbecf7.js",
    "revision": "fbca5cfc3625728e36df1962d23e6abd"
  },
  {
    "url": "assets/js/107.700f7027.js",
    "revision": "9f875138c51bcc7328162a6247e71562"
  },
  {
    "url": "assets/js/108.3b1e358c.js",
    "revision": "b25ea9fad8458409867bef31bb9381c3"
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
    "url": "assets/js/110.53413a4a.js",
    "revision": "4a796b7ea649046bb994ceb507a2fc09"
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
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
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
    "url": "assets/js/122.f61ca852.js",
    "revision": "5e6a2045794c54aa594d19ae2cd8d279"
  },
  {
    "url": "assets/js/123.298e5027.js",
    "revision": "f20030035b0e8349cad5a8cd52b1ca4e"
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
    "url": "assets/js/128.8e1fd120.js",
    "revision": "746bfaa1856302a6d9d0453aefeda66e"
  },
  {
    "url": "assets/js/129.466b56b7.js",
    "revision": "2f097520d06f007376f3aceecf567791"
  },
  {
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
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
    "url": "assets/js/139.8702a371.js",
    "revision": "0f5a5d5f435851c6435aaa6ff7df3502"
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
    "url": "assets/js/141.5817d7a8.js",
    "revision": "fede4f5a9e4d9a8a9e8646e3ecc2480f"
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
    "url": "assets/js/144.7ff12a31.js",
    "revision": "ee7b4397f44c7a2c92da9113252fff2e"
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
    "url": "assets/js/148.2fd97b83.js",
    "revision": "efb0c6146ba6fd6e57538421a4f8dcf0"
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
    "url": "assets/js/152.ace568b6.js",
    "revision": "e42dbec08052ed03da580ebda72ae282"
  },
  {
    "url": "assets/js/153.95fdc75c.js",
    "revision": "d5c232c39722b4e2c028bbbd32a52105"
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
    "url": "assets/js/159.3a3bb21f.js",
    "revision": "3d83a98a166748e68472836ee286df77"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.266381f4.js",
    "revision": "1ef334bbaf668c16b197a971fae42dce"
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
    "url": "assets/js/168.38bfdf50.js",
    "revision": "703f8f31943093280f73c83522ff930e"
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
    "url": "assets/js/172.33cb90cb.js",
    "revision": "b70bcf7992af8b750e995e402e3e6234"
  },
  {
    "url": "assets/js/173.f8f6f823.js",
    "revision": "57d28fd94e816a327af6ed7627ef95b9"
  },
  {
    "url": "assets/js/174.0b70e4e6.js",
    "revision": "b4383f2f721bec9bad6bb6c4420b4349"
  },
  {
    "url": "assets/js/175.eab7ac04.js",
    "revision": "76322f006f08754f9c59714fdf665a43"
  },
  {
    "url": "assets/js/176.c23b2408.js",
    "revision": "eda5e8ee40df7f8f9526a9ff33c50381"
  },
  {
    "url": "assets/js/177.f1d68cd8.js",
    "revision": "c9f86f653fde6984761c527bba20a219"
  },
  {
    "url": "assets/js/178.45939b0a.js",
    "revision": "d10ff523fd2da8d5eb529529e365e801"
  },
  {
    "url": "assets/js/179.a8e710b6.js",
    "revision": "5de61e2bad922b9ab7e7d570649414a8"
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
    "url": "assets/js/183.6a4490d7.js",
    "revision": "c5215f175c83b1865860439c3eea7ca4"
  },
  {
    "url": "assets/js/184.2b47d560.js",
    "revision": "9b5385d8a4ee3b402700a5d8ebfc369c"
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
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
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
    "url": "assets/js/197.4c5b3565.js",
    "revision": "d73e8c7f3e3229cbc20c95f3053920a7"
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
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
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
    "url": "assets/js/204.cb43e59b.js",
    "revision": "a338e45b0a810afeef344df64e490136"
  },
  {
    "url": "assets/js/205.533c67c4.js",
    "revision": "4615d526794fff799a7257b1c5e90628"
  },
  {
    "url": "assets/js/206.a3417e24.js",
    "revision": "cded45ec7b5c14d78175201880afaa40"
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
    "url": "assets/js/209.bbbc9778.js",
    "revision": "f1db6fdd71dfe93329611171b92cdd62"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.6b22d84b.js",
    "revision": "222f87e2c3646052c5313ceb949244e5"
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
    "url": "assets/js/217.ea6a433d.js",
    "revision": "f1dc3381e7e759a4c8cd038b33cbb65d"
  },
  {
    "url": "assets/js/218.4c211fe5.js",
    "revision": "ec4072f31c27a627c4426733c0ea72b7"
  },
  {
    "url": "assets/js/219.d876ea67.js",
    "revision": "b78037c394a6db1845301a34fd840a8b"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.db65ea23.js",
    "revision": "2a26f1515b8b2b010d272a3c36f58a55"
  },
  {
    "url": "assets/js/221.aa6db741.js",
    "revision": "75b09579439fbd5021951f5423b88dc3"
  },
  {
    "url": "assets/js/222.806da2db.js",
    "revision": "1241f1e40c0ca8a7856f9b53b764075a"
  },
  {
    "url": "assets/js/223.85f5f4f4.js",
    "revision": "64b6e787c17d505a479153de92f91283"
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
    "url": "assets/js/228.3af3ffb8.js",
    "revision": "cea956f3daa9636c22824f6ee5ac6edf"
  },
  {
    "url": "assets/js/229.9fbe09c9.js",
    "revision": "905813ebb377a52823496f93f3fb264f"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
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
    "url": "assets/js/232.fca4e94a.js",
    "revision": "b61a45642b105e9e5f80e660be5b79d5"
  },
  {
    "url": "assets/js/233.bb7f1712.js",
    "revision": "5d8453b5746e2d52d65bc3a5d02b8be3"
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
    "url": "assets/js/236.db668de7.js",
    "revision": "77e9967308b6e6c2f8cc9f1af4f37d04"
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
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
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
    "url": "assets/js/243.f13a9d93.js",
    "revision": "4257ed55b2568a55728bccf52d32cffc"
  },
  {
    "url": "assets/js/244.0d73dde8.js",
    "revision": "1ce25795f3b9d2e4eed7be9523f44d36"
  },
  {
    "url": "assets/js/245.97a8b522.js",
    "revision": "779bc5df674de866f58c47012928c12c"
  },
  {
    "url": "assets/js/246.d021f542.js",
    "revision": "6f2a65016845292cd76759d57593a366"
  },
  {
    "url": "assets/js/247.4255e14c.js",
    "revision": "f8cd1b691c26adef10bba53eac986621"
  },
  {
    "url": "assets/js/248.543f4359.js",
    "revision": "8399c1406b92cfab7c49d7ecf0879610"
  },
  {
    "url": "assets/js/249.36ddf029.js",
    "revision": "91efef70b0fa57dd8b9c12a8b076152f"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.9ef1ddf6.js",
    "revision": "1d14f309ad65d2fb3d8847cf2d4c20b4"
  },
  {
    "url": "assets/js/251.5cf28593.js",
    "revision": "4290cd8f2386fda800f4395b2423258b"
  },
  {
    "url": "assets/js/252.111157f6.js",
    "revision": "1cbe12b6f8ab336361421bdd67c36dce"
  },
  {
    "url": "assets/js/253.86e3bf0f.js",
    "revision": "48b3d362203771cf053dae4bef92301d"
  },
  {
    "url": "assets/js/254.61d12779.js",
    "revision": "bbec9e5b675721b4a38df4af29faa338"
  },
  {
    "url": "assets/js/255.e19740bb.js",
    "revision": "3ae9a0fd01fe7d0f0d8e09510fdff01e"
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
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
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
    "url": "assets/js/263.3b6ac930.js",
    "revision": "ddab3fdae003e9dca112facdb385b627"
  },
  {
    "url": "assets/js/264.29dbb116.js",
    "revision": "2d01e4306683870f59f7497d6785dea8"
  },
  {
    "url": "assets/js/265.48316d13.js",
    "revision": "1f8d73c789e8c4ce440499aed6a12a53"
  },
  {
    "url": "assets/js/266.93425928.js",
    "revision": "fcc6e9492b823302d88988493606e85e"
  },
  {
    "url": "assets/js/267.ed308f05.js",
    "revision": "1843f0f64d0d23b195f0630175937333"
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
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
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
    "url": "assets/js/272.513eef72.js",
    "revision": "9070a4dc8d17c54edc264d35228411e0"
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
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/29.3f14bee9.js",
    "revision": "6eae4a8b0fa2fb5bbc00e054a913e487"
  },
  {
    "url": "assets/js/30.f64b4acb.js",
    "revision": "86aacfb8404d5fc293118c6dc45e7b8d"
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
    "url": "assets/js/34.d2a3d2ff.js",
    "revision": "c843e16b1f81cb784bd8b3847552a791"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.d661a1d4.js",
    "revision": "d7ece8ac2220876dfe52b31c085e85f1"
  },
  {
    "url": "assets/js/37.511e77d4.js",
    "revision": "a601936a06d8493a20e186baf495f1bf"
  },
  {
    "url": "assets/js/38.e7010906.js",
    "revision": "bf9dd04b928f9c64b4889a78f7f68a62"
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
    "url": "assets/js/40.e1b36b0b.js",
    "revision": "5812f7b7ce165af8c24ebe8f28149ee7"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.d6335a0e.js",
    "revision": "c2e201315dc01d9bb899aa40147b4521"
  },
  {
    "url": "assets/js/43.94a96c73.js",
    "revision": "6a90367bc85cb8affca1fa22db7cf092"
  },
  {
    "url": "assets/js/44.496df8f6.js",
    "revision": "ba89d8cf74746c40076c7105921375d3"
  },
  {
    "url": "assets/js/45.f5372cf5.js",
    "revision": "a89c6b2671d6c3a7c5b7a2e1df7d4fe8"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.8808044c.js",
    "revision": "83d7b49dacb0bf461d4a69f4eeb8daaf"
  },
  {
    "url": "assets/js/48.a2e61fc0.js",
    "revision": "898a49ca734b3a33ee9f1112e4681b48"
  },
  {
    "url": "assets/js/49.436504e0.js",
    "revision": "180aaa90e54cb8c1a29bd2d98b935d27"
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
    "url": "assets/js/51.17b67b59.js",
    "revision": "1f0104054fad0dda412d6b734d29977f"
  },
  {
    "url": "assets/js/52.fb1f4527.js",
    "revision": "8d1fd57f884bb0bd23a99ccce966e29d"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.eb6298eb.js",
    "revision": "02b5ba8409d90c15f01d836d19d341a8"
  },
  {
    "url": "assets/js/55.84ff7f52.js",
    "revision": "0181fbc302f6955e9b9bf75ec6cd71ef"
  },
  {
    "url": "assets/js/56.1b768cf3.js",
    "revision": "52cc19ee33a0d18ba1b66f410cf68d16"
  },
  {
    "url": "assets/js/57.5f186de4.js",
    "revision": "bdf4f390520cf24e33a806981f7450c1"
  },
  {
    "url": "assets/js/58.4c7c9ef8.js",
    "revision": "671866894ddb89a648eefd55ca0417be"
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
    "url": "assets/js/64.92ca7de0.js",
    "revision": "894ed0738cb6fe50ad6dec4fb944f071"
  },
  {
    "url": "assets/js/65.4b9e3601.js",
    "revision": "86dc7d471d478bf3116f759663b5da60"
  },
  {
    "url": "assets/js/66.34826071.js",
    "revision": "63c91dfb28ddf695b31358e445f69c56"
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
    "url": "assets/js/82.bb6d9443.js",
    "revision": "d602b342653b4c549eada629cc698c88"
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
    "url": "assets/js/85.275ce1ec.js",
    "revision": "0920b9d182472161cdd292ade591e8e8"
  },
  {
    "url": "assets/js/86.a41f8c65.js",
    "revision": "a25da6635d56577aba0c9c3e06b0e856"
  },
  {
    "url": "assets/js/87.1a80099d.js",
    "revision": "632f74086b11313369b8ed84029e78d0"
  },
  {
    "url": "assets/js/88.adc30bfb.js",
    "revision": "2863a0424fc3e3ab101e900d4ffc382f"
  },
  {
    "url": "assets/js/89.10ff9007.js",
    "revision": "dc37dfe83cb6a3591f539afb969bd944"
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
    "url": "assets/js/94.34a863f1.js",
    "revision": "6fda567516c7935f6943c8ca08e9bdee"
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
    "url": "assets/js/app.e5d68b64.js",
    "revision": "82880a08af5e0e6b77017ad5f68cc66b"
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
    "revision": "d86ce32464144a9f94c149a23cb5b1b7"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f8797935d09bd94ccf1256bd43eb7986"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "84692079d90f25230ad348baf322ba3b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "9d6b41fcab69b50e5835e65fd6c32518"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "d221131c898fd2039660394a5ad3754b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2fe8114ad5ea11e7da4a2fc9667dabd1"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a1f7c65f6e67811023dfb278217e1bd7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f56270a3f21fb36a8b82c609a838f2c3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3cfebdd2fd1e41edf9107acc582e41e1"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "bd05fd6d1ba71207545e1d50ac020525"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "210cf00edfb0c401d93bf91d565e79fb"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "eb2ef1062f604b559bb1c802380bb771"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "eaa765c36bf48ab9453a3d120b2147d7"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "2d5f6d6e10a1df817ef2d216353a6922"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "6d087d7766eac1468a74826287026217"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "03313283d4cfcd8079ef9bada082fd74"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "dcd554e73452898ab8d4f5e86cd4a0ba"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "70bfb142b0d42213b2e1ea4eec554c3e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "4bf389d20d8dd4d924966db8536dfd81"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "67a674309988b8ada2452dd44d835f7c"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4c230e1c6295867f47b27b552121bb1f"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "5763a7fb9aa80857deda5f245d600d1e"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "840b03efc47e5b06c05f8c03944dd7b3"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "ddac6a9102eccc7b2f3f3713692b8025"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "c609eeea940cd88c24611c7f7be41c14"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "8d7af517b759ab78ee1da63adb8a7685"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "336645cb0fb7df579b7fcc28a43e461c"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "15d85540de72a2327d1ce65ab9cb706d"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b27da79e7eadbd9ce33b8121445d262f"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "0bdad2592e93585a6ed74ad538ab0bcd"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "1c479e1896e48af462491f88adb9f7e0"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "b984039a19d6e0d1c73df8653fa63a54"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "fa3a0f28eae63f40b4f359da962f277c"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "21766b5837bba693edc1db09f67fdbfa"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "301c8afbaafb5a807a2aea6c78a311cb"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "684975b27a5e5dbb55490daf91335e88"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "319c8ef59beecfea5e98c1950050bb9a"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "9419ae66760278778ab4f462f91a76a0"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1bead6011a1dc2ede72c978ae8eedae2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2b7d7d1cb8ddcde675f9bd5c3c7c9b34"
  },
  {
    "url": "book/index.html",
    "revision": "f6df730714791363ea3c9660ddb66be2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "27fd3fb880687476cc0bd953b69a6876"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "6ef3b364b0806d36702c29ad5fa794eb"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "936dd0344a308a1a8f6974398bcf7470"
  },
  {
    "url": "c/audio/index.html",
    "revision": "1c7c45e3cc007da56372ede30a2f6c2b"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "fbb10d47625884d69c1592e6d98d6b59"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "4a305a5097484965c207e94fa16edbed"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "2acb97aff1daca2f9dbf825c25fa864f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ddf2ee181b0a125576a46f00e7b2a8f9"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "78e145232ee4fbc29d213b7da8066bbf"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "726dfbb15c652c8518d55aa67e07733f"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "bf027f4373fc6f5f02502d7291241bf8"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "eda841ce954a16e1cc31f22869e29ab4"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "e2ef66c4e996b221338850e3ba9b2ccd"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "0670e4dc093755f90ccf389ac7ae537c"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "1139b2e0902166e20fc52cd8c918c8ee"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "5d8b6e5c26450aa710e6520bbf8c6ea9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a40c59e76c6cfa8cf31fdfe1b109c6a7"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "87320621d92d86ee4d38623f4c082810"
  },
  {
    "url": "c/program/index.html",
    "revision": "7deb3acbd69f5b89e8801a04e4aa49b4"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "dd79e256c00c8a57ddf6e9d348725a18"
  },
  {
    "url": "categories/index.html",
    "revision": "211e267710b3c1ef54821a7b78b26d4f"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "2aff577950fa03fa37fb5dbb221cd3a3"
  },
  {
    "url": "figma/index.html",
    "revision": "b7499ce4e94701784376fdc4e79de007"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "fd3c93e27af286b02c7753aa420fa054"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "822f78f4b97588d2bb7a3c6d43505015"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "f07a051b206a3cef74445a1875d96889"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "d73a89c86aba146d1d95b638e62b6894"
  },
  {
    "url": "flutter/index.html",
    "revision": "ed5040813dc066039054a1964dbbedc5"
  },
  {
    "url": "flutter/point.html",
    "revision": "3fe2514fd39b8928f836fc7f5c0b2a30"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "16872790f9a0f869c8fb9e2dcfd291a3"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "cbee94ffe386d8030683a1168bd9d713"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6c5d72f57d95a36dc82bb282e8c45ca6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "21cbe6b5edd2534b19fd439e061e845c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "75e06d493855b23e1ef5012e9652caca"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b61b96637500622fe86e62671bf9ebc3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d06db8780dde08460dc1ff2abe47ed07"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "31e56e8b5b0b87fa84ea84371ce812bf"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f8364cf35e77433de7e3a247e73f7a9a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1f88720040b340bac1fc2d9fb6c57917"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2997a2be409dbb218e4c103ed30a7424"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "fcca0b33305a2f48f121a8f1114da363"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "36b584eaf00e350c4611229ed06eafc2"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "342c3b8d491c6ab0d08a651401ce5a73"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "be96be8d5e40d821c5316bfc9c6e2737"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "fdbe443794927f5e169235e2ac6beb41"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4bacafd38157503ecbb6446bfdc01dab"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "10e024e53ad00c4a54b215ddced1d059"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "41da77de3eee1fd473d29632a1d837ff"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "4c6b1292dd59ef3823d5093a36d9d546"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "3aa0d74a59806186cf02fc74fca7f845"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "6c8f9a0f0ef9d6b51172af3733feb73a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "604c7e8843ad5d5738311737250c5f1e"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f90a54d143d8fb809f8b6e6962cc3185"
  },
  {
    "url": "haskell/index.html",
    "revision": "0caaa9f36de5fd1cfd4aa319055ac2ee"
  },
  {
    "url": "index.html",
    "revision": "36224c1b74cf1543b1cdcf13797b2963"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "3096ed2d69c5c6f184b4690568c6307a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "d619f2be5eefbadb60dbd09eec17a683"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "494cfc5d7553c7abef27280e3ab6ac31"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "198071f387e34d1bb65155a36519aa29"
  },
  {
    "url": "python/index.html",
    "revision": "e1b0f0e8e108361359fb0468edc12752"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "fed1e1d39ed41ef566d10505e9c5bcbb"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "a6617f5328ec94505af5f1425e1348ce"
  },
  {
    "url": "python/python-file.html",
    "revision": "9ccfbab2d39bb770d9fb4188907aa1e3"
  },
  {
    "url": "python/python-function.html",
    "revision": "3f16177ed365a7856340c4c0e53be740"
  },
  {
    "url": "python/python-generator.html",
    "revision": "d3c2c369e4578c3db8006efeebf77667"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "0dcb807257026e612ba123e0013c1752"
  },
  {
    "url": "python/python-module.html",
    "revision": "91ad2567ce60f7b5690e39dda0515e94"
  },
  {
    "url": "python/python-string.html",
    "revision": "b3210ad9831313a5d2f612d4b4af1b6f"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "87c18725cf48f89608cc857d78c331a7"
  },
  {
    "url": "read/index.html",
    "revision": "fa27e010b39a4e3858766b562441d8ec"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c993e0a77904895f3420ba71552fd111"
  },
  {
    "url": "swift/better/available.html",
    "revision": "72ed4fd36f9dd364b2860ee9b81d21eb"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "f4a19409b0bf45817cb907d2e6b2c480"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "16dc76255a09facfa832d34e7439bdd0"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "25c648d58bb0c583be75abda1f340a72"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c427c16bf742ea7e6045f78ee1a84979"
  },
  {
    "url": "swift/better/index.html",
    "revision": "296ff0e64237eb1ac5aa6d4959b950f9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "89a05d7d1c33529b5ec60999b1903670"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2216b966461f309b02089ce2fb6640a3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "eac99d39486719a819f6f84a7528c777"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8148674e504f97a1f3a95ca7db4adb5b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "84fd184639bef101d4f3d7da6baf6655"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "48db62b417d49d36f92cfbb435a2ced2"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b0be08518932ee291d95c984868ca8a7"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "e555a00208c27210bda29a7adc57c9a1"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b6a86cda94d7bec288ed51101699b49e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c9d2cc3a428eb03e4c95b0b5c805ba97"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "89b5cc0920bb348fa374340a83e8a364"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6f5b08c2d0e1c0c88a608814f07368a1"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "3384ecb5f104d8d27e7d1d3abd3bf6e4"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "42017b35e24bb1f36f66f284ac62c851"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "a90eaf90f3d2882bf5fb83339eb33e86"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "15b9fd0a93c4b5de489caf0f6d9dfd8d"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "c77f9d46ce84d40da3d3bc9111848fd3"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "9804fed8524ffd4e5a09daefc3919161"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "951b328d09b04b5e345a3478a33c862b"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "d0170132d208cbcda1bc88e40032f43a"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "5f9b5f81cd9d8f069d833c31c62e581c"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "8c61510af07a56929536aca9d2967275"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "2b7fbbdb4001c0d3a0162eb19cd6d136"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "b62e8bbdc0c85803fb8011873d009b1d"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "b2cba468f42cab72142adb1d4bb376bd"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "f10a4bd20ad807dff9ca8e8cbee5ec5e"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "1195f0a888fdcbdb590e4ad2b1e7fddc"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "afa51af1cb15dc866d85e9a884215c0c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "5e45d7e5075c9f39de35f6920cd63682"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "60d781826755bc597573f3e11e24a8f0"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "7393cecfdeb548983969b3b1dacad39d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "5f19030ae65707acfc7fa0039a984e46"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "139dca8d6be753a83022829198036e1e"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "ccc4947a282a05341bc8f0d1d2afc268"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "76395e2cdcb3aa76a853a2ae07faaa60"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "aa84934bb5ed011cfa610d6a14335eb8"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "67fc73c1c24a30122e251d8067aaa959"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "646958c61c1979b4f188bb967c69cfee"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "156a3767df0d01cd8a0bf349162438ad"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "02981e849e85d57ac005c39b0ce59875"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "48748e885c2041fb9953b9f05f1ed2e6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "bee462be08c26781ecb301e0547f373a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "0e2c5be694a0f9f96dd089582aa80716"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "ea72da9783f38d4921556cab2c89c08d"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "61e1798b18bf7be94b7cb7fd0e82063a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "7db5ac50a7af82f2b320bf694182cdde"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "89703e6f22d963b61173c3d15fdf6606"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "25a377d52fbfd6be91eb9ed18de84c54"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "98affa1f88c9eb3ef771a2072b76e967"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9a85674ca5a5f23472acbc8e6d98a7f0"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "bee8bc90d2d2531766f885013ce9df15"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "87b4aa8d2297e841a275cced408197f5"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b80fd77437d1046d03705654c5d2deec"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "75f2a35bd1c64527cfb026b50bcdac0f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "5b738565fe0fa60bd27a70fb7f31e792"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "1669a3ed78312eeed9902ff5827fa41d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b778a83935db6e8a8463113f41036741"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4aa9dee0d6153786c1f45cd3fb60450d"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "5b0c49ddde0884703abb01ee53f0e98c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5b10293d6962caba5096efe7069f9db6"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "52c1f7ed57f3929f3518d5689f9c090c"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "b5c250ca30a3e6e06bb8c866e0be6a6a"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "95db5e987743c1fa683fadd7c5336d1f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "432f60eb885c3bc3da114c7405d4ca89"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4026d1b4fa97f204fc788afa68d06195"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "bc986abb0bb4bc77a33e36dfa7f97aa8"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f94354db52841c21be4382235160a217"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "20a764104f582630837dbfb8ca3b1502"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "d17acbbb9d350b37e9eae5abf2b504e3"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "4af5124e8fdc1eaee69a5e53255ae147"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "c50d311365a040c96744c032a054e1ac"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "fae3947d1aa18a569bf7f37beabf2328"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "fa578c0651fbae4ec8731ec5e58ff919"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e2a9499d6ecd7a34d465554916f2dcca"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "195972170603752f0eb89d17ea3c7b54"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b59d2d68ca1f45794993f8c9db40ebaa"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "a71a79af40378c3c89b21fa5af675647"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "b1acefd191c34792dd991afce1dcac65"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ef5978a65ab5fa56113d95835d6354ba"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d1e533377257dcfe8a1cc53c5dadc656"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "94d2877a62cff2a7cbe4230d56ab1cf7"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d5ea925158cad9fb037622a771e65e4c"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9e5debb928550cc0b692491423d5c2e9"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "ba3460df0ea9c5d9b2d55cdfb146c5e6"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6cadbae0bbe01149e5cafb139516be1f"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "92a9602b8dd94a07f183fc6d9ffb6c14"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "1b4add3acd529e6e9642c87d7278ba34"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "754c68adaaf6a9fad3f209e7c240f234"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5acf148b76fba83ba339061d8f539d45"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "470dccc1cf9c716ddbea26bdeed6117d"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "7d910d893a4b33f61524d14043f6c5f6"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f9b54fe0baea287ef28b72f005bbef50"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6a2899f31a05523b6e8c508b80d04546"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "29767f652a7c21ca461360c44fa916e9"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "cbd15a2b14809726af636044a7c8d5b7"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d02ec106728f19991f64c1c0914ed941"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "84c40fccd41d71191459bfb21d6a68f9"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "7e7571036041c0b7cbb4f373f789861a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b7ceb11f5a2311b7c768ea4928d386fb"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "24b195fa4b3c5abf5fc7342c231abf7d"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "da0d4f19816cae9efad1d587bcf5a3cd"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "1bb4ae260e5e243fd0d3c0d362354cd5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e6fe70ece76862a9f721fb6da858d081"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "050d89a279b8b7cea5141017362f6da2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2a07c99998ea7f257e219244cba1f944"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4e84e55ed3fb7fa9a306b3dce33a7d96"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "66fc1d83b456e1eb247a644c002766d5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "02e8c50589e9e7d32a60f6879aaaf0fd"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "6878cb3c4457f6f8da6f8c25f5477e56"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "27654380cfa0238b3ac877b5017d75c5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "63f6b35fb4a7b9c5b02c087b3f2fc008"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "377c8127e37fbca825033ff8e61730ab"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "c8774cb61ce2f4392089aa5c8aa61677"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bf89b99fd467a7161e93d8e3b8b45481"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9f811d1c58dd86fb17b215c08e51df9a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "75d816cf6cb73fa91c944161660ce14d"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f4913aec5c21c07864dac970a874ac1b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "2411b599e6f47dc136bbddedda175765"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "41478c29461a35a325b9d91df66fc380"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f0f13e4737156dfc16b598ae30785a2c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "63a55bcba316627f12dc25c64105f65d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "fcd4efc6d246ef6c66c1690a6b9f8e2d"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "6b962d3eaeaf0a470d55f0bc2f303ea8"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "058ecdc758d3368941a1ef2d3ea0f6cb"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "acfc6e90eb8204ca78f618616419bc2c"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "0d9139a6f2e213630a91ee00a03d0978"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8703b1e59f7175d66814d2a75f0c30f2"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "ac23bff7a77db0147be1eb496e7b3d4d"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ce805933eb1b5027f5063551e63fbc0a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "73e01f3665f7c3663a5bd1855ef098e3"
  },
  {
    "url": "tag/github/index.html",
    "revision": "59f0e897673156135b9ea6ca043c1a62"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7f29080eb259de93bbbd3a11546b85a3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3556bc736a2027fe945e8a729f3346f1"
  },
  {
    "url": "tag/index.html",
    "revision": "d93ce73849e9027d85fac5259f478245"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "7c6b81f337bececc40d53ac02ba44a89"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "cfd50d2510aa2c194f67ab04d5c4d256"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f42dae34e3c03a95f2e7739c004ef8af"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3b4b91e7f50e73ad4369d4367d06b312"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ad5f973943501cf604e043b17db18091"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "74c1facb76da76e706eba45ceab9ee9e"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "9a0c736c7a3f3437412f9f56e61b46cd"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "b5563b4896d6e0dc528752a9ea9b14b1"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "308dfd020dc46c8f648a528cafdb96cb"
  },
  {
    "url": "tag/json/index.html",
    "revision": "958325a2e5fdd23ef82dc234b0047146"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "23b9c7425cb8bd4b4943ddf162c30ef2"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "34f8661b29bfd3861cb9cd0f7288df54"
  },
  {
    "url": "tag/python/index.html",
    "revision": "237215a9c15c1c223aceeb5d145a2f77"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "aaf5f9562e07c0dbec515593133594eb"
  },
  {
    "url": "tag/read/index.html",
    "revision": "a2eef3174d5f496d5c7c938cc351d83b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "546305e395bd0e20b0914b120713cae0"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c1a4e6e73e10b70e5937ba8eae04fafe"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "f201af1922b908d64786d74d74763af2"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "6b9618bafc4adc125f4d53247b4fa54a"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "e07f34d555aaedaf7ce3d5a324a16586"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "bac3f861307ded637fc90a25f2d3633d"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "792b5fb6c47b289cbc0578151e82ae0c"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "2a130e2a69a46152eff51ba2661dabc9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8b61706ef3b51cc0d099277355d71432"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "605c587a10e6fc7e094c2a3d096828b6"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "99f430f65694531b4be36b96134ef80e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "9f0f3b194c712832d167c9fb3cc02da9"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "368ec1161cf558b418d619cfaa218c05"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "37c62f84ca1863de535b79303f5fb1d6"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "7733188857d24076daa9903614351e4c"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8afaa89f9fd4f92e2658cc24d04a8ae7"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "54ae8176ab3fcf5685c6f923f92673b0"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "465a922d5d4a3b74ddf4310b4bc1c84c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1a490c392fa54997202932e9ba2c6e7a"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8cbfbcfefcf5e358a082c1eff6f75172"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "51976394f4f70847312a9a6e5c0ed10b"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "12625d7335181d8b0edd0defc77e65c8"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1b18f8d75497ca56bbe96d6aa02df58f"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "48df69cf69f5552228bcd7652911cbc5"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "01d8cb4c748c4ee1deb4aa198f1f4b9c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "eff5a5ac665c949bc8872be986257311"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d1e8041c909d1653534c0741f3f60bdc"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "dad27c98a94c651b264f64c8a3d7c87a"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "836233318cb964aeb908c1ffe22188f9"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1be17878b9ee0055f3ba6ee5707ed4dd"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b5a53304936a9a0718cca8270b204ea9"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "5b1aa40cba06d9c05ebff6478f133a11"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "a40aefc4e4e1661b70381640bd4d768c"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "017750b3e5daece61ea4546d8ec197e0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "804452b971acd550a64aa72215b5a9dc"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c34aa09168da9c9bda8923701533b1aa"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0fc39d3bc87f91c07018116e30701309"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "1638447edea3f55ac7d4ba488e0d4f3d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4fa475f4f1efee1e4af5b5d3a56146f7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "829ea2c21960d0cb00684de0448cb41d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "e98bcfa0fe3cc6da2b73eef81ad1acb8"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "3836e393bf52967f1244cdef5bbcf58f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6384d427dc8d227aef0d7e406e8c03be"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "01b7a5f3a2150cedfadedaca0ce0615c"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "1128766b47472d3488a569118caea606"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2e7c35b825032e63054db9ec6c282080"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "755b1c6bc1124c43b6dfaa1651380bf8"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "245652e8ac0113fbf0cce04c3e877857"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "970dd922d591a60aeba63d8ab12fd8ef"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "a75cce8b1d7a409530e86ddc0800fe7e"
  },
  {
    "url": "timeline/index.html",
    "revision": "3846d7674916cf4b8d12761fcbafbd22"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d1697f741763663baa9968264210da79"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "02d47bd74dfca8c29ef7b16145786981"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "163dcc0d72304885568a3317c4ffec09"
  },
  {
    "url": "tools/git/index.html",
    "revision": "53cd8bdabe7ed1dea0ee22ea1d65a3f6"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d7a9a7585b98827012a1acb39550f770"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a8f61fc35707cee1078a0c17bd71a8e7"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0f92c227d9916b4fec2645997c678cde"
  },
  {
    "url": "tools/note/index.html",
    "revision": "612c1f90a0c0708c95f9fa1a94bc7bbb"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "133d9119baf24a1d6bd645c1aca36b07"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "217295d9da3a66f8e27fb3b6eae9da6e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "5e78dab9ec9e5654340a7aca38205b66"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e4ef97dd91eb98a973a3a2c0441808c4"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "4db25305f0a32e2929c42ae53af9b5e1"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "088a3d215f2d18d53a387906720f2409"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5368d78cdf5f69fc771ff8d44457c632"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "712d775e7242ca90c02e580ce9cc17e3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "78e973606238f51d0475bae46c1536cf"
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
