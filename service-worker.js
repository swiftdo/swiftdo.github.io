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
    "revision": "7477f752ca6fe7d3ba78b7ff1d732698"
  },
  {
    "url": "about/app/index.html",
    "revision": "3072f3e2cf71a21f8c7faa2d2715cedd"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4aff43b4c5ff04d593dd348d35f65001"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "83ba206758d99ae220542eec7ec3285a"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f46baebfc8c8b1276a2fbd2ca3f34e2c"
  },
  {
    "url": "about/index/index.html",
    "revision": "4be304fd639aef4ea7f7e7b3b7bf9597"
  },
  {
    "url": "ai/index.html",
    "revision": "baef7fc2d6c47464aa1c392509b09e5b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "256ccb31e1f986171ef5c8aa12e045cf"
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
    "url": "assets/js/116.5b65322e.js",
    "revision": "887a28a1b3228362ee6a7ad025967c77"
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
    "url": "assets/js/121.c00d4529.js",
    "revision": "5f9db27dbfd5dd5e86fb5b12d74bd74f"
  },
  {
    "url": "assets/js/122.fbeb71c4.js",
    "revision": "fedf92d230e44df09df297370473eb2b"
  },
  {
    "url": "assets/js/123.ce15cdde.js",
    "revision": "10d7b81be14608cbaf632eb3610e3425"
  },
  {
    "url": "assets/js/124.5386e363.js",
    "revision": "e4e1b7cc22ba47d05245bbbfc8a97662"
  },
  {
    "url": "assets/js/125.b14f3777.js",
    "revision": "ad8e112bf1a2b67615afb8d60ba7c9e1"
  },
  {
    "url": "assets/js/126.fc86d21e.js",
    "revision": "3af6a1495a7169d8aae95eb0468f0252"
  },
  {
    "url": "assets/js/127.515f7a67.js",
    "revision": "5d43c3516b8ff6aa8c52baacfa1e9193"
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
    "url": "assets/js/18.538a3161.js",
    "revision": "ec8030db49b3b3d0814286eecc84b0ff"
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
    "url": "assets/js/19.56ccf8ff.js",
    "revision": "bc1a63e8e7ba4abc725c3effcf1afe6e"
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
    "url": "assets/js/200.31324020.js",
    "revision": "15a1a68facee4a501d26ea0a5d8805da"
  },
  {
    "url": "assets/js/201.00420a66.js",
    "revision": "1a2bad037e8461d404dfa1825b1a229c"
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
    "url": "assets/js/220.4daf1f71.js",
    "revision": "f6557636def68421c0e8cf58b7f3f67f"
  },
  {
    "url": "assets/js/221.70a39812.js",
    "revision": "d71ead64cedfebe47645499610c82e25"
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
    "url": "assets/js/83.69815cf4.js",
    "revision": "f3b501df98e6cdb7ee5a99566490d4a5"
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
    "url": "assets/js/app.f69ad44c.js",
    "revision": "be5e08dbe097de4a08f91e1a264bc843"
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
    "revision": "e1b419278375501ebf01c527858ec9c5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "47f2c67d3968226b0c1c2261ad718d13"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a228a42f8fb868525090a1c57e7ff442"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a84f4ff1ec6bbf73d7844026531d79e8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "936431e9f6b92e3b3df520ddb674f508"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a18715cd10c930758d00e49c5fbd6e78"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "72c82e49fa6a553d0b94ae218016b7c8"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b2f0f8a7a5c76b4e33023656e0d17b7a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "6cc9714b321d3b3e00b17bc831b5e740"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "5d0636d5ece05c4d1bda58b71cae03f4"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "fb8fb7b3fae4962d07caa5e7cf6ad880"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "1e79a861e9a272a18557630cb8d7ce92"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "da2d2e7d60986a0b31dae027466c0894"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d8de3823a51b91b0c47852a866b2ac15"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "fd35ca01d19871c733fa2a780213bd85"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c4c6daf04d9064dbfa71030a2aeb4f54"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "e932d6e1aec7bf92a45ee2bc733eb5bc"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "f8ee816326d3f9d50909684db19453bd"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "a4e76b2a9abb83176d543c727e67097c"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "2fd836be67c2f68d7510d899b1dd43df"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f968f58da873a93afe9542d3f4693ddd"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "ab9cb2d8c9a5df6a165e0b94d72809b3"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "a45bd4b8d436193e612fdc4b97828ec3"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "41193120afc1a8603766c41f6c6ea22a"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "523322ae22f341c13dbe0216282ca223"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "a7e445973e0bcfe02503cafce9c39933"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "a78e94900c5ae1f53dcfeea6ef438e03"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ff694a5d4faa90d751c62cc9e801b14f"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "ce982f551d36987e3b44efb076195b99"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "bd7a5fe3e8928c0ee6f7efe11ca6e2b7"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a15836590b0cf464974dc98e649c656a"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "c6de1c7aadc239bec8ccca80cdbbd1e4"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "08282b6266d4af4301d33a72e45139cd"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "7fd0b9b94f508fa06194a6e4ae3af1f2"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a0b198942679c99dc3e4308704c25d3a"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "846bc35b81e4f45950a36d1c2f4fa1d7"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "7819f4ba0807b91b759eccf5de3cd782"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "0e9f7dbfc6f80169cd8fcd0a4b592d9a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c05f46bc25061f430aeac54b29a71e2e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5ee340cc1a6d0607cb79f222c3c7463c"
  },
  {
    "url": "book/index.html",
    "revision": "6f493adb5962668978418997fab02bf4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "13e79ee7674c6e40ff199cd2c6b072c8"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "62747e0cd9f1f7bfa567463172fc5308"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "37d5ad230d52e10ef1cb29c2271f5556"
  },
  {
    "url": "c/audio/index.html",
    "revision": "2ac388d5ff1c24b6c9a8c387fbbb94c5"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "1bb5aaa9ae05554177964d39ba3b20a7"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "dc1da2586dff32918b733d287f977a8f"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "d4f6bf43fe6d14bfbae5b97a976e9047"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "3911b9c48a175900d233b7ae8e24f148"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a71c03e2a67dd824872bfb9a6cb14a6a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "9d7038aa80045c527f5195457f301734"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "acd628fb63ed895e558abcb8c8627f4d"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4ed8c85b4d406ec90fcadac67c7a6898"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "f99fdf9aaeacf4b5884ba807aa1743ff"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f9d62e8aac72c03d65eb903a44cafa97"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "7fc4a8a1f0745933fd92b5ff774847cf"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8680f85dc9d41079291d237abd477ec0"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "eb063e9bb9dff5be02c5acf283c9bbd8"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a48e146b5f8b758245c94ba865f64176"
  },
  {
    "url": "c/program/index.html",
    "revision": "0179c87b3cd89fd681a1092a73fd2626"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "400a6c19dbc57f4768ce764cb1893129"
  },
  {
    "url": "categories/index.html",
    "revision": "df6d4f6c175bf101568ca30a3321edb0"
  },
  {
    "url": "figma/index.html",
    "revision": "b0152cdc85e1c3b0563f76c5612bd7cb"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "6668561fee157a8be113564feab99651"
  },
  {
    "url": "flutter/index.html",
    "revision": "44c4699f60d9d31799b60bcc9b32c56a"
  },
  {
    "url": "flutter/point.html",
    "revision": "70164795a354f85a85eb6e635af99412"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "cfbf380ecd4bb47892411f9b103c5573"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0c905852640fa1dc176fa0be349daeb3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1fb7d1980bb758db2ca2b3c6eae6ee02"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4055aa57106aa4ccf83f30bba78f5132"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6f1c02eb5e4279e48bd67d5504b97f83"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e7f6ed18976cc8e7ec3eed4f0e31cbdb"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a362678d97821ebd578f125cc46d0d12"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "4a3ee4d44db49bad530820f9efbef8e4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "07c06444f1a95c4ede1f64bd2809e965"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "b6f49cb3825a54c3d5e2f5b1ff99e368"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7b427fd63aee726507ac124803bc4eb4"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c11029c5e2360cbf3c7704fc66c225c8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "562a758675a91d447489bba3a32328f4"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "7fb9e90af02372e56a8975fbdb26b205"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7658ed371a56990191969946bcf7d55c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "849d6b72b466d5e501d28212b7765ecc"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "156429b5518695d737e83efb3871320f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7ee1696fc3658fce28414a75f90c9384"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "1c4e17cfca5ba3998fb24107b325f59c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "dca6cafac8345f602022bbcb15b32922"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "239076e0e157cf92cb09416634f7add9"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "75744ae10842d63d5b9e57b3a23980eb"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "32042d3822c88e2c2f1bd07cd35a16b7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7f74c4ef93a430333608aaaf30f16a8f"
  },
  {
    "url": "haskell/index.html",
    "revision": "c2f5589667a47c546fa1ab93e18f75ac"
  },
  {
    "url": "index.html",
    "revision": "df28b239c08ccca6f89a5e43745a39da"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "90f8ad98bb7fdb1cfcf54fc947c2dc8b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "62c7be2ac8248c5b7efd9cc249b1abee"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "0f6a29a838f2f9572de17a94d224ca7c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "ee18c91677e08743565fa5b6a7feb089"
  },
  {
    "url": "python/index.html",
    "revision": "08f85268075f523ae9c8a667f12dd909"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "6d4b98c236b0597bfa74a3ba25de4734"
  },
  {
    "url": "read/index.html",
    "revision": "cb9e82cd78d6ac8d2be4b8b875ebb961"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "2ab4d3c90eaafa707dfb945d6739cd26"
  },
  {
    "url": "swift/better/available.html",
    "revision": "53b1fe4a3425fabe433e2c064af2fef4"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "df888ad9e51a02f2e38ef4d912a842eb"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "e4cf28ade43498ee10b19c6c37002bec"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "2d2af9675551c8bc8d6fff954c7a7685"
  },
  {
    "url": "swift/better/di.html",
    "revision": "740a33066cc1ffed22ec679145983b3a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "b6bca578bf4a00e87a1ced069b64c974"
  },
  {
    "url": "swift/better/last.html",
    "revision": "de08b4be0de0b496fefc1f10a129cbaf"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "5ffd9adad3f7e5502f7db088ac3d2c27"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "3ccfb9a33204aac34d3530cf5256f5d6"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "bd87ea2e4d162829ec2b1103fb13acd8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4083874ef99ebe8810b8cc88757e27af"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "294c0803f835b0a55d8a798716ed9445"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "357cd54f9bc40e5af0ba7226fb273813"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "81046a5240e0b0ecba9933d6b7ac288f"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "203c82e31de1e055b46a2104ccb1c93f"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "eb574063807dd6e21477426a4e63d2cb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b43461926ef09741adac00afe4b8fd35"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "36c14a56b8e788985d90daae4e02054e"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "706bd571c6cf2c50ab0db61e60d6232d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "86bfbc6a071a04e8f149a67045aa51a4"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "300804783c297da55035126182f207cf"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "6d8ec64af627289fd9d13c767f7ac302"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f1059a11e97428ee8f0ccdac91dbe0a5"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "29527ff98739e7f3da97ebc95f114a2b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "ceb4c24d6471f4377ba5820d50477018"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "7ed4d6793ba0b2392c9e6ccbd4121a6a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "461f31000fdb3fdd72f4760b47c64faf"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "8ce0722ed77299446e50fbdaa6aa2b53"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "77e55cfb4cb47a9376288c3a02219d18"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "3e908e7a6bf02f7986a85b5546ff5ffe"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "871e04ed9c80997dc58a86013d16c3e0"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "265a6f158b5a7fc690823f4fbe07c6ef"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "88841b6e36f38e2f8e614f3d34051d94"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "34936bd97629d2aca946f0b5f30a0277"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5eda25f1c77bd833b23cf3c0997c82df"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "be814b042f850794dbbe1154e3372625"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "7c4d462e39972ceafbfd0b951a4c6ad5"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "71836ceea5f6ec73beaf870b88d3ff7e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "55392b8ae25cff00ddd1aa05893cd148"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b6154606ca0ad8cf809ee23c259c88f0"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "5a4426930f7ca42928f03ce5f7b04f75"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "0ad52895dd12921bed207b9c0cc69474"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7b5931b1f82dccdd8b85897e2a452682"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "e45e7b7599dd8c188efdfecc7fb2f425"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "679b31d57002ac0bacc39be2207965f0"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "7a360bcfa5438738b420a32d0917f08a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4742ca7ce6cb335c5a659e9263d368f3"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "d91b271ee00827574d1f2539e977cb5b"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "0755f53430d755e1027bcd925821c61b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "c420a37d2bf22d9b0c35b2d8c440ff77"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "2d0a95f7f3eed5a76ab8176ff601974e"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "69c5b177832f3e64e9f42d573cc15084"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "dc6540cc1bc610d382caa7705f76e84e"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "25e40876d3b646499150f80015967461"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "47280a52e1c6e4ca47d9db7c2cac1494"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "5b7800426fdf7f6307a6febc9760006f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "21d1c82d9bdfb3a7a41d0acd5653aaa1"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "8e68c0591f90e4ab8eb528007892bd0a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "744ed618bed1cad2c63e00aa4f756d4c"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "8b30567d67b7452fb2540df9ed793668"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "60d9728869f229da8cae872767fff5b6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "7aa3a5a0e4dbe89fb06ea14138fdf556"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "65a26a5298b408e1f82ba4ade6ec90ea"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "89914342b6f4ba95a9622758ee6edc4d"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9826ed5eee30ccc6ce64346d93f8459c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "7eec2b287ed53167e88e546538a2f065"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "e245fa36165c76183842851b2cdc39ca"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c71a6698a332762a3b80feb44b9d10ea"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "541d9d59c3499e66ea20652eb69bef68"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0bb9bba3407f3ad4c32fd5f655eb325a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "81be037ed7281c7607d7b1b89640d9a7"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "1a732c94323e5bccc4217705019b078a"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c79866aa4c86c43bf7633cf32d48f056"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "5d483a711242df95eeae655d43159ce4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "240c3314e82bf5810a2dee4ef1ad5278"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "041baeafe1e91abd03a3a4db3e7407e1"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "1a77136bf799a2247d2da978b467b374"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "4469f8099f77ed569eb72702945d3d20"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "c9ec1d9d152dcc39ad0ac8055b977f17"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c5fd642eca69c491bc0e4dfa99dc1880"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "9fc76918353907303a0c1990f830bc6b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "9f75e85a1acaae7e84736726bbba6cf0"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "b328b521120c559825ddf1f7343def0c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "0e1e34e63329b3aaf56fec0102fd52c3"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "d20f70e3ccbf13cff89704591b234186"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "52a1f27515baaaa481d4ff54e66a25fd"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "717a54c6b4f21a29e5f27410b89d96c7"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "26b3afb4287e6c39f99612e410ec4103"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2606aabc6e098a0c4b5eab34452511d7"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b5ec133e76ea037da8068c047b597a4d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "10ce7a5925c415e2e10ed0d5f6fa8425"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b8f670ca988da1c4690381010ca9dbac"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "925ba2552eca4424594d3879976293e7"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "45ce1b2077068df1f667f8e8a54b3c5f"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "1c4a5bf135ae3e4c1a2d953053e6ea74"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "4c64e715f2913a07bf01efecb3fd8d1d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3001ec1464a3dfe342acb8a38859ef6a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "392a0f6d71971afe88babc0bc5f0a139"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f0b26de3c2e067b99cb8993806de8ec8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "469f05b5c0d6e3d77c3fbc2128d2ba9a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "124fc0601cf561872f13d2b344371ec3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b1896b52d009af2cdc5e2b28ee26bd33"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d4a1a04b3cfcd823cc2b41e5e4901246"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5f5b4bdbc025d160146567f5a7e3f18e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "81447e4e5309b5c563c82e65a722e32e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4eca4d160bb802de97c50162024ffe39"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "06e51d4e5d5ef44b166d97fafecc3925"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a9b5400af6756d84eeefa323cf1c644c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "75e99b1f23539521574d17d756a130f7"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "36f0ca352d9dc7c4b699df9b46c77ee9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "35caea0fd75b5fb100491edfea4763b4"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9eef032562c3942d9db471a9c54a0044"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "30aa270a184fc2ac3ea3223e28439d68"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "88ea3446fd09c71eda542c36a9fe7df3"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "e7cec1e6ed9d8e3c02d4e3e210ebc058"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "cacd5d978b461b72f2cafe37c9fa453c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "f04da8244795ec52e4d7d5b94597a6b9"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "68920e4d1cc6c30adfc2c4f3c0eb8801"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2380cde8a13526aac5673fa2396700a4"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d6c8855857e74fedcce37fd0e20a0d15"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "7cb56922126cca226d4fe976068040bd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ec2aa4b25fc12671a618f07052836714"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2aeadceaee3513430c19fb144b788c51"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "54994258c8d3d6ca87721d70f8408226"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c9e16bd7cc343ba592ba6389bdad9827"
  },
  {
    "url": "tag/index.html",
    "revision": "1f02847c66d1f1920e9ed0e1f4ad380b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "45486943f458d45497b785b0f2658285"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "1bee6593c77a270be7a977c3d279c584"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "21c676ac521cda73986cf433f7d28130"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "afe0c8c2e2c5f63eaf12b83e0965fd43"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "26ecb10df1db8e3ba4905938708204cb"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d992d01007fe3b5bce025d8f7b800f5e"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2d7500600d00114806e8d6fa38fd25f0"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "06a21a94c307148911fd307f4d8997ac"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "3127f6f617afd801d34d769753c1b6a7"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c8fbf0c02f07aa042e55f1414931f67f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "edd370102418be52a1c3ae7722290201"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "5387d26b76f3448bec8184b7692f45a1"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7185be3e55a1451aefb63a86350cdf31"
  },
  {
    "url": "tag/read/index.html",
    "revision": "8489a7ac567411fe349fd6b2b3fad1f0"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9775b2b34d29bab7bd92185a8759ed37"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "a3d336619c3d6409820f24d3e839ee41"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "328ab460990c5d5def33e911497353ce"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "95d256cbf795c2628a02bc5c072167bb"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "af5646f642f656c2b90ccfcef813fe74"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c8b7afab7e159d976286442e6cdbf8bf"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d6a1eaafb92c5627f99334aaddc9378d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "dff79eab8d57ab1c19e89dc9ac8c6cfe"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "463917bb4aa3af2b43f9d9d0c32cbceb"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "7ad160ef020867015baf2c0f488739c8"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "7e73e3ab67ed432407d2da9fd428d60b"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0e8e246c7557508a3872af672020fb59"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a55464842f9a4232444dac4aa8dddb85"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "6bdb606837b050dab311fa9e5076a0ce"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "1955e2d27407c56dbd0dc3c011acc4cb"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "37916a8d168df57c17cbf949c97e9b0a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d059a7949da844b4222d20e3e1628d69"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f06c659616a67528fa3465f297e12007"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a14800601580862b4082433460f27deb"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "66daf0461fcf2acd5c959ee67e380fec"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "c527bc9b77ca0e143075a5b7de9ee4e7"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "ebad6d6999e60845474ab1b8cded993b"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "4e4764da7b0c4a8bd59340c351f89ddb"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1e780f02413c5d1d7a112a98b620b015"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "809fafc068e558082f8c13a5df3c7221"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "e66b2db30a5f4174b85e509a136bee24"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6950d0df0365644fe52c02a5a1ffa731"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b22d5f0f2c8d07bb2d768eceefea9bd0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c30d8d533a0fa5954c3c9b1cfa2e8992"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "3578a55935abb50641a6f0f2027ad259"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "bb1eba38cc491a60ce5b1468ec290849"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d1c5b62dbf0c3d56a5b3e7025f09f651"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2582e7ecd347312b92702e374f812389"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "644dd3d580f5ae7c48d4c5925a0731a7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "dafa253ce74904b70db6b7f7e1b8f677"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bc809cd914e7a870c22805894e88659c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f76a63de9599eff19dde7cfaacd1ebb3"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "5e73bc5a18cf0b957e102a553a30b55e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "0b80ee43bca487dc999595b4e5ad0018"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "91c4e33a878a13f7589722eb9988bb70"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4f4e8140b468cd7f773315be3576b604"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "54d354ee3526eb74afa522554e83ddbb"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "dbceba9f0165aac1491d1abb74f5ffbc"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "a5381ee52b2614d205b66943c41bbff5"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "f7dc30287e2b1ff659607c1a29fa79b9"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "b821b8c89de25e74ec6b5b0ad1fa7050"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "8ae3d1811d34d152e157ece2dad2a741"
  },
  {
    "url": "timeline/index.html",
    "revision": "3631a91c8f0939e3a3060868f69b5640"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "2ba28081eb890d7c4e6f61940a95210b"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "e621b7c55c9f1ccbb73ab14886245a1a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9731850ecd62f9f70d4e21d9d1b6e7d7"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "839784bf02f35876dfb80bfefb43d261"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "93f96e1324ea2843e472b62d33aa10df"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1c3688c6b37ab1b6a0fed12d682608e0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "fe39a64c8bbb76f02f06dec675978874"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "679b0ca7c7fd78fd068917eb6a479e6a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ea66a4642242a68abbe995dad530b238"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "c2ac269739faeb0aec1307a01b9aad44"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e3e43355ffcef56651b6ff3e50abcd04"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1c44b39a32433ddc77409b32df5ab110"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f3eae27e79c10b94d034c1901f5fd3db"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ba54490408ef19a0bd89ef60132b6afd"
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
