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
    "revision": "b0fba33c735a0defbe35f952eee17068"
  },
  {
    "url": "about/app/index.html",
    "revision": "9a415696d36452d3c19e91d5fece0b34"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "27594573b6ad2e8fa406fd777cc18497"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0868b4b01a219461e8c7344af190ce6f"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "23a20d3e1cd44ac307858c0b3e0f157c"
  },
  {
    "url": "about/index/index.html",
    "revision": "e3fd9f97565464e12705e3314f5c7127"
  },
  {
    "url": "ai/index.html",
    "revision": "8535c948801a5e4484e45ebb7be0b196"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "34ea7aa245f5a0c6fcdfd5266706a39f"
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
    "url": "assets/js/106.1fefdff0.js",
    "revision": "e79491fd499711d294cc8c612c4918af"
  },
  {
    "url": "assets/js/107.8d1c3550.js",
    "revision": "a6928049abf27e972d2a20c3ffa637c2"
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
    "url": "assets/js/120.a14626ac.js",
    "revision": "b6d3ebb858bde9286d00d53f31e9a0f2"
  },
  {
    "url": "assets/js/121.2d45e7a1.js",
    "revision": "84ab6a824827f90008e56b1e9a0e1e0a"
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
    "url": "assets/js/127.c28b074b.js",
    "revision": "aadd4e1a623165f6ba0ffa96830f98c8"
  },
  {
    "url": "assets/js/128.ae855e51.js",
    "revision": "eff2f9710f1428b17d20b63095e25057"
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
    "url": "assets/js/134.fe92c88a.js",
    "revision": "e151ed5befc6f1185f02c12e5595c2a1"
  },
  {
    "url": "assets/js/135.f6691aa5.js",
    "revision": "21f3cfe09e5da3ed67ebd6a33438636f"
  },
  {
    "url": "assets/js/136.b2811f5f.js",
    "revision": "860c20cd59c57b5596ba2da912bca5bd"
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
    "url": "assets/js/139.da2a1cff.js",
    "revision": "bca3a99729cdd51cee7e078a447e392b"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.c51230e4.js",
    "revision": "654f120662aff14da638eccb9d251cf7"
  },
  {
    "url": "assets/js/141.4ea73100.js",
    "revision": "262681c57beed62030ce5c16c5ae82eb"
  },
  {
    "url": "assets/js/142.8ace1142.js",
    "revision": "8ae881cc9512ce0e2d61f0121c0c705a"
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
    "url": "assets/js/147.c9baae5a.js",
    "revision": "021aae85dec240f4f79c6f1a24274ddc"
  },
  {
    "url": "assets/js/148.1b2fb585.js",
    "revision": "396f4bbd61cd60e7a7bed7dca7e374a8"
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
    "url": "assets/js/150.5a989870.js",
    "revision": "f2a0c77f90b33d6d7a94c2d9f81afb82"
  },
  {
    "url": "assets/js/151.dc1434ec.js",
    "revision": "2d576468cf571220305721e76491a6bd"
  },
  {
    "url": "assets/js/152.a8bf93eb.js",
    "revision": "4a440d96758addb29e4538748eafb04b"
  },
  {
    "url": "assets/js/153.5e72354d.js",
    "revision": "d4f696aaf38c5de98bd4c1b160916c9c"
  },
  {
    "url": "assets/js/154.81bb52e8.js",
    "revision": "ff2038c94e9971c43d2258a1b0ff9bad"
  },
  {
    "url": "assets/js/155.fe694d8a.js",
    "revision": "9e8ac70aafe7a1bfe07b769388b7ef5f"
  },
  {
    "url": "assets/js/156.4fc7212b.js",
    "revision": "f89c712a782f1d08820dd89fd857a26e"
  },
  {
    "url": "assets/js/157.7b2f726a.js",
    "revision": "1914ab7b65ab39410c71976ee865a7cc"
  },
  {
    "url": "assets/js/158.400e732f.js",
    "revision": "dd3e4ffba0eb1a9b7518c81a072ec81d"
  },
  {
    "url": "assets/js/159.882910ed.js",
    "revision": "285623367e086f5fcb6290e49e3228b0"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.ea03e490.js",
    "revision": "98e649fe8694a7403089ee1b1fdaf1d9"
  },
  {
    "url": "assets/js/161.b57d0af7.js",
    "revision": "e934c9d59a4728aee3e716450aaaf1d0"
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
    "url": "assets/js/164.4d671528.js",
    "revision": "f5cb172aec6397306f145a96ca17b0aa"
  },
  {
    "url": "assets/js/165.ed317911.js",
    "revision": "88693b2dc0138f94bfc99a87977037f1"
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
    "url": "assets/js/172.802df7f4.js",
    "revision": "3b0335a88b02794304cbdaa5ce02af06"
  },
  {
    "url": "assets/js/173.602dd0d4.js",
    "revision": "037c9521799e79e4dd58791587108ea6"
  },
  {
    "url": "assets/js/174.19f599d2.js",
    "revision": "b8bd5e858adf9f467a0200b832624322"
  },
  {
    "url": "assets/js/175.a16042b0.js",
    "revision": "0fccd5ee73a4ab7f302b9b9900d4eb92"
  },
  {
    "url": "assets/js/176.da6cb384.js",
    "revision": "f1d1fa0af49b182e9507fd3f969d14d9"
  },
  {
    "url": "assets/js/177.004b4220.js",
    "revision": "04018950b73187771715dbbf47a4dff8"
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
    "url": "assets/js/180.d51e2071.js",
    "revision": "e5a6a866e177de0d5a526df5924f0101"
  },
  {
    "url": "assets/js/181.d9e51912.js",
    "revision": "f4370488573cfb32540d9ec21140ed87"
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
    "url": "assets/js/186.42ba7630.js",
    "revision": "9fe73c0dbe66cf91a4f3731f29ef4d83"
  },
  {
    "url": "assets/js/187.236ca981.js",
    "revision": "ec68ebb86fcb32796f1d802b875a4ecb"
  },
  {
    "url": "assets/js/188.cfbf2e29.js",
    "revision": "8baca0d7fec3bd52065b243a042b8fde"
  },
  {
    "url": "assets/js/189.7cf6b385.js",
    "revision": "0249166044d06ade8518476f1c662452"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.ffbddab4.js",
    "revision": "60964a27fbc2f875f5af13aa3ac3313e"
  },
  {
    "url": "assets/js/191.b64f610d.js",
    "revision": "c94f605bcd32fd171c026070cb46e7b3"
  },
  {
    "url": "assets/js/192.c0c130fa.js",
    "revision": "aa25209d3470739c2bb903f1d9fb441c"
  },
  {
    "url": "assets/js/193.ad529f15.js",
    "revision": "13851d52ee39e6a6ceae86111b9abee4"
  },
  {
    "url": "assets/js/194.1297fbea.js",
    "revision": "358ae554c4624a52fd3dd3cd9fca517c"
  },
  {
    "url": "assets/js/195.cf70b209.js",
    "revision": "03284304144f10ac0c98c68365314616"
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
    "url": "assets/js/198.202b668c.js",
    "revision": "8f149d3fa64f196e36f62d7f59a9c0d6"
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
    "url": "assets/js/200.2fb9be4f.js",
    "revision": "e144c4e65358ca3675c1891fa56bed06"
  },
  {
    "url": "assets/js/201.ecb9c4da.js",
    "revision": "3fab67bf8c28703141bc44541533d63b"
  },
  {
    "url": "assets/js/202.215c8238.js",
    "revision": "3a95d9205c76a3ae7e40e7f2a3bf5d28"
  },
  {
    "url": "assets/js/203.842e47d6.js",
    "revision": "4714a98a0d43575515c4625293ca7351"
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
    "url": "assets/js/206.09f5ff74.js",
    "revision": "a3d9ba034d7c7868fa88e4ffebe97251"
  },
  {
    "url": "assets/js/207.067c450d.js",
    "revision": "54a64bd3c792448b3ef0aa56de117069"
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
    "url": "assets/js/216.89e3b610.js",
    "revision": "93161955e08651272e4a27a0e02ca4b3"
  },
  {
    "url": "assets/js/217.a42cf697.js",
    "revision": "989fd5ec23ced2f22f8a8679b1240459"
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
    "url": "assets/js/222.4214e50f.js",
    "revision": "45a45a4b675d7a23aa7453d1337a2c53"
  },
  {
    "url": "assets/js/223.2d6379e4.js",
    "revision": "2b6bffb457427613e29d72b631f4b1e6"
  },
  {
    "url": "assets/js/224.4bb7e421.js",
    "revision": "63078cd27dab634c90969bdc8a9e00ab"
  },
  {
    "url": "assets/js/225.bd49dbc0.js",
    "revision": "64191bd7a263b725beef81e19f4a563e"
  },
  {
    "url": "assets/js/226.ee3cc3cd.js",
    "revision": "31f2764de39e7dcd44d0448a9d15118f"
  },
  {
    "url": "assets/js/227.97def73b.js",
    "revision": "b733985f3b22391178e0ca6a391c889f"
  },
  {
    "url": "assets/js/228.0015f4dd.js",
    "revision": "15d36655c240baaee84cad9144bb93c3"
  },
  {
    "url": "assets/js/229.97e69efd.js",
    "revision": "0f32ac1eed1856374ba892f96e09d726"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.cec03173.js",
    "revision": "17f82cda1d0eb9bede79e92946a7eb41"
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
    "url": "assets/js/238.2153be96.js",
    "revision": "aa02e2038c6fc0de2e1d509b0748de25"
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
    "url": "assets/js/240.598e57d1.js",
    "revision": "18c3b8d8be92a025b384123e82deaeb3"
  },
  {
    "url": "assets/js/241.1bf089fa.js",
    "revision": "541059a6e0a4b5f4d5b7742112d6d9de"
  },
  {
    "url": "assets/js/242.8e534ccc.js",
    "revision": "aac342cbd7bf997cbbad4fe12b2f793b"
  },
  {
    "url": "assets/js/243.3ad16005.js",
    "revision": "02f4214f0c1e057284ac4be69f5f3b05"
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
    "url": "assets/js/247.2c5aaff1.js",
    "revision": "a6c7973731069515e85d498ee58695ad"
  },
  {
    "url": "assets/js/248.33e20f85.js",
    "revision": "ee20b8fe4f8092df5f8cab866611ed33"
  },
  {
    "url": "assets/js/249.4dd8d0ac.js",
    "revision": "ec2060b7686331ec544216f753a93f26"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.c7f89c06.js",
    "revision": "1f61a23c7d60cb8c5faac37f0cefd2b9"
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
    "url": "assets/js/256.7dfd3017.js",
    "revision": "9aacefae466d89b589b932536a2b8e10"
  },
  {
    "url": "assets/js/257.c20268ba.js",
    "revision": "b745c10f15ddb8846be676e4b4ccf700"
  },
  {
    "url": "assets/js/258.39b6c7e1.js",
    "revision": "46b95430b89da26a29e266a8f0ea19b4"
  },
  {
    "url": "assets/js/259.b18992fa.js",
    "revision": "9261fecc236f4efc8a81280ebc099924"
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
    "url": "assets/js/262.67f14623.js",
    "revision": "c7441ddd167b42b8ef8aba892a720172"
  },
  {
    "url": "assets/js/263.fabc9041.js",
    "revision": "6bc3903cc1093ad705f5754b46d0857d"
  },
  {
    "url": "assets/js/264.172e81d2.js",
    "revision": "efc2c8065a0081a4bdbfdfba85aabf65"
  },
  {
    "url": "assets/js/265.9422a189.js",
    "revision": "c10002988c87e129f020a98ba0c36224"
  },
  {
    "url": "assets/js/266.b8f7d455.js",
    "revision": "35a459462f2b951141c114d0180d1e02"
  },
  {
    "url": "assets/js/267.d1f551d7.js",
    "revision": "ebfd440e750a0fc0039624c9880a54ca"
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
    "url": "assets/js/270.f4c06268.js",
    "revision": "ff706a555edc846e6b9c4784bfeb61cc"
  },
  {
    "url": "assets/js/271.33eaff1c.js",
    "revision": "9c3b273839b38101b7922d268392dd3c"
  },
  {
    "url": "assets/js/272.d4137094.js",
    "revision": "ded09062d42333f337b1381f2331a4af"
  },
  {
    "url": "assets/js/273.0456862f.js",
    "revision": "a998e4bbc0959c1aa7cc550a3ace4127"
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
    "url": "assets/js/276.f39b030a.js",
    "revision": "593564c68407fb2c64a5b13ded5c4ac3"
  },
  {
    "url": "assets/js/277.a798a139.js",
    "revision": "c9a2a3ceed6f0a8d465399386e8573aa"
  },
  {
    "url": "assets/js/278.70d9c25f.js",
    "revision": "fb32fa9e08d65ad174737d2b6cdb5374"
  },
  {
    "url": "assets/js/279.00374e95.js",
    "revision": "577e75f219014bcdcdf7ab63901fd473"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.f7ecaa9d.js",
    "revision": "ca0ce2be8d755572a376cff211c796d5"
  },
  {
    "url": "assets/js/281.7c5e3a38.js",
    "revision": "cf811327a2270c53d08e11c721606f86"
  },
  {
    "url": "assets/js/282.bc6b699a.js",
    "revision": "22b352e3af7d125dac4aa47cedbbfd84"
  },
  {
    "url": "assets/js/283.1e173a95.js",
    "revision": "ed51d24ec16e6743f3bffebfdd45ef74"
  },
  {
    "url": "assets/js/284.2ec97cf9.js",
    "revision": "43096679da291e5dfe16d2c9172beef5"
  },
  {
    "url": "assets/js/285.a633c43c.js",
    "revision": "9d68b927a90d3312bc7a026991697cb5"
  },
  {
    "url": "assets/js/286.12a127a1.js",
    "revision": "1b26c9c9faf9bac3b8d7b94fcc3e7d48"
  },
  {
    "url": "assets/js/287.46953a94.js",
    "revision": "c2fbf82b0de0dbaafe0f260d3e201052"
  },
  {
    "url": "assets/js/288.767ae1ef.js",
    "revision": "fa1c2a4c82fdca5f646896123c78f205"
  },
  {
    "url": "assets/js/289.9129d676.js",
    "revision": "2556f54f76314ea7e0c107e8e3afce69"
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
    "url": "assets/js/292.3a10c4db.js",
    "revision": "f7d3967dc1e1d1290f35064183f8e791"
  },
  {
    "url": "assets/js/293.abd2001d.js",
    "revision": "0ee32492fda6b4a9cc16fb3a2c1af873"
  },
  {
    "url": "assets/js/294.c255fefa.js",
    "revision": "83c1112d9d4d73b2d848c42d6d7e4f39"
  },
  {
    "url": "assets/js/295.73ff7dfb.js",
    "revision": "0cee1656cc5c07e2d8179d664d6d4f9c"
  },
  {
    "url": "assets/js/296.bd12da2d.js",
    "revision": "d090c3661c01de026bc22105de32afdb"
  },
  {
    "url": "assets/js/297.8a0df1a6.js",
    "revision": "916f858fa2de111139a81d372e59ff5f"
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
    "url": "assets/js/300.8c92bacf.js",
    "revision": "6b59709e875be960c940cbfcf16bed16"
  },
  {
    "url": "assets/js/301.47016a37.js",
    "revision": "2e55654d705533c32bae82997f4778dd"
  },
  {
    "url": "assets/js/302.263ff472.js",
    "revision": "d53536f1a1f4537a4e4cf6b615bafac3"
  },
  {
    "url": "assets/js/303.87176830.js",
    "revision": "f41f848f61e0a812ba97449b38fd2753"
  },
  {
    "url": "assets/js/304.a5b50594.js",
    "revision": "753ba289db41f1338ec5c0424c0e2045"
  },
  {
    "url": "assets/js/305.721e5759.js",
    "revision": "52d888e5ad814011afdec6565749301a"
  },
  {
    "url": "assets/js/306.5c4ccc57.js",
    "revision": "ae59b084f48841dff308b301118b12ca"
  },
  {
    "url": "assets/js/307.f2493077.js",
    "revision": "f7fb93943650212513571c90ba8a831d"
  },
  {
    "url": "assets/js/308.7822fc17.js",
    "revision": "a9e9af409621f2c43a49ced9e0bfa911"
  },
  {
    "url": "assets/js/309.f49aaf3c.js",
    "revision": "582e9fb67937699937682f015e7af8f9"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.a6488833.js",
    "revision": "a4cf2146338667aa107cd562bc756784"
  },
  {
    "url": "assets/js/311.0e04a350.js",
    "revision": "028648d26de2e2c5312f8b652e8b1d69"
  },
  {
    "url": "assets/js/312.d20c1080.js",
    "revision": "f616b2d4f33e2fb0ed3b67dd0fea75c9"
  },
  {
    "url": "assets/js/313.9f42c381.js",
    "revision": "9406bc834f2168a16187fa1637c710b8"
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
    "url": "assets/js/316.32ed3934.js",
    "revision": "687f0c9c475a967e9dcb88206ed5942e"
  },
  {
    "url": "assets/js/317.5efebf51.js",
    "revision": "6195fd74292e41f04d4c29e8cf50a77f"
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
    "url": "assets/js/40.d971e58b.js",
    "revision": "a9b6901f829cc6b82509b3640687c5af"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
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
    "url": "assets/js/44.c8996bbc.js",
    "revision": "b11c4c3cba69f7858175f9259cdf3697"
  },
  {
    "url": "assets/js/45.d3f323c7.js",
    "revision": "5406a8f16fbdfd19b72d5af0849edaac"
  },
  {
    "url": "assets/js/46.c50112f5.js",
    "revision": "5d32f5ebe0353b2bb5e5e983f0c22e8a"
  },
  {
    "url": "assets/js/47.fbd94bd7.js",
    "revision": "d5582169499c7ed266f3c52b2da1d28d"
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
    "url": "assets/js/51.cffd9d00.js",
    "revision": "e9904e816d5bbbb3668ab1b1ef10047e"
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
    "url": "assets/js/54.beeadceb.js",
    "revision": "ba5ca699fe4af5fa7dbc69a269f5034b"
  },
  {
    "url": "assets/js/55.d2c56783.js",
    "revision": "fdcc315e573c3592238d34fc8c4e376c"
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
    "url": "assets/js/59.3c810c3b.js",
    "revision": "02b6abe5d1a49bd7711825ab312245dc"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.fde416a1.js",
    "revision": "cb2fe0ba450ae6f2be3ec59ea663e4e1"
  },
  {
    "url": "assets/js/61.a1f65cab.js",
    "revision": "7bf61b1f8b3f3fca6c000ade280ed6ea"
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
    "url": "assets/js/69.85988572.js",
    "revision": "966f849c39b8814a5543b297fe37147c"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.d512c3f2.js",
    "revision": "e0e28d5833717fc38d8d9d758957c3a1"
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
    "url": "assets/js/73.d6177d1e.js",
    "revision": "36df1de6f5280d40750db10397ee4be7"
  },
  {
    "url": "assets/js/74.7ada5acc.js",
    "revision": "7519aa6253d96605e3a8d95da0c59f80"
  },
  {
    "url": "assets/js/75.f4c3f6b1.js",
    "revision": "286c22e08b254b07653adc157ad83ee5"
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
    "url": "assets/js/81.e0f40422.js",
    "revision": "397fa554d030dbf80831344d52726348"
  },
  {
    "url": "assets/js/82.a3660e5c.js",
    "revision": "047f76cd07451f70e920dcdc634395b7"
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
    "url": "assets/js/87.83019ecc.js",
    "revision": "2cd8526b924b4a11c2fe8d2088e3668a"
  },
  {
    "url": "assets/js/88.e89d7967.js",
    "revision": "66e72fa7dd5e3e1fbe5a447914584f70"
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
    "url": "assets/js/app.0383fdff.js",
    "revision": "45e81b823c4ab08ccbbeb92b46c5a46e"
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
    "revision": "c7da3dcd1aaf0bb3029bb63bac37d066"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "11d12f0376374f5ee387a666b2ac2235"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0b3d9d9ce2ea8e920e07a5fa393a5139"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c4637c8e023d16c03ac613731aeada57"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "1478cbe72c1a7bef9d0b28984a3a84bd"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ea91e68bff440cb6c0ef090b19cddcd0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "60ac41460702f7344c1319d65f4514ca"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "26f65041d0ba6ee956bd4ba7ef50607e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9568733962dbaea4a6d1bcb0a150e784"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "739a80c874c8c29a65f9a7b9cde1e1ae"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "763d36ffa3a3066db8ed1eed48cc31c7"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "29c51fba737946a1ec6c7c0b0ee8305e"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "fd2f471ccb512a55a5c76165e9f1e059"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "7e268808cf0fa8224973c812ed00eb42"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "955fc3cfcb61ee4f48c2e3bb86768fb5"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "da678754bbfc4cbed00ebc669c5536c6"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "1ca8d2f2b99f6ecb24dd0e3a243dad23"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "4ca7d646e5fe9c822216bba1e883b534"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "9e531863f7aacb6801069067a2904638"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "2dbccf88d36621ee585eccf8555a6742"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "66a306560b4af05c08ae9ff127a11106"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "412d55ef6d881d5eceb36a933a736440"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "cc6c97c15a76dddfa050f85518443750"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "bd24965e6e8d4033056782e3d20cc1f7"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "360b80f68d162f6b17dfaf0163e0f7be"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "065cf0f38fb859609f7e8473da7ca62a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "39e78751ddf18bc0e835206377d91b62"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ec6879353ee6d43a87f91d307bc6492a"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "be3b27b9e4e933ca1951b41c273980ee"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "02d814b27d5b66ec59fb7f2b811ee1fa"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "7dce182b92c41b21746492edfd23d9f2"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "fd7ebd7115f1ad535b162c3069338295"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "c33282e39009509f3552092a47b7b72e"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ff0332b75ac53f6c66494edc235e37dd"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "06b8ec42cae4a0c7db8947e8503dcc9d"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "413d2e14ed94fd36048555524b57380d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "36a3c696a967e22903875b874183b371"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "8246f907147f32c2a495b573e3ecaa6b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1d673ca4f8656d3c5d04ca14b6666bf9"
  },
  {
    "url": "basis/os/index.html",
    "revision": "53842487d2993f430886c0228404be6a"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "431bc8349aeadabd9389c61dd0d8f418"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "14db2fd58abf7a87dafd553449ec512e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "aa79bd3fb1cedf38f5aa6c6b1e448f72"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "1941029addd9f5bef90913a3f657817f"
  },
  {
    "url": "c/audio/index.html",
    "revision": "eba6fe2108a9ed0976c1cef4654a52a2"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "7f0a78da3c72e614d72e1a97405d4a3d"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d31fdb62f16b1a0efb0de0a765b7b4d8"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "c078f6d6a1e3c41789e197fd36219fe4"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "1c9e290c75714cf342db7a61075c9033"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "eba3b96b04e8091f0c2dc528c437e009"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "11cb01edb1870c6959f31a65311f3bfc"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "fcd6b505c257a281dbe857c04276824b"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "a94eaade41e22de8d405d53d172ddd0f"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "d73aebcec65ffecb0c406d518807431c"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f9b1467b6a26031b34901e9cbb853421"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "c186d47c5dcd6e1c9da4884e441ce54f"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "9cbfaff83ef87a96d319ad01bc48516b"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "ca24b887a2de2e6ab86da1f02e7ba5ac"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "5e7d0b1b806db2cb11f85c1fa1126d40"
  },
  {
    "url": "c/program/index.html",
    "revision": "06ccbba0ae63bb1ff84b0779131bec57"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "e8c2cb65dc854864280c80802f04aaeb"
  },
  {
    "url": "categories/index.html",
    "revision": "0ba35315279cc6d1cc152f170974c4d2"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "efd310f2be5c063505774aaa2cb1f5ed"
  },
  {
    "url": "figma/index.html",
    "revision": "cbca5f6bc5a1d6a8d2349153ca311fd5"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "3944cb41d84364010e4e464932efa614"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "cc10a58467ffa4dee6a50816cab20e50"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "1c431b59af6c4fe48e1cc07e6fbe44e7"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "62873a29f64740d0e995bc45d946d378"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "2d8e94dade7aa96c3dc35ddcf6376151"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "9b31c2834c475fa33acd671beda85d6a"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "d18044e01fe674764f5c073da69c80bd"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "1d4bf685d1b77d68e44c3a03c41e0b6c"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "1a8831fb73eed0e8aa61d858b6ee3537"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "fabcf244b670c8a375bdc4c47d19c835"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "0df6c41dd3f3e64134f74a471b61e403"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "39a3acf844cf095bd3e2368736d7fb4f"
  },
  {
    "url": "flutter/index.html",
    "revision": "4636bd1ac8e82f065094267aa06a3a0d"
  },
  {
    "url": "flutter/point.html",
    "revision": "c90f3d35434eb68cb030d30292b93a67"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a5048113c54fe286ac11093416a57fef"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "63c7d23cd40e9c2fc3a16c4587770f26"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a290d540fc7eb2fbcb91448b346958f2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "43293ef14960814352d66c05852c65d9"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "72e79cd417f7b5a46a40a41bc9ba2625"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6f05a7498f91eb75e5c398e3a4e0f217"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "38b952dfb9d9cea9fd97716cf42db963"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "c1480d28bdce0724992f266b53ac9f40"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "83e11902e716a610c3cf3159d2a69e36"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "5574956e76d7242d4b41a00baa9f2a03"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d03ba0409ee9702f3e8c7c8dc75d0d19"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9c01e3a5831fa899ccc3044b85278b8a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "747ccf36db6763f7be43fa234e707ccc"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f1e54b09ca2a758dafc035abd41b5571"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "e800e3902857a0c3b36d4180fa22fbb0"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "219974185961834e5c18416d88c33c04"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ae792efceed86981b62ad3fc5d58ed95"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "0fdc74b35df32c2021f2a50c2265cdb4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "cbf242857d71de6fc9690fa18595f42d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "7897f71f848f714194b9d0b220ad582f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "3a28a095c5944f358c4427c5f2beb688"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "cf244e3736e8330ad0f6c28fb5b8318f"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d01411918940ff5f1a128efa93827ed2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a633cd338176aed1ae1b8ecc18114f54"
  },
  {
    "url": "haskell/index.html",
    "revision": "8032fc6842ce6ade58ace2fa787c6b67"
  },
  {
    "url": "index.html",
    "revision": "334372a4cca8d6d288a7dd4e69c44547"
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
    "revision": "c2f9830838942511bcafc64d386e4273"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "206708daaaffaa0144a59bbf40b85fef"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "bd864e59cd8232b66b265c33f3df3719"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d1f3155631b32a6338f9efe9affcb641"
  },
  {
    "url": "python/index.html",
    "revision": "4ca50a76d43ab2b7551208d9b341f5a5"
  },
  {
    "url": "python/poetry.html",
    "revision": "b45731e4fa839ff5252d730836e2c79b"
  },
  {
    "url": "python/pyenv.html",
    "revision": "202970dfd7b0c403081bcb4097c0a4bc"
  },
  {
    "url": "python/python-ase.html",
    "revision": "aa49691927f3a484315a7bad1cb266d7"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "9466c74d1743719054f95a40f4c11a5c"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "3d95925349f69fc64dc9860db3cfb056"
  },
  {
    "url": "python/python-file.html",
    "revision": "5a389b8ecc0bfb4b0d5133e1c41ae36a"
  },
  {
    "url": "python/python-function.html",
    "revision": "094b8aa0821cc90f8010c4863a797d9b"
  },
  {
    "url": "python/python-generator.html",
    "revision": "aad88d1477ef52b530b95a0063c74f9c"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "e708b06f2b6acb845e9e8ca8e6d43103"
  },
  {
    "url": "python/python-module.html",
    "revision": "d148926f158a73a23d7f4349fcb11400"
  },
  {
    "url": "python/python-string.html",
    "revision": "075e2b12a8a75100cbbe7e83be623ef3"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4b55078c6d6be5695c7ecea0732d950c"
  },
  {
    "url": "read/index.html",
    "revision": "687352e6a36ddcbe617bd07452c43211"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "646ffaff0546c33bba66847e67db2198"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2a9fb6e12e15eda110a830890b25951f"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "993e80cf1cc31f2b2fe94995e313332d"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "89517d52c2eee5a0b77b0f8177e5e68e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1e8bad082ef68e062606720fe8506647"
  },
  {
    "url": "swift/better/di.html",
    "revision": "0700f8044c72757d563fdccdf76cbab3"
  },
  {
    "url": "swift/better/index.html",
    "revision": "6f87ebe81315912a6c518ab490e4f045"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c82354df4b409674a5a268c68bcaa9b6"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "534b75204f9e5cc0407184a89a6f4f2d"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "7338e62cab9f34c2cdf1995bd4547cd8"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "8288727d1f8de94e7f26ce22061c296c"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "a990209548c9c9673747d9ee17a4f200"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ea2e310c60a1e400ba0061ffbcf7ab0e"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "2551ca575b2cb2cb45497ff19a53e65b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a6bfc362e8ddef1f369921e7b703da7b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "09f4f5deafab1f4a14e173e5ea9834fd"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "072a2701c4117a89cdc4be6b5ced7a68"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "7d7a6a430cb809599424425a619bda48"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "da7db65ea9c30592eb2887af46da55e6"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "62d00cf4054acbb1526505ffb88234ec"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "860740bb70fbd7daad3c6f8ccfb4f8b0"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "5987d4b5487a73db476bbc757383bf56"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "9f39d4498199173621ba9e964bfababb"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7466c29bfc91286f234758e5bd645b82"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4ece8eb121d8971823359d48a6983f05"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "8775052b70635f5ac029a606d0e597c4"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "49020572613cfda749c87b52c7e45236"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "40040c0303ccad1bba8fd216c8d4dfa8"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "1cda9901f4200e922df57c8291bdba19"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "f23c10049826b1537a3fdcbfcddaa3c3"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "3db56d2bc63957e559796a7af6fcbae1"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "10ccebf1c87ca401b04e6997961cbb6d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "a3ad4ca3c3d872a476bd8b5f94e08c01"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "b58a6880d3e5eeb4bdf92c453789ae80"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "ea1520c056690ee8a4fe2105054a8ecc"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "45f46006dc799ff5ecec1dc7aa7051df"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "eed35c27f9fdc0cf204d51b1a6cc850e"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "95a9b05859fc7de448f1bd21da3958d5"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "cda6b139ee8b7ae5e8665961068320b1"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "77d74f74c5db9efca3eba04ff1bcdd57"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "691d87211b259ea1c4eef192713b5fcf"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f8e2b2773f511f9e379cd5e090b06999"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4f172bc511f7eb4291cc2ac3899ce982"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "623befa320837c820a38cc357591fe45"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9ea32672bed950e18bb9c5fe34db2b12"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "e83032daa27ec013255ef04452a64890"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "5e1289609bde4d7f7106bda96435dacb"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "7faaa7746716de16cd3c541e413ae698"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "a1f030841d9d17df464ec07177b1a260"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "31c02cbb7ed0581f952b87625f4c5fa3"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4ee808bba28f4c37579fb2b7825b3abb"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "54a6f7d350b4cd2f5e51983b27b338e9"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "76e5daffeb0041d8632f8db1248fddc2"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9e4c09942cb89b1aed451d74bcfc3ea4"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "59217e911ef1bc62cadc89f6041cb899"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "8872bbbac3d468e9e8e0788701805f0a"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2d690d377b26d40c796d44e03adeb3fc"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "82d6a39c855e4abb63942ec7e02e1840"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "80f76cdadf54a4e25dd9076c779a7c86"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ae57c26a624366a1304003e8c057e620"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "eabf99caf26dd447d5eebb6e77610a34"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ec67f14e9520add087abff7952075036"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b429ad3fa4a8ca22ada50a0430d238cc"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ca460c8d740cdc000af8a2f828f02e75"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "2c182fe3a3fec44d4dab9ae137e78017"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "7255475c3fd5b17596c9f2deeed2062a"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f947cdf4f5f75ae04f9eb40f2a69fde3"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "56e2890dc647fb54903aef62b997954b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "286150dba15316da8df5a7231b320666"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "22b6b4404fed2451a55e7a4083939366"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "eac5c990cbcd6b6c85573208e405dcce"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7d0ab1ca670aefe02f60ddd7eacef04b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "3c7fe6329820b9c7b6b2adae9e83f38f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "58ac2805a4536f16cffcac6154a3c859"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e326ea04844039ee1237b82095ba1313"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "eaa9f0fdc6a06f5518f35d4f58e2b87e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "2f4ff51c7242805953b81761ba3f93f9"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "9f3770a929ea5f6981fd5dd64c4d83f0"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "8a795dadcb3d6b669fc2e6f9b5429188"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d7ca8e63c560619de25544689d2134c7"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "43a597d20169393a1fd5de6e58cfcb32"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "58e3e7ea5ffa2ade83f414ce4882b6df"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "f56e287968ce3fbd6e5a502db0fe5c39"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "ab346f2921d27ed920b6e01e39a40540"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "ed10fea1121346d2a5105259cac2f3ea"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "ae8e5bea0fdb486e78aa15d9f0dec4be"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "6285480afac3270375d40171fd7268d8"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0c3529f2966edcde9f3bcffecebd51c8"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "85bb3c211264f99d42accf43ba12539f"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d657d00979a7f2f9fd98334644d70247"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "78b4d774449c85a9baa4599770faaab2"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "e0729fdd91c2a8b5a826f74bb0060e24"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "d51828f9f7174b581dba8303bff9e9cb"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "28e0462c319385d7ed7cb43fcf2906bb"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "861168a7ad02aba2280cd32266d66b38"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "4f0bc3fc6588e9eaf64e6dc79d13e75b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7c8b8318e24bc344f621fa493be768ef"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "91ff257aab3e2c5a9c538f94182c3a68"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "762db3c6e4108c68876cdb72e08e7692"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f685fc0b1a5808e1fb6eda261d5eab01"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "a29ab41008f8142a499819c9af74145f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b458bb2669074da191ff5da4d3f20a81"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "3b6a06607c71696d05899d3e298be733"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "ddedd2334432f932f3c8dd3d9ae35d58"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b00a804b72edae0706c783935c2fc7b9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "3573645046e11d5384ad7d46f4c66ff1"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "5ecff207458c2e1e934f6e8b3d516445"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "65d1bd5ae3155855a62470074070a506"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4782752b7e992b03e912d57e305bbd83"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "408d405bcffab7c22cac4a27f756a6ca"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "2bb96653796d006b4b47d497dd498b2e"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "bdceaf05ceb64a6b9c7f702aa753437c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "9ee91d2d062d8ae2f94b2101b6aada8d"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "991f18836287319974636af571f8ccd2"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e56e934b79c07bf7e2749e83cb5a1b98"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "1961b2d27d4c94fbaf1c0ada5c8c93eb"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "21b605ced5086f50d8fa6a437b8e4ed2"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9a52bee8be530605c4c32a2c33708849"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6e8b5d11f75ae48b26b7195615c43069"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a5fc6ee01362a3561e9c6f0442ceba35"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a6ab662a8c10b56fc15ff350dce2ef87"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "466fee830212710e5a5d180ab3d95a00"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4035ae11eacecb9e1ed4bc471f46ad98"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f2be9107d3dc81dd8228759da3c040cf"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "7297b2dff1258ed55188ba96e69fc186"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "51db7009af3fde53c9671cf45bc2ec19"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6339256a65b392699ac5c2216531c395"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d0cdc8044d17d6cdae57890937e4ab31"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e6d74b70d2fc079a5030abfdce2e92af"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8db9983b4cbf830da4ae9583b2a784c2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "57cc5b9d4c617e472fb8b0e075f54614"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "326dc396121c421bd7204f57a37d91c0"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "11490baa23a8f288051233f7c67ab0f3"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "65568bf11d105608f522084c5fc54d6f"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "237152d80059b1ad7d12b5e6771e8ca4"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "fca9ef1f3ffe85e135391740c4189c20"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "335703be11691e723dd9d61915815354"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e56c863d5d1978166d5784b06305d4c7"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "93c787ca4ad487deac52b820e3249ddb"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f58add4cd9d13b49de5179c2b0c86e5e"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e813c2d349db269822f6fd3ade02b497"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "589491e035083173813c50cfd7aa3ef0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0046e156e423738631796800716c7415"
  },
  {
    "url": "tag/github/index.html",
    "revision": "fd04fffb38f28c9292e4941fcc65f403"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d5c606cdf8d2dbef6d5848602cad1d83"
  },
  {
    "url": "tag/html/index.html",
    "revision": "44db9db7ba89cf14fcff3700a2ca49c1"
  },
  {
    "url": "tag/index.html",
    "revision": "fc05a1d2c18539c357861f7b0128bdb2"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "95f9fea589b8ebe575a5a2d3d4e477fb"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "8a0860f9f915300a9a852c128690d0e6"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "9b217ab280f0d5c9ec6c71b20bcd8dbe"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "06dfad2be3cb6ef6bf2e2ec4d9ed19bd"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "6c4d06b2b1d38122578242f9dee52dd8"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "d07fa0e3f1d7a8063eef30bba3d92e25"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "50a551b3bbbf1e81c4dd3d06aa3ce296"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "fbbd6af5d216da9aeb5697b905952fab"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "5ee19a3f4338550fcbadc5dc2565c909"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6f8680af944cd1df647be6ad790efcba"
  },
  {
    "url": "tag/json/index.html",
    "revision": "4648f48b83c201ed9a8586643d85ec65"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3ef91d4ad6a81c72cdb5c6ad6d1e9b84"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "bc42c1724ad89e95254b0953f716ae49"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "a5357b8c6506e7c93e0a219b50ca8c88"
  },
  {
    "url": "tag/python/index.html",
    "revision": "43b5f442dacad3e9c420b7cba8f2041a"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "6e574159c04b4a751cce5b9a2caf9cbb"
  },
  {
    "url": "tag/read/index.html",
    "revision": "08939ca3409a8648a626a608ac5f7d3f"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "9eeaf1c8283b8a68c677cf8349090250"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f38d76d9a2054d7da1eceafca0d525e8"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "f85625a32fc41b78df632a64d2ac7a06"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "440ef429fe851ed415077fcffea4b9a8"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "3bb692fdd23d287515332519b262a286"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "2e469d13b4c6c44df3df29e77d57e77e"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "542fa327998e9722fcf41c138c19107a"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "34825564d240eed371d34827b69bf17c"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "863114aefbe34afc7a9339804ea4cd4d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "414c90162778117d646bd350d76a074b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "bf48bbaa517aa8b10aad206630817479"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9040c3e98ade0b82ab9a3727443bd5ce"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ae97e6d97ee536208bdd414405b2bc1e"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "3d6d60edefa071b6ff84db195a729b4f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "fd2ea9283bab0b89ad25dc34264a35e7"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "e4d028ecfd95a2974e09bafbf0f153c5"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "571af0d2ceede9dfed7a7493a953f9eb"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3ca4eb3bfe0342f786a7854af49fa722"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0a7737eacf8c2ce513c81205eae01a20"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "72f576e2b194693abe7dadc12d345bd6"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "41c01885b9b82cd6a4dc387074373e35"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "40d48237725aae4440f9a2195b17e767"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "47d555025ff53024b664a204509f3418"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "e04189db4c80543922ef08c1e5c9ceb1"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e12bfe321553bbbf0f0d2c34d634bbc3"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f4cd8733b58f0f890df68154dcd29f3b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c233fd3513f685e14094eac1f061e51f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "984d8806bce73252463f633e73f2cdab"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "4e9cb189cd58dcae67a514af0330b209"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "9d500ef602a0599e9ac32a41f11c3952"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6bde804216e86f51584181befe1191ea"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6b5792b0d9420a616ccdd426ef5d515a"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "243eace66741e9c005100c5d81285c8c"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "7ce2dbb8abc752c2b80a45a239d3da14"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "be1d628f91df3e147534c7a107d6a8bb"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bad11e6f819949718e9f08898a9f271f"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "152b896126901dba4645415b3258f622"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "55b040730ec64f36dbd9ad444c8b55e3"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d41ab8453855a090c503b31f8254e2d1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7ba490f92db8e24a820e5ff647e4c314"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "e261a55cdce7c2ee3e6cb8567bdcc983"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7b5c8837c7c2ebf60d991fbf69740fae"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4c97204df276239c06638b7b3e126450"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "34b12c6d0992d20217c1194ccb8ba26a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "aad0e06cb33c18d0658f0d4ec0a57331"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d54d92cb4758d8db202c15273bd5366d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "fe8ca21e76bd3acf6221c963ce9163cd"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "596548573e80eb112d9d7093289680e1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "bb058fc4f6c3c6ca3c33ff99f642f9f1"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "e0af61957d3efdcbb7ff4113940d82da"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "10c94295406ff87beb7f31a867d0b9c6"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "bbc8cee5e7eabe6dee492c1f866036e2"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c4853e1af25369f365573306358f422d"
  },
  {
    "url": "timeline/index.html",
    "revision": "b65114355e07c8c1d19a5a9c46a8d93e"
  },
  {
    "url": "tools/docsify.html",
    "revision": "1199fe224df7deb6cf7a7d47a80715c7"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "6b9f7803b430070f67c61ed8c428e45a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "955f99b82ee253f07d343f7257bb5259"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "e933a9abc9259bb47dbc5a2c432ef90c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1d64f942f411dee9601a1256661f60fc"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "aaff0dc11fa3f2e8421f7a3d7d714169"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "454ecea2896a004bebbc30b700e4a510"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "5a697e7945bca37237f322e5bb147bc2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4a423c5ab30105bc0bddd43ced92aa65"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "1e3c3d4f9b817cec953173217b430eb6"
  },
  {
    "url": "tools/note/index.html",
    "revision": "3b71305b2da1cb46eb163144cfb3a4ab"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "a296314fee1717a078a2fe37773a644a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "01f7d41ddc07f7805a101601c10dd792"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "dc2cab224e03863813b20f85cb601e3a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "432744e2dfc5f53b6c0f98e04f292a5c"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "fe6fa66048bed07cb71a8ea5c9eddca6"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "75985d7fed7e25de17daaca8a92b4941"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "07e74806d6184eb740ab58b52d196dea"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "c8049f3258f6f3e592f0b2a686aba703"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5198a019e11d74335be801ae4e9d18b2"
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
