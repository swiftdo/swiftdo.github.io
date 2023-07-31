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
    "revision": "325333de85e06b3db537aca1bc6726b8"
  },
  {
    "url": "about/app/index.html",
    "revision": "26a092c68755ac151a16c987734feb77"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0fbc706d45a0d12807fd6fa912cd7adc"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "1539cfb44b83dc82fd01df3ccde0cfe0"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "b7a1bf1624137d3dd7171546c595faf6"
  },
  {
    "url": "about/index/index.html",
    "revision": "e1097aedf3300a360c36fd407beada66"
  },
  {
    "url": "ai/index.html",
    "revision": "24fe08089b7316588dc7e809c874865a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "e09a11db5a916b7188372bd10f355492"
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
    "url": "assets/js/121.762075ba.js",
    "revision": "f9b920c6054be2bbb889ff2deb6f1347"
  },
  {
    "url": "assets/js/122.c73ed99b.js",
    "revision": "42dfe22717e24cb3861daa30f1074da9"
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
    "url": "assets/js/134.53ee34b7.js",
    "revision": "413d47f2798f4611849a3b10a01be63b"
  },
  {
    "url": "assets/js/135.daf0a5a9.js",
    "revision": "666876a6a12ff9ce4bc12396b614b9f5"
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
    "url": "assets/js/139.2aedcfe6.js",
    "revision": "fd28d7d23b241ed769039a4ad4ca7df9"
  },
  {
    "url": "assets/js/14.9e477e6b.js",
    "revision": "9cbcbe2c965b316403693fb5de1e9d70"
  },
  {
    "url": "assets/js/140.1729884f.js",
    "revision": "e38b9e4e8ff868b3927ee5c0302bf72b"
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
    "url": "assets/js/147.ae5b09c5.js",
    "revision": "12618991b1cddc06a944058513e5c98f"
  },
  {
    "url": "assets/js/148.3cb219cc.js",
    "revision": "f23baca5d089aeae2f494805ebc4d7fa"
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
    "url": "assets/js/156.f7c77910.js",
    "revision": "c070775352b1191ef5558cc65bc1fb84"
  },
  {
    "url": "assets/js/157.a833dead.js",
    "revision": "eb6100349ba46458ecf10acb14d87c0d"
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
    "url": "assets/js/165.8e1fd5f0.js",
    "revision": "fb11063e07353f706a494cb9b20f5784"
  },
  {
    "url": "assets/js/166.0a7b5442.js",
    "revision": "c539c00574e5229f1c7ee62cffa50355"
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
    "url": "assets/js/186.5c29fde8.js",
    "revision": "83669093ff7970286f3c877e15f62f60"
  },
  {
    "url": "assets/js/187.b4ae4440.js",
    "revision": "72354cf1e8200e468e520621a2f36e12"
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
    "url": "assets/js/201.506a955c.js",
    "revision": "a6c6cb0e8340344cf8331e99218cc77d"
  },
  {
    "url": "assets/js/202.615104b5.js",
    "revision": "4ec7d4b2a27498ac9612b6a7bdc68a7e"
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
    "url": "assets/js/218.fcd38c39.js",
    "revision": "251736133ced872ae067a9751ed6309a"
  },
  {
    "url": "assets/js/219.84df7c8d.js",
    "revision": "38ee469548348351aae608189f2cf2d0"
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
    "url": "assets/js/229.21ebf3dc.js",
    "revision": "0568e5cbb325d6a0e296377912ba386b"
  },
  {
    "url": "assets/js/23.c0389be0.js",
    "revision": "2e70fd7dc508315c05c263b94fc017a8"
  },
  {
    "url": "assets/js/230.35c49d0d.js",
    "revision": "ea72a97d8ff3a97aafa9e08a2512cf42"
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
    "url": "assets/js/238.8b811925.js",
    "revision": "898b6b71186881aad224303c9eaa6c13"
  },
  {
    "url": "assets/js/239.e7dcebc1.js",
    "revision": "838254f73e3486b5ace4f84603f4c0f1"
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
    "url": "assets/js/243.360c84a2.js",
    "revision": "2e94cfd58a9d817f3857b89cb9a1ad44"
  },
  {
    "url": "assets/js/244.7de06378.js",
    "revision": "c6fbb3db636d517c10454c6d619fa221"
  },
  {
    "url": "assets/js/245.69b07bc6.js",
    "revision": "1e75cec06fbba557fc54e0a937f1c7f6"
  },
  {
    "url": "assets/js/246.e69469fa.js",
    "revision": "11ef49b2a5c7233de4b8ac567beb1331"
  },
  {
    "url": "assets/js/247.a736c373.js",
    "revision": "2b3d7069920036f5d90a60d1de2fa4fd"
  },
  {
    "url": "assets/js/248.b0ab958b.js",
    "revision": "c7bd5074de1f4c23df2b9eabce7d0149"
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
    "url": "assets/js/250.9e5a723c.js",
    "revision": "26e84a82217c3dfb33a054b4f0e8e94f"
  },
  {
    "url": "assets/js/251.2af1fa1d.js",
    "revision": "cf6f94362c18d9eb647ac55973505a34"
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
    "url": "assets/js/278.4123d20d.js",
    "revision": "8ec1c61118c97a4c442fadd90d56f2b4"
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
    "url": "assets/js/37.fb2625ed.js",
    "revision": "ef9823df167228365c33a39efe80b943"
  },
  {
    "url": "assets/js/38.8baa75a4.js",
    "revision": "e9e8a241ec043e3b4528820a83f83295"
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
    "url": "assets/js/49.4b2216db.js",
    "revision": "d88b878d70c1645bcb4c9339a346319b"
  },
  {
    "url": "assets/js/5.43c3f80b.js",
    "revision": "622d4a544f4132c9b6afea6c56da577c"
  },
  {
    "url": "assets/js/50.a8644830.js",
    "revision": "a2fa74172eca14151d2e50ea47498edc"
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
    "url": "assets/js/app.752c1d76.js",
    "revision": "752b261b2231e41a737187c5a4048d9b"
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
    "revision": "802396cd1f736462ea7101cd1e69d37e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "7bfae5c335855f357114973b0b6c7986"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "097eda160f8c42dfc2c82b87ec8078bd"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "9127ae12a641723769ca1d6122749a21"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "8011af1041586781074b1e4878b33fe2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b9a5c651c75bc1bf8166433a01e434da"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "70e539cbd09985a6de0add04234fc600"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5b0f7e192acdaa4094cd26bd60ec80c9"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "56e1026f8b3876edf88152c8914b40e0"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9cd29767e67841d3932354c28329c7ba"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c6945881e3c54b84e2f56578864f08df"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "1f87b60dd7124c54c4deb75913a52225"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "6e99b4ff7b658cc505daa5e3e0502044"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "9ca3bb4b28918d16c0638bb1f1ccb5df"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d8ab371062e2f4c8706ba32cfc60867a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "0ccdcad2c698c9ad9131e93c995ac52e"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "8389acaf7cad6b123a303d15759c169a"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "2854277382f88c89c95a824397dea13c"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "1bff68ca862093b22b0a0bca212855ba"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "4c08dccfb5acd932e512712008b9c18b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "2eb2798a2b5f3ab32a89d591307d3c78"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "936279d2633791a4219353cf5517c959"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "9fbb87556efaad5f6dd9f78dcddf0d0a"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "cfc16c771173e6fccfbbefb3d2ffa193"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "8303080c88c2132fd5c48612b0ddb30d"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "c7fdfccb7de2e6d2c71cd6df28004d41"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "d9dba581814d6d6ff7f73f7bf186a48d"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "a5a8174ab5380de0f9957d3391179514"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "fa884e9414e8eaf93832826b03fc3e62"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "a8d324e8d5cec132c27877eb102ad9d0"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a67ce167e39202a87a7d566609c11d36"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "c5e61b1d042e8f8b2cb595dfcdef1d8a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "bf21aee0d9a86424af3cd86fd24f6467"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a03664b58a9b0f8e4ea7fa1845fa58a3"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "9843a97e2063bc265a5e725d4449e508"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "e612946dbd27de659ea41338101af83a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f7f88aefd8ea7617175cc897926d5691"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "49ef66a381c79a6881b616d138aa6b1f"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b3734a27c490c3ed1741d06eb848887f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8c9182a24a3f0b78c7ecd6adc006bce8"
  },
  {
    "url": "book/index.html",
    "revision": "b27ad7a0a36c57191c6b193163a67008"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "b260290f6e31a59c2ca30024941b3237"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "52004bdda0c01240967494c64df5cd71"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "51282de68325b1ad0c30acf8ac495eda"
  },
  {
    "url": "c/audio/index.html",
    "revision": "fb0b211f5c8389025bbe6550213eee29"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "44ad720b4935b5f4ff503c9659f7b3b8"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d80dd314b6100bb4881d67924e2936e9"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "f3a7ef6eaaf95fc2f0546b1e18398791"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "941831d24f329bbb11a1f81ea4f2891b"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "9ef24c52dff12fa4b1aca8dd8d98160a"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "bd2a337c851e8aa1f725b8cb0af10d8d"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "5534ee1390df53e18d312243434244b9"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "d6f8fbf9529045ea3bab0c654dca3d8d"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "59fca2b0c9864a1d652290ca6fba3fe5"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "ad5f9dba099353852dd86bc31aa3e53f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "f09f0e45b19e6f50d30e9efed52da8da"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8bbab6dbefaf8e07c6d6a2d0ca056e10"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "dffb359b7f2bf9cccb171bc1ab3efba4"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a008bdf285b2bad073e1a61a61bf3b39"
  },
  {
    "url": "c/program/index.html",
    "revision": "e08bdc50f8d19c58a9ddb15a9e6249fe"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "55b65e83c1538ca9f7467f28f17bc842"
  },
  {
    "url": "categories/index.html",
    "revision": "39b02f8cb83ba85196d92cb6a8e4ce58"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "360482d232e88cb4be1aabdd73f09150"
  },
  {
    "url": "figma/index.html",
    "revision": "deb33a7fdd6e5e1e1ec42cc7c632ee39"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "729dc2c5eaad1af565aee930f69cb6bd"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "846450266a6c619b1faed7284540555f"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "190c8a1d2c23ac4e7da6a2217fca8367"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "583b747bbf437752fb023079d342c684"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "260a7a2fd4408c52b6b60a7ca8db4d01"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "d98b84a694ba35aef5f3f2d849e194b8"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "c85c56904bc12137bd014962985d0a17"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "c9a1fb5c67b8687efe5cd959c83435cf"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "e3a4296bcc5e24ff4cb1357b3ab98951"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "40f8703a7707c3770c8e8445caa62c1c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "b94bc365b0c3b287c1bc6ad14abb5701"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "3459accc924a37f6e69300e07fcb015d"
  },
  {
    "url": "flutter/index.html",
    "revision": "6589dd7017697731f26dbf3f1452b095"
  },
  {
    "url": "flutter/point.html",
    "revision": "92834eb863da17144bb9162e2dba376b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8afd06b719db7e003d4f1b5a6f62d922"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "11326ea5dbae3168ec1eac10801efd44"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d786de2a718e3c4aaca548b47d1123e4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "56cb79a944bb7950bab4f16167176557"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "be23ce9061d4b4d24faac50b16a3d6e0"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "125719030bb754508a122bbb42454f6d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "7740efc5a08ea5602c6f7040bd042ed8"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "021436ff61a19d58db825dd9845420cc"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f7f2504c1b00567ee7fad4ae4c8a0e0a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "199da2c689d7ce524468562fdcf8da0b"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d4f97a08d9c22b67c2f1b4dde57e3031"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "cfcad7df3a4d3abf036e458800138f61"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "38af53418a330f6e32f8b71cf635aa78"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "deeff8f8d7847f036bd98c87683f3737"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "50461ba569f4b5e4a1223599ef2c6eb6"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1f038e2512b47986b1779419664e1bfa"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "c3aded628d444bf98a5e18c820f00ae3"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "67ed736944cdb3dc6f94e25d8b59b2d9"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9cdadf538e6d78de1bb1cae59ad4746b"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "f4ff2fa36eb654a2e1767f74743f7146"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "e1a7c5e39ed519b6fb12c8e006afa1d5"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "c75e9ca837186eba0fcbed77e7a1f82b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1a6bdf585cd575c187a6a7b7659f3fe2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "211ab97da2969bb2af878b9d05e5641c"
  },
  {
    "url": "haskell/index.html",
    "revision": "599ee3f16fc173b777824e4f66e62772"
  },
  {
    "url": "index.html",
    "revision": "45bbb17cb299c23768a42a7e5263e6c5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "f1e1395b11119cda31eec6255b72fb6c"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "edd4ca23c733fce77f43074d88c46963"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "9eef5aa46ad02a92975d9fe7edd4ceae"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "abb6abf33e518a1c81879bccdcb7f3e9"
  },
  {
    "url": "python/index.html",
    "revision": "83819037cbd626ee9de29e7ebbad34e1"
  },
  {
    "url": "python/python-ase.html",
    "revision": "671969b79c74ee2ce30adc3c9df3b9c0"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "a2e1b06de559e4b42db8f92d67aa8f97"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "523646f842bc82afa55106423e27b1d8"
  },
  {
    "url": "python/python-file.html",
    "revision": "c8252b0d48eee71fb2ed9d4c00a57040"
  },
  {
    "url": "python/python-function.html",
    "revision": "037e99f364511448eb8b6bd4cabf2f0f"
  },
  {
    "url": "python/python-generator.html",
    "revision": "8276f49b92e4494c9d83aba412770a0f"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "40717532d5acd1a994c6afc6f9c8ed99"
  },
  {
    "url": "python/python-module.html",
    "revision": "e0f341d596d5e4878134c99adee9725c"
  },
  {
    "url": "python/python-string.html",
    "revision": "341065df0392fab8b7bf6d58b13dd64c"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "e108d7a3e5a515202c49f9d7025bf1c1"
  },
  {
    "url": "read/index.html",
    "revision": "bd237b604b08a53b1e1b7e487a197111"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "06014c6786e4f67a6fb12c12cc89d775"
  },
  {
    "url": "swift/better/available.html",
    "revision": "a819d8ff5a09f38ecc5c8e96c75fafed"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e4b6c0a29d177514888d5c1f607ba8c0"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "ec005970fafea7287ad6315093cf81fa"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "18f15731a7babd27e605825d47113e8e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "ca8f7a85e9ecf1a5186a175751bf9fe9"
  },
  {
    "url": "swift/better/index.html",
    "revision": "8ed57ecff7e6f2f111c844b05364a1e6"
  },
  {
    "url": "swift/better/last.html",
    "revision": "21054013209c3938f715f6345b6a272c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "dcd7c587354b8084904756c8a3979c56"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "1a9baabf8ebbe88f3d802dfca56b0c16"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "044c1e8413ab6d2b9180f14ff34bb228"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "49fd03cfbd3234c5c0f31356eb109bb8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f7f801d26068023958669ff538bd652a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "5234ed4e50f432fb0c03df726bbdafba"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ef4c7343e4caa9cc87658b7ac051971a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "b20d38aadb9926e8b9b4c489c0515b2f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "7e051d19b0762cc00b466a7700c863f7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "5083b02cdd2d3447b78b3100722fc883"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "43db1b26e11eaa272195d6346408c5e5"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d6cdadea511e1d5dd94a1de483585ab3"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "cd60594779211ce566832d335e320c6c"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "64fe7173136e53b8774a79e01779acb7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "27121c740ef12c47f1cf33e4b50d006b"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "008e35a044e9713a6aa0af060a005423"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ab44339ea7b9d061ede8a699f3358c7d"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "e8aa7af8d58748b90716e8e40a314e55"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "fb98decefb30c4a304fcf7b369ad41b0"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "e0d0315ae0b12fd566141074253fdb68"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "6fe7c19438a627b19f25416fb6382f39"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "a70be97d63ce24999bfc84a7e6bf8eba"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "f38aad42701c1f7e01343579c2b6e62a"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "2c5c61658f1722fcee4e6e9f1ff5a3f7"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "36d36db7d5e1989fc4cabc090dc307fa"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "2669f87291cc061ac1159b763c283c5b"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "df806b5bab9e27c7b70ce54ea60b42c1"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "2f9d8027792b11b18b6e4e1659d83078"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "32efaeacd92b4ad098ba735f759e2eb2"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "7f23d1f439137185ff0aed14782aec35"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ab7853f2546e8c4661d51ccef7eb61e4"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "005b48995b1f867ebf9b1973033adf81"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "b655fecaac3970cd532cc76d122f8542"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "12f0a91f6400386862fe075600ffeabd"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "d75357cdedb325141494e8cd0f8d53f5"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2b73927b8e196c9ae463a6c00e28dffd"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "8634edb8ca763ecb060b1bca82b45557"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "3c1ebaf2cde614d0473664b3328d7ff1"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "8732730fc3ac15f370d0c5aadb94e495"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "f54659b2d2d829d4f0ac9289c1208b95"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "953034c015d77abc7bcbe7ccae06aeba"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8ea2afda13a4fb23490cdfe30ae46dc5"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "d6dffcde05f35c7f0130dd51bd998a67"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "caf2ff28b1806ca2699900dc2b56dde1"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "815737dc39ba7bb726d4d61cb6322992"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "eea0d797774f197cfe7985cce400dfb6"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "82beeefce6430eab1436580e38775171"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "a68e4a442fcdbb2dcf0f351d6a564e79"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3d0f1cbc66a3a4cd69ee51eb099a7682"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "8bc7edcd43378d59c9111e4b11c793f9"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "de00234ced113c6d1a7149cd35607dd4"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "be333f8016c968d0e0e0e39f3c591f60"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "9d1fb666f87b17c86e198fd59d14c268"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "54454c968fb0304241d88f03ae84681e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "e1b5258388ee93d7bae530e7d275e99a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "1be237c176c317f0fe9b623659e837a5"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "19297be9e0e919fee36a477e9585e819"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "a59bde91dfb5420866600be0fe6d09f2"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "95aa9f9ed4f13c43d977aca19d2e8986"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b898c022acd93167e63dc590716a41f2"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "6b2162dfee4b9e108621da99079b5c4d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b34a9ba7dfab3aa8c3c9d9c667e969dd"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "25fa22aed87f3cfb81ae8ff715456c26"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "0f8ce32e0097d945e792c0b8883bb2db"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "645e7a5be8c11d7e82ef1ccce16e8f9f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "65d0cfb03f7fb8ee66430b2c70226214"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "ca64b1889021e6a1bf5f0af68f1f7ae9"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "263d2b7d22c5005debe5c0669e39abbb"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "70f9f390c50673f62c146d6632fc3bab"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "a2374e3b918a5f6109943dd312a5c5bb"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "62b1834166291d67da487d1b78d26cab"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "bc9a52f5650481d95f80a6705e5a0d4b"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "8b41088e3f24111ef8029a93c52aaa94"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "11d087bae3e0f7297e658eeec1f0f560"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9e9681ae2f47a925b78073defa0a3f8c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "06158f5fd8d48443a5462a4b7a601ce0"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "fcc82a3f87a5b606754f77d7e962048d"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "f9ca5b5de09b13c91b47ee3c48455215"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b15500fe7259d03eca0079bdfb47d9b9"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "9f3ce13ac93823a39f6db01eee49f2b3"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "5605e69b6cb16ee6d5bc582d4bc9f213"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "f8740bbf2826e83215056a78905feb3f"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a3645888cf332dd61cff35e2fdcdc0d3"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b3a1f008fee2e0f3d599c54e2c022a22"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "51256ddfdb96c3ce9a3125ca3bde8567"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "b31ed7e841682cc80e28280225cb865b"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "c6de1a74381df6f2847ce08da1eee77b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c73430dd4e1347fc2d6ded7da0710fcf"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "0cd3041d249f129fff494431325326f0"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "51aafc174576061c783358c112a9c02d"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5cc7065e0bd3b3b992c2f9d90edc72c5"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "9645728ec4ed66bef34c60fc1075d20b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9aaeb2a32c3ccd3a91b46c5fc0303e36"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "71d0a9f878f45d371caeb34ab74b27a0"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "ef4155c1d240b4ae3e6bdb36cf35f053"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "6b030bdccc089dcf47ae276797996381"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "8394c12284a2e79033cada5a472ccf46"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "4931188e4598bdd8e4b3e72a52ec25e3"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "64db2748a66bd091580b9f0f12e76224"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "40dc30fa213e9213a7253cf18fd14fa4"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "90a7ae059c4a0659358fe0dad772afad"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "1170d5d8885b4fead40dae009495c605"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "0a8f9818a0481de4a25755b5bc5738b3"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "32cb7f8ec0171df111d1c147a23012b2"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "d3f197bd6a7adeaa1ac789f5d2fb5bed"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "63f76b175f8bbe0d442a73d63f8aec00"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "7854ce2bd03b3bb9493692c6f110fa8c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "958ac3b97d496ca0e1091a3165cccf85"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "bf4944895f50784ee67e7f74e73583cf"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d046e38c7c44ff14b21c0616addab80c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "bb5ea61643e9e31fc11bfe77edb0b70d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2194c4afc45da35b79d31715b4ab3322"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5735989be7153519278df45996c84822"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b7d4cd0004091d4f64c394c4b2c3462a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "57ebaea5e0fd3d6fe323374513b4a542"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "134a0c249286e223fb4cdd604e7f823c"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f4a137e5387cf99b27da7c1977b6347c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9dc861da33d3404530ba2b551e3ee7c5"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "f55ec6aff4bdf8ab0fa499f0d36f0a58"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b59c6a9b2eb28112d07fad778cf32b81"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "3371efeb8cd978d0a35b5cae6db0d53e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "28c3e7b2384a2a9e691eda7b4ad60532"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "0d761876b8d67238a5a963fd523eea8f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "525b3b07ac7e71fdd0270ad1153fbc42"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "c6100ad25fca849d0a2cb19716c53577"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "6767dc727a6fee6e3aef4ed3817fad01"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "d7c8b41729306be3dc524775c6d4f292"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2f2009582789e86ff19595c0a778f5dd"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e4e837cf1b5fee6d76270ab7af34408c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "717efa5a0fd7b1fdf3e7e3fb0abbfa97"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0f16d1665c9ad978011d1c4d417527ec"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "735c39229c7411cd36cec8550b04dbb5"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "bf27f15af2df40a60d341aad4ac797a5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fe3956a1d83a7bf3cccc740f76b3a3cd"
  },
  {
    "url": "tag/github/index.html",
    "revision": "e74d45b76aa1101a1aeae0e37e9d4431"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "17951c6266b3625644f960a2bbf4893a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fb5a84a540446b1f462a3298e2f53982"
  },
  {
    "url": "tag/index.html",
    "revision": "a1bca62f31b1c779ea91719e1adde12d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "207d220fda5080a095900a74a30bc26f"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "b59227f158b6e1205b5481827718d666"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "9d2994e9eed0cab6762230e6a10cf84e"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "1660ea1f253df9df95ee573df09eb781"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "8e47b1bb59ea10257424ddaa9277102f"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "60ff5f23a91f51d1072b8d7385cfd94c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "6dbb2ebe1c173ff60414ad3b3e660e57"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "1d6f296f5cb3c403e6b206ca9b43a470"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c0dfc6ec161a19b708d0fae04d9dd795"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "513ef633972132df4dce162b01168bff"
  },
  {
    "url": "tag/json/index.html",
    "revision": "66def48fd52a39abff286377d5dab1c1"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "78d214cd1897cfae7fc0e60fcd774b82"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "128b5894661974f60c8be69d4f8ef514"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ae8750a1c10431ff10ebb561b3930684"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "d232300ada9115d3c2f36c700cd6a4a4"
  },
  {
    "url": "tag/read/index.html",
    "revision": "85871a8c7443a84b206c19571d80074c"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "46224028dd644ba4cb0e086535470471"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7a5b85dcdfa51e591b018485d0cdbe26"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "97597f658c1ab56096938227863b040a"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "c72e6352f40d28b1fb779632e0e8b8e5"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "8a8a02fe29b03616e1e8727cebda2263"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "fbb6c48c6dca0932c2cee901005b46e8"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "20969b13609c3b40fda0159b5f8a430e"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "36294d66b6f0c2a0d3141c84ccaea483"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "db1e6379c644e04170e3a18bec3f3d98"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "21774acbdd2e94894f433adcb28336cd"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3f13454cdc60931adbe13271f3830b8a"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3e62af42d7153a3261ddeef52b08a72e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "a008dc334fd04eccf65ccb577818aecc"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "492b81c786b8ebb0198eeb709cc6c652"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "1d133d3676e598ee781426d3c37b4ac7"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "84ac46d4f1bfb00c8c5bfeb9f118a26d"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "576d7f47ed4ad88d231f9155f483a317"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "1126334721fe97f0a4eea724869b11fb"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "b07c5b268ff8178d930e34efef5b65b2"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "011aab28825e650883cff8093ce386de"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e34e2f5e834bcd4a19a66ec1820a33ff"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "5b0b81b054714d361ef8cf89acf9c9f4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ec255461a92ad4789ab71f66d59339d1"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "cd9aac69893ae68108f952887f918047"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "2981db4ec403eeb470f93df61510ac2b"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "e6a2be2df4b6a3c7a1bf8853c340c365"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "34171649290597bdb99cefbf4dc1d441"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8566f2fe06f0fa7ed5a2f0947646f6dd"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "008345248e21d15bfe6ad9ea725ddb42"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "63b1c1627d6b26db557bcb2f3e48951e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "5c357d77018508087d80c46310c4329c"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b968b889e9c68e9173bfdc515fa32c3e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a176802a550a63a4b30815bff380f4fc"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "34268a8a7357c51bbf17f02162f48080"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "67ccbf84259ebb98b520baf23d909868"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7331ce0f54505c558b791bfff6f95430"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "361338ffb6cf7df259b3a5a60963c82c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4c830c6a248c63577e94960cf544116f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3bd2aa74d1afa82ca62c9cf076d4b5b0"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "b367a5b3e95532e31638a95fb2533c9f"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "d14c1435f73187217fdaee22a5fb0813"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c59ad03a96b85aa964517a01bba9a84a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b70332832ecbddc6264b0b0c2cde4dd6"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f6e5239d451ade1d904a1b88ed9dfcf4"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "69cb9cdbe0ba8a49a8ab384a8ef01bc7"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "83db254a8ee530e533694112fc74fb9d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4558c2e78c93e582dc3eae11e65790bd"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "999d86199c7f7c2fdc8aaed3d2afafc2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "c54ba14a68f25c9123b519feedfa1d9e"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "86ac74d06dd3cc9a7bd229e37011685c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "eed45f66bf684f6641997a379d8cf293"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "96b872482068c742318d731a5eaf971c"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "cc7397db78e746f976f49617f9a199bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "c34d11acff51b068f453dc83f703efe2"
  },
  {
    "url": "tools/docsify.html",
    "revision": "d3c66b7b853418c2f776ffcf20e6f5e4"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "be5c501922610b9651e860757448db00"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "fc93fe2bf62493719c20a64cc9881c38"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "6f000d58d3b51e34e24e34a406a5e720"
  },
  {
    "url": "tools/git/index.html",
    "revision": "466d8ef991117ce8424694e13cf98173"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "aa2eda318e9f2af3ca515b17f3ca070e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "aa573211d4c14ce6f3a7e5258c7f7245"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0552d9dfcbf0737df6a60e8221377e1d"
  },
  {
    "url": "tools/note/index.html",
    "revision": "2a9bfe349319cee572f85b3562aa82d7"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "a4e2e3e2fd427cb77e0312a8e3823021"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0e7e3a0057652334316635f88f414d39"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9a39a46abb85d29ea25c919bbdf7f007"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "eff8a133c535352d79880668039705c4"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "7549977bc2c8c8d1f8e6059aee956ac9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9d3e3f91750f5179fa643bb348fa4759"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6f659dd5d9165d6fcddd99ad7c5d4b75"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f78cda9baafb198b1647609b95f4436d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "fef001288370f386d6dfdf157823469a"
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
