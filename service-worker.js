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
    "revision": "a685e9134d0aa384ba0af049a9f8ac84"
  },
  {
    "url": "about/app/index.html",
    "revision": "cf25ab0d868be01807d9ef35ac5d2327"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3332ab86af28e096bc7ebca49d508829"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9584c4066a03aa857f30476f11828f4d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c2da87eeacc04f8d989c19b43941dbcb"
  },
  {
    "url": "about/index/index.html",
    "revision": "20466a5532b495daf26b0321ab9398a0"
  },
  {
    "url": "ai/index.html",
    "revision": "ec0fd6f4ca46c0fca4d52600781bc8dd"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a66a2575a812d08a87e75f72deaf48c8"
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
    "url": "assets/js/123.c08b1982.js",
    "revision": "5aff59126a3ee766110c4783c8495b02"
  },
  {
    "url": "assets/js/124.9c6ea1e5.js",
    "revision": "c130bd6cd0d0a0211f9963b1f2d24d7e"
  },
  {
    "url": "assets/js/125.f84678d1.js",
    "revision": "5156ae5c63fb282978dfca0053953249"
  },
  {
    "url": "assets/js/126.33c33de2.js",
    "revision": "7cbdec1285cc0db7d7d0feaedb73fca8"
  },
  {
    "url": "assets/js/127.df082656.js",
    "revision": "e1d01dd910964cd37c4cd6eac97246f0"
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
    "url": "assets/js/136.f32bedd8.js",
    "revision": "6b5f7a01057b39077c1381260dd2ff65"
  },
  {
    "url": "assets/js/137.5880c4b4.js",
    "revision": "98e9aae9609e8cb162000f49abae2791"
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
    "url": "assets/js/167.8bff58c0.js",
    "revision": "0aa8a8189dd8408731e68129361d40ee"
  },
  {
    "url": "assets/js/168.a7d283bf.js",
    "revision": "2af67d3094bb44e53593fb8cbe61e228"
  },
  {
    "url": "assets/js/169.9c8404e4.js",
    "revision": "f577acb7110091e61bb60b4235322c5b"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.b6274059.js",
    "revision": "a837f2e69cee38141769ba87c4862782"
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
    "url": "assets/js/189.ab60a0c6.js",
    "revision": "193ead05984ea3fd400bb2fbcb5e5cd6"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.fa5309a3.js",
    "revision": "81c363c399d97a313dffcdc0c6fe57e5"
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
    "url": "assets/js/27.77012ae9.js",
    "revision": "2a3a8cda5e85bb64845b4568b39bed87"
  },
  {
    "url": "assets/js/28.52f5da0a.js",
    "revision": "05318d60fc936a26b099c4667c3218ec"
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
    "url": "assets/js/app.2a76cc47.js",
    "revision": "d519f537cf9e684c47a9b0d06ff74216"
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
    "revision": "2d18cbf920981583a0d6169ffd15d541"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "34a265a0d5a9ca120fa782968bd17397"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "aa18683219f0c76cbadb9fb66fb06499"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "6029f32a85e23051140cf382d68ca4e4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "d3bbab0ee0061b58955313e2c6199154"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ffff4600d1c3afb3b946846b82f49fdb"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f39cc2887c665826a39e41d5aa4464b3"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "22b22fecab458ccdec1e1dd7d64b1682"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b849653ed765cc0f83f69de0bc59e422"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f2c69f3b1989a6227f57e4babaf58f84"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "deb5a44114d45d8567dbaafebd06729c"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "0d4a891696de97cb100c654101b14348"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5e0129afa2d7a8e268b02ce07388df5b"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "35413887aa4b8e9da5de873710cd1c09"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d64714278e891764362d7fe2ceaa01d4"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "9335275cd6ebe4b543be7bd8890b4e43"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "b727322b0e49da4705651200d20bafbb"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b29a8cbcad06e4123b75844b998439f7"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "a22afa811ac5d0dc1c3bc52e0bb6ad98"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "4ec353574438aceaa0b73ab5f65b6c62"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "ba4573a2cf9c90124c556fbfbde30053"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "ae459d12360f53e81dbc6b7125f124b7"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "c2d09cd824d57f620bcd2884e463c12c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "df2eb82fc0ef32a3d0b8dd201ab62f78"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "625dae37e93f9a3653c58dc5cd0b5e2c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "21b582d16f75192f21fe103fe10c5ab1"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "05ca7d6413794b4f53ac0303a72928ff"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "eda804cd9de22aaf88bc64f8000e9846"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "66b646fa8ec6e0a599c0e37f08021ada"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "0d8245aacb1d1f50973c58ac16267090"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "0af4695ebe4807e478d65e14aafe5801"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "f5b51f7b2df497539f16a4bd7dc25d76"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "b5151ea0d0eeb6ec00e81fd6da2221af"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "f1dbc8469be6446d7712ab0d62f736d8"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ae0b7e72cd3003107e4d2ff61d94aa6b"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "b020baa2d26721a41f83bbbfd8f98ec9"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "edaa4f63393b3ce7ce3cce2f22817af4"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "710a1c26c0c946516911b673166b7e06"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a7fea36905c43a67e37f7659d3e3ce28"
  },
  {
    "url": "basis/os/index.html",
    "revision": "18ec46f680c3ec339e2d35e2301852c1"
  },
  {
    "url": "book/index.html",
    "revision": "75e4d4b3eb51fe52a1f3d8f1768f2ea2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "377eb241570743ea50c1ec531092504e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "b071fcbbde4605765e8239029ed20a1a"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "02488b1cf04f9ed67873d1459c1f64d1"
  },
  {
    "url": "c/audio/index.html",
    "revision": "30cf5072fe6883bccb03ced413a652aa"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ff9d5f28382e7aabda4081267d0d179c"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "f08ab9caa6d561a161f65d1a8bd843f3"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "fd3d5f886917cd4f48fca6522f10a99a"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "8361461d84186bfaed74d1206846a068"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "82123fe8b813b1b17889630a94d94231"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "2c1d06cd800a65ad70932ea1b24a7b19"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "902b0cc2ff15483bc9ee6ccd3775cab8"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4ed58c614dc704604d1304a8cd5b5c65"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "519b84ebf84342d90e3f70f6587af135"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "17c0b66807022e2bdc94a594a56f8855"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "10c37fc016c543002c4e68b533a161ed"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "a59bf7240f73186a72890de3803a7073"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "6ed699daea5bc4441fd9531695f4428a"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ca77f639096af48cc70e5eeb62c95e20"
  },
  {
    "url": "c/program/index.html",
    "revision": "3fb385daf22960c083b4abf1d0c37e0e"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "9d9d431f0e0f915f7a186301bfa1d2ef"
  },
  {
    "url": "categories/index.html",
    "revision": "6fc66d9c66817529841e6a181b7a41a7"
  },
  {
    "url": "figma/index.html",
    "revision": "d80dc4fb4e92ba9047579fe205802de8"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "bb3d64d1ecb97da09ee509e88d804437"
  },
  {
    "url": "flutter/index.html",
    "revision": "1b99800a7b36d70b80aa1f3121e12b33"
  },
  {
    "url": "flutter/point.html",
    "revision": "1437ae2cd98101eb714d5400b054b95d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b12da0e6558b7c16e2fbcab650f52b78"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "f74b09f0a6d7716a3d6b98e119cf410f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "50e9eeb4e2b46cee18818729a25916c8"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "dfb7da75d4457a40de48530a081f276a"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "77ae8801e621b4b80b81fd9709a0348d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "61cb5b4ea9a7b73a9ab1c3db11e90a67"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1fe0a0a9c7b4b12d85ab4ebc6972c9a2"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "91cfff3edcae486f7f2919858b1af003"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f43835505a196d5af7a0a61ea97d7e42"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "123230aab893c6940a6a5efe40d53772"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c6073eefaa6b3507ce8c42882fb37eb1"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9cb23faebb4f7e5043c9f74e39724e32"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "bbe9615a4c6dd7f54a7cc7dedba7e3c4"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "48d77f429d45e6a208bac7fc3da101bd"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6e741733a2a6ed15c99400c32e7e343d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "178a525b0282c67eeb5b93ad6fe72b09"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "912c40087fb59991ac8b3e6bd7c61e3f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "bbd22028272ee1c720abef81e665a485"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ac6ce108a0ff5a457e0c123afe220a7e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "9b9766992b9916300ab2c842edc2f24d"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "de67c5ad4230079b2c10dded418872f5"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a3b51214abea64bfd3752fcc7ced1429"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b113f540d4a89609e9945b8f124419ed"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3de1cd378e715395dcbe53f6e7f73127"
  },
  {
    "url": "haskell/index.html",
    "revision": "b17b9547eda651be04ce40d37915d1b1"
  },
  {
    "url": "index.html",
    "revision": "51c60cbd89a1d675148796d9d7a903b0"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "9b370497d1714e89df466289f26d7a06"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "d62c6e3da5dc3f46fd0a97d3209a8f28"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "8f83357239a27b5bc26faa75d799467f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "86b1c83e892eed8677ab7f51a3927843"
  },
  {
    "url": "python/index.html",
    "revision": "b850fd2d86440d8708206d996b3b6bc4"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "3326b82a8ecb96c56eaca7e094aee4e0"
  },
  {
    "url": "read/index.html",
    "revision": "0c8313f3905b7164e10d1a549ebc9ab6"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "f40ea29d7be11412cf2483342b95c950"
  },
  {
    "url": "swift/better/available.html",
    "revision": "04bbcb799aa5376845011cb3a568ae57"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "c1338f0dde8baf4c1760dae04d068b9c"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "d3e76fee9c6334ac0cb77aa52733310f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3f2274e83e1e378bef8646b0cafae7fd"
  },
  {
    "url": "swift/better/di.html",
    "revision": "f05dec8556580132143a51b4fe326c00"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c8750d79b85968f0b46d1b0af911efe4"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e6a5bcfa329056c0033136d50f0c1bcf"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1e78ed2adc86a0f4addd0c64003be03d"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "2fa9a34753ffc9a2475a3eb549c3f9bc"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "75adaa865537f9a32f1e999e5e3ea762"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "d798052fc737af2a2b2576cc453958cc"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "722552d74debb1ee15de32cb3251f1f9"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "38066fbb5ba577546978e9cff0adf510"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "717121e05e5ef231a4432c1e14cafe83"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "64e16b4f154d01511c8495254d8e6a6b"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "7c973b5da9dabdf878fdef81a93e2dd8"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "56754a24cbbc842b5c0235c1ca33754a"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "7d0783129384f219220964c5e4bb0a97"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4c43b1196652495bb328bb8f5fe4b5ee"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "13377a88c2f06aea3edf8fe0fce3dbde"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "28b70f8abe0af23f760f8f23a291ff87"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ad2ee427b1d339d7df52ce41222ac1c0"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "2249948606a441b79140b9fe0b8ca9dd"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "db40f2eeb68d095f9c559bcfa0dddb27"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "7f5662cebfacf214b1ca5aee7375aedd"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "0665280e340bfdc26e8a4d2bce997263"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "c09a219f8ea5f915bda092d3b15146c2"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "8f092d73d13f720b5aad51da01028f5a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "1a0dc53cf332ebba94114f5166603a41"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "26287d58080bfd345204e7e28b72432a"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "17accc77baafd629cd6fd028e99a7a8f"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2e8add9a1f4c90ea9e6996bdbe973369"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "06321279bb5e6994cc5ecf183cc2e5f4"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "1515322a3969ea7c5028cc63d22f5968"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "a4b4ad010d4ceef13b1780ee59094b98"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b726e2614ba5d4f1096873437cd9f294"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "ec58a19c3247caf66760855388a6f84c"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "7b588aa7cccf8629f84b90265cbd6309"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "904f401e4a3e81fe8414b1ab74607bb3"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "6f959b06db582c8f46646bb9456c03a2"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "23cfec5b60c1c3d35e7ed24c4f40ae92"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "bb1d7804da0e813b7a33c774510ce844"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "3dada6e8cae63188c2d54450e22eb377"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "449b1feec039f727ed697e0a0c49f42b"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "bb925a45c86c2d3e764cf0564b50776f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "07e231d955b755f3cc393883f584cfa6"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "1cacc096bf75eba16c41a687f0bff77c"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "dc5ea4c57d327d120c272b3159cc0f36"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "87cbadab9d018b70f01eef68b15e0e24"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "ce96d945f07e6fc8b974d962aa823746"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b28f6ea796e92f54a250fe9044a78bee"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "4bd2248f5bb306cc7fb58e772518e20a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "3a1230c4badfa86b919768be4cd9ae0b"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "77f3afeb103b1be3e20a778f2a5a79bd"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8754f81dda110fb2212dc0b460604937"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "a8b9744d1e3d8098a598bde343aed242"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f0d12455a80546abf67585b88ed6d9a2"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "0e7012b2e6af6c67e13ff4df341b4684"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "1cdd3fcfa3795f5599300f62a725fe1e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d7a03ef3d5e41bca20f95e947f197386"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "0c745171896e99deaae4e57150a098d4"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "dd3ebcc97edf0f3dc8fdcfd5dae71311"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "75cbaf754bb2d8d3fab6c011d48ca8b4"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "720b4e9880be07e6e643f47af36a04b3"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "64f0df6d11d69368f99edbe607cc86df"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6b10f7faf043ccdb2e5d7e10d5654f30"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "b59e88edce917ba1aa50de484dd46614"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "0032a5f1d0e7e8032fde2bc728a3471f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b4200d96241fd571b49aae30229eff28"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "3aba5efe934d0b5fefeb5da96e04bd95"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "3ffe48bf7b0f88ac2ea9d2df7a95e2bd"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "f1c20614129c720082c02c3fdde01762"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "e8d48715ab8c0d1358e77b8c7043a246"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "92703e9e5e5596c328eed35b767284cf"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5dd6a8c5e25a80fa49237606c286fa4d"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "9c80b9ffdeead59552a8dbb589c4de90"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "356e07b2fc845459f881aa1995e1c855"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "b8957c1def312aaede4b253a9d42a66a"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f9802a75fc3974d527ebbd28e8a19fbd"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c39c866fb96d1301e552f69a85d0575a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "502ee34afdfe6935672b71fdbfc3aed8"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e89729030068f57461ea05336c19dcc1"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "b5da0e90d03f523afdcbcc5b573aeb37"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "4010148700ec7622d2ba50e26c546932"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "f9f6d77db98e9b2de39acb18918d6e89"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "42e61ccc0bf32443c5f478980d2ba82e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "88a97cca9d1178217314389863f83247"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "73891e656ce45dda36269ef6fed78663"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7349398b77fc3652cb5ed199b7488716"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "58b99b0811e554b2af150fa5f775549e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1672daeaa2059ac57f1151bbedb20a5a"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "35a3df70defc7e11e1830990bb873012"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "dded098266a4c625dad787a4a62a0d95"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c04c42cd7e5b4483ef14d4fd2988b01b"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "6ae4b7e18e1dd69ab9947f85cca68f52"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "fde2f078a49844494052a5d3bcabb478"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8257d677ea1759f4eb9b55eb90d83a17"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "13c574476b4e4fdd94befaddddc16403"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9dafd7f5595567ec691169155876b4b2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "89f35deeed1c38b0b63ca7ae46c8e56c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e1173feaecb39e7dff57f72ad0d6c9e2"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d30a210b9af7a4e84575bfc9d12f52fa"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "eb713f83966465cb2670ae2e9578db60"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "fa8eb66b4aaf9d05b319be072971f8cc"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ade31b32f13d11ef9e0316da3c515ba8"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "09430a18ec924a106469ce0c878e3315"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6eeea61a226a1243bf3d09af813f51e1"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "6d0a1fd557f60aab27eff796045433a9"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "a9eeb18541d9bef265f399f95387e63a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "41d796ce1db7bcda55388572997e648b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "e4e58fa90ee9756744c4d884bb06c985"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a2ea3747f3751f3c5943f9f078c3eb07"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "164abf44033995eb173bbb13d703f64e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "ed96f9a36156d1e70d635b437d50f764"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "a8c4db96e682a6aeba9bc2e3485499bc"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "6e9474a1aa7b7530ce084b7c2ffdef65"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4812fe8447fab2323c07d9e956fbcde3"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "c40158ff66f9b6da603c350777831b09"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2e9c098f6e53bc92c612d37050878568"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "aa74e809bc4595f7e31a91255f227c70"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "4020628cc9448f797e921e19d4e140df"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9d4997d9abad60bc709d026ab3809425"
  },
  {
    "url": "tag/github/index.html",
    "revision": "efd7a62bc8e42da593b2f3c069c62287"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f764fa94335feba0cee4edef6379d1fa"
  },
  {
    "url": "tag/html/index.html",
    "revision": "09ee3e131a2ac90347d537ce915590fe"
  },
  {
    "url": "tag/index.html",
    "revision": "f9fb4c2e6a61140395f36f9f78ea129e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "654798ba1da8240b424f6d8e3ef1960b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f65d9cc5b88f77c5d91698140cc234f7"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "6f74c39b70198159f9ecbfb6f75c6d99"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "7745f43da72d4cfd448988dfa7956600"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "933159fbfe1d27ded038bfc01bc33634"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b07711eba17630a40cc118c5a7846950"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "479b9a2154677d57b099425515377dd7"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "11de121450afd1ac254513eb593179f0"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7744776714d460bad1a45c3eb9926427"
  },
  {
    "url": "tag/json/index.html",
    "revision": "744d5b91a88fb69ce29d321c94b3250d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "4a5745bd2ee8dd9d245470e40470c053"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "36175266cfe1eee81c71b964eb710fd5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "62a783ea45f592402858aa39b1a49d44"
  },
  {
    "url": "tag/read/index.html",
    "revision": "6669029269ecc7448f376c742182e1db"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "edd49f99df3240bb00cfa1f03f10221e"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "c7a9cf5053b92aa7f45426552f3a635c"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "76b21cc87104a0244e4f45172e9e6745"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "930ccd9f0735b0954228be5ffba71eec"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a06b9415f9007b9704289eab2d81082b"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "077b94c42ab287191605119eca5da183"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f848f430701f4ce8bcd3d9cc30a1f025"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0c96554d49565280dd7a0a021693b500"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c67600831a36046518841b9d7c2f4501"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b9e13900ff6076dccbd0801d23b4a9b2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1d1dbbaeab88498a3b332d07109df4e8"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "72328a6956473f2ca0e52a4349680e9f"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "992df0662767107fbe0b196f1efa7758"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "89e223a6b883a96efee3ce148ac74ffc"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "7b608ab9997be1859d7cb6f4e3cb40de"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "92c55552e66c4cc8bc5af6af724776ef"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "7b906351e9555618affb88d9038fec75"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8ba075df37bd2f9bd95a52f4b5720d1a"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "51c138997fc6b5132ce74213e8222168"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "95bf21c6a22309ff27c412dbb2d797d4"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "a2f3665f181961146e0627b721eb6ff6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "368e3a676632991566d73648a2042e25"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "072aae4137be06a58f5a7385983362dc"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "faa4f969b2309eb5c5340394a973ae56"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "af2f6e5ceecaba5d6e4ae767ad889d32"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "66ee78c81fbafd281c93e1bfd6007bb5"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "7c713fd1ad93bc036de3dec104680560"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c8994bfb1498df35c01e327832fa83f9"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "586bb7cfb326c11864e6524ae9988319"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ff7d20124dd1772c564ebcbff3c66fe4"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "10a82662a6b67e47b15b28c9b1aadc47"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "573c4adc3f50dae77ccd78578140f02b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "709befd6470793c2cf688461fadd5f44"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "08fc64fe801398418a49fa852ced7aef"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "3e4d7993150ec4d1463aa7295ae4fa80"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f1c48deae3bd6a90934e90a6353d7957"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "322dded421a044c7f6f7d870cca17cfc"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "46c750dd4e2ed8d1b63dd40e0aa2ee90"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "6e11f78e3469c5e7e005e3e52a00827a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3110cea5f9aada6ce59d0f394b457e4e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "532aecec1ae8737e3f1eb365337fe0e6"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "5f17d446b6b0dd5e9de7c407c7bbc6a1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "42d68f823b5535c1b53ff03f79657f3d"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5dd6a46d4455464d40be446393d595ed"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "1b8985b11a1aea5eb19b2ecedf13af25"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "5a931a86e35f65dce60944f0e5d168b0"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "32feda61e0184ae5ec10d70e9a21cc76"
  },
  {
    "url": "timeline/index.html",
    "revision": "1619982d617cad00c1e9b95c95c4fe4c"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "e6226783fbcda325dba53ac53d3294c4"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "43d033db16228cd8a642972c0c6e7c1b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "15c7913cd2cd0827e1a380801a9df05e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fdcdc069ce6bd71ec417068e4ed63735"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8700dab57e20c8b8c785386edbfa4e65"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d22ef617d79366381da233d2f069a466"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "30d3eddd546dd6dbfc5270b6d3917e8d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e6d7988d409d6a75e08ff6bba4c7ed26"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "56bbdccd4e6a8560fa68abf19d310979"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "6e3a19aaaba28d1f465f8c3a55f15e70"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cc7940e88bdec00bb5f12484235a173c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a7f354b54ebd2f59e85fb426a9dbf786"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "c24f75f1906bb70088376168fdfa9cf3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "688a8245771095b3727826b7f7ce0710"
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
