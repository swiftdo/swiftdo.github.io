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
    "revision": "7af4b94b56a36d64bb1d3dfe46967b13"
  },
  {
    "url": "about/app/index.html",
    "revision": "28baa5c1cf284af87bc38cd3343608f1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b80630237d55c6cf94c4f58680a3e37d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "894d462fdd1c982d59f55630c95e6295"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "755cb66c74a1fb68beb53377ee49d536"
  },
  {
    "url": "about/index/index.html",
    "revision": "9a4f7edf1ebec2ce67d00de2a92a2e66"
  },
  {
    "url": "ai/index.html",
    "revision": "39554c69dae58e970701e11d28970bd5"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "55d32f37d0838337755646c6131dc930"
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
    "url": "assets/js/121.b374669c.js",
    "revision": "207bd6d0898a9057184c3562f2278fa5"
  },
  {
    "url": "assets/js/122.b4d968ba.js",
    "revision": "d5b51eb9ab0213fc58106a111507d392"
  },
  {
    "url": "assets/js/123.1b8f0101.js",
    "revision": "90d6238be492741ba7d17333ab5d31fa"
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
    "url": "assets/js/126.ac1855f8.js",
    "revision": "8d2d7f20230cc62bfcfc3a24543a7b8e"
  },
  {
    "url": "assets/js/127.c949a443.js",
    "revision": "95ad584f707c16b8aa09cb75a1a207c2"
  },
  {
    "url": "assets/js/128.31c28a24.js",
    "revision": "0018051663b5b329b1e79ee5fb1c0858"
  },
  {
    "url": "assets/js/129.ed88c9c9.js",
    "revision": "15f11ab49aae7ab3e2fd319faeb6866c"
  },
  {
    "url": "assets/js/13.3ed8f453.js",
    "revision": "0a5b3777f6f232d1fcdff5027dc81004"
  },
  {
    "url": "assets/js/130.5830d265.js",
    "revision": "cfae17d7ab13e5bdef9887b45953e8ee"
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
    "url": "assets/js/14.0dbe6681.js",
    "revision": "44deb4ee78923ddc38a4f20f667255cf"
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
    "url": "assets/js/15.52d2978b.js",
    "revision": "0c472e6db06d6cef4bfa38b7d5236ef2"
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
    "url": "assets/js/221.6c2e4ff4.js",
    "revision": "936a086f4c325d407526ae5dfc1efa32"
  },
  {
    "url": "assets/js/222.203b230b.js",
    "revision": "7d74d28e48ce69dab96ca5ed0cb97d57"
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
    "url": "assets/js/235.9b68b7f7.js",
    "revision": "0f81db68d60c7cd61899c6f145446bd4"
  },
  {
    "url": "assets/js/236.839cddb8.js",
    "revision": "e7c02525406ea2daced4ebe29925e9b9"
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
    "url": "assets/js/245.aebfc870.js",
    "revision": "8f4236454f51fe08692c4628534c8710"
  },
  {
    "url": "assets/js/246.1c24e022.js",
    "revision": "18d42618df083b42f7e532bd4c4661f9"
  },
  {
    "url": "assets/js/247.433da08d.js",
    "revision": "d7d72e5ec1861b8fd9cf180d29620c88"
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
    "url": "assets/js/251.9ac47bb5.js",
    "revision": "e44a3dbf538121a9a4222b49360846b8"
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
    "url": "assets/js/256.81a5cb3d.js",
    "revision": "d74fda7bb903cd4f2c26c2b06e8a38ec"
  },
  {
    "url": "assets/js/257.e7d878c7.js",
    "revision": "7cf46798fc9944441b8aafc1736299de"
  },
  {
    "url": "assets/js/258.30739088.js",
    "revision": "a7df880877aa938d5fcd3aa8de03cf7e"
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
    "url": "assets/js/264.932d75b5.js",
    "revision": "aab91422b644be047a5b412785bf3e05"
  },
  {
    "url": "assets/js/265.a846074a.js",
    "revision": "7c68d38ed1c0324ae07468ca11157379"
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
    "url": "assets/js/271.46d67b48.js",
    "revision": "f551405c2d72d50fccdecbce2f211f64"
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
    "url": "assets/js/278.cbda1b0a.js",
    "revision": "dab10343713af737378f72e427cb98b0"
  },
  {
    "url": "assets/js/279.0025c5ad.js",
    "revision": "5b68031c6bdc834b1ede44b3706b5f0c"
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
    "url": "assets/js/app.2c411a28.js",
    "revision": "f43cdc9ef575ae20c98a20e97f6a5da2"
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
    "revision": "b1d6e0ab62fb453dde3de77bc94781ac"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c2d38b936526a3fe562d611e9d4d26db"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "427fb76cf49e885a02d3cb8fb3575366"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f967d7fb64ab0222ce225aca28991532"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f5987a3dbd88793429b4b056b5a12c66"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d1ffbf18dece811aa02d89b28c8e9d92"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "34e02ff3f1060cedab90bd40fd570eb7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c2e395fcfe02905cab217e2869b42fc8"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c00fd0b891512d52c41de3a1141fe7cc"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c4ad2c5b02750ebd1ac8e96393825e02"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9a5e9ff23c7b22dbc1a5476c90dd15fc"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c34e17fec84efcc8ff81ec02483d002b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "0fd8e9bc5eda245a59c096e9ef768e27"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "6c83c2909e342c6c46ee4ecdb912c9ac"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "c2246cfea15ec1755fa219bfa53562e2"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "02edfc6e7ff2141869710fda33c82240"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "639f524e5992f1778780c9e0f7803cd8"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "97cf4009cd01131bc71a70264c842218"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "934027b3c53982e383a7b5ce76c20565"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "59836654423b82066cd97efc0a1e895e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "40b9b7d1b07a68317b9df78e8e476cdb"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "b85ab0dc2f4466377c64435808671bd0"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "7f6d1ed5667b1cb18824cf82708dbc87"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "9a2d42b52f610bd1c743360bacddbb4c"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "df29c741e7dedbca37888215e6c850c4"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "cad0086b86712a7234f57d59eed4869b"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "ab3e482a70c6e800461d2401cf8e77fd"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "cab1212c04a2bc85ad3d595870ef151c"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "4bc68b41f7f904c3a9bea4b16f5d400a"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "796c0cfb5faf4886dbe0a6360cb81b2c"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "716fd7dd5003515dc8d839f7f3e684a8"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "fc92048c7fdb2ac9491bae5c7e768dc9"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "e7da405deeffb1b8adafeceb8f02fd9d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "fc96ae826a370128aa7089481fa5bcf7"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ee01be0c8092f2e3760d46cf851c6c51"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "a9394ca452345bcda0914e1bf425f25a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "a86d8c0fc4642e8d3e1a903e87f95ff7"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e4a569f5deb329468fe2e656addfbc45"
  },
  {
    "url": "basis/index/index.html",
    "revision": "86c7020aea858f1e5ae42a958861bc29"
  },
  {
    "url": "basis/os/index.html",
    "revision": "14f7a576b21224fc270408d322b46e32"
  },
  {
    "url": "book/index.html",
    "revision": "2974ee93e0aff6aca8e7628a80c3ec52"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "3d559d8894d4f8fc56fd528e283de3f5"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "fea755e2c375ea87a52d372adb935ed2"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ce930d2929850758f29acaac54b75d02"
  },
  {
    "url": "c/audio/index.html",
    "revision": "6bae8fc2fe6c69df05887beb817a2954"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "74234d53dc4cb0306a98e79fc0c2f9aa"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "bbae128151051396d737ce482fc221d9"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "6c9ccc053552e565e03f2b7b79332ebc"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e9b27efe4420a86ccc3a1da7edf80e8d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "4e36f89d5a4427499932a402df1b197e"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "c7f9c0b8d9f29c5e647c7c2ae422e639"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "7479b00899f54ee47237e51b8cc42860"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "757aa1e255078b3b84dba50722f67230"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "ad217196b15919b8cee8f2939e5bc437"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b14d73265a83c9d4f8218b54e369a937"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "ffd2225aa3706de316fc008131305716"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "075f5bf1307406716fbe88e1c9158ba9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "b23a33b6407ea9ab155b8f9485eb8af0"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "b50eb72280d810f8a9251cb1cb532544"
  },
  {
    "url": "c/program/index.html",
    "revision": "535c50170318c45e3e2ce4dc8f21a35e"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b6bb90f45f620f1945e247e7d90916de"
  },
  {
    "url": "categories/index.html",
    "revision": "412c1adb67db2361c22af8e45eb040c8"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "244bf26ecb783e27e09b05393d9292ed"
  },
  {
    "url": "figma/index.html",
    "revision": "971c953d0303c27d6e48424f4171f866"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "0d6fbcea3cd66ef18a457fa79feabca3"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "62cc782f3229017242d01511f2816728"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "a431463c392b822c3472cf9e0fc78c08"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "816f66e83059ef7d348e79c42516d5bd"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "a59d84abd4b06dfe9bc6e168221ce8f6"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "bfb76b0e83423a064a3ef4ca8de4bc84"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "939c4915fa2243acbd33e889007c39e1"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "3728283c8e949af04aa1f4362e4ec4d8"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "07d383ba5afeb598b99dd060733bb407"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "38a66fb4fa473c996b71485bfd433342"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "027abc15234e74f5b255714318fd8a59"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "d43be47a557a5f8ba9591aa95576d04a"
  },
  {
    "url": "flutter/index.html",
    "revision": "387fa43848f9acf87e4967424cbb9e35"
  },
  {
    "url": "flutter/point.html",
    "revision": "e94df8bfc1df0ec40b21e0801c8bd1c4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "83d7fb16c6d6b255b35380378d6bf7e1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "225433c3c9967c467df6e5d874750a2d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "7319ceddd7617a918cbedaf68cfdd99c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "a9badd33285b713fc1daf445d2339f6d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "58c5acad49da5093507a3282040a176c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b4b45cf8ea1cd5bc619a7a7b634ab8d5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a05986d9128f83566bc137d299fba9c3"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ed01e6a348b202341c8337d9ac22ff11"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "7ff1c90e3929561d3cb66dfd17571b43"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3883fda5e2d4331065bf8437082847ba"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c39fa7467ab6629c66b09f7ade5eb770"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "995649ebd3fda3d6e84cbb1b29333082"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "6d0cd573243a9fdcd0d77e9aa93d1423"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c4cd2ae869a3905dc87841ae694c1843"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "afaa3ab4f9c83f93c9304df20105ba33"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "18026ebdec21b3ff32849ad63517f455"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f6661fc5ba1aff0683b0b699a8d8d97c"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "cc753c400284b4daa7e3a206a10df44e"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9a84a88e763814e171d895cbcc7ff0ae"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "755aef6880c5ffcd167412e7cc4ef4d3"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "07b7ffeb79eb716a44a7c2257c46552e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fb930e61ad953a9b6a54226ddf4af217"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "6342d1cad1ad7fe317be94bf846f7af1"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a15d31619632d5674773220bbed2d622"
  },
  {
    "url": "haskell/index.html",
    "revision": "11c09bf86fde1e82c8b87df12737db4c"
  },
  {
    "url": "index.html",
    "revision": "2e4e8102faf9632c89c30e232a70f285"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "c0d6448a716f708685e53d0dc0e4d8dd"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "1d55eea4d3e12c61f23ca3974a4ffaa6"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "644ed9340832487819da5eba82ae895d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "6c999ea5c8218d7b42fa569e6be13bb6"
  },
  {
    "url": "python/index.html",
    "revision": "ae3456a53f14eb9d62fbe5ac46decfb4"
  },
  {
    "url": "python/python-ase.html",
    "revision": "227d7950ec1e2e9e48837869ce43c362"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "7f698342e5f0f7b3dfc256f719907813"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "c5f2388113d412f048640e3445ea0150"
  },
  {
    "url": "python/python-file.html",
    "revision": "5043aae6a2db117c5e226759cadefd4b"
  },
  {
    "url": "python/python-function.html",
    "revision": "6ef5da43eff0b826dbf2943fc0a22beb"
  },
  {
    "url": "python/python-generator.html",
    "revision": "f90d84ea4dd62cbe2213d313995eaf29"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "5ad9a5091aa0c479158a1ba8a6d10907"
  },
  {
    "url": "python/python-module.html",
    "revision": "1b57fcdf572303496235e71f9bdb5a8c"
  },
  {
    "url": "python/python-string.html",
    "revision": "19499b27d9700312ba4dc7512332e1da"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "af51f312f106d81240c3522d093dd703"
  },
  {
    "url": "read/index.html",
    "revision": "6c3433cd0de676b4583a71c24f38c657"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "49aa14a548f9656a882c8080d1770cb1"
  },
  {
    "url": "swift/better/available.html",
    "revision": "d7f5dbd1feae634b186521a8e26ae075"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "26ed8bdc7fa7f184786b3604ecaf298d"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "eb33ca35e03cb06a7148b02c1fb817d2"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ffbf0402a883492ab498f393004e15d6"
  },
  {
    "url": "swift/better/di.html",
    "revision": "34b1dabded31ff025829d973a82d6f59"
  },
  {
    "url": "swift/better/index.html",
    "revision": "67be4f24be50fcb2506fa3020b40dc1a"
  },
  {
    "url": "swift/better/last.html",
    "revision": "1987498fa61008d80dc46ac4fef3cf57"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "79b44ac823abf4c63d8b16c9f2af6784"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "bf5f07c27746778cd2cde34ca403f3c7"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "c46b008371c34694ffc480cbd25f9ec2"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "591e9e408874c6894914c87935ecd167"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "3cacebb62e5363559df8c2d569a7f8d4"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "8c6584d8b4e00e24bcfcbcf526d8ed91"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "d702399d614f672be57c583688679e89"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "aa66fe5929f6cdf8de3c1aea750e6749"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "7797b80e4cebb683fccfc32c9d80708f"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "a108925296cabd887b01e63f562c4077"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "5449a062fbfb6706d9d63a90f47a9493"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "251323469ebfad82134bde7d4f01ff6f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "c0c222ab73b151b69ec6f4c0faff1f9e"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "665133e9412bfc0eeb73f0a64941bf8d"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "f4d0f2e0010443bf3391d11ae8d0c536"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "a3b908227f97ab5c14ebf7290689091b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "49f7e2dc974845e44437b94c9ec20647"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "8b5ae282ad74568e468c008ce9f518c4"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "35f6a533335849149a6c21dc83935d6e"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "6797b6358aa2f373e8bfff6353243fb9"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "12a474eae4f0cba456d6a71213906165"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "f6d9d33bacae2531a0c361c27b701110"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "899ba31f69ccf1da46350a16506c33d8"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "be05f6c541f0bead1b61cefd1df5469d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "cba5ba6db84ab305a3f20e8ec9b93c56"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "7cb25c22d795749b5dd5aa677b3d7c61"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "4361fc80cd226e0782d9839f9b828bfb"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "4efab9f4618e1a4e704f3b2173dbf718"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "69d7b11cd24e92568351be59b79f2349"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "4fa24dcd786d013b8125d3bf2cb17865"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "0b89769b0a65118bbceb7292d99cc7d0"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3013a4c3058aa9028399872467a8e93f"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "535c7de6edd84f07bd8c0e1c451b932c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c2e6b0599ff2d55d96599d038315e7f6"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b2faa37e316ebecd9b83e1fdd24eacae"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "b418454558b4b498276ebde07100a4e2"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "a38355f3ffa1ad15ec212ad9503df8bc"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "99af2d9c7243bb604c664b1da9ff8725"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "5c1de079c59abc06850ccbab74f51a40"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "c25da1e5d4d32ae7da27912f5d4c80c9"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "504f3caf5ac26709f9b305c98c7587d1"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "65bd9f5d5957d9dba57fac7559820f54"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "22f721ac0e15f286359c6157d5258d90"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "8f857a34b9dc82416805543ed754d003"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "29da04e34036a19611ab91442bd2d4cf"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "3cde4d6d02c7dfed068a696a8da82560"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5ed629369151211975f411859eec2ba9"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "3541e70c23cf97884ee915240aa5c575"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "5eb280cd0608f1a02beca0a9d9095720"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "64c2190b5d33002db6e2b72319409028"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "72987cd5b196e7fc99733790dd1fefaa"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "eea8027ba14b8f5de393b07634661e0a"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "64e88534755bbb6d744a9108339e4ebf"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "2139f9ac0315568a72ade1ff647c256b"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d6eb9ee5856e29b84992176fd1c4938e"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a876db2d50b69603bec7a1fc08d84267"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "e09449b761ec473c0341c09883a1023d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "10d86e47cfc7409187edc7f1076e7a7d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f3f70131902167b5677abb238eefceef"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "0f0d91904685433df2a2a3b0ac5d4196"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "489775632d0b2a62ed34457c92a606c8"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1b3ba71e14e67f2a6422b84b68111ab2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "6246434184c32a03365580f723458a30"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "06f4aa566c7a7bfdd62e6428e723825a"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "23675310a9c6826ffa8689dda7a1d4d0"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "2654da27c315ffd0c297d29065c2cda7"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "c2ff89cdd735ee40dafe4eea55964c68"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "8f5ba9e992c7471f41670c4c971bfe10"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "8b63ee09df9c85bb002c7abd1358c913"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "318acc95bcda620d13391d6c848b8204"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "fde842c9d58fa902addd68ee31b0e6cc"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "93ec404c5cc25212b6d986ddbfded161"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "59b20ac9163ced32e873800f5f363c2a"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "41a7add7e50149621699be8cd3ce43c3"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "b0064577ea1923952e3738de8a099c9d"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "ff118b35220c1add7deec956b5389f48"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "2c8c25dbfdcd505f0b669376190b5b5e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7bc4460c7c041ce242edd9ef6fa876ed"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b5f3ab8c5e13ac48d85cab29ed087d3f"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "ef75cdb63a26f6200b49f54bb5d4df3a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "0a562cca58a4776f7202415720c9bf42"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "4a1b9d6cd4a694865e6bda63f072de7a"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "dd903ecb9e8907cb16354fe23e1b8929"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "e26b5fdc9ba71544059fc33f11f365ad"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4dced16d538c22b6b45da3a6f13111d7"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "5100428665660465e6f46762674846ba"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "02b4a1ab034ea0334a981bb6c2eebb3f"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c12a97268069ec7bf2d3bfc72a255f39"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "9b98b7e218f894d878ed56eab16d0a91"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "6f10d9f87aedf51e3dc71e377a97411f"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "cfaaecca3ddaa1afb5dd20f7d53c6059"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "692c9f6d87cb6fa4550d56e96ca93416"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "f92a36ecb74a28463a676fc584227f2e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "fabc8dfef1f7e3eb922cc6492aa12e35"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "16379cd7751b51225157ead2514c89b1"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "73bd13bf751e443aca4217940c289a89"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b037b6525481f07106ea36f893ff5388"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "3eb06c43acce4617a8f85e9f6cd52c79"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "61591b37eb4a78b1e7240e781d949b59"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "d50ecf0eccaeacebb1790325e7339c0f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b1c482742d6f783fcae736ab0466d9e8"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "e67138c99883f8689203b000a3675386"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "beeffe664d8aa0c4f7c8a84669b157a0"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "5d28599722acf7e4553c8f2d95f4d98c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "986c4cf933ab15eed64c09e7d0ee3f36"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "8a32e0c2f5beb7e08d9ed7f3fe9caa6a"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "8c1c0d0e30df87f281d4b5943bb6ab79"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "e6a7ae122c2417bcaa1b2bc9c2e50708"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "46caf84f08a4c5296c446becac8e165c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c5b36e5722e0cbdb744a33fdcf7f2feb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "0134eda431703a8f491eeb9edf4efd0a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a52cae3f61775033298f3367dc8401e2"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e7251bbb6c3ee5b812ec64cce6e44fac"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0777237964e7c557e68192dcc2614d05"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ef78454d0a5c4880474f70e9c25d52fa"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f785417be451731135cf9510aa67c726"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f269f68a2395b62278a56d047141260b"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "241e60e2607731ea73fdf6aeb05fc585"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2e1bbbdd90e5babf148bf7f04444a597"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "0dfabbd3e632b3f7055107d6d9f56ee1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c1c4f0ab77b2e4c765b96e028c4deef4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "a896ba45c2daac9fa72c23f4ed8e6131"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "005142d212de280470f0b55783b4e81d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2575817fcdf7b518bd34e92e9c82a941"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "5c9f314d193eff1d326f4f13c1c4f843"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "809115e53350dca7b44a88b7a216221a"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "004fb4cca777adaee16142e024c32b71"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "5478d95f14f5d5122ca652aad15e43af"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7f846c0cedcec37a88e780713205972e"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "85e6c5eea59ea1033f71e7c815446e35"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "61f19dabe49b25caf8c8d654246fb138"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b3991cc709d8dac63df95a82ddf0efb5"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e3339616210ba8b92ef023fcdc30ba17"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "37857d00fd7c5264f94a3375ecb0e3a0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "88314703ba2a22813300932cb68f38d1"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3c79ee8c3b62dea05de6708617837d28"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f89f9bdda06068af60a91af8860ebda9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9899bd84089efe4e8aae7fc526f2c34f"
  },
  {
    "url": "tag/index.html",
    "revision": "2492d21dd8ee526d3b3fc16c4c652096"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a209341ce184939f3bfa553a5c6f0566"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "dae611f19c8a87bb228051dae27f8e81"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "27156ac447c3e7728bb4752fec27fa78"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "b44340fc746dae0468b1ceaa8d331642"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "92b5be7385e88b78d4f4525806b2a25f"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "0690709ff98254de9d32f8eeb2d177b4"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "a332b7504c7e407a79c7624db1fa422f"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "0dab69a5f40869b2cf0606413c4f27ff"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "5cc2632dbb372c5b8eeec41181c052f3"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "a3bc606f16fbeb2984d51e43cf859baa"
  },
  {
    "url": "tag/json/index.html",
    "revision": "719c6ca0182c500cfaceef7aea99bb84"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3616c9181008e5b7499667208db91a6f"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "1cfe1c0281dfdb8f81de717538fe822d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0de19ee6e6103847f48e0b4fe2f79cc1"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "7ac0c4664cf6c2a2f24bf6537732231f"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d346bde52c60e8e25ec68184fe2851dd"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "756229da024c344eaec4fd3c39a5518f"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "032598026cd1c98a971ff0c484c36884"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "5585d0caf7343d341c2d3f408e2b8e5f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "f77584543facdb93c128299aad1bb171"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "cd2f5769af3962626217afb095c54d19"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "df3de0d2adfd5eaa1386b98b5158e313"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "865efc3cbf64fa9413b397b24c3d3304"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "2c834a65039f63b50491498688edb237"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "8baee0a4c0fecf73e0d775e422e21405"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1d90425a35607b6ac3b21583c16d2782"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2818be375586ab785ee98b7bee18031b"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "1f8e027b82e52b2ce7a70827ddcbc1e3"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "7b035d3eec09d6cb7d6fb8f286622549"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "13f9e9717e3441807438966958cf5eb6"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0898f956274633818358055f5e447390"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "47383c4809dd2ec76160534e4d046db7"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "022a6b98cc688237da3e7b81f9cf7aef"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "887bdf523442d3ff0a4c23dec345a6a8"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "549682e7798ffa272d0bbe7534709c73"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8371e8e3493d968aac459048894ddc88"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "1a349975ba8edddaad3fcc8c7c5832bc"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a7480506803aa4ab111e82894c746a24"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "997df266d78b50c3afdf1abf148de8f4"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "c53292d079c9af17ac45dede5fd5c766"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "ae023d9caeef4a9c9f1bc2ab250bb7b0"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "b046d9939075258d51f9672c6a4c463c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d7d4339e9a602e5fa45715107c46281b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "006885f6df829a1833776d2a9c4afba0"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "1d64d6f0cbcad32b7e240130583ae277"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2333a2264bc992e5c68e0001c45f94b4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d37cccb822df312d36314741e6db01de"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "2c94db753ef32da3781a4c8abd663ea6"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "bcb2c8a56a084ab8e261e9d3766cb41d"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "90ef9addcea8581cf9dd88f6a5be154f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "32e22eac4a8ec89f8126f7c497606f3e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b7fe0620368807b6ba076c99f91b8e3b"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "c27ff03852cbcfa70cb2f135fdb49d7c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "60835ee03f01c29ca23d16ed9bc90afd"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f50bbe9a6a621c19c2dc3d5e5a241733"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "3f45fadea9d212ee3357d29bf9909b21"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "34a5bbce3c07c39b99fed83503595de3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fea6b512cd062e7513f128768c95a687"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7e2401d5725537dfc67d0024b8c9ce27"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "2a90c4279efb9607142cd3aeafa9b897"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "1143e3c62d536a52bd28824bb6c45c89"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d6172708b35a05f40b3e572e0b311bd7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b0ec17312f48fc396e0ba930c64e16a7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "4d6d130257ebdb95f75b563c1918b19e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3c15f222b431a4ca2d5f2d7dc113077b"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "7eefd675990bb0a90eb4428aa8ee6547"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "053734fc6b3f9ff34bb37cde51739274"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "a7aa034babe714e4de56adbcf3f4ab3e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "3c7d43de853ff86c6546fdbbcd3d61f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5fe458b22601532c991ad354bc4011c"
  },
  {
    "url": "tools/docsify.html",
    "revision": "de807901c47e611bd5da50181f0f9489"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "a202964248254054a110e787c42730b1"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "82ecc3d075142f544e013aa297a5f89c"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "204f3aa1fb4cf3288347a30bc0aa6c59"
  },
  {
    "url": "tools/git/index.html",
    "revision": "58fd6cc5786059a0b5c159c87e2faec9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9ae1d82b6df2b38a3c82df37e4cc8eea"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "cdbf0f7c1cb0ada62fc4a83754fbe38f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c60d4b8f2283b6d13104fe36e6184f80"
  },
  {
    "url": "tools/note/index.html",
    "revision": "ab1ffb7efd1b8bf3cbddc8bbd031153d"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "38a8a9590855d73b8ef48e78479b0bb8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1fbeb6966f50b91284dec2ff4f944041"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "47998cc12588ceedb4553a0705aacae0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "09d7a30053682fb4ee5ee14eac7a92d4"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "a45cd434601ece3c9ba268b7319690b2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2086540718b46d6696a3367ece6956d7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "45419735b0a367e4af7a4d8bf3d41f60"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "e9557d82eb082450775b252a6698ccee"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e494015cbe4c1140ff4245b937a11dfb"
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
