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
    "revision": "e3dc6fa6c6a14ac0e6a0360a3605db59"
  },
  {
    "url": "about/app/index.html",
    "revision": "2f06403006e34e5d870d6c08ca17c0b3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1130363ef0cf55ffd25b1a7fb60d026a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2afa925ce57c57b234da8196b7f1a3bf"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "eab11adf0b1ddfad65bb0a15bf3bbacb"
  },
  {
    "url": "about/index/index.html",
    "revision": "3d039f8472ece5c1bb6534678f53fb77"
  },
  {
    "url": "ai/index.html",
    "revision": "ba4d7eb7f5a35466270dd5c86b3a32d4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "610d29cfdc5d4925ddd2b9aedaa1ec9a"
  },
  {
    "url": "algorithms/index.html",
    "revision": "932e593863513ecc2df5cea73e55b6bb"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "a75b4fb9ad0019db12c7b1b1929a63a4"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "13fe7582551e836a04421203a450a2f8"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "ca7db3b31e609345860a58fd0d7f316c"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "11e049bbd4e54f328df680ca9b00d7a8"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "91cf929fd6cd348a296d3a577694a63c"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "70499b058f9f3312c2b3c98e048761da"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "5c2e2f5f387dfd68e02e9f7400e5d62e"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "192ae45b59179fdd7f6b887311fd2cec"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "5986a526622aad3454031b05c763b433"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "14ec7cdd3bd18ffc8f510cc659221f68"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.09c75cd8.js",
    "revision": "1fcb58aeb692bb737c61eceda8eb0439"
  },
  {
    "url": "assets/js/101.15cf8b77.js",
    "revision": "a7465ef11f9c67f45702d264d06bfea6"
  },
  {
    "url": "assets/js/102.ca5426ad.js",
    "revision": "cafd07ce91ff0271252217501e43b401"
  },
  {
    "url": "assets/js/103.f48a2ff9.js",
    "revision": "09f191c591517983169ea8ff853a386d"
  },
  {
    "url": "assets/js/104.09b129c9.js",
    "revision": "06b37a24806127065e169db7d5781639"
  },
  {
    "url": "assets/js/105.16d8fdf9.js",
    "revision": "e5ed0a91d26cb66a16d54432e0efdbdd"
  },
  {
    "url": "assets/js/106.71bc6a7f.js",
    "revision": "9b61c9ccd3ef3e8ae5893b970e5593d4"
  },
  {
    "url": "assets/js/107.7ca9a14d.js",
    "revision": "fb94303ed7ead9e56414029b6de09257"
  },
  {
    "url": "assets/js/108.b415a5e6.js",
    "revision": "d509fee6d98c05de014162fc459e5ebb"
  },
  {
    "url": "assets/js/109.9867e1b8.js",
    "revision": "2f8a76abc5daa0a34038b7a2571d48ad"
  },
  {
    "url": "assets/js/110.39c3c738.js",
    "revision": "440c2a3c1b59de99cbf916fcce288940"
  },
  {
    "url": "assets/js/111.3d3a554f.js",
    "revision": "fd54f249a1e8bf8712e3b40ee29b1c2c"
  },
  {
    "url": "assets/js/112.3678d88f.js",
    "revision": "dd31933d535c955c498c21e5658fcbb2"
  },
  {
    "url": "assets/js/113.5ebd996b.js",
    "revision": "4182e6068e8d327c72d9d3d187374464"
  },
  {
    "url": "assets/js/114.197707a3.js",
    "revision": "4f71c8c78b9b1bce80014d19fca2946a"
  },
  {
    "url": "assets/js/115.cc01eb96.js",
    "revision": "4c012831eb8da5ab9b5f388edb68a9ce"
  },
  {
    "url": "assets/js/116.8104d3c5.js",
    "revision": "292ab9dedb2118a26d173dcfb3b5a8c2"
  },
  {
    "url": "assets/js/117.1e2f6874.js",
    "revision": "78b037a72524a1f66c716e6d8ce81659"
  },
  {
    "url": "assets/js/118.dbb6d042.js",
    "revision": "1c1d8633c60af1741fe0f919298a8995"
  },
  {
    "url": "assets/js/119.cea47031.js",
    "revision": "e97148fc4f1fda8045193ee85223db2f"
  },
  {
    "url": "assets/js/120.7a914dff.js",
    "revision": "5a59a872f228a9fcc510ba6d1646001f"
  },
  {
    "url": "assets/js/121.a9cc277d.js",
    "revision": "b12a6fd9e47269d97a5d37539bf4608a"
  },
  {
    "url": "assets/js/122.a990c7c5.js",
    "revision": "768ee13297f68be96a0e41eb16bd40a1"
  },
  {
    "url": "assets/js/123.848521ac.js",
    "revision": "8d59e81fd6d30b81e5bcac8f7c154753"
  },
  {
    "url": "assets/js/124.5f2ae79a.js",
    "revision": "01ee597235ddb43897c008eb54988f80"
  },
  {
    "url": "assets/js/125.35624ccc.js",
    "revision": "b5b97adac8a1aae82859ee5750233b82"
  },
  {
    "url": "assets/js/126.286c7d55.js",
    "revision": "102535feaefc2c6659e9a9087c2f8166"
  },
  {
    "url": "assets/js/127.5a1d09ed.js",
    "revision": "6a75b45e3013ae2ab96b11e7c393c57b"
  },
  {
    "url": "assets/js/128.2e133b48.js",
    "revision": "278db52133dd4c91c5a2935132c237a5"
  },
  {
    "url": "assets/js/129.fa0d1776.js",
    "revision": "8452b0de652fae77c76851ac54bddc01"
  },
  {
    "url": "assets/js/130.f29c8ed3.js",
    "revision": "2a0f2609d7b8b0eece052ae35b9b127c"
  },
  {
    "url": "assets/js/131.eb105d93.js",
    "revision": "2215ba4689019e189f5eb3717d2c2415"
  },
  {
    "url": "assets/js/132.db61948c.js",
    "revision": "33a9af95828b11dcf6154f0aaadf1805"
  },
  {
    "url": "assets/js/133.5d754756.js",
    "revision": "f4f77d6181cc32a813da495fdd770634"
  },
  {
    "url": "assets/js/134.dd70b5ee.js",
    "revision": "d457154bc845574bdcd4c2f52815d69b"
  },
  {
    "url": "assets/js/135.09b72b1b.js",
    "revision": "a07a635a1d0fde00d493af9a6d6a52c2"
  },
  {
    "url": "assets/js/136.37879cf3.js",
    "revision": "60abab0ac2124cd8343ac7c2aa973c35"
  },
  {
    "url": "assets/js/137.f6810fd6.js",
    "revision": "108cb3d1154603c041ceebeb7859cf2f"
  },
  {
    "url": "assets/js/138.16a21c31.js",
    "revision": "5568f14bc9138e471738b59cc21cc078"
  },
  {
    "url": "assets/js/139.0b1649ca.js",
    "revision": "075f3a4f2c96dda39a815c18b3275043"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.dd7cf92b.js",
    "revision": "f3149e6a6786f7559c40da5c3f1767fe"
  },
  {
    "url": "assets/js/141.c6351533.js",
    "revision": "195db2418357d833941ccb3edeb67df1"
  },
  {
    "url": "assets/js/142.414e82a9.js",
    "revision": "4a65cd99e8c6dd42ee90d33a8e4e6003"
  },
  {
    "url": "assets/js/143.ffcbe888.js",
    "revision": "906104cffd46d77a8a1692e57ad8f4da"
  },
  {
    "url": "assets/js/144.4e4649e1.js",
    "revision": "fbfa17f2208d98358b6b04f2062890a5"
  },
  {
    "url": "assets/js/145.cd44f4df.js",
    "revision": "c3f4f6c928026c163e6e86e75b2d9d27"
  },
  {
    "url": "assets/js/146.841e9cfa.js",
    "revision": "3f974bcdbfad66e2640433ca09250f22"
  },
  {
    "url": "assets/js/147.88fbe495.js",
    "revision": "28472083693e54697c97478d5dae3191"
  },
  {
    "url": "assets/js/148.22bf46a4.js",
    "revision": "17cb96b18f6684d60d86a9918394d043"
  },
  {
    "url": "assets/js/149.24db8c38.js",
    "revision": "2fb5d9ea2f8338326abcfd2f538d91cb"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.0f8bf57f.js",
    "revision": "a5e023d432e77cca3f95951cd87293f9"
  },
  {
    "url": "assets/js/151.18f9a120.js",
    "revision": "802e71f31df1bb7e38f4e310abacf47d"
  },
  {
    "url": "assets/js/152.3d98ab54.js",
    "revision": "49a16d7ea04edddbc7b1062b3a8d46ab"
  },
  {
    "url": "assets/js/153.851e5509.js",
    "revision": "ec960c4f203e6d58c562c0f730c898f2"
  },
  {
    "url": "assets/js/154.942c3127.js",
    "revision": "7e9e69959949a98d9818e2cab95595d6"
  },
  {
    "url": "assets/js/155.f3bd0f43.js",
    "revision": "85a809e68b0e666f30b7f37ced62ee91"
  },
  {
    "url": "assets/js/156.4597e710.js",
    "revision": "107099f846e5dc9de8954ecde7ea5c10"
  },
  {
    "url": "assets/js/157.08d92fd7.js",
    "revision": "0f5fd8f49215689f768c6d41e310eef6"
  },
  {
    "url": "assets/js/158.5e01ba69.js",
    "revision": "eb1192dbff6ddc61993e59d76d6ab063"
  },
  {
    "url": "assets/js/159.46f75739.js",
    "revision": "867402b0f5146abbcde39e703e4179bd"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.d6031887.js",
    "revision": "29b693257a9497db74a006941e3c546f"
  },
  {
    "url": "assets/js/161.70177828.js",
    "revision": "2b0ce8c58ddda78e91bb6b237b1eb3b4"
  },
  {
    "url": "assets/js/162.a5925743.js",
    "revision": "66493a54a79cd08ec1c8b08bb9799988"
  },
  {
    "url": "assets/js/163.0a50e560.js",
    "revision": "d06b9ebb225f8a91ce40c4f4edb0d8e7"
  },
  {
    "url": "assets/js/164.21b65015.js",
    "revision": "b4c940569ecb3848380eb5fc5b2b056c"
  },
  {
    "url": "assets/js/165.33c4bf69.js",
    "revision": "11fd94ae952f06a37f9e888f56ea6fb6"
  },
  {
    "url": "assets/js/166.63a8d8db.js",
    "revision": "7ac8c6e4af555a85c465e8c94a7dff1a"
  },
  {
    "url": "assets/js/167.18fee816.js",
    "revision": "80c09f6f5d0e74d6eb339e8fc60ddb96"
  },
  {
    "url": "assets/js/168.e2e4d659.js",
    "revision": "74dc63bf62fddb51013cf9869d584491"
  },
  {
    "url": "assets/js/169.efa2db69.js",
    "revision": "b098b91039c25003fe158db772735bee"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.9ecbed26.js",
    "revision": "f1bbc793fce9f5508c624dcd85293bfc"
  },
  {
    "url": "assets/js/171.3b085355.js",
    "revision": "6233f0124e88c3a5d233aeb7e24efb17"
  },
  {
    "url": "assets/js/172.a81f8a83.js",
    "revision": "ffe60d28f7210b9dfdf57280f6ecca46"
  },
  {
    "url": "assets/js/173.4b3dcb72.js",
    "revision": "c7b120d59286bbc22df2edf36b2cbf4c"
  },
  {
    "url": "assets/js/174.2a2ea11c.js",
    "revision": "980849fcd81862106526666b7be68425"
  },
  {
    "url": "assets/js/175.c52568b4.js",
    "revision": "13a632cdf0e28af83783d98ccb89b82e"
  },
  {
    "url": "assets/js/176.a12e875a.js",
    "revision": "f59d9b37da812e84344e4780c1fc1874"
  },
  {
    "url": "assets/js/177.4a3c2cef.js",
    "revision": "b126eb512d23228c134044d0bb11a5af"
  },
  {
    "url": "assets/js/178.ff5dacb9.js",
    "revision": "6a8daf56b50f01a1eda0573e72fffc34"
  },
  {
    "url": "assets/js/179.3d699a64.js",
    "revision": "07a0d7d67c243085b611e04f1e106f0a"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.2150099b.js",
    "revision": "124563b4ab88ad5f2eed37b8015a408f"
  },
  {
    "url": "assets/js/181.9dd98a22.js",
    "revision": "ba20adf1cd09077b489ab04ff7c42fd9"
  },
  {
    "url": "assets/js/182.f9ba1f58.js",
    "revision": "b752862f7532678acc6aa200cdbdecef"
  },
  {
    "url": "assets/js/183.7248ec51.js",
    "revision": "3480686c6c98a85c0f5d1a662474f5e5"
  },
  {
    "url": "assets/js/184.90d9aeb0.js",
    "revision": "bd7a50e2df8734a4e945ac7823c1ec16"
  },
  {
    "url": "assets/js/185.bd3f12e5.js",
    "revision": "a76fb34025e8f93ba58c72bcec8e58b6"
  },
  {
    "url": "assets/js/186.11144444.js",
    "revision": "46dcc41b3e43ec3aef6293409cd27900"
  },
  {
    "url": "assets/js/187.98f3b803.js",
    "revision": "d95b0a74fd1a18b4d95a485705463b01"
  },
  {
    "url": "assets/js/188.d0b4fdf4.js",
    "revision": "54a45dea97897f71b30b99113e284d14"
  },
  {
    "url": "assets/js/189.6688c44a.js",
    "revision": "ad799014f4c64643271ce71bb2b9b631"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.8e2b1534.js",
    "revision": "3c01b08ad89e1af8f8571a78217f23b1"
  },
  {
    "url": "assets/js/191.4d17306b.js",
    "revision": "de16350509fdb289c4d989c6e224e4a5"
  },
  {
    "url": "assets/js/192.4924c567.js",
    "revision": "b6bdfad1e3a558199176e6f0f3cf834c"
  },
  {
    "url": "assets/js/193.e2d7a842.js",
    "revision": "d41d317518b39412627a6b25e93b28a9"
  },
  {
    "url": "assets/js/194.261d3322.js",
    "revision": "520c3ffb3fe548a55a603c0378bf0032"
  },
  {
    "url": "assets/js/195.37387cef.js",
    "revision": "945235858e076504b2d1b25621a27d20"
  },
  {
    "url": "assets/js/196.372fc8e7.js",
    "revision": "ef83f4ad0129adeb3b19889f66dc54fa"
  },
  {
    "url": "assets/js/197.dc18e670.js",
    "revision": "d8170cb10017a5a1ecc2289a10c3c6cf"
  },
  {
    "url": "assets/js/198.ca3f146e.js",
    "revision": "80b2352ca5e142959cf0b5f6c48c48bc"
  },
  {
    "url": "assets/js/199.0512a4b4.js",
    "revision": "ae3153b12fa5cd2898862c202b3f0075"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.ba796cfd.js",
    "revision": "ce1213efef060554b2f883bd5fce762c"
  },
  {
    "url": "assets/js/201.8e160138.js",
    "revision": "8e743e58d903bfd7e947e52b2b9d2587"
  },
  {
    "url": "assets/js/202.fbb84ba4.js",
    "revision": "783a219b99dee18819c9baa5d1d699a2"
  },
  {
    "url": "assets/js/203.c54445ab.js",
    "revision": "171339c2ff6704651cb49749b4218b0d"
  },
  {
    "url": "assets/js/204.68f23619.js",
    "revision": "5bfcd14a08e430e36638fd03811c143b"
  },
  {
    "url": "assets/js/205.f0639d0c.js",
    "revision": "ecd8a3de591f01d66d373c64a9bf2f65"
  },
  {
    "url": "assets/js/206.b864ab3f.js",
    "revision": "1a365cec28bde7cd9984054de01ce73c"
  },
  {
    "url": "assets/js/207.93bdb29a.js",
    "revision": "9f1197f90179aaca830bc903cbc86f47"
  },
  {
    "url": "assets/js/208.95b1bfe2.js",
    "revision": "ce691aab180d8812aa70bef2f1c8ea31"
  },
  {
    "url": "assets/js/209.01564c2c.js",
    "revision": "f9a15408a8862cef8bb6cf3745a59d29"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.bfaf5c93.js",
    "revision": "882ce1fe8535c2c573dfa60ff9a3db20"
  },
  {
    "url": "assets/js/211.0d1f9765.js",
    "revision": "efab28265ee1717625eec72d812d3249"
  },
  {
    "url": "assets/js/212.9550d92b.js",
    "revision": "1fb3c6ede0c866dc65a8ba308a7a9c95"
  },
  {
    "url": "assets/js/213.7ab7ad2f.js",
    "revision": "373ec14e16cb431c125eb5af662a5e7d"
  },
  {
    "url": "assets/js/214.e27a39a5.js",
    "revision": "1ab1004997bdd32d690d280c6b232661"
  },
  {
    "url": "assets/js/215.7f6372f8.js",
    "revision": "0ee6210cd487c9789fb3368b28add311"
  },
  {
    "url": "assets/js/216.fc6c0c46.js",
    "revision": "48d7f04c4ffbc29838d02092152dc3b2"
  },
  {
    "url": "assets/js/217.751e519d.js",
    "revision": "dafefa0248abeb98f7da786a4a019057"
  },
  {
    "url": "assets/js/218.0c66a5c7.js",
    "revision": "6f1376d78074f850370da8dbfcbf3209"
  },
  {
    "url": "assets/js/219.d766d9bd.js",
    "revision": "624f61b36061a1f4800c78c088a5b2f1"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.d97e48f1.js",
    "revision": "2d6e33c3b3624b5615a12581a3002a26"
  },
  {
    "url": "assets/js/221.3305b5fd.js",
    "revision": "f0588f871c2604b1406e904181582740"
  },
  {
    "url": "assets/js/222.e5a4cbf1.js",
    "revision": "698369de3de378af2d6016160278cccd"
  },
  {
    "url": "assets/js/223.631fa92b.js",
    "revision": "4797a34d7d5b7f6e1f152261de4937dc"
  },
  {
    "url": "assets/js/224.f2e7ca9a.js",
    "revision": "eea03bfa0d5f6c76be201bafa895ef83"
  },
  {
    "url": "assets/js/225.f01e736d.js",
    "revision": "604e8e25cb5a75e79edba5df964e25c1"
  },
  {
    "url": "assets/js/226.754d22ca.js",
    "revision": "0026e6d9498dca40a09498ebb49c2212"
  },
  {
    "url": "assets/js/227.fe443695.js",
    "revision": "7cddcfa52fc0ea6ae21f94ba0114cf3d"
  },
  {
    "url": "assets/js/228.a672a4d1.js",
    "revision": "8bc0421f3953d67323c798253925da1c"
  },
  {
    "url": "assets/js/229.d170a6f0.js",
    "revision": "0197249f6ac3b633556614ae5f6ccaff"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.e7c2a650.js",
    "revision": "edea0d9b99c03bfde4ec16e316a6fdaf"
  },
  {
    "url": "assets/js/231.aeb2fcca.js",
    "revision": "c8e4d1cc98542c6c37224a1222d632e5"
  },
  {
    "url": "assets/js/232.ab4fe45c.js",
    "revision": "dbc30babf9d69916702cc1f0df4dc105"
  },
  {
    "url": "assets/js/233.95c26e35.js",
    "revision": "e48dc3ac2dba8058280918332aea5ab5"
  },
  {
    "url": "assets/js/234.54c4c3b6.js",
    "revision": "4dd42599221078c131890688348ad157"
  },
  {
    "url": "assets/js/235.419ad42f.js",
    "revision": "896d6ede69130d676f173ee0036d2b72"
  },
  {
    "url": "assets/js/236.a0d3bdb4.js",
    "revision": "70deaae4480cbee046e15819872eabe4"
  },
  {
    "url": "assets/js/237.e5206db6.js",
    "revision": "e421f6043b9786a881d2fd6fd5fef7d3"
  },
  {
    "url": "assets/js/238.014ab9d5.js",
    "revision": "aab0935da8a0d6662420b3a3ef68821a"
  },
  {
    "url": "assets/js/239.10daae7b.js",
    "revision": "a9c45a529ecce234780976d800479c2a"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.1ea24883.js",
    "revision": "12c65ecd7eb243ca0aa8aa68d515c57d"
  },
  {
    "url": "assets/js/241.a375d4eb.js",
    "revision": "d28f437166ec21d233a862adb69f7ee5"
  },
  {
    "url": "assets/js/242.2deb40cd.js",
    "revision": "9e536920ba18405c933b80400694e67f"
  },
  {
    "url": "assets/js/243.df53f86e.js",
    "revision": "8df898a299d79c156a7b61794cfb539a"
  },
  {
    "url": "assets/js/244.d1934887.js",
    "revision": "c81f97bdd4ed3e45519bb9cc6e00a8ef"
  },
  {
    "url": "assets/js/245.2248d299.js",
    "revision": "f5900f5377988230159e9f2a917c246c"
  },
  {
    "url": "assets/js/246.49b913d0.js",
    "revision": "7f29ccad858de58a820d33226dfdd6cd"
  },
  {
    "url": "assets/js/247.51a79678.js",
    "revision": "54d06988c3f2236c4e23a58185ddcfa2"
  },
  {
    "url": "assets/js/248.5dcd724c.js",
    "revision": "73a7f5fc081b0916e898f4418526d7e9"
  },
  {
    "url": "assets/js/249.3fa64b9a.js",
    "revision": "a84687bccdb412978b439dc6c70dae22"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.a115f124.js",
    "revision": "d137884cc85e9abb1a1417de317983da"
  },
  {
    "url": "assets/js/251.450b550f.js",
    "revision": "0b6f06de8761a2d01e606adf8542dd45"
  },
  {
    "url": "assets/js/252.bbe8a506.js",
    "revision": "10bc495e8fa33907500f197c4ac9f530"
  },
  {
    "url": "assets/js/253.8111813a.js",
    "revision": "f519dc973c54efd90da3ef276d622eaa"
  },
  {
    "url": "assets/js/254.d098287d.js",
    "revision": "8bd70cfd4e6fb454f3c708b5e7bbd575"
  },
  {
    "url": "assets/js/255.01c9c7c3.js",
    "revision": "d216169a1c063928084f3eca39978df8"
  },
  {
    "url": "assets/js/256.b9eda5c8.js",
    "revision": "731b886ef1a15844a833121511f8fade"
  },
  {
    "url": "assets/js/257.625ac2d3.js",
    "revision": "68179654c93e949949dc157913ce3881"
  },
  {
    "url": "assets/js/258.7f0ad294.js",
    "revision": "29fc63f49540c7444c6c6bb8b59bd068"
  },
  {
    "url": "assets/js/259.3205c240.js",
    "revision": "8806f090fb4023a6510c2141dd21a323"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.8c6abbf1.js",
    "revision": "9f078a50dc8408ceda77768a9114dedf"
  },
  {
    "url": "assets/js/261.bb0de33d.js",
    "revision": "e01163db4d9656e69c6b38943cd8caee"
  },
  {
    "url": "assets/js/262.3ddf95a5.js",
    "revision": "483f9141065316f67b0192f62246c8e8"
  },
  {
    "url": "assets/js/263.cdf3b808.js",
    "revision": "908d4865122eb33e3130c0ec30398268"
  },
  {
    "url": "assets/js/264.2eab2322.js",
    "revision": "a2260519b2a07b6e563046af9c6133c0"
  },
  {
    "url": "assets/js/265.1c51b1f5.js",
    "revision": "0cd4e460d03f46ab8e83c201e508d3d6"
  },
  {
    "url": "assets/js/266.d31d1abb.js",
    "revision": "34d67847ec481fccf88941e43f4c0a4d"
  },
  {
    "url": "assets/js/267.d0c720b6.js",
    "revision": "16152c3aa028a8504a90d3ca29bb4006"
  },
  {
    "url": "assets/js/268.e78170de.js",
    "revision": "131b6ea62ab3431784fe5e4202f801f5"
  },
  {
    "url": "assets/js/269.fea0c05a.js",
    "revision": "12ca2957957a18ea4eb28ae5846ef150"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.0be61e51.js",
    "revision": "627b81ce2e0d75d43092af3aae6bcd17"
  },
  {
    "url": "assets/js/271.449f2264.js",
    "revision": "296480c79b7d64acc4c60cbf6295657b"
  },
  {
    "url": "assets/js/272.966f581b.js",
    "revision": "ddb1ccfd4ebab1d408cd59cb497e3616"
  },
  {
    "url": "assets/js/273.551ee9a4.js",
    "revision": "a99acea4682788f7f3ffb75ef969feb6"
  },
  {
    "url": "assets/js/274.053bff89.js",
    "revision": "d705963cf8fd116b474eb849f169f20a"
  },
  {
    "url": "assets/js/275.1eb8ccd8.js",
    "revision": "c18d29c5d2c0ca9e29200240e6a680ea"
  },
  {
    "url": "assets/js/276.b1dfac3e.js",
    "revision": "bf34255cd88ca5e40ccce5fa398122eb"
  },
  {
    "url": "assets/js/277.8197e377.js",
    "revision": "b1f2a4dffa4ae00c5f0c4ea3c4e43f57"
  },
  {
    "url": "assets/js/278.c6d7ef6f.js",
    "revision": "2ab8a8effe0da0facc028aee6d7d7ae3"
  },
  {
    "url": "assets/js/279.aa306a6c.js",
    "revision": "228b1fe6a5b138b90d885d14b4134534"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.d90043bf.js",
    "revision": "d2e5cbdace25b9792ed35f737153f71d"
  },
  {
    "url": "assets/js/281.ae56d0e2.js",
    "revision": "13d7684af402dcc9f21a2b9c720a626b"
  },
  {
    "url": "assets/js/282.5a320e46.js",
    "revision": "a8954c89c9fde1d21010e0a82d4ce76a"
  },
  {
    "url": "assets/js/283.8de60690.js",
    "revision": "601f8107cb736ae5460e51cc90e8a1e1"
  },
  {
    "url": "assets/js/284.9a2b4be7.js",
    "revision": "20fcc1ac8f7fa0b8e6181ec29260752b"
  },
  {
    "url": "assets/js/285.6676a450.js",
    "revision": "244f1a8bb3d02ece9111d4432463ceb3"
  },
  {
    "url": "assets/js/286.b290055b.js",
    "revision": "9c3599691222688b0c3f4ba29f5c1752"
  },
  {
    "url": "assets/js/287.c07fa6be.js",
    "revision": "f073e2e156a0c367457c4f42df7642fa"
  },
  {
    "url": "assets/js/288.8e7a0ffd.js",
    "revision": "4b59b988ffc20bb491da6f2927ce9dd1"
  },
  {
    "url": "assets/js/289.9b05bf28.js",
    "revision": "7dd6a42d1b298c5f2d2699e0c08d724e"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.8de193a9.js",
    "revision": "f99a7afd1621299585765ed0ac23e775"
  },
  {
    "url": "assets/js/291.dc917367.js",
    "revision": "93bed7e0b55f3899fd5b2c50cae17550"
  },
  {
    "url": "assets/js/292.216e0fd2.js",
    "revision": "afc177287d239bde1d042dada8eaab20"
  },
  {
    "url": "assets/js/293.cdf2fd8c.js",
    "revision": "665f8fd6b3629ea3d447fbf18727300d"
  },
  {
    "url": "assets/js/294.fb3036cd.js",
    "revision": "9a44e5e0eea088cab2fa033f665447fc"
  },
  {
    "url": "assets/js/295.32905062.js",
    "revision": "0c2819af1ae675ef4f2c7fdfe42b97d1"
  },
  {
    "url": "assets/js/296.86441799.js",
    "revision": "648f252371af26bd20ef9ac4402571bf"
  },
  {
    "url": "assets/js/297.9fd4895f.js",
    "revision": "9e6be9794016c66100486b0a48017ff3"
  },
  {
    "url": "assets/js/298.254bab8f.js",
    "revision": "b5b556a0c20ae56312c3aa255c7ffe75"
  },
  {
    "url": "assets/js/299.01059e1f.js",
    "revision": "6a87bcfdeae9aef418288001b89c2acb"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.f792c348.js",
    "revision": "17f6eb50730748844b46e90eb2b6df34"
  },
  {
    "url": "assets/js/301.da741812.js",
    "revision": "a7c4ae71289b455248ef7bd0640d839a"
  },
  {
    "url": "assets/js/302.bc92da3e.js",
    "revision": "5c7003c6162e0ab58a8f10058b6271e6"
  },
  {
    "url": "assets/js/303.4ae9488e.js",
    "revision": "694bef0d9aa6bc0dd0270a20480ab7a1"
  },
  {
    "url": "assets/js/304.536ba315.js",
    "revision": "09ea88b56bfe3225ae59009936ba77fc"
  },
  {
    "url": "assets/js/305.4a1a6bfa.js",
    "revision": "00c7c278c7e8140a22d50d2b3a113402"
  },
  {
    "url": "assets/js/306.8df566ab.js",
    "revision": "c7f860fcee687e31c81f7f5afda4a547"
  },
  {
    "url": "assets/js/307.03ee2a9b.js",
    "revision": "83b723bd3d147f3576b39aa330b02ee2"
  },
  {
    "url": "assets/js/308.eda164db.js",
    "revision": "d70f3eaa07c761b348434ac2dd4d50a8"
  },
  {
    "url": "assets/js/309.10e57163.js",
    "revision": "396597e1b6f2b35690c023d10eec033a"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.75731fe1.js",
    "revision": "f24f02725ba370e9774a1b5c9e0ff09e"
  },
  {
    "url": "assets/js/311.c7d6c678.js",
    "revision": "c334cf6328cf77655bcd71ef6917a2af"
  },
  {
    "url": "assets/js/312.a3c20f98.js",
    "revision": "914528de4690287e925f75873ed10721"
  },
  {
    "url": "assets/js/313.606dfaa7.js",
    "revision": "f95a98d73c8fe2aa9c80be72d8ad7891"
  },
  {
    "url": "assets/js/314.97ed1602.js",
    "revision": "2912ed98967da5ef3bf516de44dac3b3"
  },
  {
    "url": "assets/js/315.c2184d2a.js",
    "revision": "65778c29bc4095d7f2bbd5ae0f4ea0d0"
  },
  {
    "url": "assets/js/316.88185c88.js",
    "revision": "f1afbc5bc243a10d7d61aba14aa30c0c"
  },
  {
    "url": "assets/js/317.23e260af.js",
    "revision": "97ccef48a417bd2bb2a5386200b1fec0"
  },
  {
    "url": "assets/js/318.7f0a9a4e.js",
    "revision": "590af167c967de87e7fa8123d659e27c"
  },
  {
    "url": "assets/js/319.c02d5dd3.js",
    "revision": "90984311e3ec6f7924df9cd7eb82b70f"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.9ac0686b.js",
    "revision": "61795f0154ea7018f5c3535f3c6cd801"
  },
  {
    "url": "assets/js/321.a9bfb04a.js",
    "revision": "f008773dc1ad2ad95ad70925ad01b7c9"
  },
  {
    "url": "assets/js/322.5ef19bd9.js",
    "revision": "1224bcd2b2ca9cb6da396836b6af053c"
  },
  {
    "url": "assets/js/323.27014bd9.js",
    "revision": "187e5b073b78c0c7c16f37f9b7d8c04e"
  },
  {
    "url": "assets/js/324.bba03c35.js",
    "revision": "87343a7026e1c79c0b471e3354595230"
  },
  {
    "url": "assets/js/325.c4f6c6cc.js",
    "revision": "5fc0bb019d231778b32c2d5ecffdcbfc"
  },
  {
    "url": "assets/js/326.f7b4b6c3.js",
    "revision": "87b1a3ea484b3d36cd9506307b9c8895"
  },
  {
    "url": "assets/js/327.077fa1b9.js",
    "revision": "d0ed1c4ad4ff2cf3b157851d7b94b420"
  },
  {
    "url": "assets/js/328.3d075374.js",
    "revision": "da6d7cb3842ea11bc9e697950c17c0b4"
  },
  {
    "url": "assets/js/329.f52d49bf.js",
    "revision": "4ff5613f8b492668e4a2a05b1c535ed4"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.39c82ee1.js",
    "revision": "ceb7ce9fd2732844786ed423ab915d94"
  },
  {
    "url": "assets/js/331.a898bb18.js",
    "revision": "91a595eb27d5f1be01dba361fdd58ac4"
  },
  {
    "url": "assets/js/332.1858c868.js",
    "revision": "bc73c273000536ea8e7e444260a8919b"
  },
  {
    "url": "assets/js/333.49d2d942.js",
    "revision": "c3d79ae441d8af4029298d44518f86f7"
  },
  {
    "url": "assets/js/334.93aca7d3.js",
    "revision": "cd9feb8fe705e221ce4488da87a1095a"
  },
  {
    "url": "assets/js/335.3e1f7751.js",
    "revision": "a13973f48047e5ab8d1c1a5b66323af6"
  },
  {
    "url": "assets/js/336.11644ad7.js",
    "revision": "d7ef78f4889a2c054e1de8e3cc62474d"
  },
  {
    "url": "assets/js/337.d54b6ddd.js",
    "revision": "1112b7be6314937ebf1901d2c4378dc3"
  },
  {
    "url": "assets/js/338.085cdd72.js",
    "revision": "c645953a1a1547fa437cccabf78ae162"
  },
  {
    "url": "assets/js/339.8b07186c.js",
    "revision": "fd45f699c9f7778e5e2fcae0b15a5ddf"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.ff92a817.js",
    "revision": "1e05de4689a74c8c0303abaa1c33865f"
  },
  {
    "url": "assets/js/341.2e6a63e4.js",
    "revision": "f7182ef04d0d0dfee486edab0351720d"
  },
  {
    "url": "assets/js/342.3a6e9f03.js",
    "revision": "b3c88544339be9a46df4fbfec408a309"
  },
  {
    "url": "assets/js/343.9af10e15.js",
    "revision": "7bcd75cca74669bf7d99d15ec9bcff3f"
  },
  {
    "url": "assets/js/344.66eb7f8d.js",
    "revision": "6f4cd981978c5075c008feaee4a42c06"
  },
  {
    "url": "assets/js/345.f6ce56cd.js",
    "revision": "777f13142c8a37fbef07970158a9eb07"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d8604f80.js",
    "revision": "31ca916fa01b1b4c86f0a7f1e848325f"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.d8887dab.js",
    "revision": "5c199233d8134852bb7a98cdddfc2d2d"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.678226ef.js",
    "revision": "f7cd244a0ffae99e6b679a9cc403b0b3"
  },
  {
    "url": "assets/js/44.b716750f.js",
    "revision": "e29df2968d22465d2d514c10a0b3787b"
  },
  {
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
  },
  {
    "url": "assets/js/46.52c6c9a2.js",
    "revision": "ebc6d5cc6b3573ca81dae9e330153950"
  },
  {
    "url": "assets/js/47.fc0717f1.js",
    "revision": "82fb958c414b1f8dcad72a4ab5dedcee"
  },
  {
    "url": "assets/js/48.44d0411f.js",
    "revision": "7cff24e17a3c00dfa33db4562a5cf2e3"
  },
  {
    "url": "assets/js/49.7acf0eb1.js",
    "revision": "9ebf2ea0f5586f1e8af080fb271a886f"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.700e84d8.js",
    "revision": "9bd018bab0f809df58c70b08e9e5602c"
  },
  {
    "url": "assets/js/51.4aca88f4.js",
    "revision": "c0852cda5add6286ee1a5501f920d9e7"
  },
  {
    "url": "assets/js/52.b614984f.js",
    "revision": "4971b998f94d9a08424d40f044e3a920"
  },
  {
    "url": "assets/js/53.a7326fea.js",
    "revision": "8f482dcfc8d3562cb95f221d47616c2b"
  },
  {
    "url": "assets/js/54.132dbd14.js",
    "revision": "c9c33058cc768551b8c892b7a4b7a8ae"
  },
  {
    "url": "assets/js/55.1de3bf60.js",
    "revision": "a0b2ba385d9913d95c5b48f079d3639a"
  },
  {
    "url": "assets/js/56.21458346.js",
    "revision": "d2bb22cf0fedfce6d8362479966fcdfd"
  },
  {
    "url": "assets/js/57.7a3df85c.js",
    "revision": "fca67054031cb8a7848d6c1e1b3dc0eb"
  },
  {
    "url": "assets/js/58.904eff84.js",
    "revision": "6dd77eefd76fb4108367ea5645a44bf5"
  },
  {
    "url": "assets/js/59.5334b91f.js",
    "revision": "1bd6de427c18d07e6bf7565db81ef0b1"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.086915af.js",
    "revision": "0d950b55774fd8f2ed0019d0357765b5"
  },
  {
    "url": "assets/js/61.3f94e562.js",
    "revision": "8642500601732b161205ef27c875479b"
  },
  {
    "url": "assets/js/62.f551a777.js",
    "revision": "b18c40c612eb59ef90921266a4daaf1d"
  },
  {
    "url": "assets/js/63.710b313e.js",
    "revision": "b7c63b2965b1f83f74d43cba0814458d"
  },
  {
    "url": "assets/js/64.5c0091c8.js",
    "revision": "171b8b6cf87f72bfe3fd0a2fbda2e5c4"
  },
  {
    "url": "assets/js/65.e4c0ed38.js",
    "revision": "1625e179876148849a57fed5360e6ba1"
  },
  {
    "url": "assets/js/66.1e61a138.js",
    "revision": "af685eeafb3a9fe6fee6187140ee4587"
  },
  {
    "url": "assets/js/67.7c371768.js",
    "revision": "a904cbb7991e85582486baaad7bb6329"
  },
  {
    "url": "assets/js/68.fc6048c4.js",
    "revision": "1d0a02d9328c04a98feff05ca049c884"
  },
  {
    "url": "assets/js/69.a75e4c08.js",
    "revision": "acfdd30a0d3a00394367356774c97473"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.2ac850ae.js",
    "revision": "9abff5314991aa39d772d93ad551a271"
  },
  {
    "url": "assets/js/71.b1a2004e.js",
    "revision": "a81f107614e07a525edf1a38ca5a8451"
  },
  {
    "url": "assets/js/72.06caec34.js",
    "revision": "50fad00200d5b982bf1f0b8bbfe4afee"
  },
  {
    "url": "assets/js/73.0a8fab9b.js",
    "revision": "d36e68b46828cfd17e47f2e1c3413798"
  },
  {
    "url": "assets/js/74.4328d99b.js",
    "revision": "9ca92807fe36201566c43490d8904ecf"
  },
  {
    "url": "assets/js/75.12da5957.js",
    "revision": "c1f98047b3c9a4254dc4aeb27c81b585"
  },
  {
    "url": "assets/js/76.6ed3f5cc.js",
    "revision": "07d3a37f21831800633e4e25436031a6"
  },
  {
    "url": "assets/js/77.78c60725.js",
    "revision": "470a8edfe59411b4ad00a2d219d34609"
  },
  {
    "url": "assets/js/78.5cf1c207.js",
    "revision": "74e36c5c592d92b8c398b0c7268510db"
  },
  {
    "url": "assets/js/79.ddc48247.js",
    "revision": "f54aec4261368471261ab53a0a3e733c"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.e0e3e65e.js",
    "revision": "603fb3d86cacc61fe82f16cb50b8b7b3"
  },
  {
    "url": "assets/js/81.82ef888e.js",
    "revision": "93d7165b42921af77363f078313e0f12"
  },
  {
    "url": "assets/js/82.566b55da.js",
    "revision": "ef7e33d27c6ab5a3c982adcab297b44d"
  },
  {
    "url": "assets/js/83.3eed4b21.js",
    "revision": "3f4006bdaee85928fa0ff2aa08c50a9f"
  },
  {
    "url": "assets/js/84.48dbbd04.js",
    "revision": "cee6a936dc6469099dd506bdfa21454b"
  },
  {
    "url": "assets/js/85.253cee0f.js",
    "revision": "08ca9ce287372da325f5161c6d5e579c"
  },
  {
    "url": "assets/js/86.5d11431f.js",
    "revision": "fe75730b14a0851235a3c147df668df0"
  },
  {
    "url": "assets/js/87.7f73b335.js",
    "revision": "6bc21c1b58af4224577f9b13f958002c"
  },
  {
    "url": "assets/js/88.0cb4b24d.js",
    "revision": "7b39355ae8e4b8c355879f87fb7eb488"
  },
  {
    "url": "assets/js/89.1c290a17.js",
    "revision": "93d849919483bcecbf6dc8aa8e924cdf"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.393e3a69.js",
    "revision": "2eb5de3b01dc1100f6a01c67083f69d9"
  },
  {
    "url": "assets/js/91.6ba1feb6.js",
    "revision": "5a8da9e34df385b8b1c0420c71f04c6e"
  },
  {
    "url": "assets/js/92.53f0889b.js",
    "revision": "769b5239a09ae516e41e61e5a720dd34"
  },
  {
    "url": "assets/js/93.0f9d7a79.js",
    "revision": "134d06dc70f01e20c849d43de4945bff"
  },
  {
    "url": "assets/js/94.b6c3c037.js",
    "revision": "d5fe04b0e577a565d83b99c3384d9508"
  },
  {
    "url": "assets/js/95.b88fceb5.js",
    "revision": "8f3fdd267a4579feb0308c58360aa06b"
  },
  {
    "url": "assets/js/96.2adaad1a.js",
    "revision": "ecac7b0a963121f6a1134698e65163c4"
  },
  {
    "url": "assets/js/97.6a5cae73.js",
    "revision": "d305ff7e004e9e634190652da3136a74"
  },
  {
    "url": "assets/js/98.f622c7cb.js",
    "revision": "805ee88707c3329c3f249b68257245d9"
  },
  {
    "url": "assets/js/99.905b6ad6.js",
    "revision": "f65e087d304634ce46b6cddc78c26175"
  },
  {
    "url": "assets/js/app.b150bf4c.js",
    "revision": "b93426f40d0c53be6b72b0befe680988"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "basis/index/index.html",
    "revision": "aa679caa08faa51355484037e7ecba68"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2e22773ea2bf120e48a18b394b455a52"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "30ca0c5f5bd0f755324cba3fd9a5a087"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ea1bbf6e13bc4b827300ffc54a0f0afe"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "df309d26d8a826620e5c3a7db7627d6b"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "1ff2d474ff98591706025e781f1876e5"
  },
  {
    "url": "c/audio/index.html",
    "revision": "4b789cf834ccc4ff50d49c8f33bdc8e2"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "abb062bb1044ab0352f97c67844972ae"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "04d446477a0c91c59ed81056cbcc2361"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "4ce192b5832cbee123ba7ea61beaaefc"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "dbb5cb8c6f9f0ada6c37def9c87bea47"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "6990ee4ddb607cb6cbe3b37336a81ed4"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "fe2ea1a8c63cf34108896d81b29f7e41"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "69402b82995b2c77e8f68cf18d3b8155"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "cd91dfd45f0d28daf0d2e85c5ffec4d8"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "8296dfcba1ce9ba22bfce06c7a943564"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "9fcdd589a03acfab6ac099aff439fa26"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "caded855c244ce4a29af26cb68cf09c8"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "82842556493aec0e2aac022b675ae47b"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "40e387bd01754c4205d15ac8c232fb03"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "565ecaef8b2315795e0452d9d3b747a6"
  },
  {
    "url": "c/program/index.html",
    "revision": "2968c996b4e91fd4eed39ed8152af3ab"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "a95a7541683cca22c2a0997636a25993"
  },
  {
    "url": "categories/index.html",
    "revision": "fcc80ffdeacee883127aa8205eeb7e73"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "4bd158ad0cd2aeae1d1ba26ec9563ae9"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "74457cf10bb814c22e3b6ba948342e44"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "fab50fe61ffe29ea12ae6bd44a63e522"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "b2c4774855da0614a1220b04c05086d6"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "6364a21ca79995b01fff6ad05bcb538e"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "2a113dbe1250e6d2eb58b28edd09cdb2"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "c5cd89a97ef8da8ab5ad966e3fdda5ec"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "eb686b0ddf05914cef770d55e91c0ddd"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "1852d5f7c0e269c637d65d8dc3f97299"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "f2330b0e8db4570e71a483919594a45b"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "a07ee7b51018507262f0f5520ea8a9b7"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "394aba874023b6c4f76e73864e2210dc"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "b3eee24d212e607c182ed3fe37cb2483"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "640b61a6854a3547d88da39c8cd30e4f"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "05101351ab9f1dbbf7562d1d5b12eae0"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "d882ce8aaab342b8a3da3aacf7e8dd5e"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "dd182f5a4104b9bd947856ec2c3c13bc"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "8eecf0d7e252e55af1f59829d60ccdab"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "ac8e9680ff3deafdb5139b62c0c67b7e"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "3c0a7a8c829ce3502212162393b29036"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "6fe89b4d8af40af700d0dc80ae90d287"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "4839811966d4c22077fef922a90f6922"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "9eab19e88876676d753a27d9439a45cf"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "d30ff551e23809cf90cb44785a19f016"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "361f84247d883cf276cef41ad3e1dd11"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "9fdfac8e4fc08e4347e7da445b251d14"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "773a39d6171b57cf3aff5a3fd5dcafb3"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "9903071fa7251bb60889028321c2f494"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "b6263e34bbfa9b02abf03dbe6e7e521d"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "2c9380238ab54f905cb64dc83c6384b1"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "b9474ef12f69cb457ee319401bc79c89"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "29664ecb23c59da73c964f2b2e7b7724"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "255daae928103c2dc058f5d886ed7130"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "85bd102615aa84e8721412f5dd6e3a7a"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "43c5d14850cbbf7b2c3a400e9294ec56"
  },
  {
    "url": "figma/index.html",
    "revision": "4d79a8b795d808e89aaa8c124ec91602"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "6a708cebe82d010a65f4448dd44d240e"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "265478c1c583e9fccdb771292dbcd1a8"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "15ad88fbf2fd6c316d188f1d5088d15d"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "f3c017de4d20772983194d6f9dbdf3ce"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "13eb7babfad34e131f0762c2f293f457"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "64ba53019290c463129c5488edc53b89"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "f0d4917711d0e645d291577ae267c4e2"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "bb54231b8b65ca6b7f8fccaf758aec4f"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "e369aeea84b28821b42c232d3107064d"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "fbb6dc87bec5815e18c88e5b4403b535"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "e984301e8852e361541e3f9a0b8c3224"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "419eec7ae557ff65494987773098d637"
  },
  {
    "url": "flutter/index.html",
    "revision": "80eac4b3dc553aa3fde8a1e404efdc93"
  },
  {
    "url": "flutter/point.html",
    "revision": "c380be8979d5cf6bfa5e4826b41b988a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "feea9d68700c8403aa257b4a8d02bbab"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ca654008a7300862d505f67e0350cd98"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "cceb93d851c6bc9adaf940e4ddfde7de"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "89548c7936598d5db9ffbaa651470091"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e0e56b66e5f5d7661c0b92506abc0a42"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7cc11bba1a720f26535815b426ffcf11"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "4914a5d5f0044f854cf7a5f81fdba695"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "75cde2ec19590e170859830e4ccd45d2"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "bdb203eecb124a26393e13d94136b994"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "efcb02dc4303bc77e6e68bd87ea287f5"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5a6e5b725282d45a2f5c89a53c905a8c"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c9c1ef630b135bd673ebf777beb76007"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "78f95dc32e925a7b3e2868e0637f00b8"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "67e2ab2d48b7b6bcb2e48c2716071a15"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a27353e53452ff4331119fd0fc1d1bc4"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "47bf8ca66245a617c3d49e50bf2d10a8"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8e99a93d91b0249d8c4597d9e57297a6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7ae63ae7bf2d01e4059f0278a7646cea"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e28864d370114eedb07a9c0a32789809"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "84af36201308fc44811c03a530058542"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "2684ee0773515ccdc091e5b1a32b9466"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "9ed4066b01444cc9e9c625655c13034b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5bffbc2dfdb8aac80b8145f7153b6487"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d5bfc69f356c8dd07bed58582a0a8d8a"
  },
  {
    "url": "haskell/index.html",
    "revision": "ff5550b6c3dc977e71726d0678ddb87b"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "imgs/xcode_launch_env.png",
    "revision": "c7f8697ae25d7739cb1fa6b3ea10ead0"
  },
  {
    "url": "index.html",
    "revision": "29e57f3455a9f0e4ebe56749d549607a"
  },
  {
    "url": "java/index.html",
    "revision": "582e12985b1ca69328c90d0f608ff2e6"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "965012916f27e1a8f67d7b423a0e3278"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "f1ea9fd9f30445d538ff90096e0e2b31"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d4f5a47cb01436c2192f10fa246fd12b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "e47d9ae7f4d2f780f085818b49858bd0"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "4ff63bbe4c9cab6648b7a8a52d9fd040"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "03d4751c181a3710c13a14fb59d56520"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "de2c991b1524505349017cf3b34dd966"
  },
  {
    "url": "python/index.html",
    "revision": "31fb717a59f9ecdb7bf898605d791718"
  },
  {
    "url": "python/poetry.html",
    "revision": "a82d42de7409119eae51ddaf439573ec"
  },
  {
    "url": "python/pyenv.html",
    "revision": "fb1cc4f1a3449a361b23611fc7907d0a"
  },
  {
    "url": "python/python-ase.html",
    "revision": "11d06af616534c5d95d8ec2d7d37852c"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "e01f2e4687c47b0c1a0f6061f4872ecc"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "fe1992a6997306ecd150a9ad31fd4825"
  },
  {
    "url": "python/python-file.html",
    "revision": "73db4d8f161135f464a8418845403a79"
  },
  {
    "url": "python/python-function.html",
    "revision": "ec3fa2b6a98674f26f731fd4ea6e7848"
  },
  {
    "url": "python/python-generator.html",
    "revision": "954ad0241226f5dc213a88c2105835dc"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "a34f00ba47053bbafb65a538d0db116b"
  },
  {
    "url": "python/python-module.html",
    "revision": "7965fbba0e46da85d25240a3e6033268"
  },
  {
    "url": "python/python-string.html",
    "revision": "f165625be1ad0763e1460661cd892b7b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "7d8f18e17daf02782f6c22cfb7b420c9"
  },
  {
    "url": "read/index.html",
    "revision": "ad98ecc88e1ff9240e0dcb62ed4c86d1"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "8182128f21159c2a28566559fb7929f7"
  },
  {
    "url": "swift/better/available.html",
    "revision": "121645eda63f57eae6bb132a347fd89b"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "995947aaad98a510a5394e101ab137e8"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "aecc0015d8db86f663c67dc364fb7ad3"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "a14ac26c2a975fd307e5157785e224c8"
  },
  {
    "url": "swift/better/di.html",
    "revision": "301786f5d14b1f21c8ff0278cb0356c2"
  },
  {
    "url": "swift/better/index.html",
    "revision": "b4847af8e6ab61a8ae45e54296cf2644"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ba8257ed07fd96cc9ac1c68c91ccbce3"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "a1dd83d5d36fcc520c821cf66e4b936b"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "fe747d5d6b10036683162087ba855ff4"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "ea3c7c86ee458a04320a8ec9f31e78cb"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "93c5290576b2192f11f47a248f1d69b0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "59ba4d4b7c83df064d4442ea48e30350"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "86f05835c66118055bbfaedd230b6393"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b74fe369a9f1264e30aa5c0187e17572"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "27134037bf4b819f39de81879667d17a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "f0771d2551acb5b583f1483bd4395d9b"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e43f96faf849118b1af180dd40ba22c9"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "ee331a350fe98275a304aa791fdc73e7"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "764f1cffffe448d730e8b9a8a8223b7d"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "e08d56e97a242d197fa0d8c1dbddf0ae"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "6ea57fddb16f0dff986d7e9da9b8303d"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "373cf2e428952c75f677cf1d25549ac7"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "e16b530a3fc5e3230235fb73abbbf2b2"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "33d2aa423d5b47526eebf498a89279f9"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "ab109c33ab714944431896e00047e59f"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "86017f37cd0aa466d795d00712492bb5"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "24c7cca2fef05ee503146cd49fe423b1"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "c8913a04b158f00b4a9cfe4c394557bf"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "73396eb03a703aba4dce247e8020734d"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "172f767d5aafd84e18cc458d3c168460"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "44739377a0c7ed34242b88b6734f833f"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "7d87b2924bd34ccad9ea495299126d08"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "03acbe3d3e82d297bed5109e0d7c13c1"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "9a6160fc3a3da783f975362d4efde8fc"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "614843e11e6a919cf71d654c4b7c125a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "45201121c25bf4e495dd8e2faa8f3e0d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "cd31031055c31caf78309f333706460e"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "f26652e07a79a205afc5fc6fca6ead4f"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "4289e4d6749e19530a94266aed8e82de"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "4760be5140cc9e474fef63aeb05a561e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "e6739368babc76087b0441a3f3418536"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "135f7b97134e7ce40b2496511ed874b5"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "625a664be4abed8e3c40b0c542203569"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "272a451856ae1c2c9787c6e7bbc87f01"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "b1187ec5885df6858ffefd0cd6cd9a60"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "8a248b278386834bbb05d129b832b6c8"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "461b16441b4f38a2ceab76b13c584e13"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "8873cc9fc61d475bb747095adf25d0d4"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "916f0130a48bbde22e1331e5a58ab3e0"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "3ab60f81c8af9f9e42c7c26fc4d4c7f2"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a4d68b31f5f9ee497c43d8a61e151ab9"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0e0860290d4ef99716e4ad209ce578c8"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "2febf2d9eb62e64656cbf466e5b8db0d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "8f9d12cbad2eaa499e8df3cce133d7ce"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "85e97b652ca6ba1bf2311b80c2e7fccc"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "b32dfc32fb14ca8aa53edd800654ac8a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "0c7f295425710a021594923058d7bbe1"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "789faeb756f38304ea45505ec8be8937"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "9d8424efa1489860ba11d9c9e0b24e3a"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "3d2b7309632f4d765755a00cde9b5247"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e3089d87760d67ab09b479479eb044ca"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "8e73c5d2f2cca97a856e0e41678395ac"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "02af6f7f627a8ee6e34c719bfc10ab58"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b5fe46f86fee297e31252d6a93eebe24"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "626e604c27c36ec85cacaf2d541e97cd"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "790a4a360d205e8fb03f29202eee2106"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6119e837cc3ea6df8b19cc15728864fa"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b6561dca7d7dd637e77a2a24ded584b4"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "0c7580dd30efc856ff97b0de7a40991b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "9804c086991171795fb32a9f8c7edb3b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "188da39c02c724d5792a59d59551b534"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "069e7d93b27855cfa364efb771f9862f"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "92383549ea66ccc93903d925ffd7a134"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "ba246994746f91db6c202b0d7e30a13f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f86a2e434c1fd99327e25ca0018de5f6"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e11795ce3c0a418817871ca9be893350"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "372236c4e277f96e1d2ed25b12774377"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d4f19163a314012ccd35ec1e4c7dfaf2"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "35a7935d980a831e89b2c5aef9a3a6e0"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "eab3c7133a600164b280a9ceb9b52e95"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "6935b82f231fbf46cad1ea6ddbe43a4a"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "56022c182adb06c7ff24663aacfa4acf"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "266affb781a24e223d631ab9005ac21a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "d1e07d0cf6db6b79820a46c8a794787a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "21cb6b89d5f6c9cb0aefac3ae5d58611"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "88e6f33a6d3ab6e94aa6089445a962a6"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "4afc9c340b8a91a95c40ce8e3203036f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6c7b9491a6c2810254c040554b691249"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8d18c17d836ca529665c195c9c3a3662"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ba67214e2a00bd12f54ce00b97e449c8"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "013658457c5444f5d621228a4df9fca9"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "930072dcf3e85cefc524184253a9fa0f"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "6ef1f6ed67b54ec39ff4136248ef3436"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "cb8348cf1ca5ee97e67de9d0a2783fd8"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "d7edb100ec3334dd037f7390b3c5f8f2"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e36013a7ccdda8f2bb3915a959f93e4b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "1253c5c1cda5b7509e0f04877526fc88"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a1b9b090b430aa8490ee82a9f61393aa"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "70cbed9d0dfbf786b0c9ac543139c943"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c016bf1ce92a8402514d46048eb960a6"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "8c247179df1e380c62805a9ec3fd03b2"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "b6c7284332cbf9ee1863260d03098127"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "e1c18811f1ac4a5105612fc50705b68d"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "2ea5aa6d2e4795a398a0eecb56b8ecf9"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8573cb9af42b1a76738c29030005e09f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "4104863724950242996526836e5f93f6"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "ce1bdcc1c07471875afa3b0913e6dd45"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "83644df408e364a9eff45f69a5c84c9f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "386bbec4a7697cc99dae1d319ad14eef"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "23081590283959cad0c40083d774e848"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "ed12fd7436601585454f71d8b22a4dca"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "44f119c5ef6ebc3d937fc171daadbca7"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "bd1bb699ef4972b0f6c72751c20a690b"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "84e7ecf11c4da0d3031ce2867d39685b"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "f67947be17a630be7ad4f38020197ca3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "92e53c82f91b88219c6e9e98a32a9764"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "d0d4314813694315bc4cdc0158c9cc96"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "677fb08beffd2c149564ed89dd8744b9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9c07df05846da599a45f9962274dc318"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "a669eb8e4da5b13a346f545be169770b"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "56a16a8c988a405c3ff6c74b0e75a980"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "306668a1d628f340b74eeb18865f5e08"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "c690c08ac09dbada39870a9dc384b487"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "f9e3636de11ee8a3411ed5d945d940a6"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "cc42760fa6bfc25ef569160cdc912406"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "b3dacc1c3f98b8be9bc458b3734860ed"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "93002997239fcc26987600da2347f75c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "cb7f4136341a5fc89dff3401d3e97a2e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e53524eeffcc41d674d6f14089a9ffa3"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8214a43e90e60a63ee1b2a6b51511d3f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b75dd13a2e9bec7c1c748f9d999377ae"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d7917914b476471c838ef5efd5e3d4f8"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1c34f8c435bde789f206d8e5eaf1358a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e7baa26b9fbdcfaa39712f1aa9bdc731"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "8df1dbda8ef794b5ba1b5578aba87063"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "bb9b5c9483882935e4c88cf6474b00e8"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "6a89875f222b5a581eba688d410cb9cf"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "860ba21af3ba39792cfb8ab1c08bc894"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "dfacbe5f7421948be3843875f0a411ab"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b73e372841f2860553f7aaa516dbf57c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "41ff8944941faddcc0edec31dc3aee31"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "86780db41860abbba0c42db7666419da"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "8981c34a0a3488586d9d88092de11867"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3730b4b2ccbd532cc9adb0295acc37b6"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "da1e6699265ece9b587996222b902b2c"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "da903d73532af5144904a974f7d22747"
  },
  {
    "url": "tag/django/index.html",
    "revision": "d4384cd46572084193bc02a34219a8b9"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "bab92fe2cd8e9ec67f0b136c72a9e1f7"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4cf609eb94897475986eae2fd06fb900"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "5cf5b2eacb37b865fe7580febb5944c8"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "9a3f0d0457496a6761b1e2bbfff81fce"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "a6d22b70a1d1a03076e624302d3b3c99"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "33dc8250941a91da1e301de3824897cd"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "27f768b50ac646d45b2d6fa9ad7526ad"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1845f9ea28ebc1232807530733d1da51"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6f53a11b0e6e438f623411a1ead2d2da"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "bb67c10222d6566f7b31bd0be0db89ff"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b0676b65297e4c4de94f2d956299c2b7"
  },
  {
    "url": "tag/index.html",
    "revision": "08404e9d4c4f84c360ed7a8568deaeb1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "35030824c400536ba3a796d837e213d1"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "c2f1ed228f736862b6d5b856714631ac"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c264c15c157483e976028fa28e7af808"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "12ccef32163cef0fcf7b647f437492ca"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "4c7b504d170b270f9c00f64f04eb5cfc"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "bba7a2d4bf8f9605d733e3dd3a29c5c7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "8c7db24752d1a7d920dda3f7e035eaec"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a27cc0c90277a474ff6ea6c96f53e41e"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "8e2cac41e36084a23aeaf3c2f0951e29"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "20c33109387b35eab5494366d88aef0d"
  },
  {
    "url": "tag/java/index.html",
    "revision": "319415591dc9c07daaa937690ca2c544"
  },
  {
    "url": "tag/json/index.html",
    "revision": "43c8c6d81d35ee9c14ea0bc787de6b1f"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "1356b6dd8a1eb64a1731e90ab31b63de"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "cd5323a3307334b296cf6e43568829e5"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "17550770cb73f4dc0b829edc13f81c4f"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "1c17a6d3cd6058c53284fd3064136497"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "45358a54a6467911980b1b1e551b19d3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "34ff3d0ea0f6cd78fa1547e093658c4b"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "f67884b3bda0dbc25c1ac0a3af9f4dc1"
  },
  {
    "url": "tag/read/index.html",
    "revision": "759d009307437692feb7f6a4ddda80a8"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "ede823a875396c58f7e317191f7d426d"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6faeb8e3db4922f014f1b17e6d51e458"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "fcf85a7bc0422a25c25f093b0b7d6984"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "a96233a8c6d32667fb00d51749e3424b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "4e6a2a6aa801cd2e6c900fb3b65e3422"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "16eeda229660d01de74d1706319359e3"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c901e7225bad73434a4278c9dfe0768b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "094eb4d27a0e546052209bbbac147979"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b6013f1294622411b34b4339b42b608d"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0c67ec78caaa43e2dda367a2c600b758"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "fa881f74367406a9cbc00f1f0d63d8f1"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "8ff836b2d7ce8841adb509c2ab2f1ec2"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0d29747080f5e7b8978b6c2564a08830"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "2c244783c889008fc3e97f14fb7d6463"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "5d6e64bdbc4186b057a433af1e3ffc25"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "8423ed92e9d1b00840c98753f17abe90"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c63c61b5c45f41348259c933dce68cb6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e26515c157aecc70f2756d400331029f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b3a909af653de91eeb0aad35e8a78e68"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "eac6aaafaaefbe275b3954feeada65a7"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f4c43e04bc19a82fa342b864a9d511c6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1eb9e99cbfb5d8396bb1643ebdd8506a"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c82d0b481dc85cb562721f30003c979a"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "de8feb6579e0437edd81d07807ec3005"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d2240dfe33a8dab2f504ef60ffa42694"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "da695c3dab5f5c6ba1b91a7e735c5b90"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "7eb55a441be08e81ae7fad8ffa6fb996"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "4fed2d6dd7bf2acbd946042f7861224c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "62c3da02e7f85b256b1e1a22d52bf8f7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "4574a5acbc5dc3c83aa77271ac6c91dc"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9bb1df14e8933952d2f14f6d3557e7ce"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "4fe41fd8eeac555dd8a0f5ed7fa7e3ba"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "c336e59492e00df7771f87b23aa8252b"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "39a87c6e3a79c9b33775a5fe6efa2ab5"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "99f6b8d56c3600b07fce5db5037f9f5e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c52cb70d04fb0b25c991ce4fbbc9f907"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f2bac2caa075a3fa999ed70c79828c9b"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "0e190ccf94247c15b60595174904a971"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "b20b186386636586d92fe9c773876246"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "95c6bb7f88ca9f83a1b111d28e65d562"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "abbfc4dc990e2a21d773cf5ae0b0ccf0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b5f22310a8561a0d6150504ef27bcd8b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0877923a8120fbb3a0ef38cad2305d99"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "97db2bbeff89b3399ea0e599c5438ef4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "eea354ae1b74cb9097d51be576d0c002"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1f19aedbd9150744a7c1484f3d777dbf"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9227267e87b5640fa79fdce876a4e9b2"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "0cf7d66fd089e00d11fca4f05f2b3fdc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6bb449b665028f8cbb74a1e829a1a363"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "759a61d460ec2a5d94b31c41c5c0ac2a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "77aa0d7a3cd15b442190985a3f967116"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "0a4c5f16c0c32bd54d5fccb78dae4f41"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "b5f2700dfb1f4b906957eed3af2f818d"
  },
  {
    "url": "timeline/index.html",
    "revision": "b1fa71f27f4df9d9514f6bd42e5b51ec"
  },
  {
    "url": "tools/docsify.html",
    "revision": "f6cbf37cf5345bb9c447c8a43e601006"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "7056d79118d263e5a9662603a801a71e"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "9bbd3d23139a06c8907932ce9c867e54"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "75b6244f6b5e19f6fb8e2f25f57685d7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e4f166b61f8040807b2c0e6a591119c9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ef4a60bc713698e8cbaee87eefb2f4fe"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f8a40cf05d0f3a4f7caab6845e263246"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "237da1c3aa4b4d8903d0354e9f4e2054"
  },
  {
    "url": "tools/html/index.html",
    "revision": "2dd6241551e28c7dbdc76d0e8ee13568"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "f12ddd54f45078ab276d65abf86a4cd3"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "983c844c0d1b1fd3247525c74295ecc3"
  },
  {
    "url": "tools/note/index.html",
    "revision": "0fb6b0782d0837faf11d25ca26873f7e"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "77ff40cace233b12f813fe5bb5d78023"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a48711bb3f830ca037404d5a34526b51"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "cb8d89be15e7ca6f3576af9be391c404"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "feab019b93bee2e2f45bc5134d64c71e"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b31cfc73a1c04b7fb6944f1c7ab4a851"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7d3780fc1306dcff98e22072751a00e2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f2f84ba843b5d87916c3402c706ffaf3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8b21a5f9fc29c6ff936837a05d6173bd"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a463d4767d15b78b3f83b1c70b67e096"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "1a4e46859f15b99e440868752374d908"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "6ad092601fa8d8580e105aaaf1bcb1a4"
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
