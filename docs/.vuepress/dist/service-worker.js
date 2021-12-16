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
    "revision": "e565d40fe327c5b93d2057ac6c805a0f"
  },
  {
    "url": "about/app/index.html",
    "revision": "398bb4d2c03b394f39240f4c408cb4a7"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ee60a83194b53ed476ccd52c81adf470"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c3aad229367be5ea28a65b41f4bce235"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "9f02a9c81e2028ebb82eda84a456edbc"
  },
  {
    "url": "about/index/index.html",
    "revision": "6f125d859cc1bbdf6343997ecd64a953"
  },
  {
    "url": "ai/index.html",
    "revision": "37865979600fa52e39219a2a17f78160"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "e9d5c6dfb92458a55cd188bb19edf2de"
  },
  {
    "url": "assets/css/0.styles.69e419d6.css",
    "revision": "84df19b9cf0610a91946ef13394769e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.34bf4863.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.bc471f7a.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.631c3606.js",
    "revision": "924b350754ef90cb53827ac68061d5f5"
  },
  {
    "url": "assets/js/101.572cf8c1.js",
    "revision": "ab2736d30fb8c77675de2c784f8f23e9"
  },
  {
    "url": "assets/js/102.4c3589d4.js",
    "revision": "e038adad0c2fbaf635b3e50fa57f3ed5"
  },
  {
    "url": "assets/js/103.df095cdf.js",
    "revision": "b6bb2d9e8906a7f4e2f6323f29af5fdd"
  },
  {
    "url": "assets/js/104.d151a33e.js",
    "revision": "3c10729248078c846f2c9a0e7bcf6a86"
  },
  {
    "url": "assets/js/105.4ef8e67c.js",
    "revision": "d7f7bb82873b4a0a95e28e4bc0c67fe9"
  },
  {
    "url": "assets/js/106.9af1e51f.js",
    "revision": "3140b1ed25bdce9a828300f33d709c91"
  },
  {
    "url": "assets/js/107.0176c999.js",
    "revision": "680d67299c54c7f3bf583e1c16f44c1a"
  },
  {
    "url": "assets/js/108.81c87a2f.js",
    "revision": "ae507194e727af78d522d9874d948137"
  },
  {
    "url": "assets/js/109.d1c75c30.js",
    "revision": "37990bb5ed921ed39b63dbe222bfe7b8"
  },
  {
    "url": "assets/js/11.9467c325.js",
    "revision": "d4db2c3acad7e5deb83d922b5a0ce4c3"
  },
  {
    "url": "assets/js/110.10ff8b8f.js",
    "revision": "ab3efd1957ea7f75c8848fda56fcf47d"
  },
  {
    "url": "assets/js/111.ebb0b900.js",
    "revision": "24d824e1d4e44d144febaa260b229965"
  },
  {
    "url": "assets/js/112.45e5e8a5.js",
    "revision": "dd8075d15ef99025ce6dbabad70d5b28"
  },
  {
    "url": "assets/js/113.a3c60297.js",
    "revision": "625d9dde403d05cdddc164e5b9028c6c"
  },
  {
    "url": "assets/js/114.590edd46.js",
    "revision": "2719f9c328f8ee32f8bc93604bc5f67e"
  },
  {
    "url": "assets/js/115.23398bf8.js",
    "revision": "fa5dbb4b4392de286403244888e7beb9"
  },
  {
    "url": "assets/js/116.aa72611f.js",
    "revision": "da8d66ab7ed0f0ec17d4a73a0d866f0f"
  },
  {
    "url": "assets/js/117.25bf8a07.js",
    "revision": "ccf02a037e57555d0e092a8cd03e744d"
  },
  {
    "url": "assets/js/118.b4c456a0.js",
    "revision": "723fa06e307cc1d318ffaefb40a7062a"
  },
  {
    "url": "assets/js/119.dc341e8c.js",
    "revision": "5d01eef4a6ffca8c78438f8e5d4d9d53"
  },
  {
    "url": "assets/js/12.8d9c5293.js",
    "revision": "d80e88e3a98475be4677c85e2d7a052e"
  },
  {
    "url": "assets/js/120.dc15642e.js",
    "revision": "34a1a19488c73e89999c1bfd8cc09982"
  },
  {
    "url": "assets/js/121.fe04778c.js",
    "revision": "d2b3c7d1d1bbebb1f5d267ef31572e80"
  },
  {
    "url": "assets/js/122.91fdd6e9.js",
    "revision": "9a7f58666f428416fca4fb8c544d3ae5"
  },
  {
    "url": "assets/js/123.f0c4cd50.js",
    "revision": "88e552862f9e1cd6c16a37c6519e9227"
  },
  {
    "url": "assets/js/124.9ffad1bd.js",
    "revision": "fb4c719dc07b60afedd3ba95aac6653f"
  },
  {
    "url": "assets/js/125.48db7c0e.js",
    "revision": "4870f4a888fad33543edef0a3d1ff313"
  },
  {
    "url": "assets/js/126.9e661ba3.js",
    "revision": "2f21f34cfd346227f5cabb3a87098c40"
  },
  {
    "url": "assets/js/127.22e8d0e0.js",
    "revision": "70e3c7e7b1f3a268507e78a31dc0e271"
  },
  {
    "url": "assets/js/128.378a2630.js",
    "revision": "30a96556701d8101855cac7e0e6a7ba7"
  },
  {
    "url": "assets/js/129.d9625745.js",
    "revision": "971fde03cceb0854cfcadc22463a5a17"
  },
  {
    "url": "assets/js/13.6d3c1e50.js",
    "revision": "43c21373e6bc06b1c996bd147d8ca308"
  },
  {
    "url": "assets/js/130.b17e4088.js",
    "revision": "927e88eb27fb5fccebe2651b8ba69ac0"
  },
  {
    "url": "assets/js/131.f04ea6a6.js",
    "revision": "28f114846b7d3a64c9682357ba34f0ed"
  },
  {
    "url": "assets/js/132.f319b2f9.js",
    "revision": "b44074ff12a84283945f1e527072c2db"
  },
  {
    "url": "assets/js/133.a9092d02.js",
    "revision": "9f74934b22f0e0a81684a9fa583de627"
  },
  {
    "url": "assets/js/134.507159d7.js",
    "revision": "01cfd1c6799df56273434c57f8d1dce8"
  },
  {
    "url": "assets/js/135.15b14f6f.js",
    "revision": "135c1c9b5e7db1323acc016bd24ab67d"
  },
  {
    "url": "assets/js/136.f40c3fc3.js",
    "revision": "19d4b376513d504623f7aac3593b1f15"
  },
  {
    "url": "assets/js/137.ed2f781a.js",
    "revision": "d943dc6c1546a3a67034cebed2b0e3e7"
  },
  {
    "url": "assets/js/138.4edf476c.js",
    "revision": "299c703f7afaf1dd1d0579937b043dfd"
  },
  {
    "url": "assets/js/139.9bdcee8c.js",
    "revision": "44a43f467b7bae47f6b5fae2d9341d74"
  },
  {
    "url": "assets/js/14.e9c59a50.js",
    "revision": "aec6d0ea61dd707e8e7202cb925057e1"
  },
  {
    "url": "assets/js/140.7506f294.js",
    "revision": "4e8035bb177ed3886303cc9058772596"
  },
  {
    "url": "assets/js/141.201238f8.js",
    "revision": "512d3f143519bf1c79fdd9749e85ce63"
  },
  {
    "url": "assets/js/142.f4cc23d4.js",
    "revision": "e6e83e29f800c71120cc3ee1e134b5b4"
  },
  {
    "url": "assets/js/143.02df02ae.js",
    "revision": "7609d700138827ac680fbf8c1af9da57"
  },
  {
    "url": "assets/js/144.21f92626.js",
    "revision": "650d1e535085a1ceabde98c7921722bc"
  },
  {
    "url": "assets/js/145.975d40b6.js",
    "revision": "2a8909dd8520c9e87793750bc10a938a"
  },
  {
    "url": "assets/js/146.5f975eee.js",
    "revision": "42a4883921638d3f6300ce8eb847cfbf"
  },
  {
    "url": "assets/js/147.b38e0fca.js",
    "revision": "73d507bb09d24adeb4b77191c7212236"
  },
  {
    "url": "assets/js/148.f6ce574a.js",
    "revision": "4147f85d95d211f5777d6626bfdb4e7a"
  },
  {
    "url": "assets/js/149.40d65cfd.js",
    "revision": "77e1e2592beab9685bdc1a7955c86b3e"
  },
  {
    "url": "assets/js/15.b127ddf0.js",
    "revision": "05df7b8342fc8bf32d7b9e6dcbb2c538"
  },
  {
    "url": "assets/js/150.c06cd1a9.js",
    "revision": "7b6aef67dcd0c1b889e5a79f1811a58a"
  },
  {
    "url": "assets/js/151.e9115c23.js",
    "revision": "727d07ade70664d2db42f138209a026e"
  },
  {
    "url": "assets/js/152.48e0fa55.js",
    "revision": "19ef008a52614496c58e1af87cb5c82e"
  },
  {
    "url": "assets/js/153.dfb51bb4.js",
    "revision": "69c375a73e3334c583a11ce5c5733115"
  },
  {
    "url": "assets/js/154.89e29854.js",
    "revision": "aba753a531ac51e5165ee372083618ff"
  },
  {
    "url": "assets/js/155.4ef8ae49.js",
    "revision": "5d0ed0366f92d8b4109eada1ecdf0325"
  },
  {
    "url": "assets/js/156.615531f4.js",
    "revision": "83e29bbbe3d83e66ddc64958036ebdec"
  },
  {
    "url": "assets/js/157.eae1f6a4.js",
    "revision": "8f212ce52b5356e351d72e25ccbf6363"
  },
  {
    "url": "assets/js/158.2500f805.js",
    "revision": "929ca76c53c8b31ee69372895267970c"
  },
  {
    "url": "assets/js/159.afce1a83.js",
    "revision": "6ed6a94360c7c0f0adeac0754ddfd981"
  },
  {
    "url": "assets/js/16.91210e71.js",
    "revision": "64354d46c8bcc3e557ca5c7eaa5b3ae0"
  },
  {
    "url": "assets/js/160.5ebfbb41.js",
    "revision": "a983aedf794b68567d569f0200ee3fce"
  },
  {
    "url": "assets/js/161.6cc78a87.js",
    "revision": "778e173ffcf3bf2869aeab55a1e710f0"
  },
  {
    "url": "assets/js/162.d646beea.js",
    "revision": "8f6e530eccf8c1fad3ac15210e875957"
  },
  {
    "url": "assets/js/163.3aedac7c.js",
    "revision": "f3d9a42594f96efe7c35c81fe8a8b7cb"
  },
  {
    "url": "assets/js/164.4e9a80d9.js",
    "revision": "7c42b8dc5e717231bbecb21c7ce94520"
  },
  {
    "url": "assets/js/165.77484914.js",
    "revision": "f68e0c602efd309438121c43477880b1"
  },
  {
    "url": "assets/js/166.172c6cb1.js",
    "revision": "db235b6c3a139c9d357fd7d2e23c6d6b"
  },
  {
    "url": "assets/js/167.62ed6998.js",
    "revision": "3318c38032740d423611530f6f5b3cf2"
  },
  {
    "url": "assets/js/168.c0520297.js",
    "revision": "0d1ea34942b70a6da6821f5a10248c32"
  },
  {
    "url": "assets/js/169.32d9120d.js",
    "revision": "bd256795ea6c594fe7e4cc9ca8ed1994"
  },
  {
    "url": "assets/js/17.05d68bdd.js",
    "revision": "ff97430274afcbf99c84e7991b8f4d30"
  },
  {
    "url": "assets/js/170.e2bc8b05.js",
    "revision": "c411af9d2755bfb05117d9511fc181d9"
  },
  {
    "url": "assets/js/171.b110a287.js",
    "revision": "9ad157796bfde9f71238e6c06f4fa23a"
  },
  {
    "url": "assets/js/172.1c5b29c6.js",
    "revision": "6c5524b69b2a0300eb25b3be2e1f8ef2"
  },
  {
    "url": "assets/js/173.a0a51778.js",
    "revision": "7237079bc40ef811101195c4625f40b0"
  },
  {
    "url": "assets/js/174.6524897f.js",
    "revision": "561403beabe7fd3c4e4913738fe08c1d"
  },
  {
    "url": "assets/js/175.83138226.js",
    "revision": "50eedc9c04935739c31f8ff143384619"
  },
  {
    "url": "assets/js/176.55915327.js",
    "revision": "9b94a8edb01eed43e8e849e4ec7edd24"
  },
  {
    "url": "assets/js/177.03fbcfda.js",
    "revision": "e57e7cfbd245c0272d166f4e1f8a1193"
  },
  {
    "url": "assets/js/178.a06efea7.js",
    "revision": "466fb4e97f802f0aeaa992142d3cb528"
  },
  {
    "url": "assets/js/179.e0ee3637.js",
    "revision": "d982632a2a3cb2c5c28d6d6757e201d5"
  },
  {
    "url": "assets/js/18.c3922a13.js",
    "revision": "a6b8038e3696d43587c2e5c560823f33"
  },
  {
    "url": "assets/js/180.0a80c4f0.js",
    "revision": "0399b401cb136c5c2fea4fa9d01512d1"
  },
  {
    "url": "assets/js/181.76b49f7e.js",
    "revision": "e06937d2f87386613a6837bc83c4a195"
  },
  {
    "url": "assets/js/182.7fec5773.js",
    "revision": "9cb68e2e9da142d8ada76b646cd62dab"
  },
  {
    "url": "assets/js/183.06a3d045.js",
    "revision": "3247fa930ea8737cde4477cda175458b"
  },
  {
    "url": "assets/js/184.cb4312d0.js",
    "revision": "e71b55ff456a94e3e8b1997751237f3b"
  },
  {
    "url": "assets/js/185.67cd06cb.js",
    "revision": "4abefc42298706110610888930036de8"
  },
  {
    "url": "assets/js/186.2d8397e2.js",
    "revision": "2d4ffb62d73276e338a027dc20d4839a"
  },
  {
    "url": "assets/js/187.094c33e4.js",
    "revision": "272b4f1d69d4e21fa40b34c8492eb4b2"
  },
  {
    "url": "assets/js/188.d7eff9c3.js",
    "revision": "ec56b3441318c6aa2b2aac6ec2a9cdb6"
  },
  {
    "url": "assets/js/189.9e395b31.js",
    "revision": "53efe3e49615db14df99dd8ef971ff7d"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.9e88ed75.js",
    "revision": "0b96ce8a3ced423d9ed403918a683a25"
  },
  {
    "url": "assets/js/191.d12e9cb9.js",
    "revision": "e7d81a3a792ae649109f78cebfa51456"
  },
  {
    "url": "assets/js/192.202ad999.js",
    "revision": "fdace650ff5081020ea023432d73ab19"
  },
  {
    "url": "assets/js/193.111c842d.js",
    "revision": "a9b56a8a26812f1e05f5ee513ffcf84d"
  },
  {
    "url": "assets/js/194.5491cda9.js",
    "revision": "ce83a7c3bc4b2e6cb1731e6e5658cbca"
  },
  {
    "url": "assets/js/195.505b6f21.js",
    "revision": "01183b5b330abe34769e9aa6d1ef0d24"
  },
  {
    "url": "assets/js/196.0ff360ed.js",
    "revision": "ddea1a720bb59932a3218ab754cef470"
  },
  {
    "url": "assets/js/197.f1317134.js",
    "revision": "7f8f88552c26e640a086cadc5618d447"
  },
  {
    "url": "assets/js/198.630bb766.js",
    "revision": "148a3f10a380bf8ef1f847151b7382ae"
  },
  {
    "url": "assets/js/199.b9e159f2.js",
    "revision": "bcc564493b8dcc82603297be5d483198"
  },
  {
    "url": "assets/js/20.147c6c4d.js",
    "revision": "68d12eaa53400373ac008131fe44ddb8"
  },
  {
    "url": "assets/js/200.c482760b.js",
    "revision": "b2f1f5c463ac114caef1df2eb35c269a"
  },
  {
    "url": "assets/js/201.33db048b.js",
    "revision": "62416b567f50656bc881a445fca94731"
  },
  {
    "url": "assets/js/202.576af127.js",
    "revision": "0ce1ee681074625f7292d36b69af5ae5"
  },
  {
    "url": "assets/js/203.86861048.js",
    "revision": "9ac224beeea45df0c76851948eaeb0f4"
  },
  {
    "url": "assets/js/204.045c69be.js",
    "revision": "26f55bf372a1290318d9edb6b9f79722"
  },
  {
    "url": "assets/js/205.10cce199.js",
    "revision": "4262671b16ff3c1da60553527ab1175c"
  },
  {
    "url": "assets/js/206.f57fedaa.js",
    "revision": "9ec1b3c6c1213a30fea6b516935b3b6d"
  },
  {
    "url": "assets/js/207.a35efacc.js",
    "revision": "3551925507c1e2ab45020ccb3778c8a5"
  },
  {
    "url": "assets/js/208.fa53b73a.js",
    "revision": "df9fce1f77e26f76e071eb64091e4db2"
  },
  {
    "url": "assets/js/209.7113de14.js",
    "revision": "478c3f75bab7d8052cd7f43e806cb9f3"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.e2ed39e3.js",
    "revision": "bdeeebe667d92f46c9d104257a62f409"
  },
  {
    "url": "assets/js/211.e4f401ff.js",
    "revision": "7de51e6bded07f882f71d5da45effd6c"
  },
  {
    "url": "assets/js/212.42c9ff05.js",
    "revision": "ca59481c2bfb842074e2d7cf38adcade"
  },
  {
    "url": "assets/js/213.21ed22ff.js",
    "revision": "bbde606f4fc600271334fb7d3795276f"
  },
  {
    "url": "assets/js/214.67969b66.js",
    "revision": "96b269666af3830a58dd0db2893690b1"
  },
  {
    "url": "assets/js/215.569aafc8.js",
    "revision": "33c9c3fb3bbd6dd5deb9c76b2c06852c"
  },
  {
    "url": "assets/js/216.ab29e3c9.js",
    "revision": "6bc5daaee693f9011066049ba118f565"
  },
  {
    "url": "assets/js/217.c61ff0b3.js",
    "revision": "2b9db3b14798fb0977295203ca299355"
  },
  {
    "url": "assets/js/218.383f2ea5.js",
    "revision": "d19dbf92453843f02c4ddcb32553aac8"
  },
  {
    "url": "assets/js/219.a74b2e89.js",
    "revision": "d7a5dfca3f7b93757bc957ecbf97a055"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.30ea58bb.js",
    "revision": "087ffee53e1578f3e5af8bc3261ed786"
  },
  {
    "url": "assets/js/221.441e6c46.js",
    "revision": "eaf49c18200c18abe257a425feccb461"
  },
  {
    "url": "assets/js/222.25b90efe.js",
    "revision": "d7e513c8c3809a751d3b7e14080eace7"
  },
  {
    "url": "assets/js/223.980a60af.js",
    "revision": "a597fd430f9b1b4b5d4cd6435d97375e"
  },
  {
    "url": "assets/js/224.ecb5bf98.js",
    "revision": "900b178b9e5bb04818e80c0d6c421142"
  },
  {
    "url": "assets/js/225.cf4c0190.js",
    "revision": "63f65917e0b8a00cf507e6354c0390b7"
  },
  {
    "url": "assets/js/226.26d3f921.js",
    "revision": "3a95cf99662a5d307424f00ff579f48a"
  },
  {
    "url": "assets/js/227.0ef3b862.js",
    "revision": "b868fc43fff89d53cb4fffd224c3c538"
  },
  {
    "url": "assets/js/228.a70ec8e3.js",
    "revision": "f91902eadfa237ccb231d3b3e295a226"
  },
  {
    "url": "assets/js/229.d72b01a7.js",
    "revision": "55e161cb5be511aaa49b263a2343322d"
  },
  {
    "url": "assets/js/23.9f5c3a3d.js",
    "revision": "89b957d3082166f0288c0324c110cb44"
  },
  {
    "url": "assets/js/230.54016afa.js",
    "revision": "4776856a34adb60a4953c490ea94fc6a"
  },
  {
    "url": "assets/js/231.4dcfb8d5.js",
    "revision": "223948aa2ba60a60b1756bdeb1dab6a4"
  },
  {
    "url": "assets/js/232.b32336f7.js",
    "revision": "56b49e71ff43ff324c3ef40cf2480993"
  },
  {
    "url": "assets/js/233.96c21a20.js",
    "revision": "cc48b1eb8b5bc149be98f3ce52de6aca"
  },
  {
    "url": "assets/js/24.f4ff0702.js",
    "revision": "c17031d89613a2580ecff5a9b138d7fb"
  },
  {
    "url": "assets/js/25.b87168e3.js",
    "revision": "f1fcf286f07d98d2c3683b9114855ead"
  },
  {
    "url": "assets/js/26.248e9ca9.js",
    "revision": "1abfebe0bf882fd69a2487c567558e4f"
  },
  {
    "url": "assets/js/27.a3d2b8d4.js",
    "revision": "acdd7a82e811b326e693992ffffd0d78"
  },
  {
    "url": "assets/js/28.03c5cc1b.js",
    "revision": "f70e5d3786a803c0e110e9531fe18599"
  },
  {
    "url": "assets/js/29.4f8fc819.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.9db69a71.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.2012dad7.js",
    "revision": "4076f81c7bd1b79a35b99c02b0bf37aa"
  },
  {
    "url": "assets/js/31.c0a0b65c.js",
    "revision": "7dc97de67f37ad4a0f3377fb570605aa"
  },
  {
    "url": "assets/js/32.42f63214.js",
    "revision": "8b09467e8b045edd3029fcd39bb73552"
  },
  {
    "url": "assets/js/33.8344f41d.js",
    "revision": "43857ffce3bfc0f96e6ff2e853f0243c"
  },
  {
    "url": "assets/js/34.afa89a65.js",
    "revision": "45a8de78b4b2d9d2f9a93c4ee05af2b1"
  },
  {
    "url": "assets/js/35.30173c83.js",
    "revision": "22bccf3a13a5895ec08ab7944ed9b3bb"
  },
  {
    "url": "assets/js/36.62a52656.js",
    "revision": "59217c43fed980796f778c0c3c76d6c3"
  },
  {
    "url": "assets/js/37.d773281b.js",
    "revision": "fb7ea8fab8ad2d3cd89921fc216b8e53"
  },
  {
    "url": "assets/js/38.9f04f262.js",
    "revision": "a053ade033a81ebfbfc0e233016be05c"
  },
  {
    "url": "assets/js/39.fb4bc892.js",
    "revision": "68c777637c27337cb5f6468bc4d219f8"
  },
  {
    "url": "assets/js/4.6ca6e1b6.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.60cd7986.js",
    "revision": "82464fdc39ff5483e63f5281d7d90b00"
  },
  {
    "url": "assets/js/41.dd29c01a.js",
    "revision": "2ae33420a0eb549331be3add1a4c8693"
  },
  {
    "url": "assets/js/42.0e6ba7cf.js",
    "revision": "9d9266c28ef8b78ca3cde75a40a881b6"
  },
  {
    "url": "assets/js/43.fabce6e3.js",
    "revision": "a6089a4d9d14bdf2e1fe0a9eb0f17ca3"
  },
  {
    "url": "assets/js/44.6ff9f500.js",
    "revision": "53557c3750095f57872defc1146ba7ce"
  },
  {
    "url": "assets/js/45.10ef5f3b.js",
    "revision": "5630c65c048cdbe44b84009fc56cfa6d"
  },
  {
    "url": "assets/js/46.1d8bc571.js",
    "revision": "0bf45738c0596a45ce606ea98ba47748"
  },
  {
    "url": "assets/js/47.bf804e69.js",
    "revision": "65e997f076dca3b819e8685894e6be94"
  },
  {
    "url": "assets/js/48.6257ac47.js",
    "revision": "bbc6ba7830e181a714161d92d273e3c3"
  },
  {
    "url": "assets/js/49.94dfb24c.js",
    "revision": "e4f78b31950b4964413b52d80320fb5c"
  },
  {
    "url": "assets/js/5.ad84b72d.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.d6a9f5da.js",
    "revision": "013e9f1cdea6a291fc8855fa7a2eb634"
  },
  {
    "url": "assets/js/51.69a83cb1.js",
    "revision": "c2013e40982d50205da8fc8ad5965955"
  },
  {
    "url": "assets/js/52.e5faca85.js",
    "revision": "a8a0c299541ce9ea758f21d3fd79405e"
  },
  {
    "url": "assets/js/53.0613278c.js",
    "revision": "d41ca25dbb6f4b80b029b2ffa302c6a0"
  },
  {
    "url": "assets/js/54.151e4535.js",
    "revision": "f8b983fc888b0d6c4ac94f4eb97d92a7"
  },
  {
    "url": "assets/js/55.f14104d3.js",
    "revision": "0faefe6799cbb18ed78e641946dea9e9"
  },
  {
    "url": "assets/js/56.81321f9a.js",
    "revision": "9cb28154f2d75692b4a96c0c1864c35c"
  },
  {
    "url": "assets/js/57.8deb6035.js",
    "revision": "34e0c3bf6fbafd4666575befeeb49be3"
  },
  {
    "url": "assets/js/58.a2999eeb.js",
    "revision": "793e37f0e6b0d558c863452b4200bba1"
  },
  {
    "url": "assets/js/59.db4774c9.js",
    "revision": "cac6d5a0e21623c817ec0975c38af5c3"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.4a282c1b.js",
    "revision": "61a06d424282bbe749b4e6e3f7208f03"
  },
  {
    "url": "assets/js/61.9523b2ad.js",
    "revision": "d76be2d84abeded11c92912bcb896349"
  },
  {
    "url": "assets/js/62.eecc3b84.js",
    "revision": "a45879bb78b58350c7be3b76cf44448f"
  },
  {
    "url": "assets/js/63.f7a8c57e.js",
    "revision": "bff0a4b1bed0384ad0bbbe85ea42294b"
  },
  {
    "url": "assets/js/64.64de565b.js",
    "revision": "c75f47c204d8d1b7e2fe5daec0567194"
  },
  {
    "url": "assets/js/65.188ae0d9.js",
    "revision": "c52c2b4874f2a6e79996b2311a4693b8"
  },
  {
    "url": "assets/js/66.356e1564.js",
    "revision": "a43472f646aa47bdcb7640084d91546a"
  },
  {
    "url": "assets/js/67.f883e6f4.js",
    "revision": "53cb3a68d740434e20ec9a01a6cc1480"
  },
  {
    "url": "assets/js/68.3b9e6c28.js",
    "revision": "6b73a793f729bd52093eaf38f96c0bec"
  },
  {
    "url": "assets/js/69.0404b1ec.js",
    "revision": "9cb3019008bed684c7e94c4e432f6f6f"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.cacbf959.js",
    "revision": "b02efe192f5e404305ed5188b39f44f2"
  },
  {
    "url": "assets/js/71.5e3243ac.js",
    "revision": "7f3fdd6cda922566b596d588692ee95e"
  },
  {
    "url": "assets/js/72.d60b4158.js",
    "revision": "747e4d064ee18fb030fd6b43bf5316c4"
  },
  {
    "url": "assets/js/73.a02dfdbb.js",
    "revision": "731c2d6208cfea3c3d6e4b90057c0c66"
  },
  {
    "url": "assets/js/74.1ee569d6.js",
    "revision": "b444d17e364617646ada75891a771b33"
  },
  {
    "url": "assets/js/75.4ea05baa.js",
    "revision": "564cc605b2ea5d8616b8fc43b09cb326"
  },
  {
    "url": "assets/js/76.8ef9e759.js",
    "revision": "e0ee1182b00f24aff125c3210f102910"
  },
  {
    "url": "assets/js/77.80d3c790.js",
    "revision": "fa147be133f51ee84705f154d824c922"
  },
  {
    "url": "assets/js/78.8708dd5e.js",
    "revision": "ebbea38a6bf3f6011c8db991d828698e"
  },
  {
    "url": "assets/js/79.54f8ae1b.js",
    "revision": "7ae3b252f54fe9cdcd8823769f3c22fd"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.58fa7380.js",
    "revision": "0fdb6a1885a77c58e37f852591234e66"
  },
  {
    "url": "assets/js/81.27195c78.js",
    "revision": "a01a04a77bdc1be9bf08e5bf0aade680"
  },
  {
    "url": "assets/js/82.c462c616.js",
    "revision": "ff1bbf4c3c42cd6609524e40c02f8ae9"
  },
  {
    "url": "assets/js/83.dbd63401.js",
    "revision": "1b65c87d1ab7b271de45d363c8e82c25"
  },
  {
    "url": "assets/js/84.6b826eae.js",
    "revision": "b457c788b3d820c04ce61667e5294c85"
  },
  {
    "url": "assets/js/85.6597c350.js",
    "revision": "9573930d1df05926d9371d82488e1dd6"
  },
  {
    "url": "assets/js/86.b513ab26.js",
    "revision": "3c0536c522c1489d22a284fef7fe3da7"
  },
  {
    "url": "assets/js/87.6525f05e.js",
    "revision": "6c0502088dad57e2bf9bef5318a8b9d9"
  },
  {
    "url": "assets/js/88.510463e9.js",
    "revision": "4dc62aa47f1f6217163c6829f5aba153"
  },
  {
    "url": "assets/js/89.c9eb163c.js",
    "revision": "d1c57337a75f1239a6b7ebb8f2629532"
  },
  {
    "url": "assets/js/9.a3f4bead.js",
    "revision": "f7b1659de903f097292b67ca841057e8"
  },
  {
    "url": "assets/js/90.b9e6e238.js",
    "revision": "e5c294b14f5b5100977d3517a42276ec"
  },
  {
    "url": "assets/js/91.b35aa852.js",
    "revision": "5d3e37de37120393c26d7a359b957dde"
  },
  {
    "url": "assets/js/92.a96b077f.js",
    "revision": "93f765ac8a9c6c043881b3347542066c"
  },
  {
    "url": "assets/js/93.7dc17cd6.js",
    "revision": "0783d2f5967e3222ee26c5e90e3a51a0"
  },
  {
    "url": "assets/js/94.a58c75f1.js",
    "revision": "7c523f110ee305bef40995ff895db03e"
  },
  {
    "url": "assets/js/95.8498f12e.js",
    "revision": "0208d4475c02c139a4375917fc4ce397"
  },
  {
    "url": "assets/js/96.a3afb961.js",
    "revision": "169ee04d2ed0b656dcd8df67bdc3ecb7"
  },
  {
    "url": "assets/js/97.32b4f2dd.js",
    "revision": "4065c38600ef194d9348557ba5c18bca"
  },
  {
    "url": "assets/js/98.74868866.js",
    "revision": "272b6158c0df5bd0bc42a4b9c2cd162e"
  },
  {
    "url": "assets/js/99.5093a272.js",
    "revision": "418dccb98688a20d760fe8babc484cde"
  },
  {
    "url": "assets/js/app.214f74f6.js",
    "revision": "cfe51279dc01fd51e69e8a32cbd931e3"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "6fa1571ffcfd8dc1a8ea1c796088808a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "7abc217b1cd1e7a644c509a1334e6a61"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "db3fbed233aeda83fb36a652c378967d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d285a4dc38f5942d54d486a53666b74b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "50cd16056c85c07208c66df0af8a1737"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2d9e06636f3a57c829ecc993e8edcfca"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "171f75334b0669094c0956b0ec110173"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ac4c6a55aedf192f0084796b1e65ac38"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "edf15254278943b460d709db4c59dbed"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9a578b6c57f37d06ba4b90375e93824f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "584da3341b7f4137d5f55d3516c0b45c"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "6e87d2692232273f6d5cd03816bb4393"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "72197ea145f2b1d7d9ca0207ce3ff77e"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "3ab57880bfcc4485fef148891e6e0924"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "20fe75172d14fc363db6ba35c13f0a98"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "ef3474e8d0d5871ea7ce9d89a2b5ad4e"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "25a963bc51c33c6b2f1da07b922a46de"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "edf8d33ef27fad679edd29e20396c35e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "cfbe37a2bfca9b814d4ba941c037a312"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "11904971f33cbb3c1e38ae9a7ffba09d"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "6dba79a3ccb9aa02b8270d5562fb4272"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "44c7112805c6191b1b4b0e49f785ffc9"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "d87f0d33cb9230aa6b3a4acc32bf83d4"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "f63200edbf4761d74f090ab18803da95"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e4395e1a29fb6097923f5a3619603081"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "50fab60941484f736632c5025e03de68"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "dca30e93fb29bcce2f29201d7c1e8c80"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "9565f947839f93a599b19d94eda949e8"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "3bb867b6659d7e8695da55ca5b9848d6"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "96dc8a4f96b1d6a90c97d89f4edde7d3"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "e535e29afd33c299e1d784182e2aae23"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "17a0f0532acd2a46f7dde1e75815d20c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "5111623774c6bd26a33a71e0d6a456ee"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b8efd340da3a88d7312bf6a60cf735fc"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "cdea2dbe20e6402154de55dbd451ba59"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "c9cb3bc91a77aa6f75de7124484a42b3"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "63e17ffe33f5cac91bd5f19cf4c8e755"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "a5c18ac56e4de378e222a693cf8a9f0d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c8a1a6d40b2224a11f9d0165a1cebd34"
  },
  {
    "url": "basis/os/index.html",
    "revision": "42932da0153cc9d0fa5fe04785db2677"
  },
  {
    "url": "book/index.html",
    "revision": "4492339f0882f3d6b4a6bd1b094d4ec7"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "3ccf4de3219c3486a05c8da139cdf5de"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "8506bd611531063a80c8907d48eb6599"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "0396c2a3af8251fc52f6518cdbd48922"
  },
  {
    "url": "c/audio/index.html",
    "revision": "8c534d5c3e8d8a5d25593d7ed62e773c"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "1382e2a22a63b11946e3ab0c1879ea8e"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "914b5fb4603ba8e72821ae39019e1e16"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "6a11c2c0e336469d526f37c5243cd8c4"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "3deb91b3c76965c98b757d679c7eccfb"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "05b1ab475d91dbffb42cde09501b0b4a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "7ab16cb6dd001e6d4d2bcb701b31b6db"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "76ce0f34e458f24d4c37248e3195c9fe"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "8469f50d30fbff4eeeea86655f34a580"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "a662b992c5093d46c6e1e75be3f0b55d"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "70731a5b1c7250491daa86f09ec5c033"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "facb394aa7b16c965b5ac3a25235c00d"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "251b08f2b913494e527d8179494b2ead"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "63321d3f0f8d024eec3968e1b9452924"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "e13d08cbe915cd818ca2e0960fd5dd50"
  },
  {
    "url": "c/program/index.html",
    "revision": "22b892ef08308766e24da50d054df90b"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "514736d254b4f0be77c46a9bc1ab2a28"
  },
  {
    "url": "categories/index.html",
    "revision": "23e0c9b17b8aae35cd1e5a5313914fc0"
  },
  {
    "url": "figma/index.html",
    "revision": "4c4777a5273404a357d37efebff6ca4a"
  },
  {
    "url": "flutter/index.html",
    "revision": "4606ba5e327fba3a2aeddb511fc22e72"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0073e357554e71010502fe955216976a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "aeb79b75099451b37925116361b6d219"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f67d796ac23826a53eb05f35c1c3f649"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "af7e72aaf10ff575471c4405f33ca4c6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "009a4483ff601d1933eeaee676a5edb5"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "1b75d7566c4bc3b3cd7d1356c8534928"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a9c57805b3509bc096cc51d8d5125820"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "6caf41b5af8fe8f87c3806dfa1e82bcf"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "40b934fd204a513c81e249864e3fd8b0"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "5b5af3ba9ef2db57ac8c034cf87e3542"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "fe3e55da9dc9a88f563eb4c798c883ca"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f7040dfb8701abd0f3498453b6c70325"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0f7306617f8929ab558b15af4f1e42f3"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "9aff82483f0ff09bb8b00fbe8d9ad63e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "5e1f0ccb6e38a01c5e18fc50ca22a359"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "c13854ff07a3ebff67aa63fcf9e3d001"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "3bced6a6b28892a2aab64a9e65748caa"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "e550cc0fdeab26897b0276804c1cfef4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9418469446a11f46a45cd2657c508022"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "244539470e9489ac6ef60f26e588ea46"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "5874d9f63310207d99454e395eede053"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "457263b884543207e9229a2e88ddba44"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "f0d1cab685ad8c89ee5035ec32cfaf2f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "0e57dab56aafe2578f604d28f15c2dc3"
  },
  {
    "url": "haskell/index.html",
    "revision": "00ccd1bdb5e603712843759e7abdd156"
  },
  {
    "url": "index.html",
    "revision": "456624f7f50ac665d4da3ce1582d09b5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "9917a07aa4d25b56c3dd6211100843d0"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "dfb69ac868a8b715179538cac4c4e1f8"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "97408a224fc3e1e4d874068c08647a4c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "2d745779383989359702c371115f492f"
  },
  {
    "url": "python/index.html",
    "revision": "2b8d842aaa67d61568dc4aac698f03bc"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "d230e2a6522b44863963c18853e8254d"
  },
  {
    "url": "swift/better/available.html",
    "revision": "b212d20d2f74744b61a6369b66e36c78"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "3d5f51181b14e0d79a1f7f9b102a75b2"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "ab603695479277e5c6044111275398a6"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "d2c778c8a4d619b70bf60f57c28c8293"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2d16c0f40d5e927a40ac07c1a4b12c53"
  },
  {
    "url": "swift/better/index.html",
    "revision": "28b9b1eca2f1340b8f8b9d71eb6de459"
  },
  {
    "url": "swift/better/last.html",
    "revision": "fc1f15b6ed937bbdd5ef0223a52e9193"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "b3d8b709c6d7bfe18830b2cf96aebe70"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "35f581200419b96a6c15df21d2ccb7d0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f1d6169e5c8db42e141e1acacd7ac86a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "fb9d9a63be1fa5cb229bff0a8265bdbd"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "2c66ea1647cded2bb1ff4fd26196a624"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "204a4ff09110f6ba2a9152c962fe1821"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2563d87ab8b0b046939a5e1bedec1642"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "a1b453ca76c4ef9ab5bad88dad448acb"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d4b023890b407a8e4447d4fb743a9643"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f7be9431c8cbb8d54a7e42b2ed44c6e4"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "c9709280d116d9b922206d98a05881dd"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "382f191deed2395ec18fbe1b54411a53"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "073e0f165b82ab0b436c52a705c12084"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d277df5eb7a0d7dd6d4e5f5fe4a13e2a"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b6f7b4d1a3d02fabda5feef6ce169556"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "4a582514f1b1de46d2a82c45cb1bbb6d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "794316818de8eb09048f2d5a8660a551"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "e8ed20195ce9bf72b6205f11b3824913"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "984792fcecc6a40ce57be436e196230e"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "7e5e00a8c9268d72518d7ffe481c6420"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "cf05e25def72d1f0bcef180fffd0fd58"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "be7a1cd86313d4bfddea2e81fdd09a17"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "13d6b7ae9166b3fd85d18c7b6fcbad26"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "1f0469c8c2268bd1e4cf36ee5e5eed98"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "842a404aaf9ecad2704827325124dee1"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "07d7d5e252e8e79aec0f9637aec227ca"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "284f880f4611d4d285990b25780f655d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f5b0622fc537eee3a96d3f3f8afacc68"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9613f76b753a83d623807e0d20db042e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "bb4fbbc3bbc020080d06d30c366343f1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "29c54a8ec4c87a20acf4472647ecee57"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "30d1b1dc0ebe8ef347e84ac1286f14f1"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a3490c8809c67a4dc3bd17cb73d16e7c"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "563772d715c4e589afeaded198caa6f4"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f0993a5a548e06f635c5dbfc0536668b"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "4a7b64172178f0d56f714d2c2c366b49"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f537b1fd5b6a8dcb558ce219f0e6a7cf"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "3e86118cd192a51f1c5ac53ddd74bc81"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "f0fc45bfac5489a63e218c4b9e04fbcd"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "eeaa11bbe6fd72366d95a1573da7c8da"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "37203007d319620e988ff0656a4ff413"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "668c16534ea206a8b33da9536b1f8e69"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "7532edb126935aa13b38651ee36b3e9d"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "a9ea2161cd09e87d988494570df70405"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "45b5ceb885b32d2c6d5bd7961dc0bad8"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b4f44bf4cc1e2eb34080a70ac2034066"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "5192ab134b91292f1af8ad33bc0f37e3"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "70bc7c1f8a653c89259a0c050dd6b021"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "fcf2e63bd6641f4fd796dc6e0dacac9b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "91476a05f809561bd9be3c42bc13712d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "59ccf908d179b690783aa3f1a2778ad4"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "4f79c82ee4f63c3cbca176941be6c9de"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "c9e76c818d02c92880cfae2957215a4d"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "343f35cc656634773e00c32e6cd2a2b2"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "c2dcff4f2db1a64e63d11f46648ea1f2"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "cc6223d2b97eacc82e31d1df0311845b"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "2a384ee35041e91f8bf88e778f163892"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a76cd75b7ca82e42aeade2b59c6e995b"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "e72d43755229c5e06e3f514cd71c229b"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "af5caae01209c93fcabef7290f2c2225"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "66971a7344d4cdb5a3c9b60ae5f11c94"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0f40f8b8b48f65e47e898b0394fec881"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "82b556ef218911157c4fb9e7b197288a"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0aa124c6fd68a2fea5ff7b31dae8c303"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "9e5d387c31c5524c3264fc81f3cc2705"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "2eec8e2f9c31f008256c426a59eec4b4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5e7d3887027bde51709c404782ce5290"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "1c936b31850c715946afcec817322fdb"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "945be79124b914ceb72761791afe7d2f"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "b5d47518cffec14d751407ed38bf063c"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7566e0ac61a3facc09cb68e1cba9fc4d"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "bd139961c9ae208910d9a29417303910"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c371f3685b8ca210faac587153c4edcc"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "2b01cf446ae93fee5c33eb682808b7a9"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "55a40683907dfdf2ecec22c4dfc4fc01"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "df080e01c127cd142da97a37866897b7"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "583b08550904a07c46da41ef8d60ef64"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "b2dbb91b60598bbbad7bd809da6ca553"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1b5336692dcbf056d13be613baa99fb9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "a0718f0b02c5d3fda6441ba4faee2a91"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "187710e149852a042041119922a738e1"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "391e40de70c83f06501c9fa897b6399a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d0a88ac0e729c8c92f76cfd8ffe1c6a6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2aafc2ee9d04b34ebd506d64309e3c5b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f362bb972f22db5816cf914cf8ac9707"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "68d57793d8a95f4e8dfbed60e495498c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0b29080002bb169cd80f19f9c007255b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "194b3f29ba73b5bc1aa3e8369d991e00"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "da1cb2ed55a22a77dbb9f2c9129c2a11"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "861c1534375ba916b72f1a7168194b11"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7f318b7143830c58f04b8fc7e7211440"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "3deff54a3c271355f9fb86468e395e51"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "57b81357c7fdb776f2da44589f988fe0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "10944b4463301d240ebea295c59869ea"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "589e866e7a6d729ff1a2e96dd7038060"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f565ba5f9529219bfd9b035fe2978a11"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "c063ba7c8e2e98f758c912edae239164"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "8297dc9c2679aef346f33cacb2ab67e4"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ef81645abc115bb5e0d521a4823e31a2"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "8e89d952dc122817a6aeda8fcf2f0730"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "c5c86a9189098862d19c465cc49b0a52"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "288a726edf2d5e1e840325b6d4d14ed1"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a4289c64e665fe508bdebb9bfec8aec1"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "3749c3b166389bbf9966d261b9f1ce4e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ddc3c7fec59ff2f1501b0bee24fa1939"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "c59fb470e9775c4820eb61932102f54c"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "0d22e17ba6ab76c4bc393892c2ebc701"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4188b001a2cf7e21254f417bcec35d30"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e8a73965c487bb0b444c86278eaaf800"
  },
  {
    "url": "tag/html/index.html",
    "revision": "04db795e19613b4ec1921d4140f26398"
  },
  {
    "url": "tag/index.html",
    "revision": "7c741716a766a9374e84978716eca5cd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9dba7306c0e578c211d681797e3c945b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "4e4fa9141bcd7b7bc677a74e410b563f"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "fa76103fa5f6e34e9cb89b0f21b88605"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "a6e43c07256df1df91726fbe4eafa46c"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "621fbe17c62bdb7c2abe75e0f6a0dbf5"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "37feabaf47b3a95480d266d94e4a0d26"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "15cf8484569e652b723801076094b6bd"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "5e717de28d796100e20c0c11c81eb578"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ebf80b346af28b5c7e793a91ad64c3b7"
  },
  {
    "url": "tag/json/index.html",
    "revision": "67d8d612ed07056549e31fbe5db4b0c4"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "25729a5a5453879f6c4ca0d3e4cbd3b8"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "d39eeca799dba8610a81e2610172e59f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0b1270fd8084629ff1a2db1bb21508f2"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5617fdf321a91564daa253555594421d"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "c7cab7e7de411e0a149e261f3c35d35d"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "1f4e58f29772aedc358b2511e9f3f8d2"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "e377ea7e0ad9e13e8b1e9b73faf9759e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "bc7ab8466a036a41cb86118617ffd3bc"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "f6aab7ded7ad3244e2f88f3056a80922"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4777378378cfae91a69b332227e9c8b2"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "5f8436d0090508fa0d27a3f623df4e27"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "00dc348e2d6994b5019398a68f44546a"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "baad7a6a45746bb8f0e36826ffee98ff"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "08a0ee82216df6823214e6946c55d3e0"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "a85cdb64d727a3c935e7c18ac63063da"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "547e1ddff53082aa55f74d5cc9cce57f"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "99b5b2f41c472cdaf534871ca051fd2f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "3a4e5a08dbe3b45cf489a8c7e4a53be7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "00d80d4f7b36f47b7e01b0a78b1c22ef"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "687e79f8fdf03a4e0021fdb49dfc88ef"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a4f6da7f2c22fb6d7bad5ae8d798976c"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b9bc5ae9def387a5c658f5466a32c4f3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "e70e77d72f2e8466917d01a3c09457c5"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1caac5708ac7fc7d22f569e88dd5de1a"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "c3d85cf10ddd870f4fb8cb5d511615e6"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c9f7e2c48c8a4cf58a10c3068823a469"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "46df332a9f68e47a5bf0f2ec238fffc5"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "132bfe985e00de9bb248dbd54a03a3ae"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fcb0e38a293f3c46691425ded0394330"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "5309bdb80d13e780e15e53daf5a43f30"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "83baa3871a4c77af704298822d8b6f26"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2c1f05e15e00cd20f717a97e0e21ac61"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e74a25b1be19f8e2b818c3d7f48f53e0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ba9d5f0eea7c35fd09d2fe52877b66b2"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0a88cbf36aed759ffa4ee87aa014dd35"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fbe677725d52ab472143740c3e6ce7a9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "640b16d08f602cab1c3f7626580b941d"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c9250da77c6d143fc1bf834849873757"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6200b2f31d79ff3dd3515ebdf271ad95"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "6329e32ff2fa14691a79b98d226ec485"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f5b8fcabdfd0880e9e36bbe48d48e6c9"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "6fef95df159f61fc2eb9a7e5157d8c80"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "121a9de1fab000e058b9152a79d48c7d"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "ce8ab86dd970296f172d77d6c5982733"
  },
  {
    "url": "timeline/index.html",
    "revision": "11d6990e3febbea2d25eb90aa4ccee4c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "90d3a98bdf8f27841c7b0fb539727cd9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5da00ff8e42fbfaa662b03f17d57d515"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8d8c336c369773011fda9f04b9633351"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1becdebf4cabc1fa59ab6e0cdf231fce"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0b45c4c8fc027c7c0b138c792e337da9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "507972c15755de6b31f56c77f9f1fdd6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "74e694498d40da4b59ca0a28cd854eb9"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4cd0e79a12bbf75ec160fdc897822b37"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "42955f1da4a815570cfa1e812133167f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "5b56c03d62c7cfd8acf8c5c24564cef2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "01d0464102a2391b69cbcd56a039ef0f"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "39acdfa58a3ec5a9f353aba68280220c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "42537b3cd042f740394ab12b951a7d19"
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
