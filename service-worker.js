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
    "revision": "ea49d88c571411d32e6a37680e89c843"
  },
  {
    "url": "about/app/index.html",
    "revision": "2d2656b8488fa304d23e74563d54fc61"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f5af3828d5ff851e694a518428d48417"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9beaadfa016296858e153d3aa22d666e"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "b2251a677f2af78b9c7816d636b8c81a"
  },
  {
    "url": "about/index/index.html",
    "revision": "fa4c089afa7b3c500d3d99f9b7fea003"
  },
  {
    "url": "ai/index.html",
    "revision": "877ce70577e53c9f2b0e61100e7f0c94"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c2b274a2688dd93dad41dea4cb95b491"
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
    "url": "assets/js/10.31134a08.js",
    "revision": "230448b197c5946602feed02bbb51b30"
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
    "url": "assets/js/108.5d0d1a2d.js",
    "revision": "231490a317b0b7680f5857af08265505"
  },
  {
    "url": "assets/js/109.f3a27906.js",
    "revision": "95f9cce7647273dab6bce51a3b828d52"
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
    "url": "assets/js/121.f4a7d312.js",
    "revision": "9961737acd42bdd20c8ad88620a03d52"
  },
  {
    "url": "assets/js/122.b06c0d7a.js",
    "revision": "33aa71069556d77cbe263c834a0ebdfb"
  },
  {
    "url": "assets/js/123.8be909ca.js",
    "revision": "3a1e46bd1c3e212236171bf09587b0f1"
  },
  {
    "url": "assets/js/124.27aecd9d.js",
    "revision": "6a7e98cd52e59fa6989857c76319b746"
  },
  {
    "url": "assets/js/125.f8b0ebd8.js",
    "revision": "643ea2699fda886fc2a15283a28d6abd"
  },
  {
    "url": "assets/js/126.23455b59.js",
    "revision": "cfbf17e1d0a68555e2cb05db1007ea44"
  },
  {
    "url": "assets/js/127.3803f19e.js",
    "revision": "4b21e218aa165700854b312c5faa0aae"
  },
  {
    "url": "assets/js/128.11db7a6b.js",
    "revision": "48b408343b88b739fb069e8cf1618431"
  },
  {
    "url": "assets/js/129.05f18dc4.js",
    "revision": "4d961d8bee5ceef05f9a52fb7e77cb0c"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.a6ed8e15.js",
    "revision": "14a907a31a69ed1215576941fbad3e02"
  },
  {
    "url": "assets/js/131.049fe7f2.js",
    "revision": "2e1939164014f9811089d10a9809fa5d"
  },
  {
    "url": "assets/js/132.022c02db.js",
    "revision": "2b15c7debf653707d5c0ed44f41880f7"
  },
  {
    "url": "assets/js/133.8b6a1869.js",
    "revision": "7acb0f91ae954d339fa938dd5793dfd1"
  },
  {
    "url": "assets/js/134.30143ea9.js",
    "revision": "854bf2c493181df8a75de8b9a4a01de2"
  },
  {
    "url": "assets/js/135.6fe6c481.js",
    "revision": "1fa85e315f57c3f8aa1ff321190107f0"
  },
  {
    "url": "assets/js/136.48367a5c.js",
    "revision": "e89b71f2f2e36bd6d5d4800fe7dc6f7a"
  },
  {
    "url": "assets/js/137.3843b578.js",
    "revision": "af96bbecd9f59553ac7960466e79d586"
  },
  {
    "url": "assets/js/138.6abefa58.js",
    "revision": "4d07d545655a184274a541b99edbf29d"
  },
  {
    "url": "assets/js/139.bdd5908b.js",
    "revision": "81f41d823fd7d53cb48b4242752d94a8"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.7541417a.js",
    "revision": "94e813aad5cdc9564626f81723242ee1"
  },
  {
    "url": "assets/js/141.68c7ecbc.js",
    "revision": "1adee3de61630a3396cd9e86d9710578"
  },
  {
    "url": "assets/js/142.6754bad4.js",
    "revision": "50c2f714c1198998028dc3d856879e68"
  },
  {
    "url": "assets/js/143.a9b5b75f.js",
    "revision": "96ed73931075b0e2cfc81b533385c369"
  },
  {
    "url": "assets/js/144.c8ed3465.js",
    "revision": "b71dad59bcd5351f5526a6a3e36d8fe0"
  },
  {
    "url": "assets/js/145.d3275a8e.js",
    "revision": "ea2ac7b06e70082ad9e0d604d6ffd6d7"
  },
  {
    "url": "assets/js/146.caa25b3b.js",
    "revision": "62dcaabb2034534d7789a6f70245c406"
  },
  {
    "url": "assets/js/147.a28c8569.js",
    "revision": "f0fa0b55f3ec28a3d264903165082511"
  },
  {
    "url": "assets/js/148.23fd15de.js",
    "revision": "0ac672c34126638b5d93a0d83c5b3197"
  },
  {
    "url": "assets/js/149.471f6f02.js",
    "revision": "ddd115d93abdfcf3be30e8dae203d7cb"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.892b0e8b.js",
    "revision": "40ce7d489172caf3d56f2e66a6ec4bd1"
  },
  {
    "url": "assets/js/151.6df0ac53.js",
    "revision": "d07c077ecf06a98020d427da6fc69801"
  },
  {
    "url": "assets/js/152.474a7a1a.js",
    "revision": "64184f37fd82a85b2b99034cac499ae2"
  },
  {
    "url": "assets/js/153.731dab55.js",
    "revision": "1f20bb14cba32f9e2405ae5b7355db4b"
  },
  {
    "url": "assets/js/154.b74464f9.js",
    "revision": "c83435fd824a4742e755289d4b399331"
  },
  {
    "url": "assets/js/155.2546720c.js",
    "revision": "4633a2d2905349ea5ae8d0ecb7d98602"
  },
  {
    "url": "assets/js/156.5984d49e.js",
    "revision": "21f606fe4101dd428561c94baacb921d"
  },
  {
    "url": "assets/js/157.1292b7ad.js",
    "revision": "bbef6cff312064babf16deabc78b66c9"
  },
  {
    "url": "assets/js/158.7aca7225.js",
    "revision": "875f158c009d929aab056cf0ab81fbd1"
  },
  {
    "url": "assets/js/159.a144c60b.js",
    "revision": "29ce874386ea341a9fe61e36698ef13d"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.acfcc615.js",
    "revision": "f18009d04cdbb0d218fea57fe1bdc889"
  },
  {
    "url": "assets/js/161.26319268.js",
    "revision": "693d5177bc7ce3139a172481b2a3cd4b"
  },
  {
    "url": "assets/js/162.c3d5d8e6.js",
    "revision": "c286750114eb7c21c1b5892f39d4f5ba"
  },
  {
    "url": "assets/js/163.b48b6e73.js",
    "revision": "c501367449287cd3989e02d4df006857"
  },
  {
    "url": "assets/js/164.33f8ff06.js",
    "revision": "90a8235953da9f809bfd360fb96b4578"
  },
  {
    "url": "assets/js/165.7f2636a9.js",
    "revision": "ab03a890fd00e018d4d345c2bc439c9a"
  },
  {
    "url": "assets/js/166.7f0cc84e.js",
    "revision": "2e0295a5b0334eb191dd523b257f7535"
  },
  {
    "url": "assets/js/167.a645eb80.js",
    "revision": "b83b0590a15f3e82122851c279b31107"
  },
  {
    "url": "assets/js/168.0e35c131.js",
    "revision": "f9e96dd80224a7734a63dcab8a517507"
  },
  {
    "url": "assets/js/169.1e753912.js",
    "revision": "ee225807a9e7b63800151c1867612998"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.5942cbfa.js",
    "revision": "8fce6f556ef403b797120119cf48c8b9"
  },
  {
    "url": "assets/js/171.af78209d.js",
    "revision": "9541c7065d4ba83d66c5c9d1d7bd39d7"
  },
  {
    "url": "assets/js/172.b77075ec.js",
    "revision": "2d135b34c1d6d825b8006fc21e8145d1"
  },
  {
    "url": "assets/js/173.dd493ebf.js",
    "revision": "2570dcdcc66b74b22ed13baa6a83b4fa"
  },
  {
    "url": "assets/js/174.7eb1032c.js",
    "revision": "5e4551db08270493b7b2c59746bec68e"
  },
  {
    "url": "assets/js/175.700c0224.js",
    "revision": "71d8e04386a4cf4c8380592226d7cad2"
  },
  {
    "url": "assets/js/176.3a75a447.js",
    "revision": "97b1a23943bc1fda3d59d38896e733c9"
  },
  {
    "url": "assets/js/177.96bc2bcb.js",
    "revision": "610f96caaf3fb48b9d47a703477202f2"
  },
  {
    "url": "assets/js/178.476a6384.js",
    "revision": "cb8af3b1bdaed745ae39d04ddc225082"
  },
  {
    "url": "assets/js/179.012fdc9e.js",
    "revision": "9d32ed0fee0cbc5375dd046b6ea37901"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.0bf4b323.js",
    "revision": "d0d462ca90c3f00f406fd193931f3ba7"
  },
  {
    "url": "assets/js/181.7f89b769.js",
    "revision": "12ad7d1ac0ff4b3d3d24a2f671c6fc8b"
  },
  {
    "url": "assets/js/182.e721693b.js",
    "revision": "ca57628c3a4598d0b33b09bcfe07e3d2"
  },
  {
    "url": "assets/js/183.2b5ec565.js",
    "revision": "6b01fa04bca2c237f90b19cf825b1365"
  },
  {
    "url": "assets/js/184.063d2f93.js",
    "revision": "fcdbc240f25ea0b97318a32434cd7b0a"
  },
  {
    "url": "assets/js/185.37c2da63.js",
    "revision": "3c0952e5b5a0ba77159ea2192e7273fd"
  },
  {
    "url": "assets/js/186.d02d24ec.js",
    "revision": "99a96241a6a309bdf5c4f1c09f290dc6"
  },
  {
    "url": "assets/js/187.8f78343f.js",
    "revision": "3d0385863b78cdaaa590db4b4f53075c"
  },
  {
    "url": "assets/js/188.d13d0b11.js",
    "revision": "f8595235cfe11a0a37febf5cd41afc6f"
  },
  {
    "url": "assets/js/189.6e0425fb.js",
    "revision": "df3255affd12d4ef32606457612ff44d"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.07be9842.js",
    "revision": "4f9422553b2a6c5b6eedccf5a2b72a14"
  },
  {
    "url": "assets/js/191.fc5845e6.js",
    "revision": "59d97c9b432f5897685834aea30bd9ec"
  },
  {
    "url": "assets/js/192.99efcf80.js",
    "revision": "1657612158080148b08d3197d355b549"
  },
  {
    "url": "assets/js/193.bb821fc7.js",
    "revision": "b47d8cafae86dfc3ecbf106ed54cffff"
  },
  {
    "url": "assets/js/194.1d5c1078.js",
    "revision": "d18c76bd5f2b257ad078c7905adfbd55"
  },
  {
    "url": "assets/js/195.c0a95ee9.js",
    "revision": "880c46187169f9fff92a49a4169d3f29"
  },
  {
    "url": "assets/js/196.48963a04.js",
    "revision": "6269b17c9ee40c1e31acb5292e7b5876"
  },
  {
    "url": "assets/js/197.b447d536.js",
    "revision": "cccc034c9a0a36db9260f3f1b2a02fc4"
  },
  {
    "url": "assets/js/198.dc7f9f32.js",
    "revision": "9bc10b210e3aaa1f6e8d04070ed47ab4"
  },
  {
    "url": "assets/js/199.a0fc5ab7.js",
    "revision": "f02291442924140c5fe925f305fd57ae"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.acfe8f25.js",
    "revision": "f1c2d7e67371a419ef5c2bd2c07ab74c"
  },
  {
    "url": "assets/js/201.7d961462.js",
    "revision": "fecac9a4eb247468444a7f11f96f1942"
  },
  {
    "url": "assets/js/202.9c60a5de.js",
    "revision": "b7b1914b89f12e85eaf8ec777d6d1e66"
  },
  {
    "url": "assets/js/203.b09049e2.js",
    "revision": "c5f8094b37234d112a3b596f587a31c3"
  },
  {
    "url": "assets/js/204.f6ec1b1b.js",
    "revision": "9625dce031b935ab0e82127d38ebc925"
  },
  {
    "url": "assets/js/205.03c9be1f.js",
    "revision": "1329d9e87a794b813a06c0ddf222af94"
  },
  {
    "url": "assets/js/206.a89fa6a6.js",
    "revision": "d76789a17ded1f769a4a29b39ed2685a"
  },
  {
    "url": "assets/js/207.eee08973.js",
    "revision": "9e6cb01ed4e9a00025797c3d3367613b"
  },
  {
    "url": "assets/js/208.14e7ef53.js",
    "revision": "95cedf3d22f78670630c21f969cf10c1"
  },
  {
    "url": "assets/js/209.f99756de.js",
    "revision": "4ca5bcbc6ef2edaae3a27e390c863f97"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.4e46017a.js",
    "revision": "114455b25f1a2c80230db10990664e66"
  },
  {
    "url": "assets/js/211.f8a66c45.js",
    "revision": "ca3809a92fa927b8f3ff9ce96d6e84da"
  },
  {
    "url": "assets/js/212.25e85bba.js",
    "revision": "8b8b2ccf319be44d941c6267d823e5d4"
  },
  {
    "url": "assets/js/213.25471393.js",
    "revision": "7266474bf3276e03a8e1d4f5135588b6"
  },
  {
    "url": "assets/js/214.ccf98b46.js",
    "revision": "116d0a825cb3398f6c7cb9c687e9528d"
  },
  {
    "url": "assets/js/215.df32294e.js",
    "revision": "a216079477dd6ad5e27d1fce1d42cec6"
  },
  {
    "url": "assets/js/216.e219d0a8.js",
    "revision": "58f5c013246ffb4e858c0f29db5b1688"
  },
  {
    "url": "assets/js/217.bbbb5db2.js",
    "revision": "099bd1bd024f4bc28ce18c8e83283683"
  },
  {
    "url": "assets/js/218.aff2ef67.js",
    "revision": "63be8b3f5fc762560d500d0021e4f6ea"
  },
  {
    "url": "assets/js/219.696aca71.js",
    "revision": "feb624d88b462f1b024c7c0c7350e03e"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.aafae0e8.js",
    "revision": "06b0b85696578f221779ae8a2fcef152"
  },
  {
    "url": "assets/js/221.f98afa48.js",
    "revision": "325c392dbbecb8002681e2f348f3011e"
  },
  {
    "url": "assets/js/222.e0b0fe92.js",
    "revision": "dac8d19f72eb88d76fea4f982f686476"
  },
  {
    "url": "assets/js/223.147a86c0.js",
    "revision": "7b7dd84b7c65712520049371de1b76e9"
  },
  {
    "url": "assets/js/224.c24f7d78.js",
    "revision": "2abf10e943684fa6dd9d695dd0829627"
  },
  {
    "url": "assets/js/225.a911b319.js",
    "revision": "c8ecdb7b3d4e05751b7249b6d5054a79"
  },
  {
    "url": "assets/js/226.43cf02b8.js",
    "revision": "9b381a4497fdb319afd0f077fc3f3454"
  },
  {
    "url": "assets/js/227.3127f5f8.js",
    "revision": "64bede214be0657d41dcb5ffa03b8354"
  },
  {
    "url": "assets/js/228.2a4ac55e.js",
    "revision": "b8fc7118d2c00ea35356bbe98805897f"
  },
  {
    "url": "assets/js/229.4812f86a.js",
    "revision": "3a9349444bd62453d686f1571435e084"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.fb449300.js",
    "revision": "28d41c0819896c2b5901b8f90a1b407c"
  },
  {
    "url": "assets/js/231.19fb17d0.js",
    "revision": "e19d36d50a7faa0db8073e4abc443029"
  },
  {
    "url": "assets/js/232.5fb1e83a.js",
    "revision": "689f638d197621d69801dc76f8604c20"
  },
  {
    "url": "assets/js/233.d3c70785.js",
    "revision": "1706f20f596cd916e7a97ed4b2188800"
  },
  {
    "url": "assets/js/234.811d154a.js",
    "revision": "c038993257caf45945503555de39cafb"
  },
  {
    "url": "assets/js/235.607539ea.js",
    "revision": "ccc5a7c894d69f14d241129d9354efa7"
  },
  {
    "url": "assets/js/236.68902999.js",
    "revision": "a0447499d22125e9fad5c713c275eeab"
  },
  {
    "url": "assets/js/237.c3e15269.js",
    "revision": "3c550cb8f859fc034202b48727428eb0"
  },
  {
    "url": "assets/js/238.47c18c42.js",
    "revision": "0987676ec277a609119a11431385bf0d"
  },
  {
    "url": "assets/js/239.c9b82f70.js",
    "revision": "ade3433c978c8a8bbc2c61c585d445cb"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.da6a1ca2.js",
    "revision": "57bc7dae640a1cfbde7af3c2c992b0ca"
  },
  {
    "url": "assets/js/241.7110d8a0.js",
    "revision": "1ff4cc052b9dcb640371afc0a07c0b4e"
  },
  {
    "url": "assets/js/242.748f4071.js",
    "revision": "690b5c0e1d9b3b36296f15de184adda8"
  },
  {
    "url": "assets/js/243.910f0510.js",
    "revision": "8a9832f06e20250dfa65e8d8bbf628aa"
  },
  {
    "url": "assets/js/244.86e94e8f.js",
    "revision": "f08e1334eb3429bf4fcc0e0c8d206be0"
  },
  {
    "url": "assets/js/245.863fae84.js",
    "revision": "4c25b8c35289e363e348b6df9431c9f4"
  },
  {
    "url": "assets/js/246.0a899bca.js",
    "revision": "5495cb53e677162bec3e69b113aa51a2"
  },
  {
    "url": "assets/js/247.90687dfb.js",
    "revision": "77783a18f15a9264c0d9f40a78a15ae8"
  },
  {
    "url": "assets/js/248.2e1e6579.js",
    "revision": "71d49a3fb4b61db22e682d832b734430"
  },
  {
    "url": "assets/js/249.8a75ee37.js",
    "revision": "b65f8e929d60c3b7bc587ae157ae7c0b"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.4ed4fff6.js",
    "revision": "bc706fc6da71efabfcb51842d6d50aca"
  },
  {
    "url": "assets/js/251.62fb285b.js",
    "revision": "d2bbeecfaffdfb62de6c0a4aa9dd93dd"
  },
  {
    "url": "assets/js/252.921bf97c.js",
    "revision": "5b2aca080e0175c4ed6b252cef73e766"
  },
  {
    "url": "assets/js/253.36a8368d.js",
    "revision": "e8c250a2515403999fe23ed271868353"
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
    "url": "assets/js/61.bae0851f.js",
    "revision": "edc6dbc9e894c9a309d7664526ab15b2"
  },
  {
    "url": "assets/js/62.65001b7c.js",
    "revision": "87cbb99930453617343df2a63e53bf29"
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
    "url": "assets/js/73.0581cc53.js",
    "revision": "43ebc1eabc7cea00292f3b6419655e46"
  },
  {
    "url": "assets/js/74.aff0e133.js",
    "revision": "8f9dc8cd96b58025c93242ae8bc45a4f"
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
    "url": "assets/js/app.84f3030f.js",
    "revision": "722a6b4120d331d668f86ae6e1597866"
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
    "revision": "c2b5a57a230bf3a0f755e7f4d46c365b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d56fbe0ae19100496ecd277978a1036a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "50f7086f7ce5e687a6e3dde8bd95abc4"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4bfdd5457a840e42df89a2702d2bd6a6"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e87c457ae3f182663768e596df1e4c2c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9866cff797b62ee3e5d058354fad409c"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "30139d68eec7ce3702ce00b300ff8e4a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "24bdfb9876f205cc6827b3e1634715db"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "5ea583ec6b46ff3a50ac6bc89143d45d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f01e4faba5b7dd89a9e1b700fb4d6193"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ed1fc1e0745aa4c6a924583217ed963c"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "24a06227bbc8b19b7599db2c17b60637"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "c8c18beb6f89172448d79eb2a7b1bcd5"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "b69c8cc9f778216d92a0cb8eb8377352"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "07de463ddbb5c7906e12139bdc390eb2"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "f8db53be648a4e828f59298683b50719"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "539b480c6d8ea061b6669d8760776812"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "a7d0471af2976c9bb8cb69c0e53fab14"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e44d49d9364af5591f94a9fe5a4bb9ab"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "426ae4fff66d1045ec5a2d0e5cc0fb69"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "ccf94ee9086809af8f531da9851b16b0"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e8b8a41c5169f3a006894480cab34fb9"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "25af28fa38dfd86abd6e7891de893f7c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "6c5c536fe68c87cb411d9962f5c6d784"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "8f779d11c8fec777771578ec38b51487"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "66a770a015bce603a37d33ff1d7eb6ff"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c4c5002d4b8639a1a9cab3ee88b137f3"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "cea9e50bde5bbd39e0ef67de58917c56"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "815f7a555046b2de82f16c13d00afdc3"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "537313aff9ea7eda5eb876a11c22c956"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "4c6533aca414d67038d8da24eb62b333"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "b7dc277f09a942414916e23dff51e83e"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "8d3c690ae527b3ef0e6e762d2b4f1d3f"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "70313266a65fca63aebc9e1d6469e18d"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "485ea1d8a55e6a10af1d966e45e427fc"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "8ca8187ead27504fb978d393e1b6f447"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "7357d8466913ac1255ca2b5fbb627aa4"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "8df3e9c316d5dcb0c23f3389ed4f6d8a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "54ce7766d3d55b4e018f2b3fa631698e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7ce460530179411205c082c9efc32476"
  },
  {
    "url": "book/index.html",
    "revision": "cf086f078fd9071966c6f652a0caa24b"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "50e551c9c249f7c0478ee49648bff3ab"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "e1763cb075f418638cd896c1bbb60eef"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "021edd701fa1a4eb227cc03be334fc60"
  },
  {
    "url": "c/audio/index.html",
    "revision": "59c49b6c81e020569bb90ecde3cfabf5"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "84a403b84e0eb396607295731c31e642"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "8e185619dbbc292c2227de2abdaef123"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "2e4300142324d1807436753b93fc8d5a"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "2052660ebd71843d51ef0cd01bd28b9e"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a0af2379a1d4ffcba53ee3d133d123eb"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "1bce4aa104bddfb8c674b5501bbed828"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "86fdd77c97038d5d29fb8b982530ac87"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5b2a825150fe292f7ea907fe2387c2e2"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "84bdff67d8228066e7d27d819abf3899"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "e8aaeafa5786a9bca50c145987461acb"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "26f4402bdcd0f241abb360ba02a495de"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "f377684a07cad4d55f3618855e52a5a7"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "d8bb4c3498e1573b19898773171c8125"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "1660fdc4fa56cb94a250e5abd65cf8cf"
  },
  {
    "url": "c/program/index.html",
    "revision": "095a8ac4fab9c09a5affc9a9552d509b"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "7beeac13cf097284db8e5008e32df26c"
  },
  {
    "url": "categories/index.html",
    "revision": "df8a7450a5cfa1481aeed46ad034f021"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "0e077e52bd8d50ade1d3afc4014d7474"
  },
  {
    "url": "figma/index.html",
    "revision": "139de151c5acb3d82e9b258326f7c59e"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7696e6a14f50ea750b5d1ab684f85a70"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "2dcd3c3a80518340a789f5f1d2255415"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "5ef9ba4479daef623eaa7db18e6cb021"
  },
  {
    "url": "flutter/index.html",
    "revision": "595a346e7f78928d437a719e876bc441"
  },
  {
    "url": "flutter/point.html",
    "revision": "7f1ae0b6e6ffbcf24a29faae80c025d3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "aad28fb2f038a3e8d1e2695bad4c02dd"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "7a7f05233a11b8999b73f5364f36f1d5"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e5a93fe1449d7a09838753274d2d0c9d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "775f607853d29be9e66f8938c60bf721"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d8b909ab377bd69f13258a537e178c38"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "dc7d6c44b66dbe49d4d1de206d780fee"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a15d3bfe6665942ae8ff6f1480bb75fa"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "f1ddf538565999001154a6327813bace"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d6a268e6e5b06fa0fde4aa1177ae210e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ef5b541820fb7892db615e86e70f8b99"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2621da0bc2363aa81b5b493e041f7c13"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a02191db9740dd9c47edc7776306468c"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "920f41f976eab7ff0d21778fe08c66f1"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c42024b0bc4f3753ab9f1158910abc29"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "3bd5d34e092cb94400e301f30d54e50f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "4e471cc1e3048101035e2b9a7b2bdc0e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "7866c9f610a68cc40733860a4ebe36fc"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f56db81cba7db34596f1c494f4e29144"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "bf34744156867c6b80ed0abe2c1ffaa4"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "62c55607438b8ec7ea712f4854387f31"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "df88f00751f0c43425e24675119d3e69"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fe653f429b34ecb16fc8479da6e09434"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "6a19c39680380c8a3254aac4a7dfb051"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "1065cc3153d7a6c9e63294aa6726bbdb"
  },
  {
    "url": "haskell/index.html",
    "revision": "a560dc352826f212bd9e7ae198e8c760"
  },
  {
    "url": "index.html",
    "revision": "6f5e4b265f65425b659a06a26548f244"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ce70adf019af4f0e2913282830a674b0"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "6ec741ac291b72bc62e2c5a0951af481"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f38d3e9a3e562dea3a3f9951a79fdba5"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "6527bb0ba7ecb3d58fb724d8c62f5f99"
  },
  {
    "url": "python/index.html",
    "revision": "e24f41e779d7c4880864b3e613a716bf"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "d6bd7a92b50c71ed1e546e89e9316309"
  },
  {
    "url": "python/python-file.html",
    "revision": "d1626a0861f173a3e0400d6df641ad7f"
  },
  {
    "url": "python/python-function.html",
    "revision": "89220f53bb21bd990602826acefd6005"
  },
  {
    "url": "python/python-string.html",
    "revision": "f0cbe1199457e45f4526915221987183"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "ab29adfc8d830a2e34fa1b073eca274b"
  },
  {
    "url": "read/index.html",
    "revision": "429c396d400857d4f6974ab6efe29883"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "27f856d0d90cd5822003fb6580b8258c"
  },
  {
    "url": "swift/better/available.html",
    "revision": "15668af718134105c61b8b8793f58fd9"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "64f1a972c043d655ee3d9d229f39b266"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b7dfb5e532727afabd23868ccf78ad92"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "0fb32b88c55d5d4a81fdf6c5f5537a13"
  },
  {
    "url": "swift/better/di.html",
    "revision": "d4a44f328c20a2b3acae4e9cd1266aaf"
  },
  {
    "url": "swift/better/index.html",
    "revision": "f2b29f5dd39636e984b7d66034d80dca"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ecd780e917694cc3ed1a91a3fa2743bb"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2d99f308bdf0f72a86171690bac9b188"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "789bbd543000c06a11cbb3559859acb8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "6ccbfea978cbea6417a7163e57a9e594"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0fc5b737e1f0120111c4787549986710"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "3dc0e6e64a25dafcec0b683b9843a02b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "f9c8b8989ca38501a3ecd458c60a082d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "83d170db44807ebffeea6edffafd2c90"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "8d7cf2e3a1976fc7eb203a06d127f7ee"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "cf515b0e7d6baf3ebf1fd03896ca4931"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f675098699c095c5e75f1a34c72b82a7"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "ecce1f903f27c57cbd768efeca2e5ced"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "8053a20f4b8cc6db0d7441b145379251"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d46bab0a674904b1b02485992679d18b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "48af2bbf6fe262fb6cc62b3e5ef47be8"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "dc967ec28a893006f27c861cbf0d357f"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "86b4512d25b35deb2a8de4dcc4cad5b8"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "3bc5971a85cf5f4fc9ae152d6859c25c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d4f728551f34355d02d83a1868587a9d"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "8e09fff0247fbe109ad3a6b83fc8b056"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "a1e5ebdabdfc39d775b65399d12011cf"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "fe3dc5964551f35b0de1efcfdaf802ae"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "f0a3b5b201d29b796a7bb586bdc7086d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "91d42e5e674e93e5e843ca21eec8aa09"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "b39895f5a513af4f96d51407186ef427"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "a78f36c850a8f51a2ddfd88874bba9bf"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "cc171e7cd219438494e4215849c3bdad"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0e22414edf7ca083099ae5267c43bc61"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "93b5b7c542c916507a2729a3f195a467"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "85a17f71b91d9b705bdd2c3093f55cc7"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9ec27cd46160535ac6f42ad95a3e0744"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "7f68c0171f6c2777d7efa215dedac38d"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "984526b66e154faab56b6f67c4b22a83"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e9ef1855c11fc2f285c82f93db5feb64"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7ce3b3b5c3e9dc7c46d6968dfd8fb7e9"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "cb41f202a6410cd850d1c51655de48aa"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a9b1af172af94b2e179a72f613520c43"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "26bc3e3dfb6694e19cf8dabba7e301f7"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "c31854a75ff5db2a588d3df2e76c3182"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "330564715a91e1507c099278e2914309"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "3abf1766d94a106bb3e91c3bdc8740f8"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "174d2eef9e323c0aaba5f2f8aaf7efba"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "236f531ce1efd6634fbab11c90b71528"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "4f0be9a40c765e287177b1e3b8e89825"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "dd105aa920524ac377860436c7a0256d"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "225b72154850329ff557b2a509a3320a"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "85ff47052e3841636b65f3012e5fcea4"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "01ed2074ea2d004cff2237f464215dfe"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "6a8ac2023d7d75f8d94ac5ba37eaed8c"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "b21fcf938e0a306a08d1c146720c95ad"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "8dd65222015bf253406af6d885ecfc06"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "48a7a92d5804b9e9f0d3e2b539c8fd9b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b28e30865c8e895512dace6902b8c044"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "76ba9fbe6f94762e006d0c61edc623b2"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "cdc0389830b1b633b09882e64d7b91dd"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "4c0930f702553b9fb314ed47de670bfc"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "0151eb5f425b19667e39f611d015e140"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e627f2ca2a46fb82779befdb156d6c19"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "938fd59c3e81224c43556518d691b551"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "9d10a865338efc22c8e0f6b9eb8da5a1"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "344253f3435ea5b96cf8c9cad913ba5e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "3c6179c1e69523a4582f9377d9b4c635"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0a266cfbbdcb23898251286212d2dddd"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "b50bdfb0944125194584ca8e06645c46"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "98c53998b4973e96394f86c034de2521"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "32d37d40ac09f0abbe7337bad98a7266"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "5e88893eb8cbb6786d2304c0d55190ad"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "51734fde289a0d9a9812a32c53692aa6"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "b84ac8ceee815ff3aec8fa85930cf414"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "55bd9425228f41c8aab15b4a6a0d6972"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "9bc53bd8bb4a69f3ba9d769018247c4d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c9d70da3c416c8cbc14594b916a2e949"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "30cb498250504946530e9b47c0ac8a02"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "19ed637f1f80d5cd7691d94561025bec"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "35318e1eb2736e9029f20a012d78f232"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b84c9e5b9eef66d86859a387d49f35ba"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "cbf5cad712dcdde4934d697d8abf2500"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "8944d4915813f84e6dc6943d04d2d764"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "68da17cb7a3d334abcebf37ad896070e"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "6594dace062bedd673371ed3d2be3cf3"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "75628984cfdffb78890482efae61ab5f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e9dbe83613b5c0c2ca64d587d53c994b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "0701b83100000761a30a58d80a7f5293"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b725b6743b462ca148ce439f0efd81e3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "20ee8b606d8cc121f72cd4fbeff1142a"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "fe5349499a8f4c9f48353e263a3f392f"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "02201e8959a662c1ebfab02e7f30dd79"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "46a47730dfff59855c08fe18a2cafff3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "682611f48d0c09bee7ba1914b2c0b350"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "37b4d29d82c7a5ac986163050e102c0d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4f83ce1cc011116fefc258017e03d5b8"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "02ff5123eb8c18e403f4c53ee0d8464d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e394271701755d377e7a1f6b65361f21"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e0ea0a367d37c4e468c12b45f690415a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "d3a0246fe090b6ea642a70bf89adba71"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a508b4d73c8b0c38378d0922a67bddd2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "24ff2f0a6a2b9ead352674e084f930b1"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "4996a5ef5f4dbe8210ce3c231266883d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "403bd5686993286757c331d83477bcb5"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b769cff46d68c72ec1bb87674a49beab"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "5cc06e9b123a78489f039ef9fe92e600"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7a5022468cff9bfdbe7a1beea10cd6c0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1a839b2ab85b5232b7a1bff1456378e0"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4b330114912785b505345cc7c291aa20"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "776367618db34ad8a1910fa96b8f751f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7c1a3b3e7afe0602dd0994cd57c8feae"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "753610a537e6a9532a9e3b4ea0863f1a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e9c9ea8a5157ef4242868aff08c925d2"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "759d334241b9281df882fc1db18de498"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "92203507f8b870eba8124689b3054db8"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "e2d90b3914192dd4d4aa2980aac8c340"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "6cd0970632b9f2f0ccbd0a161573e829"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a701754d87f9fc66da0c14061d876d2e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "c0403f10ef57f5416ad3b8c4f35b3f97"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "925ba003531844046df4a04eaaa388c2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "102d0b83fe579f97f3d5ca7c2a0c9c75"
  },
  {
    "url": "tag/github/index.html",
    "revision": "5e9baf9f52409efa57c16c2ec0ea33a7"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "093d44adeea5120ce0fa647a8cc695d2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0bd4615b831314cb39f224cf3fa620de"
  },
  {
    "url": "tag/index.html",
    "revision": "9068f57d4078f7e551d489011bf39257"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f5d95905ed785e1ba1c92a9a2bd485b3"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "987db3aa1ca360a344aebb7c1dd04fe6"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "d87d5396cd6a166b98011f05e638fa4b"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "d1ff7709370de1240a44bb4d2ae01aea"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "c8bc01c343fcce2c4e579abdf988b046"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "5dd2f0625358ac698fe9bd4b20388aba"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "9a71e940084c1b1c9424ac40f3199f18"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "eb8022611ac53ed88846c7740d3b5f8f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "06ac36cc7406e47d7d33b5b6a9364210"
  },
  {
    "url": "tag/json/index.html",
    "revision": "9e23c3739a1969770439b75adf12e0e9"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e915f007cd56b44ae57a72cfa0cfe67a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f2b0ab403443100da9a7247bfeb34342"
  },
  {
    "url": "tag/python/index.html",
    "revision": "afa8a87a720c9f69576c1a09021a42e3"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3a3cd7629c286e915e9ce43e2126d342"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ff30acb4796b159802c78af25923d892"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "600bc2ae644efc0c03141d6514fff1f8"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "850e5a48e0147366d593901e5abba85c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "4dbc270095831e48e7ac0e7734358a3e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "d286cd2194b573a57bd0e6ba73e3a9c0"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "2b3b8912f86e2a231cff2a92cb37ed4e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f1364d581b12aebacfa5e842f75639f7"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "35a9776a153afa3298329d9ef6a9251f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "bf88e14376f9a8e1862219f90b6d6817"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "5bb708598043b64076b41fadb13fa818"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "e6ecc9fc326235f14cb8de6ddefa7831"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2d0317c5f3ce68391350bb0b941498c5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b35ab5f606d33a8a80686a6bb1c4c403"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "fad893a61bece1310dd490cd618b873d"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "5ce1a55583c10eb4a06722e34d9618f5"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d5a40fadb51a06f9a2d811711d18cf0b"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9f1271c86472dbb84d9c5f3bb14269b9"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "19b3b6ccc7ec28bfea11adc014c632ee"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "79d874c36fdd073231b5e46a631aece4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "863e156367b4f3c2535f67cf2967c156"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "99e2da4e4ddb3435167ba4513cdfd619"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "a70493f8f6e469c03c3178d6330b5bf9"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "abd521bcb93c5bd8cec76596cd636e19"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "68e691e5ad25989459cfd72eea30efb5"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3ea6253aada8cb5f4cc73b17fc042f2e"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "e816b589b88c81c763a4a443745061b4"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fe6dc947213aee2a3c1c7189aa6a7c0f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "dbe17dda003db7bf458c8d7c75359381"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "2748b1aafa5b6a15e10acae0715ada72"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "2655381b803d6b706f629fed33b50ca8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "188e3c5d4100ad673c7538e54a82d3cf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2836be10fd49c07c8c5ea6f099c76296"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "97c3674fc3ed554ebc5deb49a5a3e346"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c44fd48451c24557e4c6a218634cb344"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "5215ca48dfeb17aef2c7a83118803f1f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5f9c5a011b1bee6e7ed2695c36b50e81"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fc8bbeee6d15bc3ba50c3be3441b875d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "55e6c7cafd6de48d66a3f52591440f7e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "be734d37f31001189bb5d7cd7b5f5cc2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fb41026fe0f8f5dea1a0be6f74f16ca5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "42271249ee9c6d825eb9ddde161da011"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "01c18b15925de862bca81597b696f3f8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3398a440bbfa65e20b00dfd1671b8d94"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "b7b53358ea635f500c4121a89cf5b659"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "22b7d84a4993d8d3858d099534befad0"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "db08c7b25b1bba0765b6e03c31436d35"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "49bbf202c50eb0fd688c827d8d725b3a"
  },
  {
    "url": "timeline/index.html",
    "revision": "2cb0da01c13cb80aaae19a19724baf8b"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5db4f8a40461d099caf8d390f7a41bd2"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "c4ee2a89a9f3410f9a49e45b704d74a2"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "ad562d07f715980c61038aaa9a4bf132"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2b884f34c712716fd0e662ada0cec625"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "05489f4b2c6c0bf5dbc17f72f6081be6"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1fe910b13ec1c5d7dbb793f65ed726b5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "31e48fd7701b8e76f356da0f27722890"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "92e7f23bcd418df8f5e30950083a2847"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "807822c7747e758f401b5cbfe0f243bf"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "8f21961c83701ba2e6dc8f339938eb22"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "109642299b361b8ff2d22e2b9979911e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "667353c955d87c93c12fbafd786ba0c9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1427bb31fa1f0b92159e65c4c297afaf"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f3cf601627a0d58943c3ab9e68037446"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "206f343ca424e9b23ba8a9f5aea235e4"
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
