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
    "revision": "7e7dddff82e7bb8585f9dd940ff32b9e"
  },
  {
    "url": "about/app/index.html",
    "revision": "58c4f0f3982e3487d9fbe4218d414ce5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f8a84fae409a97eb651dd8f93e53d785"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "62a96d39fc5da4de02e806174b313469"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "ec0c16be6e1fef695749abda498d53d9"
  },
  {
    "url": "about/index/index.html",
    "revision": "225240045c692c6ece92e9c5c3f34778"
  },
  {
    "url": "ai/index.html",
    "revision": "85695b30a6307b3e69e8f20f8ae5a2d4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7abbdd8ad4f667818f4bddcb410cc0da"
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
    "url": "assets/js/1.b74ea68b.js",
    "revision": "c5e7b23a60464e79980a65df4c084044"
  },
  {
    "url": "assets/js/10.b92f90a5.js",
    "revision": "1f0e2c60d363398c1477ab598fe22665"
  },
  {
    "url": "assets/js/100.c62f9a0d.js",
    "revision": "33778d0b9c4826e255a3631da335cdd5"
  },
  {
    "url": "assets/js/101.d9d24b46.js",
    "revision": "5c5cdbadcf0f7ba23023903d6b19b1bf"
  },
  {
    "url": "assets/js/102.88f6e12d.js",
    "revision": "b8584a1c7ecdbe13fc3286966c5bd784"
  },
  {
    "url": "assets/js/103.b89f28ca.js",
    "revision": "33afc5f28e14caf770efd647c04d2d90"
  },
  {
    "url": "assets/js/104.720982e3.js",
    "revision": "5387c8c1da27a33edde9f7e1706d49c5"
  },
  {
    "url": "assets/js/105.15b4e9b4.js",
    "revision": "babd6423655813ea54b5d909fef79de1"
  },
  {
    "url": "assets/js/106.2b7fbe43.js",
    "revision": "2b517fa9f1a4aaddd22238e848cce4b1"
  },
  {
    "url": "assets/js/107.bb0de9d8.js",
    "revision": "2d57a5064ca8e7f89e98234e4634182d"
  },
  {
    "url": "assets/js/108.97fba57b.js",
    "revision": "2baa5a87e96406f331d56ab1064b22de"
  },
  {
    "url": "assets/js/109.1c165db3.js",
    "revision": "c0d6aa0a811df3e95ed3fefd0c134ea2"
  },
  {
    "url": "assets/js/11.5025bd81.js",
    "revision": "8594e2f5e118fb7ef5b9d34cf5c84237"
  },
  {
    "url": "assets/js/110.e87126d1.js",
    "revision": "48187c26220d07f164185ce71c53dec3"
  },
  {
    "url": "assets/js/111.5d557caf.js",
    "revision": "cead74f1d7413c57860baf14d6a75b6a"
  },
  {
    "url": "assets/js/112.97712424.js",
    "revision": "7a7cede06221ed07e986167d1d0fc769"
  },
  {
    "url": "assets/js/113.b4c7f207.js",
    "revision": "84bd9e780c59923957bdf065a22dad95"
  },
  {
    "url": "assets/js/114.976e424d.js",
    "revision": "6bd522e792c2a7c134e8e501e68f265d"
  },
  {
    "url": "assets/js/115.1392fd34.js",
    "revision": "3b3ec9cc3d47dd1bfc9a227865967820"
  },
  {
    "url": "assets/js/116.8f384623.js",
    "revision": "79ffe952df97692bb3a49b2b940ff743"
  },
  {
    "url": "assets/js/117.48c94124.js",
    "revision": "ea5305ae96533156a608e8a46773fb61"
  },
  {
    "url": "assets/js/118.14735502.js",
    "revision": "c2a7f886c5c4b8598ca0ceaa9cd682be"
  },
  {
    "url": "assets/js/119.cd1ce644.js",
    "revision": "a0cb7a6033c3e4bdc551bd24fcbbf7eb"
  },
  {
    "url": "assets/js/12.8265697f.js",
    "revision": "5462499b630529b5bd6323abe9b2e455"
  },
  {
    "url": "assets/js/120.432f29fb.js",
    "revision": "ae255e2eab13d9867a85ea5a0ba90089"
  },
  {
    "url": "assets/js/121.6f159cf3.js",
    "revision": "b4b2c5b5e8d64b7c5de888c228acd7b2"
  },
  {
    "url": "assets/js/122.c3a832df.js",
    "revision": "7c80e5752e55f4da78f3d0e5aa840371"
  },
  {
    "url": "assets/js/123.f57a5dd1.js",
    "revision": "0ca76fc72a72a340b5495f2095a46bc1"
  },
  {
    "url": "assets/js/124.0553649e.js",
    "revision": "d34b2bd250870e797349455dfb967637"
  },
  {
    "url": "assets/js/125.7ce62abb.js",
    "revision": "28d57e753d870f400909e5560273826f"
  },
  {
    "url": "assets/js/126.d909ce73.js",
    "revision": "a7272f71335a2d8b0e271a6d52cddd53"
  },
  {
    "url": "assets/js/127.ff830784.js",
    "revision": "77f31be427750ce69bb55b2c8bdc827b"
  },
  {
    "url": "assets/js/128.a1dc8519.js",
    "revision": "25b5f65c8ed646005ce2527932ef1272"
  },
  {
    "url": "assets/js/129.472ee4e6.js",
    "revision": "7a838c65690d64515820908fccb4dfa9"
  },
  {
    "url": "assets/js/13.bd15f5e6.js",
    "revision": "51625acbf6f6884c4952f5471614a366"
  },
  {
    "url": "assets/js/130.c65ae59d.js",
    "revision": "473c5c3f8700f66258b0d747ec56bc13"
  },
  {
    "url": "assets/js/131.4a8beae5.js",
    "revision": "4782efc2dac671d6ea0f568b8414c128"
  },
  {
    "url": "assets/js/132.9299d692.js",
    "revision": "6bdf6fbcef6f3c176693c334b971f60f"
  },
  {
    "url": "assets/js/133.adcddce5.js",
    "revision": "c5aedb7a671aafa3f87244e2859c0cc4"
  },
  {
    "url": "assets/js/134.8280338c.js",
    "revision": "66ce006efca1a9e053f86744466d175f"
  },
  {
    "url": "assets/js/135.d68f7ef4.js",
    "revision": "a34aaeafeb07263e4e672dd80ee784fe"
  },
  {
    "url": "assets/js/136.87b0769a.js",
    "revision": "f3c9cd1afa79961fb5c9ca9fae255b06"
  },
  {
    "url": "assets/js/137.7a0ad314.js",
    "revision": "6dcb8cbbbdcd9d5ee5d8bea47cb59ab1"
  },
  {
    "url": "assets/js/138.5d813e47.js",
    "revision": "2fb05c40b47223063cce9613b1c8a06b"
  },
  {
    "url": "assets/js/139.0b81188a.js",
    "revision": "36caf297cdb7df978988e306b359a867"
  },
  {
    "url": "assets/js/14.008d58aa.js",
    "revision": "5f4c2652f44fcdd1224cbc3efe80a7e7"
  },
  {
    "url": "assets/js/140.27667d55.js",
    "revision": "bb70044077ef3b1f2440ccf3a7c18ee6"
  },
  {
    "url": "assets/js/141.6d9a9430.js",
    "revision": "a4a7b8e1a619ff960992d4d9ac5d7459"
  },
  {
    "url": "assets/js/142.659e3d5f.js",
    "revision": "641b8551c098d43383cdf38415035988"
  },
  {
    "url": "assets/js/143.6b593c82.js",
    "revision": "f91e1b8b277095e56f0354f8946a6057"
  },
  {
    "url": "assets/js/144.3c56b0e9.js",
    "revision": "4ebd17c2f622f21eea4f44d705e2e837"
  },
  {
    "url": "assets/js/145.d5707580.js",
    "revision": "6101d2fa4fffb1cc3f25489a1046f591"
  },
  {
    "url": "assets/js/146.3964ae1f.js",
    "revision": "6974f6b9a597384c91c6792fabdcfdd4"
  },
  {
    "url": "assets/js/147.22513764.js",
    "revision": "4d0d780fc5a0926119edb7a847c8555c"
  },
  {
    "url": "assets/js/148.a7e3fbaa.js",
    "revision": "f9a5b864142209e42e5a79addfab966e"
  },
  {
    "url": "assets/js/149.a14b22eb.js",
    "revision": "4cd3c4327aa57b95a4810bdbf6bc4009"
  },
  {
    "url": "assets/js/15.4056799d.js",
    "revision": "de05d438649de7d6d2be159d20e94f27"
  },
  {
    "url": "assets/js/150.12b5c115.js",
    "revision": "23684ac33dd0b4b222a9d477f4828ef7"
  },
  {
    "url": "assets/js/151.2dd13b3f.js",
    "revision": "304374556b7e11635b664b15b4e850aa"
  },
  {
    "url": "assets/js/152.bf8bc8a6.js",
    "revision": "60ebbb03e89704a340ad81b8bef27e0f"
  },
  {
    "url": "assets/js/153.8119bd80.js",
    "revision": "d096b4ec99d8976a94fc1f9917b6a597"
  },
  {
    "url": "assets/js/154.6f764b06.js",
    "revision": "93f80d930802931f58177827416d8324"
  },
  {
    "url": "assets/js/155.a9318799.js",
    "revision": "1585a296d7e3584b02a80153bc8b4584"
  },
  {
    "url": "assets/js/156.6315cc58.js",
    "revision": "df8674fee4e05ed8ae0fbbd9489e8603"
  },
  {
    "url": "assets/js/157.59a79145.js",
    "revision": "f279dc7da32dd44c6b742fac47200e19"
  },
  {
    "url": "assets/js/158.1cd94c1c.js",
    "revision": "b89a31a4f06464e29e6e3bbf0bd8ed24"
  },
  {
    "url": "assets/js/159.e0784d7e.js",
    "revision": "eb28945fffbd8b70461d639a03b7d3a2"
  },
  {
    "url": "assets/js/16.79c3d288.js",
    "revision": "9bf3a4f61f65515748b77dd7e8a2f56d"
  },
  {
    "url": "assets/js/160.decbef9c.js",
    "revision": "e2afa68530e2bab9e6465f0e157639ce"
  },
  {
    "url": "assets/js/161.e245e8a1.js",
    "revision": "440fba7635e23cc20f9d01915446006f"
  },
  {
    "url": "assets/js/162.8fda9143.js",
    "revision": "a764b5910ef77b2e5f952c11f672be8f"
  },
  {
    "url": "assets/js/163.e4895277.js",
    "revision": "0622e10604421babcf8a34e3773fced6"
  },
  {
    "url": "assets/js/164.36e22f54.js",
    "revision": "d93f0346540a3beee9633820efec8e4a"
  },
  {
    "url": "assets/js/165.2b83e596.js",
    "revision": "46fd0bbe94aa4385c85d1d49bc641d43"
  },
  {
    "url": "assets/js/166.fb7a50a1.js",
    "revision": "00dc2b164d13e62c1f74f06aba2d7ee4"
  },
  {
    "url": "assets/js/167.d376cde5.js",
    "revision": "7dee9731e0a767f9cbe44c887bc6dbb5"
  },
  {
    "url": "assets/js/168.d6c9a5b3.js",
    "revision": "cc6c03b8d1f139af6fdb66a9b61c6672"
  },
  {
    "url": "assets/js/169.ee26f038.js",
    "revision": "dcd79c1bab3e1da32ef1a2e884645bdb"
  },
  {
    "url": "assets/js/17.ba1dbe51.js",
    "revision": "382cc471d59f865d36ef0953bee93123"
  },
  {
    "url": "assets/js/170.61dd14cd.js",
    "revision": "990249526a93352fc677119506f93fff"
  },
  {
    "url": "assets/js/171.84264a25.js",
    "revision": "416ee8de57bd8b3341188aabdf0196bb"
  },
  {
    "url": "assets/js/172.30535819.js",
    "revision": "469e5b81837d56599bfb3030abf1491f"
  },
  {
    "url": "assets/js/173.3793762e.js",
    "revision": "638c35d5e96bb05e6a2a8b85f2229228"
  },
  {
    "url": "assets/js/174.8980fcb6.js",
    "revision": "5397511daaf65b13b796f2ef49507fb6"
  },
  {
    "url": "assets/js/175.828b9d91.js",
    "revision": "e32ed5dc068116251ebd40535f1dafc3"
  },
  {
    "url": "assets/js/176.a910bbd2.js",
    "revision": "17e187ea5bf06466cda4f1b4226e4a8c"
  },
  {
    "url": "assets/js/177.9cdac701.js",
    "revision": "7434ea547aceab1eb968c6497fb526f9"
  },
  {
    "url": "assets/js/178.d9cb8525.js",
    "revision": "464e31af394819d7f881ffc403546d49"
  },
  {
    "url": "assets/js/179.00db1da3.js",
    "revision": "0518b9c4c88faf8e12fc57596d28aed6"
  },
  {
    "url": "assets/js/18.10794f63.js",
    "revision": "8abde94d4cdc8ec6f5713237249a53c7"
  },
  {
    "url": "assets/js/180.3226b6a8.js",
    "revision": "b1046fcb4b20355f3d0979071f4cbc04"
  },
  {
    "url": "assets/js/181.9bb57369.js",
    "revision": "50e84db6dcf6592e2e75e9df5e4a67af"
  },
  {
    "url": "assets/js/182.849de29a.js",
    "revision": "fd349079d517b777548649e99a12a6d9"
  },
  {
    "url": "assets/js/183.25297a24.js",
    "revision": "23a31424cc21d89b8eaa7ea7bbc3417e"
  },
  {
    "url": "assets/js/184.abe4b716.js",
    "revision": "0b8e8bbbf5f88a75a07b1a57e530034b"
  },
  {
    "url": "assets/js/185.37b4bf35.js",
    "revision": "36776c5a6b2c021127274f49d2fbb687"
  },
  {
    "url": "assets/js/186.ef280cc4.js",
    "revision": "3f6c83121c8448cd7ba56cedd1e0e6fa"
  },
  {
    "url": "assets/js/187.889e212b.js",
    "revision": "dc431db9036d36e5479938b56c44dcc8"
  },
  {
    "url": "assets/js/188.b49033fc.js",
    "revision": "50cd9d5577078597777ab8d63ba7f875"
  },
  {
    "url": "assets/js/189.131298c0.js",
    "revision": "804d0f5aa8f1763009cee34799ec00cc"
  },
  {
    "url": "assets/js/19.65f73a7d.js",
    "revision": "b838eeb3dfd9898feff7ba72fd365ff1"
  },
  {
    "url": "assets/js/190.e47504ed.js",
    "revision": "a5c5373efc2c4c6bcc0770eb4d767074"
  },
  {
    "url": "assets/js/191.68d83e78.js",
    "revision": "46c1fcda7402ac1fe36a4fe228e7d8f7"
  },
  {
    "url": "assets/js/192.3060e723.js",
    "revision": "95be225d02a933b8e9a209a12085e0ff"
  },
  {
    "url": "assets/js/193.33e9cfae.js",
    "revision": "dc7d2745cc9b0cd75034fe78c7e845aa"
  },
  {
    "url": "assets/js/194.dc3a5cdd.js",
    "revision": "ee047be5c6a80ca38ee499e6c693866d"
  },
  {
    "url": "assets/js/195.858e1528.js",
    "revision": "898291f2cba47929862f95d414c75bd4"
  },
  {
    "url": "assets/js/196.1b420428.js",
    "revision": "20ffe11b1b4fb841b8d61fc720abce28"
  },
  {
    "url": "assets/js/197.5bcf47bb.js",
    "revision": "b9f4855a46a6382629e61d2e2d9b742a"
  },
  {
    "url": "assets/js/198.3c637a59.js",
    "revision": "146f60eafdd841f88a6e981b8345544d"
  },
  {
    "url": "assets/js/199.eb6d8517.js",
    "revision": "5926c8a953f3e11123a44d88ffa0c123"
  },
  {
    "url": "assets/js/20.43bb39bd.js",
    "revision": "097d54b6376cb67662d0c2d278ba8bfe"
  },
  {
    "url": "assets/js/200.91ecb46e.js",
    "revision": "c967ba9cff5c803014e82247e185bdd2"
  },
  {
    "url": "assets/js/201.79843cd3.js",
    "revision": "b8616690750235232f5fbc70082bd47e"
  },
  {
    "url": "assets/js/202.49dfd051.js",
    "revision": "4697813c871559954c7dcc038a5b59c6"
  },
  {
    "url": "assets/js/203.f70b0046.js",
    "revision": "007a8f8624c46bc385886ba55d0933cb"
  },
  {
    "url": "assets/js/204.6a1e87a6.js",
    "revision": "79d4fecdfa0b43f4bf91aaa9dce54b74"
  },
  {
    "url": "assets/js/205.f5e6c565.js",
    "revision": "048fca802b25c7d7b502257f3a456420"
  },
  {
    "url": "assets/js/206.9c1cc626.js",
    "revision": "e72e0dd8d272b6c8dd677aa99d3b04ae"
  },
  {
    "url": "assets/js/207.a60bd310.js",
    "revision": "90af28fbec9036795ec48b0139604b40"
  },
  {
    "url": "assets/js/208.77ca0165.js",
    "revision": "0893a404f0b34b9bb4121b5a3a064614"
  },
  {
    "url": "assets/js/209.445273c0.js",
    "revision": "5402f7674f653b9dabffb3bd9775e538"
  },
  {
    "url": "assets/js/21.49cdda21.js",
    "revision": "f62e002372f10f249a13479434fb5423"
  },
  {
    "url": "assets/js/210.0e1aefad.js",
    "revision": "fb88c8d92d0448c3692315c2c946ec5b"
  },
  {
    "url": "assets/js/211.1d8952a3.js",
    "revision": "1a15c01368ddab39a2c7b75af187b31e"
  },
  {
    "url": "assets/js/212.eb403fc1.js",
    "revision": "79c52e6feba1e16aa20d0590972fcf27"
  },
  {
    "url": "assets/js/213.0db937b8.js",
    "revision": "8d47463b146f567d6595dddcda41e292"
  },
  {
    "url": "assets/js/214.4930e7da.js",
    "revision": "ad222a48609b906ce8525acc011378ed"
  },
  {
    "url": "assets/js/215.97e31a0a.js",
    "revision": "5fa04dde5432d47c4ab760133b418fc5"
  },
  {
    "url": "assets/js/216.00c2ca5f.js",
    "revision": "9ca22060b4a4a1e11be646c8cd8b845a"
  },
  {
    "url": "assets/js/217.961ba7fe.js",
    "revision": "91f17c62d2b13a223cbc4fad074785eb"
  },
  {
    "url": "assets/js/218.28fc97f9.js",
    "revision": "c3097733666fbc46d94e1995a9370547"
  },
  {
    "url": "assets/js/219.5f2d2598.js",
    "revision": "4291e8bc65c552f3eacffd0dcaf316ff"
  },
  {
    "url": "assets/js/22.f022518b.js",
    "revision": "2ae04bcaa6d50dbf284b94a86cb0e46a"
  },
  {
    "url": "assets/js/220.87f85e6e.js",
    "revision": "a75433369df2f391ea7a3595e863536b"
  },
  {
    "url": "assets/js/221.2b6a2d6d.js",
    "revision": "1bf9ad5ad3ea25e91fb4dfe9e0a2f2ed"
  },
  {
    "url": "assets/js/222.ca865a88.js",
    "revision": "9b181cad2ab35aabc74fb3c83b5e3c27"
  },
  {
    "url": "assets/js/223.0ca46948.js",
    "revision": "932837651f581d5fe201350820308fbd"
  },
  {
    "url": "assets/js/224.faa07b15.js",
    "revision": "3c40415af6025ec90cf236af355ac3fa"
  },
  {
    "url": "assets/js/225.fa3ea630.js",
    "revision": "d6c5cbbd21fba65c3c2dbc9b1cd504a5"
  },
  {
    "url": "assets/js/226.28079bd2.js",
    "revision": "6755de286012733a9d7ba5a00f21110d"
  },
  {
    "url": "assets/js/227.e66c8e21.js",
    "revision": "7fb8b6c508691989be62a926ff3d66be"
  },
  {
    "url": "assets/js/228.f7492767.js",
    "revision": "8d09bf37021c940fff0b47b972e41267"
  },
  {
    "url": "assets/js/229.7713ef04.js",
    "revision": "b8ceecea46f09e938806f4e03c1e1d09"
  },
  {
    "url": "assets/js/23.93005be3.js",
    "revision": "2cfc243493dde2997341a297fcbb27e7"
  },
  {
    "url": "assets/js/230.406d365c.js",
    "revision": "7cd6d8c0f21a5af0d646242e0425ced9"
  },
  {
    "url": "assets/js/231.94dca875.js",
    "revision": "2e8b7e71d26b092bf518aae5fe24d7f2"
  },
  {
    "url": "assets/js/232.99ff4a00.js",
    "revision": "c835022e40c235b9f75171f60289ad97"
  },
  {
    "url": "assets/js/233.221f567e.js",
    "revision": "8e86dfdd8cbe770036f5d7f27b87c0e2"
  },
  {
    "url": "assets/js/234.f1e0ab41.js",
    "revision": "74e2f74d5539b367dddae3e6f2082ac4"
  },
  {
    "url": "assets/js/235.9cef51a6.js",
    "revision": "9371941f3fad3d5af92b9c6bd8da5b16"
  },
  {
    "url": "assets/js/236.84b9827a.js",
    "revision": "a72dd54ba5368e073feb5b8f951a5667"
  },
  {
    "url": "assets/js/237.7130a677.js",
    "revision": "ba9cd72634c3183c7434d058578da8f9"
  },
  {
    "url": "assets/js/238.de728dab.js",
    "revision": "b94e93963ba31cc54195d838106f6974"
  },
  {
    "url": "assets/js/239.2d8074ef.js",
    "revision": "1dc94891d2aa5c745961dd9e7946030c"
  },
  {
    "url": "assets/js/24.fa766d47.js",
    "revision": "11901ea467c4494fddf9b3eee5a3e473"
  },
  {
    "url": "assets/js/240.dbe60596.js",
    "revision": "8789d693a73c4c460e519452fb86c74c"
  },
  {
    "url": "assets/js/25.bf035779.js",
    "revision": "004d54d75bca45f31b24ec01494e5a8c"
  },
  {
    "url": "assets/js/26.44892b44.js",
    "revision": "dcc0df5c47b8461dec89938fcec2f1fb"
  },
  {
    "url": "assets/js/27.764532f1.js",
    "revision": "99432bf1678adc13c668a5cbed874d19"
  },
  {
    "url": "assets/js/28.df5b9597.js",
    "revision": "479dd849f9b56b6615d506ff6da355d3"
  },
  {
    "url": "assets/js/29.a1364084.js",
    "revision": "0720d0d60b3582087e2c547cce07f102"
  },
  {
    "url": "assets/js/30.11dc42c9.js",
    "revision": "faae076e7d03f56a668672459f0eeaaa"
  },
  {
    "url": "assets/js/31.a9d1c244.js",
    "revision": "e588b3b55ac9d3ed49d2f9a56d091b3a"
  },
  {
    "url": "assets/js/32.9507e1a2.js",
    "revision": "1a3b73f0e0e390e78c2c729947c42c33"
  },
  {
    "url": "assets/js/33.9b8e0d3e.js",
    "revision": "80266655f26ab70f0626f5b3aa4d593d"
  },
  {
    "url": "assets/js/34.473b07d9.js",
    "revision": "0f2042849367e9a804ac7a8c3f50fad5"
  },
  {
    "url": "assets/js/35.11f60928.js",
    "revision": "8577817d7b6d3a68e9f68223f4cf7407"
  },
  {
    "url": "assets/js/36.d29b01c8.js",
    "revision": "0dfbf890ba45ce6509791ccf48c1e83e"
  },
  {
    "url": "assets/js/37.01e8aaef.js",
    "revision": "e457ffc388388ab296563c375df345a7"
  },
  {
    "url": "assets/js/38.bcf82665.js",
    "revision": "06bbfc1b901b77d450751a6e27dc0e30"
  },
  {
    "url": "assets/js/39.f2bcd934.js",
    "revision": "3fa087e6f57e98e0989f2f9753cb447d"
  },
  {
    "url": "assets/js/4.4da56912.js",
    "revision": "be007d18d61ba5e5f59f1599ac6abff6"
  },
  {
    "url": "assets/js/40.51ec623b.js",
    "revision": "3d63e1a1cfa5699e557dcbf47de8b606"
  },
  {
    "url": "assets/js/41.62074146.js",
    "revision": "313eedb1b1440d47a3cabba71ff3e47d"
  },
  {
    "url": "assets/js/42.6be66a1a.js",
    "revision": "fe4ed1c39b018a4f4c3e0ad7a3621891"
  },
  {
    "url": "assets/js/43.87196e78.js",
    "revision": "50cce2f527fa0d568c11cce4a90400ff"
  },
  {
    "url": "assets/js/44.231397e5.js",
    "revision": "69f4289f25f0a032bfdd2ee80d2f9111"
  },
  {
    "url": "assets/js/45.1302eb5d.js",
    "revision": "5fe3ddd3c7f516a8c2b2171d3a2c6d58"
  },
  {
    "url": "assets/js/46.ba31a452.js",
    "revision": "09b863721993d888b9078b4487f3e17c"
  },
  {
    "url": "assets/js/47.5be2358b.js",
    "revision": "63666d95a96916cfe441d4517b4cc310"
  },
  {
    "url": "assets/js/48.b42e993e.js",
    "revision": "487a9e060687f35f47a141f8a6ec4fb6"
  },
  {
    "url": "assets/js/49.898a1ee5.js",
    "revision": "b1a344a5b85e99cab782ea6c9ad8356c"
  },
  {
    "url": "assets/js/5.7f2a82d9.js",
    "revision": "30727f26786f019a188995fd84df75c7"
  },
  {
    "url": "assets/js/50.939c7440.js",
    "revision": "55c8085eaac62d0af5b90a1c858044d2"
  },
  {
    "url": "assets/js/51.05ae439f.js",
    "revision": "4f264636eada85e6578413dc977874f6"
  },
  {
    "url": "assets/js/52.6975bebb.js",
    "revision": "e15543437e15e1a511471703931f2679"
  },
  {
    "url": "assets/js/53.e9b29dbc.js",
    "revision": "d73a1146014f0ae56a1e49811ef7d9ec"
  },
  {
    "url": "assets/js/54.4f57424d.js",
    "revision": "e26d7493ed3e285a185119e15b9e7f3e"
  },
  {
    "url": "assets/js/55.054d91fd.js",
    "revision": "89cd24f3479abcef7fc0649300a96b4f"
  },
  {
    "url": "assets/js/56.215cb904.js",
    "revision": "cae961d38c6663091cf19fc1dd35465b"
  },
  {
    "url": "assets/js/57.15914e99.js",
    "revision": "d7e932d4bf23c931689ca4010275f33a"
  },
  {
    "url": "assets/js/58.d1f5407d.js",
    "revision": "8724ccb2aa6a44a2164fcc91515edf36"
  },
  {
    "url": "assets/js/59.e75b750f.js",
    "revision": "d23d2f47bc77aef7cc70de4d7fd350f0"
  },
  {
    "url": "assets/js/6.aec09dad.js",
    "revision": "497d8649a8445c2f54c2be502a578b85"
  },
  {
    "url": "assets/js/60.d67c65ab.js",
    "revision": "65944f5d30340abd627f43f0f64e983d"
  },
  {
    "url": "assets/js/61.c5d6bba9.js",
    "revision": "9a7e5de5fb0047563f1580eae9a59f5e"
  },
  {
    "url": "assets/js/62.3b4c1ed4.js",
    "revision": "b333ffbdbddd8cd1a18a84432fc889cd"
  },
  {
    "url": "assets/js/63.dc7ce0e7.js",
    "revision": "b4805a847ecafb6b04a3e7abc37cd94c"
  },
  {
    "url": "assets/js/64.2fd2470f.js",
    "revision": "67373e9ced75efbc25f6d649d8b840ac"
  },
  {
    "url": "assets/js/65.0df44d62.js",
    "revision": "1f60e65ecbb41c87b31cdd2f7e9dfe07"
  },
  {
    "url": "assets/js/66.8ed28a0e.js",
    "revision": "bfe9a297804a08a266cc9ebea55681ac"
  },
  {
    "url": "assets/js/67.81b145ae.js",
    "revision": "a743a8f89f674db538fb2ee0d450085b"
  },
  {
    "url": "assets/js/68.cd8f173b.js",
    "revision": "dbeba63e34911d9306e65713783947c2"
  },
  {
    "url": "assets/js/69.894fd5d5.js",
    "revision": "66e458c78f5991ae9ee8d7a02a151910"
  },
  {
    "url": "assets/js/7.2ddd48e6.js",
    "revision": "29f7a724dad49be6948ea3383d030d28"
  },
  {
    "url": "assets/js/70.ea09edbb.js",
    "revision": "1a382c41c283a78917a005e87f83299b"
  },
  {
    "url": "assets/js/71.2ae2ac2b.js",
    "revision": "de434da198968183d444f2776060ad35"
  },
  {
    "url": "assets/js/72.93ecd326.js",
    "revision": "0af9063474b6ae7f7751fd86b8e6be4e"
  },
  {
    "url": "assets/js/73.ec4760e3.js",
    "revision": "a1bc8307856b1f9221cf9b0658b65353"
  },
  {
    "url": "assets/js/74.208fa967.js",
    "revision": "94f0b596f429fd1387b1c5b4c2c09268"
  },
  {
    "url": "assets/js/75.7e6395de.js",
    "revision": "cf716bac41dca74c076cd1f2f4c8e213"
  },
  {
    "url": "assets/js/76.09f36953.js",
    "revision": "09ddade6e521685c65acd55a7bbadfb0"
  },
  {
    "url": "assets/js/77.cce35442.js",
    "revision": "c8d5abee9f18e030db9b2c868c5c5c9e"
  },
  {
    "url": "assets/js/78.fcafa482.js",
    "revision": "f2b1e7e0b3648c85da9778b00cc0547d"
  },
  {
    "url": "assets/js/79.0d5189a1.js",
    "revision": "b0eaf3a56e3044d550e14b74df23ee1e"
  },
  {
    "url": "assets/js/8.1fb332aa.js",
    "revision": "b9fc34f5581483f3c49ed2838dde4b50"
  },
  {
    "url": "assets/js/80.152f5982.js",
    "revision": "32451ee30d6212143c884ba658867891"
  },
  {
    "url": "assets/js/81.a32df1b7.js",
    "revision": "fcc9ccff70469189fd9cc8396fed7de8"
  },
  {
    "url": "assets/js/82.cff81b1b.js",
    "revision": "7e88c3f7824a7794415051742a82e4f4"
  },
  {
    "url": "assets/js/83.28de86fd.js",
    "revision": "6ff0cd35f63acfc7b1b6dca60e75ee2f"
  },
  {
    "url": "assets/js/84.ae6455a1.js",
    "revision": "6ee926fab981945353bb5fc527c07c3b"
  },
  {
    "url": "assets/js/85.711b0766.js",
    "revision": "80706ab0154d0e953d269fc94757ddd4"
  },
  {
    "url": "assets/js/86.892a205c.js",
    "revision": "cd1445cacaf0b25314f919220ce5af30"
  },
  {
    "url": "assets/js/87.f6e4162e.js",
    "revision": "5df63e2dd312c151be06cfeffe21282e"
  },
  {
    "url": "assets/js/88.e0475416.js",
    "revision": "3c39fc1685a32ef092bfa9d5d31c60f7"
  },
  {
    "url": "assets/js/89.8579cd2e.js",
    "revision": "08f24fae158a1c760182c663630b9106"
  },
  {
    "url": "assets/js/9.ade5b115.js",
    "revision": "54734064a0c0e2a89a899e44b10dd037"
  },
  {
    "url": "assets/js/90.4cacef07.js",
    "revision": "b46dba81d9ea7fa722e960401228728e"
  },
  {
    "url": "assets/js/91.7cdc02f4.js",
    "revision": "b14a3989b1ada8c4cc6ff35c383f39a5"
  },
  {
    "url": "assets/js/92.d09b98f3.js",
    "revision": "63c629b86d93fed1caeb771ff0160f64"
  },
  {
    "url": "assets/js/93.7b509ad0.js",
    "revision": "37e178acd8a3e79d0bd66a0828daba19"
  },
  {
    "url": "assets/js/94.7eef7d11.js",
    "revision": "17f6a9a4fcce5a8d7bdf01b823d100cf"
  },
  {
    "url": "assets/js/95.4de89ada.js",
    "revision": "a7e2f2804ab9d7d7fa2675ca5e3c7c3f"
  },
  {
    "url": "assets/js/96.c73e7e81.js",
    "revision": "97b9ce7b0a14877356fd5c2b2566f372"
  },
  {
    "url": "assets/js/97.aacd026e.js",
    "revision": "ed4535508422ae34589eb80ec2487e42"
  },
  {
    "url": "assets/js/98.af0445aa.js",
    "revision": "97e6751c940024121ae5d53b1a466da5"
  },
  {
    "url": "assets/js/99.0de8470f.js",
    "revision": "e35c82e95cff71d52b1ba4f76ca890e8"
  },
  {
    "url": "assets/js/app.ba87bee5.js",
    "revision": "4d0887f81a7c74cead4f6373f045d600"
  },
  {
    "url": "assets/js/vendors~flowchart.65e94d02.js",
    "revision": "0ebcd0f7930734160e15c97a4105a0f7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "59c041093d88ca2b65cfa0fb9a3ec88d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "2cd28bf451f5c0ea676953ad7871abab"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "6f487485d2f441dc9f8078e9f7f9c0f8"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0dc8ec434a4d63abf6f221fa0429fb95"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "438d424afa9e34796c43fbd1438a4615"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "39396506486937b74a58a0d687b25892"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4381a887d10bbcb1883fa9bbd18ffbe2"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "71ec5c327187d59333f9001057bcc663"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7fcc566bdfddc17b9578155b591a52f3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "cc40c3e641b9a852e4014d09b998ddff"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8552db41dd93a86c95e8eecc663a5b38"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "021b273e63fb9e5450ef64743d2c9700"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "1e4d1ab56903da1338213115ff1bf39a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8c7cd5389d664f944a2b0f3097af0e0c"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8ec282de7e4a58106ea53059ee067c5b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "2a6649c0dba6266469672f28f1d6a3d4"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "c6dccdae15ebbd42695b6055c3d142c1"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "3e4e0299e69694edc4edc0993fec4c8e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e9d59aaaea9961ca9348fc3a36d5ad24"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c3dc79fc95b9fe24e039d724ab9ebc75"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f4813e91ef4d7cc45bbb17b2bb2d9319"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "f217808e7bc0474adb98eec2e3b52c45"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "462a5ae3ea3355bfcf12ccb83fe0fb3b"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "bb148573c099d5977a63f25627646f68"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "614bd8189d304238ef7368ef3f9492a7"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "fb30c1864a4aab545ac3e5dc859b7266"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "27f318148b1d2378abff7c6bd287b7aa"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "23b567e2be74e8b57e2cb982357531f6"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "e643cc3b34a6acd8a4145df3141fae52"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "224732c0e1b87d3d5a0c526d492ae382"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "20d8c12662c46b975b4c9ce7bcb6adc8"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "391eb63eb693144c511aa758ba0e722b"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "1bae1e3a8efcf416702614fb7112b92b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "db7b57a147943dcc61ad70c35a6d2670"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "09f42888c84e0d469199654b9b20ccbd"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "03c18c9c1e9e7174ea6aee1eef9b430b"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "3e3b1b6255a7aa63882e9aa548fd55f7"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "cf397715d1efe1562050a4c01ad5f731"
  },
  {
    "url": "basis/index/index.html",
    "revision": "03d9a0af1d29e02b5d1aea419869bc85"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d12d53e866d72042baf7883cd463bdc2"
  },
  {
    "url": "book/index.html",
    "revision": "550a4f13aa2d18299383972c765018b1"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "02e7c892f35e2dfbd03b3d6dc9dedde7"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7bb288f840bfd757d52b942493f6514c"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "43d4c6e98277d4072def17b32996e619"
  },
  {
    "url": "c/audio/index.html",
    "revision": "c14e141fd44c48e9809ec2f608f4afb1"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "d7812ae9d058a5d5238923f53e6ae2f8"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "94b3b27c4b9811ed4dd9b0359b93de15"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "c1f6e94cbd710b5a78058b7fc3a7b706"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "8d6045098ef537a938a201d6891f961f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "52c0fe86e29792ff4a5fa41a12841e9e"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "1e4031e678c293b3b26a3673b5f11acc"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "a063258ebff7d0c4542ca3a00b7816c4"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "939293579eab3b6b74c9913b633e4f69"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "0f37cb009aa4d4cd96f3cbd68311601a"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "9fd01618d89d1111c8b4aad98f7c3142"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "983d08401b077e061f86d08995c1204f"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "827471a78e9e416ab131f9f4104938fb"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "e2d47d4280c3e0d2d02507125ecc9849"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "1de0a8ad7ca5eb4b28adec924b2f3a36"
  },
  {
    "url": "c/program/index.html",
    "revision": "4756e6ee7b541419a3ccd1feb43a086e"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "85f2241cf3d113cd7f6e3c80aa31e31c"
  },
  {
    "url": "categories/index.html",
    "revision": "24b363ec8d1787de508e79b544a4f209"
  },
  {
    "url": "figma/index.html",
    "revision": "435c0ee8294031850a5ecbc81a692d45"
  },
  {
    "url": "flutter/index.html",
    "revision": "d5a417db60b3cb3b77fb45c66a90360a"
  },
  {
    "url": "flutter/point.html",
    "revision": "8e4ccb67d6d6e0b5b72846208bfd9716"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "82f3d67164f7af0ba4360405f4719b00"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "dae21007cc5412e126f0e7dcd45c92d1"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "eee3fd8f18c6852f27f78e7ad2ce9a45"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e80e884784b9f3edb2ba3e956f91516a"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "bd2de6c2ff4e1c63c75724af5298f031"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "dcfe8b0efb19766e903c40ac4eee1b16"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "df629794e4afcb30d9d0d0af2d8febc9"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a06e1c8f60d00aa8c2145f6e46096aa0"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5a041409325d11d4c3faed35a76e4ab0"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "87c7c107f35609eb0f7cf6d25b592796"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "647eaa14d3c386c790ff61c80b298456"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a4bce5c2f6b92af77cdd41d34f0d40ff"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "76b21d9e2c01aa8fbfab1554b8e3189c"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "aa44f7818241fd25de18bc88e7af76d2"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "cafcbb2e4d698b91b087d2059bb1b71d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "0f3d3b71959415aaadd63f92a4de7d0f"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4a73604aa6127b41d35957f3b68e4837"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f901168999745dd5546b8bb525fcb977"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "8fbcb4a4cfa79f39a8dd6aa345639e1c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "5ec8a623234c1c1304c6605394e49a56"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0a106cca27180b815b106bf38dc9b861"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e4268bd9c81486c834e9477c36688503"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "67cb0e7a1dd81f72e67ed6308fe82045"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3b220fa640ab540d3a0fe54e42d94f61"
  },
  {
    "url": "haskell/index.html",
    "revision": "4b094843a86a36ee64539f8a3f6cb2fe"
  },
  {
    "url": "index.html",
    "revision": "a3f509869d89c10033c7b7308856b112"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e1613bf68c8b484988e76da99b3df0e6"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9aeec0591412f283526db788b6f5f476"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "4d7f715486308a3d4a679b64de50554a"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "237beb3cc9d06bcb3beb95fd1bcce3ae"
  },
  {
    "url": "python/index.html",
    "revision": "dd74f0208b398020787d48731bbc5496"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "5b93bdbb03f27db2cd667cdac294eb01"
  },
  {
    "url": "swift/better/available.html",
    "revision": "f49dd9bcc45260badb719bc548a79179"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "2a2b332864b6999421fcae9388a56b95"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "816e020e0e1dd9f9b7cee1c2a55f19f5"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "8b3fa305cf3b83127ad8f34098a6265e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "4284c388a4535358119496064bf609dc"
  },
  {
    "url": "swift/better/index.html",
    "revision": "241bcb90b1c4a4c70505e5f420949192"
  },
  {
    "url": "swift/better/last.html",
    "revision": "49a6caf826e0d88c7aa113d18ac5b503"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e5f1154e084f26c7b50f995bae3b8fda"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "348c0a4d396cf4bff7a4bc378c1b4c92"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "581c85f656a822940d35e6c13fdd322f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0841b48daea8eb9ce4dffb9d598ff8bc"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "fabb8f7908306ceeda2cfca14cbf0b1b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "7832bcebe40138582308621452519f6c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "cbd65491a749dce06b41440562ff3911"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "94260b346a9055dd82f9dcef36697015"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "11aa883995ca122575d73b73348d9147"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "621cd0a7f340cb3626cb87cebab15b34"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "40825ba404b91a6f13f643543ba71d25"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "2c707d57afe21ff69abef2866c4703c7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "0dc5bece666cc1bff696eb036468cb63"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "3130a22691e27b4e4ba13e2942ed944f"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "6a4f5f8650ebfb102ca092af46b8fbdf"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "69f2bb5ac326164b4b2ab4c98986526c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "65b1efdcfc77df34d2b736b1394128a9"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "d398e115f88e2b0fc4b40a0400f50768"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "11d96ecdae1db85bfd9c6c644592e17c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "054b929db13197fb4bd71bef78f6359c"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "b1de38d0d8762f555430b312541e4b96"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "734e01ea26ffdb1b81bdb157183c57b5"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "922b9740ae55800bd4839345cc4f8f66"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "d1ab6dd264b7d75ff7e584ba178eada7"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "55c39a6fffd85c78a238c9d834d216dc"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "adb9216fbbf1be95cfe7b26be0dd43c4"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "2f8dac698a6d90e0879867a00927cdc1"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "344b7f9118b854ff5e5c9c39cff8d338"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "483b84f9bd5c6358523d1d4edf2fa508"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "9ef27988fd19fd316352d593f74eed61"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "baf9ca86dcc5c8085af776653b9f8e1c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3efb50a776ec218e0fa542dde51d45b1"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "354a36506b2812a87df4212996b50826"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "89543c296750a4316b124e954e2a991d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0ef195d1f53746e3afccd2d42752a921"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "4ce82c71617abb68f646fef9617f4343"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e7ace30d846c5edefa97b1a3c5888560"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "81d112c55275db031ad1dcfb64cd08a6"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "d99a9a174d955c13a23e36e10e3e4c71"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "da9b1d3154747366e68874af3fec1810"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "f2da1aa22c1d7f8cdb99199289a194a8"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "7d6f542851a3a22e1e79c1c50edc2174"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "74d5fd488c43e85913509da18e22f5ec"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "6c59bb9ba01d1eaf22c237d43f1d6780"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5a423bd8a69defedc7146cc9f2ff6440"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b0d733ea4ce5baeb8bb785ae0274771e"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "417823457329b17e4f9d925d33fca94a"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "a5b79a8e6e6f68d739693cf73a66a18f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "4a9d61b339610db64ee1e9c6db266623"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "d0a89265ddbc31ae46de786c4a874493"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b26bbbcd24daa317616418b8341ca507"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3bc2a74638756b577ffb4bc0aec5a54c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "29dc4ddb934a7425c5c6572f4410aa56"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "112c70fa4932cc14345afda44759f2fc"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "8a0fb75b229d733f0b3c271ce74c4e8e"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "91df953afc7d17092f77b4382447b41d"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "ebf03fd3471d7a752e71d14ee4dedeb7"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "ba191d06c428c7f33140861dbe846a13"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "052fe518f85bf6745afdb61444f2c2de"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "1fdbcf3fc4bc2567dda31877de500890"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d26c8f197d36aa6c87461ef76b0601b4"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "1a6dc4ed27fbd74fd7a3d5175badc0df"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "c8465508d0a0b939888da36a9f59535d"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "7294a65e43d3b68f172dec07e6d0feab"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "705ea808fff3375f7897836e63cae4c9"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "03bc85ea26f4767484125fc839aa09b4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ca8547755f644aea3e9055c1786752e8"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f41af524ecfce74ea7da73d33a983539"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "b988aee63bc7fc1617f3ed16acdc4f25"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "705ebc31ec08489a82ed44d59ea6a771"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "156f3bbc967b9c0680e48e6a59edd10f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "69536932177b296fda886e7710a4e2e8"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "46bac82a027b5246533344ae5bf95764"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "bef11c36d78a278166a74ed97c5d4cf7"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "a16c79c29bffe75f57fb853b99ff6121"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "cce3132f7b679e679a4fcd5522f0a644"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "e3ef0803ed1542e9ae0ba8a22e9a8df8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f80412f7a984edc883413719d8aceb0a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7bf76e77fcfb11d4fc040b4a18f0d044"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "064aec9da38a40d82837cfec4d1f3ae2"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "24e1df96df29ed5156ca6fde7a417f8b"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "48ad24ac0a32372cca8bb5aea220bc10"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e82a9625438b3af243b4d3b1176c1417"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "f96586963b7559096da2a84a1f0ebd05"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "7b616635df8d56f02c4c80abbcf674b3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "27a3071479f008f39102a150d7bf8993"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "a144ac81ebcb385630739479e004b7db"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d0e8b100b65ddcc73bbfc3f4e289fddc"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "650391b03633ba103bf83b751a7897cf"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7ed2c1a8ee355a9201d276dc99d769bb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0de02ff31f0021f359d5d3c93b62fa6b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9b4a82adccc68e953aafc09ec45f66ce"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b22c5e9d42deea81a1ee1a698451952e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0725c14db1deca11e36ca4c42ddad9b4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "a6ee3a3456d60dd981909143d3f4f971"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "102d66a0fb441607b2fab014fe413cb3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "308ad5717aa6368eaffa9ff62c6ee914"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "31714429101fce582364550826e9d147"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e9217d2c426e5f27d113efcdf57e051c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "9340a3d218b9f76cb2b6782632ae743c"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "45425288127e13bdf2912549a86e32a6"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "af3213b6d8ec5456203215ea8967f616"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e526166af68a847272306869b49dffb5"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f14637c069ac5f65c7a9440da5b2eea9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f6e6d07b2dbc9c20d922f45113cb1b1d"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "1687623a80a4b23cd7efb05a85351aaa"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "4f4789e59cc8bcc5095dbe3246c26071"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "aef49dd16d65c47ce29195a8d64ef751"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "08956386cbf00157d653397dc142c670"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8610c4f683cfc99368a400ff1677884b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "000f77ed6437d25b28df7ca538ce7219"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e15196ebb8cf7256de5ca3e0f70a21c9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b8458a48e41c0daf643213d7be60caf7"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "4786917191492a3fc3ca1fc95591a1d6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "273034a8cfc7ece18270bdca83eb4314"
  },
  {
    "url": "tag/index.html",
    "revision": "ac5a8853c2228f70ebe9feb127762e6f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "6aadb534541847bdc3b3c7c693042533"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "58ede1e150324cbda8dd82187372250a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "c917f234b2ac230cd2f7bdfe9468eedf"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "84f7372b9cb5700c31f379917ce5be33"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "3cc54562334dccc229563ecca1486c75"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "6cc51b2077fc12aab82e5276ef8ea65a"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "52c75d3f688cd4ecfc9d0d5aa4b3f2b8"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ea41e1ba050f7ccea4a9a4f09bbb241f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "1cf87a7df8cfe4279c0b5ec7b8a61418"
  },
  {
    "url": "tag/json/index.html",
    "revision": "cf7e6b9222ea46578da1e6bd0e166621"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "113374d6b0dd2023406e50f2f6c82ed2"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "cfe56197ecac12a46314778512215114"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f0b48294b609964cee260bff17c2c637"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "790ead655834976166a3505ff5376464"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "bee4e43872823d3de0519a07036927ba"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "a03fb6d257cbab9772ff569c702b4e16"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "873c08df8e545403c6f3a6a833eb9d56"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "ecba0194fc279c1ea0fa4a233aac8237"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "bd0ffeeb3b01b115d291ca5fca6a90a4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ad7dee7fea04fefe8616422dea8dcb95"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "385590d6f34661f430881f58cc5b02fe"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "8a345a6a540da5d408bd04fd38c8a8ed"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "183d2ef604034545ae1b5e61d52cf818"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "6a3ab36ba05b12eac85700da04c5ee3e"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "8e36b13b346d3e53d7e26e0b43aee7df"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b8cb78f823e0bee4a19bbbe31427ed6a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "2c58c74ae37f00317f5094202ec365e7"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "750c69718e83494bff7336542a6c355d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "9090d6f5440ff5cddcf89002984cec81"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c969e211f84a1edf433bc0d8d5549ecf"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5e1eeb3411f2804e39fc998f6b9fa3be"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "1397a9871b646ad8dfdbb8d405a81c82"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "7060082698109a2fe868aeaaf47bbb08"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "115f9856808059e3dd6ac07af68d2bff"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1c3d229846a9f5770e7c721a774ae1c6"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "abc93c85b54631d2b39900d29ce38fd6"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "a7e4815ac293c300d1b98ec0c812329c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3e1099b6d76d7c5b0f0c7bc920b96c3a"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "5859115d48734d685de280ba155fca07"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1057c6c7c77d31f6135914c29e8a4513"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "cdc8cd44688c5151abb86bb91412ff92"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7960f2a7fe4231916b43039bccb9f0fd"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "f3e9e9d30a2b1fed4fb3401188d41798"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "89009516254bbd50bc7e41da23572bfa"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "beb982ed4e2ee0620612882d9b639fd7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "eb2e28549d547b79cc9381f48dec61c9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "66a44b0782cec5038c0fd6c30c8024c3"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f83101e23a182b063235bbdda2c67237"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c53227a6ba9b9d9dca3ec958736524e7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "3e165bd2554dba85bfb90f7f55d1acb9"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "9a0d6fe1f634356efb7152c6568f8341"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "229268493ff82de0fdb7d27342e13bd2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ab44b0e854e83fb84401c5952dd2a0b3"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ff5480c27af891f9847955eae523cd79"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "0f418ec179c17704c7e1c0b5e4bd9b75"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "d79553d1034859856db69f3f10f94cee"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1908c6ef7ba14098fd02bfb5ba727e53"
  },
  {
    "url": "timeline/index.html",
    "revision": "2812531092ba27fb5ff5af1a8ad03094"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "038873945bfd3cb36c701f82148d62f8"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "68342f09cd9aeab18bbd3a97e9b096a8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "fc6623d7a25243d8004d10e21b31c270"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "22c6045d3297f1ea61cb8d963b2a04e5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "0ca8995efba55f1012a5e9b6c81e224a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b149ea09d8bff859028da172f9231dd1"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "acb7ad73823b06fc4de712baea5dffa3"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "d8ef055fdc81f6ac240c07703eb55786"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f3d38037768ef9ae8ede75c6bee12e2e"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "26cce299c853f8d1d5b6fdc8f48d87fd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0fb63302e9384a209d5bddbd33e6dbc0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1398ab70951fb83d0b0afb1a6aed6535"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "26de563dae4d5dce551d002f12c1caf9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "05c09d7b725eb2731ec8bcbb04d255a3"
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
