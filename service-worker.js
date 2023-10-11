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
    "revision": "ad31020178982a9663ee436cf109073d"
  },
  {
    "url": "about/app/index.html",
    "revision": "b302b032bc23a4c03f970a4f6783397f"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6e7dadb40fd8b22344f6635bc41e5bcd"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "00613cb236b4e7571f6e5551fac23f04"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "d8d1eaedc63a2601e98792f427440874"
  },
  {
    "url": "about/index/index.html",
    "revision": "2e2fd930309c326dfbc6467a79235f96"
  },
  {
    "url": "ai/index.html",
    "revision": "af46dbe610117cd3e5e0f196f1a4b0c7"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f79991027e6196bc423b3bd62d9d0339"
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
    "url": "assets/js/11.2fc10662.js",
    "revision": "c13682ae075f9bba421c9edc3dc8312a"
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
    "url": "assets/js/121.e5f7316e.js",
    "revision": "9606e9b36a1e40cd9c4cbab88a4b5064"
  },
  {
    "url": "assets/js/122.55097478.js",
    "revision": "a4216aeb64f0bad5c9a70e8f84b30c36"
  },
  {
    "url": "assets/js/123.6c9e7a83.js",
    "revision": "980809244bb5fb234555881bda956a9a"
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
    "url": "assets/js/127.382e13c7.js",
    "revision": "dd3ea7a1ff40a557dfb25590b905c479"
  },
  {
    "url": "assets/js/128.c61eb147.js",
    "revision": "248f1b2d77806db371f28c3b364bb990"
  },
  {
    "url": "assets/js/129.ed88c9c9.js",
    "revision": "15f11ab49aae7ab3e2fd319faeb6866c"
  },
  {
    "url": "assets/js/13.0a952e9d.js",
    "revision": "4a62b3c227de0aaadab69cd597f31daa"
  },
  {
    "url": "assets/js/130.5830d265.js",
    "revision": "cfae17d7ab13e5bdef9887b45953e8ee"
  },
  {
    "url": "assets/js/131.97b3e284.js",
    "revision": "058e39eb78fbbfb6c1256373c02c2772"
  },
  {
    "url": "assets/js/132.6e86d9fe.js",
    "revision": "bca0549a027ccf9b34a3023ca2c977f5"
  },
  {
    "url": "assets/js/133.701f0e75.js",
    "revision": "ba17f11fa306f8b8bcca808b02f6bd10"
  },
  {
    "url": "assets/js/134.cce6bfd2.js",
    "revision": "c8673353060b0346eeb450ed8571913f"
  },
  {
    "url": "assets/js/135.90b757a6.js",
    "revision": "58683e268e7ba40b7c3cc2374777627d"
  },
  {
    "url": "assets/js/136.99949dd0.js",
    "revision": "ac7c468978cbc27538583fd1672253d8"
  },
  {
    "url": "assets/js/137.fd9d8e35.js",
    "revision": "7421c3e018e144a779bd4028b1d29825"
  },
  {
    "url": "assets/js/138.923cfa23.js",
    "revision": "bba2b96544ad5034a071a84768d65a1a"
  },
  {
    "url": "assets/js/139.18dd314f.js",
    "revision": "c514559e04bbeaf701b960efb1fa59c2"
  },
  {
    "url": "assets/js/14.aa3fb27c.js",
    "revision": "0e8f7312893d0a56a3b113fe3cf572bc"
  },
  {
    "url": "assets/js/140.12d7b738.js",
    "revision": "bef3d17d568a522673f6d0cd423977cc"
  },
  {
    "url": "assets/js/141.44e85aab.js",
    "revision": "be4dd7a7e2e38e7a1a83094573bec79e"
  },
  {
    "url": "assets/js/142.d24c6a88.js",
    "revision": "6a598d24e8bde90a01125e70a9e85544"
  },
  {
    "url": "assets/js/143.66c9e412.js",
    "revision": "eea884ac816eca6f2ea416c1f270ce83"
  },
  {
    "url": "assets/js/144.8f89af53.js",
    "revision": "25512a3e193198dadb3851b6caab93b8"
  },
  {
    "url": "assets/js/145.9d047ca3.js",
    "revision": "1d28ca3bd7f5c1a00894d609dc70dcdb"
  },
  {
    "url": "assets/js/146.dc57f961.js",
    "revision": "7d6a21e2f90c91f684b12a0a400ca843"
  },
  {
    "url": "assets/js/147.2158451c.js",
    "revision": "9aadaee46bf5f486bd280766c6325867"
  },
  {
    "url": "assets/js/148.c0c05b30.js",
    "revision": "2fd15648baf0e4225263448df0ecc980"
  },
  {
    "url": "assets/js/149.540b40da.js",
    "revision": "777b3436eb3186e51c7f351602576b00"
  },
  {
    "url": "assets/js/15.a342b896.js",
    "revision": "0c21c202032c50db0573373398f0e5e2"
  },
  {
    "url": "assets/js/150.73f2d93a.js",
    "revision": "26c710cba47384940e6d919e1ec13283"
  },
  {
    "url": "assets/js/151.163f47e2.js",
    "revision": "3555fb44e86a7443a67fd286fc8b96f3"
  },
  {
    "url": "assets/js/152.39c37dbe.js",
    "revision": "d7d62975f11b76e90a1859148d530e1e"
  },
  {
    "url": "assets/js/153.8550d9c3.js",
    "revision": "a2a6aa55e8a69ec429fb3f40b430f5ca"
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
    "url": "assets/js/166.fd4960ec.js",
    "revision": "7bdb639d3b40c33b7dd84dcda67755e1"
  },
  {
    "url": "assets/js/167.ca138bac.js",
    "revision": "d6ab645c00eb50fc614cae7afecf0ca1"
  },
  {
    "url": "assets/js/168.fb4b7c08.js",
    "revision": "749e9de7c1375ced30a95b1126691eb1"
  },
  {
    "url": "assets/js/169.d186ae8e.js",
    "revision": "c95a3ab15a5b38d1889ca0516eb523fa"
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
    "url": "assets/js/200.0ad46196.js",
    "revision": "5dfa20c5307c50bc5d9b207a6d47bb22"
  },
  {
    "url": "assets/js/201.8e614e45.js",
    "revision": "1a77b5df89b46bb0c37cdc243db8d264"
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
    "url": "assets/js/221.3c702f60.js",
    "revision": "89bc1de526a8c299b9781e831eeb0403"
  },
  {
    "url": "assets/js/222.c7d40966.js",
    "revision": "d8af574f0ab97aaa40715f5aa85680ca"
  },
  {
    "url": "assets/js/223.b866896a.js",
    "revision": "e2ce8568d6451c10279d4c16ce871487"
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
    "url": "assets/js/228.bc8bbce5.js",
    "revision": "e9e3a0bd4a23db17e8ba0e2ec431ae35"
  },
  {
    "url": "assets/js/229.000afe79.js",
    "revision": "691690e63a8946400043fea97c950f54"
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
    "url": "assets/js/252.1776e5c9.js",
    "revision": "c110702e49f22e66fd481e0153965c1f"
  },
  {
    "url": "assets/js/253.ca90aea8.js",
    "revision": "4c0c0049388cf3f215c04df842c20b80"
  },
  {
    "url": "assets/js/254.d526c1ed.js",
    "revision": "9484306403bb15daf90b2c385ccd5798"
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
    "url": "assets/js/257.7734e54f.js",
    "revision": "87b22459fc86059817c564867695c185"
  },
  {
    "url": "assets/js/258.295d47d1.js",
    "revision": "f352ca177cd608ca7b9f113f0c8fac3b"
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
    "url": "assets/js/260.5c2ed615.js",
    "revision": "7ee1a6862fbb9e039bab351089cfd2cf"
  },
  {
    "url": "assets/js/261.f606878f.js",
    "revision": "ccdbaee5b078a3e85ee253eb2894d800"
  },
  {
    "url": "assets/js/262.458d3293.js",
    "revision": "e26459099be8a3b3487177afd56fca9d"
  },
  {
    "url": "assets/js/263.103411ca.js",
    "revision": "888db85984c3d53b16110993016b32a7"
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
    "url": "assets/js/279.f4939955.js",
    "revision": "e2153f27c36e30efa93468a829aa49e0"
  },
  {
    "url": "assets/js/28.c6f1fb70.js",
    "revision": "fc55b72f9256814f14f0821322f7b570"
  },
  {
    "url": "assets/js/280.995ba61b.js",
    "revision": "827e0fb3089c0c418c82c3dca5d63ba4"
  },
  {
    "url": "assets/js/281.c8cd9f76.js",
    "revision": "603cd5b411512f7d9186dc5371cae86b"
  },
  {
    "url": "assets/js/282.6846af77.js",
    "revision": "513e4027ae327186c7add28dd78cbb91"
  },
  {
    "url": "assets/js/283.72477fc3.js",
    "revision": "3f80f1b238fd5189722fe3b9155157e2"
  },
  {
    "url": "assets/js/284.e3922471.js",
    "revision": "55a43be21f754a2f81d0bc19370406af"
  },
  {
    "url": "assets/js/285.077f7b0a.js",
    "revision": "820d3cfcd487b9645afc6ebd180c582e"
  },
  {
    "url": "assets/js/286.01e71233.js",
    "revision": "50ab56f8328becd67ea17c5878eb39ae"
  },
  {
    "url": "assets/js/287.b7faeb51.js",
    "revision": "a428140ba0cffa312f68d7bf4821c4fa"
  },
  {
    "url": "assets/js/288.cafebac1.js",
    "revision": "74170cf07a49422ee9f96a41f0faa34f"
  },
  {
    "url": "assets/js/289.6ee377cb.js",
    "revision": "85654a8e686575071aae3515f84e648c"
  },
  {
    "url": "assets/js/29.8259899b.js",
    "revision": "89968c2a8eab904614bdbaff49f4528a"
  },
  {
    "url": "assets/js/290.b4333764.js",
    "revision": "9405b03c21ab17ee83dcbccda7c992cb"
  },
  {
    "url": "assets/js/291.051f3e55.js",
    "revision": "f39a42eee484270d49511e2612251dff"
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
    "url": "assets/js/35.073c5019.js",
    "revision": "f5907da08432665f7a1baa91fb9e1520"
  },
  {
    "url": "assets/js/36.073e7aef.js",
    "revision": "aab99a7e443435b88f95c0e714d3d739"
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
    "url": "assets/js/47.6849bb42.js",
    "revision": "c8210b1a16ed6c4292d8d879331da31e"
  },
  {
    "url": "assets/js/48.928e6697.js",
    "revision": "5a460eadf994c7cbb4c8464f3817d423"
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
    "url": "assets/js/app.78ece9fd.js",
    "revision": "7812fe4c5e2382b2b9da8197cb66efb8"
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
    "revision": "518f0a7e67aeb01b9a6fb3315e28afc5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "5e64bba233bdde0dbf810dd0d170165a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "436630f2cee4a019fa5dbbc8fbb9f44a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ede756b8dee08838fa6d3f98c60dee00"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4a6fea5aaf3ba27114253fe53b7daa85"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7fd5714ff21fb0cfc10ce76b718395f3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e1f566bf9edeb8405bfc78d6df17051b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "49756621a5c4422a5f0d8a521e8f14f3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "34d72f2c9aea1f403361ca3240b88aed"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6483f4c9a4aa0510e6b471fc2576afd1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "f2f4d8e3b77403211c87f11a4de79aa8"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "225ed430130202bce0760c23a35b5792"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5e55dd7c9a6229c2fd0195c9af15fa8a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "ba687bc25d318063ec989592f747e7ee"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "bf39cb9a9dab4081a68b9672bbbf4a98"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "40cac848ce1e13aa84c505bff2fc8576"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "85a1e0ba460052e4011622c5296ee93f"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "0461c919e80c55dd52fd5acfd6b51f31"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6394e6b01573a3a5ee27f7af4db58a7c"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "925ec8df401b820ab3d031cdc7c35580"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4e830049ba467af34f8b2f724b2eacb7"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "536db1e80e035c2b0dc128ae4fe907eb"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "7086f390fdeb303aa0d3e3ff0ed30f83"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "2f473ceeb3eb90b374d82f5f0989ee4a"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "efd19062983687d7667228c7e0d756e6"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "1c10227bc5d893f6459237e36996070a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "9fdea78c308f63943488af558c1a123f"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "bae1b6872ee9fc91583f9d3721c72d6c"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "fc9dc8eae224a8257dea95036e3a1131"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "73a9f5338c0a0cda26950d1cb19b30a4"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "09bce082e7701d0a141d0e271f91880b"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "2fc8b0d64eeac0669448f8e1b5498b4a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "e9fe4d0f27d6ee7faeecdc726b31717f"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "c7ffe7e4653436d89fdd7bb09ae63ee8"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "92953de9fbb54ded55873edcfd5f4ba7"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "1ff34602cc7c4a84184d7ffe9e893b31"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "2bcd851d51b74137f1ccd61041a7a56e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b3de7467c8e2d9a5c9afca52b44ce621"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f18f291e46fd8d81194e7c232b6872dc"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f1e2bf4bf6bfe0bb501cac0f44979aed"
  },
  {
    "url": "book/index.html",
    "revision": "c4de53ed680aab1acda85099d6eb01a2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a4980b621e4e0be27709562b2c30087f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "8fdbb7fa380c43114036ad387677b938"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "0f22bb6f76204244a1d4925c2c9560a4"
  },
  {
    "url": "c/audio/index.html",
    "revision": "bfc2e7e8104be136cfa951669b0a7c63"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ee84184be941eb3c43a89f2d7fa737c1"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d8c53e178b661828479899fd03c4bdac"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "92b25a76ce675d1156c75039f2925027"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "26927af43f59ad8857a2319bcc456e2a"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "0fa4824c9ebd2b180b9912963ebddf03"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "f7c449075d43e6c50b36b0d35861e4df"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "40f3dada22d5f03c36a73c15a6a53c6d"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5640189c87cc50778cb10fce6fa4abb1"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "c90d0dccb32894766127f0254c4ef933"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "c0e96c37f5ace94237a7263c7b30a996"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "01f544f2694a2e9c4b8d521b0663c323"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "f0d6bc0861fb7e651946c7d4bcaf6e7a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8f46ee6627452cec10eada7b0012cff2"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d42a77fe067dd9d38c298f4172f491f6"
  },
  {
    "url": "c/program/index.html",
    "revision": "49c5f35877b97e856cd7ba8c7179ae65"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "0cd211dd4459b7fe9f169368aa9c1672"
  },
  {
    "url": "categories/index.html",
    "revision": "cd7f6831820c99d2a8cc38d5a8e7d0ab"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "c8154a88bba3e73bd87bee11661474a5"
  },
  {
    "url": "figma/index.html",
    "revision": "c89e3c716e22a11e33cf991316a30aa8"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "6f7a60a7c9db3e95068a272aed428a09"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "fdabb31894bcd29d5e28ffcd2a47aef2"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "cb99575f28c1189898ae09a76b43fe49"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "089fd8e313fe4c6191cf8dc175fc7460"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "36e4550f17c21a516b3951ec0b9ed006"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "d8ce5d78842a7337b556cccf1580e0c9"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "aa70c2ae0273209884b43fda35086e86"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "27e8d45fea22c80d417a1461a5204dd7"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "fd10f94984acecff2f851e973144fb5d"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "c63c4546ea2f0a5c9289d2c4a7676b61"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "02d151a4e1673ef461a0474679ff296a"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "bd5a7cab0ef892199ff596be747d9085"
  },
  {
    "url": "flutter/index.html",
    "revision": "5563d9aa189677531bc5efc4cb98fde7"
  },
  {
    "url": "flutter/point.html",
    "revision": "4b53adf07e9442c6daf91571b1343d45"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "00c60799cf5cf56d90435753ef239132"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b59febfefa4f19b0617217c3590d9cac"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0f22784c82e0b3a364eac1aa30413b67"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "3b2de1b90a804f1a62cd89c4d8e097e1"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "abbc10202aad538e5f66f340a3f132cd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0293595cfcdfd070eb9d4f78ce634610"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a28bd2a0da96a021433670938827dd7c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5be51546d8c8027d820f75bf9970ac88"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "116b2e69cf64e80da65061dbab6ce178"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ac93e3917e36640272b8b8729918cb04"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "afebc9e70d216e4557f6dded49ca282d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "7f117f877662ceb59d777a50493a4dc7"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fe445530f63b5a0dce19cf70ace3dae7"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "4faee79f0d6fd1c3871c70474d6e39e4"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d6b99f588f2254c6662d522b64e5a66c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1f39aad469af90f09c60d29f91e64d54"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "77fdab15795cb0d67db609910377e382"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d7a5d9fddc7067e31917ca3dab439618"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "31fdf268a789be3917898f2b5d835498"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "5d5f7a9bd624d7b39733308f7958f32e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "e20fb4d99bb62cf57cac5e0f58b79a24"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "08fa73800b2d3f9b75b900c1cb1b2523"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d3a536bdc71303f00ad6ec5a1d103231"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "31ce05b186184c821987b46eb08da75b"
  },
  {
    "url": "haskell/index.html",
    "revision": "de689cb47f55ea62aa1317a5c3a4b50e"
  },
  {
    "url": "index.html",
    "revision": "b41864ac7366c611046364b88eb29ee0"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "2e40945dde0e898bcfaf9cc9061670af"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "39cdb1fafe8ecb7f0fb1d69376319b1c"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "e6aaed98a8ae032bb835c6062ba63b10"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "98d04f070b15c7b39a0171f101677c10"
  },
  {
    "url": "python/index.html",
    "revision": "aad046ec715c952ca3e97619fdac6afd"
  },
  {
    "url": "python/python-ase.html",
    "revision": "656b228bb5c783769aadd7778a2c6225"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "65805b869e718ea9db38d6700c39d1a5"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "76161b7381349a8ff014bf961ea6ce62"
  },
  {
    "url": "python/python-file.html",
    "revision": "9b977f47c6513744e24ba88dbcf4cbbe"
  },
  {
    "url": "python/python-function.html",
    "revision": "fdc2e81f7a139ddeeb1cc213d0f7cbc2"
  },
  {
    "url": "python/python-generator.html",
    "revision": "420c0d0c7f762440ccb00a00e23af971"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "4d71507d7ff6dae57938d660eacfb94d"
  },
  {
    "url": "python/python-module.html",
    "revision": "e3e9fd0d28da4f472aeaff9c6a4ba45b"
  },
  {
    "url": "python/python-string.html",
    "revision": "48ba8a9f32cf4b9f80a35d048541c4f4"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "6e98f86ce011e30081f54fcd99078c41"
  },
  {
    "url": "read/index.html",
    "revision": "411f6290bda067b2dce4f024aca5cb7e"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "724c67a24aff01b83058754a995f0992"
  },
  {
    "url": "swift/better/available.html",
    "revision": "29c87b70f197dd3ddd828135b14eb853"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "32bc26113e4fdbbc2b18799e8f704994"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "ea4f8c223cddd204b48cefd1eaf05dc7"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "b318c191a115e9284fd7e595da402c80"
  },
  {
    "url": "swift/better/di.html",
    "revision": "282deb619e5a33ededb7a1051f52887a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "cd6f57bb8d97de00a1bdb0b4194bb3df"
  },
  {
    "url": "swift/better/last.html",
    "revision": "7720a3a397770b628f0ccbcc7c2ca0eb"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "a242508d9cbe010282c39805ff90a6d5"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "0478c33630c1044ad12c0ccbf8c02713"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "2722fbbba8a4611709734766be5211f3"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "73a64ef79440fa8ba6ad30d7ee09ce91"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c077ee7b7d4b0ceac45b0edcede86639"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "02c87396ebd88634a703d04c19a61609"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "60241d9ca3d882399706ada3af395d42"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d624d0a9f672e3e92af981eb76b5936f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "429062029b69f9ac109fee0dded5b93d"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "95410a6585bae35b3c05c0242a23b877"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d8c7b87afe9887f4fc887ac9c49afcd1"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "388f21ef72fbf4c0ce382285380a5c48"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "4e6954d45b3d2d2cb51349e8b5395926"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "8fce3961d71294639a49c1065051d28c"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "cd2b896ec2f3318cc2efc1a86ea4e827"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "52013e76672edf3873c9c7a4d4b7bb74"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "023292b433c1b2b17545dd83b11f8e00"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "0ba1966c7c0ebef2782df829aed501cc"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "b21a1131ff3afe40cb5883928d534c87"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "422958f30b13fad2f392b0108ef1380f"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "119026b384c58d5afd0f4febbc4b4ee5"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "36efea4bd617214f94dc39a70989c39a"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "7262b19bb798f3af6fb3e7a7d2fcba91"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "e03705069769cfb809e04834e1133ffc"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "410ccdb9fb3317b7f1fb0e7a3dbbc363"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "f26bd9edff09a0cdd734d7b0f73cef26"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "b63b8169bdba6c3be204743aa958fd92"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "696f4518f9d3c04060eabc72f1ea4f6c"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "6ad4536394d4c326d5dd1ba37e853b49"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "bc2ee72350eb6aa67e119245fad8eba5"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d64d4610dc66125324b8373d021108d5"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "8bdeb4d407805eef93584683bd18fa3b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "0bfd9161baabddaabbb672e573f39d71"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "ccf3a360a97ba26351ce97746dafd37f"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "bdf9d9d9ea1c08b5a0073592652205b3"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "b7da0bdee0d50c424c3777779f5acc45"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "44571d0bc9cbd3b81669fd7ff82cb9c5"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "b4bee0bcf4e844d588aad7e85449bca1"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "56f4905bb34a8515a10002c848b10e9c"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "ff5da2aa7f0ebfd2add3124163bba442"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "ecdea34446647dbeac8f0509ef005d6a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "79c22eaf7f3d3b6c4ec00f4efe0a7524"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "ba0989e5592a694b8c515cf0aa7fe7cb"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f49e01546b2d29f0c0602666377dead7"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "e78b5e455bb271e3e064bada81d0fc69"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a4ecac188b5a4da1e972cc24a0ea3a0a"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "81802b07f1aa129982099d024802475a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "4d2826b52c495fb8201aa42d489278bb"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "67fa4f29e350352f9092396f8ba2eb10"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "cb4803abad32a677f6f26756c2332e28"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "e1925fadd730d4c340487f7bd7e8aae3"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "350b035c80a92c2c2c986ddb25ae78a2"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6e4e590d7241b3d66d0829240ce2a90f"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "d056fedc70cd2dda2bb6fdb5f2023424"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6893eaa3bb7a5cf41f7d4d1d367c8893"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4fca0c56e9d2ec9c16e15f151b8192eb"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "36bb5bcf91ec6c71335000a6e5639b74"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "c59f240adf275c5a3ff3bab6c6b06320"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "06419c2e6713064544dd67dde5291f5a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "9edb72cbadbf762efcff5a4e36544911"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "87fd1526a184cdedc531af523d5d695a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "81d5abf4cd648b0e153d6e8099620c62"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "42d9789056b666dfd27aa975a39ab26a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "bf02f127ad886aa412210fd559dabfb0"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f87509f9938d40d2ab84ff8732b5bd5f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "98bd7e35110e0162e0d641016cb50c36"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1bbc8b5d341a86cd8410a5f5a3a944cf"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f7398a648f822949b758d2ee9958455e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "94459d35f240d0c77fb4a5a5df812171"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "1aff750685c7c98e3e9bce971ff07425"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "601772a40577e670dd0d4d03f5412969"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d32d61a649dc0ecdfc7c7f1adc753b5c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "ad70c679f3f9b07bf05aa6a7e7f76d58"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9500f01d411f31d96c3a450340d8bb97"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "931b0230509a366fb701498b5e85b0bd"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "be151a80a76f4bfeb62735392997406c"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "04a83c4db89496db97046b59eff1af88"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b03a458699206826a9ac889c09a1cea7"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "786f4291066ca3cd44d91c9d33404539"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "1f8336360ba6cd10217f962e6d1d182c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "567d5ed7a21ba762b89edf80ff2cafec"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d11c9c0689ca7a2ff60e017c0a3d1765"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "303a5a597fc20cd73b3e0ae3d5efd287"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b4636be683130fd796a183a9ce8a0d9b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ffe868c4a1e2e012f8f9415627022858"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "2ae83270fa5763a5cbdfb5d4c44cf5ea"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "09087f20b4209c289c3808401f3b27ec"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7494fb4ec4baee16a3765c8f3c659baa"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "9b77e1f1a18ba6abe187c2aabcacaea2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "761c908b3a4cd7f41db6e42528c0b8ef"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "680a9e174ef89772e4e5b1cc1bf65ab2"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "32e8acfbe451bb4c4ea0d2fd3f3c80a1"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "d152b635e0a9750eaddbd540efe08023"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "21a63cacae8016fffeeb3264de9e6f03"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "c9928327d1aff4b75335142d4e019466"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "132f4be7ccff5c10abb304fb1582b68a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7a99448f743e7d7083ea0587d09ed443"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "c24729724d3241fdb9367dfb2365edd3"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a76d902f3ccf81a4b6620c9b84f0c289"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4562c9493e1ba1241efec78c2fcdf703"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3dbfd418d59d169059fefb305b661b3a"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "345b1d2d0280b6c4476714f709bbf1f0"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "a29dfefa2b6d3f82ec776f431bde2f3d"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d60d10b6288d2056ee23efbdc2a9ad01"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "3e66140f65071bc9f8e51127b5a6252b"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "cba27b25449cea3ab46bc20944d5ce1c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "21f4b64c439780fe3f032f661d8f47f5"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "07de5cd6fc93c3336206ba23200133b2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "fd7c1eb9ff4150b4b3d863f3712d0878"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "98d3afbc0f6468453f41e17c475b64af"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "176cb81d454ea561bb7de30fbfed84fb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7375236a71144475f3ce5b7376c0db61"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "981515ba3d16e900eeea935a788b2a91"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1acd2d4896b60171cc8161762aa6bb20"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fe6e5418f00a6fba89ef77d719446198"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b3e926669352ec7fffb37f6068b8ce46"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "7528bcce70421ee660d775718feb3ae5"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9c22df3d9210e3fa8a5856f3a6be3bc6"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ecde94094f8d3518197403902e3528fb"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a3718f148a9e2a43ba3857ae03944de1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "837b0c3adf3aa99f5881626146f6a611"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "56cef1280b7946ac96b5281f561cb246"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "8e11c2b74037b14d86ee6df279aa4d3c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "798ad5cebe9c9920512713e6c0c52272"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e02ea284956b11db5271a0a80f258c03"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f9507de343820102309eaeb1e30698b7"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c9672edd315d47cdc86201b324d28f88"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "df2117861468f51671be269e8a02b347"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "65e94ac18f4bbdb25263ad7218b33ea0"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "70535aa76bbd88974a8fe6202bcc9105"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "40270041fd2ad7896f36afee2216fcba"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "875fd21f23473915231c435e0b84151f"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "40b8f9af938a6830bfed4f593f768286"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "67475c86ac7da46cd035aac1be4220fa"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b63f7bf9b7792599271081b5e9f8ea33"
  },
  {
    "url": "tag/github/index.html",
    "revision": "f192aa909d6549ac9b0ac88da5bde875"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c90d2b9ea798f901fe468f4636f29418"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7dd417e0ed11c733ba652bea0c6e6a37"
  },
  {
    "url": "tag/index.html",
    "revision": "b6a2e60d45d5915c1842a54689c72a51"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "10f5c86b2a229cd8f98ce8d6c6d523d5"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "26f90fff5b5251a9e71c217a4a9c5a3b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "a91a9314be0d23e8bc60f36555db8fbb"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "c3ed219ef17e28735388bd889332027a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "30f0802f049705f74150e6d34b19807c"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8dae62ebd4cec8db027d934b47568224"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "564f45d379b5315b5f538c7e8bcda5df"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2702bc2e38bce894250e025881acf9a5"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "497af12cb1323a49a1dc227b949eaacb"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7bab7fd74542e48e5be861d5e478c2e8"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d0b0db631121798f1c740b6912614e70"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f6ad3b9b01a23e9de415e4375020fe5c"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "fb3b934a8bfc214e0b4f55df518b7547"
  },
  {
    "url": "tag/python/index.html",
    "revision": "461d35798ba2c48688221e8abfd98fa5"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "47da20f4fbc69305a5b6a4ed46f910ed"
  },
  {
    "url": "tag/read/index.html",
    "revision": "604c8d6728e1abd418a0ffe1ce951f4a"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "f6da0872c4746747e9f1447a0ad7b916"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c859487c4156a214d4ade5c066a89464"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "283ae3e9d921ab4982f7d2f22e38b74b"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "85bba597d54d3270d4a15010dafd6f8e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "127212a95d46bc0ed4a54c2f5bf02cc8"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "ce0e31ff12f236ab42973e417489f0e1"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "94efc9a7bd27c255af9792ac30184258"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "b821bd24dfd8a14b85208c963d5a19cf"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "90e3e8de1d82beea727a930d75d0ecaf"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b4bbcbcfd2281e7bed13450b9c90f059"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0918501850374aa199fec0fe8995c9ba"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a6a288f6af6aaf101431e1c9b680e752"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "8b6b0a7325cca283e523d928dbcbb011"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "72a5cd99b9ee9fb47dacf0f289eb5e0a"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2e8c7a92efe02eb3ffacecd3ff0f09dc"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "59b18d8acd8492e95410efc2f032f59b"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "5982095161f7807e7fcf6677c93d99cd"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "d3db659f38fa15e20c6069cddbe17bc9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "161c2c627a9d31f1caf95fad68e49036"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "dc63c8335f31931e72f667d366fa8aa3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a5ea12aef49cd4e64f2614d0a629c87a"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "97c78f7d486338809f0cdf5b878158bb"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0f6bca43087d929a9105ddf07bdf0f4c"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "39bfeb4e7e63ac2edf97632ac1649a82"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "3d0ac69e548615adedc85246de226c1f"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "c01de7d154a870e314e57031a7420f41"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "97cbac60027581c37565f633326fc0e9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "1a20111d90f538d55ad9408350efb2e9"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "524b7b8d988e2449db59e11dd445a51d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "065f050fdc7cb795a4dad530d2bf97f4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3c03934189b4c2930a10a8fee516fe8c"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "8ac4dd5c7fe9b6ec3b4b16d484eb9193"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "e6f1236127d07f44fb28b0127ca99e71"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "d058c09946a94cbeeec790bc11e8f2c7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "83eaeb06923692e45572e53936f08465"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0d895b004675eda6165f5b65dba411f5"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "6feca68ef2dfc66253ffe1627e94d9d1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e5e69c42706843d5a3085d0b452b8fa7"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "646e2ea00ea4a2bd59a6986caf13bdc8"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "b1a4d43cd389233cf663f8916e79df05"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "7fa9ad7a57f621b44b284b32b7521d19"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ddf5f55c708cd5b81d9cd3b375a64ab6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "84e7de4beb064a25dd90669044b5a415"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "4c3e73cb43090ecb6708a4fbc1a0cf46"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "3592535a829663dee157dc0ad2cbab07"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9edb315fba8cc905d1c52c735993d338"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "04ce7e7140e917649988a9103808e99a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "05d9bf44c9986273f400c1f90e367fa1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "291d606733f3973a683ac29c11e79ed1"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "b47caf39bfa74a37d755b4dca3f35d9a"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "f7c495b42e9d60b29328a7bb6ddff6f2"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "a4f06278b6fc5dc25dc01a7fea74949e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "598a56963a9f4a1e140219398d52b6d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "bf300e696d699e97cd2cc22e6e66925b"
  },
  {
    "url": "tools/docsify.html",
    "revision": "352adf493534c2e04c577e58b268630e"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "83d1138f8f1cde0acf5a62ed83e872a8"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b2c65958df6fffea323bec49be95779b"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "7a2e298f7e2cd39c58fa1ae2f36ad55d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "525ffebb996ed7a2551a2c91863a0486"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4277ac1b2a678e4e338b14d23fd85ec3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "21362d969700e37dedac112284c84a87"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "2e458b20958fb8cebbff987516954f3e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "30de1c74716f09cf4927c4e75ec98fdf"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "afb30fbb015420385ab177adbfe3c604"
  },
  {
    "url": "tools/note/index.html",
    "revision": "fdf042852490397b24354858dc5dc369"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "934230781af3bab708dd90ce7f750f90"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "81d324b5b65a515f2b482253b00d5103"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "2b326c629007db57017ede38eef6bf78"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "704593c84312844d88e02df58ccf192b"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "3b025c5dfdb2a2fe9ea72e69a2468862"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c8a42a89fa729c19e5e1c7859867e2be"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "45851b14ce6e30c6a23f5584e557e5a4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "9a4f54f907f51cf256fca0e5330941bf"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "59dd527b6707a9742de0b605085e3c41"
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
