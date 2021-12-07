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
    "revision": "7c027c6479786c924468362fcde5a107"
  },
  {
    "url": "about/app/index.html",
    "revision": "a396ca7c08e07a720d0b193233121711"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4143ddf73bde3fd3663829e075fef7aa"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8d64392e7f08d8adaecea852e6bab649"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "746aea28a72d4b192ca7bc9f3d1bcda2"
  },
  {
    "url": "about/index/index.html",
    "revision": "28064b4d4c42e082e637840b29248471"
  },
  {
    "url": "ai/index.html",
    "revision": "4dc6dcee8a2d2e294dfaca6c53cd13a6"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "983949cd61d11fe1bbd9999dee521488"
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
    "url": "assets/js/1.40d766f2.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.a1b7c426.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.e8702a46.js",
    "revision": "d738027cd4c9f523669011aeefcfbb54"
  },
  {
    "url": "assets/js/101.5d3103b3.js",
    "revision": "53baf5bbc25d02f34baa9f89d012689e"
  },
  {
    "url": "assets/js/102.7ae3c84f.js",
    "revision": "ff117cdcba06ac02f337047a31868143"
  },
  {
    "url": "assets/js/103.3d4be305.js",
    "revision": "05745ce9bab31e418d1340cdc4ff5982"
  },
  {
    "url": "assets/js/104.bce55cc3.js",
    "revision": "9ebc73d187c7373b0a500c82d8e8c640"
  },
  {
    "url": "assets/js/105.3ca9e5c8.js",
    "revision": "6c3e310958f9fc560c2fb6c6ae75f5f3"
  },
  {
    "url": "assets/js/106.1b6c77c6.js",
    "revision": "15adfc773b7db8f33bb6abd67edb3d09"
  },
  {
    "url": "assets/js/107.b097b565.js",
    "revision": "7aa71def7e2bd81471f1d7350dbcff12"
  },
  {
    "url": "assets/js/108.94301157.js",
    "revision": "150612e3b5cf20af32e3949597219ebb"
  },
  {
    "url": "assets/js/109.5622bb3f.js",
    "revision": "c8ece226aca1c7269c779735a179a1b5"
  },
  {
    "url": "assets/js/11.7df7bfb6.js",
    "revision": "d4f9488528383e31d58059bcc6041eca"
  },
  {
    "url": "assets/js/110.ed9cac59.js",
    "revision": "9302bdeca3c5771bb78b5bed26804198"
  },
  {
    "url": "assets/js/111.2e4c51a3.js",
    "revision": "9ee2bb51e94855c084ac868effd8dae9"
  },
  {
    "url": "assets/js/112.69f1bac1.js",
    "revision": "88909cea5bffe5d108f372f230a5feaf"
  },
  {
    "url": "assets/js/113.60f34cb2.js",
    "revision": "ac0c3f49210fd1931237643e2156ee33"
  },
  {
    "url": "assets/js/114.30d2dd3b.js",
    "revision": "3cc3f47f68b131d8dd3c58a042f0e9d0"
  },
  {
    "url": "assets/js/115.120c4634.js",
    "revision": "3a3dbd66965344f91a473305c206a192"
  },
  {
    "url": "assets/js/116.342a0f2a.js",
    "revision": "754df59c056ea96d4f4408bdc37723f2"
  },
  {
    "url": "assets/js/117.2a2bb0f3.js",
    "revision": "82dcfe9ca0500185e93c8a2a5bdb45cb"
  },
  {
    "url": "assets/js/118.9228862d.js",
    "revision": "e1483e67a38485ad4876cfbd6e2b88f6"
  },
  {
    "url": "assets/js/119.a0a4cd16.js",
    "revision": "f4d2b35073bb4e995588dc0337e57c0e"
  },
  {
    "url": "assets/js/12.a6edbc22.js",
    "revision": "d80e88e3a98475be4677c85e2d7a052e"
  },
  {
    "url": "assets/js/120.d0c32528.js",
    "revision": "878985506204c57aee1ce1e29ef433e6"
  },
  {
    "url": "assets/js/121.4ffbf873.js",
    "revision": "9206d1c5785046cf90d12a70561810e5"
  },
  {
    "url": "assets/js/122.57df8909.js",
    "revision": "c0f3aef8916a4d2eda7d7c9f817ccec7"
  },
  {
    "url": "assets/js/123.cc6168de.js",
    "revision": "2ace2ed484bed618978010ef3400abf8"
  },
  {
    "url": "assets/js/124.b221b6af.js",
    "revision": "efc4499393eef80b9a924f3bf7ca95da"
  },
  {
    "url": "assets/js/125.9d7ee613.js",
    "revision": "223819be4b62d59e11cb36292810d9a0"
  },
  {
    "url": "assets/js/126.fcd6a0c0.js",
    "revision": "3f8b688ddd1b2d88c4de1cbeae6a70fd"
  },
  {
    "url": "assets/js/127.73c88110.js",
    "revision": "1c7a8ba5ced162b383f96eb96b011fd8"
  },
  {
    "url": "assets/js/128.cf09dc55.js",
    "revision": "1a7e8b221e9019a71af68439d3aaa4f4"
  },
  {
    "url": "assets/js/129.2e5a6c08.js",
    "revision": "63e7f8e429d2924ef82eba1079c390f1"
  },
  {
    "url": "assets/js/13.46bd07b3.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.426f72b3.js",
    "revision": "4cca8fb0a7ea16dfc7bee9fd1d5c3392"
  },
  {
    "url": "assets/js/131.c80934f5.js",
    "revision": "21d1fbe77405e11894574f80805af58b"
  },
  {
    "url": "assets/js/132.e1601025.js",
    "revision": "f36e99572194a074cff5bfd0a7d87fa6"
  },
  {
    "url": "assets/js/133.f7371c62.js",
    "revision": "ddd70ea45d6534f02185af81ee0da1c9"
  },
  {
    "url": "assets/js/134.7d2c1592.js",
    "revision": "14c22a083a1f082b54cc866cb5d2e2c2"
  },
  {
    "url": "assets/js/135.c58cc204.js",
    "revision": "d74ce4c9b7a8940c63d690535a1af0e5"
  },
  {
    "url": "assets/js/136.a931ef7f.js",
    "revision": "1d1b9d687d78823d4a74b98ee6e247df"
  },
  {
    "url": "assets/js/137.0a21db3c.js",
    "revision": "3b013e1faa1ddf416f8e0bd12ae6b327"
  },
  {
    "url": "assets/js/138.d7135091.js",
    "revision": "79e5ce555aa5ddf8a25459c773fc9897"
  },
  {
    "url": "assets/js/139.87b26a2f.js",
    "revision": "c32cd272d65c128e1f5c151fe1a3dd92"
  },
  {
    "url": "assets/js/14.c655ffbc.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.dbcbf0f7.js",
    "revision": "3dfa602bca1b9bbcd205f01c8ca609bc"
  },
  {
    "url": "assets/js/141.32c9f560.js",
    "revision": "a66047c32141de1cf1e01fcf45ac2fbd"
  },
  {
    "url": "assets/js/142.8f4eb933.js",
    "revision": "df9e2b1821a1e1cf5201b2f8a8edca1f"
  },
  {
    "url": "assets/js/143.6b9c2327.js",
    "revision": "d10c489be161b14726ca8339c87f87e0"
  },
  {
    "url": "assets/js/144.b943f0a0.js",
    "revision": "268858f106a20afb758442504e8702e0"
  },
  {
    "url": "assets/js/145.1fdf4498.js",
    "revision": "a3ba7500319ceaf177f423825bbc302a"
  },
  {
    "url": "assets/js/146.78403d72.js",
    "revision": "b75c409d8b945c1d66b93fc4e30bc4ae"
  },
  {
    "url": "assets/js/147.f52efaf1.js",
    "revision": "08892281178e3b87bb8f210b0d93067a"
  },
  {
    "url": "assets/js/148.3ae37f53.js",
    "revision": "a5996864a858fe0193504d0b4d8c7c9e"
  },
  {
    "url": "assets/js/149.c18bc33d.js",
    "revision": "476b166d05a50a0a445d8ec6f59b74a6"
  },
  {
    "url": "assets/js/15.f3c0b53a.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.718a40ee.js",
    "revision": "6b9f943aae8f4c7289fccbe8bcc2106c"
  },
  {
    "url": "assets/js/151.890aed6d.js",
    "revision": "bc02369c82dd1b7b5368f724ac12a796"
  },
  {
    "url": "assets/js/152.79daad43.js",
    "revision": "29378956f0b066d00a5910267e607c11"
  },
  {
    "url": "assets/js/153.693647a3.js",
    "revision": "aaa52079b63e10622f5de71bf4cd205f"
  },
  {
    "url": "assets/js/154.be98e922.js",
    "revision": "3fad4bb42133aa3bdff708fa3f03186e"
  },
  {
    "url": "assets/js/155.30cd8547.js",
    "revision": "aff42195ade8ddd9f674c96692997db2"
  },
  {
    "url": "assets/js/156.9812346b.js",
    "revision": "3e98d25194337983b85e9c143e306a51"
  },
  {
    "url": "assets/js/157.04c6d730.js",
    "revision": "b1f5b584310c0a13f62122317527c81e"
  },
  {
    "url": "assets/js/158.d8667e51.js",
    "revision": "0156e1b16bbcc284ad58f17acc7742e4"
  },
  {
    "url": "assets/js/159.a57cc202.js",
    "revision": "493fb0c9de0c5ba6a27b69992b2133a6"
  },
  {
    "url": "assets/js/16.3964a598.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.c55e3776.js",
    "revision": "0007db3b04956cfb8a01eb5960474fbd"
  },
  {
    "url": "assets/js/161.f4c887c8.js",
    "revision": "2ce2c0b12361a959ded2f2d4eaacda36"
  },
  {
    "url": "assets/js/162.8bec19ab.js",
    "revision": "78993d4f5eca00844e2baa60adc312e2"
  },
  {
    "url": "assets/js/163.5022879b.js",
    "revision": "58d6c477cca23c04fb81aceb584e9c77"
  },
  {
    "url": "assets/js/164.41fde81b.js",
    "revision": "1e57818be748461aa45a465358ac1c45"
  },
  {
    "url": "assets/js/165.068cbe68.js",
    "revision": "8cbf0da90d4314df5141c28f35157171"
  },
  {
    "url": "assets/js/166.d9f88d6d.js",
    "revision": "708c7dfd03c109275eca4c9bc1e24c7c"
  },
  {
    "url": "assets/js/167.cac5f189.js",
    "revision": "6c468bb3cf3978f0386f2acb07dcbc26"
  },
  {
    "url": "assets/js/168.2ed9a2d1.js",
    "revision": "f47eed3d05c6f8f6cc2a185973b1ffe3"
  },
  {
    "url": "assets/js/169.f6251259.js",
    "revision": "731dbb74e38d98884847aa3d49e34654"
  },
  {
    "url": "assets/js/17.eeeddeee.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.f58b3751.js",
    "revision": "f29746059b73d8fb47ab7a3a5fcbdfc1"
  },
  {
    "url": "assets/js/171.28221b14.js",
    "revision": "be35a68bcb57c4bd8fe2220f4cf70bf2"
  },
  {
    "url": "assets/js/172.b33d6b9b.js",
    "revision": "51709d525668cc340213f1bdbb891ae9"
  },
  {
    "url": "assets/js/173.83bebd70.js",
    "revision": "c4f52df7fbf88ec07e5e68d90eca87e6"
  },
  {
    "url": "assets/js/174.dcff100b.js",
    "revision": "db309c89cbb06e5f831a7af31806a9df"
  },
  {
    "url": "assets/js/175.d934bc67.js",
    "revision": "ed434da8eca45837f71464f16a4953fe"
  },
  {
    "url": "assets/js/176.8c98feff.js",
    "revision": "d48cf0486874aa9e890924dda89d64b7"
  },
  {
    "url": "assets/js/177.b76d354f.js",
    "revision": "04a3e6b782ec4bad87f543d22fb04e4d"
  },
  {
    "url": "assets/js/178.780587a2.js",
    "revision": "e6b974ba97d1ac17803e33cb5491d622"
  },
  {
    "url": "assets/js/179.ec00f7b8.js",
    "revision": "5ff68a3372c479ff8fe7713a22219e62"
  },
  {
    "url": "assets/js/18.8ab0e1f0.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.4ea7c9d4.js",
    "revision": "d9fc1fe02f1818feabf42642700618bd"
  },
  {
    "url": "assets/js/181.a523c051.js",
    "revision": "6d957912c62fe99705393c53097d0703"
  },
  {
    "url": "assets/js/182.aff20ffa.js",
    "revision": "cae9af2e6e0c00c4af81d5c52a7a1e40"
  },
  {
    "url": "assets/js/183.ad701f66.js",
    "revision": "f4397ea965bcfbb371f8a380403b8e52"
  },
  {
    "url": "assets/js/184.de68c066.js",
    "revision": "a7b6b597181cfb9e7720735eeab0b205"
  },
  {
    "url": "assets/js/185.541394ba.js",
    "revision": "73693e6c8bfc241c2b1aeea1660e8500"
  },
  {
    "url": "assets/js/186.52e0dc41.js",
    "revision": "7a096dea80e0e45cc5fd3b5fb16daad8"
  },
  {
    "url": "assets/js/187.39701f03.js",
    "revision": "36d5460d9c85d1fdf8778958ecb71f3e"
  },
  {
    "url": "assets/js/188.51090b27.js",
    "revision": "1e551a53df0cd60527a53030f87bed32"
  },
  {
    "url": "assets/js/189.e1fd9951.js",
    "revision": "90fe665467116e9a54db882a1c0a830e"
  },
  {
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.33bc2bfd.js",
    "revision": "4fd2013ae2e9d27be1adb4757c6399b3"
  },
  {
    "url": "assets/js/191.4e6ab562.js",
    "revision": "2c2a623fab8cb3e6c5fbbe6c897ffd35"
  },
  {
    "url": "assets/js/192.14ae6def.js",
    "revision": "829b7e04c061c7ffeff2a49cfb51230e"
  },
  {
    "url": "assets/js/193.2aeedd0c.js",
    "revision": "3eb7da8e67918a4925a7b2f8243f69e7"
  },
  {
    "url": "assets/js/194.85553856.js",
    "revision": "3e5ffaf6d28d1f3a40d23d8ddc683016"
  },
  {
    "url": "assets/js/195.c94ef859.js",
    "revision": "4bbba55139fc368903eba5d2eadecbc8"
  },
  {
    "url": "assets/js/196.87e2b99f.js",
    "revision": "787d507e2be41c2d9501a69333cbfa8c"
  },
  {
    "url": "assets/js/197.9ee9898a.js",
    "revision": "c8489431d13d972109f485ab422a38b2"
  },
  {
    "url": "assets/js/198.8b902288.js",
    "revision": "391f70e49cbcf79147365d0eeab6c679"
  },
  {
    "url": "assets/js/199.3d53ddcc.js",
    "revision": "ea2ebcc28502d24d063cd9769e91fc99"
  },
  {
    "url": "assets/js/20.83d8f04f.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.7686a98e.js",
    "revision": "938c0ca564b943394032f76bbe37a00d"
  },
  {
    "url": "assets/js/201.ba4135cc.js",
    "revision": "19bed92acadf069c9a8df9e4eac4baff"
  },
  {
    "url": "assets/js/202.ac96e827.js",
    "revision": "6034bf2f1dff417ce095180eb1871d2a"
  },
  {
    "url": "assets/js/203.61024f24.js",
    "revision": "6d18e4ab2e7b2d3253a6591778dd28ca"
  },
  {
    "url": "assets/js/204.f6417ab2.js",
    "revision": "18acbad8a407459e6fef7aaf32c10243"
  },
  {
    "url": "assets/js/205.aa22bd3a.js",
    "revision": "7a53a71bb5e868c75c0146293e3e23d1"
  },
  {
    "url": "assets/js/206.93908ce1.js",
    "revision": "d542f7581368bcd34c82bbbb5aa6bf3b"
  },
  {
    "url": "assets/js/207.a772699f.js",
    "revision": "87686d69f7469d18fdff754936ba4f06"
  },
  {
    "url": "assets/js/208.5659067f.js",
    "revision": "164c82085890c9166c4c3a232ec62860"
  },
  {
    "url": "assets/js/209.edcbcbba.js",
    "revision": "227413294b5cdb5fd2033d7f72f91cfb"
  },
  {
    "url": "assets/js/21.f2ac8f76.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.8d61ecdc.js",
    "revision": "04fe5fd2507c353e2b5cc6a209304e3b"
  },
  {
    "url": "assets/js/211.b865939a.js",
    "revision": "de4d1e5f12ba4650afe3252b806657d7"
  },
  {
    "url": "assets/js/212.4cd241cd.js",
    "revision": "93b890ad6f524d3306792259cd1c48a3"
  },
  {
    "url": "assets/js/213.a46a1be4.js",
    "revision": "773b080d34f45ea9a350ce74cab26188"
  },
  {
    "url": "assets/js/214.0972cb79.js",
    "revision": "2e5ee3a1abcf4256cad54d6cc26db3e3"
  },
  {
    "url": "assets/js/215.bb8f123e.js",
    "revision": "33fcc8fa01be7355f8131ca55bb7785d"
  },
  {
    "url": "assets/js/216.dff923c9.js",
    "revision": "8b65752b4e5ee4835c5aa38b03cf05f2"
  },
  {
    "url": "assets/js/217.74c4d62a.js",
    "revision": "f607e1987974ca01a49acc8a25280848"
  },
  {
    "url": "assets/js/218.d8d74757.js",
    "revision": "df94798552c4f769b6e2db1346873f66"
  },
  {
    "url": "assets/js/219.d50909cd.js",
    "revision": "d2111a1fad26b1a1be199b5361f6b735"
  },
  {
    "url": "assets/js/22.487afd95.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.ef084876.js",
    "revision": "b2d3194d18297ab5b226ad0accef14e9"
  },
  {
    "url": "assets/js/221.ebdc7fa8.js",
    "revision": "6dfd23fc314f217871301ff03842fc2f"
  },
  {
    "url": "assets/js/222.4c560b05.js",
    "revision": "44e60f4ff345ca9590e7cfe68ff1aa72"
  },
  {
    "url": "assets/js/223.70e23ca9.js",
    "revision": "2be6e7035c5f9d19dd0495480e4ff6ec"
  },
  {
    "url": "assets/js/224.1a946310.js",
    "revision": "d20fa37a588e6c2d0085cba8ba908c26"
  },
  {
    "url": "assets/js/23.aaac1724.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.d1aa06c5.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.60497cb3.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.537bdc9e.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.a087bf61.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.03f74411.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.cbea7ff0.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.548b5112.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.a6631d9f.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
  },
  {
    "url": "assets/js/31.831b550b.js",
    "revision": "72111967edccec374cf25773de6d7f82"
  },
  {
    "url": "assets/js/32.1ab61c12.js",
    "revision": "aa6562ae9c19d3c5bed61548aeec5261"
  },
  {
    "url": "assets/js/33.aae173fa.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.4dbf7aac.js",
    "revision": "a47a0be7f06b9634eb77a7f424c67eac"
  },
  {
    "url": "assets/js/35.ec60a253.js",
    "revision": "065010bfb77dadaf44b00a7edbed68bf"
  },
  {
    "url": "assets/js/36.8b8b5b23.js",
    "revision": "062fd7e7cdc9c9b16d8895b0f99dc9c5"
  },
  {
    "url": "assets/js/37.eb40e17f.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.463a3ce7.js",
    "revision": "978586b909be63129e5327d1fd722d89"
  },
  {
    "url": "assets/js/39.9192be50.js",
    "revision": "6cf602ec5ac7fd1aa415e6548faf82df"
  },
  {
    "url": "assets/js/4.6330a4ac.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.2bb4453d.js",
    "revision": "90c3cf99f395792fa706fc288cb332ea"
  },
  {
    "url": "assets/js/41.56528ebb.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
  },
  {
    "url": "assets/js/42.91a71cfa.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
  },
  {
    "url": "assets/js/43.b7a1f86e.js",
    "revision": "90ac1710caebac649d4148cb7247bc9b"
  },
  {
    "url": "assets/js/44.ad73faa2.js",
    "revision": "b9c1a6fa58813164f3d5c0cc4b2ad519"
  },
  {
    "url": "assets/js/45.b068ef61.js",
    "revision": "b6be199ebebe9bb75bf4a9370c81e7cc"
  },
  {
    "url": "assets/js/46.a90dbc23.js",
    "revision": "b9a470431df234a822882b7efc9e8186"
  },
  {
    "url": "assets/js/47.39286241.js",
    "revision": "389bbac7bccc98b46e7d512beba3723a"
  },
  {
    "url": "assets/js/48.6147eec7.js",
    "revision": "b45c999a1b643e45a815e72b0ecacc16"
  },
  {
    "url": "assets/js/49.14c18272.js",
    "revision": "beda7c9ff34a1223df8a0a11a4b89902"
  },
  {
    "url": "assets/js/5.9cc3b324.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.02012b8c.js",
    "revision": "4f61b355ad22a2be9ee40f8a3f323ccd"
  },
  {
    "url": "assets/js/51.427c43e6.js",
    "revision": "43405a97a5aeae7a6ca38602e18bfb78"
  },
  {
    "url": "assets/js/52.abc8f2c4.js",
    "revision": "189d83f1b6d303cbe3dbf6d25db02d81"
  },
  {
    "url": "assets/js/53.0fe89005.js",
    "revision": "940519aa9763076a15a7c967ab7e5b4b"
  },
  {
    "url": "assets/js/54.5d30e396.js",
    "revision": "9802ce8d79ebee9bc8b69cb550dc74d7"
  },
  {
    "url": "assets/js/55.a2d61638.js",
    "revision": "74ab596d826c6aed0599eb52eb80efae"
  },
  {
    "url": "assets/js/56.b728b768.js",
    "revision": "2e843e7c65b7e51ed28faaec8b25b492"
  },
  {
    "url": "assets/js/57.60edecb3.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.774f8eda.js",
    "revision": "dca30611bc890fd7e88559bf45106399"
  },
  {
    "url": "assets/js/59.8b2ec786.js",
    "revision": "b35f336d09e2f3723e618f5782622354"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.43063fd2.js",
    "revision": "89fec651e1aaa7943ee00fb1a4df58cf"
  },
  {
    "url": "assets/js/61.03fb8ef7.js",
    "revision": "9b293e3cba5da98dfd45a44634ba21ac"
  },
  {
    "url": "assets/js/62.776184f8.js",
    "revision": "6e4cb0c8ccdc588334678bae7645ab84"
  },
  {
    "url": "assets/js/63.a200cc44.js",
    "revision": "9389a85671d59c23b2b85b036b135456"
  },
  {
    "url": "assets/js/64.7977efe4.js",
    "revision": "4e1076f37d2e1db92db28d87254f8e43"
  },
  {
    "url": "assets/js/65.82e599ab.js",
    "revision": "b9d87e5dd95f0aa562cc4bdb196e4158"
  },
  {
    "url": "assets/js/66.942817fe.js",
    "revision": "6ad0a03c45623a2f81495fe3b14ef98e"
  },
  {
    "url": "assets/js/67.cd1ac0c9.js",
    "revision": "e8d965be452f4b4d38887d1b96beedb8"
  },
  {
    "url": "assets/js/68.2fb71ee5.js",
    "revision": "4ebbb0dede9ea3db9b444fe18706e092"
  },
  {
    "url": "assets/js/69.c0cd21bc.js",
    "revision": "99b85d7ba96eac46f6518494a85fee81"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.87abe8a0.js",
    "revision": "9268d5b0d6ec1d622a3e2b8b980d156e"
  },
  {
    "url": "assets/js/71.ffd63e21.js",
    "revision": "3ac21153b1f29e71d832127d4ab834f8"
  },
  {
    "url": "assets/js/72.d9f56e54.js",
    "revision": "e6bb7da55c0d4d088f04b3e66a610b6e"
  },
  {
    "url": "assets/js/73.66ca6931.js",
    "revision": "6260c5b9414ca5a90f22bdfc5971918e"
  },
  {
    "url": "assets/js/74.04116cfc.js",
    "revision": "ea646a5fd021b9af80fcd46b4b3064f8"
  },
  {
    "url": "assets/js/75.402c1138.js",
    "revision": "8da4bb48e483eb194cb4a0a09a971428"
  },
  {
    "url": "assets/js/76.93824f56.js",
    "revision": "d04bd5309f1e5cf2ba07d18d834e23d1"
  },
  {
    "url": "assets/js/77.272c14a6.js",
    "revision": "0ec270b74099f05682c8a20b9498e71d"
  },
  {
    "url": "assets/js/78.8788dfc0.js",
    "revision": "e96716e7d3e69b0a79066f9d41518b97"
  },
  {
    "url": "assets/js/79.6a00f7bd.js",
    "revision": "daba8129d53c96b3c07de95c31b5442b"
  },
  {
    "url": "assets/js/8.ce438359.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.ddb8716a.js",
    "revision": "f35319077484cdf8cce78ce5464cea04"
  },
  {
    "url": "assets/js/81.cd36a78e.js",
    "revision": "a95ef839ca901fbc70f279b5607183aa"
  },
  {
    "url": "assets/js/82.46824b45.js",
    "revision": "c6bd394f57a0be889637ff49ec5a204c"
  },
  {
    "url": "assets/js/83.9f77a348.js",
    "revision": "ed39f7b02e99c8524353d5611b1a4fc8"
  },
  {
    "url": "assets/js/84.84e34f8c.js",
    "revision": "221b1c418c483d6ca5cbb4ca3d0c10ea"
  },
  {
    "url": "assets/js/85.09f9276e.js",
    "revision": "11232024489600597de9689980a50730"
  },
  {
    "url": "assets/js/86.91a99844.js",
    "revision": "949e742cc324f7babad36c36adff1ce5"
  },
  {
    "url": "assets/js/87.a129f1c7.js",
    "revision": "10e35b990e587983a73d416a236984c1"
  },
  {
    "url": "assets/js/88.6b210c51.js",
    "revision": "f5e45f12b173cf1328f7656c81c71006"
  },
  {
    "url": "assets/js/89.0434edcc.js",
    "revision": "1924458f646809be43b4adfa556313e8"
  },
  {
    "url": "assets/js/9.146dde97.js",
    "revision": "860f53fb242e1e04e0f5a25d10282810"
  },
  {
    "url": "assets/js/90.8873cc91.js",
    "revision": "cf12d7a4c187e412f9f9eb8f00e39f9f"
  },
  {
    "url": "assets/js/91.f4dbe90c.js",
    "revision": "bd3b1d200d6526599c2305a0f2704fcf"
  },
  {
    "url": "assets/js/92.92dbedec.js",
    "revision": "1c135c9e1ff43379144afe0aeab8cff0"
  },
  {
    "url": "assets/js/93.168ca1ec.js",
    "revision": "4f7a99d74d060377615e70707c15b9e3"
  },
  {
    "url": "assets/js/94.9dd2f5f0.js",
    "revision": "3398d417549c34b40c2f04c9e27559af"
  },
  {
    "url": "assets/js/95.96290599.js",
    "revision": "586dc1840e020c15c0024a6079dbfd83"
  },
  {
    "url": "assets/js/96.9fefc939.js",
    "revision": "dea1d1943c6cc34056aea2e7b6573782"
  },
  {
    "url": "assets/js/97.9b1a75a2.js",
    "revision": "c833ffcc79f6dd9bd35dd91121669dac"
  },
  {
    "url": "assets/js/98.0ce4d124.js",
    "revision": "24c83de3ff446ed09f036ba6decfe7f9"
  },
  {
    "url": "assets/js/99.f64438b0.js",
    "revision": "617e52dd80d8640b3792e6af1b066616"
  },
  {
    "url": "assets/js/app.d99b45d9.js",
    "revision": "820d67631253ea8a1245e9c1f2c5df3c"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "098aff4abfb5791ae02bb8d46955fecd"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6d006abec2233b6dd316e17ef3a6458c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c1d1311a4eb3113842a37a879a435d2e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e4cfd671149293503e6c9ed05b3b72c1"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "184b87c1ab5ad71fa0b662b0bcdddd81"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c9ee977cbdce83ef0ad2f7b1423c25c4"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3f7034c846e4592c13f65785c1f260b8"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "28df9218931fc7239aa868a3a259a405"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "52251a871ff0b672141bf6f3077e6b83"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "92ebcdc8afac119c7abced1c4c49d571"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "eccf7f94e0a35b9dea9b34c0235643b4"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "008eb3d086795ab6308685fcb66e1013"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "931e41c1596f281fb8f2f3bfda9ad730"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "84165612fc7e8ef91a0342e2585dff4f"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "afb73d0fa5a7aa7f14377a24e888c172"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "0c632b12024f968af2fe4009950c7534"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "70569613e3041aa8fe1e477328377d00"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "5175caee1fa04bec1ebfb000269286f7"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "cca09c87fd3fbcd8ceefcf4203b2e736"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "86229a2e590d59efbb6be74e46e00b57"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "725dd19c846796fb5a740cbeea11ad5a"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "c87d8a8c281bae22b874d9620f4d7bf4"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "603e020b8cbf5b808e4f2ae0a0e0e140"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "06c0d02ac1033320342c52eb876c34e0"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "69ce02961b763884475f4b049d43726d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "284d09d5ec72cdfdddf922fdfd2fc084"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "78df107f50ec472843945418c2c9753d"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "10e59a76299de58c7eb987b500daaf9b"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "7f107f591e41a7033877076d92bde7b0"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "5866301cc41b1d6732180d07ff9b7638"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "522ac808db01188c4aa1114494ac27a8"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "d7bc2d682b68d864c89385752c46650e"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "2f76371c256cf5dfdb8eda770513ce9f"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "e13d8a5fcff6c6d92fc8493a8f87c00a"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4585b3d232845a372775677a3faa3659"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e563df0277e3d6f55fa694f71230d967"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "09d0117307847f2747d9a8321ea88359"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d2646b598f6d5d052c091a247ffaf0e5"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "b54b44a1b47a22709080ba51a386dced"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "f680b2f84b4f9d328dac99d46244efd5"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "5e4e96800a9723bfab5191d002be0f13"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "8d92ec36eecc0157d1cb845df42efe82"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "5a31da805157eb97ad3693ca46805930"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "697aac5491ecf2ad65e54d1846ef992d"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "d721f91c722b6a575c9b778505963229"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "39ee2ef86e7439582c07de356fc594be"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ad7ef9a605802e66ddb2f8fb294a2547"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b04a15ea28384d4189514431af140038"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "544e00a146f50a213d150cefa4b4b09e"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "fcf861303f07b5344d4111bcd717e949"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "acd9e7af2f2861acb9252799134f95e3"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ac73875af743723a313c363429906be6"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f5fa99d8b384ed4915662c8ccbbc19e1"
  },
  {
    "url": "basis/os/index.html",
    "revision": "77cc6f6d285b591c9b2e11b55c7c2524"
  },
  {
    "url": "book/index.html",
    "revision": "cd02004240ee13e337af897b6df65830"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "571855a9d3e7f51beb8ff5a4aaaed303"
  },
  {
    "url": "categories/index.html",
    "revision": "dbc9dc6659bee156488c0c5b0a52b673"
  },
  {
    "url": "figma/index.html",
    "revision": "8772bb40b84eb606b096f3f1806572cb"
  },
  {
    "url": "flutter/index.html",
    "revision": "1c9d8a422ecd8a038b4dee437031ca35"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "04063b4008bf11735b61908848b3c420"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "572572b382535990ecfa7429eb8d1947"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "392015b16c6e5ba8aeafefd8a6a27735"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9ce06f1effcb21478435dfd703aa27e4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "1ff6c1ed0c41de65a7b20c196a39a78b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5beb9059691e2257aeac68cd054b3418"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "4f63ae7853295950d14bf56ab31400dc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "06655f805153d5f29eef1d0043661605"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "45b37201b3f5cf5cd14cf21b4d457815"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "9fc1d3ed32151ae79609167c9aff65e8"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8362c9dd0fca18b49be589a9dc9e2de4"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e397c2ead8592a0c6eb72f9ee7fdeb29"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d6b2154d3a754f58a09b4f848f76938b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "caf2cd481fae1e7538e3ea72ee64fe0e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "feea3ed6e16e62bb75e4dad635be95a6"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1ac7caea9ff1f95a4e3d7eb528fe179e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8553212ad20d60c6ab58812621ce3cb1"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "5d711a35068b491359c3a499daf7f3be"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "0bf42aef59de41d2bce1fa9b073e3b9e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "37a9a6d98f66ef1775b65e2f3c1d3f7e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "e5b552925460c3e53bf49de32ec8ac91"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "f8b20cecf11d3701437b194ab2935066"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b8886bcb2b8c7200e901b26c2e0e089f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ef136b346746ea56f9b494390078d8c5"
  },
  {
    "url": "haskell/index.html",
    "revision": "b55bd3dc09f4b7e57e29cd0ba32f3916"
  },
  {
    "url": "index.html",
    "revision": "351a93d56722086c9443be6f6f63ed45"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4aef5380cc4d7e4048de6e1ecf6d25f9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "3911c312116253d0407ea3d55da13560"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "16491369649a02d17964d20873605dee"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c9b8e483cf808a31f916e03c204d32f9"
  },
  {
    "url": "python/index.html",
    "revision": "d004376d14aafe7bd13300ec46bd9f35"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "6b38b294e0fb243a149a3beca35910e6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "647f339808304d3b6cf681c61bade975"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "0779da331986e3c233977d8bab5ee7c2"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "02f91bff552cee6d99299eacc5ef7cb6"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1eb18f86a434f55b527a3d2828a0f484"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c5209fa480aa2ca42c029ea8ffe46001"
  },
  {
    "url": "swift/better/last.html",
    "revision": "5cc3ed351d2d9fd70442f65c9eb0ba7c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "8f37920760bfe1a02834d08327a96864"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "2473067fd8513226a4ae297ff92f8113"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "be450ebf9555102e79d24f95176ca212"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "26684a48f7ea7f951355dc211e6e0369"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "63c20fb5cb38d30a345a95a21e9425a5"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "edf2bff78caed14488eb4f8d03d02896"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "cb6cbfddbde2fecbe39ba5c21205b7d8"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "231dc18aebb317785f14c6eba53898cd"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "c906ac5e95bc18654dfcad4e1805a911"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "4bd8ffbe9b94b4b894daf98873bcfdb4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "dc05401ec7ad8dd46cae7af2912c4081"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "05037c6bafc03ad09bc73ada3211139b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e7f199a48c324d2eaa3149bd3762aad3"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "8a3370ddd44cb89da4deeb16ac5b0238"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "6b4a01b52a00f977bcd2713ec016aba8"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "3eb1fa5f35a848deca501b91ed849ab8"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ee04e47aee036daabfc9011e9d5a4c04"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "03e936d90964a535f686258cad62aa24"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "e9ad05cf4f7c355ef7197848f1d03a06"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "506b385d0276170f275c39ac46ed81ef"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "980d4a71d1491defc5708bb959fc7eb0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "85f293a1b5fceed293483c4b7e1bb9c2"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2d39ee564790cbbcc43806637d90d8c5"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b744df1b030e41f62cc48d6861952902"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "aabe3c78b7a91d5fd8565c1876ea3c68"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "a6ee3ac5b96e7b1080573744277c29ba"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "36ed2c69d19cb1136179082fdcbcc307"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "e01bc9dd149e4a1e05a61443aa3c637b"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "27d4a3c3a4ee7ae7b0663cead2be4c19"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "05592d05ca399e30cd64cdb715df9900"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "29f8bd9e3ed08c3d5d7905af4f536492"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "e22b13e208e7d746cc9ae9212c83760b"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "e97af39dc640c7c4dd042159cbffa88f"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f8e759a26fa376736775ba8d70c05505"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c83911f82d8b302300fecbf0980b12df"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "302e7bf94ab1e6ea3775b91d1d9c4cb7"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d7e2834ae8f8a9797be716190d225b61"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "bd89078f28da0d6d64d4068b253a594a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "17613cb40ad8324f54a65cb91bdc107d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "4b821f73ffcaf75ac7cb8f2fdaf2fb7a"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "93d15843f87a42c4ab73f3520f83b862"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "5d63cd6ce519e73ea74eb7f33130ae85"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "90015ee33955ca8d8eee66c92b6e7681"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "bcae82617631196e45a51a3a1782beb6"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "a8c5c9b95e3be4a59565617fa0d8ddb2"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "ddad0a471a304640ae96610d29196188"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "bd34a4770f20ee81123336c7361178dd"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5c9948102d329bb85424d29da59dda82"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "333fa4528cff49f808b4568d8e7f15e0"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "6df5bfa73229966acb09ccefad695a48"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ce2a4ba0c30a89aac8ed10c97d754504"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "f7907862e2d8601ff9a620372a0a8d6b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "dba4d3aa509c5d70e707854d0d839132"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ef85e21d57e5f283da2cc902e4e96763"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "8dc61419d683b256d13b29f0fa9feb9e"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "0e66f0faed54c9bad8f00177ef8049f7"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e73809947068ec1a7d74be08819523b0"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "31bc54ca53d7d84ce36fe566fcd644df"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "55c7918fc6093d2faceec05652622c8e"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "533f8b42586b7788c786c5cd0b87ec94"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2c927cf78236f2c613ef0739ad8cf55f"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "9ee184460818d21732d02ee073ab4389"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "e2a4c0c7077394c9fe320b6618416901"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "fb5d1e2b121d39c9e07b6bc03b5f6af6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c03d8c1c31cc13b37c7ad49be9c653d7"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "034f478c596593bc797abca504d8ec13"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "8a254e01f748a818dc0967d6c6e90cfb"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "571b635f90e08376055196c9cbffd4ab"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "dd3166912879631b31f592c618304b36"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a7a0ae2dd93a00204cda94da63f179c5"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "92d1cbb3bd70d1f5be012e728f3e6562"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "21169bb922beb5a8c5f07feaf1247e39"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "55d519345e1c30f9287fd8723b2f3de9"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "c25bd6bd87c4520b145827c6e1cc8202"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "996676d3830ad681f4f8c11080e54853"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a7146ac4b20b4bb7d2c9f17e4a7b5070"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "379ff7f089f536bd9c68709a1d36e6cf"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0ad8546a2af63ca9a23171d7339c3866"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "34f0d4ee7479cad782ddfb89a34274dd"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "77e66d7782b5a3419c3a1ae55aa7068b"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c6050de73834a89a8fe7c5a48b4ad9bd"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "28def2196a90946d8583a9f0b8a08433"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "df1b6452b93562e4cb480f45e4b2c817"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0ce34c4b178d06d106e94115714c1665"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "67c449072f2548a26f6767a8a23100a1"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "cb2e88f6746c3192047e90ead72565e0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8dcb13e02f2a0a9f2d76db565128447f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "36ec60e108a68e7d5e0a0b73ce5fffdd"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6c3ca0d8c5413e5a3e5c47b0f2127bb4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e6bd122ee8481e131b54df412096cb66"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9cc4d9cf45b8d19129116023406da5d6"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "53a845b6f9ed1a01dcb937b965cc6b5e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1206f01ea0a82042747a374cf8d7e334"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d7d5e42c92c45ec35d5acf8d194c8536"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "8ee3bb716e700081a8e2699d790aa2ea"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "3a3ac9e9dc0c66f8d5f7ea48e301c07b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2678ab07657a027ebfe4050bdb27596e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "4f404fa084089f3503abb03f201b9ea1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c81981fbdfc724753c99c67c366a614e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b321aa03ff1aedcba8ad4373a8785a54"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4b28008b842652c61dfd7a4085d42b09"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a0674007b7eafbba62764234d74ef8df"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "efa9748e21b8d8024b32550dfa48cae5"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c17bd00f49d814aa783fac50e9b1030e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ad3f7ad65decd4f06d081d436f108dfb"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "39c38acfd901c6689940c55503e9018d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fbf98b83821bf22520dd4634c97c9d04"
  },
  {
    "url": "tag/index.html",
    "revision": "c169e8d0d1513c1201e9cdfeaaed1b78"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b797f195c1f0e32e8819151e907771d2"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "767c0779d15ddbf4716f3c2849b4a454"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "805f35c1cb94b929629dc32530a9a534"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "023a0c502ad06d9d45fbd516ab79b58c"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "2ac5b24c8ca2bf3ffb29602c3e19062e"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "cab49cfe49a6a57022ffc028ba865455"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "19d6de6ec8f29cf544173937e171bb04"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ce24d447a19f46872f0b3e8e0a20305c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "d05493e09873099d1eadce595f74fd63"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e363279c9349bbab452bcb4db66996c7"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "81b007512d2fa64ed3e35acdefd27bf7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "de837ea35afc67b5f2e20028665ace29"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4e643c0bd5d0a4362d8bb6a4975c50cd"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "58cf196747e936f384a9df937bdad8f0"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "353168922a7fba5ae89afd3d73d4ffe1"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "e4f95fe863e28741a0719f9b5cd66bd9"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a206fd5977cd75d912555739f378cb70"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "ae38ec7a838eab9353bd7efc726ee01f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4d920cd41f4b89392401d0892c3d8238"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "85c7cc67bfd51bf56b878492c60ff60c"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "53c6d2669f68f4846b1fdc91a65cfcde"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ce58f27a48420a2d16ff5c722e677d47"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "2a461b7044ab400a0bb16d98eb2a1523"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "fe80393b598df15e081746fb0d2205ee"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "4f1e61d96e21a010d75683f20db1acf9"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "66554c488764f2204d6e511d4a8a87ca"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "be7ff9e539faafd9b5392339a751b20f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "26e7da65eb0fd8ae3ca03de4b55ac80a"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "9a3f3e46980b5b482b4deb7ba14f70aa"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "eb5051225e8bd08c36483e61d8f88d47"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b0510ef3d9a0545525c012a6d2a55b40"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1696b582a5073de5b796583c3aecdaa0"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1021403ff4f35a35e37a21c5d349cf42"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f5dac51c9b504044753e85bb53eefe9a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "a330890094fbed4bc5bfc54683767f78"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e0ee2d1a5d6ad08da1c8adff74df46e9"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8f3729c70fbd423765d772cc5e0ce480"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "37829e34d68789295d872b4142937400"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "8dc9f76b996e3c3708b70fb849f7236f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "fafae8ff275b829ee5604db31117695d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cc630ab46be04ef7ac50a010b5d5f357"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4151956abf72504bbc4c9f44e86938a5"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a4b8c1cdeaa1606685494846fe1dddb1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "88fcf8e024e31f8bca9c4a485755ab16"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "80860be4ea20fa38c35f6e55a0db4ff2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ca7645d0d56db0f56444bbfd964533c5"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "533ef4a7ec1acd66d0dc13d02a76f120"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "feef2872f9faccf2f7787134cb6bf979"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d1c5261befa89e75c78c77f09f7856ad"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "8e74b3f9a01c730bd995762cf74724a9"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a071a81b83a9f9beecd59aa4cf62556a"
  },
  {
    "url": "timeline/index.html",
    "revision": "6b693a38c9dcd809bda3ada20275333a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "449a644cdb7d498f373943165261807f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4c9375bcb6ce84f4a7ad444ddaa69c5a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6781cd11fb0e1fc719d418b149dabbe1"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0cdcb587a8592374ab65144362be0c2e"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a58ad1dd5dd3a238bf874b2b9fd63686"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fb35123d7ae45db8197aaab7e630f954"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "216d164a7493688c988b005a7c608509"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "19964e7e4985582ce98f3f5ec7adfabd"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a063296ec8b171daf0cab6185f5684d3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "15222fceac35e8a0033f7fe433a589dd"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "007a6a23ef01e14ea348481de33f5bf1"
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
