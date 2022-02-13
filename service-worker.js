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
    "revision": "7fe52678fcf990dc814915d93261f800"
  },
  {
    "url": "about/app/index.html",
    "revision": "4ecaa07a8af05081c55099a588940d13"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6c6bffefa9885a894efdf7efefdcb6f9"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "553fae759db0e87248d84bb12825481a"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "bd3fd3b9fc16d3ff7ccf5dc7e8c52529"
  },
  {
    "url": "about/index/index.html",
    "revision": "843c7b2683faad01ed860d2ba4367fbf"
  },
  {
    "url": "ai/index.html",
    "revision": "9125bc6a6421d54b4fcaca3fcb03dea8"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f7b81de8a7bb5159cd3b6e24ce1c6bcb"
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
    "url": "assets/js/116.09cde8b3.js",
    "revision": "ff1219710a0d97f1c32f6b9097f30e65"
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
    "url": "assets/js/120.d524bf2e.js",
    "revision": "b136c37bf1a564ed0660f07d43d30670"
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
    "url": "assets/js/123.ec518799.js",
    "revision": "7d8c5a79bdb45d21eeb4a4d253c17fd2"
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
    "url": "assets/js/178.51ea62b2.js",
    "revision": "b9b5b371a5fdff495b077cb3341ebebe"
  },
  {
    "url": "assets/js/179.2eeb68de.js",
    "revision": "5b6d612bb9e6ae00d349d9e8a875efb3"
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
    "url": "assets/js/188.03ee8c47.js",
    "revision": "82f9b676f3bcd756c44f4e82db142895"
  },
  {
    "url": "assets/js/189.409623a2.js",
    "revision": "e63540ec11ba722ae171c94c3ba5c332"
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
    "url": "assets/js/192.f0e6bdff.js",
    "revision": "f5dbd746c684057eff329c77524a58c1"
  },
  {
    "url": "assets/js/193.1ee66183.js",
    "revision": "90603ac1a34c140878f3344b53f5dd29"
  },
  {
    "url": "assets/js/194.73da9055.js",
    "revision": "a296465fa54577b9f99387997855d278"
  },
  {
    "url": "assets/js/195.3a097a5f.js",
    "revision": "e5cce6c94d92367eee2332abf8548834"
  },
  {
    "url": "assets/js/196.0af2c525.js",
    "revision": "197cb9047e100d67b9cc32d0bfb3cb01"
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
    "url": "assets/js/223.224a5284.js",
    "revision": "7b27b55fa0926c9569a1c0435fc1f741"
  },
  {
    "url": "assets/js/224.5b395a7d.js",
    "revision": "332e73551b7939bca4656c39065b5a15"
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
    "url": "assets/js/228.a5e6fe5d.js",
    "revision": "df7f6db8c74489fb647d98f935898828"
  },
  {
    "url": "assets/js/229.80c778a4.js",
    "revision": "492422682d7ec29e235dca3fb6cdcc7c"
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
    "url": "assets/js/241.da308c82.js",
    "revision": "69994a1aa02046f080bf58e52d23fe9e"
  },
  {
    "url": "assets/js/242.efcc9884.js",
    "revision": "95e7fd4044523192ece9bc5e8029c6ec"
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
    "url": "assets/js/83.d67e87d1.js",
    "revision": "ae23891d3e857f3b817a3ade3c81a4c6"
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
    "url": "assets/js/app.97c82e2e.js",
    "revision": "f1b900e136914036e6a72ac5fe1e8d98"
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
    "revision": "a2559099ac2d5458f70a6f7ce1d8669f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ee742284a563e7ae94932aaad953f669"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "288f70cf7c9ecf20c813c29f0fac4901"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "66f40f5ad39fd576b5ef9cadf7706b5f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c0197912b31669117112875aa29dfa74"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "03b44e05b704176031c1db701626b9a6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e24a6cdfa795ccb7b6be9327f1b5919f"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4d80e43a0511a23dc033057bef8ec9d7"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "760e97f26d75c4ff7fed88b60113858c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "2d04975a63b6c908babd436c39b127b2"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "7c3c939f410029613d811f15a347a92e"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "5838158ca0c7e189d22f9fc2f220afa0"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "e05b814a485802ad81878c3b33948048"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "7b7a0ca3cc7d49480d38a335c75ea428"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "99d7296fc27aa844e58ae4c998da7375"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "32e48e1cdd7cc92c1d9eebf2c6ca8587"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "96b3165e70114ab140a133f9357b3a67"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "39277e0c3912e9db9b5ecdca9a4fdda9"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "4cfe2199fecaecb29348fbcf7a4f74bd"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "fe85c3b69328d855291afa01a5594601"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "7184e6edbb8f3d9f87c2b221dce58ed4"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "82be7a4b2aff27067af3702df98da7ce"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "05a662f720b7f27d77a17348b839ab45"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "61d33f82d2fd4ea426c26d96703c4d45"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ec2a9e96c203f0bfc1c9ce5c5992e3d1"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "df05aa3ea21345544ec28b0f1076df52"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "d31e2a0fce88ce3f8f9e3114c914f2be"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "fca20ccf13d2fed4aaf7d3cf1a956184"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "37bba661153f39d2b7f148e082b6678c"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "79fe81c2cd83ff90d8cb1e8ece5eb6b6"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "479426581288b49cbb35d4028b20cc47"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "12bc72de293ab092c6e962e2bf3532b4"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "88ebe5622c803a0915ea80bc63dd1746"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "7b86aac930202def16796db2cc2bfda8"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "02a65b19a6b795420db6d7853804d64b"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0590a7835b47355753f21ca8e90bf9f7"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "15166b17a2f67f197f277ba2f1654810"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "1a5e73911aa440f3876a4113dae3626a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "24a3fd41557237256dba6a2c629698a8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7160bb369140cf86486748f6f097c1bf"
  },
  {
    "url": "book/index.html",
    "revision": "9812fe7fad3de2c195d3abba510e15e4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "44e97fe73c25d51a4702858f4d678c06"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "d45c17a88d269e471330bbb988089a24"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c512cb2656ad86451e184fded2808888"
  },
  {
    "url": "c/audio/index.html",
    "revision": "21c38b4a5ad14dbaf29e340840142bd8"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "39fb84089b1c512376dbb8c18475363f"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "20db5b5b4ce1ebb577f26cfccee9358b"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "033d96858a717d1143ecd3983f097781"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "6441e608efba0c0623f9de9ec24a9672"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "24ef43a0dc1c3415ff3658e3a7cd1ac7"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "09cc32c22ba49b57242ac3c8c59c74b8"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "525bdbf0d7beec886971e7752a831448"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "fead65b3c75d4468b0648372f7876efc"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "37ac6896886071cc50a43c6cb3a75ab8"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b6e7ec5b9b5424842b45c3cff0264bc0"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "fcc6a0d76b20730579c9d0ddc09c9ab2"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "5c6aa27b4d305c4ed650b1532b23bb51"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "da5f7eb38b9c4ab4d3dee72d8776fdb5"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "6805c832bf087ecf2e8e43b8fbc7f11b"
  },
  {
    "url": "c/program/index.html",
    "revision": "6b4abee1f121d549690a035f637b3650"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b85739ce7471d8a7dfbe1b9dbf947207"
  },
  {
    "url": "categories/index.html",
    "revision": "478a68daf4c2c711fff11043bc4c1ce1"
  },
  {
    "url": "figma/index.html",
    "revision": "7c857147e9bbf8db90510ff38c9b8eaf"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "0913f606e6ddfdd2c99223b42b799df7"
  },
  {
    "url": "flutter/index.html",
    "revision": "2348789b605048a5b21c9fc7a55aefb7"
  },
  {
    "url": "flutter/point.html",
    "revision": "046eac1488c79ce627ea03d3c416b9dd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "52b5bccd26561099bce9aafa8e55b3cd"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "6dcab6cb5b1481edfc9365395d8e2506"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0783d1395846ce6298a6815e83c281ec"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d49f630460d1a111260c79dc0354c6e3"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8ef06b7ef24912d1e35ea59314fdcefd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "55423fe04152a9d348985657eaecc850"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "dfadb66c268fee3905ebeb8e6a3d63ea"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "04f71b326f9a0281ab68951f2154315f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "92233d23ba4efb4ec985c0b97b669920"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d7c6284d15d6db297c143fc74884d88d"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "81a307003033ed2c633c4a0142257ac8"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "374c5a5ebe5ddd5ca887e84e07957765"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fdad47c0126b393f6df41ffd64ef9b29"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "123660a146b88026e2c785855d273987"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "73f7b56091b5d73b8718acf2b139adfc"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "ac24fb09b2c1e8af7ef98e63b12e8782"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "3ceb876129fc41170f7569731871b609"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "164b9b9ba02d9d6b87b0e9068b38d2e6"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "06d07df58f3fd27d6123784a6e49222d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "6cc241363ed2d3effd40c4fa2d460fb8"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "76027263ebd0c9a13e225703fb0d4593"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "333abe23e9521166c60702ed9edcfbd4"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a4ed62d9d63b185c3ad3f3ad334428c0"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ade298e5dba14cea899b7b85ac1465fb"
  },
  {
    "url": "haskell/index.html",
    "revision": "b79995231ed987eff8f6392ed8a67c90"
  },
  {
    "url": "index.html",
    "revision": "df351d357e21522c2d58b88a0660135e"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "818db89d31b0e8895f88bf3d34bc468f"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ed44d7fede673c4f9b2cf5f03621a273"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "97a3cf3db0b9ee577c9919b72b7bab27"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e885121302f122f1003b8d26298e7335"
  },
  {
    "url": "python/index.html",
    "revision": "c28267b4a0a4d7545f8622a88c5940f9"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "0439db5f80a8c9b5153fd561669bb0cf"
  },
  {
    "url": "read/index.html",
    "revision": "3fe7fdb4796be8bd48905276f29a6716"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "85ac687f031af677f1a591d2b6749ceb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7088bc260a796cf8d8a8b8c646789ad3"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "6d280f512e6d546fa147388b57a242c8"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "e1279563b583e8a378c0bc18a7b7a7d7"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4d9e4924ce6e6e4c2d64adcd97733caf"
  },
  {
    "url": "swift/better/di.html",
    "revision": "7fc3258df2bd5ea992bc8905b4c4f476"
  },
  {
    "url": "swift/better/index.html",
    "revision": "e962d30c07948cb7f9d037eefdd8ff79"
  },
  {
    "url": "swift/better/last.html",
    "revision": "aac8eb4580d7126221fd8867e8beba87"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "20aca6d946ef391fe36fd7b584db9a0c"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "01e34653a049f263c3810dd5c8022007"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1d15285f2192a918d7da2ee9f482c0d6"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ffd77837b61ed49b801a9940b66804c6"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "99e042e168745c8ea88ea5c8da6db2ec"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "50a4e0a5ddb65456f9dd5de6f47805b6"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "fc153f5a47852c9f56deacb0cfc441d5"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "f9c5a9ee4722eed2b11a444034658b99"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "f5e4a18f6271172a2cdaa901b419da7e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a0f2d1969a9e655874c2884f436925a2"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "dca32a4183109cc3c2d7dae2b6f047a6"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "a5e471ea95bc00a6317757e474f4c420"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d8e84ade7758672eee82d5d717b9cf6a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "cf58ec15ced948fac16cab959f8fdb01"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8d9c8214bc62d46cd45462e8e36d3da6"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "7e974ade8193e3e4a34bade530612349"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "b7b3635df4826a69cdbe1aa33344b4d2"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b6656dfed5183d1a48c8454d2cdbd7ab"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "7fa67dc58f33ffa9d6e457c782c60ed1"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "d323d6e34f542d0d09ed6533e8bb4b71"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "bfbe9bd9b1a213f4078d3030245255da"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "734d1c1fce30abcf370923c728159458"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "1509b573ed85f098e3191610af8e2718"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d88c6812c283238eca59f232a30bb743"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c8bf77a42d9c1ba720f7f4296d3a647a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "4cdca58cf8129a9e0c44ef40e3a1077d"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "3830dac161e0df96ab33340b01cd6160"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "34136493b97dcc8e40de087b2f1eeb51"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b36ee4a46627f2d99d968c683bcb5379"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "181b8b493ac222759bb69af01778b9bd"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5887ee6b51d4a81c604ead01ac5a64a6"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c31a6b3b9117367475f8975c244c2d51"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "8220f9beebe24cf489ef7ba97db1e975"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "ec42755181f6018bcb5a8a195c94af8e"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "31829cd4e7d9b30244b8ed7c8d8c1cb1"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "de3c06577934b2c90388332b2e3f5c08"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "36f3a1bd7a76dc249a98eda9e815c688"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7d98c7b8113c506d437b69b85184238c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "acbc4b4f54934236b73151f91a0323ca"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "69fb7ab6cd0ff8f345492780587bacad"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "eef8e92b647f3c6d32a71fdb9115daee"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b8b00f6983a800a07ba694df45e2bf79"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "d7222d29c2beab617c2578315abedfea"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c9196ecf639addc5c403076d4af9f27b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "9e31c518f6bd0d4f2326a6062d79168c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "afa3d5bef3f36e7e0ebee8cf24348d84"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "c6e06f97b6e216f309aef067d932e0a9"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8f26824e57704829dee72c020379b31e"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "df17e89940093a63803a8312234a75ec"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "aeb68d4c98283294dbce780a3a6d8a5d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "272741bdf825a4b53b76c723a0cbee7d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f69f8c39a5988fc312ea3a7352d28be1"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f7f331d35e211f20f079d4c479001381"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "5c2a10973dd1483afd435f0afe3eb885"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "b0f9dbc01f552296c54920bded8b977e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "009520af84343b92772c89bae93e8675"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "080dde6eb8162e2db987a928b4d760ea"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "565570f6bce03a6cb1890d191fd4126c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a2b4cabc0db5124b781cc8180b17332b"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "5cd9395c4dbf821abafdde9e157a52aa"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "702db0370e7abc1740441196088e8547"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d204ce6b48f6b54cd5d6327645a10605"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "9bd5cf574a49a044f66f41b18168e4a5"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "49a1909c6fbcaa82d0198bf8f8edb99f"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3acb2c7015efb0c7311ac8414c56544d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "3329cf56a3eb9b5c1fb7eeb0b0a3c480"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "4f0f3f7b23cd6c45636265aa0b2821fc"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a2492e6e436e8f8d2f2123c566e9f9eb"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "7866c92f01b210e4957ad7011ec72fc8"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "d486e859a781a40d554bc393b36badd0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "196c3b90d885a7c830e31897284ba9cc"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7341123d9631275dcceaf60da4353767"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "67af08b0a8c42f291f7ab66148341e22"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "4539f6d5ea7fdd5b148e5429a62ee8fb"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "4e7d3e41b5d99214fb47db786d182b6c"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "d029ad0ecf53e2ad2e653d924a14d44f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "daadce823fee91316e46178b21f52373"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a2d404caa739df63f049b2d702b4944b"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "6050b9cf0cf8785d03986eb65e1d41b8"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "557049640c72b9d8236c66f4182a64e6"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "6ccad9d0a0728d1863527e1f4f728b8a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "064d4ce221e5079da53bc2803dfc2701"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "e60c25a5a62ed06954883ad0c81a12ec"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "cb9524e17da56c870646278bb0c760b9"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "055da99cc20a97ea58d7cc227f67e942"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "a72681d0f36c6589b0f957af05829210"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "95e5fa73e2dee833340567546998f2c8"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "6976ba02c55d1c3f0376e440a47e338f"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "82597eaa744f06e317c4204108ea3abe"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "520fdefdfc21188e45124659c223ddbf"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "65282151eddb580ea766d8f1ac7b80b1"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d39fdbe0094b3ccbb0bbb2e79fec2ec8"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "184f1c1841542d6acde95ba7e1f3b585"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "aa442f6c4f78da4ad2e791ccb50ad0f0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4dba0fddb0c2273ac6777d7ef81be5be"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "097edfc52b41b324e17c475d3adfae69"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "20d002e9f2d6143754a213577c7832ea"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "37d3809fa1f2d8acf6c95f9d55405d03"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "8f8a37983c6756966543ccbcb7871cca"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "f5e7acce3cdca6d5961dba1f07b0ccbe"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "46d700de603282dcc38bd2337ba507f0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "466d209cdb9fb183cf4d5710d2cad3e6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7c1dc746954710a1d6ff0167867734bd"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ffa81db9669b40240557a582d931a3fc"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e6f600688a0f4ccb177cc8cd25f2da3b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "45df79273cef4132b71af3a0b5e852bc"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "30f1beac4200bee4a69bbe095e79f420"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "bd8357b5bef27ccea1c569ef9f244246"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "1b290ca347f92708681e341c8f2e72d1"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0da284ece78c556b32957391f207e232"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "87a47b8941e02b7fceb365ce62099e79"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f61e58b513c50a7d8705db777d52ccb1"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b8fee9b9b3b7e25be0982c24223ffaad"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "2be8c078ba7d1aecdbbb622d7834c3f6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5c2eab060ec2801daae2e9ee0f05cdd5"
  },
  {
    "url": "tag/github/index.html",
    "revision": "12e56a741141cda2b219e8968179879e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d9e49ecc757536e6a63bbaa9f947665f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a7dfbfa55b748ff24dbd6f866987216e"
  },
  {
    "url": "tag/index.html",
    "revision": "70d493e5b01a89267e6a8c4b0746f209"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9c7487fb5d057fbc5464dd86c446286f"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "00777490cc1a2c5584890030d5eb1209"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "442623d64d63ad5018506f734e64065a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3af28660ae87b16900e396861faf203e"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "1b886f8274e8db76a7ea91d99ede3823"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "8ac7f682ec15260a21367120055cd257"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "fd17021a3c215273abeac8efcaa621b3"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "37f39cff930cc95322d55e01ff46426c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "07ffe72d083f6f927eb28663c319a680"
  },
  {
    "url": "tag/json/index.html",
    "revision": "76e067e5c8834645a3491f3a7db1a667"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "53a6cc311a5a10f8e50207b5077e1e1e"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "06ed5f6a63e8a4bf1a64d0459df80323"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c8f37fb655a81bfbece1a71783a490cf"
  },
  {
    "url": "tag/read/index.html",
    "revision": "7ab7bad62dae342a59276438eee7d6f6"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ca9706f3a7c63a871da6f378b0d7028f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "dbfe8ad38c69d11999a780f913c23672"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "18b3503ba705fd03969d991693d53f49"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "17bab204a8a215d35a9c21e5b085813c"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "cac685c1cb113ee3664113985f0106e5"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c1ba648cbef1c5ee831bec26a99b8f97"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ee01f661920c0201e74c60fbf3fd60c5"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8f6c0716defeed7d956a9742c3625423"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "b1b7058d050a6c97ed4179dcc73e9404"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "a8b00eccecfe1ac7898cb303fa96b12b"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "f97d12324ce5bbc70864f1be05db39ec"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "d85391ea566be567af34b900ba1509f1"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "582a3b9f3e06b69e4012ddf38120d355"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "67ae963a238227587604d5f6358e7391"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "cc7e7c8eaabf80c4a53c98cdd8a7b874"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bc3aa0506c38269ec5d19077371d4ee7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "06dd191fb702dbcca4cd388b931cc651"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "38f28f8b27e069a9dd811788b3e2a425"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "84818294d6bad61ae157829041601f9a"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f8d5f791e71d2d600f88f98247c12097"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "cd092d172a3365c113be88553099f637"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "98a3d033a15212c16bd0595e4568e4fe"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "dd405a4046158f5f3f7a96972f811914"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ae98f846ccfc036c253965d3de03e585"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5ef18447c94e59bdf86fb0eb03d4cc87"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "33dbae892797a6047598df05c7ac6ade"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "4f88ef9e9759d838ac5cfb4f7928026e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0f642ccf9cea4472bf320a4f3e46fb12"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7dddc8b2ab356d1bc91ec67a9e82166b"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a7c560f94979fba45adad14023e228a0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "90d89f5b8e500c8237810d8a2ce298c5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ff33c4554b222f9b6cf0e7157edb6814"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e0d43f0734b25d5118a0e4661e4de9fe"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ecab5bb349270ae2240bb11cb8a18931"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "c747071177d5529ed3fa682a613ab2e5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e7fa781f88369e4aa1db05f56c4122dd"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "add75ac3fe3fc34c558dca190fe2409a"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "56f90fdb20e283c83f322a26f8a69c45"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "3c7d4eeda8f5ea3b261098f97879800a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ce7c3b4619e1bef3b85816758b5eec11"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a4995fe3b860e19f5acc3ac75a9a3c32"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "3a9fefbbd9bb12bc90747c97b68415c4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a969ac2354120c6907eccf1a6a83e998"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1849b9abf7ca0245d4f3cac136236b96"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "08538dd1e0f5c069a7b3c3d1b4719ba4"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "baf3649dbff4ecbac413a8b1c1f22cdf"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "a246b95ce9ea35284fae887fc492d5e2"
  },
  {
    "url": "timeline/index.html",
    "revision": "4fa1c4d0b07b449eb512b19665ffa861"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "c742adbae21769024bd7685374e87d5c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "7d5230a0a27b948dc2ba249e32e286a4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "98dd443542a0a1a97b7b5508d23e2848"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3a5cdc0952187baf055dff5a669eef2c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4fc7d01c344f5b03910247f0c1bf9e94"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3b234a7c36462dc8246e609160d72e8b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3d17980df054a68d39477880900c1d00"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "97efb27eaabcca3c8c3afea3312f5a64"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "9ff82e2abb89281029329328b48c4463"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b7aaf9c0924dda304fb3543d442eed7a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cad10223f20477951ca083ce0b1b2081"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e3293c4e5aebb02c346cc368fc31a12e"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "178b1cc91f564ed7e284afa9475beb51"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "6deffd745770e3a6479c145c389c0f9e"
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
