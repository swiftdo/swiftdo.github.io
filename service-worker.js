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
    "revision": "ba15e059e74138a76a156f5787bd50fe"
  },
  {
    "url": "about/app/index.html",
    "revision": "96aada1750285ed1f9db0feb606baeb3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7192f787e9d2b070d467252fa94d4e05"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d176711d8b0b48eaa821d8597dc8cc5b"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "5687703c49bbbd334c3d3680ef301acb"
  },
  {
    "url": "about/index/index.html",
    "revision": "dc3c13b2b1c22f781980448d82c37f23"
  },
  {
    "url": "ai/index.html",
    "revision": "d78249920ca03872b619ac79738f1a9b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f59a38a105bdd98bc47cca661fb26084"
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
    "url": "assets/js/10.d9d3a525.js",
    "revision": "764e2f98839cc1f280a9bb16b817cc25"
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
    "url": "assets/js/122.eb4c9519.js",
    "revision": "e0039da29127bb9e59c811ddce839c3e"
  },
  {
    "url": "assets/js/123.2b63c89f.js",
    "revision": "02c8869a015674551e8513693cee4f55"
  },
  {
    "url": "assets/js/124.78479809.js",
    "revision": "81f3d8031288799e16412a5f9a8d885d"
  },
  {
    "url": "assets/js/125.1f5f88fa.js",
    "revision": "c56596ed6efdd1fef36b1ce3d19ae7cf"
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
    "url": "assets/js/142.cf21bb80.js",
    "revision": "d0291f50f8b039d635d4598109214baa"
  },
  {
    "url": "assets/js/143.956e6c12.js",
    "revision": "676cd4b16b44bc628cf572fd6f05065a"
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
    "url": "assets/js/158.2cf10821.js",
    "revision": "adab4c61a307c215344fe71d01f98e03"
  },
  {
    "url": "assets/js/159.736f2728.js",
    "revision": "63753dac7a74ae49022a68ccda85107e"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.513641ef.js",
    "revision": "a640b3d4cc738c407a679fc2ee6e2208"
  },
  {
    "url": "assets/js/161.c2a34790.js",
    "revision": "db453fd9e814ad365044b082f815ae9d"
  },
  {
    "url": "assets/js/162.e13bce07.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.e0bf1e9f.js",
    "revision": "7c89625bdb29f18ea8041c3703b5ae44"
  },
  {
    "url": "assets/js/164.4e90aa9a.js",
    "revision": "95cbad181641075423c479b9d2cbae0e"
  },
  {
    "url": "assets/js/165.93baced6.js",
    "revision": "08e1f94b4aad0ae180b34e540ca5c9d9"
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
    "url": "assets/js/173.adde5ad7.js",
    "revision": "3c61cb4e7306e668e0345606cf77e54e"
  },
  {
    "url": "assets/js/174.737372bd.js",
    "revision": "c7e1c1046b9e67b9cc553be4894835b7"
  },
  {
    "url": "assets/js/175.95c4fa0f.js",
    "revision": "be4628b82a9eb4c66e90c9a80b33ef85"
  },
  {
    "url": "assets/js/176.e6408969.js",
    "revision": "b535b72c7aeca29e3a9aebb761d5567d"
  },
  {
    "url": "assets/js/177.ece599b2.js",
    "revision": "0a4363500d5f8799ac71cf7a59feda3f"
  },
  {
    "url": "assets/js/178.69c8cc8f.js",
    "revision": "13016eb1c17c879f9f07f1a9f58c3d22"
  },
  {
    "url": "assets/js/179.1d0e992f.js",
    "revision": "4d5b9335e4cd30ea37df548fc8e252b8"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.1890c9b9.js",
    "revision": "0fba59ae21b50fe59203b4670ad8f36c"
  },
  {
    "url": "assets/js/181.9e9d3709.js",
    "revision": "c5f3869f63b6df893cd41bf5aab489df"
  },
  {
    "url": "assets/js/182.12660ad4.js",
    "revision": "1a5e8382e7c48a0f7782fe8fdb87525c"
  },
  {
    "url": "assets/js/183.190f6540.js",
    "revision": "5056aa44bd36b08ec2a8534554cb45f7"
  },
  {
    "url": "assets/js/184.ecb4c345.js",
    "revision": "d02dde83d6d954ff01146016768e090a"
  },
  {
    "url": "assets/js/185.8e2299a3.js",
    "revision": "9f6dc7d99ff873b7937edf05c1eaed92"
  },
  {
    "url": "assets/js/186.4ba5f000.js",
    "revision": "dc91756635f0c013104fc2a0ccff3440"
  },
  {
    "url": "assets/js/187.42147afa.js",
    "revision": "da1f25c6558f359f9bffc97dd746bf3f"
  },
  {
    "url": "assets/js/188.60852722.js",
    "revision": "50bd29c117e5b531e0e9f4a4285a8864"
  },
  {
    "url": "assets/js/189.0fd48583.js",
    "revision": "151f623fceb43a4f2f3fe3ac9cf29cfa"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.2f642a6c.js",
    "revision": "51e30b6dae3b7d0437f632e7a54b8229"
  },
  {
    "url": "assets/js/191.f77a1e16.js",
    "revision": "10fa8b61c218476c204d5157a751718f"
  },
  {
    "url": "assets/js/192.eb056113.js",
    "revision": "58aad2297ef5ef214bc2eec601732815"
  },
  {
    "url": "assets/js/193.b7b89858.js",
    "revision": "f6f212481bd75ae9dff7afe770fda035"
  },
  {
    "url": "assets/js/194.3d051084.js",
    "revision": "99fa19ab9e7828c0ea742880f6f78c60"
  },
  {
    "url": "assets/js/195.216ecada.js",
    "revision": "3038f30be699a54ae489e3df43965e32"
  },
  {
    "url": "assets/js/196.1c43e468.js",
    "revision": "20d9e88301532af4b56f7b3ab96b9ef4"
  },
  {
    "url": "assets/js/197.cb294986.js",
    "revision": "4cfb52253ab175506aad9083c5ab0127"
  },
  {
    "url": "assets/js/198.07bd49cf.js",
    "revision": "297b02a7e29a6f01ccc763624aa8a3c3"
  },
  {
    "url": "assets/js/199.c2670b40.js",
    "revision": "f35cc92c05098423472a76fb2a9d453a"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.ffc198bd.js",
    "revision": "d714db6d1ad16261940e5f86501b1585"
  },
  {
    "url": "assets/js/201.5fdcc048.js",
    "revision": "173746397195fb07f241c6e2e39249b4"
  },
  {
    "url": "assets/js/202.61cdd18d.js",
    "revision": "875e0494d4f4a47220b5685a94868484"
  },
  {
    "url": "assets/js/203.de226a19.js",
    "revision": "92ce34de35d22fdb3d468b1a6daf35f1"
  },
  {
    "url": "assets/js/204.fef4b9e3.js",
    "revision": "c8d07fc2ad72c0dfe083aced11c22f4f"
  },
  {
    "url": "assets/js/205.458d42fe.js",
    "revision": "a978cfbd0e8df150e24397cb5ece15dc"
  },
  {
    "url": "assets/js/206.2cad0187.js",
    "revision": "20f9d4d047dfb36a94037e1f765ba5e6"
  },
  {
    "url": "assets/js/207.a1df9542.js",
    "revision": "1e172d357c9686993c72bb71be7c43a5"
  },
  {
    "url": "assets/js/208.309216a5.js",
    "revision": "95d6c426225fcb34878ed00d6cba53f7"
  },
  {
    "url": "assets/js/209.ae28ab34.js",
    "revision": "ff8412081ccb745594369bd1123e3a61"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.b7d10465.js",
    "revision": "067d201b60737fa927962e4c4761b376"
  },
  {
    "url": "assets/js/211.24ad0e15.js",
    "revision": "d205baaba3d08e45e353299cd255fc73"
  },
  {
    "url": "assets/js/212.6b555570.js",
    "revision": "e9933cd902ab6c8fefc77a8da9881115"
  },
  {
    "url": "assets/js/213.1ddfdc13.js",
    "revision": "c37ad0ed881162b4de4f8004b47ae1d1"
  },
  {
    "url": "assets/js/214.4b820aa3.js",
    "revision": "11b93b31ca81f36d38ddce30b4a67bbc"
  },
  {
    "url": "assets/js/215.63c4740b.js",
    "revision": "5c880526b6607393a873be56c49d1fbd"
  },
  {
    "url": "assets/js/216.1ec63296.js",
    "revision": "7992cd71e0c1edf5860604ab3c074da2"
  },
  {
    "url": "assets/js/217.824ab08f.js",
    "revision": "127786b64eb71bb811fad10c1ed97578"
  },
  {
    "url": "assets/js/218.e3196393.js",
    "revision": "f28fd46a0106192957ecdb430df85906"
  },
  {
    "url": "assets/js/219.b2683698.js",
    "revision": "9cf8a8d125df5b1400805bf288dd9905"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.142b908d.js",
    "revision": "2c2578a3f06662bb5390db9567c48cff"
  },
  {
    "url": "assets/js/221.28fc8d52.js",
    "revision": "f387940db3e3937119e66edfc815a4ed"
  },
  {
    "url": "assets/js/222.388e3db2.js",
    "revision": "e5abc8947c24433ce78b5de997fe3c87"
  },
  {
    "url": "assets/js/223.7bb64a36.js",
    "revision": "06a3cc23cd5dc2a7ab7448b924b9b17d"
  },
  {
    "url": "assets/js/224.60a1d5f5.js",
    "revision": "cc7d2e9b2383b6054cc806af3acebc74"
  },
  {
    "url": "assets/js/225.1e681a7e.js",
    "revision": "939a41ae65f355e6ec5a4ffb7e9bb27c"
  },
  {
    "url": "assets/js/226.0db92ba5.js",
    "revision": "4cea7dd32926274d103d23d624ab3488"
  },
  {
    "url": "assets/js/227.b4880e88.js",
    "revision": "72f63915e92a5701b95d03594b94c682"
  },
  {
    "url": "assets/js/228.68ccac32.js",
    "revision": "6393ab65317fe9c759d9768174b1e1a1"
  },
  {
    "url": "assets/js/229.0f37c37d.js",
    "revision": "47220e08347c6100b2b632e0105451d5"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.cd3554ed.js",
    "revision": "db1bf929a4aeb3ab94964e7263ea52bf"
  },
  {
    "url": "assets/js/231.209f047f.js",
    "revision": "7f614ad3b3115b40a26cf19e117e73fd"
  },
  {
    "url": "assets/js/232.dcd4561e.js",
    "revision": "1f348476e707364092634ecb1892a10a"
  },
  {
    "url": "assets/js/233.e872e8de.js",
    "revision": "17a8191bbad22836878f11fa816b3d85"
  },
  {
    "url": "assets/js/234.a554a7f9.js",
    "revision": "ca53594ba259c8f643fa517796aef319"
  },
  {
    "url": "assets/js/235.300df836.js",
    "revision": "7c7a6bdabde6b62a0b5102fec8338c6b"
  },
  {
    "url": "assets/js/236.0f184a4d.js",
    "revision": "14dfe3f2c65fe6c0e71e05aaf30f66f2"
  },
  {
    "url": "assets/js/237.3391a4bd.js",
    "revision": "ce2edf80d715b7ebb5e753a7e69f5a2b"
  },
  {
    "url": "assets/js/238.8abb1063.js",
    "revision": "0fdcfe686c464f5ad108f996189d634f"
  },
  {
    "url": "assets/js/239.f6646dcd.js",
    "revision": "fb604029d1837d7d6cf48e35f179f04b"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.add1e22a.js",
    "revision": "f0cf276a5d1956c022013cbed9e05098"
  },
  {
    "url": "assets/js/241.34891216.js",
    "revision": "198b9b1dd4f3feba8dab856cce28027a"
  },
  {
    "url": "assets/js/242.136c2f41.js",
    "revision": "7d684e3816e050955b3033d2eb17bfa5"
  },
  {
    "url": "assets/js/243.7ba69eee.js",
    "revision": "0d6b3f67fe246895b00aa2bbf5f666e1"
  },
  {
    "url": "assets/js/244.d5dd4dcd.js",
    "revision": "5477f1af38949c6f0776b193a66aece0"
  },
  {
    "url": "assets/js/245.bf6f8eb5.js",
    "revision": "2129a7a62e5647381685fa37a388b55a"
  },
  {
    "url": "assets/js/246.24fd5f3a.js",
    "revision": "0583daac387d32209ac311745f788929"
  },
  {
    "url": "assets/js/247.17ec1235.js",
    "revision": "2aa6a5639521963f477e30a1356abb61"
  },
  {
    "url": "assets/js/248.93291051.js",
    "revision": "a6f7e06b908cd78cf43c8c0d8ef1807e"
  },
  {
    "url": "assets/js/249.41d8625d.js",
    "revision": "05d0d6cb8eea24eb9c4bbd4b2a379e69"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.6d4b74be.js",
    "revision": "0f5660a97e601d9957c1c1d143293ec4"
  },
  {
    "url": "assets/js/251.2abf5298.js",
    "revision": "5b9f0d3c2d4ee55ba9717af2ad00f488"
  },
  {
    "url": "assets/js/252.4722244a.js",
    "revision": "a6d869c1ed698a8dfe7758c23e8b7817"
  },
  {
    "url": "assets/js/253.41878d28.js",
    "revision": "98e3f0a0e58fa5527cbc5a958b9f2329"
  },
  {
    "url": "assets/js/254.0be7b9f9.js",
    "revision": "3d8f59994e1268cd4113742fc2c7bbc9"
  },
  {
    "url": "assets/js/255.a6d0fc67.js",
    "revision": "556dd2d813dd220fc4c7f21b463d9561"
  },
  {
    "url": "assets/js/256.4ae9d02b.js",
    "revision": "9f2bdd65dc580038f509586aff9a3a1d"
  },
  {
    "url": "assets/js/257.ad8c39c5.js",
    "revision": "e649f55073d2e5ba481a89e2f1af3e41"
  },
  {
    "url": "assets/js/258.2ad24774.js",
    "revision": "92cc8945c4b12fc180fd91c640badb8f"
  },
  {
    "url": "assets/js/259.a2882eda.js",
    "revision": "c7fc000e453f24d79585af05bd53f7b5"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/260.c0cab09e.js",
    "revision": "5579c46a1cb95c9a4a55596b892ddfb1"
  },
  {
    "url": "assets/js/261.61ad3e5a.js",
    "revision": "23fbd8344b96b5345aa1c129816f9a31"
  },
  {
    "url": "assets/js/262.18b1e88d.js",
    "revision": "d00fd80a0b6c9f1b1700990b46303afa"
  },
  {
    "url": "assets/js/263.d4f78f52.js",
    "revision": "6a550c363237a2b8ee9c37e787709582"
  },
  {
    "url": "assets/js/264.c509e992.js",
    "revision": "1bdfb999767df1538aaac0ecfad62f0b"
  },
  {
    "url": "assets/js/265.1b12592c.js",
    "revision": "2bb386157cbdda4c21020d224178e815"
  },
  {
    "url": "assets/js/266.c6a63c41.js",
    "revision": "0134149898e76290844528cae6ed0494"
  },
  {
    "url": "assets/js/267.f2f25be8.js",
    "revision": "4ebe681534d581f62201e23ea3b02833"
  },
  {
    "url": "assets/js/268.f731aeab.js",
    "revision": "b1aa6da6dbae13f7bd7e74edffa29657"
  },
  {
    "url": "assets/js/269.e2b14f71.js",
    "revision": "3f77e13dfcebf7fcfe31e379f853a40a"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/270.ccb78ec0.js",
    "revision": "8fcf9a31454ab2dd38077039ca76f390"
  },
  {
    "url": "assets/js/271.c0a39c8f.js",
    "revision": "c9319bccaf409648c2ee0e9712e901a2"
  },
  {
    "url": "assets/js/272.248248f3.js",
    "revision": "6ebcc40ffa3441cf2e07f833ef3f73d9"
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
    "url": "assets/js/53.a14deeda.js",
    "revision": "728c11d007ed258a978c1b0df966c4d6"
  },
  {
    "url": "assets/js/54.f16fdb88.js",
    "revision": "dd88bb0fbc679f9b598c729c60c2561b"
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
    "url": "assets/js/85.6e30e492.js",
    "revision": "eda6fbaf09d87a74445229c0c41f256b"
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
    "url": "assets/js/app.d07c872b.js",
    "revision": "0d9f3d9dfee5c3210d581ae3acb1bc58"
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
    "revision": "a2eefa0b5afd6f6f3c9462a2d805a183"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "abe93829cf1efc7a603dfe8dad6b8a53"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8962b6fea47dd29a70daa73be774d64b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1f217a21f967de8824b31a775e6a5a8e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "89fcd3196205e126fd213c826f635107"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "101115199d4b0e9cf8120df07362a1d0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5e9ab5c2c5a6716e1a65dccd71381379"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4539a6a91bc87a4f152775811eefa10d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ce80ab3ab526b1c7357170dfcbb3bd1d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8671942202eb12181ce0630f087633bc"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0a63b34731ed7582647a51a46f9f824f"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "60de34eb826439faeea75d402ac6df58"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "f5d9b79673fe080e73e523959ec3961d"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "b86d60881dd9b4ea6b4e8298888ea2af"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d8aad3dbd0d082c1c492aeb188166329"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "7b7494cf84c1766d73602d04a0634d20"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "ac9962eebd2bf3b5acaef3da51e4c285"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "083ced5a9dee0e262f71ad605155a4de"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "f807eb8db53f06a066520490c1108818"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "5db8db7d543529779f22b7964ae2b86b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f4fe234bd5aad00153429e0adeea69e6"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "f19f689d7e934c733951076390dc64de"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "9d1a688ebcb5f4a615456ce8b1d1942c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "70f5b28a3ac5f2522b64f03340c4445f"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "d3229625aefa6a5507d31ade7c5d55e8"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "9128c6023e65cd57e6afefde0a8d5cd4"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "88b989421ebfb153ba11731ae652757e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "b0c18564a88bc3a976d5ca07666a9ab8"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "939e05b4774cb7f1e4befab8ecfe1628"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "2509ce677e853b1a898d1222ba1cfe6f"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "7cfdba96148a8714d285289d347edba4"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "05d6a597ec7128bc1225318d46099d86"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "65d6661deb6bf948e9ffe6ed1a119b5f"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "8e99cab7d843a0543f07ea2ed7e1f487"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "7613da6039df0f82eaaa916d595a2ef7"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d9f78e6aaa39997c3e0d12faf32ca7c8"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "c1c3add60c75d6c8d7ac10790fcab58c"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "961876a0e1175963acff885505543058"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9b82244e91cce7192faa2a22a2d73476"
  },
  {
    "url": "basis/os/index.html",
    "revision": "74c88547f79de6b724ab74686388deab"
  },
  {
    "url": "book/index.html",
    "revision": "2daf71fced6f3a0fe5e36c53068b849c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "aabce129f9acc6d216a9e80eeceff952"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "5e199b8254acb92d1451a63c78caca3a"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "30738b2935d2c2e23170fc970d17aeff"
  },
  {
    "url": "c/audio/index.html",
    "revision": "259a951ff9070bdec7fdd7e7dbcf5947"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "dd7786b59e777686217828a7f9e78225"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "fb9de0759e8a00d5d55b92b02bb517af"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "b157374804eceac788d42cffaab8aad6"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "59c48d3c37c7ece97387b03a2fcaf54d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "aad03e0807e9298eada32ac59dcd515a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "90fe957fc6144f1664d99bc6f7f7f1d5"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "d160c5c08a6a8cb21e809abd6af2f960"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "2cd9cebf76610454f02daf13b394d694"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "1f6e779785837740860a35ba5ed72c8e"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "1c18a413ceca76dcb8499d7d8c4c0149"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "64477b7cf7203da907aa352790a4873c"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "e7a1d369369563bf22aec56e00d4b813"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "7233046c4d1b3e1ef2d8e79bc4863c99"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a54737c2a2d5db2c2ff0a5f7a54e3345"
  },
  {
    "url": "c/program/index.html",
    "revision": "6906b8a8fe085e30ed786df7624ded62"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "082201cde1978b7576f4f02560f72188"
  },
  {
    "url": "categories/index.html",
    "revision": "1ac34fbd20888fa97dad5d19a6c14709"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "8694957cfca0b5c4565a1cecce016244"
  },
  {
    "url": "figma/index.html",
    "revision": "1cc216fa8a57d1e9559907a82d893c73"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "802d3b315bb52d5685781bcbc492ab67"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "0a0fe7ebbe1bbdaec5fa987607145529"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "498e39a4122edb4eec4e4c0d550f4c5b"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "3ae35cca3df4eed85f6e514068618a49"
  },
  {
    "url": "flutter/index.html",
    "revision": "e14b74c633dc29f546e8d44e1d7ecde0"
  },
  {
    "url": "flutter/point.html",
    "revision": "bc68d91ebc793436aac311e72dbeaaaf"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "35f93b7515b6f84ce291a8385d1be11e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ce0d785a95e03d66d00f4fe6db2fad86"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "59106396f3a4201ab12a74c0c19aaab7"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c02aba9ced327a4343c8e71f4349f440"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0f1d926c724e49a2b257b2d1425728a7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e6155f3bdc9f0ebb2a6cca51c63f405a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e7a8855ed86620d3bf541c93bcfff07d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b604e6c460345a82e449bcb4357df6f4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "b721aaa9e6a70f642ce652a2245be49e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "675ce58b8a2a5cbd77ad20862752bcbd"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a00a9d6986a5b61895e5d545814671df"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "05482fbf96e99cfcc1510da341419a40"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "adc5c6662b880d0644f70ebd400d6ead"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "8c3cc831cb8edf9da5f3593519a67422"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "4c5f038e6190379b5c5e9a24d4cbf26c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "9572980d697ad0fed623c64908c9c577"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "829118ce1341705a011818c6ba4d2257"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d05995a7379640c63cf0489e385b47be"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "5227722f7eac2064c9983eb8ccd9ecc2"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "b0c70ee72719d912c2883d864299912a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "cf55002459cb5aac54a6d5b208c62bbc"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "f0ff64a4df226ba6e82df2704e43ae96"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "048789c4376524b2538ae10d11dafdeb"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "60efbf545c2ff553a3bccd39302de2cf"
  },
  {
    "url": "haskell/index.html",
    "revision": "6b20a57f5eadf22f9d9eca9e6aadbca2"
  },
  {
    "url": "index.html",
    "revision": "93d8212909210d9ac301fb048808d04d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "09bcfb29fa7aa73f57967cae676263e6"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "dcf87d0ea27be8f48f3984dc7af3893f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "93aecd68e46f623d28706db83450e532"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "eed50a030d554a7ab6148fb05454fa77"
  },
  {
    "url": "python/index.html",
    "revision": "2d46b3d0ec9910a072d50702a73f4464"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "02830e31598b5c99a40609f9035c1773"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "b7624be448d385eb41d1bbbcc203723e"
  },
  {
    "url": "python/python-file.html",
    "revision": "427f6b3e38f9f4aae6e865cec0ed08ef"
  },
  {
    "url": "python/python-function.html",
    "revision": "b1dbfb1aa78c241cee7e8764c8aa4def"
  },
  {
    "url": "python/python-generator.html",
    "revision": "e94e735d6becf5fc01ac4116efd69fd6"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "15b0a94520c9561c4196c925696f4a3e"
  },
  {
    "url": "python/python-module.html",
    "revision": "2faf1d45a3408f536305c243769ffc4e"
  },
  {
    "url": "python/python-string.html",
    "revision": "3426176fb6b9771f5bd0607a7c654cda"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "be943ee1e136e5f67af3ff7717232155"
  },
  {
    "url": "read/index.html",
    "revision": "3e9d87aa1743ce00e9c47979cbce8fea"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "6d81fb3b357390b8c458b179db050e92"
  },
  {
    "url": "swift/better/available.html",
    "revision": "f326c7533d8f6a1550a914d3e8baabb1"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "f435d9f07c35ffe316c082ca1425756f"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "ec82e1538886a6fdd90f77a3e648cc06"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "dd5aa613cd0130add2465fcf4784e6e4"
  },
  {
    "url": "swift/better/di.html",
    "revision": "cfebe654c54fd005d6c9b1eaf3ad53db"
  },
  {
    "url": "swift/better/index.html",
    "revision": "32cdffddaa8c1489209eacb48ebdaf0f"
  },
  {
    "url": "swift/better/last.html",
    "revision": "42b4eebfd36dbab463421e26649c1938"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "64a8588875198860caa9aca790cfd29b"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "1d0d69842a9b5fd965383aae3ea44900"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "04726f63fc390ede2b1ad6992b1f53ce"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "1282dc491168e4ec3c035a9f0fdef7f1"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "544cfc33b74dd4cee5d1230d5f8f6d25"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "b610a96890becfd6fe493b131444aa7d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "6f8e0ccba0a4f03a02f46202730e2582"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c89ed6c74f2d2ca783c4d8f049a0f64b"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "64c97458dfecf7133e42e6227ebd5c8e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "50151130a8e347a72f18864a65e49ed0"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "2c0962e7dcb875a24f1d1cf4bb04b4c7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "53adf8a58ad6609e77ef22b72a2006be"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "89017b521701174f2dc30f027fe7f34b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "e9d40ce2e5d2e58f02839d9a1b7e6df8"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "f7f2c4a1db8bf0431512e1224f1712d2"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "eddb83cd7932e06d82a6f61cd1fdeda0"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "f36606e059551bb05495d417684b895e"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "adef1f06c410f09b6c86d21c60b3e575"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "ee80f7a55bf74a884b7b48791edabacb"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "d35b6721ac2e2bbcdf30b9c5c27e443d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "b460ad00f25f421277ce7c80a2e81465"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "580986246dd72591ba855f6682682457"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "41cbb37c66e4e44b57bc7b0faf566031"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "0acb0b9df4c2cf414e7f99da9a80444f"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "d057606a9c0d563aad77c7ff26db8988"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "9bfc8423c1450984005f3e5ad0fdf70d"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "6819eba48d584c5b2c89a352a66f5162"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ca42a44d567dc86a7861944ddaa27af1"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "44a2b92ded9b5fa28b0ac7c29074f2f3"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "3d21cbae3c079d63f878fd7be545845e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "65529b5f0ffab7ef49a311f88b92b412"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "60123ba6b6786d8fe50c05c010b980a9"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "449164969617b5c5b505940c2fd3c798"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c453ac796b583b9c2a8f642a95ec14da"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "0aa74453b5d485f575b82a253c99d824"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2b4ef3bd2ea487a5c2dd58ea029a7689"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "16471ccbfaadf94e97b08c5fe20dc440"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "765c57be102dc3ec148ce17f2379834d"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "c788a6e4a42a26354f436addce9e7786"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "cee54a7ba7a121de6d80f7b68d021d60"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "390abb3e36437c23154a9bce275d3e8c"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "e6c814b1eac34b6e533f7075f6b07a16"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6f8b58d26627187b7c247a81cfd7bebf"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "77c19e814f42bf3b30eb7e06f6821888"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "885156cf53fd440e6b72a94121223ca4"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "2cc18ea6a41c339b5a5cf7e193160731"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "46ec69ce77c506b9f563163a72b07874"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1c99ca83fbf9b19365a39fcc67d45d7c"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "dca92ed0cc4adb48ca3b91303d2b53e8"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "0df4f303942b1bb8e5fec59e6ca43b0e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "7b1cc7e272fc4a09d3170b618c688f08"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "90d766729abc5c565be2f9f7390b65d7"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "5d11f06df30bb2fb4beed7e3e0110c77"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "8d61bc8184a2e80dee5ac7db31e38b1a"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "73df0cdfe1e76f71dc4f7991b5089818"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f526e5071627f187a4081bd878137a95"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c922b7abaed0a6cdb21fa539ee58ac3e"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "901a90392f4015bb6932b48e36a473c0"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e6ad0e7e82a3be0a6ba67a2d0d2c5ccd"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "deaa39a1276340c36aec7df2713a0e81"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f72c60e03817b6c6dda4f7abb18b1938"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "e003f05fc4b9c42674a637002a9a6c8d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "d22ac16f3c09e9a1936376d9861db451"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "a5e692207d1b19b84116b90df11e13b7"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "42b62714b3295242bfa0c9a61a418f4f"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "b8a628a10d42061cf5356bc5ef375b7e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f113c33fd27692fedebe0d13fc34df52"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "57ed5c4b7ab61679f963325c59894309"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "ef0cbec2fba9ccda9460f1b9e90c2bd0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3e46993a3f0b6e7e931cf802cfdf83f2"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "d00bc9a3321f838f786188c067920fd8"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "6bb7f104e27466ecd900df2f81978f22"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "23fbe41dd71a086277940b8cb48783f8"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6f85899dd7d6464bc7e8cd799bc4ed54"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "a898291f8df6f05485db21f921f03c1f"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "846f4580c392875608f721bd0ebe6923"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "1d304d6cee8804d9c342dea04b68e132"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c9c1c7534be772b35a177fc77464a87e"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "65ca6b87f78fbe4a2d0242904864a7b5"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "c3fca3778dfd2429855ab34d46f83cf4"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "18fad1cc7f552f4f33062fae6ed33b94"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "5c6b1a53b0efa547e1e830680b66e7a5"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "e5ea9064906df9c494cbe427fb53ed1f"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "6f39c8639e04b82ff833309372e602ae"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "e140305ef8365a8be7d6f4708a1603a2"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "502c703a072cebd3aa220fab735f4c4f"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "24eced819ea8c14f9198647e20ba2cd1"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "39fe88c9ea518ff774bfd61b2014f270"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "61ea963e5d8dd5baab187f26fa7bf27a"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "5fd3cdf927873accda6c0b3b2d0081cf"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "0ff745775deb53ab3e7243c949a50707"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "f304ca40b42a9140c5da85ff7e333c89"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e13c7f80e9bbad4728688f9e62f3198e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "3a9f9baa3940575c7732a77df3550726"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "1fa85dbeadcd14ea08672c06bc6a9a2f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7ea71716f4e9d308c0be3e2205a50822"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "428e0be1893cd9ace2668768ae3c76ca"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "49e24c44d582ddada67f69655ade6ed4"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "bff85f9422a541e66c551bd1a5d5f875"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "c5242c39b821b2e711b7c5a3789d7365"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "c1eb340edd8e93cc34c6b7cd79ef9983"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "12fba2aac9e65626b1c7a1df25c50223"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "009d3916d4a5c97180bf0e3190f502a7"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c0037f89f4bfaa775fd88273c5fdb69b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "67126a0b60075ec390fbddc373754efa"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "00359ee44788be214e0fd0d61e82ffcf"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "92192b3511432ce7ca42a504e4c5307c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "cddcba5748ad02faa96e230a9b3d80ba"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "a9e98f44a3800f5d7787c9b3251fc95c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "1b4f4f28797079e1032ec60fdb6cd7b7"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4388d7bc01d6f6e2e802238e53c49e92"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b0722263dcc98bb037dca2b81a6293e0"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "2eeb5f067b6f2add5d97015c2c346973"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "9265a8aab93b92caeaef0535e8ad5698"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "726cbafb47c407d40e3e661673665313"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "77ebe2c17313f0430141cabfe39605b2"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "71cf05a900ccefd70b89260c0b9d177a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "22eb7d46ec66860e911bdb73a2ef661f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "8583fbf1dbb9803adb440a1b100e140c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "4606b4be611caceb436987d41b3f9f99"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "94b8ca75289f5461c5e05e0cd2d6d898"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "245dae40efadb616bb5a2a3bf3b448fb"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "29009e5fd6fffdd73c942e018f4346b5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "64b07b8c3c52b50ab50a16460ee54d59"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "2bd37d4c787a59ddfbcf90b95647a8a4"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ae994dabd38fa106b06e8b3716a428d2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fde58fe79a47439db9f7cd807eec74c9"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6b5913df361f0e9089ab568e23ff4156"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "da0f6ff0df9c86364f9eab400ddde3e3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0ef9b9310227b17b8ef0356439473944"
  },
  {
    "url": "tag/index.html",
    "revision": "80d0c61c887f482a77b775a6c215f13d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a6633ceb19e256633932f969fb90878c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "eeb3ad375a2d9c1716a04bc945455666"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "7e2ce0cc31b2ae8404adea951c02a456"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "0c6b7cfee05c93670de1871d9f0b0632"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8a2be740d3993914f7b0e624a3adb748"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "6e8f076618e292c4b1b993c29e1700d8"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "d64fc3453beead2bafdb7b9314c7e4ea"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a1610fcc6eb0531af95488775e7d19c8"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b7caf65a47145417509e23a02df97dbb"
  },
  {
    "url": "tag/json/index.html",
    "revision": "5872f19ea0bb3ca03829127ce8375c35"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "72ed5b45d37bfbe05f3df3d3b6a97371"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "0757e02cb543699705365a033894211d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8d52fd97e83f3f0d06ad1d544afb3195"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "7df7bd1ea9866cfde4be8440f8e945c2"
  },
  {
    "url": "tag/read/index.html",
    "revision": "2c661843f37e1c4996ea80e4c704934a"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "5a6d5fde0a5d0f8b00c412d145135a51"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f9ded7171bb811b797c45d4585549459"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "6fac76504d49a0bc2a571ae1bbf82e2d"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0d3a23bd3c373dc02b3aa9a5154ef1dc"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "719954537e2fdb2a12f695e829864697"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "3ccf12f055fb11d2f3cf004610a849d5"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "50234ba3faa8da9be60d9f27d7095bbb"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "d9d3120f57ac266e6c43e7e86a4b2abc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b89c4d409fb6a82016d077d00767df97"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c3a0942473cd189563e9456c7d9c06fd"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "52156310de2f9d264458d25ed72d8250"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "e708611b3b6b054484d8b43f0e5b38eb"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "9b3d936f7717955142de7da448ef69ba"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "537097697daac6615011d418fb03ded5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "bf680bc846e7e6f58e347baa8b1d4a53"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "835596b896eca028e4f6212b6f73b12b"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "782274e055aa88b3e61f6c455b98b3ff"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "91c04df8497e823d245c9cbdbb6d3d8f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "254fd4d24b6ee0270bf425a9b6961104"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "99969548ddda9844270ba9ebb50b5e69"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "d2b4af62cd1b9d06caee5b1bf69751b5"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "d1da6bf021c48d743d6a5a483ad46248"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "bff578adb45646c4f8834a25a933888c"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "db721bc59adbc14b00cad4d5f424c77d"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "2f55cff79789678485e17632fa7b45a2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "45c7fab001cf29e0e9b300cc9b0b561f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "eaf0dfdc593bbe496c65ea400fcbf049"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "390f38d617ca2cc5ca1a6faf30edd860"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "80b15c90e5e94d8591660bdb0f216295"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7b2f26ad55262e25b91c69a2148ef583"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e987ca23d879865d4420f9045046e960"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ebe0653c803202e935c9b09a346b726f"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "f9c1de069bdc70a476e84a20e656261e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "25614ad1ed5ce4b9fd12c74b33b0132f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0073348b90b3033cc08904995eb14a44"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5581c068c73ed738ec5e6a2861fd7ee5"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ab49791db21ca6bb6a9721b8bdc26f54"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "052052441e87a66b58afff8a4405092d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "310e7d7b9afcb3c61b04deb2af50a0e3"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c455c77922138eeeff22accb080266a9"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f01d155f113c52f974e7acda88cc2db3"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "7e82e75d33174151c0d6f75ca3ac250f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "8f6b8f913bf771b3c5278ccc91ac3d1a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a6ba3fe3de5c45a6cda78c3bb2db8dc9"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "783ea4d0a51f6f08493a262ee4372ff7"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "77ea6c374fa99327fdd428c59ae63f1b"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "ae3c2142bbc730c9458ae3bd19368c12"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "37538e2c0c28d4ce8986e0c3b63fb9f6"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "adb3506fb2d0698242ea6f7901b8ee38"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "8acffa54a525daf25eb729e83e1ce7bd"
  },
  {
    "url": "timeline/index.html",
    "revision": "3826fa9dd239a5c758b5faf2b04eed10"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "c8f5f893efafec2f7c805e7fe9e4ae5a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "6ff5151887a03dd7b720a83e6f2593ce"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "ebc522cb26a8312eb2ecf16f87c870f8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1fd44a32759d1a07733883b6107f76db"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "55b5055ec7ae3a148b93b046320535b5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "605e81c2314e31cb478b80d7f5126ae5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5b81ffb5783926eb805bf8ff16552fcd"
  },
  {
    "url": "tools/note/index.html",
    "revision": "a66783f8a5a602094ebba365ca96cc7e"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "f6236d66062eb70392ceb2533199de27"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "2268451eef51e69456c6acbac5dbbfe9"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f06bed8ec684b4452872fe53fe07460d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a7ef7971b9aab4a0de2d4de62e740649"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "5f6b97136edf4735a53f0258200f22a0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "bd8ad3b5c6be59cad06db4bd0e3982a3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "40d2c0dc4da3e4e212a93c0471e82e45"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "4f4abf180843be6a0b0e6d2e0e8c2c84"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "cd3982f83ab4af0f3ad8eb9988b2963a"
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
