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
    "revision": "2c97c052a9d213ad422ea5478a699b0c"
  },
  {
    "url": "about/app/index.html",
    "revision": "b00c7d38c9b5ffc0023713ad827fb20b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "abb84bbdd1f05f8f5241008b9674598b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "45d4d7f05ae72790447d400cb756f6cf"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "1fd571ff4198258ff35b2c4039a4524a"
  },
  {
    "url": "about/index/index.html",
    "revision": "af42e0b975c23db1a0f7f3f36aaa9796"
  },
  {
    "url": "ai/index.html",
    "revision": "936065b0f0cdcb48ecefef0c13713f82"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7edb7332197ec3fd808654f76ae392df"
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
    "url": "assets/js/116.a43cdf1c.js",
    "revision": "3c3dcaa2330b3c415e41f5d89406a6d6"
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
    "url": "assets/js/120.50c1dbae.js",
    "revision": "2598c8329ca7dd370e69f64ab3ab869a"
  },
  {
    "url": "assets/js/121.28cf8f99.js",
    "revision": "87b482ad3fc42faf680b7d8843c210c3"
  },
  {
    "url": "assets/js/122.1a995bd0.js",
    "revision": "e38a4012a5865a5ae235a76338879b2b"
  },
  {
    "url": "assets/js/123.4cbd62b4.js",
    "revision": "f70ad031b8ce3e6fd718da15ba88e257"
  },
  {
    "url": "assets/js/124.113af7c4.js",
    "revision": "c26034d0cf40cc0db13abae8a5b02616"
  },
  {
    "url": "assets/js/125.3c4ac75f.js",
    "revision": "2f5aca9211cfdfc6bdcf2fb729d13255"
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
    "url": "assets/js/128.268351d1.js",
    "revision": "5828167ec6d87a794077c0a91b5b6692"
  },
  {
    "url": "assets/js/129.29a7c81f.js",
    "revision": "f156994fd8ac40a3b1024088ff443ec9"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.9823ab4f.js",
    "revision": "4a9e28939ed84b16368936864e04073e"
  },
  {
    "url": "assets/js/131.f169226e.js",
    "revision": "43a49d9887349ee9a4f9b1b368b5c26d"
  },
  {
    "url": "assets/js/132.1e6f1bd8.js",
    "revision": "f76bff64e029fa60619a3aef677e0f71"
  },
  {
    "url": "assets/js/133.dc23a8f5.js",
    "revision": "8806161041df37127b1489e0e84b086a"
  },
  {
    "url": "assets/js/134.53d19f28.js",
    "revision": "6e30db6594fc97b206b685679dc77705"
  },
  {
    "url": "assets/js/135.8c31e57a.js",
    "revision": "d52af69fc64cfbaa3dc9fc006d70e79f"
  },
  {
    "url": "assets/js/136.61ffad73.js",
    "revision": "5921b36181eb37aab340edb58c9db184"
  },
  {
    "url": "assets/js/137.11f2d406.js",
    "revision": "6703d42e7231b95e682ae4967198172a"
  },
  {
    "url": "assets/js/138.5b8d8900.js",
    "revision": "40eae1c85a10e11b317f395c43f85a91"
  },
  {
    "url": "assets/js/139.c20a27d2.js",
    "revision": "58ffc905e60b6c9d022e6e0b4dac9e62"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.c00fb676.js",
    "revision": "5ffe603b924bae3c754b4f448661c5a4"
  },
  {
    "url": "assets/js/141.eccabf58.js",
    "revision": "b207f70a7f22f939a97ef9faae00f80f"
  },
  {
    "url": "assets/js/142.134fbf9c.js",
    "revision": "6c2c929fefccfb88d5dffe1fae3d0c3a"
  },
  {
    "url": "assets/js/143.807c8c13.js",
    "revision": "58a400053c526b5098260c7b104ae1b2"
  },
  {
    "url": "assets/js/144.e11b322f.js",
    "revision": "91e8e12cfc2f1f541ec5cb8ee6457379"
  },
  {
    "url": "assets/js/145.2738a7bb.js",
    "revision": "6bd6a18206f5316eedf43c9746c31f74"
  },
  {
    "url": "assets/js/146.31b2d682.js",
    "revision": "c53a6ea4a607a63e64d8e9e086fb9331"
  },
  {
    "url": "assets/js/147.120d5d7c.js",
    "revision": "ed928df34c025d06ce4251ff98267701"
  },
  {
    "url": "assets/js/148.ad22fd8a.js",
    "revision": "005cc9109c4f87fb299a1d6091507478"
  },
  {
    "url": "assets/js/149.b2f666b8.js",
    "revision": "f23b66654663267c3fd898ac7a3f3fc4"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.2fb73cce.js",
    "revision": "a213fbbade9b7dceaf7f456fb1d74466"
  },
  {
    "url": "assets/js/151.d729ab14.js",
    "revision": "ecdae20d7af3d2298c8c830fff3209b8"
  },
  {
    "url": "assets/js/152.87c0b423.js",
    "revision": "c128e21d9ecf213f4f7a0fb72fe7faa3"
  },
  {
    "url": "assets/js/153.30c17357.js",
    "revision": "92a0b8396d9a3e1a597871bd08ce6bc9"
  },
  {
    "url": "assets/js/154.6dc8b3cb.js",
    "revision": "568f37114944cd83cdaae2dee6668284"
  },
  {
    "url": "assets/js/155.d199be8e.js",
    "revision": "2eee8e0c83eaa9e64059adab43e254c3"
  },
  {
    "url": "assets/js/156.e982d0dc.js",
    "revision": "f943fbfa6dcbf1d5e400f1a36df051bb"
  },
  {
    "url": "assets/js/157.c646d1f2.js",
    "revision": "6b172e4f9540e79e33e438e00eb24274"
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
    "url": "assets/js/224.97076339.js",
    "revision": "9785e19a35fe034cc85806c9338b9646"
  },
  {
    "url": "assets/js/225.4987af6b.js",
    "revision": "b47ebabefcb36a3799463f1fc8724b8d"
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
    "url": "assets/js/47.db4874be.js",
    "revision": "ddd07f253713d2da148976b1c1ce79f9"
  },
  {
    "url": "assets/js/48.cf59ca0d.js",
    "revision": "656ef95de397abbebd766c0db16d8ada"
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
    "url": "assets/js/app.11f95b1b.js",
    "revision": "1ea416e3065d14f0b40af23ee52b549d"
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
    "revision": "c8ffd68d526e9e2601087025dbfcd485"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ca332203b3fb9cc1cfd285dd4bab8b9c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d7c3121c43c0047413913b83d006c4d3"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "885f1a0eeebb7caf58bfce800477b9e3"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "270d63ea4dae1a20685f8a7539ecb0b1"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "edcc72324c9a83443d09755117cb2800"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "520d93e3051b4f7015e61bbc949dc32b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3d26be056a293de66307d6d0eb0c05b4"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "92b9c979c308a42cfedc76a15217ef79"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "74f3d5878bf9e1d00a01a5fe66419b0f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "96eaada7fc1cda7d985b4f7e0168097a"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "6390f9a59dcbfd729adcdd513518890b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "2d969796ce3e1e1aff3020ac794fbce8"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "23c98042011e3a5e7acb9e0b233f5e9a"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "727401d364f03b5d0be7fb0cc690f964"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "872f47741ea835114b3f4ecaff4fae1c"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "50d55c0e9b3ce955f8f1c3e4eb78d147"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "19cf98b00dde3cd5cb3e2d22b2a0bc2b"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "8ac1771bb134d9352b060027e327ea3a"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "715546b91b027ad6eeddae3740c93492"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "0f2f143ecfb454d5206bebb0c568bded"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "16829fef69f836f9a2c92b235a3b7795"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "74c2bff87bfd35a40c1921d381dc93c3"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c255ea57c7655df3a3998f2c9966eaba"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "5190277a61138d3cb5b5994c5c2eadf4"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "43c2a2950b3131d2816fa682def5c6b3"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "e291059d5134252ee34f97b107f38ad0"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "673d6a43844d3bf2820441dbc01bb202"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b515bc92159932f4645de80e0732cfaa"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "56b41d81894170d3e4e10cbdbd920e48"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a9c5f7c70ac4560b8ac6c464722b6bc5"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "40d2c1ceb9dc0015dc571ef5f4f544a3"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "3d18fb102ac57a3935dbe288c2668a38"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "3a37de70e71b6de5f4399466ae3f32f6"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "b467ebd9da44a51ea32211f9fcf8ee75"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f398f4ceaccdb29d3aa30dc2b7829987"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "5e7a17ac0bdfaa34ea3c4f01d66a951e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "244a9aa4df2a6d3e06b5b856adc67150"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2b8cd43a4574ff63b6afc0bdde2883cf"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0fec0ef7fde610d5a9830dde346e4cb5"
  },
  {
    "url": "book/index.html",
    "revision": "3df58908ad50c2030fe6362792d5f44e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4925789cce08168eebeaf047859590eb"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4078b1e65c1f4275c42b27445251c203"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "05913163309b7e3e8de321963b1e7248"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e14a8023bdfa7fffdf56d008e2e35211"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "d8080173c9120209ea5314b8700c72e2"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "4832b4e07eb10b78ebbf2a6b686f6b98"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "a636f748d01e4f4dd0fb03e41872c998"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "4252579f92a1a431bd340d18d0ea8b1f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "dc10780b350d22640e406714362a790a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "6ad0648f8ca50a7e898d4f280502ecbc"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "2d55c6889e5eb453b091383dcb95c3a4"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "8265401a7a0c933001e250caedf1f553"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "3513b62147c9d35a86e44e5a1fa5402f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "e9b3cb57585254df690b2a33c6ba4d8d"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "1425b411fbf1d0cc613282ebc67e1a54"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "d64b552588bb3033386306e0f0da5efe"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "1d34f8b91bf9c08e7f7c5fd3b70dd70a"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ec1b5db68eac46f01aa04339cd01a64e"
  },
  {
    "url": "c/program/index.html",
    "revision": "abce437190cd434a344b3362c3104fd4"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "236e50cc2536614030b443285b542544"
  },
  {
    "url": "categories/index.html",
    "revision": "008b2203a0086aea77c2da177d8b54d8"
  },
  {
    "url": "figma/index.html",
    "revision": "2de176767ca458f6337fb5151f5810b3"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "ab1796a811d12d7924a395bd2a9931d6"
  },
  {
    "url": "flutter/index.html",
    "revision": "e9a3f0821c368be59c8b08b4c322f33c"
  },
  {
    "url": "flutter/point.html",
    "revision": "e6dbff13d12086ddda155fba16b37237"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1c6df637e6476418c6bacc888db06ff0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9a6ce852518de47cb41aebfa2d52fdb3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "ddc828fab65096609cadff4e3e860ef1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "45794adec5de3ec93f647d92aab80a6b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e8635c484446c536edcfdb5b3f3ca40b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "1a788e52ca1b20bb9b7b88c46bbd0372"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d196c2329c1ebe0911915f4120f0113f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0cd4d1f807804fe0223f6f02e3970529"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "0a3f00ec0bb5a0956258bf570af1c2f7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "629d20e1456f69e29f3b901e96e69593"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5c84116368cbb40a8619b8e1133463cc"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c5a87097be6cb1c504764a00d3a26fb7"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "822d7ec3681b6fe2ad2bfe6ebd574108"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "00cf83d22015edc1df9f013bc2aa7b3f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "8e861f321b01c588e8ecd5a80cd322d0"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "60c0145bdb0ed1570f2064018120cec2"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "80615002477a2b690e50ee92327f44d7"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f8d94291f3f14631c18cbabd74ac96b2"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "312e481abbd78448ca502f27a830bf4f"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "7d63a984e82752fc3459b297cc0c7ef3"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f4c45e83f473ebdc3454e61b092efe7f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "f0fbb8bc514d970f8c7b9798eb0ce318"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a5bb5ccbcaf0dc654074815b29c60ad6"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6da90f28d265423dc86cfdd59cd33de2"
  },
  {
    "url": "haskell/index.html",
    "revision": "bff9d795745baddee545949330aa8aa7"
  },
  {
    "url": "index.html",
    "revision": "ca08f7bc2de74aa2f6d40385a8479c6c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "224c4672e157b0e05ee74eaa6213eaa8"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "4d4ef4b0df0d4373c8010b67ff28ca66"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "5f01ff0302c74dedc92126b0006d0f0e"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "bfb5cccfb09de0fe06d649628a0591c3"
  },
  {
    "url": "python/index.html",
    "revision": "fcb3b12ce37537271d158bba912b8177"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "53b12331e4decfc6f47c4c25650b9497"
  },
  {
    "url": "read/index.html",
    "revision": "9fe6654a34dbe4aeed4f86babc0c55d4"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "dc958d1f3f72837e33a3554e92101bfb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "dca28bf098ac954103735410aa645d87"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9d6fe998ed4b2e2c38dd0b52575df9f8"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "43bd4dccb2b60b89afece3cb39015da8"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "e936b9c8858e751fb45aab0e612af5c1"
  },
  {
    "url": "swift/better/di.html",
    "revision": "fbcabb49521a5286744781f208ce6811"
  },
  {
    "url": "swift/better/index.html",
    "revision": "1b4d964b15d8c4ae3c7de55f5ca223a2"
  },
  {
    "url": "swift/better/last.html",
    "revision": "6ef376831a2885c6098c70a53b3f3604"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "773458095c3d9597e8a639f8c0c51a88"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "fdda10fc16ecc0768309208a213568e8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "7323f6443ef2a6e286fc1c88c18df08c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "21a1e2cf816930010e4e6803dbe97b35"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "1afd152e88620a7c9f4e12bffde2e0e1"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "4f391f75c6d6ea7249625fbad758ee1b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e6dd9a4e95721bc7cb3c4002f9793ae3"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "15cecd5d53428f41a7249d0628fc3e0d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "f48402dac11522e1c416b8f827357e45"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "57384d79c394574c8457227423e11690"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "58b0a357f467e1688170f3b3e18f317f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "71357cf8d3c8117ad7f1e24d63404c3c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b20bbb51a1cbc4df825180711dad54a2"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "79ae20612b5256807ae8331d7b07fc54"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "2b006228422c9b06224114defffc5945"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "08bc1856c18c6bdca9da7780de7553d6"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "041bd157876cbb587e4e43f5051e8925"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a72fb1972bb12d381d45dd9d56cdeea9"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ba1648aac9d2ac68f703848bcfed5911"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "24f9b54e6e6e654d14e747dc9e670c83"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "55d11929969870ed6fb13d651eea620d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "ee4652274a3e3337df6e688a446c7ada"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "762f940419889855b26f05af684d47b8"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "fa8e1c1c9dcf09b84f7c0784bfa650e9"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "5a48c4b50f16597a765d334ba539c51d"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "adbb8ad416f228b6929e013884b125c3"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "407fe821400dadc347f69db2d0ed56c7"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5468048dc6620e2dac27fc4958571dfe"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b3ec72b377fcd35ab9e9a65233c072f0"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "86a45a53c6bd7e7653345dbdf91ed411"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5725636d8b7e8dd96b404a09db05b990"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f36e0fb5c4a4d1f117ede8f922a74e66"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c441f005433bb51f7f90ae781667b1ac"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "99893417fec13d40920379a06465b53b"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "84e168ebb59614a722a78608b6c99b90"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "eba99229d7c93e6ab4cd0645fc2fa20f"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "7517b33e5026acd2b31d2e9a9c4989db"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "a37d2a0cd58d75e90d84035ff3fc84d3"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f4867ccac7bb2037d0e9ff40408ac6c4"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4f142a581b665d8ff7271eb22480330e"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b27ed8a50af100573bf9e99704372e34"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "cb405c4ec0167555593893d07604f628"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "c23b5c077df2749ad7256b66cfe78e21"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c78be3d1cbdaa59fdc4fcaf3f8a5c107"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d72f1483e0f6dc467609e6ff207028ff"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "adb02f44eec46f947fde14de12a59631"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "3b81d7839770a4f40972d69380d36ad0"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "3a7ce6b9276d266683e2cdfa144ea3d1"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "614ee35497c042e9facac41b1d5ed1fe"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "7478f2d21514174c37fcd93582554441"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "64cc32d7548d5279d75fa4466b7f3f5b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "cc10eab47acf3d6465697fc8d5e1d4eb"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "2a4f045823cf62ab5f86375c94512ddb"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "4406516e83664babf799d49579a0f0da"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "40be635b3cc72e3cacdcd3e37bf8fa39"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "24a768b8d3295ee38aadcf87b1f38a21"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f6f62d954da55874bbb8ce5d54814b3e"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "de9ed6fb30691b5fc42a757e8682c604"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "f9f8ff31a041bab15ed4ee55a6a5d4f8"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "1734c43823706f994798983816dc2a4e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "2793e5aac27f49011bf7160bb8d99e84"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "31c74edcc2a6b92ab610cfc49a039aec"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c2647d926b5dba91c40252f7125fa818"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "34ee4bde0ec08d647df6601a9b021b92"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "cb9dac6a479375ef7ebfd160e2d42cc5"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "84f0a465dade61fad77424cdb8a94616"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d94f0c28c3a925da57d0b93c4400edee"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "be15b3de6136e9530f7e03e7b661440d"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "6eaf23e7a619546dc43af34d431c64f1"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6799851f561cd894f79666fe9daae1c7"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f7e66e8e6b5a92a7bb8898d6c2305860"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "dd95f01d6382de8b2fd4f491f12edd14"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "ffd51502774be260c0513f73763cbec5"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "ae152240226fb6f192a9e42a87caa686"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e15e629649bc89d7f826ee51460f94a1"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "2cff72b7a48b3dc6bb6d437cfdb1c366"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "abb4e973395855a03fb57a1b1f7c7b09"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "1c1595a413339959e51e5be95bdc238a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "43ddebd7f0e09c0d529c47f1435e315c"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0f36d9547a362c501ccb30508208625a"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "479278dea6501f757ba20918daa6af05"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "df28492481f15f4d251979985716b562"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "f46eb7c72242edbe7011a7196018e0c8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "8ab79d93e282c8db87308496b79cfe56"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "a5e5be903c5824264256c7ed3526fa01"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "991191668ad304fb973ccb74c29a376b"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "89dc99635aa736c4073a9395eacccde2"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "21b7f6e846a31980573b03bd6dede794"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "4e68ed7cc38acc5889a03910a2c5b2f9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d291cc779f726a9f61470c03938c17c1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9152d2abeed2c14d00fd6b6a284069aa"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "2bc5ec97ec2c2cfa73fd17c5f3ca96bb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c696b68b8c36c86c9b86255b68ce2ea1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ac2f9dd52121f49db5a40635db696288"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3360d15b4092038e25c57e4013aa9bd6"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "5537e141d0488ee3e03a84dab321cf4a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "4d9a4fe001915192024e56fea9a9c867"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "94e326cdb1483d854343a0751967a71f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b6aada4f74a97dcd5a9fac8ed9567c74"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d94bac70034aa07430afe3bbc92b798d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ef23bbf8815f78cbddfa5d8f8c5b1005"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "35425fc5c490621f8e4ccd1a14458a17"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "a2bb40f9ad621af0f9769b3f516502f5"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "053c4b7fbf0e76b456dbfe05c97ee8b1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "4139d131442c7b8ae24f97092e2a556a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "027ac1ceaa4942f960b376e6b468627d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "55f7488d1c800e27917b5105468ded5b"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "54f5965b858ca5dc624242fd5d45c06d"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "d79bc76366c68fd4232a0c4ee875a8f5"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "1ff9978d9e13b3edd4c6d42543d22519"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "040e121ce0863bc9810ede81dd824be1"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bace615764785b6aecd3f0c26df694dd"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "96b590eb27ce6248e1db5ae6dd939a86"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9951b8032485ff41a118ecd8d2e854f8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f3f5db37c1274a24ff70ef07b1e579ee"
  },
  {
    "url": "tag/github/index.html",
    "revision": "be0190f0d9e63ade7456b6643d2fd452"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "98b3ae383f3d1099ff97f8fb09eed93c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "47e45b676ec0ef5124ff31069d48c10a"
  },
  {
    "url": "tag/index.html",
    "revision": "c8b8eea961151ad498c773edb40c519f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "485a020f2c4d38815a02742d88faeb0c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "9d06150f1a0aef80070713702be10afa"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "ae411b1e66fe39cb7b6929f3c62524db"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "eb00015198a9ad4ec35cd5f7a3bfbfcf"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "c69200d03cf63a97aa6ac4d4dcc5b259"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "4638c06d45a96451611d45eb974642dd"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "0a3a255fd50eb9fdb9708c1e609d6671"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "43612f847f710e72688f63eeec0aadb1"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "727e76da84c41781b2df661ecabb193a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "18e5bfb796f1c82a0c085e9114701378"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "abf519af1cdf754cb5129cda55041ef4"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "43a8bbfa0746585a6583a03769342c00"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ad06a82f6596bda98ae5a35b03a8502a"
  },
  {
    "url": "tag/read/index.html",
    "revision": "ca2227550f98cd7755b9fa963ca41366"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "eb251c1b1632a28d1fe347dc57f56a4c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "9f959c4e73c593158ba5773482238f1e"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "1ed75cb0e0c155b2ff61d81168dee107"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "a1623acdf556c969eede2d69dfe9ec5e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9d1ef637e0bcf3b5f9fdfcd13b80aba1"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a68eb3565c08f84daf547d544f7c9aec"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9ccb54df3f9f822c1eeaa828cc09411b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c009f9f1362eb16b04fa2a6d83db42ea"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9e77a868ec71e2683d0dca57e1c1e94e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "5af4597b868bdb0454b4b0b8da717ab3"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "22569ee177410612617c5f474a5f9932"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "00f45ab206c070195025014e3e4cf099"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "adb604420c6dea80be6f1ac460db3f8e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8944d1b47b9eb0f74a4e0ea79b92370d"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "d1cdead1a23011de83a2a7b1957403e5"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4cda7e22b96f044b4ba16d70047841b8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cee87b9c6806922dac439643fc106361"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e15d163bebd032bb0f2c374fd949aef1"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "f2f1efdc71e40c5e7345c18ceed2dbf7"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f66ed26ab53b226b44153a7bfe71c44d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1bfae8fa8a8853e6ee60b2d295f6870a"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "38b7407c6b0b29b2b106ab57088ee461"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "bfa118607ab636c4627910dc5bab60c1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "72d91d7a83df8a74d67c76c005fddd18"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "57c72a285a5db4a72c0bbe254cd4c1f7"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f9ca4c7901810344bbd6721ba0efcc14"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "19f512283892552c43de50995890e9fd"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "da765b0d46f842d8db63373df5c8a4e1"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "489a7e7c57a301ac0e33e3ba9260df98"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "05ce347eaf495b754547ad04b5af954f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "9ba3f04ab20edfa2a6e9eebbfd1f1c50"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a4b26ac147aac5bc03f73a6d0c30eb3d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "880b7d0cd17f037b1b216f5fdf815ea1"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "dd964c23c445b68f2acf57f02be4c5bb"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "6d0aa9f247a5a4ddae0d3da919633d68"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f5957499aebb802fe1b8328d19d3bd5b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "132098150ef953e3a5ac315cc3596f51"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "dfe70eb557705f549a9f3683be6ac071"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ce742a1caba483aae5b1e410cd82a592"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3501a77073492e72fcc51ecca9ec2513"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7a84586002fcdd8741e691ddd48edac6"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e59e03bd57f534aecea0a643f50038a2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "68307535eade7e2ba0ee87e650dc87bd"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "6f58dd0414ed9f5efdfc5ce9e6c9aaac"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "4b2b7ab9e68a2820d2d3975c8b604615"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "f35aa870f24c6608e16fb0ca4c556907"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "62b7ad96654aa2952c25e9b77b3be48a"
  },
  {
    "url": "timeline/index.html",
    "revision": "1fe8055e2225815740915ea9b4ffd60d"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "59a9976fa6e0ab8c397714482395b90f"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "2c8a92b39df8081ae7b67bdbb2371f86"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9c2066b2cf5020a71688ac8e79569455"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a9f64a74625c4876462d2812eb5d4d73"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "03d58279f1c98e455053b49816b9b7a2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "19a43845480eb7f7825e0fd24f2d75b2"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e670319da29a5405d15bf5e28e9e7584"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "2f91f367050ec830c9628d292cb3cfdc"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d330effc1933a4e7ca9df7fe9abd2469"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "78d5acbbca768988103a980d0aaba6c0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "73a395da961b12441ffdcb14cb007a4e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "83d2f290cf0ee1ec6ef97201f7529e9b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "d8124e3b77ec86ad4dc8449834971f2c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f12f794009972513ca598ecea5b9d0af"
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
