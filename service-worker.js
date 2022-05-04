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
    "revision": "74550ee205c7fe46db4920a6490531e5"
  },
  {
    "url": "about/app/index.html",
    "revision": "4ebc374712a5e3a0ded0682df7fc24fe"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "15c0aad43f2520531a51af8c5a494735"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ed8a0e30613bc6853bb4d5f1e7e837fb"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7e0304c584a9db5226e636cf50059581"
  },
  {
    "url": "about/index/index.html",
    "revision": "dcaaea3995e4e74cea13f04648113924"
  },
  {
    "url": "ai/index.html",
    "revision": "bf51ed6466243619566dcda0426c6593"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c99ad4d1dfb05d8f8525e92bf0f86266"
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
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
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
    "url": "assets/js/123.3c883af9.js",
    "revision": "bee9cb209cf76e67bc6ad1d9c7f103be"
  },
  {
    "url": "assets/js/124.1a41a40f.js",
    "revision": "0a5358edcbf956848e290f27e8b70961"
  },
  {
    "url": "assets/js/125.1f5f88fa.js",
    "revision": "c56596ed6efdd1fef36b1ce3d19ae7cf"
  },
  {
    "url": "assets/js/126.d62a1203.js",
    "revision": "a9f814b463b18830ccf9e279687012a5"
  },
  {
    "url": "assets/js/127.ef7180fe.js",
    "revision": "7b5b45886497910c07e3d11adc17b53e"
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
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
  },
  {
    "url": "assets/js/130.586f389b.js",
    "revision": "102af36e7da21c2f99e150ed7001b098"
  },
  {
    "url": "assets/js/131.9f735a92.js",
    "revision": "ffcf8b39662d6e3b96062116df1b19aa"
  },
  {
    "url": "assets/js/132.04f9d07e.js",
    "revision": "ea367e2e8dd763aa8d383379a27a1191"
  },
  {
    "url": "assets/js/133.33ea9f13.js",
    "revision": "25aeefd505448374aa2995f9722d991b"
  },
  {
    "url": "assets/js/134.79be8712.js",
    "revision": "1a064dc931cb41ced894fda0da5b902e"
  },
  {
    "url": "assets/js/135.9ebb9f2a.js",
    "revision": "3e309e88bb05b524f68970917bc4a694"
  },
  {
    "url": "assets/js/136.4ff90afd.js",
    "revision": "331602855fc051ab92610ca35e50aeae"
  },
  {
    "url": "assets/js/137.1641d7d4.js",
    "revision": "36a52e88314aee882e58c8331a291207"
  },
  {
    "url": "assets/js/138.a2fd2dfa.js",
    "revision": "f38b990bd896dac921f9693cff3d9d45"
  },
  {
    "url": "assets/js/139.f60198e3.js",
    "revision": "97e8eab704ec8fb9643ffc0408174693"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.2920b695.js",
    "revision": "e0601e9727a999740a76707ac773a001"
  },
  {
    "url": "assets/js/141.6e10d07d.js",
    "revision": "0ea21bc16f7f985c948e88091c7ab69d"
  },
  {
    "url": "assets/js/142.c5702e36.js",
    "revision": "39a0f68d57d5515821f3029413e654a7"
  },
  {
    "url": "assets/js/143.4bd980f4.js",
    "revision": "aafeb46264b5252874c763e122087407"
  },
  {
    "url": "assets/js/144.b1fa1a07.js",
    "revision": "ab0fdbbf66cb5a2957cd0d8b36de7147"
  },
  {
    "url": "assets/js/145.8bef7b3f.js",
    "revision": "ee2f41a27547b9235788f8b19709b56d"
  },
  {
    "url": "assets/js/146.c2a67c9a.js",
    "revision": "cf6fdb4e5cb8268ec5ac8715c76fbf09"
  },
  {
    "url": "assets/js/147.1d03499d.js",
    "revision": "3685f4f4a130abdf781c9b031798e607"
  },
  {
    "url": "assets/js/148.cb7417f6.js",
    "revision": "b41eaa3661953c6115dafa2d581d3321"
  },
  {
    "url": "assets/js/149.1f77cd83.js",
    "revision": "f87a6525be3df579e6dc31a09a5163f0"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.6687d903.js",
    "revision": "4879cb69a76ae9dbee8044f2bb491610"
  },
  {
    "url": "assets/js/151.d5386657.js",
    "revision": "dabe1a4d35ef03ccccf2f8e272207b70"
  },
  {
    "url": "assets/js/152.524a107c.js",
    "revision": "61b849f487e4474b0330a431f6b67f66"
  },
  {
    "url": "assets/js/153.5dbadd3a.js",
    "revision": "3b38f9aa064faaa0dc1a392e44daa94a"
  },
  {
    "url": "assets/js/154.37a29609.js",
    "revision": "fbbabe5106d793168349b7618ad68218"
  },
  {
    "url": "assets/js/155.69894465.js",
    "revision": "130180fb4fd0c7d36ee073b8522df2e2"
  },
  {
    "url": "assets/js/156.d5c03a82.js",
    "revision": "1b69820840a549d8f6b9e2f7ded481d0"
  },
  {
    "url": "assets/js/157.b80c8b16.js",
    "revision": "98f763a2b09e15503ac3972364f217a7"
  },
  {
    "url": "assets/js/158.8e09d48d.js",
    "revision": "82091b6df4ca05e98f01b92cd5dbf929"
  },
  {
    "url": "assets/js/159.e21d14df.js",
    "revision": "065d4d3aa1180e53811f4294db07b1a7"
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
    "url": "assets/js/161.47e03b00.js",
    "revision": "db453fd9e814ad365044b082f815ae9d"
  },
  {
    "url": "assets/js/162.e06ca638.js",
    "revision": "f8d35ec2840f93dfeefcfb2fc24c2895"
  },
  {
    "url": "assets/js/163.d619b3b0.js",
    "revision": "22648ba027006ddc4caa74896efa573b"
  },
  {
    "url": "assets/js/164.6d659763.js",
    "revision": "5080d4eeedc7291e74374018e4727d75"
  },
  {
    "url": "assets/js/165.a7da3863.js",
    "revision": "190308288bbe5e2d82342a927a3a4b7e"
  },
  {
    "url": "assets/js/166.f0b1747c.js",
    "revision": "69efbc27fc77a00dbd94477ee9ebc07e"
  },
  {
    "url": "assets/js/167.dabeb6b3.js",
    "revision": "a14571e5951cf3815333384e4476dbd7"
  },
  {
    "url": "assets/js/168.700866cc.js",
    "revision": "2323da83ec5ecbb2caac5952b2536cac"
  },
  {
    "url": "assets/js/169.bd21e066.js",
    "revision": "b42789d7bfa8c686f68f40f412a0d369"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.6ba9543f.js",
    "revision": "917eb6482c6fffb86784a7f499a0ceec"
  },
  {
    "url": "assets/js/171.c16c57de.js",
    "revision": "d111efb2a6f7a1ff5a8eb83515f5c4e2"
  },
  {
    "url": "assets/js/172.9547f07b.js",
    "revision": "141fe2742ed26072aa64637495e7156c"
  },
  {
    "url": "assets/js/173.35d94333.js",
    "revision": "fb91acf94a4eb07f9913f52d80a1d4a8"
  },
  {
    "url": "assets/js/174.e144b7fb.js",
    "revision": "e0f14193d6986be6ecefd52cd68af141"
  },
  {
    "url": "assets/js/175.eab7ac04.js",
    "revision": "76322f006f08754f9c59714fdf665a43"
  },
  {
    "url": "assets/js/176.7f39be2a.js",
    "revision": "90d960c7b0dcbf7d2a19ec546dbd5125"
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
    "url": "assets/js/181.525282c7.js",
    "revision": "8db8c193567b82bebbda9282b81ceab5"
  },
  {
    "url": "assets/js/182.7e493282.js",
    "revision": "8050b11d9cee0524fe75d3a0a88139f3"
  },
  {
    "url": "assets/js/183.ffa45a98.js",
    "revision": "60e7440550d792f797b9808ef20a76d9"
  },
  {
    "url": "assets/js/184.78478ff0.js",
    "revision": "586e1d07c6726e6e87cb7864fc095cc6"
  },
  {
    "url": "assets/js/185.3b40f5a7.js",
    "revision": "287e7dee3635394b1ae977c57fc1f8cd"
  },
  {
    "url": "assets/js/186.6442317f.js",
    "revision": "df8212231378ce8268317d391dd93143"
  },
  {
    "url": "assets/js/187.cd95811f.js",
    "revision": "7663f1f6e2074ba964ea07d9bf5714af"
  },
  {
    "url": "assets/js/188.45635c0a.js",
    "revision": "bc16eac80f812473c92684868413323d"
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
    "url": "assets/js/190.ff407e4f.js",
    "revision": "619743a848d0c21aa7be7643805c3b2e"
  },
  {
    "url": "assets/js/191.569343a5.js",
    "revision": "c4174ccbcaaa96716412e3445ce85d92"
  },
  {
    "url": "assets/js/192.86406b1a.js",
    "revision": "7371ba746c443b4b9eb657ab7f447806"
  },
  {
    "url": "assets/js/193.a6783b3b.js",
    "revision": "c5271b31faa170912657d0bf34a8000b"
  },
  {
    "url": "assets/js/194.198f405b.js",
    "revision": "c9a1faadbb933f1a816bb57620c06e51"
  },
  {
    "url": "assets/js/195.8f2ffe23.js",
    "revision": "a0132339a40c00e63b980158e54b6ab5"
  },
  {
    "url": "assets/js/196.c6553b65.js",
    "revision": "42f9d74a4ad54c5d30ced70987e03251"
  },
  {
    "url": "assets/js/197.fc03dfec.js",
    "revision": "0174668be5cd37bd645d9647a0f3baee"
  },
  {
    "url": "assets/js/198.54b8ffca.js",
    "revision": "45e15f5e158e863f538f84980af51f0d"
  },
  {
    "url": "assets/js/199.25493be2.js",
    "revision": "5494c1e0432fe7ba4a1625b6d32124ba"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.11f030e0.js",
    "revision": "f32cf9376a512c044203f801a97a7bc3"
  },
  {
    "url": "assets/js/201.b118c91d.js",
    "revision": "e3da2557695be216ea89f627b64d98ed"
  },
  {
    "url": "assets/js/202.08b0f288.js",
    "revision": "b0f7b891e18eeda373237baed155012d"
  },
  {
    "url": "assets/js/203.cf471982.js",
    "revision": "9a2c1a01e24bdec3df2158997ca91421"
  },
  {
    "url": "assets/js/204.1d0ae6a2.js",
    "revision": "9ae195a6fb89c06e1b87a8783cf52a5b"
  },
  {
    "url": "assets/js/205.17e1643c.js",
    "revision": "d0136a7153b54c2e21f7e3c9b267d8df"
  },
  {
    "url": "assets/js/206.f35c8911.js",
    "revision": "4471afd38676c5a9b2744c7553d23f1a"
  },
  {
    "url": "assets/js/207.a3d92a18.js",
    "revision": "3659747d21d76571d4d400a4e990e1cf"
  },
  {
    "url": "assets/js/208.34440831.js",
    "revision": "b0355c6cfc82a94db501efce63fa1f63"
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
    "url": "assets/js/210.6b22d84b.js",
    "revision": "222f87e2c3646052c5313ceb949244e5"
  },
  {
    "url": "assets/js/211.9e572904.js",
    "revision": "ff72c96dda1551a7e1cdfb2152528d24"
  },
  {
    "url": "assets/js/212.e3f0b9fc.js",
    "revision": "b24a2f084d325035df2a7bf17dd10a70"
  },
  {
    "url": "assets/js/213.09de4cd3.js",
    "revision": "1632856d1a6c6f0c6b047c48e470b118"
  },
  {
    "url": "assets/js/214.949b27c5.js",
    "revision": "ed228bc17edb4a3a5d99b9b6db332e61"
  },
  {
    "url": "assets/js/215.2a6ee8a1.js",
    "revision": "ba7f92a9e42b67626547bcfb02a6e19c"
  },
  {
    "url": "assets/js/216.5adc45c9.js",
    "revision": "bf3b23402d2b6791172b365d6929948a"
  },
  {
    "url": "assets/js/217.80e1c8ac.js",
    "revision": "ae146d86ae98b40e465d8bf9ced17d57"
  },
  {
    "url": "assets/js/218.bebbb6d6.js",
    "revision": "82df9c13d41cc0c79f0f68a2432fd5a7"
  },
  {
    "url": "assets/js/219.d876ea67.js",
    "revision": "b78037c394a6db1845301a34fd840a8b"
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
    "url": "assets/js/221.aa6db741.js",
    "revision": "75b09579439fbd5021951f5423b88dc3"
  },
  {
    "url": "assets/js/222.9a465765.js",
    "revision": "23f2d788eb9a2120e8f767750cf29d9f"
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
    "url": "assets/js/226.0e093686.js",
    "revision": "e00f4dd4cba73aaba9bb52894719cf94"
  },
  {
    "url": "assets/js/227.ee355a94.js",
    "revision": "69a3174d22c1d04f79c02359d225b002"
  },
  {
    "url": "assets/js/228.5c529f0b.js",
    "revision": "0857677ccf3bb3558b725c4e085f539a"
  },
  {
    "url": "assets/js/229.6f6cd761.js",
    "revision": "0994188b5ec34bb5dc6ed423ec10281e"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.9320fa49.js",
    "revision": "c072b557ea0a0475ab5835de4150a786"
  },
  {
    "url": "assets/js/231.0a4a44a6.js",
    "revision": "da99076c6f6c4746adddc10738c90a84"
  },
  {
    "url": "assets/js/232.5bf3f4ed.js",
    "revision": "6aefe3aa88cbc9eeb79576286f0cf7ac"
  },
  {
    "url": "assets/js/233.212fe025.js",
    "revision": "831eb592644314696d9bfad7790df002"
  },
  {
    "url": "assets/js/234.18edc2e2.js",
    "revision": "42b2ed1c40acd2682a38526ce21df739"
  },
  {
    "url": "assets/js/235.03ec88c0.js",
    "revision": "0ea91efa868e4c5bdafb9de4addf6845"
  },
  {
    "url": "assets/js/236.022a2a53.js",
    "revision": "814fbb9b464fe22c1cc16029bf0aae7d"
  },
  {
    "url": "assets/js/237.53178ff7.js",
    "revision": "bcaaa92f57dae5cc9b07fa08648a7c5b"
  },
  {
    "url": "assets/js/238.84fe9886.js",
    "revision": "7df4a1bcb2af79d4755fbfb377f984f6"
  },
  {
    "url": "assets/js/239.7bf14235.js",
    "revision": "cf1c55f4ffe2486b9d3f6810a8d21d6d"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.ebe7ff8b.js",
    "revision": "0b19cb631da108db031fb87c388855a6"
  },
  {
    "url": "assets/js/241.bde843b6.js",
    "revision": "59f2a02fcda5f92093dbb4f9335edbbc"
  },
  {
    "url": "assets/js/242.f5cd7730.js",
    "revision": "ae38b8f8036642286e61106da14491da"
  },
  {
    "url": "assets/js/243.6a87fc17.js",
    "revision": "0553fdb593f28111179c3bec40564e9a"
  },
  {
    "url": "assets/js/244.0d73dde8.js",
    "revision": "1ce25795f3b9d2e4eed7be9523f44d36"
  },
  {
    "url": "assets/js/245.810e5c9a.js",
    "revision": "5e7ce365a9b7e125612981e6f12ddbd6"
  },
  {
    "url": "assets/js/246.0815f5a4.js",
    "revision": "655de0df2a69f634124ebeb348c2b156"
  },
  {
    "url": "assets/js/247.6bd8fcdd.js",
    "revision": "6835169e9adf2bd66818c0b26cada053"
  },
  {
    "url": "assets/js/248.aab843a7.js",
    "revision": "a34ba88c4e5c3f42148263c3de1d42c5"
  },
  {
    "url": "assets/js/249.6adace3e.js",
    "revision": "088614c739ad4d84b53f91cd0e33d285"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.9efbac0f.js",
    "revision": "46c6e853f7c1bc063eff89410ab7d8f4"
  },
  {
    "url": "assets/js/251.976e6451.js",
    "revision": "c5f74cae56dd7555aa56edb95e303518"
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
    "url": "assets/js/264.e250e3c3.js",
    "revision": "09fa31328ada7bf33c203a659c074cc5"
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
    "url": "assets/js/32.df9d9187.js",
    "revision": "3be19c04043e5641c3eb486fc1e7fd44"
  },
  {
    "url": "assets/js/33.aca4d88f.js",
    "revision": "2bc431d863b5e7202a7fa730eafccfb3"
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
    "url": "assets/js/77.ce48375b.js",
    "revision": "c21c4abe06152fa10c1f3544ce45ca12"
  },
  {
    "url": "assets/js/78.ba26b6ef.js",
    "revision": "78b71fdcbe6a9e0e300c04b923420f65"
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
    "url": "assets/js/app.ff4d1a1c.js",
    "revision": "92d95c5ca619b0b2887a4fbbf1104c08"
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
    "revision": "a4f8acdcf1958fb31c6ec44726554517"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1e89bb77f2bcb023d9ade12bf60ba6b5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fb4d0d3511caaecd7eb7ee63e29ba637"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "173bf123a7c29985e740f10e85632e69"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6b28db8da30a59d8e31446b8ce6e0c71"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c633a83378de0c372dd2eabf8703d625"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "13bdfadd4715b533e29e5627422d6761"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6ac0a23b2359227a4a458f806239053c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9340daa3e465849037c30b728ffe5863"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c5e4745aef0a19c829edcef48e75ef76"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ac2bc9c273328ee52b3468aea032799d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "8175e76e5aa03b512ca219431ce35673"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "0623a34d23c623bf5f3bbd52d35eef90"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "f54869cdc83db5815b471247d968f2c3"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8b8779bc4c8fe305501c7b2bb6433a7e"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "e2e4cca808b2b087b683de162d50b28d"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "734fa63beb092dcf65dbb7099271336b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "51b7e014163cafd54f5dfcebc39b12a3"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6d107083c0be0f8e120a35a464ef0b2c"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "36426c3a9f5c19dfefdca8dd2c86efb0"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "bf77a18cc5437c1e713b3c99160b0127"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "8c153e21078470ef19092825e358e925"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "a3cb12ecba3b4174d93fc216bb55fb97"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "dcfced9ddb46aff6e48a52c2b4dce81e"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ffb3c1e3b064d4a269de2140039b5e4d"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "a83a89acce62f53c241460b0558643e8"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "923b9a863421f3efd5266d262fa2377f"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ee8e1efdd387ca57e53c8e6ff2e606b1"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "0d7302e8310313a1d955c67766f775d4"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "a20bdc1990833b22ed7b978d0557b70c"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "e655c87a31cd4771eb6e2d049fb82061"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "10d6aab618c7d06e0a85143635247708"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "359a858307f559755c999aebf2fc081d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "eb23985b853bdca16ddbcd8d4a3f68f4"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d067ffd56aa350d97395d9730b2fd477"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "47a21fa5dadf221378330f513571e461"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "eeb54d283d27b78ea6090a0ba70e9fab"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "c9de7632743daf36c7d64437ff6ada18"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a99fa5fb28b89a2971b19b39c6c87e64"
  },
  {
    "url": "basis/os/index.html",
    "revision": "bd93e48daa57ed9f584e9f7cebbb200e"
  },
  {
    "url": "book/index.html",
    "revision": "02f6fd06a2352f6276040a4b7e0f2a4d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9b5cdda8823861bde36a6889b2536c29"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "6352e79abfff788b45bc70029d54b184"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "bcb91dc3e55a795fc8592daaf39bf430"
  },
  {
    "url": "c/audio/index.html",
    "revision": "d3b3b9f3039ac7a4ddaf46c272890609"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ba2dbc7943c524eca45fc9b9243f8986"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d8f558879a86f5d9016cfa3dd24957b1"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "cef666c6d032d635c642642c0f66e2d9"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "2449d4434b29f263436b578394af809c"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "e94b67044fc6a5af52a5f855ff36d999"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "0c9630e04750381d34c206b51aa821e8"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "fb2eab3e4e1afc96e7572c439114d5bc"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "34e7a1f469337a1f57f75f138568f045"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "3ee1480ae42790150e200bfa50f99f7b"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "6fdff4f4e79ca26c22ea78ca83e3ecdb"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "e01d1cef778f7daac036a420607f844a"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "4f069d5277d320f52e9374a4c16f8d8b"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "43c7d8624b8d390444f1d4ac78394257"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "10a8c279fb2e70bdd2dacb978faf3ebe"
  },
  {
    "url": "c/program/index.html",
    "revision": "3ed79b15db17d9071bf65f0278bb2c8d"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "75dffebd6b9eb1e2d92e8bab001b256c"
  },
  {
    "url": "categories/index.html",
    "revision": "b695623260604f4218154b4126cac16a"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "dfd63c8b13d4a4884bd4fec33ae6e4ca"
  },
  {
    "url": "figma/index.html",
    "revision": "574b9e055e7764d4eac3651877c5de40"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "1d3e6b479c9cbcca7f7e93d7635b9030"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "d0fccee8d09f83f9a18046623f130269"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "5b8795579f6740679777c4b119fd3ce3"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "dd17531648775368b1da2b9f392ac03a"
  },
  {
    "url": "flutter/index.html",
    "revision": "05f01166858137d57efcf0216d77605e"
  },
  {
    "url": "flutter/point.html",
    "revision": "fb72d4b3e82e408af349047a135aed9b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "60551f6d56f049b2a08ffd4f209abd1d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "06f53f2ad44a4c3244c326167497b8af"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1a6c0455eeaef9eef04fc4c64d968d54"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "968278be660375babd19b421613e5fed"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "095acb9e663ea20f679604d413140226"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "04a34092286d3a2c8562142c6e4ccd41"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "42c599b504ad09bf7f640482cad3913c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0157252b7b06363da41f869aa8341b27"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "b8a3aa3f1666369197bc3ecc21e82921"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8fcb75a8e793767e4b3c04f24098924c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1afc7ecaf91c93a80317ab32a907c97a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6b5975cc97dfa6266715086842034ea6"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "59fcf6a34c7c7aa9fdb774443b610f3a"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e01f4f3684de8b62e7de86c132727ebb"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d8075fe20a8de6c84d8c11b8efb30ad1"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d280a00f7f30e8008acb65d7ce07e676"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "bb29ec16313a091c730527d967f28a0b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d3207b7a451a18748c448cf927356986"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e11efae94b5246efa7767aa70901da89"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "b7d4cb40f22e3885936791c369c873df"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b3efa9508a57cdd9fb619742c49cbb3d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fbb3dd9c5ff68c50eb8156aab2d9bb27"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "37e9fcc503123051927d5eaaed963a40"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f5b38759ef2db51101177260a00bc4dc"
  },
  {
    "url": "haskell/index.html",
    "revision": "1dddf474c3bb1ee25fffc8c8101665f7"
  },
  {
    "url": "index.html",
    "revision": "8236991424cd230c522c0a367a04c428"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e6c146fbabd4ac5b59c948abdac524d1"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "db9222b101b14d809a8fe0bce3918ea4"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c63f84333e1eeacfdbaff9f350fd0ad7"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "6b8a08043c1d6fb8a1907bb6e21b5403"
  },
  {
    "url": "python/index.html",
    "revision": "96c7051b80c05013170a72d540273d0f"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "e5c30e9ce8dff2989873c003225b5bcc"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "823a410d9eef73c1e30b3b03b7d3172e"
  },
  {
    "url": "python/python-file.html",
    "revision": "92dc3f1f55fd498376e39c268644d985"
  },
  {
    "url": "python/python-function.html",
    "revision": "05bb4260f5e5a17662749254ab3c542e"
  },
  {
    "url": "python/python-generator.html",
    "revision": "6c6c287876800970ad8b55c8d56a7632"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "a0c4f29d603c6e0ba8f51b1e2c0e5f30"
  },
  {
    "url": "python/python-module.html",
    "revision": "e1d49e94a0a374d3cf778e0b4030ebc7"
  },
  {
    "url": "python/python-string.html",
    "revision": "813d567265dab1b4758662a2d6ac1bd3"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "b22e1d43ecf89d21bd2ec10b7238d392"
  },
  {
    "url": "read/index.html",
    "revision": "50025c9cc6ba1b9962918d80c2493f78"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "24407ed720d9d47313d817e85f84f2cb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "d48ea50a98447f620806c1643d5d1d37"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "ae3f6da398698384174d21aed69080b1"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b1407ed3ba1de03de17b5761da62fbaa"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "43cc5c03a424b23816f6eec8be0d8582"
  },
  {
    "url": "swift/better/di.html",
    "revision": "79d3626131018b4f01a1a39f94047604"
  },
  {
    "url": "swift/better/index.html",
    "revision": "1f6ed0e670d22230504f2752bca1f692"
  },
  {
    "url": "swift/better/last.html",
    "revision": "3f0825001db68b2f0ba68cf0a7c4bc84"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "fa0ef236605b5e9af63871ab0597e51b"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "034ff5d1d01f04286de9bbdba1fda164"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "9a13c41fdcab918d44785fa442023d63"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "03ae905c936fe90faa5557507ccb9b51"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0cf1ada664936c26cd6068be850aa740"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "d69f83ce295817a91cd78c49a5f7de57"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "0f06220427d6600938d28887ec89acae"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "9981afe8cdc8df228faaf6149476809e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c022c67446c300f50875f6e11ae9d745"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "156441aef0b9bf370708c24d62047c23"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "82ec7cb50bb0946f7b9e56bc5ca9b76d"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "b063775fcb8f0c86082c0e2ed5d88cb9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "fb74ee73f1eae847aac06b24943e0555"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7ef312990a0e43287639224c255f94d0"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c37b137be457048601836e5368ed7f13"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "e58ec05436a71d1ae35769d37abcbe38"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "cc1802d60a28986bf53a282290657ff2"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "961486ba4e07b93ad89852f8c7894928"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e0a5c686e92aaeb49f41579929f10c50"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "a7c8a945b4ca9b75fb2e4c74fbdb70e3"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "1d08d429709c347288de05f3a9314dd1"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "d8cbcefbc4d32e5c6695784f293fb3bc"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "2be32eb29a630baf2f311e2925fc4075"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c58bd6cb3bb1557ad8b1723fd6edb5a2"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "68c5ca328a71efc46f00479bf3fcc407"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "021347b66b81b684c2a0a82ee1ca778d"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "8a8f32eb0c3b9a858ffdf00516173f6b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ac9725b69c2acbb43b04da525eb13e5d"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f77e01ea2f8f37e0fa67ba8372f41b79"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "28006098c85ce78eed3a64b0464d40c5"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "7413f4231916838d6c44e34a68eb68de"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ce27a44fc1be4fb8849ca346a960d787"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "d618106e693b098b4d9795b2c055a516"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "01fe2e27a853082c2c6f98e7e21832f0"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "95ad62923c72ed9afb83fbcdab7c4f40"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "18e30eaa9ea42d2ceed512bf70382099"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "4b340140416ec7fd268e433d4ed23de8"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "6ca122413f652b212e505a6fb599bf7c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "d603c7a66f6749b58854713ec7461d13"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4b4bfc0dd332fe8e18a3d6853ed5024a"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "3cdd186ce3f257a7e9a89447a277c703"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "5306b7808f577cd772de239f32b184f2"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a839016ebf1a1b0c9189584b1328a0f3"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "06cfe374b145903b6fe0fbee6d81e5af"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "21a81c0a999d152eff58e2d119d827ec"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "6144b97215b4cc979a4d9ac2e7931347"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d6c57990009b3c328b609b72e6417eec"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "d11730afd31744fe55d738773eb7d3bd"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5c67c256a67c3dee2a2e29e98f1a383f"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "4aabc73fe8da6083e7ecafa97ae5d983"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "2a38c6d65b02015027bcc283e295219e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "e0f6c30b7186bca6c89977bd373d7306"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "7ddf93da618a7f1be1a6fb26ea4c0a0f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b8837d2fd42c3c506bcec114f3921984"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "5f09b5181b9ce75a29243b22fcdec1a0"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "945bc1ec0154d9f8b3c7bca35775de8c"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "393e978543b4287ac214340d31f7946f"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "dbdd32d42b77086600e848b75359ba92"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "6b0ae7dc78ac42f3bbb42b8a37f87296"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b50efa6a84b4f5e22dafebb40c1b9473"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "62f8729121960345abb5cf27b16a25d7"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7459c1731691e0b01bc2ed565dab22e1"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "753694357ef138c67754ee9138aad0bd"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1287b1940d1d3d807ffb4f139f03e0db"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2ef46f78384141557fb1ebf7279e9479"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7b115699e1dcf2fc5056495d288ea841"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "ef7ea550c711ab9e560b4b86ec5efb9e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "119b9e2bb92228c4301f8639bb0b6bc1"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ae5401d5d4c88375c3468d253c06eb9d"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "c2cd638190ecc7acf37ee25194c81263"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "3394992ca5b45294422a7bc258f26c9f"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "684dba73c668cf6986eb7c89be4e78bc"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "3da9638eafa23bf12b2aece4ee4da843"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "6029cea64e5236eea3cc58de77f54570"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c946b7d479884bcb2669e2059c54f690"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "bf043a25e8ba07f325cbe1f7c3101086"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "420c086c8ae013a1f507a5757a23e2fa"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "cda08e120a2053fa08cfcbb843fa9e5b"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "da5765c583bd8a7176cffa65bc202505"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "6acd4c274954e34396c640f771b8a5bf"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b08d9baeea3416418280c724feb9110a"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "245f3e1d75ca0550df84fbf46ff13f55"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "782104b3e9313189c3d2c9fe9f1d1539"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "7e75d60740d4dbf952f69f6216626e96"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "88cbbad88f6b0bffd4611e9bd28c26ce"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "51386709ecf8d1398dbc036431c998a5"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "d416c23b213c3ac584cd3842697c7189"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "06edef783e5d801d4be2aeae53afc260"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "fa68e7ef7f09236f7f198fddaabdef47"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "137a6962ac2ceb2da13f9063d6c96d78"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "ecd983981af33b4ba0672d1e43010399"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "9a86b4df228c65d45793b44e6f856e55"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2e5d9e3417e22bc6304752800545db67"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "9af2ab444ef6fd24f238f3ef8756e048"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "aaf15038b01828f9725a939405e3228a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "9c3ba95da06431860d4966d29b5e1cc8"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "e0ccec4a7eea1b687d6307094ffab7da"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "42968211b66765eee5bd72009aa881f1"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "296f4f42fbb40aaff358ee5eee59b7d1"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d2e6348c76efd7069ed96d3591986f33"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "a1e8cf32aa576a28c48547f46bd338bd"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "df83cb1b0709872ceb8ce26502b52500"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "562e72f8a14eff6c5e3562c8d37651a0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "184c9d867106265478d07f72b6a2b04c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4c1bf2b73978379e803531eedd6d55ce"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7d3af446f029f397a702e5ea6d02456d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "52796678508a111f1d849921cf208cfa"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5dcb8dd8dcb7e5a4d718049b2691677f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a63827972345fc3fcc9f0caff8460bb5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ba4ab334f8d6e46e01d35aac1492d0ef"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ad08c5385e83a6f6ac6ab28f6dd3e92a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "80c118a17024918188fcb5560b6533d1"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "69e46941506176d1da2bcac0cca29595"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c6f09e8621a74642307bed59736c5d1f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e52fe5d0672483b39580fd2bff01676a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ccc6e609f262f6c984089e1bae960e1b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ca98a5a0e85e7ab28190e1a3c81265cf"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "725bb0d087ffc3dc41a61540b828a88a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a2ffa5aa6eb4838ee1691d8636780f10"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "ab64cf206db06693b36912a05d040452"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "6ee0706f4601103d81791bda33cbc184"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "557987b2ea80c6e36845330b442c9f97"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "6d1994d44acafaa0ea02fa1e2fa8286d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "abbf1a78207bdc65f38bbdc4489c2fa4"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "62e89cff7a4b8f8ae8a3c67672fc400e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "0f28f2ae71b908b0724984125a703ba8"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "64b8b4f3b3bf8a2f9dbadf1dbb5b6552"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "374a6d479e9d9bb8e7e3738de2ac3810"
  },
  {
    "url": "tag/git/index.html",
    "revision": "147befadbb2999d7a00b93800eb85f4d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "411d0ff333563c5adbd6942bad00d9c6"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "fadf5e8f222567d245f3ff05bd592fb6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7ea532d709b4022a76bbf96dd128d14c"
  },
  {
    "url": "tag/index.html",
    "revision": "4d50b50e0bff6d0659296709605d93ad"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "6381453ff50beebb4b665465bc2d978e"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "bba24e6196749259cb253846229db427"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "8f6350d8ccb99c72360af246579e8079"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "302b3f342cfe13074089ed8b49e83453"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "7fe2f2eade48bd17d5e7216fcb07a740"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d385bfee4c7f9fe1be1da1c7c882b6b0"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "cc20b3323bfc424122722f39e4dbd45b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "4b87f318655231f16c0f8122a3bb7f0f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b119be893c334b638fd58583561bd491"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f40a394707ffa972f62432106a929bac"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6654a835650c98411e88e03cf39c3f8f"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "fd7fd989f0d68df5557d891e1cc791af"
  },
  {
    "url": "tag/python/index.html",
    "revision": "a998975269d1cba23ac4164e08086139"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "cdd540f38a9b7fffbf48039dcf2f0a19"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d10b94bc26fad322ab19fab4a3c177cc"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "e38092e9f65c4fef776ab34b2855cc0f"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7f8b80795b03c4db25f1ce37be62ad05"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "0359e131179483eecb4e067fd03c6e37"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "57d81f8fde158c28b4e091d1fa42879c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "bf20171c0f732609c62dbb1a0b5cd339"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "e811929b8bd9943b7fe8b115a748e768"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "2e8aa61c7e6731b3f9ebe985600f3840"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "dd806a65b36d1fe49e51969ae4b84336"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "960abc7aa282c1de83512af07c65a2cc"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "dcad404a2a73a5f067bb8dc67953fcf9"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "37de71d40d75e11fe97478d77768a56e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "13fae7d91a71aefa676ddc0ec54ba8cf"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "973c2d81d7be02423aa0ce970db1c36d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "8e526e7a52212d3068003a483f1a64e7"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "330bc5e01c1bd0ea9c2d39803c7b9237"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "ccf4006604470237c78d4ddebcf5e287"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "2e677c057e301d5c0031502654d1f4a6"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "b716f3dd530e812e76b7b375dc386aa5"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4e1bb4da55abd4b38f0a900c5e063b66"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ad8daed9ca0bb41b918f1ba5f4b512f7"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "496c9177618bf3187db5e017db3c81ae"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "89c86f789b413ee3992d1d5aa3b2b771"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "74cc3111b26565b63943eae551be652e"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "eb34a374be684cf93fa60c9006638f2e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "6ae0086c82923dfde2bb9490eeaefb8c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e7e72c7b98c54bdc2346a50c8c602606"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3cc5f938f20fa6992f08c1ceeb520ba9"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "865ac7fda0b6508fad822f62640263ca"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "aac6146a9e14984219a798aa653bcfc2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "617c86cca493455047b88aaca44fefad"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1c1efd201847f6be0fde5bd5ec779b3d"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d68fdba8d81d0d0523a79f6080c3ff4a"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "6a52d3fb3b870dc8ac3d6d63e9c57794"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "cf6ae927752297946c8c9e1efd4e3f70"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e1a967e893b5a812e7d6ba37d62a4690"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ece2237b97f20fcbe374d28eb72b073d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "45723fe49155f9b5ad0e50c5f2b2b3d3"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7547e8c1bf49d8070bc5596403085dcf"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0e0ad0f026120b3e43cf80eb5d0393c6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7106ccddd348088be97e6a52c58c49b2"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "baf44e6bfcabf1a0361b2d5f9964dd09"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "bc72287dea89c1a7d04672366c42b312"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "286cde502ad445532f3ca6d4ad968753"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "626f1b67180416502168f84b11c5fc9f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "b4423f7a5d4ee5f24e927a50469e1563"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "7088dfd54f6e4f21504f7a1c394904fb"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "009efa64cf87a21c094d57ae0878bc9b"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "f87c2553b506420556b4a7b3759aa5bf"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "4cf6953a3abdc74bb45594a6e71f8fc0"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "eb55159cb7ba9f923bfbc039619e8baf"
  },
  {
    "url": "timeline/index.html",
    "revision": "3d18185b03c74f1b24af0ece9c804762"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "66d651163d0eb459d1e383a0d0c128dc"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "ddcd15c6fcc464c512f8948c4ce1efd7"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "09036b565f8241b1759cf5af277dca1c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f364fb75ab8445eae3c1e68b89add51d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "50ba81592c5263a0775689ff298e04c7"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "082f189d1ff8211d989c60ea66b0d688"
  },
  {
    "url": "tools/html/index.html",
    "revision": "e0f483d47e59abfcdc517392fb2a0085"
  },
  {
    "url": "tools/note/index.html",
    "revision": "23544d849b27814a5beb7e0e5ddcb7ca"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "929f80875c6c3ae46f2b3e8d8b58e874"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "9e1ef8e9f4f1d8f53eb7663a676b76dc"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "d42966e91035e34dc8f890f7696a59d6"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3dda5ea026c9ad755d910f60c8b7346d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "d830b2fbfb8a9c164e967d007b1efd0e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4e80921f7528bc11138cd1c46dc8723a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "03e0b0a92417de7777a1ef35b4efdf6f"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "72332f3ed655e841b4bed7a8eda8720a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "34e70d1749cf7d583226f181bc05ae4c"
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
