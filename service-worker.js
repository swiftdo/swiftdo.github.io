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
    "revision": "ada8cfd13d2dc0cfa64d15bb454bea1d"
  },
  {
    "url": "about/app/index.html",
    "revision": "13f52cbebf74edd2e793057a4d96f081"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "028fe58fbd0dba52166ce60c58f785ff"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "6579d014d5dd71acf5d1dc827c1d1cff"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "14a7d3f57db78703f5543e54b1a90e2e"
  },
  {
    "url": "about/index/index.html",
    "revision": "641cec21c24cc568ff8db2a7773e233f"
  },
  {
    "url": "ai/index.html",
    "revision": "d8321ea5964e6cceb8a190aa617afd39"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "fc81efe846d6aa5064744227f80ebfb6"
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
    "url": "assets/js/11.f93b30ca.js",
    "revision": "7088f7af4154c0bdfa40f45cb3cc299d"
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
    "url": "assets/js/121.bd4e6f93.js",
    "revision": "59afbfb7f3dd75fcfe7954b0474c5012"
  },
  {
    "url": "assets/js/122.b7f3d055.js",
    "revision": "5f2aaa25a380b9f5fbe2f590a21f9891"
  },
  {
    "url": "assets/js/123.e2f5ddd0.js",
    "revision": "39309886ca13dc8746b75ee09788ae66"
  },
  {
    "url": "assets/js/124.1cbc7763.js",
    "revision": "d4d16b8756e13bbfb5e54728672fb363"
  },
  {
    "url": "assets/js/125.661866a2.js",
    "revision": "19055502ab0e4fe1c59efcf47b062af1"
  },
  {
    "url": "assets/js/126.ac1855f8.js",
    "revision": "8d2d7f20230cc62bfcfc3a24543a7b8e"
  },
  {
    "url": "assets/js/127.c949a443.js",
    "revision": "95ad584f707c16b8aa09cb75a1a207c2"
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
    "url": "assets/js/13.3ed8f453.js",
    "revision": "0a5b3777f6f232d1fcdff5027dc81004"
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
    "url": "assets/js/139.e1ad2af3.js",
    "revision": "2fb366f51b6604a0c44c5dd15671c9d0"
  },
  {
    "url": "assets/js/14.9e477e6b.js",
    "revision": "9cbcbe2c965b316403693fb5de1e9d70"
  },
  {
    "url": "assets/js/140.12d7b738.js",
    "revision": "bef3d17d568a522673f6d0cd423977cc"
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
    "url": "assets/js/155.0a496c14.js",
    "revision": "bdc99f9fd8ab393bee6447283ec5a81b"
  },
  {
    "url": "assets/js/156.f5dc5114.js",
    "revision": "5a530cb3b5cf020ea5b58f35461ac627"
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
    "url": "assets/js/159.3b18726f.js",
    "revision": "461665a4482bb4045ae7552b1e078ce3"
  },
  {
    "url": "assets/js/16.c1815a9f.js",
    "revision": "d2a05c03fabb66edefbffcf40efdc18e"
  },
  {
    "url": "assets/js/160.7e72b2af.js",
    "revision": "9fc4df9ec358bf97c3e237a08bcab409"
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
    "url": "assets/js/176.1db15dd7.js",
    "revision": "f41227fa70a4fe14db38f7b2522d52fa"
  },
  {
    "url": "assets/js/177.a11a9575.js",
    "revision": "e9f909da834917735d23bbfb3e465951"
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
    "url": "assets/js/195.ad6b4ef1.js",
    "revision": "1ef2a7f775382f3ce70e388f68826d1d"
  },
  {
    "url": "assets/js/196.c68fc558.js",
    "revision": "b7be8df32ce7a94232e3769173ca2bf3"
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
    "url": "assets/js/222.140d5ca9.js",
    "revision": "11967da4a1374ea81389eed985057585"
  },
  {
    "url": "assets/js/223.d2120a5c.js",
    "revision": "0c7a2df26bcf1c27468e5cff7e5a454a"
  },
  {
    "url": "assets/js/224.8b396ec7.js",
    "revision": "620848700b1d1d781febc2194e03eee6"
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
    "url": "assets/js/231.fd67ab2a.js",
    "revision": "9e1ce5e1d6866d9f3534ba137450f7e0"
  },
  {
    "url": "assets/js/232.c4f730d1.js",
    "revision": "817b193d743c6c30478025bd83eb598e"
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
    "url": "assets/js/236.83bbe40b.js",
    "revision": "7742efd803117ce6ae0437dfa07694f5"
  },
  {
    "url": "assets/js/237.cc54b9ef.js",
    "revision": "491b10385c0da2f2cb1c8b90df98ef54"
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
    "url": "assets/js/241.55d5ceab.js",
    "revision": "62fe1e2f5e23a694474bc896b90221a0"
  },
  {
    "url": "assets/js/242.822624a3.js",
    "revision": "433d250c89ecf3b8358d730f86458774"
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
    "url": "assets/js/247.3ca1594a.js",
    "revision": "b4fe3543c15f9517a564105fd4ad6473"
  },
  {
    "url": "assets/js/248.00a9c42c.js",
    "revision": "775a768b94b1ab762be94aa36d5bfab5"
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
    "url": "assets/js/250.55539468.js",
    "revision": "50a45b92fa739b898dd5bdbb297b0445"
  },
  {
    "url": "assets/js/251.bf1c8bb4.js",
    "revision": "ea9c4a12f994f7d17be3e1c956bac69a"
  },
  {
    "url": "assets/js/252.1776e5c9.js",
    "revision": "c110702e49f22e66fd481e0153965c1f"
  },
  {
    "url": "assets/js/253.ca90aea8.js",
    "revision": "4c0c0049388cf3f215c04df842c20b80"
  },
  {
    "url": "assets/js/254.9418a013.js",
    "revision": "604776662e98a5bb3eb9f9dac6b1d489"
  },
  {
    "url": "assets/js/255.e837925d.js",
    "revision": "05ac7f423c1f97139e944aa695aba6fc"
  },
  {
    "url": "assets/js/256.81a5cb3d.js",
    "revision": "d74fda7bb903cd4f2c26c2b06e8a38ec"
  },
  {
    "url": "assets/js/257.df3cf763.js",
    "revision": "c7cc4824995c189e8398a2f681f42670"
  },
  {
    "url": "assets/js/258.1c061feb.js",
    "revision": "2454f40825f67fb8b65f22d46327293d"
  },
  {
    "url": "assets/js/259.912b537e.js",
    "revision": "eefac508fd2c592160a116f2512a15f9"
  },
  {
    "url": "assets/js/26.5ed9774c.js",
    "revision": "dd81b4279aa7ac38fdf3d4e4e607a148"
  },
  {
    "url": "assets/js/260.5c2ed615.js",
    "revision": "7ee1a6862fbb9e039bab351089cfd2cf"
  },
  {
    "url": "assets/js/261.f606878f.js",
    "revision": "ccdbaee5b078a3e85ee253eb2894d800"
  },
  {
    "url": "assets/js/262.cf5d8f4e.js",
    "revision": "223a46995d758c2e07614c0083d5a4bb"
  },
  {
    "url": "assets/js/263.c9b201e9.js",
    "revision": "e31266cabd5f183ca6d6e0ada7acb8e3"
  },
  {
    "url": "assets/js/264.46690d93.js",
    "revision": "a0b222cf85c69f5925427117d0083558"
  },
  {
    "url": "assets/js/265.1476de45.js",
    "revision": "d062d94ad3d946b61a602f0a311fa3d8"
  },
  {
    "url": "assets/js/266.167cc765.js",
    "revision": "62a2f89c92b4ed9401c84f086d9c0484"
  },
  {
    "url": "assets/js/267.7fd3a71b.js",
    "revision": "9e32004c85c693b12b841eb3879684cf"
  },
  {
    "url": "assets/js/268.c166ffe9.js",
    "revision": "1617f71c0a20c824e8cdafbeb2409e49"
  },
  {
    "url": "assets/js/269.3f765e3b.js",
    "revision": "ad7d849bc0b0e39989173220110bca27"
  },
  {
    "url": "assets/js/27.14affd52.js",
    "revision": "ea86e0bc1b5b590c92f24541b9dbe72f"
  },
  {
    "url": "assets/js/270.78ec03b6.js",
    "revision": "3663c87cbe186e24cecac63ef38c8980"
  },
  {
    "url": "assets/js/271.e5395cc3.js",
    "revision": "93727dddc41c20919eec824f2f39d88a"
  },
  {
    "url": "assets/js/272.63c86190.js",
    "revision": "132ab4277c35850eab2f3482bcaf4357"
  },
  {
    "url": "assets/js/273.2dd9fdd6.js",
    "revision": "54a0854d43d4a424b792bc8ecf810591"
  },
  {
    "url": "assets/js/274.c03450b8.js",
    "revision": "759c14d943557048079437bd2a33b6cc"
  },
  {
    "url": "assets/js/275.7b1adab0.js",
    "revision": "acbebc393fa255034fea4b2a6f94c42f"
  },
  {
    "url": "assets/js/276.e6856f61.js",
    "revision": "e535063da74d9d743ee51f2f856ab42e"
  },
  {
    "url": "assets/js/277.435a8c1f.js",
    "revision": "a55081f9a1019c7c89c2f31a2244b33f"
  },
  {
    "url": "assets/js/278.83b0c213.js",
    "revision": "cbf0cc3cb779bc18b6a33e75220412af"
  },
  {
    "url": "assets/js/279.9759bf69.js",
    "revision": "36ed38eab7d3c0f5433890ccbbdde0f8"
  },
  {
    "url": "assets/js/28.aeb6a4c7.js",
    "revision": "1e95e511200b19002bb638583cd17adc"
  },
  {
    "url": "assets/js/280.59dadd1b.js",
    "revision": "6ebf4392139f3dc1c432c8f85343c6d6"
  },
  {
    "url": "assets/js/281.30955408.js",
    "revision": "3abd77d46fa0ad3ef41e178d799389f9"
  },
  {
    "url": "assets/js/282.83d11c4a.js",
    "revision": "7e51d2bddb45f6e9087f8120910ec64e"
  },
  {
    "url": "assets/js/283.38f3d332.js",
    "revision": "5ce74fd7157ec57e3193a6e80da5c517"
  },
  {
    "url": "assets/js/284.45467b47.js",
    "revision": "ab2139d2a5e55d50a62a5c583927b7c0"
  },
  {
    "url": "assets/js/285.61644579.js",
    "revision": "4995797d0ae369e6675ec99548e0c459"
  },
  {
    "url": "assets/js/286.b808c8f5.js",
    "revision": "e33a6a84f4fde6520cf6c13941992fb3"
  },
  {
    "url": "assets/js/287.a667c03e.js",
    "revision": "de3e9e024e39c44155e88546135cd910"
  },
  {
    "url": "assets/js/288.9fef16a6.js",
    "revision": "f02f304ea1453fae37d2c55af4e0923f"
  },
  {
    "url": "assets/js/289.faccfe77.js",
    "revision": "41ee9c5cd4c20f93231963e20247ad30"
  },
  {
    "url": "assets/js/29.0eedac0c.js",
    "revision": "4cc547920791a013d286b524baa5dc7c"
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
    "url": "assets/js/58.ab18d2bf.js",
    "revision": "9934a70c93ef6660100a539f46259db3"
  },
  {
    "url": "assets/js/59.f9cf785d.js",
    "revision": "b0e64cdeca7ba014d202c2ec15bb7b3f"
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
    "url": "assets/js/65.91af9cf9.js",
    "revision": "d6acf8930bed829e2b9332587ccc2721"
  },
  {
    "url": "assets/js/66.62773334.js",
    "revision": "4a9329a97f4e7fbfeb2a92f530763925"
  },
  {
    "url": "assets/js/67.b82c43fa.js",
    "revision": "711eea799f300de6c7872a0eff606dd8"
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
    "url": "assets/js/83.86debf67.js",
    "revision": "571f965a37eff8e617b4a7fc1ea4b97a"
  },
  {
    "url": "assets/js/84.0147f084.js",
    "revision": "c58c974ca8a5800c86f67e18aa30599e"
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
    "url": "assets/js/96.431ef45e.js",
    "revision": "3450fd1cde9b861fc0c5433a887cec56"
  },
  {
    "url": "assets/js/97.7901bdd5.js",
    "revision": "9dfa94333e706f52698c152f4e9882b4"
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
    "url": "assets/js/app.c0973bf1.js",
    "revision": "f3d96a749c63a2809468ca75b7c304ae"
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
    "revision": "87e25e4d6ba8a245a4cbf88f42c8b831"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "823f290e414bdef697d0207f62024a45"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f71485fb138d399e04555f77e953b52b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d3666f67dc1590737417cde73b6229c5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "aea2448ce0b7350d10e795386bcd1ec0"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6a78d5300dcd91e4d781866590c6baea"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "2bb11c11b9cd90d63f81d889269b1e7c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "96734452072dbf959b9813bcada832f7"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4eb243b9f2a54f3070412a8c7b8d59fc"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6e974218b386a8bba0dfd5b06c17e63a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "6734eda815e400343efaee8f2cf41a85"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "368f143478c646faa279565bcae27583"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "52194ffc87ca42e5c1a0fd620c888800"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "59d4c00b0ef145bf4073315bef0831c5"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "6f9e8435f550675737410be52202926f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "4bbcad9f8a3e6f8d4825fea1dab3a917"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "e3d98678c9372b0237ba01a7d187c60b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "3516563437f1cb1da7c5c63174abed75"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "d4d0afb31e5b227d24b7a9779486ffb7"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "84f786f7e0e3cb595d9cc896307155bb"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "9f76329ecbbb9637b71d4008b97f19a7"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "f307dce7eb0e57dd16e93e4959797bbd"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "77cbb181aa2b955d631f8ff1e40d4be0"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "0f26c3a6870e3d644cbf07675543fa5c"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "68f4c37c3f6a97dfc96d6ec92b78268e"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "142cdbaf5c0e52d2a1bd3b5e0c60f5dd"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "f8504e34a255766815c9eff98f8b44e3"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "68f6ddd0e2d1e9bb3ea33c023af11526"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "d8b230d3ccc66bd62eadfec9e9b6bd74"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "8c5ae70dc8935dd9cc2be789cb33f197"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "6b27561c9814ca97949f819e9cecd7cf"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "e0ed4daf5abb2481885c4f700f409ba1"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "0e81930b2859af8d4c849775a26175cb"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ecada711b79c7101110139dfd1ff4a12"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "0f37407b583f43b97dd5bddaba06ab32"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "7edd25060a77c6344d7f5c2e40197e61"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "ab83057eac2b2be064e39791ff84e523"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "96d385357207c6d93c3e7ec5ba16e785"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a87c85ea544a2b202420483789036421"
  },
  {
    "url": "basis/os/index.html",
    "revision": "54fdf9c86f6fa4d497a0acb2f055be2a"
  },
  {
    "url": "book/index.html",
    "revision": "e8f2bcda7212422b7bc5b3df51e4718f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "95043c17b5224a701a803d50d822cdc1"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "d2c6f8068705aef00966536869137746"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "6208bb142da2bdb1d1e64e3a61038391"
  },
  {
    "url": "c/audio/index.html",
    "revision": "719a2d612f578003ea5cd523cbc36669"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "e91f09de00ef9b2aad4c9b0c10f03976"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "f55670dc1647c9544c085f74fa1efa86"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "8cff402b28fb84432f871a60d6192d8f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "8ffc1ffae04fc45bbf42e439c61bd4af"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "26ff3c6513cec00e57a69b9f70145e1b"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "15e05c02e0e2cf70008b7b635d5065b7"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "5496c7d1e62fe9f3f9acb0b1ad81f76e"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "36db32e6bd389868ac81c2967d36f1c2"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "96d33bd883d6b999810abb1dc9146f31"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "a88acaf2f5935677af0f6fd766751f34"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "2eb9682502f08909e661d46ecf703ffa"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "c9647404a00bb5a57db68b28f754f02e"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "e74138339a63064cdd811799f0762f5b"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "5bd139ab3378188d042cc87a75c94b11"
  },
  {
    "url": "c/program/index.html",
    "revision": "cf85d9e78347796a9df55d503b6d50bc"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d03495f1f412f732a992ee5acd35cd6b"
  },
  {
    "url": "categories/index.html",
    "revision": "70342441359a9a5376b165c37e9a2df2"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "4ff0aab4b8603ff477631f611d3aa55a"
  },
  {
    "url": "figma/index.html",
    "revision": "8adac414ffdeaf0cf71e9898d2f94d56"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "e0f2900c17042aea700af2fc27b5c44a"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "a4db06fde9b5c631afac7019756da503"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "ada2de614d87e01c440b83eeee4c3136"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "1fbe7b1ab7dadd99944197dae2129e36"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "30909af5ae87a0d8c775782694822742"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "b178a9bd6765156a185ef3373e6749d9"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "f73deae6655a1cde984ae8e711ba0757"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "df69e0c581ceed60e45bdbf7f342b417"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "3ebeb92033e4adacafeb440f9dc6dd61"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "ea7e150ace49dd756ab5e4e55747b0a7"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "3e1724531da953bb7e4a7bbb443e0ca7"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "94efce380f7856a577eb159aa790c815"
  },
  {
    "url": "flutter/index.html",
    "revision": "01587be95e9750966fb281028dfa7c48"
  },
  {
    "url": "flutter/point.html",
    "revision": "fa317a52c5e4fa6bb51ba725fdbc4a5b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1eb818633ac15b3494dd536f85118e34"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "bd9162f01bd56c4df362b2b9f722ee21"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "cb41d7eed0a5d844dc926cf8d88dc4ab"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "af79be0447808a086af8754629237c36"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "63fb15bcffccbd647e844174d9ffa5af"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "9654883503cd7c675e0fe6241bd50475"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "237a9420c790d44ef7b728534f24b396"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "79e6b7f41d7b71b18c414b3cabbac4d5"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "97144e27bd9dd0bad5502050a5013bcc"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "27bfdbb9520f5345d364e83749003430"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9a6f9bb78d3b59d9408dda2c7330f340"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e04157b1aacf69c95b1a47ea836b144e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7b14e81d37780c866d34d31b5fe294f8"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "5e17729d42cae40ef2de8571289f108e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "415e7f1197606fa653a03902cb32848a"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "236fbf5904794b43df8b53451b0d03de"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "6b44e4791441c6c15477b5d57fa5385b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c647cb16ccb262b611c32cb91a28be20"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "2328b0f5d68c38ce55bcdf2f600e9398"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1eece092fad21dda7b16c3f0a190641b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "48eeaa6c37dac8375565b05aa2876251"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "9384f84976ed36dbf914b04ae207315a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "ffbcf1732dd53b53ed2a6ff7d5397108"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "8f319a258309915403bfb37d49112fdc"
  },
  {
    "url": "haskell/index.html",
    "revision": "9d873b80088169ff0903efef0aa22e0d"
  },
  {
    "url": "index.html",
    "revision": "02ab9af71c5bd27eb027e87501b78c0f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e7aa446e41e97b896f6c8b18d7f53930"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "315f88c7f8673d38ea1c977465f66458"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "83d84478ae12d8d8fc983f15342c9757"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "62d93ab8617f86e36636727e04ce7b92"
  },
  {
    "url": "python/index.html",
    "revision": "28d393450953592df5fbe7f3b8fb405d"
  },
  {
    "url": "python/python-ase.html",
    "revision": "886849932e9c495b138fbab724ac7649"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "7caa8a00c865e3eb4ade0994624715e0"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "bb950bbaebc32b0be45758a0ebe43e4d"
  },
  {
    "url": "python/python-file.html",
    "revision": "39d656642152b182eb95353dab6e4a49"
  },
  {
    "url": "python/python-function.html",
    "revision": "1a53117b3d3ad5cc54c335a663323620"
  },
  {
    "url": "python/python-generator.html",
    "revision": "d3e21e99113084a5ec9ceb6d932cd6a0"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "50f4b8712e7a1d1d7045fc852ee1e54e"
  },
  {
    "url": "python/python-module.html",
    "revision": "f63bd5f200d943c9e076a70aee729522"
  },
  {
    "url": "python/python-string.html",
    "revision": "43adaa415e03cdb07497a1814ccd3eaf"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ca6afb4f511e594d206b3e4a6833d214"
  },
  {
    "url": "read/index.html",
    "revision": "9db9209630b8906aa5ebda602c2309e6"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "d94062753ae4ffd1b09734f3b2d4ffe7"
  },
  {
    "url": "swift/better/available.html",
    "revision": "0d5557c8a0ac8930b88976106addfc17"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4c1378cccb1051249b38aedd4c42f1ac"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "e6fbaa3a508dd6acba841889bfc0066a"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1325707d9dee43aae9a29a30933fb70b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "3b1f55818f0a5d65a8247daa4e12b419"
  },
  {
    "url": "swift/better/index.html",
    "revision": "cf7c65e9824ff311497730b70191e813"
  },
  {
    "url": "swift/better/last.html",
    "revision": "4a8ad1161475c9bcd2846ae4277963ee"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "b90699f11fcd1cd2c0ec2730d101ac01"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "67d1268059ecedafeb2d4124e910f89a"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "f9dbd1010de9c5a27b84184ef0e7187a"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "844b7140676a7aaac895a3ab930edc02"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ed00d0a6aa0e17192f09b00f13c4aa1a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "56d67122f862ec69a26909a3a3312e94"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "7716c461f9bc5ace01b4626cfd96d39a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2dd45c355d2f3a94d5eb8859c40ab08d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b44f159fb06ab21d3be728dcc1c6b718"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2f567fb813bea3c922c9f357455fe60d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "81c33bae72283d03d1f3228274b7e12c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f2ab4c8c6befe2a945b705ec2df88673"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "d0d859c8f1a8e96123ef11960fae5e67"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "3f489606f2c298c7b11f1dbe7b3dc7d5"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4a3ee6eb41af2ecaffc928625faf1bec"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "14cc06dca36c65f053ed6ef82a7d05a9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "bbf7b284e8100a5b012e9c69feffb76a"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "0ea60467db96f4ad02d505bb5e10c7a8"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "0ed5e721069b0d630ed448da1aa9c3b1"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "f04ed16907560a8aab8c409ee6c4c860"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "bfe1329d1757e6a8688f65b6bb40a632"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "183b44e72fb5f1312dcdc62356d1def7"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "f03a88bac4df5ca3c1a5f0ac4fae30eb"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "af3debb3f11723106cbf9c715c6019d6"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "3181f7a047147a3698570ad867282281"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "fd831e81fe44f434c95e3d7aca45b628"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "a6e45fd17e6c1bae3be3e855ebac57db"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "41fbfe246397f1eaf259fccfee864ae1"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "d5a93890bb5681a32208daacff2ba4f5"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "e2791f0d57234686b32182226a715051"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "95d42735314a2370518604fd874eab54"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "957406c4c5280e3f8bac25892d875ee4"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "21e3b68997add4ae8abcbddef447d105"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "71f33fadb09a844668c1ac035716298e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "5fd864f297bdd1fbc782c09649a4e348"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "40e81309b35d33e9c6c29e16f7679ad8"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "89d87c34ef54b8f2decbab35a76128b4"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "7b40f4155c2f616ccc908d7a77e849f0"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "edc05468370e6fec7ebaad80cf2804ea"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "0a67708decf3f9eea05c7ebda442702a"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4e045f80c403bb6d8e22791aa741615a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "24a6c7f08fd5291fe4847a0d4305f9c0"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "34ee4a8c14ffee8b6aa7bf7d4b9ad7be"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "19679729b4320d43d2a27bd0dc61fb20"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "7c130e51580f082594601fadb856cceb"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "531c95bbaf77b0592b676df70ed4e690"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "fca0a802df258c4fa82b8298361601ea"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "76f2f946d71f94cc5a1a16c516a92fb4"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "f166b440207083981b9188017458fbc9"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "3765546dea50c99f455df00c8ba3f9d2"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "a98f7469397310fa55e344fbfb0c4c5b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c08df3dd13e16b834dca8761e938db5e"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b0d45f5398d191b3c3c00326ea176e29"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5647941de67864504e7ef3e02beb6f1a"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "faf937626d86498394c595f76f208731"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "83970506a81e176cf152f5f39a563d47"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "73b4e59b36c8a6a8ff0ae3acd4199997"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "89889b496d047dff901eb4597c789f6e"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "a746904a0ee4ee3512da085b7c1a67ce"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ccd97f53b97a9881570ab0b7f126a3fc"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "f1a29e54c5a9937668b900f30c6c2a2b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "81ff334b90f68f4751f3ee5d364c7a00"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "002d348e0ae840efa2c0a9e2a87cdefb"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "185178744f9b77a1e30d408f82ccd054"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f70a73674aece7acbfe3f9bc24af0e1a"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "e6978033a76c597a7086d07fea21a48c"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "37b14c6c44381d1afd1309055184c79c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "cc963c06fc65bf586388b7db88db8e70"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "1776b5d0e6548cbd8d22ef3fbd4c37bc"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "430b6e8f6a9b97ae5e4e52d665c402bf"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "89e77d37f7f64543fcda860d2b0c5349"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "da90dfde996366b7fd655c935a38917c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "a61ea734e57c0130f140587613720bcc"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "074abbbd4645358e2a4b8c2fdbc4cc43"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "6908b0efd650f18d4a9e82cd648d09e2"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "ff5763036c6cb90679495c5f672b6e02"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "57471dc5de0334cea7718de2e807286a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "dfee32a9838fcec6269919315f04ef8f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d86e1af36d98dac8d0f3bda6bcab6a80"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "bb5d26f6fd5cbc49d3ef24f15227d3d9"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "1a83b4d31290f7a81e6ea481870b8385"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d4a7c1009fac8efd7dd020f6fc9070be"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "d6a7979b156ddb5ad071d26fdf94ebee"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "33774e39c0d795366d1fca4c88750dc0"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9e7683ce44bacdf13a04c83b1486be1b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "8d6a995d552f315a36583df1f6c96710"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "09dffbc53649e5eef0f7c35c8fb2aa2c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7d4a98f05464b8d028c423471144689d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "1b2cc899b8d39e32940cb4eae5f38027"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c3ef8e9763959e8582a1c2e738cd53df"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "42ae645dedde8442f0a1590fd6985a2e"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "d4f687c2fce31ebb6a307ea8ec38c986"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "0c2caa7ab0a9a8cad4845c11ee3ac62c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "d6a3130a11437084f204b5145abb0e0b"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "81645901eeecff9cdaf3172696304a42"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "d56bebd5eb53968a6346af5ad2f089ab"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "91161c377654d2b2a8d4df234af2903f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "8d89dbdacbc288cf48aec1199f20d947"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "3b62804054904e0ada95cb495e96fc8a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "8cd850e72e5090490ef75ed1cc8f2856"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3638ffa7f0dd8ef3ad728d61b048299d"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "b72376e3d0433f3f3afe2e34904c00c5"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "bd2d9fd00d4c5a6a33df257df2380638"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "f190dd538bd0816e21e86ca30a0bb2c5"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "a38da1284ecffe0c97449c718fcaaee9"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "49ecb2b9f0e6a9f8a2a5e2015a4599fa"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "2d4a8c5fa21f6bbd5b2945e9025ae842"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "a2ae774b8c45d765776191d83c5bd71a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0f7923eef8811a9586a0a4babdfa4138"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5560b9d87e627867eb1d7be1b6809918"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "03147cd674b54e5a1d6a99531baa38d5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "fdd9df9ae386b9a223f2411a5e5b7473"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3f8abea5148cd7e77823ceb8b66e6a5e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e4e69e3baf8274bcc585c0acd51f8050"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "2354b29ee8b850382e9fb54bb7bd5334"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c70f21af088838cf194453dc35e07a2b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "3feef0f391dcb90c9f7c535a13ce0ac2"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ea30140a684ec84fce4eb0b63c037dcc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "5cd804e7bfdf78a3237e70cf03de6921"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d7b1dc3f1cb8255f9ccde69e087685d1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "aaddd3d90c8d5e12bd2f6c514a0a718d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1607ee085ed55816f148c458ef831dd2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "0bb9a7f8df5528cbec60b7ba635dda59"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b32d3d9db529feafee3781c586a8475b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "5045c0f1d3c7b06cb4d72e743dbdfaca"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "2f409071dfd77965ec7e2987c8d2f1f7"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d0d8a211030d8f8ee1eaab2adb7b5ff6"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "97ba00c32c501086048f189e6c0cbdc2"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9abad376c66ae0a231839a7db229d613"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e8acd9fdc31184f26c0cb0967684d386"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "54ea60f7fcefb61ec646560fff355fd4"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f7e4bf0ba81079694c9f8111a64b0ab0"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "0f5c5e5f24aef9349123b76a87f77f10"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "2ef074eb222870159c190ed29361ebd0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4d1dc79941f4cd9abd7092c02056f631"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0c19b2f874ebb9dc94c50f338e478500"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "0cc18f3ed063168c901822a97df27ede"
  },
  {
    "url": "tag/html/index.html",
    "revision": "63008fcc84402370c86f94ce98336392"
  },
  {
    "url": "tag/index.html",
    "revision": "9b99adcdfe1cded5b9725e87ffcbc7ca"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "279892cc8bf212cea6fbe5c576d8c868"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "188fd17f54842ff80d99b270eef1bf3c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "a0850b7c8688a1d166cadb71cd6d26f1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4229280cf489a609478a06db3df91a79"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "0c53b3143585ea2f877b9abc0ab23be2"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "830f73105da080e21c7d330c1ae756c0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ef4704c6320bba90500a1970b8ac9aee"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "1b326da77ae05a497ea4e66af5cb55a9"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d24f9c9dd2c46d5e959ec839423ee140"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "637ef3c05f21e1919388831a4a678a37"
  },
  {
    "url": "tag/json/index.html",
    "revision": "5953b4280801defd977533e011338944"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "234fc39c03c583bffce225fa2144e80f"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "ee189d6d00949bb5a8db32507bc1ef51"
  },
  {
    "url": "tag/python/index.html",
    "revision": "deeaab739272f24f8d9cee3c7b4c17d7"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8e81b209bc4873a1ecf2253d41230b22"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3d690df42ec691664508676a358074c5"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "8dceac658fab1e60a19839499409ca7a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a40cf0db52f4777f174be3059944d70b"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8e043ac1af1ec28623b6d47c1e29c101"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "646278ce5472b4b18cc020ebc52d5e84"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "07c4b1012b2446ebb8f01cac97ae9575"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "e854e8011ab0c252ae953956cb409b6c"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "de37167ec5bdc4869f3c270674641939"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "67a0c8a21d62a5b96e4564344b86dfe3"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "c06bf1040339af487373a59adbf8f7b0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ba6d5356bad3bab95cb8bddf59fdcabd"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7d58cca3ac1e127bcdcc5d311571f31d"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "cade6fc1fb669347961b5a8b298fa638"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ae7bcb940677a46c2ee2e91823ba5314"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "ddef49ffccbe58895c837869b04bc6e9"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "001dddd3900d36e14bb604d5b55f2a3a"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "f57967b3ae11b9ba2de43ef40e607c4e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "9a695cb57b20a1c1992ea3f21c4c399b"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "869c72bd2c073a3a22f9904d2edf9ba9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0a0c38e7681f12a8c62843b3d2594217"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4bb39c50126282ed45d4b29ccccd0e03"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f590dfd065306341a87137d70d504e8c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "2592a35c8557c5d9f502717b43512067"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3e627babc4c136d8fe5c99e8cf072c45"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "273b9483726a047a3451e70cc5e98861"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c6b79aafacb8d0977a66b75841a7db48"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a3b49fb8e5c6424e3ff9752e89692fc1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "28e3cb8b13143e3164ebc49dc727dd15"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "930da84d6a8dbd8e6b2ebab9b9b1aa93"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "46c27c12db2f31d420c3ef68ff9f0826"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "02895a6e4353f4aca686dc527503cbfd"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "34b0a765f20601c3bb2510f0fbe11909"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6f3f408b0b7db68189b7338f6a4b88be"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "c9c35af275ec6061ec8b833f4339479a"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "b0fc770580fe83c65ba93c1044438415"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "9758fe2495139f5c39f72af5855c91aa"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ff82225bc1f536d7f489c9f9342f62bd"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "d2dfe1679839c5e818aa8a22d978198a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "64387062cd35cefd77a3b17a7e20a9e0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0b5e126bdfdcb92f4bc06b20d31b2b82"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "681f362fe6b496d69d36963aef4e7573"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "1e9ea0ade5e27ef8901c04c9550f91c4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ff2b2a56c34324fd121503d5b228e729"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1444f703f7bbd771e4ce358108173e1e"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "46b1c56e096568448022625177868ecf"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ee2ae830ae8fa72741dd16b98d389b61"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ec24852d522d3af73ab34cd4728b63d7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0b085c5d446d4ec893e18e31594fa346"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "9b6df987eef6be9c20a272348439e8d3"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d96e4da316a3798083c07529774baf65"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "440bc079f31866d74febafe6b79482af"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "957aec3604e4b51376a4c369df2b12b3"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "f1a6be50a9d4ad63e26b6c02204cccb5"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "ae1b9d70a9735456aada18253f7783a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "242b21e1a99f4d41876aa5593689dbbd"
  },
  {
    "url": "tools/docsify.html",
    "revision": "0629159b304d6a579babee4cf3e0937f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5ad88054ae6034aac95f816d1f158f11"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "22361e94d88c39470a3b25a98339caa5"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "766933ad8f9f0f21fa98289964a351fe"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ffbe1e182d76f44d51852488b6e2479a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6d82dbfd970ebdbae0626193652425ef"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a1bd36274331789e4369baa0a1dcf32b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1acf1e72076bf9e37ca8d3fd42433941"
  },
  {
    "url": "tools/note/index.html",
    "revision": "89748f848a466e439282db30604a41ab"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "60a583dbef133fd947eadb72c6965083"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f31ab047147c506d834b980d141621b7"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "318e25095394d4aa2cebe4de96438c31"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3991af0e82e2f5a42b6c0a4ad8005cf6"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "f9cd790f7289d68b716ef3ddf81bc1b6"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b664973115511f96db7308c715b2c8f4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "519de7ba07857c63cc9a6a9164becba9"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "17da5c189c6f510fb2c925d11d89a135"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "522190c1b321b29ce0ca01403098fe2c"
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
