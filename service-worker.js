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
    "revision": "12c5170c980f8644e644de252ceb59ec"
  },
  {
    "url": "about/app/index.html",
    "revision": "3e7ac64afd724ec6af2ccb9351ee7ffe"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4137caa75e6463ba5ca6c471dd3ee280"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "5a59322a9839d257b8f5dc3b5ab27684"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "35a59370c05405c576f6a1c6a9b02471"
  },
  {
    "url": "about/index/index.html",
    "revision": "c9c1c9cc9c8603fc9d9419e1261da1a7"
  },
  {
    "url": "ai/index.html",
    "revision": "46faab33a6613494b5a9430a556cfa29"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c84a2f28ca0621978a2e263ee05e456d"
  },
  {
    "url": "algorithms/index.html",
    "revision": "69269ab73001d72882f955440c4abf65"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "fde2407631fa130ca57848cdd922f2fd"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "e2c8e330a198bfa45493c1d0aae97103"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "0580026dc1535ea22e5da9e9e1c607ec"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "d2486624a08d3be2eddc47a08c1c3e65"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "ddae4d5a0f88ca1f04ecef7b95e8dd4d"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "d9a1df0a3c4105f47190818c99130bf8"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "97a668557f1491353a1302a73bfaf372"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "9c8d089b792d758d6a736426dd4fbea2"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "3f0e80c9add7665201c0b86a2043ea45"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "4c3b9b33c9baaf978e13467284d7e3dd"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
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
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.69a25166.js",
    "revision": "d5af2247979966845b534fc33b3a2870"
  },
  {
    "url": "assets/js/101.acefafed.js",
    "revision": "2f0c56cdda84e36c990ac9a3507db423"
  },
  {
    "url": "assets/js/102.ca5426ad.js",
    "revision": "cafd07ce91ff0271252217501e43b401"
  },
  {
    "url": "assets/js/103.4f781b58.js",
    "revision": "d4c8e10903880aaca2a2394f01eb229b"
  },
  {
    "url": "assets/js/104.24b27520.js",
    "revision": "66aa8fc8f139eed433669575ce479e20"
  },
  {
    "url": "assets/js/105.16d8fdf9.js",
    "revision": "e5ed0a91d26cb66a16d54432e0efdbdd"
  },
  {
    "url": "assets/js/106.1cd90dfe.js",
    "revision": "d4495552a9967aec1e684620db11e13a"
  },
  {
    "url": "assets/js/107.7ca9a14d.js",
    "revision": "fb94303ed7ead9e56414029b6de09257"
  },
  {
    "url": "assets/js/108.24ca4c54.js",
    "revision": "fc3b4959c0445dd37bdb1f32192ebef1"
  },
  {
    "url": "assets/js/109.6549cb91.js",
    "revision": "33f93a2268efe19f47982f601eb8ed07"
  },
  {
    "url": "assets/js/110.6ed8b181.js",
    "revision": "213dc08430f58f4afcc333c10ec7f0d3"
  },
  {
    "url": "assets/js/111.be19c90e.js",
    "revision": "447f79ffcf38249613e67d7c51ea8478"
  },
  {
    "url": "assets/js/112.9092efa4.js",
    "revision": "fc723c8ce92b5ccf7661d11f246c6b10"
  },
  {
    "url": "assets/js/113.458cba46.js",
    "revision": "77fc30f568b63601902e6bfd9b3c5e0e"
  },
  {
    "url": "assets/js/114.197707a3.js",
    "revision": "4f71c8c78b9b1bce80014d19fca2946a"
  },
  {
    "url": "assets/js/115.cc01eb96.js",
    "revision": "4c012831eb8da5ab9b5f388edb68a9ce"
  },
  {
    "url": "assets/js/116.eb2a0256.js",
    "revision": "902fcb91514595d748c869e42d8c858a"
  },
  {
    "url": "assets/js/117.1e2f6874.js",
    "revision": "78b037a72524a1f66c716e6d8ce81659"
  },
  {
    "url": "assets/js/118.1e65dbb0.js",
    "revision": "ad2dc7d7e9ff39f9be905161f85bf3f6"
  },
  {
    "url": "assets/js/119.06a975cb.js",
    "revision": "fcde1e4bac7b5e0cc8f480ceaf7794db"
  },
  {
    "url": "assets/js/120.7a914dff.js",
    "revision": "5a59a872f228a9fcc510ba6d1646001f"
  },
  {
    "url": "assets/js/121.73c3996e.js",
    "revision": "be3050f71f98bfc860729d6fbd946d18"
  },
  {
    "url": "assets/js/122.a990c7c5.js",
    "revision": "768ee13297f68be96a0e41eb16bd40a1"
  },
  {
    "url": "assets/js/123.848521ac.js",
    "revision": "8d59e81fd6d30b81e5bcac8f7c154753"
  },
  {
    "url": "assets/js/124.d6b39717.js",
    "revision": "4312c283f816f520889bbba215043717"
  },
  {
    "url": "assets/js/125.03218c95.js",
    "revision": "78c6435c6ff2fc04a1b35a0529fd36a6"
  },
  {
    "url": "assets/js/126.66030130.js",
    "revision": "3a4c93078230fb2d2fe10661b17cc0f2"
  },
  {
    "url": "assets/js/127.d740c9f1.js",
    "revision": "17d14daf10d6b4d1e2ed46d618496614"
  },
  {
    "url": "assets/js/128.2e133b48.js",
    "revision": "278db52133dd4c91c5a2935132c237a5"
  },
  {
    "url": "assets/js/129.e52b3641.js",
    "revision": "52b193e0bdceb733d79acc8df9abb52e"
  },
  {
    "url": "assets/js/130.f29c8ed3.js",
    "revision": "2a0f2609d7b8b0eece052ae35b9b127c"
  },
  {
    "url": "assets/js/131.73605c79.js",
    "revision": "e853502bdfd8685298210b747afd8efc"
  },
  {
    "url": "assets/js/132.41a96205.js",
    "revision": "d39726dcd4fe43ecde91b5621abdef80"
  },
  {
    "url": "assets/js/133.52c89fcf.js",
    "revision": "2d89b87441668ce50440e62a2d610cb8"
  },
  {
    "url": "assets/js/134.ce8438c5.js",
    "revision": "bc3fbdd22f33f3b9bf2e7b571f6414c0"
  },
  {
    "url": "assets/js/135.09b72b1b.js",
    "revision": "a07a635a1d0fde00d493af9a6d6a52c2"
  },
  {
    "url": "assets/js/136.64c8ebe7.js",
    "revision": "18707cf4a9028258e92317610d39f852"
  },
  {
    "url": "assets/js/137.9d4accd9.js",
    "revision": "263fe622a675875c686e5e8b58ca9fb6"
  },
  {
    "url": "assets/js/138.35125a43.js",
    "revision": "68e93b63e0c487eef0854abdc6c312c1"
  },
  {
    "url": "assets/js/139.0b1649ca.js",
    "revision": "075f3a4f2c96dda39a815c18b3275043"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.0b034742.js",
    "revision": "cbaf831bf4221c4a548b03d08740adc1"
  },
  {
    "url": "assets/js/141.bcf8eea8.js",
    "revision": "dc3d54a280d4679edb97b00a4a1d12fc"
  },
  {
    "url": "assets/js/142.26133426.js",
    "revision": "1786c649c20b0bcf4162a25ac42cc416"
  },
  {
    "url": "assets/js/143.e8e114cf.js",
    "revision": "48966981dd8ce68cae21092a8e2550e4"
  },
  {
    "url": "assets/js/144.7e1a3c05.js",
    "revision": "92c6060bee0a744b5f88ef6f39eeb89b"
  },
  {
    "url": "assets/js/145.28442111.js",
    "revision": "7b0278c12acfa0d77b2aedda79ae4810"
  },
  {
    "url": "assets/js/146.e2645faa.js",
    "revision": "fa9d5e6f8feda0a6b41ed850084ae4f0"
  },
  {
    "url": "assets/js/147.67d3ba0d.js",
    "revision": "1a1e95c8232f3aa32a620bb35f500737"
  },
  {
    "url": "assets/js/148.0c8f2d77.js",
    "revision": "adb13f3bc84b539b1db78bc7922f27a0"
  },
  {
    "url": "assets/js/149.56f973ad.js",
    "revision": "75cd9c31a43c1d6f7ea80facb0756ba9"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.0f8bf57f.js",
    "revision": "a5e023d432e77cca3f95951cd87293f9"
  },
  {
    "url": "assets/js/151.3d3acd88.js",
    "revision": "d1840667f12bf23a04125cbe8baeb95b"
  },
  {
    "url": "assets/js/152.c06fa424.js",
    "revision": "32b28aeb99cce1afbbf0288eefe6f43f"
  },
  {
    "url": "assets/js/153.51da3f66.js",
    "revision": "06113620e0d75812b56f809c32f9d9ba"
  },
  {
    "url": "assets/js/154.942c3127.js",
    "revision": "7e9e69959949a98d9818e2cab95595d6"
  },
  {
    "url": "assets/js/155.0207a249.js",
    "revision": "c3ec9ec59505f62dcab0743d3afff699"
  },
  {
    "url": "assets/js/156.3dde5f3d.js",
    "revision": "73626425976ffffe4f02f1657ff15471"
  },
  {
    "url": "assets/js/157.fdf6569c.js",
    "revision": "c8672d60b9c79646973b9c96277a2d3d"
  },
  {
    "url": "assets/js/158.2d8d2af6.js",
    "revision": "eac917fe8378d497845d7809ed0f992a"
  },
  {
    "url": "assets/js/159.faf0346d.js",
    "revision": "f56227672be3c751bc456a7509db89b7"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.1a6ea121.js",
    "revision": "7df83dd48178cfe85bb036464d5ab984"
  },
  {
    "url": "assets/js/161.75975504.js",
    "revision": "a955846e344362ee1fb20cb92234cc4b"
  },
  {
    "url": "assets/js/162.109fb59e.js",
    "revision": "d1ba907ba240fc2c0326b9c951df7b2d"
  },
  {
    "url": "assets/js/163.21fd2d85.js",
    "revision": "d1254780316b7f0ec1c1e8739e7bd667"
  },
  {
    "url": "assets/js/164.3fde44d8.js",
    "revision": "f2f194af19bf9166e3da28540b80875b"
  },
  {
    "url": "assets/js/165.09ff9fc1.js",
    "revision": "823bec8e1d59b2add1997e430b5fc734"
  },
  {
    "url": "assets/js/166.f0195c64.js",
    "revision": "017c0550e9acca6887c6b9a5e451bdcc"
  },
  {
    "url": "assets/js/167.a2fdfb2e.js",
    "revision": "eae9970a94e6e902aaf3731c414cec45"
  },
  {
    "url": "assets/js/168.7300d5be.js",
    "revision": "f2fe9882cbeec852f42e15f827191d51"
  },
  {
    "url": "assets/js/169.efa2db69.js",
    "revision": "b098b91039c25003fe158db772735bee"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.2c1f8e23.js",
    "revision": "936bb9eed60c889612ba6ab7f043adc4"
  },
  {
    "url": "assets/js/171.3b085355.js",
    "revision": "6233f0124e88c3a5d233aeb7e24efb17"
  },
  {
    "url": "assets/js/172.a81f8a83.js",
    "revision": "ffe60d28f7210b9dfdf57280f6ecca46"
  },
  {
    "url": "assets/js/173.805b6cf8.js",
    "revision": "20c5a5c4fbd2fcfb55e1e7987dba70e2"
  },
  {
    "url": "assets/js/174.ce42f4a9.js",
    "revision": "4537919ffe7a7980638fe8e39c6c3479"
  },
  {
    "url": "assets/js/175.caf718b3.js",
    "revision": "80952c4104762ed1ce8eaa47b87a1e7d"
  },
  {
    "url": "assets/js/176.7a05e415.js",
    "revision": "fe2556c3f831fc90cbf44fcf3ac0cc29"
  },
  {
    "url": "assets/js/177.4a3c2cef.js",
    "revision": "b126eb512d23228c134044d0bb11a5af"
  },
  {
    "url": "assets/js/178.4a093684.js",
    "revision": "7a5892316b02f3e686dd4e0cd1e7eb8a"
  },
  {
    "url": "assets/js/179.e9f0fcca.js",
    "revision": "9babf94eb2475fe8c99c791c31666372"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.1acd8a12.js",
    "revision": "177408895aaddf2f0ef191ca7eca85a4"
  },
  {
    "url": "assets/js/181.ff4ae24c.js",
    "revision": "ebf97e50d4a23b5a6c8d091d5f2445f2"
  },
  {
    "url": "assets/js/182.dc968e2c.js",
    "revision": "305e974cf06f4586118219d7ca1176d0"
  },
  {
    "url": "assets/js/183.e2e66943.js",
    "revision": "2ade1fb0c2790dcde65ff19cad65bf45"
  },
  {
    "url": "assets/js/184.cff7fd75.js",
    "revision": "8d5fde27583fd2c3369dfc78c27bc5c6"
  },
  {
    "url": "assets/js/185.94d5ebb2.js",
    "revision": "6395d106a71ff41f142e81ef06a1a46f"
  },
  {
    "url": "assets/js/186.567a0d12.js",
    "revision": "8c8390131c6620c6ee3de0ffca9d87cb"
  },
  {
    "url": "assets/js/187.716994d7.js",
    "revision": "b62fddfbfca8f2a0e3a923354bea814d"
  },
  {
    "url": "assets/js/188.8eac8199.js",
    "revision": "e46dadcd9927d7a7c983999919aba022"
  },
  {
    "url": "assets/js/189.363da423.js",
    "revision": "a311df1e664e554efb3b2c4231f7af7e"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.82f8d255.js",
    "revision": "592dcac7ef9acee66de9427c2c4bf51b"
  },
  {
    "url": "assets/js/191.4d17306b.js",
    "revision": "de16350509fdb289c4d989c6e224e4a5"
  },
  {
    "url": "assets/js/192.5a4fc940.js",
    "revision": "8da5e1f52560e0234c735e182c4ea37e"
  },
  {
    "url": "assets/js/193.d31d62ed.js",
    "revision": "d020006d5f496d3e3c33a7580badec34"
  },
  {
    "url": "assets/js/194.261d3322.js",
    "revision": "520c3ffb3fe548a55a603c0378bf0032"
  },
  {
    "url": "assets/js/195.f4f2b63f.js",
    "revision": "4989e49c30dd79c0243ed3ef34d718d3"
  },
  {
    "url": "assets/js/196.c5103a31.js",
    "revision": "3159d778014084503a44f848af18e65f"
  },
  {
    "url": "assets/js/197.2257dd2e.js",
    "revision": "b88e563f94c7dba7f1244f157494f518"
  },
  {
    "url": "assets/js/198.ca3f146e.js",
    "revision": "80b2352ca5e142959cf0b5f6c48c48bc"
  },
  {
    "url": "assets/js/199.0512a4b4.js",
    "revision": "ae3153b12fa5cd2898862c202b3f0075"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.078271de.js",
    "revision": "27f331beef37f4c0c961f04bd3264a75"
  },
  {
    "url": "assets/js/201.5ac67b2d.js",
    "revision": "039446490332127bae84a2839523c25f"
  },
  {
    "url": "assets/js/202.c234e63d.js",
    "revision": "6c471eab5fea8558345f871b9f0a892c"
  },
  {
    "url": "assets/js/203.2419a3b6.js",
    "revision": "22a2c6fc0e80f095328cbae2ef2b866f"
  },
  {
    "url": "assets/js/204.c09afcc6.js",
    "revision": "784fe50c60894c3c8c98075bb78c732f"
  },
  {
    "url": "assets/js/205.7339149d.js",
    "revision": "abc616aebf7974800e343fbb46fe30a2"
  },
  {
    "url": "assets/js/206.a6563b5a.js",
    "revision": "6db9d4d2e023c9d036f2f953c929a7bd"
  },
  {
    "url": "assets/js/207.d51522dc.js",
    "revision": "bd80c977d6ccd8ffff4a968a62b7b549"
  },
  {
    "url": "assets/js/208.cfa7ec56.js",
    "revision": "6720a093a7b90d7d96f4a80d0b146ad9"
  },
  {
    "url": "assets/js/209.bc50f89d.js",
    "revision": "bd31a25c0d9ac4160394c215467cffcb"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.2ee48204.js",
    "revision": "214e2bde12737ec90a09e3355ab5eebf"
  },
  {
    "url": "assets/js/211.55b73076.js",
    "revision": "7e9d6b617b6bffc7e6ebb97f5cbd3849"
  },
  {
    "url": "assets/js/212.9b01799c.js",
    "revision": "c5b9f6ef2310833ec0e72031547107fd"
  },
  {
    "url": "assets/js/213.d53e5794.js",
    "revision": "04cd8d13fd30660e930733fc5b9e6898"
  },
  {
    "url": "assets/js/214.f41131b4.js",
    "revision": "db91799cd1af68c563d78147cf08e70d"
  },
  {
    "url": "assets/js/215.404800d8.js",
    "revision": "968ed95c58a030093a070c42f42f4116"
  },
  {
    "url": "assets/js/216.7f5d9e26.js",
    "revision": "782ebcd6fe2e047217f19c7855972c82"
  },
  {
    "url": "assets/js/217.723fcff7.js",
    "revision": "2911aede665331e4d10ccbb653cf3b5a"
  },
  {
    "url": "assets/js/218.7fcefa19.js",
    "revision": "8e28e08621f861d51615ea7e9ec1f45c"
  },
  {
    "url": "assets/js/219.19a2a5a1.js",
    "revision": "56c842e03ebcd34e065379858a2a9348"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.45ed3ae7.js",
    "revision": "c345ddeb380ce74b5aafd4efffd30278"
  },
  {
    "url": "assets/js/221.f60fc627.js",
    "revision": "b1d22f0b6ee1c7ce1a1b9c48b555b921"
  },
  {
    "url": "assets/js/222.55d61de0.js",
    "revision": "11b5534745ae48b546d08aac2b5167f3"
  },
  {
    "url": "assets/js/223.fbcfc72e.js",
    "revision": "af2ad5864aa7265c87007f758741bd1d"
  },
  {
    "url": "assets/js/224.e25dbb5c.js",
    "revision": "1f257cf48fe9427c50f9492dfec4fbf7"
  },
  {
    "url": "assets/js/225.f40b8c6f.js",
    "revision": "e49ad7202c80af59f6e7acf43035fc74"
  },
  {
    "url": "assets/js/226.4f77abe6.js",
    "revision": "802dddd0b0c9fd1e0ef2bee9667358c9"
  },
  {
    "url": "assets/js/227.ac84c62b.js",
    "revision": "4f7846e5e077062d4da914e9a498e901"
  },
  {
    "url": "assets/js/228.e69fa6c6.js",
    "revision": "8261abc2c3368f0a1672aa4b0dd2bcb0"
  },
  {
    "url": "assets/js/229.1899d2a5.js",
    "revision": "1c65810cdfc379f2010a597d574e1270"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.233ece0b.js",
    "revision": "2921f5d453cbf928c296501c8c568c34"
  },
  {
    "url": "assets/js/231.27a09744.js",
    "revision": "31c4690ca4e8291e7d1896f1228a9111"
  },
  {
    "url": "assets/js/232.68418381.js",
    "revision": "54657ad6de534bc48e0783dda8c8e241"
  },
  {
    "url": "assets/js/233.4bf559ff.js",
    "revision": "14f8f5f7779439620dfa28ec0f668b30"
  },
  {
    "url": "assets/js/234.6248072a.js",
    "revision": "39fdeff5ef8fe1a6b28c87c649738cfa"
  },
  {
    "url": "assets/js/235.136781df.js",
    "revision": "548e6b4d08e9ba2355b8f82b27cc146b"
  },
  {
    "url": "assets/js/236.a1c8e8cc.js",
    "revision": "80c53540e510a2dcd396515ae1950d44"
  },
  {
    "url": "assets/js/237.f89de72e.js",
    "revision": "74a734843f56e3e3a4a528409af1310f"
  },
  {
    "url": "assets/js/238.abca9994.js",
    "revision": "e779d391751ba34fbf49f0876274b5a7"
  },
  {
    "url": "assets/js/239.95a00d8c.js",
    "revision": "49bb916c70f3391f6137df7ab9d9ad44"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.035ccb37.js",
    "revision": "fa6212b0c8f4d0d29c2f2f465f598d65"
  },
  {
    "url": "assets/js/241.43caad33.js",
    "revision": "345078b98c5ba2e4c112cee3fe9f3f0f"
  },
  {
    "url": "assets/js/242.b4e518ce.js",
    "revision": "8b07b6479b8196f7a96cb5c25da143f3"
  },
  {
    "url": "assets/js/243.26ee5e19.js",
    "revision": "4b34e94f6ea1a50848532a2808767b99"
  },
  {
    "url": "assets/js/244.9e9b4401.js",
    "revision": "9955e5ed8c83c3e2b963dd99128de584"
  },
  {
    "url": "assets/js/245.f1e0b17f.js",
    "revision": "46589519f8c023f9d71905d1faaa3555"
  },
  {
    "url": "assets/js/246.bd8c4651.js",
    "revision": "88dddc9206ecf5046d7e6ea5e0125c4f"
  },
  {
    "url": "assets/js/247.90fd057c.js",
    "revision": "bb56967c9a19a13f31ac6fe3303e141e"
  },
  {
    "url": "assets/js/248.b8c797d2.js",
    "revision": "09354db2e30156d4379643f8c0359e09"
  },
  {
    "url": "assets/js/249.76d732a7.js",
    "revision": "8dc908c0cbacfb0723acd4fd7bce3a05"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.3e08dd75.js",
    "revision": "46723a7bc8a3e6fded48e4ef1e0de61d"
  },
  {
    "url": "assets/js/251.400ae66d.js",
    "revision": "867917da5d9fe28ac26e24f3afbd52c6"
  },
  {
    "url": "assets/js/252.80de870d.js",
    "revision": "20457a8e97e5844dfe73a0db71f37282"
  },
  {
    "url": "assets/js/253.0ff2a1e0.js",
    "revision": "f0d29aa248e87c879b5a72be39702ac3"
  },
  {
    "url": "assets/js/254.94ab197e.js",
    "revision": "cd6612f03ed93c79352448f74be83cc9"
  },
  {
    "url": "assets/js/255.e10447dc.js",
    "revision": "d93707e9b53c6522110b5d1ed4cdcff4"
  },
  {
    "url": "assets/js/256.45a989ee.js",
    "revision": "7ca8d3dbb398bb39187b554fc12ff104"
  },
  {
    "url": "assets/js/257.5c4a34e5.js",
    "revision": "7c0529f48575354795c09e0e1db627f3"
  },
  {
    "url": "assets/js/258.fe58bb94.js",
    "revision": "c08f28e10f2fc08dde630895ad1846ac"
  },
  {
    "url": "assets/js/259.39bdb69e.js",
    "revision": "beb46bc98f8a6650b857d1617f01ca61"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.897e7e4c.js",
    "revision": "7fd89d975d97fbe64f91b3696b374cfd"
  },
  {
    "url": "assets/js/261.1b551045.js",
    "revision": "f1f5cb9805c3797af1289ef04f5f24e7"
  },
  {
    "url": "assets/js/262.ae46ce2e.js",
    "revision": "dcf114ad71fa0493c8d954bd168bf5cf"
  },
  {
    "url": "assets/js/263.adb617f4.js",
    "revision": "b8632eb03e558ba49f5ae2db9581fd95"
  },
  {
    "url": "assets/js/264.08ea6815.js",
    "revision": "c7b92d476d716a08873eece5bd12daa8"
  },
  {
    "url": "assets/js/265.3059213e.js",
    "revision": "bb88742b861751ec8e39b737c5531834"
  },
  {
    "url": "assets/js/266.4b382b1d.js",
    "revision": "b25743c14550a100709011b6ccb042d0"
  },
  {
    "url": "assets/js/267.0eb2730e.js",
    "revision": "2e81d284e38459757a9794fd2fc1a052"
  },
  {
    "url": "assets/js/268.694608a8.js",
    "revision": "9ef004552a97a3cfc4a921160f587726"
  },
  {
    "url": "assets/js/269.13f31b99.js",
    "revision": "80c177387a473f37ba23975f44bcf74d"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.03ef8f6c.js",
    "revision": "d1290250d5f83553a4d2323fd6728c5c"
  },
  {
    "url": "assets/js/271.e235ae66.js",
    "revision": "bc59df0c78f012874747f2e8bd3c1b53"
  },
  {
    "url": "assets/js/272.ee92e871.js",
    "revision": "1ed9b391b5792548814c9274e5544bd6"
  },
  {
    "url": "assets/js/273.f654bfa0.js",
    "revision": "68dd3f43c872fa13933253f57cac5046"
  },
  {
    "url": "assets/js/274.340d6ba1.js",
    "revision": "77a68d374cda0333e19ea6c9d9715fcd"
  },
  {
    "url": "assets/js/275.116174a6.js",
    "revision": "ae4277feab07e62386360b3855589af4"
  },
  {
    "url": "assets/js/276.368abdcb.js",
    "revision": "c4d47e8945aa7fbcbef08c2ab04ca367"
  },
  {
    "url": "assets/js/277.202be332.js",
    "revision": "908759c57057f7e606bc26ffe6e0e2f4"
  },
  {
    "url": "assets/js/278.2dd802f2.js",
    "revision": "93aeec352aa0e4710d4903d5c51c3574"
  },
  {
    "url": "assets/js/279.694f463f.js",
    "revision": "c2c18c1687010948b7c1e71c76994bff"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.223d9eac.js",
    "revision": "68312a1c80c51c863943346cf8ae15fd"
  },
  {
    "url": "assets/js/281.97f9e115.js",
    "revision": "1bbb1e881e4e3d66d124fb0dfed45e37"
  },
  {
    "url": "assets/js/282.10a3cdde.js",
    "revision": "0dcdbf71f99123db310e731a6e5ec850"
  },
  {
    "url": "assets/js/283.be1ab189.js",
    "revision": "2e531fd8f05a693eba402d1ef7e58131"
  },
  {
    "url": "assets/js/284.0d562fd4.js",
    "revision": "93d7e00c2b08a64b0e86cfe7f8bf9a20"
  },
  {
    "url": "assets/js/285.cf38bf8b.js",
    "revision": "ab2db4e605dc3497d9040879197d6458"
  },
  {
    "url": "assets/js/286.835a9612.js",
    "revision": "3ff9dbff411ac211d39d08b3b62a5b8a"
  },
  {
    "url": "assets/js/287.cdb4a797.js",
    "revision": "e8317c4183e3e49bb7888a729228dd31"
  },
  {
    "url": "assets/js/288.ad60453d.js",
    "revision": "cf6d3b97e27ac2baab34c523ed77585c"
  },
  {
    "url": "assets/js/289.a0496366.js",
    "revision": "f5643ca5e707f32bf1c17da6d551b738"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.ca84dd9c.js",
    "revision": "4dca1c34a94f65891092d686863befb1"
  },
  {
    "url": "assets/js/291.730d7281.js",
    "revision": "038185a91409a99a32dff53eccf601c7"
  },
  {
    "url": "assets/js/292.95ddfbd8.js",
    "revision": "4ae758b3d5121afd9dff6cd40a7cf453"
  },
  {
    "url": "assets/js/293.d546ae92.js",
    "revision": "bf71480cba0db4f9397de85c09702c92"
  },
  {
    "url": "assets/js/294.78eaa591.js",
    "revision": "641cc4967501bfdab109ac058ff98fae"
  },
  {
    "url": "assets/js/295.f9cbdb79.js",
    "revision": "c87d2ea51b43ed5b3c4cd0c39ee37d07"
  },
  {
    "url": "assets/js/296.a86f8115.js",
    "revision": "616cdf780bb3fa6759b66f459b8bea00"
  },
  {
    "url": "assets/js/297.07809f00.js",
    "revision": "21039bd737c992d11d70a1829a695674"
  },
  {
    "url": "assets/js/298.42fc04c7.js",
    "revision": "ee9f8b9a4de7b026234e5db7d42f92f5"
  },
  {
    "url": "assets/js/299.ed6386e9.js",
    "revision": "db94b2277d5df1626092e2a7ae39fd1a"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.15e68627.js",
    "revision": "d82f7cb1b49e0a2a96d4ed8aaa336c37"
  },
  {
    "url": "assets/js/301.2081adda.js",
    "revision": "38f1c8a57dffb775be7209f566617531"
  },
  {
    "url": "assets/js/302.bacf4add.js",
    "revision": "7d5722e3dc5bc64c2765015f713803da"
  },
  {
    "url": "assets/js/303.46f3ea45.js",
    "revision": "9e06c5fd01062fe9e50d3ddfd15150fa"
  },
  {
    "url": "assets/js/304.513c8bff.js",
    "revision": "7d39655c752d4424f3bd5760060adbea"
  },
  {
    "url": "assets/js/305.0416c105.js",
    "revision": "77fb4e77352513b875891838c6bcced4"
  },
  {
    "url": "assets/js/306.894fd215.js",
    "revision": "390452c98c7bf78c87fff76fe5e60b18"
  },
  {
    "url": "assets/js/307.23967a5b.js",
    "revision": "8dd99b407ba1886fb885d0029017442a"
  },
  {
    "url": "assets/js/308.d0c569dd.js",
    "revision": "75b2fb9cec3a22caea073d7328bfa12b"
  },
  {
    "url": "assets/js/309.c2dc8f39.js",
    "revision": "81daae578cb5e252848fbb7449e3b437"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.719bbe78.js",
    "revision": "caa427a1cfb2351256f30888b74e1b7f"
  },
  {
    "url": "assets/js/311.dc5a3fd3.js",
    "revision": "33a61b330f7126e8f53fc37b7a768fa5"
  },
  {
    "url": "assets/js/312.36d69c9a.js",
    "revision": "f3fbd567a695315405b8c4b5647761dc"
  },
  {
    "url": "assets/js/313.8f6100d4.js",
    "revision": "79419f3d48f75e880a1e6912bd98a1e8"
  },
  {
    "url": "assets/js/314.bf376ec5.js",
    "revision": "80d3b53231fa728303f7459c34700bf5"
  },
  {
    "url": "assets/js/315.24953efc.js",
    "revision": "c35c4c2ad60386fca27e4fc68ff40f09"
  },
  {
    "url": "assets/js/316.506b63be.js",
    "revision": "641b968803dd50dfe5111b779f1b4237"
  },
  {
    "url": "assets/js/317.51d7a2aa.js",
    "revision": "a61bd81e05c7657b16292e5bc40a96ba"
  },
  {
    "url": "assets/js/318.6f04cb36.js",
    "revision": "0919f970a2947e78b8893714ce6bda2c"
  },
  {
    "url": "assets/js/319.b09fe8e6.js",
    "revision": "26e1df21677217c06c798c0d4e4ca10d"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.a253fec5.js",
    "revision": "e603e43bd11b9b0ff8af1629e9476ddf"
  },
  {
    "url": "assets/js/321.e05191c9.js",
    "revision": "cae0a096348103399ae696f987a1a3ab"
  },
  {
    "url": "assets/js/322.16210af1.js",
    "revision": "9102d9f60cb43fd514917747040678ca"
  },
  {
    "url": "assets/js/323.a997979b.js",
    "revision": "07b991abe2b750f18824209e71839c91"
  },
  {
    "url": "assets/js/324.7615a1cc.js",
    "revision": "e2e1dc14827318f8b75395b5e855348d"
  },
  {
    "url": "assets/js/325.2f511e8a.js",
    "revision": "bdc798a0e879dd5e177356b1a6bc550a"
  },
  {
    "url": "assets/js/326.e1b111e0.js",
    "revision": "9dcfab39180253cc6c30fdbb216ca6b6"
  },
  {
    "url": "assets/js/327.90df86ac.js",
    "revision": "d289fe68647f5acde7ed9bbebd401d05"
  },
  {
    "url": "assets/js/328.17108130.js",
    "revision": "4754089d8fa20b813e114f6e7e40c4b2"
  },
  {
    "url": "assets/js/329.0a9c877b.js",
    "revision": "cc1ed0285718c81bc16df87658409e95"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.032c9afc.js",
    "revision": "cdde8bf8d7c334a379f199fc0cf4fdd9"
  },
  {
    "url": "assets/js/331.dee1fb0d.js",
    "revision": "707f22d2030339a2a63bca73d83a9506"
  },
  {
    "url": "assets/js/332.c249aa3b.js",
    "revision": "f1f9f5fe3d3bd67ad8f0019917d64f62"
  },
  {
    "url": "assets/js/333.f1728244.js",
    "revision": "5d64bf2d7d055c57e0ac2b69ae702a54"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d98ef824.js",
    "revision": "be9d5ed0ed7f08cfa8c58aefa206c05a"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.4600d658.js",
    "revision": "13f17db84c21c7b02109a6d1a10e9bfb"
  },
  {
    "url": "assets/js/41.df5b2e8b.js",
    "revision": "d704aabcb010b4cb446171138dc8ab1b"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
  },
  {
    "url": "assets/js/43.83a99001.js",
    "revision": "3a2f887888b9ffcd0373af50f4b511eb"
  },
  {
    "url": "assets/js/44.0b5e9d9b.js",
    "revision": "991864d46f8a5c6bf3113363341db718"
  },
  {
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
  },
  {
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.fc0717f1.js",
    "revision": "82fb958c414b1f8dcad72a4ab5dedcee"
  },
  {
    "url": "assets/js/48.44d0411f.js",
    "revision": "7cff24e17a3c00dfa33db4562a5cf2e3"
  },
  {
    "url": "assets/js/49.7acf0eb1.js",
    "revision": "9ebf2ea0f5586f1e8af080fb271a886f"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.700e84d8.js",
    "revision": "9bd018bab0f809df58c70b08e9e5602c"
  },
  {
    "url": "assets/js/51.9586ee6f.js",
    "revision": "184943a74908d4e93ba473a519ff58f8"
  },
  {
    "url": "assets/js/52.c4f4ae07.js",
    "revision": "e30269404965570326f904033403dc8c"
  },
  {
    "url": "assets/js/53.a7326fea.js",
    "revision": "8f482dcfc8d3562cb95f221d47616c2b"
  },
  {
    "url": "assets/js/54.132dbd14.js",
    "revision": "c9c33058cc768551b8c892b7a4b7a8ae"
  },
  {
    "url": "assets/js/55.1de3bf60.js",
    "revision": "a0b2ba385d9913d95c5b48f079d3639a"
  },
  {
    "url": "assets/js/56.c1c80725.js",
    "revision": "5402f49ea41cd1af43b0c8e6ae7a5f84"
  },
  {
    "url": "assets/js/57.9c9b089d.js",
    "revision": "59e4243ff7354124a819b6817d9ab8ae"
  },
  {
    "url": "assets/js/58.904eff84.js",
    "revision": "6dd77eefd76fb4108367ea5645a44bf5"
  },
  {
    "url": "assets/js/59.7f2c6fa4.js",
    "revision": "83948a8f0713421d0deebeac846ea292"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.2848b967.js",
    "revision": "3b7f5018266b716f1be89ecd01718895"
  },
  {
    "url": "assets/js/61.0e3922ea.js",
    "revision": "ce2b387ebaa7be5ec2bb678a88dd718a"
  },
  {
    "url": "assets/js/62.e204a376.js",
    "revision": "26c3cd2b1ac8199319aab6a6b7112e50"
  },
  {
    "url": "assets/js/63.2d6a07f8.js",
    "revision": "8a3b20f0c98efdf8fb83deec5465eeb0"
  },
  {
    "url": "assets/js/64.5c0091c8.js",
    "revision": "171b8b6cf87f72bfe3fd0a2fbda2e5c4"
  },
  {
    "url": "assets/js/65.0d18b526.js",
    "revision": "90643b756ae1cab40be49f193187021b"
  },
  {
    "url": "assets/js/66.c51ef002.js",
    "revision": "9ac4d6658ed77d09c2d43e435bca4d81"
  },
  {
    "url": "assets/js/67.8f335cc9.js",
    "revision": "ec796a5b1d82d5accefcf785c75f723d"
  },
  {
    "url": "assets/js/68.fc6048c4.js",
    "revision": "1d0a02d9328c04a98feff05ca049c884"
  },
  {
    "url": "assets/js/69.a1687cba.js",
    "revision": "a6379df171e2a637326795201f9c7dd4"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.2ac850ae.js",
    "revision": "9abff5314991aa39d772d93ad551a271"
  },
  {
    "url": "assets/js/71.c8ff1960.js",
    "revision": "851dbd73416fb788ebccb4a89f7b5fa3"
  },
  {
    "url": "assets/js/72.6d2bc36e.js",
    "revision": "c0e8b2b42f4ca3f5754e070ec7e81065"
  },
  {
    "url": "assets/js/73.55edb1c4.js",
    "revision": "be367a7d0f7737199095a830c2f3a9ac"
  },
  {
    "url": "assets/js/74.4328d99b.js",
    "revision": "9ca92807fe36201566c43490d8904ecf"
  },
  {
    "url": "assets/js/75.12da5957.js",
    "revision": "c1f98047b3c9a4254dc4aeb27c81b585"
  },
  {
    "url": "assets/js/76.6ed3f5cc.js",
    "revision": "07d3a37f21831800633e4e25436031a6"
  },
  {
    "url": "assets/js/77.78c60725.js",
    "revision": "470a8edfe59411b4ad00a2d219d34609"
  },
  {
    "url": "assets/js/78.5cf1c207.js",
    "revision": "74e36c5c592d92b8c398b0c7268510db"
  },
  {
    "url": "assets/js/79.ddc48247.js",
    "revision": "f54aec4261368471261ab53a0a3e733c"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.e0e3e65e.js",
    "revision": "603fb3d86cacc61fe82f16cb50b8b7b3"
  },
  {
    "url": "assets/js/81.e638bc6f.js",
    "revision": "2ada032ec096912e2b33f490f3636c1b"
  },
  {
    "url": "assets/js/82.1052902e.js",
    "revision": "2ba0d6c01ce2823d826bebc5dbe86b74"
  },
  {
    "url": "assets/js/83.3eed4b21.js",
    "revision": "3f4006bdaee85928fa0ff2aa08c50a9f"
  },
  {
    "url": "assets/js/84.48dbbd04.js",
    "revision": "cee6a936dc6469099dd506bdfa21454b"
  },
  {
    "url": "assets/js/85.8c79fc1c.js",
    "revision": "06cf122ec8e3260b1cb9ca32909617c9"
  },
  {
    "url": "assets/js/86.5d11431f.js",
    "revision": "fe75730b14a0851235a3c147df668df0"
  },
  {
    "url": "assets/js/87.b4cec39a.js",
    "revision": "82e2693451e29b21d4769c2d68ff6c94"
  },
  {
    "url": "assets/js/88.74a30075.js",
    "revision": "10bb06959e6bcb9338ac94787aab2e61"
  },
  {
    "url": "assets/js/89.91c8a955.js",
    "revision": "44b89c910b0dd2b33b03c62d12255318"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.393e3a69.js",
    "revision": "2eb5de3b01dc1100f6a01c67083f69d9"
  },
  {
    "url": "assets/js/91.4eb8b6a1.js",
    "revision": "4a39bcd1d11293897fba73a81b0b6c94"
  },
  {
    "url": "assets/js/92.003ae620.js",
    "revision": "31eab006d6234e0fc779c0c9c2d4357e"
  },
  {
    "url": "assets/js/93.0f9d7a79.js",
    "revision": "134d06dc70f01e20c849d43de4945bff"
  },
  {
    "url": "assets/js/94.5f51211d.js",
    "revision": "ece1e0f6f5fd7d2f33bbfaa228dee5f2"
  },
  {
    "url": "assets/js/95.b88fceb5.js",
    "revision": "8f3fdd267a4579feb0308c58360aa06b"
  },
  {
    "url": "assets/js/96.4f3f6d8a.js",
    "revision": "af72e2298c687c4b9ff289ae8814939c"
  },
  {
    "url": "assets/js/97.40c691d4.js",
    "revision": "a027f6a41a75c12d02100e42d7e084ad"
  },
  {
    "url": "assets/js/98.d9f2c231.js",
    "revision": "357f51139803bca9dad90bfead793010"
  },
  {
    "url": "assets/js/99.87e68df5.js",
    "revision": "9a0ecec63411428f454259e821b968bc"
  },
  {
    "url": "assets/js/app.1f4ffc81.js",
    "revision": "9485315fa63e2c28ad8c23523624bf81"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "basis/index/index.html",
    "revision": "21a295dc2b53eab4f0417f3dee28eae3"
  },
  {
    "url": "basis/os/index.html",
    "revision": "61b458f2ff2fb5a375bfb53dfd372783"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "b34125fc26fa32aebac147f6a69fa7e6"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "01559651b625d8239dddf4858a20450e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4439c75fe18456b1e9a38c562210cb80"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "2f88cbe2c113bc870fc021eca9eaad56"
  },
  {
    "url": "c/audio/index.html",
    "revision": "0db30e151222e265fda177e77a0ce7cc"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "92b4fac16ed9232c48875f9cfba73f84"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "727622cb0d48bac82185b4023040b54b"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "edea2052b739793211ad2442b4198f7b"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "d65a42ab932bbbb417dd8ded8534dede"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "7f6fafab28181b809e3040692342fdbe"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "8d189c4dc6f25ba95cabbb69f2f93816"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "6aefe2931f0e2127e951bba241a81203"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "61a9bb914c65dda621eb49fa89dc55de"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "76c3d0e5f6239f95be2789357d3db081"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3e2976beaeff53e68167f28cf09760a0"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "9a2e80901e92585399efd888fd02ee14"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "85c9712dc48f4b9611aea97535732516"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a656925a5ceaf28ca83d4db554c755db"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a2580ae6d446f19c41040f56493aac67"
  },
  {
    "url": "c/program/index.html",
    "revision": "d34723c6d794037693307055d389f27b"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f33c02d97287f4576e30f47efc536519"
  },
  {
    "url": "categories/index.html",
    "revision": "2229d6818c70e39c66dd169e441397c4"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "701a218a018dcdc7a28c8703ca68444c"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "ee3bfea980b3a476aa30b1e05f283ad0"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "0fef2c35156f3b8023f4e17ba185275f"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "a8311315944c56281d6335f5e0e2c180"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "330c6783e72ef5402e84747d42ed0b4a"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "c96b7d1a095c77e8f3db234dbda639a2"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "8dc2ef5090811f8d88d098b1f671241e"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "c45e65709b240ff09fef3523cd552f7c"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "2233732cd9eae55a8301ab4547581e88"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "81ea23210456751b65d869b66b909a32"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "c445cd5f774711f40576fcb9706bbcf4"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "3075dd53acb56627762194b09935f8b4"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "b9df5697506a441bf9f82fc52cc6b0f9"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "a613e6761478059ecfe13ba39cd8fcda"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "b7545741b4a508728a0fef3a279ac8ef"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "e1f02f80f7463d06e9f9a594f1c52a17"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "2001a57097ac3f7260b57e2bd361874c"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "6768d4cd1b0ab553ca6c7cd7043222d3"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "451ed2494f3d7c40f2b4d50f96f29d63"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "b7917805067073103b7393dfc9e808ec"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "ea07c1a199a04d9e7bb5b84b028fec9f"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "d359965be77f010488d535628173a5d4"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "eaba40bf2d0729da581c7b8fd3252e34"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "d0f3286e6f70de8f3a9979a5f7e151f1"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "f1e9dadfd2dc6d3336c431b242c1c068"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "b2524ef5056ac7b158079c13b20b5397"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "d422b358889ef76cbfc6cb9943561846"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "3c7645f91f0f0a1f7743d5112d3efb5e"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "87757aae9869667e04045749c2e895a4"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "b288384f26bf34d09ed0aea5e777b1ea"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "7243e17f3fcbe180f2aa06ddcc78e6cd"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "756119e011cd43a9d9841e0516bff186"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "a3311a77c46d62cdc4ddd00e68571689"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "f83ee42a926f181d694f42a8ab66a8c6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "bf97ce303c3d65ffec97a1d07d183e1a"
  },
  {
    "url": "figma/index.html",
    "revision": "91787bfaaa0d029221ee05169bfcc9b3"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "512885723847a0b57b9826bbbdefb166"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "c8b2c9e8a6c24af17b091946d3bd5fd4"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "051f748f86442121a23561183cfb5084"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "a4505d82378cbd41a1c65b8673d8864a"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "3c8ce77c2954cff235d5c1c9bcf54031"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "7c2979998ca4cbc3cf662fbd6bfa12f8"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "95b8299fb24293a08e26e1edc0d7657c"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "bbb3766d7f0bf8892d1ba5a6c12ff0c9"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "6f3a36114ac08a65dfb29b53009f4415"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "bf9cb2439da9c9081ccabf5ea83b7bb7"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "7ff4ffc0544f15efc2d3b0695548f92f"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "15b2644e5179da9d1345663fda321b59"
  },
  {
    "url": "flutter/index.html",
    "revision": "91f6c6f57243a14fca83afeaef482745"
  },
  {
    "url": "flutter/point.html",
    "revision": "38f319574c179509123576a51840c0dd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b495893704641683eeb96eb40730dee5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a8a9d0ac489029b112518b463df33826"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0be067a51a4a01ad41d3e8976eba5c63"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "7d7925556fcedc9c51a85b34c907f7ad"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f7b9d0abfb1f1c01fd6c225acc9757b9"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2bc44c3a3b2b949bad7336750c04a147"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "dae0a89c16a14ccbb21c91e9fbf37df6"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1f1fd7accdaa933530a0ecb308af55e8"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a0ca8d4ebb7d833d53a780272787f5f6"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "fbab7476a414b2f1b570cda9151c9361"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "37f25762bf64b0ecea41130e9981fb0b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "93d53d0223b1c8342c75e64140508471"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fbc104c1430cbcec45f87e737e671fcd"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "5beeda24f1db4325b2d3e596247dc944"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7ee930ad9170241191ecb47978ffea64"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "543fb37408eee046a133e65320d07132"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0f2dede09c8c3d534dfa22aa1b93d5a5"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "0e347e941051cd3ca4ab5ba8cb7461a7"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "3fc1e96b9834df6cd48ca860b8de8881"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d8b0c730302fdd58fa75d8affc52bcb2"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "47f8c75a0632fb1f549f25cc84d18e2d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "56dd876ed467f8c671cf38ddb4c92306"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "bfedc8e783d4b43d3487050e0fa1e9d7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "28eee8ce8fd9c2c259dd4a986d93d155"
  },
  {
    "url": "haskell/index.html",
    "revision": "d5f3aa2a61423ce347b1facb12978178"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "index.html",
    "revision": "c2aef0ab161273223f6c2fe3a931f415"
  },
  {
    "url": "java/index.html",
    "revision": "9edb3681104f6be3d4cda89af653ba99"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "f188cd27b79894195b8dd80e73667342"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "f2397129810ea0bdf345828ab6254af7"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fb81a94913b09941e3bed5927c12d029"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "39f9d971dccfc4b7947fe62ebe0b7417"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "63cdc792961a343c48d5eee6189e41f8"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "ea873783821ca2eaad3fc84748938a8f"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "48281eaefd8b4f04dc867ad410112fcf"
  },
  {
    "url": "python/index.html",
    "revision": "a295546d1d3ddb68299c19c3b9c22fd7"
  },
  {
    "url": "python/poetry.html",
    "revision": "79ed14fac644393fbec58bb9b45af966"
  },
  {
    "url": "python/pyenv.html",
    "revision": "50da100c5ef48cb3768f6a7a98fe24a6"
  },
  {
    "url": "python/python-ase.html",
    "revision": "0ac0dd356b0c1c7fdd2a9ed3796e4944"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "279e238dfa740ee94e3a1bf46af9b3a0"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "52b1b602c28c48490ed3abd198e39643"
  },
  {
    "url": "python/python-file.html",
    "revision": "3d4b7f557a97ec437bb4b655a2a14319"
  },
  {
    "url": "python/python-function.html",
    "revision": "1fb6fb057d8b800aaf9b6b6306bca8f5"
  },
  {
    "url": "python/python-generator.html",
    "revision": "ecc5ce0ebf767e8993f4fe753c3f76bb"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "58c7e1f83b8c26ab5e59dc4d965e6dc3"
  },
  {
    "url": "python/python-module.html",
    "revision": "a53944224f60fa84cdcc937e6a9db698"
  },
  {
    "url": "python/python-string.html",
    "revision": "4356e192b7b9b16959a609ed0b35b0ff"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "41a8069e65c3b986056b760a81e834b3"
  },
  {
    "url": "read/index.html",
    "revision": "ef41b05875b54fd85bd6fb2816cf547b"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "aebb4a1fd6b65740165f744084f9260a"
  },
  {
    "url": "swift/better/available.html",
    "revision": "18397e8d5cf3969971d2880a3b3e85e0"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "dd23acbd17280b47188ba01745bfae61"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "f7dd2f621b781bf5648d5a9a5975d3d0"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "f846d36fa5b570c9acd71d497098cdab"
  },
  {
    "url": "swift/better/di.html",
    "revision": "59aff731b46a0a1c37a59409f58508f6"
  },
  {
    "url": "swift/better/index.html",
    "revision": "bbebc2f80e8725a125c03594dfcf1e03"
  },
  {
    "url": "swift/better/last.html",
    "revision": "0cb99c8b86e0446519b0855528e1f16d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "58ab69047ae2d564e60877a69128aff2"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "3fa080d459a3f52bd6939d7d9ab1df38"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "a599aad1080625ababbcbc2ec9932979"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "54b47b4281c4ee3df325517bcaa031fd"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "674876eb9877d3ec1e61aff6f6ff4575"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "b903de18f4a47804342477622d4ba32e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "41c67fadae09dd6bde309aaba84abdfa"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2a5ee28d41311a25209f209f3c3076a8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8525a35f15052e221994adbee5cfe681"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "14007fccd2311f09779b96d18f69acc4"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "071fbac05d41d5b15633947c13bf9220"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "4392165a0a83a178482588406c8e957d"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "53dd1833e0fc25c94686f93b38573ed4"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "4b4c88098941abd600e16eff72463e90"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "8416603161aa7b7fa610ae4efbab062e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "95a0d3581c1d47353c3221d50749fc62"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "95509f280390c9400e6251cf5960eb21"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "361003c3fdfcce0644ffc15b3dbde76b"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "0b8887399e04c68bdfa09a83656bdcfd"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "0f6357a784ebc6151a94a77debfe82b9"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "a8adf5b6ddfd8f5ed432acdc9f7c7e69"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "29846d21b1b384a7b885128195388933"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "6d07682de7cd52b52e4aceb05bc6dad7"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "f0b6838d1236878b6cf53030cafb1367"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "6a5b65bb2bce59d6ea8a4b5c9d7c718a"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "32b763822e64adf6960378e3aefd452c"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "6648bead790ef27be69447ec7f012abd"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "71217a118005fe84615349c450831c1f"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "483325cd0d14957f734a62aeb7358d62"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "efda0ab1f5a79feb142264113ce7e866"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d1e506d250594a1a51da76b6af23e077"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "6266f346ec9b3b721476f75c607ea61c"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "cb46f4a223771a02da5f7c7804331bfa"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "36460ac70b67edf42af5a55a5c2333aa"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "881f10a6a703ecf9bdd542af8d067f23"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "51dd5e5a7b85a8e9a68ed28d1151c3f3"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "21a0759d0f1bb4087ac2e5199c55de4a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "4828bd133b2a6744bc37109926417983"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e919f92dab85b9ec69ecd871176ebdc8"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "9ecee5a374a048cffe260fe10852ed1f"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b6f8a4c450d16127387dd38608ad1d5d"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "78697663eaedb4cebbe55be79fed65b1"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "86a8e2ea789c3da56f2f2a0f5c635d8e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "da7d54ea6796f03f8d411c69249d6c87"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f038f1adc351e6b9a83069cacc855e80"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "b8e5593e71de481a054b095736609c4b"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a7a090943e900439ae6acd4bd61b5f50"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "1d3b926369cbb530d9843a9b1283446a"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "62eb708defe74ba9d9f02cb453e4bc38"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d0e8655de214303aeb6e37da52848dae"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c452676fa4a3ec30107672c41aae54e6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "04320a0fe8390dc3c130c026b4a11f05"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "1e9bc3cb5a377f672be13884739444f0"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e17af19e11021e703f8cd737441e5452"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "e7f02748515c8e558d27843dcaa3cd88"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4a01513b8ce6965cd10026ce179e311f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a78a8b419b0aeb715769bbcca97c82f3"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "a6688cf16a9d4d068e5659abe7613f33"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "12f9cdc11ae78d9148ff4e2b3ca3ccc0"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "60bb3c97af62967e4caa154a99b95f18"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c90950596a9dce7f4f2d5d2087b0cb0d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "7af64eb3b4948057d960cd79037203f4"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "4eddc70ca5ecf69be1073294457d14e6"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "4c0bb79343d07994fc8a66e84792e136"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "47dea506fb8e12aed81b37265dc05317"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "07993a013a559fd7f7ff2ee1c9af73ae"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "7c2dd5e4f343252d8110f9310aa025a1"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "9e748c3f98e2c451e855f59cb0799600"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "c08ac05e58a89d1777deff3e904b6903"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "b3106cea883bf9302ad934f4a19333a1"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "60c4554ce4f53dfa1e527c375dd6ba8b"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d744391b299773b347bf1fc3519990f8"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "c64418f2a4e760af7dee58d1e4b3670f"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "67b8053cf3bc9d36bf5d1a282574aa9e"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "caec393e578b00ab2d7663a3e60ac056"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "b1c1785e0704140f1c8cbe86a463ff5c"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "6b3e65e53fd3dfaba4c29828a6cd7a6e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7a4cf6698391e78d9f69b22f0852d422"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "fcc30fd397b365d56280dd40883c3294"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "db6830b5a9edfa271c5e14109658b792"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "1fbb6a070a4793fca86f69c5f93192d5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c55b5048a05105bcd96e7362118e2620"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "17b75c0fd78495b172b6eb7314d8870b"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "623e0686cc7192ce97c3a2b40a89c711"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "899a68902fff9c252ec46431c55b1515"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "50948eedad8c6a47fbb69bf42a1a1e96"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "0fd44637e7c7885f9aa26b5215a8e06d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "be28f2ef784ab7d62d229aa825678f89"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f609ee6e37392530790c038f06f90e7a"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a65ee14c1d5a2ff97cc78d54abf2d88b"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "ebb8fc4dec676f172f3cc55d9a123423"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e815c92983f95c10b25c093e974cbf0c"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "2f2da9acf60061d2e369161c483b6931"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "09f5304c3c651e41e4e6ac6f9aa62518"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "45f3a55b38885aab8e1a9722394185c1"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "382f17a5b8ce27a79b54190c09488fa5"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "101b9e2e9c25d91d0b62bd8acdffb4c0"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e31181732e32628fae07f6026f51c0d5"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "d6f1ce5695ab2b82f78d8303b3b4b893"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "bfaf81c73bde21854ac98ed7924d5a9d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d1687287b87c22cf89d174dca3b64823"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "de40d32c23c704cae70197dd8680d53c"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "d11f53a4a0260d4711198e089685299c"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b562305dd3287b7ee400947f57d7edee"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "f453a0f480e2d036564c01a4d213b9d9"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "96a86026933f0ed0353652e0a48ee37f"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "14b6b93b3d45f07147fce8508b1be17a"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "13eec22cf3c362a102eeb9ddd6e6921e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "1bc66f6d3cf097456efc2d46382a5b06"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c08e7f6e0592cc9e48bdd2e19ba12dde"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ed77589489516073960bc0b28890fd50"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "4fc009537008c5638f10b7a902c05fa6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e78fa648dc43c864c7094fa3d798681f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "bc21425acbd7d5390141e89acee5aecc"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8c78c1f689a29acfad46854cafd9cb7a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d4a139a6271eefc2516e9c2d1d2e8a85"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b818f3e0ac069fec1a315f435a80cef6"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "762fcec4a3ae7115a996386c45451742"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1b7f0bec73e96b724dd52877a1d338e1"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7423a6467a1604c5b4b3a0afc1132691"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "317b6aed4a39f51a512d4517987ac049"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7b4c65af034b4a0e7ac077dcea98d5e6"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "f46f2242c9e51414b2a7694fef4d5bdd"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a485dccfc98cb6f4fc0ad5cf32978244"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "b983b4ea35760c5ccdc0908227fc1fc7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "ce66aac01bdae6b2488974990b027db5"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "72ec320f25e1bbccc6542daf39d5ff97"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "aa949d65f5cefc020e1604341bdccaff"
  },
  {
    "url": "tag/django/index.html",
    "revision": "0fca44d49b951cb1c982499ced933970"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "1af39e195f9827abbc3b9a6cbbc458a5"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "1dff00ec6bf7c564ceb676e8e918fa60"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "77eb44bff2e32a0223b39ffe46a9197b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "5c505dfbef005abcf45930a17800fb00"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "fe878be6e8bdce8a314e6b06d5ec1694"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "ec6c9884dd76728454dcbacbb0f2a2bc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "32f703fa2ba453296aea13d699251ad5"
  },
  {
    "url": "tag/github/index.html",
    "revision": "18db1f676a756f9372e59f51ebd27a41"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "239561f3a029f3c851c9cfed7bc8ee26"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3c2e3ed1177ef596589a1179a59e852f"
  },
  {
    "url": "tag/index.html",
    "revision": "7174907cff2fae3668787cd297a34139"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e636349d085f9ce082b12bf50791442c"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "132f9b67efb1a49d4b62739dda7de605"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "32e5155b9ffe2a2775a9a0fed508d89d"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "ba8b44cfba14b078361dcd7222c47f1c"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "d5b52895bac32ee48988108e0933e695"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "2bbb8c341881943da594a8f59205693b"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "22b8de3bad85f996dc3763aa71b87006"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a485b1d3490db512f7ef59d7ec34db0f"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d2a6af3bc4d77c0f0aa254860448488f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "cd49ce9a16497a667c040aacfe09bd22"
  },
  {
    "url": "tag/java/index.html",
    "revision": "817f6179e0bcc74fb705274986aeadb6"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d5080e138f7212cdb714a6d607e14077"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "5d9a9b6b020448bd3caeb347e34f088c"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "0242d4c39fd0c8e5ae19c7861e907ed3"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "210d56126ae5daa51ae114742469f8ac"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c107f12c773369aaf63ed1fd746e1c3c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "f01c2290480a393934506037b8e92d71"
  },
  {
    "url": "tag/read/index.html",
    "revision": "112e227949f4726e9e2bcc991759ee36"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "91a71467bffd838d410b0ef03001494c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "97e1deb9de97de6fbc348a0a18fc7d71"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "3135a104bc1ee6b51ddcb457ac7f85ff"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "77e3b1721d04123160402cf6c40a15c6"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "54dd8037c88719602097de47977dc1cd"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "40c6aef63584e78348ef52d265bb18f4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4f20e779d6a534b636a0ce0ca901dc7d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c7def6c1215b07aa9c4c2af468a6335b"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f1b0307ec565b771f758e3305fe73025"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "315311b1b2b6f510a05c698355b1142c"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "8997211210de87301ebdad66b769ccf5"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "acbda16aae71f7079a59fb1e0f3ec672"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "776b89a24b24f53c2ecea085981aaf0e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "ebc377e0fafc533b6d92dd8554927dc4"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "45ff8884eeebf0bd20f33c5a6d61f858"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "019b3965474737bcf983b13e495d64b0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d06ae3e65c07b847f6ee5a5a85273ef2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7c23afcaacaadb09e5247d7b41b68fb3"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "38300ddf94afcf69e972a0f371f8212a"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "db5eb45d08294122c4ed833478487987"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "7a69e2405b1db8319b4606a1e2e13dcf"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b38f787e7295ae5645b80eca00bc09c6"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "31e238aa11aeb5001d70f341a5ddb223"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b8785d037c6447949778fc5f945e9ac2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a3fb84378ee5049c94ad27cb516c2a8f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "2aaab8e71d77f88edba859c759e3bf0d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e8da18aaf4263970bb1d30c23c3b0513"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0635ff17470f725d23ab17526520efca"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "0e64f0456b4ee0dd301960f125eac9a9"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "68efdb79ece522918386aa9fb462d70b"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "c1fde7a5a20de59a105600397854b9e4"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b174567ee1b5eff409b908e107b49c16"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "926b47dba1b6e5cac65f2763ab64ffa6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5d04d922fcced4bf6b92a38cbd42e5dc"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "3574cd6deef01ffad7a5977e0f9c23bf"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "654c6b7d0674f9624361047ffe2ae402"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "39ba6922a3855571543827796917d9d9"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a83ca393d1cdcad14ed53a9c620036d7"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "d3da330e969d37878079ca81700730d4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "43842460b407688b39312098f98ec5d4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "202d0cb13d0bd644af036f3db4d8223e"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "fc73db4f5f6f346401c0ea1b23252cd8"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "928f4f4e76264bab98513dc0dfb2da52"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ac011761c4906a03fb024636caa0610b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d1458b35e5be37ac199ffe372e165b67"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ba8b7211328f088793c8d0f67139a975"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "b1a2c66088dfdc8494820ca0707ec8a0"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "4a02853f25854c3181942cb06ec9dfd8"
  },
  {
    "url": "timeline/index.html",
    "revision": "d52e486bef52873f5feb58a7d8728e7f"
  },
  {
    "url": "tools/docsify.html",
    "revision": "9c0fb73e79341639eaf7462bdfac5a21"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "f83f18dcecaf9e122a3d7c894ed5a718"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "a5d082a03cfbe3b328886a9781db2d12"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "b4c3fcf00843b98a40c846431c7d1134"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5c70c215484c00f0b57cfe8956f0a364"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "04d06c98ec002482c955eb769391ede6"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c1200d7cc4a017a4ec5d000b3c6e6341"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "3fc01a10c20903ca0f55b8437f2cf858"
  },
  {
    "url": "tools/html/index.html",
    "revision": "41b41d2008a8bc7efdf99caa8c49f8c2"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "3e29084f221909931a6ae23d34a6ed69"
  },
  {
    "url": "tools/note/index.html",
    "revision": "14db554513976b246854c03230bd76ae"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "6cbe9e0c0fd2ebdd56d6c401302de8d0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ab3c70e4450712bbeeb84bb2f234cb0b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e76e51fd37897f3afd5f7f3df9851c07"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "10bfb02702b54ad90f4b5bb794efb37f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "bf2b54dd5542759788127fdb7b275910"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "811b6a329f34881877a17dae658d7176"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c73288c81d67f4000609aca691627366"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8169278dc7a1705ec41f2b0ab53a4323"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e7f81336f3510116d8e77dec27b68999"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "fb45ec0d929f4cc5b413ca5222b5f264"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "bc1b3fb24d7be46600303bcfd10221d1"
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
