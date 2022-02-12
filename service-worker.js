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
    "revision": "3f0431b421e73af126d8e494b5be62d9"
  },
  {
    "url": "about/app/index.html",
    "revision": "5c7e46c68f6de6383dac2b592ff985c8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3725ac45de4e2a39337b31a4cee95047"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f6af2f527f8a79651d25b603ba09a1a0"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "593e000f1b6babeb56a15c554398c46d"
  },
  {
    "url": "about/index/index.html",
    "revision": "1aafaa030d641fca0441998cd7f83b18"
  },
  {
    "url": "ai/index.html",
    "revision": "cfae1bcdf482d2c09aec52f17c7f2294"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "599d0c57715a861f3827a9a27a98166c"
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
    "url": "assets/js/116.c2d20219.js",
    "revision": "b4778c27c2103f1d63d4d1cfb47be837"
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
    "url": "assets/js/123.1507ea74.js",
    "revision": "7cb30e21d6ad8a7f2fc17f99e4f8a5c6"
  },
  {
    "url": "assets/js/124.9c6ea1e5.js",
    "revision": "c130bd6cd0d0a0211f9963b1f2d24d7e"
  },
  {
    "url": "assets/js/125.94f0d774.js",
    "revision": "34553d8d219833a6234da3c40c551449"
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
    "url": "assets/js/137.5880c4b4.js",
    "revision": "98e9aae9609e8cb162000f49abae2791"
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
    "url": "assets/js/141.2c54a551.js",
    "revision": "c2290b9cb05eecb0167ca743bb3284cc"
  },
  {
    "url": "assets/js/142.e859de22.js",
    "revision": "3aef94c212802c345b79db44b2c7a9a9"
  },
  {
    "url": "assets/js/143.89f0a414.js",
    "revision": "1e9cf0fcc064bc296c034823315f09f9"
  },
  {
    "url": "assets/js/144.1e79f0e5.js",
    "revision": "7a7650710de294db858a602b2c7487e4"
  },
  {
    "url": "assets/js/145.287444d2.js",
    "revision": "ecd7f7eea9d39edd2575c77a6d568e25"
  },
  {
    "url": "assets/js/146.a426fdef.js",
    "revision": "1ab9b28dfee6cee098a4d50a3127bd3a"
  },
  {
    "url": "assets/js/147.3b0a7532.js",
    "revision": "decd85efc4aff92674e9873e9e600aab"
  },
  {
    "url": "assets/js/148.ad22fd8a.js",
    "revision": "005cc9109c4f87fb299a1d6091507478"
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
    "url": "assets/js/150.adf243cf.js",
    "revision": "9d47cbabb61dab0e307927bbfddb53a4"
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
    "url": "assets/js/208.712dc4c6.js",
    "revision": "18684554073802b6db1f6548ed652118"
  },
  {
    "url": "assets/js/209.8670185e.js",
    "revision": "a47f2d13e9704b99e80af24c4da59ce3"
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
    "url": "assets/js/63.c90f826c.js",
    "revision": "1c365344fd3494c2e9181ed11441f860"
  },
  {
    "url": "assets/js/64.dc1073d0.js",
    "revision": "79d79e1d221dd173499d8e6a6558e417"
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
    "url": "assets/js/app.cd41510c.js",
    "revision": "e71f79c32e931df8c3e5a5a4204dd7c4"
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
    "revision": "f8469107f91f8a9b5316a4b1ea6354c5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9f091fdd6112e2589f43c08c45d243e6"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "dd054e10be79611eb16a4f3d9186e6cd"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0b4a71f60fd9da5ea63baaed8c7c0256"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4c374f078e13bb718db19b71980c350b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "67a35c0939bc00a2047bdda92aa3e36d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "7b35e113665e1444f4db1500177aa27b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7e9e30ac4360f2ecad61b84302bcbe1b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "51d5f9e7edcb1058b48b8956d7e2281d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "95b37689c6970c298506705a7cdbf51e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4f1cbc7b91aa374b2ae3ce16e0377a59"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d2a396e34b9fe1323b177c6ad56b2aaf"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "e83f8eb53d10f0f4e89a6ebffb0ddce9"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "66ff10d07dfab2a29f0b69d54fc9cdfa"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "5ffb3563d116fde0e07bffad7a9931e0"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "cb3382dcbc18c958528d344da67784ac"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "f6663954bca4d7fe9801366d17d026e3"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "88363cdbddf699eea105deb7576f4b15"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "fdfbc870c5aa1eb3a9cfd79e8dce4f15"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "b3b9019c0ec0807fbdc1d9da7baada79"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "360c9b8c2cb16b25129690cc020c26ea"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "8135b553b60922f44448ee6f2f7af2a5"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "6121cc79732ec3d1b0a4004a27cda865"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c20c0efc622148fe68f79966a0716cf7"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e25e9e3933246a2fc454b9de0a40208f"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "c61f0da7e0813af28ecce4a2acf505d4"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "19d65d6b3cd6ff10adbc30a5a338ddee"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "527b1912e26ff27e9c07271fd3dcf1c5"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "8604354791fec716f69176ec937870f5"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "89407ef734d71862f0dcbebd94d94a49"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8c299593dba01616e8112cffa19cf323"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "0ca10277441a622af198a8e791b2e670"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "39119eaf6b5a272bdbf9af0a39903caf"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "5febd095aa342a61a4764f395511b402"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "0cc236d27a307ed3424daf48712bd606"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "489f9fc730b803b6fdd53d48fcca71df"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "90123ddec733894295618a868e5b3f12"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "4040c994d30c34620583e4fa4b00fb80"
  },
  {
    "url": "basis/index/index.html",
    "revision": "470d36ede55e49255325d1c1b371944c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1a6addca2e4cf40214d0a6962ae89925"
  },
  {
    "url": "book/index.html",
    "revision": "486b8a3b8c060259c6d3ff572d09204f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "56f4fb3a88d8fd5bb4d15348ad994b67"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "936fe3e976569937b3821a079676778e"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "655293a228101f489f9ca82592293edd"
  },
  {
    "url": "c/audio/index.html",
    "revision": "f1c76841112b425f29968b889e9dab1e"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "dc9f1de6f63b352d18e5697105b00e59"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "65b78b377be12fd0f1d763db4d76262d"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "d478fa1b01bcf4ea27f110920cdedb51"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "dedb4f4caeb2b4e68b23387d7622877a"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "df37dde24d20ee43e63b93e526e9baaf"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "8ea8252b198b70034f668566705efbfc"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "a80b119f16b244cfce02012175784823"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4b96230a90b8491b4a9b222abe4e3f52"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "cd367b711e66791cdb3730913397a881"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f344e2152a05af18c21f6a2b51adc40c"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "8b448f42515e9a396432e263f12b071f"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8f8d5b025ed4f66d3501f88357ed8e83"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "58527d922bbf179f3a57671bddbd6a9d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ae61fdc8ce50646d9201318b9231737a"
  },
  {
    "url": "c/program/index.html",
    "revision": "c12e8cd60e8289e38c2f5a531580a773"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "0b5380a63ced3a080a54ac374b0f590a"
  },
  {
    "url": "categories/index.html",
    "revision": "a7d3b97ecf97641a8553f22a5921c48c"
  },
  {
    "url": "figma/index.html",
    "revision": "eb14d91a54e8732cb6c98a7774c398e6"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a371487f837046deb8af070b7c24147a"
  },
  {
    "url": "flutter/index.html",
    "revision": "19cb0faa7e27b49309dfb873ef44a333"
  },
  {
    "url": "flutter/point.html",
    "revision": "eef75bfffe70e708ff525fa77de52281"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "626bf91c3ce9ac2e891907f5c5dd8055"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3c270cedb3f34aaa081be98175f61808"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0bbd1c1d390b33f02c4012eeeea2fe06"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "53986981233d2ac17bf66736c6d0c098"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "621994f09ec5ba781467f93066b14d3d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d510126e1ef5c16576eb96480555bb50"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c985f460dc5660f23b5acc66e5065ee2"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0ddf44b0322ffb949481ba6e08e40539"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "0be001f1f8d12839c281eaed35e8feef"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "c2584ca17383d73f3988b78fd822c2be"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7525a3e97d7fa8a7db4f5a4bc970489d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "3aaa73cbe2d07f1f5bae8a003104a797"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "2c7676ea18b29f2523a3c81794d91092"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "5e6973b40962919e54588c917c7339f2"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "3197baef0a32f15726076a112cedac9d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "3ac9a119dabf7d5ffbe5998c679cc37d"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "85032c3c35bc16269b6fcdc92bb6c94d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f31a62e30f3c607354ab05355205bac0"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "33b9a56d9c0dacd8b20abad888dead19"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a994a9dcc1a6894a6af15e389144822a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "88deeafae5bff393e5158f4857969bf7"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "1fbba526506c5a225519caf65a98f5b9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "4207104a0528fc88ebd17fe4b9215d5c"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "9751a9524d5cbec2284dd519d7571753"
  },
  {
    "url": "haskell/index.html",
    "revision": "d058a571ce4d78703b51bfd6abd53256"
  },
  {
    "url": "index.html",
    "revision": "68f4b683afc40a6b75294da59102e5ff"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4c642dbe944df85b666d6926ac526b87"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "b4a9b1bacecb14f14d814cc2f59c58f1"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "fc5c76a5724ca42f5d8c1a752f563491"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "1007eef7a7192a26d51f629bbe61cb14"
  },
  {
    "url": "python/index.html",
    "revision": "5d99276bcffef1bef5ee4f5f85f51164"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "f4dc77a2882398f7f16ad17f77c86028"
  },
  {
    "url": "read/index.html",
    "revision": "0598f069ea02e4747ebc93d24deb79f7"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e589ee785ee22be5fc96dec0ea796a2b"
  },
  {
    "url": "swift/better/available.html",
    "revision": "0a1944d0fc9687f60bbffcb074a956d1"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "5cac3b67a43b5e817ae7c447e1dbf191"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "65a6b84d3e88befac65633e398573a1c"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "e331faf49834dddc6bbb051ba283b337"
  },
  {
    "url": "swift/better/di.html",
    "revision": "0c975992f4c8338f576436b392115e86"
  },
  {
    "url": "swift/better/index.html",
    "revision": "8488436edf240bad5b67304e19445699"
  },
  {
    "url": "swift/better/last.html",
    "revision": "72f08bc5809a163a052873c960e98c80"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "00541e366d365d6396c8b117134090a4"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "2cbdad89aaedd27a14936e71cfde4c29"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "eedad2e815b55f59288c0f69f0969f34"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "6b200fa5d7705d1dfb2fb6e8f28c6cfd"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e416155a0bfee3a15141d05ae71a33bc"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "18ac1a7097c47177b6b41fe2f740fd65"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "333b882c139b672b4561b244dafd6650"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ec1fc1cafe095ad15bb3a6ffccef761c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "200be1b38c5bffa252d0f0165573504d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "15c4a8be1daa09f58c7338fa6d8bfe42"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "2937720bce78be39bf65bb728265ffc4"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "d9d4670be5456764f788efa0ab3d78f8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "8d8499538861e088cb49f6823a8a98ca"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4b8bd06f7d60cf8dd1e856575ca4411e"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "4367d74d8f722d921c8e8d527d657126"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a76f4f7110e68e9a3c7e6011e4550771"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "2e41291a5e9735d2851b1afc96f0f4e2"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "ecae5f532b75dbc5256d715411a4a5ab"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "37b609360172073adb6bb3fdb06f7637"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2fb60cf356a6a0adc31c5e804724fa08"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "d6bb60f12463ea98665d292dc2ee7873"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "8451631597735268cded85a05d83fc9f"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "89bcd0a04b94d852b940bd5c569f4eff"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "375331b34de52c8c75b182b125d70181"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "ade873e10693a3979f11bf829138c7a6"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "c037324aeca5f3085049038a2ca0daa6"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "ad3d82a75d2b8e9e7abdd22f6786561d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "b15a1ccaab2c6c64b1df8d2cb300257f"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "0f737770e17e24da9707d3621a42b501"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "890a8c0ab5c3d1851fd372f10c35d027"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "47f76e94f9c493d2077bdfaa08239350"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "d111c0df1462cee32b07110d48301320"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3e0a7bfd0b444232d06b33785a6292f5"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "8834942665ea5ee7bdea8d2cb61ad2c0"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "140c44d3dc95af8a74fd87050facd6f7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "990f28b3051bb2c53866b9bd7a6e2fb0"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "9ed66cfcff802ec9d6720aa5e236fbc1"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e352a2862a6468ac0f10da3811b37108"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "70bde95740d832b3b88e0e21f3dfa6fd"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "daee3fbba82afb997bb137c392ae6ed4"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "d9aac26b8470db918f2d0ed3b9eebccd"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "f7af7b77fe1e9ade854223ada50ea627"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "9c0dffb6f62e6f031bd64a65e104eae1"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4fcd7c3893b0d277fcc5ec32d31803a0"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "41b67b141cdac5f98dce3aec3f820f58"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "cbc79801457ed25d7da7407f0d6dd117"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "891bb678a3bdd81be018c41bab7af223"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "e909140a799fb866001a8821e11eb7b8"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "de39ba0bed1f7d77f2a9ee291c0c141c"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "0643d096ab54fe02f43e5f985a69be05"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "7b3af408559d65ba54e496d09e5ba94b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "d7d6925e12174bede9baba3d2c80fb21"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "052671da44932319751105a5831f3b75"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "5ca3dfa28dcbd47311c77900a241f934"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "8de6ef7ef92aa357187d0dc36f1f5e0d"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "17ff0869c10507fcb76b026992533f38"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2817b5456fea12e5c33899648b42ebd4"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "2d467919d5862e9904a14381f5f3152a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "3d3046d79051b2cd0703a2d3fc5032e9"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "6e922944d012fe08fc4360ff0618037c"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "02fd40c9c9b9f961172df3ac3efa2d25"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "3034deaa2c12b2541047ab3ab7880c13"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "a79cf63718aedee6794d267912eebd80"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "cb426eada526baa776da67ff80990979"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "10b65610d95aa55b455756a239385206"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "b8841474632460aad9477c535587c7ee"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d2df2202497383c2f01109aafffb4734"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "376f18d18d0573f1d9255cce310e9d33"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f013deff5e0738b94f12466f240b480e"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "ad6bf347346240d930ac60a9701f6de7"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "34d65e63219c22a7ba03ea9b45ffb78f"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "0a1f6deb29bf85e739fafdfc8f847827"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "4564721b9538de17184d13ff3674f0d7"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b8bcfbbd21bf411c43b82c85895933bc"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "6a72993f23012d4a5c72a5ca1fa7a3ed"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "c494314208a5a5357097cbede5ce0d70"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7fee1ab51734d70eb125b06e51c4abf3"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "fa7ddf7827f9011962dfe30ad3f0bb02"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "da627c3c8156e5d06679783b4c18b65a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6ada518f995fbf0ff1ef176884a85989"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "7c941a6c1d58fb87c4a8d86066ff46b4"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2dcff76de18e09c54231d801d27da9d0"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "01dac16c2ab754a706347e251c261410"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "440c0a91c34914c2178d94ab39255bf7"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "0374ab09049df7d037ca7c7823507a15"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "964522793cd7a2af2a9f110b0b9ffd7f"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "eb17d2a4490aba8b296a0cd39e96c912"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "fcc0a84c40779b6759e2119c46ccb28e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "d49e0a9da053855d84a80a95ba23cfe8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4f77127be68cc6d79b684c6e7e2c4e42"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "96937c873f32e7b1e12fe6bb5e7a69ae"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "170dd488dbfe7e10fba13b86c07cdb8f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "c345ac553736ccd4893c87e990d9fb17"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "129c68d8ca410007e272abcdb3f68459"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ac4dc565cb3fed95fd0915cd4659b535"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "af0c4ed0cef3de61491399eb15b8c1ac"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "966d4afd9d316c337abf2de37cd41749"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8a8496ad0fda50b9f14188143fd9ddec"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "6f6c4155d27eef8920d9a0f8ad00dbb1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a2da2cb3075d5f54b03d5d0dfb89d070"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e40cef8a225df82ad5a886db272fa327"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "24a577f218e1d39b07303d89d7a51100"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "acfe97fd7f63da12f9492d40c88e0d15"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "7f96a3de36bbc4a8f471e02393b3be61"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9ac221a0ae14f370af28bd0e56119275"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "46f6f96ba3be58b8240ad162c2dc62f2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "19361a1b22f4d59ae0fa79e465b4ba7e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "716e4a6c96c0cf7f1cf509e91e6d1786"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "e7f01a32994f8d3dec288f2fac012445"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4f7143b5555cd03d54258331b96f5e0e"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "f4ca8d6108710b1687010a5392bc05ee"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d44797a644c85cb1a4520413b189bfb9"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "5fe0221cb50f91de6d650242c8588f88"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "95b2515bc28cd6d069381c75fec68ba9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "363a96a34edf75a263c6a17529ce4a84"
  },
  {
    "url": "tag/github/index.html",
    "revision": "a7530e04ca58c40fa69957d3ee2381ce"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "17ae69db9c45fe568689b8c317601cd7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a0869535039a9c3ea8eb420bd5987ca1"
  },
  {
    "url": "tag/index.html",
    "revision": "756692a796d9781af24f98484fcd4523"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "211493dbc2b2a83001c50a6a5caca77e"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "4f001008184bcee0bef3240df3bdf36f"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "aa2f1b8881e358a13ce16c3c542209ba"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "82762db8effe424fdcca6921bf051cb0"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "1cb9fdaf416b70e94126c40ffcb0801f"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b0440f305eb0bb9d00792fbe7bd1ca96"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "20413fc7954ba97b5cc40947e4ea0820"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "e1c65a02b2636490214f0ab4f0233b7f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "aafb85ea35283823d5e2eca31026a729"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8a8f23c5cc93ecae88d862f649994217"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ed63ebbbfba16b74804498391d6afc94"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "d759c5e8d83eeea9d0454cb5ad7f2c04"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f832b75473932c776a5fd76de29f03f3"
  },
  {
    "url": "tag/read/index.html",
    "revision": "e1feecce0b3a2bb5116591e1941164d5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3b51e95aebd7920dec586654ca8710a7"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "49785ca286a7265cab357789b0a57018"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "4d84443233b446e4340a93e82feda83d"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "cf8a35df1893ac51c2ad7a0de89fb304"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9e385958824bcdd23c5b3841a4214e4c"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c5a42e61a50feb94a004ad3078331c7d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f6bfccdc0c5beac777e73ce02e6c5626"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0882a31a0096c1947789a76dcb92f302"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "bfe075b6fd562f52859a9eb466f87d12"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "420f64a821b66aafe62e46d0a9d90e01"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "d9508188e01ec8237e4f0d793b1b7904"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "fdb6864575fd2f54f6b8a5aaa9e04e7d"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "edb772aba0847d0e33ee2d8e0003155a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "27cf51a2d63fd3fed5a63234570a34a4"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "0b425dff9a7df2e0a968fbd12a0fb7ab"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4aa096881b5cfd24c82772f0095b4aaf"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "bc463e7a5f50086f612fa921f3aae600"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f2650dc58b966cf19060730e7bb16073"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "8a73459183ff45c04253f6233b2d167d"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "d5c4341235bae3b470b3be691aa845e0"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "5c04d5f38237e15c8508fecd59634d95"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "01f7da43f5d64fc2ffd8ec4077c4eed7"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "3901593503670a9c52cd2659a7d1890a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d2cb8faeef419e3012c5b784518533c9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "94fdf9530c579067763fbc9e39d26f21"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "ddeddfd9f6f875cda6cd468b15683743"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "8ebe0d3b39af1e637b7329faf4dea963"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "490ad3eb14dd4df8e55458f7e84d15d6"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1ccd97d2c0279901c611a377d9517746"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ca05e71429b6f7b69996674dd1ec4772"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "38c76481b36597719150d0ba143bc6b4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "12fac39fcdf5f4168c4ce6c925928fc2"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e6fd8cc91a5dda96a23481e6ebe224b7"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9de6abeecb5b65567eb0691f2f217883"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d2d70fd884823e06e41bd83219b9177a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fb5cf866a68d2ca9d8f318c835da8768"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f3f15c43a520aff02c753de0f91e6add"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f2369143d4fab6949c53a56ae392f9c0"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "293310fe2b8f3c428eb7e5b098987e83"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "0bddacb4e3be9ffc3b17cb23e6a288b0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ffbe6d82d25f20a7f0289bbff61d8f6a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "68bf1ed4b35f41b135ab3e98552bd39a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a64fc7a537fe7bed37a1b37f973a177e"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "10d3a525bb224dd5ffd29afa983d42e7"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "8d48ac106bd4bf338b41525484e35042"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "c0bedb3d913c4d152afd0310a7107170"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "6b2b459d6787d6105764cf4e5ea47eae"
  },
  {
    "url": "timeline/index.html",
    "revision": "0df181e3af49ea3ac65262036c6f3435"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "c96d857ff361974a361d665a6921a751"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "709d6ed9e91dd8bdec7a2b063a3f82ab"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7a147b4eaa79abe3fe4c84915c01ec7a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7856600841fee4fd9ace4ba054b9b0cc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "586d1d7524221b77f4f129fb1b283c6a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "e1c84bf6871d00c7186bbb6973f4a3dc"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1b2ef6fa61b5714db5be05927f7d2be4"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "faeb084641b0e944e6800078b702988d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "7631dc4febb5f74cf1d7b82432c24308"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "4ffefdc06ce659081d2c12de6346efa0"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c456b1a9f7799646553d5f4cf2297ce9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6c80060b7ee587a2618e120005975dba"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "81d2b1fab879e79f1a4c12221504cd19"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "81a9a761ced102fe5b4157e997a57c90"
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
