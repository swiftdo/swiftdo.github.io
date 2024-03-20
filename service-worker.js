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
    "revision": "9b67a360eaede73555a93a8c1d6140cb"
  },
  {
    "url": "about/app/index.html",
    "revision": "70729b55d3312b9ba146476447cbfaf1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3dd00c84828c79f0b8401d263029d9b2"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3fb1fbc8cf1647c4122ec11b7052e61d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c1ca668d2f3483d5f3b42e410313be01"
  },
  {
    "url": "about/index/index.html",
    "revision": "e74b040d64b009edd9bba6a1e2e7e4d7"
  },
  {
    "url": "ai/index.html",
    "revision": "b9f4b1bc38ff84c3a7c413148981be12"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "50236be265542174643eba03074296e6"
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
    "url": "assets/js/101.b59acd76.js",
    "revision": "86d0bdc5a02c1782adc2f553d40d6eab"
  },
  {
    "url": "assets/js/102.30f97e0a.js",
    "revision": "af44b2cd69f4a8c7fa030d44dbbc15fc"
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
    "url": "assets/js/110.6239739e.js",
    "revision": "07a195394e532b84dc60a5619b7a3425"
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
    "url": "assets/js/113.53792197.js",
    "revision": "e7ba781de595264568f15292fc492e82"
  },
  {
    "url": "assets/js/114.f8fa2a8c.js",
    "revision": "98a01e6f382b7ee807cd6a0ce3226716"
  },
  {
    "url": "assets/js/115.0b582ff4.js",
    "revision": "425ca3b7a2632b5841af4fe3f2d1ae3e"
  },
  {
    "url": "assets/js/116.25e4a84a.js",
    "revision": "c2fb01a342f3f0ed4a3597f28effdf4f"
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
    "url": "assets/js/122.a4fc7c93.js",
    "revision": "89d0cc3a4484970d118c9a266879ecb3"
  },
  {
    "url": "assets/js/123.aa46b45f.js",
    "revision": "99553bcc8e446fb36749bc2ba48f51f2"
  },
  {
    "url": "assets/js/124.bf940ad9.js",
    "revision": "094bbe9deff1f1cd9319f846148a1a32"
  },
  {
    "url": "assets/js/125.c45a88e1.js",
    "revision": "af121d5c77ef688c88844be6ec4833b0"
  },
  {
    "url": "assets/js/126.5b010a5c.js",
    "revision": "861f4e0d6974b6f1a88123591f049c2b"
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
    "url": "assets/js/132.a18acd74.js",
    "revision": "834e8540120675991a6cf8ce204d29ac"
  },
  {
    "url": "assets/js/133.2c74cc07.js",
    "revision": "b81d26a58b475d717134e9cbce7b3075"
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
    "url": "assets/js/136.0155d6f9.js",
    "revision": "b8b665ffbfd1fa877a7af923ea124b5f"
  },
  {
    "url": "assets/js/137.d22806e9.js",
    "revision": "42788aa7cef17d1c4b401dcf8232e8f4"
  },
  {
    "url": "assets/js/138.f4d6bc64.js",
    "revision": "18b0ac8a0fa82bd3207ae98ef88161fb"
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
    "url": "assets/js/141.4ea73100.js",
    "revision": "262681c57beed62030ce5c16c5ae82eb"
  },
  {
    "url": "assets/js/142.5ffbd4e7.js",
    "revision": "4985d40cfda048a0530d4b28e85683e6"
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
    "url": "assets/js/146.1e473335.js",
    "revision": "8af14ad70818874ee303051b9fd3bf0d"
  },
  {
    "url": "assets/js/147.53a342a9.js",
    "revision": "d4ec941e21a805aa77a7101f6c304ceb"
  },
  {
    "url": "assets/js/148.c0264c21.js",
    "revision": "34ce0b9d22a53fb782684b5027dcaf8b"
  },
  {
    "url": "assets/js/149.e6fc7969.js",
    "revision": "5c3ad91f665ff2bd45fa81670445cd15"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.ef28017c.js",
    "revision": "d8cbf0d674398b4a27ff68082049194e"
  },
  {
    "url": "assets/js/151.afa0b3ec.js",
    "revision": "c80739db58e9920ee0cf5444326d6da5"
  },
  {
    "url": "assets/js/152.dff0528f.js",
    "revision": "d03d5149ed66d4fbb41071738d1f5946"
  },
  {
    "url": "assets/js/153.4ef660b2.js",
    "revision": "4b6072f95ae35ec6f5e010bb3fba6008"
  },
  {
    "url": "assets/js/154.d2aa73d6.js",
    "revision": "893e1cb57d9f1595c2fc9693e3001e05"
  },
  {
    "url": "assets/js/155.37a95460.js",
    "revision": "b96c67308d73acf7b5ed54a4b7ff04ad"
  },
  {
    "url": "assets/js/156.d643aeb5.js",
    "revision": "92f42000befdb32a81468626dc51b98a"
  },
  {
    "url": "assets/js/157.8de4cd3b.js",
    "revision": "a85ccee4f64210ad41a83a4a9fe8e192"
  },
  {
    "url": "assets/js/158.df508114.js",
    "revision": "25c360b1e6175b4c367251c17634a768"
  },
  {
    "url": "assets/js/159.7311b4d1.js",
    "revision": "d45b111d2b1d4ea65dc0f35e871fef2f"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.60329fee.js",
    "revision": "ff908a6b588a2b1f5f6505b06457632d"
  },
  {
    "url": "assets/js/161.2aa8d340.js",
    "revision": "02edf0cbc3fd9b06c474bf6ee3b53197"
  },
  {
    "url": "assets/js/162.ce1dca43.js",
    "revision": "ab5381770900c27e6b1c97a9c7e6d11f"
  },
  {
    "url": "assets/js/163.70c8d317.js",
    "revision": "f60475cd7a15ab89c0c09f16512f6727"
  },
  {
    "url": "assets/js/164.e30ab42f.js",
    "revision": "79f303220814a42bc1a08ad51ddc4fea"
  },
  {
    "url": "assets/js/165.4990c865.js",
    "revision": "21f09211695d1232b4c484a620b8ab32"
  },
  {
    "url": "assets/js/166.445f5d9f.js",
    "revision": "f0916f780f63e56d356ecd9a6ff2eed1"
  },
  {
    "url": "assets/js/167.8fd5080f.js",
    "revision": "71ad4771b0d2166d89c9428d4d4f7a58"
  },
  {
    "url": "assets/js/168.b3659124.js",
    "revision": "b49e94a8e07736217a635012af83555c"
  },
  {
    "url": "assets/js/169.2fed73f0.js",
    "revision": "2f60076fd02207fcd7cf507a1cd995e7"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.709f8149.js",
    "revision": "92c04f777c3b7c2d13adb2875e86e9cd"
  },
  {
    "url": "assets/js/171.b1ccba2e.js",
    "revision": "5fa44dfc1ad1eaf08685641d89ff36d0"
  },
  {
    "url": "assets/js/172.5dcc2f6b.js",
    "revision": "16134fe5da31afc6840389bc2a7cc657"
  },
  {
    "url": "assets/js/173.646a012b.js",
    "revision": "d3e4ab41d853e1016a45a4da9a135394"
  },
  {
    "url": "assets/js/174.73718ddc.js",
    "revision": "cf035b11b4aad91362ebbecb39413c02"
  },
  {
    "url": "assets/js/175.4f22b5ad.js",
    "revision": "3ec606eecbff2387fda417f9abbcf378"
  },
  {
    "url": "assets/js/176.00bfd8ed.js",
    "revision": "7c9b2b4f03dd87b7e17ebe30b4ba8cde"
  },
  {
    "url": "assets/js/177.0a106fe3.js",
    "revision": "e33228e507e89a6c20118ce59985acd6"
  },
  {
    "url": "assets/js/178.09e774b8.js",
    "revision": "ed0c1cf1e38f153f295dadfc777ac893"
  },
  {
    "url": "assets/js/179.18fdb28e.js",
    "revision": "9758478b30c66fa6ab5173c03e1abfc0"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.6ed383d3.js",
    "revision": "c9d270ec50606cc263fec25590f19518"
  },
  {
    "url": "assets/js/181.75a65e98.js",
    "revision": "0e565b62081c3308a37fb0f48dd75d7d"
  },
  {
    "url": "assets/js/182.178a94ab.js",
    "revision": "2d4ba72daad5735e9c7a989828378579"
  },
  {
    "url": "assets/js/183.e03f139b.js",
    "revision": "9df3e2149a93ec1c21ed2d40aebe4039"
  },
  {
    "url": "assets/js/184.05079e8f.js",
    "revision": "117127174ec8897be1bad8f6a5d86720"
  },
  {
    "url": "assets/js/185.59679974.js",
    "revision": "fd8b7dae132097c675b5b04b61db3aed"
  },
  {
    "url": "assets/js/186.4700a368.js",
    "revision": "2791f9b9f5a37bcc21c513e7226c987f"
  },
  {
    "url": "assets/js/187.38b0d8e6.js",
    "revision": "7b92752da176caa458a6ed631726d394"
  },
  {
    "url": "assets/js/188.845cb666.js",
    "revision": "ea1ecfd633f96662a8f3c74e557bb9ef"
  },
  {
    "url": "assets/js/189.771bcee2.js",
    "revision": "3b6a953fc12544327fe9be1a87e82d9c"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.8902cc49.js",
    "revision": "51f879106cac707e486062bc6497b964"
  },
  {
    "url": "assets/js/191.529b1800.js",
    "revision": "dc8271d8c834029038c80835b0c9c4c0"
  },
  {
    "url": "assets/js/192.532ae2a4.js",
    "revision": "16fc2abdfd7f26325fd48d5523d2b8f1"
  },
  {
    "url": "assets/js/193.c7ec86bd.js",
    "revision": "06e6cd5344f025f91d6898c478de1db8"
  },
  {
    "url": "assets/js/194.3e7c5c7a.js",
    "revision": "1bfd24c2f9edc358a86e2698d0aec5c9"
  },
  {
    "url": "assets/js/195.48f9d25f.js",
    "revision": "6440f51c42765b1a9445d6196e97c0f0"
  },
  {
    "url": "assets/js/196.c1d59b90.js",
    "revision": "0d0077c926ffd349a55470a6636a6e86"
  },
  {
    "url": "assets/js/197.a298b8e6.js",
    "revision": "aae70cf4fa260872fe2412ff10f3cecb"
  },
  {
    "url": "assets/js/198.20d5852b.js",
    "revision": "ce0185b392dfe477653a438392041b49"
  },
  {
    "url": "assets/js/199.0fe410d1.js",
    "revision": "d47377b99a7a3e98586c2662093bcd2f"
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
    "url": "assets/js/200.ed139221.js",
    "revision": "4d6210747a7976cab6842fe5e73856e1"
  },
  {
    "url": "assets/js/201.fa688c7f.js",
    "revision": "2f554267f58c7c1b499de89e920967a8"
  },
  {
    "url": "assets/js/202.215c8238.js",
    "revision": "3a95d9205c76a3ae7e40e7f2a3bf5d28"
  },
  {
    "url": "assets/js/203.ba487e55.js",
    "revision": "86cb1464dab487fddc1d317564a926ae"
  },
  {
    "url": "assets/js/204.51e6e16d.js",
    "revision": "ccbf87ddc65728afeb4c77326669b624"
  },
  {
    "url": "assets/js/205.8f671878.js",
    "revision": "9920477b0ca0183119072b7aeee9fcee"
  },
  {
    "url": "assets/js/206.3b1f06fa.js",
    "revision": "34996d0188b2f179aecad43fc85ebcc0"
  },
  {
    "url": "assets/js/207.40236085.js",
    "revision": "a778a8dce55b8ad89bdf44803a4cbb31"
  },
  {
    "url": "assets/js/208.08207e08.js",
    "revision": "d197005d853b857838494ec5fd9b1b8e"
  },
  {
    "url": "assets/js/209.95c27853.js",
    "revision": "db8d59d6a6a480c3a9c1b124766eda58"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.2c74e170.js",
    "revision": "e3bc1849e711c77ec03cdbe6c237ee9d"
  },
  {
    "url": "assets/js/211.27d968ed.js",
    "revision": "29afbcc6c1713ba2f909565394c35764"
  },
  {
    "url": "assets/js/212.8135ee74.js",
    "revision": "2cf4cf33e4d763f09e9916407c2dd6d2"
  },
  {
    "url": "assets/js/213.4190c38c.js",
    "revision": "c59cf2d10eed785324d2cc44e822d849"
  },
  {
    "url": "assets/js/214.9aae9270.js",
    "revision": "d665b309e1b9a0204612d123ce4bea86"
  },
  {
    "url": "assets/js/215.b3a2a839.js",
    "revision": "2f42c083ff9cf9b8711a0fff621a8ea4"
  },
  {
    "url": "assets/js/216.7bd1966f.js",
    "revision": "29e8788cb0fa933991bb0a34a4ce5533"
  },
  {
    "url": "assets/js/217.2b87349d.js",
    "revision": "3febcd922293f45d504a70d0cff6c3ea"
  },
  {
    "url": "assets/js/218.3a961739.js",
    "revision": "9c14565d5eb7f8b8043df8a229667369"
  },
  {
    "url": "assets/js/219.fd014599.js",
    "revision": "d036331496af6a95020b13088c013e7f"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.46cf11fc.js",
    "revision": "4240add1d11cd23294afa01fdb69fa13"
  },
  {
    "url": "assets/js/221.c6f33da1.js",
    "revision": "3e8c781088a58eef8c542c7b7be3eb6d"
  },
  {
    "url": "assets/js/222.6b4b8355.js",
    "revision": "2312a27f4a8b0c50cc4d7c8e1c576d16"
  },
  {
    "url": "assets/js/223.2d6379e4.js",
    "revision": "2b6bffb457427613e29d72b631f4b1e6"
  },
  {
    "url": "assets/js/224.af1a1694.js",
    "revision": "780becc0733eec9e7abeefc36e4ecad6"
  },
  {
    "url": "assets/js/225.68533bba.js",
    "revision": "59beaac845b1f80b33814498f2d3cf38"
  },
  {
    "url": "assets/js/226.cec36a0d.js",
    "revision": "40d7270e8938f67c59a499a9d7732856"
  },
  {
    "url": "assets/js/227.86bdae4b.js",
    "revision": "76c584051863ddc32d85cd368a03db9d"
  },
  {
    "url": "assets/js/228.1fc248d0.js",
    "revision": "a0b1f2d409d6cf7a433006d606b7d276"
  },
  {
    "url": "assets/js/229.5e3060bb.js",
    "revision": "de63ec8c7fbcf0d6cd2f7783a58f7714"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.262bf075.js",
    "revision": "1ea279f94e43517451babb242ffacac0"
  },
  {
    "url": "assets/js/231.8b472226.js",
    "revision": "6422ad209abca017dfbade14b669c9b2"
  },
  {
    "url": "assets/js/232.68b781b0.js",
    "revision": "59749a3eb758745738b850a69e360fe8"
  },
  {
    "url": "assets/js/233.fee330e1.js",
    "revision": "b81e63c493f9d31ed76cb5d493768a5c"
  },
  {
    "url": "assets/js/234.7e4bfe8e.js",
    "revision": "8c33558f279f6374605dba530d7e193a"
  },
  {
    "url": "assets/js/235.049bee31.js",
    "revision": "9e9b37a451598cda5839d581b8a46e8f"
  },
  {
    "url": "assets/js/236.0cd17841.js",
    "revision": "eab4a45c86f8b8a646ba6b96ab677075"
  },
  {
    "url": "assets/js/237.741264fb.js",
    "revision": "5e7f95b0f866f8863179ab40a659b372"
  },
  {
    "url": "assets/js/238.a1600a59.js",
    "revision": "654ac7d950ce4d23cd8778f516047ba0"
  },
  {
    "url": "assets/js/239.0e77cd2d.js",
    "revision": "3b774bba865c0013e5b395eb12ec9183"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.3ef95b86.js",
    "revision": "02a7f1fa92bcc0ac9cf55defca2d02c2"
  },
  {
    "url": "assets/js/241.1bf089fa.js",
    "revision": "541059a6e0a4b5f4d5b7742112d6d9de"
  },
  {
    "url": "assets/js/242.281a2cf4.js",
    "revision": "cf070188ee2ece30dddbe9f2e4ff48cd"
  },
  {
    "url": "assets/js/243.ecebfe9f.js",
    "revision": "808e8dbbc8ed638865eac6e88cae7b33"
  },
  {
    "url": "assets/js/244.156d6716.js",
    "revision": "73260c5122d52ed9bdc27c876d4b908d"
  },
  {
    "url": "assets/js/245.5a1e65c9.js",
    "revision": "23712c97d89d1974f953883231bad0a8"
  },
  {
    "url": "assets/js/246.4910d407.js",
    "revision": "d4374f921dab348f6063b784dd161dab"
  },
  {
    "url": "assets/js/247.4f923ddb.js",
    "revision": "5512219d4994ad7592409a5e5d7230fc"
  },
  {
    "url": "assets/js/248.33e20f85.js",
    "revision": "ee20b8fe4f8092df5f8cab866611ed33"
  },
  {
    "url": "assets/js/249.4bb89242.js",
    "revision": "718ddc9d52e00e7710211037be985058"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.dd9608e6.js",
    "revision": "1b91e841086bdcb95df2418652774e5a"
  },
  {
    "url": "assets/js/251.4d3c6a64.js",
    "revision": "3dd992fa08938865e578f0ed91a04d16"
  },
  {
    "url": "assets/js/252.ce148bb8.js",
    "revision": "9c5122a441557d2237c0c085ec377c3a"
  },
  {
    "url": "assets/js/253.ce63e1f8.js",
    "revision": "a472845cf261dc13d70f340add056407"
  },
  {
    "url": "assets/js/254.3f8a463d.js",
    "revision": "8a0d2cef58cb2bdabf58de21ea55d820"
  },
  {
    "url": "assets/js/255.70c3b653.js",
    "revision": "a67d4ca513d94307d009e21740596385"
  },
  {
    "url": "assets/js/256.b6e2d5d0.js",
    "revision": "41730e4727986bae97b3f221c858ba8a"
  },
  {
    "url": "assets/js/257.5a1e2f37.js",
    "revision": "c260d993b16ad8b32e89ef83d7a0c301"
  },
  {
    "url": "assets/js/258.3321d515.js",
    "revision": "9173514e9ddd2ee18612effd99fe4d60"
  },
  {
    "url": "assets/js/259.f6b2d8b8.js",
    "revision": "e2d40c445155752b3962ad5ba4e939dd"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.2545e5f0.js",
    "revision": "92860eae936d276dcf01174e73a5ff25"
  },
  {
    "url": "assets/js/261.e4707edf.js",
    "revision": "5a764b999fa1bbe9c7406dbc9e216735"
  },
  {
    "url": "assets/js/262.a632754e.js",
    "revision": "9dbadb08e3a6446793465bf1b791d00c"
  },
  {
    "url": "assets/js/263.14e4723c.js",
    "revision": "65fe58c8470931ded831bcbec0213bfb"
  },
  {
    "url": "assets/js/264.172e81d2.js",
    "revision": "efc2c8065a0081a4bdbfdfba85aabf65"
  },
  {
    "url": "assets/js/265.b75e7e08.js",
    "revision": "e383a286b5a4389d6551cd956aa3b52b"
  },
  {
    "url": "assets/js/266.56ccbabe.js",
    "revision": "712f9273493c3d49e95370c035043b0e"
  },
  {
    "url": "assets/js/267.b4955e28.js",
    "revision": "45205e4db54e2d727f724cef1560ff18"
  },
  {
    "url": "assets/js/268.6c360d82.js",
    "revision": "6a1256956a994a62be9012bb75eb11c8"
  },
  {
    "url": "assets/js/269.869eb575.js",
    "revision": "e1c20016b134cb65d8dff2b37fc9fc74"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.f06e3302.js",
    "revision": "3997750d4cbd1852db439b03b8e3cf7c"
  },
  {
    "url": "assets/js/271.33eaff1c.js",
    "revision": "9c3b273839b38101b7922d268392dd3c"
  },
  {
    "url": "assets/js/272.1389d706.js",
    "revision": "1c6bc83349c064a237b975558fa42558"
  },
  {
    "url": "assets/js/273.c84b28e6.js",
    "revision": "37546fcf618a99665ce63eeb79f652ec"
  },
  {
    "url": "assets/js/274.39edade1.js",
    "revision": "1b8328c8490cea5a1db108d66d3f706e"
  },
  {
    "url": "assets/js/275.b29d82bd.js",
    "revision": "71bf5d37f7d1df049fd901e648758f7f"
  },
  {
    "url": "assets/js/276.743dcc1e.js",
    "revision": "ac16015b4cb5e99b0dde2d4c777efd9c"
  },
  {
    "url": "assets/js/277.6db79df5.js",
    "revision": "680c419dd9e098976e48adbe1b89aa0c"
  },
  {
    "url": "assets/js/278.fda243be.js",
    "revision": "c4dafefc542f8822dfb00c7707ff0f87"
  },
  {
    "url": "assets/js/279.8d455bc4.js",
    "revision": "d23456060e404f8302079f610f78cdcf"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.dc0577b9.js",
    "revision": "eb0afa3f33f10f0b4ea4275d0e7fc2e3"
  },
  {
    "url": "assets/js/281.914027db.js",
    "revision": "54bc50e3cf3c4374a3372b248a0e66c8"
  },
  {
    "url": "assets/js/282.eeedf840.js",
    "revision": "6868deaa9ad5edec6db445117daa986b"
  },
  {
    "url": "assets/js/283.52709b83.js",
    "revision": "e8503f28d8b7fad670dfff4e60325d03"
  },
  {
    "url": "assets/js/284.2ec97cf9.js",
    "revision": "43096679da291e5dfe16d2c9172beef5"
  },
  {
    "url": "assets/js/285.e847d64c.js",
    "revision": "a79fe756ced4542a6c44d14936d5ff36"
  },
  {
    "url": "assets/js/286.708b7a8b.js",
    "revision": "707f585844f9359af72c73a66367faf5"
  },
  {
    "url": "assets/js/287.50c652bf.js",
    "revision": "a3dc90fe72e6ea7e779ad4dd3ee34dbe"
  },
  {
    "url": "assets/js/288.74e60cdf.js",
    "revision": "6c0b87f79b4ea05fd1557b131ce3f1e8"
  },
  {
    "url": "assets/js/289.946626d2.js",
    "revision": "4b9ddaad273574a60474c3f60b5c964a"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.6661a020.js",
    "revision": "baa2c8574b7feb15b905d0d25a7349a5"
  },
  {
    "url": "assets/js/291.df73e985.js",
    "revision": "c76abff509b346e5c102ed13600ef0b2"
  },
  {
    "url": "assets/js/292.a543d182.js",
    "revision": "746d73f399e750167947727ea48f7d86"
  },
  {
    "url": "assets/js/293.abd2001d.js",
    "revision": "0ee32492fda6b4a9cc16fb3a2c1af873"
  },
  {
    "url": "assets/js/294.76393819.js",
    "revision": "3e34fc65b19644b8409ab38f932d9851"
  },
  {
    "url": "assets/js/295.b7b7ea2c.js",
    "revision": "b339c41821b116db9b544cef28718a92"
  },
  {
    "url": "assets/js/296.b3dab151.js",
    "revision": "6006e12c0b48be984d2cbccf36787c35"
  },
  {
    "url": "assets/js/297.9565e44f.js",
    "revision": "b255ecf3c1def92011d1347ff7d54455"
  },
  {
    "url": "assets/js/298.cfa9023f.js",
    "revision": "8d09657fd6edc6464d86e759c449690b"
  },
  {
    "url": "assets/js/299.f616a9fe.js",
    "revision": "8e25df1ebeda4a34a6859c1422f25733"
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
    "url": "assets/js/300.e833d710.js",
    "revision": "9d1bbef61586f1aa2928812f2d4000d2"
  },
  {
    "url": "assets/js/301.47016a37.js",
    "revision": "2e55654d705533c32bae82997f4778dd"
  },
  {
    "url": "assets/js/302.98b896e0.js",
    "revision": "854244da20150e96c07d55a39eba828c"
  },
  {
    "url": "assets/js/303.2c9d6f0f.js",
    "revision": "f1249373fbc3dc0f28e5b0a9e963e8fa"
  },
  {
    "url": "assets/js/304.d4c0bf6e.js",
    "revision": "8cef8ebd53bcdb02d8e31fd1d4952e9d"
  },
  {
    "url": "assets/js/305.6b9c69c7.js",
    "revision": "a9208641759846d29784b9eb8b76aa43"
  },
  {
    "url": "assets/js/306.9a145069.js",
    "revision": "3018b83c37e2c32bf10e3ff4f98d1efc"
  },
  {
    "url": "assets/js/307.8715b55f.js",
    "revision": "3b174778f279f857a1cb82e8e6da462c"
  },
  {
    "url": "assets/js/308.56519f49.js",
    "revision": "411be36bd42879bcf478faf0ad059de8"
  },
  {
    "url": "assets/js/309.29101306.js",
    "revision": "faec76c9ee4154ce08264a4c624cb371"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.15c15510.js",
    "revision": "ff8e86a464ec453e664c5775d5d41752"
  },
  {
    "url": "assets/js/311.ee6b7790.js",
    "revision": "e7b926df9f5fb535b64af9216ee9463a"
  },
  {
    "url": "assets/js/312.c618dcaf.js",
    "revision": "e824202abb57aa57bfc296e6723ef6f2"
  },
  {
    "url": "assets/js/313.18eb9636.js",
    "revision": "0428be0be5e8a3edca886e4862ad5770"
  },
  {
    "url": "assets/js/314.51462bd9.js",
    "revision": "951ec948defddb076dff0292dddfd303"
  },
  {
    "url": "assets/js/315.23b91c4b.js",
    "revision": "2f6be52afe0e3426a5713dc80d5aa5db"
  },
  {
    "url": "assets/js/316.50416b69.js",
    "revision": "79ccc2923711811f42d61ba16c49de75"
  },
  {
    "url": "assets/js/317.e4cae2a5.js",
    "revision": "671aba05418971b2a27b93af51ea11ab"
  },
  {
    "url": "assets/js/318.fa520301.js",
    "revision": "e40351ff521024a2f1567f777fabc769"
  },
  {
    "url": "assets/js/319.2a9ddb26.js",
    "revision": "b7b31f5d4d8025321a85e6097694f3e3"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.682724e6.js",
    "revision": "72ad4631ee6cfbe82791a99186419b21"
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
    "url": "assets/js/40.d8887dab.js",
    "revision": "5c199233d8134852bb7a98cdddfc2d2d"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
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
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.1619522c.js",
    "revision": "5e41154cc2dc4e9721bca6530ae3fa5f"
  },
  {
    "url": "assets/js/48.1d28a7df.js",
    "revision": "88e346d4e5204bd643e73ce71e801423"
  },
  {
    "url": "assets/js/49.c4f3337b.js",
    "revision": "67cfd0bf958db09eca7736e96c8383c8"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.c41917c9.js",
    "revision": "8a9771dbb894930f735daee868aa3f07"
  },
  {
    "url": "assets/js/51.89679c84.js",
    "revision": "380b473f3130597824939708903e5c35"
  },
  {
    "url": "assets/js/52.c79f5015.js",
    "revision": "fa700a1aa8a38322f409182307bf27e6"
  },
  {
    "url": "assets/js/53.318a822f.js",
    "revision": "423a53c5cf19f927c853a388161fe606"
  },
  {
    "url": "assets/js/54.e9979d46.js",
    "revision": "7c6afdf3dd87ec23d01bf1b29c5adc1c"
  },
  {
    "url": "assets/js/55.40b15fb0.js",
    "revision": "c4c8a8a17e6d9f31c3f9d69b828aa2fe"
  },
  {
    "url": "assets/js/56.ae1e02f3.js",
    "revision": "25996913a1190bfd6e1a4b32c87d777e"
  },
  {
    "url": "assets/js/57.b6507420.js",
    "revision": "c6fdd8dde75b0584e27f7c7e3223492e"
  },
  {
    "url": "assets/js/58.91f066d0.js",
    "revision": "120eef2a9e7dcb7e8d49e8139f7eb45e"
  },
  {
    "url": "assets/js/59.aa0db3b2.js",
    "revision": "3a009715f3669d99e7b0ea6c491a809b"
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
    "url": "assets/js/61.1823a789.js",
    "revision": "c129dfaf42b3d7c3aaf4100c84a35d27"
  },
  {
    "url": "assets/js/62.8da88add.js",
    "revision": "d2b6a9feb31e09a71ba7ce77184d35f1"
  },
  {
    "url": "assets/js/63.1a2216de.js",
    "revision": "ce1d15f57f7f38515521148c868e4120"
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
    "url": "assets/js/67.b89f6dea.js",
    "revision": "a41c7ed7f1661e1fe4d0d949310b8685"
  },
  {
    "url": "assets/js/68.736c4815.js",
    "revision": "2d4675aebadd298e3718caec0956c964"
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
    "url": "assets/js/70.1c58d4d0.js",
    "revision": "c409ca15cd24b9791d8d92aac07c9d95"
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
    "url": "assets/js/78.aed0d851.js",
    "revision": "0bb5282afd732960eb5fbeb406f639bb"
  },
  {
    "url": "assets/js/79.e36752f3.js",
    "revision": "3406d5e0160d28398d2562460e1d7e17"
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
    "url": "assets/js/82.f64e7910.js",
    "revision": "6d8e2e7a73a6c1a48babfa0111028edc"
  },
  {
    "url": "assets/js/83.081a9f62.js",
    "revision": "d3a20a197f1f5017023571d78d35f046"
  },
  {
    "url": "assets/js/84.abbc5b1c.js",
    "revision": "fab7a32d343612545932161ad0e7b52a"
  },
  {
    "url": "assets/js/85.6019c25d.js",
    "revision": "48f6eae6e120b3ff2d05438dc25f6bf7"
  },
  {
    "url": "assets/js/86.6290b650.js",
    "revision": "f747fb23c754a3265a7d3f978d287cda"
  },
  {
    "url": "assets/js/87.e8f9b887.js",
    "revision": "64004d8b120f274f25f14d4c474ca803"
  },
  {
    "url": "assets/js/88.37a5f600.js",
    "revision": "de955a274a1681f963fe4e1e4206a744"
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
    "url": "assets/js/90.4da6eef7.js",
    "revision": "d8173b9473a0597de582b1f75b8aa5f3"
  },
  {
    "url": "assets/js/91.e92d9531.js",
    "revision": "d78d86f824a715e12abe732113b6ce34"
  },
  {
    "url": "assets/js/92.fe81cfda.js",
    "revision": "b411c818fa4ff210e9784e03d6f31867"
  },
  {
    "url": "assets/js/93.229f50b8.js",
    "revision": "2576d5fbd76468b97396b59c0acb6377"
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
    "url": "assets/js/97.9caafadb.js",
    "revision": "a7d5875b031182f411bf60e4f3cecf7e"
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
    "url": "assets/js/app.62996cff.js",
    "revision": "a1947a9eb62fe76d529f989542ae041a"
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
    "revision": "16fa3ff6f1243c2793e0fe5730b1b156"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "59055f9825c6ea4857d5e79f681ccf01"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d7fbb9cbe596a29f933b64b1b0f513a8"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "87f715918ff8af8a8b9596191bdb309b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ad481dc45b023d155160a114526f5023"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9da74040e920561fd9671a55faf670db"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6c5613961c742c7d2409f5c0b99b0f97"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "42920289be66a575f45aed343a3ce5a9"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "29f9b43a91cbe0c7bdec311efa9bbcf5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "b854a824fbf50138615414f9788609e4"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "960aa031e2c7bce7498fa91cc33a4374"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "909ec0c75d43aac91fdd585a0a874f65"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "f4a7e662e60d276f22d3119a6df338c8"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "73bdc986a3512353cc60c41726c601fa"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "1f092c85b80022b2952f977664e6676a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "1e1568062da98f9b371338c620ffaa7b"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "c15befb60a8938dd1aa5d5170a965e9b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "58663428ea30fc703f45438444ae5381"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "319e40c461959823a477df203f3dc790"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "d00be3c51fbf51037e46a60dd773048e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "e6fef08e3e2df62504c1f294809528a0"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "172e48c5c21b1c19425a185b2786ff75"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "24a2f626194c88dd5934acd4de905715"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d189aec61e817c93a2af5aba857ef4ff"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "c73bdcfae2bab6df2c51a675b62483f1"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "4b42f5238ae5c0d84a301b51da8a0ae7"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c00ebe6e8975603c9be3409733ae7c5a"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "fea578461c92befcd08e5aefb6cbd73e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "51219c32578d9464bb1cc368a2de2407"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "397c0f7d5b6afb751c558949bdaee3b2"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "31f39f7efe2dabb3cbe6554172ed9634"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "df5fd2ffe453f69b92c67b150ca87a77"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "2a38b6c60c402c18732a324d75b7eb7d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "e7ec4518fba8b66c9cd9118146835704"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a432e2f34c6b648258a172249678a50f"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "b3dd4a20903ab142048f7c53a2cb918a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b2263cc82cdc2a465b12caeed0981749"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "07aae990ac88632e989cf61fed802d95"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c9db0a8bb06a78f9cd555cc951807e52"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0238b97356eea704eaef9049f69ed188"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "91b7025a88ccbfc4f24477408cc194c5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ee29580d2f37a647f922b11c4e8d4e35"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "34df49ef1b8f2f871c456c0b8ea26e07"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "bbca19362e98abc29b28d0a9f13ccf43"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b9fcc4629a49197ac419e5d40c1c8ccb"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8f1b775a52e34652ddb6bbd95ad712c7"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "58da2babdf0cbb46df4f19ed2e790802"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "380828a0ed73b6e03ac0491cb0e2fc6d"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "9e2a5465f53cef6e57df5034b030ca96"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "aa786e0a9253c1e5a62cc48a771574b0"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "e965d90514a34bf6d2be61dcdd0e9240"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "8f98a5042558c515f91a234a28da593c"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5f3f504870d968c37118ae70f9e6e4a1"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "b6b9a2c377cc212e5e1d2385100d097b"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "5a3e4e15ab6928cf0387519730313eec"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "5b6022aa56c044271a40292eed55aeea"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "2ed656885afcce108f8b557a8be8468a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a4d511a2224394d61a6a4d9118afa534"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "bcda80b29c994208206d1436e3d79f78"
  },
  {
    "url": "c/program/index.html",
    "revision": "17d93f3214f87407865eaa61561af6e7"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d84a91f3a629e8f4ccfa22409d55a3a8"
  },
  {
    "url": "categories/index.html",
    "revision": "10bbc03aab6d17bd37cbf10c90afac30"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "94a438bb1f07be13bd9733a2469de5e9"
  },
  {
    "url": "figma/index.html",
    "revision": "ab0eadc2bebc02a73336bc7ebd60b014"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "ef88cc51b5678f2c917f4b34ce8b080f"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "a6b35577a9f0f824582cb0b19708a4ce"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "716d67d6b230e22202b8919c5b1a9013"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "fc653d47b57e13333dde7124e2e1100f"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "cb089ec296fd9ea21b3860ccf734a9a4"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "1a8e4c889996e6172a926abf3b3b3f69"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "906561cc88d0432d65ac57690200eac7"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "852107832f6947607d63591970c835b7"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "37a11681ac7448b891dc09ea41dc53e6"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "b679fa04391979dd2b01ec4bcf2cb41c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "7ba88761bc78c79bacce43d2d12872a9"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "5c6cf176a8c624e8a8c0bd86bae85f1c"
  },
  {
    "url": "flutter/index.html",
    "revision": "ec381bdad220e43bc1c213d9d80147b4"
  },
  {
    "url": "flutter/point.html",
    "revision": "9db455ab4c9ed909aef72283de0b12cf"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d49c671d3a55b9de922937543b1351ff"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2442406d26720dffc3047018c071bd5b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1d8b1be1cb771e74051a11110141bf77"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d3e8f92f618773ea6d8e3687340afa6d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "92d535f5d7a485a58e7c4624b36467d7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "f832fe8d5b4c45bab13e71abe93f7387"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1522dd9653aaba1cb5dcf405ae177528"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a02f72fc73d6c925548cf5ae8f13a34a"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e2c6bbfe0ef9d3e684cddfd019d94df5"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "739f0961bebe390141345c03536b32ac"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "764e3a45e1f035728e17691923823a0b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9bc217ab580e06f556834dd85b1494fd"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "65d7271db634b3b20f6db91a56f18592"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "b3595ddffad6cfe0a32e53c296196b6c"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "12fe97a0616c6d3aa9cd4cf5413a6610"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1e93a0c4f4ed0b4fe2bb99d1beb303a4"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "bd26d5740b579519187ae81474de03de"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3bd937301de77fa31d3d5af49df08c87"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "bb5901f7d41666b6fc05c9dab9b0fdd5"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ba9626c0c2e2347b1cbe0bad41da172a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "de0db78062d39535201177b7547c558f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3e40a798ba0edbae352cf65024879c79"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "984286f1c31a8b392d71648a302b71eb"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3b6e0bf049aea4e8c1e05336bc05fd75"
  },
  {
    "url": "haskell/index.html",
    "revision": "c55b0e5faa16c42de4e4d48d92462a6b"
  },
  {
    "url": "index.html",
    "revision": "57a94145b995a4a80090dfab43833c4c"
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
    "revision": "81bb1c5d54edc5aa11967ef4029f2841"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "710e29e425f00e563281b905da1eaa16"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f4f962a0525af86f630b39c748de049d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "fb750f3d68c4f73be94253eb7031d10a"
  },
  {
    "url": "python/index.html",
    "revision": "f25d997f6502eb01cce5d34499cf85eb"
  },
  {
    "url": "python/poetry.html",
    "revision": "2311d374f14a546421e14333d4944ff2"
  },
  {
    "url": "python/pyenv.html",
    "revision": "c1bbcb8700cf91472aede827cc4bb9a7"
  },
  {
    "url": "python/python-ase.html",
    "revision": "04566dd7e079ea7e76545733b1b38632"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "9128d3f0acdf59f04c0c33c1c5e42361"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "bfe6b8fa16e4cc8da5c3cc80b755d5f0"
  },
  {
    "url": "python/python-file.html",
    "revision": "76719e717861cd9731bfeec98990c5c2"
  },
  {
    "url": "python/python-function.html",
    "revision": "1b1509f69b8c97e4035ae20b91597f93"
  },
  {
    "url": "python/python-generator.html",
    "revision": "04f6007dba191fe3beefbb6bbf7d5536"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "e801faa30137f44c45624225c83413a4"
  },
  {
    "url": "python/python-module.html",
    "revision": "b1813d3507fae520161be4248903c4c3"
  },
  {
    "url": "python/python-string.html",
    "revision": "ccb826b3a7abbb0b6d921ebb0e6a9629"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "a7a05eeaf559e3e4d7df208ada8ac7ff"
  },
  {
    "url": "read/index.html",
    "revision": "5ad96ca7838d8d0746b1990ded8b369e"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "d9f5c2f5ec2cde6a89712855d9ff5f15"
  },
  {
    "url": "swift/better/available.html",
    "revision": "9f81368d555e881cb5b3fd6e53d1ad22"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7f8f699be7a99f41eac71dd3c6c32380"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "79b7071c3dec875c747ed1c201220196"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "fa4173efbe5f3c152140cd1eb70e6c35"
  },
  {
    "url": "swift/better/di.html",
    "revision": "eefb478f9adb3c666afe5ee7cc64f45e"
  },
  {
    "url": "swift/better/index.html",
    "revision": "cc765c3a7dd98c7c174ad5774eddd5c7"
  },
  {
    "url": "swift/better/last.html",
    "revision": "5617591756615e20177897dcab1eb525"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "4153b5e1df5c39424fe6cf891ddc735c"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "93ce0ae019efa19b5db643502668ed00"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "36c7504900d4bd787e59106bae46f257"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "c93d75cb04856dc48560921f25bfdff7"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "7d02875222e901cdc9ae1aa68c653575"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ac698ecc3551f180af9f7689fe41e4c7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "1c1506276c4dc16a4a3f5d48bd0db4bd"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d9a6bfbcc7468227ae381692abd46fb7"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "927156f8295bc8f215ad6785d5250fa9"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "10ae07b8e23b6c7ffa8b8ef583b517dc"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "0be5ba37ccee6a6a4d105b48d7d01f32"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "64e52ad6f610f77ef5661014a0bf70fc"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "00d50e4797d43bdbfba3912095ffa703"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "14fa8d645d45e61903a3eb7d7fdce4ac"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "59b7ca0cb829d973f3587d4acfad4a69"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "349f5435ef27045e12cff312675cc219"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "7c8dfe016e1284cd54426ee88f9b0647"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "45265981c09c24a7aaa70765e3bd5496"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "e152c321620e05944f8ef33fa40fad3e"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "8b5dd79c6efa1af24b9378b794c07901"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "49d46a2db5e8bb8c19480254226682f5"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "ac830102568b66a67790f563caec8cf4"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "effa20183a781062cdb114a30e7e723e"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "a8847a8ef84eb7b3c0c11b0e555629b0"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c8de147dc066ed03ed16e8246bb28ea5"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "094cb52383f1d070debfbf59fb529094"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "2a5aa85df0fd1c4d07925a3bf2da802e"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "9c9cb7e3575aebee5a4c14785f089ffd"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "6403e8b408628ee1575747e3efae0e24"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "770f09849099c72272824616af25079f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "57b2796ef038ca349964bd8f0279c24b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "9b64763dcb5edd15702bf7a8c1cd4ded"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "f8bde7220efd175531199ba88e76cdc3"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "daad440ba5571b9245b24fa70e56d740"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "8602fd4c146a0e5428bb4f961eac000a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "3f3fdaa43c4db2c8a71230cb02ff7e1e"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "3dfed6b401ea1697ba38cd3e93a47210"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "62397ad5317b15c22de03ec5f404def1"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f7ab44e00d46a462f16f5350760cca36"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "80e8d11bc94ff6a24a82449749b52665"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "12d24d71d275f1da70cac851558adc4a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a2b813951641b952cf7fb4ad1ff0c750"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "7e2e372f8305f36e6a20fb337573b559"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c9aef0917bfe98eaa876246a708eff48"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "bf5a90341fb3f6c849ba5fa8ebab328b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "26441f50ff2142b9942fb205c96bb94d"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "eb8a2acc341a7b139091fb538e8b9891"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "377829eade227e4f49d75595d25a57c9"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3e4792b5d6d13fa5914acbd17a079c45"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "bd8fae0586c4885f5893f0cc8f0c46b3"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c3be5341a7c588b00694ae30b9e1a8df"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "546168ecf4e1ffee25746fe0153c7770"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6aa0da2864416579f90ce87c41842d4e"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "873914ae81f3a86dd8a007d7b3fae27e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b8fae9208c0f88630a93e6493d790c94"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "eb5ebb67bd8ae7c68b903acc63e1e9fe"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "5dfac5588d195189df5b61361c18ac9c"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "add96fa390334b318b4670d9d5745435"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "1ff6f2a972daa303b9941254819f04ec"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "195a124b26b219cf2fffba240089fc81"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "63fffdbedb3866a295ebf368525b3da2"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "c7bad41277fa2ffb07b871003a21039e"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "48340b5b15ba8d5629c4e18602ca25ff"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "28b21067f69ca7bf1e98269048a72bde"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f5da27faeda1b6ab14f4da9c89736bee"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "538a1126a20489575ed4aefe110fd3bc"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "fd8a6a4a1814e133a81ef4abbbb17476"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2e9600ee538981f3f87d4c43643f5342"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d81b696d2cc4c8d9b72ed8ea21ec7e77"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "7da943cbcfcab15c2607eab7918281cf"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "2c3364fb4f5b51e56392cd6313959efb"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "09dfb98409e5ff26498dd55664787ab4"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2ecfecf147def432229075f6e7b2dfeb"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9523e1e09c408d95a597978a41bfe681"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "f80de18a18e25f0cf8b875becc94630a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "4084763e5289767cc9c823b28a37a249"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "97653491d0f706aebffb7ceb97b54813"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "5cce8db34c068778403744947f825a43"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "8373767ceb7750bce5a86daee3352f82"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5d2d32095575653ef4f31ca80c782a01"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "69e88dbd64b60de0bc6426194bfad293"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3b368e39dbc785383373b211fa04ee2d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "83681edb1ae769f642994a059fe686bc"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "5e1a57dde8ec4b486dd855e4ea3aa69d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "bf2db14941c6ceacd15e3582c449f0ae"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "b4cad6e1be0128f5abf654061c469b1f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "cde3da02ba483ff99321ac7d7f3c515a"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "a522ec66e77605c1c0f22c92114d2579"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "5d9c7693359b14a3d8125e17d5c7828e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "1b4d509cbdfdb06b79fe2359b87f055a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "da54fd41957f4c358bd66c55d5dccd62"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "598d145de2ea43d31fa203d59dd494d2"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "e0d0823622fefa593cc35d6f0813424e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "58f807387d6956a63b3b1edb80870290"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "5e7306476a3cdc4f14f46413364d17e1"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "898367fb86ff4d2d58af3b68dd94b153"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "5121fe3eb37ae1ff378b3a2e64d72ba6"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "290adb843d22cf6b909363aafd4e49d9"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "4601e7fe755f634b52b53bdddbd447cc"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "15c8a0021be48e531710578ff4825e19"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9e8f017dda62fa13171b441a1c4f27f0"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "9914ce05c4330ab329b2f7d00580ff61"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "99377457ee2c0ac42c29f75d9bb6c4b2"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "567573f07d3c221d068bf7d0ea9c3299"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "2f155cd9eaf04c223097044539c3e46d"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "42e204a3db7d1d327e1f69c6eb172e1e"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "8602a6d7a9b762d5613c42f9c0d314cb"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "3ca61600769f7c1b1937c29a8173fec5"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "78baa718c41c1a281b027cebcc0f6b05"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "39c12ff15fe274f2f8273280d82482d8"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "02d1fc928594623fcdd39fafb532ad16"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e0dc39faa10858bd1655149cc24e6702"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3ce1565fc15609fecbe45874e6a64ddb"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "cb55d173d70a7222618b73315eb01124"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e7b462c105ce400a75bf53279466698a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e382ba48e451917cdcee93ea903212fa"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8a2d85cbf906cb24d0bc3efb6bec6c0d"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f523b8227854d95d92055ad6c7ce0c0c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1fd1e678a43924163c55f6ee39d1705c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "842e0a8e2b514ae0fb0089f783fe6718"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "24b9411701dca0a734d4212018910e72"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1730bf9062da5a886bddadbbcce476a4"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "6ab850fd76f2c3863d738d6ca6085e85"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "bfa978f014460959c1c9a1fa8b7c5db2"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e834bc29758fff8b25069a4ba9989736"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3f950c4cbbbb52752cee4ee23bc4b1c9"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "81936db7bb4c929621729d2fe53121e7"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "2d1b5534839bdaaaa44ee57d4b16b0b5"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0ac0f5fa2c5a066fbcd0693e45474d4a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "2ec4e599d61cddca258bab045fffd32e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a9df1431d0466ae15e5ac096c4b58cc1"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "7b565973f7bc2c5968c9a6226ea99203"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9a8cb791bf96e4761d9158dc1f6d9318"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "3584f75f7091d33c9b2db7e58c19a4f4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "eb7f930012e9dbaf97faed103c746af3"
  },
  {
    "url": "tag/github/index.html",
    "revision": "792d95be8517b2b9df9d0beef6ca00f3"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "6d9985beedce98ac0904fb9a43965ddf"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6c582793bbf8f19458e7069f6699a864"
  },
  {
    "url": "tag/index.html",
    "revision": "b4c07cdf934742ee271655744801a428"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4bc49558ae3dcf595453e6bd8cdedbf2"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "dc0b2d50c0d362c29ff73d6184e98aef"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "03625dc754abad86ca26362e228a15f7"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "70e0a38e54a11aeb4c0f6adcc38f55e1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9f6b8705058e5fc674789807c3abb17a"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "03155c060134b9b6208271231344bbfd"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "1d4881d9854974743ba10fed382be0f9"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "bacb35821ca61c0fe271020f0bc37b86"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c11a38ec9b41e7e9b220c6602272ea4d"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "a62ef0eeba9594b8ea6e3e379a105d59"
  },
  {
    "url": "tag/json/index.html",
    "revision": "24239c35b1463962976ee426fdbf6633"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "b453510ea39c6d5121fd6c36977a16c3"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "de29022d167dc6f476cce9487928568c"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "b59d1c8363b0c5a4807b27e19e96299b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "320a0c051b58e5a8394435082041ef6a"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "0c096621bd00b477f550d82e1105d886"
  },
  {
    "url": "tag/read/index.html",
    "revision": "9b94f36d10cb82d8af89d199a97dc096"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "748ca8b28b9da631396b6a6ba3681c63"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3ad431304114311b3c1fabac44abfd42"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8d88848965f28c5443057b0e186f5994"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "be96ac365f1e6fe8a579158bd38b6c20"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "55f13a7d7cc42e12ad87de800ddc3693"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "26811d28eb87be705188339fd013a5e6"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "8020ae082f30a63822592f8a74181148"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "c596b0ff0382e1123dcb22227aeeefce"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "35f61f1267d8e7bdaa474546eb10babe"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a98356ba7942a227883e3c2a48ba354e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "14b7e3301ff8c341edf5d2f3f503babc"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "61a97b950844fda3be28690c29a042a7"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "7e55ad6659fc07b3662574b4c8ea93d4"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "d2729c26175975be47a7d204c8b640ff"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "d3d02f9ca326ab7818297813e9ac9884"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "0e9f4a3cbdc42acaee5b43cef258af7e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "4701e54b80ed08a6c6345397ec816600"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "083a0acb1bb0c3fcf50064f633b140b6"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f8a7e57d6d1b0efd311b5bf6e815109a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c2adc7d2feb4c0afb81664af0fb62d24"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "133f68d317826dc28544216950d01a0e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "8cf696008c2a9248d1295f45e611dfb0"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "9d2df13d00ca5eec9ed1bdf2e8eded5b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "0d5e9064f13bb21f6dc8441e545cc5fd"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "f15c34413bc2c3ceacac27b49732ab29"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "3a1f4ba9e69525895c8556328ebbcaf2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1c5f8468c9c573886e24626cbd22fc6c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "9eec366fdc0513e04e1eb51e519af949"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "c0982c28fc7bfdf67aaae0f27fd37b32"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "97dddd15fcc3cccbbeb5a83c8d933143"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d26f6656952e22a5fc39300cb7f57a7c"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c1d57db200e64778c5f2b2906b605805"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "93e0c1e9459e3f3e6f34acdfb66d8620"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "80aa475f841f8644591975f0e619a7d5"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d5170107d8b04f63664a50cc031e8e99"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bc66c6dbf9dceacd7525ee942540d49b"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "fcd4bf54bd43f420b0813481dee4d313"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d9047811bddd031e345f71da8b9cfce0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "fc2ecddc6f1eda0028205a9c47a83c81"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f2ad3cef40873ffe93ecd76fa512ede7"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "a34ff11acc6781da3676931681b4386c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "87d4ade93d9df45544d8db16607906a3"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "36f1748932fe1c84b9a27c6fda304708"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "2a15b4cf610f598b5d6681ee6d2d84c8"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "fb9f38d987c961e2500448a3daa3a21f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9380b9d1155806c9930316fe62f0df71"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d1190df6d7d5f91fcf3c9e80287d5ba3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6e0ff0859e05c73bdc311a861a8b6eff"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "166f10f914882271f6c67e3278cb4b3b"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f163f18fb32f6880093817a2384103f5"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "556f79e2e799f68c43ff45a28e8a0b3d"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "90b8510393b3bb60924998d31db029ce"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "b31b042b68c7a0a29b9791827d694122"
  },
  {
    "url": "timeline/index.html",
    "revision": "9da1e83d188443845b2029af0840ba41"
  },
  {
    "url": "tools/docsify.html",
    "revision": "85392bc5dd9855e9299a39f1a578c610"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "eb8bb4f4a82de59f060a81901cb71ff4"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "7095c460459582e2dcebcbf177893528"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "790a570a38b5987fb4f0a172545b9197"
  },
  {
    "url": "tools/git/index.html",
    "revision": "db53e8c96bf265d821a0012b929b4db4"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7faf5437fdb527daae7b30a9e5fec89c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "078a0b791f6ec494099e9b78f6501b65"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "15c00ec0483b21569acb42e5595fd767"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f7abf99af04315d26d9bce48d6d0aebc"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "2f8d165609751b21dc691686ba5599df"
  },
  {
    "url": "tools/note/index.html",
    "revision": "db2957e3b838f722367c8ceb74948a6b"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "2d004f878d59cbcff006410c8bcc75db"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a98d9f4e6ff95119da33324bcee5ac72"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fa986056cf1a0b02601aeb773b7044df"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f5750f1045e1dd86433601f1a9e94cdd"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "8421cba855edfb3e494fc4ceb62f869c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7efe3ed3b67d062326c3f78155341bff"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f2675848e15d4e3c0e7e96423283b1be"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "eae3da4c948dc1d4b88fb631a3df2cf7"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "967d35ad36bf806db9a0bc3f67a1aa0f"
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
