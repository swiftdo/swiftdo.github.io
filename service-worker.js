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
    "revision": "2355fbed65f2990bc674fa6336a2c826"
  },
  {
    "url": "about/app/index.html",
    "revision": "d1c4c62e29792914ee4d72647871902a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7ff811197184b6fe599cf14273996a8f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8b89ffd5480a64bab1aa89444ab519fc"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7529a9cd9d3d3e8ea3bf388c75f5fe20"
  },
  {
    "url": "about/index/index.html",
    "revision": "a19e7ee6f2578beae619479b47359720"
  },
  {
    "url": "ai/index.html",
    "revision": "7ded9bf107f2319cf5153dd6c748a085"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "27f8f9880292bfd210500ffdbbc515e3"
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
    "url": "assets/js/100.37597bde.js",
    "revision": "6255782d7208a24c4ed52cafb3094c57"
  },
  {
    "url": "assets/js/101.c6c6a911.js",
    "revision": "17063e27aa996949bf1c91e16f397e69"
  },
  {
    "url": "assets/js/102.4dfddae8.js",
    "revision": "4257fd05be62e8f140ea7ac485747323"
  },
  {
    "url": "assets/js/103.c81db50c.js",
    "revision": "ee1288ddb40b2f1057b5dcd0bfa014ae"
  },
  {
    "url": "assets/js/104.4e81e5cf.js",
    "revision": "dadb31b3ded7f2ad44a623bd3505113c"
  },
  {
    "url": "assets/js/105.93e04dcf.js",
    "revision": "1bd64020d2eb96383f73c015f29ddea3"
  },
  {
    "url": "assets/js/106.094b1df1.js",
    "revision": "d4d1eae2cd767ff2e63eb328552e0312"
  },
  {
    "url": "assets/js/107.d36bb470.js",
    "revision": "01287b9786d600e5c913566d098c6b7a"
  },
  {
    "url": "assets/js/108.19ee4c72.js",
    "revision": "87cc21633e5427fad0d907075ef3f762"
  },
  {
    "url": "assets/js/109.55514b02.js",
    "revision": "fdae5c83a1c026dc55122984be13db71"
  },
  {
    "url": "assets/js/110.612bd0d9.js",
    "revision": "d4692452594afaae976f08189e09e2d4"
  },
  {
    "url": "assets/js/111.2deef7bc.js",
    "revision": "d218849bd51f0925c5872578178a0dd2"
  },
  {
    "url": "assets/js/112.7f409df0.js",
    "revision": "1eee9755f599e5549e9b09e84130b719"
  },
  {
    "url": "assets/js/113.1eb879ab.js",
    "revision": "e73acb468e3798f4f3269b4f3d8a5df1"
  },
  {
    "url": "assets/js/114.f8fa2a8c.js",
    "revision": "98a01e6f382b7ee807cd6a0ce3226716"
  },
  {
    "url": "assets/js/115.ca5d16fe.js",
    "revision": "68a5c37b689b97f5ff42ad63c95f8b4f"
  },
  {
    "url": "assets/js/116.2dcc4c75.js",
    "revision": "33414d849139ae21ffc84f709fdb6c4e"
  },
  {
    "url": "assets/js/117.5c9d2238.js",
    "revision": "314a3e28e880411765589f90fc766912"
  },
  {
    "url": "assets/js/118.bde8baab.js",
    "revision": "6edb7c905b8567c9d53f16455cd0dd4c"
  },
  {
    "url": "assets/js/119.492e3ddb.js",
    "revision": "68588c455349ec684b48b6ed9153b2c8"
  },
  {
    "url": "assets/js/120.ae9253d6.js",
    "revision": "94ba2c384df5162467d99e718292b62d"
  },
  {
    "url": "assets/js/121.74c8499b.js",
    "revision": "b73ebe75389d72772006d1550fd4650b"
  },
  {
    "url": "assets/js/122.d28ea398.js",
    "revision": "7b30bbf71b8e7fd439bedf2894c84570"
  },
  {
    "url": "assets/js/123.aa46b45f.js",
    "revision": "99553bcc8e446fb36749bc2ba48f51f2"
  },
  {
    "url": "assets/js/124.039c8c4a.js",
    "revision": "19c6fe91197cf8243168277182f5f244"
  },
  {
    "url": "assets/js/125.724abf77.js",
    "revision": "e3c35b1aa2a9bc39ea60ba3db9d2f8a0"
  },
  {
    "url": "assets/js/126.09529943.js",
    "revision": "b34fe0e0d52d12f2b2e5959e357fb7e8"
  },
  {
    "url": "assets/js/127.927aa6f5.js",
    "revision": "934be92a68363696e7ed450376f4e0f8"
  },
  {
    "url": "assets/js/128.2704e673.js",
    "revision": "83e2937efebb91671ac97852cbe97784"
  },
  {
    "url": "assets/js/129.ff418c2d.js",
    "revision": "cad7a8aadf7ca1a5ca0e6eb47e5d6529"
  },
  {
    "url": "assets/js/130.335e4253.js",
    "revision": "29b69ac6db4b43d8dfd5b12f2a41900a"
  },
  {
    "url": "assets/js/131.e92b6561.js",
    "revision": "e542be3fe4f96dbd243b12fdd9391d74"
  },
  {
    "url": "assets/js/132.bace5bc6.js",
    "revision": "b0daf6e25dc8f1634e313899e48dd110"
  },
  {
    "url": "assets/js/133.0f9bdef3.js",
    "revision": "19549d91743ba92ddf1086dffb72886e"
  },
  {
    "url": "assets/js/134.3651f6fd.js",
    "revision": "41990a3850e5ff849ec79bb1374c97f5"
  },
  {
    "url": "assets/js/135.f6691aa5.js",
    "revision": "21f3cfe09e5da3ed67ebd6a33438636f"
  },
  {
    "url": "assets/js/136.02420fa9.js",
    "revision": "c59f31ca91c06dfed52d5045d02e8cc0"
  },
  {
    "url": "assets/js/137.4cfa7879.js",
    "revision": "7efff3c4675556602c855e99ed054f8e"
  },
  {
    "url": "assets/js/138.8ab08a8e.js",
    "revision": "7735e8e20c666c0e475b0338764720d6"
  },
  {
    "url": "assets/js/139.2719f39a.js",
    "revision": "9cc9cf8adbf085206c2ad35ca92b3d9f"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.bb57b935.js",
    "revision": "084298e939af2b208178ffe243c5dab6"
  },
  {
    "url": "assets/js/141.177dd0e9.js",
    "revision": "c3acaeb6b30b81e0bdc79c13e8f129a3"
  },
  {
    "url": "assets/js/142.e2b84699.js",
    "revision": "94304b3c81f3f9db42d3cafcd9bc7492"
  },
  {
    "url": "assets/js/143.bf2ae036.js",
    "revision": "3325ba28decb9edc5e35bf8ee831f432"
  },
  {
    "url": "assets/js/144.2cfa443b.js",
    "revision": "299edadbeb23a243244783c94e578e20"
  },
  {
    "url": "assets/js/145.9104998b.js",
    "revision": "d790ce2012716340d5a3b66ca95e7fb2"
  },
  {
    "url": "assets/js/146.8389964a.js",
    "revision": "5aee53795b1af8c09ef1856306e717aa"
  },
  {
    "url": "assets/js/147.0d5e45a1.js",
    "revision": "c9d5e55cb26a0e404b72036f2da6e0df"
  },
  {
    "url": "assets/js/148.329c6bf7.js",
    "revision": "60f318b9bc99b434d5d5d7f939b8339f"
  },
  {
    "url": "assets/js/149.9d6aa3c7.js",
    "revision": "ab4f556d5bbc8c29a48dba9683e5902c"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.f69e1bd8.js",
    "revision": "ace07654313db3510990ed0a2b94033a"
  },
  {
    "url": "assets/js/151.6f719860.js",
    "revision": "377f259f4df38ff77a2b8c9e367a2e0d"
  },
  {
    "url": "assets/js/152.fc13e017.js",
    "revision": "ccfd5a617158bf4b5d43d0e7fefe85c2"
  },
  {
    "url": "assets/js/153.fe516d67.js",
    "revision": "e9bcc1ebf03ff31d5fae01cf1c8fd4da"
  },
  {
    "url": "assets/js/154.4fd9ec4e.js",
    "revision": "b469f80b087de396f5c3d1ac40ab6f7f"
  },
  {
    "url": "assets/js/155.27ab921f.js",
    "revision": "59d5062ef66a756a006822ffcb00244f"
  },
  {
    "url": "assets/js/156.ab797691.js",
    "revision": "e7c20c5ed8d814b597d3e7afade48efa"
  },
  {
    "url": "assets/js/157.3c88e22e.js",
    "revision": "829d6e47e60fe2434511d976e46d36dc"
  },
  {
    "url": "assets/js/158.5ad16276.js",
    "revision": "43a3202ce79f4e5a7791cd504f56530b"
  },
  {
    "url": "assets/js/159.6107ed29.js",
    "revision": "c4adb140cffa40b5daf60d10e6e24503"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.d0cbfbc1.js",
    "revision": "faddf3f289fe5bd8bb57132905b7e8a3"
  },
  {
    "url": "assets/js/161.a7784c01.js",
    "revision": "e1fe26e864e7d0d18c75ba05df7ea011"
  },
  {
    "url": "assets/js/162.3785159c.js",
    "revision": "098a9f43fb0212d70281c38427dffbfe"
  },
  {
    "url": "assets/js/163.e024954e.js",
    "revision": "024fe540e422eacd4e9c598ee85bca0d"
  },
  {
    "url": "assets/js/164.7619c0f6.js",
    "revision": "5a427a1a830526757d09f346973ebb6f"
  },
  {
    "url": "assets/js/165.29a9c842.js",
    "revision": "7bb9ce2d70ed43870f86fea2da9e3e22"
  },
  {
    "url": "assets/js/166.cc51c18c.js",
    "revision": "f1ba848c403a60505111b062c0df89ac"
  },
  {
    "url": "assets/js/167.9faf5545.js",
    "revision": "d786d4dba82ca60d475b2bbcefa4efad"
  },
  {
    "url": "assets/js/168.154b3533.js",
    "revision": "748c938b19d3c030702899264d1248c3"
  },
  {
    "url": "assets/js/169.d4992fad.js",
    "revision": "63453ac25403e78dfb9c69ca07df55d8"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.03f9fbcd.js",
    "revision": "4a350c64038e7cf93547558a0cce8635"
  },
  {
    "url": "assets/js/171.eca5af94.js",
    "revision": "66d61aac40a97b139171281ec34edd4c"
  },
  {
    "url": "assets/js/172.8467f82f.js",
    "revision": "ff2784541473ed84b3ed06262a33154a"
  },
  {
    "url": "assets/js/173.483b03cb.js",
    "revision": "5a73a3d3462e627b35f189d0b3289d75"
  },
  {
    "url": "assets/js/174.779103ac.js",
    "revision": "01ff000a5e0ebc29c1c59b77478260ea"
  },
  {
    "url": "assets/js/175.2d116e80.js",
    "revision": "375c512967b45a9272ac99bcacd108b3"
  },
  {
    "url": "assets/js/176.987ebc4d.js",
    "revision": "a238b333f6252ac00114208e81a423a1"
  },
  {
    "url": "assets/js/177.fb20fac1.js",
    "revision": "4b050040e0a523771b1bc68d9dc4c186"
  },
  {
    "url": "assets/js/178.d2a8ae62.js",
    "revision": "e23c84da4e2170db869f02556fda9f6f"
  },
  {
    "url": "assets/js/179.3e2087df.js",
    "revision": "060e01c3baa68dacaed7c7b925c1229a"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.0d0e003c.js",
    "revision": "f386d7a2a1f62682d05188a725dcb4f9"
  },
  {
    "url": "assets/js/181.c9953772.js",
    "revision": "529c9268349f91ef66fdf15331b1bb54"
  },
  {
    "url": "assets/js/182.bd73e91b.js",
    "revision": "a2dd63faee101bcb335db206ac518f7c"
  },
  {
    "url": "assets/js/183.9c485f47.js",
    "revision": "16ed9388c3cc8e1c29d2c1c521a73170"
  },
  {
    "url": "assets/js/184.4307e048.js",
    "revision": "b6d1e2bd907642108e2cf2e04d41dbf0"
  },
  {
    "url": "assets/js/185.fe017b2f.js",
    "revision": "8ee9273ce40bfbbefff63740baa1c0fa"
  },
  {
    "url": "assets/js/186.fffcba45.js",
    "revision": "7b058a1ffebccd13cc1fb9c4c4dc4b5c"
  },
  {
    "url": "assets/js/187.245ffafb.js",
    "revision": "15b825e3cacdafc21856d6a623d3d8c2"
  },
  {
    "url": "assets/js/188.42714431.js",
    "revision": "e8058d979e246aaff269872ba9597de5"
  },
  {
    "url": "assets/js/189.599f1e26.js",
    "revision": "c140b4f7f8efec5438bbb7be2691a546"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.2338959a.js",
    "revision": "79db7c377a6c1facd4a7b9c456d46bc1"
  },
  {
    "url": "assets/js/191.d3fcc575.js",
    "revision": "339b77c3cbfb027785ffd8616520ce17"
  },
  {
    "url": "assets/js/192.c1acff2e.js",
    "revision": "4c413975bb6548a305cb38325214f75e"
  },
  {
    "url": "assets/js/193.bee3b8e3.js",
    "revision": "ab5207b2eaf43fc0b73947ad7f60db4f"
  },
  {
    "url": "assets/js/194.27e8472c.js",
    "revision": "3408536c28708a5d9ecfd678248eb7d6"
  },
  {
    "url": "assets/js/195.d7f72e32.js",
    "revision": "e8e698735076c5f8876d22b478073145"
  },
  {
    "url": "assets/js/196.c427d8ea.js",
    "revision": "d5fd96b0f79c9817ac34c97414299dce"
  },
  {
    "url": "assets/js/197.689491d5.js",
    "revision": "405dd5cb448324cb0d4b0bc8d57727f9"
  },
  {
    "url": "assets/js/198.c45d788f.js",
    "revision": "8967799761f1c359631c8d19963a6950"
  },
  {
    "url": "assets/js/199.593050fb.js",
    "revision": "dd51f70d3196cde8245db644889f5acf"
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
    "url": "assets/js/200.33a728ef.js",
    "revision": "bd3f2824af54dcf55761bceba14f7b59"
  },
  {
    "url": "assets/js/201.19d3895d.js",
    "revision": "736b4f19d53c9cd1d31a8d993de92c55"
  },
  {
    "url": "assets/js/202.e2082956.js",
    "revision": "30b00ffefdbadd69866781a8c14cde81"
  },
  {
    "url": "assets/js/203.2e5692f2.js",
    "revision": "86cb1464dab487fddc1d317564a926ae"
  },
  {
    "url": "assets/js/204.2ba63cf2.js",
    "revision": "4c19bbaf98e1d65160f89f40139ee114"
  },
  {
    "url": "assets/js/205.f7ee154b.js",
    "revision": "dbe32ce561a7a8a5a26dc39b8c5798b8"
  },
  {
    "url": "assets/js/206.becd5023.js",
    "revision": "a9f691d9c1e0a91ba209e83a2a3f4a39"
  },
  {
    "url": "assets/js/207.c49daaa4.js",
    "revision": "21033bf2364be84938e9dd9a8196c269"
  },
  {
    "url": "assets/js/208.de42960c.js",
    "revision": "413b44a12848cf22ad5f04a184c74472"
  },
  {
    "url": "assets/js/209.8f2265e3.js",
    "revision": "5392bdc959a6342972843da3e12556e0"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.bb8a3e15.js",
    "revision": "920c74d08b7f9627452fb62a6c6c28f7"
  },
  {
    "url": "assets/js/211.71e2d0cd.js",
    "revision": "87a67a11ede273abc9176c859bf68e6c"
  },
  {
    "url": "assets/js/212.ee4442ba.js",
    "revision": "9d82011a5e3d55c30931abb286858439"
  },
  {
    "url": "assets/js/213.129dc2db.js",
    "revision": "1f1c36a6676b0975c34d07350a939928"
  },
  {
    "url": "assets/js/214.be17e5fd.js",
    "revision": "69d5cd5f3f6b41f02a226ef695b615af"
  },
  {
    "url": "assets/js/215.89178906.js",
    "revision": "1baa864a88a72ef5c4325e85ad76a300"
  },
  {
    "url": "assets/js/216.a33ea9f3.js",
    "revision": "d56daad8882a140ed7af38c9d5c4a40a"
  },
  {
    "url": "assets/js/217.0118557f.js",
    "revision": "8fe194e957b0002f63b28b0474116ca1"
  },
  {
    "url": "assets/js/218.ac596943.js",
    "revision": "7c069a23f47d7cb00e7e82da0c40e5bd"
  },
  {
    "url": "assets/js/219.7cf4f9e4.js",
    "revision": "f01ac1b6dbb878a5f22bde0f8b926998"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.b0326db2.js",
    "revision": "8269ef58fd1027b8d10f7583f25cde36"
  },
  {
    "url": "assets/js/221.aabed353.js",
    "revision": "61809af2c20500fde01857f44f83878a"
  },
  {
    "url": "assets/js/222.a0db16e5.js",
    "revision": "ace1f4564ea5d8dcc34c33fcc3ae370e"
  },
  {
    "url": "assets/js/223.ecdd461f.js",
    "revision": "71ba2cf34803d77722f49f1167006848"
  },
  {
    "url": "assets/js/224.7dc3a851.js",
    "revision": "087e924a2fe99526ad760a37e3c24436"
  },
  {
    "url": "assets/js/225.12904113.js",
    "revision": "71611c10ff92d2a5daac01db36e7a98a"
  },
  {
    "url": "assets/js/226.2139ddd8.js",
    "revision": "5e8d36bdf884c3c58a94b58f09f1d86a"
  },
  {
    "url": "assets/js/227.3a5c19eb.js",
    "revision": "977daa2b08ce35a13169036f9fc6412d"
  },
  {
    "url": "assets/js/228.f43fbb86.js",
    "revision": "29859839563b3e3d81fc7fbf6f8784e3"
  },
  {
    "url": "assets/js/229.c8a345d3.js",
    "revision": "77b7696b3b6c34441a4ab49305d3c824"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.95e7bc1f.js",
    "revision": "e54aaa616b2326a3c979a0262b23af13"
  },
  {
    "url": "assets/js/231.86bcbe69.js",
    "revision": "2e27f7c688aa6c054b0895b1b90b00e5"
  },
  {
    "url": "assets/js/232.76e1a00a.js",
    "revision": "14bf08ba499870d2fa2d7d02f2ce76b7"
  },
  {
    "url": "assets/js/233.d491cdbe.js",
    "revision": "ebfcdf70649f0b305ec6aa07a06bc3b8"
  },
  {
    "url": "assets/js/234.dca76590.js",
    "revision": "5cd91eda0f04873dc2ca7c3d27b8fbde"
  },
  {
    "url": "assets/js/235.8bc6bc5d.js",
    "revision": "9df3a24ae3ac8012e7a3b820d4287b30"
  },
  {
    "url": "assets/js/236.828a1d87.js",
    "revision": "6f641240b360601d848f0622f5edd144"
  },
  {
    "url": "assets/js/237.4a2874ba.js",
    "revision": "46bb951d71f1f2f4fd8187751502e4ad"
  },
  {
    "url": "assets/js/238.3f7cb094.js",
    "revision": "cb03bc2c19cf70bfa99e99479ec8777b"
  },
  {
    "url": "assets/js/239.19691770.js",
    "revision": "e2759b48a5b43eaa43e0ec1acc314156"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.9e433bf3.js",
    "revision": "fca16db34c1ac3aa06a5a60575c4614e"
  },
  {
    "url": "assets/js/241.43a04f85.js",
    "revision": "c1385a5c04cdf9a83d097e2a3a6bbd29"
  },
  {
    "url": "assets/js/242.0857c9dc.js",
    "revision": "4b241658546e089cf1b495ed55ff40dc"
  },
  {
    "url": "assets/js/243.82cb1bf8.js",
    "revision": "73d1a800841bff5f1b5e378226d6ce38"
  },
  {
    "url": "assets/js/244.01531729.js",
    "revision": "3baa2509f5d85e6ee4a248cde7d22ed0"
  },
  {
    "url": "assets/js/245.631dc8a6.js",
    "revision": "ef1a2145be5affcedd2070ebd8971fb3"
  },
  {
    "url": "assets/js/246.d060f478.js",
    "revision": "0fa8be2c84ed5f4187cfbb4f1d06009f"
  },
  {
    "url": "assets/js/247.96c702d8.js",
    "revision": "40121cb476dea9804f6e36bb9a6ce457"
  },
  {
    "url": "assets/js/248.d19d7354.js",
    "revision": "2e1c91bb52a45919f4edefda4f3badc6"
  },
  {
    "url": "assets/js/249.528f282e.js",
    "revision": "693519739c3d5d7631c5f106bcf70c86"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.3fde543b.js",
    "revision": "2bc1e9c49fe26f337d4305716c0a00a8"
  },
  {
    "url": "assets/js/251.e3d5c8f3.js",
    "revision": "52ea55028e4d5f11152883040c6891b6"
  },
  {
    "url": "assets/js/252.6721fdfb.js",
    "revision": "3957f55466c77dac9b907d3357729305"
  },
  {
    "url": "assets/js/253.f469b10f.js",
    "revision": "aa04eb58b45c177007630bca95952d3a"
  },
  {
    "url": "assets/js/254.982fb800.js",
    "revision": "ba2e44f4b00ff9fd0003f99eceb41935"
  },
  {
    "url": "assets/js/255.9d49267a.js",
    "revision": "a7e3ec6b59b35f80b32979321ad39795"
  },
  {
    "url": "assets/js/256.22c725ed.js",
    "revision": "9edc188aec85991f63f16acd52239e89"
  },
  {
    "url": "assets/js/257.485fb3dd.js",
    "revision": "0555488b63bca3d86b7fa7ae39631dc1"
  },
  {
    "url": "assets/js/258.4ff27590.js",
    "revision": "16183a3ed3889e714eb7944243596467"
  },
  {
    "url": "assets/js/259.67a4b13d.js",
    "revision": "3f29a26f9567ad0a6a34ff2ed0d14abf"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.08d2476e.js",
    "revision": "f2befda103f8116e6bfb0fc58e8a7259"
  },
  {
    "url": "assets/js/261.9b00c555.js",
    "revision": "4d2505fb14e779af62abcfb08591c919"
  },
  {
    "url": "assets/js/262.198cb110.js",
    "revision": "99055ac051aeba33be1c7066115c118f"
  },
  {
    "url": "assets/js/263.de2ba4e5.js",
    "revision": "501badb053fca2a54de80361a002bf7c"
  },
  {
    "url": "assets/js/264.ec304a97.js",
    "revision": "4c2b227c790ec3bada619453c654ca89"
  },
  {
    "url": "assets/js/265.c19a8f3f.js",
    "revision": "e40a521b997e894e836d2eb1575f0cbe"
  },
  {
    "url": "assets/js/266.d6de10c8.js",
    "revision": "d840646c29dd56ba983df4b1976091d1"
  },
  {
    "url": "assets/js/267.bf901066.js",
    "revision": "bc2d4b61716e711747b2ac3accee6ed0"
  },
  {
    "url": "assets/js/268.db46d6c0.js",
    "revision": "3833c6019e36d3a3b91ceecbd3c9e7aa"
  },
  {
    "url": "assets/js/269.f4ea9adf.js",
    "revision": "31043cd941a61b2b490f5b8460b3ea74"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.25a70032.js",
    "revision": "55233636bd6548cf081e95c1e2da1ffb"
  },
  {
    "url": "assets/js/271.0d588150.js",
    "revision": "42c5ded98862dbb5f120dc0c46c8036d"
  },
  {
    "url": "assets/js/272.260fe069.js",
    "revision": "f0114a1c661484d9086f1e443872bdd9"
  },
  {
    "url": "assets/js/273.2eeb1947.js",
    "revision": "55a89a96682de19d0c1a4cfff3a6baa4"
  },
  {
    "url": "assets/js/274.8a7ed29a.js",
    "revision": "d895601ec504ee1d2a46279cb3e76623"
  },
  {
    "url": "assets/js/275.ac0f1253.js",
    "revision": "3a3f9e6bb6b7df43334f480ce4e0ba2c"
  },
  {
    "url": "assets/js/276.dbf1ed28.js",
    "revision": "2e716636555fe8b8b3bd86f2be5aac58"
  },
  {
    "url": "assets/js/277.8f333e51.js",
    "revision": "cdde1a386ae56a9e84f2c486341a3b8c"
  },
  {
    "url": "assets/js/278.8be70e4f.js",
    "revision": "6781ad5b8dabdd9c70777c0a3b53a2f0"
  },
  {
    "url": "assets/js/279.78da7def.js",
    "revision": "7832d8eb573feb0eb5e9428195904345"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.14ee77f6.js",
    "revision": "35fd230a5e7d14d205108dcfe656f3a2"
  },
  {
    "url": "assets/js/281.f923fced.js",
    "revision": "365877a881e334978a0fb9ac47c56090"
  },
  {
    "url": "assets/js/282.60fefafc.js",
    "revision": "436edd7b36b4acdf65d33f309676355f"
  },
  {
    "url": "assets/js/283.ce9cab43.js",
    "revision": "0a4a97bc437e626d04d6fa7968d5a56a"
  },
  {
    "url": "assets/js/284.b30e998d.js",
    "revision": "fc019f7238c5207877a28fedf607dae2"
  },
  {
    "url": "assets/js/285.6b4e4175.js",
    "revision": "6376c9f5e9a7fcf1e41bd30e5e395c55"
  },
  {
    "url": "assets/js/286.f6a84c85.js",
    "revision": "7998520c1f4ad22eedeb747f5e3482a8"
  },
  {
    "url": "assets/js/287.23f40033.js",
    "revision": "322b081e9f43c08edafd71bfce0aee6b"
  },
  {
    "url": "assets/js/288.0216a2ed.js",
    "revision": "d9cbd8e4f0f3969c00ebf9b96561d6d1"
  },
  {
    "url": "assets/js/289.0fd0ee28.js",
    "revision": "2ff184f37acdeb941361fd2d9050411b"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.352f2494.js",
    "revision": "516015116b439631bbdf86bf6e3c1601"
  },
  {
    "url": "assets/js/291.0c559662.js",
    "revision": "488bf7a11a70e0a1b14329cdaeb81420"
  },
  {
    "url": "assets/js/292.513b03e8.js",
    "revision": "fd5bcd08cfea5ec300dc42b7238f5901"
  },
  {
    "url": "assets/js/293.4da11477.js",
    "revision": "8241a6f323286656cb7bf7111f9cea97"
  },
  {
    "url": "assets/js/294.5d39bbc3.js",
    "revision": "90b80e1729f45caff730eea1fff98fe1"
  },
  {
    "url": "assets/js/295.bb0c96c6.js",
    "revision": "e667eda5e05eaa246c388dad116745fa"
  },
  {
    "url": "assets/js/296.c4ea9b7e.js",
    "revision": "75caeffe99c19d0cc9cae161ce89dc81"
  },
  {
    "url": "assets/js/297.b10f0f71.js",
    "revision": "f0bd6fcad1a97ce8f3ff68c194b2f949"
  },
  {
    "url": "assets/js/298.af0e9d1a.js",
    "revision": "f6184c51ee55ab7bfe507871298b36d8"
  },
  {
    "url": "assets/js/299.6fc1fcc3.js",
    "revision": "617bdbd9d35663c7db93a606e1f2e938"
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
    "url": "assets/js/300.decb7d69.js",
    "revision": "20250ca00c63589d495c46f867b498ce"
  },
  {
    "url": "assets/js/301.a55fd20c.js",
    "revision": "4f11c6ddaee4110f595c28ba78f0315b"
  },
  {
    "url": "assets/js/302.2b9c3e76.js",
    "revision": "2fc09d7bce8254224b2116290b7502f4"
  },
  {
    "url": "assets/js/303.b09099a2.js",
    "revision": "e210d6053f62020539120580dbec4d76"
  },
  {
    "url": "assets/js/304.be8cc52f.js",
    "revision": "464c94e3affa051507ee3e12ae671797"
  },
  {
    "url": "assets/js/305.1d4aeecf.js",
    "revision": "bd7ecac1f632c39ea9e1992739a071a3"
  },
  {
    "url": "assets/js/306.9f6f0b6b.js",
    "revision": "85c6772c128575c207937c28dc03f406"
  },
  {
    "url": "assets/js/307.06e37679.js",
    "revision": "201b1a6553eea21fa813033fde7c048f"
  },
  {
    "url": "assets/js/308.3149195f.js",
    "revision": "23aeac710cb99eb09e1f9076564cdf65"
  },
  {
    "url": "assets/js/309.71af10a7.js",
    "revision": "e88cb837068497ea5c91977934ce2710"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.37a980b4.js",
    "revision": "f14f1c972bed2c57471ea16b571b52f3"
  },
  {
    "url": "assets/js/311.b5316a55.js",
    "revision": "9603d75a15a4100fd9a48f3fd05643a0"
  },
  {
    "url": "assets/js/312.f35128aa.js",
    "revision": "f7f239e6c949ee804ad6756cabc03b65"
  },
  {
    "url": "assets/js/313.bf933b9c.js",
    "revision": "2b46e97cd96e40931c8b399ca9832305"
  },
  {
    "url": "assets/js/314.c6d620b1.js",
    "revision": "96024087fad1b946c742119e512a1c1e"
  },
  {
    "url": "assets/js/315.6c08f58f.js",
    "revision": "618fb63792303fd47293403490952b16"
  },
  {
    "url": "assets/js/316.4e353cde.js",
    "revision": "9b216fa4b415f96f1501995d3074e0f1"
  },
  {
    "url": "assets/js/317.2cebe6dc.js",
    "revision": "b0f2d0f69b577966a28e7aaa400ab016"
  },
  {
    "url": "assets/js/318.ff97411f.js",
    "revision": "ed0c913358fe0fd7570271478faf3d28"
  },
  {
    "url": "assets/js/319.8b55a4be.js",
    "revision": "68d66f6c387fcb0e7b4a7e0ba9ec0b65"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
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
    "url": "assets/js/40.7d6162bc.js",
    "revision": "2f3d0f35b68e5022e9c74c0e45c5ca19"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
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
    "url": "assets/js/46.1a0d2816.js",
    "revision": "9d74fabddced27f533eb1057883ceac4"
  },
  {
    "url": "assets/js/47.fbd94bd7.js",
    "revision": "d5582169499c7ed266f3c52b2da1d28d"
  },
  {
    "url": "assets/js/48.ff9fa5bc.js",
    "revision": "6436e035841ca5407f46c370ddc0d3f0"
  },
  {
    "url": "assets/js/49.e114b44d.js",
    "revision": "8197e552a5413b3f5686a90d86d3e76f"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.72febdce.js",
    "revision": "bd331f16957faec9bf696a1aef872892"
  },
  {
    "url": "assets/js/51.89679c84.js",
    "revision": "380b473f3130597824939708903e5c35"
  },
  {
    "url": "assets/js/52.b2b38e37.js",
    "revision": "86a0e132c312606015f270562f4b157f"
  },
  {
    "url": "assets/js/53.8c8021fc.js",
    "revision": "145a9c5672a26cbb3395a647586a1f29"
  },
  {
    "url": "assets/js/54.fd2af0cb.js",
    "revision": "cf719be8cf8f1d50847c5b734f702eb6"
  },
  {
    "url": "assets/js/55.40b15fb0.js",
    "revision": "c4c8a8a17e6d9f31c3f9d69b828aa2fe"
  },
  {
    "url": "assets/js/56.5d0c6c6f.js",
    "revision": "dcc6b03cd333584d56018fddef30bdf9"
  },
  {
    "url": "assets/js/57.ab790651.js",
    "revision": "715dfe44f27bf1c3b1ee38df1b24f164"
  },
  {
    "url": "assets/js/58.2d0a1a5a.js",
    "revision": "51d36d0472e1e6bdba2457442239da84"
  },
  {
    "url": "assets/js/59.3422eb6e.js",
    "revision": "4d508c7c15d64b0d68432bea289e6c22"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.87e22cf8.js",
    "revision": "278e7d61813379aff184841904ae1b9b"
  },
  {
    "url": "assets/js/61.a1f65cab.js",
    "revision": "7bf61b1f8b3f3fca6c000ade280ed6ea"
  },
  {
    "url": "assets/js/62.856a1241.js",
    "revision": "807bb168492d1b69aad71c8e8b8faa61"
  },
  {
    "url": "assets/js/63.1a2216de.js",
    "revision": "ce1d15f57f7f38515521148c868e4120"
  },
  {
    "url": "assets/js/64.3c5e9cd4.js",
    "revision": "a37a1c3cf4a7d895518662ba812ab19a"
  },
  {
    "url": "assets/js/65.067ef8c6.js",
    "revision": "d0e860d771fee3e7646e92a5edd78600"
  },
  {
    "url": "assets/js/66.a862e587.js",
    "revision": "2c36e57e4206bc0bbf907e5ecd51b8db"
  },
  {
    "url": "assets/js/67.063d0beb.js",
    "revision": "c88e95b01cca6c94e0c1ab24e07c9680"
  },
  {
    "url": "assets/js/68.536e84d8.js",
    "revision": "09f68572474c930c241139ebdf55bec5"
  },
  {
    "url": "assets/js/69.85988572.js",
    "revision": "966f849c39b8814a5543b297fe37147c"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.8ec8a46c.js",
    "revision": "39ee43e095a59c9ebd2e2d8653b0d72f"
  },
  {
    "url": "assets/js/71.2f6b1a7a.js",
    "revision": "162a3028636e96c98c4b2b9ad5ef9e7e"
  },
  {
    "url": "assets/js/72.fde85207.js",
    "revision": "1de097db6f0f31b0ef4103bf5c498233"
  },
  {
    "url": "assets/js/73.d9fc4efc.js",
    "revision": "27f581c714e06170d6dfdf4212d8b556"
  },
  {
    "url": "assets/js/74.9d338666.js",
    "revision": "9c71cc5b5f82e5e379fa615b534e7f55"
  },
  {
    "url": "assets/js/75.5f5e9e6d.js",
    "revision": "311c38efe716905310fff47fe2772520"
  },
  {
    "url": "assets/js/76.54bee39d.js",
    "revision": "93fd22bf807c78cedcf43273f534b936"
  },
  {
    "url": "assets/js/77.b9f4f29f.js",
    "revision": "ffc81cd03756bb1cf61119cd9b0f44fc"
  },
  {
    "url": "assets/js/78.14072a12.js",
    "revision": "6632bfd6ecb23530e3cd35ae6a68beb0"
  },
  {
    "url": "assets/js/79.327a33fc.js",
    "revision": "945442a9d4d9ec43233f7e4cece31a9f"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.09276284.js",
    "revision": "6635420318c9f069bf21ca78f495f1c7"
  },
  {
    "url": "assets/js/81.2be641ea.js",
    "revision": "958c7dc59ac1e46fdc270028feea2a1f"
  },
  {
    "url": "assets/js/82.288d45d3.js",
    "revision": "d22bd49fcabc8a0b4bd7ea1b139216de"
  },
  {
    "url": "assets/js/83.081a9f62.js",
    "revision": "d3a20a197f1f5017023571d78d35f046"
  },
  {
    "url": "assets/js/84.b2c0d808.js",
    "revision": "01ee615e9877f71cd64b3e6055b89a79"
  },
  {
    "url": "assets/js/85.5f57e098.js",
    "revision": "5ef39a5b2975ff95f918a14c0801e47e"
  },
  {
    "url": "assets/js/86.6290b650.js",
    "revision": "f747fb23c754a3265a7d3f978d287cda"
  },
  {
    "url": "assets/js/87.83019ecc.js",
    "revision": "2cd8526b924b4a11c2fe8d2088e3668a"
  },
  {
    "url": "assets/js/88.d76b3dd5.js",
    "revision": "5ac2dd72ba2c87e74fed637c7df6769c"
  },
  {
    "url": "assets/js/89.b69d8e9a.js",
    "revision": "33055bb662cc8df09c627f1f6954e884"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.911d9fd5.js",
    "revision": "ca575d0d27d160dbe8e3a436cd17863e"
  },
  {
    "url": "assets/js/91.e92d9531.js",
    "revision": "d78d86f824a715e12abe732113b6ce34"
  },
  {
    "url": "assets/js/92.2d7de507.js",
    "revision": "a8e3ad9e93e9c5a3b0df9e0bb8a616f4"
  },
  {
    "url": "assets/js/93.484376f0.js",
    "revision": "d0b784fd2e38eeda778062dc3a978583"
  },
  {
    "url": "assets/js/94.a5921be2.js",
    "revision": "ab01f21cacddd9f301fd9f9f150252c6"
  },
  {
    "url": "assets/js/95.38937b70.js",
    "revision": "5bb70d88fbd1c681988136f8262bb583"
  },
  {
    "url": "assets/js/96.57145c99.js",
    "revision": "3b802c79cc14e5d003e8d63a6932b7dc"
  },
  {
    "url": "assets/js/97.9def574b.js",
    "revision": "72a65068d1ac9bf672d18b99e6067661"
  },
  {
    "url": "assets/js/98.13398f8d.js",
    "revision": "016b017bbd5ccb2aed0c4116f007efdf"
  },
  {
    "url": "assets/js/99.57b63a0f.js",
    "revision": "42063b8353564fbd742d64be06b5f32a"
  },
  {
    "url": "assets/js/app.8365d87a.js",
    "revision": "2be3dc838ad84f82e696f45f06d9861f"
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
    "url": "basis/algorithms/index.html",
    "revision": "fb594be8cafc84a99fc74cc929ec1691"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "7d909da21415b1faaef92acb75311f54"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b02551f3ac08a9ada16229285560b051"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f543e009c9e0e02c8d3c19f7619e15a2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6c05b2a836fc4201c588db6e763706ed"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1893eb8df5fa025c75b9651c295e6d08"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "df32828a63126c6a92380274921aa991"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1b12646170eec3fb32c4024eb36f3af3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "485ba66d62b2687d087ef8bee1ab2bdb"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f2fca670dcfe72ee373351caa1f38209"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3511f2366cd6ee35009faf6e6607b395"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "3e204d30981a2cdbc0f3196ea4b522d8"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "298d5539d1b7bd89f765419f2713d770"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "e70d6dca1e9f0826e0fff022f8d168fb"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d2d8540aea15a6ce81139c8fa71ef03d"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "45fabe8bfacfbc1fb50f804a5e7ea522"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "dba01ff49049ad113d81f4020b1e5cf2"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "0fb9f7b661cff46a5108a2c22ef1f137"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "ce9fa9ee9f4b47c3abfa2674c8685518"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ea9b6038f0cc44dfb4f7d6f27b3e60ef"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "a43369debf5baadfb310d588608dcb49"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "318d465f365d11a7dbd01f9cd6ef9d68"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "4a9bb22361a237ca5ef7de143e091ceb"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "8c927cb2c842fd2780e6577a2cd3c5fe"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "f9104e94dfd1babc87450cef1d72d35b"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "4420e15db9a25b025d921160594316a9"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "2dfe8ca5da56e69a82fad053a84a49d0"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "12f4a66d9796ff34c6d35380d960eb8d"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "9f097f1ea097a557fdeeda4960c7f01d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "aadc06bd641e4a34dc5bf8384c10f347"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "b8c191942bdd2ea12ea5b898242b431d"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "3c58b45a5bd187e63e9ad35f0d247493"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "1b900482bbe326976a1fcfdda8f30292"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "36c290c5211c78c53c7d52842dbe2bc1"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "91e0fc5c1373a8fe600645e492c85374"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "402c7b8dcd1030d071d803ded3d4bfdb"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "950115e7ef05212ffa7f096f7f904e5c"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e182f2ee3a2b7acd7a78e5945adc6c7d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5092cc988e46fc1fb632a7a8fea6fdfa"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d6b1ab8dd6bd5aca5bca905d92996702"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "2fb4fa437f4ace394e843fd84aa82d9e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "45c4a1ba6eec08d21097417739db0d17"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "8642999f2cbe3816ce731019d7353f2c"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "5c4f7030627d438e19a688dd8f36046c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "aecffb9da7a8136eb47219495b2b51f8"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "c1b0db491eb99bafb0b2a0f26fdbcbb9"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "5a41e3b1075950f9bed60b84b8c40b09"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "729380314ad428541e0cd2ef92f55d2d"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "352a73d8a173d1a819996abdeb91c06b"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "849ba58299fcd1d2b69cd46ae6b4a416"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "f7bbfebc5966435d9d22441e9a4f102a"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "3ba1f6db9babb85664fecab87a18294c"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "f7f91d0b6d5888a2d1cdac007f758078"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "df1ce491102fbbe026ddf2e14715815b"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "4192f5cbdb7a2f299905b45450684a4a"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "75e55ea05c39fb763227a7581f2d06e6"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "338082719c3fea2c89e7c010c924e5d1"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "f0b6641967128153cea37106f782aa43"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "5271361051bb4754d43871d984052cf2"
  },
  {
    "url": "c/program/index.html",
    "revision": "bb583c6a073007d05bcd1f2613c8e409"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "5dcd21e639e005f790b0285e73519d3d"
  },
  {
    "url": "categories/index.html",
    "revision": "cb05eb798fd6c9c9533528c54e9dba0b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "f30e8f9fa8c0a9bbb47c1353044a157d"
  },
  {
    "url": "figma/index.html",
    "revision": "b82d3f18c626fd6025edca1268d37790"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "52f2407a85c7c388eeee7b17c976e04c"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "ac8a5abd6feeeaf9730b3f268c4ad82e"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "9bb834581e81bf4a26660fe47a5f9dfd"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "a53e5eb32bb84c0554e31d1aeadc7555"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "924ed0ccb253b10ca174cd30aae3fbff"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "d1f4ba955b82c33c5b41c650e69c6000"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "b9ce30b085174f217050fd562859ff47"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "3be6f796284ea530b33c914df62a028f"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "5dafd711b11c1af16ba176a3fcc92898"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "6a621feac011d3de5163c39e0f681bd9"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "6cc1c1b6c06989a03cd9bf95d87a238c"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "55e16a2a6dec5c7b5b316b2dec0eaad8"
  },
  {
    "url": "flutter/index.html",
    "revision": "897857d688b47b91ab0bc1501ae77536"
  },
  {
    "url": "flutter/point.html",
    "revision": "a96959ba7a65fea6b93392d934254550"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4a63a5735a4a0ae108349130774c67cc"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4880e1c7a02a46426c9c35cd6557d0d2"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f2636a8d6ff17a0415c9521234e60e8f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f2a48716727c217381341f55ed7aaf1b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e85881236c0a4ba51da30504b6847698"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8431667f5adf150a6abfa89c2ba6f0eb"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a3480be652a496228dcd612f10617bad"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "057094456867da195112bcdd99d83356"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a38181388181348f7fb8c996bceff5e7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "39132ed2046f1861f13eb07134f3c4a6"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "e1f4e7ea388eeb1c64bdef2e72e6ed85"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "216da99d540cc34190384354443773bb"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "9ec0031fb9c0662b18ab5cfdcfb520b9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "595b251493269b241289df1c0a619a55"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "c59fb0f3826eb0c8f8e14c9c95d50880"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "eb82cbda4f63ecfa741c4709cd2d9f33"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "227c057c5971931a17f24dc158c81620"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7a5560ab3835fdf8bf9e549d1d67b706"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9eb3eb9e5f0c9119821097cccb7c8f33"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d0287869a43fa648b1b7e64d4553466e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "294f73bb1d0d18ab7ba2895010756dd9"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e66fbe1c37d02a0cced6fce7d223807c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a6a8019a7ffacc214be7f5c0f5d0cb1c"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "cf1c2e9495fe9e8c324a68f666380553"
  },
  {
    "url": "haskell/index.html",
    "revision": "74e828d0e22377120a00382f2154b7bc"
  },
  {
    "url": "index.html",
    "revision": "290141d9eec53f0deb19e0eb87ece80d"
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
    "revision": "8e4a8fdf7b806d31138c3c7b30cb4ff9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "697080d65887eac8d64243b73d3b44d9"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b4ce72edbae2309a532579495560cbe5"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "7541e8c8950f4ee919dfcb385dc5dcaf"
  },
  {
    "url": "python/index.html",
    "revision": "dc1904dbd99676a5083694a03f7043c0"
  },
  {
    "url": "python/pyenv.html",
    "revision": "2191128e031b36fbf822f9e8498d8ea4"
  },
  {
    "url": "python/python-ase.html",
    "revision": "f6125b11c2baa9702265f101791ac445"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "28d211ad1ec3d8f5751efcc810a49209"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "60628977d77fc1486f33c083d3930046"
  },
  {
    "url": "python/python-file.html",
    "revision": "3fcbd2cecd29d42db4d4f6e76cfb79aa"
  },
  {
    "url": "python/python-function.html",
    "revision": "b26ced588490179fcf7015733f02038a"
  },
  {
    "url": "python/python-generator.html",
    "revision": "8c6537125879562ff1d58b9fb333dc92"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "7d5da061342e7120af1c87f858715ef3"
  },
  {
    "url": "python/python-module.html",
    "revision": "0ea1bd35273014efe19c82668774d924"
  },
  {
    "url": "python/python-string.html",
    "revision": "4f5b0f9aa94e7ca8652eda30dd134e72"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "1eba99737494084d32f80125357e38c4"
  },
  {
    "url": "read/index.html",
    "revision": "d9e8a47a288cf1ac09851818763b04cd"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "42a54339f3bb9ce6643b7163b8f5abb0"
  },
  {
    "url": "swift/better/available.html",
    "revision": "048389d537ea55ae23c4d0ca475b7963"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "f355371f5dda5fe917c2c67cebaeed81"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "88ff1708ec09f81a27aca71bd4088deb"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "62eff34d721ca1e8879e5fe439239fa3"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b2bcfe9c8fefff29060344a73fff1df5"
  },
  {
    "url": "swift/better/index.html",
    "revision": "19622b8afcda219d9f8bb616d8995f02"
  },
  {
    "url": "swift/better/last.html",
    "revision": "a79ce9e4a3167d67a8dbf04891dd05da"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "a45de7f9d62267571d9f1adc35b2473b"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e9559140a1a19667a3980cc6e8d625f1"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "d0a232345115b26b7fce57dbf47ce9ad"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "432fc56633d3bd392227b92a4b5e6e69"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "87a5e674c9825cc381a10fb945ee95ad"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "29abbf6bd70b1f50b466ad3102fe4cca"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "50393a056fb82ccf14a9786530b48b4c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "4d711e7cd613fbf39b7d7b63916a0311"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "277a33d0ab62f36c1d7b0af5b39abe26"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "7b93b0be6893a8d62f3d531d1ceb3a58"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "19be18cfed1579b50b5d1f77ba55433b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b8926478b6bd1fc4c64f8e4c5ff9afef"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "5986446dd04e5aa4d7330d91e2346a77"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "fa676457e16f2a5120beabea09fc50b8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "456396de6045acd53130ed6acca50b35"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d4ad8c199c7eae20d99ce4c732385626"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "e921d3774fb1da053aaabdbe896cb311"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "978627a7ce9ff46da6e71fb937a4a440"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "85f7246b0dbb95bec220f31f8a9ed7f3"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "f71327a11dbf716ad427cdf308698aa5"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "a700de084a346d80062c5079c32ef6f4"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "4f1c2d1c6a0d23e33662c18e9772bebd"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "b4b10ed9dc787d25843880dd77765697"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "91d7ff830b1b79a5ac76ae5048ba9e12"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "63e0ee09d5eded0dc9fe2e1e99fa4348"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "d90a71443bfadb91bb949a2b7f8bf7c6"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "2fae32ec1e2534ea6473f8f87c3a297c"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "b856dc610cdc24f12e1c8d9279df6b45"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "2c80bfff39a0d78fbb90a893a6eaf60a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "f6a05805a4d5a7d637a6fd21aa268245"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "f3dbed8de9bf8ef4b76ecc23b1178e57"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "be745d3f16fb31eefaf8440140a7e4d8"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "602965971ec8908eef74a17c0e431865"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d3b681b38954aa915c673505efb9dd15"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4f45b91c2339dd91bc65d023bfe0478f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2102866aef1b7a93d62f0ebdbf32286a"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ef9d8a201e1118f734f6a7873f61fa41"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "eef1ac0ee4db9a2659d4ab8e4d0c180e"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "3d19c32f58671ea87db4892bd5e2046f"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "8f6e6c7324ec585fe425e173a7e0b0d5"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "1d44213060a23878e8011a3ab74a8c7e"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a9a013420d943c1672281350a4f75267"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a4cca27d84b2b5a8f0032683e63c28f8"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "a24eca06618c9c7b367a42bb808a40bd"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "bee78e2427d383d74c75a8ca0ed87a1f"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "0e086cbb20c9788c065cbe9e88e55a70"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "4f8453c1109de9795f3d4c4a543da2a4"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "ab110153a6f098ec2c8552121eeb0a7e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "296c363f174ead459de163b962ac0c1b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "4f8dd08fba5adcabe8252331eba0a0ca"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "2a6cb6a0dbe2daef6a9e3a1df198639e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "fb691b1cadae1daf3b3890afc561b713"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "8dcc0e1a47de36ea7d5a838685991fdf"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "236c80f4e2783ff0bcd55d4f6f2a1675"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "5fc4ae0ea42787b8599552d589bd9d32"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a5ec9d9a09f73b5417bd5c3b3f856b7a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4fdd577e13f8ca285d4e1078cd36e530"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "1a2ecfcad2f11b1a53e9f961ab3829b0"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "cc2a3ec9e4e003031b5be70f4ff67faf"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "72bc35bac8f0d1e24127af10262bb5cd"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e76ebc0e29062fbcf06618e103922cb3"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "9913ff95eddba903d2366fe7c532ed62"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "ec5a4f28b6f8878f1d04272fb7b554ce"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "eb176b6bdf07c46d1c7e5e07f326d3b9"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "1e0bcd352de22efcc7d911fa3905363d"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "47035bca7c8dfa93f0ab0b0160b3b3cc"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "291aac8df9b1b31d73e844ae1d3b2373"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4ea2d1f8145e33178448ad4f79691a22"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "9f3c3003f8695d21aaeef8cbadbc3aa0"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "588a6fab73cadc968f0614050dd75d16"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e1b517f403665153c503e951b12403ef"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "7bdf932f4cddcf5f62ad33167fb9adf7"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "5898517e64869ab1b1c035d5de78ae48"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "7c2dfe7c95673f1cd5d7d249134de8ec"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "7faed4416a1fcedf14edb49d6033868b"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e4bbeb196d8cfbe1ca56e080415e1b7a"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "f4584fe95c9d8d91170faf6bc2dc3b04"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "ea277632fe28322226960233a6b11d24"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "70e6f93f717f8103804a32df91d11d57"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c1c97d7afdbd85ad2acd95ca2f3760f6"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "3e801d7470ac57896cc9320c2a86d1f6"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "1195729dc9c0c38309a2eeeb7434d022"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "8abed402eb717b441a44ceafd528887b"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "84dc5a4e92a5a760007e22b0549da492"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5d5b4f8004a9ea963f99f4e1f94d8542"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "85fdc63debd9025e1c437bc17386a995"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "3f6f59cb27c26cb92fe0a48e7c076c37"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "1d54d0d71697ef71e4343ce9d7eee088"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "b38ea1dd1bace94aefd4d60c4de02860"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "887b0de39d7560e647762fb3b0e1e71b"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "a9205b9b23d66044b015d7bfabcc2d76"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "2fec3c36697df92d97a43d5a5020a61f"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "95f2d198e18c60fda8f6a9455e26aaab"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b22e7393731ebeb4e7d78886f820acf0"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "e587b5af36d6245e6a3cc83c90e2f6e2"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "7cd8e6d27f8cb10e7d7fa738a6361e5a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b6706ff215fc19d28772d2b3603e7d0f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e4f9ea568904caee2c068d8fa606b061"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "37a50c96c20868ffede8b821c9dc202a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "1af9042680191348175c0bf1b9b9dbdc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b3dd78271f64af5284fdf8965089b842"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "2daa4c7669b07b91088caf0945a5f131"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "91fc66287559e5b5b5b0ee760b9753f8"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "5236e718ec578764a7117cc9b49dcad3"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "295aa6329985e4886f361d83c5730714"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e7fd7490f9c0455e72a5e35d3eafc25c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "5e69592214b4c7d02e9fec93444c77a4"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "9a14f0ac98f9c33330e6f44bf164a7d3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "10d62186b3e5ff0bf3d550b75b7c3aac"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "50ed84f62bdc6f53ad7f8cc99f7f2437"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e8c5ece6b4455e8b30eca9ecaadd6f6f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8492720b7cd13a25fe3a6af9b1894c44"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ccae2e7f2a7413268eb3b3a7260a317b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1f0c5d925da5bcbf3cd1ce6d8d0151a4"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c311be8f6f41bcb8a44728265a0a7468"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9d3a33cf289810e77e4aa34c02b2a845"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "20273b0edfdac5e729b53d1f1f656515"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "375cc4750a595d7303d4353936d34a65"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6e62ac444f409d95e483ed977c0b55a6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "15f493075ab67510186b80cb58c4965b"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "54a01b3a432be701b6dfb3d3437ba0bd"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8727e9c8416433beee050020888d2000"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "50deea809c44ca7b271f1ae5e5d7592b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2506d46f954617893ded51a9f412dccc"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3f3ef0b4d1551baca0cbce0fc5622c24"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "593e93b928f145fe943c3a5efeb69214"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "016b2094ce9e4cb2e4f782ec9d2e7d48"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "b07b90f2b0139d9fd5f376458392d15d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "160b6de7d4328361fa9d0bd618a67440"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "6a5084e27ebee7f1cbca05d08b5998c7"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bbdb85b493b5b0d728c011dcf64bb9ca"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "16e58a074dee5756c11d6f0a168131f5"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e12128026aa8f874d85d6bf1c6c13a73"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "1c439c2a851c0b8a1921e8271c4b44f8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8803e454fb8f808a817bab7505857105"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2304fafb9ac3a00cb687214130dc655e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "56ce9365a5a4bd7a2227f3432b2be886"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8efa968809815627ee5dd81b5d2cfd27"
  },
  {
    "url": "tag/index.html",
    "revision": "00065b5711ac4ff328052846972ee647"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e0dd6a5133a1818c73523104362b81ef"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "45bf5f43c5f5aa5ad074fbdedc4991a6"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "66df3eb835097152cdac544a7edc3ac6"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "da9ab39adf190b70f54aa0b2c7fb9f52"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "30ad04b51a1778a0ebee82bd7ba1df24"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "3f9e437d74d57e469f34553a9d1313de"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "011a807c5a771e127e9013b407ecac02"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "47085d5f4b6277f8c2a8267df28ef375"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "f822ecf29cdbf9bd6a9dd3ffa88e87c2"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "9e80047af7adb139c61c293be06d0f46"
  },
  {
    "url": "tag/json/index.html",
    "revision": "265856a2d10e5d8ddbed7038c37adb5d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "acf309467aa5bfd9d5458eaa663f27bb"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "ee8f907215a644336a7cf2926771ad4e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "38c420463ed4d4fb2b84446891cc5e62"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "4b7700580e7ca676bf7b1ecf47bf0b11"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f0593c666dbb54bce2d313f95801406c"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "3f967a12cd1cdbfcbf1ff0166cd175ef"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "7cd189e2fa2181575c991aa74b9dd8af"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "f5ff5a93539d9dfc459d1e90ffc28246"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "59dabf3a73a5fb6c0291c7ca039ad75d"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "21b129cd8b749f9ffbda9cec39c31e1c"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "d7b0ac2a5cb49dd1ff65066416b9705a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "842ae2e2fe0f960a280bcd52334ced95"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "021301b1cf5d6bfa225f658880459101"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "93aee71ceaa6282e85075b7c55fb00d9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "26ba30bf51ea42d6c6a51f208389c3f4"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "cf16f4eee41696617530e1d6ca201dc0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "eb8177b9f9eba9d43ad10e47c1b77a64"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "85e687009142a517dca16cf67c44eb75"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "5ed64447081addae9a69e325ed47893c"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "3a48eb2c2588a11fd3788a7dfd96516b"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "11b70fee1721dd8c37f03e24d030795d"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "5eb735e732c6663162651faba000ac12"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "a043a674de6258e8cb57fc4801ff58ff"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "793f25d597204f28c1f6da0d877cf67c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e2a471f79dd198b79475ed718b27d6c5"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f11abb08db9cf60b2d88eb0edc58b6df"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "275a34684fb51dfae10ffb90b8627566"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "8936ecf6807b142704e68b28b8dd1464"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "cec66a014b4efc0d91718d05a0de8b0d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "8a63f180bd3519544162148d18ee7248"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "d15f5a63231c95634f65899823f185be"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "cec3dbb3b11442424020a9783e6b7445"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "01cc6d3df5a9489e2b04b695423639a9"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "839e6755137361da3e46e6d39893b995"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1f06e27291b892a225b4ce944a2a3c7a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d39403e7c6b5f16347dde12d012ae6d7"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f1adb699e72d8c2e943090a01d62046e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "7f83439131a681a016f7a59c0d0b56c9"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "e860aa470bee604267f9c5de34911280"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "5aec6433007ac12e47f9d61e85230caa"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3d112dd82d4cdce452df215579031b0a"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "a7751855f0591d4017d61346c639367c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1ee0895eb88cba1d8ccd22b009691195"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e978f20d256e9e5fa18e23b887fc9dd5"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "8cf56ff72702481f6c1dc6a28415abf2"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "ecee8275231f7ab2466d6e9a70793b5e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "59c3f2749b78f82ba7fc2b41ed8b9653"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c40ab66b74e5b95b18fa4cbef9a9c735"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8a3c009684c375df6cd36aca28968f8b"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "d84919e706c339044822fb1f9944332b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "560969f1b448dacfed0220e7d7e4195e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bdd0b2b34e031ca4694091dc537752e7"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "956f02d4513a3f2cab52e8d109b88e81"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "883c72914b342b92dcb24e8cb6295b7f"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "a9ce324dc5ef6cf4c7ba1ddf544f2ee3"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "12a28f691d7d0bd5138f108929c7daa2"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "09aeeef1cb5565b82a690c85bb01ba6a"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "125e32c5aa2c163c62154b91f350deee"
  },
  {
    "url": "timeline/index.html",
    "revision": "fb0b9ada78d70f62db8f83f81307ffe8"
  },
  {
    "url": "tools/docsify.html",
    "revision": "f9f3d51e77fd5350860237d5ffb89753"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "13283b0f26dad0ad42b6b8c76a43141c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "e96c6f2fd83931673a2eef1727da0ae5"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "a74a8da4c69e0e6a11979559297dd1d7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c9304b900587731bca95ffe612aaf345"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2721e12bbefee10993a3e38dc8d641cd"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "845a112124ad689eebdddba12168cc43"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "2fe2efcc648788f52383cbf702fecb55"
  },
  {
    "url": "tools/html/index.html",
    "revision": "788f14fa120b485676b7688d7b92be0e"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "6679f2645920bea5dfddbb9da0453591"
  },
  {
    "url": "tools/note/index.html",
    "revision": "8b8b5113b3514a391e00527f7597f88f"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "371f7cca1a02fb32d21fecaa4871654a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "258aac9f5637a3781f68e1e06c193e30"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3df5c5b588f11d863af9c7888be9ee08"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "132818918e423a7f2ea7b91d793381f8"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "460a1cf29eb22e46d372c8a689e50325"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9116611fccee98b96a6dd5e171bce69b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2eec636729d2f286a2424d0093c3a5f0"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "a4e0f57f54e6dbfcc5af3f28c123caa3"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8e1d90fa544380487612a30e143b8fe5"
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
