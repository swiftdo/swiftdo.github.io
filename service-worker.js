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
    "revision": "83e7bed8ee277969ca1c878e59024671"
  },
  {
    "url": "about/app/index.html",
    "revision": "c42009349c54c1ff382cebfb11d22f3d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c6f9fbdeefcec4ee05da7741ad13ca84"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "003a08b78dc37041c2a542bf53b96873"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "43c43ef73318e036b0311c075f20944f"
  },
  {
    "url": "about/index/index.html",
    "revision": "f328574d3dabe1b56edbf758111ecaac"
  },
  {
    "url": "ai/index.html",
    "revision": "3fbaae726b8280f4129db653ed996ade"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "3a2ea810509adfc58f0dac2d0b21a8ab"
  },
  {
    "url": "algorithms/index.html",
    "revision": "a7ae2f1d834e503d1c16725afc8cf88a"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "96c9518f9668afcd9180bffbdff5d545"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "f8f12783b98aed34885c8a749e68f69b"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "2c83309f9f33d15744c70d3e9a838149"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "9d147a94a2c76d2bf4522d2aa1d5293f"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "9dc820f1244b12cd38373e436c0b5894"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "3f68c9c12d86f988c0c441b039dfdea2"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "3b93149ba522238d2221b59957866c61"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "6f5e0e3bd3afb774a3d6fb1756d04f45"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "45265c6febe50275eb44fe1b8a94a3db"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "859ea0050cb92513bf77d91a09ac7005"
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
    "url": "assets/js/100.3f79cf6f.js",
    "revision": "ae535679d0aecf8f5824776057ed3c1d"
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
    "url": "assets/js/104.bd46063f.js",
    "revision": "24aa513841f14b044b06e990136cf6c3"
  },
  {
    "url": "assets/js/105.f9510089.js",
    "revision": "129cbdb89396abad22398d748a504d0b"
  },
  {
    "url": "assets/js/106.71956e1b.js",
    "revision": "14dcb7ca22a09bd2b6ea7abf22652b01"
  },
  {
    "url": "assets/js/107.879c4a8f.js",
    "revision": "0f1b0b8be05df49621aafa2ed3765123"
  },
  {
    "url": "assets/js/108.d6adb326.js",
    "revision": "ed6fd41bdb896a0c493539db0f17a1dc"
  },
  {
    "url": "assets/js/109.041ae901.js",
    "revision": "84af34f2329ff419f94567b86f1930e5"
  },
  {
    "url": "assets/js/110.39c3c738.js",
    "revision": "440c2a3c1b59de99cbf916fcce288940"
  },
  {
    "url": "assets/js/111.f95c983a.js",
    "revision": "17ef04257de4134b4f5ef234704421a2"
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
    "url": "assets/js/119.cea47031.js",
    "revision": "e97148fc4f1fda8045193ee85223db2f"
  },
  {
    "url": "assets/js/120.97c48784.js",
    "revision": "ff47c89258350e824a20d75501ee75db"
  },
  {
    "url": "assets/js/121.b943f5bf.js",
    "revision": "b7c7519ae8028aef24f2b6fa2e83fa3b"
  },
  {
    "url": "assets/js/122.f02adc95.js",
    "revision": "5995c14b28d011e13a2fecd1330fef12"
  },
  {
    "url": "assets/js/123.40cbeece.js",
    "revision": "1e3a53e2372819f70cf357cde92b2d6b"
  },
  {
    "url": "assets/js/124.d9cb835f.js",
    "revision": "4894aaf5909fe64651560f187ed86624"
  },
  {
    "url": "assets/js/125.c99b7764.js",
    "revision": "f06e1fb0dc31a41ca3ede1eca83a23fe"
  },
  {
    "url": "assets/js/126.286c7d55.js",
    "revision": "102535feaefc2c6659e9a9087c2f8166"
  },
  {
    "url": "assets/js/127.d740c9f1.js",
    "revision": "17d14daf10d6b4d1e2ed46d618496614"
  },
  {
    "url": "assets/js/128.5e92f53b.js",
    "revision": "82517a79c7d2e736388a46d8a9a1bb90"
  },
  {
    "url": "assets/js/129.d438d929.js",
    "revision": "025f1ad81050492fbe880697df033ecf"
  },
  {
    "url": "assets/js/130.d7a79f21.js",
    "revision": "8cd8fd634da43f1db962a48561fca64b"
  },
  {
    "url": "assets/js/131.73605c79.js",
    "revision": "e853502bdfd8685298210b747afd8efc"
  },
  {
    "url": "assets/js/132.db61948c.js",
    "revision": "33a9af95828b11dcf6154f0aaadf1805"
  },
  {
    "url": "assets/js/133.bef2807c.js",
    "revision": "4af0fbfac354a69110945030e44873e1"
  },
  {
    "url": "assets/js/134.ce8438c5.js",
    "revision": "bc3fbdd22f33f3b9bf2e7b571f6414c0"
  },
  {
    "url": "assets/js/135.e311dfea.js",
    "revision": "2a10a734abebe31871e37af9366780b5"
  },
  {
    "url": "assets/js/136.e54bf6f6.js",
    "revision": "c813d67de5ad162ca6dca26344141d4d"
  },
  {
    "url": "assets/js/137.85541ad4.js",
    "revision": "8953bb41c23772acbe6db051d8264673"
  },
  {
    "url": "assets/js/138.16a21c31.js",
    "revision": "5568f14bc9138e471738b59cc21cc078"
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
    "url": "assets/js/141.c6351533.js",
    "revision": "195db2418357d833941ccb3edeb67df1"
  },
  {
    "url": "assets/js/142.414e82a9.js",
    "revision": "4a65cd99e8c6dd42ee90d33a8e4e6003"
  },
  {
    "url": "assets/js/143.ffcbe888.js",
    "revision": "906104cffd46d77a8a1692e57ad8f4da"
  },
  {
    "url": "assets/js/144.87ad56d7.js",
    "revision": "93bef3468e3031bee2b9a5be9789fdeb"
  },
  {
    "url": "assets/js/145.cd44f4df.js",
    "revision": "c3f4f6c928026c163e6e86e75b2d9d27"
  },
  {
    "url": "assets/js/146.841e9cfa.js",
    "revision": "3f974bcdbfad66e2640433ca09250f22"
  },
  {
    "url": "assets/js/147.67d3ba0d.js",
    "revision": "1a1e95c8232f3aa32a620bb35f500737"
  },
  {
    "url": "assets/js/148.f799a9fd.js",
    "revision": "c759808d567d7a548b0f1fc8a1bed502"
  },
  {
    "url": "assets/js/149.80438130.js",
    "revision": "c3501bc238e2efa49e8b4e33421e7474"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.a74bdc7e.js",
    "revision": "4fd089e36f422b3aa554567697dd5737"
  },
  {
    "url": "assets/js/151.3d3acd88.js",
    "revision": "d1840667f12bf23a04125cbe8baeb95b"
  },
  {
    "url": "assets/js/152.2d0f03d4.js",
    "revision": "d3faad0497dacead6f1fc2b5ce083711"
  },
  {
    "url": "assets/js/153.51da3f66.js",
    "revision": "06113620e0d75812b56f809c32f9d9ba"
  },
  {
    "url": "assets/js/154.c14b0eea.js",
    "revision": "e4267f980797a0e67dc39d20cc1f97ee"
  },
  {
    "url": "assets/js/155.1c668d09.js",
    "revision": "97c04425904f4d09a4504c373bd13a63"
  },
  {
    "url": "assets/js/156.b9ddcd4c.js",
    "revision": "bb87772779ff2ce5ccbf448b1b5c892c"
  },
  {
    "url": "assets/js/157.167c9b80.js",
    "revision": "b340da47d48234181d45aa5443d1a45c"
  },
  {
    "url": "assets/js/158.5d95ab46.js",
    "revision": "c11548bc0789b54bc7ab69f8470e8b70"
  },
  {
    "url": "assets/js/159.596904f5.js",
    "revision": "c59d0685131abd064e83291f09a32da8"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.c068bf70.js",
    "revision": "eccaaa5db4d634937b97305f2164f27b"
  },
  {
    "url": "assets/js/161.eb62709e.js",
    "revision": "032f1f82b4ef4c5cfce895d58e9360cb"
  },
  {
    "url": "assets/js/162.5d9ec3b7.js",
    "revision": "088f31b390b25b528bcb5b7e7815ad03"
  },
  {
    "url": "assets/js/163.491cac66.js",
    "revision": "8c773963d31bcc9288744ddb755f1ae7"
  },
  {
    "url": "assets/js/164.060bda1e.js",
    "revision": "0561de2ac3aa2bd9d89f9be1bbaa3857"
  },
  {
    "url": "assets/js/165.5f72e630.js",
    "revision": "b8ab4af7020e18d41b191b5bc351b50e"
  },
  {
    "url": "assets/js/166.852c20b4.js",
    "revision": "78c61d270aa1c64bf5ecf0b43b142e57"
  },
  {
    "url": "assets/js/167.5b8424af.js",
    "revision": "6861d0a4f604cc087bfcc8599eb33641"
  },
  {
    "url": "assets/js/168.43cb3234.js",
    "revision": "479d3db27e86aaf3e7e5fa30648b1285"
  },
  {
    "url": "assets/js/169.d5264288.js",
    "revision": "0eb5dc06fec23dfdfccbb26d8cb599c7"
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
    "url": "assets/js/171.9935ee59.js",
    "revision": "19317db789d2678eca5bd5510973ccb3"
  },
  {
    "url": "assets/js/172.1b4b2876.js",
    "revision": "7d4013c5caf234d0c51543a2ec466ef9"
  },
  {
    "url": "assets/js/173.98709ae0.js",
    "revision": "7dd6a2d7b108e85b95b77c682a325fc6"
  },
  {
    "url": "assets/js/174.8e0102d2.js",
    "revision": "6754b13d5802ff4b12e98d74208bb935"
  },
  {
    "url": "assets/js/175.0f85e8f7.js",
    "revision": "cf4eb11b1c94c64ca9f9f2b4fa040b1f"
  },
  {
    "url": "assets/js/176.7a05e415.js",
    "revision": "fe2556c3f831fc90cbf44fcf3ac0cc29"
  },
  {
    "url": "assets/js/177.6b2a9e55.js",
    "revision": "ea77ffbfe8e0ee12e40bfad953b41d8c"
  },
  {
    "url": "assets/js/178.c1b37aeb.js",
    "revision": "33c3fffd53861c92a73577c1a3ab5194"
  },
  {
    "url": "assets/js/179.01e55b82.js",
    "revision": "a6191d886dc9d4d7a9d65121e5792b8a"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.88deef48.js",
    "revision": "1b623d8622ae4c361ff27e8f79554e65"
  },
  {
    "url": "assets/js/181.2ee264a2.js",
    "revision": "946237b7e35ae9200412761b28b6dc34"
  },
  {
    "url": "assets/js/182.79797d83.js",
    "revision": "b58093883c6b216d331da1669add042f"
  },
  {
    "url": "assets/js/183.c939ccaf.js",
    "revision": "9c30d5fae8144cb0eaf2fa24bdf1e5c0"
  },
  {
    "url": "assets/js/184.7e48cd74.js",
    "revision": "96f99b1634c4721e1c30daafcbc351d9"
  },
  {
    "url": "assets/js/185.4cee8a6b.js",
    "revision": "5b3005714638204a1ec174a707623fc7"
  },
  {
    "url": "assets/js/186.239eb085.js",
    "revision": "c0a5c107ae650dccb4ca728598c70c08"
  },
  {
    "url": "assets/js/187.88b77415.js",
    "revision": "42967d387ef213cd5093b27a6de3922f"
  },
  {
    "url": "assets/js/188.d955f97a.js",
    "revision": "e41676da4f1b3cdd3bed977ea0f9215c"
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
    "url": "assets/js/190.17f6141f.js",
    "revision": "143c5858e360753c1c609553e5dfcf72"
  },
  {
    "url": "assets/js/191.48954ab8.js",
    "revision": "523d3c9d8d28f7fa352bda1f5093820e"
  },
  {
    "url": "assets/js/192.310938a2.js",
    "revision": "24a0be1e3e6d9ab0f4f1a00f445d6bba"
  },
  {
    "url": "assets/js/193.d6362c93.js",
    "revision": "24c7becb63e35a71daf326371cb7d7bc"
  },
  {
    "url": "assets/js/194.e3acfe8a.js",
    "revision": "6f2b88332af8552e2eb2270d28795eae"
  },
  {
    "url": "assets/js/195.510b1ce5.js",
    "revision": "a76869a1835f7e76ff3768ed69aa27cb"
  },
  {
    "url": "assets/js/196.c9bcc901.js",
    "revision": "a928e2ba72507a636bb321c24cdb7a9e"
  },
  {
    "url": "assets/js/197.fd042af0.js",
    "revision": "c8ba4f1cb88ae326fad1c418e688aed9"
  },
  {
    "url": "assets/js/198.bb2d75e2.js",
    "revision": "1c1b357163af8fa6e06321a9357329fd"
  },
  {
    "url": "assets/js/199.6be0cca4.js",
    "revision": "8c76dc4b73c45aaf52826146be970f59"
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
    "url": "assets/js/201.2655a098.js",
    "revision": "c1742b90550aceec6d298c99333d8bc3"
  },
  {
    "url": "assets/js/202.0891b63c.js",
    "revision": "dec11fb782cf056453f46a59d1667b3f"
  },
  {
    "url": "assets/js/203.3f26e1d8.js",
    "revision": "c978fc1f53bce6f5c14cce767af79c21"
  },
  {
    "url": "assets/js/204.9e3eda3b.js",
    "revision": "091bb809ace84c5a56e518df979d455f"
  },
  {
    "url": "assets/js/205.c0b08b0a.js",
    "revision": "fb0b699737b30d9983fe5ce3fa0aa83e"
  },
  {
    "url": "assets/js/206.9621bf6a.js",
    "revision": "89ab784ca485f593a6e388153e5ed618"
  },
  {
    "url": "assets/js/207.9a9f1637.js",
    "revision": "9805d515c027d1e2d8584c9ba00fa2b7"
  },
  {
    "url": "assets/js/208.56a56aa3.js",
    "revision": "255ffe8492506783b642532e9415d8b5"
  },
  {
    "url": "assets/js/209.bed1a03c.js",
    "revision": "bd4e099b016600b8a31ae382e417a939"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.c9fe5dff.js",
    "revision": "4d102505fd33307a690b998ca390a2af"
  },
  {
    "url": "assets/js/211.4258ff58.js",
    "revision": "fcd92d69efe635a9c0868bd69a11503c"
  },
  {
    "url": "assets/js/212.b3892086.js",
    "revision": "01074934b6c1fc9b23b452b62b15cc33"
  },
  {
    "url": "assets/js/213.e88b2f0a.js",
    "revision": "b7b8fd15567c691b1cb3a3e1d4b7f459"
  },
  {
    "url": "assets/js/214.21b76917.js",
    "revision": "066748e2c339bbfc5b1df6f856fedd8a"
  },
  {
    "url": "assets/js/215.a7165a8c.js",
    "revision": "d62c3516d1ef74759a9810c86099b560"
  },
  {
    "url": "assets/js/216.7f5d9e26.js",
    "revision": "782ebcd6fe2e047217f19c7855972c82"
  },
  {
    "url": "assets/js/217.c608a515.js",
    "revision": "67413fd508d9da40568f2ced676c09dc"
  },
  {
    "url": "assets/js/218.d2eb8f6c.js",
    "revision": "6ce2ae48e5fce3cf6fdc68936eead9c2"
  },
  {
    "url": "assets/js/219.93e2f3c2.js",
    "revision": "bdb6c9730261969bb5dba5ec1f124a8d"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.e31397a0.js",
    "revision": "c1cfda67f42799fcc0d021b59234314a"
  },
  {
    "url": "assets/js/221.86d6e2af.js",
    "revision": "49ca2c46462a1b0a3c62573fade53dfa"
  },
  {
    "url": "assets/js/222.ac21cfc0.js",
    "revision": "60c3cfdd14ff9a9809c5b5f527c87f65"
  },
  {
    "url": "assets/js/223.15d0f23e.js",
    "revision": "220d85969d1f83b976da91e79fabf8e0"
  },
  {
    "url": "assets/js/224.be38ab9a.js",
    "revision": "f0318befba2b68935500dd4b5128234b"
  },
  {
    "url": "assets/js/225.dace850f.js",
    "revision": "3db1fdefc9e435fac54b0f4434e87668"
  },
  {
    "url": "assets/js/226.82b8d9c2.js",
    "revision": "4f719a881f4b14fdb6b1250b0c5580a9"
  },
  {
    "url": "assets/js/227.b6a9589d.js",
    "revision": "e58ee817f17569d166fb9f19e9e33988"
  },
  {
    "url": "assets/js/228.8cd24c0f.js",
    "revision": "07b11a5629d38ec0315d2f8ef47762b1"
  },
  {
    "url": "assets/js/229.7de4ac32.js",
    "revision": "c911e55077e9a262c72471f5791ac773"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.e4cca4d4.js",
    "revision": "06a73d58cebb558ced32085e9e09bd8b"
  },
  {
    "url": "assets/js/231.27a09744.js",
    "revision": "31c4690ca4e8291e7d1896f1228a9111"
  },
  {
    "url": "assets/js/232.ca850884.js",
    "revision": "5c1ea43f2a386808a7919571182132aa"
  },
  {
    "url": "assets/js/233.a1c14693.js",
    "revision": "23fa577c4ea051fc9e1afdc753dd263c"
  },
  {
    "url": "assets/js/234.6248072a.js",
    "revision": "39fdeff5ef8fe1a6b28c87c649738cfa"
  },
  {
    "url": "assets/js/235.cc22a09b.js",
    "revision": "6e50ec283a6622c3f1877d7b9979090d"
  },
  {
    "url": "assets/js/236.c3f54bd6.js",
    "revision": "d4da96b94ce55e00d157e2ba7ddc0d6f"
  },
  {
    "url": "assets/js/237.bc3f6dc9.js",
    "revision": "9568625aa07dadaa7481ccdf3f87b6ad"
  },
  {
    "url": "assets/js/238.dcbe734d.js",
    "revision": "c8fd5e46a5fb25170854b0977bd7c95a"
  },
  {
    "url": "assets/js/239.6ee42ec1.js",
    "revision": "881340dd3b977225baeda942e5586ba4"
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
    "url": "assets/js/241.2a599336.js",
    "revision": "e26fb50254369dedeb19bdaf0d6c54b2"
  },
  {
    "url": "assets/js/242.749376ad.js",
    "revision": "747fa56399811bc46d6331b4a3202677"
  },
  {
    "url": "assets/js/243.26ee5e19.js",
    "revision": "4b34e94f6ea1a50848532a2808767b99"
  },
  {
    "url": "assets/js/244.21635215.js",
    "revision": "1ff475dd2340ce978aede226d2013b04"
  },
  {
    "url": "assets/js/245.5439f2c2.js",
    "revision": "de560d0750440a69139123037c8d794a"
  },
  {
    "url": "assets/js/246.bd8c4651.js",
    "revision": "88dddc9206ecf5046d7e6ea5e0125c4f"
  },
  {
    "url": "assets/js/247.13b7d869.js",
    "revision": "a88f1a267152bf915bcc039d413fbc5d"
  },
  {
    "url": "assets/js/248.e1ced171.js",
    "revision": "941ce651386262625288fd35c8c85242"
  },
  {
    "url": "assets/js/249.112134b4.js",
    "revision": "6d9c2c3ea7bbc1529e19319a41cce1d2"
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
    "url": "assets/js/251.eabaf98e.js",
    "revision": "182484265db9e4f4aa759fed4703bcc3"
  },
  {
    "url": "assets/js/252.1cdabed9.js",
    "revision": "3774967a5706b5f119d7a7f8e59d3c11"
  },
  {
    "url": "assets/js/253.9a4f2ff7.js",
    "revision": "ae472591cd2a156af5e518c549979d7f"
  },
  {
    "url": "assets/js/254.fb76e9fd.js",
    "revision": "deb0d2714732a5bb51c9f4579500d018"
  },
  {
    "url": "assets/js/255.a99b1b2d.js",
    "revision": "faf00961fdf6c3c766379fdac92d8b7b"
  },
  {
    "url": "assets/js/256.5eaadd72.js",
    "revision": "e3d4376c10a35661b7e5cc5b24eaeffa"
  },
  {
    "url": "assets/js/257.5c4a34e5.js",
    "revision": "7c0529f48575354795c09e0e1db627f3"
  },
  {
    "url": "assets/js/258.a3e5a290.js",
    "revision": "4e28c90e0b68e0db211c7345187dee6d"
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
    "url": "assets/js/260.66479ab8.js",
    "revision": "81b9ef9b1ac022fa789177292f0ddf89"
  },
  {
    "url": "assets/js/261.aa86927b.js",
    "revision": "36fbe90c599a97beeba2f316207e5b50"
  },
  {
    "url": "assets/js/262.ae46ce2e.js",
    "revision": "dcf114ad71fa0493c8d954bd168bf5cf"
  },
  {
    "url": "assets/js/263.a844728e.js",
    "revision": "26ac3ad3176173e03ac7d9bc22578c76"
  },
  {
    "url": "assets/js/264.6314c710.js",
    "revision": "64b92b0deb626c1026bccd63a6931879"
  },
  {
    "url": "assets/js/265.152df293.js",
    "revision": "4a711e2a78b311e7430198a516fb225e"
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
    "url": "assets/js/268.5383c564.js",
    "revision": "5b14e8fb6df9cc04abf291d5a21fcf0d"
  },
  {
    "url": "assets/js/269.037c3f4d.js",
    "revision": "a96f0637ca09ce0f9b9262be06146d23"
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
    "url": "assets/js/272.2212fdfc.js",
    "revision": "db56dd96f8c21fd216baf41c06fdcaa7"
  },
  {
    "url": "assets/js/273.c2b206d8.js",
    "revision": "b44d525152ac49ddff159ffd186fcd8c"
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
    "url": "assets/js/277.da8aa6fc.js",
    "revision": "c17ef193e8c3a6723053831db30499e3"
  },
  {
    "url": "assets/js/278.a865afcb.js",
    "revision": "028ea5acc8ecb04afc5a8e975bc2587e"
  },
  {
    "url": "assets/js/279.0f41a615.js",
    "revision": "7fb8dace31383d76920f31d460f400c7"
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
    "url": "assets/js/281.20c476b6.js",
    "revision": "7b1771943809ebe635aebda5662e6a39"
  },
  {
    "url": "assets/js/282.9ee14ffa.js",
    "revision": "7e21abfb653060602e978e056a5fa2dc"
  },
  {
    "url": "assets/js/283.c6d8263d.js",
    "revision": "548688bee0ca6f99f533cc62c1733593"
  },
  {
    "url": "assets/js/284.154c23d5.js",
    "revision": "6bb1b1396e6268e1e6c61bd64c8c413f"
  },
  {
    "url": "assets/js/285.41026f76.js",
    "revision": "8d1b1a1d874301b1575425a23a80e3b0"
  },
  {
    "url": "assets/js/286.365b21dd.js",
    "revision": "335ebdd948582e869be830b205c661bd"
  },
  {
    "url": "assets/js/287.f558cef7.js",
    "revision": "b22d8a3f9af8672f599fb663bc5a02e0"
  },
  {
    "url": "assets/js/288.e4b80eae.js",
    "revision": "accd78872dfa943868650c7f0fa317a6"
  },
  {
    "url": "assets/js/289.42b89106.js",
    "revision": "118a6b662f6476d703dc64d095a0e9dd"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.a514b17a.js",
    "revision": "55de2d22cbcc9ebe24c4b09f4c662f13"
  },
  {
    "url": "assets/js/291.358a1f88.js",
    "revision": "986b407cb9a8640bdf6332cecfcb9bb1"
  },
  {
    "url": "assets/js/292.de43544d.js",
    "revision": "d84036b8869c12db3b42a8d9f81e783f"
  },
  {
    "url": "assets/js/293.66ab7cac.js",
    "revision": "cb58c2250d5313c36bcb9d938cca78c4"
  },
  {
    "url": "assets/js/294.72f03e4f.js",
    "revision": "22884c2c2af9023050ad3307827310e8"
  },
  {
    "url": "assets/js/295.ee49304f.js",
    "revision": "2e87c454d14d0bfc226e9a412922fd37"
  },
  {
    "url": "assets/js/296.d7caf0bc.js",
    "revision": "f81e108056ddd4b755beb7dbcd30e69c"
  },
  {
    "url": "assets/js/297.96b6b73e.js",
    "revision": "45b74fc6f4518252360d3149209a4d4c"
  },
  {
    "url": "assets/js/298.02548f1f.js",
    "revision": "a35992f3a2890a7fb995a2703ecfd0b6"
  },
  {
    "url": "assets/js/299.f72d9b34.js",
    "revision": "ec144747a7e56f7baff8fc2109a1e41a"
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
    "url": "assets/js/300.8b437a87.js",
    "revision": "a80261f396c5530d92c94c677add07b6"
  },
  {
    "url": "assets/js/301.8095bbf0.js",
    "revision": "eccdec3920d831f535c5de1e8c4f3f8e"
  },
  {
    "url": "assets/js/302.c853200e.js",
    "revision": "1757907e4c4161fb75315de04424faea"
  },
  {
    "url": "assets/js/303.10d417a4.js",
    "revision": "9eb554c7c5bc94d8cd4a5e6ea6c59b7e"
  },
  {
    "url": "assets/js/304.01935cbf.js",
    "revision": "55babc0d68ed502954841439ec347a66"
  },
  {
    "url": "assets/js/305.29e301c3.js",
    "revision": "5923f295f80ef5336e4b41b49d7edd3f"
  },
  {
    "url": "assets/js/306.56a179f7.js",
    "revision": "c95f0f2ea3e698ffff9120e8b0d699a5"
  },
  {
    "url": "assets/js/307.ac3a01ec.js",
    "revision": "7ccb0e22acd92fedb21e9482c7df957f"
  },
  {
    "url": "assets/js/308.9b42b406.js",
    "revision": "28a7234e6985a0b457c849716eef2ae5"
  },
  {
    "url": "assets/js/309.7dda0caa.js",
    "revision": "82430e48ec663046bea2ca5dcb51de29"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.340cc6a5.js",
    "revision": "c4537f214083810d9fe319176fe20a19"
  },
  {
    "url": "assets/js/311.4958eb39.js",
    "revision": "1281e334c3f8fb6b6814dcdaf0bef868"
  },
  {
    "url": "assets/js/312.837f1168.js",
    "revision": "f419e3becc929b302a32c6d4164f6318"
  },
  {
    "url": "assets/js/313.f3c2590c.js",
    "revision": "a4f6e6daae7d0b0c99b91539f79ca513"
  },
  {
    "url": "assets/js/314.aff74663.js",
    "revision": "cc788d841c1feeac23a9f7ccd6bbfcd0"
  },
  {
    "url": "assets/js/315.1c9001c7.js",
    "revision": "8a7d1e2e31599f4b52ffce606442dfd4"
  },
  {
    "url": "assets/js/316.4ece6449.js",
    "revision": "03db5ecf6dc2c65a80ff3c2c8b722f4a"
  },
  {
    "url": "assets/js/317.f3faa4a0.js",
    "revision": "b59991974963f6081afabb47c7a0af2c"
  },
  {
    "url": "assets/js/318.3c8156cb.js",
    "revision": "0a7b575abf3cac9dd973e3dbdf38ee3c"
  },
  {
    "url": "assets/js/319.60495a2e.js",
    "revision": "e57ea0ccb38b80c630b27dc326847bc0"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.296f7729.js",
    "revision": "4844b73bb76588b1b54800af02893060"
  },
  {
    "url": "assets/js/321.f218968a.js",
    "revision": "1f22d70a642007e8fe219ed92470df5e"
  },
  {
    "url": "assets/js/322.bf309df5.js",
    "revision": "e3d8fc56d9debecfdd0ef7060fccbc54"
  },
  {
    "url": "assets/js/323.3e2ba306.js",
    "revision": "acd2c3b0fa57475cbc3ea2729a8fe564"
  },
  {
    "url": "assets/js/324.9dd923ad.js",
    "revision": "54afdc8094f03fed56d0204dc3623ecc"
  },
  {
    "url": "assets/js/325.dfcdc71f.js",
    "revision": "3e3303531b234132244d1413eb185eac"
  },
  {
    "url": "assets/js/326.442fdf7d.js",
    "revision": "91440e57c254ce4cbd62f8bff6d6c0a2"
  },
  {
    "url": "assets/js/327.0a9faca6.js",
    "revision": "c5e785ab4c169c851e3f90e4037d6167"
  },
  {
    "url": "assets/js/328.9c911a54.js",
    "revision": "e86ba44be18f68b4030387c63cac286f"
  },
  {
    "url": "assets/js/329.8fe24f2e.js",
    "revision": "afc71851686cdf29d1595418df49d3c8"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.20bf71aa.js",
    "revision": "5218eeb34b59563ecc1174121a4da92e"
  },
  {
    "url": "assets/js/331.db3bf35a.js",
    "revision": "643de4cb082cd3a9fe5bb5e74b3c9096"
  },
  {
    "url": "assets/js/332.8e640368.js",
    "revision": "e8ac187bf3ef17ee506e07b1c5098fd6"
  },
  {
    "url": "assets/js/333.f1ee77ee.js",
    "revision": "7be82cf4a420a34c3b716e962b4aa723"
  },
  {
    "url": "assets/js/334.bf0f90f2.js",
    "revision": "a521d90ad0ef2d7321bdfc4bf6fa3bb1"
  },
  {
    "url": "assets/js/335.0c97ac30.js",
    "revision": "ee89cd25d419c2e4af9fee17f88a2947"
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
    "url": "assets/js/39.d8604f80.js",
    "revision": "31ca916fa01b1b4c86f0a7f1e848325f"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.ff0b8a44.js",
    "revision": "4bc93e4cbacb136bd72c9bae2a517839"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
  },
  {
    "url": "assets/js/42.b9c5ae99.js",
    "revision": "f8c475ea3f8b4c0dacadbd1bba404626"
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
    "url": "assets/js/46.52c6c9a2.js",
    "revision": "ebc6d5cc6b3573ca81dae9e330153950"
  },
  {
    "url": "assets/js/47.0bb7c705.js",
    "revision": "033e5dbfd4e525589f7ffd38c6f36fea"
  },
  {
    "url": "assets/js/48.9fb72073.js",
    "revision": "7c2041dc15ee6a2e8854db9bfab130a8"
  },
  {
    "url": "assets/js/49.99451977.js",
    "revision": "8b361f9564a2272f629fdb4d63e0a993"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.daaf0520.js",
    "revision": "01fa2243d47357c0716356f815a82144"
  },
  {
    "url": "assets/js/51.4aca88f4.js",
    "revision": "c0852cda5add6286ee1a5501f920d9e7"
  },
  {
    "url": "assets/js/52.cb0f686b.js",
    "revision": "e5beee03eae5606428d13a65432f24db"
  },
  {
    "url": "assets/js/53.b768495a.js",
    "revision": "e889d6164ac044f3f084b2054fb0935a"
  },
  {
    "url": "assets/js/54.132dbd14.js",
    "revision": "c9c33058cc768551b8c892b7a4b7a8ae"
  },
  {
    "url": "assets/js/55.a3ff37b2.js",
    "revision": "c8986277044220b3d859c7965a1a57be"
  },
  {
    "url": "assets/js/56.242c51d2.js",
    "revision": "0942206bbb1b2d0e0baa27bb62784423"
  },
  {
    "url": "assets/js/57.7a3df85c.js",
    "revision": "fca67054031cb8a7848d6c1e1b3dc0eb"
  },
  {
    "url": "assets/js/58.e362c166.js",
    "revision": "b5bf93aff4dcaf93ae43472fa6b9da45"
  },
  {
    "url": "assets/js/59.895de05d.js",
    "revision": "8f1ac0169ded9c9190904fef1ab757b4"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.2378d84a.js",
    "revision": "1b25228315b23ff0f34e1038df86694a"
  },
  {
    "url": "assets/js/61.0e3922ea.js",
    "revision": "ce2b387ebaa7be5ec2bb678a88dd718a"
  },
  {
    "url": "assets/js/62.f89e9d32.js",
    "revision": "c34a1c89803f9e13e5f2f492f8a8881a"
  },
  {
    "url": "assets/js/63.4d0c420d.js",
    "revision": "ff180ccfe6c653dafa9c82298c69a895"
  },
  {
    "url": "assets/js/64.40425d65.js",
    "revision": "da6aec336e7256a028f0175ddab8deef"
  },
  {
    "url": "assets/js/65.fa90ccae.js",
    "revision": "b18f809b8527b5926041ae6f45c11f95"
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
    "url": "assets/js/68.f83d6b9e.js",
    "revision": "27900cdbb73fb82ccd4453014146e8ca"
  },
  {
    "url": "assets/js/69.3161daf9.js",
    "revision": "aad1ae8312f500036c920dd1448d2736"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.c1a8c973.js",
    "revision": "e274e523700beeb28a4a4af4b4d23428"
  },
  {
    "url": "assets/js/71.da27acb7.js",
    "revision": "b9b9ac6def6627b9cde386ac1cf6129d"
  },
  {
    "url": "assets/js/72.88dae1c5.js",
    "revision": "aa6057dcefc40dec4a70c9a99adde208"
  },
  {
    "url": "assets/js/73.55edb1c4.js",
    "revision": "be367a7d0f7737199095a830c2f3a9ac"
  },
  {
    "url": "assets/js/74.0d8d7347.js",
    "revision": "a3cc8af485400c173a761f644f5a1008"
  },
  {
    "url": "assets/js/75.12da5957.js",
    "revision": "c1f98047b3c9a4254dc4aeb27c81b585"
  },
  {
    "url": "assets/js/76.970458b8.js",
    "revision": "3ce3fa399ebcd505a7a211f388fab922"
  },
  {
    "url": "assets/js/77.a3328eda.js",
    "revision": "1a0696f073a4b6a9523b38aef69f72e9"
  },
  {
    "url": "assets/js/78.600c7d41.js",
    "revision": "98dc7ef8fc204f6d29d6c2ec4bd0d7d9"
  },
  {
    "url": "assets/js/79.620498d3.js",
    "revision": "8021f22174b8cfc9556c6abb5014e14c"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.84ad81e3.js",
    "revision": "e8a2e78bba6040c9f0d10cf3aa0ef4cb"
  },
  {
    "url": "assets/js/81.00d9ba1e.js",
    "revision": "8bc8ec82e59220b10ccd7624ab62875f"
  },
  {
    "url": "assets/js/82.566b55da.js",
    "revision": "ef7e33d27c6ab5a3c982adcab297b44d"
  },
  {
    "url": "assets/js/83.44c7251d.js",
    "revision": "aec87db6f674fc6287577cab1c314446"
  },
  {
    "url": "assets/js/84.884c57bd.js",
    "revision": "2f1e79c2f03e2c16c2679e025b689329"
  },
  {
    "url": "assets/js/85.b32ac70a.js",
    "revision": "c8d9c3a949ecbbc02afa11dc9ee3ed02"
  },
  {
    "url": "assets/js/86.48d40460.js",
    "revision": "0aa0b044a129d1a0d263b8e27c517384"
  },
  {
    "url": "assets/js/87.b4cec39a.js",
    "revision": "82e2693451e29b21d4769c2d68ff6c94"
  },
  {
    "url": "assets/js/88.0cb4b24d.js",
    "revision": "7b39355ae8e4b8c355879f87fb7eb488"
  },
  {
    "url": "assets/js/89.f7ab7c23.js",
    "revision": "f6e03a9091beb828052b3099bb6a22a5"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.b11b19c8.js",
    "revision": "f25bbd2b5c69c2e14af357608785d4fc"
  },
  {
    "url": "assets/js/91.12177c5e.js",
    "revision": "1942d6e2beb3f70686cec75b1dc85489"
  },
  {
    "url": "assets/js/92.129f1582.js",
    "revision": "4e32d836bf005147c885df5edf56429c"
  },
  {
    "url": "assets/js/93.60303f2c.js",
    "revision": "307efffb99ab2fbcb08725b72e0bb864"
  },
  {
    "url": "assets/js/94.570609f7.js",
    "revision": "8a68283eea2ae5f8e7f62e499dbdb236"
  },
  {
    "url": "assets/js/95.acddd05b.js",
    "revision": "2acfc8eeccba3c2b64de17ee9d81c97e"
  },
  {
    "url": "assets/js/96.947c3907.js",
    "revision": "371be016a924e9f5c37bcf1313893f39"
  },
  {
    "url": "assets/js/97.abb6bd9f.js",
    "revision": "b7a1d7a813cfa964d42bf779ec936eac"
  },
  {
    "url": "assets/js/98.af86dac0.js",
    "revision": "a753ce319cb90cfff2179148f5750e93"
  },
  {
    "url": "assets/js/99.87e68df5.js",
    "revision": "9a0ecec63411428f454259e821b968bc"
  },
  {
    "url": "assets/js/app.7dd6a18c.js",
    "revision": "81c72d7aeb910a6ce5371ffc27041dd2"
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
    "revision": "22c4d253f7d9592f682e5993ef53031f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3fa2233d401a59131d19b2688ef5e0d9"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "e003e114b831bcbd881417ab86964f31"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "842fc7cdbb0ac786db787a79eddcb5b6"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "0a5fcff88f333385cd35a17726b694fc"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "5aa15788869548c7c08be517b91d9f7c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e278b19136c7f67a02df0ca78e7dfa9f"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "9eecf865b8385b36bdfea5244ffbbe1b"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "dd2d3b1ddded1bad6ddf88387313d412"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "487b47c81fc80585bcf9841a39b1eadd"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "399cdd7e05e03242d88abe7fa5b4ba1f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ec4a9b41a839b87845dd5bc04cac7cc6"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d48867565c1dcd62f49c0b918c642752"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "287d54bd4cce704487478cf6076d83d9"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "fe2032f0a84ba1ecaaa82c5a1ef57562"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "0efb90daf54872e51d7d71e57a87c365"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "04bd00cdf355c210f7d81df258bdf858"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "8ada70d287b42eb7f85f5312707d957c"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "403ae80a73c36355abfec976d1926bc9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "403f1ee10a4a50551e324d45b3a00393"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "96e21c18c2937849360c210f9da4d67b"
  },
  {
    "url": "c/program/index.html",
    "revision": "df6455d3e6c13ef264af4213d8667385"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f989ecd12b9f88a6c538d90090d3f788"
  },
  {
    "url": "categories/index.html",
    "revision": "28761c5c8d5ce42b397221b5705b5729"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "dc4ff58780189fc5d75355acbd66aa09"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "61707cfe30c6ccab0113ecc27f7cdb80"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "0750f351d7afd89a777d4fb5d35d6a8e"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "cf5cc5d630b77522a525e8495706bfed"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "f7eb69304c56b6d9bf1d3b1685521c7c"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "1770b695cad50a6ef3e1c3bf113e7155"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "2442bd2a3e341cdeb0470f82692a2614"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "3d3e2ca610c6fe28bed57f8080bd0736"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "6d480495df2f4df96109f33cacac464c"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "fcda24365ce54ca03d9a1e08cb437c0b"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "db02beb7c24782d0faf0c6ca97512abb"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "d2e535d2d8b7cf8fa6f1aea4977d9b8b"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "146d1f570d3c3a331622b44d07208a88"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "9c81e3b597f21b0bbd6f13f7082da078"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "159d0e7fd6ad18cec9556dec5fe8cac1"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "b50fad1fab7b009f05a349c30c8fb52b"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "0e283ea894c24016d50e33ba5741398d"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "8b4057eb35bdce0e608c65733503adba"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "d2d83c84432bf1212c4b3e3ddc3c7608"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "bac33f124dc5b576b1ef8e055d4abde1"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "2dbd326365472b6a952682cd5d6a3bf5"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "dae21a40f452b4152aeeadb3049c9391"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "c97b290a73a72e8defb2c1a446e57e4e"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "f2fac54f1d6b3b87a711a19b622d6d6b"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "61b7590cd9992e9024e7e15d90375dae"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "61f11d71ffdfdf0620a570f7eb59b4e4"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "940891c72b2415539b74a20678049bd3"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "1ac612cf1bdb2e47d54de6ceab2d9cc3"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "312a48b3b62db6330c8cb30257ddbd32"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "d487bbcd74bee18326bc57809994f820"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "a8c5fe9e43431116e7fcc573b20aeb7b"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "b73096cc95fc80a639dec3c1b77be69a"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "c3ba7683716d269dfc7402307f54e350"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "18b89fd85ad85357fb3f0e5a861ea7b4"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "f2a42cd244138653e905f7bd79cebc0c"
  },
  {
    "url": "figma/index.html",
    "revision": "6087743fa1cbcaf26659b9a5182042db"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7e2396a6d028b1f7c712ae3b2d1f946d"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "00f58d79ae81020954c6cae0f0ec18b1"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "ddd0e9ddd87e6fdd7b1be6dfb373a602"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "287c756fa9ff3c63948c69ab1b4db3d1"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "551b63a29068c59e8e940f23734f99de"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "13a5dd2426b926ca39322bd889df43b4"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "12ff68c80b9b3bfe9607563f0c968a0b"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "76b60f0d3e8676f6b20b95b1ee71e453"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "7effc602cf0f24d8a5aedfae7375944b"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "c72e89c77906ede36af6dbb2e9d15461"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "8abcbe6b78e0decff2292d609a11d9b2"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "f1c8c4c7b5ffa649f80399a7c8afce65"
  },
  {
    "url": "flutter/index.html",
    "revision": "4aa1a8614c3615a39b7b578641f0fb88"
  },
  {
    "url": "flutter/point.html",
    "revision": "fe3651366636c946eb11296553b5d73a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1cc92f57e0eb7ad57df8af52e187f2e3"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "28cf002a3192c2e4f99c789032f382ee"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "ba2fae9ca7482c15a7133610b9a3ee7e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d185f1be7c0a254a374e911328bfe246"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2afbbf5dba37bd760093664dc06b43e9"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "eee1459e7cb988914625239eb8c59e4d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "745ffd1dac44d7ec6b2b4106f20eeb64"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ad1c200af398c93b7c5837aa5d016a5d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f8d5004d369bfd04af07ed1fd620cdaa"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1a8be10d9aafa5a5f88863dcd10658a2"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a817cba50c4b7491dca0d8c8d07c9624"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "416663f630bc32b63471e3b0770b4cd6"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "8aaae7fefdd85af722a14a59074c2904"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "a06bbe9579e4d3d40d365d4f3b492203"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "c9f3a4dca504576c2a9b15ad28cf6b43"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "20b16d3c27ee9d68823cea08c00efc28"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a67fc1e680e7581025f5cf5eeb59d5c8"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "eaf6a983d11d0a64ae5b83c01c13e248"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "c1632dc99f16d943bf376fc8f77e804c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "66d794fa24981ac929d6d77a220f1d13"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "a3c438ef0691a407596bab362f72334b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "5e0161b3ae158f9649e78eb0df8c43a8"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "82abebc5282b4ff99f82b82425274cbd"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "2a97b0091841600532049a553400a254"
  },
  {
    "url": "haskell/index.html",
    "revision": "bc490accec0c40baeca0f4e0f15da7e2"
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
    "revision": "d8f6f79b9a83bf2d869ebcd7f08c522b"
  },
  {
    "url": "java/index.html",
    "revision": "75802eb69d91291db80b577cb4e8aaec"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "4b85b982ade5c86d12f391f1d6d61302"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "5e20eb3141f7b472a789879931c39940"
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
    "revision": "b3d7acbbe622433c2b359a38c670eb48"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "bf4c0a08d7fe8ee5b191fdca4b9ca6c7"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c2042a31101bd8bd581e6741eb732d71"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "8b31d5ec3b825667f39b8ac926266bb3"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "d3dd8e06db9d031d037f80993e4806cb"
  },
  {
    "url": "python/index.html",
    "revision": "3d7a31660a4a7eae6827dbe8bd2137a6"
  },
  {
    "url": "python/poetry.html",
    "revision": "efcfd399a5b5c05f181bd76fc44ea7ae"
  },
  {
    "url": "python/pyenv.html",
    "revision": "8087bf39f105f2f6f40046dc69ae1d17"
  },
  {
    "url": "python/python-ase.html",
    "revision": "7d20b07e202176a302e07c6e9a0ba7a1"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "c804ad70ae9288ab7f750f33376cb815"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "4e13ac3a4601fa022a705e03428a33cb"
  },
  {
    "url": "python/python-file.html",
    "revision": "443eed40e5d235420dfeda6f9fe3f54f"
  },
  {
    "url": "python/python-function.html",
    "revision": "f0784878174fe945bb826e583489aea5"
  },
  {
    "url": "python/python-generator.html",
    "revision": "8efdba48bcf754e6ab7aae42f44b5d25"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "95b084cb251366074a577d85aa54ee0c"
  },
  {
    "url": "python/python-module.html",
    "revision": "7d194b52b3f5f9ee6b2766faa6a76512"
  },
  {
    "url": "python/python-string.html",
    "revision": "80b85acd33069233f41aedba6b1f9986"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "81de041adffdd36714c02af574c01cf0"
  },
  {
    "url": "read/index.html",
    "revision": "53826c697e0880d8724e9f9c6ffb7886"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "4671c5622dfa531658f41e94f60884f4"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2602c8e9c646c7449374b1e710e70695"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "68e7545a63861a30a2daf53daeeb88cf"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "caa0ec63b0f6c71d524325b0e6022cc4"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "b2d1cc9987eba13073b508c62c460a43"
  },
  {
    "url": "swift/better/di.html",
    "revision": "29d8bd79050986a8e3f2532d655bcba6"
  },
  {
    "url": "swift/better/index.html",
    "revision": "feaa2eea117a802116200472a376766b"
  },
  {
    "url": "swift/better/last.html",
    "revision": "7c08c79604ed587c34960a06cc62826f"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "154c1228754ed4bbef49a851285737f6"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "efd9479bb8e3227c8af961a12f1f4654"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "e38b2c25b23b0c480c03d1bcdbaaea79"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "efbf3c6b8b4bd319d81c28ed5acf6714"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "bce7f124c2b7a554e000a3d4c77fbb29"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "937503f760bc6e94dcab599b2777c351"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0eb03b02c2e3a6e9371498a9cd3b637e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d9b2c96572103807e49f73cb2009a489"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "0456a806fe5005c5f4c3e8d2d2934a2a"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "5d558b6f2b49e4696315c9a75a9a752c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3921d7167e53b80f449b0f037529a6d9"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "fb5e1312f80912a50ca218d2f81d940c"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "45c9713e5ecb7826431dac447bc85268"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "ef24d26e7191a9cd76a0a90214f7d779"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "e8a98474d6deb87d88800a28a8f7e8ca"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "23ac3c87aa39d2cc0a0eea52b476f80a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "932b4cbbf181efb19ea50937f18372c0"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "cf86c21dae348bccd6ab707d9ebc5a0d"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "7d2e91e2b64a7d10751e8c69a47b0753"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "07574fa1ea6af7d2098f08bda84566de"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "2e10920f0dfa987e18df2a5defc8a7a7"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "f7f938b0123d92d7a232d2aff07484c2"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "5ff766f37d37ce77eec7efcf16f4242d"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "7db2ee87f5c85b2d502fbf7a8fd50765"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "34e2b76fc8dfe0600424c17f90c01cfa"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "85aff42266b977c976f4decdd0d6288a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "ffce67e70b242f6420a9081b10bd4a13"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "e873d40cec42d9a28a5779a7016ac3af"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "c435d7e7047332fcf78c2c59c3a12ea5"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "8954e65fc1a6d57c8b43f0dd4fb8c33a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "58222de2d54b32763cbf43807796528d"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "6b2c02145ad9ef70c90bfe2f26599b2d"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "0e717e091ab61439756b2f53e7e266b6"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "067b1caa515446e259d4b62fe1576a23"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "e89e61213bb4546f6c80fa0bb5ed0c0f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "507bbb178af24af6f2af4acfadf83647"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "75b38b47808fb4bdfb8d7b283667343d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "6b4b2b0c79bfda403e7c05cc9e5bee8f"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "58a8c83b838d44f310a2dab381646ffb"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "946a945b9cbcfced45f0a45abc9ceea4"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "74a1215e430c766b20362ef58132eb56"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "4cfe19b0fe9d5c43db0f18cb4c1e298c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "b2487f36eb40d98b948c7d01edcd147b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "dc3fc6c6b145d83efba27a940bd34e0d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "73bbc680d6d43aae04b5a0d39e03a01a"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "5827a1169296ce2c23e2d6e27d48fb79"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ef45f35ff9cadaa99d5c9aefd5ef981a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "b8dff523b0c4fc599d92930767d79c9c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "1e5b193ffd9229f0289a65057222a6c2"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "55513b17e34430859c9c803e15ba85fe"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "d98f9fd893f9e1e9aba62c4b8f03fd35"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5761755b5238f99185ec6da417fa8a9a"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "58ba9c07c1ba590d11dc9dd8984cdda9"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "bdf9ae5a85f580b4c3cb4d1100048c8c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "35c70c315614972804002fd0464b858c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "57052356815b8d2f291f2d82755ba4ca"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f041b63f3df779a239f95c85693119d9"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "7e4b62790414bdf24a397582e0c3c1bc"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f5cbd21bc0bb2d89effbc7f01ae23aa8"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b7fd6d4ef712004f90f9271c21a4090d"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b6859ceb2472aaf760c3540e4ce2c29a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b2e9fbd035153acb2afaf8e446663269"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "11f0f372b8336762c3d6389347464f4a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "5a49408b286ac05c39c811d77cfbd701"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "fa363abe1e8ead17b0550cd159e26273"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c38f4af2a3060a8697a2805891ff795d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "0e594bf2f7e189326a9e3000ca9796a7"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "33c37b9d0c4194376dff4841a1ffe912"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "48c48a2e54e63cb737345714af17730f"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "cb6ee897b5dee7577e1448b6003374f9"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "0f547516e504a64705175275f261f309"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "70cb5bd9d2737d060c6029bbe32a650c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f88a3b9e1cbb10a9aaa9cb561cfbf171"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "4b5b8a4d604ae5d08a74b41bf59256e0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "c29a2b3ce63652dfdcb2bfa95f0c1c7a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e6163d86e94ff40b8b240afb71f8fc9d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "9e7af55c29dc6152c816c1ae77723716"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "9df86aea280abf27eec3d3af966ad246"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0b9851ad7c9d51ab133d8a87ffac99fb"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "849df1d5ce1673eecaef54a85c53064c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "f31e3a776128cdebd9a8a7ca0e03afce"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "efe81effb4229e03c4919d4b2f6ef991"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "bfdf5b620f494089987af16ecb96132e"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "a6d9f5cdb64c1877c2f695bb23b90976"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "55638ec22f78d727f44430aef02c7d53"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "373b37e31ef3ec0598982e8e871c0113"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "dec5ad87a4f8429ef6d3727c0588158f"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "68adc9290616713463b0b1c85296bc49"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "42e3a194b0d0078b4d52a70a418cce4f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "080e7aa664f88dc19f8f87f5b129dacf"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "838115423a55bc4b9922ed3260afa594"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "96941c0eeb60ab8685117242bb5d2b50"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "eb432de98c296a46d8b803c4007a3369"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "1a3f2792c19b002723b794acd00d58c8"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "c0f620a05a4ff3aa95bb49104f0dbb12"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f15794e1a5c7e0dfe3c838e39b772921"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6e67220506f33af51e03b52119b94252"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "275dca6bef236ab11b68d9bc4de06ca4"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "671c4947863dc138a10b529c69869783"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "79d0126440453ee65dacd35df73dbf40"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "05c2a82c6d87221095e670773a9027fd"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "66506e2833b61d91733e2a78268499d3"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "fc53ee5f7ca9c0db5304fe07c0e1b311"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "ec6055c0a763d12ea61e104077428149"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "3376b04e7ce61034aea0bae6025cefeb"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "3f010797a36db828e9411f994438bbf3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f2f3f035f64484a161814ae6f70e896c"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "3bb979ed087b58a79eb6fb3f32918cc3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0054a83dd953ef5e94e283cf1f740abb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "97e7a57c2747816861b3275b60336a76"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "c94462acc402a19550e83600be70e795"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "923e5b9c0d7ca8ea7c5664f6e6948e72"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8fe73fb7e667ca4d850ef9ab4f81e07b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "60e7ec39ad5aeea627ea6b8c92812b93"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "74ffce8b0ae43a5b4df8446ecc8c7e3e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6c1094797eef32ba4ab59e3461153d1b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e42026d3108b123ad50db49b625f9e00"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c8ca5f9227df17f8fed332d1612dbec8"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "833b5fbb7bf87ba75b2691477f7767a3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f512cad6789652ca9b9b9ebb43ffe55e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "acb5d33461dd7b9f289adda33e719168"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b5292b38c5551a69070f44bb754d1563"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "2ec6c2ec7d52bc94b7128729ddae16d4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1e56b1c2bf8739f7311cb3aae6c1babe"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "1a41b8f2fa450783f986c059a09ea35e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "304781a2532bfbfa591f30806afc1d7e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c82b8b22da9fb4f015ec178d91c204ac"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7057782bde6e7c5442b9a28c08766a72"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "87a2286e83c4bd78f5e7cf2cc9bda455"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "606cf38f07e0c16dbc05534c1bc807af"
  },
  {
    "url": "tag/django/index.html",
    "revision": "9a2fc23fd70a43fe7a1fb1f8d155c600"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "9f601b7851b6bf00b32a5e6be34d777b"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0dcec293149eacd2bd1ed5c059c49778"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "a4718f0aef86f90edae5a8cf19648ef4"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f6da1da2ac053b07bf6d2d26c7ec69c8"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "db9242818001b276e374c849257fd897"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "5458e549eac441f98c4bca9cdd4d8c1f"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "f64d6715a88d3cd5e31a3630354d0f05"
  },
  {
    "url": "tag/git/index.html",
    "revision": "28877434e22879885cc900b8aa707a41"
  },
  {
    "url": "tag/github/index.html",
    "revision": "01cff160e13a04de9c4ac489e5fbd19e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "95184a1dfdaa9ad122827b7a81e0f99a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bc32957df963ee356e5f704688ac4f00"
  },
  {
    "url": "tag/index.html",
    "revision": "4b1b90a9693151d2546019390654002d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9478ce6ee40cf7b6f8a204dcbcf0d2ba"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "35143980bf5dc495ee8000b101f21c5d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c2c9c085b39f53e07fffbb07e60231bd"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "3f87d5af73e9b5a97febe739e6d866ea"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "dca7b2e2234cd1a0b5bd46eb9bf55265"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "9f6765f0b85fa47070e6e7efb0a85a4d"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "1154317444931e7fa39f16a5085f1b6c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2b4ea9ddf60885b82151704895abe24d"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "beda84dd6597236799093e95b3065868"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "979ea09c923a688c84402eb06a983053"
  },
  {
    "url": "tag/java/index.html",
    "revision": "bdce4c3a93a3a3f8e38a652cb56c8b5f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8be426831bf3ec2f666ea99f8331f528"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "5c7fa60535e27b4be2146e9aa9dfaf7f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9e1fa1af3575c4827268b4a276468084"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "b269d366c2ea44ecf2c24646267d7602"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "e3e68d563280dab203925fc94f0712a0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d5940fe1cf11bc69875974fc7215cf0c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "31cda1e6e68d9239fdb491b06cb43cda"
  },
  {
    "url": "tag/read/index.html",
    "revision": "a81b0da7351bf04037198bd24462fcbf"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "1f3b056767e4eb0fc8f2f75b2f13fc17"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b76a1ed3eec61920568732ff6d076363"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "191d28f5cad4b5123e43144b4da725ee"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "fc4f95cd650c19f3a6978e4ddbe06f6a"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "6269e8bbd4a8e21c30ef8e635a10b631"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "921fb0f8bfde29e6941dc1c6b60540e7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "55de7ec498de4fa17ac48941ada16762"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "543ac8458b51476bd136690dc6529626"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a1260293af608ab3c2df230bcfe1f658"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "27c2eeb8cd1e8b108c6478e3d618eb92"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "a168e4c2dd267a607824f369bd4c92ba"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "f189288abd1d39f99c20a1d8a21acedf"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "1fa9005b72b6d8121058ce141359c081"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "fe64760ee3b74f2cd03e583e827c4b51"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "513e95e6401f4b3512f4c96ea651dc2b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "68a7f6a0751ba12aa6617d9b4af3c470"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b78763be761f26615b037905c106cd94"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "3e16d8e9e8fe73522f15e607cfc79ee0"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "f078f1a299718b20663bee45e863ed71"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "72de97df5049d25b3b5f8d8cce3ee53b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "9231a57f666abf29f12fbe553b63d9a4"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "60e6416d70498070e0658f81abdf4d35"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1be9aeee1fd77e9f6eedef4401d93baf"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "bb0e734e837df06c9a0f2d4a28df404d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "310acfba2184072c42f3aa32bfe73423"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6938bc3a332793671cf22868801dcdcf"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "5cb0856a09ce3159748cf72179af04b4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3a2803cae997ff9b1064b7a77139481f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "24c4ce0e9605e00e2d89b29bef434bd7"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "9416ebe9b59637777ede926a87e64a0a"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "88ce4df6c084907647cbba3a02d03619"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "bc61e4d76829aeb3105f0f08df23e4e4"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e845a40fb009115f92664bfa643a63a3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "94995dcb5b8f7015dfd99c2384353758"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "376f996a94727bb9657877b88d3bfda1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "476eec5cf00b5d1e629b2949e5d6fecc"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1c22785754f1acf9af66f9b6000d3f71"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "499902d9847c8c7ee5aa9000fd24ada5"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "576cb67c2ba22b6b177f060f1518df37"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b262a887e35d102e8ed2171722e0b9cc"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "209f13274b7c637ac0b47c63be205669"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "2203b1156d14fc6fff4aacd41bd5806e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f5caac9f9f7c822c0a80bf877f78e5a0"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d3dc2b96ec1acd030743a31d0d0b1521"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9361e0f37db240957f79614aa6dc43c6"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e43325b7a17ea27d61c5e28360b4bc0d"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "5f973d8991e1eb4270e3e7b2440dff50"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c210a7672baa19b7dd3f924423909116"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a4feaf3307f4d5bf206afdd24d20e6a"
  },
  {
    "url": "tools/docsify.html",
    "revision": "dc817fd25d445135008684d412cc07cc"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "2937a2b97afd66bddef4e7046941da43"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "6d34d1178225b8bbfbe2d54e09b14d16"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "4389ca516e806d05e03bc3af4b0bab0f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "390374ca3a87dac27e7b15cbd321b6a5"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fe4d2deeb059d374dba81069377915a5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "83f53a4f7aeb05c06b9747929189f075"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "cca3524db20046e01f8bfe082f6d21dd"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fd9819def50ce46ac3991a4c2185b52b"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "6ea13653fe400daff5b539fa913d4aad"
  },
  {
    "url": "tools/note/index.html",
    "revision": "5474eae094fb04868c2fa267edb1e682"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "b0316d7951f10436518104f8ed6adcda"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e123ae9a1fd66ce878426c17483a768e"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c567dab9c3e040ae4d4e7026ae9ac007"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "da778f2950806c168ab809890b91d3d0"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "f8c1ccb94388357ab89a46c715cac165"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d64fe7e9b208a5e4af8a3c4062d4c79c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "52549fb96b5ba44494de86924328a1e4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "79edefe83850756bb73c18af96f1453a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "56e84c6ba1a02d0b5add4db251cd3a2d"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "ff6fd8799a9ef540befbccef17760f50"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "8cb031cd07df7f1ec21ded9b912d74d0"
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
