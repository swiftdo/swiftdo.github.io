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
    "revision": "6429e8bcaaf335218fdab890be411a37"
  },
  {
    "url": "about/app/index.html",
    "revision": "e8914616170d96a95acd2e36b9dff2fd"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6b9c8550d0ddc40631f82a5fcd9b40d8"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7a11cecbeaecd9debd8c21d9845b39a7"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "ebdd171abf6428b84fcf409977722db1"
  },
  {
    "url": "about/index/index.html",
    "revision": "84c626f91349506990f0703350e00b80"
  },
  {
    "url": "ai/index.html",
    "revision": "47acac6c686bc0fb435fea998c9d406d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "769bca5b2c75b7b150131ccf50896547"
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
    "url": "assets/js/10.0a8ab213.js",
    "revision": "46392b5ed46f3854c2ed15e042c2351f"
  },
  {
    "url": "assets/js/100.088e8fa3.js",
    "revision": "5921232931f22dea4870e5c9a1ae7e81"
  },
  {
    "url": "assets/js/101.330832ab.js",
    "revision": "28e17445b4544e10b7655cd65bc63c50"
  },
  {
    "url": "assets/js/102.816336bb.js",
    "revision": "180552ceda7012d8a2c89a0b1ac255f4"
  },
  {
    "url": "assets/js/103.bb94d7d7.js",
    "revision": "4ffd8341d15634bfcd8093bb9adbc383"
  },
  {
    "url": "assets/js/104.cfc23d18.js",
    "revision": "b5ff8d506d6d70dd82f530daf493ebe9"
  },
  {
    "url": "assets/js/105.3fda9f7b.js",
    "revision": "147f752669e2ca0c6dcb3d3fa56898c7"
  },
  {
    "url": "assets/js/106.658ce3fd.js",
    "revision": "40c6aa7ab46cb3aed951ec3195d281d8"
  },
  {
    "url": "assets/js/107.2b612b73.js",
    "revision": "d1787edd838b78ef7c4187e224a5b70f"
  },
  {
    "url": "assets/js/108.5d0d1a2d.js",
    "revision": "231490a317b0b7680f5857af08265505"
  },
  {
    "url": "assets/js/109.f3a27906.js",
    "revision": "95f9cce7647273dab6bce51a3b828d52"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.b357b556.js",
    "revision": "492ccbfaeadd66d181fc86097f5b0a50"
  },
  {
    "url": "assets/js/111.36f1ea59.js",
    "revision": "84903311b44510ad31abea7b6c41db77"
  },
  {
    "url": "assets/js/112.69b39f1b.js",
    "revision": "74c0a2d73fea0210472b0438f6e04021"
  },
  {
    "url": "assets/js/113.741cbd0d.js",
    "revision": "f5a053c11e04cf7fd59ee0b399ac906e"
  },
  {
    "url": "assets/js/114.ae7a0e48.js",
    "revision": "96809c14d71370e4e1a8450a92107e90"
  },
  {
    "url": "assets/js/115.47872b0a.js",
    "revision": "3a40c3dec5c05902681c716dbc887588"
  },
  {
    "url": "assets/js/116.898a0ce2.js",
    "revision": "344daf823e620d482843862c341c23da"
  },
  {
    "url": "assets/js/117.52fdd5ea.js",
    "revision": "80ef936e029b65aa3a420b03c7ed606b"
  },
  {
    "url": "assets/js/118.d7e6e667.js",
    "revision": "eb2c0e881fa06adc74912d56907a8925"
  },
  {
    "url": "assets/js/119.a94607bb.js",
    "revision": "1af41371a4f925dc2d89b31b8e85b9be"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.73b8bb33.js",
    "revision": "8373b0aa02ef0d635c6e5784dda8c442"
  },
  {
    "url": "assets/js/121.435c2a2e.js",
    "revision": "2fe0fe3a9d33012321727d7940f80f43"
  },
  {
    "url": "assets/js/122.89043a0d.js",
    "revision": "301393478cb401d5ef270e25dd2ea8c4"
  },
  {
    "url": "assets/js/123.be103619.js",
    "revision": "874e5cb6745e46d9a2347652b9d5edee"
  },
  {
    "url": "assets/js/124.22516871.js",
    "revision": "fb2bed1175eea353e2c42eafeb02c85d"
  },
  {
    "url": "assets/js/125.6be91be6.js",
    "revision": "325e502a340587add87cf8b04615c309"
  },
  {
    "url": "assets/js/126.d38458fa.js",
    "revision": "698a5aa97f66568af9a48e03b3d09ac9"
  },
  {
    "url": "assets/js/127.5357d3b3.js",
    "revision": "e1cc50edb03a27e4148375b597c4d7de"
  },
  {
    "url": "assets/js/128.c45d59bf.js",
    "revision": "e32a146838c7b3f746edd8d03161ee7b"
  },
  {
    "url": "assets/js/129.c9b52a29.js",
    "revision": "70a2ddbb30ec645bfb7a97802c3d513c"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.53399808.js",
    "revision": "9662fc865e2ed33b293673cf4c810e31"
  },
  {
    "url": "assets/js/131.33e21864.js",
    "revision": "b2b2b2926d33c6d96f07d3de1333f21a"
  },
  {
    "url": "assets/js/132.7f97e160.js",
    "revision": "bcf931c648f7ae41aba79f2a4c94522b"
  },
  {
    "url": "assets/js/133.7585755c.js",
    "revision": "3614c12a8c78501785cd626991f660f9"
  },
  {
    "url": "assets/js/134.d51311ed.js",
    "revision": "41d2d74e5b9356293e84659d3e7e5e92"
  },
  {
    "url": "assets/js/135.c1534a7b.js",
    "revision": "711e58bb3bd0535aec7b73e1a6f19bf8"
  },
  {
    "url": "assets/js/136.f688d2e3.js",
    "revision": "4f60075333c0a22244523f5818695982"
  },
  {
    "url": "assets/js/137.0e80dfb7.js",
    "revision": "97ba31b16e4e4b2822a273c6753c374b"
  },
  {
    "url": "assets/js/138.4d1f713a.js",
    "revision": "d22ef161a33d0123ab4010675c4eca0e"
  },
  {
    "url": "assets/js/139.1cc404ba.js",
    "revision": "e2da24223e67bc02eac9ed9cf72fda97"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.54729463.js",
    "revision": "d5ebfef9b7652a9a2e2b516bf16651e9"
  },
  {
    "url": "assets/js/141.05732435.js",
    "revision": "45c7ea168a5ed9ab7cb58d5796269ba2"
  },
  {
    "url": "assets/js/142.14f016d8.js",
    "revision": "2dd01f8ea76360ddf4fc7509862f465f"
  },
  {
    "url": "assets/js/143.dc5a511d.js",
    "revision": "75d5f500d4cfffd15765f783c029766b"
  },
  {
    "url": "assets/js/144.0a8c639d.js",
    "revision": "9e1183d743f6d7cdcdd2aacedffec5cf"
  },
  {
    "url": "assets/js/145.ec7cbe02.js",
    "revision": "dc9465618a032e5cec5df37866b90172"
  },
  {
    "url": "assets/js/146.dbf933b6.js",
    "revision": "97075b558fe6d70ace009267e1588085"
  },
  {
    "url": "assets/js/147.6866683d.js",
    "revision": "62745f637dde893f66d649cef87d6445"
  },
  {
    "url": "assets/js/148.35a90a7d.js",
    "revision": "5c8e2f31d060048664988a70d8ab3bf1"
  },
  {
    "url": "assets/js/149.c3ba646b.js",
    "revision": "cd7f731a049d876a3362440d9b006d8f"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.613af89f.js",
    "revision": "2800e69b6d0c186e416aad772481e4a6"
  },
  {
    "url": "assets/js/151.1713fc89.js",
    "revision": "184663d758ce25ffd63da3f773a8b481"
  },
  {
    "url": "assets/js/152.b71720aa.js",
    "revision": "e56011959fae781ca5b5da136c80bd1e"
  },
  {
    "url": "assets/js/153.f0b83407.js",
    "revision": "b57fa72c603c2a13d101b3606b6aa676"
  },
  {
    "url": "assets/js/154.526bf025.js",
    "revision": "796785f9f554744b473e24abb328bec0"
  },
  {
    "url": "assets/js/155.4afa862f.js",
    "revision": "7071b881c4bb3506d09a451f5cefc971"
  },
  {
    "url": "assets/js/156.f77692b8.js",
    "revision": "3354e993fa1b7c1f5886995223562dc1"
  },
  {
    "url": "assets/js/157.55c9acd8.js",
    "revision": "7c0994df46bf8b17f4e972de3e8d5026"
  },
  {
    "url": "assets/js/158.7e357182.js",
    "revision": "677a4fe52c2ab03e597cef1737944450"
  },
  {
    "url": "assets/js/159.c3df939f.js",
    "revision": "e6792cd220520d7637b4555df9080076"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.0d5f1196.js",
    "revision": "37f461dac74acc4f213b0a6880263a98"
  },
  {
    "url": "assets/js/161.26175a97.js",
    "revision": "f0407c322199e8c2584759a32b9d4ee4"
  },
  {
    "url": "assets/js/162.c770ac0c.js",
    "revision": "d520af7f6e8202ea1b39a98cf66b8100"
  },
  {
    "url": "assets/js/163.4dcf41fe.js",
    "revision": "8f42abbbc1afe02936a831aeb031387c"
  },
  {
    "url": "assets/js/164.9959896d.js",
    "revision": "1a45b5f741426d44c8fe45a86dc85504"
  },
  {
    "url": "assets/js/165.dd5e2875.js",
    "revision": "9972da76503ef4f84d9acb86d29dde8e"
  },
  {
    "url": "assets/js/166.2c813e1f.js",
    "revision": "9e055a22f2c19c4b41c91e49ce40cb68"
  },
  {
    "url": "assets/js/167.3d127228.js",
    "revision": "e0f5dca79718255338690cd3748794a3"
  },
  {
    "url": "assets/js/168.1ffeba69.js",
    "revision": "43826b108607440b52544029fea25e01"
  },
  {
    "url": "assets/js/169.bd88ac47.js",
    "revision": "998f0bdbe03cd0846bb9b19d32ab436e"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.a6eb9604.js",
    "revision": "9f8f4977c8a5796875eadbd0e291046f"
  },
  {
    "url": "assets/js/171.0aac1b16.js",
    "revision": "7703bc5e1d3553fe7301963708c3cc32"
  },
  {
    "url": "assets/js/172.7070e026.js",
    "revision": "c09e35442ca7a02ea95953f51b0b2d1e"
  },
  {
    "url": "assets/js/173.0f53cc99.js",
    "revision": "be13f5a8e54cd6931f5008a474b08503"
  },
  {
    "url": "assets/js/174.8a8aa58c.js",
    "revision": "c5a081c457900784c5ff54df4801d618"
  },
  {
    "url": "assets/js/175.3f6754ca.js",
    "revision": "7671005eb05a43adafeeac659daba810"
  },
  {
    "url": "assets/js/176.bfa5e5b0.js",
    "revision": "d8dc5fa687751c56ea78f2aa54be6848"
  },
  {
    "url": "assets/js/177.d4632575.js",
    "revision": "ad3c3444dbe8967e6687b274e4c71dfe"
  },
  {
    "url": "assets/js/178.643d7516.js",
    "revision": "ff4646baa117b9ef564a667f5457f5b1"
  },
  {
    "url": "assets/js/179.5108a6b3.js",
    "revision": "b12d10450908695c03b4efb4199a5510"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.686bf19b.js",
    "revision": "3b47e17d70b9ec84f93c96b8bc7e35d4"
  },
  {
    "url": "assets/js/181.44b82f17.js",
    "revision": "7fbe01dd69fe49ffb7186e08a26579ca"
  },
  {
    "url": "assets/js/182.0cb56ad1.js",
    "revision": "b5cc51b83ecc281ae94e9c4c1057a020"
  },
  {
    "url": "assets/js/183.efc4406d.js",
    "revision": "7a964131b4f068100b2e3254efb52b08"
  },
  {
    "url": "assets/js/184.b762490f.js",
    "revision": "51255ef18d8c78bbdea87381c41b98f5"
  },
  {
    "url": "assets/js/185.f6752b58.js",
    "revision": "25965c485b21644e3537f95a7c28c243"
  },
  {
    "url": "assets/js/186.12109877.js",
    "revision": "751a259b1f7796f9944edec4a540e993"
  },
  {
    "url": "assets/js/187.0fbbc54e.js",
    "revision": "23d4b56add63548fcda6581fd95cd7fa"
  },
  {
    "url": "assets/js/188.e52b84c5.js",
    "revision": "df94408c139a0d5987632d5ae95ca491"
  },
  {
    "url": "assets/js/189.000f46cb.js",
    "revision": "bc9d012389b3839af531375f614d78f3"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.e30c0d00.js",
    "revision": "733483562e03a49b25b6c26e162b2556"
  },
  {
    "url": "assets/js/191.c3f1e16f.js",
    "revision": "167580e95622c792a590eec0a5a21186"
  },
  {
    "url": "assets/js/192.70573c00.js",
    "revision": "abcc30705b3b08731f84011af68dd23f"
  },
  {
    "url": "assets/js/193.c5720f4b.js",
    "revision": "70c292c05398e0bd152ebf7056d10952"
  },
  {
    "url": "assets/js/194.a7071b98.js",
    "revision": "d7c14da0949e0defa9059e4ac4955f7a"
  },
  {
    "url": "assets/js/195.b2c279de.js",
    "revision": "ebaefdec0d471e08e4a6e886d2e5ba8d"
  },
  {
    "url": "assets/js/196.dd7f1d9d.js",
    "revision": "9b3df3dce08b0769c3229ecd6b828a34"
  },
  {
    "url": "assets/js/197.c84f8253.js",
    "revision": "afea747f3757529f6670ce70ca41b0fa"
  },
  {
    "url": "assets/js/198.913d1933.js",
    "revision": "f82a5dbe5c583dec84e2b778f1cbc1e2"
  },
  {
    "url": "assets/js/199.0ff0af28.js",
    "revision": "aa300a72ca0cb182d757295d3c8bb896"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.95cc19d7.js",
    "revision": "6c4c36c0dad30764cf199e065062bee1"
  },
  {
    "url": "assets/js/201.cc68bc77.js",
    "revision": "c1717de801058c832abb00cc26c2a65c"
  },
  {
    "url": "assets/js/202.2a0f87d6.js",
    "revision": "8b1087b255340b44b1dd8792b467dd16"
  },
  {
    "url": "assets/js/203.69af0b22.js",
    "revision": "9e513a428019685461530d229b67c17d"
  },
  {
    "url": "assets/js/204.a1ba8ae8.js",
    "revision": "c5829391385bf9535dc2f9a4f7878d22"
  },
  {
    "url": "assets/js/205.814daf6f.js",
    "revision": "ac713831e6dd172eef36421854d1df11"
  },
  {
    "url": "assets/js/206.dee69bb5.js",
    "revision": "549a4df3f33d7edf055a84ea7f97a31b"
  },
  {
    "url": "assets/js/207.38217b0d.js",
    "revision": "c7c547282c50d34bc5cd8cee20c64f7d"
  },
  {
    "url": "assets/js/208.5577664e.js",
    "revision": "32a752c782a0341f9eb5785546fabc99"
  },
  {
    "url": "assets/js/209.444edd8c.js",
    "revision": "309ec1027530d90244a3ce91c6c17fa1"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.654de37e.js",
    "revision": "3db764c7bd2561cf61104d52f2d7cc63"
  },
  {
    "url": "assets/js/211.2fc3d47e.js",
    "revision": "768d8ba6ac9eed5b6adfd7066c6ae997"
  },
  {
    "url": "assets/js/212.d8cd2fd9.js",
    "revision": "175e9e59974a27524d6bcc9a49c3534a"
  },
  {
    "url": "assets/js/213.a588279e.js",
    "revision": "e1b6aff8f9e1ec9b8acd07707560a708"
  },
  {
    "url": "assets/js/214.6cfa903e.js",
    "revision": "3cc1cdb99dc8ed80e624b1ff19be3a65"
  },
  {
    "url": "assets/js/215.7661a3a9.js",
    "revision": "f4b76ef058082430f35e8c1d549d5695"
  },
  {
    "url": "assets/js/216.35060c65.js",
    "revision": "9a1407697307bda76b783c9d5a4107dd"
  },
  {
    "url": "assets/js/217.6a7a1975.js",
    "revision": "387d1dab362b9310a2d8a5066fa1841a"
  },
  {
    "url": "assets/js/218.ac2520d1.js",
    "revision": "5e59bbcc52b1303173f13df0ebb1143b"
  },
  {
    "url": "assets/js/219.7b9de84e.js",
    "revision": "2d4e9cb39482ffa9fb11fb364b899380"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.9fa63b7d.js",
    "revision": "3d060a792888618ad162a86245c4cc9c"
  },
  {
    "url": "assets/js/221.ff39ca65.js",
    "revision": "f228cf8f67c5775b2872494894c60766"
  },
  {
    "url": "assets/js/222.778001d5.js",
    "revision": "4a651432d0e99b56b0ecd2c009313587"
  },
  {
    "url": "assets/js/223.6cfeaa5c.js",
    "revision": "ae86d4d401b63c9803d2615017e7949b"
  },
  {
    "url": "assets/js/224.de0f26a1.js",
    "revision": "b297f0cc965e64921f1f682df9b02689"
  },
  {
    "url": "assets/js/225.5f7ddf46.js",
    "revision": "0e33933a247a4f8616085a55064ef5b2"
  },
  {
    "url": "assets/js/226.5a659f24.js",
    "revision": "ceea6139dfa012f26be0f5bdd20d8e2c"
  },
  {
    "url": "assets/js/227.c0b01dcf.js",
    "revision": "7a670446b2d6636c12fb85398045842c"
  },
  {
    "url": "assets/js/228.a2913423.js",
    "revision": "e2dcd4dbd8fcfd1fe8f62f01e1027941"
  },
  {
    "url": "assets/js/229.df2ad1dd.js",
    "revision": "f7a203174d35f5fc64adf3af457767d2"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.455c9676.js",
    "revision": "7136bb4e8af8448b12f51ccc679cd687"
  },
  {
    "url": "assets/js/231.6536f983.js",
    "revision": "c29cc5ba0e34a2a3a38f48dfad6e91bf"
  },
  {
    "url": "assets/js/232.8cf2ea5b.js",
    "revision": "0d38f9adfc7301bb48d5b533509904fb"
  },
  {
    "url": "assets/js/233.e6930d83.js",
    "revision": "542bf93129cee2a4990311f22b552c09"
  },
  {
    "url": "assets/js/234.61218c29.js",
    "revision": "7f6cc24e15c892cecb0fb145c9de9a0f"
  },
  {
    "url": "assets/js/235.1bafafe3.js",
    "revision": "deb00301e212efb2ebe180982bdef2e2"
  },
  {
    "url": "assets/js/236.72f0c306.js",
    "revision": "60b554e840674b0bf1fc0047942aaac4"
  },
  {
    "url": "assets/js/237.fce599ae.js",
    "revision": "16da0d964eee629a7c66f600869f808d"
  },
  {
    "url": "assets/js/238.eb9eb273.js",
    "revision": "063a9e0898128654f48e651b6f449785"
  },
  {
    "url": "assets/js/239.450b6f79.js",
    "revision": "9358759a68c65c6ee6666483a3c7decb"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.f32d61e1.js",
    "revision": "062757ca22c2008fb86bbf50a8fd38da"
  },
  {
    "url": "assets/js/241.d271890e.js",
    "revision": "f3645f4820507f17eb4384957bf19622"
  },
  {
    "url": "assets/js/242.51d3e7fa.js",
    "revision": "420279290a401c2b41a96d9c4538933d"
  },
  {
    "url": "assets/js/243.ffc2f6af.js",
    "revision": "d2c891262345e83d411bfc61c52e449a"
  },
  {
    "url": "assets/js/244.ccceb137.js",
    "revision": "480d72d30483e0c9279cf0c5b6922f99"
  },
  {
    "url": "assets/js/245.37111cf4.js",
    "revision": "f01cff5077dbb6a76e83bef3e5095f0f"
  },
  {
    "url": "assets/js/246.f2604c00.js",
    "revision": "3892c04f1343d81c0da178b8201d11de"
  },
  {
    "url": "assets/js/247.8a3906b1.js",
    "revision": "14d52d733a8803819e9418fe7ba8e4cb"
  },
  {
    "url": "assets/js/248.96769fd2.js",
    "revision": "c811f0df4831fa72000b04b7ec33c6e6"
  },
  {
    "url": "assets/js/249.9c534317.js",
    "revision": "93ddbcc0a38524d19569ac1395f8b794"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.8b2fb726.js",
    "revision": "04ae9c69b0734aa641961106e5e66e76"
  },
  {
    "url": "assets/js/251.9b5357ca.js",
    "revision": "f5560d41263d788f0e0df5e0d6be0180"
  },
  {
    "url": "assets/js/252.c18d39fe.js",
    "revision": "193f89a35a32679640620a8ba192963c"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
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
    "url": "assets/js/33.f1d8bd15.js",
    "revision": "82ab94f11c869e3680cbdfda2d6957cd"
  },
  {
    "url": "assets/js/34.6e7ab3ff.js",
    "revision": "ab401f005bec99a509489deb512f29c1"
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
    "url": "assets/js/56.93593d2f.js",
    "revision": "a9289c5c39adabc7be92c54732774add"
  },
  {
    "url": "assets/js/57.26a7b532.js",
    "revision": "ecca7a81335fc45fb2d03c8284665ed3"
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
    "url": "assets/js/85.c71f2d5c.js",
    "revision": "038c104868beb8dd97cd156e9f8f0135"
  },
  {
    "url": "assets/js/86.9d94f73e.js",
    "revision": "0090e9e3cc018d9c7fca8396445ba1ce"
  },
  {
    "url": "assets/js/87.25c6fa2a.js",
    "revision": "141deba77e6d38ee6df645acc50c9c4c"
  },
  {
    "url": "assets/js/88.7d86270f.js",
    "revision": "aa652a28b5273d85ad09722b107154ca"
  },
  {
    "url": "assets/js/89.3a119d90.js",
    "revision": "a8fbfcc94bb73936309da600cf4a1fab"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.549ca566.js",
    "revision": "a81ce1458224381aeb0e9a7c90d8cfa2"
  },
  {
    "url": "assets/js/91.5a551749.js",
    "revision": "03ed6ac0d040e76c4876a6a51c8184c3"
  },
  {
    "url": "assets/js/92.f403c43e.js",
    "revision": "ce39d93bb3b6f839d2de9425e2e32876"
  },
  {
    "url": "assets/js/93.aed57e01.js",
    "revision": "133f53e5b67ea79e76caa3454055b371"
  },
  {
    "url": "assets/js/94.6861134a.js",
    "revision": "1f08e89bc5fea7b67270107a94b0ca2a"
  },
  {
    "url": "assets/js/95.c5f5acd7.js",
    "revision": "5f091e6db0715bf0ecd96308ad3ac526"
  },
  {
    "url": "assets/js/96.9cd3c97c.js",
    "revision": "b5910e66b0d79eca23b4aa8a7f3a6f49"
  },
  {
    "url": "assets/js/97.6deb6f69.js",
    "revision": "b01293dc9ce718e4a6663d4091435c74"
  },
  {
    "url": "assets/js/98.87776596.js",
    "revision": "08137714d5d232abc4cd785b2c02ecbf"
  },
  {
    "url": "assets/js/99.d92adbca.js",
    "revision": "1a7e29c435880faf799f5295a39ae519"
  },
  {
    "url": "assets/js/app.e393b8d9.js",
    "revision": "8a1fec300d3ac16fc01c6e38217664af"
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
    "revision": "52984eee8bc208ec02c86670f274472d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "879229ee48122121946ceac2b1ddc07c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "161a861bf3283e1e6d245fcce11603fe"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ab8606394b95c92cfcf1b23743713c41"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2a5e49956ebf1552432eb90b26e46c77"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "949bce6374b52f190545b01f4dfff8ff"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5de3e378d68ab9043596512a8bac0b2e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "73faa3175f5e1baae89ebbb023cb201a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9a90b88479bd11aca7d3561a069b14b2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "2687a83a3aef1c5b22df1ef3d774f4d3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "601296e8bc61f29fe3fbc89c5d10b142"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "7d72c0b15d44d5f97e87cdf91f66d7ba"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "4e9fd0892f654086f3fd5ef376f672df"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "7ac7ce60bfc31d17d8bda23ab5fdc232"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "31a568983179f2ebab843a98a3c92cd4"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "ed1296af408e2c49f59c26072f4d9b3c"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "f0df2318e44e8a9fa448d42852b7d395"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "34a0bd3e9b087e8c86990d48f2d7dc16"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "0607792a6058a17afdc6b402bf0ac110"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c75001f02249ea86916e89ba1fa817e8"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "5d8fab469bc4566b2d5248493b56c713"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "17ce58cb76f249ba9a2c0b826f86b132"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "0618c71296684b41e7af3b8e2e6f028a"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "244c72a7588abf32d2fe78983a591f60"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "4d3e7842ef24c0fc10a83b3fd7b629ae"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "6cb90c7d09b117175b8feef709d77d2e"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c274cdc199dfccbeff16d92f87e7511e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "11a444e03bdceee47b0d96af7f864526"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "41c71f8848c2279c5d570f25c83de769"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "a8f1ecd89ba164f5194bf752ac88a913"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "cc7b04494aa42d5ec601a016741f7f97"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5cf0fd77929b3ba6b51fa72c936fa498"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "b4e1eb362155c9e1c9a67e6803618695"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "cc40da438bd758c6d93aaf4185904cfd"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "1879526a0ed61dfa03577ed3a0dddea9"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "40a950813c0d30d87a84eb7c72f16e82"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "87c3dd9f9abe6788619287fe08e925bb"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "db8ca4e64ef36138eb6ea4c20bf4ed9c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ac9150a43e00db47698be5cd6b2d2fb5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0789142be391e468261c6372f6a03fc3"
  },
  {
    "url": "book/index.html",
    "revision": "5e36e8687fc9dd17b64dbf14f1768475"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8bc365bc20689de64b394f4540a4fa3c"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7e42d450a583e6ca93806e15d2b86e0e"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "68196e959f1c286fe651a7b24f0deaff"
  },
  {
    "url": "c/audio/index.html",
    "revision": "5d75f14e8f5b71bee9d2afc60c8413fa"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "354bc3f20a6d21c96de871abad7707f8"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "b8e5b3644d52b26b49f3e6a783916583"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "bd9f8366d222cff0c75ca275ab8c3800"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e34d7ffacef9189e7595a0b72087f4f6"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "5c51e431f9b76127c12d66dd24b13af9"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "415c71c0647f5ef26deab9ae2819d7f0"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "0137f508a57ebcbea36a1339fd810fb4"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "bc71d7733b655942157dfcdfe0b9854a"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "a9b88a34cfe390854dffd8f4eb136711"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "549d1037922016ed43da17102a601947"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "ffe12d8beb0c3caf6b91a96bb24123e1"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "477ad6bc697fbb8afb1696c3aa67645c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "0157b0434eb252211b7d653a671cacc6"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "4a442bc379fb159b192e382d8009dec4"
  },
  {
    "url": "c/program/index.html",
    "revision": "dc664ae7e764e6773540b1baac6e8b24"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "54cb7bcf29f48efd68386394c4e610bd"
  },
  {
    "url": "categories/index.html",
    "revision": "4fa0a197bf666498e3df51f8dbba7b1c"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "ba5a5ce21a702d22ee56a07df64f234d"
  },
  {
    "url": "figma/index.html",
    "revision": "ea518ce17ec6df0a3b6beeac3ad76e24"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7aa41cf71bacc623e90f5c736299fdba"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "4237211275327241379325bfa0dc81f8"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "caae59d2e71d99ddaa64827fc16db85b"
  },
  {
    "url": "flutter/index.html",
    "revision": "cc34a6ebdc404bc399d53fd5c5cf10bc"
  },
  {
    "url": "flutter/point.html",
    "revision": "0707f76e931464d996b7fe2495fa1fe7"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5774657635a0ae8f066ea121f3bbf4cc"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8450cd97b6b55275e080ca61d980f741"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9b55a935d3baf964b0731feeb77c2f48"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "771981eb42537cd2f0e7ba7b6fe56e97"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "889cde2346349e7d4b62498b5a12d75c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "a8ebe6dd308c1739a8059cd9cbad72db"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c076fdbba790290fd89b626dc82d3e5f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "bd0f480c8b83d499048edfe46d8eba1c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "cf2886d8b1e9bc5b3277b684b31ef35c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "6165214ff7cf0f6446ad94a1df9a0bbe"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "e24f92074a139f531fdeb280dce429e2"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "7179aa6fcbc4a8e245a115816d50d5c7"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "74ca918175dd530438c32ca149e4eab5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "b75375e02a8a8a69a20e37c264e5d430"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6873a94eb49e1773d6a9595908ef4e8a"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "2c688a2dba6e4955fc45998d9932cb76"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "1d29470a3bd73a7a30b5f1ab089aee6d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "50922eb65392c955814f1d755fd8ac05"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "11d8b4720f53601d0dd8d31f084021d4"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d309f786e8e77e91c780eae9348912fd"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "2be97e4a55566c6ec9d06fe5609eea73"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "58c202d729583a4c533c1d8a048631bd"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a19fefe3cd9b1304cb15d6120f9ecc42"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "368520ec0c7daffb0ed2b8e17e06150d"
  },
  {
    "url": "haskell/index.html",
    "revision": "bfd9d568a89307b0e3321c38c9f4ff4f"
  },
  {
    "url": "index.html",
    "revision": "f419bceca828735fc20f94ea831a940e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ebec9b415cf1946555169bc21d2609fc"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "62074f18e627499451c383c362f597e4"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "773ffb7418eca3c58f6f400d2e4282a0"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "4e6398f578e1f3c824c5214941e5ce66"
  },
  {
    "url": "python/index.html",
    "revision": "d4a54e1497b9530d93a57e6d14ff47da"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "8b72d18330415a87d3bb52e3b33ba547"
  },
  {
    "url": "python/python-file.html",
    "revision": "0a76442ad23278c062198ef9a008f683"
  },
  {
    "url": "python/python-string.html",
    "revision": "20e276ea84e2aed169eba6d5f9728162"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ca523890f92dd31ef9519213c8bbf58d"
  },
  {
    "url": "read/index.html",
    "revision": "5cdf280efe7fc5d0d51704037f5da907"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "8a5fc23d9c706c84a38f27489e4968d8"
  },
  {
    "url": "swift/better/available.html",
    "revision": "41b4f2e5d56f6feefb65fadc67eafcee"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "d3ff0aadbfb7ec53061ca21ca0913348"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "37005d6e0c2d89ae73346f48970aed1d"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c8c73c36173fd440ccf51a3108ed9f88"
  },
  {
    "url": "swift/better/di.html",
    "revision": "067edc163542596df43958e8d7f2a408"
  },
  {
    "url": "swift/better/index.html",
    "revision": "155e53571fd97dcfc742612c4dbd1431"
  },
  {
    "url": "swift/better/last.html",
    "revision": "b4b227ef927ebabd413f86219abda6c3"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "632702befe638205b03bfc802b129632"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "eb3d2d29ff14acd5809c4095acc06b5c"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "2c0fd5e56fa5b8347524ee5bcc6ecd58"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "f0b6d0ecd076c661a4a6d3308b90cc19"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e36277742b66c558d0d11001771883db"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ae15525a453753ee83ef1887deacbd35"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e532139849857b1e1264bf496ee12475"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b0fecd3fd231a818a19f8b4865dbd1f7"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "5c47fc2d286d5d4803139b487cc23324"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "cf408f836e1454ad10a316c7aec7a831"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "52abe160ee86f1af5b17a7cd6dc2acb2"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "2104c5e9d1a72a7190c28213147d98c4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b5b0050c73824a46e0be20a24f4d7aab"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "530d8735187268a66f037587843c7e84"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "eb48547bd56d0871b4529ddd2f77bd2c"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "01f0e1d351d449040b2e8fd66005c61c"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "8beaa1e63d109eb900484cc5ae0afd0f"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "8ed49cd061ebf809f1a6a2f7d43495e7"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "bd5b62bc9c3d2b41f667908d3b52e64b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "e95e03bd0c4f57ca7a49a67bf7b2a40c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "85c97e0aee05afaa2c4ebe036db01227"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c3ab16858bb1b8cd12d7df8c7f868a1f"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "3b1cdcba1f056be13217eff2bcb9fd7f"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "69f7c0b62318ceee992c2878e7fd4cb4"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "aeec0e1662f60c4f3447f60c3b04e661"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a6051a4ecb542b624d4ff50ec96d9ae8"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "94521551c0bf554f48240706c2d1c9d5"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "932967dc735ca89bc31981cd19af470d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "1425af3bb9269650173b56773745489f"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "30b6577bc80c05ec3aa6f948b70c9f3f"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "c602586097c966276e43d687c94235e1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "bb84516fc7268cabccb1a21a817b664e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "45d029642edf25047963f724c89d580f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a75acb8a6f33fdded17a8cf1abe39fab"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b3f539c5c709670fe105c06b96f77a5e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "790b0c37867b3dd5f08358afd2029b6f"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "ab3d972323e764b733cdb53bc1d81169"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "aa6b10d7c2bcf1a31844c9557c3b2fc5"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "883cbdebee00a1cad54a6ef2f3a2834b"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "877599e64ae8691780f9e246292b23eb"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "80b8cd6e4ded403350dac2272d5229c0"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "9e06cea0b29aa743fb51001e9696e0cf"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e4f44f7d47f139a0490e81f1355eeda7"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4d0480781f2091393c07d8d4377b9aa1"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "56a573612bcc21bb7e5d119c9eed0cb3"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "97fac42a09e431d30144b7249f3d5385"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7cc1f35f3f221e458b5d7c2e8a53074d"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "b6b0a80885eff06ae18906eca3312108"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "eb0dca38abbc61930d171cd1ca7b5000"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "1e1fb62f40c950f9cbf62928e28b5d65"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "04caa2121ed76abc0365479a634c347d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3af77c906d96e08000da6772c7f2556b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "9725f06b90e98a632a72e5d734f9cafd"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "f633dae2496d69e8c45d9fa28158f086"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "21b5a6d4fb2c73250074726484677e3a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "cd6f03f540856d31491012c05f10815c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "46ca0660e8fcff1a40373407b9f94d80"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "31c3a79a12f3c04c8565edee961239e0"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "3f0b7d0c60a8eb81fb88cb5070820c4a"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "7e55c2ff2f5fbc0dd58884a75b979d06"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b026457f40582dbf952e4b35cd7b3adb"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "e95f6cab4974e7bfbb3130185a80e49b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "4fa52d5df2fa79d60446d1c71e073d19"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a3d6310e116b70ee1db798819b5f7dfb"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "4cd792179b7d14613aa92cd0d86b5fb3"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "154652df919c969f53f2a0cf85903fe0"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "4f5ccc4a4bc12635e07a5c6d1e6eab89"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "20a884cc4627314edbb3633994a89f26"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "3dd8b0aae5fcc4ea873a09208abe40b2"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "903c353857719a5c702a2dd2dde66f09"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "be34b59d5a9c90a0ee51e635c863872d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "1accfdeb1d5029920156718d860619a3"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "0fa9d79205a515c796f291ab3047f878"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "fde805c582095f94c9683b7e8d72164a"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "13ee61ea8234a438e6870e7ad928b151"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "6f5bcebdc0034a0018ad99caeed25c31"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b57031c1a253fd74be3b03f1d986e68b"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "ddd654f5c87aa01d815af72024aebd67"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "313e658e79ed96d0c549ff3880288108"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "4122f766118ed2479bfb9350880e73f4"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "0cd226f5bf4a7d6bc37d93f334e25477"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "289d5b2d99a7088398d06538b0f6d65b"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2044f441ba113df03a050207b6e555ca"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "f6299b6e16d4f6bf1d9a98a86961f375"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "19d6a68f0e55982e129bbf1f4a6cc649"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d4260a261350959b8ec00c8e8a7d8bde"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e9a06a48a64cf2f407cc007adcb7204c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "3261b334eef02273c3909a59ddb63279"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "462aae32122175803826270d884cbdb8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4fec0f7fb2c31a4f1edd8f6148a06a66"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "84ec769689f72c36bcecbf4996a77799"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "dbb5eaf7836b53aed20ef5abed46f4b7"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "eda9e1cc5ff4538b333642e04125af8d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "4cbed79978f1912a9f6f154334ad8c21"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1277fa2f60e436a0bc8b5b09e013f318"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "eb2901f0d39270fcf68bc687651a7819"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "aa94caaa8c46a249dabcd5d0f69dc884"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "15a0d6d3da1e7717dd2935c0abc237e3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f99c52e888dc1ffd37c75f9b5b7fbc7c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "661ef7f9ebcde0b8514407a26f2e0c6d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fb3b67867fe0b8812e6c1d254e015ec3"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "aa450db860fd0f7c007e63af10315ce6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "04c43b038df173bf6a715ab47e322f7b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "135c1a77d319a073b8458c15e351ae4e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "bdb46f2f71f96d75b6abeaeaecaaadf0"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f6a348c48013ee3688a93dcaf962d11f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "142fce7c0b5a1c8bc6f27c3ac85fdea6"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "7afc37ee10cb77f2a57452681ce93a83"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "07d4c294f459f9ee8fd46877183bbe91"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0944c56cb6f405f3286c087c33af0291"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "7ed0b6ef3f7d4cdc130405513e8f5d3d"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ebca052529fb2a4f16dc3bf0808a0737"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d7b0905874c8d20d87a6e9e971bf2025"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "2996bd26e58f07bdb1bf3d23061c81be"
  },
  {
    "url": "tag/git/index.html",
    "revision": "26234c1070983ed9b103a9b59cf402e2"
  },
  {
    "url": "tag/github/index.html",
    "revision": "f354eddae2ee7804935da29a01ca4d84"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "5a463f88b55e8ce79466d83785f28a97"
  },
  {
    "url": "tag/html/index.html",
    "revision": "93e14d2a4e0deb402f5c0209d2dc1901"
  },
  {
    "url": "tag/index.html",
    "revision": "91b87363ec454683cb3c23a59b9ba4c4"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "db2259d1a6d59cdb747b18859c01bea6"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "81ab8cb39fe9a1a0b9cf50b5361a36be"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "61468bb5cc820df397f5a27f1a745601"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "c29c58561bc89f8bb5d8501ddc9554c5"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "d19317249fc92aa6bb7d4485fb147f7e"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "4be658111ddbf0f57396a578f45afb42"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5e60ab36e982aa2b22227942c6b993f4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "34240767ba19022ee1ee3c5e3cfc8be7"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6e206b173989604f70a5da0c0bb5027e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "90a8bc908ce58f014b5917591a398459"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7e305539b96a74dec8ea091e7f6e89f1"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "cbabd87bb3c28596fabd7347f34a0b67"
  },
  {
    "url": "tag/python/index.html",
    "revision": "aba4faefa0d190f0d2eb1cdd4ae7e820"
  },
  {
    "url": "tag/read/index.html",
    "revision": "0fe82132e15812a4304f8b8b74628773"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "77678c0b48edb41944167ac642612c77"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "c1f975a8aff6682c2d4fcbbdf62e6cfd"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "c0e24517abb70d72bbdc7ae716aa6d9f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "07046fa196e5e91f9d9cdcc1e175e3b7"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "899796b1b863307161fdc2f3fc0f416a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "13f1847aca030ff84442511d094ad157"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "46400ca29f98b63fa9c5bb8f43f5cbc5"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "627cba2c7b0dcf2a9d02c95d1cd1da00"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "43196f791fb776220f13492ae7216165"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "069a1fb85e4aec76070377bfc2baad46"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1d2fb05d85209b8c70790210b20f66f5"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "a2c95bb60698485d052fe31daa970762"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b263fff7a2ff1dd2b68311925f619068"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "33960fe84f2f55667e0ef23624c1f2b9"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "6c72109ae33d7a091e8a275d2b475523"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "5f28834d69ea33fb94a0d0b5b9638250"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "efcae247a6d86c43efd2c55ad3927af0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "20bde5f52f56367769dc54ddac243954"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a82099bb58048b0950a827f89a4e2eb5"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "bd40f8dd57d88b078e9c0b0667b30a44"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "b44ae3f8d28ed3d5963be6ec0c9b9cb1"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "68cbef33216d9756d7fbe54c75c914da"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a088c26a2f70d2c8b56dea67954ccb6d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "96edd34301e732b6067790154fa5b571"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8f422c0823112899ad949cb7eb990b1f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "e66eb758cd93a60695709988b187de07"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "3ea955a28702bbde91f5c0bb899b1c4e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6e48b7ac125e0d5e8cabd9a14a71043f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f6b9173385f4b9fde9333a84bbdd02cb"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "8bc87ce3146dd4249aa52f8961c7270d"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "e0733d1ddf1b8a0232fca0568e490129"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "45916e578dd57f77eb351ebf9010dc4d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "7992c689e4949f09ab5fa794b80fdb6b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9a1ee5fbd6df5c480d6f64d780cfd66b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "325f6a1448cf678e46742953766e699c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "233ef7e36be3a4ded26dbec4430ec6f8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ca10e7b72a62ecff0b4201c555e5014a"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8d0ed264db84f134323a525c013e75cc"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f10ac890c6a8e86ee80649d47cdc0dc6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "b2f4f5505c5542b53bf28e3f3bfc22c2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "2367bee51bbd6c0f42615adff62db063"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "77f5586f6fc2f7f2df08082272ae6f95"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4d4452fa9d7b1ea0d5d2a64a6f57f891"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "af3310319db086fcb36185a4ff37e8ea"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a4e062a5d721115a7580653dcc19b66e"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "6f42c08b09d832335d95d4c58ea57097"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "b7939cbb4db3284bd4e40318ebbff05e"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e9163f6766082cf4721ca0726f74ca3"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "272c93b4a09752d26239ef429bd94a21"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "15c0a6c21752067fb3402467a8ffb0e9"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "4689995927381818c9042799709acfb1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ff604bd62c45d95795c185832451fbf7"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d765767b4118b4365fd0b9d9f9874e41"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "500dc608a2456ff58131d83d038c4f4b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "9f5e443204c530f606923048aee14608"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d73eb3cb5f5c570bb3b8b46799b9a9ce"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "0dd870a1942e36a0ab8bcae727e89724"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "9689a0f033ef7d6d7220cf884fa36704"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "5112fe79a8c17e0422f0a5843f7b4616"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b6ff90baf2068ddce071340341d74713"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b8061372cdbad50670a699c551ea7b34"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "e0f42f177d610275834c0bd6aba3923b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5abaea9b88fbaf74539f22b5ea96d3da"
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
