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
    "revision": "9bd5f071e36b63eec4b173d902d94568"
  },
  {
    "url": "about/app/index.html",
    "revision": "221f09ef9ca24ef51f91cc93ced218d8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c226a144f879cd3417dd57c7abec41eb"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a6e3858b76448fcfea50cb66223e1b87"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "55f30c38481817eb3f8cc9fe670522cf"
  },
  {
    "url": "about/index/index.html",
    "revision": "dc107c8ffc51ee7585d842efb75d3c08"
  },
  {
    "url": "ai/index.html",
    "revision": "4c97945ed92a11e0757a6d8df2c18953"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "71469c45e3381a13942e8d2b439d9e5b"
  },
  {
    "url": "assets/css/0.styles.52897987.css",
    "revision": "4dfbe691fe12515b916bf86d16453d60"
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
    "url": "assets/js/1.03849e3b.js",
    "revision": "d6e0253421131044ddd9fd19fb5de6d1"
  },
  {
    "url": "assets/js/10.04c3e2b9.js",
    "revision": "407ae0bc7e70685997aca8a1e26145db"
  },
  {
    "url": "assets/js/100.c8de2091.js",
    "revision": "b376cefe4824daa09392801036823e67"
  },
  {
    "url": "assets/js/101.6e1d97f6.js",
    "revision": "85ad6aa0fde004b0c65ab018d08c1ea5"
  },
  {
    "url": "assets/js/102.b16ae2ca.js",
    "revision": "517ec77c2eb61fe15730496b663e055a"
  },
  {
    "url": "assets/js/103.376717cb.js",
    "revision": "80103e3a4f7192af3a5bd3fb3701f110"
  },
  {
    "url": "assets/js/104.b83ea381.js",
    "revision": "65b069ae252ea407ef34733a8564b002"
  },
  {
    "url": "assets/js/105.394df58d.js",
    "revision": "871b50841ff94a799cb4c386437f9b23"
  },
  {
    "url": "assets/js/106.c8a8f1ae.js",
    "revision": "373f55e70a75cc1da2ae56283740c084"
  },
  {
    "url": "assets/js/107.cb0b3106.js",
    "revision": "26b1a070084a821720b22681cb0f0092"
  },
  {
    "url": "assets/js/108.0d3b87aa.js",
    "revision": "baf6060cd3000e17db49499508df710e"
  },
  {
    "url": "assets/js/109.dffcfe2e.js",
    "revision": "11f0417630391c697860eff11037485f"
  },
  {
    "url": "assets/js/11.2e3ea08a.js",
    "revision": "ca5d884267f2b19ff9dceb613226f3b6"
  },
  {
    "url": "assets/js/110.d7af09d5.js",
    "revision": "5fbe79b58a79be4046c46305587e5811"
  },
  {
    "url": "assets/js/111.cc03ddf9.js",
    "revision": "be3b21bd4a3ca6a044e8c2d66a6d443f"
  },
  {
    "url": "assets/js/112.a7277b7e.js",
    "revision": "116f473ecb0b3699ced1579baa35d147"
  },
  {
    "url": "assets/js/113.991f21f3.js",
    "revision": "515c1e798f0154bd77308807c8796f69"
  },
  {
    "url": "assets/js/114.540cbfc9.js",
    "revision": "bad46386b4ab88808eaf7b663e358755"
  },
  {
    "url": "assets/js/115.6a44abe0.js",
    "revision": "dd7f6be84cc7d1ba2a5fef4d68e5dd79"
  },
  {
    "url": "assets/js/116.26aa8930.js",
    "revision": "19b4496c67fa773ce78d95f4a12b21a2"
  },
  {
    "url": "assets/js/117.7ca10faf.js",
    "revision": "757fd1c1018958aa86780a2bbf16bd3e"
  },
  {
    "url": "assets/js/118.01d17f19.js",
    "revision": "6177835e8ee2d71c9396a8ed512d51f4"
  },
  {
    "url": "assets/js/119.c6d350ce.js",
    "revision": "ffc278f80d2b093a536ecd4dbd40562f"
  },
  {
    "url": "assets/js/12.0b48fd98.js",
    "revision": "b4eef22d6ced6807e66d6bb4bc9ef0e3"
  },
  {
    "url": "assets/js/120.2e6b6a09.js",
    "revision": "2693b215624ac04dde69907b333ff7aa"
  },
  {
    "url": "assets/js/121.bbdf6649.js",
    "revision": "f56a6124c23f9e9e9d36669ebbd92637"
  },
  {
    "url": "assets/js/122.1bf59d4f.js",
    "revision": "941100546d73ae6d4eeae9884e83fc50"
  },
  {
    "url": "assets/js/123.b79cf024.js",
    "revision": "3e907a7b0556b3cbc74aa6a7337fda65"
  },
  {
    "url": "assets/js/124.178448fc.js",
    "revision": "2ab4627bde876ffbd1d6443e52bbd637"
  },
  {
    "url": "assets/js/125.0da1012a.js",
    "revision": "e2621fc446e477dd14c36a502fa75476"
  },
  {
    "url": "assets/js/126.5e1c38a4.js",
    "revision": "f9e45595ca00aaea852a5c0c5cd69edd"
  },
  {
    "url": "assets/js/127.382e13c7.js",
    "revision": "dd3ea7a1ff40a557dfb25590b905c479"
  },
  {
    "url": "assets/js/128.27a9e5a2.js",
    "revision": "97dfb565467541fc498d49e5a5effda8"
  },
  {
    "url": "assets/js/129.112a2bee.js",
    "revision": "866e71b24250797402893973307e0d40"
  },
  {
    "url": "assets/js/13.0a952e9d.js",
    "revision": "4a62b3c227de0aaadab69cd597f31daa"
  },
  {
    "url": "assets/js/130.e92810c1.js",
    "revision": "af45bbdfbe891b5fd3f08cc32609585c"
  },
  {
    "url": "assets/js/131.3aca8420.js",
    "revision": "7ddfd3b5c615c6ce7be9e6916439c1bf"
  },
  {
    "url": "assets/js/132.2d25b749.js",
    "revision": "846b17f18da678a90d7064d86d14cbb4"
  },
  {
    "url": "assets/js/133.b510201d.js",
    "revision": "c0a92f0cd10f666c91256523582a965f"
  },
  {
    "url": "assets/js/134.53ee34b7.js",
    "revision": "413d47f2798f4611849a3b10a01be63b"
  },
  {
    "url": "assets/js/135.9e1b32f1.js",
    "revision": "1bd34a9bd01b6424a939224d888bc3d8"
  },
  {
    "url": "assets/js/136.4cd8f3f1.js",
    "revision": "f20815f216f772f7301b8e70fa08d838"
  },
  {
    "url": "assets/js/137.8600f092.js",
    "revision": "e69789d96465d860879bff95972b0725"
  },
  {
    "url": "assets/js/138.923cfa23.js",
    "revision": "bba2b96544ad5034a071a84768d65a1a"
  },
  {
    "url": "assets/js/139.2aedcfe6.js",
    "revision": "fd28d7d23b241ed769039a4ad4ca7df9"
  },
  {
    "url": "assets/js/14.aa3fb27c.js",
    "revision": "0e8f7312893d0a56a3b113fe3cf572bc"
  },
  {
    "url": "assets/js/140.5bcf2fd9.js",
    "revision": "c450635c3945406877c6e94cd412f4c3"
  },
  {
    "url": "assets/js/141.1f280c99.js",
    "revision": "8d4876017670eb9b136a39e220b9e20a"
  },
  {
    "url": "assets/js/142.0a7f4162.js",
    "revision": "de02318d5dbf843d87c641c8d1866fd1"
  },
  {
    "url": "assets/js/143.1841cbb1.js",
    "revision": "89643acc97292006c502bf68384f6a2c"
  },
  {
    "url": "assets/js/144.89beaf63.js",
    "revision": "08d5882cfe60533d3a239eeed1a689f9"
  },
  {
    "url": "assets/js/145.3c459bdc.js",
    "revision": "2d083b18fa4169426b1c6474c7ba1a15"
  },
  {
    "url": "assets/js/146.a73dfd0b.js",
    "revision": "ae7d320bed1fee078da6efba4f27ba4a"
  },
  {
    "url": "assets/js/147.ae5b09c5.js",
    "revision": "12618991b1cddc06a944058513e5c98f"
  },
  {
    "url": "assets/js/148.5dbbf32c.js",
    "revision": "0de1f29ec58f0a3058a805e00d01403f"
  },
  {
    "url": "assets/js/149.3de99828.js",
    "revision": "1bf47fd1e8c4c301d6f7159b1ab39d5e"
  },
  {
    "url": "assets/js/15.a342b896.js",
    "revision": "0c21c202032c50db0573373398f0e5e2"
  },
  {
    "url": "assets/js/150.9ef3c000.js",
    "revision": "5199cd92064e808558bdd3fa18c58da8"
  },
  {
    "url": "assets/js/151.94260aef.js",
    "revision": "6bf88437f681ef08dc980f067559df91"
  },
  {
    "url": "assets/js/152.cfd29c27.js",
    "revision": "bdd80f07bdf4072b8934bcab0e81305e"
  },
  {
    "url": "assets/js/153.b92a4fbd.js",
    "revision": "09be08f88634e037bfd07cca0d259600"
  },
  {
    "url": "assets/js/154.8f121d37.js",
    "revision": "7d96cdeb4e84bda5f3411d335e552606"
  },
  {
    "url": "assets/js/155.24535347.js",
    "revision": "012534999f29065a4d1d2044784e6015"
  },
  {
    "url": "assets/js/156.f7c77910.js",
    "revision": "c070775352b1191ef5558cc65bc1fb84"
  },
  {
    "url": "assets/js/157.8ca6874a.js",
    "revision": "2d7d2dba0ec88c2323096173ba289813"
  },
  {
    "url": "assets/js/158.8918d61b.js",
    "revision": "dc3f736e08f554c884c6f6dc3199c7d6"
  },
  {
    "url": "assets/js/159.d9117d76.js",
    "revision": "3282c22b4d3d10c43c8045808ff29d2a"
  },
  {
    "url": "assets/js/16.c1815a9f.js",
    "revision": "d2a05c03fabb66edefbffcf40efdc18e"
  },
  {
    "url": "assets/js/160.b311fbc3.js",
    "revision": "bd7168ca33aef62e17a913022193bcd4"
  },
  {
    "url": "assets/js/161.13c4ba05.js",
    "revision": "35a6ce24e6b7906268c7e9ed2d2ede23"
  },
  {
    "url": "assets/js/162.857af697.js",
    "revision": "fc7a5099914ab6b8033fffd7ea1da28b"
  },
  {
    "url": "assets/js/163.737baa6a.js",
    "revision": "d7614ef46b34f0f2320a401e304153c6"
  },
  {
    "url": "assets/js/164.f32f4af3.js",
    "revision": "752f232a8665a244d8cbdf2740ec1727"
  },
  {
    "url": "assets/js/165.8e1fd5f0.js",
    "revision": "fb11063e07353f706a494cb9b20f5784"
  },
  {
    "url": "assets/js/166.b2145c83.js",
    "revision": "b654a1571184f8f255bad511652c9a05"
  },
  {
    "url": "assets/js/167.f5a64640.js",
    "revision": "7745b561e5f953efdc81fdf6c9c877c3"
  },
  {
    "url": "assets/js/168.ced9113c.js",
    "revision": "0cbe21ea53a6863ea1eb9696b69568d6"
  },
  {
    "url": "assets/js/169.ea3e8396.js",
    "revision": "16f48d2abdaeac330c70aaf1a1b38c0a"
  },
  {
    "url": "assets/js/17.52ae4edd.js",
    "revision": "6dd6eb943cc0c849ce36f4a585b7e366"
  },
  {
    "url": "assets/js/170.4cbe13cb.js",
    "revision": "9d5e8f9fac42871c05e73214275017c7"
  },
  {
    "url": "assets/js/171.7e698afe.js",
    "revision": "4d87de9c2df8bf45fdcfe695376b8003"
  },
  {
    "url": "assets/js/172.d84a5c9a.js",
    "revision": "15475805bd16c269303c2e69914b16f3"
  },
  {
    "url": "assets/js/173.c13bc2ff.js",
    "revision": "3edde89da3907414cc3355eb32da6552"
  },
  {
    "url": "assets/js/174.18ecbc25.js",
    "revision": "4a05a7eb88b226a82897d47cb21e13ee"
  },
  {
    "url": "assets/js/175.aeb9814b.js",
    "revision": "c64ebabafed078225015b66ad05c4680"
  },
  {
    "url": "assets/js/176.7816700b.js",
    "revision": "0c1e3d9334b84e5e2e65e2b5fe521fc3"
  },
  {
    "url": "assets/js/177.66c074c6.js",
    "revision": "66d1e4bcf6470c8cc1459ca7c5f28f3f"
  },
  {
    "url": "assets/js/178.7be8326c.js",
    "revision": "e52e58a8dc79cb744570065f10095169"
  },
  {
    "url": "assets/js/179.d2fb0bad.js",
    "revision": "b7db66c7b32c5b05369f5379b71d7c06"
  },
  {
    "url": "assets/js/18.0e9cc935.js",
    "revision": "64c21d356c417e769abfb868f87689d8"
  },
  {
    "url": "assets/js/180.d202f0e2.js",
    "revision": "8d5f049dfc8f32e739e4cdd25f8a8433"
  },
  {
    "url": "assets/js/181.8f707c57.js",
    "revision": "e09133318d70d3d3121a822c52ce8f66"
  },
  {
    "url": "assets/js/182.fec2cf85.js",
    "revision": "6d4d5d71fdf1a525ab1061fc4c395657"
  },
  {
    "url": "assets/js/183.875099e4.js",
    "revision": "aa38fb33a6d7792b4d0c1af70b76032b"
  },
  {
    "url": "assets/js/184.8768bf89.js",
    "revision": "de5e95d8d9e774a6db69e4c56c0c6492"
  },
  {
    "url": "assets/js/185.eba4885f.js",
    "revision": "ac45cae5260e3ade233dcd1210a697da"
  },
  {
    "url": "assets/js/186.5c29fde8.js",
    "revision": "83669093ff7970286f3c877e15f62f60"
  },
  {
    "url": "assets/js/187.242236d0.js",
    "revision": "631330fcbc3cfc9a743e68562747c94c"
  },
  {
    "url": "assets/js/188.9428fb48.js",
    "revision": "8fe4b2d8c64b6e132666d20bf64e1673"
  },
  {
    "url": "assets/js/189.766f46b9.js",
    "revision": "7da30f461a7246ba17833d691aa46d2a"
  },
  {
    "url": "assets/js/19.dd180768.js",
    "revision": "034879c4c33ef30d056ba240f30b9c86"
  },
  {
    "url": "assets/js/190.ee78bbdc.js",
    "revision": "a1f062c8e905cf25b25e3307afd179e2"
  },
  {
    "url": "assets/js/191.18daf8b6.js",
    "revision": "b8a124a73b5a18ea862a470d955a342d"
  },
  {
    "url": "assets/js/192.c5c093b6.js",
    "revision": "0e8f4e3000bfae5801472021ce80b617"
  },
  {
    "url": "assets/js/193.0c2cf44c.js",
    "revision": "f9eaa7c2f4b361a01959e165eb0a127f"
  },
  {
    "url": "assets/js/194.db43274f.js",
    "revision": "ad29a92670f2925bd0e8964cb305815f"
  },
  {
    "url": "assets/js/195.0c0160d8.js",
    "revision": "5fa6ba24fe62fa63c1482b54e96764f0"
  },
  {
    "url": "assets/js/196.bedd88ea.js",
    "revision": "74221b6bb57e1679b2ba7337d190f436"
  },
  {
    "url": "assets/js/197.474fa323.js",
    "revision": "dea10f2d46bab5a25add7e018ed21178"
  },
  {
    "url": "assets/js/198.9aa970d5.js",
    "revision": "60118f3f8f5c9ff6d0c69122ab3a2efa"
  },
  {
    "url": "assets/js/199.74a49afd.js",
    "revision": "2952dbd7b416903d3f6ee4aba6cd29a7"
  },
  {
    "url": "assets/js/20.bd97c877.js",
    "revision": "96df7e8b2f1ca95f265b88eecb9dbcf3"
  },
  {
    "url": "assets/js/200.4ae22ec4.js",
    "revision": "5400bfc406318455ebcc00060d41b792"
  },
  {
    "url": "assets/js/201.506a955c.js",
    "revision": "a6c6cb0e8340344cf8331e99218cc77d"
  },
  {
    "url": "assets/js/202.25cff29d.js",
    "revision": "df4bdd6f4c9e736afad4259b8b88a7bf"
  },
  {
    "url": "assets/js/203.954c7aa0.js",
    "revision": "188b7505a7a9ac0181520441fc6ab279"
  },
  {
    "url": "assets/js/204.b75331d9.js",
    "revision": "e35c80df556a33f5eb799dd2ca341f88"
  },
  {
    "url": "assets/js/205.9a68f8b8.js",
    "revision": "6478a3def36ec5f8e79fbf61b566c122"
  },
  {
    "url": "assets/js/206.4761ee71.js",
    "revision": "5092faaea35ac3e3b01fffab57635863"
  },
  {
    "url": "assets/js/207.3f9d3f82.js",
    "revision": "b3320b6c12ce23c6acff1709230473fd"
  },
  {
    "url": "assets/js/208.1b12d24b.js",
    "revision": "61ae4b8b363bc90659cb7e9fc8701229"
  },
  {
    "url": "assets/js/209.91ec4288.js",
    "revision": "dbee86ad03a14d2a39558206d028039a"
  },
  {
    "url": "assets/js/21.1aa947ef.js",
    "revision": "e89286d7a0513304db81009d523f2766"
  },
  {
    "url": "assets/js/210.1d2028b7.js",
    "revision": "7e20660014436eed450ac1aa0c054f56"
  },
  {
    "url": "assets/js/211.25cf8bb6.js",
    "revision": "03d126dc11d1aa7fe17ef21eae6b017b"
  },
  {
    "url": "assets/js/212.f5219dc8.js",
    "revision": "708a2b4d7e231c92d4e1d631e12f7705"
  },
  {
    "url": "assets/js/213.92eb6619.js",
    "revision": "4510dcc5a8ce3c42ab3687388cc7ac2c"
  },
  {
    "url": "assets/js/214.6bff4c8c.js",
    "revision": "745a00d64bd74017607891dc8013f9fe"
  },
  {
    "url": "assets/js/215.9d554655.js",
    "revision": "39e671886d72f17834d6e168b27509e6"
  },
  {
    "url": "assets/js/216.348ca64c.js",
    "revision": "6cf04c4055e31bfbf58e3e5e547596ca"
  },
  {
    "url": "assets/js/217.066ee447.js",
    "revision": "508b2e6a6e4a33386e4565b0fa3336b9"
  },
  {
    "url": "assets/js/218.fcd38c39.js",
    "revision": "251736133ced872ae067a9751ed6309a"
  },
  {
    "url": "assets/js/219.21b23050.js",
    "revision": "bbf19306f3da2991c22d72cc3279b772"
  },
  {
    "url": "assets/js/22.a60ffa29.js",
    "revision": "b282c57e5ab291e4927c1a74da0f6fd1"
  },
  {
    "url": "assets/js/220.7e99dad1.js",
    "revision": "699ac00aee00e7194e9dc4ef4c3328a4"
  },
  {
    "url": "assets/js/221.3c702f60.js",
    "revision": "89bc1de526a8c299b9781e831eeb0403"
  },
  {
    "url": "assets/js/222.ca5d8889.js",
    "revision": "23ef5dfbee8557e51680a572cc775750"
  },
  {
    "url": "assets/js/223.d2120a5c.js",
    "revision": "0c7a2df26bcf1c27468e5cff7e5a454a"
  },
  {
    "url": "assets/js/224.994049d0.js",
    "revision": "28c582f4676bc323d69f289006d993c5"
  },
  {
    "url": "assets/js/225.30c2850f.js",
    "revision": "7d82d9bb4f45c3b920d2281b22d10302"
  },
  {
    "url": "assets/js/226.5b5f2fed.js",
    "revision": "f0d38e9eae88aa72f0aecb944ee6535f"
  },
  {
    "url": "assets/js/227.a820b581.js",
    "revision": "c89505193724ec6c9921f29652d5cbf5"
  },
  {
    "url": "assets/js/228.ab0be599.js",
    "revision": "c8ccee07daa66e873519953321ee4a03"
  },
  {
    "url": "assets/js/229.21ebf3dc.js",
    "revision": "0568e5cbb325d6a0e296377912ba386b"
  },
  {
    "url": "assets/js/23.c0389be0.js",
    "revision": "2e70fd7dc508315c05c263b94fc017a8"
  },
  {
    "url": "assets/js/230.36188a98.js",
    "revision": "c28e96981f139394f95c5df9e4889a6d"
  },
  {
    "url": "assets/js/231.41a4d25b.js",
    "revision": "07b56d3f8fe2093106af1660f1d597e4"
  },
  {
    "url": "assets/js/232.e8b72444.js",
    "revision": "940da1d709873c357632611184341fa7"
  },
  {
    "url": "assets/js/233.583be77a.js",
    "revision": "e0e5da94bed27d41253f861bf8f62f9e"
  },
  {
    "url": "assets/js/234.c24ee032.js",
    "revision": "77cd5502c61116f6201561038425e632"
  },
  {
    "url": "assets/js/235.d92a2780.js",
    "revision": "75c3751c484817ecc487e1a3f9e51950"
  },
  {
    "url": "assets/js/236.3b355ea7.js",
    "revision": "501a1b6edeca3bd868478b91f21a8b9c"
  },
  {
    "url": "assets/js/237.f7143edb.js",
    "revision": "6317a4e9cbf75371545ccf1aed232bdf"
  },
  {
    "url": "assets/js/238.8b811925.js",
    "revision": "898b6b71186881aad224303c9eaa6c13"
  },
  {
    "url": "assets/js/239.692c0675.js",
    "revision": "7683bc584f165b2c12b8dba96ec7d595"
  },
  {
    "url": "assets/js/24.ad8fc117.js",
    "revision": "07993bf7bf9f4947029d1d78437b7d87"
  },
  {
    "url": "assets/js/240.6b9be32d.js",
    "revision": "1d31021404b6c586ded6e18b5e315282"
  },
  {
    "url": "assets/js/241.8f576efa.js",
    "revision": "65a3c26caf62a125179193cdcc999b38"
  },
  {
    "url": "assets/js/242.b83aa64f.js",
    "revision": "b6b5ead1ca97c9abfc5d2326249b42b3"
  },
  {
    "url": "assets/js/243.0518ec4d.js",
    "revision": "cf202f7c7f99672ca3e8a1c28a15f565"
  },
  {
    "url": "assets/js/244.522754ff.js",
    "revision": "ac6a625027af2647e7c142bfbdf6b0eb"
  },
  {
    "url": "assets/js/245.c8f10eb0.js",
    "revision": "3efc8d0d966936cf3de7f401b80cdd20"
  },
  {
    "url": "assets/js/246.62a1885d.js",
    "revision": "f41473b09fd7eba5d64f3a76e10a410f"
  },
  {
    "url": "assets/js/247.db38c65b.js",
    "revision": "f4028e01bc99ba03e334bb2e3d989760"
  },
  {
    "url": "assets/js/248.d4b464fe.js",
    "revision": "3bc64c728d342e4c17ba271495e555f9"
  },
  {
    "url": "assets/js/249.38786934.js",
    "revision": "5f67f60d9055398cd82e474e07a3b6ec"
  },
  {
    "url": "assets/js/25.a330b5aa.js",
    "revision": "046bd591cefeb9ee2c972de4309995db"
  },
  {
    "url": "assets/js/250.adadabab.js",
    "revision": "745afe59d5fbfd1a500b8c8b26402efa"
  },
  {
    "url": "assets/js/251.03c31d4d.js",
    "revision": "3fe94670f34b788c997599a336193134"
  },
  {
    "url": "assets/js/252.f82a1bea.js",
    "revision": "c6fa50b44a3b3614c4789bc8349d6240"
  },
  {
    "url": "assets/js/253.43ce65fa.js",
    "revision": "15b51aeeb2b42afad8bb9411bdfdd582"
  },
  {
    "url": "assets/js/254.113a972e.js",
    "revision": "01b8ed180baf120b73834016925e9a33"
  },
  {
    "url": "assets/js/255.e837925d.js",
    "revision": "05ac7f423c1f97139e944aa695aba6fc"
  },
  {
    "url": "assets/js/256.2d0087d1.js",
    "revision": "5292b0e584f27dd989dd641a0005d8d2"
  },
  {
    "url": "assets/js/257.b1e8a33d.js",
    "revision": "2852898f8fb726d4f755af4409643a5e"
  },
  {
    "url": "assets/js/258.30739088.js",
    "revision": "a7df880877aa938d5fcd3aa8de03cf7e"
  },
  {
    "url": "assets/js/259.7cebc962.js",
    "revision": "e2cae6d0e64be2d0e4a8a520d9ec18f9"
  },
  {
    "url": "assets/js/26.5ed9774c.js",
    "revision": "dd81b4279aa7ac38fdf3d4e4e607a148"
  },
  {
    "url": "assets/js/260.583ac0d5.js",
    "revision": "03eda24e1ee115f431fa5d2b4c33842a"
  },
  {
    "url": "assets/js/261.d83fef36.js",
    "revision": "b2ef98176c06c6c6035596aeae817194"
  },
  {
    "url": "assets/js/262.cd9de63d.js",
    "revision": "103074e9f0463793444757e0015a0f96"
  },
  {
    "url": "assets/js/263.103411ca.js",
    "revision": "888db85984c3d53b16110993016b32a7"
  },
  {
    "url": "assets/js/264.a9cecc6d.js",
    "revision": "2d27dd58e1c40aed7c570228557c5236"
  },
  {
    "url": "assets/js/265.a846074a.js",
    "revision": "7c68d38ed1c0324ae07468ca11157379"
  },
  {
    "url": "assets/js/266.00c136e2.js",
    "revision": "57f5337d35c6ed6970780ac81b97b459"
  },
  {
    "url": "assets/js/267.92305c0f.js",
    "revision": "c5e1963235db735cbc33fbc31edb72ef"
  },
  {
    "url": "assets/js/268.e7a18fef.js",
    "revision": "1552a6e0f31c4f33e98a0e430928c8bf"
  },
  {
    "url": "assets/js/269.7ff951f0.js",
    "revision": "82ca61601d21c4289c30627712610db9"
  },
  {
    "url": "assets/js/27.14affd52.js",
    "revision": "ea86e0bc1b5b590c92f24541b9dbe72f"
  },
  {
    "url": "assets/js/270.552eb4bf.js",
    "revision": "ffe72549954b900690003016977acd61"
  },
  {
    "url": "assets/js/271.90009748.js",
    "revision": "76138405ceeef2576eeed81d33ea3549"
  },
  {
    "url": "assets/js/272.63c86190.js",
    "revision": "132ab4277c35850eab2f3482bcaf4357"
  },
  {
    "url": "assets/js/273.3f327165.js",
    "revision": "efaa14ebf61a8c1105291bc26994ac08"
  },
  {
    "url": "assets/js/274.f721c490.js",
    "revision": "d96e57987624424d68c51d284f377fe7"
  },
  {
    "url": "assets/js/275.a6cdedd9.js",
    "revision": "626a5677296cd7311227924b5cf83499"
  },
  {
    "url": "assets/js/276.8f56e3e9.js",
    "revision": "9c289af6ecac8c182f503e4bb19f29fc"
  },
  {
    "url": "assets/js/277.435a8c1f.js",
    "revision": "a55081f9a1019c7c89c2f31a2244b33f"
  },
  {
    "url": "assets/js/278.cbda1b0a.js",
    "revision": "dab10343713af737378f72e427cb98b0"
  },
  {
    "url": "assets/js/279.820d28a2.js",
    "revision": "8eaeb34dc988c7c7a35a02a81445bbc7"
  },
  {
    "url": "assets/js/28.aeb6a4c7.js",
    "revision": "1e95e511200b19002bb638583cd17adc"
  },
  {
    "url": "assets/js/280.6a065caa.js",
    "revision": "126ec44b5c609835744abd2e1ee46f21"
  },
  {
    "url": "assets/js/281.e3665f93.js",
    "revision": "88aeee91efd6b1de854db8c7f1664315"
  },
  {
    "url": "assets/js/282.b5af6175.js",
    "revision": "89ce15fde9ee9f4da3127247b6623186"
  },
  {
    "url": "assets/js/283.0270877c.js",
    "revision": "c97b756e2763d924558c7f3b6af4d6b9"
  },
  {
    "url": "assets/js/284.c74776ec.js",
    "revision": "5011c12c10959834e4c62a0b14cf143b"
  },
  {
    "url": "assets/js/285.fc0ce833.js",
    "revision": "5c90e0a7c18e3f8c5c472673e3e4d382"
  },
  {
    "url": "assets/js/286.e4ebf73c.js",
    "revision": "aaeb80524a8a390d561088cbda4a0168"
  },
  {
    "url": "assets/js/287.3401c88b.js",
    "revision": "a9473bd7b3a4c7047f22dbc3c41737ee"
  },
  {
    "url": "assets/js/288.97b42298.js",
    "revision": "91f8426c4ab88d364dc35fb661a69372"
  },
  {
    "url": "assets/js/289.83467a2d.js",
    "revision": "a041c2d8efac6077259e4e1011392618"
  },
  {
    "url": "assets/js/29.0eedac0c.js",
    "revision": "4cc547920791a013d286b524baa5dc7c"
  },
  {
    "url": "assets/js/290.1a0483a3.js",
    "revision": "6a362455b63a0f586fa1e81fe6d6c89f"
  },
  {
    "url": "assets/js/30.c2529d4b.js",
    "revision": "4c34b17b27270ba1486cd4065b11620b"
  },
  {
    "url": "assets/js/31.422d5e66.js",
    "revision": "604ff7415f793bc925ea6095395a82a4"
  },
  {
    "url": "assets/js/32.b7207cd6.js",
    "revision": "46450687dfedda14f020e8772611322a"
  },
  {
    "url": "assets/js/33.c48cafb8.js",
    "revision": "b8bb2a0cc8c9709bd38690cd650a13ed"
  },
  {
    "url": "assets/js/34.5eda02da.js",
    "revision": "b5af7e45646ae1b05bf716c4a85ed4b9"
  },
  {
    "url": "assets/js/35.b02c8e4b.js",
    "revision": "fce97ad29f0d750ed65a1224f81a4b23"
  },
  {
    "url": "assets/js/36.7235935a.js",
    "revision": "a4559cbf16a30930afd4a621aa98a476"
  },
  {
    "url": "assets/js/37.d849aaab.js",
    "revision": "f9ae47572a4976d31c65e3393c8271f2"
  },
  {
    "url": "assets/js/38.68c98c7d.js",
    "revision": "43ddb8d0fe29e56ea24ddc529a2ad4d1"
  },
  {
    "url": "assets/js/39.5e0a5e62.js",
    "revision": "f7b43f96cd85846b09542f83904be41c"
  },
  {
    "url": "assets/js/4.4d9a412b.js",
    "revision": "b836d39500214782bf48832d97aa7f8e"
  },
  {
    "url": "assets/js/40.4e84b277.js",
    "revision": "80e5225429f02fa8cd8017a254670b93"
  },
  {
    "url": "assets/js/41.8ad00fd8.js",
    "revision": "34a21cac1dcbcae7bbe5b4fb4561316f"
  },
  {
    "url": "assets/js/42.f3d802c5.js",
    "revision": "247aef21ad98230f06a593de11401e08"
  },
  {
    "url": "assets/js/43.3cc6a942.js",
    "revision": "84a4adf214907181b98ae50d1d6a9d64"
  },
  {
    "url": "assets/js/44.cb34ced1.js",
    "revision": "18c5bbf639c8193ce03e189d033f8304"
  },
  {
    "url": "assets/js/45.fe7e1025.js",
    "revision": "f10d779be4fb2941905566b34c3014ff"
  },
  {
    "url": "assets/js/46.c691a053.js",
    "revision": "e4b7c8ffb04b8b24ef0b401137e319da"
  },
  {
    "url": "assets/js/47.9df3008f.js",
    "revision": "79a6186cc6483672cecf90150d621785"
  },
  {
    "url": "assets/js/48.d9fe95f5.js",
    "revision": "104828ec66400aec346f637a7f4e270d"
  },
  {
    "url": "assets/js/49.e124ecab.js",
    "revision": "36dc350b0042b947c7c8a6c4ef12d92f"
  },
  {
    "url": "assets/js/5.43c3f80b.js",
    "revision": "622d4a544f4132c9b6afea6c56da577c"
  },
  {
    "url": "assets/js/50.45b4831b.js",
    "revision": "2383fe209c50e91827e29f197257e8a9"
  },
  {
    "url": "assets/js/51.a1f53f39.js",
    "revision": "08e25107a1d715392158a1a389166a09"
  },
  {
    "url": "assets/js/52.43acfba8.js",
    "revision": "973c573681155074f5fd6e4cf6c17ba7"
  },
  {
    "url": "assets/js/53.4f0aee69.js",
    "revision": "3e65b5e1ce511a32f28413e6cea3e841"
  },
  {
    "url": "assets/js/54.cbaadc92.js",
    "revision": "8fe82344518c79f773b79429a11dab89"
  },
  {
    "url": "assets/js/55.b714c4aa.js",
    "revision": "582708fac8915910b44a750784c5d6d1"
  },
  {
    "url": "assets/js/56.f2f65ae5.js",
    "revision": "6ff039f7eda24bc3162e0e91b72a5cc9"
  },
  {
    "url": "assets/js/57.273a613e.js",
    "revision": "6e0bfb0d0ab72b3d79365707679b4c36"
  },
  {
    "url": "assets/js/58.500a39da.js",
    "revision": "35a98586005cd67066eead08f44c96b0"
  },
  {
    "url": "assets/js/59.dd96c0cd.js",
    "revision": "241c5218b4c89ab084f31c6aad14aa86"
  },
  {
    "url": "assets/js/6.e059304d.js",
    "revision": "714339683f474290ac4b1b9b4bde291f"
  },
  {
    "url": "assets/js/60.6a93cec2.js",
    "revision": "017acb88e9708b1e95a74aa9ded19dd0"
  },
  {
    "url": "assets/js/61.160b3111.js",
    "revision": "8c68804bf855fb8ab75d83f786a9bc70"
  },
  {
    "url": "assets/js/62.53da3a34.js",
    "revision": "56808ed45a0df8f36633d0f3c5b2a81a"
  },
  {
    "url": "assets/js/63.87f4b7e1.js",
    "revision": "3766ca2299d550d399c24a0f94105f57"
  },
  {
    "url": "assets/js/64.0e8e9f81.js",
    "revision": "9f6550e5f22abc5542fbb568fca9653a"
  },
  {
    "url": "assets/js/65.14c808a7.js",
    "revision": "3047cdb9d646fe4db943db48ecd5b95d"
  },
  {
    "url": "assets/js/66.56355a72.js",
    "revision": "7e25eee79c0d69c32bace0c870f8ab91"
  },
  {
    "url": "assets/js/67.eb5b6cbe.js",
    "revision": "45bfc04ae1c2b2925776820ad1882ff3"
  },
  {
    "url": "assets/js/68.6b4e8cd0.js",
    "revision": "7bb7fc1903767056cc06c0c2dccb16b7"
  },
  {
    "url": "assets/js/69.bfeee975.js",
    "revision": "dd208571ec64a4783dcb973161e7446a"
  },
  {
    "url": "assets/js/7.9d03ddec.js",
    "revision": "84a7d7b09c3ec4699fb8b0df6ab68757"
  },
  {
    "url": "assets/js/70.f0e3b679.js",
    "revision": "6d6fde3e4573a52cb9c74f0d3eea003a"
  },
  {
    "url": "assets/js/71.e9702cf5.js",
    "revision": "555d212a1483759d05bc99cbcc82fcd1"
  },
  {
    "url": "assets/js/72.608b6d24.js",
    "revision": "d1fb87179c202ce6a849effe273097fc"
  },
  {
    "url": "assets/js/73.1020cc8a.js",
    "revision": "1abc72cc4a28a95ba2176fe5c06bb9da"
  },
  {
    "url": "assets/js/74.332c5566.js",
    "revision": "32431fd5c05cc8e4233846b4e7772e9f"
  },
  {
    "url": "assets/js/75.191224ce.js",
    "revision": "680d190565838c81c53993ab39c604df"
  },
  {
    "url": "assets/js/76.3672fd9a.js",
    "revision": "b2251fe77f4980f10dd26de94e3388b1"
  },
  {
    "url": "assets/js/77.fed5a8e6.js",
    "revision": "3914de23a10036e437af0287ad629937"
  },
  {
    "url": "assets/js/78.9af1dc07.js",
    "revision": "ee70350acafb5e6bb15ee68e788d298f"
  },
  {
    "url": "assets/js/79.29a5b139.js",
    "revision": "46281e2b76d13b4d6f728a9483f38f3f"
  },
  {
    "url": "assets/js/8.9784c77d.js",
    "revision": "9fe24dee605c863d68d564d047023e54"
  },
  {
    "url": "assets/js/80.711c8016.js",
    "revision": "3553082c69a215b836594fc7197c46ec"
  },
  {
    "url": "assets/js/81.8d42c096.js",
    "revision": "238db2708e32fa6514e9940ccba7fb2a"
  },
  {
    "url": "assets/js/82.7c2e001b.js",
    "revision": "23e7b3fbb82a87b868c434e762c7d85d"
  },
  {
    "url": "assets/js/83.4cf57342.js",
    "revision": "5cdb56a020be314106005c5c374671c0"
  },
  {
    "url": "assets/js/84.2d246e25.js",
    "revision": "ca622ad19c3b43d72da404630cc631b3"
  },
  {
    "url": "assets/js/85.d3d14bd9.js",
    "revision": "76244752a419cff1064c609404833e6e"
  },
  {
    "url": "assets/js/86.bf8193ce.js",
    "revision": "b3e1e4bb3d147835b3525dd74b89891a"
  },
  {
    "url": "assets/js/87.bc1586f1.js",
    "revision": "ed252e81eaac5d103f05595c741db1bb"
  },
  {
    "url": "assets/js/88.77ececd5.js",
    "revision": "0d5d4613488f4686aa64cf0a83d7a214"
  },
  {
    "url": "assets/js/89.ac4a080d.js",
    "revision": "22db1c23b8cd25fb6f5642e526497b4f"
  },
  {
    "url": "assets/js/9.d99b2a36.js",
    "revision": "100ed8989b5aeb4e05a406135f3bc25b"
  },
  {
    "url": "assets/js/90.b83ef47c.js",
    "revision": "cf76c3c8e043f49bd035f73ba6feede3"
  },
  {
    "url": "assets/js/91.7d9ba6da.js",
    "revision": "40d39afcbdb16f8d931680d6a5d04cf9"
  },
  {
    "url": "assets/js/92.a7835224.js",
    "revision": "f0426c5b5113d131d68f7eed1a34c71e"
  },
  {
    "url": "assets/js/93.47f207cf.js",
    "revision": "61cdcba89875876456162923017394d9"
  },
  {
    "url": "assets/js/94.1965a6b6.js",
    "revision": "e86d8cf5fa219302f9e864cce762f03d"
  },
  {
    "url": "assets/js/95.6d3f93d6.js",
    "revision": "b2d037ebe94f21738fe359ba6f738b56"
  },
  {
    "url": "assets/js/96.906f7759.js",
    "revision": "2c4b886e912a9c52afa87a27bbf299eb"
  },
  {
    "url": "assets/js/97.353a42e4.js",
    "revision": "ac12525ae560bc968e9ac63cd8c0a73b"
  },
  {
    "url": "assets/js/98.f0ce8d54.js",
    "revision": "f2dd3e6fa4101eb988ecb825ddc09b88"
  },
  {
    "url": "assets/js/99.4d4e7479.js",
    "revision": "6de9b46040f73936a2b6a799c5ba4387"
  },
  {
    "url": "assets/js/app.9ada5b69.js",
    "revision": "2e0fb1487db8d1d7e59992834e0db884"
  },
  {
    "url": "assets/js/vendors~flowchart.b3384144.js",
    "revision": "4740c33d7acf3036ce1c5b4ca8ddee31"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "ada7a1cc7eadfdb6900163c992b6baae"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "dd92555b7665a754b9f5273fc71446c9"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c9b4562456132ae6fb60c7c5da6937ea"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "7eeec9550cc1158fb15d6347518e7dd1"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a17bac994f38714661b13bcafbe49f21"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "cc17308182158317ff50861d2c6396ee"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "7d147cc59ed6ca31a675887386a74e15"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2f3dfac33b1b6cefab7e06f79bbbd6fc"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "beb7eb40ab81f16f9b9924d0ad4afac8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d38ae4f26cacee3046f52919093f902e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "82f8317458b12e14d8b1cd4af13f9251"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "7f5dc1fb9534aeae62c008051c1a2d36"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "df1b5a5905bd150529717de3f4586cc4"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "034394ccb5152567b68a6d4439f25fd9"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d1e3055e810ed6d2a37e2b0f4bd87333"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "04580cae7b2f94b31cda0b9d34c0558b"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "daa28c62d06b60d8f1fe6095f83f76e4"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "0c2f6928b314a69815eedde96e0d54d0"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "7820db913b7293ea85225574dda9e93c"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "4ac8b7562b58a4a253ddd6fd7c251d1c"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "8cf886ead5832f29657eff0dcd81446d"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e92bd5a1fadf6705305ab1d28703c1b6"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "2205705d038fdfb1f8f42947768daa55"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "e2764744ac59093614353dc4ad8d28b6"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "0d22cb1c7618a51fac3f48bfa5a161f2"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "bc9e6231985dbece718b04fc769d1168"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "474afbbb465b1fb2b3129b9146fc3e21"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "26362965ded263fdc2636f56adb9743a"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "3b356dec8de973ca9017f4a72ce7b51e"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "8b2d658fd355927f6d2d757ff3123f39"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "4f057c313a1b33fc0eba60c4c2c80e2a"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "58e0fdf932ae57a577db6307e253429c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "44afc9d327a5bf9639acbf58cb4cc1a8"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ee72d15b67437e070f107c90b7aae837"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "92b5b357b87461fbca33465923ed077c"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "ffffc0e47aba9a47c8d0f4c469604167"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f03c08c35193b7f56c190af5733c0741"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "fd9df0e705819cac76b3d0a3b464e228"
  },
  {
    "url": "basis/index/index.html",
    "revision": "efa002416b0637603603fc3079a036b9"
  },
  {
    "url": "basis/os/index.html",
    "revision": "96bddc892e284dee8943e42342ad2771"
  },
  {
    "url": "book/index.html",
    "revision": "cb5562ba7790b61401c6c45d7590158e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7cff50538ed9f4d853201ee430ba7bed"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "cb1edac89de74c726b41e66cea07a6bd"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "545be98cb8aa7f449d9627c9690a1f3b"
  },
  {
    "url": "c/audio/index.html",
    "revision": "395745d6b5c51a4917d0e23147792360"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "eb5dfeb065e59488f6ebc6e4f308b603"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "8e8f325f0245a0be1a51d19a567c1f03"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "87dd4f81131a3e4f52900c1db933fb8b"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "15ab68f8c09904c68161105a1f5ec72d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "02c429a27c9e3d5ac7201f53665d0203"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "7dc229a2001d07f95e04f22dd7cca5be"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "881aa0b7edfb8f04d06d447a021f6bd6"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "46a16d6644f16e3392d418a0b09ca186"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "afbb2b37a4f94c0207131c7e898061f5"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b0958ae3ed74ed556a38a5c52e10fdf6"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "ce79435e447bc7d876609ca1e2cec441"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "dbaa62f07e98ffaed5e801f60e07ac47"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "f7f9d7ecb149842292cf579677dedc5b"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ee66a3b2a1054311bf6645d5b2907c96"
  },
  {
    "url": "c/program/index.html",
    "revision": "114f7fa0684abb1a04e947c50fd1ed94"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "5e3770fcb8cfe821a4814a6b7b24156a"
  },
  {
    "url": "categories/index.html",
    "revision": "9a213f34c4f6abdbc8394d11d0aa9478"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "f751a3a5de0cd12d237ee5b8c14b8554"
  },
  {
    "url": "figma/index.html",
    "revision": "9b7d68ad52503b117736e5fb758bf97b"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "609859b94422b44a26ca1595bb256b14"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "8b9d0bf9f9d5dd5d2e7b03027f905f71"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "1dc8609e6fb7cbf3a18bca72788f54d3"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "c6e1d759a6df8e3a61e8602739483c5e"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "4c279ac5ec6b2c5b59849d6af0e8778d"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "97ab46fa9c885c8a54962a7ed70a4124"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "f425ba474358dd0a98ec2ff7a23a0aa9"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "3834cf981b6994894d0933f125bbfdd1"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "b889e2492e348f3f4123bc91a09b9c9a"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "374769df1f8f16ea13784337fe9e7c55"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "eefa2f5df012b0f6c1c525071267c0af"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "15972e6875bfd07eb7398da7d08278f5"
  },
  {
    "url": "flutter/index.html",
    "revision": "c47db3613628e0c0852e21be2bff65af"
  },
  {
    "url": "flutter/point.html",
    "revision": "bb86d1bdda34edc461a924e70457dc42"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8904fa79cce7d6e43354570acd650f53"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5776d7ce11c6b1f01ccb456c657a47dd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d2f51f7fdf85da941c61dfa68e17522f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "67c12cfc5835a30ae95e936e8f6a0200"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0745ee36819c8052c94025d140b3c0fa"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b909596975dfc5fd8a331279f4f50f50"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f9dcecdc66be849a10ec59e7bc477d66"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1f90c1c98f671040712c660b5b6e6c12"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2dcb7ba1bf367f8203c68fb9dc67fb64"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3b9bed4d463fc61dc831d8c0040404d0"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7f5c297b7e114375541123a6af4f3fd3"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5c3952aee9d6179ebe31944ae9d54b7d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "4fba0a6eec2bbc5be781ebcd8f255a19"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "8ae9089136f35070c52bc6776a7764a8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "8043306e3a8ad5938969c1c5141906b9"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d99f159ca97169d781977e5995ca88f6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "e3ea4c888afc106eed94ddbe1a3d4793"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "72cf38ed219c83a1308335d676137070"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "75c3e2156975590396d9c5872921b497"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "e94587f3009ba3ba086f5fbe58cc2c6a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "fde68352b20c84bdc3beb783117cb96f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "b80ca31ceb8ab17fa23cb25b70cf35ef"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b33a1753d12cb4910abb73201abe7ca7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "129ee106224d8bf31ab590ba1f4df5d6"
  },
  {
    "url": "haskell/index.html",
    "revision": "ccb3804c4e05ffc6adb6fc3741d1bcb3"
  },
  {
    "url": "index.html",
    "revision": "e98ce50eec11fd497a46c1817056c4c6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d2d12cec4f68b71dd00f814595b82559"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "3c1c87b351adc700d9ab5805bfc9be76"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "1d3f6f54b5c3b83d44fe017797758802"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "02812cd80abfc764fb8214fdc3cf399e"
  },
  {
    "url": "python/index.html",
    "revision": "c1fcb2653550ac803cb399ed9a7607f7"
  },
  {
    "url": "python/python-ase.html",
    "revision": "ca2ee0abbb86400c79515c1ee4a3d0f4"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d91ac13e177d9b102431d559a19e6023"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "bce07df3194796adb638a1e06a7dc198"
  },
  {
    "url": "python/python-file.html",
    "revision": "9dae1f48ca32b715d5470741857e154e"
  },
  {
    "url": "python/python-function.html",
    "revision": "5b01c0b758e68ed48bef47357be35f8f"
  },
  {
    "url": "python/python-generator.html",
    "revision": "98453da6685e1943c6b009edfd7827ea"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "01b4cfc7ee31389a075e70bfc649f71f"
  },
  {
    "url": "python/python-module.html",
    "revision": "83b75cd215e71b8b2c0ff582b9ea91e9"
  },
  {
    "url": "python/python-string.html",
    "revision": "bf17d15c738d2df8de72e33f6ba21119"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "a48a240062402d28fbf3d6e594a12f38"
  },
  {
    "url": "read/index.html",
    "revision": "b64ef1970c273635bf65f51ec5155c11"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "3223f59ccc0b6bdab824cc399aad58f6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "bfc322ca89abe42af79864a86f0117ff"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7d4a5900dab87c1432cda3ea4c11b917"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "2eb57e8406b6f2b245118be184ed95f0"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "104ca0573ddf204a392672a765bb4095"
  },
  {
    "url": "swift/better/di.html",
    "revision": "64982ec35c74f69525449c80a53443a1"
  },
  {
    "url": "swift/better/index.html",
    "revision": "029843a802eb599f9bf11793d15a020f"
  },
  {
    "url": "swift/better/last.html",
    "revision": "6d3043a5c4e6400d4812e1ef27777b0a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "929391223d49a67ec2561822d36eb9bb"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "2c7f9a7df7dcbffdbe9911e639bd3080"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "f11b603d4b4dfc11cb8a71a353c7ba51"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "23012a5dadecebec8a41e6e0116c7938"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "18300233b8e671d7aa66c522865fccbd"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ef2268d727d7b186131c787ab36c9c79"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "1c60c9da761e6845fcf05e801d78de89"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "7b96552ba1cb88f75517af8d25612f4b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "6043d763613aa968b87f890e7681235e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "5027cd3dabd60210637c9053817e6ef2"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "40c98f6bfe0b8da1f7ef04b4958373ad"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6a6174405a1329adc5ae085d957bf275"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "a554480209485305336556bd09b606dc"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "c801a95ca26ac54b84e0c0515c5c7a04"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "9b23f3c2fadd375cc7dea2e942e4b760"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "171251938b7ff69b93b2475699c4f2b7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "93bd531c332acd76bf29b8a876460588"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "6b0768b6e46ec8ff5a3af183ced0b489"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "928f151c7dcaea7ff1349621ee21136b"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "2379151ea102089c8fe89e4d89619523"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b7b6bb78f10db27f82e3e4764066cd89"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "f3139c16e2476694683a2e73cb1872f5"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "936b21109a2caa240934515f75c83354"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "30e86f8ae7e67a12a627a897720e1229"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "b4ff737e2850dfbf243ba0dbdc866abf"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "55b3010084afb79445fe76ebc8f8f155"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "d53663e16ec4c92f7e2ce9e4374299f4"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "3b971849ef39963541e486c20d0eba26"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "61ff37398900a2754566860d52389b70"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "567ddc19c223538e05e64adbf66acfb7"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "20ce32c5bca58204fca009e7484b20a8"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "32379ba3413eaa5a8afd449dba5ddfd4"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e331a852b0ae83058c8c49a123371611"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f707dcbb0154fea08ea5dfdcd3c541f8"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "04c9e1b4b31f06766eea38e1675361a1"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9c1cf1b04e6cd88e01f803356bc83271"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "6a738ea7f49fbbd55d0bbf35199a8672"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "6fa502fdfcf6fabe1ca7c49b89bb47ef"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "bcb8dd04397f5294b29ded599210ca87"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "aadec70ed14e5b638c2678c9f0553e67"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "40fecf0c00a724c57225a181556e093b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "1e04d6b305ce44cb19fbc5b83f783016"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0623e3e89f56991d7327a256691c5570"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "bca66aeeb5e91c07c397c3944e7608b3"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "40af875e0b682456b57fde85dbf92780"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9d562c85e540ef6ea804196140b192ec"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "273bb9aaafe11f8d728c0ac8199843ae"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "733ba114bdb69ba103f814472c376d0e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "19bb71f4b694ebf7c3bf204398c3b914"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "f03f1740e487997ea251f1a51d35901c"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b89dde0c643cc223b7f73dec93d36bcf"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5c37d334414d90e7ee9399321d7caeb7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "27ac19733ff674cfd71631e7fb8f66f8"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "58be7d3af037da182ef024575763642b"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "599d855605d4ab71ddc33b78d13c3752"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "782e33f110f7155d367792242e5003d1"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "c2f28cd5060156de7eea5976cb086ec3"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "9d9c50230a699d5457557554a901aef7"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "26cec76c7f7f4d2998f08b9d38568c61"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "50d8c8c6516ec02986776af6a6d7f591"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b018e143fa4723fe6b82b21ec9f2f461"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "e5004496b0f8c17db9c5ca12c3a6162e"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "6b873faa95eb8ced30df6617fa4974a1"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "fa60ad3050699b6521f4d3d859c71c59"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "da64b130bd0e42cc06993864290201eb"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "e6c300b9c5c3e54875335a751eb050e8"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "ea69290d98a00223a4b5f9568bf25553"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b822c2a33aabdb858571153dc86c3a37"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "a5e5964d45dc05a217a3b6afea2fabf0"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "10a3b25f4e7edbd24e5d1d3b638392c8"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "99aa51d40480a427aebb0da372f1118d"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "5b8ff5eee836f49fc0ecb04da6e07e65"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "67be6313f9ddf7411b9767b4d4a9cece"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "18dd6f9ad7f6c6bc80b331250fe39886"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "38db0db96be8c596b2e2e2fce0651a54"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "92d047601bcf9cde4f32105e0b8ff18d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "7c8c73763122a04ef124c1c966a97c85"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b5d1ddfe1bb89575cb34ebcb0019353d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "e674e20a19bb2264665d15e363152324"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "e920c7c7f038f6a4293cbb126577f8ca"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "878f930d0226c1d40ef017315d9aa943"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0e93988f0ced240e469f56ab5f3957dc"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f2afc495c3328e66d09798bd3e78706f"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "f1510c3b5c454d5b6dc3ed0d4e9d4d89"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a42d3850e0c4a9ebef117d4a46f43fb2"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f2c5441bbfe10443e32a3d780298c9c4"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "3e1381e7b5d3a5606f7abf83f4dcc41d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "6589f2ecbed67aaa006dcb1847bc5bd5"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "78f7f78bace213016a817e57bcae5ed8"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "7e3a525cdd26387211ec645e8ab41ed4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "10f4b03dce00bb35b550ef2788acc6f1"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e9261e420f3ff01cc980e440edb73ddd"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "a5fd10514f47086f6331996f61227075"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f593f1d93e40be0eafee9f94ade4f962"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "b275dd055793ea387895def0ec628433"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "6eb2c69d62f3838887331f3f19185158"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "947702ff213e954d08f83713757a8f1a"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "9219805116b19a9c8f0c1283557e0e74"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "34260508df7ff0b8c159dd69d5bd95db"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "bc37cab1ba8472944edbaf5f72c08d5c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3fc912d350feb324a5d9baad68a02294"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "a3f2fa0bad4c86c01d981389ad1caf96"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "3001b423d5300c86b9395c16cf9d683f"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d20f6dd8142ecb5557d35cf2d6b53fa3"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "10793cd3953682706ceb1adf80876f11"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "dc1d6aa727b46087e5f43c3fbd654f6a"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d69b3f32176e7f284c2745790801089c"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "c2641b5757bc3b8f19a214d0f2ddebd9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e6e7db6be9680293add96021684d7ed9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1f88c9a0af108c96b9adb1a6d21be150"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "511a25d6333189345de62d4855ed231f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1cb6ab34df41b849c8f579501f4857b6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "60a0528a28140541c48e45c2aee6475c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f2ab834cf7d6aa5ecf6879f20b19fd16"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "241fd8b1af410a3998e60d0585914b99"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e03becb91132ef4db5ad4b489f41c1cb"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8940a64e727b38affc4aa6a700411f30"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e2a8b109e0254996da838138d994ec3f"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a02306621f02b337e0bf9034fae3d5f0"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fce9d5c27da42b0e644663b5789ebba2"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "5800a57b98584b377c41e49ecc483b57"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1b07aa9a94df839f9668661f4d823834"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ee00673b05c6372b6a3f9a2e317ae0dd"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9c11b350459578b463598a5508c761bd"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "876cb7a24cc99b1761ce46749b62dce6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "acefb8a17711c2b16bb3b6e23bd85d11"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "0a1760e1ef76b4111dee12cf705c6ace"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "310d581dd1c8fcc86928e0f714d15b26"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "8a198bb6b671de89bcd614f2fcd88e7a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "632f57a5e53a886ddb1c59f4ab074bd8"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ba3f8408703dc3494fcce32eedd200db"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f86827fc25c919e60bd5cc7e924b1a33"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "bcc75a4a9641aa22ab02c9560d7427da"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "172dc8104bc4a677b7c4db53b2804147"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6046d2ac2a73e7693980ca49b684dba9"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8bca0554365e95926f3cd566e74c7cea"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a4acda6da7de7c5d6c5e03ef0c43e862"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7c29132e8c6760eff05b9192b86009ed"
  },
  {
    "url": "tag/index.html",
    "revision": "0daa3b6f16acedf963d0725a71ba2f4f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "98c40024001ae7962e3e01eed4ab2e97"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "d7098052d5c0ab3d2a909e8e0251268b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "679fae60c43503ab7aa4cb0bcb2400d8"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "cabc6da1a9a575356ce893a9a0d40907"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "4b91873e38572c3fe994f10ed027575c"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "60352359643a528ddc10c7fb260b3062"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d9ab9ca42dd2dfd2cc79514ae65b43a1"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a9300d3fb16b391ec9c735ebb7dc6391"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a13a1be94f9f7c66e1e64d3680588b69"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "9238a3acf7249c47d4fa6125607f27b9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8a7d4b87d909d3f9ff196f7c9fac0a82"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ee899fed183b419b12a501ba056f93ef"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "5281ef17fa1f7b4c68cebbb0fc2e0793"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ebe18bab8a74901bf32b47828770477d"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "528cc4b13f8eff2bc1c2d345792ea490"
  },
  {
    "url": "tag/read/index.html",
    "revision": "fba6bb4802a05e816cb2b8867bf60c04"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "3364a9f772069001e08aba1bdce921df"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b33d64822fca3ec09b8d1a96c4e2737b"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "276faa65bbac8f7ae5517fd65a598260"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0d60b1a9b45518e7d3fd1e075a7acd0b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "58f0679943db17f7359d0f192557dd8b"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "6885e910780bce7d3cf808cc871bfa11"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "46e5b30207d3eaa1252adc266482cd3b"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "a9043bf162657c92b04a3c9383370f0f"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "8fc0b1525601810d2382f9ae3b94f5bc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f9333f7ee97e6238602bad036cdeb11b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "90bfd6389400c4c1c9af7d717b6e9d50"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a671a3705f0504261227d82f1acf5b5b"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "d00f4d72b2c2a3171033c37f5539c8f2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "d3ce9a1209a11eb0a19a3e899a4cdf97"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "3c53f10eda56d11e8d62309a76dd3138"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6767712b1bf444cd4ae639ab8065c2b7"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "d85b871e8e3530ff92fcd49f89ed0164"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "141367a74c4d197507a47633e6dd5488"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "fc0e8898d8feda794dd753d5716716f2"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "db451bc5bc1463d6cd0d229473a69410"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d686111e9f8d43832b17e9af70ee8290"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "5d2b40902564a11c29b9b68297d0b1c0"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "30339cab1e2242fb6d91a31cdc5c48f3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "559b7a84a4b8bfc6208f6230a9fe1828"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "ccff745d023672a64975d6014459800c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a1cabe21801946ac7378bcbca255e10f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e4da4f314c9db11c6663294b0421eb5b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b99043a1a667d9b19cb4ff95d32fb680"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "3cd737490509cc7a10f89089a98e0d5b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "5d112c41969130f9056ef6e6db8b7580"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "251afe85e25034eb1d3d4e38790d73c8"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "3736b67847780019cdb5ea0bd53470fa"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "85300fb8944c3818c8041316cf4a5404"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "f77ce04d83cecca2071a6da74631e1b1"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a94f8bdddbb48d0e9e0f6d2ed5693e4f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2d812324b7b571cc7568d3ae671e63eb"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "f12685778bb03c663103e03b7c3dd048"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "24bdfc3fe977b212ffbecb47da5cd1ad"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8beee7e05b6dc198eb01464cee27d8b7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0eade03c8c373a31151ca08018d995f4"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "45d43f56d11cdff59ad72b04633ceb38"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fb15b1b4b379970e6e99112490db66af"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "51bf00576286acc2abdb4d099bc0fdae"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "98af96d56dcd630e917dd73874f4756c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "2aefa036a74cdc587319e9c929cb2575"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e0f0b61420a2d201d6a73f4dbe8803cd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a1cc5a6b954e96e117d17371a1d1fbce"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c2811d99fcdc2a20bd419ab175359788"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "c2f816735e167f9b4d49af29be6ded3c"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "56bccc3310d03a4e1c064e6694fa756b"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "b018757f90f959e504398aedf388232c"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "6eb226a66035d634809b62c63c10a8b8"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "a04c3849c12851e70242d1f5c55a6121"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2fb6e9afbccbcdf6906d5428330f1bf"
  },
  {
    "url": "tools/docsify.html",
    "revision": "ed8b0b28531768059d233bf72fc6210d"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5da7050361bf71c44e4f8a78c5f1b716"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "8d4199bc09252948393af50e60aac5eb"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "5c3845b41e916205ce73d5ca2f65b9ec"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c41782cb924a20b25921a960ae62fbb9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "36f55e3636d066a22aa5858520f9860d"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "7855be50de4dc89ad0be4029a57156a9"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "a2cc9d614d3efe4b9b7b29cf52ff9144"
  },
  {
    "url": "tools/html/index.html",
    "revision": "44b7818faae0b95a2c33ff4053ae9fac"
  },
  {
    "url": "tools/note/index.html",
    "revision": "9def4b438f2b90ccb9ff2ab05ba4511d"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "2353863b81756f89b0f25891acf20146"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "eeb48a2e3614adb7c266dd09d4b67618"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "6400421a008ca61673f906b9b60e3a84"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "58b4f63c43ff84bd76f14be249a5f0e9"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "1dfa422ae0b09297e3e607ba034f2aed"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "e6dac8c0ce947eca16c1541a94a68adf"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "18d2a016ae745cbf35212820b026e768"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "9d5a19ce36edc93401832ce67162e3ee"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0d093442f0a4e3f66f1c301cd1b38727"
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
