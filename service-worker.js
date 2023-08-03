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
    "revision": "0c4be2b0e5242d7f48546db5001946ce"
  },
  {
    "url": "about/app/index.html",
    "revision": "83599508d53ab75f51afe18299c7797b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "808bb909b1a7b2d1119c836c30009f7b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4b2bb89ebf14e34e9c381844fca95fae"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7eccb4d9ba89a3cca39be817a5cf012f"
  },
  {
    "url": "about/index/index.html",
    "revision": "e83d0e46e54697bd245427db2c1ed841"
  },
  {
    "url": "ai/index.html",
    "revision": "9d15fe1fa9e5dd95418cef4bed07bd95"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "6d62a8b6304ff43a9bf0b49a9b9ed443"
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
    "url": "assets/js/114.6a39588e.js",
    "revision": "84539483831e4b383d833766af464960"
  },
  {
    "url": "assets/js/115.1edcf006.js",
    "revision": "287c2ec5095e950c7ee373b57d3461aa"
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
    "url": "assets/js/121.0db361b4.js",
    "revision": "da5160bcb09c92f5e6b910f6cb2fe5c4"
  },
  {
    "url": "assets/js/122.780805a3.js",
    "revision": "7aa2302983c982626befe07e70d2e835"
  },
  {
    "url": "assets/js/123.a679e9c2.js",
    "revision": "564a3b614e6837fe2359b47376db95c3"
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
    "url": "assets/js/13.3ed8f453.js",
    "revision": "0a5b3777f6f232d1fcdff5027dc81004"
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
    "url": "assets/js/138.d4945f96.js",
    "revision": "b16cfeecba8207963c0be1a91b33a30f"
  },
  {
    "url": "assets/js/139.da4eb9e4.js",
    "revision": "09e2689dc19cab046c37b8e50bc46b36"
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
    "url": "assets/js/154.c1285880.js",
    "revision": "963e8a8131576439cd8bdcbb256ab4b4"
  },
  {
    "url": "assets/js/155.8db268ca.js",
    "revision": "b788dea221e8f4704a9aaf8625218840"
  },
  {
    "url": "assets/js/156.f5dc5114.js",
    "revision": "5a530cb3b5cf020ea5b58f35461ac627"
  },
  {
    "url": "assets/js/157.cad905dd.js",
    "revision": "cf6f075d1ec4ad217a7ae0194004fe23"
  },
  {
    "url": "assets/js/158.236c489d.js",
    "revision": "d3b51ee16096a228d6b89b630ceef37b"
  },
  {
    "url": "assets/js/159.ec06a27c.js",
    "revision": "e22ec41bb1fa9559e5b4e27f4f04ecd4"
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
    "url": "assets/js/162.19152a46.js",
    "revision": "193cb882240526b789e26135706b33e2"
  },
  {
    "url": "assets/js/163.6265513e.js",
    "revision": "db99f48ce36562efae66461ee27bcdcc"
  },
  {
    "url": "assets/js/164.3cc909ab.js",
    "revision": "469d33ea4e777c180100b9990b8ee462"
  },
  {
    "url": "assets/js/165.2a4db868.js",
    "revision": "ea74f32570f42a2777c89af20eddaf93"
  },
  {
    "url": "assets/js/166.b2145c83.js",
    "revision": "b654a1571184f8f255bad511652c9a05"
  },
  {
    "url": "assets/js/167.86d15c98.js",
    "revision": "049e10f8b31cba3bd79cf0c400ecd57f"
  },
  {
    "url": "assets/js/168.cc5970a1.js",
    "revision": "73fb052f21d42ca523e229b13d868b8a"
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
    "url": "assets/js/170.0e6fbc5c.js",
    "revision": "daf64d5b2bf03757e18f5d934dde417c"
  },
  {
    "url": "assets/js/171.fc2ae47b.js",
    "revision": "15ec10740bfc52ed8cd6f22fa301ce8c"
  },
  {
    "url": "assets/js/172.9b537249.js",
    "revision": "2adbabeddf40261e6325489eea9156f8"
  },
  {
    "url": "assets/js/173.de67697b.js",
    "revision": "829a87b2aa60b7d4f9911f16e6ace0cf"
  },
  {
    "url": "assets/js/174.1ff45be9.js",
    "revision": "208a10a04890a456479d1732f05aa1a2"
  },
  {
    "url": "assets/js/175.503a2134.js",
    "revision": "297e9fd5588ddce702e12e748ff6e403"
  },
  {
    "url": "assets/js/176.7ee63f4c.js",
    "revision": "3b6ffc459a850ed4b072be19a2d37826"
  },
  {
    "url": "assets/js/177.66c074c6.js",
    "revision": "66d1e4bcf6470c8cc1459ca7c5f28f3f"
  },
  {
    "url": "assets/js/178.530e5588.js",
    "revision": "573b3b15bf9f596cc381b2eac5b22bc7"
  },
  {
    "url": "assets/js/179.13dd1a32.js",
    "revision": "3ad46740385947435016a6122eedd01b"
  },
  {
    "url": "assets/js/18.0e9cc935.js",
    "revision": "64c21d356c417e769abfb868f87689d8"
  },
  {
    "url": "assets/js/180.5f532db1.js",
    "revision": "1ae7a8950f6b19864abaa7a3b37d60a8"
  },
  {
    "url": "assets/js/181.86534aea.js",
    "revision": "a1cfbdee6e3596d03790c3f0fb4ff018"
  },
  {
    "url": "assets/js/182.60a1c534.js",
    "revision": "33ec37f74496f1a3f4ec11f865b28ef6"
  },
  {
    "url": "assets/js/183.9c73379a.js",
    "revision": "230b70450d90ad4ac3a7b864dcecbd1f"
  },
  {
    "url": "assets/js/184.6adeb409.js",
    "revision": "d34dbc682cdbd14c88d9353f8c434276"
  },
  {
    "url": "assets/js/185.985b7c1a.js",
    "revision": "35044fb12a19b7992172728a0ba83561"
  },
  {
    "url": "assets/js/186.9c93922c.js",
    "revision": "9b5c556e746bbe6524d84fb776a3cdb3"
  },
  {
    "url": "assets/js/187.13e997c6.js",
    "revision": "41251e36ca3869c271a476dc4762f643"
  },
  {
    "url": "assets/js/188.9b102859.js",
    "revision": "bf1eb8113a5fc1275f29140cef698a2a"
  },
  {
    "url": "assets/js/189.f203a14f.js",
    "revision": "51e34df33d7284034b620cf8ef0d3e20"
  },
  {
    "url": "assets/js/19.dd180768.js",
    "revision": "034879c4c33ef30d056ba240f30b9c86"
  },
  {
    "url": "assets/js/190.310c30a9.js",
    "revision": "8518fe3303218c655b01b6b55514a69a"
  },
  {
    "url": "assets/js/191.cb5f67ed.js",
    "revision": "743c418bd9abc5d3f6999e36e0c20d9e"
  },
  {
    "url": "assets/js/192.ee90f507.js",
    "revision": "f1d6f88da506f20d71a86a4951f806e1"
  },
  {
    "url": "assets/js/193.46876744.js",
    "revision": "7b43e5a254dd85754040d1572ca8ad86"
  },
  {
    "url": "assets/js/194.9aa5efcd.js",
    "revision": "899204944f72afa4a1a7fe19d3e41d69"
  },
  {
    "url": "assets/js/195.0f1817e4.js",
    "revision": "292c0e09e544968310e38421b167e276"
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
    "url": "assets/js/198.1cbce185.js",
    "revision": "05a404590907069ee317c0bbeb0f84e4"
  },
  {
    "url": "assets/js/199.383614e9.js",
    "revision": "d0df85056c2c8c58e05b70aacdb2e9c8"
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
    "url": "assets/js/201.8e614e45.js",
    "revision": "1a77b5df89b46bb0c37cdc243db8d264"
  },
  {
    "url": "assets/js/202.1dd3fbf1.js",
    "revision": "c4c313eeba99859a611f10d60d1c1023"
  },
  {
    "url": "assets/js/203.954c7aa0.js",
    "revision": "188b7505a7a9ac0181520441fc6ab279"
  },
  {
    "url": "assets/js/204.d847f366.js",
    "revision": "8925adc3875627c1912a71bcb1531296"
  },
  {
    "url": "assets/js/205.b0cbb091.js",
    "revision": "d0317011983ba84175ac14985a1e4fb1"
  },
  {
    "url": "assets/js/206.dc89851f.js",
    "revision": "16a339ac9206c479aee8890518da9062"
  },
  {
    "url": "assets/js/207.ce0319d4.js",
    "revision": "d5c39182188c68d3385b13f84eafe5d0"
  },
  {
    "url": "assets/js/208.8dafe3c8.js",
    "revision": "ec5feb8b2986f4a27e320c7c6258e031"
  },
  {
    "url": "assets/js/209.96c55a60.js",
    "revision": "389f237c7128a25d05b1440fed1a5e74"
  },
  {
    "url": "assets/js/21.1aa947ef.js",
    "revision": "e89286d7a0513304db81009d523f2766"
  },
  {
    "url": "assets/js/210.611deef9.js",
    "revision": "a3b0120a93595283cd5f1ac1bd4d414b"
  },
  {
    "url": "assets/js/211.691eff8b.js",
    "revision": "3d6492a6cdc50e3b3ab6e84fa3886784"
  },
  {
    "url": "assets/js/212.e6c28944.js",
    "revision": "9eb6e3fd5b1c21de2daba262cacf18fc"
  },
  {
    "url": "assets/js/213.42223a08.js",
    "revision": "a37ae4cfbdd4c7a7f8447de6a429ecac"
  },
  {
    "url": "assets/js/214.26309384.js",
    "revision": "f8480e438c661b29ec0095acd41ceb74"
  },
  {
    "url": "assets/js/215.0ef4c4c7.js",
    "revision": "83bc58363cb1b0ca49cd35f48d633479"
  },
  {
    "url": "assets/js/216.95d44593.js",
    "revision": "918ed65ce754882e41c050d9be803e1b"
  },
  {
    "url": "assets/js/217.31d774ea.js",
    "revision": "3c98c517dc531f7784046dfb2ef5948c"
  },
  {
    "url": "assets/js/218.10847e83.js",
    "revision": "dbd6be3252162eb98ee2ada37f13ac11"
  },
  {
    "url": "assets/js/219.8cf73fcc.js",
    "revision": "ce5f768ead670e373a44bcbd2f77326b"
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
    "url": "assets/js/222.203b230b.js",
    "revision": "7d74d28e48ce69dab96ca5ed0cb97d57"
  },
  {
    "url": "assets/js/223.b866896a.js",
    "revision": "e2ce8568d6451c10279d4c16ce871487"
  },
  {
    "url": "assets/js/224.eb4e55dc.js",
    "revision": "ce3e8a06d2c7cd23d77be6384c2b7b6b"
  },
  {
    "url": "assets/js/225.760af2a1.js",
    "revision": "006719b214c62eefd3bc3a477889f2f6"
  },
  {
    "url": "assets/js/226.b18be134.js",
    "revision": "b94daafd0ee9cf2f4853740fefeb291c"
  },
  {
    "url": "assets/js/227.75a07d7f.js",
    "revision": "0bdee41036a847d88a6f1f39b0716c6e"
  },
  {
    "url": "assets/js/228.bbbc96cf.js",
    "revision": "a90d13408b942a1ed3bb962c4699f3a9"
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
    "url": "assets/js/230.593294df.js",
    "revision": "c3d08cd032d9d3ba73530ee5de03988e"
  },
  {
    "url": "assets/js/231.aef6dee1.js",
    "revision": "61bef13cfa7e18995511b64e0202aebd"
  },
  {
    "url": "assets/js/232.e8b72444.js",
    "revision": "940da1d709873c357632611184341fa7"
  },
  {
    "url": "assets/js/233.0633ad48.js",
    "revision": "ece2408ec558db792fa069d5299d82a7"
  },
  {
    "url": "assets/js/234.65d78dd8.js",
    "revision": "1a3797f75accbe2696349d1901e3ead2"
  },
  {
    "url": "assets/js/235.2fca86e8.js",
    "revision": "a3ebc8089c6673dee5747d5dcca68715"
  },
  {
    "url": "assets/js/236.839cddb8.js",
    "revision": "e7c02525406ea2daced4ebe29925e9b9"
  },
  {
    "url": "assets/js/237.cc54b9ef.js",
    "revision": "491b10385c0da2f2cb1c8b90df98ef54"
  },
  {
    "url": "assets/js/238.598481bb.js",
    "revision": "6c9916d2e79fd981e5b01510ccebd32e"
  },
  {
    "url": "assets/js/239.635d848b.js",
    "revision": "0d55cb5bfb10046b46971456a4964b69"
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
    "url": "assets/js/241.36f68689.js",
    "revision": "a3552ea4a4ef766178a6f5334de74487"
  },
  {
    "url": "assets/js/242.b83aa64f.js",
    "revision": "b6b5ead1ca97c9abfc5d2326249b42b3"
  },
  {
    "url": "assets/js/243.7bd775ac.js",
    "revision": "7cb8a56bac1c5a016a6b860e2771130e"
  },
  {
    "url": "assets/js/244.dd1ffb58.js",
    "revision": "54a5ac483c7063cad21b13bc093364da"
  },
  {
    "url": "assets/js/245.942679c3.js",
    "revision": "22ccb748c376c7e151e0fc33ff2a1d89"
  },
  {
    "url": "assets/js/246.1c24e022.js",
    "revision": "18d42618df083b42f7e532bd4c4661f9"
  },
  {
    "url": "assets/js/247.8139e390.js",
    "revision": "0f5dc4691dc5ac689ce82e332ba4e775"
  },
  {
    "url": "assets/js/248.00a9c42c.js",
    "revision": "775a768b94b1ab762be94aa36d5bfab5"
  },
  {
    "url": "assets/js/249.454c8147.js",
    "revision": "5d8d8ad89fb203355c4cfe9e0308edfb"
  },
  {
    "url": "assets/js/25.a330b5aa.js",
    "revision": "046bd591cefeb9ee2c972de4309995db"
  },
  {
    "url": "assets/js/250.ba28db95.js",
    "revision": "f0a67c77a979f9ba0f6f92bae89b3162"
  },
  {
    "url": "assets/js/251.1e680b84.js",
    "revision": "e2f2d5845a8a1b2deb0d84e82c6b300b"
  },
  {
    "url": "assets/js/252.1776e5c9.js",
    "revision": "c110702e49f22e66fd481e0153965c1f"
  },
  {
    "url": "assets/js/253.7a23443d.js",
    "revision": "7a3e52f94b510ec8f2cb6af82b3b12ba"
  },
  {
    "url": "assets/js/254.113a972e.js",
    "revision": "01b8ed180baf120b73834016925e9a33"
  },
  {
    "url": "assets/js/255.807bbc47.js",
    "revision": "fad0ed36d41efaff19a4368a72ecbb5a"
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
    "url": "assets/js/279.f4939955.js",
    "revision": "e2153f27c36e30efa93468a829aa49e0"
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
    "url": "assets/js/288.bafaa09b.js",
    "revision": "99a10c6551982ab5100bb6965d7f1335"
  },
  {
    "url": "assets/js/289.5f815481.js",
    "revision": "120c5134537c61488f7f9d2ecb4e3e38"
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
    "url": "assets/js/41.e6e136eb.js",
    "revision": "28716ce75ff839ca9d9419527a194906"
  },
  {
    "url": "assets/js/42.1ba6c028.js",
    "revision": "3f9fd6a2b2f5632a90e0efd6ce307ad1"
  },
  {
    "url": "assets/js/43.faba3b37.js",
    "revision": "2295c3dab235a59115d640d243100690"
  },
  {
    "url": "assets/js/44.7c6d55b2.js",
    "revision": "7f5207a3d8ed414dbf0cb7ff95f5651f"
  },
  {
    "url": "assets/js/45.8cb6dffc.js",
    "revision": "b1ce0a4c55859f854552b44aa6840f97"
  },
  {
    "url": "assets/js/46.7c1f344d.js",
    "revision": "6de82cfeed73252c23b26db8a2cb45b4"
  },
  {
    "url": "assets/js/47.60764d0e.js",
    "revision": "524875c31532e7dffe80211a1c02d83d"
  },
  {
    "url": "assets/js/48.928e6697.js",
    "revision": "5a460eadf994c7cbb4c8464f3817d423"
  },
  {
    "url": "assets/js/49.50160f19.js",
    "revision": "792cabceba63db99c316f1e5be180e65"
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
    "url": "assets/js/51.e8b5652f.js",
    "revision": "39e0724356a5522b7e7d546d45f0c7f2"
  },
  {
    "url": "assets/js/52.5cc6ab4d.js",
    "revision": "b9ce6012687a92e08902a71b228cdce2"
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
    "url": "assets/js/82.270845f8.js",
    "revision": "8d9d2145cc327988d46c8e788ceb0b65"
  },
  {
    "url": "assets/js/83.cb8ee672.js",
    "revision": "81b460ab565a5cde92162c9a1d396f29"
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
    "url": "assets/js/94.0a8b0969.js",
    "revision": "7d43186d7fd6817c578fd019b4aa1340"
  },
  {
    "url": "assets/js/95.f1d44180.js",
    "revision": "0c7ccd73b1824f5a4b08c3f303805030"
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
    "url": "assets/js/app.7f184770.js",
    "revision": "07e45a08f16b2ec998f2077be565b5f2"
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
    "revision": "0b048d3b22612f4d6ad18e4e0afa7a54"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8eaea08a88d3007e37217e4aad4b01fb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f0b6a11836393649201b9508eb0939ac"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b6df846abe9809cf5f7e82922ad4de93"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "08f36bc72d35a31781973192219b66eb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "279ab6fb0b20f83f97d45d9f46b0c34b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "deebc8a6ea7929c7a89e0204a2f107c4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2bf0ef7b933edd25ad1b331af8e645fd"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "203400890adf6f4c13c477ee19fcce92"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d4306e19219f481f2c639516bfb0de6b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "46170f4930d721472de35d304e93a339"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "4409d3faa37751b03470ca21e69d45a1"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "a1ae519de061695d95d5483b70ae80b2"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "f544b703fd44c7019ee743b3818f3f1e"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "5ae4d51cba0502dc48766ace4c784bd4"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "fafbe2518011a8fc4b439697fd3eee3b"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "6eb8453c6cd8c58b7c23af4e37d9ceb0"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "1a92fe50070d814c04b7d7854067eb26"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "ed308c186b17875386b657d6b44ba393"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "15581b5c033f208461b6c15a726a8fbb"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "e6bf6174db1b2618876ac740a665fa74"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "168cebdd7e9c28379f70766ca9b1f3d8"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "7a84543c4c2c1b2867f4ddbf07763444"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "8b8b6227e1f989031394ef83a36e53f0"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "8ed51b09ef0a46db5de8885e40f86d9a"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "b9e0ad8b7912850621e346577a5c7113"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "ab7f6c5ea55b75c80e37624e2a4d3412"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "35399a741040c2981f71a43180230707"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "38df1db0e6ef25c801bf1595a8f10ea2"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "30f3a0889c5645575b9a12008774395e"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "d836b683a63a433df3c20def3695dfae"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "1610648fb489c6a26fb8dae10e7993c1"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a68d5e576afd0dc669e39c4843a161a3"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "95600c7806447329adbba0b5443e5e4c"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "0f90a5f9f67bc398775a7ee1a6a7cc35"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "ee0e698cd0ae4a537d3fba26ad62eebc"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "100f75ca8c1844b64a81861cfdf2f389"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "5154f594f806db38f26197b3210f1045"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b7cf4207ee01a70af9c5ad1bfb2ee333"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e00dca12c71b86427732ad23eae2e60f"
  },
  {
    "url": "book/index.html",
    "revision": "5c8b643c3e1c74229b35d451a0884c5a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "838e9abd25becc33c9ee7fb6f1735c9c"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7f0f94f96d2565832117f9d7d8b65192"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "2cf78fc280274a63db40eb51cfde2f6c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "5540eb3d161ce1a4f21976db9876976a"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "aa14b2f22e340a9f6bf670bca9fd9648"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "ca0d3f90fa2745be9ff78401a873fc21"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "47fdb628b00a35dec00dff77530fd9bf"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "317640a01d5829b9627b9d99e51785a9"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "445281e42305284174997ce6eee88228"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "c1b92a5050de4f8c5d9dc6492851add3"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "daa4e896baf711d288d596676a65584a"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "b4b5f6607499951a54104f2d3f1b0c0b"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "60967749dcfe5fb7e1cb490c4726c0f2"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "22cf133fc829fa7d2487db3d03a8eb98"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "a5077fd23dd838b6a4f66beb4b9a0265"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "37f2afd75912bfa03d5c816e5b1ae042"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "49676010de33d290791869977c065d75"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "1f9b9f325e1852ea1404fc924de64e25"
  },
  {
    "url": "c/program/index.html",
    "revision": "6650fd81fb6027b43b9656d5ea2565bc"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d461b27481775f41e66104f22a72605f"
  },
  {
    "url": "categories/index.html",
    "revision": "4804b3b1b868483e24f0da8c38e32c5f"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "74d6180546c007771cb6a7f0f56eb52a"
  },
  {
    "url": "figma/index.html",
    "revision": "79a87b18158dcb4e3bf0cad536842eff"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "6fe5abc3358f06d5e74dbad13f66cc66"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "29639283ee7f2a9156a8b8a310e7a931"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "b6b778da040eacad9d747cc515a24a5e"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "33846f8673746075c3da6f76c1e68f07"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "d8222d9881c173ed65e715eb8683b3ad"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "35382068e98f10207fc9c7daa1faa8dd"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "fa1e417f197e4ee030048a12041dd1fe"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "1f0d79924ab2d7de7378cacfe470923d"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "2c174c44f2859623efccc836c2693d20"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "d498ff2e8c83a2250b9c4a7b529554ab"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "a59d22f636035973b6e805a4a69f4572"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "b6f9c227d388c6b894a89fadee93598a"
  },
  {
    "url": "flutter/index.html",
    "revision": "57509cc3a76c68c29588855c9f70336c"
  },
  {
    "url": "flutter/point.html",
    "revision": "b31f3b409d98288f25949df1fb72397f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "25ba4a82b465fdc4fe60766e4c8a084d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "dba103c508994cff2d127d1e9c85449c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4360cd507adb22bfd8afeba6c6267244"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c594ecb95042abff233c5e85e62ccced"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0ba5bb6782a0614c71a9b9f0e4ec8207"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "f12e2083b882216b3bd16f4a08ae9b8d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "deab0d1386fb522208a9edfa5a121486"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "372baaa08c4f3654194c4b1dc790589a"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "dd53c5994eda8cfc0a9c6be278f9506b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "fa276c4daac55c9e16cd12bb233dc0d5"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "3d4ec396878a3367e4a85df88311998b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "41baf785f53c9e7c9d871853d9554de3"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0ed60fbdef2663660005e7f338491dcf"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c8d631c74bc551aff66422f3d789bfe8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "802b037552fa2aca50fb78a7ede30b6c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "42dfd245c7e95418c83e70a5b296ef2b"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "582081bd02c293aa521d25ae7fb24584"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c9baa8855a5ae2fb5a625c9148564265"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "da113f3c2618527bf530995ec5a2e92b"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ba06b5bb457cd06fab6ca3cc7d3c8086"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "8bdd0c289cf6d79a2b72402861760191"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "006ca0f0c1d59e934bd23fc74a6954e0"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "ac81285e5f03b09d166a3e4d68687b17"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f62f1f2c2a92bf50b85568cce45f4c06"
  },
  {
    "url": "haskell/index.html",
    "revision": "e83c75ac41057ed992b69594ce1d8e7a"
  },
  {
    "url": "index.html",
    "revision": "b8ef2006a260152f1cd65f92358961b3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "860617666c951632cf897ac8f06883ae"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "685e6c705145dfcbff2986209afec398"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "315e5808d1c43f2fce90e6fd5182db9c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d478fb6ffc9d666727bf9e3b9577eaed"
  },
  {
    "url": "python/index.html",
    "revision": "ca86f04a0052ef34937d5a9e31545b98"
  },
  {
    "url": "python/python-ase.html",
    "revision": "4c4af6664ed58576d97be2988c9cc6c9"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "cae20dae282005059f2bc5bf31d6882b"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "14369afda5c406f0087c7dc4d4e72694"
  },
  {
    "url": "python/python-file.html",
    "revision": "b30a0c89d40fac04799519fd188bf76f"
  },
  {
    "url": "python/python-function.html",
    "revision": "7e7f5f54149bb36cd20b7765e57612ab"
  },
  {
    "url": "python/python-generator.html",
    "revision": "2029417a5fd7237f018fec55d40a6d1b"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "d09ec9175b73e689d8409f5b8810997d"
  },
  {
    "url": "python/python-module.html",
    "revision": "d2b78f80cd126605a9bd154e4464740b"
  },
  {
    "url": "python/python-string.html",
    "revision": "80bab872a9af11a92894038614a299f8"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "d4c386cbbca2d86a20752623d4fb9a62"
  },
  {
    "url": "read/index.html",
    "revision": "157b08e39909de705378723d3002be69"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "976495d557bcc3156e65db9cd7c797ee"
  },
  {
    "url": "swift/better/available.html",
    "revision": "abc9f3aae8b8e99cffd5a6e09f162548"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e246107588ee403d98330b88944d13ea"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "aa36c46b118e0250a883b4e73b78bc7c"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "6aa139b307cadb6edc37ee6d60a48756"
  },
  {
    "url": "swift/better/di.html",
    "revision": "94a4760e18bfaf7979f74de24e1c96a7"
  },
  {
    "url": "swift/better/index.html",
    "revision": "674dc9bff634501b26e21c2f1389a92c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ab193de6efca98d072c520bd215d15a2"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e5ac4351013bcd09b90f95d90c62ae52"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "3f68d4d08f9188b61c386cfdb3594c73"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "087fd9a1a19ef335c776c530526c664b"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "baa8d14448c01f2d3bf5f76f0604b5a4"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ddf1dd64568ae6e83fdca840be02e824"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3203522a13c323d711484377bc574ccf"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "61f24b578b6b542d3303cca2e0e34810"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "8aa7c5e78fdaa2b92a5c63cc15db89b5"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b704e223e800b59bcdd845dcabe13cec"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "970c3657c634838bb64aef6e02805c53"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3640481666f8bfaed309742766c58c71"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8f299f76a9098f346f13dc8ac3306a7f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "a1fe4d1e362cb846e01ad07506fa4e0b"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "f6883c71b9afaa1b2f587759cefd08d7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "dfb4b3f18a56fee5367499efa1d721b5"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "e25179009dcd7a6b93fc3e04512312d6"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "9014706fc2b3285f7735d1b4a7d7d8e6"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "ff9f7e8e4f2cbb0bb30fcdc790605070"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "6b36cd164fd9a06c8a421f3dc25fa9e0"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "514320117b478b0d9f035667ff9ef9df"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "aa5337fbf5400b4867ad77b4fc18f11f"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "6436cd96acd9ecf073d0a96dcfede2b4"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "896bd2e43409c96adf37e4eba977079a"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "c765d47d1d3f5acdba5e3a0d68cdb779"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "404e461f3b06b8c202070fd6acdf2b5a"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "f6d3be3e617c4589d9f73f378b3e27fe"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "6b65d700d79e218a8a89263ffbf157b0"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "3445d62297ae9851a1b8e203e2ad8265"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "95292c5785540b28f86805cb6ec965f6"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "77f3b715347d387ee6a854bd70e4bbf9"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ee4b1bbd9d764d4ed5d47de8738c555e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "80a7b9aad6e6d0b50be42819045df195"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "c1650aacb2e3ecd1e1f19523d95bf481"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0ca03e887c5ef48ba95cdb5d93d436fb"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b1dba4aa42a56672e857af18235dead0"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7c8fed4958159f8098e90567eb6fb12b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b922bd9c81311c6d01de829899ccf27d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c1cff0af2c5ec62145b8aeecee7dc560"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "06b25149bdbee59446ca57df75282cbb"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "a6d6ca9e9c4be4ed40457b8e9cf960ea"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "fcd125c4287b47197d395ce4a5dc4f0f"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "56a8154cee1ed44abad41221570d2e3a"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "3ae341b271a62417605aeb6e722a8528"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "03a99782f48b73bd21cc595a566ba2db"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "4ceaa0d87e96115c813db61f465bd528"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a3b94f714bd5010f9636de172c3a42b6"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "24c9f9438696878c3faa7ae5df6befb5"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "131c8e3f5955f027afc160add38ee7ea"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b59d5f850b61e0ecd4fff02cf72fcf6e"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7847f79e294b6bd1e5567f91ebde8040"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b3a94e9a2c6302e173c92e6756357b6f"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5b627eab01c4d344b69560356d186ec8"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6f4bfbd66a56cd3bd1d4b6d552991bdf"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5154d4fc8cb2831fab31d7a43d01b38d"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "82fea7cb1a1fc2c0edabd9c2c71228ea"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "1ffefaad0c68da641888fc4ae2ed665f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "cb8b5b191f34266cc67d5f6e46f75297"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "7e99ee87a99fb4a406f8f7911effea39"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "ccf8c87b2432cf3345f82ea8d4691bad"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ca9595a57397c631af80dc0c28291365"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e94953c7f15518803c08aecb53ebdda5"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1fae2fffb62f937d99bd1077d1e9eef7"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "680253c7744ebc43de35899ab0f89b8b"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "97ea75a423a520f0b5c0553a69f99e87"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "052120fece08eeff1a4b0e35aa04f6a1"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "a37e3e8c118f7db3ec3043204a5b4efe"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "2fd8325744079b9e7d98895e3e2938d0"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2451220bf3cb773141eb42ac5433b21b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f025d71677e54aa9756ace394ad49ad4"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "55e03f9fb1d9e17b17efcf4dbe84a628"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "1a185ca55db9fb259a29eb61aef3edf3"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "3c5bbdfcc3a5aa03b1b5e58f9846a547"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e35c4b4941edbd580f1580199d280b60"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "df64c1494e81be8842a525c257c87aba"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "0bf2a80a9be2622c441d380926685f5e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6da423ec7cee994e4f0434ddb301f17f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "0288fc89eb9fa660923273ac18d385ac"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "672532137ca5a236fd49825e794b148a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "cd17fe593a589433a986d0301f880ebe"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "3eb1549ffc5540974ca1095150c6e291"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a1df25a925cfe44786a6a4b9b5bc3037"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "cb0f971213531808b9d5640da4b91dd8"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "b755e755ce43282b02956d111d12b519"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "5d2b45a0b2ca926f59559e8845aedbc0"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a622f2a2353688d683a9a9f3e525c93b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f3ad00bc2deae591183b18b7bceb449f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "cdc7a0ec2b08681a4acbeaa2ce0fecd3"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "0803729a4481f84a2528171495e3ff12"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "8129cc878faec61074ac0bd8b1fbd8bc"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8a41ae0bfa00f2ab5ccb8fb4664c2866"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5feff198111fbd2f0c7c2a9d7dc9ad45"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a392d94349228aa11b354239e6c7313d"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "cb3b751f383ad582d1d1c2ca01fbc90f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "287c6b54adf2c02d71f4aa58394ba6aa"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "4a9a29a57fe03b1d2df30e65b6e803b8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "a9f92db9358b1aae41fe8e4b4ea91e81"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "77d95d0da7b43d1aa9c2e3c8cf066440"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "b3b3ea820effe90fc4ae58ebed0a2a67"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "c4cf3cf74b2d81c1365a5e1b877391ee"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "8b58c9bea9a975964d5c0732feedb3a9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "da3ecfc9f3ea8eefde6ec51e4154eead"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "cce37e758fd531a486407690abe990ab"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "f8568f6056a98edc0caec1b49499e8d8"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "c1a0e5cecf43abd3420000d481f07894"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "5df65af6c06d47290c98b1252c2a9c7b"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "ece5683dba78ffdbbfe0a540e5cb06eb"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "9fbceb3d7986ded37646862c235064a4"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "aeccb0df9796ee7e0742f8086b1d4c9a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d5b04429ca0466ab1ce5420caebc0d80"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "44b05ccdde03fb12d87b798757c13249"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fc0e4f4cc7a745b40338470cdbec0368"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a2a90b9e95c4e1c939949488ddd081ce"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "08ab6145a2cf61a9b6843a385ea159c4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b02aadd3c1182db75940a92d6862ac70"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "1fcc07fc5d16762e1d5a81d988f45f8e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "0592935ff5eededaf9870eab1c3917c2"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "73250817e87eb9b85debbf8d4b02ea05"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bde20378b49942613d1b546602961446"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "15dab25974127ccead8e39dcff7fc190"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e11bbadcc4400f5f3d3f44674411a243"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "be1b4b0b13135d1fe4c88c69355afc90"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d98a36e36385b8072629e47d8d85adfe"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c3debf3d5c85dc1b751d30c88cd4c8e2"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b8b2a1e1d7c74ba60b9eab122d3708cb"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "fa867862da56b84a03a7aba6a554757b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "8a53862f8fef1454689b56cbf4be4b8a"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "0e81da94701ebdc6bfb4595630080f2d"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "14eae2a9ad63c907b99d92fca16eb68d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "fe91e56d1b09d913f43b6e70f5b21055"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "bd6d96c4c17bc900681a30c78ba2559f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "7838ded2ee924d0485677f8d2e6af2eb"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8b103e6f0e915d8a64e32b123ccca0ad"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "fd2147275ad8f22a6af20363389ba8af"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "2e8582027d1aad1cefeb444d1e8d1112"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a5b1fda3002355c1558b17fa56694c96"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6a039326fec9698478b53f048b6fe6fd"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b1210d2e926f7a792bf24b385e6564be"
  },
  {
    "url": "tag/html/index.html",
    "revision": "633f7dfbaaef03a279dc6e0377f0fd4d"
  },
  {
    "url": "tag/index.html",
    "revision": "bd984e79f30c47955362276cb369f9b7"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9a41f0d39bdb72be9a59ae9522ff525b"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "8fdf59955ea5c6fd569531a62021bd5d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "d708cc70bf6cd4ae6ff53ecc070333df"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "0bf9d20d8653878787f1a6d3d40b9286"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "2dda79afba0bbcf3dabd94d51fdcbcbc"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "663e01af046546b1922a51271c54acbb"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "969d82ee7b9e01a35a4d4372e16375b0"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "afa47ae862ac268102879b235a1eaab6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "bf9558fbf1967675c9a2fd76b9ca9b45"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ec477b52e4bfa7ce6f5dcd8e632d768a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3dd581c32257e2f0eb90bb7fbbaac383"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "b23c49d8162b870ac7ed2bca19da7819"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "6bcd378d487f7569b024664b9acb176e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1a8a796409a29f9615af381dbb75c5de"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "bb00e48de9c3b6df8a667cc70f21af13"
  },
  {
    "url": "tag/read/index.html",
    "revision": "1f79819e367a36d972023ce962841558"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "d0eea795cbb56c0cbfb84ef66ba67e15"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c864ed310b767f36ba82360f81adbdd2"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "4dbe2b3fc541610abb5f64dec60ed827"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e7bb9c4e6908129644a3ebeb7d7ece32"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "6acf44b4d02faa314576addd2af4d17a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "7863e7ffb8dc5b67666243814ad63dad"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "0fcbc506f2cfb0249a00fe60c6c7d98c"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "91e9531879ccf7640d084a6c1ed0ff63"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "70d0ae71c1ad613503b06c3c590b3be3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "66dbdd7f4421431fd260ec1c3b51c535"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "81092e0fb9d640624b3f93b262b38cf9"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "51005584cc31c2c862c1e4c31c7744ea"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "91e8516bf646bdf33f456477a6c62ae3"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "240984414c41606c9ad224a11bb17468"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "f4dfe5cc5e4656edd7935632178073c8"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "ba9c41e652b8df613b5cd5cf5eef1a7e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "3d10ec8a293619efd57fb32731a57824"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ad9b801170d651f2dc3a88ee70f2d774"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "28ea73e46469539396e97d04fad6311b"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4705f507b7077c4d393604de119de6c4"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5fc5c10eccc8dd9518738e33df8740d8"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "1c62ba1a29d88e277fe610570927e651"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ce34d32c60313d67915743d021b88799"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "96450795d5128f957818bd7a2952b0d3"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "a199958c888cc06155b180e9eaa374d0"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "68706bc01c932c972f9dab6b37d6f6ab"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "0ca7791c0a22174c6183749d836cf70d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b742b59b8b234a31f20b92948cedefb2"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "43c8f47c6e7935547d3d78651f5abea2"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "c7defb55cd2ae92ed89569be975e413f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e48d1b7aef0a14b31fc6fbf4b919eb60"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "006dbef4be21227d6641d126e9ac659e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ea0f581311a486809ab1458ada75f16f"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "881f1a27fe6e1f49f8a8876325be862f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4905bb0dcc5b013fd085028f3567eec3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5a5418deaf15003091f33628c50a41ee"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "e86ba54743ae83ffeda08d338a26393e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "afd408006222245723c35d6a4f3b233d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8885e182a1fa9ab8253e5727ec4009e6"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e3c2854bcf73dd4bf9b713e07fbbf6ba"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "f455fb8e8609362e3962deebc72c910c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9c83c41e3bf80158b0ddbd286feafbdf"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e4d670b8ce0639e4161f73622810926c"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "0d96be58dc01da08f340e2b0e89a5a83"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "d6faeae26c1bd96bf29c2403834f0b7c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "831088b2d0e10fbd5aca86b88975c1f2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "fe1a03b51c08ce02cf40760a488daaf1"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "bd63cfe36a3d43d239a1b7c671051ed5"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2853f9a4a66148389640cd763b09486b"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5b4d840480271ba9f5cf37b4fca2e469"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c0cc8d4342963b8115ad47bef06f6eaf"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "956433640f2f6122bfaade081d0263e3"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "a30d0c99c32a8471bd922cc0fddbd480"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ceacfa1d2867cad57d4f98f6b7adae2"
  },
  {
    "url": "tools/docsify.html",
    "revision": "0572db3437e22b2dfe3baef05fa15594"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "b7f915fe41465fc4df0c14a79722bf6e"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "87a231fbcb7dbb764e1b879b6b9e08f2"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "1d466718c3bf3b94a00b27c4551ff8bf"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1884437df454b6f372e6004f1f6e42fc"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "18ded524d67ca2d19c5c188069ef2ed1"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ed7b8cf62b3122e8566111ae567a5773"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "5d30dff6d8caf088844bf690e8806e95"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8a2703060811503e60d831ee18b0e98b"
  },
  {
    "url": "tools/note/index.html",
    "revision": "db4fab8023fbb53ae7e01924bd6b3a86"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "27b7a32350769ddf85c79404dc4f39ad"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "500ff66effedf916d0b23e94f3487e0f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "653a3f1cb92a8214c5c8535c93b9cf9d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4cbccf80840ab0b9f9a15dd38ee35c1c"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "60dab6a2ff909693bdaf318365e5a766"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "96ceb8e9491427eeaf46ce9f32d44847"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "630d7b4961b5bdb31c0218576fd258c5"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "3fd826c16b01bc3b44b7f08c48b48270"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "b6b867e0bb692ad3acd566349c121695"
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
