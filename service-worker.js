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
    "revision": "c8668c05d12cdadedc2e4f136e3093b2"
  },
  {
    "url": "about/app/index.html",
    "revision": "9cc3e898e3aec0d0c71ac46e8a34a84a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0e3fca3f5688303b4da2a2d6a229dfc6"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7b6bc2a592d821817242bcffcc06539f"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "2b49be3d292c0c3a642adb14480c48f3"
  },
  {
    "url": "about/index/index.html",
    "revision": "85707987499dd188e16e882a2c811934"
  },
  {
    "url": "ai/index.html",
    "revision": "1ee9b317525e24fc1738954787741358"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "65f11077187101556f27022cb6eb7c01"
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
    "url": "assets/js/100.2d8a2eca.js",
    "revision": "95d2e6f81a21ed005ae0567abbed1dc0"
  },
  {
    "url": "assets/js/101.4147e948.js",
    "revision": "dcc9ef3d85e74c5c26e7136cca741782"
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
    "url": "assets/js/121.c048ef25.js",
    "revision": "9f499060a63c14ad65a7b3aca804fd76"
  },
  {
    "url": "assets/js/122.b4d968ba.js",
    "revision": "d5b51eb9ab0213fc58106a111507d392"
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
    "url": "assets/js/161.a2e94bc9.js",
    "revision": "92ded557e72ba712a6f21523fb72040f"
  },
  {
    "url": "assets/js/162.d9d7917d.js",
    "revision": "f9326caa60aab6daeda19c35893e422b"
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
    "url": "assets/js/166.52d597ec.js",
    "revision": "931e862633cec6997a3cb7eb501a8abb"
  },
  {
    "url": "assets/js/167.ca138bac.js",
    "revision": "d6ab645c00eb50fc614cae7afecf0ca1"
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
    "url": "assets/js/197.01a9aee9.js",
    "revision": "40951f55e5bb90ad5ffaf7c4f7271443"
  },
  {
    "url": "assets/js/198.b09a02ea.js",
    "revision": "4f8712344b510edeec9a4f47f962c3d8"
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
    "url": "assets/js/240.55141d1a.js",
    "revision": "b202c6a3c8fe524f92126c38b069a34e"
  },
  {
    "url": "assets/js/241.d088b3a4.js",
    "revision": "48a95f5459b61656012d757e22528a17"
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
    "url": "assets/js/260.5c2ed615.js",
    "revision": "7ee1a6862fbb9e039bab351089cfd2cf"
  },
  {
    "url": "assets/js/261.d783369d.js",
    "revision": "444ef8bd68e503c6ccfd8402c8b605f9"
  },
  {
    "url": "assets/js/262.cd9de63d.js",
    "revision": "103074e9f0463793444757e0015a0f96"
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
    "url": "assets/js/app.72c428b0.js",
    "revision": "e007a6a4a09dd63f8222fef8c9274d10"
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
    "revision": "44fa2a4a9cf37cb78d1fb352662a6062"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a8e68e4d5fe6e92693cb3d589473fb30"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b82f893afb61208d91906ae41f67713e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "cf716b0273ab22ecc63a615109c1733a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c4b71ffc487429e44ccf84bd4987e2e0"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "bb99462a7c9930bc38356509712398e9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9f61eb886a250ff69029a6d83c7ddc52"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f5a12e0dea92bb669d51e63654fd041e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "da72aa8d44a4c0f79ce31e37c3520502"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "030ec0260365475f8be39414d2de9f46"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b1e93a2e9c5e5f9c0610dc0bb08ae4b4"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "037446344f55358fa1862b9600746454"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "1790055e8822a45937ea064425aae0c5"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "58744af1098cca0a0445983dde9b2725"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e9520cb3991c4dac005a2a9d0cf56e0e"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "22e02a15e146d6ceae72da7971f03634"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "f7d575e942484de8f8481a89c89a48d8"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "1d6a792f5ed876b2041b78134318bc82"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "dd378ba1ae1c71c08a34c0c3350f24c9"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "2623e2f44986a367ddfc70713dce1d2d"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "11292487d9a1dc20a3f0e23ee7dc44ac"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "ac4f0a6e26a6a057d98bb7503ac20ef6"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "41a22e7a033696861878252565ab8dc9"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "b31af3a8ab4b28700d8f924da3d5cb6e"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "82b60d50f9008fd1711e73ea9d6fc526"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "cb2b363378f94e5c5a6f7bb3cb386188"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "ff8d218dcb28a2383d222992c542c064"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "5f0bf7b896c5f9b17ffbfbf196d5befa"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "22f21a2a5c9873767656365b57a1c563"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "f79b079ab225dc6d01df137bcb27cf56"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "9243eb20668eab5ea7d9e879135ab5f8"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "98ac94a0b326d8ba9ec0238955cd3997"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "1aa015bff3903e6f6e87c751552e692f"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ba7efc0371f303236aa39eb30368e048"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d66c880e716619887746b92a2df0f2da"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "dc695ce399c3fbfdb32cbc673ad1687d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "654edf58a8672d69c147b5eec4f5c5cc"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "3823ec8327818e696b60ad833a158b4e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "cf51af283f424995568e6b6f827b2385"
  },
  {
    "url": "basis/os/index.html",
    "revision": "547e4934c8d0291c457eb824cf83d973"
  },
  {
    "url": "book/index.html",
    "revision": "b1271c22e7b1f7c7b1d465662525eb0d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e52d44746245e16a570f0d52c5ff7de9"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "89d3e88176cf24ae557988ef37694154"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b432a6d718f9eb0aafa8f6b46463a394"
  },
  {
    "url": "c/audio/index.html",
    "revision": "72e2a9db969dda0e53b691afc5f53fa8"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "5c3e2f5fd499037beabc77412d13dfbf"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "5b690f800eeb036faa172c6753532af3"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "ec2b8ac52035ecf786ca1ea87f32177c"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "32c9ebc86a8f0bcb14df1d3d7b8571ef"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ccf117ecff517fbbad4c83c80dd86974"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "c9c9e8ea19f73fe53ce202bf4c945382"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "f6920d651b643dd7a22232485897c1c9"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "8309e6d3905901b0a081dfc4b6cc9e1a"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "aeec01005143cf639113d4b3ce926416"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "ec64b4ee30b73e590f8fe048f3207445"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "3646b4d5c65dfc9e2daf5e720956aa52"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "42a2ff884bf2875bbd9683e723e71071"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "c0aed8489f6c92589c022b163b86533f"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "e2cd2faaa98ba03fe3f5dcc6bf45c4cb"
  },
  {
    "url": "c/program/index.html",
    "revision": "5236374b5b0a4df0338a4a25ec858b0a"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "4a750afbbe0c1d5a659c1e0c2eeb39d0"
  },
  {
    "url": "categories/index.html",
    "revision": "8102fe08cc49d4663149b7abc50e276b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "f8b61881052fd3d6dd7e569f74a88fba"
  },
  {
    "url": "figma/index.html",
    "revision": "79a86a694c47a083d981ec8a97238fba"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "f88cd7cb7d16ff24a7be2aead01482b6"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "38be4ed8999f35c8e20ab7b267844c4e"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "46289323b5c20f44fb1344bd321973a1"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "9098192863c2d2ce034fd587452ecc4c"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "6b566b7b7766d2f785115f7a5ce2f16d"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "f81bf2777a6d892aaa269b07e0afd6a5"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "bbb6a580193c2f12e134316f934d347f"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "bfe328e1443cd3ac0ab18462e56e774e"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "dd02c8a49cd27334ede1f0e2c5b5dcfe"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "3016a8361494b4222d02bd2aeb11736c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "d74d1e58c52a1951cf6f4636088a76aa"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "fa7d70b07b19eaf34e5102e2ce52e0ff"
  },
  {
    "url": "flutter/index.html",
    "revision": "47470e3bb39966edb24996a1e3ec5e9c"
  },
  {
    "url": "flutter/point.html",
    "revision": "0d09bd661f9f27e4346b501ddc857527"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "545176e9f477ef6cfb5791c5a0c5e2fb"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "17abb379aac638ee197374b6fcee9fa7"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "eb1eb6d326a572f6bc98e4842d0579ff"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f0ad8a4bf8da2bb8ddc131a387ff0611"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "5ddfc3322529684c1bd9b839a387738b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "507a42641d686790a56d12ee11c5c247"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "96f2cdb037305aa666b99c89c3422fcb"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "70b4ce92616e23e4f50ada485541dd9f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c9acfbec8e0298d072d62f617ebe83b6"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "9c30544133aa7d0ddc6d92235ef2c2a8"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "919bdff2ae31c87af2f5230d17aff45b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "efbd70afdac81e8ab6895df4fad670fa"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "9acd9f65ee375bd0511f7c10da549bfe"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "b2a264197fb047754c7a27750d1d9f54"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "61f8b7923fe80fdc8c6637bafa9f7c47"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "e49a6fa91c878346d7668d686d8552a8"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8a5bbd809dea880cda0a2639574ec756"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "04a30256cb41da97863b7f0f2d7913ef"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "560e4086715756bcbc16069cecb92e10"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "9d20fc2dd8809ddf7684c5b9bad79f7a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "4d2d41bb04746ed27aa8e11beb9f85dd"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "c80935b4d3bb095d58297895db4151db"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1b772ec4a3484948f1fb8664e623cfa2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "b276427094605f3a277e8d876a34daab"
  },
  {
    "url": "haskell/index.html",
    "revision": "85e474c2d974245ee27b99eaf9980016"
  },
  {
    "url": "index.html",
    "revision": "7e05aa73dd9bd31654256862771f6533"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "283052b89b479d104735ccf7637330f9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "12a176f769bbe52839fe2cc08a22e698"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "adc64289e58008de1e344c9d63af9371"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "becf940ae3d70e202a0a67f12945c018"
  },
  {
    "url": "python/index.html",
    "revision": "9bb6526b50e8afafc99849649eea4608"
  },
  {
    "url": "python/python-ase.html",
    "revision": "62129f95861e16aa897c37a1a98af423"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d531ee4d8524ceaa9021bc4ac1ba94df"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "6c1101d0fb44769550baa0ab7dcc5ee1"
  },
  {
    "url": "python/python-file.html",
    "revision": "b6bda087cb1612ab01f5095f714cf069"
  },
  {
    "url": "python/python-function.html",
    "revision": "1f1147aae1c608b1be711c712c2b2b8b"
  },
  {
    "url": "python/python-generator.html",
    "revision": "9bb7a3a9f8c4174d094281c497e227c8"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "aecefab09dc7cbd4943d4879dc3af7e4"
  },
  {
    "url": "python/python-module.html",
    "revision": "68b0ec4dab545717cb2d0d9f3af2dbe8"
  },
  {
    "url": "python/python-string.html",
    "revision": "7ab62b555109ba961c328c385e8367af"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ac1b7889df46c0825b458bc4e516807b"
  },
  {
    "url": "read/index.html",
    "revision": "ff5cb158c87b395b243b775b68b42d8f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "de0f9cb4fdaa024a219afac16f642f7f"
  },
  {
    "url": "swift/better/available.html",
    "revision": "f5546d59e9e7548ef9d485ab187287ea"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "dee1e6a87e2e2df342937e85c26e7e1e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "4f2141f518a31bf0b9dcbb04a73b472b"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "083d715f1b7866eebfb6465f9e9cbc5e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "8db6709c6fa05fbfedc5dca83519aefe"
  },
  {
    "url": "swift/better/index.html",
    "revision": "8b2c49ff6d715dc8d440fb66a15e074b"
  },
  {
    "url": "swift/better/last.html",
    "revision": "fc6eac7a16ec6df6a86d6d53605b97aa"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "81000619b6a0f557cd586cfb584ffbde"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6a3d06c24542220d5db8dafe6b7b67d3"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "0d70f2b5dbddb0b15c8766b481ab0fa5"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "c2d1ca90852493304b0c5b85c7941ac3"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "10757bf713a72c324e09077d693630d4"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "a3dfe6c4ed923167650e46fc9f8eb604"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "f1bb7ec97f8f6bba1894ba767c4324e6"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "4eb5acbb80f95131f77759f10e2291d8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2bf190651747f6dcf463d06985f8b6fb"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "27da3bceb8e7d4896e7cc1fb1cec11f3"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "891a3ecc01a3238ba99d2b775f0a907a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "924160f69c87a229366bceb8cf035389"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "ada5e20c36305c01cd41b17f6b93b913"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "549f797b680ef150bca243d3eacedbd6"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "b7201200a887d66bc0ac420da5051e34"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "e0f442b1c007244b0a77edc07299cd68"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "f7062568c1c1f8d18226b6110ba088f8"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "ffcc2bf2eabdd9c606f4fb621025cc2c"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "7b500199670c0520de0b7300a8ca22ea"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "c725d9e5420438abfad4c3106d679542"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "20ba1002797ca0da5cd5d0e98259b166"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "2233b94af1c87ae275e69a67e7f2e124"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "154afa00d8918200b1cfb291d07d5a89"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "e70a4f0c729bf24aaa548bd86cafe167"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "5a480cf5269170db753209df0c178e9d"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "0b343c84e01b94813aa10b196bb9f8ff"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "fc0a105e0be540daf13d87c1565503c0"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "ddaccbb5819912545046fee5203c164b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "cb73d9654286e344c87cd98e744ecf77"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "5dc6193fa8ec5a441f063c8120ff244a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "5ca872ad67f55df5247fb90ed7b32c66"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3e4de588e2156a14b144e9416a22e95e"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "ff8ff3c0afc250ef528de81b1b53cb9e"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "683ed7393b52b9c5d1ed44fd8a8add2b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "c02701af583095ffd2d80419531425b4"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "ee517101da8dce45c04b1a577eb319de"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ff40bb24d3c1c788529d516cb83733dd"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "0de27f19d742ff4f886901317f3fe63a"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "504605f202fd7c29f7bf641b5209859c"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "62de5e39ef261d52f04066a6a70b8622"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "aeff0028624c9bbcbecc606981d7dd71"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "dae6cda40eee95689438147736de7b69"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "90ff9b6518428be8923c0cd57c84d8ce"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "281c65c881b7395c687756a19842e646"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "e4c2411e359c7322fb58fb3f9f042885"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "02046b7d5a3730dbb9ae3b6f4d96db27"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "64957cd4c9075e7fe6efacdc9f486933"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "239bc59a5dcc97dabed14e9cab115745"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2f361d178ee97cde6896814202b2c738"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "e47e178e8c4145e3f7fc543606ead57a"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "a34e85ea54ef9f7321c1e94b29bc109c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "9ab5e680780af9debf5c9d6a561b7d3d"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "e1f8996d1aeaa61214ae5dcd5f96e3b9"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5a2e2d98e11f7f1105ff2745ce0be2c0"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "a5b7220d2b064aeb039046b4fdc7d5c4"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "bf70d4eeaf160251077bf1cb644a0e5d"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "af75ce8532d54ecf1cd4558ea0986749"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6848223457a014959c46da9cda65d180"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "48f228f30dfd1b4ff5afdeee806839dc"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "bb9101273321ba5375555e7cb03fdad7"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b4be5f86563dd1d62d7de2941e8f59de"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a2d8f2a17246ef4eb4c0f65c50f2b605"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "516cc9d41ccda48fe4c7538ead3f2f87"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "2601f01d41173154a64bf8234c63f18d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "1761226d3c0c25c38fadd52fb5d98a82"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "d57e72b0366e1d836f62adf12baef2bf"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4f6d8ebfa7e6cf71d1051c42bc3e7abb"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4846d571030fadc66e32ec485e047794"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d391ea1aebf8e2ec312b2b07e9b79cfe"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "dbc83f5d940becfac20b083d03d7b74e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "84b0d53175eaab73864720ffc9d7d5c8"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "7f248dd83f8a7eeeba97d240ab7a5830"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "357fec69645fa0fa55f96d4b3dcdf3d9"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "6b88513065c668dcf939315a5ae99781"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "63ec6784aff0ee7c661a3ab57a09af79"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "858103929d79ec157e0b84083a9ef918"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "addd0ffe72e9dc10fa5be629d0ff19a3"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "8e8fd8619cae4eeb52340e14202b99a8"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "daf6e1bbd5260d56751c41ae3436c609"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "834be17d9197996eef9705552a619356"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "3f12e8185eb09795928aa6c0db8140f1"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "9d9872895b93cdf14b1991891aa441ca"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c7a066d6e22b05e097098b74cda3e471"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c82a0a6b296927e1210c74fea3f68738"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5558f2eb71b14b5ba4d285886a64c6ab"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "4adce19606575564b431866393f88cb1"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "ce47cdf688e183e266a78388707e557d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "51f18682f2ac30ad16b851e97d5bfa6b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "78e03ba25503451807ca145f6d1fc77e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c7837c4c348104d9969d1ed42e19eea5"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "1cf8749948c780f6f6be18ce423d25d7"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a31cbe1bf162cefbb812594ff989820e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "1cae537c0f08d143672fac733b1f4651"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c07a04c5dcf43717194c3184e86eab37"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "966328063e142aefb29a2baf812fbbdd"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8f3d67a8000785b8adb036bf9f3d1dca"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1855fb4530e0378e60e00c6988d31233"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "dcef4b7a3038b94a93a8a00a32284249"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "774c25897ab50a177800f7b1f18cf6f8"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "47d67123b2e9b9884d84ab4902b81cce"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d9715f0c2a6447b597116288ad1c1c35"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "4b824a639f30a5b3848f20707979f566"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "6bfaddfe7b229bf3c25c0fb28fd6a35a"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "86d4ac7b87b103b8ca83caf506122271"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "44604c02fe8055d8438eb4b4816fd09d"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "fb79dfe7718acf3a6be90ffdfbe975a2"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "9f692a391d89948911c3c3d0e3e64719"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "3f6462d2fb44353f45192fbd8ab0b3ea"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "a4591c8d63edb70d4f6ef640ee9c3485"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "857fcc4a4a30970749fb13762dddc9ea"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "5bcd7c2ea825974d2c874663f6bb3555"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "773c44847f13e6c605f6e3d9fe488717"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "47e65065aaf530d5852918186f25e967"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "8bf695ea93599e164fb305477da32953"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b10f26b9de37162e96d3f7bcc7ae26ac"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "778097903eeebee9097237b01f5841d7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "24f9702b83d80bbf615577a404abca9e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "31acdfc0a9c678f2c87b687500285e43"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "39878c69a9c3b35dd05ea2c764b8db98"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c10110e3d354b573808e2529d97d4152"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "be328f8c810edce4e0e6916589ac8cfb"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0c9895cfe7cb6c78d2a4ee5846856786"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "708f91d10eb710b8ae1557f89f661e14"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b69bc19129a1aa40644fb424bb3741d3"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3fb2b958ae299c302825aff040d6d7e1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e483fe073e9c4f1348a0ed4afa607230"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "2ade8a27b916eebdc4d6349b2899f4e4"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "737acdbee07207ce0d52eff021b6b8ce"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "048120e28754b194b5d82c720d7d55da"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "64a8721edc61be41bf3a7b01f42a7141"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5bf367d618d01a371c468f36d4f0559e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "345f3836dc33156ab1d06844b3c6abef"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "648513ab4c79b106290128eadec8a96c"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "ad60943e17f83517ef623381f376ed0d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e5dd80f5675c03ccedfd27b946797961"
  },
  {
    "url": "tag/github/index.html",
    "revision": "bfa73b0fd2558ec38d864e1afed116f0"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "bdc73509d90f7949d642f8dfce9c5da3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "14a3c0c8c5cbd0c1f2367156c8d2ad0b"
  },
  {
    "url": "tag/index.html",
    "revision": "bd6394afd3b3fcae51ef7306a59c0b6f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bb1376a1d0afbe536d4a115d03c21375"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "c060bdd2d7f00f5d208e10112164ec3b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "18fbffc8ed6dcd0af2d78b4feb33da56"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "bce215e80c65c0c0886f15f1ad8817a1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "aceb0f2e8b686566b2a5f2e3647f99ff"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "2fe85bfceb489e45ab6eed8aa9cae82f"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "dcb7274945d164612fac20a16ffc0792"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "02bfc770323dc2841541bceaa8d89a74"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a7533e38865c016aaae10a6203c0138f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "1ba3fc6713d0c789c167d402082bc562"
  },
  {
    "url": "tag/json/index.html",
    "revision": "ac51eb410f9cc5153c0907f1eeace3f2"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7a9fc70dbd690a9e07e745699fc20abc"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "dbe2503fb76922f62318c32ce914362d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "09e8a4a2f27f72e245fa30519c2b36d1"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "ff1da6e5beceb869e3bf72198ac07d17"
  },
  {
    "url": "tag/read/index.html",
    "revision": "b8c25ada18d4751a91773ad191adb3e0"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "7680aaf84bf9da89f673990adb3b81a8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "79701cb3282a4bc908883b3875cf45ab"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "b8c0cb5a1151c5e27f3dd24060cb2627"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "f8d2dd3fd0344dfa0571ed06e0292526"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ca63388f776b0151e5a65c44d47637e7"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "b68fa5fb26997cac5d53ce03e99081ad"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "db0c95c403d462c1c26951e7bb62292c"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "e47d922faeaa2cee705213f245801aa4"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "87fd700b4eb10b5a26ff1fdb1eb27f58"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "db2d350d63e7b1d3ae0b97b7a4c41d5f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ca8b22a2e4481d06e9e3cfe8d5fb8ac3"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "54d82fb4532a86d785a038d04f8a7786"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "fd06692be48567083abc35643d6123a6"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "6e968b97440d170c223a4e76f550e487"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e9875db76c278b3a7395834d333b8ba6"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "4dd096cc08f9ed716422cc2ec1e4d776"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8e49ebcfe8a5fc2ac82567dfb674a0e3"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "aae7327f0a4a0582bb3036c467427dc9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "9ad2033ac1e315beed467bfff8f802ca"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "716c71d91952d1e6987a3aa0bb61ae32"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5abd9bb02692d2610dba17d5f1a57f67"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "390381a2a2fc42d29053b8a19c274bde"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "86f8aa780e5f35bab6735ce480df60de"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "f276029eacc9b1ee74de4b44866178c4"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "a2601292d148e45673d414f103c61f4e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "91c683bda3f606bdf1e3b3d5ad4760bc"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9bfe2419ae10015f304a8bb15376cadd"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d2db2c096ceb418b5ded1042fbf24be8"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "5985f82d86f956500c4afcf20fb4656c"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fa06411c57e0e5eae2d2310e16441c01"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "896aeda2afdae421154291960a453bac"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e98d8fbc5ff39ba3647d9ce0f5319d1d"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a8de864ee733d7abb1773f2dc71681b1"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "8484562f8b986e935ed5bb457216fd3f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c7cff2900af31b6d1168ebfbd9d73e5c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "be625032497c324dddab7cc8eba01cc8"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "b1c511f33fbdee02dee1b456cca47fe7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c4c650fc8537f4dc8902a905754d6667"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d27138902ff57a8e748c8b618471151e"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "71b1c949bcaadd79adf6ce5d32a66b9a"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "ecd3057857f1c24391ff15ebffe5fc9e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b8c01e466553a8882f3cfcd5a49e8a91"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "7b0e3e3b77153c881af92fe9f82abb1f"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "d1e183c583c8a4422c10e1555585c1d7"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "24822283d012f6e5e1635dc2d86ce533"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3b56904eac845f0aacd0055d21f93521"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3add014be1ad12e5db4354499b30ea69"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "b706f583c54384e53e7804387bf2c0ee"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "814535b9adae059eda5065d8ac15e200"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d1b0d8c6da8c51ea379f8b2493e14491"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "705c2ec41b07cd429db81e50b2368206"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "bbff158838af63ec93b315a1afe70656"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c4ae9596e4140077cef318747fcc9135"
  },
  {
    "url": "timeline/index.html",
    "revision": "7432a8dd598f04b282c35c76c2dbf369"
  },
  {
    "url": "tools/docsify.html",
    "revision": "ae696200db88257130efeea7b1c319ce"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "7f1180210267d423a626018a17125cc4"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "efd44171bfe9fe2bbb6502f585547732"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "b008b42c2cecd8c9fae0e90b4881be93"
  },
  {
    "url": "tools/git/index.html",
    "revision": "57bd060df1c28c8365230ac600d27ad9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2e5a66887badb72b3bd8adb6d6da45a1"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "dafba17ad0d42b435a681318e5bc4e1f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5f52a783caf20f0bb4c2027de15eaad1"
  },
  {
    "url": "tools/note/index.html",
    "revision": "35f57d369af437a2afd7abb96d1a111e"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "b2210362fe349774cfffce52049dcfa7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "84f6a239d104622e94a197d002445f80"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "54a795011e9847b91c36e94c32b058f1"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "546413df166a046aca2e246eac16b81f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "47c141d44957079f231e7063749d4f40"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2ec140e5179106a61dacc23ec947a195"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1426e027fc0f2f42b3ad66d3f39b6c26"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "90be7929f4dc3e4dd7ccbba677c1e3de"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "569c139dd9fb752e65921e40cfa4a978"
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
