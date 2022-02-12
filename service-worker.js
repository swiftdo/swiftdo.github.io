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
    "revision": "af6c11528b2855bc2415dc3e400f437c"
  },
  {
    "url": "about/app/index.html",
    "revision": "c5da03d82e8c64bae015176e9d102c06"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "364b7a5f7b0749598ffa4fa7244b167e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "be3b30507289c53bf97f39683ae88fde"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "9b2f7f13e6ca2879151b77cdbbb06090"
  },
  {
    "url": "about/index/index.html",
    "revision": "784cf1564a909af63c69df3a64f611e4"
  },
  {
    "url": "ai/index.html",
    "revision": "91ee5e6345cb76f66c5e21b500ef4976"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "2ad924af5969741ae402bb2fed0e709d"
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
    "url": "assets/js/10.ede335fa.js",
    "revision": "b1070c08cecbb974b9ee097c125fd17d"
  },
  {
    "url": "assets/js/100.4ce9f105.js",
    "revision": "6f9ec603260fff587401c51e8f07033a"
  },
  {
    "url": "assets/js/101.9a08cf8c.js",
    "revision": "8afcf7fa49956882cbfc397a4ffe809a"
  },
  {
    "url": "assets/js/102.121acafe.js",
    "revision": "180f9ef8e89849ec552f479773eadd7b"
  },
  {
    "url": "assets/js/103.06c620af.js",
    "revision": "5db991cd991ceb82864e678c5c284bea"
  },
  {
    "url": "assets/js/104.a1355f1c.js",
    "revision": "f049cf4be04128aeab0ece36708aff40"
  },
  {
    "url": "assets/js/105.794741b4.js",
    "revision": "0409c63f9fced7206b0dea1c598fe171"
  },
  {
    "url": "assets/js/106.71924fb8.js",
    "revision": "dc97b0a15b40398996b4d2e857564171"
  },
  {
    "url": "assets/js/107.1c7bc28f.js",
    "revision": "eefd961ff053eef4e05a40bb0a46bcf5"
  },
  {
    "url": "assets/js/108.5d347a69.js",
    "revision": "ec129eb9fcc5ac776dedf819d3b07eec"
  },
  {
    "url": "assets/js/109.5c70fe44.js",
    "revision": "ce6e386838c6bc57bed876a09acf5f1f"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.cd795de8.js",
    "revision": "91238527eaa7465b9a0385d678e7b7fa"
  },
  {
    "url": "assets/js/111.81fcd73a.js",
    "revision": "a0f770f398a20d03ee024d15a1fb151f"
  },
  {
    "url": "assets/js/112.8d4d1680.js",
    "revision": "7859deda69070bc50135503a808cfc22"
  },
  {
    "url": "assets/js/113.23085d97.js",
    "revision": "e4b54e9ca608b8678c96337d4d23f35f"
  },
  {
    "url": "assets/js/114.c1a012fe.js",
    "revision": "495c1c823d44e5573da5a2346a4a0a3f"
  },
  {
    "url": "assets/js/115.b1ef2117.js",
    "revision": "3e0dfebd3038ad0b52a41e5d7c8cbe7f"
  },
  {
    "url": "assets/js/116.50cadb1d.js",
    "revision": "f91774d4db76705ab16845721dc7a1ae"
  },
  {
    "url": "assets/js/117.d644618d.js",
    "revision": "70dd777b2da56a4e639f926f99012669"
  },
  {
    "url": "assets/js/118.b0d3f7c1.js",
    "revision": "991e8ea894becba5c8e8409e06289b6d"
  },
  {
    "url": "assets/js/119.c4a7731a.js",
    "revision": "d1b2824cbabea67982b26221bf8c7f96"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.a517f45e.js",
    "revision": "4fd628abf06b2b47f513291a5facfc51"
  },
  {
    "url": "assets/js/121.28cf8f99.js",
    "revision": "87b482ad3fc42faf680b7d8843c210c3"
  },
  {
    "url": "assets/js/122.1a0f9684.js",
    "revision": "29dd9f717040bc631034d7816aca00ee"
  },
  {
    "url": "assets/js/123.c08b1982.js",
    "revision": "5aff59126a3ee766110c4783c8495b02"
  },
  {
    "url": "assets/js/124.9c6ea1e5.js",
    "revision": "c130bd6cd0d0a0211f9963b1f2d24d7e"
  },
  {
    "url": "assets/js/125.a601be08.js",
    "revision": "eae5d7b59f047b46fc73707e6ea7b4f2"
  },
  {
    "url": "assets/js/126.755995cf.js",
    "revision": "89c1a9cbb3136ce6d419feb54b8ea17b"
  },
  {
    "url": "assets/js/127.fcb0723f.js",
    "revision": "a9c6bbefaa907409c5e68ae17939cde0"
  },
  {
    "url": "assets/js/128.17775f07.js",
    "revision": "a2d44070b08617037eec47872906b9a4"
  },
  {
    "url": "assets/js/129.507eb01b.js",
    "revision": "0eab8b0f27cbc0ea5cc978be8a2e9fed"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.0a2ccb32.js",
    "revision": "a2ccbc3374df0b6dd930daa3d001f1c4"
  },
  {
    "url": "assets/js/131.f169226e.js",
    "revision": "43a49d9887349ee9a4f9b1b368b5c26d"
  },
  {
    "url": "assets/js/132.3d27c0e5.js",
    "revision": "a6b3dd24fbf190baba553d368c91105a"
  },
  {
    "url": "assets/js/133.a4e7a24b.js",
    "revision": "cb813ad4c2debdf295e69b4d84fdd480"
  },
  {
    "url": "assets/js/134.7bf25b41.js",
    "revision": "34ae1f92d932db4b448c9bee627e911d"
  },
  {
    "url": "assets/js/135.c6bad6d7.js",
    "revision": "136abe29e8fd8b749df5724d7d30e3cf"
  },
  {
    "url": "assets/js/136.61ffad73.js",
    "revision": "5921b36181eb37aab340edb58c9db184"
  },
  {
    "url": "assets/js/137.a9632149.js",
    "revision": "286704788ad6aaa1987db26c6c31c8bc"
  },
  {
    "url": "assets/js/138.d00dd397.js",
    "revision": "0f5d279ebd9bb1c5f3015435de90d7e7"
  },
  {
    "url": "assets/js/139.9cb8ee24.js",
    "revision": "5f9e6a601081911a42806f34fdedd965"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.0de4ad78.js",
    "revision": "40de267591b1caad875e90e75008e49d"
  },
  {
    "url": "assets/js/141.86c12155.js",
    "revision": "bd4a10164f3d93c025787f937378ba28"
  },
  {
    "url": "assets/js/142.a99e030f.js",
    "revision": "af0296fd95de24571b813433e78b4869"
  },
  {
    "url": "assets/js/143.fa8a4845.js",
    "revision": "f431f12b8db0741a27a6cbe0259d4933"
  },
  {
    "url": "assets/js/144.c6f34ee0.js",
    "revision": "760a001cc2afa831f45ce8c8e0cd1e4a"
  },
  {
    "url": "assets/js/145.15ba768f.js",
    "revision": "9a066462d72ae87d5daaceb65ebad41a"
  },
  {
    "url": "assets/js/146.2f6531fa.js",
    "revision": "f51dcafee11ecb9261f34ef6ad4a7ca7"
  },
  {
    "url": "assets/js/147.3b0a7532.js",
    "revision": "decd85efc4aff92674e9873e9e600aab"
  },
  {
    "url": "assets/js/148.da73b7cf.js",
    "revision": "4fcd5666ebbb54cb704a1a816fe3ca30"
  },
  {
    "url": "assets/js/149.13a315c8.js",
    "revision": "ceb057852eb668936d2d085fd26d9f7b"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.c99f876d.js",
    "revision": "5edf170066f3ead21bf2f81f24ab0d13"
  },
  {
    "url": "assets/js/151.78ab8f49.js",
    "revision": "5662c9166a7f7a481efa19ac58ae4946"
  },
  {
    "url": "assets/js/152.87c0b423.js",
    "revision": "c128e21d9ecf213f4f7a0fb72fe7faa3"
  },
  {
    "url": "assets/js/153.08725818.js",
    "revision": "75b08108f2bfe42d94afe1a6852c7073"
  },
  {
    "url": "assets/js/154.48d6b42a.js",
    "revision": "8732ee2ae6d9a69299af20a3b2c6518c"
  },
  {
    "url": "assets/js/155.d199be8e.js",
    "revision": "2eee8e0c83eaa9e64059adab43e254c3"
  },
  {
    "url": "assets/js/156.d9b9655d.js",
    "revision": "21006bdbd15935dfee0f595efcb9e72d"
  },
  {
    "url": "assets/js/157.4245c72f.js",
    "revision": "da75f04749ab81eecd5293bcdc74b4bc"
  },
  {
    "url": "assets/js/158.70ea0448.js",
    "revision": "a519ab800987218dd1d2316b739d7df8"
  },
  {
    "url": "assets/js/159.687b8e94.js",
    "revision": "cc39e9500420bcfedd0b00071926c7c0"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.853ddfcb.js",
    "revision": "515e3a5d2b393ac0ace93b07aa1e8a4d"
  },
  {
    "url": "assets/js/161.c3382c7d.js",
    "revision": "bdb0c77031fec7ad1f8f229b80457235"
  },
  {
    "url": "assets/js/162.82a52e14.js",
    "revision": "c5afc30dbe0bd99b1a41a619c308e4ee"
  },
  {
    "url": "assets/js/163.03e7c4cd.js",
    "revision": "22bb08561620535ae58d67855fdf5156"
  },
  {
    "url": "assets/js/164.8f40802d.js",
    "revision": "b0a68e6d3aaff4ced9f61ad7461f0503"
  },
  {
    "url": "assets/js/165.aaede656.js",
    "revision": "002c90e2a8525c01cd003aa42295fc18"
  },
  {
    "url": "assets/js/166.5f9f800e.js",
    "revision": "835f17b24f7d1bbd6471ad999f135993"
  },
  {
    "url": "assets/js/167.54818ae1.js",
    "revision": "41244630fc6a761b6629cf68899d2027"
  },
  {
    "url": "assets/js/168.7c285da3.js",
    "revision": "9f5d52cdbc76eff109cc4eb8fd604312"
  },
  {
    "url": "assets/js/169.f74679bb.js",
    "revision": "11478bed5e169d1f0e4fc2cf5341d8b9"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.9e223f51.js",
    "revision": "39ce3ed2815fdce31148994c329ec060"
  },
  {
    "url": "assets/js/171.d93974b1.js",
    "revision": "6df6c1b8b9ccda2e09f4c6d9c44ecf67"
  },
  {
    "url": "assets/js/172.32890660.js",
    "revision": "55606fc246b94bb709434560a3497f98"
  },
  {
    "url": "assets/js/173.6021a8a2.js",
    "revision": "31ab3efc423cb9b5a2458e4eb050ecdc"
  },
  {
    "url": "assets/js/174.31eadd10.js",
    "revision": "a49f1c6d33d745a2cdf8ffc9448f23a5"
  },
  {
    "url": "assets/js/175.0c79ff4d.js",
    "revision": "6c672b88103ac80adb3b241b15980f64"
  },
  {
    "url": "assets/js/176.636092f6.js",
    "revision": "f76c4546bc9dd13135860c309e9ec721"
  },
  {
    "url": "assets/js/177.8b45adb2.js",
    "revision": "da8badc892d2902672b16b57826935e8"
  },
  {
    "url": "assets/js/178.7ec382b4.js",
    "revision": "967a5b2cd93638943e1b3958bb100ad7"
  },
  {
    "url": "assets/js/179.8970ad2a.js",
    "revision": "dd9922aac670c8411ee3e88ae0ab8979"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.df045a97.js",
    "revision": "ad4df4db5f463bc7d2bfaa4ec0ea162d"
  },
  {
    "url": "assets/js/181.7a416c91.js",
    "revision": "d87c5b8a93b456685b78ad21bed95b75"
  },
  {
    "url": "assets/js/182.d30c9aff.js",
    "revision": "ed16e6f9457b06e09c8d2adaf7093f2d"
  },
  {
    "url": "assets/js/183.1215be9a.js",
    "revision": "05778482ef8d7161e662e0cc03ab70dc"
  },
  {
    "url": "assets/js/184.6a5cb13e.js",
    "revision": "51aedf6b8413fa56733ee7cc5d46ac7d"
  },
  {
    "url": "assets/js/185.4aae149c.js",
    "revision": "10bd89cebe2f81f2758523c1403f2a62"
  },
  {
    "url": "assets/js/186.a72c5653.js",
    "revision": "e39c84f4a07386f4d6af9669dc5a0a3f"
  },
  {
    "url": "assets/js/187.89b346f7.js",
    "revision": "1a22d640994e2fcee0b1a7322c4be684"
  },
  {
    "url": "assets/js/188.55e2aec5.js",
    "revision": "18d365157e30c73412f836feb07dc7e0"
  },
  {
    "url": "assets/js/189.7ecbfb7f.js",
    "revision": "e1c86fb2dbbe6bd55c51ea2391b1e56f"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.0fbddf47.js",
    "revision": "9cb46b477300c367cc5688a3d6d6c248"
  },
  {
    "url": "assets/js/191.3d0e4fec.js",
    "revision": "7ff57c901473de65a3357f5e0932a78b"
  },
  {
    "url": "assets/js/192.5b9ad4d4.js",
    "revision": "7283d9e0cd5549d460dc78a6b25099cc"
  },
  {
    "url": "assets/js/193.cd95e2db.js",
    "revision": "0fc633cb92c639a32d5403811da51a02"
  },
  {
    "url": "assets/js/194.73da9055.js",
    "revision": "a296465fa54577b9f99387997855d278"
  },
  {
    "url": "assets/js/195.db546644.js",
    "revision": "93d849973465a0468496eeb25de94aa4"
  },
  {
    "url": "assets/js/196.2f58ca3d.js",
    "revision": "9f63d1ccf25f57fd3ef0ea1c0ecca731"
  },
  {
    "url": "assets/js/197.4a88007e.js",
    "revision": "e7b86245329a0de33fbfc810f8858157"
  },
  {
    "url": "assets/js/198.5ba96dd7.js",
    "revision": "548a2fb34cea145bf938436023d77241"
  },
  {
    "url": "assets/js/199.dd0636e3.js",
    "revision": "5e8feac6fbb03a326fe5a8bd4172a98c"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.2c3de802.js",
    "revision": "2bc9420c25b56fdc15126df307cb4b42"
  },
  {
    "url": "assets/js/201.76ad1cce.js",
    "revision": "019a9895ccaed3b4ab6355f10847345a"
  },
  {
    "url": "assets/js/202.c63b51c2.js",
    "revision": "d1c0af275ee35285a61e7bdd198ecbec"
  },
  {
    "url": "assets/js/203.d0b1699e.js",
    "revision": "9d8b2b2f29f26ab4fddfdae5187d9595"
  },
  {
    "url": "assets/js/204.5ded5b06.js",
    "revision": "41f5c0fd06b79538749ee7f4d5c75abb"
  },
  {
    "url": "assets/js/205.dc430152.js",
    "revision": "e3aab3815ef4238bd5f10ac2276fd559"
  },
  {
    "url": "assets/js/206.0769b53d.js",
    "revision": "2dcc58dfd1979edd4c8bfc81becda2a4"
  },
  {
    "url": "assets/js/207.10423242.js",
    "revision": "1e159f2344b4f3e4a21eefd324d9da94"
  },
  {
    "url": "assets/js/208.d3e2b1d8.js",
    "revision": "90fb81a7d8b94da58d5bc8da7a30898d"
  },
  {
    "url": "assets/js/209.43b7a803.js",
    "revision": "cf47969403dda05e815be50301b22150"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.1c812ff1.js",
    "revision": "c82164dc3cc99b9597187b457bece45b"
  },
  {
    "url": "assets/js/211.748ece14.js",
    "revision": "47077ae08cf4f8856751c882f3398c02"
  },
  {
    "url": "assets/js/212.24cba751.js",
    "revision": "e2d81ae78cf761a0278be85069d14834"
  },
  {
    "url": "assets/js/213.d39a68ab.js",
    "revision": "fdc69cf540e895d8037de08f4e8d347c"
  },
  {
    "url": "assets/js/214.199a350b.js",
    "revision": "4e9fd8bcfa8fbb406faef5e6bbe52ed9"
  },
  {
    "url": "assets/js/215.7153c074.js",
    "revision": "d468f6f4e3e496109f8b817f0ed01b07"
  },
  {
    "url": "assets/js/216.844291b3.js",
    "revision": "80b8320e842817573a8e1555ed9e235f"
  },
  {
    "url": "assets/js/217.b86fc09c.js",
    "revision": "413191fa4ef3dafde7c13126599ae71f"
  },
  {
    "url": "assets/js/218.41aeaded.js",
    "revision": "979b72b47be9d5a16f061aea01d83b1a"
  },
  {
    "url": "assets/js/219.0a187256.js",
    "revision": "2e0295e1844f972c12e3bfdc5b14d771"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.b73281ab.js",
    "revision": "fe30124026bc2254504cf98bdd76c16a"
  },
  {
    "url": "assets/js/221.49390331.js",
    "revision": "8dbe9308903f00bf2c83e7eb9d3944fe"
  },
  {
    "url": "assets/js/222.5c595865.js",
    "revision": "93819aab87069830b07e997389f03e1f"
  },
  {
    "url": "assets/js/223.84cc7788.js",
    "revision": "cb134e1893ade5aab2497a8358d90189"
  },
  {
    "url": "assets/js/224.45aaee32.js",
    "revision": "6959d3d5d26daa7aefc42c66e25b3649"
  },
  {
    "url": "assets/js/225.d50fad59.js",
    "revision": "0ed695e0600e765c5578472ecfee72b6"
  },
  {
    "url": "assets/js/226.8caccd31.js",
    "revision": "04b3068297fd0b20071aa647da2c73d8"
  },
  {
    "url": "assets/js/227.9933528b.js",
    "revision": "e8fc409dfd3ba414058bd5fb57d6e5e9"
  },
  {
    "url": "assets/js/228.20e2de8c.js",
    "revision": "69fcbfe8b4501a8e0d5ae6090dff686a"
  },
  {
    "url": "assets/js/229.bee3dea1.js",
    "revision": "1af5eb26081f11c969901107755350d6"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.c79084c3.js",
    "revision": "263038092887b65b4aed80020544f269"
  },
  {
    "url": "assets/js/231.ccac7252.js",
    "revision": "4520dc507162db1af27721d046d41c44"
  },
  {
    "url": "assets/js/232.eb2e4189.js",
    "revision": "7ee16185e5b9ba3aa5fccc2f32f54d53"
  },
  {
    "url": "assets/js/233.15a2034e.js",
    "revision": "5c3df8735b9ff27461976e48b132c1f4"
  },
  {
    "url": "assets/js/234.ae6af74b.js",
    "revision": "d026891ff0a93ad00d195d111b0180ee"
  },
  {
    "url": "assets/js/235.f05b83b7.js",
    "revision": "bb3fb95dc9e36958f0d3898cb6255461"
  },
  {
    "url": "assets/js/236.44488e51.js",
    "revision": "c3f4afe4b673253e0613fc9c85fbcf3b"
  },
  {
    "url": "assets/js/237.1a1629d9.js",
    "revision": "e68b9a91a61997fdf5ff2a81d6cf5510"
  },
  {
    "url": "assets/js/238.003d371b.js",
    "revision": "e1eb3de60d5b8f0b8e2031cdb29455d7"
  },
  {
    "url": "assets/js/239.610d1bb8.js",
    "revision": "4c0ae0dd9349cb46186c1d014b5b8ed0"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.977ac916.js",
    "revision": "b8282f27797bec3c777f359fdb79bff8"
  },
  {
    "url": "assets/js/241.60e85739.js",
    "revision": "31de3872baac0bfb08f70d3885229850"
  },
  {
    "url": "assets/js/242.f029f4b9.js",
    "revision": "d2691366b8a8d5d986c569cdafce0005"
  },
  {
    "url": "assets/js/243.8e77cb79.js",
    "revision": "ed5abaf9656c6d1e19f8b25b38065bca"
  },
  {
    "url": "assets/js/244.78c4ed26.js",
    "revision": "3321fa23251a4a2b6c048f8ed49ea1a1"
  },
  {
    "url": "assets/js/245.19a24c6e.js",
    "revision": "c6478f36e3806d0ff4db238c14061950"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
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
    "url": "assets/js/37.4629320f.js",
    "revision": "38da31c1301cd535db52162512711b58"
  },
  {
    "url": "assets/js/38.e37f0a51.js",
    "revision": "2fd13c9eeb3f3dff73c7b98b6fb93b2a"
  },
  {
    "url": "assets/js/39.7c2c6898.js",
    "revision": "b04b35f74a31e2c656081cf5f39460fc"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.e1569198.js",
    "revision": "a1d33d810844dae96fdc2a585e7dc4f8"
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
    "url": "assets/js/45.5029a117.js",
    "revision": "87ac3c199a8e29dee7223a21743b0793"
  },
  {
    "url": "assets/js/46.041af430.js",
    "revision": "a65e607314022e649794cd5f64db99f6"
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
    "url": "assets/js/82.e50dc3ba.js",
    "revision": "8a99ba60497ac000c83c477f0689e514"
  },
  {
    "url": "assets/js/83.d18103d9.js",
    "revision": "a5d3e56105a8fee674894465f9b7b08c"
  },
  {
    "url": "assets/js/84.62b46400.js",
    "revision": "a1e8aa138cc942745fbba22567b1b8b5"
  },
  {
    "url": "assets/js/85.eb26dd3c.js",
    "revision": "4cb901d1f8d405fe6545ed3c26b32cca"
  },
  {
    "url": "assets/js/86.7e003ff0.js",
    "revision": "c7bc1e64bcc2776bf9874ecb0f9f2bf2"
  },
  {
    "url": "assets/js/87.cc1300b7.js",
    "revision": "7c239b8735bdaf010b9ae62cff7a68e1"
  },
  {
    "url": "assets/js/88.1e954b0d.js",
    "revision": "ba0e09fad16869ed6f5ac158fdb3d3b1"
  },
  {
    "url": "assets/js/89.da09709f.js",
    "revision": "5ac5fa5d5a8347f13ca416a3113fbecd"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.c36e7d4f.js",
    "revision": "23a640b79ecb5e91b08771bf7afc6bdb"
  },
  {
    "url": "assets/js/91.b583b8a4.js",
    "revision": "5e62de1da1e5655e3bbdafab690c0ab8"
  },
  {
    "url": "assets/js/92.e0f0611c.js",
    "revision": "cbc41a83605724b8b635273d896b91cd"
  },
  {
    "url": "assets/js/93.01f1ccde.js",
    "revision": "3fbc1466c532001d8639983af9f00990"
  },
  {
    "url": "assets/js/94.9c680141.js",
    "revision": "ef45ed85f47ef3876ebe8003c500f68a"
  },
  {
    "url": "assets/js/95.fa83163a.js",
    "revision": "9bb81f096f7b29c70702b4f69b67c43b"
  },
  {
    "url": "assets/js/96.fd7bde79.js",
    "revision": "fbac7f879d43b2f66c11ff337d0aeb41"
  },
  {
    "url": "assets/js/97.809f6c4d.js",
    "revision": "f16239c467b916a5e5ab717f8b948455"
  },
  {
    "url": "assets/js/98.914c104a.js",
    "revision": "dfb8c0c2af43d5b096175abcb4a926b4"
  },
  {
    "url": "assets/js/99.da54b45d.js",
    "revision": "ec5730f8b5a351a7fe052c700661d929"
  },
  {
    "url": "assets/js/app.b79707f9.js",
    "revision": "f67da85fcec642f8ba171365e66b350c"
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
    "revision": "73147a822709a60d710f4492f4a6a46f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6fde3de5c29e2034b0aba5a12bc9757d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "156d7ea02cc164f30cc83fcd18e87f2a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d9dadb16c506a0a27112484a8bc15a58"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f2a1c2c26efc5ce8536ab4e62f552f86"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "5068d8413b2d6c998388e62fe520ae36"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "39b5366a0bc2e3e2c8d2bfb0cd428151"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0b3b96c0c05d9294dd65c778fb1ee0bf"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "79b0babeb14870d0feacdf9c9ca4cd63"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a042bec9687fd5637b173f9480e494fc"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0d800cb1a4eed9b48e1715fa07fdf8cb"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "88722c8cb3133a0f4046765a2a0de660"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "fbb15031f40f63e4d4a2df54542d18f3"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "96c0719f216bdaf432ed4bb4fed37c2f"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d15d3199cdf2009f1eb04ff2a1319ca9"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "414ae2fa7d3403e1dccd452ca55e4bbc"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "1c8d245219e3ab83b4270b0c03b602f8"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "e940ea9c7606ea715707d57aff1de020"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "71d384df4b6eda87a26b8f45049e83b7"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "cfef643b8c3534b7d505d031a138eebe"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "a1cdfb4719bba4aa380e334a7930b4b0"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "45d664a3ee840b9685de496ba2cc59d0"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "f92b1785f3ba47e3e73b4bf401b0b538"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "f3f360d356bfd208b01c3d51b8a21e42"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "367392bf66a0831af486b6263a687c12"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "c1b37e42aa140dc41c0b560ed7a1eceb"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "2ee5fae80f0a5f16a84fb054dc1faccf"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "4d7683aa453463e27848df83652ffb0b"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "8cce458682d8884aa73d4bd8228f4b23"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "dd1decd56aa22602ff644c5da6a0459d"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "983b6d4389ee56bd15f7ea66a9d90b7d"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "fe8f8663f92bc27db41b024714ed0093"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "d2648c54f6492544b0fe440967db5847"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "20e10b9e4011ee17f8c0ed25deed0b16"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "e6f2874997a6c7fc417bccf431d7db39"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "24c137642dc6994398fcc7c3d2b207d7"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b16d0d28e957b4ad6c29fdec85886c58"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "255cf5b13a65a20dc49c4bbb52a25e92"
  },
  {
    "url": "basis/index/index.html",
    "revision": "e7059581a31eef726e045ab131c01f20"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d1c58226e373b51bb16d8fb2d5fd3af7"
  },
  {
    "url": "book/index.html",
    "revision": "8e05823b85dc7efc0f4f5546ffc53ea5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7882511a1c280f298c47e0d16204d90d"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "1fd0300b9aefae874b3a70ff0ebb846b"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "90a179a64e57d83ac556e531712a65d7"
  },
  {
    "url": "c/audio/index.html",
    "revision": "26b597dd38a7f191d4cfdb131d0e423b"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "a7ce7015c6dfaf591d906ad0326e174b"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "6e6e9fe5d2df61b328921a95944b9dfd"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "660785ef31d284a5eb46af174aa6d28c"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "aef399acfeba06a9dc1dab3ddacffe1d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "f4d30796d58cae8e26f0654cbfc52f5b"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "fe7e4c77a75cc12c0f9aa9dd4407d940"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "51d19cf541671c9a5acf06c3f7dce11f"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "ce1fe0a251d02e51d46da194c9ecef29"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "794205174bec0512024c892d4ef4be36"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "9a1624161ecc666560b0f5a3bd60ab0d"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "5b834bfecef7ecd20314ecd968047a0f"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "d26a6d663acd445353bce7f2562694ce"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "13a3af6582d81e90ab5fa9afd304da17"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "0bb2fe16f24a39955d826897a5ae4984"
  },
  {
    "url": "c/program/index.html",
    "revision": "897b52e76d04adc34d4694d739ea9641"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "c2034d59e999d6b4d2a86352c1be3fa8"
  },
  {
    "url": "categories/index.html",
    "revision": "b4f7906f6cfcd31b6ecf500d09d8c7b7"
  },
  {
    "url": "figma/index.html",
    "revision": "2437b7feaed6b188d8c98fa5efac7718"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "7e4f35cbd423f259aa98109495b94b9d"
  },
  {
    "url": "flutter/index.html",
    "revision": "76eb8d78de647a98e3c5a6b173deab34"
  },
  {
    "url": "flutter/point.html",
    "revision": "456ca8bff1927bd0d6fd37c2dfc5bc82"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4d52f87b9927a0b0ed34437aab1a791f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "439f362ffac61eb7f2d53c4c01dcb3db"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "36daab384e5797ab02e26a8bb628b713"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c1ca6ee4a72be8f0715abff51334ef71"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8ef50ac12da657aa0ee9f81ff892b94c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "9396b38cc2b300a8473afe06152482b2"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3a4f1690142675a770aca4bc738ac77c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ddcfbdc797167fba2e864a6a683d49d3"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2762e4a4a275632018cfcc4bc5b44ff2"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b3c8552fbb37f4551b0fae346f12c64a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f7918d3977ddc3f68a9816183778294b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e8a1090247ce009e64b92d9b1c62406f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "298d4584e4d983397e2238bf84b9ec1b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "ead37df2a6f8e48cb6b9014cb513c17f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7082e9ec9c3b08efd3aec7532b0e2583"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "55dbd3b30c94e91b09a6391642375afa"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "63011a869cffe8b146e4da8092c8d7b5"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "2c69e1ed5c6fe4da2b5b438cbd55cca2"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "8a40ca033c9e9b6a96c22232c7003573"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "23e22da60077255676afb391030036aa"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "eccf1d403f4a0e0a7f74c743a39c23bf"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "c5a79f55f5393840860191ecda3ff37b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "4205f840ac059866a466666be7f747dc"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a9ce8cc8f4d6d86e742ed579268aa956"
  },
  {
    "url": "haskell/index.html",
    "revision": "2c393a0ac7db7afcd01e7a82859c72e7"
  },
  {
    "url": "index.html",
    "revision": "3a05c7f8f02986b0f0008a3b432c7b9b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "134ad7ec069fa95e7dd4ef85559d8bec"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "1156af9708cd7d881544cefbdf79d232"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "a727f6177665ca733828ecd830e0f5bf"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "02d585fef4535dcc3ff2eaf2279af166"
  },
  {
    "url": "python/index.html",
    "revision": "34510b5075378d5349b5c50b26c94cae"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "46716832dd4d09b8c7ee5bd84263f7c6"
  },
  {
    "url": "read/index.html",
    "revision": "ac5e379a0fb85869a01e6b95c562bd15"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "fd82a56803e1212a0d968c3768441d2b"
  },
  {
    "url": "swift/better/available.html",
    "revision": "6f2b0ebf0fe67e149dcb7c98babdbccf"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "a6e06abe058f68722bd10a8098c11c36"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "623bd5024b002e1a6928266c06e48580"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "203bdc564be6c5aa95782a613d96feea"
  },
  {
    "url": "swift/better/di.html",
    "revision": "063202358673697fd7a9bde297153639"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c7840da6c34c2d6b911d10cc00996bac"
  },
  {
    "url": "swift/better/last.html",
    "revision": "3defaa1cdcfa9c595fe2fa269b1f6fab"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "81f4a3722932381cf29c3f17459fb000"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "4d97162442bd6d63b6d31562c7e9e6ba"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "4b1a3a0834d43cde0ea1265a9d100d77"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "2d08856432646c023164eade6911d2d3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "41af091e598d9d7fea327996d82420dd"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "73ba8c85fb5db11b233fd2dadb1ff009"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "f591e7c74fe671df2a578f6a600eb592"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "cd1011523cd062083ae1e56e81f23508"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "88dbce479afb0010e221856ed5e4404c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "4efaef948f59e69b2aa1eb3d304a4117"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "fed98ba10d26a910c4988e4235b7bed4"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "f76c37d077474eabc8fa51269e580de6"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c2995fcb7804560bdb16538acc080da6"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "912e0eaf180e6d60bd64b8db95faa985"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "012fa6a2103522e1084b318be59c228e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ee94cdf1a56fd3f5de6775749cf05994"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "897051972cab056b7ea8b4f1cbc99826"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0dc70af76eab2435a5bcd37d802babbb"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b521583a19af286b18ed671472b4d1c2"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "d31da312f91e3b8bc4bf6ba147f4a74d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "6d183629732dd2b153ff3aa56b6a4125"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "1a037b1e8a3ebe2a312f61b19b6a8f6e"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "a55c3bf8d8742bcdb2e57d227c2863db"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "1f198756314bcf4be4c3878b2fb9ad21"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "f83ca105b97ab86fda159d65c44d59d1"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8f8a5801d198d50bdaa737e38c6f9b1c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4c7d4d0e8b1da1aac5328a93c3b6d707"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "79d8276795bbf5cccfe570ba7076a04a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "c85e6f72e42591f28e5dbbedb8bcff93"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "293c1e976e82bcfc701bfac0c4077396"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "14e027604e9c9e7b8aee2f9f12d12e3f"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "0525265f51e7d86458218e1480b82ed9"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "03401272a2fb371f6485cae895567903"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "bbde38d82d9c4b6d125c3a55334003a7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "290357cae967339a4e589743bcc2c306"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "12a819848e0682aa1b1153719856c598"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b6807aa14050831e0041278133dd9d76"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "40a12dfcca9a48b055f010367274c0de"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "471a479f04b10ac6a72409a868be96c6"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "22bfbf8848a9ba98b2715c57558ee65a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "7fe72bffb644f3cfcfa716ec8cf758c3"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "87f65c779e45337819d36e0aababbb98"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "5d964dce2df1484170c99c4c7a6c0550"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "13992540ee3b17a2aeddc54803be62f3"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "6deb5ed2828bf66ce51177f483e5d64d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "bffefe6d0edb55925e854938bde4063c"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e39ff8ad222e60970084be251470b296"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "275644a6e63b6c4a452636d9efb76673"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "571c488a60e45864f7f804da3355d1ec"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "bc83eebec45e9322fe0fb2946886b85c"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "356df92f69561e3ce5768128281dd92a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "0ddf16cbd1dba185b1084ca61f9c63d5"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "1c48aefecb0413bdc911564596de3590"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "42b507e2a0ae6eea2099c5fdc7011832"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "79251a131cd3fa9de2a8929e9c484c6c"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "97489ff51af00408b43e5ee747e22aac"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f70d28362c0298122a28295a99081fb9"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "d277ecbeccb0ec7ffbad9b10ddbbc12f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "b65f0bea6d1dfc7fca7a9cc6eb4e4812"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "18c1fc534a884e4ef85353bab79e2c4e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d37d464f57a36cc7a77bfa6178392b70"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "ac5bf76ddadfb21c4d926fea4cfec664"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "f58bc576a89e8e2c4f35d0271940969e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "0516398b945d61a6168f550c223655b8"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "67492c5ab7bfc019fe5d510014fa2290"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "844630fad541c4e48559c47dcc51be5b"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "f7f114630e8fa0b6846f0bbde576dcfe"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "7ae752728bfb5b533fdbfcba274e7f99"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "4c9e200ff98946033857b76cf3831015"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "711080db44dfe9ed7e031487dbde20b5"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "ff1e01bf8c598c2de8a249f7adb0e8b7"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f274bb89dec961af2c9c950ef4504a33"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "fa656a14f09d839468fa55144cd160c6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "a2f65175af583e81273fed44d7a43276"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "079ee82514a0a259b1f08d28951984e2"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "f376e86719d2d0f1aca694c40997bdc8"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "d2c8397af8f9b4044e43a718297d9a86"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7b34fe3a39dd24e3a7c6fc001885ff54"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "37cca7aeef8a246db99ef18531b9f9bd"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "44f8445f766c2c5cac776574c091bec2"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d9745a28545a971f1618740f2c818472"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2eef9bb35c076061d18c78531973ebe2"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c8a343c5915f4638a82ab104fef4336b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "50401d529f3b35a902ba5da2471ba896"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "feb1338f321b363033b26bcb9d5b3fa1"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "66fc31b5fa72ee44df04dd7827826fdf"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "8fd5508ae35b2e940dd1f3bf570a3543"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f42f6c40e3c94921728d02e5ec303387"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "5a89c44fb5fe7ad3b20f9eda9d0e6c83"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "350f6c5448a5253b814067b03ef5cbbd"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "31fea902205e66230bcd64a598a83f91"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3e7d1dd863d48e02db9b94888ad53caf"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "814636b68685785e9cf117870eed1a66"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0aaa8ffe76f88d5dbe931d7466d73ccf"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1a870fcbf3dd078f1a6a21ebf86a92aa"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "7c339592b9b7e20548bd302a50f31ab6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "945e00e462c4427328faaced1b47c061"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "7efea7c2236058de931d80bb256032c2"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "87accd62db424bb060ceca41f4451531"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "fa3b036ac6b0328e685ba391a0c540d5"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7d65cbf9ab0aab8ba32c87db8ee6ecee"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "26cbbe71867245bfebcd64b01758d5a6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "dcad6ccab6dae603a20fc676ef9e0f2c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "4918c06be4d007bdee05ed3a49accab2"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ea7d359209d00215c4c12dc99097cb9f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "163fb451f5001e39c82ea76017e21a68"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "cbff09ed4e3f4cae4ab37908a66b1483"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "1f8fc26b61423d8d100b0ef552b23511"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "7146788dde371adbe8c92799c2acea67"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "62b497c8a97616bb2f1523320f9a15e0"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "b9e361aa24b2c67dd57b07d834689f10"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5d1fe546a3fdd2e45141c904f2db6c6b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3209255418e8c655a2c003961f13c5c6"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "3a1c86c5b27a4d1e9ae687a43d2fd7ef"
  },
  {
    "url": "tag/git/index.html",
    "revision": "295652ed07f33f52537463cabddce0ab"
  },
  {
    "url": "tag/github/index.html",
    "revision": "59383b818f5f0c77d47ed662e453dd5f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "dff3716d81993ee22ae339f65851b557"
  },
  {
    "url": "tag/html/index.html",
    "revision": "831784c41eba2d089ce2e6117fa731b0"
  },
  {
    "url": "tag/index.html",
    "revision": "e177c35a3656356820dd4b4f51cc868a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "c19b5b59832458489bd40a58691caacd"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "390373585577dd546a6482771afe6ad6"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "ec9dca254968524eadc84954147db16f"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "fd822bc53162c28cafd05bd27b884ff5"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "6fa1f5dfd938a2aff1dc6319e8241149"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "5346d486b3bc6cc49412c35798bc2c9b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "748114ed836fbadb324b8d3e2f6cd490"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c1174d094a3a165c308aff5d23bf048a"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "8bf5167cb38362c1d9050866d75778bf"
  },
  {
    "url": "tag/json/index.html",
    "revision": "293524b0f40e09debe724898f1082b81"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "4e497756429937c1a958d8b1abb07545"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "682404bc949797ce08a7a45ca1126112"
  },
  {
    "url": "tag/python/index.html",
    "revision": "04668b9f40e14001ad397f912684e17b"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d3efdf009f9464b0e9a2de20ae23aa8a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4608395134fc427c1caed6a753cbdd3d"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "0aa08778311a7a7d8f0bb4ee4c409757"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "fc92d49fc0e2e3f955dca45181723385"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "5eef335e321f0821f558a228ac900352"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "44bf8f2ced65370d18778de1e20819e2"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "618ce5d310b314dcac848f7e2e5d09f8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d195adc99c8021f0846da2cd91ff0506"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7d65ae8f9e4b41af8527a162bac72275"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3a09655fcc32e3be99e2fe6476f68708"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "723ff5c6afdef585d8f994c9dbecf2fe"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "c6f2cf19585f2bb5da88bc89eaa7a672"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "089559e8cb781fe8059aa6a839fe5c46"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "56c89d9fac2bc39146ebe2029170c802"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f90682ce0f6fdb0f83dfa5e6be477581"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "bc646d30634be6dae8c3170774ea6e43"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "1d2ea9bba417ca0549396c777a3db54f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1ac6841e791a539989a923f68f5e93db"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "918f439a87d3c64fadc69285d7587001"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "bd62a421cfe0e5df99fa5c2af999f193"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "7bd1f09c9f5f710f9218f1904f2c6b9d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "00b62b66d5a2ffc7372afeac5af77db6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "8ac85f3e7d0e06a96155bdd52a69f1ad"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "9a8a435fdd1f495e83c00a72dd3ef95f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "69f03d904f95eed0aca634b558f72cc9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "272f4ef8306d0c18561fd8aae51063a5"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a42b122c7d3533005e293c948a7f942e"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cf4897a6a9e16e20d454d542da1238a3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6879e465665f882053fb92f97c00ea37"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b3915b3370651d8afb61dea62828ab3c"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "09b1219e11e6832d6fb7332d88fbeca8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "500b56ddc6fb683cd70b00c7d8ba0667"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2505caf13e6a07b5c5f06a8fe4c29e32"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a2b8f25c34c45fa9bdd245ac1deeb612"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "024f9a05518f90060064a5c1304e58ad"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "bcd9bda2e321ad7ab6f8f0333e89c365"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "51615d3ec4521fc642718a4f2312fc33"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b422b4bdd402c310f9b6161bf366e1f4"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3364c8250d049566430a00c9838ae786"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "784cd719e057c83eb8cba60a64dd3dcf"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "7655113423958e07040e16be29f7c532"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e499e86f0affdcbe80634e91d9764212"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c229812059c2f3e2d3b08ea1d1b512a4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "dba8d3c6481d8d195a9ae4d745cc370e"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "4e6261730900862ff815bdc8c37cd0a9"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "37a44e5e932dcb935d570014fc4151d0"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "03eb4affd702e727e0da7644fd39c06a"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1e2967e37bc32789215b40da4037e60e"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b7936618ea9820abe434ab4b69eb389"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "9de1c2bc3a761ccd366ed47a679cdf18"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "342975905b13e0b4015e9dee5d20d6cd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cfcd0684a2f427773850cfaece5688bb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4161c6a0f7648e739d6f08638a56962c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "166fb0febd0c08f2d2f873e88a4acf7d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "601a1116f3991dd78e39a0bc59f86790"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f5f0128aadd7a6f6ac87e1984bccf6cc"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a5bdae3dba75288964e4bc8c8505b95f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "83f281f3d89e8d6a966846d43d682cb1"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "a84db6f20b1a900f2d72f2c5658f1ff8"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b407d8f20ad21654c81a6fa200d4b75e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b9b4768e62194b0f995a5468b7bb1fa5"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "45594e63fdfc6208ae444784b0d7852f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "fd82900e9e1995582bf0b91e774b5053"
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
