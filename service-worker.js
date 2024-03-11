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
    "revision": "af8c32b0722fe7ec5641eb9bde4f9da0"
  },
  {
    "url": "about/app/index.html",
    "revision": "94179fdf297018aeca63e34d4a6e0b79"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "41382f64e2208caf6d66b8aa8c8bc562"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "110f6cd030e7cdca50d7ce52822ee928"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c43d18e7ad6a42aef9efe42bf3b2fc13"
  },
  {
    "url": "about/index/index.html",
    "revision": "e92855d2f25a7ba3784c7ed2c97e0bab"
  },
  {
    "url": "ai/index.html",
    "revision": "0967a23d223f6e3921cd4eb467c172b4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "46596da10d8a3f98d7916c234bac4ee1"
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
    "url": "assets/js/100.78d5816e.js",
    "revision": "623f8a9e9e27cd0f6364cd7290620b6f"
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
    "url": "assets/js/11.2fc10662.js",
    "revision": "c13682ae075f9bba421c9edc3dc8312a"
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
    "url": "assets/js/115.bda1cad6.js",
    "revision": "4c765e0bb80b39002ad4e61533699bb6"
  },
  {
    "url": "assets/js/116.beacb24c.js",
    "revision": "ae048e8b7f1940f06f9354be81bf2dbb"
  },
  {
    "url": "assets/js/117.d4d8e824.js",
    "revision": "3dac3ee359aee157db99892c9848422c"
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
    "url": "assets/js/120.1f3031b4.js",
    "revision": "3f083286ffe17ab824496f75c9274e0f"
  },
  {
    "url": "assets/js/121.9568ed9d.js",
    "revision": "860bbbb2f10417263221d0f6e0a575ca"
  },
  {
    "url": "assets/js/122.1493f779.js",
    "revision": "5c5bd904abd6644198f8727ab2ae5d66"
  },
  {
    "url": "assets/js/123.4ee6dd51.js",
    "revision": "a62e692c776321d5381ed1df7f6e6026"
  },
  {
    "url": "assets/js/124.43aaeb25.js",
    "revision": "2aa3e237a7e5094b1fb0049fe027ac6c"
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
    "url": "assets/js/127.c949a443.js",
    "revision": "95ad584f707c16b8aa09cb75a1a207c2"
  },
  {
    "url": "assets/js/128.eb805fd1.js",
    "revision": "8e67bf05c5255720daa0e5a5b231308b"
  },
  {
    "url": "assets/js/129.ed88c9c9.js",
    "revision": "15f11ab49aae7ab3e2fd319faeb6866c"
  },
  {
    "url": "assets/js/13.0a952e9d.js",
    "revision": "4a62b3c227de0aaadab69cd597f31daa"
  },
  {
    "url": "assets/js/130.e92810c1.js",
    "revision": "af45bbdfbe891b5fd3f08cc32609585c"
  },
  {
    "url": "assets/js/131.3aca8420.js",
    "revision": "7ddfd3b5c615c6ce7be9e6916439c1bf"
  },
  {
    "url": "assets/js/132.33f7c615.js",
    "revision": "556070b7f99f44bad36d1af14f50f634"
  },
  {
    "url": "assets/js/133.b510201d.js",
    "revision": "c0a92f0cd10f666c91256523582a965f"
  },
  {
    "url": "assets/js/134.53ee34b7.js",
    "revision": "413d47f2798f4611849a3b10a01be63b"
  },
  {
    "url": "assets/js/135.88f21727.js",
    "revision": "ca6b4c17ebe496a3c3a7891940e22dc6"
  },
  {
    "url": "assets/js/136.0f478024.js",
    "revision": "8027ea26542c93c7afdca21939fa0a0e"
  },
  {
    "url": "assets/js/137.c732ec4d.js",
    "revision": "27bfd3dd992cfe9c09cdb54e1623c637"
  },
  {
    "url": "assets/js/138.923cfa23.js",
    "revision": "bba2b96544ad5034a071a84768d65a1a"
  },
  {
    "url": "assets/js/139.2aedcfe6.js",
    "revision": "fd28d7d23b241ed769039a4ad4ca7df9"
  },
  {
    "url": "assets/js/14.aa3fb27c.js",
    "revision": "0e8f7312893d0a56a3b113fe3cf572bc"
  },
  {
    "url": "assets/js/140.5bcf2fd9.js",
    "revision": "c450635c3945406877c6e94cd412f4c3"
  },
  {
    "url": "assets/js/141.1f280c99.js",
    "revision": "8d4876017670eb9b136a39e220b9e20a"
  },
  {
    "url": "assets/js/142.0a7f4162.js",
    "revision": "de02318d5dbf843d87c641c8d1866fd1"
  },
  {
    "url": "assets/js/143.9b74ad54.js",
    "revision": "debe53da454bc531961874f1d1cad9e4"
  },
  {
    "url": "assets/js/144.89beaf63.js",
    "revision": "08d5882cfe60533d3a239eeed1a689f9"
  },
  {
    "url": "assets/js/145.3c459bdc.js",
    "revision": "2d083b18fa4169426b1c6474c7ba1a15"
  },
  {
    "url": "assets/js/146.b42e9604.js",
    "revision": "61a678bbdd8c0c000ed2e7c183a066c1"
  },
  {
    "url": "assets/js/147.d72a045a.js",
    "revision": "d4bc8ec3abe7f7dbf4fb5b6f2133d2a0"
  },
  {
    "url": "assets/js/148.12a77903.js",
    "revision": "2739b79d6aaeb208687905aca3e3d521"
  },
  {
    "url": "assets/js/149.b4c02747.js",
    "revision": "58e1873902ea6a35771a03e323f32ff7"
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
    "url": "assets/js/151.94260aef.js",
    "revision": "6bf88437f681ef08dc980f067559df91"
  },
  {
    "url": "assets/js/152.b06204bb.js",
    "revision": "9f1c180146997e1d410821022024f746"
  },
  {
    "url": "assets/js/153.18346fd4.js",
    "revision": "32fe4c1e39861856c813daa0b153d708"
  },
  {
    "url": "assets/js/154.1935d24b.js",
    "revision": "10816795d0443ef2092e6036c4da3d0c"
  },
  {
    "url": "assets/js/155.0a496c14.js",
    "revision": "bdc99f9fd8ab393bee6447283ec5a81b"
  },
  {
    "url": "assets/js/156.99460ca0.js",
    "revision": "0acbfe6eb6639cf2eed0b1daf3369e0b"
  },
  {
    "url": "assets/js/157.a5c3e4f3.js",
    "revision": "b75cff18904f65baf05b2dadf22d3abb"
  },
  {
    "url": "assets/js/158.28b72f8e.js",
    "revision": "b2f9794a2af0ab67cb1f18a19e3f6a17"
  },
  {
    "url": "assets/js/159.3b18726f.js",
    "revision": "461665a4482bb4045ae7552b1e078ce3"
  },
  {
    "url": "assets/js/16.9453c60e.js",
    "revision": "ac13e6d701990d60076b8c3826687897"
  },
  {
    "url": "assets/js/160.42b63c20.js",
    "revision": "fe3430808b0a6b903d1fb909f5b6ae6c"
  },
  {
    "url": "assets/js/161.85ab46f8.js",
    "revision": "a9c67f8830e60bbc92a1e16311a4c95f"
  },
  {
    "url": "assets/js/162.2e2e6cef.js",
    "revision": "71984d283c204b965a56ff8e312b8b3f"
  },
  {
    "url": "assets/js/163.58ae77dd.js",
    "revision": "1b893e758c709d858a1e9fca3af0962f"
  },
  {
    "url": "assets/js/164.f32f4af3.js",
    "revision": "752f232a8665a244d8cbdf2740ec1727"
  },
  {
    "url": "assets/js/165.40f04189.js",
    "revision": "bbad4802ba8d43b05ae55a767c604575"
  },
  {
    "url": "assets/js/166.fd4960ec.js",
    "revision": "7bdb639d3b40c33b7dd84dcda67755e1"
  },
  {
    "url": "assets/js/167.068efaea.js",
    "revision": "366eb9df2820903e185b83cd1ba63b40"
  },
  {
    "url": "assets/js/168.ced9113c.js",
    "revision": "0cbe21ea53a6863ea1eb9696b69568d6"
  },
  {
    "url": "assets/js/169.7503fc1c.js",
    "revision": "7914fd26294e7b81371da76d042d575f"
  },
  {
    "url": "assets/js/17.d2ff9762.js",
    "revision": "ea5f7625557b6c8a057a68ce1072f739"
  },
  {
    "url": "assets/js/170.b789d4ae.js",
    "revision": "e8afc12754aef146ba522b61467b5fdd"
  },
  {
    "url": "assets/js/171.33f6b7d4.js",
    "revision": "665030c5599f47fb504aa99d1b2cfc35"
  },
  {
    "url": "assets/js/172.2073b581.js",
    "revision": "e278217c62ee892842f503539dccebbd"
  },
  {
    "url": "assets/js/173.ade9475c.js",
    "revision": "cb0de9124b6b5466ccdfed53f11d185f"
  },
  {
    "url": "assets/js/174.ffaffec8.js",
    "revision": "f7df0f4f3be76d35571440f3d570b3f3"
  },
  {
    "url": "assets/js/175.aeb9814b.js",
    "revision": "c64ebabafed078225015b66ad05c4680"
  },
  {
    "url": "assets/js/176.7816700b.js",
    "revision": "0c1e3d9334b84e5e2e65e2b5fe521fc3"
  },
  {
    "url": "assets/js/177.83b7ee71.js",
    "revision": "44d4d53750ff28eb77c1ab55d8d5109c"
  },
  {
    "url": "assets/js/178.450e7397.js",
    "revision": "48dd0e428d161a75696e24982aa273eb"
  },
  {
    "url": "assets/js/179.d2fb0bad.js",
    "revision": "b7db66c7b32c5b05369f5379b71d7c06"
  },
  {
    "url": "assets/js/18.0e9cc935.js",
    "revision": "64c21d356c417e769abfb868f87689d8"
  },
  {
    "url": "assets/js/180.afd3c938.js",
    "revision": "a766a22f1b87c9837ab17f97c3ec0c49"
  },
  {
    "url": "assets/js/181.77fff2f0.js",
    "revision": "7f43b397cf0e0c64c7ccd05b4f07430a"
  },
  {
    "url": "assets/js/182.4049a6ba.js",
    "revision": "6fb440ed83b950e19affba007ba8d712"
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
    "url": "assets/js/185.eba4885f.js",
    "revision": "ac45cae5260e3ade233dcd1210a697da"
  },
  {
    "url": "assets/js/186.7372d7e4.js",
    "revision": "7df731c9cb90eb2f259541dc228e9233"
  },
  {
    "url": "assets/js/187.d8d56d63.js",
    "revision": "f328fed81cee295264ad89f2563f149f"
  },
  {
    "url": "assets/js/188.00ab39e5.js",
    "revision": "03c31da237ecbba0225265c88cf20e41"
  },
  {
    "url": "assets/js/189.17e4b74f.js",
    "revision": "07d1dcec2327c6bc54e9525a8983d559"
  },
  {
    "url": "assets/js/19.dd180768.js",
    "revision": "034879c4c33ef30d056ba240f30b9c86"
  },
  {
    "url": "assets/js/190.5c74f94a.js",
    "revision": "030d64788f0b1e7edc4ee02eab7a1533"
  },
  {
    "url": "assets/js/191.18daf8b6.js",
    "revision": "b8a124a73b5a18ea862a470d955a342d"
  },
  {
    "url": "assets/js/192.c5c093b6.js",
    "revision": "0e8f4e3000bfae5801472021ce80b617"
  },
  {
    "url": "assets/js/193.0c2cf44c.js",
    "revision": "f9eaa7c2f4b361a01959e165eb0a127f"
  },
  {
    "url": "assets/js/194.55edd5eb.js",
    "revision": "4df9b869c2d19886efcbc4cea4e0daee"
  },
  {
    "url": "assets/js/195.0c0160d8.js",
    "revision": "5fa6ba24fe62fa63c1482b54e96764f0"
  },
  {
    "url": "assets/js/196.0dd22ad1.js",
    "revision": "439818c0f735d58d98205e6dee57e10f"
  },
  {
    "url": "assets/js/197.193748a2.js",
    "revision": "c1e5a707ff4546a11e7c9ae1b250f9b2"
  },
  {
    "url": "assets/js/198.228f1a24.js",
    "revision": "971e20fa662e78a0044857f466ae672f"
  },
  {
    "url": "assets/js/199.427a9e0d.js",
    "revision": "a06b3d1e41accc163f7083bc0d9c038c"
  },
  {
    "url": "assets/js/20.bd97c877.js",
    "revision": "96df7e8b2f1ca95f265b88eecb9dbcf3"
  },
  {
    "url": "assets/js/200.0ad46196.js",
    "revision": "5dfa20c5307c50bc5d9b207a6d47bb22"
  },
  {
    "url": "assets/js/201.7e8580c4.js",
    "revision": "acdec49a348891892fddc2563fd8bffe"
  },
  {
    "url": "assets/js/202.3af8a091.js",
    "revision": "9fcb2af524da95d1740d31f5c688f3b1"
  },
  {
    "url": "assets/js/203.0bd89cbd.js",
    "revision": "49ccc9849429d32c3a0ad77e242790f1"
  },
  {
    "url": "assets/js/204.043f83e1.js",
    "revision": "8d29be512a76fb25d1abe99f91007d9c"
  },
  {
    "url": "assets/js/205.b0c5fdaa.js",
    "revision": "cc511d93c945eb58b66616275ce2538d"
  },
  {
    "url": "assets/js/206.f85989d6.js",
    "revision": "bcb5763f254a8cf673b8332ff92a66bf"
  },
  {
    "url": "assets/js/207.3f9d3f82.js",
    "revision": "b3320b6c12ce23c6acff1709230473fd"
  },
  {
    "url": "assets/js/208.ce90f881.js",
    "revision": "cab13bac86c74411db9ee43505c73f7a"
  },
  {
    "url": "assets/js/209.162778e7.js",
    "revision": "6e0b8f4e0ba579298d2cf9b84dd55581"
  },
  {
    "url": "assets/js/21.1aa947ef.js",
    "revision": "e89286d7a0513304db81009d523f2766"
  },
  {
    "url": "assets/js/210.3bc3fca1.js",
    "revision": "34807c1c351734ad9d52a0031cd6ac2e"
  },
  {
    "url": "assets/js/211.b8f00062.js",
    "revision": "f439f1ad51c074529ae2a9b07b4f613e"
  },
  {
    "url": "assets/js/212.65ce3af5.js",
    "revision": "fe44fce86342886a526b79580f098f02"
  },
  {
    "url": "assets/js/213.ea6ff6ef.js",
    "revision": "d8d885e14bfbf85aa613a63e8c9ce7be"
  },
  {
    "url": "assets/js/214.4375af99.js",
    "revision": "459e0835e64c793d6a66ae74613678b9"
  },
  {
    "url": "assets/js/215.8e82dc09.js",
    "revision": "39cb0aae7b0576ef417d00f3e36577df"
  },
  {
    "url": "assets/js/216.11e4b902.js",
    "revision": "de1e31671c73baf1537ff7112dae66f0"
  },
  {
    "url": "assets/js/217.d0150dec.js",
    "revision": "f123a52b599ebd1f8aeabd9b7f7d520e"
  },
  {
    "url": "assets/js/218.aac5dedb.js",
    "revision": "943c0eb0a4d4c8bedf36360420fa1337"
  },
  {
    "url": "assets/js/219.fd9653e3.js",
    "revision": "ca7e44811110bc107072eb4d1288c35e"
  },
  {
    "url": "assets/js/22.a60ffa29.js",
    "revision": "b282c57e5ab291e4927c1a74da0f6fd1"
  },
  {
    "url": "assets/js/220.8ce81fd2.js",
    "revision": "d8601379fec3a560d16c816a9ff7a3d1"
  },
  {
    "url": "assets/js/221.6c2e4ff4.js",
    "revision": "936a086f4c325d407526ae5dfc1efa32"
  },
  {
    "url": "assets/js/222.6c7a6110.js",
    "revision": "9e9f13237e31a5a2a3749edbfe4b4ae0"
  },
  {
    "url": "assets/js/223.4c860c1a.js",
    "revision": "e9c1dedbcf48509895dd20ac0c561242"
  },
  {
    "url": "assets/js/224.1d3568ea.js",
    "revision": "a655cec26ab6f322451004ea3d1b1b15"
  },
  {
    "url": "assets/js/225.3fe45305.js",
    "revision": "53ca60be64e306bf2f8d17890369bed8"
  },
  {
    "url": "assets/js/226.09143611.js",
    "revision": "b228a048bc21f9a7d854450878f77bfd"
  },
  {
    "url": "assets/js/227.3006fa92.js",
    "revision": "2f70a3f4398e9b3970936be8a0e0a431"
  },
  {
    "url": "assets/js/228.bec269b2.js",
    "revision": "501ed0585e4cee837d007a53032d3d65"
  },
  {
    "url": "assets/js/229.b939291b.js",
    "revision": "8bd9ea42779192b2823b6a77122e7144"
  },
  {
    "url": "assets/js/23.c0389be0.js",
    "revision": "2e70fd7dc508315c05c263b94fc017a8"
  },
  {
    "url": "assets/js/230.c6a19a3f.js",
    "revision": "069af681e0aa4e2105be4dcff184fc87"
  },
  {
    "url": "assets/js/231.7f1936cc.js",
    "revision": "30b49dcde872a6cdc2ef73f474696b41"
  },
  {
    "url": "assets/js/232.fb7e46ad.js",
    "revision": "04f5f1d833af84b85b01c1ab765298a1"
  },
  {
    "url": "assets/js/233.df7aa453.js",
    "revision": "15c334204087fd2f3c6fcfa2336b6ad8"
  },
  {
    "url": "assets/js/234.7ab05201.js",
    "revision": "5cbda11c24ae32572269a798606be1b8"
  },
  {
    "url": "assets/js/235.9b68b7f7.js",
    "revision": "0f81db68d60c7cd61899c6f145446bd4"
  },
  {
    "url": "assets/js/236.aa5a7308.js",
    "revision": "08afeb6c908e4b7c5781ce8959409875"
  },
  {
    "url": "assets/js/237.50be5b16.js",
    "revision": "ba8dd821958885e2a13b208384dbc2ba"
  },
  {
    "url": "assets/js/238.eeca95e8.js",
    "revision": "71ca93ccb91a12d74c96f956eadde3e2"
  },
  {
    "url": "assets/js/239.aa7c18ff.js",
    "revision": "87ac3bbeb399cdf822295839be254e8a"
  },
  {
    "url": "assets/js/24.ad8fc117.js",
    "revision": "07993bf7bf9f4947029d1d78437b7d87"
  },
  {
    "url": "assets/js/240.8e86c26a.js",
    "revision": "ce12492adb78e09974cbfb704371e457"
  },
  {
    "url": "assets/js/241.e5ccef8e.js",
    "revision": "6e5d8b98b4ec73b029a72dbbc3d60c1d"
  },
  {
    "url": "assets/js/242.b4314830.js",
    "revision": "298d794474ce35751b42eab3647cbbc9"
  },
  {
    "url": "assets/js/243.88735324.js",
    "revision": "ef991adf49c152913748052055961f91"
  },
  {
    "url": "assets/js/244.65e2f33d.js",
    "revision": "262c89eeaf41de093bac9feb82afbbd6"
  },
  {
    "url": "assets/js/245.b04e9afe.js",
    "revision": "049adf99f0dcf8d297075333fdc83476"
  },
  {
    "url": "assets/js/246.1b287979.js",
    "revision": "65bb9c85c73391c24a469c3a8eeccd9e"
  },
  {
    "url": "assets/js/247.aed0c506.js",
    "revision": "7e39b8fcfa329323a8179c8ad8ca0653"
  },
  {
    "url": "assets/js/248.d27e2083.js",
    "revision": "29f7299d9a1c56986c9ecd2594ed46d8"
  },
  {
    "url": "assets/js/249.38786934.js",
    "revision": "5f67f60d9055398cd82e474e07a3b6ec"
  },
  {
    "url": "assets/js/25.a330b5aa.js",
    "revision": "046bd591cefeb9ee2c972de4309995db"
  },
  {
    "url": "assets/js/250.55539468.js",
    "revision": "50a45b92fa739b898dd5bdbb297b0445"
  },
  {
    "url": "assets/js/251.b27a83f0.js",
    "revision": "d37b2acac9ab1875ceeb06e64424d449"
  },
  {
    "url": "assets/js/252.d6a012d1.js",
    "revision": "4f79c6794a83c2e1962a8d569ccb25ec"
  },
  {
    "url": "assets/js/253.ca90aea8.js",
    "revision": "4c0c0049388cf3f215c04df842c20b80"
  },
  {
    "url": "assets/js/254.95dabc88.js",
    "revision": "ea72f9ad8a9e974a9a726ec5dffba9e5"
  },
  {
    "url": "assets/js/255.07fe3aaa.js",
    "revision": "4411b8966e3787711dc028c89fa8337e"
  },
  {
    "url": "assets/js/256.db82c8a7.js",
    "revision": "cfbdf44d00c0d96e375dc26e77b6f56b"
  },
  {
    "url": "assets/js/257.7734e54f.js",
    "revision": "87b22459fc86059817c564867695c185"
  },
  {
    "url": "assets/js/258.8ea1ed3c.js",
    "revision": "4820b28fadfe436137243cca7cb95dea"
  },
  {
    "url": "assets/js/259.37eed719.js",
    "revision": "bcb0b0195d6080522f66172233715307"
  },
  {
    "url": "assets/js/26.5ed9774c.js",
    "revision": "dd81b4279aa7ac38fdf3d4e4e607a148"
  },
  {
    "url": "assets/js/260.08c485b9.js",
    "revision": "961e09f3a4616ad39d4369f0c6e99e89"
  },
  {
    "url": "assets/js/261.d783369d.js",
    "revision": "444ef8bd68e503c6ccfd8402c8b605f9"
  },
  {
    "url": "assets/js/262.5027cd9f.js",
    "revision": "c0e714893901c5988939284f6bb50207"
  },
  {
    "url": "assets/js/263.076f753d.js",
    "revision": "e1c95aa143f02e39e4fe61269e093eee"
  },
  {
    "url": "assets/js/264.a70d6c97.js",
    "revision": "9e1cee2d37f9f08d19c66b1f2a1cd725"
  },
  {
    "url": "assets/js/265.1476de45.js",
    "revision": "d062d94ad3d946b61a602f0a311fa3d8"
  },
  {
    "url": "assets/js/266.26279b55.js",
    "revision": "4adb4df14e0210c3f88e8768f3f93bbd"
  },
  {
    "url": "assets/js/267.24473c0c.js",
    "revision": "65e6397380268f16175a257890ec05dd"
  },
  {
    "url": "assets/js/268.57d048c9.js",
    "revision": "da800ba5cea8bf0facd436fb9c7a6828"
  },
  {
    "url": "assets/js/269.6fa21d7f.js",
    "revision": "8f4852adfcd6f9e4896eaa11e9bd3b12"
  },
  {
    "url": "assets/js/27.c728a6df.js",
    "revision": "989ebd470d5026507c390cfbc941c5fe"
  },
  {
    "url": "assets/js/270.dbd349e4.js",
    "revision": "e61d7ee43ffdc712d679541a55082c7c"
  },
  {
    "url": "assets/js/271.bf342956.js",
    "revision": "3e20557126c9acc9c7b51afce33585dd"
  },
  {
    "url": "assets/js/272.63c86190.js",
    "revision": "132ab4277c35850eab2f3482bcaf4357"
  },
  {
    "url": "assets/js/273.7aad676e.js",
    "revision": "e60ac76d3d1581d1ba456ce9bb6802da"
  },
  {
    "url": "assets/js/274.3fde98f2.js",
    "revision": "9bc3b6635c751f15fc00d604e06f87e3"
  },
  {
    "url": "assets/js/275.84667e5b.js",
    "revision": "0ffcfc99e27c6699d5158994aa9068a1"
  },
  {
    "url": "assets/js/276.56f738ed.js",
    "revision": "71b922e9bb4397e4df470ba77be5ffc2"
  },
  {
    "url": "assets/js/277.70f07ea6.js",
    "revision": "5b67e0f42b67a9f647860a5997baa6dc"
  },
  {
    "url": "assets/js/278.0bb0716c.js",
    "revision": "12919b03da5cf927c176b6257d51ed84"
  },
  {
    "url": "assets/js/279.ebe7127c.js",
    "revision": "3cdabfe06468dcebafeb0f4d01bfb54c"
  },
  {
    "url": "assets/js/28.aa3cb2dc.js",
    "revision": "90d8f6b9a436a0913901319056f9d929"
  },
  {
    "url": "assets/js/280.c6918fc0.js",
    "revision": "f55679814c86764b214b1eec893c26b6"
  },
  {
    "url": "assets/js/281.83a97d46.js",
    "revision": "96d65ded3d51967c225a5a076b30e651"
  },
  {
    "url": "assets/js/282.79959b63.js",
    "revision": "8a7de1b816de295f5dee4b6b4b61aad3"
  },
  {
    "url": "assets/js/283.45f531c4.js",
    "revision": "4bae69d16dfffb5bc3ad7817e2aa2cfb"
  },
  {
    "url": "assets/js/284.e42c1b20.js",
    "revision": "a7fd2dcd07eccf221082fa7f223f7050"
  },
  {
    "url": "assets/js/285.3a1b6d00.js",
    "revision": "88201193dd07660189fe3d97b8af577a"
  },
  {
    "url": "assets/js/286.e3f10860.js",
    "revision": "44f158d904aeac28a41fd9b1107efcd0"
  },
  {
    "url": "assets/js/287.a5606940.js",
    "revision": "6e4d7b1314497be34a85e1d24b9a1699"
  },
  {
    "url": "assets/js/288.e07762b1.js",
    "revision": "2c08e1e3d2e8777c7722ad276f96e5b3"
  },
  {
    "url": "assets/js/289.5f67ee09.js",
    "revision": "b79e468e114a4ab9587f11a882d845b9"
  },
  {
    "url": "assets/js/29.0eedac0c.js",
    "revision": "4cc547920791a013d286b524baa5dc7c"
  },
  {
    "url": "assets/js/290.77c587c2.js",
    "revision": "7d3d2bd4d7848b9be23d6bfdbb11fcf0"
  },
  {
    "url": "assets/js/291.051f3e55.js",
    "revision": "f39a42eee484270d49511e2612251dff"
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
    "url": "assets/js/33.18785385.js",
    "revision": "682a0bd1b8cf50ed90a89e0c6d0f38cb"
  },
  {
    "url": "assets/js/34.546ebca8.js",
    "revision": "0c324a056f78f1dcc0888d642b1b9267"
  },
  {
    "url": "assets/js/35.9dd263ac.js",
    "revision": "cc1d0267f48cedcc778a247abfed1270"
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
    "url": "assets/js/47.6849bb42.js",
    "revision": "c8210b1a16ed6c4292d8d879331da31e"
  },
  {
    "url": "assets/js/48.928e6697.js",
    "revision": "5a460eadf994c7cbb4c8464f3817d423"
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
    "url": "assets/js/55.a948c74c.js",
    "revision": "57c396999c37a4190e912d4257fdd1c6"
  },
  {
    "url": "assets/js/56.b7709a4c.js",
    "revision": "2477c6fdf0a2f63c1faeacb4fd9bca22"
  },
  {
    "url": "assets/js/57.71f81096.js",
    "revision": "0a997d4f5ed215c077f10e13ef452912"
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
    "url": "assets/js/61.ded608a8.js",
    "revision": "adb951161da7fde1b488a2a5813fadc6"
  },
  {
    "url": "assets/js/62.0babe02d.js",
    "revision": "b146a0009e1bb05ea296177fc72d2192"
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
    "url": "assets/js/66.1708ecaf.js",
    "revision": "b2acf3bb62af51aa809d40489d01bf36"
  },
  {
    "url": "assets/js/67.b82c43fa.js",
    "revision": "711eea799f300de6c7872a0eff606dd8"
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
    "url": "assets/js/73.be1252c8.js",
    "revision": "444a26eb019d86cffb21736d78215355"
  },
  {
    "url": "assets/js/74.bed4e7b6.js",
    "revision": "2ad7e59eb7a6b232494e092a11515b89"
  },
  {
    "url": "assets/js/75.d762c9b2.js",
    "revision": "6445af77b55d76787522dcf4df71ce2e"
  },
  {
    "url": "assets/js/76.3d36c35b.js",
    "revision": "38b44d0b02822d2c37ed80b2e36f7b37"
  },
  {
    "url": "assets/js/77.e24e5d61.js",
    "revision": "228648ccd03e1a90e84c17396678cc54"
  },
  {
    "url": "assets/js/78.7b2b4e84.js",
    "revision": "b24c012114226ee627768aa846c0348b"
  },
  {
    "url": "assets/js/79.bbd727ff.js",
    "revision": "c4989e15113766858ca0735cab0405ea"
  },
  {
    "url": "assets/js/8.9784c77d.js",
    "revision": "9fe24dee605c863d68d564d047023e54"
  },
  {
    "url": "assets/js/80.28395d07.js",
    "revision": "d1c52f718fa1dbf3310d4cfd0cc21e99"
  },
  {
    "url": "assets/js/81.8d42c096.js",
    "revision": "238db2708e32fa6514e9940ccba7fb2a"
  },
  {
    "url": "assets/js/82.cd8140b2.js",
    "revision": "28383df6c881f89bc10c1145cfd18b5b"
  },
  {
    "url": "assets/js/83.cb8ee672.js",
    "revision": "81b460ab565a5cde92162c9a1d396f29"
  },
  {
    "url": "assets/js/84.0147f084.js",
    "revision": "c58c974ca8a5800c86f67e18aa30599e"
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
    "url": "assets/js/97.e125108d.js",
    "revision": "a8e44f802180b4ba652fbfb11450e56e"
  },
  {
    "url": "assets/js/98.27c89125.js",
    "revision": "e98a4f5999cff735999a79d9c7ffa861"
  },
  {
    "url": "assets/js/99.8908a694.js",
    "revision": "2b23f10a26e1524a3b7641a092c3ad42"
  },
  {
    "url": "assets/js/app.97ad81fa.js",
    "revision": "24a676bb238cfeceee77b5a5bab12ecc"
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
    "revision": "726dcc3719d6b4047a61f401c450fb32"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9f1ba8c27d28c25d97740b44e7d82d42"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8da214e113e2f02041180c89e08bdd64"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2e0539856ab532004d7d50f6f32f1e3e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2d203d2001b10d64cfb5a16d49272a58"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "206fc50ec4138128feaf5870c77b410f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0e8a15e92acee1e453456cdd4664baf4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ac53eec0a73c4bdda5f24094cdc7c771"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "d1a57edded265e45dd2375bb5dd1f95f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0cde64ffa1e5d3832bccdc3b11ea9890"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "14dce36b04dd33b46ff482a1cf7190b1"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "a9d5b5babf932850acdee97f3b7439a7"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "bdff66929594d4d725db625345414821"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "ea71d3743a5ee25256a3387572ecf539"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "ee10501373052609cfa8f96b1d45edc4"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c1f803ae2d34a3363ad38f4881d18e8f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "fe6135602700341ac3e1ddd2513267c8"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b67666497beaf06a0cef252c86fcc11e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e94ecd87ccc992ed371025551ee7b7f0"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "63e0c03dd3a468b378ce098bdfe69d4f"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "c64eaa58181c409310109c0ac0a7ec49"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "f9b0c46c01d4c03d0e08421d03260a4f"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "c80a53e37d072238cef5e64b281f7390"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "f9724ba359bbc9963fbd5e15cfd769f5"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "42533d5c537c09420944f9af35fac691"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "37c4222dcdf3007bf51c6e31499efb3a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "0aa48a00f96e261026327e47882c193e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "91d616d458f35795bddc82fb9719e99d"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "d0551826e2625b9a4de1c73be3bf2d91"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "07191cd56f5bfffde7021ae2afb940fe"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "4aac8d725d3ce8b72a7a2e694a750daa"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "ab6be430c03dd6c8f31d0277180e8521"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "9a7ec66d0df06cd843c7d9bfe1f69d4d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ac602b6c392e25e4307b5b7819d0fdac"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "b0eb6996fdd05e233aefb3332309c0e5"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0f691dbdc5f25d8975b3a73649a5afbe"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "593ff8a53e00cd0f60e70a495bcd2959"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "30f2bdb4985ef395171ebd4051e2f2ae"
  },
  {
    "url": "basis/index/index.html",
    "revision": "20a56d75d85c4bb142486d3821fc96c7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "bb63288f64e732e5061850c575db35f1"
  },
  {
    "url": "book/index.html",
    "revision": "9d3c494e8082e5ffa3a47b1c43826d52"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "519b2c56de87a05c06e47725818a5f9e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "7d1569e2863e99518ad05b3b32d4d0f6"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b55a87a58e05aa22f7d4015f98b24ce7"
  },
  {
    "url": "c/audio/index.html",
    "revision": "fcfac9f1a9aa43f03a17d997346419c7"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ff9c0fe1693b47e94e238f89b9083838"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "839c6ae490df8fea539a1e729ccb486e"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "dbbfe325d68df2554384091db4e5f9d6"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "83c513e558e9fa3b7150339df2301a77"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "e81432c94ca7f86eb39c669d3cd47e2b"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "49858b248b0a1d5813607f5b1e667d23"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "578e0b6d32019ffdca0c0aa21a063816"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "1abb45216a4001e7c33d258f6ca861bc"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "2156942e6368681e9c4ae4c43b157739"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "d1d2b1dd4f994fbb8376a6d261ea58e3"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "14ca17528984bc6ffb13265a0874d763"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "1bc501d8e737c459f2cf51f7bc8de23c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "90acd762d73c5bfcfab189c38e22ed27"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d28ba98ce3eb722e3b0ce75ed379445d"
  },
  {
    "url": "c/program/index.html",
    "revision": "654f9a6a0a1dae78bdbc7bc0d463d2d7"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "fe407d6dc403fd74060d1f4b9729f7e1"
  },
  {
    "url": "categories/index.html",
    "revision": "aff6a7ce592241de82e2738d793f788b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b6caacd5b2d1008874826629a719e960"
  },
  {
    "url": "figma/index.html",
    "revision": "9af2ddf78693a626786a911338aab779"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "dab0e62d87df48b8c642b0799ced2b0f"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "f09f33318231ca1e3de2c16936cf5642"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "52b96c98048f149deb6ebbbf5cb18b59"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "c0368d0da64a5e2533e685434e3aa22b"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "cf83376fd52b36fd11d07f2d2b90d7ee"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "9cda395efc0fa2db42269deb28d107e5"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "f40097ae635659b1a7d9bd6fe7a3655a"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "736ec633297535eabe4a6d93e14b5ca7"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "cd64cf59cdbeedae477c1c43f516ae48"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "4cf76f26f01d7e77aab6252e560874ec"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "4ea5ab9be85463a64da24fd9efeed193"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "f1badf22d128f61acaa6883cdfb29ff3"
  },
  {
    "url": "flutter/index.html",
    "revision": "b323b1115a563da82bf87781f1909835"
  },
  {
    "url": "flutter/point.html",
    "revision": "7d78def2b62a0bc6861aa8dc89c29623"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "24d1919852bda5ea8c06abead2c5ec2f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "37d659594f5dac44b3a009be9313ec42"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "22a83ec08f9496db5a9ac1f76c253899"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f111ee347c96468bfc18bfe2a5633f67"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "85e1e6f19792382888da37dd6960501c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "f8bd415deb2620c4de5185926f588eea"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ec330725b6d2e845f7a438aa550da837"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "01ef7e3d25496b5f81ff6a864cacebcf"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d5d95c229c17a97fb8d5ff8384c8c897"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d66e1f2517bc3df3cbf747ec0dfc20d1"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "866fdf1ef07e4af26bc654504a550f06"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a4d005269e5a764c37affedf874808ba"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "f5f7004667b73c3eeebe0246e2ca214a"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "02a438c38b24aa0150258608f3e119f8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ad3bd6bdb3de14fcd09ebd1080820205"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "9bce06db3fb67fb9c2f5a632cc551dd6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "72eee34f93d8f339c73cd6f153b35b5a"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "48844aaf867a5e4faa10dd3f959f8eb7"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f671671bdd8e50b69ad29ebc096045f6"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "0567833770d8d77434b42884b1731eb6"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0f8b6c3e4d7aa3d4f1fb2618147f9ddf"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "c65645d3e545a119d9f33d0516d7165a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "77e4684680bb46c6dc11b435c6307962"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "77f211e7f02b47e316d4ec22f25eb293"
  },
  {
    "url": "haskell/index.html",
    "revision": "6a8760e8f211168452b2b86d36c70300"
  },
  {
    "url": "index.html",
    "revision": "4c9838acd348da2748868a0d396f0980"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "panda-sec.html",
    "revision": "effec519c13d6447e42b80dcbed18fd7"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "03c762b7c491417743b6c97dbe8bf6b2"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "74be579b00491036c3c838ceb76a2b32"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "1fb962b956f0fdf5c0562df2c6d3e452"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "3dff82d8eb2285d9520f206a5e532a99"
  },
  {
    "url": "python/index.html",
    "revision": "3ca6040dcd9e196950163c721c4d4f6d"
  },
  {
    "url": "python/python-ase.html",
    "revision": "478da8cd96004965df13ad707191ca29"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "2afbf0531811471b6497f54659b5c6fb"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "947ef40dfc9f7ea60f89a584577b25c8"
  },
  {
    "url": "python/python-file.html",
    "revision": "a18d4a632aa78c7562ced5088f4bfd94"
  },
  {
    "url": "python/python-function.html",
    "revision": "7da8ec21baa9879f87478348b32b6fe6"
  },
  {
    "url": "python/python-generator.html",
    "revision": "5a2cd8c9237eb0c5c2e16a365f8a08fb"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "50d1f88ac44ef6a4275b58c02aa8cb1c"
  },
  {
    "url": "python/python-module.html",
    "revision": "424e15b073482fe0c94d165a8cff408f"
  },
  {
    "url": "python/python-string.html",
    "revision": "a94ad95ab162a65a79911ea7731450db"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "18651cbd9db1a8834adc1aa4184b5630"
  },
  {
    "url": "read/index.html",
    "revision": "699afac53e5bc2075cc2b4aa9633eea6"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "aeff0e09420458a2c6f6fcd7f6a1d046"
  },
  {
    "url": "swift/better/available.html",
    "revision": "554d93de1ff4d8d6bc6bc0d55c3b6712"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "dc21d93b6eb1b27c7802a64c3cfe4da1"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "faeb7b1059ea75b230b2e9dc552429e6"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3641fb6a72c20641ae0c5b87fbb348dd"
  },
  {
    "url": "swift/better/di.html",
    "revision": "4c14b94b1d69089f2ef755151e3f0e31"
  },
  {
    "url": "swift/better/index.html",
    "revision": "97e6ced1aa33ffbdc703c316da19a407"
  },
  {
    "url": "swift/better/last.html",
    "revision": "7e5cde03d0823b9f01df1646df23801d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "fe8606e4a460be16be501b6319ebae8b"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b7ff1f1524c716ae8d8d9c2a90179c80"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "5f87114f73fad7bc849935b76397dcc2"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "f72e2ad4052b533e0d267bd66d7d651d"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d0cd360c8fc369deaa8586014f6a63ce"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4124503e392c3cfd8f55909cf2e3f560"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "79fdb3e168e1c6606935ed9ad084302c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "befda03ab595e6884d69ba943b51b4fa"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "9f24f3c05f8928884299f1bb5567bab8"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "af1649063f7601c77df3ef523a39c644"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "0b32832e883d7d0b2bf9131f2d484708"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d99a25b524c7f6e91775625f5a3f4124"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "2c9fdb701a07d03a710cb9b9e0b0a6f7"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "01654d6fbbd50b1d570e62c2900917f2"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "5cecd03c17a5df53198abb7f2f0b3771"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f9d0978bffde9634941a9549b1b935a7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "346803a93465b9ba02bc41c4e6df0143"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "59344d0ec5556a3496f0087d2776a0e8"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "ca2072fa439b845d60fef1d17b0fa4bb"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "957f4a7ef9eb03f1d6d60c6eb5dfd877"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "368a9dc85fb9a462bb2d0f2da3fbe18d"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "85f6c046bc2e3dfcd235e27fa411d1d6"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "e28ad6f94f84286b8568f224d23ae398"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "f55faf4ec0f180c8b766c0005c0e9e44"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "5202d02ad7b28fa1578991c78538691b"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a4a6eef50659dd20ef4294f192fc75d1"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "e7fa953f31eaa9b90ea43bcd8271df59"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "ac5cbd768c2f488d540608e7c66d8bae"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "fbe6c4e30ae86af72bfab7879ad64cd2"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "cba9af1c57d949b50a81e4de3090a4f9"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8f15cddf4d8335563835290c18a44920"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "8be12b62d4177cb5942b701b0a74b120"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "513d63636dada1290f4be0bbd671c982"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a82570b93f521fd61b8f2eba8b167561"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "aa5523b5c66b0d4f8dbca36d069b1cdd"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "02b4fbdbcd06562522e2afcc3dbac9aa"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "53bfbaad9ba12d2d875881cb03b9678a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "e04ff04a224678f59d3bafb0ae631640"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "a723af9cf5ef628ece9a8ae4d364d718"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "bc315dd6edfc6ab8a2830571ba87d4c3"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "fd221099b08420213185625ab1f70583"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "37a77f392a2828c940c05eb057d463a4"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "2cfdb0745c41124aa6ca22a173547ed8"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "576f66f686cd25a6395ba698bf51d2ca"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "ec2b64b84c014f14ec3cdc246d94e827"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a0ea9ee07b9ad1ec087aeda0dc9aadc3"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "f2117a033c802d0c7c6e3e1c5bb70bec"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "cb6deff5fb56a1f99762186db211b886"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "74473c3b50a0ae78d15182dd02830b30"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "1e3554289227603d19b5da75e75390ea"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "4d70deed4cf4740fc1f29356135440a8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1ab607591a05cd2c627f4e8cde47df40"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "e1368c7e87c0c6dba0e4e2011470fa04"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7c4cdce3da0c3dd6e4e634f82b652fef"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "67815091842fa738d1cb844f04d1211a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "94a84d1f286a6eff5832ad19aac047ae"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b8bfb6845f015f225e1ac7940c742939"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "57d8c05d83e0e8f1afa7305f5cf2f195"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "ce8096b60f35c41c7c09a26d3590ae8d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "179fb777984caacfc9b646575635ff51"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "f046f34ffe5efa00a32464b220b5bc73"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "4bd0e7ed0f012fe6bad32a5c84c5f805"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "65069b755060b9b0edecd190955e4800"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "9cb11eeea427a854bec2cc5b46a2b6d5"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "78491f34b7be518507245c6de363fa49"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b9cce649edf3392ed9bc45f923bf54e1"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "ac4875202299d2ef724f91e85e748776"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "c1ace7e0665348dc8d2c8335915f6bff"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "8beee7853a9c022dd595d3e6e3acfcde"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "d02bfdb55e0642d12bf3f8fcafa2579e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "92da4c1c92c0a92a18301df8c2ec9e02"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "3301c9849120da9b46312a6e5be1d29c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "462f1caa25dbc77c8779b767e0956fbc"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "4b1eb018a4518c466d21cc78e694d3d6"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9c7be4d4f1965b146a6e13d8c0044746"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "eb3d335ea5479037e5b00f672b8739f4"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "c201453fe6470fea82db1c9c7fba9695"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "7c4d2d63af0059cfb30bdc17de8725cb"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "cff81a270d4d389591a517d403d66ee2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0dfabf08097aed64f95eabe7c6d46ac4"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "755b7323f880b672e48356d02f8a1bbd"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "ef8b17b49b5371d447ce9e1e6f1e9e8c"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "592060903f039ec5e1dac765e8304076"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "0561857324203fcfc5f43694483fc67d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "dd10b11eccc3e7019dd47efe3cee5f3c"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "33380bb0f0f9c4525cfce44161943b18"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "9bb1f9011b102d04c3e690289c00e3da"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "306e6e91da5f317a34e45a6a5846a66d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "925e294548aaba92bf56c9a1ecb4151f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "16b38626d66dbca24bf1973e5b255973"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "6e01b6c3be83ae53140b2a8f42652273"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "cb0744882d783c9e4480434abab48f66"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "7bdba6509ef82bef7720f47212f70ac9"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b601552aaac0e6e09a72bd5121b6a297"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "88ef1b39c1aceb1a8628febef1d5dbd0"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "57091a67a2e2ddd1195b610f494735ef"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "a9d84c3190ef5bc205da94371fd2bc9c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "0d2670d89b8df181a42fe456f990b72b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "90861caa2817e6abbce378afaf05f2b3"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "7514e8865143b8462586d565f0310c3e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3ff0b560065cb931a4954b758ae2c0f8"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "ebf4b7ee6f5bd326c0625ace91f6d380"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "7691bb78c0d25b2fff6ef66ed895f38b"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "6b53dc1dc7f3f5b109263f337474124a"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "a227572b2b2fc27af5400311692f20b3"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "0443cd621d82c887cedb091214188059"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f08af3ce241b30c33fdce0daf0e8331b"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "cd8e09bf1427e8537e464539ea29826d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c74070d08af180c25c81ac59d4266c87"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5e1c61b723ef21e8b1ed5e259f56054b"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6bc23374ab9519bb06315889b68cfaa9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8db4ba11e1223ef7bdad4a92f5f7bd9e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d24ab2cb0525488b289494884aa8ff76"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "15c76b32cd041ca75c9876b389c56703"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3498b408c4f7975e87c5bd902985b2ba"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8e2751bc63a7c392b619313e19b07e3d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "3f1185027e6aa7edd9490300dc562852"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "89a01813b4bc8f59e9c6ee2ddfdd48c5"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "64328f53b8a30be1d5e8640d28d8f093"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "9d37df8f102108f1e878dabe90d14496"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "6c15b48d85e950e8529999664e8c8342"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b47f2dcae92c17c8408660692efecd18"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "76da955bd4e8644a28245d03da8cb45c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "33c0951ad88d97821c44317a7cad2d2a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "059e819368ad7c6bb9dd3a5b50a86d21"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b1703a33ae6c96c5ff0c192a985d6856"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "4dcb86d9105bc1a7a2a5260a023ee483"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "ce63d369fab9919c6882f778a712d585"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7bea98c91c2d305ddbdbd013139765af"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "25ae1d0dd65ea828185426ce330b9f5c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "47bf40510dc5e6944de90e635dc0b390"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "5d7dcb1fc258d6f4f68276bbcdcaddd6"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "38d03b1fba816ec7f62917fe8798c5e2"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "9d769e411347ac23f35677e94c9ba217"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3a48823197d510d0b57f4663eeae8cc7"
  },
  {
    "url": "tag/github/index.html",
    "revision": "2adcd16f1308883a619283559282310a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "de4985d6387491f00b6bc1fe85f14cfd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "764cd19b1ab7b4d4f65738b7746dc2e7"
  },
  {
    "url": "tag/index.html",
    "revision": "2468c5cb8ed7c786407d38b7dceeb540"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5d0492996782f69054208ff9ce4ea823"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "3bf9fc9982d39a6204a8d7cefe192ebe"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "1ae1ecf3c5b9e0cb4052e30ab1e1c407"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "ac140c1b514d72e158f6499e02bb1190"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1bb8fbc39e5702d938e4633909403e47"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "9ef780e2d607117731db3d81497bf323"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f378307a5799f1b263784085f18a69dc"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "93a9cbe7d938efc1dacbe63cf4fc85c7"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d352ded397154d6071007222c47a751f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7beae07e801d062e01231c34f70e22b6"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8cb82774c0f763b320a64a4ddd0b9135"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7cbde165d470360fb5c72a632304ce96"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "0a2910bda46930b9b3f9c1a872c18c7b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9b4fd50033d878d0f7c6aa012e68aa84"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "87b857cd4d322051902107b59bf88b90"
  },
  {
    "url": "tag/read/index.html",
    "revision": "b21c60a7bf121f006b9917f0ae85b963"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "3a94a3422e622b64bf425cf95b4d2d10"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "460759f5b961a2466f5e78a1f8ccf2e8"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "c94bff4d5b98cae0c28c07d16aeacab6"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "55c6dad161fb3c4b6d2191b3bed159f6"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d81b2d7f25874a8eb1da507989e74a5a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "c4ad8c010cfb57063373469bf83a1ca5"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "5a318edaaed74cd26ceaf4d7bba25abd"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "c24c6306e8035627ac66fc81b34e8204"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "9363f7c458a3ec1232b0eaa6c23d9c51"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "73c1df8cadbdb366fd43ae5e5e901ced"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "a73373d61e7206a6e0d7873c872015c7"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9f46d2182eee0278e92620211a158acb"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ed4cc0665097bf39f667efcbd305c91e"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1d327215bed6e5d35988916baf19961e"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "724809d104feb33426cbb13b53c655a5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a59c6377f4e253f9b9d45f9a6c5de166"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "84168e238d0f9db3b921495f4a67cc57"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "c14aebd6e9564bd26674f8727c125ab5"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "3cedc40bbcb420888097dee322a73da3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a7fa6d41007f0d023227d98ea991f857"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "170a4295e921c7b99cd8c5127625f0ac"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "798a58a5caa8ba3be6b854015ef655ed"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0648a1b4a118651ccdf8feef29d59000"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "108f10c746fd0625e9a00cea1899bbc6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c23ed1761cc3175524537cfd13952848"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "cc81685bed45e9487d3f2f1f27f487b3"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "73f8b488ab2f7cd91deeb3d2cd9afd48"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f6611e8235bc324d6bbb931997eb98f3"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a8582f625adb48e83d3cef7d363c9712"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "5188ad3d50597459fbdcad4f3e63de8b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "570ce19cbc5863dd4ade8682e0ffb8e2"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "143d42d09b4083d4a0a690a180742242"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d0a4e9ba402d54ccdf7085e294f34054"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "9d13d7b52b6b7d27c2e63a3d5d66e107"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "cd02621d94c290b3878fe7d8151304ec"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2f6039c7d29945e1bbc3ad89a64e21a2"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "a12da85e4b675c4422b21a3bfce56bf0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "81e1b267ec988334a4515e2b2abceb6d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2e0ca1c77318d6b1e06e6f69ea5c9886"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "aa6dbfb27743c32a28c39551596def1e"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "1bcc06e2b2b0ed85755d3096ff4c235a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "472913ef26b242777e969254644763f7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "16d3d0470fcc9bb643a14872491a37c4"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8219219561b1c83e2cb048636dba001e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "395fe207b77bc85a1120e35582ec1a1a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c07091ae1bedfe6d8486460360965b27"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0834b9ee53bb8193b3446a2cbd872ccc"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "4a59a9cba3fb5d3709e7a9e710f001fc"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "415579c1028524d99ddcf89800165f84"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "72237062c6db8d5c0b79a33c15f07ce5"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "e9ba030c2d9a02eb835a2647982ceda7"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "8c6225d122fa1e26d466c2342edde6bb"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1ec30e2c8cc1bbb28d5591091c0ac912"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad85989b1db51c23192ec1f6a1fc75fc"
  },
  {
    "url": "tools/docsify.html",
    "revision": "7eb1f70c9385e111fd066cdb97aa2604"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "6a159e829ed0c9b4068983c0e10e0db5"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "5c621cd42201c1d220c218052e1b4906"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "7e08599b6676efeff1172a1d17328cf8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5f478076139203d21b41a79287212a6e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "874f6e9a4a4ba0caab68c77ce28a0d5a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "79cbb1fd7cc5695d81ef99fbd26a9db4"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "0b2a1355320650a63228806a406627e2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f251f1ec97a30a2b3cb5a891ae2c271f"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "9d923ceb5d233006e89903dac961e7d3"
  },
  {
    "url": "tools/note/index.html",
    "revision": "a693ba68124465ac39a1642719398d09"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "36ee648a3b10434922e2c0245677503a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c86d541825b4d8e86daf00e6fede6e90"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9aa9bec8f54b749f1e7e3d5115339e3f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "127943c932dbf91b9e18a6292692a3d6"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "8618f2e0a59d0e5effde7053f9b3fd50"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d36d0d58f9a144faf86e58bd26555944"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "411bce3bffe4bd15257f78f2b922025b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b95b79aacf1dd3cc4022a2adcab9e791"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0ce33a963650104e2f349321ea62a91f"
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
