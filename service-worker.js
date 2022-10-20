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
    "revision": "ba0973d7c200c6bdce79cbce86a1ec5a"
  },
  {
    "url": "about/app/index.html",
    "revision": "443a88d5d9bfdec26fc8258acc11fcde"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "9dd2bd7506599e6d651b1237ad7abe53"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "885f7c181987196fbb1d619ea16e0c40"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "679c9b3f585bcb08b16895c4dd5a1d57"
  },
  {
    "url": "about/index/index.html",
    "revision": "99e7a5351fabd27802637acc40a911fb"
  },
  {
    "url": "ai/index.html",
    "revision": "379913a634a7190ae1df070dcbd87be6"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "ece642eee6ba36cf5ee6f282a0a25782"
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
    "url": "assets/js/11.7fbe51c8.js",
    "revision": "b2e90d573d0ec55041a47fed2c5c4fc7"
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
    "url": "assets/js/121.71a1c661.js",
    "revision": "92f75965f82f25d5bd8ae9c0a18fb152"
  },
  {
    "url": "assets/js/122.a783afbd.js",
    "revision": "8c41204f7fa732443c7dae170a5c518c"
  },
  {
    "url": "assets/js/123.355e41a8.js",
    "revision": "6e7c97ee56388c15b9a9371832dbe467"
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
    "url": "assets/js/129.def25e4a.js",
    "revision": "e390f0d50f33b8f9f22f7f85919601af"
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
    "url": "assets/js/169.7503fc1c.js",
    "revision": "7914fd26294e7b81371da76d042d575f"
  },
  {
    "url": "assets/js/17.52ae4edd.js",
    "revision": "6dd6eb943cc0c849ce36f4a585b7e366"
  },
  {
    "url": "assets/js/170.0e6fbc5c.js",
    "revision": "daf64d5b2bf03757e18f5d934dde417c"
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
    "url": "assets/js/190.d2475240.js",
    "revision": "60a5755970430eab467d4535dcd16cfc"
  },
  {
    "url": "assets/js/191.cb5f67ed.js",
    "revision": "743c418bd9abc5d3f6999e36e0c20d9e"
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
    "url": "assets/js/211.3503716e.js",
    "revision": "a4b48f269ed9a0fc3361bb2af3f9f735"
  },
  {
    "url": "assets/js/212.e6c28944.js",
    "revision": "9eb6e3fd5b1c21de2daba262cacf18fc"
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
    "url": "assets/js/225.bf8d2514.js",
    "revision": "3545e6842cf5e5602655c44745c9e838"
  },
  {
    "url": "assets/js/226.b18be134.js",
    "revision": "b94daafd0ee9cf2f4853740fefeb291c"
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
    "url": "assets/js/229.ab99a38d.js",
    "revision": "b97b5f1634bbc3cd85a8c645190dd7ee"
  },
  {
    "url": "assets/js/23.c0389be0.js",
    "revision": "2e70fd7dc508315c05c263b94fc017a8"
  },
  {
    "url": "assets/js/230.593294df.js",
    "revision": "c3d08cd032d9d3ba73530ee5de03988e"
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
    "url": "assets/js/233.df7aa453.js",
    "revision": "15c334204087fd2f3c6fcfa2336b6ad8"
  },
  {
    "url": "assets/js/234.65d78dd8.js",
    "revision": "1a3797f75accbe2696349d1901e3ead2"
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
    "url": "assets/js/247.6a25011a.js",
    "revision": "2756cb5e1bf7f665283c2348a2f55f78"
  },
  {
    "url": "assets/js/248.6632e7f0.js",
    "revision": "a0a09f32fc27df650797e4918324595e"
  },
  {
    "url": "assets/js/249.d5f24548.js",
    "revision": "4025c17048bf6ccfbd46c042fb62329f"
  },
  {
    "url": "assets/js/25.a330b5aa.js",
    "revision": "046bd591cefeb9ee2c972de4309995db"
  },
  {
    "url": "assets/js/250.73ac83cd.js",
    "revision": "044e4a0680bcbea1568cecdd463afc46"
  },
  {
    "url": "assets/js/251.5d667034.js",
    "revision": "d2bb9542e02577acb919476f9c88e042"
  },
  {
    "url": "assets/js/252.d09e9065.js",
    "revision": "67063562b398a05df47e8df51f1f98b0"
  },
  {
    "url": "assets/js/253.16fd60f3.js",
    "revision": "76a9f531c3a19d815460016850b181aa"
  },
  {
    "url": "assets/js/254.2be13d93.js",
    "revision": "6569ab74b2f2bb42474f9a505938f807"
  },
  {
    "url": "assets/js/255.bba89bcb.js",
    "revision": "c5308e7b0ebad3829dfd1d3185358f22"
  },
  {
    "url": "assets/js/256.56646720.js",
    "revision": "7f2eb9c5189bad23168f76a87c0e66e0"
  },
  {
    "url": "assets/js/257.8f8047df.js",
    "revision": "5f9ab14f0a6851da9ee933bf36803b05"
  },
  {
    "url": "assets/js/258.52370246.js",
    "revision": "51224c67a2b0db3f7c7da7de606ce269"
  },
  {
    "url": "assets/js/259.0b9ae527.js",
    "revision": "5cbd7494c238ca29a3e35d9650e95731"
  },
  {
    "url": "assets/js/26.5ed9774c.js",
    "revision": "dd81b4279aa7ac38fdf3d4e4e607a148"
  },
  {
    "url": "assets/js/260.5b4223a5.js",
    "revision": "bd4391b2bfe92c0e137788f192518ca3"
  },
  {
    "url": "assets/js/261.2a98a524.js",
    "revision": "8d8ac68b4e71bde51a8b75514b982215"
  },
  {
    "url": "assets/js/262.b44493fd.js",
    "revision": "8336b98242ca980b3058743426828db0"
  },
  {
    "url": "assets/js/263.e5489ec6.js",
    "revision": "c7e9dbe1a3d5b570178cc8535952e680"
  },
  {
    "url": "assets/js/264.57c1f9a5.js",
    "revision": "f6516e039f8ec4b6219267c8b68f53ec"
  },
  {
    "url": "assets/js/265.65187212.js",
    "revision": "6fe45bdb77f7ed1383603adaa342ba4f"
  },
  {
    "url": "assets/js/266.7ef2e675.js",
    "revision": "844f18eed448d5b8d4ff680bfd7a4131"
  },
  {
    "url": "assets/js/267.234e0157.js",
    "revision": "e12ebf0f75aa4ac6d2645f0256bcb30a"
  },
  {
    "url": "assets/js/268.54a709f5.js",
    "revision": "27b494ec022ccc497e14430c14620d36"
  },
  {
    "url": "assets/js/269.2ee5d4bb.js",
    "revision": "2fd693012cfbad35d1315b014aadf030"
  },
  {
    "url": "assets/js/27.14affd52.js",
    "revision": "ea86e0bc1b5b590c92f24541b9dbe72f"
  },
  {
    "url": "assets/js/270.17b9f9f5.js",
    "revision": "96eda4510a99d27dd2a3b7a220218085"
  },
  {
    "url": "assets/js/271.6b7d98a0.js",
    "revision": "34c6b557507b0057e44a417d0e64cd34"
  },
  {
    "url": "assets/js/272.5394722c.js",
    "revision": "8b95ef40abf32a60360a0a3203be22ba"
  },
  {
    "url": "assets/js/273.005309ca.js",
    "revision": "6cf62d9a7920957e9791a527ede7540d"
  },
  {
    "url": "assets/js/274.63b92f76.js",
    "revision": "8e6b7afa4aa1f237ee5065756d4d1172"
  },
  {
    "url": "assets/js/275.2dcfe79e.js",
    "revision": "de4b52d41deeaca9dd4859ac2c36340b"
  },
  {
    "url": "assets/js/276.d7a82cc3.js",
    "revision": "61aee8b31a51af2729003e5dcb09ffc8"
  },
  {
    "url": "assets/js/277.cd7e1192.js",
    "revision": "68fd56d39f590c4aa7ce091a21bc662c"
  },
  {
    "url": "assets/js/278.1e05a1f5.js",
    "revision": "543f1b574accb9c60d1f816276259797"
  },
  {
    "url": "assets/js/279.aff23afb.js",
    "revision": "f09da2d2cfe565d05f5e2022e63cb1f3"
  },
  {
    "url": "assets/js/28.aeb6a4c7.js",
    "revision": "1e95e511200b19002bb638583cd17adc"
  },
  {
    "url": "assets/js/280.ecd80187.js",
    "revision": "7b051cb80f973d7f87d65b7d53b68bc9"
  },
  {
    "url": "assets/js/281.ff0d4166.js",
    "revision": "26330882ca310e730a66ca2a490960a5"
  },
  {
    "url": "assets/js/282.d7b6f064.js",
    "revision": "d84af1ac81ab77f3e287cef855107227"
  },
  {
    "url": "assets/js/283.6e0d63f8.js",
    "revision": "8b961201d52f9354c1947edefb4fc362"
  },
  {
    "url": "assets/js/284.c6a975aa.js",
    "revision": "5b3f38c88ec6a42d683a1779f6356ce7"
  },
  {
    "url": "assets/js/285.13337a2b.js",
    "revision": "ed2c213ed96a7cf6a00aa5ebeaac4635"
  },
  {
    "url": "assets/js/286.ff1469d1.js",
    "revision": "52f5f8ec0d11c548665efc4416d70096"
  },
  {
    "url": "assets/js/287.608ec421.js",
    "revision": "2717e627317a9f925c93c1c60152aa91"
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
    "url": "assets/js/app.5a36a210.js",
    "revision": "f18e008f0eefd79370c4e12d79426b30"
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
    "revision": "40d437f509de84c0e3b89b51c8e3c45b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "64d98590d012e74cd49e8969796c6e0b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "07257893fbac7e4fa0c66d88c48da53a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "83879c190ec8c7bdb96e021ff27cbcf6"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f96631b467aa262c6dba6458fcd460a2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6ba8d14856dc661ff5e4ca5f7fcdadbc"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "36aadd7026a2c93067b9022262496c5c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a411fb41d68175b505279e6755096c0e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "117beb3d6ba317798a686d2db860fe5f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "be9b3cb935abc7190cc5acc7eab3855d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "60eb91b4edc576a05f44dcfe4eed0726"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "4a9eb22746547d87ffdd71c2e5bf1746"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "957b9902cbae8ccebd4c59802466b65b"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "878ade0f28afc5a6e3242fc6b3c72976"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "54919a1abf07a48f65f6dd1f9dec53ab"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "94a670967b98306e39b533c8cad3e2aa"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "b8a51c347747005675cd40dfbd2f2bb0"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "41cc02651819208ac7932532a214ef96"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "9ab8a98c682ed0f529ac241a86b5ba60"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "b44259c2c5de498f17922b0524765cd5"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "98bde77d2911eee2377f0cac3e63ab6c"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "33043e30f293d054b3418161cc837854"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "b662d0d5f10f59cc3bae125b29425699"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "8d051f050bb6ef2de3d25a0b2b793226"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "535cd747c291bf34a91050a014f0c198"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "894fb39567ca61c6f8df9f7ad4208d2c"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "fb5dfc39cee29bbacaee30024b87d49c"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "5306d7df9be7e3eb3bcaabb2f39f797c"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "71a3d97214e0b6ad708aae25763ded7d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "be39e03f2079346d9a96b05af6f9fcc3"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "325eab52691932bf43fab47c4570c535"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "0aa3c20ecbb2a45fc32f3b58dda496d5"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "94dea766e637d7cbf748a2768bd34819"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ff45d5662f2ea03f0dad1f683e1ccb45"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "3111bdb3614a0da5030e8357691d92cc"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "fcc450049a5f7273eb05c2c2dbf8f02c"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "5d7cbb23b2e1ff5f03c5a489aaa11174"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "bdbe2e3fbb7a3da7e06acb361b44cdeb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "23a3f16cf32206526636528460beace1"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2e86e351b7fb6eb011174d3eaf52f0e5"
  },
  {
    "url": "book/index.html",
    "revision": "83e2c4418b62b6c9881bbcafaafd895f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ff84b814e6666757294d99f3ba943eda"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "6e38c33e85c72f4b0ca9d75e1c061b4f"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "e2aa7b98448a0341fa59644c23b519d9"
  },
  {
    "url": "c/audio/index.html",
    "revision": "aa046290ad8f85ca0fbb10fe5ba994c9"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "1b43c388687e8125d051a68fb8e6439d"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "5bd5b94330ae3f1f80edfe72d3c8199c"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "2eb1530b8607c8da4bedd80ce9b333a2"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "96fe850618df52b7d05dd73625982eb9"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ca7734bd310bde60f604a15a93da61d1"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "fd039426e8ee038a47eb3c55cfd2a938"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "11121f9dcee5ba632c8d03529fcdd3b7"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "b521aae4a1be45485a6cdcbc725625bc"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "c53c400e1f02cdddd7cab4bbc6801021"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "fdb09416506ddb953aefccf9b935e70e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "aaed1a1aa315c0d925bd729c9a89dd77"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "d92b91942c102b082e13b0ba19189ec8"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "239ece487d4f04ca5a17481a45cc1cbe"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "edeeac28fd6e373e7ca15af5c050b3ae"
  },
  {
    "url": "c/program/index.html",
    "revision": "12ab2d1d5cfd0cfdd9b4233cd9e1b827"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "0ce340ac5fef5bb628d62fa86346fd79"
  },
  {
    "url": "categories/index.html",
    "revision": "988b4300f9910704e57718c651fdb7fb"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "7f87c87a651ec82a9537be064e23f2a2"
  },
  {
    "url": "figma/index.html",
    "revision": "5241a619104907f7ee68ece2991a0250"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "017d4e89339b74311ec118b49d12c045"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "68d502b7b9c60e30355fbebe6683a0ee"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "f454404b3642b5a3efa5912c557836d9"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "e64c5ced868b2572fea969caa19a23a2"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "16557f41541c493dc143a8cf54e15648"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "b9ef606c6838ad3a6423f0e3f94011b6"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "b7c817a822abccf32cdbfd9f50dcd23a"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "f21656deb3ee20331a0fac969ea4ad6a"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "c4da4cd187a33a0e3d9e053c191b9320"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "37be628d5a0895c1d07948a0d920fb7b"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "b5ca5c61b0160997669be28d78558740"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "08492178e2395172bc7e945329137186"
  },
  {
    "url": "flutter/index.html",
    "revision": "08ea95e5b3f150c71e12acfb1e870f23"
  },
  {
    "url": "flutter/point.html",
    "revision": "2417d9ef2d9a067bfc078b82aaa726e3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ad7f8042edb73a6f0142b6827d2ae417"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3fc1c6dc1d4a00647e13c71f40afe45a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "ae8d2517620bac90ef5790e64bb6fef6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8153d1d2cfcc6728eb566d0b7edf0583"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "ef08e1e881d423c33d72e3dd3f4b4985"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "3332e2da9e005eb7f13d77db9778110f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "00f71a196faccd7129ed983f917d8fce"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "8dd9a358a5407375dbe90d64c84f399d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "14d36b97e818465be6cb05d6f3f60633"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "23e69610338c61343659869c9d6c190c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "854ab703d6866ba56002c854fd1545b9"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "77cff943ca353b3a548dbb29afd55b49"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "6ff7ab25e316a34b1cfe672fec170d25"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0ef9aea65b1accc74a812993647491f9"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d0eeab5f86df4b827a3f84401a028ec9"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "6cc835425ef538f6d83400f46ba6bfe2"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "7697bed06bb07a71ba25948c97248fe1"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "b26c448e3743a1fa156f9e1c0ba129c2"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "cfb453c14cae2b03ac6903d7f3dd6024"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "0e2235eb34ebb9a3b1ff0908b1ca75a3"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "5200e027438913638155cff9fedf0894"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "4d25410ede5ecde1321c92cfb89e19cb"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "9eb07dfb318a04710321d32a1b1f1261"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3bd765a7c6016d19218bda04de43734e"
  },
  {
    "url": "haskell/index.html",
    "revision": "005293a9fb0cf7e63611f24b559914ea"
  },
  {
    "url": "index.html",
    "revision": "bc2bffc6f463925bf0372ba02a4c6932"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d6f90a207efbab612d29211925039df6"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "d1ea540aff475baeb7e32f7ca0a57176"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "78f5d91ab29d8cd1635d479654b05ada"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "a698d2d1a87ac2f19867116922781a91"
  },
  {
    "url": "python/index.html",
    "revision": "5ee28a89a8d6968f1460df392aaa47ff"
  },
  {
    "url": "python/python-ase.html",
    "revision": "a0334a5704140e324c2f42615d7cc7fb"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "468d4019103b46964370d7a4a652ef3d"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "6d8e119b88cd2974b298641e0b529717"
  },
  {
    "url": "python/python-file.html",
    "revision": "962c48bd4e999cb7f561cd679c899da8"
  },
  {
    "url": "python/python-function.html",
    "revision": "76ddad4bdf321c2498b12d54d1678f40"
  },
  {
    "url": "python/python-generator.html",
    "revision": "4fc906d73ce398d1c22b23eba2cacfc4"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "eb33f627d66e7d445335fb08864bda15"
  },
  {
    "url": "python/python-module.html",
    "revision": "3757dabe5cbd06f8bc5ad8e6115926c6"
  },
  {
    "url": "python/python-string.html",
    "revision": "bdbf16f05eb67ddc19634d56124c6f24"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "8eb009f118e9d028163346acc73dffc0"
  },
  {
    "url": "read/index.html",
    "revision": "04eaca6411a798e6aa6f755cb8b8bb8e"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c1a01f4d1c28c187300537391a72d929"
  },
  {
    "url": "swift/better/available.html",
    "revision": "9400b3e92be2ab328dc6debb9657a83f"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e56010f9ab629f659f0b8fbc73bd17b1"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "c72de4a57bc3327401e029c17db7473d"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "04fdacbba48d8a88658e2bc5d50f1a1c"
  },
  {
    "url": "swift/better/di.html",
    "revision": "99fd1d022502b0df097305384d3bd52c"
  },
  {
    "url": "swift/better/index.html",
    "revision": "fc80587ddfe1a4a35dcd2812a2982eab"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ab05063cb528e89472e5a1c3dbd985ac"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "139974d6a9f38e8b834c465ccf74f8d3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "654b227ec9d381432b4dc288e3d95d10"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "1e51efdd0e207e84fcd398902b7d0751"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "c0d4667f5bb1555791e06c465b495948"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "3bfb5b2a32f1b076c6475174b1f125f9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "799c0733a7ff7016e865ced26e0e643f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "08514289bc724fa25bd465e52b7258f0"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2af4f7ab347979a56ff0b6ef4ae5dc4d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "5183f332eeff7fde434e5958e79b1fbf"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "37e8d46385d8130f89f64b07d07ddc58"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "6fe8c9b83196d0c2efac964fa20953e8"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "76ae412597a0cbda8ed1fc46ccb90ead"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "c2ee672b1c12d68199bc539c357688b9"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "b17ddd736b1667bfb03b354bdb40b82e"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "71b3aab788a08201cfdba608930f70a8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "57024096a43bbb797927e8b689ae931b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "87d28e037e545702ba8fb8bf5a46379a"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "9f6549df1930cd9afa0c727c70cbec64"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "6f6bdea5c8c91bbe6ed4672d1ae16d51"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "56294ab37234c6ae608a353c3980214c"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "437c54ca838e621b8ca1ef9144499a08"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "8f56e54948b11f0463a76cf3838a9e7e"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "4214410eff465aea08303e6acffe3291"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "be61bd4e32be22ae25bea094b7120032"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "98ff26e40fd5cc8fb6918aea7d5a6679"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "055ed668207ab24ab672e9d3952ab68d"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "6284c127745cb64e5167876bba44527d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "843aa4cac6d5eda833405bad6bf99db8"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "99d63b031e30b5129a98911d76a11909"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "6d75a304903f9a210d5c06fbba6e76c6"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "501664d81a84dbb951153067712ee319"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "01999a0f8fd23e8407d55e60fa8f3272"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e0da06fa97597ccaa435e21ae990eaba"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "e64c87d3eb27e83336b98b11bd4e7128"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "3d5ef589c1f211bc8f3170357bdd8040"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "4bf374967d739332c48a92ece533e86d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "bc8f791d96aa40b5b72cccf0850fceee"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "1748dbf4b2ab4fb0b99fb26e0a2f63b9"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "9fbb73b2311cfde31ae326956927239b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "59915370941eee150a1b807c224f01ec"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4b6174bd3ee7550fbc033aab9b670703"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "5675dd663069557406f1efb05dfbad62"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "666b8faa9998e757685dca14c7053fd8"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f18dcb19640350e1d4e1c98c23d8b21b"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "1be089306f684608b7c5b69da55a16ab"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "24d0325b18c6224c190a0d4184cc5c57"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "9416d9e1a74c2da35c34e688950b4074"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "42dbc37cba07ac023f73d0aafe441cc8"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2554333776151b933895315781c24d07"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "652514fc3b1bc2968a031b8407b3ec53"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "5a5043b93d7321e4208e3cc739c72367"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0f6238dbe8a8735a4fa6560068b080ba"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "996a8a692cb6dd13b8cb1fd473d12622"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "d730edb8d0d52ababff44b70d5eab24b"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "9cfeca3873fd8d66de9d267dce98223f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "3296b8bb5339c841c8c23564a34722cb"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "140e6668919f39a5168546265f302e14"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "4ca0a09aaea200b29fdc423f9adc27bf"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "57d3fec2363cd237cd582d06f01425be"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "45003e8bc9db97625b6de5d5f7639c4d"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "4901fff3bfc61ebfd9dd0b6eddc34a03"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0ad81ec447ccd97098baa01a27c4b6ce"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "9313653cfcfbdb7bf456b9a51adee31a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "650294a41288dd0083beaef6b20f95f2"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "0d9a851ae47e2823a7a9122b14e086ed"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "8be362720eacaa5927a848436281127f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "a680e32da5c5c2380f8f9efda7fba1e1"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2619d1546e2b846eb3da0a341f8dc0d6"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ecbeb53fc663e5c0e004ddd854f8d676"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "fef392df919e234f52cecb634afab6a1"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "fb24cdd523c47d7e91db8bee63bc50cd"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "8fa4447f79f0e5a51ca35572f1cfbe38"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e7679b77d6d29a7a779ba539b3a3cb73"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9f97afc1fee02bad1b0560d8a5360d59"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3615fd06ede406bc11704510e6c61b53"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "592344b84cd1e8b7e65b02f520f34e73"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "669b60a2c2c033da8458942f82f23fa6"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c9d85232c60407e4808272dc7266c83e"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b3b07794c3b45203d151a092aeb69754"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "008911a4595780701e982757952a5e21"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "bbcc92f7e9cc412b90ffc4c2ab92d5c1"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "8eb37082f09756ba3eca738da8b4ff6a"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "754fa892b16940b3b87d00f4ad6c3070"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "38f25c19de38a8a87d57798d3ea922a5"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a80c24639317160e40faf2b6498830c0"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "5f34393c2763e3fd8010a7ed1ee49447"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "88c85fdb69a89a0b30ac573baf2af55e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "cec9df665086067b6c77bca73d619db4"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "b74a438f29012d388223943aa804df66"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "01bf231aa86cbcff88dba9a28b2bba90"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "428f5ffc86936d006d1d79cb85e645d8"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "92e937a5d85ff69138ebf62a322c86b8"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "13c4391ef4aea9b67fd2d0561ce2800d"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7e9bc39d1a427a5536baaa562c66d259"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7adc4a07cbf1d06663ee29092be28dbf"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "d69e7bfc62ebdbeb1f6ac8ef8394db99"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "93e1d8df073e8b82f2a3b95b819388ec"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "6ccbdbc7df6d9f24535a32ae0373215b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "70830c76d4023c9c607a4719db587aac"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "98852d0b0795462ccaf5bb45483e07a2"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "852683d03846ac52221a7b280bbb0045"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "0476eaf8a23a79ce1e9afce7834dd361"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "3696f0919d01949a193d74e781f3662e"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c59949aab75ea2a129919c080f324d75"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "a1a1e633355315f025224a930470fbcc"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "b2c5335d5967adf4d11aea248ae1f95b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3d35c753673eb4ab98390c7a4eaf722d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "32652739b163a08a205c191cf6681079"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c618bb58c46ab5c31e449ede2cc283fa"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b36160133a9ec90bd60a5c2faa9896e8"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "32085151e35e814ae6b6635301f61db6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7ab1cf41d57ce63864063ef45ebe656a"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "250f01e61dee6eb1a6836de7846e6ccf"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "52af3fb58b0a4af84bee669daf4e7aa5"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "38bc0da2b11a6614aa646e54e757b9ea"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "50174620a8f2239c717bb6c07a7e640e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "3c258531e5e5746a0fe385c0e0f478b6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a0bb7df5b575d4c717ed6d6a894d941e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "dfc4ace47caa26ab1142073b96922613"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1775c8b81c1d6dad2562776086fb8d6a"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1a2cc34db4c3540296f0f3ff0e2f7237"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "caec723d8dbc7e73814074bf882e0ea0"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "0a6e2f03185f6a7a24eaeaff017a74b0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "73f01d2c70430bbfb2b1d3f4534e010a"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "06761e9de09e8e7c3f7f9076b216de65"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "8fe423c0f073f586190eecaa5e6ba77e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "f3063c0c24939d2f7e81110065edfd29"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "be5f2ea0e721217ce1e229477948d402"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e452e41699ed810facfe932742752f4b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "2c82f257451ca923ef27c167c3ce930d"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "f58cf7a9e8d92f72876f87c76baa5caa"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "d68f1e799a1213be1937b3011984717e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d3415c918426265081f6f0c1a7474c5b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "a61eda41d22378b66f9ffb61dd696d2c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "0790d16bfe09c2ba1d4a0052c876ecbd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "50845cd7537b6318e1198f037ba586f3"
  },
  {
    "url": "tag/index.html",
    "revision": "389be6e4c5b395d8af9d0828672ccdca"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "80bf3d12fd321b83600e52767a01f863"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "998ca23ac89dc2afdd1ca3b0c4bd8022"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "81e6835b8835b6e6286b455fbfc2e0c7"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "fd848848ce7b6724cb7828223e748725"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9e5c9a07808734ef113f5aadfc7ed264"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "812411d23a6b8350b85ed101c57a0b1a"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "22a65fa218cc805a9935d344c7a53b5f"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "19c9013dd6671e2931a9d97dfb8cfc4f"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "342bb5272e091309ce32ace6868f65f4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "59ad3905842aa3eff0d82162f5b2d209"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c0e628ee82b66e17fb30979c640cc4fa"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3fcf9702ac79017b901a738b9d06efab"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "297be719ce751838d189063bc9faedfa"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7b771666fc65768610260b2a526ed6d5"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "c2bcc0bb859e1789b9ddc338508a6b73"
  },
  {
    "url": "tag/read/index.html",
    "revision": "a540b56c0b2563b4dfb1b3e75e4fdb69"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "d92a0908c2cca04c6039f350209a07b5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e234096a57c9ec03ba10d51c76f3a8e5"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1da1df1d57a7a7ac5acff557a6aed54b"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "4dcfdb27fd635af86d9ff66c7943442f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d36704f757f3ccbe270af3814e7a759b"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "30f019d4ed4d611b51b39791e03f241f"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "ccf1fde190344b4592a9834812c9ca22"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "e63f8b90e1aa0a6f91618280ec57f0a3"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "5e622feb3a4165cff60a583bf255887f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d56923c64b87cc2ea8e522a0e0e366bf"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b1f3c6d0b26ab688334422666587916d"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ed3a447629be9d769f1a207a03f7d399"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "81da1806fc08d81fc0209f6003ca6649"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "bf1252d73ceff1bc8436f0b5ff4de2af"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "45d680e802915cff5b994bc50ba6094c"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "9cbac6961b90a2116938a1cf677c3e6a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "55ce721e37d24c774d3e5887acd3e108"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "80b1b240bd5d1cb78d3ab9f3a1e77fae"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "3a91968dbe6795b26dbfb7b18f4b5865"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "2b5c040525f1f546181590359d5142bd"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "590acc956f3fe6b8faa9c3d03713ef11"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e58cb554f4f7ac29ff54283fdee6b4fb"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3644e7e0204d08abcb1bd626737643cc"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "f8792efaf38a03dbf40071c9e107debe"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "cb65da2f909db72c8bd0e62f3d5abdf1"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8bc82a14e1b933590f881f7451e48498"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "162e666edeb7dddbb556668316a26863"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "42d063a64bddf8ce9f6cb1566a4e2f1b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "671cad808a8e701d6859b42f15e63f31"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "97e6ff1770f8a1ff8f6b5078cd4fd405"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "91c8ae710a01db7fe389af41578628a0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f4589f3835dcbb128b092db54d0e1f04"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "929899cc8f49862bea6c2a33378552db"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "ba317f56c48a2cf16e2a40569c606f5d"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b384bde7641305b1e0e2b3cad9ffcb98"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2444be27836812bd2e6307c282a3ffbc"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "4508febf1cdefb7598f953d1d1d161ba"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "82b13457345621d51e89967f371f6e20"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d3cc9c6256fc48b32f6bc8ae41b54e2f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "3de8e349fcef935fa98b2dd79ce89f54"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "169aa617bf9a69bf3948ca3a44d48b40"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d812d6cd2319ddd5f9127c54712bbd5f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c0c217f443d4e4c337b81cd3b7b66749"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "5c28374527aec68b2f4816e6e96dbf81"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f2f8a2a625ef8d38bcb1fed51921c862"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4f8ff2331ecf0f031aebdb89dfec916d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "81ffbbb2bc1d1407275098078a12cf46"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e83feb7f4f29d37252888b3c39d08b4c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e17a85ce8119655a27052d6dee379c71"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "2e94a8bd579c254c0a4212dc9a7c6304"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "df346e53585b1ef6987da8c0cf617bfe"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "b5df601facd597184f3fe081c1eec504"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1ec3bfc906e350221ef94b60e0832648"
  },
  {
    "url": "timeline/index.html",
    "revision": "cbc12741b104b0b06de58896bfc283d3"
  },
  {
    "url": "tools/docsify.html",
    "revision": "2f42a0c760e1cdf1174190a387930625"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "0c7c3e5a410bb09927d0620ceda84af3"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "98441ced5ebe061d3c0ff663263905fa"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "15b59fdb0d4c8ba98737d037600d9e41"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c1b5d4420ddb2e0079a3be0e6f214842"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7aca7861916985a29b52b42063915db4"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "05be70646a4b164c7f845292b0d74749"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c2a1a9b7f7076d2addff5e3d9362c938"
  },
  {
    "url": "tools/note/index.html",
    "revision": "2effad978b6d7a589701bf7d21bb4016"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "0714b41e1a23a1ed3cc325ff55457cbc"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a8adbd667fe5eb764c0fb3beefc23b07"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "1997d8c242d501cf266be0ca5d86d2ae"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "481f7f2473099f961c1de7c108eddb19"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "7e2d15478ec1388a1d5c90ae14653355"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d3d92cfbfc81e951a58c426803616cc5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b73cab269162a37683be315c6e3f8709"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "6dd6f9298d5692a49e9ae96c225d9c7f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8aff86637c80253f3810ab25ab6a82f0"
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
