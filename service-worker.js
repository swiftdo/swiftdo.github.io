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
    "revision": "3a6f5620ae11814b0937ce81987774a6"
  },
  {
    "url": "about/app/index.html",
    "revision": "bb86c2fba63d5196233bea263e309754"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7ffdf1c215862e143201d918e0aabff9"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "6cc6d53f7799d47de9f2873f16c1c035"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "74b50571e3ecdd48a95b13b6a21badd5"
  },
  {
    "url": "about/index/index.html",
    "revision": "2f0d49e6a649925a9d9924e805a38a15"
  },
  {
    "url": "ai/index.html",
    "revision": "ad2b007356d57261c95662d2e2a9c682"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "92bf023ba9d2a6d0be77d750a66b9e7d"
  },
  {
    "url": "assets/css/0.styles.69fe0ec4.css",
    "revision": "b222c2e7ac4543d2fa4d450479a65364"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.5964dece.js",
    "revision": "48529d0751226abf8bdf8838eb0a1898"
  },
  {
    "url": "assets/js/10.78bc1f0d.js",
    "revision": "dd1e62cf1cc6c3b262bef226aa830da8"
  },
  {
    "url": "assets/js/100.088e8fa3.js",
    "revision": "5921232931f22dea4870e5c9a1ae7e81"
  },
  {
    "url": "assets/js/101.330832ab.js",
    "revision": "28e17445b4544e10b7655cd65bc63c50"
  },
  {
    "url": "assets/js/102.816336bb.js",
    "revision": "180552ceda7012d8a2c89a0b1ac255f4"
  },
  {
    "url": "assets/js/103.bb94d7d7.js",
    "revision": "4ffd8341d15634bfcd8093bb9adbc383"
  },
  {
    "url": "assets/js/104.cfc23d18.js",
    "revision": "b5ff8d506d6d70dd82f530daf493ebe9"
  },
  {
    "url": "assets/js/105.3fda9f7b.js",
    "revision": "147f752669e2ca0c6dcb3d3fa56898c7"
  },
  {
    "url": "assets/js/106.658ce3fd.js",
    "revision": "40c6aa7ab46cb3aed951ec3195d281d8"
  },
  {
    "url": "assets/js/107.2b612b73.js",
    "revision": "d1787edd838b78ef7c4187e224a5b70f"
  },
  {
    "url": "assets/js/108.dffebbd1.js",
    "revision": "f367c0f2d190ef3abbf48648b5f185d9"
  },
  {
    "url": "assets/js/109.e68b6b96.js",
    "revision": "40c05e712cb61a1527d243daaa7c6823"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.b357b556.js",
    "revision": "492ccbfaeadd66d181fc86097f5b0a50"
  },
  {
    "url": "assets/js/111.36f1ea59.js",
    "revision": "84903311b44510ad31abea7b6c41db77"
  },
  {
    "url": "assets/js/112.69b39f1b.js",
    "revision": "74c0a2d73fea0210472b0438f6e04021"
  },
  {
    "url": "assets/js/113.741cbd0d.js",
    "revision": "f5a053c11e04cf7fd59ee0b399ac906e"
  },
  {
    "url": "assets/js/114.ae7a0e48.js",
    "revision": "96809c14d71370e4e1a8450a92107e90"
  },
  {
    "url": "assets/js/115.47872b0a.js",
    "revision": "3a40c3dec5c05902681c716dbc887588"
  },
  {
    "url": "assets/js/116.898a0ce2.js",
    "revision": "344daf823e620d482843862c341c23da"
  },
  {
    "url": "assets/js/117.52fdd5ea.js",
    "revision": "80ef936e029b65aa3a420b03c7ed606b"
  },
  {
    "url": "assets/js/118.d7e6e667.js",
    "revision": "eb2c0e881fa06adc74912d56907a8925"
  },
  {
    "url": "assets/js/119.a94607bb.js",
    "revision": "1af41371a4f925dc2d89b31b8e85b9be"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.7a30713b.js",
    "revision": "3e9afdc6cff5f42aeceea954d6691bf4"
  },
  {
    "url": "assets/js/121.386d5958.js",
    "revision": "1cd07edde1bd3efeaf9be6cf077fef2e"
  },
  {
    "url": "assets/js/122.8f3a5432.js",
    "revision": "97d31a6cc759c3df215bb03438eb0a68"
  },
  {
    "url": "assets/js/123.beb0c130.js",
    "revision": "206469061e86adcff124f968bf345dda"
  },
  {
    "url": "assets/js/124.0b7f3136.js",
    "revision": "00bb89479828736db82f1ba7e69c9ce8"
  },
  {
    "url": "assets/js/125.d1b7cc1a.js",
    "revision": "33b16b5398612d356e2ca85d5ab86ab8"
  },
  {
    "url": "assets/js/126.5bf4e70e.js",
    "revision": "c41a2c09e3fd28ce4ba6c321b90c25a6"
  },
  {
    "url": "assets/js/127.eb9e6c3c.js",
    "revision": "66847a2841c6b6c21886ef836a7a1175"
  },
  {
    "url": "assets/js/128.83d6af94.js",
    "revision": "f70c3c46dce317062979b3b27c0e27ad"
  },
  {
    "url": "assets/js/129.f23f93d6.js",
    "revision": "7a9b75acba505eeedef6bb7abacd9f2e"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.c950e28f.js",
    "revision": "6b8023efa2ac3a4c7b2ead8fbf06b36c"
  },
  {
    "url": "assets/js/131.b38d4c1d.js",
    "revision": "76bd5d78134bcac06ce61d4a45aa9b78"
  },
  {
    "url": "assets/js/132.fb380d99.js",
    "revision": "ede9dd483df62de9e723211d223f3bcb"
  },
  {
    "url": "assets/js/133.f6ebb1e7.js",
    "revision": "d4f614ca0d2cdffb0648a544ce82e0f2"
  },
  {
    "url": "assets/js/134.5feede59.js",
    "revision": "9c271a681867c82b20cb89d02531ad9a"
  },
  {
    "url": "assets/js/135.0206f4d1.js",
    "revision": "584ce4042aacb8d98268920fd916ff50"
  },
  {
    "url": "assets/js/136.cdac0868.js",
    "revision": "8441f14f285f15cab8b425a1283692d1"
  },
  {
    "url": "assets/js/137.05ca3a2f.js",
    "revision": "9988db7641d6701cfe954fffaa14b828"
  },
  {
    "url": "assets/js/138.fd4d8daa.js",
    "revision": "9474d7a1049ff4c09607ecab9282932f"
  },
  {
    "url": "assets/js/139.b31f922d.js",
    "revision": "5dc5d0a62fab038cd9c74b6f56fce5de"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.dd14ed51.js",
    "revision": "79af0d9c35619c381f82817892bce472"
  },
  {
    "url": "assets/js/141.bdbf98df.js",
    "revision": "5a46d09fd7cdf13bb9530c09fabc841f"
  },
  {
    "url": "assets/js/142.e6e60e1f.js",
    "revision": "942f5ce4ef2d498227fa2c9d2728d19c"
  },
  {
    "url": "assets/js/143.a7623b58.js",
    "revision": "ad0c0153947b56e172c097894ab5064a"
  },
  {
    "url": "assets/js/144.0f6b8acc.js",
    "revision": "26257fbd12bcdc593283fa144c87690c"
  },
  {
    "url": "assets/js/145.0cdee164.js",
    "revision": "ed7ffacd5211e108bc075596cc9e50bb"
  },
  {
    "url": "assets/js/146.0de8032d.js",
    "revision": "b06603360097c813c9b278943b072aed"
  },
  {
    "url": "assets/js/147.6bd5d6f0.js",
    "revision": "ef5aaae2376288f95f002ab70b164908"
  },
  {
    "url": "assets/js/148.45714185.js",
    "revision": "7e1165643febbe09ced8ce837f180958"
  },
  {
    "url": "assets/js/149.ce40024f.js",
    "revision": "4d71bbac0c5932c2be231465858d429f"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.b1003590.js",
    "revision": "6e36328b0691e34f76d0bc31b61985bb"
  },
  {
    "url": "assets/js/151.d816a964.js",
    "revision": "826a9e13f566e0883e59caad84597afe"
  },
  {
    "url": "assets/js/152.aa317a2e.js",
    "revision": "46956bf44af2558fa9fd752738c82a5a"
  },
  {
    "url": "assets/js/153.9c5a8789.js",
    "revision": "f1466aa3efaad88107f85dc0f30f9870"
  },
  {
    "url": "assets/js/154.14735fc5.js",
    "revision": "c65b86e68153d335ea802f59ee17a503"
  },
  {
    "url": "assets/js/155.1d2f9e0a.js",
    "revision": "2dbbc72a7df0e122f3b4c1430ea4f516"
  },
  {
    "url": "assets/js/156.f5aebae9.js",
    "revision": "3696e773f4bf5dcd3f0fe735a0b65ee1"
  },
  {
    "url": "assets/js/157.186f895e.js",
    "revision": "28f4c6e60c3e48a61a5b74e29e9b1a3d"
  },
  {
    "url": "assets/js/158.0534e2f7.js",
    "revision": "c34ba87acf5561fa93c6927a4259b06c"
  },
  {
    "url": "assets/js/159.2419ff9f.js",
    "revision": "23c838b87c509e57a43ea231156cf4fe"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.56f1a2e4.js",
    "revision": "64fa3e133c39e9074196c41797a6a710"
  },
  {
    "url": "assets/js/161.127947ea.js",
    "revision": "f7af01fd36c589a7d672ade6ab46e71a"
  },
  {
    "url": "assets/js/162.fbd754b3.js",
    "revision": "744bb88194a1276cf13595ba5ab4c165"
  },
  {
    "url": "assets/js/163.618901ed.js",
    "revision": "b1e3621143a99a62b603be6fc20cc1b8"
  },
  {
    "url": "assets/js/164.3d397df9.js",
    "revision": "906030b7af821ab37a47fae83471ffea"
  },
  {
    "url": "assets/js/165.506cd169.js",
    "revision": "bc90b094f2ddb79857f20a15054daceb"
  },
  {
    "url": "assets/js/166.e0936f08.js",
    "revision": "4f69584300a3ba4826f312f8ce4f655f"
  },
  {
    "url": "assets/js/167.c6fe2f4b.js",
    "revision": "9c48f1c2a6243632c10bcb2f13dc04e1"
  },
  {
    "url": "assets/js/168.aec82cf8.js",
    "revision": "322a7aebbd58726001bb2ccbec9e9ac9"
  },
  {
    "url": "assets/js/169.f8daef59.js",
    "revision": "4520ee39de9faf8c6700211b50ed48ae"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.ee93e970.js",
    "revision": "ae6b84848f6ad158d77e705d4c9fac28"
  },
  {
    "url": "assets/js/171.8bf60495.js",
    "revision": "c84c6c9601f1eb2c6c82a11a2ab53c27"
  },
  {
    "url": "assets/js/172.27a5e70e.js",
    "revision": "aef2877565e89180e2aee9f835860ecc"
  },
  {
    "url": "assets/js/173.e9ef0afd.js",
    "revision": "a442da1dc74ca93d0e68a477d2745368"
  },
  {
    "url": "assets/js/174.6ba7c454.js",
    "revision": "7c114ca1064c846d3b9842d835be64f6"
  },
  {
    "url": "assets/js/175.2b85c151.js",
    "revision": "80f5bc757d41ca523e9446ca12e1d905"
  },
  {
    "url": "assets/js/176.6e4e3de2.js",
    "revision": "a65380b72577f820fb121b14c9a13070"
  },
  {
    "url": "assets/js/177.a2f8439a.js",
    "revision": "9984d8ec3ad5afb3ebc982c0602340b0"
  },
  {
    "url": "assets/js/178.2f78d1cb.js",
    "revision": "237fb96b560e2e43b9d420f9b590ec20"
  },
  {
    "url": "assets/js/179.cd7350b0.js",
    "revision": "1c77be640261b8f768d8cfd916e6cb0e"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.2cc2230b.js",
    "revision": "02c38d11c238986abd102e8d1635596a"
  },
  {
    "url": "assets/js/181.d15706d7.js",
    "revision": "4d0ae9e94801a7de1308a250c803cbd9"
  },
  {
    "url": "assets/js/182.9c010d5d.js",
    "revision": "1747988a4f7d1cf6a28c0245354161c5"
  },
  {
    "url": "assets/js/183.1ed7241b.js",
    "revision": "53416c7789389a72c3118911bc41ee7e"
  },
  {
    "url": "assets/js/184.9ce80612.js",
    "revision": "4c3eaa7ef3e2772ecab67988cec3d3fb"
  },
  {
    "url": "assets/js/185.1d3fc44f.js",
    "revision": "d3d18e7d4ce38a8897964d11f65ee2da"
  },
  {
    "url": "assets/js/186.d6d5daeb.js",
    "revision": "362f8867fcd38d7fa4505e1005199edb"
  },
  {
    "url": "assets/js/187.260af098.js",
    "revision": "03ea7ef718db3bb0f5965f46f7734bed"
  },
  {
    "url": "assets/js/188.2a843fff.js",
    "revision": "87bdf62803dfffbf84f9bdc064de295f"
  },
  {
    "url": "assets/js/189.d2338b2f.js",
    "revision": "823723b92a831bfb28511bc351d218ae"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.7b5878c0.js",
    "revision": "da0a189bfcf36d1c78eb9e66fd45c811"
  },
  {
    "url": "assets/js/191.38977add.js",
    "revision": "f1276649bebcf12f796f26216fc7855c"
  },
  {
    "url": "assets/js/192.dc913c82.js",
    "revision": "8e8b4fad6f4bd229c8ac06131a7671fc"
  },
  {
    "url": "assets/js/193.fb5c84bb.js",
    "revision": "9a80817333eefffcff83edd82ff86c89"
  },
  {
    "url": "assets/js/194.4dbe68ac.js",
    "revision": "37a91a982d49f9b556cd37ba3731ff0a"
  },
  {
    "url": "assets/js/195.bbab9e24.js",
    "revision": "0e42483e5d5b48ebdab3706fbf2191ea"
  },
  {
    "url": "assets/js/196.ebbe1488.js",
    "revision": "09ceeab2977ace9af665e0d80a847a92"
  },
  {
    "url": "assets/js/197.529bb80c.js",
    "revision": "3d8dfe3784d92f5e50f1fd9e01076a7e"
  },
  {
    "url": "assets/js/198.b4c83617.js",
    "revision": "73fe8164de6d618a4876b090249fef08"
  },
  {
    "url": "assets/js/199.2c6eee4d.js",
    "revision": "9a1af63b1775ead53af8ae33402f7612"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.5138df06.js",
    "revision": "947876557fbfdec06ab79c9e3c585846"
  },
  {
    "url": "assets/js/201.8d77fd00.js",
    "revision": "6d428bbf7a1dc0c3f1a68e0f64bda1cd"
  },
  {
    "url": "assets/js/202.b9628326.js",
    "revision": "06251bff4efcf7bf7eac28112a0c8367"
  },
  {
    "url": "assets/js/203.5cd49dce.js",
    "revision": "8f00705a97907c312f39f92ae41dacf6"
  },
  {
    "url": "assets/js/204.8f62b413.js",
    "revision": "91c73759106b3a6af8c0a3261c33ef3a"
  },
  {
    "url": "assets/js/205.5c46376b.js",
    "revision": "26d2415af669012a7d6c01799a4adcc0"
  },
  {
    "url": "assets/js/206.6c5406b2.js",
    "revision": "f05878ae3369f4b761ea4868c11bcc7c"
  },
  {
    "url": "assets/js/207.15beb2c5.js",
    "revision": "b5d9e338bccf3bbe9c7c1860edfc0309"
  },
  {
    "url": "assets/js/208.8d26753b.js",
    "revision": "9544c2f75351af1d3d007464da441554"
  },
  {
    "url": "assets/js/209.c0af92dc.js",
    "revision": "585b932121b3e1c4e1d0be31b391ff84"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.a9c1004f.js",
    "revision": "5ac3feefcaa2733ceaa21a506bafded6"
  },
  {
    "url": "assets/js/211.03dd9ee6.js",
    "revision": "789c9cb1379421b45a77088ca6df15db"
  },
  {
    "url": "assets/js/212.c176d041.js",
    "revision": "15289bfb2e93f3dce8d137e240011be0"
  },
  {
    "url": "assets/js/213.3c596a49.js",
    "revision": "6c289152d13283f92d6ee4f9f73b9691"
  },
  {
    "url": "assets/js/214.24ba2bc4.js",
    "revision": "f4b5c25a96c19f30e369eb9ee5bdb032"
  },
  {
    "url": "assets/js/215.9b585bd5.js",
    "revision": "562178c2c38ec91fc8dd729401af5ba1"
  },
  {
    "url": "assets/js/216.b8ebf62b.js",
    "revision": "0c954878d539fbdd6b1e62a76fdabb10"
  },
  {
    "url": "assets/js/217.8dd01605.js",
    "revision": "e5385636cc7357e667b4ab65f4dce5a1"
  },
  {
    "url": "assets/js/218.6988db7f.js",
    "revision": "68bfd1692f0dd45734fce6271e146b1a"
  },
  {
    "url": "assets/js/219.85309c2a.js",
    "revision": "5b19fefd3b1bcc5d715ea85f3dedf393"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.f6720c8c.js",
    "revision": "1b0a8f940f418ee44b3790f523925d29"
  },
  {
    "url": "assets/js/221.69fabfe1.js",
    "revision": "4f4d3c90637f197f800cf455b53afddb"
  },
  {
    "url": "assets/js/222.762af5ba.js",
    "revision": "b1d55ea33bb8a65b4f060e48fc5ad330"
  },
  {
    "url": "assets/js/223.72390b04.js",
    "revision": "132c873c1b15b25acfcc7bf78b852f30"
  },
  {
    "url": "assets/js/224.d210c938.js",
    "revision": "3301fe043a3fd4a357f340833ec88f1f"
  },
  {
    "url": "assets/js/225.8c57a9bd.js",
    "revision": "1401131083a951815a5a71ec45158c53"
  },
  {
    "url": "assets/js/226.ec250509.js",
    "revision": "a0fe35b95e74762bef7bd33b7032a052"
  },
  {
    "url": "assets/js/227.af6e114a.js",
    "revision": "6dc9ab0be9dfbce3d1f31e0218540a21"
  },
  {
    "url": "assets/js/228.2d70652d.js",
    "revision": "d9cb07ef93c53663500b612ce539fd7e"
  },
  {
    "url": "assets/js/229.1a936aeb.js",
    "revision": "9f6fb9785d44520cacd9d6c059deb9e2"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.5cccbb1b.js",
    "revision": "93670f837aaaf37552557a038e40aa31"
  },
  {
    "url": "assets/js/231.1cf2064b.js",
    "revision": "d0ca2e34f801888afcc715efd6789863"
  },
  {
    "url": "assets/js/232.32b47089.js",
    "revision": "2fa5bf669229dda1eefea52598416b61"
  },
  {
    "url": "assets/js/233.e8dca5ae.js",
    "revision": "babbcce5a49cc9caac652772384fbb45"
  },
  {
    "url": "assets/js/234.970a1467.js",
    "revision": "89e28605d7e6e2ce141850c14494cf60"
  },
  {
    "url": "assets/js/235.37ee09d2.js",
    "revision": "2ca5db30352225c6d6a43e3523e6cbe7"
  },
  {
    "url": "assets/js/236.1ae56533.js",
    "revision": "a600c2df931ec8f5238f74c6e371b9ce"
  },
  {
    "url": "assets/js/237.c932a614.js",
    "revision": "9e4cfcab2ced5e2a2096cdc9558b571a"
  },
  {
    "url": "assets/js/238.fb61b458.js",
    "revision": "fe83c27f367aa6d1b5a9ed9a9c72722c"
  },
  {
    "url": "assets/js/239.7369f6db.js",
    "revision": "2756607b7bbe90868263603d937edf5a"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.a86e3583.js",
    "revision": "ec2de625d83345701fff567de672b14f"
  },
  {
    "url": "assets/js/241.54ef3185.js",
    "revision": "8e3a69736cfce584e8a00419a04486ab"
  },
  {
    "url": "assets/js/242.898254db.js",
    "revision": "5fdad9c25b7512ff0761ace572e91650"
  },
  {
    "url": "assets/js/243.ea51a705.js",
    "revision": "8f7677baee6aed910246eae9fb7218ae"
  },
  {
    "url": "assets/js/244.250dcb5b.js",
    "revision": "5d46b14a533e4ae305404d4892684663"
  },
  {
    "url": "assets/js/245.ff21b63a.js",
    "revision": "7e1393107d94bb0becb94f1a4a0e2fbb"
  },
  {
    "url": "assets/js/246.0b608fb6.js",
    "revision": "79906fc5c9546016676e0eff5beac728"
  },
  {
    "url": "assets/js/247.4d45fd36.js",
    "revision": "08267acfde63078cd8d698625487e4e5"
  },
  {
    "url": "assets/js/248.8eaf7e96.js",
    "revision": "6d196bfb78a7c49dff4a3963a7529ae8"
  },
  {
    "url": "assets/js/249.7ef3e637.js",
    "revision": "c628d171870ab5032875e22581f7d287"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.3ddedaa9.js",
    "revision": "7dc3e1bcd2f2a44b6605f9aa0f1cc32d"
  },
  {
    "url": "assets/js/251.ef2071e2.js",
    "revision": "2d0faf55e18d7911de21d20ff0bdc2d9"
  },
  {
    "url": "assets/js/252.59b93b2c.js",
    "revision": "05ab1bc6073de62487b55b8ce910a93b"
  },
  {
    "url": "assets/js/253.5e9c8f80.js",
    "revision": "d9b83ba9fce8bfdbaefa4d6e0a687386"
  },
  {
    "url": "assets/js/254.26ba7857.js",
    "revision": "69b976f1085b51a19ea36fc7a651d313"
  },
  {
    "url": "assets/js/255.dfbe634c.js",
    "revision": "7e24657393288cf11e933bf387d5d03d"
  },
  {
    "url": "assets/js/256.c31792d1.js",
    "revision": "b72767d2d81f3d0a482232ceb64d4ba8"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/28.1d321b85.js",
    "revision": "ebea04baef7a0fd7c5a2782610599baa"
  },
  {
    "url": "assets/js/29.b3a2a4a4.js",
    "revision": "b02525f7fc85a6dd045ad4ea65a27114"
  },
  {
    "url": "assets/js/30.806f0e31.js",
    "revision": "2c1bbb64a70596b49db8101281ba6775"
  },
  {
    "url": "assets/js/31.4ce2a643.js",
    "revision": "efb66e197a3dbbf041823521cff85bfb"
  },
  {
    "url": "assets/js/32.fa70387b.js",
    "revision": "23cc305443a3e56aa52c08fb298af488"
  },
  {
    "url": "assets/js/33.f8113b4f.js",
    "revision": "a4af639cf5ab52272f5129ca93d664ec"
  },
  {
    "url": "assets/js/34.72be6ef5.js",
    "revision": "b475580d4fdd904aee2fb6ed6b80e3e7"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.fed85ca9.js",
    "revision": "3c48c254685b20bf23e89e69b6940eaa"
  },
  {
    "url": "assets/js/37.b86dd58b.js",
    "revision": "a2c979887f1e6ea6dd82213455aa5726"
  },
  {
    "url": "assets/js/38.02dda1f2.js",
    "revision": "8e5f297a369b87a1deb8f3e1b1d4f185"
  },
  {
    "url": "assets/js/39.9f63f8b8.js",
    "revision": "9a2a141d36db837ffe2e596f1a5402c4"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.dcf15fe8.js",
    "revision": "4f72e1918ab0a7dd276b7e7b990fa337"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.e78db814.js",
    "revision": "55d55af0ff73bc07a2ed7b8ce61309e4"
  },
  {
    "url": "assets/js/43.26c01561.js",
    "revision": "00bfe55f2c337d861133603bc7761160"
  },
  {
    "url": "assets/js/44.6b429a17.js",
    "revision": "e28bf2f741982aa8cab4dc967e182781"
  },
  {
    "url": "assets/js/45.d60760ed.js",
    "revision": "38277da509e1053963a6f64815bf2666"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.0ac0bfce.js",
    "revision": "7eb7db0ff98a386b67d20542e2bb6344"
  },
  {
    "url": "assets/js/48.88acaea1.js",
    "revision": "125ff884b49d5dc6169a4bd0e65c11ec"
  },
  {
    "url": "assets/js/49.ebc9b4ac.js",
    "revision": "69a8bb2355d20ba4cfdb105bf0251571"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.ecee4d97.js",
    "revision": "f38f60924f6e019351c0cc0b36c6c988"
  },
  {
    "url": "assets/js/51.da8af6b8.js",
    "revision": "40b12615c2db3cdc507a35f716b8e429"
  },
  {
    "url": "assets/js/52.4b3c6f99.js",
    "revision": "345ab19ed4cfda55955bfe2d945e178b"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.027762a2.js",
    "revision": "ec7caf1ac60f7ff4187f134ef6db2439"
  },
  {
    "url": "assets/js/55.d43d6c44.js",
    "revision": "6c50a9580c0763c86fe0a23f099989ee"
  },
  {
    "url": "assets/js/56.540e07af.js",
    "revision": "58e2250cf17d9e1dc74b3c92dcb045a9"
  },
  {
    "url": "assets/js/57.3de0d49e.js",
    "revision": "e2de4906baa7f6ab9d4d7266373639f8"
  },
  {
    "url": "assets/js/58.07a61b26.js",
    "revision": "5755efe798230aec0cbe93c6ed502081"
  },
  {
    "url": "assets/js/59.936f4c2e.js",
    "revision": "ca012df874eeb1a5506cf9e1a4673db3"
  },
  {
    "url": "assets/js/6.9329e00d.js",
    "revision": "8ce97f156f3a1697e4bdb28395bda84a"
  },
  {
    "url": "assets/js/60.2f36c42e.js",
    "revision": "01404cca5be0abacc2a5095ea20146ec"
  },
  {
    "url": "assets/js/61.72f662ea.js",
    "revision": "690d5e8f94724d3d4ad74ad85ebaf60d"
  },
  {
    "url": "assets/js/62.7aa6c6b8.js",
    "revision": "586b76535393fee0ce8774d515d1c916"
  },
  {
    "url": "assets/js/63.364ce22a.js",
    "revision": "b46fab7e24bf8d08e70260c7db75a510"
  },
  {
    "url": "assets/js/64.d5d291c7.js",
    "revision": "d8fe05589ef7ce88ee9e8a74e5437efc"
  },
  {
    "url": "assets/js/65.14f8de47.js",
    "revision": "a1e9bc10be1cbe3eaded1ab757062e7f"
  },
  {
    "url": "assets/js/66.7ac6444f.js",
    "revision": "d72d08b925c7abd1d881bfb7184e89ca"
  },
  {
    "url": "assets/js/67.064cf1e1.js",
    "revision": "1faa284ba538c45cf51866e675431c20"
  },
  {
    "url": "assets/js/68.92904f15.js",
    "revision": "9ae47dc5c77be9dc06f5ef17ce4ee8c8"
  },
  {
    "url": "assets/js/69.09c48e83.js",
    "revision": "108eeed855305b649b54b2b2862ff198"
  },
  {
    "url": "assets/js/7.3defe02f.js",
    "revision": "d5cb8446c258e8c108a9be4a8183e381"
  },
  {
    "url": "assets/js/70.af07dd2f.js",
    "revision": "581ebc91f7d83d3c5a6883c700e5f1e3"
  },
  {
    "url": "assets/js/71.49f88104.js",
    "revision": "3935f9f73414c67eea31caf457930289"
  },
  {
    "url": "assets/js/72.b759eef2.js",
    "revision": "c498d1eaa6480b70f4655981b059f1c7"
  },
  {
    "url": "assets/js/73.f8cc5b73.js",
    "revision": "62d7a18f6b7d156767d8d54b700f1e88"
  },
  {
    "url": "assets/js/74.4e638b2c.js",
    "revision": "77a9325d5a9588539b638fd09174fe8a"
  },
  {
    "url": "assets/js/75.c4530927.js",
    "revision": "4475ad73691f99daa60857994b45a607"
  },
  {
    "url": "assets/js/76.866192fc.js",
    "revision": "05efa6e85fbe3cf08fb060f2c8187880"
  },
  {
    "url": "assets/js/77.795b5b8a.js",
    "revision": "b110aa5c6bb187814f2c1de4264e8bad"
  },
  {
    "url": "assets/js/78.f0d3acd1.js",
    "revision": "7680eb94846923dc172833c26dd6d639"
  },
  {
    "url": "assets/js/79.03d8460b.js",
    "revision": "62f0335e9d97a5092268161b86f209f5"
  },
  {
    "url": "assets/js/8.321f929e.js",
    "revision": "8089ae2cb60c42b9376220351e563b77"
  },
  {
    "url": "assets/js/80.e3564d5a.js",
    "revision": "18531106f827c939d28f946ee4864f4d"
  },
  {
    "url": "assets/js/81.9fc9a5d5.js",
    "revision": "6d4b758254e28687bc3ba09329bfda25"
  },
  {
    "url": "assets/js/82.81b4524b.js",
    "revision": "a20441464f046a8763a5ff6052edc5d1"
  },
  {
    "url": "assets/js/83.fba68469.js",
    "revision": "eeb3cc8108da18a904ecc67bb2bed00c"
  },
  {
    "url": "assets/js/84.834aab2b.js",
    "revision": "6762b9f3ecf8ebeb6de3720d3907c41c"
  },
  {
    "url": "assets/js/85.c71f2d5c.js",
    "revision": "038c104868beb8dd97cd156e9f8f0135"
  },
  {
    "url": "assets/js/86.9d94f73e.js",
    "revision": "0090e9e3cc018d9c7fca8396445ba1ce"
  },
  {
    "url": "assets/js/87.25c6fa2a.js",
    "revision": "141deba77e6d38ee6df645acc50c9c4c"
  },
  {
    "url": "assets/js/88.7d86270f.js",
    "revision": "aa652a28b5273d85ad09722b107154ca"
  },
  {
    "url": "assets/js/89.3a119d90.js",
    "revision": "a8fbfcc94bb73936309da600cf4a1fab"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.549ca566.js",
    "revision": "a81ce1458224381aeb0e9a7c90d8cfa2"
  },
  {
    "url": "assets/js/91.5a551749.js",
    "revision": "03ed6ac0d040e76c4876a6a51c8184c3"
  },
  {
    "url": "assets/js/92.f403c43e.js",
    "revision": "ce39d93bb3b6f839d2de9425e2e32876"
  },
  {
    "url": "assets/js/93.aed57e01.js",
    "revision": "133f53e5b67ea79e76caa3454055b371"
  },
  {
    "url": "assets/js/94.6861134a.js",
    "revision": "1f08e89bc5fea7b67270107a94b0ca2a"
  },
  {
    "url": "assets/js/95.c5f5acd7.js",
    "revision": "5f091e6db0715bf0ecd96308ad3ac526"
  },
  {
    "url": "assets/js/96.9cd3c97c.js",
    "revision": "b5910e66b0d79eca23b4aa8a7f3a6f49"
  },
  {
    "url": "assets/js/97.6deb6f69.js",
    "revision": "b01293dc9ce718e4a6663d4091435c74"
  },
  {
    "url": "assets/js/98.87776596.js",
    "revision": "08137714d5d232abc4cd785b2c02ecbf"
  },
  {
    "url": "assets/js/99.d92adbca.js",
    "revision": "1a7e29c435880faf799f5295a39ae519"
  },
  {
    "url": "assets/js/app.0acb614c.js",
    "revision": "e4a28f0dc035bb5e1b7b3336dd60054c"
  },
  {
    "url": "assets/js/vendors~flowchart.cd0cfe9a.js",
    "revision": "b3af5997e713cab07832a64b4cd1f3ae"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "6973e35fb4866ecc58ccaac83e355387"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d1abd93ad6964d50f52f4e7d8af18f6c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "03ea8237f1139b5a33153b653d0b0916"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e55b2ab8a67b17ef09e07927d62b0aff"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "20d297e73ea41234494f26de2ad176d4"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b98753395add35268fb53f51a8080e72"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ab59c32f1996cec6c8bea40f4f88e981"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e91d43bfb5b88567d80471fb82c95007"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "79a26721d7d582bd41b19326fb420b3a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "31a25de616ec7395f97389814c9d85ce"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "351ce052220e9680d8cdcdec368e72d9"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d64a921e1b3360e46be61e3773ebab72"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "2adc59fb1c209356354fc2b34332f7f0"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "ceb6d6e480cd1c6174a7a336cd465c78"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "7eb43ae1418a41bcaefccef8e1542431"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "ba1e0401aade6c7cbd001a41d4297bb3"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "a6ede1ee78db5feb823f54956c5667ba"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "8b2851878e2e69c7eb1093efb4de9f20"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "d83fc2b3656c09bbfe26b1a5d999dbbb"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "350b62e4e6f1e77706db75bd02115903"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "db79446e961cb1693d6aa2124e3f18d8"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e9956f5d69dc17fb50a8ca27eafc49d3"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "6fa54b215a5ff5d787eee1fcc06153f3"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d1686698f064308edb7e543a9eac5c8c"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "41f2fa4c31ae2d76b744511365147c16"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "ec5aa942b66e7e6d2584b91cd5ba58aa"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "673d554abcee1aa84dbc5d0a5ab87ffa"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "6389b01d2d60727340946d1716f737a0"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "779ccc637af903ddf9a94cd0675f289d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "29f349f07c6f024ef1723e50bf7cd032"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "1d119ae3a5b2d2307d467cc053cec751"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "ccf6f04ea91ab72e76bbd9861305ef14"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "b9a401d32c7af9fad7037804dfe3f707"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b0ae30ed8b2c0d78abf5b0750e43c20c"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "bfe65be93d80cc0b25b4b8c5ea2a31c6"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "18f45c3bf7da1ae0d9cadab93e3bf1c4"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f6bf5d8b19760ebf48f3a5c11181aa16"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "d9eda05dd016530793ed8ba36da1feb4"
  },
  {
    "url": "basis/index/index.html",
    "revision": "58e0f84f18272d353332df3ed1837e58"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5e281868c855285af710334ec523f5ad"
  },
  {
    "url": "book/index.html",
    "revision": "cd499e772f6bb108029ae052192d83cc"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8bfb472d08e05823a2b07e54e32bc914"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "ba6e1a5915ce7c60164fa97ea6bc3166"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "2866ecb2ec2a8bbd9046c757e9a335f8"
  },
  {
    "url": "c/audio/index.html",
    "revision": "10c9fe2a25545d052d3b0c8c2f21b414"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "2f7b160db0118e6850bbe8a4416776c7"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "64f4019e0fd5a8a137d8895ac68ba0cb"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "60f299b886060014aacdd6ba0f86d547"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "7e14141cfee22c2f1b4ef6c1746ae8bd"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a74d25bcdf4015b2e108740e4ac7fbe5"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "81d39d2d93f70b48cf2a06adaee53f9b"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "a8f2b52259dd7e65689c13efdbd35332"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4b0a6b66f5b55169de6361b63b0a60dc"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "072f8cf62090747cc3e677c5b82b8591"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "7f6cadc67079dd303df0fee308308bde"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "a70cf7cd95e58bdd70a20b1927b9f567"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "f5bd4e04e2e4ef8e807a60febd6dfe0c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "3f8dadcd6aaf02d511589109dfc25f4b"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ee62a951836f2a870c36f898126c9f45"
  },
  {
    "url": "c/program/index.html",
    "revision": "bce82035da47e044d3186b66282008d6"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "78df98d597a0ceb230b1d46a7fd88fe7"
  },
  {
    "url": "categories/index.html",
    "revision": "56b464aba781ef6c4a5f635f255af458"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "1b96f6418b6691304fdd5fe60d25fa8b"
  },
  {
    "url": "figma/index.html",
    "revision": "8b07dfe1894bbffc23dba6f4eaab8ff9"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "6e34dad1350ddbd5718e2277afc84e92"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "ee26a727d6869f33fc03d47a43e4728b"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "e9350fa326f42258df9d18f2fb1dc623"
  },
  {
    "url": "flutter/index.html",
    "revision": "66e03abeaf329710f682c73d3c6aa031"
  },
  {
    "url": "flutter/point.html",
    "revision": "56b7e1673f70a89af764c4d108fc411c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "24cd705bf03ceca66e52d6d99efe124d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9ccb7f412ad063a137bc19ee0c50bc69"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "60e8f36330e8165635af583d2ea65973"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "7b0f26305a3b55baa7f1774c6d3d4fb2"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "fe6a32b278ced471b45b17b97847470c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "263f2d3985bbacc2e0d0599c22263e87"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f8a7efd6b75779bf540e9cbb84ae0ecd"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ece92f41e171f48c5aeaa391f4bba12d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "66ddcba1d689db37214c1b48c50334ff"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "4e6432ac17609d7703279bfe52c48217"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "38d27eea4d686cf579feb3dca49ec095"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "332e411e6f41d7ad7f00e3c43bdca0d2"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "64eb838207f229f92d5405ca99684cb3"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "10795ceafa659b1444f4e443e93bcbba"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "9c188ec0a7715fb594a8f05656402cf4"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "940f982a6a2864062fd451046182876d"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0cf9dd467cc8e944000425161c406f08"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "66738f7e9e36ff628e0db66ee3cf41b4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "6f1daa836a0344c220bace67c38a68da"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "c0576637ce339e2ec3b5ccb3306f13c2"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "8fa1695d2e5322cfa506153e62df8b00"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "34c4d854bb0d896df1eeccd669601297"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "51dae8001df6f8ad805fcf9c90e4660b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "5db099c8e168290d56777a560fb6a1bf"
  },
  {
    "url": "haskell/index.html",
    "revision": "4203688f908b7da4ce8f85b164dbdc18"
  },
  {
    "url": "index.html",
    "revision": "dabaf6c5b4490c201f8101786a79cbc6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "2c0c08acdbbbfd9eb0440ee7214b8c39"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7019460dc550f7c4a31db9a12d94ef12"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "025fc050e0905540a9e3be1f1d6b7686"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "9030768a7a4c03a622c4f297742066c9"
  },
  {
    "url": "python/index.html",
    "revision": "cf89f39cee2ee1257934eb5c8d974a7b"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "dc29dbbf5c76d6d523e27cb7146867d1"
  },
  {
    "url": "python/python-file.html",
    "revision": "a75ff9fb1dd3123397edae87c186b5a9"
  },
  {
    "url": "python/python-function.html",
    "revision": "ce44aa35c7963626044dac6f54d2d065"
  },
  {
    "url": "python/python-generator.html",
    "revision": "539af4f2c17ac1c4e6a5b5dcb2b76b0f"
  },
  {
    "url": "python/python-iterator-s.html",
    "revision": "4e2a5f1b5cd83bb8003464a8d3f36b73"
  },
  {
    "url": "python/python-module.html",
    "revision": "078bbf62af3440dc3941743f3ec546c9"
  },
  {
    "url": "python/python-string.html",
    "revision": "f4fb75252246277160d91a1990d1b58f"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "91594fca06ae46568ea8c4645d3219e4"
  },
  {
    "url": "read/index.html",
    "revision": "51d69cd9119172a7c25f23369fa654db"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "02a12db64716694f33c3e85498100e5d"
  },
  {
    "url": "swift/better/available.html",
    "revision": "638080f663ed3e48d88f93adc8ae4612"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "ddede6df1efeead4525c22712534de83"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "2fd5d591a273058c7a9c0c14914249e4"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "95aa21004c0e839fe7235096606adff9"
  },
  {
    "url": "swift/better/di.html",
    "revision": "dec76163d7bc891d2da62b0123d94475"
  },
  {
    "url": "swift/better/index.html",
    "revision": "b4e4905a109e6f67e0b1c70820310dd2"
  },
  {
    "url": "swift/better/last.html",
    "revision": "640c07f4e06d7e83db9f7f995f1d5703"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "c02bb3f014ac2c1f58737ae8eb424e00"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "256b124d77fa9754259facb78e648343"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c921e6b5de6f6472bce1e30c34a1a28d"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "66201d39b62a5eeba1b17ebbf5d261d7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "17d85c629f132b31f94515e207506827"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "18d18d0a8dde969921b1e56113ef3912"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e12c216913057a2bf96e1ed42a1da936"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "8a765310c5516723b452f6eb73e55e28"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3c39101eb85d4eebff365e7038385c45"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f6b169709d92585e1875a221594b2345"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "4df23687e9d83c7920bddb4c00e90e5a"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "6f8404995c44f3dd359132a9fb3b0373"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "19a8a65b6de8c94011ad20afc06a8f63"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "183e00aa7678ac6124e528042afde457"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "a687da02bdf6f6833dd6ecb5aac8dc47"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3ddc47a16e472fdc3e78c5b88f8f5e38"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "818bf092594f466e3baccc945319f25a"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0d1bb2f4f6e2f72597c94e34876d72eb"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "634ebc77239daddab7310b470f435d96"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "1224acbea7c5514803ceed9d21c21c64"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "fa1744b709c770ef867ad91a322bc1f6"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "ce32f5cf6611041f444b050394323440"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "89940ad10aaf89652018bc30a13eda5b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "4b3f8b4d2a9d4509851838f2c2a14b89"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "706347d2d19ae90416039c76115b5574"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "5ce5e7e36817bf92870df5b293b04cea"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "b14abfdabc67e44e3bd164f7586edec6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "676411fc6e76a0cca0a1758a769c73ea"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "52dd16fabd8548ef7656992b00de88cb"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "0942688e620edcd6e7b23ac91a4c1306"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "89ffa35f1a451e39c9bcc7c4e25c3abc"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "5d72e8ed0516ee29dceefc8cb0ba567c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "311da7a7000d90be523ed13955e180f4"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "b3c06a1c9b52dffd724787932641f64a"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "f2a4ccd4fcc314bbb25842f6a51c3be6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "742c7b92b0dca002d20d8fb348673298"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "8bdc58eecbaf9a42c1d754715689c39f"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ecc6bfbf9853e30cca00c3e5d830df36"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "8d8d8722981c9dede779f2de26949967"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "fd9ce9356785615d895f1498239d823f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "ac8b8319b89174661ee000164d4122c2"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6e3d3d6498ddd3fa7f9999ccd736d5dc"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "1c957ad1e6721efd8f20d3e2739e640d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4804f3ff6555628ca020cc898aec7fed"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "aa9479a317ae538476ca01e4affb7053"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "766b06d3855f08e20f3fa51c2bced434"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "6860b1d8293945fd6f2bcd8766dddf5c"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "33bcddab90fe2f3903fa3119777584fc"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "bb2f3496f754812829ca47821f2afd34"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "10b5f12ecb8d6087c1754ccfd167e237"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "bf3c73839f236ac55defd8f55c694557"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "494c8c12d9ac62d9a5acd7a4e7e9dce2"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "43ddd108c0be99515ac12d6d18cffe29"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "f2f8f9bd3d40c521ce57c7e681d587c9"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "264fd6996a05014f1ef5f543670c0044"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "5648e9b891c128b3638698f0cee4bd7b"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "199a08d386377825788fce61d81c6ea7"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "1e476fff77c90cf4dd750f43b8dd5d8f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8eef36baece50d8fd0fb3ec8092709c1"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "0c92c63e3b504e3b119a9a54d01a1311"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "4b1bb56b5e1401f9aa70c88f143eb2fb"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d13323096d4fddd184c616f19e24e7b7"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "3148e169763b8d160613907e01b98773"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "20f2b63a6a1456cd87b83f07dec7402c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3e49b0e60783e87b537b80fae0df8a7f"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "1a45cc897342aa4cbd78a25427b3be74"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "51161d66adb7c203098d048486642c7b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "b9a370bde507ba510f9e8d15d3b56087"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "58c38163df2d6f2f1819a446787703d8"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "77e813eab55622fe581db8e4a0f8a9a6"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f3b705cd1575e9c3f8202544b35265b1"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f9681daa156b10f2e8ac139782e31e5d"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "31b5766d1b33eaebf41df233f67208dc"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c3176a2568d32bd39145f36a112af188"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "cea70d66429d92140f3882b69d372892"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "53ae3cfa5e18fb1ebb8d254edee9a706"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6d4c1f321f201afb5aab435e7d7e54e5"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "55c502b94f978c8eb7a82c9203b94d72"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "304f6071e4ca17e989ade793406870b2"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7c3641bd1c1e00c8f9e7192f2a54faef"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e8ae4d000e76b3802397584aa9f759c0"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "f12846ff383216f0c8fff3f6a7ef2b95"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "9d2e0d75d2c756e86f99bbb084548620"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "525eb02ddd600e4c9af5566f0b8f931d"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "aa567ff550994675490fc31451b2b4df"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "6802d7c533d11c12ab55eb5c7d312e1e"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "af633314ce229dc6ae91b35212c3a26d"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e0388d0d9d7ba45df8930084ad3f44c6"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "3a868441c5f88422a35ad3c7af8df02c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "168816fbf693885654064e2a7facce82"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "cd7aeeab4962501076cc8c3887004be0"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "2da9f61d37c85decd2e3d042f1a45799"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "422bbdc257d949f2440fb87a673ee761"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "03f2edeac93a32860b4c2444edfc68a9"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d7d2df50cd8f9c255111dc250bf8a1b5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a202e8e2b42ee0a8cd68a445ce95b70b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5abb00058e9f67a07c3ad4046d53d29b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "7f496112d312bf69c6d1259f39d1be93"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b38bec25b660bc55e9055b5fa537f3b6"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "241cb4d61af5ea7750215c2cf3d6412f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "77fe0f7813fa9deb669fc89b9c59e254"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d32f22ff105e62a4f7e5387efda77eed"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "626c1180829016d8b7171704a85f9848"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "312c3dcf7112922dfa2f282f2127cc7f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "6f3cae7801252bd3e9e5ab4ba8dccd2b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "92e1d8c06d9642c180d98824be8de0ee"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "365edc296b8ee9f23b611904f8125b01"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "8bc7c4fb580fb04d7cf6521fac7589c4"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "143606db963aee67de7b4954b3e00c41"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b625493aec404b6cb7d01e25abfd07e0"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d01f0a7b7e611f73e553c3d1bb467987"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a091bfc5e406da30e477524ecd13381c"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "13e71e0282df7756e7d5638349b5cf32"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "caf5c58bd73fd3c0911e952748d43905"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b46e9031baae567955e4d8de55b9ef1f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "40f47c34a16b007a5e60bf537a5f36e7"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "6afcc47ea3058a3673a01c8ce1f3d4eb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6800cae7eb60e7bc13b2ff71051aae8d"
  },
  {
    "url": "tag/index.html",
    "revision": "1d0e284206418b336595ab718ca6f2f1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "8d44f721d5cb108b1250201d45b36383"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "212e264c6df96ee19ed6e7fad9366f64"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "2b787a48f04734f582549bb01333c845"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "140b31c7f0d2c340a8d0bf0ecc862e57"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "19520622310889c45b80ac7b09b8297d"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "e4976504cfe862abc17534657960f6c9"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "d32534922e90a40e4df6749d8b791d3d"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "21934cc8c40e29ff1e07022ad541aa7b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "8e2a8ce6dfb91628f1eb9a9907be99a4"
  },
  {
    "url": "tag/json/index.html",
    "revision": "4434619131b1f21a1c4fa27fc99b0940"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "bc50063b81d1c1fa70245c5e761876dd"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f5b7e15fdd14407b4d8afaa4c5206828"
  },
  {
    "url": "tag/python/index.html",
    "revision": "865c499e9184f82dce0c382ae777697d"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "1c3960aac9e567f1aaebe56a8c3478df"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f533d9c5ceec037125c67e14b2de32c8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "29cc194b36282b29393720c1a4a41af2"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "b5c962b731e8857162ca377521515917"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "dbdc12ea814ca602e2735cf2c0e2bdb3"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "61f273874bc055bf7876d33e2f16d2ad"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a9d09c762ec5d8085447a6ffc86d0a04"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "4649430b3397fc0ac4c8aa0fe8d250cf"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a7e5cfd58956d7e23a9e8c257bd3948d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b6a5ad6d913a6275728a0779be7a5194"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "063ded256f6af31684f257fc94d4155c"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "bd56a4ea4664161b12154c12566db688"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1674d37fe513a8229d9e95d0a474a35b"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "19a53f570fcf5240fb976088b08f0da5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "16d49b185f72f35afd64391203af3c5c"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7256676f05e1e756548c5a58b1c930bf"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ce5fa5f2b587e867223e89e7ec73584a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bd784c876bf1c27609d7be1f1bd7ce24"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8520cf440842863ccbbd98b507002e75"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "48ff7eafcc38da32a28c33139c91bd31"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "3cbe1fc32d665cc237e84700344bd48c"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "cbb56b50563dc1289a376236dbf84f28"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "df19bbe8b2dba296fe1bc72757681bac"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "16f047712fcd88078189e0a633c49271"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "81228abecee3db6eb8a255a9712efa0c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "09f299d72f5793c79b5190fc1bc90e04"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ea0531636be6d955ed17a9e7ddff6b0d"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "7eb4a2f9ad408a687a218a276977274f"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "94f591fd5f19f436c57293804b2de137"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fe52a687d9c6deb027e46c70fb413fff"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e3b7d949911acbd5104e69907072a4d3"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "8c59a5c4c8a6cc95d904de9f9ab042a9"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "85175b25439a52c3a56ba2bb14109e72"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f510bf5ae115918c820ed55dc4c168a0"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e32885d59ff3f1c0605d138e08d5e7b9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ffae814ba49aa650c2b65e204cdc4d5c"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2381b547e408b836b63a926f67b7b0f9"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f7e6d6de1b281e1f68c63761d172ae89"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "eef2742637eadef274588fec53304a60"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "d7e592c687d50e9e0a7bde0be58e4de0"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4a9d69d00b07de5d26ed6784223ef778"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "af404ac9cca228e151a9e1e8aca4adba"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0e574e89edd2a60268018db8d5f8bf5e"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "7248abf9711c56c64d0b55e705c1ea0e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "735529ef5efd0b88ecb0a8fd0350cedf"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "39d9d304e680fc4204d933c34bc8be06"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "7382469b33c3fdf1e1387ca9d67a6d5f"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "7e7d26df2bf6a94da48427ac2a6c647d"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "c7c1878f94e8c8222ccc19f43e0c0ce4"
  },
  {
    "url": "timeline/index.html",
    "revision": "4827d5738e3457234432d6f5b6dfe075"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5c7b002cf0fa6e7e5837a8d21cf591cc"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f0858e095a9043d0145f802eaf1480ed"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "d7f758630ef2e8b3dad0b6591af4720e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e261edd386f0b336d7ed40417e18b000"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6b65b9f9cff4501a65d2d2f98c7a5750"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2c5be83d9e5116b0e2e35ff486b7ba77"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5c7895176f974bacfa22277fef01ca43"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "216bbdf6029a4019e604dd1299964f89"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "7ab053bbe75478afe375c0728e6bd55d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "bbe316a976f524524d5e5a8c4b576275"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "623df43eeb7d5b391ab110f134465949"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a5fc0e48f3f6b5d0678ac99a2dc8ace8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5ded1ed3ab4a68e0fe74120cc1720e4c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "ef973cfe76ebaa090f5a30569bc331cf"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f86ffa01e5b5be81b2b1c7af46e3a1e9"
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
