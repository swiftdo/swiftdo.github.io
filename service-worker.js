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
    "revision": "882660b057b33871ee9cf7bea0661c34"
  },
  {
    "url": "about/app/index.html",
    "revision": "befac74ef0293f38d37dd813a38a82ee"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1bc93a9d2f27afab1cb147a0602a551c"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "41ef6970edefa1232f8ee39c067dc900"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "5ce833a62f821ada74405876b658237b"
  },
  {
    "url": "about/index/index.html",
    "revision": "33826b2dabdc3c2db9a54db644d6d49a"
  },
  {
    "url": "ai/index.html",
    "revision": "4ec4e7f7b71144a8f42dea9964b0e81c"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "78aedcaf01bcd9c215259f20ec1952fc"
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
    "url": "assets/js/10.36990aa5.js",
    "revision": "c2ccb74107a0f86b6e171db9ce54700e"
  },
  {
    "url": "assets/js/100.d1f95b4a.js",
    "revision": "5af2f8b81f244f7b84c24a7ecea9dd77"
  },
  {
    "url": "assets/js/101.3ffa42a7.js",
    "revision": "5d1df566ea154a27243290686988f961"
  },
  {
    "url": "assets/js/102.7ec5a46c.js",
    "revision": "7963989e29171673aeb59fd1eb5450b6"
  },
  {
    "url": "assets/js/103.1307acc5.js",
    "revision": "3e9c245b3e89165e02faca52373ab4ca"
  },
  {
    "url": "assets/js/104.50b87535.js",
    "revision": "072c790e5c8e927644100d005c426ad9"
  },
  {
    "url": "assets/js/105.5c515075.js",
    "revision": "32009be5f11807ea2b47de709a7adf72"
  },
  {
    "url": "assets/js/106.ac6f8121.js",
    "revision": "ffd371aa9dc4b56e432b78ddb0eddf79"
  },
  {
    "url": "assets/js/107.aa3ba668.js",
    "revision": "bc02f9f1063da7fb44b1b53090b2f0c0"
  },
  {
    "url": "assets/js/108.09ed29e9.js",
    "revision": "c598460239886d8698d8335a20030435"
  },
  {
    "url": "assets/js/109.acf67c54.js",
    "revision": "cb12c9e996ec6a2bcb0d285afd10d7b4"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.323327c8.js",
    "revision": "de63b7c70d6c3856297fb4390f0df84c"
  },
  {
    "url": "assets/js/111.749ca7fa.js",
    "revision": "1e2bef341c0c029da2a3f338cf049b8f"
  },
  {
    "url": "assets/js/112.d56094a4.js",
    "revision": "365bd951e5f8969e536c5f46d7cb467d"
  },
  {
    "url": "assets/js/113.837b583c.js",
    "revision": "c5e87d6c9beb7e080a41c7797af25ccc"
  },
  {
    "url": "assets/js/114.a7d33ac9.js",
    "revision": "dd9642023437c421b827c4f8c6f6f363"
  },
  {
    "url": "assets/js/115.1eab824f.js",
    "revision": "1c300812248c5e433f2c5310ea4a745b"
  },
  {
    "url": "assets/js/116.3467615b.js",
    "revision": "bd1dcb2de0216a8bce0fc29f8093d1f3"
  },
  {
    "url": "assets/js/117.ba7e800b.js",
    "revision": "efd4cfc5610d72d229ed781644c165c0"
  },
  {
    "url": "assets/js/118.0c9c5bb8.js",
    "revision": "6bd4c7c545c23eb7a8ddb0abec7d0045"
  },
  {
    "url": "assets/js/119.6ec77962.js",
    "revision": "7c3cfa90dc868bb41dc0067881d2fa41"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.8697e372.js",
    "revision": "ceac37943d00050881079f5fe84c4a96"
  },
  {
    "url": "assets/js/121.0e37601d.js",
    "revision": "6bca8951441e274091716d3fadb1cb5d"
  },
  {
    "url": "assets/js/122.5cb0c3bb.js",
    "revision": "8179af628761bda046aec543dd4da7b7"
  },
  {
    "url": "assets/js/123.f6c69a0c.js",
    "revision": "75e3fb9cb6605586223d11dd00e018a5"
  },
  {
    "url": "assets/js/124.098946eb.js",
    "revision": "34317455eec09b5fdcdc55639d2c1da7"
  },
  {
    "url": "assets/js/125.4a782001.js",
    "revision": "91453319c0fe7295d46f1cc38dc4c650"
  },
  {
    "url": "assets/js/126.b23d7d9d.js",
    "revision": "358d15ca6ad0d25c66b3fb1ae3d474c9"
  },
  {
    "url": "assets/js/127.df7a4546.js",
    "revision": "f391a052cd15c246d5f70ad48125a9a3"
  },
  {
    "url": "assets/js/128.30f1f67f.js",
    "revision": "30b663e6608a61fab3188a8ae59d0b74"
  },
  {
    "url": "assets/js/129.0e1785f8.js",
    "revision": "d0ce4ee71e93cbe259830baef0187c03"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.6b321f87.js",
    "revision": "a937c34db35cc490bc380e8389924d7f"
  },
  {
    "url": "assets/js/131.ebe94a62.js",
    "revision": "a041816c48ba70ce044f6e22cddfd595"
  },
  {
    "url": "assets/js/132.b6cb6c8b.js",
    "revision": "48fd303ae3d72bfa98873ea9ac1eaa11"
  },
  {
    "url": "assets/js/133.92d41ff6.js",
    "revision": "bab0b29808cb3a79207725b3ba3cbded"
  },
  {
    "url": "assets/js/134.d77f65de.js",
    "revision": "63fd41fd9e74ae777d4f2fbcfca7409f"
  },
  {
    "url": "assets/js/135.cd96430f.js",
    "revision": "792fe01a0f2620c2214960a62144b413"
  },
  {
    "url": "assets/js/136.439232d1.js",
    "revision": "7c1645737fa68092ccde2f664c011c75"
  },
  {
    "url": "assets/js/137.7a01c980.js",
    "revision": "02c3d6ac20faf8084247e94e79edb844"
  },
  {
    "url": "assets/js/138.72455e86.js",
    "revision": "f8afd6f8a181b6c7014b3cd921e0d196"
  },
  {
    "url": "assets/js/139.5743187c.js",
    "revision": "a98d345d294fc2bc839827804a7da8fd"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.e44b6751.js",
    "revision": "e20e5902d86350ab7e48c938c4f2541c"
  },
  {
    "url": "assets/js/141.3d26742b.js",
    "revision": "7b9ec2ccc139bf8846cdc54bf27e6161"
  },
  {
    "url": "assets/js/142.1e9de466.js",
    "revision": "70783ffac9523a631360d94528327183"
  },
  {
    "url": "assets/js/143.84f21587.js",
    "revision": "f9f79ace01c23c68cce12b1aebfda757"
  },
  {
    "url": "assets/js/144.1ea611b6.js",
    "revision": "613d5818ec86ce6dd8b6fb87ef97fa26"
  },
  {
    "url": "assets/js/145.386123f4.js",
    "revision": "e6a5216d55b53143226c3a1283c23db3"
  },
  {
    "url": "assets/js/146.d3c74b46.js",
    "revision": "0084d7f9da6efbc0c3ee4b7446b2b1e7"
  },
  {
    "url": "assets/js/147.26c89dcf.js",
    "revision": "f33d17517f6ed0240ac110ac54922b80"
  },
  {
    "url": "assets/js/148.8a355541.js",
    "revision": "2739f75fa75ed27c587ccebd3c79d6f4"
  },
  {
    "url": "assets/js/149.b956c4ae.js",
    "revision": "5d8a5dca4584b0856ded0fab11d24b5d"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.6bbe2da2.js",
    "revision": "34694cdf1d811fe146834a7513707735"
  },
  {
    "url": "assets/js/151.d1634d48.js",
    "revision": "2708bb54afed9dad55edb23522e055b9"
  },
  {
    "url": "assets/js/152.ac95d323.js",
    "revision": "477eb335a1b61578108f75b8b6377074"
  },
  {
    "url": "assets/js/153.7a500bb6.js",
    "revision": "a2732fb8690695e8a03c0e09b3a4ef3c"
  },
  {
    "url": "assets/js/154.d9b26b93.js",
    "revision": "510e432d05013ee63a06e7fa5052c41c"
  },
  {
    "url": "assets/js/155.8161a647.js",
    "revision": "37b6e1538dec1321e0a3da4d4de0e0dd"
  },
  {
    "url": "assets/js/156.f9b40eb5.js",
    "revision": "478252bed6a7d437d7f635dbc425722c"
  },
  {
    "url": "assets/js/157.c0847ce6.js",
    "revision": "92f647ff601c9eaedd41f918d181b9fd"
  },
  {
    "url": "assets/js/158.368b54b0.js",
    "revision": "8a966e077706cddbef0ff82392b12f4c"
  },
  {
    "url": "assets/js/159.1b2d5805.js",
    "revision": "5c873c62963f561aa5e87e57f17bc358"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.d2d85639.js",
    "revision": "fde07b87d84b8c2768144f517616982d"
  },
  {
    "url": "assets/js/161.6e3570d4.js",
    "revision": "81fa6ea0e6c931f12cfde16ea12c517f"
  },
  {
    "url": "assets/js/162.5be4828b.js",
    "revision": "f4e8a4fd0972404add593458264a5d31"
  },
  {
    "url": "assets/js/163.b7f12b5e.js",
    "revision": "7be20415ecfe1ceb7b669661eb0da847"
  },
  {
    "url": "assets/js/164.9038d3b8.js",
    "revision": "8a60880db27c2e8202b3573fe00b7830"
  },
  {
    "url": "assets/js/165.198101ab.js",
    "revision": "e71c456079107e9eb891303345d0180f"
  },
  {
    "url": "assets/js/166.90616f93.js",
    "revision": "de2c9f5627fff2236cde84d61e1aa82c"
  },
  {
    "url": "assets/js/167.573fecd8.js",
    "revision": "750e46fba1880c5ecc6946dc559307c3"
  },
  {
    "url": "assets/js/168.ef541751.js",
    "revision": "0c68aaee18f09c6ffd6b5e829532cfa1"
  },
  {
    "url": "assets/js/169.4401baaf.js",
    "revision": "e284a9e45ad0303a77335ffa1a457bed"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.596008d1.js",
    "revision": "04c4c47de9b5c1a9215da1e20fa4667f"
  },
  {
    "url": "assets/js/171.cadf9a0e.js",
    "revision": "9e5588b0c353541cad2d799283f159d8"
  },
  {
    "url": "assets/js/172.30ed6b32.js",
    "revision": "9cf1166410e3c8c3f2c90e38fd123088"
  },
  {
    "url": "assets/js/173.9d8ef0d9.js",
    "revision": "943503348f96c918c6d26434281d3e8b"
  },
  {
    "url": "assets/js/174.4ad00bcb.js",
    "revision": "e6060f6922cd28fcad3d8952bf1b6fd2"
  },
  {
    "url": "assets/js/175.8b0b6ba5.js",
    "revision": "5209f91cd10b69ba9a6f60ca51b0a864"
  },
  {
    "url": "assets/js/176.32195039.js",
    "revision": "5b4e45e636567696eac73d6f01ed139f"
  },
  {
    "url": "assets/js/177.35b51455.js",
    "revision": "a2cb21856befae6b4a857a2ac301cbb2"
  },
  {
    "url": "assets/js/178.03f4014e.js",
    "revision": "81c023af0974fdb4a9ecc3bb775056d1"
  },
  {
    "url": "assets/js/179.d6fde64c.js",
    "revision": "0299c340d52fcab07598ba22824f5763"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.3cda3dbe.js",
    "revision": "674ca4045b8e79f35ecf9d223bfb2579"
  },
  {
    "url": "assets/js/181.18afe03b.js",
    "revision": "1ed6be4c7d8f85e0b46f535b7e44a685"
  },
  {
    "url": "assets/js/182.42fd729f.js",
    "revision": "33472cbbfe5dfb835cc7da82f7178db9"
  },
  {
    "url": "assets/js/183.9d5ca95e.js",
    "revision": "b8cd7d8efe9fa8e6ad490cd765896711"
  },
  {
    "url": "assets/js/184.e08d3815.js",
    "revision": "30ad758a0271b4e9dddce9a4e86495c4"
  },
  {
    "url": "assets/js/185.0a1a026a.js",
    "revision": "5872980cbacf6c96328552c69aba27d9"
  },
  {
    "url": "assets/js/186.0df72f55.js",
    "revision": "c5341e35f6b8804fcb71de6be9ec3c61"
  },
  {
    "url": "assets/js/187.e5bbd933.js",
    "revision": "ff89fdf91b65e691b508f47f0b2b8a11"
  },
  {
    "url": "assets/js/188.04fdece0.js",
    "revision": "7eed853cb68c84a70e8fa26e8cb918c7"
  },
  {
    "url": "assets/js/189.fd1387f9.js",
    "revision": "4b734fe66569858d17e0d4c18c1df969"
  },
  {
    "url": "assets/js/19.feea2fe9.js",
    "revision": "6c8eb4ff5afa1102e71d69958591df27"
  },
  {
    "url": "assets/js/190.2ea24581.js",
    "revision": "3725fea846328d3299e342851bb26ef1"
  },
  {
    "url": "assets/js/191.ddd62aa3.js",
    "revision": "4c488e52d2279c2b97cdddb303f205c3"
  },
  {
    "url": "assets/js/192.4f8c2738.js",
    "revision": "a6c192a2e463623f0f13156dbb8cc780"
  },
  {
    "url": "assets/js/193.61f82ad0.js",
    "revision": "0c7172ae468fbefb0ae68e256d3574cb"
  },
  {
    "url": "assets/js/194.4eff0522.js",
    "revision": "58765f0e9d1e894e0053b1c9fe17caee"
  },
  {
    "url": "assets/js/195.6dd5584d.js",
    "revision": "a239b16478dedc657706f3e22ba83090"
  },
  {
    "url": "assets/js/196.097721e6.js",
    "revision": "558bb42d5d3ebad0c4fb3c86a243af00"
  },
  {
    "url": "assets/js/197.47b78f8a.js",
    "revision": "c72b258b01ef0f70c614b1176a2fc7d1"
  },
  {
    "url": "assets/js/198.ffae01b2.js",
    "revision": "a704028e349bc901219246803b3e8075"
  },
  {
    "url": "assets/js/199.a66b67cb.js",
    "revision": "0e9a490eb4863308898c6f9c4d4a0a90"
  },
  {
    "url": "assets/js/20.a4cf9422.js",
    "revision": "34abcb3fa966a0361c2f3611ec00dd53"
  },
  {
    "url": "assets/js/200.7c1dc314.js",
    "revision": "640d397be2abf3c76f66cd5d64b74f85"
  },
  {
    "url": "assets/js/201.ee581ed4.js",
    "revision": "8315d5fe523de91d00e3d2bab91477c7"
  },
  {
    "url": "assets/js/202.81965584.js",
    "revision": "e7852296cc0e2a1d73f7bb0392914c16"
  },
  {
    "url": "assets/js/203.95af327a.js",
    "revision": "f3ecbaa4b1575161e8caa9c09b6748b6"
  },
  {
    "url": "assets/js/204.3c318efa.js",
    "revision": "d0c464b8f807a21f1159425ea3fa0b5b"
  },
  {
    "url": "assets/js/205.ffe40ee2.js",
    "revision": "fea6f0e3d16fcea0c6efa773ad6dc7b4"
  },
  {
    "url": "assets/js/206.b37a193e.js",
    "revision": "49e83f310fe05311aa649e2ac73fd3e8"
  },
  {
    "url": "assets/js/207.a71df608.js",
    "revision": "6dc618ee2045adaf4235639bfe01042f"
  },
  {
    "url": "assets/js/208.4ac0db78.js",
    "revision": "9023d3d9c99e7629a9ee2a77309ec5ba"
  },
  {
    "url": "assets/js/209.37ac34e5.js",
    "revision": "8891316b9eaa8211a2411d2381380411"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.50e8c505.js",
    "revision": "458536294745d7d1508184bed3d34f92"
  },
  {
    "url": "assets/js/211.041caf42.js",
    "revision": "3cc82ee9a20e3ce9462fa4e4da1ffaa4"
  },
  {
    "url": "assets/js/212.3fb4d133.js",
    "revision": "063acfdb67e68fbb643d93409fd97467"
  },
  {
    "url": "assets/js/213.02af52e7.js",
    "revision": "4569d3563de26f2f6384bcda33603de4"
  },
  {
    "url": "assets/js/214.5a733977.js",
    "revision": "b82327f8d0ce2f2430c40acb7ee5182c"
  },
  {
    "url": "assets/js/215.1b66e4d7.js",
    "revision": "77210c5be8c61905cb23a192fd62e84e"
  },
  {
    "url": "assets/js/216.57718521.js",
    "revision": "5f270e788939cd8e53f770573eb35776"
  },
  {
    "url": "assets/js/217.36c48199.js",
    "revision": "1e853a572d59c845469578c08f77400d"
  },
  {
    "url": "assets/js/218.c42847d5.js",
    "revision": "12109e5c58ad4669dbbabe755e2ba60b"
  },
  {
    "url": "assets/js/219.8b5bb21b.js",
    "revision": "695200aac4941a1146293ea03ca41ac6"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.bc5cba0d.js",
    "revision": "b80bb1ce1368c105ea6adcd3704ed3d6"
  },
  {
    "url": "assets/js/221.93e26c1b.js",
    "revision": "50e1e437b038d97986f0463b152f45e3"
  },
  {
    "url": "assets/js/222.0b00a1a8.js",
    "revision": "2ed3fd0951206995791e816a4d8bebf3"
  },
  {
    "url": "assets/js/223.26f2486a.js",
    "revision": "744c905dd63d2af8aed51ed2c10fe8c0"
  },
  {
    "url": "assets/js/224.3f7ee101.js",
    "revision": "bb6a1fa5fdf94e2d2e811e5e78c80ed5"
  },
  {
    "url": "assets/js/225.bca25b41.js",
    "revision": "80ba1709019eacb797c499bfd9a788fa"
  },
  {
    "url": "assets/js/226.f4e41da2.js",
    "revision": "e6f9c7c61a50776d7616a9a3743f53af"
  },
  {
    "url": "assets/js/227.d7fb29c1.js",
    "revision": "91e940c77293b68b139f8da6311aee47"
  },
  {
    "url": "assets/js/228.46e29d4f.js",
    "revision": "f79af6b87948ed902b81f3b47c9ef338"
  },
  {
    "url": "assets/js/229.72ebaa56.js",
    "revision": "ba14771c17217210fd9b1fa0202a7d3f"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.3f12500e.js",
    "revision": "2b39a605116cee5fcfb22f41eec9b79c"
  },
  {
    "url": "assets/js/231.272be885.js",
    "revision": "9420a91166eace1cfe5bddd7a24a56b1"
  },
  {
    "url": "assets/js/232.d2e294c7.js",
    "revision": "d15e3cbb922c34e6130eafcc43cbfc56"
  },
  {
    "url": "assets/js/233.cc691748.js",
    "revision": "aaf185b09380b6bada86b392dd791290"
  },
  {
    "url": "assets/js/234.7c3dc5b7.js",
    "revision": "f60c6df75f1a46bfc005fd50a92b1ef7"
  },
  {
    "url": "assets/js/235.f9fc212a.js",
    "revision": "3a631934014b538232d5ab9b01764aff"
  },
  {
    "url": "assets/js/236.da45e02a.js",
    "revision": "477765f294b0cc52afb2d6322b2164f0"
  },
  {
    "url": "assets/js/237.3ffd7d02.js",
    "revision": "a66dc96173c8bc6c82b44a0e1a7ff5e7"
  },
  {
    "url": "assets/js/238.9b8eeb67.js",
    "revision": "573636548f480a661e33b063e6619a8a"
  },
  {
    "url": "assets/js/239.45aae5c2.js",
    "revision": "b3d18c8074fe8375c4458c91b5432c3a"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.a4a18954.js",
    "revision": "30587604c19273e8d583564191cf5761"
  },
  {
    "url": "assets/js/241.1e71fe1f.js",
    "revision": "a7bce1cafa6646f7ea444177a8b43888"
  },
  {
    "url": "assets/js/242.591e8602.js",
    "revision": "da70b0d09ca445bf2512e8234d6e0b9f"
  },
  {
    "url": "assets/js/243.7229e27b.js",
    "revision": "ca6d95af51d8ff03b9c74712d7acd1f9"
  },
  {
    "url": "assets/js/244.368bc87e.js",
    "revision": "bd1dcd53e6ba31b3041ebb7525d1bbe3"
  },
  {
    "url": "assets/js/245.2fe3dbe4.js",
    "revision": "d39b6c52b12505502f3e0abd30a317cf"
  },
  {
    "url": "assets/js/246.03fee5e7.js",
    "revision": "7a7a927d8308f96c552c9bcd79dc1f35"
  },
  {
    "url": "assets/js/247.86ba7241.js",
    "revision": "b83b4db24a05bd5ec66967b4893c8700"
  },
  {
    "url": "assets/js/248.714f0e57.js",
    "revision": "f47d91a06aff70d3cb199a54fe8e5bf4"
  },
  {
    "url": "assets/js/249.06d087aa.js",
    "revision": "cb23488187b993d56176f456afb6b632"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.5500ca91.js",
    "revision": "ea4fd4c72940fe7357d2f7358368ce80"
  },
  {
    "url": "assets/js/251.2de117c4.js",
    "revision": "7ff90b51804ddd844e5ee704dae59c65"
  },
  {
    "url": "assets/js/252.499d01e3.js",
    "revision": "6fe42077957d6b9df0d74baaf2cdf421"
  },
  {
    "url": "assets/js/253.0d20f8ef.js",
    "revision": "b182404de2b9e00bd70719fdb876bbaf"
  },
  {
    "url": "assets/js/254.ece6e388.js",
    "revision": "17fd10401143cb71e5b60025798bda62"
  },
  {
    "url": "assets/js/255.15ffd3b1.js",
    "revision": "d1ca163ef4a36eede0ea5ba18caa61f0"
  },
  {
    "url": "assets/js/256.d98ee353.js",
    "revision": "a0ba60c4187b717584ba1e76cd7d6c0d"
  },
  {
    "url": "assets/js/257.93139308.js",
    "revision": "7fbb15b94bf18093f89268122980c9a1"
  },
  {
    "url": "assets/js/258.8264d7ff.js",
    "revision": "03eb710a1ab48b2aea8fe9f9a33c2c60"
  },
  {
    "url": "assets/js/259.2f40aba6.js",
    "revision": "8a60d0677e98f1ec583b0a3269a785bd"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.19cd8f00.js",
    "revision": "dd9064e038eb99edd8e5e3c11152a81e"
  },
  {
    "url": "assets/js/261.038bc753.js",
    "revision": "e67bece6597dea9e853746e64130292e"
  },
  {
    "url": "assets/js/262.96098e2b.js",
    "revision": "041c2f949cb647b7ca6a5d9f8c3717ba"
  },
  {
    "url": "assets/js/263.e8e3f63d.js",
    "revision": "345c01ac8fb3202731312a8dc3ce7a4d"
  },
  {
    "url": "assets/js/264.2987fa60.js",
    "revision": "eb48fa2302c63f4740ce1a90418c0ad8"
  },
  {
    "url": "assets/js/265.5aabf7a8.js",
    "revision": "8d70f34e982bf3f7817db829b6579b15"
  },
  {
    "url": "assets/js/266.9e093a77.js",
    "revision": "f2f4ead01add7f711041913e749e3016"
  },
  {
    "url": "assets/js/267.aaf1bc3b.js",
    "revision": "75003c03b6847e6d30032269ff3ec29a"
  },
  {
    "url": "assets/js/268.4771f7dc.js",
    "revision": "0806c14eb064bf3493c857ddd8b8de44"
  },
  {
    "url": "assets/js/269.08deb73e.js",
    "revision": "71976b1b00a61b4b34d1fb0bcd130072"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.dfe4cbbc.js",
    "revision": "caa33e21ff4618dcac349ba83026879b"
  },
  {
    "url": "assets/js/271.ed633bfe.js",
    "revision": "b30892f86812ae7654f6393927c8c001"
  },
  {
    "url": "assets/js/272.05a6b41d.js",
    "revision": "2504156b90692fb75352dd70461c8be3"
  },
  {
    "url": "assets/js/273.bf64d18f.js",
    "revision": "5defb7aa7e35fe4baa24cd988bd82013"
  },
  {
    "url": "assets/js/274.eaff08b4.js",
    "revision": "7228ddbaf3b7b462e8077cca303a53b6"
  },
  {
    "url": "assets/js/275.be0b7917.js",
    "revision": "2e943fc7d9ff1bfd80cf596083cc38b1"
  },
  {
    "url": "assets/js/276.1cd863b0.js",
    "revision": "0da690bd828314df910227713a218751"
  },
  {
    "url": "assets/js/277.1d8789f1.js",
    "revision": "966b1189c40a33bcc6fb785d27799622"
  },
  {
    "url": "assets/js/278.e1f7a9a2.js",
    "revision": "a0cd0bedcecc22dde53d99709753ed65"
  },
  {
    "url": "assets/js/279.08ff33d7.js",
    "revision": "c9c674648583d70d9831cea713a94f3b"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.c6a31a9a.js",
    "revision": "1d3d4ce690947cdf561a2299fd24c3f7"
  },
  {
    "url": "assets/js/281.38abcc40.js",
    "revision": "d4917ece654afe9f6c3209721167c935"
  },
  {
    "url": "assets/js/282.e2800bce.js",
    "revision": "cb8df4cb723e483e221832db57d45f8e"
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
    "url": "assets/js/57.82e26de0.js",
    "revision": "8916be9c99e83adc3eff4d8fbb5bd788"
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
    "url": "assets/js/64.92ca7de0.js",
    "revision": "894ed0738cb6fe50ad6dec4fb944f071"
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
    "url": "assets/js/82.bb6d9443.js",
    "revision": "d602b342653b4c549eada629cc698c88"
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
    "url": "assets/js/85.2be196ee.js",
    "revision": "9a185f9253a56626e88749d72e6023d4"
  },
  {
    "url": "assets/js/86.051f416c.js",
    "revision": "3b23d0dceb52c7606bd71b88fbb1f4f9"
  },
  {
    "url": "assets/js/87.347d1d24.js",
    "revision": "936c933f52923f6bc507450655a15e8e"
  },
  {
    "url": "assets/js/88.7ea609bf.js",
    "revision": "924be252924a96b7a3ff4f235669e59f"
  },
  {
    "url": "assets/js/89.9bc4a44b.js",
    "revision": "11a41f034e66ad328fa08b301a5dfe5a"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.b0d286fb.js",
    "revision": "f400c5e13fcd4b29c00f50ed15c6e9c6"
  },
  {
    "url": "assets/js/91.2c5e16f5.js",
    "revision": "9e151a975b8a87409e3e7ef5c9ce5b14"
  },
  {
    "url": "assets/js/92.103be353.js",
    "revision": "97731d067e61d03091010e9ae667ef18"
  },
  {
    "url": "assets/js/93.484256ad.js",
    "revision": "8b53558c258d9bb90a8863cea01a1110"
  },
  {
    "url": "assets/js/94.2ca1b926.js",
    "revision": "35069616bd4e6515891ef3e127e5dcbc"
  },
  {
    "url": "assets/js/95.c3e8ec92.js",
    "revision": "487be528d873cbd961f9d9a399b2bd20"
  },
  {
    "url": "assets/js/96.87a2e3c0.js",
    "revision": "ecd1787dbd1ccd3ad634779b9fb49ece"
  },
  {
    "url": "assets/js/97.d2f3248c.js",
    "revision": "83d0c945b33fac3c2fc90df465863fae"
  },
  {
    "url": "assets/js/98.9fddbd4f.js",
    "revision": "470ba59ef91805bf72edcf640e18541d"
  },
  {
    "url": "assets/js/99.14855627.js",
    "revision": "60378c5b082c02157fbc0a4cf156cc9c"
  },
  {
    "url": "assets/js/app.656bf2b2.js",
    "revision": "0f580c527d120b782bc6f0765dd81acf"
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
    "revision": "942a4ad1638f74a90a16d2e84b48d07f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "fcf6ad75e10b2881ffc95aa67cb7a6de"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c98bd76b227ae7fc65722151b2acb2fd"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d8c1b7b73b0c3f77cc68a2ec6f0bfb9a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4a7829e941e62d6707e8e954a4d7171c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7545bbe110b263268657b7992bd59958"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "af0d97f45d70b10fa84256d0cad3305e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4159386204b6839846c297e1dca549d6"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7052291a3814b12a56671ed404aad1af"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "99d1c8941040502708af57f1a70d6a46"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ef2dd87faaaa24c599b641f4f2b89db7"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "64c68033ac830eed519e5061578a1acc"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "0a380a2c10756f360a1d69574dad39e9"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "a9a72a1b6f8d98dd781edd784fa02c6f"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "617a75e002d9982de24f0c7e29c2ab50"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "a12afe106b8725f9f39dac46d0ca0cb4"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "14d5c499a5d04bfd379b2ae27a454fc3"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "c27b54f69c76d84972ce4f40fd2750f0"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "513e61a9a9af169cce60960de0ca814e"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "de95790f31e6f32e70323a3b6a72ee75"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "b1c9c06d53f52cd418775c810d65cb67"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "5a946033d7b47e2b37e471911ea2e4a2"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ab3710ab7f89760f41faca29024c3bb9"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "3c8be2bcaf469f442e14edb7e0f6cb82"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "a4da77ddb0f77a886130a357a662effc"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "45cdf16b36ec461051f92455adb64da5"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "109d894af2797e075edf03581f92567e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ad2be159cc4089551d744aa0da26de2e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "53dcd704485c2eac199859888e9eb1cd"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "11eaba1024fca5f99e0dfd9b88e33659"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "47e65ce8a606cc1484a0e6adad64d1ce"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "ee105a72233232548a1a755babd7ea96"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "869e1850672c9cef46173c3605db8144"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "cfc75263141346b99e76c26a7919e8e4"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "cac37fe4fdffd84636bfb5c19a2f529a"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "65095cc2c05397a022732a939a7bac4f"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b0e59447f88ef838ad99eb5aa5b73110"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "064bbd63fbd71cf5b40ed1317fef27ee"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0464ea9a6bd141d7ed150312fcdc6a7b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3a84df819a813a4298ca0b5159bae8eb"
  },
  {
    "url": "book/index.html",
    "revision": "076331254a2c845c3e292f23a9b9e2f5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "be92fb673ed77f7dcd6217935d76b634"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "fa3bda4bdabac3eeac9b0c39eb79d452"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "4cfee9e15bcff3b773e09fc58482b276"
  },
  {
    "url": "c/audio/index.html",
    "revision": "9ee9379a650104c0c57d4190de47aa04"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "cae03ee07dd3c5f1a052a8302a5017ad"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d42577f789b6fdaeeaf222637e924128"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "788468d235e322cf71516ba379fc890b"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "7340c8fd3d4eabaa3b9a8ac7b3f07506"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "01f9240c40e7357eddc5641cb77be9fb"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "518facb66a7fd472e544d910978ae5fc"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "0fcdcaf54d3c57fc9eb190c5b39ee183"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "8e73c3a77eddf5fe18c287a15a899173"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "33710d7778e1bc869e668287e6484f6c"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "6c60eb86689dcef0f7e9d43f1e9010c9"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "452bfdb7d115ab9ecc4880e8c43f15b9"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "529d27d7372a74118f604960689960f9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "ba25f0fc3aa35247edb329fc1731b965"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "6de01a0c1a617f97104443709ceff58c"
  },
  {
    "url": "c/program/index.html",
    "revision": "ac67b96d55f2d5fbd8e059b16522a258"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f2b7751dfbf4bf14234d7085f4927817"
  },
  {
    "url": "categories/index.html",
    "revision": "17a2b29997ff877ef9bfc33d8a58b7be"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "839a9ba852aea207f900e668b1fb9794"
  },
  {
    "url": "figma/index.html",
    "revision": "21074e4c9f43ab2892bf38952bac4d18"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "f6d0273eed5298e561a6027c0c698ab0"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "1b74f2486c2b2d8f81d5754f04e22344"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "cf62aa7ff960adb7dc5a59a62261be38"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "896cb4fdbc0edc4aefc1945d02cf7858"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "cb18035fa3eed1f4466b0f638e46788d"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "97695c13459a37c14bfd5b3ef9239628"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "ee27024cb3fdb71bfa459e02ec4e0e75"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "9c7f559f701f0ab302cee9f35899ec74"
  },
  {
    "url": "flutter/index.html",
    "revision": "dd5214025185519063dc9bfd400b8c7b"
  },
  {
    "url": "flutter/point.html",
    "revision": "9df336933fbe0c9b3cbaf0a565923f2d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c3d0cfd42e076411d04cf36c10396ab2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8c5b11adeb27c3f3821b25b8aa3e90f5"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "66407febc408513a77d464e7def225a7"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fe61a28b0bf2a588f30def6243ded73d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2cde6ff158734077f60f97d32b80bfb1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6d5a1e250000cc1c95021e72b64e8b37"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a2408031d32c78c81ff6b4f747d8ab89"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a9e974e5cdbe0f0929072b7dcdcc968a"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ac3d7660a1693722d8e7c5898e8946cc"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "6100130c68791ceaf57efe8fb1f29052"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "dda9c4dfe49972d8142ef614f65b3e3b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e64f361e207fcf9ebf9a33067d0302d8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "a3d6a846ff72b7e23fa28e0e44b8d437"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "ba4b48d4a339f243d239e1f5e2b6daf9"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "b50c112a4406dd8886789898b48ab170"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "c54261fa6884a3dc821eb7e4138b6195"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8d4b3f38c26cc6946272ab650b561b30"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "73f1d14f2f1d617b84cbb59a338c496d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e85f6026b93402af7f1d5fb1f74a819d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "105f00419e18b21c6691d71b9862ec0d"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "daf3846baf360a89323477bed5385941"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ac5efde4af833ee2214f49d20b45cb66"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "6ddad182c6e677ccba2dfc55229fe57a"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7884d3d488ee6f2404ea38a3bd9d6c44"
  },
  {
    "url": "haskell/index.html",
    "revision": "149cce7f40c76717c1615b10b769d6df"
  },
  {
    "url": "index.html",
    "revision": "82c34bb07b0e45ec1928e497f22aace0"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "5730edfb03f183e8300a29f89d364e3a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "bc3db39b386872e90cc9ec6bd9f16e0e"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "87f4db30fb9ca7791125080db7b882f9"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "a6f74f85fc43f512aab98f827ec500d9"
  },
  {
    "url": "python/index.html",
    "revision": "6a1f4ff6bdff7ed6597b015ca679ca19"
  },
  {
    "url": "python/python-ase.html",
    "revision": "af7d8b9ba8154983ddac247097c30a12"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "4a3bd6f124a364f6813956cd61aad5b4"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "a8fa057725cd1e53774fb89762b438d4"
  },
  {
    "url": "python/python-file.html",
    "revision": "1ea37d93896ab259b42dd157b5a0f4ba"
  },
  {
    "url": "python/python-function.html",
    "revision": "f7c5995ed2b351d89138f07f3c659cf2"
  },
  {
    "url": "python/python-generator.html",
    "revision": "72c48e35ef66e0a62cf0b9b6434ff2d7"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "8f0ed595fa65fb794a3436f2c4481183"
  },
  {
    "url": "python/python-module.html",
    "revision": "b567599f1bd37d7968f487313149a2b2"
  },
  {
    "url": "python/python-string.html",
    "revision": "55fb82db7ed28cecff5f989105e67c6b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ffe1c87dca93a1b436b0c2a795660981"
  },
  {
    "url": "read/index.html",
    "revision": "239e022b7f469d6a468b84852eb46c68"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e827dea4f5d8ddb54179d70506260cd3"
  },
  {
    "url": "swift/better/available.html",
    "revision": "21deb17d43c55d6c00b1dc1b1206eef0"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b219d518a3355300a63c63803f4c8d0e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b93fbfe8eb0a30e0b55065be2e1ae483"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "25e191a0ead9559a963054ee57121ae1"
  },
  {
    "url": "swift/better/di.html",
    "revision": "3e83d49e4ec0ceeec71655e00b7eb11d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "d27247a021d221bb40265fd3f405eb63"
  },
  {
    "url": "swift/better/last.html",
    "revision": "d2dda9caf54d370f14a12e8471a8f3f9"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "850eba913a216e683f97a098d039c89e"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6853520f2011e7d9aa47e93eaa463565"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "e78c43f05aa1b144386bc35e5116089a"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "2ffd6b5f676fd93872457ee67b4cf020"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "e5acb6636597e880195c279aaed6b5dd"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "df471167f3bb38acb43eafdf0233aae9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e71815ad59445b5e0412a4620d197130"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "cf1388588612d3411b4be0a1c31c27f4"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "91a3f11d0615ba70c4e8f16f33765742"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "182a2375102f66fae357656c07c7354f"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "1c8254747e3143c7159b94e6d305cd83"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "60f54039c725abfee0acd86c4fa1095c"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "a85e9c8a731b439adb4e048c5727e512"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "f505de14a76e2d47cbc8e5ea1dcf4c95"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "2a7f96a23c736f087fcdf42d0887f110"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b5e1d5c2f767a0c8a58e167bc378426c"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "9fed9b6854e2721a69b9022d63f880b7"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "ed1c190e692d033d2d96d14991079c39"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "908e605e9f4717747223dd49bd00dbbf"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "80e7fa9c4459780c1ffcc2f7347ecca6"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "3942fa584e05924c7234aca5d1231dad"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "369cf0a18ab2d01e792fe875116b44e4"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "139b715fab1eef40442ce6f31d3471c7"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "d8b49f7a03b1280a9275415720aa7f19"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "3eea57b2ea02c15e978061343580fda5"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "39e1803da6e44c77ed5481cd74de0031"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "e7d68dfbe9b593e4edff436f645a809e"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "33672fc9741129b57cdb542d9ad709e4"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "58bbcd431994d851ccf8973628600834"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "6083e5e3ab70d64b1e1da6fe37968a96"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "6e88af29127d0f26d3afaade02dfa48f"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "b71db10a570f3cd864a677167a49fec0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "7f37eee1316ac5b244dea0aa8b226049"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "93dcc0e314db124e859b8aae94ac9ba1"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "c1e86aae0b5fa489c57ff1c71caf1680"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ad9068d39a38f21816ebe65476875028"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "0c374b16bd6047dd42f6cba0a02ed4b7"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "77a12d5d2a35d25792509684ea618ca0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "23a102410a9969418034f727c14067d8"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4c1c8204452dfdc4c5b96c4e51b33758"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "1d2a26f4d4726b0ef850a7656ce9d7fc"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "8a7ec5bf5eb1d826a62b55324c56d82a"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f9d24d11e32dd5ca4f9987c37d2acd5d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f80f7a30421a80297677de7c38a82df7"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "4812464f0f13312b1037d0c73ed94dcd"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "97747946dabf7376d850cf84ae763f35"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "6bb157aa20a74e0fe02ccccea40601be"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "791cdb60dfc7b90b422ba3a291f211bc"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "af6175152f965f156fd51a022e69ee70"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "58ea2bb1d045431414f0dcae6705f843"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "300bbda46508cffe1db2cdc104732479"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "59f5ebcadc583b6568f0063ffe917c8c"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "b3e78cdd03acdf0489bb0bca4ec1450a"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "646b3ea80a71fa04486a9830790d0426"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ed55a6dd477bd0fca936a210c5d4cb9f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "d8bf74438d4dff73f70d26e17bf728fa"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "ec3d916859aa96b3742bd39326f8ccec"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "294294f291b492646fa51ba4b6b6efba"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "715d75a18511154d8697d6405b3db186"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e6b4d350a7782160a5a0fe3d2d6c46e2"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "de5475f400215f3fb8ff24791e3e8745"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "46571fcbe30b311110c6151e3d72717b"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7a1d21744ec8fd89b82f6a022148e26b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "62827a2ad64f58079313cff092c736a9"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b4070605e363a53b6cbe011b260611c3"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "063104b52106fd584bdf56b497e6fe72"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3066a7f74a1eb69011adc899da38d56d"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3dcd34adcfbdb5a1d89ea9b45efff429"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "11704acb83c261afcf9752e26b22197d"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "fe6334b32694c5be9eff19a206ca6afa"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "31c11c3a31bf228462309c6eea54639d"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "fe650fc0f9177e49300f315eb8fa5fdf"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "5cbcfe70dc1430e24a34e9d068021569"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "5eddab06f712c9f9b9ca125a0eace46f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0a42dd5ed0717584b7aea00b3228cd7c"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "b9af8fdb144c0e140dbc58ec5493285f"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "39e5d7f0bb70eeba58c1bab04c5ba7b7"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "42c13ddd04d40c8832443caecb741ba7"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "325d1992f48a8fb8bf0f223dcd34cea5"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "f8f07616248afa2f01255d8fe61aeb10"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "48e167a0bf78c7b4a7614dab40eabd78"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "764e4cd9b6455f57a7919a00034238bf"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "4073e55bd70d77a60d7e9728eab231f8"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5e67147c698eddf1695c1db7c17d00a8"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "21d8b2e3804d2f797cf5a3e9e1f3ff34"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "571bb290485a4475d6f6d30f441824fb"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "fd1f24f08af391bc1b9edf166767ab63"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "34d666285770e4d256573b874ad67439"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a02dbf9b8f95953788c04e0581434bf1"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "1909e7da6531e37b6f754c4e3ae036ce"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "2bb41f10c35e7843263b5d26761df30e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "7a4b7b8530451dd4672719caa09c7f79"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "752c1bf46781e0beff818d04f2c414ef"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "34e7595b4341f4a73e0a2ac92eba8f3a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "a05fe6f24ddbbe2581b93608b7347e9e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b464740e6049d9990f12e415e5bbbc67"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "262f258abfec385ae7b5e1a3c96b2c53"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "c95a2c36a44bc49694c96ae29b84c601"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c5b6f24106838f8462332b41f4e0a81d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "053bd55134a167d92962f40001e433cf"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "69c742051027e123a8e913967a320b16"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "81fd962b36da741c602e055739221d59"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "473b9e1e95646d8672309b6f868a9d8e"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "a1e09e7a56d11f13d10eb5364c6d0c47"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "2617f0f9e86b72a95aefd4b60e299131"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c33c1bfd4f6422f561fc75faafd97a2b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9ea9a84abc178f41848ddeaaa0041f22"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f6f8a80a063bdd6823f7a987626d2775"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c7dc61cd63f189fb0c19c0c0bd8bac47"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e2e5005d5efb99a8e3e767e976ec02ed"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3485154ff08e48bcf268f25bec6d6cac"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e1c31ec9734c0ac0852900b417cbea5b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "90161b05a2b318367dc93505a2cf103e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "cd3c3efd51bbd70bfb82d37897105cd5"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "043b6a91f740c87f22d7f3685e6ff4a7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1373d2110592525f587b4a7269bd7d46"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a0a23984ddd6a8a7fbbf0abd1750f8a9"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1b344cda91720fa390abe5ae8945587c"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ab97ed877aae0bf06c922d515f1fb52d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "fc4b4431d55185a798a1d2ff871e4e74"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "aae20af408d966988acd278dfbbdf9e9"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "2d520b8d28a11d2e1103b6d12da51e0c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "dc04e0afecb84a2cbdd06675c8737aed"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "09eefc32e0b320e2e749cdaa98083380"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "721b7fae2a219c4fbd70ded5c718931c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0399c332454f8a78e98894522d7cc4ae"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "f4a306003f48ece3cc74889775a5db27"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d9354ebf0522e245534997746fe1a05e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3b9a9e6f5c502384c314753d992df899"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ac10cb6e9313a0708841b2adfe2bbedf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9f7eb2a45251963cc0aa65b8821a18e0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "91fbccf2ad03e6822526256ac55fbe20"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3ec1aaf8f5b09dcebe54d920988a0095"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7e99d83ac1ae36d8e3b08aebd68ae13e"
  },
  {
    "url": "tag/index.html",
    "revision": "ae222c776c6e83c25f4c1e7128234266"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f8d9c29be4df060d4bbe865d6e393e1f"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "3ddde1c6756a95cb1b1ae14f895f4d64"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "7658d37f48be4a0b0e112d9eee277b35"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "5d3124a1a77cf4185300a49dd5da3918"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "63dcd600ac2effc52076cc4b9279ac98"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "19bcd178e20c1a267db1bbd32bce4379"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ba77bac9c0306903c7179b2ccf736ae9"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b10fa9ebf6c2487f39d39e381e32fc60"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "34d979dd5f35baed2f677f19f54b3c98"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "032e68f2ddcf050730c932af23badf06"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d8e68893fae9ba878ee41d1083b12b5a"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "55e2845781a12023b9fdf84f9e03bf55"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "63efe6676f3ca3eecd72a23960c4bea0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5e50f750b04ec3fc81f9c93d3e63e130"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "27267e9dfa1b280f1e5e433d60a6f90e"
  },
  {
    "url": "tag/read/index.html",
    "revision": "76ca780fd1f723cf6bebf8baee4f1e9f"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "acf638a96b5685d81156d8a01874c6d3"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b3fd07fcb6672ee92f7525a659e7e020"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "a4404a81c73b4cc73efcab41d0a84e8f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d20b89b264cef773dc58b23c4dab511e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "200d8cbd3dba0ffa88806ca9c7796454"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "3b3c22b993c5b6083d73dd4f59ebbedc"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "15da0f291ad882a1f4ad78468aac2527"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "8ea3029c24be67064e60ee5edaf9c709"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "abd2c57d9806e0a7c14480176194e563"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fb18d9375d0b767d26bdfa02866e2484"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e97dea35ac6d1e7e19d15e189afeab59"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "b8c62169a5d119cf3746630f224aa495"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "eb4417160679e9cf82f3357dd5b4e0de"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "6521c066ea88c00b89cf022fd027bdf3"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "35073613c8a6561e970fc39b7dfdb2de"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "9a2c6b4a2c49984d9668ef98a04800cb"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "04958933327e36bc517553486b2d3ff2"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "1ad5a789f93de279569d14249be451cd"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4050af0876b259747f40ed8de7466b3a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "01e685c76da21a850e07c64f4a794db9"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "aee6aea3c0d62177ded956b54bd74993"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "32501470215886dcd5b71478add57cf4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "155953504833b6c03d43f0cc82e5ba88"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "11c8f6060ef903ee95c48ebfce7bcc26"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "ca4debf3920cf8a27a48a5708cb124ce"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "9df35330c604fbebaa795e93e2e44b36"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4d0292665f809990e99a0c354534e758"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "80686698c31d2d426b4d7152a4c1c413"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "b2def682d28f4424a988bef1f89e7314"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "9fd548ea15b61569d9f92663e0468f76"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a4255a0806a9e4cd9bd043741f948f76"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "45fc04cf5b18fcd246b1ad1004eeff50"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "7219e7307f4694c27c750eca095094fc"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "b565054e3f11b2ca1d6adf586ba854ed"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c6cac236da3d6ce5e2000719ecd6825f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f73ca98e171442887d05c151ea3ec5c9"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "53d56221d84289882756380d66933e98"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c2ed4058f06c773b811f29be671a76bb"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e8826385200313b4461b02ce37d36075"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "fae6da8ce29d21be7b4c2c3903cd1b5a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e7772bc0f9dc5881e104857368defc8a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8fc24e2e2439ecf537afd055f49c9206"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "68eb9ca605eb5cd43f817098f54424a6"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "9b9100d06a209cecbf4ff8c4d31bed62"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "36968b7888db93ae8e0b7bf6764ae4ec"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8cadc6f66ae4337aff74d0999ea5c765"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "060440ea9e5a30ba6f8cc8d25a6e0f4b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "c860899bc6eb6b68a83e06f84eee2439"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "8086dfa28742e00b7bdc87947c9fa4d8"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "7016d57ed45f86d2bee2fbfeca4bf272"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "51481552fc0e67a6bc8b95184410fd28"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "3104f5b8966f7ada94bfafb60235a5f4"
  },
  {
    "url": "timeline/index.html",
    "revision": "d0a45334e51298ac9fde0a75d37fd0e3"
  },
  {
    "url": "tools/docsify.html",
    "revision": "e9273323ca218218aa4558b096db04d4"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "93b2d8cbaedae5d1fbbaf7e0e30f23ff"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "be7fb6860bff287eb4d5dbb1be19e4f2"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "e1d9a11f97e33668dc7697f2d39b699d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1c2ae9329b67ed47a54ce43f4bc96375"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6ab13b84f5f36f8e83e57420b6c51b0c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e2cd2f41de5fb127bd8d84c9cb30b0a6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0748515f05143aa6ed7221c68900159a"
  },
  {
    "url": "tools/note/index.html",
    "revision": "a8e5e0d43b40541c1f74f7beec808b48"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "9a8fd20753825c4a51cf331f1bbd85f1"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "2b0fe6ffbddeb5d57d9afe988fa9e22f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "47c3d1bb8ca09d9bf2d07a0bb0337c1c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "6c596f43f386f2cd239941c8d14d4f7c"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "9e33d0d259b0659d5ed9ce09663182d1"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "87de1fbd127f07c63c2fdc0b4f7d8245"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7e9b76a2efefd31e3111960a43bacfee"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "9c20ad19dde44006155370ca01fd7f2b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2d93b55fe6e2608d75f85b6e7625a422"
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
