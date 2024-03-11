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
    "revision": "2becf3dbce0c611c7069127670e40ecf"
  },
  {
    "url": "about/app/index.html",
    "revision": "87b36d8667a6ffd37a30d8388783c22d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d8cf60a596938f43a24c55dfa4c3802a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "12d253270d1227a14df9a67511616521"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "95687f6280c5c9f90cd30e6e3a66a063"
  },
  {
    "url": "about/index/index.html",
    "revision": "3ac59118483874e89f5ca80ab9be7d7b"
  },
  {
    "url": "ai/index.html",
    "revision": "a5ee9202bf743abda7076bafe3506c91"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9d80bc8163c77653cea72d6501887088"
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
    "url": "assets/js/100.4c021220.js",
    "revision": "e2036a8d9db9f718d64ffcca05f83e2d"
  },
  {
    "url": "assets/js/101.cd42b276.js",
    "revision": "bb0df5c430b72b3ccdbacfd797c877d7"
  },
  {
    "url": "assets/js/102.5e3f578c.js",
    "revision": "84dd36a096b8661df3101832f6298393"
  },
  {
    "url": "assets/js/103.b0672a94.js",
    "revision": "cac5652371c0d64c18b612881d67e0c2"
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
    "url": "assets/js/109.73f97583.js",
    "revision": "85c8e7c41d85c8593c0fdbc18cbf772b"
  },
  {
    "url": "assets/js/110.2eaf37d8.js",
    "revision": "61bde7a4a9874b8ca425f59c42eeb534"
  },
  {
    "url": "assets/js/111.0e6a1baf.js",
    "revision": "54c5054654894c7f334b997eee2e5176"
  },
  {
    "url": "assets/js/112.7f409df0.js",
    "revision": "1eee9755f599e5549e9b09e84130b719"
  },
  {
    "url": "assets/js/113.a1e9d7c1.js",
    "revision": "e678668c53aa7f5861d1056078f3a6fe"
  },
  {
    "url": "assets/js/114.88633a32.js",
    "revision": "3894333261f31fdce7d950440232dc8b"
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
    "url": "assets/js/117.083c7834.js",
    "revision": "be95f259258fa09c8ca986666c9c343c"
  },
  {
    "url": "assets/js/118.34dbbda2.js",
    "revision": "4a01f091f9574fbfdea3bad04f43d8c3"
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
    "url": "assets/js/121.4ba36f42.js",
    "revision": "3426adb27ba9073f81c959c9998d2352"
  },
  {
    "url": "assets/js/122.6d84c2b7.js",
    "revision": "aa29b776ea32b70481af12ed91642f3d"
  },
  {
    "url": "assets/js/123.0cc3e880.js",
    "revision": "59e59bb0455a4dc8a1395821abdf3de3"
  },
  {
    "url": "assets/js/124.bd168865.js",
    "revision": "77b8c348b7847c7d3e8de794999c2390"
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
    "url": "assets/js/129.f962072e.js",
    "revision": "6c9f2d455dccf6d45e9dc91b39894f4b"
  },
  {
    "url": "assets/js/130.7c16c678.js",
    "revision": "aae32aef0a8008686023f22dea875be0"
  },
  {
    "url": "assets/js/131.9397be6a.js",
    "revision": "27fc572bb3cc75465196ea32a67902dc"
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
    "url": "assets/js/134.05f15a2a.js",
    "revision": "d6c9e3d24d86a30c3bcb18e5871c55e6"
  },
  {
    "url": "assets/js/135.d8cc840f.js",
    "revision": "d07297ed55694eea03268e22aeefac3c"
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
    "url": "assets/js/141.4b7a2da3.js",
    "revision": "c2c86dcfa392ede13156c50ebe68638d"
  },
  {
    "url": "assets/js/142.e2b84699.js",
    "revision": "94304b3c81f3f9db42d3cafcd9bc7492"
  },
  {
    "url": "assets/js/143.cbc47c9c.js",
    "revision": "3c0b9fc67200edc6ac188ff93e1d7cf6"
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
    "url": "assets/js/147.c9baae5a.js",
    "revision": "021aae85dec240f4f79c6f1a24274ddc"
  },
  {
    "url": "assets/js/148.329c6bf7.js",
    "revision": "60f318b9bc99b434d5d5d7f939b8339f"
  },
  {
    "url": "assets/js/149.6f53f96c.js",
    "revision": "d6d213bc5b11963de7c374f216896a1f"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.e1f75a1b.js",
    "revision": "cca0566a451fe0f1f8576ea1c7a9fca9"
  },
  {
    "url": "assets/js/151.272cb596.js",
    "revision": "f7d175e5539555dc18efe6910a19ccb5"
  },
  {
    "url": "assets/js/152.ca8996c5.js",
    "revision": "b382c74286b7592a312dc84a53c848bf"
  },
  {
    "url": "assets/js/153.4ef660b2.js",
    "revision": "4b6072f95ae35ec6f5e010bb3fba6008"
  },
  {
    "url": "assets/js/154.fb709959.js",
    "revision": "c35a6a15682599e135f3ab593045a0a5"
  },
  {
    "url": "assets/js/155.9403cb1d.js",
    "revision": "e0bd8692f7d613d5989223bf10473d90"
  },
  {
    "url": "assets/js/156.f89b440b.js",
    "revision": "7703dea69f0472106cd84a5d71058f32"
  },
  {
    "url": "assets/js/157.cb4b59d7.js",
    "revision": "648a4484b4015d1e8ba8bd892264c98f"
  },
  {
    "url": "assets/js/158.30ef5ca1.js",
    "revision": "07e120f8c2f5737ccd8b7e0f694278e2"
  },
  {
    "url": "assets/js/159.f6c83984.js",
    "revision": "ab74443a5e44b1f8f0bb337eb0c5c135"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.2bc8d4e7.js",
    "revision": "3399cffcfdf1838f45440f4c71b101dc"
  },
  {
    "url": "assets/js/161.8ee723f3.js",
    "revision": "5540ff40a74dcddb29fdef7076b0272b"
  },
  {
    "url": "assets/js/162.531a9f7f.js",
    "revision": "39b689a5afa3149583018ddb39d54081"
  },
  {
    "url": "assets/js/163.9ca6b541.js",
    "revision": "64edebe13ba8af9a981de030818d3567"
  },
  {
    "url": "assets/js/164.1a83f40e.js",
    "revision": "01362d4b6413197ffc34b6701b23b32f"
  },
  {
    "url": "assets/js/165.f8cb8c57.js",
    "revision": "ef7cab98b87aa559ac2493958d949ea0"
  },
  {
    "url": "assets/js/166.fe60a890.js",
    "revision": "47ab4fc7915e4f3025943b707c851da7"
  },
  {
    "url": "assets/js/167.e653ccf6.js",
    "revision": "6e6ecc88dbb288a4840c365d558811c2"
  },
  {
    "url": "assets/js/168.bd226032.js",
    "revision": "c8ad07132f24ee72ea098337c5a09aba"
  },
  {
    "url": "assets/js/169.ad92bd40.js",
    "revision": "311f69aae369a5c3ca41ee8677dccafd"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.38160101.js",
    "revision": "6f5bde6dda6e5fcc6fa6edd53c1b0c33"
  },
  {
    "url": "assets/js/171.334b393c.js",
    "revision": "292f9ecdf5e3d0151844972fb1ec1adc"
  },
  {
    "url": "assets/js/172.d7e955df.js",
    "revision": "05909005e4cbb47e26b1883a4fe256a9"
  },
  {
    "url": "assets/js/173.fc5d43d1.js",
    "revision": "5e08967b6f7108b74078c0cbc8d49b73"
  },
  {
    "url": "assets/js/174.2c747d11.js",
    "revision": "fc3bb8368953932395fa4354010c6d52"
  },
  {
    "url": "assets/js/175.ed53281b.js",
    "revision": "8c8bcba78e846fd90787a12f931bac4c"
  },
  {
    "url": "assets/js/176.ece4d053.js",
    "revision": "adf406547b2b97ee4468730cd93a9d94"
  },
  {
    "url": "assets/js/177.e50a5130.js",
    "revision": "4b25664438aa54d1c55d0b50dd1a9657"
  },
  {
    "url": "assets/js/178.161452ea.js",
    "revision": "45ef72b807824dcfc595184bfe0027df"
  },
  {
    "url": "assets/js/179.8ea4b80d.js",
    "revision": "9189a63ed3f8a074e9252593812bc254"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.52c2f3a9.js",
    "revision": "4a8b495d083817c03c7a889c36c1f36c"
  },
  {
    "url": "assets/js/181.8e1e0112.js",
    "revision": "2c6a2d52f6171e929e902a9d79497dab"
  },
  {
    "url": "assets/js/182.7a45a800.js",
    "revision": "538b66777e74e317d185de658e7eacb9"
  },
  {
    "url": "assets/js/183.9711347a.js",
    "revision": "0e8a0efffcbebd86ff104f86e4e31e83"
  },
  {
    "url": "assets/js/184.80513cbd.js",
    "revision": "d54464e5f6beb52901df1361c804a8c1"
  },
  {
    "url": "assets/js/185.fc3d5bba.js",
    "revision": "3edf3fd35ffe14763aa20187a4aeec6b"
  },
  {
    "url": "assets/js/186.ffa3a51f.js",
    "revision": "cc5a1793c07db45b47566ad659db941a"
  },
  {
    "url": "assets/js/187.1b87ccf3.js",
    "revision": "504e5244a62974eac37c6b1870091183"
  },
  {
    "url": "assets/js/188.e40bc3dd.js",
    "revision": "53efafe125c1bfd3020a257f35d115f8"
  },
  {
    "url": "assets/js/189.5c968b0d.js",
    "revision": "ee691edd65f8a45d2b3bada4f71f8eaf"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.29dcc93e.js",
    "revision": "23007b14f4392fb71ddfbf553e144bfe"
  },
  {
    "url": "assets/js/191.49b2f5c6.js",
    "revision": "eaf4b9c11b1291b11456049f6d79c0f6"
  },
  {
    "url": "assets/js/192.dade7808.js",
    "revision": "5006dc4aed04f3f57ec1c403f2c9fe64"
  },
  {
    "url": "assets/js/193.306a8689.js",
    "revision": "af330f6df98db12533450eec89caf39e"
  },
  {
    "url": "assets/js/194.2c624363.js",
    "revision": "7d01f2295fffde3895a346ef6702685e"
  },
  {
    "url": "assets/js/195.f3e85981.js",
    "revision": "abc326eacc546d6f3f9a0efea46f46df"
  },
  {
    "url": "assets/js/196.0e03f424.js",
    "revision": "8d25f965d55a5521051ba46997e8cdeb"
  },
  {
    "url": "assets/js/197.02eb4d30.js",
    "revision": "960821c1477be79c9719767429fd1a16"
  },
  {
    "url": "assets/js/198.2e81d97b.js",
    "revision": "c07c1e8a6591a3107cfc3dd57ef1c993"
  },
  {
    "url": "assets/js/199.3fe2e133.js",
    "revision": "7cce7a0d3e16de95f75bf952fdc7d163"
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
    "url": "assets/js/200.c9114bad.js",
    "revision": "2ce217299e2ffbe9c3aefdcd701bec16"
  },
  {
    "url": "assets/js/201.72d6f56a.js",
    "revision": "04d11b34013b7a11def19d97f917ac05"
  },
  {
    "url": "assets/js/202.fb74d711.js",
    "revision": "a0a7681f87bfaefcfd80aa0fc54601f9"
  },
  {
    "url": "assets/js/203.db03975f.js",
    "revision": "17d101956d83bcffa89ec60fa4f69d0e"
  },
  {
    "url": "assets/js/204.5ab00dc8.js",
    "revision": "ee07964a8dc9ea171c7c16f6185eb5bf"
  },
  {
    "url": "assets/js/205.a62e2664.js",
    "revision": "e8a810f51aae5671a91e679e7ec03771"
  },
  {
    "url": "assets/js/206.045dda51.js",
    "revision": "b8794f31f04380b038e2c81fa1f5fe55"
  },
  {
    "url": "assets/js/207.204eb1fc.js",
    "revision": "6f0f309deec3e769653fe40aeb3f3b4c"
  },
  {
    "url": "assets/js/208.8549349d.js",
    "revision": "fccdb3ea34f11ccfb7236fd580fe4b21"
  },
  {
    "url": "assets/js/209.c02469c8.js",
    "revision": "c7b5be5a311a5037d5b2e2c5b9f576ce"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.a52be748.js",
    "revision": "e48690c6174fee12682d83316d2b2330"
  },
  {
    "url": "assets/js/211.38d67e98.js",
    "revision": "f678341d6f20155b242c6115dbb7d721"
  },
  {
    "url": "assets/js/212.6fa0b503.js",
    "revision": "2a16d0fc441a71b4760b5f1d7b96d8c8"
  },
  {
    "url": "assets/js/213.a7a6d05e.js",
    "revision": "afc5e0321e3ac748441a47feed157f5b"
  },
  {
    "url": "assets/js/214.38323e24.js",
    "revision": "ce22a33c22a56a4f17a3502ffd781bc7"
  },
  {
    "url": "assets/js/215.258421c2.js",
    "revision": "977396bcfb3db5845bf736e819e4665e"
  },
  {
    "url": "assets/js/216.06981f78.js",
    "revision": "52c65aec803e88edc9a0b99a1da678d7"
  },
  {
    "url": "assets/js/217.e6cabada.js",
    "revision": "21428c4dc3f12a4c76baf5577f9e9397"
  },
  {
    "url": "assets/js/218.088a12f7.js",
    "revision": "868dbe528391c8495921514a18050127"
  },
  {
    "url": "assets/js/219.dd008bf9.js",
    "revision": "f846df1d44fbb43c8e081da7f0c090ce"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.74d6cd96.js",
    "revision": "8de15e57a76041c808710888716c6ca1"
  },
  {
    "url": "assets/js/221.f035d101.js",
    "revision": "27156f92dbd344afe042d77d09998994"
  },
  {
    "url": "assets/js/222.bfb68363.js",
    "revision": "a2ab74dfbb45c7084e462cb8c1fcb03e"
  },
  {
    "url": "assets/js/223.ce184821.js",
    "revision": "77ec2bebd1ecf2a51da71ece539222a6"
  },
  {
    "url": "assets/js/224.7c5af73d.js",
    "revision": "39c84e3367493281791a20872824ad4f"
  },
  {
    "url": "assets/js/225.4e6d405d.js",
    "revision": "a044f400cdbf8f37bc33ab121e831408"
  },
  {
    "url": "assets/js/226.6b98de9f.js",
    "revision": "ae2d5c03cdfb243d09f8dbce3b8e0cec"
  },
  {
    "url": "assets/js/227.1cc62b1b.js",
    "revision": "2b18f9ee3fe25650cadd1aab9af49930"
  },
  {
    "url": "assets/js/228.eefbc93b.js",
    "revision": "12c892dbf64468088382641eadcbfc8d"
  },
  {
    "url": "assets/js/229.c207f842.js",
    "revision": "4a5ba52015fa8d7d67a906fad985c8ba"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.60157391.js",
    "revision": "3f6a27461fb296a13c16cb9c6870aea7"
  },
  {
    "url": "assets/js/231.a1c59e6f.js",
    "revision": "6254b53142ef888845b356ce307f1fdf"
  },
  {
    "url": "assets/js/232.cbba7e32.js",
    "revision": "86d0977ba036fec518094cb83e3d1ef7"
  },
  {
    "url": "assets/js/233.4e56e4ee.js",
    "revision": "b804f2536f3837bc7bc4f0de9cfba236"
  },
  {
    "url": "assets/js/234.9f69de30.js",
    "revision": "07ca745f15954a66f621596444297a25"
  },
  {
    "url": "assets/js/235.e0c03b8f.js",
    "revision": "065eac91d8860a7e0c9e64edf35be251"
  },
  {
    "url": "assets/js/236.51cd7b3d.js",
    "revision": "b35546f5e449a8a8d90feb3f80d1baa1"
  },
  {
    "url": "assets/js/237.68c26e53.js",
    "revision": "fc1661d682d4452ca4304ec11086d41c"
  },
  {
    "url": "assets/js/238.6a4e6d5d.js",
    "revision": "17c47080b227a9196b9909875a45ffcf"
  },
  {
    "url": "assets/js/239.646a455e.js",
    "revision": "d6df5d9dcfd1ca00af7ce567520571df"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.ed78fbe6.js",
    "revision": "28c03ff708736b0b5790880c8c61648b"
  },
  {
    "url": "assets/js/241.73a76b5f.js",
    "revision": "4b5eef3d25f75fdc4e5bfedb96d7c3af"
  },
  {
    "url": "assets/js/242.0ece305b.js",
    "revision": "beccc5f56273a67e165d5a05b1fa3fab"
  },
  {
    "url": "assets/js/243.52306b7c.js",
    "revision": "8899e565083519f19d716ff00ee628b3"
  },
  {
    "url": "assets/js/244.365fd0e7.js",
    "revision": "2cd277cb016667e77e01e1f16241c61a"
  },
  {
    "url": "assets/js/245.f5f99c55.js",
    "revision": "9af92f5249ce276a157d513f88179490"
  },
  {
    "url": "assets/js/246.66faad38.js",
    "revision": "aa0cf1f1c9342336325b52d1b776cc9f"
  },
  {
    "url": "assets/js/247.76770f1f.js",
    "revision": "ad72b63cda0260518b99efd9d8732439"
  },
  {
    "url": "assets/js/248.8a28c4a8.js",
    "revision": "9c84c45bddb568fa9b754f5753e0cfed"
  },
  {
    "url": "assets/js/249.6f5d10f5.js",
    "revision": "f37feffa6019db2451303927790dc56d"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.8df1a4b8.js",
    "revision": "4debc33ceed7234e6d0ea8485d110f2f"
  },
  {
    "url": "assets/js/251.2948dcda.js",
    "revision": "dd6816b97102108da93663c5241fc43b"
  },
  {
    "url": "assets/js/252.f1bbcfd4.js",
    "revision": "1cf6e44cdd66f4e644c16b8a484a84f4"
  },
  {
    "url": "assets/js/253.87f59b7d.js",
    "revision": "2e3864205862d7fd973aca68f02503d3"
  },
  {
    "url": "assets/js/254.33a019b1.js",
    "revision": "513a9361f0982352029919b5c804ccf4"
  },
  {
    "url": "assets/js/255.cc21f3ca.js",
    "revision": "2dc960a425090a6988a836a5d314c4f5"
  },
  {
    "url": "assets/js/256.8255eb65.js",
    "revision": "e1f569f3b08bf4bf6c578d1d1e26ed50"
  },
  {
    "url": "assets/js/257.e1629cd0.js",
    "revision": "dcaca34b8be4796dcb8ed96094fb1b2e"
  },
  {
    "url": "assets/js/258.25d4f1c4.js",
    "revision": "8f49f23c257338a08323c5791460017d"
  },
  {
    "url": "assets/js/259.9f6f1d3c.js",
    "revision": "e6fbeb777f1caf219be18ffcf85aec84"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.9064e4ba.js",
    "revision": "e32c7462a26961ecc98cacc59a8a7ed7"
  },
  {
    "url": "assets/js/261.9b2d5d21.js",
    "revision": "c8a1df3ee293beef43c119dd1ec706d1"
  },
  {
    "url": "assets/js/262.422a8ae2.js",
    "revision": "fce36ed39ed03326c452b0e50b1d854a"
  },
  {
    "url": "assets/js/263.4cfe18a9.js",
    "revision": "b76eb174a495b059fd1bc77c5b18ad43"
  },
  {
    "url": "assets/js/264.9e78f3b5.js",
    "revision": "4a1c8fa244835c464aaaf45b2780da3d"
  },
  {
    "url": "assets/js/265.35177b87.js",
    "revision": "6ad5106fc5626e223644ed8ecef9f7a7"
  },
  {
    "url": "assets/js/266.27297f7c.js",
    "revision": "b498ace34bc5ef693e5244c5f6680b97"
  },
  {
    "url": "assets/js/267.ee52d1c6.js",
    "revision": "35c6cb18177f41bc33a977bb0b48ecd9"
  },
  {
    "url": "assets/js/268.417b9fec.js",
    "revision": "ce232712e14f020e5ddac42c0a57a9f7"
  },
  {
    "url": "assets/js/269.b579874b.js",
    "revision": "57bce17f3358bced01631243874d02d8"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.4679264d.js",
    "revision": "c9753c60ea0bd207eda4ff0c0f60c1e7"
  },
  {
    "url": "assets/js/271.74017d72.js",
    "revision": "7528d70a59eb32ba887a3ec2d014884c"
  },
  {
    "url": "assets/js/272.77c29325.js",
    "revision": "a4fc363570b20ff353c314724645ff17"
  },
  {
    "url": "assets/js/273.599ba4a8.js",
    "revision": "be4b0af9b13a54986a66cde80b807d88"
  },
  {
    "url": "assets/js/274.738c880b.js",
    "revision": "f5d56733c115a8dff84338f518306717"
  },
  {
    "url": "assets/js/275.9669e6ea.js",
    "revision": "4218e26db8c0c69595d9eada4fee6295"
  },
  {
    "url": "assets/js/276.f7a24e48.js",
    "revision": "2de1c75bde6a7b14bce6f87be9e702c3"
  },
  {
    "url": "assets/js/277.0a1fafe9.js",
    "revision": "cfb055f071c9ce3b9cab005112770774"
  },
  {
    "url": "assets/js/278.28144a12.js",
    "revision": "ae14702a8e4e262d4d738618feb159a0"
  },
  {
    "url": "assets/js/279.148755b6.js",
    "revision": "fd25e5c383a539d196a8d16253487be3"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.846855ec.js",
    "revision": "d0e9d0f86572c466fa9e16e9d4d6c199"
  },
  {
    "url": "assets/js/281.d5a68e69.js",
    "revision": "dbd5e4642f0798ade185952ff57b5352"
  },
  {
    "url": "assets/js/282.38ca0819.js",
    "revision": "f378f127e7e4af4ad18ca86e88ba7a74"
  },
  {
    "url": "assets/js/283.bf71d19a.js",
    "revision": "cb6f3a941bd9a52e1741ba51e1cbbf50"
  },
  {
    "url": "assets/js/284.fa85ce93.js",
    "revision": "9d132582c2094c504334d76d74131fcf"
  },
  {
    "url": "assets/js/285.13ed4aea.js",
    "revision": "0caf98b4b4fe64c6fcbc1b5bb449136a"
  },
  {
    "url": "assets/js/286.96afd8a6.js",
    "revision": "863b52ad0dffbef3604f916bb6b983df"
  },
  {
    "url": "assets/js/287.a9c12a76.js",
    "revision": "1f56d7163a93cb9917f5b438a554ab8c"
  },
  {
    "url": "assets/js/288.0b4df369.js",
    "revision": "c4b1bf4496c2106648cdc3516064ee22"
  },
  {
    "url": "assets/js/289.1a70e045.js",
    "revision": "88e5c24b5419f9af4b917eebf1eba33c"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.b0929563.js",
    "revision": "60e0c29e42f02b6408e7caedce0fec77"
  },
  {
    "url": "assets/js/291.120f3c8e.js",
    "revision": "9f96cbcbf13615f1ef535b32f5ea4c08"
  },
  {
    "url": "assets/js/292.d842ed6a.js",
    "revision": "6cf49bd21e54047c016ab6a633424845"
  },
  {
    "url": "assets/js/293.917c987a.js",
    "revision": "239b7e4741dca27f7ffceca046546512"
  },
  {
    "url": "assets/js/294.5335abf3.js",
    "revision": "209bf84f5c64dbf8778fa9f5850a5ba0"
  },
  {
    "url": "assets/js/295.b45b58e9.js",
    "revision": "04a7d3a42bbe68c772b50261a9fb076c"
  },
  {
    "url": "assets/js/296.2acecb9d.js",
    "revision": "fa9661813e3a4c4a998af10dff4d407e"
  },
  {
    "url": "assets/js/297.76927cc9.js",
    "revision": "ef9b596db2b0700c1235a8de6ea1e3e1"
  },
  {
    "url": "assets/js/298.3c4ce711.js",
    "revision": "fddc73c75d8637ac07e283d1c0ad982c"
  },
  {
    "url": "assets/js/299.4ce99e22.js",
    "revision": "d73c9abdc85d89739c2ba4d0011018bb"
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
    "url": "assets/js/300.1bd91529.js",
    "revision": "d651e81a61399606fbfd03914e91a552"
  },
  {
    "url": "assets/js/301.a04522ae.js",
    "revision": "1b8a57dad1d6367a8c538aa5648c50e3"
  },
  {
    "url": "assets/js/302.eaf13b1a.js",
    "revision": "791f54b2bd152b41b338b9c326e43f5d"
  },
  {
    "url": "assets/js/303.6e2993f3.js",
    "revision": "9c69c9c3c1c310b851bcbe36430cf628"
  },
  {
    "url": "assets/js/304.bead9c7d.js",
    "revision": "1342ec8eccabdecd998ca791f33f6b41"
  },
  {
    "url": "assets/js/305.b4b935ba.js",
    "revision": "3a430097ecbb09431958b51e541072ba"
  },
  {
    "url": "assets/js/306.be446cc8.js",
    "revision": "fc40146279798b7c53812fa7297842df"
  },
  {
    "url": "assets/js/307.08b55543.js",
    "revision": "72556dfc6e032c6e7978423ac0202986"
  },
  {
    "url": "assets/js/308.6ac3b895.js",
    "revision": "75512d08a7f09f47a83bbbd1766f8c08"
  },
  {
    "url": "assets/js/309.eb1afaeb.js",
    "revision": "8e712fd99d02658f1b75913c3d30ac70"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.c46ca4fc.js",
    "revision": "4c570f74ad4c01034415ca8f97658018"
  },
  {
    "url": "assets/js/311.9ab7a5e7.js",
    "revision": "55842c985b7dddbe38f363a300790617"
  },
  {
    "url": "assets/js/312.ddcea1df.js",
    "revision": "20a3c13586535866fa10d672253120b8"
  },
  {
    "url": "assets/js/313.474dfd4d.js",
    "revision": "289f07c8fcdc77fb8683d4a7e92a6257"
  },
  {
    "url": "assets/js/314.02d11b8d.js",
    "revision": "1736d7fcdd6c42b6db8de5a33d1b80cc"
  },
  {
    "url": "assets/js/315.cb46e267.js",
    "revision": "b8bc51e6713b40125de1f3edc99be44f"
  },
  {
    "url": "assets/js/316.a43fc1b8.js",
    "revision": "8426b3705c3e3e5a7d3ad2cfac8e3e23"
  },
  {
    "url": "assets/js/317.f048c04b.js",
    "revision": "f4735cf313f0858db1a5e4e9dd927fb8"
  },
  {
    "url": "assets/js/318.7fb086af.js",
    "revision": "c4adecd3cc089887138839410ead0ad3"
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
    "url": "assets/js/39.c6a60dfe.js",
    "revision": "de6f81fb6691f86b4283058f1d9c3528"
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
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
  },
  {
    "url": "assets/js/42.046db2a6.js",
    "revision": "dc0dc3a922a290a723e9cd5463ff9897"
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
    "url": "assets/js/47.2ede5b0e.js",
    "revision": "4e1e15f6ab754dbbdcc253ae10a8d847"
  },
  {
    "url": "assets/js/48.ea767660.js",
    "revision": "8146f9d6b8bd201dc923a7fc62f58d13"
  },
  {
    "url": "assets/js/49.0378118e.js",
    "revision": "e2aa5d0e5ff66d05bcf78d314c4bf4a5"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.f8fe3704.js",
    "revision": "52f94d1a77d2ec601816bb02c6dd9c60"
  },
  {
    "url": "assets/js/51.a50aae75.js",
    "revision": "be761671ce288a88dbc0928737196ff3"
  },
  {
    "url": "assets/js/52.b2b38e37.js",
    "revision": "86a0e132c312606015f270562f4b157f"
  },
  {
    "url": "assets/js/53.318a822f.js",
    "revision": "423a53c5cf19f927c853a388161fe606"
  },
  {
    "url": "assets/js/54.beeadceb.js",
    "revision": "ba5ca699fe4af5fa7dbc69a269f5034b"
  },
  {
    "url": "assets/js/55.e84c850a.js",
    "revision": "2b9e616627d5c9433db5a83bf6fc3c0c"
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
    "url": "assets/js/58.91f066d0.js",
    "revision": "120eef2a9e7dcb7e8d49e8139f7eb45e"
  },
  {
    "url": "assets/js/59.3c810c3b.js",
    "revision": "02b6abe5d1a49bd7711825ab312245dc"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.0f8a257e.js",
    "revision": "1c6c09f6bcb61dae2fd5cae3c805cc5c"
  },
  {
    "url": "assets/js/61.1823a789.js",
    "revision": "c129dfaf42b3d7c3aaf4100c84a35d27"
  },
  {
    "url": "assets/js/62.0e34c0be.js",
    "revision": "6d09e3e9156de373656054258d7b4b8f"
  },
  {
    "url": "assets/js/63.faea59bf.js",
    "revision": "0f5f077a5e79968bc4493c3b2b5ee99e"
  },
  {
    "url": "assets/js/64.ca313b96.js",
    "revision": "da7029b98fed5bfa8cf2742f6c1fe401"
  },
  {
    "url": "assets/js/65.8ab5bfe4.js",
    "revision": "26a9bcc0405b5d48a341c9cc2f295275"
  },
  {
    "url": "assets/js/66.37fcbb42.js",
    "revision": "4fbeae29e0a1d9d1c30be315c2ad34dd"
  },
  {
    "url": "assets/js/67.063d0beb.js",
    "revision": "c88e95b01cca6c94e0c1ab24e07c9680"
  },
  {
    "url": "assets/js/68.8d7373b2.js",
    "revision": "bfa790a1971c731b70bc32bdec4ca352"
  },
  {
    "url": "assets/js/69.d3c1be9c.js",
    "revision": "e71c4e8e2eea222d9e378a1c7b066c16"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.f1db9000.js",
    "revision": "18cbc5b4d2ca6838949ba1e357bb022c"
  },
  {
    "url": "assets/js/71.e9c4f758.js",
    "revision": "dd3eaf52ce84a752ff1bfdcce2942817"
  },
  {
    "url": "assets/js/72.a72b8947.js",
    "revision": "b17af7a4703361097cfd1784597f6745"
  },
  {
    "url": "assets/js/73.d6177d1e.js",
    "revision": "36df1de6f5280d40750db10397ee4be7"
  },
  {
    "url": "assets/js/74.e6612549.js",
    "revision": "4af4c2fc9e92e80acc78ae59c72bcf5d"
  },
  {
    "url": "assets/js/75.5f5e9e6d.js",
    "revision": "311c38efe716905310fff47fe2772520"
  },
  {
    "url": "assets/js/76.0abdf9c6.js",
    "revision": "fbad0468930a2c678b7e05600ce6499f"
  },
  {
    "url": "assets/js/77.53e016ee.js",
    "revision": "c211671585361db7ba2b7e44f35f517e"
  },
  {
    "url": "assets/js/78.92540989.js",
    "revision": "f493b777db6c8196b1e454e252c0eb00"
  },
  {
    "url": "assets/js/79.f43a5f97.js",
    "revision": "aa3b1158e6e36dc3d4e2ea72ff212f4e"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.bd5a42d0.js",
    "revision": "2a2eafc1aed01ecdb8de7c915e20e325"
  },
  {
    "url": "assets/js/81.2be641ea.js",
    "revision": "958c7dc59ac1e46fdc270028feea2a1f"
  },
  {
    "url": "assets/js/82.b79776b4.js",
    "revision": "3100ffff80ee96209f73aaf3fd19db0f"
  },
  {
    "url": "assets/js/83.c9b693eb.js",
    "revision": "d916657677056c7e29fb864eb6f73be2"
  },
  {
    "url": "assets/js/84.b2c0d808.js",
    "revision": "01ee615e9877f71cd64b3e6055b89a79"
  },
  {
    "url": "assets/js/85.724e84ef.js",
    "revision": "5e0d16ba802f318b17a50c3a8cd842eb"
  },
  {
    "url": "assets/js/86.1e694d21.js",
    "revision": "6ac37c70e2584fcce5d1dfda8bb400de"
  },
  {
    "url": "assets/js/87.ef6eda15.js",
    "revision": "56930813970901e9be2990215e7fe92b"
  },
  {
    "url": "assets/js/88.37a5f600.js",
    "revision": "de955a274a1681f963fe4e1e4206a744"
  },
  {
    "url": "assets/js/89.2dcd771e.js",
    "revision": "f627b54c4c2c5e626711061a0066b982"
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
    "url": "assets/js/92.dc3483d5.js",
    "revision": "895637affe65daa84f25b2c6f4e31bdf"
  },
  {
    "url": "assets/js/93.229f50b8.js",
    "revision": "2576d5fbd76468b97396b59c0acb6377"
  },
  {
    "url": "assets/js/94.00d36a80.js",
    "revision": "87fc5237fde2a2a621a84d5d3b6df2a5"
  },
  {
    "url": "assets/js/95.38937b70.js",
    "revision": "5bb70d88fbd1c681988136f8262bb583"
  },
  {
    "url": "assets/js/96.49814989.js",
    "revision": "627b58ddef203ca05bd40921dede4835"
  },
  {
    "url": "assets/js/97.4e4945bd.js",
    "revision": "031b3e0ecac4fd502d1609e206bffd19"
  },
  {
    "url": "assets/js/98.d0d2dad4.js",
    "revision": "bacd8a4d0aaf8b5b9f20110e714861e5"
  },
  {
    "url": "assets/js/99.57b63a0f.js",
    "revision": "42063b8353564fbd742d64be06b5f32a"
  },
  {
    "url": "assets/js/app.8680c716.js",
    "revision": "05aceb5a1d356628037f082502b4a8ff"
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
    "url": "basis/algorithms/index.html",
    "revision": "d421a7069b875142546c3670bf42b4ba"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8f672e40b00c77d9f202437fcd055bfc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f25d270605e6a42df01e07670fb83099"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3bdbf08b9895ced5540fa0b57af37945"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "94860951f367aac6cd9937197d9d1110"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "434a54a431cecebccd3299788f384581"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a89bd155827fe6e631fe8e1e054fec73"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "37960cb5743eb9b65191b617d6922037"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e50af10c597ff29aca1bb32f5680fa73"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4cbceb5b1966c96e9bc860e222c0044d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "533e1770d4fb19e521b1de94870b5d2e"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "2ffe263646fa216c5997155a7293e311"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "a499d4bbe8d029217abfd468e711e2d5"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "05d17de1d97fd79aa34e012f89d881e8"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f9ef177567716280b69968fbaf95f47f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "99e358597913d583146db5701cfa081e"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "3db220739ea71a240e024b731ba78b40"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "f973ebdb402ed978255aa55c5a4ddb4b"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "91a0aa5af3596819699896af4140b111"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "39ab7f1b28ecfc93a2da9ad8c4147eb8"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "fb2dfa90b3ffcbea23d28149e59e735e"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "5a7d1b8266a5785e880f6e8a831762ad"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "15ec4ae92b7bfbf0b64af2ee61ecac26"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "5030106da7f99a124bf0b19d932fbc51"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "7d0d188c5bfb0adbad43e31dd68d2ca6"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "2f5d24bd0967665e77bca8f22f7bf86b"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "893c7fd1d5dd6abc7e6235da2b251b88"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "0e6eb4d9b09e1cc3aa442809e8451b3a"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "404d618f26fb2cfb0604b8e77d18cdf0"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "cd572652ba9496c6d7625b6aebeb6289"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "c5ff3d949ed7d67a497a5fc1125a802b"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "c538a1669509364827f7e6989fa09abd"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "3e5d082929643b5c824bb6f63b6a2052"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "591eb97536f99f1c9bb65a9020916adb"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "897f17b8734137d33e0b2670a2d65d6e"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f930c37171f57a92c5edeefb59367aec"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "53d5135e8ad2b9cd785eab1f349df418"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e0a8a51824969f655685fd473a7eb10c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "272759295da73b48b9a3faacabf7820e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a4d803857a34a9d9716e701f77722cb9"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "f8e8c5ccc2f62e194c39d1a46df1642d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c954169b5eeb201de1ee5caf3784c423"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "2ba3872be4dc009e3da996e0aac9da37"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "a81fef0de08976c33cd44eb13af46eb1"
  },
  {
    "url": "c/audio/index.html",
    "revision": "4bdc43850c0908e7e856990c33932207"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "e3f5322425cb1b7ffd9b0e12b4ede284"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "5c109d58b9da1e0c6b92c37b1cbd75cf"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "49fa95b453f4b1cb0f5f4c14507989ba"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "4c49bb9753143813abe2c600b36a5bc7"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "016c40fb990e5dcb9554d22388e9e2d0"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "741f69a80cf35688a1029013cba62134"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c7fb37314f84426f9793a27c7fa773e3"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "474055d44161c5e10f955265cb55a256"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "95b1d970b805198b0fa093a139b40f99"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "8e04dba539c2bdcd835671467126cb0e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "db47de6bd01a0a69aaf7116f7c4879b5"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "312b6e0a1ceea48e353f52e46f7d95ea"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "e082f69db14d1d6c462cdf9a9d6475e4"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "185d458c92a558eefcb9ba8eb36f0b83"
  },
  {
    "url": "c/program/index.html",
    "revision": "c34f23175728a61612ad414e833327c6"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d713f633452e323207b4e3f57085cf89"
  },
  {
    "url": "categories/index.html",
    "revision": "8cff4865c80abc942db64c6e120bed1c"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "7856819ca0900315029165d34b7682bd"
  },
  {
    "url": "figma/index.html",
    "revision": "fd024cf9e28faa7c1e62893db3042a38"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "d44d453c39e9e668a81679b3996fea02"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "377c11011fc314805a82fe155c59e4e1"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "8d1845f278e3d8407c080ced4bb42afb"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "e6168db09b38286827295f06aa5a5d30"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "d56d415ff78884fff7bfc07989a4aa27"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "471d8451f41bb92d8f4c7d312664fcdd"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "f9fc798f597925eae44c47def22ff864"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "71b4dab1240de896c12a9291e2defee6"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "48f8b2a5dfb09e775bbba9aa3273ed62"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "e3ecc6ad7a0d5b37995a59798549c99e"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "7fb4f07f55f1b7bfaddf71f230487b31"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "1f0ba0658e9a3b6df5854279e8f4675e"
  },
  {
    "url": "flutter/index.html",
    "revision": "c41db9e89d660ecf697bf88618b54e30"
  },
  {
    "url": "flutter/point.html",
    "revision": "b54f843bf422945de25b9737435c482c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5a38854bf070536f53e77da191918166"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a2d099522688e809a15d0812f6c1e6f9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "21b806b504474f515b33469858a270f4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e46f35869acf2d65fc486cebce836a99"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8f500c3df61a4e3335f254d480014acd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5f77bc23f389d43afde2495de9d79c19"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8b14b995aff8860b7012b848a0ee72a2"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0e5c872a0d837cc1290c0bfc6636e4c6"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "b2bcd6cc14f7d15015063d361bb83e15"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3068cbceb33b724396cbc0d3ac17236e"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d3ac7b5652598e7a296fee19edd2700e"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c2e9b8e82560a1988b15b0e45081c250"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "467ce0d6206f1c39a3832e48c683c728"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "6077624933d77e02600a94f3b01f3fc6"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "294d866f896b611e6818056b21777f65"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "12e4ab8c56d8c94060d34e697605fbaa"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "71e031671e656a6f568b48193dd57fe9"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "813fb2a188a3f0269dec874a6da4e3df"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "1fea8fa6be6e4e11f79e5a89b01ea9d3"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "81f08208d4c04caca267ef46c337eca5"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "9699dca0c78765442aec7d8a1accb423"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "198f8328259ed357f386cb9d3ce5c4f5"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "c9a9e91396eb34f8014b147dc8084ed2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "cb5ed4d00014d837f992123bff15f5a7"
  },
  {
    "url": "haskell/index.html",
    "revision": "a82675e498a9fd9c1e1ed6e8b7f50d0a"
  },
  {
    "url": "index.html",
    "revision": "7ba2bd16f09b1be39e15f35452a2213a"
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
    "revision": "6b47702025aa1cc20940f8b45aef6502"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "0810e26cab57ce9d27a0b236612fe2a5"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "26ca655169b0f497c5b28474bdb46bc0"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "bdcae9e4e3a2282b0f9322acb89d1473"
  },
  {
    "url": "python/index.html",
    "revision": "0fa3e79d6ef222fdf028e6f45ffb3f9d"
  },
  {
    "url": "python/python-ase.html",
    "revision": "a458da88e8c4221ed7eec41f8fbdac86"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "1159c2d4a60a29b8a74337bb46c09f8c"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "d82a68344b2feecde5c2bae336de939f"
  },
  {
    "url": "python/python-file.html",
    "revision": "8c6afef662eb275f8e33409dc862aa45"
  },
  {
    "url": "python/python-function.html",
    "revision": "1c44c5cc63ab7ea368f06e045c42cf38"
  },
  {
    "url": "python/python-generator.html",
    "revision": "932be0726c33859ebdef188b62fbe293"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "e5dda5f35f30cab9fd2813990ec48352"
  },
  {
    "url": "python/python-module.html",
    "revision": "d28a229978eadce092d2920b93aeff0f"
  },
  {
    "url": "python/python-string.html",
    "revision": "1effaa44fd4903aca0e949976bd52830"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "0b9086e8c69c217691a2985cf7398def"
  },
  {
    "url": "read/index.html",
    "revision": "64084b286764198f1f692ed40d750d48"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "79df94ebac9b307e30188a48b50af221"
  },
  {
    "url": "swift/better/available.html",
    "revision": "646a4c8cd32b6136a1d181aa60bcbb2e"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "c12386694b8d263449506b5d8c6cdb23"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "bc6d2200df5fe834bdea84001125a0a2"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "0bec327693079028d18f5296a1fa1be4"
  },
  {
    "url": "swift/better/di.html",
    "revision": "5b205a9fb2f4db8625ba79d1dc58e3ab"
  },
  {
    "url": "swift/better/index.html",
    "revision": "04844d96735511ee40dddaf5540e4c5f"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e1f5d9a98352f0203b3470959882ecec"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f8c234251e1a55ee50efa6413527e628"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "126c2004688ead825f25ddb4b2b7b346"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "d8c5ef3914918159656265a60bf36a90"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "6fe99f69a3ae62ff793a62b1b9d07b04"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "733f47e85491816db220fa6a7d2cac31"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "be1755db85061b73d45216a2810e2763"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "dc6e0c52410dff65772c5bcbe0ff4980"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "43022767c808dd57146f6dd41c13dd5a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "7ddf9b7f5fbc09c55d7a75c1654b8ff7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "5e4a7a62a27e78c7e00da7ba73afcbf7"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "48f7a5f4e1566478cbae8dfb6f2b7f64"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "83b94819536542e78a213109918371cd"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "c2108ed70bfe36bf7989a838c00e4c2c"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "47b8a9c1bbd5679dfb527126d3746d0b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "0c27d6c1391f21645b6e316344f74225"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "37645d0ca74ae0dc819b5aada9e33951"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "01f26c086885eab4762ef6840f858436"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "4df8d7cd8a38dab6b6af9d0a18c66e01"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "5149d3bc97e7c06e7e84a0c18efcd38e"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "f057e88a9da69fd7ca2d000c2784ada3"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b2e6baeac823815d56850753cdbf5b9d"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "043a5666ede0ebf6fcf985d024dfa724"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "146193f797c1a6eb1ff6a95487c62a5d"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "bca5601e3241ec1377469216ed3f7dcb"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "62aaef870a460a4761c3715074abacfa"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "8bed79ec419723b7949e276a0a5cdfe5"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "8b0386faae6a0916c8f3e2346d99366f"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "35c1898dce54fe69ccc1b3548b3a32a1"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "23127eb4faafdf017cf9a891b63445e3"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "72746860ec780beb3c56217ae748a962"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e97c0f86b1adcbbd257b5a44e0c2541a"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "d46f46304ad7a7409af8f62a529f128a"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "f64f2e316422e9edb5b436ae124361c2"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a523964dc1d9ba7bd75fdae2b4b99fd2"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "5ecf9156ac4a028f812191d9199468eb"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "eac6dec4abacd1aea3d17de2949e83fd"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "992bf17c6a2394799dfb719c26f0f233"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "0a8707a54c6c4aeacd1c2febc124f32b"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "6f7ca054afc3f79739622fb0a62c2024"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "6ead40e6643bf78a01ba3be5c7df7872"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "5c683343bbbf7f9533f38a0e9c14d4ee"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b3d4d108f472d76c7b8018eba3f4fb28"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "42be21ccbab806c495fe0f11f6ce3dd9"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "18fd913bb9a514727fc99ccc826f87c1"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "bbd4ba8246b9e0515efbe957e64c8f85"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "016e8f59c4ae62f8ab8aac69b621d967"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "b3fbcf2b4656b72cbdd341dbee84450d"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "086449e84698a806b32fbf82b0e9ed6c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "fe50ff91262adbb81490758d79fe1179"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "c298c8ab87869bde15b88ae1a22bf291"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "7d7e6d96758989938251f492a129435e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1ec1fa1abb43d49fd6e0efb037cb1da8"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "14ad5e384f16320836a5479e11205de6"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "25062fe3c3a09ae85c9d63dcc5d26bae"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "3f7d10fc93889f40a3d8e6bc612589e1"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "0156ec2719afcdeb8bbbc1a9f3403889"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "213520aa2e3cc310534f7352b3c12b9f"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "d6a411b1929820f190fe6e147ddffbd3"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "10c7597d5cc136ce24175d9e975aaa5d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "a45cded43a5373d4eb61699d352da18a"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "9f39c000513ed6000d8c3fe3d3738ef4"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "648711b7b48eea39922d7a832d63c7c9"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "c18ecebf58c70f1197ce8196f856ff5c"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "4f924191319f75dd98f9029758aa16f6"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "c420fc6f849e35f41389c39d73dcbfec"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "622e3c55ff806376fb14d98ff0a4bbe8"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "7d78e11477145622d6b86b3577a8864c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "8c049f689b1410e5556965211d1b705a"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "5b1091ed23fd38690bd9496d20398fca"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "cab90cc3b7fc665de2a686085361e3a9"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "b9290f2e76419148ab039dad56984f39"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "44f44e04b9b92efce77c5a439c49b4a2"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "cf9d3fb8d27e9f99309d60bcc3ac80be"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "ff33ffdaf9538603918f33603f36c686"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "af5de69e0060ea78284898d783874aa8"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a88d3f572314d57cb3519a8f8a0b8f2a"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "15b79305eda5a0a6b056b5a03c7bb90d"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "bf2e0013c8b764effd8fd1940c3b376d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6295179e5314e7d3431390c2b17fdb2f"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0d85c6917b04f3f71c8509e10bd7d7b0"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "c92b3b699c2fa021a2d6b6bb4ff4b7ec"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "e31dd7a8b1bf49f49a5d38b14df69468"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "83b39e752885e4c5f5abe5adbc49b5cc"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c99f27639e0ea0df7c45e989abed1b97"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "70f92fd8940552e1042dc617a4c1d913"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "3d39ecf73208e37298a1ce4a11873d30"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "1812d6883a9733bdd1d8de611e6dff12"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "67375dd332577b1be27c39ebd0fd1afe"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "d9cfe4df8e9775a745fc4cef5c17d60c"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "9dd98207b3a6da10b02bc26bb0b6c77f"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "9c217f1e9c63468bc2aa396540b10324"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "de3e83e6f476d3e339fde5277c29f9d0"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "baf48cf8101371ef3c7b993b14c4c443"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6f3892df01038a268a202931ba29900f"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "36b644acb8d38583f8dd00b8081d814a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "7aca628729c0397660a72bf778414a0e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "a231ea3d468988fc74ab5d21a3792ce7"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "2aa1136dd4b6133d9f94d6fa8b96b069"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "b910ebc535a3edba944eb5d0fc077f45"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "36f43b41a2974a539c0791264a74bb57"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "979df472a8139a59b5e70bd4f3dca441"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "df6aecb54b1792f476bca9eff29d2577"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "a94f1863c41d01c2ea4422fbb0816b5f"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "9167a2c150fa0458a07dc84fc1e6d7ec"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "ccbc079f5f4b446031d475ec56f80ea0"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c8d3387a6efc2e113c7cb4d05681ffff"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b3852867a97843e6b0364792495ad9e4"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "6eab1699f86a05693b4139372151037a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ff02371a886f0e1e36dd870aeb704754"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ae1641af3fa3fe62f23e87f463d63b1e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a65ade5e92bf6e80f15a18ce956f0ac9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "50d704226325ac1813b02f7ecd8f4591"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3df421e5f18adcb8acfe03e9ca49ad1a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "fbe6f931b08aacb1e750e75b980727be"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "916047026c6617b8b16128707ae81c0e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e89501796545b74a776189f7e956a6a7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "aeb8c633d583096b651f367ef34eee04"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "232ea83b2312abb119c22bde5eb39ae1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "168c260582333158717a00320e7608eb"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "363e401f13f839c0d48f6ee15eb52359"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "a093de272c0613bf8dc79090f5a35eea"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0a9de9ba9d166c7683a88ebdcc67a75e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "94b9acaad1f6a1769ca2ecba7d78c1b8"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2ba80711a298319f5394e34429db016e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "a5bf193c8516ef7d56cd5a87b37dd84a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a38c405a9f629e55dbe106d8ef09d4c7"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c276b0ac62f82a5e8f36b6c2441fe058"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c591b1679cdfc25b3325bda959bd6a6e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9b784408a0533f335974e3d9397628b2"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "00208d35a85f6a1c2bc230469e9a902a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "630633ad6b9a70669f27c20e4d3fd948"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "32e3623c51bb8b30ccc8460321b87465"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "54e0bc94ad91e00c77f3d5f8b21b150a"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "fd9f489c5e8bafe9eb1054ddb6e69c57"
  },
  {
    "url": "tag/git/index.html",
    "revision": "26968c49eb03bd8e90f5f5356bef8dc8"
  },
  {
    "url": "tag/github/index.html",
    "revision": "916879d58f0fa18afacedba6927eb295"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e70768da376e0dbb51cc888ddd51aa6b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "95f3b7f351192299f879a1b4dffdcccc"
  },
  {
    "url": "tag/index.html",
    "revision": "fc154a12b43857240dab2da0dfc88aa2"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "faaa12b428ade5b8be1c93ab3945028b"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "fb7f980d44c93bca02ea6936f4320513"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "52a247b86c81e13690db52c26b783e54"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "2e041ec706d2f8e75445fb41224214fd"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "b18dda84aed1222f380314a4a71e80a9"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "6fe1be45540a6a5d4f3443251d3dc9c7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b25a4910f35a6db360a085b730b740c1"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a03e87e4d9a52ed67c720800428d5e08"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ba9c97fa1db2dbcbad1fef06c1e70d29"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6a59c78b6cc8c1e1e0e6b2a24d291835"
  },
  {
    "url": "tag/json/index.html",
    "revision": "5eaa186a7954f58a4b95791c8ae30c62"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "a462e46940fdac809df7f49f8e5d8386"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "53ce143f568aceba389270479424b86d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fe18c4e56a9e510ffa4f009758d68ba7"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "38f55203a564cad329da3088143353fc"
  },
  {
    "url": "tag/read/index.html",
    "revision": "925b2d2faed8664cd2d958e1008e1b4a"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "d5e8681024bd1c98af2aebca01a7384c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "df04b47a5e2db579f1a2d68e8e9f3cbe"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "38ad482521edac98290803c5774f9c2c"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "3cca926ea7171956ed2bd379bdcc9ebe"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "6ae60c734f8c5d54e4e9a6ff0c10d840"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "917c3c8da1690dfcc8c3e7baf8c86dd6"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "4f85301cfe89e94ba6cdd6033dfe6f09"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "5a11d3a414a1e8e2ce8caeebaa4a613e"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "1f75eb6a55d408c9fc39c5472b98476a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "43eb8cb858ed18e9757ef7248944293a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "fd7a200a936bdfa39ec1b98e2164f5dd"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "bb717dbf9a46744cfd55b1094833c547"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ca9bac165c10c86dc71cfaf92b43711e"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1c857d7f592926d44776415e58f12e4f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c13c0d04a2a653cff7d741fdf18cc3a1"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6dcf285167c0d33e8a72c1f04a6ce298"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "efeabc8b0b4eb83f57949bfe4239c007"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "d5d90aae9baf3939c7141110b20d5326"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "b9f25644db34f2b8b41587ca6a23fdd1"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "5d2d838f1e11fca5b067be770345ff95"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "900291ee90c8e1c1ab26b3bbdb4a1c2d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "418c60199da7f1f48002fe5a9b10a2e3"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "db6e8dcf991b32fc83a26d7e30cf4a9a"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "cbbe9b5e546b2474bfce6e8db71799f3"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "834aba0d099360e1b1fad1cee8eb7469"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1d8545cccf0a269d6b1c4a3d9bf40bc3"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9bdc5b94c15a12b98a758937527baab2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "59c1cc263bcd6c0c461f27df4364c129"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "b5d5855f7a8b1f061f288c3508fde534"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e5614e3e2fb8ed1583548536df8f1138"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "988b95bf02076718ff6b76aa8ba18503"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "fd3af5922406fd29624920f961692b53"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d5dbc63606e15965340c5eb10591fa48"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "ba4d6b4c0dbdf4fdc8f1a2aa573bc965"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4918bb2f6650cb5eaacb19b41cc09153"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "083616ef02abe803b3eb7525e1394b9b"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "50f747230cbf38f5f02c08a28b37e1d3"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3ef411d707e263f00463215df03e5248"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "900aa333009cf9c0d625cb554bf5edec"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "99f86ec8cdb3b372a8a207cc2d2c6a43"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "d772969f989bd48899e2fcbcc53f2efd"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "401508e4a3a82843a54087d478771b5a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0596a690ba81bf6dad50cc524769cc11"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3e3ab4ee54a69c3495830c804cc0b374"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "b8dd69a06d21e370beba9bbe5fb84500"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5f808ebdcb0f45b3ddfa6da6740a6ed8"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7943b5bdd9f4c9c6986fb50162a6d23d"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "08dfbb6235f5bff3753bdc8ff6311f3d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f4d54549f1bef4223a045bc9a6139c12"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "dec6eda8d43929f2a1e475a2c28900f6"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "cea0a5e1809f08bf3d2873b3f41a23f5"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "818b5fcd2d1d5425d18b891bb462f7ca"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "0d19136c622e90727c1f86412a5e0e87"
  },
  {
    "url": "timeline/index.html",
    "revision": "52a9fb326ad5772739078ce32c1c33f2"
  },
  {
    "url": "tools/docsify.html",
    "revision": "4ab1d55c569a4c725302bdb99656cdf3"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "fba808afedd16eea1fe953d7a3a5a48e"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "8b9eb6f3fd38f311c76e7f9acdb1c0f0"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "447be4a0e0059e227975b8abb3825c8e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f68433d8c99095d6472532eae49f8632"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8356c294be61d1700db0b23dd299a13e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "fbf47fe3e2f8a12296ed4102f5163489"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "ec6f2b8edf8a2b331e6767e003d5ea96"
  },
  {
    "url": "tools/html/index.html",
    "revision": "bcc5385809bae8e9f8153e2dc63a5d16"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "411231be72e4c6c8904e67ab2f1e038f"
  },
  {
    "url": "tools/note/index.html",
    "revision": "bef2524542ad6e652efcb64bf77c600e"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "e85d837329cded81abeb47f0a367c83b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "acd9f672cf911a427fe9f3f09d96dd27"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "ba453ae44eef2eba48fde9ca12e52637"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3e4ee66efb3c53fa23a1885f93d35ffb"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "90445db3ce8bda24d4a62eaa63f028ef"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2f789fca8cfa158c5f69d83c9c79e3f1"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ffe8db97ce009ad9cb549b3a38c01239"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "c23fdbb6e509ce2515d931331a777aff"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5abb882bfccced8e53f98f214dcd419a"
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
