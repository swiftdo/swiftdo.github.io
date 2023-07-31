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
    "revision": "ee023e4cd5e0d209786cc5edfe84ff37"
  },
  {
    "url": "about/app/index.html",
    "revision": "47d9193ec238202f6d0cab832bde81eb"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "62cc895695bb8555f94cc0e34289917a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "471e35e00f666c28f299ae4264dede19"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "a93d4a3ceb34a89e5061b21e8cba06e2"
  },
  {
    "url": "about/index/index.html",
    "revision": "2b8f3c9ef2a0c63d03e7748969c27332"
  },
  {
    "url": "ai/index.html",
    "revision": "143daa58781a44e8c557ee6ca5a3bb46"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "09432a55be66bb5b2060da42a8be237d"
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
    "url": "assets/js/12.b2e5bc38.js",
    "revision": "ec6db7d167c9c05c91d7bcbb1e58543f"
  },
  {
    "url": "assets/js/120.2e6b6a09.js",
    "revision": "2693b215624ac04dde69907b333ff7aa"
  },
  {
    "url": "assets/js/121.972ae2fd.js",
    "revision": "b9e6fa100b3f9bf9c10eb3207c177b1a"
  },
  {
    "url": "assets/js/122.2dc48b7e.js",
    "revision": "439332040f909b3937820e00be5f468e"
  },
  {
    "url": "assets/js/123.0a8536b6.js",
    "revision": "e99e1968230f4602bec360185227a566"
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
    "url": "assets/js/13.c6ab6406.js",
    "revision": "1aec04485a64460306ca14d1aa2daadb"
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
    "url": "assets/js/19.e81045fd.js",
    "revision": "42695971bd25ff72d636d3d1c4fa7794"
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
    "url": "assets/js/20.a5581b23.js",
    "revision": "fe0a29b5132802345a01b7f46e768c01"
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
    "url": "assets/js/247.c5e259f1.js",
    "revision": "a3fb4026ced5c48d8ede52eca37d1506"
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
    "url": "assets/js/251.5674ebb9.js",
    "revision": "9ffdf8cbda5bf6366d76fefdbc355f57"
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
    "url": "assets/js/254.eee357f0.js",
    "revision": "cedf859cd9886f2ff3b6b74d4c251816"
  },
  {
    "url": "assets/js/255.6774d219.js",
    "revision": "74352ab934b034849943f3efb15db5d8"
  },
  {
    "url": "assets/js/256.0e74951f.js",
    "revision": "b7681df3bb2cf615e5077272669568d8"
  },
  {
    "url": "assets/js/257.f228d825.js",
    "revision": "eaa7ff9aeb3d9cba03180f01957ba3a9"
  },
  {
    "url": "assets/js/258.8b714cdc.js",
    "revision": "225fca955e1c471265f96bdd81e6514b"
  },
  {
    "url": "assets/js/259.0c666f73.js",
    "revision": "1d0ae8dc7449257a8db712f468f652fc"
  },
  {
    "url": "assets/js/26.75c32601.js",
    "revision": "114b663cd82bca35fcedb791ebbc3b95"
  },
  {
    "url": "assets/js/260.b4b6a84d.js",
    "revision": "12e7329ffb71d1e642b976c94d358970"
  },
  {
    "url": "assets/js/261.12637a38.js",
    "revision": "5200f54cf6dd7ef1eaac40c2bf6be293"
  },
  {
    "url": "assets/js/262.2740f299.js",
    "revision": "a3c919e87d7bf2890e9006608a81e0d6"
  },
  {
    "url": "assets/js/263.66c65bc7.js",
    "revision": "576e3c87a1f17b6a3b123457639e674b"
  },
  {
    "url": "assets/js/264.59a809ab.js",
    "revision": "b6d375db31dc96c02c5a0ce43d51dc9b"
  },
  {
    "url": "assets/js/265.0bf9c0be.js",
    "revision": "dfdf9937a7e1830a4bdef8e9a723d47c"
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
    "url": "assets/js/27.b90d6383.js",
    "revision": "453c148502c924f935b3d6c0d0ae7946"
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
    "url": "assets/js/285.60d2bb57.js",
    "revision": "2ae939862ac924a72f8c593088911c77"
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
    "url": "assets/js/app.d6e68113.js",
    "revision": "8dc6183776b3213f930c7dec2c5eba1f"
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
    "revision": "53b3b518d675d2a8601d9edab0e81288"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "46e533b78480756b44defff415d0b72c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a6fbf208aa6c66b57cb4dba8e7d3e588"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "600b0b3712a478122e9dab7de9a7a343"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "502c907e33c48d6f26bcdf8dacba108d"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2cb6fba85e91dfeec9b17ef38bdfbe07"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0c88df8227f4be7c185a7abaa77083f8"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c364addb924d6e14ca5d4400ca55f598"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "356f0a30e613ebcf3083c8d5595e0c3b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "43fe2ec9986f5c3eb433ff6d73685880"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "bf072299750c80c6891b61f1ff26b8ca"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "65dbc61415b378d7d499b6fa918e39b2"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "78d3f9d38d6fc2e048a03565e32ba968"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "0e28a872e056d070054e414ad975c8e3"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "41f6481d3e9f983ce99a47ee60a0f38a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "7cc309b64d809a7167a6ab8023411f70"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "90d007e8bbd05a1fa0a9e710e10f3121"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "901dc8dd84c02bf6d2b4fc28e4498847"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e49bddf07efe8159d3f7c41fffdb47ea"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "65bef3cd793b58b5f69d50bcadb38f10"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "59be566a38d83d5985954fd6cec53cbb"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "5c1420308e22d0a1d6bb42573ad86e16"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "fc29552e1c80a0b0a77aa433e4507296"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "2bb4c9da334634cfbea3bc40bbe25e63"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "1ffe1ac7522132557bea8e287ec7cc7c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "426c71c5fc3c3ee9bc6a1af5b150370e"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c9ad78ea5cbd0e61e94fccf47a493d71"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "b3c71c6206700c8e31b61e76292f1315"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "fdfe09bc8a155fb24854b6475a2150e9"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "a5827526e70fb1c69365708184d51fe8"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "86978c1222d1f8e736fc3c416bca165c"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "c28c9adc1f59601143d7c147f55a4b1d"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ad255988f46f82f6fb085c4d254c0169"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "51495d5e015b13421b14bed7d6eaf777"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "1d82b2e67132af96a0e38dd463bac622"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "95d9aff5e786396805694d5162f1e0c9"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "db3149ea81c2d6eea233b3cd458ec01e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "3df5e085e7f1cbe5824684af21ea2ddc"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5617b546f1be41b29a1353a79a91ca5f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a454e3bf8650191f7c1495dced1e3304"
  },
  {
    "url": "book/index.html",
    "revision": "2201efcbad29745a09a4105663477e09"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "445aad7860128ee21b07e1c21466dadf"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "1ba142b63976fadc7b8e40316562e4a8"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "fc652b4a2918c9a4c3eccabc7f364647"
  },
  {
    "url": "c/audio/index.html",
    "revision": "77864c0fced6adabef60c553242fd7d9"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "01f0f7e2fffab87d0bca10074d248bad"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "4ee9d19feac7706ba9aebda55eb21c06"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "41dd8fb84e2f54aa9f8ca5763210292b"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "4e3323042a649b2b7bbfd8f875151273"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "513ecf37531db3b3768777d16bb9825e"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d0e0fb85d228af819b88569363c572f0"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "170c45a5fbdc1fe32b4a211e4947e223"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "75c43a3d5df3d67f9db7a694dcd5be2c"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "06df2a43c7009a57aab104e2e9d0851b"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b171bd286e6f163ebbfa8cfd18722c6c"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "7c92b1621f415c1c4619d9e272dadb55"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "96bc0268e1b313b1db09c49cf918ee49"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "aa23e557c2b0fe2ad365212784c3731d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "9e203eea1392758f08e60bfb4e41cf61"
  },
  {
    "url": "c/program/index.html",
    "revision": "db8d81c9c3a218e6b10160f2e9b4e1ad"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "22da290eb4f4606c051d8ea3de4d3afa"
  },
  {
    "url": "categories/index.html",
    "revision": "a72af40c30f9118491f3b2da33f7823d"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "23211860f67b8ab6d76be2f3859cdc59"
  },
  {
    "url": "figma/index.html",
    "revision": "5d5f37aba2b99ffb078942738213313a"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "6f230fee7edc418e67007d97a878aff5"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "d9953def4006e01b2d1bb7dacf1fa809"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "6533d7cf2d95b5ebd49385c5b11e8287"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "a55ade221f8e4248ad0981fbd0754285"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "1b9b54116bc857d936e7a2bd794a9633"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "9024dd107eedfa76997557d04f8b52e1"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "c833570447ba3af38faf52e7fbe04bf8"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "27e1e279e24d724bd1e76d7a010de55d"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "8a149dd799506eb7652ddd47c447d971"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "64bc76596fb7b07588ab0745a29b8032"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "dfadf3cf0d3052653281538e72414d06"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "651825998b4344b63a1fe17b08cd278f"
  },
  {
    "url": "flutter/index.html",
    "revision": "8fe13d5d7280d35100aa0fd3841ba5d4"
  },
  {
    "url": "flutter/point.html",
    "revision": "a953de9f6bcf9976e7df1a37ff88476b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1b0461bb9f9ba4c4448cf9a1f3d56c17"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0a6ba72ad5372dc4f3eda8a9f75beac1"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e5f96137801748ca4067f530bf3e6e82"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9e8962fdd8f7607f5c19cfcf7a8414b0"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "27a111c8039da57c1b86e4b4da567363"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ea193bc5b02469d3b0af8009dcbdb61d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b9e9f99b854a6da2c7c42812f93ab91a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e6263ac4584c37ebe0d41545bc608277"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "4512b0244e67f6e11fbb32958f8e09cd"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "aae25cc8eceebd2969e5bfb53be78b47"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "0de6ee2018dc6380ea5cdefbb90cc9ed"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9bbed90ef53606fe8ef5a04a242a0342"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "6c85bdda7c048af2df7225228178d2c9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e2b96c77f4f0afbaddd8c2b8d14040e1"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "62c6d8ec2ad90d196447072adb6c9c5a"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "f305a994dc525f7e6d7dfa6b75033b00"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "723582b36405e1dee0c9ecd92d7a2df7"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "e43efde78b070851339624f7d043b347"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e0966127c4b2153f52ba66857e3060a8"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "51f9ea3525e555fbc7a542906352b17a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "d00e922cd1a6d9056c41a0f3570624fc"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "86fbd852a2288f69fb18302ed79a1ebf"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "9265ba149862115d62e8c8137945fe97"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "34dbd8de69ce9131f86a2e09129dea1d"
  },
  {
    "url": "haskell/index.html",
    "revision": "f42e9fede6982e365f77f9a2c44b98b5"
  },
  {
    "url": "index.html",
    "revision": "107a372a72df292ba2a2187199b68098"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "613c6f12fee83894851d8567ce873aad"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "6a65498ef68102bf1416c9808897369c"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "d0940dba871bb523a9eb2134c753c33a"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "fc433aa0563d0efb770debad9df97478"
  },
  {
    "url": "python/index.html",
    "revision": "669a1892e26a53fd5e65344f8069c9f6"
  },
  {
    "url": "python/python-ase.html",
    "revision": "2227665a4d0c6b4a300d309f91d4e741"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "87b16dd64eef0f8f30b9ec1ce8606876"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "cf3f4c0cf8cf8266672215d7169e0d3c"
  },
  {
    "url": "python/python-file.html",
    "revision": "db71005a0b93ca18043517ed8b5277be"
  },
  {
    "url": "python/python-function.html",
    "revision": "9f1470bd95cd45fce0c4881eda453013"
  },
  {
    "url": "python/python-generator.html",
    "revision": "83d559eaede6bcc797f5530a091bbe34"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "5dd084ca1d187a91d4303f8538fbec84"
  },
  {
    "url": "python/python-module.html",
    "revision": "e0e9b34cdf651b8e3725f6525b542ba4"
  },
  {
    "url": "python/python-string.html",
    "revision": "01f92e4be9ccdf1fdc57236f84364baa"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "c1bd4e561d2697cf920dd22493bb1b0b"
  },
  {
    "url": "read/index.html",
    "revision": "0efa756779eb11bf4f22db694fced233"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "486b662e4ee87c8217e4ea3f5c73cec2"
  },
  {
    "url": "swift/better/available.html",
    "revision": "b728c64ba339859782062b70818e0407"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "df8eda196d2ddbf8a709c7aeb8aa522a"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "87dc03eadb572764a03afa8772ec6f5a"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "fb955ca72a9ef5aeb312f3664d503624"
  },
  {
    "url": "swift/better/di.html",
    "revision": "1d77160b70f1d4246df698118bd95c29"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a6e781bc823742e898c3988270db4256"
  },
  {
    "url": "swift/better/last.html",
    "revision": "25e8846d03bea222cc037439d619ffcf"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "cdbe328b42482d6485bc792eb6d32c68"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "56e22e3fd095c17cdde8c81df01a3066"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "8db1d3c86166616aab1079b9ede196df"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "18b5045e467bbf147dfc86c52c64b36d"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c90808d939b3b04b67abb56af71bbb21"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "12766e02c539110b624ac246bbc4a08f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "15868f8aae7de0d789d58a77586f3320"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2269e41b15ce79db0c188b62f521be11"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b4774a394574a3412b9c91b695a43719"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "1fd802b61cd04754dc40d0fbeec62aab"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "1e81f4f0c8947ab5a848b4255659343c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "21643712a279e93fbf4d02616750d1f9"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "f8ef1d7a2bc83f4ec778303b55b1388e"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "dfcea4e1dfd86db829ed52d106bc835a"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "59f8e5c3e8673ebe2c1505a493fea761"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f7777a657dec642f66a61581ba8ecdf9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fcc70d828c40fccc26ef2c21e3587822"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "5dce789facd3d0706d172d8dfc21509e"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "1be180c4de6cf3f838fe1aedb57ac0eb"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "9747677e01493bcd6a0f49a2add48c39"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "ea0bbcafc4199ff0e4b7a29ae1cd242c"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "84101ea227547690317fe93d1464c507"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "3fdf0a1b504d6acd9dd0e124c37e480c"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "f45b9aaf2b64268b9cba8faad60690cc"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "fe0aee32d96f7f99d78be40d6d3e8ca2"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "02f9780b08c99c3c848c657eb16d6433"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "b738cd2b71994385022e980be2b3878d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "cf1a9c487632f2c37d9a27a9d0107585"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "d772e16638464c61a56f5b431abafc10"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "b64f5d8bc8b210a33c7cc0985c032dad"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "2163ad18654cfc7414e3db06512d584e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "bb1f9dd2dea154d5d4dc18a40c871462"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "bc9e22b1d3874fc32fa59445b8b41c4e"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d3f538b9ee3a20a60822e7366e416eeb"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "6818be2d6c9d520e6976784d21e54ca3"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "e9857bb4bfb9a922d80058b600a0db65"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "3f09eaf59fc3ed2eba0ad19f80b0cd96"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "16872faa09a521504318266d36a25ba6"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "11bd323059fcb0078df67364085753d7"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "a3112e5cbe9ba1738e33606f9592de62"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "5796f1a132d129d16dde2bc47080aa3b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8df333307b939bcc9bf5095f1eedaaff"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "eb89824027a72e59e3dc165193c4096c"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "086ff5119ece4f26ae9a2107e3be04a4"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "9e4f55bde59d4c46721922a40ad4549c"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "372d2842160ba3db592f30f5ef84428f"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a6adc9d1b9a5b13e2de14a100fc5d08e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "ef5bbe9e93e0919dffad0bc96be82d6e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "411765e5dce769965887f0018a473a19"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "36c0cd7090f91347773acda3db3ace0f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "3dc2f55cdcacc08a6a375f94d9e22c8e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d704d2d24775cb789701dd0d27a6a962"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "235d871ca172bc7a3ed004aa7d83641d"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "3de19fba0ce5fa891adcd21e29a02bc6"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "209fab77f46874bd8f39007c85644fbe"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "6037635f37f0233ada16dad4fd835ef2"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "2cf5552dabad24416179bc857cfec947"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "965828d076a33594105b4a802c88d45c"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "45658d6130036c7bc05b0408c1b8bdf0"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "7339720eab786d1f4e203f5ccce7f95b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b334c1246c88b20477636f3494e36fe2"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "cef6fd6e52201d2243b86864d55f293f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "4625883a6c4611cf7c9bdcc29e42535f"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "0e073b899063f5b5cd01bc8df14a4120"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7042483b8df20eb7b43916e40cc89bca"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5be003612cd8a8d548d3ad59e4215d5b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "60880ee384ae7e94e76000ab32eccfd7"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "d8fa21174d712076c2efc07a374b507d"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "fe82afc143b2c835c68eb3af661fb66e"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "7b71ea59549ca63b4a7b9367f9eb1b07"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f25b71e518580a34dd28f3b4174e0baa"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "673e890bd0416f86445eef721a67b65c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "03b1635b03eb6feb27c453698bc2ffd3"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "b5c02725ce37082ebe745812ec4cb9cb"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "e8c69d7f609ef77bcbb070add879c85b"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "bad5d4ed7329e2ca93ddb0269aa992b6"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "9adf549739f65f18b6e8f4b4cad00331"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "6eb7d65c40594a160bcf22a07f734302"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "55a5598a5f4fc059c9fe6339f56fb4f9"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "e72a284e384049eb56f271688053e60c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "046d4eec1755d0fd85a54f2329c44c13"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "eb96e8f6d0d205e8ddec308c76c09465"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c703dc5d0dc66a1bd934c5e2d772ec29"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "8cfa44cf46de1f0c4249344a1a229ed2"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "0d995f9bfc18220bba5ee7702bcd3627"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "92e3c6e4776ea19b0fe7d502f7e75b8b"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "becd6aabf04206b3fe840b1a1abb6a41"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "87118a1c9eb42952db6f923dce3817af"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "50febb0bf1f6cf846ce6a3545b70ed51"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c5f65279b47a0606c0a60de167ddab1d"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "719e0488201fc2a8de42fc881d37bda2"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "5628a5b9746283b3482ab7e14e4a0271"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "38f8b2e84f56722af2cce2989248054a"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "401745cead8d5a60daa9a9d2cd42bc48"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "1873bc9407a6e3d943df693fa2f9324f"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2c8aa24fc5fe466964652cef80ee6341"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "40d330631f2cf0e4a2fa2f9106d00122"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "2e01d83742121c32f56486da34e171c6"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "b861ed90e9054f1a94a19b65ac3f6409"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "f32c0c13d47f670c7b97f935b2a5382a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "97cf1b5c546ec859f30834d885d653c1"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "5fdcbfa11f55baf74de70948f2ac801e"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "92184a5fc7cb5fb844f1ae51d560d572"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "3c600d2749789ae1ce164ea909b4e00c"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "0c5e5c0a580d756875dbdfe7c13a0a5f"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e7bf2edde05b30833794d222efe627d0"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "95d81cf94eeefdc517c6081db6d6db3a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7131bb1b705a6c2f8f87d31f316bfbe1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "803b018f7960f99177a7d3728c298e88"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "99ac44451c6d8a442b20267089126bba"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "eab3d1bdad70de9d0647a24ea921fd26"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "23f8af5623fb33a3483753fdc16b4429"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3f7dc1f635bf200f6a2bddd0d1b4ac28"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "eae6d3f3f9492effd6ae4a22ae8f483f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "61d863b4d5b38eb2c9c57e8a748e6c5e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ee0d342af9abedbd9637e61c493a10ae"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9fbfb390d868d49cf54cb3bb5aa32f1d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "f4f101d28a7dcb864347e066710ae2a4"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ef8871c3575d5f221d68eb458f9be72c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "63504ba81bc9043136d22a6044a2c515"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "5d11ff4a2d2b4a1ebb2089338d32f9eb"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2d7be3531c3321ae809c71527a7a0543"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "86075836ccb96b1372a77bb314e3e0a1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e8f9d6d7c9691bd222a2aad1def9f709"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "2123c8e45f542f3e5bb20dabd0788fe5"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "9f2c682e376e1e66bbdd9b16f62e4143"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "e7abacccb48c83571145e3c2d869f5cc"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "240efeae26aa709b6130fbe1f339ad0d"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e90f472953cbc062f2ae30153a46a535"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "cae38e116472267a365835e779661d1d"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d518d75aead22b3601de5075998fd37c"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "3efa50421ed3ea90e91bb29faff5267b"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "5a0c09085f2006dbc460632ad9371b3b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3c9ee6189a5eeaf5738ed848cb57cf82"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c4bc833d441f2b0d87a2ffebff6a3038"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "95a9887c2c90764213d977de8b81dbe9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9ddf6a72e19072528a63d9f01d97ce44"
  },
  {
    "url": "tag/index.html",
    "revision": "5be007cba9c9d8879a22b52a8b05984d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2360562dadfd1085ce3b3ab1ad0d9a2c"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "07591c135d8b9e621e74852bc8474199"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "50a9c3a851021d8c9849fd1b98d41945"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "a4dc7f34738471fa350bdf63b5e255c1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "c5939fcd8602cdc8b706c3396dce3925"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "77d11eefb759a6d8d92e4d6118b08cd1"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "07f1097c200997d15c07328dd457bd53"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "340daf44d72671f244b1477adbd53248"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "f7b19bc3579b7f3b7977ef2c67abe9e7"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "2f782dedde6466d272d491dc5847ad58"
  },
  {
    "url": "tag/json/index.html",
    "revision": "cf4e988d92af53a8c190f15db2031e95"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "a83aeb607574df74efb7d27a44786ff0"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "866e0edd323ab133f7642e8ebf132aab"
  },
  {
    "url": "tag/python/index.html",
    "revision": "18407e26d477faf39be97273dda5ba3a"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8d0bddb19240614c42644581f3ac5d58"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f5a8a4a12d43f147100e2ac99a686571"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "d9e3131e2c1026183f5abace42aad9a5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ee938d3791bfabd675ef559af2f5eeb0"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ca6a041eba0f9628b044e384753835bb"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "9e78a75332915082176182cae6b1f4a3"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "b01dc8fc89569c4df2615f63fb5ec683"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "6d83663216894eecf01f80e534529e16"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1598cc53c588bb45a73a84a1889c757f"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "0ccc39262f291a67ce7fcce2076f67ac"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "1b86d5ffbfb8966e00107bc7b2f2895d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3f11e22d188d75193f9a4b6b3ead4a36"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "897c9bb71a4464eb4e969dcf62976c1b"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "5e0b88471d6532e4abf2174df7213e7d"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "c74006cdbbc8ccd189b01a87c64ae603"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "9d96c687f1c3c4852c4bb6a9dcac1d5d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4b17fdeeb37c43e52f43a3c8770f287a"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "0dbae2e55dc0face0781c6bd4abe4690"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "272deee1dafd41ea3b69345fd13bd9cf"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3225268898704a1f154a4e6fdb33b441"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e4d077b6122e40df7d45b5dac80b65e2"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a2ed10fad8cede18805f91429508be4d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b3a8afed886b96a216c49ce47b8de8cb"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "45e9c1a665324688c6e1833c69755b0e"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "1fc251158cf9d43faeb6bf7ff9bdd300"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "4be58a1b5f43300139b07545276fadaf"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "7c1fc5148974338e052a423179737a5e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "15ef81ad6fb03e6315499cc5e04de062"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "3cc76813cc4fb0a728d96e72bd04338f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ca6e1f1530a7465b0e344fcea086041f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a6273ffd0dcc38694b4d40836bcf8c09"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "57f138d6212b1013ee54cda85e0ff0f3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6ebd5eb46ca37d46674d85d7f7c9527b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e6d2d61cb414642f7fd3db050716ac97"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "9712d602cbc20a3b36da8078fccbce53"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "c0cb2208850355c62058e04309670a16"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "60d695d83285ff13ad6142584ecaa999"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6d3aa7f5b37cd965a80701f5b5795e95"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "32938481115987209845d178d8fdfe4a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "33d393a1e42d1d82362cc70ea4329869"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a42ee0250abd6ec34f0012de318ee179"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d28a35fa5fe67d0bce46813894aea82d"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "15c2397f330a72fe33cc2852c1bbc318"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7a50402af14003528999bf6e2daaeb46"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9f4060b1e1aefeba8653f484d30db745"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8c1af992d3d0c9880e5c10c403d8d155"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4aca899b529b9da9ff72c52b0b75a8cc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "7d8e100761c5eda2a16231652e92f1ae"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4b5cb609e5deb4479ba37404e42cb7f5"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "1c0e28b78e5b4d69d22eeef9bba43021"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "5d5ca24ed93b37650ee13fe83591da34"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1ba08c74d204d8780da6727eb180d3db"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5cc65f0f55c68195df33d6fef8f54498"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "ce92f8ff0934c27a6f70f3c967b0869e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "5c5fc9f66d6dc385373f9f521ffa31c6"
  },
  {
    "url": "timeline/index.html",
    "revision": "a9c983df98c0cdca0bebb2bd18e30a49"
  },
  {
    "url": "tools/docsify.html",
    "revision": "f185604d74f1f18fbe34e7f30f025110"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "6dd9d51543d7a053ccac2ac7c4f02799"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "2bc6a27d59381b9ca6c46b1df9f2cff1"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "812de68e5bc0758a3be0f9abcf2357c3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3a1c70ad5c94cdd441c493fccadf04c8"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "aa9f25e04c2ff14c44b86358c8dfc8ba"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "fb284f0fb67bc63702021da2d0514701"
  },
  {
    "url": "tools/html/index.html",
    "revision": "2c2b0448087a58de747120bd674a1609"
  },
  {
    "url": "tools/note/index.html",
    "revision": "fa475c782348827fdf4b24a4b1a5d908"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "f5b121b65c2dceaea859469cc09a52b6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "878f762aceb9f52219579616faefbe7d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3b3b1dee224fceea5349bf09fe9b0262"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e6d1102bf0169f22a437b0ffe75f4678"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "cfef47918773e7d82d73b025b1fc2bd4"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "014d5df51614728ba6b72b08aee91ac9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1e007d62bb8ac0690bcaa5acce0dc4b1"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "2c6441d2796a1944d51857697963df98"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2ae7f866443ec7937045bbf502caef8b"
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
