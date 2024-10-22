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
    "revision": "77b598c1cfa4eae6d8206616bf679dfb"
  },
  {
    "url": "about/app/index.html",
    "revision": "af640c18d385a3502a9f02fba306eb77"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "df59179968dd10946cfdd75a10b6fddd"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "83548005b318bd2793bbc8a50288c905"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "02d2df820bd67db3652d4c8c9121a135"
  },
  {
    "url": "about/index/index.html",
    "revision": "1fc860d4ddef8c50e408070c11f2a6e8"
  },
  {
    "url": "ai/index.html",
    "revision": "12daca53541d67907a3c77916df1c416"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "117a970c02175472e659fb3e40f2273e"
  },
  {
    "url": "algorithms/index.html",
    "revision": "9d8561e708c2574f5f7fb32c861e4bd2"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "35473644491cca17aa9f6149a14d026b"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "e738f2c0df86c50319a9b04ef2096486"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "92eec5c7a12b40651f49d1c702c744df"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "1671c286109c7925b22fc3d1aa67e5af"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "2e419b095808e9adbccfc65124c5386a"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "beaef0eca474604fef2c11eb84240477"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "f8427ca6a9c8d20ccebb585309d34440"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "8e294e675c1e8c1f2673ee986d016437"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "9ca7b642eff1c5c94ac0a9db3d103ee4"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "5d816ea69683898009fe13fef56d4cff"
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
    "url": "assets/js/101.86074a49.js",
    "revision": "527ae229932e69a7fdc39eaab6a703f3"
  },
  {
    "url": "assets/js/102.4bb95705.js",
    "revision": "adc515f6cbb1499c5241d667c59d9764"
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
    "url": "assets/js/106.32772f9d.js",
    "revision": "04fcf9b976ea273d4b53ae322bc1523e"
  },
  {
    "url": "assets/js/107.cc5463ec.js",
    "revision": "d0e4715c4d046cdda4717904e72e8e6a"
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
    "url": "assets/js/110.f5349c32.js",
    "revision": "9268f58457a1d61d7c74ed55fe11a3d7"
  },
  {
    "url": "assets/js/111.be19c90e.js",
    "revision": "447f79ffcf38249613e67d7c51ea8478"
  },
  {
    "url": "assets/js/112.3678d88f.js",
    "revision": "dd31933d535c955c498c21e5658fcbb2"
  },
  {
    "url": "assets/js/113.bdf21016.js",
    "revision": "55c992a94c9b1196228b577082488e34"
  },
  {
    "url": "assets/js/114.3be2b39b.js",
    "revision": "32dacf15db50e8ceed2e9e7fb12027f1"
  },
  {
    "url": "assets/js/115.4dce97ab.js",
    "revision": "fa24baab85f13892193c78f3bc88414b"
  },
  {
    "url": "assets/js/116.7da0f747.js",
    "revision": "e4656120a93417a0d667fb165f5f5527"
  },
  {
    "url": "assets/js/117.5b7c133b.js",
    "revision": "1e30a585c009632b22fa21b88dd42ca0"
  },
  {
    "url": "assets/js/118.1e65dbb0.js",
    "revision": "ad2dc7d7e9ff39f9be905161f85bf3f6"
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
    "url": "assets/js/121.6cb557df.js",
    "revision": "fc5d2e0137d0de6f540672cb92766c2c"
  },
  {
    "url": "assets/js/122.e022f387.js",
    "revision": "c38f29ca7a711b03ec16c31080d29ac7"
  },
  {
    "url": "assets/js/123.c11b0cf1.js",
    "revision": "911bb91ae74315f47b5c326cf69dc41b"
  },
  {
    "url": "assets/js/124.4d0f53b9.js",
    "revision": "b3276956bb9b688739c10f704f08e5cb"
  },
  {
    "url": "assets/js/125.c99b7764.js",
    "revision": "f06e1fb0dc31a41ca3ede1eca83a23fe"
  },
  {
    "url": "assets/js/126.286c7d55.js",
    "revision": "102535feaefc2c6659e9a9087c2f8166"
  },
  {
    "url": "assets/js/127.d740c9f1.js",
    "revision": "17d14daf10d6b4d1e2ed46d618496614"
  },
  {
    "url": "assets/js/128.5e92f53b.js",
    "revision": "82517a79c7d2e736388a46d8a9a1bb90"
  },
  {
    "url": "assets/js/129.e52b3641.js",
    "revision": "52b193e0bdceb733d79acc8df9abb52e"
  },
  {
    "url": "assets/js/130.cc72eb14.js",
    "revision": "44a03eaeb252cbbc39bf0cf599adee8e"
  },
  {
    "url": "assets/js/131.8482583e.js",
    "revision": "c9d0ba294cec58def19d4b4fe586ca40"
  },
  {
    "url": "assets/js/132.41a96205.js",
    "revision": "d39726dcd4fe43ecde91b5621abdef80"
  },
  {
    "url": "assets/js/133.99790634.js",
    "revision": "724c2da4289845ecb5c0505ce9dcfae8"
  },
  {
    "url": "assets/js/134.ce8438c5.js",
    "revision": "bc3fbdd22f33f3b9bf2e7b571f6414c0"
  },
  {
    "url": "assets/js/135.09b72b1b.js",
    "revision": "a07a635a1d0fde00d493af9a6d6a52c2"
  },
  {
    "url": "assets/js/136.dd7e8b6d.js",
    "revision": "458fdfac7113fe434c855eebb02b6399"
  },
  {
    "url": "assets/js/137.85541ad4.js",
    "revision": "8953bb41c23772acbe6db051d8264673"
  },
  {
    "url": "assets/js/138.16a21c31.js",
    "revision": "5568f14bc9138e471738b59cc21cc078"
  },
  {
    "url": "assets/js/139.a3c23642.js",
    "revision": "fdb7102b89f9ac70c19c0d0d08e07df3"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.50f70028.js",
    "revision": "de7826e3a175e1844002e0893061b989"
  },
  {
    "url": "assets/js/141.c6351533.js",
    "revision": "195db2418357d833941ccb3edeb67df1"
  },
  {
    "url": "assets/js/142.17b16050.js",
    "revision": "e5db199853b9c4de6e7df122473c4692"
  },
  {
    "url": "assets/js/143.e8e114cf.js",
    "revision": "48966981dd8ce68cae21092a8e2550e4"
  },
  {
    "url": "assets/js/144.7e1a3c05.js",
    "revision": "92c6060bee0a744b5f88ef6f39eeb89b"
  },
  {
    "url": "assets/js/145.28442111.js",
    "revision": "7b0278c12acfa0d77b2aedda79ae4810"
  },
  {
    "url": "assets/js/146.8ed3228d.js",
    "revision": "ce7f4c7a94de1a9976770b96a8aa0965"
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
    "url": "assets/js/149.edd6ccf6.js",
    "revision": "4be326df6c27d3e24a0ca0bc73ac3699"
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
    "url": "assets/js/153.721606de.js",
    "revision": "67858c6cd8befd2512282b9c71b6c105"
  },
  {
    "url": "assets/js/154.942c3127.js",
    "revision": "7e9e69959949a98d9818e2cab95595d6"
  },
  {
    "url": "assets/js/155.0207a249.js",
    "revision": "c3ec9ec59505f62dcab0743d3afff699"
  },
  {
    "url": "assets/js/156.3dde5f3d.js",
    "revision": "73626425976ffffe4f02f1657ff15471"
  },
  {
    "url": "assets/js/157.e6c7e746.js",
    "revision": "e0ffb25f0a558d2b4cee8de00d750b4b"
  },
  {
    "url": "assets/js/158.2d8d2af6.js",
    "revision": "eac917fe8378d497845d7809ed0f992a"
  },
  {
    "url": "assets/js/159.faf0346d.js",
    "revision": "f56227672be3c751bc456a7509db89b7"
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
    "url": "assets/js/166.6c177a13.js",
    "revision": "502eb37f952e6d0f9f98757143cd0a6c"
  },
  {
    "url": "assets/js/167.a2fdfb2e.js",
    "revision": "eae9970a94e6e902aaf3731c414cec45"
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
    "url": "assets/js/170.9f3c348c.js",
    "revision": "645d2b76ee8ae6ce37bcd81fa01429fc"
  },
  {
    "url": "assets/js/171.a9f9da75.js",
    "revision": "632febfe33949e9e91f2eab3ac5c1e26"
  },
  {
    "url": "assets/js/172.6480a240.js",
    "revision": "1937408f54810e61bcfc82db00bff031"
  },
  {
    "url": "assets/js/173.4b3dcb72.js",
    "revision": "c7b120d59286bbc22df2edf36b2cbf4c"
  },
  {
    "url": "assets/js/174.9e65cc04.js",
    "revision": "7a6748f9ccc9120aa4a6a5e09793a990"
  },
  {
    "url": "assets/js/175.caf718b3.js",
    "revision": "80952c4104762ed1ce8eaa47b87a1e7d"
  },
  {
    "url": "assets/js/176.a12e875a.js",
    "revision": "f59d9b37da812e84344e4780c1fc1874"
  },
  {
    "url": "assets/js/177.e8136b7f.js",
    "revision": "6d825a9dc53707e48e22ddecd44aee01"
  },
  {
    "url": "assets/js/178.e19b64b9.js",
    "revision": "6139f49b36c43d281fc1e954a0f6bcbf"
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
    "url": "assets/js/180.21616cf4.js",
    "revision": "86c1196f6d3910c9c103baba70aa7475"
  },
  {
    "url": "assets/js/181.ff4ae24c.js",
    "revision": "ebf97e50d4a23b5a6c8d091d5f2445f2"
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
    "url": "assets/js/184.cb6d7511.js",
    "revision": "c7fea3f494cbcd94d455a181d0b41d69"
  },
  {
    "url": "assets/js/185.8e47a3df.js",
    "revision": "ca2aadc117102155d6000aca80f819f3"
  },
  {
    "url": "assets/js/186.239eb085.js",
    "revision": "c0a5c107ae650dccb4ca728598c70c08"
  },
  {
    "url": "assets/js/187.98f3b803.js",
    "revision": "d95b0a74fd1a18b4d95a485705463b01"
  },
  {
    "url": "assets/js/188.3ff5526a.js",
    "revision": "bcb55e81fcaa57810b6c8871e2fbfcd9"
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
    "url": "assets/js/190.175203f7.js",
    "revision": "18b1d4bb2cbc6c419d75bc2f4df69494"
  },
  {
    "url": "assets/js/191.02b0c072.js",
    "revision": "3516189d163c264f95a6a20e17578a29"
  },
  {
    "url": "assets/js/192.992eeacd.js",
    "revision": "2760c7db778a8250d0883fda087881d0"
  },
  {
    "url": "assets/js/193.12ef7086.js",
    "revision": "a8bac9a550b4899e5ee979c558f12287"
  },
  {
    "url": "assets/js/194.f682fc3b.js",
    "revision": "20c31a26d21947a9e05659d89b9c46c9"
  },
  {
    "url": "assets/js/195.50972591.js",
    "revision": "a4b464edfae04d28d4473fda57035a6f"
  },
  {
    "url": "assets/js/196.f06606d4.js",
    "revision": "edfd26404bba1e0d7211c4d495f033dc"
  },
  {
    "url": "assets/js/197.28846e1b.js",
    "revision": "75a1d99a1eab3dc40147a32853731b30"
  },
  {
    "url": "assets/js/198.477c0e80.js",
    "revision": "21a3e02c25e891365dbcae070f6a5bc9"
  },
  {
    "url": "assets/js/199.5b237da4.js",
    "revision": "3beeaa3c47d535e660d813e693523f4c"
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
    "url": "assets/js/200.078271de.js",
    "revision": "27f331beef37f4c0c961f04bd3264a75"
  },
  {
    "url": "assets/js/201.28ea4e1d.js",
    "revision": "70252d6b2e93ea601cabdf2d7eaf13fe"
  },
  {
    "url": "assets/js/202.c234e63d.js",
    "revision": "6c471eab5fea8558345f871b9f0a892c"
  },
  {
    "url": "assets/js/203.2419a3b6.js",
    "revision": "22a2c6fc0e80f095328cbae2ef2b866f"
  },
  {
    "url": "assets/js/204.7acfc871.js",
    "revision": "72ee909b9dc5661142c94cd51850679d"
  },
  {
    "url": "assets/js/205.87c0f1fb.js",
    "revision": "3848309d47b478624b1ec1c2c539a70d"
  },
  {
    "url": "assets/js/206.c4b620c5.js",
    "revision": "26e4298c9c60eb9f957f7a423cd1a654"
  },
  {
    "url": "assets/js/207.8331bfda.js",
    "revision": "38a4262d317d22cb60ad90d2ae265ba9"
  },
  {
    "url": "assets/js/208.ae590537.js",
    "revision": "b7408960ecbaacf08b4ff5efe8193625"
  },
  {
    "url": "assets/js/209.b4130782.js",
    "revision": "61f6f8f6cead6ad527b1e2feeb09712b"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.9b119b00.js",
    "revision": "4d102505fd33307a690b998ca390a2af"
  },
  {
    "url": "assets/js/211.3568cd80.js",
    "revision": "97d2f6a992b17ea6a42e8f4138e63273"
  },
  {
    "url": "assets/js/212.79aaba0f.js",
    "revision": "3ef492f0cdfaf50eebe920065ccbc47a"
  },
  {
    "url": "assets/js/213.9d2b59f4.js",
    "revision": "f397a64ea97bb75a846772fd8e8f9614"
  },
  {
    "url": "assets/js/214.20da87bc.js",
    "revision": "f6ba0c89d6daf8ebb9efb9254cc2f19b"
  },
  {
    "url": "assets/js/215.07eef067.js",
    "revision": "4d54cc8df23bf0bef301f7ecb8815a6e"
  },
  {
    "url": "assets/js/216.0337335d.js",
    "revision": "48d7f04c4ffbc29838d02092152dc3b2"
  },
  {
    "url": "assets/js/217.9de7c6ef.js",
    "revision": "bf3e8b67d4e930c4d03cdf6a6070a95a"
  },
  {
    "url": "assets/js/218.56ee3440.js",
    "revision": "c49aee84f17657d0f8b93fe5e5abb633"
  },
  {
    "url": "assets/js/219.c50f63b8.js",
    "revision": "fa24bf4a34def41272a43ff72209a8a5"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.3bb9c8b8.js",
    "revision": "be0bfa6cc75b3ac3c1cc6db7fc184d80"
  },
  {
    "url": "assets/js/221.9926708f.js",
    "revision": "ad15bacda6ab24621724fbd8528682f0"
  },
  {
    "url": "assets/js/222.f5061dbd.js",
    "revision": "52f46a92a0e0cb5f57d493bd1cacfce6"
  },
  {
    "url": "assets/js/223.82ea0a9d.js",
    "revision": "f19c00c15f251c67aea302fe39beddc6"
  },
  {
    "url": "assets/js/224.b16e3211.js",
    "revision": "66eb823a1c47465a3ebc0f191555a8f7"
  },
  {
    "url": "assets/js/225.1d1dabcc.js",
    "revision": "5597dcb11079faaf7567d4209c25e0f7"
  },
  {
    "url": "assets/js/226.f24e685b.js",
    "revision": "f58e467624d4b061eac73d1c9850de25"
  },
  {
    "url": "assets/js/227.4c3471ea.js",
    "revision": "cb796fce9d027ca765a2185b8ccfc38a"
  },
  {
    "url": "assets/js/228.b6fbaee2.js",
    "revision": "8e2210fa1968ee543b781195ae879f48"
  },
  {
    "url": "assets/js/229.7531d89d.js",
    "revision": "b15b39a786f08a6e27e0792762528b0d"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.184415c8.js",
    "revision": "5fa72903153449711d014ba210e45a33"
  },
  {
    "url": "assets/js/231.7a519e1c.js",
    "revision": "216f536fbbf06cc2825a703591bc9483"
  },
  {
    "url": "assets/js/232.0a92b7f0.js",
    "revision": "013a839c956681deea3801b538dd8db8"
  },
  {
    "url": "assets/js/233.214434b1.js",
    "revision": "43270a388f9d2c63261298b88a66a186"
  },
  {
    "url": "assets/js/234.0da5c2c1.js",
    "revision": "696a64aff0db83c2b6e5defde6c8523e"
  },
  {
    "url": "assets/js/235.cc4746cc.js",
    "revision": "98ec2b786be9c2552fe6f5038459ede9"
  },
  {
    "url": "assets/js/236.94154a91.js",
    "revision": "0e73244d0f0653772caaa4f1645aa26f"
  },
  {
    "url": "assets/js/237.5e4dfe1e.js",
    "revision": "78709ea697bfb1a57dd6c5d40807981c"
  },
  {
    "url": "assets/js/238.bbad72fd.js",
    "revision": "76abc89447b71d54967615800dd5ecc9"
  },
  {
    "url": "assets/js/239.103a5e76.js",
    "revision": "1da43cd8d95683555df84648452f6d4d"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.51ef2ee9.js",
    "revision": "caa63ee00334821966bea015b8145d64"
  },
  {
    "url": "assets/js/241.4e78c774.js",
    "revision": "12a9d3d3bdfa15e1fa35cb888beeb7d4"
  },
  {
    "url": "assets/js/242.2f579ffa.js",
    "revision": "443b21d2fc72bafe2fc5a45e78f0c7a2"
  },
  {
    "url": "assets/js/243.ecef95c3.js",
    "revision": "64f4530b3932b867062d21626184b364"
  },
  {
    "url": "assets/js/244.4059abbd.js",
    "revision": "d4870bb7ff7906827671bacc58640b1f"
  },
  {
    "url": "assets/js/245.d6ef9aaa.js",
    "revision": "0c2cb2c83f3568dbae51a3830312b293"
  },
  {
    "url": "assets/js/246.d49c1027.js",
    "revision": "3df253b23a1b2b228c1fc8900c1ec3d3"
  },
  {
    "url": "assets/js/247.e4355505.js",
    "revision": "22db20f6aae32ecb383bb764cca9158e"
  },
  {
    "url": "assets/js/248.16420a94.js",
    "revision": "51232f1d14b71776cc2d698e02678021"
  },
  {
    "url": "assets/js/249.dbc3fc50.js",
    "revision": "1b3609d6f3f0bb0160278163d926c27f"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.5a4af96c.js",
    "revision": "ff24a634067369db7961c9581da3d4a9"
  },
  {
    "url": "assets/js/251.763d2109.js",
    "revision": "b9de4a0a925cbe74f52820d150bef332"
  },
  {
    "url": "assets/js/252.f370dbca.js",
    "revision": "7f11a231e88ea9aad8f0b137284714e6"
  },
  {
    "url": "assets/js/253.490417e7.js",
    "revision": "a55a0968c5bdd990b9d8d8b6b53e5413"
  },
  {
    "url": "assets/js/254.8f9a196c.js",
    "revision": "fbe495fe94befdf3c48c2ba35a528d50"
  },
  {
    "url": "assets/js/255.3029f9d2.js",
    "revision": "8fbeadd905d0882d1ebf8481978b017d"
  },
  {
    "url": "assets/js/256.ef62b502.js",
    "revision": "86f8578b88b871b10371e9878cfb9242"
  },
  {
    "url": "assets/js/257.4fc702c1.js",
    "revision": "d2ee24175633a7ded69c82fae829d5d8"
  },
  {
    "url": "assets/js/258.09d84b8e.js",
    "revision": "9078657975f7148b763956de62cdae30"
  },
  {
    "url": "assets/js/259.202d6184.js",
    "revision": "8d9f4b105054cd76607f722e247f5483"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.46c101d1.js",
    "revision": "4567cd654b34d9d13131c560724f4efb"
  },
  {
    "url": "assets/js/261.e8792ed3.js",
    "revision": "922753fcfcb1f2d872a6df9d0f8cb3e8"
  },
  {
    "url": "assets/js/262.c5e8f655.js",
    "revision": "3409a00db25742da747102bacf494290"
  },
  {
    "url": "assets/js/263.63f1ab02.js",
    "revision": "8a331813c457f4fd4d279fdca2731ee2"
  },
  {
    "url": "assets/js/264.febf3399.js",
    "revision": "16699692eb3410b00849267e1526c980"
  },
  {
    "url": "assets/js/265.ca32f868.js",
    "revision": "0697fd9444dc6e22d702302b51f4cae5"
  },
  {
    "url": "assets/js/266.71e9a3b8.js",
    "revision": "d998356f65c41ba6167d42d1fb7a5014"
  },
  {
    "url": "assets/js/267.a929b6bb.js",
    "revision": "d3cd7f40c4c18047e2a53e252287ff19"
  },
  {
    "url": "assets/js/268.79a0707a.js",
    "revision": "ef0f03f45b8b1dbb505f27b6dabf5d68"
  },
  {
    "url": "assets/js/269.0750e428.js",
    "revision": "994b82c89f4284329e51967001f2663c"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.585125af.js",
    "revision": "b162fb21c631eb2802a294333b9fac4d"
  },
  {
    "url": "assets/js/271.0a5bd8cc.js",
    "revision": "d5b8f01cdf1e7c4fc749bfaf8585ee6f"
  },
  {
    "url": "assets/js/272.09bb6d0b.js",
    "revision": "59d5f91cacd440ef2e1d098e21609e09"
  },
  {
    "url": "assets/js/273.7d06a09d.js",
    "revision": "2e0b5a2542412511e745e7d2a6ab3fd2"
  },
  {
    "url": "assets/js/274.ae9aa3b1.js",
    "revision": "414ab4da2c3ea4e5eb6e0e110f75786e"
  },
  {
    "url": "assets/js/275.9ac2471d.js",
    "revision": "0d5fc2f32c4bfdcac6de23d47f9675ce"
  },
  {
    "url": "assets/js/276.d4ae2dee.js",
    "revision": "c617d1c4babb102ee41b6844c214dff9"
  },
  {
    "url": "assets/js/277.e95a79e7.js",
    "revision": "c42775ec3efac895ca0837670574edcb"
  },
  {
    "url": "assets/js/278.f4d3e371.js",
    "revision": "43a70d5b47ed0d1a3a80bf3ad85db41a"
  },
  {
    "url": "assets/js/279.bcffb240.js",
    "revision": "7f5a03b72a29aab374b459b445770779"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.c55a2751.js",
    "revision": "ad168362949c36f16f8a5b57e3fc380a"
  },
  {
    "url": "assets/js/281.dc5d8cd5.js",
    "revision": "dc284280c1a2e7a7654661ea76536c57"
  },
  {
    "url": "assets/js/282.82b6a3b8.js",
    "revision": "c4f7de94c33a6665dd49610ef0e36822"
  },
  {
    "url": "assets/js/283.1505d90a.js",
    "revision": "c746063cbd45190430b72deea256ff08"
  },
  {
    "url": "assets/js/284.46e7db99.js",
    "revision": "47890169ac7be74da688231398175bd3"
  },
  {
    "url": "assets/js/285.f9048619.js",
    "revision": "c2557520d1597199c723d54d4fc3ea89"
  },
  {
    "url": "assets/js/286.74bb1f99.js",
    "revision": "e7740aeba3b9926c41f4bf9d5205eee2"
  },
  {
    "url": "assets/js/287.2f7b0a9a.js",
    "revision": "5189e64a6b89ad5632e9f0a89aa758f5"
  },
  {
    "url": "assets/js/288.c2eb31af.js",
    "revision": "fd79490c6c36b5705189053c9bd2d866"
  },
  {
    "url": "assets/js/289.dcf2df23.js",
    "revision": "aec819e786eb34be38c768365bd13119"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.c6cc7746.js",
    "revision": "94db670f0408ed5e9a8e3294ac2dc7c2"
  },
  {
    "url": "assets/js/291.e0c40d5e.js",
    "revision": "d238fc9218feae3477e582c8ac65d181"
  },
  {
    "url": "assets/js/292.b3eafca1.js",
    "revision": "d52edb1c578b8bbd012acdf6d4cca222"
  },
  {
    "url": "assets/js/293.ee0969bd.js",
    "revision": "a988a0db956d38bbc3bbd60f3583bdfc"
  },
  {
    "url": "assets/js/294.77803ca5.js",
    "revision": "1df822a212341a71ed8c2b1b8f09a874"
  },
  {
    "url": "assets/js/295.d1bb61a5.js",
    "revision": "280cbc8b764008b18d6591dddef4b30a"
  },
  {
    "url": "assets/js/296.22823c9c.js",
    "revision": "380f917583f25a9659307994a668a412"
  },
  {
    "url": "assets/js/297.d40b87c5.js",
    "revision": "377a52769f18cfee827c1d09d4734efc"
  },
  {
    "url": "assets/js/298.1ac7ff44.js",
    "revision": "ee78209f8961d3bf80ac25bf4ffa1f84"
  },
  {
    "url": "assets/js/299.4079a794.js",
    "revision": "2a34e512f5f0511a65b2fd3a7c0b7e04"
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
    "url": "assets/js/300.553ae418.js",
    "revision": "a44e8a4c99278ef7d45792f24f739181"
  },
  {
    "url": "assets/js/301.fc7deaf4.js",
    "revision": "cbc0776387ce5af32ae58d2dc2814fd6"
  },
  {
    "url": "assets/js/302.6475f87f.js",
    "revision": "772cbceae71e87e7c81b44e1b6c00640"
  },
  {
    "url": "assets/js/303.a9ca2415.js",
    "revision": "e0670b568835bdf5208df14aea7889ae"
  },
  {
    "url": "assets/js/304.35c52ca4.js",
    "revision": "f3686ab1da53aa080b09315e7e654030"
  },
  {
    "url": "assets/js/305.5c2d32c4.js",
    "revision": "f22f313516296127734a51c12855f3f5"
  },
  {
    "url": "assets/js/306.a7717e81.js",
    "revision": "d0fff4190e755bf88ed2f5b03ecf0c50"
  },
  {
    "url": "assets/js/307.daf97a63.js",
    "revision": "2e7372f9468321e8347f87da095fe393"
  },
  {
    "url": "assets/js/308.d5bb4b0d.js",
    "revision": "9128ba3db1e4a57e74f3ad47631cbbd6"
  },
  {
    "url": "assets/js/309.7b640976.js",
    "revision": "c59c4ba85e67d85c6917e7e6e4ade928"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.09bf479d.js",
    "revision": "5fb96270c552ee200a5486573b65186b"
  },
  {
    "url": "assets/js/311.169a81fa.js",
    "revision": "4363c206c91d4791db7850e6e6ad25f3"
  },
  {
    "url": "assets/js/312.499cdbb1.js",
    "revision": "38f76c8a6a3a8717baf4f955cd52f25a"
  },
  {
    "url": "assets/js/313.2d75ef3c.js",
    "revision": "a06f8df0bc608bccffc0eeb6a935ba3f"
  },
  {
    "url": "assets/js/314.60198fb3.js",
    "revision": "26578e3e278a6e24803bcbc5b53e2d7e"
  },
  {
    "url": "assets/js/315.16b1318c.js",
    "revision": "47f473c15bbe54a2c5f667962a31d051"
  },
  {
    "url": "assets/js/316.bf2f2c71.js",
    "revision": "4b746331d747acb803d9a65773dec8b0"
  },
  {
    "url": "assets/js/317.0c762f5f.js",
    "revision": "dd80132b4ad8aec807d34c0b934d5a92"
  },
  {
    "url": "assets/js/318.95d08bc0.js",
    "revision": "fab4243149709a86c5610ebac104cd5e"
  },
  {
    "url": "assets/js/319.2b3943a8.js",
    "revision": "ece7d541231380eaa3bf63ddce28eaca"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.2f3b2f0d.js",
    "revision": "e75ec9bd52092615c0dd42387bce0fe3"
  },
  {
    "url": "assets/js/321.9bd13d3d.js",
    "revision": "8644655c1723286cbc0116d990b60b15"
  },
  {
    "url": "assets/js/322.5b41619e.js",
    "revision": "b6f332de06b6da0d74ae323b925e4c08"
  },
  {
    "url": "assets/js/323.50ec6487.js",
    "revision": "be46c47428a17c807a84c6c5313db4c1"
  },
  {
    "url": "assets/js/324.6e23c507.js",
    "revision": "17c8fabe9591ccb6220f399440e78d55"
  },
  {
    "url": "assets/js/325.546d115c.js",
    "revision": "a2052d77e6815eaea07ecaa8155e9497"
  },
  {
    "url": "assets/js/326.fafc430c.js",
    "revision": "57954fddcc0896420c30bc507e43b3e4"
  },
  {
    "url": "assets/js/327.da40e348.js",
    "revision": "6ae05b01f67bd83dddc3bdf9c897e22f"
  },
  {
    "url": "assets/js/328.cb4b6fec.js",
    "revision": "dc51c49949b660df0a1d17ec08f4189a"
  },
  {
    "url": "assets/js/329.b17cefa7.js",
    "revision": "e0caf42bc67970d1025f5c81bf909e80"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.f1ea88ac.js",
    "revision": "195df77a97ede1e0831366b5247dccac"
  },
  {
    "url": "assets/js/331.76274f23.js",
    "revision": "67f6a5f5778ea9a483021f41e00f976f"
  },
  {
    "url": "assets/js/332.010d3d35.js",
    "revision": "1ad3ab0980ed6bbda666f837d599b67d"
  },
  {
    "url": "assets/js/333.d8430357.js",
    "revision": "752899e97f158ff50d05ed40576e5eb6"
  },
  {
    "url": "assets/js/334.930a763d.js",
    "revision": "74aedd5fe3a2b60baa5627d36acbdc3c"
  },
  {
    "url": "assets/js/335.31245d8c.js",
    "revision": "8c80d3c285001e5a0586e75ea28a4b01"
  },
  {
    "url": "assets/js/336.07eb0978.js",
    "revision": "235084e6eda3ebde1fc88e008f0d4f9d"
  },
  {
    "url": "assets/js/337.1f537f14.js",
    "revision": "8d66b6d60e7e4c847d491b396930e8fc"
  },
  {
    "url": "assets/js/338.5f9bd7dc.js",
    "revision": "78ff6bb0a068cb43dbb9ae00ab39d770"
  },
  {
    "url": "assets/js/339.0c591a66.js",
    "revision": "0663ecee2032e244c7e5115fc71df419"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.4b3ad8ac.js",
    "revision": "9252acf3431f37131222f1802c3ae8c6"
  },
  {
    "url": "assets/js/341.0a41cbc7.js",
    "revision": "80426c137842b3bc1bc91f240af79604"
  },
  {
    "url": "assets/js/342.82fcba49.js",
    "revision": "4a0f1017c303120f443183a81966e3eb"
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
    "url": "assets/js/41.fce8a83a.js",
    "revision": "ffd58a8bff888cc4c8e88ca39b918d76"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
  },
  {
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
  },
  {
    "url": "assets/js/44.0b5e9d9b.js",
    "revision": "991864d46f8a5c6bf3113363341db718"
  },
  {
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
  },
  {
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
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
    "url": "assets/js/50.80a7d146.js",
    "revision": "037121e96d51f9455396abd199a4b28a"
  },
  {
    "url": "assets/js/51.4aca88f4.js",
    "revision": "c0852cda5add6286ee1a5501f920d9e7"
  },
  {
    "url": "assets/js/52.cb0f686b.js",
    "revision": "e5beee03eae5606428d13a65432f24db"
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
    "url": "assets/js/59.7f2c6fa4.js",
    "revision": "83948a8f0713421d0deebeac846ea292"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.2378d84a.js",
    "revision": "1b25228315b23ff0f34e1038df86694a"
  },
  {
    "url": "assets/js/61.3923ef64.js",
    "revision": "3e39cd75c87902f77f3ad21ffc89a1ea"
  },
  {
    "url": "assets/js/62.e204a376.js",
    "revision": "26c3cd2b1ac8199319aab6a6b7112e50"
  },
  {
    "url": "assets/js/63.710b313e.js",
    "revision": "b7c63b2965b1f83f74d43cba0814458d"
  },
  {
    "url": "assets/js/64.0f65cea4.js",
    "revision": "0a77b431ef5e51159a40b38c0aafac03"
  },
  {
    "url": "assets/js/65.fa90ccae.js",
    "revision": "b18f809b8527b5926041ae6f45c11f95"
  },
  {
    "url": "assets/js/66.1e61a138.js",
    "revision": "af685eeafb3a9fe6fee6187140ee4587"
  },
  {
    "url": "assets/js/67.8f335cc9.js",
    "revision": "ec796a5b1d82d5accefcf785c75f723d"
  },
  {
    "url": "assets/js/68.fc6048c4.js",
    "revision": "1d0a02d9328c04a98feff05ca049c884"
  },
  {
    "url": "assets/js/69.cb959ecf.js",
    "revision": "12ed865d48cf27cd8341a7811558030f"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.c1a8c973.js",
    "revision": "e274e523700beeb28a4a4af4b4d23428"
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
    "url": "assets/js/77.73b64660.js",
    "revision": "1c20bf23de2767883034bbd828e26095"
  },
  {
    "url": "assets/js/78.600c7d41.js",
    "revision": "98dc7ef8fc204f6d29d6c2ec4bd0d7d9"
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
    "url": "assets/js/81.e638bc6f.js",
    "revision": "2ada032ec096912e2b33f490f3636c1b"
  },
  {
    "url": "assets/js/82.1052902e.js",
    "revision": "2ba0d6c01ce2823d826bebc5dbe86b74"
  },
  {
    "url": "assets/js/83.3eed4b21.js",
    "revision": "3f4006bdaee85928fa0ff2aa08c50a9f"
  },
  {
    "url": "assets/js/84.b41a8451.js",
    "revision": "376b937a650cc7afcf06384fbb668ccb"
  },
  {
    "url": "assets/js/85.488316f9.js",
    "revision": "6d2800cf421c191862aeedff34dcdff0"
  },
  {
    "url": "assets/js/86.5d11431f.js",
    "revision": "fe75730b14a0851235a3c147df668df0"
  },
  {
    "url": "assets/js/87.b4cec39a.js",
    "revision": "82e2693451e29b21d4769c2d68ff6c94"
  },
  {
    "url": "assets/js/88.0cb4b24d.js",
    "revision": "7b39355ae8e4b8c355879f87fb7eb488"
  },
  {
    "url": "assets/js/89.f7ab7c23.js",
    "revision": "f6e03a9091beb828052b3099bb6a22a5"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.b11b19c8.js",
    "revision": "f25bbd2b5c69c2e14af357608785d4fc"
  },
  {
    "url": "assets/js/91.4eb8b6a1.js",
    "revision": "4a39bcd1d11293897fba73a81b0b6c94"
  },
  {
    "url": "assets/js/92.003ae620.js",
    "revision": "31eab006d6234e0fc779c0c9c2d4357e"
  },
  {
    "url": "assets/js/93.0f9d7a79.js",
    "revision": "134d06dc70f01e20c849d43de4945bff"
  },
  {
    "url": "assets/js/94.5f51211d.js",
    "revision": "ece1e0f6f5fd7d2f33bbfaa228dee5f2"
  },
  {
    "url": "assets/js/95.c129b992.js",
    "revision": "dcba915a1e41636e107cf9b4daca1893"
  },
  {
    "url": "assets/js/96.4f3f6d8a.js",
    "revision": "af72e2298c687c4b9ff289ae8814939c"
  },
  {
    "url": "assets/js/97.abb6bd9f.js",
    "revision": "b7a1d7a813cfa964d42bf779ec936eac"
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
    "url": "assets/js/app.7eeb124a.js",
    "revision": "5b87438a58e57418cbc13b9a104849c4"
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
    "revision": "9f83e921a0fd380445133fa99fa7cb90"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7a957744b172a4349fbafe97c81530b9"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "e65bac3fa87f1069d6cf4286d7b67e0e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "b537301f8967ca016b57ebdd646391d5"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "90c9333808378e138be2cb5692f3c895"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c2fa06a819d8bd8995eb79f29632f4e2"
  },
  {
    "url": "c/audio/index.html",
    "revision": "517b4b28ca195afae9ea9d1d1cd0a991"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "01391c0d8c698ae30f7af86ac73645c1"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "5a3d60890dfb7d871163eac276153365"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "0c5c4e022bf1f45a477f0ef741f4bddd"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "b5213b8621aa8bdd02a1b2a0471ec753"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "aab142c86525bd63bfea7ed3a6cdd537"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "f1a96840f63bf33dd8009874017f5ada"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "f1d8f49d5d79f23b37438fa05d36cec9"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "70b657e28a6b41ba4ecd9262493dc1a6"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "4c44122f0915fe16abe95809e4ab2b3f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f5472e4a6102102b64fa2401c73f636f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "c3dd7c4285cbab41940207e909bd85db"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "7823962514fe868217e08baec9fc7c74"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "e86e89c9e003b60abe790b7bfc03c111"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "e14486d8753d4935cd000d80a139afd6"
  },
  {
    "url": "c/program/index.html",
    "revision": "7c293ed39a8473e9dc2de67cf6193fff"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "9bfd97a79d851c536caea51f909adf82"
  },
  {
    "url": "categories/index.html",
    "revision": "aa284120833cf77bd273f45da687f7db"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "9edd46650e912c4966c94c72c4578a96"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "590a01d7150055694f8884b6c2967597"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "2c1c844bb3744e09585826c8079531e6"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "87f9f70fbf70124c551c26cfea25c3b3"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "2fd6b99774525fc58423844f6ad2a086"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "39542345f5fde453ffe2e90e3e395a0c"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "ffee1b6e2d7cba82b4c7c43d3f31ca97"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "f30e1ef771af88f9cf975a54b305bb47"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "b2106f1f00cf41b02298974748c59477"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "2a1401859a521c532545e21cfa3c4c3c"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "fa48f252e8db979f278c5742f1680dfa"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "47a8ba7b9eb502f60c62849b5b477249"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "66feb8d99d2a25161c1f8a3c17f45e73"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "3c0c7bb460dfe349bdedd95a9c96ed50"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "2f70a7d307c5d8a82132965d8b3d466e"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "577b03301234a8927d08a8ba95ae18e2"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "518ae7dd5d42b1a86879713c6ec0406e"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "3e30a42af21cfdf5e44a8daa62d55e75"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "703fed4ac59554f6d86258b917a6d229"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "12dedfcb75115045a32735ff611f355f"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "32e890a4ae5b9c9b805db9c78cb3cb3b"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "3eb116a55efedc3b4471c85eba972a98"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "c4f423b195283cf2ae7cf5dbab8dad34"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "ae5315e90e434e4688f23478f3078907"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "fa98b6100ac1a2adc76f5effc82c41d4"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "17f52cf7fb88aea4c5b022e3db03bdf7"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "88617c02da6bf14c72525ceada290aeb"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "8ea08b1856406eaf004882189e6021e2"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "5e8307068a47f7e0dadad798e680ccfd"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "d048bc625b1a6c5a000ce5cd4ec3d4e7"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "cb0a50762e1bc7fc0c53b0787beea4d3"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "b9077e200c93b8bde9eadfc9a7c0a365"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "2d352c9d4e28fd19e1ea179a81db6fdd"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "4dd2de4137558fbb3579c78bae3e6b38"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b577515c9fb224e95ee2cf1e494b06ee"
  },
  {
    "url": "figma/index.html",
    "revision": "3dacb5ba5c683123e1b1f576bb4bc777"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "8ed62a9a78f6c5a94d70f27548c66eb1"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "a5159951dfad6b6ffa467973e185634a"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "eee99a4ea482efb6ff191a4cf9be7652"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "4c5897411335b2d1b1e143ff561cff45"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "1590fd87a10ccfa6f9cc389a28a68e4e"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "69957c73ba9120826c6e70bebcfd2b7b"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "76f16b5bc09970538fc765894e4b927b"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "11cbce1aed1c5982a1ca4298ef6d01b1"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "aa4af875bbb0d3bc3b97990f6dcd24ee"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "d71b51e494686fecccb2e993bb062c59"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "9e646df8dccdc132db00043c2a95230d"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "e2d9a2515939479722092249999a5bf5"
  },
  {
    "url": "flutter/index.html",
    "revision": "5f8be9c19bc33b7c63c4335a17dd069e"
  },
  {
    "url": "flutter/point.html",
    "revision": "43515ce8c659c3fba13efd9e26f6a0a0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e38e0ce0a1c5ee36f219a431599ed715"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4afb1feb4e44224e437ebbbfd247921e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5f1fdef221e6cf159cd50a4a4b9cf403"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "2ac311ae057738181eef06603bb9a01e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "147f5e0bf960929b45442bc9d4f1f7f7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c029c1fe21e7c8b727188b5ead0beb15"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "54fbb2984e7b9f4840a73c17a12dd28a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "2fd40e653381b886388c34137ba4d970"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "dc9612f1b2a68b25b6c244236f78bcdb"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "de1795f6a10bff2b8edf98151a3c71f7"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "3709ebf27574863c38efa75a0978de9c"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c02050c9ee527fbfb54c8b5c855e81c8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "062e9a512053be952be7e9d1dd503654"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0335c31b0983a5108bf532ac6347a0fa"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f085150ed94b6f6e38a09eb4ccf81a53"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7f7e0a1ecda7802db2b6f6c326998099"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "de7f875f73208a6a6215b051a3c0b1d6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "08dd48a4329c4189dc8b2b8de2ef99d4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "6d3599cb02cd3d0f523978f0e831ab73"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "f6222e68b2b4f349d0d9d32c59f0eaeb"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "761de2c539d0e0fa10eaaee6b222322b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d76aa4f6089c16254ef9360458bfd4a3"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "4acb87828d34194fda2a211146998cd9"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "675aaf68fa5ccc00d3dd811fbc5623e0"
  },
  {
    "url": "haskell/index.html",
    "revision": "ac68888d1ea3b386fa567cbb6611c7c8"
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
    "url": "index.html",
    "revision": "8e9af443832e7b450cc91463ad58ed9b"
  },
  {
    "url": "java/index.html",
    "revision": "4c3caabd1310a3d3fd65a24e82125180"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "15c4129f864dc5644ca3a064d6914d7c"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "4a7c28f7020c58580fcdfb938aa4100f"
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
    "revision": "51c6f0f62ca8fc9fe1bbf4fe690151d1"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "3eddbfa62288a032ac36b84307e80250"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "33c73a2dc2bd7a4929103159008e75b9"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "fe06ebf740156b978e7c66446f395e0e"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "01d71aa62fd21e29206f91b6eee5386a"
  },
  {
    "url": "python/index.html",
    "revision": "12e7c4b5277eab3f345ab262ae57849d"
  },
  {
    "url": "python/poetry.html",
    "revision": "6c906a6bc40b5ebeb0f7f6e95a9f7eda"
  },
  {
    "url": "python/pyenv.html",
    "revision": "bac06ab15bbb87ea258d521a85977a33"
  },
  {
    "url": "python/python-ase.html",
    "revision": "5cbc74de30d2c9b07193983179c83325"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "635a7f187e0d8747a5585686d3a5a572"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "76828c81c3988ec67744d335964dbe97"
  },
  {
    "url": "python/python-file.html",
    "revision": "9236d070dfe3d6434cc9f4143c63684a"
  },
  {
    "url": "python/python-function.html",
    "revision": "ea4443bc18826b8e43b522c00ab03236"
  },
  {
    "url": "python/python-generator.html",
    "revision": "fa45ccb4fe389f905746c9bc7c9fd681"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "04b3e388b47bb96fdd44f9383841229c"
  },
  {
    "url": "python/python-module.html",
    "revision": "e257ace597f8ec0d372409f8442d7334"
  },
  {
    "url": "python/python-string.html",
    "revision": "c2497d2301107cefee44396c578ed5a3"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "5a0e917710658a4a3ceb48d44a4a1a3c"
  },
  {
    "url": "read/index.html",
    "revision": "1e7db5903cf4b0fe00cbbda739cdcdff"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "99d91e3ba2b7a09c0c5d6a407661e904"
  },
  {
    "url": "swift/better/available.html",
    "revision": "aec9fe342066703da36a281248ec48ab"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "66a5125df744e03f6bb24ae91e0dc35f"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "a3dd283c328a1b5b40b74fd6ca81d805"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3778a1e20b601cefde8093ade804afea"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c7729a37a7055125b37f904854264fd7"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a0a8a6e45eedc18c196c7ce408375e44"
  },
  {
    "url": "swift/better/last.html",
    "revision": "afb8d0c45b3a4f4f5eb09ac9a6243345"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "c5849e89a8f1c5b72d64b1605a92e2f8"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "2bd53f1a431eac0867d21cc9f371c8c0"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "0a5bae8144416b725ca51dd3fb291d3c"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "79d499619abc0689b6bb86f916e869cc"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "cd4ff06a628294d3627528214e4bcd77"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "872a7f68dbb5ab97278a41aa3019d6de"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a57f1ddb418b24d8ca81aec7433a2c07"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ecb470ceacf09135a1ca6367529fbafa"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ea7efa7c00f5ab37f6c04c5227541080"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c1b413a99b25707314993b0555cc686c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "61d7b6e14f496d6c40ab932619f4826d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0dec7b6b82feeb037974f3982ded51c0"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "be9f68b4d4fb8e43c86d28bfe4f50469"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "fed3758105e550a050e796f45c1f4e3e"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "823acd7bac576a887732ef8cd53a5bf4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1a402ba79a75d2ff50687a0f8a37e3b8"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b1f6350858b382f9f1de7b2e498a5e0a"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "8970db899464cf6021d52fbaa06bc1c8"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "d6ceea6c5dab636485ddc78063b145c6"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "593a8e1c1acf2f2385a3057c1673c94a"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "e941315327d793c8d900855b21d91fac"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "90695d4d46596b53f65b4de4f3033bbd"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "3860e13476ba6a2442cff95beb8d2eb4"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "e018ab864dcb75c993dd452b6e494359"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "945c89b64e87a93c7465ba04337a02cc"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "754a05b241304ddffeb59529e52a34ce"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "51da90076487aea46dfd720278785b76"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "30dfa4458cda3aded90c259c218cfd92"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "759687543b8e89cf5ee83c772b73cf62"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "33f4137c0c885ccda5a35c57cec4b48b"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "7ba66246116968b301cef7ca94941bc3"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "13731e21acbaddfd358476d6a11511ab"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "c9547ed6cbf099bf8aa275ba66f82261"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "27e10a2bf209edc1f9b2cb61e76b58fa"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "5b195d486cfb3dbe8e9aace911ec7c2d"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "5b593c9715e5673b91a1cd3c0b93a8bc"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "015e1e172e4f3bb2f0e449ba7dd6ac99"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c904b24676b721172987975411cf5ba6"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "b004c70c6036c53900067ab0d940bc98"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "80e28e1faa5d7ab8565d9fcc2c4f3404"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2341627156d71bec1ca4be79c944c073"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4a17df5832b94089a51408200109ad8c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "057519e9466da0b6928ba7038a0eb715"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0e4ed10ab0426e34905a9b06ae661641"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "712a067dfd0722c7629db18d2d92a1ee"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2f4bcb0a0d0aee20b10f178c7858d3da"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "79d82d690a6813e2855cbd9fa92a6de3"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "69a3336526f51c3d0effde42568840ef"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "a7612871cd68b574253f419030b7e492"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "fbdb6bddef018a4e47d982971dd23c7f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7a293cc4cf8686b12df1fa6e88ba91e3"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1f84e65ce43e45c17692250d1e45020a"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "314742801757f3e932c880435d5f9267"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "9352bba11666d63224d53d2e31214e65"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "a1a37ccfe9ed07f6c58513190d0497a3"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "0d61ff4ae270df736d6da363f9d4ffb0"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "239cbe3b36a63e8d6dd3625e6d5999b1"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "1938bf05c788d55c6bcfd0a395e5ee4c"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "750e688bb981bb377932e70ad8a54656"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "4714f29421cb13a6191909d8c79d71a0"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "e110f1563b08791498254a54e184595e"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "29af2310d15b4cba1b42073f8c367383"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1e0e812edf22988e59d77da3a9ddef4b"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "84daf0e9e64946f6f21fb8c843200825"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1d9f668d42371cd6355c6d66e740fd76"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "4e4319497bf37e23afc3abb3296e6512"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "ca7a399e121fa98af3e0e8ae9f3a4e79"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "3857e991a6a5aacaccc880e09f3799a9"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "27cb37c60b359039c0b50a5091c3b0f9"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "aa598989cb41ea8afc30332a27bc9cb8"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "955442172c31e92aa51f98e7c6789bd2"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "86c8bf65d03e97aed484bfb6946fdb48"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "87b3756b90000b40ae07f165f8295a59"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "a253ad2306a84aac7782954380842117"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "26d93561ef47ce7b25dff001ec2a67b1"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "86de63cc6f6411d529db049c58e95ed9"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "511dc944067940dc5da079c46c446a6f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "986aeb5e033e7594883235d0f14b83ee"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "26c0e5ed3d6dc89a7d7a05354ba1011c"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "5bae395cc8b1576e3ad0fd69f2d61eaf"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "20338651f0cc10a55d80c32645dd5c72"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a03542f84e4735ecfb9f7d3f8a219a38"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "6cdcb81641ca8c2d9e4136e734070d90"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "e3c17ee90713c2e9ab3acd5807f391a1"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c62717dc8bdd1cf866201fbf2b247ab4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "12fb8747909a489211f0bc843a787ca2"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "77ad00769b27d81d9b3413b9601b4e5b"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "40917be49020997762a281ac4fd8cf35"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "0f3ee82a620371ad8da12d51c16756b2"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "2b898297bc3b0452ead48c1f5441759c"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "801ae10238a30b1cfebc44156f1ca638"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "d2da36500713255296b589b80938571f"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "1d4e29e36091a3fcc2da520d717c1499"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "2d80ee968b792e9c2460a7a0a019b6af"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "aed8a9a283f560c2f2d8af9bce4996f1"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "e2c23de56652c0d6680bb08a781fd55a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "705b205ebec417a7abab1414f921c814"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1edecd05a5ca90b1bb0e8c595bec1c2b"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "490aa316abcbb6696654943f995d8fef"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "de3d8d75b283e6ca5d203ceff57a4fd9"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "95fdc7f8c2dd6e3bf69652ae75d48675"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "371487f544c3e209b6b136f1ab503b83"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "2e3bbf8176aeb827a7aaf6e06b166033"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "f4b452e7c02591d3bd22d114c71f2a70"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "5d4c4c2cc7f29cb7f446fd8d033c3d29"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "385222e722389c5032ba6070822b2753"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c585c6bf3285946a981faa438db02f49"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "341bc5969d4d7f324e6337a090e66993"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "e42e28bd1fc18d7e6dd351f53941c734"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "70bc0b1702d58a6d2e9aa5168f9d1bf3"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1986ae7b5660dafb705625e33de5a471"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "fb2d097a34ff0fc0f5af0a9da2227969"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "7f0e7cbed90ad97ac48153e380697e46"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "b8a8f03c3e1446b49ba46e96e7883837"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "876452981e937b51de23085dcc6fc774"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "3e57993d9f8e3e9dc453fc15b1bad350"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "8377d88385db686264b87892a97d5fe0"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "5c2a1af82addf6b8ba8a094d18f631d6"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "ff088c8a404e1812a375a6d48264cf11"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "5d88cc3aa1e66cc016be78ccb83309a0"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1ad362832fb0c50e0dfbf39a6d347ec8"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5906a9b16889603516559795eab32ef4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "09baa515d4fe32df7ac96131b7b67a11"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d45625c1e992c6fa9c9e233edd64d56b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "fe9cb0cff910dd034d0a2a03f8f9f22b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "253c2ecda482ea16f17c0d0495c384ce"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f714c133bbb3b1c3477b8c95546ab704"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c53e87e9d4b7ad838f2be813451c1fae"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "94def9b6f91880b5e330cf232479d2d5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "474e50e59315847900578fd56ac64683"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8e9771b7b9fa1adae989260b10b35ad3"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "704e9bad52989f4259da658c53a5ab9c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "6bb6f7a33f0531e797988385bc69f570"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "bb0ce450c80c52641ce8e7e013214f03"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b6e46827b39639f6740e4426f02af5b8"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "04a40fe5a784b5bdcaf9630115a634b2"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "d7a8050f36180750d84ec06ca42c7f7f"
  },
  {
    "url": "tag/django/index.html",
    "revision": "3421afca7a2fb8dfa668050e7d95d49f"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "04118c7371f7a55d17721162630cc309"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "56b3ace876502b7843e02d7f82034031"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "03953bd25917ad9dbec4665dfc2020ac"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bb6da4ac44be45de38b22c9ca72181c7"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1deb8715d44ece2c96d98eee2de9552a"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "65c83184ffb125220eba2ac89ca059c8"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "4759c27551026a6d778a10261ece2aba"
  },
  {
    "url": "tag/git/index.html",
    "revision": "02aa98294e0d7b549c1bb77da5c606c0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "7f95ad961f555cf68113bfadd440fdf6"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "eebcf79ac02977566a140677b9e1c89c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ba193ca83fea7269294972ca45128e2f"
  },
  {
    "url": "tag/index.html",
    "revision": "3d1380ec4ed897d819b5b3544e897ae7"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a33c72fbd25172dbe7d994426be83413"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "4cc9022bb913738da28b7ec28d212ec6"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f0a796102ad271398bb47988568ec4e2"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "25b390939f55b90de63de6a2fb68db1f"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e272c4c4d3d85c8791ab2b31c56bcb38"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "619b35cbb348f22807cb92c323305d1b"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "fef8d245246ae835388593efed0a1b0c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "e5e38e2a0879b453c887c5ff884e9d77"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "f8e452e30b4d93034f938e76a635383d"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "5a89aa864f833617b73613da03545480"
  },
  {
    "url": "tag/java/index.html",
    "revision": "576db3fd79cc40f608cb235edb27e9eb"
  },
  {
    "url": "tag/json/index.html",
    "revision": "65abd2c1033472ba1be587a9a26186d7"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "daba0db622b962d0271a4d383c44dd16"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "a8df7996aff8053b9be66f24451e7cd1"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "222711b29ab6fe6a9db5e49589a5e068"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "629d8688981e002761d6774a1f792274"
  },
  {
    "url": "tag/python/index.html",
    "revision": "443491767bf87c48c5627bf7e37160d9"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "11101aeb86062f32870246c6d53a6482"
  },
  {
    "url": "tag/read/index.html",
    "revision": "0c2d3e350062744c0674ec60601d8d69"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "63fe233c24e354d92abfb35cb9a7ca3b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "054c297e6b7fc59e8689ece8e9e998ed"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "641f9b962c3be6213094d88849bf84e9"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e06d62cf625a583b4cc353b370f4ca8f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "723f6f95b0fd29ca47dce31b3c448c93"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9759722689511247ba755adf16b4b741"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "84b874b7c30340f71420ffed104ed92f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "cc5d3cf0587234a8d657d9f844b3e0f0"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "97f022e74767aba30b09b91287bb994e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "1dbcc4ff7a183819c87d6a206d205603"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b0a9ab71117509b28e0c5e13e5b53601"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "f0ab7a796322bd9b219585c48ad51a74"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "bfe2867da0c889af9a782d710ac799b4"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "32864d9f93c29f2ade854a5fe58d3495"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "e4ae64e637b5f4bda51604c3fc486c5f"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ee76fd14add7c742594d63960c366f1a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c4b05bd9e6fb61c3e8e67c10f7b75479"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b2a1f0376f6807a5b14317824c870fe5"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a7aa68a77b22c12241f042e88ebcc108"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "35e88813e8319f301d2efc024112ffd7"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "8aacc378308343df75efc52775f446a2"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "873063407af431806c0cf23acdb6e73d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "544339195b2065c725952de2d94c73fc"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "7c6a713ae9f93f7e5ba6dffb7a853f42"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4e7fca81e0b3ed6114823a141a00594b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3fc967380eb12d206091ccb0b647e46c"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "bd7c3ef4c48861f60f3c58d04a5a4d40"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "45af31b9f8efd2850f82fc86fb2fc306"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "bd436a69d8978ed69698cd32ffecec06"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "680f4835fbce0793811079adfeeeb623"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ba0b060d86e51095e2118d75942fb029"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "1bc7b58c4e7bf8c94892cd48db680055"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "23a36742a3a8a4211f191c7c06cb37b9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "76497c2f03a075a94aef1475492e73ff"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "715d7bcb272d247a6393cea3d215a5cf"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "83bb70bb0514a5cc6d21e6f0f34a974c"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "0f89a6a577c249db9a4b6fb428538cd0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "72b258930763f52ce11bace48abda4c3"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1aeb8b380cc52de233e6765e395f69ca"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d302b855af078cfbe1c3f6055edb2207"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "cba3400b16e13967c8d3bbd955313d08"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1d9adb49ab4374190f4fc8e6dfcfab68"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "85d8fe715e06c1c245d5713cdacccb8c"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "a5f41b2f56e71606d8b25cea8265c9bf"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "d42b5b31e69341c593807d3cb4890b8c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3fdc83aec73c0d2a3dfa03fdf4b689c9"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3feda521222113f61d90f91c6f12e2f7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "9f04d21570e3f1613cdbaca170b6a327"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "c7e4754f3018cc8b8bf62198054aa360"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "075f8b87c5bd3aa2df187cc9e800645b"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1945d1d0a638caa6f8656133791e69d"
  },
  {
    "url": "tools/docsify.html",
    "revision": "e786407180c8c372998cbc8cc1081ac7"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d9489bd1ec42482256ee556a88a92cdb"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "6166cc584e19ab66c158cde442254630"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "1ee8b1f3c780d8ff79ddcdb2692381d1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9ed82ca196e56a219e3c552d100fbca8"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3105233fe555a80348ba792ccde1a999"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "56a38269d7329e32428bbdd8150b8b59"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "6bc135ee4107a5deac945dec29403871"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ac164b529b67d68b94221f6f57f4bae9"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "c45297d2e8cf39a47255e4a777775d3b"
  },
  {
    "url": "tools/note/index.html",
    "revision": "e6091641a0ca95fb6413d1071b1f8943"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "354cd280265ce4ab48d4797839e199d6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3deed5aae2a2ac6ad3e4c5316a1a5c7e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "b2b041596ce881a1ea2a0b772cb362b8"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d2eaee21b337f0f4bcbe9d749a2f276d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "7993d1f635cdb9dc1ffad109d0269e67"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d478d4999e540dbb1ae5bf879ef02e64"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "acd010acd80c3b53c25a4d84e5a341ce"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b1f5b73c6a7ef8f3fbd9ae01a8590566"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ba7570562f3bd713d994261b00cda1e3"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "d213fc488658b47a768d026945f469e4"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "784aa4cf02800f631fab1a25cfc1ebb3"
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
