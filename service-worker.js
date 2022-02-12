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
    "revision": "5d35a91081cfbfb60ae47c5346edad54"
  },
  {
    "url": "about/app/index.html",
    "revision": "89b5c2f0aeb4bd615a4f2f1c361383ad"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7e531d04114f28ded5a59bc13f8246eb"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9880c9e57c2a9a68e095e158a8866861"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "242ba9f82442ca4b1752245c8e0f0b2a"
  },
  {
    "url": "about/index/index.html",
    "revision": "3a6417a61008a5fac7a5da76f26896fe"
  },
  {
    "url": "ai/index.html",
    "revision": "86e7cef940a09e3719f83aedbd08b92a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a5febd0d3319bc3fb3ecdbe6467a83e8"
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
    "url": "assets/js/10.b79c4ecd.js",
    "revision": "852222e575cd8fb5c009b02f45c19da8"
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
    "url": "assets/js/115.3bfc35ea.js",
    "revision": "9c01c1b1ffbd63d480b07b027da7cba4"
  },
  {
    "url": "assets/js/116.bd6bdd35.js",
    "revision": "0ab49cacb7c414c26a08ecb237b7bc81"
  },
  {
    "url": "assets/js/117.c1ea1925.js",
    "revision": "986f5938319e343183e6569b16b0183a"
  },
  {
    "url": "assets/js/118.837a5b10.js",
    "revision": "1802f282edde91a701e5ed9d789301a3"
  },
  {
    "url": "assets/js/119.51a35046.js",
    "revision": "6ee835ba2b9bd71f9a17a79d42029fdf"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.44ed68a5.js",
    "revision": "f76674097c82527fd42b5b726b3b8a80"
  },
  {
    "url": "assets/js/121.d73af519.js",
    "revision": "6d62428dbe74302ce57f466e03822f79"
  },
  {
    "url": "assets/js/122.b74d829a.js",
    "revision": "f5bab5399c51e3d91316f4fbcc0d850c"
  },
  {
    "url": "assets/js/123.e41f6cc2.js",
    "revision": "f6a672de73d79f67968798f775fe7f86"
  },
  {
    "url": "assets/js/124.4466be03.js",
    "revision": "92d02e7c9338f032af84092e26ed06ea"
  },
  {
    "url": "assets/js/125.cac229c9.js",
    "revision": "ad826b3b5be71820bee260775d08fab9"
  },
  {
    "url": "assets/js/126.ba300609.js",
    "revision": "6143e8b4fccf8d7ae0c68b78b901c070"
  },
  {
    "url": "assets/js/127.f96294b4.js",
    "revision": "09097ac0e90496ba94b92c6a047be48c"
  },
  {
    "url": "assets/js/128.ede29d66.js",
    "revision": "39f24d560e5ed2deb482c0bd904bf50d"
  },
  {
    "url": "assets/js/129.81c26c81.js",
    "revision": "80ba68e5278bbb8f9a2c5aea143d94e2"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.ed3603fd.js",
    "revision": "0d6448d9bc70ac670f0e3f41a38e80f6"
  },
  {
    "url": "assets/js/131.cccc4c03.js",
    "revision": "ad0d50c6e95139c428eefa178772b3eb"
  },
  {
    "url": "assets/js/132.e96de25c.js",
    "revision": "719903b5003501ec88909d9401266f1b"
  },
  {
    "url": "assets/js/133.97e806a9.js",
    "revision": "d0439255b34a112ede2f7892ca8032e6"
  },
  {
    "url": "assets/js/134.6d8c1504.js",
    "revision": "c8f7157df90a1ab7627e59faad9e2ab1"
  },
  {
    "url": "assets/js/135.01e9f48e.js",
    "revision": "71dbfb94f66002caeafae2b6df1b4706"
  },
  {
    "url": "assets/js/136.82ca4f01.js",
    "revision": "2c13e29376c8f1c17d485b1320ff2200"
  },
  {
    "url": "assets/js/137.fa58e340.js",
    "revision": "afba0e52babfb4c494aa2be05abbd7d4"
  },
  {
    "url": "assets/js/138.d9e0ae98.js",
    "revision": "f96355aaff857af84b9bf03e7fdece2d"
  },
  {
    "url": "assets/js/139.a31f150f.js",
    "revision": "b9c1d0ed60911a4950763632f8304fa9"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.57336942.js",
    "revision": "f37cd50a2bdddb59bf1276a93efa3084"
  },
  {
    "url": "assets/js/141.abec600c.js",
    "revision": "f0ba8bb5278d13167a09ad9cdd1e31c7"
  },
  {
    "url": "assets/js/142.fe7d28fb.js",
    "revision": "d9f36bdbbc89e2c789bcf4b52a305994"
  },
  {
    "url": "assets/js/143.6fc368c8.js",
    "revision": "343cf961fbaf88a1d1983d7bf3f8e6b5"
  },
  {
    "url": "assets/js/144.a6760455.js",
    "revision": "dd5feafa47a3b0f0f4cab9c3da8d05eb"
  },
  {
    "url": "assets/js/145.6debb890.js",
    "revision": "911e0bb3f7f8c5a4ae836702c6c353b1"
  },
  {
    "url": "assets/js/146.0a2e1ae1.js",
    "revision": "d21c555d96aa4053c6caa3096694e8f1"
  },
  {
    "url": "assets/js/147.80c873f2.js",
    "revision": "225cc2391c39eba85fdb845c9e596f4e"
  },
  {
    "url": "assets/js/148.9bd97612.js",
    "revision": "ca9a57e36718ff3d6545def0f966c46b"
  },
  {
    "url": "assets/js/149.aabddfdd.js",
    "revision": "8b8b93e005321c751bd89c6409a5e689"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.5beb9210.js",
    "revision": "db7dee940e613e6090dd13b4482d148b"
  },
  {
    "url": "assets/js/151.96dc1bae.js",
    "revision": "918ef951ef1f4ca197fff6b9b8576112"
  },
  {
    "url": "assets/js/152.9e3e5374.js",
    "revision": "b68f0308c752b31f8dabd278496edd9a"
  },
  {
    "url": "assets/js/153.1a6ccee5.js",
    "revision": "e20292057e41f9836b01815866deda75"
  },
  {
    "url": "assets/js/154.ee0f94a7.js",
    "revision": "1cd18b24f2756c4d6463bb6bc0ffded4"
  },
  {
    "url": "assets/js/155.b0ce55bb.js",
    "revision": "fa01141044c68e36ede52b65ebfe04e0"
  },
  {
    "url": "assets/js/156.e724747d.js",
    "revision": "1fa5975edbab3abddf8be649615d0988"
  },
  {
    "url": "assets/js/157.9df47afc.js",
    "revision": "ef64e11d359a36e919f91d7bd103ca8b"
  },
  {
    "url": "assets/js/158.5a4c6391.js",
    "revision": "1e7576a2a75e06d8631a35e9d0674017"
  },
  {
    "url": "assets/js/159.1da5672b.js",
    "revision": "624bfccaac8aaedf3c7c7b9302ed1293"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.fb3ac35a.js",
    "revision": "4bde1f6ea1143fc944e44d1c8606689b"
  },
  {
    "url": "assets/js/161.07cc282a.js",
    "revision": "7dd7007695fbf6d8e340f725e5421772"
  },
  {
    "url": "assets/js/162.2c2c86e3.js",
    "revision": "ed8c6e8d568099beb060d1128daea5a9"
  },
  {
    "url": "assets/js/163.8ff93da1.js",
    "revision": "979bc46db0f1cb870b18269219c2e64d"
  },
  {
    "url": "assets/js/164.e7ec6be2.js",
    "revision": "e0b65e7075566111498e3565c3060780"
  },
  {
    "url": "assets/js/165.a88297ea.js",
    "revision": "de26624694ff2fca2b80e2ba18705ccb"
  },
  {
    "url": "assets/js/166.e614ba1a.js",
    "revision": "926492418884fcf5cf4db2d36cfb9215"
  },
  {
    "url": "assets/js/167.2446b600.js",
    "revision": "4b30ac88cbd10d6f855b90d83d34eb78"
  },
  {
    "url": "assets/js/168.4fda6724.js",
    "revision": "94dae8a93693d5e6c3af204fb8069593"
  },
  {
    "url": "assets/js/169.2522bedc.js",
    "revision": "242f2260224c9b6ee1ec6ca57208d2d4"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.6531684a.js",
    "revision": "04034376943a246059058bbdc8b6d72d"
  },
  {
    "url": "assets/js/171.d8c7f26c.js",
    "revision": "a8d0c1505861d4c20169e8d4bfa58cd2"
  },
  {
    "url": "assets/js/172.6b8ab73c.js",
    "revision": "b20918c5d3bba2958562c7a008728dae"
  },
  {
    "url": "assets/js/173.7855b01d.js",
    "revision": "827172b8745a0d8f9f7322de7da4e89c"
  },
  {
    "url": "assets/js/174.d42a932b.js",
    "revision": "4a10e6b410f39d061e7f44200144a630"
  },
  {
    "url": "assets/js/175.6f7d22d9.js",
    "revision": "f1edfc4aa4572c30e63fe67113cf0252"
  },
  {
    "url": "assets/js/176.90eb7986.js",
    "revision": "f8e0501d8a8257e2786d1097fe711de1"
  },
  {
    "url": "assets/js/177.ef320003.js",
    "revision": "3cf1cf72b6a69ad4c2cc0029105c7461"
  },
  {
    "url": "assets/js/178.fb921514.js",
    "revision": "d543168cd859f3c4318307900fa31721"
  },
  {
    "url": "assets/js/179.803fb844.js",
    "revision": "be9eef1765fd39c8dad97004ef3c72fc"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.e6d5c192.js",
    "revision": "32bfd7d273e93ea7b9757a44c894d7db"
  },
  {
    "url": "assets/js/181.c5df382c.js",
    "revision": "b5dcd29c8f981e6efd464bae8e2946cf"
  },
  {
    "url": "assets/js/182.6b002a11.js",
    "revision": "a2a786e5230dc229d8912a35d4c1bf7e"
  },
  {
    "url": "assets/js/183.b1cff585.js",
    "revision": "5d6ab876e15adb606755bc8275d9b518"
  },
  {
    "url": "assets/js/184.f8f3cf7a.js",
    "revision": "7a229f0cb3a7725a5902420e2d415baa"
  },
  {
    "url": "assets/js/185.7b25bc58.js",
    "revision": "0ce66a4a0850029766fb54d894151903"
  },
  {
    "url": "assets/js/186.22bd45bc.js",
    "revision": "f18808a34b5f722910b23e1dfcfe23dd"
  },
  {
    "url": "assets/js/187.a050639b.js",
    "revision": "3f74561ff14bc713cfcfe02fe3c9d150"
  },
  {
    "url": "assets/js/188.4eff5a69.js",
    "revision": "dd2bbdaa23d71a95fa7989c5218bf23d"
  },
  {
    "url": "assets/js/189.1c977f8d.js",
    "revision": "6cbc5a5dabbef1e6449574e5d23eba00"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.5d4f6cc7.js",
    "revision": "1c992dab4d297eaaea99f8695ee56e46"
  },
  {
    "url": "assets/js/191.21e173f1.js",
    "revision": "11b69eed35edfe59dbafe0587ac51663"
  },
  {
    "url": "assets/js/192.d4270846.js",
    "revision": "f47c4b8d78e792c4bd275b2f6ee7f73b"
  },
  {
    "url": "assets/js/193.78994ead.js",
    "revision": "bcdf04f2436cae935e67ebfeae3c77c8"
  },
  {
    "url": "assets/js/194.dc776dd7.js",
    "revision": "c4962506df93bdeae4a0cd84f7c05b9e"
  },
  {
    "url": "assets/js/195.8c9f9cb1.js",
    "revision": "bb3691583d0543ee32f74d6265617d7b"
  },
  {
    "url": "assets/js/196.2243f507.js",
    "revision": "9b60e597369c0dd6fe318e18f783c46f"
  },
  {
    "url": "assets/js/197.5ad9ec15.js",
    "revision": "fb6de9cb0fcb0a464415651d0759884b"
  },
  {
    "url": "assets/js/198.9928686a.js",
    "revision": "90f217906e8b58acc5b015a1f0f048c5"
  },
  {
    "url": "assets/js/199.e6f67004.js",
    "revision": "a4be0026c036267a80ce7699c896b371"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.e70043a1.js",
    "revision": "8b481d316283b72c00ab1efe28008c61"
  },
  {
    "url": "assets/js/201.91dfcbee.js",
    "revision": "a698bf07650663784aba7204c9388deb"
  },
  {
    "url": "assets/js/202.c9cd76be.js",
    "revision": "25412f18564f0a6a78a646506410361e"
  },
  {
    "url": "assets/js/203.094a822b.js",
    "revision": "5f6c5358e1fe1beb44ace55d0e44bc9a"
  },
  {
    "url": "assets/js/204.a5443025.js",
    "revision": "16238fd862b8a720f0392f8783574ee8"
  },
  {
    "url": "assets/js/205.6644eb01.js",
    "revision": "85619411c0d05608d00b5a0e77f0a8d4"
  },
  {
    "url": "assets/js/206.a4dfc592.js",
    "revision": "cba8906be56f00436e5ac4ad3dcb10d7"
  },
  {
    "url": "assets/js/207.4daa0cc2.js",
    "revision": "a1f19075c83a7d6d43c10a9039f924d0"
  },
  {
    "url": "assets/js/208.11f5abd1.js",
    "revision": "4e6807171fd7e9736124f3a4214c56af"
  },
  {
    "url": "assets/js/209.33b883f5.js",
    "revision": "3f697a4fdbee0f48030a79371fa37e5b"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.25c2976d.js",
    "revision": "6b08b56f38773e61980595bfb27a3355"
  },
  {
    "url": "assets/js/211.68c312b4.js",
    "revision": "7774d6eb105809a77fb71e418c1c5ab7"
  },
  {
    "url": "assets/js/212.59a79e1f.js",
    "revision": "951f22f7409fc3bc6a7cd139719ce96d"
  },
  {
    "url": "assets/js/213.7c834009.js",
    "revision": "b680118363464a2527ba5e9a009cae89"
  },
  {
    "url": "assets/js/214.2aa1982e.js",
    "revision": "8e600dbb14238fd9e15f3c1a44c0478f"
  },
  {
    "url": "assets/js/215.2ce993ca.js",
    "revision": "0d6bb5fcc538b72ed5252caa1089836e"
  },
  {
    "url": "assets/js/216.93f6b97b.js",
    "revision": "70949e939b5a035bbffbbee5a82af7d4"
  },
  {
    "url": "assets/js/217.29596a69.js",
    "revision": "b58688c42914a68bb7a8c328fd18a626"
  },
  {
    "url": "assets/js/218.8b22bbec.js",
    "revision": "062a51f6d689f58def1810417d93a305"
  },
  {
    "url": "assets/js/219.74ae397f.js",
    "revision": "8698243330eb671b44898b62b26438e4"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.33a9ab5a.js",
    "revision": "8bca29dc2cd405e51237367681e2cbf7"
  },
  {
    "url": "assets/js/221.bc0e5a68.js",
    "revision": "8d61b69d0b670bc9679eafba2a7a6d6f"
  },
  {
    "url": "assets/js/222.dd20ba73.js",
    "revision": "64b30dd0da64f5f3b002dd8c56bf1127"
  },
  {
    "url": "assets/js/223.499aaa3e.js",
    "revision": "2caba5f2e61ac175b1012e5fa7427a80"
  },
  {
    "url": "assets/js/224.0c77d6cd.js",
    "revision": "06726059b2d5d449932a5755f1d1fd6a"
  },
  {
    "url": "assets/js/225.3e00823a.js",
    "revision": "1132d0afaf534bb2a760446d61d66574"
  },
  {
    "url": "assets/js/226.ecd08e0d.js",
    "revision": "a40a7959101d21ff475470976d88e41a"
  },
  {
    "url": "assets/js/227.b3ed44ca.js",
    "revision": "6a5b472bbf165dbb4aa52770ab687f53"
  },
  {
    "url": "assets/js/228.88eefba7.js",
    "revision": "e911238d95ac0654ad5767069433c47f"
  },
  {
    "url": "assets/js/229.05a18a19.js",
    "revision": "7ba3223fc8b421d1f5aab2a7d1c002a0"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.64f20afe.js",
    "revision": "e2fdb3115ff3f5e26b431a194e588d20"
  },
  {
    "url": "assets/js/231.d800d067.js",
    "revision": "0efe78d0dc8c1a16a85978b5a2003f70"
  },
  {
    "url": "assets/js/232.fae30616.js",
    "revision": "a6ee3caa6757ad26cfbeb181761a7b96"
  },
  {
    "url": "assets/js/233.69f1393b.js",
    "revision": "317a276a9cb04356ea67363e5b896f25"
  },
  {
    "url": "assets/js/234.7d618978.js",
    "revision": "5d9baeccdb12b866457a713e1f15307a"
  },
  {
    "url": "assets/js/235.12f551a5.js",
    "revision": "89190eda986d848217823ff4d5e18a3c"
  },
  {
    "url": "assets/js/236.00c6bee6.js",
    "revision": "ddbe4f074b0ed4cf5bdf4f84feca5d4d"
  },
  {
    "url": "assets/js/237.cb6af2ff.js",
    "revision": "ae876213d5ed62ab4d6ce6e09e577cea"
  },
  {
    "url": "assets/js/238.daa68910.js",
    "revision": "1453b9ea35d1236fc43f10c82dd1377e"
  },
  {
    "url": "assets/js/239.98660b95.js",
    "revision": "d7c5ffdb2910a85e0adb7303fc3fb133"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.568ad788.js",
    "revision": "51b045a352175e72b46af1d9d4c9f261"
  },
  {
    "url": "assets/js/241.8ab65bf3.js",
    "revision": "ccdc8e23d21355410a603f28c97c401e"
  },
  {
    "url": "assets/js/242.db91f19d.js",
    "revision": "d3ee87210e9891cda18ac19844e39f7c"
  },
  {
    "url": "assets/js/243.f266b7c8.js",
    "revision": "8f19ac460e61efcbc23c558c2f29fdbd"
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
    "url": "assets/js/83.42ba2b18.js",
    "revision": "7e1a8a00aa50db00e92f3af18af6fd7b"
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
    "url": "assets/js/app.f768ee31.js",
    "revision": "22743470c32ced22b095f42cc876a808"
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
    "revision": "067acc1145583e0bb8896fdd3996ef8d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "2673986ea70e9e1802f1c3d628845f95"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "11716b26961202a4cad9d8a91b91b915"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "fa8bd529f2c39c74d40fee30af22e42f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c71fa47a63398d8397ed4619d5300017"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c43addf2f134610c3c063e8811920271"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a62c5a4b0d9942794a24ed912157415a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "825fb96d879e255f9259af73c451bdd5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "20bdb69229f22cbb7bde7e31ce82ec9f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8437f001a398c5d03d0591e4ad87cbc1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "257f5432a095814e7d4c65ceaccc5b85"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "7af5c778129a60472617ba76f88fc6b7"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "104b0350c05a696c3a249b8a3a2610fe"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "ba82d0360f2509810a1a46d7d8759f60"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f3c5491ef6d9737f7224d71a28998607"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "4342ac88574a5c894e7be806fe682346"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "5fdd88b43a85f8fd53b67cf06eabe87c"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "644e08b536bac66e55a449519c899d86"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "c4889e2afd05f18cf1e5f08786fcb2da"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "2ca19cf9b555ec0d7ec1ba936dd0e293"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4419bed865c2f810874638beea1e3ee1"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "7cf5066cb123f1463f05bd88aab419b3"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "de84a9bcac3b86edecac3284aea3457c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "2f498b89eea2d81e6f67d41dba2ba922"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "102b3700ec0fb2ac0db8c424fd46d4cd"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "69cae06e01e9afe9a898ec03540b3dca"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "f37b842fb7b2e7c99f4c6a6c293d3375"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "899918030dc4571e5a940eb7f3f217c3"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "6e0e1c625a4334fe92fca455bfdff4d4"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "7664f39a5744026d417a8cccec91ba31"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a00f91be0e57b42c25bd862fe78b6d85"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "36648811fbc95ec5143358d191732d93"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ba627e3ee22fc6d92d72dbfc8084605f"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "824586426045808950feaaba354220fa"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "2a9a003697cde36d97e7f65c9c739931"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "859027035e2d80e1ee1e163259668159"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "806c193b37fac6983ffe912fc89ebd86"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "efea25e0f5ce18d867529d5a9453c070"
  },
  {
    "url": "basis/index/index.html",
    "revision": "94539c3b03764447be6413dd6b9bcc9c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8075ff3ee61df3b78c7f8be943eaf5fa"
  },
  {
    "url": "book/index.html",
    "revision": "10df69d0bc0d756f5f97d12632300f4d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "923342a545b28a6506b53b36943b5afc"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "077a0d164cd8fb942db16e6a52b9f5ca"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "60d6964c8f90e7bb55ac86a81d8d0a46"
  },
  {
    "url": "c/audio/index.html",
    "revision": "66cda3928884a55fb2db6aa3381cb9dd"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "a2f11ae9dba63752d120b8957ff03ba6"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "f402e0f9c83cc0174a1b97822a48cc4f"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "bff369493260bdae34e0040b9480e817"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a6cc079fdba6825f8979fdb3ae74b183"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "7ebf375561144ddde3eff2899ae60331"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "a867ad117d1a3463c8600264ff7f8766"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "e17816fe8272f8108899bc4f8dc96cd2"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "607fc06a314987c0e76771e2e71f17e6"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "9e4ee0f7a539de738ae5783eb08b839f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "973221d6839939e6d48a96ddb42c4607"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "45b36dc63cd03454e52b0a55d2ccd3f0"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "bea7d53090b138d87cf1899ba58918f1"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "58bdac3348fd3cba56cf5979a4c5dc9a"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ee164221792804d8979d21c7be51f4ec"
  },
  {
    "url": "c/program/index.html",
    "revision": "d93e90611e168d806c345087f0b4373f"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "c3f09709485e9849ac3dc8a157580e76"
  },
  {
    "url": "categories/index.html",
    "revision": "63051fcfa78118c8a24b40316d645542"
  },
  {
    "url": "figma/index.html",
    "revision": "a2de1454a059adfcf9d5a34e9822242f"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a13e8cb3c9e6d69c6e791f6b332952ca"
  },
  {
    "url": "flutter/index.html",
    "revision": "0a187bd3b4e692873efac9a560510510"
  },
  {
    "url": "flutter/point.html",
    "revision": "9f3a3f923c88ab88d16734aecce0a6ed"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0b3b43c37298141efba1628ab4ca9cef"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8b3c90b9f024b928f159fa37893c6cca"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6560ca054338b04dce8625e89e31fb30"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f21ae541a9e2f293bd7d0db6dad0b2b8"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c0634aece993f79eca8a92b28a9955a0"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5e7552828dac9541287cbec416763e45"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8305fedbf9921fe6936d95c599133ac5"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "486789c7155cc4783a5f1aac34863e08"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a0f61be66990ecd921470da2673caac7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ccfa1a464cbe2ccb27a041666704fdbb"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6bc00e5c71d46f8f7cd5b948f8051272"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f6da533c819837c2d1cf87ddde0fff20"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d1dbe78c7f4ff33ec26cb631521c9b18"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "8f3f0b1fc0b8596959354ef1a1949f4e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "2f1e37b84cbb758449b6217099989fca"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "bedae6b20f7de3f9c3f0dc1bbc2cccfd"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "af63aed6b226b7deb67e655586b6797b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "4233a0b12671ce8348876d5150079d09"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9c1dede10361155da34d27f3e9f2efac"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1c3023cc0be02ed7090fe3fbfbcad881"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0c66bfbcab9402d4f7fff89f1c6300fa"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "58810807ee966875b9c79cf2a0a4d06c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "09943e00ac3182a9518a8639f20ae1c7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d7bd6fd609cb5b0fde563f09d2f632bd"
  },
  {
    "url": "haskell/index.html",
    "revision": "0e48d26750163989d33cc26d2377a1e8"
  },
  {
    "url": "index.html",
    "revision": "110a505040566539870d1357efca81b5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "f4aa3911ad6e2d0dbd2ab0659b1adf9e"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "99fe0d9774a7bf0e0656544869c3e326"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "8709c111bb96fc827292b822016571d5"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "7865ae0cb865d7b466c4a61463098f2f"
  },
  {
    "url": "python/index.html",
    "revision": "6b7bd35898da867ee55ea27711182fdf"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "82d6a6353d0273f5bfe5bd1ba6300d07"
  },
  {
    "url": "swift/better/available.html",
    "revision": "b7f244471b1fdeec509e6493a902ac9f"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "8879e3639965037123878933f586cc7f"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b2af805aeb42fa2dd21d28618459eefb"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "9b4c0f5de4a09e693ef51c748972ceae"
  },
  {
    "url": "swift/better/di.html",
    "revision": "fb287e4792c8eb95dc9e6c0724282d9b"
  },
  {
    "url": "swift/better/index.html",
    "revision": "280a63387c4406ae2893bac2d714a12a"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e8a3b8b11c7e1cf9427b1cd3a5c31316"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "4b01c1e066a85a8d477c927bd18773ee"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "dc44f036fd4a9c7c704f62fcd35a7cf8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "24bd65bdf187a34b1a1751b0074e6ac5"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "210dbaaedb4de8fbd54f0b002d4f793f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0008be52734e67b3aba00f2f1b3a275a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "09190382dd2e862b70869bc1b75bc2a9"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2aa6ad155f2aa005a2b2dee9122d0f43"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "0d6953a20c2f26c405fa3f191eca575c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "74f492d089a970bbb7a3b1d9bebc6a65"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "c620c0f5750331cec18360060b88264a"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "66009bb76ddc5eb5d9de32ce1105c2e1"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "bda005c623568bd2646cb34042015dcf"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "03003c59ef21b0f34b83e7fe14408ea0"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "e9a5559722b33eb5fa07cb0d25beb8dc"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d242ca0cdcb8324e3421ba00499ce653"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b80df97b23e0bd10fe4451b9177022b7"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "231427dc5f6cb1e2fc56da63d664eb2b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "52b1c77c03356bdc7ec7c68cd3814691"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b0eb5dd847746fe398afd27f12a868d4"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "285b366177cb585eac5ee03e5442874c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "88e5fda5c64f0989711378399387627d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "153c8b3f18cc05e0adca416b20471f59"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "5d0671a1284dbc78247f73e4a5c0d70c"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "4b95f0dec805345be4f55c343cd53154"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "1debf1b95c9d9d0931e120b83ccd8ea8"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "94cfd16d28ee3bd8b457d7aab13be127"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "bebac86b29397590fe7c38fe6df643f9"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d8866a77d80612cb7d83f3151c34555a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "4e6fe70e6f2f31caad8ee4461dd92ef3"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "ef756cf64e7ba5b149882df67ced5e28"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6cb23d79df1e75dd4a7979eff1c84810"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "721bd0389d33bd2f08960ef42d162a7b"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "d02b834cefb7e88364ee7bf5679d2a20"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "4619e40e7ef72fba16e8577e0a2aedd2"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "ddd8e913ce85413140c01b224aa796b6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bc9b1ebe69450a681f02b9e7cb7c7d08"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "340a6f4f88d9c7b3c02cde96b2508bae"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "bd81998311fc581c590941c85b8e44bb"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "afd4262a3668de4da11608365d182214"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "32c30cdafe535be70ff36fdb49e6ee79"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "c0515839780b1852395405021842ac6d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "fcd8c082849eb889e9edad4352514ec3"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "952795ffda5519d56ba0432639d81e62"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "356bbe2485c3f4129e5c605c3c6dce53"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "f02fbbb0b8d481d2f64b63ada84e6437"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "32df3b7a8e91952f68acfddd3005a83a"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "67768b3d016d5f210c8570a049322d8a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "c3caba083b6aaa3af82e68cbabde9f8c"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "05f5484e2dc892204b034e7961716975"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "e0eebb4a79fdec1f19a59acfb8a1bcc3"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1fbad4998be1a5af07d84143f29ab253"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "462305056fb2d06ad0aaa17ef93e9632"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "fa3755e05c86357a65f8f20bf2349831"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "8d71297e87d8b3d0be2d5c6a9b03bdf6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "acc0a30ea8898b6b4bd336d583b4ecb5"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "c5319c78e4b84b7179a3daf8ae275144"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "520237eb618a07aaf9cde6950ef73fac"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "6c53820ac89e333e43c98d6b6c43ff71"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "38e74bdfbbdc687a6da8a41258f4ed20"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "558b73a4459c2d65ede4070f071a7455"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c2f2f92961086495b58c95dceeef36d4"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d5a4dc8b08a672ba8e51f8be7cb30ec2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "00ee3a41626239f986a6633bb08584ab"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "dcc27336088773620d7122083f747f30"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "8dce20606553eb62a87971248a3bee4e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "83b66a683ced6798049de5848baba5f6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "83523dbed1f019698c47622093e0c437"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a38a78b8a5b960eeac15d36ae95b48ec"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "84baa99217a8dbe668d7841b0771303b"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "175ebfea56f2d1d2c976eb53f2d62a1d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "ef508f877f56f1b9f540ca6d0eb1bc69"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "edc85a1272c66274eb15038904e4d550"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "6c8deab1a0aeebb57c00ea8b83fcf3e6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "a274a92521728d06e43a004a547714f1"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "9e04748fd7817f588987c0ea1851e039"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "f6ca442cf8052fcd14f296297b98939f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b7666b48c74901364c1ccfca00defe4f"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "5bd4d8c8d96b40913ae34c9e85ea6fc2"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "3b1a7f75251211da227533aab299002b"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "dbb6d1227f44369fb947bef3ec789872"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "9940746e2f2652a1eaf545be86a7ef1e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "775cc8834012bb7286a44207e29e0ec0"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "71be66166a6f96ca07f1e07174e3e757"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "0c2ee56753b254f5aa1de7b9d1ce0bf2"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "9869ce26a6811a03b1c12621b9ab0c53"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "9be784dfaf04afd36534d19952b497b3"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "3a562d3b9a1560039c4c81d4e5bd3da9"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "526d70257d33bc457bdf1501bebc6cd2"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "a923feb658b42b1df6a8a7ce562fce82"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "04a35c0191dbd8ebb3750d182d3dc727"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "05d060f38e804201a42b5a087cd8a27f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9b9134fc36dcca702700f3ab3a4aff0a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "011bf4a5e902845a1d9c839b5f3fc672"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5aaf74719bbc4276ad4bd6f8fafdeef5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "fc1ec1c41a08325a2870f0bcf334bd6e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "5bd95650c8878485d5565a52d51735a6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d403803e32ba9d0a39f4b2c52e9be666"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "372035d42761d1af9401d58128ba5909"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "44386b582d908b9f8fc114d1ff984d0a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a4bab0ea72fc364afd860634ea09341d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "802b3476f2b1d33e9ccc249cc6372120"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e200ae2ca0694396aae072de1e7ffeb5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7f53f9e5a8b35f0743a8eaa1ea265e35"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "3583d7f124a4e81f2fdb434992dde1e6"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f4c799bc4619df9b13eaa51958ab06f4"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "360a4826eb31e9ff1899aa107566202b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "97be1b0d08ef354271b13c018b7c6b41"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "60e8a1315c1a4dfdf42e6a088a4f608a"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c8281acdaca7b75af7bc7e9b6ea097e7"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "6e61bee130224e46b2fd503b28a3377d"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "dc04b5ed242160a3db5b00c3d61e32e4"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2a7d74484b5cbff1de3459e7d1f5cb82"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3080a4fcf22e8db22b945a4017ba8340"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "92da683640f930cb644f321a702cc8e8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9f18164a98633de01cb24f0cfff9f368"
  },
  {
    "url": "tag/github/index.html",
    "revision": "39db5b3762c2b94901153388610c48e0"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e9f9fb834cbc4f62c4865d07e760b622"
  },
  {
    "url": "tag/html/index.html",
    "revision": "485f9511cef0a96bf8461392b90d9848"
  },
  {
    "url": "tag/index.html",
    "revision": "025bd7f2759157100f2b6b47f399e2df"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5a24406c22fa5f1ccff28863b1077a01"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "bfdcd07e36d99027d285cb0a9050a4e0"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "de7880739b629b194d1a54b1c1a13d66"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "5a5e3e03d2989d22f5565f9bbb76bb49"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8b4adc894434fcc2d7fc560c2d62f2ff"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "79db2b57f75578084ac056549c377a47"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "f73b06edec80c0cc8eba074b3b7ce42b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ca1a7a8ccaffb074a5e91f003cf54f2c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "1d0f614c12ec75ccca10cc5017336df7"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8eb2caa40e3d296d0ae3227f70ab4afe"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9b51d4e7d9335c2120bfe603a1f08404"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "19421362388691804e6866167ca66aff"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9030f9e65f9b0d417ca6de419761a850"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "66287132357459f469e2eed6170cebb5"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "deb097fac7955445a60c17772f66590a"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "b5ff560873921a8ad1d4a160eb2a4d1b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "cd1448603a88330aeb7751d701a41f65"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "1af5e6499dd0ad6648b0a232e10bb4b9"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "20515d87c12c874ba32f2738e10edcad"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "eae429c4c403c9f7a7a3db7d7b2cdbe9"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "296bcd35a7781cb23ea6af878e87d152"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9017d34cae853e0d35e0ed6cd582a68e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "0905640ef6c6782f0a49e1464ee1efbb"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "b4282d75723dd4137d1ecb74a0e669fe"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "7f7952502c0631d7c2e25a7dab03a578"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "129bf8e5faa3c9962a8967d17ee43fe5"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "185f9abcc9ae6d20acdc6af2202b304c"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "9ca87a45a7e786b9780a56f8445c0277"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7392194784369367fc3e3253d59edb4c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "991a8ee09587282b6633ebd0ed6585e1"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "2c22a3152646a4291f34ab8c10393564"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "4a4a9387d791f759f5fc31287a43be5e"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "8460202353d842433d63897eecb717a6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "da62bd60639a8e93237b571d76ff678d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b238e8f4af5be8308f73d6863e87b003"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "b18a27a63889d077eb55f3f8222123c5"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d5bb3f8ddea99e735a29b7b617d499f2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3a3b08b3acabe1a3519dc94b6e59e661"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "bcc374e8eb497e8b13fad5360bd440f6"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "5d8d4fcfac2a1dc95dbe3154c1a4a389"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9b7d6e473b43fc768eba73235d43dd1f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "36f557448eb6416b7b85b6cdbd7863ee"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a77ee64fcd84d0c0c2b9571a635f3ce7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "94f887aee7df586b78f892b4ceb4308c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2860c45dc75f6af11456d6a9106e6196"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d012c9a7b962a4ad13bcf58ad4686eb9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "7e5ed588895622be110f27598eb55e0b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "840ba899cb217dc777948b2b5b040f92"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4db898a73534f18cc54c16c699ab5598"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e5ab68b4a362fd5377ec4ceeabad8b1a"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9d17d0897bed52687d7b8e32c7fdc52b"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ed333512d8ae7e7029503a2a2a02c98d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c1537fa1eb4db06e47ea0741832a41a2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "c1dab00c28890e4b4b08031b09ebb18a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "709b55b0e37e268d82686589414ad80f"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "e5c26f19de1a63fe5ec3056ae4c6cf7c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "827b27b6b4d5c1d0f8fa164fd01f9b93"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "aeb40405c07048ee2ca363503987f5c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "c4c4ee9731167cd137fb76e389962d86"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "7c6afa80f6b472495fce99e14d9c1d25"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "71132dd1ee24fee653a4f49d0db5756b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1bc4048aa1cb5d142680f72a820d8176"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "bfa58c94aa3970fe4cb63afc7dee4bfb"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2016d320085dddea1886c67779300e06"
  },
  {
    "url": "tools/html/index.html",
    "revision": "451d8dac30739c6df7c2f36be94d9710"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ae042bf13e108d830e86ad2eb81d87c9"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4cdf26ec32c1dc56440d1ee8fcc51949"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "52424cb5e37fdc26162be72a2a5e2e21"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "55ffc6ec37d322356e8a10377e89eb07"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "162072294038386e1aba36c5951d1599"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "fa4c707cc0b95879fd2ebbe123ec3014"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "02014d421a4be93c977f1ab1353ab7aa"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "74ffafc95544315e572cf4dc49e97135"
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
