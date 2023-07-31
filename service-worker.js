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
    "revision": "1346684bf9c9cef4e3ccd269a39dc649"
  },
  {
    "url": "about/app/index.html",
    "revision": "dade3d973c3645ec556803d2c8b1cac3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "56970e1aa5b73495267731c86890e782"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a3333a4d861323e8bff6d6342317f6c5"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "e7621d56db3efad3a4bf9037e4dde625"
  },
  {
    "url": "about/index/index.html",
    "revision": "d932c8802b8f0ccd4bddd72146108dc3"
  },
  {
    "url": "ai/index.html",
    "revision": "061deb8c781224f83fda775874e6df70"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9dabf660d984ebce4aa6fe7a2f6c3512"
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
    "url": "assets/js/11.7f066a97.js",
    "revision": "39b0038420b94fb8d54f2ef077cea94d"
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
    "url": "assets/js/120.71418b90.js",
    "revision": "49a7093cd173581ed98f6e1e9f292fe6"
  },
  {
    "url": "assets/js/121.df2f82c6.js",
    "revision": "6f43f940cda56060e77be9107178ee90"
  },
  {
    "url": "assets/js/122.4ba1335b.js",
    "revision": "d02628cf67009bad32309b8c08a01c39"
  },
  {
    "url": "assets/js/123.2432c827.js",
    "revision": "866a9a5941c48cdc29db87694349542a"
  },
  {
    "url": "assets/js/124.178448fc.js",
    "revision": "2ab4627bde876ffbd1d6443e52bbd637"
  },
  {
    "url": "assets/js/125.c85ba2e8.js",
    "revision": "0b993917d1da9959d194a21b13904fc6"
  },
  {
    "url": "assets/js/126.5bb9acd4.js",
    "revision": "937b970553a9f7584cb39a2158ad44b1"
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
    "url": "assets/js/139.2aedcfe6.js",
    "revision": "fd28d7d23b241ed769039a4ad4ca7df9"
  },
  {
    "url": "assets/js/14.9e477e6b.js",
    "revision": "9cbcbe2c965b316403693fb5de1e9d70"
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
    "url": "assets/js/163.7e4ca0c5.js",
    "revision": "d7231f011810c3acd642cc99d96e6c43"
  },
  {
    "url": "assets/js/164.3cc909ab.js",
    "revision": "469d33ea4e777c180100b9990b8ee462"
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
    "url": "assets/js/202.2fa9d084.js",
    "revision": "3fd52686eef80d345187f4cd0a4fd783"
  },
  {
    "url": "assets/js/203.f009e510.js",
    "revision": "e89028e63370111b30bb78f1fda1bb23"
  },
  {
    "url": "assets/js/204.b75331d9.js",
    "revision": "e35c80df556a33f5eb799dd2ca341f88"
  },
  {
    "url": "assets/js/205.b0c5fdaa.js",
    "revision": "cc511d93c945eb58b66616275ce2538d"
  },
  {
    "url": "assets/js/206.dc89851f.js",
    "revision": "16a339ac9206c479aee8890518da9062"
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
    "url": "assets/js/220.2c385daf.js",
    "revision": "833e44de7fc55198539202b537cecc40"
  },
  {
    "url": "assets/js/221.f28c560a.js",
    "revision": "c906ebeb4f39108049e0bce712293487"
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
    "url": "assets/js/247.723ff998.js",
    "revision": "e1f9db24c197f11613a8596904d9db10"
  },
  {
    "url": "assets/js/248.f40e206e.js",
    "revision": "f5e27cf2e9bc07bd3e095a1664eed831"
  },
  {
    "url": "assets/js/249.853019ec.js",
    "revision": "2796ce2a7a558f41566b4e8f6e004ba2"
  },
  {
    "url": "assets/js/25.a330b5aa.js",
    "revision": "046bd591cefeb9ee2c972de4309995db"
  },
  {
    "url": "assets/js/250.551dd5b2.js",
    "revision": "28ce36317a4a9fdbb9b2698b26c69fb3"
  },
  {
    "url": "assets/js/251.48344e85.js",
    "revision": "1887955b1f1a46c934e93609b3d67c35"
  },
  {
    "url": "assets/js/252.82a179cd.js",
    "revision": "dcb892eda7bcb2963e86fa1628be0910"
  },
  {
    "url": "assets/js/253.0b078165.js",
    "revision": "d280e4998784460436dad4a4dc812244"
  },
  {
    "url": "assets/js/254.652c6ad8.js",
    "revision": "8f611ef4ed31ae61e7d6962b84f22389"
  },
  {
    "url": "assets/js/255.b224ab6a.js",
    "revision": "900475910e197c3b032b2f19dd88f9b2"
  },
  {
    "url": "assets/js/256.0e74951f.js",
    "revision": "b7681df3bb2cf615e5077272669568d8"
  },
  {
    "url": "assets/js/257.2390658e.js",
    "revision": "6afb7641c591369e0bf7abd6c6fa7cb0"
  },
  {
    "url": "assets/js/258.4a97e20a.js",
    "revision": "6d654f8117970060fcf5ff056168125b"
  },
  {
    "url": "assets/js/259.0c666f73.js",
    "revision": "1d0ae8dc7449257a8db712f468f652fc"
  },
  {
    "url": "assets/js/26.5ed9774c.js",
    "revision": "dd81b4279aa7ac38fdf3d4e4e607a148"
  },
  {
    "url": "assets/js/260.aca78584.js",
    "revision": "abdd0789cfc753c990a52c9a3f6cbd0f"
  },
  {
    "url": "assets/js/261.f7855db1.js",
    "revision": "65273521dc07613f7fc87c553d0e9095"
  },
  {
    "url": "assets/js/262.0815632a.js",
    "revision": "f77be62cfe67543c29923ad11a058325"
  },
  {
    "url": "assets/js/263.66c65bc7.js",
    "revision": "576e3c87a1f17b6a3b123457639e674b"
  },
  {
    "url": "assets/js/264.c57a43da.js",
    "revision": "ac5a2cdefedc363c4b6181a6e27c8e98"
  },
  {
    "url": "assets/js/265.a92fadfb.js",
    "revision": "c8db247833188f1553e8a39f248fd32d"
  },
  {
    "url": "assets/js/266.767e7098.js",
    "revision": "7bd4b6312431ed38720adceb6b90b208"
  },
  {
    "url": "assets/js/267.907243d0.js",
    "revision": "bcd5646f3dc5138dca20ae9e654df576"
  },
  {
    "url": "assets/js/268.afdbe009.js",
    "revision": "70b0bc70ecd465c6be0d5ccad385060c"
  },
  {
    "url": "assets/js/269.0d6dd5fd.js",
    "revision": "bc0836636a7d304e542d1da1ae814e13"
  },
  {
    "url": "assets/js/27.14affd52.js",
    "revision": "ea86e0bc1b5b590c92f24541b9dbe72f"
  },
  {
    "url": "assets/js/270.f4f4a11d.js",
    "revision": "3f558a24663f048b23e4a0a4ecc6c879"
  },
  {
    "url": "assets/js/271.54bb0632.js",
    "revision": "ce544c218e73b8c9c338f04b7fae16d9"
  },
  {
    "url": "assets/js/272.5b1ec931.js",
    "revision": "39fa6533ee0da22dd8690fd94d24e601"
  },
  {
    "url": "assets/js/273.dd2cd9fc.js",
    "revision": "9c0906497e4878b0f3b76bf1b78ba3f4"
  },
  {
    "url": "assets/js/274.b3910886.js",
    "revision": "78bc7c26ec09f18e383aa6c3fbb31632"
  },
  {
    "url": "assets/js/275.f6e8613a.js",
    "revision": "0cb0543c8e90f0c5d8f36cf30436d198"
  },
  {
    "url": "assets/js/276.a8e09807.js",
    "revision": "9910e6db6f5562c70be090e0c3e9d7c5"
  },
  {
    "url": "assets/js/277.e970ad27.js",
    "revision": "a940949bc1904b56d95ed88ca645438e"
  },
  {
    "url": "assets/js/278.daa9aefc.js",
    "revision": "be46a5e1ea0cbc00305a6b01035da713"
  },
  {
    "url": "assets/js/279.53dd26cb.js",
    "revision": "d83f0b5bbd83c985f17aef5f61d6172a"
  },
  {
    "url": "assets/js/28.aeb6a4c7.js",
    "revision": "1e95e511200b19002bb638583cd17adc"
  },
  {
    "url": "assets/js/280.ded8917f.js",
    "revision": "ff2e1de7d675122d33440d2748caaa4f"
  },
  {
    "url": "assets/js/281.39aa215c.js",
    "revision": "47318ad9754aadbc9b6f6c9ab82a941a"
  },
  {
    "url": "assets/js/282.536c013e.js",
    "revision": "b0372fcc5b1c23a9c45bf98a0a3982cb"
  },
  {
    "url": "assets/js/283.4fd88915.js",
    "revision": "e02bee10028731c604a716fefe492b25"
  },
  {
    "url": "assets/js/284.f9385eb3.js",
    "revision": "781bf56fa37e134ade6f43831f218680"
  },
  {
    "url": "assets/js/285.bec824ac.js",
    "revision": "f7b08fadd8ea0c9d99d948f98188df16"
  },
  {
    "url": "assets/js/286.3effbaae.js",
    "revision": "ecf8459d790e1168ad0c10db51cb7faf"
  },
  {
    "url": "assets/js/287.41e2a863.js",
    "revision": "683206c720859e0f94a0f5e722df2633"
  },
  {
    "url": "assets/js/288.4d6af9d0.js",
    "revision": "1dfdcb26423ca27f0237ef5c6519bd77"
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
    "url": "assets/js/app.4fcd2a24.js",
    "revision": "e068c46fff02a329c5c00a18bc883ceb"
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
    "revision": "1a6fd845decf2655810a60694e2b1ff5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b25d82084603641639cc706a83669d4b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "837fa3918a08763272f136bb3c64fd4b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "219eddf2981460cd4d373712b917b1cd"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6cd8bd9d4d607d4fbaf92e52e2b0c971"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e35772b32f8325594c476b473dc20a3d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1f6ad2f0726c13e64bc0a4451e19bad1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a789d02ffb91c6f52731493cf27f4ccd"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "925affff7f18e3dba3fcb77cb30600e7"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "380d9fb7776974f40c880a06b185684c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "88546fe82e398eaf6cbf11d83e6928f6"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "7a667dfa2ba2be78ded680492ae9b84e"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "fa517a777ef1ee61e6f358b03dba0603"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "962a92bddc7c85b6bfbc575dc27f007a"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d5023a2bd55888087ba675d54203d745"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "b6002b21df9444d12cc7daa84fa663b5"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "41ad62cfdea2df0901f884397f399565"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "45b344f9b3d3cdb31eb3b1097cabf453"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "0ac64b410d1064753fbb8f8c7dac8922"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "924506bd13bc33274975441d222c2c17"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "fdf582f1219238af7e4d0ed06894250e"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "d0516b1b0e2d91d9cb4d73b3680bd499"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "124c835d0ba294b9434b6dabff07de80"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "77db459cf3b63451ca8d09db8f36f66f"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "0db87f499c28ae4dadb6de1cfa1c9c98"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "98656cd5d235db526e975ae597805c11"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "6de1340c7bd4b4302c40d8ae1e3a0b13"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "5b5378e06bcf4f0e3103ca7503db446b"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "46661a14deafd62bcd132ab73c3002d3"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "44de33d2ce5a3fb136e0ce8de91cd5ea"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "d16f7847bf5f56eed9968966c8e7fdbf"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "1ebac660ca0199e2cf7f3dc53a4898e0"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "54051a5bda702848fa37a0fe05b5d105"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "c4702b9983ce8747e6026b3882d2bbc5"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "b4b2c031e8e8fda16dbe3336e5fa6696"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "511dc502cdfa9a7fc0311d448686faa6"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "bce30cec1e673ea67b6d125d67d2eaaf"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "9601a6a58711bab573f3fef165667915"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0bfd2cefe2ddb71b0de60f14f8d1f57a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d5594ed3f363414cfa73136110bed5b5"
  },
  {
    "url": "book/index.html",
    "revision": "629a9257d0a8dca521feb7dbfae44217"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "cbccab3810b358fe3c6690780b19fda3"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "b0ccf96a70d7f48bea098e97990882ec"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "5f8e38a194aea32c01b627f30ec78688"
  },
  {
    "url": "c/audio/index.html",
    "revision": "02066469c5ee6d597c09f6f483ac1642"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "3d27831d4dc9f0d0524c830e0ed6de8a"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "b13cff7bce0ff570a4f61a31f12562da"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "2e684078a8c12ecec6f4823f14c8a3b3"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "1ec42c54fe416d3c5a090e0d39c5f0a9"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "7016c1d8063489e49495d487a4081311"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "75392ad78b4917e88011c48af96e9a21"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "5429584fe02621da99491dc41f680119"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "183ad581799451315a8c5393a85a2d45"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "fe0d6f1b3e3a02c8842ca5187099a520"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "d53c3d0564a9bd29eb0a7ae84362ea3e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "7bb26949e39ef0e0419849c85150489b"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "f2d996de7a16033feed45082a884b5d4"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "9e256abbc965d33abeff8522b41d3908"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "6510be66dce7e102da54bcf98a155ca4"
  },
  {
    "url": "c/program/index.html",
    "revision": "e78158ba54d8a9c3e5a95fc864de9aef"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "0496c58eaa48e9dc965cb39ad554a277"
  },
  {
    "url": "categories/index.html",
    "revision": "613d13ed53d3516735f7a175a26a3d50"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "7334a1803b2ab555e2dab33913c78e55"
  },
  {
    "url": "figma/index.html",
    "revision": "4c4527b871462e378397ee9a3b9bb9a9"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "43a77080b57b8b6fe77a24a6824422e0"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "53d443efc317ced2f7efdb8811ebf7ad"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "eed340aa15330c8c554d717ed09ee376"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "49b16551389f5dd8b1723f2d56d82d0a"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "f46cc703084005a895ba356164a3189c"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "fc83a8cc2518f46c6df17d3f624c0de3"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "bc12e2ead479353ffe82a11e1e3ef32f"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "df86c3927a8aa96e820f14bae6547257"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "daa7c6898d07a5ebf9c211a8271bea9f"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "349095be4d97cedb59114adedb40c60c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "1fb536d012be278628c40618a13ccc84"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "f040c73bc7463771e9d6a1a6b078b11f"
  },
  {
    "url": "flutter/index.html",
    "revision": "466541bcdbe7b44e542abca79894bac2"
  },
  {
    "url": "flutter/point.html",
    "revision": "0f290f50a8a757413920f943160295b6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5298865ef95883548e6b44ae035c0245"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0cde6c83c0bee453bbe79e7371924431"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c1ea781386f97700086eaf4cbd897e6f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "47ff2f06f53db4a27d483dd5f81dc857"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c5f5523ad492a1a0780b72efe7152731"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7e25d04605b281dfaa79509bd6f84925"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "49694cb6aff18482c14de3fc974e0bd7"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "78a02cbf8ec17036c3e6895423e7689c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ca81ab9b85fb2374799e8f592389756c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a8991cf807e18629cea3e07c01bf6fd9"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2f7402c954cac2dde159e92d6987b2d4"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "bde01c57123a5c3cb266cb506fb7a951"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "039bdf819181efc1b5a6d0c2a3f2b6cf"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "7d2b57ba849fba0ba5f67bb7bd7220b5"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a0692a76c73605a6c80b1babe911841f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "f715a4feb7b125055815c3880e23d0fb"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0f3a786e3c7ac450477d5910e31b40b9"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "aab89449eac25de2eb8a19ca00b47445"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "76bd5dd3c89aa4dd8b48dc021a60598c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a56f03f1a2b90a8e6419adcc58bdcd26"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f1ccc4cc46c49e30f810e3f3ffce85f2"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "58f57f98355b15f6e5fc09d3383a4034"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "186baff7b17044b0789c4aa7587b15ef"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c8a8abfeaa0d0f5e0c5b131090575b1b"
  },
  {
    "url": "haskell/index.html",
    "revision": "1bc0bb6cd446b42a6358c009a28fcf5b"
  },
  {
    "url": "index.html",
    "revision": "8af43f6b28638ce34ab153c25f94fbe4"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "b05683083466b0a47dfec27d3b17a7c1"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "5de10abb714a432afc33c0886a734ca4"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "e6d38b2b1750075c21ccf7598e839607"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "a4f225c9f6c47446e38c1f8947dbc510"
  },
  {
    "url": "python/index.html",
    "revision": "ff233827737f7657708c30b77b30cdf9"
  },
  {
    "url": "python/python-ase.html",
    "revision": "f6221b53f8d402d669a937982c0ccfef"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "83bca3a88029713e388f0f950fb1383a"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "ff2324b8c32f3eb938d51457625abed3"
  },
  {
    "url": "python/python-file.html",
    "revision": "a3c48216be3b002859c5fded75573976"
  },
  {
    "url": "python/python-function.html",
    "revision": "9babbb4906b22a1fa957f5ac9962480b"
  },
  {
    "url": "python/python-generator.html",
    "revision": "0bc303f2ff47145f30d521d189ed9417"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "412d6b0da33a8a8df33f54d960ac5818"
  },
  {
    "url": "python/python-module.html",
    "revision": "d355f3446237f2966078b929b18d4be4"
  },
  {
    "url": "python/python-string.html",
    "revision": "339cb0474880fd1fb847433b53e7ca4b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "1b74b77120be2d6d3724986d59d86a51"
  },
  {
    "url": "read/index.html",
    "revision": "722e575c675e25b4a6dc9e7f6d72b0eb"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "792b99e32dd592f4f5f7321dbbb14af9"
  },
  {
    "url": "swift/better/available.html",
    "revision": "02a471224d049999b009d3c55c74a891"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4e8edd11c8773f778121649d5defe392"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "92840516600e64fa1ac12a13bf2215e1"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ae30f25bf195cc03c94878e234c885c1"
  },
  {
    "url": "swift/better/di.html",
    "revision": "960c1651d3a3b327c962be88068d6644"
  },
  {
    "url": "swift/better/index.html",
    "revision": "45d4d82346853fcc5783f70e7ed1e348"
  },
  {
    "url": "swift/better/last.html",
    "revision": "4842090382fd29f43ee352881d798eb3"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e5c5c8919b75e5f6bcbbf8e63860eb40"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "c02abc0d5f15bcdf7d738b59c9271740"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "0b03b40eb5d415f13052836e527cd712"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "dca7f5cf152920ec58bc874c63a3be60"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "db8cb738ee1143b83937b0ec2896073c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "b79c5475b403a4cbb2fba8239f5c6107"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "f64eee80d19500850d1863a2695e6299"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "80b49c2ad9d216591792008226651a3d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "330cf5ab388ef12d1525a5f567fe0abf"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "a1649469a1862232c0a7c12f8ec5b335"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "81900bb7c2aab9eadea7a784fd025818"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0c408222c504142d4815be94a210fde0"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "90930e103e061ccf83c09866634d18fa"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "de57c1b9e8885d0fea2d28d083264126"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "221308db3a8a266bdde56853061fe00d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b2a6b42aaf0713ac5a62c1b2df216a4b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "7c06c60724efe04d2e9ac37d3438e18b"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "8303d8168047b7d04c95def8bb3c8c96"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "833ea38566168ce0a9a3ca684258d2c0"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "cc156fb63ded5cc5ce033716f7342d94"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "6174c6dc3c3e9d151b1bcff3d9809b8a"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "d48d0c0d81ce0e1dc602f209bb30fb99"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "b4f6fa4a201cd2c260ebc23a40052604"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "9a7fc66dbdcfb00f85d702aba844ec2b"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c76a5ed064e9ee569e53b993f6946abf"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "6fe7452f23b489ddaecb0e702e4953d2"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "bef0eb3b646831f4c13b3c44048a50bd"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "5405b5951f196e3e68d3655deda72f7e"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "6b0896b025b8563fcd3a4d48d205cb12"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "55f5e3200855df981296389212595a3b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "9f79bb83530cc6a4998d3cfe0c9f8bfd"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3873d89748f1937618f647a067c46f73"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "7dcee023badb881293368d260c2443ff"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c43ba8073386485580fff03611177c7e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "13cdeacd97b20a46d86563e3f4642a62"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "b4f608809abae2d5c05797297095ce35"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "8fd96d8f9028df430d24333a99ef2c64"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "71fa64d99468e2f48b5e6a1c6573cd32"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f1c135c7f34f400e4e2fcc2e1742558b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "24b882b5041f8ad0998768016ba00a46"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c8c160fe71f1ccf06ef0075c2302a5f2"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "29e28e951b52c5c7d8584af339be95d4"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "9972731c1f7930380cc77236d41d729e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "9880857adae69dda4f25abf190e59e99"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "7ca2fc434a785f32c2ec3c70ae874029"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "2becf814e6d8e44412b14afa2bbc2c57"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "8bd6d9468047133b5e2af2055cdef2ce"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "ebd15a90c8aa64b490a486762197eb83"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "97f772361663e7dfaedde3d8dbb5dd00"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "87e0b94fd1d6f268882df1b00004e2ba"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "7e6284d5c66eb8771bf5e60321febcc2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d7a1b595be032f6db35a70670f0c4e0f"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "711dd187c64b6e168d233adfb6d8233e"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5d9b80c5d487a56fc2528c0704e5629d"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "754245a68ae852a6d9ca7b93e02b7a46"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "e64acf2af4ad47811727fd499c092ad5"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "00bb67665a7689a98e3806150528ed52"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6e0e9aa33f59b8e87e4faacfb6bf1d84"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "c105076e9fba12ce5d764232adacdb03"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f40f0bbf834a276f052c17a8e34e8b29"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "a4ed34c389398456335a84fe1d5223c7"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a75c90893d6a8a996f053d54403da510"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "879d727463574d900c4cef3cf155dcd0"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "2449e058635b33a9519af2d082797f29"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "69771ff7d6375395031badf50b4d0c0b"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "00222d0699282fc02f76e49b99bcaf24"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "d227c4924f4662f115795134456cb077"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "51716c07bd5b6ad423355197b4153956"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "2959b495642159ffea1fcd5292fd3174"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "aa38e31840fa5cea5f98cbe9f28ec468"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "8d0addf0145f5170e4383772f1a6d8b0"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "0e82d2816241e448edd81bec40ab9f73"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2f777daba325cb7658baf5e3f3c934b4"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "e76af705cce7cd23b76eeabee117db54"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "abfd7f874ed3d0c001dacf75d413eb07"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "bbc2ca82d3167e6f1aeec15746f855db"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "aafbda46c53632fb6cca62db68952681"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "63cd0343e8d0cb51c52b80b9c7bb5689"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "558d92d154f94a16c8123b2c0e9b394b"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "befc3f7b5259de6598edfe1f87fa5493"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "42aaa22a754d85f606c3b4b89f70e149"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d27b5071c40321ac8dbf3860f47e4c95"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "3ddee482656f00a64aa6deaf6ed7405b"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "db3de315996aa737b85dc6fd6d0c47d6"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "e6cd92da1787c461b372b24c49dc2ace"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "7a04a2f43224cca9f2abd67e6db1c439"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "fb57c9a37950eb16e4886f5f8d3f80b0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "dbdfb4e603e11235bfe035a5fd841ba1"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "69eb770908fa9b0d714625609ec400ed"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "99796409a6648ea2a41fafb6a3081516"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "8a2052562316ab72b8a65020505c554c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f1f5ef76ce4858ecd3d02eb8d642e100"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "3920c7e4be6096a3a9481122976ac4ae"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7f8321252f6d20ae147f7f41fabd9efa"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "48ff2aaa568523715bbd20646c31b3b6"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "137391a695fb87f19ce7103e55cd87ba"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "236e95ab4fa9b33b92c1493f27050750"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "12bb59e8c1cb41ecdd01af2322b25baa"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "ed0e333b4983fddcd3eaec1abf84f98e"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2806da7dff4249d3cb840604a199fcce"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "26ad828208b3d1e4dad094b348826ba9"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "77c1ffa98edb9d4dacc70ef9ecfbbeb1"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "8b2ee49e4be6c2b034d34c7fd0aa1c33"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "937ea9feb7a2a90726eaf1bf761667a8"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "91ce618c78c01c8dfd0691be3aaa242c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "1877c6dcff0c4405369f61d151d08d4e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "58c6438bba78fe6c10284bb514708d34"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "cbf4b6d2bbb8dd4130eccd4add9975c0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e7b690d3bdc3ab5a6174a6471644166d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f7ea0b0bb352a0319d04d53edbfd125c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "503c45dd2e175f3418301a2bf0cdfd09"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f3dce05769b3af38675c7409426276f5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "db8c4507da172d7dc42b052d12c58cce"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ccc1957244533dc3a43da1a0a8e9d0b0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b42f1e961b330abcfe4b2124b1b867af"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "54abe08fd1dd251f855ba368cb2c8372"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "0da45084fe0799a34a3012bdb0c23265"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2f7dcccd9329248f855dee4d1108935e"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7dc11fbb7ed5a2729bd5b2fe68129e30"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "00cfbc4759d53b4ff738470827bedf4f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "38f45ecfee09938e9799517e7da512d1"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "17d3d3d72817d64fe6e46dae37ead806"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7065f73c64a9e251e3af85e5167fb91e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "150464262a0af234ff8dae555a0ba56a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "30213583486c4a6e4a218e46a9809a72"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "156071e210ec4f147f39d47db6293641"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "35e212e71bdc6b84543c4f2c03fc6329"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "52b088765503dbe1e032d0a9ac5344f2"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d75c8396b060102701bb586b0eaef7f0"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f20241a10af9295bf5b835566b0fd99e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3497d8d44982615ddf2692581afb74ad"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "5318a92ac22c3ea5431bef47737740fd"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "15c7f999c7e53bb9b9ff011a9f0ad1c2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3127d2f1053b6470ae1d140eb0320c17"
  },
  {
    "url": "tag/github/index.html",
    "revision": "90fea1bd98f3bbdb48f43095b73fb704"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "4a09484c8da8cd39ee4105d6c07003a2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1b994389313a9f7d3190da03fa6f86a0"
  },
  {
    "url": "tag/index.html",
    "revision": "e06b17b37f19e97e01f2e68cb5655a03"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "1b9772669c5c27659a583d9a1fc8d527"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "44922ac6f08bb832af81698cb556f0d7"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "e04e59a5d7860066ae7b63e6642d5de1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "27bbd6d3f85000ab646d3ea76c148ed8"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "64b8383c825b01d7ae7b502f4e8225ca"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "bdfd54e57c515c4a80899094966023b6"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "4a741e90df1020096bc06899c079c0aa"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "72041e8d6432933c9439f066a8c8d30f"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a1be9acc53f13c346cfde3cfa69e0fd2"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "e32e662df50b45b99889e945fec83924"
  },
  {
    "url": "tag/json/index.html",
    "revision": "2a624505e2b1b79bca2a05c2ea027bd6"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9c3a619f7fa665eddc8be0234391e786"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "eb53ade5ed94912bfd01e6e6f7dfa13f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "608cd06e6abbd295eb9f1bba8aff1e1b"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "62e50d87bc0f7dffbae21de9bb7e8956"
  },
  {
    "url": "tag/read/index.html",
    "revision": "263e2450b4feccb6c7cbb046989a26e8"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "827cb6fcc9aef2ec7c5cd2e2a5f73388"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4d1c3b2ff96d4f0e1ce0bf726bbf9eac"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "2d88498c12683d396e4f59266b44b174"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e2e3c7e51bb35b4d86d1ec8b7eb44253"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ff4ca76e411c8c089f04723932c2cdc2"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "3e37bd4c79fa80c7d3635c532f1e25ab"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "046abebb83978578f8cbde8b3522a191"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "989eac9313eda97d62af101beb21632c"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "eea2b670964a5ae0cb694fd847bdc3cd"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8ff19962342a2f222118a13227177260"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b30fa55ba590849a72ff2f881b46e3bc"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "604352ccc46363bfb5500872cbccdfd0"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "d816f0231ad07f32c009a1c1279d38a7"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "70af8730f72d88ba02fcb2164de75ae2"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "bf5c286a014eb40d608134d97bfc13e3"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "2940b3beac2cbebf503524dd74b0b631"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "c26c49f2beba898198c1395a7b7679a5"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "e6a6c43502e0ed3f76f1945f19912cb9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "43805ca3a6089e4292909d6c021aaa74"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c9fa744ce03a0fce90d0a7d5268f6c94"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "295c46ff9ba1ffd896cbd31d78c80871"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e08a3add70230ecb83b6ecd8a5588678"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3b2bbdf8fe2f6e73ee19ab3086d3ef3c"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "cdbb5e36f1613a20d0d76593a0c702a8"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "4868e1d2664d62ce75d71e7e0461ebbe"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a5eb7426851f762283369566f3dbe66e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d862a4ef2d1f28bd6bdd14ce12e87822"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5d953388849a7519f7cb26d46b94317b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6f7a3fa3989b7a490a592dc9ddbe85cb"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "d8b9dcda67fb072a356916a38c872778"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0e9ce6099e2e9013ed30aa42accb1d1d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "37449c3ce7ecaecff0a169d7da36beef"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "0ad2a1c74602f10d1268cefb3da1b6ab"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "15cc6ef9bf78b111eae8395b0c3db075"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "501dc5482d322c0881cec6f8b3a54c6a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "32e363fd89d1efba8e8d4dc560cb0c09"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "84d6965aa976473fdc9626f69789b2a4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "bce8e894a793e4120109fa29278c4368"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "786a1f2d0a76c6584cc883261a772fcd"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "1e1f51d0a2a60dc311d454dba2022403"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "abe90d53683c5d6d093727ae285874ac"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0695528d87524fe86c626b2636e0f7d3"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "033797258f034a8d671c2f3039f056f6"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "e3019f97ad3bf77fb0da09ae6e28e079"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "e5cedf21dfe2b6f445e263edfa83c8d5"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "72c90a014ec4bea93153b7fc43d18cf3"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8ae9c59eeb2f299be5cef2581f2ddaf7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "2fbe6bb253c26c7604ea5de5db8afb26"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6c1900fc42f86e08d979925dd5d3c283"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "99e08b74741c65139fd3de99a2c72cd3"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "2ec48e2135fd8cb0500108e769226967"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "dc87fc45704ffd62dbcfd81e98ce8e8d"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "41d978e626206bccdc1a898cf5936905"
  },
  {
    "url": "timeline/index.html",
    "revision": "f858d7db904ad52043817f5252d01218"
  },
  {
    "url": "tools/docsify.html",
    "revision": "df33692d391ab03cd0c4e7bf262136ed"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "b7c27a94ff9e372366da2df792f0f77a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "170f9eaee996e92c3a06beb22c49bc93"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "6d208e99cd51c2165b9d44d5816e0088"
  },
  {
    "url": "tools/git/index.html",
    "revision": "511ba3702d0d8e8aa2bf9cbbe2be8819"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a2d4fa121492457a19288b7c1b2298ae"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "12711f2ea1811b2ba8e519754d32ac6d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b2f40294ed455fbcb86905859f3a9a5d"
  },
  {
    "url": "tools/note/index.html",
    "revision": "4c7dda702f6924fcd62a2c8c27db6a2e"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "719a7629c31fefeb98e538350771d21a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3f0c5eb881a1066dcedfe6e102453735"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "6a98be8e01ad1d7cdf7e7136467a6095"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "0acec2e3233e6894e8d11843d3299474"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "fd1d711aa17340b5e8d403547558e1ef"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "458c2aa17f6965d15785059258e1c544"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5a21c29d4c5037ac30158caac5fc79fc"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "a03022af838bbc3a3c0d91181d9f9645"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a4fc4ae34ee6d4ca08bafb5ee5f22115"
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
