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
    "revision": "56f64e06a70fa6f9e76f64059fe46454"
  },
  {
    "url": "about/app/index.html",
    "revision": "adc51ff2f8fc231efac5ac39f6251cac"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "56391c6ba1d9c96652c8dd019dcf7dae"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4685e1f9957ded1b84b1921335d1a60a"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "88f4c216acb178fd315217e0f3b89f58"
  },
  {
    "url": "about/index/index.html",
    "revision": "77411b5b672f4e58e67d7c49b4f68cb0"
  },
  {
    "url": "ai/index.html",
    "revision": "bfb424e029fe4a1d30706d85ec6c4b28"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "e585c2b1829b54d8e43b5b6f22f62ebe"
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
    "url": "assets/js/120.c0652999.js",
    "revision": "2768d50a4d56f67541522291561862cf"
  },
  {
    "url": "assets/js/121.e5f7316e.js",
    "revision": "9606e9b36a1e40cd9c4cbab88a4b5064"
  },
  {
    "url": "assets/js/122.b297bb67.js",
    "revision": "00f91ff49e4daa30955cd01616527045"
  },
  {
    "url": "assets/js/123.44356da4.js",
    "revision": "a8c8ab4cda81d27d4af8de278197a9d9"
  },
  {
    "url": "assets/js/124.1cbc7763.js",
    "revision": "d4d16b8756e13bbfb5e54728672fb363"
  },
  {
    "url": "assets/js/125.0da1012a.js",
    "revision": "e2621fc446e477dd14c36a502fa75476"
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
    "url": "assets/js/133.51407825.js",
    "revision": "bebd4051623cecdebdb3538d67aa430d"
  },
  {
    "url": "assets/js/134.cce6bfd2.js",
    "revision": "c8673353060b0346eeb450ed8571913f"
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
    "url": "assets/js/142.b4217c39.js",
    "revision": "d38da3ef4a5cdf85cc44376b3efd8687"
  },
  {
    "url": "assets/js/143.66c9e412.js",
    "revision": "eea884ac816eca6f2ea416c1f270ce83"
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
    "url": "assets/js/146.b42e9604.js",
    "revision": "61a678bbdd8c0c000ed2e7c183a066c1"
  },
  {
    "url": "assets/js/147.2158451c.js",
    "revision": "9aadaee46bf5f486bd280766c6325867"
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
    "url": "assets/js/15.fb2df06f.js",
    "revision": "c2e0225b5fc4728078baa1686e1e2a1a"
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
    "url": "assets/js/152.b06204bb.js",
    "revision": "9f1c180146997e1d410821022024f746"
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
    "url": "assets/js/16.7d604189.js",
    "revision": "9821b41af8ce2965fb01408f8bb48ada"
  },
  {
    "url": "assets/js/160.eef272eb.js",
    "revision": "970339e6c46809dd1aebe94dd35766cb"
  },
  {
    "url": "assets/js/161.13c4ba05.js",
    "revision": "35a6ce24e6b7906268c7e9ed2d2ede23"
  },
  {
    "url": "assets/js/162.8fb88f89.js",
    "revision": "ed3a9c8b4e32eb6deb0a244a3b9bf9ed"
  },
  {
    "url": "assets/js/163.6265513e.js",
    "revision": "db99f48ce36562efae66461ee27bcdcc"
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
    "url": "assets/js/180.afd3c938.js",
    "revision": "a766a22f1b87c9837ab17f97c3ec0c49"
  },
  {
    "url": "assets/js/181.86534aea.js",
    "revision": "a1cfbdee6e3596d03790c3f0fb4ff018"
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
    "url": "assets/js/191.79cf3327.js",
    "revision": "915d5517092f14e6edc3a86e3250613a"
  },
  {
    "url": "assets/js/192.ee90f507.js",
    "revision": "f1d6f88da506f20d71a86a4951f806e1"
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
    "url": "assets/js/199.c161b97c.js",
    "revision": "da0382befac5be9b7c907d2836c964eb"
  },
  {
    "url": "assets/js/20.bd97c877.js",
    "revision": "96df7e8b2f1ca95f265b88eecb9dbcf3"
  },
  {
    "url": "assets/js/200.7b615821.js",
    "revision": "3bcda8f3861d0f4c688b93b4c1b61200"
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
    "url": "assets/js/204.dfa2a874.js",
    "revision": "c9509fb2a3d4c7a9a37e751db0960977"
  },
  {
    "url": "assets/js/205.b0cbb091.js",
    "revision": "d0317011983ba84175ac14985a1e4fb1"
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
    "url": "assets/js/213.ea6ff6ef.js",
    "revision": "d8d885e14bfbf85aa613a63e8c9ce7be"
  },
  {
    "url": "assets/js/214.26309384.js",
    "revision": "f8480e438c661b29ec0095acd41ceb74"
  },
  {
    "url": "assets/js/215.206b05ab.js",
    "revision": "cedc0aa2183cb37a8c3146c3af2a7f76"
  },
  {
    "url": "assets/js/216.95d44593.js",
    "revision": "918ed65ce754882e41c050d9be803e1b"
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
    "url": "assets/js/226.a7c1e3df.js",
    "revision": "ca76160980a318d848f82b0b88bc6925"
  },
  {
    "url": "assets/js/227.75a07d7f.js",
    "revision": "0bdee41036a847d88a6f1f39b0716c6e"
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
    "url": "assets/js/234.6badf9b5.js",
    "revision": "8caafb86f6ec325322e1ca437d357cc5"
  },
  {
    "url": "assets/js/235.2fca86e8.js",
    "revision": "a3ebc8089c6673dee5747d5dcca68715"
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
    "url": "assets/js/244.e316780d.js",
    "revision": "0f7ca7a20db9d53683492ad8869c0fc5"
  },
  {
    "url": "assets/js/245.942679c3.js",
    "revision": "22ccb748c376c7e151e0fc33ff2a1d89"
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
    "url": "assets/js/249.01e13c9f.js",
    "revision": "3a0b30cd6d874ce2ff6e804f12c5defd"
  },
  {
    "url": "assets/js/25.a330b5aa.js",
    "revision": "046bd591cefeb9ee2c972de4309995db"
  },
  {
    "url": "assets/js/250.925c9d6f.js",
    "revision": "16104477eb92542acfd81f4e7edb5324"
  },
  {
    "url": "assets/js/251.c2998704.js",
    "revision": "3ef05b68a60deb80f73dd033e628332a"
  },
  {
    "url": "assets/js/252.1ec58896.js",
    "revision": "5483941c577d857aff24967b43fca6a5"
  },
  {
    "url": "assets/js/253.645f3626.js",
    "revision": "469ff7ce86c80865d6426772bdbdd105"
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
    "url": "assets/js/261.1aaa1bd8.js",
    "revision": "7b02f5e1170a983de426849b17d0ad8f"
  },
  {
    "url": "assets/js/262.9eb9ed7a.js",
    "revision": "b469cf4d504ae29660cc748c78c19070"
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
    "url": "assets/js/267.b57c3020.js",
    "revision": "6e58ab94d2b3d7bf5c4a7771613f5611"
  },
  {
    "url": "assets/js/268.549f6881.js",
    "revision": "37b27f5c8915fc4830c19025d55fea23"
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
    "url": "assets/js/280.af75222b.js",
    "revision": "9310302b65886ae0220d5e2c99c7e853"
  },
  {
    "url": "assets/js/281.b9729b84.js",
    "revision": "7fa9759936a2a3eb57868c15e0688d28"
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
    "url": "assets/js/30.7628063e.js",
    "revision": "8682c52559234e20a20ba9b2f340bcc0"
  },
  {
    "url": "assets/js/31.d4353e30.js",
    "revision": "d2654eb7e6baa2e1338179edfb6bab75"
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
    "url": "assets/js/62.bafb0bef.js",
    "revision": "6c2a43f2a45534cc41970cadc7695192"
  },
  {
    "url": "assets/js/63.92939e63.js",
    "revision": "3c35f72161c60071e1f97ec8b12f56af"
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
    "url": "assets/js/90.8141d67f.js",
    "revision": "abcbbeb24cc6b775145b130774c01231"
  },
  {
    "url": "assets/js/91.5090bbd0.js",
    "revision": "6ed66ca64e440521ca5f2e79641e444b"
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
    "url": "assets/js/app.d93ab1b6.js",
    "revision": "5a4dffafac2c9aa8470d4105dd05c073"
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
    "revision": "fc26702a206a363777e6495dcc75f2a2"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8fe55c278f9edf7f78f7f5419f058c10"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "22cc10ef7a1ea81ef883c06f0ba509e7"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b13f6bbd1332f409b797f744dadad61f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "d59c2f2bd9702775a2de272c3fa32a3e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "155fdc4a10cddcb5d3f83a322be57110"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0fb5b00000f0113177e65a8fe45dcbcc"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "96b226c093289d4ddf37e5b3ab892a95"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4b0c85e66e98d6c459afb825fbf76b23"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "48d5d111770ede4daf60578d8637314c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ee8c384c3950a837c935121eb4642629"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "0c08e4abe3c0692ada01ee80769c6a7b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "84c39670962e2b10db6a7742025d89ee"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "212462ac87c9e68dc8c7287178e5e371"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8339142e3cabb7c914dd6cf377496351"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "bd9d04b3be361b8ef924c2938ee2010c"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "f1532b28dc5cd8190a5c6f52371e1cf5"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "cfdba5438511001f06cd8a526a4ac920"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "1644be888e56588a119380340d4b61b3"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "92db3c3a71a0028ae5db2be837d2ac49"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "05c6f3fa2e857909b083b634f8d2484b"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "234f8815d431289aef81aa28795df3e4"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "db44a88da8cd7fc567eb4c846b9fcddd"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "7eac8dacf76d293c87ba78e9606cf17d"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e280a3f93f33310f4d1fd6bcb709139f"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "7d35e3efb9edfbc9372cff0f192ef4ee"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "8169f58a8dc5a1ddcf472607b161072d"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "02e22b98618c0880eecce85b763a6033"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b0752194ac1191e2fe20e65f3079988e"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "fc088f2c7aadc0fd81aa725d5b1eacb4"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "3e73c60bd01087bf2fade83999c08e16"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "65c81e3deb4f475807c600f600afe849"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "de78a142c3545a53261954352100e857"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "51879cc44294d97503d741099ac2fc44"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d596334e6bb69024d8500f4b25a52125"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "2723341d910872dd43552c347514fdc4"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f8b6fedff53dbec1c827339003588eb1"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "5b4c1cd19e8b71ab97b819077eef7e74"
  },
  {
    "url": "basis/index/index.html",
    "revision": "032d8b286af9f1b68d0c6ebdc6ce552b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ebd2508d352ec2b1604c547f088cbc0f"
  },
  {
    "url": "book/index.html",
    "revision": "c2147b22d5043b7fa2006b9e490d6354"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "637cb9c199c231fbfc069c0ac0445a1f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "b49735ac3ebc07b548744af69a0a4b5a"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "3130576d91473f4af95460fa089ef884"
  },
  {
    "url": "c/audio/index.html",
    "revision": "c70a96eaddcdce5c0a1125a16b1b2d15"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8495331116d1ae2a69086dfc25d74aff"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "23f7098c87b64284c51a85180ac7afa3"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "50564b06a483755f717dc2da40463376"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e540acc44494bd931ad465b6c1a58c60"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "0da01a01904e75f0a015a0d9993ccf15"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "aa107aee60234f9b8ec52e30b0134eb9"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "ad1d9393efacadd4c15268d2d0660e60"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "99ce1396586ae1da3990395ed8076483"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "9f9e1a66590ad8f0d248d1f0f3884707"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "6eb15efc87d0d62797c4294637eaad64"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "5d1ffff07cf3f14163a15d7a80ff9c85"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8f3ff4bb13e19c56e3d528513ea9ec91"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "18c1c39738c00648e53986216a042114"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "fbfe165b2435e4a20520ee3df6e80697"
  },
  {
    "url": "c/program/index.html",
    "revision": "94e611d8dbb231fdeab0ed349aea0e9f"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "627f7b373699ba212c79bc1e51cb08f5"
  },
  {
    "url": "categories/index.html",
    "revision": "746e2a0c36fda4413668b22c458ab78a"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "aecdaa04c79ca525d2124f23d1d4fda5"
  },
  {
    "url": "figma/index.html",
    "revision": "02ee4358c3d0419d6ce924c61fce51e7"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "2b3a0e37895b49b9a02d1aea8221c696"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "b13a9dd8dda9577e78f1cf305edfa8e4"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "e9a1d647b9e4f1a83fcb12315069e36e"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "01c5783e707795501316f1730ff58434"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "357fbe2cfbd8eb88467fb232355a0a7a"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "25f6b2f5f40fc9e1514941bf0c280483"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "eaa9b5ed2cf2a6a17a5b1902fd125200"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "1a2365aba8892c0a9f5fce35f3f7934c"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "1cd95e09a3dc036fc6874b1f5d651547"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "f4436bf2a3df53ade1ced139b8320967"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "e7cdb221fb3bbc9b5b1c3612cc0a4ed3"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "e996339198fcda5ec5961fb479803d00"
  },
  {
    "url": "flutter/index.html",
    "revision": "dd9a1307bae4febbb53bc63ac7f5cb62"
  },
  {
    "url": "flutter/point.html",
    "revision": "f8b4b3d9d41cfc8d4843c3048879e168"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "444eb2280e3d569eeebcd8b7f78b4087"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "443237fcf7011b6196f373d6adb34ea8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0c314df6ad32490235abfbc58d589b92"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5ddbc7c7a9ceb64e39e5e64ebe4c1916"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2dc91fdab5c5393ace917c60cffac99e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "948570b34e0d021c97022d16437bb18c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a48dcbc684fcf73476b9bd3b2a628fe9"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "970d318faf9c69275b7c33ce98338b67"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e976a1afd80d8bac2c3d03b2566ddd4a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "27115f3ae7f2b9d2e46d644150e0bed4"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "17ba8495c14e20a5268ef70e70d28862"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "97f2519b649dc34ef4797f026df3b517"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "4b348644612aff5349db15dc7fd1cb43"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "385afb70734c097b5963a9d8cf2777e5"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "eff251b9881f77ae6d31ee0f011d51e0"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "11ba8b2519ed48ad37ec2473cb2e9b48"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "84e8ccb5ce41cb59e1174d826dd106ed"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "1b0e32b78d481c8b9bcd3ae4fbb84b6c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d89b25dcbdce78a8dc3ff1e13da0e192"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a0a2c9786234999292eeeeba91d8344b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0a76a23769964cb6f1d8dd81686bf57b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "2000b038d36f47a954bc16cf85a7ddef"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "703e80c578799cf7fda0e50ffe5ed40b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4bf9951764d18f8cff29446ab2bbb155"
  },
  {
    "url": "haskell/index.html",
    "revision": "c748f12331103ec5ebbd1428e500ff4b"
  },
  {
    "url": "index.html",
    "revision": "2011fe2e81434b6ec73bb13a43faf46a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "48c0c546abf7a86e5c7a0f9383b68a6f"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9d57bd95e26fcedea37b57775c8ad7c5"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "bc0e6139c82a44fda290b78225a49096"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e907e847c42e2b2de396818e39699e61"
  },
  {
    "url": "python/index.html",
    "revision": "0110dcb92fd69a1298e62e72788a0b00"
  },
  {
    "url": "python/python-ase.html",
    "revision": "02a11dc834ef4a6483f7bc718221acaf"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "2314bd45bc4e168b4b25407a67a2eed1"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "60e731c9996cd6e3d4f45d0b79b8c021"
  },
  {
    "url": "python/python-file.html",
    "revision": "bce88e5aa63c19f41cb8226c6bd2aa3d"
  },
  {
    "url": "python/python-function.html",
    "revision": "e86d1a41dbd20b0885eb5daf224065c9"
  },
  {
    "url": "python/python-generator.html",
    "revision": "76766b5ff5c3d5a7096a17f3dd724b6d"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "647a19452ce30d137e41093124ef01fa"
  },
  {
    "url": "python/python-module.html",
    "revision": "aa1a4233364c9cf21d2b20afde8acf78"
  },
  {
    "url": "python/python-string.html",
    "revision": "5027e20c832c44892c35ad91dc09e7cf"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "b175c501362dd6af1fa6c082c98f25ec"
  },
  {
    "url": "read/index.html",
    "revision": "9781618508d72cfa34220314fa4616c8"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "95d619ed9bbdd30348490818dfc4ba37"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2a8dda9716d2d2cb6e10ecd9fc2b5ab6"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "254234bf793eed48ac83e87ae4326cbf"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "60f018e2c8e9efe9c7cf340cf679d601"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "af906fa238174b83a1c756b674cd17a7"
  },
  {
    "url": "swift/better/di.html",
    "revision": "867aaf659b0066141323f685f09a4b25"
  },
  {
    "url": "swift/better/index.html",
    "revision": "57ca50b69c473f5ff3d724ff8bf57445"
  },
  {
    "url": "swift/better/last.html",
    "revision": "8fd58ba2651300010f9e3f29ca6cf58f"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "7358f09e7869749c1bc4bf05f4e4f92d"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "57fb708c6f8cd7e6fbf13f74d31c8dac"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "7a6adb646c971932b17b341995016c90"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "3ee379ac6a8c9df06103969ae56796c1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "af25afbe2accfa432f1cf8e8b8f0744a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "385d60bbdec1f899d9ed04079c2384a7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "26e894da2c806f2a308929ff967f711a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "bd2fce1c81e5fc1cbaeff5eb6f627d7c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8c98a67f6252bb64c998ace869ef70a5"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "fcbec3ab27fed970646233ea31c425d4"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "ae53447c8c840732f052939c40685ed0"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "3cd60eeb565338e86710e8383d45e5c5"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "6d9d2c35e760ebe9fcd4752c16b750f0"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "7e871bc4c2bef8e5d574616056d61c3b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "de3b7350ebe737cd7c1acc19bd9cb4c0"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c092342c9a7b99b82db395a95f2eae64"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c5aaae01786ccb59937a74549086171a"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "c7c69f7bdbd31ac27b603bbdde6a94d6"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "f2730934321028114878fc0bec4a2e30"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "06eff1fb13fd80e13681ddeeba22e598"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "2c258d96bb5ef1fff04b9b06e5590680"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "c83ef417f72a73079781367245a7363d"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "c3eb5669c1bf630bd59e0b847fb7432d"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "c08bef4fbebbc314c7f1d5bcab1e4c01"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c28f9fc1140fa61246d725de54279f75"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a4902f5a3712df088393c0be780f1f56"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "f5bff641a2d6e6781c0a26a38ef255eb"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "9ead7d4b649391498910d95553ea9427"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "29c316f6f4af766a8ccd9a00da58e4e7"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "275fee781214ff920ace5c055ffeef69"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "c8da58b3cfc5b3cebed11f8e510e27b8"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "9eb66321c5360d02cc036aa5b0c43b07"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "5f0ea1e1ec8ab9a03bcad3ef811708cb"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "6bdb5ce5b99c13cc940e2f56aed0e33b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "01dba2fa82e875f3fa9df4e1113e760b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "74545d13abd0e1bd38507efa300c085b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ff2cd18d9cf6d9737039d6330d1c31ba"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "41709243e21b986258eab30fea0d6f14"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "1eb59ea661ae600112de96a6100bbbce"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "3a0b833311ef3fe4ebfcea56cf4922ea"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "5b0f484b8d62c05f8cbb069d0e957c48"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "355f1252ab5f63c8bc10ce818ef08795"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "39aee6ca0eda88fd0e0f0b80a741e5a7"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "9062f56efce1fce7189d4aad13d58c57"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "7ff23ba06c04ad9e58b595f22e0a566e"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "94eb27880ae135623861a167bb3ecdbd"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "37cc7f66cc9f1bb6fe55297910d40f8a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c85f6c44f2ea6b7da44e0838adbfbbb6"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "7d928d8a0765d9efcfb87489d8e469f9"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d74c36cb30bc34ed8c8f0093aff6598c"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1df234d54972a1f076a445d28dc582ce"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f191084a3a2bb81208dc60277ad66976"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c534b87e71ad7641c49061fb210d6cc4"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "c0edd036a0ed7a07eaaaebc33f346bfc"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6f984a5a96355f98d368e42fa9bd4888"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "aefbc5123b32378d816779e4729d13f8"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "377892851e4343e03df7fadb40c42c42"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "8a3fc83852019c232a5b58c3f53a8c3d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "3022833cb555502bca06ac598e9806e4"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "191b145253f0be9cae8f56033e599a76"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "7222941f81882ffd70b093e04c92b41a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "6c19204e9b2c66da075b5fb41a9df2ce"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "ff1e3e2ed03718d49a20f78dbd1b59a3"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "fbe3ce9fc5d348814122b586b5de7ade"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "dbb45dee8b4d6df963d2c131294c5342"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f386888f753178386cd51ccb9d0b1c53"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "eea17384df5907ca85348556cab2ea5b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b9db6f0575b7756ef05c54cab040019e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "6e63d1c4c5c343b887ea2ca8673b1525"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "8c0a1dd414b7323f793d6bbef178feb6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "08b13c890e9b486317abb5562a3a3c24"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b056ac840fd405fdb2acf5e1381ceb7e"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "211a7086144d89a86c7f60a41260988f"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "b838bc75946e33c506e696167237cd0c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "f9a0a274b480d59bd22710aafd2c6026"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "5765b14805932d5d14fb67d5dbd61ebc"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "ddb64ef343a3937889147ea56748552c"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b8e99098b4e0cabe656516a00c3c2b91"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6acb27d303b70b822c4d1b50cca9f325"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "05b138091f3a5272e609596af302746c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6a1dbc3e03ee1db18b8cc2d3887fc998"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3889cf1f7485a83a51b979ea96c33092"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "5eaabe21f3ae9b3fb573fc0becdee192"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ed09b1e69789d77f46cc9cda4cc342d9"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9746e20d052045795ccf23711bbe4c91"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e365d89de0384a80826da478fd27a406"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "c46c58ec601e9fc0421b844238c05e62"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c5bbbbe57a4d9a023fa7e237c7ad56d8"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "0746aa27e0557f8090b560b9197d603e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "02e3f4f624c7e9be7addd5b394fd2061"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b464481ebc482e3a66741ea44c7ae810"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "ea0d66f377b4c9a641d5a46e154eeab0"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9295a97cbba1eaf9d94b1cceb3e2aaa6"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "1c29844a18be906b4efc6d82721f9edd"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "1523d53376142c90e688b231382e5ae5"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "18634cd50cc96f0fd0d19c269b7c0c27"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1b227b81d7dd1b7bf874b4d14c5bd8fe"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "2cfb3468a2376a0a9017145078514c49"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "cc9f6ba41c00dec9a338003b9f23b766"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "f2b6fbf006fc3ecd379303c9922c1096"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3de973a7bfc09c0a47455276710b461f"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "1c8ef70624a205f360b4dcba52a0dc10"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "5efcc039f3972b238e569b36948398de"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "b02c0395985627e271fbab0e89fa7bf5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "00da0005cedb8a81b9bd8c9f0aee3c6f"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "c5e5b62cd04e5fa270253dd7eb2c7a30"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "5ad424bc5206263f7e882f02e9821d13"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9123637dbc385b856ae8a3567ad0af71"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4ed7c0addfc932f4f97d099d2c91b0f2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "34a73cbc714e8c06bf26df07d9a36ec4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "49ef5dab715700457884d6cd1ab483ae"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "60f3b323a0e7ed873ca04544f0b983a2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "29dc0630811da03309ca3c4fbcc28e51"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1cc2dfb092e78385840689db6e131c06"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9345e2a6dabeab6011c753aa76539159"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "824355f2ec7477c76df9a21d7f588b8e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a3bed225d69ceaf2869f5814be9f92c6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "84862196b70d01d767634eb2168bdd02"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "84e0bf41cab76e19fdafaca42e9378e8"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1b71d5cb05de747e43633f64a4198709"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "d303866228ab77aea8ddefe18e0a8f5b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b58571b8a44bf9e6789dc28690aa0f0b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "78688a90fb5eaa5324750708c269552e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "9e05c89cd27716a5bdee1030bdee2b4e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "2754e553673596affd733e3c26ddd8e5"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "705d74d7fb0f5f72720ef9bbf57cf457"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "cf74e9479b3313dc306ccfe81112415a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "202aa17ad6214ae3a6229dcbd8374789"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "59b198194f7ff4d31017f379e261c372"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "a335f5b7916ee6057dc6b47898148fab"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "152ace7b62b1fc271d2ad3bbdc1dc734"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "715e91f930f09cec7472dde4ab6432b0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "598cf19be73bf17059599516121155fd"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c96d3299f1d18963126fcd08c2b4d482"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d6a7cad79126244a22fe358b4fa45ccb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c289da00aaf158ac8da022d8218ecb79"
  },
  {
    "url": "tag/index.html",
    "revision": "3dbf1b661001c9f3f52b230e34fbb2e5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fee2efd72c08cac8d17cd5d83c60cc7e"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "cfcd06d2896f1fe18cf3b55486c9c88f"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "22aeb0fffbc1679c968d654088d856be"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "93587e52bb74cb5e4a3e11d9c0692cf5"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "f9a2e89ddd0045b1b1fe4380be6b1aed"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "43f85d5ccb41fc0bc8940232b5e4e3da"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d527862fb6842f838421b5f3516651c8"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "73cdedcb6690f698b1710d1e49caf1fc"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "79b5dfd085b79f8da596d33a0f590a06"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "72e0b122662a83ec7e17a851a65ee00e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "fffaee0d75bbb8d2de45656e6b70d4ee"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "fb0723a1eb4f58041bbbe21fde887583"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "45f4fa587ffd96c5d5cdbe03bf0f9ba5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d488c59f872df3068500c098f137c536"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "4608e1b8bc07e7a7d941012c647457df"
  },
  {
    "url": "tag/read/index.html",
    "revision": "282140df0f9e1535ba0a6646cf00af95"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "5f7fde449bffe3c2119d06af00f72b71"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9148640712dcae1fed1eadc4098fa186"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "6b7a21c99ba5901efc6a14d5e2d58c3e"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "92729e7d74b1f4b17656af2cffd11c32"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "9c16e5e5a7218abb8ca99eff08a98725"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "ca104678e9f710f316cf59f29461ea2f"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "69479b3864e228508bfb24fbe90c6a64"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "ea001be7b4bf6f950817f67367e0244e"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "b366b2dffd612941871ff566eafb8f4e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "73665d4d3c47b9ccde5e665acd3302ca"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8e3ecf99ac8650ffc6cfe01b88fbcc2a"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "44a93e919f2f3d1b4d34cda63e82c222"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "d381b6c833c56ff4a8a05d10a50c5bbb"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "93e218914b33110d90af9b1330d1b7e2"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "b13453a9866872650c06fa93d4deb505"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "3a781b89ef0e38b7e32baa30dd0d6e60"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "6b5ed512d66edff725167269bbcab602"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "f3d37c8608486e458bd12c331347f6c7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7bb6af85ad9c065d782046714c999030"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "09d545d4abc7728ee45d469aa8a941f8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a20663eca981ccc215e5695306c73b94"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "1dac3d63c048e33ca54f42a3c2450afa"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "1253ed5cdb8afe5a1873f7d47253971e"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "20494dd9ccf8e4a18df9eb71a193cdba"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "af7dd155d843210867acb7b0f9b19feb"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "403413c1a220142351ada51e5456fdcd"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "db088669e96737e3a558eb22e0a1b968"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "65f2c4e875510f521f2462079ceecaa3"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "da41a2f6bc02e53853f5e8373db0182f"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "31bad96a8d6aca14393050e808840770"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "56daada7b8dc02f4706d57ee84bec59e"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "72ea08112d72bb22a5036a3215bb6620"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "c496d70df6acbfde74a7c1cd0ac24fd2"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "a134b7c33510ecd59bd6bdc80cd26cca"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "1d87bb2363e51a15fa5d09f7d247341a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b3647c4e96302e4dd105ffb39254f9e4"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "36af2bf7ef765bb1d77265941730917e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "8df946fe59ebf0db7115a6f407a7d68f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cfc3afe360545c3d8bfe825a3470d528"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "5a1fe17b273851bb3bff664b83e82019"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "cef9dbed29a477c19665b1ae050350cf"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "66d4e84bf44ab4f728c72899d7fa0019"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4299ea3ee8884c9e05dfc508a3edb12c"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "bd2d89ce94367b0fff311b3d69abe702"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "3276e65ec76690f867a73446af37b2d2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "8a5bf30edfe084b5338f86b2e931e447"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bce12e52d039000d219c5d094c17a489"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "45fac2c452d1cac991ab519aaa00c699"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "763f4b8361f119685e7365095f77343f"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "c3c924c770e45dbb031733e305b59dab"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "06dad119c36bb9a746e45716da7e9504"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "43f662dabef1cc264cbb162af686b2e9"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "24d6636c70be18a145b71668661124a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "6e67ebab2a1b6fdec6bc5f7e76dca726"
  },
  {
    "url": "tools/docsify.html",
    "revision": "0b21984d494e6c9c1a9e8dc2bab1c52d"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "02514b9bc1c33a1d84b1f1295c1c344a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "6e57135467f2bb1015bdc503b1ac9f24"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "52e454aa658f968dcc5499212afeb492"
  },
  {
    "url": "tools/git/index.html",
    "revision": "14cf112c0f15995dbc599c4e6984b98e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "94b95ef0fcc2ea607ceda4b585ed6640"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "be99e1974e62753b81d43a23bfe8a34e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5f4dc684654adb839c52ca67670630c1"
  },
  {
    "url": "tools/note/index.html",
    "revision": "e0d86078e2a75aba62e79ef2a4837984"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "5cca97294abec393373682a3e0d7f353"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c530968df95fe756f4db9d8537f90460"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a60469eb639641b9b788513f75d9a496"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "89bacea27598188b11691b9e57c15aa5"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "a34286422cc068f381370641ff6258f2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "52aa98d84abf5eaf4e64dbc2222e7ba8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4492ab4d4006b30058646993f2b6c068"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "85a82fe148035dd6e3005398b397152a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ad1b97464a13b91cf0c93e8deabb7dbb"
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
