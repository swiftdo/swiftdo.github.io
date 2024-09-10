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
    "revision": "8c8a6a00830a8df32f4cb06efeb3d6fb"
  },
  {
    "url": "about/app/index.html",
    "revision": "1ed5c03103362d878e9d058eaf6aeebf"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4ccc4e1ed7b8aaaf4d6c9c18a17daef3"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "338f235755a2e2fdd7daaa092f81fdd1"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f67d43d34cf6ab1c4bcb375b44178622"
  },
  {
    "url": "about/index/index.html",
    "revision": "e72eb626997ea5ba42fed8c25b4b043e"
  },
  {
    "url": "ai/index.html",
    "revision": "f824fa368454d7fbda7f12fa08d4e5e2"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "33534da6b056fcc2db851a847ab2005a"
  },
  {
    "url": "algorithms/index.html",
    "revision": "3ae890d2c795a7f4943f732ef0131190"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "32c1b72a2a5f57aa4ef7e0ae4cc9a88b"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "af25f838e1e4f8a4a959d84b05cbeeaa"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "834ed8693d2995b113083bcf199d452d"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "70b4032af9380b9022dd0d6cbecdde9d"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "20126c452013e6e7dfdca1b8004bf6ba"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "0ac33bb7175e54a549efe8684ebae175"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "e9d9ab4e7b0217ba97ecbecb21e6b7b6"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "dc4a9a28a1d8abc3959d39a24dd4d071"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "8457de6a98d1e34711f7281297884a94"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "395bcadd7793445a45d6fa81b6f813b8"
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
    "url": "assets/js/102.b46b51bf.js",
    "revision": "3c7770621a5fe72e47fed7198a82da93"
  },
  {
    "url": "assets/js/103.79a41c11.js",
    "revision": "b4bd2e97d6cc8c21eaae9e4db7d36de1"
  },
  {
    "url": "assets/js/104.09b129c9.js",
    "revision": "06b37a24806127065e169db7d5781639"
  },
  {
    "url": "assets/js/105.c4321469.js",
    "revision": "0f7df1244f8fd114792f53ccc1e48b4d"
  },
  {
    "url": "assets/js/106.32772f9d.js",
    "revision": "04fcf9b976ea273d4b53ae322bc1523e"
  },
  {
    "url": "assets/js/107.7a28f8f4.js",
    "revision": "d61fb0054a5f74c6684329a99ec10ba4"
  },
  {
    "url": "assets/js/108.f84fcbf7.js",
    "revision": "ac2fdfb3ba7cf96772b7f59626d19fa6"
  },
  {
    "url": "assets/js/109.449af9f6.js",
    "revision": "e8c56c75d2c1d9d9a664881c2865b4bf"
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
    "url": "assets/js/116.8104d3c5.js",
    "revision": "292ab9dedb2118a26d173dcfb3b5a8c2"
  },
  {
    "url": "assets/js/117.1e2f6874.js",
    "revision": "78b037a72524a1f66c716e6d8ce81659"
  },
  {
    "url": "assets/js/118.85e80792.js",
    "revision": "8c4a6dec7750b9d2dc4c39f1d4e61719"
  },
  {
    "url": "assets/js/119.06a975cb.js",
    "revision": "fcde1e4bac7b5e0cc8f480ceaf7794db"
  },
  {
    "url": "assets/js/120.ddd9c1f8.js",
    "revision": "6c5deb0cdb3e2bed2576df391518c96c"
  },
  {
    "url": "assets/js/121.224c8598.js",
    "revision": "d468cd62288b1bcea0bb88a88d8267f6"
  },
  {
    "url": "assets/js/122.a990c7c5.js",
    "revision": "768ee13297f68be96a0e41eb16bd40a1"
  },
  {
    "url": "assets/js/123.0fd62d65.js",
    "revision": "5b9caccf8e35e876aa4fe36ce0548e68"
  },
  {
    "url": "assets/js/124.5f2ae79a.js",
    "revision": "01ee597235ddb43897c008eb54988f80"
  },
  {
    "url": "assets/js/125.46f103a5.js",
    "revision": "2938e8865791a7195dd8932f4bbfff23"
  },
  {
    "url": "assets/js/126.e309bd87.js",
    "revision": "da0b963b677fbbf1682e03f346212ce0"
  },
  {
    "url": "assets/js/127.5a1d09ed.js",
    "revision": "6a75b45e3013ae2ab96b11e7c393c57b"
  },
  {
    "url": "assets/js/128.9b75598c.js",
    "revision": "e7000c5e8f47c0e8e4cf0425b64db5f3"
  },
  {
    "url": "assets/js/129.d438d929.js",
    "revision": "025f1ad81050492fbe880697df033ecf"
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
    "url": "assets/js/133.349fd409.js",
    "revision": "ee20eb3864fccf9a98183bde5d176303"
  },
  {
    "url": "assets/js/134.ce8438c5.js",
    "revision": "bc3fbdd22f33f3b9bf2e7b571f6414c0"
  },
  {
    "url": "assets/js/135.a2ade02e.js",
    "revision": "d612fb119d7066cd4ec9a09e8243f208"
  },
  {
    "url": "assets/js/136.64c8ebe7.js",
    "revision": "18707cf4a9028258e92317610d39f852"
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
    "url": "assets/js/139.0b1649ca.js",
    "revision": "075f3a4f2c96dda39a815c18b3275043"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.b67221e3.js",
    "revision": "643831ca3fe2c1ecdae5d8408bccd4db"
  },
  {
    "url": "assets/js/141.bcf8eea8.js",
    "revision": "dc3d54a280d4679edb97b00a4a1d12fc"
  },
  {
    "url": "assets/js/142.a20bee16.js",
    "revision": "8b2c9dd977ca8aaff4de226c8c560647"
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
    "url": "assets/js/146.e2645faa.js",
    "revision": "fa9d5e6f8feda0a6b41ed850084ae4f0"
  },
  {
    "url": "assets/js/147.c181d20c.js",
    "revision": "dabfb1117f9ca8ca8d99f52f65e9c7e6"
  },
  {
    "url": "assets/js/148.6fd88875.js",
    "revision": "156e6f2428562f35ed94ce866c076bf9"
  },
  {
    "url": "assets/js/149.5132f468.js",
    "revision": "a5837ad27edd9f1b402719539ff8c22c"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.847a4a86.js",
    "revision": "76f797d664d7977e997ac787f01fe1d2"
  },
  {
    "url": "assets/js/151.59d9111d.js",
    "revision": "ed12d7d03228e62ebbadaea3c9ea61e2"
  },
  {
    "url": "assets/js/152.68885955.js",
    "revision": "addf224d28d1c196834eb36f3878c6bd"
  },
  {
    "url": "assets/js/153.59ee2a3e.js",
    "revision": "3347ad18c01a64a858d8cbbed0625bb8"
  },
  {
    "url": "assets/js/154.52a322df.js",
    "revision": "22c42ee2dba8273a35f7058b027a0fd5"
  },
  {
    "url": "assets/js/155.6c7079f5.js",
    "revision": "2efc8ecc45bb92dd07a7f66c4dda770c"
  },
  {
    "url": "assets/js/156.965894fd.js",
    "revision": "4316fdee41e8e8d269f6e22a09197f3e"
  },
  {
    "url": "assets/js/157.08d92fd7.js",
    "revision": "0f5fd8f49215689f768c6d41e310eef6"
  },
  {
    "url": "assets/js/158.5d95ab46.js",
    "revision": "c11548bc0789b54bc7ab69f8470e8b70"
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
    "url": "assets/js/160.1a6ea121.js",
    "revision": "7df83dd48178cfe85bb036464d5ab984"
  },
  {
    "url": "assets/js/161.11d34bff.js",
    "revision": "694349042dd8748f734e734f02f9a9cc"
  },
  {
    "url": "assets/js/162.784fcd87.js",
    "revision": "1174c171c01a30fe1668d8abc37466ed"
  },
  {
    "url": "assets/js/163.0a50e560.js",
    "revision": "d06b9ebb225f8a91ce40c4f4edb0d8e7"
  },
  {
    "url": "assets/js/164.23cf750b.js",
    "revision": "350e066562db98627e691ac4859f8446"
  },
  {
    "url": "assets/js/165.829f02d1.js",
    "revision": "e3e1d26b8d0d4ae780092c9eac84a42b"
  },
  {
    "url": "assets/js/166.852c20b4.js",
    "revision": "78c61d270aa1c64bf5ecf0b43b142e57"
  },
  {
    "url": "assets/js/167.919323c5.js",
    "revision": "99a39a5a0773b6494ee34ec46b1f116e"
  },
  {
    "url": "assets/js/168.7300d5be.js",
    "revision": "f2fe9882cbeec852f42e15f827191d51"
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
    "url": "assets/js/170.2c1f8e23.js",
    "revision": "936bb9eed60c889612ba6ab7f043adc4"
  },
  {
    "url": "assets/js/171.41c4bda8.js",
    "revision": "80a2071ef28fc474bdafca6d66cd3f2a"
  },
  {
    "url": "assets/js/172.1a565090.js",
    "revision": "94871d4063ad579efb8ff2d4d61bdd21"
  },
  {
    "url": "assets/js/173.848c2416.js",
    "revision": "14755319295124974a125b1e7af66369"
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
    "url": "assets/js/176.4349b8ee.js",
    "revision": "61a40792646a4321b4fbcb1db7c0661c"
  },
  {
    "url": "assets/js/177.4a3c2cef.js",
    "revision": "b126eb512d23228c134044d0bb11a5af"
  },
  {
    "url": "assets/js/178.c1b37aeb.js",
    "revision": "33c3fffd53861c92a73577c1a3ab5194"
  },
  {
    "url": "assets/js/179.e9f0fcca.js",
    "revision": "9babf94eb2475fe8c99c791c31666372"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.1acd8a12.js",
    "revision": "177408895aaddf2f0ef191ca7eca85a4"
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
    "url": "assets/js/183.8f6c288a.js",
    "revision": "60250059e898409d4f173360eb7150c5"
  },
  {
    "url": "assets/js/184.cff7fd75.js",
    "revision": "8d5fde27583fd2c3369dfc78c27bc5c6"
  },
  {
    "url": "assets/js/185.42fdb842.js",
    "revision": "e6cf35c4335ea0eefa70b42cd8028fb9"
  },
  {
    "url": "assets/js/186.bdb4b844.js",
    "revision": "2a8f839b4e5837415c9e978cfe7ccade"
  },
  {
    "url": "assets/js/187.72833182.js",
    "revision": "9d9c94a33995cc459a7e3d149274c9e4"
  },
  {
    "url": "assets/js/188.84501b0d.js",
    "revision": "1b4219a2124e412acd15d953b581e909"
  },
  {
    "url": "assets/js/189.74546cfd.js",
    "revision": "be65779f4e7195821cc01a08de424b22"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.d6a6c2b7.js",
    "revision": "9c9ff2487dd9e7263d9d1f8457ba8556"
  },
  {
    "url": "assets/js/191.aec20d18.js",
    "revision": "9236f203827e5b4066f041c0e06446fd"
  },
  {
    "url": "assets/js/192.3901eb28.js",
    "revision": "20e65906d962f72b6c5f27da9e9bdb4a"
  },
  {
    "url": "assets/js/193.d31d62ed.js",
    "revision": "d020006d5f496d3e3c33a7580badec34"
  },
  {
    "url": "assets/js/194.f142905b.js",
    "revision": "b289f73d64ac391522727d2a4b8ff70b"
  },
  {
    "url": "assets/js/195.91cd9cb2.js",
    "revision": "4599f5b4b34c984a78c3d7a66238ef17"
  },
  {
    "url": "assets/js/196.c5103a31.js",
    "revision": "3159d778014084503a44f848af18e65f"
  },
  {
    "url": "assets/js/197.0bb0f20d.js",
    "revision": "e24983b5d1351d6c880a18207ef85fc9"
  },
  {
    "url": "assets/js/198.fecf5192.js",
    "revision": "d629fbed8030a178badb54e718a338e6"
  },
  {
    "url": "assets/js/199.02d47045.js",
    "revision": "b36dcb0d288cb01729b72914e71e7386"
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
    "url": "assets/js/204.e84ab435.js",
    "revision": "96ac114f275e342751d05ca79a0904de"
  },
  {
    "url": "assets/js/205.45730482.js",
    "revision": "aafdb95e9b8e6e0728afb7d03c9a4b68"
  },
  {
    "url": "assets/js/206.a6563b5a.js",
    "revision": "6db9d4d2e023c9d036f2f953c929a7bd"
  },
  {
    "url": "assets/js/207.1f3abb66.js",
    "revision": "42a589641b566e2fe9beb3055420032a"
  },
  {
    "url": "assets/js/208.0c7b8a25.js",
    "revision": "c2e896cd07c30193736e46955a51aad4"
  },
  {
    "url": "assets/js/209.740f8663.js",
    "revision": "f4212ad78352110d3c9212ce9b00e52f"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.007c4199.js",
    "revision": "2882790ee069cbe492898ee769131698"
  },
  {
    "url": "assets/js/211.7586823d.js",
    "revision": "1492f8f27d40850dffcd60f1644b1497"
  },
  {
    "url": "assets/js/212.605bca06.js",
    "revision": "f6519b7f1e98a8cd31a41356229f03e9"
  },
  {
    "url": "assets/js/213.fc953caa.js",
    "revision": "c48def5fd3e488044e1ce6895d6823d3"
  },
  {
    "url": "assets/js/214.f41131b4.js",
    "revision": "db91799cd1af68c563d78147cf08e70d"
  },
  {
    "url": "assets/js/215.a7165a8c.js",
    "revision": "d62c3516d1ef74759a9810c86099b560"
  },
  {
    "url": "assets/js/216.5e33ad78.js",
    "revision": "6f0692a3c660c070922fcf7dc7927009"
  },
  {
    "url": "assets/js/217.563f4cb3.js",
    "revision": "b5f822775291fe97fdf2a4801c280f6d"
  },
  {
    "url": "assets/js/218.c633ec8a.js",
    "revision": "629ba3d1ce6cedb05d8ed6d031bbbda8"
  },
  {
    "url": "assets/js/219.379f5a01.js",
    "revision": "6afa662448ac5b14306ac2ef978184ad"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.e31397a0.js",
    "revision": "c1cfda67f42799fcc0d021b59234314a"
  },
  {
    "url": "assets/js/221.9ae52e68.js",
    "revision": "66c7368ed6680bf5e7f34ccceb0d363e"
  },
  {
    "url": "assets/js/222.e0dd1a0e.js",
    "revision": "77fa2399c2d5bbdecdde05ff358fc0c0"
  },
  {
    "url": "assets/js/223.fbcfc72e.js",
    "revision": "af2ad5864aa7265c87007f758741bd1d"
  },
  {
    "url": "assets/js/224.be38ab9a.js",
    "revision": "f0318befba2b68935500dd4b5128234b"
  },
  {
    "url": "assets/js/225.f40b8c6f.js",
    "revision": "e49ad7202c80af59f6e7acf43035fc74"
  },
  {
    "url": "assets/js/226.0486acf7.js",
    "revision": "58d7a8dbad20f40b80916f238109d303"
  },
  {
    "url": "assets/js/227.55f6f617.js",
    "revision": "897fa8514d705f65b598c75075557332"
  },
  {
    "url": "assets/js/228.8ba2a3e1.js",
    "revision": "c2fb2ad96d5807347bf2cc5a07156672"
  },
  {
    "url": "assets/js/229.7de4ac32.js",
    "revision": "c911e55077e9a262c72471f5791ac773"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.39e904ed.js",
    "revision": "eef742ac4123090f8e329c7c449b3ac1"
  },
  {
    "url": "assets/js/231.949935e3.js",
    "revision": "87daf84073dada8c4eb3e1420d2b0870"
  },
  {
    "url": "assets/js/232.b99b65d2.js",
    "revision": "8929bc09d90fb04332f158a62eba8c10"
  },
  {
    "url": "assets/js/233.4bf559ff.js",
    "revision": "14f8f5f7779439620dfa28ec0f668b30"
  },
  {
    "url": "assets/js/234.6248072a.js",
    "revision": "39fdeff5ef8fe1a6b28c87c649738cfa"
  },
  {
    "url": "assets/js/235.2ff1f2fb.js",
    "revision": "3e5f570bc09fa377dd6bb4c86bf182e2"
  },
  {
    "url": "assets/js/236.c3f54bd6.js",
    "revision": "d4da96b94ce55e00d157e2ba7ddc0d6f"
  },
  {
    "url": "assets/js/237.f89de72e.js",
    "revision": "74a734843f56e3e3a4a528409af1310f"
  },
  {
    "url": "assets/js/238.abca9994.js",
    "revision": "e779d391751ba34fbf49f0876274b5a7"
  },
  {
    "url": "assets/js/239.94c638a5.js",
    "revision": "f9d0fca5e793a791df9f9efba91a34fc"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.163c981d.js",
    "revision": "d308c9f26d6f64040e7b72e6bd780698"
  },
  {
    "url": "assets/js/241.42ad2e3b.js",
    "revision": "bc670afe4f8da94d92329bf061b89b9b"
  },
  {
    "url": "assets/js/242.a36dc10a.js",
    "revision": "804c8ad6048cbd0a78fe47275612211e"
  },
  {
    "url": "assets/js/243.26ee5e19.js",
    "revision": "4b34e94f6ea1a50848532a2808767b99"
  },
  {
    "url": "assets/js/244.9e9b4401.js",
    "revision": "9955e5ed8c83c3e2b963dd99128de584"
  },
  {
    "url": "assets/js/245.f1e0b17f.js",
    "revision": "46589519f8c023f9d71905d1faaa3555"
  },
  {
    "url": "assets/js/246.bd8c4651.js",
    "revision": "88dddc9206ecf5046d7e6ea5e0125c4f"
  },
  {
    "url": "assets/js/247.38eea1b7.js",
    "revision": "2934d55691d57915d71a524008a7ff7a"
  },
  {
    "url": "assets/js/248.d50e040c.js",
    "revision": "df82103bf6012e3a6c1323ef74b43eb0"
  },
  {
    "url": "assets/js/249.1d013162.js",
    "revision": "13696fe76a07f590d843679a7bcc95b2"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.62f9843c.js",
    "revision": "42dff33b29d4320ee1611ceab350a1f6"
  },
  {
    "url": "assets/js/251.02a8e330.js",
    "revision": "b452f605f2d053b95d3d6a481e4f4281"
  },
  {
    "url": "assets/js/252.a0e4a35a.js",
    "revision": "82302e0955f1042001aa7c5671d4cd3a"
  },
  {
    "url": "assets/js/253.1664fb56.js",
    "revision": "40c43d64f393c043ce86725b1b598e59"
  },
  {
    "url": "assets/js/254.0313066f.js",
    "revision": "792627032dd7a20fec197fd193d448f4"
  },
  {
    "url": "assets/js/255.e10447dc.js",
    "revision": "d93707e9b53c6522110b5d1ed4cdcff4"
  },
  {
    "url": "assets/js/256.45a989ee.js",
    "revision": "7ca8d3dbb398bb39187b554fc12ff104"
  },
  {
    "url": "assets/js/257.5c4a34e5.js",
    "revision": "7c0529f48575354795c09e0e1db627f3"
  },
  {
    "url": "assets/js/258.fe58bb94.js",
    "revision": "c08f28e10f2fc08dde630895ad1846ac"
  },
  {
    "url": "assets/js/259.f02b5a1d.js",
    "revision": "ce4d81e4563cf9d0d0d701c009862ad3"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.818eea30.js",
    "revision": "cbd8fea58bd25d67492e96c20f91cf66"
  },
  {
    "url": "assets/js/261.1b551045.js",
    "revision": "f1f5cb9805c3797af1289ef04f5f24e7"
  },
  {
    "url": "assets/js/262.d219f51e.js",
    "revision": "c150e66698bfe52ee8b84cc4eb53e7df"
  },
  {
    "url": "assets/js/263.ce4b91f8.js",
    "revision": "62cd907c0155f710e6bb194142193bf1"
  },
  {
    "url": "assets/js/264.08ea6815.js",
    "revision": "c7b92d476d716a08873eece5bd12daa8"
  },
  {
    "url": "assets/js/265.7bf53a92.js",
    "revision": "07f3463c90ed9082b3bcae92b4ce52bd"
  },
  {
    "url": "assets/js/266.e419ca4d.js",
    "revision": "24a7054e67111147b923f38a2feee1c5"
  },
  {
    "url": "assets/js/267.d89101cc.js",
    "revision": "1b4de9b1b271420e1a8e00e5a76c8c3c"
  },
  {
    "url": "assets/js/268.5383c564.js",
    "revision": "5b14e8fb6df9cc04abf291d5a21fcf0d"
  },
  {
    "url": "assets/js/269.1ccc396a.js",
    "revision": "1b91a6e63d676cf7f67d6c3b64e1fcf1"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.780c021f.js",
    "revision": "9e6e4c96ab5b8d5c323bf015bb3221a4"
  },
  {
    "url": "assets/js/271.333b104e.js",
    "revision": "d4e8b7c3b619eb73b2109ee76f0cdd00"
  },
  {
    "url": "assets/js/272.715bf225.js",
    "revision": "b17ef5f61a2711d0fa26d126ec125b24"
  },
  {
    "url": "assets/js/273.f654bfa0.js",
    "revision": "68dd3f43c872fa13933253f57cac5046"
  },
  {
    "url": "assets/js/274.7490a809.js",
    "revision": "6fd96ad12b92a3a5a3974de792112eca"
  },
  {
    "url": "assets/js/275.90f2d908.js",
    "revision": "998093602996628d56f08dd242fe65c7"
  },
  {
    "url": "assets/js/276.4d29c0d8.js",
    "revision": "4a87185773e6c8d261ecc519f0d09f39"
  },
  {
    "url": "assets/js/277.615b7e6e.js",
    "revision": "bcd722e0790fbb9142d106d543c1147f"
  },
  {
    "url": "assets/js/278.7174d931.js",
    "revision": "cde7ff7e2c6af9f283f7922beef7fcc1"
  },
  {
    "url": "assets/js/279.995e376a.js",
    "revision": "762600ba95145273de9a424fc499a038"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.abbb47c9.js",
    "revision": "1890f611fddd59fbf7759ab7dd188ba9"
  },
  {
    "url": "assets/js/281.7d86b157.js",
    "revision": "297a2c6ac07d333a01ae717d38e37bdd"
  },
  {
    "url": "assets/js/282.9ee14ffa.js",
    "revision": "7e21abfb653060602e978e056a5fa2dc"
  },
  {
    "url": "assets/js/283.ba67830f.js",
    "revision": "0f70c9a5facf7b77fb6a9b72463d0c86"
  },
  {
    "url": "assets/js/284.614ec0e3.js",
    "revision": "dc62e630a855fbc01f4cf755d7586c07"
  },
  {
    "url": "assets/js/285.cf38bf8b.js",
    "revision": "ab2db4e605dc3497d9040879197d6458"
  },
  {
    "url": "assets/js/286.9f608853.js",
    "revision": "0854dc74cc9c32320865efafb7705dbe"
  },
  {
    "url": "assets/js/287.f558cef7.js",
    "revision": "b22d8a3f9af8672f599fb663bc5a02e0"
  },
  {
    "url": "assets/js/288.2e233fd0.js",
    "revision": "948541cd7b4113ebe6fe755d155a61b4"
  },
  {
    "url": "assets/js/289.42b89106.js",
    "revision": "118a6b662f6476d703dc64d095a0e9dd"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.b44aac2b.js",
    "revision": "5bf09ce563cb023f7e262a1e4ffcd538"
  },
  {
    "url": "assets/js/291.98bb2963.js",
    "revision": "23de441f5de5270d827840adb83e73c1"
  },
  {
    "url": "assets/js/292.a810cc56.js",
    "revision": "e5a1bfa6ff052882b845038061835b50"
  },
  {
    "url": "assets/js/293.11fefe88.js",
    "revision": "10c835692cc76b7830fd389ca9bad0ca"
  },
  {
    "url": "assets/js/294.d6e0de9c.js",
    "revision": "ae71684c4cbab4e1f54956e525c4ae1c"
  },
  {
    "url": "assets/js/295.f9cbdb79.js",
    "revision": "c87d2ea51b43ed5b3c4cd0c39ee37d07"
  },
  {
    "url": "assets/js/296.5a79592f.js",
    "revision": "db1b8a5f175030f5b119b65670d38d2a"
  },
  {
    "url": "assets/js/297.d1e3b19d.js",
    "revision": "e5fa15156d60cbea4e673775fffe8dbb"
  },
  {
    "url": "assets/js/298.fe36e736.js",
    "revision": "374c082bb4bc1ef2059e480888a2fd2e"
  },
  {
    "url": "assets/js/299.f47bd5e7.js",
    "revision": "b093e9605c432350be7fa2a97b95dee0"
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
    "url": "assets/js/300.ae1da5ff.js",
    "revision": "65b8e49b3c0b7533402a641085276b64"
  },
  {
    "url": "assets/js/301.34e015b8.js",
    "revision": "74ee71e583fe85638ad71ded0f556c54"
  },
  {
    "url": "assets/js/302.e02ccffc.js",
    "revision": "1f30752c4b4650820a41128cc88f6fdf"
  },
  {
    "url": "assets/js/303.27cc7f76.js",
    "revision": "d0f8d9b8e4b1411ae1e67307d66a0515"
  },
  {
    "url": "assets/js/304.513c8bff.js",
    "revision": "7d39655c752d4424f3bd5760060adbea"
  },
  {
    "url": "assets/js/305.16886c22.js",
    "revision": "83f31d9c8712819298b83d725a5eaf4c"
  },
  {
    "url": "assets/js/306.01eefa00.js",
    "revision": "6bc8280f5c3fef345a632ec8dedf5f4c"
  },
  {
    "url": "assets/js/307.fa81b3ac.js",
    "revision": "7368b916631c5cda15d33f070231153a"
  },
  {
    "url": "assets/js/308.59d1e48e.js",
    "revision": "4affbf6856c522994aaa2bf21f6a88e2"
  },
  {
    "url": "assets/js/309.c2dc8f39.js",
    "revision": "81daae578cb5e252848fbb7449e3b437"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.3c5aa502.js",
    "revision": "e0540e31019c1ba8d2ae8c1526c6c809"
  },
  {
    "url": "assets/js/311.e6e0a018.js",
    "revision": "03f22d72db468682ba7ee76aee2e8db0"
  },
  {
    "url": "assets/js/312.36d69c9a.js",
    "revision": "f3fbd567a695315405b8c4b5647761dc"
  },
  {
    "url": "assets/js/313.8f6100d4.js",
    "revision": "79419f3d48f75e880a1e6912bd98a1e8"
  },
  {
    "url": "assets/js/314.7fad0dff.js",
    "revision": "07369d8a014ef09a25d6ff20eb75e4aa"
  },
  {
    "url": "assets/js/315.24953efc.js",
    "revision": "c35c4c2ad60386fca27e4fc68ff40f09"
  },
  {
    "url": "assets/js/316.506b63be.js",
    "revision": "641b968803dd50dfe5111b779f1b4237"
  },
  {
    "url": "assets/js/317.cce3b241.js",
    "revision": "9413d43bcd9505b1f3024bd27f56a3ef"
  },
  {
    "url": "assets/js/318.f9d209a1.js",
    "revision": "93e33e8d0cf4ca2b3caa78f1b8b1dc73"
  },
  {
    "url": "assets/js/319.dc581221.js",
    "revision": "2ffb177ae5208658b3e2b919882a6cdd"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.4c0ececf.js",
    "revision": "15a58a6c9dd16514ff82b6ac653789c2"
  },
  {
    "url": "assets/js/321.e05191c9.js",
    "revision": "cae0a096348103399ae696f987a1a3ab"
  },
  {
    "url": "assets/js/322.7c1b3fc4.js",
    "revision": "5396902d3a37e71357fc005b3b103ada"
  },
  {
    "url": "assets/js/323.07fe823c.js",
    "revision": "f219a3b9873497dcc4d7a1fe15127fe9"
  },
  {
    "url": "assets/js/324.766f5853.js",
    "revision": "2dda9ea5268e19dda5e1f85605d35ae7"
  },
  {
    "url": "assets/js/325.2f511e8a.js",
    "revision": "bdc798a0e879dd5e177356b1a6bc550a"
  },
  {
    "url": "assets/js/326.e1b111e0.js",
    "revision": "9dcfab39180253cc6c30fdbb216ca6b6"
  },
  {
    "url": "assets/js/327.90df86ac.js",
    "revision": "d289fe68647f5acde7ed9bbebd401d05"
  },
  {
    "url": "assets/js/328.bbbbbf18.js",
    "revision": "ed160636fee4f0fdb0fc2bc90c365215"
  },
  {
    "url": "assets/js/329.0a297709.js",
    "revision": "0db061ec241dcb794b417241d074a9be"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.eeae67b3.js",
    "revision": "0375fa738ddee1dde9022784ae54a8b6"
  },
  {
    "url": "assets/js/331.1d125e74.js",
    "revision": "add9d68a592b80d9f15643955467fb2a"
  },
  {
    "url": "assets/js/332.c249aa3b.js",
    "revision": "f1f9f5fe3d3bd67ad8f0019917d64f62"
  },
  {
    "url": "assets/js/333.f1728244.js",
    "revision": "5d64bf2d7d055c57e0ac2b69ae702a54"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
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
    "url": "assets/js/40.7d6162bc.js",
    "revision": "2f3d0f35b68e5022e9c74c0e45c5ca19"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
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
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
  },
  {
    "url": "assets/js/45.134dce27.js",
    "revision": "bb716fe40e1dce76efc57d8907d2c139"
  },
  {
    "url": "assets/js/46.17e59aa5.js",
    "revision": "42233b847e88b2112a6dd523e8a80ec7"
  },
  {
    "url": "assets/js/47.bb5eaf77.js",
    "revision": "4e1e15f6ab754dbbdcc253ae10a8d847"
  },
  {
    "url": "assets/js/48.d2b71b00.js",
    "revision": "8146f9d6b8bd201dc923a7fc62f58d13"
  },
  {
    "url": "assets/js/49.d06eefa6.js",
    "revision": "687164b7aae155707e488511cef889d0"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.fc5aca83.js",
    "revision": "bd331f16957faec9bf696a1aef872892"
  },
  {
    "url": "assets/js/51.b7024758.js",
    "revision": "e9904e816d5bbbb3668ab1b1ef10047e"
  },
  {
    "url": "assets/js/52.248c4865.js",
    "revision": "42278aa96e66fb3371250d5b59caa5c4"
  },
  {
    "url": "assets/js/53.b794d099.js",
    "revision": "145a9c5672a26cbb3395a647586a1f29"
  },
  {
    "url": "assets/js/54.e211ac6f.js",
    "revision": "7c6afdf3dd87ec23d01bf1b29c5adc1c"
  },
  {
    "url": "assets/js/55.6b03a9e0.js",
    "revision": "c4c8a8a17e6d9f31c3f9d69b828aa2fe"
  },
  {
    "url": "assets/js/56.7173ead3.js",
    "revision": "25996913a1190bfd6e1a4b32c87d777e"
  },
  {
    "url": "assets/js/57.5cc42a77.js",
    "revision": "4447e6263f88ac2ddfbf60b3036fa5fa"
  },
  {
    "url": "assets/js/58.2b5b0fbc.js",
    "revision": "d67a923fc00b01dd14fd8ac86f6539ab"
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
    "url": "assets/js/60.2848b967.js",
    "revision": "3b7f5018266b716f1be89ecd01718895"
  },
  {
    "url": "assets/js/61.b9e9aee0.js",
    "revision": "f66d08b0c7bfb4a0868c6d8ce8b4ed68"
  },
  {
    "url": "assets/js/62.5ffb9c64.js",
    "revision": "eda124ce928c01a90b01a02630f2eb29"
  },
  {
    "url": "assets/js/63.0f9f6cde.js",
    "revision": "ae73e1f3a071bcdce75b3ebec00946eb"
  },
  {
    "url": "assets/js/64.7cdb7b25.js",
    "revision": "8279edb37cf945e2662b4f3cfb157e1d"
  },
  {
    "url": "assets/js/65.4122ea45.js",
    "revision": "a7e2d4c1736a429e4dde7a2b44730ac1"
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
    "url": "assets/js/71.03cadb2a.js",
    "revision": "d523724d6a3426871d2686a78674449f"
  },
  {
    "url": "assets/js/72.88dae1c5.js",
    "revision": "aa6057dcefc40dec4a70c9a99adde208"
  },
  {
    "url": "assets/js/73.e532bb58.js",
    "revision": "d4091f96d548817a21e6e51725490401"
  },
  {
    "url": "assets/js/74.1d3fb6f2.js",
    "revision": "6827a7a60356749821db3b5138630d45"
  },
  {
    "url": "assets/js/75.b7fa5037.js",
    "revision": "851b5cd9397afc5a0862929f8833dd85"
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
    "url": "assets/js/80.3878b366.js",
    "revision": "10e1a03564ee078609a9a256a71a50d5"
  },
  {
    "url": "assets/js/81.00d9ba1e.js",
    "revision": "8bc8ec82e59220b10ccd7624ab62875f"
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
    "url": "assets/js/84.8905d114.js",
    "revision": "6887ddecbe7edf821e210af4e0d7a989"
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
    "url": "assets/js/91.8d9644c3.js",
    "revision": "7df5335666fb3d296d294004b67967a2"
  },
  {
    "url": "assets/js/92.53f0889b.js",
    "revision": "769b5239a09ae516e41e61e5a720dd34"
  },
  {
    "url": "assets/js/93.43df9f3b.js",
    "revision": "a7fd0d119d05321df88c44de9584cd8e"
  },
  {
    "url": "assets/js/94.5f51211d.js",
    "revision": "ece1e0f6f5fd7d2f33bbfaa228dee5f2"
  },
  {
    "url": "assets/js/95.b88fceb5.js",
    "revision": "8f3fdd267a4579feb0308c58360aa06b"
  },
  {
    "url": "assets/js/96.4f3f6d8a.js",
    "revision": "af72e2298c687c4b9ff289ae8814939c"
  },
  {
    "url": "assets/js/97.06d6e4bc.js",
    "revision": "e04fbb2a1c8fef8f8e5819cb560a3f7e"
  },
  {
    "url": "assets/js/98.af86dac0.js",
    "revision": "a753ce319cb90cfff2179148f5750e93"
  },
  {
    "url": "assets/js/99.905b6ad6.js",
    "revision": "f65e087d304634ce46b6cddc78c26175"
  },
  {
    "url": "assets/js/app.6c1367ba.js",
    "revision": "b8e0b15be3ec74d24e0fd0df412506bd"
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
    "revision": "3271d259df3eece14e6db8815f95490d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "cce955befbc853f6c78bf101c25b95da"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "fa4d5698cde4c03a93b156b59b10f3a9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "21cfd245a256a51740d1aacb89b90985"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "32e1a50c01bd3365bfc374ffd699e9e4"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c9b42c5b389559a0be356d3fe7980f02"
  },
  {
    "url": "c/audio/index.html",
    "revision": "15b1e02aa011e3c0256c3971209a8434"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "7b50663b8f7c3a3ba3f840a3c1b5d5b2"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "696b772dc09707b28e213e475202da5c"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "8eba8f3852ac79fdcfc496d635a3153e"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "c0e8bbffd8abfddea46ead9323429af1"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "bc7fe5a65d29bb1d59a226e63c73eefd"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "aaca166fc0d55f6e478ad1c2002e14a5"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c4f63e29a36374d0286dd7f794e5bad2"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "0b411dd7a54582f477a2de177d8f20b6"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "104e3bdef78b05dbfbaa754ca60b7c03"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "dd2ab91ab777146b4fd7466a5a4ad73a"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "c42a0abf037088cb8617c23761220114"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "618cdcf57738acb203088b9ee9958f9e"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "5f9ce0038964ec6ec679e0f6c487ca91"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "2fc30b8109c2758c672508b117fffed4"
  },
  {
    "url": "c/program/index.html",
    "revision": "c22c04551b64c8157164b8aac5cc5443"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f5569c48446c1f357a7024e90412f4eb"
  },
  {
    "url": "categories/index.html",
    "revision": "55fb78fab203026b88098467560ae882"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "461fa7be09e2ecf8aa645e9f19f4eaec"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "7f4fee35b82e805eba08138c0e402b4c"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "f624425ff03ed802003ee9279b0e14eb"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0b1383f2555d5b33dd0b9180e8593811"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "15fdbefd86546c5d21dfc47a6839b055"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "6610af1bc12271042eff524152d9ed18"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "5f5d6c6bc3a7be991f9ba98d429483a7"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "edd3ced4782a3a8f5ea31874e38b615c"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "c350ed67e49e1683011b90fd75a94c02"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "a8f81abeee7304c249b826aa8606ad4b"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "d60bd3d60a5d177268ac42e83e07e9a8"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "11472cdad84b26133079d2cc65c52e95"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "6ae9cfcc13d67a9bbb2d6a94c6805f2c"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "f617559a55b5e79e46a0c66cf906402f"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "48f1ef4266e4d8accb297eee9ff2a873"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "ef96a40d91c8aa7a34445c7964f0dcdf"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "a9bcc879d89ceffeac432e1833620db5"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "d5df93c2e64fb477bdc99158fad0776b"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "1e1819c0f2c913d64825d56a0ef4c76c"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "82c2c10fee3698ee7b8ea139f0ad1084"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "25e18421cb441796c54f1d886f61bb54"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "0537c3789552c21292945a4aeb6e781c"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "7cc622fd6ab3692915b7b56ba52f9f6b"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "d76f5d30b1242e3dd9f242d9f6ba856a"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "7b6956b88c7f20fe5074f75ee38dce47"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "79c63f467ab674ba337cafa015fe2e64"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "7ae74ced392d37ac3de92384047a7556"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "90a9ed6960912947239a84f17416c7d4"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "b79b33e5d51770630981bf40be34b6db"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "8885f1fde47dec144b996e8395966224"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "3452ad71812088b424a99b2861db9004"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "c7bb9d5d830091e416f1ec84a243f6a8"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "d364261b736b676b268b75e4f0d88b91"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "71cd8e23686304533f2e9dca7f101836"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "916b1d7270042984e2be97e3a15861eb"
  },
  {
    "url": "figma/index.html",
    "revision": "e5669e4dfab2b41e3c29f67710abf220"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7614d147a7c625821fdffea814cfa1cb"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "faae4712e5467086de4d555945ea6c96"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "ad981f9d8481b255f3773ef878a07337"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "3367a732e2a19cea5dd7436c9b68f159"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "cc51ae296562e9c4cf69ab3dbdc833d8"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "5a6e7c201990863230e7ac4ed26fbf5c"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "592a1a950b8b1d48087fcd3173cefc46"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "0b6fa81c775cfd4b796c6f77848129fd"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "d32014a93a3a0420347a022298c84d5f"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "ff74f420bc7a0bb6a60a20d4017d4e12"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "294dd5447296771aa92448c0740414c9"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "c7a897727faba0ffb1e457b9a0b84e0b"
  },
  {
    "url": "flutter/index.html",
    "revision": "d8c831a5cacf8d0f6e8ba4ecb6dcd662"
  },
  {
    "url": "flutter/point.html",
    "revision": "8dd1aa068448df4f82bb529388107bb2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "29c295ee9260194af0df23b041ee8c73"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "62bd71c6b8752bdcaf1444eccac1a32c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9f9d1dc4d132e91d0857359fd109a546"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ee14485c6fe19080032b2d35a775739d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "21cbf3844b7bafab8ad185ecce81d920"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "779fd43f651599dbd8e663a8d6435404"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3177e473261940051e068bfc16bb5f71"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a57320306ecb09c3855e872afc2b49d6"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2efdc25dfad3ac8eec74aa5feba680c9"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f0da66b55d037f646b702b8e3ff2d7f4"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f30097ec5afc43597d6d1a246f49fa10"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "43b40320889e1cf3ed6a1a799a786658"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c1fd4742d6dc559a6f19229d0d1182bd"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c2a28fff9d8b954e0aa8d66f2de1c6ac"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ae4651bca711a11c54f8db5d95fe23ed"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "6379b317c0ae7aebaa6fdb27b4266313"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "b1058728c868e64765764c8a214215f4"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "0a896e6cad23fe8d18d9bbb316067ddf"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ebef5b6fa02543251b42d6fd578ded53"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "485e97f003f99f3fbbbf7865a9be8813"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "58cf8c032f8b04062cca8a5fa1174374"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d41d067147a3108d030c975151137000"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "96b1850ff5ae08fc1dff44d70545f519"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6f40492f6897f9eac6c9d62709b8e023"
  },
  {
    "url": "haskell/index.html",
    "revision": "c316e83c368a4330467adb1936ea8dcc"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "index.html",
    "revision": "0c4d351447501e64cb4bc3f43251146e"
  },
  {
    "url": "java/index.html",
    "revision": "8429e141208553f495c38fd7e4120d01"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "534bcf23c270356837e612b0988a4e21"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "28ffc5be1926f070413a98f092c5a7db"
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
    "revision": "2c61d6bc549be2e0ecc841298a2fc6be"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c518b896d4d89fb07f432179751d6f6f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c78e646784cc9f5a59875b6010adae8d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "8ee6629299ca28bb979feea86ea45a69"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "533df5850f193c8f994ae58b0afb9270"
  },
  {
    "url": "python/index.html",
    "revision": "2355787a506527422f8eb927710a9a0e"
  },
  {
    "url": "python/poetry.html",
    "revision": "6d42ea0d891987b7b30e6f6a9efd041c"
  },
  {
    "url": "python/pyenv.html",
    "revision": "bdec403339c28105b65a681c710cf96b"
  },
  {
    "url": "python/python-ase.html",
    "revision": "2a77b655fe223ccb6b3710571b271287"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "cfb650cdc8b2f5aab8a78e777cc4f0e8"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "fecf725dcebab3322cb629a0eb203366"
  },
  {
    "url": "python/python-file.html",
    "revision": "ee231ae388b3c61043ded6cc7e291b8e"
  },
  {
    "url": "python/python-function.html",
    "revision": "502be3e331ffce2d430a1a7dfe843c17"
  },
  {
    "url": "python/python-generator.html",
    "revision": "77d445d7a5671fd5d7e49929f310f9bc"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "30a67c2ea28c87a9589838d372944a89"
  },
  {
    "url": "python/python-module.html",
    "revision": "8a2494424c3f54ed28981ae0e4b49fa3"
  },
  {
    "url": "python/python-string.html",
    "revision": "f1a7d2a00ac9d466f3c803a18eba87c0"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "1b129119c9eb6bb4dd02b6829f0fad88"
  },
  {
    "url": "read/index.html",
    "revision": "4395111cf5c6d8f7aea44566915b43bd"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "9eb4a82ab001bad0db9aa5caead69d46"
  },
  {
    "url": "swift/better/available.html",
    "revision": "fe059c881d57694b7c7977cc77931a61"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b64feaf59b4247b046abb8e791f2b040"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "9db2abeb2af63823dd15cf5e4f074458"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "5f06e0dc89869c2e4f5453f9493b573e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "bb5a8732aa2acebd90048c30d3f6cd01"
  },
  {
    "url": "swift/better/index.html",
    "revision": "f4aa4ebd2a8f7e1b9ed66d56fafae74d"
  },
  {
    "url": "swift/better/last.html",
    "revision": "514b79f3111700ba0f102704ebcb11c9"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "6c3091e8843549c6b401f544f5bafa3b"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "0c8082c876588ca26aadde14f87443d4"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "a25466d272c0c82d039a4fb0e63c8306"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "1cd163d1cbbd0bc8a2f4d5f6c46deb49"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "99c5296820155694970c207fc20363d3"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7432916d0c083849ea502dd4c9173ef7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "6f9542a6ce894293575323d653d849e8"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "0e279d9720ba716ed432e7b94f88da03"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "741c8676bff2fba44e2f523e544fcd5d"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "477aa7ff4546678a150aaafbb3280a0d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "c5a3a02c2108f07d472d1f40c4140b70"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "dc042537d69c6a1603c87ca41fad31ae"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "a581448160deeea6a7f528cc311ff3ea"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "90192a517334a80faec454ed2feb3b15"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "5b5a107cb2ed81c14e0ccf76c9916098"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "97632dbc9617395166523de2262c0c81"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "72f2e495e0e5f58900aad96c0dddcf5d"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "6552f798a0ec2f0e43abbdd306cdf169"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "7e6f54ebea1fee505e99f4887e868c64"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "28c90e223f599ba05300627fefc97322"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "90a8bf8f32168f9a070f2af42ccb1817"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e2db42ee2cd11c8fd98b4953e3074523"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "7b8df5e3b45393f90729707370843a5e"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "4b04900696179bfd1949f56402a97a0f"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "0a0951f2bbf7ccc4be9d1d1f9d5d56b1"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "d657af2b46133315a61405d2e7c8e5ee"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "848e9827829ad0bfb6c89eb69f5b4599"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "830dcddf0e249f2138434e0dc7b2efb0"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "72e8615a580e3d5265b507d7bec65843"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "5e73d9ac6a8f45e080fdf1204ac9faed"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "1a4b2c755e418d4e2f7a8daf82b2b28b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ff536f326830e5e16194a42fa43cb137"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "866d831c23b3f365f5e212ad58a55429"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "93c33625e8796b1e986b297b333fd88e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "054106bb15c3bf2d1c18ff665587d584"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "bed620e08cf0112bbfeef7324af93bfa"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "978c4291fb50f2946baffacd3a2208ca"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "5586e5a68c55146de1626c6cb2eeab4c"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f430a052776429861b3b8fcd6a8fa9ab"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "260c307a935deaa2851b9f9b9240b31b"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c79957144c8a1e650f0834ec14230392"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "bef4b2c83fec12cafee58dd91af393c5"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "68922b81280f4f32acd46a8a07f49ed1"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "8d9f76e4111ab6cb9d351c0901e845f3"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "c26ee9ba559297f3c8a809340daa8589"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "77b7c53955e53ea4460329db12243ef1"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ab466d3f08693ba90c331f4ac48e5672"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "931db664e33fc531517fc4c37969f7ff"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "757fe6da38293fdce0515bcdf856b89f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "75ed6eafa7d0ccb19a94c997a21fc00e"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "3c1cc258217742e26cbf2b60c7a6dc1f"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f78344749c01149cb52b74a0f4b2eca7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "243531a87ed2b1d05f288b643e25533d"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "9a142cfeb48a7c950b1391e64883ef34"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "c85909d6c15d281379d428177ee6e863"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "00c27decf584d4af937ecd55d13e76e1"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "07606a4928102e0d60b7998816be6e54"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "a1ee3cd9e858402b965f5975817c7f43"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "0bdcd3f374d309410eeb4d46c130d836"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "90e55a5fbc57c8d67633591c1758af56"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "4c439aee45d15bb7be2be06cdc486844"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "322a22e4ec8d7798dee549e7eee16669"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b173ab3cc47eb3d042c0ece0940766b9"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f2c1ce9542389811d00a18f3aff0320c"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "a7fea59457c5572faa7fa0f4f89ec5d3"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "6c1ca92bb9a17f15d15405ad4c139962"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "200da02a1bb37fff433641c3eabd0154"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "0baabd337706a176bd6f58ee9ab768eb"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "43ce9733d6d6de84642bfc56fa472b27"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "13554ad123177bdd077357646c809720"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "09c3541ecfb178c32c08885d1b8207e2"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "c7d5f39aedb8786b1c54a38ad6360a99"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "31de56970c8cf9b046fd387cc3318ac8"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "16b27ead9197f507044de9c6bc26479a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "e5c1637ef0e85de648de64ea8a16611a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "7c23fef8287d9776d697799b7887e73f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "2083e17d9fb7f55781f19b91831bc173"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e09ab523047bf6a087301a790780fa45"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f3be1f2a9d497b9a93d5c03b8c3143f2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "353622f12d25d387c528ddf44b3df1ec"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a49727da422019db4fc4bd0f080c09b0"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3c67ef24d4d6c5d3cd288cd1f81662b8"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f0e2be63bc021451790c12a55a002a95"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d296bf9625a36c071a7db0494d7acb3e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "258cb96d19fd7608c1b58bdef702a8f7"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "79cef2ff26ea1b04206f69f77c568442"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "84f092f04667c3b472f92140c0ed0942"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "915c018cedd71ae5d57fe37ec6caeca0"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "1774415abf8e9293823020d5ae3e4dd6"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "968e6d5b667f935e46f3e4ab29f7ffce"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "ac76cd77b117f5ed2424b93743c0411d"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "22c9a180ed45f8065b47cee5bc46117e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "af01ab553ee24bfde7d890797837e8f7"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "0a2e1ec3dc4fc87804f4657d829fa7f5"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "57cb79964fef2a808745de9c3784210d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "b112fd2d9c3840ef8917c655fdc3d6db"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "268ca1a2b83e2f029ad8b93526a69272"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "4ff3c990fe00ee441e557375e4eea1e9"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "6f8cb1b2e099951d3ab77fca951640bf"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "aa33b762d024f95b387dc084dfc1080e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "92269964fae641b2dc2c9178870b83c2"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "65e59fa40f69ae1c2915949a476bce23"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "1acabd441c5705e5d501da6929e58d64"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "13c396e9e2127281aebf34ccfdc9d8b4"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "7dba10439bbc116010206e906a5dffd8"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e47545c2a9f072c1a0a3d048e286b6f0"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e6da19cbe7cf6f5aa5dfc56cd508e32c"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "29713a661609ee7825bf47474f661724"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ce563ff2217d7e53bcfaf413a7f8ba03"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "10e80a43a84f27f6abcb1ed38e32f657"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6b94eadac491f6bec9a1a38f7a55d0f4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a7666c594b4d16e1290ada7901e1bdf5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "1d904b4c045b7e279e8bc055e0bf3783"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "9bf498466f2fcde1f206436e656313a4"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "5d1861d6a3c1c48dcf918c51ac1ceadf"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1910fc7a9541cee882aa60bf15dc3e11"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a3904e15154664b4597cd368bc353580"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bf178cb0b1436e2b2cbb9d05ca18e389"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "f30038612dffaaf69f52917b4b7f19d0"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a6ca54ce9fa19d27df66794c1690dd05"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "0805a1aff32016ccd2e78b8d31ada96a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7b0ef2df2371ac41e3545dc993276bcc"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1df2ffaf9538bd72794552ab7b7fdec7"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e4d25b3d0a445f92473b2b7290a12ca3"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "ad200be3880b9638de0776aa35be426f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "690842b450cb63d883b6ae5c7cee223b"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "e3e5a8a8f320d20e2f519a8289836a56"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "6f31a2dd69c264286d90034edbda1850"
  },
  {
    "url": "tag/django/index.html",
    "revision": "ebc5c6a1575f8b0d44f13b0ceb095659"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "1aac722815359bc72e20815d3a9189a0"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "fe3c02963591dba7fbcbf3b6bd3f1c9e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "97236e113b50cfc89ea3fdb1ce53a158"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0b90fff45c8fc5e561fc002427cba980"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "660f1401e8e58cdedb22d24efa99da8a"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "66f7cdf9a743fb22198804edc2d40337"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1a2b9c9669c5f3c51ec47288ef6dc8e5"
  },
  {
    "url": "tag/github/index.html",
    "revision": "98bfe20a2c7667cd86374468131d86d6"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "5df696290d852aabe83a6e21aff31adb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5f0fb7384525a140bb3cf43fceded31e"
  },
  {
    "url": "tag/index.html",
    "revision": "a2f52ff2525593cecc954ae27dd08f51"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b84ff35fe1242354eba7090d74f7cfe7"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "687a80e81197ee41038b343156b8dbb7"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "b8f50ba60be7a3ec8cfa9d553f7d71ed"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "3f19e5d153ca4bc5666b1d1f91fe8ace"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "15dc77bf4cc8b614ce84521b3045ff00"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "f16dcd8688b93b6884299c216ae47825"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "26aac0eaf0353933a323d9feb7c24d40"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5053155f160d9e225a1a5b3ec11b6288"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "1220f77f7bbce8ffaead1b74d03daf58"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "a8d9fa0a098682823ea56ca844699546"
  },
  {
    "url": "tag/java/index.html",
    "revision": "99c030d2a542feee6573197cde614536"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8949982e5831396ba43f522846fd79a0"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "a76462e3675a9fe487c1cd820f0252dd"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "9ffb6919a6aa154b8b0687ce788620ff"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "34e4601f03d2c3ce4829e8cadc77c626"
  },
  {
    "url": "tag/python/index.html",
    "revision": "da089399d8c448015572ec6efff96e31"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "5fd3ecd39cbdb570f718b3bc83b3b541"
  },
  {
    "url": "tag/read/index.html",
    "revision": "da6ea45c021b839855120a6ed7b93ed6"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "ef62e04f8cd88061c0ea0f5bd547d349"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b0c83325427f79471ca8cfffc78bca2b"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1761946b61eeec2702a5e4adbd81a727"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "ad6acd209bb8ba49cdfcc6886849929f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "7fac3cedc447f821a8dabd75f90f3c62"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "225d43c9b3594eed0e29c49d2a2e10ba"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6bc44206fc978abe10aa4e79bb37a5a5"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "13b229925198868d615cffe0bb848e12"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "4f9ffe8afc4c9c8c91c0183d378bdce5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "2aab822b08e99fd804e9604e158fb2ab"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "830b7799ade86880f9c96c6bcc1fb5d5"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "eba38e77bb17c06bd1fd04d9bee5dfe3"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "07541044c17b3c3ce69a9d20d92dbeab"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "9294fd4d510e8264234508b4db4a969c"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "f917f0456ce61e70ccc4f94908ff6ef0"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f566d9edece17ceee97a54650e93c317"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "bcbc2c458a578f89a874944573f47406"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "08420a0ecfb011f0f87291bb6d4f4622"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "27297f73b673a95fbec0731665002844"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "9907a06730c394f47bad44a6a46dacbb"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "6c6f804b250358cdc097374314448d97"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "567f57a4fd5f61b3fafa9a8ae56e7672"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f4faa9cbfc348a02b4cae3306daac08c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "352f34f32dcb2feb8eedb177dcb8b788"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b287c3fe1ff2d4b6ef0b8a6e63412a5f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "e8fa97e160b9dfe79196660f379af2a8"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "a87462f117d0bd03910a672351d18406"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7948bcd578c9c420497087736362a3a0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "4f6096262505d292c597584b7bc53064"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "4e9b9a78e00ead383ec49190a169d820"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "e218c4db3b126a7d8ada1f6eb36d8914"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "bf23a0ec93e28473d1fb886f6cd74746"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e2ce0db4946bba9d8ce04821ebf3002e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c44f80399f3d8edbfe92bb2d6160364c"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "4932f2b858d577d5c9a3cfec6c3a70fa"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "95a882242c3590438c52ab67fceeb7c8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cb20c7a88eaf121b6dc325f19d05f62d"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "055c8f7a17f077b6bed44638e6616503"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "22db4967788ea75aa761bd4263c1d988"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f80c19a98c0ef3c914cd56a0ae8e22f5"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ff025eef1b9181d143ca750f2b27a43d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f4222fbbb38b60f13b60c5bfec1544dd"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "7266209a9be163b13824c20f2c20c7eb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6303cd7b2f5fd5eb50f6bca720d29ae2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "137f4cd78c9f4928785e0540fd4a521f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "16eabb763da14f63e724ce79c6df5952"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "9c573a564949eb2152bd74aedb319f74"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "b2b89baabcec68c6294cb9a938c287b7"
  },
  {
    "url": "timeline/index.html",
    "revision": "680fab94f3eb499a1e05be9fef5151c6"
  },
  {
    "url": "tools/docsify.html",
    "revision": "0330ee4d72c0b09b063e4634b4b3fbfa"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "4b348b8865acebc0f91077d36ccd041b"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "5d09a0578f4e46fed15c1aa76687b1fe"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "8177610bf8944b258dfb80de5c1ba33f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4827a45d6d92c8ceea400fd42eb0034c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "17266596656c4815963c2a2782834123"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "df24617600f10b3dfd273041263898de"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "0d9f67b761a27ee3a1784d5cdff512d1"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d063f718d28a1747124271b0944ab625"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "f4349e7c56a70d21869f3dfe60f0c5ab"
  },
  {
    "url": "tools/note/index.html",
    "revision": "78484551cd18b27d093bd21edb6857ed"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "a722fff099da05917d788254b3116705"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "6db51714794a65e1d1ce75f392ac3ce4"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "469048e97195daf3819fe7f1bde45c1c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f935a583f01eadccf0ccdb0b989c47ee"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "a7df28c4686c1d88b09ff06c22e9ba0e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "52f2e11bcebfe5e230ed82c1d967c609"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7a4e497c8d7bcd50c6c0b88f168bbbb4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "0fe4e09c08334bd9b58057d489ef4352"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "91bf8458c45877b9c62484a6f76eff84"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "a0486267ec1b29376145251fe824fb09"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "30107e5f3adc42149f70c785a3e50a65"
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
