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
    "revision": "1f827b304b6988349af4510e14f1a6be"
  },
  {
    "url": "about/app/index.html",
    "revision": "87d4e216fa43214a738176e69e344da6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c0990668c91356ec6cd57af6b4289374"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e6166e987610d2645b6186b5eecbf2f0"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "fe4bf67a8168c8542fef3c8e96f8c931"
  },
  {
    "url": "about/index/index.html",
    "revision": "eef31088792ba2b2a335cb6511577b7e"
  },
  {
    "url": "ai/index.html",
    "revision": "175d850b0c3b397044e4e25503ad1f99"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "835ea7faf716b46b68f12a7e154b1067"
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
    "url": "assets/js/116.9997d17b.js",
    "revision": "7419bb3922f6e222ccbb262e0c0d25bf"
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
    "url": "assets/js/123.2eb81dd0.js",
    "revision": "68c1953890f8b6c23cd2a831333d03ee"
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
    "url": "assets/js/136.7e15b1d8.js",
    "revision": "a03eaff398d4ab8c676022dcfbdce612"
  },
  {
    "url": "assets/js/137.a9632149.js",
    "revision": "286704788ad6aaa1987db26c6c31c8bc"
  },
  {
    "url": "assets/js/138.77f4a819.js",
    "revision": "8ba8800c1c227bfe4777eac425424b03"
  },
  {
    "url": "assets/js/139.9cb8ee24.js",
    "revision": "5f9e6a601081911a42806f34fdedd965"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
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
    "url": "assets/js/164.61acace3.js",
    "revision": "a6f62ea9e91b9bbcc091bb1863d670ed"
  },
  {
    "url": "assets/js/165.ca624777.js",
    "revision": "321fd996f53689abb94de9c0136a5378"
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
    "url": "assets/js/183.4bf7bcf8.js",
    "revision": "ed748cf9094182e66e78b918ae280ffe"
  },
  {
    "url": "assets/js/184.4622dc56.js",
    "revision": "33b4d4e179b2b90565b77b8316f01a83"
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
    "url": "assets/js/206.2f4b4280.js",
    "revision": "182f2402a3fe04dec9b3a5db57ca5ba4"
  },
  {
    "url": "assets/js/207.9b81e0c1.js",
    "revision": "01e22d0ba8dc3151e5a55cfa61537fb8"
  },
  {
    "url": "assets/js/208.65a3f0c8.js",
    "revision": "0a1abb7df605ab46a747587e02807f06"
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
    "url": "assets/js/213.03e3f2ca.js",
    "revision": "3898a840a0a6499ee89ce364bed6202b"
  },
  {
    "url": "assets/js/214.7cb46b27.js",
    "revision": "fc8643e0402a8af1556c2671cdaf36c8"
  },
  {
    "url": "assets/js/215.7153c074.js",
    "revision": "d468f6f4e3e496109f8b817f0ed01b07"
  },
  {
    "url": "assets/js/216.8c1ecffb.js",
    "revision": "872bbb93a949816cdb6dd6748fcd66ac"
  },
  {
    "url": "assets/js/217.89c1629f.js",
    "revision": "8b5c064fe5069e6d678afd9d6140aa3d"
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
    "url": "assets/js/234.ddac310a.js",
    "revision": "611c7203493dba228e0da69286a6292c"
  },
  {
    "url": "assets/js/235.eb27ca04.js",
    "revision": "1295d3af001b636f789e1227bf09944e"
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
    "url": "assets/js/34.f8b4e2ae.js",
    "revision": "b099aa4990f7bf2151cf844fcde4659c"
  },
  {
    "url": "assets/js/35.370e9427.js",
    "revision": "f7e14b81d7bb2aa934bfa8b4f07d9172"
  },
  {
    "url": "assets/js/36.4189a875.js",
    "revision": "e95cc6141734bb5b9dac7ea7bd61d069"
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
    "url": "assets/js/66.8363892e.js",
    "revision": "4b837a9f024d6d4507e5e02cf7e4a227"
  },
  {
    "url": "assets/js/67.0c3808de.js",
    "revision": "8b02f14ee3a4075f0949d39657cdd1a4"
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
    "url": "assets/js/70.b5e1d24e.js",
    "revision": "19e95c03da7a50d05bb6de53f3a8b350"
  },
  {
    "url": "assets/js/71.aab7fd06.js",
    "revision": "54100e1516afa5f1368b1188bde2d4da"
  },
  {
    "url": "assets/js/72.a313ce44.js",
    "revision": "0f07974c8cd161e19ef83b0ab57233c9"
  },
  {
    "url": "assets/js/73.2c6139f2.js",
    "revision": "969ba5840f379fc0a9bd3989190ae87d"
  },
  {
    "url": "assets/js/74.4e638b2c.js",
    "revision": "77a9325d5a9588539b638fd09174fe8a"
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
    "url": "assets/js/83.fc458158.js",
    "revision": "29badb368acba846e75742e9000410fa"
  },
  {
    "url": "assets/js/84.62b46400.js",
    "revision": "a1e8aa138cc942745fbba22567b1b8b5"
  },
  {
    "url": "assets/js/85.0c076a82.js",
    "revision": "d19d50e92319474a48ec9b4b7b863055"
  },
  {
    "url": "assets/js/86.a6118b7f.js",
    "revision": "573d92e01c3b0e97655563c25be90a9e"
  },
  {
    "url": "assets/js/87.f8b425b6.js",
    "revision": "00aa30dee41660aafa4dc288358ce62d"
  },
  {
    "url": "assets/js/88.14c4df84.js",
    "revision": "7a107af90f530723de811954090f6131"
  },
  {
    "url": "assets/js/89.679851c0.js",
    "revision": "e32408a9790ece1ee32ba43d8cb6dda7"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.185c0547.js",
    "revision": "badc564b9827d1037e0ebe375645ee41"
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
    "url": "assets/js/app.e9f6944c.js",
    "revision": "89ec8d8acd8526935745a2a269ccc829"
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
    "revision": "b749c57841bced3549f3d449534ee1f1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e5acb3b8f3d8db7189d3f5910863e0e0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "2c1b07e3a445a39ec2d55e3b7fb0b104"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1c0583bb25306c3cbd2ef04eefb2e525"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a37491911983070745b47b3617ee8725"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "132044ea702bcae4a38d020c4e070ce8"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "cf77910b152d323264165a1b9ae19150"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d0f8dad4941ecbd39a5ea0ae345fd155"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4a56d5d7640ce20c1a1d4bad623a1836"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e2c7bcf031b4057144e6eddb235df889"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "5733db4fb8eb9faa4d3bda49cb3b3b96"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "dc0a26aaebe76a6a338c9d407aceaaab"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "4967eb37d3c48e0aaebccb72bc987cf2"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "da6a943fb3cc2af49751aa834c9d6bb4"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "9f115ddd2a7ab2fc2d621d2c38605341"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "8ab46ee16b4f8511d62a0c74be938ae7"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "6528f5c9e7e1a6f401b9a9da4e4dee54"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b45e344ac8357f6a55131f99608a75a5"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "51813ab24ef301dd5a8131ee1bfcd71e"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ae90d1e8e86b0553b7cd4d6efcfb25e5"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "57fbc10717f5c6ac554f111a8bd91c06"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e960dfac8ccfd2164ce7b056fc916ecb"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "2ae6bbc072f6d98600b7827432987a13"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "ee3c7cd879b01b0d1ec3d59ca78091e0"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "599146077837adc1abcc46e575fe5bc5"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "34f5a92c210a13f21a9353023bdae6db"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "62038f9f10890c5700a701efd34233ec"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "bf1608242b309e9ac7763d7df651f1d7"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "80d1c1829333d8a17d58ebb725f031f1"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "135bc90c1e10514c5b54a970a8ae14f6"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "2417de165eafe93c5396b99cb61c9a16"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "ac480c130c9c7d36d1bec74c6d2ed82d"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "580cdf877498abcfabe5ffb46f6bdf8e"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "dca673c98aaaf34b3a4eced31e11f27a"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "572db1fa684cc780349384329bfd7bc4"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "afb2887798fbee1ec0f6e2582a97c2b3"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "6d75a632b838d2f3e9729b769c713371"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ab7e638d5d80f81099c0a1eda1fa2322"
  },
  {
    "url": "basis/index/index.html",
    "revision": "04509a5eb91510e59e111b708e084377"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7c9bf68a0166c9796de5a0faa1800619"
  },
  {
    "url": "book/index.html",
    "revision": "3cf5af4085741baa66d6143230922d0e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ba1beb2fc5705bebdaed801c2478d0cb"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "5846f98dc945ea1339b26985609c1fa4"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "cce51055d25eeafe7458be2be162be73"
  },
  {
    "url": "c/audio/index.html",
    "revision": "da8cb4c912c395234b551631f448cf96"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "7b5286efeb968ebd8efa61a47dd4baff"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "16f39fbe07f81febddb744de87c5917b"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "1e5d1f5214425683c1468085ebd3a155"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "2ac9481d23c02595f955ec456a123cb6"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "9d41778bcb2ab3cae060c8631cb4b1b8"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "78ceae84bac11c900cf080b4e057582c"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "d242f609a0e4dc1fd9f873753439aac7"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "ae0a69d6ab4a2482e32e47c4ba99f378"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "c3bf805dee245e408bb19b8413158823"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "1be4cb028704c50826adb1cae7ef9b6c"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "7b68ed2b75513ce558474152b0f8db19"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "5660a498ec6e540b6d5b24b982259d89"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "f86c588b713546bb98dee20e89029433"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "b25b56ead77007eda5f22bef43ec0ab4"
  },
  {
    "url": "c/program/index.html",
    "revision": "e3bee04401c9fa441289056a4514a671"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "9bbbe0c6fb39fc3cf8e0b8f7e17973c0"
  },
  {
    "url": "categories/index.html",
    "revision": "928e4224dea3a9b9207cb66f8ceb2cd9"
  },
  {
    "url": "figma/index.html",
    "revision": "e451d45440186c57ed0ed69583a21b8f"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "6de4e5234137277263a7169d86d6bbe1"
  },
  {
    "url": "flutter/index.html",
    "revision": "2ec6f10a6273a3e877df4e4a87590e96"
  },
  {
    "url": "flutter/point.html",
    "revision": "1e7a0770b79394768b617c2d977f7654"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4789ba5b8905bd2d66ecf0200dbf9c7e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "192f019ed71f4ccba333d34a8a6ca1b3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "df9f120055c814795e3982c497f8da0d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fa21eab3771b8539f860dc0282f95cc6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0a58628dc6b0e02646eddbb0048d50e5"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "57ebba5732aae5398cc04a8396a19205"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1958e18d80246f0b4d75d38ee6dbc12e"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "dbd49b59d931b065305ff90184ebd2b8"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "204845f02adca836ffdadafa3e979799"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "2dc9bb86c8b6cce300b06951f74d75a2"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7be4a71ef3b70ba66a84f4395d1310b7"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6d28cc9bfbd57092c044a3e23cbd809a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d19e542d7f2ecaf774a5e8bd0b9d9036"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "714eb48d61c63b94cfafe22379c6d18a"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a268b8d96e8fb687a4fd7b1c179f527f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "e57afe2840150ff82b808e38b79c3cff"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "5cee0bc7ff04c830c4d827c739e5ca47"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "a3cf235a4b95455ba5c92b5fbd4c41d3"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "c7987cd29ab687872a43ea64d80b2919"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "656fa23e82856af811fa4c548d62dfc3"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "88e4ed5223324cfd089dd07825175d34"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e11832bd4c55aa74774781d85450a415"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "4baeddd7586e39cf83ae8311fc89fd36"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6ac4a0e28d88d129ca640eb710c57cae"
  },
  {
    "url": "haskell/index.html",
    "revision": "380df8faa8bac4fccb0ff0bbad209caa"
  },
  {
    "url": "index.html",
    "revision": "25edc6f6e952027f1ec0d4c8be9c50cf"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "8adbbeee0fc92311aa4de7ff560377be"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "f0032913b89893c3adf6561e70367639"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "a3a4de6fd00bf4569d3ce33171fb880b"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d98efddf413edf7df203eefab2cda452"
  },
  {
    "url": "python/index.html",
    "revision": "871791db5a6b2b38c2b0c2a87a76ae99"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "5912ed306ca705eb979ab4da8f40bc80"
  },
  {
    "url": "read/index.html",
    "revision": "7761bf05b814b25776caa047b67252d1"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "bbdcb8900ac36541064e78c3466375dd"
  },
  {
    "url": "swift/better/available.html",
    "revision": "1aeacee9271a55e7c878f0437f316581"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "69a660c180aae66e4da3f26b4ac0db7c"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fe9ca629d3624011bf743fe4ebf5339f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "b0fe03c2d994b0bc9ace90e0497db12d"
  },
  {
    "url": "swift/better/di.html",
    "revision": "72be5d0d667cdd4148d47b4d7c9c55fa"
  },
  {
    "url": "swift/better/index.html",
    "revision": "9b770ab70c504cb1df53c519a0868a10"
  },
  {
    "url": "swift/better/last.html",
    "revision": "40dc7f87c5fd405b2591aa17e3705cb4"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "708b1b2011ca55e743651ecc8e1cb29f"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "28b5ea396846ec1a331b93e802a98c29"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "4640657902ff8a8ad788f0f0bcbbd073"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "b0255df59ca2eda1ccb28bc9252d4663"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "2db86e26cb5f0c5eeb61c98fb9e80d22"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "14a20e7b6f5805fec6113ede64372468"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "1868e711dbb8bf3f893de0c0867f99c9"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "29d0e4b598b8bf63b79054e50e68f2bc"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9db15d1ef05751202683d7db3f234bdb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "73c474b7400ed5065881e250e7ed1489"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "29c5e0e539776ee67e0015067f056b14"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "f95e99e82001c2dd250a48fd41e1a766"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "fec965c899e348088f6a592ed3ee6750"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4fd05416ac304ac5197ac66ac90e904b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "02c66ef526593256eec47b81d0e4f2f5"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "e896351b741523c988457e320b9f5946"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "260c83d5ab937477b715fef91ac07388"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "4956c2f9bb2a766a6bb6ed51a6a1ac6b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "da4acab4faf987c42bf8bf8b1f615913"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9d1c54f8452528983e4eebab8de735bd"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "2b929e65b2c329ecfaa2a40772767a79"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "dc4f74a975421203fb78dd7a6afdfda4"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4ae6fcb154227527ffb95f29faed2b50"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "6fb038897d7c0b82bc9f2356964de3eb"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "32ae841a27b1d86902489df384ec2842"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "4a43adbccfce8cd5cdbf361cbf4fb19a"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "ca54953a884eee67a5c53a7b60c1c628"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "588f19c259cea683bca74aecf198ce36"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2f4ba68def146cbc4c291e4627ccc345"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "7e058a54897ee8e846c796a526dfdf4b"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "4f62bb7b830a3b20bc26704e4c540e3d"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "1f7cc0e35a0ab7dfc9224af56723f895"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "ed06720a8558aa288aaebe1bf92c1486"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a91bf70c7b77632a59b81279c70e6416"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b778496e2685d7904ba2c745b6753dcd"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a5136a562ba8d65bec111cac1e9aa278"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c97f6f7af5db8df9a24d4b6a1d87c255"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "375d064836796f6c87bb82677dd28641"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "acdc1288b4ff56a3776db5f34331a5e0"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "cd43c26ec726e28c452ea996a32e67c8"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "3c8064aec2d55290e22545e0d10c936a"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "2cbd6f82920150216eb0f4df35b8bab5"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "556e896d7759351b703a7abc28e93d3b"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "2bacf2de22fac439db4c4584cc2dec30"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "63bc5d2f11a3870cd81e686f4d2e6547"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0cc9ee65bcbefbae351ebe9979c41c05"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "cdc4ed72e2742066841499bd546aab95"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "11b1e571c0aa37a3302ffa389f8cc9e4"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "c9d03c191a186026008c4767411ee296"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "a6c31b26064dc802dbe41f5e88dfa67c"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "70e6d8e0818d37b14eb9e5cd3b6eb5e9"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3a1d6f408b9761fde0c1e57151a08e3b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7cda664ea91fb8c494bc1939b7a17876"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "65ceeefb754c4cb3ae2a56abe7ebcfe0"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "42c9ce8ec659a28d35860649035a8d87"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "2b8bdf94b915aa8bfb95620a6f902e56"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "a0bb9c55e8f0333da01dad499f0b158a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3d1f5cebd021198fc918be20b9999b69"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "d4f2913b587f9fbb5775f7b948e345cd"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "4a6f5cd02bb5d327e03e18608c2557af"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "5326a21577dc7c466a96097405092106"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "17d318a4a56d521a77ed27ac0878d167"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2d1da030aabe4b39b244885df0fa05e7"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "4c346fe08ee413fe082c95cc90821f37"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "5856520747920d6085e1fa23859b8540"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "88c29b57066e8f82f8b4081d77212d00"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "391e6e57c4a01bb498faea1d6e552444"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "327509c2121ce900db5b1a3db6a67f51"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "0e8147859573313a0f5f81b1036b897d"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6f8dedec4dc2fb6f76c8a0d862d8da24"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5d81c8eb10b608c9b8eeb0f69e3cba78"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "1c59fd177454d273c4f49e931892564e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "97fc5c2e75ed95e358583090b289a66e"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2cbd19c98be8dd0ea00f195906f720b2"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "9051c10cbb509ba0cb315cec1ca3d033"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "62cb0ff174c65120ce06e5586a3c4e8f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "3ccb2e847b3a174eb2ffaf972bbf297b"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "91b73a90c9f5f8f8c482d2486e435611"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "59be7a0af95e3b538880e43ffbf8f871"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "631c4c1aec14a447626c27b41578bb07"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "819da0d2b9c7e52b2cb0f017dd3030d5"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "1eb872589ab280c9da62a77a2c8d1369"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "8bb37e995514f219fb69908fd22c75f9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "49c625d3db3594568282448fb57530bd"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "9d8c5ebd79031f543da24784374dbc09"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "227e5c65c05220b598b3ebb5fa8da89d"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c190c194143adfcf7dec85b7ced493ee"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "3da1b71399c1381ff851ed7986183df4"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "3e4f5896bf780f18b998c1b36f17d499"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "771378782c90785a2d80687feaea3f74"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a5fc444077e6ccc3ec1b11c264fe76cd"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9c5e20272f6eb0d33bd7120e91005d53"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ac14f0dabf992ed1ee76a13da2b45d97"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9840f76b08043ea35e6e8722c375c830"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "19f8c046b149baab2a020a8f8791a54d"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "edde4fd21a20c8bd96f600a4b1e3907e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ba126681834e33e3620ba6c08926719d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e5817eb4fb78a932ac91f47e7bc7c4c5"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "6cdcda719bf851d2440517ef0bed6122"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "3c8184ea16c2ea45b72548df700943e6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e05355b083e1b1d057a7f8113c54e037"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f86d1e920c994d01a4b538df5b427e65"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ac9b740e584ff8613dfbf6d528e3481f"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "4a5d2d3dc0e16053e45641bb02bd99b5"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "66948b624cd18e574b8acffd4a84a7e1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "202185fd21468e204923c2d34a8b457b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "31a5c84d8711fc63d7504cce60d764f3"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "67068088a3557d1d61d853c5242b890d"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "265516d080036cacb60776304069f7a2"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "f3c9d506e0d34cadb3f984d1865503a9"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "3cbb5c0519f67371728102aa8a943a9f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e5e4fc9644ee881a28da78c714269fca"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "760e1b315193ef819ff95603b5d893be"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "35610df05f41ac0904c3b90f382f4060"
  },
  {
    "url": "tag/git/index.html",
    "revision": "32d8879cb2c40c7ec779d43d24c70b69"
  },
  {
    "url": "tag/github/index.html",
    "revision": "21ef75cb3cc9360eb7229caa33c277a1"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e4558aa9e19c0d774a637839121c554e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bcd3e5f04c76c005870648d420b0a2a1"
  },
  {
    "url": "tag/index.html",
    "revision": "db39618c6e2eebb4d8f20abcfbdd3c95"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "34d433f9a9fedc3f9c0097bdea5535a1"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "40edc087241cb5008c5e9a667821e826"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4a8409a1a9a07416979310d861d85bc0"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "f8633822c9686fba0941eb21de59d68e"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "361fcce62a8de534b64ac5efc075a7c7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "30bd5fc965f163d5c2293006f100d357"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "8ad692c873add8efafd2f2ff2a6b95ff"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "3a45fbaec8a4eaaf3191268afcdf41c1"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "4004937f1a72bd9287003e90cc11d608"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8f045b49f35b81fb116b87f14fc7fc71"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2e3b0b55ac0f6db312ff2abfed8c874b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a84275a0824599c8a1f66526ede1b41e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e3ebefec881a0d3d50906ab2bb090f3b"
  },
  {
    "url": "tag/read/index.html",
    "revision": "ac8bb04e9c7cdafd2377a11a0058adf8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "03116431064921f01ac6bb5f8efcfd08"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "d5ab9bfadc73c028a504767f1573420e"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0afb5827f2c218b0f022f361996a6a03"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "3674fb8e8acb825c11e9c34ff5d727af"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9f308fbb7a7086f7b9ec8b0b44d89ab3"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "0869f9c6f559a08fdcca8aa65d41fc5d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "585a84480d02869d83f94eaf9cb2c65a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e7a0dc202209a7dbd0065b01cdb462b8"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "8f3de537631b739bd905e16b967de40e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "26582d961aa75094d84d33880dd5f68b"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "23645890b52e84e9be5ec85b038704ed"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "917caec9b90b31d13e14b0aaacf9323c"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "296d5fb56fd53d342bec557c7ed53907"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "d1bc4bbbb2b479dbbd59d1e5324be6c9"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "fc55f54d56f1f6ae9b4de437303fcab5"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "95e93139e0018a5499b13ce6274d0cdb"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "030065bdc5dad3c1daa7dd12a8149e98"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0fd6a22fa50b2c5e7ee15343c6a96e8b"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "cc1c61486f1552b744e7c6b2e9fd89e0"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "69309c9a01d7d14eee41190a515e484d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "55c9d361718ba73a2680aae0f3b0d586"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "abc6d61325de97b546da04cd4e00c74e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "771f6f51d21a7b334b622f8d6a9a467f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "26c137594875b1929acf73050d32544e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e74ee5291fbdfb303e023419dc3ad2df"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "bb21f4796df66c2d5af2a10204d4ba86"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "4bd8ba17b6591fd7458247d315c7ea00"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "db5f8d99ce0c9b040dedc28e7850a275"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "069051a42abbe90e8d24c0e4bc60f27f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "739f4c7757e4944579de7ce8f72e57be"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "2ff27ef5a09060202a2601ef8bc42859"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4418cb9447d347286021d7c99ef6028e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e1bf55eee9cf1f871aa51aafffe13d90"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3dd88c9fbe0041cc523fae1c4170d8e1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ad6b18ea7748a8eedd536e8147686a65"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "84b2a6bea741a42a0bb89982bacc9ce2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6590fa9aa821c857e7816fa8f236589d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3b8465b2f42da46dcc82d2b84c363a8a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f8b76036930ff51e9b48e9e7d44c66c5"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "bae47fbfd812baf468b491cca4639e0a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ba3a44567c0cf7ab6363ec1b115e8211"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "53dc9895ab6f9a3186e32f0befa80685"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "78270611092b432a3283c836f06a94c6"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5eaa0e27f8291a31b630c69bce4580fe"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "17307632c14eccc97039e250d5c6273a"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "ad43844fcc6b4a52bf71838614651154"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "e438ec907b0aa09dc04fb94982f6abd3"
  },
  {
    "url": "timeline/index.html",
    "revision": "b145d56e2d8cb54777fcd8b9bee4c4f2"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "f4eec52dbb40e0a17fc7893eaf314251"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "5c2972c4074cdca9f4087023a3fe5068"
  },
  {
    "url": "tools/git/index.html",
    "revision": "86ff332cc04cf34988462279f7927e51"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b9c4e89cccc9c43147427c97cbc42780"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "dc39203a2327e68a68a9807c1a5997bc"
  },
  {
    "url": "tools/html/index.html",
    "revision": "295c4fdea06125a4ab2d6029de5db44f"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7aa56be21dd817869e8b4a7ec4c8c37e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "1d7d2900beed0d3e7341e8ca2a908c67"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "151664bceb90ec990b09462ae84f35f4"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "e861b176bfe66f69c0918d1df191de2e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7563f553d7c1fe05412944cb4219e89e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4774d3282883105dbea00ef7043da6c7"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8f70c09b381786902ed5cad68e4f7ee4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2566fcc55acbefacf8a1b2f0d916aeda"
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
