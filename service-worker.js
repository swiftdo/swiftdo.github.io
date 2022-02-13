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
    "revision": "e856368c29554aefeff7481ab1611fc6"
  },
  {
    "url": "about/app/index.html",
    "revision": "7c1f6169cfac04adc8faf37eea499136"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0b8cbc4344997ccea561013c5f1def09"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "de6fc10ef0d8f8ad54cc06ffd15f9eb3"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "a1c54148c2a8147ae403e58af8455dc6"
  },
  {
    "url": "about/index/index.html",
    "revision": "fd8adc6a52050603c0cb07172df71b81"
  },
  {
    "url": "ai/index.html",
    "revision": "1439e35add3bc5d9bf44594f73fa3b39"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f073a4ea8f45dfb4662fe548c5420684"
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
    "url": "assets/js/116.27472308.js",
    "revision": "9adcff5a48b61dec7c3af702f00f2ce9"
  },
  {
    "url": "assets/js/117.56aefec5.js",
    "revision": "58dab3d2042123eb917749399d295959"
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
    "url": "assets/js/120.50c1dbae.js",
    "revision": "2598c8329ca7dd370e69f64ab3ab869a"
  },
  {
    "url": "assets/js/121.28cf8f99.js",
    "revision": "87b482ad3fc42faf680b7d8843c210c3"
  },
  {
    "url": "assets/js/122.af5b6d10.js",
    "revision": "68854ee01467eaa55b8c06f29e0b46f3"
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
    "url": "assets/js/130.beab1393.js",
    "revision": "9f809cd95ee91a2a9bd698e2655529fb"
  },
  {
    "url": "assets/js/131.6c88c2fb.js",
    "revision": "da117ba9de7155b7659d7cf9a31bc2d9"
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
    "url": "assets/js/146.31b2d682.js",
    "revision": "c53a6ea4a607a63e64d8e9e086fb9331"
  },
  {
    "url": "assets/js/147.4b2cf69c.js",
    "revision": "408248d47ce9697a7e8daa177dd24eaa"
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
    "url": "assets/js/171.497b7e61.js",
    "revision": "af0c1b978a3548cad8151cbfb901b121"
  },
  {
    "url": "assets/js/172.d5aee578.js",
    "revision": "d318b2cfe33410bc3efdd26912b6a907"
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
    "url": "assets/js/186.28d4c66b.js",
    "revision": "4eb4879dd42cc747b08e3e4f12590a49"
  },
  {
    "url": "assets/js/187.61325bad.js",
    "revision": "84436e39e8e67c5123da136815d93f7d"
  },
  {
    "url": "assets/js/188.fdcfc47e.js",
    "revision": "75f61e25407b51b8c30d8415b4c73467"
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
    "url": "assets/js/196.4a5f13ee.js",
    "revision": "514be64ba0c58358132b17dff39815bd"
  },
  {
    "url": "assets/js/197.b253157f.js",
    "revision": "5ae973c7fb16ca0e778f4dd23def1f2f"
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
    "url": "assets/js/202.5a7f6048.js",
    "revision": "d3740367a7d7dfb083d00cbee01fc51b"
  },
  {
    "url": "assets/js/203.8071ad16.js",
    "revision": "69632ad0fd7c0a7560599c04ebb20f92"
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
    "url": "assets/js/206.826704d3.js",
    "revision": "bfefb6bef80ebe9ed461a3c9a3c86d66"
  },
  {
    "url": "assets/js/207.9b81e0c1.js",
    "revision": "01e22d0ba8dc3151e5a55cfa61537fb8"
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
    "url": "assets/js/218.a6b86a41.js",
    "revision": "529713eaa41386b71eb2ed8c5cb0a11d"
  },
  {
    "url": "assets/js/219.fc73a14c.js",
    "revision": "457cc87f9a0e09a00dd1fd001e456b53"
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
    "url": "assets/js/229.9e643b6a.js",
    "revision": "f32a115d309a9bd596b2075b5e2369eb"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.3f468982.js",
    "revision": "c097e7ff7b62b827eb0f47a748c72d52"
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
    "url": "assets/js/54.764c2bac.js",
    "revision": "6d60f1ae90bd1b8ad0c178920eaf8b83"
  },
  {
    "url": "assets/js/55.0704782e.js",
    "revision": "d45b153847d0b4d0b907c2af8ec3497d"
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
    "url": "assets/js/83.2ee44f16.js",
    "revision": "5491bc40d5b57c74f02d36cf59d6eee2"
  },
  {
    "url": "assets/js/84.7862a372.js",
    "revision": "6d3a3a3f2adf93ff3fa3b5de6dc52820"
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
    "url": "assets/js/app.92b512b5.js",
    "revision": "8024900515aeae1b68957b02e5247c9f"
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
    "revision": "13601e2779e74b73f19da17666dfa752"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "fa7c010dfab167b5beb8580ca1633be8"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c798346ad30bc90c1857b251bee7ac4e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8af429f0222c769a042a06a3e69f9fcb"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "00dd18b971cb511812f8c9d925bb306b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3fe06847aeab379ae644d4bc1e97f3ed"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e0e0b85fda556fccf6e49e7827c37702"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7ed61880340be25790ca0ba1adb0aae8"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9c88fad3e89803cc1c8163b2df6bba21"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "40f0059a22693d63540dddd3d2c209e2"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "352f1852de1c7305b061d1626639ab2a"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "a8ff55cc36763559c42d1f900a491ed0"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "ee80a20f5fc399128a40e3c30a14806a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d3bd885f5b1a3004b7aee91388739efe"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "2ec8ebb02647b1357ee55f497339b8b4"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "9df4aa38d33476f4cdb45ecb2ae6b4e5"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "1598e1e3b1f04ab8554924fba5483df9"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b0d8b387d15104beb0dc35e523008a67"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "a48fbb495ac8efd29218652084bd6530"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "8604c37037425a7803b8e5321ea26094"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "55c92771b35f31efecf1388fbae9beb6"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "55f19443a48e58e6493f533ae76d17d3"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "a39954ede17c54ff2a67e6f27dde3196"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "8741ccaa0f0453bc2dec0c355e85a3d6"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "6c8dbca1ec73590c1300a5d9c9808126"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "d0c6f2b3620f2c1cd9fc5023882c18fa"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "db3c53e8febb5008fc06b5f31adcde98"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "533219f682f700fa77a7cfd9f5cd71f4"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "19956af9b598c99807e4f24c1df7be69"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e656af1d3cfa456aa549cfb8a8a770dd"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "81103d3de78a7fe9542a1d48f0985194"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "10cfea87d7951f3e2a3b2e2ee730892e"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a68d5d9920c25c4477e32f16af4d71b2"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ab6293b286cb6396d104d797203a13ba"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "4e5b5b289783be053a04d8f4fe0304c5"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "97821fa6020a8918f78238063a035a3a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "be215a6a090adf5dc145c7c74878e2c0"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "a37b1cbc3e80966873e9aa0434bd3d99"
  },
  {
    "url": "basis/index/index.html",
    "revision": "df2c3a16b8fe576b13d2a2492bdf4e78"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8ff4c88ae3f6108825b7b9b886447446"
  },
  {
    "url": "book/index.html",
    "revision": "b4ea99f2ef3236c886abd9081028b1d0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d0e1dd34af9e13bb7f0b7f8e148adbb3"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "af16706da286c05f2b39f45338246531"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "422aedb4e78293888a1d465370a6d4b9"
  },
  {
    "url": "c/audio/index.html",
    "revision": "dbdc78ffb42fa5af835e7974e82be350"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "a5aec397252daf59b315167ffadb2ac7"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "ceb25f803f3ea8ae9689e07a008af15e"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "0620044c4569033f396360ef84eb8ed6"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "dc86d51ff5e5544341a9d8f3894e00e2"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "2f311accae73c7806f15bc983f604d09"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "e0269e9c2de265d4fc07c96591c02ca8"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "89a7e8c9117f9fddf229a3183fdcdfed"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "255921909b6475f05392e12af87103e0"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "27d67aee059f3643481db0cdaade1a4e"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "0fe5d2f7c9c2f362e67d14b562275ee1"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "8569afe544219c37c9118c2a13d94b7a"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "6c4ee74487bb8ad0616d7ba2c839259c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "020c31559d38c942e4dea3775e0094fb"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "1f7334a419574bfe38365f00ecf02695"
  },
  {
    "url": "c/program/index.html",
    "revision": "6ac88c6543368d7ad1e069f645471152"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "9dd495e28d2aaf10bada0b3b297be049"
  },
  {
    "url": "categories/index.html",
    "revision": "28635d74e2c9e88913dde73f008d012d"
  },
  {
    "url": "figma/index.html",
    "revision": "17d815d4f670efedfb43765df67fa976"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "2261a46f5a30d10ba794e01897a63bca"
  },
  {
    "url": "flutter/index.html",
    "revision": "4906bfc5b5d6bfc8451f56803fff8f81"
  },
  {
    "url": "flutter/point.html",
    "revision": "896e41d0f7baf923f2e2605e218c2076"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4217504c417f53d891cfd48887eb5f94"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8e4b82a24977e6ec5c015e9f900939fd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "2312022a3549c1df8837db13f13a7fce"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "674c626a1b27c46e6debbc493aa4cc3e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e3aea2bbc5de98a0049a27bd23241682"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "f88b757e00b1c6d54e585569f9ded58c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3305a1bb9cd9428c4c1f434c9f842808"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "2926c0ab8252a8e6af4657fd10c635da"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "45ce47665589d50867dab8145e095a75"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "2161bdf3cae61a8540f7b3bc237bb9bc"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "87e3f43caf7da1b3747f713883c538cf"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "4a1cf9f8d5b21de36e1f1e0309d79c5d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "dafac3f22595de0363ac7dd964d95b7c"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "8e6522b4c904cf7252407fbc1219e3fa"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "3a128f6a1cfcf6a995656660f9232b32"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "56009fe58b37a598a4b692c979d222db"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "494d37407d3b112b06f0ba45293a0c2a"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7e90e02fe52b4ffb7f9c3308423fbf8f"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "6ad3cb913f1f4413ec3bfb24c604b244"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "447338e2b7ea899caa17ab50ec3d9d48"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b9b6c37066868ab152235df0e6c693a9"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "444ef883b46ab947bb49574328b31398"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "2dfe18358d1d1bb355c69590138b4e21"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "9a74ced53cf0ba8b5fd8039086fa0b4a"
  },
  {
    "url": "haskell/index.html",
    "revision": "fd85c7f1a613484f26d6f3fa4b1afd49"
  },
  {
    "url": "index.html",
    "revision": "641b23e82b49fccc7a11e97b5d543eab"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "5aad87002eb159a03fbc5daa31181aad"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "22356a78b64337fc7f75c62bd384ae2d"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "dd0441ca702764ba443cfbfcadd0173e"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "258ae0d85af948106730fc32e6cc7286"
  },
  {
    "url": "python/index.html",
    "revision": "58ecd0a9ff6d4bf4264e3b30a2a6a1e7"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "81e42ab3707b9a1bd6910e91d6667ab4"
  },
  {
    "url": "read/index.html",
    "revision": "b093df0787006cc7e88d5018ef776a57"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "35fa758e934a355ccb08876c2dc97224"
  },
  {
    "url": "swift/better/available.html",
    "revision": "26688404e1d28969fd82b28da40e49bf"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "ff771317c99069dc1baaa3c2d27ea47b"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "964b58180f66245ae84376ef9a10d90e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "da4192511196611dfd75d97daf92c86a"
  },
  {
    "url": "swift/better/di.html",
    "revision": "5e87c895c34ea0b5cf9c877667f2859a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "89b750ebd8fc5a89406ecd357fd9abf1"
  },
  {
    "url": "swift/better/last.html",
    "revision": "1b0a6ff4b05bd2a0f9bebe24a55c66c4"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "6c2da8447de9df35bd1f371c8f642cb1"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b67e190b09acfc5c74598b828695a00b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "b643a37d66848264204af4a6a58e7bbd"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0e4980653d0fa843c93d683d95861ab9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e94ef4fb205a73a189579847a67e3f03"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ab0390dd38f9af26f4bee0529a0c56a9"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8f9fad27aa99fbc3b12503f13ce75e13"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2051cd4fef0c16ff9320af08574c8e31"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "7e19e3e25c62b2c160bf3f5938f8774f"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "76a501ecc4c60d8c9a0f81c51c2419b6"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "7d6ce90daa0561b4cd2e41021fe86303"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "2c96ac5ba6c17cd729c97168fe102a84"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9f74eae4d5c11243406314e850f5be0d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "83851073a285aff07865d2e7dc4bcbd5"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8fac2ca725f6343f7301755ce5d7dc73"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "4b59d259ac48cd27af558433eb1d6207"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "207f2c8be5940921dc5e9e42caadf823"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0b762a835ce34ff37c6b716f02524a20"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ecdad6ff7b305ca70aceab1609e9310a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "82a40bc81bcf7577f5fffd27c439ee07"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b058818d0b46a9bf09456f76e4e97bcf"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "cc15b546a5ea23f934797d2fee25ac43"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "15e169824d8ea2131fc260bc6530d44d"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "9b8ee24cc7f9290361f2599dd42693b5"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "eecdfe43dc6f8f5e8310932f9f1919e6"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "7aa528309fed87dcfbfd8cea0cdd483b"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4fc06dfdab50cbddade310c9b0e9e7ff"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "6cad8a4ea83b533318d279d25075759a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "10b668034575e5299643b2007e6540bb"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "b17c936f81040a4a8ed78d76693c6e89"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6173bb0a9d10134ccde329aa4650eecf"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f697ab75b3522857468cd1af65e2204a"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "33e601ea67781ec9690aaa4343fa7ca1"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "22c1fb6abfd65236fe22c306eac7eae7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "7654a4cedbb01d03fae6941931987acc"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c84ca0e19e899afac361b8cabb7b8f00"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "faf472a0ec22a82be77779a1eaa7d023"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "8a9edfd717299bdf317d0cf53a63f63b"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "373b896edafd031bb6d82506c5956968"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4da5928f889456e4ce1a73877cded868"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a91e366cebfead3e4c3390bf7d545b1c"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "16312bd271154737853f9ad3a6d263ef"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "bda87e0514af4d5131fe81e1c1deda1a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "6dbb708c821ee62849d2bd2fac25e42f"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "0218e64c83200c39775a92a54daa298c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "8e50f59986c0f5fb4b1dc4dc9fbca972"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b9de16f9eebb448b6a58208178345632"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7936c473478d7adacdb0fd24d502bd95"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "564be089fab624ec69203b6365e8814b"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "7f4ca69617ca6636126a97954da23344"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "58408d5507aa16b8caa64dec19d33c1a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "6855cabf4841dab9255d034278fd6bce"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ba814c1e4d66f48797922bbb70000abc"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "245f6e2927321474f7ea781aca964299"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e21b313841f548d47b702456703f2d74"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a329c475388830cf6807a3b3133903a9"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "6e684df50b560cc72c02d2bb8fa70df1"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "79d9f58bb00462aec0585d04c288d6d3"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "f61087ed938fc6c846be3416a486780e"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "07f2f4b831fc63a9c8d90fba3de8bf31"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "ed052ab4723907480d70361351feb1b1"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "3f854987d02f81692de4582712452097"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "fa1d5aca294a4c45f4541c075ae34d8f"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "df3a09105519002f6137d569ee852d69"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "04f0df031062b9aa96af1ed9bfcf703c"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "980d8985979e006af5a7da1510f33585"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b8b10060c0a3bd05a4a1ea5402865d50"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "3a81af075f3f200c13beae5db5a86896"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "a7c5954beec89d8dadfc40948ddbcb5c"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "99717eb0b9020fbfe5897b8af69ca4a2"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "055beda756abc05cccae0bd502491482"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "698f4927c945882ddc70815baba052d0"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "01808903ffb4ec9ecdfb1ac4b2b84cc5"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "0f6ed7d0dfd8b4136901e4db2bf50937"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "5e06846fccc49de78e8669c4c27eb418"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "90aaca5fd02d47725f00d9b44cc965d4"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f8e13fe4343d015b37a3a0c06742911e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "3c6035530159b15ed5bf79c737266df3"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "b9a13b663efbe7fc9faf11a65da7b49b"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "df0ec855b513cd0c325ce5b0002bd376"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e28777aff923afadaf0464a8bdca1c32"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "d3aa0f098c172962b5edc203d0090823"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "aae03656fd4cf7b7e1c301bbfa68f282"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "84d39d84e052264c4f4817c5a7a0e3c1"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b94aa6437ff9db5614ad209441d3926b"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "4c50d1d933f8ddff567fe6aa6da85669"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "cc20c7f652a2744a5c9abba5859dcf8d"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "538ae7f48c3676ef469e71b6fd6eed4c"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "f2bcc70e9a440e06cae2b3ec410a1351"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "feb477947cb2357ff04a7ad4f8bd4f60"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4f303881a0fcb66747fa4c324b31bdf3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "526fdadeac376d518422d3372ba5a346"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "32739534586fbd65e456d75822c8fb16"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7f02c591a101533a9a825dd04a6df5fb"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "701c67e71867dd94d01913de13293bcb"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a82f67c589e3dd2985a800df039804f6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "dc6de7cba780fad9f20069bc0210b15c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ed34b083962c71dd81e2f9db0c1b2fa4"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "1fa898bdb9d847d03c97fc6bc5ef3ab1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "5a7358f875646b8dcb48b2e167763940"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "630db4c599a002af78f374a7391b0056"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "3131a17171ca141f9c963e5a6f309c82"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7dd9d0cc228e585854672a0f59bd7554"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2af40a96ed4f1e8368fc1bcbc392ed5b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "45fde08b55fb42371eb583874e6028b6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c5cfd55ee962b4a07b24a4ff01bbd64d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "efd51bafee58782911a8204c70d28d1c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "f5cf530920a4041f308f52f6b4e7846b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "6d1f65d2a18951114210885ccf15e11c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "cd02ed2cec398c8f6db2aebf8776cfe8"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "0afe6a516c57637f3e179e3d7e08310a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ae892dff7e2a2453f86cea80084467ec"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "96827abc97c156e3e2faa62986795767"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9894915492493fbe44930eef5c8d3970"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a76a4e9e64404f9cdce8f606242b8e98"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0492529852ecd350bfe0376227206928"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e32591fb4f6a865248d4489c0188ac32"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d79bf000f59be96bd0fda1008ec62e06"
  },
  {
    "url": "tag/index.html",
    "revision": "8f8b2a7d15b2f8ee74963d1c77c61ab8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "1110fc7526b23f2830dc4106b88f4083"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f7cfc2d24a30076fff2af9f708cd9d98"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "856898d65222b7af38764cb35f5bbf61"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "8d4edef47fd7c7fee8fddcd04b3a0114"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "c4b4e68e7ce2e68105cb5a58ed7edabc"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "76933c57d0a52e0156cbc8e58ee00113"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "6accc392dd54b48debf10ba51479fcd1"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "b8025362393114f926683f668d3c5a8f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "010393c10940243d954203f144449e02"
  },
  {
    "url": "tag/json/index.html",
    "revision": "2cbeeaa3609abffba00b8dda86c2e2ed"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "823a9b261262d7b404b7fc888d7c42d9"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f657dbf62efc0b96efbcde9e26e7aff9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "454729805638c8b5e927f42a8ad8829a"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f9772dd0eb90885d15697ff4b380ad80"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3ec49cdfc2d2262f715b9467a126e847"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "3a44298ab95c3383d0e3a7f077100a1a"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "3562f0bb4dc7b15cb8322f68f3275bbb"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "0b7da9e322b9013ec6ef7863045e1221"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "be63751929eeafbd6e3a7603c08d266c"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "430094e4345b76d70ce7c7482b4a801b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6846f059d0a3f5660629f58a5dd5f15c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "08b0c3c05c21d9fef6a1badb76367035"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "379805c8dd9695243242edd8851e4ae5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "a54767a74a11f617c9310d6f39f05661"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "29606cb7b62e838b7cef6b393545f33f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c13e712d83338f69822b40043fb21447"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a03b807c6c0789309baede0ae30b7cea"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "52dd740b2341df61a035df6b1af5ecfe"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "8b3720811296c4128da59dfe417bc396"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "54a68afc6691f8f26fc5b2657f4fe072"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "196033368a30d867d677d23141f90393"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7ebedea3e93491e54f0cdb4d42ba5980"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "97ddb0f5cb1eecf30a7e6f09a8ff6124"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "9352cc7d2aaa5645219e04ec5d48ee06"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "d4435fc9f48f25c6899068d11e1222db"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "915597f2970ba8f2dbe7f7fcd60f67cb"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "63a1abec665f7736c4b191108972c543"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "053b546d8ac90b8afb0e4e29bf1c0d7a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "202cb6e917ae1b71089925693e10795b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "ee8c2bfb35ed8a0335923786c4a4d575"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "f27ccda12624f69a7971b5d7a7431f71"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "a1b1d45090fdbe2fbfb7070048f57b87"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "869b4e71d70edeb0fac51585d2620797"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "1286eaca270fe53d89632371f35bbffe"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6b3ac2e06fd44b23cbec6ae64316bfec"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fab3e22dd2f707effd8e7f917a3cd3c8"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "0c61f62acaf703b0740b8b07a196c84d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "943ec3cfc871a1482f9046ed7e12e8db"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f300c48c8788a444dcfea3fd6199bf97"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ed8981ba8bd934cd0578c09d36b1dced"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "241a834d21a9d8195f7a628a5fc18b6f"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "ca4966ec2d510025a1cadfa3acc6e259"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "dcaa85d32a95700c8be835183a293b2c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c75592317a82047c51a435110c83760c"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "16a0ba3ab38a4f60b3eb41feb0d014f3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c961ed760af3039b9faf484748ec3bd8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "1e6d2951bcfc9be7c90459bc314dac29"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "9eafa8e729a72386da86b04250a41904"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0f8c0b4b037a7e49374481ae4396da99"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "0b1b5db0f6c4b2768cc6cb29eed72a0d"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "b9b7b7e0dc576df2f73787432e8e284e"
  },
  {
    "url": "timeline/index.html",
    "revision": "b23fd410108f0f3b48f4b51d1ab25ae5"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "3824ef82605a0ceeec14d503d6e6eadd"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "031cd022eabf292f9b31f0442ea89b52"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1a57bedfdf78710e2a5155810df4aaa5"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "505a556286bd6e2d5e976e8f206ea44c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "5f6d7aa95808ac9112c62355bb6e0655"
  },
  {
    "url": "tools/html/index.html",
    "revision": "52e3a1f2d515a6025fb57691fa16b599"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ecab26fe2d246f2fbaf60c92f3e9935e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "87cfb3a55325e1a7de66d7aa4b9bd0c1"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "8b0919a4f57b200b0703acfc1e3bc598"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "ff92e66b0642d784764a20982d262441"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3d570e6f73835e4a5922c13921542d01"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b27318964b0fad03c7514d2994814345"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f118d6761cf4e18aa6ccbf78a6a20c2d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "84cd22fc6c9ec2c9c2825a67a71643f3"
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
