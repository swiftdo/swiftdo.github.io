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
    "revision": "a2e51b149f2caf1356f2c32500b2abfd"
  },
  {
    "url": "about/app/index.html",
    "revision": "b7ac183285a364f6bda77bf58f111f83"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "463f05bf5293ac6fc0c42675c818443d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3ecbde85934b66f6843552bbebc280dd"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "ecad827f38dcc4b5cd04899d4359d2a2"
  },
  {
    "url": "about/index/index.html",
    "revision": "05922b624bd866ac2ff262bddb820906"
  },
  {
    "url": "ai/index.html",
    "revision": "459f9ce692f9f590d36a7639298190be"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0485b0b6ae163141f0a520d9b1b3c328"
  },
  {
    "url": "assets/css/0.styles.69e419d6.css",
    "revision": "84df19b9cf0610a91946ef13394769e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.aa25a933.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.bc471f7a.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.6560b627.js",
    "revision": "20824761898e44a45f81f7c19517f9b2"
  },
  {
    "url": "assets/js/101.c970a2fb.js",
    "revision": "becf43146aec87e972a79c96f3b56258"
  },
  {
    "url": "assets/js/102.90b2d499.js",
    "revision": "ccea25e0eabea3f9399ab213793193d8"
  },
  {
    "url": "assets/js/103.ee2d1305.js",
    "revision": "05745ce9bab31e418d1340cdc4ff5982"
  },
  {
    "url": "assets/js/104.042b167f.js",
    "revision": "9ebc73d187c7373b0a500c82d8e8c640"
  },
  {
    "url": "assets/js/105.86984b6a.js",
    "revision": "2dd4b831fa36c070020e77cd9a8b225a"
  },
  {
    "url": "assets/js/106.2ded46b6.js",
    "revision": "15adfc773b7db8f33bb6abd67edb3d09"
  },
  {
    "url": "assets/js/107.66d7abc7.js",
    "revision": "8bad861950126092c8781dae06fb8373"
  },
  {
    "url": "assets/js/108.2a25ebe3.js",
    "revision": "be6fb58575172a6e845778a663dda5c4"
  },
  {
    "url": "assets/js/109.2edf2ab9.js",
    "revision": "8789b30a7f6f15a6e242e937c0106cd3"
  },
  {
    "url": "assets/js/11.42f64f30.js",
    "revision": "d4f9488528383e31d58059bcc6041eca"
  },
  {
    "url": "assets/js/110.41ae5aa1.js",
    "revision": "777ed7afedfe74d0eaa43fdae5027fd9"
  },
  {
    "url": "assets/js/111.8b2af7d5.js",
    "revision": "9fbb583ab005fa5a1e015758a5bba16a"
  },
  {
    "url": "assets/js/112.013e3102.js",
    "revision": "4a5dda3f461e73f6f6e5261a4ba9a47f"
  },
  {
    "url": "assets/js/113.7cc13fdb.js",
    "revision": "b3b1fa2c215a1f2e5cb037c2681e0257"
  },
  {
    "url": "assets/js/114.6224e82f.js",
    "revision": "e8191a6db0b2006c1e8f7643313a6fb9"
  },
  {
    "url": "assets/js/115.9f218a07.js",
    "revision": "a0b6ed21df042beb052f5b741ecc5537"
  },
  {
    "url": "assets/js/116.f55d8909.js",
    "revision": "e05cfd38086c5b2902b613c14701d661"
  },
  {
    "url": "assets/js/117.a48336c0.js",
    "revision": "f499c8c42278c68ec5f5a885ae47971b"
  },
  {
    "url": "assets/js/118.1a15c090.js",
    "revision": "0e77844588ff75262dec8c2d081fb662"
  },
  {
    "url": "assets/js/119.8379f3a4.js",
    "revision": "d687c9a9dd5d7eb60eaabceada5fc6a1"
  },
  {
    "url": "assets/js/12.8d9c5293.js",
    "revision": "d80e88e3a98475be4677c85e2d7a052e"
  },
  {
    "url": "assets/js/120.7b33b0b8.js",
    "revision": "0d94ea3bc153f893b5afb536b8291aed"
  },
  {
    "url": "assets/js/121.eef383cd.js",
    "revision": "824de99776808fdca39e1f869b3f5766"
  },
  {
    "url": "assets/js/122.310addbb.js",
    "revision": "0c25feb14bf4f34a1652dd18c336c53b"
  },
  {
    "url": "assets/js/123.e9d05ecc.js",
    "revision": "2ace2ed484bed618978010ef3400abf8"
  },
  {
    "url": "assets/js/124.9b3dea0e.js",
    "revision": "1a4e79fba7bec7d0db3b00b18d10aed1"
  },
  {
    "url": "assets/js/125.a6ec4b6f.js",
    "revision": "223819be4b62d59e11cb36292810d9a0"
  },
  {
    "url": "assets/js/126.05666764.js",
    "revision": "7d0931ea7d7a2550a9a8dbf80313e584"
  },
  {
    "url": "assets/js/127.ff583c8a.js",
    "revision": "e4844045b8b482e3d4205f459312e5b2"
  },
  {
    "url": "assets/js/128.33a70bfc.js",
    "revision": "1a7e8b221e9019a71af68439d3aaa4f4"
  },
  {
    "url": "assets/js/129.b4976bc3.js",
    "revision": "3a084d25775ec344e09ed354dd4553e9"
  },
  {
    "url": "assets/js/13.d6981eb5.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.e085174e.js",
    "revision": "2d14eb03202ab412441d289c543edbd0"
  },
  {
    "url": "assets/js/131.b46da1b6.js",
    "revision": "3dc8a3ee4a9141bb8685557ba1255f94"
  },
  {
    "url": "assets/js/132.1cd5cd4d.js",
    "revision": "d9d5a3d74947d3617d83752ae0859c66"
  },
  {
    "url": "assets/js/133.80b66590.js",
    "revision": "ddd70ea45d6534f02185af81ee0da1c9"
  },
  {
    "url": "assets/js/134.16ba2b64.js",
    "revision": "e2aa4978a306f87b8562403153b9cbb3"
  },
  {
    "url": "assets/js/135.edb10a6f.js",
    "revision": "d74ce4c9b7a8940c63d690535a1af0e5"
  },
  {
    "url": "assets/js/136.9f282d8d.js",
    "revision": "1d1b9d687d78823d4a74b98ee6e247df"
  },
  {
    "url": "assets/js/137.d1afe419.js",
    "revision": "3b013e1faa1ddf416f8e0bd12ae6b327"
  },
  {
    "url": "assets/js/138.ca772163.js",
    "revision": "79e5ce555aa5ddf8a25459c773fc9897"
  },
  {
    "url": "assets/js/139.2b9149dd.js",
    "revision": "097b11e6d0297cac862112890f7f9ce8"
  },
  {
    "url": "assets/js/14.7a946a8c.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.2e628bab.js",
    "revision": "fe8831c97000f4c052433f150064d6d7"
  },
  {
    "url": "assets/js/141.b137c79f.js",
    "revision": "621d5150834ac7c38ff2874ffa81859c"
  },
  {
    "url": "assets/js/142.6c548d24.js",
    "revision": "df9e2b1821a1e1cf5201b2f8a8edca1f"
  },
  {
    "url": "assets/js/143.512af4bf.js",
    "revision": "d10c489be161b14726ca8339c87f87e0"
  },
  {
    "url": "assets/js/144.91f1d214.js",
    "revision": "268858f106a20afb758442504e8702e0"
  },
  {
    "url": "assets/js/145.a902d886.js",
    "revision": "aaf663c7329c9191bebab1248e1164f0"
  },
  {
    "url": "assets/js/146.d57194d3.js",
    "revision": "ace67da79293bcd6661017d852de1b72"
  },
  {
    "url": "assets/js/147.91df0d6a.js",
    "revision": "cad74651608d5c330d444fd480b2846d"
  },
  {
    "url": "assets/js/148.99c0bf80.js",
    "revision": "316177e59b77d748a77198a354fdf468"
  },
  {
    "url": "assets/js/149.a8b7c49f.js",
    "revision": "bf8cb5162ceee5f169b5493e3ccb9ab0"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.1660c2e9.js",
    "revision": "22d7385421a6d1c930178a146706468b"
  },
  {
    "url": "assets/js/151.6e477d14.js",
    "revision": "bc02369c82dd1b7b5368f724ac12a796"
  },
  {
    "url": "assets/js/152.18853804.js",
    "revision": "7a9a04b5ad509df1b9eb2c9f2c9349fe"
  },
  {
    "url": "assets/js/153.f0b4c92b.js",
    "revision": "ccc2f7ab509349a08009f3611696983f"
  },
  {
    "url": "assets/js/154.2bd4c8b1.js",
    "revision": "5624393aab6cb018ebeab120c00a5f81"
  },
  {
    "url": "assets/js/155.e3acdf20.js",
    "revision": "c28fb1b0860018f61137fef28b40e6d4"
  },
  {
    "url": "assets/js/156.8d44c1bf.js",
    "revision": "3e98d25194337983b85e9c143e306a51"
  },
  {
    "url": "assets/js/157.cab168dd.js",
    "revision": "8d27816d08e17db493891241c47629b1"
  },
  {
    "url": "assets/js/158.bf287653.js",
    "revision": "bad21e0be62fec67bdcbc80748dafb24"
  },
  {
    "url": "assets/js/159.bc17569d.js",
    "revision": "9c3dfac972b7f90e80ffe9c06837631e"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.50ed4dce.js",
    "revision": "0007db3b04956cfb8a01eb5960474fbd"
  },
  {
    "url": "assets/js/161.cb72c02a.js",
    "revision": "2ce2c0b12361a959ded2f2d4eaacda36"
  },
  {
    "url": "assets/js/162.b20fc9d8.js",
    "revision": "edf1382143085ed8651e5853c5161d00"
  },
  {
    "url": "assets/js/163.45975365.js",
    "revision": "78232194cdf210babda2d5753609570e"
  },
  {
    "url": "assets/js/164.4d5991b5.js",
    "revision": "1e57818be748461aa45a465358ac1c45"
  },
  {
    "url": "assets/js/165.043c81cc.js",
    "revision": "1adc10f8a5e63313559cf931d588677a"
  },
  {
    "url": "assets/js/166.6b09f1cf.js",
    "revision": "708c7dfd03c109275eca4c9bc1e24c7c"
  },
  {
    "url": "assets/js/167.3c583d14.js",
    "revision": "6c468bb3cf3978f0386f2acb07dcbc26"
  },
  {
    "url": "assets/js/168.f555f7e9.js",
    "revision": "f47eed3d05c6f8f6cc2a185973b1ffe3"
  },
  {
    "url": "assets/js/169.179090a7.js",
    "revision": "731dbb74e38d98884847aa3d49e34654"
  },
  {
    "url": "assets/js/17.adbf4e27.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.aea2b166.js",
    "revision": "d568fa02cbcefefcd788e356447e0893"
  },
  {
    "url": "assets/js/171.a98d2987.js",
    "revision": "be35a68bcb57c4bd8fe2220f4cf70bf2"
  },
  {
    "url": "assets/js/172.25bafd90.js",
    "revision": "2ce9d4dbb0530b92eccbe24b25fa3435"
  },
  {
    "url": "assets/js/173.d9cfc168.js",
    "revision": "c4f52df7fbf88ec07e5e68d90eca87e6"
  },
  {
    "url": "assets/js/174.e1d041fb.js",
    "revision": "db309c89cbb06e5f831a7af31806a9df"
  },
  {
    "url": "assets/js/175.041b4428.js",
    "revision": "ed434da8eca45837f71464f16a4953fe"
  },
  {
    "url": "assets/js/176.2b8d35c9.js",
    "revision": "d48cf0486874aa9e890924dda89d64b7"
  },
  {
    "url": "assets/js/177.b5adff80.js",
    "revision": "3accccafc179bc34c9886c420e336fcd"
  },
  {
    "url": "assets/js/178.daff3aa3.js",
    "revision": "af796f5ec6515cd5925ac1b821afb347"
  },
  {
    "url": "assets/js/179.fee83223.js",
    "revision": "b459fc19be79169f85738b0de435cb3a"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.5d8f36cc.js",
    "revision": "636b1e70d046a03b20d36583900895b1"
  },
  {
    "url": "assets/js/181.59953d22.js",
    "revision": "0c5540917d02976e2750418855ab8f40"
  },
  {
    "url": "assets/js/182.35a6b4c3.js",
    "revision": "b53ab95b2bce3fff2f72146b06a70f78"
  },
  {
    "url": "assets/js/183.17c4ae73.js",
    "revision": "f4397ea965bcfbb371f8a380403b8e52"
  },
  {
    "url": "assets/js/184.5ccda8c0.js",
    "revision": "a7b6b597181cfb9e7720735eeab0b205"
  },
  {
    "url": "assets/js/185.6238cf00.js",
    "revision": "40a017c3764df28704d2804adcfc39fd"
  },
  {
    "url": "assets/js/186.127e4b7e.js",
    "revision": "ef354b0ccc7da3bf37b1b6b20392d287"
  },
  {
    "url": "assets/js/187.b456c5c3.js",
    "revision": "63e1e08624c5b6466e7f7bec72cef683"
  },
  {
    "url": "assets/js/188.74edaac0.js",
    "revision": "bbd4ba40e5f44301a2efc1a9b67cbed0"
  },
  {
    "url": "assets/js/189.76db22a2.js",
    "revision": "90fe665467116e9a54db882a1c0a830e"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.9437abbd.js",
    "revision": "199c4e7caa2986efbaa01d6198b79f35"
  },
  {
    "url": "assets/js/191.9e47314e.js",
    "revision": "2c2a623fab8cb3e6c5fbbe6c897ffd35"
  },
  {
    "url": "assets/js/192.a13ea326.js",
    "revision": "829b7e04c061c7ffeff2a49cfb51230e"
  },
  {
    "url": "assets/js/193.e9a448ca.js",
    "revision": "3eb7da8e67918a4925a7b2f8243f69e7"
  },
  {
    "url": "assets/js/194.111f3a9a.js",
    "revision": "721fbeb41f43398638624a72863e5643"
  },
  {
    "url": "assets/js/195.5a715e14.js",
    "revision": "ae87bf74cfa670fa147db5c90d988113"
  },
  {
    "url": "assets/js/196.2204065b.js",
    "revision": "ead5b64a24181b5f509ff0986b22f573"
  },
  {
    "url": "assets/js/197.c777d77f.js",
    "revision": "15170a575c1d4314f9ee68f19107036f"
  },
  {
    "url": "assets/js/198.96aa6cd4.js",
    "revision": "391f70e49cbcf79147365d0eeab6c679"
  },
  {
    "url": "assets/js/199.3064943b.js",
    "revision": "ea2ebcc28502d24d063cd9769e91fc99"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.e7966a51.js",
    "revision": "938c0ca564b943394032f76bbe37a00d"
  },
  {
    "url": "assets/js/201.98a59997.js",
    "revision": "d3d4aa25aebf78dd6e46479351f8164a"
  },
  {
    "url": "assets/js/202.a52b2498.js",
    "revision": "470a090d9d00065b9497142bd82d66c8"
  },
  {
    "url": "assets/js/203.ca179f54.js",
    "revision": "cb3ffb729c2510a94968299ee84f8479"
  },
  {
    "url": "assets/js/204.023bae73.js",
    "revision": "18ef9f7874b2b1421c74d001360bfa05"
  },
  {
    "url": "assets/js/205.5b45146a.js",
    "revision": "7a53a71bb5e868c75c0146293e3e23d1"
  },
  {
    "url": "assets/js/206.7d342f6d.js",
    "revision": "f4e5a8bcf227ba123868c946b70f606d"
  },
  {
    "url": "assets/js/207.2e01fbab.js",
    "revision": "9c5a4ec60a2f75bf41dbfa9e44c71d66"
  },
  {
    "url": "assets/js/208.7c74aa81.js",
    "revision": "164c82085890c9166c4c3a232ec62860"
  },
  {
    "url": "assets/js/209.f26bba12.js",
    "revision": "7eaadc8ebdadf4b84f64f1159b0d2564"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.0c127d83.js",
    "revision": "04fe5fd2507c353e2b5cc6a209304e3b"
  },
  {
    "url": "assets/js/211.8b1181ec.js",
    "revision": "4a9756788a426b5c4850f99830c3016d"
  },
  {
    "url": "assets/js/212.0202d677.js",
    "revision": "ed25c4c87a495f2f7f85fbeac2480212"
  },
  {
    "url": "assets/js/213.defd8c17.js",
    "revision": "30a76ee6d43265570ee4d335ce8313e3"
  },
  {
    "url": "assets/js/214.85a79cd0.js",
    "revision": "e9d54ef38f60b40caa3e92a145345c19"
  },
  {
    "url": "assets/js/215.7ef524b3.js",
    "revision": "74d37808980fe6a06986cd509913cf35"
  },
  {
    "url": "assets/js/216.51cfe185.js",
    "revision": "8b65752b4e5ee4835c5aa38b03cf05f2"
  },
  {
    "url": "assets/js/217.8ce35237.js",
    "revision": "f607e1987974ca01a49acc8a25280848"
  },
  {
    "url": "assets/js/218.e1424083.js",
    "revision": "df94798552c4f769b6e2db1346873f66"
  },
  {
    "url": "assets/js/219.0f2ec8ff.js",
    "revision": "d2111a1fad26b1a1be199b5361f6b735"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.99959e27.js",
    "revision": "3c4d28165b9fcbde0833b90a4295ad71"
  },
  {
    "url": "assets/js/221.427810a3.js",
    "revision": "e99197fba4bd36245feadbdb28a3d6c8"
  },
  {
    "url": "assets/js/222.c801eaf8.js",
    "revision": "44e60f4ff345ca9590e7cfe68ff1aa72"
  },
  {
    "url": "assets/js/223.2d7cb602.js",
    "revision": "6744b29f7a419d49d05b13875f47c4d2"
  },
  {
    "url": "assets/js/224.1a946310.js",
    "revision": "d20fa37a588e6c2d0085cba8ba908c26"
  },
  {
    "url": "assets/js/23.9f5c3a3d.js",
    "revision": "89b957d3082166f0288c0324c110cb44"
  },
  {
    "url": "assets/js/24.f4ff0702.js",
    "revision": "c17031d89613a2580ecff5a9b138d7fb"
  },
  {
    "url": "assets/js/25.ef9e6863.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.4129a7fc.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.11ae4590.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.9f159f91.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.4f8fc819.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.799edd4c.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.43abe8a4.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
  },
  {
    "url": "assets/js/31.228a1769.js",
    "revision": "72111967edccec374cf25773de6d7f82"
  },
  {
    "url": "assets/js/32.165b6d7a.js",
    "revision": "aa6562ae9c19d3c5bed61548aeec5261"
  },
  {
    "url": "assets/js/33.21573b42.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.b2e76c72.js",
    "revision": "a47a0be7f06b9634eb77a7f424c67eac"
  },
  {
    "url": "assets/js/35.88962c32.js",
    "revision": "065010bfb77dadaf44b00a7edbed68bf"
  },
  {
    "url": "assets/js/36.b795d8c0.js",
    "revision": "062fd7e7cdc9c9b16d8895b0f99dc9c5"
  },
  {
    "url": "assets/js/37.356ed9f4.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.2a4dd5f5.js",
    "revision": "978586b909be63129e5327d1fd722d89"
  },
  {
    "url": "assets/js/39.f781bb97.js",
    "revision": "6cf602ec5ac7fd1aa415e6548faf82df"
  },
  {
    "url": "assets/js/4.d8a1ff43.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.4c76b795.js",
    "revision": "e825220ffea08caa9513603f0e9569cf"
  },
  {
    "url": "assets/js/41.198933b5.js",
    "revision": "54bed834792b74759124cedba4d88353"
  },
  {
    "url": "assets/js/42.8d322209.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
  },
  {
    "url": "assets/js/43.30f504e8.js",
    "revision": "d0b46bad0084bc7cc152a7813709964f"
  },
  {
    "url": "assets/js/44.b28e6add.js",
    "revision": "b9c1a6fa58813164f3d5c0cc4b2ad519"
  },
  {
    "url": "assets/js/45.ca6ccb32.js",
    "revision": "7a2c6c020cdc4dc8ab2fb9b49636d557"
  },
  {
    "url": "assets/js/46.7d8cae06.js",
    "revision": "a53df765bcc6ff83040be71272353f91"
  },
  {
    "url": "assets/js/47.e02f0a81.js",
    "revision": "389bbac7bccc98b46e7d512beba3723a"
  },
  {
    "url": "assets/js/48.a956ea1d.js",
    "revision": "b45c999a1b643e45a815e72b0ecacc16"
  },
  {
    "url": "assets/js/49.55583a14.js",
    "revision": "3e9b6af5731486349d6fbc6bccb401f8"
  },
  {
    "url": "assets/js/5.2d5717cc.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.421e9ac2.js",
    "revision": "978a5b5ceae53d041decb86daa9c3351"
  },
  {
    "url": "assets/js/51.5f4fc92b.js",
    "revision": "43405a97a5aeae7a6ca38602e18bfb78"
  },
  {
    "url": "assets/js/52.8daaa0fc.js",
    "revision": "189d83f1b6d303cbe3dbf6d25db02d81"
  },
  {
    "url": "assets/js/53.b1a72dfd.js",
    "revision": "c8ddfff5f859f1481e1b225386945bdb"
  },
  {
    "url": "assets/js/54.e60de045.js",
    "revision": "f353355994c69d96f79575e96fda3b0c"
  },
  {
    "url": "assets/js/55.8aef5ef4.js",
    "revision": "440fcfa3e84ef447c7f904d67f5d31fc"
  },
  {
    "url": "assets/js/56.83002e20.js",
    "revision": "2e843e7c65b7e51ed28faaec8b25b492"
  },
  {
    "url": "assets/js/57.49899604.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.d3306965.js",
    "revision": "e39521e398c451059cc8ee9a8010172c"
  },
  {
    "url": "assets/js/59.2ef891ca.js",
    "revision": "b35f336d09e2f3723e618f5782622354"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.6514d71e.js",
    "revision": "20428aec27a133729b599141cc0032be"
  },
  {
    "url": "assets/js/61.4e6499d7.js",
    "revision": "0a90b05e03a9f8ce591836831b3fa5c3"
  },
  {
    "url": "assets/js/62.241ed18e.js",
    "revision": "f2232581d471418b0272709ba9d2c392"
  },
  {
    "url": "assets/js/63.e0c7dfe0.js",
    "revision": "95e0334628cfd5a12cf713d48bb6ddd0"
  },
  {
    "url": "assets/js/64.a46be040.js",
    "revision": "8f85290a6c45bc1157b7f22b3165ba2d"
  },
  {
    "url": "assets/js/65.bef781c6.js",
    "revision": "9d1a2029aedd41d9838e6dfeb4f45cd4"
  },
  {
    "url": "assets/js/66.fdfe29c2.js",
    "revision": "ded1adbf786675f0f6b58e0edd3d9c49"
  },
  {
    "url": "assets/js/67.4713ffc8.js",
    "revision": "f6fd2a9adb70ce5b73f603f46415fa58"
  },
  {
    "url": "assets/js/68.f8ca7d2d.js",
    "revision": "30416ec41756279c6a3a8faa0f85521e"
  },
  {
    "url": "assets/js/69.164acd8b.js",
    "revision": "42fa6a202a508a9deac08c010eae6965"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.9fd465e0.js",
    "revision": "17f805696201d9e7cb967a7d4874a83c"
  },
  {
    "url": "assets/js/71.0b318b3c.js",
    "revision": "4304182279bf3fe8b04377d5fa66186d"
  },
  {
    "url": "assets/js/72.59be8861.js",
    "revision": "b0281061ac8db19789e5b97a69bfed91"
  },
  {
    "url": "assets/js/73.47d7c490.js",
    "revision": "935c17630df7b0a262b6a9b7018e3d19"
  },
  {
    "url": "assets/js/74.78538f2f.js",
    "revision": "28e51fc6e591f8395b9513f477c2d6c1"
  },
  {
    "url": "assets/js/75.cc8eaa99.js",
    "revision": "829b3d8fa7c103cadf8f724613db5735"
  },
  {
    "url": "assets/js/76.6f2fb2fd.js",
    "revision": "c773a5e35f072c082e96b58a7cdae138"
  },
  {
    "url": "assets/js/77.e6a5cf48.js",
    "revision": "b1fe0def8b5edd33874752ea7a657e98"
  },
  {
    "url": "assets/js/78.06abf235.js",
    "revision": "aa1f95231597c74f0a76fbc55333afa9"
  },
  {
    "url": "assets/js/79.a1b85b34.js",
    "revision": "3b8eb7cbba2c54e3d3b8427089e8c66e"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.60c49e1b.js",
    "revision": "9a25115ff498c035c141f7f13b75b384"
  },
  {
    "url": "assets/js/81.0fa527bb.js",
    "revision": "3a8aec5ed2d395d78a81df5f6b33a45c"
  },
  {
    "url": "assets/js/82.3878d3a3.js",
    "revision": "4276d6dfdeb2bafea0ae46544112d527"
  },
  {
    "url": "assets/js/83.1ab125f5.js",
    "revision": "b20f2ccace12a2e7dcb56927df248264"
  },
  {
    "url": "assets/js/84.ece69aa7.js",
    "revision": "a8577754dced15e9f32b2c486e3abcc0"
  },
  {
    "url": "assets/js/85.3496a36e.js",
    "revision": "4254f40d7a44c06d9ae6b026cd81ae79"
  },
  {
    "url": "assets/js/86.6b6987d5.js",
    "revision": "9a974851a7e0309ba6763953046ec352"
  },
  {
    "url": "assets/js/87.dc24de52.js",
    "revision": "fcbb270e6916bd47ffea64f5738c53c5"
  },
  {
    "url": "assets/js/88.5a8e1361.js",
    "revision": "bbff24b25bdce78e5742cb975d4fd0dd"
  },
  {
    "url": "assets/js/89.046e357a.js",
    "revision": "1b932cccc1de5f47ce4eb65cca2a001b"
  },
  {
    "url": "assets/js/9.146dde97.js",
    "revision": "860f53fb242e1e04e0f5a25d10282810"
  },
  {
    "url": "assets/js/90.2837a7d4.js",
    "revision": "0d4c238345478bc8b5fc37e2b1de980c"
  },
  {
    "url": "assets/js/91.15806e36.js",
    "revision": "5468246796a3eff1edb078542d775a5b"
  },
  {
    "url": "assets/js/92.04b9c26a.js",
    "revision": "17a59ada9b9d832128a6508bc2d84ad2"
  },
  {
    "url": "assets/js/93.28912d0f.js",
    "revision": "5035155ed045d5a510b4e7cb013fbb70"
  },
  {
    "url": "assets/js/94.c2738daa.js",
    "revision": "97e1e38ea800a0f68babc9308bf570b1"
  },
  {
    "url": "assets/js/95.c37b2174.js",
    "revision": "5927f32cdf3f3df31d596a36d169a275"
  },
  {
    "url": "assets/js/96.5bcfb84e.js",
    "revision": "ab8c2e6d9ca34547c07063341ce5d3ec"
  },
  {
    "url": "assets/js/97.4de6a155.js",
    "revision": "c24da6b8a578f7f8e173b5c746c44acd"
  },
  {
    "url": "assets/js/98.c329d5dc.js",
    "revision": "d76aa8ceaa312a86c2ee6f3e07d70a0f"
  },
  {
    "url": "assets/js/99.90294734.js",
    "revision": "0829c5a5adc02102117f2bf3078de6e3"
  },
  {
    "url": "assets/js/app.0aa16e2b.js",
    "revision": "c2b1dd29e1a7f85b5097f36b8ef693bf"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "6393b8375129674071b2430cfaf5ae66"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "28504237e05e2bc24b1d0e25a0bc30d3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "e4c983a17522fdfaa779a09181be6256"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "453607922b1de0b9a7ae46e0990b5319"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "97346a6b17aaac4bc0a8163e2c92c555"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b41ca4b496f59cdfe7d63ece7cae84a2"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "970dcfdad47740bd0f9c9eaf7b83d78d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4b4be985c2ee55377e3813d5b428beef"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "d79e5905514b58ac79cde377d15fdcd7"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "cb9d21c135bf938db2697a50bb309ec4"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "bf3f0ddd0b4010fd2c324af348cb7699"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "4b287caeaf450dcd94345d58b318fb9a"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "7207d8b1c044e4899ea465372b07500c"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "0934fe88560c518083727927cf743385"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "b25946f30b4f9fab208ed7e67e5757e6"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "509a90a405dd83a3828db9514671a8cf"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "6dd76438423c9bcbb92ea39a4fea031a"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "9b56fc325c8529deac92f71d47f54ca1"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "cd68c6d558814c41ad6039eb9a1a6e8a"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "627ed905bacc83bbe385b846ed493df0"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "1b441896e408c4cf843ba3b39a6ae4c4"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "b6599c44926804a4b0dc2ca52d38698f"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "381db6d899b6562fc6b0d3080c5e4f08"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "34b9732dedc3edb37987295d3133305e"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "5e2aee52bdd74db3995c8e9a4f96d895"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "0f72f38788003e90b3bc1815c49c599b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "f8b8d3d956ab96943c76387c251f41dd"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "e1f1c1f41ebfc6fca1ed40f17a3cba3e"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "33d9b4029f04455be98f6990edee30a5"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "29326d37226b8df96e845666facacc22"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "7ff96b31d630fd51343c84c7d8c315fa"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "a3d71c9e1c6dfed039b483abf648821e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "702a7890dc17d4cc601ff4c120b10032"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "a439475be3f19b3dbe1e485b3075620a"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "1ef35ea3568ae9adf679b5051b09662f"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "2e5463a1c33aad3aff030a3d80b065bb"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "0785367039f1e86b3608dd0a4413a23c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "94d308b97464689702a703db4049f0d1"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "bc009a26d90c87c3f778aa0ca4fd7a2b"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "97112367e9af64d5a4e9cf80e9f23ce2"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "5cea0b24e6d5cc855eefcfa76ac3f1eb"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "fc503253bd2e3c4a41d9687ff2bba1f5"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "bd544ccfa372ca03b292e3ab861b1409"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "b5fc0f37908b50f85f22f8b4bafc5371"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "94bddd1e06448e5e88643be7f8a78e15"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "6242d7fbfa67f2a422e138cae9f2a409"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "5dea9a1a54012551e608f5d251a88d0d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "92e2b0ff0f004e6fa6a26807141bef8d"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "cd4e9622628c18bd4582686ea9fb2f4a"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "67abab25342cf31e178fc33b1f4f1ce3"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "6f69fb55f6670cadfdea016a9cbcf65d"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "2480a1d3b8d3f6821a5bd06d4707602d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1bedb0263dd10dbd2e08a7e311064405"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a38df2854bf5ab4ab57602ee90cb48cc"
  },
  {
    "url": "book/index.html",
    "revision": "750d21aefe2bc51d37abb44d19d332f5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "6015d644ede9e5cf6868ee4086309289"
  },
  {
    "url": "categories/index.html",
    "revision": "f227406b2224095c094c7ff29f2744e4"
  },
  {
    "url": "figma/index.html",
    "revision": "46cd25cf5e99fc5487aec00e9c642e2f"
  },
  {
    "url": "flutter/index.html",
    "revision": "bd9e607e5e3c4873df791bc3c5d25b5d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7c88f5f8e4949f3df6cfdafef1de92cc"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "41ee9425e4ef0bdf9f3c2753c37d4305"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c7bdbcc8c2d2528db700e8381692a8e6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "db8010184ce0ec128d070654c3a12640"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "ba8f7b194be55338ef6c6f4338f6fc6c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8a0d2356b1fb4a6282a2ec34ff4b59a4"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "43d9e99d3d5ef664ff5beaea6e167ca4"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5964b46858b911ae9338bb9b7e4c931d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d820468539b4071fcb9dcce918b16bf6"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "43d28e02e0a9b5443873a526caa9aa35"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8c52d38e9f971865de82677712fd366a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "af3222200aa733601f115d786f9dbcc7"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "da14f5198c61e15d1de1cba68b8e92d5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f717b301b079f7721f20ccae041567ab"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "430dbf936e07755d3f037599a4d8a0e7"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "73e3de617e156a3fa4ce3dd1b7c63410"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "d974182fe496ee2a29d552fbc444063b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "e171545e229deb32d86a984757e0b678"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d0151c1ac7abd8df99ebfc02e6aa8e7c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "38302ef70fb09e8f736b6ec28aefe527"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "8f7bb0b050cd52e2d9c7e3f434b2f78e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "5e86ac878c088af747e61899d6bbaf1c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "371f233f16113b72c70249fe2fde384d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4abe641a9ddf44d9cac8bff6f62af391"
  },
  {
    "url": "haskell/index.html",
    "revision": "0f1b0c1399710c4f5a348377db548009"
  },
  {
    "url": "index.html",
    "revision": "c8bbd5a78d70a47cb1d31cc35aaa596a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "9fa51beef4a9d03810d38d453ef82ce7"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "1601730bd1e220bb116775f4034ce72f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "e17ecb2507be4b803bdfc887d60808b4"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "a5aa73756f2b6bb5d6fe2ce3a6bbd6f9"
  },
  {
    "url": "python/index.html",
    "revision": "eb0f12247b692cd6a15edc88d29b070b"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "03be2215b49e6779553beb1c1e5a7f16"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c7679b2378d400d2f496a586ab2973d0"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7006053f17a6b1f6c925f8dd413132c7"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "78a84b12cd46a4d6cb6de20990514093"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "190ebeb296598998910f1c69149b7aef"
  },
  {
    "url": "swift/better/di.html",
    "revision": "31d30e203a58fe09f206fc2219093d48"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c9c9f007d5964afbb7f2e739d9fdab15"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "bc280026b641f1d2b05018bba549f5fc"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "dda1a412a7d87a9479c631e2f6b5eb5f"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "0a526e1bbc4e3b1d6dfb6f7a944c3917"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ce310711e72714ad1ddf4747b598514e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "fe542d99f9b4dba1fc2097710de6b5ec"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "3ea351e97f1980c834949bd2db1c9d9c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b0fe2d960659c774c6bb98e265a4e7b0"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e8d75b1aa5adb122603e157b798482b9"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a9c701a139f5525662d92e4bde892a29"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6bf1d6b4e0ef50f04146f781bc3df2f2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1a8d0877e42bf5a15d81dc8f31ebb86b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "98ad5322b1c1419b9da16b78124d2d86"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "1282a20d3ab94417cb747235eee2262b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a4bf0f2b4ac24b2f8ff27a95febb603b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "5d5ae688464e1a67f650c1ae757f55ea"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d5c99622612f57a8778a73c164e0e95c"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "47b4a2254bc626b6f9c35db44bc67a3f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "718983314762a1d5ccc9b641a2e8af42"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "fa2716fe2f6ead703662d33c9266571b"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "8fee995c59656eea17b9ecbbd7a40db5"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e0e9263755d39652b240fefd08976b7d"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2ac0275275b3bfef0fa4854225f9fceb"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "7669886f0d8ae705dc6953d898b0620b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "0983c2f40d6faf8840110c1c3b5bfb2e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "35423006e123422f2de9e54038806889"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5b4054c01c8a62e455bf70e9c1a40951"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "3e6340e6eda6033d90c25612da3ff263"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "660038ec093706cd367f8b783ff845d9"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "716c5242fd7bbab6480c681a424b39bf"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "aeedec2f2e9370f240f6f20e0d9528db"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c15cd991ca97d9ea19d82da501f84a24"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "e93f7e9d59d6e882348a2a8fbbaf136e"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "ae35c787fb879ada30f1355e2344d215"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "caf82cdd1ec9c2bc02779d20f05ea84a"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "a95b5db5b487d8278eaa09ead3cd7561"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "57f8bef23d836e4b81b2dd5102ce20b4"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "764062132d7ebc22a678af1e223e9579"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ed9d979641fbd3a16d4c37869adcc450"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b6d0ec5d2892da0057b56bcf48cf39ac"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "a4c2926572db1386619cb250d3af4c16"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e94d66e9b85dea498794f5a48c958125"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "bc2018579b5554404b12338a2f5eede9"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "674b686a1a3633f4c3702b36546ad853"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "74d2df51c230e0a5605193adff61c0a2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "dce49630c1bb220e4c2f3a1e1d397e13"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "250315ee20677d69d4593a7b7e886602"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "4f3cf7fcc5c5f9b61b322270a61d79d4"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "2f752a9bd8ebe29332d029899ca4dc7a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "67e085b96aa25e246bfd06ffd4e68bfd"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "9ff8f78bc7c43929564ca4ebdd5276cc"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "700284caa12f54fe011ed6084dd7db91"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "3cd798c624711385e81a954006f4c158"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "6d036e4dcf9948de87c8e7e66733c04a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a677358d8b14e23b846793301f4b4c81"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "bfd54e00ba0f852322061ef58b144a8b"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "204dd8020d21cfd7fc18c0b43253da9a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "017f3ed7e9ad56dcc1523440df51e460"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "aa9037ea88cbb018ebab8796e6ceab18"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "85146540267b7deee6eaa3d605e6d692"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0fb79c9a470df3021243a662fcce2a61"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0f125b2f971d65714db55ffce5227a70"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "8615c851805149c78204e655073ef159"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c7bbcf9915bdd9ad7bb79009a56d0152"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "8f2af81b67781be80a8aa6161e02c2a6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "bc5a49d38b4b8d2a861ccb4df7c57a2e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "133520d2fd58d994008cc033f5f0950d"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "260835ab81fab38f014ecc8ee88c0969"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2fe175d0b29bc7e71dc53ddf04fb79b4"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "851fc5226aa8c06c0782646d0647cf07"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "9f4665629f649803f3248e903eabea3e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "87285af5cea396270d293d6063bd8b8b"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "6185a9248571168ad6cb021f9c6d5b72"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "77c8d8c010b311e94aeebdfc0ba93234"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "43a2da68a35067861e0d780df95455e2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f0ad4f6cbee40c6dc530974dc98df8bd"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "91f36de9696ee5880656b8df4e6c258a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "7ff0ef5873614fecc1d8fd0dfac8dcb7"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b7171082b03b98f6d533e1612645bc83"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "5a9f221a446f09f10ad5e4ce1c982174"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "882ff2a740be893918ace5547c90e5f8"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "77094a3833ee31e36465b97173b631f7"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "626df70f13fd48cfa2b898c84d0ac65e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "13fd06b419458f20b0d66cba80ba763c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a92f4d0f65c3520ca9db30db4e2ee7ad"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "43360ecb59fb872befb5c206a9a14bb2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "38fdaf6b4fd25178b21075c0650eadbb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9b448a0b1a6774d588064c4190f6db19"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b57a24c8a99176171beddeae545be3f1"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "79245e97749ef1133407e999e57249b5"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ca28d7575c8e9e69c5a2da978d395cf9"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b46e07b8cc4442330de08c5661dd8043"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bf2fbbf189d04b1e30a10cac988ea2bd"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "62357b956b4f541be44c2809cc1977ad"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "15437ac812b06e1d232c5ecc217970fe"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b8f99c0afe6fb4774db27fcdcf35449a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7316fa1c800554e5f18c9aa9fcaf1b8e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "363c52ac2edfa5ae19fa173e206652fc"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e7b586827e85a46ccea50531d67c2fd5"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3ff78848e28054a5ed49630f64f1ee56"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "6ae9dd453408897067e10398ba3ed76e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "c24f159b149be1ea118f0a4faea37ad9"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "74b03b2072b51a9ecba46b5bb3f0efc8"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "243c23015399a7193098a54c38b4ed99"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "6a2524f820e540168c227e1c33a8f48c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "50b0f9a848252d9f02948eb94b81ef9a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a98d3c02b5582f6a3936a59ccdf9ea50"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9634b936a15d517be85f6df121bce011"
  },
  {
    "url": "tag/index.html",
    "revision": "a1cecd687a17e99b72615cd56b997f19"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b913efadc4a488e7c68417fd4408661c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "e6e6420c6d77dae7dc1532d9511d7b6a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "a39a5259ea7e7b71bc242da0e059638c"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "10f69fb9be109c1cf06e575ebfba68f0"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "4cde13d5d1af5c69d6f05b0e07373257"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "993cb6e147970a4ae2d676eeb09baca1"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "c8b3080a1573a53273204db6c9d46c43"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "240a97881dd61ffc5d1ee4f2000fd87a"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "4e695796bbdbba50127e0ee77f64a34a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "5b8e186de0092882bd4cba9927030cb5"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "0242a22428fb673edefc7907b0fd25ad"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9622f47cae1860985f37e6b3958b1ee8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3279bd80920a555606f7a5f96246cd7f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1b67d4ce26f0546830605328d6066dff"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "bc1e5783a0cfbfe7d85a383cb71d7570"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "554c801b58012ac4f19ab43f357cbdc5"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "8cb252a354ca3977d28ddb614d71da9f"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "28bf4e861af6057e86d2d9b2855ea2bd"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f69dbe9eb7d316f867ce46c161115f98"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7f78d01213e243a7610eaaac24228e06"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "833dcb016ad029100f28074b09f14a45"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "cff2adf37cd7f1279dbbf410691fa991"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "47e4ccf2010c239cca857de9a472b313"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c691f348217886ff07f57434caacd3da"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "008e5338e27ff40ed57356473a3b7dbe"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "317305113c0f3d28b44e5fdbb336b8ed"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "a7a9534e5d0853a80f093819b652be98"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b6a6a01ef140ad002cc84772ead2963c"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d37ea301355f1bc75e4247b6eb975245"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b8e40d223b0f0c73b9ff5f2c0f370dcb"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "777f2d95099c6ad82fbc636652db3f52"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "c848c555e93a8338adf2fc3b66c06978"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "bfca485ae9222254de5abb81412778bf"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8a0a67190ad876e9a081df2213c7e642"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "91d4e6f8470ff924009284b7a2de89d6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b41d5b9dbc72d8b51564a8af7f724a6f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f9bb64069e03fdde42f315fb6aa12d4a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9d900627dad537928eeecbaa79f09a03"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e3dbe5ab2ea9c227381d8c065c159167"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "031ef4be671777799d1bd301be4a5031"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fc40694fcfc52457737a73222c84e5a0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "80f0de5357bfb33a35fa384ce062172f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f7f6b37acf8095cb5d1dcdc753fa5525"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "91cd868ccdd2e65f487f2ee934e4d86a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a796628713985d2cfac92120f8b84e16"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bae03240130d2d13cb10204c3eeb10c9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f7bb1280c7a8dfae8ea79a2c75fcb43e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a4a2c7a120bf5ab079ca7c800d3fc0ab"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "1c79e33485f3029d6ee4b2fe7ff263c2"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "68ad98e513c6bc5e04f27c9abdc68038"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "b2ebf75abf043818866234570aabba8a"
  },
  {
    "url": "timeline/index.html",
    "revision": "f0a520f5d0f0eba4a659415cf3ddc75f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bb6fc09b75cb1a0ecdd12570bd443579"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f9f358a482244501bc5dc02ae973ef1b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1061a599b7bf346d34aa37066f0a2f8c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f7a3035cdba205e1f41fdcc5c6b08b74"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1409a6a3e89c0ad05de4ad9d4f2de2df"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "53158c9e34e9cca00dd0cb9e01d929fc"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3e50fe5c62c17a6790b55c741533eddc"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "878369bc8612746c40317d5c32a47986"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "600131a817d48c8450ddaeb9679114d4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f8da7ff7be2baf9f942420fe8056f20f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0d3468bb617f1b4217320c94fba545b3"
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
