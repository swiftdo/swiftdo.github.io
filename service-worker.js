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
    "revision": "89828d4239410384a894b43231df20c2"
  },
  {
    "url": "about/app/index.html",
    "revision": "bc5b03f407e29e42e51ecbe7eb723ed9"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e30904c20ed038cd43d497cc76f42101"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "db0e3dfe219143e87141c46cdcfd71fd"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "b9e280091298164391f813ac99faf673"
  },
  {
    "url": "about/index/index.html",
    "revision": "80266d1995a539d10db204ee8a908b77"
  },
  {
    "url": "ai/index.html",
    "revision": "c08d54b18d6b75a0d22b5992b46b3d05"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7184e78b9197ac60de05ed0b09c1d558"
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
    "url": "assets/js/120.2e6b6a09.js",
    "revision": "2693b215624ac04dde69907b333ff7aa"
  },
  {
    "url": "assets/js/121.84579b88.js",
    "revision": "8e3c5e6073d5fff0b4e930ed7729ae85"
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
    "url": "assets/js/128.b96caeec.js",
    "revision": "219d40f19fdd5a14809cac75b999e8f6"
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
    "url": "assets/js/14.aa3fb27c.js",
    "revision": "0e8f7312893d0a56a3b113fe3cf572bc"
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
    "url": "assets/js/147.d72a045a.js",
    "revision": "d4bc8ec3abe7f7dbf4fb5b6f2133d2a0"
  },
  {
    "url": "assets/js/148.c0c05b30.js",
    "revision": "2fd15648baf0e4225263448df0ecc980"
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
    "url": "assets/js/166.fd4960ec.js",
    "revision": "7bdb639d3b40c33b7dd84dcda67755e1"
  },
  {
    "url": "assets/js/167.ca138bac.js",
    "revision": "d6ab645c00eb50fc614cae7afecf0ca1"
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
    "url": "assets/js/174.340e92ac.js",
    "revision": "609bcd88b6a605df2733fa671e4935e2"
  },
  {
    "url": "assets/js/175.503a2134.js",
    "revision": "297e9fd5588ddce702e12e748ff6e403"
  },
  {
    "url": "assets/js/176.1db15dd7.js",
    "revision": "f41227fa70a4fe14db38f7b2522d52fa"
  },
  {
    "url": "assets/js/177.83b7ee71.js",
    "revision": "44d4d53750ff28eb77c1ab55d8d5109c"
  },
  {
    "url": "assets/js/178.530e5588.js",
    "revision": "573b3b15bf9f596cc381b2eac5b22bc7"
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
    "url": "assets/js/203.f08aa054.js",
    "revision": "1548334da9008428cbc23fab09d8b6b6"
  },
  {
    "url": "assets/js/204.d847f366.js",
    "revision": "8925adc3875627c1912a71bcb1531296"
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
    "url": "assets/js/219.1d019079.js",
    "revision": "4e9440365af3bb51246bd79fc4d86747"
  },
  {
    "url": "assets/js/22.a60ffa29.js",
    "revision": "b282c57e5ab291e4927c1a74da0f6fd1"
  },
  {
    "url": "assets/js/220.019e29f9.js",
    "revision": "43800bb6ec8d18c2ef93af9e0161b989"
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
    "url": "assets/js/247.c5e259f1.js",
    "revision": "a3fb4026ced5c48d8ede52eca37d1506"
  },
  {
    "url": "assets/js/248.c5cbb863.js",
    "revision": "a6347b99a67f0780b5072d2ce870216b"
  },
  {
    "url": "assets/js/249.a5c803cd.js",
    "revision": "8ab2e65d655b8cfd7f2f8e39b7c32a00"
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
    "url": "assets/js/251.3d64ae6b.js",
    "revision": "44701a25f02ff036229bf0276e514b1f"
  },
  {
    "url": "assets/js/252.f9d217b1.js",
    "revision": "7fd79d28e5c1bf00bd2d5db85ab3a7d6"
  },
  {
    "url": "assets/js/253.75f7b37d.js",
    "revision": "236844cefbb4a9d17b52de849d334c88"
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
    "url": "assets/js/266.dabc0546.js",
    "revision": "f72a4ab9d1f43e56ed04e78fb7a3927e"
  },
  {
    "url": "assets/js/267.be149510.js",
    "revision": "6b66221b3513683d1239cbbe74c6d3a2"
  },
  {
    "url": "assets/js/268.f5323dc3.js",
    "revision": "367834c66639b1b26bf601f623d58a5b"
  },
  {
    "url": "assets/js/269.1cca4a84.js",
    "revision": "51c38014d563a66134869f4b82e9e49a"
  },
  {
    "url": "assets/js/27.14affd52.js",
    "revision": "ea86e0bc1b5b590c92f24541b9dbe72f"
  },
  {
    "url": "assets/js/270.5009c53b.js",
    "revision": "50afa130c7086ae1262dc5e4bcbbdb1c"
  },
  {
    "url": "assets/js/271.54bb0632.js",
    "revision": "ce544c218e73b8c9c338f04b7fae16d9"
  },
  {
    "url": "assets/js/272.ae67aaa5.js",
    "revision": "98246c19202d6c5a4a8f49ca075b00e1"
  },
  {
    "url": "assets/js/273.835975d8.js",
    "revision": "92f8e4ecccc8adc837efbfda5f0b31d8"
  },
  {
    "url": "assets/js/274.ce0b9043.js",
    "revision": "0390fd1e1f2f2841f4307bfe7197fa67"
  },
  {
    "url": "assets/js/275.d6a8c2f0.js",
    "revision": "ce644c41c86c3afdd0097b70be0ffc0e"
  },
  {
    "url": "assets/js/276.7aa91bc3.js",
    "revision": "aceed24051eac20db5d09ad62a4541d0"
  },
  {
    "url": "assets/js/277.e76325aa.js",
    "revision": "c05e1044ccdf9e65ec7adab0d57b3127"
  },
  {
    "url": "assets/js/278.abc93958.js",
    "revision": "49adcbe9f88cafd9d9c32060b4e55258"
  },
  {
    "url": "assets/js/279.20034002.js",
    "revision": "360bc1b510736a273ebac8e19108819c"
  },
  {
    "url": "assets/js/28.aeb6a4c7.js",
    "revision": "1e95e511200b19002bb638583cd17adc"
  },
  {
    "url": "assets/js/280.3c9763bb.js",
    "revision": "39fa452983b095eb195453a9bce7e289"
  },
  {
    "url": "assets/js/281.75ba8f31.js",
    "revision": "cc14f19e1edb0f3d04d230c856845dab"
  },
  {
    "url": "assets/js/282.a72fdaf5.js",
    "revision": "702910a018a25c31af2f0eff2071f224"
  },
  {
    "url": "assets/js/283.4fd88915.js",
    "revision": "e02bee10028731c604a716fefe492b25"
  },
  {
    "url": "assets/js/284.ad61c420.js",
    "revision": "9d90adceac0fd0e1aac589dca784e5a3"
  },
  {
    "url": "assets/js/285.204fd641.js",
    "revision": "37a99fba3b60f34db39e4da8173e01a5"
  },
  {
    "url": "assets/js/286.2efccfe9.js",
    "revision": "c86f2a2dd08e9541afb10d74c589e989"
  },
  {
    "url": "assets/js/287.4257c708.js",
    "revision": "3a8d089098b9595bf6d79e44487e18fd"
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
    "url": "assets/js/app.cc9b1220.js",
    "revision": "b7c7511527dfca8ef865354954a2aba8"
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
    "revision": "09a1f43716249756590f2db3da294351"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "11ae67f5abd3d5b0ef80c26eba925406"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a0697894bb7724ceec4f64726e32a352"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b679d8a1260d574f4e86da257f031d9b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "0cb040e1bbf85c3005d28ae76b528cbb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6e569cf9445e4c161979aff45f74cb2b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "383b9f947099df89218789bcbe80a647"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3f19e381c429384830e05494b7cf1e98"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "d02dab7988d04c01f77d2be73dd9f027"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9bad800a171d2625fddc09502cbb42a3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ae37d18b9c12d3a170a8ae933ac2a642"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "e75bff67f891a3da1d60a0f3ee92dc8c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "78e95f1cdf4c833ff2bba9529e6d85df"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "76232bd5f72894e69c38fdf5314d78c3"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e33a22ebc08e38ca1ff512dd87024c1c"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "43f65e998d1f1714c8771e269a280abd"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "dc965edab93403c099a867b6ad66cc2d"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "8cb81a2ad865f4e48619948091e47d80"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "dd140d67e8b0b9a98cfb1a2fae5c0cd3"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "3f8a6f33876b5125be994e3f14d6a477"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "c7f5669ce60908e89dbfa745239ed13a"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "1ad1ccc14efc3cedaf3044792cd1c6ad"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "23ae9e7b6cb1a7468cb8df7debb5797d"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "ab3f973e2ed3ed1588fc4cec8ef10092"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e2e4a2e0d767bceb8efcaff13fe128c2"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "48be223ab0b36e55655bf4f99624436f"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c176874aaf75b5aa23ff0fc666291771"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "08817cae28126ad336afc884a67446c6"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "2f36eb5db507e99e65a603231588aef7"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "1f0c8041a2a718334c9e8761da619fbc"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a0e76c474c024b42e779f37be284c0d7"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "d7fdde78a252c05f74e1408d03474dc2"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "9002ea8e775ffafd708cfe8d69c3662a"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "2c543fb33eff21eeb13578b4337fdb3e"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "62e496d4f61a0ea9a4962c7d68c1cc13"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "1f45ab5477174ff8de8825315e75d2ba"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "06ae435c5e3ee73e73b3061071e5fa13"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "61b9e158b41dea926bce068e4b4b7b46"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2e9d24f5d24a84ef0edfbd7f28430826"
  },
  {
    "url": "basis/os/index.html",
    "revision": "393ea6b432ea12e9c043b40d44de1b8b"
  },
  {
    "url": "book/index.html",
    "revision": "6e0fb87890ee7c429ea19c4c899f3e58"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "6d6593e83f3619ecf0e883779fcbc771"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4300d38f17cf28f7e84a73f021568732"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "4854188a27d9a6ee0590bc828eb34492"
  },
  {
    "url": "c/audio/index.html",
    "revision": "5bf4b2dbb64aedf0495955ddd5952097"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "9bb564c6733a7eeca281653f56569eb9"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "f0d77f17099ba5dd26169663d5af6abe"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "4e1b3d26629fdb2bc128521dc533405e"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a84abfa0c55bd051bf7ef6e73d5654e2"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "0d7db0604af3c820e9bc34d8e1cbfcdb"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "6b528fb9cd3a2a0a03fb4ae78dc80a45"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "b21e2ac1c3a2cc36d5076ac878367329"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4c635dd200b2897ed990e540a3e1f105"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "d5e1d36c5a47e1cdc29414a183b93797"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "1376a099884ffda98b43cffb80b0d93e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "29e0f80a5f1e3a0f7d394927ffa51783"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "d07fb846f72cf7d1a73b30055a91f332"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "6f9a8d513fd8ac16d0cad4fa856b11bd"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "6c815a936c21f0b1dc3b91da8a82a453"
  },
  {
    "url": "c/program/index.html",
    "revision": "bddf92c2123b204fa65eab98401799f6"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "5adeeaffc1fa01ae4d70ec19e395b60b"
  },
  {
    "url": "categories/index.html",
    "revision": "287fe51dc4b5606f96abfcbc43ec9d74"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "1ee5348500973e680c54084de3d0bf31"
  },
  {
    "url": "figma/index.html",
    "revision": "ff7596e3c2908980bb85f57f09cea4a5"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "70592d9093f9d0ed84897d88600f1b61"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "ea2591aa74baae7a4da862a91edd70b1"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "776ceef20e1d386087f05df08481fa53"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "ba6ea1200cf8b1d86624ac2da04ed577"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "c10fd86d16377ebcf3ec9634a300a7c7"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "5118df3510fe2a9f3b89696b35f09baf"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "b11a964f29c8c863631d518e20f076da"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "24f05652bd470041f0d178bf8fcc0699"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "8962334a47b8b197efee80a2f60b1322"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "3ebb8dda85424bb1fa270d2569efc34f"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "437ea39e91034fb00bbcfee66ca0b793"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "93883209ef3d5899400f24c880dd2e94"
  },
  {
    "url": "flutter/index.html",
    "revision": "4dddeb9f7622d774a9bb3b4e8689fd3e"
  },
  {
    "url": "flutter/point.html",
    "revision": "d7d56b57e3b9363a980656aba0e5ed79"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "23c9d37263ed1a0d588659727b7aae13"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2d0f31a948478577cdb65b5f571773a7"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a5bca689b1f045f8fba5620c40fa6001"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8a8584a708c26597c2d070d9a54a3e74"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "51befd249f80df1fe8e23fd2309b2013"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6421481e72a960e720dcd07a9a0c56bc"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8c667ccb59aca6bacca8f0e068f3453e"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d0fe0382cd1fce9df93303934cfa43c2"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "201f552832fcf192e85a783acb0515f6"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ca7d138d45a9fc349d623d9edd08e655"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5548f7dda969453a23ffc9cad10df206"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "dfc1b017d553fcb7a4af3270accb508c"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "f878c47291e09a75c7480a6e865d13c8"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "d3cb8e9ba64cf0e00fb1ac0f49c495c4"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "96f9904ada8b3fdcb745175e1ec19f37"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "139dee28a291f5f0d13082995bed3cd6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f64de156afea659aee11951c9bb3c87d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "dd6c1c33a8e7f1d39be6a8fa600ded66"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "2ccc9f730dd7a8aefd0a7de4aacadb06"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ea07c0eebb805880c0ea51cd122fedab"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "1ee88821475ca9d6ae0d0854c4cbcc02"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "945429fb45dcd0b48916c99adb406d2f"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "cfb4197f5cf5efde725bd2c45db51ef2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "1948af40a5ab2ac86935f9b2afa7560b"
  },
  {
    "url": "haskell/index.html",
    "revision": "e1204605e5b031eb754e0f83453d1414"
  },
  {
    "url": "index.html",
    "revision": "f759c42d3bd649741f9acc96e4a679ad"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "5717a9a29a2a4d758ea924a0cdbd5fc4"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "86ead1acb1a663f1ccc746420e0084d5"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "52f5bd2b41c1d7df3a5ce96745109bf1"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c929e225bb5fcf84b25267e08bd1a088"
  },
  {
    "url": "python/index.html",
    "revision": "78c5dfe002f09fb83b1f05051ea9dd65"
  },
  {
    "url": "python/python-ase.html",
    "revision": "6c667c784b55228183b8548491f4f3b4"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "6b8edc24933a0344fc4b64dc8e464ad2"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "f9900058115d07a22eb4f2b5b001eba1"
  },
  {
    "url": "python/python-file.html",
    "revision": "d271a041ea07d1e1afd5c5376d9d9bb4"
  },
  {
    "url": "python/python-function.html",
    "revision": "12c6c3b3de2e795114fe3083f738c0ad"
  },
  {
    "url": "python/python-generator.html",
    "revision": "9c7b7103a42532b0e450a7242980cd36"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "2c502540679a2a59cdc438403463103a"
  },
  {
    "url": "python/python-module.html",
    "revision": "146aec51173c73d61a2bdafe8fc727f6"
  },
  {
    "url": "python/python-string.html",
    "revision": "f01b176feefe62768f63e1716fd2d735"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "c96e8efea47ff382c02202555ebdc170"
  },
  {
    "url": "read/index.html",
    "revision": "06a910b291224c8dfd9206fc03f9fd81"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "1fc2b70cf27bfb3abd32849c2fbc51a6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "165f1ca8928de4f55d6576e2c755e45a"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "48c48c6844c67115979582825fb841c2"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b4f14e78791b9942c879a83b68ee0759"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "19d3efca674fda654233492a31faebe9"
  },
  {
    "url": "swift/better/di.html",
    "revision": "f5294d2c486c69c04ea62a8173a6ec71"
  },
  {
    "url": "swift/better/index.html",
    "revision": "541c0833fa4769af12d03b9af241d629"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ed6c7ce0d1eeced0e7c3fa74645a9091"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "cb9258073325ba3e9c98ef0deeaadd77"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "31f6205657356c4a3671a6ce709e2a70"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "30eeb5116ac5434b15cc033fc61846f4"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "5aa897d54646be3390b606591777c796"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "90f42808b4d82995d7dbb4bc9062652f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "90980ea4e34b96d6bb64abfe7859d676"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "bdb1ce8431a34e88706c9f6b916c3e4d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "48e1eba0af64680c1aa7e270d698c17a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "43af9ec69e973a835615ffe585868cf3"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "9996624b26051add4bbe022d763c5fc2"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d7ea8838f9ad330b920f918ee8376051"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "43bffb60fa51fde9b4cf315f94a3b856"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "10cdbba37430943cd52e401a019563ea"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "ee01d4e36b1d795026f61292161f4670"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "20dc52657451ca503aaa1cd8d67d7570"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c9b46ac16d5891077639448017690254"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "cf2fcb3d49aee1c4811852ff2c78d92f"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "496773c09413511d4bd4f127d2bcf308"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "48abca0f082d446388fa7a18d064d4a3"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "a9a16a340b33644bfa4757665134527c"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "65b410bb224b72d262969bd282311108"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "c53c2900a7e3b3e1e081a1ecddc95478"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "9610e5ccc48862b2915218cb208a4c7d"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "e5eb710e1617a45cc40ada48ebc00db3"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "128189fee2ff3cb71db63ec2b1a409f5"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "eb277ae0413308727c9f9659150fa617"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "6bc007935c0e212cb1c9f96afe43fd14"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "9954e410b4e513180f34f966151686ea"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "9ae7a158b1a5d8d23588935658da8088"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "2e3397ee2478152e229d15aa234029b0"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "260a00d995276933dcc634fe64de5539"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f3fb19bfac288648bf65a4cae69eba97"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "b98846b49e1b97490da0771d2812aff2"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "3288afc61b84fd2ed7083e826d4c38e5"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "f905fc8105d639da03a75733c3b96089"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9bde005b054b5d1528d9c9ac297d737d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "07c6ae3d255bbf65f609a39cbe869818"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "3c2887085626744d4c10e1821510e2aa"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "48ba2edb4d803828ece8ca3a4aecc344"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "30165817a00c0f72228670043a6fbca4"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b2c0321904f75fd824fe9a53c2bd1176"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "970e5aa728736a7f60d7c94c901b5b0b"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "53f44b83bae179ca05c87080c5200d5b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "337daf90543a5c7edc11b12cdb7d4885"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "4f0ed1c2be3b9728475779c28224d057"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "ee9733a225fac286509eabe3aec0f7d0"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6d07fb90d945282271435d368ffc9928"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "72d43698e7fa5ee9d1da0c0d1bc6761e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "0698ab41dc2a4196c73baf2e1980a19c"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "079fc4a10869a303d8bbc43f1bb52c04"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "5193362b001a01e6d5347e4d0b2df111"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8e3c7fd8be7077c79bcb5d990207acc2"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c36c7c072c3376fb29f922ee7d2cbece"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "96e45d50ece0139e3c23d91ccd7a8934"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "5f0b9f39581e2e5652cb6afc0447ef15"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "e07f4eca70c971a42652e4c9810fd62a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "0111a146aea25741d34db06e734e845e"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "e644d953e3ac8760db20cf568774fdb5"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "d9458ed39d68c76236f734c1604dcdc4"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c4173d67087e1f9e25fec55a93de040c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "fd85462d3015c978ece6d6a8b05e67d4"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "2682bf4020666dc7b23e7f9fa869979d"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "73e18a2083593ed82386fb5a017b38ae"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f54cdab4aca8334c45eb847c00d87586"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "6660eeb03739646da1c1f1ada56694a7"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "1f0b7df97bdb6a5e7996068f88767e18"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "c19c0f1cb86df3c5522449bcbcc2df9f"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4179fc51b11bda53246eb3d765438621"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ffc881d9c35eecba7c3c390f31bfa292"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "4d53c701dd8415b0990fb3eda8562ed5"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "798c4ab500950adb6a61af1c5e7d8017"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "2a22e44f3bc95e96f433b10d1533ffff"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "d1bd5a942d572fdfc20c40a60a3f017b"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9effc38cba948e0461149fd4d54adc4b"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3ad660d5c24b30378f3ca332a5e625c2"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8275c428eed224d8589f981469d1b559"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "902052c38ba7ae46a10b01ccf6959950"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7f8bc9323caca9d548372340b56c73b4"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6cb46ef780d01f6347ca803269f16443"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "66ecf79cb751ee39f94753f9eeb2784b"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "3dd386272aa5280425988a3873ad7a43"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "8b0fe2d956c27aa47f67d1aaa034adab"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f608b0a393fd597c28435c20a13e3872"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b80abd10344e656e9f59f986ce8f3608"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "26c192b68fdecfba37b9e7858f717bbe"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "83b3533b7d6a6311b3883b136eaf9398"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2f3bf6a49a82558b6870fe8ef8cb1bef"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7482a92da9e19cfe7237b8c21816dd2d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "90fe5f727c801cd9a1939c6d5d0e58eb"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c522f918cb62273fdd16cc6b29e52915"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "8035b1c3cafc9349337699226e4c8edb"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "d832edf0256479ce17130fad40591ec5"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "8dc0d5873ea2bf55ae1c916e9c1bb69d"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "2bf6ce047b12ec93669e616f6a4e8b73"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "2892c17004a9dd8064f6ec2459560ad5"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "5a7e335d2e58d79cddf98bd5cda04dda"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "2f70529ef51e241f15a991ec70e4f81a"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "5646da7c669972d535cd97cb5cf80bc8"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "63fb54e258615056e71b5e450113d3f5"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2c6a8650b764cfae41745fb33ce370f0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3b54caeb411de14652a8a8c951445f73"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "1e883a85e604945067deb59b8bcd76d4"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "e87c4df607d9f0876de8b4724b69ac27"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d6c511a0857cdf5e397e4048ebc7aa1a"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "b3370e52a32a649b8ad396c6b031b1a4"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "12ef8fee91908d7cf42d3f996e557346"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "c7a2aeeafa65d12249ba40f736371f21"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ef5e3b3f7205200c1091c54b03df7b30"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e036b4a7e02634dfca6b0730e36e99d9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d95141df7edb50c3187049acbcbb1ebf"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "69a8d11f15cbf171f4d63d1112dade4f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "45a20903026012ffabc813b0159dbf7b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "498c3717a14df2f9e71021839e0b746a"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "eadcc3fb8fde29b7c30581d3055f4113"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "6d83ca3e336f917dccf4704ba0ba96b3"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "2b6bf148bc7845c1abbf3e7e3b1ed4f5"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "2844d5174181922637e5652f3b401f8a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "24dede7de49da25ca4abc142d8d2f81c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a16353b344f5b3f08962f2889c093e2a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "aa9330c55dc52f2e01e554ac8bc98e55"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8d3c8d33bd82e4c14af316cdf91d2923"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "dbbcda4ba029bd3a0dceca1130708b26"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "19ab5cd9e86311f99b31ed3f6151fb21"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "b7df14eb99b6a9bf2683a3858ab36abc"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "85fd19f3be1120675f448aaad62d7a43"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "743243c294fc34645158b752660e17a9"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "4df29201e92e76e7808a54d0e503940d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2f0538ace306e3b38c22dbfc030a7889"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "873bbb7bb9e88ac2e8f47c9a65c40ff0"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5ba5fe7ddfb05a87235e80d79658eabb"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "5bab2a7a691ab8cf23dee9bd794bf2fa"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "4bd1724fedffb9c509a316000276aafd"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "11ae5510952467d10718211876b16f32"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4ab33afadc0ce224034f6ce6c31fcd4d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "a0a01b2a988264b45210615df61955d0"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "04430f038ef97c26df483401a18f97c4"
  },
  {
    "url": "tag/html/index.html",
    "revision": "40c72b8270960c1b52263423a035495c"
  },
  {
    "url": "tag/index.html",
    "revision": "43779ef92ac67f5b2da75cb76eb593fc"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0beeccf26490901547e10fddc12b5db9"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "8b3f88060356c7a39babf59498ed9f2f"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "17dc49b6f46f7767c8083f492be25fac"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "201b843b48d727b47cb85d89c2ccef46"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "eef5220957abe0c8ed45ff1dd7130ca7"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "47fef3bebe0f0fd8564403846cca76f7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "bc98bab9e877a5092f45123146128cce"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "37f7d7500c12351e29ae6c545794cd57"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "61d717aed78f04387883d223126eae63"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "a0672effdf7007897f3b3ec373822a95"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a89379ba102098d6caf8800617469a50"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3bb67e0b3add8c16d663725c115e536a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "268e278b7e38cac5355498744f4f8fd7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fa84cf783f6e677c32005ddaf9b4bd58"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "39e8bb6cfc2c4463bf2e8849d55c92bf"
  },
  {
    "url": "tag/read/index.html",
    "revision": "e5da633733bed03e6889ac6c11c8bd54"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "9b81464e10b9c1ccdd05a6632acbf1eb"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5277111fab2533f2a475a10d589f02bf"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "93f94018a5ea2276ce85075c2ec86538"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "ccad759c80514db3eb97d5f1efdaec96"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "2425f4fa919604065fe7c3ad60f996e1"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "4a674e6b1164f49753922e2c92b8eaa3"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "db37c67b02cb883a4b0b76ff2e5868fd"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "cc5374597ce38e65866c8cd96f2b1120"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "ea66423a07d3473d4666f29a61b68cca"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "13ab7c6a88f332a922b72fb0c75c641c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "63d93af938f9d4e7819cfb40830006e3"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ceabcd7a3de0528a349fb1b743ea7e8f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "9940b086b08b060e7b307525819722de"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "5a83587559fb545a7ba0d4907de359e9"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "84cf4b4a2e2138a7428f7ac1af7e6397"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "aa5c6a8ce8ea75221b6d1a76646c99a5"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "ab90a30da78b0dc8851f3bb2d0091e50"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "44fad78053eaafd6c8bbf52aa80f017c"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "843326b8acf20e094a5b81506d62876d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e21aaafc526ab18049e3654c32092df1"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "98411fff476ecce57fa4ebcdcf665854"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "948927a92d2276d229639edae73f0684"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "4f187bd01b5f83f67cc8e95f76d4c62f"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "12a9c7aa8eaf76bee26b52f70ad0067d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c05c9f9ab1b1b3b9f0b69e3e4f78a7cd"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f324fbb660577949d31cf0a509d6e048"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "cdeafb0cb041e486bca438f925129a0e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "049bf06bce7ca963067e11dd4136c717"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "1651cad3e701f17bc68ce631a8d05f4d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "dd8e134c690ff93b721696d22ca33fe7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3623921878a9fcdadc4272713eb641d0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c41eee5d2de6a6a4d04d6cf37a407a79"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "1f71523611f222e97e0b0300c640b778"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "2dd1db9c67fad6c9ef6b076654c20088"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "117a8bb63778b39d0e61a14a73d09843"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f8b835f4c6e0a4bd3bd47b41af0f6cc3"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "b8454e1ec84427c1db4027dce63a45f8"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "7638ce14d17a0e6ec9651d32f9b51880"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d43793179ec2f02525f56b9670450ee8"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "b8690a0e992d8b7b025f381510807886"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "f354c857235182c5b6a70ce01e8b6efe"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "73f24b35a3b4fd038db51dc66f70f90c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a9665be7e8de0ef90a32b9ce8d1f2cf2"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "721dec5a4bec353e49a91a2c6c974d31"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "8a5fbe530eafe3729b686b1a009c0fc7"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1cfa5ee3b3d16fcca64c984f79e51caf"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e69cf930b8d9120a72a693a7e7c6e721"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "cc50e804375976100908d576f8bad06c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6905f55c704829836ce0300f3c82d7a2"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "4cbb4d367fef6b315e59f87c743ee256"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c48922ebe3dc0f9c902f5c4fc709b072"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "b5c5e5435ff567178428ed521601de11"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "5e6d95f09d9803df528cc82e221ac597"
  },
  {
    "url": "timeline/index.html",
    "revision": "d636880ce0f646562a23d87d3d31f903"
  },
  {
    "url": "tools/docsify.html",
    "revision": "b3195b1eef35db3a0ede4db30c92d672"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "3f6c8e9d5960f1610e3bdf1d06ec7413"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "172060ac863ad6f550a0710329d61d97"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "e989f83f42309c5150923d193a814af0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d8c46054189d5c361efb6783d70ae5ec"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "24927f01a2db739fe703e99917541af0"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9625d43695d5f617ad546fae33e129e2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "71bc543723da3587f34f43a8bd71ed01"
  },
  {
    "url": "tools/note/index.html",
    "revision": "8081984f166503982eff6222692ab364"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "6766375d29cd350a5b78da0c30dacd3e"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "aad729f3ac0aaba7ad54c34d46322c3b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "d113c195237e2f1bbc00c9a7d920d463"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "9b08472b3ba41f42753d86867ebefc43"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b96889e05517d3b5ee62616b9b4d8713"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8e9e1e03df94b305839adf7eaed64ce6"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "79191d48dd598a97510bbdf7728b4833"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "ccaeb9da2b2c76c39e4b213eaa203496"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "64bb412cf6f297afba9315ea028cf7a0"
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
